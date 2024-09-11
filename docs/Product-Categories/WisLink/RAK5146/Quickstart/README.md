---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK5146
rak_desc: Contains instructions and tutorials for installing and deploying your RAK5146 WisLink LPWAN Concentrator. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LPWAN Concentrator.
rak_img: /assets/images/wislink-lora/rak2287/quickstart/1main/RAK5146.png
---

# RAK5146 Quick Start Guide

## Prerequisites

### What Do You Need?

The following two sections provide a list of the components and tools you need to get started with the development board. Some of those are included in the package, others you need to provide yourself.

#### Hardware Tools

- <a href="https://store.rakwireless.com/products/wislink-concentrator-module-sx1303-rak5146-lorawan?utm_campaign=BuyFromStore&utm_medium=Document&utm_source=WisBlockRAK5146&variant=39677269409990" target="_blank">RAK5146 WisLink LPWAN Concentrator</a>
- **Raspberry Pi 3/4** (RAK5146 bundle includes a Raspberry Pi 3 or 4)
- <a href="https://store.rakwireless.com/products/rak2287-pi-hat?utm_source=RAK5146PiHAT&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5146 Pi HAT</a> (RAK5146 bundle includes a RAK5146 Pi HAT)
- LoRa and GPS antennas
- A 16&nbsp;GB SD card (included in the RAK5146 bundle only), a card reader, and a PC

#### Software Tools

- <a href="https://www.balena.io/etcher/" target="_blank">Balena Etcher</a>: a tool for burning the firmware on the SD card
- <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">PuTTY</a>: a Windows tool for SSH, required to connect to the gateway
- Latest <a href="https://downloads.rakwireless.com/LoRa/RAK5146/Firmware/RAK5146_USB_Latest_Firmware.zip" target="_blank">RAK5146 Firmware</a>

### Device Firmware Setup

For an easy and quick way of having a fully functional gateway, a Precompiled Firmware Image is provided. With that, this section gives you step-by-step instructions on how to install the Image into your SD Card used for the gateway.

#### Burn the Latest Firmware

1. Download the latest firmware of **<a href="https://downloads.rakwireless.com/LoRa/RAK5146/Firmware/RAK5146_USB_Latest_Firmware.zip" target="_blank">RAK5146</a>**, which is based on the Raspbian OS.
2. Use an image writing tool to install the firmware on the SD Card. For this tutorial, you will be using **<a href="https://www.balena.io/etcher/" target="_blank">Etcher</a>,** an open-source utility used for burning image files.
3. Insert your SD Card into the SD Card reader and plug it into your computer.
4. Open the balenaEtcher Software, and select the downloaded image file in the first section of the balenaEtcher.

:::tip 📝 NOTE
Your SD card should be automatically detected by the Etcher software. If not, secure a proper connection.
:::

Click **Flash** and wait for a couple of minutes until it displays "**Flash Complete.**"

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/1.png"
  width="80%"
  caption="Balena Etcher Software"
/>

### Assembly Guide

To create a functioning RAK5146 WisLink LPWAN Concentrator, you need to put several components together.

#### Mount the Concentrator

Insert your **RAK5146 mPCIe card** into the mPCIe slot on the **RAK2287/RAK5146 Pi HAT**. Make sure the card fits snugly into the connector, it should end up sticking out at a **45-degree angle**. Gently press it down and fasten it with 2 screws. If you have positioned the card right, the screw holes on the RAK5146 will match the ones on the RAK2287/RAK5146 Pi HAT. Use **Figure 2** as a reference.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/2.png"
  width="50%"
  caption="Assembly of the Concentrator and the HAT"
/>

#### Antennas

The module comes with **two antennas, GPS, and LoRa**. Both have pigtail cables that have uFL connectors, which fit onto the corresponding ports on the RAK5146. The ports are labeled, match each antenna to its port and gently press it until the connectors fit one to the other.

:::warning ⚠️WARNING
It is not recommended to have the device powered with the antennas detached. This might damage the circuitry.
:::

#### Mount the HAT

Take the RAK2287/RAK5146 Pi HAT, which now has the RAK5146 securely sitting on top, and insert it over the Raspberry Pi. Both the Pi and the HAT have a **40-pin connector** that should fit together when pressed on top of each other.

#### SD Card

Insert the SD card with the Firmware you flashed in the previous step into the SD card slot on the bottom of the Raspberry Pi.

#### Boot

Power the Raspberry Pi via the Micro USB port (Pi3) / USB type-C port (Pi4). As this is going to be the first time to boot the OS it might take a couple of minutes before everything is set up, so be patient.

:::tip 📝 NOTE
It is recommended to use at least a 2.5&nbsp;A (for Raspberry Pi 3B+) or a 3&nbsp;A (for Raspberry Pi 4) power supply.
:::

#### Burn the Latest Firmware

Refer to the Raspberry Pi Setup guide, to check how to flash the latest Raspberry Pi OS and set it up to work with the RAK5146 LPWAN concentrator. 

### Access the Gateway

There are two ways to connect to your RAK5146 WisLink LPWAN Concentrator setup.

:::warning ⚠️WARNING
Before powering the Raspberry Pi 3B+ or 4, you should install the LoRa and GPS antennas. Not doing so might damage the boards.
:::

#### 1. Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP mode, which means that you should be able to find an SSID named “**Rakwireless_XXXX**” on the Wi-Fi network list, for example:

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/3.png"
  width="80%"
  caption="RAKWireless Access Point"
/>

:::tip 📝 NOTE
Connect to this Wi-Fi SSID by using "rakwireless" as the default password. The default IP address of the gateway's Wi-Fi is `192.168.230.1`. Take note of this IP address as this will be needed in connecting via SSH.
:::

There is no need to configure the IP address of your PC as it will be assigned automatically via the DHCP server.

#### 2. Via the Ethernet Port on the Raspberry Pi

You can also connect your PC to the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`.

- To do this in Windows, go to **Control Panel** > **Network and Internet** > **Network and Sharing Center** and click **Ethernet**

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/4.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**


<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/5.png"
  width="70%"
  caption="Ethernet Properties"
/>

- By default, the PC will obtain an IP address automatically. Click the option **Use the following IP Address** and enter the IP address: `192.168.10.20` and press **OK**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/6.png"
  width="80%"
  caption="TCP/IPv4 Properties"
/>

Now, you should be able to access your gateway from your PC successfully using the IP address `192.168.10.10`through SSH.

### Log into the Gateway

#### 1. Windows OS

Secure Shell (SSH) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely <a href="https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html" target="_blank">**Putty**</a>, <a href="https://www.bitvise.com/ssh-client-download" target="_blank">**BitVise SSH Client**</a>, <a href="https://mobaxterm.mobatek.net/" target="_blank">**MobaXterm**</a> and many more. Feel free to choose one that fits your needs, but in this guide, you will be using Putty.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/7.png"
  width="40%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP address is `192.168.230.1`.
- If you have connected to the gateway through **Ethernet**, the IP address is `192.168.10.10`.
- It will then prompt you to enter the username and password. The default username and password are provided below:
  - **Username**: pi
  - **Password**: raspberry

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/8.png"
  width="60%"
  caption="Command line after login"
/>

#### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in the `/Applications/Utilities/` directory. You can also launch it from Spotlight, press **Command + Spacebar**, type **Terminal**, and then return.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/9.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: `sudo -i`.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/10.png"
  width="50%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter `ssh pi@192.168.230.1` in the terminal to log in to your gateway, the default password is "**raspberry**".
- If you connect your PC with the gateway through Ethernet Cable, you should enter `ssh pi@192.168.10.10`, the default password is "**raspberry**".

Now, you have logged into the gateway through SSH successfully the same with **Figure 11**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/11.png"
  width="50%"
  caption="Log-in Successful Notification"
/>

#### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.


## Product Configuration

### Configuring the Gateway

Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

Then, you will see a page the same as **Figure 12**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/12.png"
  width="50%"
  caption="Configuration options for the gateway"
/>

1. **Set pi password** - used to set/change the password of the gateway
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN Server which the gateway will work with
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process
4. **Edit packet-forwarder config** - used to open the global_conf.json file, to edit LoRaWAN parameters manually
5. **Configure Wifi** - used to configure the Wi-Fi settings to connect to a network
6. **Configure LAN** - used to configure the Ethernet adapter settings

:::tip 📝 NOTE
A unique ID will be generated for the gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa Network Server (TTN, ChirpStack).
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/13.png"
  width="50%"
  caption="Gateway ID using the command line"
/>

#### Setting a new password for the Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

- First, choose the **1 Set pi password** option referred on **Figure 14**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/14.png"
  width="50%"
  caption="Set Pi Password"
/>

- Next, press **Yes** and you will be asked to enter your new password twice then press **Enter**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/15.png"
  width="40%"
  caption="Confirm Password Change"
/>

- A success message for changing the password will then pop up.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/16.png"
  width="40%"
  caption="Successful Password Change"
/>


#### Set up RAK Gateway Channel Plan

This menu allows you to select your LoRa frequency band and one of the two available Networks Server options by choosing option **2 Setup RAK Gateway Channel Plan**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/17.png"
  width="50%"
  caption="Choosing Setup RAK Gateway LoRa concentrator"
/>

You can choose one of two supported LoRa Servers here: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/18.png"
  width="40%"
  caption="Server Is TTN"
/>

- **The Things Network (TTN)**: If you choose TTN as the LoRa Server, you will see the following page. Visit the <a href="https://lora-alliance.org/wp-content/uploads/2021/05/RP002-1.0.3-FINAL-1.pdf" target="_blank">LoRa Alliance Regional Parameters</a> for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/19.png"
  width="40%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown in **Figure 20**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/20.png"
  width="40%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack


<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/21.png"
  width="40%"
  caption="Server Is Chirpstack"
/>

**ChirpStack**: If you choose Chirpstack as your LoRa Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band
- **ChirpStack ADR Configure** -  used to enable/disable the Adaptive Data Rate (ADR)
functionality.

First, select option 1 for configuring your Regional Frequency Band


<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/23.png"
  width="40%"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your gateway to work with:


<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/24.png"
  width="30%"
  caption="Default LoRaServer IP address"
/>

:::tip 📝 NOTE
The default IP address is `127.0.0.1`. If you want to use an independent LoRa Server running on another device or a cloud-based LoRa Server, you need to set it to the corresponding IP address.
:::

### Connecting to a Network

If you want to use TTN or an independent ChirpStack, which may be deployed in a local area network or a remote one, you need to connect your gateway to a networking device that will allow you connectivity to the internet (a router for example). There are two options offered for this purpose.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the wireless capabilities of the Raspberry Pi 3B+ or Raspberry Pi 4 by choosing "**5 Configure WIFI**". By default, the RAK5146 WisLink LPWAN Concentrator works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/25.png"
  width="40%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - after rebooting, the gateway will work in Wi-Fi Access Point Mode while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - after rebooting, the gateway will work in Wi-Fi Client mode, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. It only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - is used to modify the Resident Country to match with Wi-Fi standards.

:::warning ⚠️WARNING
To enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/26.png"
  width="40%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/27.png"
  width="40%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

:::warning ⚠️WARNING
Make sure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK5146 WisLink LPWAN Concentrator again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the procedure listed in <a href="#reverting-to-wi-fi-ap-mode" target="_blank">Connecting to a Network</a> document which is applicable for all Raspberry Pi-based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/28.png"
  width="40%"
  caption="SSID of the Network you want to connect to."
/>


- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/29.png"
  width="40%"
  caption="Password of the Wi-Fi"
/>

#### Connect through Ethernet

If you want to connect to the router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill in a static IP address according to the IP address of the router you want to connect. Note that the LoRaWAN gateway and the router must be in the same network segment, otherwise the connection fails.
- By default, the IP address of the gateway's Ethernet is `192.168.10.10`.


<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/30.png"
  width="30%"
  caption="Default gateway Ethernet IP address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/31.png"
  width="30%"
  caption="LAN Interface IP address of the Router"
/>

- Press OK and a success message appears.
- Lastly, reboot the gateway using the command `sudo reboot` in the command line and it will connect to the router successfully through Ethernet.

#### Optional Configurations

The configurations in this section are optional and situational.

##### Reverting to Wi-Fi AP Mode

If you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK5146 WisLink LPWAN Concentrator to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK5146 WisLink LPWAN Concentrator and insert it into your PC. Your PC should be able to detect it the same as **Figure 32**.

<rk-img
  src="/assets/images/wislink-lora/rak5146/quickstart/32.png"
  width="30%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```
cd > rak_ap
```

- Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK5146 WisLink LPWAN Concentrator and it should work again in Wi-Fi AP Mode.

