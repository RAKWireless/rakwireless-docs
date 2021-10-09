---
rak_desc: Covers the comprehensive information of your RAK19004 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19004/overview/RAK19004_home.png
tags:
  - datasheet
  - wisblock
  - RAK19004
prev: ../Overview/
next: false
---

# RAK19004 WisBlock Green Power Module Datasheet

## Overview

### Description

RAK19004 is a WisBlock Power module that can harness and convert green power such as wind power, hydroelectric power, or solar power into fixed 5V output. The module uses a TPS55165-Q1 from Texas Instruments which is a DC-DC buck-boost converter. Upon startup, the module can have a stable 5V output from a varying input voltage of 2V-36V and its output current can also be as high as 1A.

::: tip 📝 NOTE
- The module has a minimum input voltage of 5.3V for startup.

- RAK19004 doesn't have a WisConnector just like the other WisBlock modules, but it is an external module with four (4) mounting holes, so you can place the module in the position that you want.
::: 

### Features

- 5&nbsp;V Power Output
- 2&nbsp;V-36&nbsp;V Power Input
- Module size: 15 X 25&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK19004 is an external module with four (4) mounting holes, so you can place or mount the module in the position that you want.

### Hardware

The hardware specification discusses the pinouts, and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK19004 WisBlock Module.

#### Pin Definition

The RAK19004 have two (2) connectors:
- Through-hole connector with a 2.0&nbsp;mm pitch for the **Power Input**.
- SMD connector with a 1.5&nbsp;mm pitch for the **5V Output**.

:::warning ⚠️ WARNING    
Please **ENSURE** to check correctly the polarity of the cable plugged into the Power Input connector.    
:::

#### Electrical Characteristics

This section shows the maximum and minimum ratings of the RAK19004 module and its recommended operating conditions. Refer to the table presented below.

##### Recommended Operating Conditions

| Symbol     | Description                                          | Min. | Nom. | Max. | Unit |
| ---------- | ---------------------------------------------------- | ---- | ---- | ---- | ---- |
| VINP, VINL | Supply voltage at VINP and VINL pins (after wake-up) | 2    | -    | 36   | V    |
| VOUT       | Output voltage                                       | -    | 5    | -    | V    |
| VOS_FB     | Input voltage on VOS_FB pin                          | 0    | -    | 5    | V    |
| IGN        | Input voltage on IGN pin                             | 0    | -    | 5    | V    |
| PG_DLY     | Output voltage at PG pin                             | 0    | -    | 5    | V    |
| PS         | Input voltage on PS                                  | 0    | -    | 5    | V    |
| SS_EN      | Input voltage on SS_EN                               | 0    | -    | 5    | V    |
| IOUT       | Output Current                                       | 0    | -    | 1    | A    |
| Efficiency | Power conversion efficiency                          | -    | -    | 85   | %    |

#### Mechanical Characteristic

##### Board Dimensions

The board dimensions of the RAK19004 module is shown in **Figure 1** below.

<rk-img
  src="/assets/images/wisblock/rak19004/datasheet/board-dimensions.png"
  width="40%"
  caption="RAK19004 Board Dimensions"
/>

:::warning ⚠️ WARNING    
Please **ENSURE** to check correctly the polarity of the cable plugged into the Power Input connector.    
:::

::: tip 📝 NOTE

- The connector **J1** close to SILK **POWER_IN** is for Green Power, users can connect it to Green Power.

- The connector **J3** close to SILK **OUT_5V** is for WisBlock Base, users can connect it to the WisBlock Base by using a cable.

- Both **J1** and **J3** are positive poles.
::: 

#### Schematic Diagram

**Figure 2** shows the schematic of the RAK19004 module.

<rk-img
  src="/assets/images/wisblock/rak19004/datasheet/rak19004-schematic.png"
  width="100%"
  caption="RAK19004 WisBlock Module Schematics"
/>

##### Buck-Boost Converter

RAK19004 module uses a TPS55165-Q1 Buck-boost converter.

<rk-img
  src="/assets/images/wisblock/rak19004/datasheet/buck-boost.png"
  width="80%"
  caption="RAK19004 Buck-Boost Schematic"
/>

##### Extended Functions Select

Extended Functions can be selected by placing resistors as an option.

<rk-img
  src="/assets/images/wisblock/rak19004/datasheet/function-select.png"
  width="80%"
  caption="RAK19004 Extended Function Select"
/>
