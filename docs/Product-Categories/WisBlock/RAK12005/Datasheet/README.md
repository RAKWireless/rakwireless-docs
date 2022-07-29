---
rak_desc: Provides comprehensive information about your RAK12005 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12005/overview/RAK12005_home.png
tags:
  - datasheet
  - wisblock
  - RAK12005
prev: ../Quickstart/
next: false
---

# RAK12005 WisBlock Rain Sensor Module Datasheet

## Overview

### Description

The RAK12005, a part of WisBlock Sensor, is an electroconductive-liquid detect module used for detecting water and other electroconductive liquids. If the detection area is wet, the output of Microchip's MCP606 CMOS op-amp will go positive, signaling the presence of liquid.

RAK12005 WisBlock Rain Sensor Module also has a separate sensor PCB, the RAK12030. This sensor PCB is connected to the RAK12005 with a cable so that you can place the sensor under the open sky and keep your WisBlock solution in a dry place or inside a waterproof enclosure.

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/rak12030_module.png"
  width="20%"
  caption="RAK12030 Module"
/>

### Features

- 3.3&nbsp;V Power supply (disconnect option to save power)
- Chipset: Microchip MCP606
- Digital output
- Configurable detection threshold via trimmer
- Module size: 15 X 25&nbsp;mm
- Separate sensor PCB RAK12030, size 25 x 35&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK12005 WisBlock Rain Sensor Module can be mounted to the IO slot of the [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. **Figure 2** shows the mounting mechanism of the RAK12005 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK12005 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification discusses the pinouts and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK12005 WisBlock™ Module.

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK12005 WisBlock Rain Sensor Module.

#### Chipset

| Vendor    | Part number |
| --------- | ----------- |
| Microchip |  MCP606     |

#### Pin Definition

The RAK12005 WisBlock module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 3**. 

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/RAK12005_pinout.svg"
  width="60%"
  caption="RAK12005 WisBlock Rain Sensor Pinout"
/>

::: tip 📝 NOTE
- Only **OUT**, **3V3_S (optional)**, **3V3**, and **GND** are connected to WisConnector. **3V3_S** can be turn on or off on WisBlock Base through **IO2**. Default use **3V3** for this module.
:::  

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK12005 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol | Description          | Min. | Nom. | Max. | Unit |
| ------ | -------------------- | ---- | ---- | ---- | ---- |
| VDD    | Power Supply Voltage | -    | 3.3  | -    | V    |
| IQ     | Quiescent Current    | -    | -    | 25   | uA   |

#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimensions of the RAK12005 module is shown in **Figure 4** below.

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK12005 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the RAK12005 water module schematic. The MCP606 acts as a comparator on this module, the resistor divider (made of R7 and R5) is used as a voltage reference, and J2 is a water detect panel connector. 

The second divider consists of resistor R4 and a water detect panel connector (J2). When the water detect panel is dry, its resistance is near-infinite, and the voltage applied to the inverting terminal of the comparator equals VCC (3.3V). 

Since the voltage of the reference divider connected to the non-inverting input is VCC/2, the output of the comparator is at zero voltage. Once the liquid is present at the detect panel, its resistance drops and pulls the voltage on the inverting input of the comparator toward zero volts. Once this voltage falls below VCC/2, the comparator output swings toward VCC, signaling the presence of liquid. Then the comparator output is tied to the IO pin on the WisConnector.

<rk-img
  src="/assets/images/wisblock/rak12005/datasheet/rak12005-schematic.png"
  width="100%"
  caption="RAK12005 WisBlock Module Schematics"
/>

::: tip 📝 NOTE
- The water detect panel is RAK12030, make sure you got this module.
::: 