---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/stm32cube-programmer-guide.jpg
rak_desc: This document is the guide on using STM32CubeProgrammer on RAK Modules.  
tags:
  - Tutorial
  - WisDuo
  - RAK3172-SiP
  - RAK3172
header:
  title: STM32CubeProgrammer Guide for RAK Modules
  caption: by <b>Carl Erick Rowan</b>
  img: /assets/images/knowledge-hub/banners/rui3.jpg
posted: 4/18/2020 8:30 AM
---

# STM32CubeProgrammer Guide for RAK Modules

## Overview

This document helps you update the firmware of your RAK modules based on STM32 microcontrollers using STM32CubeProgrammer. Download the [STM32CubeProgrammer software](https://www.st.com/en/development-tools/stm32cubeprog.html#st-get-software) and install the appropriate installer based on your Operating System.

By default, RAK modules have RAK Bootloader. To update your device, you will only need the `.bin` file to be uploaded via RAK DFU Tool or WisToolBox. However, aside from the `.bin` firmware file, RAK also provides the `.hex` file, which contains both the RAK bootloader and the application code. This STM32CubeProgrammer guide will use that hex file provided on the modules.

## Contents

These are the two ways to use the STM32CubeProgammer:

* [Using the STM32 UART Bootloader](/Knowledge-Hub/Learn/STM32Cube-Programmer-Guide/#using-the-stm32-uart-bootloadern)
* [Using ST-LINK Debugger/Programmer Tool](/Knowledge-Hub/Learn/STM32Cube-Programmer-Guide/#using-st-link-debugger-programmer-tool)

:::tip 📝 NOTE
If you have no ST-LINK hardware tool, you can only use the STM32's built-in UART bootloader since you will only need a UART connection (no external tool required).
:::

### Using the STM32 UART Bootloader

1. Your RAK module must be connected to the PC via a USB-UART converter (VCC, GND, TX, and RX). It must be in STM32 UART Bootloader mode as well. To do this, you have to connect the **BOOT pin** of the module to VCC (3.3&nbsp;V) then reset (momentary pull down of reset pin) the module. You can also power up the module while **BOOT pin** already connected to VCC so you will not need to reset. Take note that after a successful upload, you have to remove the **BOOT pin** connection to VCC.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/boot_pin.png"
  width="80%"
  caption="RAK3172 Boot Pin to VCC"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/rak3172-sip.png"
  width="80%"
  caption="RAK3172-SiP Boot Pin to VCC"
/>

2. Open the STM32CubeProgrammer software.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stm32cubeprogrammer.png"
  width="100%"
  caption="STM32CubeProgrammer"
/>

3. Select **UART** on the tool selection.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/tool_select.png"
  width="100%"
  caption="Select UART"
/>

4. With the RAK module connected to the PC, select the correct assigned port (COM19 in this guide), then click **Connect**. If a wrong port is selected, the connection will fail.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/port_select.png"
  width="100%"
  caption="Select COM port"
/>

5. You should see that the device and its memory are read by STM32CubeProgrammer.

:::tip 📝 NOTE
- If the module is not detected by the STM32CubeProgrammer, double-check if the BOOT pin is configured properly. 
- If you are using an external USB-UART converter board, check the VCC, GND, UART_TX, and UART_RX pin connections. 
- If you are using jumper wires, you can manually check the continuity using a multimeter.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/connection.png"
  width="100%"
  caption="Successful Device Connection"
/>

6. After a successful connection, you have to open the firmware file you need to upload. This is usually a `.hex` file that contains both the RAK Bootloader and the latest application code. You have to check the specific RAK module documentation for the correct hex file.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/open_file_button.png"
  width="100%"
  caption="Opening the firmware file to upload"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/open_file.png"
  width="100%"
  caption="Selecting the correct .hex file"
/>

7. Click **Download** to start uploading the firmware file. If all is successful, you should see 100%. At this point, you can now remove the connection of **BOOT pin** to VCC and restart the module to run the updated application code.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/download.png"
  width="100%"
  caption="Successful firmware upload"
/>

### Using ST-LINK Debugger/Programmer Tool

1. You need to connect the ST-LINK tool to your RAK module. The RAK module must have external power, and SWD pins (VDD, GND, SWDIO, and SWCLK) must be connected to the ST-LINK. The ST-LINK will detect the voltage level of the supplied power to the RAK module. It must be connected to a PC via USB.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/st_link.png"
  width="60%"
  caption="STLINK V2 and SWD pinout label"
/>

2. Open the STM32CubeProgrammer software.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stm32cubeprogrammer.png"
  width="100%"
  caption="STM32CubeProgrammer"
/>

3. Select **ST-LINK** on the tool selection. 

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_selection.png"
  width="100%"
  caption="Select ST-LINK"
/>

4. If the ST-LINK is not detected by the PC, you need to click refresh. Then you can now click **Connect** button.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_refresh.png"
  width="100%"
  caption="Refresh button to detect ST-LINK"
/>

5. With a successful connection, you should see that the device and its memory content are read by STM32CubeProgrammer.

:::tip 📝 NOTE
- If the module is not detected by the STM32CubeProgrammer, double check if the module has the right external power source.
- If you are using jumper wires to connect the needed SWD pins, you can manually check the continuity using a multimeter.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_connect.png"
  width="100%"
  caption="Successful device connection"
/>

6. You also have the option to perform a full chip erase using ST-LINK if you need your RAK module to be as fresh as a newly purchased module.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_erasebutton.png"
  width="100%"
  caption="Full chip erase"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_fullerase.png"
  width="100%"
  caption="Full chip erase"
/>

7. After successful mass erase, you have to open the firmware file you need to upload. This is usually a `.hex` file that contains both the RAK Bootloader and the latest application code. You have to check the specific RAK module documentation for the correct hex file.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_openfile.png"
  width="100%"
  caption="Opening the firmware file to upload"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_binselection.png"
  width="100%"
  caption="Selecting the correct .hex file"
/>

8. Click **Download** to start uploading the firmware file. 

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_downloadbutton.png"
  width="100%"
  caption="Upload the firmware using Download button"
/>

9. If all is successful, you should see 100%. At this point, you can now remove the connection of the module to the ST-LINK and run your device normally.

<rk-img
  src="/assets/images/knowledge-hub/learn/stm32cubeprogrammer/stlink_success.png"
  width="100%"
  caption="Successful Firmware Upload"
/>