---
sidebar: false
rak_img: /assets/images/knowledge-hub/user-manual/openvpn-remote-management/1.network-topology.png
rak_desc: This document is a sample demonstration on how to burn the latest firmware of the WisGate Developer Series.
tags:
  - User-Manual
  - WisGate
  - OpenVPN
header:
  title: WisGate Edge V2 Gateways Remote Management - OpenVPN
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/developer-gateway-firmware-setup.jpg
posted: 12/01/2022 5:00 PM
---

# WisGate Edge V2 Gateways Remote Management - OpenVPN

In this document, you will learn how to set the remote management of RAK WisGate Edge V2 gateways based on OpenVPN. A virtual private network (VPN) is created where a server is deployed that both the Gateway and any number of customer devices (PC, Phone, etc.)  can connect to via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE - only in cellular variants). Thus, by connecting to the server via a remote client the user can remotely manage the Gateway from any point, at any time.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/1.network-topology.png"
  width="100%"
  caption="Network Topology"
/>


## Deploy the OpenVPN Server

In the tutorial, the OpenVPN server will be deployed in the AWS cloud. It is assumed that you already have an AWS EC2 Instance with Ubuntu Server 18.04 LTS running on it. You can find a tutorial on how to deploy one at the link below:

- [Deployment and Management of Ubuntu on an AWS EC2 Instance](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EC2_GetStarted.html)

1. Install the OpenVPN package.


```
sudo apt install openvpn -y
```

2. Download a certificate management tool suite. Easy RSA will be used.

```
wget https://github.com/OpenVPN/easy-rsa/archive/refs/tags/v3.0.6.tar.gz -O easyrsa.tar.gz
```


3. Initialize Easy RSA to generate CA and server certificates.

- Extract and copy easyrsa to `/etc/openvpn/easyrsa/`.

```
sudo mkdir -p /etc/openvpn/easyrsa tar zxvf easyrsa.tar.gz
sudo cp -rf easy-rsa-3.0.6/easyrsa3/* /etc/openvpn/easyrsa/
```

- Initialize the `pki`.

```
cd /etc/openvpn/easyrsa sudo ./easyrsa init-pki
```

- Generate the CA certificate.

```
sudo ./easyrsa build-ca
```


- Enter the required information according to the prompt.


:::tip 📝 NOTE
When asked for a password, make sure to write it down and save it as it will be required later.
:::

- Generate the server certificate.

```
sudo ./easyrsa build-server-full server nopass
```

- Generate the DH parameters file.

```
sudo ./easyrsa gen-dh
```

- Generate the `crl.pem` file.

```
sudo ./easyrsa gen-crl
```


4. Generate the OpenVPN server configuration and running files.

- Create the OpenVPN server configuration file and fill it in.
    -   Create the folder where the file will reside in.

    ```
    sudo mkdir -p /etc/openvpn/server
    ```
    - Create the file and open it for editing.

    ```
    sudo nano /etc/openvpn/server/config.ovpn
    ```

:::tip 📝 NOTE
Change the local ***123.56.96.211*** IP with your Private IPv4 addresses.
:::

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/2.aws-private-ip.png"
  width="100%"
  caption="AWS Instance Private IP"
/>


:::tip 📝 NOTE
You must add an inbound rule in the AWS Security Group for UDP port 1194.
:::

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/3.security-group.png"
  width="100%"
  caption="Security Group Inbound Rules"
/>


```
# openvpn server
cd /etc/openvpn/server daemon
dev tap proto udp

#local ipaddr to bind. Change it with Server IP. local 123.56.96.211
port 1194

server-bridge 10.0.8.1 255.255.255.0 10.0.8.11 10.0.8.100
ifconfig-pool-persist ip_pool.txt up interface-up.sh
client-to-client keepalive 10 120 comp-lzo
user root group root persist-key persist-tun

ca /etc/openvpn/easyrsa/pki/ca.crt
cert /etc/openvpn/easyrsa/pki/issued/server.crt key /etc/openvpn/easyrsa/pki/private/server.key dh /etc/openvpn/easyrsa/pki/dh.pem
crl-verify /etc/openvpn/easyrsa/pki/crl.pem


status /var/log/openvpn-status-server.log log /var/log/openvpn-server.log
verb 3
script-security 2
```


- Create and fill in the `interface-up.sh`. This is a script that will create the virtual tap interface:

```
sudo nano /etc/openvpn/server/interface-up.sh
```

  - Fill in the content of the file with the lines below:

   ```
    #!/bin/sh
    /sbin/ifconfig $1 10.0.8.1 netmask 255.255.255.0 broadcast 10.0.8.0
   ```

  - Make the script executable.

   ```
    sudo chmod +x /etc/openvpn/server/interface-up.sh
   ```

5. Start OpenVPN.

:::tip 📝 NOTE
If you want OpenVPN to run on instance startup run the command:

```
sudo systemctl enable openvpn
```

:::


- Execute the following to get your tap interface up.

```
sudo openvpn --config /etc/openvpn/server/config.ovpn
```

:::tip 📝 NOTE

If you want OpenVPN to execute the configuration file automatically, you should rename the `config.ovpn` to `config.conf` and move it to the `/etc/openvpn` folder.
:::


If the Operating System is rebooted, OpenVPN will automatically load the tap interface.

```
cd /etc/openvpn/server
sudo mv config.ovpn /etc/openvpn/config.conf
```


- Check whether the OpenVPN virtual interface is up.

```
ifconfig tap0
```

You should see a similar output if the tap0 interface is up and running.

```
tap0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST> mtu 1500
inet 10.0.8.1 netmask 255.255.255.0 broadcast 10.0.8.0 ether 3a:37:f6:XX:XX:XX txqueuelen 100 (Ethernet)
RX packets 45125 bytes 8292906 (7.9 MiB)
RX errors 0 dropped 0 overruns 0 frame 0
TX packets 16611 bytes 2205218 (2.1 MiB)
TX errors 0 dropped 0 overruns 0 carrier 0 collisions 0
```

## Setup the OpenVPN Management Client

1. Generate the OpenVPN server client certificate for your PC.


:::tip 📝 NOTE
Use ***management*** as the name for the client PC.
:::

```
cd /etc/openvpn/easyrsa
sudo ./easyrsa build-client-full management nopass
sudo ./easyrsa gen-crl
```

2. Make the OpenVPN client profile file.

    - `<ca>` - CA certificate
    - `<cert>` - Client certificate
    - `<key>` - Client secret key

- The CA certificate is located at:

```
/etc/openvpn/easyrsa/pki/ca.crt
```

- The Client certificate together with the Client secret key generated in **Step 1**.

```
// Client Certificate

/etc/openvpn/easyrsa/pki/issued/<client_name>.crt
```


```
// Client Secret Key

/etc/openvpn/easyrsa/pki/private/<client_name>.key
```

- Open a text editor on your PC and copy the template below.
- Change the remote IP in the template with your Amazon Instance Public IPv4 address.
- Add each certificate in its corresponding section by copying the content from the locations mentioned above and replacing the corresponding section in the template.



<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/4.aws-public-ip.png"
  width="100%"
  caption="AWS Instance Public IP"
/>


```
dev tap client
remote 123.56.96.211 1194
proto udp nobind
resolv-retry infinite

persist-key persist-tun

remote-cert-tls server

comp-lzo verb 3

# copy from openvpn-server /etc/openvpn/easyrsa/pki/ca.crt
<ca>
-----BEGIN CERTIFICATE-----
MIIDNTCCAh2gAwIBAgIJANYEjCM+cqsxMA0GCSqGSIb3DQEBCwUAMBYxFDASBgNV BAMMC1JBS1dpcmVsZXNzMB4XDTE5MTEyNTAxMzIyOVoXDTI5MTEyMjAxMzIyOVow FjEUMBIGA1UEAwwLUkFLV2lyZWxlc3MwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAw
ggEKAoIBAQDZS/8PCehr3TSTvidQLFVYT5EydKDVidEUm6/yOE0BZs99kZKGn6eF mFQnBfve4mAHzPnC3amiuCh+01kf97P7MDpS/cYTdR9RB9Xng/jyBQqMVVHLbwoG IS7mQmBpV0NdU8RYKsLCARPn50eRGiL2AS6cPDSjrrj2xsBEydTsjE/95gJ7AvWQ RPRoVTI9S31mY6tLrs16zydtEXWicDVaRFkvultijCmCiUhfaDE8lt1dQxd5jkvw cHtm1EBdHjyce7oXa+Og0p2c5EmTb1K2pjHZHG0jINv9lErC049g/ey7CcddDd+Q Bm7fqArIaov7kk+U7zKhBrTVH3dmPWEHAgMBAAGjgYUwgYIwHQYDVR0OBBYEFLd+ eVD4IqyA84ABBeFupjEV0+bOMEYGA1UdIwQ/MD2AFLd+eVD4IqyA84ABBeFupjEV
0+bOoRqkGDAWMRQwEgYDVQQDDAtSQUtXaXJlbGVzc4IJANYEjCM+cqsxMAwGA1Ud EwQFMAMBAf8wCwYDVR0PBAQDAgEGMA0GCSqGSIb3DQEBCwUAA4IBAQABFT6ZgK7Y
tM5tZEfEKSCMUxfESJ+4pPN2lryZVskXtD6BfjvKkQpj3A+R6MRNloOPvZ4spAvH 5fFvfI97Ts40rQjWpgPLQDEBcgBi6dzzmMSap/iw9wLtgqWFVm+LXPMHQnqBKfs2 HksTlKOhiKZlvtGYfxay6kbMU35LX8WdRxx8JNvRNIDL68lLdreXB7vTKQYAvcKP o1GuZFqKV2KFxpjxzLg1BeM3U4X5k4xDQDaOHENKJO4pdWBfMLP3AAyC9wq481PO
hgA1R8ZAt+psYxOAB6O3A1SzDJ/df5ciPdsp1Kia0HCB2cGIZ7ZwfzPDNivH8/bT n7UOb+khvmsD
-----END CERTIFICATE-----
</ca>

# Client certificate PEM
# Copy from server /etc/openvpn/easyrsa/pki/issued/management.crt
#

<cert>
-----BEGIN CERTIFICATE-----
MIIDTzCCAjegAwIBAgIQVm22YDcNRRzycbFHSEkkFjANBgkqhkiG9w0BAQsFADAW MRQwEgYDVQQDDAtSQUtXaXJlbGVzczAeFw0yMDAyMDUwMjI5MzZaFw0yMzAxMjAw MjI5MzZaMBcxFTATBgNVBAMMDFJBSzcyNThfNjY2NjCCASIwDQYJKoZIhvcNAQEB
BQADggEPADCCAQoCggEBAK53T6vlbm4xVgM5z8fC6ul5WsdT3gfEGEOKu0MWcxq4 YP0jrhXAwJV20EdUXYiFIOdf9woYvv8ANTFYHIBAT+jZrGhbhph7QSzmb1xzc3g/ nGJVJAW7L10EmQ0mSsi64NTv/8Ou7wZQpqd8+FuIjDbMFJMP24GbqswG6nnhJCST 1b1hfAgijK/dagRFJTcYhJcutwJrpUjhdAwVBG/GuXQwyI82WXzpqvVyfPgCb4Ek 9ehHuA1Zsmgp68ChGFM+WrEZ1sETDlxlNAfsON7hihf3xYZ2iZ/6rq5RpUczJm3P 9dxO74I8/dxe9TnNcIvqasxGg3jZW4UvQyATqnb+z5kCAwEAAaOBlzCBlDAJBgNV


HRMEAjAAMB0GA1UdDgQWBBRQkqjMkMV4u8R0EKDDG08qjxJb4TBGBgNVHSMEPzA9
gBS3fnlQ+CKsgPOAAQXhbqYxFdPmzqEapBgwFjEUMBIGA1UEAwwLUkFLV2lyZWxl c3OCCQDWBIwjPnK67dATBgNVHSUEDDAKBggrBgEFBQcDAjALBgNVHQ8EBAMCB4Aw DQYJKoZIhvcNAQELBQADggEBAGDGH6+b1EGkVj//EDyJUBISWWcXC8EwmrT25Tga
WDid21QQatQahriVOFHu0B7DGSJb6kw4Om8Mz+kef1v529VIip56wP4I7aVQdcTg SoVBCc0ToXxGO+EXPWc0jBwPReofMzYeaZ+hZcSHeFOYAso5aFSMfk5Z7qwYQfaj ZQ7AdTj2NcxH92bIv7JUzW6Xh8OcTuTzQd4J2dtJr4ObnRkYrqg27dzlV1dz73hJ JIs7AXUH4wivehV3VGd95am6ejs4Hedhaw23h+pV91LmG4gdb6EPHm0JPCHbaQAb JzF75JEh0CLOlDFBK419Dgg10n0gqLkSTcp+CzNlCx7k+24=
-----END CERTIFICATE-----
</cert>
# Client key PEM
# Copy from server /etc/openvpn/easyrsa/pki/private/management.key
 #
<key>
-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCud0+r5W5uMVYD
Oc/HwurpeVrHU94HxBhDirtDFnMauGD9I64VwMCVdtBHVF2IhSDnX/cKGL7/ADUx WByAQE/o2axoW4aYe0Es5m9cc3N4P5xiVSQFuy9dBJkNJkrIuuDU7//Dru8GUKan fPhbiIw2zBSTD9uBm6rMBup54SQkk9W9YXwIIoyv3WoERSU3GISXLrcCa6VI4XQM FQRvxrl0MMiPNll86ar1cnz4Am+BJPXoR7gNWbJoKevAoRhTPlqxGdbBEw5cZTQH 7Dje4YoX98WGdomf+q6uUaVH11Ztz/XcTu+CPP3cXvU5zXCL6iIMRoN42VuFL0Mg E6p2/s+ZAgMBAAECggEAGGwPNQra2IYDelQfZ+E7LQ+Vy41L6V5j3yCOcie0WSsy OH1EIztmOgX1xeZjaXbpUjo2xK0OH3gR+iRRaQqXpQrDfaBCSRoH15cyQ4jNwyl0 ZLdyYXMAgE7iddrEYTD3xBcMgIH+Z63mhk+SHI4SwqDyyFtR6OS3lfPp4sHHY28r FJPXW7a10M+pxjEX+A8m3UM4VJiLy2YeklB7laJkQjHcA/Gh+sh/0NjZwCYyWWAi irATLDSa3z6N7yr3xAO/J4vEZVaGxyyJRvR4qmr0xE15xyCfQQcWdw1DpGT9uBk/ 4z/1Tq2sJUekzYebeENliJY3ADVsVS0JszRRHCYwGQKBgQDhRlwvrjvRP8ZCd9th ssKXgkJBUSqxp8VvFtylMKy2koNq6S2S3yiGmiNWd7JxdGk+77MGmA8kTdpORMcN L9xSLMWiuMLHGEYf79TkON0ZBqN/wwuPttJG8ICWhqAjL+dDcLoqz8j4dO6FwKPo z+fVjVupXgYKfqLpm9SAD1apewKBgQDGQuyhzv0Ru7o29MDg5YZ0dwj9bV1KzlFf 3DAdcX+k4Z48R50e5VhewIedA3eafy+UER63CAWLQru96sbRoGkk8aKBk9AGJPFb i4NVWWaiUA2A2WVUKkdIQsNrr2xHBTwiFPftTxWRWUT1DKgF+uHvSzBKfn13PReS KCjxzPis+wKBgQDVeW9yX5GfwOeHpTznYBa2rGFMtDXZFDssAmYkw/NnL4AJl93w CDjHFNnX3qXijYYOdecYoI/4vy3YbaSTAn+t/29pu9wX/xC0wvjjLF+Yj4nwUExs a7roLpAsFHc74PEuH2zLlQvFJknBxcONozb2T3ZFESx4VXjcFydQEzj0cQKBgANq Wbs73p40lrOlqcD2E0fkWRJMlQPZ5Ar7txR6xREpFdnB/hHvL4OKW4u36JKPyFkL pnTOvZG1l5hg+AXadpU9WGhVDItejY3fLGcHAD6hlGn41McLZ2j2RXmQbxQWIgAQ TmkXKK71U7vI+QgJV2UQ7YcLAMxSEBrjeDkaJ9qLAoGAEiSjuv5X0PbZpiyH6/GX YuMhFYWZnk/IwoxQW4alBIRuI7EQ+fLvrFUxikMOIsLKtKrcVLjJBgFSz4hIE9YE YnaQ5Vx+RMzTwakRJtPook55pS1HpdK7Y/0oiUOsJGCEzVj8P/e/WrhFqWPGalIJ ENCGBuhos/YdITFeKQ381zk=
-----END PRIVATE KEY-----
</key>
```


- Save the file with the name `management_client.ovpn`.


3. OpenVPN PC Client.

- Download and install the [OpenVPN Client](https://openvpn.net/community-downloads/).
- Start the OpenVPN GUI Client. You will see the OpenVPN GUI icon in the taskbar. Right click → Hover the mouse over Import → Import the file.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/5.taskbar-icon.png"
  width="70%"
  caption="OpenVPN Taskbar Icon"
/>

- Navigate to the `management_client.ovpn` file and open it.
- Make sure to go into the OpenVPN menu again and press **Connect** (it will not initiate automatically).

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/7.connection-initiation.png"
  width="45%"
  caption="OpenVPN connection initiation"
/>

- If everything is set up properly, there will be a connection log window that will disappear after the procedure runs through (refer to **Figure 7**).

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/8.connection-log.png"
  width="70%"
  caption="OpenVPN connection log"
/>


- The OpenVPN should now be in green (![9.successful-connection.png](/assets/images/knowledge-hub/user-manual/openvpn-remote-management/9.successful-connection.png)), meaning the connection has been successfully establis- You can check which clients are currently connected to the OpenVPN Server and their corresponding IP addresses by executing the following command in your Ubuntu console.

```
sudo nano /etc/openvpn/server/ip_pool.txt
```

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/10.connected-clients.png"
  width="70%"
  caption="OpenVPN connected clients 1"
/>

There should be only one client and its IP address is visible now. This is the PC connected to the OpenVPN Server. Later on, the gateway should also be visible.


## Setup OpenVPN Client on LoRa Gateway

Before you continue with the setup of the OpenVPN client on the gateway, you must install the OpenVPN extension on the gateway.

### Install the OpenVPN Extension

1. Download and install the [OpenVPN extension](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-openvpn-1.0.0_b13.ipk) by accessing the gateway.
2. To access the gateway, check the [Access the WisGateOS 2 Web UI](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#access-the-wisgateos-2-web-ui) user manual.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/11.login-page.png"
  width="100%"
  caption="WisGateOS V2 login page"
/>


3. After a successful login, head to the Extensions tab. You can also click the WisGate logo in the upper left corner to expand the menu on the left and see the full names of the tabs.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/12.extensions-menu.png"
  width="100%"
  caption="Extensions menu"
/>

- By default, no extensions are installed.


4. To install an extension, you can click either the **Add new extension** button or the **install one now link**. An **Add new extension** window will pop up.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/13.add-extensions.png"
  width="100%"
  caption="Add new extension"
/>


5. Now, you can either drag and drop the extension file in the **Drop your Extension file here or choose file** form or click the **choose file link** in the form and browse for the extension file.

:::tip 📝 NOTE
The extension files are in **IPK** format and are created specifically for the WisGateOS 2 and the WisGate Edge hardware platform. A general IPK file for OpenWRT cannot be installed.
:::


<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/14.new-extensions.png"
  width="100%"
  caption="New extension"
/>


6. After you choose the extension file, click **Add extension** to install it.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/15.install-extensions.png"
  width="100%"
  caption="Install the extension"
/>

- It takes time to install the extension.

7. After the installation process is complete, WisGateOS will reboot, and you need to log in again.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/16.reboot.png"
  width="100%"
  caption="Login page"
/>


8. Head to the **Extensions** tab again and you should see the installed extension.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/17.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

Now, your extension is successfully installed.


The procedure for generating the keys for the gateway is the same as the one for the Management PC, except for there being a different *Client name*.

You can go through in [Setup the OpenVPN Management Client](#setup-the-openvpn-management-client) section again, and do the same procedure. Do not forget to replace the ***management*** name used for the Client with the one for the gateway. Here, **`rak_gw`** is used.

Once you have assembled your certificates into a single file, save the file with `<client_name>.ovpn` with no type (select All Files for Save as type).


<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/18.save-clients.png"
  width="70%"
  caption="Save clients file"
/>


Now, you need to import the file into the OpenVPN client section of the gateway.


### Login to the Gateway via WebUI


1. Make sure you still have local network access to your gateway and connect to it to access the Web UI.
2. Head to **Extensions** → **OpenVPN Client** → **Launch** button.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/19.start-openvpn.png"
  width="100%"
  caption="Start OpenVPN"
/>


3. In the next window, click either the **Add tunnel** button or the **add one now link** to add an OpenVPN tunnel.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/20.openvpn-tunnel.png"
  width="100%"
  caption="Add the OpenVPN tunnel"
/>


4. Now, click **choose file** link and browse for the **.OVPN** file. You can also drag and drop the **.OVPN** file you created earlier.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/21.ovpn-file.png"
  width="100%"
  caption="Add .OVPN file to the gateway"
/>

5. Once the file is added, click **Add tunnel** to add the OpenVPN tunnel.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/22.added-openvpn-tunnel.png"
  width="100%"
  caption="Add the OpenVPN tunnel"
/>

6. A success message will appear when the tunnel is added successfully.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/23.success-openvpn-tunnel.png"
  width="100%"
  caption="Successfully added the OpenVPN tunnel"
/>

7. Click the **Configure** button of the VPN tunnel. On the next window, click the **Enable Connection** switch to enable the OpenVPN tunnel and click **Save changes**.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/24.start-openvpn-tunnel.png"
  width="100%"
  caption="Start the OpenVPN tunnel"
/>

8. From the **Logs** tab, you can check the OpenVPN status.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/25.openvpn-status.png"
  width="100%"
  caption="OpenVPN tunnel status"
/>

9. Check again in the client list file on the OpenVPN Server for the IP address of the gateway:

```
sudo nano /etc/openvpn/server/ip_pool.txt
```

<rk-img
  src="/assets/images/knowledge-hub/user-manual/openvpn-remote-management/26.connected-clients.png"
  width="70%"
  caption="Open VPN connected clients 2"
/>


### Login to the Gateway (Remotely)

You can now log into the gateway by using the IP address (**Figure 17**) assigned to it by the OpenVPN Server. This can be utilized for an SSH2 connection, the Web UI (via a browser), etc.


