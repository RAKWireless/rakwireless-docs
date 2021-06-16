---
rak_desc: Covers the comprehensive information of your RAK5804 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK5804
---

# RAK5804 WisBlock Interface Extension Module Datasheet

## Overview

### Description


The RAK5804 WisBlock Interface module, was designed to be part of a production-ready IoT solution in a modular way and must be combined with a WisBlock Core and a Base module. 

The RAK5804 module is designed as an IO extension module that allow users to connect their own digital or analog devices or sensors to create a customized IoT solution. These sensors are connected through two expansion connectors: J2 and J3. In order to provide power to peripheral devices, 3.3&nbsp;V can be obtained from these expansion connectors. Internal protections allow to shut down the power supply when a short circuit is detected in the peripheral devices. Overcurrent cases are protected through internal PTC thermistors in the power supply circuit.

In addition, the RAK5804 module also supports a USB interface, which can be used with RAK5005-O to access the USB port of MCU of the WisBlock Core module of the solution. 

All external expansion interfaces of the RAK5804 module are equipped with TVS protection circuit to avoid damaging the mainboard and WisBlock Core circuit with ESD when users plug in or unplug to the expansion interfaces.


### Features

- IO connector
- Supports **two (2) pieces of 10-pin IO** extension connectors
- Supports **one (1) USB connector** to access WisBlock Core Module
- TVS protected circuity
- PTC thermistor to prevent output power overload
- Dimension: **25&nbsp;mm x 15&nbsp;mm**



## Specifications


### Overview

The RAK5804 module can be mounted on the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK5804 on a WisBlock Base module, such as a RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK5804 mounting mechanism on a WisBlock Base module"
/>


### Hardware

The hardware specification is categorized into four parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK5804 WisBlock™ Module.

#### Interfaces

The RAK5804 module exposes to the user’s application the IO pins, the I2C and the UART communication ports through the J2, J3, and J4 connectors. Users can use these ports to connect sensors, digital I/O, analog I/O and slave devices. These ports are routed to the WisBlock Core through the IO connector.  

::: tip 📝 NOTE
The J2 and J3 connectors use a [JST SH Connector](https://downloads.rakwireless.com/LoRa/WisBlock/RAK5804/eSH.pdf).
:::  

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/j-connectors.png"
  width="40%"
  caption="RAK5804 J2, J3 and J4 I/O connectors"
/>

##### J2 Connector

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/j2-connector.svg"
  width="55%"
  caption="RAK5804 J2 Connector"
/>

| **Pin Number** | **Function Description**   |
| -------------- | -------------------------- |
| 1              | VBAT, Battery Power Supply |
| 2              | 3.3&nbsp;V                 |
| 3              | GND                        |
| 4              | I2C1_SCL                   |
| 5              | I2C1_SDA                   |
| 6              | IO1, GPIO1                 |
| 7              | IO3, GPIO3                 |
| 8              | UART1_RX                   |
| 9              | UART1_TX                   |
| 10             | IO4, GPIO4                 |

<br>

##### J3 Connector

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/j3-connector.svg"
  width="55%"
  caption="RAK5804 J3 Connector"
/>

| **Pin Number** | **Function Description**   |
| -------------- | -------------------------- |
| 1              | VBAT, Battery Power Supply |
| 2              | 3.3&nbsp;V                 |
| 3              | GND                        |
| 4              | LED1                       |
| 5              | LED2                       |
| 6              | AIN1, ADC Input            |
| 7              | IO2, GPIO2                 |
| 8              | SW1                        |
| 9              | I2C2_SCL                   |
| 10             | I2C2_SDA                   |

<br>

##### J4 Connector

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/micro-usb.png"
  width="20%"
  caption="RAK5804 J4 USB connector"
/>

| **Pin** | **Description**      |
| ------- | -------------------- |
| 1       | USB_VBUS (+5&nbsp;V) |
| 2       | USB_DM               |
| 3       | USB_DP               |
| 4       | NC                   |
| 5       | GND                  |

<br>

#### Pin Definition


The RAK5804 module comprises a standard WisBlock Interface connector. This IO connector allows the RAK5804 module to be mounted on a WisBlock baseboard, such as the RAK5005-O. The pin order of the connector is shown in Figure 6.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/wisio-connector.png"
  width="50%"
  caption="RAK5804 WisBlock Interface connector"
/>

| **Pin Number** | **Description** | **Pin Number** | **Description**                   |
| -------------- | --------------- | -------------- | --------------------------------- |
| 1              | Battery Power   | 2              | Battery Power                     |
| 3              | GND             | 4              | GND                               |
| 5              | 3V3 Power       | 6              | NC, Power Reserved for 3.3&nbsp;V |
| 7              | USB+            | 8              | USB–                              |
| 9              | VBUS            | 10             | SW1                               |
| 11             | NC              | 12             | NC                                |
| 13             | NC              | 14             | LED1                              |
| 15             | LED2            | 16             | NC                                |
| 17             | NC              | 18             | NC                                |
| 19             | SDA for I2C1    | 20             | SCL for I2C1                      |
| 21             | NC              | 22             | Analog1 to MCU                    |
| 23             | NC              | 24             | NC                                |
| 25             | NC              | 26             | NC                                |
| 27             | NC              | 28             | NC                                |
| 29             | IO1             | 30             | IO2                               |
| 31             | IO3             | 32             | IO4                               |
| 33             | TXD1            | 34             | RXD1                              |
| 35             | SDA for I2C2    | 36             | SCL for I2C2                      |
| 37             | NC              | 38             | NC                                |
| 39             | GND             | 40             | GND                               |

<br>

#### Electrical Characteristics

This sections shows the maximum and minimum ratings of the RAK5804 module and its recommended operating conditions. Refer to tables presented below. 

##### Absolute Maximum Ratings

| **Symbol** | **Description**             | **Minimum** | **Nominal** | **Maximum** | **Unit** |
| ---------- | --------------------------- | ----------- | ----------- | ----------- | -------- |
| VBAT       | Power Supply for the Module | –0.5        |             | 4.2         | V        |
| 3V3        | 3.3&nbsp;V Power Supply     | –0.5        |             | 3.6         | V        |
| Ifuse      | PTC Protection Current      |             |             | 500         | mA       |
| TEMP       | Working Temperature         | –30         |             | 65          | °C       |
| Storage    | Storage Temperature         | –40         |             | 85          | °C       |

<br>

##### Recommended Operating Conditions

| **Symbol** | **Description**             | **Minimum** | **Nominal** | **Maximum** | **Unit** |
| ---------- | --------------------------- | ----------- | ----------- | ----------- | -------- |
| VBAT       | Power Supply for the module | 2.6         |             | 4.2         | V        |
| 3V3        | 3.3V Power Supply           | 3.0         | 3.3         | 3.6         | V        |

<br>

#### Mechanical Characteristics

##### Board Dimensions

The mechanical dimensions of the RAK5804 module is shown in Figure 7 below.


<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/mechanical-dimensions.png"
  width="75%"
  caption="RAK5804 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>
#### Schematic Diagram

Figure 9 shows the schematic diagram of RAK5804 WisBlock Interface connector, USB connector, and the 10 mechanical holes.

<rk-img
  src="/assets/images/wisblock/rak5804/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK5804 Schematic Diagram"
/>
