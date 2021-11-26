---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK14003. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak14003/overview/RAK14003_home.png
tags:
  - quickstart
  - wisblock
  - RAK14003
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK14003 Quick Start Guide

<!--
## Introduction

This guide introduces the RAK14003 WisBlock LED Bar Graph Module and how to program with it.


-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK14003 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK14003 WisBlock LED Bar Graph Module](https://store.rakwireless.com/products/wisblock-led-bar-module-rak14003?_pos=1&_sid=8934b7e3f&_ss=r)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK14003 is an LED Bar Graph that is part of WisBlock Display modules. It consists of 10 configurable LEDs: five (5) green LEDs, three (3) yellow LEDs, and two (2) red LEDs. RAK14003 uses the MCP23017 from Microchip as an I/O Expander and KEM-102510A-RYG from Hongke Lighting as the LED bar. Each LED in the module can be controlled separately so the module can build a multipurpose graphic feedback display.

For more information about RAK14003, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak14003-assembly.png"
  width="50%"
  caption="RAK14003 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK14003 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK14003 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK14003 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::


After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK14003 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. 

```c
#include <Wire.h>
#include <Adafruit_MCP23X17.h>  //http://librarymanager/All#Adafruit_MCP23017

#define IIC_ADDRESS 0X24

Adafruit_MCP23X17 mcp;
  
void setup() 
{  
  Serial.begin(115200);
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, 1);
  
  // Reset device
  pinMode(WB_IO4, OUTPUT);
  digitalWrite(WB_IO4, 1);
  delay(10);
  digitalWrite(WB_IO4, 0);
  delay(10);
  digitalWrite(WB_IO4, 1);
  delay(10);
  
  if (!mcp.begin_I2C(IIC_ADDRESS,&Wire)) {
    Serial.println("Error.");
    while (1);
  }
  
  for(int i=0 ;i < 16 ;i++)
  {
    mcp.digitalWrite(i, HIGH);  // Turn off all LEDs. 
    mcp.pinMode(i, OUTPUT);     // Set pins as output.
  }

}

void loop() 
{
  int i;
  for(i=0 ;i < 10 ;i++)
  {
    mcp.digitalWrite(i, LOW);
    delay(200);
  }
  for(i=0 ;i < 10 ;i++)
  {
    mcp.digitalWrite(9-i, HIGH);
    delay(200);
  }
  for(i=0 ;i < 10 ;i++)
  {
    mcp.digitalWrite(i, LOW);
  }
  delay(300);
  for(i=0 ;i < 10 ;i++)
  {
    mcp.digitalWrite(i, HIGH);
  }
  delay(300);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK14003 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK14003_LED_BAR_MCP32) and this sample code in Github will work on all WisBlock Core.
:::

3. Once the example code is open, install the [Adafruit MCP23017](https://github.com/adafruit/Adafruit-MCP23017-Arduino-Library) library by clicking the yellow highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak14003-lib.png"
  width="100%"
  caption="Accessing the library used for RAK14003 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak14003-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK14003 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14003/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK14003 example code"
/>

5. When you successfully uploaded the example sketch, you'll see that the LED Bar Graph module lights up in incrementing and decrementing way. Therefore, your RAK14003 is properly communicating to the WisBlock core.