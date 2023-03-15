---
rak_desc: Provides comprehensive information about your RAK11300 Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak11300-module/overview/RAK11300-Module.png
prev: ../AT-Command-Manual/
tags:
  - datasheet
  - wisduo
  - RAK11300

---

# RAK11300 WisDuo LPWAN Module Datasheet

## Overview

### Description

RAK11300 WisDuo LPWAN Module is based on the Raspberry Pi RP2040 chip and SX1262 RF transceiver. It provides an easy-to-use, small-size, low-power solution for long-range wireless data applications. This module complies with Class A & C of LoRaWAN 1.0.2 specifications. It can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Helium, etc.

### Features

- Based on Raspberry Pi **RP2040** and Semtech **SX1262**
- **LoRaWAN 1.0.2** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN Activation by OTAA/ABP
- Long-range - greater than 15&nbsp;km with optimized antenna
- ARM Cortex-M0+ Dual Core
- 133Mhz CPU Clock
- 246&nbsp;kbytes RAM
- **Supply Voltage**: 2.0&nbsp;V ~ 3.6&nbsp;V
- **Temperature Range**: -20°&nbsp;C ~ 85°&nbsp;C

## Specifications

This section covers the hardware and software specifications of RAK11300. It also includes the block diagram of the module showing its interfaces.

### Overview

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak11300-module/datasheet/block-diagram.png"
  width="50%"
  caption="RAK11300 System Block Diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the interfaces of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the RF, electrical, mechanical, and environmental parameters of the RAK11300 WisDuo LPWAN Module.

#### Interfaces

| Module   | Interfaces |
| -------- | ---------- |
| RAK11300 | UART, USB  |

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak11300-module/datasheet/rak11300_pin.png"
  width="60%"
  caption="RAK11300 Module Pinout"
/>

##### Pin Description

The table below shows the pin definition and description of RAK11300:

| Type | Description    |
| ---- | -------------- |
| PI   | Power Input    |
| PO   | Power Output   |
| DI   | Digital Input  |
| DO   | Digital Output |
| IO   | Bidirectional  |
| AI   | Analog Input   |
| AO   | Analog Output  |


##### Power Supply

| Pin Name   | Pin No.                | Type   | Description                               |
| ---------- | ---------------------- | ------ | ----------------------------------------- |
| VBAT_SX    | 21                     | PI     | Supply for the LoRa IC                    |
| VBAT_SX_IO | 22                     | PI     | Supply for the Digital I/O interface pins |
| DVDD       | 45                     | PI     | Supply for the MCU                        |
| AVDD       | 46                     | PI     | ADC Reference Voltage                     |
| GND        | 14, 17, 23, 37, 40, 44 | Ground | Ground                                    |

##### I2C Interface
| Pin Name | Pin No. | Type | Description      |
| -------- | ------- | ---- | ---------------- |
| I2C1_SDA | 4       | IO   | I2C serial data  |
| I2C1_SCL | 5       | DO   | I2C serial clock |
| I2C2_SDA | 24      | IO   | I2C serial data  |
| I2C2_SCL | 25      | DO   | I2C serial clock |

##### USB Interface

| Pin Name | Pin No. | Type | Description              |
| -------- | ------- | ---- | ------------------------ |
| USB_DM   | 2       | IO   | USB differential data(-) |
| USB_DP   | 3       | IO   | USB differential data(+) |

##### UART Interface

| Pin Name | Pin No. | Type | Description    |
| -------- | ------- | ---- | -------------- |
| UART1_RX | 9       | DI   | UART1 receive  |
| UART1_TX | 10      | DO   | UART1 transmit |
| UART2_RX | 6       | DI   | UART2 receive  |
| UART2_TX | 7       | DO   | UART2 transmit |

##### SPI Interface

| Pin Name  | Pin No. | Type | Description                    |
| --------- | ------- | ---- | ------------------------------ |
| SPI0_SCK  | 30      | DO   | SPI clock                      |
| SPI0_MISO | 33      | DI   | SPI master input, slave output |
| SPI0_MOSI | 34      | DO   | SPI master output. slave input |
| SPI0_CSN  | 35      | DO   | SPI chip select                |

##### SWD Interface

| Pin Name | Pin No. | Type  | Description                                   |
| -------- | ------- | ----- | --------------------------------------------- |
| SWCLK    | 19      | Debug | SWD clock input for debugging and programming |
| SWDIO    | 20      | Debug | SWD I/O for debugging and programming         |

##### RESET

| Pin Name | Pin No. | Type | Description                  |
| -------- | ------- | ---- | ---------------------------- |
| RESET    | 18      | DI   | Reset the module, Active Low |

##### Antenna Interface

| Pin Name | Pin No. | Type | Description            | Comment                                                                                                          |
| -------- | ------- | ---- | ---------------------- | ---------------------------------------------------------------------------------------------------------------- |
| RF_LoRa  | 38      | IO   | LoRa antenna interface | 50&nbsp;Ω Impedance<br/>This pin can't be used on modules with an IPEX connector. If unused, keep this pin open. |

##### ADC and GPIO

| Pin Name         | Pin No. | Type        | Description                                                       |
| ---------------- | ------- | ----------- | ----------------------------------------------------------------- |
| GPIO7            | 11      | IO          | General-purpose input/output                                      |
| GPIO8            | 12      | IO          | General-purpose input/output                                      |
| GPIO9            | 13      | IO          | General-purpose input/output                                      |
| GPIO22           | 27      | IO          | General-purpose input/output                                      |
| GPIO23           | 28      | IO          | General-purpose input/output                                      |
| GPIO24           | 29      | IO          | General-purpose input/output                                      |
| GPIO27           | 41      | IO          | General-purpose input/output                                      |
| GPIO26<br/> ADC1 | 43      | IO<br/> AI  | General-purpose input/output <br/> General-purpose ADC interface  |
| GPIO28<br/> ADC0 | 44      | IO <br/> AI | General-purpose input/output <br/>  General-purpose ADC interface |

#### RF Characteristics

The RAK11300 supports two different frequency variations: RAK11300(L) Low Radio Frequency and RAK11300(H) High Radio Frequency.

##### Operating Frequencies

| Module      | Region    | Frequency |
| ----------- | --------- | --------- |
| RAK11300(L) | Europe    | EU433     |
|             | China     | CN470     |
| RAK11300(H) | Europe    | EU868     |
|             | America   | US915     |
|             | Australia | AU915     |
|             | Korea     | KR920     |
|             | Asia      | AS923     |
|             | India     | IN865     |
|             | Russia    | RU864     |

#### Electrical Characteristics

##### Recommended Operating Conditions

| **Symbol** | **Description**            | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | -------------------------- | -------- | -------- | -------- | -------- |
| VBAT_SX    | SX1262 supply voltage      | 2.0      | 3.3      | 3.7      | V        |
| VBAT_SX_IO | SX1262 supply for I/O pins | 2.0      | 3.3      | 3.7      | V        |
| DVDD       | Power supply  of MCU       | 2.0      | 3.3      | 3.6      | V        |
| AVDD       | ADC Reference Voltage      | -        | 3.3      | -        | V        |

 |

##### Absolute Maximum Ratings

| **Symbol** | **Description**               | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | ----------------------------- | -------- | -------- | -------- | -------- |
| VBAT_SX    | LoRa chip supply voltage      | -0.5     | -        | 3.9      | V        |
| VBAT_SX_IO | LoRa chip supply for I/O pins | -0.5     | -        | 3.9      | V        |
| DVDD       | Supply for the MCU            | -0.5     | -        | 3.6      |          |
| AVDD       | ADC Reference Voltage         | -0.5     | -        | 3.6      |          |
| ESD HBM    | Human Body Model              | -        | -        | 2000     | V        |
| ESD  CDM   | Charged Device Model          | -        | -        | 500      | V        |


#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak11300-module/datasheet/mechanical_dimension.png"
  width="90%"
  caption="RAK11300 Physical Dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak11300-module/datasheet/pad_layout.png"
  width="60%"
  caption="RAK11300 Layout"
/>

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -20     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -20     |         | 85      | °C   |

##### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak11300-module/datasheet/reflow.png"
  width="70%"
  caption="Reflow Profile for RAK11300"
/>

Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150&nbsp;℃): **1~2.5&nbsp;℃/sec**
- Soaking Time (T2) (150~180&nbsp;℃): **60~100&nbsp;sec**
- Peak Temperature (G): **230~250&nbsp;℃**
- Reflow Time (T3) (>220&nbsp;℃): **30~60&nbsp;sec**
- Ramp-up Rate (B): **0~2.5&nbsp;℃/sec**
- Ramp-down Rate (C): **1~3&nbsp;℃/sec**

### Software

Download the latest firmware of the RAK11300 WisDuo LPWAN Module provided below.

#### Firmware / OS
| Model    | Version | Source                                                                                            |
| -------- | ------- | ------------------------------------------------------------------------------------------------- |
| RAK11300 | V1.0.0  | [Download](https://downloads.rakwireless.com/LoRa/RAK11300/Firmware/RAK11300_Latest_Firmware.zip) |
