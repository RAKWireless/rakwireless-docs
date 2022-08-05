---
rak_img: /assets/images/wisblock/rak4631-r/overview/RAK4631-R_home.png
rak_desc: RAK4631-R is a WisBlock Core module for RAK WisBlock. It extends the WisBlock series with a powerful Nordic nRF52840 MCU that supports Bluetooth 5.0 (Bluetooth Low Energy) and the newest LoRa transceiver from Semtech, the SX1262. RAK4631-R firmware is based on RUI3.
next: ../Quickstart/
prev: ../../
rak_grp: [wisblock, wiscore]
tags:
    - RAK4631-R
    - wisblock
    - Nordic
    - nRF52840
    - Semtech
    - SX1262
---

# RAK4631-R WisBlock LPWAN Module

Thank you for choosing **RAK4631-R WisBlock LPWAN Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

::: tip 📝 NOTE
RAK4631-R and RAK4631 share common hardware and are 100% identical, but they have different firmware. **RAK4631-R** is based on RUI3, which gives you flexibility in developing optimized firmware using the RUI3 APIs.
:::

* [RAK4631-R Quickstart Guide](../Quickstart/)
* [Example Applications](../Examples/)
* [AT Command Manual](../AT-Command-Manual/)
* [DFU - Device Firmware Upgrade](../DFU/)
* [Datasheet](../Datasheet/)
* [RAK4631-R 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK4631.stp)
* [40-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)

## Product Description

The RAK4631-R WisBlock Core module is a RAK4630 stamp module with an expansion PCB and connectors compatible with WisBlock Base. It allows an easy way to access the pins of the RAK4630 module to simplify development and testing processes.

The module itself comprises a RAK4630 as its main component. The RAK4630 is a combination of an nRF52840 MCU and an SX1262 LoRa chip. It features ultra-low power consumption of 2.0&nbsp;uA during sleep mode, high LoRa output power up to 22&nbsp;dBm during a transmission mode, and the BLE interface with output power up to 4&nbsp;dBm.

Also, it complies with LoRaWAN 1.0.3 protocols and supports LoRa point-to-point communication. The RF communication characteristic of the module (Lora® + BLE) makes it suitable for a variety of applications in the IoT field, such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors, and monitors, etc.).


## Product Features
 
- TCXO crystal for LoRa chip
- I/O ports: UART/I2C/GPIO/USB
- SPI pins and optional NFC interface are accessible using WisBlock IO module
- Temperature range: -40&nbsp;°C to +85&nbsp;°C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;KHz to 500&nbsp;kHz Bandwidth
- Ultra-Low Power Consumption 2.0&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- BLE5.0 (Tx power -20 to +4&nbsp;dBm in 4&nbsp;dB steps)
- Serial Wire Debug (SWD) interface
- Module size: 20 x 30&nbsp;mm
- Chipset: Nordic nRF52840, Semtech SX1262

## Prerequisites

To use a **RAK4631-R**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK4631-R** module and has the programming/debug interface.   

:::warning ⚠️ WARNING    
- Make sure to fix the module with the screws to ensure a proper function.
- When using the LoRa or Bluetooth Low Energy transceivers, make sure that always an antenna is connected. Using these transceivers without an antenna can damage the system.
:::
