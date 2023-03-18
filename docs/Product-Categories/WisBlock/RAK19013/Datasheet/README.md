---
rak_desc: Provides comprehensive information about your RAK19013 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19013/RAK19013.png
tags:
  - datasheet
  - wisblock
  - RAK19013
prev: ../Quickstart/
next: false
---

# RAK19013 WisBlock LiPo Solar Power Slot Module Datasheet

## Overview

### Description

RAK19013 WisBlock LiPo Solar module is a power board that comprises a battery connector, a solar panel connector, a reset push button, a charger implemented that can recharge a plugged-in battery, a charging LED to show the status of charging, and a power connector which can connect with WisBlock Base board.

This board can be connected with the WisBlock Base board like RAK19010 through the power slot.

### Features

- Flexible building block design, which enables modular function realization and expansion
- Low power battery power supply
- Supports lithium battery charging
- Supports solar charging
- Fulfills industrial-level design
- Module size: 30 X 20&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/rak19013-front-back-overview.png"
  width="40%"
  caption="RAK19013 WisBlock Power Module top (left) and bottom (right) view"
/>

#### Mounting

The RAK19013 module can be mounted on the Power slot of the WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK19013 on a WisBlock Base module, such as the RAK19010.

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/mounting-mechanism.png"
  width="50%"
  caption="RAK19013 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams of the module. It also covers the electrical, mechanical, and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK19013 WisBlock LiPo Solar Power Slot Module.

#### Interfaces

RAK19013 WisBlock LiPo Solar Power Slot Module provides the following interfaces, headers, a button, and WisConnectors:

* 1 WisBlock Power module
* 2 pin battery interface
* 2 pin solar interface
* 3 LEDs
* 1 Reset button

::: tip 📝 NOTE
RAK19013 doesn't have a USB connector. So when RAK19013 and RAK19010 are used together, it is not possible to program the core (unless you use Jlink). If you want to program the core, you need the RAK5804. Then you can supply over RAK19013 and program over RAK5804.
:::

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/rak19013-label.svg"
  width="40%"
  caption="RAK19013 part labels"
/>

##### Battery Connector

**Figure 4** shows the battery connector V+ (VBAT) and V- (GND).

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/rak19013-battery-connection.svg"
  width="40%"
  caption="Battery connector pin order"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

##### Solar Connector

A 5&nbsp;V Solar panel can be connected to the board via the J2 connector to also serve the purpose of charging the battery. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287). A cable assembly for the solar panel connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/solar-panel-connector-cable).

**Figure 5** shows the solar connector V+ (VIN) and V- (GND).

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/rak19013-solar-connection.svg"
  width="40%"
  caption="Battery connector pin order"
/>

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button shown in [**Figure 3**](#interfaces) is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

The RAK19013 module has a 40-pin WisConnector that is compatible to the WisBlock Power Slot. The pin order of the connector and the pinout definition is shown in **Figure 6**.

::: tip 📝 NOTE
VBAT, 3V3, RESET, LED1, LED2, ADC_VBAT, and GND are connected to WisIO connector.
:::

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/RAK19013-pinout.svg"
  width="60%"
  caption="RAK19013 pinout diagram"
/>


#### Electrical Characteristics

##### Absolute Maximum Ratings

The Absolute Maximum Ratings of the device are shown in the table below. The stress ratings are the functional operation of the device.

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Exposure to maximum rating conditions may affect the device reliability.
:::

| Ratings                                 | Maximum Value   | Unit |
| --------------------------------------- | --------------- | ---- |
| Battery voltage (**VBAT**)              | –0.3 to 4.3     | V    |
| Solar panel voltage (**VIN**)           | –0.3 to 5.5     | V    |
| IOs of WisConnector                     | –0.3 to VDD+0.3 | V    |

##### Panel Specification

The RAK19013 LiPo Solar Power Slot module can be powered by a battery, connected to the J4 connector. The nominal operating voltage of the battery should be within the range showed in the following table.

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

::: tip 📝 NOTE
When using a solar panel, you can't use non-rechargeable battery.
:::

#### Mechanical Characteristic

##### Board Dimensions

The mechanical dimensions of the RAK19013 module is shown in **Figure 7** below.

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK19013 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/wisconnector-pcb.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19013:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational Temperature Range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended Temperature Range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage Temperature Range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

**Figure 9** shows the schematic of the RAK19013 LiPo Solar Power Slot module.

<rk-img
  src="/assets/images/wisblock/rak19013/datasheet/rak19013-schematic.png"
  width="100%"
  caption="RAK19013 LiPo Solar Power Slot Module Schematics"
/>

