---
rak_desc: Covers the comprehensive information of your RAK14012 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14012/overview/RAK14012_home.png
tags:
  - datasheet
  - wisblock
  - RAK14012
prev: ../Quickstart/
next: false
---

# RAK14012 WisBlock LED Matrix Datasheet

## Overview

### Description

RAK14012 is an LED matrix driver module for WS2812B LEDs, which has a control circuit and RGB chip. 

To drive the WS2812B, the RAK14012 has a built-in boost circuit to generate 5&nbsp;V voltage output. But it is recommended to use an external power supply to power the LED Matrix. 


### Features

- LED matrix driver
- 3.3&nbsp;V Power supply
- Module Size: 25&nbsp;mm x 15&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK14012 WisBlock LED Matrix can be mounted to the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK14012 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/mounting.png"
  width="60%"
  caption="RAK14012 WisBlock LED Matrix mounting"
/>

### Hardware
#### Pin Definition

The RAK14012 WisBlock LED Matrix comprises a 40-pin WisConnector. The 40-pin WisConnector allows the RAK14012 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- The **VBAT**, **GND**, **EN (WB_IO6)**, and **DOUT (WB_IO5)** are connected to WisConnector.
:::

 <rk-img
  src="/assets/images/wisblock/rak14012/datasheet/RAK14012_Pinout.svg"
  width="80%"
  caption="RAK14012 WisBlock LED Matrix pinout"
/>
  

#### Electrical Characteristics

| Symbol | Description             | Condition        | Min. | Nom. | Max. | Unit |
| ------ | ----------------------- | ---------------- | ---- | ---- | ---- | ---- |
| VBAT   | Lithium battery output  | Normal operation | 3.3  | -    | 4.2  | V    |
| 3V3_S  | 3.3&nbsp;V from WisBase | Normal operation | -    | 3.3  | -    | V    |
| 5V     | Output from boost       | Normal operation | -    | 5    | -    | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK14012 module.

 <rk-img
  src="/assets/images/wisblock/rak14012/datasheet/mechanical-drawing.png"
  width="80%"
  caption="RAK14012 WisBlock LED Matrix dimensions"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/pcb_footprint.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram

It has a boost circuit to generate 5&nbsp;V because the supply for WS2812B must be between 3.7&nbsp;V and 5.3&nbsp;V. It is recommended to use an external power source to power the LED Matrix because of its high power consumption.



##### Connector

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/connector.png"
  width="50%"
  caption="RAK14012 connector connection"
/>


##### Boost

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/boost.png"
  width="90%"
  caption="RAK14012 boost circuit"
/>

##### Power Selection

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/power.png"
  width="50%"
  caption="RAK14012 power selection"
/>

:::warning ⚠️ WARNING    
- Make sure that the jumper from 5V_OUT of RAK14012 WisBlock LED Matrix is disconnected when connecting to an external power supply.
- LED Matrix DIN should be connected to RAK14012 DOUT.
- LED Matrix GND should be connected to RAK14012 GND.
:::

##### Connector for LED Matrix

<rk-img
  src="/assets/images/wisblock/rak14012/datasheet/connector_for_led.png"
  width="50%"
  caption="RAK14012 connector for LED matrix"
/>




