---
rak_desc: Provides comprehensive information about your RAK14003 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak14003/overview/RAK14003_home.png
tags:
  - datasheet
  - wisblock
  - RAK14003
prev: ../Quickstart/
next: false
---

# RAK14003 WisBlock LED Bar Graph Module Datasheet

## Overview

### Description

RAK14003 is an LED Bar Graph that is part of WisBlock Display modules. It consists of 10 configurable LEDs (5 green color LEDs, 3 yellow color LEDs, and 2 red color LEDs). RAK14003 uses the **MCP23017** from Microchip as an I/O Expander and **KEM-102510A-RYG** from Hongke Lighting as the LED bar. Each LED in the module can be controlled separately so the module can build a multipurpose graphic feedback display. 

### Features

- LED Bar Graph module
- 5 green color LEDs, 3 yellow color LEDs，and 2 red color LEDs
- Each LED can be controlled separately
- 3.3&nbsp;V Power supply
- Module size: 25 x 45&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/rak14003_overview.png"
  width="50%"
  caption="RAK14003 Front and Back View"
/>

#### Mounting

The RAK14003 module can be mounted on the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK14003 on a WisBlock Base module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/mounting-mechanism.png"
  width="70%"
  caption="RAK14003 Mounting Mechanism on a WisBlock Base Module"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK14003 WisBlock LED Bar Graph Module.


#### Pin Definition

The RAK14003 module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 3**. 

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/rak14003_pinout.svg"
  width="80%"
  caption="RAK14003 Pinout Schematic"
/>

::: tip 📝 NOTE
- Only **I2C** related pin, **RESET**, **3V3_S**, and **GND** are connected to the WisConnector.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK14003 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK14003 module.
:::  

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK14003 module and its recommended operating conditions. Refer to the table presented below.

##### Absolute Maximum Ratings

| Parameter | Description                     | Min. | Nom. | Max.        | Unit |
| --------- | ------------------------------- | ---- | ---- | ----------- | ---- |
| 3V3_S     | Power Voltage Range             | -0.3 | -    | 5.5         | V    |

##### Power Supply Ratings

| Symbol | Description                | Condition                              | Min. | Nom. | Max. | Unit |
| ------ | -------------------------- | -------------------------------------- | ---- | ---- | ---- | ---- |
| 3V3_S  | Supply Voltage             | Input voltage must within this range   | -    | 3.3  | -    | V    |
| Imax   | Max Current                | Turn ON all LEDs                       | -    | -    | 170  | mA   |

##### LED Parameters

Table below shows the LED parameters. Color Code & Chip Characteristic: (Test Condition: IF=20&nbsp;mA)

<!-- 
**Figure 3** below shows the LED parameters.

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/led-parameter.png"
  width="80%"
  caption="RAK14003 LED Parameters"
/> -->

<table>
<thead>
  <tr>
    <th>Emitting Color</th>
    <th colspan="2">Peak Wavelength</th>
    <th colspan="2">Forward Voltage</th>
    <th>Luminous Intensity <br>IF=20&nbsp;mA (mcd)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td></td>
    <td>(λp)</td>
    <td>Δλ</td>
    <td>Typ</td>
    <td>Max</td>
    <td>Max</td>
  </tr>
  <tr>
    <td>Amber</td>
    <td>605-615</td>
    <td>30</td>
    <td>1.9</td>
    <td>2.4</td>
    <td>30</td>
  </tr>
  <tr>
    <td>Super Green</td>
    <td>565-575</td>
    <td>30</td>
    <td>1.9</td>
    <td>2.4</td>
    <td>80</td>
  </tr>
  <tr>
    <td>Super Red</td>
    <td>625-640</td>
    <td>20</td>
    <td>1.8</td>
    <td>2.3</td>
    <td>100</td>
  </tr>
  <tr>
    <td>High Red</td>
    <td>640-660</td>
    <td>20</td>
    <td>1.8</td>
    <td>2.3</td>
    <td>12</td>
  </tr>
  <tr>
    <td>Yellow Green </td>
    <td>570-580</td>
    <td>30</td>
    <td>2.0</td>
    <td>2.5</td>
    <td>45</td>
  </tr>
  <tr>
    <td>Yellow</td>
    <td>590-600</td>
    <td>35</td>
    <td>2.0</td>
    <td>2.5</td>
    <td>60</td>
  </tr>
  <tr>
    <td>Blue</td>
    <td>465-475</td>
    <td>40</td>
    <td>3.0</td>
    <td>3.5</td>
    <td>200</td>
  </tr>
  <tr>
    <td>Pure Green</td>
    <td>515-525</td>
    <td>40</td>
    <td>3.0</td>
    <td>3.5</td>
    <td>600</td>
  </tr>
  <tr>
    <td>White</td>
    <td></td>
    <td></td>
    <td>3.0</td>
    <td>3.5</td>
    <td>180</td>
  </tr>
</tbody>
</table>

#### Mechanical Characteristics

##### Board Dimensions

**Figure 4** shows the mechanical dimensions of the RAK14003 Module.

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK14003 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

**Figure 6** shows the schematic of the RAK14003 module.

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/rak14003-schematic.png"
  width="100%"
  caption="RAK14003 WisBlock Module Schematics"
/>

##### I/O Expander and LED Bar

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/io-expander.png"
  width="100%"
  caption="RAK14003 I/O Expander and LED Bar"
/>

::: tip 📝 NOTE
- The current-limiting resistances are 68&nbsp;Ω.
:::

##### Device Address Select

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/i2c-address.png"
  width="30%"
  caption="I2C Address Select"
/>

::: tip 📝 NOTE
- You can change the I2C slave address. The default 7-bit I2C address is **0x24**.
:::

##### I2C Pull-up Resistance

The I2C Pull-up resistors already exist on the WisBlock Base, such as the RAK5005-O, not on the RAK14003 module.

<rk-img
  src="/assets/images/wisblock/rak14003/datasheet/i2c-pullup.png"
  width="30%"
  caption="I2C Pull-up Resistance"
/>

