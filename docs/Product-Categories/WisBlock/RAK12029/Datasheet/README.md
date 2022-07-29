---
rak_desc: Provides comprehensive information about your RAK12029 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12029/overview/RAK12029_home.png
tags:
  - datasheet
  - wisblock
  - RAK12029
prev: ../Quickstart/
next: false
---

# RAK12029 WisBlock Inductive Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/rak12029_front_back.png"
  width="40%"
  caption="RAK12029 WisBlock Inductive Sensor Module"
/>


### Description

RAK12029 is a metal detection sensor module based on the LDC1614 from Texas Instruments. The LDC1614 is an inductance-to-digital converter (LDC) that measures the oscillation frequency of four LC resonators. It outputs a digital value, that is, proportional to frequency, with 28 bits of measurement resolution. With this digital value, you can detect the presence of metallic objects.


### Features 

* Metal detection module
* Sensing coils up to four channels
* 28-bit LDC
* Immunity to DC magnetic fields and magnets
* 3.3&nbsp;V Power supply
* Operating Current: 0.2&nbsp;uA to 2.1&nbsp;mA
* Chipset: Texas Instruments LDC1614
* **Module size**: 25 x 35&nbsp;mm

## Specifications
### Overview

#### Mounting

The RAK12029 WisBlock Inductive Sensor Module can be mounted to the IO slot of the [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. **Figure 2** shows the mounting mechanism of the RAK12029 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/rak12029_mounting.png"
  width="50%"
  caption="RAK12029 WisBlock Inductive Sensor mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK12029 WisBlock Inductive Sensor Module.


####  Chipset

| Vendor            | Part number |
| ----------------- | ----------- |
| Texas Instruments | LDC1614     |

#### Pin Definition

The RAK12029 WisBlock Inductive Sensor comprises a standard WisBlock connector. The WisBlock connector allows the RAK12029 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

:::tip 📝 NOTE:
* **I2C** related pin, **3V3_S**, and **GND** are connected to WisIO connector.
* **SD (WB_IO5)** is shutdown mode pin. High input voltage configures the module to shutdown mode.
* **INT (WB_IO6)** is a configurable interrupt output pin from the LDC1614.
:::

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/rak12029_pinouts.svg"
  width="60%"
  caption="RAK12029 Pinout"
/>


#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol           | Description    | Condition                            | Min. | Nom. | Max. | Unit |
| ---------------- | -------------- | ------------------------------------ | ---- | ---- | ---- | ---- |
| 3V3_S            | Supply voltage | Input voltage must within this range | 2.7  | 3.3  | 3.6  | V    |
| I<sub>DD</sub>   | Supply current | Normal                               | -    | 2.1  | -    | mA   |
| I<sub>DDSL</sub> | Supply current | Sleep mode supply current            | -    | 35   | 60   | uA   |
| I<sub>SD</sub>   | Supply current | Shutdown mode supply current         | -    | 0.2  | 1    | uA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanical drawing of the RAK12029 module.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/rak12029_mechanic_drawing.png"
  width="80%"
  caption="RAK12029 mechanical drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

##### Power Supply Circuit

**Figure 6** shows the RAK12029 power supply circuit. 

* **3V3_S** supply voltage comes from the WisBlock Base board (max voltage: 3.6&nbsp;V).
* **VDD** is the supply voltage going to the module (max voltage: 3.6&nbsp;V).

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/power_supply.png"
  width="50%"
  caption="RAK12029 power supply"
/>

##### Inductive Sensor Circuit

**Figure 7** shows the inductive sensor circuit.

* **U1** is the LDC1614 Inductance to Digital Converter (LDC) chip.
* **P1**, **P2**, **P3**, and **P4** are the connectors for the four sensing coils. The four channels are independent of each other. You can choose how many coils to connect. About the coil, RAK provides one type of coil as an accessory. If you need to design your own coil, you can read the [LDC Reference Coils User’s Guide](https://www.ti.com/lit/ug/snou136/snou136.pdf?ts=1645630492668&ref_url=https%253A%252F%252Fwww.google.com%252F) from Texas Instruments.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/inductive_sensor.png"
  width="100%"
  caption="RAK12029 inductive sensor circuit"
/>

##### I2C Circuit

The I2C interface of the RAK12029 is shown in **Figure 8**. The pull-up resistors are not populated because the needed pull-up resistors are already in the WisBlock Base board.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/i2c_circuit.png"
  width="50%"
  caption="I2C interface of the RAK12029"
/>

##### I2C Address

The I2C address of RAK12029 can be configured via resistor jumpers as shown in **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/i2c_address.png"
  width="50%"
  caption="RAK12029 I2C address"
/>

##### Clock Circuit

RAK12029 has an optional clock oscillator to provide an external 40MHz clock source to the module. RAK12029 uses an internal crystal oscillator as default. The schematic diagram is shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12029/datasheet/clock_circuit.png"
  width="60%"
  caption="Clock circuit connection"
/>
