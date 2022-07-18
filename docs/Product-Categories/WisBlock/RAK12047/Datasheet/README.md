---
rak_desc: Provides comprehensive information about your RAK12047 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12047/overview/RAK12047_home.png
tags:
  - datasheet
  - wisblock
  - RAK12047
prev: ../Quickstart/
next: false
---

# RAK12047 WisBlock VOC Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/rak12047.png"
  width="30%"
  caption="RAK12047 WisBlock VOC Sensor Module"
/>

### Description

The RAK12047 WisBlock VOC Sensor Module is an indoor air quality sensor based on MOx-based Sensirion Gas Sensor SGP40. It can detect a wide range of Volatile Organic Compounds (VOCs) and is ideal for applications such as air quality monitoring, home automation, and building IoT solutions. The sensor readings are in digital form and interfaced via the I2C protocol.

### Features
* Voltage Supply: 3.3&nbsp;V
* Current Consumption: 34&nbsp;uA to 3.0&nbsp;mA
* Chipset: Sensirion SGP40
* Measures VOC
* Measurement range: 0 to 1000&nbsp;ppm (Ethanol in clean air)
* I2C digital interface
* **Module size**: 10 x 10&nbsp;mm

## Specifications
### Overview

**Figure 2** shows the mounting mechanism of the RAK12047 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12047 module can be mounted on the slots: **A, B, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/RAK12047_mounting.png"
  width="50%"
  caption="RAK12047 WisBlock VOC Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12047 WisBlock VOC Sensor.


####  Chipset
| Vendor    | Part number |
| --------- | ----------- |
| Sensirion | SGP40       |

#### Pin Definition

The RAK12047 WisBlock VOC Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12047 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/RAK12047-pinout.svg"
  width="50%"
  caption="RAK12047 WisBlock VOC Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:
- Only the **I2C** related pin, **3V3_S**, and **GND** are connected to this module. 
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12047 module can be controlled by the WisBlock Core via **WB_IO2** (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12047 module.
:::

#### Electrical Characteristics
##### Absolute Maximum Ratings
| Parameter                   | Min.  |  Max.   | Unit  |
| --------------------------- | :---: | :-----: | :---: |
| 3V3_S                       | -0.3  |   3.6   |   V   |
| Operating temperature range |  -40  |   70    |  °C   |
| ESD                         |   -   | 2 (HBM) |  KV   |

##### Power Supply Ratings
| Symbol | Description                    | Min.  | Nom.  | Max.  | Unit  |
| ------ | ------------------------------ | :---: | :---: | :---: | :---: |
| 3V3_S  | Voltage supply                 |  1.7  |  3.3  |  3.6  |   V   |
| IDD1   | Idle current                   |   -   |  34   |  105  |  uA   |
| IDD2   | Current supply under operation |   -   |  2.6  |  3.0  |  mA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK12047 module.

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/mech-drawing.png"
  width="60%"
  caption="RAK12047 WisBlock VOC Sensor Mechanical Drawing"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/wisblock-connector.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12047/datasheet/rak12047-schem.png"
  width="100%"
  caption="RAK12047 WisBlock VOC Sensor schematic"
/>

