---
rak_desc: Provides comprehensive information about your RAK12010 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12010/overview/RAK12010_home.png
tags:
  - datasheet
  - wisblock
  - RAK12010
prev: ../Quickstart/
next: false
---

# RAK12010 WisBlock Ambient Light Sensor Module Datasheet

## Overview

### Description

RAK12010 is a WisBlock Sensor that extends the WisBlock system to have ambient light sensing capability. It uses the VEML7700 chip from Vishay Semiconductors with an I2C interface making it easy to build an ambient light data acquisition system.

### Features

- Ambient Light Sensor (ALS) module
- Digital 16-bit resolution sensor
- **Ambient Light Range:** 0&nbsp;lx to about 120,000&nbsp;lx 
- **Ambient Light Resolution:** 0.0036&nbsp;lx
- Excellent temperature compensation
- 3.3&nbsp;V Power Supply
- Current Consumption: < 2 - 45&nbsp;uA
- Chipset: Vishay Semiconductors VEML7700
- **Module size:** 10 X 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12010 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12010 module can be mounted on the slots: **A, B, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK12010 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12010 WisBlock Ambient Light Sensor Module.

#### Chipset
| Vendor                | Part number |
| --------------------- | ----------- |
| Vishay Semiconductors | VEML7700    |

#### Pin Definition

The RAK12010 WisBlock Ambient Light Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12010 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/rak12010_pinout.svg"
  width="60%"
  caption="RAK12010 Pinout Diagram"
/>

::: tip 📝 NOTE
- Only **I2C** related pins, **3V3_S**, and **GND** are connected to the WisConnector.

- **3V3_S** voltage output from the WisBlock Base that powers the RAK12010 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12010 module.
::: 

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK12010 module and its recommended operating conditions. Refer to the table presented below.

##### Absolute Maximum Ratings

| Parameter               | Minimum | Maximum | Unit |
| ----------------------- | ------- | ------- | ---- |
| VBAT                    | -0.3    | +4.20   | V    |
| 3V3_S                   | 0       | 3.6     | V    |
| Total power dissipation | 0       | 50      | mW   |

##### Power Supply Ratings

| Symbol | Description                 | Condition                                               | Min. | Nom. | Max. | Unit |
| ------ | --------------------------- | ------------------------------------------------------- | ---- | ---- | ---- | ---- |
| VBAT   | Supply Voltage              | Input voltage must within this range                    | 3.3  | 4.0  | 4.2  | V    |
| 3V3_S  | VEML7700 Operating  Voltage | Input voltage must within this range                    | 2.5  | 3.3  | 3.6  | V    |
| Isd    | Shut down current           | VDD is 3.3&nbsp;V                                       | -    | 0.5  | -    | uA   |
| IDD1   | Operation mode current      | VDD is 3.3&nbsp;V, PSM = 11, refresh time 4100&nbsp;ms  | -    | 2    | -    | uA   |
| IDD2   | Operation mode current      | VDD is 3.3&nbsp;V, PSM = 00, refresh time 600&nbsp;ms   | -    | 8    | -    | uA   |
| IDD3   | Operation mode current      | VDD is 3.3&nbsp;V, PSM_EN = 0, refresh time 100&nbsp;ms | -    | 45   | -    | uA   |

#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimensions of the RAK12010 module is shown in **Figure 3** below.

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/mechanical-dimensions.png"
  width="60%"
  caption="RAK12010 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK12010 module.

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/rak12010-schematic.png"
  width="80%"
  caption="RAK12010 WisBlock Module Schematics"
/>

##### PCB Silkscreen

**Figure 6** shows the PCB Silkscreen of the RAK12010 module.

<rk-img
  src="/assets/images/wisblock/rak12010/datasheet/pcb-silkscreen.png"
  width="20%"
  caption="RAK12010 PCB Silkscreen"
/>
