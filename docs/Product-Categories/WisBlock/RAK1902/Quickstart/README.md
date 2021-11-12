---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK1902. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak1902/overview/RAK1902_home.png
tags:
  - quickstart
  - wisblock
  - RAK1902
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK1902 Quick Start Guide

<!--
## Introduction

This guide introduces the WisBlock Sensor RAK1902 Barometer board and how to program with it.

The information obtained from the barometer pressure will then be printed over the USB debug port of the WisBlock Base board.

-->

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK1902 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK1902 WisBlock Barometer Pressure Sensor](https://store.rakwireless.com/collections/wisblock-sensor/products/rak1902-kps22hb-barometric-pressure-sensor)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which calculates temperature and makes it easy to build up a barometric air pressure data acquisition system. 

For more information about RAK1902, refer to the [Datasheet](../Datasheet/).

The RAK1902 module gives us information about:

- Barometric Pressure
- Environment Temperature

RAK1902 module can be connected on any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A to D**. Also, always secure the connection of the WisBlock module by using the compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902_assembly.png"
  width="70%"
  caption="RAK1902 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/14.wisblock-sensor-silkscreen.png"
  width="70%"
  caption="RAK1902 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1902 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. 
:::


After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK1902 is a pressure sensor board that contains LPS22HB chip. The LPS22HB is an ultra-compact piezoresistive absolute pressure sensor that functions as a digital output barometer. The device comprises a sensing element and an IC interface which communicates through I2C from the sensing element to the application.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK1902 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK1902/Quickstart/#rak1902-in-rak4631-wisblock-core-guide)
- [RAK1902 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK1902/Quickstart/#rak1902-in-rak11200-wisblock-core-guide)
- [RAK1902 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK1902/Quickstart/#rak1902-in-rak11310-wisblock-core-guide)
- [LoRaWAN Weather Monitoring with RAK1902](/Product-Categories/WisBlock/RAK1902/Quickstart/#lorawan-weather-monitoring-with-rak1902)

#### RAK1902 in RAK4631 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK4631 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak4631-board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1902](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1902_Pressure_LPS22HB) in Github will work on all WisBlock Core. You can open the example codes depending on your WisBlock Core, as shown in **Figure 7**

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak4631-examplecode.png"
  width="100%"
  caption="Opening RAK1902 example code for RAK4631 WisBlock Core"
/>

3. Once the example code is open, install the [Adafruit LPS2X](https://github.com/adafruit/Adafruit_LPS2X) library by clicking the yellow highlighted link, as shown in **Figure 8** and **Figure 9**.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-lib.png"
  width="100%"
  caption="Accessing the library used for RAK1902 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK1902 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak4631-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1902 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 12**, then your RAK1902 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-logs.png"
  width="80%"
  caption="RAK1902 pressure and temperature data logs"
/>

#### RAK1902 in RAK11200 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK11200 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11200-board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1902](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1902_Pressure_LPS22HB) in Github will work on all WisBlock Core. You can open the example codes depending on your WisBlock Core, as shown in **Figure 14**

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11200-examplecode.png"
  width="100%"
  caption="Opening RAK1902 example code for RAK11200 WisBlock Core"
/>

3. Once the example code is open, install the [Adafruit LPS2X](https://github.com/adafruit/Adafruit_LPS2X) library by clicking the yellow highlighted link, as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-lib.png"
  width="100%"
  caption="Accessing the library used for RAK1902 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK1902 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 17** and **Figure 18**.

::: tip 📝 NOTE
RAK11200 requires **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11200-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1902 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 19**, then your RAK1902 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-logs.png"
  width="80%"
  caption="RAK1902 pressure and temperature data logs"
/>

#### RAK1902 in RAK11310 WisBlock Core Guide

If you already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. First, you need to select the RAK11310 WisBlock Core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11310-board.png"
  width="100%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. The [Basic Sample Code for RAK1902](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK1902_Pressure_LPS22HB) in Github will work on all WisBlock Core. You can open the example codes depending on your WisBlock Core, as shown in **Figure 21**

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11310-examplecode.png"
  width="100%"
  caption="Opening RAK1902 example code for RAK11310 WisBlock Core"
/>

3. Once the example code is open, install the [Adafruit LPS2X](https://github.com/adafruit/Adafruit_LPS2X) library by clicking the yellow highlighted link, as shown in **Figure 22** and **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-lib.png"
  width="100%"
  caption="Accessing the library used for RAK1902 Module"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-libinstall.png"
  width="70%"
  caption="Installing the compatible library for RAK1902 Module"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 24** and **Figure 25**.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak11310-selectport.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK1902 example code"
/>

5. When you successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 26**, then your RAK1902 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/rak1902-logs.png"
  width="80%"
  caption="RAK1902 pressure and temperature data logs"
/>


#### LoRaWAN Weather Monitoring with RAK1902

For WisBlock Core RAK4630, it has an example for [LoRaWAN Weather Monitoring](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/Weather_Monitoring) with RAK1902 Pressure Module. 
   
<rk-img
  src="/assets/images/wisblock/rak1902/quickstart/lorawan_weather.png"
  width="100%"
  caption="LoRaWAN Weather Monitoring example"
/>

