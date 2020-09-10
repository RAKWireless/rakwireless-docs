---
tags:
  - datasheet
  - wisduo
prev: ../Quickstart/
---

# RAK4600 Breakout Board Datasheet

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/overview/xfnxl2vaseqi9anuveom.jpg"
  width="60%"
  caption="RAK4600 Breakout Board"
/>
--->

## Overview

### Description

**RAK4600 Breakout Board** is specifically designed to allow easy excess to the pins on the board in order to simplify development and testing. The breakout board utilized is of an **Xbee form factor** and its main purpose is to allow the RAK4600 stamp module form factor pinout to be transferred to 2.54mm headers.

The board itself has the RAK4600 at its core, integrating an **nRF52832 MCU** and a **SX1276 LoRa® chip**. It has Ultra-Low Power Consumption of 2.0uA in sleep mode, high LoRa® max output power (20dBm) in work mode, and BLE output power up to 4dBm.

The board complies with **LoRaWAN® 1.0.2 protocols**. It also supports Lora® Point to Point communication. 

The RF communication capabilities of the board (LoRa® + BLE) make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors and monitors, etc.).

### Features

- LoRa® module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/GPIO** (optional NFC interface)
- Frequency range: **863–923 MHz** (entire LoRa® high band spectrum)
- Low-Power Wireless Systems with **7.8kHz** to **500KHz** Bandwidth
- LoRa® Tx power up to **20dBm**
- BLE5.0 (Tx power -20 to +4 dBm in 4dB steps)
- Serial Wire Debug (SWD) interface
- Ultra-Low Power Consumption **2.0uA** in sleep mode
- Supply voltage: **2.0 ~ 3.6V**
- Temperature range: **-40°C to +85°C**

## Specifications

### Overview

The RAK4600 Breakout Board is shown in Figure 1 that displays the top view of the module.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/board-overview/cwr7pftlffhyogeuzahz.jpg"
  width="35%"
  caption="RAK4600 Breakout Board Illustration"
/>

### Hardware

Hardware specification is categorized into five parts that covers the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the RF and electrical parameters that include the tabular data of the functionalities and standard values of the RAK4600 Breakout Board.


#### Interfaces

##### SWD Programming Interface

When programming via a JLINK tool, it is required to have all of the following 5 pins connected to your JLINK tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**
5. **MCU_NRST**

::: tip Note:
:pencil: For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs
:::

##### UART Port

There are two UART interfaces on RAK4600 Breakout Board:

- **UART1** – recommended for debugging/firmware update
- **UART2** – recommended for external MCU connection.

##### I2C interface

The following pins are intended for I2C (_require 10k resistance pull-up_):

- **I2C_SCL**
- **I2C_SDA**

##### RF interface

Both are utilizing an IPEX connector, where one is for the LoRa® antenna and the other for the BLE.

##### NFC interface

Two physical pins can be configured either as NFC antenna pins (factory default), or as GPIOs, When configured as NFC antenna pins, the GPIOs on those pins will automatically be set to DISABLE state and a protection circuit will be enabled preventing the chip from being damaged in the presence of a strong NFC field. The protection circuit will short the two pins together if the voltage difference exceeds approximately 2V.

#### Pin Definition


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/pin-definition/bqiem8snfmmzg4hl3mk3.jpg"
  width="65%"
  caption="RAK4600 Breakout Board Pinout"
/>

The pin definitions of the RAK4600 Breakout Board are shown in the following tables below:

##### J7 Pin Definitions

| **Pin** | **Name**  | **I/O** | **Description**                              | **Alternate functions**                                 |
| ------- | --------- | ------- | -------------------------------------------- | ------------------------------------------------------- |
| 1       | UART2_RX  | I/O     | USART2_RX (GPIO NRF52832 p0.18)              | GPIO, Single wire output, Trace port output             |
| 2       | USART2_TX | I/O     | USART2_TX (GPIO NRF52832 p0.19)              | GPIO                                                    |
| 3       | NFC1      | I/O     | NFC antenna connection GPIO (NRF52832 p0.09) | NFC antenna connection<br>GPIO                          |
| 4       | NFC2      | I/O     | NFC antenna connection GPIO (NRF52832 p0.10) | NFC antenna connection<br>GPIO                          |
| 5       | SWDIO     | I/O     | SWD Programming                              | Serial wire debug I/O for debug and programming         |
| 6       | SWCLK     | I/O     | SWD Programming                              | Serial wire debug clock input for debug and programming |
| 7       | I2C_SCL   | I/O     | I2C (GPIO NRF52832 p0.12)                    | GPIO                                                    |
| 8       | I2C_SDA   | I/O     | I2C (GPIO NRF52832 p0.13)                    | GPIO                                                    |

##### J8 Pin Definitions

| **Pin** | **Name** | **I/O** | **Description**                 | **Alternate Functions**         |
| ------- | -------- | ------- | ------------------------------- | ------------------------------- |
| 1       | VDD      |         | DC3V3                           | Supply voltage 2.0~3.3VDC       |
| 2       | UART1_TX | I/O     | USART1_TX (GPIO NRF52832 p0.23) | GPIO                            |
| 3       | UART1_RX | I/O     | USART1_RX (GPIO NRF52832 p0.22) | GPIO                            |
| 4       | GND      |         | Ground                          |                                 |
| 5       | MCU_NRST | I/O     | MCU reset                       | GPIO, Configurable as reset pin |
| 6       | Reserved | I/O     | Reserved (GPIO NRF52832 p0.14)  | GPIO, Trace port output         |
| 7       | Reserved | I/O     | Reserved (GPIO NRF52832 p0.17)  | GPIO                            |
| 8       | GND      | I/O     | Ground                          |                                 |

##### J4 Pin Definitions

| **Pin** | **Name** | **I/O** | **Description** | **Alternate Functions**   |
| ------- | -------- | ------- | --------------- | ------------------------- |
| 1       | GND      |         | Ground          |                           |
| 2       | VDD      |         | DC3V3           | Supply voltage 2.0~3.3VDC |

#### RF Characteristics

##### Operating Frequencies

The RAK4600 Breakout Board supports the following LoRa® bands:

| **Module**      | **Region**    | **Frequency** |
| --------------- | ------------- | ------------- |
| **RAK4600 (H)** | Russia        | RU864         |
|                 | Indian        | IN865         |
|                 | Europe        | EU868         |
|                 | North America | US915         |
|                 | Australia     | AU915         |
|                 | Korea         | KR920         |
|                 | Asia          | AS923         |

#### Electrical Characteristics

##### Power Consumption

The table below shows the power consumption of RAK4600 Breakout Board:

| **Item**                   | **Power<br>Consumption** | **Condition**                   |
| -------------------------- | ------------------------ | ------------------------------- |
| Tx mode LoRa® @20dBm       | 125mA                    | LoRa® @ PA_BOOST & BT sleep     |
| Tx mode LoRa® @17dBm       | 92mA                     | LoRa® @ PA_BOOST & BT sleep     |
| Tx mode LoRa® @14dBm       |                          | LoRa® @ RFO & BT sleep          |
| Tx mode BT@4dBm            | 9mA                      | BT Tx mode & LoRa® sleep        |
| Rx mode LoRa®<br>@37.5Kbps | 17mA                     | LoRa® @ Receive mode & BT sleep |
| Rx mode BT@2Mbps           | 11.5mA                   | BT Rx mode & LoRa® sleep        |
| Sleep mode                 | 2.0uA                    | LoRa® & BT sleep                |

#### Schematic Diagram

The RAK4600 Breakout Board circuit is shown below:

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/schematic-diagram/tyd3goloywnp7wbiflva.jpg"
  width="100%"
  caption="RAK4600 Breakout Board Schematic"
/>

### Software

Download the latest firmware of the RAK4600 Breakout Board in the table provided.

#### Firmware

| Model   | Version  | Source                                                                                   |
| ------- | -------- | ---------------------------------------------------------------------------------------- |
| RAK4600 | V3.0.0.8 | [Download](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/RAK4600_V3.0.0.8.rar) |
