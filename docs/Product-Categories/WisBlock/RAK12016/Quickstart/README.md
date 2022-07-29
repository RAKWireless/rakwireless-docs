---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12016. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12016/overview/RAK12016_home.png
tags:
  - quickstart
  - wisblock
  - RAK12016
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12016 Quick Start Guide

<!--
## Introduction

This guide introduces the RAK12016 WisBlock Flex Sensor Module and how to program with it.


-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12016 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12016 WisBlock Flex Sensor Module](https://store.rakwireless.com/products/rak12016-wisblock-flex-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12016 is a flex sensor module, a part of the RAKwireless WisBlock Sensor series. It uses an FS-L-0095-103-ST from Spectrasymbol, which can measure the amount of deflection or bending.

For more information about RAK12016, refer to the [Datasheet](../Datasheet/).

RAK12016 module can be connected to the IO slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak12016-assembly.png"
  width="50%"
  caption="RAK12016 connection to WisBlock Base"
/>

### Flex Sensor

A flex sensor uses carbon on a strip of plastic, which acts as a variable resistor. The more it bends, the higher the resistance of the sensor increases.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/flex-sensor.jpg"
  width="50%"
  caption="FS-L-0095-103-ST Flex Sensor"
/>

:::warning ⚠️ WARNING    
The Flex sensor can only be bent in one direction. Thus, bending the sensor in the other direction may not produce any reliable data and may damage the sensor. Also, be careful not to bend the flex sensor near the bottom where the wires are attached in the RAK12016 module, as they have the potential to kink and fail.
:::  



#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 3**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK12016 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the base board.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/detach_module.png"
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

#### Initial Test of the RAK12016 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak4631-board.png"
  width="90%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak11200-board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak11310-board.png"
  width="90%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK12016_Flex_FSL0095103ST.ino
   @author rakwireless.com
   @brief use Flex sensor read sensor datas example.
   @version 0.1
   @date 2021-07-26
   @copyright Copyright (c) 2021
*/

#include <Wire.h>
#include "ADC121C021.h"    // Click here to get the library: http://librarymanager/All#RAKwireless_MQx_library
#define  ReferenceVoltage  3.3
#define  FLEX_ADDRESS      0x54    //the device i2c address

// Measure the voltage at 3.3V and the actual resistance of your// 10k resistor, and enter them below:
const float VCC = 3.3;                       //Module supply voltage, ADC reference voltage is 3.3V
const float R_DIV = 10000.0;                 // The partial voltage resistance is 10KΩ
// Upload the code, then try to adjust these values to more// accurately calculate bend degree.
const float STRAIGHT_RESISTANCE = 11563.0;   // The flat Resistance
const float BEND_RESISTANCE = 21117.0;      //Resistance at 90 degree bending
ADC121C021 Flex;
void setup() {
  // put your setup code here, to run once:
  /* WisBLOCK 12016 Power On*/
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  delay(300);
  /* WisBLOCK 12016 Power On*/
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

  //********ADC121C021 ADC convert init ********************************
  while (!(Flex.begin(FLEX_ADDRESS, Wire)))
  {
    Serial.println("please check device!!!");
    delay(200);
  }
  
  Flex.setVoltageResolution(ReferenceVoltage);
  float flexRef = Flex.getVoltageResolution();
  uint8_t flexflag = abs(flexRef - ReferenceVoltage);
  while(flexflag)
  {
    Serial.println("please check the Reference Voltage!!!");
    delay(200);
  }
  Serial.println("RAK12016 test Example");
}

/*
 * Step 1: Connect the Flex sensor to the sensor module, supply power VCC (3.3V) to the module
 * Step 2: Open serial debugging assistant (baud rate 115200), you can see the current printed resistance value. Record the resistance value (unit Ω) at the level and maximum bending to be measured respectively.
 * Step 3: Rerunned the test routine after correcting the values of STRAIGHT_RESISTANCE and BEND_RESISTANCE both horizontal resistance variables
 * Step 4: The Flex sensor can only be bent to one side of the print. Bending the sensor in the other direction does not produce any reliable data and may damage the sensor,Also be careful not to bend the sensors near the bottom, as they have the potential to kink and fail
 */

void loop() {
  // put your main code here, to run repeatedly:
  float flexVoltage = Flex.getSensorVoltage();
  float flexR = R_DIV * (VCC / flexVoltage - 1.0);
  Serial.println("Voltage: " + String(flexVoltage) + " V");
  Serial.println("Resistance: " + String(flexR) + " ohms");
  float angle = map(flexR, STRAIGHT_RESISTANCE, BEND_RESISTANCE, 0, 90.0);
  Serial.println("Bend: " + String(angle) + " degrees");
  Serial.println();
  delay(500);
}

```
:::
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12016 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12016_Flex_FSL0095103ST). This sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [RAKWireless MQx](https://github.com/RAKWireless/RAK-MQx-Library) library by clicking the yellow highlighted link, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak12016-lib.png"
  width="90%"
  caption="Accessing the library used for RAK12016 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak12016-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK12016 Module"
/>


5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak4631-selectport.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak4631-upload.png"
  width="90%"
  caption="Uploading the RAK12016 example code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs, as shown in **Figure 14**. Try to bend the flex sensor, and you will see that the resistance readings increase, as well as the bent degrees. Therefore, your RAK12016 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak12016/quickstart/rak12016-logs.png"
  width="75%"
  caption="RAK12016 Flex Sensor readings"
/>