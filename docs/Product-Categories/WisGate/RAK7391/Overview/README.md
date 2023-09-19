---
rak_img: /assets/images/wisgate/rak7391/RAK7391.png
rak_desc: RAK7391 WisGate Connect is a Raspberry Pi CM4-based gateway product meant to support different radio and WisBlock modules. It has several interfaces to meet the needs of different developers - HDMI, Ethernet, USB, mPCIe, CSI, DSI, M.2, WisBlock, PoE, and Raspberry Pi HAT.
rak_grp: [wisgate, connect]
prev: ../../
next: ../Quickstart/
tags:
    - RAK7391
    - WisGate
---


# RAK7391 WisGate Connect

Thank you for choosing **RAK7391 WisGate Connect** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [Quick Start Guide](../Quickstart/)
* [Assembly Guide](../Assembly-Guide)
* [Compatible Hardware](../Compatible-Hardware/)
* [Services](../Services/)
* [Connecting to WisBlock](../Connecting-To-WisBlock/)
* [Datasheet](../Datasheet/)


## Product Description

RAK7391 WisGate Connect is a Raspberry Pi CM4-based gateway product meant to support different radio and WisBlock modules. It has several interfaces to meet the needs of different developers, which include HDMI, Ethernet, USB, mPCIe, CSI, DSI, M.2, WisBlock, PoE, and Raspberry Pi HAT. Of course, it can also be used as a basic LoRaWAN gateway product supporting up to four (4) separate modules. You can have a 16-channel sub-GHz LoRaWAN gateway plus a 2.4&nbsp;GHz LoRaWAN gateway on the same device.

The RAK7391 has flexible power supply modes such as the DC terminal, Phoenix terminal, and POE (optional). It provides a fan interface to dissipate heat for the CPU that you can control based on the CPU temperature. It can also monitor the power supply. In the event of a power failure, the ultracapacitors can provide power to the system so that the system can send a notification or easily survive micro-cuts in the power supply.

## Product Features

### Hardware

- Accepts the complete range of CM4 modules
- Flexible power supply modes such as DC terminal, Phoenix terminal, and POE (optional)
- HDMI 2.0 connector
- 1&nbsp;GB Ethernet with PoE support (optional)
- 2.5&nbsp;GB Ethernet without PoE support (optional)
- USB2.0 + 2x USB3.0
- Type-C USB socket for updating the CM4
- Micro SD card socket for CM4 Lite modules
- Standard fan connector, compatible with 5&nbsp;V and 12&nbsp;V fans (jumper cap configuration)
- External power connector (+5&nbsp;V, +12&nbsp;V with PoE)
- MIPI DSI display FPC connectors (22 pins 0.5&nbsp;mm pitch cable)
- 2x MIPI CSI-2 camera FPC connectors (22 pins 0.5&nbsp;mm pitch cable)
- Raspberry Pi HAT connector
- PoE support via an optional module
- Debug UART port
- 2x WisBlock IO connectors
- 3x mPCIe slots
- 1x M.2 B-Key interface
- RTC with battery socket and ability to wake up CM4
- Configuration jumpers (WiFi and BLE enabling/disabling, EEPROM write enable, buzzer enabling)

### Software

A custom «distro» for the WisGate Connect called RAKPiOS has been prepared. The RAKPiOS is a fork of the Raspberry Pi OS with all the required drivers to use the device, some security changes, helper scripts, and Docker included by default.

You can easily deploy several IoT services from a curated list of docker containers available from the device.

<rk-img
  src="/assets/images/wisgate/rak7391/1.software-structures.png"
  width="70%"
  caption="Software structure"
/>

### Typical Application

- LoRaWAN gateway (multichannel and multiband)
- Industrial gateway leveraging existing WisBlock modules (ModBUS, 4-20&nbsp;mA, 0-5&nbsp;V, and general IO)
- Edge gateway or standalone gateway
- Development platform for new products
