---
rak_desc: RAK18033 is a WisBlock Audio Stereo Microphone Header module that allows you to connect two PDM Microphone modules to have stereo input.
rak_img: /assets/images/wisblock/rak18033/overview/rak18033_home.png
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18033
prev: ../Quickstart/
next: false
---

# RAK18033 WisBlock Audio Stereo Microphone Header Module Datasheet

## Overview

### Description

RAK18033 is a WisBlock Audio Stereo Microphone Header module that allows you to connect two PDM Microphone modules to create a stereo sound input. It is only composed of connectors and still requires PDM Microphone modules like RAK18030, RAK18031, or RAK18032 to be functional.

### Features

* **Module specifications**
    * Stereo Microphone Header
    * Compatible with WisBlock Audio PDM Microphones
    
* **Module size**
    * 15 x 25&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033.png"
  width="40%"
  caption="RAK18033 WisBlock Audio Stereo Microphone Header Module top and bottom view"
/>

#### Mounting

##### Mount to WisBlock Base

**Figure 2** shows the mounting mechanism of the RAK18033 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK18033 module can be mounted on the IO slots.

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033-mount.png"
  width="50%"
  caption="RAK18033 mounted to the WisBlock Base"
/>

##### Mount to WisBlock Audio Stack

With the use of WisBlock Audio Spacer, the RAK18033 can be mounted to any other WisBlock Audio module. **Figure 3** shows the mounting mechanism of the RAK18033 on a Wisblock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033-audiostack.png"
  width="50%"
  caption="RAK18033 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It shows the pinouts of the module and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK18033 Audio Stereo Microphone Header Module.

#### Pin Definition

##### WisBlock IO Connector

The RAK18033 WisBlock Audio Stereo Microphone comprises a standard WisBlock connector. The WisBlock connector allows the RAK18033 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033-pinouts.png"
  width="70%"
  caption="RAK18033 WisBlock Module pinout diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are power supply from the WisBlock Base.
- **MIC_CTR_IO2** is the GPIO from WisBlock Core. Reserved control signal.
- **MIC_PDM1_Data** and **MIC_PDM1_CLK** are PDM signals.
:::

#### Mechanical Characteristics

##### Board Dimensions

**Figure 5** shows the dimensions and the mechanical drawing of the RAK18033 module.   

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033-dim.png"
  width="80%"
  caption="RAK18033 WisBlock Sensor mechanical drawing"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>


#### Schematic Diagram

**Figure 7** below shows the full schematic diagram of the RAK18033 Audio Stereo Microphone Header module.

<rk-img
  src="/assets/images/wisblock/rak18033/datasheet/rak18033-schem.png"
  width="100%"
  caption="RAK18033 schematic diagram"
/>

