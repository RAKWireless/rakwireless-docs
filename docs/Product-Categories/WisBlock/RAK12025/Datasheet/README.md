---
rak_desc: Provides comprehensive information about your RAK12025 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12025/overview/RAK12025_home.png
tags:
  - datasheet
  - wisblock
  - RAK12025
prev: ../Quickstart/
next: false
---

# RAK12025 WisBlock Gyroscope Sensor Module Datasheet

## Overview



### Description


RAK12025 is a gyroscope module, part of the RAKWireless WisBlock Sensor series. The module is based on I3G4250D from ST. The I3G4250D is a low-power 3-axis angular rate sensor able to provide unprecedented stability at a zero-rate level and sensitivity over temperature and time. It includes a sensing element and a digital interface capable of providing the measured angular rate. With I3G4250D, RAK12025 can measure rotation speed and report data through a standard I2C digital interface.

### Features 
* **Gyroscope  module**
* **Selectable full scale**: (245/500/2000&nbsp;dps)
* **I2C interface**
* **16-bit rate value data output**
* **8-bit temperature data output**
* **Module size**: 10 x 10&nbsp;mm


## Specifications
### Overview

<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/rak12025_module.png"
  width="40%"
  caption="RAK12025 WisBlock Gyroscope Sensor Module"
/>

#### Mounting

The RAK12025 Gyroscope module can be mounted to the sensor slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK12025 on a WisBlock Base board module, such as the RAK5005-O.

:::tip 📝 NOTE:
RAK12025 has two digital output lines, so you need two GPIOs from WisCore. It means RAK12025 should be used on a sensor slot with two available GPIOs. However, WB_IO2 is used to control 3V3_S. Hence, RAK12025 is used only on slots without WB_IO2 like sensor slots C and D on RAK5005-O. 
:::

<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/RAK12025_mounting.png"
  width="50%"
  caption="Mounting of RAK12025"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12025 WisBlock Gyroscope Sensor Module.


#### Chipset
| Vendor | Part number |
| ------ | ----------- |
| ST     | I3G4250D    |

#### Pin Definition

The RAK12025 WisBlock gyroscope module comprises a standard Wisblock sensor connector. The connector allows the RAK12025 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 3**. 

:::tip 📝 NOTE:
**I2C** related pin, **INT2**, **INT1**, **3V3_S**, and **GND** are connected to Wisblock connector.
:::

<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/rak12025_pinouts.svg"
  width="60%"
  caption="RAK12025 pinouts"
/>

The table below shows the default IOs used for different slots using INT1:  
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO4    | IO6    | IO3    | IO5    |


When using INT2, the default IOs used for different slots is shown in the table below: 
  
| SLOT C | SLOT D | SLOT E | SLOT F |
| ------ | ------ | ------ | ------ |
| IO3    | IO5    | IO4    | IO6    |

#### Sensors

##### Gyroscope Sensor 
| Symbol | Parameter                              | Test Condition                  |  Min.  |      Typ.       |  Max.  |     Unit      |
| ------ | -------------------------------------- | ------------------------------- | :----: | :-------------: | :----: | :-----------: |
| FS     | Measurement Range                      | User-selectable                 |        |      ±245       |        |      dps      |
|        |                                        | User-selectable                 |        |      ±500       |        |      dps      |
|        |                                        | User-selectable                 |        |      ±2000      |        |      dps      |
| So     | Sensitivity                            | FS bit = 245&nbsp;dps           |  7.4   |      8.75       |  10.1  |  mdps/digit   |
|        |                                        | FS bit = 500&nbsp;dps           |  14.8  |      17.50      |  19.8  |  mdps/digit   |
|        |                                        | FS bit = 2000&nbsp;dps          |  59.2  |       70        |  79.3  |  mdps/digit   |
| SoDr   | Sensitivity change vs. Temperature     | From -40&nbsp;°C to +85&nbsp;°C |        |       ±2        |        |       %       |
| DVoff  | Digital zero-rate level                | FS = 245&nbsp;dps               |  -25   |       ±10       |  +25   |      dps      |
|        |                                        | FS = 500&nbsp;dps               | -37.5  |       ±15       | +37.5  |      dps      |
|        |                                        | FS = 2000&nbsp;dps              | -187.5 |       ±75       | +187.5 |      dps      |
| OffDr  | Zero-rate level change vs. Temperature | FS = 245&nbsp;dps               |        |      ±0.03      |        |    dps/°C     |
| NL     | Non-linearity                          | Best fit straight line          |   -5   |       0.2       |   +5   |    dps/°C     |
| DST    | Self-test output change                | FS = 245&nbsp;dps               |        |       130       |        |      dps      |
|        |                                        | FS = 500&nbsp;dps               |        |       200       |        |      dps      |
|        |                                        | FS = 2000&nbsp;dps              |        |       530       |        |      dps      |
| Rn     | Rate noise density                     | BW = 50&nbsp;Hz                 |        |      0.03       |        | dps/sqrt (Hz) |
| ODR    | Digital output data rate               |                                 |        | 105/208/420/840 |        |      Hz       |
| Top    | Operating temperature range            |                                 |  -40   |                 |  +85   |      °C       |


#### Electrical Characteristics

- @ Vdd = 3.0&nbsp;V, T = +25&nbsp;°C, unless otherwise noted.
  
| Symbol | Description                       | Condition                            | Min.  | Typ.  | Max.  | Unit  |
| ------ | --------------------------------- | ------------------------------------ | :---: | :---: | :---: | :---: |
| Vdd    | Supply voltage                    | Input voltage must within this range |  2.4  |  3.3  |  3.6  |   V   |
| Idd    | Supply current                    | Normal                               |   -   |  6.1  |   -   |  mA   |
| IddSL  | Supply current in sleep mode      | Sleep mode                           |   -   |  1.5  |   -   |  uA   |
| IddPdn | Supply current in power-down mode | Power-down mode                      |       |   5   |       |  uA   |
| Top    | Operating temperature range       |                                      |  -40  |       |  +85  |  °C   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and the mechanic drawing of the RAK12025 module.

<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/RAK12025_mechanic_drawing.png"
  width="60%"
  caption="RAK12025 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram


<rk-img
  src="/assets/images/wisblock/rak12025/datasheet/rak12025_schematics.png"
  width="100%"
  caption="RAK12025 schematic diagram"
/>
