---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Kit for indoor location tracking applications.
rak_img: /assets/images/wisblock/kits/9_indoor_tracker_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Indoor Location Tracker Kit
  - WisBlock Kit
---

# WisBlock Indoor Location Tracker Kit Datasheet

## Overview

### Description

The **WisBlock Indoor Location Tracker Kit** is an advanced IoT kit designed specifically for indoor location tracking, utilizing a range of cutting-edge technologies and sensors. This kit is an ideal solution for companies, organizations, and individuals looking to keep track of their assets and resources in indoor environments.

The kit includes ultra-wideband (UWB) technology, accelerometers, and 9-degree-of-freedom (9-DOF) sensors to provide highly accurate and reliable location-tracking capabilities. With customizable features, users can configure the kit to suit their specific needs, and it can be easily integrated into existing systems.

In addition to its powerful tracking capabilities, the WisBlock Indoor Location Tracker Kit also supports various connectivity options such as LoRaWAN, BLE, LTE-M, and NB-IoT. This allows users to select the network connectivity option that best meets their needs and preferences, ensuring seamless integration into existing networks.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Four WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - Two standard [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - Two [RAK19001 Dual IO WisBlock Base Board](/Product-Categories/WisBlock/RAK19001/Quickstart/) with 6 sensor slots and 2 IO slots
    - Two [RAK1904 Acceleration Sensors](/Product-Categories/WisBlock/RAK1904/Quickstart/)
    - Two [RAK1905 9DOF Sensors](/Product-Categories/WisBlock/RAK1905/Quickstart/)
    - Four [RAK13801 UWB Modules](/Product-Categories/WisBlock/RAK13801/Quickstart/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules (only works outdoor)


## Specifications

### Overview

The WisBlock Indoor Location Tracker Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/9_indoor_tracker_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock Indoor Location Tracker Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                         | Function       | Feature                                                               |
| ------------------------------------------------- | -------------- | --------------------------------------------------------------------- |
| [RAK19001](/Product-Categories/WisBlock/RAK19003) | WisBlock Base  | USB-C, 6 sensor slot, 2 IO slot, battery/solar connector              |
| [RAK19007](/Product-Categories/WisBlock/RAK19007) | WisBlock Base  | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| [RAK4631](/Product-Categories/WisBlock/RAK4631)   | WisBlock Core  | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |

:::tip 📝 NOTE
RAK4631 is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

These are the modules included in the kit, showing the chips used inside them.

:::tip 📝 NOTE
Check individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                          | Function             | Chip          | Manufacturer                |
| -------------------------------------------------- | -------------------- | ------------- | --------------------------- |
| [RAK1904](/Product-Categories/WisBlock/RAK1904)    | 3-Axis Acceleration  | LIS3DH        | STMicroelectronics          |
| [RAK1905](/Product-Categories/WisBlock/RAK1905)    | 9-Axis DOF Sensor    | MPU-9250      | TDK                         |
| [RAK13801](/Product-Categories/WisBlock/RAK13005)  | UWB                  | DW10000       | Decawave                    |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Industrial 4.0 Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).

