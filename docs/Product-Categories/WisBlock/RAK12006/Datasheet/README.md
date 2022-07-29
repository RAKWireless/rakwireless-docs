---
rak_desc: Provides comprehensive information about your RAK12006 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12006/overview/RAK12006_home.png
tags:
  - datasheet
  - wisblock
  - RAK12006
prev: ../Quickstart/
next: false
---

# RAK12006 WisBlock PIR Sensor Module Datasheet

## Overview

### Description

The RAK12006 is a Pyroelectric Infrared Radial (PIR) module. It is designed to detect occupancy and motion from the infrared radiated objects. The sensor uses AM312 from Senba Sensing Technology Co., Ltd.

### Features

- Digital signal processing  
- Built-in filter, screen the interference by other frequency  
- Schmitt Trigger Output REL  
- 3.3&nbsp;V Power supply
- Chipset: Senba Sensing Technology AM312
- **Module size:** 15 X 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK12006 WisBlock PIR Sensor Module can be mounted to the IO slot of the [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. **Figure 1** shows the mounting mechanism of the RAK12006 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak12006/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK12006 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12006 WisBlock PIR Sensor Module.

#### Chipset

| Vendor                            | Part number |
| --------------------------------- | ----------- |
| Senba Sensing Technology Co., Ltd | AM312       |

#### Pin Definition

The RAK12006 module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak12006/datasheet/rak12006_pinout.svg"
  width="80%"
  caption="RAK12006 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only **Digital OUT**, **3V3**, and **GND** are connected to WisConnector.

- An optional **3V3_S** supply voltage can be used to turn ON or OFF the RAK12006 module through the IO2 pin. This can be helpful on low power application.

- To disable the default **3V3** supply and use the alternative **3V3_S** supply source, the resistor jumpers R1 must be 0&nbsp;Ω and R2 must be NC (not connected).
:::  

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK12006 module and its recommended operating condition. Refer to the table presented below.

##### Recommended Operating Condition

| Symbol | Description                     | Min. | Nom. | Max.        | Unit |
| ------ | ------------------------------- | ---- | ---- | ----------- | ---- |
| VDD    | Power Supply Voltage            | -    | 3.3  | -           | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the mechanical dimensions of the RAK12006 Module.

<rk-img
  src="/assets/images/wisblock/rak12006/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK12006 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12006/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK12006 module.

<rk-img
  src="/assets/images/wisblock/rak12006/datasheet/rak12006-schematic.png"
  width="100%"
  caption="RAK12006 WisBlock PIR Module Schematic"
/>