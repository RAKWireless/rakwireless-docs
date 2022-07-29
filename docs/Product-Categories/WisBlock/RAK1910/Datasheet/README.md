---
rak_desc: Provides comprehensive information about your RAK1910 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device's components.
rak_img: /assets/images/wisblock/rak1910/overview/RAK1910_home.png
tags:
  - datasheet
  - wisblock
  - RAK1910
prev: ../Quickstart/
next: false
---

# RAK1910 WisBlock GNSS Location Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910.svg"
  width="50%"
  caption="RAK1910 WisBlock GNSS Location Module"
/>

### Description

The RAK1910 WisBlock GNSS Location Module module, part of the RAK Wireless Wisblock series, is a u-blox MAX-7Q GNSS (GPS, GLONASS, QZSS, and SBAS) module. This module features exceptional performance, high sensitivity, and minimal acquisition time, which makes it suitable for low-power IoT solutions. The RAK1910 positioning module is a GNSS receiver. It receives and tracks the GPS (including SBAS and QZSS) and the GLONASS signals. QZSS and SBAS signals (by default) can be received concurrently with GPS signals.

### Features
* **Voltage Supply**: 3.3&nbsp;V
* **Current Consumption**: 15&nbsp;uA to 22&nbsp;mA
* **Chipset**: u-Blox MAX-7Q
* High accuracy of 2.5&nbsp;m
* **Update rate**: 10&nbsp;Hz
* **Velocity accuracy**: 0.1&nbsp;m/s
* **Heading accuracy**: 0.5 degrees
* Fast location fix. 29&nbsp;sec from cold start to first fix. 1&nbsp;sec from hot start
* GPS and GLONASS satellite support
* **Module size**: 10 x 23&nbsp;mm

## Specifications
### Overview
<!-- Insert Picture of Sensor with its dimensions -->

#### Mounting

**Figure 2** shows the mounting mechanism of the RAK12001 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK12001 module can be mounted on the slots: **A, E, F**.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_mounting.png"
  width="50%"
  caption="RAK1910 WisBlock GNSS Location Module Mounting"
/>

### Hardware

The hardware specification is categorized into six parts. It shows the chipset of the module and discusses the pinouts, sensors, and the corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK1910 WisBlock GNSS Location Module.

####  Chipset
| Vendor | Part number |
| ------ | ----------- |
| u-Blox | MAX-7Q      |

#### Pin Definition

The RAK1910 WisBlock GNSS Location Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK1910 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_pin.png"
  width="60%"
  caption="RAK1910 WisBlock GNSS Location Module Pinout Diagram"
/>

::: tip 📝 NOTE
- Only the **UART**-related pins, **1PPS** pin, **RESET** pin, **VDD**, and **GND** are connected to this module.
- The RAK1910 module can be installed in the Slot A only.
:::

If a 24-pin WisBlock Sensor connector is used, the IO used for the output pulse depends on what slot the module is plugged in. The following table shows the default IO used for different slots:

| SLOT A | SLOT E | SLOT F |
| ------ | ------ | ------ |
| WB_IO1 | WB_IO4 | WB_IO6 |


#### Sensors
##### GNSS Sensor
<table style="text-align: center">
<thead>
  <tr>
    <th>Parameter</th>
    <th colspan="3">Specification</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td rowspan="3">Receiver Type</td>
    <td>56 Channels u-blox 7 engine</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>GPS/QZSS L1C/A</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td>SBAS: WAAS, EGNOS, MSAS</td>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td rowspan="5">Time-To -First-Fix</td>
    <td></td>
    <td>MAX-7QW</td>
    <td>MAX-7C</td>
  </tr>
  <tr>
    <td>Cold Start</td>
    <td>29s</td>
    <td>30s</td>
  </tr>
  <tr>
    <td>Warm Start</td>
    <td>28s</td>
    <td>28s</td>
  </tr>
  <tr>
    <td>Hot Start</td>
    <td>1s</td>
    <td>1s</td>
  </tr>
  <tr>
    <td>Aided Starts</td>
    <td>5s</td>
    <td>5s</td>
  </tr>
  <tr>
    <td rowspan="6">Sensitivity</td>
    <td></td>
    <td>MAX-7QW</td>
    <td>MAX-7C</td>
  </tr>
  <tr>
    <td>Tracking &amp; Navigation</td>
    <td>-161&nbsp;dBm</td>
    <td>-160&nbsp;dBm</td>
  </tr>
  <tr>
    <td>Reacquisition</td>
    <td>-160&nbsp;dBm</td>
    <td>-160&nbsp;dBm</td>
  </tr>
  <tr>
    <td>Cold Start</td>
    <td>-148&nbsp;dBm</td>
    <td>-147&nbsp;dBm</td>
  </tr>
  <tr>
    <td>Warm Start</td>
    <td>-148&nbsp;dBm</td>
    <td>-148&nbsp;dBm</td>
  </tr>
  <tr>
    <td>Hot Start</td>
    <td>-156&nbsp;dBm</td>
    <td>-155&nbsp;dBm</td>
  </tr>
  <tr>
    <td>Horizontal Position Accuracy</td>
    <td>Autonomous</td>
    <td>2.5&nbsp;m</td>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td>SBAS</td>
    <td>2.0&nbsp;m</td>
    <td></td>
  </tr>
</tbody>
</table>

#### Electrical Characteristics

##### Recommended Operating Conditions
| Symbol           | Description                 | Min.  | Nom.  | Max.  | Unit  |
| ---------------- | --------------------------- | :---: | :---: | :---: | :---: |
| V<sub>DD</sub>   | Power supply for the module |  2.7  |  3.3  |  3.6  |   V   |
| I<sub>BCKP</sub> | Backup battery current      |   -   |  15   |   -   |  uA   |
| I<sub>cc</sub>   | Acquisition                 |   -   |  22   |   -   |  mA   |
| I<sub>cc</sub>   | Tracking                    |   -   | 17.5  |   -   |  mA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanic drawing of the RAK1910 module.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_mechanic_drawing.png"
  width="60%"
  caption="RAK1910 WisBlock GNSS Location Module Mechanic Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram
Figure 5 shows the schematic of the RAK1910 module.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/rak1910_schematic.png"
  width="100%"
  caption="RAK1910 WisBlock GNSS Location Module Schematic"
/> 
