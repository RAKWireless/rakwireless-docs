---
rak_desc: Provides comprehensive information about your RAK12015 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12015/overview/default_buy.png
tags:
  - datasheet
  - wisblock
  - RAK12015
prev: ../Quickstart/
next: false
---

# RAK12015 WisBlock Vibration Detection Sensor Module Datasheet

## Overview

### Description

The RAK12015, a part of WisBlock Sensor, is a Vibration Detection Module that uses a high-precision sensor, the ANT-801S. This sensor is capable of detecting micro shocks or vibration without direction limits.

### Features

- Vibration Detection
- 3.3&nbsp;V Power Supply
- Chipset: ANT-801S
- Module Size: 15&nbsp;mm x 25&nbsp;mm


## Specifications

### Overview 

#### Mounting 

The RAK12015 WisBlock Vibration Detection Sensor Module can be mounted to the IO slot of the [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. **Figure 1** shows the mounting mechanism of the RAK12015 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak12015/datasheet/mounting.png"
  width="60%"
  caption="RAK12015 WisBlock Vibration Detection Module Mounting"
/>

The sensor (ANT-801S) can be taken out of PCB by connector (J2 on PCB of RAK12015), so that the user can position the sensor outside of Wisblock to measure vibrations.


### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12015 WisBlock Vibration Detection Sensor Module.

#### Chipset

| Vendor | Part number |
| ------ | ----------- |
|        |  ANT-801S   |

#### Pin Definition

The RAK12015 WisBlock Vibration Detection Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12015 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

  ​                                       
<rk-img
  src="/assets/images/wisblock/rak12015/datasheet/RAK12015_pinout.svg"
  width="80%"
  caption="RAK12015 WisBlock Vibration Detection Module Pinout"
/>

::: tip 📝 NOTE
- The **3V3_S**, **AIN1**, and **GND** are connected to WisConnector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12015 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12015 module.
:::

#### Electrical Characteristics

| Parameter | Minimum | Normal | Maximum | Unit |
| --------- | ------- | ------ | ------- | ---- |
| 3V3_S     | -       | 3.3    | -       | V    |
| AIN1      | 0       | -      | 2       | V    |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK12015 module.

<rk-img
  src="/assets/images/wisblock/rak12015/datasheet/mechanical_drawing.png"
  width="70%"
  caption="RAK12015 WisBlock Vibration Detection Module Mechanical Drawing"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12015/datasheet/pcb_footprint.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

When there is no vibration detected, the AIN1 will be low. And when vibration occurs, AIN1 will produce a square wave. The voltage level of the square wave depends on the value of R1. 

The frequency of the square wave output depends on the vibrations received by the sensor. The sensor output is directly connected to the AN1 pin of the WisBlock Core.

There are optional components (R3 and U1) that are not mounted in the PCB but can be used to do signal conditioning. The output of this optional circuit is connected to IO4 of the WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12015/datasheet/schematic.png"
  width="80%"
  caption="Schematic of RAK12015 Module"
/>




