---
rak_desc: Covers the comprehensive information of your RAK17000 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK17000
prev: ../Overview/
next: false
---

# RAK17000 WisBlock Motor Control Module Datasheet

## Overview

### Description

The RAK17000 is a DC motor driver module. It can be mounted to the IO Slot of the WisBlock Base of your choice. It can drive one stepper motor or two DC motors. The RAK17000 module uses the DRV8833 motor driver IC from Texas Instruments.


### Features

- Drive two DC motors or one stepper motor
- Wide power supply voltage range: 2.7 to 10.8&nbsp;V
- Motor power supply can be from an external source or from the WisBlock Base battery
- Output current control 
- Selection of power source can be done via 2.54&nbsp;mm 2-pin jumper
- Module size: 25X35&nbsp;mm

### Applications

- Battery-Powered Mechanical Devices
- Automation Machines
- Robotics

## Specifications

### Overview

#### Mounting 

The RAK17000 module can be mounted to the slots IO of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK17000 on a WisBlock Base module, such as the RAK5005-O. 

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/RAK17000_mounting.png"
  width="60%"
  caption="RAK17000 WisBlock Motor Drive Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and the corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK17000 WisBlock Motor Drive Module.

#### Chipset

The RAK17000 motor drive module uses DRV8833 from Texas Instruments. 

| Vendor            | Part Number |
| ----------------- | ----------- |
| Texas Instruments | DRV8833     |

#### Pin Definition

The RAK17000 WisBlock motor drive module comprises a standard WisBlock connector for the IO slot. The WisBlock connector allows the RAK17000 module to be mounted on a WisBlock Base Board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in Figure 2. 

::: tip 📝 NOTE
- Bridge **A** and **B** input related pins, **nSLEEP**，**VBAT**, and **GND** are connected to this connector.
- **nSLEEP** enable pin, high active, internal pull-down, low-power sleep mode
:::

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/rak17000_connector_pinout.svg"
  width="70%"
  caption="RAK17000 WisBlock Motor Drive Module Pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                     | Min. | Nom. | Max. | Unit |
| ------ | ------------------------------- | ---- | ---- | ---- | ---- |
| VM     | Device power supply (Motor and Driver IC)            | 2.7  | -    | 10.8 | V    |
| VDIGIN | Digital input pin voltage range | -0.3 | -    | 5.75 | V    |
| IOUT   | Output current per bridge       | -    | -    | 0.85 | A    |
| IVM    | VM sleep mode supply current    | -    | 1.6  | 2.5  | uA   |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK17000 module.

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/RAK17000_mechanic_drawing.png"
  width="90%"
  caption="RAK17000 WisBlock Motor Control Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### Motor Drive

Figure 5 shows RAK17000 motor drive schematic. VM is the motor power supply that has a range from 2.7&nbsp;V to 10.8&nbsp;V. It can change the motor current through modifying the R4, R5, R8, or R9. Default max output current is 0.85&nbsp;A.

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/rak17000_schematic.png"
  width="100%"
  caption="RAK17000 WisBlock Motor Drive schematic"
/>

##### Power Supply Switch

The power source of the motor can be selected via the 2.54&nbsp;mm pitch jumper as shown in Figure 6. It can be from the battery of the WisBlock Base or via the external input voltage in the RAK17000 terminal. This is also the power source of the Driver IC. The max voltage input is 10.8&nbsp;V.

<rk-img
  src="/assets/images/wisblock/rak17000/datasheet/rak17000_schematic_power.png"
  width="35%"
  caption="RAK17000 Wisblock Power Supply Switch"
/>


