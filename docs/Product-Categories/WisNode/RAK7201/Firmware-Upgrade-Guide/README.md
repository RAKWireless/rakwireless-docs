---
rak_desc: A step-by-step guide in installing and upgrading the latest firmware of your TAK7201. With this guide, you can ensure that your LoRaWAN Module is always updated, and you can also use this to upload your custom firmware.
rak_img: /assets/images/wisnode/rak7201/datasheet/1.png
prev: ../AT-Command-Manual/
next: false
tags:
  - RAK7201
  - Firmware Upgrade
  - wisnode
---

# Firmware Upgrade Guide

For the RAK7201 to work properly, the latest firmware must be installed.

## Overview

To upgrade the firmware of the WisNode Button 4K the following will be needed:

- RAK7201 WisNode Button 4K
- RAK DFU (Device Firmware Upgrade) Tool. Download it [here](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip).
- Micro USB cable
- The latest firmware. Download it [here](https://downloads.rakwireless.com/LoRa/RAK7201/Firmware/RAK7201_Latest_Firmware.zip).

## Upgrade Process

In this guide the upgrade process will be shown step by step.

::: tip 📝 NOTE:
The OS used for this guide is Windows.
:::

1. Download and unzip the RAK DFU Tool.

2. Download and unzip the Latest firmware. The unzipped file should be in \*.bin format.

3. Connect the RAK WisNode Button 4K to the PC with the micro USB cable.

4. Press and hold the Number 1 button of the WisNode Button 4K device to enter configuration mode. All 4 LEDs will light up in blue.

5. Open the DFU Tool

<rk-img
  src="/assets/images/wisnode/rak7201/firmware-upgrade-guide/1.png"
  width="70%"
  caption="RAK DFY tool overview"
/>

Choose the correct serial port and baud rate from the drop-down menus, as shown in Figure 1. The default baud rate of the device is 115200.

::: tip 📝 NOTE:
If you have multiple serial devices connected to your PC you can check the Serial Port from the Device Manager
:::

<rk-img
  src="/assets/images/wisnode/rak7201/firmware-upgrade-guide/2.png"
  width="40%"
  caption="Checking the Serial Port number"
/>

Press **Select Port** Button.

6. Select the firmware by pressing the **Select Firmware** button, and navigate to the downloaded \*.bin file.

<rk-img
  src="/assets/images/wisnode/rak7201/firmware-upgrade-guide/3.png"
  width="70%"
  caption="Selecting the firmware"
/>

7. Press the **Upgrade** button.

The LEDs of the RAK WisNode Button 4K will go off. An upgrade process bar can be seen under the Upgrade button. It will take up to two minutes. Do not cancel the process or disconnect the button.

<rk-img
  src="/assets/images/wisnode/rak7201/firmware-upgrade-guide/4.png"
  width="70%"
  caption="The upgrade process"
/>

8. Upon successful upgrade, the device will automatically run the new firmware, restart and join the network. At this time, the four blue LED lights of the device will flash clockwise 1-2-4-3, indicating the normal operation of the new firmware.

<rk-img
  src="/assets/images/wisnode/rak7201/firmware-upgrade-guide/5.png"
  width="70%"
  caption="Successful firmware upgrade"
/>
