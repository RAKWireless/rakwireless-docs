---
tags:
  - datasheet
  - wislink
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2245/Certification-Report/RAK2245_CE_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2245/Certification-Report/RAK2245_FCC_Certificate.zip]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK2245/Certification-Report/ROHS-ATL202012091808R01-Report.pdf]
---



# RAK2245 WisLink-LoRa Stamp Edition Datasheet

<!---
<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/datasheet/overview/r8b1kuz7nsyovmac80kq.png"
  width="60%"
  caption="RAK2245 WisLink-LoRa Stamp Edition"
/>
-->

## Overview

### Description

The **RAK2245 WisLink-LoRa Stamp Edition** is a complete and cost efficient gateway solution base on Semtech SX1301 fully utilizing the LoRa System. This LPWAN Concentrator module supports eight channels and is available for all LoRaWAN international standard bands.

The Stamp form factor feature enables easy integration into the system's main board, providing LoRaWAN functionality.This ultra compact module measures just 60mm x 30mm x 14.9mm, believed to be the world’s smallest gateway module which has a built-in GPS chip. It comes with a mounted heat-sink that improves the thermal heat dissipation and overall performance of the device.

Overall, this gateway module is the most economical way to create different solutions like smart grid, intelligent farm and other IoT applications. It is also ideal for manufacturing small series that can expand into more applications.

### Features

- Compatible with Stamp Edition specifications with mounted heat-sink.
- SX1301 base band processor, emulates 49 x LoRa demodulators 10 parallel demodulation paths, support 8 uplinks channel, 1 downlink channel.
- 2 x SX125X TX/RX front-ends high/ low frequency.
- Supports 5 V power supply, integrated level conversion circuit.
- TX power up to 27dBm, RX sensitivity down to - 139dBm@SF12, BW 125KHz.
- Supports the LoRaWAN 1.0.2 protocol.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).
- Supports SPI interface.
- Integrated the Ublox MAX-7Q GPS Module.

## Specifications

### Overview

The overview shows the top and back view of the RAK2245 Stamp Edition board. It also presents the block diagram that discusses how the board works. 

#### Board Overview

The **RAK2245 WisLink-LoRa Stamp Edition**, as shown in figure 1 below, has outer dimensions of **30.00 x 60.00 x 14.90 mm** (nominal value) which includes the 9.50 mm heat sink.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/datasheet/board-overview/roohsofgitzlzhbea2vz.jpg"
  width="60%"
  caption="RAK2245 WisLink-LoRa Stamp Edition Board Dimension"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/datasheet/interfaces/block-diagram.png"
  width="100%"
  caption="RAK2245 WisLink-LoRa Stamp Edition Block Diagram"
/>

### Hardware

The hardware is categorized into five parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board in terms of electrical and environmental. 

#### Interfaces

The SX1301 digital baseband chip contains 10 programmable reception paths. These
paths have different levels of programmability and has a variety of cases. It is
important to understand the differences between those demodulation paths to make the
best possible use from the system.

##### Power Supply

RAK2245 WisLink-LoRa Stamp Edition is powered through 5V. It integrates the IOREF for
Level Translator, which can communicate with 3.3V, 1.8V and other different voltage
interfaces.

##### SPI Interface

The pin connector provides an SPI connection which allows direct access to the Sx1301 SPI interface. This gives the target system the possibility to use existing SPI interfaces to communicate with the module.

::: tip 📝 NOTE
Please reset SX1301 via PIN A13 after turning on your RAK2245 WisLink-LoRa Stamp Edition
:::

##### UART and I²C

UART and I²C connections are also included on the pin connector. These connections allow direct access to the GPS module. The 1PPS is connected internally to SX1301.

##### Digital IOs

There are two digital IO PINs, which give the user an interface to reset the GPS module or set it into standby mode.

##### LEDs

3 x Green LED for indicating the status of PWR, TX, RX.

##### Antenna RF Interface

The modules have two RF interfaces for LoRa and GPS antennas over the standard UFL connectors (Hirose U. FL-R-SMT). It has a characteristic impedance of 50 Ω and supports both Tx and Rx via RF ports, providing the antenna interface.

#### Pin Definition

The pinout diagram for the RAK2245 WisLink-LoRa Stamp Edition is shown by the figure below.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/datasheet/pin-definition/fahimiuydovhvpxrmcl9.jpg"
  width="50%"
  caption="Pinout Diagram of RAK2245 WisLink-LoRa Stamp Edition"
/>

The pin connector of RAK2245 WisLink-LoRa Stamp Edition is located at the bottom side. Refer to the table below for the description and numbering of each pins.

| **Pin** | **Name**    | **Type** | **Description**                                                                                                   |
| ------- | ----------- | -------- | ----------------------------------------------------------------------------------------------------------------- |
| A1      | GND         | GND      | GND                                                                                                               |
| A2      | GND         | GND      | GND                                                                                                               |
| A3      | +5V         | POWER    | +5V Supply Voltage                                                                                                |
| A4      | IOREF       | POWER    | Supply Voltage for Level Translator                                                                               |
| A5      | RESET_GPS   | Input    | GPS Module reset PIN                                                                                              |
| A6      | STANDBY_GPS | Input    | GPS Module standby PIN                                                                                            |
| A7      | UART_TXD    | UART     | It should be connected to Main Board's UART_RXD. This pin is connected to GPS Module's UART_TXD internally.       |
| A8      | SPI_MOSI    | SPI      | It should be connected to Main Board's SPI_MOSI. And this pin has been connected to SX1301's SPI_MOSI internally. |
| A9      | SPI_CS      | SPI      | It should be connected to Main Board's SPI_CS. And this pin has been connected to SX1301's SPI_CS internally.     |
| A10     | SPI_MISO    | SPI      | It should be connected to Main Board's SPI_MISO. And this pin has been connected to SX1301's SPI_MISO internally. |
| A11     | SPI_CLK     | SPI      | It should be connected to Main Board's SPI_CLK. And this pin has been connected to SX1301's SPI_CLK internally.   |
| A12     | UART_RXD    | UART     | It should be connected to Main Board's UART_TXD. This pin is connected to GPS Module's UART_RXD internally.       |
| A13     | RST_BTN_N   | RST      | SX1301 RESET                                                                                                      |
| A14     | GND         | GND      | GND                                                                                                               |
| A15     | GND         | GND      | GND                                                                                                               |
| B1      | GND         | GND      | GND                                                                                                               |
| B2      | GND         | GND      | GND                                                                                                               |
| B3      | SDA_GPS     | I2C      | GPS Module I2C SDA                                                                                                |
| B4      | SCL_GPS     | I2C      | GPS Module I2C SCL                                                                                                |
| B5      | GND         | GND      | GND                                                                                                               |
| G1      | GND         | GND      | GND                                                                                                               |
| G2      | GND         | GND      | GND                                                                                                               |
| G3      | GND         | GND      | GND                                                                                                               |
| G4      | GND         | GND      | GND                                                                                                               |
| G5      | GND         | GND      | GND                                                                                                               |
| G6      | GND         | GND      | GND                                                                                                               |
| G7      | GND         | GND      | GND                                                                                                               |
| G8      | GND         | GND      | GND                                                                                                               |

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels shown in the table below. The frequency parameter is easy to configure as you go through the device configuration setup.

| **Region**    | **Frequency (MHz)** |
| ------------- | ------------------- |
| Europe        | EU433, EU868        |
| China         | CN470               |
| North America | US915               |
| Asia          | AS923, AS920        |
| Australia     | AU915               |
| Korea         | KR920               |
| India         | IN865               |

##### Transmitter RF

The RAK2245 WisLink-LoRa Stamp Edition has an excellent transmitter performance . It is highly recommended to use an optimized configuration for the power level
configuration, which is part of the HAL. This results in a mean RF output power
level and current consumption.

| **PA Control** | **DAC Control** | **MIX Control** | **DIG Gain** | **Normal RF Power Level (dBm)** |
| :------------: | --------------- | --------------- | ------------ | ------------------------------- |
|       0        | 3               | 8               | 0            | -6                              |
|       0        | 3               | 10              | 0            | -3                              |
|       0        | 3               | 14              | 0            | 0                               |
|       1        | 3               | 9               | 3            | 4                               |
|       1        | 3               | 8               | 0            | 8                               |
|       1        | 3               | 9               | 0            | 10                              |
|       1        | 3               | 11              | 0            | 12                              |
|       1        | 3               | 12              | 0            | 14                              |
|       1        | 3               | 13              | 0            | 16                              |
|       2        | 3               | 12              | 0            | 17                              |
|       2        | 3               | 13              | 0            | 19                              |
|       2        | 3               | 14              | 0            | 20                              |
|       3        | 3               | 10              | 0            | 0                               |
|       3        | 3               | 11              | 0            | 0                               |
|       3        | 3               | 12              | 0            | 25                              |
|       3        | 3               | 13              | 0            | 26                              |
|       3        | 3               | 14              | 0            | 27                              |

- At T=25°C, Vdd = 5V (Typical) if nothing else stated

| **Parameter**                         | **Condition**           | **Min**  | **Typical** | **Max**  |
| ------------------------------------- | ----------------------- | -------- | ----------- | -------- |
| Frequency Range                       |                         | 863 MHz  |             | 870 MHz  |
| Modulation Techniques                 | FSK/LoRa                |          |             |          |
| TX Frequency Variation vs Temperature | Power Level Setting: 20 | -3 Khz   |             | +3 Khz   |
| TX Power Variation vs. Temperature    |                         | -5 dBm   |             | +5 dBm   |
| TX Power Variation                    |                         | -1.5 dBm |             | +1.5 dBm |

##### Receiver RF

We recommended you to use optimized RSSI calibration values which is part of HAL v3.1. For both Radio 1 and 2, the RSSI-offset should be set to -169. The following table shows typical sensitivity level of RAK2245 WisLink-LoRa Stamp Edition -LPWAN Gateway Concentrator Module.

| **Signal Bandwidth (KHz)** | **Spreading Factor** | **Sensitivity (dBm)** |
| -------------------------- | -------------------- | --------------------- |
| 125                        | 12                   | -139                  |
| 125                        | 7                    | -126                  |
| 250                        | 12                   | -136                  |
| 250                        | 7                    | -123                  |
| 500                        | 12                   | -134                  |
| 500                        | 7                    | -120                  |

#### Electrical Characteristics

The following are the electrical characteristics of RAK2245 WisLink-LoRa Stamp Edition. [Contact us ](mailto:support@rakwireless.com)if you need other details for your project.

##### Absolute Maximum Rating

The values and range given below are all in accordance with Absolute Maximum Rating System (IEC 134).

| **Parameter**             | **Description**   | **Min** | **Typical** | **Max** |
| ------------------------- | ----------------- | ------- | ----------- | ------- |
| **Supply Voltage (VDD)**  | Input DC Voltage  | -0.3V   | 5.0V        | 5.5V    |
| **Operating Temperature** | Temperature Range | -40°C   |             | +85°C   |
| **RF Input Power**        |                   |         |             | -15dBm  |

::: warning ⚠️ WARNING
Stress exceeding of one or more of the limiting values listed under "Absolute Maximum Ratings" may cause permanent damage to the radio module.
:::

##### Maximum ESD

The table below shows the maximum ESD.

| **Parameter**                               | **Min** | **Typical** | **Max** | **Remarks**                                  |
| ------------------------------------------- | ------- | ----------- | ------- | -------------------------------------------- |
| **ESD sensitivity for all pins except ANT** |         |             | 1000V   | Human Body Model according to JESD22-A 114   |
| **ESD sensitivity for ANT**                 |         |             | 1000V   | Human Body Model according to JESD22-A 114   |
| **ESD immunity for ANT**                    |         |             | 4000V   | Contact Discharge according to IEC 61000-4-2 |
|                                             |         |             | 8000V   | Air Discharge according to IEC 61000-4-2     |

::: tip 📝 NOTE
The module is an Electrostatic Sensitive Device and require special precautions when
handling.
:::

##### Power Consumption

| **Mode**             | **Condition**              | **Min** | **Typical** | **Max** |
| -------------------- | -------------------------- | ------- | ----------- | ------- |
| **Active-Mode (TX)** | TX Enabled and RX Disabled |         | 336mA       |         |
| **Active-Mode (RX)** | TX Disabled and RX Enabled |         | 360mA       |         |

#### Environmental Requirements

##### Operating Conditions

The table below shows the operation temperature range.

| **Parameter**                    | **Min** | **Typical** | **Max** | **Remarks**                                                                         |
| -------------------------------- | ------- | ----------- | ------- | ----------------------------------------------------------------------------------- |
| **Normal Operating Temperature** | -40°C   | +25°C       | +85°C   | Normal operating temperature range (fully functional and meets 3GPP specifications) |


### Software

Download the latest firmware of RAK2245 Stamp in the table provided below.

#### Firmware

| **Model**     | **Source**                                                                                      |
| ------------- | ----------------------------------------------------------------------------------------------- |
| RAK2245 Stamp | [Download](https://downloads.rakwireless.com/LoRa/RAK2245/Firmware/RAK2245_Latest_Firmware.zip) |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
