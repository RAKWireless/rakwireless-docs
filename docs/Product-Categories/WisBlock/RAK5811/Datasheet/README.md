---
rak_desc: Provides comprehensive information about your RAK5811 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak5811/overview/RAK5811_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK5811
---

# RAK5811 WisBlock 0-5V Interface Module Datasheet

## Overview

### Description

The RAK5811 WisBlock Interface module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. RAKWireless has standardized the way modules are interconnected to the baseboards with the WisBlock Interface Connectors. This standard connector is a small high-density connector that not only saves spaces on the circuit boards but also allows to implement high-speed communication bus.

The RAK5811 is a 0-5&nbsp;V analog input interface module. The signal is routed through the IO bus to the WisBlock Core module. Inside of the WisBlock Core module, the MCU digitizes the signal and the sampled data is transmitted, for example, via a LoRa transceiver.

The RAK5811 module features two input channels of 0-5&nbsp;V analog signals. Inside, a high-precision operational amplifier, which supports a wide range of operating temperatures, is used for signal amplification and conversion.

In addition, this module integrates a 12&nbsp;V power supply. The power supply is connected to an operational amplifier and be used to power the external sensors. The connection of the 0-5&nbsp;V sensors is done through the fast crimping terminal without the need for special tools, this simplifies the installation process on the field.


### Features 

*	Two 0-5&nbsp;V analog input channels
*	Compatible with multiple WisBlock Core modules, such as the RAK4631
*	10&nbsp;mV conversion accuracy
*	Supports low power consumption mode, the module can be powered off by WisBlock Core module for saving energy during idle periods
*	12&nbsp;V output to power external sensors
*	Reserved I2C expansion interface
*	Fast crimping terminal to easy connect external components on the field
*	Designed with a 2&nbsp;kV ESD protection level
*	Small dimensions of 35&nbsp;mm x 25&nbsp;mm


## Specifications

### Overview

The overview shows the realistic view of the RAK5811 module and its block diagram.

#### Block Diagram

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/block-diagram.png"
  width="70%"
  caption="RAK5811 block diagram"
/>

In the RAK5811 module, as shown in Figure 1, the 0-5&nbsp;V input signal is connected to the operational amplifier by the R1/R2 voltage divider. The operational amplifier output is routed to an analog input of the MCU to be digitalized by an internal WisBlock Core ADC. Once the signal is digitalized, you can recover the original voltage value by applying the following relation:

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/voltage-divider.png"
  width="25%"
  caption="Voltage divider relation"
/>

Where Vout is the WisBlock Core read voltage; Vin is the analog input voltage (0-5&nbsp;V). From the voltage divider R1 is 1&nbsp;MΩ and R2 is 1.5&nbsp;MΩ, so the final relationship is: **Vin = Vout / 0.6**.

As shown in Figure 1, the module provides an output of 12&nbsp;V controlled by an internal DC-DC booster. This 12&nbsp;V output can be used to power industrial sensors. The **Enable** pin allows to control the booster and sets the RAK5811 module into a low power consumption mode. 


### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the board and its functionalities and diagrams.

#### Device Specification

The following table shows the parameters and the description of the RAK5811 WisBlock 4-20&nbsp;mA Interface Module:

| **Parameter**                    | **Description**                                                         |
| -------------------------------- | ----------------------------------------------------------------------- |
| Analog Input Interface           | 2 channels of 0-5&nbsp;V                                                |
| Analog Sampling Resolution       | 5&nbsp;mV                                                               |
| Analog Sampling Accuracy         | 1%                                                                      |
| Analog maximum input voltage     | 5.3&nbsp;V (There is a risk to burn the circuit surpassing this limit.) |
| Analog Port ESD Protection Level | 2&nbsp;kV HBM                                                           |
| Operational Amplifier Gain       | 3.0                                                                     |
| Input Voltage                    | 3.0&nbsp;V – 3.6&nbsp;V                                                 |
| Input Current                    | Maximum 100&nbsp;mA                                                     |
| Output Voltage                   | 12&nbsp;V                                                               |
| Output Current                   | Maximum 30&nbsp;mA                                                      |
| Operating Temperature            | -30&nbsp;°C ~ 65&nbsp;°C                                                |
| Storage Temperature              | -40&nbsp;°C ~ 85&nbsp;°C                                                |
| Module Dimensions                | 35&nbsp;mm x 25&nbsp;mm                                                 |

#### Pin Definition

This section shows the pin number of the Fast Crimping Terminal of the RAK5811 module.

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/RAK5811-pinout.png"
  width="60%"
  caption="RAK5811 Fast Crimping Terminal"
/>

| **Pin Number** | **Function Description**              |
| -------------- | ------------------------------------- |
| 1              | SCL of the I2C interface              |
| 2              | SDA of the I2C interface              |
| 3              | 3V3 output                            |
| 4              | VBAT, Battery output                  |
| 5              | 12&nbsp;V output for external sensors |
| 6              | GND                                   |
| 7              | Analog input 0                        |
| 8              | Analog input 1                        |

Figure 4 shows the pin order of the IO connector of the module. Through this connector, the RAK5811 module is attached to the WisBlock Base Board. 

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/rak5811-wisconnector.png"
  width="70%"
  caption="RAK5811 IO connector"
/>

The functionalities of each pins of the WisBlock IO connector are tabulated below.

| **Pin Number** | **Description**      | **Pin Number** | **Description** |
| -------------- | -------------------- | -------------- | --------------- |
| 1              | Battery Power        | 2              | Battery Power   |
| 3              | GND                  | 4              | GND             |
| 5              | NC, reserved for 3V3 | 6              | 3.3V Power      |
| 7              | NC                   | 8              | NC              |
| 9              | NC                   | 10             | NC              |
| 11             | NC                   | 12             | NC              |
| 13             | NC                   | 14             | NC              |
| 15             | NC                   | 16             | NC              |
| 17             | NC                   | 18             | NC              |
| 19             | SDA for I2C1         | 20             | SCL for I2C1    |
| 21             | NC                   | 22             | Analog1 to MCU  |
| 23             | NC                   | 24             | NC              |
| 25             | NC                   | 26             | NC              |
| 27             | NC                   | 28             | NC              |
| 29             | Enable               | 30             | NC              |
| 31             | NC                   | 32             | Analog0 to MCU  |
| 33             | NC                   | 34             | NC              |
| 35             | NC                   | 36             | NC              |
| 37             | NC                   | 38             | NC              |
| 39             | GND                  | 40             | GND             |

#### Mechanical Characteristics

##### Board Dimensions

Figure 5 shows the dimensions of the module RAK5811 module.

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/rak5811-mech.png"
  width="80%"
  caption="RAK5811 dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK5811 schematic diagram"
/>

## Typical Application

A typical application is shown in Figure 8. You can connect up to two 0-5&nbsp;V analog sensors independently.

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/typical-application.svg"
  width="50%"
  caption="RAK5811 typical application"
/>

## WisBlock Compatibility

In the ecosystem of WisBlock, the philosophy is to allow users to combine a WisBlock module of one category with a WisBlock module of other categories. This is true in most cases but it’s important to review the compatibility matrix when designing a customized solution. The RAK5811 module is as shown in the table below:

<table style="text-align: center">
<thead>
  <tr>
    <th></th>
    <th>Adaptable Module</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>WisBlock Base Board</td>
            <td>RAK5005-O</td>
            <td>RAK5811 is designed to be assembled in the IO slot of RAK5005-O baseboard.</td>
        </tr>
        <tr>
            <td rowspan=3>WisBlock Core Board</td>
            <td>RAK4631</td>
            <td>RAK5811 is fully compatible with RAK4631.</td>
        </tr>
        <tr>
            <td>RAK11200</td>
            <td>RAK5811 is fully compatible with RAK11200.</td>
        </tr>
</tbody>
</table>

:::tip 📝 NOTE 1:  The RAK5811+RAK4601
The RAK5811 is not compatible with RAK4601. The main reason is because RAK4601 doesn’t expose any ADC pin through the RAK5005-O baseboard.
:::

<!--
:::tip 📝 NOTE 2:  RAK5801+RAK4202+RAK5005-O
In order to combine a RAK5811 module, a RAK4202 which is a WisBlock Core module, and the RAK5005-O, the following modification must be introduced: 
- In RAK5005-O, remove the R7. The R7 resistor is shown in **Figure 12**.
- In RAK5811, remove R94 to R95, and use PA0 of STM32L151 to read the analog data of the channel “analog0”, and use PA2 of STM32L151 to read the analog data of Channel analog1. **Figure 13** shows the resistors R94 and R95 on the RAK5811 module.

This combination has the following restrictions: 
- The adapted RAK5005-O will not support battery power collection.
:::
-->
<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/r7.png"
  width="60%"
  caption="R7 on RAK5005-O"
/>

<rk-img
  src="/assets/images/wisblock/rak5811/datasheet/r94.png"
  width="60%"
  caption="R94 and R95 on RAK5811."
/>

:::tip 📝 NOTE 2: RAK5811+RAK4261+RAK5005-O
To combine a RAK5811 module, a RAK4261 (WisBlock Core module), and the RAK5005-O, the following modification must be introduced: 
- In RAK5005-O, remove the R7. See Figure 9. 
- In RAK5811, remove R94 to R95 (see Figure 10). Use PA08 of ATSAMR34 to read the analog data of the channel “analog0”. Use PA09 of ATSAMR34 to read the analog data of channel “analog1”.

This combination has the following restrictions: 
- The adapted RAK5005-O will not support battery power collection. 
:::
