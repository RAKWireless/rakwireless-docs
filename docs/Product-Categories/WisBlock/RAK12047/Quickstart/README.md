---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12047. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12047/RAK12047.png
tags:
  - quickstart
  - wisblock
  - RAK12047
prev: ../Overview/
next: ../Datasheet/
---

# RAK12047 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12047 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12047 WisBlock VOC Sensor Module](https://store.rakwireless.com/products/rak12047-voc-sensor-sensirion-sgp40?utm_source=RAK12047&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- Install the RAKwireless Arduino BSP and add the RAKwireless Core boards to your **Arduino Boards Manager**. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module, which makes it easy to build up an air quality monitoring data acquisition system.

For more information about the RAK12047, refer to the [Datasheet](../Datasheet/).

RAK12047 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT A to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak12047-assembly.png"
  width="60%"
  caption="RAK12047 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, D, E, and F are properly marked by silkscreen. Slots C and D are located on the bottom of WisBlock Base. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak12047_mounting.png"
  width="50%"
  caption="RAK12047 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12047 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

#### Initial Test of the RAK12047 WisBlock Module

1. Install the [RAKwireless Arduino BSPs for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select the WisBlock Core you have.

**RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK12047_SGP40_GetVOCIndex.ino
   @author rakwireless.com
   @brief Get the VOC index data from the sensor SGP40 and print it out through the serial port.
          The voc index can directly indicate the quality of the air. The higher the value, the worse the air quality.
   @version 0.1
   @date 2022-1-22
   @copyright Copyright (c) 2020
**/

#include <SensirionI2CSgp40.h> // Click here to get the library: http://librarymanager/All#SensirionI2CSgp40
#include <Wire.h>

SensirionI2CSgp40 sgp40;

void setup()
{
  uint16_t error;
  char errorMessage[256];
  uint16_t serialNumber[3];
  uint8_t serialNumberSize = 3;

  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

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

  Serial.println("RAK12047 SGP40 example");

  Wire.begin();
  sgp40.begin(Wire);

  error = sgp40.getSerialNumber(serialNumber, serialNumberSize);
  if (error)
  {
    Serial.print("Error trying to execute getSerialNumber(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
  else
  {
    Serial.print("Serial Number:");
    Serial.print("0x");
    for (size_t i = 0; i < serialNumberSize; i++)
    {
      uint16_t value = serialNumber[i];
      Serial.print(value < 4096 ? "0" : "");
      Serial.print(value < 256 ? "0" : "");
      Serial.print(value < 16 ? "0" : "");
      Serial.print(value, HEX);
    }
    Serial.println();
  }

  uint16_t testResult;
  error = sgp40.executeSelfTest(testResult);
  if (error)
  {
    Serial.print("Error trying to execute executeSelfTest(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
  else if (testResult != 0xD400)
  {
    Serial.print("executeSelfTest failed with error: ");
    Serial.println(testResult);
  }
}

void loop()
{
  uint16_t  error;
  char      errorMessage[256];
  uint16_t  srawVoc   = 0;
  float     vocIndex  = 0;
  /*
   * @brief Set the relative humidity and temperature in the current environment.
   *        Temperature and humidity calibration has been performed inside the sensor.
   *        RH/ticks=RH/%×65535/100
   *        T/ticks=(T/°C + 45)×65535/175
   */
  uint16_t  defaultRh = 0x8000;  // 50 %RH
  uint16_t  defaultT  = 0x6666;  // 25 ℃

  delay(1000);

  error = sgp40.measureRawSignal(defaultRh, defaultT, srawVoc);
  if (error)
  {
    Serial.print("Error trying to execute measureRawSignal(): ");
    errorToString(error, errorMessage, 256);
    Serial.println(errorMessage);
  }
  else
  {
    Serial.print("SRAW_VOC:");
    Serial.print(srawVoc);
    vocIndex = (float)srawVoc/131.07 ;

   /* VOC index.
    * The voc index can directly indicate the quality of the air. The higher the value, the worse the air quality.
    *   0-100，no need to ventilate,purify.
    *   100-200，no need to ventilate,purify.
    *   200-400，ventilate,purify.
    *   400-500，ventilate,purify intensely.
    */
    Serial.print("  VOC Index:");
    Serial.println(vocIndex);
  }
}
```
:::

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12047 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK12047_VOC_GetVOCIndex_SGP40) and this sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [Sensirion SGP40](https://github.com/sensirion/arduino-i2c-sgp40) library by clicking the link highlighted in yellow, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak12047-lib.png"
  width="100%"
  caption="Accessing the library used for RAK12047 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/lib-install.png"
  width="70%"
  caption="Installing the compatible library for RAK12047 Module"
/>

During the installation, you will be asked to install the other libraries. Install it as well (optional).

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/other-lib.png"
  width="70%"
  caption="Installing other optional Libraries"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK12047 example code"
/>

6.  When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 14**, then your RAK12047 is communicating with the WisBlock core properly.

<rk-img
  src="/assets/images/wisblock/rak12047/quickstart/rak12047-data.png"
  width="70%"
  caption="RAK12047 VOC Sensor Module data logs"
/>