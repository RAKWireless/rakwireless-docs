---
rak_desc: Provides comprehensive information about your RAK3272S Breakout Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak3272s-breakout-board/overview/RAK3272S_Breakout_home.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisduo
  - RAK3272S Breakout Board
---

# RAK3272S Breakout Board Datasheet

## Overview

### Description

RAK3272S Breakout Board is specifically designed to allow easy access to the pins on the board in order to simplify development and testing. The breakout board footprint is based on the XBee form factor and its main purpose is to allow the RAK3172 stamp module pins to be transferred to 2.54&nbsp;mm headers.

The board itself has the RAK3172 at its core, integrating a STM32WLE5CC chip, It has Ultra-Low Power Consumption of 1.69&nbsp;uA in sleep mode 

This module complies with Class A, B & C of LoRaWAN 1.0.3 specifications. It also supports LoRa Point-to-Point (P2P) communication mode which helps you in implementing your own customized long-range LoRa network quickly.

### Features

- Based on RAK3172
- I/O ports: UART/I2C/GPIO/SPI
- Serial Wire Debug (SWD) interface
- Module size: 25.4 x 32.3&nbsp;mm
- Supply Voltage: 2.0&nbsp;V ~ 3.6&nbsp;V
- Temperature Range: -40&nbsp;°C ~ 85&nbsp;°C


## Specifications

### Overview

The top view of the RAK3272S Breakout Board is shown in Figure 1.


<rk-img
  src="/assets/images/wisduo/rak3272s-breakout-board/datasheet/overview.svg"
  width="50%"
  caption="RAK3272S Top and Bottom View"
/>

### Hardware

The hardware specification is categorized into five parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters of the board, including the tabular data of the functionalities and standard values.


#### Interface 

##### SWD Programing Interface

When programming via a ST-Link tool, it is required to have all of the following four pins connected to your ST-Link tool:

- 3V3
- SWDIO
- SWCLK
- GND

##### UART Interface

This board has two UART interfaces:

- UART1 (can allow AT commands if configured via RUI3 Serial Port Mode)
- UART2/LPUART1 (allows AT Commands and FW Update)

##### I2C and SPI Interface 

Only one I2C and SPI interface of RAK3272S:

- I2C2
- SPI1

##### RF Interface

**J3** is soldered to the antenna connector. Depending on your choice, it can come with either SMA or IPEX style connector. Make sure to select the one you need when ordering.

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak3272s-breakout-board/datasheet/pinout.png"
  width="70%"
  caption="RAK3272S Breakout Board Pinout"
/>

The tables below show the pin definition of the RAK3272S Breakout Board:

##### J5 Pin Definitions

| Pin | Name     | Description                         | STM32WLE5CC Pin |
| --- | -------- | ----------------------------------- | --------------- |
| 1   | SPI_MOSI | GPIO and SPI (MOSI)                 | PA7             |
| 2   | SPI_MISO | GPIO and SPI (MISO)                 | PA6             |
| 3   | SPI_CLK  | GPIO and SPI (CLK)                  | PA5             |
| 4   | SPI_CS   | GPIO and SPI (NSS)                  | PA4             |
| 5   | UART1_RX | UART1 Interface                     | PB7             |
| 6   | UART1_TX | UART1 Interface                     | PB6             |
| 7   | GND      | Ground                              | -               |
| 8   | BOOT0    | Boot0 mode enable pin - high active | -               |
| 9   | 3V3      | Power Supply                        | -               |

##### J4 Pin Definitions 

| Pin | Name     | Description                                         | STM32WLE5CC Pin |
| --- | -------- | --------------------------------------------------- | --------------- |
| 1   | I2C2_SDA | I2C2 interface                                      | PA11            |
| 2   | I2C2_SCL | I2C2 interface                                      | PA12            |
| 3   | RST      | MCU Reset                                           | -               |
| 4   | GND      | Ground                                              | -               |
| 5   | SWDIO    | SWD debug pin (SWDIO)                               | PA13            |
| 6   | SWCLK    | SWD debug pin (SWCLK)                               | PA14            |
| 7   | UART2_TX | UART2/LPUART1 Interface (AT Commands and FW Update) | PA2             |
| 8   | UART2_RX | UART2/LPUART1 Interface (AT Commands and FW Update) | PA3             |
| 9   | 3V3      | *Power Supply (check warning)                       | -               |

:::warning ⚠️ WARNING

- The J4 pin definition table is applicable to RAK3272S VerC. If you have **RAK3272S VerB**, **pin 9** is **not 3V3** but **connected to PA8**. 

:::

#### RF Characteristics

The RAK3272S module supports the LoRaWAN bands shown in table below. When buying a RAK3272S module, pay attention to specify the correct core module RAK3372PL or RAK3372 for your region. In which L for low-frequency regions, no suffix(RAK3172P) means High-frequency.

| Module    | Core Module | Region        | Frequency |
| --------- | ----------- | ------------- | --------- |
| RAK3272SL | RAK3172PL   | Europe        | EU433     |
|           | RAK3172PL   | China         | CN470     |
| RAK3272S  | RAK3172P    | Europe        | EU868     |
|           | RAK3172P    | North America | US915     |
|           | RAK3172P    | Australia     | AU915     |
|           | RAK3172P    | Korea         | KR920     |
|           | RAK3172P    | Asia          | AS923-1/2/3/4     |
|           | RAK3272P    | India         | IN865     |
|           | RAK3272P    | Russia        | RU864     |

#### Electrical Characteristics

##### Power Consumption

| Feature           | Condition | Minimum                         | Typical | Maximum | Unit |
| ----------------- | --------- | ------------------------------- | ------- | ------- | ---- |
| Operating Current | TX Mode   | 87(@ 20&nbsp;dBm 8680&nbsp;MHz) | -       | -       | mA   |
|                   | RX Mode   | 5.22                            | -       | -       | mA   |
| Sleep Current     | EU868     | -                               | 1.69    |         | uA   |
|                   | CN470     | -                               | 1.69    |         | uA   |

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit |
| ------- | ------- | ------- | ------- | ---- |
| VCC     | 2.0     | 3.3     | 3.6     | V    |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak3272s-breakout-board/datasheet/rak3272s_schematic.png"
  width="80%"
  caption="RAK3272S Schematic Diagram"
/>

#### Mechanical Characteristics

Figure 4 show RAK3272S board dimensions.

<rk-img
  src="/assets/images/wisduo/rak3272s-breakout-board/datasheet/dimensions.png"
  width="50%"
  caption="RAK3272S Mechanical Dimensions"
/>


### Software

Download the latest firmware of the RAK3272S Breakout Board provided below. RAK3272SL and RAK3272S use the same firmware, and it will automatically detect the variant of the module being used.

The **bin file** contains the application code only and you need the RAK DFU Tool to upload this file to the module.

The **hex file** contains both the bootloader and the application code. You need to use STM32CubeProgrammer to upload this.

RAK3272S uses UART2 serial pins to upload the latest firmware.

#### Firmware / OS

| Model   | Version | Source                                                                                          |
| ------- | ------- | ----------------------------------------------------------------------------------------------- |
| RAK3272S | RUI3 (default baudrate = 115200)   | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3172-E_latest.bin) |
| RAK3272S | **DEPRECATED** V1.0.4 (default baudrate = 9600) | [Download](https://downloads.rakwireless.com/LoRa/RAK3172/Firmware/RAK3172_Latest_Firmware.zip) |

:::warning ⚠️ WARNING
There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.

If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::
