---
rak_desc: Covers the comprehensive information of your RAK19006 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK19006
prev: ../Overview/
next: false
---

# RAK19006 WisBlock Wireless Charge Module Datasheet

## Overview

### Description

The RAK19006 WisBlock wireless charge module was designed to be a part of battery charger. The RAK19006 is highly efficient, Qi-compliant, single-chip wireless power receiver and charger. It integrates the receiver and linear charger and supports up-to 5&nbsp;W applications. This board can be connected with the WisBlock Base board like RAK5005-O through IO slot or through two pogo pins. The chip supports wireless charge and directly battery charging. 

### Features

- WPC 1.2.4 compliant wireless power receiver
- JEITA compatible charge
- Ultra-low leakage current without transmitter
- Wireless and wired charge
- OVP, OCP, and OTP protection
- Supports up-to 5&nbsp;W applications
- Module size: 15 X 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK19006 module can be mounted on the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK19006 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK19006 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification discusses the pinouts, and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK19006 WisBlock Module.

#### Pin Definition

The RAK19006 module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/rak19006-pinout.svg"
  width="70%"
  caption="RAK19006 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only VBAT, GND and VBUS are connected to this module. 

- VBUS is wired charge input.
:::  

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK19006 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol | Description                     | Min. | Nom. | Max.        | Unit |
| ------ | ------------------------------- | ---- | ---- | ----------- | ---- |
| VRECT  | Power voltage range             | 3    | -    | 10          | V    |
| Vcc    | Logic voltage range             | -    | 5    | 5.5         | V    |
| IC     | Continuous drive output current | -    | -    | 600&nbsp;mA | mA   |
| TA     | Ambient Operation temperature   | 0    | -    | 85          | ℃    |

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19006 module is shown in **Figure 3** below.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19006 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK19006 module.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/rak19006-schematic.png"
  width="100%"
  caption="RAK19006 WisBlock Module Schematics"
/>

##### Charge chip

**Figure 6** shows the schematic of RAK19006 wireless charge chip, when **VBUS** voltage more than 3.6&nbsp;V, the chip will change to wired charge, where **J1** is a coil connector, **J3** and **J4** are pogo pins, **J5** and **J6** are test points.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/charge-chip.png"
  width="90%"
  caption="RAK19006 WisBlock Wireless charge Module Schematic"
/>

##### NTC Divider

The RAK19006 linear charger has JEITA compatible function to protect battery safety. The module will adjust the charging current and voltage when battery temperature reaches the JEITA standard. **Figure 7** shows the NTC divider circuit, where **R5** is a NTC resistor.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/ntc-divider.png"
  width="30%"
  caption="RAK19006 NTC divider circuit"
/>

##### Status LED

**Figure 8** shows the charge status of the LED. When charging started, the LED will turn on. 

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/status-led.png"
  width="50%"
  caption="RAK19006 charge status LED"
/>

##### Gain, Offset and Current Set

**Figure 9** and **Figure 10** show the wireless charge module's gain, offset and its max charge current.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/goc-schem.png"
  width="30%"
  caption="RAK19006 Gain, Offset and Max Charge Current Schematic"
/>

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/goc-compute.png"
  width="60%"
  caption="Gain, Offset and Max Charge Current Set"
/>
