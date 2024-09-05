---
rak_desc: Provides comprehensive information about your RAK7240V2 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7240-v2/RAK7240V2.png
tags:
  - datasheet
  - wisgate
  - RAK7240V2
  - RAK7240CV2
prev: ../Supported-LoRa-Network-Servers/
next: false
---

# RAK7240V2/RAK7240CV2 WisGate Edge Prime Datasheet

## Overview

### Description

The RAK7240V2 WisGate Edge Prime is an ideal product for large-scale LPWAN deployment where cost is essential; however, there are no compromises to the quality. The gateway is available in 8 or 16-channel versions to help you utilize the maximum of the available LoRaWAN channels in your region. It supports multi-backhaul with Ethernet, Wi-Fi, and Cellular connectivity.

In addition, RAK7240V2 operates under <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview" target="_blank">WisGateOS 2</a>, which is built on the latest OpenWrt kernel. The OS Web UI features a new design and supports multiple extension installations, enabling remote management using <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisDM/Overview/" target="_blank">WisDM</a> for personalized gateway customization.

Thus, the RAK7240V2 WisGate Edge Prime is suited for any use-case scenario, be it rapid deployment or customization of the UI and functionality.

### Features

#### Hardware

- IP65 industrial-grade enclosure with cable glands
- PoE + Surge Protection
- Supports 9~24&nbsp;V<sub>DC</sub> power supply (optional) and RAK Battery Plus
- Up to two (2) LoRa concentrators for 8 or 16-channel options
- Backhaul: Wi-Fi, LTE (optional, available with RAK7240CV2), and Ethernet
- GPS
- SD card slot

:::tip 📝 NOTE

For the 8-channel gateway an LTE option is possible while if you wish for 16 channels, no LTE option is available.

:::

#### Software

- <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview" target="_blank">WisGateOS 2</a>
- <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#overview" target="_blank">WisGateOS2 Extensions</a>: OpenVPN, Wireguard VPN, and others
- Remote management with WisDM Fleet Management
- Built-in Network Server (LoRaWAN support V 1.0.3)
- LoRaWAN Stack support with Semtech SX1303
- LoRa Frame filtering (node whitelisting in Packet Forwarder mode)
- MQTT v3.1 bridging with TLS encryption
- Fine timestamping (optional)
- Buffering of LoRa frames in Packet Forwarder mode in case of NS outage (no data loss)

## Specifications

### Overview

The overview presents the RAK7240V2 block diagram that shows the internal architecture of the board.

<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/1.rak7240v2-block-diagram.png"
  width="100%"
  caption="RAK7240V2 Block Diagram"
/>


<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/2.rak7240cv2-block-diagram.png"
  width="100%"
  caption="RAK7240CV2 Block Diagram"
/>

### Main Specifications

| Feature                                                        | Specifications                                                                                                                                                                                                                                                                                                                                                 |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computing                                                      | MT7628, DDR2RAM 128&nbsp;MB                                                                                                                                                                                                                                                                                                                                    |
| Wi-Fi Feature                                                  | Frequency: 2.400-2.4835&nbsp;GHz (802.11b / g / n) <br>RX Sensitivity:﹣95&nbsp;dBm (Min) <br>TX Power: 20&nbsp;dBm (Max) <br>Operation Channels: 2.4&nbsp;GHz: 1-13                                                                                                                                                                                           |
| LoRa Feature                                                   | SX1303 mPCIe card (connects a maximum of two) <br>8 Channels (16 channels optional) <br>RX Sensitivity:﹣139&nbsp;dBm (Min) <br>TX Power: 27&nbsp;dBm (Max) <br>Frequency: EU868 / IN865 / RU864 / US915 / AU915 / KR920 / AS923-1-2-3-4 / EU433 / CN470                                                                                                       |
| Cellular Feature (available with RAK7240CV2, 8-channel option) | **Nano SIM Card:** 12.30 x 8.80 x 0.67 mm<br />Supports Quectel EG95-E / EG95-NA (IoT / M2M -optimized LTE Cat 4 Module)<br />**EG95-E for EMEA Region** <br>LTE FDD: B1 / B3 / B7 / B8 / B20 / B28A <br> WCDMA: B1 / B8 <br> GSM: 900 / 1800&nbsp;MHz <br>**EG95-NA for North America Region** <br> LTE FDD: B2 / B4 / B5 / B12 / B13 <br> WCDMA: B2 / B4/ B5 |
| Power Supply                                                   | PoE (IEEE 802.3af) , 42~57&nbsp;VDC <br>9~24&nbsp;VDC from dedicated DC port (optional)<br />Compatible with RAK Solar Battery Kit (optional)                                                                                                                                                                                                                  |
| Power Consumption                                              | 12&nbsp;W (typical)                                                                                                                                                                                                                                                                                                                                            |
| Ethernet (ETH)                                                 | RJ45 (10/100M)                                                                                                                                                                                                                                                                                                                                                 |
| Console                                                        | RJ45 (RS232)                                                                                                                                                                                                                                                                                                                                                   |
| Antenna                                                        | **LoRa**: <br />N-Type connector (one for the 8-channel gateway and two for the 16-channel gateway)<br />**GPS**:<br />One N-Type connector<br />**Wi-Fi**:<br />wo N-Type connectors<br />**LTE**:<br />Two N-Type connectors (only for RAK7240CV2, 8-channel option)                                                                                         |
| Ingress Protection                                             | IP65                                                                                                                                                                                                                                                                                                                                                           |
| Enclosure Material                                             | Aluminum                                                                                                                                                                                                                                                                                                                                                       |
| Weight                                                         | 1.3&nbsp;kg                                                                                                                                                                                                                                                                                                                                                    |
| Dimension                                                      | 224 x 121 x 42&nbsp;mm Gateway only (no antenna, no bracket)                                                                                                                                                                                                                                                                                                   |
| Operating Temperature                                          | ﹣30˚&nbsp;C to ﹢ 55˚&nbsp;C                                                                                                                                                                                                                                                                                                                                  |
| Storage Temperature                                            | ﹣40˚&nbsp;C to ﹢ 85˚&nbsp;C                                                                                                                                                                                                                                                                                                                                  |
| Operating Humidity                                             | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                                                                                                     |
| Storage Humidity                                               | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                                                                                                     |
| Installation Method                                            | Pole or wall mounting                                                                                                                                                                                                                                                                                                                                          |

### Hardware

The hardware specification is categorized into three parts. It discusses the interfaces and the parameters of the RAK7240V2. It also covers the LoRa and Wi-Fi specifications of the board.

#### Interfaces

The hardware interfaces of the WisGate Edge Prime includes:
<ul>
  <li>five (5) antenna ports</li>
    <ul>
      <li>LoRa</li>
      <li>LTE-DIV</li>
      <li>LTE-MAIN</li>
      <li>Wi-Fi</li>
      <li>GPS</li>
    </ul>
  </li>
  <li>five (5) status indicator LEDs</li>
  <li>TF Card and nano-SIM sockets</li>
  <li>console port</li>
  <li>Ethernet Port (PoE)</li>
  <li>ground pad</li>
</ul>

The device comes with a dedicated DC power port that you can use to power it up. This power port is optional and supports a range of 9~24&nbsp;V<sub>DC</sub>. It is designed to be compatible with the RAK Battery Plus, providing the device with an additional power source.

:::tip 📝 NOTE

The DC port is only available if selected during your purchase.

:::

<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/3.interface.png"
  width="60%"
  caption="RAK7240V2 Interface"
/>


The antenna ports are not all open, it depends on the bundle you purchased. For example, if you purchased an 8-channel gateway without cellular connectivity, the LTE antenna ports will be sealed.

The DC Input port is available only for the RAK7240V2 / RAK7240V2CV2 version with DC and Battery Plus support. This power port supports a range of 9~24 VDC. It is designed to be compatible with the RAK Battery Plus, providing the device with an additional power source.

:::tip 📝 NOTE

The DC Input port is only available if selected during your purchase.

:::

##### Reset Key Functions

The functions of the Reset key are as follows:

- **Short press**: Restart the gateway.
- **Long press** (5 sec and above): Restore factory settings.

##### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the mainboard.

| LEDs                          | Status Indication Description                                                                                                                                                                               |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PWR                           | Power indicator - The LED is on when device power is on                                                                                                                                                     |
| ETH                           | ON – Link is up <br>OFF – Link is down <br>Flicker – Data is being transferred                                                                                                                              |
| LoRa                          | ON - LoRa module 1 status is up <br>OFF – LoRa module 1 status is down <br>Flicker – LoRa module 1 data is being transferred                                                                                |
| ACT (LTE)                     | Slow flicker (200&nbsp;ms bright / 1800&nbsp;ms dark) - Searching for network <br>Slow flicker (200&nbsp;ms dark / 1800&nbsp;ms bright) - Idle status (online) <br>Fast flicker - Data is being transferred |
| STAT<br/>_(16 channels only)_ | ON - LoRa module 2 status is up<br/>OFF – LoRa module 2 status is down<br/>Flashing – LoRa module 2 data is being transferred                                                                               |
| WLAN                          | **AP Mode** <br>ON - WLAN status is up <br>Flicker - Data is being transferred <br>**STA Mode** <br>Slow flicker (1 Hz) - Disconnected <br>ON - Connected <br> Flicker - Data is being transferred          |

#### RF Specifications

##### LoRa Radio Specifications

| Feature              | Specifications                                                                |
| -------------------- | ----------------------------------------------------------------------------- |
| Operating frequency  | EU868 / IN865 / RU864 / US915 / AU915 / KR920 / AS923-1-2-3-4 / EU433 / CN470 |
| Transmit power       | 27&nbsp;dBm (Max)                                                             |
| Receiver sensitivity | ﹣139&nbsp;dBm (Min)                                                          |

##### Wi-Fi Radio Specifications

| Feature                                                                                     | Specifications                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Wireless standard                                                                           | IEEE 802.11b / g / n                                                                                                                                                                                                                                                                                         |
| Operating frequency                                                                         | ISM band: 2.412~2.472 (GHz)                                                                                                                                                                                                                                                                                  |
| Operation channels                                                                          | 2.4&nbsp;GHz: 1-13                                                                                                                                                                                                                                                                                           |
| Transmit power - per chain (The max. power may be different depending on local regulations) | **802.11b** <br> 1&nbsp;Mbps: 19&nbsp;dBm <br> 11&nbsp;Mbps: 19&nbsp;dBm <br>**802.11g** <br> 6&nbsp;Mbps: 18&nbsp;dBm <br> 54&nbsp;Mbps: 16&nbsp;dBm <br> **802.11n (2.4&nbsp;GHz)** <br> MCS0 (HT20): 18&nbsp;dBm <br> MCS7 (HT20): 16&nbsp;dBm <br> MCS0 (HT40): 17 dBm <br> MCS7 (HT40): 15dBm           |
| Receiver sensitivity (Typical)                                                              | **802.11b** <br> 1&nbsp;Mbps: 95&nbsp;dBm <br> 11&nbsp;Mbps: 88&nbsp;dBm <br>**802.11g** <br> 6&nbsp;Mbps: 90&nbsp;dBm <br> 54&nbsp;Mbps: 75&nbsp;dBm <br>**802.11n (2.4&nbsp;GHz)** <br> MCS0 (HT20): 89&nbsp;dBm <br> MCS7 (HT20): 72&nbsp;dBm <br> MCS0 (HT40): 86&nbsp;dBm <br> MCS7 (HT40): 68&nbsp;dBm |

#### Electrical Characteristics

The gateway supports multiple power supply options.

- **Power Cord + PoE Adapter:** The gateway is powered via PoE. PoE (IEEE 802.3af), 42~57 VDC.
- **Cable for RAK Battery Plus:** Only available for gateways with DC Input interface. For outdoor deployment scenarios, it is recommended to use <a href="https://store.rakwireless.com/products/rak-battery-plus-rak9155?variant=42309251563718" target="_blank">RAK9155 Battery Plus</a> as its power supply. This cable is dedicated to RAK9155 Battery Plus.

:::tip 📝 NOTE

RAK9155 Battery Plus is not included in the bundle, it needs to be purchased separately.

:::

#### Mechanical Characteristics

| Parameter          | Value                                                   |
| ------------------ | ------------------------------------------------------- |
| Dimensions         | 224 x 121 x 42 mm Gateway only (no antenna, no bracket) |
| Weight             | 1.3 kg                                                  |
| Enclosure Material | Aluminum                                                |
| Ingress protection | IP65                                                    |

#### Environmental Requirements

<table>
    <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
    <tbody>
        <tr><td>Operating Conditions</td><td>Operating Temperature:﹣30&nbsp;˚C to﹢55&nbsp;˚C<br>Storage Temperature:﹣40&nbsp;˚C to﹢85&nbsp;˚C<br>Operating Humidity: 0~95&nbsp;% RH non-condensing<br>Storage Humidity: 0~95&nbsp;% RH non-condensing</td></tr>
</tbody>
</table>

### Software

RAK7240V2 supports different software features such as LoRa, Network, and Management.

#### Supported Features

| LoRa                                                    | Network            | Management              |
| ------------------------------------------------------- | ------------------ | ----------------------- |
| Gateway OTA management                                  | Wi-Fi AP mode      | WisDM                   |
| LoRa package forward (packet forwarder, Basics Station) | Wi-Fi Client mode  | SSH2, NTP               |
| Frequency Band Setup                                    | LTE APN Setup      | Firmware update         |
| Country code setup                                      | 802.1q             | Firmware update         |
| TX Power Setup                                          | Uplink backup      | LoRa Packet Forwarder   |
| Data logger                                             | Support 802.1q     | Built-in Network Server |
| Location setup                                          | Firewall           | MQTT Bridge             |
| Statistic                                               | DHCP Server/Client | OpenVPN, Ping Watch Dog |
| Supports class A, B, C                                  |                    | WEB UI                  |
| Server address and Port setup                           |                    |                         |

### Firmware

| Model                                     | Firmware Version | Source                                                                                       |
| ----------------------------------------- | ---------------- | -------------------------------------------------------------------------------------------- |
| RAK7240V2 / RAK7240CV2 WisGate Edge Prime | v2.2.8           | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip) |

## Models / Bundles

<table>
    <thead>
        <tr><th>Models</th><th>Variants</th><th>Packing list</th></tr>
    </thead>
    <tbody>
        <tr><td rowspan="2">RAK7240V2</td><td>8 Channels without 4G</td><td>1x 8-channel device<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Manual</td></tr>
        <tr><td>8 Channels without 4G<br>DC and Battery Plus support</td><td>1x 8-channel device with DC Input interface<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Cable for RAK Battery Plus<br>1x Manual</td></tr>
        <tr><td rowspan="2">RAK7240V2</td><td>16 Channels without 4G</td><td>1x 16-channel device<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Manual</td></tr>
        <tr><td>16 Channels without 4G<br>DC and Battery Plus support</td><td>1x 16-channel device with DC Input interface<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Cable for RAK Battery Plus<br>1x Manual</td></tr>
         <tr><td rowspan="2">RAK7240CV2</td><td>8 Channels with 4G</td><td>1x 8-channel device with LTE module<br>2x LTE Antenna<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Manual</td></tr>
        <tr><td>8 Channels with 4G<br>DC and Battery Plus support</td><td>1x 8-channel device with LTE module and DC Input interface<br>2x LTE Antenna<br>1x GPS Antenna<br>1x 2.4G WiFi Antenna<br>1x PoE Injector<br>1x Mounting Kit<br>1x Cable for RAK Battery Plus<br>1x Manual</td></tr>
</tbody>
</table>
