---
tags:
  - datasheet
  - wisblock
prev: ../Overview/
next: false
---

# RAK12003 WisBlock Infrared Temperature Sensor Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/RAK12003.png"
  width="50%"
  caption="RAK12003 WisBlock Infrared Temperature Sensor "
/>
### Description

The RAK12003 WisBlock Infrared Temperature Sensor is part of the RAKwireless WisBlock Series. It can be used for an accurate contactless thermal measurement for applications such as General purpose industry, temperature control of moving and hard to reach parts, body temperature measurement, non-contact thermometer for mobile and IoT application.

### Features 

* **Sensor specifications**
  * I2C interface 
  * Object temperatures between -20&nbsp;°C and 100&nbsp;°C 
  * Accuracy ±0.2°&nbsp;C within the narrow object temperature range from 35&nbsp;˚C to 42&nbsp;˚C (medical applications)
  * Factory calibrated
  * 50&nbsp;° field of view
  * -20&nbsp;°C to 85&nbsp;°C operational temperature range
  * Refresh rate configurable between 0.5&nbsp;Hz to 64&nbsp;Hz
  * Sleep current: < 2.5&nbsp;µA 

* **Size**
    * 10 x 10&nbsp;mm

The refresh rate is the speed that the MLX9063 RAM will be updated with results. It is configurable and the rates are shown in the table below:


| Refresh Rate (Hz) | Time (ms) |
| :---------------: | :-------: |
|        0.5        |   2000    |
|         1         |   1000    |
|         2         |    500    |
|         4         |    250    |
|         8         |    125    |
|        16         |   62.5    |
|        32         |   31.25   |
|        64         |  15.625   |

## Specifications

### Overview


#### Mounting

The RAK12003 module can be mounted on slots A, B, C, or D of the WisBase board. Figure 2 shows the mounting mechanism of the RAK12003 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/RAK12003_mounting.png"
  width="50%"
  caption="RAK12003 WisBlock Infrared Temperature Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into five parts that cover the chipset and pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and their standard values in terms of electrical and mechanical.

#### Chipset

| Vendor  |      Part Number       |   **Accuracy**   |
| :-----: | :--------------------: | :--------------: |
| Melexis | MLX90632SLD-DCB-000-RE | Medical accuracy |

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/Melexis-MLX90632-FIR-Sensor.png"
  width="30%"
  caption="Melexis MLX90632 FIR sensor"
/>

#### Pin Definition

The RAK12003 WisBlock Infrared Temperature Sensor comprises a standard WisIO connector. The WisIO connector allows the RAK12003 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the Pinout Definition is shown in Figure 4. 

:::tip 📝 NOTE:
Only the I2C related pins, interrupt pins, VDD, and GND are connected to this module.
:::

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/rak12003_connector_pinout.png"
  width="50%"
  caption="RAK12003 WisBlock Infrared Temperature Sensor connector pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions


| Symbol           | Description                   | Min. | Nom. | Max. | Unit |
| ---------------- | ----------------------------- | ---- | ---- | ---- | ---- |
| V<sub>DD</sub>   | Power supply for the module   |      | 3.3  | 3.6  | V    |
| I<sub>DDPR</sub> | Sleep current                 |      | 1.5  | 2.5  | µA   |
| I<sub>DD</sub>   | Measure current (normal mode) | 0.5  | 1    | 1.4  | mA   |

<!--
| Symbol           | Description                      | Min.  | Nom.  | Max.  | Unit  |
| ---------------- | -------------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>   | Power supply for the module      |  1.6  |       |  3.6  |   V   |
| I<sub>shut</sub> | Shutdown current                 |   -   |  0.4  |   -   |  uA   |
| I<sub>DD</sub>   | Active V<sub>DD</sub>=3.6&nbsp;V |   -   |  3.7  |   -   |  uA   |

-->

#### Mechanical Characteristics

##### Board Dimensions

Figure 5 shows the dimensions and the mechanic drawing of the RAK12003 module.

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/RAK12003_mechanic_drawing.png"
  width="70%"
  caption="RAK12003 WisBlock Infrared Temperature Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12003/datasheet/RAK12003_schematic.png"
  width="70%"
  caption="RAK12003 WisBlock Infrared Temperature Sensor schematics"
/>

:::tip 📝 I2C address and pull-up
By default, the ADDR pin is connected to GND, and R1, R2, R3 are not connected. WisBase board has pull-up resistors and the I2C 7-bit slave address is 0x3a.
:::

