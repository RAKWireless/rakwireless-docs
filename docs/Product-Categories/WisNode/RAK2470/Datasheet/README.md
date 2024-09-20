---
rak_desc: Provides comprehensive information about your RAK2470 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2470-n/datasheet/RAK2470.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2470
certifications:
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK2470/Certification/RAK2470_ROHS_Report.pdf]
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
- **Input range:** 5 ~ 12&nbsp;V<sub>DC</sub>
- **Mounting:** Pole
- IP67 weatherproof

## Specifications

### Overview

| Parameter           | Value                                                  | Remarks                                                                    |
|---------------------|--------------------------------------------------------|----------------------------------------------------------------------------|
| LoRaWAN Protocol    | LoRaWAN 1.0.3                                          |                                                                            |
| LoRa Frequency      | RU864, IN865, EU868, US915, AU915, KR920, CN470, AS923 | Model specific                                                             |
| LoRaWAN Mode        | Class C                                                |                                                                            |
| LoRa Tx Power       | 22&nbsp;dBm                                            |                                                                            |
| LoRa Antenna        | Built-in fiberglass antenna                            | 863 ~ 928&nbsp;MHz<br>VSWR < 2<br>Efficiency > 80%<br>Max Gain: 3&nbsp;dBi |
| RS485 Data Rate     | 115200&nbsp;bps                                        |                                                                            |
| Input Voltage       | 5 ~ 12&nbsp;V                                          |                                                                            |
| Enclosure Material  | Fiberglass                                             |                                                                            |
| Dimensions          | 30&nbsp;mm × 215&nbsp;mm                               |                                                                            |
| Protection Grade    | IP67                                                   |                                                                            |
| Installation        | Pole                                                   |                                                                            |
| Working Temperature | -40°&nbsp;C ~ +85°&nbsp;C                              | Typical +25°&nbsp;C                                                        |
| Storage Temperature | -40°&nbsp;C ~ +85°&nbsp;C                               |                                                                            |

### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK2470 WisNode Bridge Serial Prime.

#### Interfaces

The **RAK2470 WisNode Bridge Serial Prime** comes with an M12-4 circular connector (including power and RS485 data interfaces). The power interface needs to be powered by a DC power supply (5 ~ 12&nbsp;V) and the voltage must be stable.

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
width="35%"
caption="M12-4 connector pin definition"
/>

| Pin # | Circular connector | Type | Description | Remarks       |
|-------|--------------------|------|-------------|---------------|
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


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />