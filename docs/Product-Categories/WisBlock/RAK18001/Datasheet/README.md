---
rak_desc: Provides comprehensive information about your RAK18001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18001/RAK18001.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK18001
---

# RAK18001 WisBlock Buzzer Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/RAK18001_illustrated.png"
  width="40%"
  caption="RAK18001 Buzzer Module"
/>


### Description

The **RAK18001** is a WisBlock Extra module that uses a **MLT-5020** as its built-in buzzer. It produces an audible high-pitched sound which can be used in various alarm and notifier applications. The sound and loudness can be controlled through PWM (Pulse-Width Modulation) signal from a WisBlock Core. The output sounds and pitch level is customizable to the point that it is even possible to play a melody.

### Features

  * 3.3&nbsp;V Input Voltage: On/Off Control by the WisBlock Core
  * Operating Voltage: 2.0&nbsp;V - 5.0&nbsp;V
  * 75&nbsp;dB sound output at 10&nbsp;cm distance
  * Resonant Frequency: 4000&nbsp;Hz
  * PWM Controlled: Loudness and pitch level can be customized using your code
  * Uses MLT-5020 Buzzer - small and compact
  * Chipset: Jiangsu Huaneng Electronics MLT-5020
  * Module Size: 10&nbsp;mm x 10&nbsp;mm
  * Built-in Buzzer Size: 5&nbsp;mm x 5&nbsp;mm x 2&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK18001 Buzzer Module can be mounted to any IO Slots (A, B, C, or D) of WisBlock Base Board. **Figure 2** shows the mounting mechanism of the RAK18001 on a WisBlock Base, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/RAK18001_mounting.png"
  width="50%"
  caption="RAK18001 WisBlock Buzzer Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters, including the tabular data of the functionalities and standard values of the RAK18001 WisBlock Buzzer Module Datasheet.

#### Chipset

The RAK18001 uses the MLT-5020 Buzzer.Refer to the manufacturer's [MLT-5020 Buzzer Page](https://lcsc.com/product-detail/Buzzers_Jiangsu-Huaneng-Elec-MLT-5020_C94598.html) for more details.

| Vendor                      | Part Number |
| :-------------------------: | :---------: |
| Jiangsu Huaneng Electronics | MLT-5020    |

#### Pin Definition

The RAK18001 WisBlock Buzzer Module comprises a standard WisSensor connector. The WisSensor connector allows the RAK18001 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition are shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/rak18001-pinouts.png"
  width="60%"
  caption="RAK18001 Buzzer Module Pinout Diagram"
/>

The table below shows the default IOs used for different slots:

| SLOT A | SLOT B | SLOT C | SLOT D |
| ------ | ------ | ------ | ------ |
| IO1    | IO2    | IO3    | IO5    |

As seen on **Figure 2**, the PWM1 is connected to R5 which is an NC (no connection). On the other hand, PWM2 is connected to a 330&nbsp;Ω resistor R6.

However, you can switch these two terminals by connecting the PWM1 to R6 and PWM2 to NC. This configuration will create an alternative IO pins as shown below:

| SLOT A | SLOT B | SLOT C | SLOT D |
| ------ | ------ | ------ | ------ |
| IO2    | IO1    | IO4    | IO6    |

:::warning ⚠️ WARNING
Make sure to set the PWM pin to _**LOW**_ after playing a sound. This is to ensure that the buzzer on the RAK18001 is in complete shut down and does not get hot.
:::

#### Electrical Characteristics

The table below shows the RAK18001 Buzzer Module electrical characteristics:

| Symbol          | Description                   | Min. | Nom. | Max. | Unit |
| --------------- | ----------------------------- | ---- | ---- | ---- | ---- |
| V<sub>DD</sub>  | Power supply for the module   | 2.7  | 3.3  | 3.6  | V    |
| I<sub>stb</sub> | Standby current               | -    | -    | 5    | µA   |
| I<sub>DD</sub>  | Measure current (normal mode) |      |      |      | µA   |
| I<sub>sd</sub>  | Buzzer turn off current       |      |      |      | µA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the dimensions and mechanical drawing of the RAK18001 module.

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/board-dimensions.png"
  width="60%"
  caption="RAK18001 Buzzer Module Mechanical Characteristics"
/>

#### Schematic Diagram

**Figure 5** shows the schematic diagram of RAK18001 Module. It consist of the pinouts of both RAK18001 Module and the Built-in Buzzer (MLT-5020).

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/schematic.png"
  width="100%"
  caption="RAK18001 Buzzer Module Schematic"
/>