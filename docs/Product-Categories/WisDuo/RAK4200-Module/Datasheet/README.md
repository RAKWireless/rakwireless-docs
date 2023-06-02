---
rak_desc: Provides comprehensive information about your RAK4200 Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4200-module/overview/RAK4200-Module.png
tags:
  - datasheet
  - wisduo
  - RAK4200
prev: ../Low-Level-Development/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200_FCC_Certification.zip]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_ISED_Certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_REACH_Report_.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_RoHS_Report.pdf]
---

# RAK4200 WisDuo LPWAN Module Datasheet

## Overview

### Description

**RAK4200 WisDuo LPWAN Module** includes an STM32L071 MCU and an SX1276 LoRa chip. It has Ultra-Low Power Consumption of 9.40&nbsp;uA (down to 1.08&nbsp;μA @ 2.0&nbsp;V) in sleep mode and high LoRa output power up to 19&nbsp;dBm max in work mode.

The module complies with LoRaWAN 1.0.2 specification. It also supports LoRa P2P Point-to-Point communications. The module is suitable for various applications that require long-range data acquisition and low power consumption.

### Features

* LoRa module for Smart City, Smart Agriculture, Smart Industry
* **Compact Form Factor**: 15 x 15.5 x 2.5&nbsp;mm
* 20 Pin Stamp Pad for PCB SMT mounting
* **I/O ports**: UART/I2C/GPIO/ADC
* **Temperature range**: -40°&nbsp;C to +85°&nbsp;C
* **Supply voltage**: 2.0 ~ 3.6&nbsp;V
* **Frequency range**: 863–870&nbsp;MHz (EU) / 902–928&nbsp;MHz (US), ISM and SRD systems
* Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;kHz Bandwidth
* Ultra-Low Power Consumption of 9.40&nbsp;μA (down to 1.08&nbsp;μA @ 2.0&nbsp;V) in sleep mode
* **Core**: ARM 32-bit Cortex – M0+ with MPU
* Up to 128&nbsp;KB flash memory with ECC
* 20&nbsp;KB RAM
* 6&nbsp;KB of data EEPROM with ECC


## Specifications

### Overview

The overview covers the RAK4200 WisDuo board overview where the front and back views are presented. It includes also the block diagram that shows the external interfaces of the RAK4200 WisDuo.

#### Board Overview



<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/back_view.png"
  width="60%"
  caption="RAK4200 WisDuo LPWAN Module Front and Back View"
/>

#### Block Diagram



<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/block-diagram.png"
  width="60%"
  caption="RAK4200 WisDuo Block Diagram"
/>

### Hardware

The hardware specification is categorized into five parts. It covers the pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and its standard values in terms of electrical and mechanical.

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/pinout-for-rak4200.svg"
  width="65%"
  caption="Pinout for RAK4200"
/>

:::warning ⚠️ WARNING
When using `RF` pin for antenna connection and not the IPEX connector variant, make sure there is no ground plane (in all layers of the PCB) under the RF trace path to eliminate the possible effects of unwanted stray capacitance which can cause degradation of the RF signal levels.
:::

| Pin | Name     | I/O | Description                                     |
| --- | -------- | --- | ----------------------------------------------- |
| 1   | UART2_RX | I   | UART2 Interface (AT Commands)  (STM32L071 PA3)  |
| 2   | UART2_TX | O   | UART2 Interface (AT Commands)  (STM32L071 PA2)  |
| 3   | UART2_DE | I/O | GPIO (STM32L071 PA1)                            |
| 4   | UART1_TX | O   | UART1 Interface (AT Commands and FW Update) (STM32L071 PA9)  |
| 5   | UART1_RX | I   | UART1 Interface (AT Commands and FW Update) (STM32L071 PA10) |
| 6   | UART1_DE | I/O | General GPIO or UART(Reserved) (STM32L071 PA12) |
| 7   | SWDIO    | I/O | Programming (STM32L071 PA13)                    |
| 8   | SWCLK    | I/O | Programming (STM32L071 PA14)                    |
| 9   | I2C_SCL  | I/O | I2C interface (STM32L071 PB6)                   |
| 10  | I2C_SDA  | I/O | I2C interface (STM32L071 PB7)                   |
| 11  | GND      | -   | Ground                                          |
| 12  | RF       | I/O | RF port (only available on **RAK4200 No-IPEX connector variant**)|
| 13  | GND      | -   | Ground                                          |
| 14  | GND      | -   | Ground                                          |
| 15  | SPI_CLK  | I/O | Reserved PA5                                    |
| 16  | SPI_MISO | I/O | Reserved PA6                                    |
| 17  | SPI_MOSI | I/O | Reserved PA7                                    |
| 18  | MCU_NRST | I/O | MCU reset (STM32L071 NRST)                      |
| 19  | GND      | -   | Ground                                          |
| 20  | VDD      | -   | DC 3V3                                          |

##### LoRa Transceiver IC Connection to RAK4200 Internal STM32

| **LoRa IC Pin** | **STM32 GPIO** |
| :-------------: | :------------: |
|      DIO0       |      PB0       |
|      DIO1       |      PB1       |
|      DIO2       |      PB5       |
|      DIO3       |      PB4       |
|    SPI1_CLK     |      PA5       |
|    SPI1_MISO    |      PA6       |
|    SPI1_MOSI    |      PA7       |
|    SPI1_NSS     |      PA4       |
|     NRESET      |      PA0       |
|      VCTL1      |      PA11      |
|      VCTL2      |      PA8       |

##### LoRa Transceiver Mode

| **LoRa Mode** | **VCTL1 GPIO** | **VCTL2 GPIO** |
| :------------ | :------------: | :------------: |
| TX mode       |       H        |       L        |
| RX mode       |       L        |       H        |

:::tip 📝 Logic Level
H level (1.8 - 5.0&nbsp;V)<br>
L level (0&nbsp;V)
:::

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels shown in the table below. The frequency parameter is easy to configure as you go through the device configuration setup. RAK4200 has two different types based on its frequency: RAK4200(L) for low frequency and RAK4200(H) for high frequency.

|     **Module**      |  **Region**   | **Frequency (MHz)** |
| :-----------------: | :-----------: | :-----------------: |
| **RAK4200** **(L)** |    Europe     |        EU433        |
|                     |     China     |        CN470        |
| **RAK4200** **(H)** |    Indian     |        IN865        |
|                     |    Europe     |        EU868        |
|                     | North America |        US915        |
|                     |   Australia   |        AU915        |
|                     |     Korea     |        KR920        |
|                     |     Asia      |        AS923        |

#### Electrical Characteristics

##### Electrical Consumption

Several current consumption ratings are provided below for a detailed RAK4200 WisDuo LPWAN Module usage. Refer to the values provided for specific simulations and calculations.

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.0     | 3.3     | 3.6    | Volts (V) |

##### Laboratory Testing

The following figures shown below are the average current consumptions based on the different test cases.

**Materials:**

- Power Consumption Meter
- RAK4200 WisDuo LPWAN Module

**LoRa Packet Sending**

The RAK4200 WisDuo LPWAN Module takes **53.155&nbsp;ms** to send a LoRa packet which consumes **68.4&nbsp;mA** of current.

- **Sending Time**: 53.155&nbsp;ms
- **Current consumption**: 68.4&nbsp;mA

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/oscilloscope-screen-capture-of-lora®-packet-sending.jpg"
  width="75%"
  caption="Oscilloscope Screen Capture of LoRa Packet Sending"
/>

**LoRa Packet Receiving**

The RAK4200 WisDuo LPWAN Module takes **46.179&nbsp;ms** to receive a LoRa packet which consumes **17.1&nbsp;mA** of current.

- **Receiving Time**: 46.179&nbsp;ms
- **Current consumption**: 17.1&nbsp;mA

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/oscilloscope-screen-capture-of-lora®-packet-receiving.jpg"
  width="75%"
  caption="Oscilloscope Screen Capture of LoRa Packet Receiving"
/>

##### Operating Current

| Feature           | Condition | Minimum | Typical | Maximum | Unit |
| ----------------- | --------- | ------- | ------- | ------- | ---- |
| Operating Current | TX Power  | 68.4    |         |         | mA   |
|                   | RX Mode   | 17.1    |         |         | mA   |

##### Sleep Current

| Feature             | Condition | Minimum (2.0V) | Typical (3.3V) | Maximum | Unit |
| ------------------- | --------- | -------------- | -------------- | ------- | ---- |
| Current Consumption | EU868     | 1.08           | 8.66           |         | μA   |
|                     | US915     | 1.14           | 9.40           |         | μA   |
|                     | CN470     | 1.13           | 7.88           |         | μA   |

##### Schematic

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/schematic.png"
  width="100%"
  caption="RAK4200 Module Schematic Diagram"
/>


<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/rak4200-reference-ckt.png"
  width="100%"
  caption="RAK4200 Module Reference Circuit"
/>

#### Mechanical Characteristics



<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/mechanical-dimensions.jpg"
  width="55%"
  caption="Mechanical Dimensions"
/>

#### Recommended Reflow Profile

- MSL Rating : Class 3



<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/recommended-reflow-profile.jpg"
  width="60%"
  caption="Recommended Reflow Profile"
/>

##### Standard Conditions for Reflow Soldering:

- **Pre-heating Ramp** (A) (Initial temperature: 150&nbsp;℃): 1-2.5&nbsp;℃/sec;
- **Soaking Time** (T2) (150&nbsp;℃~180&nbsp;℃): 60sec-100sec;
- **Peak Temperature**(G): 230~250&nbsp;℃;
- **Reflow Time** (T3) (>220&nbsp;℃): 30~60 sec;
- **Ramp-up Rate** (B): 0~2.5&nbsp;℃/ sec;
- **Ramp-down Rate** (C): 1~3&nbsp;℃/ sec.

### Software

Download the latest firmware of the RAK4200 WisDuo LPWAN Module as provided in the table below.

:::tip 📝 NOTE:

The **bin file** contains the application code only, and you need the RAK DFU Tool to upload this file to the module.

The **hex file** contains both the bootloader and the application code. You need to use STM32CubeProgrammer to upload this.

:::

#### Firmware

| Model Source | Source                                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------- |
| RAK4200      | [Download](https://downloads.rakwireless.com/LoRa/RAK4200/Firmware/RAK4200_Latest_Firmware.zip) |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />