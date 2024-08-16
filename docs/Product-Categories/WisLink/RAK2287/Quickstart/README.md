---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2287
rak_desc: Contains instructions and tutorials for installing and deploying your RAK2287 WisLink LPWAN Concentrator. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LPWAN Concentrator.
rak_img: /assets/images/wislink-lora/rak2287/quickstart/1main/RAK2287.png
---

# RAK2287 Quick Start Guide

## Prerequisites

### What Do You Need?

The following two sections provide a list of the components and tools you need to get started with the development board. Some of those are included in the package, while others you need to provide yourself.

#### Hardware Tools

- [RAK2287 WisLink LPWAN Concentrator](https://store.rakwireless.com/products/rak2287-lpwan-gateway-concentrator-module/?utm_source=RAK2287WisLink-LoRa&utm_medium=Document&utm_campaign=BuyFromStore)
- **Raspberry Pi 3/4** (RAK2287 bundle includes a Raspberry Pi 4)
- [RAK2287 Pi HAT](https://store.rakwireless.com/products/rak2287-pi-hat?utm_source=RAK2287PiHAT&utm_medium=Document&utm_campaign=BuyFromStore) (RAK2287 bundle includes a RAK2287 Pi HAT)
- LoRa and GPS antennas
- A 16&nbsp;GB SD card (included in the RAK2287 bundle only), a card reader, and a PC

#### Software Tools

- [Balena Etcher](https://www.balena.io/etcher/): a tool for burning the firmware on the SD card
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html): a Windows tool for SSH, required to connect to the gateway
- Latest [RAK2287 Firmware](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/RAK2287_Latest_Firmware.zip)

### Device Firmware Setup

For an easy and quick way of having a fully functional gateway, a Precompiled Firmware Image is provided. This section gives you step-by-step instructions on how to install the Image into your SD Card used for the gateway.

#### Burn the Latest Firmware

1. Download the latest firmware of **[RAK2287](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/RAK2287_Latest_Firmware.zip)**, which is based on the Raspbian OS.
2. Use an image writing tool to install the firmware on the SD Card. For this tutorial, you will be using **[Etcher](https://www.balena.io/etcher/),** an open-source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your computer.
4. Open the Etcher Software, and select the downloaded image file through the ( **Label - 1** ) button in **Figure 1**.

:::tip 📝 NOTE
The SD card should be automatically detected by the Etcher software in Label - 2 of **Figure 1**. If not, secure a proper connection.
:::

Click **Flash** and wait for a couple of minutes until it displays "**Flash Complete.**"

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/2.balena-etcher-software.png"
  width="80%"
  caption="Balena Etcher Software"
/>

### Assembly Guide

To create a functioning RAK2287 WisLink LPWAN Concentrator, you need to assemble several components together.

#### Mount the Concentrator

Insert your **RAK2287 mPCIe card** into the mPCIe slot on the **RAK2003 Pi HAT**. Ensure the card fits snugly into the connector, and it should end up sticking out at a **45-degree angle**. Gently press it down and fasten it with 2 screws. If you have positioned the card correctly, the screw holes on the RAK2287 will match the ones on the RAK2003. Use **Figure 2** as a reference.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/3.assembly-of-the-concentrator-and-hat.jpg"
  width="50%"
  caption="Assembly of the Concentrator and the HAT"
/>

#### Antennas

The module includes two antennas: GPS and LoRa. Both are equipped with pigtail cables that feature uFL connectors, which are compatible with the corresponding ports on the RAK2287. These ports are clearly labeled. Match each antenna to its appropriate port and gently press until the connectors securely fit together.

:::warning ⚠️WARNING
It is not recommended to power the device with the antennas detached, as this might damage the circuitry.
:::

#### Mount the HAT

Take the RAK2003, which now has the RAK2287 securely mounted on top, and place it over the Raspberry Pi. Both the Pi and the HAT have a **40-pin connector** that should align and fit together when pressed on top of each other.

#### SD Card

Insert the SD card with the Firmware you flashed in the previous step into the SD card slot on the bottom of the Raspberry Pi.

#### Boot

Power the Raspberry Pi using the Micro USB port (Pi3) or the USB Type-C port (Pi4). As this is the first time booting the OS, it may take a few minutes for everything to set up.

:::tip 📝 NOTE
It is recommended to use at least a 2&nbsp;A power supply.
:::



### Access the Gateway

There are two ways to connect to your RAK2287 WisLink LPWAN Concentrator setup.

:::warning ⚠️WARNING
Before powering the Raspberry Pi 3B+ or 4, ensure that the LoRa and GPS antennas are installed. Failing to do so may damage the boards.
:::

#### 1. Wi-Fi AP Mode

By default, the firmware is configured to operate the Raspberry Pi in Wi-Fi AP mode. This means you should be able to find an SSID named “**Rakwireless_XXXX**” on your Wi-Fi network list. For example:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/4.wifi.png"
  width="80%"
  caption="RAKWireless Access Point"
/>

:::tip 📝 NOTE
Connect to this Wi-Fi SSID using "**rakwireless**" as the default password. The default IP address of the gateway's Wi-Fi is `192.168.230.1`. Make note of this IP address, as it will be needed to connect via SSH.
:::

There is no need to configure the IP address of your PC, as it will be automatically assigned by the DHCP server.

#### 2. Via the Ethernet Port on the Raspberry Pi

You can also connect your PC to the gateway using an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this, in Windows, go to **Control Panel > Network and Internet > Network and Sharing Center** and click **Ethernet**

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/5.network-and-sharing.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties**, then Choose **Internet Protocol Version 4 (TCP/IPv4).**


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/6.ethernet-final.png"
  width="90%"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP address automatically. Click the Option **Use the following IP Address** and enter the  IP address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/7.ipv4-settings.png"
  width="90%"
  caption="TCP/IPv4 Properties"
/>

Now, you should be able to access your gateway from your PC successfully using the IP address `192.168.10.10`through SSH.

### Log into the Gateway via SSH

#### 1. Windows OS

Secure Shell (SSH) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, you will be using Putty.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/8.putty.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP address is `192.168.230.1`.
- If you have connected to the gateway through **Ethernet**, the IP address is `192.168.10.10`.
- You will then be prompted to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/9.command-line.png"
  width="80%"
  caption="Command line after login"
/>

#### 2. MacOS

Open the Mac OS terminal. Launch the **Terminal** application, which is found in the `/Applications/Utilities/` directory. You can also launch it from Spotlight, press **Command + Spacebar**, type **Terminal**, and then return.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/10.mac-terminal.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/11.mac-ssh.jpg"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to log in to the gateway, the default password is "**raspberry**".
- If you connect your PC with the gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

Now, you have successfully logged into the gateway via SSH, as shown in **Figure 11**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/12.login-successful.jpg"
  width="80%"
  caption="Log-in Successful Notification"
/>

#### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.


## Product Configuration

### Configuring the Gateway

1. Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

2. Then, you will see a page similar to the one shown in **Figure 12**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/1.configuring-options.png"
  width="100%"
  caption="Configuration options for the gateway"
/>

- **Set Pi Password**: Used to set or change the password of the gateway.
- **Set Up RAK Gateway LoRa Concentrator**: Used to configure the operating frequency of the gateway and the LoRaWAN Server it will connect with.
- **Restart Packet Forwarder**: Used to restart the LoRa packet forwarding process.
- **Edit Packet Forwarder Config**: Used to open and manually edit LoRaWAN parameters in the `global_conf.json` file.
- **Configure WiFi**: Used to configure the Wi-Fi settings for network connections.
- **Configure LAN**: Used to configure the Ethernet adapter settings.

:::tip 📝 NOTE
A unique ID, also known as the Gateway EUI, will be generated for the gateway. This ID is highlighted in red in **Figure 12** and is essential for registering the gateway with any LoRa Network Server (e.g., TTN, ChirpStack).
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/2.command-line.png"
  width="100%"
  caption="Gateway ID using the command line"
/>

#### Setting a new password for the Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. Choose the **1 Set pi password** option referred on **Figure 14**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/3.set-pi-password.png"
  width="100%"
  caption="Set Pi Password"
/>

2. Press **Yes** and you will be asked to enter your new password twice then press **Enter**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/4.password-change.png"
  width="100%"
  caption="Confirm Password Change"
/>

3. Once the password is successfully changed, a success message will appear.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/5.successful-password-change.png"
  width="100%"
  caption="Successful Password Change"
/>


#### Set Up RAK Gateway LoRa Concentrator

This menu allows you to select your LoRa frequency band and one of the two available Networks Server options.

1. Choosing option **2 Setup RAK Gateway LoRa concentrator**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/6.choosing-setup-rak-gateway.png"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa concentrator"
/>

2. Select one of two supported LoRa servers: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/7.server-is-ttn.png"
  width="100%"
  caption="Server Is TTN"
/>

- **The Things Network (TTN)**: If you choose TTN as the LoRa Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/8.ttn-channel.png"
  width="100%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown in **Figure 20**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/9.frequency-changed.png"
  width="100%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/10.server-is-chirpstack.png"
  width="100%"
  caption="Server Is Chirpstack"
/>

If you choose Chirpstack as your LoRa Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration**: used to configure your Regional Frequency Band
- **ChirpStack ADR Configure**: used to enable/disable the Adaptive Data Rate (ADR) functionality.

1. Select option 1 for configuring your Regional Frequency Band.


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/11.regional-freqband-option.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

2. Set the IP address of the ChirpStack that you want your gateway to connect with.


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/12.default-lora-ip.png"
  width="100%"
  caption="Default LoRaServer IP address"
/>

:::tip 📝 NOTE
The default IP address is **127.0.0.1**, which means you will be using the Built-in LoRa Server. If you want to use an independent LoRa Server running on another device or a cloud-based LoRa Server, you need to set it to the corresponding IP address.
:::

3. If you have instead selected **Chirpstack ADR Configure**, enable/disable the Adaptive Data Rate (ADR) functionality.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/13.chirpstack-adr.png"
  width="100%"
  caption="Chirpstack ADR Enable/Disable"
/>



### Connecting to a Network

If you want to use TTN or an independent ChirpStack network server, which may be deployed in a local area network or remotely, connect your gateway to a networking device that provides internet connectivity, such as a router. There are two options available for this purpose.

#### Connect Through Wi-Fi

1. If you want to connect through Wi-Fi, you can easily do so using the wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4 by selecting **5 Configure WIFI**. By default, the RAK2287 WisLink LPWAN Concentrator operates in Wi-Fi AP Mode. To connect the gateway to a router, it must be set to Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/1.configure-wifi.png"
  width="100%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

- **Enable AP Mode/Disable Client Mode**: After rebooting, the gateway will operate in Wi-Fi Access Point Mode, and Wi-Fi Client Mode will be disabled (this is the default mode).
- **Enable Client Mode/Disable AP Mode**: After rebooting, the gateway will operate in Wi-Fi Client Mode, and Wi-Fi AP Mode will be disabled.
- **Modify SSID and Password for AP Mode**: This option is used to modify the SSID and password of the Wi-Fi AP. It only works if the Wi-Fi AP Mode is enabled.
- **Add New SSID for Client Mode**: This is used to connect to a new Wi-Fi network. It only works in Wi-Fi Client Mode.
- **Change Wi-Fi Country**: This is used to modify the resident country to match Wi-Fi standards.

:::warning ⚠️WARNING
To enable Wi-Fi Client Mode, you must first disable the AP Mode.
:::

2. Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/2.add-ssid.png"
  width="100%"
  caption="Add a new SSID"
/>

3. Start by selecting your country of residence:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/3.country-selection.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

4. Enter the SSID of the network you want to connect to.

:::warning ⚠️WARNING
Make sure to input the correct Wi-Fi SSID and password; otherwise, you will not be able to connect to the RAK2287 WisLink LPWAN Concentrator again via SSH in Wi-Fi AP Mode. If you find yourself stuck in this situation, follow the procedure outlined in the [Connecting to a Network](#reverting-to-wi-fi-ap-mode) document, which is applicable for all Raspberry Pi-based gateways to restore Wi-Fi AP mode functionality.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/4.ssid-of-the-network.png"
  width="100%"
  caption="SSID of the Network you want to connect to."
/>


5. Enter the password as well. Leave it empty if there is none.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/5.wifi-password.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

#### Connect Through Ethernet

To connect to the router using an Ethernet cable, follow these steps:

1. In the main configuration menu, choose **6 Configure LAN**. This allows you to set up a static IP address for the Gateway’s Ethernet adapter.
2. Enter a static IP address that corresponds to your router's IP address range. Ensure that the LoRaWAN gateway and the router are in the same network segment; otherwise, the connection will fail.
3. By default, the IP address of the gateway's Ethernet is `192.168.10.10`.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/6.ethernet-ip.png"
  width="100%"
  caption="Default gateway Ethernet IP address"
/>

4. Configure the IP address of the router. This will be the LAN interface IP address of the router.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/7.lan-interface.png"
  width="100%"
  caption="LAN Interface IP address of the Router"
/>

5. Press **OK** and a success message will appear.
6. Finally, reboot the gateway using the command `sudo reboot` in the command line and it will connect to the router successfully through Ethernet.

#### Optional Configurations

The configurations in this section are optional and situational.

##### Reverting to Wi-Fi AP Mode

If you have entered incorrect Wi-Fi SSID and/or password during the Wi-Fi Client Mode setup for the RAK2287 WisLink LPWAN Concentrator, follow these steps to revert to Wi-Fi AP Mode and redo the setup:

1. Remove the SD Card from your RAK2287 WisLink LPWAN Concentrator and insert it into your PC. Your PC should be able to detect as shown in **Figure 32**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/8.create-rak-ap.png"
  width="50%"
  caption="Creating rak_ap file to your SD Card"
/>

2. Using your **Command Prompt** or **Terminal**, navigate to your SD Card and type the command `rak_ap` to generate a file.

```
cd > rak_ap
```

3. Check if the `rak_ap` file is created successfully. If so, re-insert the SD Card into your RAK2287 WisLink LPWAN Concentrator and it should work again in Wi-Fi AP Mode.



### Connecting to The Things Network (TTN)

The Things Network facilitates the connection of low-power devices to long-range gateways, enabling them to join an open-source, decentralized network for data exchange with applications. You can learn more about [The Things Network](https://www.thethingsnetwork.org/docs/).

1. Connect the gateway to the router to access the internet according to the method which has been introduced in the [Connecting to a Network](/rak2287-concentrator-module-wislink-series/connecting-to-a-network) section of this document.
2. Configure your gateway and choose TTN as the LoRa Server and select the correct frequency according to the method which has been introduced in the [Configure the Gateway](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2287/Quickstart/#configuring-the-gateway) section.
3. Go to the [TTN website](https://www.thethingsnetwork.org/) and log in.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/1.ttn_home_page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

4. Enter the TTN Console and click on **Gateways**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/2.console-page.png"
  width="100%"
  caption="The Things Network Console Page"
/>

5. All of your Registered Gateways will be displayed on this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/3.add-gateway.png"
  width="100%"
  caption="Adding a gateway to TTN"
/>

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/4.register-gateway.png"
  width="100%"
  caption="Registering your gateway"
/>

- **Gateway EUI**: Refers to the Gateway ID you obtained in the previous step. If you forgot it, simply type `gateway-version` in the command line. This ID must match the gateway's true Gateway ID; otherwise, you will not be able to register your gateway on TTN.

:::tip 📝 NOTE
Make sure to select the **I'm using the legacy packet forwarder** check box.
:::

- **Description**: Provide a human-readable description of your gateway.
- **Frequency Plan**: Select the frequency plan that you want to use, ensuring it matches the frequency of both the gateway and the node.
- **Router**: Choose the router your gateway will connect to. To minimize latency, select a router located near the gateway.
- **Location**: Enter the coordinates of the gateway's location. This information will be displayed on the Gateway World Map.
- **Antenna Placement**: Specify the placement of your antenna, whether it is indoors or outdoors.


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/5.gateway-connected.png"
  width="100%"
  caption="Gateway overview"
/>

5. Click **Register Gateway** and wait for a few minutes. If the status of your gateway shows as **Connected**, as illustrated in **Figure 37** for reference, then your setup is successful.


### Connect the Gateway with Chirpstack

The ChirpStack or previously known as the LoRaServer project provides open-source components for building LoRaWAN networks. Learn more about [ChirpStack](https://www.chirpstack.io/) on the website.

For the RAKwireless Developer Gateways, there are 2 ways to use the ChirpStack:

#### 1. Using the Built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer Gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa server. If you don't want to change the frequency or LoRa server, you don't have to do anything as this will be configured automatically when the gateway boots.
- However, if it is not the first time and you want to use the built-in ChirpStack as the LoRa Server, follow the steps discussed in the [Configuring the Gateway](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2287/Quickstart/#configuring-the-gateway) section.
- **Optional**: If ever you disabled the AP Mode and you have connected it to your own WiFi network (Client Mode). You can search for your gateway’s IP address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP address of your gateway, it should have the Manufacturer name of **Raspberry Pi Foundation**:


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/1.ip-scanner.png"
  width="100%"
  caption="IP address of your LPWAN Gateway using IP Scanner"
/>

There is a web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP address:8080" (Example: `http://192.168.254.176:8080`)
- **Username**: admin
- **Password**: admin

:::warning ⚠️WARNING
It is advisable to change your password to tighten the security of your account. You can change this by clicking the **change password** button at the user icon.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/2.log-in.png"
  width="100%"
  caption="ChirpStack web-based UI"
/>

- If you navigate to the Gateways tab and click on rak_gateway, you should be able to view the gateway details page.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/3.available-gateways.jpg"
  width="100%"
  caption="Available gateways in Chirpstack"
/>


- Go to the `rak_gateway` and see the **Last seen** status. It must be a few seconds ago which signifies that the gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/4.last-seen.png"
  width="100%"
  caption="Last Seen Status"
/>

#### 2. Using an Independent ChirpStack

You can set up an independent ChirpStack by yourself. Although this process is more complex than deploying a remote ChirpStack, ChirpStack provides a detailed guide on how to accomplish this. You can find the guide on their [website](https://www.chirpstack.io/guides/debian-ubuntu/).
