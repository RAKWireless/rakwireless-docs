---
rak_desc: Provides comprehensive information about your RAK7200 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak7200/RAK7200.png
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wisnode
  - RAK7200
---

# RAK7200 WisNode Track Lite Datasheet



## Overview

### Description

The **RAK7200 WisNode Track Lite** device is the best available prototyping LoRa sensor device with built-in 3.7&nbsp;V rechargeable Li-ion battery and GPS modem. The RAK7200 WisNode Track Lite has built-in **S76G** which integrates the **ultra low power ARM Cortex-M3 STM32L073 microcontroller** and **SX1276 LoRa** long range modem and on board **CXD5603GF GPS modem**.

It is a feature-packed tracker device for featured applications development. This device can be used as a quick prototyping tool for Internet-of-Things (IoT) and LoRaWAN Integration. The RAK7200 WisNode Track Lite is perfect for IoT Applications such as asset tracking, smart vehicle management and location-based services.

### Features

- Supports sleep mode, low power consumption
- **Built-in LIS3DH - digital motion sensor**, which has dynamic user selectable full scales of ±2g/±4g/±8g/±18g and is capable of measuring accelerations with output data rates from 1&nbsp;Hz to 5&nbsp;kHz
- **Barometer**: Built-in LPS22HB - digital nano pressure sensor
- **Built-in a 9-Axis Sensor**, which includes a triple-axis gyroscope, a triple-axis accelerometer, and a triple-axis magnetometer
- LoRaWAN 1.0.2 Standard support - ABP or OTAA mode
- LoRa and GPS antenna are integrated inside the casing
- Micro USB for configuration and charging of the battery
- Supports global license-free frequency band: IN865, EU868, US915, AU915, KR920, and AS923

## Specifications

### Overview

The overview shows the board with its enclosure. It also presents the block diagram that shows the internal architecture of the board.


#### Board Overview

The detailed dimensions of the **RAK7200 WisNode Track Lite** with the protective case is shown in **Figure 1**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/rak7200-dimensions.jpg"
  width="40%"
  caption="RAK7200 WisNode Track Lite Dimensions"
/>

#### Block Diagram

The block diagram below shows the internal architecture and external interfaces of the RAK7200 WisNode Track Lite.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/block-diagram.png"
  width="80%"
  caption="RAK7200 WisNode Track Lite Block Diagram"
/>

### Hardware

The hardware specification is categorized into six (6) parts. It discusses the interfacing, pinouts, and the corresponding functions and diagrams of the board. It also includes the parameters and the standard values in terms of the electrical and environmental.

#### Interfaces

The RAK7200 WisNode Track Lite provides three external interfaces, as shown in **Figure 3**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/rak7200-interfaces.jpg"
  width="30%"
  caption="RAK7200 WisNode Track Lite Interfaces"
/>

- **Micro USB** - 5&nbsp;V<sub>DC</sub> power supply and UART communication.
- **Reset Button** - Used to reset the RAK7200 WisNode Track Lite. Press the Reset Button for more than 1&nbsp;second, then the device will be reset.
- **BOOT0 Button** - When upgrading the firmware, you need to hold the BOOT0 Button, and then press the reset button to enter the boot mode. More information can be found here in the [RAK7200 WisNode Track Lite](/Product-Categories/WisNode/RAK7200/Quickstart/) documentation.

##### LEDs

The RAK7200 WisNode Track Lite provides three LEDs for indicating the operating status, here are their functions:

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/leds.jpg"
  width="30%"
  caption="RAK7200 WisNode Track Lite LEDs"
/>

- **LED1 Status** - Indicates that the Li-Ion Battery is Charging
- **LED2 Status** - Indicates that the Li-Ion Battery is Fully Charged
- **LED3 Status** - Indicates that the device is sending data

#### Pin Definition

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/pinout-diagram.png"
  width="60%"
  caption="RAK7200 WisNode Track Lite Pinout Diagram"
/>

| Pin | Name | Description    |
| --- | ---- | -------------- |
| 1   | TXD  | PA2_TXD_A      |
| 2   | RXD  | PA3_RXD_A      |
| 3   | SDA  | I²C_SDA        |
| 4   | SCL  | I²C_SCL        |
| 5   | NSS  | SPI_NSS_1 / NC |
| 6   | SCK  | SPI_SCK_1 / NC |
| 7   | MISO | SPI_MISO       |
| 8   | MOSI | SPI_MOSI       |

| Pin | Name  | Description       |
| --- | ----- | ----------------- |
| 1   | 3V3   | 3.3&nbsp;V Output |
| 2   | SWDIO | JTAG_SWDIO        |
| 3   | SWCLK | JTAG_SWCLK        |
| 4   | GND   | Ground            |
| 5   | GND   | Ground            |
| 6   | RX1   | UART1_RX          |
| 7   | TX1   | UART1_TX          |
| 8   | 3V3   | 3.3&nbsp;V Output |

#### RF Characteristics

##### Operating Frequencies

The device supports all LoRaWAN frequency bands as the table below. Which is easy to configure while building the firmware from the source code.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU433, EU868    |
| China         | CN470           |
| North America | US915           |
| Asia          | AS923           |
| Australia     | AU915           |
| Korea         | KR920           |
| Indian        | IN865           |

#### Antennas

The RAK7200 WisNode Track Lite has a built-in passive GPS Antenna and an iPex LoRa Antenna. The performance and the parameters of the Antenna are as follows:

##### GPS Antenna

The GPS Antenna is shown in **Figure 6**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/gps-antenna.jpg"
  width="25%"
  caption="GPS Antenna"
/>

The table below lists the parameters of the built-in GPS Antenna.

| Items             | Parameter           |
| ----------------- | ------------------- |
| Outline Dimension | 15 x 15 x 4&nbsp;mm |
| Frequency         | 1575.42&nbsp;MHz    |
| Return Loss       | ≤ -10               |
| Polarization      | RHCP                |
| Gain @ Zenith     | ≥ -4&nbsp;dBi       |

S- Parameter of the GPS Antenna as pictured in **Figure 7**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/s-parameter.jpg"
  width="80%"
  caption="S-parameter of the GPS Antenna"
/>

##### LoRa Antenna

The LoRa Antenna is shown in **Figure 8**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/lora-antenna.jpg"
  width="40%"
  caption="LoRa Antenna"
/>

The table below lists the Efficiency / Gain of the built in LoRa Antenna.

| Freq       | 863&nbsp;MHz | 928&nbsp;MHz |
| ---------- | ------------ | ------------ |
| EFF        | 37.40%       | 40.40%       |
| Gain (dBi) | 0.23         | 1.25         |

LoRa Antenna return loss is also shown in **Figure 9**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/loss-lora-antenna.jpg"
  width="80%"
  caption="Return Loss of the LoRa Antenna"
/>

#### Electrical Characteristics


##### Working Mode

| Mode        | Condition       | Power Consumption |
| ----------- | --------------- | ----------------- |
| Sleep Mode  |                 | 26&nbsp;µA        |
| Normal Mode | Tx @ 20&nbsp;dB | 124&nbsp;mA       |
|             | Tx @ 17&nbsp;dB | 108&nbsp;mA       |
|             | Tx @ 13&nbsp;dB | 89&nbsp;mA        |
|             | Tx @ 10&nbsp;dB | 79&nbsp;mA        |
|             | Tx @ 7&nbsp;dB  | 69&nbsp;mA        |
|             | Rx              | 44&nbsp;mA        |

##### Power Consumption

The RAK7200 WisNode Track Lite has built-in rechargeable 3.7&nbsp;V Li-ion battery which can be charged via Micro USB, the built-in battery is shown in **Figure 10**.

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/built-in-battery.jpg"
  width="40%"
  caption="Built-in Battery in RAK7200 WisNode Track Lite"
/>

#### Environmental Requirements

The table below lists the operation and storage temperature requirements.

| Parameter             | Min.        | Typical     | Max.        |
| --------------------- | ----------- | ----------- | ----------- |
| Operation Temp. Range | -10°&nbsp;C | +25°&nbsp;C | +60°&nbsp;C |
| Extended Temp. Range  | -10°&nbsp;C | -           | +80°&nbsp;C |

#### Schematic Diagram


<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/schematic-diagram-1.png"
  width="100%"
  caption="Schematic Diagram - 1"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/schematic-diagram-2.png"
  width="100%"
  caption="Schematic Diagram - 2"
/>

<rk-img
  src="/assets/images/wisnode/rak7200/datasheet/schematic-diagram-3.png"
  width="100%"
  caption="Schematic Diagram - 3"
/>

### Firmware

Download the latest firmware version of RAK7200 in tha table provided below.

| Model   | Version   | Source                                                                                                  |
| ------- | --------- | ------------------------------------------------------------------------------------------------------- |
| RAK7200 | V3.1.0.13 | [Download](https://downloads.rakwireless.com/LoRa/RAK7200-Tracker/Firmware/RAK7200_Latest_Firmware.zip) |

## Models / Bundles

### Ordering Information

| Part Number | Package                         | Description                        |
| ----------- | ------------------------------- | ---------------------------------- |
| RAK7200-03  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, EU868         |
| RAK7200-04  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, US915 / AU915 |
| RAK7200-05  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, KR920         |
| RAK7200-06  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, AS923         |
| RAK7200-07  | 1x RAK7200 device, 1x USB cable | LoRa Tracker device, IN865         |
