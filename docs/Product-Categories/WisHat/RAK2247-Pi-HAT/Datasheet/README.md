---
tags:
  - datasheet
  - wishat

prev: ../Overview/
---

# RAK2247 Pi HAT Datasheet

## Overview

### Background

RAK2247 Pi HAT is a **converter board** designed to allow the RAK2247 Concentrator module to interface with a **Raspberry Pi SBC**. It maps the **52-pin of mPCIe RAK2247 connector** to the **40-pin Raspberry Pi header**.

Moreover, there is a **GPS** on the HAT that enhances your RAK2247 with localization and timing data.

### Features

- Pi HAT form factor
- mPCIe slot
- GPS Module (MAX-7Q) module integrated in the HAT

### Package Contents

- One (1) RAK2247 Pi HAT


## Specifications

### Overview

#### Block Diagram

The RAK2247 Pi HAT maps the RAK2247 pins from the 52-pin mPCIe connector to the 40-pin Raspberry Pi connector. Refer to the block diagram in figure 1 below and pin mapping table in the following section – Pin Definition.

<rk-img
  src="/assets/images/wishat/rak2247-pi-hat/datasheet/block-diagram.svg"
  width="60%"
  caption="RAK2247 Pi HAT Block Diagram"
/>

### Hardware

#### Pin Definition

<rk-img
  src="/assets/images/wishat/rak2247-pi-hat/datasheet/pinout_diagram.png"
  width="70%"
  caption="RAK2247 Pi HAT Pinout Diagram"
/>

The following tables show the pin definitions and the description of the RAK2247 Pi HAT on the 40-Pin Pi HAT connector:

| **Type** | **Description** | 
| ---- | ---- | 
| IO | Bidirectional | 
| DI | Digital input | 
| DO | Digital input | 
| OC | Open collector | 
| OD | Open drain | 
| PI | Power input | 
| PO | Power input | 
| NC | No Connection | 


| **Pin Number** | **Raspberry Pi 40-PIN Connector** | **RAK2247 Pi HAT PIN** | **I/O** | **Remarks** | 
| ---- | ---- | ---- | ---- | ---- | 
| 1 | 3V3 | NC |  | No Connection | 
| 2 | 5V | 5V | PI | 5V Input | 
| 3 | GPIO2(SDA1) | I2C_SDA | IO | HOST SDA, Connect RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s SDA | 
| 4 | 5V | 5V | PI | 5V Input | 
| 5 | GPIO3(SCL1) | I2C_SCL | IO | HOST SCL, Connect RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s SCL | 
| 6 | GND | GND |  | Ground | 
| 7 | GPIO4(GPIO_GCLK) | NC |  | No Connection | 
| 8 | GPIO14(TXD0) | UART_RXD_ MAX-7Q | DI | Connect RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s UART_RXD | 
| 9 | GND | GND |  | Ground | 
| 10 | GPIO15(RXD0) | UART_TXD_ MAX-7Q | DO | Connect to RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s UART_TXD | 
| 11 | GPIO17(GPIO_GEN0) | RESET_RAK2247 | DI | Connect to SX1301’s RESET PIN, SX1301 reset input, Active high, ≥100ns for SX1301 reset | 
| 12 | GPIO18(GPIO_GEN1) | NC |  | No Connection | 
| 13 | GPIO27(GPIO_GEN2) | NC |  | No Connection | 
| 14 | GND | GND |  | Ground | 
| 15 | GPIO22(GPIO_GEN3) | NC |  | No Connection | 
| 16 | GPIO23(GPIO_GEN4) | NC |  | No Connection | 
| 17 | 3V3 | NC |  | No Connection | 
| 18 | GPIO24(GPIO_GEN5) | NC |  | No Connection | 
| 19 | GPIO10(SPI_MOSI) | SPI_MOSI | DI | Host SPI MOSI | 
| 20 | GND | GND |  | Ground | 
| 21 | GPIO9(SPI_MISO) | SPI_MISO | DO | Host SPI MOSI | 
| 22 | GPIO25(GPIO_GEN6) | NC |  | No Connection | 
| 23 | GPIO11(SPI_CLK) | SPI_CLK | DI | Host SPI CLK | 
| 24 | GPIO8(SPI_CE0_N) | SPI_CE | DI | Host SPI CS | 
| 25 | GND | GND |  | Ground | 
| 26 | GPIO7(SPI_CE1_N) | NC |  | No Connection | 
| 27 | ID_SD | NC |  | No Connection | 
| 28 | ID_SC | NC |  | No Connection | 
| 29 | GPIO5 | NC |  | No Connection | 
| 30 | GND | GND |  | Ground | 
| 31 | GPIO6 | NC |  | No Connection | 
| 32 | GPIO12 | NC |  | No Connection | 
| 33 | GPIO13 | RESET_GPS_ MAX-7Q | DI | Connect to RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s RESET, GPS module MAX-7Q reset inputs, Active High | 
| 34 | GND | GND |  | Ground | 
| 35 | GPIO19 | STANDBY_GPS_ MAX-7Q | DI | Connect to RAK2247 Pi HAT built in GPS Module (MAX-7Q)’s STANDBY, GPS module MAX-7Q external interrupt input, Active High | 
| 36 | GPIO16 | NC |  | No Connection | 
| 37 | GPIO26 | NC |  | No Connection | 
| 38 | GPIO20 | NC |  | No Connection | 
| 39 | GND | GND |  | Ground | 
| 40 | GPIO21 | NC |  | No Connection | 


## Ordering Information

| **Model** | **Description** | **Supported Module** | 
| ---- | ---- | ---- | 
| RAK2247 Pi HAT | mPCIe to 40pin Pi HAT Convert Board for RAK2247 module with SPI interface | RAK2247 SPI module | 

