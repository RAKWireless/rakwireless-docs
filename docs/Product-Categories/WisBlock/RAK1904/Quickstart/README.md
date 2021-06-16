---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK1904. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK1904
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock Sensor RAK1904 3-axis Acceleration Sensor and how to program with it.

The information obtained from the 3-axis Acceleration Sensor will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK1904 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK1904](https://store.rakwireless.com/collections/wisblock-sensor/products/rak1904-lis3dh-3-axis-acceleration-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with an acceleration sensor. 

For more information about RAK1904, refer to the [Datasheet](../Datasheet/).

The RAK1904 module gives us information about:

- 6D/4D orientation detection
- Free-fall detection
- Motion detection

RAK1904 module can be connected on any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A to D**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak1904_assembly.png"
  width="70%"
  caption="RAK1904 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/f2_rak1904_mounting.png"
  width="70%"
  caption="RAK1904 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1904 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK1904 is a acceleration sensor board that contains LIS3DH chip. The LIS3DH  is an ultra-low-power high-performance three-axis linear accelerometer belonging to the “nano” family, with digital I2C/SPI serial interface standard output. 

#### Initial Test of the RAK1904 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** and **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1904](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1904_Accelerate_LIS3DH) in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 8** and **Figure 9**. 

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK1904 example code for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK1904 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [SparkFun LIS3DH](https://github.com/sparkfun/SparkFun_LIS3DH_Arduino_Library) library by clicking the yellow highlighted link, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/sparkfun_library.png"
  width="100%"
  caption="Accessing the library used for RAK1904 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/sparkfun_installed.png"
  width="100%"
  caption="Installing the compatible library for RAK1904 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1904 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 14**, then your RAK1904 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/acceleration_logs.png"
  width="100%"
  caption="RAK1904 acceleration sensor data logs"
/>


#### Usage of RAK1904 in GPS Tracker Over LoRaWAN Example

For WisBlock Core RAK4630, it has an example for [GPS Tracker over LoRaWAN](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/GPS_Tracker) with RAK1904 acceleration sensor board. 
   


