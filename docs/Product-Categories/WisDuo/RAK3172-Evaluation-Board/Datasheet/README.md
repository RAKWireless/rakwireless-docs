---
rak_desc: Provides comprehensive information about your RAK3172 Evaluation Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device's components.
prev: ../AT-Command-Manual/
tags:
  - datasheet
  - wisduo
  - RAK3172 Evaluation Board
rak_img: /assets/images/wisduo/rak3172-evaluation-board/RAK3172-Evaluation.png

---

# RAK3172 Evaluation Board Datasheet

## Overview

### Description

The RAK3172 Evaluation Board is a WisDuo Evaluation Board for the RAK3172 Module that uses a STM32WLE5CCU6 SoC chip. It is based on RAK3372 WisBlock Core, which is compatible with the RAK5005-O base board. It provides an easy way to access the important pins of the RAK3172 module in order to simplify development and testing. It also allows you to connect other modules to the base board slots and build a complete IoT project with the integrated connectors for battery and solar panel plus the onboard charging circuit.

This module complies with Class A, B, & C of LoRaWAN 1.0.3 specifications. It also supports LoRa Point-to-Point (P2P) communication mode, which helps you in implementing your own customized long-range LoRa network quickly.

### Features

- Based on **STM32WLE5CCU6**
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy to use AT command set via UART interface
- Long-range - greater than 15&nbsp;km with optimized antenna
- ARM Cortex-M4 32-bit
- 256&nbsp;kbytes flash memory with ECC
- 64&nbsp;kbytes RAM
- **Supply Voltage**: 5&nbsp;V via USB or 3.7-4.2&nbsp;V using Li-Ion Battery
- **Temperature Range**: -20°&nbsp;C ~ 70°&nbsp;C

## Specifications

This section covers the hardware and software specifications of the RAK3172 Evaluation Board. It includes the interfaces, operating parameters, and a link to the RAK3172 board's latest firmware.

### Overview

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/overview/RAK3172E-Front.svg"
  width="50%"
  caption="RAK3172 Evaluation Board Overview"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK3172 Evaluation Board.

#### Interfaces

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/RAK3172E-Interface.svg"
  width="80%"
  caption="RAK3172 Evaluation Board Interfaces"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/RAK3372.png"
  width="30%"
  caption="Parts RAK3372 Module"
/>

##### RF Interface

The RF Antenna of the RAK3172 Evaluation Board is connected to a standard iPEX antenna connector.

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/lora-pcb-antenna.png"
  width="70%"
  caption="RAK3172 LoRa antenna"
/>

:::warning ⚠️ WARNING
Before powering the RAK3172 Evaluation Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

##### USB Interface

The Micro-B USB connector is compliant with the USB 2.0 specification. The pin definition of the USB interface is shown below:

| **Pin Number** | **Pin Name** | **Description**             |
| -------------- | ------------ | --------------------------- |
| 1              | USB_VBUS     | (+5&nbsp;V) USB Bus Voltage |
| 2              | USB_DM       | USB Bus D+ positive pin     |
| 3              | USB_DP       | USB Bus D- negative pin     |
| 4              | NC           | Not connected               |
| 5              | GND          | Ground                      |

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/microb-usb.png"
  width="25%"
  caption="RAK3172 Micro-B USB connector"
/>

The USB data bus is connected to a **USB-SERIAL CH340** chip. The **CH340** is a series of USB bus adapters that provide a virtual serial interface over the USB bus.

##### Battery Connector

The RAK3172 Evaluation Board can be powered by a battery via the P1 connector. The battery is not included in the packaging.

Use **Figure 6** as a guide to connect the battery. The pin highlighted in the yellow box with the triangle silkscreen mark indicates pin 1 (GND).

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/RAK3172E-battery.png"
  width="60%"
  caption="RAK3172 EVB battery connector"
/>

The pin definition of the RAK3172 Evaluation Board Li-Ion battery connector is shown in the table below. The matching connector for the battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199).

<b> P1 Battery Connector </b>

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | GND          | Ground                        |
| 2       | VBAT         | Positive + pin of the battery |

The full specification of RAK3172 Evaluation Board battery is shown in the table below.

| **No.** | **Item**                  | **Specification**                    |
| ------- | ------------------------- | ------------------------------------ |
| 1       | Charge Cut-off Voltage    | 4.2&nbsp;V                           |
| 2       | Nominal Voltage           | 3.7&nbsp;V                           |
| 3       | Discharge Cut-off Voltage | 2.75&nbsp;V                          |
| 4       | Typical Capacity          | 2650&nbsp;mAh                        |
| 5       | Max Discharge Current     | 0.5&nbsp;C at 25&nbsp;℃ to 45&nbsp;℃ |
| 6       | PH Connector              | 2.0&nbsp;mm pitch                    |
| 7       | Cable Length              | 110.0±3.0&nbsp;mm                    |
| 8       | Cable Color               | Red: VBAT, Black: GND                |

:::tip 📝 NOTE
The voltage of the Li-Ion battery **must not exceed 4.3&nbsp;V**. When connecting the battery make sure the polarity is correct. Not all connectors are wired the same.
:::

##### Solar Panel Connector

A 5&nbsp;V solar panel can be connected to the board via the P2 connector to serve the purpose of charging the battery. The solar panel is not included on RAK3172 Evaluation Board packaging. Use **Figure 7** as a guide to connect the solar panel. The pin highlighted in the yellow box with triangle silkscreen mark indicates pin 1 (5&nbsp;V of Solar Panel positive).

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/interfaces/RAK3172E-solar.png"
  width="60%"
  caption="RAK3172 EVB solar connector"
/>

The pin definition of the RAK3172 Evaluation Board solar panel connector is shown in the table below. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287).

<b> P2 Solar Panel connector </b>

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | C0NN_5V      | Positive + pin of solar panel |
| 2       | GND          | GND                           |

The full specification of the Solar Panel for the RAK3172 Evaluation Board is shown in the table below.

| **No.** | **Item**        | **Specification**                                        |
| ------- | --------------- | -------------------------------------------------------- |
| 1       | Nominal Voltage | 5&nbsp;V                                                 |
| 2       | Typical Current | 80&nbsp;mA                                               |
| 3       | Size            | Length: 60&nbsp;mm, Width: 60&nbsp;mm, Height: 2&nbsp;mm |
| 4       | Connector       | 1.5&nbsp;mm pitch                                        |
| 5       | Cable Color     | Red: C0NN_5V, Black: GND                                 |

:::tip 📝 NOTE
The output of the solar panel **must not exceed 5.5&nbsp;V**. Otherwise, it may cause permanent damage to the board.
:::

##### LEDs

- 🔴 **Red LED** - connected to the charger chip to indicate the charger status. When the battery is charging, the red LED is on. When the battery is full, this LED is dimmed or off.
- 🟢 **Green LED** - connected to the MCU module, can be controlled in code by the user.
- 🔵 **Blue LED** - connected to the MCU module, can be controlled in code by the user.

##### RESET Button

The reset push button is connected to the NRST pin of the RAK3172. When pushed, it resets the MCU.

#### Pin Definition

The following tables below show the pin definitions of the RAK3172 Evaluation Board:

##### J10, J11, J12 2.54&nbsp;mm header

###### J10

| **Pin Number** | **Pin Name**  | **Description**                      | **Microcontroller Pin** |
| -------------- | ------------- | ------------------------------------ | ----------------------- |
| 1              | BOOT0         | Boot for ST MCU                      | BOOT0                   |
| 2              | VDD           | Power supply generated by CPU module |                         |
| 3              | TX1/USART1_TX | USART1 TX pin                        | PB6                     |
| 4              | RX1/USART1_RX | USART1 RX pin                        | PB7                     |

###### J11

| **Pin Number** | **Pin Name** | **Description**               | **Microcontroller Pin** |
| -------------- | ------------ | ----------------------------- | ----------------------- |
| 1              | AIN1         | ADC input signal              | PB3                     |
| 2              | IO1          | General purpose IO            | PB5                     |
| 3              | IO2          | Power switch control of 3V3_S | PA8                     |
| 4              | GND          | Ground                        |                         |

:::tip 📝 NOTE
3V3_S is another 3.3&nbsp;V power supply that can be turned on and off by the MCU. Set pin IO2 to `LOW`/`0` when the sensor is not in use to save power.
:::

###### J12

| **Pin Number** | **Pin Name** | **Description**                      | **Microcontroller Pin** |
| -------------- | ------------ | ------------------------------------ | :---------------------: |
| 1              | GND          | Ground                               |                         |
| 2              | I2C1_SCL     | I2C clock pin                        |          PA12           |
| 3              | I2C1_SDA     | I2C data pin                         |          PA11           |
| 4              | VDD          | Power supply generated by CPU module |                         |

#### RF Characteristics

The RAK3172 supports two different frequency variations: RAK3172(L) Low Radio Frequencies and RAK3172(H) High Radio Frequencies.

##### Operating Frequencies

| Module     | Region        | Frequency     |
| ---------- | ------------- | ------------- |
| RAK3172(L) | Europe        | EU433         |
|            | China         | CN470         |
| RAK3172(H) | Europe        | EU868         |
|            | North America | US915         |
|            | Australia     | AU915         |
|            | Korea         | KR920         |
|            | Asia          | AS923-1/2/3/4 |
|            | India         | IN865         |
|            | Russia        | RU864         |

#### Electrical Characteristics

##### Operating Voltage

Power is supplied to the RAK3172 Evaluation Board via USB (5&nbsp;V) or a Li-Ion battery.

The LDO regulator can operate on the following voltage range:

| Feature | Minimum | Maximum | Unit      |
| ------- | ------- | ------- | --------- |
| Vin     | 1.8     | 6.5     | Volts (V) |

##### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/schematic-diagram/schematic.png"
  width="100%"
  caption="RAK3172 Evaluation Board Schematic Diagram"
/>

#### Mechanical Characteristics

##### Module Dimensions

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/datasheet/board-layout/mechanical-rak3372.png"
  width="20%"
  caption="RAK3172 Physical Dimension"
/>

#### Environmental Characteristics

##### Operating Temperature

| Feature               | Minimum | Typical | Maximum | Unit |
| --------------------- | ------- | ------- | ------- | ---- |
| Operating Temperature | -35     | 25      | 70      | °C   |

### Software

Download the latest firmware for the RAK3172 WisDuo Evaluation Board provided below. RAK3172(L) and RAK3172(H) use the same firmware and it will automatically detect the variant of the module being used.

The **bin file** contains the application code only and you need the RAK DFU Tool to upload this file to the module.

The **hex file** contains both the bootloader and the application code. You need to use STM32CubeProgrammer to upload this.

:::warning ⚠️ WARNING
Uploading the `**.hex**` file via STM32CubeProgrammer will erase all configured data on the device.
:::

RAK3172 uses UART2's serial pins to upload the latest firmware.

:::tip 📝 NOTE:
RAK3172 should automatically go to BOOT mode when the firmware is being uploaded via RAK DFU Tool or WisToolBox.

If BOOT mode is not initiated, you can manually send `AT+BOOT` command to start bootloader mode.
:::

#### Firmware / OS

| Model   | Version                                         | Source                                                                                          |
| ------- | ----------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| RAK3172 | RUI3 (default baudrate = 115200)                | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3172-E_latest.bin)               |
| RAK3172 | RUI3 (default baudrate = 115200)                | [Download](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK3172-E_latest_final.hex)         |
| RAK3172 | **DEPRECATED** V1.0.4 (default baudrate = 9600) | [Download](https://downloads.rakwireless.com/LoRa/RAK3172/Firmware/RAK3172_Latest_Firmware.zip) |

:::warning ⚠️ WARNING
There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.

If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::


