---
rak_desc: Provides comprehensive information about your RAK12008 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12008/RAK12008.png
tags:
  - datasheet
  - wisblock
  - RAK12008
prev: ../Overview/
next: false
---

# RAK12008 WisBlock CO2 Sensor Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/RAK12008_front_back.png"
  width="50%"
  caption="RAK12008 WisBlock Sensor"
/>

### Description

RAK12008 is a WisBlock CO2 Sensor Module that extends the WisBlock system with a Sensirion STC31 CO2 Sensor. The CO2 concentration data is interfaced via I2C. The STC31 sensor from Sensirion is based on thermal conductivity.

A ready-to-use software library and tutorial is included, making it simple to build a CO2 gas data acquisition system for high CO2 concentrations. Additionally, it can be mounted to the sensor slot of the WisBlock Base board.

### Product Features

* **Sensor specifications**
    *  CO2 sensor module
    *  Based on thermal conductivity
    *  I2C interface
    *  Measurement range：0 to 100 vol%
    *  Accuracy：0.5 vol% + 3% （0 to 25 vol%）；1 vol% + 3%（0 to 100 vol%）
    *  Built-in temperature sensor
    *  Operating temperature range：20&nbsp;°C to +85&nbsp;°C

* **Size**
    * 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12008 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12008 module can be mounted on the slots: **A, B, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK12008 WisBlock Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and corresponding functions and diagrams. It also covers the electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK12008 WisBlock Temperature and Humidity Sensor.


#### Chipset
| Vendor    | Part Number |
| --------- | ----------- |
| Sensirion | STC31       |

#### Pin Definition

The RAK12008 WisBlock CO2 Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12008 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition are shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/RAK12008_pinout.png"
  width="40%"
  caption="RAK12008 WisBlock Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:
Only the **I2C** related pins, **VDD** and **GND** are connected to this module.
:::

#### Sensor Characteristics

##### CO2 Sensor

| Parameter                            | Values                                                |
| ------------------------------------ | ----------------------------------------------------- |
| Calibrated for                       | CO2 in N2 and CO2 in Air                              |
| Accuracy (based on *Measured Range*) | 0.5 vol% + 3% of measured value (*from 0 to 25 vol%*) |
|                                      | 1 vol% + 3% of measured value (*from 0 to 100 vol%*)  |
| Repeatability                        | 0.2 vol%                                              |
| Temperature stability                | 0.025 vol%                                            |
| Resolution                           | 16 bit                                                |


#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description        | Condition                            | Min. | Nom. | Max. | Unit |
| ------ | ------------------ | ------------------------------------ | ---- | ---- | ---- | ---- |
| 3V3_S  | Operating  Voltage | Input voltage must within this range | 2.7  | 3.3  | 5.5  | V    |
| IDD1   | Current on 3V3_S   | Measuring                            | -    | 3    | 5    | mA   |
| IDD2   | Current on 3V3_S   | Idle state                           | -    | 50   | -    | uA   |
| IDD3   | Current on 3V3_S   | Sleep mode                           | -    | -    | 1    | uA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK12008 module.

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK12008 WisBlock Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram
**Figure 5** shows the schematic of the RAK12008 module.

<rk-img
  src="/assets/images/wisblock/rak12008/datasheet/rak12008-schematic.png"
  width="100%"
  caption="RAK12008 WisBlock Sensor schematics"
/>

