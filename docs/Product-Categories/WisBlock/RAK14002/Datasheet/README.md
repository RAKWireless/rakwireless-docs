---
tags:
  - datasheet
  - wisblock
  - RAK14002
prev: ../Quickstart/
next: false
rak_desc: Covers the comprehensive information of your RAK14002 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14002/overview/RAK14002_buy.png
---

# RAK14002 WisBlock Touch Sensor Module Datasheet

## Overview

### Description

The RAK14002 WisBlock Touch Sensor module is a 3-channel Capacitive Touch Sensor. This module is based on the Microchip CAP1293 Capacitive Touch Sensor, and it has a ready to use SW library and tutorial makes it easy to build a touchpad, swipe detector. 

### Features 

* Three (3) Capacitive Touch Sensor Inputs
* Low Power Operation 50&nbsp;µA quiescent current in standby mode
* Proximity Detection
* Multiple Button Pattern Detection
* Power button support
* 3.3&nbsp;V power supply
* I2C Compliant Communication Interface
* **Module size**: 25 x 35&nbsp;mm

## Specifications
### Overview

#### Mounting
The RAK14002 module can be mounted on the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK14002 module on a WisBlock Base module, such as the RAK5005-O.


<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/rak14002_mounting.png"
  width="50%"
  caption="RAK14002 Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK14002 WisBlock Touch Sensor Module.

####  Chipset
| Vendor    | Part number |
| --------- | ----------- |
| Microchip | CAP1293     |


:::tip 📝 NOTE:
The default 7-bit slave address is 0x50. 
:::

#### Pin Definition
The RAK14002 WisBlock module comprises a standard 40-pin WisConnector. The WisConnector allows the RAK14002 module to be mounted on a WisBlock Base board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in Figure 2. 

:::tip 📝 NOTE:
- I2C related pins, IO6, VDD, and GND are connected to this module. 
- IO6 interrupt output pin, Low active, internal pull-up.
:::

<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/RAK14002_Pinout.svg"
  width="80%"
  caption="RAK14002 WisBlock Touch Sensor Module Pinout"
/>


#### Electrical Characteristics
##### Recommended Operating Conditions

| Symbol                | Description                                  | Min.  | Nom.  | Max.  | Unit  |
| --------------------- | -------------------------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>        | Power supply for the module                  |  3.0  |       |  5.5  |   V   |
| V<sub>POR</sub>       | Power-On reset voltage                       |       |   1   |  1.3  |   V   |
| I<sub>DD</sub>        | Capacitive Sensing Active                    |   -   |  500  |  750  |  uA   |
| I<sub>DSLEEP_3V</sub> | Deep Sleep State current                     |   -   |   5   |   -   |  uA   |
| I<sub>STBY_DEF</sub>  | Standby state active  70&nbsp;ms cycle time  |       |  120  |  170  |  uA   |
| I<sub>STBY_LP</sub>   | Standby state active  140&nbsp;ms cycle time |       |  50   |       |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK14002 module.

<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/rak14002_mechanic.png"
  width="80%"
  caption="RAK14002 WisBlock 3-channel Touchpad Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/rak14002-schematic.png"
  width="100%"
  caption="RAK14002 WisBlock 3-channel Touchpad Schematic"
/>

