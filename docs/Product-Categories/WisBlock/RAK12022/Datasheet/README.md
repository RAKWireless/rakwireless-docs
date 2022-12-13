---
rak_desc: Provides comprehensive information about your RAK12022 WisBlock PT100 Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12022/overview/RAK12022.png
tags:
  - datasheet
  - wisblock
  - RAK12022
  - Maxim Integrated
  - MAX31865
prev: ../Overview/
next: false
---

# RAK12022 WisBlock PT100 Module Datasheet

## Overview


<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/rak12022-front-back.png"
  width="70%"
  caption="RAK12022 WisBlock PT100 Module"
/>

### Description

**RAK12022** is a PT100 IO module that uses **MAX31865**, an easy-to-use resistance-to-digital converter optimized for platinum resistance temperature detectors (RTDs). An external resistor sets the sensitivity for the RTD being used and a precision delta-sigma ADC converts the ratio of the RTD resistance to the reference resistance into digital form. The MAX31865’s inputs are protected against overvoltage faults as large as 45&nbsp;V. Programmable detection of RTD and cable open and short conditions is included.

### Applications

 - Industrial Equipment
 - Medical Equipment
 - Instrumentation

### Features

**Module specifications**
- Based on MCP2518FD and ATA6563
- Compatible with 2-wire, 3-wire, and 4-wire sensor connections
- SPI-Compatible Interface
- 15-Bit ADC Resolution; Nominal Temperature Resolution 0.03125&nbsp;NC (Varies Due to RTD Nonlinearity)
- Total Accuracy Over All Operating Conditions: 0.5&nbsp;NC (0.05% of Full Scale) max
- Fully Differential VREF Inputs
- 21&nbsp;ms (max) Conversion Time
- Power supply: 3.3&nbsp;V
- Operating Temperature: -40°&nbsp;C ~ 85°&nbsp;C

## Specifications

### Mounting

#### Mounting to WisBlock Base

The RAK12022 PT100 module can be mounted to the IO slot of the WisBlock base board. **Figure 2** shows the mounting mechanism of the RAK12022 on a WisBlockBase Board module.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_mount_to_wisbase.png"
  width="50%"
  caption="RAK12022 WisBlock PT100 Module Mounting"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12022 WisBlock PT100 Module.


#### Chipset

| Vendor           | Part Number                                                           |
| ---------------- | --------------------------------------------------------------------- |
| Maxim Integrated | [MAX31865](https://datasheets.maximintegrated.com/en/ds/MAX31865.pdf) |

#### Pin Definition

The RAK12022 WisBlock PT100 Module comprises a standard WisBlock IO slot connector. The WisBlock IO slot connector allows the RAK12022 module to be mounted to a WisBlock Base Board module. The pin order of the connector and the pinout definition is shown in **Figure 3**.

::: tip 📝 NOTE
- **SPI** related pins, **DRDY**, **3V3_S**, and **GND** are connected to the WisIO connector.
:::

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_pinout.png"
  width="70%"
  caption="RAK12022 WisBlock PT100 Module Pinout"
/>

#### Electrical Characteristics

This table shows the RAK12022 module electrical characteristics.

| Symbol | Description          | Min. | Nom. | Max. | Unit |
| ------ | -------------------- | ---- | ---- | ---- | ---- |
| 3V3_S  | Power Supply Voltage | -    | 3.3  | -    | V    |

#### Mechanical Characteristic

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK12022 module.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_mechanic_drawing.png"
  width="80%"
  caption="RAK12022 WisBlock PT100 Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic diagram of RAK12022 module.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_schematic.png"
  width="100%"
  caption="RAK12022 WisBlock PT100 Module Schematic"
/>

##### Sensor Connection Instructions

###### 2-Wire

Connect one RED wire of the PT100 sensor to Pin 1 or Pin 2 of J2, and the BLUE wire to Pin 3 or Pin 4 of J2. Install Jumper on Pin 2 and Pin 3 of J3. Install Jumper on Pin 1 and Pin 2 of J4. Install Jumper on Pin 3 and Pin 4 of J4.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_2wire_A.png"
  width="70%"
  caption="RAK12022 WisBlock PT100 Module 2-Wire Connection"
/>

###### 3-Wire

Connect the two RED wires of the PT100 sensor to Pin 1 and Pin 2 of J2, and connect the BLUE wire to Pin 3 or Pin 4 of J2. Install Jumper on Pin 1 and Pin 2 of J3. Install Jumper on Pin 3 and Pin 4 of J4.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_3wire_A.png"
  width="70%"
  caption="RAK12022 WisBlock PT100 Module 3-Wire Connection"
/>

###### 4-Wire

Connect the two RED wires of the PT100 sensor to Pin 1 and Pin 2 of J2, and connect the two BLUE wires to Pin 3 and Pin 4 of J2. Or connect the two BLUE wires of the PT100 sensor to Pin 1 and Pin 2 of J2, and connect the two RED wires to Pin 3 and Pin 4 of J2. Either way will work. Also, install Jumper on Pin 2 and Pin 3 of J3.

<rk-img
  src="/assets/images/wisblock/rak12022/datasheet/RAK12022_4wire_A.png"
  width="70%"
  caption="RAK12022 WisBlock PT100 Module 4-Wire Connection"
/>
