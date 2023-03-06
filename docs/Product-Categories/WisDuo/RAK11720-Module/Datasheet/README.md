---
rak_desc: Provides comprehensive information about your RAK11720 WisDuo LPWAN Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak11720-module/overview/RAK11720_Module_buy.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - RAK11720
---

# RAK11720 WisDuo LPWAN Module Datasheet

## Overview

### Description

RAK11720 is a low-power long-range LoRaWAN module based on Ambiq Apollo3 Blue AMA3B1KK-KBR-B0 SoC MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and SX1262 LoRa transceiver from Semtech. This module complies with Class A, B, & C of LoRaWAN 1.0.3 specifications and also supports LoRa Point-to-Point (P2P) communication mode, which helps you implement your own customized LoRa network quickly. The two RF communication characteristic of the module (LoRa + BLE) makes it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, and IoT network applications.

The default firmware of RAK11720 is based on RUI3 (RAKwireless Unified Interface). This allows you to easily use RAK11720 as a stand-alone module by developing your own custom firmware via Arduino compatible RUI3 APIs. You can directly interface sensors and other external peripherals to it without needing an additional MCU. In addition to that, RAK11720 can still be interfaced to an external host MCU using AT commands via UART or via BLE connection.

:::tip 📝 NOTE
There are two variants available for the RAK11720 Module:<br>
(1) With MHF4 IPEX connector to connect external antennas<br>
(2) No IPEX connector but with RF pinout to connect custom antenna
:::

### Features

- Based on **AMA3B1KK-KBR-B0** and **SX1262**
- ARM Cortex-M4F
- 1&nbsp;MB Flash and 348&nbsp;KB SRAM
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy-to-use AT Command set via UART interface
- I/O ports: UART/I2C/SPI/ADC/GPIO
- Long-range - greater than 10&nbsp;km with optimized antenna
- Ultra-low-power consumption of 2.37&nbsp;μA in sleep mode
- **Supply Voltage**: 1.8&nbsp;V ~ 3.6&nbsp;V
- **Temperature range**: -40°&nbsp;C ~ 85°&nbsp;C

## Specifications

### Overview

#### Block Diagram

<rk-img
  src="/assets/images/wisduo/rak11720-module/datasheet/block-diagram.png"
  width="55%"
  caption="RAK11720 System Block Diagram"
/>

### Hardware

The hardware specification is categorized into three parts. It covers the RF, electrical, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK11720 WisDuo LPWAN Module.

#### Interfaces

| Module   | Interfaces                                   |
| -------- | -------------------------------------------- |
| RAK11720 | UART0 (Default for AT command and FW update) |

#### Pin Definition

| **Pin No.** | **Name**      | **Type** | **Description**                                                         |
| ----------- | ------------- | -------- | ----------------------------------------------------------------------- |
| 1           | GP43/UART1_RX | I/O      | GPIO and UART2 Interface (RX)                                           |
| 2           | GP42/UART1_TX | I/O      | GPIO and UART2 Interface (TX)                                           |
| 3           | GP12/ADC9     | I/O      | GPIO and ADC                                                            |
| 4           | GP39/UART0_TX | I/O      | GPIO and UART0 Interface(TX) - AT Command and FW Update                 |
| 5           | GP40/UART0_RX | I/O      | GPIO and UART0 Interface (RX) - AT Command and FW Update                |
| 6           | GP45          | I/O      | GPIO only                                                               |
| 7           | GP21/SWDIO    |          | GPIO and SWD debug pin (SWDIO)                                          |
| 8           | GP20/SWDCK    |          | GPIO and SWD debug pin (SWDCK)                                          |
| 9           | GP27/I2C2_SCL | I/O      | GPIO and I2C2 (SCL)                                                     |
| 10          | GP25/I2C2_SDA | I/O      | GPIO and I2C2 (SDA)                                                     |
| 11          | GND           | POWER    | Ground connections                                                      |
| 12          | LORA RF       | RF       | LORA RF Port (only available on **RAK11720 NO-IPEX connector variant**) |
| 13          | GP7/SPI0_MOSI | I/O      | GPIO and SPI0 (MOSI)                                                    |
| 14          | GP6/SPI0_MISO | I/O      | GPIO and SPI0 (MISO)                                                    |
| 15          | GP5/SPI0_CLK  | I/O      | GPIO and SPI0 (CLK)                                                     |
| 16          | GP1/SPI0_NSS  | I/O      | GPIO and SPI0 (NSS)                                                     |
| 17          | GND           | POWER    | Ground connections                                                      |
| 18          | GND           | POWER    | Ground connections                                                      |
| 19          | GP4           | I/O      | GPIO only                                                               |
| 20          | GP36          | I/O      | GPIO only                                                               |
| 21          | SWO           | I/O      | SBL log output                                                          |
| 22          | RST           |          | MCU Reset (nRST)                                                        |
| 23          | GND           | POWER    | Ground connections                                                      |
| 24          | VDD           | POWER    | VDD - Voltage Supply                                                    |
| 25          | GP32/ADC4     | I/O      | GPIO and ADC                                                            |
| 26          | GP31/ADC3     | I/O      | GPIO and ADC                                                            |
| 27          | GP37          | I/O      | GPIO only                                                               |
| 28          | GND           | POWER    | Ground connections                                                      |
| 29          | GP44          | I/O      | GPIO only                                                               |
| 30          | GP38          | I/O      | GPIO only                                                               |
| 31          | GP33/ADC5     | I/O      | GPIO and ADC                                                            |
| 32          | GP13/ADC8     | I/O      | GPIO and ADC                                                            |
| 33          | BLE RF        | RF       | BLE RF Port (only available on **RAK11720 NO-IPEX connector variant**)  |
| 34          | GND           | POWER    | Ground connections                                                      |

#### RF Characteristics

The RAK11720 module supports the LoRaWAN bands shown in the table below. When buying a RAK11720 module, pay attention to specifying the correct core module RAK11720 H/L for your region, in which H stands for high-frequency regions and L for low-frequency regions.

<table>
  <thead><tr>
    <th>Module</th>
    <th>Region</th>
    <th>Frequency</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan = "2">RAK11720 (L)</td>
    <td>Europe</td>
    <td>EU433</td>
  </tr>
  <tr>
    <td>China</td>
    <td>CN470</td>
  </tr>
    <tr>
    <td rowspan = "7">RAK11720 (H)</td>
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

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 1.8     | 3.3     | 3.6     | Volts (V) |

##### Operating Current

| Feature           | Condition    | Minimum | Typical                             | Maximum | Unit |
| ----------------- | ------------ | ------- | ----------------------------------- | ------- | ---- |
| Operating Current | BLE TX Mode  | -       | 12.7 @4.0&nbsp;dBm                  | -       | mA   |
|                   | LORA TX Mode | -       | 87 @&nbsp;20&nbsp;dBm, 868&nbsp;MHz | -       | mA   |

##### Sleep Current

| Feature             | Condition | Minimum (2.1&nbsp;V) | Typical (3.3&nbsp;V) | Maximum | Unit |
| ------------------- | --------- | -------------------- | -------------------- | ------- | ---- |
| Current Consumption | EU868     | -                    | 2.37                 | -       | μA   |
|                     | US915     | -                    | 2.37                 | -       | μA   |
|                     | CN470     | -                    | 2.37                 | -       | μA   |

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak11720-module/datasheet/mechanical_drawing.png"
  width="60%"
  caption="Board dimension"
/>

##### Layout Recommendation

<rk-img
  src="/assets/images/wisduo/rak11720-module/datasheet/pcb_footprint.png"
  width="80%"
  caption="PCB footprint and recommendations"
/>

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -40     | 25      | 85      | °C   |

##### Storage Temperature

| Feature             | Minimum | Typical | Maximum | Unit |
| ------------------- | ------- | ------- | ------- | ---- |
| Storage Temperature | -40     | -       | 85      | °C   |

##### Recommended Reflow Profile

<rk-img
  src="/assets/images/wisduo/rak11720-module/datasheet/reflow.png"
  width="70%"
  caption="Reflow Profile for RAK11720"
/>

Standard conditions for reflow soldering:

- Pre-heating Ramp (A) (Initial temperature: 150°&nbsp;C): **1~2.5°&nbsp;C/sec**
- Soaking Time (T2) (150~180°&nbsp;C): **60~100&nbsp;sec**
- Peak Temperature (G): **230~250°&nbsp;C**
- Reflow Time (T3) (>220°&nbsp;C): **30~60&nbsp;sec**
- Ramp-up Rate (B): **0~2.5°&nbsp;C/sec**
- Ramp-down Rate (C): **1~3°&nbsp;C/sec**

### Software

Download the latest RAK11720 WisDuo LPWAN Module firmware provided below. RAK11720 (L) and RAK11720 (H) use the same firmware and it will automatically detect the variant of the module being used.

#### Firmware

| Model                    | Note                        | Source                                                                                                      |
| ------------------------ | --------------------------- | ----------------------------------------------------------------------------------------------------------- |
| RAK11720 (.bin via UART) | (default baudrate = 115200) | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_Nonsecure_OTA_Package_UART.bin) |
| RAK11720 (.bin via BLE)  |                             | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_Nonsecure_OTA_Package_BLE.bin)  |
| RAK11720 (.hex)          |                             | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK11720_latest_final.hex)                      |

