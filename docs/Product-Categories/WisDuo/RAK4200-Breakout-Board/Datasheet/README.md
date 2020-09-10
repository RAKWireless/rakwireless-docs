---
tags:
  - datasheet
  - wisduo
prev: ../Quickstart/

---

# RAK4200 Breakout Board Datasheet

<!---
<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/datasheet/rak4200-breakout-module.png"
  width="50%"
  caption="RAK4200 Breakout Board"
/>
-->

## Overview

### Description

**RAK4200 Breakout Board** is specifically designed to allow easy excess to the pins on the board in order to simplify development and testing. The breakout board utilized is of an Xbee form factor and its main purpose is to allow the RAK4200 stamp module form factor pinout to be transferred to 2.54mm headers.

The board itself has the RAK4200 at its core, integrating an **STM32L071 MCU** and an **SX1276 LoRa® chip**. It has Ultra-Low Power Consumption of 1.5uA in sleep mode and high LoRa® output power (19dBm) in work mode.

The board complies with LoRaWAN® 1.0.2 protocols. It also supports Lora® Point to Point communication.

The low power, long range LoRa® communication capabilities of the board make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).

### Features

LoRa® module for Smart City, Smart Agriculture, Smart Industry

- I/O ports: **UART/I2C/GPIO**
- Frequency range: **863–923 MHz** (entire LoRa® high band spectrum)
- Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
- LoRa® Tx power up to **19dBm**
- Ultra-Low Power Consumption **2.0uA in sleep mode**
- Core: **ARM 32-bit Cortex M0+** with MPU
- Up to128KB flash memory with ECC
- 20KB RAM
- 6KB of data EEPROM with ECC
- Supply voltage: **2.0 ~ 3.6V**
- Temperature range: **-40°C to +85°C**

## Specifications

### Overview

The RAK4200 Breakout Board is shown in Figure 1. It displays the top view of the board.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/datasheet/rak4200-breakout-board-illustration.png"
  width="30%"
  caption="RAK4200 Breakout Board Illustration"
/>

### Hardware


The hardware specification is categorized into four parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK4200 Breakout Board.


#### Interfaces

##### SWD Programming Interface

When programming via a JLINK tool, it is required to have all of the following 5 pins connected to the JLINK tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**
5. **MCU_NRST**

:::tip Note:
:pencil: For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs.
:::

##### UART Port

There are two UART interfaces on RAK4200 Breakout Board:

- **UART1** – recommended for debugging/firmware update
- **UART2** – recommended for external MCU connection.

##### I2C interface

The following pins are intended for I2C (_require 10k resistance pull-up_):

- **I2C_SCL**
- **I2C_SDA**

##### RF interface

J3 is soldered to the antenna connector. Depending on your choice, it can come with either SMA or IPEX style connector. Make sure to select the one you need when ordering.

##### SPI interface

The SPI interface (**_SPIMOSI, SPI MISO, SPI_CLK_**) is connected to **SX1276** internally.

:::tip Note:
:pencil: For the aforementioned reason, it is best you leave unconnected.
:::

#### Pin Definition

The figure below shows the pinout of the RAK4200 Breakout Board:

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/datasheet/rak4200-breakout-board-pinout.png"
  width="60%"
  caption="RAK4200 Breakout Board Pinout"
/>

The pin definitions of RAK4200 Breakout Board are shown in the following tables below:

##### J1 Pin Definitions

| Pin | Name     | I/O | Description                                     | Alternate functions                                                          |
| --- | -------- | --- | ----------------------------------------------- | ---------------------------------------------------------------------------- |
| 1   | UART2_RX | I   | Main UART (STM32L071 PA3)                       | USART1RX, I2C1 SDA                                                           |
| 2   | UART2_TX | O   | Main UART (STM32L071 PA2)                       | MCO, USART1TX, I2C1 SCL, I2C3_SMBA                                           |
| 3   | UART2_DE | I/O | GPIO (STM32L071 PA1)                            | SPI1MOSI, EVENT OUT, USART1_RTS_DE, COMP2_OUT                                |
| 4   | UART1_DE | I/O | GPIO or UART (Reserved) GPIO or UART (Reserved) | EVENT OUT, TIM2_CH2, USART2_RTS_DE, TIM21_ETR, USART4_RX, COMP1_INP, ADC_IN1 |
| 5   | SWDIO    | I/O | Programming (STM32L071 PA13)                    | SWDIO, LPUART1_RX                                                            |
| 6   | SWCLK    | I/O | Programming (STM32L071 PA14)                    | SWCLK, USART2*TX, LPUART1* TX                                                |
| 7   | I2C_SCL  | I/O | I2C interface (STM32L071 PB6)                   | USART1*TX, I2C1* SCL, LPTIM1_ETR, COMP2_INP                                  |
| 8   | I2C_SDA  | I/O | I2C interface (STM32L071 PB6)                   | USART1*RX, I2C1* SDA, LPTIM1_IN2, USART4_CTS, COMP2_INP, VREF_PVD_IN         |

##### J2 Pin Definitions

| Pin | Name     | I/O | Description                              | Alternate Functions                                                       |
| --- | -------- | --- | ---------------------------------------- | ------------------------------------------------------------------------- |
| 1   | VDD      | -   | DC3V3                                    | Supply voltage 2.0~3.3V                                                   |
| 2   | UART1_TX | I/O | GPIO or UART (Reserved) (STM32L071 PA9)  | TIM21_CH1, TIM2_CH3, USART2_TX, LPUART1_TX, COMP2_OUT, COMP2_INM, ADC_IN2 |
| 3   | UART1_RX | I/O | GPIO or UART (Reserved) (STM32L071 PA10) | TIM21*CH2, TIM2* CH4, USART2_RX, LPUART1_RX, COMP2_INP, ADC_IN3           |
| 4   | GND      | -   | Ground                                   | -                                                                         |
| 5   | MCU_NRST | I/O | MCU reset (STM32L071 NRST)               | -                                                                         |
| 6   | SPI_CLK  | I/O | Reserved PA5                             | Internal connection to **SX1276 SPI_CLK**                                 |
| 7   | SPI_MISO | I/O | Reserved PA6                             | Internal connection to **SX1276 SPI_MISO**                                |
| 8   | SPI_MISO | I/O | Reserved PA7                             | Internal connection to **SX1276 SPI_MOSI**                                |

##### J4 Pin Definitions

| Pin | Name | I/O | Description | Alternate Functions     |
| --- | ---- | --- | ----------- | ----------------------- |
| 1   | VDD  | -   | DC3V3       | Supply voltage 2.0~3.3V |
| 2   | GND  | -   | Ground      | -                       |

#### RF Characteristics

##### Operating Frequencies

The RAK4200 Breakout Board supports the following LoRa® bands:

| Module          | Region                                                                                     | Frequency                                                                    |
| --------------- | ------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------- |
| **RAK4200 (L)** | Europe <br> China                                                                          | EU433 <br> CN470                                                             |
| **RAK4200 (L)** | Russia <br> Indian <br> Europe <br> North America <br> Australia <br> Korea <br> Asia <br> | RU864 <br> IN865 <br> EU868 <br> US915 <br> AU915 <br> KR920 <br> AS923 <br> |

#### Electrical Characteristics

##### Power Consumption

The table below shows the power consumption of RAK4200 Breakout Board:

| Item                    | Power Consumption | Condition                       |
| ----------------------- | ----------------- | ------------------------------- |
| Tx mode LoRa® @19dBm    | 120mA             | LoRa® @ PA_BOOST & BT sleep     |
| Tx mode LoRa® @17dBm    | 87mA              | LoRa® @ PA_BOOST & BT sleep     |
| Rx mode LoRa® @37.5Kbps | 15mA              | LoRa® @ Receive mode & BT sleep |
| Sleep mode              | 1.5uA             | LoRa® sleep                     |

##### Schematic Diagram

The RAK4200 Breakout Board circuit is shown below:

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/datasheet/rak4200-breakout-module-schematic.png"
  width="100%"
  caption="RAK4200 Breakout Board Schematic"
/>

### Software

Download the latest firmware and bootloader of the RAK4200 Breakout Board provided in the table below.


#### Firmware

| Model               | Version   | Source                                                                                           |
| ------------------- | --------- | ------------------------------------------------------------------------------------------------ |
| RAK4200 Firmware    | V3.2.0.12 | [Download](https://downloads.rakwireless.com/LoRa/RAK4200/Firmware/RAK4200_V3.2.0.12.rar)        |
| RAK4200 Bootloader | V3.2.3    | [Download](https://downloads.rakwireless.com/LoRa/RAK4200/Firmware/RAK4200_Bootloder_V3.2.3.rar) |
