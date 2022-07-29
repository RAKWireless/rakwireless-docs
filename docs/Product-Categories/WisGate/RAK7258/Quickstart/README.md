---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7258. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7258/quickstart/1.main/RAK7258_home.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7258
  - quickstart
  - wisgate
---

# RAK7258 Quick Start Guide

## Prerequisites



### What Do You Need?

1. **RAK7258 WisGate Edge Lite**
2. Ethernet Cable (RJ-45 Port)
3. A Windows/Mac OS/Linux Computer

:::warning ⚠️ WARNING
The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
:::

### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/package_contents.jpg"
  width="70%"
  caption="RAK7258 Package Contents"
/>

## Product Configuration

### Wall Mounting Guide

1. Use a **5-millimeter drill bit** to drill 2 holes on a wall. Follow the dimensions on the image as a guideline for spacing the holes. When done insert the screw anchors into the wall.

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/assembly-bottom-panel.png"
  width="50%"
  caption="RAK7258 WisGate Edge Lite Bottom Panel"
/>

2. Install the screws into the wall, leaving about **3-millimeters** of clearance.

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/assembly-wall-screw.png"
  width="60%"
  caption="RAK7258 WisGate Edge Lite Wall Screw Arrangement"
/>

3. Insert the screw heads into the hanging holes located on the gateway back-plate, then gently pull down to complete the installation

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/assembly-wall-attachment.png"
  width="60%"
  caption="RAK7258 WisGate Edge Lite Wall Attachment Guide"
/>

### Power on the Gateway

1. Attach the LoRa Antenna

First and foremost, screw on the antenna to the SMA connector back panel of the RAK7258 WisGate Edge Lite

:::warning ⚠️ WARNING
 Do not power the device if the LoRa Antenna port has been left open to avoid potential damage in the RAK7258 WisGate Edge Lite.
:::

2. **Power** the Gateway **ON**

It is recommended to use the **12V DC adapter** that comes with the RAK7258 WisGate Edge Lite. Optionally, you can use your own **PoE cable** and **injector** since the device supports PoE.

#### Casing and Ports 

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/rak7258-back-panel.png"
  width="50%"
  caption="RAK7258 WisGate Edge Lite Back Panel"
/>

#### Status LED Indicators

| LEDs | Status Indication                                                                                                             |
| ---- | ----------------------------------------------------------------------------------------------------------------------------- |
| PWR  | Power Indicator, LED is on when the device is powered                                                                         |
| ETH  | **ON**– link is up, **OFF** – link is down, **Flashing** – Data is being transferred                                          |
| LoRa | **ON** - LoRa module status is up, **OFF** – LoRa module status is down, **Flashing** – LoRa module data is being transferred |
| ACT  | Reserved for future use                                                                                                       |
| STAT | Reserved for future use                                                                                                       |
| WLAN | **AP Mode** : **ON** - WLAN status is up, **Flashing** - Data is being transferred                                            |
|      | **STA Mode** : **Slow Flashing** (1Hz) - Disconnected, **ON** - Connected, **Flashing** - Data is being transferred           |


#### Reset Key Functions
The function of the **Reset** key is as follows:

1. **Short press**: Restarts the Gateway
2. **Long press** (**5 seconds and above**): Restore Factory Settings


### Access the Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose form depending on the availability of the requirements needed.

:::warning ⚠️ WARNING
 Do not power the device if the LoRa Antenna port has been left open to avoid potential damage in the RAK7258 WisGate Edge Lite."
:::

#### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**RAK7258_XXXX**" on your PC's Wi-Fi Network List. "**XXXX**" is the last two bytes of the Gateway MAC address.

:::tip 📝 NOTE:
 No password is required to connect via Wi-Fi
:::

* Using your preferred Web browser, login the credentials provided below:
    * **Browser Address**: `192.168.230.1`
    * **Username**: root
    * **Password**: root

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/web-ui-home.jpg"
  width="100%"
  caption="Web User Interface Log-in"
/> 

#### WAN Port DHCP IP

When DHCP Server is in the network where the gateway WAN interface is located, the WAN interface can automatically get the IP address. After inquiring the IP address of the gateway through DHCP Server, the WEB management platform of the gateway can be accessed through the DHCP IP address of WAN interface. Same as with the Wi-Fi AP mode, the same IP Address: `192.168.230.1` shall be used to access the **Web Management Platform**.


### Access the Internet

#### Connect through Wi-Fi

Go into the **Network>Wi-Fi Menu** and make sure to enable the **Wireless Client** as it is disabled initially. Enter or click "**Scan**" to choose your **ESSSID**, select the right **Encryption** method and enter the correct **Key**.

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/wifi-credentials.png"
  width="60%"
  caption="Connect through Wi-Fi Credentials"
/> 

:::tip 📝 NOTE:
 Assuming you have entered the correct parameter values you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (same way as in AP mode).
:::

#### Connect through Ethernet/PoE

Connect the **Ethernet Port (ETH)** of the RAK7258 WisGate Edge Lite via an Ethernet cable to your **Router**. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish (details in the User Manual).

<rk-img
  src="/assets/images/wisgate/rak7258/quickstart/2.quickstart/ethernet-settings.png"
  width="60%"
  caption="Connect through Ethernet Settings"
/> 




