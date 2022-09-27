---
rak_desc: Provides comprehensive information about your RAK1905 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak1905/overview/RAK1905_home.png
tags:
  - datasheet
  - wisblock
  - RAK1905
prev: ../Overview/
next: false
---

# RAK1905 WisBlock 9-Axis Sensor Module Datasheet

## Overview


### Description

RAK1905 is a 3-axis gyroscope, 3-axis accelerometer, and 3-axis magnetometer, part of the RAKwireless WisBlock Sensor series. It is based on MPU-9250 from TDK and designed for 9-axis motion tracking. The data can be obtained via I2C interface.

### Features

- Chipset: **TDK MPU-9250** 
- Supply voltage: **3.3&nbsp;V**
- Current consumption: **8&nbsp;uA - 2.7&nbsp;mA**
- Accelerometer output: **±2&nbsp;g**, **±4&nbsp;g**, **±8&nbsp;g**, and **±16&nbsp;g**
- Gyroscope output: **±250**, **±500**, **±1000**, and **±2000&nbsp;°/sec**
- 16-bit ADCs
- Magnetometer full-scale measurement range: **±4800&nbsp;µT**
- Digital Motion Processor (DMP)
- I2C Interface
- Module size: **10&nbsp;mm x 10&nbsp;mm**

## Specifications

### Overview 

<br>

 <rk-img
  src="/assets/images/wisblock/rak1905/datasheet/rak1905-overview.png"
  width="35%"
  caption="RAK1905 WisBlock 9-Axis Sensor Module top and bottom view"
/>



#### Mounting

**Figure 2** shows the mounting mechanism of the RAK1905 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK1905 module can be mounted on the slots: **A, B, C, D, E, & F**.

 <rk-img
  src="/assets/images/wisblock/rak1905/datasheet/rak1905-mounting.png"
  width="50%"
  caption="RAK1905 WisBlock 9-Axis Module mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It presents the chipset of the module and the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK1905 9-Axis Sensor Module.

#### Chipset

| Vendor | Part Number |
| ------ | ----------- |
| TDK    | MPU-9250    |

#### Pin Definition

The RAK1905 9-Axis Sensor WisBlock Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK1905 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

 <rk-img
<<<<<<< HEAD
  src="/assets/images/wisblock/rak1905/datasheet/RAK1905-pinout.png"
=======
  src="/assets/images/wisblock/rak1905/datasheet/rak1905-pinout.png"
>>>>>>> 1b41f210ff2280b229f99b705eabcdb837ccadeb
  width="60%"
  caption="RAK1905 WisBlock 9-Axis Sensor Module pinout"
/>

::: tip 📝 NOTE
**I2C** related pins, **INT**, **VDD33**, and **GND** are connected to WisBlock Sensor connector.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

**INT (Interrupt Pin)**  
  
| SLOT A | SLOT B | SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ | ------ | ------ |
| IO1    | IO2    | IO3    | IO5    | IO4    | IO6    |

#### Electrical Characteristics

| Symbol | Description                                                                                | Min. | Nom. | Max. | Unit |
| ------ | ------------------------------------------------------------------------------------------ | ---- | ---- | ---- | ---- |
| VDD    | Power supply voltage                                                                       | -    | 3.3  | -    | V    |
| IDD    | 9-axis (no DMP), 1&nbsp;kHz gyro ODR, 4&nbsp;kHz accel ODR, 8&nbsp;Hz mag. repetition rate | -    | 2.7  | -    | mA   |
| IDDL   | Full Chip Idle Mode supply current                                                         | -    | 8    | -    | uA   |

#### Mechanical Characteristics

##### Board Dimensions

 <rk-img
  src="/assets/images/wisblock/rak1905/datasheet/mech-dimension.png"
  width="60%"
  caption="RAK1905 WisBlock 9-Axis Module mechanical drawing"
/>

##### WisBlock Connector PCB Layout

 <rk-img
  src="/assets/images/wisblock/rak1905/datasheet/pcb-footprint.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak1905/datasheet/rak1905-schematic.png"
  width="100%"
  caption="RAK1905 WisBlock 9-Axis Sensor Module schematic diagram"
/>

