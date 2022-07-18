---
rak_desc: Provides comprehensive information about your RAK19018 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19018/overview/RAK19018_home.png
tags:
  - datasheet
  - wisblock
  - RAK19018
prev: ../Overview/
next: false
---

# RAK19018 WisBlock PoE Module for RAK13800 Datasheet

## Overview

### Description

The RAK19018 is a Power-over-Ethernet module used together with the RAK13800 Ethernet Interface module to draw power from CAT5/CAT6 cables. This PoE module is based on the Silvertel Ag9905MT converter board and compatible with the IEEE 802.3af PoE standard. 

The Ag9905MT's signature and control circuit provide the PoE compatibility requirement by the Power Sourcing Equipment (PSE) before applying up to 9&nbsp;Watts of power to the port. This provides a Class 0 signature.

The DC/DC converter operates over a wide input voltage from 36&nbsp;V to 57&nbsp;V and provides a regulated 5&nbsp;V output with built-in short-circuit output protection.


### Features
- Based on Silvertel Ag9905MT
- Requires RAK13800 Ethernet Module to work
- Power-over-Ethernet Module
- IEEE802.3af compliant
- Input voltage range : 36&nbsp;V to 57&nbsp;V
- Output voltage : 5&nbsp;V
- Output power: 9&nbsp;W
- Short-circuit protection and Over temperature protection
- Size: 32&nbsp;mm x 25&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/rak19018-front-back-overview.png"
  width="55%"
  caption="RAK19018 WisBlock PoE Module top (left) and bottom (right) view"
/>

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/Ag9905M_board.png"
  width="20%"
  caption="Ag9905MT PoE converter board"
/>

#### Mounting

The RAK19018 module is mounted on top of WisBlock Ethernet module RAK13800. These modules are attached via compatible header pins.

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/mounting-mechanism.png"
  width="40%"
  caption="RAK19018 connection to RAK13800"
/>

### Hardware 

The hardware specification is categorized into five (5) parts. It shows the chipset, pinouts, and diagram of the module. It also presents the electrical and mechanical characteristics of the RAK19018 WisBlock PoE Module.


####  Chipset

| Vendor        | Part number |
| ------------- | ----------- |
| Silvertel     | Ag9905MT    |

#### Pin Definition

The RAK19018 PoE Module has two connectors for 5&nbsp;V output - **J3** and **J6**. The PoE input voltage is fed via **J5**.

 <rk-img
  src="/assets/images/wisblock/rak19018/datasheet/rak19018-pins.png"
  width="50%"
  caption="RAK19018 WisBlock Module pinout"
/>

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK19018 module and its recommended operating conditions.

##### Recommended Operating Conditions

| Parameter                   | Min. | Nom. | Max. | Unit |
| --------------------------- | ---- | ---- | ---- | ---- |
| Input Supply Voltage        | 36   | 48   | 57   | V    |
| Under Voltage Lockout       | 30   |      | 36   | V    |
| Nominal Output Voltage      | 4.75 | 5.0  | 5.25 | V    |
| Minimum Load                | 200  |      |      | mA   |
| Output Current (VIN = 48V)  |      |      | 1.8  | A    |

#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimension of RAK19018 is shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/RAK19018_board_dimension.png"
  width="80%"
  caption="RAK19018 Mechanical Dimensions"
/>


#### Schematic Diagram

**Figure 6** shows the schematic of the RAK19018 PoE module.

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/poe-module.png"
  width="80%"
  caption="PoE Module"
/>

Using a cable, RAK19018 can power WisBlock Base boards like RAK5005-0. 

- **J3** is a connector for 5&nbsp;V output.
- **J5** and **J6** are used for connecting to RAK13800.

<rk-img
  src="/assets/images/wisblock/rak19018/datasheet/connectors.png"
  width="70%"
  caption="Connectors"
/>



