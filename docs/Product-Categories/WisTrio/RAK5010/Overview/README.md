---
rak_img: /assets/images/wistrio/rak5010/quickstart/1.overview/RAK5010.png
rak_grp: [wistrio,cellular]
rak_desc: The RAK5010-BG95 is an advanced, highly flexible eMTC/NB-IoT/eGPRS tracker based on Quectel BG95-M3 (BG96 on the old model) LTE Cat M1&NB1, with an integrated with GPS, and BLE for outdoor and indoor applications. It also has built-in sensors such as temperature and humidity, motion, pressure, and light. The MCU running the board is a Nordic nRF52840 microcontroller.
prev: ../../
next: ../Quickstart/
tips:
  - RAK5010
  - wistrio
---

# RAK5010 WisTrio NB-IoT Tracker Pro

Thank you for choosing **RAK5010-BG95 WisTrio NB-IoT Tracker Pro** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

:::tip 📝 NOTE
**RAK5010-BG95** is an updated model of **RAK5010**. It uses the same circuit board and components except for the Quectel cellular modem used. The RAK5010-BG95 uses **BG95-M3** while the original RAK5010 uses **BG96**. It shares the same AT commands set as well so if you are using the AT command interface, the two versions are compatible. If using a custom firmware (created with our RUI V2 or another IDE), you have to take into account that on the BG95-M3 you cannot use the cellular connection and the GNSS location acquisition at the same time. You have to stop the cellular connection before you can start the location acquisition!
:::

* [Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* [AT Command Manual](../AT-Command-Manual/)
* [RAK5010 3D Model](https://downloads.rakwireless.com/3D_File/WisTrio/PWB-RAK5010.stp)


## Product Description

The **RAK5010-BG95 WisTrio NB-IoT Tracker Pro** is an advanced, highly flexible eMTC/NB-IoT/EGPRS tracker based on Quectel BG95-M3 (BG96 on the old model) LTE Cat M1 & NB1, integrated with GPS, BLE, and a variety of sensors. The MCU running the board is a Nordic nRF52840 microcontroller.

With the GPS and BLE features, the device can be used in a wide range of applications from outdoor to indoor scenarios where location-based services are necessary.

The board is equipped with four sensors onboard: humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor. Additionally, the extension IOs in the module allow expandable sensor applications in addition to the onboard ones.

This board is particularly suitable to be used as a quick testing and prototyping tool for applications requiring Nb-IoT connectivity. Application development supports the GCC environment.

## Product Features

- **Quectel BG95-M3** with LTE CAT M1, LTE NB1, EGPRS, and GNSS
- **Nordic nRF52840**, with BLE 5.0 and long-range BLE
- nRF52840 integrates the ultra-low-power microcontroller ARM Cortex-M4 (64&nbsp;Mhz)
- Built-in humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor
- iPEX connectors for the LoRa and GPS antenna and an on-board ceramic antenna for the BLE
- Nano SIM and ESIM options
- Can be powered by either Micro USB, 3.7&nbsp;V rechargeable battery, or a 5&nbsp;V Solar Panel port
- Multiple interfaces, I2C, UART, GPIO, and ADC
