---
rak_desc: Provides comprehensive information about your RAK12500 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12500/overview/RAK12500_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK12500
---

# RAK12500 WisBlock GNSS Location Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12500/overview/RAK12500_illustrated.png"
  width="40%"
  caption="RAK12500 WisBlock GNSS Location Module"
/>

### Description

The RAK12500 WisBlock GNSS Location Module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module.

The RAK12500 uses the u-blox ZOE-M8Q module. It supports a wide variety of satellite data protocols such as GPS, GLONASS, QZSS, and BeiDou. This ensures the retrieval of precise location data. The module features exceptional performance, high sensitivity, and minimal acquisition time. A very suitable module for your low-power IoT solution needs.

### Features 

* **Module Specification**
    * Uses the very accurate GNSS Module: **u-blox ZOE-M8Q chip**
    * Location Accuracy of ±2.5 meter
    * Velocity Accuracy of ±0.05&nbsp;m/s
    * GPS, GLONASS, QZSS, and BeiDou Satellite support
    * Serial and I2C communication to WisBlock Core support
    * 10&nbsp;Hz Update Rate
    *	29 seconds Location Fix from Cold Start, 1 second from Hot Start
    * Operating Voltage: 3.3&nbsp;V
    * Operating Current: < 15&nbsp;µA
    * Chipset: u-blox ZOE-M8Q
  
* **Size**
    * Module Size: 10&nbsp;mm x 23&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK12500 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12500 module can be mounted on the slots: **SLOT A (UART / I2C Communication) or SLOT C (I2c Communication Only)**.

<rk-img
  src="/assets/images/wisblock/rak12500/datasheet/RAK12500-mounting.png"
  width="60%"
  caption="RAK12500 WisBlock GNSS Location Module Mounting"
/>  
  
### Hardware  
  
The hardware specification is categorized into five parts that cover the chipset and pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and their standard values in terms of electrical and mechanical.

#### Chipset

The RAK12500 utilizes a very accurate u-blox ZOE-M8Q chip. See the manufacturer's [u-blox ZOE-M8Q Page](https://www.u-blox.com/en/product/zoe-m8-series) for more details.  

| Vendor | Part number |
| :----: | :---------: |
| u-blox |   ZOE-M8Q   |


#### Pin Definition

The RAK12500 WisBlock GNSS Location Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12500 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak12500/datasheet/rak12500-sch1.png"
  width="60%"
  caption="RAK12500 WisBlock GNSS Location Module Pinout"
/>  

:::tip 📝 NOTE:
Only the UART and I2C related pin, 1PPS pin, RESET pin, VDD, and GND are connected to this module
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A     | SLOT C   |
| ---------- | -------- |
| UART / I2C | I2C Only |

#### Electrical Characteristics  
  
##### Recommended Operating Conditions    
  
The table below shows the recommended operating conditions for the RAK12500 WisBlock GNSS Location Module:  
  
| **Symbol**       | **Description**             | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------------- | --------------------------- | -------- | -------- | -------- | -------- |
| V<sub>DD</sub>   | Power supply for the module | 2.7      | 3.3      | 3.6      | V        |
| I<sub>BACK</sub> | Backup battery current      | -        | 15       | -        | µA       |

  
#### Mechanical Characteristics  
  
##### Board Dimensions  
  
Figure 4 shows the dimensions and mechanical drawing of the RAK12500 module.  
  
<rk-img
  src="/assets/images/wisblock/rak12500/datasheet/board-dimensions.png"
  width="60%"
  caption="RAK12500 WisBlock GNSS Location Module Mechanical Characteristics"
/>  

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12500/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

  
<rk-img
  src="/assets/images/wisblock/rak12500/datasheet/schematic.png"
  width="100%"
  caption="RAK12500 Schematic"
/>

