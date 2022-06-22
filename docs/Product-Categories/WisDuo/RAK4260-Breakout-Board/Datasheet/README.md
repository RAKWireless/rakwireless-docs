---
rak_desc: Provides comprehensive information about your RAK4260 Breakout Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4260-breakout-board/quickstart/main/RAK4260_Breakout_home.png
tags:
  - datasheet
  - wisduo
  - RAK4260 Breakout Board
prev: ../Quickstart/
---

# RAK4260 Breakout Board Datasheet

<!--
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260-breakout.jpg"
  width="50%"
  caption="RAK4260 WisDuo LPWAN Breakout Module"
/>
-->

## Overview

### Description

The **RAK4260 Breakout Board** is specifically designed to allow easy excess to the pins on the board in order to simplify development and testing. The breakout board utilized is of an **Xbee form factor** and its main purpose is to allow the RAK4260 stamp module form factor pinout to be transferred to 2.54&nbsp;mm headers. This makes it more convenient for a developer to debug their solution.

The board itself has the RAK4260 at its core, which is a module that utilizes the **ATSAMR34J18B SIP**. This high level of integration allows for outstanding performance: 860&nbsp;nA in sleep mode and LoRa TX Power of up to 20&nbsp;dBm.

A notable addition to this Breakout Board is the **ATECC608A Cryptographic co-processor** with secure hardware-based key storage. This is what makes this board different (compared to the RAK4200 and RAK4600), adding another level of security in order to future-proof your platform.

The board complies with LoRaWAN 1.0.2 protocols. It also supports Lora® Point-to-Point communication.

The low-power, long-range LoRa communication capabilities of the board make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).


### Features

- LoRa module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/SPI/ADC**
- Frequency range: 863–923&nbsp;MHz (entire LoRa high band spectrum)
- Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;kHz Bandwidth
- LoRa Tx power up to **20&nbsp;dBm**
- Ultra-Low Power Consumption **860&nbsp;nA in sleep mode**
- Core: **ARM 32-bit Cortex – M0+** with MPU
- Up to 256&nbsp;KB flash memory with ECC
- 32&nbsp;KB RAM
- 6&nbsp;KB of data EEPROM with ECC
- **ATECC608A** cryptographic core
- Supply voltage: **2.0&nbsp;V ~ 3.6&nbsp;V**
- Temperature range: **-40&nbsp;°C to +85&nbsp;°C**

## Specifications

### Overview

The RAK4260 Breakout Board is shown in Figures 1 and 2 that display the top and back view of the board, respectively.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260b-top-view.jpg"
  width="25%"
  caption="RAK4260 Breakout Board Top View"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260b-bottom-view.jpg"
  width="25%"
  caption="RAK4260 Breakout Board Bottom View"
/>

### Hardware

The hardware specification is categorized into five parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the RF and electrical parameters that include the tabular data of the functionalities and standard values of the RAK4260 Breakout Board.


#### Interfaces

##### SWD Programming Interface

When programming via a DAPLink tool, it is required to have all of the following four (4) pins connected to your DAPLink tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**


::: tip 📝 NOTE
For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs.
:::

##### UART Port

There are two UART interfaces on the RAK4200 Breakout Board:

- **UART1** – the default interface
- **UART3** – reserved, can also act as GPIOs.

##### I2C Interface

**I2C_SCL** and **I2C_SDA** are connected to the ATECC608A crypto chip for the purpose of developing cryptographic applications: network end-point key management and exchange small message and PII data encryption, secure boot and protected download, ecosystem control, and anti-cloning.

##### RF Interface

**J4** is soldered to the antenna connector. Depending on your choice it can come with either SMA or IPEX style connector. Make sure to select the one you need when ordering.

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/pinout.svg"
  width="65%"
  caption="RAK4260 Breakout Board Pinout"
/>

The tables below show the pin definition of the RAK4260 Breakout Board:

##### J5 Pin Definitions

| Pin | Name     | I/O | Description                     | Alternate Functions                   |
| --- | -------- | --- | ------------------------------- | ------------------------------------- |
| 1   | UART3_RX | I   | UART3_RX (ATSAMR34J18B PA18)    | EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3     |
| 2   | UART3_TX | O   | UART3_TX (ATSAMR34J18B PA19)    | EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3     |
| 3   | GPIO     | I/O | GPIO (ATSAMR34J18B PA06)        | EIC/RSTC/ADC/PTC/OPAMP/TC/CCL/SERCOM0 |
| 4   | GPIO     | I/O | GPIO (ATSAMR34J18B PA07)        | EIC/RSTC/ADC/OPAMP/TC/CCL/SERCOM0     |
| 5   | GPIO     | I/O | GPIO (ATSAMR34J18B PA08)        | ADC/PTC/TC/CCL/SERCOM0/SERCOM2        |
| 6   | GPIO     | I/O | GPIO (ATSAMR34J18B PA09)        | EIC/ADC/PTC/TC/CCL/SERCOM0/SERCOM2    |
| 7   | SWDIO    | I/O | Programming (ATSAMR34J18B PA30) | -                                     |
| 8   | SWCLK    | I/O | Programming (ATSAMR34J18B PA31) | -                                     |

##### J6 Pin Definitions

| Pin | Name     | I/O | Description                       | Alternate Functions                        |
| --- | -------- | --- | --------------------------------- | ------------------------------------------ |
| 1   | UART1_TX | O   | UART1_RX (ATSAMR34J18B PA04)      | EIC/RSTC/VREFB/ADC/AC/OPAMP/TC/CCL/SERCOM0 |
| 2   | UART1_RX | I   | UART1_RX (ATSAMR34J18B PA05)      | EIC/RSTC/ADC/AC/OPAMP/TC/CCL/SERCOM0       |
| 3   | GPIO     | I/O | GPIO (ATSAMR34J18B PA14)          | EIC/TC/GCLK/SERCOM2/SERCOM4                |
| 4   | RST      | -   | MCU RESET                         | -                                          |
| 5   | SPI_MISO | I/O | SPI Interface (ATSAMR34J18B PB02) | EIC/ADC/SERCOM5/TC/SUPC/CCL                |
| 6   | SPI_CLK  | I/O | SPI Interface (ATSAMR34J18B PB23) | EIC/SERCOM5/TC/GCLK/CCL                    |
| 7   | SPI_CS   | I/O | SPI Interface (ATSAMR34J18B PA22) | EIC/PTC/TC/AC/CCL/SERCOM3/SERCOM5          |
| 8   | SPI_MOSI | I/O | SPI Interface (ATSAMR34J18B PA23) | EIC/PTC/TC/AC/CCL/GCLK/SERCOM3/SERCOM5     |

##### J11 Pin Definitions

| Pin | Name  | I/O | Description                       | Alternate Functions               |
| --- | ----- | --- | --------------------------------- | --------------------------------- |
| 1   | USB_N | I/O | USB Interface (ATSAMR34J18B PA24) | EIC/SERCOM3/SERCOM5/TC/USB_DM/CCL |
| 2   | USB_P | I/O | USB Interface (ATSAMR34J18B PA24) | EIC/SERCOM3/SERCOM5/TC/USB_DP/CCL |

##### J12 Pin Definitions

| Pin | Name    | I/O | Description                       | Alternate Functions                 |
| --- | ------- | --- | --------------------------------- | ----------------------------------- |
| 1   | I2C_SDA | I/O | I2C Interface (ATSAMR34J18B PA16) | EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3 |
| 2   | I2C_SCL | I/O | I2C Interface (ATSAMR34J18B PA17) | EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3 |

##### J13 Pin Definitions

| Pin | Name | I/O | Description | Alternate Functions                    |
| --- | ---- | --- | ----------- | -------------------------------------- |
| 1   | GND  |     | Ground      | GND                                    |
| 2   | VDD  |     | DC3V3       | Supply voltage 2.0&nbsp;V ~ 3.3&nbsp;V |

##### J14 Pin Definitions

| Pin | Name | I/O | Description | Alternate Functions                    |
| --- | ---- | --- | ----------- | -------------------------------------- |
| 1   | GND  |     | Ground      | GND                                    |
| 2   | VDD  |     | DC3V3       | Supply voltage 2.0&nbsp;V ~ 3.3&nbsp;V |

#### RF Characteristics

##### Operating Frequencies

The RAK4260 Breakout Board supports the following LoRa bands:

| Module         | Region                                                                               | Frequency (MHz)                                                         |
| -------------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- |
| **RAK4260(H)** | Russia <br> India <br> Europe <br> North America <br> Australia <br> Korea <br> Asia | RU864 <br> IN865 <br> EU868 <br> US915 <br> AU915 <br> KR920 <br> AS923 |

#### Electrical Characteristics

##### Power Consumption

| Item                         | Power Consumption      | Condition                  |
| ---------------------------- | ---------------------- | -------------------------- |
| Tx mode LoRa @20&nbsp;dBm    | 126.3&nbsp;mA          | PA_BOOST V=3.3&nbsp;V      |
| Tx mode LoRa @17&nbsp;dBm    | 95.6&nbsp;mA           | PA_BOOST V=3.3&nbsp;V      |
| Tx mode LoRa @14&nbsp;dBm    | 33.1&nbsp;mA (typical) | RFO_HF V=3.3&nbsp;V        |
| Rx mode LoRa @37.5&nbsp;Kbps | 13.6&nbsp;mA           | -                          |
| Sleep mode                   | 860&nbsp;nA            | Backup Mode V = 3.3&nbsp;V |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK4260 Breakout Board Schematic Diagram"
/>

RAK4260_dimension.png

#### Mechanical Characteristics

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/RAK4260_dimension.png"
  width="50%"
  caption="RAK3272S Mechanical Dimensions"
/>

### Software

Download the latest firmware of the RAK4260 Breakout Board in the table provided.

#### Firmware

| Model   | Source                                                                                          |
| ------- | ----------------------------------------------------------------------------------------------- |
| RAK4260 | [Download](https://downloads.rakwireless.com/LoRa/RAK4260/Firmware/RAK4260_Latest_Firmware.rar) |
