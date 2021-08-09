---
rak_desc: Covers the comprehensive information of your RAK19006 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19006/overview/RAK19006_home.png
tags:
  - datasheet
  - wisblock
  - RAK19006
prev: ../Quickstart/
next: false
---

# RAK19006 WisBlock Wireless Charge Module Datasheet

## Overview

### Description

The RAK19006 WisBlock Wireless Charge Module is designed to be a part of the battery charger. It is highly efficient, Qi-compliant, and has a single-chip wireless power receiver and charger. It integrates the receiver and linear charger and supports up to 5&nbsp;W applications.

This board can be connected with the WisBlock Base board like RAK5005-O through the IO slot or two pogo pins. The chip supports wireless charge and direct battery charging. 

### Features

- WPC 1.2.4 compliant wireless power receiver
- JEITA compatible charge
- Ultra-low leakage current without transmitter
- Wireless and wired charge
- OVP, OCP, and OTP protection
- Supports up to 5&nbsp;W applications
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
  src="/assets/images/wisblock/rak19006/datasheet/rak19006-pinout.png"
  width="40%"
  caption="RAK19006 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only **GND** and **nEN** are connected to this module.

- **nEN** is the wireless charge chip enable pin, active low. A resistor (R4) is connected to nEN to GND, so by default, this chip is enable. If you want to disable it, pull the nEN to high.
:::  

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/rak19006-img.png"
  width="60%"
  caption="RAK19006 Pinout and Connector assignments"
/>

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK19006 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol | Description                     | Min. | Nom. | Max.        | Unit |
| ------ | ------------------------------- | ---- | ---- | ----------- | ---- |
| VRECT  | Power voltage range             | 3.4  | -    | 16          | V    |
| Vout   | Output voltage range            | -    | 5    | 5.5         | V    |
| Iout   | Continuous output current       | -    | 0.6  | 1.1         | A    |
| TA     | Ambient operation temperature   | -40  | -    | 85          | ℃   |

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

**Figure 6** shows the schematic of RAK19006 wireless charge chip, **J3** is a wireless charge coil connector, and **VOUT** is a wireless charge chip output voltage, with a normal voltage of 5&nbsp;V.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/charge-chip.png"
  width="70%"
  caption="RAK19006 WisBlock Wireless Charge Module Schematic"
/>

##### Output Connector

**Figure 7** shows the 2-pin cable wireless charge output connector connected to the WisBase solar input connector.

<rk-img
  src="/assets/images/wisblock/rak19006/datasheet/output-connector.png"
  width="40%"
  caption="RAK19006 WisBlock Wireless Charge Output Connector"
/>

::: tip 📝 NOTE
- **J2** is a 2-pin connector, **Pin 3** and **Pin 4** are the mounting pads.
:::
