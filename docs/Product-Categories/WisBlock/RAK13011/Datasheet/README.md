---
rak_desc: Provides comprehensive information about your RAK13011 WisBlock Magnetic Switch Sensor Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13011/RAK13011.png
tags:
  - datasheet
  - wisblock
  - RAK13011
prev: ../Overview/
next: false
---

# RAK13011 WisBlock Magnetic Switch Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak13011/datasheet/rak13011-front-back.png"
  width="50%"
  caption="RAK13011 WisBlock Magnetic Switch Sensor Module"
/>

### Description

**RAK13011** is a Magnetic Switch Sensor module, part of the **WisBlock Sensor Series**. This sensor is essentially a reed switch assembly consisting of a magnet and a reed switch whose contacts are normally open. The contacts close when the magnet is less than 13&nbsp;mm away. Its switch is not affected by nearby (5&nbsp;cm distance) located electrical motors. The reed switch and magnet are housed in durable ABS plastic and can easily mount to most surfaces with screws. They can also be mounted by using double-sided foam tape.

### Applications

  - Door & Window Contacts
  - Pneumatic or Hydraulic Actuator Position Indication & Others

### Features

**Module specifications**
- Standard Screw Fastening Reed Sensor with Cable Termination
- Push-in termination of solid conductors, easy conductor removal via operating tool
- 3.3&nbsp;V Power supply
- Operating Temperature: -40°&nbsp;C ~ 85°&nbsp;C

:::tip 📝 WARNING
**RA13011** module is not compatible with the **RAK3372** module when used in any WisBlock base board **Slot B** and **Slot C**. Slot B which uses the **WB_IO2** pin is already dedicated to power control. It will only work in Slots A, D, E, and F.
:::

## Specifications

### Overview

#### Mounting

The RAK13011 Magnetic Switch Sensor Module can be mounted to the sensor slot of the WisBlock base board. **Figure 2** shows the mounting mechanism of the RAK13011 on a WisBlock base board module, such as the **RAK5005-O**.

<rk-img
  src="/assets/images/wisblock/rak13011/datasheet/RAK13011_mount_to_wisbase.png"
  width="50%"
  caption="RAK13011 WisBlock Magnetic Switch Sensor Module Mounting"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK13011 WisBlock Magnetic Switch Sensor Module.


#### Pin Definition

**Switch**, **3V3**, and **GND** of RAK13011 are connected to the WisSensor connector, as shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak13011/datasheet/RAK13011_pinout.png"
  width="70%"
  caption="RAK13011 WisBlock Magnetic Switch Sensor Module Pinout"
/>

#### Electrical Characteristics

This table shows the RAK13011 module electrical characteristics.

| Symbol | Description          | Min. | Nom. | Max. | Unit |
| ------ | -------------------- | ---- | ---- | ---- | ---- |
| 3V3    | Power Supply Voltage | -    | 3.3  | -    | V    |


#### Mechanical Characteristic

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK13011 module.

<rk-img
  src="/assets/images/wisblock/rak13011/datasheet/RAK13011_mechanic_drawing.png"
  width="50%"
  caption="RAK13011 WisBlock Magnetic Switch Sensor Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13011/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic diagram of RAK13011 module.

 <rk-img
  src="/assets/images/wisblock/rak13011/datasheet/RAK13011_schematic.png"
  width="100%"
  caption="RAK13011 WisBlock Magnetic Switch Sensor Module Schematic"
/>
