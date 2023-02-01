---
rak_desc: Provides comprehensive information about your RAK5814 WisBlock Crypto Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak5814/overview/RAK5814.png
tags:
  - datasheet
  - wisblock
  - RAK5814
prev: ../Quickstart/
next: false
---

# RAK5814 WisBlock Crypto Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak5814/datasheet/rak5814-front-back.png"
  width="60%"
  caption="RAK5814 WisBlock Crypto Module"
/>

### Description

**RAK5814** is a secure element cryptography chip based on Microchip ATECC608A. It was designed to provide hardware-based key storage as well as encryption/decryption to various electronic products and devices. It is very low power and interfaced via I2C.

### Features

* **Module Specifications**
    - Protected storage for up to 16 Keys, Certificates, or Data
    - Hardware support for Asymmetric Sign, Verify, and Key Agreement
    - Hardware support for Symmetric Algorithms
    - 3.3&nbsp;V Power Supply
    - I2C Interface (Max Speed: 100&nbsp;kHz)
    - Sleep Current less than 150&nbsp;nA

* **Module Size**
    * 10 x 10&nbsp;mm

## Specifications

### Mounting

#### Mounting to WisBlock Base

The RAK5814 crypto module can be mounted to the sensor slots A, B, C, and D of the WisBlock Base Board. **Figure 2** shows the mounting mechanism of the RAK5814 on a WisBlock base board module, such as the **RAK5005-O**.

<rk-img
  src="/assets/images/wisblock/rak5814/datasheet/RAK5814_mount_to_wisbase.png"
  width="50%"
  caption="RAK5814 WisBlock Crypto Module Mounting"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK5814 WisBlock Crypto Module.

#### Chipset

| Vendor    | Part Number                                                                                                                                                                       |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Microchip | [ATECC608A](https://ww1.microchip.com/downloads/aemDocuments/documents/SCBU/ProductDocuments/DataSheets/ATECC608A-CryptoAuthentication-Device-Summary-Data-Sheet-DS40001977B.pdf) |



#### Pin Definition

The RAK5814 WisBlock crypto module comprises a standard WisSensor connector. The WisSensor connector allows the RAK5814 module to be mounted to a WisBlock base board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak5814/datasheet/RAK5814_pinout.png"
  width="60%"
  caption="RAK5814 WisBlock Crypto Module Pinout"
/>

#### Electrical Characteristics

This table shows the RAK5814 module electrical characteristics.

| Symbol | Description                 | Min. | Nom. | Max. | Unit |
| ------ | --------------------------- | ---- | ---- | ---- | ---- |
| VDD    | Power Supply Voltage        | -    | 3.3  | -    | V    |
| Isleep | Sleep Current               | -    | -    | 150  | nA   |
| Icc    | Active Power Supply Current | 2    | -    | 14   | mA   |
| Freq   | I2C Speed                   | -    | -    | 100  | kHz  |


#### Mechanical Characteristic

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK5814 module.

<rk-img
  src="/assets/images/wisblock/rak5814/datasheet/RAK5814_mechanic_drawing.png"
  width="60%"
  caption="RAK5814 WisBlock Crypto Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5814/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the RAK5814 crypto module schematic. U1 (SOIC-8) and U2 (DFN8-2x3&nbsp;mm) is reserved for different footprint crypto chip.

 <rk-img
  src="/assets/images/wisblock/rak5814/datasheet/RAK5814_schematic.png"
  width="100%"
  caption="RAK5814 WisBlock Crypto Module Schematic"
/>
