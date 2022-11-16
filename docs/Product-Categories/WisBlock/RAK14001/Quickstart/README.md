---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK14001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak14001/overview/RAK14001_home.png
tags:
  - quickstart
  - wisblock
  - RAK14001
prev: ../Overview/
next: ../Datasheet/
---

# RAK14001 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK14001 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK14001 WisBlock RGB LED Module](https://store.rakwireless.com/products/rgb-led-module-rak14001?_pos=5&_sid=3690f936d&_ss=r&variant=40102966067398?utm_source=RAK14001&utm_medium=Document&utm_campaign=BuyFromStore)
- [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

##### Arduino

- You need to download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK14001 is an RGB LED module that is capable of driving RGB LEDs with up to 20&nbsp;mA per segment via the I2C interface. The main component of this module is the NCP5623B from On Semiconductors. This IC has a built−in DC/DC converter that works as a high-efficiency charge pump providing the required DC voltage for all three LED segments. There is also an IREF pin that provides the reference current based on the internal band−gap voltage reference to control the output current flowing in the LED.

For more information about RAK14001, refer to the [Datasheet](../Datasheet/).

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK14001 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 1**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK14001 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 4**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

Now, you can connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

In our example, you will be using the PWM technology to adjust the brightness of the RAK14001 RGB LED Module.

For RAK14001, the accessible pin assignment is defined as follows in the Arduino IDE:

- `WB_IO6` for RGB Digital Output pin

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK14001 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14001/Quickstart/#rak14001-in-rak4631-wisblock-core-guide)
- [RAK14001 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14001/Quickstart/#rak14001-in-rak11200-wisblock-core-guide)
- [RAK14001 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14001/Quickstart/#rak14001-in-rak11310-wisblock-core-guide)

#### RAK14001 in RAK4631 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
#include <Wire.h>
#include <NCP5623.h>

NCP5623 rgb;

void setup() {
  // enable RAK14001
  pinMode(WB_IO6, OUTPUT);
  digitalWrite(WB_IO6, HIGH);

  // waits for input in serial monitor
  Serial.begin(115200);
  uint32_t t = millis();
  uint32_t timeout = 5000;
  while (!Serial)
  {
    if (millis() - t > timeout)
      break;
  }

  // If using Native I2C
  Wire.begin();
  Wire.setClock(100000);

  Serial.println("RAK14001 RGB LED Test");

  if (!rgb.begin())
  {
    Serial.println("RAK14001 not found on the I2C line");
    while (1);
  }
  else
  {
    Serial.println("RAK14001 Found. Beginning execution");
  }
}

/**
 * LED light up Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualLightUp(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingUpEnd(stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

/**
 * LED dark down Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualDarkDown(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingDownEnd(31-stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

void loop() {
  // RED
  gradualLightUp(100, 0, 0, 30, 100);
  gradualDarkDown(100, 0, 0, 30, 100);

  // GREEN
  gradualLightUp(0, 100, 0, 30, 100);
  gradualDarkDown(0, 100, 0, 30, 100);

  // BLUE
  gradualLightUp(0, 0, 100, 30, 100);
  gradualDarkDown(0, 0, 100, 30, 100);

  // YELLOW
  gradualLightUp(100, 100, 0, 30, 100);
  gradualDarkDown(100, 100, 0, 30, 100);

  // PURPLE
  gradualLightUp(100, 0, 255, 30, 100);
  gradualDarkDown(100, 0, 255, 30, 100);

  // CYAN
  gradualLightUp(0, 100, 100, 30, 100);
  gradualDarkDown(0, 100, 100, 30, 100);

  // WHITE
  gradualLightUp(100, 100, 100, 30, 100);
  gradualDarkDown(100, 100, 100, 30, 100);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the following:

 - [RAK14001 Gradual Dimming WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_GradualDimming/RAK14001_NCP5623_GradualDimming.ino)
 - [RAK14001 RGB Cycle WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_RGBCycle/RAK14001_NCP5623_RGBCycle.ino)
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 6** and **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK14001 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to see the RAK14001 RGB LED Module emits various colors of light. The three primary colors—red, green, and blue—are mixed to compose all kinds of colors by brightness, so you can see colorful light that gradually dim.

#### RAK14001 in RAK11200 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. Next, add the [RAK14001-NCP5623-Library](https://github.com/RAKWireless/RAK14001-NCP5623-Library) then copy the following sample code into your Arduino IDE.

```c
#include <Wire.h>
#include <NCP5623.h>

NCP5623 rgb;

void setup() {
  // enable RAK14001
  pinMode(WB_IO6, OUTPUT);
  digitalWrite(WB_IO6, HIGH);

  // waits for input in serial monitor
  Serial.begin(115200);
  uint32_t t = millis();
  uint32_t timeout = 5000;
  while (!Serial)
  {
    if (millis() - t > timeout)
      break;
  }

  // If using Native I2C
  Wire.begin();
  Wire.setClock(100000);

  Serial.println("RAK14001 RGB LED Test");

  if (!rgb.begin())
  {
    Serial.println("RAK14001 not found on the I2C line");
    while (1);
  }
  else
  {
    Serial.println("RAK14001 Found. Beginning execution");
  }
}

/**
 * LED light up Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualLightUp(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingUpEnd(stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

/**
 * LED dark down Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualDarkDown(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingDownEnd(31-stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

void loop() {
  // RED
  gradualLightUp(100, 0, 0, 30, 100);
  gradualDarkDown(100, 0, 0, 30, 100);

  // GREEN
  gradualLightUp(0, 100, 0, 30, 100);
  gradualDarkDown(0, 100, 0, 30, 100);

  // BLUE
  gradualLightUp(0, 0, 100, 30, 100);
  gradualDarkDown(0, 0, 100, 30, 100);

  // YELLOW
  gradualLightUp(100, 100, 0, 30, 100);
  gradualDarkDown(100, 100, 0, 30, 100);

  // PURPLE
  gradualLightUp(100, 0, 255, 30, 100);
  gradualDarkDown(100, 0, 255, 30, 100);

  // CYAN
  gradualLightUp(0, 100, 100, 30, 100);
  gradualDarkDown(0, 100, 100, 30, 100);

  // WHITE
  gradualLightUp(100, 100, 100, 30, 100);
  gradualDarkDown(100, 100, 100, 30, 100);
}

```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the following:

 - [RAK14001 Gradual Dimming WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_GradualDimming/RAK14001_NCP5623_GradualDimming.ino)
 - [RAK14001 RGB Cycle WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_RGBCycle/RAK14001_NCP5623_RGBCycle.ino)
:::

3. Then you can now select the right port and upload the code, as shown in **Figure 9** and **Figure 10**.

::: tip 📝 NOTE
RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/rak11200-select-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK14001 Sample code"
/>

4. When you successfully uploaded the example sketch, you'll now be able to see the RAK14001 RGB LED Module emits various colors of light. The three primary colors—red, green, and blue—are mixed to compose all kinds of colors by brightness, so you can see colorful light that gradually dim.

#### RAK14001 in RAK11310 WisBlock Core Guide

##### Arduino Setup

1. First, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE.

```c
#include <Wire.h>
#include <NCP5623.h>

NCP5623 rgb;

void setup() {
  // enable RAK14001
  pinMode(WB_IO6, OUTPUT);
  digitalWrite(WB_IO6, HIGH);

  // waits for input in serial monitor
  Serial.begin(115200);
  uint32_t t = millis();
  uint32_t timeout = 5000;
  while (!Serial)
  {
    if (millis() - t > timeout)
      break;
  }

  // If using Native I2C
  Wire.begin();
  Wire.setClock(100000);

  Serial.println("RAK14001 RGB LED Test");

  if (!rgb.begin())
  {
    Serial.println("RAK14001 not found on the I2C line");
    while (1);
  }
  else
  {
    Serial.println("RAK14001 Found. Beginning execution");
  }
}

/**
 * LED light up Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualLightUp(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingUpEnd(stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

/**
 * LED dark down Gradually
 *
 * @param red          0-255
 * @param green        0-255
 * @param blue         0-255
 * @param stepNum      0-31
 * @param msPerStep    1ms-248ms
 */
void gradualDarkDown(uint8_t red, uint8_t green, uint8_t blue, uint8_t stepNum, uint8_t msPerStep)
{
  rgb.setColor(red, green, blue);

  // set dimming up end, range is 1 to 30
  rgb.setGradualDimmingDownEnd(31-stepNum);

  // set dimming step ms, range is 1 ms to 248 ms
  rgb.setGradualDimming(msPerStep);

  delay(stepNum*msPerStep);
}

void loop() {
  // RED
  gradualLightUp(100, 0, 0, 30, 100);
  gradualDarkDown(100, 0, 0, 30, 100);

  // GREEN
  gradualLightUp(0, 100, 0, 30, 100);
  gradualDarkDown(0, 100, 0, 30, 100);

  // BLUE
  gradualLightUp(0, 0, 100, 30, 100);
  gradualDarkDown(0, 0, 100, 30, 100);

  // YELLOW
  gradualLightUp(100, 100, 0, 30, 100);
  gradualDarkDown(100, 100, 0, 30, 100);

  // PURPLE
  gradualLightUp(100, 0, 255, 30, 100);
  gradualDarkDown(100, 0, 255, 30, 100);

  // CYAN
  gradualLightUp(0, 100, 100, 30, 100);
  gradualDarkDown(0, 100, 100, 30, 100);

  // WHITE
  gradualLightUp(100, 100, 100, 30, 100);
  gradualDarkDown(100, 100, 100, 30, 100);
}

```

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the following:

 - [RAK14001 Gradual Dimming WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_GradualDimming/RAK14001_NCP5623_GradualDimming.ino)
 - [RAK14001 RGB Cycle WisBlock example repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/IO/RAK14001_NCP5623_RGBCycle/RAK14001_NCP5623_RGBCycle.ino)
:::

3. Then you can now select the right port and upload the code.

<rk-img
  src="/assets/images/wisblock/rak14001/quickstart/rak11310-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

4. When you successfully uploaded the example sketch, you'll now be able to see the RAK14001 RGB LED Module emits various colors of light. The three primary colors—red, green, and blue—are mixed to compose all kinds of colors by brightness, so you can see colorful light that gradually dim.
