---
tags:
  - datasheet
  - wisgate
prev: ../Quickstart/
next: false 
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Certification-Report/RAK7258_CE_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Certification-Report/RAK7258_FCC_Certificate.zip]
---

# RAK7258 WisGate™ Edge Lite Datasheet

<!-- <rk-img
  src="/assets/images/wisgate/rak7258/datasheet/rak7258-overview.png"
  width="40%"
  caption="RAK7258 WisGate™ Edge Lite Gateway"
/> -->

## Overview

### Description

The **RAK7258 WisGate Edge Lite** is a full 8-channel gateway with built-in Ethernet connectivity for a straightforward setup. Additionally, there is an on-board Wi-Fi setup that allows it to be easily configured via the default Wi-Fi AP mode.

As with the other RAKwireless Industrial Gateways, it also supports MQTT Bridge mode, with the option for TLS authentication.

Power-over-Ethernet (PoE) is supported to serve cases where wall or ceiling mounting is required without the need to install additional power lines.

The open source software for the management and configuration of this gateway device is based on OpenWRT. It has a built-in LoRa® packet forwarder and a graphical user interface, allowing for a quick set-up without giving up the freedom of a fully customized solution.

The Gateway has Line-of-Sight (LoS) ranges of up to **15 kilometers**, while for highly urbanized environments it can cover more than **2 kilometers**. It is a perfect solution for any LoRaWAN® use case scenario.

The RAK7258 WisGate Edge Lite package includes a LoRa® antenna, mounting screws, and anchors. It is a full 8-channel gateway with built-in Ethernet connectivity for a straightforward.

### Features

- Full LoRaWAN® Stack support (V 1.0.2)
- 100M base-T Ethernet with **PoE (802.3 af)**
- Multi back-haul backup with **Ethernet, WiFi, Cellular** (optional LTE Cat 4)
- **OpenWRT** software supports with Web UI for easy configuration and monitoring
- Can integrate with both private (**ChirpStack**) and public (**TTN**) Network Servers
- Built-in LoRaServer for easy deployment of applications and integration of Gateways **(up to 128 LoRa nodes license included, higher tiers require a fee)**
- TF card for log backup

## Specifications

### Overview

The overview shows the circuit board of RAK7258. It also presents the block diagram that shows the internal architecture of the board. 

#### Circuit Board (Main Electronic Circuit Board)

<rk-img
  src="/assets/images/wisgate/rak7258/datasheet/board_overview.png"
  width="80%"
  caption="RAK7258 WisGate Edge Lite Circuit Board"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7258/datasheet/block-diagram.png"
  width="70%"
  caption="RAK7258 WisGate Edge Lite Block Diagram"
/>

### Hardware

The hardware specification covers only the interfacing of the RAK7258 and its corresponding functionalities. It also presents the parameters and the standard values of the board.

#### Interfaces

The hardware interfaces of RAK7258 WisGate Edge Lite include DC 12V, ETH interface, Console interface, Reset key, USB port, Nano SIM slot, TF Card slot, six (6) Status indicator LEDs, LoRa® Antenna connector etc. as shown in the following figure.

<rk-img
  src="/assets/images/wisgate/rak7258/datasheet/hardware-interfaces.png"
  width="60%"
  caption="RAK7258 WisGate Edge Lite Hardware Interfaces"
/>

##### Reset Key Functions
The function of the **Reset** key is as follows:

1. **Short press**: Restarts the Gateway
2. **Long press (5 seconds and above)**: Restore Factory Settings

The status of the LEDs is described as below:

| LEDs | Status Indication Description                                                                                                                                                                                                        |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| PWR  | Power Indicator, Led on when device power on                                                                                                                                                                                         |
| ETH  | **ON**: linkup <br> **OFF**: linkdown <br>**Flash**: Data Transmitting and Receiving                                                                                                                                                 |
| LoRa | **ON**: LoRa1 is working <br>**OFF**: LoRa1 is not working <br>**Flash**: Indicate that LoRa1 Packet receiving and sending                                                                                                           |
| ACT  | Expanded Led indicator, useless                                                                                                                                                                                                      |
| STAT | Expanded Led indicator, useless                                                                                                                                                                                                      |
| WLAN | AP Mode : <br>**ON**: WLAN is working<br>**Flash**: Data Transmitting and Receiving <br><br>STA Mode : <br>**Slow Flash (1Hz)**: Connection Disconnected <br>**ON**: Connection Successful <br>**Flash**: Data Receiving and Sending |

#### Main Specifications

| Feature             | Specifications                                                                                                                                                                                                                                                                                                                         |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computing           | MT7628, DDR2RAM 128MB                                                                                                                                                                                                                                                                                                                  |
| Wi-Fi Feature       | • **Frequency**: 2.400-2.4835GHz(802.11b/g/n) <br> • **RX Sensitivity**: -95dBm (Min), <br>• **TX Power**: 20dBm (Max) <br> • **Operation Channels**: 2.4GHz: 1-13                                                                                                                                                                     |
| LoRa® Feature       | • SX1301 Mini PCIe card <br> • 8 Channels <br> • **RX Sensitivity**: -142 dBm (Min) <br> • **TX Power**: 27 dBm (Max) <br> • **Frequency**: EU433 / CN470 / EU868 / US915 / AS923 / AU915 / IN865 / KR920                                                                                                                              |
| Cellular            | Supports Quectel EG95-E / EG95-NA(IoT/M2M-optimized LTE Cat 4 Module), nonsupport by default <br><br> EG95-E for EMEA Region： <br> • **LTE FDD**: B1/B3/B7/B8/B20/B28A <br> • **WCDMA**: B1/B8 <br> • **GSM/EDGE**: B3/B8 <br><br> EG95-NA for North America Region： <br> • **LTE FDD**: B2/B4/B5/B12/B13 <br> • **WCDMA**: B2/B4/B5 |
| Power Supply        | • DC 12 Volts - 1 Ampere <br> • POE (IEEE 802.3af), 42~57 VDC                                                                                                                                                                                                                                                                          |
| Power Consumption   | 12 Watts (typical)                                                                                                                                                                                                                                                                                                                     |
| Ethernet (ETH)      | RJ-45(10/100M)                                                                                                                                                                                                                                                                                                                         |
| Console             | RJ-45 (RS232)                                                                                                                                                                                                                                                                                                                          |
| Antenna             | • **LoRa**: RP-SMA Female Connector <br> • **Wi-Fi**: Internal Antenna                                                                                                                                                                                                                                                                 |
| LEDs                | LoRa LED(1), Cellular LED (2), POWER LED(1), ETH LED(1), WiFi LED(1)                                                                                                                                                                                                                                                                   |
| Ingress Protection  | IP30                                                                                                                                                                                                                                                                                                                                   |
| Enclosure Material  | Plastics                                                                                                                                                                                                                                                                                                                               |
| Weight              | 0.3 kg                                                                                                                                                                                                                                                                                                                                 |
| Dimension           | 180 mm x 120 mm x 43 mm                                                                                                                                                                                                                                                                                                                |
| Operating Temp      | -10 to 55 ˚C                                                                                                                                                                                                                                                                                                                           |
| Installation method | Wall mounting                                                                                                                                                                                                                                                                                                                          |

#### RF Specifications

##### LoRa® Radio Specifications

| Feature              | Specifications                                               |
| -------------------- | ------------------------------------------------------------ |
| Operating Frequency  | EU433 / CN470 / EU868 / US915 / AS923 / U915 / IN865 / KR920 |
| Transmit Power       | 27 dBm (Max)                                                 |
| Receiver Sensitivity | -142 dBm (Min)                                               |

##### Wi-Fi Radio Specifications

| Feature                                                    | Specifications                                                                                                                                                                                                                                      |
| ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Wireless Standard                                          | IEEE 802.11b/g/n                                                                                                                                                                                                                                    |
| Operating Frequency                                        | **ISM band**: 2.412~2.472(GHz)                                                                                                                                                                                                                      |
| Operation Channels                                         | 2.4GHz: 1-13                                                                                                                                                                                                                                        |
| Transmit Power (Max power on local regulations) -per chain | **802.11b** <br> • 1Mbps: 19dBm <br> • 11Mbps: 19dBm <br><br>**802.11g** <br> • 6Mbps: 18dBm <br> • 54Mbps: 16dBm <br><br>**802.11n(2.4G)** <br> • MCS0 (HT20): 18dBm <br> • MCS7 (HT20): 16dBm <br> • MCS0 (HT40): 17dBm <br> • MCS7 (HT40): 15dBm |
| Receiver Sensitivity (Typical)                             | **802.11b** <br> • 1Mbps: 95dBm <br> • 11Mbps: 88dBm <br><br>**802.11g** <br> • 6Mbps: 90dBm <br> • 54Mbps: 75dBm <br><br>**802.11n(2.4G)** <br> • MCS0 (HT20): 89dBm <br> • MCS7(HT20): 72dBm <br> • MCS0(HT40): 86dBm <br> • MCS7(HT40): 68dBm    |

### Software

RAK7258 supports software in LoRa®, Network and Management. Supported features are shown in the table below.

#### Software Features


| LoRa®                          | Network            | Management                                   |
| ----------------------------- | ------------------ | -------------------------------------------- |
| Supports class A, C           | WiFi AP mode       | WEB Management                               |
| LoRa® package forward          | LTE APN setup      | Supports SSH2 , NTP                          |
| Country code setup            | Uplink backup      | Firmware update                              |
| TX power up setup             | Supports 802.1q    | Supports configure the LoRa® Packet Forwarder |
| Datalogger                    | DHCP Server/Client | Supports Build-in LoRa® Server                |
| Statistic                     | Router module NAT  | Supports OpenVPN, Ping Watch Dog             |
| Location setup                | Firewall           | Supports MQTT Bridge                         |
| Server address and port setup |                    |                                              |

## Models / Bundles

Order Information

| Part Number    | Package                                                         | Description    |
| -------------- | --------------------------------------------------------------- | -------------- |
| RAK7258-01-R01 | 1x RAK7258, 1x LoRa Antenna and 1x Power Adapter retail package | LoRa 8RX EU433 |
| RAK7258-02-R01 | 1x RAK7258, 1x LoRa Antenna and 1x Power Adapter retail package | LoRa 8RX CN470 |
| RAK7258-03-R01 | 1x RAK7258, 1x LoRa Antenna and 1x Power Adapter retail package | LoRa 8RX EU868 |
| RAK7258-04-R01 | 1x RAK7258, 1x LoRa Antenna and 1x Power Adapter retail package | LoRa 8RX US915 |
| RAK7258-06-R01 | 1x RAK7258, 1x LoRa Antenna and 1x Power Adapter retail package | LoRa 8RX AS923 |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />