---
rak_desc: Covers the comprehensive information of your RAK14006 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14006/overview/RAK14006_home.png
tags:
  - datasheet
  - wisblock
  - RAK14006
prev: ../Quickstart/
next: false
---

# RAK14006 WisBlock Rotary Encoder Module Datasheet

## Overview

### Description

The RAK14006 is a rotary encoder module with PEC11L-4125F-S0020 from BOURNS. RAK14006 can detect user inputs such as rotation direction and rotation number of steps. Also, an independent push switch is provided for the user.


### Features

- Rotary Encoder with an independent push switch 
- 3.3&nbsp;V Power supply
- Chipset: BOURNS PEC11L-4125F-S0020
- Module Size: 25&nbsp;mm x 35&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK14006 WisBlock Rotary Encoder Module can be mounted to the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK14006 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/mounting.png"
  width="60%"
  caption="RAK14006 WisBlock Rotary Encoder Module Mounting"
/>

#### Chipset

| Vendor  | Part number        |
| ------- | ------------------ |
| BOURNS  | PEC11L-4125F-S0020 |

### Pin Definition

The RAK14006 WisBlock Rotary Encoder Module comprises a standard WisIO connector. The WisIO connector allows the RAK14006 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- The three(3) GPIOs: **IO4**, **IO5**, **IO6**, **3V3** and **GND** are connected to WisIO connector.
:::

 <rk-img
  src="/assets/images/wisblock/rak14006/datasheet/RAK14006_Pinouts.svg"
  width="80%"
  caption="RAK14006 WisBlock Rotary Encoder Module Pinout"
/>
  

#### Electrical Characteristics

| Symbol | Description                | Condition                                            | Min. | Nom.         | Max. | Unit |
| ------ | -------------------------- | ---------------------------------------------------- | ---- | --------------- | ---- | ---- |
| 3V3_S | Supply Voltage             | Input voltage must be within this range                 | -    | 3.3       | - | V    |
| RPM    | Revolutions Per Minute | Operating                            | -      | -    | 60   | RPM     |
| -      | Detent  Numbers        | -                                    | -      | 20   | -    | detents |
| -      | Rotational Life        | Operating                            | 100000 | -    | -    | cycles  |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK14006 module.

 <rk-img
  src="/assets/images/wisblock/rak14006/datasheet/mechanical-drawing.png"
  width="60%"
  caption="RAK14006 WisBlock Rotary Encoder Dimensions"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/pcb-layout.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>


#### Schematic Diagram

##### Signal Input

**Signal A** and **Signal B** are rotary encoder signals from PEC11L-4125F-S0020. SW is an independent push switch from PEC11L-4125F-S0020.

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/signal-input.png"
  width="60%"
  caption="RAK14006 Signal Input"
/>


##### Hardware Rotation Direction

The RAK14006 can detect rotation direction using 74HC4538D. CW square wave only comes from OUT_CW, and the CCW square wave comes from OUT_CCW.

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/rotation-direction.png"
  width="60%"
  caption="Hardware Direction Rotation"
/>

##### WisConnector

<rk-img
  src="/assets/images/wisblock/rak14006/datasheet/pinout.png"
  width="40%"
  caption="RAK14006 Module WisConnector"
/>

::: tip 📝 NOTE
- The three(3) GPIOs: **IO4**, **IO5**, **IO6**, **3V3** and **GND** are connected to WisIO connector.
- By using R7 and R9 without connecting to R8 and R10, the MCU can get signals from the rotary encoder directly and the direction using the software.
- If the R8 and R10 are used without connecting R7 and R9, the user can get the signal via hardware. Also, the user can get the rotation direction from which the GPIO the signal came from.
:::
​      


