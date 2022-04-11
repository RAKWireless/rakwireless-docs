---
rak_desc: Provides comprehensive information about your RAK4630 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak4630-module/overview/RAK4630_Module_home.png
prev: ../DFU/
next: false
tags:
  - datasheet
  - RAK4630
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631_CE_Cert.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631_FCC_Cert.zip] 
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631rohs%20report.pdf] 

---

# RAK4630 WisBlock LPWAN Module Datasheet

<!--
<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/overview.jpg"
  width="30%"
  caption="RAK4631 WisBlock LPWAN Module"
/>
-->
## Overview

### Description

The RAK4630 is a low-power long-range transceiver module based on Nordic nRF52840 MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the newest SX1262 LoRa transceiver from Semtech. This module complies with Class A, B, & C of LoRaWAN 1.0.3 specifications and also supports LoRa Point-to-Point (P2P) communication mode which helps you in implementing your own customized long-range LoRa network quickly. The two RF communication characteristic of the module (Lora® + BLE) makes it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, and IoT network applications.  

The default firmware of RAK4630 is based on RUI3 (RAKwireless Unified Interface). This allows you to easily use RAK4630 as a stand-alone module by developing your own custom firmware via RUI APIs. You can directly interface sensors and other external peripherals to it without needing an additional MCU. On top of that, RAK4630 still has the capability to be interfaced to an external host MCU using AT commands via USB, UART, or BLE connection. 


### Features

- TCXO crystal for LoRa chip
- I/O ports: UART/I2C/GPIO/USB
- SPI pins and optional NFC interface are accessible using WisBlock IO module
- Temperature range: -40&nbsp;°C to +85&nbsp;°C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;KHz to 500&nbsp;KHz Bandwidth
- Ultra-Low Power Consumption 4.23&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- BLE5.0 (Tx power -20 to +4&nbsp;dBm in 4&nbsp;dB steps)
- Serial Wire Debug (SWD) interface
- Module size: 15 x 23&nbsp;mm

## Specifications

### Overview

### Hardware

The hardware specification is categorized into three parts. It covers the RF, electrical, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK4630 WisBlock LPWAN Module.

#### Interfaces

| Module  | Interfaces |
| ------- | ---------- |
| RAK4630 | USB, UART1 |

#### Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4630-module/datasheet/RAK4630_Pinout.svg"
  width="60%"
  caption="RAK4630 module pinout diagram"
/>

| **Pin No.** | **Name**                        |
| ----------- | ------------------------------- |
| 1           | VBUS                            |
| 2           | USB-                            |
| 3           | USB+                            |
| 4           | P0.13/I2C_SDA                   |
| 5           | P0.14/I2C_SCL                   |
| 6           | P0.15/UART2_RX                  |
| 7           | P0.16/UART2_TX (RUI3 BOOT Mode) |
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


#### RF Characteristics

The RAK4630 module supports the LoRaWAN bands shown in the table below. When buying a RAK4630 module, pay attention to specifying the correct core module RAK4630 H/L for your region, in which H stands for high-frequency regions and L for low-frequency regions.  

:::tip 📝 NOTE
Detailed information about the RAK4630 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/). 
:::

| Region        | Frequency (MHz)  | Core Module |
| ------------- | ---------------- | ----------- |
| India         | IN865            | RAK4630(H)  |
| Europe        | EU868            | RAK4630(H)  |
| Europe        | EU433            | RAK4630(L)  |
| North America | US915            | RAK4630(H)  |
| Canada        | US915            | RAK4630(H)  |
| Australia     | AU915            | RAK4630(H)  |
| Korea         | KR920            | RAK4630(H)  |
| Asia          | AS923            | RAK4630(H)  |
| China         | CN470            | RAK4630(L)  |

#### Electrical Characteristics

##### Power Consumption

| **Item**                                 | **Current Average** | **Condition - Voltage and Dwell Time** |
| ---------------------------------------- | ------------------- | -------------------------------------- |
| RAK4630 Module in One-Time Sleep         | 4.42&nbsp;uA        | 3.3V 10seconds                         |
| RAK4630 Module System up in Idle mode    | 3.35&nbsp;mA        | 3.3V 10seconds                         |
| RAK4630 Module in LoRaWAN One-Time Sleep | 4.23&nbsp;uA        | 3.3V 10seconds                         |
| RAK4630 Module 15 Bytes Data TX Sending  | 67.8&nbsp;mA        | 3.6V 1second (in RAK5005-O board)      |
| RAK4630 Module in RX Window Received     | 2.22&nbsp;mA        | 3.6V 1second (in RAK5005-O board)      |

##### Absolute Maximum Ratings

| **Symbol** | **Description**               | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | ----------------------------- | -------- | -------- | -------- | -------- |
| VBAT_SX    | LoRa chip supply voltage      | -0.5     |          | 3.9      | V        |
| VBAT_SX_IO | LoRa chip supply for I/O pins | -0.5     |          | 3.9      | V        |
| VDD_NRF    | MCU power supply              | -0.3     |          | 3.9      | V        |
| VBUS       | USB supply voltage            | -0.3     |          | 5.8      | V        |
| VBAT_NRF   | MCU high voltage power supply | -0.3     |          | 5.8      | V        |


##### Recommended Operating Conditions

| **Symbol** | **Description**                    | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | ---------------------------------- | -------- | -------- | -------- | -------- |
| VBAT_SX    | SX1262 supply voltage              | 2.0      | 3.3      | 3.7      | V        |
| VBAT_SX_IO | SX1262 supply for I/O pins         | 2.0      | 3.3      | 3.7      | V        |
| VDD_NRF    | NRF52840 power supply              | 2.0      | 3.3      | 3.6      | V        |
| VBUS       | VBUS USB supply voltage            | 4.35     | 5.0      | 5.5      | V        |
| VBAT_NRF   | NRF52840 high voltage power supply | 2.5      |          | 5.5      | V        |

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
