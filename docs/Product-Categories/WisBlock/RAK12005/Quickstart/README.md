---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12005. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK12005
prev: ../Overview/ 
next: ../Datasheet/ 
---

<!--
## Introduction

This guide introduces the WisBlock RAK12005 board and how to use it.
-->

# RAK12005 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12005 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK12005 & RAK12030 WisBlock Rain Sensor Module](https://store.rakwireless.com/products/rain-sensor-rak12005-module-and-rak12030-sensor?_pos=1&_sid=a90925657&_ss=r)
- [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software 

##### Arduino

- You need to download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK12005 is an electroconductive-liquid detect module used for detecting water and other electroconductive liquids. WisBlock can integrate this module, which makes it easy to build up a data acquisition system to help protect your assets from rain or fog damage.

For more information about RAK12005, refer to the [Datasheet](../Datasheet/).

The RAK12005 module gives information about:

- Rain/Water Detect - measures resistance changes caused by water or condensed fog.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rain-connection.png"
  width="80%"
  caption="Rain Sensor mounting connection to WisBlock Base module"
/>

#### RAK12030 Sensing Pad

The sensor contains a sensing pad that you can place the sensor exposed under the open sky where it can be affected by rainfall and keep your WisBlock solution in a dry place or inside a waterproof enclosure.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak12030_module.png"
  width="30%"
  caption="RAK12030 Module"
/>

#### RAK12005 Sensor Module

The RAK12005 module produces an output voltage depending on the resistance of the sensing pad. The signal from the sensing pad is fed to an MCP606 Comparator to digitize it then the comparator output is tied to the IO pin on the WisConnector. The module also has a built-in potentiometer for sensitivity adjustment of the digital output. Keep the RAK12005 in a dry place or inside a waterproof enclosure, just make sure not to wet this part of the module.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak12005-hardware.png"
  width="40%"
  caption="RAK12005 Module"
/>

#### Installation

##### Mounting Mechanism

The RAK12005 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 4**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK12005 mounting connection to WisBlock Base module"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 7**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

In our example, you will be using the RAK12005 and RAK12030 sensors for detecting water or rain.

For RAK12005, the accessible pin assignments are defined as follows in the Arduino IDE:

- `WB_IO6` for Water Sensor Input pin

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK12005 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12005/Quickstart/#rak12005-in-rak4631-wisblock-core-guide)
- [RAK12005 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12005/Quickstart/#rak12005-in-rak11200-wisblock-core-guide)
- [RAK12005 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK12005/Quickstart/#rak12005-in-rak11310-wisblock-core-guide)

#### RAK12005 in RAK4631 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
 * @file RAK12005_WaterDetector.ino
 * @author rakwireless.com
 * @brief use RAK12005 water detector module to detect rain
 * @version 0.1
 * @date 2021-05-24
 * @copyright Copyright (c) 2021
 */
#define SENSOR_PIN  WB_IO6   // Attach Water sensor to Arduino Digital Pin WB_IO6

void setup() 
{
   pinMode(SENSOR_PIN, INPUT);   // The Water Sensor is an Input
   pinMode(LED_GREEN, OUTPUT);  // The LED is an Output
   pinMode(LED_BLUE, OUTPUT);   // The LED is an Output
}
void loop() 
{

   /* The water sensor will switch HIGH when water is detected.
    when water is detected turn LED on, and switch off when no water is present */
   if( digitalRead(SENSOR_PIN) == HIGH) 
   {
      digitalWrite(LED_GREEN,HIGH);   //turn on
      digitalWrite(LED_BLUE,HIGH);
   }else 
   {
      digitalWrite(LED_GREEN,LOW);
      digitalWrite(LED_BLUE,LOW);
   }
}

```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12005 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12005_WaterDetector).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK12005 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to test the RAK12005 Rain Sensor module. Try pouring water on the copper traces of the RAK12030 and you'll be able to see that the blue and green LED of the WisBlock solution lights up when there is a presence of water, and then switched off when there is no presence of water or dry.

#### RAK12005 in RAK11200 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.
```c
/**
 * @file RAK12005_WaterDetector.ino
 * @author rakwireless.com
 * @brief use RAK12005 water detector module to detect rain
 * @version 0.1
 * @date 2021-05-24
 * @copyright Copyright (c) 2021
 */
#define SENSOR_PIN  WB_IO6   // Attach Water sensor to Arduino Digital Pin WB_IO6

void setup() 
{
   pinMode(SENSOR_PIN, INPUT);   // The Water Sensor is an Input
   pinMode(LED_GREEN, OUTPUT);  // The LED is an Output
   pinMode(LED_BLUE, OUTPUT);   // The LED is an Output
}
void loop() 
{

   /* The water sensor will switch HIGH when water is detected.
    when water is detected turn LED on, and switch off when no water is present */
   if( digitalRead(SENSOR_PIN) == HIGH) 
   {
      digitalWrite(LED_GREEN,HIGH);   //turn on
      digitalWrite(LED_BLUE,HIGH);
   }else 
   {
      digitalWrite(LED_GREEN,LOW);
      digitalWrite(LED_BLUE,LOW);
   }
}

```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12005 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12005_WaterDetector).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 quick start guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11200-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading the RAK12005 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to test the RAK12005 Rain Sensor module. Try pouring water on the copper traces of the RAK12030 and you'll be able to see that the blue and green LED of the WisBlock solution lights up when there is a presence of water, and then switched off when there is no presence of water or dry.


#### RAK12005 in RAK11310 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.
```c
/**
 * @file RAK12005_WaterDetector.ino
 * @author rakwireless.com
 * @brief use RAK12005 water detector module to detect rain
 * @version 0.1
 * @date 2021-05-24
 * @copyright Copyright (c) 2021
 */
#define SENSOR_PIN  WB_IO6   // Attach Water sensor to Arduino Digital Pin WB_IO6

void setup() 
{
   pinMode(SENSOR_PIN, INPUT);   // The Water Sensor is an Input
   pinMode(LED_GREEN, OUTPUT);  // The LED is an Output
   pinMode(LED_BLUE, OUTPUT);   // The LED is an Output
}
void loop() 
{

   /* The water sensor will switch HIGH when water is detected.
    when water is detected turn LED on, and switch off when no water is present */
   if( digitalRead(SENSOR_PIN) == HIGH) 
   {
      digitalWrite(LED_GREEN,HIGH);   //turn on
      digitalWrite(LED_BLUE,HIGH);
   }else 
   {
      digitalWrite(LED_GREEN,LOW);
      digitalWrite(LED_BLUE,LOW);
   }
}

```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12005 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12005_WaterDetector).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11310-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12005/quickstart/rak11310-upload.png"
  width="100%"
  caption="Uploading the RAK12005 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to test the RAK12005 Rain Sensor module. Try pouring water on the copper traces of the RAK12030 and you'll be able to see that the blue and green LED of the WisBlock solution lights up when there is a presence of water, and then switched off when there is no presence of water or dry.