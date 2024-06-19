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

The **WisBlock IoT Starter Kit** is an all-in-one solution for quickly developing and prototyping IoT applications. This comprehensive kit includes multiple connectivity options, namely LoRaWAN, BLE, and LTE-M/NB-IoT. It also includes a range of different modules, like temperature and humidity, accelerometer, barometer, ambient light, and GPS. The kit supports multiple outputs, such as a buzzer, RGB LED, and I2C OLED.

With this kit, you can easily create custom IoT solutions for a variety of use cases, such as environmental monitoring, asset tracking, and smart agriculture. The kit is designed to be modular and customizable, allowing to mix and match different modules and connectivity options to create the perfect solution for your needs.

### Features

- Compatible with Arduino IDE
- USB-C interface for data, power, and battery charging
- Supports Li-Ion batteries with built-in solar charging capability.
- Multiple communication protocols (LoRaWAN, WiFi, BLE, LTE-M, and NB-IoT)
- Included modules:
    - One WisBlock Core modules - <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631 LPWAN Module</a> 
    - One WisBlock Core modules - <a href="https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK11200 WiFi Module</a> 
    - Two standard <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007 WisBlock Base Board</a> with four (4) sensor slots and 1 IO slot
    - Two <a href="https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010?utm_source=RAK12010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12010 Light Sensor</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor?utm_source=RAK1901&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1901 Temperature and Humidity Sensor</a> 
    - Two <a href="https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40?utm_source=RAK12047&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12047 VOC Sensor</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904 3-Axis Acceleration Sensor</a> 
    - Two <a href="https://store.rakwireless.com/products/wisblock-buzzer-module-rak18001?utm_source=WisBlockRAK18001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK18001 Buzzer Module</a> 
    - Two <a href="https://store.rakwireless.com/products/rgb-led-module-rak14001?utm_source=RAK14001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK14001 RGB LED Module</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1921-oled-display-panel?utm_source=RAK1921&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1921 OLED Display</a> 
    - Two <a href="https://store.rakwireless.com/products/rak12021-wisblock-rgb-sensor?utm_source=RAK12021&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12021 RGB Sensor Module</a> 
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923  
    - Select a cellular variant that is applicable for your region:  
        - Two (2) <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> with 5G LTE NB-IoT capability
        - Two (2) <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a> with GSM/GPRS capability
- GPS built-in on cellular modules

## Specifications

### Overview

The WisBlock IoT Starter Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/1_iot_starter_kit_2.png"
  width="70%"
  caption="Modules of the WisBlock IoT Starter Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require both the WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                                                                                                                                                             | Function      | Feature                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007</a>  | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631</a>   | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |
| <a href="https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK11200</a> | WisBlock Core | Based on ESP32 (WiFi + BLE), built-in PCB antenna                     |

:::tip 📝 NOTE
**RAK4631** is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements, such as needed battery, configurations, as well as their limitations.
:::

| RAK Model                                                                                                                                                                               | Function                    | Chip       | Manufacturer                |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------- | ---------- | --------------------------- |
| <a href="https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010?utm_source=RAK12010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12010</a>  | Ambient Light Sensor        | VEML7700   | Vishay Semiconductors       |
| <a href="https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor?utm_source=RAK1901&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1901</a> | Temperature Humidity Sensor | SHTC3      | Sensirion                   |
| <a href="https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40?utm_source=RAK12047&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12047</a>     | VOC Sensor                  | SGP40      | Sensirion                   |
| <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904</a> | 3-Axis Accelerometer        | LIS3DH     | STmicroelectronics          |
| <a href="https://store.rakwireless.com/products/wisblock-buzzer-module-rak18001?utm_source=WisBlockRAK18001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK18001</a> | Buzzer Module               | MLT-5020   | Jiangsu Huaneng Electronics |
| <a href="https://store.rakwireless.com/products/rgb-led-module-rak14001?utm_source=RAK14001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK14001</a>                 | RGB LED Module              | NCP5623B   | On Semiconductors           |
| <a href="https://store.rakwireless.com/products/rak1921-oled-display-panel?utm_source=RAK1921&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1921</a>                | OLED display                | SSD1306    | Solomon Systech Limited     |
| <a href="https://store.rakwireless.com/products/rak12021-wisblock-rgb-sensor?utm_source=RAK12021&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12021</a>            | RGB Sensor                  | TCS37725FN | AMS                         |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the following table.

| RAK Model                                                                                                                                                                        | Supported Protocol | Chip   | Manufacturer |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------------ |
| <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a>     | GSM/GPRS           | MC20CE | Quectel      |
| <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock IoT Starter Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).