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

With its wide range of environmental sensors, the WisBlock Environment Sensor Kit can be utilized in various applications. It can be used in agriculture to monitor temperature, humidity, air quality, and light levels in greenhouses. It can also be used in smart buildings to monitor indoor air quality and adjust ventilation systems accordingly. In addition, it can be used to monitor the weather at meteorological stations and pollution in urban areas. 

With its flexible connectivity options, this kit can be easily integrated into existing IoT platforms, making it an ideal solution for a wide range of industries and use cases.

### Features

- Compatible with Arduino IDE
- USB C interface for data, power and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRaWAN, BLE, LTE-M (optional) and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - <a href="https://store.rakwireless.com/products/rak4631-lpwan-node" target="_blank">RAK4631 LPWAN Module</a>
    - One standard <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen" target="_blank">RAK19007 WisBlock Base Board</a> with 4 sensor slots and 1 IO slot
    - One <a href="https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board" target="_blank">RAK19001 Dual IO WisBlock Base Board</a>  with 6 sensor slots and 2 IO slots
    - <a href="https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor" target="_blank">RAK1901 Temperature and Humidity Sensor</a>
    - <a href="https://store.rakwireless.com/products/rak1902-kps22hb-barometric-pressure-sensor" target="_blank">RAK1902 Barometric Pressure Sensor</a>
    - <a href="https://store.rakwireless.com/products/rak1903-opt3001dnpr-ambient-light-sensor" target="_blank">RAK1903 Ambient Light Sensor</a>
    - <a href="https://store.rakwireless.com/products/rak1906-bme680-environment-sensor" target="_blank">RAK1906 IAQ (Indoor Air Quality) Sensor</a>
    - <a href="https://store.rakwireless.com/products/wisblock-ambient-light-sensor-rak12010" target="_blank">RAK12010 Ambient Light Sensor</a>
    - <a href="https://store.rakwireless.com/products/wisblock-barometer-wt-sensor-rak12011" target="_blank">RAK12011 Barometer WT Sensor</a>
    - <a href="https://store.rakwireless.com/products/rak12019-wisblock-uv-sensor" target="_blank">RAK12019 UV Light Sensor</a>
    - <a href="https://store.rakwireless.com/products/co2-sensor-sensirion-scd30-rak12037" target="_blank">RAK12037 CO2 Sensor</a>
    - <a href="https://store.rakwireless.com/products/particle-matter-sensor-plantower-pmsa003i-rak12039" target="_blank">RAK12039 Particle Matter Sensor</a>
    - <a href="https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40" target="_blank">RAK12047 VOC Sensor</a>
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923
    - (Optional) Cellular variant dependent on a country: two (2) <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board" target="_blank">RAK5860</a> with 5G LTE NB-IoT capability and two (2) <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101" target="_blank">RAK13101</a> with GSM/GPRS capability
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

WisBlock Kits require both a WisBlock Base and a WisBlock Core to be functional for any IoT application. The sensor and IO modules included in the kit will not operate without these components.

The following table displays the WisBlock Base and Core components included in the kit.

| RAK Model                                                                    | Function      | Feature                                                               |
| ---------------------------------------------------------------------------- | ------------- | --------------------------------------------------------------------- |
| <a href="/Product-Categories/WisBlock/RAK19001" target="_blank">RAK19001</a> | WisBlock Base | USB-C, 6 sensor slot, 2 IO slot, battery/solar connector              |
| <a href="/Product-Categories/WisBlock/RAK19007" target="_blank">RAK19007</a> | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| <a href="/Product-Categories/WisBlock/RAK4631" target="_blank">RAK4631</a>   | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |

:::tip 📝 NOTE
The RAK4631 is compatible with the Arduino IDE. You can add the module to the board manager by following the instructions in the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or by visiting the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The following table lists the modules included in the kit, detailing the chips used inside each of them.

:::tip 📝 NOTE
Check the specific requirements and limitations for each module, including necessary batteries and configurations.
:::

| RAK Model                                                                    | Function                    | Chip         | Manufacturer          |
| ---------------------------------------------------------------------------- | --------------------------- | ------------ | --------------------- |
| <a href="/Product-Categories/WisBlock/RAK1901" target="_blank">RAK1901</a>   | Temperature Humidity Sensor | SHTC3        | Sensirion             |
| <a href="/Product-Categories/WisBlock/RAK1902" target="_blank">RAK1902</a>   | Barometric Pressure         | LPS22HB      | STMicroelectronics    |
| <a href="/Product-Categories/WisBlock/RAK1903" target="_blank">RAK1903</a>   | Ambient Light Sensor        | OPT3001DNPR  | Texas Instruments     |
| <a href="/Product-Categories/WisBlock/RAK1906" target="_blank">RAK1906</a>   | Environmental Sensor        | BME680       | BOSCH                 |
| <a href="/Product-Categories/WisBlock/RAK12010" target="_blank">RAK12010</a> | Ambient Light Sensor        | VEML7700     | Vishay Semiconductors |
| <a href="/Product-Categories/WisBlock/RAK12011" target="_blank">RAK12011</a> | Barometric Pressure         | LPS33HW      | STMicroelectronics    |
| <a href="/Product-Categories/WisBlock/RAK12019" target="_blank">RAK12019</a> | UV Sensor                   | LTR-390UV-01 | Lite-On               |
| <a href="/Product-Categories/WisBlock/RAK12037" target="_blank">RAK12037</a> | CO2 sensor                  | SCD30        | Sensirion             |
| <a href="/Product-Categories/WisBlock/RAK12039" target="_blank">RAK12039</a> | Particle matter sensor      | PMSA003I     | Plantower             |
| <a href="/Product-Categories/WisBlock/RAK12047" target="_blank">RAK12047</a> | VOC Sensor                  | SGP40        | Sensirion             |


#### WisBlock Cellular Modules

The cellular modules support various cellular protocols, as detailed in the following table.

| RAK Model                                                                    | Supported Protocol | Chip   | Manufacturer |
| ---------------------------------------------------------------------------- | ------------------ | ------ | ------------ |
| <a href="/Product-Categories/WisBlock/RAK13101" target="_blank">RAK13101</a> | GSM/GPRS           | MC20CE | Quectel      |
| <a href="/Product-Categories/WisBlock/RAK5860" target="_blank">RAK5860</a>   | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The **WisBlock Environment Sensor Kit** is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).
