---
next: ../Supported-LoRa-Network-Servers/
prev: ../Overview/
tags:
  - RAK7240V2
  - RAK7240CV2
  - wisgate
  - quickstart
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7240V2. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak7240-v2/RAK7240V2.png
---

# RAK7240V2/RAK7240CV2 Quick Start Guide

## Prerequisites

### What Do You Need?

1. **[RAK7240V2 WisGate Edge Prime](https://store.rakwireless.com/products/wisgate-edge-prime-rak7240v2-rak7240cv2?utm_source=WisGateRAK7240CV2&utm_medium=Document&utm_campaign=BuyFromStore)**
2. A Windows/Mac OS/Linux Computer

:::warning ⚠️ WARNING

- The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
- The SD card found in the SD card slot must not be ejected, as it might affect the performance of the device, as different logs and data are stored on it.
:::

### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/1.package-content.jpg"
  width="80%"
  caption="RAK7240V2 Interfaces"
/>


:::tip 📝 NOTE
The number of antennas depends on what you order. Refer to the store for more information.
:::

## Product Configuration

### Gateway Installation Guide

For details about the interfaces and connectors of RAK7240V2 WisGate Edge Prime Gateway enclosure, refer to the [Datasheet](../Datasheet/).

#### Installation

There are two options for installing the RAK7240 WisGate Edge Prime Gateway:

##### Pole Mounting

1. Fix the installation kit at the bottom of the device with four M5*8 screws.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/2.fix-installation-kit.png"
  width="50%"
  caption="Fixing the installation kit to the RAK7240"
/>


2. Slide the steel band clamps through the rectangular hole of the installation kit. Wrap the band clamps around the pole, lock them, and then tighten the clamps using a screwdriver.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/3.fix-to-pole.png"
  width="25%"
  caption="Fixing the RAK7240 to a Pole"
/>


##### Wall Mounting

1. Use Ø5&nbsp;mm drill head and drill four (4) holes on the wall according to the dimension displayed in Figure 4. Plug the screw anchors in the wall.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/4.wall-mount.png"
  width="50%"
  caption="RAK7240 wall mounting dimensions"
/>


2. Using the tapping screws, attach the device to the wall.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/5.fix-to-wall.png"
  width="50%"
  caption="Fixing RAK7240 to a wall"
/>


#### Weather Protection

To better protect the Ethernet cable gland and the antenna connector from the weather, you need to cover them with PVC tape.

1. Clean the surface area of the connector that will be wrapped. Wrap a layer of PVC tape with a 50% overlap according to the rotation direction of the connector. Continue wrapping the PVC tape to about 10&nbsp;mm below the end of the connector.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/6.pvc-tape.png"
  width="35%"
  caption="Wrapping with PVC tape"
/>


2. Cut off about 50&nbsp;cm waterproof tape. Stretch it to double the length, and wrap three layers around the connector with a 50% overlap. Hold the tape in place with your hand for a few seconds.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/7.waterproof-tape.png"
  width="35%"
  caption="Wrapping with waterproof tape"
/>


3. Wrap three additional layers with PVC tape with natural uncoiling force and a 50% overlap. Make sure to cover the head and the tail of the connector.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/8.pvc-wrapping.png"
  width="35%"
  caption="Final PVC wrapping"
/>



### Power on the Gateway

1. Attach the antennas

First and foremost, screw on the antennas.

:::warning ⚠️ WARNING
Do not power the device if any antenna port has been left open. In case you do not desire to use one or more antenna features, make sure to terminate the port with a **50&nbsp;Ohm load**.
:::

2. Power on the Gateway

It is recommended to use a **CAT5 Cable** to provide power to the Gateway. Attach one end to the provided **PoE injector** and the other to the **Ethernet Port** (ETH) on the bottom of the casing.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/9.power-gateway.jpg"
  width="100%"
  caption="Powering the gateway using PoE"
/>

### Access the Gateway

#### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7240V2_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address. To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi.
:::

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/10.access-gateway.jpg"
  width="100%"
  caption="Accessing the gateway via Wi-Fi AP Mode"
/>



#### WAN Port (Ethernet)

Connect the Ethernet cable to the port marked “ETH” on the Gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/11.via-wan-port.jpg"
  width="100%"
  caption="Accessing the gateway via WAN Port (Ethernet)"
/>


The default IP is **169.254.X.X**. The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is `169.254.15.1`. Make sure to manually set the address of your PC to one in the same network (for example `169.254.15.100`).

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/12.internet-properties.png"
  width="45%"
  caption="Internet properties"
/>


Select Use the following IP address and set the IP address (for this example `169.254.15.100`).

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/13.set-ip.png"
  width="45%"
  caption="Setting IP address of the PC"
/>


In this example, you can access the gateway on the `169.254.15.1` address.


#### Set Login Password

For security reasons, upon the first login, you must set a login password. This is done by filling in the desired password and confirming it in the provided fields.

The password needs to comply with the following rules:

- Should be at least 12 characters long
- Has at least one special character (!“#$%&\‘()*+,-./:;<=>?@[]^_`{|}~)
- Has at least one number
- Has at least one standard Latin letter (used in the English alphabet)

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/14.login-page.png"
  width="100%"
  caption="Web UI login page"
/>


When the fields are filled in, click the Set password button to apply it. The Web UI is now accessible, and it will load the LoRaWAN Statistics page.


<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/15.stat-page.png"
  width="100%"
  caption="LoRaWAN statistics page"
/>


On the next login, you need to use the set password for access. The default login username is **root**.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/16.set-password.png"
  width="100%"
  caption="Login page with set password"
/>


### Access the Internet

#### Connect through Wi-Fi

Access the gateway's Web UI. Navigate to Network > WAN > Wi-Fi Menu. Expand the Wi-Fi field and click on **Settings**. Make sure to enable the Interface as it is disabled initially.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/17.wifi-ap-mode.jpg"
  width="100%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>


For additional information, check the [WisGateOS 2 User manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/).


<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/18.essid-network.png"
  width="70%"
  caption="(E)SSID Network"
/>


You can either click the Scan button to choose your ESSID or manually type the ESSID of the network by clicking enter network (E)SSID manually.

Select the right Encryption method and enter the correct key.

:::tip 📝 NOTE
Assuming you have entered the correct parameter values you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (the same way as in AP mode).
:::


#### Connect through Ethernet/PoE

Connect the Ethernet cable to the port marked ETH on the gateway and the other end to the router. The router's DHCP server should assign an IP Address to the gateway.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/19.access-ethernet.jpg"
  width="100%"
  caption="Accessing the Internet through Ethernet"
/>


Connect your PC to the LAN router.

Now, you can access the assigned IP to access the gateway. You can change the default settings if you wish, and refer to [WisGateOS 2 User manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/).


<rk-img
  src="/assets/images/wisgate/rak7240-v2/quickstart/20.default-credentials.png"
  width="60%"
  caption="Default settings"
/>



