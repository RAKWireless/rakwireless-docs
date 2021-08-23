---
rak_desc: Covers the comprehensive information of your RAK12002 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12002/overview/rak12002_home.png
tags:
  - datasheet
  - wisblock
  - RAK12002
prev: ../Quickstart/
next: false
---

# RAK12002 WisBlock RTC Module Datasheet

## Overview

### Description

The RAK12002 is a Real-Time Clock module, part of the RAK Wireless WisBlock Series, which was designed to provide real-time clock capabilities on your WisBlock projects. The RTC chip is based on RV-3028-C7 from Micro Crystal which can be interfaced via I2C.

### Features

- Built-in 32.768&nbsp;kHz crystal oscillator
- Counters for seconds, minutes, hours, date, month, year, and weekday
- Automatic leap year correction
- 3.3&nbsp;V Power supply
- I2C Interface
- Programmable Clock output
- Extreme low current consumption 40&nbsp;nA
- Supper capacitor backup power supply
- Small size: 10&nbsp;mm x 10&nbsp;mm

## Specifications

### Overview 

#### Mounting 

The RAK12002 RTC module can be mounted to the slot A, B, C, and D of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK12002 on a WisBlock Base board.

<rk-img
  src="/assets/images/wisblock/rak12002/datasheet/mounting.png"
  width="50%"
  caption="RAK12002 WisBlock RTC Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK12002 WisBlock RTC Module.

#### Chipset
| Vendor        | Part number |
| ------------- | ----------- |
| Micro Crystal | RV-3028-C7  |

#### Pin Definition

The RAK12002 WisBlock RTC module comprises a standard WisConnector. The WisConnector allows the RAK12002 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in Figure 2. 

:::tip 📝 NOTE:
**I2C** related pins,**INT**, **CLKOUT**, **3V3**, and **GND** are connected to WisConnector.
:::

<rk-img
  src="/assets/images/wisblock/rak12002/datasheet/RAK12002_Pinouts.svg"
  width="50%"
  caption="RAK12002 WisBlock RTC Module Pinout"
/>

#### Electrical Characteristics

| Symbol  | Description                                                                       | Min. | Nom. | Max. | Unit |
| ------- | --------------------------------------------------------------------------------- | ---- | ---- | ---- | ---- |
| VDD     | Power Supply Voltage                                                              | -    | 3.3  | -    | V    |
| VBACKUP | Backup Supply Voltage                                                             | -    | 3.3  | -    | V    |
| IDD     | VDD supply current timekeeping I2C-bus inactive, CLKOUT disabled, average current | -    | -    | 400  | nA   |

#### Mechanical Characteristic

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK12002 module.

<rk-img
  src="/assets/images/wisblock/rak12002/datasheet/rak12002_mechanic_drawing.png"
  width="60%"
  caption="RAK12002 WisBlock RTC Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12002/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

Figure 5 shows the RAK12002 RTC Module Schematic Diagram. C2 and C3 are supercapacitors, default uses C2, 70&nbsp;mF/3.3&nbsp;V, 11&nbsp;mF/3.3&nbsp;V for reserved.

<rk-img
  src="/assets/images/wisblock/rak12002/datasheet/schematic_diagram.png"
  width="100%"
  caption="RAK12002 WisBlock RTC Module Schematic"
/>