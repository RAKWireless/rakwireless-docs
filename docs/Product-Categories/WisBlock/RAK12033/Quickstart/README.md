---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12033. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12033/overview/RAK12033_home.png
tags:
  - quickstart
  - wisblock
  - RAK12033
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12033 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12033 WisBlock Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12033 WisBlock 6-Axis Accelerometer Sensor Module](https://store.rakwireless.com/products/rak12033-6-axis-accelerometer?utm_source=RAK12033&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005)
- Li-Ion/Li-Po battery (optional)
- Solar charger (optional)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with a gyroscope and accelerometer sensor. 

For more information about RAK12033, refer to the [Datasheet](../Datasheet/).

RAK12033 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

:::tip 📝 NOTE:
RAK12033 has two digital output lines for interrupt signal, so two input GPIOs from WisBlock Core are needed to capture these interrupts. Slot A and B use WB_IO2 which is dedicated to switching the power supply (3V3_S) to Sensor Slots. It can't be used as input.

Slots **C, D, E & F** are possible to be used if the size of the module fits in and if the slot is available, which depends on the specific type of WisBlock Base board.
:::

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak12033-assembly.png"
  width="60%"
  caption="RAK12033 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot C, D, E, and F are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak12033-mount.png"
  width="50%"
  caption="RAK12033 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12033 uses I2C communication lines and two IO pins for interrupt signals, and it can cause possible conflict, especially on some IO modules.
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

#### Initial Test of the RAK12033 WisBlock Module

1. Install the [RAKwireless Arduino BSP for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select the WisBlock Core you have.

**RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK12033_6_Axis_BasicReadings_IIM_42652.ino
   @author rakwireless.com
   @brief  Get IIM-42652 sensor data and output data on the serial port.
   @version 0.1
   @date 2021-12-28
   @copyright Copyright (c) 2021
**/

#include "RAK12033-IIM42652.h"

IIM42652 IMU;

void setup() 
{
  time_t timeout = millis();
  // Initialize Serial for debug output.
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
  Serial.println("RAK12033 Basic Reading example.");

  Wire.begin();
  if (IMU.begin() == false) 
  {
    while (1) 
    {
      Serial.println("IIM-42652 is not connected.");
      delay(5000);
    }
  }
}

void loop() 
{
  IIM42652_axis_t  accel_data;
  IIM42652_axis_t  gyro_data;
  float temp;

  float acc_x ,acc_y ,acc_z;
  float gyro_x,gyro_y,gyro_z;

  IMU.ex_idle();
  IMU.accelerometer_enable();
  IMU.gyroscope_enable();
  IMU.temperature_enable();

  delay(100);
  
  IMU.get_accel_data(&accel_data );
  IMU.get_gyro_data(&gyro_data ); 
  IMU.get_temperature(&temp );

  /*
   * ±16 g  : 2048  LSB/g 
   * ±8 g   : 4096  LSB/g 
   * ±4 g   : 8192  LSB/g 
   * ±2 g   : 16384 LSB/g 
   */
  acc_x = (float)accel_data.x / 2048;
  acc_y = (float)accel_data.y / 2048;
  acc_z = (float)accel_data.z / 2048;
    
  Serial.print("Accel X: ");
  Serial.print(acc_x);
  Serial.print("[g]  Y: ");
  Serial.print(acc_y);
  Serial.print("[g]  Z: ");
  Serial.print(acc_z);
  Serial.println("[g]");

  /*
   * ±2000 º/s    : 16.4   LSB/(º/s)
   * ±1000 º/s    : 32.8   LSB/(º/s)
   * ±500  º/s    : 65.5   LSB/(º/s)
   * ±250  º/s    : 131    LSB/(º/s)
   * ±125  º/s    : 262    LSB/(º/s)
   * ±62.5  º/s   : 524.3  LSB/(º/s)
   * ±31.25  º/s  : 1048.6 LSB/(º/s) 
   * ±15.625 º/s  : 2097.2 LSB/(º/s)
   */
  gyro_x = (float)gyro_data.x / 16.4;
  gyro_y = (float)gyro_data.y / 16.4;
  gyro_z = (float)gyro_data.z / 16.4;
  
  Serial.print("Gyro  X:");
  Serial.print(gyro_x);
  Serial.print("º/s  Y: ");
  Serial.print(gyro_y);
  Serial.print("º/s  Z: ");
  Serial.print(gyro_z);
  Serial.println("º/s");

  Serial.print("Temper : ");
  Serial.print(temp);
  Serial.println("[ºC]");

  IMU.accelerometer_disable();
  IMU.gyroscope_disable();
  IMU.temperature_disable();
  IMU.idle();
  delay(2000);
}

```
:::

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12033 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12033_6_Axis_IIM42652) and this sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [RAK12033-IIM42652](https://github.com/RAKWireless/RAK12033-IIM42652) library, as shown in **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/lib-install.png"
  width="70%"
  caption="Installing RAK12033 sensor library"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK12033 example code"
/>

6. When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 12**, then your RAK12033 is communicating with the WisBlock core properly.

<rk-img
  src="/assets/images/wisblock/rak12033/quickstart/rak12033-logs.png"
  width="70%"
  caption="RAK12033 6-Axis Accelerometer Sensor Module Data Logs"
/>
