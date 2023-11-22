---
rak_desc: Provides comprehensive information about your RAK5146L WisLink LPWAN Concentrator to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lora/rak5148/RAK5148.png
prev: ../Overview/
next: false
tags:
  - datasheet
  - wislink
  - RAK5148
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK5148/Certification/RAK5148_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK5148/Certification/RAK5148_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK5148/Certification/RAK5148_ISED_Certification.pdf]
---

# RAK5148 WisLink LPWAN 2.4 GHz Concentrator Module Datasheet

## Overview

### Description

RAK5148 is a 2.4&nbsp;GHz LPWAN concentrator module with a mini-PCIe form factor based on Semtech SX1280, which enables easy integration into an existing router or other network equipment with LPWAN gateway capabilities. It can be used on any embedded platform offering a free mini-PCIe slot with an SPI/USB connection. Furthermore, a ZOE-M8Q GPS chip is integrated onboard.

### Features

- Designed based on a **mini-PCIe form factor**
- 3+1 SX1280 (3 for receive, 1 for transmit)
- 3.3&nbsp;V **Mini PCI-e**, compatible with **3G/LTE card** of mini-PCIe type
- Tx power up to 27&nbsp;dBm, Rx sensitivity down to -132&nbsp;dBm @ SF12, BW 203&nbsp;kHz
- Supports optional **SPI/USB** interfaces
- Fine Timestamp
- Built-in **ZOE-M8Q** GPS module (optional)

## Specifications

### Overview

The overview shows the top and back views of the RAK5148 board. It also presents the block diagram that discusses how the board works.

#### Board Overview

RAK5148 is a compact LPWAN Gateway Module suitable for integration in systems where mass and size constraints are essential. It is designed with the PCI Express Mini Card form factor in mind, so it can easily become a part of products that comply with the standard, which allows for cards with a thickness of at least 5.5&nbsp;mm.

The board has two UFL interfaces for the LoRa and GNSS antennas and a standard 52-pin connector (mPCIe).


<rk-img
  src="/assets/images/wislink-lora/rak5148/board-overview.png"
  width="65%"
  caption="RAK5148 Board Overview"
/>

<rk-img
  src="/assets/images/wislink-lora/rak5148/antennas.png"
  width="50%"
  caption="RAK5148 Antennas"
/>

#### Block Diagram

The RAK5148 Concentrator is equipped with four (4) SX1280 chips. Three of them work as 2.4&nbsp;GHz LoRa receivers (3 channels), and one works as a transmitter.


<rk-img
  src="/assets/images/wislink-lora/rak5148/block-diagram.png"
  width="80%"
  caption="RAK5148 Block Diagram"
/>


### Hardware

The hardware is categorized into seven parts. It discusses the interface, pinouts, and their corresponding functions and diagrams. It also covers the parameters and standard values of the board.


#### Interfaces

- **Power Supply** - The RAK5148 concentrator module must be supplied through the 3.3&nbsp;V<sub>aux</sub> pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1280 chip.
- **SPI Interface** - SPI interface mainly provides for the `Host_SCK`, `Host_MISO`, `Host_MOSI`, and `Host_CSN` pins of the system connector. The SPI interface gives access to the configuration register of the SX1280 via an MCU STM32F446RCT6. Only the slave side is implemented.
- **USB Interface** - The USB interface mainly provides for the `USB_D+` and` USB_D-` pins of the system connector. The USB interface gives access to the configuration register of the SX1280 via an MCU STM32F446RCT6. Only the slave side is implemented.
- **UART and I2C Interface** - RAK5148 integrates a ZOE-M8Q GPS module, which has a UART and I2C interface. The PINs on the golden finger provide a UART connection and an I2C connection, which allow direct access to the GPS module. The PPS signal is not only connected to STM32F446RCT6 internally but also connected to the golden finger which can be used by the host board.
- **GPS_PPS** - RAK5148 includes the `GPS_PPS` input for received packets time-stamped and fine-timestamped.
- **RESET** - RAK5148 USB and SPI cards' RESET is controlled by the MCU.
- **Antenna RF Interface** - The module has one RF interface over a standard UFL connector (Hirose U. FL-R-SMT) with a characteristic impedance of 50&nbsp;Ω. The RF port supports both Tx and Rx, providing the antenna interface.


#### Pin Definition

<rk-img
  src="/assets/images/wislink-lora/rak5148/pinouts.png"
  width="80%"
  caption="RAK5148 Pinouts"
/>

| Type  |  Description   |
| :---: | :------------: |
|  IO   | Bidirectional  |
|  DI   | Digital input  |
|  DO   | Digital output |
|  OC   | Open collector |
|  OD   |   Open drain   |
|  PI   |  Power input   |
|  PO   |  Power output  |
|  NC   | No connection  |


| Pin No. |    mPCie Pin Rev.2.0     | RAK5148 Pin | Type  |                 Description                 |                                               Remarks                                               |
| :-----: | :----------------------: | :---------: | :---: | :-----------------------------------------: | :-------------------------------------------------------------------------------------------------: |
|    1    |          WAKE#           |     NC      |       |                No connection                |                                                                                                     |
|    2    | 3.3&nbsp;V<sub>aux</sub> |     3V3     |  PI   |       3.3&nbsp;V<sub>DC</sub> supply        |                                                                                                     |
|    3    |          COEX1           |     NC      |       |                No connection                |                                                                                                     |
|    4    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|    5    |          COEX2           |     NC      |       |                No connection                |                                  Reserved for future applications                                   |
|    6    |        1.5&nbsp;V        |     NC      |       |                No connection                |                              Connect to the SX1280's GPIO(6) internaly                              |
|    7    |         CLKREQ#          |     NC      |       |                No connection                |                                  Reserved for future applications                                   |
|    8    |         UIM_PWR          |     NC      |       |                No connection                |                                                                                                     |
|    9    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   10    |         UIM_DATA         |     NC      |       |                No connection                |                                                                                                     |
|   11    |         REFCLK-          |     NC      |       |                No connection                |                                   Reserved for future application                                   |
|   12    |         UIM_CLK          |     NC      |       |                No connection                |                                                                                                     |
|   13    |         REFCLK+          | MCU_NRESET  |  DI   |       RESET signal for MCU of RAK5148       |                                             Active low                                              |
|   14    |        UIM_RESET         |     NC      |       |                No connection                |                                                                                                     |
|   15    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   16    |         UIM_VPP          |     NC      |       |                No connection                |                                                                                                     |
|   17    |         RESERVED         |     NC      |       |                No connection                |                                                                                                     |
|   18    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   19    |         RESERVED         |     PPS     |  DO   |              Time pulse output              |                                      Leave open if not in use                                       |
|   20    |        W_DISABLE#        |     NC      |       |                No connection                |                                                                                                     |
|   21    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   22    |          PERST#          |     NC      |       |                No connection                |                                                                                                     |
|   23    |          PERn0           |  RESET_GPS  |  DI   |       GSP module ZOE-M8Q reset input        |                                Active low, leave open if not in use                                 |
|   24    | 3.3&nbsp;V<sub>aux</sub> |     3v3     |  PI   |       3.3&nbsp;V<sub>DC</sub> supply        |                                                                                                     |
|   25    |          PERp0           | STANDBY_GPS |  DI   | GPS module ZOE-M8Q external interrupt input |                                Active low, leave open if not in use                                 |
|   26    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   27    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   28    |        1.5&nbsp;V        |     NC      |       |                No connection                |                                                                                                     |
|   29    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   30    |         SMB_CLK          |   I2C_SCL   |  IO   |                  HOST SCL                   | Connect to temperature sensor and GPS module ZOE-M8Q's SCL internally <br> Leave open if not in use |
|   31    |          PETn0           | PI_UART_TX  |  DI   |                HOST UART_TX                 |          Connect to GPS module ZOE-M8Q's UART_RX internally <br> Leave open if not in use           |
|   32    |         SMB_DATA         |   I2C_SDA   |  IO   |                  HOST SDA                   | Connect to temperature sensor and GPS module ZOE-M8Q's SDA internally <br> Leave open if not in use |
|   33    |          PETp0           | PI_UART_RX  |  DO   |                HOST UART_RX                 |          Connect to GPS module ZOE-M8Q's UART_TX internally <br> Leave open if not in use           |
|   34    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   35    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   36    |          USB_D-          |   USB_DM    |  IO   |          USB differential data (-)          |                             Require differential impedance of 90&nbsp;Ω                             |
|   37    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   38    |          USB_D+          |   USB_DP    |  IO   |          USB differential data (+)          |                             Require differential impedance of 90&nbsp;Ω                             |
|   39    | 3.3&nbsp;V<sub>aux</sub> |     3V3     |  PI   |       3.3&nbsp;V<sub>DC</sub>  supply       |                                                                                                     |
|   40    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   41    | 3.3&nbsp;V<sub>aux</sub> |     3V3     |  Pi   |       3.3&nbsp;V<sub>DC</sub> supply        |                                                                                                     |
|   42    |        LED_WWAN#         |     NC      |       |                No connection                |                                                                                                     |
|   43    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   44    |        LED_WLAN#         |     NC      |       |                No connection                |                                                                                                     |
|   45    |         RESERVED         |  HOST_SCK   |  IO   |                Host SPI SCK                 |                                                                                                     |
|   46    |        LED_WPAN#         |     NC      |       |                No connection                |                                                                                                     |
|   47    |         RESERVED         |  HOST_MISO  |  IO   |                Host SPI MISO                |                                                                                                     |
|   48    |        1.5&nbsp;V        |     NC      |       |                No connection                |                                                                                                     |
|   49    |         RESERVED         |  HOST_MOSI  |  IO   |                Host SPI MOSI                |                                                                                                     |
|   50    |           GND            |     GND     |       |                   Ground                    |                                                                                                     |
|   51    |         RESERVED         |  HOST_CSN   |  IO   |                Host SPI CSN                 |                                                                                                     |
|   52    | 3.3&nbsp;V<sub>aux</sub> |     3V3     |  PI   |       3.3&nbsp;V<sub>DC</sub>  supply       |                                                                                                     |


#### RF Characteristics

The following table gives the typical Tx Power and Sensitivity Level of the RAK5148 Concentrator Module.

|      Parameters      |             Typical              |                   Condition                    |
| :------------------: | :------------------------------: | :--------------------------------------------: |
|       Tx Power       |         Max: 27&nbsp;dBm         |                       -                        |
| Receiver Sensitivity | -132&nbsp;dBm <br> -110&nbsp;dBm | SF12 BW 203&nbsp;kHz <br> SF7 BW 1625&nbsp;kHz |


#### Electrical Requirements

:::warning ⚠️ WARNING
Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.
:::

The operating condition range defines those limits within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.


##### Absolute Maximum Rating

The limiting values given below are following the Absolute Maximum Rating System (IEC 134).

|          Symbol          |      Description      |                     Condition                     |     Min     |    Max     |
| :----------------------: | :-------------------: | :-----------------------------------------------: | :---------: | :--------: |
| 3.3&nbsp;V<sub>aux</sub> | Module supply voltage | Input DC voltage at 3.3&nbsp;V<sub>aux</sub> pins | -0.3&nbsp;V | 3.6&nbsp;V |
|           USB            |    USB D+/D- pins     |      Input DC voltage at USB interface pins       |             | 3.6&nbsp;V |
|        MCU_RESET         |  RAK5148 reset input  |        Input DC voltage at RESET input pin        | -0.3&nbsp;V | 3.6&nbsp;V |
|           SPI            |     SPI interface     |       Input DC voltage at SPI interface pin       | -0.3&nbsp;V | 3.6&nbsp;V |
|         GPS_PPS          |    GPS 1 PPS input    |       Input DC voltage at GPS_PPS input pin       | -0.3&nbsp;V | 3.6&nbsp;V |
|          HO_ANT          |  Antenna ruggedness   |    Output RF load mismatch ruggedness at ANT1     |             | 10:1 VSWR  |


:::warning ⚠️ WARNING
The product is not protected against overvoltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::


##### Maximum ESD

| Parameter |  Min  | Typical |     Max     |                  Remarks                   |
| :-------: | :---: | :-----: | :---------: | :----------------------------------------: |
|  ESD_HBM  |   -   |    -    | 1000&nbsp;V | Charged Device Model JESD22-C101 CLASS III |
|  ESD_CDM  |   -   |    -    | 1000&nbsp;V | Charged Device Model JESD22-C101 CLASS III |

:::tip 📝 NOTE
Although this module is designed to be as robust as possible, electrostatic discharge (ESD) can damage the module. This module must always be protected from ESD when handling or transporting. Static charges may easily produce potentials of several kilovolts on the human body or equipment, which can discharge without detection. Industry-standard ESD handling precautions should be used at all times.
:::

##### Power Consumption

|      Mode       |                            Condition                             |  Min  | Typical |     Max     |
| :-------------: | :--------------------------------------------------------------: | :---: | :-----: | :---------: |
| Active Mode(TX) | The power of the TX channel is 27&nbsp;dBm and 3.3&nbsp;V supply |   -   |    -    | 810&nbsp;mA |
| Active Mode(RX) |                    TX disabled and RX enabled                    |   -   |    -    | 179&nbsp;mA |

##### Power Supply Range

Input voltage at **3.3&nbsp;V<sub>aux</sub>** must be above the normal operating range minimum limit to switch on the module.

|          Symbol          |               Parameter               |   Min    |  Typical   |    Max     |
| :----------------------: | :-----------------------------------: | :------: | :--------: | :--------: |
| 3.3&nbsp;V<sub>aux</sub> | Module supply operating input voltage | 3&nbsp;V | 3.3&nbsp;V | 3.6&nbsp;V |

#### Mechanical Characteristics

The board is 30&nbsp;mm wide and 50.96&nbsp;mm tall. The dimensions of the module fall completely within the **PCI Express Mini Card Electromechanical Specification**, except for the card's thickness (11.5&nbsp;mm at its thickest including the heatsink).

<rk-img
  src="/assets/images/wislink-lora/rak5148/mechanical-dimension.png"
  width="70%"
  caption="RAK5148 Mechanical Dimension"
/>


#### Environmental Requirements

|          Parameter           |     Min     |   Typical   |     Max     |                                      Remarks                                       |
| :--------------------------: | :---------: | :---------: | :---------: | :--------------------------------------------------------------------------------: |
| Normal operating temperature | -40°&nbsp;C | +25°&nbsp;C | +85°&nbsp;C | Normal operating temperature range (fully functional and meet 3GPP specifications) |


:::tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°&nbsp;C. Operation beyond the operating conditions is not recommended, and extended exposure beyond them may affect device reliability.
:::

#### Schematic Diagram

RAK5148 Concentrator Module refers to the Semtech reference design for SX1280. **Figure 6** shows the minimum application schematic of the RAK5148. You should use at least 3.3&nbsp;V / 1&nbsp;A DC power and connect the USB interface to the main processor.


<rk-img
  src="/assets/images/wislink-lora/rak5148/schematic-diagram.png"
  width="100%"
  caption="RAK5148 Schematic Diagram"
/>


## Models/Bundles

In general, the RAK5148's variation is the defined as **RAK5148 - XYZ**, where **X, Y, Z is the model variant**. Refer to the following tables to know the variants and their specification.

| Symbol                        | Description                                   |
| ----------------------------- | --------------------------------------------- |
| X - Interface type            | 2 - USB                                       |
| Y - Additional features       | 1 - No additional features <br> 2 - GPS       |
| Z - MCU RESET with or without | 1 - With MCU RESET <br> 2 - Without MCU RESET |

|    Model    |  USB  |  GPS  | MCU_RESET |
| :---------: | :---: | :---: | :-------: |
| RAK5148-211 |   √   |       |     √     |
| RAK5148-221 |   √   |   √   |     √     |
