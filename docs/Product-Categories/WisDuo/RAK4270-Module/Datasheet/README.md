---
tags:
- datasheet
- wisduo
prev: ../Overview/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/CE%20Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/FCC%20Certification.zip]
---


# RAK4270 WisDuo LPWAN Module Datasheet

## Overview

### Description

The RAK4270 LoRa Module includes an **STM32L071 MCU** and an **SX1262** LoRa chip, which supports 8 spreading factors (SF5 ~ SF12) and signal bandwidth that can be adjusted between 7.8 kHz to 500 kHz. It has an ultra-low power consumption of 1.5uA in Sleep Mode, but during the Transmit mode, it can reach the maximum output power of 22 dBm. As a receiver, it can achieve a sensitivity of -138 dBm.

The module complies with the LoRaWAN 1.0.2 protocol, so it can be used for implementing LoRa networks or Lora point to point communications. The module is suitable for various applications that require long-range data acquisition and low power consumption, such as smart meters, supply chain and logistics tracking, agricultural sensors, and smart cities.

This module is expected to be controlled by an external controller through its UART interface by sending a set of AT commands. These AT commands control not only the state of this module but also set the LoRaWan communication parameters and payloads (See [RAK AT Command Manual](/Product-Categories/WisDuo/RAK4270-Module/LoRaWAN-P2P/AT-Command-Manual/#rak4270-at-command-manual)).


### Product Features

- LoRa module is suitable for applications in Smart City, Smart Agriculture, Smart Industry
- Compact form factor: **15 x 15.5 x 2.5 mm** (LxWxH)
- 20 pin stamp pad for PCB SMT board-to-board soldering
- I/O ports: **UART/I2C/GPIO**
- AT commands control interface
- Temperature range: **-40°C to +85°C**
- Supply voltage: **2.0 to 3.6V**
- Frequency Bands 433MHz(EU)/ 470-510MHz(CN)/ 865-867MHz(IN)/ 863–870MHz (EU)/ 902–928MHz(US) / 915-928MHz(AU)/ 920-923MHz(KR) / 920-923MHz(AS)
- LoRa bandwidth range of 7.8 kHz to 500 kHz, SF5 to SF12, BR=0.018~62.5 kb/s
- Ultra-low power Consumption: **1.5uA in sleep mode**
- Arm Cortex-M0+ 32-bit RISC core
- 128 kbytes flash memory with ECC
- 20 kbytes RAM
- 6 kbytes of data EEPROM with ECC
- Compliance with TBC

<!--- Add regulation here --->



## Specifications

### Overview

The overview shows the module top view and its block diagram where the core and external interfaces of the module are shown.

#### Board Overview

Figure 1 shows the top view of the RAK4270 LoRa module. The dimensions of the module are 15 x 15.5 x 2.5 mm

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/1.rak4270.png"
  width="50%"
  caption="RAK4270 Module"
/>


#### Block Diagram

The block diagram representing the RAK4270 LoRa module is shown in the Figure 2. External interfaces are outlined in the diagram.

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/2.block-diagram.png"
  width="60%"
  caption="RAK4270 Module"
/>

### Hardware

The hardware specification is categorized into seven parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It covers the parameters of the RAK4270 Module in terms of electrical and mechanical, and the standard operating frequencies of this module.

#### Interfaces

##### SWD Programming Tool

To upgrade the firmware, the SWD (Serial Wire Debug) interface must be used. A 5 pin JLINK cable has to be connected to the SWD port. These pins are 3v3, SWDIO, SWCLK, and MCU_NRST.

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/3.swd-support.png"
  width="25%"
  caption="RAK4270 SWD port"
/>


##### UARTS ports 


There are two UART ports on the RAK4270 module. UART2 (pin1 and pin2) can be used as the command port, while the UART1 (pin4 and pin5) can be used both as command port and firmware upgrade port. It is recommended to connect the UART2 port to an external MCU and reserve UART1 for debugging and or future firmware upgrade purposes.


<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/4.uart2.png"
  width="25%"
  caption="RAK4270 UART2 port"
/>


##### I2C Port

The RAK4270 exposes an I2C port, in which the SDA line is assigned to the pin9, and the SCL line is assigned to pin10. This I2C port allows you to control additional slave sensors with the RAK4270 using I2C protocol. The RAK4270 will be the master. If the I2C port is used, then external pull-up resistors must be added to the SDA and SCL lines. The recommended value of the resistors is 10 kOhm.


##### RF Port

The RAK4270 module exposes two types of RF antenna: IPEX and PAD. The most straightforward way is to use the IPEX antenna port. In such a case, you just to connect the antenna to the IPEX connector on the module directly. On the other hand, for specific needs, you can design a PCB trace antenna, Chip antenna, SMA antenna, or spring type antenna. In the latter case, the customer should use the PAD type antenna port expose by this module. The external antenna should be matched to the 50 Ohm RF transmission line.

##### VDD Power In

It is recommended to add 4 decoupling capacitors near the module at the entrance of the power supply pin. The recommended values of the capacitor are C1 =10uF, C2=10uF, C3=100nF, C4=100nF.


<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/5.vdd-port.png"
  width="25%"
  caption="RAK4270 VDD port"
/>


#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/6.pinout.png"
  width="60%"
  caption="RAK4270 Pinout"
/>
 
|  Pin  |  Name   |  I/O   |  Description   |  Alternate Functions   |
| ----- | ------- | ------ | -------------- | ---------------------- |
| 1 | UART2_RX | I | This UART port is used as an AT command port (STM32L071KBU6 PA3). | USART1_RX, I2C1_SDA | 
| 2 | UART2_TX | O | This UART port is used as an AT command port (STM32L071KBU6 PA2). | MCO, USART1_TX, I2C1_SCL, I2C3_SMBA | 
| 3 | UART2_DE | I/O | GPIO (STM32L071KBU6 PA1) | SPI1_MOSI, EVENTOUT, USART1_RTS_DE, COMP2_OUT | 
| 4 | UART1_TX | I/O | This UART port can be used as an AT command port and an upgrade port (STM32L071KBU6 PA9). | TIM21_CH1,TIM2_CH3, USART2_TX,LPUART1_TX, COMP2_OUT,COMP2_INM, ADC_IN2 | 
| 5 | UART1_RX | I/O | This UART port can be used as an AT command port and an upgrade port (STM32L071KBU6 PA10) | TIM21_CH2,TIM2_CH4, USART2_RX,LPUART1_RX, COMP2_INP,ADC_IN3 | 
| 6 | UART1_DE | I/O | General GPIO or UART(Reserved) (STM32L071KBU6 PA12) | EVENTOUT,TIM2_CH2,USART2_RT S_DE, TIM21_ETR, USART4_RX,COMP1_INP, ADC_IN1 | 
| 7 | SWDIO | I/O | Programming (STM32L071KBU6 PA13) | SWDIO, LPUART1_RX | 
| 8 | SWCLK | I/O | Programming (STM32L071KBU6 PA14) | SWCLK, USART2_TX, LPUART1_TX | 
| 9 | I2C_SCL | I/O | I2C interface (STM32L071KBU6 PB6) | USART1_TX,I2C1_SCL, LPTIM1_ETR,COMP2_INP | 
| 10 | I2C_SDA | I/O | I2C interface (STM32L071KBU6 PB7) | USART1_RX,I2C1_SDA, LPTIM1_IN2,USART4_CTS, COMP2_INP,VREF_PVD_IN | 
| 11 | GND |  | Ground |  | 
| 12 | RF | I/O | RF port (reserved), default RF out by IPEX |  | 
| 13 | GND |  | Ground |  | 
| 14 | GND |  | Ground |  | 
| 15 | ANT_SW | I/O | PA11 | *leave it unconnected on mainboard* | 
| 16 | PB4 | I/O | STM32L071KBU6 PB4 | USART1_CTS,SPI1_MISO, TIM3_CH1,I2C3_SDA | 
| 17 | PA8 | I/O | STM32L071KBU6 PA8 | USART1_CK,I2C3_SCL, MCO,EVENTOUT | 
| 18 | MCU_NRST | I/O | MCU reset (STM32L071KBU6 NRST) |  | 
| 19 | GND |  | Ground | Ground | 
| 20 | VDD |  | DC3V3 | Supply voltage 2.0~3.3V | 


##### LoRa Transceiver IC Connection to RAK4270 Internal STM32

| **LoRa IC Pin** | **STM32 GPIO**                   |
| ------------ | ----------------------------------- | 
| DIO1         | PB1                                 | 
| DIO2         | PB5                                 | 
| SPI1_SCK     | PA5                                 | 
| SPI1_MISO    | PA6                                 | 
| SPI1_MOSI    | PA7                                 | 
| SPI1_NSS     | PA4                                 |
| BUSY         | PB0                                 |
| NRESET       | PA0                                 |
| ANT_SW       | PA11                                |

##### RF Switch control logic table

|**ANT_SW**|**DIO2**|**Condition**|
|----------|--------|-------------|
|    1     |     0  |  RX mode    |
|    0     |     1  |  TX mode    |


::: tip 📝 Supplement
Set Dio2AsRfSwitchControl = false<br>
Set Dio3AsTxcoControl = enable
:::


#### RF Characteristics

##### Operating Frequencies


| Module    | Region        | Frequency |
| --------- | ------------- | --------- |
| RAK4270-LF | Europe        | EU433     |
|           | China         | CN470     |
| RAK4270-HF | Europe        | EU868     |
|           | North America | US915     |
|           | Australia     | AU915     |
|           | Korea         | KR920     |
|           | Asia          | AS923     |
|           | India         | IN865     |

#### Electrical Characteristics

##### Power Consumption

| Frequency   |  Output Power  |  Current  |
| ----------- | -------------- | --------- |
| 868MHz   |  21dBm   |  124mA on PA_BOOST  |
|    |  20 dBm    |  118mA on PA_BOOST|
|    |  17 dBm    |  102mA on PA_BOOST|
|    | 14 dBm    |  90mA on PA_BOOST|



#### Mechanical Characteristics

##### Dimensions

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/7.dimensions.jpg"
  width="50%"
  caption="RAK4270 Mechanical Dimensions"
/>

##### Recommended Footprint

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/8.pcb-footprint.png"
  width="50%"
  caption="RAK4270 Recommended PCB footprint"
/>



#### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/9.reflow.jpg"
  width="50%"
  caption="RAK4270 Recommended Reflow Profile"
/>


Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150℃): **1~2.5℃/sec**
- Soaking Time (T2) (150℃~180℃): **60sec~100sec**
- Peak Temperature (G): **230~250℃**
- Reflow Time (T3) (>220℃): **30~60 sec**
- Ramp-up Rate (B): 0~2.5℃/ sec
- Ramp-down Rate (C): 1~3℃/ sec

#### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/10.schematic.jpg"
  width="90%"
  caption="RAK4270 Schematic Diagram"
/>


### Software

Download the latest firmware of the RAK4270 WisDuo LPWAN Module as provided in the table below.

#### Firmware

| Model Source | Source |
| ------------ | ------ |
| RAK4270 | [Download](https://downloads.rakwireless.com/LoRa/RAK4270/Firmware/RAK4270_Latest_Firmware.zip) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
