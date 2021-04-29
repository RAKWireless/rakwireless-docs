---
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
---

# RAK5801 WisBlock 4-20mA Interface Module Datasheet

## Overview

### Description

The RAK5801 WisBlock Interface module, was designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. 

The RAK5801 is a 4-20mA current loop extension module that allows the users to make a IoT solution for analog sensors with 4-20mA interface. This module converts the 4-20mA current signal into voltage range supported by the WisBlock Core module (MCU) for further digitalization and data transmission.

The RAK5801 module features two input channels of 4-20mA. Inside, a high precision operational amplifier is used for signal amplification and conversion and supports a wide range of operating temperatures. 

This module integrates a 12V power supply, which can be used  to power external sensors. The RAK5801 can be connected to 2-wire, 3-wire or 4-wire types of 4-20mA sensor. The module external interface is reached by a fast crimping terminal that allow connection for the 4-20mA sensors (including power) and to I2C bus. The fast crimping terminals  can be used without the need of special tools, which simplifies the installation process on the field.

### Features

-	Two 4-20&nbsp;mA analog inputs.
-	Compatible with multiple WisBlock Core modules, such as RAK4631.
-	0.005&nbsp;mA conversion accuracy.
-	Supports low power consumption mode. The module can be powered off by the WisBlock Core module for saving energy during idle periods.
-	12&nbsp;V output to  power external sensors.
-	Reserved I2C expansion interface.
-	Fast crimping terminals.
-	Designed with a 2&nbsp;kV ESD protection level.
-	Small dimensions of 35&nbsp;mm x 25&nbsp;mm.

## Specifications

### Overview


The overview discusses the block diagram of the board. It also shows the installation mechanism on how to mount the board into the baseboard.


#### Block Diagram

The RAK5801 module was designed to convert 4-20mA current signals into voltage signals by applying a sampling resistor. As shown in Figure 1, the input current signal from the sensor is conditioned by an operational amplifier to match the level supported by the ADC input of an MCU where the signal is digitized.


<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/RAK5801-block-diagram.png"
  width="70%"
  caption="RAK5801 Block Diagram"
/>

Once the signal is digitalized, the user can recover the original current value by applying the following formula:

``I = U/149``

Where **U** is the ADC reading and **I** the sensor current.

As shown in Figure 1, the module provides an output of 12V for powering passive 4-20mA sensors. This 12V output is boosted by an internal DC-DC booster. The enable pin allows to control the power conversion module and set the RAK5801 module into a low power consumption mode. 


#### Installation

##### Mounting Mechanism

The RAK5801 module is part of the WisBlock Interface category, which connects to the baseboard through the IO slot. The installation method is shown in the Figure 2.

1. Keep the RAK5801 module parallel to the baseboard, and gently place and plug  WisConnector into the IO slot receptacle of the baseboard. The IO slot has an outer silkscreen on it to assist with the alignment. At this point, apply force evenly along the module and press again. There will be a sound to confirm the successful completion of the attachment process. 

:::tip 📝 NOTE:
For detailed instructions, refer to the [WisBlock Installation Guide](/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/).
:::

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/wisconnector.png"
  width="50%"
  caption="WisConnector"
/>

2. Secure the RAK5801 module with **3 x M1.2 x3 pan head screws** as shown in Figure 3 below.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK5801 mounting mechanism on a WisBlock Base module"
/>

##### RAK5801 Fast Crimping Terminal Mechanism

The RAK5801 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The fast-crimping terminal can support cable with a width between 20 AWG to 24 AWG. The usual stripping length is around 6 to 7 mm. 

As shown in Figure 4, during the crimping process, the user should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, then release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/crimping-process.png"
  width="40%"
  caption="RAK5801 Sensor Connector"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the board and its functionalities and diagrams.

#### Device Specification

The following table shows the parameters and the description of the RAK5801 WisBlock 4-20mA Interface Module:

| **Parameter** | **Description** | 
| ---- | ---- | 
| Analog Input Interface | 2 channels of 4-20mA | 
| Analog Sampling Resolution | 0.005mA | 
| Analog Sampling Accuracy | 1% | 
| Analog Maximum Input Current | 25mA (There is a risk to burn the circuit surpassing this limit) | 
| Analog Port ESD Protection Level | 2kV HBM | 
| Current Sampling Resistor | 49.9 Ω | 
| Operational Amplifier Gain | 3.0 | 
| Input Voltage | 3.0V – 3.6V | 
| Output Voltage | 12V | 
| Output Current | Maximum 30mA | 
| Operating Temperature | -30° C ~ 65° C | 
| Storage Temperature | -40°C ~ 85°C | 
| Module Dimensions | 35x25mm | 


#### Pin Definition

This section covers the pin number of the sensor connector, the definition, and the functionalities of each pin shown in a tabular representation.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/RAK5801-pinout.png"
  width="60%"
  caption="RAK5801 Sensor Connector"
/>

| **Pin Number** | **Function Description** | 
| ---- | ---- | 
| 1 | SCL of the I2C interface | 
| 2 | SDA of the I2C interface | 
| 3 | 3V3 output | 
| 4 | VBAT, Battery output | 
| 5 | 12V output for external sensors | 
| 6 | GND | 
| 7 | Analog input 0 | 
| 8 | Analog input 1 | 


Figure 6 shows the pin order for the IO connector of the module. Through this connector, the RAK5801 module is attached to the WisBoard baseboard. 

<br>

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/rak5801-internal-wisio-connector.svg"
  width="60%"
  caption="RAK5801 Internal WisIO Connector"
/>

<br>

The functionalities of each pins of the WisIO connector are tabulated below.

| **Pin Number** | **Description** | **Pin Number** | **Description** | 
| ---- | ---- | ---- | ---- | 
| 1 | Battery Power | 2 | Battery Power | 
| 3 | GND | 4 | GND | 
| 5 | NC, reserved for 3V3 | 6 | 3.3V Power | 
| 7 | NC | 8 | NC | 
| 9 | NC | 10 | NC | 
| 11 | NC | 12 | NC | 
| 13 | NC | 14 | NC | 
| 15 | NC | 16 | NC | 
| 17 | NC | 18 | NC | 
| 19 | SDA for I2C1 | 20 | SCL for I2C1 | 
| 21 | NC | 22 | Analog to MCU | 
| 23 | NC | 24 | NC | 
| 25 | NC | 26 | NC | 
| 27 | NC | 28 | NC | 
| 29 | Enable note1 | 30 | NC | 
| 31 | NC | 32 | Analog0 to MCU | 
| 33 | NC | 34 | NC | 
| 35 | NC | 36 | NC | 
| 37 | NC | 38 | NC | 
| 39 | GND | 40 | GND | 

:::tip 📝 NOTE:
This signal controls the dc-dc power supply on RAK5801, before capturing analog signal, set this pin to high to enable power for RAK5801.
:::

#### Mechanical Characteristics

##### Board Dimensions

Refer to Figure 7 below for the mechanical dimensions of the RAK5801 module.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/mechanical-dimensions.png"
  width="80%"
  caption="RAK5801 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK5801 Schematic Diagram"
/>

## Typical Application

### Two-wire sensor

 For 2-wire 4-20mA sensor，as shown in Figure 10, 
 1. Connect sensor（+）to VCC (Pin5)  of  RAK5801
 2. Connect sensor ( - ) to AIN0 or AIN1 of the RAK5801 module.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/two-wire.png"
  width="20%"
  caption="RAK5801 with 2-wire 4-20mA sensor."
/>

### Four-wire Sensor

For 4-wire sensor, as shown in Figure 11

1. Use an external power supply to the power the sensor.
2. Connect the output of the sensor to AIN0 or AIN1 of RAK5801.

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/four-wire.png"
  width="25%"
  caption="RAK5801 with 4-wire 4-20mA sensor."
/>

## WisBlock Compatability


Since a WisBlock module can be combined with a variety of different functional modules, the pin functions of the MCU are multiplexed, so the interface expansion module for each specific function may need to be properly adapted for the WisBlock. The compatibility details of the RAK5801 module are as shown in the Table below:

| **WisBlock Module** | **Adaptable Module** | **Description** | 
| ---- | ---- | ---- | 
| WisBase Base board | RAK5005/RAK5005-O | RAK5801 is designed to be assembled in the IO slot of RAK5005-O baseboard. | 
| WisBlock Core Module | RAK4631 | RAK5801 is compatible with RAK4631. | 
|  | RAK4201 | Please select RAK4201L-ADC for the low band or RAK4201H-ADC for the high band. | 
|  | RAK4202 | Please refer to Note 2 for hardware adaptions to the RAK5005-O and RAK5801. | 
|  | RAK4261 | Please refer to Note 3 for hardware adaptions to the RAK5005-O and RAK5801. | 

:::tip 📝 NOTE 1:  The RAK5801+RAK4601
The RAK5801 is not compatible with RAK4601. The main reason is because RAK4601 doesn’t expose any ADC pin through the RAK5005-O baseboard.
:::

:::tip 📝 NOTE 2:  RAK5801+RAK4202+RAK5005-O
In order to combine a RAK5801 module, a RAK4202 (WisBlock Core module), and the RAK5005-O, the following modification must be introduced: 
-	In RAK5005-O, remove the R7. The R7 resistor is shown in **Figure 12.**
-	In RAK5801, remove R94 to R95, and use PA0 of STM32L151 to read the analog data of the channel “analog0”, and use PA2 of STM32L151 to read the analog data of Channel analog1. **Figure 13** shows the resistors R94 and R95 on the RAK5801 module.

This combination has the following restrictions: 
-	The adapted RAK5005-O module will not able to sense the battery voltage anymore. 
:::

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/r7.png"
  width="50%"
  caption="R7 on RAK5005-O"
/>

<rk-img
  src="/assets/images/wisblock/rak5801/datasheet/r94.png"
  width="50%"
  caption="R94 and R95 on RAK5801."
/>

:::tip 📝 NOTE 3: RAK5801+RAK4261+RAK5005-O
In order to combine a RAK5801 module, a RAK4261(WisBlock Core module), and the RAK5005-O, the following modification must be introduced: 
-	In RAK5005-O, remove the R7. See Figure 12. 
-	In RAK5801, remove R94 to R95 (see Figure 13), and use PA08 of ATSAMR34 to read the analog data of the channel “analog0”, and use PA09 of ATSAMR34 to read the analog data of Channel analog1.

This combination has the following restrictions: 
-	The adapted RAK5005-O module will not able to sense the battery voltage anymore. 
:::