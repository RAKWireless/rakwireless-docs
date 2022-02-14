---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12013. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12013/overview/RAK12013_home.png
tags:
  - quickstart
  - wisblock
  - RAK12013
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12013 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12013 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12013 WisBlock Radar Sensor Module](https://store.rakwireless.com/products/rak12013-wisblock-radar-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12013 is a 3.2&nbsp;GHz microwave radar module based on RCWL-9196. It uses the Doppler radar effect to detect moving objects/motion using microwaves. The RCWL-9196 will transmit and receive a 3.2&nbsp;GHz radar signal and compare the difference between the two signals to determine whether the object is moving or not.

For more information about RAK12013, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak12013-assembly.png"
  width="50%"
  caption="RAK12013 connection to WisBlock Base"
/>

#### RCWL-9196 Antenna

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak12013-antenna.png"
  width="60%"
  caption="WisBlock Radar Sensor Antenna Coil"
/>

The antenna coil of the RCWL-9196 is where part of the sensor gets the motion detected.

::: tip 📝 NOTE
 - The component side of the PCB module or the front is the positive sensing face, while the opposite side, which is the back, is the negative sensing face. The negative sensing face is less effective in terms of sensing.
::: 

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK12013 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK12013 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. 
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

#### Initial Test of the RAK12013 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK12013_Rader_3GHZ.ino
   @author rakwireless.com
   @brief Rader_3GHZ example.
      The RCWL-0516 is a motion detection sensor. 
      It can detect motion through doppler microwave technology through walls or other materials. 
      It will get triggered not only by people but also by other moving objects.
   @version 0.1
   @date 2021-10-18
   @copyright Copyright (c) 2020
**/
#include <Wire.h>

#define SENSOR_OUT    WB_IO3
#define SENSOR_EN     WB_IO4
#define BLUE_LED      LED_BLUE
#define GREEN_LED     LED_GREEN

boolean g_motion_status = false;

void setup() 
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  
  pinMode (SENSOR_EN, OUTPUT);
  digitalWrite(SENSOR_EN, HIGH); // Sensor disable input (low = disable)
  
  time_t timeout = millis();
  Serial.begin(115200);
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
  Serial.println("Rader 3GHZ example");

  pinMode (SENSOR_OUT, INPUT); 
  pinMode (BLUE_LED, OUTPUT);  
  pinMode (GREEN_LED, OUTPUT);
  Serial.println("Waiting for motion");
}

void loop() 
{
  int val; // Read Pin as input
  
  val = digitalRead(SENSOR_OUT);
  if((val > 0) && (g_motion_status == false))
  {
    digitalWrite(BLUE_LED, HIGH);
    digitalWrite(GREEN_LED, LOW);
    Serial.println("Motion Detected");
    g_motion_status = true;
  }
  if((val == 0) && (g_motion_status == true))
  {
    digitalWrite(BLUE_LED, LOW);
    digitalWrite(GREEN_LED, HIGH);
    Serial.println("NO Motion"); 
    g_motion_status = false;
  }
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12013 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12013_Radar_3GHZ) and this sample code in Github will work on all WisBlock Core.
:::

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK12013 example code"
/>

4. When you successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs, as shown in **Figure 12**. You'll be able to see that the led from your WisBlock Base board, lights into blue whenever there is movement or motion, and lights to green whenever there is no movement or motion at all. Therefore, your RAK12013 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak12013/quickstart/rak12013-serial.png"
  width="80%"
  caption="RAK12013 Radar Sensor readings"
/>