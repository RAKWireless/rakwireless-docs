---
rak_desc: Provides comprehensive information about your RAK19007 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19007/RAK19007.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisblock
  - RAK19007
---

# RAK19007 WisBlock Base Board 2nd Gen Datasheet

## WisBlock Base Board 2nd Gen Overview

**RAK19007** is a **WisBlock Base Board 2nd Gen** that connects **WisBlock Core**, **WisBlock IO**, and **WisBlock Modules**. It provides the power supply and interconnection to the modules attached to it. It has one slot reserved for the WisBlock Core module and four slots A-D for WisBlock modules. The WisBlock Core is attached on the top side, and the WisBlock modules are attached to the top or bottom side of the RAK19007. The Slot D holds modules up to 23&nbsp;mm in size, while slots A to C support 10&nbsp;mm WisBlock modules. Also, there are three **2.54&nbsp;mm pitch headers** for extension interface with **BOOT**, **GPIO**, **I2C**, and **UART** pins.

For convenience, there is a Type-C USB connector that is connected directly to WisBlock Core MCU’s USB port (if supported) or to a USB-UART converter depending on the WisBlock Core. It can be used for uploading firmware or serial communication. The USB-C connector is also used as a battery charging port.

WisBlock modules are connected to the RAK19007 WisBlock Base board via high-speed board-to-board connectors. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

You can also use a [RAK19005 WisBlock Sensor Extension Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to position the WisBlock modules apart from the WisBlock Base board or in any part of your case.

**RAK19007** has connectors for the following:

* 1 WisBlock Core module
* 1 WisBlock compatible with IO slot
* 4 WisBlock modules compatible with slots A-D
* 1 Type-C USB port for programming and debugging
* 3.7&nbsp;V Rechargeable battery connector
* 5&nbsp;V Solar panel connector
* Four 4-pin header with BOOT, I2C, and UART pins accessible with solder contacts

Additionally, it has two user-definable LEDs, one power supply/charging indicator LED, and a reset button.

:::tip 📝 NOTE:

**Improvements from RAK5005-O Base board**

- J11 header Analog input changed from AIN0 to AIN1.
- Upgraded to USB C connector.
- Slot D position changed with added TX1/RX1 availability to it.

:::

If you can't find a WisBlock module that fits your IoT requirements, use the standard connectors of WisBlock to develop your specific function module. WisBlock supports open-source hardware architecture and you can find tutorials showing how to create your own [Awesome WisBlock](https://github.com/RAKWireless/Awesome-WisBlock) module.

### Applications

- Wireless Sensor Network
- Environmental monitoring
- Wireless data transmission
- Data acquisition in the industrial environment
- Location and tracking of personnel or moving objects

### Main Features

- Flexible building block design, which enables modular function realization and expansion
- High-speed interconnection connectors in the WisBlock Base Board 2nd Gen Board to ensure signal integrity
- Supports multiple types of low power MCUs
- Supports multiple types of sensors. A single board can support a combination of two different types of sensors
- Low power battery power supply
- Supports lithium battery charging
- Supports solar panel charging
- Fulfills industrial level design
- Compact size: 30 x 60&nbsp;mm

## Specifications

### Overview

There are six (6) slots on RAK19007 WisBlock Base Board 2nd Gen:

- **CPU SLOT**: This slot is reserved for the WisBlock Core module which has the main MCU.
- **IO SLOT**: This slot is used for IO extension modules.
- **Four Sensor Slots**: The sensor slots A to D are used to connect with the I2C bus. Slot D can be used for GNSS modules, too.

Also, there are three (3) 2.54&nbsp;mm pitch hole pads for extension interface such as BOOT, I2C, UART, and GPIO pins.


<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/rak19007-top.svg"
  width="50%"
  caption="WisBlock Base Board 2nd Gen top view"
/>

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/rak19007-bottom.svg"
  width="50%"
  caption="WisBlock Base Board 2nd Gen bottom view"
/>

#### Block Diagram

The block diagram in **Figure 3** shows the internal architecture and external interfaces of the RAK19007 board.
<br>

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/rak19007-block-diagram.png"
  width="80%"
  caption="RAK19007 WisBlock Base Board 2nd Gen block diagram"
/>
<br>

### Hardware

The hardware specification is categorized into six parts. It shows the interfacing, pinouts and the corresponding functions and diagrams. It also presents the electrical, environmental, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK19007 WisBlock Base Board 2nd Gen.

#### Interfaces

RAK19007 WisBlock Base Board 2nd Gen provides the following interfaces, headers, a button, and WisBlock Connectors.

- One Type-C USB connector
- One connector for CPU slot
- One connector for the IO slot
- Four connectors for WisBlock sensor modules (slots A to D)
- Three 4-pin header 2.54&nbsp;mm hole pads (GPIO, UART, I2C, Power)
- 2-pin battery interface
- 2-pin solar panel interface

Additionally, the RAK19007 has two user-definable LEDs, one power supply/charging indicator LED, and a reset button.

**Figure 4** and **Figure 5** show the location of RAK19007 main components.


<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/rak19007-top-interface.png"
  width="90%"
  caption="RAK19007 top view components"
/>

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/rak19007-bot-interface.png"
  width="90%"
  caption="RAK19007 bottom view components"
/>

##### Type-C USB port

The Type-C USB connector is compliant with the USB 2.0 specification. This USB interface directly communicates with the connected **WisBlock Core** module. It is also used as a charging input port for the battery. Here are some of the advantages of the Type-C USB connector:

* Smaller and reversible connector shape
* Port can be input or output
* Fast battery charging

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/image-20220127173430838.png"
  width="60%"
  caption="USB Type-C receptacle pinout"
/>

##### J10, J11, J12 Headers

On the RAK19007 Base Board, there are three 2.54&nbsp;mm pitch headers for IO extension. BOOT, I2C, GPIO, and UART pins from the WisBlock Core module are also connected to these headers.


###### J10 Header Pinout

| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | BOOT         | MCU BOOT pin    |
| 2       | GND          | Ground pin      |
| 3       | TX1          | UART1 TX pin    |
| 4       | RX1          | UART1 RX pin    |

###### J11 Header Pinout

| **Pin** | **Pin Name** | **Description**    |
| ------- | ------------ | ------------------ |
| 1       | AIN1         | ADC input signal   |
| 2       | IO1          | General purpose IO |
| 3       | IO2          | General purpose IO |
| 4       | VBAT         | Battery voltage    |

###### J12 Header Pinout

| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | VDD          | 3.3&nbsp;V      |
| 2       | GND          | Ground pin      |
| 3       | SCL          | I2C1 clock      |
| 4       | SDA          | I2C2 data       |



:::tip 📝 NOTE BOOT pin
BOOT pin is used on startup configuration or sequence of the WisBlock Core connected to it. It is commonly used for uploading the bootloader and/or application firmware. The requirements of the state of the BOOT pin depend on the specific model of the WisBlock Core used.
:::

##### Battery Connector

**Figure 7** shows the battery connector V+(VBAT) and V-(GND).

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/battery-connector.svg"
  width="50%"
  caption="Battery connector pin order"
/>


:::warning ⚠️ WARNING
The voltage of the battery **must not exceed 4.3&nbsp;V**.
:::

##### Solar Panel Connector

**Figure 8** shows the solar panel connector V+(Vin) and V-(GND)

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/solar-panel-connector.svg"
  width="50%"
  caption="Solar panel connector V+ and V- Order"
/>


:::warning ⚠️ WARNING
The output voltage of the solar panel **must not exceed 5.5&nbsp;V**. Otherwise, it may cause permanent damage to the board.
:::

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - Connected to the WisBlock Core module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the Wisblock Core module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button is connected to the WisBlock Core module. When pushed, it resets the MCU.

#### Pin Definition

##### Connector for WisBlock Core

The **WisBlock Core module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisBlock Core module connector"
/>

The table below shows the pinout of the 40-pin WisBlock core connector:


| **Function Name of WisBlock Base** | **Pin Number** | **Pin Number** | **Function Name of WisBlock Base** |
| ---------------------------------- | -------------- | -------------- | ---------------------------------- |
| VBAT                               | 1              | 2              | VBAT                               |
| GND                                | 3              | 4              | GND                                |
| 3V3                                | 5              | 6              | 3V3                                |
| USB+                               | 7              | 8              | USB–                               |
| VBUS                               | 9              | 10             | SW1                                |
| TXD0                               | 11             | 12             | RXD0                               |
| RESET                              | 13             | 14             | LED1                               |
| LED2                               | 15             | 16             | LED3                               |
| VDD                                | 17             | 18             | VDD                                |
| I2C1_SDA                           | 19             | 20             | I2C1_SCL                           |
| AIN0                               | 21             | 22             | AIN1                               |
| BOOT0                              | 23             | 24             | IO7                                |
| SPI_CS                             | 25             | 26             | SPI_CLK                            |
| SPI_MIS0                           | 27             | 28             | SPI_MOSI                           |
| IO1                                | 29             | 30             | IO2                                |
| IO3                                | 31             | 32             | IO4                                |
| TXD1                               | 33             | 34             | RXD1                               |
| I2C2_SDA                           | 35             | 36             | I2C2_SCL                           |
| IO5                                | 37             | 38             | IO6                                |
| GND                                | 39             | 40             | GND                                |

<br>

As for the following table, it shows the definition of each pin of the WisBlock Core connector:

| **Pin Number** | **Pin Name** | **Type** | **Description**                                                                      |
| -------------- | ------------ | -------- | ------------------------------------------------------------------------------------ |
| 1              | VBAT         | S        | Power supply from battery                                                            |
| 2              | VBAT         | S        | Power supply from battery                                                            |
| 3              | GND          | S        | Ground                                                                               |
| 4              | GND          | S        | Ground                                                                               |
| 5              | 3V3          | S        | 3.3&nbsp;V power supply                                                              |
| 6              | 3V3          | S        | 3.3&nbsp;V power supply                                                              |
| 7              | USB+         | I/O      | USB D+                                                                               |
| 8              | USB–         | I/O      | USB D–                                                                               |
| 9              | VBUS         | S        | VBUS for USB                                                                         |
| 10             | SW1          | I/O      | Switch signal for customer's control                                                 |
| 11             | TXD0         | I/O      | MCU UART0 TX signal                                                                  |
| 12             | RXD0         | I/O      | MCU UART0 RX signal                                                                  |
| 13             | RESET        | I        | Connected to the reset switch, for MCU reset                                         |
| 14             | LED1         | I/O      | LED for battery charging indication                                                  |
| 15             | LED2         | I/O      | LED for custom usage                                                                 |
| 16             | LED3         | I/O      | LED for custom usage                                                                 |
| 17             | VDD          | S        | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
| 18             | VDD          | S        | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
| 19             | I2C1_SDA     | I/O      | The first set of I2C data signal                                                     |
| 20             | I2C1_SCL     | I/O      | The first set of I2C clock signal                                                    |
| 21             | AIN0         | A        | Analog input for ADC                                                                 |
| 22             | AIN1         | A        | Analog input for ADC                                                                 |
| 23             | BOOT0        | I        | For ST MCU, set high when reset. The MCU will allow you to enter boot mode.          |
| 24             | IO7          | I/O      | Not connected                                                                        |
| 25             | SPI_CS       | I/O      | SPI chip select signal                                                               |
| 26             | SPI_CLK      | I/O      | SPI clock                                                                            |
| 27             | SPI_MISO     | I/O      | SPI MISO signal                                                                      |
| 28             | SPI_MOSI     | I/O      | SPI MOSI signal                                                                      |
| 29             | IO1          | I/O      | General purpose IO                                                                   |
| 30             | IO2          | I/O      | Used for 3V3_S enable                                                                |
| 31             | IO3          | I/O      | General purpose IO                                                                   |
| 32             | IO4          | I/O      | General purpose IO                                                                   |
| 33             | TXD1         | I/O      | MCU UART1 RX signal                                                                  |
| 34             | RXD1         | I/O      | MCU UART1 RX signal                                                                  |
| 35             | I2C2_SDA     | I/O      | The second set of I2C data signal                                                    |
| 36             | I2C2_SCL     | I/O      | The second set of I2C data signal                                                    |
| 37             | IO5          | I/O      | General purpose IO                                                                   |
| 38             | IO6          | I/O      | General purpose IO                                                                   |
| 39             | GND          | S        | Ground                                                                               |
| 40             | GND          | S        | Ground                                                                               |

##### Connectors for WisBlock Sensor

The WisBlock sensor module connector is a **24-pin board-to-board connector**.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/13.wissensor-module-connector.png"
  width="40%"
  caption="WisBlock Sensor module connector"
/>

:::tip 📝 NOTE
There are four connectors reserved for the sensor modules on the RAK19007. The pinout definition of the WisBlock modules with 24-pin connector on WisBlock Mini Base varies according to its connector.
:::

<br>

| **Connector D** | **Connector C** | **Connector B** | **Connector A** | **Pin Number** | **Pin Number** | **Connector A** | **Connector B** | **Connector C** | **Connector D** |
| --------------- | --------------- | --------------- | --------------- | -------------- | -------------- | --------------- | --------------- | --------------- | --------------- |
| TXD1            | NC              | NC              | TXD1            | 1              | 2              | GND             | GND             | GND             | GND             |
| SPI_CS          | SPI_CS          | SPI_CS          | SPI_CS          | 3              | 4              | SPI_CLK         | SPI_CLK         | SPI_CLK         | SPI_CLK         |
| SPI_MISO        | SPI_MISO        | SPI_MISO        | SPI_MISO        | 5              | 6              | SPI_MOSI        | SPI_MOSI        | SPI_MOSI        | SPI_MOSI        |
| I2C1_SCL        | I2C1_SCL        | I2C1_SCL        | I2C1_SCL        | 7              | 8              | I2C1_SDA        | I2C1_SDA        | I2C1_SDA        | I2C1_SDA        |
| VDD             | VDD             | VDD             | VDD             | 9              | 10             | IO2             | IO1             | IO4             | IO6             |
| 3V3_S           | 3V3_S           | 3V3_S           | 3V3_S           | 11             | 12             | IO1             | IO2             | IO3             | IO5             |
| NC              | NC              | NC              | NC              | 13             | 14             | 3V3_S           | 3V3_S           | 3V3_S           | 3V3_S           |
| NC              | NC              | NC              | NC              | 15             | 16             | VDD             | VDD             | VDD             | VDD             |
| NC              | NC              | NC              | NC              | 17             | 18             | NC              | NC              | NC              | NC              |
| NC              | NC              | NC              | NC              | 19             | 20             | NC              | NC              | NC              | NC              |
| NC              | NC              | NC              | NC              | 21             | 22             | NC              | NC              | NC              | NC              |
| GND             | GND             | GND             | GND             | 23             | 24             | RXD1            | NC              | NC              | RXD1            |

<br>

As for the following table, it shows the pin name and description of each pin in the WisBlock Sensor module connector.

| **Pin Number** | **Connector A** | **Connector B** | **Connector C** | **Connector D** | **Type** | **Description**                                                                                                                                 |
| -------------- | --------------- | --------------- | --------------- | --------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| 1              | TXD1            | NC              | NC              | TXD1            | I/O      | UART TX signal                                                                                                                                  |
| 2              | GND             | GND             | GND             | GND             | S        | Ground                                                                                                                                          |
| 3              | SPI_CS          | SPI_CS          | SPI_CS          | SPI_CS          | I/O      | SPI chip select signal                                                                                                                          |
| 4              | SPI_CLK         | SPI_CLK         | SPI_CLK         | SPI_CLK         | I/O      | SPI clock                                                                                                                                       |
| 5              | SPI_MISO        | SPI_MISO        | SPI_MISO        | SPI_MISO        | I/O      | SPI MISO signal                                                                                                                                 |
| 6              | SPI_MOSI        | SPI_MOSI        | SPI_MOSI        | SPI_MOSI        | I/O      | SPI MOSI signal                                                                                                                                 |
| 7              | I2C1_SCL        | I2C1_SCL        | I2C1_SCL        | I2C1_SCL        | I/O      | I2C clock signal                                                                                                                                |
| 8              | I2C1_SDA        | I2C1_SDA        | I2C1_SDA        | I2C1_SDA        | I/O      | I2C data signal                                                                                                                                 |
| 9              | VDD             | VDD             | VDD             | VDD             | S        | Generated by CPU module. Used to power sensor board if MCU IO level is not 3.3&nbsp;V                                                           |
| 10             | IO2             | IO1             | IO4             | IO6             | I/O      | General purpose IO. IO2 controls the power switch of 3V3_S. When the 3V3_S function is used, IO2 can not be used as an interrupt of the sensor. |
| 11             | 3V3_S           | 3V3_S           | 3V3_S           | 3V3_S           | S        | 3.3&nbsp;V power supply. Can be shut down by the CPU module.                                                                                    |
| 12             | IO1             | IO2             | IO3             | IO5             | I/O      | General purpose IO - IO controls the power switch of 3V3_S. When the 3V3_S function is used, IO2 cannot be used as an interrupt of the sensor.  |
| 13             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 14             | 3V3_S           | 3V3_S           | 3V3_S           | 3V3_S           | S        | 3.3&nbsp;V power supply. Can be shut down by the CPU module.                                                                                    |
| 15             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 16             | VDD             | VDD             | VDD             | VDD             | S        | Generated by CPU module. Used to power sensor board if the MCU IO level is not 3.3&nbsp;V.                                                      |
| 17             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 18             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 19             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 20             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 21             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 22             | NC              | NC              | NC              | NC              | NC       | Not connected                                                                                                                                   |
| 23             | GND             | GND             | GND             | GND             | S        | Ground                                                                                                                                          |
| 24             | RXD1            | NC              | NC              | RXD1            | I/O      | UART RX signal                                                                                                                                  |
##### Connector for WisBlock IO Slot

The WisBlock Module IO Slot connector, as shown in **Figure 13**, is a 40-pin board-to-board connector.

:::tip 📝 NOTE
The two WisBlock 40-pin connectors have the same connections for all IO, signal, and serial pins (UART, SPI, I2C).
:::

<rk-img
  src="/assets/images/wisblock/rak19001/datasheet/io-connector.png"
  width="35%"
  caption="WisBlock IO slot connector"
/>

Pinout definition for IO slot:

| **Connector B** | **Connector A** | **Pin Number** | **Pin Number** | **Connector A** | **Connector B** |
| --------------- | --------------- | -------------- | -------------- | --------------- | --------------- |
| VBAT            | VBAT            | 1              | 2              | VBAT            | VBAT            |
| GND             | GND             | 3              | 4              | GND             | GND             |
| 3V3             | 3V3             | 5              | 6              | 3V3_S           | 3V3_S           |
| USB+            | USB+            | 7              | 8              | USB–            | USB–            |
| VBUS            | VBUS            | 9              | 10             | SW1             | SW1             |
| TXD0            | TXD0            | 11             | 12             | RXD0            | RXD0            |
| RESET           | RESET           | 13             | 14             | LED1            | LED1            |
| LED2            | LED2            | 15             | 16             | LED3            | LED3            |
| VDD             | VDD             | 17             | 18             | VDD             | VDD             |
| I2C1_SDA        | I2C1_SDA        | 19             | 20             | I2C1_SCL        | I2C1_SCL        |
| AIN0            | AIN0            | 21             | 22             | AIN1            | AIN1            |
| NC              | NC              | 23             | 24             | NC              | NC              |
| SPI_CS          | SPI_CS          | 25             | 26             | SPI_CLK         | SPI_CLK         |
| SPI_MISO        | SPI_MISO        | 27             | 28             | SPI_MOSI        | SPI_MOSI        |
| IO1             | IO1             | 29             | 30             | IO2             | IO2             |
| IO3             | IO3             | 31             | 32             | IO4             | IO4             |
| TXD1            | TXD1            | 33             | 34             | RXD1            | RXD1            |
| I2C2_SDA        | I2C2_SDA        | 35             | 36             | I2C2_SCL        | I2C2_SCL        |
| IO5             | IO5             | 37             | 38             | IO6             | IO6             |
| GND             | GND             | 39             | 40             | GND             | GND             |

<br>

As for the following table, it shows the pin name and description of the WisBlock IO module connector.

| **Pin Number** | **Pin Name** | **Type** | **Description**                                                                              |
| -------------- | ------------ | -------- | -------------------------------------------------------------------------------------------- |
| 1              | VBAT         | S        | Power supply from battery                                                                    |
| 2              | VBAT         | S        | Power supply from battery                                                                    |
| 3              | GND          | S        | Ground                                                                                       |
| 4              | GND          | S        | Ground                                                                                       |
| 5              | 3V3          | S        | 3.3&nbsp;V power supply                                                                      |
| 6              | 3V3_S        | S        | 3.3&nbsp;V power supply. Can be shut down by a CPU module.                                   |
| 7              | USB+         | I/O      | USB D+                                                                                       |
| 8              | USB–         | I/O      | USB D–                                                                                       |
| 9              | VBUS         | S        | 5&nbsp;V input for USB                                                                       |
| 10             | SW1          | I/O      | User Defined Button (available on RAK4631/RAK4631-R and 11200 WisBlock Cores)                |
| 11             | TXD0         | I/O      | MCU UART0 TX signal                                                                          |
| 12             | RXD0         | I/O      | MCU UART0 RX signal                                                                          |
| 13             | RESET        | I        | Connected to the reset switch, for MCU reset                                                 |
| 14             | LED1         | I/O      | LED for battery charge indicator                                                             |
| 15             | LED2         | I/O      | LED for custom used                                                                          |
| 16             | LED3         | I/O      | LED for custom used                                                                          |
| 17             | VDD          | S        | Generated by CPU module - Used for power sensor board if the MCU IO level is not 3.3&nbsp;V  |
| 18             | VDD          | S        | Generated by CPU module - Used for power sensor board if the MCU IO level is not 3.3&nbsp;V. |
| 19             | I2C1_SDA     | I/O      | The first set of I2C data signal                                                             |
| 20             | I2C1_SCL     | I/O      | The first set of I2C clock signal                                                            |
| 21             | AIN0         | A        | Analog input for ADC                                                                         |
| 22             | AIN1         | A        | Analog input for ADC                                                                         |
| 23             | NC           | NC       | Not connect                                                                                  |
| 24             | NC           | NC       | Not connect                                                                                  |
| 25             | SPI_CS       | I/O      | SPI chip select signal                                                                       |
| 26             | SP_CLK       | I/O      | SPI clock                                                                                    |
| 27             | SPI_MISO     | I/O      | SPI MISO signal                                                                              |
| 28             | SPI_MOSI     | I/O      | SPI MOSI signal                                                                              |
| 29             | IO1          | I/O      | General purpose IO                                                                           |
| 30             | IO2          | I/O      | Used for 3V3_S enable                                                                        |
| 31             | IO3          | I/O      | General purpose IO                                                                           |
| 32             | IO4          | I/O      | General purpose IO                                                                           |
| 33             | TXD1         | I/O      | MCU UART1 TX signal                                                                          |
| 34             | RXD1         | I/O      | MCU UART1 RX signal                                                                          |
| 35             | I2C2_SDA     | I/O      | The second set of I2C data signal                                                            |
| 36             | I2C2_SCL     | I/O      | The second set of I2C clock signal                                                           |
| 37             | IO5          | I/O      | General purpose IO                                                                           |
| 38             | IO6          | I/O      | General purpose IO                                                                           |
| 39             | GND          | S        | Ground                                                                                       |
| 40             | GND          | S        | Ground                                                                                       |


#### Electrical Characteristics

##### Absolute Maximum Ratings

The Absolute Maximum Ratings of the device are shown in the table below. The stress ratings are the functional operation of the device.

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Under the listed conditions is not advised.
3. Exposure to maximum rating conditions may affect the device reliability.
:::


| **Ratings**                             | Maximum Value   | Unit |
| --------------------------------------- | --------------- | ---- |
| Power supply on the USB port (**VBUS**) | –0.3 to 5.5     | V    |
| Battery voltage (**VBAT**)              | –0.3 to 4.3     | V    |
| Solar panel voltage (**CONN_S**)        | –0.3 to 5.5     | V    |
| IOs of WisBlock connector               | –0.3 to VDD+0.3 | V    |
| ESD                                     | 2000            | V    |


:::warning ⚠️ WARNING
The RAK19007, as any electronic equipment, is sensitive to **electrostatic discharge (ESD)**. Improper handling can cause permanent damage to the module.
:::

##### Current Consumption

The RAK19007 is designed for **low-power IoT products**, and the power supply uses a high-efficiency low grounding current regulator. When there is no module on RAK19007, the **leakage current is lower than 2 µA**. With WisBlock Core and WisBlock Sensor on it, the sleep current is **lower than 10&nbsp;µA**. When a LoRa module is transmitting, the current may reach **130&nbsp;mA**.

| **Conditions**                                   | **Current** | **Unit** |
| ------------------------------------------------ | ----------- | -------- |
| Leakage current, without any module on RAK19007  | 2           | µA       |
| Idle current, with MCU and sensors in sleep mode | 10          | µA       |
| Working current, with LoRa module transmitting   | 130         | mA       |


##### Battery Connector

The RAK19007 WisBlock Base Board 2nd Gen can be powered by a rechargeable battery, connected to the **P2 connector**. The nominal operating voltage of the battery should be within the range shown in the following table. The matching connector for the battery wires is an [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199)

| **Minimum** | **Typical** | **Maximum** | **Unit** |
| ----------- | ----------- | ----------- | -------- |
| 3.3         | 3.7         | 4.3         | V        |

<br>

The Type-C USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed its charging limits, as shown in the table below.

| **Parameter**    | **Value**        |
| ---------------- | ---------------- |
| Charging voltage | 4.5 – 5.5&nbsp;V |
| Charging current | 350&nbsp;mA      |

<br>

A suitable Li-Ion battery should have the following parameters as shown in the table below:

| **Parameter**     | **Value**            |
| ----------------- | -------------------- |
| Standard voltage  | 3.7&nbsp;V           |
| Charging voltage  | 4.2&nbsp;V           |
| Capacity          | As required          |
| Discharge current | At least 500&nbsp;mA |


:::tip 📝 NOTE
Do not use a non-rechargeable battery.
:::


##### Solar Panel Connector

A 5&nbsp;V solar panel can be connected to the board via the **P1 connector**. The solar panel can also be used to charge the Li-Ion battery. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287).


#### Mechanical Characteristics

##### Board Dimensions

:::tip 📝 NOTE
- You may also refer and download the [M1.2 Stand-off fastener/inserts datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/M1.2_Press-Fit_Standoff_Datasheet.zip).
:::

**Figure 11** shows the detailed mechanical dimensions of the RAK19007 Board.

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/image-20220218090849344.png"
  width="100%"
  caption="RAK19007 mechanical dimensions"
/>

**Figure 12** and **Figure 13** show the mounting holes location and diameter of the RAK19007 Board.


<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/mholes-rak19007-top.png"
  width="100%"
  caption="RAK19007 mounting holes location and diameter top view"
/>


<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/mholes-rak19007-bottom.png"
  width="100%"
  caption="RAK19007 mounting holes location and diameter bottom view"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19007:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational Temperature Range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended Temperature Range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage Temperature Range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

The component schematics diagram of the RAK19007 is shown in **Figure 15** and **Figure 16**.

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/power-schematic.png"
  width="100%"
  caption="RAK19007 schematic diagram (Power)"
/>

<rk-img
  src="/assets/images/wisblock/rak19007/datasheet/slots-schematic.png"
  width="100%"
  caption="RAK19007 schematic diagram (Slots)"
/>
