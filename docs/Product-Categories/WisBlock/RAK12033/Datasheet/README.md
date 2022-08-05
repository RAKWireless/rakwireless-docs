---
rak_desc: Provides comprehensive information about your RAK12033 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12033/overview/RAK12033_home.png
tags:
  - datasheet
  - wisblock
  - RAK12033
prev: ../Quickstart/
next: false
---

# RAK12033 WisBlock 6-Axis Accelerometer Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/rak12033.png"
  width="30%"
  caption="RAK12033 WisBlock 6-Axis Accelerometer Sensor Module"
/>

### Description

RAK12033 is a 6-axis Accelerometer sensor module, part of the RAKWireless WisBlock Sensor series. The module is based on IIM-42652 from TDK InvenSense. It is a smart industrial motion tracking device that supports an extended operating temperature range. The module is combined with a 3-axis gyroscope and a 3-axis accelerometer. RAK12033 can measure the angular rate and report data through a standard I2C digital interface that speeds up to 1 MHz.

### Features 
* **Voltage supply**: 3.3&nbsp;V
* **Current consumption**: 46.7&nbsp;uA to 959&nbsp;uA
* **Chipset**: TDK InvenSense IIM-42652
* **Gyroscope output range**: ±15.625, ±31.25, ±62.5, ±125, ±250, ±500, ±1000, and ±2000 degrees/sec
* **Accelerometer output range**: ±2g, ±4g, ±8g, and ±16g
* **20,000&nbsp;g shock tolerant**
* **I2C digital interface**
* **Operating temperature**: -40°&nbsp;C ~ 105°&nbsp;C
* **Module size**: 10 x 23&nbsp;mm


## Specifications

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12033 WisBlock 6-Axis Accelerometer Sensor Module.

#### Chipset
| Vendor         | Part number |
| -------------- | ----------- |
| TDK InvenSense | IIM-42652   |

#### Pin Definition

The RAK12033 WisBlock 6-Axis Accelerometer Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12033 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/RAK12033-pinout.svg"
  width="60%"
  caption="RAK12033 pinout diagram"
/>

:::tip 📝 NOTE:
**I2C** related pin, **INT1**, **INT2**, **VDD**, and **GND** are connected to WisBlock connector.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

**INT1 (Interrupt Pin 1)**  
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO3    | IO5    | IO4    | IO6    |


**INT2 (Interrupt Pin 2)**  
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO4    | IO6    | IO3    | IO5    |


#### Electrical Characteristics
  
| Symbol | Description                                                                       | Min.  | Typ.  | Max.  | Unit  |
| ------ | --------------------------------------------------------------------------------- | :---: | :---: | :---: | :---: |
| VCC    | Power supply voltage                                                              |   -   |  3.3  |       |   V   |
| IDD    | VDD supply current timekeeping I2C-bus inactive, CLKOUT disabled, average current |   -   |  755  |  959  |  uA   |
| IDDS   | Standby current                                                                   |   -   | 46.7  |   -   |  uA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK12033 module.

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/board-dimensions.png"
  width="60%"
  caption="RAK12033 mechanical dimensions"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/wisblock-connector.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/rak12033-schematic.jpg"
  width="100%"
  caption="RAK12033 schematic diagram"
/>

<rk-img
  src="/assets/images/wisblock/rak12033/datasheet/rak12033-axes.jpg"
  width="40%"
  caption="Definition of coordinate system of RAK12033 WisBlock 6-Axis Sensor Module"
/>

:::warning ⚠️ WARNING

This chip is very sensitive, and the tightness of the mounting screws will affect its zero offset. Therefore, we recommend that once the RAK12033 is installed, do not repeatedly loosen or tighten the screws. The zero offset must need to be calibrated again every time loosening or tightening the screw the screws. Recommended screw torque range: 0.032 - 0.054 N-m.

:::


