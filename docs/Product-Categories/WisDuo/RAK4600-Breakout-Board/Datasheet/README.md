---
rak_desc: Provides comprehensive information about your RAK4600 Breakout Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4600-breakout-board/quickstart/main/RAK4600-Breakout.png
tags:
  - datasheet
  - wisduo
  - RAK4600 Breakout Board
prev: ../Quickstart/
---

# RAK4600 Breakout Board Datasheet



## Overview

### Description

**RAK4600 Breakout Board** is specifically designed to allow easy access to the pins on the board to simplify development and testing. The breakout board is based on the **XBee form factor**, and its main purpose is to allow the RAK4600 stamp module form factor pinout to be transferred to 2.54&nbsp;mm headers.

The board itself has the RAK4600 at its core, integrating an **nRF52832 MCU** and an **SX1276 LoRa chip**. It has Ultra-Low Power Consumption of 13.3&nbsp;μA (down to 11.2&nbsp;μA @ 2.0&nbsp;V) in sleep mode, high LoRa max output power (20&nbsp;dBm) in work mode, and BLE output power up to 4&nbsp;dBm.

The board complies with **LoRaWAN 1.0.2 specification**. It also supports Lora P2P Point-to-Point communication.

The RF communication capabilities of the board (LoRa + BLE) make it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, and personal area networks applications (health/fitness sensors and monitors).

### Features

- LoRa module for Smart City, Smart Agriculture, Smart Industry
- I/O ports: **UART/I2C/GPIO** (optional NFC interface)
- Frequency range: **863–923&nbsp;MHz** (entire LoRa high band spectrum)
- Low-Power Wireless Systems with **7.8&nbsp;kHz** to **500&nbsp;kHz** Bandwidth
- LoRa Tx power up to **20&nbsp;dBm**
- BLE 5.0 (Tx power -20&nbsp;dBm to +4&nbsp;dBm in 4&nbsp;dB steps)
- Serial Wire Debug (SWD) interface
- Ultra-Low Power Consumption of 13.3&nbsp;μA (down to 11.2&nbsp;μA @ 2.0&nbsp;V) in sleep mode
- Supply voltage: **2.0 ~ 3.6&nbsp;V**
- Temperature range: **-40&nbsp;°C to +85&nbsp;°C**

## Specifications

### Overview

The RAK4600 Breakout Board is shown in **Figure 1** which displays the top view of the module.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/board-overview/cwr7pftlffhyogeuzahz.svg"
  width="25%"
  caption="RAK4600 Breakout Board Illustration"
/>

### Hardware

Hardware specification is categorized into five parts. It covers the interfacing, pinouts and their corresponding functions and diagrams. It also covers the RF and electrical parameters that include the tabular data of the functionalities and standard values of the RAK4600 Breakout Board.


#### Interfaces

##### SWD Programming Interface

Connect the four debug/programming SWD pins of the board to the RAKDAP1 adapter:

1. **VDD**
2. **SWDIO**
3. **SWCLK**
4. **GND**

:::tip 📝 NOTE:
For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs.
:::

##### UART Port

There is one UART interface on the RAK4600 Breakout Board:

- **USART1** – recommended for debugging/firmware update

##### I2C interface

The following pins are intended for I2C (_require 10k resistance pull-up_):

- **I2C_SCL**
- **I2C_SDA**

##### RF interface

Both are utilizing an I-PEX connector, where one is for the LoRa antenna and the other for the BLE.

##### NFC interface

Two physical pins can be configured either as NFC antenna pins (factory default) or as GPIOs. When configured as NFC antenna pins, the GPIOs on those pins will automatically be set to DISABLE state and a protection circuit will be enabled to prevent the chip from being damaged in the presence of a strong NFC field. The protection circuit will short the two pins together if the voltage difference exceeds approximately 2&nbsp;V.

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/pin-definition/RAK4600 Breakout Board Pinout.svg"
  width="75%"
  caption="RAK4600 Breakout Board Pinout"
/>

The pin definitions of the RAK4600 Breakout Board are shown in the following tables below:

##### J7 Pin Definitions

| **Pin** | **Name** | **I/O** | **Description**                              | **Alternate functions**                                 |
| ------- | -------- | ------- | -------------------------------------------- | ------------------------------------------------------- |
| 1       | P0.18    | I/O     | GPIO NRF52832 P0.18                          | GPIO, Single wire output, Trace port output             |
| 2       | P0.19    | I/O     | GPIO NRF52832 P0.19                          | GPIO                                                    |
| 3       | NFC1     | I/O     | NFC antenna connection GPIO (NRF52832 P0.09) | NFC antenna connection<br>GPIO                          |
| 4       | NFC2     | I/O     | NFC antenna connection GPIO (NRF52832 P0.10) | NFC antenna connection<br>GPIO                          |
| 5       | SWDIO    | I/O     | SWD Programming                              | Serial wire debug I/O for debug and programming         |
| 6       | SWCLK    | I/O     | SWD Programming                              | Serial wire debug clock input for debug and programming |
| 7       | I2C_SCL  | I/O     | I2C (GPIO NRF52832 P0.12)                    | GPIO                                                    |
| 8       | I2C_SDA  | I/O     | I2C (GPIO NRF52832 P0.13)                    | GPIO                                                    |

##### J8 Pin Definitions

| **Pin** | **Name**  | **I/O** | **Description**                 | **Alternate Functions**                    |
| ------- | --------- | ------- | ------------------------------- | ------------------------------------------ |
| 1       | VDD       |         | DC 3V3                          | Supply voltage 2.0~3.3&nbsp;V<sub>DC</sub> |
| 2       | USART1_TX | I/O     | USART1_TX (GPIO NRF52832 P0.23) | GPIO                                       |
| 3       | USART1_RX | I/O     | USART1_RX (GPIO NRF52832 P0.22) | GPIO                                       |
| 4       | GND       |         | Ground                          |                                            |
| 5       | MCU_NRST  | I/O     | MCU reset (GPIO NRF52832 P0.03) | GPIO, Configurable as reset pin            |
| 6       | Reserved  | I/O     | Reserved (GPIO NRF52832 P0.14)  | GPIO, Trace port output                    |
| 7       | Reserved  | I/O     | Reserved (GPIO NRF52832 P0.17)  | GPIO                                       |
| 8       | GND       | I/O     | Ground                          |                                            |

##### J4 Pin Definitions

| **Pin** | **Name** | **I/O** | **Description** | **Alternate Functions**                    |
| ------- | -------- | ------- | --------------- | ------------------------------------------ |
| 1       | GND      |         | Ground          |                                            |
| 2       | VDD      |         | DC 3V3          | Supply voltage 2.0~3.3&nbsp;V<sub>DC</sub> |


##### LoRa Transceiver IC Connection to RAK4600 Breakout Board

| **LoRa IC Pin** | **NRF52832 IO pin** |
| :-------------: | :-----------------: |
|      DIO0       |        P0.27        |
|      DIO1       |        P0.28        |
|      DIO2       |        P0.29        |
|      DIO3       |        P0.30        |
|      DIO4       |        P0.31        |
|      DIO5       |         NC          |
|    SPI1_CLK     |        P0.07        |
|    SPI1_MISO    |        P0.06        |
|    SPI1_MOSI    |        P0.05        |
|    SPI1_NSS     |        P0.04        |
|      VCTL1      |        P0.16        |
|      VCTL2      |        P0.15        |


::: tip 📝 NOTE
The LoRa Transceiver IC Connection pins are not exposed.
:::

##### RF Switch Control Logic Table

| **LoRa Mode** | **VCTL1 GPIO** | **VCTL2 GPIO** |
| :------------ | :------------: | :------------: |
| TX mode       |       H        |       L        |
| RX mode       |       L        |       H        |

:::tip 📝 Logic Level
H level (1.8&nbsp;V - 3.30&nbsp;V)<br>
L level (0&nbsp;V)
:::

#### RF Characteristics

##### Operating Frequencies

The RAK4600 Breakout Board supports the following LoRa bands:

| **Module**      | **Region**    | **Frequency** |
| --------------- | ------------- | ------------- |
| **RAK4600 (H)** | Russia        | RU864         |
|                 | India         | IN865         |
|                 | Europe        | EU868         |
|                 | North America | US915         |
|                 | Australia     | AU915         |
|                 | Korea         | KR920         |
|                 | Asia          | AS923         |

#### Electrical Characteristics

##### Power Consumption

The table below shows the power consumption of the RAK4600 Breakout Board:

| **Item**                        | **Power Consumption** | **Condition**                  |
| ------------------------------- | --------------------- | ------------------------------ |
| Tx mode LoRa @20&nbsp;dBm       | 125&nbsp;mA           | LoRa @ PA_BOOST & BT sleep     |
| Tx mode LoRa @17&nbsp;dBm       | 92&nbsp;mA            | LoRa @ PA_BOOST & BT sleep     |
| Tx mode BT @4&nbsp;dBm          | 9&nbsp;mA             | BT Tx mode & LoRa sleep        |
| Rx mode LoRa<br>@37.5&nbsp;Kbps | 17&nbsp;mA            | LoRa @ Receive mode & BT sleep |
| Rx mode BT @2&nbsp;Mbps         | 11.5&nbsp;mA          | BT Rx mode & LoRa sleep        |

##### Sleep Current

| Feature             | Condition | Minimum (2.0&nbsp;V) | Typical (3.3&nbsp;V) | Maximum | Unit |
| ------------------- | --------- | -------------------- | -------------------- | ------- | ---- |
| Current Consumption | EU868     | 11.2                 | 13.3                 |         | μA   |
|                     | US915     | 11.5                 | 12.5                 |         | μA   |

#### Schematic Diagram


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/datasheet/schematic-diagram/RAK4600_breakoutborad_schematic.png"
  width="100%"
  caption="RAK4600 Breakout Board Schematic"
/>

### Software

Download the latest firmware of the RAK4600 Breakout Board in the table provided.

#### Firmware

| Model   | Version  | Source                                                                                          |
| ------- | -------- | ----------------------------------------------------------------------------------------------- |
| RAK4600 | 3.4.0.14 | [Download](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/RAK4600_Latest_Firmware.zip) |

