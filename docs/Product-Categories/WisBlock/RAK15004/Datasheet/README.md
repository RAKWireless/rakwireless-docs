---
rak_desc: Provides comprehensive information about your RAK15004 WisBlock FRAM Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15004/overview/RAK15004.png
tags:
  - datasheet
  - wisblock
  - RAK15004
  - MB85RC512T
  - FUJITSU
prev: ../Overview/
next: false
---

# RAK15004 WisBlock FRAM Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/rak15004-front-back.png"
  width="60%"
  caption="RAK15004 WisBlock FRAM Module"
/>

### Description

RAK15004 is a WisBlock FRAM Storage Module based on MB85RC512T 512&nbsp;kbit (64k x 8) from FUJITSU. It is a very high endurance nonvolatile memory storage chip that provides a write/read count of 10,000,000,000,000 per byte. It can be interfaced via I2C and support High-Speed Mode at 3.4&nbsp;MHz.

### Features

* **Sensor specifications**
    * Chipset: **FUJITSU MB85RC512T**
    * Voltage supply: **3.3&nbsp;V**
    * Operating current: **15&nbsp;μA ~ 0.71&nbsp;mA**
    * 65536&nbsp;words × 8&nbsp;bits
    * High Reliability:
        * Read/write endurance: **10,000,000,000,000 / byte**
        * Data retention: **10&nbsp;years (+ 85°&nbsp;C) & 95 years (+ 55°&nbsp;C)**
    * I2C digital interface and supports High Speed Mode at **3.4&nbsp;Mhz**
    * Operating temperature: **-40°&nbsp;C ~ 85°&nbsp;C**

* **Module size**
    * 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK15004 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK15004 module can be mounted on slots: **A, C, D, E, and F**.

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/rak15004-mount.png"
  width="50%"
  caption="RAK15004 WisBlock FRAM module mounting"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts, and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK15004 WisBlock FRAM Module.

#### Chipset

| Vendor  | Part Number                                                                       |
| ------- | --------------------------------------------------------------------------------- |
| FUJITSU | [MB85RC512T](https://www.fujitsu.com/us/Images/MB85RC512T-DS501-00028-0v01-E.pdf) |

**Figure 2** shows MB85RC512T the device addressing, which A1 and A2 were pulled up to high level. The device address is 1010110 (0x56).

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/dev-address.png"
  width="70%"
  caption="MB85RC512T device addressing"
/>

#### Pin Definition

The RAK15004 WisBlock FRAM Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK15004 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/rak15004-pinout.png"
  width="35%"
  caption="RAK15004 pinout diagram"
/>

:::tip 📝 NOTE:
- Only **I2C** related pin, **3V3_S**, and **GND** are connected to WisBlock connector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK15004 module can be controlled by the WisBlock Core via `WB_IO2 (WisBlock IO2 pin)`. This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK15004 module.
:::

#### Electrical Characteristics

| Symbol          | Description                   | Min.  | Nom.  | Max.  | Unit  |
| --------------- | ----------------------------- | :---: | :---: | :---: | :---: |
| VDD             | Power Supply Voltage          |   -   |  3.3  |   -   |   V   |
| I<sub>stb</sub> | Standby Current               |   -   |   -   |  15   |  uA   |
| I<sub>cc</sub>  | Supply Current (Read & Write) |   -   |   -   |  710  |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK15004 module.

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/rak15004-dim.png"
  width="50%"
  caption="RAK15004 mechanical dimensions"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK15004 FRAM module. The default I2C address of the FRAM module is **0x56**.

<rk-img
  src="/assets/images/wisblock/rak15004/datasheet/rak15004-schem.png"
  width="100%"
  caption="RAK15004 schematic diagram"
/>



