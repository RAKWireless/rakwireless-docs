---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK2305. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak2305/overview/RAK2305_home.png
tags:
  - quickstart
  - wisblock
  - RAK2305
prev: ../Overview/ 
next: ../Low-Level-Development/ 
---

# RAK2305 Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step on using RAK2305 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK2305](https://store.rakwireless.com/products/rak2305-wi-fi-extension-board)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)
- USB to UART TTL adapter (to flash image)
- Jumper (to flash image)

#### Software

##### ESP-AT project

ESP-AT is a project developed by Espressif to integrate connectivity into customers’ products. It aims to reduce software development costs and allows you to create new products quickly. AT is the abbreviation for Attention. These commands come from Hayes commands that were used by the Hayes smart modems.

ESP-AT is based on ESP-IDF, the official development framework for the ESP32. On this solution, a WisBlock Core works as an Initiator and the WisBlock Wireless RAK2305 is the target. The initiator sends AT commands via UART to the target and receives AT responses back. The AT commands are processed on target one by one. Therefore, you should wait for the previous command to be executed before sending out the next one. You can develop your own AT commands based on the ESP-AT project and implement more features according to your needs. Check [Low Level Development](../Low-Level-Development/) section.

Two RAK2305 ESP-AT firmware versions are available:
- [RAK2305-Basic-WIFI-BLE-AT.bin](https://github.com/RAKWireless/WisBlock/blob/master/bootloader/RAK2305/RAK2305-Basic-WIFI-BLE-AT.bin)：The Factory bin version with WiFi and BLE AT commands. This is the default firmware uploaded to the RAK2305.
- [RAK2305-Basic-WIFI-HTTP-MQTT-AT.bin](https://github.com/RAKWireless/WisBlock/blob/master/bootloader/RAK2305/RAK2305-Basic-WIFI-HTTP-MQTT-AT.bin): With WiFi, MQTT and HTTP AT Commands. If a user wants to use MQTT and HTTP AT Commands, this firmware is needed.

## Product Configuration

### Hardware Setup

RAK2305 WisBlock WiFi Interface Module can only be connected with WisBlock Base Board through the **IO SLOT**. The **IO SLOT** is used by the RAK2305 to communicate with the WisBlock Core. Also, always secure the connection of the WisBlock module by using the compatible screws.

For more information about RAK2305, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/rak2305-assembly.png"
  width="70%"
  caption="RAK2305 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

There is only a single **IO SLOT** in the WisBlock Base Board to connect the RAK2305. As shown in Figure 2, the location of the slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/wisbloc-io-silkscreen.png"
  width="80%"
  caption="RAK2305 connection to WisBlock Base Board"
/>


::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK2305 uses UART communication lines on **IO SLOT**.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock.

##### Disassembling

1. First, remove the screws.  

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied. By applying even force under the marked area, the module can be detached from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in Figure 4, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

### Software Configuration and Examples

RAK2305 has a default firmware loaded in it that supports WiFi and BLE related AT Commands. If you need to have HTTP or MQTT functionality, you need to upload a different [firmware](https://github.com/RAKWireless/WisBlock/blob/master/bootloader/RAK2305/RAK2305-Basic-WIFI-HTTP-MQTT-AT.bin) that supports those features.

The complete list of ESP32 AT Command set can be found in [Espressif AT Command Set online documentation](https://docs.espressif.com/projects/esp-at/en/latest/AT_Command_Set/index.html).

The default baud rate of AT Command UART is 115200.

#### Initial Test of the RAK2305 WisBlock Wireless

:::warning ⚠️ WARNING    
Make sure to use the setup() function with timeout.
:::

The RAKwireless examples on github shows how to test WisBlock RAK2305 using WisBlock Core:

  * [ESP-AT Command Test](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/WiFi/AT_Command_Test).
This example waits for an AT command typed at the console. Then sends that command to RAK2305 and wait for reply.

  * [Connect to Access Point](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/WiFi/connect_ap). This example connects to a known access point and send ping to the address "8.8.8.8" every 5 seconds.

The Espressif examples:

  * [AT Command Examples from Espressif](https://docs.espressif.com/projects/esp-at/en/latest/AT_Command_Examples/index.html)

## Miscellaneous

### (Optional) Flashing a Different ESP-AT Firmware into Your Device

To flash the AT firmware, you need a USB to UART TTL adapter like the [RAKDAP1 Flash and Debug Tool](https://store.rakwireless.com/products/daplink-tool). Connect the USB adapter to RAK2305, as shown in Figure 5.

<br>

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/rak2305-rakdap1.svg"
  width="100%"
  caption="RAK2305 Firmware Upgrade"
/>

RAK2305 connection with RAKDAP1:

- USB adapter pin GND connect to RAK2305 GND
- RAK2305 IO0 pin connect to RAK2305 GND (use a jumper)
- USB adapter pin U_TX connect to RAK2305 RXD0 pin
- USB adapter pin U_RX connect to RAK2305 TXD0 pin

Before starting the firmware upgrade, you need to download [Flash Download Tools for Windows](https://www.espressif.com/en/support/download/other-tools).

1. Open the ESP Flash Download Tool and select **ChipType** and **WorkMode**, as shown in Figure 6. Then click the **OK** button.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/esp-fdt.png"
  width="100%"
  caption="ESP Flash Download Tool"
/>

2. Choose **SPIDownload** tab.
3. Click on **...** icon and choose the bin file at address 0x0. 
4. Select **DoNotChgBin** to use the default configuration. 
5. Select the **COM** port of the USB adapter and use 921600 for **BAUD**.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/esp-fdt-param.png"
  width="45%"
  caption="ESP Flash Download Tool Configuration"
/>

6. To start Flash Download, click on **START** button.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/esp-fdt-downl.png"
  width="45%"
  caption="ESP Flash download started"
/>

7. Download finished.

<rk-img
  src="/assets/images/wisblock/rak2305/quickstart/esp-fdt-finish.png"
  width="45%"
  caption="ESP Flash download tool finished"
/>


