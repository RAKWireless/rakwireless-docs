---
rak_desc: Covers the comprehensive information of your RAK1906 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK1906
prev: ../Quickstart/
next: false
---

# RAK1906 WisBlock Environmental Sensor Datasheet

## Overview

### Description

The RAK1906 WisBlock Environmental Sensor module, part of the RAK WisBlock Sensor series, is a 4-in-1 digital sensor board that comprises gas, humidity pressure, and temperature sensor based on the Bosch® BME680 module. The RAK1906 is ideal for applications such as indoor air quality, home automation, and building IoT solutions. 

### Features 
* **Temperature range**: -40&nbsp;°C to 85&nbsp;°C
* **Humidity range**: 0 to 100%
* **Pressure range**: 300&nbsp;hPa to 1100&nbsp;hPa
* **Gas sensor response time**: < 1&nbsp;sec
* **Gas sensor output**: direct output of IAQ (Indoor Air Quality) index
* **Module size**: 10 x 10&nbsp;mm

## Specifications

### Overview
<!-- Insert Picture of Sensor with its dimensions -->

#### Mounting
The RAK1906 module can be mounted on the slots: A, B, C, or D of a WisBlock Base board. Figure 2 shows the mounting mechanism of the RAK1906 on a WisBlock Base board, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak1906/datasheet/RAK19xx_mounting.png"
  width="50%"
  caption="RAK1906 WisBlock Environmental Sensor Mounting"
/>

### Hardware

#### Chipset

| Vendor | Part number |
| --     | --          |
| BOSCH  | BME680      |

#### Pin Definition
The RAK1906 WisBlock Environmental Sensor module comprises a standard WisIO connector. The WisIO connector allows the RAK1906 module to be mounted on a WisBlock Base board, such as RAK5005-O. The pin order of the connector and the definition of the pinout are shown in Figure 3. 


:::tip 📝 NOTE:
Only the I2C related pin, VDD, and GND are connected to this module. 
:::

<rk-img
  src="/assets/images/wisblock/rak1906/datasheet/RAK1906_connector_pinout.png"
  width="50%"
  caption="RAK1906 WisBlock Environmental Sensor Pinout"
/>


#### Sensors

##### Temperature Sensor

<table  style="text-align: center">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Symbol</th>
    <th>Condition</th>
    <th>Min</th>
    <th>Typ</th>
    <th>Max</th>
    <th>Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Operating Temperature Range</td>
    <td>T<sub>A</sub></td>
    <td>Operational</td>
    <td>-40</td>
    <td>25</td>
    <td>85</td>
    <td>°C</td>
  </tr>
  <tr>
    <td>Supply Current</td>
    <td>I<sub>DD,T</sub></td>
    <td>1&nbsp;Hz Forced Mode, Temperature Measurement Only</td>
    <td></td>
    <td>1.0</td>
    <td></td>
    <td>µA</td>
  </tr>
  <tr>
    <td rowspan="2">Absolute Accuracy Temperature</td>
    <td>A<sub>T,25</sub></td>
    <td>25&nbsp;°C</td>
    <td></td>
    <td>±0.5</td>
    <td></td>
    <td>°C</td>
  </tr>
  <tr>
    <td>A<sub>T,full</sub></td>
    <td>0-65&nbsp;°C</td>
    <td></td>
    <td>±1.0</td>
    <td></td>
    <td>°C</td>
  </tr>
  <tr>
    <td>Output Resolution</td>
    <td>R<sub>T</sub></td>
    <td>API Output Resolution </td>
    <td></td>
    <td>0.01</td>
    <td></td>
    <td>°C</td>
  </tr>
</tbody>
</table>

##### Humidity Sensor

<table style="text-align: center">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Symbol</th>
    <th>Condition</th>
    <th>Min</th>
    <th>Typ</th>
    <th>Max</th>
    <th>Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Operating Range</td>
    <td></td>
    <td></td>
    <td>-40</td>
    <td>25</td>
    <td>85</td>
    <td>°C</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>0</td>
    <td></td>
    <td>100</td>
    <td>% r.H.</td>
  </tr>
  <tr>
    <td rowspan="2">Full Accuracy Range</td>
    <td></td>
    <td></td>
    <td>0</td>
    <td></td>
    <td>65</td>
    <td>°C</td>
  </tr>
  <tr>
    <td></td>
    <td></td>
    <td>10</td>
    <td></td>
    <td>90</td>
    <td>% r.H.</td>
  </tr>
  <tr>
    <td>Supply Current </td>
    <td>I<sub>DD,H</sub></td>
    <td>1 Hz Forced Mode, <br>Temperature and Humidty Measurement</td>
    <td></td>
    <td>2.1</td>
    <td>2.8</td>
    <td>µA</td>
  </tr>
  <tr>
    <td>Absolute Accuracy</td>
    <td>A<sub>h</sub></td>
    <td>20-80% r.H., 25&nbsp;°C, including hysteresis</td>
    <td></td>
    <td>±3</td>
    <td></td>
    <td>% r.H.</td>
  </tr>
</tbody>
</table>

##### Pressure Sensor

<table style="text-align: center">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Symbol</th>
    <th>Condition</th>
    <th>Min</th>
    <th>Typ</th>
    <th>Max </th>
    <th>Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="2">Operating Temperature Range</td>
    <td rowspan="2">T<sub>A</sub></td>
    <td>Operational</td>
    <td>-40</td>
    <td>25</td>
    <td>85</td>
    <td rowspan="2">°C</td>
  </tr>
  <tr>
    <td>Full Accuracy</td>
    <td>0</td>
    <td></td>
    <td>65</td>
  </tr>
  <tr>
    <td>Operating Pressure range</td>
    <td>P</td>
    <td>Full Accuracy</td>
    <td>300</td>
    <td></td>
    <td>1100</td>
    <td>hPa</td>
  </tr>
  <tr>
    <td>Supply Current</td>
    <td>I<sub>DD,LP</sub></td>
    <td>1 Hz Forced Mode, Pressure<br>and Temperature, Lowest Power</td>
    <td></td>
    <td>3.1</td>
    <td>4.2</td>
    <td>µA</td>
  </tr>
  <tr>
    <td rowspan="2">Temperature Coefficient Of Offset</td>
    <td rowspan="2">TCO<sub>P</sub></td>
    <td rowspan="2">25-40&nbsp;°C, 900&nbsp;hPa</td>
    <td></td>
    <td>±1.3</td>
    <td></td>
    <td>Pa,K</td>
  </tr>
  <tr>
    <td></td>
    <td>±10.9</td>
    <td></td>
    <td>cm/K</td>
  </tr>
  <tr>
    <td>Absolute Accuracy Pressure</td>
    <td>A<sub>p,full</sub></td>
    <td>300-1100&nbsp;hPa <br>0-65&nbsp;°C</td>
    <td></td>
    <td>±0.6</td>
    <td></td>
    <td>hPa</td>
  </tr>
</tbody>
</table>

##### AQI Sensor

<table style="text-align: center">
<thead>
  <tr>
    <th>Parameter</th>
    <th>Symbol</th>
    <th>Condition</th>
    <th>Min</th>
    <th>Typ</th>
    <th>Max </th>
    <th>Unit</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>Accuracy Status</td>
    <td>AX<sub>IAQ</sub></td>
    <td>Android Compatible</td>
    <td>0</td>
    <td></td>
    <td>3</td>
    <td></td>
  </tr>
  <tr>
    <td>IAQ Resolution</td>
    <td>IAQ<sub>rs</sub></td>
    <td></td>
    <td></td>
    <td>1</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IAQ Range</td>
    <td>IAQ<sub>rg</sub></td>
    <td></td>
    <td>0</td>
    <td></td>
    <td>500</td>
    <td></td>
  </tr>
  <tr>
    <td>Sensor-to-sensor Deviation</td>
    <td>IAQ<sub>S2S</sub></td>
    <td>All Operation Modes</td>
    <td></td>
    <td>±15%<br>±15</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="2">Durability To Siloxanes </td>
    <td>IAQ<sub>S2S</sub></td>
    <td>Sensor-to-sensor Deviation</td>
    <td></td>
    <td>±15%<br>±15</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>IAQ<sub>drift</sub></td>
    <td>Drift at Low &amp; High Concentrations</td>
    <td></td>
    <td>±1%<br>±4</td>
    <td></td>
    <td></td>
  </tr>
</tbody>
</table>

#### Electrical Characteristics

##### Recommended Operating Conditions

| Symbol            | Description                 | Min. | Nom. | Max. | Unit |
| ----------------- | --------------------------- | :--: | :--: | :--: | :--: |
| V<sub>DD</sub>    | Power supply for the module | 1.71 | 1.8  | 3.6  |  V   |
| I<sub>sleep</sub> | Sleep current               |  -   | 0.15 |  -   |  uA  |
| I<sub>DD</sub>    | Humidity Measure current    |  -   | 340  |  -   |  uA  |
| I<sub>DD</sub>    | Pressure Measure current    |  -   | 714  |  -   |  uA  |
| I<sub>DD</sub>    | Temperature Measure current |  -   | 350  |  -   |  uA  |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK1906 module.

<rk-img
  src="/assets/images/wisblock/rak1906/datasheet/RAK19xx_mechanic_drawing.png"
  width="60%"
  caption="RAK1906 WisBlock Environmental Sensor Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak1906/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

Figure 5 shows the schematic of the RAK1906 module.

<rk-img
  src="/assets/images/wisblock/rak1906/datasheet/rak1906-schematic.png"
  width="100%"
  caption="RAK1906 WisBlock Environmental Sensor schematics"
/>
