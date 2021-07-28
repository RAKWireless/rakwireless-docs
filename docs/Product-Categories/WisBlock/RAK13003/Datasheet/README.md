---
rak_desc: Covers the comprehensive information of your RAK13003 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13003/overview/rak13003_home.png
tags:
  - datasheet
  - wisblock
  - RAK13003
prev: ../Overview/
next: false
---

# RAK13003 WisBlock IO Expansion Module Datasheet

## Overview

### Description

The RAK13003 is an IO expansion module that can be mounted to IO slot of WisBlock Base board. It offers 16 bidirectional I/O ports by using MCP23017 IC from Microchip. The configuration of the module is via I2C interface and it supports both standard and fast I2C modes.

### Features

- 16-Bit Remote Bidirectional I/O Port
- High-Speed I2C Interface
- Configurable Interrupt Output Pins
- INTA and INTB can be configured to operate independently or together
- External Reset Input
- Low Standby Current: 1&nbsp;μA (max.)
- Operating Voltage: 2.7&nbsp;V to 5.5&nbsp;V @ -40&nbsp;°C to +85&nbsp;°C
- Module size: 25X35&nbsp;mm

## Specifications

### Overview 

#### Mounting 

The RAK13003 module can be mounted on the IO slots of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK13003 on a WisBlock Base board. 

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20210225140319101.png"
  width="60%"
  caption="RAK13003 WisBlock IO Expansion Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK13003 WisBlock IO Expansion Module.

#### Chipset

The RAK13003 IO Expansion Module uses MCP23017 from Microchip. 

| Vendor    | Part Number |
| --------- | ----------- |
| Microchip | MCP23017    |

Figure 2 shows MCP23017 device addressing. Default A2, A1, and A0 are connected to ground. 7-Bits I2C address is 0x40.

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20210223200846099.png"
  width="60%"
  caption="The MCP23017 device addressing"
/>

#### Pin Definition

The RAK13003 WisBlock IO Expansion Module comprises a standard expansion. The expansion allows the RAK13003 module to be mounted on a WisBlock Base board. The pin order of the connector and the pinout definition is shown in Figure 3. 

:::tip 📝 NOTE:
- **I2C**，**SPI** related pins, **RESET**，**IO5**，**IO6**，**3V3**, and **GND** are connected to this module.
- **IO5** and **IO6** are connected to interrupt pin.
- **SPI** not supported for RAK13003.
:::

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/rak13003_pinout.svg"
  width="70%"
  caption="RAK13003 WisBlock IO Expansion Module Pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                 | Min. | Nom. | Max. | Unit |
| ------ | --------------------------- | ---- | ---- | ---- | ---- |
| VDD    | Power supply for the module |      | 3.3  |      | V    |
| Istb   | Standby current             | -    | -    | 1    | uA   |
| Icc    | Supply current              | -    | -    | 1.0  | mA   |

#### Mechanical Characteristic

##### Board Dimensions

Figure 4 shows the dimensions and the mechanic drawing of the RAK13003 module.

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20210225140329283.png"
  width="70%"
  caption="RAK13003 WisBlock IO Expansion Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### I/O Expander

Figure 6 shows RAK13003 WisBlock IO Expansion Module schematic diagram. Default uses **3V3_S** for power supply.

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20210224154403034.png"
  width="100%"
  caption="RAK13003 WisBlock IO Expansion Module Schematic"
/>

##### Device Address

The Figure 7 shows device address bit2-bit0, default connected to ground.

<rk-img
  src="/assets/images/wisblock/rak13003/datasheet/image-20210224154824304.png"
  width="40%"
  caption="RAK13003 Device Address A2-A0"
/>

