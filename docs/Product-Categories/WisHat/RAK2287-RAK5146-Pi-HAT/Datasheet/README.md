---
static_root: /assets/images/wishat/rak2287-pi-hat/datasheet
prev: ../Overview/
next: false
tags:
  - datasheet
  - wishat
  - RAK2287/RAK5146 Pi HAT
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification/RAK2287%20CE%20certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification/RAK2287%20FCC%20certification.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/RAK2287-Mini-PCIe/Certification/RAK2287%20IC%20certification.zip]
rak_desc: Covers the comprehensive information of your RAK2287/RAK5146 Pi HAT to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wishat/rak2287-pi-hat/overview/RAK2287_home.png

---

# RAK2287/RAK5146 Pi HAT Datasheet

<!---
<rk-img
  :src="`${$frontmatter.static_root}/1.rak2287-pi-hat.png`"
  width="75%"
  caption="RAK2287/RAK5146 Pi HAT"
/>
--->


## Overview

### Product Background

**RAK2287/RАК5146 Pi HAT** is a converter board with a Raspberry Pi form factor that enables the RAK2287 SPI or RAK5146 SPI LPWAN concentrator modules to be mounted on the top of the Raspberry Pi.

It integrates one (1) 40-pin female Pi HAT connector and one (1) mini PCIe connector. The RAK Pi HAT is compatible with the Raspberry Pi 3 Model B+ and Raspberry 4.

### Product Features

- Raspberry Pi form factor with a 40-pin compatible header.
- Compatible with the Raspberry Pi 3 Model B+/Raspberry 4.
- Mini PCIe connector on board.

## Specifications

### Overview

#### Block Diagram

RAK2287/RAK5146 Pi HAT integrates one (1) 40-pin female Pi HAT connector and one (1) PCIe connector. This makes it possible to connect RAK2287 or RAK5146 to Raspberry Pi.

<rk-img
  :src="`${$frontmatter.static_root}/3.block-diagram.png`"
  width="65%"
  caption="RAK2287/RAK5146 Pi HAT Block Diagram"
/>

### Hardware

#### Pin Definition

<rk-img
  :src="`${$frontmatter.static_root}/2.pin-definition.png`"
  width="65%"
  caption="RAK2287/RAK5146 Pi HAT Pinout Diagram"
/>

| **Type** | **Description** |
| -------- | --------------- |
| IO       | Bidirectional   |
| DI       | Digital input   |
| DO       | Digital output  |
| OC       | Open collector  |
| OD       | Open drain      |
| PI       | Power input     |
| PO       | Power output    |
| NC       | No Connection   |


| **Pin Number** | **Raspberry Pi 40-Pin Connector** | **RAK2287 Pi HAT Pin** | **Type** | **Remarks**                                                                                                               |
| -------------- | --------------------------------- | ---------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------- |
| 1              | 3V3                               | NC                     | -        | No Connection                                                                                                             |
| 2              | 5V                                | 5V                     | PI       | 5V Input                                                                                                                  |
| 3              | GPIO2(SDA1)                       | NC                     | -        | No Connection                                                                                                             |
| 4              | 5V                                | 5V                     | PI       | 5V Input                                                                                                                  |
| 5              | GPIO3(SCL1)                       | NC                     | -        | No Connection                                                                                                             |
| 6              | GND                               | GND                    | -        | Ground                                                                                                                    |
| 7              | GPIO4(GPIO_GCLK)                  | NC                     | -        | No Connection                                                                                                             |
| 8              | GPIO14(TXD0)                      | UART_RXD_ZOE-M8Q       | DI       | Connect RAK2287 built in GPS Module (ZOE-M8Q)’s UART_RXD                                                                  |
| 9              | GND                               | GND                    | -        | Ground                                                                                                                    |
| 10             | GPIO15(RXD0)                      | UART_TXD_ZOE-M8Q       | DO       | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s UART_TXD                                                               |
| 11             | GPIO17(GPIO_GEN0)                 | RESET_RAK2287          | DI       | Connect to SX1302’s RESET PIN, SX1302 reset input, Active high, ≥100ns for SX1302 reset                                   |
| 12             | GPIO18(GPIO_GEN1)                 | NC                     | -        | No Connection                                                                                                             |
| 13             | GPIO27(GPIO_GEN2)                 | NC                     | -        | No Connection                                                                                                             |
| 14             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 15             | GPIO22(GPIO_GEN3)                 | NC                     | -        | No Connection                                                                                                             |
| 16             | GPIO23(GPIO_GEN4)                 | NC                     | -        | No Connection                                                                                                             |
| 17             | 3V3                               | NC                     | -        | No Connection                                                                                                             |
| 18             | GPIO24(GPIO_GEN5)                 | NC                     | -        | No Connection                                                                                                             |
| 19             | GPIO10(SPI_MOSI)                  | SPI_MOSI               | DI       | Host SPI MOSI                                                                                                             |
| 20             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 21             | GPIO9(SPI_MISO)                   | SPI_MISO               | DO       | Host SPI MISO                                                                                                             |
| 22             | GPIO25(GPIO_GEN6)                 | RESET_GPS_ZOE-M8Q      | DI       | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> RESET, GPS module ZOE-M8Q reset inputs, Active low                |
| 23             | GPIO11(SPI_CLK)                   | SPI_CLK                | DI       | Host SPI CLK                                                                                                              |
| 24             | GPIO8(SPI_CE0_N)                  | SPI_CE                 | DI       | Host SPI CS                                                                                                               |
| 25             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 26             | GPIO7(SPI_CE1_N)                  | GPIO(6)_SX1302         | IO       | Connect to SX1302’s GPIO[6]                                                                                               |
| 27             | ID_SD                             | NC                     | -        | No Connection                                                                                                             |
| 28             | ID_SC                             | NC                     | -        | No Connection                                                                                                             |
| 29             | GPIO5                             | NC                     | -        | No Connection                                                                                                             |
| 30             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 31             | GPIO6                             | NC                     | -        | No Connection                                                                                                             |
| 32             | GPIO12                            | STANDBY_GPS_ZOE-M8Q    | DI       | Connect to RAK2287 built in GPS Module (ZOE-M8Q)’s <br> STANDBY, GPS module ZOE-M8Q external interrupt input, Active  low |
| 33             | GPIO13                            | NC                     | -        | No Connection                                                                                                             |
| 34             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 35             | GPIO19                            | NC                     | -        | No Connection                                                                                                             |
| 36             | GPIO16                            | NC                     | -        | No Connection                                                                                                             |
| 37             | GPIO26                            | NC                     | -        | No Connection                                                                                                             |
| 38             | GPIO20                            | NC                     | -        | No Connection                                                                                                             |
| 39             | GND                               | GND                    | -        | Ground                                                                                                                    |
| 40             | GPIO21                            | NC                     | -        | No Connection                                                                                                             |


## Models / Bundles

### Ordering Information

| **Model**              | **Description**                                                               | **Supported Module** |
| ---------------------- | ----------------------------------------------------------------------------- | -------------------- |
| RAK2287/RAK5146 Pi HAT | PCIe to Pi HAT Convert Board for RAK2287 or RAK5146 module with SPI interface | RAK2287-S            |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
