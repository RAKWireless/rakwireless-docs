---
rak_desc: Provides comprehensive information about your RAK19009 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19009/overview/RAK19009_home.png
tags:
  - datasheet
  - wisblock
  - RAK19009
prev: ../Quickstart/
next: false
---

# RAK19009 WisBlock Mini Base Board with Power Slot Datasheet

## WisBlock Mini Base Board with Power Slot Overview

**RAK19009** is a **WisBlock Base** board that connects **WisBlock Core**, **WisBlock Power Module**, and **WisBlock Modules**. It has one slot reserved for the WisBlock Core module, one slot for the WisBlock Power module, and two Slot C-D for WisBlock Modules. The WisBlock Core and the Wisblock Power module are attached on the top side and the WisBlock Modules are attached to the bottom side of the RAK19009 WisBlock Base board. Slot C holds modules up to 23&nbsp;mm in size, while Slot D supports 10&nbsp;mm WisBlock Modules. Also, there are two **2.54&nbsp;mm pitch headers** for extension interface with **BOOT**, **I2C**, and **UART** pins.

WisBlock Modules are connected to the RAK19009 WisBlock Base board via **high-speed board to board connectors**. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

Using **RAK19009** as your WisBlock Base board, you can make your project compact, which is ideal in small enclosures. You can also use a [RAK19005 WisBlock Sensor Extension Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to position WisBlock Modules apart from the WisBlock Base board or in any part of your case.

### Applications

* Wireless Sensor Network
* Environmental monitoring
* Wireless data transmission
* Data acquisition in the industrial environment
* Location and tracking of personnel or moving objects

### Main Features

* Flexible building block design, which enables modular function realization and expansion
* High-speed interconnection connectors in the WisBlock Base board to ensure the signal integrity
* Supports multiple types of low-power MCUs
* Supports multiple types of sensors - a single board can support a combination of two different types of sensors
* Fulfills Industrial level design
* Compact size: 30 x 37&nbsp;mm

## Specifications

### Overview

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/rak19009-overview.png"
  width="60%"
  caption="RAK19009 WisBlock Mini Base Top (Left) and Bottom (Right) View"
/>

#### Block Diagram

The block diagram in **Figure 2** shows the internal architecture and external interfaces of the RAK19009 board.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/block-diagram.svg"
  width="60%"
  caption="RAK19009 Mini Base block diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK19009 WisBlock Mini Base.

#### Interfaces

RAK19009 WisBlock Mini Base provides the following interfaces, headers, a button, and WisConnectors:

* 1 WisBlock Core module
* 1 Wisblock Power module
* 2 WisBlock Modules compatible with Slot C-D
* 2 Headers with BOOT, I2C, and UART pins accessible with solder contacts

**Figure 3** and **Figure 4** show the location of RAK19009 main components.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/rak19009-interface-1.svg"
  width="70%"
  caption="RAK19009 Top View Components"
/>

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/rak19009-interface-2.svg"
  width="70%"
  caption="RAK19009 Bottom View Components"
/>

##### J3 and J4 Headers

On the WisBlock Mini Base board, there are two 2.54&nbsp;mm pitch headers for the IO extension. BOOT, I2C, and UART pins from the WisBlock Core module are also connected to these headers.

###### J3 Header Pinout 

| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | BOOT         | MCU Boot pin    |
| 2       | GND          | Ground pin      |
| 3       | TX0          | UART0 Tx pin    |
| 4       | RX0          | UART0 Rx pin    |

###### J4 Header Pinout

| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | VDD          | 3.3&nbsp;V      |
| 2       | GND          | Ground pin      |
| 3       | SCL          | I2C1 Clock      |
| 4       | SDA          | I2C1 Data       |


:::tip 📝 NOTE BOOT pin 
BOOT pin is used on startup configuration or sequence of the WisBlock Core connected to it. It is commonly used for uploading the bootloader and/or application firmware. The requirements of the state of the BOOT pin depend on the specific model of the WisBlock Core used.
:::

#### Pin Definition

##### Connector for WisBlock Core

The **WisBlock Core module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisBlock Core module connector"
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
|       21       |                AIN0                |       22       |                AIN1                |
|       23       |               BOOT0                |       24       |                IO7                 |
|       25       |               SPI_CS               |       26       |              SPI_CLK               |
|       27       |              SPI_MISO              |       28       |              SPI_MOSI              |
|       29       |                IO1                 |       30       |                IO2                 |
|       31       |                IO3                 |       32       |                IO4                 |
|       33       |                TXD1                |       34       |                RXD1                |
|       35       |              I2C2_SDA              |       36       |              I2C2_SCL              |
|       37       |                IO5                 |       38       |                IO6                 |
|       39       |                GND                 |       40       |                GND                 |

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
|       10       |     SW1      |   I/O    |                                    Not connected                                     |
|       11       |     TXD0     |   I/O    |                                 MCU UART0 TX signal                                  |
|       12       |     RXD0     |   I/O    |                                 MCU UART0 RX signal                                  |
|       13       |    RESET     |    I     |                     Connected to the reset switch, for MCU reset                     |
|       14       |     LED1     |   I/O    |                         LED for battery charging indication                          |
|       15       |     LED2     |   I/O    |                                 LED for custom usage                                 |
|       16       |     IO8      |   I/O    |                                    Not connected                                     |
|       17       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       18       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       19       |   I2C1_SDA   |   I/O    |                           The first set of I2C data signal                           |
|       20       |   I2C1_SCL   |   I/O    |                          The first set of I2C clock signals                          |
|       21       |     AIN0     |    A     |                                 Analog input for ADC                                 |
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


##### Connector for WisBlock Power

The **WisBlock Power module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisBlock Power module connector"
/>

The table below shows the pinout of the 40-pin Power module connector:


| **Pin Number** | **Function Name of WisBlock Base** | **Pin Number** | **Function Name of WisBlock Base** |
| :------------: | :--------------------------------: | :------------: | :--------------------------------: |
|       1        |                VBAT                |       2        |                VBAT                |
|       3        |                GND                 |       4        |                GND                 |
|       5        |                3V3                 |       6        |                3V3                 |
|       7        |                USB+                |       8        |                USB–                |
|       9        |                VBUS                |       10       |                VBUS                |
|       11       |                 NC                 |       12       |                 NC                 |
|       13       |               RESET                |       14       |                LED1                |
|       15       |                LED2                |       16       |                 NC                 |
|       17       |                3V3                 |       18       |                3V3                 |
|       19       |              I2C1_SDA              |       20       |              I2C1_SCL              |
|       21       |                AIN0                |       22       |                AIN1                |
|       23       |                 NC                 |       24       |                 NC                 |
|       25       |               SPI_CS               |       26       |              SPI_CLK               |
|       27       |              SPI_MISO              |       28       |              SPI_MOSI              |
|       29       |                 NC                 |       30       |                 NC                 |
|       31       |                 NC                 |       32       |                 NC                 |
|       33       |                 NC                 |       34       |                 NC                 |
|       35       |              I2C2_SDA              |       36       |              I2C2_SCL              |
|       37       |                IO5                 |       38       |                IO6                 |
|       39       |                GND                 |       40       |                GND                 |

As for the following table, it shows the definition of each pin of the WisBlock Power connector:

| **Pin Number** | **Pin Name** | **Type** |               **Description**                |
| :------------: | :----------: | :------: | :------------------------------------------: |
|       1        |     VBAT     |    S     |          Power supply from battery           |
|       2        |     VBAT     |    S     |          Power supply from battery           |
|       3        |     GND      |    S     |                    Ground                    |
|       4        |     GND      |    S     |                    Ground                    |
|       5        |     3V3      |    S     |           3.3&nbsp;V power supply            |
|       6        |     3V3      |    S     |           3.3&nbsp;V power supply            |
|       7        |     USB+     |   I/O    |                    USB D+                    |
|       8        |     USB–     |   I/O    |                    USB D–                    |
|       9        |     VBUS     |    S     |                   USB VBUS                   |
|       10       |     VBUS     |    S     |                   USB VBUS                   |
|       11       |      NC      |    NC    |                Not connected                 |
|       12       |      NC      |    NC    |                Not connected                 |
|       13       |    RESET     |    I     | Connected to the reset switch, for MCU reset |
|       14       |     LED1     |   I/O    |     LED for battery charging indication      |
|       15       |     LED2     |   I/O    |             LED for custom usage             |
|       16       |      NC      |    NC    |                Not connected                 |
|       17       |     3V3      |    S     |           3.3&nbsp;V power supply            |
|       18       |     3V3      |    S     |           3.3&nbsp;V power supply            |
|       19       |   I2C1_SDA   |   I/O    |       The first set of I2C data signal       |
|       20       |   I2C1_SCL   |   I/O    |      The first set of I2C clock signal       |
|       21       |     AIN0     |    A     |             Analog input for ADC             |
|       22       |     AIN1     |    A     |             Analog input for ADC             |
|       23       |      NC      |    NC    |                Not connected                 |
|       24       |      NC      |    NC    |                Not connected                 |
|       25       |    SPI_CS    |   I/O    |            SPI chip select signal            |
|       26       |   SPI_CLK    |   I/O    |               SPI clock signal               |
|       27       |   SPI_MISO   |   I/O    |               SPI MISO signal                |
|       28       |   SPI_MOSI   |   I/O    |               SPI MOSI signal                |
|       29       |      NC      |    NC    |                Not connected                 |
|       30       |      NC      |    NC    |                Not connected                 |
|       31       |      NC      |    NC    |                Not connected                 |
|       32       |      NC      |    NC    |                Not connected                 |
|       33       |      NC      |    NC    |                Not connected                 |
|       34       |      NC      |    NC    |                Not connected                 |
|       35       |   I2C2_SDA   |   I/O    |      The second set of I2C data signal       |
|       36       |   I2C2_SCL   |   I/O    |      The second set of I2C clock signal      |
|       37       |     IO5      |   I/O    |              General purpose IO              |
|       38       |     IO6      |   I/O    |              General purpose IO              |
|       39       |     GND      |    S     |                    Ground                    |
|       40       |     GND      |    S     |                    Ground                    |


##### Connectors for WisBlock Sensor

The WisBlock sensor module connector is a **24-pin board-to-board connector**.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/13.wissensor-module-connector.png"
  width="40%"
  caption="WisBlock Sensor module connector"
/>

:::tip 📝 NOTE
There are two connectors reserved for the sensor modules on the RAK19009. The pinout definition of the WisBlock modules with a 24-pin connector on WisBlock Mini Base varies according to its connector.
:::

<br>

| **Connector C** | **Connector D** | **Pin Number** | **Pin Number** | **Connector C** | **Connector D** |
| :-------------: | :-------------: | :------------: | :------------: | :-------------: | :-------------: |
|      TXD1       |      TXD1       |       1        |       2        |       GND       |       GND       |
|     SPI_CS      |     SPI_CS      |       3        |       4        |     SPI_CLK     |     SPI_CLK     |
|    SPI_MISO     |    SPI_MISO     |       5        |       6        |    SPI_MOSI     |    SPI_MOSI     |
|    I2C1_SCL     |    I2C1_SCL     |       7        |       8        |    I2C1_SDA     |    I2C1_SDA     |
|       VDD       |       VDD       |       9        |       10       |       IO4       |       IO6       |
|      3V3_S      |      3V3_S      |       11       |       12       |       IO3       |       IO5       |
|       NC        |       NC        |       13       |       14       |      3V3_S      |      3V3_S      |
|       NC        |       NC        |       15       |       16       |       VDD       |       VDD       |
|       NC        |       NC        |       17       |       18       |       NC        |       NC        |
|       NC        |       NC        |       19       |       20       |       NC        |       NC        |
|       NC        |       NC        |       21       |       22       |       NC        |       NC        |
|       GND       |       GND       |       23       |       24       |      RXD1       |      RXD1       |

<br>

As for the following table, it shows the pin name and description of each pin in the WisBlock Sensor module connector.

| **Pin Number** | **Connector C** | **Connector D** | **Type** |                                       **Description**                                       |
| :------------: | :-------------: | :-------------: | :------: | :-----------------------------------------------------------------------------------------: |
|       1        |      TXD1       |      TXD1       |   I/O    |                                       UART TX signal                                        |
|       2        |       GND       |       GND       |    S     |                                           Ground                                            |
|       3        |     SPI_CS      |     SPI_CS      |   I/O    |                                   SPI chip select signal                                    |
|       4        |     SPI_CLK     |     SPI_CLK     |   I/O    |                                      SPI clock signal                                       |
|       5        |    SPI_MISO     |    SPI_MISO     |   I/O    |                                       SPI MISO signal                                       |
|       6        |    SPI_MOSI     |    SPI_MOSI     |   I/O    |                                       SPI MOSI signal                                       |
|       7        |    I2C1_SCL     |    I2C1_SCL     |   I/O    |                                      I2C clock signal                                       |
|       8        |    I2C1_SDA     |    I2C1_SDA     |   I/O    |                                       I2C data signal                                       |
|       9        |       VDD       |       VDD       |    S     |    Generated by CPU module. Used to power sensor board if MCU IO level is not 3.3&nbsp;V    |
|       10       |       IO4       |       IO6       |   I/O    | General purpose IO pin. When 3V3_S is used, this pin cannot be used as an interrupt input.  |
|       11       |      3V3_S      |      3V3_S      |    S     | 3.3&nbsp;V power supply. This power pin is controlled by IO2 from the WisBlock Core module. |
|       12       |       IO3       |       IO5       |   I/O    | General purpose IO pin. When 3V3_S is used, this pin cannot be used as an interrupt input.  |
|       13       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       14       |      3V3_S      |      3V3_S      |    S     | 3.3&nbsp;V power supply. This power pin is controlled by IO2 from the WisBlock Core module. |
|       15       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       16       |       VDD       |       VDD       |    S     | Generated by CPU module. Used to power sensor board if the MCU IO level is not 3.3&nbsp;V.  |
|       17       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       18       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       19       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       20       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       21       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       22       |       NC        |       NC        |    NC    |                                        Not connected                                        |
|       23       |       GND       |       GND       |    S     |                                           Ground                                            |
|       24       |      RXD1       |      RXD1       |   I/O    |                                       UART RX signal                                        |


#### Electrical Characteristics

##### Absolute Maximum Ratings

The **Absolute Maximum Ratings** of the device are shown in the table below. The stress ratings are the functional operation of the device. 

:::warning ⚠️WARNING
1. If the stress rating goes above what is listed, it may cause permanent damage to the device.
2. Under the listed conditions is not advised.
3. Exposure to maximum rating conditions may affect the device reliability.
:::

| **Ratings**         | Maximum Value   | Unit |
| ------------------- | --------------- | ---- |
| IOs of WisConnector | –0.3 to VDD+0.3 | V    |
| ESD                 | 2000            | V    |

:::tip 📝 NOTE
The RAK19009, like any electronic equipment, is sensitive to **electrostatic discharge (ESD)**. Improper handling can cause permanent damage to the module.
:::

##### Current Consumption

The RAK19009 is designed for **low-power IoT products**. It has no power interface, so it must be used with a WisBlock Power module. When there is no module on RAK19009, the **leakage current is lower than 2&nbsp;µA**. With WisBlock Core and WisBlock sensor on it, the sleep current is **lower than 10&nbsp;µA**. When a LoRa module is transmitting, the current may reach **130&nbsp;mA**.

| **Conditions**                                                      | **Current** | **Unit** |
| ------------------------------------------------------------------- | ----------- | -------- |
| Leakage current, without any module on RAK19009                     | 2           | µA       |
| Idle current, with WisBlock Core and WisBlock Modules in sleep mode | 10          | µA       |
| Working current, with LoRa module transmitting                      | 130         | µA       |
| Maximum output current                                              | 750         | mA       |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 8** shows the detailed mechanical dimensions of RAK19009.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/rak19009-dimension.png"
  width="100%"
  caption="RAK19009 mechanical dimensions"
/>

**Figure 9** show the mounting holes location and diameter of the RAK19009 Board.


<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/pwb-rak19009.jpg"
  width="100%"
  caption="RAK19009 mounting holes location and diameter"
/>


##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK5005-O:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational temperature range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended temperature range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage temperature range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

The component schematics diagram of the RAK19009 is shown in **Figure 11**.

<rk-img
  src="/assets/images/wisblock/rak19009/datasheet/rak19009-schematic.png"
  width="100%"
  caption="RAK19009 Schematic Diagram"
/>