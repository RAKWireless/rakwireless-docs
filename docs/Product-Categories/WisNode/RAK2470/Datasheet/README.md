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
width="40%"
caption="RAK2470 overview"
/>

### Description

The **RAK2470 WisNode Bridge Serial Prime** is an RS485 to LoRaWAN converter designed for outdoor industrial applications. It uses LoRaWAN network to wirelessly transmit RS485 data to and from the end devices. This device also has an RS485 interface that can connect to any RS485 device, such as an MPPT Solar Charge Controller, Inverter, or Inverter Integrated Machine.

The WisNode Bridge can be customized using the adapter cable. One end is matched with the J4 connector of the PCBA, while the other can be matched to the use case. Although two pre-existing options are offered (USB 3.0 Connector and 4-pin Circular Connector), customization is still possible upon request.

RAK2470, together with a RAK WisGate gateway and LoRa Server products, can quickly and easily build a wireless industrial field control system. It adopts an industrial protection design, supports a wide range of voltage supplies, supports pole mounting, and facilitates field installation and use.

### Features

- **LoRaWAN 1.0.3** protocol stack
- **Supported LoRaWAN Class:** A and C
- **Industrial grade STM MCU:** Ultra-low power (**4&nbsp;µA sleep**) and wide temperature range of operation
- **Input range:** 5 ~ 12&nbsp;V<sub>DC</sub>
- **Mounting:** Pole
- IP67 weatherproof


## Specifications

### Overview

| Parameter           | Value                                            | Remarks                                                              |
|---------------------|--------------------------------------------------|----------------------------------------------------------------------|
| LoRaWAN Protocol    | LoRaWAN 1.0.3                                    |                                                                      |
| LoRa Frequency      | RU864, IN865, EU868, US915,  AU915, KR920, AS923 | Model specific                                                       |
| LoRaWAN Mode        | Class A, and C                                   |                                                                      |
| LoRa Tx Power       | 20&nbsp;dBm                                      |                                                                      |
| LoRa Antenna        | Built-in-the-body fiberglass antenna             | 863~928&nbsp;MHz<br>VSWR < 2<br>Efficiency > 80%<br>Max Gain: 3&nbsp;dBi |
| RS485 Data Rate     | 115200&nbsp;bps                                  |                                                                      |
| Input Voltage       | 5 ~ 12&nbsp;V                                    |                                                                      |
| Enclosure Material  | Fiberglass                                       |                                                                      |
| Dimensions          | 30 × 215&nbsp;mm                                 |                                                                      |
| Protection Grade    | IP67                                             |                                                                      |
| Installation        | Pole                                             |                                                                      |
| Working Temperature | -20 ~ +70&nbsp;°C                                | Typical +25&nbsp;°C                                                  |
| Storage Temperature | -30 ~ 85&nbsp;°C                                 |                                                                      |



### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK2470 WisNode Bridge Serial Prime.

#### Interfaces

The **RAK2470 WisNode Bridge Serial Prime** comes with an M12-4 circular connector (including power and RS485 data interfaces). The power interface needs to be powered by a DC power supply (5&nbsp;V ~ 12&nbsp;V) and the voltage must be stable.

In addition, the RS485 host baud rate is 115200, and multiple devices can be connected.

#### Pin Definition

##### Definition of I/O Parameters

| Type | Description   |
|------|---------------|
| IO   | Bidirectional |
| PI   | Power input   |
| N/A  | Not connected |

##### M12-4 Circular Connector Pin Definition

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/3.m12-4-connector-pin-definition.png"
width="40%"
caption="M12-4 connector pin definition"
/>

| Pin # | Circular connector | Type | Description | Remarks       |
|-------|--------------------|------|-------------|---------------|
| 1     | VCC                | PI   | Power In    | 5 ~ 12&nbsp;V |
| 2     | RS485_A            | IO   | RS485 A+    |               |
| 3     | RS485_B            | IO   | RS485 B-    |               |
| 4     | GND                | PI   | GND         |               |

#### T-Type Conversion Cable

The RAK2470 comes with a T-type conversion cable with a length of 1&nbsp;m for each branch. Using this conversion cable, the RAK2470 can be connected to any sensor of the RS485 interface, and power can be supplied to both the RAK2470 and the connected sensor via the DC power port.

As shown in the figure below, the T-type conversion cable consists of an L20-4 Four-core Straight-through Port for connecting RS485 sensors, an M12-4 Female-pin Port for connecting to the RAK2470, and a DC port for power supply.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/4.t-type-conversion-cable.png"
width="80%"
caption="T-type conversion cable"
/>

## Installation

RAK2470 allows for pole mounting. Follow the provided installation steps to ensure secure mounting.

1. Fix the RAK2470 to the mounting kit with four (4) M4*20 screws.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/5.fixing-the-device-to-the-mounting-kit.png"
width="40%"
caption="Fixing the device to the mounting kit"
/>


2. Using two (2) steel strips, fasten the RAK2470 on the pole.

<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/6.using-the-steel-strips.png"
width="40%"
caption="Using the steel strips"
/>


:::tip 📝 NOTE:
The pole diameter supported by the included steel strips is 55~80&nbsp;mm.
:::


3. Link the connector of the RAK2470 to the corresponding port.


<rk-img
src="/assets/images/wisnode/rak2470-n/datasheet/7.adding-the-connector.png"
width="40%"
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

