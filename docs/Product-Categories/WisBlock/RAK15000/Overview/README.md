---
rak_img: /assets/images/wisblock/rak15000/overview/RAK15000_home.png
rak_desc: The RAK15000 is a serial EEPROM module that can be mounted on slot A, B, C, or D of the RAK5005-O base board. It provides 2&nbsp;Mbit (262,144 x 8) of serial EEPROM. The module uses AT24CM02 from Microchip and supports I2C standard mode and fast mode.
rak_grp: [wisblock, wisstorage]
prev: ../../
next: ../Quickstart/
tags:
    - wisblock
    - RAK15000
---


# RAK15000 WisBlock EEPROM Module

Thank you for choosing **RAK15000 WisBlock EEPROM Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentation for your product.

* [RAK15000 Quick Start Guide](../Quickstart)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
<!-- * [WisBlock Quick Start Guide](../../Quickstart/) -->
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK15000 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK15000.stp)
* [24-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M24S1003K6M.stp)
* [WisBlock Sensor Tutorial](/Knowledge-Hub/Learn/WisBlock-Sensor-Tutorial/)

**Example**

For All WisBlock Core Modules:

* [Sample Code: RAK15000 WisBlock EEPROM Module](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/sensors/RAK15000_EEPROM_AT24C02)

## Product Description

The RAK15000 WisBlock EEPROM module, part of the RAKwireless Wisblock series, is a serial EEPROM module with an I2C interface. Designed to work at low-power mode, the standby average consumption is lower than 3&nbsp;µA (VCC = 5.5&nbsp;V). The RAK15000 uses Microchip AT24CM02, which provides 2,097,152 bits of Serial Electrically Erasable and Programmable Read-Only Memory (EEPROM), organized as 262,144 words of 8 bits each.

## Product Features

* 3.3&nbsp;V input voltage, on/off control by the WisBlock Core module
* **Temperature range:** -40&nbsp;°C to +85&nbsp;°C
* Internally organized as 262,144 x 8&nbsp;bit (2&nbsp;Mbit)
* I2C-Compatible (2-wire) Serial Interface
    - 100&nbsp;kHz Standard mode
    - 400&nbsp;kHz Fast Mode
* High Reliability
    - Endurance: 1,000,000 write cycles
    - Data retention: 100 years
* Built in error detection and correction
* 256-byte Page Write Mode
* Random and Sequential Read Modes
* Standby current less than 3&nbsp;µA
* **Module size**: 10 x 10&nbsp;mm

## Prerequisites

To use a **RAK15000**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK15000** module. Furthermore, you need a **WisBlock Core** module to access the EEPROM memory.

:::warning ⚠️ WARNING    
Make sure to fix the module with the screws to ensure a proper function. 
:::
