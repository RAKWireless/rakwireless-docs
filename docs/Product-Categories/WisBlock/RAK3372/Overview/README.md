---
rak_img: /assets/images/wisblock/rak3372/overview/RAK3372_home.png
rak_desc: RAK3372 is a WisBlock Core module for RAKwireless WisBlock. It extends the WisBlock series with a very efficient core based on STM32WL LoRa SoC which supports LoRa P2P and LoRaWAN functionality.
next: ../Quickstart/
prev: ../../
rak_grp: [wisblock, wiscore]
tags:
    - RAK3372
    - wisblock
    - STM32WL
---

# RAK3372 WisBlock LPWAN Module

Thank you for choosing **RAK3372 WisBlock LPWAN Module** in your awesome IoT project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* [RAK3372 Quickstart Guide](../Quickstart/)
* [AT Command Manual](../AT-Command-Manual/)
* [Datasheet](../Datasheet/)
* [RAK3372 3D Model](https://downloads.rakwireless.com/3D_File/WisBlock/3D_RAK3372.step)
* [40-Pin Male Connector 3D File](https://downloads.rakwireless.com/3D_File/Accessory/WisConnector/M40S1003K6M.stp)

## Product Description

The RAK3372 WisBlock Core module is based on [RAK3172 LoRa module](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Datasheet/) with an expansion PCB and connectors compatible with WisBlock Base. It allows an easy way to access the pins of the RAK3172 module to simplify development and testing processes.

The module itself comprises RAK3172 as its main component. The RAK3372 is based on the STM32WLE5CCU6 LoRa SoC transceiver chip. It features ultra-low power consumption of less than 2.0&nbsp;uA during sleep mode with configurable high LoRa output RF power up to 22&nbsp;dBm during transmission mode. Also, it complies with LoRaWAN 1.0.3 protocols and supports LoRa point-to-point communication.


## Product Features

- I/O ports: UART/I2C/GPIO
- Temperature range: -40°&nbsp;C to +85°&nbsp;C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;KHz to 500&nbsp;kHz Bandwidth
- Ultra-Low Power Consumption of less than 2.0&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- Serial Wire Debug (SWD) interface
- Module size: 20 x 30&nbsp;mm
- Chipset: STMicroelectronics [STM32WLE5CCU6](https://www.st.com/resource/en/datasheet/stm32wle5cc.pdf)

:::warning ⚠️ WARNING
- RAK3372 WB_IO3 (WisBlock IO Pin 3) is connected to PB12 of the RAK3172 module. This pin is internally connected to a 10k resistor as [mentioned on the pin definition table of the RAK3172 datasheet](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Datasheet/#pin-definition). Other WisBlock modules that use this pin will have possible conflict.
:::

## Prerequisites

To use a **RAK3372**, you need at least a **WisBlock Base** to plug the module in. **WisBlock Base** is the power supply for the **RAK3372** module and has the programming/debug interface.

:::warning ⚠️ WARNING
- When using the LoRa transceiver, make sure that it is connected to an antenna. Using the transceiver chip without an antenna can damage the system.
- Make sure to fix the module with screws to ensure proper function.
:::
