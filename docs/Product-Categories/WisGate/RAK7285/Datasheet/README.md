---
rak_img: /assets/images/wisgate/rak7285/RAK7285.png
rak_desc: RAK7285 WisGate Edge Ultra is an ideal product for IoT commercial deployment. It supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security update. Its new enclosure is designed to allow the cavity filter to be inside the enclosure.
rak_grp: [wisgate, edge]
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
    - RAK7285
    - wisgate
    - datasheet
---


# RAK7285 WisGate Edge Ultra Datasheet

## Overview

### Descriptions

**RAK7285 WisGate Edge Ultra** is the latest edition of the RAK WisGate Edge Series, specifically designed for IoT commercial deployments. With its industrial-grade components, it ensures a high level of reliability for any use case scenario, including rapid deployment or UI and functionality customization.

This gateway supports up to 8 LoRa channels in full-duplex (16 channels variant is coming soon), multi-backhaul with Ethernet, Wi-Fi, and Cellular connectivity (LTE cellular connection is available with the C model). It has a dedicated port for different power options, such as solar panels and batteries. Additionally, the new enclosure design allows the cavity filter to be inside the enclosure.

In addition, RAK7285 operates under WisGateOS2, which is built on the latest OpenWrt kernel. This new version incorporates the most recent security updates, such as OpenSSL 1.1 and multiple account access. The web UI adopts a new design. It supports the installation of multiple extensions and remote management using WisDM to achieve personalized customization of the gateway.

### Features

#### Hardware

- **IP67** industrial-grade enclosure with cable glands
- **PoE (802.3at)** + Surge Protection
- LoRa Concentrator for up to **8 channels**
- Built-in cavity filters for out-of-band interference suspension
- Built-in lightning protection of the LoRa antenna ports
- **Backhaul**: Wi-Fi, Ethernet, & LTE (optional: available with RAK7285C)
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
- **Fine timestamping**

## Specifications

### Overview

The overview presents the block diagram for the RAK7285 that shows the internal architecture of the board.

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7285/datasheet/1.rak7285-block-diagram.png"
  width="100%"
  caption="RAK7285 WisGate Edge Ultra block diagram"
/>


#### Main Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 128&nbsp;MB</td></tr>
        <tr><td>Frequency</td><td>US915/AU915</td></tr>
        <tr><td rowspan="5">Wi-Fi feature</td><td>Frequency: 2.4&nbsp;GHz (802.11b/g/n)</td></tr>
        <tr><td>2x2 MIMO</td></tr>
        <tr><td>RX Sensitivity: -95&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 20&nbsp;dBm (Max)</td></tr>
        <tr><td>Operation channels: 2.4 GHz: 1-13</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1303 On Board</td></tr>
        <tr><td>8 Channels</td></tr>
        <tr><td>RX Sensitivity: -139&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 30&nbsp;dBm (Max)</td></tr>
        <tr><td>Listen Before Talk</td></tr>
        <tr><td rowspan="7">Cellular Feature (available with RAK7285C)</td><td>Supports Quectel EG95-E/EG95-NA/EC25-AU (IoT/M2M -optimized LTE Cat 4 Module)</td></tr>
        <tr><td><b>EG95-E for EMEA Region (Europe, Middle East and Africa)</b></td></tr>
        <tr><td>LTE FDD: B1/B3/B7/B8/B20/B28A<br>WCDMA: B1/B8<br>GSM/EDGE: B3/B8</td></tr>
        <tr><td><b>EG95-NA for North America Region</b></td></tr>
        <tr><td>LTE FDD: B2/B4/B5/B12/B13<br>WCDMA: B2/B4/B5</td></tr>
        <tr><td><b>EC25-AU for Latin America, Australia, and New Zealand Region</b></td></tr>
        <tr><td>LTE-FDD: B1/B2/B3/B4/B5/B7/B8/B28<br>LTE-TDD: B40<br>WCDMA: B1/B2/B5/B8<br>GSM/EDGE: B2/B3/B5/B8</td></tr>
        <tr><td>Power Supply</td><td>PoE (IEEE 802.3at): 42~57&nbsp;V<sub>DC</sub><br/>Power Jack: 9~36&nbsp;V<sub>DC</sub><br/>Compatible with RAK Battery Plus</td></tr>
        <tr><td>ETH</td><td>RJ45 (10/100 M)</td></tr>
        <tr><td rowspan="4">Antenna</td><td>LoRa: N-Type connector (one for the 8-channel gateway and two for the 16-channel gateway)</td></tr>
        <tr><td>GPS: One N-Type connector</td></tr>
        <tr><td>Wi-Fi: Two N-Type connectors</td></tr>
        <tr><td>LTE: Two N-Type connectors( only for RAK7285C)</td></tr>
        <tr><td rowspan="2">Diplexer</td><td><b>AU915:</b><br/>Frequency:<br/> - Rx: 915 ~ 920&nbsp;MHz<br/> - Tx: 923 ~ 928&nbsp;MHz<br/>Insertion loss:<br/> - Rx: 2.6 (Typical) / 4.0 (Maximum)  <br/>- Tx: 2.6 (Typical) / 3.8 (Maximum)<br/>Isolation between Rx and Tx: &gt; 80&nbsp;dB<br/>Return loss: &lt; -18&nbsp;dB<br/>Impedance: 50&nbsp;Ω</td></tr>
        <tr><td><b>US915:</b><br/>Frequency: <br/>- Rx: 902 ~ 915&nbsp;MHz<br/>- Tx: 923 ~ 928&nbsp;MHz<br/>Insertion loss:<br/>- Rx: 1.3 (Typical) / 1.6 (Maximum) <br/>- Tx: 1.8 (Typical) / 2.0 (Maximum)<br/>Isolation between Rx and Tx: &gt; 90&nbsp;dB<br/>Return loss: &lt; -18&nbsp;dB<br/>Impedance: 50&nbsp;Ω</td></tr>
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

##### Wi-Fi Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Wireless Standard</td><td>IEEE 802.11 b/g/n</td></tr>
        <tr><td>Operating Frequency</td><td>ISM band: 2.412~2.472 (GHz)</td></tr>
        <tr><td>Operation Channels</td><td>2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td rowspan="11">Transmit Power<br>(The max power maybe different<br>depending on local regulations) - per chain</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;19&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;19&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;18&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;16 dBm @54&nbsp;Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;18&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;16&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;17&nbsp;dBm @MCS0 (HT40) </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;15&nbsp;dBm @MCS7 (HT40)</td></tr>
        <tr><td rowspan="11">Receiver Sensitivity<br>(Typical)</td><td>802.11b</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-95&nbsp;dBm @1&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-88&nbsp;dBm @11&nbsp;Mbps</td></tr>
        <tr><td>802.11g</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-90&nbsp;dBm @6&nbsp;Mbps</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-75&nbsp;dBm @54&nbsp;Mbps</td></tr>
        <tr><td>802.11n (2.4G)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-89&nbsp;dBm @MCS0 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-72&nbsp;dBm @MCS7 (HT20)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-86&nbsp;dBm @MCS0 (HT40)</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;-68&nbsp;dBm @MCS7 (HT40)</td></tr>
    </tbody>
</table>


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
  width="100%"
  caption="RAK7285 WisGate Edge Ultra interfaces"
/>

:::tip 📝 NOTE

+ The SD card found in the SD card slot must not be ejected. Doing so might affect the performance of the device, as different logs and data are stored on it.
+ The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
+ The available antenna interfaces vary between variants. For example two N-type LTE interfaces are available on the RAK7285C. Not available on RAK7285.
  :::

##### Reset Key Functions

The functions of the Reset key are as follows:
- **Short press**: Restart the gateway.
- **Long press** (5&nbsp;seconds or more): Restore factory settings.

##### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the main board.

<table>
    <thead>
        <tr><th>LEDs</th><th>Status Indication Description</th></tr>
    </thead>
    <tbody>
        <tr><td>LED 1 (PWR)</td><td>Power indicator - The LED is on when device power is on.</td></tr>
        <tr><td rowspan="3">LED 2 (ETH)</td><td>ON - Linkup</td></tr>
        <tr><td>OFF - Linkdown</td></tr>
        <tr><td>Flicker - Data transmitting and receiving</td></tr>
        <tr><td rowspan="3">LED 3 (LoRa 1)</td><td>ON - LoRa 1 is working</td></tr>
        <tr><td>OFF - LoRa 1 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 1 Packet receiving and sending</td></tr>
        <tr><td rowspan="7">LED 4 (WLAN)</td><td>AP Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;ON - The AP is up</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;Flicker - Data receiving and sending</td></tr>
        <tr><td>STA Mode: </td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;Slow flicker (1&nbsp;Hz) - Disconnected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;ON - Connected</td></tr>
        <tr><td>&nbsp;&nbsp;&nbsp;Flicker - Data receiving and sending</td></tr>
        <tr><td rowspan="4">LED 5 (LTE)</td><td>Slow Flicker (200&nbsp;ms Bright / 1800&nbsp;ms Dark) - Network searching</td></tr>
        <tr><td>Slow flicker (200&nbsp;ms Dark / 1800&nbsp;ms Bright) - Idle</td></tr>
        <tr><td>Fast flicker (125&nbsp;ms Bright / 125&nbsp;ms Dark) - Ongoing data transfer</td></tr>
        <tr><td>ON - Voice is working</td></tr>
        <tr><td rowspan="3">LED 6 (LoRa 2 for 16 channel)</td><td>ON - LoRa 2 is working</td></tr>
        <tr><td>OFF - LoRa 2 is not working</td></tr>
        <tr><td>Flicker - Indicate LoRa 2 Packet receiving and sending</td></tr>
    </tbody>
</table>


### Software

<table>
    <thead><tr><th>LoRa</th><th>Network</th><th>Management</th></tr></thead>
    <tbody>
         <tr><td>Gateway OTA management</td><td>Wi-Fi Client mode</td><td>WisDM</td></tr>
        <tr><td>LoRa Package Forward (Packet Forwarder, Basics Station)</td><td>LTE APN Setup</td><td>SSH2, NTP</td></tr>
        <tr><td>Frequency Band Setup</td><td>Support 802.1q</td><td>Firmware Update</td></tr>
        <tr><td>Server Address and Port Setup</td><td>Uplink backup</td><td>LoRa Packet Forwarder</td></tr>
        <tr><td>TX Power Setup</td><td>Firewall</td><td>Built-in Network Server</td></tr>
        <tr><td>Data Logger</td><td>DHCP Server/Client</td><td>MQTT Bridge</td></tr>
        <tr><td>Location Setup</td><td>Wi-Fi AP mode</td><td>OpenVPN, Ping Watch Dog</td></tr>
        <tr><td>Statistic</td><td> </td><td>WEB UI</td></tr>
        <tr><td>Supports class A, B, & C</td><td> </td><td> </td></tr>
        <tr><td>Automatic Data Recovery</td><td> </td><td> </td></tr>
</tbody>
</table>


### Firmware

The firmware sits on OpenWRT. There is a web UI for easy configuration and management of the device, as well as the possibility for SSH2 management. The WisGateOS V2 supports the feature to install extensions (OpenVPN, WireGuard, Custom Logo, etc).

Detailed information about the extensions can be found on the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#extensions" target="_blank">WisGateOS 2 Extensions</a>.




|      Model       |                            Source                            |
| :--------------: | :----------------------------------------------------------: |
| RAK7285/RAK7285C | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip) |


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




