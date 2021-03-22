---
static_root: /assets/images/wistrio/rak8212/datasheet
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wistrio
---

# RAK8212 WisTrio iTracker Pro Datasheet

<!---
<rk-img
  :src="`${$frontmatter.static_root}/rak8212-overview.png`"
  width="30%"
  caption="RAK8212 WisTrio iTracker Pro"
/>
-->

## Overview

### Description

The **iTracker Pro RAK8212** is versatile developer board aimed at aiding in quick prototypes using NB-IOT. The board includes a vast array of connectivity options like **NB-IoT**, **Bluetooth 5.0** and **GPS** and sensors like an **accelerometer**, **light sensor** and **barometric sensor**. At the heart of the module is the venerable **Nordic NRF52832 BLE** processor. The NB-IoT connectivity is provided by the **Quectel BG96 module**. The RAK8212 module is **Arduino friendly** and can be programmed using the IDE. The board also provides **SWD interface** for programming the **NRF52832** core. The combination of BLE and NB-IoT provides flexible low power consumption development along with myriad of application option ranging from telemetry to live tracking and environment sensing.

Applications can be made with the RAK8212 like Vehicle location/fleet transportation management, Safety monitoring of old/young children, Animal protection and animal husbandry management, Loss of assets / personnel positioning and Other remote, battery powered applications.

### Features

- **Arduino Compatible** – Host controller NRF52832 has been widely used in Arduino environment
- Integrated **Quectel BG96 NB-IoT wireless communication Module**, with GPS built-in
- Integrated **LIS3DH** ultra low-power, high performance 3-axes “nano” accelerometer
- Integrated **LIS2MDL** ultra-low-power, high-performance 3-axis digital magnetic sensor
- Integrated **BME280** ultra low-power, high linearity, high accuracy sensors for pressure, humidity and temperature
- Integrated **OPT3001** that measures the intensity of visible light
- Size: **43 mm x 38 mm x 18 mm**
- **Operation temperature** -40°C to +85°C
- Power supply 3.3 Volts to 5 Volts (power at solar panel connector P2).

### Bluetooth

- **Bluetooth 5.0**
- Single chip,highly flexible, 2.4 GHz multi-protocol
- **32-bit ARM Cortex-M4F Processor**
- **512 kB flash + 64 kB RAM**
- Supports concurrent Bluetooth low energy/ANT protocol operation
- Up to +4 dBm output power
- -96 dBm sensitivity, Bluetooth low energy
- 2 data rates (2 Mbps/1 Mbps)
- PPI-maximum flexibility for power-efficient applications and code simplification
- Automated power management system with automatic power management of each peripheral
- Configurable I/O mapping for analog and digital I/O  3 x Master/Slave SPI
- 2 x Two-wire interface (I²C)
- UART (RTS/CTS)
- 3 x PWM
- AES HW encryption
- 12-bit ADC
- Real Time Counter (RTC)
- Digital microphone interface (PDM)
- On-chip balun
- (OTA) Over-the-Air firmware update

### Applications

- Vehicle location / fleet transportation management
- Safety monitoring of old / young children
- Animal protection and animal husbandry management
- Loss of assets / personnel positioning
- Other remote, battery powered applications

## Specifications

### Overview

The overview covers the RAK8212 board overview where the front and back views are presented. It also includes the block diagram that shows the core of the module.

#### Module Overview

<rk-img
  :src="`${$frontmatter.static_root}/top-view.jpg`"
  width="35%"
  caption="RAK8212 WisTrio iTracker Pro Top View"
/>

<rk-img
  :src="`${$frontmatter.static_root}/bottom-view.jpg`"
  width="35%"
  caption="RAK8212 WisTrio iTracker Pro Bottom View"
/>

#### Block Diagram

<rk-img
  :src="`${$frontmatter.static_root}/block-diagram.png`"
  width="80%"
  caption="System Block Diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the pinout and its corresponding functions and diagrams. It also covers the parameters and standard values of the board in terms of electrical and environmental

#### Pin Definition

<rk-img
  :src="`${$frontmatter.static_root}/pin-definition.png`"
  width="75%"
  caption="RAK8212 Pin Definition"
/>

| NO  | Name         | Type     | Description                               |
| --- | ------------ | -------- | ----------------------------------------- |
| P1  | VDD_nRF      | P        | VCC33                                     |
| P1  | SWDIO        | DI/DO    | Debug                                     |
| P1  | SWDCLK       | DI       | Debug                                     |
| P1  | GND          |          | Ground                                    |
| P2  | VBUS         | P        | Charging interface/Connect to Solar panel |
| P2  | GND          |          | Ground                                    |
| P3  | BAT          | P        | Power Supply                              |
| P3  | TEMP         | O        | Charge indicator                          |
| P3  | GND          |          | Ground                                    |
| P4  | RESET        | Reset    | Reset                                     |
| P4  | VCC33        | P        | VCC33                                     |
| P4  | GND          |          | Ground                                    |
| P4  | TILT_DOUT    | DI/DO,AI | Extended interface                        |
| P5  | SENSOR_DOUT1 | DI/DO,AI | Extended interface                        |
| P5  | SENSOR_DOUT2 | DI/DO,AI | Extended interface                        |
| P5  | VCC33        | P        | VCC33                                     |
| P5  | GND          |          | Ground                                    |

#### General Specifications

##### Overall Specification

| **Model Name**            | RAK8212                                                                                                         |
| ------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **Dimension**             | **L x W x H**: 43 mm x 38 mm x 18 mm                                                                            |
| **Interface**             | Digital I/O, Analog input                                                                                       |
| **Frequency Band**        | **Cat.M1/Cat.NB1:**<br>LTE FDD: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28<br>LTE TDD: B39 (for Cat.M1 only) |
|                           | **EGPRS:** 850/900/1800/1900MHz                                                                                 |
| **Antenna Type**          | External antenna                                                                                                |
| **Operating Temperature** | -40°C to +85°C                                                                                                  |
| **Storage Temperature**   | -40°C to +85°C                                                                                                  |
| **Power Supply**          | 3.5 Volts ~ 18 Volts                                                                                            |

##### GPS Specification

| **Feature**          | **Description**                                |
| -------------------- | ---------------------------------------------- |
| Navigation Satellite | GPS, GLONASS, BeiDou/Compass, Galileo and QZSS |
| Protocols            | NMEA 0183                                      |

##### GPRS Specification

| **Feature**        | **Description**                                                                                                 |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| Frequency Band     | **Cat.M1/Cat.NB1**:<br>LTE FDD: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28<br>LTE TDD: B39 (for Cat.M1 only) |
|                    | **EGPRS**:<br>850/900/1800/1900MHz                                                                              |
| Data rate          | **Cat.M1**:<br>Max. 375Kbps (DL), Max. 375Kbps (UL)                                                             |
|                    | **Cat.NB1**:<br>Max. 32Kbps (DL), Max. 70Kbps (UL)                                                              |
|                    | **GPRS**:<br>Max. 85.6Kbps (DL), Max. 85.6Kbps (UL                                                              |
|                    | **EDGE**:<br>Max. 236.8Kbps (DL), Max. 236.8Kbps (UL)                                                           |
| Message            | Send and receive point to point SMS                                                                             |
|                    | Text and PDU mode                                                                                               |
| Transmitting Power | Class 3 (23dBm±2.7dB) for LTE-FDD bands                                                                         |
|                    | Class 3 (23dBm±2.7dB) for LTE-TDD bands                                                                         |
|                    | Class 4 (33dBm±2dB) for GSM850                                                                                  |
|                    | Class 4 (33dBm±2dB) for GSM900                                                                                  |
|                    | Class 1 (30dBm±2dB) for DCS1800                                                                                 |
|                    | Class 1 (30dBm±2dB) for PCS1900                                                                                 |
|                    | Class E2 (27dBm±3dB) for GSM850 8-PSK                                                                           |
|                    | Class E2 (27dBm±3dB) for GSM900 8-PSK                                                                           |
|                    | Class E2 (26dBm±3dB) for DCS1800 8-PSK                                                                          |
|                    | Class E2 (26dBm±3dB) for PCS1900 8-PSK                                                                          |
| Sensitivity        | -103dBm @ LTE-TDD B39 3GPP                                                                                      |
| Power              | Power Consumption under LTE Cat.M1 Network:                                                                     |
|                    | **OFF State**                                                                                                   |
|                    | Power down Leakage Current 8 µA                                                                                 |
|                    | **Power Saving Mode**                                                                                           |
|                    | PSM @Real Network 10.4 µA                                                                                       |
|                    | **Standby State**                                                                                               |
|                    | DRX=1.28s @Real Network 1.99 mA                                                                                 |
|                    | **Active State**                                                                                                |
|                    | 23dBm @Instrument 190 mA                                                                                        |
|                    | 18dBm @Instrument 155 mA                                                                                        |
|                    | 12dBm @Instrument 136 mA                                                                                        |
|                    | 0dBm @Instrument 124 mA                                                                                         |
|                    | Data Transfer @Real Network 99 mA                                                                               |
|                    | Voice @Real Network 108 mA                                                                                      |
| Protocol           | TCP/UDP/PPP                                                                                                     |

#### RF Characteristics                                                             

| Item           | Specification                                                                                                                         |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Frequency Band | Cat.M1/Cat.NB1: LTE FDD: B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B26/B28 LTE TDD: B39 (for Cat.M1 only) <br>EGPRS: 850/900/1800/1900MHz |  |
#### Electrical Characteristics

##### Power Requirements

| Item         | Specification        |
| ------------ | -------------------- |
| Power Supply | 3.5 Volts ~ 18 Volts |

#### Environmental Characteristics

| Item                  | Specification  |
| --------------------- | -------------- |
| Operating Temperature | -40°C to +85°C |
| Storage Temperature   | -40°C to +85°C |

#### Schematic Diagram

<rk-img
  :src="`${$frontmatter.static_root}/schematic-1.png`"
  width="100%"
  caption="Schematic Diagram #1"
/>

<rk-img
  :src="`${$frontmatter.static_root}/schematic-2.png`"
  width="100%"
  caption="Schematic Diagram #2"
/>

<rk-img
  :src="`${$frontmatter.static_root}/schematic-3.png`"
  width="100%"
  caption="Schematic Diagram #3"
/>

<rk-img
  :src="`${$frontmatter.static_root}/schematic-4.png`"
  width="100%"
  caption="Schematic Diagram #4"
/>

<rk-img
  :src="`${$frontmatter.static_root}/schematic-5.png`"
  width="50%"
  caption="Schematic Diagram #5"
/>

### Software

Download the latest firmware of RAK8212 in the table provided below.

| Model     | Version  | Source                                                                                                |
| --------- | -------- | ----------------------------------------------------------------------------------------------------- |
| RAK8212   | V3.0.0.8 | [Download](https://downloads.rakwireless.com/Cellular/RAK8212/Firmware/RAK8212_Latest_Firmware.rar)   |
| RAK8212-M | V3.0.0.8 | [Download](https://downloads.rakwireless.com/Cellular/RAK8212/Firmware/RAK8212-M_Latest_Firmware.rar) |
