---
rak_desc: Provides comprehensive information about your RAK19016 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19016/RAK19016.png
tags:
  - datasheet
  - wisblock
  - RAK19016
prev: ../Quickstart/
next: false
---

# RAK19016 WisBlock 5-24V Power Slot Module Datasheet

## Overview

### Description

RAK19016 is a WisBlock 5-24&nbsp;V Power Slot Module that comprises a 3-pin screw terminal connector, LiPo battery connector with an on-board charger, LED indicator for charge status, two user-configurable LEDs, reset button, and a power connector that can be connected with the WisBlock Base board with Power Slot.

This power module is designed to enable WisBlock to be powered by higher voltage levels up to 24&nbsp;V DC. It also has a LiPo battery connector which allows the battery as a power source or as a backup secondary supply.

### Features

* Supports 5&nbsp;V to 24&nbsp;V DC voltage supply input
* Uses three-pin screw terminal connector
* Compatible with LiPo rechargeable battery
* On-board battery charger chip
* LED for charging status and user-configurable LEDs
* Applicable to industrial and enterprise setting
* Module size: 30 x 20&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/rak19016-front-back-overview.png"
  width="55%"
  caption="RAK19016 WisBlock Power Module top (left) and bottom (right) view"
/>

#### Mounting

The RAK19016 module can be mounted on the power slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK19016 on a WisBlock Base module with a power slot, such as the RAK19010.

:::warning ⚠️ WARNING

RAK19016 **only** supports WisBlock Base boards with Power Slot. It is not compatible with other WisBlock Base boards.

:::

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK19016 mounting mechanism on a WisBlock Base board with Power Slot"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams of the module. It also covers the electrical, mechanical, and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK19016 WisBlock 5-24V Power Slot Module.

#### Interfaces

RAK19016 WisBlock 5-24V Power Slot Module provides the following interfaces:

* Three-pin Screw Terminal Connector
* Battery Connector
* LEDs - one for charging status and two for user
* Reset button

::: tip 📝 NOTE
RAK19016 doesn't have a USB connector. So when RAK19016 is used together with WisBlock Base board with power slot, it is not possible to program the core (unless via SWD pins using external tools like Jlink and RAKDAP1). If you want to program the WisBlock Core via USB, you need the RAK5804. Then you can use the USB connector of RAK5804 to program the WisBlock Core.
:::

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/RAK19016-label.svg"
  width="60%"
  caption="RAK19016 part labels"
/>

##### 5-24V DC and Battery Connector

**Figure 4** shows the polarity of 5-24&nbsp;V DC input and battery connector V+ (VBAT) and V- (GND).

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/RAK19016-connection.svg"
  width="60%"
  caption="5-24V DC and Battery connector pins"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button shown in [**Figure 3**](#interfaces) is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

The RAK19016 module has a 40-pin WisConnector that is compatible with the WisBlock Power Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**.

::: tip 📝 NOTE
VBAT, 3V3, RESET, LED1, LED2, ADC_VBAT, and GND have connected to WisBlock 40-pin connector.
:::

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/RAK19016-pinout.svg"
  width="70%"
  caption="RAK19016 pinout diagram"
/>


#### Electrical Characteristics

##### Absolute Maximum Ratings

The Absolute Maximum Ratings of the device are shown in the table below. The stress ratings are the functional operation of the device.

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Exposure to maximum rating conditions may affect the device reliability.
:::

| Ratings                                                | Maximum Value   | Unit |
| ------------------------------------------------------ | --------------- | ---- |
| Input voltage in 3-pin terminal connector (**VCC-IN**) | 5 to 24         | V    |
| Battery voltage (**VBAT**)                             | –0.3 to 4.3     | V    |
| IOs of WisBlock connector                              | –0.3 to VDD+0.3 | V    |

##### Voltage Specifications

The RAK19016 WisBlock 5-24V Power Slot Module is suitable for external input voltage supply. The nominal input operating voltage should be within the range shown in the following table.

| **Minimum** | **Typical** | **Maximum** | **Unit** |
| ----------- | ----------- | ----------- | -------- |
| 5           | -           | 24          | V        |

The RAK19016 supported battery should have nominal operating voltage within the range shown in the following table.

| **Minimum** | **Typical** | **Maximum** | **Unit** |
| ----------- | ----------- | ----------- | -------- |
| 3.3         | 3.7         | 4.3         | V        |

A suitable Li-Ion battery should have the following parameters as shown in the table below:

| **Parameter**     | **Value**            |
| ----------------- | -------------------- |
| Standard Voltage  | 3.7&nbsp;V           |
| Charging Voltage  | 4.2&nbsp;V           |
| Capacity          | As required          |
| Discharge current | At least 500&nbsp;mA |

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19016 module are shown in **Figure 6** below.

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19016 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19016:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

**Figure 8** shows the schematic of the WisBlock 5-24V Power Slot Module.

<rk-img
  src="/assets/images/wisblock/rak19016/datasheet/rak19016-schematic.jpg"
  width="100%"
  caption="RAK19016 5-24V Power Slot Module schematics"
/>