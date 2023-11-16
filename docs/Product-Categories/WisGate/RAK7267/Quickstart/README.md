---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7267. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7267/RAK7267.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7267
  - quickstart
  - wisgate
---

# RAK7267 Quick Start Guide


## Prerequisites

### What do you need?

1. [RAK7267 WisGate Soho Pro](https://store.rakwireless.com/products/)
2. A Windows/Mac OS/Linux Computer

:::warning ⚠️ WARNING
- The SIM card slot of the gateway is not hot-swappable. Make sure that the gateway is switched off before inserting or ejecting the SIM card.
- The SD card found in the SD card slot must not be ejected, doing so might affect the performance of the device, as different logs and data are stored on it.
:::


### What is Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/1.package.png"
  width="70%"
  caption="RAK7267 package contents"
/>

## Product Configuration

### Installation

#### Insert SIM Card

If you will use a cellular network connection on your gateway, you can refer to this section. Otherwise, skip it.

1.  Start by removing the cover of the NanoSIM interface on the gateway Unify enclosure to expose the SIM card slot

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/nanosim-interface.png"
  width="40%"
  caption="SIM card slot"
/>

2. Push the SIM card into the card slot according to the placement method marked on the interface.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/insert-SIM-card.png"
  width="12%"
  caption="Inserting SIM card"
/>

3. Once completed, seal the interface cover.

#### Pole Mounting

This section provides the instructions on mounting and securing the mounting kit to the enclosure and the mounting pole.

1. Fix the pole mounts marked with the letter A on the gateway Unify enclosure using four (4) pieces of M3 x 8&nbsp;mm head screw with a washer. The fixed positions are shown in **Figure 5**.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/pole-vertical-A.png"
  width="15%"
  caption="Pole mounts marked with the letter A"
/>

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/pole-mount-vertical1.png"
  width="40%"
  caption="Fixing the pole mounts on the enclosure"
/>

2. After fixing the mounts on the enclosure, place the Unify Enclosure onto the pole by using two (2) steel strips (60-85&nbsp;mm).

:::tip 📝 NOTE

The steel strips **ONLY** support 60-85&nbsp;mm diameter pole.

:::

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/vertical-pole.png"
  width="25%"
  caption="Fixing the enclosure on the pole"
/>

### Power on the Gateway

In this section, it is assumed that you have read and performed the procedures listed in the **Installation** part of this document. RAK7267 supports solar battery system and 9~36&nbsp;V<sub>DC</sub> power supply. For outdoor deployment scenarios, it is recommended to use the RAK solar battery system for power supply. RAK7267 supports RAK9155 and RAK9154 solar battery systems as its power supply. To install the solar battery kits, you can refer to the <a href="https://docs.rakwireless.com/Product-Categories/Accessories/RAK9155/Quickstart/#overview" target="_blank">RAK9155 Quick Start Guide</a> and <a href="https://docs.rakwireless.com/Product-Categories/Accessories/RAK9154/Installation-Guide/" target="_blank">RAK9154 Solar Battery Installation Guide</a>.

:::tip 📝 NOTE

The solar battery kits are not included in the package. They should be purchased separately. 

+ <a href="https://store.rakwireless.com/products/ensure-short-term-uptime-and-sustainability-for-your-gateway-with-solar-battery-lite?_pos=1&_sid=ee4fb6d29&_ss=r" target="_blank">RAK9154 Backup Solar Battery Lite</a>
+ <a href="https://store.rakwireless.com/products/rak-battery-plus-rak9155?variant=42309251563718" target="_blank">RAK9155 Battery Plus</a>

:::

After the solar battery kits are deployed, connect your gateway using matching cables. Once the connection is completed, your gateway is ready to be powered up.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/battery-power.png"
  width="50%"
  caption="Connect the gateway to the RAK9155 Solar battery kits"
/>

### Access the Gateway

#### Connect Wi-Fi

For RAK7267, you need to access the gateway through Wi-Fi AP Mode. By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID, named **RAK7267_XXXX** on your PC's Wi-Fi Network List. **XXXX** is the last two bytes of the Gateway MAC address. 

1. To access the Web Management Platform, input the following IP Address in your Web browser: `192.168.230.1`.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/access-the-gateway.jpg"
  width="70%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>


:::tip 📝 NOTE

No password is required to connect via Wi-Fi.

:::


2. Using your preferred Web browser, input the aforementioned IP address and you should see the Login Page.

####  Set Login Password

1. For security reasons, upon the first log in, you must set a login password. This is done by filling in the desired password and confirming it in the provided fields. The password must meet the following requirements:

- At least 12 characters long.
- Has at least one special character (!“#$%&\‘()*+,-./:;<=>?@[]^_`{|}~).
- Has at least one number.
- Has at least one standard Latin letter (used in the English alphabet).

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/17.web-ui.png"
  width="100%"
  caption="Web UI login page"
/>


2. When the fields are filled in, click the **Set password** button to apply it. The web UI is now accessible and it will load the **LoRaWAN Statistics page**.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/18.stat-page.png"
  width="100%"
  caption="LoRaWAN statistics page"
/>



3. On the next log in, you need to use the set password for access. The default login username is **root**.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/19.set-password.png"
  width="100%"
  caption="Login Page with set password"
/>

### Access the Internet

#### Connect Through Wi-Fi

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/access-using-wifi.jpg"
  width="70%"
  caption="Accessing the Internet using Wi-Fi"
/>


1. Access the gateway's Web UI. Navigate to **Network** > **WAN** > **Wi-Fi**. Expand the Wi-Fi block and click on **Settings**. Make sure the **Interface** is enabled.
   
- For additional information, check the [WisGateOS 2 User manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview).

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/wifi-settings.png"
  width="65%"
  caption="Wi-Fi settings"
/>


2. You can either click the **Scan** button to choose your **ESSID** or manually type the ESSID of the network by clicking **enter network (E)SSID manually**.
3. Select the right **Encryption** method and enter the correct **Key**.

:::tip 📝 NOTE
Assuming you have entered the correct parameter values, you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (the same way as in AP mode).
:::

#### Connect Through Cellular

RAK7267 supports cellular connection. So you need to insert your SIM card first.

1. Access the gateway's Web UI. Navigate to **Network** > **WAN** > **Cellular**. Expand the Cellular block and click on **Settings**. Make sure the **Interface** is enabled.

- For additional information, check the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview" target="_blank">WisGateOS 2 User manual</a>.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/21.cellular-settings.png"
  width="85%"
  caption="Cellular Interface Page"
/>


2. If necessary, you can configure the following parameters based on the information provided by the network operator.

<rk-img
  src="/assets/images/wisgate/rak7267/quickstart/cellular-confi.png"
  width="60%"
  caption="Cellular settings"
/>

