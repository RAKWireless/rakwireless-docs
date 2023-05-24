---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3172. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak3172-module/overview/RAK3172-Module.png
prev: ../Quickstart/
next: ../Low-Level-Development/
tags:
    - wisduo
    - AT Command Manual
    - RAK3172
---

# RAK3172 Module AT Command Manual

## Introduction

RAK3172 WisDuo module is based on STM32WLE5CC chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, the RAK3172 is implemented with an easy-to-use UART communication interface where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can also use any microcontroller with a UART interface to control the RAK3172 module.

The UART serial communication is exposed on the UART2 (also identified as **LPUART1 port**), through **Pin 2 (TX2)** and **Pin 1 (RX2)**. The default parameters of the UART2 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3172 Module Datasheet](/Product-Categories/WisDuo/RAK3172-Module/Datasheet/#rak3172-wisduo-lpwan-module-datasheet).

### Links to Quick Start Guide

For AT commands example usage, you can check these sections of the quick start guide:

- [RAK3172 TTN OTAA Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK3172 OTAA activation.
- [RAK3172 TTN ABP Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK3172 ABP activation.
- [RAK3172 Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK3172 OTAA activation.
- [RAK3172 Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK3172 ABP activation.
- [LoRa P2P](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#lora-p2p-mode) - Point to point communication between two RAK3172 modules.

## AT Commands List

There are two AT Commands set for RAK3172 depending on the firmware uploaded on the device.

1. <a href="/RUI3/Serial-Operating-Modes/AT-Command-Manual" target="_blank">RUI3 AT Commands</a>

:::tip 📝 NOTE:
In addition, aside on UART2, AT commands can also be interfaced via UART1 **Pin 4 (TX1)** and **Pin 5 (RX1)**. You can configure the settings of UART1 and UART2 interfaces via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::

2. <a href="/Product-Categories/WisDuo/RAK3172-Module/Deprecated-AT-Command" target="_blank">AT Commands (DEPRECATED) - FW version 1.0.4 and below</a>

:::warning ⚠️ WARNING
- There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.
- If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::
