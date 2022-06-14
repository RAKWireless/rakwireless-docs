---
rak_desc: Provides comprehensive information about your RAK15002 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15002/overview/rak15002_home.png
tags:
  - datasheet
  - wisblock
  - RAK15002
prev: ../Quickstart/
next: false
---

# RAK15002 WisBlock Micro SD Card Module Datasheet

## Overview

### Description

The RAK15002 is a Micro SD card module that can be mounted to the IO slot of the WisBlock Base board. This module uses a 4-line SPI interface to access the SD card and supports the card insert detection feature.

### Features

- Micro SD card socket
- 4-lines SPI interface
- 3.3&nbsp;V power supply
- SD card insert detected
- Module size: 25X35&nbsp;mm

## Specifications

### Overview 

#### Mounting 

The RAK15002 module can be mounted to the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK15002 on a WisBlock Base board. 

<rk-img
  src="/assets/images/wisblock/rak15002/datasheet/image-20210312115347019.png"
  width="60%"
  caption="RAK15002 WisBlock SD Card Module Mounting"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK15002 WisBlock Micro SD Card Module.

#### Pin Definition

The RAK15002 WisBlock SD Card Module comprises a standard WisConnector. The WisConnector allows the RAK15002 module to be mounted on a WisBlock Base board. The pin order of the connector and the pinout definition is shown in Figure 2. 

:::tip 📝 NOTE:
- **SPI** related pins, **IO6**，**3V3**, and **GND** are connected to this module.
- **IO6**: Insert detected pin, Low active, internal pull-up.
:::

<rk-img
  src="/assets/images/wisblock/rak15002/datasheet/rak15002_pinout.svg"
  width="80%"
  caption="RAK15002 WisBlock SD Card Module Pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description    | Min. | Nom. | Max. | Unit |
| ------ | -------------- | ---- | ---- | ---- | ---- |
| VDD    | Power supply   |      | 3.3  |      | V    |
| IDD    | Supply current | -    | TBD  |      | uA   |

#### Mechanical Characteristic

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK15002 WisBlock SD Card Module.

<rk-img
  src="/assets/images/wisblock/rak15002/datasheet/image-20210225140329283.png"
  width="70%"
  caption="RAK15002 WisBlock SD Card Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15002/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

Figure 5 shows the RAK15002 SD Card Module schematic. Only I2C1 related pins, IO6 (insert detection), **3V3**, and **GND** are connected to WisConnector. 

<rk-img
  src="/assets/images/wisblock/rak15002/datasheet/image-20210315105240003.png"
  width="70%"
  caption="RAK15002 WisBlock SD Card Module Schematic"
/>