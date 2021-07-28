---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK1920. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak1920/overview/RAK1920_home.png
tags:
  - quickstart
  - wisblock
  - RAK1920
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK1920 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock Sensor RAK1920 WisBlock Sensor Adapter Module and how to program with it.

The information obtained from the Sensor Adapter Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK1920 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK1920](https://store.rakwireless.com/collections/wisblock-interface/products/rak1920-sensor-adapter-module)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)
- Grove PIR Motion Sensor (AS312)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK1920 is a WisBlock Interface module which extends the WisBlock system with an adapter board to connect Click Boards (MikroElektronika), QWICC (Sparkfun) based, and Grove (Seeed) based sensors to WisBlock. 

For more information about RAK1920, refer to the [Datasheet](../Datasheet/).

RAK1920 module is part of the WisBlock Interface category, which connects to the base board through the IO slot. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak1920_assembly.png"
  width="70%"
  caption="RAK1920 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules
##### Assembling

As shown in **Figure 2**, the location for IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak1920_mounting.png"
  width="70%"
  caption="RAK1920 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1920 uses UART and I2C communication lines, and it can cause possible conflict especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base.
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK1920 module is a sensor extension module, it supports several defacto-standard interfaces in the IoT market and allows customers to integrate sensors manufactured by Mikroe, SparkFun, SeeedStudio, and others. For example, the RAK1920 supports the Click Boards™ series of modules provided by Mikroe, Qwiic Connect™ sensor interface designed by SparkFun, and it supports all kinds of I2C module digital I/O, UART and ADC sensors with a Grove™ interface.


#### Initial Test of the RAK1920 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** and **Figure 7**.

**Using RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**Using RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The Basic Sample Code for RAK1920 in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 8** and **Figure 9**. For this guide we will be using [Grove PIR AS312](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1920_Grove_PIR_AS312)

**Sample code for RAK4631**

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK1920 example code for RAK4631 WisBlock Core"
/>

**Sample code for RAK11200**

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK1920 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1920 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 12**, then your RAK1920 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1920/quickstart/pir_logs.png"
  width="100%"
  caption="RAK1920 sensor data logs"
/>

**Sample code for other sensors**

- [Grove Color TCS3472](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1920_Grove_Color_TCS3472)
- [MikroBUS Temperature TMP102](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1920_MikroBUS_Temperature_TMP102)
- [QWIIC AirQuality SGP30](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1920_QWIIC_AirQuality_SGP30)


