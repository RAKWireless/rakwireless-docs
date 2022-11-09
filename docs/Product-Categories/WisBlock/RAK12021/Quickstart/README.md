---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12021. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12021/overview/RAK12021_home.png
tags:
  - quickstart
  - wisblock
  - RAK12021
prev: ../Overview/
next: ../Datasheet/
---

# RAK12021 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12021 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12021 WisBlock RGB Sensor Module](https://store.rakwireless.com/products/rak12021-wisblock-rgb-sensor?utm_source=RAK12021&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005?utm_source=RAK19005&utm_medium=Document&utm_campaign=BuyFromStore)
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12021 is a WisBlock RGB Sensor that extends the WisBlock system which is based on TCS37725FN from AMS. The Red, Green, Blue, and Clear (RGBC) light sensing can be obtained via I2C interface. An external IR LED is also added for Proximity Detection.

For more information about RAK12021, refer to the [Datasheet](../Datasheet/).

RAK12021 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT A, C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak12021-assembly.png"
  width="80%"
  caption="RAK12021 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/mounting-mechanism.png"
  width="50%"
  caption="RAK12021 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12021 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules.
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

#### Initial Test of the RAK12021 WisBlock Module

1. Install the [RAKwireless Arduino BSP's for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK12021_RGBC_Auto_Gain_TCS37725.ino
   @author rakwireless.com
   @brief  Use automatic gain to read RGBC data.
   @version 0.1
   @date 2021-11-08
   @copyright Copyright (c) 2020
**/
#include <Wire.h>
#include "TCS3772.h"  // Click here to get the library: http://librarymanager/All#TCS37725

// It use WB_IO2 to power up and is conflicting with INT1, so better use in SlotA/SlotC/SlotD.

TCS3772 tcs3772;

void setup()
{
  //Sensor power switch
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);

#if !defined (_VARIANT_RAK11300_)
  Wire.begin();
#endif

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
  Serial.println("RAK12021 RGBC auto gain example.");

  if(tcs3772.begin() == true)
  {
    Serial.println("Found sensor.");
  }
  else
  {
    Serial.println("TCS37725 not found ... check your connections.");
    while(1)
    {
      delay(10);
    }
  }
  delay(1000);
}

void loop()
{
  TCS3772_DataScaled tcs3772_data = {0};

  uint16_t scale_factor;

  tcs3772_data = tcs3772.getMeasurement();

  scale_factor = tcs3772.autoGain(tcs3772_data.clear);

  Serial.print("  R: ");
  Serial.print(tcs3772_data.red);
  Serial.print("  G: ");
  Serial.print(tcs3772_data.green);
  Serial.print("  B: ");
  Serial.print(tcs3772_data.blue);
  Serial.print("  C: ");
  Serial.print(tcs3772_data.clear);
  Serial.print("  P: ");
  Serial.print(tcs3772_data.blue);
  Serial.print("  Gain: ");
  Serial.println(scale_factor);

  delay(1000);
}

```
:::
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12021 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12021_RGBC_TCS37725). This sample code in Github will work on all WisBlock Core.
:::

4. Once the example code is open, install the [RAK12021-TCS3772](https://github.com/RAKWireless/RAK12021-TCS37725) library by clicking the yellow-highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak12021-lib.png"
  width="100%"
  caption="Accessing the library used for RAK12021 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak12021-libinstall.png"
  width="65%"
  caption="Installing the compatible library for RAK12021 Module"
/>

5. After the successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak4631-upload.png"
  width="100%"
  caption="Uploading the RAK12021 example code"
/>

6. When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE and set the baud rate correctly. You will then see the sensor's output, as shown in **Figure 13**, and also the color values for Red, Green, Blue, and Clear. Therefore, your RAK12021 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak12021/quickstart/rak12021-logs.png"
  width="60%"
  caption="RAK12021 RGB Sensor serial readings"
/>