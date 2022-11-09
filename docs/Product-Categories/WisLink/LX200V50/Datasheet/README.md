---
tags:
  - datasheet
  - wislink
  - LX200V50
prev: ../Overview/
next: false
rak_desc: Provides comprehensive information about your LX200V50 WisLink 1000 Mbps PLC Module + EVB to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-plc/lx200v50/overview/lx200v50.png
certifications:
  - [CE, https://downloads.rakwireless.com/PLC/LX200V50/Certification/RAK_PLC_LX200V50_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/PLC/LX200V50/Certification/RAK_PLC_LX200V50_FCC_Certification.pdf]
---

# LX200V50 WisLink 1000 Mbps PLC Module + EVB Datasheet

## Overview

### Description

**LX200V50** is a Power Line Communication (PLC) module based on Qualcomm QCA7550 System-on-Chip (SoC). QCA7550 is a MAC/PHY transceiver module that meets the HPAV2 standard. It is designed to bridge multi-stream Ethernet content from a powerline network to an Ethernet 802.3 network. The PLC's specific MAC manages network admission and service flows to maximize the Quality of Service (QoS) over the powerline network.

### Features

- HomePlug® AV2 compliant:
   - AV2 30&nbsp;MHz and 67&nbsp;MHz MIMO profiles
   - AV2 30&nbsp;MHz and 67&nbsp;MHz SISO profiles
   - Power Save Mode
- IEEE 1901, IEEE 1905.1, and HomePlug AV compliant
- Coexistence with HomePlug 1.0/Turbo nodes
- Integrated MAC/PHY, analog front end, and line driver
- Supports RGMII/RMII Ethernet with both MAC and PHY mode
- Internal DDR2 16&nbsp;MB memory
- HomePlug AV2 compliant PHY:
   - Supports OFDM 4096/1024/256/64/16/8-QAM, QPSK, BPSK, ROBO, HS-ROBO, Mini-ROBO
   - Supports Line-Neutral/Line-Ground 2x2 MIMO with beam-forming
   - 128-bit AES Link Encryption with key management
   - Windowed OFDM with noise mitigation based on patented line synchronization techniques improves data integrity in noisy conditions
   - Dynamic channel adaptation and channel estimation
   - Advanced Turbo Code Forward Error Correction (FEC)
   - Turbo Decoder Rates: 1/2, 16/21, 8/9
- HomePlug AV2 Compliant MAC:
   - Priority-based CSMA/CA channel access schemes maximize efficiency and throughput
   - Integrated Quality of Service (QoS) Enhancements
   - Hardware Packet Classifiers for Type of Service (ToS), Class of Service (CoS), and IP Port Number
   - Supports IGMP managed multicast sessions

## Specifications

### Overview

#### Block Diagram


<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/block-diagram.png"
  width="90%"
  caption="Block diagram"
/>

#### Parameters

| Parameter                     | Value                 |
| ----------------------------- | --------------------- |
| Max. data rate                | 1000&nbsp;Mbps        |
| DC interface                  | 4.75&nbsp;V~36&nbsp;V |
| V50 supported unit connection | 6~8                   |

#### Applications

- High Definition (HD) and Standard Definition (SD) video distribution
- Internet Protocol Television (IPTV) distribution
- Home networking backbone for Hy-Fi, Wi-Fi, and wireless USB
- High-speed broadband sharing
- Audio and video streaming and internet downloading
- Voice over Internet Protocol (VoIP)
- PC files and applications sharing
- Printer and peripheral sharing
- Network and interactive online gaming
- Security Hy-Fi cameras




### Hardware

The hardware specification is categorized into five parts. It shows the interfacing and the pinouts of the board and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters of the LX200V50 WisLink 1000&nbsp;Mbps PLC Module + EVB.


#### Interfaces

##### Evaluation Board (EVB)

The EVB can be used for the customer's product development and testing, and can also be used as a part of the research and development of products. The baseboard is designed for all the external interface circuits required by the module, including coupling parts such as 3.3&nbsp;V buck, Ethernet RJ45, PLC coupling transmission transformer, and other interfaces. It is mainly the interface. The structure of each product is different. The auxiliary interface evaluation board is designed to be convenient for testing.

**Figure 2** shows the interfaces of the evaluation board.

<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/baseplate-interfaces.png"
  width="80%"
  caption="Baseplate interfaces and top view"
/>

#### Pin Definition

| Pin | Description           |
| --- | --------------------- |
| NC  | No connect            |
| I   | Input                 |
| I-  | Differential input -  |
| I+  | Differential input +  |
| I/O | Input/Output          |
| O   | Output                |
| O-  | Differential output - |
| O+  | Differential output + |
| PI  | Power input           |



##### J13 Pin Definition

<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/j13.png"
  width="50%"
  caption="J13 pin order"
/>


| Pin No. | Name   | Direction | Description                                  |
| ------- | ------ | --------- | -------------------------------------------- |
| 1       | ZC_INP | I         | Zero cross detection                         |
| 2       | -      | NC        | Do not connect anything                      |
| 3       | -      | NC        | Do not connect anything                      |
| 4       | GND    | -         | Ground connection                            |
| 5       | GND    | -         | Ground connection                            |
| 6       | -      | NC        | Do not connect anything                      |
| 7       | -      | NC        | Do not connect anything                      |
| 8       | -      | NC        | Do not connect anything                      |
| 9       | TX1-   | O-        | MIMO Differential output for MIMO Channel #1 |
| 10      | TX1+   | O+        | MIMO Differential output for MIMO Channel #1 |
| 11      | RX1-   | I-        | MIMO Differential input for MIMO Channel #1  |
| 12      | RX1+   | I+        | MIMO Differential input for MIMO Channel #1  |
| 13      | TX0-   | O         | MIMO Differential output for MIMO Channel #0 |
| 14      | TX0+   | O         | MIMO Differential output for MIMO Channel #0 |
| 15      | RX0-   | I         | MIMO Differential input for MIMO Channel #0  |
| 16      | RXO+   | I         | MIMO Differential input for MIMO Channel #0  |



##### J14 Pin Definition


<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/j14.png"
  width="50%"
  caption="J14 pin order"
/>



| Pin No. | Name     | Direction | Description                                               |
| ------- | -------- | --------- | --------------------------------------------------------- |
| 1       | TD3-     | I/O-      | Media-dependent interface 3, 100&nbsp;Ω transmission line |
| 2       | TD3+     | I/O+      | Media-dependent interface 3, 100&nbsp;Ω transmission line |
| 3       | TD2-     | I/O-      | Media-dependent interface 2, 100&nbsp;Ω transmission line |
| 4       | TD2+     | I/O+      | Media-dependent interface 2, 100&nbsp;Ω transmission line |
| 5       | TD1-     | I/O-      | Media-dependent interface 1, 100&nbsp;Ω transmission line |
| 6       | TD1+     | I/O+      | Media-dependent interface 1, 100&nbsp;Ω transmission line |
| 7       | TD0-     | I/O-      | Media-dependent interface 0, 100&nbsp;Ω transmission line |
| 8       | TD0+     | I/O+      | Media-dependent interface 0, 100&nbsp;Ω transmission line |
| 9       | 3.3VPS   | PI        | Power supply                                              |
| 10      | 3.3VPS   | PI        | Power supply                                              |
| 11      | GND      | -         | Ground connection                                         |
| 12      | GND      | -         | Ground connection                                         |
| 13      | GPIO[8]  | IO        | General purpose I/O, Power LED Blue                       |
| 14      | GPIO[6]  | IO        | General purpose I/O, LP LED Activity Green                |
| 15      | GPIO[10] | IO        | General Purpose I/O, Power LED Red                        |
| 16      | RESET_L  | I         | QCA7550 reset (low active)                                |



#### Electrical Characteristics


##### Absolute Maximum Ratings

| Parameter            | Symbol | Min. | Typ. | Max. | Unit     |
| -------------------- | ------ | ---- | ---- | ---- | -------- |
| Supply input voltage | 3.3VPS | -2.7 | 3.3  | 5.5  | V        |
| Storage temperature  | Tstore | -40  | 25   | 150  | °&nbsp;C |

##### Operation and Storage Temperatures

| Parameter             | Symbol | Min. | Typ. | Max. | Unit     |
| --------------------- | ------ | ---- | ---- | ---- | -------- |
| Storage temperature   | Tstore | -40  | 25   | 150  | °&nbsp;C |
| Operating temperature | Ta     | -40  | 25   | 80   | °&nbsp;C |

##### DC Characteristics

| Parameter                 | Symbol | Min. | Max. | Unit |
| ------------------------- | ------ | ---- | ---- | ---- |
| Low-level input voltage   | VIL    | -0.3 | 0.7  | V    |
| High-level input voltage  | VIH    | 2.0  | 3.5  | V    |
| Low-level output voltage  | VOL    | -0.3 | 0.4  | V    |
| High-level output voltage | VOH    | 2.4  | -    | V    |
| GPIO low-level current    | IOGPIO | -12  | 12   | mA   |


#### Mechanical Characteristics

All dimensions are measured in mm. The tolerance value is ±0.05&nbsp;mm.

##### Module Dimensions


<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/module-dimension.png"
  width="70%"
  caption="Module dimensions"
/>

##### Pin Dimensions

<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/pin-dimension.png"
  width="70%"
  caption="Pin dimensions"
/>


##### Baseplate Dimensions


<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/baseplate-dimension.png"
  width="60%"
  caption="Baseplate dimensions and bottom view"
/>



#### Schematic Diagram

##### Power Supply

The board provides two power supply modes: DC power interface and Micro USB interface. The voltage input range of the DC interface is 4.75~36&nbsp;V. The power supply is converted to the 3.3&nbsp;V voltage required by the module through DC-DC. **Figure 8** shows the schematic diagram of the EVB's power supply.

<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/power-supply.png"
  width="100%"
  caption="Power supply schematics"
/>


##### Ethernet and LEDs

<rk-img
  src="/assets/images/wislink-plc/lx200v50/datasheet/ethernet-leds.png"
  width="100%"
  caption="Ethernet and LEDs"
/>
