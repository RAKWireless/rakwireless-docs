---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13102. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak13102/RAK13102.png
tags:
  - quickstart
  - wisblock
  - RAK13102
prev: ../Overview/
next: ../Datasheet/
---

# RAK13102 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK13102 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- RAK13102
- Blues.IO Notecard (if not bundled with the RAK13102)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- GNSS and GSM Antennas
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)


#### Software

- Download and install the [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

You can integrate the RAK13102 module into your WisBlock project to extend its functionality and have cellular and location capabilities. This is ideal for tracking applications with LTE-M, NB-IoT, and GSM cellular connectivity in the area. For more information about RAK13102, refer to its [Datasheet](../Datasheet/).

The RAK13102 module can be mounted to the IO slot of the WisBlock Base and communicates to the WisBlock Core via I2C. Two antennas must be connected to the Notecard in the RAK13102 module as well, one for the GNSS antenna port and one for the cellular antenna port. An external battery (Li-Ion/LiPo 3.7–4.2&nbsp;V) is also required to power up the module properly. Optionally, you can supply the RAK13102 and WisBlock Base Board through the EX_POWER connector P1 from a regulated 5V DC source.

::: tip ⚠️ Info
The RAK13102 module and the connected WisBlock Base Board and Core module can be supplied with a regulated 5&nbsp;V DC supply through the P1 connector on the bottom. A matching connector is available with our [M8 Power Connector](https://store.rakwireless.com/products/m8-power-connector)
:::

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/ex-power.png"
  width="50%"
  caption="5V supply through M8 power connector"
/>

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/m8-power.png"
  width="30%"
  caption="M8 power connector"
/>

:::warning ⚠️ WARNING

- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and, eventually, other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.

:::

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/battery-connection.gif"
  width="35%"
  caption="WisBlock Base RAK19007 battery polarity and connection"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 4**, the locations for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK19007 module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/rak13102_mounting.png"
  width="70%"
  caption="RAK13102 connection to WisBlock Base"
/>

::: tip ⚠️ IMPORTANT
Assemble the RAK13102 module _**BEFORE**_ you plug the Blues Notecard in. Otherwise, you cannot reach the screws to fix the IO module on the BaseBoard.
:::

After the RAK13102 module is assembled on the Base Board you can connect the Blues Notecard to the RAK13102. Fix the Notecard on the RAk13102 module with the M3 screw that comes with the RAK13102 module.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/wisblock-blues-carrier.gif"
  width="35%"
  caption="Notecard assembly in the RAK13102"
/>


##### Disassembling

The procedure for disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK13102 uses I2C communication lines and one GPIO for interrupts.
:::

### Software Configuration and Example

The RAK13102 WisBlock Notecarrier Module uses I2C serial communication lines. In this example code, you will be able to communicate with the RAK13102 module. This will ensure that your RAK13102 is functional and ready for your IoT project.

#### Initial Test of the RAK13102 WisBlock Module

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have, as shown in **Figure 7** to **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

::: tip ⚠️ IMPORTANT
- Before you can use the RAK13102 and the Blues Notecard, you need to open a project in Blues Notehub.IO and get a product UID.
Follow the [Quickstart](https://dev.blues.io/quickstart/) guides provided by Blues. Make sure the product UID is saved in the NoteCard during the setup.
- To follow the Blues.IO [Quickstart](https://dev.blues.io/quickstart/), connect the USB of the RAK13102 module to your computer.
:::


2. Next, copy the following sample code into your Arduino IDE:

::: tip 📝 NOTE
If you add a RAK1906 environment sensor to the WisBlock Base Board, this example code will read the sensor values from the sensor and transmit them. Without the RAK1906, the code will send
:::

```c
//
// Copyright 2019 Blues Inc.  All rights reserved.
// Use of this source code is governed by licenses granted by the
// copyright holder including that found in the LICENSE file.
//
// This example contains the complete source for the Sensor Tutorial at dev.blues.io
// https://dev.blues.io/build/tutorials/sensor-tutorial/notecarrier-af/esp32/arduino-wiring/
//
// This tutorial requires an external Adafruit BME680 Sensor.
//

// **********************************************************************
// **********************************************************************
// **********************************************************************
// This example is adapted to work with RAKwireless WisBlock Core module
// It works with the following modules:
// WisBlock Core
//      RAK4631
//      RAK11200
//      RAK11310
// WisBlock Base Boards
//      RAK19007
//      RAK19001
// WisBlock Sensor
//      RAK1906
// **********************************************************************
// **********************************************************************
// **********************************************************************

// Include the Arduino library for the Notecard
#include <Notecard.h>               // Click to install library: http://librarymanager/All#Blues-Wireless-Notecard
#ifdef NRF52
#include <Adafruit_TinyUSB.h>
#endif
#include <Wire.h>
#include <Adafruit_BME680.h>        // Click to install library: http://librarymanager/All#Adafruit-BME680

Adafruit_BME680 bmeSensor(&Wire);

// This is the unique Product Identifier for your device
#ifndef PRODUCT_UID
#define PRODUCT_UID "" // "com.my-company.my-name:my-project"
#pragma message "PRODUCT_UID is not defined in this example. Please ensure your Notecard has a product identifier set before running this example or define it in code here. More details at https://dev.blues.io/tools-and-sdks/samples/product-uid"
#endif

#define myProductID PRODUCT_UID
Notecard notecard;

uint8_t sync_request_counter = 59;

bool has_rak1906 = false;

J *req;

char prn_buff[2048];

bool blues_send_req(void)
{
  char *json = JPrintUnformatted(req);
  Serial.printf("Card request = %s\n", json);

  notecard.sendRequest(req);

  return true;
}

// One-time Arduino initialization
void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  // Initialize Serial for debug output
  Serial.begin(115200);

  time_t serial_timeout = millis();
  // On nRF52840 the USB serial is not available immediately
  while (!Serial)
  {
    if ((millis() - serial_timeout) < 5000)
    {
      delay(100);
      digitalWrite(LED_BUILTIN, !digitalRead(LED_BUILTIN));
    }
    else
    {
      break;
    }
  }
  digitalWrite(LED_BUILTIN, LOW);

  Serial.println("**********************************************");
  Serial.println("Blues Notecard Test");
  Serial.println("**********************************************");

  notecard.setDebugOutputStream(Serial);

  // Initialize the physical I/O channel to the Notecard
  Wire.begin();
  delay(500);
  notecard.begin();

  Serial.println("**********************************************");
  Serial.println("Hub setup:");
  Serial.println("**********************************************");

  if (!bmeSensor.begin(0x76))
  {
    Serial.println("Could not find a valid BME680 sensor...");
  }
  else
  {
    Serial.println("BME680 Connected...");
    bmeSensor.setTemperatureOversampling(BME680_OS_8X);
    bmeSensor.setHumidityOversampling(BME680_OS_2X);

    has_rak1906 = true;
  }

  delay(2000);

  Serial.println("Get hub sync status:");
  // {“req”:”hub.sync.status”}
  req = notecard.newRequest("hub.sync.status");
  blues_send_req();

  Serial.println("**********************************************");
  delay(2000);

  Serial.println("Get note card status:");
  // {“req”:”card.wireless”}
  req = notecard.newRequest("card.wireless");
  blues_send_req();

  Serial.println("**********************************************");
  delay(2000);

  Serial.println("Get note card version:");
  // {“req”:”card.wireless”}
  req = notecard.newRequest("card.version");
  blues_send_req();

  Serial.println("**********************************************");
  delay(2000);
}

void loop()
{
  Serial.println("**********************************************");
  Serial.println("Get hub sync status:");
  // {“req”:”hub.sync.status”}
  req = notecard.newRequest("hub.sync.status");
  blues_send_req();

  Serial.println("**********************************************");
  Serial.println("Get hub status:");
  // {“req”:”hub.status”}
  req = notecard.newRequest("hub.status");
  blues_send_req();

  Serial.println("**********************************************");
  delay(2000);

  Serial.println("Get note card status:");
  // {“req”:”card.wireless”}
  req = notecard.newRequest("card.wireless");
  blues_send_req();

  Serial.println("**********************************************");
  delay(2000);

  float temperature, humidity, pressure;
  if (has_rak1906)
  {
    if (!bmeSensor.performReading())
    {
      Serial.println("Failed to obtain a reading...");
      delay(15000);
      return;
    }

    temperature = bmeSensor.temperature;
    humidity = bmeSensor.humidity;
    pressure = (float)bmeSensor.pressure / 100.0;

    Serial.printf("Temperature = %.2f *C\n", bmeSensor.temperature);
    Serial.printf("Humidity = %.2f %%RH\n", bmeSensor.humidity);
    Serial.printf("Pressure = %.2f mBar\n", (float)bmeSensor.pressure / 100.0);
  }
  else
  {
    temperature = 28.3;
    humidity = 65.7;
    pressure = 1008.05;
  }

  req = notecard.newRequest("note.add");
  if (req != NULL)
  {
    JAddStringToObject(req, "file", "data.qo");
    // JAddBoolToObject(req, "sync", true);

    J *body = JCreateObject();
    if (body != NULL)
    {
      JAddStringToObject(body, "sensor", "rak4631");
      JAddNumberToObject(body, "temperature", temperature);
      JAddNumberToObject(body, "humidity", humidity);
      JAddNumberToObject(body, "pressure", pressure);
      JAddItemToObject(req, "body", body);
    }

    blues_send_req();
  }

  req = NoteNewRequest("card.location");

  if (req != NULL)
  {
    blues_send_req();
  }

  sync_request_counter++;
  if (sync_request_counter == 60)
  {
    sync_request_counter = 0;
    Serial.println("Get hub sync status:");
    // {“req”:”hub.sync”}
    req = notecard.newRequest("hub.sync");
    blues_send_req();

    Serial.println("**********************************************");

    for (uint8_t check = 0; check < 6; check++)
    {
      Serial.println("Get hub status:");
      // {“req”:”hub.sync.status”}
      req = notecard.newRequest("hub.status");
      blues_send_req();

      Serial.println("**********************************************");

      delay(10000);
    }
  }
  delay(60000);
}
```

3. You can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

:::tip 📝 NOTE:
If you are using RAK11200 as WisBlock Core, you need to configure the BOOT0 pin before uploading. You need to short it to the ground then press the reset button of the WisBlock Base before releasing the BOOT0 pin. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK13102 example code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK13102 Module that can be found on the [WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/communications/Cellular/RAK13102_Blues_Module/WisBlock-Blues-Sensor).
:::

4. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the initial logs, as shown in **Figure 14**. If you do not see any logs, you can try to disconnect the USB cable and battery, then reconnect again with the battery first. If you see that the LED of the Notecard on the RAK13102 is blinking after a few seconds, the module is now initialized properly.

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/basic_log.png"
  width="100%"
  caption="RAK13102 initial logs"
/>
