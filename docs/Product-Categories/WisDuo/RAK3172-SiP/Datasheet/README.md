---
rak_desc: Provides comprehensive information about your RAK3172-SiP to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak3172-sip/overview/RAK3172_SiP_home.png
prev: ../AT-Command-Manual/
tags:
  - datasheet
  - wisduo
  - RAK3172-SiP
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK3172-SiP/Certification/RAK3172-SiP_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK3172-SiP/Certification/RAK3172-SiP_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK3172-SiP/Certification/RAK3172-SiP_IC_Certification.pdf]
  - [UKCA, https://downloads.rakwireless.com/LoRa/RAK3172-SiP/Certification/RAK3172-SiP_UKCA_Certification.pdf]
---

# RAK3172-SiP WisDuo LPWAN SiP Datasheet

## Overview

### Description

RAK3172-SiP is a low-power long-range transceiver based on STM32WLE5JC SoC in a System-in-Package form factor. It provides an easy-to-use, small-size, low-power solution for long-range wireless data applications. This module complies with Class A, B, & C of LoRaWAN 1.0.3 specifications. It can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Actility, etc. It also supports LoRa Point-to-Point (P2P) communication mode which helps you in implementing your own customized long-range LoRa network quickly.

You can configure the mode and operation of the RAK3172-SiP using AT commands via a UART interface or create custom firmware using RUI3 API. RAK3172-SiP is very small in size and offers low-power features that are very suitable for battery-powered applications.

### Features

- Based on **STM32WLE5JC**
- System-in-Package form factor
- RUI3 API compatible
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: IN865, EU868, AU915, US915, KR920, RU864, and AS923
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy-to-use AT Command set via UART interface
- Long-range - up to 15&nbsp;km with optimized antenna
- ARM Cortex-M4 32-bit 
- 256&nbsp;kbytes flash memory with ECC
- 64&nbsp;kbytes RAM
- Ultra-low power consumption of 1.69&nbsp;μA in sleep mode
- **Supply voltage**: 2.0&nbsp;V ~ 3.6&nbsp;V
- **Temperature range**: -40°&nbsp;C ~ 85°&nbsp;C
- **Size**: 12&nbsp;mm x 12&nbsp;mm x 1.22&nbsp;mm
- **Package**: LGA73 type

## Specifications

This section covers the hardware and software specifications of RAK3172-SiP. Also, it includes the block diagram and the updated firmware link of the RAK3172-SiP WisDuo module.

### Overview

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak3172-sip/datasheet/rak3172-block-diagram.svg"
  width="85%"
  caption="RAK3172-SiP system block diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the rf, electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK3172-SiP WisDuo LPWAN SiP Module.

:::tip 📝 NOTE:

For the reference application schematic of RAK3172-SiP with minimum components requirements, refer to the [RAK3272-SiP Breakout Board Datasheet.](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Datasheet/#hardware)

:::

#### Interfaces

| Module  | Interfaces |
| ------- | ---------- |
| RAK3172-SiP | UART2 (Default for AT Command), UART1 |

#### Pin Definition

You can check the pin definitions on the table and illustration, as shown in **Figure 2**.

<rk-img
  src="/assets/images/wisduo/rak3172-sip/datasheet/rak3172-sip-pins.png"
  width="45%"
  caption="RAK3172-SiP top view pin diagram"
/>


| **Pin No.** | **Name**      | **Type** | **Description**                                                   |
| ----------- | ------------- | -------- | ----------------------------------------------------------------- |
| 1           | PA13          | I        | Reserved - SWD debug pin (SWDIO)                                  |
| 2           | PA14          | O        | Reserved - SWD debug pin (SWCLK)                                  |
| 3           | VDD           |          | VDD                                                               |
| 4           | VBAT          |          | VDD (For RTC)                                                     |
| 5           | PC13          | I/O      | GPIO                                                              |
| 6           | VREF+         |          | Input reference voltage for ADC                                   |
| 7           | VDDA          |          | External power supply for the analog sections (ADC Converter)     |
| 8           | PA15          | I/O      | GPIO                                                              |
| 9           | PB15          | I/O      | GPIO                                                              |
| 10          | VFBSMPS       |          | DC-DC switching power feedback                                    |
| 11          | VDDMPS        |          | DC-DC switching power input                                       |
| 12          | GND           |          | Ground                                                            |
| 13          | VLXSMPS       |          | DC-DC switching output                                            |
| 14          | PB3           | I/O      | GPIO or ADC0                                                      |
| 15          | PB4           | I/O      | GPIO or ADC1                                                      |
| 16          | PB5           | I/O      | GPIO                                                              |
| 17          | PB6/UART1_TX  | I/O       | GPIO or UART1_TX                                                  |
| 18          | PB7/UART1_RX  | I/O        | GPIO or UART1_RX                                                  |
| 19          | PB8           | I/O      | GPIO                                                              |
| 20          | PB9           | I/O      | GPIO                                                              |
| 21          | PC0           | I/O      | GPIO                                                              |
| 22          | PC1           | I/O      | GPIO                                                              |
| 23          | PC2           | I/O      | GPIO                                                              |
| 24          | PC3           | I/O      | GPIO                                                              |
| 25          | PC4           | I/O      | GPIO                                                              |
| 26          | PC5           | I/O      | GPIO                                                              |
| 27          | PC6           | I/O      | GPIO                                                              | 
| 28          | GND           |          | Ground                                                            |
| 29          | PA2/UART2_TX  | O        | Reserved - UART2/LPUART1 Interface (AT Commands and FW Update)    |
| 30          | PA3/UART2_RX  | I        | Reserved - UART2/LPUART1 Interface (AT Commands and FW Update)    |
| 31          | PA4           | I/O      | GPIO or SPI1 (SPI1_CS)                                            |
| 32          | PA5           | I/O      | GPIO or SPI1 (SPI1_CLK)                                           |
| 33          | PA6           | I/O      | GPIO or SPI1 (SPI1_MISO)                                          |
| 34          | PA7           | I/O      | GPIO or SPI1 (SPI1_MOSI)                                          |
| 35          | GND           |          | Ground                                                            |
| 36          | GND           |          | Ground                                                            |
| 37          | RF_OUT        | O        | RF Output                                                         |
| 38          | GND           |          | Ground                                                            |
| 39          | GND           |          | Ground                                                            |
| 40          | NC            |          | Not connected                                                     |
| 41          | NC            |          | Not connected                                                     |
| 42          | NC            |          | Not connected                                                     |
| 43          | BOOT 0        | I        | Boot Mode Select pin (Activates STM32WL UART Bootloader when HIGH)|
| 44          | NRST          | I        | MCU Reset (NRST)                                                  |
| 45          | NC            |          | Not connected                                                     |
| 46          | GND           |          | Ground                                                            |
| 47          | GND           |          | Ground                                                            |
| 48          | PB11          | I/O      | GPIO                                                              |
| 49          | PB10          | I/O      | GPIO                                                              |
| 50          | PA9           | I/O      | GPIO or I2C_SCL                                                   |
| 51          | PA8           | I/O      | GPIO                                                              |
| 52          | GND           |          | Ground                                                            |
| 53          | VDDPA         |          | RF PA power input                                                 |
| 54          | VDDRF         |          | RF Segment power input                                            |
| 55          | VDD           |          | VDD                                                               |
| 56          | GND           |          | Ground                                                            |
| 57          | PB1           | I/O      | GPIO                                                              |
| 58          | PB2           | I/O      | GPIO                                                              |
| 59          | PB12          | I/O      | GPIO                                                              |
| 60          | PB13          | I/O      | GPIO                                                              |
| 61          | PB14          | I/O      | GPIO                                                              |
| 62          | PA10          | I/O      | GPIO or I2C_SDA                                                   |
| 63          | PA11          | I/O      | GPIO                                                              |
| 64          | PA12          | I/O      | GPIO                                                              |
| 65-73       | GND           |          | Ground                                                            |


#### RF Characteristics

The RAK3172-SiP supports the frequency of operation from 863 to 930&nbsp;Mhz.

##### Operating Frequencies

| Module      | Region        | Frequency     |
| ----------- | ------------- | ------------- |
| RAK3172-SiP | Europe        | EU868         |
|             | North America | US915         |
|             | Australia     | AU915         |
|             | Korea         | KR920         |
|             | Asia          | AS923         |
|             | India         | IN865         |
|             | Russia        | RU864         |

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Parameter     | Minimum | Typical | Maximum | Unit      |
| ------------- | ------- | ------- | ------- | --------- |
| VDD and GPIO  | -0.3V   |         | 3.9     | Volts (V) |


##### Operating Voltage

| Parameter                            | Minimum | Typical | Maximum | Unit      |
| ------------------------------------ | ------- | ------- | ------- | --------- |
| VCC                                  | 1.8     |         | 3.6     | Volts (V) |
| VDDA (ADC or COMP used)              | 1.71    |         | 3.6     | Volts (V) |
| VDDA (VREFBUF used)                  | 2.4     |         | 3.6     | Volts (V) |
| VDDA (ADC, COMP or VREFBUF not used) | 0       |         | 3.6     | Volts (V) |
| VBAT                                 | 1.55    |         | 3.6     | Volts (V) |
| VDDSMPS                              | 1.8     |         | 3.6     | Volts (V) |
| VDDRF                                | 1.8     |         | 3.6     | Volts (V) |
| VDDPA                                | 1.8     |         | 3.6     | Volts (V) |
| VREF+                                | 2.0     |         | VDDA    | Volts (V) |
| VREF+ (VDDA < 2V)                    | VDDA    |         | VDDA    | Volts (V) |


##### Operating Current

| Feature           | Condition | Minimum                              | Typical | Maximum | Unit |
| ----------------- | --------- | ------------------------------------ | ------- | ------- | ---- |
| Operating Current | TX Mode   | 87 (@&nbsp;20&nbsp;dBm 868&nbsp;Mhz) |         |         | mA   |
|                   | RX Mode   | 5.22                                 |         |         | mA   |

##### Sleep Current

| Feature             | Condition | Minimum   | Typical (3.3V) | Maximum | Unit |
| ------------------- | --------- | --------- | -------------- | ------- | ---- |
| Current Consumption | EU868     |           | 1.69           |         | μA   |
|                     | US915     |           | -              |         | μA   |

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak3172-sip/datasheet/RAK3172-SIP-Mechanical.png"
  width="95%"
  caption="RAK3172-SiP mechanical dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak3172-sip/datasheet/RAK3172-SIP-Pad.png"
  width="65%"
  caption="RAK3172-SiP layout"
/>

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -40     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |

##### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak3172-sip/datasheet/reflow.jpg"
  width="60%"
  caption="Reflow profile for RAK3172-SiP"
/>

Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150&nbsp;℃): **1~2.5&nbsp;℃/sec**
- Soaking Time (T2) (110~190&nbsp;℃): **90~120&nbsp;sec**
- Peak Temperature (G): **240~245&nbsp;℃**
- Reflow Time (T3) (240-245&nbsp;℃): **50~70&nbsp;sec**
- Ramp-up Rate (B): **1-3&nbsp;℃/sec**
- Ramp-down Rate (C): **1~5&nbsp;℃/sec**

### Software

Download the latest RAK3172-SiP WisDuo LPWAN SiP firmware provided below.

- The **bin file** contains the application code only and you need the RAK DFU Tool to upload this file to RAK3172-SiP via UART.
- The **hex file** contains both the bootloader and the application code. You need to [use STM32CubeProgrammer to upload](https://docs.rakwireless.com/Knowledge-Hub/Learn/STM32Cube-Programmer-Guide/) this.

RAK3172-SiP uses UART2 serial pins to upload the latest firmware.

#### Firmware / OS

| Model              | Version | Source                                                                                          |
| ------------------ | ------- | ----------------------------------------------------------------------------------------------- |
| RAK3172-SiP (.bin) | V3.2.0  | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272-SiP_latest.bin)             |
| RAK3172-SiP (.hex) | V3.2.0  | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272-SiP_latest_final.hex)       |
