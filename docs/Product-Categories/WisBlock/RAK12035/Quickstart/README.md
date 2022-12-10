---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12035. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12035/overview/RAK12035_home.png
tags:
  - quickstart
  - wisblock
  - RAK12035
prev: ../Overview/
next: ../Datasheet/
---

# RAK12035 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12035 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12023 & RAK12035 WisBlock Soil Moisture Sensor Module](https://store.rakwireless.com/products/rak12023-rak12035-wisblock-soil-moisture-sensor?utm_source=RAK12023&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12035 is a separate soil moisture sensor probe module based on the ATTINY441-SSU microcontroller from Atmel that can be connected to the [RAK12023 module](/Product-Categories/WisBlock/RAK12023/Overview/). It uses capacitive sensing to measure moisture.

Because you need to bury the RAK12035 sensor probe into the soil, the electronics on the PCB of the soil sensor, together with the cable, are covered by a shrinkable tube for additional protection from getting wet.

For more information about RAK12035, refer to the [Datasheet](../Datasheet/).

The RAK12035 module gives information about:

- Soil Moisture
- Soil Temperature

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak12023-assembly.png"
  width="60%"
  caption="RAK12035 connection to WisBlock Base"
/>

#### Recommended Depth

:::warning ⚠️ WARNING
The components on this board are NOT waterproof. A shrink tube is added for additional protection from getting wet.
:::

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/recommended-depth.png"
  width="50%"
  caption="Recommended Depth to bury the RAK12035 sensor probe"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK12023 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK12035 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/detach_module.png"
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

#### Initial Test of the RAK12035 WisBlock Module

:::warning ⚠️ IMPORTANT
Before you use the Soil Moisture sensor, you need to calibrate it. Install the example sketch for calibration. The calibration values will be saved on the RAK12035 sensor itself so that you can read them back later from the sensor. In the first step, the sensor is calibrated by reading the sensor values while the sensor is in the air. In the next step submerge the sensor in water (only to the white line on the sensor). After the calibration is finished, the example sketch will save the calibration values directly in the sensor. The value measured in the air corresponds to 0% RH, the value measured in water corresponds to 100% RH.

**REMARK**

The calibration method in air and water is not very precise. To get more precise calibration values, the calibration should be performed in dry soil and water-saturated soil. Some information about such a calibration procedure is shown in [Capacitive Soil Moisture Sensor Calibration with Arduino](https://makersportal.com/blog/2020/5/26/capacitive-soil-moisture-calibration-with-arduino). Another source for such a calibration in the soil can be found in [Calibrating Soil Moisture Sensors](https://www.ictinternational.com/casestudies/calibrating-soil-moisture-sensors/)
:::

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/sensor-bury.png"
  width="40%"
  caption="Burying the RAK12035 sensor probe into the plant soil"
/>

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Calibrating the sensor is a **MUST**. Follow first the steps on [RAK12023 Quick Start Guide](/Product-Categories/WisBlock/RAK12023/Quickstart/#software-configuration-and-example) (Upon this guide, it will teach you how to calibrate your sensor properly.) before proceeding to **STEP 3** below.

4. After following **STEP 2** on how to calibrate the sensor, copy the following sample code into your Arduino IDE.

::: details Click Here to View Example Code
```c
/**
 * @file RAK12035_Soil_Humidity.ino
 * @author Bernd Giesecke (bernd.giesecke@rakwireless.com)
 * @brief Simple example to read data from the RAK12023/RAK12035 Soil Moisture Sensor
 * @version 0.1
 * @date 2021-11-20
 *
 * @copyright Copyright (c) 2021
 *
 */
#include <Arduino.h>
#include <Wire.h>
#include "RAK12035_SoilMoisture.h" // Click here to get the library: http://librarymanager/All#RAK12035_SoilMoisture

/** Sensor */
RAK12035 sensor;

/** Set these two values after the sensor calibration was done */
uint16_t zero_val = 845;
uint16_t hundred_val = 635;

void setup()
{
	// Initialize the built in LED
	pinMode(LED_GREEN, OUTPUT);
	digitalWrite(LED_GREEN, LOW);

	// Initialize the connection status LED
	pinMode(LED_BLUE, OUTPUT);
	digitalWrite(LED_BLUE, HIGH);

	// Initialize Serial for debug output
	Serial.begin(115200);

	time_t serial_timeout = millis();
	// On nRF52840 the USB serial is not available immediately
	while (!Serial)
	{
		if ((millis() - serial_timeout) < 5000)
		{
			delay(100);
			digitalWrite(LED_GREEN, !digitalRead(LED_GREEN));
		}
		else
		{
			break;
		}
	}
	digitalWrite(LED_GREEN, LOW);

	Wire.begin();

	// Initialize sensor
	sensor.begin();

	// Get sensor firmware version
	uint8_t data = 0;
	sensor.get_sensor_version(&data);
	Serial.print("Sensor Firmware version: ");
	Serial.println(data, HEX);
	Serial.println();

	// Set the calibration values
	// Reading the saved calibration values from the sensor.
	sensor.get_dry_cal(&zero_val);
	sensor.get_wet_cal(&hundred_val);
	Serial.printf("Dry calibration value is %d\n", zero_val);
	Serial.printf("Wet calibration value is %d\n", hundred_val);
}

void loop()
{
	// Read capacitance
	uint16_t capacitance = 0;
	sensor.get_sensor_capacitance(&capacitance);
	Serial.print("Soil Moisture Capacitance: ");
	Serial.println(capacitance);

	// Read moisture in %
	// after calibration, we get the Capacitance in air and in water, like zero_val and B. zero_val means 0% and B means 100%.
	// So the humidity is humidity =  (Capacitance-A) / ((B-A)/100.0)
	uint8_t moisture = 0;
	sensor.get_sensor_moisture(&moisture);
	Serial.print("Soil Moisture humidity(%): ");
	Serial.println(moisture);

	// Read temperature
	uint16_t temperature = 0;
	sensor.get_sensor_temperature(&temperature);
	Serial.print("Soil Moisture Temperature: ");
	Serial.print(temperature / 10);
	Serial.println(" *C");
	delay(1000);
}

```
:::
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12035 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture) and this sample code in Github will work on all WisBlock Core.

Other sample code in the WisBlock Github Repository:
- [RAK12035 Calibration](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture/RAK12035_Calibration)
- [RAK12035 Change I2C Address](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture/RAK12035_Change_Address)
- [RAK12035 Low Power](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture/RAK12035_LowPower)
- [RAK12035 Soil Moisture](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12035_SoilMoisture/RAK12035_Soil_Humidity)
:::

5. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK12035 example code"
/>

6. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs, as shown in **Figure 13**. Try to bury the RAK12035 sensor probe into the soil, and you'll be able to see the soil's capacitance, moisture, and temperature.

::: tip 📝 NOTE
Before burying the RAK12035 sensor probe, following the [Recommended Depth](/Product-Categories/WisBlock/RAK12035/Quickstart/#recommended-depth) of the RAK12035 Sensor probe is **required**.
:::

<rk-img
  src="/assets/images/wisblock/rak12035/quickstart/rak12035-data.png"
  width="80%"
  caption="RAK12035 Soil Moisture sensor readings"
/>


