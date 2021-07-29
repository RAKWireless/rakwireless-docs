---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK1700. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak17000/overview/RAK17000_home.png
tags:
  - quickstart
  - wisblock
  - RAK17000
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK17000 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK17000 WisBlock Motor Control Module, make sure to prepare the necessary items listed below:

#### Hardware 

- [RAK17000 WisBlock Motor Control Module](https://store.rakwireless.com/collections/wisblock-motor/products/motor-control-module-rak17000?variant=40102991200454)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software 

##### Arduino

- You need to download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK17000 is a WisBlock Motor Control Module that extends the WisBlock system to be used on controlling motors. It has a dual H-bridge configuration motor driver that can support two DC motors or one stepper motor. It can get power from the battery of the WisBlock Base or externally via the RAK17000 terminal connector. By setting the right jumper on the 3-pin header on the side of the terminal connector, you can select where you want to get the power source. It can allow up to 1.5&nbsp;A per channel, but thermal management must be implemented.

For more information about RAK17000, refer to the [Datasheet](../Datasheet/).

#### Motor Driven by the WisBlock Battery

You need to set header jumper and short VM and BAT to enable power from the battery of the WisBlock module. You can connect up to two DC motors by using channels A and B. To use channel A, connect the DC motor on A1 and A2. To use channel B, connect the DC motor on B1 and B2. You need to use both channels if you are driving a stepper motor. 

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/rak17000_bat.svg"
  width="30%"
  caption="RAK17000 Powered by WisBlock Battery"
/>

#### Motor Driven by the External VIN

You need to set header jumper and short VM and VIN to enable power from the external power source. The external power source can be a different battery pack or an independent DC power supply. Connect this power source to the supply voltage terminals VIN and GND of RAK17000 that can allow the voltage range from 2.7&nbsp;V to 10.8&nbsp;V. Once done on the setup, you can connect up to two DC motors by using channels A and B. 

To use channel A, connect the DC motor on A1 and A2. To use channel B, connect the DC motor on B1 and B2. You need to use both channels if you are driving a stepper motor. 

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/rak17000_vin.svg"
  width="30%"
  caption="RAK17000 Powered by External Voltage Source"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK17000 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/RAK17000_mounting.png"
  width="60%"
  caption="RAK17000 mounting connection to WisBlock Base module"
/>

##### RAK17000 Connector Crimping Mechanism

The RAK17000 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The fast-crimping terminal can support cable with a width between 20&nbsp;AWG to 24&nbsp;AWG. The usual stripping length is around 6 to 7&nbsp;mm. 

As shown in **Figure 4**, during the crimping process, you should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/crimping_process.png"
  width="40%"
  caption="RAK17000 Module Connector"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 8**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK17000 in RAK4631 WisBlock Core Guide](#rak170000-in-rak4631-wisblock-core-guide)
- [RAK17000 in RAK11200 WisBlock Core Guide](#rak17000-in-rak11200-wisblock-core-guide)

#### RAK17000 in RAK4631 WisBlock Core Guide

##### Arduino Setup

After doing the hardware setup, this example code will work both for WisBlock Battery powered motor or external power source. This will control the DC motors connected in channel A and channel B and make it spin in clockwise then counter-clockwise direction repeatedly.

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. This example code comes from the [RAK17000 WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/IO/RAK17000_Motor_Driver_DRV8833/RAK17000_Motor_Driver_DRV8833.ino) which controls two DC motors. 

```c
/**
   @file RAK17000_Motor_Driver_DRV8833.ino
   @author rakwireless.com
   @brief Control the two motors for forward and reverse rotation from slow to fast and then from fast to slow.
   @version 0.1
   @date 2021-5-14
   @copyright Copyright (c) 2020
**/

#include <Arduino.h>

#define MOTOR_AIN1  SCK        
#define MOTOR_AIN2  SS     
#define MOTOR_BIN1  WB_IO3  
#define MOTOR_BIN2  MOSI   
#define MOTOR_SLEEP WB_IO6

void setup()
{
  // Enable DRV8833 output.
  pinMode(MOTOR_SLEEP, OUTPUT); 
  digitalWrite(MOTOR_SLEEP, HIGH);

  pinMode(MOTOR_AIN1, OUTPUT);
  pinMode(MOTOR_AIN2, OUTPUT);
  pinMode(MOTOR_BIN1, OUTPUT);
  pinMode(MOTOR_BIN2, OUTPUT);
}

void loop()
{
  analogWrite(MOTOR_AIN2, 0);
  analogWrite(MOTOR_BIN2, 0); 
  for(uint8_t i = 0 ;i < 255 ;i++ ) 
  {
    analogWrite(MOTOR_AIN1, i);
    analogWrite(MOTOR_BIN1, i);
    delay(50);   
  }
  delay(100);
  for(uint8_t i = 255 ;i > 0 ;i-- )
  {
    analogWrite(MOTOR_AIN1, i);
    analogWrite(MOTOR_BIN1, i);
    delay(50);
  }
  
  analogWrite(MOTOR_AIN1, 0);
  analogWrite(MOTOR_BIN1, 0);
  for(uint8_t i = 0 ;i < 255 ;i++ )
  {
    analogWrite(MOTOR_AIN2, i);
    analogWrite(MOTOR_BIN2, i);
    delay(50);
  }
  delay(100);
  for(uint8_t i = 255 ;i > 0 ;i-- )
  {
    analogWrite(MOTOR_AIN2, i);
    analogWrite(MOTOR_BIN2, i);
    delay(50);
  }
  delay(100); 
}
```
::: tip 📝 NOTE
RAK17000 can also control stepper motor. The basic example code can be found on the [RAK17000 WisBlock Example Code repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/IO/RAK17000_Stepper_Driver_DRV8833/RAK17000_Stepper_Driver_DRV8833.ino) for stepper motor.
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK17000 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now see that the motor will start spinning and reversing direction repeated.

#### RAK17000 in RAK11200 WisBlock Core Guide

##### Arduino Setup

After doing the hardware setup, this example code will work both for WisBlock Battery powered motor or external power source. This will control the DC motors connected in channel A and channel B and make it spin in clockwise then counter-clockwise direction repeatedly.

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE. This example code comes from the [RAK17000 WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK11200/IO/RAK17000_Motor_Driver_DRV8833/RAK17000_Motor_Driver_DRV8833.ino) which controls two DC motors. 

```c
/**
   @file RAK17000_Motor_Driver_DRV8833.ino
   @author rakwireless.com
   @brief Control the two motors for forward and reverse rotation from slow to fast and then from fast to slow.
   @version 0.1
   @date 2021-5-14
   @copyright Copyright (c) 2020
**/

#include <Arduino.h>

#define MOTOR_AIN1  SCK  
#define MOTOR_AIN2  SS  
#define MOTOR_BIN1  WB_IO3  
#define MOTOR_BIN2  MOSI
#define MOTOR_SLEEP WB_IO6

// use first channel of 16 channels (started from zero)
#define LEDC_CHANNEL_0  0
#define LEDC_CHANNEL_1  1
#define LEDC_CHANNEL_2  2
#define LEDC_CHANNEL_3  3

// use 13 bit precission for LEDC timer
#define LEDC_TIMER_13_BIT  13

// use 5000 Hz as a LEDC base frequency
#define LEDC_BASE_FREQ     5000

/**
   @brief  Arduino like analogWrite. 
*/
void ledcAnalogWrite(uint8_t channel, uint32_t value, uint32_t valueMax = 255) 
{
  // calculate duty, 8191 from 2 ^ 13 - 1
  uint32_t duty = (8191 / valueMax) * min(value, valueMax);

  // write duty to LEDC
  ledcWrite(channel, duty);
}

void setup()
{
  // Enable DRV8833 output.
  pinMode(MOTOR_SLEEP, OUTPUT); 
  digitalWrite(MOTOR_SLEEP, HIGH);

  ledcSetup(LEDC_CHANNEL_0, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT); // Set channel 0
  ledcSetup(LEDC_CHANNEL_1, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT); // Set channel 1
  ledcSetup(LEDC_CHANNEL_2, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT); // Set channel 2
  ledcSetup(LEDC_CHANNEL_3, LEDC_BASE_FREQ, LEDC_TIMER_13_BIT); // Set channel 3
  
  ledcAttachPin(MOTOR_AIN1, LEDC_CHANNEL_0);
  ledcAttachPin(MOTOR_AIN2, LEDC_CHANNEL_1);
  ledcAttachPin(MOTOR_BIN1, LEDC_CHANNEL_2);
  ledcAttachPin(MOTOR_BIN2, LEDC_CHANNEL_3);
}
void loop()
{
  ledcAnalogWrite(LEDC_CHANNEL_1, 0);
  ledcAnalogWrite(LEDC_CHANNEL_3, 0); 
  for(uint8_t i = 0 ;i < 255 ;i++ ) 
  {
    ledcAnalogWrite(LEDC_CHANNEL_0, i);
    ledcAnalogWrite(LEDC_CHANNEL_2, i);
    delay(50);   
  }
  delay(100);
  for(uint8_t i = 255 ;i > 0 ;i-- )
  {
    ledcAnalogWrite(LEDC_CHANNEL_0, i);
    ledcAnalogWrite(LEDC_CHANNEL_2, i);
    delay(50);
  }
  
  ledcAnalogWrite(LEDC_CHANNEL_0, 0);
  ledcAnalogWrite(LEDC_CHANNEL_2, 0);
  for(uint8_t i = 0 ;i < 255 ;i++ )
  {
    ledcAnalogWrite(LEDC_CHANNEL_1, i);
    ledcAnalogWrite(LEDC_CHANNEL_3, i);
    delay(50);
  }
  delay(100);
  for(uint8_t i = 255 ;i > 0 ;i-- )
  {
    ledcAnalogWrite(LEDC_CHANNEL_1, i);
    ledcAnalogWrite(LEDC_CHANNEL_3, i);
    delay(50);
  }
  delay(100); 
}
```

::: tip 📝 NOTE
RAK17000 can also control stepper motor. The basic example code can be found on the [RAK17000 WisBlock Example Code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/IO/RAK17000_Stepper_Driver_DRV8833) for stepper motor.
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
RAK11200 requires **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/port_esp32.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak17000/quickstart/upload_esp32.png"
  width="100%"
  caption="Uploading the RAK17000 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now see that the motor will start spinning and reversing direction repeated.