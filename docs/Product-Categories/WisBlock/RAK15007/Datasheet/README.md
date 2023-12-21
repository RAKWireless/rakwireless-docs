---
rak_desc: Provides comprehensive information about your RAK15007 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15007/RAK15007.png
tags:
  - datasheet
  - wisblock
  - RAK15007
prev: ../Quickstart/
next: false
---

# RAK15007 WisBlock 1MByte FRAM Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/RAK15007_front_back.png"
  width="60%"
  caption="RAK15007 WisBlock 512kByte FRAM Module"
/>

### Description

RAK15007 is a WisBlock 1MByte FRAM module that extends the WisBlock system with an CY15B108QN memory module from Cypress. This module is interfaced via SPI. Additionally, it can be mounted to the sensor slot of the WisBlock Base board.

### Product Features

* **Sensor specifications**
    *  Temperature Range：-40&nbsp;°C to +85&nbsp;°C
    *  SPI compatible digital interface, supports 40&nbsp;MHz
    *  Operating power supply current: 2.6&nbsp;mA (Typical @ 40&nbsp;MHz)
    *  Standby current: 3.5&nbsp;uA (Max)
    *  Sleep current: 0.9&nbsp;uA (Max)
    *  Logically organized as 1,048,576 × 8 bits
    *  High Reliability：
       - Read/write endurance：1,000,000,000,000,000/byte
       - Data retention：
           - 10 years(+85&nbsp;°C)
           - 141 years(+70&nbsp;°C)
           - 151 years(+60&nbsp;°C)
           - 160 years(+50&nbsp;°C)

* **Size**
    * 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK15007 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK15007 module can be mounted on the slots: **A, C, D, E & F**.

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK15007 WisBlock FRAM Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK15007 WisBlock FRAM Module.

#### Chipset

| Vendor    | Part Number  |
| --------- | ------------ |
| Cypress   | CY15B108QN   |

#### Pin Definition

The RAK15007 WisBlock 1MByte FRAM Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK15007 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition are  shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/RAK15007_pinout.png"
  width="40%"
  caption="RAK15007 WisBlock FRAM Module Pinout Diagram"
/>

The **WisBlock Sensor** connector is used to this module and the IO used for **WP** pin at **Pin 12** will depend on where sensor slot the module is plugged in. The table shows the compatible pins used by different sensor slots:

**WP (Write Protect Pin)**

| Slot A | Slot C | Slot D | Slot E | Slot F |
| ------ | ------ | ------ | ------ | ------ |
| IO1    | IO3    | IO5    | IO4    | IO6    |

::: tip 📝 NOTE
**RAK15007** should not be plugged in **Slot B** as it is dedicated for **IO2 (WisBlock IO2 pin)** that controls the **3V3_S** voltage output.
:::

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                     | Min. | Nom.   | Max. | Unit |
| ------ | ------------------------------- | ---- | ------ | ---- | ---- |
| VDD    | Power supply for the module     |      | 3.3    |      | V    |
| Istb   | Standby current                 | -    | -      | 3.5  | uA   |
| Izz    | Sleep current                   | -    | -      | 0.9  | uA   |
| Idd    | Operating power supply current  | -    | -      | 2.6  | mA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK15007 module.

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK15007 WisBlock FRAM Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
**Figure 6** shows the schematic of the RAK15007 module.

<rk-img
  src="/assets/images/wisblock/rak15007/datasheet/rak15007-schematic.png"
  width="100%"
  caption="RAK15007 WisBlock FRAM Module schematics"
/>
