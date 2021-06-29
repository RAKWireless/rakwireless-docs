---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK12003. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK12003
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK12003 Infrared Temperature Sensor and how to program with it.

The information obtained from the infrared temperature sensor will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK12003 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12003](https://store.rakwireless.com/collections/wisblock-sensor/products/infrared-temperature-sensor-rak12003)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with an infrared temperature sensor. 

For more information about RAK12003, refer to the [Datasheet](../Datasheet/).

The RAK12003 module gives us information about:

- Object temperatures between -20&nbsp;°C and 100&nbsp;°C
- Accuracy ±0.2&nbsp;°C within the narrow object temperature range from 35&nbsp;°C to 42&nbsp;°C (medical applications)

RAK12003 module can be connected on any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A to D**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak12003_assembly.png"
  width="70%"
  caption="RAK12003 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak12003_mounting.png"
  width="70%"
  caption="RAK12003 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12003 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK12003 WisBlock Infrared Temperature Sensor is part of the RAKwireless WisBlock Series. It can be used for an accurate contactless thermal measurement for applications such as General purpose industry, temperature control of moving and hard to reach parts, body temperature measurement, non-contact thermometer for mobile and IoT application, with digital I2C/SPI serial interface standard output. 

#### Initial Test of the RAK12003 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** and **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK12003](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12003_FIR_MLX90632) in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 8** and **Figure 9**. 

**Sample code for RAK4631**

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK12003 example code for RAK4631 WisBlock Core"
/>

**Sample code for RAK11200**

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK12003 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [SparkFun MLX90632](https://github.com/sparkfun/SparkFun_MLX90632_Arduino_Library) library by clicking the yellow highlighted link, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/sparkfun_done.png"
  width="100%"
  caption="Accessing the library used for RAK12003 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/sparkfun_lib.png"
  width="100%"
  caption="Installing the compatible library for RAK12003 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK12003 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 14**, then your RAK12003 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak12003/quickstart/rak12003_logs.png"
  width="100%"
  caption="RAK12003 sensor data logs"
/>




