---
rak_desc: Provides comprehensive information about your RAK7244 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7243/quickstart/overview/RAK7243_home.png
tags:
  - datasheet
  - wisgate
  - RAK7243
prev: ../Supported-LoRa-Network-Servers/
next: ../Testing-Report/
---

# RAK7243 WisGate Developer D3 Datasheet

## Overview
### Description

The **RAK7243 WisGate Developer D3 Gateway** is a device that consists of Raspberry Pi 3B+, RAK2245 Pi HAT, which includes a GPS module, and a heat sink for better performance and thermal heat dissipation management. Its housing is built with an aluminum casing. 

For the built-in RAK2245 Pi HAT, the SX1301 chip from Semtech is used, which is a built-in LPWAN concentrator IP core, a powerful digital signal processing engine. It can receive up to 8 LoRa packets simultaneously sent with different spreading factors on different channels and is available in multiple variants, so it can be used for international standard bands. This unique capability allows for the implementation of innovative network architectures advantageous over other short-range systems. 


Pilot Gateway Pro is ideal for prototyping, proof-of-concept demonstration, or evaluation. It includes a ready-to-use gateway OS that can be connected to a LoRaWan server. Also, it is developer-friendly and even for not-so-techy users to set up the LoRaWan system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm, and other IoT enterprise applications.

### Features

- Preassembled, fully functioning gateway
- **SX1301 baseband processor**, emulates 49 x LoRa demodulators 10 programmable parallel demodulation paths, support 8 uplinks channel and 1 downlink channel
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

The overview covers the board overview of RAK7243 and its block diagram that discusses the basic concept of the LoRaWAN system.

#### Board Overview

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/1.board-overview.png"
  width="75%"
  caption="RAK7243 outer dimensions"
/>

#### Block Diagram

**Figure 2** shows the basic concept for the LoRaWAN system. **RAK7243 Pilot Gateway** is the central hardware solution for all LoRa-based radio communications. It receives and transmits radio messages. The processing of radio messages, as well as the protocol-related tasks, are done by the embedded host system (Raspberry Pi). Received and processed radio messages are sent to a LoRaWAN server. 

The concrete segmentation of the protocol-related tasks is outside the scope of this document.

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/2.system-structure.png"
  width="100%"
  caption="RAK7243 WisGate Developer D3+ Gateway system structure"
/>


### Hardware

The hardware specification is categorized into seven parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the parameters and standard values of the antenna and the electrical and environmental requirements.

#### Interfaces

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/3.interfacing.png"
  width="80%"
  caption="RAK7243 Interfaces"
/>


#### Pin Definition

The RAK7243 WisGate Developer D3 Gateway is composed of the LPWAN Concentrator RAK2245 Pi HAT.

##### RAK2245 Pi HAT

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/4.rak2245-pi-hat.png"
  width="35%"
  caption="RAK2245 Pi HAT"
/>


RAK2245 Pi HAT is an LPWAN Concentrator board that follows the Pi HAT standard and can be mounted to a Pi board with a 40-pin connector.

- For detailed information about the RAK2245, go to the [RAK2245 Pi HAT Datasheet](https://docs.rakwireless.com/Product-Categories/WisLink/RAK2245-Pi-HAT/Datasheet/).


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


#### Antenna Specifications

##### LoRa

The LoRa Antenna with RP-SMA male connector shown in **Figure 7**.

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/7.lora-antenna.png"
  width="60%"
  caption="LoRa antenna overview"
/>


###### Antenna Dimensions

The antenna's mechanical dimensions are shown in **Figure 8**.

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/8.antenna-dimension.png"
  width="60%"
  caption="LoRa antenna dimension in mm"
/>


###### Antenna Parameters


|               Items                |              Specifications              |
| :--------------------------------: | :--------------------------------------: |
| Voltage Standard Wave Ratio (VSWR) |                  1.5:1                   |
|                Gain                |              -2.0&nbsp;dBi               |
|   Working Temperature & Humidity   | T:-35&nbsp;ºC ~ +80&nbsp;ºC, H: 0% ~ 95% |
|   Storage Temperature & Humidity   | T:-40&nbsp;ºC ~ +85&nbsp;ºC, H: 0% ~ 95% |


##### GPS

The GPS antenna with SMA Male Connector for Developer Gateway is shown in **Figure 11**.

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/11.gps-antenna.png"
  width="60%"
  caption="GPS antenna"
/>

###### GPS Antenna Dimensions

<rk-img
  src="/assets/images/wisgate/rak7243/datasheet/12.gps-antenna-dimensions.png"
  width="70%"
  caption="GPS antenna dimensions"
/>

                                                                     
###### GPS Environmental Requirements

| Conditions |        Temperature        | Humidity |
| :--------: | :-----------------------: | :------: |
|  Working   | -35&nbsp;ºC ~ +80&nbsp;ºC | 0% ~ 95% |
|  Storage   | -40&nbsp;ºC ~ +85&nbsp;ºC | 0% ~ 95% |


###### GPS Antenna Parameters


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

::: tip 📝 NOTE:

- **High-temperature test**: soap in temperature (85&nbsp;ºC) and humidity (95%) chamber for 24 hours and return to normal temperature (at least for 1 hour) without visual shape change.
- **Low-temperature test**: soap in temperature (-40&nbsp;ºC) chamber for 24 hours and return to normal temperature (at least for 1 hour) without visual shape change.

:::



#### Electrical Characteristics

The Pilot Gateway operates at 5&nbsp;V / 2.5&nbsp;A. It can be powered by micro USB with 5&nbsp;V.

|         Parameter          | Min.  |   Typical   |     Max.     |
| :------------------------: | :---: | :---------: | :----------: |
|   Current in CAT M mode    |   -   | 300&nbsp;mA |      -       |
| Current in GSM mode (peak) |   -   |      -      | 3500&nbsp;mA |
|       Cellular power       |   -   | 10&nbsp;mA  |      -       |

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements:

|          Parameter          |  Min.  | Typical |     Max.     |
| :-------------------------: | :----: | :-----: | :----------: |
| Operation Temperature Range | -20&nbsp;ºC |  25&nbsp;ºC  |      -       |
| Extended Temperature Range  | -40&nbsp;ºC |    -    | 3500&nbsp;mA |
|  Storage Temperature Range  | -50&nbsp;ºC |    -    |      -       |


## Software

Download the latest firmware of RAK7243 and RAK7243C in the table provided below.

|                 Model                  | Raspberry Pi Board  | Firmware Version |                                                       Source                                                       |
| :------------------------------------: | :-----------------: | :--------------: | :----------------------------------------------------------------------------------------------------------------: |
|  RAK7243 WisGate Developer D3 Gateway  | Raspberry Pi 3/ 3B+ |     4.2.6.R      | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243_Latest_Firmware.zip)  |
| RAK7243C WisGate Developer D3+ Gateway | Raspberry Pi 3/ 3B+ |     4.2.6.R      | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243C_Latest_Firmware.zip) |
