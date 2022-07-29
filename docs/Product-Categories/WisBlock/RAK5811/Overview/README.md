---
rak_img: /assets/images/wisblock/rak5811/overview/RAK5811_home.png
rak_desc: RAK5811 is a WisBlock Interface module which extends the WisBlock system with 2 analog input ports. The analog ports have a 0-5V input range and are connected to the WisBlock Core MCU’s analog inputs.
rak_grp: [wisblock, wisinterface]
prev: ../../
next: ../Quickstart/
tags:
    - RAK5811
    - wisblock
    - STMicroelectronics
    - LM2902
---

# RAK5811 WisBlock 0-5V Interface Module

Thank you for choosing **RAK5811 WisBlock 0-5V Interface Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK5811 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>

* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [RAK5811 3D Model](https://downloads.rakwireless.com/LoRa/WisBlock/WisBlock-3D/pwb-rak5811.stp)
* [40-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)
* [WisBlock Interface Tutorial](/Knowledge-Hub/Learn/WisBlock-IO-Tutorial/)

**Examples**

* For WisBlock Core **RAK4630:** [Sample Code: RAK5811 0-5V](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/IO/RAK5811_0-5V)
* For WisBlock Core **RAK11200:** [Sample Code: RAK5811 0-5V](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11200/IO/RAK5811_0-5V)
* For WisBlock Core **RAK11310:** [Sample Code: RAK5811 0-5V](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/IO/RAK5811_0-5V)

**Complete solution for Water Level Monitoring**

* For WisBlock Core RAK4630: [Sample Code: Water Level Monitoring](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/Water_Level_Monitoring)
* For WisBlock Core RAK11310: [Sample Code: Water Level Monitoring](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK11300/solutions/Weather_Monitoring)


## Product Description

The RAK5811 WisBlock Interface module is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. RAKWireless has standardized the way modules are interconnected to the baseboards with the WisBlock Interface Connectors. This standard connector is a small high-density connector that not only saves spaces on the circuit boards but also allows to implement high-speed communication bus.

The RAK5811 is a 0-5&nbsp;V analog input interface module. The signal is routed through the IO bus to the WisBlock Core module. Inside of the WisBlock Core module, the MCU digitizes the signal and the sampled data is transmitted, for example, via a LoRa transceiver.

The RAK5811 module features two input channels of 0-5&nbsp;V analog signals. Inside, a high-precision operational amplifier, which supports a wide range of operating temperatures, is used for signal amplification and conversion.

In addition, this module integrates a 12&nbsp;V power supply. The power supply is connected to an operational amplifier and be used to power the external sensors. The connection of the 0-5&nbsp;V sensors is done through the fast crimping terminal without the need for special tools, this simplifies the installation process on the field.

## Product Features

*	Two 0-5&nbsp;V analog input channels
*	Compatible with multiple WisBlock Core modules, such as the RAK4631
*	10&nbsp;mV conversion accuracy
*	Supports low power consumption mode, the module can be powered off by WisBlock Core module for saving energy during idle periods
*	12&nbsp;V output to power external sensors
*	Reserved I2C expansion interface
*	Fast crimping terminal to easily connect external components on the field
*	Designed with a 2&nbsp;kV ESD protection level
*	Small dimensions of 35&nbsp;mm x 25&nbsp;mm


## Prerequisites

To use a **RAK5811**, you need at least a **WisBlock Base** to plug the module in. Furthermore, you need a **WisBlock Core** module to control the module.
 
:::warning ⚠️ WARNING    
Make sure to fix the module with the screws to ensure a proper function.
:::
