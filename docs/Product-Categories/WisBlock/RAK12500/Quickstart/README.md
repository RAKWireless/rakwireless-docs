---
tags:
  - quickstart
  - wisblock
  - RAK12500
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK12500 GNSS Location Module and how to program with it.

The information obtained from the WisBlock RAK12500 GNSS Location Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK12500 GNSS Location WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12500](https://store.rakwireless.com/collections/wisblock-sensor/products/wisblock-gnss-location-module-rak12500)
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

The RAK12500 uses the u-blox ZOE-M8Q module. It supports a wide variety of satellite data protocols such as GPS, GLONASS, QZSS, and BeiDou. This ensures the retrieval of precise location data.

For more information about RAK12500, refer to the [Datasheet](../Datasheet/).

The RAK12500 module gives us information about:

- GPS coordinate (latitude, longitude, altitude)
- Ground speed
- Direction (heading)
- SIV (Satellite-in-View)

The RAK12500 WisBlock GNSS Location Module can be mounted to the sensor slot A (UART or I2C Communication) or slot C (I2C Communication only) of the WisBlock Base Board. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_assembly.png"
  width="70%"
  caption="RAK12500 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A and C are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500-mounting.png"
  width="70%"
  caption="RAK12500 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

#### GPS Antenna

Another important part component of RAK12500 is the GPS antenna. You need to ensure that it is properly connected to have a good GPS signal.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak_12500_gps_antenna.png"
  width="35%"
  caption="GPS antenna"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12500 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK12500 is a very accurate GNSS Module that contains u-blox ZOE-M8Q chip. The ZOE-M8Q features exceptional performance, high sensitivity, and minimal acquisition time, with digital I2C/SPI serial interface standard output. 

#### Initial Test of the RAK12500 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 7** and **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK12500](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12500_GPS_ZOE-M8Q) in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 9** and **Figure 10**. 

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK12500 example code for RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK12500 example code for RAK11200 WisBlock Core"
/>

1. Once the example code is open, install the [SparkFun u-blox GNSS](https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library) library by clicking the highlighted link, as shown in **Figure 11** and **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500-code.png"
  width="100%"
  caption="Accessing the library used for RAK12500 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_library.png"
  width="100%"
  caption="Installing the compatible library for RAK12500 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_upload.png"
  width="100%"
  caption="Uploading the RAK12500 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 15**, then your RAK12500 is properly communicating to the WisBlock core.

::: tip 📝 NOTE
The GPS antenna needs to have an unobstructed view of the sky to be able to receive satellite signals. For the example to work, you should test it outside of a building.
:::

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_log.png"
  width="100%"
  caption="RAK12500 sensor data logs"
/>


   


