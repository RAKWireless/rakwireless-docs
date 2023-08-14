---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock Movement Detection Kit for your IoT applications.
rak_img: /assets/images/wisblock/kits/3_movement_kit_1.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - WisBlock
  - WisBlock IoT Education Kit - Movement Detection
  - WisBlock Kit
---

# WisBlock IoT Education Kit - Movement Detection Datasheet

## Overview

### Description

The **WisBlock IoT Education Kit - Movement Detection** is a comprehensive and customizable IoT kit designed for motion detection applications. This kit includes a variety of contact and non-contact motion sensors, including an accelerometer, gyroscope, PIR (Passive Infrared) sensor, and radar sensor. These sensors provide accurate and reliable motion detection data, making them ideal for a variety of use cases.

Depending on the use case, this kit supports a variety of connectivity options, including LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional), enabling long-range and short-range communication. With this kit, you can easily create custom motion detection solutions for a range of applications, including building automation, security systems, and environmental monitoring.

### Features

- Compatible with Arduino IDE
- USB-C interface for data, power, and battery charging
- Supports Li-Ion batteries with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One standard [RAK19003 WisBlock Mini Base Board](/Product-Categories/WisBlock/RAK19003/Quickstart/) with two (2) sensor slots
    - Two [RAK12033 6-axis ACC Motion Sensor](/Product-Categories/WisBlock/RAK12033/Quickstart/)
    - Two [RAK12025 Gyroscope](/Product-Categories/WisBlock/RAK12025/Quickstart/)
    - Two [RAK12013 Radar Sensor](/Product-Categories/WisBlock/RAK12013/Quickstart/)
    - Two[RAK12017 IR Proximity Sensor](/Product-Categories/WisBlock/RAK12017/Quickstart/)
    - Two [RAK12006 PIR Motion Sensor](/Product-Categories/WisBlock/RAK12006/Quickstart/)
    - Two [RAK12007 Ultrasonic Sensor](/Product-Categories/WisBlock/RAK12007/Quickstart/)
    - Two [RAK1904 ACC Motion Sensor](/Product-Categories/WisBlock/RAK1904/Quickstart/)
    - Two [RAK1905 9DOF Motion Sensor](/Product-Categories/WisBlock/RAK1905/Quickstart/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules

## Specifications

### Overview

The WisBlock IoT Education Kit - Movement Detection includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/3_movement_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock IoT Education Kit - Movement Detection"
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

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                         | Function             | Chip      | Manufacturer                      |
| ------------------------------------------------- | -------------------- | --------- | --------------------------------- |
| [RAK12033](/Product-Categories/WisBlock/RAK12033) | 6-Axis Accelerometer | IIM-42652 | TDK InvenSense                    |
| [RAK12025](/Product-Categories/WisBlock/RAK12025) | Gyroscope            | I3G4250D  | STMicroelectronics                |
| [RAK12013](/Product-Categories/WisBlock/RAK12013) | Radar Sensor         | RCWL-9196 | RCWL                              |
| [RAK12017](/Product-Categories/WisBlock/RAK12017) | IR Detection Sensor  | ITR20001  | Everlight                         |
| [RAK12006](/Product-Categories/WisBlock/RAK12006) | PIR Sensor           | AM312     | Senba Sensing Technology Co., Ltd |
| [RAK12007](/Product-Categories/WisBlock/RAK12007) | Ultrasonic Sensor    | CS100     | angoSense                         |
| [RAK1904](/Product-Categories/WisBlock/RAK1904)   | 3-Axis Acceleration  | LIS3DH    | STMicroelectronics                |
| [RAK1905](/Product-Categories/WisBlock/RAK1905)   | 9-Axis DOF Sensor    | MPU-9250  | TDK                               |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock IoT Education Kit - Movement Detection is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
