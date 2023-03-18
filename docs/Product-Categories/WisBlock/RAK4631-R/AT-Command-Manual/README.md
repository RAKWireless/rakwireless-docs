---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK4631-R.
rak_img: /assets/images/wisblock/rak4631-r/RAK4631-R.png
prev: ../Examples/
next: ../DFU/
tags:
  - RAK4631-R
  - AT Command Manual
  - wisblock
---


# RAK4631-R AT Command Manual

## Overview

RAK4631-R is based on the nRF52840 chip and LoRa transceiver SX1262. It is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. It also features BLE functionality of the nRF52840 chip. To integrate LoRa technology into your projects, the RAK4631-R is implemented with an easy-to-use Serial Port communication interface where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication.

## RUI3 AT Command List

The RAK4631-R default firmware is based on [RUI3 (RAKwireless Unified Interface V3)](/RUI3/#overview). You can access the AT command via USB and BLE by default.

The complete list of commands can be found in [RUI3 AT Commands Documentation.](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#content)


:::tip 📝 NOTE:
In addition, when RAK4631-R is in WisBlock Base board, aside from USB and BLE, AT commands can also be interfaced via TX0/RX0 and TX1/RX1(no AT Command functionality by default). You can configure the settings of each interface via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::