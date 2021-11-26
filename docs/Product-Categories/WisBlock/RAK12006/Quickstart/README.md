---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK12006. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12006/overview/RAK12006_home.png
tags:
  - quickstart
  - wisblock
  - RAK12006
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12006 Quick Start Guide

<!--
## Introduction

This guide introduces the RAK12006 WisBlock PIR Module and how to program with it.


-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12006 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12006 WisBlock PIR Module](https://store.rakwireless.com/products/wisblock-pir-module-rak12006?_pos=1&_sid=cb7fc7fa0&_ss=r)
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

The RAK12006 is a Pyroelectric Infrared Radial (PIR) module. It is designed to detect occupancy and motion from infrared radiated objects. The sensor uses AM312 from Senba Sensing Technology Co., Ltd.

For more information about RAK12006, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak12006-assembly.png"
  width="40%"
  caption="RAK12006 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK12006 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK12006 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. 
:::


After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

#### Initial Test of the RAK12006 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. 

```c
/**
 * @file RAK12006_MotionDetection.ino
 * @author rakwireless.com
 * @brief motion detection example
 * @version 0.1
 * @date 2021-06-15
 * @copyright Copyright (c) 2021
 */
#include <Wire.h>
#define SENSOR_PIN  WB_IO6   // Attach AM312 sensor to Arduino Digital Pin WB_IO6

int gCurrentStatus = 0;         // variable for reading the pin current status
int gLastStatus = 0;            // variable for reading the pin last status

void setup() 
{
   pinMode(SENSOR_PIN, INPUT);   // The Water Sensor is an Input
   pinMode(LED_GREEN, OUTPUT);  // The LED is an Output
   pinMode(LED_BLUE, OUTPUT);   // The LED is an Output   
   Serial.begin(115200);
   time_t timeout = millis();
   while (!Serial)
   {
     if ((millis() - timeout) < 5000)
     {
       delay(100);
     }
     else
     {
       break;
     }
   } 
   Serial.println("========================");
   Serial.println("    RAK12006 test");
   Serial.println("========================");
}

void loop() {  

  gCurrentStatus = digitalRead(SENSOR_PIN);
  if(gLastStatus != gCurrentStatus)
  {
    if(gCurrentStatus == 0)
    {//0: detected   1: not detected
      Serial.println("IR detected ...");
     digitalWrite(LED_GREEN,HIGH);   //turn on
     digitalWrite(LED_BLUE,HIGH);
    }
    else
    {
      digitalWrite(LED_GREEN,LOW);
      digitalWrite(LED_BLUE,LOW);   // turn LED OF
    }   
    gLastStatus = gCurrentStatus;
  }
  else
  {
    delay(100);
  }

}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12006 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12006_MotionDetection) and this sample code in Github will work on all WisBlock Core.
:::

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 9** and **Figure 10**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK12006 example code"
/>

4. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs, as shown in **Figure 11**, and you will also see the green LED and blue LED from the WisBlock Base lights up whenever it detects motion based on changes in infrared light in the environment. Therefore, your RAK12006 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak12006/quickstart/rak12006-logs.png"
  width="80%"
  caption="RAK12006 PIR detection readings"
/>