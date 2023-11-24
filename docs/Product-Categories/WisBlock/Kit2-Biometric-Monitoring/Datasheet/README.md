---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock Biometric Monitoring Kit for your wearable monitoring IoT applications.
rak_img: /assets/images/wisblock/kits/2_biometric_kit_1.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - WisBlock Biometric Monitoring Kit
  - WisBlock Kit
  - WisBlock
---

# WisBlock Biometric Monitoring Kit Datasheet

## Overview

### Description

The **WisBlock Biometric Monitoring Kit** is a comprehensive and customizable IoT kit designed for wearable biometric monitoring applications. This kit includes biometric sensors for monitoring heart rate and blood oxygen levels, as well as a non-contact body temperature sensor, providing valuable data for monitoring health and fitness. Depending on the use case, the kit supports various connectivity options such as LoRaWAN, BLE, LTE-M, and NB-IoT, enabling long-range and short-range communication.

With this kit, users can easily create custom biometric monitoring solutions for a variety of scenarios, including remote patient monitoring, sports performance tracking, and wellness applications. With its range of biometric sensors and connectivity options, it offers a versatile platform for creating customized solutions for a variety of use cases.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power, and battery charging
- Supports Li-Ion batteries with built-in solar charging capabilities
- Multiple communication protocols: LoRa/LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - [RAK4631 LPWAN Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Quickstart/)
    - One standard [RAK19007 WisBlock Base Board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Quickstart/) with 4 sensor slots and 1 IO slot
    - One standard [RAK19003 WisBlock Mini Base Board](/Product-Categories/WisBlock/RAK19003/Quickstart/) with 2 sensor slots
    - Two [RAK12003 IR Contactless Temperature Sensor](/Product-Categories/WisBlock/RAK12003/Quickstart/)
    - Two [RAK12012 Heartrate Pulse Oximetry Sensor](/Product-Categories/WisBlock/RAK12012/Quickstart/)
    - LoRaWAN Supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) [RAK5860](/Product-Categories/WisBlock/RAK5860/Quickstart/) with 5G LTE NB-IoT capability and two (2) [RAK13101](/Product-Categories/WisBlock/RAK13101/Quickstart/) with GSM/GPRS capability
- GPS built-in on Cellular modules

## Specifications

### Overview

The WisBlock Biometric Monitoring Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/2_biometric_kit_2.png"
  width="80%"
  caption="Modules of WisBlock Biometric Monitoring Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                         | Function      | Feature                                                               |
| ------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| [RAK19003](/Product-Categories/WisBlock/RAK19003) | WisBlock Base | USB-C, 2 sensor slots, battery/solar connector                        |
| [RAK19007](/Product-Categories/WisBlock/RAK19007) | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| [RAK4631](/Product-Categories/WisBlock/RAK4631)   | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |


:::tip 📝 NOTE
RAK4631 is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements like needed battery, configurations, as well as its limitations.
:::

| RAK Model                                         | Function                         | Chip                   | Manufacturer     |
| ------------------------------------------------- | -------------------------------- | ---------------------- | ---------------- |
| [RAK12003](/Product-Categories/WisBlock/RAK12003) | Infrared Temperature Sensor      | MLX90632SLD-DCB-000-RE | Melexis          |
| [RAK12012](/Product-Categories/WisBlock/RAK12012) | Heart Rate Pulse Oximetry Sensor | MAX30102               | Analog Devices |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols as shown in the table.

| RAK Model                                         | Supported protocol | Chip   | Manufacturer |
| ------------------------------------------------- | ------------------ | ------ | ------------ |
| [RAK13101](/Product-Categories/WisBlock/RAK13101) | GSM/GPRS           | MC20CE | Quectel      |
| [RAK5860](/Product-Categories/WisBlock/RAK5860)   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The WisBlock Biometric Monitoring Kit is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).