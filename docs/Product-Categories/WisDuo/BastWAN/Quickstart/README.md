---
prev: ../Overview/
next: false
tags:
  - BastWAN
---

# Quick Start Guide

## Introduction

RAK3244 BastWAN puts the RAK4260 module into a Feather compatible format. Developed by [ElectronicCats](http://www.electroniccats.com/) we offer this amazing board in our store. The RAK4260 LPWAN Module used on the RAK3244 BastWAN is based on Microchip’s SAM R34 (R34J18B ). It is a SiP device integrating a 32-bit ARM Cortex -M0+ MCU with a LoRa Transceiver. It offers full coding support with the Arduino™ IDE.

For more information about the board, check the [ElectronicCats RAK3244 BastWAN repository](https://github.com/ElectronicCats/Bast-WAN).

## Hardware Setup

The BastWan is a Feather breakout board with everything you need to get started. 

::: warning ⚠️ WARNING
Before powering the Feather Board, make sure you have installed the included LoRa Antenna. Not doing so might damage the board.
:::

## Software Setup

Here, you will be introduced on how to use it with Arduino™ IDE. 

<!-- The board is like below.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/bastwan.png"
  width="40%"
  caption="BastWAN Board"
/> -->

### Burning a bootloader

RAK3244 BastWAN board comes with pre-flashed bootloader. But if it is necessary to replace the bootloader you can burn the bootloader-bast-wan-v3.4.0.bin with Jlink like below:

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/download.png"
  width="60%"
  caption="Burning the bootloader"
/>

## Arduino installation

### BSP installation

1. After download bootloader, install the BSP library. To add board support for our products, start Arduino and open the Preferences window by navigating through (**File > Preferences**). Now copy and paste the following URL into the '**Additional Boards Manager URLs**' input field: `https://electroniccats.github.io/Arduino_Boards_Index/package_electroniccats_index.json`. Then, press the "**OK**" button.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/additional-board-support.png"
  width="60%"
  caption="Arduino additional board support"
/>

:::tip 📝 NOTE:
If there is already an URL from another manufacturer in that field, click the button at the right end of the field. This will open an editing window allowing you to paste the above URL onto a new line as demonstrated in the image below.
:::

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/support-board-add-url.png"
  width="60%"
  caption="Alternative method for additional board support"
/>

4. Open the "**Boards Manager**" by navigating through **Tools > Board > Boards Manager**.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/boards-manager.png"
  width="60%"
  caption="Arduino boards manager"
/>

5. Look for **Electronic Cats SAMD Boards** in the Boards Managerr search bar. Click in install for **Electronic Cats SAMD Boards**, jus wait to finish to install and only close the window.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/electronic-cats-samd-boards.png"
  width="60%"
  caption="Installing Electronic Cats SAMD Boards"
/>

6. RAK3244 BastWAN should now be on the list of Boards by navigating through **Tools > Board > Electronic Cats SAMD(L)(C) Core for Arduino** as shown in the image below:

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/bastwan-in-boards.png"
  width="85%"
  caption="RAK3244 BastWAN available in Boards list"
/>


### LoRaWAN library installation

RAK3244 BastWAN board uses the Beelan-LoRaWAN library which supports LoRaWAN Class A and Class C implementations operating in EU-868, AS-923, US-915 and AU-915 bands. Visit [here](https://github.com/BeelanMX/Beelan-LoRaWAN) for more information.

## First test

For a quick test we provide source code for a LoRaWan Class A node with OTAA support

- [Example code](https://github.com/RAKWireless/Evaluation_Boards/tree/master/RAK4260/Arduino/send-class-A-OTAA)
