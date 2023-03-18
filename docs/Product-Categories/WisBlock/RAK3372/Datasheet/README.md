---
rak_desc: Provides comprehensive information about your RAK3372 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak3372/RAK3372.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisblock
  - RAK3372
---

# RAK3372 WisBlock LPWAN Module Datasheet

## Overview

### Description

The RAK3372 WisBlock Core module is based on [RAK3172 LoRa module](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Datasheet/) with an expansion PCB and connectors compatible with WisBlock Base. It allows an easy way to access the pins of the RAK3172 module to simplify development and testing processes.

The module itself comprises RAK3172 as its main component. The RAK3372 is based on the STM32WLE5CCU6 LoRa SoC transceiver chip. It features ultra-low power consumption of less than 2.0&nbsp;uA during sleep mode with configurable high LoRa output RF power up to 22&nbsp;dBm during transmission mode. Also, it complies with LoRaWAN 1.0.3 protocols and supports LoRa point-to-point communication.


### Features

- I/O ports: UART/I2C/GPIO
- Temperature range: -40&nbsp;°C to +85&nbsp;°C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;KHz to 500&nbsp;kHz Bandwidth
- Ultra-Low Power Consumption of less than 2.0&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- Serial Wire Debug (SWD) interface
- Module size: 20 x 30&nbsp;mm
- Chipset: STMicroelectronics [STM32WLE5CCU6](https://www.st.com/resource/en/datasheet/stm32wle5cc.pdf)

:::warning ⚠️ WARNING
- RAK3372 WB_IO3 (WisBlock IO pin 3) is connected to PB12 of the RAK3172 module. This pin is internally connected to a 10k resistor as [mentioned on the pin definition table of the RAK3172 datasheet](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Datasheet/#pin-definition). Other WisBlock modules that use this pin will have possible conflict.
:::

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak3372/datasheet/rak3372-mounted.png"
  width="45%"
  caption="RAK3372 Mounted in WisBlock Base"
/>

<rk-img
  src="/assets/images/wisblock/rak3372/datasheet/rak3372-parts.png"
  width="40%"
  caption="RAK3372 WisBlock Core Parts"
/>

### Hardware

The hardware specification is categorized into three parts. It covers the RF, electrical, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK3372 WisBlock LPWAN Module.

#### Chipset

| Vendor             | Part Number                                                               |
| ------------------ | ------------------------------------------------------------------------- |
| STmicroelectronics | [STM32WLE5CCU6](https://www.st.com/resource/en/datasheet/stm32wle5cc.pdf) |

#### RF Characteristics

The RAK3372 module supports the LoRaWAN bands shown in the table below. When buying a RAK3372 module, pay attention to specifying the correct core module for your region, There are two variants available for the RAK3172 Module: (1) with the CE & UKCA Certification Mark and (2) with FCC, IC & RCM Certification Mark.

:::tip 📝 NOTE:

RAK3372 has a built-in IPEX connector on the RAK3172 module embedded in it. There is no other option for antenna connection than the IPEX connector.

:::

| Region        | Frequency (MHz) | Core Module |
| ------------- | --------------- | ----------- |
| India         | IN865           | RAK3372(H)  |
| Europe        | EU868           | RAK3372(H)  |
| Russia        | RU864           | RAK3372(H)  |
| North America | US915           | RAK3372(H)  |
| Canada        | US915           | RAK3372(H)  |
| Australia     | AU915           | RAK3372(H)  |
| Korea         | KR920           | RAK3372(H)  |
| Asia          | AS923-1/2/3/4   | RAK3372(H)  |
| Europe        | EU433           | RAK3372(L)  |
| China         | CN470           | RAK3372(L)  |

#### Electrical Characteristics

##### Operating Voltage

| Feature | Minimum | Typical | Maximum | Unit      |
| ------- | ------- | ------- | ------- | --------- |
| VCC     | 2.0     | 3.3     | 3.6     | Volts (V) |


##### Operating Current

| Feature           | Condition | Minimum                              | Typical | Maximum | Unit |
| ----------------- | --------- | ------------------------------------ | ------- | ------- | ---- |
| Operating Current | TX Mode   | 87 (@&nbsp;20&nbsp;dBm 868&nbsp;Mhz) |         |         | mA   |
|                   | RX Mode   | 5.22                                 |         |         | mA   |

##### Sleep Current

| Feature             | Condition | Minimum (2.1&nbsp;V) | Typical (3.3&nbsp;V) | Maximum | Unit |
| ------------------- | --------- | -------------------- | -------------------- | ------- | ---- |
| Current Consumption | EU868     | -                    | 1.69                 | -       | μA   |
|                     | US915     | -                    | 1.69                 | -       | μA   |
|                     | CN470     | -                    | 1.69                 | -       | μA   |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak3372/datasheet/schematic.png"
  width="100%"
  caption="RAK3372 Schematic Diagram"
/>

- **WisConnector J1**: The 40-pin board-to-board WisBlock connector. This is attached to the WisBlock Base `Core Slot`.
- **RAK3172 Module U1**: This is the main chip of the WisBlock Core.
- **SWD Interface P1**: The WisBlock Core module exposes an SWD debug interface. This can be used on firmware updates and debugging.
- **USB-UART Converter U2**: The firmware update and AT command of the module is via UART2. A built-in USB-Serial converter is used to easily connect the module to the computer.


#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak3372/datasheet/board-dimensions.png"
  width="25%"
  caption="Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak3372/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

:::tip 📝 NOTE:

The RAK3372 firmware update can be found on the [RAK3372 Quick Start Guide miscellaneous section](/Product-Categories/WisBlock/RAK3372/Quickstart/#upgrading-the-firmware).

:::
