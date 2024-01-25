---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock Industrial Kit for industrial applications.
rak_img: /assets/images/wisblock/kits/4_industrial_kit_1.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Industrial 4.0 Kit
  - WisBlock Kit
---

# WisBlock Industrial 4.0 Kit Datasheet

## Overview

### Description

The **WisBlock Industrial 4.0 Kit** is a comprehensive and customizable IoT kit designed specifically for industrial settings. This kit includes a range of sensors, including inductive, proximity, fork, and current/coulomb sensors, as well as interfaces commonly used in industrial environments, such as relays, joysticks, and barcode scanners. These sensors and interfaces provide accurate and reliable data, making them ideal for a variety of use cases in the industrial sector.

Depending on the use case, this kit supports a variety of connectivity options, including LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional), enabling long-range and short-range communication. With this kit, users can easily create custom industrial solutions for a range of applications, including process automation, asset counting, and predictive maintenance.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion batteries with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One [RAK19001 Dual IO WisBlock Base Board](/Product-Categories/WisBlock/RAK19001/Overview/) with 6 sensor slots and 2 IO slots
    - Two [RAK16002 Coulomb Sensor](/Product-Categories/WisBlock/RAK16002/Quickstart/)
    - Two [RAK12029 Inductive Sensor](/Product-Categories/WisBlock/RAK12029/Quickstart/)
    - Two [RAK12028/RAK12031 Fork Sensor](/Product-Categories/WisBlock/RAK12031/Quickstart/)
    - Two [RAK12017 IR Proximity Sensor](/Product-Categories/WisBlock/RAK12017/Quickstart/)
    - Two [RAK12014 IR ToF Sensors](/Product-Categories/WisBlock/RAK12014/Quickstart/)
    - Two [RAK12018 Bar Code Scanner](/Product-Categories/WisBlock/RAK12018/Quickstart/)
    - Two [RAK16000 DC Current Sensor](/Product-Categories/WisBlock/RAK16000/Quickstart/)
    - Two [RAK14007/RAK14013 Joystick/Button Modules](/Product-Categories/WisBlock/RAK14013/Quickstart/)
    - Two relay modules; you can choose between RAK13001 110&nbsp;V and RAK13007 220&nbsp;V versions
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules

## Specifications

### Overview

The WisBlock Industrial 4.0 Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/4_industrial_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock Industrial 4.0 Kit"
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

These are the modules included in the kit, showing the chips used inside them.

:::tip 📝 NOTE
Check individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                         | Function             | Chip          | Manufacturer       |
| ------------------------------------------------- | -------------------- | ------------- | ------------------ |
| [RAK16002](/Product-Categories/WisBlock/RAK16002) | Coulomb Sensor       | LTC2941IDCB   | Analog Devices     |
| [RAK12029](/Product-Categories/WisBlock/RAK12029) | Inductive Sensor     | LDC1614       | Texas Instruments  |
| [RAK12031](/Product-Categories/WisBlock/RAK12031) | Fork Sensor          | EE-SX1041     | Omron              |
| [RAK12028](/Product-Categories/WisBlock/RAK12028) | RAK12031 Adapter     | --            | RAKwireless        |
| [RAK12017](/Product-Categories/WisBlock/RAK12017) | IR Detection         | ITR20001      | Everlight          |
| [RAK12014](/Product-Categories/WisBlock/RAK12014) | Time-of-Flight (ToF) | VL53L0X       | STMicroelectronics |
| [RAK12018](/Product-Categories/WisBlock/RAK12018) | Code Scanner         | LV3296        | RAKINDA            |
| [RAK16000](/Product-Categories/WisBlock/RAK16000) | DC Current Sensor    | INA219BID     | Texas Instruments  |
| [RAK14013](/Product-Categories/WisBlock/RAK14013) | Joystick             | ATTINY441-SSU | ATMEL              |
| [RAK13001](/Product-Categories/WisBlock/RAK13001) | Relay 110&nbsp;V     | HF46F         | HONGFA             |
| [RAK13007](/Product-Categories/WisBlock/RAK13007) | Relay 220&nbsp;V     | G5LE-14-DC3   | OMRON              |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported Protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Industrial 4.0 Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
