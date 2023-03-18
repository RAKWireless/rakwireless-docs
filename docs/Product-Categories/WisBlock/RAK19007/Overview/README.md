---
rak_img: /assets/images/wisblock/rak19007/RAK19007.png
rak_desc: RAK19007 WisBlock Base Board 2nd Gen is the new base board that allows you to attach WisBlock modules. In addition, this board also comprises a Type-C USB connector, indicator LEDs, buttons, and sensor connectors.
rak_grp: [wisblock, wisbase]
next: ../Quickstart/
prev: ../../
tags:
    - RAK19007
    - wisblock
---


# RAK19007 WisBlock Base Board 2nd Gen

Thank you for choosing **RAK19007 WisBlock Base Board 2nd Gen** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.


* [RAK19007 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK19007 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK19007.stp)
* [24-Pin Female Connector 3D File (Sensor Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F24S1003K6M.stp)
* [40-Pin Female Connector 3D File (Core Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F40S1003K6M.stp)


## Product Description


**RAK19007** is a **WisBlock Base Board 2nd Gen** that connects **WisBlock Core**, **WisBlock IO**, and **WisBlock Modules**. It provides the power supply and interconnection to the modules attached to it. It has one slot reserved for the WisBlock Core module and four slots A-D for WisBlock modules. The WisBlock Core is attached on the top side, and the WisBlock modules are attached to the top or bottom side of the RAK19007. The Slot D holds modules up to 23&nbsp;mm in size, while slots A to C support 10&nbsp;mm WisBlock modules. Also, there are three **2.54&nbsp;mm pitch headers** for extension interface with **BOOT**, **GPIO**, **I2C**, and **UART** pins.

For convenience, there is a Type-C USB connector that is connected directly to WisBlock Core MCU’s USB port (if supported) or to a USB-UART converter depending on the WisBlock Core. It can be used for uploading firmware or serial communication. The USB-C connector is also used as a battery charging port.

WisBlock modules are connected to the RAK19007 WisBlock Base board via high-speed board to board connectors. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

You can also use a [RAK19005 WisBlock Sensor Extension Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to position the WisBlock modules apart from the WisBlock Base board or in any part of your case.

**RAK19007** has connectors for the following:

* 1 WisBlock Core module
* 1 WisBlock compatible with IO slot
* 4 WisBlock modules compatible with slots A-D
* 1 Type-C USB port for programming and debugging
* 3.7&nbsp;V Rechargeable battery connector
* 5&nbsp;V Solar panel connector
* Four 4-pin header with BOOT, I2C, and UART pins accessible with solder contacts

Additionally, it has two user-definable LEDs, one power supply/charging indicator LED, and a reset button.

:::tip 📝 NOTE:

**Improvements from RAK5005-O Base board**

- J11 header Analog input changed from AIN0 to AIN1.
- Upgraded to USB C connector.
- Slot D position changed with added TX1/RX1 availability to it.

:::



## Product Features

* **Power supply**
    * Supports both 5&nbsp;V USB and 3.7&nbsp;V rechargeable battery as power supply
    * 5&nbsp;V solar panel connector to recharge the battery in a remote solution
    * Power consumption control
    * **RAK19007** has an electronic load switch to power the **WisBlock modules**. The power supply for the **WisBlock modules** boards can be controlled by the **WisBlock Core** modules application.

* **Size**
    * **RAK19007** has a size of only 30 x 60&nbsp;mm, which lets you create solutions that fit into the smallest housings.


## Prerequisites

WisBlock Base Board Gen2 is amazingly easy to use and requires only a Type-C USB cable to start developing with the system.

:::warning ⚠️ WARNING
- Only 3.7-4.2&nbsp;V Rechargeable Li-Ion batteries are supported. Do not use other types of batteries with the system.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::
