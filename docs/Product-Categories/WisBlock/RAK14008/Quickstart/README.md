---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK14008. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak14008/overview/RAK14008_home.png
tags:
  - quickstart
  - wisblock
  - RAK14008
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK14008 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK14008 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK14008 WisBlock Gesture Sensor Module](https://store.rakwireless.com/products/rak14008-wisblock-gesture-sensor?utm_source=RAK14008&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19008 WisBlock IO Extension Cable (optional)](https://store.rakwireless.com/products/wisblock-io-extension-cable-rak19008)
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK14008 is a gesture sensor module based on PAJ7620U2. It is designed for gesture recognition applications with an I2C digital interface. It can recognize nine (9) human hand gesticulations such as moving up, down, left, right, forward, backward, circle-clockwise, circle-counter clockwise, and waving. It also offers built-in proximity detection in sensing approaching or departing objects from the sensor.

For more information about RAK14008, refer to the [Datasheet](../Datasheet/).

RAK14008 module can be connected to the IO slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.


<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak14008-assembly.png"
  width="40%"
  caption="RAK14008 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK14008 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK14008 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/detach_module.png"
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

#### Initial Test of the RAK14008 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK14008_Gesture_Recognize_PAJ7620.ino
   @author rakwireless.com
   @brief This example can recognize 9 gestures and output the result,
          including move up, move down, move left, move right, move forward,
          move backward, circle-clockwise, circle-counter clockwise, and wave.
   @version 0.1
   @date 2021-9-28
   @copyright Copyright (c) 2021
**/

#include "RevEng_PAJ7620.h" //Click here to get the library: http://librarymanager/All#Gesture_PAJ7620

RevEng_PAJ7620 sensor = RevEng_PAJ7620();   // Create gesture sensor Object.

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

  // Initialize Serial for debug output
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

  Serial.println("RAK14008 PAJ7620 Test example.");
  Serial.println("PAJ7620 sensor demo: Recognizing all 9 gestures.");

  if( !sensor.begin() ) // Returns 0 if sensor connect fail
  {
    Serial.print("PAJ7620 I2C error - halting");
    while(1) 
    {
      delay(10);
    }
  }

  Serial.println("PAJ7620 Init OK.");
  Serial.println("Please input your gestures:");
}

void loop()
{
  Gesture gesture;                  // Gesture is an enum type from RevEng_PAJ7620.h
  gesture = sensor.readGesture();   // Read back current gesture (if any) of type Gesture

  switch (gesture)
  {
    case GES_FORWARD:
    {
      Serial.print("GES_FORWARD");
      break;
    }
    case GES_BACKWARD:
    {
      Serial.print("GES_BACKWARD");
      break;
    }
    case GES_LEFT:
    {
      Serial.print("GES_LEFT");
      break;
    }
    case GES_RIGHT:
    {
      Serial.print("GES_RIGHT");
      break;
    }
    case GES_UP:
    {
      Serial.print("GES_UP");
      break;
    }
    case GES_DOWN:
    {
      Serial.print("GES_DOWN");
      break;
    }
    case GES_CLOCKWISE:
    {
      Serial.print("GES_CLOCKWISE");
      break;
    }
    case GES_ANTICLOCKWISE:
    {
      Serial.print("GES_ANTICLOCKWISE");
      break;
    }
    case GES_WAVE:
    {
      Serial.print("GES_WAVE");
      break;
    }
    case GES_NONE:
    {
      break;
    }
  }

  if(gesture != GES_NONE)
  {
    Serial.print(", Code: ");
    Serial.println(gesture);
  }

  delay(100);
}

```
:::
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK14008 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK14008_Gesture_PAJ7620) and this sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [PAJ7620](https://github.com/acrandal/RevEng_PAJ7620) library by clicking the yellow highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak14008-lib.png"
  width="100%"
  caption="Accessing the library used for RAK14008 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak14008-libinstall.png"
  width="65%"
  caption="Installing the compatible library for RAK14008 Module"
/>


5. After the successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK14008 example code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE, set the baud rate correctly, and once you have made a gesture or movement in front of the RAK14008 sensor, you'll be able to see the sensor's output as shown below in **Figure 13**. Therefore, your RAK14008 is properly communicating to the WisBlock core. 

<rk-img
  src="/assets/images/wisblock/rak14008/quickstart/rak14008-data.png"
  width="60%"
  caption="RAK14008 Gesture Sensor Serial Readings"
/>