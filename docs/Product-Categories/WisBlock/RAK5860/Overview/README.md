---
rak_img: /assets/images/wisblock/rak5860/RAK5860.png
rak_desc: RAK5860 is a WisBlock Wireless module that extends the WisBlock system with LTE NB-IoT connectivity. It is based on the Quectel BG77 module and supports CAT M1 and CAT NB2 connectivity.
rak_grp: [wisblock, wiswireless]
prev: ../../
next: ../Quickstart/
tags:
    - WisBlock
    - RAK5860
    - Quectel
    - BG77
---

# RAK5860 WisBlock NB-IoT Interface Module

Thank you for choosing **RAK5860 WisBlock NB-IoT Interface Module** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK5860 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK5860 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK5860.stp)
* [40-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)
* [WisBlock IO Tutorial](/Knowledge-Hub/Learn/WisBlock-IO-Tutorial/)

**Examples**:

* [Sample Code: NB IoT](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/communications/Cellular/RAK5860_BG77_Module)

## Product Description

RAK5860 is a WisBlock Wireless module that extends the WisBlock system with LTE NB-IoT connectivity. It is based on the Quectel BG77 module and supports CAT M1 and CAT NB2 connectivity. In addition, it includes a GNSS location option that supports both GPS and Glonass satellites. It can be comfortably programmed with the Quectel AT command interface over the serial connection to the WisBlock Core MCU.

## Product Features

* **Module Specifications**
    * Quectel BG77
    * Programmable with Quectel AT command set
    * iPEX connectors for external antennas for both LTE and GPS
    * Nano SIM and ESIM options
    * Supports
        * LTE Cat M1
        * LTE Cat NB2
        * LTE-FDD
        * LTE communication
        * GNSS location

* **Power Consumption Control**
    * The RAK5860 module's power supply can be controlled by the WisBlock Core MCU to reduce power consumption.

* **Size**
    * 35 x 25&nbsp;mm

## Prerequisites

To use a **RAK5860**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK5860** module. Furthermore, you need a **WisBlock Core** module to use the sensor.

:::warning ⚠️ WARNING
* A battery connected to the WisBlock Base is required. USB power is not enough to make the module work reliably.
* You must be in an area or location where LTE-M and NB-IoT service is available. Otherwise, RAK5860 will not work.
* When using the BG77 Cellular modules, always make sure that an antenna is connected. Using the transceiver without an antenna can damage the system.
* The included active GPS antenna must be connected to the iPEX antenna connector on the board. Otherwise, the module will not work.
* Make sure to fix the module with screws to ensure proper function.
:::
