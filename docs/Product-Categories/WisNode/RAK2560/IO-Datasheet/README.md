---
rak_desc: Provides comprehensive information about your RAK2560 WisNode Probe IO to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2560/overview/RAK2560.jpg
prev: ../Hub-Datasheet/
next: ../Probe-Datasheet/
tags:
  - datasheet
  - wisnode
  - RAK2560
  - SensorIO
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_ISED_Report.pdf]
---

# RAK2560 WisNode Sensor IO Datasheet

## Overview

### Description

The **Probe IO** is an accessory for the Sensor Hub solution platform. It supports modules with various communication protocols like RS-485, SDI-12, 4-20&nbsp;mA signal, and DI/DO. This accessory can work with RAKwireless modules as well as third-party ones to ensure the best solution for your project.

:::tip 📝 NOTE:
The Probe IO could not be used as a standalone product. You need the [RAK2560 WisNode Sensor Hub](https://store.rakwireless.com/products/sensor-hub?utm_source=RAK2560WisNodeSense&utm_medium=Document&utm_campaign=BuyFromStore) in order to use this probe.
:::

### Product Features

- Support one RS-485 device
- Support one SDI-12 device
- Support one 4-20&nbsp;mA device
- Support two DO (dry contact)
- Support one DI
- Supply 5&nbsp;V / VIN / 24&nbsp;V (0.5&nbsp;A) power
- One-wire protocol
- Waterproof (IP67-rated for the probe body)

## Specifications

### Overview

#### Dimensions

The **Probe IO** dimensions are 74&nbsp;x&nbsp;33&nbsp;x&nbsp;26&nbsp;mm. It is l shape. There is one physical port for connection to the Sensor Hub with a 50&nbsp;cm cable length. The **Probe IO** is IP67-rated and suitable for outdoor use. The device is designed to meet the UL/EN60950-22 standard.

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/probe-io-dimensions.png"
  width="65%"
  caption="RAK2560 WisNode Probe IO dimensions"
/>

#### Block Diagram

RAK2560's **Probe IO** uses MCU STM32L051C8 for a control center. The **Probe IO** supports four (4) types of device interfaces and DI / DO to control or monitor the working environment directly.

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/block-diagram.png"
  width="80%"
  caption="RAK2560 WisNode Probe IO block diagram"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It shows the pinouts of the Probe IO and their corresponding functions and diagram. It also covers the power supply and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK2560 WisNode Probe IO.

#### Pin Definition

##### Connector (Sensor Hub Side)

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/sensor-hub-connector.png"
  width="30%"
  caption="RAK2560 WisNode Probe IO connector"
/>

| Pin No. | Name          | Type | Description                   | Remarks                                                       |
| ------- | ------------- | ---- | ----------------------------- | ------------------------------------------------------------- |
| 1       | VIN           | PI   | 12&nbsp;V adapter in          | RAK standard adapter                                          |
| 2       | GND           | -    | Ground                        | -                                                             |
| 3       | One-wire UART | IO   | Communication with Sensor Hub | -                                                             |
| 4       | Vcc_Probe     | PI   | Power supply from the Hub     | 3.3&nbsp;V<sub>DC</sub> support mode; 3.4&nbsp;V battery mode |
| 5       | Reserved      | -    | Not defined for now           | Reserved for future applications                              |

##### Probe IO PCBA

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/pcba-pin-definition.jpg"
  width="45%"
  caption="RAK2560 WisNode Probe IO PCBA pin definition"
/>

| J1     | Name      | Description            |
| ------ | --------- | ---------------------- |
| Pin 14 | 485_A+    | RS-485 port            |
| Pin 15 | 485_B-    | RS-485 port            |
| Pin 16 | UART1_TX  | MCU UART-TX            |
| Pin 17 | UART1_RX  | MCU UART-RX            |
| Pin 18 | GND       | -                      |
| Pin 19 | GND       | -                      |
| Pin 20 | 4-20mA_IN | 4-20&nbsp;mA analog in |
| Pin 21 | GND       | -                      |
| Pin 22 | GPIO1     | MCU GPIO               |
| Pin 23 | GPIO2     | MCU GPIO               |
| Pin 24 | GPIO3     | MCU GPIO               |
| Pin 25 | GND       | -                      |
| Pin 26 | SDI-12_IN | -                      |

<br>

| J6     | Name      | Description             |
| ------ | --------- | ----------------------- |
| Pin 1  | DO0_OUT   | Dry contact out         |
| Pin 2  | DO0_COM   | Dry contact common      |
| Pin 3  | DO1_OUT   | Dry contact out         |
| Pin 4  | DO1_COM   | Dry contact common      |
| Pin 5  | DI        | Dry contact in          |
| Pin 6  | DI_COM    | Dry contact common      |
| Pin 7  | DC3v3_OUT | Supply 150&nbsp;mA      |
| Pin 8  | GND       | -                       |
| Pin 9  | GND       | -                       |
| Pin 10 | VIN       | Adapter power           |
| Pin 11 | GND       | -                       |
| Pin 12 | DC24V     | Supply current 1&nbsp;A |
| Pin 13 | 5V0       | Supply current 1&nbsp;A |

##### Standard Type for Probe IO

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/sp11-device-side.png"
  width="18%"
  caption="RAK2560 WisNode Probe IO SP11 device side"
/>

| Type       | Pin 1         | Pin 2 | Pin 3 | Pin 4   | Pin 5     |
| ---------- | ------------- | ----- | ----- | ------- | --------- |
| RS-485     | VIN/24&nbsp;V | GND   | NC    | B-      | A+        |
| SDI-12     | VIN/24&nbsp;V | GND   | NC    | NC      | Data      |
| 4-20&nbsp; | VIN/24&nbsp;V | GND   | NC    | NC      | Signal-in |
| DO         | VIN/24&nbsp;V | GND   | NC    | DO0_COM | DO0_OUT   |
| DI         | VIN/24&nbsp;V | GND   | NC    | DI_COM  | DI        |


#### Power Supply

The **Probe IO** must be supplied through the 3.4~3.6&nbsp;V SP11 Pin 4 from the main body of the Sensor Hub. The module's power is only supplied through the VIN / 24&nbsp;V of SP11 Pin 1.

##### Power Consumption

| Mode        | Condition        | Min         | Typical     | Max         |
| ----------- | ---------------- | ----------- | ----------- | ----------- |
| Active mode | Read sensor data | 3.2&nbsp;mA | 3.5&nbsp;mA | 3.6&nbsp;mA |
| Sleep mode  | Sleep mode       | 40&nbsp;uA  | 60&nbsp;uA  | 90&nbsp;uA  |


#### Environmental Requirements
##### Operating Conditions

| Parameter                    | Min         | Typical     | Max         |
| ---------------------------- | ----------- | ----------- | ----------- |
| Normal operating temperature | –30°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |

#### Sensor Connection Diagram

The **RAK2560** can support both Sensor Probes and Probe IO in all possible combinations.

:::tip 📝 NOTE:
If you want to add a Probe IO to your setup, the Sensor Hub must be supplied by an external 12&nbsp;V<sub>DC</sub> power source.
:::

<rk-img
  src="/assets/images/wisnode/rak2560/io-datasheet/connection-schematics.png"
  width="90%"
  caption="RAK2560 WisNode Probe IO connection schematics"
/>



## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

