---
rak_desc: Provides comprehensive information about your RAK11722 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak11722/overview/RAK11722_home.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisblock
  - RAK11722
---

# RAK11722 WisBlock LPWAN Module Datasheet


## Overview

### Description

The RAK11722 WisBlock Core module is a RAK11720 stamp module with an expansion PCB and connectors compatible with WisBlock Base. It allows an easy way to access the pins of the RAK11720 module to simplify development and testing processes.

The module itself comprises a RAK11720 as its main component. The RAK11720 is a combination of an Ambiq Apollo3 Blue AMA3B1KK-KBR-B0 SoC MCU and an SX1262 LoRa chip. It features ultra-low power consumption of 2.37&nbsp;uA during sleep mode and high LoRa output power up to 22&nbsp;dBm during a transmission mode

Also, it complies with LoRaWAN 1.0.3 protocols and supports LoRa point-to-point communication. The RF communication characteristic of the module (LoRa + BLE) makes it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, and personal area network applications (health/fitness sensors, monitors, etc.).


### Features

- Based on **AMA3B1KK-KBR-B0** and **SX1262**
- ARM Cortex-M4F
- 1MB Flash and 348KB SRAM
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy-to-use AT Command set via UART interface
- I/O ports: UART/I2C/SPI/ADC/GPIO
- Long-range - greater than 10&nbsp;km with optimized antenna
- Ultra-low-power consumption of 2.37&nbsp;μA in sleep mode
- **Supply Voltage**: 1.8&nbsp;V ~ 3.6&nbsp;V
- **Temperature range**: -40°&nbsp;C ~ 85°&nbsp;C

## Specifications

### Overview

The overview covers the RAK11722 board overview and the mounting mechanics of the board into the baseboard.

#### Mounting Sketch

The RAK11722 module is designed to work with WisBlock Base Boards. **Figure 1** shows how a RAK11722 module should be mounted on top of a WisBlock Base Board.

<rk-img
  src="/assets/images/wisblock/rak11722/datasheet/mounting.png"
  width="50%"
  caption="RAK11722 Mounting Sketch"
/>

### Hardware

The hardware specification is categorized into three parts. It covers the RF, electrical, and mechanical parameters that include the tabular data for the functionalities and standard values of the RAK11722 WisBlock LPWAN Module.

#### Chipset

| Vendor         | Part Number             |
| -------------- | ----------------------- |
| Ambiq, Semtech | AMA3B1KK-KBR-B0, SX1262 |

#### RF Characteristics

The RAK11722 module supports the LoRaWAN bands shown in the table below. When buying a RAK11722 module, pay attention to specifying the correct core module RAK11720 H/L for your region, in which H stands for high-frequency regions and L for low-frequency regions.

:::tip 📝 NOTE
Detailed information about the RAK11722 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/).
:::

| Module    | Core Module | Region        | Frequency     |
| --------- | ----------- | ------------- | ------------- |
| RAK11722L | RAK11722L   | Europe        | EU433         |
|           | RAK11722L   | China         | CN470         |
| RAK11722  | RAK11722    | Europe        | EU868         |
|           | RAK11722    | North America | US915         |
|           | RAK11722    | Australia     | AU915         |
|           | RAK11722    | Asia          | AS923-1/2/3/4 |
|           | RAK11722    | India         | IN865         |
|           | RAK11722    | Russia        | RU864         |

#### Electrical Characteristics

##### Power Consumption

| Feature           | Condition    | Minimum | Typical                              | Maximum | Unit |
| ----------------- | ------------ | ------- | ------------------------------------ | ------- | ---- |
| Operating Current | LORA TX Mode | -       | 87 (@&nbsp;20&nbsp;dBm 868&nbsp;MHz) | -       | mA   |
|                   | BLE TX Mode  | -       | 12.7（@4.0&nbsp;dBm）                | -       | mA   |
| Sleep Current     | With Ch340   | -       | 20                                   |         | uA   |


##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit |
| ------- | ------- | ------- | ------- | ---- |
| VCC     | 2.0     | 3.3     | 3.6     | V    |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak11722/datasheet/schematic.png"
  width="100%"
  caption="RAK11722 Schematic Diagram"
/>

- **WisConnector**: The core module allows the RAK11722 stamp module pinout to be transferred by the board-to-board WisConnector.
- **WisConnector Pin Order**: The pin order of the WisConnector is located in the bottom layer of the module.
- **Core Module**: The core module itself has a RAK11720 at its core, and it shows the core module pin and connection information.
- **SWD Interface**: The breakout module exposes an SWD debug interface. Additionally, the RST pin is used for resetting the core module RAK11720.

#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak11722/datasheet/board-dimension.png"
  width="80%"
  caption="Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak11722/datasheet/wisconnector.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>
