---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12032. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12032/RAK12032.png
tags:
  - quickstart
  - wisblock
  - RAK12032
prev: ../Overview/
next: ../Datasheet/
---

# RAK12032 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12032 WisBlock Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12032 WisBlock 3-Axis Accelerometer Sensor Module](https://store.rakwireless.com/products/wisblock-3-axis-acceleration-sensor-rak12032)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base?utm_source=WisBlockBase&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core?utm_source=WisBlockCore&utm_medium=Document&utm_campaign=BuyFromStore)
- USB Cable
- [RAK19005 WisBlock Sensor Extension Cable (optional)](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005?utm_source=RAK19005&utm_medium=Document&utm_campaign=BuyFromStore)
- [Li-Ion/LiPo Battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar Charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [Arduino IDE.](https://www.arduino.cc/en/Main/Software)
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP.](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)

## Product Configuration

### Hardware Setup

WisBlock can integrate this module to extend the WisBlock system with an accelerometer sensor.

For more information about RAK12032, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak12032-axes.png"
  width="60%"
  caption="Definition of coordinate system of RAK12032 WisBlock 3-Axis Sensor Module"
/>

RAK12032 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 2**. It will work on **SLOT C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

:::tip 📝 NOTE:
- RAK12032 has two digital output lines for interrupt signal, so two input GPIOs from WisBlock Core are needed to capture these interrupts. Slots A and B use WB_IO2 which is dedicated to switching the power supply (3V3_S) to Sensor Slots. It can't be used as input.

- Slots **C, D, E & F** are possible to be used if the size of the module fits in and if the slot is available, which depends on the specific type of WisBlock Base board.
:::

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak12032-assembly.png"
  width="60%"
  caption="RAK12032 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the locations for Slot C, D, E, and F are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

:::warning ⚠️ WARNING

This chip is highly sensitive, and the tightness of the mounting screws will affect its zero offset. Therefore, it is advised that once the RAK12032 is installed, do not repeatedly loosen or tighten the screws. The zero offset must need to be calibrated again every time loosening or tightening the screw the screws. Recommended screw torque range: 0.032–0.054&nbsp;N-m.

:::

##### Disassembling

The procedure for disassembling any type of WisBlock module is the same.

1. To begin disassembling, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. After removing the screws, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Detach the module from the base board by applying forcer to the module at the position of the connector, as shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
- If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/). This tool finds possible pin conflicts.
- RAK12032 uses I2C communication lines and two IO pins for interrupt signals, which can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and, eventually, other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

#### Initial Test of the RAK12032 WisBlock Module

1. Install the [RAKwireless Arduino BSP for WisBlock](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. After that, you need to select the WisBlock Core you have.

**RAK4631 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak4631_board.png"
  width="90%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak11200_board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 WisBlock Core**

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak11300_board.png"
  width="90%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Next, copy the following sample code into your Arduino IDE:

::: details View the example code
```c
/**
   @file RAK12032_3_Axis_Read_ADXL313.ino
   @author rakwireless.com
   @brief Read 3-axis acceleration data and print it out through the serial port.
   @version 0.1
   @date 2021-12-25
   @copyright Copyright (c) 2021
**/

#include <Wire.h>
#include <SparkFunADXL313.h> //Click here to get the library: http://librarymanager/All#SparkFun_ADXL313

ADXL313 myAdxl;

void setup()
{
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

  Serial.println("Reading values from ADXL313");

  Wire.begin();

  if (myAdxl.begin() == false) //Begin communication over I2C
  {
    Serial.println("The sensor did not respond. Please check wiring.");
    while(1)
    {
      delay(10);
    }
  }
  Serial.println("Sensor is connected properly.");

  myAdxl.measureModeOn();             // Wakes up the sensor from standby and puts it into measurement mode
}

void loop()
{
  float xAxis,yAxis,zAxis;
  if(myAdxl.dataReady()) // Check data ready interrupt, note, this clears all other int bits in INT_SOURCE reg
  {
    myAdxl.readAccel();  // Read all 3 axis, they are stored in class variables: myAdxl.x, myAdxl.y and myAdxl.z
    /*
     * ±0.5 g : 1024 LSB/g
     * ±1 g   : 512 LSB/g
     * ±2 g   : 256 LSB/g
     * ±4 g   : 128 LSB/g
     */
    xAxis = (float)myAdxl.x / 1024;
    yAxis = (float)myAdxl.y / 1024;
    zAxis = (float)myAdxl.z / 1024;

    Serial.print("  x: ");
    Serial.print(xAxis);
    Serial.print("[g]  y: ");
    Serial.print(yAxis);
    Serial.print("[g]  z: ");
    Serial.print(zAxis);
    Serial.println("[g]");
  }
  else
  {
    Serial.println("Waiting for dataReady.");
  }
  delay(50);
}
```
:::

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module. You can find it on the [RAK12032 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/sensors/RAK12032_3_Axis_ADXL313/RAK12032_3_Axis_Read_ADXL313/RAK12032_3_Axis_Read_ADXL313.ino). The sample code on GitHub will work on all WisBlock Core.
:::

4. Once the example code is open, install the [SparkFun_ADXL313_Arduino_Library](https://github.com/sparkfun/SparkFun_ADXL313_Arduino_Library) library. Click the highlighted link, as shown in **Figure 9**.

::: tip 📝 NOTE
It is important to install **version 1.0.0**, as shown in **Figure 10**, since it is the stable version of the library. The latest version still has compatibility issues that need to be resolved.
:::

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/lib-highlight.png"
  width="80%"
  caption="Installing RAK12032 sensor library"
/>

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/lib-install.png"
  width="60%"
  caption="Installing RAK12032 sensor library"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/select-port.png"
  width="80%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/upload.png"
  width="80%"
  caption="Uploading the RAK12032 example code"
/>

6. When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 13**, then your RAK12032 is communicating with the WisBlock core properly. The polarity of the axis depends on the sensor slot where you connected the module.

<rk-img
  src="/assets/images/wisblock/rak12032/quickstart/rak12032-logs.png"
  width="60%"
  caption="RAK12032 3-Axis Accelerometer Sensor Module Data Logs"
/>
