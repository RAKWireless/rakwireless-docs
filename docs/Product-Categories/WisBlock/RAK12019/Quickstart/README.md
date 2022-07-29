---
rak_desc: This contains instructions and tutorials on installing and deploying your RAK12019. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/RAK12019/overview/RAK12019_home.png
tags:
  - quickstart
  - wisblock
  - RAK12019
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12019 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12019 WisBlock UV Sensor Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12019 WisBlock UV Sensor Module](https://store.rakwireless.com/products/rak12019-wisblock-uv-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19008 WisBlock IO Extension Cable](https://store.rakwireless.com/products/wisblock-io-extension-cable-rak19008)
- [Li-Ion/LiPo battery (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-connector)
- [Solar charger (optional)](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#solar-panel-connector)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK12019 is an Ambient Light Sensor (ALS) or Ultraviolet Light Sensor (UVS), which is part of the RAKwireless WisBlock sensor series. The measured ambient light intensity and ultraviolet index are interfaced via the I2C bus making it immune to electrical noises, unlike its analog output counterpart. This module utilizes the LTR-390UV-01 sensor from Lite-On. For more information about RAK12019, refer to the [Datasheet](../Datasheet/).

RAK12019 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/connection.png"
  width="60%"
  caption="RAK12019 Connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/mounting.png"
  width="50%"
  caption="RAK12019 assembly to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/detach_module.png"
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

In this example, you will be able to see the Lux and ALS or UVS and UVI data via Serial Monitor.

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

**RAK4631 Board**
<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/selectboard4631.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**
<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/selectboard11200.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**
<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/selectboard11300.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Copy the example code below:

::: details Click Here to View Example Code
```c
/**
   @file RAK12019_UVlight_LTR390.ino
   @author rakwireless.com
   @brief Example of reading ambient light or ultraviolet light data
   @version 0.1`
   @date 2021-09-13
*/
#include <Wire.h>
#include "UVlight_LTR390.h" //Click here to get the library: http://librarymanager/All#RAK12019_LTR390

//if set LTR390_MODE_ALS,get ambient light data, if set LTR390_MODE_UVS,get ultraviolet light data.

UVlight_LTR390 ltr = UVlight_LTR390();
/*
   For device under tinted window with coated-ink of flat transmission rate at 400-600nm wavelength,
   window factor  is to  compensate light  loss due to the  lower  transmission rate from the coated-ink.
      a. WFAC = 1 for NO window / clear window glass.
      b. WFAC >1 device under tinted window glass. Calibrate under white LED.
*/
void setup()
{
	pinMode(LED_BLUE, OUTPUT);
	digitalWrite(LED_BLUE, HIGH);
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
	//Sensor power switch
	pinMode(WB_IO2, OUTPUT);
	digitalWrite(WB_IO2, HIGH);
	delay(300);

	Serial.println("RAK12019 test");
	Wire.begin();
	if (!ltr.init())
	{
		Serial.println("Couldn't find LTR sensor!");
		while (1)
			delay(10);
	}
	Serial.println("Found LTR390 sensor!");

	//if set LTR390_MODE_ALS,get ambient light data, if set LTR390_MODE_UVS,get ultraviolet light data.
	ltr.setMode(LTR390_MODE_ALS); //LTR390_MODE_UVS
	if (ltr.getMode() == LTR390_MODE_ALS)
	{
		Serial.println("In ALS mode");
	}
	else
	{
		Serial.println("In UVS mode");
	}

	ltr.setGain(LTR390_GAIN_3);
	Serial.print("Gain : ");
	switch (ltr.getGain())
	{
	case LTR390_GAIN_1:
		Serial.println(1);
		break;
	case LTR390_GAIN_3:
		Serial.println(3);
		break;
	case LTR390_GAIN_6:
		Serial.println(6);
		break;
	case LTR390_GAIN_9:
		Serial.println(9);
		break;
	case LTR390_GAIN_18:
		Serial.println(18);
		break;
	default:
		Serial.println("Failed to set gain");
		break;
	}
	ltr.setResolution(LTR390_RESOLUTION_16BIT);
	Serial.print("Integration Time (ms): ");
	switch (ltr.getResolution())
	{
	case LTR390_RESOLUTION_13BIT:
		Serial.println(13);
		break;
	case LTR390_RESOLUTION_16BIT:
		Serial.println(16);
		break;
	case LTR390_RESOLUTION_17BIT:
		Serial.println(17);
		break;
	case LTR390_RESOLUTION_18BIT:
		Serial.println(18);
		break;
	case LTR390_RESOLUTION_19BIT:
		Serial.println(19);
		break;
	case LTR390_RESOLUTION_20BIT:
		Serial.println(20);
		break;
	default:
		Serial.println("Failed to set Integration Time");
		break;
	}

	ltr.setThresholds(100, 1000); //Set the interrupt output threshold range for lower and upper.
	if (ltr.getMode() == LTR390_MODE_ALS)
	{
		ltr.configInterrupt(true, LTR390_MODE_ALS); //Configure the interrupt based on the thresholds in setThresholds()
	}
	else
	{
		ltr.configInterrupt(true, LTR390_MODE_UVS);
	}
}

void loop()
{
	if (ltr.newDataAvailable())
	{
		if (ltr.getMode() == LTR390_MODE_ALS)
		{
			Serial.printf("Lux Data:%0.2f-----Als Data:%d\r\n", ltr.getLUX(), ltr.readALS()); //calculate the lux
		}
		else
		{
			Serial.printf("Uvi Data:%0.2f-----Uvs Data:%d\r\n", ltr.getUVI(), ltr.readUVS());
		}
	}
	delay(500);
}
```
:::
:::tip 📝 NOTE:
If you experience any error in compiling the example sketch, check the updated code for the RAK12019 WisBlock UV Sensor Module that can be found on the [RAK12019 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK12019_UVlight_LTR390/RAK12019_UVlight_LTR390.ino).
:::

4. Install the required library, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/get_library.png"
  width="100%"
  caption="Getting the Library link"
/>

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/install_library.png"
  width="100%"
  caption="Installing the Library"
/>

5. Select the right Serial Port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/upload.png"
  width="100%"
  caption="Uploading the sample code"
/>

6. When you have successfully uploaded the sample code, you may open up your serial monitor as shown in **Figure 13**. You can try to experiment with the data by manipulating the light source.

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/serial_1.png"
  width="60%"
  caption="Serial Monitor reading in ALS mode"
/>

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/light_source.png"
  width="60%"
  caption="Placing the sensor under direct light source"
/>

7. You can also try to switch to UV mode by changing this line of code as shown in **Figure 15**. And see the sensor reading in Serial Monitor as shown in **Figure 16**

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/changemode.png"
  width="100%"
  caption="Switching LTR390 to UV mode"
/>

<rk-img
  src="/assets/images/wisblock/RAK12019/quickstart/serial_3.png"
  width="70%"
  caption="Serial Monitor reading in UV mode"
/>

