---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18000. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18000/overview/RAK18000_home.png
tags:
  - quickstart
  - wisblock
  - RAK18000
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK18000 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RAK18000 PDM Stereo Microphone Module and how to program with it.

The information obtained from the PDM Stereo Microphone Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18000 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18000 WisBlock PDM Stereo Microphone Module](https://store.rakwireless.com/collections/wisblock-sensor/products/wisblock-microphone-module-rak18000)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
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

RAK18000 module can be connected to the IO slot of WisBlock Base to communicate with the WisBlock Core. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak18000_assembly.png"
  width="70%"
  caption="RAK18000 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/RAK18000_mounting.png"
  width="70%"
  caption="RAK18000 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18000 uses I2C communication lines, and it can cause possible conflict especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base. 
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

The RAK18000 is based on two MP34DT06J microphone modules. The RAK18000 is a digital microphone module that is designed to detect sounds and to support left and right channels. It is also capable of changing microphone orientation on the left or right channel through the switch resistor. 

#### Initial Test of the RAK18000 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as the WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as the WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as the WisBlock Core"
/>

3. The Basic Sample Code for RAK18000 in Github will work depending on your WisBlock Core. You can open the example codes as shown in **Figure 9** to **Figure 11**. 

**Using RAK4631 WisBlock Core**

- [RAK18000 Sample code](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK4630/sensors/RAK18000_Stereo) for RAK4631

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening the RAK18000 example code for the RAK4631 WisBlock Core"
/>

**Using RAK11200 WisBlock Core**

- [RAK18000 Sample code](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK11200/IO/RAK18000_Stereo) for RAK11200

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK18000 example code for RAK11200 WisBlock Core"
/>

**Using RAK11300 WisBlock Core**

- [RAK18000 Sample code](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/IO/RAK18000_Stereo) for RAK11300

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak11300_example.png"
  width="100%"
  caption="Opening RAK18000 example code for RAK11300 WisBlock Core"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the **RAK18000 WisBlock Example Code Repository** and this sample code in Github will work depending on your WisBlock Core.

- [RAK18000 for RAK4631](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK4630/sensors/RAK18000_Stereo)
- [RAK18000 for RAK11200](https://github.com/RAKWireless/WisBlock/tree/6a8b314f979f6a0c316b38b309d9fc6cd5c9a077/examples/RAK11200/IO/RAK18000_Stereo)
- [RAK18000 for RAK11310](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/IO/RAK18000_Stereo)
:::


4. After opening the sample sketch, choose your WisBlock Core then select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak18000_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak18000_upload.png"
  width="100%"
  caption="Uploading the RAK18000 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Plotter of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound generating app on your smartphone and sweep frequencies from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the logs, as shown in **Figure 14**, then your RAK18000 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak18000/quickstart/rak18000_logs.png"
  width="100%"
  caption="RAK18000 audio data logs"
/>



