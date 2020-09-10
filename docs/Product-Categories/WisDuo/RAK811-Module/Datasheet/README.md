---
prev: ../Overview/
tags:
  - datasheet
  - wisduo
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%20CE%20Certification.rar]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0FCC%20Certification.rar]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811_KCC%C2%A0%28Certificate%29.pdf]
  - [MIC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0MIC%20Certification.rar]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0ROSH%20Certification.rar]

---

# RAK811 WisDuo LPWAN Module Datasheet


<!---
<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/overview/nwgqobrzwanalynildkc.jpg"
  width="50%"
  caption="RAK811 WisDuo LPWAN Module"
/>
--->

## Overview

### Description

RAK811 Low-Power Long Range LoRa® Technology Transceiver module provides an easy to
use, small size, low-power solution for long range wireless data transmission.

The RAK811 module complies with the latest LoRaWAN® Class A & C protocol
specifications, it is simple to access LWPA IOT platforms, such Actility etc. It also supports LoRa® Point to Point communications (P2P) , this function can help customers implement their own
private long range LoRa® network fast.

The RAK811 Module is integrated with Semtech's SX1276 and STM32L which offers user a way communicating with AT Commands through UART Interface. Users will also be able to make their projects turn into reality such as Long Range Sensor data applications, RAK811 also offers a low power feature that is suitable for battery powered applications.

### Features

- LoRaWAN® protocol supported, support global license-free ISM band, full
  certification by region.
- LoRa® Point to Point communication, Activation by OTAA/ABP.
- Easy to use, UART interface, serial port AT command, baud rate and air rate online
  change supported, simple ASCII command set.
- Maximum output power 100MW (20dBm), adjustable from 5 to 20dBm.
- High sensitivity,-148 dBm, enabling extremely long range connectivity.
- Long range - greater than 15 km.
- High capacity of up to 1 million nodes.
- Low power consumption: 11μA on on standby
- Multi-channel, dual data buffer (256bytes each).
- LoRa®/FSK/GFSK/OOK modulation, bidirectional 2 way communications.
- Long battery life - over 10 years.
- LoRa® technology is capable of demodulating 20 dB below noise level, significantly
  improving immunity to the interference when combined with integrated forward error
  correction.

## Specifications

### Overview

The overview covers only the block diagram of RAK811 WisDuo. It shows how the module works with the SX127 and STM32L that allows the module to communicate in the long-range.

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/interfaces/block-diagram.png"
  width="70%"
  caption="RAK811 System Block Diagram"
/>

### Hardware

The hardware specification if categorized into five parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It covers the parameters of the RAK811 Module in terms of electrical and mechanical. The standard operating frequencies and temperature are also presented.

#### Interfaces

| Module | Interfaces   |
| ------ | ------------ |
| RAK811 | UART1, GPIOs |

#### Pin Definition

The RAK811 supports two different frequency variation: Low Radio Frequency and High Radio frequency.

##### 1. Low Radio Frequency

The Low radio frequency is applicable to bandwidth of regions EU433 and CN470.

###### Low RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/pin-definition/abscqo1rdux6ao13hdvu.jpg"
  width="60%"
  caption="Board Pinout for RAK811 Low RF"
/>

###### Low RF Pin Definition

| **Pin No.** | **Name**      | **Type** | **Description**                       |
| ----------- | ------------- | -------- | ------------------------------------- |
| 1           | GND           |          | Ground connections                    |
| 2           | PB12/ADC      | I/O      | ADC_IN18                              |
| 3           | PB14/ADC      | I/O      | ADC_IN20                              |
| 4           | PB15/ADC      | I/O      | ADC_IN21                              |
| 5           | PB13          | I/O      | B part for GPIO port                  |
| 6           | PA9/UART1_TX  | O        | UART1 Interface                       |
| 7           | PA10/UART1_RX | I        | UART1 Interface                       |
| 8           | PA12          | O        | A part for GPIO port                  |
| 9           | PA11          | I        | A part for GPIO port                  |
| 10          | PA13          | I/O      | A part for GPIO port                  |
| 11          | VCC           | P        | Main power voltage source input       |
| 12          | GND           |          | Ground connections                    |
| 13          | PA14          | I/O      | A part for GPIO port                  |
| 14          | PA15          | I/O      | A part for GPIO port                  |
| 15          | PA3           | I/O      | A part for GPIO port                  |
| 16          | PB5           | I/O      | B part for GPIO port                  |
| 17          | BOOT0         | I        | Boot mode GPIO enable pin,high active |
| 18          | PB6/I2C_SCL   | I/O      | I2C1_SCL                              |
| 19          | PB7/I2C_SDA   | I/O      | I2C1_SDA                              |
| 20          | PA2/ADC       | I/O      | ADC_IN2                               |
| 21          | GND           |          | Ground connections                    |
| 22          | PA1/ADC       | I        | ADC_IN1                               |
| 23          | PA0/ADC       | O        | ADC_IN0                               |
| 24          | RST           | I        | Reset trigger input,low active        |
| 25          | PB10          | I/O      | B part for GPIO port                  |
| 26          | PB11          | I/O      | B part for GPIO port                  |
| 27          | PB2           | I/O      | B part for GPIO port                  |
| 28          | GND           |          | Ground connections                    |
| 29          | GND           |          | Ground connections                    |
| 30          | GND           |          | Ground connections                    |
| 31          | GND           |          | Ground connections                    |
| 32          | GND           |          | Ground connections                    |
| 33          | RF_OUT        | I/O      | RF I/O port                           |
| 34          | GND           |          | Ground connections                    |

##### 2. High Radio Frequency

High radio frequency hardware support the regions of EU868, US915, AU915, KR920, AS923, IN865.

###### High RF Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/pin-definition/ajjxkmp1ydxopp6naaoc.jpg"
  width="60%"
  caption="Board Pinout for RAK811 High RF"
/>

###### High RF Pin Definition

| **Pin No.** | **Name**      | **Type** | **Description**                       |
| ----------- | ------------- | -------- | ------------------------------------- |
| 1           | GND           |          | Ground connections                    |
| 2           | PB12/ADC      | I/O      | ADC_IN18                              |
| 3           | PB14/ADC      | I/O      | ADC_IN20                              |
| 4           | PB15/ADC      | I/O      | ADC_IN21                              |
| 5           | PA8           | I/O      | A part for GPIO port                  |
| 6           | PA9/UART1_TX  | O        | UART1 Interface                       |
| 7           | PA10/UART1_RX | I        | UART1 Interface                       |
| 8           | PA12          | O        | A part for GPIO port                  |
| 9           | PB4           | I        | B part for GPIO port                  |
| 10          | PA13          | I/O      | A part for GPIO port                  |
| 11          | VCC           | P        | Main power voltage source input       |
| 12          | GND           |          | Ground connections                    |
| 13          | PA14          | I/O      | A part for GPIO port                  |
| 14          | PA15          | I/O      | A part for GPIO port                  |
| 15          | PB3           | I/O      | B part for GPIO port                  |
| 16          | PB5           | I/O      | B part for GPIO port                  |
| 17          | BOOT0         | I        | Boot mode GPIO enable pin,high active |
| 18          | PB8/I2C_SCL   | I/O      | I2C1_SCL                              |
| 19          | PB9/I2C_SDA   | I/O      | I2C1_SDA                              |
| 20          | PA2/ADC       | I/O      | ADC_IN2                               |
| 21          | GND           |          | Ground connections                    |
| 22          | PA1/ADC       | I        | ADC_IN1                               |
| 23          | PA0/ADC       | O        | ADC_IN0                               |
| 24          | RST           | I        | Reset trigger input,low active        |
| 25          | PB10          | I/O      | B part for GPIO port                  |
| 26          | PB11          | I/O      | B part for GPIO port                  |
| 27          | PB2           | I/O      | B part for GPIO port                  |
| 28          | GND           |          | Ground connections                    |
| 29          | GND           |          | Ground connections                    |
| 30          | GND           |          | Ground connections                    |
| 31          | GND           |          | Ground connections                    |
| 32          | GND           |          | Ground connections                    |
| 33          | RF_OUT        | I/O      | RF I/O port                           |
| 34          | GND           |          | Ground connections                    |

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

##### Schematic Diagram


RAK811 supports two UARTs: UART1 (pin6, pin7) and UART3 (pin25, pin26). UART1 already be used for upgrading firmware, so it is recommended that UART3 be connected with external MCU.

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/schematic-diagram/ghs8zbyhzisoqxezofnz.jpg"
  width="100%"
  caption="Reference Design"
/>

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
  src="/assets/images/wisduo/rak811-module/datasheet/board-layout/ksglqsrthvgpykwcugzy.jpg"
  width="50%"
  caption="RAK811 Physical Dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/board-layout/u4axv5szljjuw195olgx.jpg"
  width="50%"
  caption="RAK811 Layout"
/>

#### Operating Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -40     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |

##### Reflow Profile

Referred to IPC/JEDEC standard.

- Peak Temperature : < 250 °C
- Number of Times : ≤ 2 times

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/reflow-profile/tpe7u1eaanobuih9gq7x.jpg"
  width="70%"
  caption="Reflow Profile for RAK811"
/>

### Software

Download the latest firmware of the RAK811 WisDuo LPWAN Module — both in low and high frequency — provided in the table below.


#### Firmware / OS

| Model     | Version      | Source                                                                                           |
| --------- | ------------ | ------------------------------------------------------------------------------------------------ |
| RAK811-LF | V3.0.0.13.T3 | [Download](https://downloads.rakwireless.com/LoRa/RAK811/Firmware/RAK811_L_Latest_Firmware.zip)  |
| RAK811-HF | V3.0.0.13.T3 | [Download](https://downloads.rakwireless.com/LoRa/RAK811/Firmware/RAK811_H_Latest_Firmware.zip) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />