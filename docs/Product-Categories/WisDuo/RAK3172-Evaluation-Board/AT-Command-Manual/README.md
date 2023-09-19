---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK3172 Evaluation Board.
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3172 Evaluation Board
rak_img: /assets/images/wisduo/rak3172-evaluation-board/RAK3172-Evaluation.png

---

# RAK3172 Evaluation Board AT Command Manual

## Introduction

The RAK3172 Evaluation WisDuo Board is based on the STM32WLE5CCU6 chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, we implemented an easy-to-use USB interface, through which you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication.

The RAK3172 Evaluation Board consists of two modules:
- RAK3372 WisBlock Core module
   The RAK3372 is a module built with the [RAK3172 WisDuo Stamp module](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Overview) on a WisBlock Core-compatible PCB.
- RAK5005-O Base Board
   The RAK5005-O is a WisBlock Base Board that provides a power supply, battery connector, solar panel charging connector, one IO-Slot, and four small extension slots to use WisBlock modules with the evaluation board. You can find detailed information in the [RAK5005-O Documentation](/Product-Categories/WisBlock/RAK5005-O/Overview).

The USB serial communication is exposed on the USB connector or the RAK5005-O base board. The default parameters of the UART2 communication are **115200 / 8-N-1**. Firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3172-E Module Datasheet](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Datasheet).

### Links to Quick Start Guide

For AT commands example usage, you can check these sections of the quick start guide:

- [TTN OTAA Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK3172-E OTAA activation.
- [TTN ABP Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK3172-E ABP activation.
- [Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK3172-E OTAA activation.
- [Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK3172-E ABP activation.
- [LoRa P2P](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#lora-p2p-mode) - Point to point communication between two RAK3172-E modules.


## AT Commands List

There are two AT Commands set for RAK3172-E depending on the firmware uploaded on the device.

1. <a href="/RUI3/Serial-Operating-Modes/AT-Command-Manual" target="_blank">RUI3 AT Commands</a>

:::tip 📝 NOTE:
In addition, aside on UART2 that is connected to USB-UART converter, AT commands can also be interfaced via **TX1/RX1** on the WisBlock Base board. It is not configured to accept AT command by default. To configure TX1/RX1 interfaces, refer to [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::

2. <a href="/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Deprecated-AT-Command" target="_blank">AT Commands (DEPRECATED) - FW version 1.0.4 and below</a>

:::warning ⚠️ WARNING
- There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.
- If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::
