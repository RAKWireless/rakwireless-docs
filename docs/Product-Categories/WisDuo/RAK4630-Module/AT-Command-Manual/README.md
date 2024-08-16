---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK4630 WisDuo LPWAN Module.
rak_img: /assets/images/wisduo/rak4630-module/RAK4630-Module.png
prev: ../Quickstart/
next: ../DFU/
tags:
  - RAK4630
  - AT Command Manual
---


# RAK4630 AT Command Manual

## Overview

The RAK4630 is built on the nRF52840 chip and incorporates the LoRa transceiver SX1262. Its purpose is to streamline LoRaWAN and LoRa point-to-point (P2P) communication. Additionally, it leverages the BLE functionality of the nRF52840 chip. To integrate LoRa technology into your projects, the RAK4630 offers a user-friendly Serial Port communication interface for sending AT commands. These AT commands enable you to configure the parameters required for LoRa P2P and LoRaWAN communication.

## RUI3 AT Command List

The RAK4630 default firmware is based on [RUI3 (RAKwireless Unified Interface V3)](/RUI3/#overview). You can access the AT command via USB and BLE by default.

The complete list of commands can be found in [RUI3 AT Commands Documentation.](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#content)


:::tip 📝 NOTE:
Apart from USB and BLE, AT commands can also be interfaced via UART1 (Pin9 and Pin10) and UART2 (Pin6 and Pin7 - No AT Command functionality by default). For details on the pin distribution of this module, refer to [RAK4630 Datasheet](/Product-Categories/WisDuo/RAK4630-Module/Datasheet/#pin-definition). The basic circuit setup can be found in the [RAK4630 Quick Start Guide.](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#hardware-setup) You can configure the settings of each interface through [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::
