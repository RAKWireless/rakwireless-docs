---
rak_desc: Covers the comprehensive information of your RAK13600 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13600/overview/RAK13600_home.png
tags:
  - datasheet
  - wisblock
  - RAK13600
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13600/Certification/RAK13600_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13600/Certification/RAK13600_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13600/Certification/RAK13600_ISED_Certification.pdf]
  - [UKCA, https://downloads.rakwireless.com/LoRa/WisBlock/RAK13600/Certification/RAK13600_UKCA_Certification.pdf]
---

# RAK13600 WisBlock NFC Reader Module Datasheet

## Overview

### Description

**RAK13600** is a **WisBlock Wireless** NFC reader module based on the PN532 chip. It provides a compact and low-power solution for NFC-related IoT applications. The RAK13600 has an integrated transceiver module used for NFC applications which operates at 13.56 MHz and is also based on the standard 80C51 microcontroller core. It supports 6 different operating
modes:


- ISO/IEC 14443A/MIFARE Reader/Writer
- FeliCa Reader/Writer
- ISO/IEC 14443B Reader/Writer
- ISO/IEC 14443A/MIFARE Card MIFARE Classic 1K or MIFARE Classic 4K card emulation mode
- FeliCa Card emulation
- ISO/IEC 18092, ECMA 340 Peer-to-Peer

### Features

* **Module specifications**    
    * Based on PN532   
    * External Antenna   
    * Low power    

* **Size**    
    * 35 x 25&nbsp;mm 

## Specifications

### Overview

#### Mounting

The RAK13600 NFC reader module can be mounted to the IO slot of the WisBlock Base board. To illustrate, **Figure 1** shows how RAK13600 can be mounted on RAK5005-O WisBlock Base.

<rk-img
  src="/assets/images/wisblock/rak13600/datasheet/mounting-mechanism.png"
  width="80%"
  caption="RAK13600 Mounting to WisBlock Base"
/>

### Hardware

The hardware specification is categorized into four parts. It discusses the pinouts of the module and its corresponding functions. It also covers the electrical and mechanical parameters that include the tabular data of its characteristics. This section also shows the schematic diagram of RAK13600.

#### Pin Definition

The RAK13600 WisBlock NFC Reader has the standard 40-pin WisConnector. It is compatible with the IO slot which allows the RAK13600 module to be mounted on a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the Pinout Definition is shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak13600/datasheet/RAK13600_Pinouts.svg"
  width="70%"
  caption="RAK13600 IO Slot Connector"
/>

:::tip 📝 NOTE:

- The default interface is **I2C**.
- Reset functionality is available on **RESET (IO5)** and **RSTPD_N (IO4)** pins.
- PN532 wake up is available on **WAKEUP (IO6)**.
- **3V3_S** and **GND** supply power to the board.

:::

#### Electrical Characteristics

| Parameter                                     | Minimum | Typical | Maximum | Unit |
| --------------------------------------------- | ------- | ------- | ------- | ---- |
| 3V3_S                                         | 2.7     | 3.3     | 3.6     | V    |
| I<sub>dvdd</sub> (Digital Supply Current)     |         | 25      |         | mA   |
| I<sub>avdd</sub> (Analog Supply Current)      |         | 6       |         | mA   |
| I<sub>tvdd</sub> (Transmitter Supply Current) |         | 60      | 150     | mA   |
| Ambient Temperature                           | -30     |         | 80      | °C   |

#### Mechanical Characteristics

##### Board Dimensions

Refer to **Figure 3** below for the mechanical dimensions of the RAK13600 module.

<rk-img
  src="/assets/images/wisblock/rak13600/datasheet/mechanical-dimensions.png"
  width="100%"
  caption="RAK13600 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13600/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak13600/datasheet/schematic.png"
  width="100%"
  caption="RAK13600 Schematic Diagram"
/>


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />