---
tags:
  - datasheet
  - wisblock
prev: ../Overview/
---

# RAK1904 WisBlock 3-axis Acceleration Sensor Datasheet

## Overview
### Description

The RAK1904 WisBlock 3-axis Acceleration Sensor, part of the RAK Wireless Wisblock series, is an ultra-low-power high-performance three-axis linear accelerometer with a digital I2C interface. The device features ultra-low-power operational modes that allow advanced power saving and smart embedded functions.
The accelerometer of the RAK1904 module can be dynamically configured to work in the scales of ±2g/±4g/±8g/±16g, and is capable of measuring accelerations with output data rates from 1 Hz to 5.3 kHz.

### Features 
* **User selectable scales**: ±2g/±4g/±8g/±16g
* **Data acquisition rates**: from 1 Hz to 5.3 kHz 
* **Module size**: 10 x 10 mm


## Specifications
### Overview
<!-- Insert Picture of Sensor with it's dimensions -->

#### Mounting
The RAK1904 module can be mounted on the slots: A, B, C, or D of the WisBase board. Figure 1 shows the mounting mechanism of the RAK1904 on a WisBase module, such as the RAK5005-O.
<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK1904 WisBlock Sensor Mounting"
/>

### Hardware
####  Chipset
| Vendor | Part number |
| --     | --          |
| TI | OPT3001DNPR |

#### Pin Definition
The RAK1904 WisBlock 3-axis Acceleration Sensor comprises a standard WisIO connector. This WisIO connector allows the RAK1904 module to be mounted on a WisBlock baseboard, such as, RAK5005-O. The pin order of the connector  and the definition of the pinout are shown in Figure 2. Note, only the I2C related pins, interrupt pins, VDD, and GND are connected to this module.

<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK1904_pin.png"
  width="60%"
  caption="RAK1904 WisBlock Sensor Pinout Diagram"
/>

:::tip 📝 NOTE:
Pins 10, 12, 13, and 15 are connected to the interrupt pins of LIS3DH, please refer to the datasheet of LIS3DH for details.
:::



#### Sensors
##### Acceleration Sensor 
| Symbol | Parameter | Test Condition | Min. | Typ. | Max. | Unit |
| --     | --        | --             | :-:  | :-:  | :-:  | :-:  |
| FS | Measurment Range | FS bit set to 00 | | ±2.0 | | g |
|    |                  | FS bit set to 01 | | ±4.0 | | g |
|    |                  | FS bit set to 10 | | ±8.0 | | g |
|    |                  | FS bit set to 10 | | ±16.0 | | g |
| So | Sensitivity | FS bit set to 00  <br /> High-resolution mode | | 1 | | mg/digit |
|    |             | FS bit set to 00  <br /> Normal mode | | 4 | | mg/digit |
|    |             | FS bit set to 00  <br /> Low-power mode | | 16 | | mg/digit |
|    |             | FS bit set to 01  <br /> High-resolution mode | | 2 | | mg/digit |
|    |             | FS bit set to 01  <br /> Normal mode | | 8 | | mg/digit |
|    |             | FS bit set to 01  <br /> Low-power mode | | 32 | | mg/digit |
|    |             | FS bit set to 10  <br /> High-resolution mode | | 4 | | mg/digit |
|    |             | FS bit set to 10  <br /> Normal mode | | 16 | | mg/digit |
|    |             | FS bit set to 10  <br /> Low-power mode | | 64 | | mg/digit |
|    |             | FS bit set to 11  <br /> High-resolution mode | | 12 | | mg/digit |
|    |             | FS bit set to 11  <br /> Normal mode | | 48 | | mg/digit |
|    |             | FS bit set to 11  <br /> Low-power mode | | 192 | | mg/digit |

#### Electrical Characteristics
##### Recommended Operating Conditions
| Symbol | Description | Min. | Nom. | Max. | Unit |
| --     | --          | :-:  | :-:  | :-:  | :-:  |
| V<sub>DD</sub> | Power supply for the module | 1.71 | 2.5 | 3.6 | V | 
| I<sub>pdn</sub> | Power-down current | - | 0.5 | - | uA | 
| I<sub>DD </sub>| @50Hz | - | 11 | - | uA | 
| I<sub>DD </sub>| @1Hz | - | 2 | - | uA | 


#### Mechanical Characteristics
Figure 3 shows the dimensions and the mechanic drawing of the RAK1904 module.
<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK1904 WisBlock Sensor Mechanic Drawing"
/>

#### Schematic Diagram
The Figure 4 shows the schematic of the RAK1904 module.
<rk-img
  src="/assets/images/wisblock/rak1904/datasheet/RAK1904_schematics.png"
  width="70%"
  caption="RAK1904 WisBlock Sensor schematics"
/>

