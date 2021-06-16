---
rak_desc: Covers the comprehensive information of your RAK1910 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK1910
prev: ../Quickstart/
next: false
---

# RAK1910 WisBlock GNSS Location Module Datasheet

## Overview

### Description

The RAK1910 WisBlock GNSS Location Module module, part of the RAK Wireless Wisblock series, is a u-blox MAX-7Q GNSS (GPS, GLONASS, QZSS, and SBAS) module. This module features exceptional performance, high sensitivity, and minimal acquisition time which makes it suitable for low-power IoT solutions.
The RAK1910 positioning module is a GNSS receiver. It receives and tracks the GPS (including SBAS and QZSS) and the GLONASS signals. QZSS and SBAS signals (by default) can be received concurrently with GPS signals.

### Features 
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
The RAK1910 module can be mounted only in Slot A of the WisBase board. Figure 1 shows the mounting mechanism of the RAK1910 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_mounting.png"
  width="50%"
  caption="RAK1910 WisBlock GNSS Location Module Mounting"
/>

### Hardware

#### Chipset

| Vendor | Part number |
| --     | --          |
| uBlox  | MAX-7Q      |

#### Pin Definition

The RAK1910 WisBlock GNSS Location Module module comprises a standard WisIO connector. The WisIO connector allows the RAK1910 module to be mounted on a WisBlock baseboard, such as RAK5005. The pin order of the connector and the definition of the pinout are shown in Figure 2.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_pin.png"
  width="70%"
  caption="RAK1910 WisBlock GNSS Location Module Pinout Diagram"
/>

::: tip 📝 NOTE
- Only the **UART** related pin, **1PPS** pin, **RESET** pin, **VDD**, and **GRD** are connected to this module. 
- The RAK1910 module can be installed in the slot A only.
:::

- The RAK1910 module can be installed in the Slot A only.
:::

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

| Symbol           | Description                 | Min. | Nom. | Max. | Unit |
| ---------------- | --------------------------- | :--: | :--: | :--: | :--: |
| V<sub>DD</sub>   | Power supply for the module | 2.7  | 3.0  | 3.6  |  V   |
| I<sub>BCKP</sub> | Backup battery current      |  -   |  15  |  -   |  uA  |
| I<sub>cc</sub>   | Acquisition                 |  -   |  22  |  -   |  mA  |
| I<sub>cc</sub>   | Tracking                    |  -   | 17.5 |  -   |  mA  |

#### Mechanical Characteristics

##### Board Dimensions

Figure 3 shows the dimensions and the mechanic drawing of the RAK1910 module.

<rk-img
  src="/assets/images/wisblock/rak1910/datasheet/RAK1910_mechanic_drawing.png"
  width="60%"
  caption="RAK1910 WisBlock GNSS Location Module Mechanic Drawing"
/>

:::tip 📝 NOTE:
Slot for mounting: **Slot A**
1. Because the RAK1910 is double in size and uses the serial connection to the WisBlock Core module, it can be only installed in the RAK5005-O Slot A.
:::

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
