---
rak_desc: Provides comprehensive information about your RAK13002 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13002/RAK13002.png
tags:
  - datasheet
  - wisblock
  - RAK13002
prev: ../Quickstart/
next: false
---

# RAK13002 WisBlock Adaptor Module Datasheet

## Overview

### Description

The RAK13002 is a WisBlock Core adaptor module that can be mounted to the IO slot of the WisBlock Base board. This module exposed all WisBlock Core signals such as I2C, SPI, UART, GPIO, and ADC to standard 2.54&nbsp;mm pitch pin header for easy integration of external components and devices.

### Features

- Supports two I2C interfaces
- Supports two UART interfaces
- Supports one SPI interface
- Supports up to six (6) GPIOs
- Supports two (2) ADC interfaces
- 3.3&nbsp;V power supply  interfaces
- Backup battery (super cap) can keep the RTC running for up to 7 days (tested in lab)
- Module size: 25X35&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK13002 module can be mounted to the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK13002 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak13002/datasheet/image-20210225140319101.png"
  width="60%"
  caption="RAK13002 WisBlock Adaptor Module Mounting"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK13002 WisBlock Adaptor Module.


#### Pin Definition

The RAK13002 WisBlock Adaptor Module comprises a standard WisConnector connector. The WisConnector allows the RAK13002 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in Figure 2.

<rk-img
  src="/assets/images/wisblock/rak13002/datasheet/rak13002_pinout.svg"
  width="80%"
  caption="RAK13002 WisBlock Adaptor Module Pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description  | Min. | Nom. | Max. | Unit |
| ------ | ------------ | ---- | ---- | ---- | ---- |
| VCC    | Power supply |      | 3.3  |      | V    |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK13002 module.

<rk-img
  src="/assets/images/wisblock/rak13002/datasheet/image-20210225140329283.png"
  width="70%"
  caption="RAK13002 WisBlock Adaptor Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13002/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram
##### Adaptor

Figure 5 shows the RAK13002 adaptor module schematic. **VCC**: 3.3&nbsp;V power supply

<rk-img
  src="/assets/images/wisblock/rak13002/datasheet/image-20210329161838694.png"
  width="80%"
  caption="RAK13002 WisBlock Adaptor Schematic"
/>

