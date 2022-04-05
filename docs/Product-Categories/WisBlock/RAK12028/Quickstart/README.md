---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK12028. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak12028/overview/RAK12028_home.png
tags:
  - quickstart
  - wisblock
  - RAK12028
prev: ../Overview/ 
next: ../Datasheet/ 
---

# RAK12028 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK12028 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK12028 WisBlock T-Beam-Fork Connector Module](https://store.rakwireless.com/products/rak12028-rak12031-wisblock-through-beam-fork-sensor?utm_source=RAK12028&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable)

#### Software

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [Github repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK12028 is a Through-Beam-Fork (TBF) connector module. It has one (1) standard WisBlock sensor connector, which you can connect with the WisBlock Base such as RAK5005-O. It also has one (1) 6-pins connector dedicated to the RAK12031. The [RAK12031](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12031/Overview/) is a separate Through-Beam-Fork sensor that can be connected to the RAK12028 connector module using a cable.

For more information about RAK12028, refer to the [Datasheet](../Datasheet/).

RAK12028 module can be connected to the sensor's slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, C to F**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak12028/quickstart/rak12028-assembly.png"
  width="35%"
  caption="RAK12028 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slots A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak12028/quickstart/mounting-mechanism.png"
  width="50%"
  caption="RAK12028 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak12028/quickstart/removing-screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak12028/quickstart/detach-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak12028/quickstart/detach-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
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

For the software configuration and example, refer to [RAK12031 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12031/Quickstart/#software-configuration-and-example).
