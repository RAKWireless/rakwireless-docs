---
rak_desc: Covers the comprehensive information of your RAK13800 module to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/wisblock/rak13800/RAK13800.png
tags:
  - datasheet
  - wisblock
  - RAK13800
prev: ../Quickstart/
next: false
---

# RAK13800 WisBlock Ethernet Module Datasheet

## Description

RAK13800 is an Ethernet module based on the W5100S-L chip from WIZnet. The module has an embedded Internet Controller Chip that integrates a Hardwired TCP/IP stack with 10/100 Ethernet MAC and PHY. It is truly a one-chip solution for stable internet connectivity.

The RAK13800 TCP/IP stack supports TCP, UDP, IPv4, ICMP, ARP, IGMP, and PPPoE – and it has been proven through various applications over the last decade.

The user can develop an Ethernet application easily by using the simple SOCKETs program instead of handling a complex Ethernet controller. W5100S-L provides four independent SOCKETs to be used simultaneously and 16KB internal memory for RX/TX data communication buffer.

::: tip 📝 NOTE
RAK13800 can be POE enabled by mounting its daughter power board [WisBlock RAK19018 POE Module](/Product-Categories/WisBlock/RAK19018/Overview).
:::

### Features

- Based on WIZnet W5100S-L chip
- Support Hardwired Internet protocols
- Support four independent SOCKETs simultaneously
- Support SOCKET-less command
- Support Ethernet Power-down mode & Main Clock gating for power save
- Support WOL (Wake on LAN) over UDP
- SPI Host Interface
- Internal 16Kbytes Memory for TX/RX Buffers
- 10BaseT/100BaseTX Ethernet PHY Integrated
- Support Auto-Negotiation
- Support Auto-MDIX only when Auto-Negotiation mode
- Network Indicator LEDs
- Supply Voltage: 2.97nbsp;V ~ 3.63&nbsp;V
- Size: 25 x 50&nbsp;mm


## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800_front_1.svg"
  width="40%"
  caption="RAK13800 top view"
/>

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800_back_1.svg"
  width="40%"
  caption="RAK13800 bottom view"
/>

#### Mounting

The RAK13800 module can be mounted to the IO slot of your WisBlock Base board. To illustrate, **Figure 3** shows how RAK13800 can be mounted on the RAK5005-O WisBlock Base Board.

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/image-20210225140319101.png"
  width="60%"
  caption="RAK13800 mounting mechanism"
/>

### Hardware

The hardware specification is categorized into four parts. It shows the pinouts and their corresponding functions. It also covers the electrical and mechanical parameters that include the tabular data of its characteristics. This section also shows the schematic diagram of RAK13800.

####  Chipset

| Vendor | Part number |
| ------ | ----------- |
| WIZnet | W5100S-L    |

#### Pin Definition

The RAK13800 WisBlock Ethernet module comprises a standard 40-pin IO Connector. The IO connector allows the RAK13800 module to be mounted to a WisBlock Base Board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 4**.

:::tip 📝 NOTES:
- SPI-related pins, INTn, CSn, RSTn，3V3_S, and GND are connected to IO Connector.
- +5&nbsp;V is connected to the WisBlock IO connector to power the WisBlock Base Board with RAK19018 POE.
:::


<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800_pinouts.svg"
  width="70%"
  caption="RAK13800 pinout"
/>


#### Electrical Characteristics


##### Absolute Maximum Ratings

| **Symbol** | **Description**       | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | --------------------- | -------- | -------- | -------- | -------- |
| VDD        | DC Supply voltage     | -0.5     | -        | 4.6      | V        |
| VIN        | DC input voltage      | -0.5     | -        | 4.6      | V        |
| VOUT       | DC output voltage     | -0.5     | -        | 3.63     | V        |
| ESD HBM    | Human body model      | -        | -        | 2000     | V        |
| VESD MM    | Man machine model     | -        | -        | 200      | V        |
| ESD  CDM   | Charged device mFodel | -        | -        | 500      | V        |

##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | --------------- | -------- | -------- | -------- | -------- |
| VDD        | Supply voltage  | 2.97     | 3.3      | 3.63     | V        |
| IDD1       | Supply current  | -        | 132      | -        | mA       |


#### Mechanical Characteristics

##### Board Dimensions

Refer to **Figure 5** below for the mechanical dimensions of the RAK13800 module.

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800-dim.png"
  width="80%"
  caption="RAK13800 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram


##### Standard WisBlock Connector
<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/image-20211116120503808.png"
  width="70%"
  caption="Standard WisBlock connector"
/>


##### WIZnet W5100S-L Ethernet Controller


<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800-W5100S.png"
  width="100%"
  caption="WIZnet W5100S-L Ethernet controller and mounting holes"
/>


##### RJ45 Connector and Ethernet Transformer

T1 is the Ethernet Transformer and J4 is the RJ-45 Connector.

<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/rak13800-eth-rj.png"
  width="100%"
  caption="RJ45 connector and Ethernet transformer"
/>


##### Power Connector for RAK19018 POE

J6 is 5&nbsp;V output and J5 is POE power input.
<rk-img
  src="/assets/images/wisblock/rak13800/datasheet/image-20211116120716038.png"
  width="70%"
  caption="Power connector for RAK19018"
/>
