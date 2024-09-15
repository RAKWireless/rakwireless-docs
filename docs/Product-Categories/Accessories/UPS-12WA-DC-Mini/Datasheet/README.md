---
rak_desc: Provides comprehensive information about your 12WA-DC mini UPS to help you use it. This information includes technical specifications and characteristics.
rak_img: /assets/images/accessories/ups-12wa-dc/overview.png
prev: ../Quickstart/
next: false
tags:
  - UPS-12WA-DC Mini
  - datasheet
---

# 12WA-DC Mini UPS Datasheet

## Overview

### Description

The 12WA-DC Mini UPS is a reliable standby power supply with li-ion cells. It is specifically designed for our LoRaWAN gateway (or IoT Devices) with 12V DC input. It features a high-grade battery charging BMS IC with constant-current/constant-voltage for optimal performance.

The Mini UPS is equipped with robust over-charging, over-discharging, over-current, and short-circuit protection mechanisms to ensure the safety of your devices.
This Mini UPS ensures that your equipment remains powered on for 1.5-2 hours during a power outage. It's the ultimate solution to keep your devices running seamlessly, even in challenging circumstances.

### Features

- Rated Capacity：19.2&nbsp;Wh
- Input Voltage: 12&nbsp;V<sub>DC</sub> ±5%
- Input Current: 1&nbsp;A ±0.2 A
- Output Voltage: 12&nbsp;V<sub>DC</sub> ±5%
- Output Current: 1&nbsp;A
- Working Temperature:
  - Charging：0°&nbsp;C ~ +55°&nbsp;C
  - Discharge：-20°&nbsp;C ~ +55°&nbsp;C
- Net Weight: 146&nbsp;g
- Dimension: 100 x 50 x 24&nbsp;mm
- Output DC jack - barrel type 5.5\*2.1&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/accessories/ups-12wa-dc/overview.png"
  width="55%"
  caption="UPS 12WA-DC Mini overview"
/>

#### Functional Diagram

<rk-img
  src="/assets/images/accessories/ups-12wa-dc/3.function-diagram.png"
  width="70%"
  caption="UPS 12WA-DC Mini function diagram"
/>

### Hardware

#### Interfaces

<rk-img
  src="/assets/images/accessories/ups-12wa-dc/diagram.png"
  width="75%"
  caption="UPS 12WA-DC Mini interfaces"
/>

| Number | Label                                   |
| ------ | --------------------------------------- |
| 1      | On/Off button and LED Status Indicators |
| 2      | 5.5 x 2.1&nbsp;mm DC Input Port         |
| 3      | 5.5 x 2.1&nbsp;mm DC Output Port        |

##### LED Indicator Status

| Symbol                                                                 | Description                                                                                                       |
| ---------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Icon](/assets/images/accessories/ups-12wa-dc/lightning.png)     | **RED ON**: The UPS is charging.<br>**RED OFF**: The UPS is fully charged.                                        |
| ![Icon](/assets/images/accessories/ups-12wa-dc/full_battery.png)  | **BLUE ON (without input)**: The UPS is not receiving input power but is providing power to the connected device. |
| ![Icon](/assets/images/accessories/ups-12wa-dc/socket.png)        | **BLUE ON (with input)**: The device is powered by the main supply, and the UPS is not releasing energy.          |
| ![Icon](/assets/images/accessories/ups-12wa-dc/empty_battery.png) | **RED ON (low power)**: The UPS is in a low power state.                                                          |

##### On/Off switch and working modes

| Mode                                            | Description                                                                                                                                                         |
| ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Switch ON/OFF**                               | Controls the power state of the UPS.                                                                                                                                |
| **When UPS is fully charged and input powered** | The UPS automatically switches on when it receives input power and its battery has sufficient charge. If load is connected, the UPS enters work mode automatically. |
| **Switch ON (no input)**                        | Press once to switch on the UPS when there is no input power.                                                                                                       |
| **Switch OFF (no input)**                       | Press twice consecutively to switch off the UPS when there is no input power.                                                                                       |

#### Electrical Characteristics

| Item                                 | Technical Requirements | Remarks                          |
| ------------------------------------ | ---------------------- | -------------------------------- |
| Input voltage                        | 12&nbsp;V ± 5%         | -                                |
| Input current                        | 1&nbsp;A ± 0.2A        | -                                |
| Output voltage range                 | 12&nbsp;V ± 5%         | -                                |
| Output current range                 | 1&nbsp;A               | -                                |
| Output power                         | 12&nbsp;W              | -                                |
| Charging transfer efficiency         | ≥75%                   | -                                |
| No-load voltage range                | 12&nbsp;V ± 5%         | -                                |
| Discharging transfer efficiency      | ≥88%                   | -                                |
| Over-discharged protection (battery) | 2.7&nbsp;V ± 0.2 V     | -                                |
| Over-charged protection (battery)    | 4.3&nbsp;V ± 0.025 V   | Over-charged release 4.15&nbsp;V |
| With load current (battery)          | 1&nbsp;A               | -                                |
