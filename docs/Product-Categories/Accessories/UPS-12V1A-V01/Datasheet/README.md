---
rak_desc: Provides comprehensive information about your UPS 12V1A-V01 to help you use it. This information includes technical specifications and characteristics.
rak_img: /assets/images/accessories/ups-12v1a-v01/1.ups-12v1a-v01.png
prev: ../Quickstart/
next: false
tags:
  - UPS-12V1A-V01
  - datasheet

---

# UPS 12V1A-V01 Datasheet

## Overview

### Description

The UPS 12V1A-V01 is a compact Uninterruptible Power Supply (UPS) device designed to provide backup power and protection for small electronic devices. It is commonly used to safeguard sensitive equipment against power outages and voltage fluctuations.

It has safe and environmental friendly lithium-ion cells, a credible and stable PCB, and a trickle/constant-current/constant-voltage lithium battery charging battery management system (BMS) created by a high-performance and efficient DC-DC, boosting, and switching circuit.

Additionally, it has useful features such as over-charged, over-discharged, over-current, and short-circuit protection. This product can power the RAK7268 Gateway device without requiring a main power supply.

### Features

- Rated Capacity：14.8&nbsp;Wh
- Input Voltage: 12&nbsp;V<sub>DC</sub> ±5%
- Input Current: ≤350&nbsp;mA + loading current
- Output Voltage: 12&nbsp;V<sub>DC</sub> ±5%
- Output Current: ≤1000&nbsp;mA
- Working Temperature:
  - Charging：0°&nbsp;C ~ 55°&nbsp;C
  - Discharge：-20°&nbsp;C ~ 65°&nbsp;C
- Net Weight: 153&nbsp;g ~ 350&nbsp;g
- Dimension: 111 x 60 x 26&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/accessories/ups-12v1a-v01/1.ups-12v1a-v01.png"
  width="55%"
  caption="UPS 12V1A-V01 overview"
/>

#### Functional Diagram


<rk-img
  src="/assets/images/accessories/ups-12v1a-v01/3.function-diagram.png"
  width="70%"
  caption="UPS 12V1A-V01 function diagram"
/>


### Hardware

#### Interfaces

<rk-img
  src="/assets/images/accessories/ups-12v1a-v01/2.parts.jpg"
  width="50%"
  caption="UPS 12V1A-V01 parts"
/>


| Number | Label                            |
| ------ | -------------------------------- |
| 1      | 5.5 x 2.5&nbsp;mm DC Output port |
| 2      | 5.5 x 2.1&nbsp;mm DC Input port  |
| 3      | Power On/Off Switch button       |
| 4      | LED Status Indicator             |

##### LED Indicator Status

<table>
  <tr>
    <th>Description (Switch ON)</th>
    <th>Input</th>
    <th>Output</th>
    <th>LED Status</th>
  </tr>
  <tr>
    <td rowspan = "3">Full charged</td>
    <td>Without</td>
    <td>Without</td>
    <td>🟢 Green LED</td>
  </tr>
  <tr>
    <td>With</td>
    <td>With</td>
    <td>🟢 Green LED</td>
  </tr>
  <tr>
    <td>Without</td>
    <td>With</td>
    <td>🟢 Green LED</td>
  </tr>
  <tr>
    <td>Not Full Charged/Low Power</td>
    <td>Without</td>
    <td>With</td>
    <td>🟢 Green LED</td>
  </tr>
  <tr>
    <td>Charging/Low Power</td>
    <td>With</td>
    <td>With</td>
    <td>🔴 Red LED</td>
  </tr>
</table>



#### Electrical Characteristics

| Item                                 | Technical Requirements         | Remarks                            |
| ------------------------------------ | ------------------------------ | ---------------------------------- |
| Input voltage                        | 12&nbsp;V ± 5%                 | -                                  |
| Input current                        | ≤350&nbsp;mA + loading current | -                                  |
| Output voltage range                 | 12&nbsp;v ± 5%                 | -                                  |
| Output current range                 | ≤1000&nbsp;mA                  | -                                  |
| Charging current                     | 350&nbsp;mA ± 10%              | -                                  |
| Charging transfer efficiency         | ≥75%                           | -                                  |
| No-load voltage range                | 12&nbsp;V ± 5%                 | -                                  |
| Discharging transfer efficiency      | ≥85%                           | -                                  |
| Over-discharged protection (battery) | 6.0&nbsp;V                     | Over-discharged release 6.3&nbsp;V |
| Over-charged protection (battery)    | 8.5&nbsp;V                     | Over-charged release 8.25&nbsp;V   |
| With load current (battery)          | ≤1000&nbsp;mA                  | -                                  |
