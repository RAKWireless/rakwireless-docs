---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Starter Kit for your IoT applications.
rak_img: /assets/images/wisblock/kits/1_iot_starter_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Kit
  - IoT Starter Kit
---

# WisBlock IoT Starter Kit Datasheet

## Overview

### Description

The **WisBlock IoT Starter Kit** is an all-in-one solution for quickly developing and prototyping IoT applications. This comprehensive kit includes multiple connectivity options, including LoRaWAN, BLE, LTE-M/NB-IoT, and a range of different modules, including temperature/humidity, accelerometer, barometer, ambient light, and GPS. It also supports multiple outputs such as a buzzer, RGB LED, and I2C OLED.

With this kit, users can easily create custom IoT solutions for a variety of use cases, such as environmental monitoring, asset tracking, and smart agriculture. The kit is designed to be modular and customizable, allowing users to mix and match different modules and connectivity options to create the perfect solution for their needs.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion batteries with built-in solar charging capability
- Multiple communication protocols (LoRa/LoRaWAN, WiFi, BLE, LTE-M, and NB-IoT)
- Included modules:
    - One WisBlock Core modules - [RAK4631 LPWAN Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One WisBlock Core modules - [RAK11200 WiFi Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/)
    - Two standard [RAK19007 WisBlock Base Board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - Two [RAK12010 Light Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12010/Quickstart/)
    - Two [RAK1901 Temperature and Humidity Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1901/Quickstart/)
    - Two [RAK12047 VOC Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12047/Quickstart/)
    - Two [RAK1904 3-Axis Acceleration Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1904/Quickstart/)
    - Two [RAK18001 Buzzer Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK18001/Quickstart/)
    - Two [RAK14001 RGB LED Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK14001/Quickstart/)
    - Two [RAK1921 OLED Display](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1921/Quickstart/)
    - Two [RAK12021 RGB Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12021/Quickstart/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on cellular modules

## Specifications

### Overview

The WisBlock IoT Starter Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/1_iot_starter_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock IoT Starter Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                         | Function      | Feature                                                               |
| ------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| [RAK19007](/Product-Categories/WisBlock/RAK19007) | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| [RAK4631](/Product-Categories/WisBlock/RAK4631)   | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |
| [RAK11200](/Product-Categories/WisBlock/RAK11200) | WisBlock Core | Based on ESP32 (WiFi + BLE), built-in PCB antenna                     |

:::tip 📝 NOTE
RAK4631 is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements like needed battery, configurations, as well as its limitations.
:::

| RAK Model                                         | Function                    | Chip       | Manufacturer                |
| ------------------------------------------------- | --------------------------- | ---------- | --------------------------- |
| [RAK12010](/Product-Categories/WisBlock/RAK12010) | Ambient Light Sensor        | VEML7700   | Vishay Semiconductors       |
| [RAK1901](/Product-Categories/WisBlock/RAK1901)   | Temperature Humidity Sensor | SHTC3      | Sensirion                   |
| [RAK12047](/Product-Categories/WisBlock/RAK12047) | VOC Sensor                  | SGP40      | Sensirion                   |
| [RAK1904](/Product-Categories/WisBlock/RAK1904)   | 3-Axis Accelerometer        | LIS3DH     | STmicroelectronics          |
| [RAK18001](/Product-Categories/WisBlock/RAK18001) | Buzzer Module               | MLT-5020   | Jiangsu Huaneng Electronics |
| [RAK14001](/Product-Categories/WisBlock/RAK14001) | RGB LED Module              | NCP5623B   | On Semiconductors           |
| [RAK1921](/Product-Categories/WisBlock/RAK1921)   | OLED display                | SSD1306    | Solomon Systech Limited     |
| [RAK12021](/Product-Categories/WisBlock/RAK12021) | RGB Sensor                  | TCS37725FN | AMS                         |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported Protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock IoT Starter Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).