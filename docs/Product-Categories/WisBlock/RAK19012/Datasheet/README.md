---
rak_desc: Provides comprehensive information about your RAK19012 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19012/RAK19012.png
tags:
  - datasheet
  - wisblock
  - RAK19012
prev: ../Quickstart/
next: false
---

# RAK19012 WisBlock USB LiPo Solar Power Slot Module Datasheet

## Overview

### Description

RAK19012 WisBlock USB LiPo Solar Power Slot Module is a power board that comprises a USB C connector, battery connector with an onboard charger, solar panel connector, LED indicator for charge status, two user-configurable LEDs, a reset button, and a power connector that can connect with the WisBlock Base board. This power board allows debugging and uploading of firmware to the WisBlock Core via the USB C connector.


### Features

- USB C connector for Programming and Debugging of WisBlock Core
- Compatible with LiPo rechargeable battery
- Solar panel connector for battery charging
- On-board battery charger chip
- LED for charging status and user-configurable LEDs
- Module size: 30 X 20&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/rak19012-front-back-overview.png"
  width="55%"
  caption="RAK19012 WisBlock Power Module top (left) and bottom (right) view"
/>

#### Mounting

The RAK19012 module can be mounted on the power slot of the WisBlock Base board with power slot. **Figure 2** shows the mounting mechanism of the RAK19012 on a WisBlock Base module, such as the RAK19010.

:::warning ⚠️ WARNING

RAK19012 **only** supports WisBlock Base boards with power slot. It is not compatible with all WisBlock Base boards.

:::

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK19012 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams of the module. It also covers the electrical, mechanical, and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK19012 WisBlock LiPo Solar Power Slot Module.

#### Interfaces

RAK19012 WisBlock LiPo Solar Power Slot Module provides the following interfaces:

* 1 WisBlock power module
* 2 Pin battery interface
* 2 Pin solar interface
* 3 LEDs
* 1 Reset button

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/rak19012-label.svg"
  width="40%"
  caption="RAK19012 part labels"
/>

#### Battery and Solar Panel Connector

**Figure 4** shows the polarity of battery and solar panel connectors.

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/rak19012-battery-solar.svg"
  width="50%"
  caption="Battery and solar panel connector polarity"
/>

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button, as shown in [**Figure 3**](/Product-Categories/WisBlock/RAK19012/Datasheet/#interfaces), is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

The RAK19012 module has a 40-pin WisConnector that is compatible with the WisBlock Power Slot. The pin order of the connector and the pinout definition is shown in **Figure 5**.

::: tip 📝 NOTE
VBAT, 3V3, RESET, LED1, LED2, ADC_VBAT, and GND are connected to the WisIO connector.
:::

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/RAK19012-pinout.svg"
  width="60%"
  caption="RAK19012 pinout diagram"
/>


#### Electrical Characteristics

##### Absolute Maximum Ratings

The Absolute Maximum Ratings of the device are shown in the table below. The stress ratings are the functional operation of the device.

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Exposure to maximum rating conditions may affect the device reliability.
:::

| Ratings                       | Maximum Value   | Unit |
| ----------------------------- | --------------- | ---- |
| Battery voltage (**VBAT**)    | –0.3 to 4.3     | V    |
| Solar panel voltage (**VIN**) | –0.3 to 5.5     | V    |
| IOs of WisBlock Connector     | –0.3 to VDD+0.3 | V    |

##### Battery Specification

The RAK19012 USB LiPo Solar Power Slot Module can be powered by a battery, connected to the J4 connector. The nominal operating voltage of the battery should be within the range shown in the following table.

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

::: tip 📝 NOTE
When using a solar panel, you can't use a non-rechargeable battery.
:::

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19012 module are shown in **Figure 6** below.

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19012 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19012:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

**Figure 8** shows the schematic of the RAK19012 USB LiPo Solar Power Slot Module.

<rk-img
  src="/assets/images/wisblock/rak19012/datasheet/rak19012-schematic.png"
  width="100%"
  caption="RAK19012 USB LiPo Solar Power Slot Module schematics"
/>