---
rak_desc: Provides comprehensive information about your RAK12011 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12011/RAK12011.png
tags:
  - datasheet
  - wisblock
  - RAK12011
prev: ../Quickstart/
next: false
---

# RAK12011 WisBlock Barometer WT Sensor Module Datasheet

## Overview

### Description

The RAK12011 is a Barometric Pressure sensor module that is part of the RAKWireless WisBlock Sensor series. It uses an LPS33HW MEMS sensor from STMicroelectronics with both barometric pressure and temperature data obtainable via I2C interface. The pressure sensor has a water-resistant package and is combined with the three-proof paint in the RAK12011 PCB. This makes the module ideal on a barometric air pressure data acquisition system even in an environment prone to water exposure.

### Features

- Measures Barometric Pressure
- **Operating Pressure Range: 260-1260&nbsp;hPa**
- **Pressure Sensor Accuracy: ±0.1&nbsp;hPa**
- Measures Ambient Temperature
- **Operating Temperature Range:** -40&nbsp;°C to +85&nbsp;°C
- Embedded Temperature Compensation
- Low current consumption down to 3&nbsp;μA
- Via I2C interface
- Supply Voltage: 3.3&nbsp;V
- Current Consumption: 1-15&nbsp;uA
- Chipset: STMicroelectronics LPS33HW
- **Module size: 10** X 10&nbsp;mm

## Specifications

### Overview

#### Mounting

**Figure 1** shows the mounting mechanism of the RAK12011 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12011 module can be mounted on the slots: **A, C, D, E, & F**.

:::tip 📝 NOTE:
RAK12011 has one digital output line, so you need one GPIO from WisBlock Core. It means RAK12011 should be used on a sensor slot with one available GPIO. However, WB_IO2 is used to control 3V3_S. Hence, RAK12011 is used only on slots without WB_IO2 like sensor slots A, C to F on WisBlock Base board.
:::

<rk-img
  src="/assets/images/wisblock/rak12011/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK12011 Mounting Mechanism on a WisBlock Base Module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12011 WisBlock Barometer WT Sensor Module.

#### Chipset
| Vendor             | Part number |
| ------------------ | ----------- |
| STMicroelectronics | LPS33HW     |


#### Pin Definition

The RAK12011 WisBlock Fingerprint Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12011 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak12011/datasheet/rak12011_pinout.svg"
  width="60%"
  caption="RAK12011 Pinout Diagram"
/>

::: tip 📝 NOTE
- Only **I2C** related pins, **INT**, **3V3_S**, and **GND** are connected to the WisConnector on this module.

- **3V3_S** voltage output from the WisBlock Base that powers the RAK12011 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12011 module.

- RAK12011 can work in a wet environment, but the WisBlock Base board is not water-resistant. You can use an extension cable like the [RAK19005 FPC Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005?_pos=1&_sid=b3ef15d4e&_ss=r) to position your RAK12011 sensor apart from the WisBlock Base module.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

The table below shows the default IOs used for different slots using INT:

| SLOT A | SLOT C | SLOT D | SLOT E | SLOT F |
| -------| ------ | ------ | ------ | ------ |
| WB_IO1 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |


#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK12011 module and its recommended operating conditions. Refer to the table presented below.

##### Absolute Maximum Ratings

| Parameter | Minimum | Maximum | Unit |
| --------- | ------- | ------- | ---- |
| 3V3_S     | -0.3    | 4.8     | V    |
| P(air)    | -       | 2       | MPa  |
| TSTG      | -40     | 125     | °C   |
| ESD       | -       | 2 (HBM) | KV   |

##### Power Supply Ratings

| Symbol | Description    | Condition                                   | Min. | Nom. | Max. | Unit |
| ------ | -------------- | ------------------------------------------- | ---- | ---- | ---- | ---- |
| VDD    | Supply voltage | Normal work                                 | 1.7  | 3.3  | 3.6  | V    |
| IDD1   | Supply current | @ ODR 1&nbsp;Hz LC_EN bit = 0 at 1.8&nbsp;V | -    | 15   | -    | uA   |
| IDD2   | Supply current | @ ODR 1&nbsp;Hz LC_EN bit = 1               | -    | 3    | -    | uA   |
| IDD3   | Supply current | Power-Down Mode                             | -    | 1    | -    | uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the mechanical dimensions of the RAK12011 module.

<rk-img
  src="/assets/images/wisblock/rak12011/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK12011 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12011/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK12011 module.

<rk-img
  src="/assets/images/wisblock/rak12011/datasheet/rak12011-schematic.png"
  width="100%"
  caption="RAK12011 WisBlock Module Schematics"
/>
