---
next: ../Datasheet/
prev: ../Overview/
tags:
  - RAK7240
---
# Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wisgate/rak7240/quickstart/1.rak7240-overview.jpg"
  width="70%"
  caption="RAK7240 WisGate Edge Prime"
/> -->

### What do you need?

1. **RAK7240 WisGate Edge Prime**
2. A Windows/Mac OS/Linux Computer

### What's included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/2.package-contents.jpg"
  width="80%"
  caption="RAK7240 WisGate Edge Prime"
/>

:::tip 📝 NOTE
The number of antennas in different depending on what you order. Refer to the store for more information.
:::

## Product Configuration

### Power on the Gateway

1. Attach the antennas

First and foremost, screw on the antennas. All 5 of them should be installed, two (2) antennas on the **bottom** (**Wi-Fi**, **GPS**) and three (3) on the **top** (**LoRa**, **LTE**)

:::warning ⚠️ WARNING
Do not power the device if any antenna port has been left open. In case you do not desire to use one or more antenna feature, make sure to terminate the port with a **50 Ohm load**.
:::

2. Power on the Gateway

It is recommended to use a **CAT5 Cable** to provide power to the Gateway. Attach one end to the provided **PoE injector** and the other to the **Ethernet Port** (ETH) on the bottom of the casing.

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/3.power-through-poe.jpg"
  width="70%"
  caption="Powering the Gateway using PoE"
/>


### Access the Gateway

#### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7240_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address. To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi.
:::

Using your preferred Web browser, input the aforementioned IP Address and you should see the same Log-in Page shown in the following image. Login the credentials provided below:

- **Username**: root
- **Password**: root

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/4.access-through-apmode.jpg"
  width="70%"
  caption="Accessing the Gateway via Wi-Fi AP Mode"
/>

#### WAN Port (Ethernet)

Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X**. The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network (for example 169.254.15.100). Use the same credentials for the Web UI as for AP mode.

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/5.access-through-ethernet.jpg"
  width="70%"
  caption="Accessing the Gateway via WAN Port (Ethernet)"
/>


### Access the Internet

#### Connect through Wi-Fi

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/6.access-internet-wifi.jpg"
  width="70%"
  caption="Accessing the Internet using Wi-Fi"
/>

Go into the **Network>Wi-Fi Menu** and make sure to enable the **Wireless Client** as it is disabled initially. Enter or click "**Scan**" to choose your **ESSID**, select the right **Encryption** method and enter the correct **Key**.

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/7.access-wifi-credentials.png"
  width="60%"
  caption="Connect through Wi-Fi Credentials"
/>

:::tip 📝 NOTE
Assuming you have entered the correct parameter values you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (same way as in AP mode).
:::


#### Connect through Ethernet/PoE

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/8.access-internet-ethernet.jpg"
  width="70%"
  caption="Accessing the Internet through Ethernet"
/>

Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your router. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish (details in the User Manual).

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/9.access-ethernet-credentials.png"
  width="60%"
  caption="Connect through Ethernet Settings"
/>

### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about The Things Network through their [documentation](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your RAK7240 WisGate Edge Prime into the internet through a  router according to the method which has been introduced in the [Access the Internet](#access-the-internet) section of this document.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/10.ttn-homepage.png"
  width="100%"
  caption="The Things Network Home Page"
/>


1. In the **Register Gateway** menu, select the “**I’m using the legacy packet forwarder**” option, and fill-in the Gateway EUI.

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/11.register-gateway.png"
  width="100%"
  caption="Registering your Gateway"
/>

:::tip 📝 NOTE
 The Gateway EUI can be found either on the sticker on the casing or via the LoRa Packet Forwarder page in the LoRa Gateway menu once you log via the Web UI.
:::

2. Select your [Frequency Plan](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans.html) depending on your location. This should populate the Router field. Optionally you can choose to enter the Gateway coordinates in the map’s upper right corner and select if the gateway is indoor or outdoor via the Antenna placement field below the map.

3. Upon successful registration you should see the following screen:

<rk-img
  src="/assets/images/wisgate/rak7240/quickstart/12.ttn-successful.png"
  width="100%"
  caption="Gateway successfully connected to The Things Network (TTN)"
/>

:::tip 📝 NOTE
 By default, the Gateway is set to connect to TTN. For detailed information about advanced configuration options refer to the [WEB Management Platform - LoRa Network](/Knowledge-Hub/Learn/Resources/WEB-Management-Platform/#lora®-network) section.
:::

<!---
Link for Web Management Platform for Packet Forwarder is temporary until centralized doc for Deployment Guides is generated.
-->