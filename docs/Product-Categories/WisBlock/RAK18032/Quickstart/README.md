---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18032. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18032/overview/RAK18032_home.png
tags:
  - quickstart
  - wisblock
  - RAK18032
prev: ../Overview/
next: ../Datasheet/
---

# RAK18032 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18032 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18032 WisBlock PDM Mono Microphone Module](https://store.rakwireless.com/products/pdm-ultrasonic-microphone-sensor-knowles-sph0641lu4h-1-rak18032?utm_source=RAK18032&utm_medium=Document&utm_campaign=BuyFromStore)
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

RAK18032 is a WisBlock mono PDM microphone module that extends the WisBlock system with sound-sensing capability.

For more information about RAK18032, refer to the [Datasheet](../Datasheet/).

RAK18032 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/rak18032_example2.png"
  width="70%"
  caption="RAK18032 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/RAK18032_mounting.png"
  width="60%"
  caption="RAK18032 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/rak18032_example3.png"
  width="60%"
  caption="LoRa and BLE antennas of RAK4631"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18032 uses I2C communication lines, and it can cause possible conflict, especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base.
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

The RAK18032 design is based on the SPH0641LU4H-1 microphone module from Knowles. The RAK18032 is a mono PDM microphone module that is used to convert analog audio into a Pulse Density Modulation (PDM) output. It can be used for audio monitoring, recording, and even voice control functions. For this example, you will be using the **RAK4631** as your WisBlock Core.

#### Initial Test of the RAK18032 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_1.png"
  width="90%"
  caption="Arduino IDE"
/>

2. Install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/rakwireless_audio_library.png"
  width="90%"
  caption="RAKwireless Audio Library"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/rakwireless_audio_library_2.png"
  width="90%"
  caption="RAKwireless Audio Library"
/>

3. Open the sample code for **RAK18032**.

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_2.png"
  width="90%"
  caption="Selecting the sample code for RAK18032"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_3.png"
  width="90%"
  caption="Sample code for RAK18032"
/>

4. Then select the **RAK4631** board and its serial port, as shown in **Figure 12** and **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_4.png"
  width="90%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_5.png"
  width="90%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

5. Then upload the code as shown in **Figure 14** and **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_6.png"
  width="90%"
  caption="Uploading the RAK18032 code"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_7.png"
  width="90%"
  caption="Uploading the RAK18032 code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library.](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples)
:::

6. When you successfully uploaded the sample code, open the Serial Plotter of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound-generating app on your smartphone and sweep frequencies starting from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the logs, then your RAK18032 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_8.png"
  width="90%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/Arduino_Example_9.png"
  width="90%"
  caption="Opening the Serial Plotter"
/>

<rk-img
  src="/assets/images/wisblock/rak18032/quickstart/rak18032-wave.png"
  width="70%"
  caption="FFT Plot of 10kHz sample signal"
/>

::: tip 📝 NOTE
If there is no serial plot graph shown in Arduino 2.0.x, you can try the serial plotter of the legacy Arduino 1.8.x IDE.
:::
