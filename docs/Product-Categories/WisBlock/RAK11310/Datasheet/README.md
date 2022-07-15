---
rak_desc: Provides comprehensive information about your RAK11310 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak11310/overview/RAK11310_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK11310
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/WisBlock/RAK11310/Certification/RAK11300_RAK11310_CE_cert.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/WisBlock/RAK11310/Certification/RAK11300_RAK11310_FCC_Certificate.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/WisBlock/RAK11310/Certification/RAK11300_RAK11310_ISED_Certificate.pdf]
  - [UKCA, https://downloads.rakwireless.com/LoRa/WisBlock/RAK11310/Certification/RAK11300_RAK11310_UKCA_cert.pdf]
---

# RAK11310 WisBlock LPWAN Module Datasheet

## Overview

### Description

**RAK11310** is a **WisBlock Core** module for the RAK hardware IoT platform **WisBlock**. It is powered by an RP2040 ARM microcontroller developed by the Raspberry Pi Foundation, combined with the SX1262 LoRa transceiver from Semtech. **RAK11310** can be programmed via the Arduino™ IDE, PlatformIO or MicroPython.

The RAK11310 WisBlock Core module has a RAK11300 LoRa stamp module in it together with a high-quality connector that is compatible with WisBlock Base boards. It allows an easy way to access the pins of the RAK11310 module in order to simplify the development of IoT devices.

The module complies with LoRaWAN 1.0.2 protocols, and also supports LoRa point-to-point communication.

The RF communication characteristic of the Lora module makes it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors, and monitors, etc.).

### Features

- Based on RAK11300
- Uses the RP2040 as the main processor
- Semtech SX1262 low power high range LoRa transceiver
- LoRaWAN 1.0.2 protocol stack
- **I/O ports**: UART/I2C/GPIO/USB
- Serial Wire Debug (SWD) interface
- **Module Size**: 20 x 30&nbsp;mm
- **Supply Voltage**: 2.0&nbsp;V ~ 3.6&nbsp;V
- **Temperature Range**: -20&nbsp;°C ~ 70&nbsp;°C


## Specifications

### Overview

The overview covers the RAK11310 board overview and the mounting mechanics of the board into the baseboard.

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak11310/datasheet/RAK11310_overview.svg"
  width="70%"
  caption="RAK11310 Overview"
/>

#### Mounting Sketch

The RAK11310 module is designed to work with the RAK5005-O base board. **Figure 2** shows how a RAK11310 module should be mounted on top of the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak11310/datasheet/mounting-sketch.png"
  width="50%"
  caption="RAK11310 Mounting Sketch"
/>

### Hardware

The hardware specification is categorized into four parts. It covers the RF, electrical, and mechanical parameters, which include the tabular data of the functionalities and standard values. It also shows and discusses the diagram of the RAK11310 WisBlock LPWAN Module.

#### RF Characteristics

The RAK11310 module supports the LoRaWAN bands, as shown in the table below. There are two types RAK11310 module: **RAK11310(L)** is for the low-frequency band regions and **RAK11310** (no extra suffix) is for the high-frequency band regions.

::: tip 📝 NOTE
Check the frequency and band regions, as shown in the table, when ordering your RAK11310 WisBlock Core.
:::


| Module      | Core Module | Region        | Frequency |
| ----------- | ----------- | ------------- | --------- |
| RAK11310(L) | RAK11300(L) | Europe        | EU433     |
|             | RAK11300(L) | China         | CN470     |
| RAK11310    | RAK11300    | Europe        | EU868     |
|             | RAK11300    | North America | US915     |
|             | RAK11300    | Australia     | AU915     |
|             | RAK11300    | Korea         | KR920     |
|             | RAK11300    | Asia          | AS923     |
|             | RAK11300    | India         | IN865     |
|             | RAK11300    | Russia        | RU864     |

#### Electrical Characteristics

##### Power Consumption

::: tip 📝 NOTE
The power consumption will be published after the hardware test results.
:::


| Feature                   | Condition | Minimum | Typical | Maximum | Unit |
| ------------------------- | --------- | ------- | ------- | ------- | ---- |
| Operating Average Current | TX        | -       |  24.6   | -       | mA   |
| Sleep Current             |           | -       |  3.8    | -       | mA   |


##### Voltage Ratings

| Feature | Minimum | Typical | Maximum | Unit |
| ------- | ------- | ------- | ------- | ---- |
| VCC     | 2.0     | 3.3     | 3.6     | V    |


#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak11310/datasheet/board-dimensions.png"
  width="35%"
  caption="Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak11310/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak11310/datasheet/schematic.png"
  width="100%"
  caption="RAK11310 Schematic Diagram"
/>

- **WisConnector**: The breakout module exposes the RAK11310 stamp module pinout to the board-to-board WisConnector.

- **WisConnector Pin Order**: The pin order of the WisConnector is located on the bottom layer of the module.

- **Core Module**: The breakout module itself has a RAK11310 at its core, and it shows the core module pin and connection information. By default, the NFC function is disabled to preserve the low-power characteristic of this core.

- **SWD Interface**: The breakout module exposes an SWD debug interface. Additionally, the RST pin is used to reset the RAK11310 core module.

- **Power Up Automatic Reset**: The breakout module has a power-up automatic reset circuit, and the schematic shows the automatic reset mechanism. This module also can be reset through the WisBlock Base reset pin.


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />