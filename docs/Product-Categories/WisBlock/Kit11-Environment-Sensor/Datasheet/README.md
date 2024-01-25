---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Kit for monitoring IoT applications for various environment conditions.
rak_img: /assets/images/wisblock/kits/11_environment_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Environment Sensor Kit
---

# WisBlock Environment Sensor Kit Datasheet

## Overview

### Description

The **WisBlock Environment Sensor Kit** is a comprehensive IoT kit that includes sensors for monitoring various environmental conditions. It features sensors for temperature, humidity, pressure, UV, CO2, Particulate Matter, VOC, and IAQ. Additionally, it supports different connectivity options like LoRaWAN, BLE, LTE-M, and NB-IoT.

With its wide range of environmental sensors, the WisBlock Environment Sensor Kit can be utilized in various applications. It can be used in agriculture to monitor temperature, humidity, air quality, and light levels in greenhouses. It can also be used in smart buildings to monitor indoor air quality and adjust ventilation systems accordingly. In addition, it can be used to monitor the weather at meteorological stations and pollution in urban areas. With its flexible connectivity options, this kit can be easily integrated into existing IoT platforms, making it an ideal solution for a wide range of industries and use cases.

### Features

- Compatible to Arduino IDE
- USB C interface for data, power and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional) and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One [RAK19001 Dual IO WisBlock Base Board](/Product-Categories/WisBlock/RAK19001/Quickstart/) with 6 sensor slots and 2 IO slots
    - [RAK1901 Temperature and Humidity Sensor](/Product-Categories/WisBlock/RAK1901/Quickstart/)
    - [RAK1902 Barometric Pressure Sensor](/Product-Categories/WisBlock/RAK1902/Quickstart/)
    - [RAK1903 Ambient Light Sensor](/Product-Categories/WisBlock/RAK1903/Quickstart/)
    - [RAK1906 IAQ (Indoor Air Quality) Sensor](/Product-Categories/WisBlock/RAK1906/Quickstart/)
    - [RAK12010 Ambient Light Sensor](/Product-Categories/WisBlock/RAK12010/Quickstart/)
    - [RAK12011 Barometer WT Sensor](/Product-Categories/WisBlock/RAK12011/Quickstart/)
    - [RAK12019 UV Light Sensor](/Product-Categories/WisBlock/RAK12019/Quickstart/)
    - [RAK12037 CO2 Sensor](/Product-Categories/WisBlock/RAK12037/Quickstart/)
    - [RAK12039 Particle Matter Sensor](/Product-Categories/WisBlock/RAK12039/Overview/)
    - [RAK12047 VOC Sensor](/Product-Categories/WisBlock/RAK12047/Quickstart/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules


## Specifications

### Overview

The WisBlock Environment Sensor Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/11_environment_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock Environment Sensor Kit"
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

| RAK Model                                         | Function                    | Chip         | Manufacturer          |
| ------------------------------------------------- | --------------------------- | ------------ | --------------------- |
| [RAK1901](/Product-Categories/WisBlock/RAK1901)   | Temperature Humidity Sensor | SHTC3        | Sensirion             |
| [RAK1902](/Product-Categories/WisBlock/RAK1902)   | Barometric Pressure         | LPS22HB      | STMicroelectronics    |
| [RAK1903](/Product-Categories/WisBlock/RAK1903)   | Ambient Light Sensor        | OPT3001DNPR  | Texas Instruments     |
| [RAK1906](/Product-Categories/WisBlock/RAK1906)   | Environmental Sensor        | BME680       | BOSCH                 |
| [RAK12010](/Product-Categories/WisBlock/RAK12010) | Ambient Light Sensor        | VEML7700     | Vishay Semiconductors |
| [RAK12011](/Product-Categories/WisBlock/RAK12011) | Barometric Pressure         | LPS33HW      | STMicroelectronics    |
| [RAK12019](/Product-Categories/WisBlock/RAK12019) | UV Sensor                   | LTR-390UV-01 | Lite-On               |
| [RAK12037](/Product-Categories/WisBlock/RAK12037) | CO2 sensor                  | SCD30        | Sensirion             |
| [RAK12039](/Product-Categories/WisBlock/RAK12039) | Particle matter sensor      | PMSA003I     | Plantower             |
| [RAK12047](/Product-Categories/WisBlock/RAK12047) | VOC Sensor                  | SGP40        | Sensirion             |


#### WisBlock Cellular Modules

The cellular modules support different cellular protocol, as shown in the table.

| RAK Model                                         | Supported Protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Industrial 4.0 Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
