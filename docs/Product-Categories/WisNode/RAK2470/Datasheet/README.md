---
rak_desc: Provides comprehensive information about your RAK2470 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2470-n/datasheet/RAK2470.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2470
---

# RAK2470 WisNode Bridge Serial Prime

## Overview

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/1.rak2470-overview.png"
width="35%"
caption="RAK2470 overview"
/>

### Description

The **RAK2470 WisNode Bridge Serial Prime** is an RS485 to LoRaWAN converter designed for outdoor industrial applications. Utilizing the LoRaWAN network, RAK2470 wirelessly transmits RS485 data to and from end devices.

Additionally, RAK2470 WisNode Bridge Serial Prime comes with a T-type conversion cable, enabling it to link up with any RS485 equipped sensors. Both the RAK2470 and connected sensors can be powered via the DC power port.

RAK2470's default interface, the M12-4 circular connector, permits direct connection to MPPT Solar Charge Controllers, Inverters, or Inverter Integrated Machines.

Together with a RAK WisGate Gateway and LoRa Server products, RAK2470 can quickly and easily build a wireless industrial field control system. It is designed with industrial-grade protection, accommodates a wide range of voltage supplies, supports pole mounting, and facilitates field installation and use.

### Features

- **LoRaWAN 1.0.3** protocol stack, supports **Class C**
- **Industrial grade STM MCU:** Ultra-low power (**4&nbsp;µA sleep**) and wide temperature range of operation
- **Input range:** 5 ~ 12&nbsp;V<sub>DC</sub>
- **Mounting:** Pole
- IP67 weatherproof

## Specifications

### Overview

| Parameter           | Value                                           | Remarks                                                                    |
| ------------------- | ----------------------------------------------- | -------------------------------------------------------------------------- |
| LoRaWAN Protocol    | LoRaWAN 1.0.3                                   |                                                                            |
| LoRa Frequency      | RU864, IN865, EU868, US915, AU915, KR920, AS923 | Model specific                                                             |
| LoRaWAN Mode        | Class C                                         |                                                                            |
| LoRa Tx Power       | 20&nbsp;dBm                                     |                                                                            |
| LoRa Antenna        | Built-in fiberglass antenna                     | 863 ~ 928&nbsp;MHz<br>VSWR < 2<br>Efficiency > 80%<br>Max Gain: 3&nbsp;dBi |
| RS485 Data Rate     | 115200&nbsp;bps                                 |                                                                            |
| Input Voltage       | 5 ~ 12&nbsp;V                                   |                                                                            |
| Enclosure Material  | Fiberglass                                      |                                                                            |
| Dimensions          | 30&nbsp;mm × 215&nbsp;mm                        |                                                                            |
| Protection Grade    | IP67                                            |                                                                            |
| Installation        | Pole                                            |                                                                            |
| Working Temperature | -20 ~ +70°&nbsp;C                               | Typical +25°&nbsp;C                                                        |
| Storage Temperature | -30 ~ 85°&nbsp;C                                |                                                                            |

### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK2470 WisNode Bridge Serial Prime.

#### Interfaces

The **RAK2470 WisNode Bridge Serial Prime** comes with an M12-4 circular connector (including power and RS485 data interfaces). The power interface needs to be powered by a DC power supply (5 ~ 12&nbsp;V) and the voltage must be stable.

In addition, the RS485 host baud rate is 115200, and multiple devices can be connected.

#### Pin Definition

##### Definition of I/O Parameters

| Type | Description   |
| ---- | ------------- |
| IO   | Bidirectional |
| PI   | Power input   |
| N/A  | Not connected |

##### M12-4 Circular Connector Pin Definition

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/3.m12-4-connector-pin-definition.png"
width="35%"
caption="M12-4 connector pin definition"
/>

| Pin # | Circular connector | Type | Description | Remarks       |
| ----- | ------------------ | ---- | ----------- | ------------- |
| 1     | VCC                | PI   | Power In    | 5 ~ 12&nbsp;V |
| 2     | RS485_A            | IO   | RS485 A+    |               |
| 3     | RS485_B            | IO   | RS485 B-    |               |
| 4     | GND                | PI   | GND         |               |

#### T-Type Conversion Cable

The RAK2470 comes with a 1&nbsp;m T-type conversion cable for each branch. Using this conversion cable, the RAK2470 can be connected to any RS485 equipped sensors, and power can be supplied to both the RAK2470 and the connected sensor via the DC power port.

As shown in the **Figure 3**, the T-type conversion cable consists of an L20-4 Four-core Straight-through Port for connecting RS485 sensors, an M12-4 Female-pin Port for connecting to the RAK2470, and a DC port for power supply.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/4.t-type-conversion-cable.png"
width="70%"
caption="T-type conversion cable"
/>

## Installation

RAK2470 allows for pole mounting. Follow the provided installation steps to ensure secure mounting.

1. Fix the RAK2470 to the mounting kit with four (4) M4\*20 screws.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/5.fixing-the-device-to-the-mounting-kit.png"
width="30%"
caption="Fixing the device to the mounting kit"
/>

2. Using two (2) steel strips, fasten the RAK2470 on the pole.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/6.using-the-steel-strips.png"
width="45%"
caption="Using the steel strips"
/>

:::tip 📝 NOTE
The pole diameter supported by the included steel strips is 55 ~ 80&nbsp;mm.
:::

3. Link the connector of the RAK2470 to the corresponding port.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/7.adding-the-connector.png"
width="45%"
caption="Adding the connector"
/>

## Connect to a Device

There are two ways to connect devices to RAK2470:

- When the device has its own power source (e.g. a MPPT solar charge controller), it can be directly connected to the connector on the RAK2470.
- When the device cannot provide power, it needs to be powered through the T-type conversion cable as follows:

  1. The Modbus device or RS485 sensor is connected to the L20-4 four-core straight-through port of the T-type conversion cable.
  2. RAK2470 connects to the M12-4 female-pin port (threaded) of the T-type conversion cable.
  3. The DC port for connection to a power supply.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/8.connecting-the-bridge-to-a-device.png"
width="80%"
caption="Connecting the bridge to a device"
/>
