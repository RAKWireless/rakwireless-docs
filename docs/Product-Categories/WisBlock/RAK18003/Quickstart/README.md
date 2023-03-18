---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18003. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18003/RAK18003.png
tags:
  - quickstart
  - wisblock
  - RAK18003
prev: ../Overview/
next: ../Datasheet/
---

# RAK18003 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18003 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18003 WisBlock Audio Interposer Module](https://store.rakwireless.com/products/wisblock-audio-interposer-rak18003?utm_source=RAK18003&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- Your choice of [WisBlock Audio Module compatible with Interposer](https://store.rakwireless.com/collections/wisblock-audio)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Board Manager, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK18003 is an interposer module, part of the **WisBlock Audio Series**.

For more information about RAK18003, refer to the [Datasheet](../Datasheet/).

RAK18003 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/rak18003_assembly.png"
  width="80%"
  caption="RAK18003 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18003_mounting.png"
  width="70%"
  caption="RAK18003 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_13(2).png"
  width="70%"
  caption="LoRa and BLE antennas connection to RAK4631 module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

1. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
- If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
- RAK18003 uses I2C communication lines, and it can cause possible conflict, especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base.
:::

After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING
- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the WisBlock Base board. Not all batteries have the same wiring.
:::

### Software Configuration and Examples

**RAK18003** is an interposer module, part of the **WisBlock Audio Series**. Its design allows multiple WisBlock Audio modules to be used together on a single IO slot. It consists of two IO expanders (TPT29555-TS5R), one signal switch (5223YWQ10/TR), and connectors where other WisBlock Audio modules can be interfaced. It also has a usable TF card slot. **RAK18003** module can be used with **RAK18030 PDM Microphone** or **RAK18060 Amplifier Module**. Their sample applications are detailed below.

#### Sample Code Test of the RAK18030 Module with RAK18003 Interposer Module

1. To test the **RAK18003 (Audio Interposer)** with **RAK4631 (WisBlock Core)** and **RAK18030 (PDM Microphone)**, you need to assemble them first, as shown in **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_15A.png"
  width="100%"
  caption="Assembling together the RAK4631, RAK18030, and RAK18003"
/>

2. Then install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_1.png"
  width="100%"
  caption="Arduino IDE"
/>

3. Install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/rakwireless_audio_library.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/rakwireless_audio_library_2.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

4. Open the sample code for **RAK18003**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_2A.png"
  width="100%"
  caption="Selecting the sample code for RAK18003"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_3A.png"
  width="100%"
  caption="Sample code for RAK18003"
/>

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

5. Select the **RAK4631** board and its serial port, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_4A.png"
  width="100%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_5A.png"
  width="100%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

6. Upload the code, as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_6A.png"
  width="100%"
  caption="Uploading the RAK18030 code"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_7A.png"
  width="100%"
  caption="Uploading the RAK18030 code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library.](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples)
:::

7. When you successfully uploaded the sample code, open the **Serial Plotter** of the Arduino IDE to see the sensor's reading logs. To test the sound detection, you can download a sound-generating app on your smartphone and sweep frequencies starting from 1000&nbsp;Hz to 10000&nbsp;Hz. If you see the logs, then your RAK18030 and RAK18003 are communicating to the WisBlock core.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_8A.png"
  width="100%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_9A.png"
  width="100%"
  caption="Opening the Serial Plotter"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/RAK18030_Arduino_Example_10A.png"
  width="100%"
  caption="FFT Plot of 10kHz sample signal"
/>

::: tip 📝 NOTE
If there is no serial plot graph shown in Arduino 2.0.x, you can try the serial plotter of the legacy Arduino 1.8.x IDE.
:::

#### Sample Code Test of the RAK18060 Module with RAK18003 Interposer Module

1. To test the **RAK18003 (Audio Interposer)** with **RAK4631 (WisBlock Core)** and **RAK18060 (Stereo Amplifier)**, you need to assemble them first as shown in **Figure 20**. Also, you'll be needing the following:
   - Li-Ion/LiPo battery
   - Speakers

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_14A.png"
  width="100%"
  caption="Assembling together the RAK4631, RAK18060, and RAK18003"
/>

2. The **RAK18060** module is powered via **SB2 (battery)** by default. If you wish to use another DC power source, refer to **Figures 21 to 24**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_11.png"
  width="60%"
  caption="Power Select Diagram for RAK18060 with SB2 as default"
/>

   **3V3**

   If you want to use 3V3, desolder SB2 and solder SB1.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_16.png"
  width="60%"
  caption="Solder portion for SB1"
/>

   **VBUS**

   If you want to use VBUS, desolder SB2 and solder SB3.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_17.png"
  width="60%"
  caption="Solder portion for SB3"
/>

   **EX_POWER**

   If you want to use EX_POWER, desolder SB2, and solder SB4.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_18.png"
  width="60%"
  caption="Solder portion for SB4"
/>


3. You can now connect the speaker on either output of the **RAK18060** module.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_12.png"
  width="60%"
  caption="Speaker output portions of RAK18060 module"
/>

4. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

5. Then install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/rakwireless_audio_library.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/rakwireless_audio_library_2.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

6. Plug in your integrated module **RAK4631** + **RAK18003** + **RAK18060** into your PC through the USB cable.

7. Then open your Arduino IDE and open the **PlayBack48K** sample code for **RAK18060**, as shown in **Figures 28 to 30**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_1.png"
  width="100%"
  caption="Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_2.png"
  width="100%"
  caption="Selecting the PlayBack48K Sample Code"
/>

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_3.png"
  width="100%"
  caption="PlayBack48K Sample Code"
/>

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

8. Select your WisBlock Core **RAK4631**, as shown in **Figure 31**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_4.png"
  width="100%"
  caption="Selecting the RAK4631 WisBlock Core board"
/>

9. Then select the corresponding port of your WisBlock Core **RAK4631**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_5.png"
  width="100%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

10. Once done, it should look the same with **Figure 33**.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_6.png"
  width="100%"
  caption="Selected board and port of RAK4631"
/>

11. Then tick the right arrow at the top leftmost part of the Arduino IDE to upload the sample code to your **RAK4631** module.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_7.png"
  width="100%"
  caption="Uploading the PlayBack48K sample code to your RAK4631"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples).
:::

12. Once done uploading, it should look the same with **Figure 35**. At this moment, you will hear "Train 52 from Amsterdam is now arriving" from your speaker playing repetitively.

<rk-img
  src="/assets/images/wisblock/rak18003/quickstart/Arduino_Example_9.png"
  width="100%"
  caption="Programmed RAK4631"
/>

