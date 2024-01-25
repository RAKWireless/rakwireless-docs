---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12052. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12052/RAK12052.png
tags:
  - quickstart
  - wisblock
  - RAK12052
prev: ../Overview/
next: ../Datasheet/
---

# RAK12052 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK12052 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12052 WisBlock Thermal IR Array Module](https://store.rakwireless.com/collections/wisblock-sensor)
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

RAK12052 is a 32 x 24 thermal IR array module based on MLX90640 from Melexis. MLX90640 is a fully-calibrated 32 x 24 pixels thermal IR array in an industry-standard 4-lead TO39 package with a digital interface. The MLX90640 contains 768 FIR pixels.

For more information about RAK12052, refer to the [Datasheet](../Datasheet/).

RAK12052 module can be connected to the IO slot of the WisBlock Base to communicate with the WisBlock Core. Always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Assembly.png"
  width="90%"
  caption="RAK12052 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [WisBlock Base board assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_mounting.png"
  width="70%"
  caption="RAK12052 connection to WisBlock Base"
/>

When using the **RAK4631** board, connect the LoRa and BLE antennas to avoid damage to the board.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK4631_Antennas.png"
  width="50%"
  caption="LoRa and BLE antennas of RAK4631"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK12052 uses I2C communication lines, and it can cause possible conflicts, especially on other WisBlock Modules connected to Slot A to F of the WisBlock Base.
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

The RAK12052 design is based on **MLX90640** from Melexis. MLX90640 is a fully-calibrated 32&nbsp;x&nbsp;24 pixels thermal IR array in an industry-standard 4-lead TO39 package with a digital interface. The MLX90640 contains 768&nbsp;FIR pixels. An ambient sensor is integrated to measure the ambient temperature of the chip and a supply sensor to measure the VDD. The outputs of all sensors (IR, Ta, and VDD) are stored in internal RAM and accessible through I2C. It is comparable to having a thermal camera (or Predator's vision) but in compact but usable low resolution. For this example, you will be using the **RAK4631** as your WisBlock Core.

#### Initial Test of the RAK12052 WisBlock Module

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the `package_rakwireless_index.json` board installation package. The WisBlock Core should now be available on the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/Arduino_Example.png"
  width="90%"
  caption="Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_WisBlocks.png"
  width="90%"
  caption="WisBlock Cores inside the Arduino IDE"
/>

2. Then install the library of **RAK12052** into your Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Update_1.png"
  width="90%"
  caption="Managing libraries inside the Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Update_2.png"
  width="90%"
  caption="RAK12052 Library"
/>

3. Then open the sample code for **RAK12052**.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Update_3.png"
  width="70%"
  caption="Selecting the sample code for RAK12052"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_2.png"
  width="90%"
  caption="Sample code for RAK12052"
/>

4. Then select the **RAK4631** board and its serial port, as shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_3.png"
  width="90%"
  caption="Selecting RAK4631 board as the WisBlock Core"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_4.png"
  width="90%"
  caption="Selecting the serial port of RAK4631 WisBlock Core"
/>

::: tip 📝 NOTE
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

5. Then upload the code as shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_5.png"
  width="90%"
  caption="Uploading the RAK12052 sample code"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_6.png"
  width="90%"
  caption="Uploading the RAK12052 sample code"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK12052 WisBlock Thermal IR Array module that can be found on the [RAK12052 WisBlock Example Code Repository](https://github.com/RAKWireless/RAK12052-MLX90640).
:::

6. When you successfully uploaded the sample code, open the Serial Monitor of the Arduino IDE to monitor the thermal IR array module reading logs.

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_7.png"
  width="90%"
  caption="Sample code successfully uploaded to RAK4631"
/>

<rk-img
  src="/assets/images/wisblock/rak12052/quickstart/RAK12052_Sample_8.png"
  width="90%"
  caption="Readings from the Serial Monitor"
/>


