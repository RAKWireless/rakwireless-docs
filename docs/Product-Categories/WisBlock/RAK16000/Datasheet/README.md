---
rak_desc: Covers the comprehensive information of your RAK16000 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak16000/overview/RAK16000_home.png
tags:
  - datasheet
  - wisblock
  - RAK16000
prev: ../Overview/
next: false
---

# RAK16000 WisBlock DC Current Module Datasheet

## Overview

### Description

RAK16000 is a part of the WisBlock Sensor Series that is capable of measuring DC current in the range of 0 to 3&nbsp;A in a voltage range of 0 to 26&nbsp;V. With the two measured DC values, you get the power consumption by multiplying the current and voltage. Additionally, this module uses the INA219BID from Texas Instruments that offers high accuracy maximum rate of 0.5% over temperature.


### Features

  * Measures DC current in the range of 0 to 3&nbsp;A
  * Measure DC voltage in the range of 0 to 26&nbsp;V
  * High accuracy of 0.5% (max) over temperature (INA219B)
  * 100&nbsp;mΩ shunt resistor can provide a resolution of up to 0.1&nbsp;mA
  * I2C interface
  * 3.3&nbsp;V Power supply
  * 15&nbsp;mm x 25&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/rak16000_overview.png"
  width="50%"
  caption="RAK16000 Top and Back View"
/>

#### Mounting

The RAK16000 module can be mounted on the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK16000 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/image-20210225140433974.png"
  width="60%"
  caption="RAK16000 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and the corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK16000 WisBlock DC Current Module.

####  Chipset

| Vendor            | Part number |
| ----------------- | ----------- |
| Texas Instruments | INA219BID   |

#### Pin Definition

The RAK16000 WisBlock DC Current Module comprises a standard 40-pin WisIO connector compatible with the WisBlock Base IO Slot. The WisIO connector allows the RAK16000 module to be mounted to a WisBlock Base board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 3.**


<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/rak16000_pinout.svg"
  width="80%"
  caption="RAK16000 WisBlock DC Current Module Pinout"
/>

::: tip 📝 NOTE

- Only the **I2C** related pins, **3V3_S** and **GND** are connected to the WisIO connector.

:::  

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK16000 module and its recommended operating condition. Refer to the table presented below.

##### Recommended Operating Condition

| Parameter | Minimum | Maximum   | Unit |
| --------- | ------- | --------- | ---- |
| 3V3_S     | -       | 6         | V    |
| IN+,IN-   | -0.3    | 26        | V    |
| SDA       | -0.3    | 6         | V    |
| SCL       | -0.3    | 3V3_S+0.3 | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK16000 module.

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/image-20210225140446062.png"
  width="80%"
  caption="RAK16000 WisBlock DC Current Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### I2C Slave Address Select

The default 7-bit I2C address is 0x41. The I2C address can be changed by the pull-up resistors (R7 and R8) and pull-down resistors (R9 and R10).


<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/rak16000_i2c.png"
  width="50%"
  caption="I2C Slave Address Select"
/>

##### I2C Pull-Up Resistor

The pull-up resistor for I2C_SCL and I2C_SDA is already installed on the WisBlock Base board. Don't connect (NC) R2 and R3 on the RAK16000 module.

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/rak16000_pup.png"
  width="50%"
  caption="I2C Pull-Up Resistor"
/>

##### INA219BD

* R11, R12, and C3 are reserved for input filter circuit.
* R6 is the shunt resistor, and the default value is 100&nbsp;mΩ (0.1&nbsp;Ω +- 1%).

::: tip 📝 NOTE

- Using the 100&nbsp;mΩ shunt resistor, you can measure current with a minimum value of 100&nbsp;uA and LSB is 100&nbsp;uA.<br>
- Using the 1&nbsp;Ω shunt resistor, you can measure 10&nbsp;uA current, and the measure range will be 320&nbsp;uA.

:::  

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/image-20210722204440705.png"
  width="50%"
  caption="INA219BD"
/>

##### Full Schematic

**Figure 9** shows the complete schematic of the RAK16000 module.

<rk-img
  src="/assets/images/wisblock/rak16000/datasheet/rak16000_sch.png"
  width="100%"
  caption="RAK16000 WisBlock DC Current Module Schematic"
/>