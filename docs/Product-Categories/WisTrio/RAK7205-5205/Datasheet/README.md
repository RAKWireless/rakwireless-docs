---
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wistrio
---

# RAK5205 WisTrio LPWAN Tracker Datasheet

<!---

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-wistrio-lpwan-tracker.png"
  width="25%"
  caption="RAK5205 WisTrio LPWAN Tracker"
/>
-->

## Overview

### Description

The **RAK5205 WisTrio LPWAN Tracker board** is built on the Semtech SX1276 chip, with the STM32L1 MCU at its core. It is a feature-packed sensor board with LoRa connectivity and built-in GPS. It provides various interfaces for easy application development.

This is the best sensor board available in the market, ideal as a quick prototyping tool for Internet-of-Things and LoRaWAN Network integration. It is perfect for IoT applications such as asset tracking, smart vehicle management and location-based services. Most importantly, application development environments such as the CooCox IDE and Kiel are all supported, users can quickly develop own applications.

### Features

- Compatible with 96Boards IoT Edition Specification.
- With SX1276 LoRa long range and Ublox Max 7Q GPS modems which allow to
  enable the GPS low power mode.
- Integrated the ultra-low power microcontroller ARM Cortex-M3 STM32L1.
- Built-in environmental sensor BME680 (gas, pressure, humidity, temperature) and
  3-axis MEMS sensor LIS3DH (accelerometer).
- SMA/iPEX antenna optional for LoRa and GPS.
- Supports latest LoRaWAN 1.0.2 protocol, activation by OTAA/ABP.
- Supports programmable bit rate up to 300kbps.
- Supports rechargeable battery through micro USB or 5V solar charging ports.
- Supports sleep mode, the power consumption down to 14.5μA.
- Supports global license-free ISM band (EU433, CN470, EU868, US915, AS923, AU915, KR920, IN865 and AS920).
- Supports I2C, GPIOs, UART and ADC interfaces.

## Specifications

### Overview

The overview covers the RAK5205 WisTrio board top view and also, its block diagram with the corresponding external interfaces of the RAK5205.

#### Board Overview

The picture below shows the top view and external interfaces of the RAK5205 LPWAN tracker board.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-lpwan-tracker-interfaces.png"
  width="50%"
  caption="RAK5205 WisTrio LPWAN Tracker Interfaces"
/>

The dimension and the bottom view of the board is shown below. Sensor ICs are also labeled for your reference.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-dimension-and-sensors-available.png"
  width="50%"
  caption="RAK5205 Dimension and Sensors Available"
/>


### Hardware

The hardware specification is categorized into eight parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the parameters and standard values in terms of electrical, environmental mechanical and the antennas specifications. 

#### Interfaces

##### Functional Diagram

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-functional-diagram.png"
  width="80%"
  caption="RAK5205 Functional Diagram"
/>

It is built around RAK811 module and compatible with 96Boards. It provides the following interfaces, headers, jumpers, button and connectors:

- Micro USB
- 30-pin 96Boards Headers (UART, RESET, GPIOS, I2C, ADC)
- 2-pin USB Boot jumper
- 3-pin UART RX jumper
- 2-pin Battery female interface
- 2-pin Solar Panel female interface
- LEDs
- Reset Button

**It has two Antenna connectors:**

- RP-SMA Male connector of LoRa Antenna(optional iPEX connector)
- SMA Female connector of GPS Antenna(optional iPEX connector)

##### Micro-B USB Interface

A Standard Micro-B USB compliant with USB 2.0 standard specification is used to provide an interface to connect to a PC for control of the board and firmware upgrade.The Micro-B USB pin definition is shown below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/micro-usb-pinout.png"
  width="20%"
  caption="Micro USB Pinout"
/>

| Pin | Description    |
| --- | -------------- |
| 1   | USB_VBUS (+5V) |
| 2   | USB_DM         |
| 3   | USB_DP         |
| 4   | NC             |
| 5   | GND            |

##### LEDs

Three LEDs are used to indicate operating status, here are their functions:

- 🟢 **GREEN LED** : Status - Defined By User
- 🔵 **BLUE LED**: Status - Defined By User
- 🔴 **RED LED** : Charging Status - indicates the Li-ion Battery is Charging

##### Reset Push Button

Reset Push Button is used to reset the RAK811 module. To reset the module push the Reset Button for 1 second.

#### Pin Definition

Here are the six connectors for RAK5205 tracker board: **P1**, **P2**, **J11**, **J12**, **J22** and **J25**

##### P1

(Pin1 connected to VBATT, Pin2 connected to GND) Li-ion battery connector.

##### P2

(Pin1 connected to VBUS, Pin2 connected to GND) Solar cell interface.

##### J11

Pin1 is connected to VBUS. Pin2 is connected to VBIN. Without a battery
connection, the J11 needs to be short-circuited with a jumper. Instead, the J11
needs to be kept open.

##### J12

Pin1 is connected to BOOT0. Pin2 is connected to VDD. Enter flash mode through jumper short circuit and open into normal mode.

##### J22

30pins, follow the 96Board’s pin definition.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-pinout-diagram.png"
  width="60%"
  caption="RAK5205 Pinout Diagram"
/>

| Pin | Pin Name  | Description                                                                                                |
| --- | --------- | ---------------------------------------------------------------------------------------------------------- |
| 1   | NC        | No Connection                                                                                              |
| 2   | NC        | No Connection                                                                                              |
| 3   | UART1_TX  | UART1_TX                                                                                                   |
| 4   | NC        | No Connection                                                                                              |
| 5   | UART1_RX1 | UART1_RX1 (need to connect RX pin and RX1 pin of J25 via jumper if user wants to use this UART interface). |
| 6   | NC        | No Connection                                                                                              |
| 7   | NC        | No Connection                                                                                              |
| 8   | NC        | No Connection                                                                                              |
| 9   | GND       | Ground                                                                                                     |
| 10  | GND       | Ground                                                                                                     |
| 11  | VCCIN     | 5V out                                                                                                     |
| 12  | VCC_3V3   | 3.3V out                                                                                                   |
| 13  | PA8       | GPIO Pin                                                                                                   |
| 14  | PB3       | GPIO Pin                                                                                                   |
| 15  | NC        | No Connection                                                                                              |
| 16  | PB5       | GPIO Pin                                                                                                   |
| 17  | SWD_TMS   | GPIO Pin / R21, R22 pull-up 10K resistor can be used as JTAG interface                                     |
| 18  | SWD_CLK   | GPIO Pin / R21, R22 pull-up 10K resistor can be used as JTAG interface                                     |
| 19  | LED1_PA12 | GPIO Pin                                                                                                   |
| 20  | LED2_PB4  | GPIO Pin                                                                                                   |
| 21  | NC        | No Connection                                                                                              |
| 22  | SCL       | I²C                                                                                                        |
| 23  | NC        | No Connection                                                                                              |
| 24  | SDA       | I²C                                                                                                        |
| 25  | NC        | No Connection                                                                                              |
| 26  | PB12      | ADC Interface                                                                                              |
| 27  | NC        | No Connection                                                                                              |
| 28  | NC        | No Connection                                                                                              |
| 29  | RST       | Reset Pin                                                                                                  |
| 30  | NC        | No Connection                                                                                              |

##### J25

(RX1, RX, RXCP) J22 and USB UART share. If you use the UART of J22, you need to connect Rx and RX1 pins. If you use USB UART, you need to connect Rx and RXCP pins.

#### RF Requirements

##### Operating Frequencies

The board supports all LoRaWAN frequency channels as stated in the table below which is easy to configure while building the firmware from the source code

| Region        | Frequency (Mhz) |
| ------------- | --------------- |
| Europe        | EU433, EU868    |
| China         | CN470           |
| North America | US915           |
| Asia          | AS920, AS923    |
| Australia     | AU915           |
| Korea         | KR920           |
| Indian        | IN865           |

#### Antennas

##### LoRa Antenna

###### Overview

The LoRa Antenna and Interfaces are shown in the figure below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rp-sma-male-connector-of-lora®-antenna.jpg"
  width="45%"
  caption="RP-SMA Male Connector of LoRa Antenna"
/>

Here is the iPEX LoRa Antenna Interface:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/ipex-antenna-interface-for-lora®-antenna.jpg"
  width="60%"
  caption="iPex Antenna Interface for LoRa Antenna"
/>

###### LoRa Antenna Dimension

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/lora®-antenna-dimension.jpg"
  width="50%"
  caption="LoRa Antenna Dimension"
/>

###### LoRa Antenna Parameters

| Items                              | Specifications                 |
| ---------------------------------- | ------------------------------ |
| VSWR (Voltage Standard Wave Ratio) | 1.5:1                          |
| Gain                               | 2.0 dBm                        |
| Working Temperature &amp; Humidity | T:-35 °C ~ +80 °C, H: 0% ~ 95% |
| Storage Temperature &amp; Humidity | T:-40 °C ~ +85 °C, H: 0% ~ 95% |

##### GPS Antenna

The GPS antenna and interfaces for RAK5205 tracker board is shown below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/sma-female-interface-for-gps.jpg"
  width="60%"
  caption="SMA Female Interface for GPS"
/>

Here is the iPEX GPS Antenna interface:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/ipex-interface-for-gps-antenna.jpg"
  width="60%"
  caption="iPex Interface for GPS Antenna"
/>

###### GPS Antenna Dimensions

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/gps-antenna-dimension.jpg"
  width="50%"
  caption="GPS Antenna Dimension"
/>

###### GPS Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions | Temperature     | Humidity |
| ---------- | --------------- | -------- |
| Working    | -35 °C ~ +80 °C | 0% ~ 95% |
| Storage    | -40 °C ~ +85 °C | 0% ~ 95% |

###### GPS Antenna Parameter

| Item                                       | Specifications       | PET  |
| ------------------------------------------ | -------------------- | ---- |
| Range of Receiving Frequency               | 1575.42±1.1          | ±2.5 |
| Center Frequency (MHz) w/ 30mm2 GND plane  | 1575.42              | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10dB)      | ≥10                  | ±0.5 |
| VSWR (in Center Frequency)                 | ≤2.0                 | ±0.5 |
| Gain (Zenith) (dBi Typ) w/ 70mm2 GND Plane | 4.5                  | ±0.5 |
| Axial Ratio (dB) w/ 70mm2 GND Plane        | 3.0                  | ±0.2 |
| Polarization                               | Righ-Handle Circular | -    |
| Impedance (Ω)                              | 50                   | -    |
| Frequency Temparature Coefficient (ppm/°C) | 0 ±10                | -    |

Amplifier Specifications are listed in the table below:

| Item              | Specifications |
| ----------------- | -------------- |
| Frequency Range   | 1575.42 MHz    |
| Gain              | 27 dB          |
| VSWR              | ≤ 2.0 V        |
| Noise Coefficient | ≤ 2.0 dBm      |
| DC Voltage        | 3 ~ 5V         |
| DC Current        | 5 ± 2 mA       |

Environmental test performance specifications are listed below:

| Item              | Normal Temp. | High Temp. | Low Temp.  |
| ----------------- | ------------ | ---------- | ---------- |
| Amplifier Gain    | 27dB ± 2.0   | 27dB ± 2.0 | 27dB ± 2.0 |
| VSWR              | ≤ 2.0        | ≤ 2.0      | ≤ 2.0      |
| Noise Coefficient | ≤ 2.0        | ≤ 2.0      | ≤ 2.0      |

:::tip 📝 NOTE
**High Temperature test :** soap in temperature (85°C) and humidity (95%) chamber for 24-hour and return normal temperature (at least for 1-hour) without visual shape change.<br> **Low temperature test**: soap in temperature (-40°C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.
:::

#### Electrical Characteristics

##### Power Consumption

###### Working Mode

The board supports to enable the GPS low power mode, it has a 3-axis MEMS Sensor LIS3DH, which can detect the user's motion status, when the device is stationary, it will enter the low power sleep mode, reducing the overall power consumption and increase battery life. The power consumption as shown in the following table.

| Mode        | Power Consumption                       |
| ----------- | --------------------------------------- |
| Sleep Mode  | 14.5µA (Minimum)                        |
| Normal Mode | 174mA (Maximum) @ 20dBm and GPS Enabled |

###### Power Requirements

The RAK5205 LoRa Tracker Board has an operating voltage of 3.7V. It can be powered by micro USB with 5V Max.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/powered-by-micro-usb.png"
  width="60%"
  caption="Powered by Micro USB"
/>

The board can also be powered by a 3.7V Li-Ion battery. You can connect a 5V solar panel charger to recharge the Li-Ion battery.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-with-5v-solar-panel-plastic-enclosure-and-li-ion-battery.png"
  width="50%"
  caption="RAK5205 With 5V Solar Panel, Plastic Enclosure and Li-ion Battery"
/>

#### Environmental Requirements

The table below lists the operation and storage temperature requirements:

| Parameter             | Min.   | Typical | Max.   |
| --------------------- | ------ | ------- | ------ |
| Operation Temp. Range | -35 °C | +25 °C  | +60 °C |
| Extended Temp. Range  | -40 °C | -       | +80 °C |
| Storage Temp. Range   | -40 °C | -       | +80 °C |

#### Mechanical Characteristics

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-detailed-dimensions.jpg"
  width="75%"
  caption="RAK5205 Detailed Dimensions"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-vc-1.png"
  width="100%"
  caption="Schematic Diagram - 1"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-vc-2.png"
  width="100%"
  caption="Schematic Diagram - 2"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-vc-3.png"
  width="100%"
  caption="Schematic Diagram - 3"
/>


### Software

Download the supported firmwares of RAK5205 in the table provided below. 

#### Firmware

| Model       | Supported Firmwares                   | Version   | Source                                                                                                                                        |
| ----------- | ------------------------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK5205 - H | EU868 / US915 / AU915 / KR920 / IN865 | V3.0.0.12 | [Download](https://downloads.rakwireless.com/LoRa/RAK7205-Tracker/Firmware/RUI_RAK5205_V3.0.0.12.H.T1%28EU868-US915-AU915-KR920-IN865%29.rar) |
| RAK5205 - L | EU433 / CN470                         | V3.0.0.12 | [Download](https://downloads.rakwireless.com/LoRa/RAK7205-Tracker/Firmware/RUI_RAK5205_V3.0.0.12.L.T1%28EU433-CN470%29.rar)                   |
