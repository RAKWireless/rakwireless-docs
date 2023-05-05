---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/gnss-module.png
rak_desc: A step-by-step guide on how to set up and test RAK12500 WisBlock Sensor GNSS GPS Location Module.
tags:
  - GNSS
  - GPS
  - WisBlock
  - RAK12500
  - RAK4630
  - RAK2305
  - RAK5860
  - Arduino
  - WisBlock Sensor
  - Location Sensor
  - Tutorial
header:
  title: Setting Up and Testing GNSS/GPS Module
  caption: by <b>Kongduino</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 10/26/2021 09:00 PM
---

# Setting Up and Testing RAK12500 GNSS/GPS Module

## Overview

RAK introduced [RAK12500](https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore), a GNSS module featuring the u-blox ZOE-M8Q module, which truly talks to everybody: not only does it work with GPS, GLONASS, BeiDou, and QZSS, but it also works both with Serial and I2C. The latter may be a bit surprising, considering that I2C is often slower than serial, and you need to parse a whole lot of NMEA sentences. But, the [SparkFun library](https://github.com/sparkfun/SparkFun_u-blox_GNSS_Arduino_Library) takes care of everything and provided you with a rich API.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/rak12500.png" width="60%">
</p>

To help you get started, we have provided you with all the necessary [documentation](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12500/Overview/) for your product and a [code example](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK12500_GPS_ZOE-M8Q/RAK12500_GPS_ZOE-M8Q_IIC/RAK12500_GPS_ZOE-M8Q_IIC.ino).

One cool thing about GPS and the like is that they also carry the time, UTC. So, even without a real-time clock, you can maintain fairly accurate time, albeit in the UTC timezone. This can be useful when logging data (or sending it via LoRa). You can recalculate the proper local time using a library like [Timezone_Generic](https://github.com/khoih-prog/Timezone_Generic) or semi-manually.

I am in Hong Kong, GMT + 7, with no summer/winter time, so it is pretty easy. (You may see different results.) And once you get a fix, the GNSS module's RTC keeps the time updated, even if you have no satellites in view, as long as it is powered on.

Having your location is useful when you're doing LoRa distance tests and geolocation: when you get a ping, you create a log entry, with the time and coordinates, and you can also display (and log) the distance with the haversine formula. I've been using this to calculate the distance between the sender and the receiver. My senders add the "home" location to their json packets.

### Altitude and BM(PE)280

But there's something else I've been making great use of that's not related to distance testing. In Hong Kong, the Observatory, HKO, has a [poor-man's API](https://www.hko.gov.hk/textonly/v2/forecast/text_readings_e.htm) for data from their stations. So, if you're in Hong Kong and using a BMP280 or BME280 like me, you'll get pressure from the device. Most libraries offer a faulty function to calculate altitude. It is based on an artificial Mean Sea Level Pressure, which probably has nothing to do with reality.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/sea-level.png" width="40%">
</p>

I explained this in [my PR for a fix for SeeedStudio's BMP280 library](https://github.com/Seeed-Studio/Grove_BMP280/issues/6#issuecomment-795108710) – noting that it was the case for BME280, but they never fixed it in the other library.

So, now that I had an accurate method for calculating altitude, I needed a reference MSL Pressure to work. This is where having the haversine formula comes into play: with the location of all HKO stations known, it is child's play to decide which station is closest to you and get that station's MSL Pressure from the text version. This requires an Internet connection – which isn't available on a [RAK4630](https://store.rakwireless.com/products/rak4630-wisduo-lpwan-module?utm_source=RAK4630Module&utm_medium=Document&utm_campaign=BuyFromStore), but we have a couple of solutions: either add a [RAK2305 WisBlock Wi-Fi Interface Module](https://store.rakwireless.com/products/rak2305-wi-fi-extension-board?utm_source=RAK2305&utm_medium=Document&utm_campaign=BuyFromStore), which gives you WiFi, or a [RAK5860 WisBlock NB-IoT Interface Module](https://store.rakwireless.com/products/rak5860-lte-nb-iot-extension-board?utm_source=RAK5860&utm_medium=Document&utm_campaign=BuyFromStore) for NB-IoT. The latter module also gives you GNSS, so that's a bit overkill.

I took a slightly different approach, using a BLE connection to my phone and an Android Cordova app to log the pings and provide services to the device, such as getting MSL Pressure from HKO, time sync, GNSS when the device lacks a module, and so on. This may be discussed in another article – for now, we're talking RAK12500.

## Setting Up

1. Install the GNSS library.

```c
#include <Wire.h> // Needed for I2C to GNSS
#include <SparkFun_u-blox_GNSS_Arduino_Library.h>
// http://librarymanager/All#SparkFun_u-blox_GNSS

```

I'm quoting first the code from the example mentioned above because there's a neat trick in recent versions of the Arduino IDE. If you make a comment with an HTTP link starting with http://librarymanager/All#SparkFun_u-blox_GNSS, followed by the name of the library, or a good search term, it opens the library manager for you and searches. As you can see below, there are actually two libraries with the same name – the first is labeled DEPRECATED. Install the other one.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/lib.png" width="60%">
</p>

2. When this is installed, you can start coding. You need to instantiate a GNSS object, and in setup(), initialize it:

```c
SFE_UBLOX_GNSS g_myGNSS;
void setup() {
    pinMode(WB_IO2, OUTPUT);
    digitalWrite(WB_IO2, 0);
    delay(1000);
    digitalWrite(WB_IO2, 1);
    delay(1000);
    // This turns on the device on slots A/B
    [...]
    if (g_myGNSS.begin() == false) {
    //Connect to the u-blox module using Wire port
    Serial.println(F("u-blox GNSS not detected at default I2C address. Please check wiring. Freezing. oled.println(F("u-blox GNSS not detected.\nCheck wiring.\nFreezing."));
    while (1);
	}

    g_myGNSS.setI2COutput(COM_TYPE_UBX);
    // Sets the I2C port to output UBX only (turns off NMEA noise)
    g_myGNSS.saveConfigSelective(VAL_CFG_SUBSEC_IOPORT);
    // Saves (only) the communications port settings to flash and BBR

```

3. In loop(), whenever you are ready to get coordinates and other satellite information, grab the data from the module. As mentioned, the library does all the parsing for you. You just need to get the information you want. SIV is very important: if it's zero, there are no available GNSS signals, but the time might still be accurate, which can be verified with `getTimeValid()`.

```c
long latitude = g_myGNSS.getLatitude();
long longitude = g_myGNSS.getLongitude();
long altitude = g_myGNSS.getAltitude();
long speed = g_myGNSS.getGroundSpeed();
long heading = g_myGNSS.getHeading();
byte SIV = g_myGNSS.getSIV();
// Satellites In View: how many satellites the module is getting a fix from
bool isTimeValid = g_myGNSS.getTimeValid();
// Do we have valid datetime info?

```
4. We have a WisBlock RTC module, [RAK12002](https://store.rakwireless.com/products/rtc-module-rak12002?utm_source=RAK12002&utm_medium=Document&utm_campaign=BuyFromStore), but I haven't received it yet, so I was thinking I should introduce instead a module I do have, the magnifico one-stop-shop WisBlock Sensor Adapter Module, [RAK1920](https://store.rakwireless.com/products/rak1920-sensor-adapter-module?utm_source=RAK1920&utm_medium=Document&utm_campaign=BuyFromStore).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/rak1920.png" width="60%">
</p>

You need to connect a Grove module or two. The following can be used:
- I2C or one-wire or two-wire
- Adafruit's Stemma, aka Sparkfun Qwiic
- Mikroe sensor, with their weird but convenient connector reminiscent of [Zigbee](https://news.rakwireless.com/tag/zigbee/). This is what we'll use for this case.

5. Previously, I did a survey of the competition, which means I have sensors from various companies, including a Mikroe RTC 10 Click. Let's use this today.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/assembly.png" width="70%">
</p>

6. The little package in front is a [RAK15000](https://store.rakwireless.com/products/wisblock-eeprom-module-rak15000?utm_source=WisBlockRAK15000&utm_medium=Document&utm_campaign=BuyFromStore), an EEPROM module. This will come in handy when we reach a level where we need to store preferences and other data. I am porting right now the [Minimal_LoRa firmware](https://github.com/Kongduino/BastWAN_Minimal_LoRa) I wrote for [BastWAN](https://store.rakwireless.com/products/rak3244-bastwan-breakout-board), and this EEPROM module will be perfect for this.

In between, the code is [on GitHub](https://github.com/Kongduino/RAK4631_RAK12500_GPS_ZOE-M8Q_I2C_OLED). Below is the image of it in action. The altitude is a bit off, later on it recalibrated itself to 157 meters, which sounds just about right. It had 12 SIV, which is probably the most I ever had.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/setting-up-and-testing-rak12500/testing.png" width="60%">
</p>
