---
rak_img: /assets/images/wisduo/rak4270-module/overview/RAK4270_Module_Home.png
rak_desc: The RAK4270 module is designed to simplify LoRa® peer to peer and LoRaWAN® communication. he module is suitable for various applications that require long range data acquisition and low power consumption, such as smart meters, agricultural sensors, and smart cities.
rak_grp: [wisduo, module]
prev: ../../
next: ../LoRaWAN-P2P/Quickstart/
---

# RAK4270 WisDuo LPWAN Module

Thank you for choosing **RAK4270 WisDuo LPWAN Module** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentations for your product.

- [LoRaWAN®/P2P/Getting Started](../LoRaWAN-P2P/Quickstart/)
- [LoRaWAN®/P2P/AT Command Manual](../LoRaWAN-P2P/AT-Command-Manual/)
- <a href="/RUI/" target="_blank">RUI Secondary Development</a> - RAK4270 module supports RUI Secondary Development, refer to <a href="/RUI/" target="_blank">RUI</a> for further details.
- [Deep Development](../Deep-Development/)
- [Datasheet](../Datasheet/)


## Product Description

The RAK4270 LoRa® Module includes an **STM32L071 MCU** and an **SX1262** LoRa® chip, which supports 8 spreading factors (SF5 ~ SF12) and signal bandwidth that can be adjusted between 7.8 kHz to 500 kHz. It has an ultra-low power consumption of 1.5uA in Sleep Mode, but during the Transmit mode, it can reach the maximum output power of 22 dBm. As a receiver, it can achieve a sensitivity of -138 dBm.

The module complies with the LoRaWAN® 1.0.2 protocol, so it can be used for implementing LoRa® networks or Lora point to point communications. The module is suitable for various applications that require long-range data acquisition and low power consumption, such as smart meters, supply chain and logistics tracking, agricultural sensors, and smart cities.

This module is expected to be controlled by an external controller through its UART interface by sending a set of AT commands. These AT commands control not only the state of this module but also set the LoRaWan communication parameters and payloads. (See [RAK AT Command Manual](/Product-Categories/wisduo/rak4270-module/LoRaWAN-P2P/AT-Command-Manual/).)

## Features

- LoRa® module is suitable for applications in Smart City, Smart Agriculture, Smart Industry
- Compact form factor: **15 x 15.5 x 2.5 mm** (LxWxH)
- 20 pin stamp pad for PCB SMT board-to-board soldering
- I/O ports: **UART/I2C/GPIO**
- AT commands control interface
- Temperature range: **-40°C to +85°C**
- Supply voltage: **2.0 to 3.6V**
- Frequency Bands 433MHz(EU)/ 470-510MHz(CN)/ 865-867MHz(IN)/ 863–870MHz (EU)/ 902–928MHz(US) / 915-928MHz(AU)/ 920-923MHz(KR) / 920-923MHz(AS)
- LoRa® bandwidth range of 7.8 kHz to 500 kHz, SF5 to SF12, BR=0.018~62.5 kb/s
- Ultra-low power Consumption: **1.5uA in sleep mode**
- Arm Cortex-M0+ 32-bit RISC core
- 128 kbytes flash memory with ECC
- 20 kbytes RAM
- 6 kbytes of data EEPROM with ECC
- Compliance with TBC
