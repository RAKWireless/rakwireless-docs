---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK1903. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak1903/overview/RAK1903_home.png
tags:
  - quickstart
  - wisblock
  - RAK1903
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK1903 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock Sensor RAK1903 Ambient Light board and how to program with it.

The information obtained from the OPT3001DNPR light sensor will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK1903 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK1903 WisBlock Ambient Light Sensor Module](https://store.rakwireless.com/collections/wisblock-sensor/products/rak1903-opt3001dnpr-ambient-light-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005)
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which makes it easy to build up an ambient light data acquisition system. 

For more information about RAK1903, refer to the [Datasheet](../Datasheet/).

The RAK1903 module gives us information about:

- Ambient Light

RAK1903 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT A to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak1903_assembly.png"
  width="70%"
  caption="RAK1903 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/14.wisblock-sensor-silkscreen.png"
  width="70%"
  caption="RAK1903 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1903 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
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

The RAK1903 is an ambient optical sensor board that contains an OPT3001DNPR chip. The OPT3001DNPR is a single-chip lux meter, measuring the intensity of optical as visible by the human eye. The device comprises a sensing element and an IC interface that communicates through I2C from the sensing element to the application.

#### Initial Test of the RAK1903 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK1903_Optical_OPT3001.ino
   @author rakwireless.com
   @brief Setup and read values from a opt3001 sensor
   @version 0.1
   @date 2020-12-28
   @copyright Copyright (c) 2020
**/

#include <Wire.h>
#include <ClosedCube_OPT3001.h> // Click here to get the library: http://librarymanager/All#OPT3001

// Forward declarations for functions
void printError(String text, OPT3001_ErrorCode error);

ClosedCube_OPT3001 g_opt3001;
#define OPT3001_ADDRESS 0x44


void configureSensor()
{
  OPT3001_Config newConfig;

  newConfig.RangeNumber = B1100;
  newConfig.ConvertionTime = B0;
  newConfig.Latch = B1;
  newConfig.ModeOfConversionOperation = B11;

  OPT3001_ErrorCode errorConfig = g_opt3001.writeConfig(newConfig);
  if (errorConfig != NO_ERROR)
    printError("OPT3001 configuration", errorConfig);
  else
  {
    OPT3001_Config sensorConfig = g_opt3001.readConfig();
    Serial.println("OPT3001 Current Config:");
    Serial.println("------------------------------");

    Serial.print("Conversion ready (R):");
    Serial.println(sensorConfig.ConversionReady, HEX);

    Serial.print("Conversion time (R/W):");
    Serial.println(sensorConfig.ConvertionTime, HEX);

    Serial.print("Fault count field (R/W):");
    Serial.println(sensorConfig.FaultCount, HEX);

    Serial.print("Flag high field (R-only):");
    Serial.println(sensorConfig.FlagHigh, HEX);

    Serial.print("Flag low field (R-only):");
    Serial.println(sensorConfig.FlagLow, HEX);

    Serial.print("Latch field (R/W):");
    Serial.println(sensorConfig.Latch, HEX);

    Serial.print("Mask exponent field (R/W):");
    Serial.println(sensorConfig.MaskExponent, HEX);

    Serial.print("Mode of conversion operation (R/W):");
    Serial.println(sensorConfig.ModeOfConversionOperation, HEX);

    Serial.print("Polarity field (R/W):");
    Serial.println(sensorConfig.Polarity, HEX);

    Serial.print("Overflow flag (R-only):");
    Serial.println(sensorConfig.OverflowFlag, HEX);

    Serial.print("Range number (R/W):");
    Serial.println(sensorConfig.RangeNumber, HEX);

    Serial.println("------------------------------");
  }
}

void opt3001_read_data()
{
  OPT3001 result = g_opt3001.readResult();
  if (result.error == NO_ERROR)
  {
    Serial.print("OPT3001");
    Serial.print(": ");
    Serial.print(result.lux);
    Serial.println(" lux");

    uint16_t luminosity = result.lux;
  }
  else
  {
    printError("OPT3001", result.error);
  }
}

void printResult(String text, OPT3001 result)
{
  if (result.error == NO_ERROR)
  {
    Serial.print(text);
    Serial.print(": ");
    Serial.print(result.lux);
    Serial.println(" lux");
  }
  else
  {
    printError(text, result.error);
  }
}
void printError(String text, OPT3001_ErrorCode error)
{
  Serial.print(text);
  Serial.print(": [ERROR] Code #");
  Serial.println(error);
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

	/* opt3001 init */
	g_opt3001.begin(OPT3001_ADDRESS);
	Serial.print("OPT3001 Manufacturer ID");
	Serial.println(g_opt3001.readManufacturerID());
	Serial.print("OPT3001 Device ID");
	Serial.println(g_opt3001.readDeviceID());

	configureSensor();
	printResult("High-Limit", g_opt3001.readHighLimit());
	printResult("Low-Limit", g_opt3001.readLowLimit());
}

void loop()
{
	opt3001_read_data();
	delay(1000);
}
```
:::

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK1903 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1903_Optical_OPT3001) and this sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [ClosedCube OPT3001](https://github.com/closedcube/ClosedCube_OPT3001_Arduino) library by clicking the yellow highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak1903-lib.png"
  width="100%"
  caption="Accessing the library used for RAK1903 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak1903-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK1903 Module"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK1903 example code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 13**, then your RAK1903 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/rak1903-logs.png"
  width="80%"
  caption="RAK1903 ambient light data logs"
/>


#### LoRaWAN Weather Monitoring with RAK1903

For WisBlock Core RAK4630, it has an example for [LoRaWAN Weather Monitoring](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/Weather_Monitoring) with RAK1903 Ambient Light Module. 
   
<rk-img
  src="/assets/images/wisblock/rak1903/quickstart/lorawan_weather.png"
  width="100%"
  caption="LoRaWAN Weather Monitoring example"
/>

