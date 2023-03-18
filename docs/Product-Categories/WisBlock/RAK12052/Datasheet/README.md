---
rak_desc: Provides comprehensive information about your RAK12052 WisBlock Thermal IR Array Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12052/RAK12052.png
tags:
  - datasheet
  - wisblock
  - RAK12052
  - Melexis
  - MLX90640
prev: ../Quickstart/
next: false
---

# RAK12052 WisBlock Thermal IR Array Module Datasheet

## Overview
<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/rak12052-front-back.png"
  width="60%"
  caption="RAK12052 WisBlock Thermal IR Array Module"
/>

### Description

**RAK12052** is a 32&nbsp;x&nbsp;24 thermal IR array module based on MLX90640 from Melexis. MLX90640 is a fully-calibrated 32&nbsp;x&nbsp;24 pixels thermal IR array in an industry-standard 4-lead TO39 package with a digital interface. The MLX90640 contains 768&nbsp;FIR pixels. An ambient sensor is integrated to measure the ambient temperature of the chip, and a supply sensor to measure the VDD. The outputs of all sensors IR, Ta, and VDD are stored in internal RAM and accessible through I2C. It is comparable in having a thermal camera (or Predator's vision) but in compact but useable low resolution.

### Applications

- High precision non-contact temperature measurements
- Intrusion or Movement Detection
- Presence Detection or Person Localization
- Temperature sensing element for intelligent building air conditioning
- Thermal Comfort Sensor in automotive air conditioning control system
- Microwave oven
- Industrial temperature control of moving parts
- Visual IR thermometers

### Features

**Module Specifications**
- Easy to integrate
- Factory calibrated
- Noise Equivalent Temperature Difference (NETD) 0.1K&nbsp;RMS @ 1&nbsp;Hz refresh rate
- I2C compatible digital interface
- FOV options – 55°&nbsp;x&nbsp;35°
- Current consumption less than 23&nbsp;mA
- Power Supply：3.3&nbsp;V
- Operating Temperature: -40°&nbsp;C ~ 80°&nbsp;C

## Specifications

### Mounting

#### Mounting to WisBlock Base

The RAK12052 32&nbsp;x&nbsp;24 IR module can be mounted to the IO slot of the WisBlock base board. **Figure 2** shows the mounting mechanism of the RAK12052 on a WisBlock Base Board module.

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_mount_to_wisbase.png"
  width="50%"
  caption="RAK12052 WisBlock Thermal IR Array Module Mounting"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts, and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of RAK12052 WisBlock Thermal IR Array Module.

#### Chipset

| Vendor  | Part Number                                                                                  |
| ------- | -------------------------------------------------------------------------------------------- |
| Melexis | [MLX90640](https://www.melexis.com/en/documents/documentation/datasheets/datasheet-mlx90640) |

#### Pin Definition

The RAK12052 WisBlock 32&nbsp;x&nbsp;24 IR module comprises a standard WisBlock IO slot connector. The WisBlock IO slot connector allows the RAK12052 module to be mounted to a WisBlock Base Board module. The pin order of the connector and the pinout definition is shown in **Figure 3**.

::: tip 📝 NOTE
- **I2C** related pins, **3V3_S**, and **GND** are connected to WisBlock IO slot connector.
:::

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_pinout.png"
  width="60%"
  caption="RAK12052 WisBlock Thermal IR Array Module Pinout"
/>

#### Electrical Characteristics

This table shows the RAK12052 module electrical characteristics.

| **Symbol** | Description          | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | -------------------- | -------- | -------- | -------- | -------- |
| 3V3_S      | Power Supply Voltage | -        | 3.3      |          | V        |


#### Mechanical Characteristic

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK12052 module.

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_mechanic_drawing.png"
  width="70%"
  caption="RAK12052 WisBlock Thermal IR Array Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 6** shows schematic diagram of RAK12052 module.

The I2C address of RAK12052 is 0110011. R10 and R11 are not populated on the RAK12052 due to the pull-up resistors already on the WisBlock Base Board.

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_schematic.png"
  width="100%"
  caption="RAK12052 WisBlock Thermal IR Array Module Schematic"
/>

##### Pixel Position

The array consists of 768 IR sensors (also called pixels). Each pixel is identified with its row and column position as Pix (*i*, *j*), where ***i*** is the row number (from 1 to 24) and ***j*** is the column number (from 1 to 32).

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_pixel.png"
  width="50%"
  caption="Pixel in the whole FOV"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/datasheet/RAK12052_view.png"
  width="50%"
  caption="RAK12052 WisBlock 32x24 IR Module View"
/>
