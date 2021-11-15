---
rak_img: /assets/images/wisblock/rak5005-o/overview/RAK5005-O_home.png
rak_desc: RAK5005-O is the base board that connects all WisBlock modules together. It also provides the power supply for attached WisBlock modules.
rak_grp: [wisblock, wisbase]
next: ../Quickstart/
prev: ../../
tags:
    - RAK5005-O
    - wisblock
---


# RAK5005-O WisBlock Base Board

Thank you for choosing **RAK5005-O WisBlock Base Board** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentation for your product.

* [RAK5005-O Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
<!---* [WisBlock Quick Start Guide](../../Quickstart/)-->
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK5005-O Baseboard Installation Guide](../../../../Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/)
* [RAK5005-O 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK5005-O.stp)
* [24-Pin Female Connector 3D File (Sensor Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F24S1003K6M.stp)
* [40-Pin Female Connector 3D File (Core and IO Slot)](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/F40S1003K6M.stp)


## Product Description


**RAK5005-O** is a WisBlock Base board that connects all **WisBlock** modules together and provides the power supply for attached **WisBlock** modules.

The **RAK5005-O** has a one slot reserved for WisBlock Core module，four Slot A-D for WisBlock Module and one slot one IO Slot for bigger WisBlock Modules. Also, there are also **2.54 mm pitch connectors** for extension interface, such as **I2C**, **UART**, and **GPIO pins**.

For convenience, there is a USB connector for debugging, it is connected directly to MCU’s USB port (if supported). The customer can access the internal MCU by connecting to a computer’s USB port directly. This USB connector is also used as a battery charging port.

For each module, a method is designed to connect and fasten the module easily. These connectors are **high-speed board to board connector**, they provide signal integrity for each data bus. A set of screws are used for attaching the module under the environment with vibrations.

To avoid electromagnetic interference and heating interference, the sensor connectors on the WisBlock Base 
are designed to be installed on both sides of the PCB. Thus a sensor module can be attached either on the top layer or the bottom layer of the WisBlock Base board.


**RAK5005-O** is as well the mounting base when you put your solution into a case. **RAK5005-O** has connectors for the following:

* 1 WisBlock Core module
* 1 WisBlock Module compatible with IO Slot
* 4 WisBlock Modules compatible to Slot A-D
* 1 USB port for programming and debugging
* 3.7&nbsp;V Rechargeable battery connector
* 5&nbsp;V Solar Panel connector
* I2C, UART, GPIO's and analog input accessible with solder contacts

It has as well two user definable LED’s and one power supply/charging indicator LED and a reset button.

## Product Features

* **Power supply**     
    * **RAK5005-O** supports both 5&nbsp;V USB and 3.7&nbsp;V rechargeable battery as power supply. In addition, it has a connector for a 5&nbsp;V solar panel to recharge the battery in a remote solution.     
    * Control of power consumption    
    **RAK5005-O** has an electronic power switch for the supply to the **WisBlock modules**. The power supply for some of the **WisBlock Sensor** boards and most of the **WisBlock modules** boards can be controlled by the **WisBlock Core** modules application.    

* **Size**    
    * **RAK5005-O** has a size of only 30 x 60&nbsp;mm which lets you create solutions that fits into smallest housings.


## Prerequisites 

WisBlock Base is amazingly easy to use and requires only a USB cable to start developing with the system.

:::warning ⚠️ WARNING    
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. Do not use other types of batteries with the system.    
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.    

:::
