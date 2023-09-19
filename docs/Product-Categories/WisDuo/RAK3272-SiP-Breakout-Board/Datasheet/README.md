---
rak_desc: Provides comprehensive information about your RAK3272-SiP Breakout Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak3272-sip-breakout-board/RAK3272-SiP-Breakout.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisduo
  - RAK3272-SiP Breakout Board
---

# RAK3272-SiP Breakout Board Datasheet

## Overview

### Description

The RAK3272-SiP and RAK3272LP-SiP Breakout Boards were designed to allow easy access to the [RAK3172-SiP/RAK3172LP-SiP](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-SiP/Overview) module pins to simplify development and testing. The two SiP module variants use different RF output paths to optimize current consumption depending on the application. RAK3172-SiP uses RFO_HP while RAK3172LP-SiP uses the RFO_LP on the STM32WL SoC transceiver.

The microcontroller GPIO pins are accessible via 2.54&nbsp;mm headers. The breakout board itself has a RAK3172-SiP or RAK3172LP-SiP (based on STM32WLE5JC) as its core. The STM32WLE5JC is part of the [STM32WLE5x](https://www.st.com/en/microcontrollers-microprocessors/stm32wlex.html) family. This core is based on an Arm® Cortex®‐M4 core running at 48&nbsp;MHz, and a sub-GHz radio based on Semtech SX126x.

The board complies with Class A, B, & C of LoRaWAN 1.0.3 specifications and also features LoRa Point-to-Point (P2P) communication mode, which helps you in implementing your own customized long-range LoRa network quickly. It is also RUI3 compatible which allows you to create custom firmware using RUI3 APIs.

## Features

- 32-bit Arm® Cortex®‐M4 48&nbsp;MHz MCU and sub-GHz Semtech SX126x radio
- Chipset STM32WLE5JC (single-core)
- Two variants available
    - RAK3272-SiP (uses RFO_HP)
    - RAK3272LP-SiP (uses RFO_LP)
- I/O ports: UART/I2C/GPIO/SPI
- 32&nbsp;MHz TXCO and 32&nbsp;kHz xtal
- RUI3 API compatible
- Custom firmware using Arduino via RUI3 API
- Easy to use AT Command set via UART interface
- Serial Wire Debug (SWD) interface
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: IN865, EU868, AU915, US915, KR920, RU864, and AS923
- Supply voltage: 1.8&nbsp;V ~ 3.6&nbsp;V
- Temperature range: -40°&nbsp;C ~ 85°&nbsp;C
- Size: 25.4&nbsp;mm x 41.8&nbsp;mm

## Specifications

### Overview

The top view of the RAK3272-SiP and RAK3272LP-SiP Breakout Board are shown in **Figure 1**.


<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/RAK3172LP-SiP Breakout Board.943.png"
  width="55%"
  caption="RAK3272-SiP and RAK3272LP-SiP Breakout Board top view"
/>

The bottom view of the RAK3272-SiP Breakout Board is shown in **Figure 2**.


<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/rak3272-sip_breakout-board_back.png"
  width="20%"
  caption="RAK3272-SiP Breakout Board bottom view"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the RF, electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK3272-SiP Breakout Board.


#### Interface

##### SWD Programming Interface

When programming via an [ST-Link](https://www.st.com/en/development-tools/st-link-v2.html) tool, it is required to have all of the following four pins connected to your ST-Link tool:

- 3V3
- SWDIO
- SWCLK
- GND

For more information refer to the [Upload firmware using ST-Link](#upload-firmware-using-st-link) section.


##### UART Interface

This board has two UART interfaces:

- UART2 (default interface for firmware uploading and AT Commands)
- UART1

##### RF Interface

**J2** is the RP-SMA antenna connector.


::: warning ⚠️ WARNING
Before powering the RAK3272-SiP Breakout Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

Make sure to use a LoRa antenna with RP-SMA male connector that is compatible with the chosen LoRa frequency.

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/lora-antenna.png"
  width="40%"
  caption="LoRa antenna with RP-SMA male connector"
/>

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/rak3272-sip-pinout.png"
  width="70%"
  caption="RAK3272-SiP Breakout Board J3 and J4 header"
/>

The Pin 1 of the header is highlighted in a blue rectangle.

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/rak3272-sip-pinout-back.png"
  width="50%"
  caption="RAK3272-SiP Breakout Board J5 to J8 header"
/>


##### Pin on RAK3272-SiP Connection on UART-USB Adapter

| Pin on RAK3272-SiP | Connection on UART-USB adapter |
| ------------------ | ------------------------------ |
| PA2                | RX                             |
| PA3                | TX                             |
| 3V3                | 3.3&nbsp;V                     |
| GND                | Ground                         |

<br>

The tables below show the header definitions of the RAK3272-SiP Breakout Board:


##### J3 Pin Definitions

| Pin | Name     | Description                                         | RAK3272-SiP Pin |
| --- | -------- | --------------------------------------------------- | --------------- |
| 1   | I2C2_SDA | I2C2 interface                                      | PA11            |
| 2   | I2C2_SCL | I2C2 interface                                      | PA12            |
| 3   | RST      | MCU Reset                                           | RST             |
| 4   | GND      | Ground                                              | -               |
| 5   | SWDIO    | PA13/SWD debug pin (SWDIO)                          | PA13            |
| 6   | SWCLK    | PA14/SWD debug pin (SWCLK)                          | PA14            |
| 7   | UART2_TX | UART2/LPUART1 Interface (AT Commands and FW Update) | PA2             |
| 8   | UART2_RX | UART2/LPUART1 Interface (AT Commands and FW Update) | PA3             |
| 9   | 3V3      | Power Supply                                        | -               |


##### J4 Pin Definitions

| Pin | Name      | Description                         | RAK3272-SiP Pin |
| --- | --------- | ----------------------------------- | --------------- |
| 1   | SPI1_MOSI | GPIO or SPI1 (MOSI)                 | PA7             |
| 2   | SPI1_MISO | GPIO or SPI1 (MISO)                 | PA6             |
| 3   | SPI1_CLK  | GPIO or SPI1 (CLK)                  | PA5             |
| 4   | SPI1_NSS  | GPIO or SPI1 (NSS)                  | PA4             |
| 5   | UART1_RX  | UART1 Interface                     | PB7             |
| 6   | UART1_TX  | UART1 Interface                     | PB6             |
| 7   | GND       | Ground                              | -               |
| 8   | BOOT0     | BOOT0 mode enable pin - active high | -               |
| 9   | 3V3       | Power Supply                        | -               |

##### J5 Pin Definitions

| Pin | Name | Description | RAK3272-SiP Pin |
| --- | ---- | ----------- | --------------- |
| 1   | PC6  | MCU pin PC6 | PC6             |
| 2   | PC5  | MCU pin PC5 | PC5             |
| 3   | PC4  | MCU pin PC4 | PC4             |
| 4   | PC3  | MCU pin PC3 | PC3             |
| 5   | PC2  | MCU pin PC2 | PC2             |
| 6   | PC1  | MCU pin PC1 | PC1             |
| 7   | PC0  | MCU pin PC0 | PC0             |
| 8   | PB9  | MCU pin PB9 | PB9             |
| 9   | PB8  | MCU pin PB8 | PB8             |



##### J6 Pin Definitions

| Pin | Name | Description  | RAK3272-SiP Pin |
| --- | ---- | ------------ | --------------- |
| 1   | PB11 | MCU pin PB11 | PB11            |
| 2   | PB10 | MCU pin PB10 | PB10            |
| 3   | PA9  | MCU pin PA9  | PA9             |
| 4   | PB1  | MCU pin PB1  | PB1             |
| 5   | PB2  | GPIO or PIN_A2 | PB2           |
| 6   | PB12 | MCU pin PB12 | PB12            |
| 7   | PB13 | MCU pin PB13 | PB13            |
| 8   | PB14 | MCU pin PB14 | PB14            |
| 9   | PA10 | GPIO or PIN_A3 | PA10           |


##### J7 Pin Definitions

| Pin | Name | Description  | RAK3272-SiP Pin |
| --- | ---- | ------------ | --------------- |
| 1   | 3V3  | Power Supply | -               |
| 2   | PC13 | MCU pin PC13 | PC13            |
| 3   | PA15 | GPIO or PIN_A4 | PA15          |
| 4   | PB15 | MCU pin PB15 | PB15            |
| 5   | PA8  | MCU pin PA8  | PA8             |

##### J8 Pin Definitions

| Pin | Name | Description  | RAK3272-SiP Pin |
| --- | ---- | ------------ | --------------- |
| 1   | 3V3  | Power Supply | -               |
| 2   | PB3  | GPIO or PIN_A0 | PB3           |
| 3   | PB4  | GPIO or PIN_A1 | PB4           |
| 4   | PB5  | MCU pin PB5  | PB5             |
| 5   | GND  | Ground       | -               |

#### RF Characteristics

The RAK3272-SiP Breakout Board supports the LoRaWAN bands 863&nbsp;MHz to 930&nbsp;MHz


##### Operating Frequencies

| Module      | Region        | Frequency |
| ----------- | ------------- | --------- |
| RAK3272-SiP | Europe        | EU868     |
|             | North America | US915     |
|             | Australia     | AU915     |
|             | Korea         | KR920     |
|             | Asia          | AS923-1/2/3/4 |
|             | India         | IN865     |
|             | Russia        | RU864     |

#### Electrical Characteristics

##### RAK3272-SiP Power Supply Scheme

The RAK3272-SiP Breakout Board can use two different power supply regulators: **LDO** or **DCDC** (SMPS) - Switch Mode Power Supply.

The use of **DCDC** is optional but improves the power efficiency. If you want to disable the **DCDC** mode, then you need to remove the L1 inductor, as shown in **Figure 6**.


<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/ldo.png"
  width="70%"
  caption="RAK3272-SiP Breakout Board DCDC inductor"
/>


##### Absolute Maximum Ratings

| Parameter    | Minimum     | Typical | Maximum | Unit      |
| ------------ | ----------- | ------- | ------- | --------- |
| VDD and GPIO | -0.3&nbsp;V |         | 3.9     | Volts (V) |


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

###### RAK3272-SiP (uses RFO_HP RF output)

| Parameter  | Condition   | Current Consumption (Typical) |
| ---------- | ----------- | ----------------------------- |
| TX mode    | 20&nbsp;dBm | 87&nbsp;mA                    |
| RX mode    | -           | 6.14&nbsp;mA                    |
| Sleep mode | -           | 1.69&nbsp;uA                  |

###### RAK3272LP-SiP (uses RFO_LP RF output)

| Parameter  | Condition   | Current Consumption (Typical) |
| ---------- | ----------- | ----------------------------- |
| TX mode    | 14&nbsp;dBm | 39.1&nbsp;mA                  |
|            | 12&nbsp;dBm | 33&nbsp;mA                    |
|            | 10&nbsp;dBm | 28&nbsp;mA                    |
|            | 8&nbsp;dBm  | 25&nbsp;mA                    |
| RX mode    | -           | 9.69&nbsp;mA                  |
| Sleep mode | -           | 2.1&nbsp;uA                   |


##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/rak3272-sip-sch.png"
  width="100%"
  caption="RAK3272-SiP schematic diagram"
/>

#### Mechanical Characteristics

**Figure 8** shows RAK3272-SiP Breakout Board dimensions.

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/datasheet/dimensions.png"
  width="40%"
  caption="RAK3272-SiP Breakout Board mechanical dimensions"
/>


### Software

#### Upload Firmware Using RAK DFU

The **bin file** contains the application code only, and you need the **RAK DFU Tool** to upload this file to the RAK3272-SiP Breakout Board via UART2.

RAK3272-SiP Breakout Board uses UART2 serial pins to upload the latest firmware. Refer to the [Connect to the RAK3272-SiP Breakout Board](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Quickstart/#connect-to-the-rak3272-sip-breakout-board) section.


#### Upload Firmware Using ST-Link

The **hex file** contains both the bootloader and the application code.

You need to use [STM32CubeProgrammer](https://wiki.st.com/stm32mpu/wiki/STM32CubeProgrammer) and **ST-Link** tool [to upload the hex file](https://docs.rakwireless.com/Knowledge-Hub/Learn/STM32Cube-Programmer-Guide/). Use the diagram shown in **Figure 9** to connect the **ST-Link**.

<rk-img
  src="/assets/images/wisduo/rak3272-sip-breakout-board/quickstart/rak3272-sip-stlink.png"
  width="70%"
  caption="RAK3272-SiP Breakout Board ST-Link connection"
/>

#### Firmware/OS

Download the latest RAK3272-SiP and RAK3272LP-SiP Breakout Board firmware provided below.

| Model                | Version                   | Source                                                                                      |
| -------------------- | ------------------------- | ------------------------------------------------------------------------------------------- |
| RAK3272-SiP (.bin)   | RUI3 (App only)           | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272-SiP_latest.bin)         |
| RAK3272-SiP (.hex)   | RUI3 (Bootloader and App) | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272-SiP_latest_final.hex)   |
| RAK3272LP-SiP (.bin) | RUI3 (App only)           | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272LP-SiP_latest.bin)       |
| RAK3272LP-SiP (.hex) | RUI3 (Bootloader and App) | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3272LP-SiP_latest_final.hex) |


