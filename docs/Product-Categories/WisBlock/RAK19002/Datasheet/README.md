---
tags:
  - datasheet
  - wisblock
  - RAK19002
prev: ../Overview/
next: false
---

# RAK19002 WisBlock Boost Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/RAK19002_Back-&-Front-Illustrated.png"
  width="50%"
  caption="RAK19002 WisBlock Boost Module"
/>
### Description

The RAK19002 is a step-up boost regulator module, part of the RAKwireless WisBlock Series. The module can supply 12&nbsp;V/50&nbsp;mA and could be mounted on the WisSensor slot of RAK5005-O. The output voltage of the module is controlled by **WisBlock Core** IO pin.

### Features

* TPS61046 step-up boost converter
* Input voltage: 3.3&nbsp;V
* Output voltage: 12&nbsp;V
* Up to 85% efficiency at 3.6&nbsp;V input and 12&nbsp;V output
* ±2&nbsp;% output voltage accuracy
* 50&nbsp;mA output current
* Module size: 10 x 10&nbsp;mm

## Specifications

### Overview 

#### Mounting 

The RAK19002 module can be mounted on the slots A, B, C or D of the WisBase board. Figure 2 shows the mounting mechanism of the RAK19002 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/image-20201228091834299.png"
  width="50%"
  caption="RAK19002 WisBlock boost module mounting"
/>

### Hardware

The hardware specification is categorized into five parts that cover the chipset and pinouts and the corresponding functions and diagrams of the board. It also presents the paramaters and their standard values in terms of electrical and mechanical. 

####  Chipset
| Vendor            | Part number |
| ----------------- | ----------- |
| Texas Instruments | TPS61046    |


#### Pin Definition

The RAK19002 WisBlock boost module comprises a standard WisSensor connector. The WisSensor connector allows the RAK19002 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in Figure 3. 

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/rak19002_pinout.svg"
  width="60%"
  caption="RAK19002 WisBlock Boost Module Pinout"
/>

The following table shows default IO used for different slots:
  
| SLOT A | SLOT B | SLOT C | SLOT D |
| :----: | :----: | :----: | :----: |
|  IO1   |  IO2   |  IO3   |  IO5   |


:::tip 📝 NOTE:

- Only one **IO** (as a IC enable pin), **VDD**, and **GND** are connected to this module.
- Connect R1 or R3 resistor to select the **IO** pin. Check the schematic diagram in Figure 5.
- The slot B is not recommended because the IO2 pin is used to control power supply 3V3_S on WisBase RAK5005-O.
- The maximum recommended current is 50&nbsp;mA  ( V<sub>IN</sub>=3.3&nbsp;V ).

:::

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol          | Description                   | Min. | Nom. | Max. | Unit |
| --------------- | ----------------------------- | ---- | ---- | ---- | ---- |
| V<sub>IN</sub>  | Input voltage                 | 2.7  | 3.3  | 3.6  | V    |
| V<sub>OUT</sub> | Output voltage                | -    | 12   | -    | V    |
| I<sub>OUT</sub> | Output current                | -    | -    | 50   | mA   |
| I<sub>SD</sub>  | Shutdown current (IC disable) | -    | -    | 0.8  | µA   |

#### Mechanical Characteristic

##### Board Dimensions

Figure 4 shows the dimensions and the mechanic drawing of the RAK19002 module.

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK19002 WisBlock Boost Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

Figure 6 shows the schematic of RAK19002 boost module.

<rk-img
  src="/assets/images/wisblock/rak19002/datasheet/schematic.png"
  width="100%"
  caption="RAK19002 WisBlock Boost Module Schematic"
/>







