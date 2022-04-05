# RAKwireless Unified Interface V3 (RUI3)

## Overview

The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible to RAK LPWAN modules. It supports the standard AT Commands which is known to many people, as well as the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible to popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor which can save you cost, circuit board space and current consumption.

### Hardware Compatibility

RUI3 is compatible to the following RAK LPWAN modules:

| RAK Devices                                                                      | 
| -------------------------------------------------------------------------------- | 
| [RAK4630](/Product-Categories/WisDuo/RAK4630-Module/Overview/)                   | 
| [RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Overview/)                    | 
| [RAK3172](/Product-Categories/WisDuo/RAK3172-Module/Overview/)                   | 
| [RAK3272S](/Product-Categories/WisBlock/RAK3272S-Breakout-Board/Overview/)       | 
| [RAK3372 / RAK3172 Evaluation Board](/Product-Categories/WisBlock/RAK3172-Evaluation-Board/Overview/)       | 
| [RAK3172-SiP](/Product-Categories/WisDuo/RAK3172-SiP/Overview/)                  | 
| [RAK3272-SiP](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Overview/)   | 

The interfaces of RUI3 to the RAK modules are via UART, USB, BLE, and NFC. The physical and wireless RUI3 interfaces are abstracted to behave as Serial Port where three [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rui3-serial-operating-modes) can be configured by the user. You can check on the modules above to see the quick start guide and datasheet of the specific module.

### RUI3 Software Guide

RAKwireless Unified Interface V3 (RUI3) features are utilized by using its RUI3 API. 

The RUI3 API is well explained with examples codes in this documentation.

- [Arduino API](/RUI3/Arduino-API/)
- [System](/RUI3/Arduino-API/)
- [LoRaWAN](/RUI3/Arduino-API/)
- [BLE](/RUI3/Arduino-API/)
- [Binary Mode](/RUI3/Arduino-API/)

For you to compile and upload to the RAK module the RUI3 codes, you need to have an Arduino IDE or Visual Studio IDE in your PC or laptop. The guide on doing this is on the quick start guide of the specific module you are using which is mentioned in the [Hardware Compatibility](/RUI3/#hardware-compatibility) section of this document.

The RAK LPWAN modules with RUI3 can also be interfaced to external host via [AT command mode](/RUI3/Serial-Operating-Modes/AT-Command-Manual/) and [Binary command mode](/RUI3/Serial-Operating-Modes/Binary-Command-Manual/). Custom serial interface can also be created by the user using [Custom Mode](/RUI3/Serial-Operating-Modes/Custom-Mode/).

