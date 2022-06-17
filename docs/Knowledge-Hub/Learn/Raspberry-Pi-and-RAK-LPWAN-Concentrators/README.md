---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/wishat.jpg
rak_desc: This guide will show you how to set up the Raspberry Pi and make it work with the RAK LPWAN HATs  
tags:
  - Tutorial
  - WisLink
header:
  title: Quick Start Guide for Raspberry Pi and RAK LPWAN Concentrators
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general-banner.jpg
posted: 6/17/2022 2:29 PM
---

# Quick Start Guide for Raspberry Pi and RAK LPWAN Concentrators

This guide will show you how to set up the Raspberry Pi and make it work with the RAK LPWAN HATs. The setup of the Raspberry Pi consists of three parts: 

1. Flashing the Raspbian OS to the SD card and access option
2. Configuring the Raspberry Pi interfaces
3. Installing the rak_common_for_gateway stack

You have two options in configuring the Raspberry Pi:

1. **Headless setup** - you don't need a monitor and a keyboard
2. **General Setup** - you need a monitor and a keyboard

# Flash the SD Card

Flashing the [latest](https://www.raspberrypi.com/software/operating-systems/) Raspberry Pi OS is required for both the headless and the general setup. To flash the OS, you will need:

1. [balenaEtcher](https://www.balena.io/etcher/) (software used for flashing OS)
2. [Raspberry Pi OS](https://www.raspberrypi.com/software/operating-systems/)
3. SD card (at least 16 GB)
4. SD card reader
5. PC/laptop

Start with downloading and installing [balenaEtcher](https://www.balena.io/etcher/).

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/1.png"
  width="70%"
  caption="balenaEtcher"
/>

Next, download the [latest](https://www.raspberrypi.com/software/operating-systems/) Raspberry Pi OS. The **Raspberry Pi OS Lite** is recommended as it is more lightweight than the Desktop version.

Insert the SD card into your PC/laptop and open **balenaEtcher**. Click on **Flash from file**, browse and select the Raspberry Pi OS you have downloaded. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/2.png"
  width="70%"
  caption="Flashing Raspberry Pi OS"
/>

BalenaEtcher should automatically recognize the SD card. If not, click on **Select target** and choose your SD card. 

Once the Raspberry Pi OS and SD card are selected, click on **Flash**. Flashing will then start.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/3.png"
  width="70%"
  caption="Flashing in progress"
/>

Once the flashing is done, you will see the following screen.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/4.png"
  width="70%"
  caption="Flash Complete"
/>

You can now safely eject the SD card.

# Raspberry Pi Headless Setup

This setup does not require a monitor or any input devices. The Raspberry Pi can be configured screenless; that is why it is called a Headless setup. By default, the Raspberry Pi OS installs the SSH protocol disabled. You can turn it on without using a monitor and keyboard.

## Requirements

### Hardware

1. Raspberry Pi 3B+/4
2. Power adapter 5V (at least 2.5A for Raspberry Pi 3B+ and 3A for Raspberry Pi 4)
3. SD card (at least 16 GB, with the flashed OS)
4. SD card reader
5. A PC/ Laptop

### Software

1. SSH terminal console (e.g. [PuTTY](https://www.putty.org/))

## Setup the SD card

Assuming you have flashed the latest Raspberry Pi OS, insert the SD card into your PC/laptop. Open the root of the directory of the card. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/5.png"
  width="70%"
  caption="boot Folder"
/>

In here, create a text file called `wpa_supplicant.conf`. The wpa_supplicant includes the needed information for the Wi-Fi interface of the Raspberry Pi to connect to a Wireless network.

Copy and then paste the following text into the `wpa_supplicant.conf` file:

```
country=YOUR_COUNTRY
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
update_config=1

network={
scan_ssid=1
ssid="YOUR_WIFI_SSID"
psk="YOUR_WIFI_PASSWORD"
}
```

Change **YOUR_COUNTRY** with the abbreviation of your country. [Here](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements) you can find your country's two-letter code, according to ISO standards.

Also, change **YOUR_WIFI_SSID** with the SSID of your network and **YOUR_WIFI_PASSWORD** with the password of that network.

:::tip 📝 NOTE
Type the SSID and Password in the quotes (" "). 
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/6.png"
  width="50%"
  caption="Example of wpa-supplicant.conf File"
/>

Save and exit the text file.

If you want to use the Ethernet interface, plug the Raspberry Pi directly into your wired network. The DHCP server of the router will assign an IP to the Raspberry Pi.

Apart from the `wpa_supplicant.conf` file, also create an empty file (with no extension) named `ssh`. This will enable the SSH interface on the Raspberry Pi. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/7.png"
  width="100%"
  caption="Create an ssh File"
/>

Now you can eject the SD card and insert it into the Raspberry Pi. Once Pi is booted, it will connect to the WI-FI network. The DHCP server will assign an IP and you can access the Pi at that address.

To find the assigned IP, you can either go to your router’s web UI in the DHCP clients menu or use a program (in this example [Advanced IP Scanner](https://www.advanced-ip-scanner.com/)) to scan the network. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/8.png"
  width="70%"
  caption="Advanced IP Scanner"
/>

You can access the Raspberry Pi on that IP using a terminal console (in this example: PuTTY)

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/9.png"
  width="50%"
  caption="Access the Raspberry Pi"
/>

Login using the default credentials:

- **Login:** pi
- **Password:** raspberry

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/10.png"
  width="60%"
  caption="Raspberry Pi Console Line Interface"
/>

You can now head to Configuring the Raspberry Pi's Interfaces

# General Setup

In the general Raspberry Pi setup, you will learn how to setup the Pi with the help of a monitor and a keyboard. 

## Requirements

### Hardware

1. Raspberry Pi 3B+/4
2. Power Adapter (at least 2.5A for Raspberry Pi 3B+ and 3A for Raspberry Pi 4)
3. SD card (at least 16GB, with the Raspberry Pi OS flashed)
4. SD card reader
5. Keyboard
6. Monitor/ Tv

## Setup the Raspberry Pi

Assuming you have flashed the latest Raspberry Pi OS, insert the SD card into your Raspberry Pi.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/11.png"
  width="70%"
  caption="Raspberry Pi with an SD card Inserted"
/>

Connect the monitor/ TV to the HDMI port (for Raspberry Pi 3B+) or MiniHDMI (for Raspberry Pi 4), and the keyboard to a USB port. Optionally, you can connect an Ethernet cable, if you want to use Ethernet. In this example, it will be shown how to connect the Raspberry Pi to a WI-FI network.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/12.png"
  width="70%"
  caption="Keyboard and Monitor connected to the Pi"
/>

Once everything is connected, you can power the Raspberry Pi with the power adapter. When the Pi is fully booted, you will see the following screen.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/13.png"
  width="60%"
  caption="First Time Boot"
/>

Login using the default Raspberry credentials:

- **Login**: pi
- **Password:** raspberry

# Configuring the Raspberry Pi's Interfaces

After you log in, you need to configure the Raspberry Pi – enable SSH, SPI, I2C, etc. To do this, run the command `sudo raspi-config`. This opens the Raspberry Pi user interface (UI), where you can configure different Raspberry Pi settings.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/14.png"
  width="70%"
  caption="Raspberry Pi Software Configuration Tool"
/>

If you want to be able to access the Raspberry via SSH connection, head to **3 Interface Options** and enable **I2 SSH**.

:::tip 📝 NOTE
If you are using the `Headless setup`, you can skip this step as the SSH interface is enabled via the `ssh` file.
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/15.png"
  width="100%"
  caption="Enable SSH interface"
/>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/16.png"
  width="70%"
  caption="Enable SSH Server"
/>

:::tip 📝 NOTE
Enabling the SSH makes the Raspberry Pi accessible via the command terminal. It is recommended to change the login password in **1 System Options -> S3 Password.**
:::

While you are in the **3 Interface Options** menu, enable the following interfaces:

- **SPI** – Serial Peripheral Interface. This enables the communication between the Raspberry Pi and the concentrator with an SPI interface.

:::tip 📝 NOTE
If you are going to use an LPWAN concentrator with a USB interface and a [mPCIe to USB Board](https://store.rakwireless.com/products/mpcie-to-usb-board), you can skip enabling this interface. 
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/17.png"
  width="100%"
  caption="Enable SPI Interface"
/>

- **I2C** – enables the Inter-Integrated Circuit (I2C) interface. The I2C enables GPS communication. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/18.png"
  width="100%"
  caption="Enable SPI Interface"
/>

- Disable **Login Shell over Serial** and enable **Serial port hardware** – here you disable Shell over Serial and enable the Serial port as it might cause a collision between the interfaces. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/19.png"
  width="100%"
  caption="Disable Shell over Serial/ Enable Serial Port Hardware"
/>

It is recommended to configure the **Time Zone** of the Raspberry Pi. Head to **5 Localization Options -> L2 Time Zone**

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/20.png"
  width="100%"
  caption="Set up Local Time Zone"
/>

Select your geographic area and then a city corresponding to your time zone.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/21.png"
  width="100%"
  caption="Set up Local Time Zone"
/>

Now, you can configure the WI-FI Internet connection. Head to **1 System Options -> Wireless LAN.**

:::tip 📝 NOTE
If you are using the Headless setup, you can skip this step, as the Internet connection is configured in the `wpa_supplicant.conf` file.
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/22.png"
  width="100%"
  caption="Set up Wi-Fi Internet connection"
/>

Enter the SSID of your Wireless Network and then the password of that network.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/23.png"
  width="100%"
  caption="Wi-Fi Setup"
/>

Once done with configuring the Raspberry Pi, select **Finish**. The Pi will require a reboot to apply the changes. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/24.png"
  width="70%"
  caption="Reboot the Raspberry Pi"
/>

After the reboot, the session in the terminal will be closed. You need to log in again and install the latest `rak_common_for_gateway` stack.

# Install rak_common_for_gateway stack

Login in the Raspberry Pi. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/25.png"
  width="70%"
  caption="Access the Raspberry Pi"
/>

It is a good practice to update the Raspberry Pi packages. To do this run the following command:

```
sudo apt update && sudo apt upgrade -y
```

Proceed by installing the rak_common_for_gateway stack. Run the following commands to install it.

1. Install Git on the Raspberry Pi

```
sudo apt update; sudo apt install git –y
```

2. Clone the rak_common_for_gateway stack

```
git clone https://github.com/RAKWireless/rak_common_for_gateway.git ~/rak_common_for_gateway
```

3. Enter the cloned folder and install the stack.

```
cd ~/rak_common_for_gateway
sudo ./install.sh
```

Choose the desired model of the gateway by typing the number and clicking Enter.

For example, if you are using RAK2287 SPI without LTE, you will need to type 7 and hit enter to start the installation.

Alternatively, if you are going to use RAK5146 USB without LTE, you will need to type 10 and start the installation.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/26.png"
  width="70%"
  caption="Installing rak_common_for_gateway stack"
/>

When the installation is complete, you will see the following on your screen.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/raspberry-pi-and-rak-lpwan-concentrators/27.png"
  width="70%"
  caption="Successfully Installed Stack"
/>

Now you can proceed with connecting the gateway to a LoRaWAN Network Server (LNS). 

You can refer to each RAK concentrator documentation below:

1. [RAK2245](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2245-Pi-HAT/Overview/) 
2. [RAK2247](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2247/Overview/) 
3. [RAK2287](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2287/Overview/) 
4. [RAK5146](https://docs.rakwireless.com/Product-Categories/WisLink/RAK5146/Overview/) 
