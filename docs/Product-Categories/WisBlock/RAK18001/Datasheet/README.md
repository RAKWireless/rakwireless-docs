---
rak_desc: Provides comprehensive information about your RAK18001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18001/overview/RAK18001_front.png
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
  src="/assets/images/wisblock/rak18001/overview/RAK18001_illustrated.png"
  width="40%"
  caption="RAK18001 Buzzer Module"
/>


### Description

The RAK18001 WisBlock Buzzer Module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module.

The RAK18001 module has a built-in buzzer, using the small but very audible MLT-5020 buzzer. It produces loud and high-pitched sounds, which can be customized through PWM signal from a WisBlock Core. 

### Features 

* Operating Voltage: 2.0V - 5.0V
* Sound Output at 10cm distance: 75dB
* Resonant Frequency: 4000Hz
* Chipset: Jiangsu Huaneng Electronics MLT-5020
* Module size: 10&nbsp;mm x 10&nbsp;mm
* Built-in Buzzer size (MLT-5020): 5&nbsp;mm x 5&nbsp;mm x 2&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK18001 Buzzer Module can be mounted to any IO Slots (A, B, C, or D) of WisBlock Base Board. Figure 2 shows the mounting mechanism of the RAK18001 on a WisBlock Base, such as the RAK5005-O.  

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/RAK18001_mounting.png"
  width="50%"
  caption="RAK18001 WisBlock Buzzer Module Mounting"
/>  
  
### Hardware  

The RAK18001 uses the MLT-5020 Buzzer. Please see manufacturer's [MLT-5020 Buzzer Page](https://lcsc.com/product-detail/Buzzers_Jiangsu-Huaneng-Elec-MLT-5020_C94598.html) for more details.  

| Vendor                      | Part number |
| :-------------------------: | :---------: |
| Jiangsu Huaneng Electronics | MLT-5020    |

#### Pin Definition

The RAK18001 WisBlock Buzzer Module comprises a standard WisSensor connector. The WisSensor connector allows the RAK18001 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in Figure 3.

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/rak18001-pinouts.png"
  width="60%"
  caption="RAK18001 Buzzer Module Pinout Diagram"
/>

The table below shows the default IOs used for different slots:  
  
| SLOT A | SLOT B | SLOT C | SLOT D |
| ------ | ------ | ------ | ------ |
| IO1    | IO2    | IO3    | IO5    |

As seen on Figure 2, the PWM1 is connected to R5 which as a NC (no connection), and the PWM2 is connected to a 330ohms resistor R6. 

However, you can switch these two terminals by connecting the PWM1 to R6 and PWM2 to NC. This configuration will create an alternative IO pins as shown below:  
  
| SLOT A | SLOT B | SLOT C | SLOT D |
| ------ | ------ | ------ | ------ |
| IO2    | IO1    | IO4    | IO5    |

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

The Figure 4 shows the dimensions and mechanical drawing of the RAK18001 module.  
  
<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/board-dimensions.png"
  width="60%"
  caption="RAK18001 Buzzer Module Mechanical Characteristics"
/>  

#### Schematic Diagram

The Figure 5 shows the schematic diagram of RAK18001 Module. It consist of the pinouts of both RAK18001 Module and the Built-in Buzzer (MLT-5020).  

<rk-img
  src="/assets/images/wisblock/rak18001/datasheet/schematic.png"
  width="100%"
  caption="RAK18001 Buzzer Module Schematic"
/>  