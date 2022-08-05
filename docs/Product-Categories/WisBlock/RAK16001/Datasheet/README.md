---
rak_desc: Covers the comprehensive information of your RAK16001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak16001/overview/RAK16001_home.png
tags:
  - datasheet
  - wisblock
  - RAK16001
prev: ../Quickstart/
next: false
---

# RAK16001 WisBlock ADC Module Datasheet

## Overview

### Description

The RAK16001 is an Analog-to-Digital (ADC) module, which uses an ADS7830 from Texas Instruments that can measure 8-independent voltages or 4-independent differential voltages. The ADS7830 is an 8-bit ADC module that features a serial I2C interface and an 8-channel multiplexer with one sample-and-hold amplifier circuit.

### Features

- ADC Module: 8 Single-ended Inputs or 4 Differential Inputs
- 70&nbsp;kHz Sampling Rate
- ±0.5&nbsp;LSB INL/DNL
- 8 Bits no missing codes
- 3.3&nbsp;V Power supply
- Internal voltage reference at 2.5&nbsp;V
- Chipset: Texas Instruments ADS7830
- Module size: 25 X 45&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK16001 module can be mounted on the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK16001 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK16001 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK16001 WisBlock ADC Module.

#### Chipset

| Vendor            | Part number  |
| ----------------- | ------------ |
| Texas Instruments | ADS7830      |

#### Pin Definition

The RAK16001 module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/rak16001_pinout.svg"
  width="70%"
  caption="RAK16001 Pinout Diagram"
/>

::: tip 📝 NOTE
- Only **I2C** related pins, **3V3_S** and **GND** are connected to the WisConnector of this module.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK16001 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK16001 module.
:::  

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK16001 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol | Description            | Condition                       | Min. | Nom. | Max.    | Unit |
| ------ | -----------------------| --------------------------------| ---- | -----| ------- | ---- |
| 3V3_S  | VDD                    | Normal operation                | -    | 3.3  | -       | V    |
| VREF   | ADC Voltage Reference  | Normal operation                | -    | 2.5  | -       | V    |
| U1     | Full-Scale Input Scan  | Positive Input – Negative Input | 0    | -    | VREF    | V    |
| U2     | Absolute Input Range   | Positive Input                  | –0.2 | -    | VDD+0.2 | V    |
| U3     | Absolute Input Range   | Negative Input                  | –0.2 | -    | +0.2    | V    |


#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK16001 module are shown in **Figure 3** below.

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK16001 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

##### PCB Silkscreen

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/silkscreen.png"
  width="30%"
  caption="RAK16001 PCB Silkscreen"
/>

#### Schematic Diagram

**Figure 5** shows the schematic of the RAK16001 module.

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/rak16001-schematic.png"
  width="100%"
  caption="RAK16001 WisBlock Module Schematics"
/>

##### ADC Voltage Reference

**Figure 6** shows the reference voltage of 3&nbsp;V.

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/voltage-ref.png"
  width="35%"
  caption="RAK16001 ADC Voltage Reference"
/>

##### ADC Converter

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/adc-converter.png"
  width="70%"
  caption="RAK16001 ADC Converter"
/>

::: tip 📝 NOTE
- R3-R20 are built for the voltage divider resistors that can expand the measure range. By default, this feature is disabled and not used. If you want to have input more than 3.3&nbsp;V, change the value of these resistors.
:::

##### I2C Device Address Select

You can change the I2C slave address. By default, the 7-bit I2C address is **0x48**.

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/i2c-select.png"
  width="20%"
  caption="RAK16001 I2C Address Select"
/>

##### I2C Pull-Up Resistance

<rk-img
  src="/assets/images/wisblock/rak16001/datasheet/i2c-pullup.png"
  width="30%"
  caption="RAK16001 I2C Pull-up Resistance"
/>

::: tip 📝 NOTE
- The built-in I2C pull-up resistors are on the WisBlock Base module and not on the RAK16001.
:::

