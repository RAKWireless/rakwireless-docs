---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/indoor-air-quality-monitor.jpg
rak_desc: This guide provides a step-by-step tutorial on how to build an indoor air quality sensor with WisBlock modules.
tags:
  - Tutorial
  - WisBlock
  - RAK12037
  - RAK12039
  - RAK12047
  - RAK1906

header:
  title: Build an Indoor Air Quality Monitor with WisBlock
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 14/10/2022 08:00 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 6 years.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---


# Build an Indoor Air Quality Monitor with WisBlock

Indoor air quality monitoring is getting more and more important. Even though we all try to reduce air pollution in some areas, the air quality is not as good as it should be.

An indoor air monitor can warn if certain conditions are getting unhealthy and trigger actions like warnings or sending messages to home or building control systems to take countermeasures.

The WisBlock ecosystem now offers multiple sensors required to build an indoor air quality sensor that covers the most important values.

<rk-img

  src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/rak-4-2-inch.jpg"
  width="50%"
  caption="IAQ Monitor 4.2"
/>

**Measured value:**

  - CO2 with the RAK12037
  - Particle Matters with the RAK12039
  - VOC (volatile organic compounds) with the RAK12047
  - Temperature, humidity, and barometric pressure with the RAK1906

All four (4) sensors can be used together with our WisBlock Dual IO Base Board RAK19001 or with our new RAK19011 Dual IO Base Board combined with any of our new Power Modules.

The second gives you the freedom to select the power supply (battery, 5&nbsp;V USB, or 5-24&nbsp;V industrial supply) in your product.

<rk-img

  src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/assembly.jpg"
  width="50%"
  caption="Assembly on module slots"
/>

:::tip 📝 NOTE
All the modules are available at the [RAKwireless Store](https://store.rakwireless.com/pages/wisblock).
:::

This tutorial shows how to build an indoor air quality sensor with the WisBlock ecosystem. It shows how to read values from the four (4) different sensors, send them over LoRaWAN, and display them on an E-ink display (optional).

:::tip 📝 NOTE
The source code of this application is open source and can be downloaded from the Github repo [WisBlock-IAQ-PM-CO2-VOC-EPD](https://github.com/beegee-tokyo/WisBlock-IAQ-PM-CO2-VOC-EPD).
:::

----

## Hardware Used

| Module                                                                                  | Function                        |
| --------------------------------------------------------------------------------------- | ------------------------------- |
| [RAK4631](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Overview/)   | WisBlock Core Module            |
| [RAK19001](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19001/Overview/) | WisBlock Base Board             |
| [RAK1906](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Overview/)   | WisBlock Environment Sensor     |
| [RAK12037](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12037/Overview/) | WisBlock CO2 Sensor             |
| [RAK12039](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12039/Overview/) | WisBlock Particle Matter Sensor |
| [RAK12047](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12047/Overview/) | WisBlock VOC Sensor             |
| [RAK14000](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK14000/Overview/) | WisBlock EPD (optional)         |

----

## Software Used

<b>1. IDE </b>

  - [PlatformIO](https://platformio.org/install)
  - Alternative [Arduino IDE](https://www.arduino.cc/en/software) (requires some file name changes and manual installation of libraries)
  - [Adafruit nRF52 BSP](https://docs.platformio.org/en/latest/boards/nordicnrf52/adafruit_feather_nrf52832.html)
  - [Patch to use RAK4631 with PlatformIO](https://github.com/RAKWireless/WisBlock/tree/master/PlatformIO)

<b>2. LoRaWAN and BLE Communication </b>

  - [WisBlock-API](https://registry.platformio.org/libraries/beegee-tokyo/WisBlock-API)
  - [SX126x-Arduino LoRaWAN library](https://registry.platformio.org/libraries/beegee-tokyo/SX126x-Arduino)
  - [CayenneLPP](https://registry.platformio.org/libraries/sabas1080/CayenneLPP)
  - [ArduinoJson](https://registry.platformio.org/libraries/bblanchon/ArduinoJson)


<b> 3. Sensor Libraries</b>

  - [Adafruit BME680 Library](https://registry.platformio.org/libraries/adafruit/Adafruit%20BME680%20Library)
  - [Adafruit Unified Sensor](https://registry.platformio.org/libraries/adafruit/Adafruit%20Unified%20Sensor)
  - [Sensirion Core](https://registry.platformio.org/libraries/sensirion/Sensirion%20Core)
  - [Sensirion Gas Index Algorithm](https://registry.platformio.org/libraries/sensirion/Sensirion%20Gas%20Index%20Algorithm)
  - [Sensirion I2C SGP40](https://registry.platformio.org/libraries/sensirion/Sensirion%20I2C%20SGP40)
  - [RAK12039 PM Sensor](https://registry.platformio.org/libraries/beegee-tokyo/RAK12039_PM_Sensor)
  - [SparkFun SCD30 Arduino Library](https://registry.platformio.org/libraries/sparkfun/SparkFun%20SCD30%20Arduino%20Library)
  - [Adafruit EPD](https://registry.platformio.org/libraries/adafruit/Adafruit%20EPD)

:::tip 📝 NOTE
As this project is based on PlatformIO, the required libraries are automatically installed.
If the code is converted to be used in the Arduino IDE, all libraries must be installed manually with the Arduino IDE Library Manager.
:::


## How Does the Application Work?
The application is based on the [WisBlock-API](https://github.com/beegee-tokyo/WisBlock-API). Instead of running endless in the **`loop()`**, it is using timers and events to keep the MCU in idle/sleep mode as much as possible.

In this application, there are two (2) major events:
1. Timer-based wakeup to send the measured values over LoRaWAN and optional update of the E-ink display
2. Timer-based wakeup to read the RAK12047 VOC sensor

The first timer can be set by the user through an AT command. As the air quality status is not changing very fast, a time of 5 to 10&nbsp;minutes will be sufficient.
The second timer is required because the sensor values of the SGP40 sensor have to be fed into an algorithm that creates the VOC index. In this tutorial, the VOC measurement cycle is set to 10&nbsp;seconds. This event is only reading the sensor and feeding the algorithm. It does not transmit any data or update the display.

LoRaWAN and BLE UART are handled by the WisBlock API in the background. The setup of the LoRa/LoRaWAN credentials and settings can be done through an AT command interface over USB or BLE.

### WisBlock API Overview

<rk-img

src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/structure.png"
width=100%
caption="WisBlock API structure"
/>

## Code Structure
The application code is separated into multiple parts.

### Main Application

```
app.cpp
```

```
app.h
```

This part handles the timer-triggered wakeups to send the data packets. It initiates the sensor readings and creation of the data packet.

### Module Detection and Handling

```
module_handler.cpp
```

```
module_handler.h
```

This part is searching the I2C bus for connected modules. It makes the application very flexible, as the reading of sensor data and preparation of the data packet is automatically adapted to the modules found.

Beside the above mentioned sensors, the code supports the following sensors as well:
- [RAK1901 Temperature and Humidity Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1901/Overview)
- [RAK1902 Barometer Pressure Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1902/Overview)
- [RAK1903 Ambient Light Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1903/Overview)
- [RAK12010 Ambient Light Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12010/Overview)
- [RAK12019 UV Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12019/Overview)
- [RAK12002 RTC Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12002/Overview)

If any of these modules is found, the data packet is automatically adjusted to add the values of these sensors.

### Extended Cayenne LPP Format

```
wisblock_cayenne.cpp
```

```
wisblock_cayenne.h
```


The Cayenne LPP format is supporting only a basic set of data formats. The library CayenneLPP from Electronic Cats extends already the supported data formats. But for the air quality data, more data formats were needed to support all sensor values that are measured by this application.

### Custom AT Commands

```
user_at_cmd.cpp
```


WisBlock API can be extended with custom AT commands. In this application, the custom AT commands includes an option to enable/disable battery discharge protection and set up the optional RTC module.

----

## LoRaWAN Setup Over USB

Connect over USB to set up the LoRaWAN credentials. Use the DevEUI printed on the RAK4631. Use the AppEUI and AppKey from your LoRaWAN network server. Do NOT activate automatic join yet. As weather sensor levels are not changing very fast, it might be sufficient to set the send frequency to every 10&nbsp;minutes. The send frequency is set in seconds, so the value would be  **10 * 60 ==> 600**.

**Example AT commands:**

```LOG
AT+NWM=1
AT+NJM=1
AT+BAND=10
AT+DEVEUI=1000000000000001
AT+APPEUI=AB00AB00AB00AB00
AT+APPKEY=AB00AB00AB00AB00AB00AB00AB00AB00
AT+SENDFREQ=600
```

| Command                                      | Explanation                                                                                                                                              |
| -------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `AT+NWM=1`                                   | Set the node into LoRaWAN mode                                                                                                                           |
| `AT+NJM=1`                                   | Set network join method to OTAA                                                                                                                          |
| `AT+BAND=10`                                 | Set LoRaWAN region (here AS923-3), see [AT Command Manual](https://github.com/beegee-tokyo/WisBlock-API/blob/main/AT-Commands.md#atband) for all regions |
| `AT+DEVEUI=1000000000000001`                 | Set the device EUI, best to use the DevEUI that is printed on the label of your WisBlock Core module                                                     |
| `AT+APPEUI=AB00AB00AB00AB00`                 | Set the application EUI, required on the LoRaWAN server                                                                                                  |
| `AT+APPKEY=AB00AB00AB00AB00AB00AB00AB00AB00` | Set the application Key, used to encrypt the data packet during network join                                                                             |
| `AT+SENDFREQ=600`                            | Set the interval the sensor node will send data packets `600 == 10 x 60 seconds == 10 minutes`                                                           |

:::tip 📝 NOTE
The manual for all AT commands can be found in the [AT-Commands.md](https://github.com/beegee-tokyo/WisBlock-API/blob/main/AT-Commands.md) GitHub repo.
:::

## LoRaWAN Setup Over BLE

Use the [WisBlock Toolbox](https://play.google.com/store/apps/details?id=tk.giesecke.wisblock_toolbox) and connect it over Bluetooth with the Soil Sensor, then set up the credentials.

### Module Handlers

A separate cpp file is available for each supported module type. This makes it easy to extend the application with more modules or change the functionality of the modules. The following paragraphs give some insight into the measurement methods and code used.



## How Are the Air Quality Indices Measured?

### Bosch BME680 - RAK1906

The Bosch BME680 sensor is advertised as a gas sensor. It can measure temperature, humidity, barometric pressure, and air gas resistance. The BME680 datasheet does not reveal details about the measurement methods.

Out of these values, the Bosch IAQ index can be computed using the Bosch BSEC library. But as this library is proprietary code and there is no documentation of how the IAQ index is computed. We use this sensor only to measure the first three values (temperature, humidity, and barometric pressure). But feel free to extend the code to use the Bosch BSEQ library.

The BME680 works in measurement cycles which are started with the command **`bme.beginReading();`**. Then the sensor needs to be checked until **`bme.endReading()`** returns true. As this application is based on the WisBlock-API, which is a complete timer and event-driven, we don't want to waste MCU time and wait in a loop until the sensor has finished its measurements. Instead, the measurement is triggered when the application wakes up to send a LoRaWAN packet and the sensor values are read just before the packet is sent. The time **inbetween** is used to read the values of the other sensors and the battery status.

The used sensor values are as follows:

- Temperature in °C
- Humidity in %&nbsp;RH
- Barometric Pressure in mBar

<rk-img

src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/rak1906.png"
width=30%
caption="RAK1906"
/>

As we are not using the gas resistance sensor of the BME680, the internal gas heater of the BME680 is switched off in the **`init_rak1906()`**. In case you want to use the Bosch BSEC library, this needs to be changed. The oversampling settings of the sensor can be adjusted there as well.


```cpp
	// Set up oversampling and filter initialization
	bme.setTemperatureOversampling(BME680_OS_8X);
	bme.setHumidityOversampling(BME680_OS_2X);
	bme.setPressureOversampling(BME680_OS_4X);
	bme.setIIRFilterSize(BME680_FILTER_SIZE_3);
	// As we do not use the BSEC library here, the gas value is useless and just consumes battery. Better to switch it off
	// bme.setGasHeater(320, 150); // 320*C for 150 ms
	bme.setGasHeater(0, 0); // switch off
```

Experience showed that the BME680 needs some time for valid measurement. To avoid a longer waiting loop for the sensor data, the sensor measurement is started with **`start_rak1906`**, then the main application is doing some other sensor readings.

Finally, in **`read_rak1906()`**, the BME680 is checked for the end of its measurement cycle. Then the values are read and added to the LoRaWAN data packet. If an E-ink display is connected, the data buffer for the display is updated, as well, with the latest values.

```cpp
bool read_rak1906()
{
	time_t wait_start = millis();
	bool read_success = false;
	while ((millis() - wait_start) < 5000)
	{
		if (bme.endReading())
		{
			read_success = true;
			break;
		}
		delay(100);
	}

	if (!read_success)
	{
		MYLOG("BME", "BME680 read failed");
		return false;
	}

	g_solution_data.addRelativeHumidity(LPP_CHANNEL_HUMID_2, (float)bme.humidity);
	g_solution_data.addTemperature(LPP_CHANNEL_TEMP_2, (float)bme.temperature);
	g_solution_data.addBarometricPressure(LPP_CHANNEL_PRESS_2, (float)(bme.pressure) / 100.0);
	// g_solution_data.addAnalogInput(LPP_CHANNEL_GAS_2, (float)(bme.gas_resistance) / 1000.0);

	_last_temp_rak1906 = bme.temperature;
	_last_humid_rak1906 = bme.humidity;
	_last_pressure_rak1906 = (float)(bme.pressure) / 100.0;

#if MY_DEBUG > 0
	MYLOG("BME", "RH= %.2f T= %.2f", bme.humidity, bme.temperature);
	MYLOG("BME", "P= %.3f R= %.2f", (float)(bme.pressure) / 100.0, (float)(bme.gas_resistance) / 1000.0);
#endif

#if HAS_EPD > 0
	set_humid_rak14000(bme.humidity);
	set_temp_rak14000(bme.temperature);
	set_baro_rak14000(bme.pressure / 100.0);
#endif

	return true;
}
```

<br>

As the RAK12047 VOC sensor needs temperature and humidity values for the calculation of the VOC index, an additional function is provided that returns these values with **`get_rak1906_values()`** in an array of float values.


```cpp
void get_rak1906_values(float *values)
{
	values[0] = _last_temp_rak1906;
	values[1] = _last_humid_rak1906;
	values[2] = _last_pressure_rak1906;
}
```

### RAK12037 Sensirion SCD30 CO2 Sensor


Same as the PM sensor, the SCD30 has to be powered all the time. It has a programmable measurement interval to control the power consumption. In this example, it is set to 2&nbsp;seconds.

- The Sensirion SCD30 can measure CO2 concentrations from 400–10,000&nbsp;ppm.
- The sensor is using the NDIR measurement technology for detecting CO2.
- This sensor is using I2C interface as well. It returns:
    - CO2 concentration in PPM
    - Temperature in °C
    - Humidity in %&nbsp;RH

The last two values are used internally in the SCD30 for the calculation of the CO2 concentration.

<rk-img

src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/rak12037.png"
width=30%
caption="RAK12037"
/>

The code for the RAK12037 CO2 Sensor is quite simple. The measurement interval is set to 10&nbsp;ms. Self-calibrating is enabled and the measuring is started in the **`init_rak12037()`** call.

```cpp
	// Change number of seconds between measurements: 2 to 1800 (30 minutes), stored in non-volatile memory of SCD30
	scd30.setMeasurementInterval(10);

	// Enable self calibration
	scd30.setAutoSelfCalibration(true);

	// Start the measurements
	scd30.beginMeasuring();
```

<br>


The **`read_rak12037()`** is checking if the sensor has data available, then it is reading them and adding them to the LoRaWAN data packet. If an E-ink display is connected, the data buffer for the display is updated as well with the latest values.


```cpp
void read_rak12037(void)
{
	time_t start_time = millis();
	while (!scd30.dataAvailable())
	{
		MYLOG("SCD30", "Waiting for data");
		delay(500);
		if ((millis() - start_time) > 5000)
		{
			// timeout, no data available
			MYLOG("SCD30", "Timeout");
			return;
		}
	}

	uint16_t co2_reading = scd30.getCO2();
	float temp_reading = scd30.getTemperature();
	float humid_reading = scd30.getHumidity();

	MYLOG("SCD30", "CO2 level %dppm", co2_reading);
	MYLOG("SCD30", "Temperature %.2f", temp_reading);
	MYLOG("SCD30", "Humidity %.2f", humid_reading);

	g_solution_data.addConcentration(LPP_CHANNEL_CO2_2, co2_reading);
	g_solution_data.addTemperature(LPP_CHANNEL_CO2_Temp_2, temp_reading);
	g_solution_data.addRelativeHumidity(LPP_CHANNEL_CO2_HUMID_2, humid_reading);

#if HAS_EPD > 0
	set_co2_rak14000(co2_reading);
#endif
}
```

:::tip 📝 NOTE
As the RAK12037 is an IO module and the RAK19001 has only two IO slots, the combination of the RAK12039 PM sensor, RAK14000 EPD module, and RAK12037 is normally not possible. To get around this problem, the RAK12037 can be connected directly to the J11 pins, which provide 3.3&nbsp;V, GND, and I2C signals. A future version of the RAK12037 will offer a different solution to connect the module without using the IO slot.
:::

### RAK12039 Plantower PMSA003I Particle Matter Sensor


The Plantower PMSA003I PM sensor has to be active all the time to measure the particle matter. It can measure particles in the range of 0.3~1.0, 1.0~2.5, 2.5~10&nbsp;μm. The measurement method is laser-based [dynamic light scattering](https://en.wikipedia.org/wiki/Dynamic_light_scattering). But even if the sensor is active all the time, the measured values are only read when the application wakes up to send data. The RAK12039 PM sensor is using the I2C version of the PMSA003 sensor. This makes communication with the sensor much simpler.

The sensor returns three values:

- Concentration of particle matters with a size of 1.0&nbsp;μm
- Concentration of particle matters with a size of 2.5&nbsp;μm
- Concentration of particle matters with a size of 10&nbsp;μm

<rk-img

src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/rak12039.png"
width=30%
caption="RAK12039"
/>

The code for the RAK12039 is simple as well. **`init_rak12039()`** is just initializing the communication.

The **`read_rak12039()`** function reads the latest data and adds them to the LoRaWAN data packet. If an E-ink display is connected, the data buffer for the display is updated as well with the latest values.

```cpp
void read_rak12039(void)
{
	// RAK12039 supports only low I2C speed
	// Wire.setClock(100000);
	// Sensor on
	// digitalWrite(SET_PIN, HIGH);
	delay(300);

	if (PMSA003I.readDate(&data))
	{

		MYLOG("PMS", "PMSA003I read date success.");

		g_solution_data.addVoc_index(LPP_CHANNEL_PM_1_0, data.pm10_env);
		g_solution_data.addVoc_index(LPP_CHANNEL_PM_2_5, data.pm25_env);
		g_solution_data.addVoc_index(LPP_CHANNEL_PM_10_0, data.pm100_env);

		MYLOG("PMS", "Std PM ug/m3: PM 1.0 %d PM 2.5 %d PM 10 %d", data.pm10_standard, data.pm25_standard, data.pm100_standard);
		MYLOG("PMS", "Env PM ug/m3: PM 1.0 %d PM 2.5 %d PM 10 %d", data.pm10_env, data.pm25_env, data.pm100_env);
#if HAS_EPD == 1 || HAS_EPD == 4
		set_pm_rak14000(data.pm10_env, data.pm25_env, data.pm100_env);
#endif
	}
	else
	{
		Serial.println("PMSA003I read failed!");
	}

	// RAK12039 supports only low I2C speed
	// Wire.setClock(100000); // Wire.setClock(400000);
	// Sensor off
	// digitalWrite(SET_PIN, LOW);
	return;
}
```

:::tip 📝 NOTE
- The PMSA003I module supports only 100&nbsp;kHz I2C speed. Just make sure that the I2C speed is reduced before accessing the module.
- Also, it takes up to 5&nbsp;seconds after power up before it starts responding to the I2C bus. This is taken care off in the **`init_modules()`** I2C search function int the **`module_handler.cpp`** file.
:::

```cpp
		// RAK12039 takes up to 5 seconds before it responds on I2C
		if (address == 0x12)
		{
			// RAK12039 has extra GPIO for power control
			// On/Off control pin
			pinMode(WB_IO6, OUTPUT);
			// Sensor on
			digitalWrite(WB_IO6, HIGH);
			delay(500);
			time_t wait_sensor = millis();
			MYLOG("SCAN", "RAK12039 scan start %ld ms", millis());
			while (1)
			{
				delay(500);
				Wire.beginTransmission(address);
				error = Wire.endTransmission();
				if (error == 0)
				{
					MYLOG("SCAN", "RAK12039 answered at %ld ms", millis());
					break;
				}
				if ((millis() - wait_sensor) > 10000)
				{
					MYLOG("SCAN", "RAK12039 timeout after 10000 ms");
					break;
				}
			}
		}
```

### RAK12047 Sensirion SGP40 VOC Sensor

The Sensirion SGP40 measures the concentration of volatile organic compounds (VOC) in the air using Sensirion CMOSens® Technology. Different from the other sensors, it does not directly return a sensor value. Instead, the returned data is fed into the Sensirion Gas Index Algorithm together with temperature and humidity values. Sensirion Gas Index Algorithm software provides a VOC Index output signal calculated from the SGP40 raw signal inputs `SRAW_VOC`. A more detailed explanation of the algorithm can be found in the [Sensirion Github repo](https://github.com/Sensirion/gas-index-algorithm).

The algorithm needs some time to return reliable VOC indices. The first 100 calculated values are unreliable and are discarded by the application. As the readings from the SGP40 have to be done in a fixed and short interval (10&nbsp;seconds), it is running in a separate task that is activated by a timer. The Sensirion algorithm generates a VOC index in the range from **0 to 500**.

<rk-img

src="/assets/images/knowledge-hub/tutorials/build-an-indoor-air-quality-sensor-with-wisblock/rak12047.png"
width=30% caption="RAK12047"
/>

The code for this sensor is quite different. As mentioned, the sensor values have to be read in a fixed interval. To do this, a timer is used to wake up the MCU in defined intervals to perform a sensor reading. The timer is started at the end of the **`init_rak12047()`** initialization. It looks a little bit complicated (but it isn't) because the code supports all three WisBlock Core modules, and each module has its own timer classes.

```cpp
	// Set VOC reading interval to 10 seconds
#ifdef NRF52_SERIES
	voc_read_timer.begin(10000, voc_read_wakeup, NULL, true);
	voc_read_timer.start();
#endif
#ifdef ESP32
	voc_read_timer.attach_ms(10000, voc_read_wakeup);
#endif
#ifdef ARDUINO_ARCH_RP2040
	voc_read_timer.attach(voc_read_wakeup, (microseconds)(10000000));
#endif
```

When the timer is triggered, the function **`do_read_rak12047()`** is called, which reads the SGP40 sensor and feeds the raw values together with the temperature and humidity values to the Sensirion Gas Index Algorithm.

```cpp
void do_read_rak12047(void)
{
#if MY_DEBUG > 0
	digitalWrite(LED_BLUE, HIGH);
#endif

	uint16_t error;
	// float humidity = 0;	   // %RH
	// float temperature = 0; // degreeC
	uint16_t srawVoc = 0;
	uint16_t defaultRh = 0x8000;
	uint16_t defaultT = 0x6666;
	float t_h_values[3] = {0.0}; // temperature [0] & humidity [1] value from T&H sensor

	if (found_sensors[TEMP_ID].found_sensor)
	{
		get_rak1901_values(t_h_values);
		// MYLOG("VOC", "Rh: %.2f T: %.2f", humidity, temperature);

		if ((t_h_values[0] != 0.0) && (t_h_values[1] != 0.0))
		{
			defaultRh = (uint16_t)(t_h_values[1] * 65535 / 100);
			defaultT = (uint16_t)((t_h_values[0] + 45) * 65535 / 175);
		}
	}
	else if (found_sensors[ENV_ID].found_sensor)
	{
		get_rak1906_values(t_h_values);
		// MYLOG("VOC", "Rh: %.2f T: %.2f", humidity, temperature);

		if ((t_h_values[0] != 0.0) && (t_h_values[1] != 0.0))
		{
			defaultRh = (uint16_t)(t_h_values[1] * 65535 / 100);
			defaultT = (uint16_t)((t_h_values[0] + 45) * 65535 / 175);
		}
	}

	// 2. Measure SGP4x signals
	error = sgp40.measureRawSignal(defaultRh, defaultT,
								   srawVoc);
	MYLOG("VOC", "srawVoc: %d", srawVoc);

	// 3. Process raw signals by Gas Index Algorithm to get the VOC index values
	if (error)
	{
		errorToString(error, errorMessage, 256);
		MYLOG("VOC", "SGP40 - Error trying to execute measureRawSignals(): %s", errorMessage);
	}
	else
	{
		if (discard_counter <= 100)
		{
			// Discard the first 100 readings
			voc_algorithm.process(srawVoc);
			discard_counter++;
			MYLOG("VOC", "Discard reading %d", discard_counter);
		}
		else if (discard_counter == 101)
		{
			// First accepted reading
			voc_index = voc_algorithm.process(srawVoc);
			discard_counter++;
			MYLOG("VOC", "First good reading: %ld", voc_index);
			voc_valid = true;
		}
		else
		{
			uint32_t new_voc_index = voc_algorithm.process(srawVoc);
			voc_index = ((voc_index + new_voc_index) / 2);
			MYLOG("VOC", "VOC: %ld", voc_index);
		}
	}

#if MY_DEBUG > 0
	digitalWrite(LED_BLUE, LOW);
#endif
}
```

<br>

Before sending a LoRaWAN packet, the application calls the function **`read_rak12047()`**, which is checking if the VOC index is valid (the first 100 data is discarded) and adds the last calculated VOC index to the LoRaWAN packet.

```cpp
void read_rak12047(void)
{
	MYLOG("VOC", "Get VOC");
	if (voc_valid)
	{
		AT_PRINTF("+EVT:GET_VOC\n");
		MYLOG("VOC", "VOC Index: %ld", voc_index);

		g_solution_data.addVoc_index(LPP_CHANNEL_VOC, voc_index);
	}
	else
	{
		AT_PRINTF("+EVT:VOC_ERROR\n");
		MYLOG("VOC", "No valid VOC available");
	}
#if HAS_EPD > 0
	set_voc_rak14000((uint16_t)voc_index);
#endif
}
```
----

## LoRaWAN Packet Format

The packet data is made compatible with the extended Cayenne LPP encoding from [ElectronicCats/CayenneLPP](https://github.com/ElectronicCats/CayenneLPP).

The content of the packet depends on the modules installed on the WisBlock Base Board:

| Data                     | Channel No. | Channel ID | Length        | Comment                                                         | Required Module   | Decoded Field Name |
| ------------------------ | ----------- | ---------- | ------------- | --------------------------------------------------------------- | ----------------- | ------------------ |
| Battery value            | 1           | _**116**_  | 2&nbsp;bytes  | 0.01&nbsp;V Unsigned MSB                                        | RAK4631           | voltage_1          |
| Humidity                 | 2           | 104        | 1&nbsp;bytes  | in %&nbsp;RH                                                    | RAK1901           | humidity_2         |
| Temperature              | 3           | 103        | 2&nbsp;bytes  | in °C                                                           | RAK1901           | temperature_3      |
| Barometric Pressure      | 4           | 115        | 2&nbsp;bytes  | in hPa (mBar)                                                   | RAK1902           | barometer_4        |
| Illuminance              | 5           | 101        | 2&nbsp;bytes  | 1 lux unsigned                                                  | RAK1903           | illuminance_5      |
| Humidity 2               | 6           | 104        | 1&nbsp;bytes  | in %&nbsp;RH                                                    | RAK1906           | humidity_6         |
| Temperature 2            | 7           | 103        | 2&nbsp;bytes  | in °C                                                           | RAK1906           | temperature_7      |
| Barometric Pressure 2    | 8           | 115        | 2&nbsp;bytes  | in hPa (mBar)                                                   | RAK1906           | barometer_8        |
| Gas Resistance 2         | 9           | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed&nbsp;(kOhm)                                    | RAK1906           | analog_9           |
| GNSS stand. resolution   | 10          | 136        | 9&nbsp;bytes  | 3&nbsp;byte lon/lat 0.0001°, 3&nbsp;bytes alt 0.01&nbsp;meter   | RAK1910, RAK12500 | gps_10             |
| GNSS enhanced resolution | 10          | _**137**_  | 11&nbsp;bytes | 4&nbsp;byte lon/lat 0.000001°, 3&nbsp;bytes alt 0.01&nbsp;meter | RAK1910, RAK12500 | gps_10             |
| Soil Temperature         | 11          | 103        | 2&nbsp;bytes  | in °C                                                           | RAK12023/RAK12035 | temperature_11     |
| Soil Humidity            | 12          | 104        | 1&nbsp;bytes  | in %&nbsp;RH                                                    | RAK12023/RAK12035 | humidity_12        |
| Soil Humidity Raw        | 13          | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed                                                | RAK12023/RAK12035 | analog_in_13       |
| Soil Data Valid          | 14          | 102        | 1&nbsp;bytes  | bool                                                            | RAK12023/RAK12035 | presence_14        |
| Illuminance 2            | 15          | 101        | 2&nbsp;bytes  | 1&nbsp;lux&nbsp;unsigned                                        | RAK12010          | illuminance_15     |
| VOC                      | 16          | _**138**_  | 2&nbsp;bytes  | VOC index                                                       | RAK12047          | voc_16             |
| MQ2 Gas                  | 17          | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed                                                | RAK12004          | analog_in_17       |
| MQ2 Gas Percentage       | 18          | _**120**_  | 1&nbsp;bytes  | 1-100%&nbsp;unsigned                                            | RAK12004          | percentage_18      |
| MG812 Gas                | 19          | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed                                                | RAK12008          | analog_in_19       |
| MG812 Gas Percentage     | 20          | _**120**_  | 1&nbsp;bytes  | 1-100%&nbsp;unsigned                                            | RAK12008          | percentage_20      |
| MQ3 Alcohol Gas          | 21          | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed                                                | RAK12009          | analog_in_21       |
| MQ3 Alcohol Gas Perc.    | 22          | _**120**_  | 1&nbsp;bytes  | 1-100% unsigned                                                 | RAK12009          | percentage_22      |
| ToF distance             | 23          | 2          | 2&nbsp;bytes  | 0.01&nbsp;signed                                                | RAK12014          | analog_in_23       |
| ToF Data Valid           | 24          | 102        | 1&nbsp;bytes  | bool                                                            | RAK12014          | presence_24        |
| Gyro triggered           | 25          | _**134**_  | 6&nbsp;bytes  | 2&nbsp;bytes per axis, 0.01 °/s                                 | RAK12025          | gyrometer_25       |
| Gesture detected         | 26          | 0          | 1&nbsp;byte   | 1&nbsp;byte with id of gesture                                  | RAK14008          | digital_in_26      |
| LTR390 UVI value         | 27          | 2          | 2&nbsp;byte   | 0.01&nbsp;signed                                                | RAK12019          | analog_in_27       |
| LTR390 UVS value         | 28          | 101        | 2&nbsp;bytes  | 1&nbsp;lux&nbsp;unsigned                                        | RAK12019          | illuminance_28     |
| INA219 Current           | 29          | 2          | 2&nbsp;byte   | 0.01&nbsp;signed                                                | RAK16000          | analog_29          |
| INA219 Voltage           | 30          | 2          | 2&nbsp;byte   | 0.01&nbsp;signed                                                | RAK16000          | analog_30          |
| INA219 Power             | 31          | 2          | 2&nbsp;byte   | 0.01&nbsp;signed                                                | RAK16000          | analog_31          |
| Touchpad left            | 32          | 102        | 1&nbsp;bytes  | bool                                                            | RAK14002          | presence_32        |
| Touchpad middle          | 33          | 102        | 1&nbsp;bytes  | bool                                                            | RAK14002          | presence_33        |
| Touchpad right           | 34          | 102        | 1&nbsp;bytes  | bool                                                            | RAK14002          | presence_34        |
| SCD30 CO2 concentration  | 35          | 125        | 2&nbsp;bytes  | 1&nbsp;ppm&nbsp;unsigned                                        | RAK12037          | concentration_35   |
| SCD30 temperature        | 36          | 103        | 2&nbsp;bytes  | in °C                                                           | RAK12037          | temperature_36     |
| SCD30 humidity           | 37          | 104        | 1&nbsp;bytes  | in %&nbsp;RH                                                    | RAK12037          | humidity_37        |
| MLX90632 sensor temp     | 38          | 103        | 2&nbsp;bytes  | in °C                                                           | RAK12003          | temperature_38     |
| MLX90632 object temp     | 39          | 103        | 2&nbsp;bytes  | in °C                                                           | RAK12003          | temperature_39     |
| PM 1.0 value             | 40          | 103        | 2&nbsp;bytes  | in ug/m3                                                        | RAK12003          | voc_40             |
| PM 2.5 value             | 40          | 103        | 2&nbsp;bytes  | in ug/m3                                                        | RAK12003          | voc_41             |
| PM 10 value              | 40          | 103        | 2&nbsp;bytes  | in ug/m3                                                        | RAK12003          | voc_42             |

:::tip 📝 NOTE
- The Channel IDs in cursive are extended format and not supported by standard Cayenne LPP data decoders.
- Example decoders for TTN, Chirpstack, Helium, and Datacake can be found in the [Github repo](https://github.com/beegee-tokyo/WisBlock-IAQ-PM-CO2-VOC-EPD/tree/main/decoders).
:::

----

## E-Ink Display (Optional)

The application code can support a 4.2-in E-Ink display connected with the [RAK14000 EPD interface](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK14000/Overview). The display content is supporting two different sets of sensors:

1) **RAK1906**, **RAK12047**, and **RAK12037** - display the VOC, CO2, temperature, humidity, and barometric pressure
2) **RAK1906**, **RAK12047**, **RAK12039**, and **RAK12037** - display the VOC, CO2, PM1.0, PM2.5, PM10, temperature, humidity, and barometric pressure

:::tip 📝 NOTE
Another option is to use the RAK12002 RTC Module. If attached, the display will automatically show the date and time in the header line of the display.
:::

---

<rk-author />

