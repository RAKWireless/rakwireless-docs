---
rak_desc: Provides comprehensive information about your RAK7240 V2 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7240-v2/RAK7240V2.png
tags:
  - datasheet
  - wisgate
  - RAK7240 V2
prev: ../Supported-LoRa-Network-Servers/
next: false
---

# RAK7240 V2 WisGate Edge Prime Datasheet

## Overview

### Description

The RAK7240C V2 WisGate Edge Prime is an ideal product for large-scale LPWAN deployment where cost is essential; however, there are no compromises to the quality. Its wide range of customization options allows for flexibility when deploying a solution. With its industrial-grade components and high level of ingress protection, it achieves a high standard of reliability.

The gateway provides a solid out-of-the-box experience where quick deployment is required. The RAK7240C V2 supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security updates like IPv6, OpenSSL 1.1 support, multiple account access, and more. The web UI has a fresh new look, with more user-friendly information tooltips.

Thus, the RAK7240C V2 WisGate Edge Prime is suited for any use-case scenario, be it rapid deployment or customization of the UI and functionality.


### Features

#### Hardware

- IP65 industrial-grade enclosure with cable glands
- PoE + Surge Protection
- Dual LoRa Concentrators for up to 16 channels
- Backhaul: Wi-Fi, LTE**, and Ethernet
- GPS
- SD Card slot

#### Software

- Built-in Network Server (full LoRaWAN support V 1.0.3)
- OpenVPN
- Software and UI sit on top of **OpenWRT**
- Full LoRaWAN Stack support with Semtech SX1303
- **LoRa Frame filtering** (node whitelisting)
- **MQTT v3.1** Bridging with **TLS** encryption
- **Buffering of LoRa frames** in case of NS outage (no data loss)
- Listen Before Talk (optional)
- Fine timestamping (optional)

## Specifications

### Overview

The overview presents the RAK7240 circuit board and its block diagram that shows how the module's components work.


#### Board Overview

<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/1.circuit-board.png"
  width="80%"
  caption="RAK7240 V2 Circuit Board"
/>


#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/2.block-diagram.png"
  width="80%"
  caption="RAK7240 V2 Block Diagram"
/>


### Hardware

The hardware specification discusses the interfaces and the parameters of the RAK7240. It also covers the LoRa and Wi-Fi specifications of the board.

#### Interfaces (Hardware Interfaces)

The hardware interfaces of **RAK7240 WisGate Edge Prime V2** include five (5) antenna ports (LoRa, LTE-DIV/LoRa2, LTE-MAIN, WiFi, and GPS), six (6) status indicator LEDs, TF Card and nano-SIM sockets, a console port, an Ethernet Port (PoE), and a ground pad, as shown in the following figure:

<rk-img
  src="/assets/images/wisgate/rak7240-v2/datasheet/3.interface.jpg"
  width="60%"
  caption="RAK7240 V2 Interfaces"
/>


##### LED Indicators

The status of the LEDs is described as below. Refer to the printing of the LEDs on the mainboard.

| **LEDs**                          | **Status Indication Description**                                                                                                                                                                                                            |
| --------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **PWR**                           | Power Indicator, LED is **ON** when the device is powered                                                                                                                                                                                    |
| **ETH**                           | • **ON** – link is up <br> • **OFF** – link is down <br> • **Flashing** – Data is being transferred                                                                                                                                          |
| **LoRa**®                         | • **ON** - LoRa module 1 status is up <br> • **OFF** – LoRa module 1 status is down <br> • **Flashing** – LoRa module 1 data is being transferred                                                                                            |
| **ACT** _(LTE)_                   | • **Slow Flashing** (200&nbsp;ms Bright / 1800&nbsp;ms Dark) - searching for network <br >• **Slow Flashing** (200&nbsp;ms Dark / 1800&nbsp;ms Bright) - idle status (online) <br> • **Fast Flashing** - Data is being transferred           |
| **STAT** <br>_(16 channels only)_ | • **ON** - LoRa module 2 status is up <br> • **OFF** – LoRa module 2 status is down <br> • **Flashing** – LoRa module 2 data is being transferred                                                                                            |
| **WLAN**                          | **AP Mode** <br>• **ON** - WLAN status is up <br> • **Flashing** - Data is being transferred <br> **STA Mode** <br> • **Slow Flashing** (1&nbsp;Hz) - Disconnected <br> • **ON** - Connected <br> • **Flashing** - Data is being transferred |

#### Main Specifications

| Feature                   | Specifications                                                                                                                                                                                                                                                                                        |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Computing**             | MT7628, DDR2RAM 128MB                                                                                                                                                                                                                                                                                 |
| **Wi-Fi Feature**         | • **Frequency**: 2.400-2.4835&nbsp;GHz (802.11b/g/n) <br> • **RX Sensitivity**: -95&nbsp;dBm (Min) <br> • **TX Power**: 20&nbsp;dBm (Max) <br> • **Operation Channels**: 2.4&nbsp;GHz: 1-13                                                                                                           |
| **LoRa Feature**          | • **Card**: SX1301 Mini PCIe card (connects maximum of two) <br> • **Channels**: 8 Channels (Optional: 16 channels) <br> • **RX Sensitivity**: -139&nbsp;dBm (Min) <br> • **TX Power**: 27&nbsp;dBm (Max) <br> • **Frequency**: EU433 / CN470 / RU864 / IN865 / EU868 / US915 / AU915 / KR920 / AS923 |
| **Cellular Feature**      | **Variant for Europe** <br> • LTE FDD: B1/B3/B7/B8/B20/B28A <br> • WCDMA: B1/B8 <br> • GSM: 900/1800&nbsp;MHz <br> **Variant for North America** <br> • LTE FDD: B2/B4/B5/B12/B13 <br> • WCDMA: B2/B4/B5                                                                                              |
| **Power Supply**          | PoE (IEEE 802.3af) - 42~57&nbsp;V DC                                                                                                                                                                                                                                                                  |
| **Power Consumption**     | 12&nbsp;W (typical)                                                                                                                                                                                                                                                                                   |
| **Ethernet** (ETH)        | RJ45 (10/100M)                                                                                                                                                                                                                                                                                        |
| **Console**               | RJ45 (RS232)                                                                                                                                                                                                                                                                                          |
| **Antenna**               | 5 N-Type connectors                                                                                                                                                                                                                                                                                   |
| **LEDs**                  | LoRa LED (1), Cellular (2), POWER (1), ETH (1), WI-FI (1)                                                                                                                                                                                                                                             |
| **Ingress Protection**    | IP65                                                                                                                                                                                                                                                                                                  |
| **Enclosure Material**    | Aluminum                                                                                                                                                                                                                                                                                              |
| **Weight**                | 1.3 kg                                                                                                                                                                                                                                                                                                |
| **Dimension**             | 224&nbsp;mm x 121&nbsp;mm x 42&nbsp;mm                                                                                                                                                                                                                                                                |
| **Operating Temperature** | -30˚&nbsp;C to +55˚&nbsp;C                                                                                                                                                                                                                                                                            |
| **Storage Temperature**   | -40˚&nbsp;C to +85˚&nbsp;C                                                                                                                                                                                                                                                                            |
| **Operating Humidity**    | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                                            |
| **Storage Humidity**      | 0% to 95% (non-condensing)                                                                                                                                                                                                                                                                            |
| **Installation Method**   | Pole or Wall mounting                                                                                                                                                                                                                                                                                 |

#### RF Specifications

##### LoRa Radio Specifications

| Feature                  | Specifications                                                                                        |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| **Operating Frequency**  | EU433 / CN470 / RU864 / IN865 / RU864 / US915 / AU915 / KR920 / AS923-1 / AS923-2 / AS923-3 / AS923-4 |
| **Transmit Power**       | 27&nbsp;dBm (Max)                                                                                     |
| **Receiver Sensitivity** | -139&nbsp;dBm (Min)                                                                                   |

##### Wi-Fi Radio Specifications

| Feature                                                                                             | Specifications                                                                                                                                                                                                                                                                                                         |
| --------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wireless Standard**                                                                               | IEEE 802.11b/g/n                                                                                                                                                                                                                                                                                                       |
| **Operating Frequency**                                                                             | ISM band: 2.412~2.472(GHz)                                                                                                                                                                                                                                                                                             |
| **Operation Channels**                                                                              | 2.4&nbsp;GHz: 1-13                                                                                                                                                                                                                                                                                                     |
| **Transmit Power** <br> (The max. power may be different depending on local regulations) -per chain | **802.11b** <br> • 1&nbsp;Mbps: 19&nbsp;dBm <br> • 11&nbsp;Mbps: 19&nbsp;dBm <br> **802.11g** <br> • 6&nbsp;Mbps: 18&nbsp;dBm <br> • 54&nbsp;Mbps: 16&nbsp;dBm <br> **802.11n (2.4G)** <br> • MCS0 (HT20): 18&nbsp;dBm <br> • MCS7 (HT20): 16&nbsp;dBm <br> • MCS0 (HT40): 17&nbsp;dBm <br> • MCS7 (HT40): 15&nbsp;dBm |
| **Receiver Sensitivity** <br>(Typical)                                                              | **802.11b** <br> • 1Mbps: 95&nbsp;dBm <br> • 11&nbsp;Mbps: 88&nbsp;dBm <br> **802.11g** <br> • 6&nbsp;Mbps: 90&nbsp;dBm <br>• 54&nbsp;Mbps: 75&nbsp;dBm <br> **802.11n (2.4G)** <br> • MCS0 (HT20): 89&nbsp;dBm <br> • MCS7 (HT20): 72&nbsp;dBm <br> • MCS0 (HT40): 86 dBm <br> • MCS7 (HT40): 68&nbsp;dBm             |

### Software

RAK7240V2 supports different software features such as LoRa, Network, and Management.

#### Software Features


| LoRa                                                    | Network            | Management              |
| ------------------------------------------------------- | ------------------ | ----------------------- |
| Gateway OTA management                                  | CPE and AP mode    | WisDM                   |
| LoRa package forward (packet forwarder, Basics Station) | Wi-Fi Client mode  | SSH2, NTP               |
| Frequency Band Setup                                    | LTE APN Setup      | Firmware update         |
| Country code setup                                      | 802.1q             | Firmware update         |
| TX Power Setup                                          | Uplink backup      | LoRa Packet Forwarder   |
| Data logger                                             | Support 802.1q     | Support 802.1q          |
| Location setup                                          | Firewall           | MQTT Bridge             |
| Statistic                                               | DHCP Server/Client | OpenVPN, Ping Watch Dog |
| Supports class A, B, C                                  | Wi-Fi AP mode      | WEB UI                  |
| Server address and Port setup                           |                    |                         |

#### Firmware

The firmware sits on OpenWRT. There is a Web UI for easy configuration and management of the device, as well as the possibility for SSH2 management. The WisGateOS V2 supports the feature to install extensions (WireGuard, Custom Logo, Breathing Light, and more to come). The extensions are available in RAK download center (opens new window).

| Model                         | Firmware Version | Source                                                         |
| ----------------------------- | ---------------- | -------------------------------------------------------------- |
| RAK7240 V2 WisGate Edge Prime | WisGateOS V2     | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/) |



