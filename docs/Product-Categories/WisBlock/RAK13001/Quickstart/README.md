---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
tags:
  - quickstart
  - wisblock
  - RAK13001
prev: ../Overview/
next: ../Datasheet/
---


# RAK13001 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13001 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13001 WisBlock Relay IO Module](https://store.rakwireless.com/products/relay-io-rak13001?utm_source=RAK13001&utm_medium=Document&utm_campaign=BuyFromStore)
- [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- LED
- 1&nbsp;kΩ Resistor

#### Software

##### Arduino

- You need to download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Block Diagram

The RAK13001 uses one relay to isolate the output of MCU. The dielectric strength between coil and contacts of a relay is 4000&nbsp;VAC 1min.

For input, RAK13001 uses an opto-couple as isolation, and it supports wet contact as default. The rating of input is 12&nbsp;V-24&nbsp;VDC. It also can be configured as dry contact by reworking some resistors on the PCB module as instructed in the [datasheet](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13001/Datasheet/#hardware). The relay has a maximum rating of 130&nbsp;VAC / 30&nbsp;VDC.


<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/block-diagram.png"
  width="70%"
  caption="RAK13001 Block Diagram"
/>

:::warning ⚠️ WARNING
<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/warning.png"
  width="90%"
  caption="Safety Precaution"
/>
:::

### Hardware Setup

RAK13001 is a WisBlock Interface module that extends the WisBlock system to be used on isolated digital input and output applications. There is one digital output that is isolated by an electromechanical relay which is used to programmatically switch on/off devices operating at high voltage or current applications and one digital input isolated by an opto-couple. The isolated input can be configured as wet contact (default mode) or dry contact.

For more information about RAK13001, refer to the [Datasheet](../Datasheet/).

#### Pin Definition

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak13001-pinout.png"
  width="30%"
  caption="RAK13001 Pin Definition"
/>

::: tip 📝 NOTE
- **NO1** and **NO2** are Output contacts for the Relay.
- **K1** and **K2** are Input contacts for the Opto-coupler.
:::

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK13001 module can be mounted on the IO slot of the WisBlock Base board as shown in **Figure 4**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK13001 mounting connection to WisBlock Base module"
/>

##### RAK13001 Connector Crimping Mechanism

The RAK13001 features a fast-crimping terminal connector to simplify and ensure the wiring process on the fields. The fast-crimping terminal can support cable with a width between 20&nbsp;AWG to 24&nbsp;AWG. The usual stripping length is around 6 to 7&nbsp;mm.

As shown in **Figure 5**, during the crimping process, you should first press down and maintain the spring head of the crimping terminal firmly, then insert the stripped cable head into the corresponding connector’s hole. Once inserted correctly, release the spring head, and the crimping process is completed.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/crimping_process.png"
  width="40%"
  caption="RAK13001 Module Connector"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 8**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires are matching the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

In our example, you will be using the relay as wet contact. Before connecting high voltage modules to the RAK13001, make sure to follow safety precautions.

For RAK13001, the accessible pin assignments are defined as follows in the Arduino IDE:

- `WB_IO3` for Optocoupler Input pin
- `WB_IO4` for Relay Output pin

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK13001 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13001/Quickstart/#rak13001-in-rak4631-wisblock-core-guide)
- [RAK13001 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13001/Quickstart/#rak13001-in-rak11200-wisblock-core-guide)
- [RAK13001 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK13001/Quickstart/#rak13001-in-rak11310-wisblock-core-guide)

#### RAK13001 in RAK4631 WisBlock Core Guide

##### Arduino Setup

**Figure 9** is an illustration on how to use the RAK13001 relay for switching applications. You can connect any module to the RAK13001 as long as it operates on its recommended voltage rating.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak13001-example.png"
  width="50%"
  caption="RAK13001 switching the LED"
/>

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK13001_Relay_OUT_Optocoupled_IN.ino
   @author rakwireless.com
   @brief Relay output optocoupler input.
   @version 0.1
   @date 2021-3-18
   @copyright Copyright (c) 2021
**/

#define OC_PIN    WB_IO3
#define RELAY_PIN WB_IO4

void setup()
{
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

  pinMode(RELAY_PIN,OUTPUT);
  pinMode(OC_PIN,INPUT);
}

void loop()
{
  static uint8_t count=0;
  count++;
  if(count == 5)
  {
    digitalWrite( RELAY_PIN , LOW);
  }
  if(count == 10)
  {
    count=0;
    digitalWrite( RELAY_PIN , HIGH);
  }

  if(digitalRead(OC_PIN) == LOW)
  {
    Serial.println("Optocoupled PIN IN Low");
  }

  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK13001 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13001_Relay_OUT_Optocoupled_IN).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 11** and **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK13001 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be to see that the RAK13001 Relay module switches the LED on and off every 5 seconds. You'll also be able to hear clicking sounds from the RAK13001 module which means that the relay is switching.

#### RAK13001 in RAK11200 WisBlock Core Guide

##### Arduino Setup

**Figure 13** is an illustration on how to use the RAK13001 relay for switching applications. You can connect any module to the RAK13001 as long as it operates on its recommended voltage rating.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak13001-example.png"
  width="50%"
  caption="RAK13001 switching the LED"
/>

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK13001_Relay_OUT_Optocoupled_IN.ino
   @author rakwireless.com
   @brief Relay output optocoupler input.
   @version 0.1
   @date 2021-3-18
   @copyright Copyright (c) 2021
**/

#define OC_PIN    WB_IO3
#define RELAY_PIN WB_IO4

void setup()
{
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

  pinMode(RELAY_PIN,OUTPUT);
  pinMode(OC_PIN,INPUT);
}

void loop()
{
  static uint8_t count=0;
  count++;
  if(count == 5)
  {
    digitalWrite( RELAY_PIN , LOW);
  }
  if(count == 10)
  {
    count=0;
    digitalWrite( RELAY_PIN , HIGH);
  }

  if(digitalRead(OC_PIN) == LOW)
  {
    Serial.println("Optocoupled PIN IN Low");
  }

  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK13001 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13001_Relay_OUT_Optocoupled_IN).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 15** and **Figure 16**.

::: tip 📝 NOTE
RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 quick start guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11200-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11200-upload.png"
  width="100%"
  caption="Uploading the RAK13001 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be to see that the RAK13001 Relay module switches the LED on and off every 5 seconds. You'll also be able to hear clicking sounds from the RAK13001 module which means that the relay is switching.

#### RAK13001 in RAK11310 WisBlock Core Guide

##### Arduino Setup

**Figure 17** is an illustration on how to use the RAK13001 relay for switching applications. You can connect any module to the RAK13001 as long as it operates on its recommended voltage rating.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak13001-example.png"
  width="50%"
  caption="RAK13001 switching the LED"
/>

1. First, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK13001_Relay_OUT_Optocoupled_IN.ino
   @author rakwireless.com
   @brief Relay output optocoupler input.
   @version 0.1
   @date 2021-3-18
   @copyright Copyright (c) 2021
**/

#define OC_PIN    WB_IO3
#define RELAY_PIN WB_IO4

void setup()
{
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

  pinMode(RELAY_PIN,OUTPUT);
  pinMode(OC_PIN,INPUT);
}

void loop()
{
  static uint8_t count=0;
  count++;
  if(count == 5)
  {
    digitalWrite( RELAY_PIN , LOW);
  }
  if(count == 10)
  {
    count=0;
    digitalWrite( RELAY_PIN , HIGH);
  }

  if(digitalRead(OC_PIN) == LOW)
  {
    Serial.println("Optocoupled PIN IN Low");
  }

  delay(1000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK13001 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13001_Relay_OUT_Optocoupled_IN).
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 19** and **Figure 20**.

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11310-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/rak11310-upload.png"
  width="100%"
  caption="Uploading the RAK13001 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be to see that the RAK13001 Relay module switches the LED on and off every 5 seconds. You'll also be able to hear clicking sounds from the RAK13001 module which means that the relay is switching.
