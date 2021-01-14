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

**RAK811 Breakout Board** is an easy to use, compact and low power long-range LoRa technology with wireless transceiver capabilities. It is based on RAK811 stamp module attached to a breakout board on Xbee form factor with standard 2.54&nbsp;mm headers. 

The RAK811 Breakout Board complies with Class A & C of LoRaWAN 1.0.2 specification. Additionally, it supports LoRa Point to Point (P2P) communications which helps you in implementing their own private LoRa wireless applications. You can configure the mode and operation of the module using AT commands via UART interface. RAK811 board also offers low power features which is very suitable for battery-powered applications.

### Features

- Based on **Semtech SX1276**.
- **LoRaWAN 1.0.2** specification compliant.
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, AS920 and AS923.
- LoRaWAN Activation by OTAA/ABP.
- LoRa Point to Point (P2P) communication.
- Integrates both **SMA** and **iPEX** antenna connectors.
- Xbee form factor with standard 2.54&nbsp;mm headers.
- Easy to use AT Command Set via UART interface with configurable baud rate.
- Maximum output power 100&nbsp;mW (20&nbsp;dBm), adjustable from 5 to 20&nbsp;dBm.
- High sensitivity at -148&nbsp;dBm, enabling extremely long range connectivity.
- Long-range - greater than 15&nbsp;km with optimized antenna.
- Low power consumption: 11&nbsp;μA on on standby.
- Multi-channel, dual data buffer (256&nbsp;bytes each).
- LoRa/FSK/GFSK/OOK modulation, bidirectional two-way communication.
- Long battery life for battery-powered applications.
- LoRa technology is capable of demodulating 20&nbsp;dB below noise level which significantly improves immunity to interference when combined with integrated forward error correction.
- **Operating temperature**: -30°&nbsp;C ~ 85°&nbsp;C (industrial grade)
- **Storage temperature**: -40°&nbsp;C ~ 85°&nbsp;C (non-condensing)

## Specifications

This section covers the hardware and software specifications of RAK811 Breakout Board. All discussion presents both versions: RAK811(L) and RAK811(H).

### Overview

The **RAK811 Breakout Board** is shown in Figure 1 with its corresponding board dimension of **42&nbsp;mm x 25&nbsp;mm**. This board weighs at about **0.2&nbsp;kg**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/2.dimensions.png"
  width="45%"
  caption="RAK811 Breakout Board Dimensions"
/>

### Hardware

The hardware specification discusses the interfaces, pinouts and its corresponding functions and diagrams. It also covers the parameters of the both RAK811 Breakout Board in terms of RF, electrical, mechanical, and operating characteristics. 

#### Interfaces

| Module                 | Interfaces   |
| ---------------------- | ------------ |
| RAK811 Breakout Board  | UART1, GPIOs |

#### Pin Definition

The RAK811 Breakout Board supports two different frequency variation: **High Radio Frequency** and **Low Radio frequency**.

##### High Radio Frequency (RAK811(H))

The high radio frequency hardware support the regions of EU868, US915, AU915, KR920, AS923, and IN865.

###### High RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/4.board-pinout-for-rak811-high-rf.png"
  width="50%"
  caption="Board Pinout for RAK811 Breakout High RF"
/>

###### High RF Pin Definition

| **Pin No.** | **Name**  | **Type** | **Description**                       |
| ----------- | --------- | -------- | ------------------------------------- |
| 1           | VCC 3.3&nbsp;V | P        | Main Power Voltage Source Input       |
| 2           | PA9/UART1_TX| O        | UART1 Interface (AT Commands and FW Update)                       |
| 3           | PA10/UART1_RX | I        | UART1 Interface (AT Commands and FW Update)                       |
| 4           | PB12/ADC      | I/O      | GPIO and ADC                            |
| 5           | RST       | I        | Reset Trigger Input, Low Active       |
| 6           | PB3       | I/O      | GPIO only                  |
| 7           | PB5       | I/O      | GPIO only                  |
| 8           | PA15      | I/O      | GPIO only                  |
| 9           | BOOT0     |          | Boot mode GPIO enable pin - high active |
| 10          | GND       |          | Ground connections                    |
| 11          | PA0/ADC       | I/O        | GPIO and ADC                               |
| 12          | PA1/ADC       | I/O        | GPIO and ADC                               |
| 13          | PA14      |          | SWD Debug Pin (SWCLK)                 |
| 14          | PA13     |          | SWD Debug Pin (SWDIO)                |
| 15          | PB4       | I/O        | GPIO only                   |
| 16          | PB15/ADC      | I/O      | GPIO and ADC                              |
| 17          | PA2/ADC       | I/O      | GPIO and ADC                                |
| 18          | PA8       | I/O      | GPIO only                  |
| 19          | PA12      | I/O        | GPIO only                 |
| 20          | PB14/ADC      | I/O      | GPIO and ADC                               |

##### Low Radio Frequency (RAK811(L))

The low radio frequency is applicable to bandwidth of regions EU433 and CN470.

###### Low RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/datasheet/3.board-pinout-for-rak811-low-rf.png"
  width="50%"
  caption="Board Pinout for RAK811 Breakout Low RF"
/>

###### Low RF Pin Definition

| **Pin No.** | **Name**  | **Type** | **Description**                       |
| ----------- | --------- | -------- | ------------------------------------- |
| 1           | VCC 3.3&nbsp;V | P        | Main Power Voltage Source Input       |
| 2           | PA9/UART1_TX | O        | UART1 Interface (AT Commands and FW Update)                      |
| 3           | PA10/UART1_RX | I        | UART1 Interface (AT Commands and FW Update)                      |
| 4           | PB12/ADC      | I/O      | GPIO and ADC                              |
| 5           | RST       | I        | Reset Trigger Input, Low Active       |
| 6           | PA3/ADC       | I/O      | GPIO and ADC                  |
| 7           | PB5       | I/O      | GPIO only                  |
| 8           | PA12      | I/O      | GPIO only                  |
| 9           | PB4       |          | Boot mode GPIO enable pin - high active |
| 10          | GND       |          | Ground connections                    |
| 11          | PA0/ADC       | I/O        | GPIO and ADC                               |
| 12          | PA1/ADC       | I/O        | GPIO and ADC                                |
| 13          | PA14      |          | SWD Debug Pin (SWCLK)                |
| 14          | PA13     |          | SWD Debug Pin SWDIO                 |
| 15          | PA11      | I/O        | GPIO only                  |
| 16          | PB15/ADC      | I/O      | GPIO and ADC                              |
| 17          | PA2/ADC       | I/O      | GPIO and ADC                                |
| 18          | PB13/ADC      | I/O      | GPIO and ADC                   |
| 19          | PA12/ADC      | I/O        | GPIO and ADC                |
| 20          | PB14/ADC      | I/O      | GPIO and ADC                               |

#### RF Characteristics

##### Operating Frequencies

| Module    | Region        | Frequency |
| --------- | ------------- | --------- |
| RAK811(L) | Europe        | EU433     |
|           | China         | CN470     |
| RAK811(H) | Europe        | EU868     |
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
| Current Consumption | TX Power   | 30 (@&nbsp;14&nbsp;dBm) |         |         | mA   |
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
| Operating Temperature | -30     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |


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
| RAK811(L) | V3.0.0.14.L | [Download](https://downloads.rakwireless.com/LoRa/RAK811-BreakoutBoard/Firmware/) |
| RAK811(H) | V3.0.0.14.H | [Download](https://downloads.rakwireless.com/LoRa/RAK811-BreakoutBoard/Firmware/) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />