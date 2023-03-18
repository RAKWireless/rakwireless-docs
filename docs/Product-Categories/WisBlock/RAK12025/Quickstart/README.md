---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12025. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12025/RAK12025.png
tags:
  - quickstart
  - wisblock
  - RAK12025
prev: ../Overview/
next: ../Datasheet/
---

# RAK12025 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12025 WisBlock Gyroscope Sensor Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12025 WisBlock Gyroscope Sensor Module](https://store.rakwireless.com/products/rak12025-gyroscope-sensor-module?utm_source=RAK12025&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which extends the WisBlock system with a gyroscope sensor.

For more information about RAK12025, refer to the [Datasheet](../Datasheet/).

The RAK12025 module gives us information about:

- Selectable full scale (245/500/2000&nbsp;dps)
- I2C interface
- 16-bit rate value data output
- 8-bit temperature data output

RAK12025 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in **Figure 1**. It will work on **SLOT C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

::: tip 📝 NOTE
RAK12025 has two digital output lines, so you need two GPIOs from WisBlock Core. It means RAK12025 should be used on a sensor slot with two available GPIOs. However, WB_IO2 is used to control 3V3_S. Hence, RAK12025 is used only on slots without WB_IO2 like sensor slots C and D on WisBlock Base board.
:::

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak12025_assembly.png"
  width="70%"
  caption="RAK12025 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/f2_rak12025_mounting.png"
  width="70%"
  caption="RAK12025 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12025 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules.
:::

After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

The RAK12025 is a gyroscope sensor board that contains an I3G4250D chip. The I3G4250D is a low-power 3-axis angular rate sensor able to provide unprecedented stability at a zero-rate level and sensitivity over temperature and time, with digital I2C/SPI serial interface standard output.

#### Initial Test of the RAK12025 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. You need to select first the WisBlock Core you have, as shown in **Figure 6** to **Figure 8**.

**RAK4631 Board**
<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**
<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**
<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11300 as WisBlock Core"
/>

3. Copy the [Basic Sample Code for RAK12025](https://github.com/RAKWireless/RAK12025-I3G4250D/blob/main/examples/RAK12025_I3G4250D_Gyroscope/RAK12025_I3G4250D_Gyroscope.ino) in Github. You can open the example codes depending on your WisBlock Core, as shown in **Figure 9**.

:::tip 📝 NOTE:
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK12025 WisBlock Example Code Repository](https://github.com/RAKWireless/RAK12025-I3G4250D/tree/main/examples). This sample code in Github will work on all WisBlock Core.
:::

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak4631_example.png"
  width="100%"
  caption="Copying the RAK12025 example code for RAK4631 WisBlock Core"
/>

4. Once the example code is copied, install the [RAKwireless I3G4250D Gyroscope Library](https://github.com/RAKWireless/RAK12025-I3G4250D) by clicking the red-highlighted link, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak12025_library.png"
  width="100%"
  caption="Installing the compatible library for RAK12025 Gyroscope Sensor Module"
/>

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/rak12025_library_installed.png"
  width="100%"
  caption="Successful installing the library for RAK12025 Gyroscope Sensor Module"
/>

5. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/select_port.png"
  width="100%"
  caption="Selecting the correct serial port"
/>

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/upload.png"
  width="100%"
  caption="Uploading the RAK12025 example code"
/>

6. When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown in **Figure 14**, then your RAK12025 is communicating with the WisBlock core properly.

<rk-img
  src="/assets/images/wisblock/rak12025/quickstart/gyroscope_logs.png"
  width="100%"
  caption="RAK12025 Gyroscope Sensor Module Data Logs"
/>
