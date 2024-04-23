---
rak_desc: Provides comprehensive information about your RAK2461 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/RAK2470/datasheet/RAK2470.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2470

---

# RAK2470 WisNode Bridge Serial Prime

## Overview

### Description

The **RAK2470 WisNode Bridge Serial Prime** is an RS485 to LoRaWAN converter designed for outdoor industrial applications. It uses LoRaWAN network to wirelessly transmit RS485 data to and from the end devices. This device also has an RS485 interface that can connect to any RS485 device, such as an MPPT Solar Charge Controller, Inverter, or Inverter Integrated Machine.

The WisNode Bridge can be customized using the adapter cable. One end is matched with the J4 connector of the PCBA, while the other can be matched to the use case. Although two pre-existing options are offered (USB 3.0 Connector and 4-pin Circular Connector), customization is still possible upon request.

RAK2470, together with a RAK WisGate gateway and LoRa Server products, can quickly and easily build a wireless industrial field control system. It adopts an industrial protection design, supports a wide range of voltage supplies, supports pole mounting, and facilitates field installation and use.

### Features

- **LoRaWAN 1.0.3** protocol stack
- **Supported LoRaWAN Class:** A, B, and C
- **Industrial grade STM MCU:** Ultra-low power (**4&nbsp;µA sleep**) and wide temperature range of operation
- **Input range:** 5 ~ 12&nbsp;V<sub>DC</sub>
- **Mounting:** Pole
- IP67 weatherproof
- Customizable adapter cable upon request

## Specifications

### Overview

| Parameter           | Value                                            | Remarks                                                              |
| ------------------- | ------------------------------------------------ | -------------------------------------------------------------------- |
| LoRaWAN Protocol    | LoRaWAN 1.0.3                                    |                                                                      |
| LoRa Frequency      | RU864, IN865, EU868, US915,  AU915, KR920, AS923 | Model specific                                                       |
| LoRaWAN Mode        | Class A, B, & C                                  |                                                                      |
| LoRa Tx Power       | 20&nbsp;dBm                                      |                                                                      |
| LoRa Antenna        | Built-in-the-body fiberglass antenna             | 863~928&nbsp;MHz<br>VSWR<2<br>Efficiency>80%<br>Max Gain: 3&nbsp;dBi |
| RS485 Data Rate     | 115200&nbsp;bps                                  |                                                                      |
| Input Voltage       | 5 ~ 12&nbsp;V                                    |                                                                      |
| Enclosure Material  | Fiberglass                                       |                                                                      |
| Dimensions          | 30 × 215&nbsp;mm                                 |                                                                      |
| Protection Grade    | IP67                                             |                                                                      |
| Installation        | Pole                                             |                                                                      |
| Working Temperature | -20 ~ +70°&nbsp;C                                | Typical +25°&nbsp;C                                                  |
| Storage Temperature | -30 ~ 85°&nbsp;C                                 |                                                                      |



### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK2470 WisNode Bridge Serial Prime.

#### Interfaces

RAK2470 WisNode Bridge Serial Prime provides power and RS485 data interfaces that can be customized in the matter of the connector per request.

##### Power Supply and Configuration Interface

RAK2470 can be supplied through the VCC (J4/pin1) and GND (J4/pin4) by a DC power supply (5&nbsp;V ~ 12&nbsp;V) and the voltage must be stable.

##### RS485 Interface

The RS485 interface is connected to J4 connectors with power supply PINs: RS485_A (J4/Pin 2) and RS485_B (J4/Pin 3). Any type of adapter cable can be used, as long as one terminal matches J4. In addition, the RS485 host baud rate is 115200, and multiple devices can be connected.

##### Connector Options

The device can be customized using the adapter cable, which has one end that is compatible with the PCBA's J4 connector and the other that is tailored to a particular application.

:::tip 📝 NOTE:
For custom connectors, contact RAK support at <a href="mailto:inquiry@rakwireless.com" target="_blank">inquiry@rakwireless.com</a>.
:::

## Installation

RAK2470 allows for pole mounting. Follow the provided installation steps to ensure secure mounting.

1. Fix the RAK2470 to the mounting kit with four (4) M4*20 screws.


<rk-img
  src="/assets/images/wisnode/RAK2470/datasheet/fixing.png"
  width="40%"
  caption="Fixing the device to the mounting kit"
/>


2. Using two steel strips, fasten the RAK2470 on the pole.


<rk-img
  src="/assets/images/wisnode/RAK2470/datasheet/steel_strips.png"
  width="40%"
  caption="Using the steel strips"
/>


:::tip 📝 NOTE:
The pole diameter supported by the included steel strips is 55~80&nbsp;mm.
:::


3. Link the RAK2470 to the matching port of another device using the chosen connector.


<rk-img
  src="/assets/images/wisnode/RAK2470/datasheet/connecting_device.png"
  width="40%"
  caption="Connecting to another device"
/>


