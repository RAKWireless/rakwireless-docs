---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3172-SiP. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak3172-sip/RAK3172-SiP.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3172
---

# RAK3172-SiP AT Command Manual

## Overview

RAK3172-SiP is based on the STM32WLE5 chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, the RAK3172-SiP is implemented with an easy-to-use UART communication interface where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can also use any microcontroller with a UART interface to control the RAK3172-SiP.

The UART serial communication is exposed on the UART2 (also identified as **LPUART1 port**), through **Pin 29 (TX2)** and **Pin 30 (RX2)**. The default parameters of the UART2 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3172-SiP Datasheet](/Product-Categories/WisDuo/RAK3172-SiP/Datasheet).

## RUI3 AT Command List

The RAK3172-SiP default firmware is based on [RUI3 (RAKwireless Unified Interface V3)](/RUI3/#overview). You can access the AT command via UART2 by default.

The complete list of commands can be found in [RUI3 AT Commands Documentation.](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#content)


:::tip 📝 NOTE:
In addition, aside on UART2, AT commands can also be interfaced via UART1 **Pin 17 (TX1)** and **Pin 18 (RX1)**. You can configure the settings of UART1 and UART2 interfaces via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::