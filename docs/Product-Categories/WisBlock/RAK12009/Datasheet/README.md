---
rak_desc: Provides comprehensive information about your RAK12009 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12009/overview/RAK12009_buy.png
tags:
  - datasheet
  - wisblock
  - RAK12009
prev: ../Quickstart/
next: false
---

# RAK12009 WisBlock MQ3 Alcohol Gas Sensor Module Datasheet

## Overview

### Description

The RAK12009 is an Alcohol Gas Sensor module, part of the RAKWireless WisBlock Sensor Series. The sensor used in this module is the MQ-3B from Zhengzhou Winsen Electronics. This sensor is capable of detecting alcohol gas in the air with an alcohol concentration detection range of 25 to 500&nbsp;ppm.

### Features 

* MQ-3B Alcohol Gas Sensor
* Alert Function
* I2C Interface, 7-bit I2C Address: 0x54
* Detection Range: 25 to 500&nbsp;ppm (Alcohol Gas)
* 3.3&nbsp;V or VBAT Power Supply
* **Module size**: 25 x 35&nbsp;mm

## Specifications

### Overview

#### Mounting

The WisBlock MQ3 Alcohol Gas Sensor can be mounted to the sensor slot IO of a WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK12009 on a WisBlock Base board, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210225140319101.png"
  width="60%"
  caption="RAK12009 WisBlock MQ3 Alcohol Gas Sensor Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12009 WisBlock MQ3 Alcohol Gas Sensor Module.

#### Chipset

| Vendor | Part number |
| ------ | ----------- |
| Winsen | MQ-3B       |

#### Pin Definition

The WisBlock MQ3 Alcohol Gas Sensor module comprises a standard WisIO connector. The WisIO connector allows the RAK12009 module mounted to a WisBlock Base board, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**. 


:::tip 📝 NOTE:
- **I2C** related pins, **ALERT**, **EN**, **VBAT**, **3V3**, and **GND** are connected to WisIO connector.
- **VBAT** is the battery voltage input, max voltage is 4.2&nbsp;V.
:::

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/RAK12009_Pinout.svg"
  width="80%"
  caption="RAK12009 WisBlock MQ3 Alcohol Sensor Pinout"
/>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol | Description                  | Min. | Nom. | Max. | Unit |
| ------ | ---------------------------- | ---- | ---- | ---- | ---- |
| VBAT   | Supply Voltage               | 2.8  | -    | 4.2  | V    |
| VCCIO  | Digital IO Power Supply      | -    | 3.3  | -    | V    |
| VCC    | ADC to I2C Chip Power Supply | -    | 5    | -    | V    |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK12009 module.
<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210225140329283.png"
  width="80%"
  caption="RAK12009 WisBlock MQ3 Alcohol Sensor Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20201228093039748.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### Power Supply Circuit

**Figure 5** shows RAK12009 step-up power supply circuit. 

* **VBAT** Battery voltage (max voltage is 4.2&nbsp;V) 
* **EN** Power enable pin (active high). This pin is connected to **IO6** of WisBlock Core. 

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210702184355429.png"
  width="100%"
  caption="RAK12009 WisBlock MQ3 Alcohol Sensor Module Power Supply"
/>

##### Alcohol Detector Circuit

**Figure 6** shows the alcohol detector circuit.

* **U2** is the MQ-3B Alcohol sensor.
* The pin 2 voltage (5&nbsp;V) is used to supply standard working temperature to the sensor. 
* **AOUT** is the voltage of load resistance R12 which is in series with sensor.
* The pin 1 and pin 3 voltage (5&nbsp;V) supply the detect voltage to load resistance R12.
* **U3** is a 12-bit analog-to-digital converter with alert function. The **U3** power supply is 5&nbsp;V.

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210702184649125.png"
  width="100%"
  caption="RAK12009 WisBlock MQ3 Alcohol Sensor Module Detector Circuit"
/>

##### Voltage Level Shifter Circuit

The 40-pin WisConnector voltage level is 3.3&nbsp;V, while U2 and U3 levels are 5&nbsp;V. To interface the different voltage levels between 40-pin WisConnector and Alcohol detector circuit, the RAK12009 uses a built-in voltage level shifter circuit.


<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210702191010195.png"
  width="60%"
  caption="Voltage Level Shifter Circuit"
/>


##### I2C Address

The I2C address of the Analog-to-Digital converter chip of RAK12009 can be selected via resistor jumpers, as shown in **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210914101758600.png"
  width="50%"
  caption=" RAK12009 Alcohol Sensor Module I2C Address configuration"
/>

The I2C address is configured by the ADR1 and ADR0 address selection inputs, as shown below.


| **ADR1**  | **ADR0**  |  **Slave Address [A6-A0]** |
|:---------:|:---------:|:--------------------------:|
| Floating  | Floating  |1010000                     |           
| Floating  | GND       |1010001                     |
| Floating  | VA        |1010010                     |
| GND       | Floating  |1010100                     |
| GND       | GND       |1010101                     |
| GND       | VA        |1010110                     |
| VA        | Floating  |1011000                     |
| VA        | GND       |1011001                     |
| VA        | VA        |1011010                     |


:::tip 📝 NOTE:
- The default 7-bit I2C address is 1010101 = 0x55. The selection input is ADR1 and ADR0 resistor jumper connected to **GND**.
- **VA** is **U4** ADC121C021 Analog Power Supply (+5&nbsp;V).
:::

##### Full Schematic

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/rak12009_sch.png"
  width="100%"
  caption="RAK12009 complete schematic"
/>


##### J2 Connector Pinout

RAK12009 has an additional J2 connector to provide an extra interface to the module. This connector separates the sensor module from the WisBlock Base, to fits with maker requirements. The pinout of J2 connector is shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12004/datasheet/j2-connector.png"
  width="40%"
  caption="J2 Connector Pinout"
/>

##### WisConnector

**Figure 11** shows the 40-pin WisConnector connection.

* **VBAT** is a battery voltage pin.
* **I2C1_SDA** and **I2C1_SCL** are the I2C related pins.
* **EN** is a power enable pin.
* **ALERT** is an analog-to-digital converter alert pin.

<rk-img
  src="/assets/images/wisblock/rak12009/datasheet/image-20210702182842279.png"
  width="40%"
  caption="RAK12009 Module 40-pin WisConnector"
/>

