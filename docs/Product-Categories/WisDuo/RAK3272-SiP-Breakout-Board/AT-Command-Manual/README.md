---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3272-SiP Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Breakout Board.
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3272-SiP Breakout Board
rak_img: /assets/images/wisduo/rak3272-sip-breakout-board/overview/RAK3272-SiP-Breakout.png
---

# RAK3272-SiP Breakout Board AT Command Manual

## Introduction

RAK3272-SiP Breakout Board is based on [STM32WLE5x](https://www.st.com/en/microcontrollers-microprocessors/stm32wlex.html) single-core chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, the RAK3272-SiP firmware is implemented with an easy-to-use UART communication interface, based on AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can also use any microcontroller with a UART interface to control the RAK3272-SiP  board.

The UART serial communication is exposed on the **UART2**, through **Pin 7 (UART2 TX)** and **Pin 8 (UART2 RX)** of J3 header. The default parameters of the UART2 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3272-SiP Breakout Board Datasheet](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Datasheet/).

## RUI3 AT Command List

The RAK3272-SiP Breakout Board default firmware is based on [RUI3 (RAKwireless Unified Interface V3)](/RUI3/#overview). You can access the AT command via UART2 by default.

The complete list of commands can be found in [RUI3 AT Commands Documentation.](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#content)


:::tip 📝 NOTE:
In addition, aside on UART2, AT commands can also be interfaced via UART1 in J4 header **Pin 5 (UART1_RX)** and **Pin 6 (UART1_TX)**. You can configure the settings of UART1 and UART2 interfaces via [RUI3 Serial Operating Modes](/RUI3/Serial-Operating-Modes/#rak-unified-interface-v3-rui3-serial-operating-modes).
:::