---
rak_desc: Covers the comprehensive information of your RAK14013 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14013/overview/rak14013_home.png
tags:
  - datasheet
  - wisblock
  - RAK14013
prev: ../Quickstart/
next: false
---

# RAK14013 WisBlock Joystick Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/rak14013_front_back.png"
  width="40%"
  caption="RAK14013 WisBlock Joystick Module"
/>

### Description

The RAK14013 is a joystick module with embedded MCU based on ATTINY441-SSU from Atmel. It has four common tactile push buttons and a rotary 2-axis analog joystick. The status of the buttons and voltage readings of an analog joystick is monitored by the MCU and converted to digital data via I2C interface. RAK14013 doesn't have a WisBlock standard connector so you need a RAK14007 adapter board to plug it into to WisBlock Base module. The RAK14013 communicates to the WisBlock Core via I2C interface.

### Features

- Joystick module and push buttons 
- I2C interface
- 3.3&nbsp;V Power supply
- Chipset: ATMEL ATTINY441-SSU
- Module Size: 54&nbsp;mm x 85&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK14013 WisBlock Joystick Module can be mounted to the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK14006 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image_mounting.png"
  width="60%"
  caption="RAK14013 WisBlock Joystick Module mounting"
/>


### Hardware

The hardware specification is categorized into three parts. It provides the pinouts of the module and their corresponding functions and diagrams. Also, it shows the mechanical parameters of the RAK14013 WisBlock Joystick Module.

#### Chipset

| Vendor | Part number   |
| ------ | ------------- |
| ATMEL  | ATTINY441-SSU |

#### Pin Definition

The pin definition of the RAK14013 connector is shown in **Figure 3**.

 <rk-img
  src="/assets/images/wisblock/rak14013/datasheet/rak14007_pinouts.svg"
  width="80%"
  caption="RAK14013 WisBlock Joystick Module pinout"
/>


::: tip 📝 NOTE
- **3V3**, **I2C** related pin, **RESET**, and **INT** are connected to cable
- This connector is also for updating the  MCU software
:::

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK14013 module.

 <rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-mechanical.png"
  width="60%"
  caption="RAK14013 WisBlock Joystick Module Dimensions"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/pcb-layout.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram

**Figure 6** shows the schematic of the RAK14013 WisBlock Joystick Module.

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/rak14013_schematic_diagram.png"
  width="100%"
  caption="RAK14013 WisBlock Joystick Module schematic"
/>

##### Power Supply and I2C

**Power supply** and **I2C** connections are shown in **Figure 7**. 

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-power-i2c.png"
  width="60%"
  caption="RAK14013 Power supply and I2C"
/>

##### MCU Circuit

The RAK14013 uses ATTINY441-SSU microcontroller unit (MCU) to control the four tactile push buttons and a rotary series potentiometer of the joystick.

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-mcu.png"
  width="70%"
  caption="MCU circuit"
/>

##### Joystick Circuit

**Joystick** circuit diagram is shown in **Figure 9**. 

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-joystick.png"
  width="40%"
  caption="RAK14013 joystick"
/>

##### Tactile Pushbuttons Circuit

**Tactile Pushbuttons** circuit diagram is shown in **Figure 10**. 

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-buttons.png"
  width="40%"
  caption="RAK14013 tactile push buttons"
/>

##### Debug Connector

**Debug** connector circuit diagram is shown in **Figure 11**. 

<rk-img
  src="/assets/images/wisblock/rak14013/datasheet/image-debug.png"
  width="40%"
  caption="RAK14013 debug connector"
/>

