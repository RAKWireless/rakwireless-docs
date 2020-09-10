---
tags:
- datasheet
- wisduo
prev: ../Overview/
---
# RAK4200 WisDuo LPWAN Module Datasheet

<!--
<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/overview.png"
  width="50%"
  caption="RAK4200 Module"
/>
--->

## Overview

### Description

**RAK4200 WisDuo LPWAN Module** includes an STM32L071KB MCU and an SX1276 LoRa® chip. It has Ultra-Low Power Consumption of 1.5uA in sleep mode and high LoRa® output power up to 19dBm max in work mode.

The module complies with LoRaWAN® 1.0.2 protocols. It also supports LoRa® Point to Point communications. The module is suitable for various applications that require long range data acquisition and low power consumption.

### Features

* LoRa® module for Smart City, Smart Agriculture, Smart Industry
* **Compact Form Factor**: 15 x 15.5 x 2.5 mm
* 20 Pin Stamp Pad for PCB SMT mounting
* **I/O ports**: UART/I2C/GPIO
* **Temperature range**: -40°C to +85°C
* **Supply voltage**: 2.0 ~ 3.6V
* **Frequency range**: 863–870MHz (EU) / 902–928MHz (US), ISM and SRD systems
* Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
* Ultra-Low Power Consumption 1.5uA in sleep mode
* **Core**: ARM 32-bit Cortex – M0+ with MPU
* Up to 128KB flash memory with ECC
* 20KB RAM
* 6KB of data EEPROM with ECC


## Specifications

### Overview

The overview covers the RAK4200 WisDuo™ board overview where the front and back views are presented. It includes also the block diagram that shows the external interfaces of the RAK4200 WisDuo™.


#### Board Overview

<!---The figure below shows the top view of the RAK4200 WisDuo LPWAN Module. The dimensions of the Module are 15 x 15.5 x 2.5 mm.
(Mechanical Characteristics)
--->


<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/back_view.png"
  width="60%"
  caption="RAK4200 WisDuo LPWAN Module Front and Back View"
/>


#### Block Diagram

<!--- The block diagram below shows the external interfaces of the RAK4200 WisDuo LPWAN Module. --->

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/block-diagram.png"
  width="60%"
  caption="RAK4200 WisDuo™ Block Diagram"
/>

### Hardware

The hardware specification is categorized into five parts. It covers the pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and its standard values in terms of electrical and mechanical. 


#### Pin Definition

<!---Provided in this section is the Pinout of the RAK4200 WisDuo LPWAN Module.--->

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/pinout-for-rak4200.png"
  width="65%"
  caption="Pinout for RAK4200"
/>


| Pin | Name     | I/O | Description                                      |
| --- | -------- | --- | ------------------------------------------------ |
| 1   | UART2_RX | I   | Main UART (STM32L071K8 PA10)                     |
| 2   | UART2_TX | O   | Main UART (STM32L071K8 PA9)                      |
| 3   | UART2_DE | I/O | GPIO (STM32L071K8 PA12)                          |
| 4   | UART1_TX | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA2) |
| 5   | UART1_RX | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA3) |
| 6   | UART1_DE | I/O | General GPIO or UART(Reserved) (STM32L051K8 PA1) |
| 7   | SWDIO    | I/O | Programming (STM32L051K8 PA13)                   |
| 8   | SWCLK    | I/O | Programming (STM32L051K8 PA14)                   |
| 9   | I2C_SCL  | I/O | I2C interface (STM32L051K8 PB6)                  |
| 10  | I2C_SDA  | I/O | I2C interface (STM32L051K8 PB7)                  |
| 11  | GND      | -   | Ground                                           |
| 12  | RF       | I/O | RF port (reserved), default RF out by IPEX       |
| 13  | GND      | -   | Ground                                           |
| 14  | GND      | -   | Ground                                           |
| 15  | SPI_CLK  | I/O | Reserved PA5                                     |
| 16  | SPI_MISO | I/O | Reserved PA6                                     |
| 17  | SPI_MOSI | I/O | Reserved PA7                                     |
| 18  | MCU_NRST | I/O | MCU reset (STM32L051K8 NRST)                     |
| 19  | GND      | -   | Ground                                           |
| 20  | VDD      | -   | DC3V3                                            |


#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN® frequency channels shown in the table below. The frequency parameter is easy to configure as you go through the device configuration setup. RAK4200 has two different types based on its frequency: RAK4200(L) for low frequency and RAK4200(H) for high frequency.

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

##### Laboratory Testing

The following figures shown below are the average current consumptions based on the different test cases.

**Materials:**
   * Oscilloscope
   * RAK4200 WisDuo LPWAN Module

**LoRa® Packet Sending**

The RAK4200 WisDuo LPWAN Module takes **53.155 ms** to send a LoRa® packet which consumes **68.4 mA** of current.

   * **Sending Time**: 53.155 ms
   * **Current consumption**: 68.4 mA


<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/oscilloscope-screen-capture-of-lora®-packet-sending.jpg"
  width="75%"
  caption="Oscilloscope Screen Capture of LoRa® Packet Sending"
/>

**LoRa® Packet Receiving**

The RAK4200 WisDuo LPWAN Module takes **46.179 ms** to receive a LoRa® packet which consumes **17.1 mA** of current.

   * **Receiving Time**: 46.179 ms
   * **Current consumption**: 17.1 mA

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/oscilloscope-screen-capture-of-lora®-packet-receiving.jpg"
  width="75%"
  caption="Oscilloscope Screen Capture of LoRa® Packet Receiving"
/>

**Sleep Mode**

The RAK4200 WisDuo LPWAN Module when in sleep mode consumes **11.8 uA** of current.

   * **Current consumption**: 11.8 uA

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/oscilloscope-screen-capture-of-rak4200-lpwan-module-in-sleep-mode.jpg"
  width="75%"
  caption="Oscilloscope Screen Capture of RAK4200 WisDuo LPWAN Module in sleep mode"
/>

#### Mechanical Characteristics


<!---The following figure is the mechanical dimensions of the RAK4200 WisDuo LPWAN Module.--->

<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/mechanical-dimensions.jpg"
  width="55%"
  caption="Mechanical Dimensions"
/>

#### Recommended Reflow Profile

<!--- In this section, the recommended reflow profile for RAK4200 WisDuo LPWAN Module is described in the image below: --->


<rk-img
  src="/assets/images/wisduo/rak4200-module/datasheet/recommended-reflow-profile.jpg"
  width="60%"
  caption="Recommended Reflow Profile"
/>

##### Standard Conditions for Reflow Soldering:

* **Pre-heating Ramp** (A) (Initial temperature: 150℃): 1-2.5℃/sec;
* **Soaking Time** (T2) (150℃~180℃): 60sec-100sec;
* **Peak Temperature**(G): 230~250℃;
* **Reflow Time** (T3) (>220℃): 30~60 sec;
* **Ramp-up Rate** (B): 0~2.5℃/ sec;
* **Ramp-down Rate** (C): 1~3℃/ sec.