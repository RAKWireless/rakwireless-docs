---
rak_desc: Provides comprehensive information about your RAK14001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14001/overview/RAK14001_home.png
tags:
  - datasheet
  - wisblock
  - RAK14001
prev: ../Quickstart/
next: false
---

# RAK14001 WisBlock RGB LED Module Datasheet

## Overview

### Description

The RAK14001 is an RGB LED module that can be mounted to the IO slot of the WisBlock Base board. It is capable of driving RGB LEDs with up to 20&nbsp;mA per segment via the I2C interface. The main component of this module is the NCP5623B from On Semiconductors. This IC has a built−in DC/DC converter that works as a high-efficiency charge pump providing the required DC voltage for all three LED segments. There is also an **IREF** pin that provides the reference current based on the internal band−gap voltage reference to control the output current flowing in the LED.


### Features

- 2.7&nbsp;V - 4.2&nbsp;V input voltage range
- RGB Function Fully Supported
- Programmable Integrated Gradual Dimming
- Support I2C Protocol
- Support enable power supply 
- Module size: 25 X 35&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK14001 module can be mounted on the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK14001 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK14001 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It discusses the pinouts and its corresponding functions, and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK14001 WisBlock RGB LED Module.

####  Chipset
| Vendor            | Part number |
| ----------------- | ----------- |
| On Semiconductors | NCP5623B    |

#### Pin Definition

The RAK14001 WisBlock module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/rak14001-pinout.svg"
  width="70%"
  caption="RAK14001 Pinout Schematic"
/>

::: tip 📝 NOTE
- **I2C** related pins, **EN**, **VBAT**, **3V3**, and **GND** are connected to this module.
- **EN** is connected to power chip enable pin, High active. **VBAT** is battery voltage, maximum of 4.2&nbsp;V.

:::  

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK14001 module and its recommended operating conditions.

##### Recommended Operating Conditions

| Symbol | Description                  | Min. | Nom. | Max. | Unit |
| ------ | ---------------------------- | ---- | ---- | ---- | ---- |
| VBAT   | Battery power supply         | 2.7  | -    | 4.2  | V    |
| Icc    | Operating Current@Iout = 0mA |      | 350  |      | uA   |
| Istb   | Stand by Current             |      | 0.8  | 1.0  | uA   |

#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimensions of the RAK14001 module is shown in **Figure 3** below.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/mechanical-dimensions.png"
  width="80%"
  caption="RAK14001 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK14001 module.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/rak14001-schematic.png"
  width="100%"
  caption="RAK14001 WisBlock Module Schematics"
/>

<!-- ##### 40-pin WisConnector

**Figure 6** shows the WisConnector connection. **EN** is connected to power chip enable pin, High active. **VBAT** is battery voltage, maximum of 4.2&nbsp;V.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/rak14001-wisio.png"
  width="30%"
  caption="RAK14001 WisConnector"
/> -->

##### Power Supply

**Figure 6** shows the RAK14001 RGB LED driver chip power supply.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/led-psu.png"
  width="90%"
  caption="RAK14001 WisBlock RGB LED Driver Power Supply"
/>

##### LED Driver

**Figure 7** shows the RGB LED driver schematic, **R8** provides the reference current for LED 1 to LED 3 pins.

<rk-img
  src="/assets/images/wisblock/rak14001/datasheet/led-driver.png"
  width="100%"
  caption="RAK14001 WisBlock RGB LED Driver Schematic"
/>