---
tags:
  - datasheet
  - wisduo
prev: ../Deep-Development/
---

# RAK4600 WisDuo LPWAN Module Datasheet

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/overview/yb23mhfij8dwh5muoavk.png"
  width="45%"
  caption="RAK4600 WisDuo LPWAN Module"
/>
--->

## Overview

### Description

RAK4600 WisDuo LPWAN Module includes an nRF52832 MCU and an SX1276 LoRa chip. It has Ultra-Low Power Consumption of 2.0uA in sleep mode, high LoRa output power up to 20dB max in work mode, and BLE output power up to 4dBm.

The module complies with LoRaWAN 1.0.2 protocols. It also supports LoRa Point to Point communications. The Module supports BLE 5.0 in addition to LoRa. Its RF communication capabilities (LoRa+BLE) make it suitable for a variety of applications in the IoT field.

### Features

- LoRa module for Smart City, Smart Agriculture, Smart Industry
- Compact Form Factor: 15 x 23 x 2.5 mm
- 42 Pin Stamp Pad for PCB SMT mounting
- I/O ports: UART/I2C/GPIO (optional NFC interface)
- Temperature range: -40°C to +85°C
- Supply voltage: 2.0 ~ 3.6V
- Frequency range: 863–870MHz (EU) / 902–928MHz (US), ISM and SRD systems
- Low-Power Wireless Systems with 7.8kHz to 500KHz Bandwidth
- Ultra-Low Power Consumption 11.2μA in Sleep mode
- LoRa Boost mode with 20dBm output power
- BLE 5.0 (Tx power -20 to +4 dBm in 4dB steps)

## Specifications

### Overview

The overview section covers the RAK4600 WisDuo LPWAN Module board overview where the top view is presented. It also includes the block diagram of the module showing its external interfaces. 

#### Board Overview


<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/board-overview/vnje0doldhjv9gszuu8o.jpg"
  width="70%"
  caption="RAK4600 WisDuo Top View™"
/>

<!-- The figure above shows the top view of the RAK4600 WisDuo LPWAN Module. The dimensions of the Module are 15 x 23 x 2.5 mm. 
(Mechanical Characteristics)
--->

#### Block Diagram


<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/block-diagram/block-diagram.png"
  width="70%"
  caption="RAK4600 Block Diagram"
/>


### Hardware

The hardware specifications are categorized into five parts. It discusses the interfacing, pinouts, and the standard values of the board. It displays the frequency parameters and power consumption. These categories mentioned include tabular data and diagrams of the RAK4600 WisDuo LPWAN Module board.


#### Pin Definition

<!---Provided in this section is the Pinout of the RAK4600 WisDuo LPWAN Module.--->



<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/pin-definition/rak4600-pin-definition.png"
  width="60%"
  caption="RAK4600 Board Pinout"
/>

| **Pin** | **Name**   | **I/O** | **Description**                                |
| ------- | ---------- | ------- | ---------------------------------------------- |
| 1       | GND        |         | Ground                                         |
| 2       | NC         |         | No Connection                                  |
| 3       | NC         |         | No Connection                                  |
| 4       | I2C1_SDA   | I/O     | I2C, General purpose I/O (p0.13)               |
| 5       | I2C1_SDL   | I/O     | I2C, General purpose I/O (p0.12)               |
| 6       | NFC1       | I/O     | General<br>purpose I/O、NFC antenna connection |
| 7       | NFC2       | I/O     | General<br>purpose I/O、NFC antenna connection |
| 8       | GND        |         | Ground                                         |
| 9       |P0.18  | I/O     | General purpose I/O p0.18       |
| 10      | P0.19  | I/O     | General purpose I/O p0.19      |
| 11      | NC         |         | No Connection                                  |
| 12      | GND        |         | Ground                                         |
| 13      | GND        |         | Ground                                         |
| 14      | GND        |         | Ground                                         |
| 15      | RF_BT      | I/O     | BLE<br>RF OUT                                  |
| 16      | GND        |         | Ground                                         |
| 17      | RF_L       | I/O     | LoRa<br>RF OUT                                |
| 18      | GND        |         | Ground                                         |
| 19      | GND        |         | Ground                                         |
| 20      | GND        |         | Ground                                         |
| 21      | Reserved   | I/O     | General<br>purpose I/O (p0.14)                 |
| 22      | USART1_RX  | I/O     | USART1_RX<br>(General purpose I/O p0.22)       |
| 23      | USART1_TX  | I/O     | USART1_TX<br>(General purpose I/O p0.23)       |
| 24      | Reserved   | I/O     | General<br>purpose I/O p0.17                   |
| 25      | NC         |         | No Connection                                  |
| 26      | NC         |         | No Connection                                  |
| 27      | NC         |         | No Connection                                  |
| 28      | NC         |         | No Connection                                  |
| 29      | NC         |         | No Connection                                  |
| 30      | NC         |         | No Connection                                  |
| 31      | GND        |         | Ground                                         |
| 32      | NC         |         | No Connection                                  |
| 33      | NC         |         | No Connection                                  |
| 34      | NC         |         | No Connection                                  |
| 34      | NC         |         | No Connection                                  |
| 35      | NC         |         | No Connection                                  |
| 36      | MCU_NRST   | I/O     | MCU<br>reset                                   |
| 37      | SYS_SWDIO  | I/O     | SYS_SWDIO                                      |
| 38      | SYS_SWDCLK | I/O     | SYS_SWDCLK                                     |
| 39      | GND        |         | Ground                                         |
| 40      | 3V3_IN     |         | Input<br>power                                 |
| 41      | 3V3_IN     |         | Input<br>power                                 |
| 42      | GND        |         | Ground                                         |

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels shown in the table below. The frequency parameter is easy to configure as you go through the device configuration setup.

| **Region**    | **Frequency (MHz)** |
| ------------- | ------------------- |
| Russia        | RU864               |
| India         | IN865               |
| Europe        | EU868               |
| North America | US915               |
| Australia     | AU915               |
| Korea         | KR920               |
| Asia          | AS923               |

#### Electrical Characteristics

Several current consumption ratings are provided below for detailed RAK4600 WisDuo LPWAN Module usage. Refer to the values presented for your preferred values for specific simulations and calculations.

##### Typical Current Consumption

Shown in the table provided below is the typical current consumption of the RAK4600 WisDuo LPWAN Module.

| **Item**               | **Current Consumption** | **Condition**                    |
| ---------------------- | ----------------------- | -------------------------------- |
| **LoRa TX** @20dBm    | 125mA                   | LoRa @ PA_BOOST & BT sleep      |
| **LoRa TX** @17dBm    | 92mA                    | LoRa @ PA_BOOST & BT sleep      |
| **BT TX** @4dBm        | 9mA                     | BT Tx mode & LoRa sleep         |
| **LoRa RX** @37.5Kbps | 17mA                    |                                  |
| **BT RX** @2Mbps       | 11.5mA                  |                                  |
| **Node Sleep**         | 2.0μA                   | The whole board is in sleep mode |

##### Laboratory Testing

The figures below are the average current consumption based on the different test cases.

**Equipments**:

- Oscilloscope
- RAK4600 WisDuo LPWAN Module

**LoRa Packet Sending**

The RAK4600 WisDuo LPWAN Module takes **92.291 ms** to send a LoRa packet which consumes **119 mA** of current.

- **Sending Time**: 92.291 ms
- **Current consumption**: 119 mA

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/electrical-characteristics/awyqt4s9r3469vtgai1p.jpg"
  width="70%"
  caption="Oscilloscope Screen Capture of LoRa Packet Sending"
/>

**LoRa Packet Receiving**

The RAK4600 WisDuo LPWAN Module takes **30.052 ms** to receive a LoRa packet which consumes **13.8 mA** of current.

- **Receiving Time**: 30.052 ms
- **Current consumption**: 13.8 mA

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/electrical-characteristics/ufgf8mxmibztzhezvr6l.jpg"
  width="70%"
  caption="Oscilloscope Screen Capture of LoRa Packet Receiving"
/>

**Sleep Mode**

The RAK4600 WisDuo LPWAN Module when in sleep mode consumes **11.2 μA** of current.

- **Current consumption**: 11.2 μA

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/electrical-characteristics/bpm1nbybf4exvnop89yo.jpg"
  width="70%"
  caption="Oscilloscope Screen Capture of RAK4600 WisDuo LPWAN Module in sleep mode"
/>

#### Mechanical Characteristics

The mechanical dimensions of the RAK4600 WisDuo LPWAN Module is shown in the figures provided in this section.

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/mechanical-characteristics/jmglqkzpggdkglecgcau.jpg"
  width="75%"
  caption="Dimensions in Top and Side View"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/mechanical-characteristics/fkjol3dbzdjx6jdqpqtj.png"
  width="75%"
  caption="Dimensions Detailed"
/>

#### Recommended Reflow Profile

In this section, the recommended Reflow profile for RAK4600 WisDuo LPWAN Module is described with the image below:

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/recommended-reflow-profile/jrhzrgsko4nmfcwpirix.jpg"
  width="70%"
  caption="Recommended Reflow Profile"
/>

**Standard Conditions for Reflow Soldering**:

- Pre-heating Ramp (A) (Initial temperature: 150℃): 1~2.5℃/sec.
- Soaking Time (T2) (150℃~180℃): 60sec-100sec;
- Peak Temperature (G): 230~250℃
- Reflow Time (T3) (>220℃): 30~60 sec
- Ramp-up Rate (B): 0~2.5℃/ sec
- Ramp-down Rate (C): 1~3℃/ sec.

### Software

Download the latest firmware of the RAK4600 WisDuo LPWAN Module  provided in the table below.


#### Firmware

| Model   | Version  | Source                                                                                   |
| ------- | -------- | ---------------------------------------------------------------------------------------- |
| RAK4600 | V3.0.0.8 | [Download](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/RAK4600_V3.0.0.8.rar) |
