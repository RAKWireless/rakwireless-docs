---
rak_desc: Provides comprehensive information about your RAK1904 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak1904/RAK1904.png
tags:
  - datasheet
  - wisblock
  - RAK1904
prev: ../Quickstart/
next: false
---

# RAK1904 WisBlock 3-axis Acceleration Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK1904.svg"
  width="50%"
  caption="RAK1904 WisBlock Sensor Mounting"
/>

### Description

RAK1904 is a WisBlock Sensor that extends the WisBlock system with an ST LIS3DH 3-axis acceleration sensor. A ready-to-use SW library and tutorial make it easy to build up a motion detection and acceleration data acquisition system. It has an ultra-low-power high-performance three-axis linear accelerometer with a digital I2C interface. The device features ultra-low-power operational modes that allow advanced power saving and smart embedded functions.

The accelerometer of the RAK1904 module can be dynamically configured to work in the scales of ±2g/±4g/±8g/±16g and is capable of measuring accelerations with output data rates from 1&nbsp;Hz to 5.3&nbsp;kHz.

### Features
* **User selectable scales**: ±2g/±4g/±8g/±16g
* **Data acquisition rates**: from 1&nbsp;Hz to 5.3&nbsp;kHz
* **Voltage Supply**: 3.3&nbsp;V
* **Current Consumption**: 0.5&nbsp;uA to 11&nbsp;uA
* **Chipset**: ST LIS3DH
* **Module size**: 10 x 10&nbsp;mm

## Specifications
### Overview


#### Mounting

**Figure 2** shows the mounting mechanism of the RAK1904 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK1904 module can be mounted on the slots: **A, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK1904 WisBlock Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK1904 WisBlock 3-axis Acceleration Sensor Module.


#### Chipset
| Vendor | Part number |
| ------ | ----------- |
| ST     | LIS3DH      |

#### Pin Definition

The RAK1904 WisBlock 3-axis Acceleration Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK1904 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK1904_pinout.svg"
  width="60%"
  caption="RAK1904 WisBlock Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:
- Only the I2C related pins, interrupt pins, VDD, and GND are connected to this module.
- Pins 10, 12, 13, and 15 are connected to the interrupt pins of LIS3DH, refer to the datasheet of LIS3DH for details.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT B | SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ | ------ | ------ |
| WB_IO1 | WB_IO2 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |



#### Sensors
##### Acceleration Sensor
| Symbol | Parameter         | Test Condition                                | Min.  | Typ.  | Max.  |   Unit   |
| ------ | ----------------- | --------------------------------------------- | :---: | :---: | :---: | :------: |
| FS     | Measurement Range | FS bit set to 00                              |       | ±2.0  |       |    g     |
|        |                   | FS bit set to 01                              |       | ±4.0  |       |    g     |
|        |                   | FS bit set to 10                              |       | ±8.0  |       |    g     |
|        |                   | FS bit set to 10                              |       | ±16.0 |       |    g     |
| So     | Sensitivity       | FS bit set to 00  <br /> High-resolution mode |       |   1   |       | mg/digit |
|        |                   | FS bit set to 00  <br /> Normal mode          |       |   4   |       | mg/digit |
|        |                   | FS bit set to 00  <br /> Low-power mode       |       |  16   |       | mg/digit |
|        |                   | FS bit set to 01  <br /> High-resolution mode |       |   2   |       | mg/digit |
|        |                   | FS bit set to 01  <br /> Normal mode          |       |   8   |       | mg/digit |
|        |                   | FS bit set to 01  <br /> Low-power mode       |       |  32   |       | mg/digit |
|        |                   | FS bit set to 10  <br /> High-resolution mode |       |   4   |       | mg/digit |
|        |                   | FS bit set to 10  <br /> Normal mode          |       |  16   |       | mg/digit |
|        |                   | FS bit set to 10  <br /> Low-power mode       |       |  64   |       | mg/digit |
|        |                   | FS bit set to 11  <br /> High-resolution mode |       |  12   |       | mg/digit |
|        |                   | FS bit set to 11  <br /> Normal mode          |       |  48   |       | mg/digit |
|        |                   | FS bit set to 11  <br /> Low-power mode       |       |  192  |       | mg/digit |

#### Electrical Characteristics
##### Recommended Operating Conditions

| Symbol          | Description                 | Min.  | Nom.  | Max.  | Unit  |
| --------------- | --------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>  | Power supply for the module | 1.71  |  3.3  |  3.6  |   V   |
| I<sub>pdn</sub> | Power-down current          |   -   |  0.5  |   -   |  uA   |
| I<sub>DD </sub> | @50&nbsp;Hz                 |   -   |  11   |   -   |  uA   |
| I<sub>DD </sub> | @1&nbsp;Hz                  |   -   |   2   |   -   |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK1904 module.

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK1904 WisBlock Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
Figure 5 shows the schematic of the RAK1904 module.

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/rak1904-schematics.png"
  width="100%"
  caption="RAK1904 WisBlock Sensor schematics"
/>

