---
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wistrio
  - RAK5205
rak_desc: Covers the comprehensive information of your RAK5205 WisTrio LPWAN Tracker to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wistrio/rak7205-5205/quickstart/overview/RAK5205_home.svg
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

This is the ideal LPWAN tracker board with a built-in sensor available in the market. It is best used as a quick prototyping module for Internet-of-Things and LoRaWAN Network integration. Its perfect use cases for IoT applications include asset tracking, smart vehicle management, and location-based services.

### Features

- Compatible with **96Boards IoT Edition Specification**
- With **SX1276 LoRa** long-range and **Ublox Max 7Q GPS** modems which allow to enable the GPS low power mode
- Integrated the ultra-low-power microcontroller **ARM Cortex-M3 STM32L1**
- Built-in environmental **sensor BME680** (gas, pressure, humidity, temperature) and **3-axis MEMS sensor LIS3DH** (accelerometer)
- **SMA/iPEX antenna** optional for LoRa and GPS
- Supports latest LoRaWAN 1.0.2 protocol, activation by OTAA/ABP
- Supports programmable bit rate up to 300&nbsp;kbps
- Supports rechargeable battery through micro USB or 5&nbsp;V solar charging ports
- Supports sleep mode, the power consumption down to 14.5&nbsp;μA
- Supports global license-free ISM band: EU433, CN470, EU868, US915, AS923, AU915, KR920 and IN865
- Supports I2C, GPIOs, UART, and ADC interfaces.

## Specifications

### Overview

The overview covers the RAK5205 WisTrio board top view and also, its block diagram with the corresponding external interfaces of the RAK5205.

#### Board Overview

Figure 1 shows the top view and external interfaces of the RAK5205 LPWAN tracker board.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-lpwan-tracker-interfaces.png"
  width="50%"
  caption="RAK5205 WisTrio LPWAN Tracker Interfaces"
/>

The dimension and the bottom view of the board is shown below. Sensor ICs are also labeled for your reference.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-dimension-and-sensors-available.svg"
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

| Pin | Description          |
| --- | -------------------- |
| 1   | USB_VBUS (+5&nbsp;V) |
| 2   | USB_DM               |
| 3   | USB_DP               |
| 4   | NC                   |
| 5   | GND                  |

##### LEDs

Three LEDs are used to indicate operating status, here are their functions:

- 🟢 **GREEN LED** : Status - Defined By User
- 🔵 **BLUE LED**: Status - Defined By User
- 🔴 **RED LED** : Charging Status - indicates the Li-ion Battery is Charging

##### Reset Push Button

Reset Push Button is used to reset the RAK811 module. To reset the module, push the Reset Button for one second.

#### Pin Definition

Here are the six connectors for RAK5205 tracker board: **P1**, **P2**, **J11**, **J12**, **J22**, and **J25**

##### P1

Li-ion Battery Connector: Pin1 connected to VBATT, Pin2 connected to GND 

##### P2

Solar Cell Interface: Pin1 connected to VBUS, Pin2 connected to GND

##### J11

Pin1 is connected to VBUS. Pin2 is connected to VBIN. J11 should be closed when no battery is connected, and it should be open when a battery is connected.

##### J12

Pin1 is connected to BOOT0. Pin2 is connected to VDD. To flash a firmware, connect Pin1 and Pin2 with a jumper and reset the device. For normal operation, remove the jumper.

##### J22

The 30 pins follow the 96Board pin definition.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-pinout-diagram.png"
  width="60%"
  caption="RAK5205 Pinout Diagram"
/>

| Pin | Pin Name  | Description                                                                                                                                                                         |
| --- | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | NC        | No Connection                                                                                                                                                                       |
| 2   | NC        | No Connection                                                                                                                                                                       |
| 3   | UART1_TX  | UART1_TX                                                                                                                                                                            |
| 4   | NC        | No Connection                                                                                                                                                                       |
| 5   | UART1_RX1 | UART1_RX1 (If you want to use this UART interface, need to connect RX pin and RX1 pin of J25 via jumper.).                                                                          |
| 6   | NC        | No Connection                                                                                                                                                                       |
| 7   | NC        | No Connection                                                                                                                                                                       |
| 8   | NC        | No Connection                                                                                                                                                                       |
| 9   | GND       | Ground                                                                                                                                                                              |
| 10  | GND       | Ground                                                                                                                                                                              |
| 11  | VCCIN     | 5&nbsp;V out                                                                                                                                                                        |
| 12  | VCC_3V3   | 3.3&nbsp;V out                                                                                                                                                                      |
| 13  | PA8       | GPIO Pin. This pin can be controlled via AT Command or RUI with GPIO number 5. (On RAK811(L) low frequency based boards like EU433, this is mapped to STM32 pin PB13).              |
| 14  | PB3       | GPIO Pin. This pin can be controlled via AT Command or RUI with GPIO number 15. (On RAK811(L) low frequency based boards like EU433, this is mapped to STM32 pin PA3).              |
| 15  | NC        | No Connection                                                                                                                                                                       |
| 16  | PB5       | GPIO Pin. This pin can be controlled via AT Command or RUI with GPIO number 16.                                                                                                     |
| 17  | SWD_TMS   | GPIO Pin / R21, R22 pull-up 10K resistor can be used as JTAG interface.                                                                                                             |
| 18  | SWD_CLK   | GPIO Pin / R21, R22 pull-up 10K resistor can be used as JTAG interface.                                                                                                             |
| 19  | LED1_PA12 | LED pin is active low. This pin can be controlled via AT Command or RUI with GPIO number 8.                                                                                         |
| 20  | LED2_PB4  | LED pin is active low. This pin can be controlled via AT Command or RUI with GPIO number 9. (On RAK811(L) low frequency based boards like EU433, this is mapped to STM32 pin PA11). |
| 21  | NC        | No Connection                                                                                                                                                                       |
| 22  | SCL       | I²C                                                                                                                                                                                 |
| 23  | NC        | No Connection                                                                                                                                                                       |
| 24  | SDA       | I²C                                                                                                                                                                                 |
| 25  | NC        | No Connection                                                                                                                                                                       |
| 26  | PB12      | ADC Interface. This analog pin can be read via AT Command or RUI with GPIO number 2.                                                                                                |
| 27  | NC        | No Connection                                                                                                                                                                       |
| 28  | NC        | No Connection                                                                                                                                                                       |
| 29  | RST       | Reset Pin                                                                                                                                                                           |
| 30  | NC        | No Connection                                                                                                                                                                       |

##### J25

To connect the Serial output to the USB connector, RX and RxCP must be connected. To connect the Serial output to the UART pins on the J22 connector, RX and RX1 must be connected.

#### RF Characteristics

##### Operating Frequencies

The board supports all LoRaWAN frequency channels as stated in the table below which is easy to configure while building the firmware from the source code.

| Region        | Frequency (Mhz) |
| ------------- | --------------- |
| Europe        | EU433, EU868    |
| China         | CN470           |
| North America | US915           |
| Asia          | AS923           |
| Australia     | AU915           |
| Korea         | KR920           |
| Indian        | IN865           |

#### Antennas

##### LoRa Antenna

###### Overview

The LoRa Antenna and Interfaces are shown in Figure 6:

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

| Items                              | Specifications                           |
| ---------------------------------- | ---------------------------------------- |
| VSWR (Voltage Standard Wave Ratio) | 1.5:1                                    |
| Gain                               | 2.0&nbsp;dBm                             |
| Working Temperature &amp; Humidity | T:-35&nbsp;°C ~ +80&nbsp;°C, H: 0% ~ 95% |
| Storage Temperature &amp; Humidity | T:-40&nbsp;°C ~ +85&nbsp;°C, H: 0% ~ 95% |

##### GPS Antenna

The GPS antenna and interfaces for RAK5205 tracker board is shown in Figure 9:

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

| Conditions | Temperature               | Humidity |
| ---------- | ------------------------- | -------- |
| Working    | -35&nbsp;°C ~ +80&nbsp;°C | 0% ~ 95% |
| Storage    | -40&nbsp;°C ~ +85&nbsp;°C | 0% ~ 95% |

###### GPS Antenna Parameter

| Item                                             | Specifications       | PET  |
| ------------------------------------------------ | -------------------- | ---- |
| Range of Receiving Frequency                     | 1575.42±1.1          | ±2.5 |
| Center Frequency (MHz) w/ 30&nbsp;mm2 GND plane  | 1575.42              | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10&nbsp;dB)      | ≥10                  | ±0.5 |
| VSWR (in Center Frequency)                       | ≤2.0                 | ±0.5 |
| Gain (Zenith) (dBi Typ) w/ 70&nbsp;mm2 GND Plane | 4.5                  | ±0.5 |
| Axial Ratio (dB) w/ 70&nbsp;mm2 GND Plane        | 3.0                  | ±0.2 |
| Polarization                                     | Righ-Handle Circular | -    |
| Impedance (Ω)                                    | 50                   | -    |
| Frequency Temparature Coefficient (ppm/°C)       | 0 ±10                | -    |

Amplifier Specifications are listed in the table below:

| Item              | Specifications   |
| ----------------- | ---------------- |
| Frequency Range   | 1575.42&nbsp;MHz |
| Gain              | 27&nbsp;dB       |
| VSWR              | ≤ 2.0&nbsp;V     |
| Noise Coefficient | ≤ 2.0&nbsp;dBm   |
| DC Voltage        | 3 ~ 5&nbsp;V     |
| DC Current        | 5 ± 2&nbsp;mA    |

Environmental test performance specifications are listed below:

| Item              | Normal Temp.     | High Temp.       | Low Temp.        |
| ----------------- | ---------------- | ---------------- | ---------------- |
| Amplifier Gain    | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 |
| VSWR              | ≤ 2.0            | ≤ 2.0            | ≤ 2.0            |
| Noise Coefficient | ≤ 2.0            | ≤ 2.0            | ≤ 2.0            |

:::tip 📝 NOTE
**High Temperature Test**: Soap in temperature (85&nbsp;°C) and humidity (95%) chamber for 24-hour and return normal temperature (at least for 1-hour) without visual shape change.<br> **Low Temperature Test**: Soap in temperature (-40&nbsp;°C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.
:::

#### Electrical Characteristics

##### Power Consumption

###### Working Mode

The board supports to enable the GPS low-power mode. It has a 3-axis MEMS Sensor LIS3DH, which can detect the user's motion status. When the device is stationary, it will enter the low power sleep mode, reducing the overall power consumption and increase battery life. The power consumption is shown in the following table.

| Mode        | Power Consumption                                   |
| ----------- | --------------------------------------------------- |
| Sleep Mode  | 14.5&nbsp;µA (Minimum)                              |
| Normal Mode | 174&nbsp;mA (Maximum) @ 20&nbsp;dBm and GPS Enabled |

###### Power Requirements

The RAK5205 LoRa Tracker Board has an operating voltage of 3.7&nbsp;V. It can be powered by micro USB with 5&nbsp;V Max.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/powered-by-micro-usb.png"
  width="60%"
  caption="Powered by Micro USB"
/>

The board can also be powered by a 3.7&nbsp;V Li-Ion battery. You can connect a 5&nbsp;V solar panel charger to recharge the Li-Ion battery.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/datasheet/rak5205-with-5v-solar-panel-plastic-enclosure-and-li-ion-battery.png"
  width="50%"
  caption="RAK5205 With 5V Solar Panel, Plastic Enclosure, and Li-ion Battery"
/>

#### Environmental Requirements

The table below lists the operation and storage temperature requirements:

| Parameter             | Min.        | Typical     | Max.        |
| --------------------- | ----------- | ----------- | ----------- |
| Operation Temp. Range | -35&nbsp;°C | +25&nbsp;°C | +60&nbsp;°C |
| Extended Temp. Range  | -40&nbsp;°C | -           | +80&nbsp;°C |
| Storage Temp. Range   | -40&nbsp;°C | -           | +80&nbsp;°C |

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

| Model       | Supported Firmwares                   | Version   | Source                                                                                                         |
| ----------- | ------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| RAK5205 - H | EU868 / US915 / AU915 / KR920 / IN865 | V3.0.0.14.H.R | [Download](https://downloads.rakwireless.com/LoRa/RAK7205-Tracker/Firmware/RAK5205_7205_H_Latest_Firmware.zip) |
| RAK5205 - L | EU433 / CN470                         | V3.0.0.14.L.R | [Download](https://downloads.rakwireless.com/LoRa/RAK7205-Tracker/Firmware/RAK5205_7205_L_Latest_Firmware.zip) |