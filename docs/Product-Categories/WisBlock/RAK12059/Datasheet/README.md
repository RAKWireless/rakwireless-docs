---
rak_desc: Provides comprehensive information about your RAK12059 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12059/RAK12059.png
tags:
  - datasheet
  - wisblock
  - RAK12059
prev: ../Overview/
next: false
---

# RAK12059 WisBlock Liquid Level Sensor Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/RAK12059_front_back.png"
  width="60%"
  caption="RAK12059 WisBlock Liquid Level Sensor"
/>

### Description

RAK12059 is a WisBlock Liquid Level Sensor module that extends the WisBlock system with a Liquid Level Sensor from MILONE. It comes with a ready-to-use software library and tutorial, making it easy to build a liquid-level data acquisition system. Liquid-level data is interfaced via I2C. Additionally, it can be mounted to the sensor slot of the WisBlock Base board.

### Product Features

* **Sensor specifications**
    *  Active sensor length：213&nbsp;mm x 315&nbsp;mm x 618&nbsp;mm
    *  I2C interface
    *  3.3&nbsp;V power supply
    *  Operating temperature range：-9&nbsp;°C to +65&nbsp;°C

* **Size**
    * 10 x 23&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK12059 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12059 module can be mounted on the slots: **A, B, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK12059 WisBlock Liquid Level Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK12059 WisBlock Light Sensor.

#### Chipset

| Vendor    | Part Number          |
| --------- | -------------------- |
| MILONE    | Liquid Level Sensor  |

#### Pin Definition

The RAK12059 WisBlock Liquid Level Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12059 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition are shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/RAK12059_pinout.png"
  width="50%"
  caption="RAK12059 WisBlock Liquid Level Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:
**I2C**-related pins, **ALERT**, **3V3_S**, and **GND** are connected to the WisBlock connector.
:::

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description           | Min. | Nom.   | Max. | Unit |
| ------ | --------------------- | ---- | ------ | ---- | ---- |
| 3V3    | Power Supply Voltage  | -    | 3.3    | -    | V    |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK12059 module.

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK12059 WisBlock Liquid Level Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK12059 module.

<rk-img
  src="/assets/images/wisblock/rak12059/datasheet/rak12059-schematic.png"
  width="100%"
  caption="RAK12059 WisBlock Liquid Level Sensor schematics"
/>
