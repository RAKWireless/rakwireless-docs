---
rak_desc: Provides comprehensive information about your RAK4200 Evaluation Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4200-evaluation-board/overview/RAK4200_Evaluation_home.png
tags:
  - datasheet
  - wisduo
  - RAK4200 Evaluation Board
prev: ../AT-Command-Manual/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200_FCC_Certification.zip]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_ISED_Certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_REACH_Certification.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4200/Certification-Report/RAK4200H_RoHS_Certification.pdf]

---

# RAK4200 Evaluation Board Datasheet

<!--
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/datasheet/rak4260-breakout.jpg"
  width="50%"
  caption="RAK4260 WisDuo LPWAN Breakout Module"
/>
-->

## Overview

### Description

**RAK4200 Evaluation Board** is a WisBlock product consisting of [RAK4200 WisDuo LPWAN Module](https://store.rakwireless.com/products/rak4200-lora-module) and RAK5005 Base Board. You can use this development board to access all serial and GPIO ports for easy configuration. RAK4200 includes an STM32L071KB MCU and an SX1276 LoRa transceiver. This evaluation board uses a RAK4200 module which is a LoRa module that has an Ultra-Low Power Consumption of 9.40&nbsp;μA (down to 1.08&nbsp;μA @ 2.0&nbsp;V) in sleep mode and high LoRa output power up to 19&nbsp;dBm max in work mode. The module complies with the LoRaWAN 1.0.2 specification. It also supports LoRa P2P (Point-to-Point) communications. The module is suitable for various applications that require long-range data acquisition and low power consumption.

### Features

* LoRa module for Smart City, Smart Agriculture, Smart Industry
* **I/O ports**: UART/I2C/GPIO/ADC
* **Temperature range**: -40&nbsp;°C to +85&nbsp;°C
* **Supply voltage**: 2.0 ~ 3.6&nbsp;V
* **Frequency range**: 863–870&nbsp;MHz (EU) / 902–928&nbsp;MHz (US), ISM and SRD systems
* Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;kHz Bandwidth
* Based on RAK4200 module with a sleep current consumption of 9.40&nbsp;μA (down to 1.08&nbsp;μA @ 2.0&nbsp;V)
* **Core**: STM32L071 ARM 32-bit Cortex M0+ with MPU
* Up to 128&nbsp;KB flash memory with ECC
* 20&nbsp;KB RAM
* 6&nbsp;KB of data EEPROM with ECC

## Specifications

### Overview

The RAK4200 Evaluation Board front view (top) and back view are shown in **Figure 1** and **Figure 2**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/21.0302_RAK4200 Evaluation Board.543.png"
  width="50%"
  caption="RAK4200 Evaluation Board front view"
/>

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/21.0302_RAK4200 Evaluation Board.544.png"
  width="50%"
  caption="RAK4200 Evaluation Board back view"
/>

### Hardware

The hardware specification is categorized into five parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the RF and electrical parameters that include the tabular data of the functionalities and standard values of the RAK4200 Evaluation Board.

#### Interfaces

RAK4201 is the WisBlock Core CPU module used on the RAK4200 Evaluation Board. **Figure 2** shows an overview of interfaces found on the RAK4200 Evaluation Board.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/rak4200-interfaces.svg"
  width="80%"
  caption="RAK4200 Evaluation Board Interface Overview"
/>

##### SWD Programming Interface

When programming via a DAPLink tool, it is required to have all of the following four (4) pins connected to your DAPLink tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**

:::tip 📝 NOTE:
For the aforementioned reason, it is best you leave these pins exposed for programming purposes and not to remap them as GPIOs.
:::

###### Flash the Firmware Using DAPLink and RAKDAP1

Refer to section [RAKDAP1-Flash-and-Debug-Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool)


Use **Figure 3** as a guide to connect RAKDAP1 on RAK4200 Evaluation Board.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/rak4200_dap.png"
  width="65%"
  caption="RAK4200 RAKDAP1 connection"
/>

##### RF Interface

The RF output pin of the RAK4200 Evaluation Board is connected to an external antenna through a standard iPEX antenna connector.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/lora-pcb-antenna.png"
  width="70%"
  caption="RAK4200 LoRa antenna"
/>

:::warning ⚠️ WARNING
Before powering the RAK4200 Evaluation Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

##### USB Interface 

The Micro-B USB connector is compliant with the USB 2.0 specification. The pin definition of the USB interface is shown below:

| **Pin Number** | **Pin Name** | **Description**             |
| -------------- | ------------ | --------------------------- |
| 1              | USB_VBUS     | (+5&nbsp;V) USB Bus Voltage |
| 2              | USB_DM       | USB Bus D+ positive pin     |
| 3              | USB_DP       | USB Bus D- negative pin     |
| 4              | NC           | Not connected               |
| 5              | GND          | Ground                      |


<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/microb-usb.png"
  width="25%"
  caption="RAK4200 Micro-B USB connector"
/>

The USB data bus is connected to a **USB-SERIAL CH340** chip. The **CH340** is a series of USB bus adapters, that provides a virtual serial interface over the USB bus.

#### Pin Definition


:::tip 📝 NOTE
The SWD pins PA13 and PA14 are reserved for STM MCU debugging and programming.
:::

The following tables below shows the pin definitions of the RAK4200 Evaluation Board:

##### J10, J11, J12 2.54&nbsp;mm header

##### J10 

| **Pin Number** | **Pin Name**  | **Description**                      | **Microcontroller Pin** |
| -------------- | ------------- | ------------------------------------ | ----------------------- |
| 1              | BOOT0         | Boot for ST MCU                      | Not connected           |
| 2              | VDD           | Power supply generated by CPU module |                         |
| 3              | TX1/USART2_TX | USART2 TX pin                        | PA2                     |
| 4              | RX1/USART2_RX | USART2 RX pin                        | PA3                     |


##### J11 

| **Pin Number** | **Pin Name**   | **Description**               | **Microcontroller Pin** |
| -------------- | -------------- | ----------------------------- | ----------------------- |
| 1              | AIN1/USART2_DE | ADC input signal              | PA1                     |
| 2              | IO1/USART1_DE  | General purpose IO            | PA12                    |
| 3              | IO2            | Power switch control of 3V3_S |                         |
| 4              | GND            | Ground                        |                         |

:::tip 📝 NOTE
3V3_S is another 3.3&nbsp;V power supply that can be controlled on/off by MCU. Set pin IO2=0 when the sensor is not in use to save power.
:::

##### LoRa Transceiver SX1276 Connection 

| **LoRa IC Pin** | **STM32 GPIO** |
| :-------------: | :------------: |
|      DIO0       |      PB0       |
|      DIO1       |      PB1       |
|      DIO2       |      PB5       |
|      DIO3       |      PB4       |
|    SPI1_CLK     |      PA5       |
|    SPI1_MISO    |      PA6       |
|    SPI1_MOSI    |      PA7       |
|     SPI1_CS     |      PA4       |
|     NRESET      |      PA0       |
|      VCTL1      |      PA11      |
|      VCTL2      |      PA8       |

##### LoRa Transceiver Mode

| **LoRa Mode** | **VCTL1/PA11** | **VCTL2/PA8** |
| :------------ | :------------: | :-----------: |
| TX mode       |       H        |       L       |
| RX mode       |       L        |       H       |

:::tip 📝 Logic Level Table
- H level (1.8 - 5.0&nbsp;V)<br>
- L level (0&nbsp;V)
:::

##### J12

| **Pin Number** | **Pin Name** | **Description**                      | **Microcontroller Pin** |
| -------------- | ------------ | ------------------------------------ | :---------------------: |
| 1              | GND          | Ground                               |                         |
| 2              | I2C1_SCL     | I2C clock pin                        |           PB6           |
| 3              | I2C1_SDA     | I2C data pin                         |           PB7           |
| 4              | VDD          | Power supply generated by CPU module |                         |


##### IO Module Connector

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/io-module-connector.png"
  width="35%"
  caption="RAK4200 IO Module Connector"
/>


| **Pin Number** | **Pin Name**   | **Description**                                                                                            | **Microcontroller Pin** |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | VBAT           | Not connected                                                                                              |                         |
| 2              | VBAT           | Not connected                                                                                              |                         |
| 3              | GND            | Ground                                                                                                     |                         |
| 4              | GND            | Ground                                                                                                     |                         |
| 5              | 3V3            | 3.3&nbsp;V power supply                                                                                    |                         |
| 6              | 3V3_S          | 3.3&nbsp;V power supply can be shutdown by CPU module                                                      |                         |
| 7              | USB+           | Not connected                                                                                              |                         |
| 8              | USB-           | Not connected                                                                                              |                         |
| 9              | VBUS           | Not connected                                                                                              |                         |
| 10             | SW1            | Not connected                                                                                              |                         |
| 11             | USART1_TX      | UART1 Interface (AT Commands and FW Update)                                                                | PA9                     |
| 12             | USART1_RX      | UART1 Interface (AT Commands and FW Update)                                                                | PA10                    |
| 13             | RESET          | Connected to the reset switch for MCU reset                                                                | PA0                     |
| 14             | LED1           | Red LED for battery charge indicator                                                                       |                         |
| 15             | LED2           | Green LED for custom use                                                                                   | Not connected           |
| 16             | LED3           | BLue LED for custom use                                                                                    | Not connected           |
| 17             | VDD            | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 18             | VDD            | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 19             | I2C1_SDA       | I2C data  pin                                                                                              | PB7                     |
| 20             | I2C1_SCL       | I2C clock pin                                                                                              | PB6                     |
| 21             | AIN0/USART1_DE | Analog Input for ADC                                                                                       |                         |
| 22             | AIN1/USART2_DE | Analog Input for ADC                                                                                       | PA1                     |
| 23             | NC             | Not connected                                                                                              |                         |
| 24             | NC             | Not connected                                                                                              |                         |
| 25             | SPI1_CS        | SPI chip select signal                                                                                     | Not connected           |
| 26             | SPI1_CLK       | SPI clock signal                                                                                           | PA5                     |
| 27             | SPI1_MISO      | SPI MISO signal                                                                                            | PA6                     |
| 28             | SPI1_MOSI      | SPI MOSI signal                                                                                            | PA7                     |
| 29             | IO1/USART1_DE  | General Purpose IO                                                                                         | PA12                    |
| 30             | IO2            | 3V3_S                                                                                                      |                         |
| 31             | IO3            | Not connected                                                                                              |                         |
| 32             | IO4            | Not Connected                                                                                              |                         |
| 33             | TX1/USART2_TX  | UART2 Interface (AT Commands)                                                                              | PA2                     |
| 34             | RX1/USART2_RX  | UART2 Interface (AT Commands)                                                                              | PA3                     |
| 35             | NC             | Not connected                                                                                              |                         |
| 36             | NC             | Not connected                                                                                              |                         |
| 37             | NC             | Not connected                                                                                              |                         |
| 38             | NC             | Not connected                                                                                              |                         |
| 39             | GND            | Ground                                                                                                     |                         |
| 40             | GND            | Ground                                                                                                     |                         |

##### Sensor Module Connector

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/sensor-module-connector.png"
  width="35%"
  caption="Sensor Module Connector"
/>

<b>Slot A</b>

| **Pin Number** | **Pin name**  | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | USART1_TX     | USART1 TX pin                                                                                  | PA9                     |
| 2              | GND           | Ground                                                                                         |                         |
| 3              | SPI1_CS       | SPI chip select signal                                                                         | Not connected           |
| 4              | SPI1_CLK      | SPI clock signal                                                                               | PA5                     |
| 5              | SPI1_MISO     | SPI MISO signal                                                                                | PA6                     |
| 6              | SPI1_MOSI     | SPI MOSI signal                                                                                | PA7                     |
| 7              | I2C1_SCL      | I2C clock                                                                                      | PB6                     |
| 8              | I2C1_SDA      | I2C data  pin                                                                                  | PB7                     |
| 9              | VDD           | Controlled by CPU module.<br>Used to power sensor board if the MCU IO level is not 3.3&nbsp;V  |                         |
| 10             | IO2           | Power switch control of 3V3_S                                                                  |                         |
| 11             | 3V3_S         | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 12             | IO1/USART1_DE | General Purpose IO                                                                             | PA12                    |
| 13             | NC            | Not connected                                                                                  |                         |
| 14             | 3V3_S         | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 15             | NC            | Not connected                                                                                  |                         |
| 16             | VDD           | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC            | Not connected                                                                                  |                         |
| 18             | NC            | Not connected                                                                                  |                         |
| 19             | NC            | Not connected                                                                                  |                         |
| 20             | NC            | Not connected                                                                                  |                         |
| 21             | NC            | Not connected                                                                                  |                         |
| 22             | NC            | Not connected                                                                                  |                         |
| 23             | GND           | Ground                                                                                         |                         |
| 24             | USART1_RX     | USART1 RX pin                                                                                  | PA10                    |

<b>Slot B</b>

| **Pin Number** | **Pin name**  | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------- | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC            | Not connected                                                                                  |                         |
| 2              | GND           | Ground                                                                                         |                         |
| 3              | SPI1_CS       | SPI Chip Select Pin                                                                            | Not connected           |
| 4              | SPI1_CLK      | SPI Clock signal                                                                               | PA5                     |
| 5              | SPI1_MISO     | SPI MISO signal                                                                                | PA6                     |
| 6              | SPI1_MOSI     | SPI MOSI signal                                                                                | PA7                     |
| 7              | I2C1_SCL      | I2C clock                                                                                      | PB6                     |
| 8              | I2C1_SDA      | I2C data  pin                                                                                  | PB7                     |
| 9              | VDD           | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO1/USART1_DE | General Purpose IO                                                                             | PA12                    |
| 11             | 3V3_S         | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 12             | IO2           | Power switch control of 3V3_S                                                                  |                         |
| 13             | NC            | Not connected                                                                                  |                         |
| 14             | 3V3_S         | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 15             | NC            | Not connected                                                                                  |                         |
| 16             | VDD           | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC            | Not connected                                                                                  |                         |
| 18             | NC            | Not connected                                                                                  |                         |
| 19             | NC            | Not connected                                                                                  |                         |
| 20             | NC            | Not connected                                                                                  |                         |
| 21             | NC            | Not connected                                                                                  |                         |
| 22             | NC            | Not connected                                                                                  |                         |
| 23             | GND           | Ground                                                                                         |                         |
| 24             | NC            | Not connected                                                                                  |                         |

<b>Slot C</b>

| **Pin Number** | **Pin name** | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC           | Not connected                                                                                  |                         |
| 2              | GND          | Ground                                                                                         |                         |
| 3              | SPI1_CS      | SPI Chip Select Pin                                                                            | Not connected           |
| 4              | SPI1_CLK     | SPI Clock Pin                                                                                  | PA5                     |
| 5              | SPI1_MISO    | SPI MISO signal                                                                                | PA6                     |
| 6              | SPI1_MOSI    | SPI MOSI signal                                                                                | PA7                     |
| 7              | I2C1_SCL     | I2C clock pin                                                                                  | PB6                     |
| 8              | I2C1_SDA     | I2C data  pin                                                                                  | PB7                     |
| 9              | VDD          | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO4          | General Purpose IO                                                                             |                         |
| 11             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                         |                         |
| 12             | IO5          | General Purpose IO                                                                             | Not connected           |
| 13             | NC           | Not connected                                                                                  |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                         |                         |
| 15             | NC           | Not connected                                                                                  |                         |
| 16             | VDD          | Controlled by CPU module.<br>Used to power sensor board if the MCU IO level is not 3.3&nbsp;V  |                         |
| 17             | NC           | Not connected                                                                                  |                         |
| 18             | NC           | Not connected                                                                                  |                         |
| 19             | NC           | Not connected                                                                                  |                         |
| 20             | NC           | Not connected                                                                                  |                         |
| 21             | NC           | Not connected                                                                                  |                         |
| 22             | NC           | Not connected                                                                                  |                         |
| 23             | GND          | Ground                                                                                         |                         |
| 24             | NC           | Not connected                                                                                  |                         |


<b>Slot D</b>

| **Pin Number** | **Pin name** | **Description**                                                                                            | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC           | Not connected                                                                                              |                         |
| 2              | GND          | Ground                                                                                                     |                         |
| 3              | SPI1_CS      | SPI Chip Select Pin                                                                                        | Not connected           |
| 4              | SPI1_CLK     | SPI Clock  Pin                                                                                             | PA5                     |
| 5              | SPI1_MISO    | SPI MISO signal                                                                                            | PA6                     |
| 6              | SPI1_MOSI    | SPI MOSI signal                                                                                            | PA7                     |
| 7              | I2C1_SCL     | I2C clock pin                                                                                              | PB6                     |
| 8              | I2C1_SDA     | I2C data pin                                                                                               | PB7                     |
| 9              | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO6          | General Purpose IO                                                                                         |                         |
| 11             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                                     |                         |
| 12             | IO5          | General Purpose IO                                                                                         |                         |
| 13             | NC           | Not connected                                                                                              |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                                     |                         |
| 15             | NC           | Not connected                                                                                              |                         |
| 16             | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC           | Not connected                                                                                              |                         |
| 18             | NC           | Not connected                                                                                              |                         |
| 19             | NC           | Not connected                                                                                              |                         |
| 20             | NC           | Not connected                                                                                              |                         |
| 21             | NC           | Not connected                                                                                              |                         |
| 22             | NC           | Not connected                                                                                              |                         |
| 23             | GND          | Ground                                                                                                     |                         |
| 24             | NC           | Not connected                                                                                              |                         |


##### Battery Connector

The RAK5005 WisBase board can be powered by a battery via a P1 connector, and the battery is not included on the RAK4200 Evaluation Board packaging.

Use **Figure 8** as a guide to connect the battery. The red triangle indicates pin 1.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/rak4200-p1.png"
  width="60%"
  caption="RAK4200 EVB battery connector"
/>

The pin definition of the RAK600 Evaluation Board Li-Ion battery connector is shown in the table below. The matching connector for the battery wires is an [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199).

P1 Battery connector

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | GND          | Ground                        |
| 2       | VBAT         | Positive + pin of the battery |


The full specification of the RAK4200 Evaluation Board battery is shown in the table below.


| **No.** | **Item**                  | **Specification**                    |
| ------- | ------------------------- | ------------------------------------ |
| 1       | Charge Cut-off Voltage    | 4.2&nbsp;V                           |
| 2       | Nominal Voltage           | 3.7&nbsp;V                           |
| 3       | Discharge Cut-off Voltage | 2.75&nbsp;V                          |
| 4       | Typical Capacity          | 2650&nbsp;mAh                        |
| 5       | Max Discharge Current     | 0.5&nbsp;C at 25&nbsp;℃ to 45&nbsp;℃ |
| 6       | PH Connector              | 2.0&nbsp;mm pitch                    |
| 7       | Cable Length              | 110.0±3.0&nbsp;mm                    |
| 8       | Cable Color               | Red: VBAT, Black: GND                |



:::tip 📝 NOTE
The voltage of the Li-Ion battery **must not exceed 4.3&nbsp;V**. When connecting the battery make sure the polarity is correct. Not all connectors are wired the same.
:::

##### Solar Panel Connector

A 5&nbsp;V solar panel can be connected to the board via a P2 connector to serve the purpose of charging the battery. The solar panel is not included on RAK4200 Evaluation Board packaging. Use **Figure 9** as a guide to connect the solar panel. The red triangle indicates pin 1.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/rak4200-p2.png"
  width="60%"
  caption="RAK4200 EVB solar connector"
/>

The pin definition of the RAK4200 Evaluation Board solar panel connector is shown in the table below. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287).

P2 Solar Panel connector

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | C0NN_5V      | Positive + pin of solar panel |
| 2       | GND          | GND                           |


The full specification of the Solar Panel for the RAK4200 Evaluation Board is shown in the table below.


| **No.** | **Item**        | **Specification**                                        |
| ------- | --------------- | -------------------------------------------------------- |
| 1       | Nominal Voltage | 5&nbsp;V                                                 |
| 2       | Typical Current | 80&nbsp;mA                                               |
| 3       | Size            | Length: 60&nbsp;mm, Width: 60&nbsp;mm, Height: 2&nbsp;mm |
| 4       | Connector       | 1.5&nbsp;mm pitch                                        |
| 5       | Cable Color     | Red: C0NN_5V, Black: GND                                 |

:::tip 📝 NOTE
The output of the solar panel **must not exceed 5.5&nbsp;V**. Otherwise, it may cause permanent damage to the board.
:::

##### LEDs

- 🔴 **Red LED** - connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.

##### RESET Button

The reset push button is connected to the NRST PA0 pin of the RAK4200. When pushed, it resets the MCU.

#### RF Requirements  
  
##### Operating Frequencies  

The RAK4200 has two different models based on its frequency: RAK4200(L) for low frequency and RAK4200(H) for high frequency.

|      **Model**      |  **Region**   | **Frequency (MHz)** |
| :-----------------: | :-----------: | :-----------------: |
| **RAK4200** **(L)** |    Europe     |        EU433        |
|                     |     China     |        CN470        |
| **RAK4200** **(H)** |     Asia      |        AS923        |
|                     |   Australia   |        AU915        |
|                     |    Europe     |        EU868        |
|                     |     Korea     |        KR920        |
|                     | North America |        US915        |
|                     |    Russia     |        RU864        |

#### Electrical Characteristics

##### Power Consumption

| Conditions                   | Current | Unit  |
| :--------------------------- | :-----: | :---: |
| Tx mode LoRa @17&nbsp;dBm    |   87    |  mA   |
| Tx mode LoRa @19&nbsp;dBm    |   120   |  mA   |
| Rx mode LoRa @37.5&nbsp;Kbps |   15    |  mA   |
   
##### Absolute Maximum Ratings

Exposure to maximum rating conditions may affect device reliability.

| Ratings                       | Maximum Value  | Unit |
| ----------------------------- | -------------- | ---- |
| VBUS power supply on USB port | -0.3 - 5.5     | V    |
| VBAT battery voltage          | -0.3 - 4.3     | V    |
| C0NN_5V solar panel voltage   | -0.3 - 5.5     | V    |
| IO connector                  | -0.3 - VDD+0.3 | V    |
| ESD                           | 2000           | V    |

#### Mechanical Characteristics

##### Board Dimensions
  
**Figure 10** shows the actual dimensions of the RAK4200 Evaluation Board measured in millimeters (mm). <br><br>

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/datasheet/rak4200-mechanical.png"
  width="100%"
  caption="RAK4200 Evaluation Board dimensions"
/>


### Software

Download the latest firmware of the RAK4200 Evaluation Board in the table provided.

:::tip 📝 NOTE:

The **bin file** contains the application code only and you need the RAK DFU Tool to upload this file to the module.

The **hex file** contains both the bootloader and the application code. You need to use STM32CubeProgrammer to upload this.

:::

#### Firmware 

| Model   | Source                                                                                          |
| ------- | ----------------------------------------------------------------------------------------------- |
| RAK4200 | [Download](https://downloads.rakwireless.com/LoRa/RAK4200/Firmware/RAK4200_Latest_Firmware.zip) |



## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

