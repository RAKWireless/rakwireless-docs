---
tags:
  - datasheet
  - wislink
  - RAK2245 Pi HAT
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Certification-Report/RAK2245_Pi_HAT_CE_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Certification-Report/RAK2245_Pi_HAT_FCC_Certificate.zip]
rak_desc: Provides comprehensive information about your RAK2245 Pi HAT WisLink LPWAN Concentrator to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lora/rak2245-pi-hat-edition/quickstart/1.product-overview/1.index/RAK2245-PiHat_home.png

---

# RAK2245 Pi HAT WisLink LPWAN Concentrator Datasheet

<!-- <rk-img
  src="/assets/images/wislink-lora/rak2245-pi-hat-edition/datasheet/rak2245-pihat-overview.png"
  width="50%"
  caption="RAK2245 Pi Hat"
/> -->

## Overview

### Description

**RAK2245 Pi HAT** is a module with Raspberry PI form factor. It can be plugged into
Raspberry PI such as Raspberry Pi 3 Model B+ as a complete RF front end of gateway. It supports eight channels and is available for LoRaWAN global frequency bands. The board is the smallest gateway concentrator which integrates the **Ublox MAX-7Q GPS Module** and heat sink.

The board can provide low data rate LoRa radio links at ultra-fast speed. It is powered by a **Semtech SX1301** transceiver concentrator that is capable of managing packets from many remotely dispersed end-points. Two Semtech SX125X are integrated for RF front end I/Q transceivers.

The RAK2245 Pi HAT is a complete and cost efficient gateway solution that can help you develop a full LoRa system. This is an economical way to create different solutions like smart grids, intelligent farms and other IoT applications. It is also ideal for manufacturing small series that can expand into more applications.

### Features

- Compatible with Raspberry Pi 3 Model B+ edition.
- Integrated Ublox MAX-7Q GPS Module and heat sink.
- SX1301 base band processor, emulates 49 x LoRa demodulators, 10 parallel
  demodulation paths, supports 8 uplink / 1 downlink channels.
- 2 units of SX125x Tx/Rx front-ends for high/ low frequency.
- Supports 5V power supply, integrated level conversion circuit.
- TX power up to 27dBm, RX sensitivity down to -139dBm@SF12, BW 125KHz.
- Supports latest LoRaWAN 1.0.2 protocol.
- Supports global license-free frequency band (EU433, CN470, EU868, US915, AS923, AU915, KR920 and IN865).
- Supports SPI, UART, I2C interface.

## Specifications

### Overview

The overview shows the top view of the RAK2245 Pi HAT board and its corresponding outer dimension. It also presents the block diagram that shows how the board works. 

#### Board Overview

**RAK2245 Pi HAT Module** with Raspberry Pi connector is shown above, it has outer dimensions of **56.00 x 65.00 x 22.00 mm** (±2mm).

<rk-img
  src="/assets/images/wislink-lora/rak2245-pi-hat-edition/datasheet/rak2245-dimensions.png"
  width="80%"
  caption="RAK2245 Pi HAT WisLink LPWAN Concentrator Dimensions"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wislink-lora/rak2245-pi-hat-edition/datasheet/rak2245-pihat-block-diagram.png"
  width="100%"
  caption="RAK2245 Pi Hat Block Diagram"
/>

### Hardware

The hardware is categorized into five parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board in terms of electrical and environmental. 

#### Interface

The SX1301 digital baseband chip contains **ten (10) programmable reception paths**. Those
paths have differentiated levels of programmability and allow different use cases. It is
important to understand the differences between those demodulation paths to make the
best possible use of the system.

##### Power Supply

RAK2245 Pi HAT module is powered through **5V or 3.3V power pins**.

##### SPI Interface

The pin connector provides an SPI connection which allows direct access to the
Sx1301 SPI interface. This gives the target system the possibility to use existing SPI interfaces to communicate with the module.

:::tip 📝 NOTE
Please reset SX1301 via PIN 11 after turning on RAK2245 Pi HAT.
:::

##### UART and I²C

UART and I2C connections are also included on the pin connector. These connections
allow direct access to the GPS module. The 1PPS is connected internally to SX1301.

##### Digital IOs

There are two digital IO PINs, which give the user an interface to reset the GPS module or set it into standby mode.

##### LEDs

There are **three (3) Green LED** that indicate the status of PWR, TX, RX.

##### Antenna RF Interface

The modules have two RF interfaces for LoRa and GPS antennas over the standard UFL connectors (Hirose U. FL-R-SMT). It has a characteristic impedance of 50OHM and supports both Tx and Rx via RF ports, providing the antenna interface.

#### Pin Definition

The pin connector of RAK2245 Pi HAT is located at the bottom side. Refer to the diagram and table below for the description and numbering of each pins.

<rk-img
  src="/assets/images/wislink-lora/rak2245-pi-hat-edition/datasheet/rak2245-pihat-pin-definition.jpg"
  width="80%"
  caption="Pinout Diagram"
/>

| Pin |    Name     |                                                  Description                                                  |
| :-: | :---------: | :-----------------------------------------------------------------------------------------------------------: |
|  1  |    3.3V     |                                              3.3V Supply Voltage                                              |
|  2  |     5V      |                                               5V Supply Voltage                                               |
|  3  |     SDA     |                                    I²C SDA (Connect to GPS Module I²C_SDA)                                    |
|  4  |     5V      |                                               5V Supply Voltage                                               |
|  5  |     SCL     |                                    I²C SCL (Connect to GPS Module I²C_SCL)                                    |
|  6  |     GND     |                                                    Ground                                                     |
|  7  |     NC      |                                                 No Connection                                                 |
|  8  |  UART_RXD   | It should be connected to RASPBERRY PI’s UART_TXD. This pin is connected to GPS Module’s UART_RXD internally. |
|  9  |     GND     |                                                    Ground                                                     |
| 10  |  UART_TXD   | It should be connected to RASPBERRY PI’s UART_RXD. This pin is connected to GPS Module’s UART_TXD internally  |
| 11  |    RESET    |                                     SX1301 RESET (GPIO17 of Raspberry Pi)                                     |
| 12  |     NC      |                                                 No Connection                                                 |
| 13  |     NC      |                                                 No Connection                                                 |
| 14  |     GND     |                                                    Ground                                                     |
| 15  |     NC      |                                                 No Connection                                                 |
| 16  |     NC      |                                                 No Connection                                                 |
| 17  |    3.3V     |                                              3.3V Supply Voltage                                              |
| 18  |     NC      |                                                 No Connection                                                 |
| 19  |  SPI_MOSI   |   It should be connected to RASPBERRY PI’s SPI_MOSI. This pin is connected to SX1301’s SPI_MOSI internally.   |
| 20  |     GND     |                                                    Ground                                                     |
| 21  |  SPI_MISO   |   It should be connected to RASPBERRY PI’s SPI_MISO. This pin is connected to SX1301’s SPI_MISO internally.   |
| 22  |     NC      |                                                 No Connection                                                 |
| 23  |   SPI_CLK   |   It should be connected to RASPBERRY PI’s SPI_SCLK. This pin is connected to SX1301’s SPI_CLK internally.    |
| 24  |   SPI_CS    |    It should be connected to RASPBERRY PI’s SPI_CE0. This pin is connected to SX1301’s SPI_CS internally.     |
| 25  |     GND     |                                                    Ground                                                     |
| 26  |     NC      |                                                 No Connection                                                 |
| 27  |    ID_SD    |                                           I²C_SDA for HAT ID EEPROM                                           |
| 28  |    ID_SC    |                                           I²C_SCL for HAT ID EEPROM                                           |
| 29  |     NC      |                                                 No Connection                                                 |
| 30  |     GND     |                                                    Ground                                                     |
| 31  |     NC      |                                                 No Connection                                                 |
| 32  |     NC      |                                                 No Connection                                                 |
| 33  |  RESET_GPS  |                                GPS Module Reset Pin (GPIO 13 of Raspberry Pi)                                 |
| 34  |     GND     |                                                    Ground                                                     |
| 35  | STANDBY_GPS |                                GPS Module standby PIN (GPIO19 of Raspberry Pi)                                |
| 36  |     NC      |                                                 No Connection                                                 |
| 37  |     NC      |                                                 No Connection                                                 |
| 38  |     NC      |                                                 No Connection                                                 |
| 39  |     GND     |                                                    Ground                                                     |
| 40  |     NC      |                                                 No Connection                                                 |

#### RF Characteristics

##### Operating Frequencies

The board supports all LoRaWAN frequency channels as below. Which is easy to configure while building the firmware from the source code.

|    Region     | Frequency (MHz) |
| :-----------: | :-------------: |
|    Europe     |  EU433, EU868   |
|     China     |      CN470      |
| North America |      US915      |
|     Asia      |      AS923      |
|   Australia   |      AU915      |
|     Korea     |      KR920      |
|    Indian     |      IN865      |

##### Transmitter RF

The RAK2245 Pi HAT has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

| PA Control | DAC Control | MIX Control | DIG Gain | Normal RF Power Level (dbm) |
| :--------: | :---------: | :---------: | :------: | :-------------------------: |
|     0      |      3      |      8      |    0     |             -6              |
|     0      |      3      |     10      |    0     |             -3              |
|     0      |      3      |     14      |    0     |              0              |
|     1      |      3      |      9      |    3     |              4              |
|     1      |      3      |      8      |    0     |              8              |
|     1      |      3      |      9      |    0     |             10              |
|     1      |      3      |     11      |    0     |             12              |
|     1      |      3      |     12      |    0     |             14              |
|     1      |      3      |     13      |    0     |             16              |
|     2      |      3      |     12      |    0     |             17              |
|     2      |      3      |     13      |    0     |             19              |
|     2      |      3      |     14      |    0     |             20              |
|     3      |      3      |     10      |    0     |              0              |
|     3      |      3      |     11      |    0     |              0              |
|     3      |      3      |     12      |    0     |             25              |
|     3      |      3      |     13      |    0     |             26              |
|     3      |      3      |     14      |    0     |             27              |

- At **T=25°C**, **Vdd = 5V** (Typical) if nothing else stated

|               Parameter               |        Condition        |   Min    | Typ. |   Max    |
| :-----------------------------------: | :---------------------: | :------: | :--: | :------: |
|            Frequency Range            |                         | 863 Mhz  |      | 870 Mhz  |
|         Modulation Techniques         |        FSK/LoRa        |          |      |          |
| TX Frequency Variation vs Temperature | Power Level Setting: 20 |  -3 Khz  |      |  +3 Khz  |
|   TX Power Variation vs Temperature   | Power Level Setting: 20 |  -5 dBm  |      |  +5 dbm  |
|          TX Power Variation           |                         | -1.5 dBm |      | +1.5 dBm |

##### Receiver RF

We recommended that you to use optimized RSSI calibration values which are part of HAL v3.1. For both Radio 1 and 2, the RSSI-offset should be set to -169. The following table gives the typical sensitivity level of RAK2245 Pi HAT.

| Signal Bandwidth (Khz) | Spreading Factor | Sensitivity (dBm) |
| :--------------------: | :--------------: | :---------------: |
|          125           |        12        |       -139        |
|          125           |        7         |       -126        |
|          250           |        12        |       -136        |
|          250           |        7         |       -123        |
|          500           |        12        |       -134        |
|          500           |        7         |       -120        |

#### Electrical Characteristics

The following are the electrical characteristics of RAK2245 Pi HAT. [Contact us](mailto:support@rakwireless.com) if you need other details for your project

##### Absolute Maximum Rating

The values and range given below are all in accordance with the Absolute Maximum Rating System (IEC 134)

| Parameter             | Description       | Min.  | Typ. | Max    |
| --------------------- | ----------------- | ----- | ---- | ------ |
| Supply Voltage (VDD)  | Input DC Voltage  | -0.3V | 5.0V | 5.5V   |
| Operating Temperature | Temperature Range | -40°C |      | +85°C  |
| RF Input Power        |                   |       |      | -15dBm |

:::tip 📝 NOTE
With RF output power level above +15 dBm a minimum distance to a transmitter should be 1m for avoiding too large input level.
:::

##### Maximum ESD

The table below lists the maximum ESD

| Parameter                                | Min | Typical | Max | Remarks                                      |
| ---------------------------------------- | --- | ------- | --- | -------------------------------------------- |
| ESD sensitivity for all pins except ANT1 |     |         | 1kV | Human Body Model according to JESD22-A114    |
| ESD sensitivity for ANT1                 |     |         | 1kV | Human Body Model according to JESD22-A114    |
| ESD immunity for ANT1                    |     |         | 4kV | Contact Discharge according to IEC 61000-4-2 |
|                                          |     |         | 8kV | Air Discharge according to IEC 61000-4-2     |

:::tip 📝 NOTE
The module is an Electrostatic Sensitive Device and requires special precautions when handling.
:::

##### Power Consumption

| Mode             | Condition                  | Min | Typical | Max |
| ---------------- | -------------------------- | --- | ------- | --- |
| Active-Mode (TX) | TX Enabled and RX Disabled |     | 336mA   |     |
| Active-Mode (RX) | TX Disabled and RX Enabled |     | 360mA   |     |

#### Environmental Requirements

##### Operating Conditions

The table below lists the operation temperature range.

| Parameter                    | Min.  | Typical | Max   | Remarks                                        |
| ---------------------------- | ----- | ------- | ----- | ---------------------------------------------- |
| Normal Operating Temperature | -40°C | +25°C   | +85°C | Fully functional and meets 3GPP specifications |

### Software

Download the latest firmware of RAK2245 Pi HAT in the table provided below.

#### Firmware

| Model          | Raspberry Pi Board | Firmware Version | Source                                                                                                                                           |
| -------------- | ------------------ | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| RAK2245 Pi Hat | Raspberry Pi 3B+ and 4   | V4.2.5R           | [Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245_Latest_Firmware.zip)    |


## Models / Bundles

### Ordering Information

| Part Number    | Package                                                            | Description                                          |
| -------------- | ------------------------------------------------------------------ | ---------------------------------------------------- |
| RAK2243-0X-R01 | 1x board, 1x LoRa Antenna and 1x GPS Active Antenna retail package | Supports 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |
| RAK2243-0X-C10 | 10-piece board and Antennas carton package                         | Supports 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />