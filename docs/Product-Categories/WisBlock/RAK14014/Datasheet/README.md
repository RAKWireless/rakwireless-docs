---
rak_desc: Covers the comprehensive information of your RAK14014 WisBlock TFT LCD Display Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14014/overview/RAK14014.png
tags:
  - datasheet
  - wisblock
  - RAK14014
prev: ../Overview/
next: false
---

# RAK14014 WisBlock TFT LCD Display Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/rak14014-front-back.png"
  width="60%"
  caption="RAK14014 WisBlock TFT LCD Display Module"
/>

### Description

RAK14014 is a WisBlock Display module based on IPS TFT LCD. A touchscreen display that has a 2.4-inch active area and contains 240&nbsp;x&nbsp;320 pixels which can output colorful graphic displays. It is interfaced to WisBlock Core via SPI.

### Features

* **Module Specifications**
    * Wide Supply Voltage Range:
        - I/O Voltage (VDDI to DGND): 1.65&nbsp;V ~ 3.3&nbsp;V (VDDI ≦ VDD )
        - Analog Voltage (VDD to AGND): 2.4&nbsp;V ~ 3.3&nbsp;V
    * Operating current: 80&nbsp;
    * Touchscreen LCD
    * SPI interface
    * LCD size: 2.4&nbsp;inch
    * 240&nbsp;x&nbsp;320 pixel display
    * IPS TFT-LCD
    * Full view direction
    * The backlight type is 4 x LED (white)
    * Single chip TFT-LCD Controller/Driver with On-chip Frame Memory (FM)
    * Display Colors (Color Mode)
        - Full Color: 262K, RGB=(666) max., Idle Mode Off
        - Color Reduce: 8-color, RGB=(111), Idle Mode On
    * Operating temperature: **-30°&nbsp;C to 85°&nbsp;C**

* **Module Size**
    * 35 x 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK14014 WisBlock TFT LCD Display Module can be mounted on the IO slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK14014 on a WisBlock Base module.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/rak14014-mount.png"
  width="50%"
  caption="RAK14014 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK14014 WisBlock TFT LCD Module.


#### Pin Definition

The RAK14014 WisBlock module has a 40-pin WisConnector that is compatible with the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/rak14014-pinout.png"
  width="40%"
  caption="RAK14014 pinout diagram"
/>

::: tip 📝 NOTE
Only **CS**, **SPI_MISO**, **SPI_MOSI**, **SPI_CLK**, **IO3 - IO6**, **SCL**, and **SDA** are connected to the WisBlock Connector.
:::

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK14014 module and its recommended operating conditions. Refer to the table presented below.

##### DC Characteristics

The following specifications applied for: VSS=0&nbsp;V, VCI=3.3&nbsp;V, TOPR =25°&nbsp;C.

| Symbol          | Description       | Min. | Typ. | Max. | Unit |
| --------------- | ----------------- | ---- | ---- | ---- | ---- |
| VIO             | I/O Voltage       | 1.65 | -    | 3.3  | V    |
| A<sub>VDD</sub> | Analog Voltage    | 2.4  | -    | 3.3  | V    |
| I<sub>OP</sub>  | Operating Current | -    | 80   | -    | mA   |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the mechanical dimensions of the RAK14014 module.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/rak14014-dim.png"
  width="70%"
  caption="RAK14014 mechanical dimensions"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>

#### Schematic Diagram

**Figure 5** shows the display connector schematic.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/display-conn.png"
  width="55%"
  caption="Display Connector Schematic diagram"
/>

**Figure 6** shows the touch connector schematic.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/touch-conn.png"
  width="55%"
  caption="RAK14014 WisBlock Touch Drive Circuit"
/>

The RAK14014 supports 2*3 thin-film buttons. If an FPC cable is connected, you can choose the
touch-free version to control the screen by pressing buttons. **Figure 7** below shows button
schematic.

<rk-img
  src="/assets/images/wisblock/rak14014/datasheet/button-conn.png"
  width="100%"
  caption="RAK14014 WisBlock Display Module buttons"
/>