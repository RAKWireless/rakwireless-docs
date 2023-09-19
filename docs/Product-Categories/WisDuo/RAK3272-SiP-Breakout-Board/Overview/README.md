---
rak_img: /assets/images/wisduo/rak3272-sip-breakout-board/RAK3272-SiP-Breakout.png
rak_desc: The RAK3272-SiP Breakout Board is made to quickly evaluate the RAK3272-SiP module. The form factor board allows access to most GPIOs.
rak_grp: [wisduo, breakout]
prev: ../../
next: ../Quickstart/
rak_model: RAK3272-SiP
tags:
  - RAK3272-SiP Breakout Board
  - wisduo
---

# RAK3272-SiP Breakout Board

Thank you for choosing **RAK3272-SiP Breakout Board** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [Quick Start Guide](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Quickstart/)
* [AT Command Manual](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/AT-Command-Manual/)
* [Datasheet](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Datasheet/)
* [RAK3272-SiP 3D Model](https://downloads.rakwireless.com/3D_File/WisDuo/3D_RAK3272-SiP.step)



## Product Description

The RAK3272-SiP and RAK3272LP-SiP Breakout Boards were designed to allow easy access to the [RAK3172-SiP/RAK3172LP-SiP](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-SiP/Overview) module pins to simplify development and testing. The two SiP module variants use different RF output paths to optimize current consumption depending on the application. RAK3172-SiP uses RFO_HP while RAK3172LP-SiP uses the RFO_LP on the STM32WL SoC transceiver.

The microcontroller GPIO pins are accessible via 2.54&nbsp;mm headers. The breakout board itself has a RAK3172-SiP or RAK3172LP-SiP (based on STM32WLE5JC) as its core. The STM32WLE5JC is part of the [STM32WLE5x](https://www.st.com/en/microcontrollers-microprocessors/stm32wlex.html) family. This core is based on an Arm® Cortex®‐M4 core running at 48&nbsp;MHz, and a sub-GHz radio based on Semtech SX126x.

The board complies with Class A, B, & C of LoRaWAN 1.0.3 specifications and also features LoRa Point-to-Point (P2P) communication mode, which helps you in implementing your own customized long-range LoRa network quickly. It is also RUI3 compatible which allows you to create custom firmware using RUI3 APIs.

## Product Features

- 32-bit Arm® Cortex®‐M4 48&nbsp;MHz MCU and sub-GHz Semtech SX126x radio
- Chipset STM32WLE5JC (single-core)
- Two variants available
    - RAK3272-SiP (uses RFO_HP)
    - RAK3272LP-SiP (uses RFO_LP)
- I/O ports: UART/I2C/GPIO/SPI
- 32&nbsp;MHz TXCO and 32&nbsp;kHz xtal
- RUI3 API compatible
- Custom firmware using Arduino via RUI3 API
- Easy to use AT Command set via UART interface
- Serial Wire Debug (SWD) interface
- **LoRaWAN 1.0.3** specification compliant
- **Supported bands**: IN865, EU868, AU915, US915, KR920, RU864, and AS923
- Supply voltage: 1.8&nbsp;V ~ 3.6&nbsp;V
- Temperature range: -40°&nbsp;C ~ 85°&nbsp;C
- Size: 25.4&nbsp;mm x 41.8&nbsp;mm