---
rak_desc: Covers the comprehensive information of your RAK12031 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12031/overview/RAK12031_home.png
tags:
  - datasheet
  - wisblock
  - RAK12031
prev: ../Quickstart/
next: false
---

# RAK12031 WisBlock T-Beam-Fork Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12031/datasheet/rak12031.png"
  width="30%"
  caption="RAK12031 WisBlock T-Beam-Fork Sensor Module"
/>

### Description

RAK12031 is a WisBlock T-Beam-Fork (TBF) sensor module that is based on EE-SX1041 from Omron. It can detect the presence of small moving objects, measure the speed of rotation, linear motion, and more. RAK12031 is a separate TBF sensor and have two (2) connectors, which can be connected to the [RAK12028 TBF Connector module](/Product-Categories/WisBlock/RAK12028/Overview/) or by using a [RAK19005 WisBlock Sensor Extension Cable](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19005/Overview/) to connect it to the WisBlock Base.


### Features

- Operating Voltage: 3.3&nbsp;V
- Chipset: Omron EE-SX1041
- T-Fork module
- Detect presence of small moving objects
- Method for measurement velocity with grating
- Slot width: 5&nbsp;mm
- Slot depth: 8.2&nbsp;mm
- Module size: 15 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK12031 has four (4) mounting holes, so you can fix the module in the position you want. It can also be connected to [RAK12028](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12028/Overview/#product-description) or you can use a [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to connect it directly to the WisBlock Base.

### Hardware

The hardware specification is categorized into four (4) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. Also, it shows the electrical and mechanical characteristics of the RAK12031 WisBlock T-Beam-Fork Sensor Module.

####  Chipset

| Vendor | Part number |
| ------ | ----------- |
| Omron  | EE-SX1041   |


#### Pin Definition

The RAK12031 module has two (2) connectors, one standard 24-pin WisBlock Sensor connector and the other one is the 6-pin connector that can be connected to the RAK12028. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak12031/datasheet/rak12031-pinouts.svg"
  width="70%"
  caption="RAK12031 pinout"
/>

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT C | SLOT D | SLOT E | SLOT F |
| :----: | :----: | :----: | :----: | :----: |
| WB_IO1 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |

::: tip 📝 NOTE
- Only **3V3_S**, **GND**, and **OUTPUT** signal from EE-SX1041 are connected to the two (2) connectors of the module.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12031 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12031 module.
:::  

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol           | Description                   | Min. | Nom. | Max. | Unit |
| ---------------- | ----------------------------- | ---- | ---- | ---- | ---- |
| 3v3_S            | Power supply for the module   |   2  | 3.3  | 5    | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the mechanical dimensions of the RAK12031 Module.

<rk-img
  src="/assets/images/wisblock/rak12031/datasheet/mechanical-dimensions.png"
  width="70%"
  caption="RAK12031 mechanical dimensions"
/>

#### Schematic Diagram

This section shows the schematics of the RAK12031 module.

##### Connectors

<rk-img
  src="/assets/images/wisblock/rak12031/datasheet/rak12031-connectors.png"
  width="70%"
  caption="Connectors of the RAK12031"
/>

##### EE-SX1041

- **R1** is the current-limiting resistance at the Transmitter (Tx). The value of **R1** is 68&nbsp;Ω.
- **R2** is the current-limiting resistance at the Receiver (Rx). The value or **R2** is 1&nbsp;kΩ.

<rk-img
  src="/assets/images/wisblock/rak12031/datasheet/ee-sx1041.png"
  width="50%"
  caption="EE-SX1041"
/>