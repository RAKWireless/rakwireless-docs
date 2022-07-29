---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12500. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12500/overview/RAK12500_home.png
tags:
  - quickstart
  - wisblock
  - RAK12500
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12500 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK12500 GNSS Location Module and how to program with it.

The information obtained from the WisBlock RAK12500 GNSS Location Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12500 GNSS Location WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12500 WisBlock GNSS Location Module](https://store.rakwireless.com/collections/wisblock-sensor/products/wisblock-gnss-location-module-rak12500)
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

RAK12500 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT A (UART / I2C Communication) or SLOT C (I2C Communication Only)**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_assembly.png"
  width="70%"
  caption="RAK12500 connection to the WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A and C are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500-mounting.png"
  width="70%"
  caption="RAK12500 connection to the WisBlock Base"
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
  width="70%"
  caption="GPS antenna"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12500 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::

After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

The RAK12500 is a very accurate GNSS Module that contains a u-blox ZOE-M8Q chip. The ZOE-M8Q features exceptional performance, high sensitivity, and minimal acquisition time, with digital I2C/SPI serial interface standard output. 

#### Initial Test of the RAK12500 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have, as shown in **Figure 7** to **Figure 9**.

**RAK4631 Board**
<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as the WisBlock Core"
/>

**RAK11200 Board**
<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as the WisBlock Core"
/>

**RAK11310 Board**
<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as the WisBlock Core"
/>

3. The [Basic Sample Code for RAK12500](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12500_GPS_ZOE-M8Q) in Github will work on all WisBlock Core. You can open the example codes depending on your WisBlock Core, as shown in **Figure 10** to **Figure 12**. 

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening the RAK12500 example code for the RAK4631 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening the RAK12500 example code for the RAK11200 WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak11300_example.png"
  width="100%"
  caption="Opening the RAK12500 example code for the RAK11300 WisBlock Core"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12500 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12500_GPS_ZOE-M8Q).
:::

4. Once the example code is open, install the [SparkFun u-blox GNSS](https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library) library by clicking the highlighted link, as shown in **Figure 13** and **Figure 14**.


<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500-code.png"
  width="100%"
  caption="Accessing the library used for the RAK12500 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_library.png"
  width="100%"
  caption="Installing the compatible library for the RAK12500 Module"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 15** and **Figure 16**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

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

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 17**, then your RAK12500 is properly communicating to the WisBlock core.

::: tip 📝 NOTE
The GPS antenna needs to have an unobstructed view of the sky to be able to receive satellite signals. For the example to work, you should test it outside of a building.
:::

<rk-img
  src="/assets/images/wisblock/rak12500/quickstart/rak12500_log.png"
  width="100%"
  caption="RAK12500 sensor data logs"
/>


   


