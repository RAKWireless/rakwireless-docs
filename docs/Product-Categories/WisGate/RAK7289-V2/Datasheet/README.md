---
rak_img: /assets/images/wisgate/rak7289-v2/RAK7289V2.png
rak_desc: RAK7289 V2 WisGate Edge Pro is an ideal product for IoT commercial deployment. With its industrial-grade components, it achieves a high standard of reliability. It supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security update.
rak_grp: [wisgate, edge]
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
    - RAK7289V2
    - RAK7289CV2
    - wisgate
    - datasheet
certifications:
    - [CE, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289V2_CE_Certification.pdf]
    - [ISED, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_ISED_Certification.zip]
    - [JBTL, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289CV2_JTBL_Certification.pdf]
    - [JRL, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289CV2_JRL_certification.pdf]
    - [KCC, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289_RAK7289C_RAK7289V2_RAK7289CV2_KC_Certification.pdf]
    - [MA, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289V2_MA_Certification.pdf]
    - [MTBF, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289CV2_MTBF_Report.pdf]
    - [RCM, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289_RAK7289V2_RCM_Certification.pdf]
    - [REACH, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289_RAK7289CV2_RAK7289V2_REACH_Report.pdf]
    - [RoHS, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289_RAK7289CV2_RAK7289V2_RoHS_Report.pdf]
    - [RCM, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289CV2_RCM_Certification.pdf]
    - [RSM, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289CV2_RSM_Certification.pdf]
    - [TDRA, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289CV2_TDRA_Certification.pdf]
    - [UKCA, https://downloads.rakwireless.com/LoRa/RAK7289V2/Certification/RAK7289C_RAK7289CV2_UKCA_Certification.pdf]

---


# RAK7289V2/RAK7289CV2 WisGate Edge Pro Datasheet

## Overview

### Descriptions

RAK7289 V2 WisGate Edge Pro is the latest edition of the RAK Edge Series. It is an ideal product for IoT commercial deployment. With its industrial-grade components, it achieves a high standard of reliability. The new RAK7289 V2 supports up to 16 LoRa channels, multi-backhaul with Ethernet, Wi-Fi, and Cellular connectivity. Optionally, there is a dedicated port for different power options, solar panels, and batteries. Its new enclosure is designed to allow the LTE, Wi-Fi, and GPS antennas to be inside the enclosure.

The RAK7289 V2 supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security updates like IPv6, OpenSSL 1.1 support, multiple accounts access, and more. The web UI has a fresh new look, with more user-friendly information tooltips.

Simply said, the RAK7289 is suited for any use case scenario, be it rapid deployment or customization with regard to UI and functionality.


:::warning ⚠️ WARNING
This product is designed to be powered by 12&nbsp;V<sub>DC</sub> via a dedicated power port. The use of solar chargers is prohibited, as they may provide overvoltage and cause damage to the device. We strongly advise against using such chargers with this product, and any damage resulting from their use will void the warranty.
:::

### Product Features

#### Hardware

- IP67/NEMA-6 industrial-grade enclosure with cable glands
- PoE (802.3af) + Surge Protection
- Dual LoRa Concentrators for up to 16 channels
- Backhaul: Wi-Fi, Ethernet, LTE (optional, available with RAK7289C)
- GPS
- Supports DC 12&nbsp;V or solar power supply with electricity monitoring (Solar Kit optional)
- Internal antenna for Wi-Fi, GPS, and LTE, external antenna for LoRa
- Dying-gasp (optional)

#### Software

- Built-in Network Server (full LoRaWAN support V 1.0.3)
- OpenVPN
- Software and UI sit on top of OpenWRT
- Full LoRaWAN Stack support with Semtech SX1303
- LoRa Frame filtering (node whitelisting)
- MQTT v3.1 bridging with TLS encryption
- Buffering of LoRa frames in Packet Forwarder mode in case of NS outage (no data loss)
- Full-duplex (optional)
- Listen Before Talk (optional)
- Fine timestamping (optional)

## Specifications

### Overview

The overview presents the block diagram for the RAK7289 V2 that shows the internal architecture of the board.

## Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7289-v2/datasheet/2.without-lte.png"
  width="70%"
  caption="RAK7289V2 WisGate Edge Pro V2 without LTE block diagram"
/>

<rk-img
  src="/assets/images/wisgate/rak7289-v2/datasheet/1.with-lte.png"
  width="70%"
  caption="RAK7289CV2 WisGate Edge Pro V2 with LTE block diagram"
/>


#### Main Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 128&nbsp;MB</td></tr>
        <tr><td rowspan="5">Wi-Fi feature</td><td>Frequency: 2.4&nbsp;GHz (802.11b/g/n)</td></tr>
        <tr><td>2x2 MIMO</td></tr>
        <tr><td>RX Sensitivity: -95&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 20&nbsp;dBm (Max)</td></tr>
        <tr><td>Operation channels: 2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1303 mPCIe card (connects maximum of two)</td></tr>
        <tr><td>8 Channels (16 channels optional)</td></tr>
        <tr><td>RX Sensitivity: -139&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 27&nbsp;dBm (Max)</td></tr>
        <tr><td>Listen Before Talk</td></tr>
        <tr><td>Frequency</td><td>EU433/CN470/EU868/US915/AS923/AS923-1/AS923-2/AS923-3/AS923-4/AU915/IN865/KR920</td></tr>
        <tr><td rowspan="8">Cellular Feature (available with RAK7289C V2)</td><td>Supports Quectel EG95-E/EG95-NA (IoT/M2M -optimized LTE Cat 4 Module)</td></tr>
        <tr><td>EG95-E for EMEA Region (Europe, Middle East and Africa)</td></tr>
        <tr><td>LTE FDD: B1/B3/B7/B8/B20/B28A</td></tr>
        <tr><td>WCDMA: B1/B8</td></tr>
        <tr><td>GSM/EDGE: B3/B8</td></tr>
        <tr><td>EG95-NA for North America Region</td></tr>
        <tr><td>LTE FDD: B2/B4/B5/B12/B13</td></tr>
        <tr><td>WCDMA: B2/B4/B5</td></tr>
        <tr><td>Power Supply</td><td>PoE (IEEE 802.3af) - 37~57&nbsp;VDC</td></tr>
        <tr><td>ETH</td><td>RJ45 (10/100 M)</td></tr>
        <tr><td rowspan="3">Antenna</td><td>LoRa: 1 or 2 N-Type connectors</td></tr>
        <tr><td>LTE: Internal antenna</td></tr>
        <tr><td>Wi-Fi: Internal antenna</td></tr>
        <tr><td>Ingress protection</td><td>IP67</td></tr>
        <tr><td>Enclosure material</td><td>Aluminium and plastic</td></tr>
        <tr><td>Operating temperature</td><td>-30˚&nbsp;C to +55˚&nbsp;C</td></tr>
        <tr><td>Operating humidity</td><td>0-95% RH non-condensing</td></tr>
        <tr><td>Installation Method</td><td>Pole or wall mounting</td></tr>
</tbody>
</table>

### Hardware

The hardware specification covers the interfacing of the RAK7289 V2 and its corresponding functionalities. It also presents the parameters and the standard values of the gateway.

#### RF Specifications

##### Wi-Fi Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Wireless Standard</td><td>IEEE 802.11b/g/n</td></tr>
        <tr><td>Operating Frequency</td><td>ISM band: 2.412~2.472 GHz</td></tr>
        <tr><td>Operation Channels</td><td>2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td rowspan="11">Transmit Power (The max power maybe different depending on local regulations) - per chain</td><td>802.11b</td></tr>
        <tr><td>  19&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>  19&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>  18&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>  16&nbsp;dBm @54&nbsp;Mbps</td></tr>
        <tr><td>  802.11n (2.4&nbsp;G)</td></tr>
        <tr><td>  18&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>  16&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>  17&nbsp;dBm @MCS0 (HT40)</td></tr>
        <tr><td>  15&nbsp;dBm @MCS7 (HT40)</td></tr>
        <tr><td rowspan="11">Receiver Sensitivity (Typical)</td><td>802.11b</td></tr>
        <tr><td>  -95&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>  -88&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>  -90&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>  -75&nbsp;dBm @54&nbsp;Mbps</td></tr>
        <tr><td>  802.11n (2.4&nbsp;G)</td></tr>
        <tr><td>  -89&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>  -72&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>  -86&nbsp;dBm @MCS0 (HT40)</td></tr>
        <tr><td> -68&nbsp;dBm @MCS7 (HT40)</td></tr>
 </tbody>
</table>

#### LoRa Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Operating Frequency</td><td>EU433/CN470/EU868/US915/AS923/AU915/IN865/KR920</td></tr>
        <tr><td>Transmit Power</td><td>27&nbsp;dBm (Max)</td></tr>
        <tr><td>Receiver Sensitivity</td><td>-139&nbsp;dBm (Min)</td></tr>
</tbody>
</table>

#### Interfaces

<br>

<rk-img
  src="/assets/images/wisgate/rak7289-v2/datasheet/3.interfaces.png"
  width="80%"
  caption="RAK7289 WisGate Edge Pro interfaces"
/>

- The function of the Reset key is as follows:
  - **Short press:** Restart the gateway.
  - **Long press** (5s and above): Restore factory settings.

- LEDs status description:

<table>
    <thead><tr><th>LEDs</th><th>Status Indication Description</th></tr></thead>
    <tbody>
        <tr><td>LED 1 (PWR)</td><td>Power indicator - The LED is on when device power is on</td></tr>
        <tr><td rowspan="4">LED 2 (ETH)</td></tr>
        <tr><td>ON - Linkup</td></tr>
        <tr><td>OFF - Linkdown</td></tr>
        <tr><td>Flicker - Data transmitting and receiving</td></tr>
        <tr><td rowspan="4">LED 3 (LoRa 1)</td></tr>
        <tr><td>ON - LoRa 1 is working</td></tr>
        <tr><td>OFF - LoRa 1 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 1 Packet receiving and sending</td></tr>
        <tr><td rowspan="8">LED 4 (WLAN)</td></tr>
        <tr><td>AP Mode:</td></tr>
        <tr><td>   -ON - The AP is up</td></tr>
        <tr><td>   -Flicker - Data receiving and sending</td></tr>
        <tr><td>STA Mode:</td></tr>
        <tr><td>   -Slow flicker (1&nbsp;Hz) - Disconnected</td></tr>
        <tr><td>   -ON - Connected</td></tr>
        <tr><td>   -Flicker - Data receiving and sending</td></tr>
        <tr><td rowspan="5">LED 5 (LTE)    </td></tr>
        <tr><td>Slow Flicker (1800&nbsp;ms High / 200&nbsp;ms Low) - Network searching</td></tr>
        <tr><td>Slow flicker (200&nbsp;ms High / 1800&nbsp;ms Low) - Idle</td></tr>
        <tr><td>Fast flicker (125&nbsp;ms High / 125&nbsp;ms Low) - Ongoing data transfer</td></tr>
        <tr><td>ON - Voice is working</td></tr>
        <tr><td rowspan="4">LED 6 (LoRa 2 for 16 channel)</td></tr>
        <tr><td>ON - LoRa 2 is working</td></tr>
        <tr><td>OFF - LoRa 2 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 2 Packet receiving and sending</td></tr>
 </tbody>
</table>


### Firmware

The firmware sits on OpenWRT. There is a Web UI for easy configuration and management of the device, as well as the possibility for SSH2 management. The WisGateOS V2 supports the feature to install extensions (WireGuard, Custom Logo, Breathing Light, and more to come). The extensions are available in [RAK download center](https://downloads.rakwireless.com/#LoRa/WisGateOS2/WisGateOS2-Extensions/).


|                 Model                 | Firmware Version |                                            Source                                            |
| :-----------------------------------: | :--------------: | :------------------------------------------------------------------------------------------: |
| RAK7289V2/RAK7289CV2 WisGate Edge Pro |      v2.2.1      | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip) |

### Software

#### Software Features

<table>
    <thead><tr><th>LoRa</th><th>Network</th><th>Management</th></tr></thead>
    <tbody>
        <tr><td>Gateway OTA management</td><td> </td><td>WisDM</td></tr>
        <tr><td>LoRa package forward (packet forwarder, Basics Station)</td><td>Wi-Fi Client mode</td><td>SSH2, NTP</td></tr>
        <tr><td>Frequency Band Setup</td><td>LTE APN Setup</td><td>Firmware update</td></tr>
        <tr><td>Country code setup</td><td>802.1q</td><td>Firmware update</td></tr>
        <tr><td>TX Power Setup</td><td>Uplink backup</td><td>LoRa Packet Forwarder</td></tr>
        <tr><td>Data logger</td><td>Support 802.1q</td><td>Built-in Network Server</td></tr>
        <tr><td>Location setup</td><td>Firewall</td><td>MQTT Bridge</td></tr>
        <tr><td>Statistic</td><td>DHCP Server/Client</td><td>OpenVPN, Ping Watch Dog</td></tr>
        <tr><td>Supports class A, B, C</td><td>Wi-Fi AP mode</td><td>WEB UI</td></tr>
        <tr><td>Server address and Port setup</td><td> </td><td> </td></tr>
</tbody>
</table>

## Models/Bundles




<table class="q-table"><thead><tr><th>Part Number</th> <th style="text-align: center;">8 Channel SX1303</th> <th style="text-align: center;">16 Channel SX1303</th> <th style="text-align: center;">Cat4 Cellular</th> <th style="text-align: center;">GPS</th> <th style="text-align: center;">Wi-Fi</th> <th style="text-align: center;">Dying gasp</th></tr></thead> <tbody><tr><td>RAK7289-XYZ</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td></tr> <tr><td>RAK7289-XYZ</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;"></td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td> <td style="text-align: center;">√</td></tr></tbody></table>



## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
