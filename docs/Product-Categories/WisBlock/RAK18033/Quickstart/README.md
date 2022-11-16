---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18033. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18033/overview/RAK18033_home.png
tags:
  - quickstart
  - wisblock
  - RAK18033
prev: ../Overview/
next: ../Datasheet/
---

# RAK18033 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18033 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18033 WisBlock Audio Stereo Microphone Header Module](https://store.rakwireless.com/products/stereo-pdm-microphone-header-rak18033?utm_source=RAK18033&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK18033 is a WisBlock Audio Stereo Microphone Header module that allows you to connect two PDM Microphone modules to create a stereo sound input.

For more information about RAK18033, refer to the [Datasheet](../Datasheet/).

RAK18033 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_Example_2A.png"
  width="70%"
  caption="RAK18033 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_mounting.png"
  width="60%"
  caption="RAK18033 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_Example_3A.png"
  width="60%"
  caption="LoRa and BLE antennas of RAK4631"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18033 uses I2C communication lines, and it can cause possible conflict, especially on other WisBlock Modules connected to Slot A to F of the WisBlock Base.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Example

The RAK18033 Stereo Microphone Header module can connect two identical PDM Microphone modules at the same time. It is compatible with PDM microphones **RAK18030**, **RAK18031**, and **RAK18032**, which are used to convert analog audio into a Pulse Density Modulation (PDM) output. They can be used for audio monitoring, recording, and even voice control functions. As an example, you will be using the **RAK4631** as your WisBlock Core.

#### Initial Test of the RAK18033 WisBlock Module using PDM Microphone Modules

1. To test the **RAK18033** module, you need to connect first the PDM Microphone modules as shown in the figures below.

   **Using RAK18030 module**

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_Example_4B.png"
  width="70%"
  caption="RAK18030 Stereo Microphones"
/>

   **Using RAK18031 module**

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_Example_5B.png"
  width="70%"
  caption="RAK18031 Stereo Microphones"
/>

   **Using RAK18032 module**

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/RAK18033_Example_6B.png"
  width="70%"
  caption="RAK18032 Stereo Microphones"
/>

2. Then install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_1.png"
  width="100%"
  caption="Arduino IDE"
/>

3. Install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/rakwireless_audio_library.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/rakwireless_audio_library_2.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

4. Then open the sample code for the **PDM Microphones**.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_2.png"
  width="100%"
  caption="Selecting the sample code for PDM Microphones"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_3.png"
  width="100%"
  caption="Sample code for PDM Microphones"
/>

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

5. Select the **RAK4631** board and its serial port, as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_4.png"
  width="100%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_5.png"
  width="100%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

6. Upload the code, as shown in **Figure 17** and **Figure 18**.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_6.png"
  width="100%"
  caption="Uploading the PDM Microphone code"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_7.png"
  width="100%"
  caption="Uploading the PDM Microphone code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library.](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples)
:::

7. When you successfully uploaded the sample code, open the **Serial Plotter** of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound-generating app on your smartphone and sweep frequencies starting from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the logs, then your RAK18033 is properly communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_8.png"
  width="100%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_9.png"
  width="100%"
  caption="Opening the Serial Plotter"
/>

<rk-img
  src="/assets/images/wisblock/rak18033/quickstart/Arduino_Example_10.png"
  width="100%"
  caption="FFT Plot of 10kHz sample signal"
/>

::: tip 📝 NOTE
If there is no serial plot graph shown in Arduino 2.0.x, you can try the serial plotter of the legacy Arduino 1.8.x IDE.
:::