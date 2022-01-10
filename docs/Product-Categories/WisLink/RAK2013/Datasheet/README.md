---
tags: 
  - datasheet
  - wislink
  - RAK2013
prev: ../Overview/
next: false
rak_desc: Provides comprehensive information about your RAK2013 WisLink Cellular Pi HAT to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lte/rak2013/datasheet/RAK2013_home.png

---

# RAK2013 WisLink Cellular Pi HAT Datasheet

<!-- <rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/rak2013.jpg"
  width="50%"
  caption="RAK2013 WisLink Cellular Pi HAT Board"
/> -->

## Overview

### Description

The RAK2013 is a Raspberry Pi 3B+ edition cellular communications module that supports Low-Power Wide-Area (LPWA) connectivity to Internet-of-Things (IoT) devices. It has several configuration options including BG96 / EG91 / EG95 for 4G/LTE, NB-IoT, CAT-M, CAT1 or CAT 4 cellular protocol. This device integrates audio codec and audio amplifier supporting Voice-over-LTE (VoLTE) in high definition (HD) and uninterrupted voice calls. For easy use, there are earphone connector, MIC connector and speaker connector with audio amplifier.

The module is supported with extendable sensor board connected that follows the mikroBus standard. MikroBus has many kinds of sensor board, such as temperature, humidity, 3 axis sensor and light sensor, allowing easy sensor data transmission. Because of its wide range of supported sensors, it is suitable for applications such as environmental monitoring and presence sensing, that require cellular connectivity.

The RAK2013 is compatible with RAK2245 Pi HAT module via the onboard 40 pin header. It can function as a cellular backhaul to gateway, providing an even greater flexibility for IoT solutions that require cellular as an option for ensuring service reliability.

### Features

- Compatible with Raspberry Pi 3B+ edition specification.
- Quectel BG96/EG91/EG95 for NB-IOT / CAT-M / CAT1 LTE / CAT4 LTE.
- Supports Voice over CAT-M or VoLTE.
- Supports Nano SIM card or eSIM card.
- Integrates audio codec and audio amplifier.
- Integrates MikroBus interface to support sensor extended board.
- Can be added to another Pi HAT to support LoRa concentrator.
- Supports USB connector for higher data rate.
- Supports GPS function(only for BG96 module) .
- SMA/IPEX antenna optional for LTE and GPS.
- Supports I2C, GPIOs, UART and ADC interfaces for Raspberry board.
- Supports EEPROM to configure IOs automatically.

## Specifications

### Overview

The overview shows the top view of the RAK2013 WisLink Cellular Pi HAT and its corresponding outer dimension. It also presents the block diagram that shows the internal architecture of the board.

#### Module Overview

Here is the top view and external interfaces of RAK2013 WisLink Cellular Pi HAT add-on board.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/components-of-rak2013-cellular.jpg"
  width="65%"
  caption="Components of RAK2013 WisLink Cellular Pi HAT"
/>

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/nano-sim-card-slot-and-esim-chip-in-rak2013.jpg"
  width="65%"
  caption="Nano Sim Card Slot and ESIM Chip in RAK2013"
/>

The outer dimension of the RAK2013 measures 65.0 x 56.0 mm as shown below.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/rak2013-board-dimension.jpg"
  width="50%"
  caption="RAK2013 WisLink Cellular Pi HAT Board Dimension"
/>

#### Block Diagram

The diagram below shows the internal architecture and external interfaces of RAK2013.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/block-diagram-rak2013.png"
  width="80%"
  caption="RAK2013 WisLink Cellular Pi HAT Board"
/>

### Hardware

The hardware is categorized into eight parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board in terms of electrical, mechanical and environmental. 

#### Interfaces

It is built with **Quectel BG96/EG91/EG95 module** and compatible with **Raspberry Pi HAT**. It provides the following interfaces, headers, jumpers, button and connectors:

- 40-pins Raspberry connector
- Micro USB
- MikroBus connector
- Earphone Jack
- MIC Jack
- Speaker Jack
- Reset Button
- PWRKEY Button
- Nano Sim Card slot
- LEDs
- Reset Button
- USB boot jumper

**IPEX Antenna Connectors**:

- LTE antenna
- GPS/LTE DIV antenna

##### Micro-B USB Interface

A Standard Micro-B USB compliant with USB 2.0 standard specification is used to provide an interface to connect our device to Raspberry Pi or a PC for control of the board and firmware upgrade. The Micro-B USB pin connection and definition is shown below:

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/micro-b-usb-connection.jpg"
  width="20%"
  caption="Micro-B USB Connection"
/>

| Pin | Description   |
| --- | ------------- |
| 1   | USB_VBUS(+5V) |
| 2   | USB-DM        |
| 3   | USB_DP        |
| 4   | NC            |
| 5   | GND           |

This USB port is connected to the BG96/EG91/EG95 USB interface. The USB interface is used for AT command communication, data transmission, software debugging and firmware upgrade.

##### LEDs

Three (3) LEDs are used to indicate operating status, here are their functions:

| LED Color | Function  | LED Status | Description                                     |
| --------- | --------- | ---------- | ----------------------------------------------- |
| Green     | Power LED | ON         | Indicates that the power is good.               |
| Blue      | Status    | ON         | The module is powered on.                       |
|           |           | OFF        | The module is powered off.                      |
| Red       | NETLIGHT  | ON         | Indicates the module's network activity status. |
|           |           | OFF        | Not registered to the network.                  |

##### RESET Push Button

Reset Push Button is used to reset the BG96/EG91/EG95 module. To reset the module, push the Reset Button for 1 second.

##### PWRKEY Push Button

When either of Quectel BG96 / EG91 / EG95 module is in power off mode, it can be turned on to normal mode by driving the PWRKEY pin to a low level for at least 100 ms. Note that the module is still in power off mode even when plugging in the power socket, thus, press the PWRKEY to power up the module. When the module is in normal mode, it can be turned to power off mode by pressing the PWRKEY button.

##### Antenna RF interface

The modules have two RF interfaces for LTE antenna and GPS/LTE DIV antenna over standard UFL connectors (Hirose U. FL-R-SMT) with a characteristic impedance of 50Ω. The RF ports support both the transmitter and receiver, providing the antenna interface.

#### Pin Definition

RAK2013 board is composed of four connectors: **J3**, **J15**, **J16** and **J17**.

##### J3 - Boot Jumper

- Jumper for BG96/EG91/EG95 USB boot
- J3 open: boot normally.
- J3 shorted: Force the module to boot from USB port.

##### J15 - Raspberry Connector

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/rak2013-raspberry-connector.jpg"
  width="85%"
  caption="RAK2013 Raspberry Connector"
/>

The table below shows the pin connections of the raspberry connector.

| Pin Number | RAK2013             | Raspberry Definition |
| ---------- | ------------------- | -------------------- |
| 1          | NC                  | 3V3                  |
| 2          | CONN_5V0            | 5V                   |
| 3          | SDA_to_MikroBus     | GPIO2 (SDA1)         |
| 4          | CONN_5V0            | 5V                   |
| 5          | SCL_to_MikroBus     | GPIO3 (SCL1)         |
| 6          | GND                 | GND                  |
| 7          | PA_SHNT             | GPIO4 (GCLK)         |
| 8          | BG96_RX             | GPIO14 (TXD0)        |
| 9          | GND                 | GND                  |
| 10         | BG96_TX             | GPIO15 (RXD0)        |
| 11         | NC                  | GPIO17 (GPIO_GEN0)   |
| 12         | BG96_PWRKEY         | GPIO18 (GPIO_GEN1)   |
| 13         | RST\_ MikroBus      | GPIO27 (GPIO_GEN2)   |
| 14         | GND                 | GND                  |
| 15         | BG96_DTR            | GPIO22 (GPIO_GEN3)   |
| 16         | Reserved for GPS TX | GPIO23 (GPIO_GEN4)   |
| 17         | NC                  | 3V3                  |
| 18         | Reserved for GPS RX | GPIO24 (GPIO_GEN5)   |
| 19         | MikroBus_MOSI       | GPIO10 (SPI_MOSI)    |
| 20         | GND                 | GND                  |
| 21         | MikroBus \_MISO     | GPIO9 (SPI_MISO)     |
| 22         | MikroBus \_INT      | GPIO25 (GPIO_GEN6)   |
| 23         | MikroBus \_CLK      | GPIO11 (SPI_SCLK)    |
| 24         | NC                  | GPIO8 (SPI_CE0_N)    |
| 25         | GND                 | GND                  |
| 26         | MikroBus \_CS       | GPIO7 (SPI_CE1_N)    |
| 27         | ID_SDA              | ID_SD                |
| 28         | ID_SCL              | ID_SC                |
| 29         | BG96_W_DISABLE      | GPIO5                |
| 30         | GND                 | GND                  |
| 31         | BG96_RESET          | GPIO6                |
| 32         | MikroBus_PWM        | GPIO12               |
| 33         | NC                  | GPIO13               |
| 34         | GND                 | GND                  |
| 35         | NC                  | GPIO19               |
| 36         | BG96_PSM            | GPIO16               |
| 37         | BG96*AP* READY      | GPIO26               |
| 38         | BG96_RI             | GPIO20               |
| 39         | GND                 | GND                  |
| 40         | BG96_STATUS         | GPIO21               |

##### J16 and J17 – MikroBus Interface

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/mikroBUS_Pinout.png"
  width="80%"
  caption="MikroBus Interface"
/>

#### RF Characteristics

##### Frequency Bands and Data Rate

RAK2013 supports different frequency bands based on module mounted on the board.

###### BG96 Module

**BG96** is a series of LTE Cat M1/Cat NB1/EGPRS module offering a maximum data rate of **300Kbps downlink** and **375Kbps uplink**.

| Frequency     | BG96                                    |
| ------------- | --------------------------------------- |
| **LTE - FDD** | B1 / B2 / B3 / B4 / B5 / B8 / B12 / B18 |
| **LTE - TDD** | B39 (for CAT M1 only)                   |
| **EGPRS**     | 850 / 900 / 1800 / 1900 MHz             |

###### EG91 Module

**Quectel EG91** is a series of LTE CAT 1 module optimized specially for M2M and IoT applications. It delivers M2M-optimized speeds of **10Mbps downlink** and **5Mbps uplink**. This makes the EG91 an ideal solution for numerous IoT applications that are not reliant on high speed connectivity but still require the longevity and reliability of LTE networks.

|   Frequency    |             EG91-E             |         EG91-NA          |
| :------------: | :----------------------------: | :----------------------: |
|  **LTE FDD**   | B1 / B3 / B7 / B8 / B20 / B28A | B2 / B4 / B5 / B12 / B13 |
|   **WCDMA**    |            B1 / B8             |       B2 / B4 / B5       |
| **GSM / EDGE** |         900 / 1800 MHz         |            -             |
|   **Region**   |             Europe             |      North America       |

###### EG95 Module

**Quectel EG95** is a series of LTE category 4 module optimized specially for M2M and IoT applications. Adopting 3GPP Rel. 11 LTE technology, it delivers **150Mbps downlink** and **50Mbps uplink** data rates.

|   Frequency    |             EG95-E             |         EG95-NA          |
| :------------: | :----------------------------: | :----------------------: |
|  **LTE FDD**   | B1 / B3 / B7 / B8 / B20 / B28A | B2 / B4 / B5 / B12 / B13 |
|   **WCDMA**    |            B1 / B8             |       B2 / B4 / B5       |
| **GSM / EDGE** |         900 / 1800 MHz         |            -             |
|   **Region**   |             Europe             |      North America       |

#### Antennas

For module built-in BG96, there is one LTE antenna and one GPS antenna. For module built-in EG91/EG95, there are two LTE antennas, and no GPS antenna with the module.

##### 1. LTE Antenna

###### Overview

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/lte-antenna.jpg"
  width="60%"
  caption="LTE Antenna"
/>

###### Antenna Dimension

The LTE antenna for the RAK2013 covers working frequency band from **824 MHz to 2690 MHz**.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/lte-antenna-dimension.jpg"
  width="60%"
  caption="LTE Antenna Dimension"
/>

###### Antenna Parameter

The specifications and parameter of the antenna are shown below:

<table>
    <thead>
        <tr>
            <th>Parameters</th>
            <th colspan ="7">Specifications</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Frequency (MHz)</td>
            <td>700</td>
            <td>800</td>
            <td>880</td>
            <td>960</td>
            <td>1710</td>
            <td>1880</td>
            <td>2170</td>
        </tr>
        <tr>
            <td>Voltage Standard Wave Ratio (VSWR)</td>
            <td>9.3</td>
            <td>4.6</td>
            <td>3.6</td>
            <td>4.9</td>
            <td>9.3</td>
            <td>4.4</td>
            <td>15</td>
        </tr>
         <tr>
            <td>Gain(dBi)</td>
            <td>1.63</td>
            <td>1.84</td>
            <td>1.96</td>
            <td>2.23</td>
            <td>0.03</td>
            <td>0.01</td>
            <td>1.97</td>
        </tr>
        <tr>
            <td>Working Temperature & Humidity</td>
            <td colspan="7">T: -35°C ~ +80°C, H: 0% ~ 95%</td>
        </tr>
          <tr>
            <td>Storage Temperature & Humidity</td>
            <td colspan="7">T: -40°C ~ +85°C, H: 0% ~ 95%</td>
        </tr>
    </tbody>
</table>

##### 2. GPS Antenna

###### Overview

The GPS antenna for RAK2013 is shown below. Only the RAK2013 with BG96 supports the GPS function.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/gps-antenna.jpg"
  width="50%"
  caption="GPS Antenna"
/>

###### GPS Antenna Dimensions

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/gps-antenna-dimensions.jpg"
  width="75%"
  caption="GPS Antenna Dimensions"
/>

###### GPS Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions |   Temperature   | Humidity |
| :--------: | :-------------: | :------: |
|  Working   | -35 ºC ~ +80 ºC | 0% ~ 95% |
|  Storage   | -40 ºC ~ +85 ºC | 0% ~ 95% |

###### GPS Antenna Parameter

The antenna specifications are listed in the table below:

| Item                                       |     Specification     | PET  |
| ------------------------------------------ | :-------------------: | :--: |
| Range of Receiving Frequency               |      1575.42±1.1      | ±2.5 |
| Center Frequency (MHz) w/ 30mm2 GND plane  |        1575.42        | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10dB)      |          ≥10          | ±0.5 |
| VSWR (in Center Frequency)                 |         ≤2.0          | ±0.5 |
| Gain (Zenith) (dBi Typ) w/ 70mm2 GND Plane |          4.5          | ±0.5 |
| Axial Ratio (dB) w/ 70mm2 GND Plane        |          3.0          | ±0.2 |
| Polarization                               | Right-Handed Circular |  -   |
| Impedance (Ω)                              |          50           |  -   |
| Frequency Temperature Coefficient (ppm/ºC) |          ±10          |  -   |

The amplifier specifications are listed in the table below:

|       Item        | Specifications |
| :---------------: | :------------: |
|  Frequency Range  |  1575.42 MHz   |
|       Gain        |     27 dB      |
|       VSWR        |    ≤ 2.0 V     |
| Noise Coefficient |   ≤ 2.0 dBm    |
|    DC Voltage     |    3 ~ 5 V     |
|    DC Current     |    5 ± 2 mA    |

The environmental test performance specifications are listed below:

|       Item        | Normal Temp |  High Temp  |  Low Temp   |
| :---------------: | :---------: | :---------: | :---------: |
|  Amplifier Gain   | 27 dB ± 2.0 | 27 dB ± 2.0 | 27 dB ± 2.0 |
|       VSWR        |    ≤ 2.0    |    ≤ 2.0    |    ≤ 2.0    |
| Noise Coefficient |    ≤ 2.0    |    ≤ 2.0    |    ≤ 2.0    |

#### Electrical Characteristics

##### Power Requirements

The RAK2013 board operates at 5 volts. It can be powered by micro USB with 5V or powered by the Raspberry Pi board though 40-pin connector. Be cautious because the current of RAK2013 is about 300mA for average when working in CAT- M1 mode, it can be reach to 2A for peak when working in GSM900 mode. So you must carefully evaluate your power adapter’s rating.

|          Parameter          | Min | Typical |   Max   |
| :-------------------------: | :-: | :-----: | :-----: |
|    Current in CAT M mode    |  -  | 300 mA  |    -    |
| Current in GSM mode (peak） |  -  |    -    | 2000 mA |
|       Power off mode        |  -  |  10 mA  |    -    |

#### Mechanical Characteristics

##### Module Dimensions

Here is the detailed dimension of RAK2013 module. For full specification including electrical requirements, please visit this [**site**](https://github.com/raspberrypi/hats).

**Minimum HAT requirements**:

- The board must be 65 x 56 mm or 65 x 56.5 mm.
- The board must have 3 mm radius corners.
- It must have 4 mounting holes in corners and should follow mounting hole specifications.
- The board must have full 40W GPIO connector.

**Mounting Holes specifications**:

- Mounting holes should ideally non-plated. If plated, hole and grounding must be electrically isolated. (Do not connect these to GND)
- Mounting hole ground should be 6.2 mm minimum and either isolated copper or bare board (open solder mask).
- Mounting holes should be drilled to 2.75 ± 0.5 mm.

:::tip 📝 NOTE
It is recommended to provide slots or cutouts for camera and display flexes so camera and display can still be used with the HAT attached.
:::

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/mechanical-dimensions.jpg"
  width="75%"
  caption="Mechanical Dimensions"
/>

#### Environmental Requirements

##### Device

The table below lists the operation and storage temperature requirements:

|       Parameter       |  Min   | Typical |  Max   |
| :-------------------: | :----: | :-----: | :----: |
| Operation Temp. Range | -35 ºC | +25 ºC  | +75 ºC |
| Extended Temp. Range  | -40 ˚C |    -    | +80 ˚C |
|  Storage Temp. Range  | -40 ˚C |    -    | +80 ˚C |

#### Schematic Diagram

The schematic diagram shows the power and MikroBus interface of RAK2013.

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/power-and-mikrobus-interface.jpg"
  width="100%"
  caption="Power and MikroBus Interface"
/>

Here is the BG96 and Raspberry Interface of RAK2013:

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/bg96-and-raspberry-interface.jpg"
  width="100%"
  caption="BG96 and Raspberry Interface"
/>

Below is the audio codec and amplifier schematics of RAK2013:

<rk-img
  src="/assets/images/wislink-lte/rak2013/datasheet/audio-codec-and-amplifier.jpg"
  width="100%"
  caption="Audio Codec and Amplifier"
/>
