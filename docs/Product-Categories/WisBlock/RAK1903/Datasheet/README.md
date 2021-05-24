---
tags:
  - datasheet
  - wisblock
  - RAK1903
prev: ../Quickstart/
next: false
---

# RAK1903 WisBlock Ambient Light Sensor Datasheet

## Overview

### Description
The RAK1903 WisBlock Sensor module, part of the RAK Wireless Wisblock series, is a single-chip ambient light sensor, measuring the intensity of  light in the visible range. The precise spectral response and strong IR rejection of the device enables the RAK1903 module to accurately measure the intensity of light as seen by human eyes regardless of light sources. The strong IR rejection also aids in maintaining high accuracy when the industrial design requires to mount the sensor under dark glass due to aesthetics reasons. The RAK1903 module is designed for systems that create light-based experiences for humans. It is an ideal replacement for photodiodes, photoresistors, or other ambient light sensors with less visible range matching and IR rejection.

### Features 
* **Measurement range**: 0.01 to 83865&nbsp;lux
* Optical filtering to match human eye
* **Typical power consumption**:  1.8&nbsp;uA 
* **Module size**: 10 x 10&nbsp;mm

## Specifications

### Overview
<!-- Insert Picture of Sensor with its dimensions -->

#### Mounting

The RAK1903 module can be mounted on the slots: A, B, C, or D of the WisBase board. Figure 1 shows the mounting mechanism of the RAK1903 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak1903/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK1903 WisBlock Sensor Mounting"
/>

### Hardware

#### Chipset

| Vendor | Part number |
| --     | --          |
| TI     | OPT3001DNPR |

#### Pin Definition
The RAK1903 WisBlock Sensor module comprises a standard WisIO connector. The WisIO connector allows the RAK1903 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector the definition of the pinout are shown in Figure 2. 

:::tip 📝 NOTE:

Only the I2C related pins, interrupt pins, VDD and GND are connected to this module.

:::

<rk-img
  src="/assets/images/wisblock/rak1903/datasheet/RAK1903_connector_pinout.png"
  width="50%"
  caption="RAK1903 WisBlock Sensor connector pinout"
/>

The pin12 or pin13 are connected to the INT of OPT3001DNPR (See Figure 4). The device has an interrupt reporting system that allows the Controller connected to the I2C bus to go to sleep until a user-defined event occurs. Alternatively, this mechanism can also be used with any system that can take advantage of a single digital signal that indicates whether the light is above or below the levels of interest.

#### Sensors

##### Ambient Light Sensor

| Parameter                                                   | Test Condition                                                                                    | Min. |     Typ.     |     Max.      |         Unit         |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---- | :----------: | :-----------: | :------------------: |
| Peak irradiance spectral responsibility                     |                                                                                                   |      |     550      |               |          nm          |
| Resolution (LSB)                                            | Lowest full-scale range, RN[3:0] = 0000b                                                          |      |     0.01     |               |         lux          |
| Full-scale illuminance                                      |                                                                                                   |      |   83865.6    |               |         lux          |
| Measurement output result                                   | 0.64 lux per ADC code <br /> 2620.90 lux full-scale <br /> (RN[3:0] = 0110) <br /> 2000 lux input | 2812 |     3125     |     3437      |      ADC codes       |
|                                                             |                                                                                                   | 1800 |     2000     |     2200      |         lux          |
| Relative accuracy between gain ranges                       |                                                                                                   |      |     0.2%     |               |
| Infrared response (850 nm)                                  |                                                                                                   |      |     0.2%     |               |
| Light source variation (incandescent, halogen, fluorescent) | Bare device <br /> no cover glass                                                                 |      |      4%      |               |                      |
| Linearity                                                   | Input luminance > 40 lux <br /> Input luminance < 40 lux                                          |      | 2% <br /> 5% |               |                      |
| Measured drift across temperature                           | Input luminance = 2000 lux                                                                        |      |     0.01     |               |         %/°C         |
| Dark condition, ADC output                                  | 0.01 lux per ADC code                                                                             |      |  0 <br /> 0  | 3 <br /> 0.03 | ADC codes <br /> lux |
| Half-power angle                                            | 50% of full-power reading                                                                         |      |      47      |               |       degrees        |

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol           | Description                 | Min. | Nom. | Max. | Unit |
| ---------------- | --------------------------- | :--: | :--: | :--: | :--: |
| V<sub>DD</sub>   | Power supply for the module | 1.6  |      | 3.6  |  V   |
| I<sub>shut</sub> | Shutdown current            |  -   | 0.4  |  -   |  uA  |
| I<sub>DD</sub>   | Active VDD=3.6V             |  -   | 3.7  |  -   |  uA  |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK1903 module.

<rk-img
  src="/assets/images/wisblock/rak1903/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK1903 WisBlock Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak1903/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
Figure 5 shows the schematic of the RAK1903 module.

<rk-img
  src="/assets/images/wisblock/rak1903/datasheet/rak1903-schematic.png"
  width="100%"
  caption="RAK1903 WisBlock Sensor schematics"
/>
