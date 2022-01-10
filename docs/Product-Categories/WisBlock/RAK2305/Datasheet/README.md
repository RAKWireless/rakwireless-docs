---
rak_desc: Provides comprehensive information about your RAK2305 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak2305/overview/RAK2305_home.png
tags:
  - datasheet
  - wisblock
  - RAK2305
prev: ../Low-Level-Development/
next: false
---

# RAK2305 WisBlock WiFi Interface Module Datasheet

<!--
<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/rak2305.png"
  width="50%"
  caption="RAK2305 WisBlock WiFi Interface Module"
/>
-->

## Overview

### Description

The RAK2305 module, a part of the WisBlock Wireless series, is designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module.

The RAK2305 module is a 2.4&nbsp;GHz Wi-Fi and Bluetooth in a single module. The core of the module is an ESP32-WROVER, which features a PCB antenna. This module is designed to be part of the Internet-of-Things (IoT) applications. It can function as a Central or Peripheral in a Bluetooth network. Internally, it supports SPI/I2C/UART interfaces.


### Features

-  Wi-Fi + BLE module for Internet-of-Things
-  I/O ports: UART/I2C/SPI/GPIO
- 4&nbsp;MB SPI flash and 8&nbsp;MB PSRAM
- Ultra-Low-Power Consumption
- Wi-Fi 802.11 b/g/n
- Module size: 29.5 x 25&nbsp;mm

## Specifications

### Overview

The overview covers the RAK2305 WisBlock board overview and block diagram. It also shows how to mount the board into to the baseboard. 


#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/RAK2305-board-overview.svg"
  width="40%"
  caption="Board Overview"
/>


#### Mounting Sketch

Figure 2 shows how RAK2305 module is integrated with the WisBlock Base Board. The mounting sketch is also shown.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/mounting-sketch.png"
  width="60%"
  caption="RAK2305 Mounting Sketch"
/>

#### Block Diagram

Figure 3 shows the block diagram of the RAK2305 module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/RAK2305-block-diagram.png"
  width="50%"
  caption="RAK2305 Block Diagram"
/>

:::tip 📝 NOTE
1.	VBAT is battery output voltage, the max voltage is 4.2&nbsp;V.
2.	When IO0 is pulled-down, then UART download mode is selected. When IO0 is pulled-up, flash mode is selected. The default mode of the IO0 pin is pull-up.
:::

### Hardware 

The hardware specification is categorized into four parts. It discuses the interfacing of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK2305 WisBlock WiFi Interface Module.


#### Interfaces

##### UART Interface

The RAK2305 module provides two UART interfaces: UART0 and UART1. The UART0 can be used for upgrading firmware or to access console output through WisBlock baseboard USB interface. The UART1 is the main communication interface with WisBlock Core module.

##### SPI Interface

The RAK2305 supports one single SPI Interface. It can be operated either in the master or slave mode, both can be implemented in full-duplex or half-duplex communication modes. The SPI interface supports the following features:
- Four SPI transfer modes, which is defined by the polarity (CPOL) and the phase (CPHA) of the SPI clock.
- An internal FIFO buffer of 64-byte.

##### I2C Interface

The RAK2305 module provides an I2C bus interface. Depending on your configuration, it can serve as an I2C master or slave. The I2C interface supports:
- Standard mode (100&nbsp;Kbit/s) and Fast mode (400&nbsp;Kbit/s).
- Up to 5&nbsp;MHz, constrained by the SDA pull-up strength.
- 7-bit/10-bit addressing mode.
The RAK2305 module allows users to access directly to the registers to control I2C interfaces, which add more flexibility in the design of the final solution.


##### Download Interface

The RAK2305 module uses the UART0 interface to download customized application code into the ESP32’s flash memory. The users can use a USB to UART cable for this purpose. Alternatively, once the RAK2305 is mounted on top of a WisBlock Base Board, such as the RAK5005-0, then users can access the UART0 interface through the RAK5005’s USB interface instead. The pinout of the USB port of the RAK2305 is shown in Figure 4.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/usb-uart0-interface.png"
  width="30%"
  caption="USB/UART0 Interface"
/>

:::warning ⚠️ WARNING
Before download, you need to pull down IO0 pin.
:::

#### Pin Definition

Figure 5 shows the Pin Definition of the RAK2305 WisBlock WiFi Interface Module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/RAK2305-pin.svg"
  width="40%"
  caption="RAK2305 Pin Definition"
/>

#### Electrical Characteristics

##### Absolute Maximum Ratings

Table below shows the absolute maximum ratings supported by the RAK2305 Module

| **Symbol** | **Description**             | **Min** | **Nom.** | **Max.** | **Unit** |
| ---------- | --------------------------- | ------- | -------- | -------- | -------- |
| VBAT       | Power Supply For the Module | 0.5     |          | 4.2      | V        |
| Iout       | Step Down IC Output Current |         |          | 1000     | mA       |


##### Recommended Operating Conditions

| **Symbol** | **Description**             | **Min.** | **Nom.** | **Max.** | **Unit** |
| ---------- | --------------------------- | -------- | -------- | -------- | -------- |
| VBAT       | Power Supply For the Module | 2.6      |          | 4.2      | V        |
| 3V3        | 3.3V Power Supply           |          | 3.3      |          | V        |


#### Mechanical Characteristics

##### Board Dimensions

Figure 6 shows the dimensions and the mechanic drawing of the RAK2305 Module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/rak2305_dimensions.png"
  width="75%"
  caption="RAK2305 Module Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/schematic.png"
  width="100%"
  caption="RAK2305 Schematic Diagram"
/>


The following sections describes the schematic of the RAK2305 module.

##### Power Supply

Figure 9 shows the schematic of the power supply of the RAK2305 module. In the diagram, VBAT is the battery voltage supplied from the WisBlock Base Board RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/power_supply.png"
  width="80%"
  caption="Power Supply"
/>

##### IO Connector

Figure 10 shows the pin definition of IO connector. 

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/wisio-connector.png"
  width="80%"
  caption="IO Connector"
/>

| **Name**  | **Description**                | **Comment**                                    |
| --------- | ------------------------------ | ---------------------------------------------- |
| VBAT      | Battery Output Voltage         | Max 4.2&nbsp;V                                 |
| 3V3_R     | WisBlock Base Board 3.3&nbsp;V | By Default, Not Connected                      |
| VDD       | 3.3&nbsp;V                     | By Default, Not Connected                      |
| TXD0/RXD0 | UART0 interface                | Interface for firmware download and log output |
| TXD1/RXD1 | UART1 interface                | Main serial communication interface            |
| LED1/LED2 | LED interface                  | To control the base board’s LED                |
| EN        | ESP32 module Enable            | Active High                                    |


#####  Connector Pin Order

Figure 11 shows IO connector and its pin order. This connector is located on the bottom side of the module.

<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/wisio-connector-pin-order.png"
  width="40%"
  caption=" IO Connector Pin Order"
/>

##### Core Module

The core component inside of the RAK2305 module is the ESP32-WROVER, which comes with a PCB antenna. The module is designed to work with 3.3&nbsp;V supplied by the baseboard. To prevent any instability on EN (Enable pin), an RC delay circuit is added to this pin, and the EN pin is pulled up to 3.3&nbsp;V by default. Figure 12 shows the section of the schematic that involves the ESP32-WROVER component.


<rk-img
  src="/assets/images/wisblock/rak2305/datasheet/core_module.png"
  width="80%"
  caption="RAK2305 Core Component's Schematic"
/>


| **Name**   | **Description**     | **Comment**                                                  |
| ---------- | ------------------- | ------------------------------------------------------------ |
| 3.3&nbsp;V | Power Supply        | 3.3&nbsp;V                                                   |
| GND        | Ground              |                                                              |
| TXD1/RXD1  | UART1 interface     | Main communication interface                                 |
| TXD0/RXD0  | UART0 interface     | Interface for firmware update or log output                  |
| LED1/LED2  | LED interface       | Baseboard LED control                                        |
| EN         | ESP32 Module Enable | Active High                                                  |
| STATUS_LED | LED on module       | Active Low                                                   |
| GPIO0      | BOOT0               | Low: UART Download Mode<br><br>High: FLASH Operation<br>Mode |


