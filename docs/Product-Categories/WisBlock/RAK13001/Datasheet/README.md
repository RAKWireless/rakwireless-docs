---
rak_desc: Covers the comprehensive information of your RAK13001 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13001/overview/RAK13001_home.png
tags:
  - datasheet
  - wisblock
  - RAK13001
prev: ../Quickstart/
next: false
---

# RAK13001 WisBlock Relay and Opto-couple Module Datasheet

## Overview

### Description

RAK13001 is a WisBlock Interface module which extends the WisBlock system to be used on isolated digital input and output applications. There is one digital output that is isolated by an electromechanical relay and one digital input isolated by an opto-couple. The isolated input can be configured as wet contact (default mode) or dry contact. RAK13001 digital output is used to programmatically switch on/off devices operating at high voltage or current applications.

### Features

- One relay isolated output
- One opto-couple isolated input
- The input supports wet contact(default mode) or dry contact
- The isolation between internal and external is up to 2500&nbsp;VDC
- The output of relay supports 30&nbsp;VDC/2&nbsp;A rating
- The input of opto-couple supports 12-24&nbsp;V
- Module size: 25 X 35&nbsp;mm

## Specifications

### Overview 

The overview covers the RAK13001 block diagram and the mounting mechanics of the board into the WisBlock Base board.

#### Mounting

The RAK13001 module can be mounted on the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK13001 on a WisBlock Base module, such as a RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK13001 mounting mechanism on a WisBlock Base module"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/block-diagram.png"
  width="70%"
  caption="RAK13001 Block Diagram"
/>

The RAK13001 use one relay to isolate output of MCU. The dielectric strength between coil and contacts of relay is 4000&nbsp;VAC 1min.

For input, RAK13001 uses an opto-couple as isolation, and it supports wet contact as default. The rating of input is 12V-24&nbsp;VDC. It also can be configurated as dry contact by reworking some resistors on the PCB module.

:::warning ⚠️ WARNING!!    
<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/warning.png"
  width="90%"
  caption="Safety Precaution"
/>
:::

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK13001 WisBlock Module.

#### Pin Definition

The RAK13001 WisBlock module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 4**. 

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/RAK13001_Pinout.svg"
  width="50%"
  caption="RAK13001 Pinout Schematic"
/>

::: tip 📝 NOTE
- By default, PIN 10 (SW1) on WisConnector is used as DI input, and PIN 32 (IO4) is used as DO output. 
- You can change DI or DO pin by reworking resistors. Some options have been reserved so you can change GPIO to control DI or DO.
- RAK13001 use 3V3_S as power. You need to open 3V3_S when using this module, and also, you can shut down 3V3_S to save power when not using this module.
:::  

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK13001 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol       | Description                    | Min. | Nom. | Max. | Unit |
| ------------ | ------------------------------ | ---- | ---- | ---- | ---- |
| 3V3_S        | Power supply for the module    | -    | 3.3  | -    | V    |
| Ishut        | Shut down current              | -    | -    | 1    | uA   |
| Icc          | Supply current at relay closed | -    | 70.0 | -    | mA   |
| Relay output |                                |      |      |      |      |
| Vswitch      | Max AC switching voltage       | -    | -    | 130  | V    |
| Vswitch      | Max DC switching voltage       |      |      | 30   | V    |
| Iswitch      | Max switching current          | -    | -    | 2    | A    |
| Rc           | Contact resistance             | -    | -    | 100  | mohm |
| Viso         | Isolation voltage              | -    | -    | 4000 | VDC  |
| Opto-couple  |                                |      |      |      |      |
| Vi           | DC Input Voltage               | 12   | -    | 24   | VDC  |
| Ii           | Input Current                  | -    | -    | 50   | mA   |
| Viso         | Isolation Voltage              | -    | 2500 | -    | Vrms |



#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimensions of the RAK13001 module is shown in **Figure 5** below.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK13001 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 7** shows the schematic of the RAK13001 module.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/rak13001-schematic.png"
  width="100%"
  caption="RAK13001 WisBlock Module Schematic"
/>

##### 40-pin WisConnector

**Figure 8** shows the WisConnector connection. By default, IO3 on WisConnector is used as DI, IO4 is used as DO.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/rak13001-wisio.png"
  width="50%"
  caption="RAK13001 WisConnector"
/>

##### Relay 

**Figure 9** shows RAK13001 module relay schematic. Use **3V3_S** for relay coil power supply.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/rak13001-relay.png"
  width="50%"
  caption="RAK13001 WisBlock Relay Schematic"
/>

##### Opto-coupler

**Figure 10** shows opto-coupler schematics.

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/rak13001-optocoupler.png"
  width="60%"
  caption="RAK13001 Opto-coupler Schematics"
/>

::: tip 📝 NOTE
- By default, it is connected as wet contact. If you want to use dry contact mode, rework resistors on the PCB Module as follows:

    1. Remove R11 and D2;
    2. Add 680&nbsp;Ω resistors on R9, R12, R13 ,and R14.

- Then, short K1 and K2 can make DI to be low logical.
::: 

<rk-img
  src="/assets/images/wisblock/rak13001/datasheet/rak13001-silkscreen.png"
  width="60%"
  caption="RAK13001 PCB Silkscreen"
/>

