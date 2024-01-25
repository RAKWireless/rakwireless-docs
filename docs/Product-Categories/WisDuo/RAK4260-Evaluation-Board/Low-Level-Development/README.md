---
rak_desc: Aside from the default RAK FW on the RAK4260 Evaluation Board, you can create custom FW using RUI (RAKwireless Unified Interface) or the actual SDK from the manufacturer of the microcontroller that is used inside the module.
rak_img: /assets/images/wisduo/rak4260-evaluation-board/RAK4260-Evaluation.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
  - RAK4260 Evaluation Board
  - wisduo
---

# RAK4260 Evaluation Board Low Level Development

## Overview

### Introduction

Using Low Level Development, you can develop your own firmware that runs on RAK4260. RAK offers this alternative for advanced users who need to have deeper integration of their solutions with this board.

## How to Implement your App on the RAK4260 Evaluation Board

### Schematic

One of the essential aspects that allow you to develop your own firmware is the hardware schematics. This allows you to understand the connections between the inner MCU and the LoRa transceiver.


::: tip 📝 NOTE
The RAK4260 Evaluation Board covers only the high-frequency LoRaWAN bands (864&nbsp;MHz to 923&nbsp;MHz).
:::

Check the [LoRaWAN frequencies by country](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html).

### Microchip LoRaWAN Stack (MLS)

Reading Microchip LoRaWAN Stack [API Reference Manual](http://ww1.microchip.com/downloads/en/DeviceDoc/SAM-R34-R35-Microchip-LoRaWAN-Stack-Software-API-Reference-Manual-DS70005382A.pdf) is recommended.


### RAK4260 Development Platform

Before compiling a project for the RAK4260 Evaluation Board, it is necessary to install Microchip Studio integrated development platform (IDP).

* [Microchip Studio](https://www.microchip.com/mplab/microchip-studio)

1. Download and install the Microchip Studio web installer.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_studio.png"
  width="80%"
  caption="Microchip Studio web installer"
/>

2. Agree to the license terms and conditions.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/agree.png"
  width="40%"
  caption="Microchip Studio license"
/>

3. In Select Architecture, choose "SAM".

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/sam_atmel_studio.png"
  width="40%"
  caption="Microchip Studio Architecture"
/>

4. Don't select "Atmel Software Framework and Examples Project" yet. Do it later.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/asf_dont.png"
  width="40%"
  caption="ASF skip install"
/>

5. Launch Microchip Studio then select **Tools** -> **Extensions and Updates**.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_extensions.png"
  width="100%"
  caption="Microchip Studio Extensions and Updates"
/>

6. In the Extensions and Updates window, click on "**Online**" and then search for "**atmel software framework**".

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/asf.png"
  width="100%"
  caption="ASF install"
/>

7. Select "**Atmel Software Framework**" and click on the "**Download**" button to install it.

8. To finish the installation, launch Microchip Studio then go to **Tools** -> **Device Pack Manager**. Search for "**SAMR34**" and install "**SAMR34_DFP**" pack.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/samr34_pack.png"
  width="100%"
  caption="SAMR34 pack install"
/>

### Build RAK4260 LoRaNode Demo Project

RAK has already configured a demo firmware for RAK4260 based on Microchip LoRaWAN Stack (MLS) that can be downloaded freely for testing purposes in this Github Repository:

* [RAK4260 LoRaNode Demo](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

The Microchip Studio LoRaWAN examples are based on [SAMR34 Xplained Pro](https://www.microchip.com/DevelopmentTools/ProductDetails/dm320111), but RAK260 did not adopt the same GPIO pinout. If you plan to develop a new LoRaWAN application, refer to the RAK4260 GPIO pins defined in the [**samr34_xplained_pro.h**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/ASF/sam0/boards/samr34_xplained_pro/samr34_xplained_pro.h) file.

:::tip 📝 NOTE
This sample firmware is solely for testing purposes. If you want to use and deploy your own LoRaWAN application, you need to develop a customized firmware based on Microchip LoRaWAN Stack (MLS).
:::

1. Clone the [RAK4260 GitHub repository](https://github.com/RAKWireless/RAK4260-LoRaNode-demo).

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/github-repo.png"
  width="100%"
  caption="RAK4260 GitHub Repository"
/>

2. Open and configure the RAK4260-LoRaNode-demo solution.

Go to the cloned directory folder:
**<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1**. Then double click on file "**APPS_ENDDEVICE_DEMO1.atsln**" to open Solution on Microchip Studio.

3. Compile RAK4260-LoRaNode-demo solution. In Microchip Studio, select **Build** -> **Build Solution**.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/build-demo.png"
  width="100%"
  caption="Build RAK4260-LoRaNode-demo solution"
/>

### Flash the Firmware Using DAPLink and RAKDAP1

To flash a new firmware, use the RAKDAP1, an SWD adapter. Refer to Figure 10 as a reference to connect RAKDAP1 and RAK4600 Evaluation Board.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/interfacing/rak4260-evb-connection.svg"
  width="60%"
  caption="RAK4260 Evaluation Board connected to RAKDAP1"
/>

1. Install the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool).

RAKDAP1 uses the pyOCD package. pyOCD is an open-source Python package for programming and debugging ARM Cortex-M microcontrollers using multiple supported types of USB debug probes.

2. Check Support Package installation for RAK4260.
```
pyocd list -t -n atsaml21j18a
```
3. Flash the hex file.

As an example, flash the RAK4260-LoRaNode demo project. The hex file of the RAK4260-LoRaNode-demo project is located in a folder, depending on whether you select to compile the **Debug** or **Release** version of the Microchip Studio project.

- **<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1\Release**
- **<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1\Debug**.


<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_studio_config.png"
  width="100%"
  caption="Microchip Studio Solution Configurations"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_hex.png"
  width="90%"
  caption="RAK4260 hex file"
/>

```
pyocd flash -t atsaml21j18a APPS_ENDDEVICE_DEMO1.hex
```

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/pyocd_flash.png"
  width="100%"
  caption="Successful pyOCD flash"
/>
