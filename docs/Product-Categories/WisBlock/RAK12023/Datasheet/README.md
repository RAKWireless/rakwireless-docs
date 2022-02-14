---
rak_desc: Covers the comprehensive information of your RAK12023 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12023/overview/RAK12023_home.png
tags:
  - datasheet
  - wisblock
  - RAK12023
prev: ../Quickstart/
next: false
---

# RAK12023 WisBlock Soil Moisture Sensor Connector Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/rak12023.png"
  width="40%"
  caption="RAK12023 WisBlock Soil Moisture Sensor Connector"
/>

### Description

RAK12023 is a soil moisture connector module. It has one (1) standard WisBlock IO connector, which you can connect with the WisBlock Base such as RAK5005-O. It also has three (3) connectors dedicated to the RAK12035. RAK12035 is a separate soil moisture sensor probe that can be connected to the RAK12023 module. RAK12023 is capable of a connection of up to three RAK12035 soil moisture sensor probes simultaneously.


### Features

- A Separate sensor PCB module [RAK12035](/Product-Categories/WisBlock/RAK12035/Overview/) is required.
- Three (3) available connectors for the soil sensor PCB module RAK12035.
- Module size: 15 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK12023 module can be mounted on the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK12023 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/mounting-mechanism.png"
  width="70%"
  caption="RAK12023 Mounting Mechanism on a WisBlock Base Module"
/>

### Hardware

The hardware specification is categorized into three (3) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. Also, it shows the mechanical characteristics of the RAK12023 WisBlock Soil Moisture Sensor Connector Module.


#### Pin Definition

The RAK12023 module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 3**. 

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/rak12023-pinout.svg"
  width="65%"
  caption="RAK12023 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only **I2C** related pin, **IO4**, **3V3_S**, and **GND** are connected to the WisConnector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12023 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12023 module.
:::  

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the mechanical dimensions of the RAK12023 Module.

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK12023 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK12023 module.

<rk-img
  src="/assets/images/wisblock/rak12023/datasheet/rak12023-schematic.png"
  width="70%"
  caption="RAK12023 WisBlock Module Schematics"
/>