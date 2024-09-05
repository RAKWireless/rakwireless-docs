---
rak_desc: Provides comprehensive information about your RAK19003 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak19003/RAK19003.png
tags:
  - datasheet
  - wisblock
  - RAK19003
prev: ../Quickstart/
next: false

---

# RAK19003 WisBlock Mini Base Board Datasheet

## WisBlock Mini Base Overview

RAK19003 WisBlock Mini Base module is the new main board that allows you to attach WisBlock modules through the standardized expansion connectors. In addition, the WisBlock Mini Base module also comprises a Type-C USB connector, indicator LEDs, button, and sensor connectors.

If you can't find a module that fits your IoT requirements, use the standard connectors of WisBlock to develop your own specific function module. WisBlock supports open-source hardware architecture and you can find tutorials showing how to create your own [Awesome WisBlock](https://github.com/RAKWireless/Awesome-WisBlock) module.

### Applications

* Wireless Sensor Network
* Environmental monitoring
* Wireless data transmission
* Data acquisition in the industrial environment
* Location and tracking of personnel or moving objects

### Main Features

* Flexible building block design, which enables modular function realization and expansion
* High-speed interconnection connectors in the WisBlock Base board to ensure the signal integrity
* Supports multiple types of low power MCUs
* Supports multiple types of sensors. A single board can support a combination of two different types of sensors
* Low power battery power supply
* Supports lithium battery charging
* Supports solar charging
* Fulfills Industrial level design
* Compact size: 30 x 37&nbsp;mm

## Specifications

### Overview

**RAK19003** is a **WisBlock Base** board that connects **WisBlock Core** and **WisBlock Modules**. It provides the power supply and interconnection to the modules attached to it. It has one slot reserved for the WisBlock Core module and two Slot C-D for WisBlock Modules. The WisBlock Core is attached on the top side, and the WisBlock Modules are attached to the bottom side of the RAK19003 WisBlock Base board. Slot D holds modules up to 23&nbsp;mm in size, while Slot C supports 10&nbsp;mm WisBlock Modules. Also, there are two **2.54&nbsp;mm pitch headers** for extension interface with **BOOT**, **I2C**, and **UART** pins.

For convenience, there is a Type-C USB connector that is connected directly to WisBlock Core MCU’s USB port (if supported) or to a USB-UART converter depending on the WisBlock Core. It can be used for uploading firmware or serial communication. The USB-C connector is also used as a battery charging port.

WisBlock Modules are connected to the RAK19003 WisBlock Base board via **high-speed board to board connectors**. They provide secure and reliable interconnection to ensure the signal integrity of each data bus. A set of screws are used for fixing the modules, which makes it reliable even in an environment with lots of vibrations.

Using **RAK19003** as your WisBlock Base board, you can make your project compact, which is ideal in small enclosures. You can also use a [RAK19005 WisBlock Sensor Extension Cable](https://store.rakwireless.com/products/fpc-extension-cable-for-slot-a-to-d-rak19005) to position WisBlock Modules apart from the WisBlock Base board or in any part of your case.

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/rak19003-overview.svg"
  width="75%"
  caption="RAK19003 WisBlock Mini Base Top (Left) and Bottom (Right) View"
/>

#### Block Diagram

The block diagram in **Figure 2** shows the internal architecture and external interfaces of the RAK19003 board.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/block-diagram.svg"
  width="60%"
  caption="RAK19003 Mini Base Block Diagram"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the electrical, mechanical, and environmental parameters that include the tabular data of the functionalities and standard values of the RAK19003 WisBlock Mini Base.

#### Interfaces

RAK19003 WisBlock Mini Base provides the following interfaces, headers, button, and WisConnectors:

* 1 WisBlock Core module
* 2 WisBlock Modules compatible with Slot C-D
* 1 Type-C USB port for programming and debugging
* 3.7&nbsp;V Rechargeable battery connector
* 5&nbsp;V Solar Panel connector
* 2 Headers with BOOT, I2C, and UART pins accessible with solder contacts

Additionally, it has two user-definable LEDs - one power supply/charging indicator LED and a reset button.

**Figure 3** and **Figure 4** show the location of RAK19003 main components.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/rak19003-interface-1.svg"
  width="65%"
  caption="RAK19003 Top View Components"
/>

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/wisconnector_c_d.png"
  width="50%"
  caption="RAK19003 Bottom View Components"
/>

##### Type-C USB port

The Type-C USB connector is compliant with the USB 2.0 specification. This USB interface directly communicates with the connected **WisBlock Core** module. It is also used as a charging input port for the battery. Here are some of the advantages of the Type-C USB connector:

* Smaller and reversible connector shape
* Port can be input or output
* Fast battery charging

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/usb-c-receptacle.png"
  width="60%"
  caption="USB Type-C receptacle pinout"
/>

##### J6 and J7 Headers

On the WisBlock Mini Base board, there are two 2.54&nbsp;mm pitch headers for the IO extension. BOOT, I2C, and UART pins from the WisBlock Core module are also connected to these headers.

###### J6 Header Pinout

| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | VDD          | 3.3&nbsp;V      |
| 2       | GND          | Ground pin      |
| 3       | SCL          | I2C1 Clock      |
| 4       | SDA          | I2C1 Data       |


###### J7 Header Pinout


| **Pin** | **Pin Name** | **Description** |
| ------- | ------------ | --------------- |
| 1       | RX1          | UART1 Rx pin    |
| 2       | TX1          | UART1 Tx pin    |
| 3       | GND          | Ground pin      |
| 4       | BOOT         | MCU Boot pin    |


:::tip 📝 NOTE BOOT pin
BOOT pin is used on startup configuration or sequence of the WisBlock Core connected to it. It is commonly used for uploading the bootloader and/or application firmware. The requirements of the state of the BOOT pin depend on the specific model of the WisBlock Core used.
:::

##### Battery Connector

**Figure 6** shows the battery connector V+(VBAT) and GND.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/battery-connector.svg"
  width="50%"
  caption="Battery Connector Pin Order"
/>

:::warning ⚠️ WARNING
The voltage of the battery **must not exceed 4.3&nbsp;V**.
:::

##### Solar Panel Connector

**Figure 7** shows the solar panel connector V+(Vin) and GND.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/solar-panel.svg"
  width="45%"
  caption="Solar Panel Connector V+ and GND"
/>


:::warning ⚠️ WARNING
The output voltage of the solar panel **must not exceed 5.5&nbsp;V**. Otherwise, it may cause permanent damage to the board.
:::

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - Connected to the MCU module, controlled by MCU defined by the user.
- 🔵 **Blue LED** - Connected to the MCU module, controlled by MCU defined by the user.

##### RESET Push Button

The Reset Push Button is connected to the MCU module. When pushed, it resets the MCU.

#### Pin Definition

##### Connector for WisBlock Core

The **WisCore module connector** is a 40-pin board-to-board connector. It is a high-speed and high-density connector, with an easy attaching mechanism.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/12.mcu-module-connector.png"
  width="45%"
  caption=" WisCore module connector"
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
|       15       |                LED2                |       16       |                LED3                |
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
|       16       |     LED3     |   I/O    |                                 LED for custom usage                                 |
|       17       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       18       |     VDD      |    S     | Generated by MCU module for power sensor board if the MCU IO level is not 3.3&nbsp;V |
|       19       |   I2C1_SDA   |   I/O    |                           The first set of I2C data signal                           |
|       20       |   I2C1_SCL   |   I/O    |                          The first set of I2C clock signal                           |
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

##### Connectors for WisBlock Sensor

The WisBlock sensor module connector is a **24-pin board-to-board connector**.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/13.wissensor-module-connector.png"
  width="40%"
  caption="WisSensor module connector"
/>

:::tip 📝 NOTE
There are two connectors reserved for the sensor modules on the RAK19003. The pinout definition of the WisBlock modules with 24-pin connector on WisBlock Mini Base varies according to its connector.
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

As for the following table, it shows the pin name and description of each pin in the WisSensor module connector.

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

| **Ratings**                             | Maximum Value   | Unit |
| --------------------------------------- | --------------- | ---- |
| Power Supply on the USB port (**VBUS**) | –0.3 to 5.5     | V    |
| Battery Voltage (**VBAT**)              | –0.3 to 4.3     | V    |
| Solar Panel Voltage (**CONN_S**)        | –0.3 to 5.5     | V    |
| IOs of WisConnector                     | –0.3 to VDD+0.3 | V    |
| ESD                                     | 2000            | V    |

:::tip 📝 NOTE
The RAK19003, as any electronic equipment, is sensitive to **electrostatic discharge (ESD)**. Improper handling can cause permanent damage to the module.
:::

##### Current Consumption

The RAK19003 is designed for **low-power IoT products**. Its power supply uses a high-efficiency low ground current regulator. When there is no module on RAK19003, the **leakage current is lower than 2&nbsp;µA**. With WisBlock Core and WisBlock sensor on it, the sleep current is **lower than 10&nbsp;µA**. When a LoRa module is transmitting, the current may reach **130&nbsp;mA**.

| **Conditions**                                                      | **Current** | **Unit** |
| ------------------------------------------------------------------- | ----------- | -------- |
| Leakage current, without any module on RAK19003                     | 2           | µA       |
| Idle current, with WisBlock Core and WisBlock Modules in sleep mode | 10          | µA       |
| Working current, with LoRa module transmitting                      | 130         | µA       |
| Maximum output current                                              | 750         | mA       |

##### Battery Connector

The RAK19003 WisBlock Mini Base Board can be powered by a battery, connected to the **P2 connector**. The nominal operating voltage of the battery should be within the range shown in the following table. The matching connector for the battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199)

| **Minimum** | **Typical** | **Maximum** | **Unit** |
| ----------- | ----------- | ----------- | -------- |
| 3.3         | 3.7         | 4.3         | V        |

The USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed its charging limits, as shown in the table below.

| **Parameter**    | **Value**        |
| ---------------- | ---------------- |
| Charging Voltage | 4.5 – 5.5&nbsp;V |
| Charging Current | 350&nbsp;mA      |

A suitable Li-Ion battery should have the following parameters as shown in the table below:

| **Parameter**     | **Value**            |
| ----------------- | -------------------- |
| Standard Voltage  | 3.7&nbsp;V           |
| Charging Voltage  | 4.2&nbsp;V           |
| Capacity          | As required          |
| Discharge current | At least 500&nbsp;mA |


:::tip 📝 NOTE
Don't use a non-rechargeable battery.
:::


##### Solar Panel Connector

A 5&nbsp;V Solar Panel can be connected to the board via the **P1 connector**. The solar panel can also be used to charge the Li-Ion battery. The matching connector for the solar panel wires is a [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287).


#### Mechanical Characteristics

##### Board Dimensions

:::tip 📝 NOTE
- You may also refer and download the [M1.2 Stand-off fastener/inserts datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/M1.2_Press-Fit_Standoff_Datasheet.zip).
:::

**Figure 10** shows the detailed mechanical dimensions of RAK19003.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/rak19003-dimension.png"
  width="100%"
  caption="RAK19003 Mechanical Dimensions"
/>


**Figure 11** and **Figure 12** show the mounting holes location and diameter of the RAK19003 Board.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/pwb-rak19003-1.png"
  width="100%"
  caption="RAK19003 Mounting Holes Location and Diameter"
/>


<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/pwb-rak19003-2.png"
  width="100%"
  caption="RAK19003 Mounting Holes Location and Diameter"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak5005-o/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements of RAK5005-O:

| **Parameter**                 | **Minimum** | **Typical** | **Maximum** |
| ----------------------------- | :---------: | :---------: | :---------: |
| Operational Temperature Range | –35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
| Extended Temperature Range    | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
| Storage Temperature Range     | –40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

#### Schematic Diagram

The component schematics diagram of the RAK19003 is shown in **Figure 14** and **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/image-20210726092320767.png"
  width="100%"
  caption="RAK19003 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wisblock/rak19003/datasheet/image-20210726092351570.png"
  width="100%"
  caption="RAK19003 Schematic Diagram (Connectors)"
/>