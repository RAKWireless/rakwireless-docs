---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3272S Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3272S  Breakout Board
rak_img: /assets/images/wisduo/rak3272s-breakout-board/overview/RAK3272S-Breakout.png

---

# RAK3272S Breakout Board AT Command Manual

## Introduction

RAK3272S  Breakout Board is based on STM32WLE5CC chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, RAK3272S is implemented with an easy-to-use UART communication interface, where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can also use any microcontroller with a UART interface to control the RAK3272S  board.

The UART serial communication is exposed on the **UART2 (also identified as LPUART1 port)**, through **Pin 7 (TX2)** and **Pin 8 (RX2)**. The default parameters of the UART2 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3272S  Breakout Board Datasheet](/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Datasheet/#rak3272s-breakout-board-datasheet).

## AT Commands List

There are two AT Commands set for RAK3272S depending on the firmware uploaded on the device.

1. <a href="/RUI3/Serial-Operating-Modes/AT-Command-Manual" target="_blank">RUI3 AT Commands</a>

:::tip 📝 NOTE:
In addition, aside on UART2 pins, AT commands can also be interfaced via UART1_TX **Pin 5** and UART1_RX **Pin 6** on J5 Header. You can configure the settings of UART1 interfaces via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::

2. [AT Commands (DEPRECATED) - FW version 1.0.4 and below.](/Product-Categories/WisDuo/RAK3272S-Breakout-Board/AT-Command-Manual/#at-command-list-of-old-fw-version-1-0-4-and-below-deprecated)

:::warning ⚠️ WARNING
- There are RAK3172 devices loaded with old firmware versions which are not based on RUI3 (RAKwireless Unified Interface V3). These devices have v1.0.4 and below.
- If the host microcontroller code is based on this old firmware, we have a [RAK3172 AT Command migration guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/AT-Migration-Guide/) that explain in detail the few differences between the two AT commands set.
:::
