---
rak_desc: Provides comprehensive information about your RAK3172 Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak3172-module/overview/RAK3172_Module_home.png
prev: ../Low-Level-Development/
tags:
  - datasheet
  - wisduo
  - RAK3172
certifications:
  - [CE,https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_CE_certification.pdf ]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_FCC_certification.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_ISED_Certificate.pdf]
  - [JRL, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_JRL_certfication.pdf]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_KC_Certification.pdf]
  - [LoRaWAN, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_lora_alliance_certification.pdf]
  - [RCM, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_RCM_certification.pdf]
  - [UKCA, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_UKCA_certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_REACH_Report.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK3172/Certification/RAK3172_RoHS_Report.pdf]
---

# RAK3172 WisDuo LPWAN Module Datasheet


<!---
<rk-img
  src="/assets/images/wisduo/rak3172-module/datasheet/overview/nwgqobrzwanalynildkc.jpg"
  width="50%"
  caption="RAK3172 WisDuo LPWAN Module"
/>
--->

## Overview

### Description

RAK3172 is a low-power long-range transceiver module based on the STM32WLE5CC chip. It provides an easy-to-use, small-size, low-power solution for long-range wireless data applications. This module complies with Class A, B, & C of the LoRaWAN 1.0.3 specifications. It can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Actility, etc. It also supports LoRa Point-to-Point (P2P) communication mode, which helps you implement your own customized long-range LoRa network quickly.

You can configure the mode and operation of the module using AT commands via a UART interface. RAK3172 also offers low-power features, which are very suitable for battery-powered applications.

### Features

- Based on **STM32WLE5CCU6**
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN activation via OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Easy to use AT command set via UART interface
- Long-range - greater than 15&nbsp;km with optimized antenna
- ARM Cortex-M4 32-bit 
- 256&nbsp;kbytes flash memory with ECC
- 64&nbsp;kbytes RAM
- Ultra-low-power consumption of 1.69&nbsp;μA in sleep mode
- **Supply Voltage**: 2.0&nbsp;V ~ 3.6&nbsp;V
- **Temperature range**: -40°&nbsp;C ~ 85°&nbsp;C

:::tip 📝 NOTE:

There are two variants available for the RAK3172 Module: (1) with the CE & UKCA Certification Mark and (2) with FCC, IC & RCM Certification Mark.
:::
## Specifications

This section covers the hardware and software specifications of RAK3172. Also, it includes the block diagram and the updated firmware link of the RAK3172 WisDuo module.

### Overview

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak3172-module/datasheet/interfaces/block-diagram.svg"
  width="65%"
  caption="RAK3172 System Block Diagram"
/>

### Hardware

The hardware specification discusses the interfaces, pinouts and its corresponding functions and diagrams. It also covers the parameters of both RAK3172 modules in terms of RF, electrical, mechanical, and operating characteristics.

#### Interfaces

| Module  | Interfaces           |
| ------- | -------------------- |
| RAK3172 | UART2/LPUART1, UART1 |

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak3172-module/datasheet/pin-definition/rak3172_pin.jpg"
  width="60%"
  caption="Board Pinout for RAK3172"
/>


| **Pin No.** | **Name**      | **Type** | **Description**                                                                                   |
| ----------- | ------------- | -------- | ------------------------------------------------------------------------------------------------- |
| 1           | PA3/UART2_RX  | I        | Reserved - UART2/LPUART1 Interface (AT Commands and FW Update)                                    |
| 2           | PA2/UART2_TX  | O        | Reserved - UART2/LPUART1 Interface (AT Commands and FW Update)                                    |
| 3           | PA15/ADC5     | I/O      | GPIO and ADC                                                                                      |
| 4           | PB6/UART1_TX  | O        | UART1 Interface                                                                                   |
| 5           | PB7/UART1_RX  | I        | UART1 Interface                                                                                   |
| 6           | PA1           | I/O      | GPIO only                                                                                         |
| 7           | PA13/SWDIO    |          | Reserved - SWD debug pin (SWDIO)                                                                  |
| 8           | PA14/SWCLK    |          | Reserved - SWD debug pin (SWCLK)                                                                  |
| 9           | PA12/I2C_SCL  | I/O      | GPIO and I2C (SCL)                                                                                |
| 10          | PA11/I2C_SDA  | I/O      | GPIO and I2C (SDA)                                                                                |
| 11          | GND           |          | Ground connections                                                                                |
| 12          | RF            |          | RF Port (only available on **RAK3172 No-IPEX connector variant**)                                 |
| 13          | PA7/SPI1_MOSI | I/O      | GPIO and SPI (MOSI)                                                                               |
| 14          | PA6/SPI1_MISO | I/O      | GPIO and SPI (MISO)                                                                               |
| 15          | PA5/SPI1_CLK  | I/O      | GPIO and SPI (CLK)                                                                                |
| 16          | PA4/SPI_NSS   | I/O      | GPIO and SPI (NSS)                                                                                |
| 17          | GND           |          | Ground connections                                                                                |
| 18          | GND           |          | Ground connections                                                                                |
| 19          | PA8           | I/O      | GPIO only                                                                                         |
| 20          | PA9           | I/O      | GPIO only                                                                                         |
| 21          | BOOT0         |          | Boot0 mode enable pin - high active                                                               |
| 22          | RST           |          | MCU Reset (NRST)                                                                                  |
| 23          | GND           |          | Ground connections                                                                                |
| 24          | VDD           |          | VDD - Voltage Supply                                                                              |
| 25          | PA10/ADC4     | I/O      | GPIO and ADC                                                                                      |
| 26          | PB2/ADC3      | I/O      | GPIO and ADC                                                                                      |
| 27          | PB12          | I/O      | 10&nbsp;kΩ internally **pulled-up for high freq** variant or **pulled-down for low freq** variant |
| 28          | GND           |          | Ground connections                                                                                |
| 29          | PA0           | I/O      | GPIO only                                                                                         |
| 30          | PB5           | I/O      | GPIO only                                                                                         |
| 31          | PB4/ADC2      | I/O      | GPIO and ADC                                                                                      |
| 32          | PB3/ADC1      | I/O      | GPIO and ADC                                                                                      |

#### RF Characteristics

The RAK3172 supports two different frequency variations: RAK3172(L) Low Radio Frequency and RAK3172(H) High Radio Frequency.

##### Operating Frequencies

| Module     | Region        | Frequency     |
| ---------- | ------------- | ------------- |
| RAK3172(L) | Europe        | EU433         |
|            | China         | CN470         |
| RAK3172(H) | Europe        | EU868         |
|            | North America | US915         |
|            | Australia     | AU915         |
|            | Korea         | KR920         |
|            | Asia          | AS923-1/2/3/4 |
|            | India         | IN865         |
|            | Russia        | RU864         |

#### Electrical Characteristics

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.0     | 3.3     | 3.6     | Volts (V) |


##### Operating Current

| Feature           | Condition | Minimum                              | Typical | Maximum | Unit |
| ----------------- | --------- | ------------------------------------ | ------- | ------- | ---- |
| Operating Current | TX Mode   | 87 (@&nbsp;20&nbsp;dBm 868&nbsp;Mhz) |         |         | mA   |
|                   | RX Mode   | 5.22                                 |         |         | mA   |

##### Sleep Current

| Feature             | Condition | Minimum (2.1V) | Typical (3.3V) | Maximum | Unit |
| ------------------- | --------- | -------------- | -------------- | ------- | ---- |
| Current Consumption | EU868     |                | 1.69           |         | μA   |
|                     | US915     |                | -              |         | μA   |
|                     | CN470     |                | 1.69           |         | μA   |

:::tip 📝 NOTE:

For the reference application schematic of RAK3172 with minimum components requirements, refer to the [RAK3272S Breakout Board Datasheet.](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Datasheet/#schematic-diagram)

:::

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak3172-module/datasheet/board-layout/mechanical_dimension.jpg"
  width="45%"
  caption="RAK3172 Physical Dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak3172-module/datasheet/board-layout/pad_layout.jpg"
  width="70%"
  caption="RAK3172 Layout"
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
  src="/assets/images/wisduo/rak3172-module/datasheet/reflow-profile/reflow.jpg"
  width="50%"
  caption="Reflow Profile for RAK3172"
/>

Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150&nbsp;℃): **1~2.5&nbsp;℃/sec**
- Soaking Time (T2) (150~180&nbsp;℃): **60~100&nbsp;sec**
- Peak Temperature (G): **230~250&nbsp;℃**
- Reflow Time (T3) (>220&nbsp;℃): **30~60&nbsp;sec**
- Ramp-up Rate (B): **0~2.5&nbsp;℃/sec**
- Ramp-down Rate (C): **1~3&nbsp;℃/sec**

### Software

Download the latest RAK3172 WisDuo LPWAN Module firmware provided below. RAK3172(L) and RAK3172(H) use the same firmware and it will automatically detect the variant of the module being used.

The **bin file** contains the application code only and you need the RAK DFU Tool to upload this file to the module.

The **hex file** contains both the bootloader and the application code. You need to use STM32CubeProgrammer to upload this.

:::warning ⚠️ WARNING
Uploading the **`.hex`** file via STM32CubeProgrammer will erase all configured data on the device.
:::

RAK3172 uses UART2 serial pins to upload the latest firmware. 

:::tip 📝 NOTE:
RAK3172 should automatically go to BOOT mode when the firmware is uploaded via RAK DFU Tool or WisToolBox.

If BOOT mode is not initiated, pull to ground the RESET pin twice (or double click the reset button if available) to force BOOT mode.
:::

#### Firmware / OS

| Model          | Version                                         | Source                                                                                          |
| -------------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| RAK3172 (.bin) | RUI3 (default baudrate = 115200)                | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3172-E_latest.bin)               |
| RAK3172 (.hex) | RUI3 (default baudrate = 115200)                | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3172-E_latest_final.hex)         |
| RAK3172        | **DEPRECATED** V1.0.4 (default baudrate = 9600) | [Download](https://downloads.rakwireless.com/LoRa/RAK3172/Firmware/RAK3172_Latest_Firmware.zip) |

:::warning ⚠️ WARNING
There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.

If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
