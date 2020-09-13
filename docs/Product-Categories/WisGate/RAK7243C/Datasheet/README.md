---
tags:
  - datasheet
  - wisgate
prev: ../Quickstart/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Certification-Report/RAK7243_CE_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Certification-Report/RAK7243_FCC_Certificate.zip]
---

# RAK7243C WisGate Developer D3+ Gateway Datasheet

<!-- <rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/1.rak7243c-overview.png"
  width="50%"
  caption="RAK7243C WisGate Developer D3+ Gateway"
/> -->

## Overview

### Description

The **RAK7243C WisGate Developer D3+ Gateway** is a device that consists of Raspberry Pi 3B+, RAK2245 Pi HAT which includes a GPS module and a Heat Sink for better performance and thermal heat dissipation management, and a RAK2013 Cellular Pi HAT and it’s housing is built with an aluminum casing.

For the build-in RAK2245 Pi HAT, it uses the SX1301 chip from Semtech which built-in LPWAN concentrator IP core is a powerful digital signal processing engine. It is able to receive up to 8 LoRa packets simultaneously sent with different spreading factors on different channels and available in multiple variants so it can be used for internartinal standard bands. This unique capability allows to implement innovative network architectures advantageous over other short range systems. For the build-in RAK2013 Cellular Pi HAT, it supports optional QUECTEL BG96 / EG91 / EG95 which can supports NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE. It follows Raspberry Pi specifications and is easy to mount with Raspberry Pi and RAK2245 Pi HAT module.

Pilot Gateway Pro is ideal for prototyping, proof-of-concept demonstration or for the evaluation. It includes a ready to use gateway OS that can be connected to a LoRaWan® server. Also it is developer friendly and simple even for no-so-techy users to set up LoRaWan® system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm and other IoT enterprise applications.

### Features

- Preassembled, fully functioning gateway
- SX1301 base band processor, emulates 49 x LoRa demodulators 10 programmable parallel demodulation paths, support 8 uplinks channel, 1 downlink channel
- Support optional Cellular module(Quectel BG96 or EG91 or EG95) for NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE
- Built-in the Ublox MAX-7Q GPS Module
- Built-in Heat Sink for thermal heat dissipation management
- Supports 5V/2.5A power supply
- TX power up to 27dBm, RX sensitivity down to -139dBm@SF12, BW 125KHz
- Frequency band support: EU433, CN470, RU864, IN865, EU868, US915, AU915, KR920, AS923
- Housing with top cover, body, bottom cover with riveted motherboard standoff
- Includes Pi ready 'ID EEPROM', GPIO setup and device tree can be automatically configured from vendor information
- Supports fully open source code connected to a LoRaWAN server

## Specifications

### Overview

The overview covers the board overview of RAK7243C and its block diagram that discusses the basic concept of LoRaWAN system.

#### Board Overview

<!--- The outer dimension of Pilot Gateway is **92 x 68.3 x 53.5 mm** as shown below --->

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/2.rak7243-dimensions.png"
  width="60%"
  caption="RAK7243C Outer Dimensions"
/>

#### Block Diagram

The following figure shows the basic concept for LoRaWAN system. RAK7243 Pilot Gateway is the central hardware solution for all LoRa based radio communication. It receives and transmits radio messages. The processing of radio messages as well as the protocol related tasks is done by embedded host system (Raspberry Pi). Received and processed radio messages are being sent to a LoRaWAN server. The concrete segmentation of the protocol related tasks is outside the scope of this document

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/3.rak7243-system-structure.png"
  width="80%"
  caption="RAK7243C WisGate Developer D3+ Gateway System Structure"
/>

### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and the corresponding functions and diagrams of the board. It also covers the parameters and the standard values of the antenna, and the electrical and environmental requirements. 

#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/4.rak7243c-interfaces.png"
  width="80%"
  caption="RAK7243C Interfaces"
/>

:::tip 📝 NOTE
LTE Antenna(DIV) is only using for the EG91 / EG95 Version and reserved for BG96 Version
:::

#### Pin Definition

The RAK7243C WisGate Developer D3+ Gateway is composed of the LPWAN Concentrator RAK2245 Pi HAT and the RAK2013 Pi HAT |

##### RAK2245 Pi HAT

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/5.rak2245.png"
  width="40%"
  caption="RAK2245 Pi HAT"
/>

RAK2245 Pi HAT(Model Name is: RAK2243) is an LPWAN Concentrator board which follows the Pi HAT standard, and can be mounted to Pi board with 40-pin connector.

- For detailed information about the RAK2245, Go to the [RAK2245 Pi HAT Datasheet](/Product-Categories/WisLink/RAK2245-Pi-HAT/Datasheet/).

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/6.lora-hardware-structure.jpg"
  width="80%"
  caption="LoRa Hardware Structure"
/>

##### RAK2013 Cellular

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/7.rak2013.jpg"
  width="40%"
  caption="RAK2013 Cellular Pi HAT"
/>

RAK2013 is an add-on board following Raspberry Pi HAT standard. It can transmit UART data from Raspberry Pi to Cellular network. It can support several cellular protocol, such as NB-IOT, CAT-M, CAT1 or CAT 4, by choosing different modular on the board.

The RAK2013 integrates audio codec and audio amplifier on it, with carrier operator's network, it can support VoLTE function. For easy use, there are earphone connector, MIC connector and speaker connector with audio amplifier

- For detailed information about the RAK2013, go to [RAK2013 Cellular Datasheet](/Product-Categories/WisLink/RAK2013/Datasheet/).

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/8.cellular-hardware-structure.png"
  width="75%"
  caption="Cellular Hardware Structure"
/>

#### RF Characteristics

##### Operating Frequencies

The Pilot Gateway supports all LoRaWAN frequency channels as below. Which is easy to configure while building the firmware from the source code.

|    Region     | Frequency (Mhz) |
| :-----------: | --------------- |
|    Europe     | EU433, EU868    |
|     China     | CN470           |
| North America | US915           |
|     Asia      | AS923           |
|   Australia   | AU915           |
|     Korea     | KR920           |
|    Indian     | IN865           |
|    Russia     | RU864           |

##### LoRa

###### Transmitter RF

The RAK2245 has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption

| PA Control | DAC Control | MIX Control | DIG Gain | Nominal RF Power Level (dBm) |
| :--------: | :---------: | :---------: | :------: | :--------------------------: |
|     0      |      3      |      8      |    0     |              -6              |
|     0      |      3      |     10      |    0     |              -3              |
|     0      |      3      |     14      |    0     |              0               |
|     1      |      3      |      9      |    3     |              4               |
|     1      |      3      |      8      |    0     |              8               |
|     1      |      3      |      9      |    0     |              10              |
|     1      |      3      |     11      |    0     |              12              |
|     1      |      3      |     12      |    0     |              14              |
|     1      |      3      |     13      |    0     |              16              |
|     2      |      3      |     12      |    0     |              17              |
|     2      |      3      |     13      |    0     |              19              |
|     2      |      3      |     14      |    0     |              20              |
|     3      |      3      |     10      |    0     |              0               |
|     3      |      3      |     11      |    0     |              0               |
|     3      |      3      |     12      |    0     |              25              |
|     3      |      3      |     13      |    0     |              26              |
|     3      |      3      |     14      |    0     |              27              |

- T=25℃, VDD=5V (Typ.) if nothing else stated.

| Parameter                              | Condition                |   Min    | Typ. |   Max    |
| -------------------------------------- | ------------------------ | :------: | ---- | :------: |
| Frequency Range                        |                          | 863 Mhz  |      | 870 Mhz  |
| Modulation Techniques                  | FSK/LoRa                |          |      |          |
| TX Frequency Variation vs. Temperature | Power Level Setting : 20 |  -3 Khz  |      |  +3 Khz  |
| TX Power Variation vs. Temperature     | Power Level Setting : 20 |  -5 dBm  |      |  +5 dBm  |
| TX Power Variation                     |                          | -1.5 dBm |      | +1.5 dBm |

###### Receiver RF

It is highly recommended, to use optimized RSSI calibration values, which is part of the HAL v3.1. For both, Radio 1 and 2, the RSSI-Offset should be set - 169.0. The following table gives typically sensitivity level of the RAK2245.

| Signal Bandwidtth (Khz) | Spreading Factor | Sensitivity (dBm) |
| :---------------------: | :--------------: | :---------------: |
|           125           |        12        |       -139        |
|           125           |        7         |       -126        |
|           250           |        12        |       -136        |
|           250           |        7         |       -123        |
|           500           |        12        |       -134        |
|           500           |        7         |       -120        |

##### Cellular

The Pilot Gateway supports different frequency bands according to the modular mounted on the board.

###### BG96 Module

BG96 is a series of LTE Cat M1/Cat NB1/EGPRS module offering a maximum data rate of 300Kbps downlink and 375Kbps uplink.

| Frequency     | BG96                                                                  |
| ------------- | --------------------------------------------------------------------- |
| LTE (FDD-LTE) | B1 / B2 / B3 / B4 / B5 / B8 / B12 / B13 / B18 / B19 / B20 / B26 / B28 |
| LTE (TDD-LTE) | B39 (for CAT M1 only)                                                 |
| EGPRS         | 850 / 900 / 1800 / 1900 MHz                                           |

###### EG91 Module

Quectel EG91 is a series of LTE category 1 module optimized specially for M2M and IoT applications. It delivers M2M-optimized speeds of 10Mbps downlink and 5Mbps uplink. These make EG91 an ideal solution for numerous IoT applications that are not reliant on high speed connectivity but still require the longevity and reliability of LTE networks

| Frequency | EG91-E                         | EG91-NA                  |
| --------- | ------------------------------ | ------------------------ |
| LTE FDD   | B1 / B3 / B7 / B8 / B20 / B28A | B2 / B4 / B5 / B12 / B13 |
| WCDMA     | B1 / B8                        | B2 / B4 / B5             |
| GSM /EDGE | 900 / 1800 MHz                 |                          |
| Region    | Europe                         | North America            |

###### EG95 Module

Quectel EG95 is a series of LTE category 4 module optimized specially for M2M and IoT applications. Adopting 3GPP Rel. 11 LTE technology, it delivers **150Mbps downlink** and **50Mbps uplink** data rates

| Frequency  | EG95-E                         | EG95-NA                  |
| ---------- | ------------------------------ | ------------------------ |
| LTE FDD    | B1 / B3 / B7 / B8 / B20 / B28A | B2 / B4 / B5 / B12 / B13 |
| WCDMA      | B1 / B8                        | B2 / B4 / B5             |
| GSM / EDGE | 900 / 1800 MHz                 |                          |
| Region     | Europe                         | North America            |

#### Antenna Specifications

##### LoRa

The LoRa Antenna with RP-SMA female connector shown in the figure below:

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/9.lora-antenna-overview.png"
  width="50%"
  caption="LoRa Antenna Overview"
/>

###### Antenna Dimension

The antenna's mechanical dimension is shown below:

<rk-img
  src=/assets/images/wisgate/rak7243c/datasheet/10.lora-antenna-dimensions.png"
  width="50%"
  caption="LoRa Antenna Dimension in mm"
/>

###### Antenna Parameters

| Items                              | Specifications                 |
| ---------------------------------- | ------------------------------ |
| Voltage Standard Wave Ratio (VSWR) | 1.5:1                          |
| Gain                               | -2.0 dBi                       |
| Working Temperature &amp; Humidity | T:-35 ºC ~ +80 ºC, H: 0% ~ 95% |
| Storage Temperature &amp; Humidity | T:-40 ºC ~ +85 ºC, H: 0% ~ 95% |

##### LTE

For module built-in BG96, there is one LTE antenna and one GPS antenna. For module
built-in EG91/EG95, there are two LTE antennas, and no GPS antenna with the module.

The LTE antenna for the Pilot Gateway Pro covers working frequency band
from 824MHz to 2690MHz. The antenna is shown as below.

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/11.lte-antenna.jpg"
  width="50%"
  caption="LTE Antenna"
/>

###### Antenna Dimension

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/12.lte-antenna-dimensions.jpg"
  width="50%"
  caption="LTE Antenna Dimension"
/>

###### Antenna Parameters

| Items                              | Specifications                                 |
| ---------------------------------- | ---------------------------------------------- |
| Frequency (MHz)                    | 700 / 800 / 880 / 960 / 1710 / 1880 / 2170     |
| Voltage Standard Wave Ratio (VSWR) | 9.3 / 4.6 / 3.6 / 4.9 / 9.3 / 4.4 / 15         |
| Gain (dBi)                         | 1.63 / 1.84 / 1.96 / 2.23 / 0.03 / 0.01 / 1.97 |
| Working Temperature &amp; Humidity | T:-35 ºC ~ +80 ºC, H: 0% ~ 95%                 |
| Storage Temperature &amp; Humidity | T:-40 ºC ~ +85 ºC, H: 0% ~ 95%                 |

##### GPS

The GPS antenna for Pilot Gateway is shown below

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/13.gps-antenna.jpg"
  width="50%"
  caption="GPS Antenna"
/>

###### GPS Antenna Dimension

<rk-img
  src="/assets/images/wisgate/rak7243c/datasheet/14.gps-antenna-dimensions.jpg"
  width="75%"
  caption="GPS Antenna Dimensions"
/>

###### GPS Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions | Temperature     | Humidity |
| ---------- | --------------- | -------- |
| Working    | -35 ºC ~ +80 ºC | 0% ~ 95% |
| Storage    | -40 ºC ~ +85 ºC | 0% ~ 95% |

###### GPS Antenna Parameters

Antenna specifications are listed in the table below:

| Item                                        | Specifications        | PET  |
| ------------------------------------------- | --------------------- | ---- |
| Range of Receiving Frequency                | 1575.42±1.1           | ±2.5 |
| Center Frequency (MHz) w/ 30mm2 GND plane   | 1575.42               | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10dB)       | ≥10                   | ±0.5 |
| VSWR (in Center Frequency)                  | ≤2.0                  | ±0.5 |
| Gain (Zenith) (dBi Typ.) w/ 70mm2 GND Plane | 4.5                   | ±0.5 |
| Axial Ratio (dB) w/ 70mm2 GND Plane         | 3.0                   | ±0.2 |
| Polarization                                | Right-Handed Circular | -    |
| Impedance (Ω)                               | 50                    | -    |
| Frequency Temperature Coefficient (ppm/ºC)  | 0±10                  | -    |

- **Amplifier Specifications are listed below:**

| Item              | Specifications |
| ----------------- | -------------- |
| Frequency Range   | 1575.42 MHz    |
| Gain              | 27 dB          |
| VSWR              | ≤ 2.0 V        |
| Noise Coefficient | ≤ 2.0 dBm      |
| DC Voltage        | 3 ~ 5 V        |
| DC Current        | 5 ± 2 mA       |

- **Environmental test performance specifications are listed below:**

| Item              | Normal Temp. | High Temp (1)\* | Low Temp (2)\* |
| ----------------- | ------------ | --------------- | -------------- |
| Amplifier Gain    | 27dB ± 2.0   | 27dB ± 2.0      | 27dB ± 2.0     |
| VSWR              | ≤ 2.0        | ≤ 2.0           | ≤ 2.0          |
| Noise Coefficient | ≤ 2.0        | ≤ 2.0           | ≤ 2.0          |

:::tip 📝 NOTE
**1** - High temperature test: soap in temperature (85º C) and humidity (95%) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.

**2** - Low temperature test: soap in temperature (-40º C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change
:::

#### Electrical Characteristics

The Pilot Gateway operates at **5V/2.5A**. It can be powered by micro USB with 5V.

| Parameter                   | Min. | Typical | Max    |
| --------------------------- | ---- | ------- | ------ |
| Current in CAT M mode       | -    | 300mA   | -      |
| Current in GSM mode (peak） | -    | -       | 3500mA |
| Cellular power              | -    | 10mA    | -      |

#### Environmental Requirements

The table below lists the operation and storage temperature requirements:

| Parameter                   | Min.   | Typical | Max    |
| --------------------------- | ------ | ------- | ------ |
| Operation Temperature Range | -20 ºC | +25 ºC  | +65 ºC |
| Extended Temperature Range  | -40 ˚C |         | +85 ˚C |
| Storage Temperature Range   | -40 ˚C |         | +85 ˚C |

### Software

Download the latest firmware of RAK7243 and RAK7243C in the table provided below.

#### Firmware

| Model                  | Raspberry Pi Board   | Firmware Version | Source                                                                                                             |
| ---------------------- | -------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------ |
| RAK7243C WisGate Developer D3 Gateway  | Raspberry Pi 3 / 3B+ | 4.2.0R           | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243_Latest_Firmware.zip)  |
| RAK7243C WisGate Developer D3+ Gateway | Raspberry Pi 3 / 3B+ | 4.2.0R           | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243C_Latest_Firmware.zip) |

## Models / Bundles


| Part Number    | Package                                                                               | Description                                                                                                                  |
| -------------- | ------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| RAK7243-1x-142 | With 1x LoRa Antenna, 1x GPS Antenna, 2x LTE Antenna, 1x Power Adapter and 1x SD card | EG95-E version for Cat 4 Cellular, GPS and for EU433 / Cn470 / IN865 / EU868 / US915 / AU915 / AS920 / AS923 / KR920 regions |
| RAK7243-1x-141 | With 1x LoRa Antenna, 1x GPS Antenna, 2x LTE Antenna, 1x Power Adapter and 1x SD card | ECG95-NA version for Cat 4 Cellular, GPS and for US915 / AU915 / AS920 / AS923 / KR920 regions                               |
| RAK7243-0x-000 | With 1x LoRa Antenna, 1x GPS Antenna, 1x LTE Antenna, 1x Power Adapter and 1x SD card | Without Cellular version for EU433 / CN470 / IN865 / EU868 / US915 / AU915 / AS920 / AS923 / KR920 regions                   |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />


