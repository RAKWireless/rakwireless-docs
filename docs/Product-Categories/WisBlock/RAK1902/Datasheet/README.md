---
rak_desc: Provides comprehensive information about your RAK1902 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak1902/RAK1902.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK1902
---

# RAK1902 WisBlock Barometer Pressure Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/rak1902.png"
  width="50%"
  caption="RAK1902 WisBlock Sensor"
/>

### Description

The RAK1902 WisBlock Barometer Pressure Sensor Module, part of the RAK Wireless WisBlock series, is an ultra-compact piezo-resistive pressure sensor that functions as a digital barometer with an I2C interface. The sensing element, which detects absolute pressure, consists of a suspended membrane manufactured through a delicate process developed by ST®. The pressure measurement covers the range from 260&nbsp;hPa to 1260&nbsp;hPa and the temperature measurement covers the range from -40&nbsp;°C to 85&nbsp;°C. Measurements accuracy is ±0.1&nbsp;hPa for pressure and ±1.5&nbsp;°C for temperature.

### Features
* **Pressure range**: 260-1260&nbsp;hPa
* **Pressure sensor accuracy**: ±0.1&nbsp;hPa
* **Temperature range**: -40&nbsp;°C to +85&nbsp;°C
* **Temperature sensor accuracy**: ±1.5&nbsp;°C
* **Voltage Suppply**: 3.3&nbsp;V
* **Current Consumption**: 1&nbsp;uA to 12&nbsp;uA
* **Chipset**: ST LPS22HB
* **Module Size**: 10 x 10&nbsp;mm

## Specifications
### Overview


#### Mounting

**Figure 2** shows the mounting mechanism of the RAK1902 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK1902 module can be mounted on the slots: **A, B, C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/rak19xx-mounting.png"
  width="50%"
  caption="RAK1902 WisBlock Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into four parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK1902 WisBlock Barometer Pressure Sensor.

####  Chipset
| Vendor | Part number |
| ------ | ----------- |
| ST     | LPS22HB     |

#### Pin Definition

The RAK1902 WisBlock Barometer Pressure Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK1902 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/rak1902-pinout.png"
  width="50%"
  caption="RAK1902 WisBlock Sensor connector pinout"
/>

:::tip 📝 NOTE:
Only the **I2C** related pins, **VDD**, and **GND** are connected to this module.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT B  | SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ | ------ | ------ |
| WB_IO1 | WB_IO2 | WB_IO3 | WB_IO5 | WB_IO4 | WB_IO6 |

#### Sensors
##### Pressure Sensor
| Symbol             | Parameter                          | Test Condition                                                                                           | Min. |          Typ.           | Max. |      Unit      |
| ------------------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------- | :--: | :---------------------: | :--: | :------------: |
| P<sub>Top</sub>    | Operating Temperature Range        |                                                                                                          | -40  |                         | +85  |       °C       |
| PT<sub>full</sub>  | Full Accuracy Temperature Range    |                                                                                                          |  0   |                         | +65  |       °C       |
| P<sub>op</sub>     | Operating Pressure Range           |                                                                                                          | 260  |                         | 1260 |      hPa       |
| P<sub>bits</sub>   | Pressure Output Data               |                                                                                                          |      |           24            |      |      bits      |
| P<sub>sens</sub>   | Pressure Sensitivity               |                                                                                                          |      |          4096           |      |    LSB/hPa     |
| P<sub>AccRel</sub> | Relative Accuracy over Pressure    | P = 800 – 1100&nbsp;hPa <br /> T = 25&nbsp;°C                                                            |      |          ±0.1           |      |      hPa       |
| P<sub>AccT</sub>   | Absolute Accuracy over Temperature | P<sub>op</sub> = 0 to 65&nbsp;°C <br /> after OPC  <br /> P<sub>op</sub> = 0 to 65&nbsp;°C <br /> no OPC |      | ±0.1 <br />  <br />  ±1 |      |      hPa       |
| P<sub>noise</sub>  | RMS Pressure Sensing Noise         | with embedded filtering                                                                                  |      |         0.0075          |      | hPa <br /> RMS |
| ODR<sub>Pres</sub> | Pressure Output Data Rate          |                                                                                                          |      |      1/10/25/50/75      |      |       Hz       |

##### Temperature Sensor
| Symbol           | Parameter                     | Test Condition      | Min. |                   Typ.                    | Max. |  Unit  |
| ---------------- | ----------------------------- | ------------------- | :--: | :---------------------------------------: | :--: | :----: |
| T<sub>op</sub>   | Operating Temperature Range   |                     | -40  |                                           | +85  |   °C   |
| T<sub>sens</sub> | Temperature Sensitivity       |                     |      |                    100                    |      | LSB/°C |
| T<sub>acc</sub>  | Temperature Absolute Accuracy | T = 0 to 65&nbsp;°C |      |                   ±1.5                    |      |   °C   |
| ODR<sub>T</sub>  | Output Temperature Data Rate  |                     |      | 1 <br /> 10 <br /> 25 <br /> 50 <br /> 75 |      |   Hz   |

#### Electrical Characteristics
##### Recommended Operating Conditions

| Symbol           | Description                   | Min.  | Nom.  | Max.  | Unit  |
| ---------------- | ----------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>   | Power supply for the module   |  1.7  |  3.3  |  3.6  |   V   |
| I<sub>shut</sub> | shutdown current              |   -   |   1   |   -   |  uA   |
| I<sub>DD</sub>   | @ ODR 1&nbsp;Hz LC_EN bit = 0 |   -   |  12   |   -   |  uA   |
| I<sub>DD</sub>   | @ ODR 1&nbsp;Hz LC_EN bit = 1 |   -   |   3   |   -   |  uA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK1902 module.

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/rak19xx-mechanic-drawing.png"
  width="60%"
  caption="RAK1902 WisBlock Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
**Figure 5** shows the schematic of the RAK1902 module.

<rk-img
  src="/assets/images/wisblock/rak1902/datasheet/rak1902-schematics.png"
  width="80%"
  caption="RAK1902 WisBlock Sensor schematics"
/>

