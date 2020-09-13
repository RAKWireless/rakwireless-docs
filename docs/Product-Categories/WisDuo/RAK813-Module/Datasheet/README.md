---
tags:
- datasheet
- wisduo
prev: ../Overview/
---

# RAK813 BLE+LoRa Module Datasheet

<!---
<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/overview/RAK813.jpg"
  width="30%"
  caption="RAK813 Module"
/>
--->

## Overview

### Description

The **RAK813** is a combination of the BLE and LoRa in a single module. The BLE short-range technology combined with low-power LoRa can provide long-distance wireless communication capabilities. Both technologies are low power, eliminating the need to change batteries frequently.

At the same time, RAK813 supports various digital interfaces such as GPIO, UART, I2C, SPI, etc. which are used in connecting sensors to RAK813 module.

Based on the global leading Nordic Semiconductor Corporation's nRF52832 (BLE)
and Semtech's SX127x (LoRa) chipset, the RAK813 module provides a perfect
combination of ultra low power and ultra long distance.

The RAK813 module uses TCXO as the LoRa clock source, so at different temperatures (such as indoor and outdoor) LoRa module of radio frequency close to the maximum, can effectively
improve the decoding rate, so as to enhance the communication quality.

RAK813 supports various protocols, including the newest BLE and LoRaWAN, where customers can choose multi frequency, including: 433MHz, 470MHz, 868MHz, and 915MHz.

### Features

- Base on nRF52832(BLE) and SX127X (LoRa)
- Supports UART, SPI, I2C and GPIOs Interface.
- Small size and low power, sleep current down to 2uA
- High receiver sensitivity: LoRa down to -146dBm, BLE down to -96dBm
- Operates at Temperature of -40°C to 85 °C
- TX Power: LoRa adjustable up to +14dBm high efficiency PA, max PA boost up to 20dBm, BLE -20 to +4 dBm in 4 DB steps
- Building in both TX and RX filter
- Building in TCXO for high frequency stability
- Provides multiple band selection including 433/470/868/915 MHz for LoRa, and 2.4GHz for BLE
- Storage Temperature: -40°C to 85°C
- Supports LoRa Point to Point Communication in all the bands
- FSK, GFSK, and LoRa Technology modulation
- llP3 = -11dBm
- Up to 15 km coverage at suburban and up to 5 km coverage at urban area.

## Specifications

### Overview

The overview covers the RAK813 board overview with its corresponding outer dimensions. It also includes the block diagram and the system diagram of the module.


#### Board Overview


<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/board-overview/rak813-board-dimension.png"
  width="40%"
  caption="RAK813 Board Dimensions"
/>

#### Block Diagram

The short-range technology nRF52832 (BLE) is paired with the Semtech's SX127x (LoRa) chipset making the RAK813 capable of long-distance wireless communication. 

<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/interfaces/block-diagram.png"
  width="80%"
  caption="RAK813 Block Diagram"
/>

#### System Diagram

<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/interfaces/system-diagram.png"
  width="80%"
  caption="System Diagram"
/>

### Hardware

The hardware specification is categorized into five parts. It discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK813 Module.


#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/pin-definition/rak813-pinout.png"
  width="70%"
  caption="Pin Out Diagram for RAK813"
/>

| Pin Number | Name           | Type | Description                      |
| ---------- | -------------- | ---- | -------------------------------- |
| 1          | GND            |      | Ground connection                |
| 2          | P0.24_IO       | I/O  | GPIO port                        |
| 3          | P0.25_LED2     | I/O  | GPIO port /LED                   |
| 4          | P0.26_LED1     | I/O  | GPIO port /LED                   |
| 5          | P0.27_KEY1     | I/O  | GPIO port /KEY                   |
| 6          | P0.28_UART_RXD | O    | UART Interface                   |
| 7          | P0.29_UART_TXD | I    | UART Interface                   |
| 8          | P0.30_UART_CTS | O    | UART Interface                   |
| 9          | P0.31_UART_RTS | I    | UART Interface                   |
| 10         | GND            |      | Ground connection                |
| 11         | VDD_nRF        | P    | BLE power voltage source input   |
| 12         | VDD_LoRa       | P    | LoRa power voltage source input |
| 13         | GND            | I/O  | Ground connections               |
| 14         | GND            | I/O  | Ground connections               |
| 15         | P0.02_AIN0     | I/O  | GPIO port/ADC input              |
| 16         | P0.03_AIN1     | I/O  | GPIO port/ADC input              |
| 17         | P0.04_AIN2     | I/O  | GPIO port/ADC input              |
| 18         | P0.21_nRESET   | I    | Reset trigger input              |
| 19         | GND            |      | Ground connection                |
| 20         | P0.15_I2C_SDA  | I/O  | GPIO port/I2C                    |
| 21         | P0.16_I2C_SCL  | I/O  | GPIO port/I2C                    |
| 22         | P0.17_SPI_CS   | I/O  | GPIO port/SPI                    |
| 23         | P0.18SPI_MISO  | I/O  | GPIO port/SPI                    |
| 24         | P0.19_SPI_MOSI | I/O  | GPIO port/SPI                    |
| 25         | P0.20_SPI_CLK  | I/O  | GPIO port/SPI                    |
| 26         | SWDCLK         | I/O  | Debug port                       |
| 27         | SWDIO          | I/O  | Debug port                       |
| 28         | GND            |      | Ground connection                |
| 29         | GND            |      | Ground connection                |
| 30         | LORA_ANT       |      | RF I/O port                      |
| 31         | GND            |      | Ground connection                |
| 32         | GND            |      | Ground connection                |
| 33         | BLE_ANT        | I/O  | RF I/O port                      |

#### RF Characteristics

##### LoRa

| Characteristics         | Condition | Minimum | Typical | Maximum | Unit |
| ----------------------- | --------- | ------- | ------- | ------- | ---- |
| **LoRa Transmit**       | TX Power  |         | 14      | 20      | dBm  |
| **LoRa RX Sensitivity** | RSSI      | -130    |         |         | dBm  |
|                         | SNR       | -15     |         |         | dB   |

##### BLE

| Characteristics        | Condition   | Minimum | Typical | Maximum | Unit |
| ---------------------- | ----------- | ------- | ------- | ------- | ---- |
| **BLE Transmit**       | TX Power    |         | 0       | 4       | dBm  |
| **BLE RX Sensitivity** | Sensitivity | -97     |         |         | dBm  |

#### Electrical Characteristics

##### Recommended Operation Rating

|     | Minimum | Typical | Maximum | Unit |
| --- | ------- | ------- | ------- | ---- |
| VCC | 3.15    | 3.3     | 3.45    | V    |

##### Current Consumption

| Condition  | Minimum     | Typical | Maximum | Unit |
| ---------- | ----------- | ------- | ------- | ---- |
| TX Mode    | 30 (14 dBm) |         |         | mA   |
| RX Mode    | 5.5         |         |         | mA   |
| Sleep Mode | 7.2         |         |         | uA   |

#### Mechanical Characteristics


<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/mechanical-dimension/veq8asjwdqh1rpm9fape.png"
  width="65%"
  caption="Mechanical Dimensions of RAK813"
/>

#### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak813-module/datasheet/reflow-profile/reflow-profile.png"
  width="70%"
  caption="Reflow Profile for RAK813"
/>

## Models / Bundles

### Ordering Information

| Model Name | Operation Frequency       | Output Power |
| ---------- | ------------------------- | ------------ |
| RAK813-HF  | 865-870 MHz / 920~928 MHz | 5-20 dBm     |
| RAK813-LF  | 433-435 MHz / 470~510 MHz | 5-20 dBm     |
