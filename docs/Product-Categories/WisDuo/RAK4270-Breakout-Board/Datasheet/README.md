---
rak_desc: Covers the comprehensive information of your RAK4270 Breakout Board to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisduo
  - RAK4270 Breakout Board
prev: ../AT-Command-Manual/
next: false
---

# RAK4270 Breakout Board Datasheet

## Overview

### Description

**RAK4270 Breakout Board** is a simple board specially designed to facilitate the external connection of RAK4270 pins. The main purpose is to access the pins of the stamp module over two (2) rows of 2.54&nbsp;mm headers. Hence, it is convenient to debug the RAK4270 Breakout Board.     

The RAK4270 Breakout Board includes a **STM32L071 MCU** and a **SX1262 LoRa chip**, which supports eight spreading factors (**SF5 ~ SF12**) and signal bandwidth that can be adjusted between **7.8&nbsp;kHz** to **500&nbsp;kHz**. It has Ultra-Low Power Consumption of 2.31&nbsp;μA (down to 1.61&nbsp;μA @ 2.0&nbsp;V) in sleep mode, but during the Transmit mode, it can reach the maximum output power of **22&nbsp;dBm**. As a receiver, it can achieve a sensitivity of **-148&nbsp;dBm**.    

The module complies with the LoRaWAN 1.0.2 protocol, so it can be used for implementing LoRa networks or Lora point to point communications. The module is suitable for various applications that require long-range data acquisition and low power consumption, such as smart meters, supply chain and logistics tracking, agricultural sensors, smart cities, etc.    

This module is expected to be controlled by an external controller through its UART interface by sending a set of AT commands. These AT commands control not only the state of this module but also set the LoRaWan communication parameters and payloads (see RAK [AT Command Manual](/Product-Categories/WisDuo/RAK4270-Module/AT-Command-Manual/)).


### Features

- LoRa module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/GPIO**
- Temperature range: **-40&nbsp;°C** to **+85&nbsp;°C**
- Supply voltage: **2.0 ~ 3.6&nbsp;V**
- Supported bands: EU433, CN470, IN865, EU868, AU915, US915, KR920 and AS923
- Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;kHz bandwidth
- Ultra-Low Power Consumption of 2.31&nbsp;μA (down to 1.61&nbsp;μA @ 2.0&nbsp;V) in sleep mode
- Core: ARM 32-bit Cortex – M0+ with MPU
- Up to 128&nbsp;KB flash memory with ECC
- 20&nbsp;KB RAM
- 6&nbsp;KB of data EEPROM with ECC

## Specifications

### Overview

The RAK4270 Breakout Board is shown in Figure 1 that displays the top view of the module and the dimensions of the board.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/datasheet/rak4270-dimensions.png"
  width="30%"
  caption="RAK4270 Breakout Board Dimensions"
/>

### Hardware

Hardware specification is categorized into five parts that covers the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the RF and electrical parameters that include the tabular data of the functionalities and standard values of the RAK4270 Breakout Board.


#### Interfaces

##### SWD Programming Interface

To program the breakout board with the DAPLink tool, the following pins are required:

| **Connector/Pin** | **Name** | **I/O** | **Description**                  | **Alternate functions**       |
| :---------------: | -------- | :-----: | -------------------------------- | ----------------------------- |
|       J1 5        | SWDIO    |   I/O   | Programming (STM32L071KBU6 PA13) | SWDIO, LPUART1_RX             |
|       J1 6        | SWCLK    |   I/O   | Programming (STM32L071KBU6 PA14) | SWCLK, USART2_TX, LPUART1_TX  |
|       J2 1        | VDD      |    -    | DC3V3                            | Supply voltage 2.0~3.3&nbsp;V |
|       J2 4        | GND      |    -    | Ground                           | -                             |
|       J2 5        | MCU_NRST |   I/O   | MCU reset (STM32L071KBU6 NRST)   | -                             |

:::tip 📝 NOTE:
It is recommended to keep these GPIO's unconnected and not to use them to connect sensors, buttons, or other external components.
:::

##### UART Port

There are two UART ports on the RAK4270 Breakout Board. UART2_RX and UART2_TX are used as a command port and UART1_TX and UART1_RX are used as a command or upgrade port. It is recommended to connect UART2 to an external MCU and use UART1 for debugging and flashing.

##### I2C Port

I2C_SCL and I2C_SDA are the I2C port. Depending on the external device connected to it, it might be necessary to add 10&nbsp;kOhm pull-up resistors to these lines.

##### RF Port

The RF port is by default equipped with a SMA connector. If you need an IPEX connector, contact the customer service in advance. RAKwireless will replace the SMA connector with an IPEX type connector.


#### Pin Definition

<br>
<br>

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/datasheet/2.pin-definition.png"
  width="60%"
  caption="RAK4270 Breakout Board Pinout"
/>

The pin definitions of the RAK4270 Breakout Board are shown in the following tables below:

##### J1 Pin Definitions

|  Pin  | Name     |  I/O  | Description                                         | Alternate functions                                                         |
| :---: | -------- | :---: | --------------------------------------------------- | --------------------------------------------------------------------------- |
|   1   | UART2_RX |   I   | AT command UART (STM32L071KBU6 PA3)                 | USART1_RX, I2C1_SDA                                                         |
|   2   | UART2_TX |   O   | AT command UART (STM32L071KBU6 PA2)                 | MCO, USART1_TX, I2C1_SCL, I2C3_SMBA                                         |
|   3   | UART2_DE |  I/O  | GPIO (STM32L071KBU6 PA1)                            | Reserved for internal use. Do not connect external circuit.                                |
|   4   | UART1_DE |  I/O  | General GPIO or UART(Reserved) (STM32L071KBU6 PA12) | EVENTOUT, TIM2_CH2, USART2_RTS_DE, TIM21_ETR, USART4_RX, COMP1_INP, ADC_IN1 |
|   5   | SWDIO    |  I/O  | Programming (STM32L071KBU6 PA13)                    | SWDIO, LPUART1_RX                                                           |
|   6   | SWCLK    |  I/O  | Programming (STM32L071KBU6 PA14)                    | SWCLK, USART2_TX, LPUART1_TX                                                |
|   7   | I2C_SCL  |  I/O  | I2C interface (STM32L071KBU6 PB6)                   | USART1_TX,I2C1_SCL, LPTIM1_ETR,COMP2_INP                                    |
|   8   | I2C_SDA  |  I/O  | I2C interface (STM32L071KBU6 PB7)                   | USART1_RX,I2C1_SDA, LPTIM1_IN2,USART4_CTS, COMP2_INP,VREF_PVD_IN            |


##### J2 Pin Definitions

|  Pin  | Name     |  I/O  | Description                                       | Alternate functions                                                                              |
| :---: | -------- | :---: | ------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
|   1   | VDD      |   -   | DC3V3                                             | Supply voltage 2.0~3.3&nbsp;V                                                                    |
|   2   | UART1_TX |  I/O  | Upgrade UART or General GPIO (STM32L071KBU6 PA9)  | TIM21_CH1,TIM2_CH3, USART2_TX, PUART1_TX, COMP2_OUT,COMP2_INM, ADC_IN2                           |
|   3   | UART1_RX |  I/O  | Upgrade UART or General GPIO (STM32L071KBU6 PA10) | TIM21_CH2,TIM2_CH4, USART2_RX,LPUART1_RX, COMP2_INP,ADC_IN3                                      |
|   4   | GND      |   -   | Ground                                            | -                                                                                                |
|   5   | MCU_NRST |  I/O  | MCU reset (STM32L071KBU6 NRST)                    | -                                                                                                |
|   6   | ANT_SW   |  I/O  | PA11                                              | This pin has been connected to the internal RF switch, so leave it unconnected on the mainboard. |
|   7   | PB4      |  I/O  | STM32L071KBU6 PB4                                 | Reserved for internal use. Do not connect external circuit.                                                                                             |
|   8   | PA8      |  I/O  | STM32L071KBU6 PA8                                 | GPIO                                                                                             |


##### J4 Pin Definitions

|  Pin  | Name |  I/O  | Description | Alternate functions           |
| :---: | ---- | :---: | ----------- | ----------------------------- |
|   1   | VDD  |   -   | DC3V3       | Supply voltage 2.0~3.3&nbsp;V |
|   2   | GND  |   -   | Ground      | GND                           |


#### RF Characteristics

##### Operating Frequencies

The RAK4270 Breakout board supports the following LoRaWAN bands:    

| **Module** | **Region**    | **Frequency (MHz)** |
| ---------- | ------------- | ------------------- |
| RAK4270(L) | Europe        | EU433               |
| RAK4270(L) | China         | CN470               |
| RAK4270(H) | India         | IN865               |
| RAK4270(H) | Europe        | EU868               |
| RAK4270(H) | North America | US915               |
| RAK4270(H) | Australia     | AU915               |
| RAK4270(H) | Korea         | KR920               |
| RAK4270(H) | Asia          | AS923               |



#### Electrical Characteristics

##### Power Consumption

Values listed in the table are values measured with a LoRa frequency of **868&nbsp;MHz**:

| Mode     | Output Power | Current                 |
| -------- | :----------: | ----------------------- |
| Transmit | 21&nbsp;dBm  | 124&nbsp;mA on PA_BOOST |
| Transmit | 20&nbsp;dBm  | 118&nbsp;mA on PA_BOOST |
| Transmit | 17&nbsp;dBm  | 102&nbsp;mA on PA_BOOST |
| Transmit | 14&nbsp;dBm  | 90&nbsp;mA on PA_BOOST  |
| Receive  |      -       | 15&nbsp;mA              |

##### Sleep Current

| Feature                   | Condition  | Minimum (2.0V) | Typical (3.3V) | Maximum | Unit |
| ------------------------- | ---------- | -------------- | -------------- | ------- | ---- |
| Current Consumption       | EU868      | 1.74           | 2.19           |         | μA   |
|                           | US915      | 1.61           | 2.31           |         | μA   |


##### Schematic Diagram


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/datasheet/3.schematic.png"
  width="100%"
  caption="RAK4270 Breakout Board Schematic"
/>
