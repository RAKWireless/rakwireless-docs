---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock Industrial IO and Communication Kit for industrial applications.
rak_img: /assets/images/wisblock/kits/8_industrial_comms_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Industrial IO and Communication Kit
  - WisBlock Kit
---

# WisBlock Industrial IO and Communication Kit Datasheet

## Overview

### Description

The **WisBlock Industrial IO and Communication Kit** is an IoT kit that is versatile and customizable for industrial applications. This kit offers a range of interfaces, including LIN, CAN, SDI-12, 4-20&nbsp;mA, RS485, Ethernet, Analog, and Relay for data acquisition and control. It also supports different connectivity options, such as LoRaWAN, BLE, LTE-M, NB-IoT, and PoE Ethernet, making integration with various systems easier.

Whether you are looking to measure and control various parameters in your industrial setting or interface with different systems, the WisBlock Industrial IO and Communication Kit is the perfect solution. The kit includes a range of module interfaces that allow you to monitor and control different variables, making it ideal for various applications. With its customizable design and flexibility, the WisBlock Industrial IO and Communication Kit offer a complete solution for a range of industrial IoT applications. It allows for easy expansion and customization, making it perfect for those who require specific functionality.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One [RAK19001 Dual IO WisBlock Base Board](/Product-Categories/WisBlock/RAK19001/Overview/) with 6 sensor slots and 2 IO slots
    - Two [RAK13005 LIN Bus Modules](/Product-Categories/WisBlock/RAK13005/Quickstart/)
    - Two [RAK13006 CAN Bus Modules](/Product-Categories/WisBlock/RAK13006/Overview/)
    - Two [RAK13010 SDI-12 Modules](/Product-Categories/WisBlock/RAK13010/Overview/)
    - Two [RAK5801 4-20&nbsp;mA Interface Modules](/Product-Categories/WisBlock/RAK5801/Quickstart/)
    - Two [RAK5802 RS485 Interface Modules](/Product-Categories/WisBlock/RAK5802/Quickstart/)
    - Two [RAK5811 0-5&nbsp;V Interface Modules](/Product-Categories/WisBlock/RAK5811/Quickstart/)
    - Two Relay modules; you can choose between RAK13001 110&nbsp;V and RAK13007 220&nbsp;V versions
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Ethernet using RAK13800 module
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules
- (Optional) Ethernet module can also have a PoE daughter board


## Specifications

### Overview

The WisBlock Industrial IO and Communication Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/8_industrial_comms_kit_2.png"
  width="80%"
  caption="Modules of WisBlock Industrial IO and Communication Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                         | Function      | Feature                                                               |
| ------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| [RAK19001](/Product-Categories/WisBlock/RAK19003) | WisBlock Base | USB-C, 6 sensor slot, 2 IO slot, battery/solar connector              |
| [RAK19007](/Product-Categories/WisBlock/RAK19007) | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| [RAK4631](/Product-Categories/WisBlock/RAK4631)   | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |

:::tip 📝 NOTE
RAK4631 is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                         | Function         | Chip               | Manufacturer       |
| ------------------------------------------------- | ---------------- | ------------------ | ------------------ |
| [RAK13005](/Product-Categories/WisBlock/RAK13005) | LIN              | TLE7259-3          | Infineon           |
| [RAK13006](/Product-Categories/WisBlock/RAK13006) | CAN              | MCP2518FD, ATA6563 | Microchip          |
| [RAK13010](/Product-Categories/WisBlock/RAK13010) | SDI-12           | --                 | RAKwireless        |
| [RAK5801](/Product-Categories/WisBlock/RAK5801)   | 4-20&nbsp;mA     | LM2902             | STMicroelectronics |
| [RAK5802](/Product-Categories/WisBlock/RAK5802)   | RS485            | TP8485E            | 3PEAK              |
| [RAK5811](/Product-Categories/WisBlock/RAK5811)   | 0-5&nbsp;V       | LM2902             | STMicroelectronics |
| [RAK13001](/Product-Categories/WisBlock/RAK13001) | Relay 110&nbsp;V | HF46F              | HONGFA             |
| [RAK13007](/Product-Categories/WisBlock/RAK13007) | Relay 220&nbsp;V | G5LE-14-DC3        | OMRON              |
| [RAK13800](/Product-Categories/WisBlock/RAK13800) | Ethernet         | W5100S-L           | WIZnet             |


#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Movement Detection Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
