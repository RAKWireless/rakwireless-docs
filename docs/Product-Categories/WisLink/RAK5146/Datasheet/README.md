---
tags:
  - datasheet
  - wislink
  - RAK5146
prev: ../Overview/
next: false
rak_desc: Provides comprehensive information about your RAK5146 WisLink LPWAN Concentrator to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lora/rak5146/RAK5146.png
certifications:
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_FCC_Certification.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_IC_Certification.pdf]
  - [CE, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_CE_Certification.zip ]
  - [UKCA, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_UKCA_Certification.zip]
  - [REACH, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_REACH_Certification.pdf]
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_RoHS_Certification.pdf]
  - [RCM, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_RCM_Certification.pdf]
  - [KC, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_KC_Certification.pdf]
  - [Anatel, https://downloads.rakwireless.com/LoRa/RAK5146/Certification/RAK5146_ANATEL_Certification.pdf ]
---

# RAK5146 WisLink LPWAN Concentrator Datasheet

## Overview

### Product Description

RAK5146 is an LPWAN Concentrator Module with mini-PCIe form factor based on Semtech SX1303 and SX126X for Listen Before Talk feature, which enables easy integration into an existing router or other network equipment with LPWAN Gateway capabilities. It can be used in any embedded platform offering a free mini-PCIe slot with SPI/USB connection. Furthermore, ZOE- M8Q GPS chip is integrated onboard.

This module is an exceptional, complete, and cost-efficient gateway solution offering up to 10 programmable parallel demodulation paths, 8 x 8 channel LoRa packet detectors, 8 x SF5-SF12 LoRa demodulators, and 8 x SF5-SF10 LoRa demodulators. It is capable of detecting an uninterrupted combination of packets at 8 different spreading factors and 10 channels with continuous demodulation of up to 16 packets. This product is best for smart metering fixed networks and Internet-of-Things (IoT) applications.

### Product Features

- Designed based on **Mini PCI-e form factor**.
- **SX1303 baseband processor** emulates 8 x 8 channels LoRa packet detectors, 8x SF5-SF12 LoRa demodulators, 8x SF5-SF10 LoRa demodulators, one 125 /250 / 500 kHz high-speed LoRa demodulator, and one (G)FSK demodulator.
- 3.3V **Mini PCI-e**, compatible with **3G/LTE card** of Mini PCI-e type. 
- Tx power up to 27dBm, Rx sensitivity down to -139dBm@SF12, BW 125 kHz. 
- Supports **global license-free frequency band** (EU868, CN470, US915, AS923, AU915, KR920, IN865).
- Supports optional **SPI/USB** interfaces. 
- Listen Before Talk
- Fine Timestamp.
- Built-in **ZOE-M8Q** GPS module.

## Specifications

### Overview

The overview shows the top and back views of the RAK5146 board. It also presents the block diagram that discusses how the board works.

#### Board Overview

RAK5146 is a compact LPWAN Gateway Module, making it suitable for integration in systems where mass and size constraints are essential. It has been designed with the PCI Express Mini Card form factor in mind, so it can easily become a part of products that comply with the standard, where they allow cards with a thickness of at least 5.5 mm.

The board has two UFL interfaces for the LoRa and GNSS antennas and a standard 52 pin connector (mPCIe).

<rk-img
  src="/assets/images/wislink-lora/rak5146/datasheet/RAK5146_Overview.svg"
  width="50%"
  caption="Board Overview"
/>

#### Block Diagram

The RAK5146 concentrator is equipped with one SX1303 chip and two SX1250. The first chip is utilized for the RF signal and the core of the device, while the latter provides the related LoRa modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one UFL connectors are available for external antenna integration.

<rk-img
  src="/assets/images/wislink-lora/rak5146/datasheet/2.png"
  width="80%"
  caption="Block Diagram"
/>

### Hardware

The hardware is categorized into seven parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the parameters and standard values of the board.

#### Interfaces

- **Power Supply** - The RAK5146 concentrator module must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1303 chip (for more information, see the [SX1303 Datasheet](https://www.mouser.com/pdfDocs/Semtech_08072019_DS_SX1302_V10-1626824.pdf)).
  
- **SPI Interface** - SPI interface mainly provides for the Host_SCK, Host_MISO, Host_MOSI, Host_CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1303 via a synchronous full-duplex protocol. Only the slave side is implemented.
  
- **USB Interface** - The USB interface mainly provides for the USB_D+, USB_D- pins of the system connector. The USB interface gives access to the configuration register of SX1303 via an MCU STM32L412KBU6. Only the slave side is implemented.
  
- **UART and I2C Interface** - RAK5146 integrates a ZOE-M8Q GPS module which has UART and I2C interface. The PINs on the golden finger provide a UART connection and an I2C connection, which allows direct access to the GPS module. The PPS signal is not only connected to SX1303 internally but also connected to the golden finger which can be used by the host board.
  
- **GPS_PPS** - RAK5146 includes the GPS_PPS input for received packets time-stamped and Fine timestamp.
  
- **RESET** - RAK5146 SPI card includes the RESET active-high input signal to reset the radio operations as specified by the SX1303 Specification. RAK5146 USB card’s RESET is controlled by MCU.
  
- **Antenna RF Interface** - The module has one RF interface over a standard UFL connector (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface.

#### Pin Definition

##### Pinout Diagram

<rk-img
  src="/assets/images/wislink-lora/rak5146/datasheet/RAK5146_pinout.svg"
  width="80%"
  caption="Pinout Diagram"
/>

##### Pinout Description

| Type | Description    |
| ---- | -------------- |
| IO   | Bidirectional  |
| DI   | Digital input  |
| DO   | Digital output |
| OC   | Open collector |
| OD   | Open drain     |
| PI   | Power input    |
| PO   | Power output   |
| NC   | No connection  |

| Pin No. | mPCIe Pin Rev. 2.0 | RAK5146 Pin   | Type | Description                                 | Remarks                                                      |
| ------- | ------------------ | ------------- | ---- | ------------------------------------------- | ------------------------------------------------------------ |
| 1       | WAKE#              | SX1261_BUSY   | DO   | No connection by default                    | Reserved for future applications                             |
| 2       | 3.3Vaux            | 3V3           | PI   | 3.3V DC supply                              |                                                              |
| 3       | COEX1              | SX1261_DIO1   | IO   | No connection by default                    | Reserved for future applications                             |
| 4       | GND                | GND           |      | Ground                                      |                                                              |
| 5       | COEX2              | SX1261_DIO2   | IO   | No connection by default                    | Reserved for future applications                             |
| 6       | 1.5V               | GPIO(6)       | IO   | No connection by default                    | Connect to the SX1302's GPIO(6)                              |
| 7       | CLKREQ#            | SX1261_NSS    | DI   | No connection by default                    | Reserved for future applications                             |
| 8       | UIM_PWR            | NC            |      | No connection                               |                                                              |
| 9       | GND                | GND           |      | Ground                                      |                                                              |
| 10      | UIM_DATA           | NC            |      | No connection                               |                                                              |
| 11      | REFCLK-            | SX1261_NRESET | DI   | No connection by default                    | Reserved for future application                              |
| 12      | UIM_CLK            | NC            |      | No connection                               |                                                              |
| 13      | REFCLK+            | MCU_NRESET    | DI   | RESET signal for MCU of RAK5146-USB         | Active low                                                   |
| 14      | UIM_RESET          | NC            |      | No connection                               |                                                              |
| 15      | GND                | GND           |      | Ground                                      |                                                              |
| 16      | UIM_VPP            | NC            |      | No connection                               |                                                              |
| 17      | RESERVED           | NC            |      | No connection                               |                                                              |
| 18      | GND                | GND           |      | Ground                                      |                                                              |
| 19      | RESERVED           | PPS           | DO   | Time pulse output                           | Leave open if not in use                                     |
| 20      | W_DISABLE#         | NC            |      | No connection                               |                                                              |
| 21      | GND                | GND           |      | Ground                                      |                                                              |
| 22      | PERST#             | SX1303_RESET  | DI   | RAK5146-SPI reset input                     | Active high, ≥100ns for SX1302 reset                         |
| 23      | PERn0              | RESET_GPS     | DI   | GSP module ZOE-M8Q reset input              | Active low, leave open if not in use                         |
| 24      | 3.3Vaux            | 3v3           | PI   | 3.3V DC supply                              |                                                              |
| 25      | PERp0              | STANDBY_GPS   | DI   | GPS module ZOE-M8Q external interrupt input | Active low, leave open if not in use                         |
| 26      | GND                | GND           |      | Ground                                      |                                                              |
| 27      | GND                | GND           |      | Ground                                      |                                                              |
| 28      | 1.5V               | GPIO(8)       |      | Connect to the SX1303's GPIO(8)             |                                                              |
| 29      | GND                | GND           |      | Ground                                      |                                                              |
| 30      | SMB_CLK            | I2C_SCL       | IO   | HOST SCL                                    | Connect to GPS module ZOE-M8Q's SCL internally, leave open if not in use |
| 31      | PETn0              | PI_UART_TX    | DI   | HOST UART_TX                                | Connect to GPS module ZOE-M8Q's UART_RT internally, leave open if not in use |
| 32      | SMB_DATA           | I2C_SDA       | IO   | HOST SDA                                    | Connect to GPS module ZOE-M8Q's SDA internally, leave open if not in use |
| 33      | PETp0              | PI_UART_RX    | DO   | HOST UART_RX                                |` Connect to GPS module ZOE-M8Q's UART_TX internally, leave open if not in use |
| 34      | GND                | GND           |      | Ground                                      |                                                              |
| 35      | GND                | GND           |      | Ground                                      |                                                              |
| 36      | USB_D-             | USB_DM        | IO   | USB differential data (-)                   | Require differential impedance of 90Ω                        |
| 37      | GND                | GND           |      | Ground                                      |                                                              |
| 38      | USB_D+             | USB_DP        | IO   | USB differential data (+)                   | Require differential impedance of 90Ω                        |
| 39      | 3.3Vaux            | 3V3           | PI   | 3.3V DC supply                              |                                                              |
| 40      | GND                | GND           |      | Ground                                      |                                                              |
| 41      | 3.3Vaux            | 3V3           | Pi   | 3.3V DC supply                              |                                                              |
| 42      | LED_WWAN#          | NC            |      | No connection                               |                                                              |
| 43      | GND                | GND           |      | Ground                                      |                                                              |
| 44      | LED_WLAN#          | NC            |      | No connection                               |                                                              |
| 45      | RESERVED           | HOST_SCK      | IO   | Host SPI SCK                                |                                                              |
| 46      | LED_WPAN#          | NC            |      | No connection                               |                                                              |
| 47      | RESERVED           | HOST_MISO     | IO   | Host SPI MISO                               |                                                              |
| 48      | 1.5V               | NC            |      | No connection                               |                                                              |
| 49      | RESERVED           | HOST_MOSI     | IO   | Host SPI MOSI                               |                                                              |
| 50      | GND                | GND           |      | Ground                                      |                                                              |
| 51      | RESERVED           | HOST_CSN      | IO   | Host SPI CSN                                |                                                              |
| 52      | 3.3Vaux            | 3V3           | PI   | 3.3V DC supply                              |                                                              |

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels, allowing easy configuration while building the firmware from the source code.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU868           |
| North America | US915           |
| Asia          | AS923           |
| Australia     | AU915           |
| Korea         | KR920           |
| India         | IN865           |
| China         | CN470           |

##### RF Characteristics

The following table gives typically sensitivity level of the RAK5146 concentrator module.

| Signal bandwidth (KHz) | Spreading factor | Sensitivity (dBm) |
| ---------------------- | ---------------- | ----------------- |
| 125                    | 12               | -139              |
| 125                    | 7                | -125              |
| 250                    | 7                | -123              |
| 500                    | 12               | -134              |
| 500                    | 7                | -120              |

#### Electrical Requirements

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.

The operating condition range defines those limits within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

##### Absolute Maximum Rating

The limiting values given below are following the Absolute Maximum Rating System (IEC 134).

| Symbol  | Description           | Condition                                  | Min    | Max       |
| ------- | --------------------- | ------------------------------------------ | ------ | --------- |
| 3.3Vaux | Module supply voltage | Input DC voltage at 3.3Vaux pins           | -0.3 V | 3.6 V     |
| USB     | USB D+/D- pins        | Input DC voltage at USB interface pins     |        | 3.6 V     |
| RESET   | RAK5146 reset input   | Input DC voltage at RESET input pin        | -0.3 V | 3.6 V     |
| SPI     | SPI interface         | Input DC voltage at SPI interface pin      | -0.3 V | 3.6 V     |
| GPS_PPS | GPS 1 PPS input       | Input DC voltage at GPS_PPS input pin      | -0.3 V | 3.6 V     |
| Rho_ANT | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 |        | 10:1 VSWR |
| Tstg    | Storage temperature   |                                            | -40 °C | 85 °C     |

:::warning ⚠️ WARNING
The product is not protected against overvoltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in the table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::

##### Maximum ESD

| Parameter | Min  | Typical | Max    | Remarks                                    |
| --------- | ---- | ------- | ------ | ------------------------------------------ |
| ESD_HBM   |      |         | 1000 V | Charged Device Model JESD22-C101 CLASS III |
| ESD_CDM   |      |         | 1000 V | Charged Device Model JESD22-C101 CLASS III |

:::tip 📝 NOTE
Although this module is designed to be as robust as possible, electrostatic discharge (ESD) can damage this module. This module must be protected at all times from ESD when handling or transporting. Static charges may easily produce potentials of several kilovolts on the human body or equipment, which can discharge without detection. Industry-standard ESD handling precautions should be used at all times.
:::

##### Power Consumption

| Mode             | Condition                                               | Min    | Typical | Max    |
| ---------------- | ------------------------------------------------------- | ------ | ------- | ------ |
| Active Mode (TX) | The power of the TX channel is 27 dBm and 3.3 V supply. | 511 mA | 512 mA  | 513 mA |
| Active Mode (RX) | TX disabled and RX enabled.                             | 70 mA  | 81.6 mA | 101 mA |

##### Power Supply Range

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch on the module.

| Symbol  | Parameter                             | Min  | Typical | Max   |
| ------- | ------------------------------------- | ---- | ------- | ----- |
| 3.3Vaux | Module supply operating input voltage | 3 V  | 3.3 V   | 3.6 V |

#### Mechanical Characteristics

The board weighs 16.3 grams, it is 30 mm wide and 50.96 mm tall. The dimensions of the module fall completely within the **PCI Express Mini Card Electromechanical Specification**, except for the card's thickness (5.5 mm at its thickest).

<rk-img
  src="/assets/images/wislink-lora/rak5146/datasheet/RAK5146_Dimensions.svg"
  width="25%"
  caption="Dimensions"
/>

#### Environmental Requirements

##### Operating Conditions

| Parameter                    | Min    | Typical | Max    | Remarks                                                      |
| ---------------------------- | ------ | ------- | ------ | ------------------------------------------------------------ |
| Normal operating temperature | -40 °C | +25 °C  | +85 °C | Normal operating temperature range (fully functional and meet 3GPP specifications) |

:::tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°C. Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

#### Schematic Diagram

RAK5146 concentrator module refers to Semtech's reference design for SX1303. The SPI interface can be used on the PCIe connector. The next figure shows the minimum application schematic of the RAK5146. You should use at least 3.3V/1A DC power, connect the SPI interface to the main processor.

<rk-img
  src="/assets/images/wislink-lora/rak5146/datasheet/5.png"
  width="100%"
  caption="Schematic Diagram"
/>

## Models / Bundles            

In general, the RAK5146's variation is defined as **RAK5146 - XYZ**, where **X, Y, Z is the model variant**. Take a look at the tables below to know the variants and their specification.

| Symbol                  | Description                                               |
| ----------------------- | --------------------------------------------------------- |
| X - Supported region    | 1 - US915; 2 - EU868                                      |
| Y - Interface type      | 1 - SPI; 2 - USB                                          |
| Z - Additional features | 0 - No additional features; 2 - LBT; 5 - GPS; 6 - LBT+GPS |

| Model       | Frequency | USB  | SPI  | LBT  | GPS  |
| ----------- | --------- | ---- | ---- | ---- | ---- |
| RAK5146-126 | US915     | √    |      | √    | √    |
| RAK5146-122 | US915     | √    |      | √    |      |
| RAK5146-125 | US915     | √    |      |      | √    |
| RAK5146-120 | US915     | √    |      |      |      |
| RAK5146-115 | US915     |      | √    |      | √    |
| RAK5146-110 | US915     |      | √    |      |      |
| RAK5146-226 | EU868     | √    |      | √    | √    |
| RAK5146-222 | EU868     | √    |      | √    |      |
| RAK5146-225 | EU868     | √    |      |      | √    |
| RAK5146-220 | EU868     | √    |      |      |      |
| RAK5146-215 | EU868     |      | √    |      | √    |
| RAK5146-210 | EU868     |      | √    |      |      |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />