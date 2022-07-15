---
rak_desc: Provides comprehensive information about your RAK13300 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13300/overview/RAK13300_home.png
tags:
  - datasheet
  - wisblock
  - RAK13300
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13300/Certification/RAK13300_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13300/Certification/RAK13300_FCC_Certification.zip]
  - [ISED, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13300/Certification/RAK13300_ISED_Certification.pdf] 
  - [UKCA, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13300/Certification/RAK13300_UKCA_Certification.pdf]
---

# RAK13300 WisBlock LPWAN Wireless Module Datasheet

## Overview

### Description

The RAK13300 is a LoRa module based on the SX1262 LoRa chip. It provides an easy-to-use, small-size, and low-power solution for long-range wireless data applications.

The module complies with LoRaWAN standards and supports LoRa point-to-point communication. It can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Actility, etc.


### Features

- Based on SX1262 LoRa chip
- LoRaWAN Specification compatible
- Supports the following bands: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Ultra-Low Power Consumption
- Supply Voltage: 2.0&nbsp;V ~ 3.6&nbsp;V
- Temperature Range: -40°&nbsp;C ~ 85°&nbsp;C
- Module Size: 25&nbsp;mm x 35&nbsp;mm

## Specifications

### Overview 

#### Mounting

The RAK13300 WisBlock LPWAN can be mounted to the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK13300 on a WisBlock Base board, such as the [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board).

<rk-img
  src="/assets/images/wisblock/rak13300/datasheet/mounting.png"
  width="60%"
  caption="RAK13300 WisBlock LPWAN Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the pinouts and their corresponding functions and diagrams. It also covers the rf, electrical, and mechanical parameters, which include the tabular data of the functionalities and standard ratings of the RAK13300 WisBlock LPWAN Wireless Module.


#### Pin Definition

The RAK13300 WisBlock LPWAN comprises a standard WisIO connector. The WisIO connector allows the RAK13300 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**.

::: tip 📝 NOTE
- **SPI** related pin, **NRESET**, **ANT_SW**，**DIO1**，**3V3** and **GND** are connected to WisIO connector.
:::

 <rk-img
  src="/assets/images/wisblock/rak13300/datasheet/RAK13300_Pinouts.svg"
  width="80%"
  caption="RAK13300 WisBlock LPWAN Pinout"
/>


#### RF Characteristics
##### Operating Frequencies

The table below shows the supported LoRaWAN Bands of the RAK13300 module:

| Module      | Region    | Frequency (MHz) |
| ----------- | --------- | --------------- |
| RAK13300(L) | Europe    | EU433           |
|             | China     | CN470           |
| RAK13300    | Europe    | EU868           |
|             | America   | US915           |
|             | Australia | AU915           |
|             | Korea     | KR920           |
|             | Asia      | AS923           |
|             | India     | IN865           |
|             | Russia    | RU864           |

#### Electrical Characteristics

##### Absolute Maximum Ratings

| **Symbol** | **Description**                      | **Min.** | **Nom.** | **Max.** | **Unit** | **Note** |
| ---------- | ------------------------------------ | -------- | -------- | -------- | -------- | -------- |
| 3V3_S      | LoRa chip and IO pins supply voltage | -0.5     | 3.3      | 3.9      | V        | Connected internally to VBAT_SX and VBAT_SX_IO |
| ESD HBM    | Human body model                     | -        | -        | 2000     | V        |          |
| ESD  CDM   | Charged device model                 | -        | -        | 500      | V        |          |

##### Recommended Operating Conditions

| **Symbol** | **Description**                       | **Min.** | **Nom.** | **Max.** | **Unit** | **Note** |
| ---------- | ------------------------------------- | -------- | -------- | -------- | -------- | -------- |
| 3V3_S      | LoRa chip and IO pins supply voltage  | 2.0      | 3.3      | 3.7      | V        |Connected internally to VBAT_SX and VBAT_SX_IO |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK13300 module.

 <rk-img
  src="/assets/images/wisblock/rak13300/datasheet/mechanical-drawing.png"
  width="70%"
  caption="RAK13300 WisBlock LPWAN Dimensions"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13300/datasheet/pcb-layout.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>


#### Schematic Diagram

##### Connector

<rk-img
  src="/assets/images/wisblock/rak13300/datasheet/pinout.png"
  width="60%"
  caption="RAK13300 Module WisConnector"
/>


##### Oscillator

<rk-img
  src="/assets/images/wisblock/rak13300/datasheet/oscillator.png"
  width="60%"
  caption="RAK13300 Oscillator"
/>

##### SX1262

<rk-img
  src="/assets/images/wisblock/rak13300/datasheet/sx162.png"
  width="100%"
  caption="RAK13300 Module WisConnector"
/>

::: tip 📝 NOTE
- Uses DC-DC Converter as default. 
- **J1** is an IPEX Connector for LoRa antenna.
:::


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />