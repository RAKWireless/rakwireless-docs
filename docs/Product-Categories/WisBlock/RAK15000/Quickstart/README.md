---
tags:
  - quickstart
  - wisblock
  - RAK15000
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK15000 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK15000 WisBlock EEPROM Module](https://store.rakwireless.com/collections/wisblock-storage/products/wisblock-eeprom-module-rak15000)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar Panel (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which makes it easy for you to save big data on such applications that you need to access frequently. The RAK15000 EEPROM Memory module has 1,000,000 write cycles, so it can be used to store constantly changing data.

For more information about RAK15000, please refer to the [Datasheet](../Datasheet/).

The RAK15000 module can be connected to any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, B, C, or D**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak15000_mounting.png"
  width="70%"
  caption="RAK15000 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="Sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK15000 uses I2C communication lines, and it can cause possible conflict especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK15000 EEPROM has an I2C-Compatible (Two-Wire) Serial Interface. Furthermore, the EEPROM is organized in so-called pages. One page holds 256-byte and there are 1024 pages. Having insight into how the memory cells are organized, is important for write and erase operations.

#### Initial Test of the RAK15000 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** and **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK15000](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK15000_EEPROM_AT24C02) in github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_rak15000.png"
  width="100%"
  caption="Opening RAK15000 example code for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_rak15000.png"
  width="100%"
  caption="Opening RAK15000 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [Adafruit FRAM_I2C](https://github.com/adafruit/Adafruit_FRAM_I2C) library by clicking the link highlighted in yellow, as shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak15000_lib.png"
  width="100%"
  caption="Opening Adafruit EEPROM library"
/>
To finish installation, click on **Install** button highlighted in yellow, as shown in **Figure 11**.
<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/adafruit_eeprom.png"
  width="100%"
  caption="Installing the Adafruit EEPROM library"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK15000 example code"
/>

The sketch writes a value to a random address. Then it checks the read value and compares it with the written value.


<!-- 
5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see if it read the content, wrote new data, and erased the data from the Flash module. If you see the logs, as shown in **Figure 14**, then your RAK15000 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/flash_logs.png"
  width="70%"
  caption="RAK15000 Read, Write, Erase data "
/>
-->
