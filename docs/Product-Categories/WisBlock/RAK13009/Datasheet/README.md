---
rak_desc: Provides comprehensive information about your RAK13009 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13009/overview/RAK13009_home.png
tags:
  - datasheet
  - wisblock
  - RAK13009
prev: ../Quickstart/
next: false
---

# RAK13009 WisBlock QWIIC Module Datasheet

## Overview

### Description

The RAK13009 is a QWIIC module, which is part of the RAKWireless WisBlock Interface series. This module has two connectors: one for the WisBlock sensor and then for the standard QWIIC interface. By using this module you can plug any QWIIC interface module into the WisBlock sensor and use it just like any other WisBlock sensor.


### Features

 - WisBlock Sensor module
 - Standard QWIIC interface
 - Module Size: 10&nbsp;mm x 10&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK13009 WisBlock QWIIC can be mounted to the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK13009 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak13009/datasheet/mounting.png"
  width="60%"
  caption="RAK13009 WisBlock QWIIC mounting"
/>


### Hardware

The hardware specification is categorized into four parts. It shows the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK13009 WisBlock QWIIC Module.

#### Pin Definition

The RAK13009 WisBlock QWIIC comprises a standard WisBlock sensor connector. The WisBlock sensor connector allows the RAK13009 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- **I2C** related pin, **INT** pin, **3V3_S**, and **GND** are connected to WisBlock sensor connector
:::

 <rk-img
  src="/assets/images/wisblock/rak13009/datasheet/rak13009_pinout.svg"
  width="60%"
  caption="RAK13009 WisBlock QWIIC pinout"
/>

#### Electrical Characteristics

##### QWIIC Interface Wiring Label

<rk-img
  src="/assets/images/wisblock/rak13009/datasheet/qwicc-cable.png"
  width="70%"
  caption="QWIIC cable"
/>

All the QWIIC cables follow the color scheme and arrangement, as shown in the table below.

| Wire Color | Label      |
| ---------- | ---------- |
| Black      | GND        |
| Red        | 3.3&nbsp;V |
| Blue       | SDA        |
| Yellow     | SCL        |

:::warning ⚠️ WARNING    
The recommended max current on a QWIIC cable is 226&nbsp;mA. 
:::
 
#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK13009 module.

 <rk-img
  src="/assets/images/wisblock/rak13009/datasheet/mechanical_drawing.png"
  width="60%"
  caption="RAK13009 dimensions"
/>

<rk-img
  src="/assets/images/wisblock/rak13009/datasheet/qwiic_interface.png"
  width="60%"
  caption="QWIIC interface dimensions (in mm)"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13009/datasheet/pcb_footprint.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak13009/datasheet/schematic.png"
  width="100%"
  caption="RAK13009 schematic diagram"
/>




