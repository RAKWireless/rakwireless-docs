---
tags:
- datasheet
- wisduo
- RAK4270
prev: ../Low-Level-Development/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/CE%20Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/FCC%20Certification.zip]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/REACH%20168304609b%20001-212SVHCs.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/RoHS%20168304609a%20001.pdf]
  - [KC, https://downloads.rakwireless.com/LoRa/RAK4270/Certification-Report/RAK4270%28H%29_KC_cert.pdf]
---


# RAK4270 WisDuo LPWAN Module Datasheet

## Overview

### Description

The RAK4270 LoRa Module includes an **STM32L071 MCU** and an **SX1262** LoRa chip, which supports eight (8) spreading factors (SF5 ~ SF12) and signal bandwidth that can be adjusted between 7.8&nbsp;kHz to 500&nbsp;kHz. It has Ultra-Low Power Consumption of 2.31&nbsp;μA (down to 1.61&nbsp;μA @ 2.0&nbsp;V) in sleep mode, but during the Transmit Mode, it can reach the maximum output power of 22&nbsp;dBm. As a receiver, it can achieve a sensitivity of -148&nbsp;dBm.

The module complies with Class A and C of LoRaWAN 1.0.2 specifications, and it also supports LoRa Point to Point (P2P) communications. The module is suitable for various applications that require long-range data acquisition and low power consumption, such as smart meters, supply chain and logistics tracking, agricultural sensors, and smart cities.

You can configure the mode and operation of the RAK4270 module using [RAK4270 AT Commands](/Product-Categories/WisDuo/RAK4270-Module/AT-Command-Manual/) via a UART interface. Also, it offers low power features which is very suitable for battery powered applications.


### Product Features

- LoRa module is suitable for applications in Smart City, Smart Agriculture, Smart Industry
- Compact form factor: **15 x 15.5 x 2.5&nbsp;mm** (LxWxH)
- 20 pin stamp pad for PCB SMT board-to-board soldering
- I/O ports: **UART/I2C/GPIO/ADC**
- AT commands control interface
- Temperature range: **-30&nbsp;°C to +85&nbsp;°C**
- Supply voltage: **2.0 to 3.6&nbsp;V**
- **Supported bands**: (EU433, CN470, IN865, EU868, AU915, US915, KR920, and AS923)
- LoRa bandwidth range of 7.8&nbsp;kHz to&nbsp;500 kHz, SF5 to SF12, BR=0.018~62.5&nbsp;kb/s
- Ultra-Low Power Consumption of 2.31&nbsp;μA (down to 1.61&nbsp;μA @ 2.0&nbsp;V) in sleep mode
- Arm Cortex-M0+ 32-bit RISC core
- 128&nbsp;kbytes flash memory with ECC
- 20&nbsp;kbytes RAM
- 6&nbsp;kbytes of data EEPROM with ECC

<!--- Add regulation here --->



## Specifications

### Overview

The overview shows the module top view and its block diagram where the core and external interfaces of the module are shown.

#### Board Overview

Figure 1 shows the top view of the RAK4270 LoRa module. The dimensions of the module are 15 x 15.5 x 2.5&nbsp;mm

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/1.rak4270.png"
  width="50%"
  caption="RAK4270 Module"
/>


#### Block Diagram

The block diagram representing the RAK4270 LoRa module is shown in Figure 2. External interfaces are outlined in the diagram.

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/2.block-diagram.png"
  width="60%"
  caption="RAK4270 Module"
/>

### Hardware

The hardware specification discusses the interfaces, pinouts and its corresponding functions and diagrams. It also covers the parameters of RAK4270 Module in terms of RF, electrical, mechanical, and environmental characteristics. 

#### Interfaces

| Module | Interfaces   |
| ------ | ------------ |
| RAK4270 | UART1, UART2, I2C, GPIO|

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/6.pinout.png"
  width="60%"
  caption="RAK4270 Pinout"
/>
 
| Pin | Name          | Type | Description                                 | Alternate Functions                                                       |
| --- | ------------- | ---- | ------------------------------------------- | ------------------------------------------------------------------------- |
| 1   | PA3/UART2_RX  | I    | UART2 Interface (AT Commands)               | USART1_RX, I2C1_SDA                                                       |
| 2   | PA2/UART2_TX  | O    | UART2 Interface (AT Commands)               | MCO, USART1_TX, I2C1_SCL, I2C3_SMBA                                       |
| 3   | PA1           | I/O  | GPIO                                        | Reserved for internal use. Do not connect external circuit.               |
| 4   | PA9/UART1_TX  | I/O  | UART1 Interface (AT Commands and FW Update) | TIM21_CH1,TIM2_CH3, USART2_TX,LPUART1_TX, COMP2_OUT,COMP2_INM, ADC_IN2    |
| 5   | PA10/UART1_RX | I/O  | UART1 Interface (AT Commands and FW Update) | TIM21_CH2,TIM2_CH4, USART2_RX,LPUART1_RX, COMP2_INP,ADC_IN3               |
| 6   | PA12/UART1_DE | I/O  | GPIO                                        | EVENTOUT,TIM2_CH2,USART2_RT S_DE, TIM21_ETR, USART4_RX,COMP1_INP, ADC_IN1 |
| 7   | PA13/SWDIO    | I/O  | SWD debug pin (SWDIO)                       | SWDIO, LPUART1_RX                                                         |
| 8   | PA14/SWCLK    | I/O  | SWD debug pin (SWCLK)                       | SWCLK, USART2_TX, LPUART1_TX                                              |
| 9   | I2C_SCL       | I/O  | I2C interface                               | USART1_TX,I2C1_SCL, LPTIM1_ETR,COMP2_INP                                  |
| 10  | I2C_SDA       | I/O  | I2C interface                               | USART1_RX,I2C1_SDA, LPTIM1_IN2,USART4_CTS, COMP2_INP,VREF_PVD_IN          |
| 11  | GND           |      | Ground                                      |                                                                           |
| 12  | RF            | I/O  | RF port (reserved), default RF out by IPEX  |                                                                           |
| 13  | GND           |      | Ground                                      |                                                                           |
| 14  | GND           |      | Ground                                      |                                                                           |
| 15  | PA11/ANT_SW   | I/O  | ANT_SW                                      | *leave it unconnected on mainboard*                                       |
| 16  | PB4           | I/O  | GPIO                                        | Reserved for internal use. Do not connect external circuit.               |
| 17  | PA8           | I/O  | GPIO                                        | USART1_CK,I2C3_SCL, MCO,EVENTOUT                                          |
| 18  | MCU_NRST      | I/O  | MCU reset (STM32L071KBU6 NRST)              |                                                                           |
| 19  | GND           |      | Ground                                      | Ground                                                                    |
| 20  | VDD           |      | DC3V3                                       | Supply voltage 2.0~3.3&nbsp;V                                             |


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

##### RF Switch Control Logic table

|**ANT_SW**|**DIO2**|**Condition**|
|----------|--------|-------------|
|    1     |     0  |  RX mode    |
|    0     |     1  |  TX mode    |


::: tip 📝 Note
 - Set Dio2AsRfSwitchControl = false<br>
 - Set Dio3AsTxcoControl = enable
:::

##### SWD Programming Tool

To upgrade the firmware, the SWD (Serial Wire Debug) interface must be used. A 5-pin JLINK cable has to be connected to the SWD port. These pins are 3v3, GND, SWDIO, SWCLK, and MCU_NRST.


##### UARTS Ports

There are two UART ports on the RAK4270 module. UART2 (pin1 and pin2) can be used as the AT command port, while the UART1 (pin4 and pin5) can be used both as AT command port and firmware upgrade port. It is recommended to connect the UART2 port to an external MCU and reserve UART1 for debugging and or future firmware upgrade purposes.

##### I2C Port

The RAK4270 exposes an I2C port, in which the SDA line is assigned to the pin9, and the SCL line is assigned to pin10. This I2C port allows you to control additional slave sensors with the RAK4270 using I2C protocol. The RAK4270 will be the master. If the I2C port is used, then external pull-up resistors must be added to the SDA and SCL lines. The recommended value of the resistors is 10&nbsp;kΩ. You can develop your own firmware or use [RUI (RAKwireless Unified Interface) Online compiler](/RUI/) to use this port.

##### RF Port

The RAK4270 module exposes two types of RF antenna: IPEX and PAD. The most straightforward way is to use the IPEX antenna port. In such a case, you just connect the antenna to the IPEX connector on the module directly. On the other hand, for specific needs, you can design a PCB trace antenna, Chip antenna, SMA antenna, or spring type antenna. In the latter case, you should use the PAD type antenna port exposed by this module. The external antenna should be matched to the 50&nbsp;Ω RF transmission line.

##### VDD Power In

It is recommended to add four decoupling capacitors near the RAK4270 power supply pins. The recommended values of the capacitors are two 10&nbsp;uF and two 100&nbsp;nF connected in parallel.


<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/5.vdd-port.png"
  width="25%"
  caption="RAK4270 VDD port"
/>

#### RF Characteristics

##### Operating Frequencies


| Module    | Region        | Frequency |
| --------- | ------------- | --------- |
| RAK4270(L) | Europe        | EU433     |
|           | China         | CN470     |
| RAK4270(H) | Europe        | EU868     |
|           | North America | US915     |
|           | Australia     | AU915     |
|           | Korea         | KR920     |
|           | Asia          | AS923     |
|           | India         | IN865     |

#### Electrical Characteristics

##### Schematic Diagram


<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/10.schematic.png"
  width="100%"
  caption="RAK4270 Schematic Diagram"
/>


##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.0    | 3.3     | 3.45    | Volts (V) |

##### Operating Current

| Feature           | Condition | Minimum                             | Typical | Maximum | Unit |
| ----------------- | --------- | ----------------------------------- | ------- | ------- | ---- |
| Operating Current | TX Mode   | 35.4 (@&nbsp;1&nbsp;dBm SF7 868Mhz) |         |         | mA   |
|                   | RX Mode   | 15.8                                |         |         | mA   |

##### Sleep Current

| Feature             | Condition | Minimum (2.0V) | Typical (3.3V) | Maximum | Unit |
| ------------------- | --------- | -------------- | -------------- | ------- | ---- |
| Current Consumption | EU868     | 1.74           | 2.19           |         | μA   |
|                     | US915     | 1.61           | 2.31           |         | μA   |

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

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -30     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     |         | 85      | °C   |

##### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak4270-module/datasheet/9.reflow.jpg"
  width="50%"
  caption="RAK4270 Recommended Reflow Profile"
/>


Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150&nbsp;℃): **1~2.5&nbsp;℃/sec**
- Soaking Time (T2) (150~180&nbsp;℃): **60~100&nbsp;sec**
- Peak Temperature (G): **230~250&nbsp;℃**
- Reflow Time (T3) (>220&nbsp;℃): **30~60&nbsp;sec**
- Ramp-up Rate (B): **0~2.5&nbsp;℃/sec**
- Ramp-down Rate (C): **1~3&nbsp;℃/sec**

### Software

Download the latest firmware of the RAK4270 WisDuo LPWAN Module as provided in the table below.

#### Firmware

| Model   | Version   | Source                                                                                          |
| ------- | --------- | ----------------------------------------------------------------------------------------------- |
| RAK4270 | V3.3.0.15 | [Download](https://downloads.rakwireless.com/LoRa/RAK4270/Firmware/RAK4270_Latest_Firmware.zip) |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
