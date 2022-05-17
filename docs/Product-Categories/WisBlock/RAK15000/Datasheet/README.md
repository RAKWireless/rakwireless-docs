---
rak_desc: Provides comprehensive information about your RAK15000 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15000/overview/RAK15000_home.png
tags:
  - datasheet
  - wisblock
  - RAK15000
prev: ../Quickstart/
next: false
---

# RAK15000 WisBlock EEPROM Module Datasheet

## Overview
<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/RAK15000.png"
  width="40%"
  caption="RAK15000 WisBlock EEPROM Module"
/>

### Description

The RAK15000 WisBlock EEPROM module, part of the RAKwireless WisBlock series, is a serial EEPROM module with an I2C interface. Designed to work at low power mode, the standby average consumption is lower than 3&nbsp;µA ( VCC = 5.5&nbsp;V ). The RAK15000 uses Microchip AT24CM02 that provides 2,097,152 bits of Serial Electrically Erasable and Programmable Read-Only Memory (EEPROM), organized as 262,144 words of 8 bits each.

### Features

* 3.3&nbsp;V input voltage, on/off control by the WisBlock Core module
* **Temperature range:** -40&nbsp;°C to +85&nbsp;°C
* Internally organized as 262,144 x 8&nbsp;bit (2&nbsp;Mbit)
* I2C-Compatible (2-wire) Serial Interface
    - 100&nbsp;kHz Standard mode
    - 400&nbsp;kHz Fast Mode
* High Reliability
    - Endurance: 1,000,000 write cycles
    - Data retention: 100 years
* Built in error detection and correction
* 256-byte Page Write Mode
* Random and Sequential Read Modes
* Standby current less than 3&nbsp;µA
* **Module size**: 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK15000 module can be mounted on slots: A, B, C, or D of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK15000 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/RAK15000_mounting.png"
  width="50%"
  caption="RAK15000 WisBlock Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It covers the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also presents the parameters and their standard values in terms of electrical and mechanical of the RAK15000 WisBlock EEPROM Module. 

#### Chipset

| Vendor    | Part number |
| --------- | ----------- |
| Microchip | AT24CM02    |

#### Pin Definition

The RAK15000 WisBlock Sensor module comprises a standard 24-pin WisConnector. The IO WisConnector allows the RAK15000 module to be mounted on a WisBlock baseboard, such as the RAK5005-O. The pin order of the WisConnector and the pinout definition is shown in **Figure 3**. 

:::tip 📝 NOTE:
Only the I2C related pins, 3V3_S, and GND are connected to this module.    
:::

<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/RAK15000_pin.png"
  width="60%"
  caption="RAK15000 WisBlock module Pinout Diagram"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol          | Description                 |  Min  | Nom.  |  Max  | Unit  |
| --------------- | --------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>  | Power supply for the module |   -   |  3.3  |   -   |   V   |
| I<sub>CC</sub>  | Supply current read         |   -   |   -   |   1   |  mA   |
| I<sub>CC</sub>  | Supply current write        |   -   |   -   |   3   |  mA   |
| I<sub>STB</sub> | Standby current             |   -   |   -   |   3   |  µA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK15000 module.

<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/RAK15000_mechanic_drawing.png"
  width="60%"
  caption="RAK15000 WisBlock Module Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak15000/datasheet/schematic.png"
  width="100%"
  caption="RAK15000 WisBlock EEPROM Module Schematic"
/>

