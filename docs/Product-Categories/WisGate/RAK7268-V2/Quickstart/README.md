---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7268V2V2. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7268-v2/overview/RAK7268V2.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7268V2
  - RAK7268CV2
  - quickstart
  - wisgate
---

# RAK7268V2/RAK7268CV2 Quick Start Guide
## Prerequisites

### What Do You Need?

1. [**RAK7268V2/RAK7268CV2 WisGate Edge Lite 2**](https://store.rakwireless.com/products/wisgate-edge-lite-2-rak7268v2-rak7268cv2?utm_source=WisGateRAK7268V2&utm_medium=Document&utm_campaign=BuyFromStore)
2. [Ethernet Cable](https://store.rakwireless.com/products/ethernet-cable-gland?utm_source=EthernetCableGland&utm_medium=Document&utm_campaign=BuyFromStore) (RJ-45 Port) for Ethernet connection
3. A Windows/macOS/Linux computer


:::warning ⚠️ WARNING
- The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
- The SD card found in the SD card slot must not be ejected, as it might affect the performance of the device, as different logs and data are stored on it.
:::

## Product Configuration

### Power on the Gateway

1. Attach the LoRa Antenna.

First and foremost, screw the antenna onto the RP-SMA connector on the back panel of the RAK7268V2/RAK7268CV2 WisGate Edge Lite 2.


:::warning ⚠️ WARNING

Do not power the device if the LoRa Antenna port has been left open to avoid potential damage to the RAK7268V2/RAK7268CV2 WisGate Edge Lite 2.

:::

2. Power the gateway **ON**.

It is recommended to use the 12 VDC adapter that comes with the RAK7268/RAK7268CV2 WisGate Edge Lite 2. Optionally, you can use your own PoE cable and PoE injector since the device supports PoE.


#### Casing and Ports


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/1.top-view.png"
  width="35%"
  caption="RAK7268V2/RAK7268CV2 WisGte Edge Lite 2 top view"
/>

<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/2.back-view.png"
  width="50%"
  caption="RAK7268V2/RAK7268CV2 WisGte Edge Lite 2 back view"
/>


#### Status LED Indicators


<table>
    <thead><tr><th>LEDs</th><th>Status Indication Description</th></tr></thead>
    <tbody>
        <tr><td>PWR LED</td><td>Power indicator - The LED is on when device power is on</td></tr>
        <tr><td>Breathing LED</td><td>Breathing after system up</td></tr>
        <tr><td rowspan="3">ETH LED</td><td>ON - Linkup</td></tr>
        <tr><td>OFF - Linkdown</td></tr>
        <tr><td>Flicker - Data transmitting and receiving</td></tr>
        <tr><td rowspan="3">LoRa LED</td><td>ON - LoRa is working</td></tr>
        <tr><td>OFF - LoRa is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa Packet receiving and sending</td></tr>
        <tr><td rowspan="8">WLAN LED</td><td>AP Mode:</td></tr>
        <tr><td>-ON - the AP is up</td></tr>
        <tr><td>-OFF - The AP is down</td></tr>
        <tr><td>-Flicker - Data receiving and sending</td></tr>
        <tr><td>STA Mode:</td></tr>
        <tr><td>-Slow flicker (1&nbsp;Hz) - Disconnected</td></tr>
        <tr><td>-ON - Connected</td></tr>
        <tr><td>-Flicker - Data receiving and sending</td></tr>
        <tr><td rowspan="3">LTE LED (functional
only in RAK7268CV2)</td><td>Slow Flicker (1800&nbsp;ms High / 200&nbsp;ms Low) - Network searching</td></tr>
        <tr><td>Slow flicker (200&nbsp;ms High / 1800&nbsp;ms Low) - Idle</td></tr>
        <tr><td>Fast flicker (125&nbsp;ms High / 125&nbsp;ms Low) - Ongoing data transfer</td></tr>
    </tbody>
</table>


#### Reset Key Functions

The functions of the **Reset** key are as follows:

1. **Short press** - Restarts the gateway.
2. **Long press (5 seconds and above)** - Restores factory settings.


#### Access the Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose from depending on the availability of the requirements needed.


:::warning ⚠️ WARNING

Do not power the device if the LoRa Antenna port has been left open to avoid potential damage to the RAK7268V2/RAK7268CV2 WisGate Edge Lite 2.

:::


#### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID named **RAK7268_XXXX** on your PC's Wi-Fi Network List. **XXXX** is the last two bytes of the gateway's MAC address. To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.


:::tip 📝 NOTE:
 No password is required to connect via Wi-Fi
:::


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/3.access-via-wifi.png"
  width="70%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>



#### WAN Port (Ethernet)


1. Connect the Ethernet cable to the gateway port marked ETH and the other end to your PC.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/4.via-wan-port.png"
  width="70%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>


2. The default IP is **169.254.X.X**. The last two segments (X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are **0F:01**, and the IP address is `169.254.15.1`. Make sure to manually set the address of your PC to one in the same network (for example, `169.254.15.100`).


3. To do this, open the head to the **Ethernet Properties** and click the **Internet Protocol Version 4 (TCP/IPv4)**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/5.internet-properties.png"
  width="50%"
  caption="Internet properties"
/>

4. Select **Use the following IP address** and set the IP address (for this example to `169.254.15.100`).


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/6.setting-ip-address.png"
  width="50%"
  caption="Setting IP address of the PC"
/>

In this example, you can access the gateway on the `169.254.15.1` address.


#### Set Login Password

1. For security reasons, upon the first login, the user must set a login password. This is done by filling in the desired password and confirming it in the provided fields.

The password needs to comply with the following rules:
- Should be at least 12 characters long;
- Has at least one special character (!“#$%&\‘()*+,-./:;<=>?@[]^_`{|}~);
- Has at least one number;
- Has at least one standard Latin letter (used in the English alphabet). 


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/7.login-page.png"
  width="100%"
  caption="Web UI login page"
/>


2. When the fields are filled in, click the **Set password** button to apply it. The Web UI is now accessible, and it will load the **LoRaWAN Statistics** page.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/8.stat-page.png"
  width="100%"
  caption="LoRaWAN statistics page"
/>


3. On the next login, the user needs to use the set password for access. The default login username is **root.**

<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/9.login-page.png"
  width="100%"
  caption="Login Page with set password"
/>


### Access the Internet

#### Connect through Wi-Fi

1. Access the gateway's Web UI. Navigate to **Network > WAN > Wi-Fi Menu**. Expand the Wi-Fi field and click on **Settings**. Make sure to enable the **Interface** as it is disabled initially.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/10.access-wifi-mode.png"
  width="70%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>


For additional information, check the [WisGateOS 2 User manual.](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview)


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/11.wifi-credentials.png"
  width="60%"
  caption="Connect through Wi-Fi credentials"
/>

2. You can either click the **Scan** button to choose your **ESSID** or manually type the ESSID of the network by clicking **enter network (E)SSID manually**.
3. Select the right **Encryption** method and enter the correct **Key**.


:::tip 📝 NOTE:
Assuming you have entered the correct parameter values you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (the same way as in AP mode).
:::


#### Connect through Ethernet

1. Connect the Ethernet cable to the port marked **ETH** on the gateway and the other end to the router. The router's DHCP server should assign an IP Address to the gateway. 



<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/12.ethernet-settings.png"
  width="70%"
  caption="Connect through Ethernet settings"
/>


2. Connect your PC to the LAN router.

3. Now, you can access the assigned IP to access the gateway. You can change the default settings if you wish (details in the [WisGate2 OS User Manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview)).


<rk-img
  src="/assets/images/wisgate/rak7268-v2/quickstart/13.connect-ethernet.png"
  width="60%"
  caption="Connect through Ethernet settings"
/>
