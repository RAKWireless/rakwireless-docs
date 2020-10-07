---
tags:
  - datasheet
  - wisduo
prev: ../Quickstart/
next: ../AT-Command-Manual/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%20CE%20Certification.rar]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0FCC%20Certification.rar]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811_KCC%C2%A0%28Certificate%29.pdf]
  - [MIC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0MIC%20Certification.rar]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0ROSH%20Certification.rar]


---

# RAK811 Breakout Board Datasheet

<!---
<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/1.rak811-breakout.png"
  width="50%"
  caption="RAK811 Breakout Board"
/>
--->

## Overview

### Description

**RAK811 Breakout Board** is an easy to use, compact and low power long range LoRa technology with wireless transceiver capabilities. A combination of RAK811 chipset and RAK811 Breakout Board with Semtech SX1276 at its core which takes advantage of all LoRa features.

The RAK811 Breakout Board complies with the latest LoRaWAN Class A & C protocol specifications with fully supported LoRaWAN 1.0.2 stack in its firmware. It has a simple and straightforward setup and can quickly access LWPA IOT platforms. Additionally, it supports LoRa Point to Point (P2P) communications which helps customers in implementing their own private LoRa network.

The node can work in a number of modes, with different data rates and read data from the attached sensors with the help of its serial AT commands.

This board is a complete solution in developing your LoRaWAN protocol techniques. A few of its application includes: Automated Meters Reading, Home and Building Automation, Wireless Alarm and Security Systems, Industrial Monitoring and Control and Long Range Irrigation Systems.

### Features

- Based on **Semtech SX1276**
- Full **LoRaWAN 1.0.2** stack support
- **Supported bands**: (EU433, CN470, IN865, EU868, AU915, US915, KR920, AS920 and AS923)
- **Output power**: 5－20dBm adjustable
- **Max sensitivity**: -130dBm @ 0.3kps
- Open source firmware with built-in AT command functionality for easy setup with UART interface
- Theoretical max range of 2km in Urban and 15km in open areas
- Integrates both **SMA** and **iPEX** antenna connectors
- **Operating temperature**: -40°C ~ 85°C (industrial grade)
- **Storage temperature**: -40°C ~ 85°C (non-condensing)
- Supports **P2P** communication
- Activation available through OTAA/ABP
- **Long battery life** - over 10 years
- Low power consumption: 11μA on on standby
## Specifications

### Overview

The **RAK811 Breakout Board** is shown in Figure 1 with its corresponding board dimension of **42mm x 25mm**. This board weighs at about **0.2kg**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/2.dimensions.png"
  width="45%"
  caption="RAK811 Breakout Board Dimensions"
/>

### Hardware

The hardware specification is categorized into five parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK811 Breakout Board.

#### Interfaces

| Module                 | Interfaces   |
| ---------------------- | ------------ |
| RAK811 Breakout Board | UART1, GPIOs |

#### Pin Definition

The RAK811 supports two different frequency variation: **High Radio Frequency** and **Low Radio frequency**.

##### High Radio Frequency

The high radio frequency hardware support the regions of EU868, US915, AU915, KR920, AS923, IN865.

###### High RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/3.board-pinout-for-rak811-low-rf.png"
  width="50%"
  caption="Board Pinout for RAK811 Breakout High RF"
/>

###### High RF Pin Definition

| **Pin No.** | **Name**  | **Type** | **Description**                       |
| ----------- | --------- | -------- | ------------------------------------- |
| 1           | LoRa 3.3V | P        | Main Power Voltage Source Input       |
| 2           | UART1_TXD | O        | UART1 Interface                       |
| 3           | UART1_RXD | I        | UART1 Interface                       |
| 4           | PB12      | I/O      | ADC_IN18                              |
| 5           | RST       | I        | Reset Trigger Input, Low Active       |
| 6           | PB3       | I/O      | B part for GPIO port                  |
| 7           | PB5       | I/O      | B part for GPIO port                  |
| 8           | PA15      | I/O      | A part for GPIO port                  |
| 9           | BOOT0     |          | Boot mode GPIO enable pin,high active |
| 10          | GND       |          | Ground connections                    |
| 11          | PA0       | O        | ADC_IN0                               |
| 12          | PA1       | I        | ADC_IN1                               |
| 13          | SWCLK     |          | Serial Wire Debug Pin                 |
| 14          | SWDIO     |          | Serial Wire Debug Pin                 |
| 15          | PB4       | I        | B part for GPIO port                  |
| 16          | PB15      | I/O      | ADC_IN21                              |
| 17          | PA2       | I/O      | ADC_IN2                               |
| 18          | PA8       | I/O      | A part for GPIO port                  |
| 19          | PA12      | O        | A part for GPIO port                  |
| 20          | PB14      | I/O      | ADC_IN20                              |

##### Low Radio Frequency

The Low radio frequency is applicable to bandwidth of regions EU433 and CN470.

###### Low RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/4.board-pinout-for-rak811-high-rf.png"
  width="50%"
  caption="Board Pinout for RAK811 Breakout Low RF"
/>

###### Low RF Pin Definition

| **Pin No.** | **Name**  | **Type** | **Description**                       |
| ----------- | --------- | -------- | ------------------------------------- |
| 1           | LoRa 3.3V | P        | Main Power Voltage Source Input       |
| 2           | UART1_TXD | O        | UART1 Interface                       |
| 3           | UART1_RXD | I        | UART1 Interface                       |
| 4           | PB12      | I/O      | ADC_IN18                              |
| 5           | RST       | I        | Reset Trigger Input, Low Active       |
| 6           | PA3       | I/O      | A part for GPIO port                  |
| 7           | PB5       | I/O      | B part for GPIO port                  |
| 8           | PA12      | I/O      | A part for GPIO port                  |
| 9           | PB4       |          | Boot mode GPIO enable pin,high active |
| 10          | GND       |          | Ground connections                    |
| 11          | PA0       | O        | ADC_IN0                               |
| 12          | PA1       | I        | ADC_IN1                               |
| 13          | SWCLK     |          | Serial Wire Debug Pin                 |
| 14          | SWDIO     |          | Serial Wire Debug Pin                 |
| 15          | PA11      | I        | A part for GPIO port                  |
| 16          | PB15      | I/O      | ADC_IN21                              |
| 17          | PA2       | I/O      | ADC_IN2                               |
| 18          | PB13      | I/O      | A part for GPIO port                  |
| 19          | PA12      | O        | A part for GPIO port                  |
| 20          | PB14      | I/O      | ADC_IN20                              |

#### RF Characteristics

##### Operating Frequencies

| Module    | Region        | Frequency |
| --------- | ------------- | --------- |
| RAK811-LF | Europe        | EU433     |
|           | China         | CN470     |
| RAK811-HF | Europe        | EU868     |
|           | North America | US915     |
|           | Australia     | AU915     |
|           | Korea         | KR920     |
|           | Asia          | AS923     |
|           | India         | IN865     |

| Feature        | Condition | Minimum | Typical | Maximum | Unit |
| -------------- | --------- | ------- | ------- | ------- | ---- |
| Transmit       | TX Power  |         | 14      | 20      | dBm  |
| RX Sensitivity | RSSI      | -130    |         |         | dBm  |
|                | SNR       | -15     |         |         | dB   |

#### Electrical Characteristics

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 3.15    | 3.3     | 3.45    | Volts (V) |

##### Current Consumption

| Feature             | Condition  | Minimum     | Typical | Maximum | Unit |
| ------------------- | ---------- | ----------- | ------- | ------- | ---- |
| Current Consumption | TX Power   | 30 (14 dBm) |         |         | mA   |
|                     | RX Mode    | 5.5         |         |         | mA   |
|                     | Sleep Mode | 7.2         |         |         | uA   |

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/7.rak811-physical-dimension.jpg"
  width="55%"
  caption="RAK811 Physical Dimension"
/>

<!-- ##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/8.rak811-layout.jpg"
  width="75%"
  caption="RAK811 Layout"
/> -->

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -40     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |

##### Reflow Profile

Referred to IPC/JEDEC standard:

- **Peak Temperature** : < 250 °C
- **Number of Times** : ≤ 2 times

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/9.reflow-profile-for-rak811.jpg"
  width="65%"
  caption="Reflow Profile for RAK811"
/>

#### Schematic Diagram


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/5.schematic-diagram-for-rak811.jpg"
  width="100%"
  caption="RAK811 Schematic Diagram"
/>


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/6.reference-design.jpg"
  width="100%"
  caption="Reference Design"
/>

### Software

Download the latest firmware of the RAK811 Breakout Board — both in low and high frequency — provided in the table below.

#### Firmware / OS

| Model     | Version      | Source                                                                                                        |
| --------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| RAK811-LF | V3.0.0.13.T3 | [Download](https://downloads.rakwireless.com/LoRa/RAK811-BreakoutBoard/Firmware/RAK811_L_Latest_Firmware.zip) |
| RAK811-HF | V3.0.0.13.T3 | [Download](https://downloads.rakwireless.com/LoRa/RAK811-BreakoutBoard/Firmware/RAK811_H_Latest_Firmware.zip) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />