---
rak_desc: Provides comprehensive information about your RAK14004 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14004/overview/RAK14004_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK14004
---

# RAK14004 WisBlock Keypad Module Datasheet

## Overview

### Description

**RAK14004 WisBlock Keypad Module** was designed to be part of a production-ready IoT solution in a modular way and must be combined with a **WisBlock Core** and a **WisBlock Base** module. 

The RAK14004 module is designed as an IO extension module that allows to add a keypad and create a customized IoT solution. This module can be used in conjunction with RAK14009, RAK14010, or RAK14011 keypad modules.

### Features

* **Module Specifications** 

  * Up to 8 x 8 buttons using scan matrix arrangement
  * 3.3&nbsp;V Power supply  
  * ATMEGA328PB-AU Microchip MCU

* **Size**    
    * 35&nbsp;mm x 25&nbsp;mm  

## Specifications

### Overview

**Figure 1** and **Figure 2** show the RAK14004 top and bottom view of the RAK14004 module.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/RAK14004_Top-View.svg"
  width="30%"
  caption="RAK14004 top view"
/>

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/RAK14004_Bottom-View.svg"
  width="30%"
  caption="RAK14004 bottom view"
/>

#### Mounting

The RAK14004 module can be mounted on the IO slot of the WisBlock Base board. **Figure 3** shows the mounting mechanism of the RAK14004 on a WisBlock Base module, such as a RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/image-20210225140319101.png"
  width="60%"
  caption="RAK14004 mounting mechanism on a WisBlock Base module"
/>
### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK14004 WisBlock Keypad Module.

#### Chipset

| Vendor    | Part number    |
| --------- | -------------- |
| Microchip | ATMEGA328PB-AU |


#### Pin Definition

The RAK14004 comprises a standard WisBlock IO 40-pin connector. The WisBlock IO connector allows the RAK14004 module to be mounted on a WisBlock Base Board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 4**. 


:::tip 📝 NOTE:
 **I2C** related pins, **UART** related pins, **INT**, **RESET**, **3V3**, and **GND** are connected to 40-pin WisBlock IO connector.
:::

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/RAK14004_Pinouts.svg"
  width="60%"
  caption="RAK14004 Pin Definition"
/>



<!--

| **Pin Number** | **Description** | **Pin Number** | **Description**                   |
| -------------- | --------------- | -------------- | --------------------------------- |
| 1              | Battery Power   | 2              | Battery Power                     |
| 3              | GND             | 4              | GND                               |
| 5              | 3V3 Power       | 6              | NC, Power Reserved for 3.3&nbsp;V |
| 7              | USB+            | 8              | USB–                              |
| 9              | VBUS            | 10             | SW1                               |
| 11             | NC              | 12             | NC                                |
| 13             | NC              | 14             | LED1                              |
| 15             | LED2            | 16             | NC                                |
| 17             | NC              | 18             | NC                                |
| 19             | SDA for I2C1    | 20             | SCL for I2C1                      |
| 21             | NC              | 22             | Analog1 to MCU                    |
| 23             | NC              | 24             | NC                                |
| 25             | NC              | 26             | NC                                |
| 27             | NC              | 28             | NC                                |
| 29             | IO1             | 30             | IO2                               |
| 31             | IO3             | 32             | IO4                               |
| 33             | TXD1            | 34             | RXD1                              |
| 35             | SDA for I2C2    | 36             | SCL for I2C2                      |
| 37             | NC              | 38             | NC                                |
| 39             | GND             | 40             | GND                               |

<br>
-->

#### Electrical Characteristics


##### Power Supply Ratings

| Symbol | Description  | Min. | Nom. | Max. | Unit |
| ------ | ------------ | ---- | ---- | ---- | ---- |
| VDD    | Power supply | 1.8  | 3.3  | 5.5  | V    |



#### Mechanical Characteristics

##### Board Dimensions

**Figure 5** shows the dimensions and the mechanic drawing of the RAK14004 module.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/image-20210717131126045.png"
  width="75%"
  caption="RAK14004 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/datasheet_assets_image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

The RAK14004 uses a Microchip ATMEGA328PB-AU microcontroller for matrix keyboard scanning and identification. A cable is used to connect RAK14004 to keypad modules such as RAK14009.

<!-- 
#####  WisBlock Connector

Figure 5 shows the 40-pin WisBlock IO connector . **I2C** related pin, **UART** related pin, **RESET**, **3V3**,**INT**, and **GND** are connected to WisIO connector.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/image-20211101180008267.png"
  width="40%"
  caption="MCU Debug connector"
/>
-->
##### MCU Schematic


<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/u1-mcu.png"
  width="60%"
  caption="MCU schematic"
/>

##### I2C Pull Up Resistor

The I2C Pull Up Resistor already exists on WisBlock Base Board. **R7** and **R8** are not mounted on the RAK14004 module.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/i2c-pup.png"
  width="40%"
  caption="I2C Pull Up Resistor"
/>


##### MCU Debug

**J3** is the MCU debug connector.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/j3-debug.png"
  width="30%"
  caption="MCU Debug connector"
/>

:::warning ⚠️ WARNING    
Do not connect to this header or you lose the warranty and your RAK14004 will not work anymore.
:::


##### Matrix Buttons Module Connector

**J2** Matrix Buttons connector is used to connect RAK14004 to keypad modules such as RAK14009, RAK14010, and RAK14011.

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/image-20210728143632190.png"
  width="40%"
  caption="Matrix Buttons Connector"
/>

##### Full schematic

<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/rak14004-sch1.png"
  width="100%"
  caption="RAK14004 Schematic Diagram Part 1"
/>


<rk-img
  src="/assets/images/wisblock/rak14004/datasheet/rak14004-sch2.png"
  width="100%"
  caption="RAK14004 Schematic Diagram Part 2"
/>

<!--
**Figure 9** shows the schematic diagram of the RAK14004 WisBlock Interface connector.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK14004 Schematic Diagram"
/>
-->
