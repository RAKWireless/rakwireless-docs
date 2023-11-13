---
rak_desc: A step-by-step guide in installing and upgrading the latest firmware of your RAK7201V2. With this guide, you can ensure that your LoRaWAN Module is always updated, and you can also use this to upload your custom firmware.
rak_img: /assets/images/wisnode/rak7201-v2/datasheet/RAK7201V2.png
prev: ../Datasheet/
next: false
tags:
  - RAK7201V2
  - Firmware Upgrade
  - wisnode
---

# RAK7201V2 Firmware Upgrade Guide

For the RAK7201V2 to work properly, the latest firmware must be configured.

## Overview

To upgrade the firmware of the WisNode Button 4K the following will be needed:

- [RAK7201V2 WisNode Button 4K](https://store.rakwireless.com/products/wisnode-button-4k-rak7201v2?utm_source=RAK7201V2WisNodeButton4K&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK DFU (Device Firmware Upgrade)](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip)
- Micro USB cable
- [Latest firmware](https://downloads.rakwireless.com/LoRa/RAK7201V2/Firmware/RAK7201V2_Latest_Firmware.zip)

## Upgrade Process

Execute the following steps for the upgrade process.

::: tip 📝 NOTE
The OS used for this guide is Windows.
:::

1. Download and unzip the RAK DFU Tool.
2. Download and unzip the Latest firmware. The unzipped file should be in `.bin` format.
3. Connect RAK7201V2 to the PC with the micro USB cable.
4. Press and hold the Number 1 button of the device to enter configuration mode. All four (4) LEDs will light up in blue.
5. Open the DFU Tool.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/firmware-upgrade-guide/1.rak-dfu.png"
    width="75%"
    caption="RAK DFU tool overview"
/>

6. Choose the correct serial port and baud rate from the drop-down menus, as shown in Figure 1. The default baud rate of the device is 115200.

::: tip 📝 NOTE
If you have multiple serial devices connected to your PC, you can check the Serial Port from the Device Manager.
:::

<rk-img
    src="/assets/images/wisnode/rak7201-v2/firmware-upgrade-guide/2.port-number.png"
    width="40%"
    caption="Checking the serial port number"
/>

7. Press the **Select Port** Button in the DFU.
8. Select the firmware by pressing the **Select Firmware** button, and navigate to the downloaded `.bin` file.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/firmware-upgrade-guide/3.firmware.png"
    width="75%"
    caption="Selecting the firmware"
/>

9. Press the **Upgrade** button.

The LEDs of RAK7201V2 will go off. An upgrade process bar can be seen under the **Upgrade** button. It will take up to two minutes.

:::tip ⚠️ WARNING
Do not cancel the process or disconnect the button.
:::

<rk-img
    src="/assets/images/wisnode/rak7201-v2/firmware-upgrade-guide/4.upgrade-process.png"
    width="75%"
    caption="Upgrade process"
/>

10. Upon successful upgrade, the device will automatically run the new firmware, restart, and join the network. At this time, the four blue LED lights of the device will flash clockwise 1-2-4-3, indicating the normal operation of the new firmware.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/firmware-upgrade-guide/5.success.png"
    width="75%"
    caption="Successful firmware upgrade"
/>

