---
rak_img: /assets/images/wisgate/rak7285/RAK7285.png
rak_desc: RAK7285 WisGate Edge Ultra is an ideal product for IoT commercial deployment. It supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security update. Its new enclosure is designed to allow the cavity filter to be inside the enclosure.
rak_grp: [wisgate, edge]
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
    - RAK7285
    - RAK7285
    - wisgate
    - datasheet
---


# RAK7285 WisGate Edge Ultra Datasheet

## Overview

### Descriptions

**RAK7285 WisGate Edge Ultra** is the latest edition of the RAK WisGate Edge Series, specifically designed for IoT commercial deployments. With its industrial-grade components, it ensures a high level of reliability for any use case scenario, including rapid deployment or UI and functionality customization.

The RAK7285 supports up to 8 LoRa channels and provides backhaul for Ethernet connectivity. It has a dedicated port for different power options, such as solar panels and batteries. Additionally, the new enclosure design allows the cavity filter to be inside the enclosure.

This gateway operates under WisGateOS2, which is built on the latest OpenWRT kernel. This new version incorporates the most recent security updates, such as OpenSSL 1.1 and multiple account access. In addition, the web UI has been updated with a new design and user-friendly information tooltips.

### Product Features

#### Hardware

- **IP67** industrial-grade enclosure with cable glands
- **PoE (802.3at)** + Surge Protection
- LoRa Concentrator for up to **8 channels**
- **Backhaul**: Ethernet
- GPS
- Supports 9~36&nbsp;V<sub>DC</sub> power supply or solar power supply with electricity monitoring (Solar Kit - optional)
- External antenna for GPS and LoRa

#### Software

- Built-in Network Server (full LoRaWAN support v1.0.3)
- Supports extension installation (OpenVPN, WireGuard)
- Software and UI sit on top of **OpenWRT**
- Full LoRaWAN Stack support with Semtech SX1303
- **LoRa Frame filtering** (node whitelisting)
- **MQTT v3.1** bridging with TLS encryption
- **Buffering of LoRa frames in Packet Forwarder mode** in case of NS outage (automatic data recovery)
- **Full-duplex**
- **Listen Before Talk**
- **Cellular connectivity** (for RAK7285C)
- **Fine timestamping** (optional)

## Specifications

### Overview

The overview presents the block diagram for the RAK7285 that shows the internal architecture of the board.

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7285/datasheet/1.rak7285-block-diagram.png"
  width="80%"
  caption="RAK7285 WisGate Edge Ultra block diagram"
/>


### Main Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 128&nbsp;MB</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1303 On Board</td></tr>
        <tr><td>8 Channels</td></tr>
        <tr><td>RX Sensitivity: -139&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 30&nbsp;dBm (Max)</td></tr>
        <tr><td>Listen Before Talk</td></tr>
        <tr><td>Frequency</td><td>US915/AU915</td></tr>
        <tr><td>Power Supply</td><td>PoE (IEEE 802.3at)<br>42~57&nbsp;V<sub>DC</sub></td></tr>
        <tr><td>ETH</td><td>RJ45 (10/100 M)</td></tr>
        <tr><td rowspan="4">Antenna</td><td>LoRa: N-Type connector (one for the 8-channel gateway and two for the 16-channel gateway)</td></tr>
        <tr><td>GPS: One N-Type connector</td></tr>
        <tr><td>Wi-Fi: Two N-Type connectors</td></tr>
        <tr><td>LTE: Two N-Type connectors( only for RAK7285C)</td></tr>
        <tr><td>Ingress Protection</td><td>IP67</td></tr>
        <tr><td>Enclosure Material</td><td>Aluminum</td></tr>
        <tr><td>Dimensions</td><td>310&nbsp;x&nbsp;290&nbsp;x&nbsp;146&nbsp;mm</td></tr>
        <tr><td>Operating Temperature</td><td>-30˚&nbsp;C to +55˚&nbsp;C</td></tr>
        <tr><td>Installation Method</td><td>Pole or wall mounting</td></tr>
</tbody>
</table>


### Hardware

The hardware specification covers the interfacing of the RAK7285 and its corresponding functionalities. It also presents the parameters and the standard values of the gateway.

#### RF Specifications


##### LoRa Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Operating Frequency</td><td>US915/AU915</td></tr>
        <tr><td>Transmit Power</td><td>30&nbsp;dBm (Max)</td></tr>
        <tr><td>Receiver Sensitivity</td><td>-139&nbsp;dBm (Min)</td></tr>
</tbody>
</table>


#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7285/datasheet/2.interfaces1.png"
  width="60%"
  caption="RAK7285 WisGate Edge Ultra interfaces"
/>

<rk-img
  src="/assets/images/wisgate/rak7285/datasheet/2.interfaces2.png"
  width="60%"
  caption="RAK7285 WisGate Edge Ultra interfaces"
/>

##### Reset Key Functions

The function of the Reset key is as follows:
- **Short press**: Restart the gateway.
- **Long press** (5&nbsp;seconds or more): Restore factory settings.

##### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the main board.

<table>
    <thead><tr><th>LEDs</th><th>Status Indication Description</th></tr></thead>
    <tbody>
        <tr><td>LED 1 (PWR)</td><td>Power Indicator: The LED is on when device power is on.</td></tr>
        <tr><td rowspan="4">LED 2 (ETH)</td></tr>
        <tr><td>ON: Linkup</td></tr>
        <tr><td>OFF: Linkdown</td></tr>
        <tr><td>Flicker: Data transmitting and receiving</td></tr>
        <tr><td rowspan="4">LED 3 (LoRa)</td></tr>
        <tr><td>ON: LoRa is working.</td></tr>
        <tr><td>OFF: LoRa is not working.</td></tr>
        <tr><td>Flicker: Indicate LoRa Packet receiving and sending</td></tr>
 </tbody>
</table>

### Software

<table>
    <thead><tr><th>LoRa</th><th>Network</th><th>Management</th></tr></thead>
    <tbody>
        <tr><td>LoRa Package Forward (Packet Forwarder, Basics Station)</td><td>Uplink Backup</td><td>SSH2, NTP</td></tr>
        <tr><td>Frequency Band Setup</td><td>Firewall</td><td>Firmware Update</td></tr>
        <tr><td>Server Address and Port Setup</td><td>DHCP Server/Client</td><td>LoRa Packet Forwarder</td></tr>
        <tr><td>TX Power Setup</td><td> </td><td>Built-in Network Server</td></tr>
        <tr><td>Data Logger</td><td> </td><td>MQTT Bridge</td></tr>
        <tr><td>Location Setup</td><td> </td><td>OpenVPN, Ping Watch Dog</td></tr>
        <tr><td>Statistic</td><td> </td><td>WEB UI</td></tr>
        <tr><td>Supports class A, B, & C</td><td> </td><td> </td></tr>
        <tr><td>Automatic Data Recovery</td><td> </td><td> </td></tr>
</tbody>
</table>

### Firmware

The firmware sits on OpenWRT. There is a web UI for easy configuration and management of the device, as well as the possibility for SSH2 management. The WisGateOS V2 supports the feature to install extensions (OpenVPN, WireGuard, Custom Logo, etc).

Detailed information about the extensions can be found on the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#extensions" target="_blank">WisGateOS 2 Extensions</a>.




|  Model  | Firmware Version |                                            Source                                            |
| :-----: | :--------------: | :------------------------------------------------------------------------------------------: |
| RAK7285 |      v2.2.1      | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip) |


## Models/Bundles

<table class="q-table">
    <thead>
        <tr>
            <th>Part Number</th>
            <th style="text-align: center;">8 Channel SX1303</th>
            <th style="text-align: center;">16 Channel SX1303</th>
            <th style="text-align: center;">Cat4 Cellular</th>
            <th style="text-align: center;">GPS</th>
            <th style="text-align: center;">Wi-Fi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RAK7285C-XYZ</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr>
            <td>RAK7285C-XYZ</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr>
            <td>RAK7285-XYZ</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
        <tr>
            <td>RAK7285-XYZ</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;"></td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr>
    </tbody>
</table>




