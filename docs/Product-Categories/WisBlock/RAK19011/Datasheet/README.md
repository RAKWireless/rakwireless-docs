---
rak_desc: Provides comprehensive information about your RAK19011 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19011/RAK19011.png
tags:
  - datasheet
  - wisblock
  - RAK19011
prev: ../Quickstart/
next: false

---

# RAK19011 WisBlock Dual IO Base Board with Power Slot Datasheet

## WisBlock Dual IO Base Board with Power Slot Overview

**RAK19011** is a **WisBlock Dual IO Base Board with Power Slot** board that connects **WisBlock Core**, **Wisblock Power**, and **WisBlock Modules**. It has one slot reserved for the WisBlock Core module, one slot for the Wisblock Power module, two IO slots, and six sensor slots A to F for WisBlock Modules. Also, there are two **2.54&nbsp;mm pitch headers** that expose all key input-output pins of the WisBlock Core including UART, I2C, SPI, and many IO Pins.

WisBlock Modules are connected to the RAK19011 WisBlock Dual IO Base Board with Power Slot via **high-speed board-to-board connectors**. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations. Additionally, it has a user-defined button.

If you can't find a module that fits your IoT requirements, use the standard connectors of WisBlock to develop your specific function module. WisBlock supports open-source hardware architecture and you can find tutorials showing how to create your own [Awesome WisBlock](https://github.com/RAKWireless/Awesome-WisBlock) module.

### Main Features

* Flexible building block design, which enables modular functionality and expansion
* High-speed interconnection connectors in the WisBlock Base board to ensure signal integrity
* **Multiple headers and modules slots** for WisBlock modules
    * One (1) Core slot
    * One (1) Power slot
    * Two (2) IO slots
    * Six (6) sensor (A to F) slots
    * All key input-output pins of WisBlock Core are exposed via headers
    * Access to various communication bus via headers: I2C, SPI, UART, and USB
    * One user-defined push button switch
* **Size**
    * 60 x 67&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/rak19011-front-back-overview.png"
  width="75%"
  caption="RAK19011 WisBlock Base top (left) and bottom (right) view"
/>

#### Block Diagram

The block diagram in **Figure 2** shows the internal architecture and external interfaces of the RAK19011 board.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/rak19011-block-diagram.png"
  width="90%"
  caption="RAK19011 WisBlock Base block diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK19011 WisBlock Dual IO Base Board with Power Slot.

#### Interfaces

RAK19011 WisBlock Dual IO Base Board with Power Slot provides the following interfaces, headers, a button, and WisConnectors:

* 1 WisBlock Core module
* 1 WisBlock Power module
* 2 IO slots for WisBlock modules
* 6 Sensor slots A-F for WisBlock modules
* 2 Headers for complete access to BOOT, I2C, SPI, UART, USB, and IO pins
* 1 User-defined button


<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/rak19011-interface.png"
  width="60%"
  caption="RAK19011 part label"
/>

##### J19 and J20 Headers (Core IO Pins)

On the WisBlock Dual IO Base board with power slot, there are a total of 40 2.54&nbsp;mm pitch headers for IO access and extension. These IO pins are distributed to J10 and J15 pin headers with the corresponding label at the back of the board. The arrangement of the pins is based on the [40-pin WisConnector of the WisBlock Core](#connector-for-wisblock-core).

:::tip 📝 NOTE
BOOT pin is used on startup configuration or sequence of the WisBlock Core connected to it. It is commonly used for uploading the bootloader and/or application firmware. The requirements of the state of the BOOT pin depend on the specific model of the WisBlock Core used.
:::

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/J19-J20_label.png"
  width="50%"
  caption="J19 and J20 pin header label in top side"
/>

##### J21 and J18 Headers (I2C and UART)

A dedicated header is available as well to have access to commonly used serial interfaces **I2C** and **UART**.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/J18-J21_Label.png"
  width="30%"
  caption="J21 and J18 (I2C and UART) pin header label in bottom side"
/>

##### User Programmable Push Button

The User Programmed Push Button shown in [**Figure 3**](#interfaces) is connected to the SW1 pin of the WisBlock Core.


#### Pin Definition

##### Connector for WisBlock Core

The **WisCore module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisBlock Core module 40-pin connector"
/>

The table below shows the pinout of the 40-pin MCU module connector:

| **Pin Number** | **Function Name of WisBlock Base** | **Pin Number** | **Function Name of WisBlock Base** |
| :------------: | :--------------------------------: | :------------: | :--------------------------------: |
|       1        |                VBAT                |       2        |                VBAT                |
|       3        |                GND                 |       4        |                GND                 |
|       5        |                3V3                 |       6        |                3V3                 |
|       7        |                USB+                |       8        |                USB–                |
|       9        |                VBUS                |       10       |                SW1                 |
|       11       |                TXD0                |       12       |                RXD0                |
|       13       |               RESET                |       14       |                LED1                |
|       15       |                LED2                |       16       |                IO8                 |
|       17       |                VDD                 |       18       |                VDD                 |
|       19       |              I2C1_SDA              |       20       |              I2C1_SCL              |
|       21       |              AIN0                  |       22       |                AIN1                |
|       23       |               BOOT0                |       24       |                IO7                 |
|       25       |               SPI_CS               |       26       |              SPI_CLK               |
|       27       |              SPI_MISO              |       28       |              SPI_MOSI              |
|       29       |                IO1                 |       30       |                IO2                 |
|       31       |                IO3                 |       32       |                IO4                 |
|       33       |                TXD1                |       34       |                RXD1                |
|       35       |              I2C2_SDA              |       36       |              I2C2_SCL              |
|       37       |                IO5                 |       38       |                IO6                 |
|       39       |                GND                 |       40       |                GND                 |

<br>

As for the following table, it shows the definition of each pin of the WisBlock Core connector:

| **Pin Number** | **Pin Name** | **Type** |                                   **Description**                                    |
| :------------: | :----------: | :------: | :----------------------------------------------------------------------------------: |
|       1        |     VBAT     |    S     |                              Power supply from battery                               |
|       2        |     VBAT     |    S     |                              Power supply from battery                               |
|       3        |     GND      |    S     |                                        Ground                                        |
|       4        |     GND      |    S     |                                        Ground                                        |
|       5        |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       6        |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       7        |     USB+     |   I/O    |                                        USB D+                                        |
|       8        |     USB–     |   I/O    |                                        USB D–                                        |
|       9        |     VBUS     |    S     |                                       USB VBUS                                       |
|       10       |     SW1      |   I/O    |   User Defined Button (available on RAK4631/RAK4631-R and 11200 WisBlock Cores)      |
|       11       |     TXD0     |   I/O    |                                 MCU UART0 TX signal                                  |
|       12       |     RXD0     |   I/O    |                                 MCU UART0 RX signal                                  |
|       13       |    RESET     |    I     |                     Connected to the reset switch, for MCU reset                     |
|       14       |     LED1     |   I/O    |                         LED for battery charging indication                          |
|       15       |     LED2     |   I/O    |                                 LED for custom usage                                 |
|       16       |     LED3     |   I/O    |                                 LED for custom usage                                 |
|       17       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       18       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       19       |   I2C1_SDA   |   I/O    |                           The first set of I2C data signal                           |
|       20       |   I2C1_SCL   |   I/O    |                          The first set of I2C clock signals |
|       21       |   ADC_VBAT   |    A     |                    Analog input for ADC (Connected to a battery)                     |
|       22       |     AIN1     |    A     |                                 Analog input for ADC                                 |
|       23       |    BOOT0     |    I     |    For ST MCU only. The MCU will enter boot mode if this pin is connected to VDD.    |
|       24       |     IO7      |   I/O    |                                    Not connected                                     |
|       25       |    SPI_CS    |   I/O    |                                SPI chip select signal                                |
|       26       |   SPI_CLK    |   I/O    |                                   SPI clock signal                                   |
|       27       |   SPI_MISO   |   I/O    |                                   SPI MISO signal                                    |
|       28       |   SPI_MOSI   |   I/O    |                                   SPI MOSI signal                                    |
|       29       |     IO1      |   I/O    |                                  General purpose IO                                  |
|       30       |     IO2      |   I/O    |                                Used for 3V3_S enable                                 |
|       31       |     IO3      |   I/O    |                                  General purpose IO                                  |
|       32       |     IO4      |   I/O    |                                  General purpose IO                                  |
|       33       |     TXD1     |   I/O    |                                 MCU UART1 RX signal                                  |
|       34       |     RXD1     |   I/O    |                                 MCU UART1 RX signal                                  |
|       35       |   I2C2_SDA   |   I/O    |                          The second set of I2C data signal                           |
|       36       |   I2C2_SCL   |   I/O    |                          The second set of I2C clock signal                          |
|       37       |     IO5      |   I/O    |                                  General purpose IO                                  |
|       38       |     IO6      |   I/O    |                                  General purpose IO                                  |
|       39       |     GND      |    S     |                                        Ground                                        |
|       40       |     GND      |    S     |                                        Ground                                        |

##### Connector for WisBlock Power Module

The **WisPower module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisBlock Core module 40-pin connector"
/>

The table below shows the pinout of the 40-pin Power module connector:

| **Pin Number** | **Function Name of WisBlock Base** | **Pin Number** | **Function Name of WisBlock Base** |
| :------------: | :--------------------------------: | :------------: | :--------------------------------: |
|       1        |                VBAT                |       2        |                VBAT                |
|       3        |                GND                 |       4        |                GND                 |
|       5        |                3V3                 |       6        |                3V3                 |
|       7        |                USB+                |       8        |                USB–                |
|       9        |                VBUS                |       10       |                VBUS                |
|       11       |                NC                  |       12       |                NC                  |
|       13       |               RESET                |       14       |                LED1                |
|       15       |                LED2                |       16       |                NC                  |
|       17       |                3V3                 |       18       |                3V3                 |
|       19       |              I2C1_SDA              |       20       |              I2C1_SCL              |
|       21       |                AIN0                |       22       |                AIN1                |
|       23       |                NC                  |       24       |                NC                  |
|       25       |               SPI_CS               |       26       |              SPI_CLK               |
|       27       |              SPI_MISO              |       28       |              SPI_MOSI              |
|       29       |                NC                  |       30       |                NC                  |
|       31       |                NC                  |       32       |                NC                  |
|       33       |                NC                  |       34       |                NC                  |
|       35       |              I2C2_SDA              |       36       |              I2C2_SCL              |
|       37       |                IO5                 |       38       |                IO6                 |
|       39       |                GND                 |       40       |                GND                 |

<br>

As for the following table, it shows the definition of each pin of the WisBlock Power slot connector:

| **Pin Number** | **Pin Name** | **Type** |                                   **Description**                                    |
| :------------: | :----------: | :------: | :----------------------------------------------------------------------------------: |
|       1        |     VBAT     |    S     |                              Power supply from battery                               |
|       2        |     VBAT     |    S     |                              Power supply from battery                               |
|       3        |     GND      |    S     |                                        Ground                                        |
|       4        |     GND      |    S     |                                        Ground                                        |
|       5        |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       6        |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       7        |     USB+     |   I/O    |                                        USB D+                                        |
|       8        |     USB–     |   I/O    |                                        USB D–                                        |
|       9        |     VBUS     |    S     |                                       USB VBUS                                       |
|       10       |     VBUS     |   I/O    |                                       USB VBUS                                       |
|       11       |     NC       |    NC    |                                    Not connected                                     |
|       12       |     NC       |    NC    |                                    Not connected                                     |
|       13       |    RESET     |    I     |                     Connected to the reset switch, for MCU reset                     |
|       14       |     LED1     |   I/O    |                         LED for battery charging indication                          |
|       15       |     LED2     |   I/O    |                                 LED for custom usage                                 |
|       16       |     NC       |    NC    |                                    Not connected                                     |
|       17       |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       18       |     3V3      |    S     |                               3.3&nbsp;V power supply                                |
|       19       |   I2C1_SDA   |   I/O    |                           The first set of I2C data signal                           |
|       20       |   I2C1_SCL   |   I/O    |                          The first set of I2C clock signal                           |
|       21       |     AIN0     |    A     |                                 Analog input for ADC                                 |
|       22       |     AIN1     |    A     |                                 Analog input for ADC                                 |
|       23       |     NC       |    NC    |                                    Not connected                                     |
|       24       |     NC       |    NC    |                                    Not connected                                     |
|       25       |    SPI_CS    |   I/O    |                                SPI chip select signal                                |
|       26       |   SPI_CLK    |   I/O    |                                   SPI clock signal                                   |
|       27       |   SPI_MISO   |   I/O    |                                   SPI MISO signal                                    |
|       28       |   SPI_MOSI   |   I/O    |                                   SPI MOSI signal                                    |
|       29       |     NC       |    NC    |                                    Not connected                                     |
|       30       |     NC       |    NC    |                                    Not connected                                     |
|       31       |     NC       |    NC    |                                    Not connected                                     |
|       32       |     NC       |    NC    |                                    Not connected                                     |
|       33       |     NC       |    NC    |                                    Not connected                                     |
|       34       |     NC       |    NC    |                                    Not connected                                     |
|       35       |   I2C2_SDA   |   I/O    |                          The second set of I2C data signal                           |
|       36       |   I2C2_SCL   |   I/O    |                          The second set of I2C clock signal                          |
|       37       |     IO5      |   I/O    |                                  General purpose IO                                  |
|       38       |     IO6      |   I/O    |                                  General purpose IO                                  |
|       39       |     GND      |    S     |                                        Ground                                        |
|       40       |     GND      |    S     |                                        Ground                                        |


##### Connectors for WisBlock Sensor

The WisBlock sensor module connector is a 24-pin board-to-board connector.

:::warning ⚠️WARNING
The WisBlock 24-pin connectors have the same connections for **3V3_S**, **GND**, **I2C**, and **SPI**. However, **UART** and **IO** pins are not the same for all slots.
:::


<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/13.wissensor-module-connector.png"
  width="40%"
  caption="WisBlock 24-pin module connector"
/>

Pinout definition for standard size slot (A-D):
| D        | C        | B        | A        | **Pin Number** | **Pin Number** | A        | B        | C        | D        |
| -------- | -------- | -------- | -------- | -------------- | -------------- | -------- | -------- | -------- | -------- |
| NC       | NC       | NC       | TXD0     | 1              | 2              | GND      | GND      | GND      | GND      |
| SPI_CS   | SPI_CS   | SPI_CS   | SPI_CS   | 3              | 4              | SPI_CLK  | SPI_CLK  | SPI_CLK  | SPI_CLK  |
| SPI_MISO | SPI_MISO | SPI_MISO | SPI_MISO | 5              | 6              | SPI_MOSI | SPI_MOSI | SPI_MOSI | SPI_MOSI |
| I2C1_SCL | I2C1_SCL | I2C1_SCL | I2C1_SCL | 7              | 8              | I2C1_SDA | I2C1_SDA | I2C1_SDA | I2C1_SDA |
| VDD      | VDD      | VDD      | VDD      | 9              | 10             | IO2      | IO1      | IO4      | IO6      |
| 3V3_S    | 3V3_S    | 3V3_S    | 3V3_S    | 11             | 12             | IO1      | IO2      | IO3      | IO5      |
| NC       | NC       | NC       | NC       | 13             | 14             | 3V3_S    | 3V3_S    | 3V3_S    | 3V3_S    |
| NC       | NC       | NC       | NC       | 15             | 16             | VDD      | VDD      | VDD      | VDD      |
| NC       | NC       | NC       | NC       | 17             | 18             | NC       | NC       | NC       | NC       |
| NC       | NC       | NC       | NC       | 19             | 20             | NC       | NC       | NC       | NC       |
| NC       | NC       | NC       | NC       | 21             | 22             | NC       | NC       | NC       | NC       |
| GND      | GND      | GND      | GND      | 23             | 24             | RXD0     | NC       | NC       | NC       |

<br>

Pinout definition for double-size sensor slot (E and F):
| Connector F | Connector E | Pin Number | Pin Number | Connector E | Connector F |
| ----------- | ----------- | ---------- | ---------- | ----------- | ----------- |
| TXD1        | TXD0        | 1          | 2          | GND         | GND         |
| SPI_CS      | SPI_CS      | 3          | 4          | SPI_CLK     | SPI_CLK     |
| SPI_MISO    | SPI_MISO    | 5          | 6          | SPI_MOSI    | SPI_MOSI    |
| I2C1_SCL    | I2C1_SCL    | 7          | 8          | I2C1_SDA    | I2C1_SDA    |
| VDD         | VDD         | 9          | 10         | IO3         | IO5         |
| 3V3_S       | 3V3_S       | 11         | 12         | IO4         | IO6         |
| NC          | NC          | 13         | 14         | 3V3_S       | 3V3_S       |
| NC          | NC          | 15         | 16         | VDD         | VDD         |
| NC          | NC          | 17         | 18         | NC          | NC          |
| NC          | NC          | 19         | 20         | NC          | NC          |
| NC          | NC          | 21         | 22         | NC          | NC          |
| GND         | GND         | 23         | 24         | RXD0        | RXD1        |

<br>

As for the following table, it shows the pin name and description of each pin in the 24-pin WisBlock module connector.
| **Pin Number** | **Pin Name** | **Type** |                                       **Description**                                       |
| :------------: | :----------: | :------: | :-----------------------------------------------------------------------------------------: |
|       1        |     TXD1     |   I/O    |                                       UART TX signal                                        |
|       2        |     GND      |    S     |                                           Ground                                            |
|       3        |    SPI_CS    |   I/O    |                                   SPI chip select signal                                    |
|       4        |   SPI_CLK    |   I/O    |                                      SPI clock signal                                       |
|       5        |   SPI_MISO   |   I/O    |                                       SPI MISO signal                                       |
|       6        |   SPI_MOSI   |   I/O    |                                       SPI MOSI signal                                       |
|       7        |   I2C1_SCL   |   I/O    |                                      I2C clock signal                                       |
|       8        |   I2C1_SDA   |   I/O    |                                       I2C data signal                                       |
|       9        |     VDD      |    S     |    Generated by CPU module. Used to power sensor board if MCU IO level is not 3.3&nbsp;V    |
|       10       |     IOx      |   I/O    | General purpose IO pin. When 3V3_S is used, this pin cannot be used as an interrupt input.  |
|       11       |    3V3_S     |    S     | 3.3&nbsp;V power supply. This power pin is controlled by IO2 from the WisBlock Core module. |
|       12       |     IOx      |   I/O    | General purpose IO pin. When 3V3_S is used, this pin cannot be used as an interrupt input.  |
|       13       |      NC      |    NC    |                                        Not connected                                        |
|       14       |    3V3_S     |    S     | 3.3&nbsp;V power supply. This power pin is controlled by IO2 from the WisBlock Core module. |
|       15       |      NC      |    NC    |                                        Not connected                                        |
|       16       |     VDD      |    S     | Generated by CPU module. Used to power sensor board if the MCU IO level is not 3.3&nbsp;V.  |
|       17       |      NC      |    NC    |                                        Not connected                                        |
|       18       |      NC      |    NC    |                                        Not connected                                        |
|       19       |      NC      |    NC    |                                        Not connected                                        |
|       20       |      NC      |    NC    |                                        Not connected                                        |
|       21       |      NC      |    NC    |                                        Not connected                                        |
|       22       |      NC      |    NC    |                                        Not connected                                        |
|       23       |     GND      |    S     |                                           Ground                                            |
|       24       |     RXD1     |   I/O    |                                       UART RX signal                                        |


##### Connector for WisBlock IO Slot

The WisBlock Module IO Slot connector, as shown in **Figure 9**, is a 40-pin board-to-board connector.

:::tip 📝 NOTE
The two WisBlock 40-pin connectors have the same connections for all IO, signal, and serial pins (UART, SPI, I2C).
:::

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/io-connector.png"
  width="40%"
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
2. Exposure to maximum rating conditions may affect the device reliability.
:::

| Ratings                                 | Maximum Value   | Unit |
| --------------------------------------- | --------------- | ---- |
| IOs of WisConnector                     | –0.3 to VDD+0.3 | V    |
| ESD                                     | 2000            | V    |

:::tip 📝 NOTE
The RAK19011, like any electronic equipment, is sensitive to **electrostatic discharge (ESD)**. Improper handling can cause permanent damage to the module.
:::

##### Current Consumption

The RAK19011 is designed for **low-power IoT products**. Its power supply uses a high-efficiency low ground current regulator. When there is no module on RAK19011, the **leakage current is lower than 2&nbsp;µA**. With WisBlock Core and WisBlock sensor on it, the sleep current is **lower than 10&nbsp;µA**. When a LoRa module is transmitting, the current may reach **130&nbsp;mA**.

| **Conditions**                                                      | **Current** | **Unit** |
| ------------------------------------------------------------------- | ----------- | -------- |
| Leakage current, without any module on RAK19011                     | 2           | µA       |
| Idle current, with WisBlock Core and WisBlock Modules in sleep mode | 10          | µA       |
| Working current, with LoRa module transmitting                      | 130         | mA       |


#### Mechanical Characteristics

##### Board Dimensions

:::tip 📝 NOTE
- You may also refer and download the [M1.2 Stand-off fastener/inserts datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/M1.2_Press-Fit_Standoff_Datasheet.zip).
:::

**Figure 10** shows the detailed mechanical dimensions of RAK19011.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/board-dimension.png"
  width="100%"
  caption="RAK19011 board dimensions"
/>

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/rak19001-pwb.png"
  width="100%"
  caption="RAK19011 mechanical dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK19011:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

The component schematic diagram of the RAK19011 is shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/schematic1.png"
  width="100%"
  caption="RAK19011 schematic diagram 1"
/>

<rk-img
  src="/assets/images/wisblock/rak19011/datasheet/schematic2.png"
  width="100%"
  caption="RAK19011 schematic diagram 2"
/>


