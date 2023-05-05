---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/programming-stm32wl/rak3172-custom-firmware.png
rak_desc: A step-by-step guide on how to program the STM32WL inside the RAK3172 for custom firmware.
tags:
  - RAK3172
  - STM32WL
  - WisDuo
  - STM32CubeIDE
  - Mbed-OS
  - Tutorial
header:
  title: Programming the STM32WL Inside RAK3172 for Custom Firmware
  caption: by <b>Carl Rowan</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 14/09/2021 09:00 PM
---

# Programming the STM32WL Inside RAK3172 for Custom Firmware

## Overview

After launching the RAK3172 WisDuo LPWAN Module, we received lots of interest in using it as a dedicated LoRa device or LoRaWAN end-device. Although we offer an improved and easier-to-use AT Commands set for the official RAK3172 firmware (compatible with LoRaWAN version 1.0.3), many users are still looking for ways to develop firmware for the STM32WL SoC IC inside the RAK3172.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/programming-stm32wl/rak3172.png" width="60%">
</p>

Because RAK firmly believes in the customer-first principle, we took a closer look and can offer two possible ways. Here are the two (2) options for creating custom firmware for the RAK3172.

## Option 1: Using the STM32CubeIDE

The first option is to use STM32CubeIDE from STM32 Microelectronics. It is free and uses the [LoRaWAN](https://www.rakwireless.com/en-us/technology/lorawan) middleware created by STMicroelectronics for the STM32WL product family. It is a complete IDE based on Eclipse, which is why embedded developers are not totally new to this IDE. You can debug your code with the ST-LINK tool and gain access to the STM32CubeMX code generation software tool.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/programming-stm32wl/stm32cubeide.png" width="100%">
</p>

Although the STM32WL SDK code is primarily intended for the STM32WL Nucleo board with the STM32WL55 chip in it, we developed a guide that lets you easily port the existing examples to the RAK3172, which has a different STM32WLE5 based chip. The [WisDuo documentation](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/#overview) contains a porting guide for STM32CubeIDE for RAK3172.

## Option 2: Using the Mbed-OS

Mbed-OS is another option for developing custom code for the RAK3172. It is an open-source, user-friendly operating system for the Internet of Things (IoT) developed by ARM.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/programming-stm32wl/via-mbed-os.png" width="100%">
</p>

You can develop your custom code using the Mbed Studio, which is based on Theia IDE. This Mbed-OS approach is a contribution by RAK3172 user Charles from [ch2i.eu](http://ch2i.eu/). He created a quick way to use various STM32 boards, including the RAK3172, with the Mbed-OS via his **stm32customtargets**, which works smoothly on Mbed Studio. You can find the complete details for this firmware customization approach, as well as the development board he designed for RAK3172, in his [GitHub repository](https://github.com/hallard/RAK3172-Breakout#readme).

With these two available options, you can use RAK3172 directly without the need for an extra microcontroller host sending AT commands, making your IoT devices more cost effective. This is definitely a good stepping stone for quickly developing custom firmware for your [RAK3172 STM32WL Module for LoRaWAN](https://store.rakwireless.com/products/wisduo-lpwan-module-rak3172).
