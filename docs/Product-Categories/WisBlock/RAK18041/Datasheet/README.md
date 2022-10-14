---
rak_desc: Provides comprehensive information about your RAK18041 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18041/overview/RAK18041_home.png
prev: ../Overview/
next: false
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18041
  - Shenghuanyu
  - SHY-B9750MUP2.8-C1033
---

# RAK18041 WisBlock Analog Microphone Module Datasheet

## Overview

### Description

The RAK18041 is a WisBlock Analog Microphone Module that is based on **SHY-B9750MUP2.8-C1033**. This WisBlock Audio module is a unidirectional microphone that allows you to capture frequency waves from 100&nbsp;Hz up to 16,000&nbsp;Hz from the external environment. This microphone needs to be interfaced with WisBlock Audio analog microphone driver such as RAK18040 to make it compatible with the WisBlock IO slot.

### Features  

* **Module Specification**
    * Unidirectional Analog Microphone
    * Sensitivity: 100&nbsp;Hz to 16,000&nbsp;Hz
    * Compatible with WisBlock Audio stack

* **Module Size**
    * 15 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK18041 WisBlock Analog Microphone Module can be mounted to the WisBlock Audio stack. It cannot be interfaced directly with the WisBlock IO slot.  

<rk-img
  src="/assets/images/wisblock/rak18041/datasheet/RAK18041_mounting.png"
  width="60%"
  caption="RAK18004 mounted to the WisBlock Audio stack"
/>  
  
### Hardware  

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the acoustics, electrical, and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK18041 WisBlock Audio Analog Microphone.


#### Chipset

| Vendor      | Part Number           |
| ----------- | --------------------- |
| Shenghuanyu | SHY-B9750MUP2.8-C1033 |

#### Pin Definition

The RAK18041 WisBlock Analog Microphone Module comprises a 5-pin connector that connects to compatible analog microphone driver modules like RAK18040 

<rk-img
  src="/assets/images/wisblock/rak18041/datasheet/pin-diagram.png"
  width="40%"
  caption="RAK18041 pinout diagram"
/>  

#### Electrical Characteristics    

This table shows RAK18041 Analog Microphone Module acoustic and electrical characteristics:

| Symbol    | Description               | Min. | Nom. | Max. | Unit  |
| --------- | ------------------------- | ---- | ---- | ---- | ----- |
| Frequency | Frequency Response        | 100  | -    | 16k  | Hz    |
| U         | Operation Voltage Range   | 1    | -    | 10   | V     |
| SNR       | Signal-to-noise ratio     | 60   | -    | -    | dB(A) |
| SPL       | Max. Sound Pressure Level | -    | -    | 115  | dB    |
  
#### Mechanical Characteristics  
  
##### Board Dimensions  

**Figure 3** shows the dimensions and mechanical drawing of the RAK18041 module.
  
<rk-img
  src="/assets/images/wisblock/rak18041/datasheet/board-dimensions.png"
  width="40%"
  caption="RAK18041 Module mechanical dimensions"
/>  

#### Schematic Diagram

**Figure 4** shows the schematic diagram of the RAK18041 Module. It consists of the pinouts of both the RAK18041 Module and the analog microphone.  

<rk-img
  src="/assets/images/wisblock/rak18041/datasheet/schematic.png"
  width="60%"
  caption="RAK18041 Module schematic"
/>  