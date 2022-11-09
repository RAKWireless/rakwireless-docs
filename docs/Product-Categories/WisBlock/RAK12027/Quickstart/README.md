---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12027. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12027/overview/RAK12027_home.png
tags:
  - quickstart
  - wisblock
  - RAK12027
prev: ../Overview/
next: ../Datasheet/
---

# RAK12027 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12027 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12027 WisBlock Earthquake Sensor Module](https://store.rakwireless.com/products/earthquake-sensor-omron-d7s-rak12027?utm_source=RAK12027&utm_medium=Document&utm_campaign=BuyFromStore)
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

The RAK12027 is an Earthquake Sensor Module, a part of the RAKwireless WisBlock sensor Series. It carries D7S, the world’s smallest high-precision seismic sensor from Omron, and which also has a **collapse alert system** that notifies if the device changes its horizontal position by more than 20 degrees, which assumed that the structure mounted has already collapsed. It communicates with the target MCU over I2C interface, and it communicates with the target MCU over I2C interface and interrupts pins.

For more information about RAK12027, refer to the [Datasheet](../Datasheet/).

:::warning ⚠️ WARNING
Do not use the sensor in safety devices or for applications in which the sensor operation would directly affect human life.
:::

RAK12027 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak12027-assembly.png"
  width="70%"
  caption="RAK12027 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slots A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/mounting-mechanism.png"
  width="50%"
  caption="RAK12027 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/detaching-module.png"
  width="60%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12027 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base Board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

#### Initial Test of the RAK12027 WisBlock Module

1. Install the [RAKwireless Arduino BSP for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package, the WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak4631-board.png"
  width="90%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak11200-board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak11310-board.png"
  width="90%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details Click Here to View Example Code
```c
/**
   @file RAK12027_Earthquake_Seismograph_D7S.ino
   @author rakwireless.com
   @brief  When the trigger earthquake occurs, the serial port outputs the SI and PGA values in the current calculation.
           About 2 minutes of seismic processing ends.
           After the earthquake, the value is 0.
   @version 0.1
   @date 2022-03-02
   @copyright Copyright (c) 2022
**/
#include "RAK12027_D7S.h" // Click here to get the library: http://librarymanager/RAK12027_D7S

RAK_D7S D7S;

void setup()
{
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, LOW);
  delay(1000);
  digitalWrite(WB_IO2, HIGH); // Power up the D7S.

  time_t timeout = millis();
  Serial.begin(115200); // Initialize Serial for debug output.
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
  Serial.println("RAK12027 Seismograph example.");

  Wire.begin();

  while (!D7S.begin())
  {
    Serial.print(".");
  }
  Serial.println("STARTED");

  Serial.println("Setting D7S sensor to switch axis at inizialization time.");
  D7S.setAxis(SWITCH_AT_INSTALLATION);  // Setting the D7S to switch the axis at inizialization time.

  Serial.println("Initializing the D7S sensor in 2 seconds. Please keep it steady during the initializing process.");
  delay(2000);
  Serial.print("Initializing");
  D7S.initialize(); // Start the initial installation procedure.
  delay(500);

  while (!D7S.isReady()) // Wait until the D7S is ready (the initializing process is ended).
  {
    Serial.print(".");
    delay(500);
  }
  Serial.println("INITIALIZED!");

  Serial.println("\nListening for earthquakes!"); // READY TO GO.
}

void loop()
{
  if (D7S.isEarthquakeOccuring()) // Checking if there is an earthquake occuring right now.
  {
    Serial.print("Instantaneus SI: ");
    Serial.print(D7S.getInstantaneusSI());  // Getting instantaneus SI.
    Serial.println(" [m/s]");

    Serial.print("Instantaneus PGA (Peak Ground Acceleration): ");
    Serial.print(D7S.getInstantaneusPGA()); // Getting instantaneus PGA.
    Serial.println(" [m/s^2]\n");
  }
  delay(500); // Wait 500ms before checking again.
}

```
:::
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12027 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK12027_Earthquake). This sample code in GitHub will work on all WisBlock Core.
:::

4. Once the example code is open, install the [RAK12027-D7S](https://github.com/RAKWireless/RAK12027-D7S) library by clicking the yellow-highlighted link, as shown in **Figure 9** and **Figure 10**.

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak12027-lib.png"
  width="90%"
  caption="Accessing the library used for RAK12027 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak12027-libinstall.png"
  width="65%"
  caption="Installing the compatible library for RAK12027 Module"
/>

5. After the successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak4631-selectport.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak4631-upload.png"
  width="90%"
  caption="Uploading the RAK12027 example code"
/>

6. When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE and set the baud rate correctly. Try to shake the sensor and you will then see the sensor's output as shown in **Figure 13**. Therefore, your RAK12027 is properly communicating with the WisBlock core.

::: tip 📝 NOTE
- As you might have experienced while testing, the D7S is sometimes not responding when you try to initialize it. If the module is moved or shaken immediately after powering up, it goes into `earthquake detection mode` and is not responding on I2C. It will only respond to I2C initialization commands after it left the `earthquake detection mode`.
- After powering up the sensor is calibrating itself, and during this time, the sensor **MUST NOT** be moved.
:::

<rk-img
  src="/assets/images/wisblock/rak12027/quickstart/rak12027-logs.png"
  width="80%"
  caption="RAK12027 Earthquake Sensor serial readings"
/>