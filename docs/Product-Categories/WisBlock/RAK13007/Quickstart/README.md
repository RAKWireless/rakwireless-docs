---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK13007. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak13007/overview/RAK13007_home.png
tags:
  - quickstart
  - wisblock
  - RAK13007
prev: ../Overview/
next: ../Datasheet/
---

# RAK13007 Quick Start Guide


## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK13007 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK13007 WisBlock Relay Module](https://store.rakwireless.com/products/rak13007-wisblock-relay?utm_source=RAK13007&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino board, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Block Diagram

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/block-diagram.png"
  width="70%"
  caption="RAK13007 Block Diagram"
/>

The RAK13007 uses one relay to isolate the output of the MCU. The dielectric strength between coil and contacts of a relay is 2500&nbsp;V<sub>DC</sub>, 50/60&nbsp;Hz 1&nbsp;min.

:::warning ⚠️ WARNING
<rk-img
  src="/assets/images/wisblock/rak13001/quickstart/warning.png"
  width="90%"
  caption="Safety Precaution"
/>
:::

### Hardware Setup

RAK13007 is a WisBlock Interface module that extends the WisBlock system to be used on isolated digital output applications. There is one digital output that is isolated by an electromechanical relay. The RAK13007 digital output is used to programmatically switch on/off devices operating at high voltage or high current applications.

For more information about RAK13007, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak13007-assembly.png"
  width="50%"
  caption="RAK13007 connection to WisBlock Base"
/>


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

The RAK13007 module can be mounted on the IO slot of the WisBlock Base board, as shown in **Figure 4**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/mounting-mechanism.png"
  width="60%"
  caption="RAK13007 mounting connection to WisBlock Base module"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/removing_screw.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/detach_silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 7**, to detach the module from the base board.

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/detach_module.png"
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

In the example, you will be using the module. Before connecting high voltage modules to the RAK13007, make sure to follow safety precautions.

For RAK13007, the accessible pin assignment is defined as follows in the Arduino IDE:

- `WB_IO4` for Relay Output pin

#### Initial Test of the RAK13007 WisBlock Module

##### Arduino Setup

**Figure 8** is an illustration on how to use the RAK13007 relay for switching applications. You can connect any module or device to the RAK13007 as long as it operates on its recommended voltage rating.

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak13007-example.png"
  width="50%"
  caption="RAK13007 switching the LED"
/>

If you have already installed the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index), the WisBlock Core and example code should now be available on the Arduino IDE.

1. You need to select first the WisBlock Core you have.

**RAK4631 Board**

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak4631-board.png"
  width="90%"
  caption="Selecting RAK4631 as WisBlock Core"
/>

**RAK11200 Board**

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak11200-board.png"
  width="90%"
  caption="Selecting RAK11200 as WisBlock Core"
/>

**RAK11310 Board**

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak11310-board.png"
  width="90%"
  caption="Selecting RAK11310 as WisBlock Core"
/>

2. Next, copy the following sample code into your Arduino IDE:

```c
/**
   @file RAK13007_Relay_G5LE-14-DC3.ino
   @author rakwireless.com
   @brief Withstands impulse of up to 4,500 V
   @version 0.1
   @date 2021-8-28
   @copyright Copyright (c) 2020
**/
#include <Wire.h>

void setup() {
  pinMode(WB_IO2, OUTPUT);
  digitalWrite(WB_IO2, HIGH);
  pinMode(WB_IO4, OUTPUT);
  // Initialize serial for output.
  Serial.begin(115200);
}

void loop() {
  digitalWrite(WB_IO4, LOW);
  delay(5000);
  digitalWrite(WB_IO4, HIGH);
  delay(5000);
}

```
::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for your WisBlock Core Module that can be found on the [RAK13007 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13007_Relay_G5LE-14-DC3). This sample code in Github will work on all WisBlock Core.
:::

<br>

3. Once the example code is open, you can now select the right serial port and upload the code, as shown in **Figure 12** and **Figure 13**.

::: tip 📝 NOTE
If you're using the RAK11200 as your WisBlock Core, the RAK11200 requires the **Boot0** pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak4631-selectport.png"
  width="90%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak13007/quickstart/rak4631-upload.png"
  width="90%"
  caption="Uploading the RAK13007 example code"
/>

4. When you have successfully uploaded the example sketch, you will now see the RAK13007 Relay module switches the LED on and off every 5 seconds. Also, notice that the built-in red led on the RAK13007 module lights on when there is contact, or it is normally closed, and then lights off when it is normally open. You'll also be able to hear clicking sounds from the RAK13007 module, which means that the relay is switching.
