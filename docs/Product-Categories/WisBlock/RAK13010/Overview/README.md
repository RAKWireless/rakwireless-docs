---
rak_img: /assets/images/wisblock/rak13010/RAK13010.png
rak_desc: RAK13010 is a WisBlock Interface module that extends the WisBlock system. It is an SDI-12 (Serial Digital Interface at 1200 baud rate) module, which is an asynchronous serial communications protocol for intelligent sensors that monitor environment data.
rak_grp: [wisblock, wisinterface]
next: ../Datasheet/
prev: ../../
tags:
    - wisblock
    - RAK13010
---


# RAK13010 WisBlock SDI-12 Module

Thank you for choosing **RAK13010 WisBlock SDI-12 Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK13010 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK13010.stp)
* [40-Pin Male Connector 3D file](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)
* [WisBlock IO Tutorial](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisBlock-IO-Tutorial/)


## Product Description

RAK13010 is a WisBlock Interface module that extends the WisBlock system. The SDI-12 (Serial Digital Interface at 1200 baud rate) module is an asynchronous serial communications protocol for intelligent sensors that monitor environment data. It consists of 3 wires: **SDI-12_12V**, **SDI-12_DATA**, and **GND**.

The SDI-12 bus is a bidirectional interface for the conversion of commands and data into UART to SDI-12 and vice versa using a 3.3&nbsp;V microcontroller. The data logger requests data from the intelligent sensors, each identified with a unique address. In short, The data logger is the master, and the sensors are slave devices on the bus. The RAK13010 makes it easier for you to connect wires from multiple SDI-12 sensors into one set of terminals on a data logger.

## Product Features

* **Module specifications**
    * Voltage supply: **VBAT and 3.3&nbsp;V**
    * SDI-12 communications protocol
    * Supports the 3-wire SDI-12 communication cable
    * Provides the 12&nbsp;V supply for the SDI-12 sensors and has an option to use an external 12&nbsp;V supply if required.
    * Operating temperature: **-40 &nbsp;°C ~ 85&&nbsp;°C**

* **Size**
    * 35 x 25&nbsp;mm

## Prerequisites

To use a **RAK13010**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** provides power supply to the **RAK13010** module. Furthermore, you need a **WisBlock Core** module to control the relay via software code.

:::warning ⚠️ WARNING
Make sure to fix the module with the screws to ensure a proper function.
:::