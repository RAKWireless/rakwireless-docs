---
rak_desc: Provides comprehensive information about your RAK15005 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15005/RAK15005.png
tags:
  - datasheet
  - wisblock
  - RAK15005
prev: ../Quickstart/
next: false
---

# RAK15005 WisBlock 128kByte FRAM Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/RAK15005_front_back.png"
  width="60%"
  caption="RAK15005 WisBlock 128kByte FRAM Module"
/>

### Description

RAK15005 is a WisBlock 128kByte FRAM module that extends the WisBlock system with a MB85RC1MTPNF memory module from Fujitsu. This module is interfaced via I2C. Additionally, it can be mounted to the sensor slot of the WisBlock Base board.

### Features

* **Sensor specifications**
    *  Temperature Range：-40&nbsp;°C to +85&nbsp;°C
    *  I2C compatible digital interface, supports 3.4&nbsp;MHz
    *  Operating power supply current:
          *  0.71&nbsp;mA (Typ @ 3.4&nbsp;MHz)
          *  1.2&nbsp;mA (Max @ 3.4&nbsp;MHz)
    *  Standby current 15&nbsp;uA (Typical)
    *  131,072 words x 8 bits
    *  High Reliability：
       - Read/write endurance：10,000,000,000,000/byte
       - Data retention：
           - 10 years(+85&nbsp;°C)
           - 95 years(+55&nbsp;°C)
           - Over 200 years（+35&nbsp;°C）

* **Size**
    * 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK15005 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK15005 module can be mounted on the slots: **A, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK15005 WisBlock 128kByte FRAM Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK15005 WisBlock 128kByte FRAM Module.

#### Chipset

| Vendor    | Part Number  |
| --------- | ------------ |
| Fujitsu   | MB85RC1MTPNF |

#### Pin Definition

The RAK15005 WisBlock 128kByte FRAM Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK15005 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition are shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/RAK15005_pinout.png"
  width="40%"
  caption="RAK15005 WisBlock 128kByte FRAM Module Pinout Diagram"
/>

The **WisBlock Sensor** connector is also compatible for this module. IO used for **WP** pin at **Pin 12** will depend on what sensor slot the module is plugged in. The table below shows the compatible pins used by different sensor slots:

**WP (Write Protect Pin)**

| Slot A | Slot C | Slot D | Slot E | Slot F |
| ------ | ------ | ------ | ------ | ------ |
| IO1    | IO3    | IO5    | IO4    | IO6    |

::: tip 📝 NOTE

**RAK15005** should not be plugged in **Slot B** as it is dedicated for **IO2 (WisBlock IO2 pin)** that controls the **3V3_S** voltage output.

:::

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                     | Min. | Nom.   | Max. | Unit |
| ------ | ------------------------------- | ---- | ------ | ---- | ---- |
| VDD    | Power supply for the module     |      | 3.3    |      | V    |
| Istb   | Standby current                 | -    | -      | 15   | uA   |
| Icc    | Supply current, Read            | -    | -      | 710  | uA   |
| Icc    | Supply current, Write           | -    | -      | 710  | uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK15005 module.

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK15005 WisBlock 128kByte FRAM Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK15005 module.

<rk-img
  src="/assets/images/wisblock/rak15005/datasheet/rak15005-schematic.png"
  width="100%"
  caption="RAK15005 WisBlock 128kByte FRAM Module schematics"
/>



