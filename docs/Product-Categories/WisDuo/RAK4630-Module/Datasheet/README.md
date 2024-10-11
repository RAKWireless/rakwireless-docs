---
rak_desc: Provides comprehensive information about your RAK4630 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4630-module/RAK4630-Module.png
prev: ../DFU/
next: false
tags:
  - datasheet
  - RAK4630
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_FCC_Certification.zip]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_ISED_Certification.pdf]
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_KC_Certification.pdf]
  - [RCM, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RCM_Certification.pdf]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_REACH_Report.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630_RAK4631_RoHS_Report.pdf]

---

# RAK4630 WisBlock LPWAN+BLE Module Datasheet


## Overview

### Description

The RAK4630 is a low-power, long-range transceiver module featuring the Nordic nRF52840 MCU, which supports Bluetooth 5.0 (Bluetooth Low Energy) and the latest SX1262 LoRa transceiver from Semtech. This module adheres to Class A, B, & C specifications of LoRaWAN 1.0.3 and also facilitates LoRa Point-to-Point (P2P) communication mode, enabling rapid implementation of custom LoRa networks. 

With its dual RF communication capabilities (LoRa + BLE), the module is well-suited for diverse IoT applications including home automation, sensor networks, building automation, and various IoT network scenarios.

The default firmware of the RAK4630 is built on RUI3 (RAKwireless Unified Interface), which simplifies using the RAK4630 as a standalone module by enabling the development of custom firmware through RUI APIs. This setup allows direct interfacing with sensors and other external peripherals without requiring an additional MCU. Additionally, the RAK4630 can communicate with an external host MCU using AT commands via USB, UART, or BLE connection.

### Features

- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: IN865, EU868, AU915, US915, KR920, RU864, and AS923
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy-to-use AT Command set via UART interface
- TCXO crystal for LoRa chip
- IO ports: UART, I2C, GPIO, USB
- Temperature range: -40°&nbsp;C to +85°&nbsp;C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;kHz bandwidth
- Ultra-Low Power Consumption 4.23&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- BLE 5.0 (Tx power -20 to +4&nbsp;dBm in 4&nbsp;dB steps)
- Serial Wire Debug (SWD) interface
- Module size: 15&nbsp;mm x 23&nbsp;mm x 3&nbsp;mm

## Specifications

### Overview

### Hardware

The hardware specification is categorized into three parts, covering the RF, electrical, and mechanical parameters. This includes tabular data detailing the functionalities and standard values of the RAK4630 WisBlock LPWAN Module.

#### Interfaces

| Module  | Interfaces |
| :-----: | :--------: |
| RAK4630 | USB, UART1 |

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/RAK4630_Pinout.svg"
  width="60%"
  caption="RAK4630 module pinout diagram"
/>

:::warning ⚠️ WARNING
When using `RF_LoRa` and `RF_BT` pins for antenna and not the IPEX connector variant, there are design considerations to make sure optimum RF performance.

- RF trace must be away from interference (switching node of DC-DC supply, high current/voltage pulses from controllers of inductive load like motor, signal generators, etc.)
- RF trace must have 50&nbsp;Ohms impedance. It is advisable to use an impedance simulation software tool to achieve this requirement.
- If using an external antenna connector, make it close to the `RF_LoRa` and `RF_BT` pins.
- Ground plane optimization is critical on certain antenna types like monopole.
- GND trace used for RF path return must be directly connected to the GND plane and not be treated as thermal relief.
- It is recommended for the RF trace to be routed in a curve and not in a sharp 90&nbsp;degrees.

In addition, with a commitment to making IoT easy, RAK offers a dedicated service for [Antenna RF Design](https://store.rakwireless.com/products/antenna-rf-design-service-including-pcb-design-tuning-matching-and-rf-test) which includes PCB design, tuning, matching, and RF testing.
:::

| **Pin No.** | **Name**                        |
| :---------: | :-----------------------------: |
| 1           | VBUS                            |
| 2           | USB-                            |
| 3           | USB+                            |
| 4           | P0.13/I2C_SDA                   |
| 5           | P0.14/I2C_SCL                   |
| 6           | P0.15/UART2_RX                  |
| 7           | P0.16/UART2_TX                  |
| 8           | P0.17/UART2_DE                  |
| 9           | P0.19/UART1_RX (AT Command)     |
| 10          | P0.20/UART1_TX (AT Command)     |
| 11          | P0.21/UART1_DE                  |
| 12          | P0.10/NFC2                      |
| 13          | P0.09/NFC1                      |
| 14          | GND                             |
| 15          | RF_BT                           |
| 16          | GND                             |
| 17          | NRF_RESET                       |
| 18          | SWDCLK                          |
| 19          | SWDIO                           |
| 20          | VBAT_SX                         |
| 21          | VBAT_IO_SX                      |
| 22          | GND                             |
| 23          | P0.24/I2C_SDA_2                 |
| 24          | P0.25/I2C_SCL_2                 |
| 25          | P1.01/SW1                       |
| 26          | P1.02/SW2                       |
| 27          | P1.03/LED1                      |
| 28          | P1.04/LED2                      |
| 29          | P0.03/QSPI_CLK                  |
| 30          | P0.02/QSPI_DIO3                 |
| 31          | P0.28/QSPI_DIO2                 |
| 32          | P0.29/QSPI_DIO1                 |
| 33          | P0.30/QSPI_DIO0                 |
| 34          | P0.26/QSPI_CS                   |
| 35          | GND                             |
| 36          | GND                             |
| 37          | RF_LoRa                         |
| 38          | GND                             |
| 39          | P0.31/AIN7                      |
| 40          | P0.05/AIN3                      |
| 41          | P0.04/AIN2                      |
| 42          | GND                             |
| 43          | VDD_NRF                         |
| 44          | VBAT_NRF                        |

##### Setup of the SX1262

Information for writing custom firmware for the RAK4630 includes details about the internal connections between the RAK4630 and the necessary initialization parameters for the SX1262 LoRa Transceiver.

| nRF52840 GPIO	| SX1262 Pin | function                          |
| :-----------: | :--------: | :-------------------------------: |
| P1.10         | NSS        | SPI NSS                           |
| P1.11         | SCK        | SPI CLK                           |
| P1.12         | MOSI       | SPI MOSI                          |
| P1.13         | MISO       | SPI MISO                          |
| P1.14         | BUSY       | BUSY signal                       |
| P1.15         | DIO1       | DIO1 event interrupt              |
| P1.06         | NRESET     | NRESET manual reset of the SX1262 |

Important for a successful SX1262 initialization:
- Set up DIO2 to control the antenna switch.
- Set up DIO3 to control the TCXO power supply.
- Set up the SX1262 to use it's DCDC regulator and not the LDO.
- The RAK4630 schematics show GPIO P1.07 connected to the antenna switch, but it should not be initialized, as DIO2 will control the antenna switch.

#### RF Characteristics

When purchasing a RAK4630 module, it's essential to specify the correct core module RAK4630 H/L for your region, where H indicates high-frequency regions, and L indicates low-frequency regions. The RAK4630 module supports LoRaWAN bands as outlined in the table below.

:::tip 📝 NOTE
Detailed information about the RAK4630 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/#LoRa/WisBlock/Accessories/).
:::

| Region        | Frequency (MHz)  | Core Module |
| :-----------: | :--------------: | :---------: |
| India         | IN865            | RAK4630(H)  |
| Europe        | EU868            | RAK4630(H)  |
| Europe        | EU433            | RAK4630(L)  |
| North America | US915            | RAK4630(H)  |
| Canada        | US915            | RAK4630(H)  |
| Australia     | AU915            | RAK4630(H)  |
| Korea         | KR920            | RAK4630(H)  |
| Asia          | AS923-1/2/3/4    | RAK4630(H)  |
| China         | CN470            | RAK4630(L)  |

#### Electrical Characteristics

##### Power Consumption

| **Item**                                 | **Current Average** | **Condition - Voltage and Dwell Time** |
| :--------------------------------------: | :-----------------: | :------------------------------------: |
| RAK4630 Module in One-Time Sleep         | 4.42&nbsp;uA        | 3.3V 10seconds                         |
| RAK4630 Module System up in Idle mode    | 3.35&nbsp;mA        | 3.3V 10seconds                         |
| RAK4630 Module in LoRaWAN One-Time Sleep | 4.23&nbsp;uA        | 3.3V 10seconds                         |
| RAK4630 Module 15 Bytes Data TX Sending  | 67.8&nbsp;mA        | 3.6V 1second (in RAK5005-O board)      |
| RAK4630 Module in RX Window Received     | 2.22&nbsp;mA        | 3.6V 1second (in RAK5005-O board)      |

##### Absolute Maximum Ratings

| **Symbol** | **Description**               | **Min.** | **Nom.** | **Max.** | **Unit** |
| :--------: | :---------------------------: | :------: | :------: | :------: | :------: |
| VBAT_SX    | LoRa chip supply voltage      | -0.5     |          | 3.9      | V        |
| VBAT_SX_IO | LoRa chip supply for I/O pins | -0.5     |          | 3.9      | V        |
| VDD_NRF    | MCU power supply              | -0.3     |          | 3.9      | V        |
| VBUS       | USB supply voltage            | -0.3     |          | 5.8      | V        |
| VBAT_NRF   | MCU high voltage power supply | -0.3     |          | 5.8      | V        |


##### Recommended Operating Conditions

| **Symbol** | **Description**                    | **Min.** | **Nom.** | **Max.** | **Unit** |
| :--------: | :--------------------------------: | :------: | :------: | :------: | :------: |
| VBAT_SX    | SX1262 supply voltage              | 2.0      | 3.3      | 3.7      | V        |
| VBAT_SX_IO | SX1262 supply for I/O pins         | 2.0      | 3.3      | 3.7      | V        |
| VDD_NRF    | NRF52840 power supply              | 2.0      | 3.3      | 3.6      | V        |
| VBUS       | VBUS USB supply voltage            | 4.35     | 5.0      | 5.5      | V        |
| VBAT_NRF   | NRF52840 high voltage power supply | 2.5      |          | 5.5      | V        |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/schematic-1.png"
  width="95%"
  caption="SX1262 Section"
/>

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/schematic-2.png"
  width="95%"
  caption="nRF51840 and Module Pinout"
/>

- [L10 Location](docs\Product-Categories\WisDuo\RAK4630-Module\Quickstart\#hardware-setup)

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/mechanical_drawing.png"
  width="80%"
  caption="Board dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/pcb_footprint.png"
  width="70%"
  caption="PCB footprint and recommendations"
/>

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
