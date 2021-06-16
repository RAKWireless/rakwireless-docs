---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2287
rak_desc: Contains instructions and tutorials in installing and deploying your RAK2287 WisLink LPWAN Concentrator. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LPWAN Concentrator. 
---

# Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/1.rak2287-on-top-of-rak2003.png"
  width="50%"
  caption="RAK2287 WisLink LPWAN Concentrator on top of the RAK2003 Pi Hat"
/> -->

### What do you need?

The following two sections provide a list of the components and tools you need to get started with the development board. Some of those are included in the package, others you need to provide yourself.

#### Hardware Tools

- **RAK2287 WisLink LPWAN Concentrator**
- **Raspberry Pi 3/4** (RAK2287 bundle includes a Raspberry Pi 4)
- **RAK2287 Pi HAT** (RAK2287 bundle includes a RAK2287 Pi HAT)
- LoRa and GPS antennas
- A 16G SD card (included in the RAK2287 bundle only), a card reader, and a PC

#### Software Tools

- [Balena Etcher](https://www.balena.io/etcher/): a tool for burning the firmware on the SD card.
- [PuTTY](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html): a Windows tool for SSH, required to connect to the Gateway.
- Latest [RAK2287 Firmware](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/RAK2287_Latest_Firmware.zip)

### Device Firmware Setup

For an easy and quick way of having a fully functional gateway, a Precompiled Firmware Image is provided. With that, this section gives you step-by-step instructions on how to install the Image into your SD Card used for the gateway.

#### Burn the latest Firmware

1. Download the latest firmware of **[RAK2287](https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Firmware/RAK2287_Latest_Firmware.zip)**, that is based on the Raspbian OS.
2. Use an image writing tool to install the firmware on the SD Card. For this tutorial, you will be using **[Etcher](https://www.balena.io/etcher/),** an open-source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your computer.
4. Open the Etcher Software, and select the downloaded image file through the ( **Label - 1** ) button in the image below.

:::tip 📝 NOTE
Your SD Card should be automatically detected by the Etcher software in the Label - 2 of the image below. If not, secure a proper connection.
:::

Click Flash and wait for a couple of minutes until it displays "**Flash Complete.**"

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/2.balena-etcher-software.png"
  width="80%"
  caption="Balena Etcher Software"
/>

### Assembly Guide

To create a functioning RAK2287 WisLink LPWAN Concentrator, you need to put several components together:

#### Mount the Concentrator

Insert your **RAK2287 mPCIe card** into the mPCIe slot on the **RAK2003 Pi HAT**. Make sure the card fits snugly into the connector, it should end up sticking out in a **45-degree angle**. Gently press it down and fasten with 2 screws. If you have positioned the card right, the screw holes on the RAK2287 will match the ones on the RAK2003. Use **Figure 1** as reference.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/3.assembly-of-the-concentrator-and-hat.jpg"
  width="50%"
  caption="Assembly of the Concentrator and the HAT"
/>

#### Antennas

The module comes with **two antennas, GPS, and LoRa**. Both have pigtail cables that have uFL connectors, which fit onto the corresponding ports on the RAK2287. The ports are labeled, match each antenna to its port and gently press it until the connectors fit one to the other.

:::warning ⚠️WARNING
It is not recommended to have the device powered with the antennas detached. This might damage the circuity.
:::

#### Mount the HAT

Take the RAK2003, that now has the RAK2287 securely sitting on top and insert it over the Raspberry Pi. Both the Pi and the HAT have a **40-pin connector** that should fit together when pressed on top of each other.

#### SD Card

Insert the SD card with the Firmware you flashed in the previous step into the SD card slot on the bottom of the Raspberry Pi.

#### Boot

Power the Raspberry Pi via the Micro USB port (Pi3) / USB type-C port (Pi4). As this is going to be the first time to boot the OS it might take a couple of minutes before everything is set up, so please be patient.  

:::tip 📝 NOTE
It is recommended to use at least a 2A power supply.
:::



### Access the Gateway

There are two ways to connect to your RAK2287 WisLink LPWAN Concentrator setup:

:::warning ⚠️WARNING
Before powering the Raspberry Pi 3B+ or 4, you should install the LoRa and GPS antennas. Not doing so might damage the boards.
:::

#### 1. Wi-Fi AP Mode

By default, the firmware is configured to operate the Raspberry Pi in Wi-Fi AP mode, which means that you should be able to find an SSID named “**Rakwireless_XXXX**” on the Wi-Fi network list, for example:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/4.wifi.png"
  width="80%"
  caption="RAKWireless Access Point"
/>

:::tip 📝 NOTE
Connect to this Wi-Fi SSID by using "rakwireless" as the default password. The default IP address of the gateway's Wi-Fi is 192.168.230.1. Take note of this IP address as this will be needed in connecting via SSH.
:::

There is no need to configure the IP address of your PC as it will be assigned automatically via the DHCP server.

#### 2. Via the Ethernet Port on the Raspberry Pi

You can also connect your PC with the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this in Windows, go to Control Panel > Network and Internet > Network and Sharing Center and click **Ethernet**

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/5.network-and-sharing.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/6.ethernet-final.png"
  width="90%"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option **Use the following IP Address** and enter the  IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/7.ipv4-settings.png"
  width="90%"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your gateway from your PC successfully using the IP Address `192.168.10.10`through SSH.

### Log into the Gateway via SSH

#### 1. Windows OS

Secure Shell (SSH) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, you will be using Putty.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/8.putty.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`.
- If you have connected to the gateway through **Ethernet**, the IP Address is `192.168.10.10`.
- It will then prompt you to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/9.command-line.png"
  width="80%"
  caption="Command line after log in"
/>

#### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

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

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your gateway, the default password is "**raspberry**".
- If you connect your PC with the gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

OK, you have logged into the gateway through SSH successfully same with the image shown below:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/2prerequisites/12.login-successful.jpg"
  width="80%"
  caption="Log-in Successful Notification"
/>

#### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.


## Product Configuration

### Configuring the Gateway

Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

Then, you will see a page the same as figure 1.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/1.configuring-options.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN Server which the gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process.
4. **Edit packet-forwarder config-** used to open the global_conf.json file, to edit LoRaWAN  parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

:::tip 📝 NOTE
A unique ID will be generated in for gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa Network Server (TTN, ChirpStack).
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

- First, choose "1 Set pi password" option referred on figure 3 below.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/3.set-pi-password.png"
  width="100%"
  caption="Set Pi Password"
/>

- Next, press "Yes" and you will be asked to enter your new password twice then press "Enter".

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/4.password-change.png"
  width="100%"
  caption="Confirm Password Change"
/>

- Alright, the success message for changing password will then pop up.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/5.successful-password-change.png"
  width="100%"
  caption="Successful Password Change"
/>


#### Set up RAK Gateway LoRa Concentrator

This menu allows you to select your LoRa frequency band and one of the two available Networks Server options by choosing option **2 Setup RAK Gateway LoRa concentrator**.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/6.choosing-setup-rak-gateway.png"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa concentrator"
/>

You can choose one of two supported LoRa Servers here: **TTN** or
**ChirpStack**.

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

After choosing the correct frequency, the success message will appear as shown in figure 9 below.

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

**ChirpStack**: If you choose Chirpstack as your LoRa Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** -  used to enable/disable the Adaptive Data Rate (ADR)
functionality.

First, select option 1 for configuring your Regional Frequency Band


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/11.regional-freqband-option.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your gateway to work with:


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/12.default-lora-ip.png"
  width="100%"
  caption="Default LoRaServer IP Address"
/>

:::tip 📝 NOTE
The default IP Address is **127.0.0.1**, which means you will be using the Built-in LoRa Server. If you want to use an independent LoRa Server running on another device or a cloud based LoRa Server, you need to set it to the corresponding IP address.
:::

- If you have instead selected "**Chirpstack ADR Configure**", you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/3configuring-the-gateway/13.chirpstack-adr.png"
  width="100%"
  caption="Chirpstack ADR Enable/Disable"
/>



### Connecting to a Network

If you want to use TTN or an independent ChirpStack, which may be deployed in a local area network or a remote one, you need to connect your Gateway to a networking device that will allow you connectivity to the internet (a router for example). There are 2 options offered for this purpose.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4 by choosing "**5 Configure WIFI**". By default, the RAK2287 WisLink LPWAN Concentrator works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/1.configure-wifi.png"
  width="100%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - after rebooting, the gateway will work in Wi-Fi Access Point Mode while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - after rebooting, the gateway will work in Wi-Fi Client mode, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. It only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

:::warning ⚠️WARNING
To enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/2.add-ssid.png"
  width="100%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/3.country-selection.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

:::warning ⚠️WARNING
Make sure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK2287 WisLink LPWAN Concentrator again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the procedure listed in [Connecting to a Network](#reverting-to-wi-fi-ap-mode) document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/4.ssid-of-the-network.png"
  width="100%"
  caption="SSID of the Network you want to connect to."
/>


- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/5.wifi-password.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

#### Connect through Ethernet

If you want to connect to the router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Note that the LoRaWAN gateway and the router must be in the same network segment, otherwise the connection fails.
- By default, the IP Address of the gateway's Ethernet is `192.168.10.10`.


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/6.ethernet-ip.png"
  width="100%"
  caption="Default gateway Ethernet IP Address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/7.lan-interface.png"
  width="100%"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK and a success message appear.
- Lastly, reboot the gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.

#### Optional Configurations

The configurations in this section are optional and situational.

##### Reverting to Wi-Fi AP Mode

If you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK2287 WisLink LPWAN Concentrator to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK2287 WisLink LPWAN Concentrator and insert it into your PC. Your PC should be able to detect it the same as figure 8 below.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/4connecting-to-a-network/8.create-rak-ap.png"
  width="50%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```
cd > rak_ap
```

- Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK2287 WisLink LPWAN Concentrator and it should work again in Wi-Fi AP Mode.



### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your  gateway to the router in order to access the internet according to the method which has been introduced in the [auto$](/rak2287-concentrator-module-wislink-series/connecting-to-a-network) section of this document.
- Second, config your  gateway and choose TTN as the LoRa Server and choose a correct frequency according to the method which has been introduced in the [auto$](/rak2287-concentrator-module-wislink-series/configuring-the-gateway) section.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/1.ttn_home_page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateways.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/2.console-page.png"
  width="100%"
  caption="The Things Network Console Page"
/>

- All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/3.add-gateway.png"
  width="100%"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/4.register-gateway.png"
  width="100%"
  caption="Registering your Gateway"
/>

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type "**gateway-version**" in the command line. This must be the same with the  gateway's True Gateway ID otherwise you will fail to register your  gateway on TTN.

:::tip 📝 NOTE
Make sure to select the "**I'm using the legacy packet forwarder**" check box.
:::

- **Description** - A human readable description of your  gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with  gateway and the node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the gateway by entering its coordinates. This is reflected on the Gateway World Map.
- **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/5connecting-to-the-ttn/5.gateway-connected.png"
  width="100%"
  caption="Gateway overview"
/>

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is "**Connected**" same as in **Figure 5** as reference, Congratulations! Your gateway is now connected to the The Things Network (TTN).


### Connect the Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/)

For the RAKwireless Developer Gateways, there are 2 ways to use the ChirpStack:

#### 1. Using the built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa  Server. If you don't want to change the frequency or LoRa Server, you don't have to do anything as this will be configured automatically when the gateway boots.
- However if it is not the first time and you want to use the built-in ChirpStack as the LoRa Server, follow the steps discussed in [auto$](/rak2287-concentrator-module-wislink-series/configuring-the-gateway) section.
- **Optional:** If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:


<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/1.ip-scanner.png"
  width="100%"
  caption="IP address of your LPWAN Gateway using IP Scanner"
/>

There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP Address:8080" (**Example**: http://192.168.254.176:8080)
- **Username**: admin
- **Password**: admin

:::warning ⚠️WARNING
It is advisable to change your password to tighten the security of your account. You can change this by clicking the "change password" button at the user icon.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/2.log-in.png"
  width="100%"
  caption="ChirpStack Web-based UI"
/>

- Everything should be pre-configured: Device profiles have been created, the gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the gateway details page.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/3.available-gateways.jpg"
  width="100%"
  caption="Available Gateways in Chirpstack"
/>


- Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wislink-lora/rak2287/quickstart/6connect-with-chirpstack/4.last-seen.png"
  width="100%"
  caption="Last Seen Status"
/>

#### 2. Using an Independent ChirpStack

You can setup an Independent ChirpStack by yourself. This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/).
