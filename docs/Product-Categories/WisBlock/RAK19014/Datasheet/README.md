---
rak_desc: Provides comprehensive information about your RAK19014 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19014/RAK19014.png
tags:
  - datasheet
  - wisblock
  - RAK19014
prev: ../Quickstart/
next: false
---

# RAK19014 WisBlock Battery USB Power Slot Module Datasheet

## Overview

### Description

The RAK19014 WisBlock Battery USB Power Slot Module is a modular power board comprises of a battery connector (no charging circuitry on-board) and a USB Type-C connector used for reprogramming the WisBlock Core. It is designed to be used with WisBlock Base Board with Power Slot via the 40-pin WisBlock connector.

RAK19014 is optimally designed to support very low-power applications since it only has a USB, battery connector, and 3.3&nbsp;V switching regulator in the circuit removing unnecessary components that cause extra current consumption.

### Features

- Designed for battery-only powered applications
- Support reprogramming of WisBlock Core via USB connector
- High-efficiency switching regulator
- Optimized for low-power devices
- Module size: 30 x 20&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK19014 module can be mounted on the Power slot of the WisBlock Base board. **Figure 1** shows the mounting mechanism of the RAK19014 on a WisBlock Base module, such as the RAK19010.

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/mounting-mechanism.png"
  width="55%"
  caption="RAK19014 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams of the module. It also covers the electrical, environmental, and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK19014 WisBlock Battery Power Slot Module.

#### Interfaces

RAK19014 WisBlock Battery Power Slot Module provides the following interfaces:

* 2 Pin battery interface
* 2 LEDs
* 1 Reset button
* 1 USB connector

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/usb-batt-reset.png"
  width="50%"
  caption="USB, battery, and reset"
/>

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/boart-to-board-connector.png"
  width="50%"
  caption="WisBlock 40-pin board-to-board connector"
/>

##### Battery Connector

**Figure 4** shows the battery connector V+(VBAT) and V-(GND).

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/battery-polarity.png"
  width="50%"
  caption="Battery polarity"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

##### LEDs

Two LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button is shown in [**Figure 2**](#interfaces) and is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

The RAK19014 Battery Power Slot Module has a 40-pin WisConnector that is compatible with the WisBlock Power Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**.

::: tip 📝 NOTE
VBAT, 3V3, RESET, LED1, LED2, and GND are connected to the WisBlock IO connector.
:::

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/pinout.png"
  width="60%"
  caption="RAK19014 pinout diagram"
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

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19014 module are shown in **Figure 6** below.

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19014 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19014:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

**Figure 8** shows the schematic of the RAK19014 power slot module.

<rk-img
  src="/assets/images/wisblock/rak19014/datasheet/rak19014-schematic.png"
  width="100%"
  caption="RAK19014 schematics"
/>