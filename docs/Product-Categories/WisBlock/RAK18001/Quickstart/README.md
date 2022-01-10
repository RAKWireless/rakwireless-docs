---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18001/overview/RAK18001_front.png
tags:
  - quickstart
  - wisblock
  - RAK18001
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK18001 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK18001 Buzzer module and how to program with it.
-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK18001 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18001 WisBlock Buzzer module](https://store.rakwireless.com/products/wisblock-buzzer-module-rak18001)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which makes it easy to build up an audible high-pitched sound that can be used in various alarm and notifier applications. The RAK18001 is a WisBlock module that uses a [MLT-5020](https://lcsc.com/product-detail/Buzzers_Jiangsu-Huaneng-Elec-MLT-5020_C94598.html) as its built-in buzzer.

For more information about RAK18001, refer to the [Datasheet](../Datasheet/).

RAK18001 module can be connected to **Slot A, B, C, or D** of WisBlock Base to communicate with the WisBlock Core. It will work on any of those slots but you need to consider the specific pin assigned on that slot to control the RAK18001. The table below shows the default IO pins used:

| SLOT A | SLOT B | SLOT C | SLOT D |
| ------ | ------ | ------ | ------ |
| IO1    | IO2    | IO3    | IO5    |

Also, always secure the connection of the WisBlock module by using the compatible screws, as shown in **Figure 1**.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak18001_mounting.png"
  width="70%"
  caption="RAK18001 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK18001 WisBlock Buzzer Module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. The sound and loudness can be controlled through PWM (Pulse-Width Modulation) signal from a WisBlock Core.

For RAK18001, the default accessible IO pin assignments are defined as follows which are used on different connection slots:

- `WB_IO1` for IO1 on **SLOT A**
- `WB_IO2` for IO2 on **SLOT B**
- `WB_IO3` for IO3 on **SLOT C**
- `WB_IO5` for IO5 on **SLOT D**

However, you can change the IO pin assignments by switching the placement of the built-in resistor on the RAK18001. For more detailed explanation, refer to the [Datasheet](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK18001/Datasheet/#hardware).

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK18001 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK18001/Quickstart/#rak18001-in-rak4631-wisblock-core-guide)
- [RAK18001 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK18001/Quickstart/#rak18001-in-rak11200-wisblock-core-guide)
- [RAK18001 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK18001/Quickstart/#rak18001-in-rak11310-wisblock-core-guide)

#### RAK18001 in RAK4631 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK18001](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/sensors/RAK18001_Buzzer) in Github will work on RAK4631 WisBlock Core. You can also open the example codes depending on your WisBlock Core, as shown in **Figure 7**. 

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak4631-examplecode.png"
  width="100%"
  caption="Opening RAK18001 example code for RAK4631 WisBlock Core"
/>

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK18001 example code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to hear the RAK18001 WisBlock Buzzer module plays a melody. The output sounds and pitch level can be customized on the example code to the point that it is even possible to play some various melody.

#### RAK18001 in RAK11200 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK18001](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/sensors/RAK18001_Buzzer) in Github will work on RAK11200 WisBlock Core. You can also open the example codes depending on your WisBlock Core, as shown in **Figure 11**. 

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11200-examplecode.png"
  width="100%"
  caption="Opening RAK18001 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
RAK11200 requires **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11200-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading the RAK18001 example code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to hear the RAK18001 WisBlock Buzzer module plays a melody. The output sounds and pitch level can be customized on the example code to the point that it is even possible to play some various melody.

#### RAK18001 in RAK11310 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK18001](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/sensors/RAK18001_Buzzer) in Github will work on RAK11310 WisBlock Core. You can also open the example codes depending on your WisBlock Core, as shown in **Figure 15**. 

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11310-examplecode.png"
  width="100%"
  caption="Opening RAK18001 example code for RAK11310 WisBlock Core"
/>

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 16** and **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11310-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak18001/quickstart/rak11310-upload.png"
  width="100%"
  caption="Uploading the RAK18001 example code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to hear the RAK18001 WisBlock Buzzer module plays a melody. The output sounds and pitch level can be customized on the example code to the point that it is even possible to play some various melody.




