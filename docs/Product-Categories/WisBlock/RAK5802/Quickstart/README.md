---
tags:
  - quickstart
  - wisblock
  - RAK5802
prev: ../Overview/ 
next: ../Datasheet/
rak_img: /assets/images/wisblock/rak5802/overview/RAK5802_home.png
rak_desc: Contains instructions and tutorials in installing and deploying your RAK5802. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
---

# RAK5802 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock RS485 Interface Module and how to program with it.

The information obtained from the RS485 Interface Module will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK5802 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- 2 x [RAK5802](https://store.rakwireless.com/collections/wisblock-interface/products/rak5802-rs485-interface)
- 2 x Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- 2 x Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- 2 x USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with an industrial RS485 data transmission interface. 

RAK5802 supports one RS485 interface. There are two voltage sources also available on the connectors which you can use on your external device or circuit. One is the battery voltage via PWR pin which is directly coming from the battery connected to the WisBlock Base and the other one is the 3.3V regulated output which comes from the WisBlock Base as well and powers the entire WisBlock board including the WisBlock Core and other connected modules. In addition, an Analog A1 input (via WB_A1 in code) and I2C interface connection are available on the crimping terminal.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_pinout.png"
  width="70%"
  caption="RAK5802 sensor connector"
/>

For more information about RAK5802, refer to the [Datasheet](../Datasheet/).

The RAK5802 module is part of the WisBlock Interface category, which connects to the base board through the IO slot. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_assembly.png"
  width="80%"
  caption="RAK5802 connection to WisBlock Base"
/>

#### Installation

##### Mounting Mechanism
The RAK5802 module is part of the WisBlock Interface category, which connects to the baseboard through the IO slot. The installation method is shown in the Figures 3 and 4.

1. Keep the RAK5802 module parallel to the baseboard, and gently place and plug WisConnector into the IO slot receptacle of the baseboard. The IO slot has an outer silkscreen on it to assist with the alignment. At this point, apply force evenly along with the module and press again. There will be a sound to confirm the successful completion of the attachment process.

:::tip 📝 NOTE:
For detailed instructions, refer to the [WisBlock Installation Guide](/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/).
:::

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/wisconnector.png"
  width="50%"
  caption="WisConnector"
/>

2. Always secure the RAK5802 module with **3 x M1.2 x3 pan head screws**, as shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_mounting.png"
  width="70%"
  caption="RAK5802 connection to WisBlock Base"
/>

##### RAK5802 Sensor Connector Crimping Mechanism

The RAK5802 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The fast-crimping terminal can support cable with a width between 20 AWG to 24 AWG. The usual stripping length is around 6 to 7&nbsp;mm. 

As shown in **Figure 5**, during the crimping process, you should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, then release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/crimping_process.png"
  width="40%"
  caption="RAK5802 Sensor Connector"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 8**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK5802 uses UART and I2C communication lines, and it can cause possible conflict especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

A ready-to-use SW library and tutorial make it easy to connect any sensor that is using the RS485 interface.

The sample code will require two sets of WisBlock Base (RAK5005-O), WisBlock Core (RAK4631/RAK11200) and WisBlock RS485 Interface Module. You only need to connect the two wires of the RS485 bus as shown in **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_test_connection.png"
  width="60%"
  caption="Connection Diagram"
/>

#### Initial Test of the RAK5802 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 10** and **Figure 11**.

**Using RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**Using RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The Basic Sample Code for RAK5802 in Github will work on all WisBlock Core. You can open the the example codes depending on your WisBlock Core, as shown in **Figure 12** and **Figure 13**. 

Sample code for [RAK4631](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/IO/RAK5802_RS485)

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak4631_example.png"
  width="100%"
  caption="Opening RAK5802 example code for RAK4631 WisBlock Core"
/>

Sample code for [RAK11200](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/IO/RAK5802_RS485)

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak11200_example.png"
  width="100%"
  caption="Opening RAK5802 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [Arduino RS485](https://www.arduino.cc/en/Reference/ArduinoRS485) or if you use Modbus protocol [Arduino Modbus](https://www.arduino.cc/en/ArduinoModbus/ArduinoModbus) library by clicking the yellow highlighted link, as shown in **Figure 14** and **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_search.png"
  width="100%"
  caption="Accessing the library used for RAK5802 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_code.png"
  width="100%"
  caption="Installing the compatible library for RAK5802 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the 'Receiver' code to the first board and 'Sender' code to the second board, as shown in **Figure 16** and **Figure 17**. 

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_upload.png"
  width="100%"
  caption="Uploading the RAK5802 example code"
/>

5. When you successfully uploaded the example sketch, connect the board with the 'Receiver' code, open the Serial Monitor of the Arduino IDE and  power the 'Sender' board via USB or Battery to see the reading logs. If you see the logs, as shown in **Figure 18**, then your RAK5802 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak5802/quickstart/rak5802_logs.png"
  width="100%"
  caption="RAK5802 data logs from 'Sender' board"
/>




