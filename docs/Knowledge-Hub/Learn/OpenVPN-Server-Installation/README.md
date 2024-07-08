---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document describes the process of how to install and configure an OpenVPN server on Linux/Ubuntu systems.
tags:
  - Deployment-Guide
  - WisGate
  - OpenVPN
  - Linux
  - RAK7249
  - Ubuntu
header:
  title: OpenVPN Server Installation
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general-banner.jpg
posted: 04/07/2024 10:31 PM
---

# OpenVPN Server Installation Guide (For Ubuntu sys)

- [Install OpenVPN](#install-openvpn)
- [Generate CA Certificate](#generate-ca-certificate)
- [Generate Server Certificate, Encrypted File and Private Key](#generate-server-certificate-encrypted-file-and-private-key)
- [Generate a Public Key](#generate-a-public-key)
- [Generate Encrypted Files](#generate-encrypted-files)
- [Generate Client Certificate and Key Pair](#generate-client-certificate-and-key-pair)
- [Configure OpenVPN Service](#configure-openvpn-service)
  - [Configure OpenVPN Service (Optional)](#configure-openvpn-service-optional)
- [Adjust the Server Network Settings and Enable IP Forwarding](#adjust-the-server-network-settings-and-enable-ip-forwarding)
- [Start the OpenVPN Service](#start-the-openvpn-service)
- [Create a Client Profile](#create-a-client-profile)
- [FAQ](#faq)

## Install OpenVPN

When installing the OpenVPN server, it is recommended to switch to superuser mode to ensure all dependencies that require additional permissions can be installed. You can do this by logging in as a superuser using the command `sudo su` or by using the command `sudo` before each command. In this guide, the second option is used.

1. OpenVPN is a package in the Ubuntu software repository and can be installed directly with the following command:

```sh
sudo apt install openvpn
```

2. In addition, you need to install the auxiliary tool EasyRSA, which contains a series of scripts and configurations to help you quickly generate the certificates, and public and private key pairs required by OpenVPN. EasyRSA is a set of scripts, so you can clone its GitHub repository.

```sh
sudo apt install git
git clone https://github.com/OpenVPN/easy-rsa.git
```

## Generate CA Certificate

1. Enter the script directory of EasyRSA.

```sh
cd easy-rsa/easyrsa3
```

2. Create a backup of the `vars.example` file.

```sh
cp vars.example vars
```

3. Find the following parameters in the `vars` file, uncomment them, and then modify them according to your own needs. Do NOT leave any field blank. Save and exit the file when you are ready.

```sh
nano vars
```

Look for the following lines, uncomment them, and modify as needed:

```sh
set_var EASYRSA_REQ_COUNTRY    "US"
set_var EASYRSA_REQ_PROVINCE   "California"
set_var EASYRSA_REQ_CITY       "San Francisco"
set_var EASYRSA_REQ_ORG        "Copyleft Certificate Co"
set_var EASYRSA_REQ_EMAIL      "me@example.net"
set_var EASYRSA_REQ_OU         "My Organizational Unit"
```

4. Execute the following command to generate a public key:

```sh
./easyrsa init-pki
```

5. If the following information is generated, it means that the generation of the public key system is successful:

```plaintext
Notice

'init-pki' complete; you may now create a CA or requests
Your newly created PKI dir is:
* /opt/openvpn/easy-rsa/easyrsa3/pki


* Using Easy-RSA configuration: /opt/openvpn/easy-rsa/easyrsa3/vars


* The preferred location for 'vars' is within the PKI folder.
To silence this message move your 'vars' file to your PKI or declare your 'vars' file with option: --vars=<FILE>

* Using x509-types directory: /opt/openvpn/easy-rsa/easyrsa3/x509-types
```

6. Create a CA Certificate.

:::tip 📝 NOTE
If you don't want to enter a password every time, you can use the `nopass` parameter to cancel the password. In the output, you will also be prompted to enter the public name of the CA. You can use the default one by hitting **Enter**.
:::

To generate the CA without a password, run the following command:

```sh
./easyrsa build-ca nopass
```

7. If you see the following information, it means that the CA certificate was successfully generated:

```plaintext
* Using SSL: openssl OpenSSL 1.1.1f 31 Mar 2020

* Using Easy-RSA configuration: /opt/openvpn/easy-rsa/easyrsa3/vars

* The preferred location for 'vars' is within the PKI folder.
To silence this message move your 'vars' file to your PKI or declare your 'vars' file with option: --vars=<FILE>

....+++++
.+++++
You are about to be asked to enter information that will be incorporated into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN. There are quite a few fields but you can leave some blank
For some fields there will be a default value, If you enter '.', the field will be left blank.

Common Name (eg: your user, host, or server name) [Easy-RSA CA]:CN


Notice

CA creation complete and you may now import and sign cert requests. Your new CA certificate file for publishing is at:
/opt/openvpn/easy-rsa/easyrsa3/pki/ca.crt
```

Now, the `ca.crt` file in the `pki` directory and the `ca.key` file in the `pki/private` directory are the public and private key pairs used by the SSL certificate.

## Generate Server Certificate, Encrypted File and Private Key

:::tip 📝 NOTE
The server’s Common Name in the following example is the default one. If you also used the default name, you need to hit Enter when prompted to type a Common Name.
:::

1. Generate the server certificate, key, and encryption files.

```sh
./easyrsa gen-req server nopass
```

If you see the following information, it means that the certificate request file was successfully generated:

```plaintext
* Using SSL: openssl OpenSSL 1.1.1f 31 Mar 2020 2

* Using Easy-RSA configuration: /opt/openvpn/easy-rsa/easyrsa3/vars 4

* The preferred location for 'vars' is within the PKI folder.
  To silence this message move your 'vars' file to your PKI
  or declare your 'vars' file with option: --vars=<FILE> 8

Generating a RSA private key
	+++++
...................................................................+++++
writing new private key to '/opt/openvpn/easy-rsa/easyrsa3/pki/9a43662d/temp.9b3278ae'

You are about to be asked to enter information that will be incorporated
into your certificate request.
What you are about to enter is what is called a Distinguished Name or a DN.
There are quite a few fields but you can leave some blank
For some fields there will be a default value,
If you enter '.', the field will be left blank.

Common Name (eg: your user, host, or server name) [server]:

Notice

Keypair and certificate request completed. Your files are:
req: /opt/openvpn/easy-rsa/easyrsa3/pki/reqs/server.req
key: /opt/openvpn/easy-rsa/easyrsa3/pki/private/server.key
```

2. Copy the server private key to the OpenVPN configuration file directory.

```sh
cp pki/private/server.key /etc/openvpn/
```

## Generate a Public Key

Since we use one server to act as both the CA server and the VPN server, you need to sign it yourself, which will generate a file with the same name. Therefore, you need to rename the server request file `server.req` first.

1. Rename the server request file with the following command:

```sh
mv pki/reqs/server.req pki/reqs/server2.req
```

2. Import the request where `server` is the server’s name specified earlier:

```sh
./easyrsa import-req pki/reqs/server2.req server
```

3. Use the following command to issue a request:

```sh
./easyrsa sign-req server server
confirm: yes
```

:::tip 📝 NOTE
The first `server` here is the request type, which can be either `client` or `server`, and the second `server` is the server name specified earlier.
:::

4. Remember to change the file path here, and copy `server.crt` and `ca.crt` to the OpenVPN configuration path:

```sh
sudo cp pki/ca.crt pki/issued/server.crt /etc/openvpn/
```

## Generate Encrypted Files

1. Generate a Diffie-Hellman key file to enhance the VPN's security.

```sh
./easyrsa gen-dh
```

```plaintext
* Using Easy-RSA configuration: /opt/openvpn/easy-rsa/easyrsa3/vars

* The preferred location for 'vars' is within the PKI folder.
To silence this message move your 'vars' file to your PKI or declare your 'vars' file with option: --vars=<FILE>

Generating DH parameters, 2048 bit long safe prime, generator 2 This is going to take a long time
.....................+............+..................+.................+.+.....+......+.........................
DH parameters appear to be ok.


Notice



DH parameters of size 2048 created
at: /opt/openvpn/easy-rsa/easyrsa3/pki/dh.pem
```

2. Generate Diffie-Hellman signatures.

```sh
openvpn --genkey --secret ta.key
```

3. Copy the generated files to the OpenVPN configuration path.

```sh
sudo cp ta.key pki/dh.pem /etc/openvpn/
```

Now, all the files on the server side are generated and copied to the appropriate OpenVPN configuration path. 

## Generate Client Certificate and Key Pair

1. Prepare a directory to store client files.

```sh
mkdir -p ~/client-configs/keys
```

2. Modify the permissions of the directory to ensure security.

```sh
sudo chmod -R 700 ~/client-configs
```

3. Generate a client request file.

```sh
./easyrsa gen-req client1 nopass
Common name：Enter
```

:::tip 📝 NOTE
- Considering that there may be several clients, it is called `client1` here. Of course, the name can also be modified.
- When prompted for a Common Name, hit **Enter** to accept the default name.
:::

4. Copy the generated key to the client directory for the next steps.

```sh
cp pki/private/client1.key ~/client-configs/keys/
```

5. Modify the name of the client request file.

```sh
mv pki/reqs/client1.req pki/reqs/client.req
```

6. Import the request file.

```sh
./easyrsa import-req pki/reqs/client.req client1
```

7. Issue the request.

```sh
./easyrsa sign-req client client1
Confirm：yes
```

8. Remember to change the file path here, and copy `client1.crt`, `ta.key`, and `ca.crt` to the OpenVPN configuration path.

```sh
cp pki/issued/client1.crt ta.key pki/ca.crt ~/client-configs/keys/
```

## Configure OpenVPN Service

1. Copy a sample configuration file.

```sh
sudo cp /usr/share/doc/openvpn/examples/sample-config-files/server.conf.gz /etc/openvpn/
sudo gzip -d /etc/openvpn/server.conf.gz
```

2. Open the configuration file.

```sh
sudo nano /etc/openvpn/server.conf
```

3. Find the `tls-auth` configuration in the file. If it is commented, uncomment it and modify it to look like the following. Also, add a `key-direction 0` configuration:

```conf
tls-auth ta.key 0 # This file is secret
key-direction 0
```

4. Find the `cipher` configuration in the file. If it is commented, uncomment it and modify it to look like the following, and add an `auth SHA256` configuration:

```conf
cipher AES-256-CBC
auth SHA256
```

5. Find the `dh` configuration in the file. The default should be `dh2048.pem`. Modify it to the following:

```conf
dh dh.pem
```

:::tip 📝 NOTE
Be sure to turn on the `duplicate-cn` option if all clients use the same certificate and key to connect to the VPN. Otherwise, only one client per certificate is allowed to connect to the VPN.
:::

To enable this option, find and uncomment the following line in the configuration file:

```conf
duplicate-cn
```

6. Find the `push` routes configurations in the configuration file and add the following line to push the 172.19.174.1 segment to client 10.0.8.x:

```conf
push "route 172.19.174.1 255.255.254.0"
```

7. Find the user permission configuration in the file and uncomment it. This will ensure the OpenVPN process runs with lower permissions, making it safer on Linux systems. Modify the file to include the following:

```conf
user nobody
group nogroup
```

### Configure OpenVPN Service (Optional)

:::tip 📝 NOTE
This is an optional configuration. It will be more convenient to follow the steps below after completing the OpenVPN service configuration mentioned above.
:::

1. To pass all traffic through the VPN, find and uncomment the following lines in the configuration file:

```conf
push "redirect-gateway def1 bypass-dhcp"
push "dhcp-option DNS 208.67.222.222"
push "dhcp-option DNS 208.67.220.220"
```

2. Modify the default port number and protocol.

```conf
port 6666
proto udp
```

3. If the protocol is changed to TCP, you should change `explicit-exit-notify` to `0` to avoid errors. 

```conf
explicit-exit-notify 0
```

4. If you didn't use the default names for some of the previous files, don't forget to update the configuration file accordingly. Ensure the paths and filenames for the following lines match your setup:

```conf
cert server.crt
key server.key
```

## Adjust the Server Network Settings and Enable IP Forwarding

1. Open the configuration file.

```sh
sudo nano /etc/sysctl.conf
```

2. Find and uncomment the following line:

```conf
net.ipv4.ip_forward=1
```

3. You can check the current configuration with the following command:

```sh
sudo sysctl -p
```

:::tip 📝 NOTE
If your server has a firewall, you need to configure it to allow the VPN to pass through.
:::

## Start the OpenVPN Service

1. Start OpenVPN. If there is no output, OpenVPN has started normally.

```sh
sudo systemctl start openvpn
```

2. If there is an error, you can use the following two commands to debug the error:
   
```sh
systemctl status openvpn
```

```sh
journalctl -xe
```

3. If OpenVPN starts normally, don't forget to configure it to start on boot with the following command:

```sh
sudo systemctl enable openvpn
```

## Create a Client Profile

1. Create a directory to store the generated files.

```sh
mkdir -p ~/client-configs/files
chmod 700 ~/client-configs/files
mkdir -p ~/client-configs/keys
chmod 700 ~/client-configs/keys
```

2. Copy the sample configuration file.

```sh
cp /usr/share/doc/openvpn/examples/sample-config-files/client.conf ~/client-configs/base.conf
```

3. Open the configuration file and modify it as follows:

```sh
nano ~/client-configs/base.conf
```

```plaintext

# Server IP and Port

client
dev tun
remote server_IP_address 6666
# protocol
proto udp
# permission
user nobody
group nogroup
remote-cert-tls server
# certificate file
ca ca.crt
cert client1.crt
key client1.key
cipher AES-256-CBC
# This line does not have to be added
auth SHA256
# This line needs to be added, 0 on the server, 1 on the client
key-direction 1
#If it is to configure the client file and the /etc/openvpn/update-resolv-conf file exists in Linux, uncomment
# script-security 2
# up /etc/openvpn/update-resolv-conf
# down /etc/openvpn/update-resolv-conf
#If not, no action uncomment

```

:::tip 📝 NOTE
Remember to change the `server_IP_address` placeholder with the public IP address or domain name of your server.
:::

4. Generate the client configuration file, following the next steps:

- First, create a new file.

```sh
nano ~/client-configs/make_config.sh
```

- Copy the following content into the file and save it:

```sh
#!/bin/bash
# First argument: Client identifier

KEY_DIR=~/client-configs/keys
OUTPUT_DIR=~/client-configs/files
BASE_CONFIG=~/client-configs/base.conf

cat ${BASE_CONFIG} \
<(echo -e '<ca>') \
${KEY_DIR}/ca.crt \
<(echo -e '</ca>\n<cert>') \
${KEY_DIR}/${1}.crt \
<(echo -e '</cert>\n<key>') \
${KEY_DIR}/${1}.key \
<(echo -e '</key>\n<tls-auth>') \
${KEY_DIR}/ta.key \
<(echo -e '</tls-auth>') \
> ${OUTPUT_DIR}/${1}.ovpn
```

- Edit the permissions of the generated file.

```sh
chmod 700 ~/client-configs/make_config.sh
```

- Run the script with the client name that corresponds to the name used when generating the certificate and key pair (e.g., `client1`):

```sh
cd ~/client-configs
sudo bash ./make_config.sh client1
```

:::tip 📝 NOTE
If all configurations are done properly, a `.ovpn` file will be generated in the `~/client-configs/file` directory. This file can be copied to the desired location.
:::

## FAQ

- To check the status of the OpenVPN service, run the following command:

```sh
systemctl status openvpn
```

- To reload the OpenVPN service, run the following command:

```sh
systemctl restart openvpn
```


