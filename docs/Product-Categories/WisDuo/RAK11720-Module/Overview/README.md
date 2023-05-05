---
rak_img: /assets/images/wisduo/rak11720-module/overview/RAK11720-Module.png
rak_desc: RAK11720 is a low-power LoRa module based on Ambiq Apollo3 Blue AMA3B1KK-KBR-B0 SoC MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the newest SX1262 LoRa transceiver from Semtech. RAK11720 firmware is based on RUI3.
next: ../Quickstart/
prev: ../../
rak_grp: [wisduo, module]
tags:
    - RAK11720
    - wisduo
---

# RAK11720 WisDuo LPWAN Module

Thank you for choosing **RAK11720 WisDuo LPWAN Module** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [Quick Start Guide](../Quickstart/)
* [AT Command Manual](../AT-Command-Manual/)
* [Datasheet](../Datasheet/)
* [RAK11720 3D Model](https://downloads.rakwireless.com/3D_File/WisDuo/3D_RAK11720.step)

## Product Description

RAK11720 is a low-power long-range LoRaWAN module based on Ambiq Apollo3 Blue AMA3B1KK-KBR-B0 SoC MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the SX1262 LoRa transceiver from Semtech. This module complies with Class A, B, & C of LoRaWAN 1.0.3 specifications and also supports LoRa Point-to-Point (P2P) communication mode, which helps you implement your own customized LoRa network quickly. The two RF communication characteristics of the module (LoRa + BLE) make it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, and IoT network applications.

The default firmware of the RAK11720 is based on RUI3 (RAKwireless Unified Interface). This allows you to easily use RAK11720 as a stand-alone module by developing your own custom firmware via Arduino-compatible RUI3 APIs. You can directly interface sensors and other external peripherals to it without needing an additional MCU. In addition to that, RAK11720 can still be interfaced to an external host MCU using AT commands via UART or BLE connection.

:::tip 📝 NOTE
There are two variants available for the RAK11720 Module:
1. With MHF4 IPEX connector to connect external antennas
2. No IPEX connector but with RF pinout to connect custom antenna
:::

## Product Features

- Based on **AMA3B1KK-KBR-B0** and **SX1262**
- ARM Cortex-M4F
- 1&nbsp;MB Flash and 348&nbsp;KB SRAM
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: EU433, CN470, IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- LoRaWAN Activation by OTAA/ABP
- LoRa Point-to-Point (P2P) communication
- Custom firmware using Arduino via RUI3 API
- Easy-to-use AT Command set via UART interface
- I/O ports: UART/I2C/SPI/ADC/GPIO
- Long-range - greater than 10&nbsp;km with optimized antenna
- Ultra-low-power consumption of 2.37&nbsp;μA in sleep mode
- **Supply Voltage**: 1.8&nbsp;V ~ 3.6&nbsp;V
- **Temperature range**: -40°&nbsp;C ~ 85°&nbsp;C
