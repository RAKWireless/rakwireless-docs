---
rak_img: /assets/images/wisblock/rak5860/overview/RAK5860_home.png
rak_desc: RAK5860 is a WisBlock IO module which extends the WisBlock system with LTE NB-IoT connectivity. It is based on the Quectel BG77 module and supports CAT M1 and CAT NB2 connectivity.
rak_grp: [wisblock, wisio]
prev: ../../
next: ../Datasheet/

---

# RAK5860 WisBlock NB-IoT Interface Module

Thank you for choosing **RAK5860 WisBlock NB-IoT Interface Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentations for your product.


* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
<!---* [WisBlock Quick Start Guide](../../Quickstart/)-->
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK5860 3D Model](https://downloads.rakwireless.com/LoRa/WisBlock/WisBlock-3D/pwb-rak5860.stp)
* [40 Pin Male Connector 3D file](https://downloads.rakwireless.com/3D_File/WisConnector/M40S1003K6M.stp)

**Examples**: 

* [Sample Code: NB IoT](https://github.com/RAKWireless/WisBlock/tree/master/examples/communications/Cellular)

## Product Description

RAK5860 is a WisBlock IO module which extends the WisBlock system with LTE NB-IoT connectivity. It is based on the Quectel BG77 module and supports CAT M1 and CAT NB2 connectivity. In addition, it includes a GNSS location option that supports both GPS and Glonass satellites. It can be comfortably programmed with the Quectel AT command interface over the serial connection to the WisBlock Core MCU.

<!---
The RAK5860 module is part of the WisBlock series, specifically, it is one of the modules that belongs to the WisIO category. This module was designed to be part of a production-ready IoT solution in a modular way, and must be combined with a WisCore and a WisBase module. 

The RAK5860 is a module designed to work with the RAK5005 base board, it provides wireless communication (LTE Cat M1, LTE Cat NB2) features to the final application. This module support LTE-FDD network, and supports half-duplex operation in LTE network. It also provides optional GNSS functionality.

For debugging purpose, a Micro-USB connector is used for sending AT commands, data transmission and receiving GNSS NMEA output. Once the module is integrated with the RAK5005 base board, the internal UART port of the module is connected through the WisIO connector to a WisCore module.
-->

## Product Features 

* **Module specifications**    
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

* **Power consumption control**    
    * The RAK5860 modules power supply can be controlled by the WisBlock Core MCU to reduce power consumption    

* **Size**    
    * 35 x 25mm    

## Prerequisites

To use a **RAK5860** you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK5860** module. Furthermore, you need a **WisBlock Core** module to use the sensor.   

:::warning ⚠️ WARNING    
* When using the LTE transceivers, make sure that always an antenna is connected. Using the transceiver without an antenna can damage the system.    
* The included active GPS antenna must be connected to the iPEX antenna connector on the board. Otherwise the module will not work.    
* Please make sure to fix the module with the screws to ensure a proper function.    
:::
