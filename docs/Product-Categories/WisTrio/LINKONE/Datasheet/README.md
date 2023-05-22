---
prev: ../Quickstart/
next: false
tags:
  - Datasheet
  - Link.ONE
  - WisTrio
rak_desc: Provides comprehensive information about your Link.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/wistrio/linkone/linkone.png
---

# Link.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board Datasheet

## Overview
### Description

The **RAKwireless Link.ONE** is a versatile IoT device that combines Cellular IoT (LTE-M/NB-IoT) and LoRaWAN technology, making it ideal for a wide range of IoT applications. The device is based on the Nordic nRF52840 SoC, Semtech SX1262 LoRa transceiver, and Quectel BG77 LTE module with built-in GPS, providing a powerful and flexible platform for IoT development. Additionally, Link.ONE includes Monogoto SIM which provides global cellular connectivity service for IoT devices, ensuring that the device can connect to the cloud regardless of location.

Link.ONE also includes support for modular sensor modules based on the WisBlock platform, providing developers with a range of sensors and interfaces that can be easily integrated with the device. This modular approach to sensor integration allows developers to quickly and easily customize the device to meet the specific needs of their application, without having to design and build custom hardware.

Overall, the RAKwireless Link.ONE is a powerful and flexible IoT device that provides a range of connectivity options, security features, and modular sensor module support, making it an ideal choice for developers looking to quickly and easily develop and deploy secure and customizable IoT applications.

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
- Quectel BG77 module
  - UART communication with nRF52840
  - Programmable with Quectel AT command set
  - IPEX connectors for external LTE and GPS antennas
  - Nano SIM and ESIM options
  - Supports LTE CAT M1 and LTE CAT NB2
  - GNSS location
- Monogoto SIM card
  - Data package of 500&nbsp;Mb for 10&nbsp;years
  - Worldwide coverage, see Monogoto coverage map
- Unify Enclosure 100x75x38&nbsp;mm
  - IP65 enclosure
  - Prepared for USB access and an external LTE antenna
  - 3&nbsp;dBi external LTE antenna
  - Matching SMA to IPEX connector
  - Internal LoRaWAN and BLE antenna on the mounting plate
  - Internal GNSS antenna

## Specifications

### Overview

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/linkone-set.png"
  width="60%"
  caption="Link.ONE Complete Set with Monogoto SIM card"
/>

### Hardware

The hardware specification is categorized into several parts. It discusses the interfaces, modules, RF sections, and their corresponding antennas. It also covers the standard parameters in terms of Electrical, Mechanical, and Environmental details.

#### Interfaces

The Link.ONE is enclosed by a custom Unify Enclosure with holes for the following interfaces:

- USB-C for firmware update and debugging (also used for charging)
- M8 circular connector for charging
- SMA connector for cellular antenna

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/m8.png"
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

#### Modules Inside Link.ONE

Link.ONE is composed of several WisBlock modules, which include base, core, and wireless module boards.

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/modules.png"
  width="60%"
  caption="WisBlock Modules inside Link.ONE"
/>

| Module                                                       | Chipset                                               | Description                                                           |
| ------------------------------------------------------------ | ----------------------------------------------------- | --------------------------------------------------------------------- |
| [RAK4631](/Product-Categories/WisBlock/RAK4631/Datasheet/)   | nRF52840 (Nordic Semiconductor) <br> SX1262 (Semtech) | WisBlock Core based on NRF52840 (MCU + BLE) and SX1262 (LoRa/LoRaWAN) |
| [RAK5860](/Product-Categories/WisBlock/RAK5860/Datasheet/)   | BG77 (Quectel)                                        | WisBlock Cellular Wireless based on Quected BG77 NB-IoT and LTE-M     |
| [RAK19007](/Product-Categories/WisBlock/RAK19007/Datasheet/) | NA                                                    | WisBlock Base board with USB connector and Li-ion Charger             |

#### RF and Antenna

##### LoRaWAN

Link.ONE supports the LoRaWAN bands as shown in the table below:

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

The Bluetooth functionality of Link.ONE is a feature built-in to the nRF52840 MCU inside the WisBlock Core RAK4631.

| Parameter          | Detail                                                 |
| ------------------ | ------------------------------------------------------ |
| BLE Protocol       | BLE 5.0                                                |
| BLE Tx Power       | 8&nbsp;dBm max                                         |
| BLE Rx Sensitivity | 95&nbsp;dBm @ 1&nbsp;Mbps BLE mode                     |
| BLE Data Rate      | 2&nbsp;Mbps, 1&nbsp;Mbps, 500&nbsp;Kbps, 125&nbsp;Kbps |

###### LoRaWAN and BLE Antenna

Link.ONE uses a WisBlock baseplate that has a built-in antenna for LoRa Sub-Ghz Antenna and 2.4&nbsp;Ghz for Bluetooth BLE.

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/wisblock_baseplate.png"
  width="40%"
  caption="WisBlock Mounting Plate with Antenna"
/>

The designs for 8xx and 9xx MHz are different to optimally achieve the best efficiency and range possible

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/wisblock-plate-antenna.png"
  width="60%"
  caption="8xx and 9xx MHz Marking"
/>

These PCB antennas are connected to WisBlock Core via an IPEX connector.

<rk-img
  src="/assets/images/wistrio/linkone/datasheet/wisblock-plate-antenna-connect.png"
  width="45%"
  caption="IPEX Connector of the Antenna "
/>

You can check the complete [8xx MHz Antenna Datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/WisBlock%20Base%20Plate%20863-870Mhz%20Antenna%20Datasheet.pdf) and [9xx MHz Antenna Datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/WisBlock%20Base%20Plate%20902-928Mhz%20Antenna%20Datasheet.pdf) and get the more details.

##### Cellular

Link.ONE supports LPWAN Cellular technologies like LTE-M and NB-IoT. It includes a Monogot SIM card with a 500&nbsp;MB data plan that is usable for 10&nbsp;years.

###### Frequency Bands

|                          Cat M1                           |                        Cat NB2                        |                GNSS                 |
| :-------------------------------------------------------: | :---------------------------------------------------: | :---------------------------------: |
| B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B26/B27/B28/B66 | B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/B28/B66/B71 | GPS, GLONASS, BeiDou, Galileo, QZSS |

###### Cellular Specification

| Item               | CAT M1                                       | CAT NB2                                       | CAT NB1                                   |
| ------------------ | -------------------------------------------- | --------------------------------------------- | ----------------------------------------- |
| Data               | Max. 588&nbsp;kbps (DL)/ 1119&nbsp;kbps (UL) | Max. 127&nbsp;kbps (DL)/ 158.5&nbsp;kbps (UL) | Max. 32&nbsp;kbps (DL)/ 70&nbsp;kbps (DL) |
| Output Power (Max) | 21&nbsp;dBm                                  | 21&nbsp;dBm                                   | 21&nbsp;dBm                               |
| VoLTE              | Supported                                    | Not Supported                                 | Not Supported                             |

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
  src="/assets/images/wistrio/linkone/datasheet/gps-antenna.png"
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

Exposure to maximum rating conditions may affect device reliability therefore the functional operation of the device under the conditions listed below is not advised.

| Ratings                        | Maximum Value (V) |
| ------------------------------ | ----------------- |
| Vbus, power supply on UBS port | -0.3 - 5.5        |
| Vbat, battery voltage          | -0.3 - 4.3        |
| Vconn solar panel voltage      | -0.3 - 5.5        |

:::warning ⚠️ WARNING
The modules of Link.ONE, like any electronic equipment, is sensitive to electrostatic discharge (ESD). Improper handling can cause permanent damage to the module.
:::

##### Power Requirements

::: tip 📝 NOTE
Complete details of the battery and solar changing connections can be found on the [RAK19007 datasheet](/Product-Categories/WisBlock/RAK19007/Datasheet/#electrical-characteristics).
:::

Link.ONE is powered by a rechargeable Li-ion battery. The nominal operating voltage of the battery should be within the range in the table:

| Min | Type | Max | Unit |
| --- | ---- | --- | ---- |
| 3.3 | 3.7  | 4.3 | V    |

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
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board, to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

#### Mechanical Characteristics

##### Module Dimensions

The complete details of module dimensions and enclosure can be found on their specific datasheet.

- [RAK19007 WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Datasheet/#mechanical-characteristics)
- [RAK5860 WisBlock Wireless](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5860/Datasheet/#board-dimensions)
- [Outdoor Unify Enclosure 100x75x38](https://docs.rakwireless.com/Product-Categories/WisBlock/RAKBox-UO100x75x38/Datasheet/#enclosure-mechanical-dimensions)

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements:

|        Parameter        |     Min     |   Typical   |     Max     |
| :---------------------: | :---------: | :---------: | :---------: |
| Operational Temp. Range | -35°&nbsp;C | +25°&nbsp;C | +75°&nbsp;C |
|  Extended Temp. Range   | -40°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |
|   Storage Temp. Range   | -40°&nbsp;C | +25°&nbsp;C | +80°&nbsp;C |
