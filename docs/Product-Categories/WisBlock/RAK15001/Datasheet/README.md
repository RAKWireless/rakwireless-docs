---
rak_desc: Provides comprehensive information about your RAK15001 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak15001/overview/RAK15001_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK15001
---

# RAK15001 WisBlock Flash Module Datasheet

## Overview


<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/RAK15001_Illustrated.png"
  width="40%"
  caption="RAK15001 WisBlock Flash Module"
/>



### Description

The RAK15001 is a NOR flash module with a 16&nbsp;MBit (2&nbsp;MByte) nonvolatile memory. It uses GD25Q16CNIG (16&nbsp;Mbit) from GigaDevice with standard SPI interface. In this large memory, you can save big data that your applications need to access frequently, like conversion tables, lookup tables or images, and even sound files. Compared to the EEPROM module, the RAK15001 Flash Memory module has fewer write/erase cycles, so it is not ideal as storage for constantly changing data like for sensor readings.

### Features

* **Sensor specifications**
    * 16&nbsp;Mbit (2&nbsp;MByte) capacity
    * SPI interface: SCLK, CS#, SI, SO, WP#, HOLD#
    * Software/Hardware write protection
    * GigaDevice GD25Q16 chip  
    * Full voltage range: **2.7~3.6&nbsp;V**
    * Standby current less than 5&nbsp;uA
    * Temperature range: **-40&nbsp;°C to +85&nbsp;°C**
    * Chipset: GigaDevice GD25Q16CNIG
  
* **Module Size**
    * 10 x 10&nbsp;mm


## Specifications


### Overview 

#### Mounting 

The RAK15001 module can be mounted on slots A, B, C, or D of the WisBase board. Figure 2 shows the mounting mechanism of the RAK15001 on a WisBlock baseboard, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/RAK15001_mounting.png"
  width="50%"
  caption="RAK15001 WisBlock Flash Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts that cover the chipset and pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and their standard values in terms of electrical and mechanical. 

#### Chipset

| Vendor     | Part Number |
| ---------- | ----------- |
| GigaDevice | GD25Q16CNIG |

#### Pin Definition

The RAK15001 WisBlock EEPROM module comprises a standard WisSensor connector. The WisSensor connector allows the RAK15001 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the Pinout Definition is shown in Figure 3. 

::: tip 📝 NOTE
Only the **VDD**, **GND**, and **Standard SPI** related pins are connected to this module.
:::


<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/RAK15001_Pinout.svg"
  width="60%"
  caption="RAK15001 WisBlock NOR Flash Pinout Diagram"
/>

This table shows WP pin and HOLD pin connections depending on WisBlock sensor slot is used.

| Pin Name | Slot A | Slot B | Slot C | Slot  D |
| -------- | ------ | ------ | ------ | ------- |
| WP       | IO2    | IO1    | IO4    | IO6     |
| HOLD     | IO1    | IO2    | IO4    | IO5     |

The SPI CS, SCK, MOSI and MISO pins are the same on any sensor slot selected.

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol          | Description                 | Min. | Nom. | Max. | Unit |
| --------------- | --------------------------- | ---- | ---- | ---- | ---- |
| V<sub>DD</sub>  | Power supply for the module | 2.7  | 3.3  | 3.6  | V    |
| I<sub>STB</sub> | Standby current             | -    | 1    | 5    | uA   |
| I<sub>DD</sub>  | Operating Current           | -    | -    | 20   | mA   |

#### Mechanical Characteristic

##### Board Dimensions

Figure 4 shows the dimensions and the mechanical drawing of the RAK15001 module.

<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/RAK15001_mechanic_drawing.png"
  width="60%"
  caption="RAK15001 WisBlock NOR Flash Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>


#### Schematic Diagram
  

<rk-img
  src="/assets/images/wisblock/rak15001/datasheet/schematic.png"
  width="100%"
  caption="RAK15001 WisBlock NOR Flash Schematic"
/>