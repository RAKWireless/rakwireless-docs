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

The **WisBlock Outdoor Location Tracker Kit** is a comprehensive and customizable IoT kit specifically designed to track the location of objects in outdoor environments. The kit includes two precise GPS/GNSS modules for tracking outdoor locations. Additionally, it has 9 degrees of freedom (9-DOF) sensors and accelerometers, which aid in tracking object movements and direction changes.

With the WisBlock Outdoor Location Tracker Kit, you can monitor and track the location of a wide range of objects, including vehicles, equipment, and people. The kit provides real-time location data and allows users to analyze the data and create custom alerts and notifications based on specific events.

Multiple connectivity methods, including LoRaWAN, BLE, LTE-M, and NB-IoT, are supported by the WisBlock Outdoor Location Tracker Kit. This ensures you can select the most appropriate communication channel based on your requirements and the available infrastructure. In addition, the kit is also highly customizable and can be configured to meet specific needs.

### Features

- Compatible with Arduino IDE
- USB-C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability
- Multiple communication protocols: LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Two WisBlock Core modules - <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631 LPWAN Module</a> 
    - One <a href="https://store.rakwireless.com/products/wisblock-base-board-rak19003?utm_source=RAK19003&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19003 WisBlock Mini Base Board</a> with two (2) sensor slots
    - One <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007 WisBlock Base Board</a> with four (4) sensor slots and 1 IO slot
    - Two <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904 Acceleration Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/9dof-motion-sensor-tdk-mpu9250-rak1905?utm_source=RAK1905&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1905 9-DOF Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12500 GNSS Location Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/rak1910-max-7q-gnss-location-sensor?utm_source=RAK1910&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1910 GNSS Location Sensors</a> 
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923  
    - (Optional) Select a cellular variant that is applicable for your region:  
      - Two (2) <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> with 5G LTE NB-IoT capability
      - Two (2) <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a> with GSM/GPRS capability
- GPS built-in on Cellular modules


## Specifications

### Overview

The WisBlock Outdoor Location Tracker Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/10_outdoor_tracker_kit_2.png"
  width="70%"
  caption="Modules of the WisBlock Outdoor Location Tracker Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require both the WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The following table shows the WisBlock Base and WisBlock Core modules included in the kit.

| RAK Model                                                                                                                                                                            | Function      | Feature                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------- |
| <a href="https://store.rakwireless.com/products/wisblock-base-board-rak19003?utm_source=RAK19003&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19003</a>         | WisBlock Base | USB-C, 2 sensor slot, battery/solar connector                         |
| <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007</a> | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631</a>  | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antennas |

:::tip 📝 NOTE
**RAK4631** is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

The modules included in the kit and the chips used in them are listed below.

:::tip 📝 NOTE
Check individual modules for their specific requirements, such as needed battery, configurations, as well as their limitations.
:::

| RAK Model                                                                                                                                                                                      | Function             | Chip     | Manufacturer       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------- | -------- | ------------------ |
| <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904</a>        | 3-Axis Acceleration  | LIS3DH   | STMicroelectronics |
| <a href="https://store.rakwireless.com/products/9dof-motion-sensor-tdk-mpu9250-rak1905?utm_source=RAK1905&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1905</a>           | 9-Axis DOF Sensor    | MPU-9250 | TDK                |
| <a href="https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK12500</a> | GNSS Location Module | ZOE-M8Q  | u-blox             |
| <a href="https://store.rakwireless.com/products/rak1910-max-7q-gnss-location-sensor?utm_source=RAK1910&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1910</a>              | GNSS Location Module | MAX-7Q   | u-blox             |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols as shown in the following table.

| RAK Model                                                                                                                                                                        | Supported Protocol | Chip   | Manufacturer |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------------ |
| <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a>     | GSM/GPRS           | MC20CE | Quectel      |
| <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The **WisBlock Industrial 4.0 Kit** is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).

