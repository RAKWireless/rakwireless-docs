---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7394. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7394/rak7394.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7394
  - RAK7394P
  - RAK7394C
  - wisgate
  - quickstart
---

# RAK7394 WisGate Developer CM4 Quick Start Guide

## Prerequisites

### What Do You Need?

- RAK7394/RAK7394C/RAK7394P WisGate Developer CM4 gateway
- 16 GB SD card + card reader
- 5&nbsp;V at least 2.5&nbsp;A Micro USB power supply
- A Windows/Mac OS/Linux Computer
- Latest Firmware

### What Is Included in the Package?

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/1.rak7394p.png"
  width="80%"
  caption="RAK7394P package inclusion"
/>

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/2.rak7394c.png"
  width="90%"
  caption="RAK7394C package inclusion"
/>

## Product Configuration

After burning the firmware image onto the SD Card, make sure you have inserted the SD Card into the **RAK7394 WisGate Developer CM4 gateway** and have the LoRa, and GPS Antenna connected.

:::warning ⚠️ WARNING
Before powering the device, connect the LoRa, LTE (only in the Cellular variant), and GPS antennas. Not doing so, might damage the boards.

After the antennas are attached, and the SD card is inserted in the carrier board, you can safely power the gateway on.
:::

:::tip 📝 NOTE:
RAK7394P WisGate Developer gateway supports Power-over-Ethernet. You can supply yourself with a PoE injector and power up the gateway via an Ethernet cable using a PoE injector.
:::

### Accessing Your Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose from, depending on the availability of the requirements needed.

#### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP Mode which means that you can find an SSID named **Rakwireless_XXXX** on your PC Wi-Fi Network List.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/3.access-point.png"
  width="70%"
  caption="RAKwireless access point"
/>

:::tip 📝 NOTE:
**XXXX** is the last 2&nbsp;bytes of your RAK7394’s Wi-Fi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note of the default IP address of the gateway provided below as this will be needed in connecting via SSH.
- **Wi-Fi Password**: rakwireless
- **Default IP Address**: 192.168.230.1
:::

#### RAKR314 Carrier Board Ethernet Port

You can also connect your PC and the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`.

1. To do this on a Windows PC, go to **Control Panel -> Network and Internet -> Network and Sharing Center** and click **Ethernet**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/4.network.png"
  width="100%"
  caption="Network and sharing center"
/>

2. Click **Properties**, then select **Internet Protocol Version 4 (TCP/IPv4)**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/5.ethernet.png"
  width="70%"
  caption="Ethernet properties"
/>

3. By default, the PC will obtain an IP Address automatically. Click **Option Use the following IP Address** and enter the IP address `192.168.0.10.20`, then press **OK**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/6.tcp-ipv4t.png"
  width="75%"
  caption="TCP/IPv4 Properties"
/>

Now, you should be able to access your gateway from your PC successfully using the IP Address `192.168.10.10` through SSH.

### Log into the Gateway

#### Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there, namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm,](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but for this guide, you will be using Putty.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/7.putty.png"
  width="45%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through Wi-Fi AP Mode, the IP Address is `192.168.230.1`
- If you have connected to the gateway through Ethernet, the IP Address is `192.168.10.10`
- It will then prompt you to enter the username and password. The default username and password are:
  - **Username**: pi
  - **Password**: raspberry

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/8.command.png"
  width="50%"
  caption="Command line after log in"
/>

#### Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in **the /Applications/Utilities/** directory. You can also launch it from Spotlight by hitting **Command + Spacebar** and typing **Terminal**, and then return:

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/9.mac.png"
  width="60%"
  caption="Opening terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter root mode by typing the following command:

```
sudo -i
```

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/10.ssh-mac.png"
  width="60%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter `ssh pi@192.168.230.1` in the terminal to log in to your gateway, the default password is **raspberry**.

- If you connect your PC with the gateway through Ethernet Cable, you should enter `ssh pi@192.168.10.10`, the default password is **raspberry**.

<rk-img
src="/assets/images/wisgate/rak7394/quickstart/11.successful.png"
  width="60%"
  caption="Log in Successful Notification"
/>

#### Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.
