---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19012. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19012/overview/RAK19012_home.png
tags:
  - quickstart
  - wisblock
  - RAK19012
prev: ../Overview/
next: ../Datasheet/
---

# RAK19012 Quick Start Guide
## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19012 WisBlock USB LiPo Solar Power Slot Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK19012 WisBlock USB LiPo Solar Power Slot Module](https://store.rakwireless.com/products/rak19012-usb-lipo-solar-power-slot-module?utm_source=RAK19012&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base board with Power Slot](https://store.rakwireless.com/collections/wisblock-base/)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)


#### Software

##### Arduino

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK19012 should be attached to the power slot connector of WisBlock Base board with power slot. It is a power board that provides the same features and interfaces that standard WisBlock Base boards provide - USB C connector, battery and solar panel connector, LED indicators, and reset button.

:::warning ⚠️ WARNING

RAK19012 **only** supports WisBlock Base boards with Power Slot. It is not compatible with all WisBlock Base boards.

:::

For more information about RAK19012, refer to the [Datasheet](../Datasheet/).

#### RAK19012 Connection to WisBlock Base board with Power Slot

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/rak19012-rak19010.svg"
  width="70%"
  caption="RAK19012 pinout and connector assignments"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

RAK19012 module can be mounted on the power slot of the WisBlock Base board, as shown in **Figure 2**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK19012 mounting connection to WisBlock Base module"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock module is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts.
:::

#### Battery and Solar Panel Connector

<rk-img
  src="/assets/images/wisblock/rak19012/quickstart/rak19012-battery-solar.svg"
  width="50%"
  caption="Battery and solar panel connectors polarity"
/>

##### Rechargeable Battery

RAK19012 can be powered by a rechargeable Li-Ion/LiPo battery via the dedicated connectors, as shown in **Figure 6**. The matching connector for the rechargeable battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199). A cable assembly for the rechargeable battery connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/battery-connector-cable).

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- Make sure the battery wires, both rechargeable and non-rechargeable, match the polarity on the RAK19012 board. Not all batteries have the same wiring.

:::

#### Solar Panel Connection

The battery can be recharged, as well, via a small Solar Panel, as shown in **Figure 6**. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287). A cable assembly for the solar panel connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/solar-panel-connector-cable).


:::warning ⚠️ WARNING

- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- The GND pin of the solar panel connector is located on edge of the board. Make sure the solar panel wires match the polarity on the RAK19012 board.

:::

### Software Setup

There is no software required to use RAK19012. But to control the two user LEDs and monitor the battery voltage, they must be attached to a WisBlock Base and WisBlock Core.

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the [WisBlock Example code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples). The example codes on folder `common` are compatible with RAK4631, RAK11200, and RAK11310 WisBlock Cores.
The two user LEDs of RAK19012 can be accessed using macrodefinitions `LED_GREEN` / `PIN_LED1` for the green LED and `LED_BLUE` / `PIN_LED2` for the blue LED. For the battery voltage reading, `WB_A0` is used.

