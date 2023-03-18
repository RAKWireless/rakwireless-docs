---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18030. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18030/RAK18030.png
tags:
  - quickstart
  - wisblock
  - RAK18030
prev: ../Overview/
next: ../Datasheet/
---

# RAK18030 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18030 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18030 WisBlock PDM Mono Microphone Module](https://store.rakwireless.com/products/pdm-microphone-sensor-20-20khz-knowles-spk0641ht4h-1-rak18030?utm_source=RAK18030&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)


#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK18030 is a WisBlock mono PDM microphone module that extends the WisBlock system with sound-sensing capability.

For more information about RAK18030, refer to the [Datasheet](../Datasheet/).

RAK18030 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/rak18030_assembly.png"
  width="70%"
  caption="RAK18030 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/RAK18030_mounting.png"
  width="60%"
  caption="RAK18030 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_10.png"
  width="70%"
  caption="LoRa and BLE antennas of RAK4631"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18030 uses I2C communication lines, and it can cause possible conflict, especially on other WisBlock Modules connected to Slot A to F of the WisBlock Base.
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

The RAK18030 design is based on the SPK0641HT4H-1 microphone module from Knowles. The RAK18030 is a mono PDM microphone module that is used to convert analog audio into a Pulse Density Modulation (PDM) output. It can be used for audio monitoring, recording, and even voice control functions. For this example, you will be using the **RAK4631** as your WisBlock Core.

#### Initial Test of the RAK18030 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_1.png"
  width="90%"
  caption="Arduino IDE"
/>

2. Then you also need to install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/rakwireless_audio_library.png"
  width="90%"
  caption="RAKwireless Audio Library"
/>

3. Open the sample code for **RAK18030** from **RAK4631** examples.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_2.png"
  width="90%"
  caption="Selecting the sample code for RAK18030"
/>

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_3.png"
  width="90%"
  caption="Sample code for RAK18030"
/>

4. Then select the **RAK4631** board and its serial port, as shown in **Figure 11** and **Figure 12**.

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_4.png"
  width="90%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_5.png"
  width="90%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

5. Then upload the code as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_6.png"
  width="90%"
  caption="Uploading the RAK18030 code"
/>

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_7.png"
  width="90%"
  caption="Uploading the RAK18030 code"
/>


::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library.](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples)
:::

6. When you successfully uploaded the sample code, open the Serial Plotter of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound-generating app on your smartphone and sweep frequencies starting from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the plot, then your RAK18030 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_8.png"
  width="90%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/Arduino_Example_9.png"
  width="90%"
  caption="Opening the Serial Plotter"
/>

<rk-img
  src="/assets/images/wisblock/rak18030/quickstart/rak18030-1-wave.png"
  width="70%"
  caption="FTT Plot of 10kHz sample signal"
/>

::: tip 📝 NOTE
If there is no serial plot graph shown in Arduino 2.0.x, you can try the serial plotter of the legacy Arduino 1.8.x IDE.
:::
