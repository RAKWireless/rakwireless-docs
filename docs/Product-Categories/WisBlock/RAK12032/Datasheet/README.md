---
rak_desc: Provides comprehensive information about your RAK12032 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12032/RAK12032.png
tags:
  - datasheet
  - wisblock
  - RAK12032
prev: ../Quickstart/
next: false
---

# RAK12032 WisBlock 3-Axis Accelerometer Sensor Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/RAK12032_front_back.png"
  width="60%"
  caption="RAK12032 WisBlock 3-Axis Sensor"
/>

### Description

RAK12032 is a WisBlock 3-axis Accelerometer Sensor Module that extends the WisBlock system with an ADXL313 3-axis accelerometer from Analog Devices. It comes with a ready-to-use software library and tutorial, making it easily to build a motion-sensing data acquisition system. The motion-sensing data is interfaced via I2C. Additionally, RAK12032 can be mounted to the sensor slot of the WisBlock Base board.

### Product Features

* **Sensor specifications**
    *  Based on ADXL313
    *  Measurement range：+/-0.5g, +/-1g, +/-2g, +/-4g
    *  High resolution (up to 13-bit)
    *  Ultra-low power (scales automatically with data rate), as low as 30&nbsp;uA in measurement mode
    *  Low noise performance: 150&nbsp;ug/Hz typical for X-Y axes
    *  Built-in motion detection functions for activity/inactivity monitoring
    *  I2C digital interfaces
    *  3.3&nbsp;V power supply
    *  Operating temperature range: -40&nbsp;°C to +85&nbsp;°C

* **Size**
    * 10 x 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK12032 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12032 module can be mounted on the slots: **C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK12032 WisBlock 3-Axis Sensor Mounting"
/>

:::tip 📝 NOTE:
When the RAK12032 is used with other sensor modules powered by **3V3_S** together, it can not be mounted on slot **A** and slot **B**.
:::

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12032 WisBlock 3-Axis Sensor.

#### Chipset

| Vendor         | Part Number |
| -------------- | ----------- |
| Analog Devices | ADXL313     |

#### Pin Definition

The RAK12032 WisBlock 3-Axis Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12032 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/RAK12032_pinout.png"
  width="40%"
  caption="RAK12032 WisBlock 3-Axis Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:

The following are connected to WisBlock connector:
  - **I2C**-related pins
  - **INT1**
  - **INT2**
  - **VDD**
  - **GND**

:::

**INT2** pin at **Pin 10** and **INT1** pin at **Pin 12**  will depend on where sensor slot the module is plugged in. The table shows the compatible pins used by different sensor slots:

**INT2 (Interrupt 2 Output Pin)**

| Slot C | Slot D | Slot E | Slot F |
| ------ | ------ | ------ | ------ |
| IO4    | IO6    | IO3    | IO5    |

**INT1 (Interrupt 1 Output Pin)**

| Slot C | Slot D | Slot E | Slot F |
| ------ | ------ | ------ | ------ |
| IO3    | IO5    | IO4    | IO6    |

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                | Min. | Nom.   | Max. | Unit |
| ------ | -------------------------- | ---- | ------ | ---- | ---- |
| VCC    | Power supply voltage       | -    | 3.3    | -    | V    |
| IDD    | Measure current            | 30   | -      | 300  | uA   |
| IDDS   | Standby current            | -    | 76.2   | -    | nA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK12032 module.

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK12032 WisBlock 3-Axis Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
**Figure 6** shows the schematic of the RAK12032 module.

<rk-img
  src="/assets/images/wisblock/rak12032/datasheet/rak12032-schematic.png"
  width="100%"
  caption="RAK12032 WisBlock 3-Axis Sensor schematics"
/>

