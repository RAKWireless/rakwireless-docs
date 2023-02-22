---
prev: ../Overview/
next: false
tags:
  - All-in-One 5G
  - 5G
  - datasheet
rak_desc: Provides comprehensive information about your All-in-One 5G to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/5g/all-in-one-5g/all-in-one-5g.png

---

# All-in-One 5G Datasheet

## Overview


<rk-img
  src="/assets/images/5g/all-in-one-5g/datasheet/all-in-one-5g.png"
  width="40%"
  caption="All-in-One 5G front view"
/>

### Description

All-in-One 5G is an indoor device that integrates all the AGW, LTE, and LoRa technologies in one enclosure. It supports PoE++ (8802.3bt) power supplies, which makes it easy to set up. The exciting Plug&Play feature makes it connect to your home broadband directly without any technical background and start earning cryptocurrency by providing LTE cellular and LoRa coverage.

### Features

- AGW, LTE, and LoRa all in one
- Low-power ARM Platform
- 4G RAM+ 32G eMMC
- 2.5&nbsp;GbE RJ45 Port with PoE++( 802.3bt)
- 24&nbsp;dBm RF TX Power
- Built-In Antennas
- 3GPP B48 LTE
- Band US915 LoRa
- Plug & Play
- ECC Security
- APP for O&M
- OTA Upgrade
- Table and wall mounting

## Specifications


### Hardware

The hardware specification is categorized into five parts. It shows the different connectivity specifications, such as AGW, LTE, and LoRa. It also covers the environmental characteristics of the All-in-One 5G.

#### Main Specifications

| Feature               | Specifications                                                                                                                                               |
| --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Hardware architecture | AGW <br>  LTE <br>  LoRa                                                                                                                                     |
| ETH                   | RJ45 (2.5G)                                                                                                                                                  |
| USB                   | Type-C USB 3.0                                                                                                                                               |
| Button                | One pairing button                                                                                                                                           |
| Power Supply          | PoE ++(IEEE 802.3bt Standard)                                                                                                                                |
| Power Consumption     | M310:30W (MAX)                                                                                                                                               |
| Antenna               | LTE: Internal Antenna <br> LoRa: Internal Antenna (Supporting switch to external antenna) <br> GPS: Internal Antenna (Supporting switch to external antenna) |
| LED                   | Tricolor LET (Topside)                                                                                                                                      |
| Ingress Protection    | IP30                                                                                                                                                         |


#### AGW Specifications

| Feature   | Specifications                |
| --------- | ----------------------------- |
| CPU       | Quad Core Cortex-A72 (ARM v8) |
| DDR       | 4&nbsp;GB LPDDR4              |
| eMMC      | 32&nbsp;GB                    |
| Bluetooth | Bluetooth 5.0, BLE            |


#### LTE Specifications

| Feature              | Specifications                           |
| -------------------- | ---------------------------------------- |
| LTE Mode             | TDD                                      |
| Frequency Bands      | Band 48 (3550&nbsp;MHz to 3700&nbsp;MHz) |
| Channel Bandwidth    | 5/10/15/20&nbsp;MHz                      |
| Max TX Power         | 24&nbsp;dBm                              |
| Receiver Sensitivity | -100&nbsp;dBm                            |
| Synchronization      | GPS                                      |
| MIMO                 | 2x2 MIMO                                 |
| Antenna              | Built-in 2-port Omni Antenna             |
| Antenna Gain         | 5 ± 1&nbsp;dBi                           |

#### LoRa Specifications

| Feature              | Specifications                    |
| -------------------- | --------------------------------- |
| Mode                 | LoRa                              |
| Operating Frequency  | US915 (902&nbsp;MHz~928&nbsp;MHz) |
| Channel Bandwidth    | 125/500&nbsp;kHz                  |
| Mac TX Power         | 27&nbsp;dBm                       |
| Receiver Sensitivity | -139&nbsp;dBm (SF12)              |
| Antenna              | Built-in Omni Antenna             |
| Antenna Gain         | 1.5 ± 0.5&nbsp;dBi                |

#### Environmental Characteristics

| Feature               | Specifications                                        |
| --------------------- | ----------------------------------------------------- |
| Operating Temperature | 23°&nbsp;F to 113°&nbsp;F / -5°&nbsp;C to 45°&nbsp;C  |
| Storage Temperature   | 14°&nbsp;F to 122°&nbsp;F / -10°&nbsp;C to 50°&nbsp;C |
| Humidity              | 5% to 95% RH                                          |
| Atmospheric Pressure  | 70&nbsp;kPa to 106&nbsp;kPa                           |


### Software

The following introduces the software specifications of the All-in-One 5G:

#### AGW

- 3GPP R12 for LTE
- Support LTE Core: MME, SGW, PGW, HSS-lite
- Extend to support 7 LTE radios
- User Plane throughput >1 Gbps
- Connected  users > 600
- OTA software upgrade


#### LTE

- 3GPP R12 compliant
- Peak rate: Up to DL 110 Mbps and UL 14 Mbps with 20 MHz bandwidth
- Supports 32 concurrent  users
- 2x2 MIMO, single carrier
- Plug-and-play with Self-Organizing Network (SON) capabilities
- Supports TR-069 network management interface
- OTA software upgrade


#### LoRa

- Supports Class A & C
- Supports LoRa package forward
- Supports country code setup
- Supports TX power setup
- Supports data logger
- Supports statistic
- Supports location setup
- Supports server address & port setup

#### Network

- Supports LTE APN setup
- Supports uplink backup
- Supports 802.1q
- Supports DHCP Server/Client
- Supports router module NAT
- Supports firewall


#### Management

- Supports WEB management
- Supports SSH2
- Supports firmware update
- Supports NTP
- Supports configuring the LoRa Packet Forwarder
- Supports Build-in LoRa Server
- Supports OpenVPN, Ping Watch Dog
- Supports MQTT Bridge



