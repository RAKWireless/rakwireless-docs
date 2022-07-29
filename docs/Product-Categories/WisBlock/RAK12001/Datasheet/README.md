---
rak_desc: Provides comprehensive information for your RAK12001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12001/overview/RAK12001_home.png
tags:
  - datasheet
  - wisblock
  - RAK12001
prev: ../Overview/
next: false
---

# RAK12001 WisBlock Fingerprint Sensor Module Datasheet

## Overview

### Description

The RAK12001 is a fingerprint sensor module based on GROW R307. This module supports both fingerprint enrollment and fingerprint matching. When enrolling, it is required to place the finger two times in the sensor. The system will process the fingerprint images collected and generate a template, then store the fingerprint template in its memory. When matching, the sensor will determine if the finger placed in its optical sensor has a match on its memory.


### Features

- Fingerprint Sensor Module
- Interface: UART
- Window dimension: 19&nbsp;mm x 21&nbsp;mm
- Character file size: 256 bytes
- Scanning speed: < 0.3 second
- Verification speed: < 0.2 second
- 3.3&nbsp;V Power supply (with built-in 5&nbsp;V boost converter)
- Current Consumption: 50&nbsp;mA
- Fingerprint Module: GROW R307
- Module size: 10&nbsp;mm x 23&nbsp;mm

## Specifications

### Overview 

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12001 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. It can be mounted on the double-size sensor slots with UART pins like slots **A, E, & F** (also on slot **C** but only with [RAK19003 Mini Base board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19003/Overview/#product-description)).

<rk-img
  src="/assets/images/wisblock/rak12001/datasheet/mounting.png"
  width="60%"
  caption="RAK12001 WisBlock Fingerprint Sensor Module Mounting"
/>


### Hardware
The hardware specification is categorized into four parts. It discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12001 WisBlock Fingerprint Sensor.

#### Fingerprint Module

| Vendor  | Part number |
| ------- | ----------- |
| GROW    |   R307      |

#### Pin Definition

The RAK12001 WisBlock Fingerprint Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12001 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- **UART Tx/Rx** pins, **TOUCH**, **3V3_S (optional)**, and **GND** are connected to WisBlock Connector.
:::

 <rk-img
  src="/assets/images/wisblock/rak12001/datasheet/RAK12001_Pinout.svg"
  width="80%"
  caption="RAK12001 WisBlock Fingerprint Sensor Module Pinout"
/>

::: tip 📝 NOTE
- Slot B is not recommended because the IO2 pin is used to control power supply 3V3_S.
:::  

#### Electrical Characteristics


| Symbol | Description                 | Min. | Nom. | Max. | Unit |
| ------ | --------------------------- | ---- | ---- | ---- | ---- |
| VDD    | Power supply for the module | 2.7  | 3.3  | 4.5  | V    |
| I      | Working current             | -    | 50   | -    | mA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK12001 module.

 <rk-img
  src="/assets/images/wisblock/rak12001/datasheet/mechanical-drawing.png"
  width="60%"
  caption="RAK12001 WisBlock Fingerprint Sensor Module Dimensions"
/>

<!--
##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12001/datasheet/pcb_footprint.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

-->


#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12001/datasheet/schematic_vb.png"
  width="100%"
  caption="WisConnector and RAK12001 Schematic"
/>

::: tip 📝 NOTE
- **R307** needs 4.2&nbsp;V - 6&nbsp;V, which is provided by the on-board **boost converter**.
- **TOUCH** is an input signal from **R307** when a finger is placed and detected by the sensor.
:::
​      


