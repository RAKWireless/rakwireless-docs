---
prev: ../Quickstart/
next: false
tags:
  - Datasheet
  - Blues.ONE
  - WisTrio
  - Cellular
  - Blues.IO
  - Notecard
rak_desc: Provides comprehensive information about your Blues.ONE LTE-M, NB-IoT, GSM cellular, and LoRaWAN Development Board to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/wistrio/bluesone/bluesone.png
---

# Blues.ONE LTE-M, NB-IoT, GSM Cellular, and LoRaWAN Development Board

## Overview

### Description

The **RAKwireless Blues.ONE** is a versatile IoT device that combines cellular IoT (LTE-M/NB-IoT) and LoRaWAN technology, making it ideal for a wide range of IoT applications. The device is based on the Nordic nRF52840 SoC, Semtech SX1262 LoRa transceiver, and a Blues.IO Notecard with built-in GPS, providing a powerful and flexible platform for IoT development.

Blues.ONE also supports modular sensor modules based on the WisBlock platform, providing developers with a range of sensors and interfaces that can be easily integrated with the device. This modular approach to sensor integration allows developers to quickly and easily customize the device to meet the specific needs of their application without having to design and build custom hardware.

Overall, the RAKwireless Blues.ONE is a powerful and flexible IoT device that provides a range of connectivity options, security features, and modular sensor module support. It is an ideal device for developers looking to quickly and easily develop and deploy secure and customizable IoT applications.

### Features

- LoRaWAN 1.0.2 protocol stack (supports Class A & C)
- Bluetooth Low Energy 5.0 protocol stack
- NB-IoT and LTE-M
- Nordic nRF52840:
  - Ultra-low-power MCU
  - 32-bit ARM® Cortex-M4F CPU
  - 4&nbsp;MHz CPU clock
  - 1&nbsp;MB Flash, 256&nbsp;KB RAM
  - Wide range of connections:
    - I2C, SPI, Analog inputs,
    - Digital inputs and outputs
- Semtech SX1262:
  - Low power and high range
  - LoRa transceiver
- Blues Notecard NOTE-NBGL-500
  - Quectel BG-95 M3
  - Supports LTE-M, NB-IoT and GSM networks
  - IPEX connectors for the cellular and GNSS antenna
  - USB Type C debug and log output connector
  - Built-in eSIM card and optional external Nano SIM and ESIM options
  - GNSS location
- Unify Enclosure 100x75x38&nbsp;mm
  - IP65 enclosure
  - Prepared for USB access and an external LTE antenna
  - 3&nbsp;dBi external LTE antenna
  - Matching SMA to IPEX connector
  - Internal LoRaWAN and BLE antennas on the mounting plate
  - Internal GNSS antenna

## Specifications

### Overview

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/bluesone-set.png"
  width="60%"
  caption="Blues.ONE Complete Set"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfaces, modules, RF sections, and their corresponding antennas. It also covers the standard parameters in terms of electrical, mechanical, and environmental aspects of the Blues.ONE.

#### Interfaces

The Blues.ONE is enclosed by a custom Unify Enclosure with holes for the following interfaces:

- USB-C for firmware update and debugging (also used for charging)
- M8 circular connector for charging
- SMA connector for cellular antenna

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/m8.png"
  width="25%"
  caption="Circular M8 connector"
/>

| Pin | Wire Color on Breakout Cable | Usage                            |
| --- | ---------------------------- | -------------------------------- |
| 1   | Black                        | Ground                           |
| 2   | NA                           | NA                               |
| 3   | NA                           | NA                               |
| 4   | NA                           | NA                               |
| 5   | Red                          | Power (typical input 5.5&nbsp;V) |

#### Power Supply with External 5V

::: tip ⚠️ Info
The RAK13102 module and the connected WisBlock Base Board and Core module can be supplied with a regulated 5&nbsp;V DC supply through the P1 connector on the bottom. A matching connector is available with the [M8 Power Connector](https://store.rakwireless.com/products/m8-power-connector).
:::

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/ex-power.png"
  width="50%"
  caption="5V supply through M8 power connector"
/>

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/m8-power.png"
  width="50%"
  caption="M8 power connector"
/>

#### Modules Inside Blues.ONE

Blues.ONE is composed of several WisBlock modules, which include base, core, and wireless module boards.

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/modules.png"
  width="60%"
  caption="WisBlock Modules inside Blues.ONE"
/>

| Module                                                                            | Chipset                                               | Description                                                           |
| --------------------------------------------------------------------------------- | ----------------------------------------------------- | --------------------------------------------------------------------- |
| [RAK4631](/Product-Categories/WisBlock/RAK4631/Datasheet/)                        | nRF52840 (Nordic Semiconductor) <br> SX1262 (Semtech) | WisBlock Core based on NRF52840 (MCU + BLE) and SX1262 (LoRa/LoRaWAN) |
| [RAK13102](/Product-Categories/WisBlock/RAK13102/Datasheet/)                      | NA                                                    | WisBlock IO module for the Blues.IO Notecard                          |
| [RAK19007](/Product-Categories/WisBlock/RAK19007/Datasheet/)                      | NA                                                    | WisBlock Base board with USB connector and Li-ion Charger             |
| [Blues.IO Notecard](https://shop.blues.io/collections/notecard/products/notecard) | Quectel BG-95 M3                                      | Blues.IO Notecard NBGL-500 to be used in 35+ global markets           |

#### RF and Antenna Characteristics

##### LoRaWAN

Blues.ONE supports the LoRaWAN bands, as shown in the table below:

| Region        | Frequency (MHz) | Core Module |
| ------------- | --------------- | ----------- |
| India         | IN865           | RAK4630(H)  |
| Europe        | EU868           | RAK4630(H)  |
| North America | US915           | RAK4630(H)  |
| Canada        | US915           | RAK4630(H)  |
| Australia     | AU915           | RAK4630(H)  |
| Korea         | KR920           | RAK4630(H)  |
| Asia          | AS923-1/2/3/4   | RAK4630(H)  |

##### Bluetooth (BLE)

The Bluetooth functionality of Blues.ONE is a feature built-in to the nRF52840 MCU inside the WisBlock Core RAK4631.

| Parameter          | Detail                                                 |
| ------------------ | ------------------------------------------------------ |
| BLE Protocol       | BLE 5.0                                                |
| BLE Tx Power       | 8&nbsp;dBm max                                         |
| BLE Rx Sensitivity | 95&nbsp;dBm @ 1&nbsp;Mbps BLE mode                     |
| BLE Data Rate      | 2&nbsp;Mbps, 1&nbsp;Mbps, 500&nbsp;Kbps, 125&nbsp;Kbps |

###### LoRaWAN and BLE Antenna

Blues.ONE uses a WisBlock baseplate that has a built-in antenna for LoRa Sub-GHz antenna and 2.4&nbsp;GHz for Bluetooth BLE.

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/wisblock_baseplate.png"
  width="40%"
  caption="WisBlock Mounting Plate with Antenna"
/>

The designs for 8xx and 9xx MHz are different to optimally achieve the best efficiency and range possible.

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/wisblock-plate-antenna.png"
  width="60%"
  caption="8xx and 9xx MHz Marking"
/>

These PCB antennas are connected to the WisBlock Core via an IPEX connector.

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/wisblock-plate-antenna-connect.png"
  width="45%"
  caption="IPEX Connector of the Antenna "
/>

You can check the complete [8xx MHz Antenna Datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/WisBlock%20Base%20Plate%20863-870Mhz%20Antenna%20Datasheet.pdf) and [9xx MHz Antenna Datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/WisBlock%20Base%20Plate%20902-928Mhz%20Antenna%20Datasheet.pdf) and get the more details.

##### Cellular

The Blues.IO Notecard used in the Blues.ONE supports LPWAN cellular technologies like LTE-M, NB-IoT, and GSM networks. It utilizes the Quectel BG95-M3 chipset.

The datasheet for the NOTE-NBGL-500 Notecard is available from the [Blues.IO Developer pages](https://dev.blues.io/datasheets/notecard-datasheet/note-nbgl-500/#blues-notecard%C2%AE-datasheet).

###### Cellular Antenna

The dipole antenna for LTE-M and NB-IoT is externally connected via an SMA connector. You can check the [complete antenna datasheet](https://downloads.rakwireless.com/Accessories/Antenna/SMA-Antenna/SMA-J-Cellular_Antenna_Specification.pdf) to get more details about the antenna.

| Parameter             | Detail              |
| --------------------- | ------------------- |
| Frequency Range (MHz) | 600 - 6000&nbsp;MHz |
| Peak Gain (dBi)       | -2.0 - 5.5&nbsp;dBi |
| VSWR                  | < 3.5               |
| Return Loss           | < 5.0               |
| Polarization Mode     | Linear              |
| Radiation Pattern     | Omnidirectional     |
| Connector Type        | SMA                 |

###### GPS Antenna

<rk-img
  src="/assets/images/wistrio/bluesone/datasheet/gps-antenna.png"
  width="50%"
  caption="GPS Antenna"
/>

| Item                                                           | Specifications        | PET  |
| -------------------------------------------------------------- | --------------------- | ---- |
| Range of Receiving Frequency                                   | 1575.42 ± 1.1         | ±2.5 |
| Center Frequency (MHz) w/ 30&nbsp;mm<sup>2</sup> (2 GND plane) | 1575.42               | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10&nbsp;dB)                    | ≥10                   | ±0.5 |
| VSWR (in Center Frequency)                                     | ≤1.5                  | ±0.5 |
| Gain (Zenith) (dBi Typ.) w/ 70&nbsp;mm<sup>2</sup> GND Plane   | 4.5                   | ±0.5 |
| Axial Ratio (dB) w/ 70&nbsp;mm<sup>2</sup> GND Plane           | 3.0                   | ±0.2 |
| Polarization                                                   | Right-Handed Circular |      |
| Impedance (Ω)                                                  | 50                    |      |
| Frequency Temperature Coefficient (ppm/ºC)                     | 0±10                  |      |

#### Electrical Characteristics

##### Absolute Maximum Ratings

Exposure to maximum rating conditions may affect device reliability; therefore, the functional operation of the device under the conditions listed below is not advised.

| Parameter                  | Minimum | Maximum | Unit |
| -------------------------- | ------- | ------- | ---- |
| VBAT                       | -0.3    | +4.2    | V    |
| VBUS                       | -0.3    | +5.5    | V    |
| EX_POWER                   | -0.3    | +5.5    | V    |
| Power supply peak current0 | 0       | 2       | A    |

:::warning ⚠️ WARNING
The Blues.ONE modules, like any electronic equipment, are sensitive to electrostatic discharge (ESD). Improper handling can cause permanent damage to the module.
:::

##### Power Requirements

::: tip 📝 NOTE
Complete details of the battery and solar changing connections can be found on the [RAK19007 datasheet](/Product-Categories/WisBlock/RAK19007/Datasheet/#electrical-characteristics).
:::

Blues.ONE is powered by a rechargeable Li-ion battery. The nominal operating voltage of the battery should be within the range in the table:

| Min | Type | Max | Unit |
| --- | ---- | --- | ---- |
| 3.3 | 3.7  | 4.3 | V    |

As an alternative, you can power the Blues.ONE directly from an external regulated 5&nbsp;V DC supply with 2&nbsp;A. The nominal operating voltage of the external source should be within the range in the table:

| Min | Type | Max | Unit |
| --- | ---- | --- | ---- |
| 4.5 | 5.0  | 5.5 | V    |

The USB connector can be used as a charging port as well as via the M8 circular connector. The voltage and current fed to the battery through the port should not exceed the ones in the table below.

| Parameter        | Value                   |
| ---------------- | ----------------------- |
| Charging Voltage | 4.5&nbsp;V ~ 5.5&nbsp;V |
| Charging Current | 500&nbsp;mA             |

A suitable Li-ion battery should have the following parameters:

| Parameter         | Value       |
| ----------------- | ----------- |
| Standard Voltage  | 3.7&nbsp;V  |
| Charging Voltage  | 4.2&nbsp;V  |
| Capacity          | As required |
| Discharge Current | 2&nbsp;A    |

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and, eventually, other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements:

|        Parameter        |     Min     |   Typical   |     Max     |
| :---------------------: | :---------: | :---------: | :---------: |
| Operational Temp. Range | -35°&nbsp;C | +25°&nbsp;C | +75°&nbsp;C |
|  Extended Temp. Range   | -40°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |
|   Storage Temp. Range   | -40°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |

#### Mechanical Characteristics

##### Module Dimensions

The complete details of the module dimensions and enclosure can be found on their specific datasheet.

- [RAK19007 WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Datasheet/#mechanical-characteristics)
- [RAK13102 WisBlock Wireless](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13102/Datasheet/#board-dimensions)
- [Outdoor Unify Enclosure 100x75x38](https://docs.rakwireless.com/Product-Categories/WisBlock/RAKBox-UO100x75x38/Datasheet/#enclosure-mechanical-dimensions)


### Software

- [Blues WisBlock Tracker](https://github.com/beegee-tokyo/Blues-WisBlock-Tracker)↗️ This is the default firmware that is pre-flashed on the Blues.ONE Solution.
