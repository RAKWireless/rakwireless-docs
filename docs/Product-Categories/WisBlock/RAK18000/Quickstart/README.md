---
tags:
  - quickstart
  - wisblock
  - RAK18000
prev: ../Overview/ 
next: ../Datasheet/ 
---

# Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK18000 PDM Stereo Microphone Module and how to program with it.

The information obtained from the PDM Stereo Microphone Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK18000 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18000](https://store.rakwireless.com/collections/wisblock-sensor/products/wisblock-microphone-module-rak18000)
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

RAK18000 is a WisBlock Sensor module that extends the WisBlock system with sound sensing capability. 

For more information about RAK18000, refer to the [Datasheet](../Datasheet/).

RAK18000 module can be connected on the IO slot of WisBlock Base to communicate with the WisBlock Core. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/RAK18000_assembly.png"
  width="70%"
  caption="RAK18000 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/RAK18000_mounting.png"
  width="70%"
  caption="RAK18000 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18000 uses I2C communication lines, and it can cause possible conflict especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK18000 is based on two MP34DT06J microphone modules. The RAK18000 is a digital microphone module that is designed to detect sounds and to support left and right channels. It is also capable of changing microphone orientation on the left or right channel through the switch resistor. 

#### Initial Test of the RAK18000 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have.

**Using RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**Using RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The Basic Sample Code for RAK18000 in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core. 

**Using RAK4631 WisBlock Core**

Sample code for [RAK4631](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK4630/sensors/RAK18000_Stereo) 

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK18000 example code for RAK4631 WisBlock Core"
/>

**Using RAK11200 WisBlock Core**

Sample code for [RAK11200](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK11200/IO/RAK18000_Stereo)

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK18000 example code for RAK11200 WisBlock Core"
/>

3. Open the example code as shown in **Figure 10**.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak18000_code.png"
  width="100%"
  caption="Installing the compatible library for RAK18000 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak18000_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak18000_upload.png"
  width="100%"
  caption="Uploading the RAK18000 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Plotter of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound generating app on your smartphone and sweep frequencies from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the logs, as shown in **Figure 13**, then your RAK18000 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/RAK18000/quickstart/rak18000_logs.png"
  width="100%"
  caption="RAK18000 audio data logs"
/>



