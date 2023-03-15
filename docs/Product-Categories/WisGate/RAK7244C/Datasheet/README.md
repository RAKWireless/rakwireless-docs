---
rak_desc: Provides comprehensive information about your RAK7244 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7244c/quickstart/overview/RAK7244C.png
tags:
  - datasheet
  - wisgate
  - RAK7244C
prev: ../Supported-LoRa-Network-Servers/
next: ../Testing-Report/
---

# RAK7244C WisGate Developer D4+ Datasheet

## Overview
### Description

The **RAK7244C WisGate Developer D4+ Gateway** is a device that consists of Raspberry Pi 4, RAK2245 Pi HAT which includes a GPS module and a Heat Sink for better performance and thermal heat dissipation management, and a RAK2013 Cellular Pi HAT and its housing is built with an aluminum casing.

For the built-in RAK2245 Pi HAT, the SX1301 chip from Semtech is used, which is a built-in LPWAN concentrator IP core, a powerful digital signal processing engine. It can receive up to 8 LoRa packets simultaneously sent with different spreading factors on different channels and is available in multiple options so it can be used for international standard bands. This unique capability allows for the implementation of innovative network architectures advantageous over other short-range systems. For the build-in RAK2013 Cellular Pi HAT, it supports optional QUECTEL BG96 / EG91 / EG95 which can support NB-IoT / CAT-M / CAT1 LTE / CAT4 LTE. It follows Raspberry Pi specifications and is easy to mount with Raspberry Pi and RAK2245 Pi HAT module.

Pilot Gateway Pro is ideal for prototyping, proof-of-concept demonstration, or evaluation. It includes a ready-to-use gateway OS that can be connected to a LoRaWan server. Also, it is developer-friendly and easy even for not-so-techy users to set up the LoRaWan system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm, and other IoT enterprise applications.

### Features

- Preassembled, fully functioning gateway
- **SX1301 baseband processor**, emulates 49 x LoRa demodulators 10 programmable parallel demodulation paths, supports 8 uplinks channels and 1 downlink channel
- Support optional cellular module (Quectel BG96 or EG91 or EG95) for NB-IOT/CAT-M/CAT1 LTE/CAT4 LTE
- Built-in **Ublox MAX-7Q GPS Module**
- Built-in heat sink for thermal heat dissipation management
- Supports 5&nbsp;V / 2.5&nbsp;A power supply
- TX power up to 27&nbsp;dBm, RX sensitivity down to -139&nbsp;dBm@SF12, BW 125&nbsp;kHz
- Frequency band support: EU433, CN470, RU864, IN865, EU868, US915, AU915, KR920, AS923
- Housing with top cover, body, bottom cover with riveted motherboard standoff
- Includes Pi ready **ID EEPROM**, **GPIO** setup, and a device tree that  can be automatically configured from vendor information
- Supports fully open-source code connected to a LoRaWAN server


## Specifications

### Overview

The overview covers the board overview of RAK7244C and its block diagram that discusses the basic concept of the LoRaWAN system.

#### Board Overview

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/1.board-overview.png"
  width="75%"
  caption="RAK7244C outer dimensions"
/>

#### Block Diagram

**Figure 2** shows the basic concept for the LoRaWAN system. **RAK7244C Pilot Gateway** is the central hardware solution for all LoRa-based radio communications. It receives and transmits radio messages. The processing of radio messages, as well as the protocol-related tasks, are done by the embedded host system (Raspberry Pi). Received and processed radio messages are sent to a LoRaWAN server.

The concrete segmentation of the protocol-related tasks is outside the scope of this document.

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/2.system-structure.png"
  width="100%"
  caption="RAK7244C WisGate Developer D4+ Gateway system structure"
/>


### Hardware

The hardware specification is categorized into six parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the parameters and standard values of the antenna and the electrical and environmental requirements.

#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/3.interfacing.png"
  width="80%"
  caption="RAK7244C Interfaces"
/>

:::tip 📝 NOTE

The LTE antenna (DIV) is used only for the EG91/ EG95 Version and is reserved for the BG96 Version.
:::


#### Pin Definition

The RAK7244C WisGate Developer D4+ Gateway is composed of the LPWAN Concentrator RAK2245 Pi HAT and the RAK2013 Pi HAT for cellular connectivity.

##### RAK2245 Pi HAT

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/4.rak2245-pi-hat.png"
  width="35%"
  caption="RAK2245 Pi HAT"
/>

RAK2245 Pi HAT is an LPWAN Concentrator board that follows the Pi HAT standard and can be mounted to a Pi board with a 40-pin connector.

- For detailed information about the RAK2245, go to the [RAK2245 Pi HAT Datasheet](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2245-Pi-HAT/Datasheet/).


##### RAK2013 Cellular


<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/5.rak2013.png"
  width="35%"
  caption="RAK2013 Cellular"
/>

RAK2013 is an add-on board following Raspberry Pi HAT standard. It can transmit UART data from Raspberry Pi to a Cellular network. It can support several cellular protocols, such as NB-IoT, CAT-M, CAT1, or CAT 4, by choosing different modular on the board.

The RAK2013 integrates an audio codec and audio amplifier on it with the carrier operator's network. It can support the VoLTE function. For easy use, there are an earphone connector, a MIC connector, and a speaker connector with an audio amplifier.

- For detailed information about the RAK2013, go to [RAK2013 Cellular Datasheet](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2013/Datasheet/).



<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/6.hardware-structure.png"
  width="75%"
  caption="Cellular hardware structure"
/>



#### RF Characteristics

##### Operating Frequencies

The pilot gateway supports all LoRaWAN frequency channels shown below. The operating frequency is configured while building the firmware from the source code.

|    Region     | Frequency (MHz)  |
| :-----------: | :--------------: |
|    Europe     | EU433 <br> EU868 |
|     China     |      CN470       |
| North America |      US915       |
|     Asia      |      AS923       |
|   Australia   |      AU915       |
|     Korea     |      KR920       |
|     India     |      IN865       |
|    Russia     |      RU864       |




#### LoRa

##### Transmitter RF

The RAK2245 has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

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



- T=25&nbsp;℃, VDD=5&nbsp;V (Typ.) if nothing else is stated.


|                Parameter                |        Condition        |      Min      | Typ.  |      Max       |
| :-------------------------------------: | :---------------------: | :-----------: | :---: | :------------: |
|             Frequency Range             |            -            | 863&nbsp;Mhz  |   -   |  870&nbsp;Mhz  |
|          Modulation Techniques          |        FSK/LoRa         |       -       |   -   |       -        |
| TX Frequency Variations vs. Temperature | Power Level Setting: 20 |  -3&nbsp;kHz  |   -   |  +3&nbsp;kHz   |
|   TX Power Variation vs. Temperature    | Power Level Setting: 20 |  -5&nbsp;dBm  |   -   |  +5&nbsp;dBm   |
|           TX Power Variation            |            -            | -1.5&nbsp;dBm |   -   | >+1.5&nbsp;dBm |

##### Receiver RF

It is highly recommended, to use optimized RSSI calibration values, which is part of the HAL v3.1. For both, Radio 1 and 2, the RSSI-Offset should be set - 169.0. The following table gives the typical sensitivity level of the RAK2245.


| Signal Bandwidth (kHz) | Spreading Factor | Sensitivity (dBm) |
| :--------------------: | :--------------: | :---------------: |
|          125           |        12        |       -139        |
|          125           |        7         |       -126        |
|          250           |        12        |       -136        |
|          250           |        7         |       -123        |
|          500           |        12        |       -134        |
|          500           |        7         |       -120        |



#### Cellular

The pilot gateway supports different frequency bands according to the modular mounted on the board.

##### BG96 Module

BG96 is a series of LTE Cat M1/Cat NB1/EGPRS module offering a maximum data rate of 300&nbsp;kbps downlink and 375&nbsp;kbps uplink.

|  Frequency   |                                 BG96                                  |
| :----------: | :-------------------------------------------------------------------: |
| LTE(FDD-LTE) | B1 / B2 / B3 / B4 / B5 / B8 / B12 / B13 / B18 / B19 / B20 / B26 / B28 |
| LTE(TDD-LTE) |                         B39 (for CAT M1 only)                         |
|    EGPRS     |                   850 / 900 / 1800 / 1900&nbsp;MHz                    |


##### EG95 Module

Quectel EG95 is a series of LTE category four (4) modules optimized especially for M2M and IoT applications. Adopting 3GPP Rel. 11 LTE technology, it delivers 150&nbsp;Mbps downlink and 50&nbsp;Mbps uplink data rates.


| Frequency  |             EG95-E             |         EG95-NA          |
| :--------: | :----------------------------: | :----------------------: |
|  LTE FDD   | B1 / B3 / B7 / B8 / B20 / B28A | B2 / B4 / B5 / B12 / B13 |
|   WCDMA    |            B1 / B8             |       B2 / B4 / B5       |
| GSM / EDGE |      900 / 1800&nbsp;MHz       |            -             |
|   Region   |             Europe             |      North America       |


#### Antenna Specifications

##### LoRa

The LoRa Antenna with RP-SMA male connector is shown in **Figure 7**.

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/7.lora-antenna.png"
  width="60%"
  caption="LoRa Antenna Overview"
/>


###### Antenna Dimensions

The antenna's mechanical dimensions are shown in **Figure 8**.

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/8.antenna-dimension.png"
  width="60%"
  caption="LoRa Antenna Dimension in mm"
/>


###### Antenna Parameters


|               Items                |              Specifications              |
| :--------------------------------: | :--------------------------------------: |
| Voltage Standard Wave Ratio (VSWR) |                  1.5:1                   |
|                Gain                |              -2.0&nbsp;dBi               |
|   Working Temperature & Humidity   | T:-35&nbsp;ºC ~ +80&nbsp;ºC, H: 0% ~ 95% |
|   Storage Temperature & Humidity   | T:-40&nbsp;ºC ~ +85&nbsp;ºC, H: 0% ~ 95% |


##### LTE

For a built-in BG96, there is one LTE antenna and one GPS antenna. For module built-in EG91/EG95, there are two LTE antennas and no GPS antenna.


<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/9.lte-antenna.png"
  width="60%"
  caption="LTE Antenna"
/>

###### Antenna Dimensions


<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/10.antenna-dimensions.png"
  width="60%"
  caption="LTE Antenna dimensions"
/>

###### Antenna Parameters


|               Items                |                 Specifications                 |
| :--------------------------------: | :--------------------------------------------: |
|          Frequency (MHz)           |   700 / 800 / 880 / 960 / 1710 / 1880 / 2170   |
| Voltage Standard Wave Ratio (VSWR) |     9.3 / 4.6 / 3.6 / 4.9 / 9.3 / 4.4 / 15     |
|                Gain                | 1.63 / 1.84 / 1.96 / 2.23 / 0.03 / 0.01 / 1.97 |
|   Working Temperature & Humidity   |    T:-35&nbsp;ºC ~ +80&nbsp;ºC, H: 0% ~ 95%    |
|   Storage Temperature & Humidity   |    T:-40&nbsp;ºC ~ +85&nbsp;ºC, H: 0% ~ 95%    |


#### GPS

The GPS antenna with SMA Male Connector for Developer Gateway is shown in **Figure 11**.

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/11.gps-antenna.png"
  width="60%"
  caption="GPS Antenna"
/>

##### GPS Antenna Dimensions

<rk-img
  src="/assets/images/wisgate/rak7244c/datasheet/12.gps-antenna-dimensions.png"
  width="70%"
  caption="GPS Antenna dimensions"
/>


##### GPS Environmental Requirements

| Conditions |        Temperature        | Humidity |
| :--------: | :-----------------------: | :------: |
|  Working   | -35&nbsp;ºC ~ +80&nbsp;ºC | 0% ~ 95% |
|  Storage   | -40&nbsp;ºC ~ +85&nbsp;ºC | 0% ~ 95% |


##### GPS Antenna Parameters


<b> Antenna Specifications </b>

|                       Item                        |    Specifications     |  PET  |
| :-----------------------------------------------: | :-------------------: | :---: |
|           Range of Receiving Frequency            |      1575.42±1.1      | ±2.5  |
|  Center Frequency (MHz) w/ 30&nbsp;mm2 GND plane  |          ≥10          | ±0.5  |
|    Bandwidth (MHz) (Return Loss ≤ -10&nbsp;dB)    |      1575.42±1.1      | ±2.5  |
|            VSWR (in Center Frequency)             |         ≤2.0          | ±0.5  |
| Gain (Zenith) (dBi Typ.) w/ 70&nbsp;mm2 GND Plane |          4.5          | ±2.5  |
|     Axial Ratio (dB) w/ 70&nbsp;mm2 GND Plane     |          3.0          | ±0.2  |
|                   Polarization                    | Right-handed circular |   -   |
|                   Impedance (Ω)                   |          50           |   -   |
|    Frequency Temperature Coefficient (ppm/ºC)     |         0±10          |   -   |

<br>

<b> Amplifier Specifications </b>

|       Item        |  Specifications  |
| :---------------: | :--------------: |
|  Frequency range  | 1575.42&nbsp;MHz |
|       Gain        |   27&nbsp;dBi    |
|       VSWR        |     ≤ 2.0 V      |
| Noise coefficient |  ≤ 2.0&nbsp;dBm  |
|    DC voltage     |   3 ~ 5&nbsp;V   |
|    DC current     |  5 ± 2&nbsp;mA   |


<br>

<b> Environmental Test Performance Specifications </b>

|       Item        |   Normal Temp.   |  High Temp (1)*  |  Low Temp (2)*   |
| :---------------: | :--------------: | :--------------: | :--------------: |
|  Amplifier gain   | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 |
|       VSWR        |      ≤ 2.0       |      ≤ 2.0       |      ≤ 2.0       |
| Noise coefficient |      ≤ 2.0       |      ≤ 2.0       |      ≤ 2.0       |

## Software

Download the latest firmware of **RAK7244C** in the table provided below.


| Model    | Raspberry Pi Board | Firmware Version | Source                                                                                                                      |
| -------- | ------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| RAK7244C | Raspberry Pi 4     | 4.2.6R           | [Download](https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244C/Firmware/RAK7244C_Latest_Firmware.zip) |


