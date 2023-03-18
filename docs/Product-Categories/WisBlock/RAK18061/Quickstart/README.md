---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK18061. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak18061/RAK18061.png
tags:
  - quickstart
  - wisblock
  - RAK18061
prev: ../Overview/
next: ../Datasheet/
---

# RAK18061 Quick Start Guide



## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK18061 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK18061 WisBlock Audio Mono Amplifier Module](https://store.rakwireless.com/products/5-6w-amplifier-texas-instruments-tas2560-rak18061?utm_source=RAK18061&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) with IO slot
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- Speaker
- [Li-Ion/LiPo battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK18061 is a mono amplifier module, part of the **WisBlock Audio Series**.

For more information about RAK18061, refer to the [Datasheet](../Datasheet/).

RAK18061 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/rak18061_assembly.png"
  width="70%"
  caption="RAK18061 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/RAK18061_mounting.png"
  width="60%"
  caption="RAK18061 connection to WisBlock Base"
/>

You need to connect the LoRa and BLE antennas to the **RAK4631** module to avoid damage to this module during operation.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-12a.png"
  width="60%"
  caption="LoRa and BLE antennas connection to RAK4631 module"
/>

The **RAK18061** module is powered via **SB2 (battery)** by default. If you wish to use other DC power source, refer to **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-10.png"
  width="60%"
  caption="Power Select Diagram for RAK18061 with SB2 as default"
/>

   **3V3**

   If you want to use 3V3, desolder SB2 and solder SB1.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-13.png"
  width="60%"
  caption="Solder portion for SB1"
/>

   **VBUS**

   If you want to use VBUS, desolder SB2 and solder SB3.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-14.png"
  width="60%"
  caption="Solder portion for SB3"
/>

   **EX_POWER**

   If you want to use EX_POWER, desolder SB2 and solder SB4.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-15.png"
  width="60%"
  caption="Solder portion for SB4"
/>

Then you can now connect the speaker to the speaker output of the **RAK18061** module.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-11a.png"
  width="60%"
  caption="Speaker output of RAK18061 module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

1. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

1. Apply force to the module at the position of the connector, as shown in **Figure 11**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK18061 uses I2C communication lines, and it can cause possible conflict, especially on other WisBlock Modules connected to Slot A to D of the WisBlock Base.
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

**RAK18061** is a mono amplifier module, part of the **WisBlock Audio Series**. The RAK18061 is designed based on the TAS2560 from TI. The TAS2560 features an ultra low-noise audio DAC and Class-D audio amplifier which incorporates speaker voltage and current sensing feedback for use with speaker protection algorithms. The RAK18061 can drive the speaker to play audio through the input I2S signals. With other WisBlock modules, it can achieve rich applications, such as recording and voice control functions.

#### Sample Code Test of the RAK18061 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

2. Then install the latest [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) using the Library Manager of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/rakwireless_audio_library.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/rakwireless_audio_library_2.png"
  width="100%"
  caption="RAKwireless Audio Library"
/>

3. Plug in your integrated module (**RAK4631** + **RAK18061**) into your PC through the USB cable.

4. Then open your Arduino IDE and open the **PlayBack48K** sample code for **RAK18061**, as shown in **Figures 14 to 16**.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-1a.png"
  width="100%"
  caption="Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-2a.png"
  width="100%"
  caption="Selecting the PlayBack48K Sample Code"
/>

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-3a.png"
  width="100%"
  caption="PlayBack48K Sample Code"
/>

::: tip 📝 NOTE
The example codes of RAKwireless Audio Library are compatible with specific WisBlock Core. You have to select the correct WisBlock Core based on what core you used in your application.
:::

5. Select your WisBlock Core **RAK4631**, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-4a.png"
  width="100%"
  caption="Selecting the RAK4631 WisBlock Core board"
/>

6. Once done, select the corresponding port of your WisBlock Core **RAK4631**.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-5a.png"
  width="100%"
  caption="Selecting the port of RAK4631"
/>

7. Once done, it should look the same with **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-6a.png"
  width="100%"
  caption="Selected board and port of RAK4631"
/>

8. Then tick the right arrow at the top leftmost part of the Arduino IDE to upload the sample code to your **RAK4631** module.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-7a.png"
  width="100%"
  caption="Uploading the PlayBack48K sample code to your RAK4631"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated example code for your WisBlock Core Module that can be found on the [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library/tree/main/examples).
:::

9. Once done uploading, it should look like the same with **Figure 21**. At this moment, you will hear "**Train 32 from Amsterdam is now arriving**" from your speaker playing repetitively.

<rk-img
  src="/assets/images/wisblock/rak18061/quickstart/arduino-example-8a.png"
  width="100%"
  caption="Programmed RAK4631"
/>

