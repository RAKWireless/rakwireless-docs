---
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisnode
---

# RAK7204 WisNode Sense Home Datasheet
<!---
<rk-img
  src="/assets/images/wisnode/rak7204/datasheet/rak7204-overview.png"
  width="30%"
  caption="RAK7204 WisNode Sense Home"
/>
-->

## Overview

### Description

The **RAK7204** is an LPWAN node with integrated environmental sensors. The high-precision environmental sensors, can measure changes in temperature, humidity, gas pressure and provide an indoor air quality index. All the accumulated data can be send to a gateway in order for it to be forwarded to the Cloud.

Because RAK7204 is built-around a low-power MCU and low-power sensors, and the firmware has been optimized for efficiency, it can achieve a very low-power operation in both dormancy and when measuring and transmitting. The non-rechargeable battery that comes with the unit can last more than 2 years. With the ability to regularly report battery status in addition to having an alarm for when critical levels are reached, you can be sure you will never be surprised and be left with your device not operational when you need it most. Furthermore, the design still allows for replacing the battery, so even after those 2 year are up you can still refresh your node for another 2 years of operation.

The firmware has built-in functionality that allows the user to adjust the sampling interval of the sensors and the transmission cycle. This allows for flexibility, as one can choose to have more granular measurements at the cost of battery life, or extend operational time, trading the volume of data generated.

Last but not least, the RAK7204 adopts a highly integrated design. The environmental sensors, LoRa® transceiver module, LoRa® antenna, and the battery are fitted in a 90 mm x 85 mm x 34 mm sized housing. These small dimensions allow for installation in tight spaces or ones that require the sensor to have a minimal impact on the overall feel of the surrounding environment. The housing adopts a hollow, permeable design to facilitate air flow in order to more accurately detect the environmental changes.

### Features

- Measurement of a variety of environmental parameters: **Temperature**, **Humidity**, **Gas Pressure** and **Indoor Air Quality (IAQ)**
- **BOSCH BME680** Integrated Environmental Unit
- **LoRaWAN® 1.0.2** fully compliant
- Low power operation and standby current of less than 15 uA
- Adjustable sampling and transmission interval.
- Comes with a **replaceable 3500 mAh high capacity lithium battery**
- Real time battery status monitoring.
- Battery life of more than 2 years (At 15 minute data transmission interval)
- Compact in size, easy to install and maintain.

## Specifications

### Overview

#### Typical Application

The combination of the BME680 environmental unit and the LoRa radio make this device especially suite for deploying sensor networks of large size in tall buildings or warehouses, for example.
When used in conjunction with one of the RAKwireless Gateways, as for example the RAK7258 indoor Gateway, deploying a LoRaWAN sensor network becomes a breeze. One just needs to mount the nodes on a wall or the ceiling, power them on and start monitoring the working conditions of the factory/office.
Furthermore, as all RAKwireless Industrial Gateways (including the aforementioned RAK7258) come with built-in LoRaServer the time from deploying the Gateways and nodes to having a functioning LoRaWAN network can be further reduced. There is no need to have a LoRa Networks Server deployed separately, however if one chooses an integration can be created via MQTT at any time.
Thus, the solution is both incredibly quick an easy to deploy initially, and also allows for scaling as the number of nodes grows and application requirements change.
The aforementioned combination of RAK7204 and RAK7258 is visualized in Figure below.

<rk-img
  src="/assets/images/wisnode/rak7204/datasheet/typical-application.png"
  width="75%"
  caption="Typical deployment scenario"
/>

### Hardware

The hardware specification covers the parameters of the RAK7204 in terms of electrical and the sensors attached within. It also presents the supported LoRaWAN® frequency parameters.

#### RF Characteristics

##### Operating Frequencies

The RAK7204 supports different LoRaWAN® frequency bands for different country regions.

See the supported range in the table below:

| Region        | Frequency band (MHz) |
| ------------- | -------------------- |
| Europe        | EU433, EU868         |
| China         | CN470                |
| Indian        | IN865                |
| North America | US915                |
| Australia     | AU915                |
| Asia          | AS923                |
| Korea         | KR920                |

#### Electrical Characteristics

The following are the electrical characteristics of RAK7204 WisNode Sense Home. Please [contact us](mailto:support@rakwireless.com) if you need other details for your project.

##### Power Consumption

| Parameter                                    | Value | Unit |
| -------------------------------------------- | ----- | ---- |
| Standby Current                              | <15   | uA   |
| Current when Sensors are working             | <10   | mA   |
| Current in when LoRa® frames are transmitted | <150  | mA   |

##### Battery Specifications

The RAK7204 comes with **3500 mAh** high capacity lithium battery included. It is removable and can be exchanged at any time. In case you are to replace it please adhere to the specification in the table below.

:::warning ⚠️ WARNING
The included battery is **non rechargeable**. Please do note that when configuring the device, you have to connect the battery first in order for it to work.
:::

| Parameter               | Max.      | Unit |
| ----------------------- | --------- | ---- |
| Nominal Battery Voltage | 3.6       | V    |
| Battery Specification   | ER18505   |      |
| Nominal Capacity        | 3500      | mAh  |
| Temperature Range       | -55 to 85 | ºC   |
| Battery Dimensions      | 18 x 50.5 | mm   |

:::tip 📝 NOTE
The pin distance of the battery connector is **2.0mm**. Reverse connection or short circuit may damage the device and may cause overheating and combustion of the battery. Therefore, when replacing the battery, it is necessary to strictly confirm whether the positive and negative poles of the connector are correct.
:::

##### Operational Temperature Ranges

| Parameter             | Min.   | Typical | Max.   |
| --------------------- | ------ | ------- | ------ |
| Operating Temperature | -40 ºC | +25 ºC  | +85 ºC |
| Storage Temperature   | -40 ºC | +25 ºC  | +85 ºC |

#### Sensor Characteristics

Listed below are the individual specifications of sensors attached within the RAK7204 WisNode Sense Home:

##### Temperature Sensor Specifications

| Parameter         | Min.   | Typical | Max.   |
| ----------------- | ------ | ------- | ------ |
| Temperature Range | -40 ºC | +25 ºC  | +85 ºC |
| Accuracy          |        | 0.5 ºC  |        |
| Output Resolution |        | 0.01 ºC |        |

##### Humidity Sensor Specifications

| Parameter         | Min.    | Typical     | Max.       |
| ----------------- | ------- | ----------- | ---------- |
| Humidity Range    | 0% r.H. |             | 100 % r.H. |
| Accuracy          |         | +-3% r.H.   |            |
| Output Resolution |         | 0.008% r.H. |            |

##### Gas Pressure Sensor Specifications

| Parameter         | Min.    | Typical   | Max.     |
| ----------------- | ------- | --------- | -------- |
| Range             | 300 hPa |           | 1100 hPa |
| Accuracy          |         | +-0.6 hPa |          |
| Output Resolution |         | 0.18 Pa   |          |

##### IAQ Sensor Specifications

| Parameter         | Min. | Typical | Max. |
| ----------------- | ---- | ------- | ---- |
| IAQ Range         | 0    |         | 500  |
| Accuracy          |      | 15      |      |
| Output Resolution |      | 1       |      |

### Software

Download the latest firmware of the RAK7204 in table provided below.

| Model   | Version   | Source                                                                                                  |
| ------- | --------- | ------------------------------------------------------------------------------------------------------- |
| RAK7204 | V3.X.0.13 | [Download](https://downloads.rakwireless.com/LoRa/RAK7200-Tracker/Firmware/RAK7200_Latest_Firmware.zip) |

## Models / Bundles

### Ordering Information

| Part Number | Description                                 |
| ----------- | ------------------------------------------- |
| RAK7204-01  | Environmental Sensors device, EU433         |
| RAK7204-02  | Environmental Sensors device, CN470         |
| RAK7204-03  | Environmental Sensors device, EU868         |
| RAK7204-04  | Environmental Sensors device, US915 / AU915 |
| RAK7204-05  | Environmental Sensors device, KR920         |
| RAK7204-06  | Environmental Sensors device, AS923         |
| RAK7204-07  | Environmental Sensors device, IN865         |
