---
rak_desc: Provides comprehensive information about your RAK12014 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12014/overview/RAK12014_home.png
tags:
  - datasheet
  - wisblock
  - RAK12014
prev: ../Quickstart/
next: false
---

# RAK12014 WisBlock ToF Sensor Module Datasheet

## Overview

### Description

The RAK12014, a part of the RAKwireless WisBlock Sensor Series, is a Time-of-Flight (ToF) module designed based on VL53L0X from STMicroelectronics. The VL53L0X is a ToF laser-ranging module, providing accurate distance measurement up to 2&nbsp;m. 

The VL53L0X's 940&nbsp;nm VCSEL emitter (Vertical-Cavity Surface-Emitting Laser) is invisible to the human eye and coupled with internal physical infrared filters. It enables longer-ranging distances, higher immunity to ambient light, and better robustness to cover glass optical crosstalk.


### Features

- Time-of-Flight(ToF) module
- Measures absolute range up to 2 meters
- I2C Interface
- Xshutdown (reset) and interrupt GPIO
- 2.6&nbsp;V ~ 3.5&nbsp;V power supply
- Module Size: 10&nbsp;mm x 10&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK12014 WisBlock ToF Sensor Module can be mounted to the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK12014 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak12014/datasheet/mounting.png"
  width="60%"
  caption="RAK12014 WisBlock ToF Sensor Module Mounting"
/>


### Hardware

The hardware specification is categorized into four parts. It shows the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12014 WisBlock ToF Sensor Module.

#### Pin Definition

The RAK12014 WisBlock ToF Sensor Module comprises a standard WisIO connector. The WisIO connector allows the RAK12014 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- **I2C** related pins: **XSHUT(RESET)**, **INT**, **3V3_S**, and **GND** are connected to WisBlock connector.
:::

 <rk-img
  src="/assets/images/wisblock/rak12014/datasheet/RAK12014_Pinout.svg"
  width="70%"
  caption="RAK12014 WisBlock ToF Sensor Module Pinout"
/>
  

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Parameter | Minimum | Maximum | Unit |
| --------- | ------- | ------- | ---- |
| 3V3_S     | -0.5    | 3.6     | V    |
| Imax      | -       | 40      | mA   |

##### Power Supply Ratings

| Symbol | Description            | Condition                                                          | Min. | Nom. | Max. | Unit |
| ------ | ---------------------- | ------------------------------------------------------------------ | ---- | ---- | ---- | ---- |
| 3V3_S  | supply  Voltage        | Input voltage must within this range                               | 2.6  | 3.3  | 3.5  | V    |
| IDD1   | Operation mode current | Timed ranging inter measurement                                    | -    | 16   | -    | uA   |
| IDD2   | Operation mode current | Active Ranging average consumption (including VCSEL)               | -    | 19   | -    | mA   |
| IDD3   | Operation mode current | HW STANDBY                                                         | 3    | 5    | 7    | uA   |
| P      | Power Dissipation      | Average power consumption at 10Hz with 33&nbsp;ms ranging sequence | -    | -    | 20   | mW   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK12014 module.

 <rk-img
  src="/assets/images/wisblock/rak12014/datasheet/mechanical-drawing.png"
  width="60%"
  caption="RAK12014 WisBlock ToF Sensor Module Dimensions"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12014/datasheet/pcb-layout.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>


#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12014/datasheet/schematic.png"
  width="100%"
  caption="RAK12014 WisBlock ToF Module Schematic"
/>

::: tip 📝 NOTE
- Field Of View (FOV)  and Reflectance targets will affect the measuring distance and accuracy. 
- To get better performance, you may need to apply algorithms for the object being measured. But for usual measurements, the default output is sufficient.
:::
