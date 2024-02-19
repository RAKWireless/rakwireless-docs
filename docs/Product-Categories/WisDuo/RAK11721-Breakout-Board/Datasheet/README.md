---
rak_desc: Provides comprehensive information about your RAK11721 Breakout Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak11721-breakout-board/RAK11721-Breakout.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisduo
  - RAK11721 Breakout Board
  - RAK11720
---

# RAK11721 Breakout Board Datasheet

## Overview

### Description

**RAK11721 Breakout Board** is specifically designed to allow easy access to the pins on the board to simplify development and testing. The breakout board footprint allows the RAK11720 stamp module pins to be accessible via 2.54&nbsp;mm headers.

The board itself has the **RAK11720** at its core, integrating an Ambiq Apollo3 Blue AMA3B1KK-KBR-B0 SoC MCU chip and a Semtech SX1262 LoRa transceiver. It has an ultra-low power consumption of 2.37&nbsp;µA in sleep mode.

This module complies with Class A, B, and C of LoRaWAN 1.0.3 specifications. It also supports LoRa Point-to-Point (P2P) communication mode, which helps you implement your own customized LoRa network quickly.

### Features

- Based on RAK11720
- Custom firmware using Arduino via RUI3 API
- I/O ports: UART/I2C/GPIO/SPI
- Serial Wire Debug (SWD) interface
- Module size: 25.4&nbsp;mm x 32.3&nbsp;mm
- Supply Voltage: 1.8&nbsp;V ~ 3.6&nbsp;V
- Temperature Range: -40°&nbsp;C ~ 85°&nbsp;C

## Specifications

### Overview

### Hardware

The hardware specification is categorized into five (5) parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters of the board, including the tabular data of the functionalities and standard values.

#### Interface

##### SWD Programming Interface

When programming via a RAKDAP1 or other ARM debugging tool, it is required to have the following four pins connected.

- 3V3
- SWDIO
- SWCLK
- GND

##### UART Interface

This board has two UART interfaces:

- UART0 (allows AT Commands and FW Update)
- UART1 (can allow AT commands if configured via RUI3 Serial Port Mode)

##### I2C and SPI Interface

Only one I2C and SPI interface of RAK11721:

- I2C
- SPI

#### Pin Definition

The tables below show the pin definition of the RAK11721 Breakout Board:

##### J5 Pin Definitions

| Pin No. | Name     | Description                                 | APOLLO3_BLUE Pin |
| :-----: | :------: | :-----------------------------------------: | :--------------: |
| 1       | SPI_MOSI | GPIO and SPI (MOSI) GP                      | GP7              |
| 2       | SPI_MISO | GPIO and SPI (MISO)                         | GP6              |
| 3       | SPI_CLK  | GPIO and SPI (CLK)                          | GP5              |
| 4       | SPI_CS   | GPIO and SPI (NSS)                          | GP1              |
| 5       | UART0_RX | UART0 Interface (AT Commands and FW Update) | GP40             |
| 6       | UART0_TX | UART0 Interface (AT Commands and FW Update) | GP39             |
| 7       | GND      | Ground                                      | -                |
| 8       | BOOT0    | Boot0 mode enable pin - high active         | GP41             |
| 9       | 3V3      | Power Supply                                | -                |

##### J4 Pin Definitions

| Pin No. | Name     | Description           | APOLLO3_BLUE Pin |
| :-----: | :------: | :-------------------: | :--------------: |
| 1       | I2C_SDA  | I2C interface         | GP25             |
| 2       | I2C_SCL  | I2C interface         | GP27             |
| 3       | RST      | MCU Reset             | -                |
| 4       | GND      | Ground                | -                |
| 5       | SWDIO    | SWD debug pin (SWDIO) | GP21             |
| 6       | SWCLK    | SWD debug pin (SWCLK) | GP20             |
| 7       | UART1_TX | UART1 Interface       | GP42             |
| 8       | UART1_RX | UART1 Interface       | GP43             |
| 9       | 3V3      | Power Supply          | -                |

#### RF Characteristics

The RAK11721 breakout board supports the LoRaWAN bands shown in the table below. When buying a RAK11721 board, pay attention to the correct module, RAK11721 (L) or RAK11721 (H) for your region, where L is for low-frequency regions. Take note that no suffix means high-frequency.

<table>
  <thead style="text-align:center;"><tr>
    <th>Module</th>
    <th>Region</th>
    <th>Frequency</th>
  </tr></thead>
<tbody  style="text-align:center;">
  <tr>
    <td rowspan = "2">RAK11721 (L)</td>
    <td>Europe</td>
    <td>EU433</td>
  </tr>
  <tr>
    <td>China</td>
    <td>CN470</td>
  </tr>
    <tr>
    <td rowspan = "7">RAK11721 (H)</td>
    <td>Europe</td>
    <td>EU868</td>
  </tr>
  <tr>
    <td>North America</td>
    <td>US915</td>
  </tr>
  <tr>
    <td>Australia</td>
    <td>AU915</td>
  </tr>
  <tr>
    <td>Korea</td>
    <td>KR920</td>
  </tr>
  <tr>
    <td>Asia</td>
    <td>AS923-1/2/3/4</td>
  </tr>
  <tr>
    <td>India</td>
    <td>IN865</td>
  </tr>
  <tr>
    <td>Russia</td>
    <td>RU864</td>
  </tr>
</tbody>
</table>

#### Electrical Characteristics

##### Power Consumption


| Feature           | Condition    | Typical                             | Unit |
| :---------------: | :----------: | :---------------------------------: | :--: |
| Operating Current | LoRa TX Mode | 87 @&nbsp;20&nbsp;dBm, 868&nbsp;MHz | mA   |
|                   | BLE TX Mode  | 12.7 @&nbsp;4.0&nbsp;dBm            | mA   |
| Sleep Current     | With Ch340   | 20                                  | uA   |

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit |
| :-----: | :-----: | :-----: | :-----: | :--: |
| VCC     | 1.8     | 3.3     | 3.6     | V    |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak11721-breakout-board/datasheet/schematic.png"
  width="100%"
  caption="RAK11721 Schematic Diagram"
/>

#### Mechanical Characteristics

<rk-img
  src="/assets/images/wisduo/rak11721-breakout-board/datasheet/dimensions.png"
  width="40%"
  caption="RAK11721 Mechanical Dimensions"
/>

### Firmware

Download the latest firmware of the RAK11721 Breakout Board provided below. RAK11721 (L) and RAK11721 (H) use the same firmware, and it will automatically detect the variant of the module being used.

| Model                    | Note                        | Source                                                                                                      |
| :----------------------: | :-------------------------: | :---------------------------------------------------------------------------------------------------------: |
| RAK11721 (.bin via UART) | (default baudrate = 115200) | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_Nonsecure_OTA_Package_UART.bin) |
| RAK11721 (.bin via BLE)  |                             | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_Nonsecure_OTA_Package_BLE.bin)  |
| RAK11721 (.hex)          |                             | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_final.hex)                      |
