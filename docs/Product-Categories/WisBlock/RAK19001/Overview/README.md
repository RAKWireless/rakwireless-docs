---
rak_img: /assets/images/wisblock/rak19001/RAK19001.png
rak_desc: RAK19001 is a full WisBlock Base board that has one Core slot, two IO slots, and six sensor slots for WisBlock modules. It also provides the power supply for attached WisBlock modules.
rak_grp: [wisblock, wisbase]
next: ../Quickstart/
prev: ../../
tags:
    - RAK19001
    - wisblock
---


# RAK19001 WisBlock Dual IO Base Board

Thank you for choosing **RAK19001 WisBlock Dual IO Base Board** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK19001 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK19001 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK19001.stp)
* [24-Pin Female Connector 3D File (Sensor Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F24S1003K6M.stp)
* [40-Pin Female Connector 3D File (Core Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F40S1003K6M.stp)


## Product Description


**RAK19001** is a **WisBlock Base** board that connects **WisBlock Core** and **WisBlock Modules**. It provides the power supply and interconnection to the modules attached to it. It has one slot reserved for the WisBlock Core module, two IO slots, and six sensor slots A to F for WisBlock Modules. Also, there are two **2.54&nbsp;mm pitch headers** that expose all key input-output pins of the WisBlock Core that includes UART, I2C, SPI, and many IO Pins.

For convenience, there is a Type-C USB connector that is connected directly to WisBlock Core MCU’s USB port (if supported) or to a USB-UART converter depending on the WisBlock Core. The USB-C connection can be used for uploading firmware, serial communication, and charging a rechargeable battery. RAK19001 also includes a slide switch to select between rechargeable and non-rechargeable batteries.

WisBlock Modules are connected to the RAK19001 WisBlock Base board via **high-speed board-to-board connectors**. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

Additionally, it has two user-definable LEDs, one power supply/charging indicator LED, and one user-defined button.

## Product Features

* Flexible building block design, which enables modular functionality and expansion
* High-speed interconnection connectors in the WisBlock Base board to ensure signal integrity
* **Multiple Headers and Modules Slots** for WisBlock Modules
    * Two (2) IO slots
    * Six (6) Sensor (A to F) slots
    * All key input-output pins of WisBlock Core are exposed via headers
    * Access to various communication bus via headers: I2C, SPI, UART, and USB
    * One user-defined push button switch
* **Power supply**
    * Supports both 5&nbsp;V USB, 3.7&nbsp;V rechargeable battery, and 3.3 to 5.5&nbsp;V non-rechargeable battery as power supply
    * The power supply for the **WisBlock modules** boards can be controlled by the **WisBlock Core** modules to minimize power consumption
    * Slide switch to select between a rechargeable or non-rechargeable battery
* **Size**
    * 60 x 67&nbsp;mm


## Prerequisites

RAK19001 WisBlock Dual IO Base Board is easy-to-use and requires only a Type-C USB cable to start developing with the system.

:::warning ⚠️ WARNING
- On rechargeable batteries, only 3.7-4.2&nbsp;V rechargeable Li-Ion batteries are supported. Do not use other types of rechargeable batteries with the system.
- On non-rechargeable batteries, the ideal range is 3.3 to 5.5&nbsp;V.
- Only 5&nbsp;V solar panels (up to 6&nbsp;V) are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::
