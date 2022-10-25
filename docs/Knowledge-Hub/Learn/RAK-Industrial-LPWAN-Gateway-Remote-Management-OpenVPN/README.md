---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document introduces a remote management of RAK Industrial LPWAN Gateways based on OpenVPN
tags:
  - Deployment-Guide
  - WisGate
header:
  title: RAK Industrial LPWAN Gateway Remote Management - OpenVPN
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/gateway-remote-management-openvpn.jpg
posted: 02/29/2020 10:30 AM
---

# RAK Industrial LPWAN Gateway Remote Management - OpenVPN

* [OpenVPN Server Deployment](#openvpn-server-deployment)
* [OpenVPN Management Client Set-up](#openvpn-management-client-set-up)
* [OpenVPN Client Set-up on LoRa Gateway](#openvpn-client-set-up-on-lora-gateway)

This section introduces a remote management of RAK Industrial LPWAN Gateways based on OpenVPN. A virtual private network (VPN) is created where a server is deployed that both the gateway and any number of customer devices such as PC and phone, can connect via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE).

Thus, by connecting to the server via a remote client, the user can remotely manage the RAK Gateway from any point, at any time.

## Network Topology

Figure 1 below shows the interconnection of gateways and the end-user using OpenVPN server.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/network-topology.png"
  width="100%"
  caption="Network Topology"
/>

# OpenVPN Server Deployment

Before proceeding to this tutorial, make sure you already have an AWS EC2 Instance with Ubuntu Server 18.04 LTS running on it. Else, go back to [Amazon Web Service Configurations](/Knowledge-Hub/Learn/Resources/Amazon-Web-Service/#configuring-the-instance) section.

Assuming that it is already done, follow thoroughly the steps provided below:

1. Install OpenVPN.

```sh
sudo apt install openvpn -y
```

2. Download a certificate management tool suite: Easy RSA.

```sh
wget https://github.com/OpenVPN/easy-rsa/archive/v3.0.6.tar.gz -O easyrsa.tar.gz
```

3. Initialize Easy RSA to generate a CA certificate and a server certificate.

* Extract and copy easyrsa to /etc/openvpn/easyrsa/

```sh
sudo mkdir -p /etc/openvpn/easyrsa
tar zxvf easyrsa.tar.gz
sudo cp -rf easy-rsa-3.0.6/easyrsa3/* /etc/openvpn/easyrsa/
```

* Initialize the pki.

```sh
cd /etc/openvpn/easyrsa
sudo ./easyrsa init-pki
```

* Generate the CA certificate.

```sh
sudo ./easyrsa build-ca
```

:::tip 📝 NOTE
Enter the required information according to the prompt. When asked for a password, make sure to write it down as it will be required later on.
:::

* Generate the Server certificate.

```sh
sudo ./easyrsa build-server-full server nopass
```

* Generate the DH parameters file.

```sh
sudo ./easyrsa gen-dh
```

* Generate the crl.pem file.

```sh
sudo ./easyrsa gen-crl
```

4. Generate the OpenVPN Server configuration and running files.

* Create the OpenVPN server configuration file and fill it in. The file must reside in:

```sh
sudo mkdir -p /etc/openvpn/server
```

- Open the created file for editing:

```sh
sudo nano /etc/openvpn/server/config.ovpn
```

:::tip 📝 NOTE
Change the local `123.56.96.211` IP address with your private AWS IP.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/aws-instance-private-ip.png"
  width="100%"
  caption="AWS Instance Private IP"
/>

:::tip 📝 NOTE
Add an inbound rule in the AWS Security Group for **UDP port 1194**.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/security-group-inbound-rules.png"
  width="100%"
  caption="Security Group Inbound Rules"
/>

```sh
# openvpn server
cd /etc/openvpn/server
daemon
dev tap
proto udp

#local ipaddr to bind. Change it with Server IP.
local 123.56.96.211
port 1194

server-bridge 10.0.8.1 255.255.255.0 10.0.8.11 10.0.8.100
ifconfig-pool-persist ip_pool.txt

up interface-up.sh

client-to-client
keepalive 10 120
comp-lzo
user root
group root
persist-key
persist-tun

ca /etc/openvpn/easyrsa/pki/ca.crt
cert /etc/openvpn/easyrsa/pki/issued/server.crt
key /etc/openvpn/easyrsa/pki/private/server.key
dh /etc/openvpn/easyrsa/pki/dh.pem
crl-verify /etc/openvpn/easyrsa/pki/crl.pem


status /var/log/openvpn-status-server.log
log /var/log/openvpn-server.log
verb 3
script-security 2
```

* Create a virtual tap interface and fill in the interface-up.sh.

```sh
sudo nano /etc/openvpn/server/interface-up.sh
```

- Fill in the content of the file with the lines below:

```sh
#!/bin/sh
/sbin/ifconfig $1 10.0.8.1 netmask 255.255.255.0 broadcast 10.0.8.0
```

- Make the script executable:

```sh
sudo chmod +x /etc/openvpn/server/interface-up.sh
```

5. Start OpenVPN.


*  To run the instance startup in the OpenVPN, run the following command:

```sh
sudo systemctl enable openvpn
```

* Execute the following in order to get your tap interface up:

```sh
sudo openvpn --config /etc/openvpn/server/config.ovpn
```

:::tip 📝 NOTE
If you want OpenVPN to execute the configuration file automatically, you should rename the **config.ovpn to config.conf** and move it to the **/etc/openvpn folder**.

This way, if the Operating System is rebooted, OpenVPN will automatically load the tap interface.
:::

```sh
cd /etc/openvpn/server
sudo mv config.ovpn /etc/openvpn/config.conf
```

You should see a similar output if the tap0 interface is up and running.

```sh
tap0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 10.0.8.1  netmask 255.255.255.0  broadcast 10.0.8.0
        ether 3a:37:f6:5a:bb:32  txqueuelen 100  (Ethernet)
        RX packets 45125  bytes 8292906 (7.9 MiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 16611  bytes 2205218 (2.1 MiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

# OpenVPN Management Client Set-up

1. Generate the OpenVPN Server client certificate.

:::tip 📝 NOTE
Management is used as the name for the client PC.
:::

```sh
cd /etc/openvpn/easyrsa
# ./easyrsa build-client-full <client_name> nopass
sudo ./easyrsa build-client-full managment nopass

# Update certificate control file
sudo ./easyrsa gen-crl
```

2. Create the OpenVPN Client profile file.

:::tip 📝 NOTE
Listed below are the configuration file and its corresponding names:
* {ca} = CA certificate
* {cert} = Client certificate
* {key} = Client secret key
:::

**Certificate Locations**

- The CA certificate is located in:

```sh
/etc/openvpn/easyrsa/pki/ca.crt
```

- The Client certificate together with the Client secret key generated in the Client certificate section:

```sh
/etc/openvpn/easyrsa/issued/{client_name}.crt
```

- Client secret key:

```sh
/etc/openvpn/easyrsa/private/{client_name}.key
```

3. Open a text editor in your PC and copy the following template:

```sh
dev tap
client
remote 123.56.96.211 1194
proto udp
nobind
resolv-retry infinite

persist-key
persist-tun

remote-cert-tls server

comp-lzo
verb 3

# copy from openvpn-server /etc/openvpn/easyrsa/pki/ca.crt
<ca>
-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIJANYEjCM+cqsxMA0GCSqGSIb3DQEBCwUAMBYxFDASBgNV
BAMMC1JBS1dpcmVsZXNzMB4XDTE5MTEyNTAxMzIyOVoXDTI5MTEyMjAxMzIyOVow
FjEUMBIGA1UEAwwLUkFLV2lyZWxlc3MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQDZS/8PCehr3TSTvidQLFVYT5EydKDVidEUm6/yOE0BZs99kZKGn6eF
mFQnBfve4mAHzPnC3amiuCh+01kf97P7MDpS/cYTdR9RB9Xng/jyBQqMVVHLbwoG
IS7mQmBpV0NdU8RYKsLCARPn50eRGiL2AS6cPDSjrrj2xsBEydTsjE/95gJ7AvWQ
RPRoVTI9S31mY6tLrs16zydtEXWicDVaRFkvultijCmCiUhfaDE8lt1dQxd5jkvw
cHtm1EBdHjyce7oXa+Og0p2c5EmTb1K2pjHZHG0jINv9lErC049g/ey7CcddDd+Q
Bm7fqArIaov7kk+U7zKhBrTVH3dmPWEHAgMBAAGjgYUwgYIwHQYDVR0OBBYEFLd+
eVD4IqyA84ABBeFupjEV0+bOMEYGA1UdIwQ/MD2AFLd+eVD4IqyA84ABBeFupjEV
0+bOoRqkGDAWMRQwEgYDVQQDDAtSQUtXaXJlbGVzc4IJANYEjCM+cqsxMAwGA1Ud
EwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IBAQABFT6ZgK7Y
tM5tZEfEKSCMUxfESJ+4pPN2lryZVskXtD6BfjvKkQpj3A+R6MRNloOPvZ4spAvH
5fFvfI97Ts40rQjWpgPLQDEBcgBi6dzzmMSap/iw9wLtgqWFVm+LXPMHQnqBKfs2
HksTlKOhiKZlvtGYfxay6kbMU35LX8WdRxx8JNvRNIDL68lLdreXB7vTKQYAvcKP
o1GuZFqKV2KFxpjxzLg1BeM3U4X5k4xDQDaOHENKJO4pdWBfMLP3AAyC9wq481PO
hgA1R8ZAt+psYxOAB6O3A1SzDJ/df5ciPdsp1Kia0HCB2cGIZ7ZwfzPDNivH8/bT
n7UOb+khvmsD
-----END CERTIFICATE-----
</ca>

# Client certificate PEM
# Copy from server /etc/openvpn/easyrsa/pki/issued/managment.crt
#

<cert>

-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIQVm22YDcNRRzycbFHSEkkFjANBgkqhkiG9w0BAQsFADAW
MRQwEgYDVQQDDAtSQUtXaXJlbGVzczAeFw0yMDAyMDUwMjI5MzZaFw0yMzAxMjAw
MjI5MzZaMBcxFTATBgNVBAMMDFJBSzcyNThfNjY2NjCCASIwDQYJKoZIhvcNAQEB
BQADggEPADCCAQoCggEBAK53T6vlbm4xVgM5z8fC6ul5WsdT3gfEGEOKu0MWcxq4
YP0jrhXAwJV20EdUXYiFIOdf9woYvv8ANTFYHIBAT+jZrGhbhph7QSzmb1xzc3g/
nGJVJAW7L10EmQ0mSsi64NTv/8Ou7wZQpqd8+FuIjDbMFJMP24GbqswG6nnhJCST
1b1hfAgijK/dagRFJTcYhJcutwJrpUjhdAwVBG/GuXQwyI82WXzpqvVyfPgCb4Ek
9ehHuA1Zsmgp68ChGFM+WrEZ1sETDlxlNAfsON7hihf3xYZ2iZ/6rq5RpUczJm3P
9dxO74I8/dxe9TnNcIvqasxGg3jZW4UvQyATqnb+z5kCAwEAAaOBlzCBlDAJBgNV
HRMEAjAAMB0GA1UdDgQWBBRQkqjMkMV4u8R0EKDDG08qjxJb4TBGBgNVHSMEPzA9
gBS3fnlQ+CKsgPOAAQXhbqYxFdPmzqEapBgwFjEUMBIGA1UEAwwLUkFLV2lyZWxl
c3OCCQDWBIwjPnK67dATBgNVHSUEDDAKBggrBgEFBQcDAjALBgNVHQ8EBAMCB4Aw
DQYJKoZIhvcNAQELBQADggEBAGDGH6+b1EGkVj//EDyJUBISWWcXC8EwmrT25Tga
WDid21QQatQahriVOFHu0B7DGSJb6kw4Om8Mz+kef1v529VIip56wP4I7aVQdcTg
SoVBCc0ToXxGO+EXPWc0jBwPReofMzYeaZ+hZcSHeFOYAso5aFSMfk5Z7qwYQfaj
ZQ7AdTj2NcxH92bIv7JUzW6Xh8OcTuTzQd4J2dtJr4ObnRkYrqg27dzlV1dz73hJ
JIs7AXUH4wivehV3VGd95am6ejs4Hedhaw23h+pV91LmG4gdb6EPHm0JPCHbaQAb
JzF75JEh0CLOlDFBK419Dgg10n0gqLkSTcp+CzNlCx7k+24=
-----END CERTIFICATE-----
</cert>

# Client key PEM
# Copy from server /etc/openvpn/easyrsa/pki/private/managment.key
#
<key>
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCud0+r5W5uMVYD
Oc/HwurpeVrHU94HxBhDirtDFnMauGD9I64VwMCVdtBHVF2IhSDnX/cKGL7/ADUx
WByAQE/o2axoW4aYe0Es5m9cc3N4P5xiVSQFuy9dBJkNJkrIuuDU7//Dru8GUKan
fPhbiIw2zBSTD9uBm6rMBup54SQkk9W9YXwIIoyv3WoERSU3GISXLrcCa6VI4XQM
FQRvxrl0MMiPNll86ar1cnz4Am+BJPXoR7gNWbJoKevAoRhTPlqxGdbBEw5cZTQH
7Dje4YoX98WGdomf+q6uUaVH11Ztz/XcTu+CPP3cXvU5zXCL6iIMRoN42VuFL0Mg
E6p2/s+ZAgMBAAECggEAGGwPNQra2IYDelQfZ+E7LQ+Vy41L6V5j3yCOcie0WSsy
OH1EIztmOgX1xeZjaXbpUjo2xK0OH3gR+iRRaQqXpQrDfaBCSRoH15cyQ4jNwyl0
ZLdyYXMAgE7iddrEYTD3xBcMgIH+Z63mhk+SHI4SwqDyyFtR6OS3lfPp4sHHY28r
FJPXW7a10M+pxjEX+A8m3UM4VJiLy2YeklB7laJkQjHcA/Gh+sh/0NjZwCYyWWAi
irATLDSa3z6N7yr3xAO/J4vEZVaGxyyJRvR4qmr0xE15xyCfQQcWdw1DpGT9uBk/
4z/1Tq2sJUekzYebeENliJY3ADVsVS0JszRRHCYwGQKBgQDhRlwvrjvRP8ZCd9th
ssKXgkJBUSqxp8VvFtylMKy2koNq6S2S3yiGmiNWd7JxdGk+77MGmA8kTdpORMcN
L9xSLMWiuMLHGEYf79TkON0ZBqN/wwuPttJG8ICWhqAjL+dDcLoqz8j4dO6FwKPo
z+fVjVupXgYKfqLpm9SAD1apewKBgQDGQuyhzv0Ru7o29MDg5YZ0dwj9bV1KzlFf
3DAdcX+k4Z48R50e5VhewIedA3eafy+UER63CAWLQru96sbRoGkk8aKBk9AGJPFb
i4NVWWaiUA2A2WVUKkdIQsNrr2xHBTwiFPftTxWRWUT1DKgF+uHvSzBKfn13PReS
KCjxzPis+wKBgQDVeW9yX5GfwOeHpTznYBa2rGFMtDXZFDssAmYkw/NnL4AJl93w
CDjHFNnX3qXijYYOdecYoI/4vy3YbaSTAn+t/29pu9wX/xC0wvjjLF+Yj4nwUExs
a7roLpAsFHc74PEuH2zLlQvFJknBxcONozb2T3ZFESx4VXjcFydQEzj0cQKBgANq
Wbs73p40lrOlqcD2E0fkWRJMlQPZ5Ar7txR6xREpFdnB/hHvL4OKW4u36JKPyFkL
pnTOvZG1l5hg+AXadpU9WGhVDItejY3fLGcHAD6hlGn41McLZ2j2RXmQbxQWIgAQ
TmkXKK71U7vI+QgJV2UQ7YcLAMxSEBrjeDkaJ9qLAoGAEiSjuv5X0PbZpiyH6/GX
YuMhFYWZnk/IwoxQW4alBIRuI7EQ+fLvrFUxikMOIsLKtKrcVLjJBgFSz4hIE9YE
YnaQ5Vx+RMzTwakRJtPook55pS1HpdK7Y/0oiUOsJGCEzVj8P/e/WrhFqWPGalIJ
ENCGBuhos/YdITFeKQ381zk=
-----END PRIVATE KEY-----
</key>
```

4. Change the remote IP address with your Amazon Instance Public IP. Add each certificate in its corresponding section by copying the content from the locations mentioned above and replace the corresponding section in the template.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/aws-instance-public-ip.png"
  width="100%"
  caption="AWS Instance Public IP"
/>


5. Save the file with a name: **management_client.ovpn**.

6. OpenVPN PC client.

* Download the [OpenVPN Client](https://openvpn.net/community-downloads/) and install.

* Start the OpenVPN GUI Client. You will see an icon in the taskbar.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/open-vpn-taskbar-icon.png"
  width="75%"
  caption="Open VPN Taskbar Icon"
/>

* Right click Import file and open management_client.ovpn file.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/importing-openvpn-client-file.png"
  width="100%"
  caption="Importing OpenVPN Client File"
/>

* Make sure to go into the OpenVPN menu again and press Connect (it will not initiate automatically).

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/open-vpn-connection-initiation.png"
  width="50%"
  caption="Open VPN Connection initiation"
/>

If everything is set up properly, a connection log window will disappear after the procedure runs through. Refer to Figure 5.


<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/open-vpn-connection-log2.png"
  width="50%"
  caption="Open VPN Connection log"
/>

The OpenVPN should now be in green, see Figure 8, meaning the connection is successful. You can check which clients are currently connected to the OpenVPN Server and their corresponding IP addresses by executing the following command in your Ubuntu console:

```sh
sudo nano /etc/openvpn/server/ip_pool.txt
```

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/open-vpn-connected-clients1.png"
  width="100%"
  caption="Open VPN connected clients 1"
/>

There should be only one client available and its IP address is visible now. This one client is the PC connected to the OpenVPN Server. Later, the Gateway also should be visible.

# OpenVPN Client Set-up on LoRa Gateway

---

The procedure for generating the keys for the gateway is the same as the one for the Management PC, with the exception of a different Client name.

:::tip 📝 NOTE
You can go through Section 1 and 2 of OpenVPN Management Client Set-up again, and do the same procedure. Don't forget to replace the “**management**” name used for the Client with the one for the Gateway.
- Used: **rak7258-001**.
:::

Once the certificates are assembled into a single file, you need to import the contents into the OpenVPN client section of your Gateway.

1. Log into the Gateway via the Web UI (**locally**).

* To access the WEB UI, make sure you still have local network access to your Gateway and connect to it.

* In the sidebar menu section, go to the **Services** > **OpenVPN Tunnels** > **Enter a name** > choose “**Custom Openvpn Configuration**” from the drop-down and the press **Add**. Use Figure 10 as reference.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/creating-an-openvpn-tunnel.jpg"
  width="100%"
  caption="Creating an OpenVPN tunnel"
/>

* In the next window, simply **copy/paste** the content of the file you created in the beginning and click **Save & Apply**. See Figure 11 below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/importing-the-openvpn-certificate-data.png"
  width="100%"
  caption="Importing the OpenVPN certificate data"
/>

* Shown in Figure 12, go back to the **OpenVPN Tunnel**s section > tap **Enable** to on state > click **Save & Apply**. This will finalize things and the Gateway should now be connected to the OpenVPN Server. The process might take a few minutes to complete.


<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/enabling-openvpn.png"
  width="100%"
  caption="Enabling OpenVPN"
/>

* Check again in the client list file on the OpenVPN Server for the IP address of the Gateway:

```sh
sudo nano /etc/openvpn/server/ip_pool.txt
```

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/gateway-remote-management-openvpn/openvpn-connected-clients2.png"
  width="100%"
  caption="OpenVPN connected-clients 2"
/>

The IP address of the Gateway should be in the second entry.

2. Log into the Gateway (**remotely**)

You can now log into the Gateway by using the IP address, shown in Figure 13, assigned to it by the OpenVPN Server. This can be utilized for an SSH2 connection or the Web UI (via a browser).





