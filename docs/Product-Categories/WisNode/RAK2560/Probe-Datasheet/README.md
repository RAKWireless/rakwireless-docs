---
rak_desc: Provides comprehensive information about your RAK2560 WisNode Sensor Probe to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2560/probe-datasheet/sensor-probe-dimensions.jpg
prev: ../IO-Datasheet/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2560
  - SensorProbe
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/SensorHub/Certification/SensorHub_RAK2560_RAK2560C_ISED_Report.pdf]
---

# RAK2560 WisNode Sensor Probe Datasheet

## Overview

### Description

The **Sensor Probe** is an accessory for the Sensor Hub solution platform. It supports up to two WisBlock sensors in various combinations to provide the needed data.

:::tip 📝 NOTE:
The **Sensor Probe** could not be used as a standalone product. You need the [RAK2560 WisNode Sensor Hub](https://store.rakwireless.com/products/sensor-hub?utm_source=RAK2560WisNodeSense&utm_medium=Document&utm_campaign=BuyFromStore) in order to use this probe.
:::

### Product Features

- Auto-identification of the sensor type
- One-wire protocol
- Waterproof (IP66-rated)
- Supports up to two (2) WisBlock sensor modules

## Specifications

### Overview

#### Dimensions

The **Sensor Probe** dimensions are 90&nbsp;x&nbsp;30&nbsp;mm. The body has a cylindrical shape. There is one physical port for connection to the Sensor Hub with a 50&nbsp;cm cable length. The **Sensor Probe** is IP66-rated, suitable for outdoor use, with GORE venting. The device is designed to meet the UL/EN60950-22 standard.

<br>

<rk-img
  src="/assets/images/wisnode/rak2560/probe-datasheet/sensor-probe-dimensions.png"
  width="60%"
  caption="RAK2560 WisNode Sensor Probe dimensions"
/>

<br>

<rk-img
  src="/assets/images/wisnode/rak2560/probe-datasheet/venting-position.png"
  width="35%"
  caption="RAK2560 WisNode Sensor Probe venting position"
/>

#### Block Diagram

RAK2560's **Sensor Probe** uses MCU STM32L051C8 for a control center. It hosts up to two (2) WisBlock sensors.

<rk-img
  src="/assets/images/wisnode/rak2560/probe-datasheet/block-diagram.png"
  width="75%"
  caption="RAK2560 WisNode Sensor Probe block diagram"
/>

### Hardware

The hardware specification is categorized into four (4) parts. It shows the pinouts of the Sensor Probe and their corresponding functions and diagram. It also covers the power supply and environmental characteristics that include the tabular data of the functionalities and standard values of the RAK2560 WisNode Sensor Probe.


#### Pin Definition

<rk-img
  src="/assets/images/wisnode/rak2560/probe-datasheet/pin-definition.png"
  width="25%"
  caption="RAK2560 WisNode Sensor Probe pin definition"
/>

| Pin No. | Name          | Type | Description                   | Remarks                                                       |
| ------- | ------------- | ---- | ----------------------------- | ------------------------------------------------------------- |
| 1       | NC            | -    | No function                   | -                                                             |
| 2       | GND           | -    | Ground                        | -                                                             |
| 3       | One-wire UART | IO   | Communication with Sensor Hub | -                                                             |
| 4       | Vcc_Probe     | PI   | Power supply from the Hub     | 3.3&nbsp;V<sub>DC</sub> support mode; 3.4&nbsp;V battery mode |
| 5       | Reserved      | -    | Not defined for now           | Reserved for future applications                              |


#### Power Supply

The **Sensor Probe** must be supplied through the 3.4~3.6&nbsp;V SP11 Pin 4 from the main body of the Sensor Hub.

#### Power Consumption

| Mode        | Condition        | Min         | Typical     | Max         |
| ----------- | ---------------- | ----------- | ----------- | ----------- |
| Active mode | Read sensor data | 3.2&nbsp;mA | 3.5&nbsp;mA | 3.6&nbsp;mA |
| Sleep mode  | Sleep mode       | 11&nbsp;uA  | 14&nbsp;uA  | 16&nbsp;uA  |


#### Environmental Requirements

##### Operating Conditions

| Parameter                    | Min         | Typical     | Max         |
| ---------------------------- | ----------- | ----------- | ----------- |
| Normal operating temperature | –30°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |

#### Sensors

##### WisBlock Supported Sensors List

| **Module** | Observed Parameters                                  | Sensor ID | Application               |
| ---------- | ---------------------------------------------------- | --------- | ------------------------- |
| RAK1901    | Temperature<br>Humidity                              | A         | Environmental monitoring  |
| RAK1902    | Barometer pressure<br>Temperature<br>Humidity        | B         | Environmental monitoring  |
| RAK1904    | 3-axis acceleration                                  | C         | Shake/fall/move detection |
| RAK1906*   | Gas<br>Humidity<br>Temperature<br>Barometer pressure | D         | Environmental monitoring  |


:::tip 📝 NOTE
For now, RAK1906 is not fully supported by the Sensor Probe. It will be added in the future.
:::


#####  Sensor Combination List

| Probe | Module  combination |             |          | Function           |                     |          |
| ----- | ------------------- | ----------- | -------- | ------------------ | ------------------- | -------- |
|       |                     | Temperature | Humidity | Barometer Pressure | 3-Axis Acceleration | Gas      |
| A     | RAK1901             | &#10004;    | &#10004; |                    |                     |          |
| B     | RAK1902             | &#10004;    | &#10004; | &#10004;           |                     |          |
| C     | RAK1904             |             |          |                    | &#10004;            |          |
| D     | RAK1906             | &#10004;    | &#10004; | &#10004;           |                     | &#10004; |
| AB    | RAK1901+RAK1902*    | &#10004;    | &#10004; | &#10004;           |                     |          |
| AC    | RAK1901+RAK1904     | &#10004;    | &#10004; |                    | &#10004;            |          |
| BC    | RAK1902+RAK1904     | &#10004;    | &#10004; | &#10004;           | &#10004;            |          |
| CD    | RAK1904+RAK1906     | &#10004;    | &#10004; | &#10004;           | &#10004;            | &#10004; |

:::tip 📝 NOTE
Due to the accuracy of RAK1901 being better than RAK1902, the Sensor Probe will collect temperature and humidity data from RAK1901 only.
:::

#### Sensor Connection Diagram

The **RAK2560** can support both Sensor Probes and Probe IO in all possible combinations.

:::tip 📝 NOTE:
If you want to add a Probe IO to your setup, the Sensor Hub must be supplied by an external 12&nbsp;V<sub>DC</sub> power source.
:::

<rk-img
  src="/assets/images/wisnode/rak2560/probe-datasheet/connection-schematics.jpg"
  width="90%"
  caption="RAK2560 WisNode Sensor connection schematics"
/>


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

