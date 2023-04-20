---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Kit for outdoor location tracking applications.
rak_img: /assets/images/wisblock/kits/10_outdoor_tracker_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Outdoor Location Tracker Kit
  - WisBlock Kit
---

# WisBlock Outdoor Location Tracker Kit Datasheet

## Overview

### Description

The **WisBlock Outdoor Location Tracker Kit** is a comprehensive and customizable IoT kit specifically designed to track the location of objects in outdoor environments. The kit includes two precise GPS/GNSS modules for tracking outdoor locations. Additionally, it has 9-DOF sensors and accelerometers, which aid in tracking object movements and direction changes.

With the WisBlock Outdoor Location Tracker Kit, you can monitor and track the location of a wide range of objects, including vehicles, equipment, and people. The kit provides real-time location data and allows users to analyze the data and create custom alerts and notifications based on specific events.

Multiple connectivity methods, including LoRaWAN, BLE, LTE-M, and NB-IoT, are supported by the WisBlock Outdoor Location Tracker Kit. This ensures that users can select the most appropriate communication channel based on their requirements and the available infrastructure. In addition, the kit is also highly customizable and can be configured to meet specific user needs.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One [RAK19003 WisBlock Mini Base Board](/Product-Categories/WisBlock/RAK19003/Quickstart/) with 2 sensor slots
    - One [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - Two [RAK1904 Acceleration Sensors](/Product-Categories/WisBlock/RAK1904/Quickstart/)
    - Two [RAK1905 9DOF Sensors](/Product-Categories/WisBlock/RAK1905/Quickstart/)
    - Two [RAK12500 GNSS Location Sensors](/Product-Categories/WisBlock/RAK12500/Quickstart/)
    - Two [RAK1910 GNSS Location Sensors](/Product-Categories/WisBlock/RAK1910/Quickstart/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules


## Specifications

### Overview

The WisBlock Outdoor Location Tracker Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/10_outdoor_tracker_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock Outdoor Location Tracker Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                         | Function      | Feature                                                               |
| ------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| [RAK19003](/Product-Categories/WisBlock/RAK19003) | WisBlock Base | USB-C, 2 sensor slot, battery/solar connector                         |
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

| RAK Model                                         | Function             | Chip     | Manufacturer       |
| ------------------------------------------------- | -------------------- | -------- | ------------------ |
| [RAK1904](/Product-Categories/WisBlock/RAK1904)   | 3-Axis Acceleration  | LIS3DH   | STMicroelectronics |
| [RAK1905](/Product-Categories/WisBlock/RAK1905)   | 9-Axis DOF Sensor    | MPU-9250 | TDK                |
| [RAK12500](/Product-Categories/WisBlock/RAK12500) | GNSS Location Module | ZOE-M8Q  | u-blox             |
| [RAK1910](/Product-Categories/WisBlock/RAK1910)   | GNSS Location Module | MAX-7Q   | u-blox             |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols as shown in the table.

| RAK Model                                         | Supported Protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Industrial 4.0 Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).

