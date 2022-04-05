---
rak_desc: Covers the comprehensive information of your RAK14007 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14007/overview/rak14007_home.png
tags:
  - datasheet
  - wisblock
  - RAK14007
prev: ../Overview/
next: false
---

# RAK14007 WisBlock Interface Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/rak14007_front_back.png"
  width="40%"
  caption="RAK14007 WisBlock Interface Module"
/>

### Description

RAK14007 is an Interface module for connecting other WisBlock modules (like RAK14013) to the WisBlock system. It has one standard WisBlock IO connector and one connector for other WisBlock modules. With RAK14007 and a cable, some of the WisBlock modules can work out of the WisBlock Base board.

### Features

- A separate joystick PCB module [RAK14013](/Product-Categories/WisBlock/RAK14013/Overview/) is required
- One (1) available connector for RAK14013 WisBlock Joystick Module.
- Module size: 15 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK14007 module can be mounted on the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK14007 on a WisBlock Base board, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/image_mounting.png"
  width="60%"
  caption="RAK14007 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into three (3) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. Also, it shows the mechanical characteristics of the RAK14007 WisBlock Interface Module.


#### Pin Definition

The RAK14007 module has a 40-pin WisConnector that is compatible with the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 3**. 

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/rak14007-pinout.svg"
  width="65%"
  caption="RAK14007 Pinout Schematic"
/>

::: tip 📝 NOTE
- **3V3_S**, **VBAT**, **I2C** related pin, **AIN1**, **IO3**, **IO4**, **IO5**, and **GND** are connected to WisConnector.
:::  

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the mechanical dimensions of the RAK14007 Module.

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK14007 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK14007 module.

<rk-img
  src="/assets/images/wisblock/rak14007/datasheet/rak14007_schematic_diagram.png"
  width="70%"
  caption="RAK14007 WisBlock Interface Module schematics"
/>

::: tip 📝 NOTE
The following modules are now available to access RAK14007. There may be other modules in the future.

- RAK12017 can connect to J1.
- RAK12004 and RAK12009 can connect to J2.
- RAK12035 and RAK14013  can connect to J3.
:::