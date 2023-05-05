---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/setting-up-rak12002-rtc/rak12002-rtc.png
rak_desc: A step-by-step guide on how to set up RAK12002 Real-Time Clock (RTC) Module for terrain mapping.
tags:
  - RAK12002
  - Real-Time Clock
  - RTC Module
  - WisBlock
  - Terrain Mapping
  - Tutorial
header:
  title: Setting Up RAK12002 RTC Module for Terrain Mapping
  caption: by <b>DDA</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 29/10/2021 09:00 PM
---

# Setting Up RAK12002 RTC Module for Terrain Mapping

## Overview

In the [RAK12500 guide](https://news.rakwireless.com/rak12500-a-gnss-module-that-talks-to-every-satellite-insight/), we learned how to use the [RAK12500 WisBlock GNSS Location Module](https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore) to get and display GNSS data on an OLED, including the time. We were using the GNSS time to set up a Real-Time Clock, one I had on hand, by Mikroe, using our [RAK1920 WisBlock Sensor Adapter Module.](https://store.rakwireless.com/products/rak1920-sensor-adapter-module?utm_source=RAK1920&utm_medium=Document&utm_campaign=BuyFromStore) I have since received our [RAK12002 WisBlock RTC module](https://store.rakwireless.com/products/rtc-module-rak12002?utm_source=RAK12002&utm_medium=Document&utm_campaign=BuyFromStore), so we can have another look at the code and adapt the Arduino sketch to lighten the load.We're replacing a large-sih module with a 10 x 10&nbsp;mm small pill of a module making things more streamlined.

<rk-img
  src="/assets/images/knowledge-hub/learn/setting-up-rak12002-rtc/1.rak12002.png"
  width="70%"
  caption="RAK12002 RTC Module Micro Crystal RV-3028-C7"
/>

## Setting Up

At the heart of the module is an [RV-3028 C7 Real-Time Clock Module](https://www.microcrystal.com/en/products/real-time-clock-rtc-modules/rv-3028-c7/), which is optimized for extremely low power consumption. It has a wide operating voltage range of 1.1 to 5.5&nbsp;V and operates at 400&nbsp;kHz via the I2C bus interface. It has a lofty 43&nbsp;bytes of non-volatile user memory, which could be used to save basic settings, without having to add an EEPROM. Perfect for IoT and low-power requirements.

Originally, I started using the [RV-3028 C7 Arduino Library](https://github.com/constiko/RV-3028_C7-Arduino_Library), which has a rich API that reflects the capabilities of the RTC module. However, we recommend using [the Melopero library](https://github.com/melopero/Melopero_RV-3028_Arduino_Library) rather as its user EEPROM-related functions work, as opposed to RV-3028.

One thing of note is the trickle charging circuit, which allows a battery or supercapacitor connected to the VBACKUP pin to be charged from the power supply connected to the VDD pin. We took full advantage of that. In the schematics below, you can see that we have two supercapacitors, C2 and C3, connected to VBAK. By default, it uses C2 at 70 mF/3.3&nbsp;V. C3, at 11 mF/3.3&nbsp;V is reserved.

The library has two functions for this:

```c
enableTrickleCharge(uint8_t tcr = TCR_15K)
disableTrickleCharge()
```

Values for `enableTrickleCharge` are:

- `TCR_3K` for 3k&nbsp;Ω
- `TCR_5K` for 5k&nbsp;Ω
- `TCR_9K` for 9k&nbsp;Ω
- `TCR_15K` for 15k&nbsp;Ω

<rk-img
  src="/assets/images/knowledge-hub/learn/setting-up-rak12002-rtc/2.trickle-charger.png"
  width="70%"
  caption="The Trickle Charger"
/>

In real-life tests, we were able to squeeze 7 days out of the C2 supercapacitor, no pill battery required. That is quite good for such a small module.

## Time Functions

### General Functions

- `initDevice();`

### Setting/Getting the Time Functions

- `getSecond();`
- `getMinute();`
- `getHour();`
- `getWeekday();`
- `getDate();`
- `getMonth();`
- `getYear();`
- `getUnixTime();`
- `set24HourMode();`
- `set12HourMode();`
- `is12HourMode();`
- `isPM();`
- `to12HourFormat();`
- `to24HourFormat();`
- `setTime();`

### Alarm-Related Functions

- `isDateModeForAlarm();`
- `setDateModeForAlarm(flag);`
- `enableAlarm();`
- `disableAlarm();`
- `enablePeriodicTimer();`
- `disablePeriodicTimer();`
- `enablePeriodicTimeUpdate();`
- `disablePeriodicTimeUpdate();`
- `clearInterruptFlags();`

### EEPROM-Related Functions

- `readFromRegister();`
- `writeToRegister();`
- `writeToRegisters();`
- `andOrRegister();`
- `useEEPROM();`
- `isEEPROMBusy();`
- `readEEPROMRegister();`
- `writeEEPROMRegister();`

## Setting and Checking the Time

Setting the time is a little less convenient in the Melopero library. You have to use `setTime`, and contrary to RV-3208, it doesn't return a boolean letting us know whether things went well. You can't set the UNIX counter. Maybe this could be added to Melopero. Likewise, properly working EEPROM functions could maybe be ported to RV-3208. So, depending on your use case, you might have to go for one or the other.

```c
rtc.setTime(
  g_myGNSS.getSecond(), g_myGNSS.getMinute(), g_myGNSS.getHour(), g_myGNSS.getDay(),
  g_myGNSS.getTimeOfWeek(), g_myGNSS.getMonth(), g_myGNSS.getYear()
);
```

Checking the RTC time and comparing it with the GNSS time is easy:

```c
if (rtc.getMinute() != g_myGNSS.getMinute() || g_myGNSS.getHour() != rtc.getHour()) {
  Serial.println("Readjusting RTC");
  rtc.setTime(
    g_myGNSS.getSecond(), g_myGNSS.getMinute(), g_myGNSS.getHour(), g_myGNSS.getDay(),
    g_myGNSS.getTimeOfWeek(), g_myGNSS.getMonth(), g_myGNSS.getYear()
  );
}
```

## UNIX Time Counter

The UNIX Time Counter is a 32-bit counter, unsigned integer; it rolls over to `00000000h` when reaching `FFFFFFFFh`. The 4&nbsp;bytes (UNIX Time 0 to UNIX Time 3) are fully readable and writable. The counter-source clock is the digitally offset, compensated 1&nbsp;Hz tick.

The UNIX Time Counter is independent of the RTC and has some peculiarities.

During I2C write access with an access time smaller than 950&nbsp;ms, the UNIX Time 0 to UNIX Time 3 registers are blocked. Unlike setting the clock and calendar registers, after I2C STOP, a 1-Hz tick can be lost. If the I2C write access takes longer than 950&nbsp;ms the I2C bus interface is reset by the internal bus timeout function. It is recommended to reset the prescaler before setting the UNIX time(*). The 32-bit UNIX counter value itself does not change during reset.

However, while the RV-3208 library has a `bool setUNIX(uint32_t)` function to set the UNIX time (and read it with `uint32_t getUNIX()`), Melopero only has a reading function, `uint32_t getUnixTime()`.

## (*) Reset Bit Function

Again, something that's lacking in the Melopero library, although it's a TODO:

```c
//TODO:
//void reset();
// refactor code to use more andOrRegister instead of a read and a write
```

In RV-3208, it looks like this:

```c
// Bits in Control2 Register
[...]
#define CTRL2_RESET 0

[...]

void RV3028::reset() {
  setBit(RV3028_CTRL2, CTRL2_RESET);
}
```

We have provided you with all the necessary [documentation](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12002/Datasheet/) for your product and a [sample code](https://github.com/Kongduino/RAK4631_RAK12500_RAK12002_OLED).
