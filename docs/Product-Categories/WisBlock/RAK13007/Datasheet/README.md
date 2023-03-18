---
rak_desc: Covers the comprehensive information of your RAK13007 to help you in use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13007/RAK13007.png
tags:
  - datasheet
  - wisblock
  - RAK13007
prev: ../Quickstart/
next: false
---

# RAK13007 WisBlock Relay Module Datasheet

## Overview

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/RAK13007.png"
  width="60%"
  caption="RAK13007 WisBlock Relay Module"
/>

### Description

RAK13007 is a WisBlock Interface module that extends the WisBlock system to be used on isolated digital output applications. There is one digital output that is isolated by an electromechanical relay. The RAK13007 digital output is used to programmatically switch on/off devices operating at high voltage or high current applications.

### Features

- One relay isolated output
- The isolation between internal and external signal is up to 2,500&nbsp;VDC, 50/60&nbsp;Hz for 1 min.
- Inductive Load: 250&nbsp;V<sub>AC</sub> / 5<sub>A</sub> and 30&nbsp;V<sub>DC</sub> / 4<sub>A</sub>
- Resistive Load: 150&nbsp;V<sub>AC</sub> / 10<sub>A</sub> and 30&nbsp;V<sub>DC</sub> / 8<sub>A</sub>
- Module size: 25 x 48&nbsp;mm

## Specifications

### Overview

The overview covers the RAK13007 block diagram and the mounting mechanics of the board into the WisBlock Base board.

#### Mounting

The RAK13007 module can be mounted on the IO slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK13007 on a WisBlock Base module, such as a RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK13007 mounting mechanism on a WisBlock Base module"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/block-diagram.png"
  width="80%"
  caption="RAK13007 Block Diagram"
/>

The RAK13007 uses one relay to isolate the output of the MCU. The dielectric strength between coil and contacts of a relay is 2500&nbsp;V<sub>DC</sub>, 50/60&nbsp;Hz 1min.

:::warning ⚠️ WARNING!!
<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/warning.png"
  width="90%"
  caption="Safety Precaution"
/>
:::

### Hardware

The hardware specification is categorized into four (4) parts. It discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK13007 WisBlock Relay Module.


#### Pin Definition

The RAK13007 WisBlock module has a 40-pin WisConnector that is compatible to the WisBlock Base IO Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/rak13007_pinout.svg"
  width="70%"
  caption="RAK13007 Pinout Diagram"
/>

::: tip 📝 NOTE
- By default, **IO4** is used as the Digital Output (DO) pin.
- DO pin can be changed by reworking some resistors on the PCB module. There are reserved options to change the GPIO to control DO.
- **3V3_S** voltage output from the WisBlock Base that powers the RAK13007 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK13007 module.
:::

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK13007 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Description               | Conditions                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Contact Resistance        | 100&nbsp;mΩ                                                                                                                                                                                                                                                                                                                                                                   |
| Operate Time              | 10&nbsp;ms max.                                                                                                                                                                                                                                                                                                                                                               |
| Release Time              | 5&nbsp;ms max.                                                                                                                                                                                                                                                                                                                                                                |
| Bounce Time               | Operate: Approx. 0.6&nbsp;ms <br> Release: Approx. 7.2&nbsp;ms                                                                                                                                                                                                                                                                                                                |
| Max. Switching Frequency  | Mechanical: 18,0000&nbsp;operations/hr <br> Electrical: 1,8000&nbsp;operations/hr at rated load                                                                                                                                                                                                                                                                               |
| Insulation Resistance     | 100&nbsp;MΩ min. at 500&nbsp;V<sub>DC</sub>                                                                                                                                                                                                                                                                                                                                   |
| Dielectric Strength       | 2,000&nbsp;V<sub>AC</sub>, 50/60&nbsp;Hz for 1&nbsp;min between coil and contacts <br> 750&nbsp;V<sub>AC</sub>, 50/60&nbsp;Hz for 1&nbsp;min between contacts of the same polarity <br> 1,500&nbsp;V<sub>AC</sub> (for suffix -G) 1&nbsp;min between contacts of the same polarity                                                                                                        |
| Impulse Withstand Voltage | 4,500&nbsp;V (1.2 x 50&nbsp;us) between coil and contacts                                                                                                                                                                                                                                                                                                                     |
| Insulation Distance       | Creepage (Typ): 3.3&nbsp;mm <br> Clearance (Typ): 2.7&nbsp;mm                                                                                                                                                                                                                                                                                                                 |
| Tracking Resistance (CTI) | 250&nbsp;V                                                                                                                                                                                                                                                                                                                                                                    |
| Vibration Resistance      | Destruction: 10 to 55 to 10&nbsp;Hz, 0.75&nbsp;mm single amplitude (1.5&nbsp;mm double amplitude) <br> Malfunction: 10 to 55 to 10&nbsp;Hz, 0.75&nbsp;mm single amplitude (1.5&nbsp;mm double amplitude)                                                                                                                                                                      |
| Shock Resistance          | Destruction: 1,000&nbsp;m/s² <br> Malfunction: 100&nbsp;m/s²                                                                                                                                                                                                                                                                                                                |
| Endurance                 | Mechanical: 10,000,000 operations min. (at 18,000&nbsp;operations/hr) <br> Electrical: 100,000 operations min. (at 1,800&nbsp;operations/hr) for standard type <br> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 36,000 operations min. (10&nbsp;A at 250&nbsp;V<sub>AC</sub>) <br> &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp;  &nbsp; &nbsp; 100,000 operations min. (at 1,800&nbsp;operations/hr), 12&nbsp;A at 250&nbsp;V<sub>AC</sub> - applicable for G5LE-1-E, NO contact only |
| Ambient Temperature       | Operating: -40&nbsp;°C to 85&nbsp;°C (with no icing)                                                                                                                                                                                                                                                                                                                          |
| Ambient Humidity          | Operating: 5% to 85%                                                                                                                                                                                                                                                                                                                                                          |
| Weight                    | Approx. 12&nbsp;g                                                                                                                                                                                                                                                                                                                                                             |


#### Mechanical Characteristics

##### Board Dimensions

**Figure 6** shows the mechanical dimensions of the RAK13007 module.

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK13007 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

**Figure 8** shows the schematic of the RAK13007.

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/rak13007-schematics.png"
  width="100%"
  caption="RAK13007 WisBlock Module Schematics"
/>

##### Relay Module

**Figure 9** shows the schematic of the RAK13007 module. It uses **3V3_S** for the relay coil power supply.

<rk-img
  src="/assets/images/wisblock/rak13007/datasheet/relay-schematic.png"
  width="60%"
  caption="RAK13007 WisBlock Relay Schematic"
/>