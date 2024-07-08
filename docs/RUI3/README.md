---
rak_desc: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible to RAK LPWAN modules. It supports the standard AT Commands which is known to many people.
rak_img: /assets/images/rui3/RUI3.jpg
---

# RAKwireless Unified Interface V3 (RUI3)

## Overview

The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible to RAK LPWAN modules. It supports the standard AT Commands which is known to many people<!---, as well as the Binary Mode-->.<!---The Binary mode is an improved version of the AT command with its efficient byte-array based protocol and implementation of checksum.--> RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible to popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor which can save you cost, circuit board space and current consumption.

### Hardware Compatibility

To start creating your custom RUI3 firmware, check the links of the individual RUI3 modules Quick Start Guides. There is a detailed documentation of RUI3 Arduino API as well.

RUI3 is compatible to the following RAK LPWAN modules:

| RAK Devices                                                                                           | Quick Start Guides                                                                                                                                                                    |
| ----------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [RAK4630](/Product-Categories/WisDuo/RAK4630-Module/Overview/)                                        | [RAK4630 RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#rak4630-as-a-stand-alone-device-using-rui3)                                    |
| [RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Overview/)                                         | [RAK4631-R RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631-R/Quickstart/)                                                                                |
| [RAK3172](/Product-Categories/WisDuo/RAK3172-Module/Overview/)                                        | [RAK3172 RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#rak3172-as-a-stand-alone-device-using-rui3)                                    |
| [RAK3272S](/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Overview/)                              | [RAK3272S RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Quickstart/#rak3272s-breakout-board-as-a-stand-alone-device-using-rui3)          |
| [RAK3372 / RAK3172 Evaluation Board](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Overview/)   | [RAK3172 Evaluation Board RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#rak3172-e-as-a-stand-alone-device-using-rui3)       |
| [RAK3172-SiP](/Product-Categories/WisDuo/RAK3172-SiP/Overview/)                                       | [RAK3172-SiP RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-SiP/Quickstart/#rak3172-sip-as-a-stand-alone-device-using-rui3)                               |
| [RAK3272-SiP](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Overview/)                        | [RAK3272-SiP RUI3 Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Quickstart/#rak3272-sip-breakout-board-as-a-stand-alone-device-using-rui3) |
| [RAK11720](/Product-Categories/WisDuo/RAK11720-Module/Overview)                                       | [RAK11720 RUI3 Guide](/Product-Categories/WisDuo/RAK11720-Module/Quickstart/#rak11720-as-a-stand-alone-device-using-rui3)                                                             | 
| [RAK11721](/Product-Categories/WisDuo/RAK11721-Breakout-Board/Overview)                               |                                                                                                                                                                                       | 
| [RAK11722](/Product-Categories/WisBlock/RAK11722/Overview)                                            |                                                                                                                                                                                       |

### RUI3 Software Guide

#### Writing RUI3 Custom Firmware

RAKwireless Unified Interface V3 (RUI3) features are utilized by using its RUI3 API. 

:::tip 📝 NOTE
**RUI3 Board Support Package JSON URL**

 `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json`.
:::

The RUI3 API is well explained with examples codes in this documentation.

- [Arduino API](/RUI3/Arduino-API/)
- [System](/RUI3/System/)
- [LoRaWAN](/RUI3/LoRaWAN/)
- [BLE](/RUI3/BLE/)
<!--- [Binary Mode](/RUI3/Binary-Mode/)-->

For you to compile and upload to the RAK module the RUI3 codes, you need to have an Arduino IDE, Visual Studio Code or Visual Studio IDE in your PC or laptop. The guide on doing this is on the quick start guide of the specific module you are using which is mentioned in the [Hardware Compatibility](/RUI3/#hardware-compatibility) section of this document.

#### Use of RUI3 Serial Commands (AT<!--- and Binary-->)

The RAK LPWAN modules with RUI3 can also be interfaced with an external host via [AT command mode (default)](/RUI3/Serial-Operating-Modes/AT-Command-Manual/)<!--- and [Binary command mode](/RUI3/Serial-Operating-Modes/Binary-Command-Manual/)-->. A custom serial interface can be created by the user using [Custom Mode](/RUI3/Serial-Operating-Modes/Custom-Mode/). When the serial interface is configured for Custom mode, the standard AT commands are disabled and will not be accepted anymore by the module unless switched again to AT mode.

The interfaces of RUI3 are via UART, USB, BLE, and NFC. The physical and wireless RUI3 interfaces are abstracted to behave as Serial Port, where the three [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rui3-serial-operating-modes) can be configured by the user.

:::tip 📝 NOTE
RUI3 Serial Mode default configuration is `AT Command` and still available even with RUI3 Custom Firmware.
:::

[WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) is also a compatible software tool with RUI3-powered devices. It can set up the LoRa/LoRaWAN parameters and configurations of the device and can also manage firmware updates.

#### RUI3 Supported IDE

- [Arduino IDE](/RUI3/Supported-IDE/#arduino-ide)
- [Visual Studio Code](/RUI3/Supported-IDE/#visual-studio-code-arduino-extension)
- [Visual Studio IDE](/RUI3/Supported-IDE/#visual-studio-ide)

