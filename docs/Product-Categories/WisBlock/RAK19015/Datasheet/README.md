---
rak_desc: Provides comprehensive information about your RAK19015 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19015/overview/RAK19015_home.png
tags:
  - datasheet
  - wisblock
  - RAK19015
prev: ../Quickstart/
next: false
---

# RAK19015 WisBlock Battery Power Slot Module Datasheet

## Overview

### Description

The RAK19015 WisBlock Battery Power Slot Module is a power board that comprises a battery connector, a reset push button, and two LEDs. It is designed to be used with WisBlock Base Board with Power Slot via the 40-pin WisBlock connector.

RAK19015 is optimized to support very low-power applications since it only has a Li-Ion battery and 3.3V switching regulator in the circuit removing unnecessary components that consume extra current consumption.

### Features

- Designed for battery-only powered applications
- High-efficiency switching regulator
- Optimized for low-power devices
- Module size: 30 x 20&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/rak19015-front-back-overview.png"
  width="40%"
  caption="RAK19015 WisBlock Power Module top (left) and bottom (right) view"
/>

#### Mounting

The RAK19015 module can be mounted on the Power slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK19015 on a WisBlock Base module, such as the RAK19010.

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK19015 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification discusses the pinouts and their corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK19015 WisBlock Battery Power Slot Module.

#### Interfaces

RAK19015 WisBlock Battery Power Slot Module provides the following interfaces, headers, a button, and WisConnectors:

* 1 WisBlock Power module
* 2 pin battery interface 
* 2 LEDs
* 1 Reset button

::: tip 📝 NOTE
RAK19015 doesn't have a USB connector, so when RAK19015 and RAK19010 are used together, it is not possible to program the core (unless you use Jlink). If you want to program the core, you need the RAK5804. Then you can supply over RAK19015 and program over RAK5804.
:::  

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/rak19015-label.svg"
  width="40%"
  caption="RAK19015 part labels"
/>

##### Battery Connector

**Figure 4** shows the battery connector V+(VBAT) and V-(GND).

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/rak19015-batt-con.svg"
  width="40%"
  caption="Battery Connector Pin Order"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::  

##### LEDs

Two LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button is shown in [**Figure 3**](#interfaces) and is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

The RAK19015 Battery Power Slot Module has a 40-pin WisConnector that is compatible with the WisBlock Power Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**. 

::: tip 📝 NOTE
VBAT, 3V3, RESET, LED1, LED2, and GND are connected to the WisBlock IO connector.
:::  

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/RAK19015-pinout.svg"
  width="60%"
  caption="RAK19015 Pinout Diagram"
/>

#### Electrical Characteristics

##### Absolute Maximum Ratings

The Absolute Maximum Ratings of the device are shown in the table below. The stress ratings are the functional operation of the device. 

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Exposure to maximum rating conditions may affect the device reliability.
:::

| Ratings                    | Maximum Value   | Unit |
| -------------------------- | --------------- | ---- |
| Battery voltage (**VBAT**) | –0.3 to 4.3     | V    |
| IOs of WisConnector        | –0.3 to VDD+0.3 | V    |

##### Panel Specification

The RAK19015 Wisblock Battery Power Slot Module can be powered by a battery, connected to the J4 connector. The nominal operating voltage of the battery should be within the range shown in the following table.     

| **Minimum** | **Typical** | **Maximum** | **Unit** |
| ----------- | ----------- | ----------- | -------- |
| 3.3         | 3.7         | 4.3         | V        |

A suitable Li-Ion battery should have the following parameters as shown in the table below: 

| **Parameter**     | **Value**            |
| ----------------- | -------------------- |
| Standard voltage  | 3.7&nbsp;V           |
| Charging voltage  | 4.2&nbsp;V           |
| Capacity          | As required          |
| Discharge current | At least 500&nbsp;mA |

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19015 module are shown in **Figure 6** below.

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19015 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19015:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

**Figure 8** shows the schematic of the RAK19015 power slot module.

<rk-img
  src="/assets/images/wisblock/rak19015/datasheet/rak19015-schematic.jpg"
  width="100%"
  caption="RAK19015 Battery Power Slot Module Schematics"
/>