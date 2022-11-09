---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19014. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19014/overview/RAK19014_home.png
tags:
  - quickstart
  - wisblock
  - RAK19014
prev: ../Overview/
next: ../Datasheet/
---

# RAK19014 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19014 WisBlock Battery USB Power Slot Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK19014 WisBlock Battery USB Power Slot Module](https://store.rakwireless.com/products/usb-battery-power-slot-module-rak19014?utm_source=RAK19014&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- [External battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

##### Arduino

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

The RAK19014 WisBlock Battery USB Power Slot Module is a power board that comprises a battery connector, a reset push button, and a power connector that can connect with the WisBlock Base board.

For more information about RAK19014, refer to the [Datasheet](../Datasheet/).

#### RAK19014 Connection to WisBlock Base

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/rak19014-setup.png"
  width="70%"
  caption="RAK19014 hardware setup"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK19014 WisBlock Battery USB Power Slot Module can be mounted on the Power Slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK19014 mounting connection to WisBlock Base module"
/>


##### Disassembling Procedure

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/removing_screws.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

#### Battery Connector

RAK19014 WisBlock Battery USB Power Slot Module can be powered by an external battery via the dedicated connectors, as shown in **Figure 6**. The matching connector for the battery cable is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199). A cable assembly for the battery connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/battery-connector-cable).

<rk-img
  src="/assets/images/wisblock/rak19014/quickstart/battery.png"
  width="60%"
  caption="External battery connector pin"
/>

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Make sure the battery wires match the polarity on the RAK19014 board. Not all batteries have the same wiring.

:::

### Software Setup

The WisBlock Core is designed to be interfaced with other WisBlock Modules like sensors, displays, and other interfaces. To make useful devices, you need to upload a source code to the WisBlock Core.

Before you continue, you should have already set up either an [Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) or
[PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md).

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the [WisBlock Example code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples). The example codes on folder `common` are compatible with RAK4631, RAK11200, and RAK11310 WisBlock cores.
The two user LEDs of RAK19014 can be accessed using macro definitions `LED_GREEN` / `PIN_LED1` for the green LED and `LED_BLUE` / `PIN_LED2` for the blue LED.