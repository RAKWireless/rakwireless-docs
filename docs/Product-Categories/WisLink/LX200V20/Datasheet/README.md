---
rak_desc: Provides comprehensive information about your LX200V20 WisLink 200 Mbps PLC Module + EVB to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-plc/lx200v20/lx200v20.png
prev: ../Overview/
next: false
tags:
  - LX200V20
  - wislink
  - datasheet
---

# LX200V20 WisLink 200 Mbps PLC Module + EVB Datasheet

## Overview

### Description

**LX200V20** is a Power Line Communication (PLC) product supporting IEEE 1901 and Homeplug AV standards. It features a standard MII interface for communication. The small footprint is ideal for embedded design applications. Connectors allow easy integration into target devices. This module accelerates design cycles and speeds up time to market. Measuring 40 x 21&nbsp;mm, it operates on a single 3.3&nbsp;V<sub>DC</sub> rail with an integrated power management unit. The module supports robust OFDM mode modulation 200&nbsp;Mbps PHY rate. It can be integrated into smart meters and is ideal for energy, surveillance, and smart home applications.

### Features

- 200&nbsp;Mbps PHY rate
- 128-bit encryption
- MAx Range: 
  - Power Lines: 300&nbsp;m 
  - Telephone Lines: 600&nbsp;m 
  - Cable Lines: 2000&nbsp;m
- Compliant with Homeplug AV specification and IEEE1901 standards
- Single chip solution with integrated analog front end and line driver
- MII communication interface for communication with any Ethernet-based device
- Data transmission via two-wired lines, telephone line, and a power line
- Working frequency range 2-30&nbsp;MHz
- Dimensions: 60 x 30&nbsp;mm

## Specifications

#### Parameters

| Parameter                     | Value              |
|-------------------------------|--------------------|
| Max. data rate                | 200&nbsp;Mbps      |
| DC interface                  | 7&nbsp;V~28&nbsp;V |



### Applications

- Smart meters
- Energy management systems
- Programmable controlled thermostats
- Remote meter devices
- Surveillance
- Industry
- Solar panels

### Hardware

The hardware specification is categorized into five parts. It shows the interfacing and the pinouts of the board and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters of the LX200V30 WisLink 500&nbsp;Mbps Broadband PLC Module + EVB.


#### Interfaces

##### Evaluation Board (EVB)

The EVB provides all the external interfaces required by the PLC module, which include 7V-28&nbsp;V DCDC, 3.3&nbsp;V BUCK, DC power Jack, RJ45 Ethernet, and a PLC coupling transformer. The board is suitable for any embedded design that needs a different power circuit. You can easily use the board to evaluate the PLC performance. 


<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/2.baseplate-interfaces-and-top-view.png"
width="60%"
caption="Baseplate interfaces and top view"
/>

#### Pin Definition

Module connector J2 is a single row of 2.0&nbsp;mm pins, responsible for drawing out the corresponding interface, including the Ethernet interface of connecting RJ45, PLC coupling TX and RX interface, power supply, LED, and so on. Тhe order from right to left from 1 to 20. The specific definitions are as follows.

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/3.j2-pin-definition.png"
width="70%"
caption="Pin definition"
/>

| Pin No. | Definition | Description                                                                                                           |
|---------|------------|-----------------------------------------------------------------------------------------------------------------------|
| 1       | GND        | Ground                                                                                                                |
| 2       | TX+        | Powerline Tx signal                                                                                                   |
| 3       | TX-        | Powerline Tx signal                                                                                                   |
| 4       | GND        | Ground                                                                                                                |
| 5       | RX+        | Powerline Rx signal                                                                                                   |
| 6       | RX-        | Powerline Rx signal                                                                                                   |
| 7       | GND        | Ground                                                                                                                |
| 8       | ZC_IN_EX   | Zero cross input<br>Minimum: 100 mVpp, AC coupled<br>Maximum: 3.3 Vpp, AC coupled                                     |
| 9       | GPIO[0]    | PLC Link LED, light when the PLC is connected (Blue LED on EVB board)                                                 |
| 10      | GPIO[1]    | System self-check LED, light after power up (Green LED on EVB board RJ45)                                             |
| 11      | GND        | Ground                                                                                                                |
| 12      | GPIO[2]    | Ethernet LED, light when the Ethernet is connected, blink when data is in transmission (Yellow LED on EVB board RJ45) |
| 13      | GPIO[3]    | Factory default                                                                                                       |
| 14      | VDD2P0     | Ethernet 2.0&nbsp;V                                                                                                   |
| 15      | PERX_P     | Differential in, positive differential input from bandpass filter                                                     |
| 16      | PERX_N     | Differential in, negative differential input from bandpass filter                                                     |
| 17      | GND        | Ground                                                                                                                |
| 18      | PETX_P     | Differential out, positive differential output of the TX PGA                                                          |
| 19      | PETX_N     | Differential out, negative differential output of the TX PGA                                                          |
| 20      | 3.3&nbsp;V | 3.3&nbsp;V working voltage                                                                                            |


#### Electrical Characteristics

| Parameter       | Min  | Typical | Max  | Unit |
|-----------------|------|---------|------|------|
| Working voltage | 3.15 | 3.3     | 3.45 | V    |
| Working current | -    | 700     | -    | mA   |

#### Mechanical Characteristics

#### Schematic Diagram

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/5.connector-pin-map.png"
width="60%"
caption="Connector pin map"
/>

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/6.ethernet-port-diagram.png"
width="60%"
caption="Ethernet port diagram"
/>

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/7.signal-tx-and-rx-diagram.png"
width="60%"
caption="Signal Tx and Rx diagram"
/>

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/8.led-diagram.png"
width="60%"
caption="LED diagram"
/>

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/9.reset-and-power-regulator-diagram.png"
width="60%"
caption="Reset and power regulator diagram"
/>

#### Installation Guide

##### Assembly

The LX200V20 module is connected to the EVB via the pin connector. Simply slide the pins of the module in the connector of the board. Pin 1 is on the right side of the module and pin 20 on the left.

<rk-img
src="/assets/images/wislink-plc/lx200v20/datasheet/10.assembly.png"
width="60%"
caption="Assembly"
/>

:::tip 📝 NOTE

1. RX+ and RX-, TX+ and Tx-, PERX_P and PERX_N, PETX_P and PETX_N are all the differential available signals. Follow the differential signal rules when designing your hardware.

2. The width of RX+ and RX-, TX+ and TX- should be no less than 20&nbsp;mm. The length of the lines must not be more than 15&nbsp;cm.

:::