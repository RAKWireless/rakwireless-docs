---
prev: ../Overview/
next: false
tags:
  - datasheet
  - wisblock
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631_CE_Cert.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631_FCC_Cert.zip] 
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK4630/Certification/RAK4630RAK4631rohs%20report.pdf] 

---

# RAK4631 WisBlock LPWAN Module Datasheet

<!--
<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/overview.jpg"
  width="30%"
  caption="RAK4631 WisBlock LPWAN Module"
/>
-->
## Overview

### Description

The RAK4631 WisBlock Core module is a RAK4630 stamp module with an expansion PCB and connectors compatible with the RAK5005-O baseboard. It allows an easy way to access to the pins of the RAK4630 module in order to simplify development and testing processes.

The module itself comprises a RAK4630 as its main component. The RAK4630 is a combination of a nRF52840 MCU and an SX1262 LoRa chip, it features ultra-low power consumption of 2.0&nbsp;uA during sleep mode, high LoRa output power up to 22&nbsp;dBm during transmission mode, and the BLE interface with output power up to 4&nbsp;dBm.

The module complies with LoRaWAN 1.0.2 protocols, it also supports LoRa point to point communication.

The RF communication characteristic of the module (Lora® + BLE) makes it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, personal area networks applications (health/fitness sensors, and monitors, etc.).


### Features

- TCXO crystal for LoRa chip
- I/O ports: UART/I2C/GPIO/USB
- SPI pins and optional NFC interface are accesible using WisBlock IO module
- Temperature range: -40&nbsp;°C to +85&nbsp;°C
- Supply voltage: 2.0 ~ 3.6&nbsp;V
- Low-Power Wireless Systems with 7.8&nbsp;KHz to 500&nbsp;KHz Bandwidth
- Ultra-Low Power Consumption 2.0&nbsp;uA in sleep mode
- LoRa PA Boost mode with 22&nbsp;dBm output power
- BLE5.0 (Tx power -20 to +4&nbsp;dBm in 4dB steps)
- Serial Wire Debug (SWD) interface
- Module size: 20 x 30&nbsp;mm

## Specifications

### Overview

The overview covers the RAK4631 board overview and the mounting mechanics of the board into the baseboard.

#### Board Overview

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/rak4631overview.png"
  width="80%"
  caption="RAK4631 Overview"
/>

<!---
Add these two images when the illustrations are correct already. 

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/topview.png"
  width="80%"
  caption="RAK4631 Top View"
/>

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/bottomview.png"
  width="80%"
  caption="RAK4631 Bottom View"
/>
--->

#### Mounting Sketch

The RAK4631 module is designed to work with the RAK5005-O base board. Figure 2 shows how a RAK4631 module should be mounted on top of the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/mounting-sketch.png"
  width="50%"
  caption="RAK4631 Mounting Sketch"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the module and its corresponding functions and diagrams. It also covers the interfaces, RF, electrical, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK4631 Module.

<!---
Add this image when the top and bottom view illustrations are correct already.

#### Interfaces

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/rak4631_overview.png"
  width="80%"
  caption="RAK4631 Interfaces"
/>
--->

#### RF Characteristics

The RAK4631 module supports the LoRaWAN bands shown in Table below. When buying a RAK4631 module, please pay attention to specify the correct core module RAK4630 H/L for your region. In which H stands for high-frequency regions and L for low-frequency regions.  

:::tip 📝 NOTE
Detailed information about the RAK4631 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/). 
:::

|     Region           |     Frequency(MHz)    |     Core Module    |
|----------------------|-----------------------|--------------------|
|     India           |     IN865             |     RAK4630(H)     |
|     Europe           |     EU868             |     RAK4630(H)     |
|     Europe           |     EU433             |     RAK4630(L)     |
|     North America    |     US915             |     RAK4630(H)     |
|     Canada           |     US915             |     RAK4630(H)     |
|     Australia        |     AU915             |     RAK4630(H)     |
|     Korea            |     KR920             |     RAK4630(H)     |
|     Asia             |     AS923             |     RAK4630(H)     |
|     China            |     CN470, CN779      |     RAK4630(L)     |

#### Electrical Characteristics

##### Power Consumption

| **Item** | **Power Consumption** | **Condition** | 
| ---- | ---- | ---- | 
| Tx mode LoRa @20&nbsp;dBm | 125&nbsp;mA | LoRa @ PA_BOOST&BT sleep | 
| Tx mode LoRa @17&nbsp;dBm | 92&nbsp;mA | LoRa @ PA_BOOST&BT sleep | 
| Tx mode BT@4&nbsp;dBm | 9&nbsp;mA | BT Tx mode & Lora sleep | 
| Rx mode LoRa @37.5&nbsp;Kbps | 17&nbsp;mA | LoRa @ Receive mode &BT sleep | 
| Rx mode BT@2&nbsp;Mbps | 11.5&nbsp;mA | BT Rx mode & Lora sleep | 
| Sleep mode | 2.0&nbsp;uA | LoRa&BT sleep | 


##### Absolute Maximum Ratings

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT_SX | LoRa chip supply voltage | -0.5 |  | 3.9 | V | 
| VBAT_SX_IO | LoRa chip supply for I/O pins | -0.5 |  | 3.9 | V | 
| VDD_NRF | MCU power supply | -0.3 |  | 3.9 | V | 
| VBUS | USB supply voltage | -0.3 |  | 5.8 | V | 
| VBAT_NRF | MCU high voltage power supply | -0.3 |  | 5.8 | V | 


##### Recommended Operating Conditions

| **Symbol** | **Description** | **Min.** | **Nom.** | **Max.** | **Unit** | 
| ---- | ---- | ---- | ---- | ---- | ---- | 
| VBAT_SX | SX1262 supply voltage | 2.0 | 3.3 | 3.7 | V | 
| VBAT_SX_IO | SX1262 supply for I/O pins | 2.0 | 3.3 | 3.7 | V | 
| VDD_NRF | NRF52840 power supply | 2.0 | 3.3 | 3.6 | V | 
| VBUS | VBUS USB supply voltage | 4.35 | 5.0 | 5.5 | V | 
| VBAT_NRF | NRF52840 high voltage power supply | 2.5 |  | 5.5 | V | 

##### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/rak4631.png"
  width="100%"
  caption="Mechanical Dimensions"
/>

- **WisConnector**: The breakout module allows the RAK4630 stamp module pinout to be transferred by the board-to-board WisConnector.

- **WisConnector Pin Order**: The pin order of the WisConnector is located in the bottom layer of the module.

- **Core Module**: The breakout module itself has a RAK4630 at its core, and it shows the core module pin and connection information. By default, the NFC function is disabled for conserve the low power characteristic.

- **SWD Interface**: The breakout module exposes a SWD debug interface. Additionally, the RST pin is used for resetting the core module RAK4630.

- **Power Up Automatic Reset**: The breakout module has a power-up automatic reset circuit, and the schematic shows the automatic reset mechanism. This module also can be reset though RAK5005-O reset pin.


#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/board-dimensions.jpg"
  width="35%"
  caption="Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/FxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

<!--

#### Schematic Diagram

The following section will describe the breakout module schematic. It includes WisConnector, core module, SWD interface, and power up automatic reset.

##### WisConnector 

The breakout module allows the RAK4630 stamp module’s pinout to be transferred by the board-to-board WisConnector, and Figure 5 shows the definition of this connector.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/wisconnector-pin.jpg"
  width="50%"
  caption="WisConnector pin defintion"
/>


| **Pin No.** | **Name** | 
| ---- | ---- | 
| 1 | VBAT_1 | 
| 2 | VBAT | 
| 3 | GND1 | 
| 4 | GND2 | 
| 5 | 3V3_1 | 
| 6 | 3V3_2 | 
| 7 | USB+ | 
| 8 | USB- | 
| 9 | VBUS | 
| 10 | SW1 | 
| 11 | TXD0 | 
| 12 | RXD0 | 
| 13 | RESET | 
| 14 | LED1 | 
| 15 | LED2 | 
| 16 | LED3 | 
| 17 | VDD_1 | 
| 18 | VDD_2 | 
| 19 | I2C1_SDA | 
| 20 | I2C1_SCL | 
| 21 | AIN0 | 
| 22 | AIN1 | 
| 23 | BOOT0 | 
| 24 | NC | 
| 25 | SPI_CS | 
| 26 | SPI_CLK | 
| 27 | SPI_MISO | 
| 28 | SPI_MOSI | 
| 29 | IO1 | 
| 30 | IO2 | 
| 31 | IO3 | 
| 32 | IO4 | 
| 33 | TXD1 | 
| 34 | RXD1 | 
| 35 | I2C2_SDA | 
| 36 | I2C2_SCL | 
| 37 | IO5 | 
| 38 | IO6 | 
| 39 | GND3 | 
| 40 | GND4 | 
| F1 | GND5 | 
| F2 | GND6 | 
| F3 | GND7 | 
| F4 | GND8 |  


##### WisConnector Pin Order

Figure 6 shows the pin order of the WisConnector, which is located in the bottom layer of the module.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/wisconnector-pin-order.png"
  width="25%"
  caption="WisConnector pin order"
/>

##### Core Module
The breakout module itself has a RAK4630 at its core. Figure 7 shows the core module pin and connection information. By default, the NFC function is disabled for conserve the low power characteristic.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/core-module-pin.jpg"
  width="75%"
  caption="Core module pin definition"
/>

| **Pin No.** | **Name** | 
| ---- | ---- | 
| 1 | VBUS | 
| 2 | USB- | 
| 3 | USB+ | 
| 4 | P0.13/I2C_SDA | 
| 5 | P0.14/I2C_SCL | 
| 6 | P0.15/UART2_RX | 
| 7 | P0.16/UART2_TX | 
| 8 | P0.17/UART2_DE | 
| 9 | P0.19/UART1_RX | 
| 10 | P0.20/UART1_TX | 
| 11 | P0.21/UART1_DE | 
| 12 | P0.10/NFC2 | 
| 13 | P0.09/NFC1 | 
| 14 | GND | 
| 15 | RF_BT | 
| 16 | GND | 
| 17 | NRF_RESET | 
| 18 | SWDCLK | 
| 19 | SWDIO | 
| 20 | VBAT_SX | 
| 21 | VBAT_IO_SX | 
| 22 | GND | 
| 23 | P0.24/I2C_SDA_2 | 
| 24 | P0.25/I2C_SCL_2 | 
| 25 | P1.01/SW1 | 
| 26 | P1.02/SW2 | 
| 27 | P1.03/LED1 | 
| 28 | P1.04/LED2 | 
| 29 | P0.03/QSPI_CLK | 
| 30 | P0.02/QSPI_DIO3 | 
| 31 | P0.28/QSPI_DIO2 | 
| 32 | P0.29/QSPI_DIO1 | 
| 33 | P0.30/QSPI_DIO0 | 
| 34 | P0.26/QSPI_CS | 
| 35 | GND | 
| 36 | GND | 
| 37 | RF_LoRa | 
| 38 | GND | 
| 39 | P0.31/AIN7 | 
| 40 | P0.05/AIN3 | 
| 41 | P0.04/AIN2 | 
| 42 | GND | 
| 43 | VDD_NRF |  
| 44 | VBAT_NRF | 


##### SWD Interface

The breakout module exposes a SWD debug interface, and Figure 8 shows the connection information. Additionally, the RST pin is used for resetting the core module RAK4630.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/swd-interface.jpg"
  width="35%"
  caption="SWD interface"
/>

##### Power up automatic reset

The breakout module has a power-up automatic reset circuit, and Figure 9 shows the automatic reset mechanism. This module also can be reset though RAK5005-O reset pin.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/power-automatic-reset.jpg"
  width="15%"
  caption="Power up automatic reset"
/>


 ##### Flash

The RAK4630 module comprises a flash memory controlled by the SPI interface. The memory size is 8 MB
<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/flash.jpg"
  width="50%"
  caption="Flash Memory"
/> -->

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

