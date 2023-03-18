---
rak_desc: Covers the comprehensive information of your RAK12028 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12028/RAK12028.png
tags:
  - datasheet
  - wisblock
  - RAK12028
prev: ../Quickstart/
next: false
---

# RAK12028 WisBlock T-Beam-Fork Connector Module Datasheet

## Overview

### Description

RAK12028 is a Through-Beam-Fork (TBF) connector module. It has one (1) standard WisBlock sensor connector, which you can connect with the WisBlock Base. It also has one (1) 6-pins connector dedicated to the RAK12031. The [RAK12031](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12031/Overview/) is a separate Through-Beam-Fork sensor that can be connected to the RAK12028 connector module using a cable.


### Features

- A separate sensor PCB module [RAK12031](/Product-Categories/WisBlock/RAK12031/Overview/) is required.
- Module size: 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12028 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12028 module can be mounted on the slots: **A, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12028/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK12028 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into three (3) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. Also, it shows the mechanical characteristics of the RAK12028 WisBlock TBF Connector Module.


#### Pin Definition

The RAK12028 WisBlock TBF Connector Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12028 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak12028/datasheet/RAK12028_Pinout.svg"
  width="70%"
  caption="RAK12028 pinout diagram"
/>

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT C | SLOT D | SLOT E | SLOT F |
| :----: | :----: | :----: | :----: | :----: |
| WB_IO1 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |

::: tip 📝 NOTE
- Only **I2C** related pin, **3V3_S**, **GND**, and two (2) **GPIO** are connected to the WisConnector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12028 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12028 module.
:::

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the mechanical dimensions of the RAK12028 Module.

<rk-img
  src="/assets/images/wisblock/rak12028/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK12028 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12028/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK12028 module.

<rk-img
  src="/assets/images/wisblock/rak12028/datasheet/rak12028-schematic.png"
  width="70%"
  caption="RAK12028 WisBlock module schematics"
/>