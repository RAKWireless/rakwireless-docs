---
rak_desc: Covers the comprehensive information of your RAK5802 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK5802
prev: /Product-Categories/WisBlock/RAK5802/Quickstart/
next: false
---

# RAK5802 WisBlock RS485 Interface Module Datasheet

## Overview

### Description

The RAK5802 WisBlock Interface module, was designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. 

The RAK5802 is a RS485 Modbus extension module that allows users to provide IoT connectivity to a new/existing solution with an RS485 interface. This module converts the RS485 signals into UART signals. These signals are collected by an MCU located inside of a WisBlock Core module for further data transmission. 

The RAK5802 module features one RS485 interface. Inside, a protection circuity is added to protect against ESD hazards. The RAK5802 module complies with the  IEC61000-4-2 standard and can protect up to 18&nbsp;kV HBM ESD.

In addition, the RAK5802 supports one I2C interface, customers can use this I2C interface to connect external sensors


### Features

*	RS485 interface and Modbus protocol.
*	Compatible with multiple WisBlock Core modules, such as RAK4631.
*	Supports up to 16 RS485 nodes
*	Supports TX/RX signals automatic detection, no need to have DE signal for the RS485 chip.
*	Low power consumption mode. The module can be powered off by the WisBlock Core module for saving energy during idle periods. 
*	Reserved I2C expansion interface.
*	In the field a fast crimping terminals.
*	Designed with 18&nbsp;kV ESD protection level.
*	Small dimensions of 35&nbsp;mm x 25&nbsp;mm.

## Specifications

### Overview

#### Block Diagram
The figure below shows the block diagram of the RAK5802 module. Internally, a RS485 converter translates the RS422 electrical differential signal into the UART signal. This component can be disabled by the Enable signal through the MCU in order to save power during idle periods.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/block-diagram.png"
  width="50%"
  caption="RAK5802 block diagram"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK5802 WisBlock™ Module.


#### Pin Definition

##### RAK5802 Module 

The figure below shows the pin number of the sensor connector of the RAK5802 module.

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/RAK5802-pinout.png"
  width="60%"
  caption="RAK5802 sensor connector"
/>

The pin definition of the sensor connector is described in the table below:

| **Pin number** | **Function Description** | 
| ---- | ---- | 
| 1 | RS485-B | 
| 2 | RS485-A | 
| 3 | GND | 
| 4 | Power supply from battery on mainboard | 
| 5 | Analog 1 to MCU | 
| 6 | 3V3 input | 
| 7 | SDA for I2C interface | 
| 8 | SCL for I2C interface | 


#####  WisBlock Interface Connector

The figure below shows the pin order of the IO connector on the module. Through this connector, the RAK5802 module is attached to the WisBoard baseboard. 

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/wisconnector-pins.png"
  width="50%"
  caption="RAK5802 internal WisBlock Interface connector."
/>

The table below shows the functionalities of each pin of the WisBlock Interface connector: 

| **Pin number** | **Description** | **Pin number** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | Battery power | 2 | Battery power | 
| 3 | GND | 4 | GND | 
| 5 | NC, reserved for 3V3 | 6 | 3.3V power | 
| 7 | NC | 8 | NC | 
| 9 | NC | 10 | NC | 
| 11 | NC | 12 | NC | 
| 13 | NC | 14 | NC | 
| 15 | NC | 16 | NC | 
| 17 | NC | 18 | NC | 
| 19 | SDA for I2C1 | 20 | SCL for I2C1 | 
| 21 | Analog1 to MCU | 22 | NC | 
| 23 | NC | 24 | NC | 
| 25 | NC | 26 | NC | 
| 27 | NC | 28 | NC | 
| 29 | Reserved for DE | 30 | NC | 
| 31 | NC | 32 | NC | 
| 33 | UART_TX | 34 | UART_RX | 
| 35 | NC | 36 | NC | 
| 37 | NC | 38 | NC | 
| 39 | GND | 40 | GND | 

#### Electrical Characteristics

##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the module | -0.5 |  | 4.2 | V | 
| Iout | Step down IC output current |  |  | 1000 | mA | 
| TEMP | Working temperature | -30 |  | 65 | °C | 
| Storage | Storage Temperature | -40 |  | 85 | °C | 


##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT | Power supply for the<br>module | 2.6 |  | 4.2 | V | 
| 3V3 | 3.3V power supply | 3.0 | 3.3 | 3.6 | V | 

#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/board-dimensions.png"
  width="80%"
  caption="RAK5802 dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak5802/datasheet/schematic.png"
  width="100%"
  caption="RAK5802 schematic diagram"
/>

## RAK5802 and WisBlock Compatibility

In the ecosystem of the WisBlock, the philosophy is to allow users to combine a WisBlock module of one category with WisBlock module of other categories. This is true in most of the cases but it is important to review the compatibility matrix when designing a customized solution. 

|  | **Compatible Wisblock Module** | **Description** | 
| ---- | ---- | ---- | 
| WisBlock Base board | RAK5005/RAK5005-O | RAK5802 can be attached in the IO slot of RAK5005-O base board. | 
| WisBlock Core module | RAK4631 | RAK5802 is compatible with RAK4631 WisBlock Core module. | 
|  | RAK4201 | Please select RAK4201L-485 for low band or RAK4201H-485 for high band. | 
|  | RAK4202 | RAK5802 is compatible with RAK4202 WisBlock Core module. | 
|  | RAK4261 | RAK5802 is compatible with RAK4261 WisBlock Core module. | 
|  | RAK4601 | RAK5802 is compatible with RAK4601 WisBlock Core module. | 