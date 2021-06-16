---
rak_desc: Covers the comprehensive information of your RAK7249 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisgate
  - RAK7249
prev: ../Quickstart/
next: ../Supported-LoRa-Network-Servers/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249_RED(CE)_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249_FCC_Certificate.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249_RAK7240_IC_Cert.pdf]
  - [RCM, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249-RCM-Declaration-of-Conformity.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249-ROHS-ATL20191105773R01-Report.pdf]
  - [IP67, https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Certification-Report/RAK7249_Enclosure_IP67_Test_Report.pdf]
---

# RAK7249 WisGate Edge Max Datasheet

<!-- <rk-img
  src="/assets/images/wisgate/rak7249/datasheet/rak7249-macro-outdoor-gateway.png"
  width="75%"
  caption="RAK7249 WisGate Edge Max"
/> -->

## Overview

### Description

**RAK7249 WisGate Edge Max** is an ideal product for IoT commercial deployment. Its modularity and customization options allow for flexibility when deploying a solution. With its industrial-grade components, it achieves a high standard of reliability.

The gateway provides for a solid out of the box experience for quick deployment. Additionally, since its software and UI sits on top of OpenWRT it is perfect for the development of custom applications (via the open SDK).

Thus the RAK7249 is suited for any use case scenario, be it rapid deployment or customization with regards to UI and functionality.

### Features

#### Hardware

1. **IP67/NEMA-6** industrial grade enclosure with cable glands
2. **PoE (802.3 af)** + Surge Protection
3. Dual LoRa Concentrators for up to **16 channels**
4. **Backhaul:** Wi-Fi, LTE and Ethernet
5. **GPS**
6. Up to **5 hours of autonomous work** on battery (Battery + Solar Kit optional)

#### Software

1. Built-in LoRa Server 
2. OpenVPN
3. Software and UI sit on top of **OpenWRT**
4. LoRaWAN 1.0.3
5. **LoRa Frame filtering** (node whitelisting)
6. **MQTT v3.1** Bridging with **TLS** encryption
7. **Buffering of LoRa frames** in case of NS outage (no data loss)

## Specifications

### Overview

The overview presents the circuit board of RAK7249 WisGate Edge Max and its block diagram that shows the board works with MT7628 chip as the core. It also lists the components and accessories of the RAK7249 WisGate Edge Max.

#### Circuit Board

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/circuit-board-interface.png"
  width="80%"
  caption="Circuit Board Interface"
/>

#### Components and Accessories

Create your own RAK7249 WisGate Edge Max using the supplied building blocks:

- Main Board
- Enclosure
- Backup Battery
- Accessories

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/package_contents.png"
  width="80%"
  caption="DIY Enterprise Gateway Components and Accessories"
/>

:::tip 📝 NOTE
Actual Devices for RAK7249 WisGate Edge Max and accessories may differ from the image presented. For any discrepancies, please adhere to the actual product instead.
:::

##### Main Board

- **CPU:** RAK634 Module (MT7628 inside)
- **RAM**:128MB DDR2
- **Flash**:16MB
- **WiFi**: 2x2 MIMO 802.11b/g/n
- **LoRa Concentrator:** up to 2 LoRa Concentrator modules for up to 16 LoRa channels
- **Tx Power**: up to 27dBm
- **Rx sensitivity**: down to -139dBm.
- **4G Cellular**: Quectel EG95 for CAT4 cellular network
- **GPS**: L70 GPS Module
- **Power-over-Ethernet (PoE)**: 100M base-T Ethernet with IEEE802.3af/at standard Power-over-Ethernet

##### Enclosure

- IP67 waterproof white color
- **Interface**: 5 x N-Type connectors for Antenna,1 PoE port and 1 reserve port.
- **Weight (with cable)**: approximately 70.54oz (2kg)
- **Dimensions**: 220mm x 220mm x 104mm
- **Wall thickness**: 2mm.
- **Support**: up to 70~100 mm diameter pole mount

##### Backup Battery

- The maximum space in the Enclosure can be placed 12V/10AH batteries for about 10 hours lifetime under typical operation
- Battery powered real time clock
- Battery Within 140 mm x 70 mm x 30 mm
- DC 5.5 x 2.1 circular joint with two interfaces, one male and one female

##### Accessories

- Mounting Kit
- PoE Injector
- WiFI Antenna
- GPS Antenna
- LoRa Antenna
- LTE Antenna

#### Block Diagram

The image below shows the block diagram for RAK7249 WisGate Edge Max with MT7628 chip as the core.

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/block-diagram.png"
  width="80%"
  caption="RAK7249 Block Diagram"
/>

### Hardware

The hardware specification presents the interfacing of RAK7249 WisGate Edge Max both in hardware and board interfaces. 


#### Interfaces

##### Hardware Interface

The images below shows the hardware interfaces at the front and rear of RAK7249 WisGate Edge Max.

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/hardware-interfaces-front.jpg"
  width="50%"
  caption="Hardware Interfaces - Front"
/>

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/hardware-interfaces-rear.jpg"
  width="50%"
  caption="Hardware Interfaces - Rear"
/>

##### Board Interface

<rk-img
  src="/assets/images/wisgate/rak7249/datasheet/circuit-board-interface.png"
  width="80%"
  caption="Circuit Board Interface"
/>

###### Reset Key Functions

The RAK7249 WisGate Edge Max's mainboard provides a Reset key and 6 x LEDs for status indication. The function of the Reset key is as follows:

- **Short press**: Restarts the Gateway
- **Long press (5s and above)**: Restore Factory Settings;

###### LED Indicators

The status of the LEDs is described as below. Please refer to the printing of the LEDs
on the mainboard.

| LEDs                            | Status Indication Description                                                                                                                                                                                                                                  |
| ------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **LED1 (PWR)**                  | Power Indicator, Led ON when device power on                                                                                                                                                                                                                   |
| **LED2 (ETH)**                  | • **ON** - linkup <br> • **OFF** - linkdown <br> • **Flash** - Data Transmitting and Receiving                                                                                                                                                                 |
| **LED3 (LoRa1)**                | • **ON** - LoRa1 is working <br> • **OFF** - LoRa1 is not working <br> • **Flash** - Indicate that LoRa1 Packet receiving and sending                                                                                                                          |
| **LED4 (LTE)**                  | • Slow Flash 1 (200ms Bright/1800ms Dark) <br> • Unregistered network (in search) <br> • Slow Flash 2 (200ms Dark/1800ms Bright) <br> • Idle status (online) <br> • Flash - Data Transmitting and Receiving <br> • ON - Voice is working                       |
| **LED5 (LoRa2 for 16 channel)** | • **ON** - LoRa2 is working <br> • **OFF** - LoRa2 is not working <br> • **Flash** - Indicate that LoRa2 Packet receiving and sending                                                                                                                          |
| **LED6 (WLAN)**                 | **AP Mode** <br> • **ON** - WLAN is working <br> • **Flash** - Data Transmitting and Receiving <br><br> **STA Mode** <br> • **Slow Flash (1Hz)** - Connection Disconnected <br> • **ON** - Connection Successful <br> • **Flash** - Data Receiving and Sending |

#### Main Specifications

| Feature             | Specifications                                                                                                                                                                                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Computing           | MT7628, DDR2RAM 128MB                                                                                                                                                                                                                                                                 |
| Wi-Fi Feature       | • **Frequency**: 2.400-2.4835GHz(802.11b/g/n) <br> • **RX Sensitivity**: -95dBm (Min) <br> • **TX Power**: 20dBm (Max) <br> • **Operation Channels**: 2.4GHz: 1-13                                                                                                                    |
| LoRa Feature       | <br> • **Card**: SX1301 Mini PCIe Card (connects maximum of two) <br> • **Channels**: 8 Channels (Optional: 16 channels) <br> • **RX Sensitivity**: -139dBm (Min) <br> • **TX Power**: 27dBm (Max) <br> • **Frequency**: EU433, CN470, EU868, US915 , AS923, AU915, KR920, IN865 |
| Cellular Feature    | • Supports Quectel EG95-E / EG95-NA(IoT/M2M-optimized LTE Cat 4 Module) <br> • EG95 -E for EMEA Region：<br> • LTE FDD: B1/B3/B7/B8/B20/B28A <br> • WCDMA: B1/B8 <br> • GSM/EDGE: B3/B8 EG95 -NA for North America Region<br> • LTE FDD: B2/B4/B5/B12/B13 <br> • WCDMA: B2/B4/B5      |
| Power Supply        | PoE(IEEE 802.3af/at-Compliant) - 42~57VDC; Power Jack - 12V DC                                                                                                                                                                                                                         |
| Power Consumption   | 12W (Typical)                                                                                                                                                                                                                                                                         |
| ETH                 | RJ45 (10/100Mbps)                                                                                                                                                                                                                                                                     |
| Antenna             | 5 N-Type Connectors                                                                                                                                                                                                                                                                   |
| Ingress Protection  | IP67                                                                                                                                                                                                                                                                                  |
| Enclosure Material  | Aluminum                                                                                                                                                                                                                                                                              |
| Weight              | Approximately 111.11oz (3.15kg)                                                                                                                                                                                                                                                       |
| Dimension           | 220mm x 220mm x 104mm                                                                                                                                                                                                                                                                 |
| Operating Temp      | -30˚C to +55 ˚C                                                                                                                                                                                                                                                                       |
| Installation method | Pole or Wall mounting                                                                                                                                                                                                                                                                 |

#### RF Specifications

##### LoRa

| Feature              | Specifications                                                 |
| -------------------- | -------------------------------------------------------------- |
| Operating Frequency  | • EU433, CN470, EU868, US915 <br> • AS923, AU915, KR920, IN865 |
| Transmit Power       | 27dBm (Max)                                                    |
| Receiver Sensitivity | -139dBm (Min)                                                  |

##### Wi-Fi

| Features                                                                                            | Specifications                                                                                                                                                                                                                                                       |
| --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Wireless Standard**                                                                               | IEEE 802.11b/g/n                                                                                                                                                                                                                                                     |
| **Operating Frequency**                                                                             | **ISM band**: 2.412~2.472(GHz)                                                                                                                                                                                                                                       |
| **Operation Channels**                                                                              | 2.4GHz: 1-13                                                                                                                                                                                                                                                         |
| **Transmit Power** <br> (The max. power may be different depending on local regulations) -per chain | **802.11b** <br> • 1Mbps : 19dBm <br> • 11Mbps : 19dBm <br><br> **802.11g** <br> • 6Mbps : 18dBm <br> • 54Mbps : 16dBm <br><br> **802.11n (2.4G)** <br> • MCS0 (HT20) : 18dBm <br> • MCS7 (HT20) : 16dBm <br> • MCS0 (HT40) : 17dBm <br> • MCS7 (HT40) :15dBm        |
| **Receiver Sensitivity** (Typical)                                                                  | **802.11b** <br> • 1Mbps : -95dBm <br> • 11Mbps : -88dBm <br> <br> **802.11g** <br> • 6Mbps : -90dBm <br> • 54Mbps : -75dBm <br><br> **802.11n (2.4G)** <br> • MCS0 (HT20) : -89dBm <br> • MCS7(HT20) : -72dBm <br> • MCS0(HT40) : -86dBm <br> • MCS7(HT40) : -68dBm |

### Software

RAK7249 supports software in LoRa, Network and Management. Supported features are shown in the table below.

#### Supported Software

| LoRa                          | Network            | Management                                   |
| ----------------------------- | ------------------ | -------------------------------------------- |
| Supports class A, C           | WiFi AP mode       | WEB Management                               |
| LoRa package forward          | LTE APN setup      | Supports SSH2 , NTP                          |
| Country code setup            | Uplink backup      | Firmware update                              |
| TX power up setup             | Supports 802.1q    | Supports configure the LoRa Packet Forwarder |
| Datalogger                    | DHCP Server/Client | Supports Build-in LoRa Server                |
| Statistic                     | Router module NAT  | Supports OpenVPN, Ping Watch Dog             |
| Location setup                | Firewall           | Supports MQTT Bridge                         |
| Server address and port setup |                    |                                              |

## Models / Bundles

The table below shows the main board configurations of the Macro outdoor.

|  Part Number   | 8 Channel SX1301 | 16 Channel SX1301 | Cat4 Cellular | GPS | WiFi | Battery Backup |
| :------------: | :--------------: | :---------------: | :-----------: | :-: | :--: | :------------: |
| RAK7249-0x-14x |        √         |                   |       √       |  √  |  √   |                |
| RAK7249-1x-14x |                  |         √         |       √       |  √  |  √   |                |
| RAK7249-2x-14x |        √         |                   |       √       |  √  |  √   |       √        |
| RAK7249-3x-14x |                  |         √         |       √       |  √  |  √   |       √        |
|   RAK7249-0x   |        √         |                   |               |  √  |  √   |                |
|   RAK7249-1x   |                  |         √         |               |  √  |  √   |                |
|   RAK7249-2x   |        √         |                   |               |  √  |  √   |       √        |
|   RAK7249-3x   |                  |         √         |               |  √  |  √   |       √        |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
