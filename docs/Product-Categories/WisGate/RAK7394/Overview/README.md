---
rak_img: /assets/images/wisgate/rak7394/rak7394.png
rak_desc: The RAK7394 WisGate Developer CM4 is a LoRaWAN Gateway that consists of a RAKR314 CM4 Carrier Board + Raspberry Pi Compute Module 4 (CM4), RAK2287 Concentrator, and RAK2287 Pi HAT. The RAK7394 has a cellular and a PoE variant, the RAK7394C and RAK7394P.
rak_grp: [wisgate, developer]
prev: ../../
next: ../Quickstart/
tags:
  - RAK7394
  - RAK7394P
  - RAK7394C
  - wisgate
---

# RAK7394 WisGate Developer CM4

Thank you for choosing **RAK7394 WisGate Developer CM4** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [Quick Start Guide](../Quickstart/)
* [Supported LoRa Network Servers](../Supported-LoRa-Network-Servers/)
* [Datasheet](../Datasheet/)


## Product Description

The **RAK7394 WisGate Developer CM4** is a LoRaWAN Gateway that has a cellular and a PoE variant. This gateway consists of a RAKR314 CM4 Carrier Board + Raspberry Pi Compute Module 4 (CM4), RAK2287 Concentrator, and RAK2287 Pi HAT.

The **RAK7394C** is the cellular variant, consisting of RAKR314 CM4 Carrier Board + Raspberry Pi CM4, RAK2287 Concentrator, RAK2013 Cellular Pi HAT for cellular connectivity, and RAK2287 Pi HAT.

The **RAK7394P** is the PoE variant that consists of RAKR314 CM4 Carrier Board + Raspberry Pi CM4, RAK2287 Concentrator, RAK9003 for the PoE support, and RAK2287 Pi HAT.

The **RAK2287 Concentrator** includes a GPS module and a heat sink for better performance and thermal heat dissipation management, and its housing is built with an aluminum casing. It also uses the **SX1302** chip from Semtech® whose built-in LoRa concentrator IP core is a powerful digital signal processing engine. It can receive up to **8 LoRa packets** with different spreading factors on different channels and is available in multiple variants so it can be used for international standard bands. This unique capability allows the implementation of innovative network architectures advantageous over other short-range systems.

**RAK2287 Pi HAT** is a converter board with a Raspberry Pi form factor that enables the RAK2287 module to be mounted on top of the RAKR314 CM4 Carrier Board. It integrates one (1) 40-pin female Pi HAT connector and one mPCIe connector to connect RAK2287 (RAK9003 in PoE variant/RAK2013 in Cellular variant) to the CM4 Carrier Board.

**RAKR314 Carrier Board** is designed specifically for the Raspberry Compute Module CM4 following the Raspberry Pi4 form factor. This feature-packed board includes a standard 40 PIN GPIO and supports the RAK PoE HAT, making it an excellent choice for power-over-ethernet applications.

With two USB 2.0 ports, two USB 3.0 ports, two USB-type C ports (one for power and one for programming), and an Ethernet port, this board has all the connectivity options you need. The SD card slot also provides extra storage for the eMMC CM4 modules or serves as a main (boot) for non-eMMC modules. One of the best things about the RAKR314 is that it allows you to utilize the power of the CM4 module in the familiar Raspberry Pi form factor, so you can take advantage of all your existing HATs.

**RAK7389** is ideal for prototyping, proof-of-concept demonstrations, or evaluation. It includes a ready-to-use LoRaWAN Gateway OS that can be connected to a LoRaWAN server. Also, it is developer-friendly and simple even for not-so-tech users to set up a LoRaWAN system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm, and other IoT enterprise applications.

:::tip 📝 NOTE
By default, the CM4 comes with еMMC and the SD card can be used for additional storage. The SD card can be used for Boot only with CM4 Lite models.
:::

## Product Features

- Computing with Raspberry Pi Compute Module 4.
- Based on the LoRa Concentrator Engine: Semtech SX1302.
- Supports Cellular module (Quectel BG96 or EG95) for NB-IoT / LTE CAT-M1 / LTE CAT1 / LTE CAT4 (only in Cellular variant).
- Built-in Ublox ZOE-M8Q GPS Module.
- Built-in Heat Sink for thermal heat dissipation management.
- Supports 5&nbsp;V / 3&nbsp;A and Power-Over-Ethernet (only in PoE variant) power supply.
- IP30 housing.
- TX power up to 27&nbsp;dBm, RX sensitivity down to -139&nbsp;dBm @SF12, BW 125&nbsp;kHz.
- LoRa Frequency band support: RU864, IN865, EU868, US915, AU915, KR920, AS923.
- Includes Pi-ready 'ID EEPROM', GPIO setup, and device tree can be automatically configured from vendor information.
- Supports a fully open-source LoRaWAN server.
