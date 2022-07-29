---
rak_img: /assets/images/wisblock/rak13004/overview/rak13004_home.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13004. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK13004
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK13004 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK13004 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK13004 WisBlock PWM Expansion Module](https://store.rakwireless.com/products/pwm-expansion-module-rak13004?_pos=1&_sid=0e99f2d3e&_ss=r)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- Light-emitting diode or LEDs
- USB Cable
- Li-Ion/LiPo battery (optional)
- Solar charger (optional)

#### Software 

##### Arduino

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK13004 is a PWM expansion module that can be mounted to the IO slot of WisBlock Base board. It can control 16-channel PWM output, and the module uses PCA9685 from NXP which can be interfaced via I2C. RAK13004 power source can be controlled by the WisBlock Core via IO2 pin or **WB_IO2** in code. This feature can be utilized for applications requiring low power requirements.

| Row/Column | Column 1 | Column 2 | Column 3 | Column 4 |
| ---------- | -------- | -------- | -------- | -------- |
| **Row 1**  | CH0      | CH1      | CH14     | CH15     |
| **Row 2**  | CH2      | CH3      | CH12     | CH13     |
| **Row 3**  | CH4      | CH5      | CH10     | CH11     |
| **Row 4**  | CH6      | CH7      | CH8      | CH9      |
| **Row 5**  | GND      | VCC      | GND      | VCC      |

For more information about RAK13004, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/connection.png"
  width="50%"
  caption="RAK13004 Connection to WisBlock Base module"
/>



#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK13004 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK13004 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

### Software Configuration and Example

In the following example, you will be using the [RAK13004 WisBlock PWM Expansion Module](https://store.rakwireless.com/products/pwm-expansion-module-rak13004?_pos=1&_sid=0e99f2d3e&_ss=r) to set up fading in and out LEDs.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK13004 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13004/Quickstart/#rak13004-in-rak4631-wisblock-core-guide)
- [RAK13004 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13004/Quickstart/#rak13004-in-rak11200-wisblock-core-guide)
- [RAK13004 in RAK11300 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13004/Quickstart/#rak13004-in-rak11300-wisblock-core-guide)

#### RAK13004 in RAK4631 WisBlock Core Guide

##### Arduino Setup

Shown in Figure 6 is the illustration on how to use the RAK13004 PWM Expansion Module to produce PWM Output. In this example, you can use LEDs for demonstration.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/led_connection00.png"
  width="50%"
  caption="RAK13004 Sending PWM Output to LEDs"
/>

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK13004_PWM_Expander_PCA9685.ino
   @author rakwireless.com
   @brief Use IIC to expand 16 PWM. 
          Control PCA9685 channels 0~15 to output PWM with different duty cycles and time delays. 
          The frequency can be adjusted supports 24HZ to 1526HZ.
   @version 0.1
   @date 2021-3-2
   @copyright Copyright (c) 2021
**/

#include <Arduino.h>
#include <PCA9685.h>  //Click the link to get the library: http://librarymanager/All#PCA9685

PCA9685 PCA9685;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, 1);
  
  PCA9685.setupSingleDevice(Wire,0x40);// Library using 0x40(0100 0000) i2c address, and default Wire @400kHz.

  PCA9685.setupOutputEnablePin(WB_IO6);// WB_IO6 active LOW output enable.
  PCA9685.enableOutputs(WB_IO6);

  PCA9685.setOutputsNotInverted();

  PCA9685.setToFrequency(500); // Set PWM freq to 500Hz (supports 24Hz to 1526Hz)
  
  // Set the PWM output of channel 0 .
  // PWM duty cycle = 50 % (LED on time = 50 %; LED off time = 50 %).
  // Delay time = 0 % .
  PCA9685.setChannelDutyCycle(0,  50, 0); 
  PCA9685.setChannelDutyCycle(1,  50, 25);
  PCA9685.setChannelDutyCycle(2,  50, 50);
  PCA9685.setChannelDutyCycle(3,  10, 10);
  PCA9685.setChannelDutyCycle(4,  20, 20);
  PCA9685.setChannelDutyCycle(5,  30, 30);
  PCA9685.setChannelDutyCycle(6,  40, 40);
  PCA9685.setChannelDutyCycle(7,  50, 50);
  PCA9685.setChannelDutyCycle(8,  60, 60);
  PCA9685.setChannelDutyCycle(9,  70, 70);
  PCA9685.setChannelDutyCycle(10, 80, 80);
  PCA9685.setChannelDutyCycle(11, 90, 90);
  PCA9685.setChannelDutyCycle(12, 100, 0);              
}

void loop()
{
  // Use channels 13, 14, 15 to make a simple breathing light example.
  for(uint8_t i=0 ;i < 100; i+=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
  for(uint8_t i=100 ;i >0; i-=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK4631 WisBlock Core Module that can be found on the [RAK13004 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13004_PWM_Expander_PCA9685).
:::

3. Install the required library, as shown in **Figure 8**.

<rk-img

  src="/assets/images/wisblock/rak13004/quickstart/adding_library00.png"
  width="100%"
  caption="Installing the Library"
/>

4. Select the correct port and upload your code, as shown in **Figure 9** and **Figure 10**.

<rk-img

  src="/assets/images/wisblock/rak13004/quickstart/selecting_port00.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img

  src="/assets/images/wisblock/rak13004/quickstart/upload00.png"
  width="100%"
  caption="Uploading code"
/>

6. When you successfully uploaded the example sketch, you can see that the LEDs are fading in and out.



#### RAK13004 in RAK11200 WisBlock Core Guide

##### Arduino Setup

Shown in **Figure 11** is the illustration on how to use the RAK13004 PWM Expansion Module to produce PWM Output. In this example, you can use LEDs for demonstration.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/led_connection11200.png"
  width="50%"
  caption="RAK13004 Sending PWM Output to LEDs"
/>

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
/**
   @file RAK13004_PWM_Expander_PCA9685.ino
   @author rakwireless.com
   @brief Use IIC to expand 16 PWM. 
          Control PCA9685 channels 0~15 to output PWM with different duty cycles and time delays. 
          The frequency can be adjusted supports 24HZ to 1526HZ.
   @version 0.1
   @date 2021-3-2
   @copyright Copyright (c) 2021
**/

#include <Arduino.h>
#include <PCA9685.h>  //Click the link to get the library: http://librarymanager/All#PCA9685

PCA9685 PCA9685;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, 1);
  
  PCA9685.setupSingleDevice(Wire,0x40);// Library using 0x40(0100 0000) i2c address, and default Wire @400kHz.

  PCA9685.setupOutputEnablePin(WB_IO6);// WB_IO6 active LOW output enable.
  PCA9685.enableOutputs(WB_IO6);

  PCA9685.setOutputsNotInverted();

  PCA9685.setToFrequency(500); // Set PWM freq to 500Hz (supports 24Hz to 1526Hz)
  
  // Set the PWM output of channel 0 .
  // PWM duty cycle = 50 % (LED on time = 50 %; LED off time = 50 %).
  // Delay time = 0 % .
  PCA9685.setChannelDutyCycle(0,  50, 0); 
  PCA9685.setChannelDutyCycle(1,  50, 25);
  PCA9685.setChannelDutyCycle(2,  50, 50);
  PCA9685.setChannelDutyCycle(3,  10, 10);
  PCA9685.setChannelDutyCycle(4,  20, 20);
  PCA9685.setChannelDutyCycle(5,  30, 30);
  PCA9685.setChannelDutyCycle(6,  40, 40);
  PCA9685.setChannelDutyCycle(7,  50, 50);
  PCA9685.setChannelDutyCycle(8,  60, 60);
  PCA9685.setChannelDutyCycle(9,  70, 70);
  PCA9685.setChannelDutyCycle(10, 80, 80);
  PCA9685.setChannelDutyCycle(11, 90, 90);
  PCA9685.setChannelDutyCycle(12, 100, 0);              
}

void loop()
{
  // Use channels 13, 14, 15 to make a simple breathing light example.
  for(uint8_t i=0 ;i < 100; i+=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
  for(uint8_t i=100 ;i >0; i-=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK13004 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13004_PWM_Expander_PCA9685).
:::

3. Install the required library, as shown in **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/adding_library11200.png"
  width="100%"
  caption="Installing the Library"
/>

4. Select the correct port and upload your code, as shown in **Figure 14** and **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/selecting_port11200.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/upload11200.png"
  width="100%"
  caption="Uploading code"
/>

:::tip 📝 NOTE:
RAK11200 requires the BOOT0 pin to be configured properly before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

6. When you successfully uploaded the example sketch, you can see that the LEDs are fading in and out.



#### RAK13004 in RAK11300 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11300 WisBlock Core, as shown in **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK13004_PWM_Expander_PCA9685.ino
   @author rakwireless.com
   @brief Use IIC to expand 16 PWM. 
          Control PCA9685 channels 0~15 to output PWM with different duty cycles and time delays. 
          The frequency can be adjusted supports 24HZ to 1526HZ.
   @version 0.1
   @date 2021-3-2
   @copyright Copyright (c) 2021
**/

#include <Arduino.h>
#include <PCA9685.h>  //Click the link to get the library: http://librarymanager/All#PCA9685

PCA9685 PCA9685;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, 1);
  
  PCA9685.setupSingleDevice(Wire,0x40);// Library using 0x40(0100 0000) i2c address, and default Wire @400kHz.

  PCA9685.setupOutputEnablePin(WB_IO6);// WB_IO6 active LOW output enable.
  PCA9685.enableOutputs(WB_IO6);

  PCA9685.setOutputsNotInverted();

  PCA9685.setToFrequency(500); // Set PWM freq to 500Hz (supports 24Hz to 1526Hz)
  
  // Set the PWM output of channel 0 .
  // PWM duty cycle = 50 % (LED on time = 50 %; LED off time = 50 %).
  // Delay time = 0 % .
  PCA9685.setChannelDutyCycle(0,  50, 0); 
  PCA9685.setChannelDutyCycle(1,  50, 25);
  PCA9685.setChannelDutyCycle(2,  50, 50);
  PCA9685.setChannelDutyCycle(3,  10, 10);
  PCA9685.setChannelDutyCycle(4,  20, 20);
  PCA9685.setChannelDutyCycle(5,  30, 30);
  PCA9685.setChannelDutyCycle(6,  40, 40);
  PCA9685.setChannelDutyCycle(7,  50, 50);
  PCA9685.setChannelDutyCycle(8,  60, 60);
  PCA9685.setChannelDutyCycle(9,  70, 70);
  PCA9685.setChannelDutyCycle(10, 80, 80);
  PCA9685.setChannelDutyCycle(11, 90, 90);
  PCA9685.setChannelDutyCycle(12, 100, 0);              
}

void loop()
{
  // Use channels 13, 14, 15 to make a simple breathing light example.
  for(uint8_t i=0 ;i < 100; i+=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
  for(uint8_t i=100 ;i >0; i-=1)
  {
    PCA9685.setChannelDutyCycle(13, i,0);
    PCA9685.setChannelDutyCycle(14, 100-i,0);
    PCA9685.setChannelDutyCycle(15, i,0);
    delay(20);
  }
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11300 WisBlock Core Module that can be found on the [RAK13004 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13004_PWM_Expander_PCA9685).
:::

3. Install the required library, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/adding_library11300.png"
  width="100%"
  caption="Installing the Library"
/>

4. Select the correct port and upload your code, as shown in **Figure 18** and **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/selecting_port11300.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13004/quickstart/upload11300.png"
  width="100%"
  caption="Uploading the code"
/>

6. When you successfully uploaded the example sketch, you can see that the LEDs are fading in and out.
