---
rak_img: /assets/images/wisgate/rak7267/RAK7267.png
rak_desc: Provides comprehensive information about your RAK7267 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_grp: [wisgate, edge]
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
    - RAK7267
    - wisgate
    - datasheet
---


# RAK7267 WisGate Soho Pro Datasheet

## Overview

### Descriptions

The RAK7267 WisGate Soho Pro is an innovative 8-channel LoRaWAN gateway designed for both indoor and outdoor deployments. This gateway supports Wi-Fi and Cellular network backhaul, with a specifically tailored gateweay enclosure to allow the LoRa, LTE, Wi-Fi, and GPS antennas to be inside the enclosure.

Aside from the connectivity, this gateway offers an IP-67 Unify Enslosure, protecting the internal components from dust and water.  The exposure has a weatherproof fire retardant enclosure made of ABS plastic specially designed for outdoors. 

RAK7267 operates under WisGateOS2, which is built on the latest OpenWrt kernel. This new version incorporates the most recent security updates, such as OpenSSL 1.1, and allows multiple account access. The web UI has been redesigned and now supports the installation of multiple extensions. It also allows for remote management using WisDM for personalized customization of the gateway.

This outdoor gateway can be powered with a wide range power supply battery of 9~36 V&nbsp;<sub>DC</sub>  and RAK Solar Battery System.

### Product Features

#### Hardware

- IP67 Unify enclosure
- LoRa Concentrator for up to **8 channels**
- Backhaul: Wi-Fi and LTE
- GPS
- Supports 9 ~ 36&nbsp;V<sub>DC</sub> power supply and RAK Solar Battery Kits
- Internal antenna for LoRa, LTE, Wi-Fi, and GPS

#### Software

- Built-in Network Server (LoRaWAN support V 1.0.3)
- OpenVPN
- Software and UI sit on top of OpenWrt
- LoRaWAN Stack support with Semtech SX1303
- LoRa Frame filtering (node whitelisting)
- MQTT v3.1 bridging with TLS encryption
- Buffering of LoRa frames in Packet Forwarder mode in case of NS outage (no data loss)
- Listen Before Talk
- Fine timestamping

## Specifications

### Overview

This section presents the block diagram for the RAK7267 that shows the internal architecture of the board.

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7267/datasheet/block_diagram.png"
  width="100%"
  caption="RAK7267 WisGate Soho Pro block diagram"
/>


#### Main Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Computing</td><td>MT7628, DDR2 RAM 256&nbsp;MB</td></tr>
        <tr><td>Frequency</td><td>EU868/US915/AS923/AS923-1/AS923-2/AS923-3/AS923-4/AU915/IN865/RU864/KR920</td></tr>
        <tr><td rowspan="5">LoRa feature</td><td>SX1303 On Board</td></tr>
        <tr><td>8 Channels</td></tr>
        <tr><td>RX Sensitivity: -139&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 27&nbsp;dBm (Max)</td></tr>
        <tr><td>Listen Before Talk</td></tr>
        <tr><td rowspan="9">Cellular Feature</td><td>Supports Quectel EG915U-EU/EG915U-LA/EG915Q-NA(IoT/M2M -LTE Cat 1 module)</td></tr>
        <tr><td><b>EG915U-EU for EMEA/Brazil/Australia/New Zealand Region</b></td></tr>
        <tr><td>LTE FDD: B1/B3/B5/B7/B8/B20/B28</td></tr>
        <tr><td>GSM: B2/B3/B5/B8</td></tr>
        <tr><td><b>EG915U-LA for Latin America Region</b></td></tr>
        <tr><td>LTE FDD: B2/B3/B4/B5/B7/B8/B28/B66</td></tr>
        <tr><td>GSM: B2/B3/B5/B8</td></tr>
        <tr><td><b>EG915Q-NA for North America Region</b></td></tr>
        <tr><td>LTE FDD: B2/B4/B5/B12/B13/B66/B71</td></tr>
        <tr><td rowspan="5">Wi-Fi feature</td><td>Frequency: 2.4&nbsp;GHz (802.11b/g/n)</td></tr>
        <tr><td>2x2 MIMO</td></tr>
        <tr><td>RX Sensitivity: -95&nbsp;dBm (Min)</td></tr>
        <tr><td>TX Power: 20&nbsp;dBm (Max)</td></tr>
        <tr><td>Operation channels: 2.4&nbsp;GHz: 1-13</td></tr>
        <tr><td>Power Supply</td><td>9~36&nbsp;V<sub>DC</sub><br/>Compatible with RAK Solar Battery Kits</td></tr>
        <tr><td rowspan="9">Antenna</td><td>LoRa/LTE/WiFi/GPS: Internal antenna</td></tr>
        <tr><td><b>LoRa</b></td></tr>
        <tr><td>Frequency Range: 863&nbsp;MHz~928&nbsp;MHz<br>Peak Gain: 2.5&nbsp;dBi<br>VSWR:≤ 1.5<br>Efficiency: &gt;85%<br>Feed Impedance: 50&nbsp;Ohms<br>Polarization: Vertical<br>Dimensions (mm): 51&nbsp;mm x 16&nbsp;mm </td></tr>
         <tr><td><b>LTE</b></td></tr>
        <tr><td>Frequency Range: 700&nbsp;MHz~960&nbsp;MHz/1710&nbsp;MHz~21700&nbsp;MHz<br>Peak Gain: 3&nbsp;dBi<br>VSWR:≤ 3<br>Efficiency: &gt;60%<br>Feed Impedance: 50&nbsp;Ohms<br>Polarization: Vertical<br>Dimensions (mm): 51&nbsp;mm x 16&nbsp;mm </td></tr>
        <tr><td><b>WiFi</b></td></tr>
        <tr><td>Frequency Range: 2400&nbsp;MHz~2500&nbsp;MHz <br>Peak Gain: 2&nbsp;dBi<br>VSWR:≤ 2.5<br>Efficiency: &gt;75%<br>Feed Impedance: 50&nbsp;Ohms<br>Polarization: Vertical<br>Dimensions (mm): 15&nbsp;mm x 3&nbsp;mm </td></tr>
         <tr><td><b>GPS</b></td></tr>
        <tr><td>Frequency Range: 1575&nbsp;MHz~1602&nbsp;MHz <br>Peak Gain: 28&nbsp;dBi<br>VSWR:&lt;2<br>Polarization: RHCP</td></tr>
        <tr><td>Ingress protection</td><td>IP67</td></tr>
        <tr><td>Dimension</td><td>180&nbsp;mm x 130&nbsp;mm x&nbsp;60 mm</td></tr>
        <tr><td>Enclosure material</td><td>ABS plastic</td></tr>
        <tr><td>Operating temperature</td><td>-30˚&nbsp;C to +55˚&nbsp;C</td></tr>
        <tr><td>Operating humidity</td><td>0~95&nbsp;% RH non-condensing</td></tr>
        <tr><td>Installation Method</td><td>Pole mounting</td></tr>
</tbody>
</table>




### Hardware

The hardware specification covers the interfacing of the RAK7267 and its corresponding functionalities. It also presents the parameters and the standard values of the gateway.

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

##### LoRa Radio Specifications

<table>
    <thead><tr><th>Feature</th><th>Specifications</th></tr></thead>
    <tbody>
        <tr><td>Operating Frequency</td><td>EU868/US915/AS923/AS923-1/AS923-2/AS923-3/AS923-4/AU915/IN865/RU864/KR920</td></tr>
        <tr><td>Transmit Power</td><td>27&nbsp;dBm (Max)</td></tr>
        <tr><td>Receiver Sensitivity</td><td>-139&nbsp;dBm (Min)</td></tr>
</tbody>
</table>



#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7267/datasheet/3.interfaces.png"
  width="60%"
  caption="RAK7267 WisGate Soho Pro interfaces"
/>

:::tip 📝 NOTE

+ The SD card found in the SD card slot must not be ejected. Doing so might affect the performance of the device, as different logs and data are stored on it.
+ The SIM card slot is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card. 
  
  :::

##### Reset Key Functions

The functions of the Reset key are as follows:
- **Short press:** Restart the gateway.
- **Long press** (5s and above): Restore factory settings.

##### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the main board.

<table>
    <thead><tr><th>LEDs</th><th>Status</th></th><th>Description</th></tr></thead>
    <tbody>
        <tr><td rowspan="2">PWR</td><td>On</td><td>Device power on</td></tr>
        <tr><td>Off</td><td>Device power off</td></tr>
        <tr><td rowspan="3">LoRa</td><td>On</td><td>LoRa is working</td></tr>
        <tr><td>Off</td><td>LoRa is not working</td></tr>
        <tr><td>Flash</td><td>Indicate that LoRa Packet receiving and sending</td></tr>
        <tr><td rowspan="8">WLAN</td><td><b>AP Mode:</b></td><td></td></tr>
        <tr><td>On</td><td>WLAN is working</td></tr>
        <tr><td>Off</td><td>Wi-Fi disable</td></tr>
        <tr><td>Flash</td><td>Data receiving and sending</td></tr>
        <tr><td><b>STA Mode:</b></td><td></td></tr>
        <tr><td>Slow Flash</td><td>(1&nbsp;Hz) – Connection Disconnected</td></tr>
        <tr><td>On</td><td>Connection Successful</td></tr>
        <tr><td>Flash</td><td>Data receiving and sending</td></tr>
        <tr><td rowspan="3">LTE</td><td>Slow Flash 1<br>(1800&nbsp;ms Dark / 200&nbsp;ms Bright)</td><td>Unregistered network
 (Network searching)
</td></tr>
        <tr><td>Slow Flash 2<br>(200&nbsp;ms Dark / 1800&nbsp;ms Bright)</td><td> Idle status (Online)</td></tr>
        <tr><td>Quick Flash<br>(125&nbsp;ms Bright / 125&nbsp;ms Dark)</td><td>Data receiving and sending</td></tr>
 </tbody>
</table>


### Firmware

The firmware sits on OpenWrt. There is a Web UI for easy configuration and management of the device, as well as the possibility for SSH2 management. The WisGateOS V2 supports the feature to install extensions (OpenVPN, WireGuard, Custom Logo, Breathing Light, and more to come). The extensions are available in <a href="https://downloads.rakwireless.com/#LoRa/WisGateOS2/WisGateOS2-Extensions/" target="_blank">RAK download center</a>.


|          Model           |                                                         Source                                                          |
|:------------------------:|:-----------------------------------------------------------------------------------------------------------------------:|
| RAK7267 WisGate Soho Pro | <a href="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip" target="_blank">Download</a> |

### Software

#### Software Features

<table>
    <thead><tr><th>LoRa</th><th>Network</th><th>Management</th></tr></thead>
    <tbody>
        <tr><td>Gateway OTA management</td><td>Wi-Fi Client mode</td><td>WisDM</td></tr>
        <tr><td>LoRa package forward (packet forwarder, Basics Station)</td><td>LTE APN Setup</td><td>SSH2, NTP</td></tr>
        <tr><td>Frequency Band Setup</td><td>Support 802.1q</td><td>Firmware update</td></tr>
        <tr><td>Server Address and Port Setup</td><td>Uplink backup</td><td>LoRa Packet Forwarder</td></tr>
        <tr><td>TX Power Setup</td><td>Firewall</td><td>Built-in Network Server</td></tr>
        <tr><td>Data logger</td><td>DHCP Server/Client</td><td>MQTT Bridge</td></tr>
        <tr><td>Location setup</td><td>Wi-Fi AP mode</td><td>OpenVPN, Ping Watch Dog</td></tr>
        <tr><td>Statistic</td><td> </td><td>WEB UI</td></tr>
        <tr><td>Supports class A, B, C</td><td></td><td></td></tr>
        <tr><td>Server address and Port setup</td><td> </td><td> </td></tr>
</tbody>
</table>


## Models/Bundles

<table class="q-table">
    <thead>
        <tr>
            <th>Part Number</th>
            <th style="text-align: center;">8 Channel SX1303</th>
            <th style="text-align: center;">Cat1 Cellular</th>
            <th style="text-align: center;">GPS</th>
            <th style="text-align: center;">Wi-Fi</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>RAK7267-XYZ</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
            <td style="text-align: center;">√</td>
        </tr> 
    </tbody>
</table>


