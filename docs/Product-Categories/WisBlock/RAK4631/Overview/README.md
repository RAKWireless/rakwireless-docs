---
rak_img: /assets/images/wisblock/rak4631/overview/RAK4631_home.png
rak_desc: RAK4631 is a WisBlock Core module for RAK WisBlock. It extends the WisBlock series with a powerful Nordic nRF52840 MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the newest LoRa transceiver from Semtech, the SX1262.
next: ../Quickstart/
prev: ../../
rak_grp: [wisblock, wiscore]
tags:
    - RAK4631
    - wisblock
    - Nordic
    - nRF52840
    - Semtech
    - SX1262
---

# RAK4631 WisBlock LPWAN Module

Thank you for choosing **RAK4631 WisBlock LPWAN Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

::: tip 📝 NOTE
RAK4631 and RAK4631-R share common hardware and are 100% identical but they have different firmware. **RAK4631-R** is based on RUI V3 which gives you flexibility in developing optimized firmware using the RUI V3 APIs. While **RAK4631**'s firmware is based on arduino port of nRF52840 chip.
:::

* [RAK4631 Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* <a href="../../Quickstart/" target="_blank">WisBlock Quick Start Guide</a>
* [WisBlock Source Code Repository](https://github.com/RAKWireless/WisBlock/)
* [Arduino IDE BSP](/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/)
* [PlatformIO BSP](/Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/)
* [Bootloader source code and ready to flash file](https://github.com/RAKWireless/WisBlock/tree/master/bootloader)
* [RAK4631 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK4631.stp)
* [40-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)

**Examples:**
* [RAK4631 example codes on folders **`RAK4630`** and **`common`**](https://github.com/RAKWireless/WisBlock/tree/master/examples)
* [Sample Code: LoRa](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa)
* [Sample Code: BLE](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/BLE)
* [Sample Code: Battery Level](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/power/RAK4630_Battery_Level_Detect)

## Product Description

**RAK4631** is a **WisBlock Core** module for RAK **WisBlock**. It extends the **WisBlock** series with a powerful Nordic nRF52840 MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the newest LoRa transceiver from Semtech, the SX1262. The Semtech SX1262 has compared to the older SX127x series a lower power consumption at the same TX power. This makes the **RAK4631** an ultra-low power communication solution.
**RAK4631** can be comfortably programmed with the Arduino™ IDE or the PlatformIO extension for other IDE's like Atom, MS Visual Code, or Clion.

Both LoRaWAN and LoRa point-to-point connections are supported by an Arduino™ library.


## Product Features
 
* Nordic nRF52840 ultra-low power MCU    
* 32-bit ARM® Cortex™-M4 CPU    
* 64&nbsp;MHz CPU clock    
* 1&nbsp;MB Flash, 256&nbsp;KB RAM    
* Semtech SX1262 low power high range LoRa transceiver     
* LoRaWAN 1.0.2 protocol stack     
* Bluetooth 5.0 protocol stack    

* I2C, SPI, Analog inputs, Digital inputs, and outputs    
* Low power consumption
* Chipset: Nordic nRF52840, Semtech SX1262

## Prerequisites

To use a **RAK4631**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK4631** module and has the programming/debug interface.   

:::warning ⚠️ WARNING    
- Make sure to fix the module with the screws to ensure a proper function.
- When using the LoRa or Bluetooth Low Energy transceivers, make sure that always an antenna is connected. Using these transceivers without an antenna can damage the system.
:::
