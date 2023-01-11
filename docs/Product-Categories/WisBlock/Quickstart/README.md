---
rak_desc: WisBlock is a modular system that makes it easy to implement a low power wide area network (LPWAN) into your IoT solution. WisBlock is going with your solution from rapid prototyping to mass production without the need to create new hardware modules for each step.
rak_img: /assets/images/wisblock/quickstart/wisblock.png
sidebar: auto
sidebarDepth: 4
---

# WisBlock Quick Start Guide

<rk-img
  src="/assets/images/wisblock/quickstart/wisblock.png"
  width="85%"
  caption="WisBlock Ecosystem"
/>

## Overview

### Description

**WisBlock** is a modular system that makes it easy to implement a low power wide area network (LPWAN) into your IoT solution.
WisBlock is going with your solution from rapid prototyping to mass production without the need to create new hardware modules for each step.

- In the development phase, WisBlock modularity allows you to test different microcontrollers, sensors, communication technology, IO options by changing modules with the simple plug-in modules.
- WisBlock industrial-grade modules can be used in mass production without the need to redesign the prototypes.
- Even once deployed, devices can be modified or repaired with minimal waste and effort.

### Key Features

**Click. Code. Connect.**

WisBlock is created with 4 modular blocks.

1. **WisBlock Base** is the baseboard that connects everything.
2. **WisBlock Core** is the computation and communication module.
3. **WisBlock Sensor** is a selection of sensor and input modules.
4. **WisBlock IO** extends the output and communication possibilities of the WisBlock Core.

### WisBlock Highlights

- With the use of a compact connector, this makes its size exceptionally small. A WisBlock Base board, which is the base carrier, is only **30&nbsp;mm by 60&nbsp;mm** in size.
- Using an industrial rated connector, it enables you to use the same modules from rapid prototyping to testing to final product.
- WisBlock is not only modular on the hardware base but with ready to use software blocks it is simple to create an application to match your solution requirements.

#### WisBlock Base

- WisBlock Base is the **carrier** for all WisBlock modules.
- It contains the power supply for all modules, **USB/5V connector**, **battery charger**, **solar charger**, **status LED**, and **reset button**.
- One WisBlock Base can hold one microcontroller module (WisBlock Core), one IO module (WisBlock IO), and up to four sensor modules (WisBlock Sensor) application to match your solution requirements.

#### WisBlock Core

- WisBlock Core is the **data processing center** of WisBlock.
- Some WisBlock Core modules also offer LoRa/LoRaWAN communication and additional communication means like Bluetooth, Bluetooth Low Energy, or Wi-Fi.

#### WisBlock Sensor

- WisBlock Sensor is the **data acquisition module** of WisBlock.
- It includes analog, digital, and environmental as well as location acquisition sensors.

#### WisBlock IO

- WisBlock IO modules **extend the input and output possibilities** of WisBlock.
- Options include cellular, displays, LEDs, button interfaces, and additional USB and GPIO ports as well as Wi-Fi.

## Quick Start Guide

### Software Setup

Getting started with the WisBlock products is simple and straightforward. The first thing you need is to set up your software development environment. Listed are the detailed tutorials on how to setup Arduino™ IDE as well as PlatformIO extensions compatible with WisBlock Core boards:

1. [Setup Arduino™ IDE for all WisBlock Core](../../../Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/)

2. [Setup PlatformIO for RAK4631](../../../Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/)

3. [Setup PlatformIO for RAK11200](/Product-Categories/WisBlock/RAK11200/Quickstart/#install-platformio)

Once you are done setting up your software environment, you can access the example codes on the [WisBlock examples repository](https://github.com/RAKWireless/WisBlock/tree/master/examples).

### Hardware Setup

<rk-img
  src="/assets/images/wisblock/quickstart/wisblock-hardware-setup.png"
  width="40%"
  caption="WisBlock Hardware Setup"
/>

#### WisBlock Base

WisBlock Base is the baseboard that connects the WisBlock Core board with the WisBlock IO and WisBlock Sensor modules.

The standard WisBlock Base has a USB interface that connects with the core MCU's USB pins so that you can use Arduino™ IDE to upload and debug it directly. Depending on the version a WisBlock Base has three to six module slots:

- One “CPU-SLOT” which is used for the WisBlock Core module.
- One to eight slots for WisBlock Sensor modules, named “SLOT A”, “SLOT B”, “SLOT C”, and so on.
- One or two “IO SLOT” for WisBlock IO modules like the RS485 board, 4~20&nbsp;mA or 0~5&nbsp;V board, Wi-Fi board, Cellular board.

WisBlock Base is the power supply for all WisBlock modules. It supports 5&nbsp;V USB input, battery supply, and a solar panel to recharge the battery.

WisBlock Core, WisBlock Sensor, and WisBlock IO modules are connected to WisBlock Base by just plugging them into the corresponding slots.

To make sure the modules are properly connected, use screws to keep them in their slots.

:::warning ⚠️ WARNING

- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. Do not use other types of batteries with the system.

- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.

- Make sure the battery wires are matching the polarity on the RAK5005-O board. Not all batteries have the same wiring.

:::

<rk-img
  src="/assets/images/wisblock/quickstart/battery-connection.gif"
  width="40%"
  caption="WisBlock Base Connection"
/>

#### WisBlock Core

WisBlock Core is the processing unit of your IoT solution. You can select a specific WisBlock Core based on your application and device requirements. WisBlock Cores vary in features like connectivity type, processing capability, size of memory, available peripherals, and low power modes.

All WisBlock Core modules are designed to be integrated with WisBlock Sensors and WisBlock IO. This integration extends the functionality and connectivity options of the WisBlock Core. All are designed for battery optimized low power consumption.

Programming of the WisBlock Core modules is done over the USB connector on the WisBlock Baseboard. For flashing a custom bootloader or to debug your application, WisBlock Core modules have exposed programming pins for firmware uploading and debugging like the J-Link interface.

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.
:::

:::tip 📝 NOTE:
Check the [WisBlock Core](../#wisblock-core) section for all available variants.
:::

#### WisBlock Sensor

WisBlock Sensor offers a range of sensors for sensing environmental conditions (temperature and humidity), location, and movement conditions (GNSS location and accelerometer) that you just plug into WisBlock Base. This provides an easier way of completing your application with the required sensors.

Most WisBlock Sensor modules are small boards that measure 10 x 10&nbsp;mm. Some modules like the GNSS module are larger with 10 x 22&nbsp;mm and occupy two sensor slots on the baseboard.

WisBlock Sensor modules in Slot A or Slot C can be placed in two directions. Either being above the WisBlock Base board or sticking out of the WisBlock Base board. This way sensors that are sensitive to the heat dissipated from the WisBlock Base can give better measurement results.

:::warning ⚠️ WARNING
Make sure to fix the module with the screws to ensure a proper function.
:::

:::tip 📝 NOTE:
Check the [WisBlock Sensor](../#wisblock-sensor) section for all available modules.
:::

#### WisBlock IO

WisBlock IO extensions provide your application with interfaces and communication extensions that are not covered by WisBlock Core or WisBlock Sensor blocks. This includes the following:

- IO connectors to add user interfaces like keyboards, buttons, and displays.
- Adapter for third party sensor boards from **Seeed Grove**, **Sparkfun QWICC**, and **MikroElektronika Click!** Boards.
- Sensor interfaces like **4-20mA**, **5V analog input**, **I2C**, **RS232** or **RS485**.
- Communication modules with **LTE NB-IoT**, **Wi-Fi**, **Bluetooth**, and **NFC**.
- Alternative power supplies like **POE**, **24&nbsp;V**.

WisBlock IO modules are around 25 x 35&nbsp;mm in size.

:::warning ⚠️ WARNING
Make sure to fix the module with the screws to ensure a proper function.
:::

:::tip 📝 NOTE:
Check the [WisBlock IO](../#wisblock-io) section for all available modules.
:::
