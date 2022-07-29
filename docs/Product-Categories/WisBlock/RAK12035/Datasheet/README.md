---
rak_desc: Covers the comprehensive information of your RAK12035 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12035/overview/RAK12035_home.png
tags:
  - datasheet
  - wisblock
  - RAK12035
prev: ../Quickstart/
next: false
---

# RAK12035 WisBlock Soil Moisture Sensor Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/RAK12035.png"
  width="60%"
  caption="RAK12035 WisBlock Soil Moisture Sensor Probe"
/>

### Description

RAK12035 is a soil sensor probe module based on the ATTINY441-SSU microcontroller from Atmel. It uses capacitive sensing to measure moisture. A 1&nbsp;MHz square wave is the output from the chip through a resistor into a big pad, and the surrounding ground plane acts as a parasitic capacitor. Both the resistor and the capacitor form a low-pass filter whose cutoff frequency changes when there is a change in capacitance. 

The soil around the sensor acts as an electrolyte whose dielectric constant changes depending on the amount of moisture in it, resulting in changing the capacitance of our makeshift capacitor too. The filtered square wave is fed into a peak detector, formed by a diode and capacitor. The diode allows the positive peaks to go through, while the capacitor stores the maximum voltage of those peaks. The voltage is measured by an ADC in the MCU. An NTC element is used to measure the temperature of the soil.

RAK12035 is a separate soil moisture sensor probe that can be connected to the RAK12023 module.

Because you need to bury the RAK12035 sensor probe into the soil, the electronics on the PCB of the soil sensor, together with the cable, are covered by a shrinkable tube for additional protection from getting wet.

### Features

- Separate connector PCB [RAK12023](/Product-Categories/WisBlock/RAK12023/Overview/) is required.
- Measures soil moisture
- I2C address is programmable
- Calibration via software
- Chipset: Atmel ATTINY441-SSU
- Module size: 18.1 x 149&nbsp;mm

## Specifications

### Hardware

The hardware specification is categorized into three (3) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK12035 WisBlock Soil Moisture Sensor Module.

####  Chipset

| Vendor | Part number   |
| ------ | ------------- |
| Atmel  | ATTINY441-SSU |


#### Pin Definition

The pin order of the connector and the pinout definition of the RAK12035 is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/rak12035-pinout.png"
  width="40%"
  caption="RAK12035 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only **I2C** related pin, **SENSE_HIGH**, **3V3**, and **RESET** are connected to the module.
:::  

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the board dimensions of the RAK12035 Module.

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/board-dimensions.png"
  width="35%"
  caption="RAK12035 Board Dimensions"
/>


#### Schematic Diagram

**Figure 4** shows the schematic of the RAK12035 module.

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/rak12035-schematic.png"
  width="100%"
  caption="RAK12035 WisBlock Module Schematics"
/>

##### MCU Configuration Circuit

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/mcu-config.png"
  width="70%"
  caption="MCU Configuration Circuit"
/>

##### Sensor Circuit

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/sensor-circuit.png"
  width="40%"
  caption="Sensor Circuit"
/>

##### Thermistor

<rk-img
  src="/assets/images/wisblock/rak12035/datasheet/thermistor.png"
  width="20%"
  caption="Thermistor"
/>