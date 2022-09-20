---
rak_desc: Provides comprehensive information about your RAK12027 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12027/overview/RAK12027_home.jpg
tags:
  - datasheet
  - wisblock
  - RAK12027
prev: ../Overview/
next: false
---

# RAK12027 WisBlock Earthquake Sensor Module Datasheet

## Overview

### Description

The RAK12027 is an Earthquake Sensor module, a part of the RAKWireless WisBlock sensor Series. It carries D7S, the world’s smallest high-precision seismic sensor from Omron. It communicates with the target MCU over I2C interface, and it communicates with the target MCU over I2C interface and interrupts pins.

When an earthquake occurs with a seismic intensity equivalent to five (5) upper or higher on the JMA (Japan Meteorological Agency) Seismic Intensity Scale, the D7S will activate the shut-off output to notify the user that an earthquake has occurred. Also, the D7S has a **collapse alert system** that notifies if the device changes its horizontal position by more that 20-degree, which assumed that the structure mounted has already collapsed.

:::warning ⚠️ WARNING
Do not use the sensor in safety devices or for applications in which the sensor operation would directly affect human life.
:::

### Features 

  * Chipset: **Omron D7S**
  * Voltage supply: **3.3&nbsp;V**
  * Using the SI value, which has a high correlation with the seismic intensity scale that indicates the magnitude of an earthquake, provides higher-precision judgment of seismic intensity scales
  * A higher degree of freedom for incorporation into devices and prolonged operation on battery power
  * The shutoff output terminal (INT1) operates equivalent to a conventional mechanical vibration sensor and ensures compatibility with mechanical vibration sensors
  * Collapse alarm integrated
  * I2C digital output interface   
  * Operating temperature: **-30°&nbsp;C ~ 70°&nbsp;C**
  * Module size: 10 x 23&nbsp;mm


## Specifications

### Overview

<br>
<br>

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/rak12027.png"
  width="30%"
  caption="RAK12027 WisBlock Earthquake Sensor Module top and bottom view"
/>

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK12027 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12027 module can be mounted on the slots: **C, D, E, & F**.

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/rak12027-mount.png"
  width="50%"
  caption="RAK12027 WisBlock Earthquake Sensor mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12027 WisBlock Earthquake Sensor Module.

#### Chipset

| Vendor | Part Number |
| ------ | ----------- |
| Omron  | D7S         |

#### Pin Definition

The RAK12027 WisBlock Earthquake Sensor Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK12027 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/RAK12027-pinout.jpg"
  width="70%"
  caption="RAK12027 pinout diagram"
/>

:::tip 📝 NOTE:
- **I2C** related pin, **INT1**, **INT2**, **3V3_S**, and **GND** are connected to WisBlock connector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK12027 module can be controlled by the WisBlock Core via `WB_IO2 (WisBlock IO2 pin)`. This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12027 module.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

**INT1 (Interrupt Pin 1)**  
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO3    | IO5    | IO4    | IO6    |


**INT2 (Interrupt Pin 2)**  
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO4    | IO6    | IO3    | IO5    |


#### Electrical Characteristics
  
| Symbol | Description          | Min.  | Nom.  | Max.  | Unit  |
| ------ | ---------------------| :---: | :---: | :---: | :---: |
| VCC    | Power supply voltage |   -   |  3.3  |       |   V   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK12027 module.

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/rak12027-dim.png"
  width="50%"
  caption="RAK12027 mechanical dimensions"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

The default I2C address of the Earthquake sensor is **0x55**. 

Resistors **R6** and **R7** do not need to be mounted on the RAK12027 module due to the pull-up resistors already built-in on the WisBlock Base board.

<rk-img
  src="/assets/images/wisblock/rak12027/datasheet/rak12027-schem.jpg"
  width="100%"
  caption="RAK12027 schematic diagram"
/>



