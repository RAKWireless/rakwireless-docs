---
rak_desc: Provides comprehensive information about your UPS PoE-03 to help you use it. This information includes technical specifications, characteristics, and battery information.
rak_img: /assets/images/accessories/ups-poe-03/1.ups-poe-03.png
prev: ../Quickstart/
next: false
tags:
  - UPS-PoE-03
  - datasheet

---

# UPS PoE-03 Datasheet

## Overview

### Description

The UPS PoE-03 is a specialized Uninterruptible Power Supply (UPS) device designed specifically for Power over Ethernet (PoE) applications, providing backup power and protection to PoE-powered devices. It has useful features such as surge protection, voltage regulation, and intelligent battery management. It also has intelligent adapter power capability detection and overcurrent buck control.

When the output current exceeds the rated current, the output voltage drops and the output power is adjusted; when the output current exceeds 5% of the rated current, the overcurrent protection is triggered.

This product provides power to the RAK7268 Indoor Gateway and the RAK7289 Outdoor Gateway without requiring a main power supply.

### Features

- Input：100-240&nbsp;V<sub>AC</sub> (50~60&nbsp;Hz)
- Output:
  - 48&nbsp;V<sub>DC</sub> 0.23&nbsp;A
  - 9~12&nbsp;V<sub>DC</sub> 3&nbsp;A
  - 5&nbsp;V<sub>DC</sub> 1.5&nbsp;A
- Offers intelligent recognition of adapter power capability
- Supports overcurrent buck regulation
- Supports adjustment of small current charging based on voltage drop switching, with small switching changes and short switching time
- Supports low battery warning signal for lithium batteries, external power supply, or lithium battery power supply warning signal
- The internal lithium battery pack has comprehensive protection against overcharging, discharging, overcurrent, short circuit
- Support hardware, MCU control, and other multiple protection
- Net Weight：265&nbsp;g
- Dimension: 105 x 105 x 27.5&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/accessories/ups-poe-03/3.function-diagram.png"
  width="70%"
  caption="UPS PoE-03 function diagram"
/>

### Hardware

#### Interfaces

<rk-img
  src="/assets/images/accessories/ups-poe-03/2.parts.png"
  width="60%"
  caption="UPS PoE-03 parts"
/>

| Number | Label                                                      |
| ------ | ---------------------------------------------------------- |
| 1      | Working Indicator                                          |
| 2      | Power On/Off Switch                                        |
| 3      | Charging Indicator                                         |
| 4      | 110-240&nbsp;V<sub>AC</sub> Power Input port               |
| 5      | 5&nbsp;V<sub>DC</sub> 1.5&nbsp;A Output port               |
| 6      | 9~12&nbsp;V<sub>DC</sub> 3&nbsp;A Output port              |
| 7      | LAN IN                                                     |
| 8      | 48.0&nbsp;V<sub>DC</sub> 0.23&nbsp;A Output port (LAN OUT) |

| Port                                  | Specification                            |
| ------------------------------------- | ---------------------------------------- |
| Input Port AC 110&nbsp;V ~ 240&nbsp;V | US/EU/UK 8 digit-character AC power port |
| Output no-load voltage                | 5.5 x 2.5&nbsp;mm DC Female connector    |
| Average output conversion efficiency  | 5.5 x 2.5&nbsp;mm DC Female connector    |
| Output current                        | RJ45 (LAN OUT)                           |

##### LED Indicator Status

| LED | Status              |
| --- | ------------------- |
| 🟢   | Device is ON.       |
| 🔴   | Device is charging. |

- Short press the switch button turns on/off the device.
- No input: Shuts down when the battery voltage falls 9&nbsp;V
- No external input: Battery voltage below 9&nbsp;V shuts down output. Green light turns off.
- Charging the device turns on the red LED and automatically turns off when it's full charged.


#### Electrical Characteristics

| Item                                 | Min.       | Typical                                                                                                         | Max.       | Unit |
| ------------------------------------ | ---------- | --------------------------------------------------------------------------------------------------------------- | ---------- | ---- |
| Power input port voltage             | 110&nbsp;V | 220&nbsp;V                                                                                                      | 240&nbsp;V | V    |
| Output no-load voltage               | 5&nbsp;V   | 5&nbsp;V + 9&nbsp;V + 12&nbsp;V + 48&nbsp;V                                                                     | 48&nbsp;V  | V    |
| Average output conversion efficiency | -          | ≥85%                                                                                                            | -          | -    |
| Output current                       | -          | 48&nbsp;V<sub>DC</sub> 0.23&nbsp;A <br> 9~12&nbsp;V<sub>DC</sub> 3&nbsp;A <br> 5&nbsp;V<sub>DC</sub> 1.5&nbsp;A | -          | -    |



#### Battery Information

##### Li-Ion Battery Protection Characteristics

<table><tr><th>Item</th><th>Symbol</th><th>Description</th><th>Standard</th></tr>
<tr><td rowspan="3">Overcharge protection</td><td>V<sub>DET1</sub></td><td>Overcharge monitoring voltage</td><td>4.25±0.05&nbsp;V</td></tr>
<tr><td>tV<sub>DET1</sub></td><td>Overcharge detection delay time</td><td>700～1300&nbsp;ms</td></tr>
<tr><td>V<sub>REL1</sub></td><td>Overcharge release voltage</td><td>4.15±0.08&nbsp;V</td></tr>
<tr><td rowspan="2">Over-discharge protection</td><td>V<sub>DET2</sub></td><td>Over-discharge detection voltage</td><td>2.40±0.2&nbsp;V</td></tr>
<tr><td>tV<sub>DET2</sub></td><td>Over-discharge detection delay time</td><td>80～170&nbsp;ms</td></tr>
<tr><td rowspan="4">Overcurrent protection</td><td>V<sub>DET3</sub></td><td>Overcurrent detection voltage</td><td>0\.20±0.025V</td></tr>
<tr><td>I<sub>DP</sub></td><td>Overcurrent protection current</td><td>3~6&nbsp;A</td></tr>
<tr><td>tV<sub>DET3</sub></td><td>Detection delay time</td><td>8~12&nbsp;ms</td></tr>
<tr><td>-</td><td>Protection release condition</td><td>Disconnect the load</td></tr>
<tr><td rowspan="3">Short-circuit protection</td><td>-</td><td>Protection condition</td><td>External circuit short circuit</td></tr>
<tr><td>T<sub>SHORT</sub></td><td>Detection delay time</td><td>≤12&nbsp;us</td></tr>
<tr><td>-</td><td>Protection release condition</td><td>Disconnect the short circuit</td></tr>
<tr><td>Lithium battery Internal resistance</td><td>R<sub>DS</sub></td><td>Main circuit on-state resistance</td><td>VC = 4.2&nbsp;V；RDS≤60&nbsp;mΩ</td></tr>
<tr><td>Current consumption</td><td>I<sub>DD</sub></td><td>Internal circuit consumption during operation</td><td>IDD≤30.0&nbsp;μA</td></tr>
</table>


#### Battery Working & Storage Conditions

| Description                                       | Temperature               |
| ------------------------------------------------- | ------------------------- |
| Lithium battery charging working environment      | 0°&nbsp;C ~ +45°&nbsp;C   |
| Lithium battery discharging working environment   | 0°&nbsp;C ~ +45°&nbsp;C   |
| Battery capacity in 40% ~ 60% storage for 30 days | -20°&nbsp;C ~ +45°&nbsp;C |
| Battery capacity in 40% ~ 60% storage for 90 days | -20°&nbsp;C ~ +35°&nbsp;C |

:::tip 📝 NOTE:
- Low-temperature environments reduce discharge capacity.
- If the UPS POE-03 is not used for an extended period of time, it should be fully charged and stored in a cool, dry place, and it should be charged once every 3~5 months.
:::