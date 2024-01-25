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

The RAK7240V2 WisGate Edge Prime is an ideal product for large-scale LPWAN deployment where cost is essential; however, there are no compromises to the quality. Its wide range of customization options allows for flexibility when deploying a solution. With its industrial-grade components and high level of ingress protection, it achieves a high standard of reliability.

The gateway provides a solid out-of-the-box experience where quick deployment is required. The RAK7240V2 supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security updates like IPv6, OpenSSL 1.1 support, multiple account access, and more. The web UI has a fresh new look, with more user-friendly information tooltips.

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

- Built-in Network Server (full LoRaWAN support V 1.0.3)
- OpenVPN
- Software and UI sit on top of OpenWRT
- LoRa Frame filtering (node whitelisting)
- MQTT v3.1 Bridging with TLS encryption
- Buffering of LoRa frames in case of NS outage (no data loss)


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



| Feature                                                        | Specifications                                                                                                                                                                                                                                                                    |
| -------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computing                                                      | MT7628, DDR2RAM 128&nbsp;MB                                                                                                                                                                                                                                                       |
| Wi-Fi feature                                                  | • Frequency: 2.400-2.4835&nbsp;GHz (802.11b/g/n) <br> • RX Sensitivity: -95&nbsp;dBm (Min)  <br> • TX Power: 20&nbsp;dBm (Max)  <br> • Operation Channels: 2.4&nbsp;GHz: 1-13                                                                                                     |
| LoRa feature                                                   | • Card: SX1301 mPCIe card (connects a maximum of two)  <br> • Channels: 8 Channels (16 channels optional) <br> • RX Sensitivity: -139&nbsp;dBm (Min)  <br> • TX Power: 27&nbsp;dBm (Max)  <br> • Frequency: EU433 / CN470 / RU864 / IN865 / EU868 / US915 / AU915 / KR920 / AS923 |
| Cellular feature (available with RAK7240CV2, 8-channel option) | **Variant for Europe**  <br> • LTE FDD: B1/B3/B7/B8/B20/B28A <br> • WCDMA: B1/B8  <br> • GSM: 900/1800&nbsp;MHz   <br> **Variant for North America**  <br> • LTE FDD: B2/B4/B5/B12/B13  <br> • WCDMA: B2/B4/B5                                                                    |
| Power supply                                                   | • PoE (IEEE 802.3af) - 42~57&nbsp;V<sub>DC</sub> <br>   • 9~24&nbsp;V<sub>DC</sub> from dedicated DC port (optional) and compatible with RAK Battery Plus                                                                                                                        |
| Power consumption                                              | 12&nbsp;W (typical)                                                                                                                                                                                                                                                               |
| Ethernet (ETH)                                                 | RJ45 (10/100M)                                                                                                                                                                                                                                                                    |
| Console                                                        | RJ45 (RS232)                                                                                                                                                                                                                                                                      |
| Antenna                                                        | 5 N-Type connectors                                                                                                                                                                                                                                                               |
| LEDs                                                           | LoRa LED (1), Cellular (2), POWER (1), ETH (1), WI-FI (1)                                                                                                                                                                                                                         |
| Ingress protection                                             | IP65                                                                                                                                                                                                                                                                              |
| Enclosure material                                             | Aluminum                                                                                                                                                                                                                                                                          |
| Weight                                                         | 1.3&nbsp;kg                                                                                                                                                                                                                                                                       |
| Dimension                                                      | 224&nbsp;mm x 121&nbsp;mm x 42&nbsp;mm                                                                                                                                                                                                                                            |
| Operating temperature                                          | -30˚&nbsp;C to +55˚&nbsp;C                                                                                                                                                                                                                                                        |
| Storage temperature                                            | -40˚&nbsp;C to +85˚&nbsp;C                                                                                                                                                                                                                                                        |
| Operating humidity                                             | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                        |
| Storage humidity                                               | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                        |
| Installation Method                                            | Pole or wall mounting                                                                                                                                                                                                                                                             |

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


#### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the mainboard.

| LEDs      | Status Indication Description                                                                                                                                                                                       |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PWR       | Power indicator - The LED is on when device power is on                                                                                                                                                             |
| ETH       | • ON – Link is up <br> • OFF – Link is down <br> • Flicker – Data is being transferred                                                                                                                              |
| LoRa      | • ON - LoRa module 1 status is up <br> • OFF – LoRa module 1 status is down <br> • Flicker – LoRa module 1 data is being transferred                                                                                |
| ACT (LTE) | • Slow flicker (200&nbsp;ms bright / 1800&nbsp;ms dark) - Searching for network <br> • Slow flicker (200&nbsp;ms dark / 1800&nbsp;ms bright) - Idle status (online) <br> • Fast flicker - Data is being transferred |
| WLAN      | **AP Mode** <br> • ON - WLAN status is up <br> • Flicker - Data is being transferred <br> **STA Mode** <br> • Slow flicker (1 Hz) - Disconnected <br> • ON - Connected <br> • Flicker - Data is being transferred   |

#### RF Specifications

##### LoRa Radio Specifications

| Feature              | Specifications                                                        |
| -------------------- | --------------------------------------------------------------------- |
| Operating frequency  | EU433 / CN470 / RU864 / IN865 / RU864 / US915 / AU915 / KR920 / AS923 |
| Transmit power       | 27&nbsp;dBm (Max)                                                     |
| Receiver sensitivity | -139&nbsp;dBm (Min)                                                   |

#### Wi-Fi Radio Specifications

| Feature                                                                                     | Specifications                                                                                                                                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wireless standard                                                                           | IEEE 802.11b/g/n                                                                                                                                                                                                                                                                                                       |
| Operating frequency                                                                         | ISM band: 2.412~2.472 (GHz)                                                                                                                                                                                                                                                                                            |
| Operation channels                                                                          | 2.4&nbsp;GHz: 1-13                                                                                                                                                                                                                                                                                                     |
| Transmit power - per chain (The max. power may be different depending on local regulations) | **802.11b** <br> • 1&nbsp;Mbps: 19&nbsp;dBm <br> • 11&nbsp;Mbps: 19&nbsp;dBm  <br>**802.11g** <br> • 6&nbsp;Mbps: 18&nbsp;dBm <br> • 54&nbsp;Mbps: 16&nbsp;dBm  <br> **802.11n (2.4G)** <br> • MCS0 (HT20): 18&nbsp;dBm <br> • MCS7 (HT20): 16&nbsp;dBm <br> • MCS0 (HT40): 17 dBm <br> • MCS7 (HT40): 15dBm           |
| Receiver sensitivity (Typical)                                                              | **802.11b** <br> • 1&nbsp;Mbps: 95&nbsp;dBm <br> • 11&nbsp;Mbps: 88&nbsp;dBm  <br>**802.11g** <br> • 6&nbsp;Mbps: 90&nbsp;dBm <br> • 54&nbsp;Mbps: 75&nbsp;dBm  <br>**802.11n (2.4G)** <br> • MCS0 (HT20): 89&nbsp;dBm <br> • MCS7 (HT20): 72&nbsp;dBm <br> • MCS0 (HT40): 86&nbsp;dBm <br> • MCS7 (HT40): 68&nbsp;dBm |

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

| Model                                   | Firmware | Source                                                                                       |
| --------------------------------------- | -------- | -------------------------------------------------------------------------------------------- |
| RAK7240V2/RAK7240CV2 WisGate Edge Prime | v2.2.1   | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip) |


## Models / Bundles

| Part Numbers     | Package Content                                                                                                                                         |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK7240V2-0X-14X | 1x 8 channel device with LTE module, 1x LoRa Antenna, 2x LTE Antenna, 1x GPS Antenna, 1x 2.4G WiFi Antenna, 1x PoE Injector, 1x Mounting Kit, 1x Manual |
| RAK7240-0X       | 1x 8 channel device, 1x LoRa Antenna, 1x GPS Antenna, 1x 2.4G WiFi Antenna, 1x PoE Injector, 1x Mounting Kit, 1x Manual                                 |


