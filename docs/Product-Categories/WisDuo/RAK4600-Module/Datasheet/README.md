---
rak_desc: Covers the comprehensive information of your RAK4600 Module to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4600-module/overview/RAK4600_Module_home.png
tags:
  - datasheet
  - wisduo
  - RAK4600
prev: ../Low-Level-Development/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4600/Certification/RAK4600%20CE%20Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4600/Certification/RAK4600%20FCC%20Certification.zip]
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

RAK4600 WisDuo LPWAN Module includes an nRF52832 MCU and an SX1276 LoRa chip. It has Ultra-Low Power Consumption of 13.3&nbsp;μA (down to 11.2&nbsp;μA @ 2.0&nbsp;V) in sleep mode, high LoRa output power up to 20&nbsp;dB max in work mode, and BLE output power up to 4&nbsp;dBm.

The module complies with LoRaWAN 1.0.2 specification. It also supports LoRa P2P Point-to-Point communications. The Module supports BLE 5.0 in addition to LoRa. Its RF communication capabilities (LoRa+BLE) make it suitable for a variety of applications in the IoT field.

### Features

- LoRa module for Smart City, Smart Agriculture, Smart Industry
- Compact Form Factor: 15 x 23 x 2.5&nbsp;mm
- 42 Pin Stamp Pad for PCB SMT mounting
- I/O ports: UART/I2C/GPIO (optional NFC interface)
- Temperature range: -40&nbsp;°C to +85&nbsp;°C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Frequency range: 863–870&nbsp;MHz (EU) / 902–928&nbsp;MHz (US), ISM and SRD systems
- Low-Power Wireless Systems with 7.8&nbsp;kHz to 500&nbsp;KHz Bandwidth
- Ultra-Low Power Consumption of 13.3&nbsp;μA (down to 11.2&nbsp;μA @ 2.0&nbsp;V) in sleep mode
- LoRa Boost mode with 20&nbsp;dBm output power
- BLE 5.0 (Tx power -20 to +4&nbsp;dBm in 4&nbsp;dB steps)

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
| 4       | I2C1_SDA   | I/O     | I2C, General purpose I/O (P0.13)               |
| 5       | I2C1_SDL   | I/O     | I2C, General purpose I/O (P0.12)               |
| 6       | NFC1       | I/O     | General<br>purpose I/O、NFC antenna connection |
| 7       | NFC2       | I/O     | General<br>purpose I/O、NFC antenna connection |
| 8       | GND        |         | Ground                                         |
| 9       |P0.18  | I/O     | General purpose I/O P0.18       |
| 10      | P0.19  | I/O     | General purpose I/O P0.19      |
| 11      | NC         |         | No Connection                                  |
| 12      | GND        |         | Ground                                         |
| 13      | GND        |         | Ground                                         |
| 14      | GND        |         | Ground                                         |
| 15      | RF_BT      | I/O     | BLE<br>RF OUT (only available on **RAK4600 No-IPEX connector variant**)|
| 16      | GND        |         | Ground                                         |
| 17      | RF_L       | I/O     | LoRa<br>RF OUT (only available on **RAK4600 No-IPEX connector variant**)|
| 18      | GND        |         | Ground                                         |
| 19      | GND        |         | Ground                                         |
| 20      | GND        |         | Ground                                         |
| 21      | Reserved   | I/O     | General<br>purpose I/O (P0.14)                 |
| 22      | USART1_RX  | I/O     | USART1_RX<br>(General purpose I/O P0.22)       |
| 23      | USART1_TX  | I/O     | USART1_TX<br>(General purpose I/O P0.23)       |
| 24      | Reserved   | I/O     | General<br>purpose I/O P0.17                   |
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


##### LoRa Transceiver IC Connection to RAK4600 Internal nRF52

| **LoRa IC Pin** | **nRF52 IO Pins** |
| :-------------: | :---------------: |
|      DIO0       |       P0.27       |
|      DIO1       |       P0.28       |
|      DIO2       |       P0.29       |
|      DIO3       |       P0.30       |
|      DIO4       |       P0.31       |
|      DIO5       |        NC         |
|    SPI1_CLK     |       P0.07       |
|    SPI1_MISO    |       P0.06       |
|    SPI1_MOSI    |       P0.05       |
|    SPI1_NSS     |       P0.04       |
|     NRESET      |       P0.03       |
|      VCTL1      |       P0.16       |
|      VCTL2      |       P0.15       |

##### RF Switch Control Logic Table

| **LoRa Mode** | **VCTL1 GPIO** | **VCTL2 GPIO** |
| :------------ | :------------: | :------------: |
| TX mode       |       H        |       L        |
| RX mode       |       L        |       H        |

:::tip 📝 Note
<b>Logic Level</b>
 - H level (1.8 - 5.0&nbsp;V)<br> 
 - L level (0&nbsp;V)
:::

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

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.0     | 3.3     | 3.45    | Volts (V) |

##### Typical Current Consumption

Shown in the table provided below is the typical current consumption of the RAK4600 WisDuo LPWAN Module.

| **Item**                    | **Current Consumption** | **Condition**              |
| --------------------------- | ----------------------- | -------------------------- |
| **LoRa TX** @20&nbsp;dBm    | 125&nbsp;mA             | LoRa @ PA_BOOST & BT sleep |
| **LoRa TX** @17&nbsp;dBm    | 92&nbsp;mA              | LoRa @ PA_BOOST & BT sleep |
| **BT TX** @4&nbsp;dBm       | 9&nbsp;mA               | BT Tx mode & LoRa sleep    |
| **LoRa RX** @37.5&nbsp;Kbps | 17&nbsp;mA              |                            |
| **BT RX** @2&nbsp;Mbps      | 11.5&nbsp;mA            |                            |

##### Laboratory Testing

The figures below are showing the average current consumption based on the different test cases.

**Equipment**:

- Power consumption meter
- RAK4600 WisDuo LPWAN Module

**LoRa Packet Sending**

The RAK4600 WisDuo LPWAN Module takes **92.291&nbsp;ms** to send a LoRa packet which consumes **119&nbsp;mA** of current.

- **Sending Time**: 92.291&nbsp;ms
- **Current consumption**: 119&nbsp;mA

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/electrical-characteristics/awyqt4s9r3469vtgai1p.jpg"
  width="70%"
  caption="Oscilloscope Screen Capture of LoRa Packet Sending"
/>

**LoRa Packet Receiving**

The RAK4600 WisDuo LPWAN Module takes **30.052&nbsp;ms** to receive a LoRa packet which consumes **13.8&nbsp;mA** of current.

- **Receiving Time**: 30.052&nbsp;ms
- **Current consumption**: 13.8&nbsp;mA

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/electrical-characteristics/ufgf8mxmibztzhezvr6l.jpg"
  width="70%"
  caption="Oscilloscope Screen Capture of LoRa Packet Receiving"
/>

##### Sleep Current

| Feature             | Condition | Minimum (2.0&nbsp;V) | Typical (3.3&nbsp;V) | Maximum | Unit |
| ------------------- | --------- | -------------------- | -------------------- | ------- | ---- |
| Current Consumption | EU868     | 11.2                 | 13.3                 |         | μA   |
|                     | US915     | 11.5                 | 12.5                 |         | μA   |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/schematic/RAK4600_Schematic.png"
  width="100%"
  caption="Schematic Diagram"
/>

#### Mechanical Characteristics


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

- MSL Rating : Class 3

<rk-img
  src="/assets/images/wisduo/rak4600-module/datasheet/recommended-reflow-profile/jrhzrgsko4nmfcwpirix.jpg"
  width="70%"
  caption="Recommended Reflow Profile"
/>

**Standard Conditions for Reflow Soldering**:

- Pre-heating Ramp (A) (Initial temperature: 150&nbsp;℃): 1~2.5&nbsp;℃/sec.
- Soaking Time (T2) (150&nbsp;℃~180&nbsp;℃): 60~100&nbsp;sec;
- Peak Temperature (G): 230~250&nbsp;℃
- Reflow Time (T3) (>220&nbsp;℃): 30~60&nbsp;sec
- Ramp-up Rate (B): 0~2.5&nbsp;℃/ sec
- Ramp-down Rate (C): 1~3&nbsp;℃/ sec.

### Software

Download the latest firmware of the RAK4600 WisDuo LPWAN Module provided in the table below.


#### Firmware

| Model   | Version   | Source                                                                                          |
| ------- | --------- | ----------------------------------------------------------------------------------------------- |
| RAK4600 | V3.4.0.14 | [Download](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/RAK4600_Latest_Firmware.zip) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
