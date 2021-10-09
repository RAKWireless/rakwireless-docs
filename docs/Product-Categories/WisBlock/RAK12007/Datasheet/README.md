---
tags:
  - datasheet
  - wisblock
  - RAK12007
prev: ../Overview/
next: false
rak_desc: Covers the comprehensive information of your RAK12007 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12007/overview/RAK12007_buy.png
---

# RAK12007 WisBlock Ultrasonic Sensor Module Datasheet

## Overview

### Description

RAK12007 is an ultrasonic sensor module based on the CS100, an industrial-grade ultrasonic distance measurement chip. This chip integrates ultrasonic transmitter, ultrasonic receiver, and digital processing circuits. The distance measurement result output is in the form of pulse width.

For an ultrasonic detector, there are two main parts: **Emitter** and **Detector**. The emitter transmits an ultrasonic sound wave, and the detector receives back the signal from the emitter reflected by an object. By calculating the travel time and the speed of sound, the distance of the object can be determined.


### Features 

* Detect Range: 2&nbsp;cm to 4&nbsp;m
* 3.3&nbsp;V Power supply
* **Module size**: 25 x 48&nbsp;mm

## Specifications

### Overview

**Figure 1** shows the operation of the RAK12007 Ultrasonic Sensor Module.

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-waves.png"
  width="50%"
  caption="RAK12007 Ultrasonic Sensor Operation"
/>


**Figure 2** and **Figure 3** display the RAK12007 front view (top) and bottom view, respectively.

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-top.svg"
  width="40%"
  caption="RAK12007 Top View"
/>

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-bottom.svg"
  width="40%"
  caption="RAK12007 Bottom View"
/>


#### Mounting

The RAK12007 module can be mounted on the IO slot of a WisBlock Base board. Figure 4 shows the mounting mechanism of the RAK12007 module on a WisBlock Base module, such as the RAK5005-O.


<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-mounting.png"
  width="50%"
  caption="RAK12007 Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12007 Ultrasonic Sensor Module.

####  Chipset

| Vendor    | Part number |
| --------- | ----------- |
| angoSense | CS100       |


#### Pin Definition

The RAK12007 WisBlock module has a 40-pin WisConnector that is compatible with the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**


<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-pinout.svg"
  width="80%"
  caption="RAK12007 WisBlock Ultrasonic Sensor Module Pinout"
/>

:::tip 📝 NOTE:

- **PD**, **ECHO**, **TRIG**, **3V3_S (optional)**, **3V3 (default)**, and **GND** are connected to WisIO connector. 
- **3V3_S (optional)** voltage output from the WisBlock Base that powers the RAK12007 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12007 module.
:::


#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol                | Description                                 | Min.  | Nom.  | Max.  | Unit  |
| --------------------- | ------------------------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>        | Power supply for the module                 |  3.0  |       |  5.5  |   V   |
| V<sub>POR</sub>       | Power-on reset voltage                      |       |   1   |  1.3  |   V   |
| I<sub>DD</sub>        | Capacitive Sensing Active                   |   -   |  500  |  750  |  uA   |
| I<sub>DSLEEP_3V</sub> | Deep Sleep State current                    |   -   |   5   |   -   |  uA   |
| I<sub>STBY_DEF</sub>  | Standby state active 70&nbsp;ms cycle time  |       |  120  |  170  |  uA   |
| I<sub>STBY_LP</sub>   | Standby state active 140&nbsp;ms cycle time |       |  50   |       |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 6** shows the dimensions and the mechanic drawing of the RAK12007 module.

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-dimensions.svg"
  width="80%"
  caption="RAK12007 WisBlock Ultrasonic Sensor Mechanic Drawing"
/>

**Figure 7** and **Figure 8** show the mounting holes location and diameter of RAK12007 module.

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-pwb-1.png"
  width="100%"
  caption="RAK12007 Mounting Holes Location and Diameter"
/>

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/rak12007-pwb-2.png"
  width="100%"
  caption="RAK12007 Mounting Holes Location and Diameter"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14002/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12007/datasheet/image-20210626215336551.png"
  width="100%"
  caption="RAK12007 WisBlock Ultrasonic Sensor Schematic"
/>

