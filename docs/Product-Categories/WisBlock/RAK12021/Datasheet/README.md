---
rak_desc: Provides comprehensive information about your RAK12021 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12021/RAK12021.png
tags:
  - datasheet
  - wisblock
  - RAK12021
prev: ../Quickstart/
next: false
---

# RAK12021 WisBlock RGB Sensor Module Datasheet

## Overview

### Description

RAK12021 is a WisBlock RGB Sensor that extends the WisBlock system which is based on TCS37725FN from AMS. The Red, Green, Blue, and Clear (RGBC) light sensing can be obtained via I2C interface. An external IR LED is also added for Proximity Detection.

### Features

* RGB sensor module
* Color light sensing with IR-Blocking filter
* Proximity detection
* Maskable light and proximity interrupt
* Low power (2.5&nbsp;uA sleep current)
* I2C interface
* 3.3&nbsp;V power supply
* Current Consumption: 2.5&nbsp;uA - 235&nbsp;uA
* Chipset: AMS TCS37725FN
* **Module size**: 10 x 10&nbsp;mm

## Specifications

### Overview


#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12021 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12021 module can be mounted on the slots: **A, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12021/datasheet/rak12021-mounting.png"
  width="50%"
  caption="RAK12021 mounting mechanism"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12021 WisBlock RGB Sensor Module.

####  Chipset

| Vendor | Part number |
| ------ | ----------- |
|  AMS   | TCS37725FN  |

#### Pin Definition

The RAK12021 WisBlock RGB Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12021 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak12021/datasheet/RAK12021_Pinout.svg"
  width="60%"
  caption="RAK12021 pinout"
/>

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ | ------ |
| WB_IO1 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |

| INT (Interrupt Pin) |
| ------------------- |
|       WB_IO2        |

:::tip 📝 NOTE:
- Only the **I2C** related pin, **SENSOR_INT**, **3V3_S**, and **GND** are connected to this module.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12021 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12021 module.
:::

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Parameter                             | Min.  | Max.  | Unit  |
| ------------------------------------- | :---: | :---: | :---: |
| 3V3_S                                 | -0.5  |  3.8  |   V   |
| Output terminal current (except LDR)  |  -1   |  20   |  uA   |
| ESD tolerance, human body model       |   -   | ±2000 |   V   |

##### Power Supply Ratings

| Symbol          | Description              | Condition                      | Min.  | Nom.  | Max.  | Unit  |
| --------------- | ----------------------- | :-----------------------------: | :---: | :---: | :---: | :---: |
| 3V3_S           | Supply voltage          | Supply voltage                  |  2.7  |  3.3  |  3.6  |   V   |
| I<sub>DD1</sub> | Operation mode current  | Active - LDR pulses off         |   -   |  235  |   -   |  uA   |
| I<sub>DD2</sub> | Operation mode current  | Wait state                      |   -   |  65   |   -   |  uA   |
| I<sub>DD3</sub> | Operation mode current  | Sleep state - no I2C activity   |   -   |  2.5  |   10  |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK12021 module.

<rk-img
  src="/assets/images/wisblock/rak12021/datasheet/rak12021-mechdrawing.png"
  width="60%"
  caption="RAK12021 mechanical drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12021/datasheet/rak12021-wisconnector.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK12021 module.

**D1** is the external IR LED for proximity detection.

<rk-img
  src="/assets/images/wisblock/rak12021/datasheet/rak12021-schematic.png"
  width="100%"
  caption="RAK12021 schematics"
/>

