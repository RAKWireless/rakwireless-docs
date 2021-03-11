---
prev: ../Low-Level-Development/
tags:
  - datasheet
  - wisduo
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%20CE%20Certification.rar]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0FCC%20Certification.rar]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0ROSH%20Certification.rar]
  - [MIC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811%C2%A0MIC%20Certification.rar]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK811/Certification_Report/RAK811_KCC%C2%A0%28Certificate%29.pdf]

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

The RAK811 Low-Power Long Range LoRa Technology Transceiver module provides an easy to use, small size, and low-power solution for long-range wireless data applications.

This module complies with Class A & C of LoRaWAN 1.0.2 specifications that can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Actility, etc. It also supports LoRa Point to Point (P2P) communication mode which help you in implementing your own customized long-range LoRa network quickly.

The RAK811 module is integrated with Semtech’s SX1276 and STM32. You can configure the mode and operation of the module using AT commands via a UART interface. Also, it offers low power features which is very suitable for battery-powered applications.

### Features

- Based on **Semtech SX1276**
- **LoRaWAN 1.0.2** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, AS920, and AS923
- LoRaWAN Activation by OTAA/ABP
- LoRa Point to Point (P2P) communication
- Easy to use AT Command Set via UART interface with configurable baud rate
- Maximum output power 100&nbsp;mW (20&nbsp;dBm), adjustable from 5~20&nbsp;dBm
- High sensitivity at -148&nbsp;dBm, enabling extremely long-range connectivity
- Long-range - greater than 15&nbsp;km with optimized antenna
- Low power consumption: 11&nbsp;μA on standby
- Ultra-Low Power Consumption of 11.9&nbsp;μA (down to 1.11&nbsp;μA @ 2.1&nbsp;V) in sleep mode
- Multi-channel, dual data buffer (256&nbsp;bytes each)
- LoRa/FSK/GFSK/OOK modulation, bidirectional two-way communication
- Long battery life for battery-powered applications
- LoRa technology is capable of demodulating 20&nbsp;dB below noise level which significantly improves immunity to interference when combined with integrated forward error
- **Operating temperature**: -30°&nbsp;C ~ 85°&nbsp;C (industrial grade)
- **Storage temperature**: -40°&nbsp;C ~ 85°&nbsp;C (non-condensing)

## Specifications

This section covers the hardware and software specifications of RAK811. All discussion presents both versions: RAK811(L) and RAK811(H). Also, it includes the block diagram and the update firmare link of the RAK811 WisDuo module.

### Overview

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/interfaces/block-diagram.png"
  width="70%"
  caption="RAK811 System Block Diagram"
/>

### Hardware

The hardware specification discusses the interfaces, pinouts and its corresponding functions and diagrams. It also covers the parameters of the both RAK811 Modules in terms of RF, electrical, mechanical, and operating characteristics. 

#### Interfaces

| Module | Interfaces   |
| ------ | ------------ |
| RAK811 | UART1, UART3, GPIOs, ADC|

#### Pin Definition

The RAK811 supports two different frequency variation: Low Radio Frequency and High Radio Frequency.

##### 1. Low Radio Frequency Version (RAK811(L))

Low radio frequency hardware supports bandwidth in the regions of EU433 and CN470.

###### Low RF Version Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/pin-definition/rak811_lf.png"
  width="60%"
  caption="Board Pinout for RAK811 Low RF"
/>

###### Low RF Version Pin Definition

| **Pin No.** | **Name**      | **Type** | **Description**                       |
| ----------- | ------------- | -------- | ------------------------------------- |
| 1           | GND           |          | Ground connections                    |
| 2           | PB12/ADC      | I/O      | GPIO and ADC                          |
| 3           | PB14/ADC      | I/O      | GPIO and ADC                          |
| 4           | PB15/ADC      | I/O      | GPIO and ADC                          |
| 5           | PB13/ADC      | I/O      | GPIO and ADC                          |
| 6           | PA9/UART1_TX  | O        | UART1 Interface (AT Commands and FW Update) |
| 7           | PA10/UART1_RX | I        | UART1 Interface (AT Commands and FW Update) |
| 8           | PA12          | I/O      | GPIO only                             |
| 9           | PA11          | I/O      | GPIO only                             |
| 10          | PA13          | I/O      | SWD debug pin (SWDIO)                 |
| 11          | VCC           | P        | Main power voltage source input       |
| 12          | GND           |          | Ground connections                    |
| 13          | PA14          | I/O      | SWD debug pin (SWCLK)                 |
| 14          | PA15          | I/O      | GPIO only                             |
| 15          | PA3           | I/O      | GPIO and ADC                          |
| 16          | PB5           | I/O      | GPIO only                             |
| 17          | BOOT0         | I        | Boot0 mode enable pin - high active   |
| 18          | PB6/I2C1_SCL  | I/O      | GPIO and I2C (SCL)                    |
| 19          | PB7/I2C1_SDA  | I/O      | GPIO and I2C (SDA)                    |
| 20          | PA2/ADC       | I/O      | GPIO and ADC                          |
| 21          | GND           |          | Ground connections                    |
| 22          | PA1/ADC       | I/O      | GPIO and ADC                          |
| 23          | PA0/ADC       | I/O      | GPIO and ADC                          |
| 24          | RST           | I        | Reset trigger input - low active      |
| 25          | PB10/UART3_TX          | I/O      | UART3 Interface (AT Commands) |
| 26          | PB11/UART3_RX          | I/O      | UART3 Interface (AT Commands) |
| 27          | BOOT1         | I        | Boot1 mode enable pin                  |
| 28          | GND           |          | Ground connections                    |
| 29          | GND           |          | Ground connections                    |
| 30          | GND           |          | Ground connections                    |
| 31          | GND           |          | Ground connections                    |
| 32          | GND           |          | Ground connections                    |
| 33          | RF_OUT        | I/O      | RF I/O port                           |
| 34          | GND           |          | Ground connections                    |

##### LoRa Transceiver IC Connection to RAK811(L) Internal STM32

| **LoRa IC Pin** | **STM32 GPIO**|
|:---------------:|:-------------:| 
| SX_D0           | PB4           | 
| SX_D1           | PB1           | 
| SX_D2           | PB9           | 
| SX_D3           | PH0           | 
| SX_D4           | PC13          | 
| SPI_SCLK        | PA5           | 
| SPI_MISO        | PA6           | 
| SPI_MOSI        | PA7           | 
| SPI_NSS         | PB0           |
| SX_NRESET       | PA8           |
| SX_GPIO0        | PH1           |
| SX_RF_LF	      | PB8		        |
| SX_RF_RX	      | PB3   		    |
| SX_RF_PA	      | PA4   		    |

##### RF Switch Control Logic Table

|**SX_RF_LF**|**SX_RF_RX**|**SX_RF_PA**|**Condition**|
|------------|------------|------------|-------------|
|      0     |      1     |     0      |  RX mode    |
|      0     |      0     |     1      |  TX mode    |


##### 2. High Radio Frequency Version (RAK811(H))

High radio frequency hardware supports the regions of EU868, US915, AU915, KR920, AS923, IN865.

###### High RF Version Pin Outline

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/pin-definition/rak811_hf.png"
  width="60%"
  caption="Board Pinout for RAK811 High RF"
/>

###### High RF Version Pin Definition

| **Pin No.** | **Name**      | **Type** | **Description**                       |
| ----------- | ------------- | -------- | ------------------------------------- |
| 1           | GND           |          | Ground connections                    |
| 2           | PB12/ADC      | I/O      | GPIO and ADC                          |
| 3           | PB14/ADC      | I/O      | GPIO and ADC                          |
| 4           | PB15/ADC      | I/O      | GPIO and ADC                          |
| 5           | PA8           | I/O      | GPIO only                             |
| 6           | PA9/UART1_TX  | O        | UART1 Interface (AT Commands and FW Update)|
| 7           | PA10/UART1_RX | I        | UART1 Interface (AT Commands and FW Update)|
| 8           | PA12          | I/O      | GPIO only                             |
| 9           | PB4           | I/O      | GPIO only                             |
| 10          | PA13          | I/O      | SWD debug pin (SWDIO)                 |
| 11          | VCC           | P        | Main power voltage source input       |
| 12          | GND           |          | Ground connections                    |
| 13          | PA14          | I/O      | SWD debug pin (SWCLK)                 |
| 14          | PA15          | I/O      | GPIO only                             |
| 15          | PB3           | I/O      | GPIO only                             |
| 16          | PB5           | I/O      | GPIO only                             |
| 17          | BOOT0         | I        | Boot mode GPIO enable pin - high active |
| 18          | PB8/I2C1_SCL  | I/O      | GPIO and I2C (SCL)                    |
| 19          | PB9/I2C1_SDA  | I/O      | GPIO and I2C (SDA)                    |
| 20          | PA2/ADC       | I/O      | GPIO and ADC                          |
| 21          | GND           |          | Ground connections                    |
| 22          | PA1/ADC       | I/O      | GPIO and ADC                          |
| 23          | PA0/ADC       | I/O      | GPIO and ADC                          |
| 24          | RST           | I        | Reset trigger input - low active      |
| 25          | PB10/UART3_TX          | I/O      | UART3 Interface (AT Commands) |
| 26          | PB11/UART3_RX          | I/O      | UART3 Interface (AT Commands) |
| 27          | PB2           | I        | Boot1 mode enable pin                 |
| 28          | GND           |          | Ground connections                    |
| 29          | GND           |          | Ground connections                    |
| 30          | GND           |          | Ground connections                    |
| 31          | GND           |          | Ground connections                    |
| 32          | GND           |          | Ground connections                    |
| 33          | RF_OUT        | I/O      | RF I/O port                           |
| 34          | GND           |          | Ground connections                    |

##### LoRa Transceiver IC Connection to RAK811(HF) Internal STM32


| **LoRa IC Pin** | **STM32 GPIO**|
|:---------------:|:-------------:| 
| SX_D0           | PA11          | 
| SX_D1           | PB1           | 
| SX_D2           | PA3           | 
| SX_D3           | PH0           | 
| SX_D4           | PC13          | 
| SPI_SCLK        | PA5           | 
| SPI_MISO        | PA6           | 
| SPI_MOSI        | PA7           | 
| SPI_NSS         | PB0           |
| SX_NRESET       | PB13          |
| SX_GPIO0        | PH1           |
| SX_RF_HF	      | PB7		        |
| SX_RF_RX	      | PB6   		    |
| SX_RF_PA	      | PA4   		    |


##### RF Switch Control Logic Table

|**SX_RF_HF**|**SX_RF_RX**|**SX_RF_PA**|**Condition**|
|------------|------------|------------|-------------|
|      0     |      1     |     0      |  RX mode    |
|      0     |      0     |     1      |  TX mode    |

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

##### Schematic Diagram


RAK811 supports two UARTs: UART1 (pin6-TX1, pin7-RX1) and UART3 (pin25-TX3, pin26-RX3). UART1 is used for upgrading firmware, so it is recommended that UART3 be used when connecting with external MCU. 

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/schematic-diagram/ghs8zbyhzisoqxezofnz.jpg"
  width="100%"
  caption="Reference Design"
/>

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.1     | 3.3     | 3.45    | Volts (V) |


##### Operating Current

| Feature             | Condition  | Minimum                 | Typical | Maximum | Unit |
| ------------------- | ---------- | ----------------------- | ------- | ------- | ---- |
| Operating Current   | TX Power   | 30 (@&nbsp;14&nbsp;dBm) |         |         | mA   |
|                     | RX Mode    | 5.5                     |         |         | mA   |


##### Sleep Current

| Feature                   | Condition  | Minimum (2.1V) | Typical (3.3V) | Maximum | Unit |
| ------------------------- | ---------- | -------------- | -------------- | ------- | ---- |
| Current Consumption       | EU868      | 8.37           | 11.9           |         | μA   |
|                           | US915      | 1.11           | 11.8           |         | μA   |
|                           | CN470      | 1.65           | 3.07           |         | μA   |


#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/board-layout/ksglqsrthvgpykwcugzy.jpg"
  width="50%"
  caption="RAK811 Physical Dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak811-module/datasheet/board-layout/pad_layout.jpg"
  width="50%"
  caption="RAK811 Layout"
/>

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -30     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |

##### Reflow Profile

Referred to IPC/JEDEC standard:

- Peak Temperature : < 250&nbsp;°C
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
| RAK811(L)| V3.0.0.14.L | [Download](https://downloads.rakwireless.com/LoRa/RAK811/Firmware/)  |
| RAK811(H)| V3.0.0.14.H | [Download](https://downloads.rakwireless.com/LoRa/RAK811/Firmware/) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />