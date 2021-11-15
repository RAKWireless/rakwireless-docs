---
rak_img: /assets/images/wisblock/rak19003/overview/RAK19003_home.png
rak_desc: RAK19003 is a mini base board that connects a WisBlock Core and two WisBlock modules together. It also provides the power supply for the attached WisBlock modules.
rak_grp: [wisblock, wisbase]
next: ../Quickstart/
prev: ../../
tags:
    - RAK19003
    - wisblock
---


# RAK19003 WisBlock Mini Base Board

Thank you for choosing **RAK19003 WisBlock Mini Base Board** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentation for your product.

* [RAK19003 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
<!---* [WisBlock Quick Start Guide](../../Quickstart/)-->
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK19003 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK19003.stp)
* [24-Pin Female Connector 3D File (Sensor Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F24S1003K6M.stp)
* [40-Pin Female Connector 3D File (Core Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F40S1003K6M.stp)


## Product Description


**RAK19003** is a **WisBlock Base** board that connects **WisBlock Core** and **WisBlock Modules**. It provides the power supply and interconnection to the modules attached to it. It has one slot reserved for the WisBlock Core module and two Slot A-B for WisBlock Modules. The WisBlock Core is attached on the top side, and the WisBlock Modules are attached to the bottom side of the RAK19003 WisBlock Base board. Slot B holds modules up to 23&nbsp;mm in size, while Slot A supports 10&nbsp;mm WisBlock Modules. Also, there are two **2.54&nbsp;mm pitch headers** for extension interface with **BOOT**, **I2C**, and **UART** pins.

For convenience, there is a Type-C USB connector that is connected directly to WisBlock Core MCU’s USB port (if supported) or to a USB-UART converter depending on the WisBlock Core. It can be used for uploading firmware or serial communication. The USB-C connector is also used as a battery charging port.

WisBlock Modules are connected to the RAK19003 WisBlock Base board via **high-speed board to board connectors**. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

Using **RAK19003** as your WisBlock Base board, you can make your project compact, which is ideal in small enclosures. You can also use a [RAK19005 WisBlock Sensor Extension Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to position WisBlock Modules apart from the WisBlock Base board or in any part of your case. **RAK19003** has connectors for the following:

* 1 WisBlock Core module
* 2 WisBlock Modules compatible to Slot A-B
* 1 Type-C USB port for programming and debugging
* 3.7&nbsp;V Rechargeable battery connector
* 5&nbsp;V Solar Panel connector
* 2 Headers with BOOT, I2C, and UART pins accessible with solder contacts

Additionaly, it has two user definable LED’s, one power supply/charging indicator LED and a reset button.

## Product Features

* **Power supply**     
    * Supports both 5&nbsp;V USB and 3.7&nbsp;V rechargeable battery as power supply.
    * Has a connector for a 5&nbsp;V solar panel to recharge the battery in a remote solution.     
    * Control of power consumption    
    * Has an electronic load switch to power the **WisBlock modules**. The power supply for the **WisBlock modules** boards can be controlled by the **WisBlock Core** modules application.    

* **Size**    
    * A compact size of 30 x 35&nbsp;mm, which lets you create solutions that fit into smallest housings.


## Prerequisites 

WisBlock Mini Base is amazingly easy to use and requires only a Type-C USB cable to start developing with the system.

:::warning ⚠️ WARNING    
- Only 3.7-4.2&nbsp;V Rechargeable Li-Ion batteries are supported. Do not use other types of batteries with the system.    
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.    
:::
