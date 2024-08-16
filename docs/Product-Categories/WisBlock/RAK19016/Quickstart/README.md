---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19016. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19016/RAK19016.png
tags:
  - quickstart
  - wisblock
  - RAK19016
prev: ../Overview/
next: ../Datasheet/
---

# RAK19016 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19016 WisBlock 5~24&nbsp;V Power Slot Module, make sure to prepare the necessary items listed below.

#### Hardware

- <a href="https://store.rakwireless.com/products/rak19016-5-24v-power-slot-module?utm_source=RAK19016&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK19016 WisBlock 5~24&nbsp;V Power Slot Module</a> 
- Your choice of <a href="https://store.rakwireless.com/collections/wisblock-base/" target="_blank">WisBlock Base board with Power Slot</a> 
- Your choice of <a href="https://store.rakwireless.com/collections/wisblock-core" target="_blank">WisBlock Core</a> 
- <a href="https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Li-Ion/LiPo battery (optional)</a> 
- <a href="https://store.rakwireless.com/products/rak5804-wisblock-interface-extension-board?_pos=1&_sid=28059bad2&_ss=r" target="_blank">RAK5804 WisBlock Interface Module</a> (Reprogramming of the WisBlock Core via USB of RAK5804)

#### Software

##### Arduino

- Download and install the <a href="https://www.arduino.cc/en/Main/Software" target="_blank">Arduino IDE</a> .
- To add the RAKwireless WisBlock Core boards to your Arduino Boards Manager, install the <a href="https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index" target="_blank">RAKwireless Arduino BSP</a> .

## Product Configuration

### Hardware Setup

RAK19016 should be attached to the power slot connector of WisBlock Base board with power slot. The 5~24&nbsp;V<sub>DC</sub> input voltage must be connected to the 3-pin screw terminal connector. The LiPo/Li-Ion battery can be connected to the standard battery connector.

:::warning ⚠️ WARNING

RAK19016 **only** supports WisBlock Base boards with power slot. It is not compatible with all WisBlock Base boards.

:::

For more information about RAK19016, refer to the <a href="../Datasheet/" target="_blank">Datasheet</a>.

#### RAK19016 Connection to WisBlock Base board with Power Slot

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/rak19016_rak19010.svg"
  width="85%"
  caption="RAK19016 connected to a WisBlock Base board with Power Slot"
/>

::: tip 📝 NOTE
The voltage of the battery must not exceed 4.3&nbsp;V.
:::

#### RAK19016 Supplemented by RAK5804 to Support WisBlock Core Reprogramming

Since there is no USB connector on RAK19016, the only way to upload the code is by using RAK5804.

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/rak19016_rak5804.svg"
  width="80%"
  caption="RAK19016 and RAK5804 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling Procedure

The RAK19016 module can be mounted on the power slot of the WisBlock Base board, as shown in **Figure 3**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK19016 mounting connection to WisBlock Base module"
/>

##### Disassembling Procedure

The procedure in disassembling any type of WisBlock module is the same.

1. Start by removing the screws.

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 6**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak19016/quickstart/detach_module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the <a href="https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/" target="_target">WisBlock Pin Mapper</a> tool for possible conflicts.
:::

#### Battery Connector

##### Rechargeable Battery

RAK19016 supports a rechargeable Li-Ion/LiPo battery via the dedicated connector. The battery and external 5~24&nbsp;V<sub>DC</sub> input can simultaneously be connected to provide power to all WisBlock modules. The 5~24&nbsp;V<sub>DC</sub> goes to a buck converter with 4.4&nbsp;V<sub>DC</sub> output which is higher than the max 4.2&nbsp;V<sub>DC</sub> of LiPo battery. 5~24&nbsp;V<sub>DC</sub> is the primary power source and also charges the LiPo battery at the same time.

The matching connector for the rechargeable battery wires is a <a href="https://www.jst-mfg.com/product/detail_e.php?series=199" target="_blank">JST PHR-2 2&nbsp;mm pitch female</a>. A <a href="https://store.rakwireless.com/products/battery-connector-cable" target="_blank">cable assembly</a> for the rechargeable battery connector is also available for purchase in **RAK store**.

:::warning ⚠️ WARNING

- Improper handling of the battery can be harmful.
- Only 3.7~4.2&nbsp;V rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- Make sure the battery wires, both rechargeable and non-rechargeable, match the polarity on the RAK19016 board. Not all batteries have the same wiring.

:::

### Software Setup

There is no software required to use RAK19016. But to control the two user LEDs and monitor the battery voltage, it must be attached to a WisBlock Base and WisBlock Core.

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the <a href="https://github.com/RAKWireless/WisBlock/tree/master/examples" target="_blank">WisBlock Example code repository</a>. The example codes on folder `common` are compatible with <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?_pos=1&_sid=b95028f52&_ss=r&variant=37505443791046" target="_blank">RAK4631</a>, <a href="https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?_pos=1&_sid=978afa15b&_ss=r&variant=42402030452934" target="_blank">RAK11200</a>, and <a href="https://store.rakwireless.com/products/rak11310-wisblock-lpwan-module?_pos=1&_sid=ef971caa0&_ss=r" target="_blank">RAK11310 WisBlock Cores</a>. The two user LEDs of RAK19016 can be accessed using macro definitions `LED_GREEN` / `PIN_LED1` for the green LED and `LED_BLUE` / `PIN_LED2` for the blue LED. For the battery voltage reading, `WB_A0` is used.

