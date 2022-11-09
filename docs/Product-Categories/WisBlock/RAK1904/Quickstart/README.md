---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK1904. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak1904/overview/RAK1904_home.png
tags:
  - quickstart
  - wisblock
  - RAK1904
prev: ../Overview/
next: ../Datasheet/
---

# RAK1904 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK1904 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK1904 WisBlock 3-axis Acceleration Sensor Module](https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005?utm_source=RAK19005&utm_medium=Document&utm_campaign=BuyFromStore)
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with an acceleration sensor.

For more information about RAK1904, refer to the [Datasheet](../Datasheet/).

The RAK1904 module gives us information about:

- 6D/4D orientation detection
- Free-fall detection
- Motion detection

RAK1904 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT A to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak1904_assembly.png"
  width="70%"
  caption="RAK1904 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/f2_rak1904_mounting.png"
  width="70%"
  caption="RAK1904 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1904 uses I2C communication lines, and it can cause possible conflict especially on some IO modules.
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

The RAK1904 is an acceleration sensor board that contains a LIS3DH chip. The LIS3DH  is an ultra-low-power high-performance three-axis linear accelerometer belonging to the “nano” family, with digital I2C/SPI serial interface standard output.

#### Initial Test of the RAK1904 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK1904_Accelerate_LIS3DH.ino
   @author rakwireless.com
   @brief Setup and read values from a lis3dh sensor
   @version 0.1
   @date 2020-12-28
   @copyright Copyright (c) 2020
**/


#include <Arduino.h>
#include "SparkFunLIS3DH.h" //http://librarymanager/All#SparkFun-LIS3DH
#include <Wire.h>

LIS3DH SensorTwo(I2C_MODE, 0x18);

void lis3dh_read_data()
{
  // read the sensor value
  uint8_t cnt = 0;

  Serial.print(" X(g) = ");
  Serial.println(SensorTwo.readFloatAccelX(), 4);
  Serial.print(" Y(g) = ");
  Serial.println(SensorTwo.readFloatAccelY(), 4);
  Serial.print(" Z(g)= ");
  Serial.println(SensorTwo.readFloatAccelZ(), 4);
}
void setup()
{
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

	if (SensorTwo.begin() != 0)
	{
		Serial.println("Problem starting the sensor at 0x18.");
	}
	else
	{
		Serial.println("Sensor at 0x18 started.");
		// Set low power mode
		uint8_t data_to_write = 0;
		SensorTwo.readRegister(&data_to_write, LIS3DH_CTRL_REG1);
		data_to_write |= 0x08;
		SensorTwo.writeRegister(LIS3DH_CTRL_REG1, data_to_write);
		delay(100);

		data_to_write = 0;
		SensorTwo.readRegister(&data_to_write, 0x1E);
		data_to_write |= 0x90;
		SensorTwo.writeRegister(0x1E, data_to_write);
		delay(100);
	}
	Serial.println("enter !");
}

void loop()
{
	lis3dh_read_data();
	delay(1000);
}
```
:::

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK1904 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1904_Accelerate_LIS3DH) and this sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [SparkFun LIS3DH](https://github.com/sparkfun/SparkFun_LIS3DH_Arduino_Library) library by clicking the yellow-highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/sparkfun_installed.png"
  width="100%"
  caption="Installing the compatible library for RAK1904 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/sparkfun_library.png"
  width="100%"
  caption="Accessing the library used for RAK1904 Module"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1904 example code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 13**, then your RAK1904 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1904/quickstart/acceleration_logs.png"
  width="100%"
  caption="RAK1904 acceleration sensor data logs"
/>

#### Usage of RAK1904 in GPS Tracker Over LoRaWAN Example

For WisBlock Core RAK4630, it has an example for [GPS Tracker over LoRaWAN](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/GPS_Tracker) with RAK1904 acceleration sensor board.



