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

The **WisBlock Agriculture Kit** is a comprehensive and customizable IoT kit optimized for agricultural applications. This kit includes a range of sensors designed specifically for agriculture, including soil, light, and environmental sensors. Additionally, the kit also has common interfaces like SDI-12, 4-20&nbsp;mA, and RS485, providing a versatile platform for monitoring and controlling agricultural conditions.

The kit is designed for easy integration with other WisBlock modules. It also supports different connectivity options like LoRaWAN, BLE, LTE-M, and NB-IoT. The said options enable you to choose the most suitable connectivity for your specific use case. With this kit, you can easily monitor soil moisture, light levels, temperature, and humidity remotely. Moreover, it can receive real-time alerts, and take appropriate action to optimize crop yields and resource use.

### Features

- Compatible with Arduino IDE
- USB-C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability.
- Multiple communication protocols: LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631 LPWAN Module</a> 
    - One standard <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007 WisBlock Base Board</a> with four (4) sensor slots and 1 IO slot
    - One <a href="https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19001 Dual IO WisBlock Base Board</a> with six (6) sensor slots and 2 IO slots
    - Two <a href="https://store.rakwireless.com/products/rak12023-rak12035-wisblock-soil-moisture-sensor?utm_source=RAK12035&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK2023/RAK12035 Soil Moisture Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rak12019-wisblock-uv-sensor?utm_source=RAK12019&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12019 UV Light Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/wisblock-barometer-wt-sensor-rak12011/?utm_source=RAK12011&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12011 Barometer WT Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010?utm_source=RAK12010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12010 Ambient Light Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1903-opt3001dnpr-ambient-light-sensor?utm_source=RAK1903&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1903 Ambient Light Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1906-bme680-environment-sensor?utm_source=RAK1906&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1906 Environmental Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rain-sensor-rak12005-module-and-rak12030-sensor?utm_source=RAK12005&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12005/RAK12030 Rain Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rak5802-rs485-interface?utm_source=RAK5802&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5802 RS485 Interface Modules</a> 
    - Two <a href="https://store.rakwireless.com/products/rak5801-4-20ma-interface?utm_source=RAK5801&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5801 4-20&nbsp;mA Interface Modules</a> 
    - Two <a href="https://store.rakwireless.com/products/sdi-12-interface-rak13010?utm_source=RAK13010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13010 SDI-12 Interface Modules</a> 
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923  
    - Select a cellular variant that is applicable for your region:  
        - Two (2) <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> with 5G LTE NB-IoT capability
        - Two (2) <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a> with GSM/GPRS capability
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


| RAK Model                                                                                                                                                                                                  | Function      | Feature                                                               |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| <a href="https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board" target="_blank">RAK19001</a>                               | WisBlock Base | USB-C, 6 sensor slot, 2 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007</a>                       | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore&variant=37505443987654" target="_blank">RAK4631</a> | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |

:::tip 📝 NOTE
The **RAK4631** is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                                                                                                                                                                       | Function             | Chip          | Manufacturer          |
| ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | ------------- | --------------------- |
| <a href="https://store.rakwireless.com/products/rak12025-wisblock-gyroscope-sensor?utm_campaign=BuyFromStore&utm_medium=Document&utm_source=RAK12025" target="_blank">RAK12025</a>              | Soil Moisture Sensor | ATTINY441-SSU | Atmel                 |
| <a href="https://store.rakwireless.com/products/rak12023-rak12035-wisblock-soil-moisture-sensor?utm_source=RAK12023&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12023</a> | RAK12025 Adapter     | --            | RAKwireless           |
| <a href="https://store.rakwireless.com/products/rak12019-wisblock-uv-sensor?utm_source=RAK12019&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12019</a>                     | UV Sensor            | LTR-390UV-01  | Lite-On               |
| <a href="https://store.rakwireless.com/products/wisblock-barometer-wt-sensor-rak12011/?utm_source=RAK12011&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12011</a>          | Barometric Pressure  | LPS33HW       | STMicroelectronics    |
| <a href="https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010?utm_source=RAK12010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12010</a>          | Ambient Light Sensor | VEML7700      | Vishay Semiconductors |
| <a href="https://store.rakwireless.com/products/rak1903-opt3001dnpr-ambient-light-sensor?utm_source=RAK1903&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1903</a>          | Ambient Light Sensor | OPT3001DNPR   | Texas Instruments     |
| <a href="https://store.rakwireless.com/products/rak1906-bme680-environment-sensor?utm_source=RAK1906&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1906</a>                 | Environmental Sensor | BME680        | BOSCH                 |
| <a href="https://store.rakwireless.com/products/rain-sensor-rak12005-module-and-rak12030-sensor?utm_source=RAK12005&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12005</a> | Rain Sensor          | MCP606        | Microchip             |
| <a href="https://store.rakwireless.com/products/rain-sensor-rak12005-module-and-rak12030-sensor?utm_source=RAK12005&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12030</a> | Rain Sensor          | --            | RAKwireless           |
| <a href="https://store.rakwireless.com/products/rak5802-rs485-interface?utm_source=RAK5802&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5802</a>                           | RS485                | TP8485E       | 3PEAK                 |
| <a href="https://store.rakwireless.com/products/rak5801-4-20ma-interface?utm_source=RAK5801&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5801</a>                          | 4-20 mA              | LM2902        | STMicroelectronics    |
| <a href="https://store.rakwireless.com/products/sdi-12-interface-rak13010?utm_source=RAK13010&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13010</a>                       | SDI-12               | --            | RAKwireless           |


#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                                                                                                                                                        | Supported Protocol | Chip   | Manufacturer |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------------ |
| <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a>     | GSM/GPRS           | MC20CE | Quectel      |
| <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The **WisBlock Agriculture Kit** is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
