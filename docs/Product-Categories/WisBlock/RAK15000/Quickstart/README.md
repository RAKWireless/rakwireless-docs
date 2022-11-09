---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK15000. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak15000/overview/RAK15000_home.png
tags:
  - quickstart
  - wisblock
  - RAK15000
prev: ../Overview/
next: ../Datasheet/
---

# RAK15000 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK15000 WisBlock module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK15000 WisBlock EEPROM Module](https://store.rakwireless.com/products/wisblock-eeprom-module-rak15000?utm_source=WisBlockRAK15000&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [Arduino IDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

WisBlock can integrate this module which makes it easy for you to save a lot of data, making it readily available to applications that need to access it frequently. The RAK15000 EEPROM Memory module has 1,000,000 write cycles, so it can be used to store constantly changing data.

For more information about RAK15000, please refer to the [Datasheet](../Datasheet/).

The RAK15000 module can be connected to any slot of WisBlock Base to communicate with the WisBlock Core. It will work on **SLOT A, B, C, or D**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak15000_mounting.png"
  width="70%"
  caption="RAK15000 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for Slot A, B, C, and D are properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with one or more M1.2 x 3&nbsp;mm screws, depending on the module.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="Sensor connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK15000 uses I2C communication lines, and it can cause possible conflict especially on some IO modules. For instance, if you are planning to use it in conjunction with the [EPD module](https://store.rakwireless.com/products/wisblock-epd-module-rak14000?utm_source=WisBlockRAK14000&utm_medium=Document&utm_campaign=BuyFromStore), which uses all IO pins, you would have to forego the 3-key keypad (uses IO 3, 5 and 6) and put the EEPROM module on slot D (has IO 5 & 6).
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming your WisBlock Core.

### Software Configuration and Example

The RAK15000 EEPROM has an I2C-Compatible (Two-Wire) Serial Interface. Furthermore, the EEPROM is organized in so-called pages. One page holds 256-byte and there are 1024 pages. Having insight into how the memory cells are organized is important for write and erase operations.

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use:

- [RAK15000 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK15000/Quickstart/#rak15000-in-rak4631-wisblock-core-guide)
- [RAK15000 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK15000/Quickstart/#rak15000-in-rak11200-wisblock-core-guide)
- [RAK15000 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK15000/Quickstart/#rak15000-in-rak11310-wisblock-core-guide)

#### RAK15000 in RAK4631 WisBlock Core Guide

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Now, select the RAK4631 WisBlock Core, as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_board.png"
  width="100%"
  caption="Selecting RAK4631 as the WisBlock Core"
/>

2. Open the RAK15000 sample code.

You can open the example code for RAK4631 WisBlock Core, as shown in **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_rak15000.png"
  width="100%"
  caption="Opening the RAK15000 example code for the RAK4631 WisBlock Core"
/>

3. Install **Adafruit FRAM_I2C** Library.

Once the example code is opened, install the latest version of [Adafruit FRAM_I2C](https://github.com/adafruit/Adafruit_FRAM_I2C) library by clicking the link highlighted in yellow, as shown in **Figure 8**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_lib.png"
  width="100%"
  caption="Opening Adafruit EEPROM library"
/>

To finish the library installation, click on the **Install** button highlighted in yellow, as shown in **Figure 9**.
<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_adafruit_eeprom.png"
  width="100%"
  caption="Installing the Adafruit EEPROM library"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 10** and **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4631_upload.png"
  width="100%"
  caption="Uploading the RAK15000 example code"
/>

The sketch writes a value to a random address. Then it checks the read value and compares it with the written value.

After successful upload, a random number will be written and read to a random address five times.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak4630_logs.png"
  width="90%"
  caption="RAK15000 example code logs"
/>


::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK4630 WisBlock Core Module that can be found on the [RAK4630 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK15000_EEPROM_AT24C02).
:::

#### RAK15000 in RAK11200 WisBlock Core Guide

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Now, select the RAK11200 WisBlock Core, as shown in **Figure 13**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_board.png"
  width="100%"
  caption="Selecting RAK11200 as the WisBlock Core"
/>

2. Open the RAK15000 sample code.

You can open the example code for RAK11200 WisBlock Core, as shown in **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_rak15000.png"
  width="100%"
  caption="Opening the RAK15000 example code for the RAK4631 WisBlock Core"
/>

3. Install **Adafruit FRAM_I2C** Library.

Once the example code is open, install the latest version of [Adafruit FRAM_I2C](https://github.com/adafruit/Adafruit_FRAM_I2C) library by clicking the link highlighted in yellow, as shown in **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_lib.png"
  width="100%"
  caption="Opening the Adafruit EEPROM library"
/>

To finish the library installation, click on the **Install** button highlighted in yellow, as shown in **Figure 16**.
<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_adafruit_eeprom.png"
  width="100%"
  caption="Installing the Adafruit EEPROM library"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 17** and **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

Before uploading your sketch, short circuit BOOT0 and GND pin, and press the reset button. Then click the Upload button as shown below.

<rk-img
  src="/assets/images/wisblock/rak11200/quickstart/rak11200-Boot0-for-flashing.png"
  width="50%"
  caption="Force ESP32 Download mode"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_upload.png"
  width="100%"
  caption="Uploading the RAK15000 example code"
/>

The sketch writes a value to a random address. Then it checks the read value and compares it with the written value.

After successful upload, a random number will be written and read to a random address five times.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_logs.png"
  width="90%"
  caption="RAK15000 example code logs"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11200 WisBlock Core Module that can be found on the [RAK11200 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK15000_EEPROM_AT24C02).
:::


#### RAK15000 in RAK11310 WisBlock Core Guide

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Now, select the RAK11310 WisBlock Core, as shown in **Figure 21**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11300_board.png"
  width="100%"
  caption="Selecting RAK11310 as the WisBlock Core"
/>

2. Open the RAK15000 sample code.

You can open the example code for RAK11200 WisBlock Core, as shown in **Figure 22**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11300_rak15000.png"
  width="100%"
  caption="Opening the RAK15000 example code for the RAK4631 WisBlock Core"
/>

3. Install **Adafruit FRAM_I2C** Library.

Once the example code is open, install the latest version of [Adafruit FRAM_I2C](https://github.com/adafruit/Adafruit_FRAM_I2C) library by clicking the link highlighted in yellow, as shown in **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_adafruit_eeprom.png"
  width="100%"
  caption="Opening the Adafruit EEPROM library"
/>

To finish the library installation, click on the **Install** button highlighted in yellow, as shown in **Figure 24**.
<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11200_lib.png"
  width="100%"
  caption="Installing the Adafruit EEPROM library"
/>

4. After successful installation of the library, you can now select the right serial port and upload the code, as shown in **Figure 25** and **Figure 26**.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11300_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11300_upload.png"
  width="100%"
  caption="Uploading the RAK15000 example code"
/>

The sketch writes a value to a random address. Then it checks the read value and compares it with the written value.

After successful upload, a random number will be written and read to a random address five times.

<rk-img
  src="/assets/images/wisblock/rak15000/quickstart/rak11300_logs.png"
  width="90%"
  caption="RAK15000 example code logs"
/>

::: tip 📝 NOTE
If you experience any error in compiling the example sketch, check the updated code for the RAK11300 WisBlock Core Module that can be found on the [RAK11300 WisBlock Example Code Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK15000_EEPROM_AT24C02).
:::