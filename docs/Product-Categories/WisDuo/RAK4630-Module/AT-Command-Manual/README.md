---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK4630 WisDuo LPWAN Module.
rak_img: /assets/images/wisduo/rak4630-module/overview/RAK4630-Module.png
prev: ../Quickstart/
next: ../DFU/
tags:
  - RAK4630
  - AT Command Manual
---


# RAK4630 AT Command Manual

## Overview

RAK4630 is based on the nRF52840 chip and LoRa transceiver SX1262. It is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. It also features BLE functionality of the nRF52840 chip. To integrate LoRa technology into your projects, the RAK4630 is implemented with an easy-to-use Serial Port communication interface where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication.

## RUI3 AT Command List

The RAK4630 default firmware is based on [RUI3 (RAKwireless Unified Interface V3)](/RUI3/#overview). You can access the AT command via USB and BLE by default.

The complete list of commands can be found in [RUI3 AT Commands Documentation.](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#content)


:::tip 📝 NOTE:
In addition, aside from USB and BLE, AT commands can be interfaced via UART1(Pin9 and Pin10) and UART2(Pin6 and Pin7 - No AT Command functionality by default) as well. To get familiar with the pin distribution of this module, refer to the [RAK4630 Datasheet](/Product-Categories/WisDuo/RAK4630-Module/Datasheet/#pin-definition). The bare minimum circuit can be found in the [RAK4630 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#hardware-setup). You can configure the settings of each interface via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::
