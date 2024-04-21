---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7285. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7285/RAK7285.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7285
  - RAK7285
  - quickstart
  - wisgate
---

# RAK7285 Quick Start Guide


## Prerequisites

### What do you need?

1. <a href="https://store.rakwireless.com/products/wisgate-edge-ultra-full-duplex-the-ultimate-lora-gateway-for-iot-solutions-rak7285-rak7285c?utm_source=RAK7285&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK7285 WisGate Edge Ultra</a>
2. A Windows/Mac OS/Linux Computer

:::warning ⚠️ WARNING

The SD card found in the SD card slot must not be ejected. Doing so might affect the performance of the device, as different logs and data are stored on it.
:::


### What is Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/1.package.png"
  width="60%"
  caption="RAK7285 package contents"
/>

:::tip 📝 NOTE
The LoRa antenna is not included. It needs to be bought separately.
:::

## Product Configuration

### Installation

This section provides the instructions on mounting and securing the mounting kit to the enclosure and the mounting pole.

#### Mounting

1. Attach the mount adapter included in the mounting kit on the bottom of the enclosure using four M6*12 screws.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/2.mounting.png"
  width="45%"
  caption="Attaching the mount adapter to the enclosure"
/>


2. After attaching the mount adapter, fix the device bracket on it with four M6*12 screws.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/3.device-bracket.png"
  width="45%"
  caption="Mounting the device bracket to the enclosure"
/>

3. Position and fasten the pole clamps together around the pole with bolts, washers, and nuts.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/4.clamps.png"
  width="45%"
  caption="Mounting the clamps to a pole"
/>

:::tip 📝 NOTE

The pole supported by the brackets has a diameter ranging from 50~100&nbsp;mm. If the pole diameter exceeds 100&nbsp;mm, you can use steel strips instead. The standard mounting kit does not include steel strips, they are sold separately.

:::

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/5.steel-strips.png"
  width="25%"
  caption="Mounting using steel strips"
/>

4. Hang up the enclosure and affix it with two M6*12 screws.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/6.fasten-enclosure.png"
  width="45%"
  caption="Fastening the enclosure to the bracket"
/>

5. Attach the LoRa, Wi-Fi, and GPS antennas. If you choose the LTE variant, you also need to attach the LTE antennas.

#### Connecting the PoE Adapter

1. Connect the Ethernet cable from the enclosure to the Ethernet port labeled PoE adapter.
2. Connect an Ethernet cable from your LAN network to the Ethernet port labeled LAN on the adapter.
3. Connect one end of the power cord to the adapter, and the other end to a power outlet.

:::warning ⚠️ WARNING

Do not connect the adapter to the power outlet unless all installations are completed.
:::

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/7.poe-adapter.png"
  width="50%"
  caption="Connecting the PoE adapter"
/>

#### Weather Protection

To better protect the Ethernet cable gland and the antenna connector from the weather, you need to cover them with PVC tape.

1. Clean the surface of the connector that will be covered. Wrap a layer of PVC tape with a 50% overlap according to the rotation direction of the connector. Continue wrapping the PVC tape to about 10&nbsp;mm below the end of the connector.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/8.pvc-tape.png"
  width="35%"
  caption="Wrapping with PVC tape"
/>

2. Cut off about 50&nbsp;cm of the waterproof tape, and stretch it to double its length. Wrap three layers around the connector with a 50% overlap. Hold the tape in place with your hand for a few seconds.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/9.waterproof-tape.png"
  width="35%"
  caption="Wrapping with waterproof tape"
/>

3. Wrap three additional layers of PVC tape with natural uncoiling force and a 50% overlap. Make sure to cover the head and the tail of the connector.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/10.pvc-wrapping.png"
  width="35%"
  caption="Final PVC wrapping"
/>


#### Lightning Protection

This section covers the installation of the lightning surge protection system, addressing both indoor and outdoor placements of your RAK7285 WisGate Edge Ultra. Such a protection system must be taken into consideration to ensure a fully functional gateway without interruption or damage from the lighting.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/11.lightning-protection.png"
  width="90%"
  caption="Full lightning protection set-up"
/>

##### Outdoor Surge Protection System

- **Antenna Grounding**: RAKwireless recommends a lightning arrestor to be installed on all the antenna N-type terminals. The arrestors have to be N-type Female to Male to fit the antenna and enclosure connectors. Make sure you use a 10&nbsp;AWG or better wire to connect the screw terminals of the arrestors to the grounding rail mounted on the building wall (grounding bar in case of field deployment).
- **Gateway Grounding**: Additionally, it is recommended to use another 10&nbsp;AWG or better grounding wire to connect the screw terminal on the bottom left side of the gateway casing to the grounding rail (bar).

:::tip 📝 NOTE
No additional protection for the Ethernet cabling is required at the gateway side. It already has a built-in surge protection system (GDT + Anti-surge resistor).
:::

##### Indoor Surge Protection

For protecting the indoor equipment and circuitry connected to the gateway, it is recommended to install an Ethernet port SPD lightning arrestor. It should be positioned along the cabling connecting the gateway to the PoE injector. Make sure you connect its grounding wire terminal to an appropriate building grounding point.


:::warning ⚠️ WARNING

Should you fail to adhere to the recommendations in this document, RAKwireless carries no responsibility for any damage your equipment incurs due to a lightning strike.

:::

#### Recommended Equipment

- <a href="https://store.rakwireless.com/products/lightning-arrestor-for-gps-antenna" target="_blank">Lightning Arrestor for GPS Antenna</a>- This lightning arrestor connects between antenna and GPS receiver. A surge protection device for securing transceiver against transients, over-voltage, and surge currents induced by bolts of lightning. By adopting a high pass filter, this product can effectively suppress the low-frequency interference induced by lightning while letting through the GPS signal with low insertion loss. A transient suppression device (TVS) and a gas discharge tube (GDT) is adopted for the protection of the DC feed circuit.
- <a href="https://store.rakwireless.com/products/lightning-arrestor" target="_blank">Lightning arrestor for the LTE and Wi-Fi antennas</a>- This is a surge protective device for securing transceivers against over-voltage and surge current induced by bolts of lightning. RAKwireless recommends installing lightning arrestor on all N-type antenna terminals including LTE and 2.4G Wi-Fi antennas.
- <a href="https://store.rakwireless.com/products/pulsar-cable-rak9731-rak9733?utm_source=RAK9731&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Pulsar Cable RAK9731</a>: RAK9731 Pulsar cable is used for RAK7285 Lightning Protection. This cable is an N-Type Male - N-Type Female cable with 1.5&nbsp;m, 3&nbsp;m, 5&nbsp;m, 10&nbsp;m, or longer custom lengths. It is an LMR-400 coaxial cable with N-type connectors.
- <a href="https://store.rakwireless.com/products/signal-surge-protective?variant=29842390122541?utm_source=signalsurgeprotectivedevice&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Signal Surge Protective Device</a>: This surge protective device is suitable for Category 6 cable or Class E cable for the protection of equipment from surge and over-voltage induced by lightning or produced in the inner systems. It is widely used in office and industry comprehensive network wiring projects or similar telecommunication applications, such as Gigabit Ethernet, ATM, ISDN, and VoIP systems.
- <a href="(https://store.rakwireless.com/products/cat5-ethernet-cable?utm_source=ethernetcable&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Ethernet Cabling</a>: A CAT5 Ethernet Cable is recommended for an outdoor surge protection system. It is used for connections between the PoE injector, Ethernet SPD, router/switch, and the Ethernet/PoE port on RAK7285.

### Power On the Gateway

In this section, it is assumed that you have read and performed the procedures listed in the **Installation** part of this document.

1. Attach all antennas to the gateway.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/12.attached-antenna.png"
  width="75%"
  caption="RAK7285 with attached antennas"
/>

2. Power on the gateway. It is recommended to use **CAT5 Cable** to provide power to the gateway. Attach one end to the **PoE injector** and the other to the **Ethernet Port** on the bottom of the casing.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/13.powering-the-gateway.jpg"
  width="70%"
  caption="Powering the gateway using PoE"
/>


### Access the Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose from depending on the availability of the requirements needed.

:::warning ⚠️ WARNING

Do not power the device if the LoRa antenna port has been left open to avoid potential damage to the RAK7285 WisGate Edge Ultra.

:::

#### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID, named **RAK7285_XXXX** on your PC's Wi-Fi network list. `XXXX` is the last two bytes of the gateway's MAC address.

1. To access the Web Management Platform, input the following IP Address in your Web browser: `192.168.230.1`.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/access-the-gateway.jpg"
  width="70%"
  caption="Accessing the gateway via Wi-Fi AP mode"
/>

:::tip 📝 NOTE

No password is required to connect via Wi-Fi.

:::

2. Using your preferred Web browser, input the aforementioned IP address and you should see the Login Page.

#####  Set Login Password

1. For security reasons, upon the first log in, you must set a login password. This is done by filling in the desired password and confirming it in the provided fields. The password needs to comply with the following rules:

- At least 12 characters long.
- Has at least one special character (!“#$%&\‘()*+,-./:;<=>?@[]^_`{|}~).
- Has at least one number.
- Has at least one standard Latin letter (used in the English alphabet).

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/17.web-ui.png"
  width="100%"
  caption="Web UI login page"
/>


2. When the fields are filled in, click the **Set password** button to apply it. The web UI is now accessible and it will load the **LoRaWAN Statistics page**.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/18.stat-page.png"
  width="100%"
  caption="LoRaWAN statistics page"
/>



3. On the next log in, you need to use the set password for access. The default login username is **root**.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/19.set-password.png"
  width="100%"
  caption="Login Page with set password"
/>


#### WAN Port (Ethernet)

1. Connect the Ethernet cable to the port marked **ETH** on the gateway, and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/14.wan-port.jpg"
  width="70%"
  caption="Accessing the gateway via WAN Port (Ethernet)"
/>

2. The default IP is **`169.254.X.X`**, where the last two segments are mapped from the last four bits of your gateway'S MAC address.
  - For example, the last four bits of the MAC address are `0F:01` and the IP address is `169.254.15.1`.
  - Make sure to manually set the address of your PC to one in the same network (for example, `169.254.15.100`).

3. To do this, open the head to the **Ethernet Properties** and click the **Internet Protocol Version 4 (TCP/IPv4)**.
<rk-img
    src="/assets/images/wisgate/rak7285/quickstart/15.internet-properties.png"
    width="45%"
    caption="Internet properties"
/>

4. Select **Use the following IP address** and set the IP address (for example, `169.254.15.100`).

<rk-img
    src="/assets/images/wisgate/rak7285/quickstart/16.set-ip-address.png"
    width="45%"
    caption="Setting IP address of the PC"
/>

In this example, you can access the gateway on the `169.254.15.1` address.

#####  Set Login Password

1. For security reasons, upon the first log in, you must set a login password. This is done by filling in the desired password and confirming it in the provided fields. The password needs to comply with the following rules:

- At least 12 characters long.
- Has at least one special character (!“#$%&\‘()*+,-./:;<=>?@[]^_`{|}~).
- Has at least one number.
- Has at least one standard Latin letter (used in the English alphabet).

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/17.web-ui.png"
  width="100%"
  caption="Web UI login page"
/>


2. When the fields are filled in, click the **Set password** button to apply it. The Web UI is now accessible and it will load the **LoRaWAN Statistics page**.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/18.stat-page.png"
  width="100%"
  caption="LoRaWAN statistics page"
/>

3. On the next log in, you need to use the set password for access. The default login username is **root**.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/19.set-password.png"
  width="100%"
  caption="Login Page with set password"
/>

### Access the Internet

#### Connect Through WI-FI

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/access-using-wifi.jpg"
  width="70%"
  caption="Accessing the Internet using Wi-Fi"
/>

1. Access the gateway's web UI. Navigate to **Network** > **WAN** > **Wi-Fi**. Expand the Wi-Fi block and click on **Settings**. Make sure the **Interface** is enabled.
  - For additional information, check the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/" target="_blank">WisGateOS2 User Manual</a>.

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/wifi-settings.png"
  width="50%"
  caption="Wi-Fi settings"
/>


2. You can either click the **Scan** button to choose your **ESSID** or manually type the ESSID of the network by clicking **enter network (E)SSID manually**.
3. Select the right **Encryption** method and enter the correct **Key**.

:::tip 📝 NOTE
Assuming you have entered the correct parameter values, you should get an IP address assigned by your Wi-Fi router's (AP) built-in DHCP server. You can use this new IP address to log in via a web browser (the same way as in AP mode).
:::

#### Connect Through Ethernet/PoE

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/20.access-thru-ethernet.jpg"
  width="70%"
  caption="Accessing the Internet through Ethernet"
/>

1. Connect the Ethernet cable to the port marked **ETH** on the gateway, and the other end to the PoE port of the PoE injector.
2. Connect the LAN port of the PoE injector to your router. The router's DHCP server should assign an IP Address to the gateway.
3. Now, you can access the assigned IP to access the gateway. You can change the default settings below if you wish (details in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/" target="_blank">WisGateOS2 User Manual</a>).

<rk-img
  src="/assets/images/wisgate/rak7285/quickstart/21.ethernet-settings.png"
  width="45%"
  caption="Connect through Ethernet settings"
/>

