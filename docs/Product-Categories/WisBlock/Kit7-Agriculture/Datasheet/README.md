---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Kit for monitoring and controlling agricultural applications.
rak_img: /assets/images/wisblock/kits/7_agriculture_kit_1.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Agriculture Kit
  - WisBlock Kit
---

# WisBlock Agriculture Kit Datasheet

## Overview

### Description

The **WisBlock Agriculture Kit** is a comprehensive and customizable IoT kit optimized for agricultural applications. This kit includes a range of sensors designed specifically for agriculture, including soil, light, and environmental sensors, as well as common interfaces like SDI-12, 4-20&nbsp;mA, and RS485, providing a versatile platform for monitoring and controlling agricultural conditions.

The kit is designed for easy integration with other WisBlock modules, and it supports different connectivity options like LoRaWAN, BLE, LTE-M, and NB-IoT, enabling you to choose the most suitable connectivity option for your specific use case. With this kit, you can easily monitor soil moisture, light levels, temperature, and humidity remotely, receive real-time alerts, and take appropriate action to optimize crop yields and resource use.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One [RAK19001 Dual IO WisBlock Base Board](/Product-Categories/WisBlock/RAK19001/Overview/) with 6 sensor slots and 2 IO slots
    - Two [RAK2023/RAK12035 Soil Moisture Sensors](/Product-Categories/WisBlock/RAK12035/Quickstart/)
    - Two [RAK12019 UV Light Sensors](/Product-Categories/WisBlock/RAK12019/Quickstart/)
    - Two [RAK12011 Barometer WT Sensors](/Product-Categories/WisBlock/RAK12011/Quickstart/)
    - Two [RAK12010 Ambient Light Sensors](/Product-Categories/WisBlock/RAK12010/Quickstart/)
    - Two [RAK1903 Ambient Light Sensors](/Product-Categories/WisBlock/RAK1903/Quickstart/)
    - Two [RAK1906 Environmental Sensors](/Product-Categories/WisBlock/RAK1906/Quickstart/)
    - Two [RAK12005/RAK12030 Rain Sensors](/Product-Categories/WisBlock/RAK12005/Quickstart/)
    - Two [RAK5802 RS485 Interface Modules](/Product-Categories/WisBlock/RAK5802/Quickstart/)
    - Two [RAK5801 4-20&nbsp;mA Interface Modules](/Product-Categories/WisBlock/RAK5801/Quickstart/)
    - Two [RAK13010 SDI-12 Interface Modules](/Product-Categories/WisBlock/RAK13010/Overview/)
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules

## Specifications

### Overview

The WisBlock Agriculture Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/7_agriculture_kit_2.png"
  width="80%"
  caption="Modules of the WisBlock Agriculture Kit"
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

| RAK Model                                         | Function             | Chip          | Manufacturer          |
| ------------------------------------------------- | -------------------- | ------------- | --------------------- |
| [RAK12025](/Product-Categories/WisBlock/RAK12025) | Soil Moisture Sensor | ATTINY441-SSU | Atmel                 |
| [RAK12023](/Product-Categories/WisBlock/RAK12023) | RAK12025 Adapter     | --            | RAKwireless           |
| [RAK12019](/Product-Categories/WisBlock/RAK12019) | UV Sensor            | LTR-390UV-01  | Lite-On               |
| [RAK12011](/Product-Categories/WisBlock/RAK12011) | Barometric Pressure  | LPS33HW       | STMicroelectronics    |
| [RAK12010](/Product-Categories/WisBlock/RAK12010) | Ambient Light Sensor | VEML7700      | Vishay Semiconductors |
| [RAK1903](/Product-Categories/WisBlock/RAK1903)   | Ambient Light Sensor | OPT3001DNPR   | Texas Instruments     |
| [RAK1906](/Product-Categories/WisBlock/RAK1906)   | Environmental Sensor | BME680        | BOSCH                 |
| [RAK12005](/Product-Categories/WisBlock/RAK12005) | Rain Sensor          | MCP606        | Microchip             |
| [RAK12030](/Product-Categories/WisBlock/RAK12005) | Rain Sensor          | --            | RAKwireless           |
| [RAK5802](/Product-Categories/WisBlock/RAK5802)   | RS485                | TP8485E       | 3PEAK                 |
| [RAK5801](/Product-Categories/WisBlock/RAK5801)   | 4-20&nbsp;mA         | LM2902        | STMicroelectronics    |
| [RAK13010](/Product-Categories/WisBlock/RAK13010) | SDI-12               | --            | RAKwireless           |


#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                         | Supported Protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Movement Detection Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
