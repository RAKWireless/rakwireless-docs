---
rak_desc: Provides comprehensive information about your RAK13801 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13801/RAK13801.png
tags:
  - datasheet
  - wisblock
  - RAK13801
prev: ../Overview/
next: false
---

# RAK13801 WisBlock UWB Module Datasheet

## Overview


### Description

RAK13801 is a WisBlock IO that extends the WisBlock system based on Decawave's DW1000 module. This module uses a UWB (Ultra Wideband) Technology, a short-range wireless communication similar to Wi-Fi or Bluetooth and it uses a frequency bandwidth above 1&nbsp;GHz. It has an integrated antenna, all RF circuitry, power management, and clock circuitry in one module. It can be used in 2-way ranging or TDOA location systems to locate assets to a precision of 10&nbsp;cm and supports data rates of up to 6.8&nbsp;Mbps.

### Features

  * Power supply: **VBAT**
  * Chipset: **Decawave DW1000**
  * Operating temperature: **-40&nbsp;°C ~ 85&nbsp;°C**
  * Very precise location of tagged objects delivers enterprise efficiency gains and cost reductions
  * Extended communications range minimizes required infrastructure in RTLS
  * High multipath fading immunity
  * Supports very high tag densities in RTLS
  * Low cost allows cost-effective implementation of solutions
  * Low power consumption reduces the need to replace batteries and lowers system lifetime costs
  * **Module size**: 35 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK13801 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK13801 module can be mounted on the IO slots.

<rk-img
  src="/assets/images/wisblock/rak13801/datasheet/rak13801-mount.png"
  width="50%"
  caption="RAK13801 WisBlock Sensor mounting"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK13801 WisBlock UWB Module.


#### Chipset

| Vendor   | Part Number |
| -------- | ----------- |
| Decawave | DW1000      |

#### Pin Definition

The RAK13801 WisBlock UWB Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK13801 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak13801/datasheet/rak13801-pinout.jpg"
  width="60%"
  caption="RAK13801 WisBlock Module pinout diagram"
/>

:::tip 📝 NOTE:
- Only the **SPI** related pins, **IRQ**, **RSTn**, **WAKEUP**, **IO2**, **VBAT**, and **GND** are connected to this module.
:::

#### Electrical Characteristics
##### Recommended Operating Conditions

| Symbol | Description | Typical | Unit |
| ------ | ----------- | ------- | ---- |
| VBAT   | Battery     | 4.2     | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK13801 module.

<rk-img
  src="/assets/images/wisblock/rak13801/datasheet/rak13801-dim.png"
  width="80%"
  caption="RAK13801 WisBlock Sensor mechanical drawing"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13801/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>


#### Schematic Diagram

**Figure 5** shows the schematic diagram of the RAK13801 module.

<rk-img
  src="/assets/images/wisblock/rak13801/datasheet/rak13801-schem.jpg"
  width="100%"
  caption="RAK13801 WisBlock Module schematics"
/>

