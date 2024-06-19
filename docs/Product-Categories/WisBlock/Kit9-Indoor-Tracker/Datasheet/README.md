---
rak_desc: Contains a list of the modules and sensors included in this fully customizable WisBlock IoT Kit for indoor location tracking applications.
rak_img: /assets/images/wisblock/kits/9_indoor_tracker_kit_1.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
  - WisBlock Indoor Location Tracker Kit
  - WisBlock Kit
---

# WisBlock Indoor Location Tracker Kit Datasheet

## Overview

### Description

The **WisBlock Indoor Location Tracker Kit** is an advanced IoT kit designed specifically for indoor location tracking, utilizing a range of cutting-edge technologies and sensors. This kit is an ideal solution for companies, organizations, and individuals looking to keep track of their assets and resources in indoor environments.

The kit includes ultra-wideband (UWB) technology, accelerometers, and 9 degrees of freedom (9-DOF) sensors to provide highly accurate and reliable location-tracking capabilities. With customizable features, users can configure the kit to suit their specific needs, and it can be easily integrated into existing systems.

In addition to its powerful tracking capabilities, the WisBlock Indoor Location Tracker Kit also supports various connectivity options such as LoRaWAN, BLE, LTE-M, and NB-IoT. This allows users to select the network connectivity option that best meets their needs and preferences, ensuring seamless integration into existing networks.

### Features

- Compatible with Arduino IDE
- USB-C interface for data, power, and battery charging
- Supports Li-Ion battery with built-in solar charging capability.
- Multiple communication protocols: LoRaWAN, BLE, LTE-M (optional), and NB-IoT (optional)
- Included modules:
    - Four WisBlock Core modules - <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631 LPWAN Module</a> 
    - Two standard <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007 WisBlock Base Board</a> with four (4) sensor slots and 1 IO slot
    - Two <a href="https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19001 Dual IO WisBlock Base Board</a> with six (6) sensor slots and 2 IO slots
    - Two <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904 Acceleration Sensors</a> 
    - Two <a href="https://store.rakwireless.com/products/9dof-motion-sensor-tdk-mpu9250-rak1905?utm_source=RAK1905&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1905 9DOF Sensors</a> 
    - Four <a href="https://store.rakwireless.com/products/uwb-module-decawave-dwm1000-rak13801?utm_source=RAK13801&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13801 UWB Modules</a> 
    - LoRaWAN supported bands: RU864, IN865, EU868, AU915, US915, KR920, and AS923  
    - (Optional) Select a cellular variant that is applicable for your region:  
        - Two (2) <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> with 5G LTE NB-IoT capability
        - Two (2) <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a> with GSM/GPRS capability
- GPS built-in on Cellular modules (only works outdoor)  


## Specifications

### Overview

The WisBlock Indoor Location Tracker Kit includes the following modules:

<rk-img
  src="/assets/images/wisblock/kits/9_indoor_tracker_kit_2.png"
  width="70%"
  caption="Modules of the WisBlock Indoor Location Tracker Kit"
/>

### Hardware

#### WisBlock Base and Core

WisBlock Kits require WisBlock Base and WisBlock Core to be useful for any IoT application. The sensor and IO modules included in the kit will not work without the base and core.

The table shows the base and core included in the kit.

| RAK Model                                                                                                                                                                            | Function      | Feature                                                               |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------- | --------------------------------------------------------------------- |
| <a href="https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19001</a> | WisBlock Base | USB-C, 6 sensor slot, 2 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19007</a> | WisBlock Base | USB-C, 4 sensor slot, 1 IO slot, battery/solar connector              |
| <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631</a>  | WisBlock Core | Based on nrf52840 (BLE) and SX1262 (LoRa), IPEX connector for antenna |

:::tip 📝 NOTE
**RAK4631** is compatible with Arduino IDE. You can add the module to the board manager by following either the [Installation Guide in the Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) or the [RAK Arduino BSP GitHub Repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
:::

#### WisBlock Modules

These are the modules included in the kit, showing the chips used inside them.

:::tip 📝 NOTE
Check the individual modules for their specific requirements, like needed batteries and configurations, as well as their limitations.
:::

| RAK Model                                                                                                                                                                               | Function            | Chip     | Manufacturer       |
| --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------- | -------- | ------------------ |
| <a href="https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1904</a> | 3-Axis Acceleration | LIS3DH   | STMicroelectronics |
| <a href="https://store.rakwireless.com/products/9dof-motion-sensor-tdk-mpu9250-rak1905?utm_source=RAK1905&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK1905</a>    | 9-Axis DOF Sensor   | MPU-9250 | TDK                |
| <a href="https://store.rakwireless.com/products/uwb-module-decawave-dwm1000-rak13801?utm_source=RAK13801&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13801</a>    | UWB                 | DW10000  | Decawave           |

#### WisBlock Cellular Modules

The cellular modules support different cellular protocols, as shown in the table.

| RAK Model                                                                                                                                                                        | Supported Protocol | Chip   | Manufacturer |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------ | ------ | ------------ |
| <a href="https://store.rakwireless.com/products/wisblock-gsm-module-rak13101?utm_source=RAK13101&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK13101</a>     | GSM/GPRS           | MC20CE | Quectel      |
| <a href="https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK5860</a> | LTE-M/NB-IoT       | BG77   | Quectel      |

#### Interconnections

The **WisBlock Indoor Location Tracker Kit** is designed to get you started on your IoT projects. Before connecting various modules, you must first check for any potential conflicts. To determine whether there are conflicts, you can use the [WisBlock Pin Mapper tool](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/).

