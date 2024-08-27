---
rak_desc: Provides comprehensive information about your RAK2461 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2461-n/datasheet/RAK2461.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2461
---

# RAK2461 WisNode Bridge IO Lite

## Overview

### Description

The **RAK2461 WisNode Bridge IO Lite** is an ideal solution for seamless LoRaWAN communication within industrial environments, providing different Digital Inputs, Outputs (Relay), and RS-485 communication. Engineered with industrial-grade reliability and based on the RAK3172-T LoRaWAN module, the RAK2461 ensures long-range connectivity, even in extreme temperatures from -20°&nbsp;C to +70°&nbsp;C.

This device can operate on all LoRaWAN bands within the standard parameters set by the LoRa Alliance. It offers versatile mounting options for easy installation in any environment, whether for industrial automation or smart city infrastructure. Together with a <a href="https://docs.rakwireless.com/Product-Categories/WisGate/" target="_blank"> RAK Gateway </a>, building a wireless industrial system or extending an existing one can be easy and quick. Moreover, the RAK2461 offers unparalleled performance and durability.

The device comes in two variants:

- RAK2461 Bridge IO Lite – RS485-DIx4-DOx1
- RAK2461 Bridge IO Lite – RS485-DOx4

| Model       | RS-485 | Relay (DO) | Photocoupler (DI) |
| ----------- | :----: | :--------: | :---------------: |
| RAK2461-X01 |   ✓    |   ✓ (4x)   |                   |
| RAK2461-X11 |   ✓    |     ✓      |      ✓ (4x)       |

### Features

- **LoRaWAN 1.0.3** protocol stack
- **Class support:** C
- One (1) **RS-485 host port**
- Four (4) **Relay NC/NO port** (optional)
- Four (4) **Photocoupler DI ports** and one (1) **Relay NC/NO port** (optional)
- **Power input:** 9&nbsp;V ~ 24&nbsp;V
- **Power output:** 9&nbsp;V ~ 24&nbsp;V (depending on the input)
- Based on the RAK3172-T module
- Wall and DIN rail mounting

## Specifications

### Overview

| Parameter               | Value                                                                                                                 | Remarks            |
| ----------------------- | --------------------------------------------------------------------------------------------------------------------- | ------------------ |
| LoRaWAN protocol        | LoRaWAN 1.0.3                                                                                                         |                    |
| LoRa frequency          | RU864, IN865, EU868, US915, AU915, KR920, KR923                                                                       | Model specific     |
| LoRaWAN mode            | Class C                                                                                                               |                    |
| LoRa Tx power           | 22&nbsp;dBm                                                                                                           |                    |
| LoRa antenna interface  | RP-SMA external omnidirectional antenna                                                                               |                    |
| RS485 data rate         | 9600                                                                                                                  |                    |
| RS485 carrying capacity | Up to 10 devices                                                                                                      |                    |
| RS485 protection        | 18&nbsp;kV HBM protection<br>13&nbsp;kV IEC61000-4-2 contact discharge<br>4&nbsp;kV IEC61000-4-4 fast transient burst |                    |
| Input voltage           | 9&nbsp;V~24&nbsp;V                                                                                                    | 5&nbsp;V for USB-C |
| Rated power             | DI type: 1&nbsp;W <br>DO type (Relay): 2&nbsp;W                                                                       |                    |
| Output voltage          | 9&nbsp;V~24&nbsp;V                                                                                                    |                    |
| Configuration interface | USB Type-C                                                                                                            |                    |
| LED indicator           | Power LED                                                                                                             |                    |
| Housing material        | Metal                                                                                                                 |                    |
| Dimensions              | 93.6×100.3×24&nbsp;mm                                                                                                 |                    |
| Protection grade        | IP31                                                                                                                  |                    |
| Installation method     | Wall, DIN rail                                                                                                        |                    |
| Working temperature     | -20°&nbsp;C to +70°&nbsp;C                                                                                            |                    |
| Storage temperature     | -20°&nbsp;C to +70°&nbsp;C                                                                                            |                    |
| Working humidity        | 0~90%&nbsp;RH                                                                                                         |                    |
| Storage humidity        | 0~90%&nbsp;RH                                                                                                         |                    |

#### Networking Applications

RAK2461 WisNode Bridge IO Lite provides different Digital Inputs, Outputs (Relay), and RS-485 communication. It can convert the data of the connected devices into LoRaWAN that can be sent to the cloud via a standard gateway. Cloud servers can also actively send data to RS-485 terminals and control the DI/DO data transmission, to achieve two-way data transmission. Using RAK2461, what used to be a costly and time-consuming cable line network deployment can be transformed into a rapid and cost-efficient wireless network deployment.

An example would be using the <a href="https://store.rakwireless.com/products/rak7289-8-16-channel-outdoor-lorawan-gateway" target="_blank">RAK7289V2</a> WisGate Edge Pro LoRaWAN gateway coupled with the RAK WisDM cloud management platform, to realize an end-to-end industrial field data acquisition and control system. Using the built-in LoRa Server, which comes standard with any RAK LoRaWAN gateway, one could seamlessly achieve transmission of the end device data to any application server. Furthermore, the MQTT integration allows for a high level of security and efficiency.

<rk-img
  src="/assets/images/wisnode/rak2461-n/datasheet/RAK2461_network_structure.png"
  width="100%"
  caption="RAK2461 WisNode Bridge IO Lite network structure"
/>

### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK2461 WisNode Bridge IO. It also includes the installation of which different types of mounting are presented.

#### Interfaces

<rk-img
  src="/assets/images/wisnode/rak2461-n/datasheet/RAK2461_top.png"
  width="70%"
  caption="RAK2461 WisNode Bridge IO Lite interfaces top (DO and DI)"
/>

<rk-img
  src="/assets/images/wisnode/rak2461-n/datasheet/RAK2461_bottom_1.png"
  width="70%"
  caption="RAK2461 WisNode Bridge IO Lite interfaces bottom (RS485-DOx4)"
/>

<rk-img
  src="/assets/images/wisnode/rak2461-n/datasheet/RAK2461_bottom_2.png"
  width="70%"
  caption="RAK2461 WisNode Bridge IO Lite interfaces bottom (RS485-DIx4-DOx1)"
/>

##### Power Supply and Configuration Interface

RAK2461 WisNode Bridge IO can be powered through the V<sub>IN</sub> (J1/pin1) by a DC power supply (9&nbsp;V~24&nbsp;V) and the voltage must be stable. V<sub>IN</sub> power is also used to power the V<sub>OUT</sub> (J4/pin3).

For configuration purposes, the device can be powered by the Console port only, but the Console port will not provide power to the V<sub>OUT</sub> (J4/pin3).

#### Data Interfaces

- **RS-485 interface**: RS-485 master baud rate is 9600. Multiple devices can be connected, but for more than 5 devices the recommended length is 30&nbsp;m.
- **Relay (DO)**: The maximum voltage is 240&nbsp;V. You can choose between NC and NO based on the use case. (DC - 30&nbsp;V / 3&nbsp;A, AC - 250&nbsp;V / 3&nbsp;A).
- **Photocoupler (DI)**: The maximum input voltage should be 5&nbsp;V and the DI com should be connected to the negative pole.

## Models/Bundles

| Model       | RS-485 | Relay (DO) | Photocoupler (DI) |
| ----------- | :----: | :--------: | :---------------: |
| RAK2461-X01 |   ✓    |   ✓ (4x)   |                   |
| RAK2461-X11 |   ✓    |     ✓      |      ✓ (4x)       |
