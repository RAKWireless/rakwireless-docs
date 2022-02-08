---
rak_desc: Provides comprehensive information about your RAK7289 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7289/overview/RAK7289.png
tags:
  - datasheet
  - wisgate
  - RAK7289
prev: ../Overview/
next: false 
certifications:
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289C_RAK7289_RoHS_Certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289C_RAK7289_REACH_Certification.pdf]
  - [CE, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289_FCC_Certification.pdf]
  - [UKCA, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289_UKCA_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK7289/Certification/RAK7289_ISED_Certification.zip]
---


# RAK7289 WisGate Edge Pro Datasheet

## Overview


### Description 

**RAK7289 WisGate Edge Pro** is an ideal product for IoT commercial deployment. With its industrial-grade components, it achieves a high standard of reliability.

Supports up to 16 LoRa channels, multi backhaul with Ethernet, Wi-Fi, and Cellular connectivity. Optionally there is a dedicated port for different power options, solar panels, and batteries. With its new enclosure design, it allows the LTE, Wi-Fi, and GPS antennas to be inside the enclosure. 

The gateway provides for a solid out-of-the-box experience for quick deployment. Additionally, since its software and UI sits on top of OpenWRT it is perfect for the development of custom applications (via the open SDK).

Thus, the RAK7289 is suited for any use case scenario, be it rapid deployment or customization with regards to UI and functionality.

### Product Features

#### Hardware

- **IP67/NEMA-6** industrial grade enclosure with cable glands
- **PoE (802.3af)** + Surge Protection
- Dual LoRa Concentrators for up to **16 channels**
- **Backhaul:** Wi-Fi, LTE and Ethernet
- GPS
- Supports DC 12V or Solar power supply with Electricity monitoring (Solar Kit optional)
- Internal antenna for Wi-Fi, GPS and LTE, External antenna for LoRa
- Dying-Gasp(optional)

#### Software

- Built-in Network Server 
- OpenVPN
- Software and UI sit on top of **OpenWRT**
- LoRaWAN 1.0.3 
- **LoRa Frame filtering** (node whitelisting)
- **MQTT v3.1** Bridging with **TLS** encryption
- **Buffering of LoRa frames in Packet Forwarder mode** in case of NS outage (no data loss)
- **Full duplex (optional)**
- **Listen Before Talk (optional)**
- **Fine timestamping (optional)**

## Specifications

### Overview

The overview presents the block diagram for the RAK7289 that shows the internal architecture of the board.

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7289/datasheet/2.png"
  width="70%"
  caption="RAK7289 WisGate Edge Pro Block Diagram"
/>

#### Main Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 128 MB</td></tr>
        <tr><td rowspan="5">Wi-Fi feature</td><td>Frequency: 2.4 GHz (802.11 b/g/b/)</td></tr>
        <tr><td>2x2 MIMO</td></tr>
        <tr><td>RX Sensitivity: -95 dBm (Min)</td></tr>
        <tr><td>TX Power: 20 dBm (Max)</td></tr>
        <tr><td>Operation channels: 2.4 GHz: 1-13</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1303 mPCIe card (connects maximum of two)</td></tr>
        <tr><td>8 Channels (16 channels optional)</td></tr>
        <tr><td>RX Sensitivity: -139 dBm (Min)</td></tr>
        <tr><td>TX Power: 27 dBm (Max)</td></tr>
        <tr><td>Listen Before Talk</td></tr>
        <tr><td>Frequency</td><td>EU433/CN470/EU868/US915/AS923/AU915/IN865/KR920</td></tr>
        <tr><td rowspan="8">Cellular feature</td><td>Supports Quectel EG95-E/EG95-NA (IoT/M2M -optimized LTE Cat 4 Module)</td></tr>
        <tr><td>EG95-E for EMEA Region</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- LTE FDD: B1/B3/B7/B8/B20/B28A</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- WCDMA: B1/B8</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- GSM/EDGE: B3/B8</td></tr>
        <tr><td>EG95-NA for North America Region</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- LTE FDD: B2/B4/B5/B12/B13</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;- WCDMA: B2/B4/B5</td></tr>
        <tr><td>Power supply</td><td>PoE (IEEE 802.3 af), 37~57 VDC</td></tr>
        <tr><td>ETH</td><td>RJ45 (10/100 Mbps)</td></tr>
        <tr><td rowspan="3">Antenna</td><td>LoRa: 1 or 2 N-Type connectors</td></tr>
        <tr><td>LTE: Internal antenna</td></tr>
        <tr><td>Wi-Fi: Internal antenna</td></tr>
        <tr><td>Ingress protection</td><td>IP67</td><tr>
        <tr><td>Enclosure material</td><td>Aluminum and plastic</td></tr>
        <tr><td>Operating temperature</td><td>-30 ˚C to +55 ˚C</td></tr>
        <tr><td>Installation method</td><td>Pole or wall mounting</td></tr>
    </tbody>
</table>

### Hardware

The hardware specification covers the interfacing of the RAK7289 and its corresponding functionalities. It also presents the parameters and the standard values of the board.

#### RF Specifications

##### Wi-Fi Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Wireless Standard</td><td>IEEE 802.11 b/g/n</td></tr>
        <tr><td>Operating Frequency</td><td>ISM band: 2.412~2.472 (GHz)</td></tr>
        <tr><td>Operation Channels</td><td>2.4 GHz: 1-13</td></tr>
        <tr><td rowspan="11">Transmit Power<br>(The max power maybe different<br>depending on local regulations) - per chain</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;19 dBm @1 Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;19 dBm @11 Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;18 dBm @6 Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;16 dBm @54 Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;18 dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;16 dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;17 dBm @MCS0 (HT40) </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;15 dBm @MCS7 (HT40)</td></tr>
        <tr><td rowspan="11">Receiver Sensitivity<br>(Typical)</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-95 dBm @1 Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-88 dBm @11 Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-90 dBm @6 Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-75 dBm @54 Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-89 dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-72 dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-86 dBm @MCS0 (HT40)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-68 dBm @MCS7 (HT40)</td></tr>
    </tbody>
</table>

##### LoRa Radio Specifications

| Feature              | Specifications                                  |
| -------------------- | ----------------------------------------------- |
| Operating Frequency  | EU433/CN470/EU868/US915/AS923/AU915/IN865/KR920 |
| Transmit Power       | 27 dBm (Max)                                    |
| Receiver Sensitivity | -139 dBm (Min)                                  |

#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7289/datasheet/3.png"
  width="100%"
  caption="RAK7289 WisGate Edge Pro Interfaces"
/>


- The function of the Reset key is as follows:
  - **Short press:** Restart the gateway.
  - **Long press** (5s and above): Restore factory settings.

- LEDs status description:

<table>
    <thead>
        <tr><th>LEDs</th><th>Status Indication Description</th></tr>
    </thead>
    <tbody>
        <tr><td>LED 1 (PWR)</td><td>Power indicator - The LED is on when device power is on</td></tr>
        <tr><td rowspan="3">LED 2 (ETH)</td><td>ON - Linkup</td></tr>
        <tr><td>OFF - Linkdown</td></tr>
        <tr><td>Flicker - Data transmitting and receiving</td></tr>
        <tr><td rowspan="3">LED 3 (LoRa 1)</td><td>ON - LoRa 1 is working</td></tr>
        <tr><td>OFF - LoRa 1 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 1 Packet receiving and sending</td></tr>
        <tr><td rowspan="7">LED 4 (WLAN)</td><td>AP Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-ON - The AP is up</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Flicker - Data receiving and sending</td></tr>
        <tr><td>STA Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Slow flicker (1 Hz) - Disconnected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-ON - Connected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-Flicker - Data receiving and sending</td></tr>
        <tr><td rowspan="4">LED 5 (LTE)</td><td>Slow Flicker (1800 ms High / 200 ms Low) - Network searching</td></tr>
        <tr><td>Slow flicker (200 ms High / 1800 ms Low) - Idle</td></tr>
        <tr><td>Fast flicker (125 ms High / 125 ms Low) - Ongoing data transfer</td></tr>
        <tr><td>ON - Voice is working</td></tr>
        <tr><td rowspan="3">LED 6 (LoRa 2 for 16 channel)</td><td>ON - LoRa 2 is working</td></tr>
        <tr><td>OFF - LoRa 2 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 2 Packet receiving and sending</td></tr>
    </tbody>
</table>

### Software

#### Firmware

The firmware sits on OpenWRT, which makes it possible to customize it. There is a Web UI for easy configuration and management of the device, as well as the possibility for SSH2 management.

#### Software Features

| LoRaWAN                       | Network            | Managеment              |
| ----------------------------- | ------------------ | ----------------------- |
| Supports class A, B, C        | Wi-Fi AP mode      | WEB UI                  |
| LoRa package forward          | Wi-Fi Client mode  | SSH2, NTP               |
| Frequency band setup          | LTE APN setup      | Firmware update         |
| TX power setup                | Uplink backup      | LoRa packet forwarder   |
| Data logger                   | Support 802.1q     | Built-In Network Server |
| Statistic                     | DHCP Server/Client | OpenVPN, Ping Watch Dog |
| Location setup                | Firewall           | MQTT Bridge             |
| Server address and port setup |                    |                         |

## Models/Bundles

| Part Number | 8 Channel SX1303 | 16 Channel SX1303 | Cat4 Cellular | GPS  | Wi-Fi | Dying gasp |
| ----------- | :--------------: | :---------------: | :-----------: | :--: | :---: | :--------: |
| RAK7289-XYZ |        √         |                   |       √       |  √   |   √   |            |
| RAK7289-XYZ |                  |         √         |       √       |  √   |   √   |            |
| RAK7289-XYZ |        √         |                   |       √       |  √   |   √   |     √      |
| RAK7289-XYZ |                  |         √         |       √       |  √   |   √   |     √      |
| RAK7289-XYZ |        √         |                   |               |  √   |   √   |            |
| RAK7289-XYZ |                  |         √         |               |  √   |   √   |            |
| RAK7289-XYZ |        √         |                   |               |  √   |   √   |     √      |
| RAK7289-XYZ |                  |         √         |               |  √   |   √   |     √      |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />