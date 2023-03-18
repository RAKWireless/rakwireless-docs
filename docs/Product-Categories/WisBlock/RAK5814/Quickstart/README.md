---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK5814. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak5814/RAK5814.png
tags:
  - quickstart
  - wisblock
  - RAK5814
prev: ../Overview/
next: ../Datasheet/
---

# RAK5814 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK5814 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK5814 WisBlock Crypto Module](https://store.rakwireless.com/collections/wisblock-sensor)
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

RAK5814 is a secure element cryptography chip based on Microchip ATECC608A. It was designed to provide hardware-based key storage as well as encryption/decryption to various electronic products and devices.

For more information about RAK5814, refer to the [Datasheet](../Datasheet/).

RAK5814 module can be connected to the sensor's slot of [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) to communicate with the WisBlock Core, as shown in the figure below. It will work on **SLOT A to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Assembly.png"
  width="90%"
  caption="RAK5814 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the locations for Slots A, B, C, and D are properly marked by silkscreen. Slots C and D are located on the bottom of the WisBlock Base. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_mounting.png"
  width="60%"
  caption="RAK5814 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK4631_Antenna.png"
  width="60%"
  caption="LoRa and BLE antennas of RAK4631"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK5814 uses I2C communication lines, and it can cause possible conflict, especially with the other WisBlock Modules connected to Slots A to F of the WisBlock Base.
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

The RAK5814 design is based on **ATECC608A** from Microchip. The RAK5814 is a crypto module, part of the WisBlock Module Series. It was designed to be secured with hardware-based key storage. For this example, you will be using the **RAK4631** as your WisBlock Core.

#### Initial Test of the RAK5814 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/Arduino_Example.png"
  width="90%"
  caption="Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_WisBlocks.png"
  width="90%"
  caption="WisBlock Cores inside the Arduino IDE"
/>

2. Then install the library of **RAK5814** into your Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Update_1.png"
  width="90%"
  caption="Managing the libraries in Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Update_2.png"
  width="90%"
  caption="RAK5814 Library"
/>

3. Then open the sample code for **RAK5814**.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Update_3.png"
  width="70%"
  caption="Selecting the sample code for RAK5814"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_2.png"
  width="90%"
  caption="Sample code for RAK5814"
/>

5. Then select the **RAK4631** board and its serial port, as shown in **Figure 13** and **Figure 14**.

   **RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_3.png"
  width="90%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_4.png"
  width="90%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

6. Then upload the code as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_5.png"
  width="90%"
  caption="Uploading the RAK5814 sample code"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_6.png"
  width="90%"
  caption="Uploading the RAK5814 sample code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK5814 WisBlock Crypto Module that can be found on the [RAK5814 WisBlock Example Code Repository](https://github.com/RAKWireless/RAK5814-ATECC608A).
:::

7. When you successfully uploaded the sample code, open the Serial Monitor of the Arduino IDE to check for the ECC608A's serial number and do the configuration here as well.

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_7.png"
  width="90%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak5814/quickstart/RAK5814_Sample_8.png"
  width="90%"
  caption="Readings from the Serial Monitor"
/>


