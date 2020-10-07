---
tags:
  - datasheet
  - wisblock
prev: ../Overview/
---

# RAK1901 WisBlock Temperature and Humidity Sensor Datasheet

## Overview

### Description

The RAK1901 WisBlock Sensor module, part of the RAK Wireless Wisblock series, is a digital temperature and humidity sensor with I2C interface. Designed to work at low power mode, the average consumption is lower than 0.5 uA. The humidity measurement covers the range from 0 to 100 % RH and the temperature measurement covers the range from -40 °C to 125 °C. Measurements accuracy is ±2 %RH for humidity and ±0.2°C for temperature.

### Features

- **Temperature sensor accuracy**: ±2.0 °C
- **Temperature range**: -40 to +125 °C
- **Humidity sensor accuracy**:±2.0 % RH
- **Humidity range**:0 to 100%
- **Module size**: 10 x 10 mm

## Specifications

### Overview

<!-- Insert Picture of Sensor with it's dimensions -->

#### Mounting
The RAK1901 module can be mounted on the slots: A, B, C or D of the WisBase board. Figure 1 shows the mounting mechanism of the RAK1901 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak1901/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK1901 WisBlock Sensor Mounting"
/>

### Hardware

#### Chipset

| Vendor    | Part number |
| --------- | ----------- |
| Sensirion | SHTC3       |

#### Pin Definition

The RAK1901 WisBlock Sensor module comprises a standard WisIO connector. The WisIO connector allows the RAK1901 module to be mounted on a WisBlock baseboard, such as the RAK5005-O. The pin order of the connector and the pinout definition is shown in Figure 2. Note, only the I2C related pins, VDD and GND are connected to this module.

<rk-img
  src="/assets/images/wisblock/rak1901/datasheet/RAK1901_pin.png"
  width="60%"
  caption="RAK1901 WisBlock Sensor Pinout Diagram"
/>

#### Sensors

##### Temperature Sensor

| Parameter          | Conditions |    Value    | Units |
| ------------------ | :--------: | :---------: | :---: |
| Accuracy Tolerance |    Typ.    |    ±0.2     |  °C   |
| Repeatability      |     -      |     0.1     |  °C   |
| Resolution         |     -      |    0.01     |  °C   |
| Specified Range    |     -      | -40 to +125 |  °C   |
| Response Time      |   τ 63%    |  <5 to 30   |   s   |
| Long-term Drift    |    Typ.    |    <0.2     | °C/y  |

###### Humidity Sensor

| Parameter          | Conditions |  Value   | Units |
| ------------------ | :--------: | :------: | :---: |
| Accuracy Tolerance |    Typ.    |   ±2.0   |  %RH  |
| Repeatability      |     -      |   0.1    |  %RH  |
| Resolution         |     -      |   0.01   |  %RH  |
| Hysteresis         |     -      |    ±1    |  %RH  |
| Specified Range    |  extended  | 0 to 100 |  %RH  |
| Response Time      |   τ 63%    |    8     |   s   |
| Long-term Drift    |    Typ.    |  <0.25   | %RH/y |

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol            | Description                      | Min | Nom. | Max | Unit |
| ----------------- | -------------------------------- | :-: | :--: | :-: | :--: |
| V<sub>DD</sub>    | Power supply for the module      | 1.6 | 3.3  | 3.6 |  V   |
| I<sub>sleep</sub> | Sleep current                    |  -  | 0.3  |  -  |  uA  |
| I<sub>DD</sub>    | Measure current (normal mode)    |  -  | 430  |     |  uA  |
| I<sub>DD</sub>    | Measure current (low power mode) |  -  | 270  |  -  |  uA  |

#### Mechanical Characteristics

Figure 3 shows the dimensions and the mechanic drawing of the RAK1901 module.

<rk-img
  src="/assets/images/wisblock/rak1901/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK1901 WisBlock Sensor Mechanic Drawing"
/>

#### Schematic Diagram

Figure 4 shows the schematic of the RAK1901 module.

<rk-img
  src="/assets/images/wisblock/rak1901/datasheet/RAK1901_schematics.png"
  width="90%"
  caption="RAK1901 WisBlock Sensor schematics"
/>
