---
tags:
  - datasheet
  - wislink
prev: ../Overview/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK831-LoRa-Gateway/Certification-Report/CE%20Label%20and%20Label%20location_RED.pdf]
---

# RAK831 WisLink LPWAN Concentrator Datasheet

<!-- <rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/rak831-overview.png"
  width="50%"
  caption="RAK831 WisLink LPWAN Concentrator"
/> -->

## Overview

### Description

The concentrator module **RAK831** is designed for a wide variety of applications like **Smart Metering**, **IoT** (Internet of Things) and **M2M** (Machine-to-machine) applications. It is a multi- channel high performance Transceiver module designed to receive several LoRa packets simultaneously using different spreading factors on multiple channels. The concentrator module RAK831 can be integrated into a gateway as a complete RF front-end of this gateway. It provides the possibility to enable robust communication between a gateway and a huge amount of LoRa end-nodes spread over a wide range of distance. The RAK831 needs a host system for proper operation.

This is an ideal modular product to help you realize the whole Lora® system development. With the USB-SPI converter module FT2232, you can quickly make the software development in your PC. Also, you can integrate the concentrator module to your production product to realize the gateway function. This is very economic way to address for a huge variety of applications like Smart Grid, Intelligent Farm, intelligent Farm and Other IoT applications.

The RAK831 needs a host system like Raspberry Pi or WisAP (OpenWRT based) or WisCam for proper operation . The host processor can be a PC or MCU that will be connected to RAK831 via USB or SPI.

RAK831 is able to receive up to 8 LoRa packets simultaneously sent with different spreading factors on different channels. This unique capability allows the implementation of innovative network architectures advantageous over other short range systems:

End-point nodes (e.g. sensor nodes) can change frequency with each transmission in a random pattern. This provides vast improvement of the system robustness in terms of interference immunity and radio channel diversity.

Applications possible with the RAK831 include Smart Metering , Wireless Star Networks, Home, Building, Industrial automation, Remote Control, Wireless Sensors Network, M2M, IoT and Wireless Alarm and Security Systems.

### Features

- **Compact size** 80 mm 50 mm x 5 mm
- LoRaWAN modulation technology
- **Frequency bands**: 433 MHz, 470 MHz, 868 MHz, 915 MHz
- Orthogonal spreading factors
- **Minimum Sensitivity**: -142.5 dBm
- **Maximum Link Allotment**: 162 dB
- SPI interface
- SX1301 base band processor
- Emulates up to forty-nine (49) LoRa demodulators
- Twelve (12) parallel demodulation paths
- One (1) (G) FSK demodulator
- Two (2) SX1257 Tx/Rx front-ends High frequency
- Two (2) x SX1255 Tx/Rx front-ends low frequency
- **Supply voltage**: 5 Volts DC
- Optimized RF Interface 50
- Up to 23 dBm output power
- Optional GPS receiver
- **Line of Sight Range**: up to 15 kilometers

## Specifications

### Overview

The overview shows the top view of the RAK831 board and its outer dimension. It also presents the block diagram that discusses how the board works. 

#### Board Overview

##### Module Overview

The Concentrator Module currently available is in SPI version with its board shown below.

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/board-overview.png"
  width="90%"
  caption="RAK831 WisLink LPWAN Concentrator Board Overview"
/>

##### Module Dimensions

The outer dimensions of the RAK831 are given by **80 mm x 50mm** with ± 0.2 mm tolerance. The RAK831 provide four drills for screwing the PCB to another unit each with a drill diameter of 3 mm.

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/rak831-dimensions.png"
  width="60%"
  caption="RAK831 WisLink LPWAN Concentrator Board Dimension"
/>

#### Block Diagram

##### SX1301

The RAK831 includes Semtech’s SX1301 which is a digital baseband chip which includes a massive digital signal processing engine specifically designed to offer breakthrough gateway capabilities in the ISM bands worldwide. SX1301 integrates the LoRa concentrator IP.

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/block-diagram-sx1301.png"
  width="80%"
  caption="SX1301 Chip Block Diagram"
/>

The SX1301 is a smart baseband processor for long range ISM communication. In the receiver part, it receives I and Q digitized bit stream for one or two receivers (SX1257), demodulates these signals using several demodulators, adapting the demodulators settings to the received signal and stores the received demodulated packets in a FIFO to be retrieved from a host system (PC, MCU). In the transmitter part, the packets are modulated using a programmable (G)FSK/LoRa modulator and sent to one transmitter (SX1257). Received packets can be time-stamped using a GPS PPS input.

The SX1301 has an internal control block that receives microcode from the host system (e.g. PC, MCU). The microcode is provided by Semtech as a binary file to load into the SX1301 at power-on (see Semtech application support for more information).

The control of the SX1301 by the host system (PC, MCU) is made using a Hardware Abstraction Layer (HAL). The Hardware Abstraction Layer source code is provided by Semtech and can be adapted by the host system developers.

It is highly recommended to fully re-use the latest HAL as provided by Semtech on [https://github.com/Lora-net](https://github.com/Lora-net).

###### Block Diagram

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/block-diagram.png"
  width="100%"
  caption="RAK831 WisLink LPWAN Concentrator Block Diagram"
/>

The SX1301 digital baseband chip contains ten (10) programmable reception paths. These paths have differentiated levels of programmability and allow different use cases. It is important to understand the differences between these demodulation paths to make the best possible use from the system.

###### IF8 LORA® channel

This channel is connected to one SX1257 using any arbitrary intermediate frequency within the allowed range. This channel is LoRa only. The demodulation bandwidth can be configured to be 125, 250 or 500 kHz. The data rate can be configured to any of the LoRa available data rates (SF7 to SF12) but, as opposed to IF0 to IF7, only the configured data rate will be demodulated. This channel is intended to serve as a high speed backhaul link to other gateways or infrastructure equipment. This demodulation path is compatible with the signal transmitted by the SX1272 and SX1276 chip family.

###### IF9 (G) FSK channel

The IF9 channel is connected to a GFSK demodulator. The channel bandwidth and bit rate can be adjusted. This demodulator offers a very high level of configurability, going well beyond the scope of this document. The demodulator characteristics are essentially the same than the GFSK demodulator implemented on the SX1232 and SX1272 Semtech chips. This demodulation path can demodulate any legacy FSK or GFSK formatted signal.

###### IF0 to IF7 LORA® channels

Those channels are connected to one SX1257. The channel bandwidth is 125 kHz and cannot be modified or configured. Each channel IF frequency can be individually configured. On each of those channels any data rate can be received without prior configuration.

Several packets using different data rates (different spreading factors) may be demodulated simultaneously even on the same channel. Those channels are intended to be used for a massive asynchronous star network of 10000’s of sensor nodes. Each sensor may use a random channel (amongst IF0 to IF7) and a different data rate for any transmission.

Sensors located near the gateway will typically use the highest possible data rate in the fixed 125 kHz channel bandwidth (e.g. 6 kbit/s) while sensors located far away will use a lower data rate down to 300 bit/s (minimum LoRa data rate in a 125 kHz channel).

The SX1301 digital baseband chip scans the 8 channels (IF0 to IF7) for preambles of all data rates at all times.

The chip is able to demodulate simultaneously up to 8 packets. Any combination of spreading factor and intermediate frequency for up to 8 packets is possible (e.g. one SF7 packet on IF0, one SF12 packet on IF7 and one SF9 packet on IF1 simultaneously).

The SX1301 can detect simultaneously preambles corresponding to all data rates on all IF0 to IF7 channels. However, it cannot demodulate more than 8 packets simultaneously. This is because the SX1301 architecture separates the preamble detection and signal acquisition task from the demodulation process. The number of simultaneously demodulated packets (in this case 8) is an arbitrary system parameter and may be set to other values for a customer specific circuit.

The unique multi data-rate multi-channel demodulation capacity SF7 to SF12 and of channels IF0 to IF7 allows innovative network architectures to be implemented.

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/lora_channels.png"
  width="70%"
  caption="IF0 to IF7 LoRa Channels"
/>

### Hardware

The hardware is categorized into five parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board. 

#### Interfaces

##### External Module Connector

###### SPI

The connector on the bottom side provides an SPI connection, which allows direct access to the Sx1301 SPI interface. This gives the target system the possibility to use existing SPI interfaces to communicate.

After powering up RAK831 , it is required to **reset** SX1301 via **PIN 19.** If the HAL driver from Github is used this functionality is already implemented.

###### GPS PPS

In case of available PPS signals in the target system, it is possible to connect this available signal to the appropriate pin at the connector.

###### Digital IOs

There are five GPIOs of the Sx1301 available, which gives the user some possibilities to get information about the system status. Theses pins are the same, as they are used for the LEDs on the RAK831.

As default setting the LEDs

1. Backhaul packet
2. TX packet
3. RX Sensor packet
4. RX FSK packet
5. RX buffer not empty
6. Power

#### Pin Definition

The RAK831 provides headers at the bottom side, which have a pitch of **2.54 mm**. The description of the pins is given by the table below.

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/pin-assignment.png"
  width="90%"
  caption="RAK831 WisLink LPWAN Concentrator Module Pinout Diagram"
/>

| Pin |    Name    | Type  |         Description         |
| :-: | :--------: | :---: | :-------------------------: |
|  1  |    +5V     | POWER |     +5V Supply Voltage      |
|  2  |    +5V     | POWER |     +5V Supply Voltage      |
|  3  |    GND     |  GND  |           Ground            |
|  4  |  LNA_EN_A  | Input | SX1301 Radio C Sample Valid |
|  5  |    GND     |  GND  | GPS Module LDO: Enable Pin  |
|  6  |    GND     |  GND  |           Ground            |
|  7  | RADIO_EN_A | Input |         SX1257_A_EN         |
|  8  |   PA_G8    | Input |          PA GAIN 0          |
|  9  | RADIO_EN_B | Input |         SX1257_B_EN         |
| 10  |   PA_G16   | Input |          PA GAIN 1          |
| 11  |  PA_EN_A   | Input |            PA EN            |
| 12  |    GND     |  GND  |           Ground            |
| 13  | RADIO_RST  |  RST  |      SX1257_A_B RESET       |
| 14  |    GND     |  GND  |           Ground            |
| 15  |    CSN     |  SPI  |       SX1301 SPI_NSS        |
| 16  |    MOSI    |  SPI  |       SX1301 SPI_MOSI       |
| 17  |    MISO    |  SPI  |       SX1301 SPI_MISO       |
| 18  |    SCK     |  SPI  |       SX1301 SPI_CLK        |
| 19  |   RESET    |  RST  |        SX1301 RESET         |
| 20  |   GPIO0    | GPIO  |         SX1301 GPIO         |
| 21  |   GPIO1    | GPIO  |         SX1301 GPIO         |
| 22  |   GPIO2    | GPIO  |         SX1301 GPIO         |
| 23  |   GPIO3    | GPIO  |         SX1301 GPIO         |
| 24  |   GPIO4    | GPIO  |         SX1301 GPIO         |

#### RF Characteristics

##### Transmitter RF Characteristics

The RAK831 has an excellent transmitter performance . It is highly recommended to use the optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

| PA Control | DAC Control | MIX Control | DIG Gain | Nominal RF Power Level \[dBm\] |
| :--------: | :---------: | :---------: | :------: | :----------------------------: |
|     0      |      3      |      8      |    0     |               -5               |
|     0      |      3      |      9      |    0     |               -3               |
|     0      |      3      |     11      |    0     |               0                |
|     0      |      3      |     15      |    0     |               3                |
|     1      |      3      |      9      |    0     |               6                |
|     1      |      3      |     11      |    0     |               10               |
|     1      |      3      |     12      |    0     |               11               |
|     2      |      3      |      8      |    0     |               12               |
|     2      |      3      |      9      |    0     |               13               |
|     1      |      3      |     15      |    0     |               14               |
|     2      |      3      |     10      |    0     |               15               |
|     2      |      3      |     11      |    0     |               16               |
|     2      |      3      |     11      |    0     |               17               |
|     2      |      3      |     12      |    0     |               18               |
|     2      |      3      |     13      |    0     |               19               |
|     2      |      3      |     14      |    0     |               20               |

At **T=25℃, VDD=5V(Typ.)** if nothing else stated:

:::tip 📝 NOTE
The table below is for 868 MHz RAK831 WisLink LPWAN Concentrator. Other frequencies are also supported such as 433 MHz, 470 MHz, and 915 MHz Frequency Range.
:::

| Parameter                              | Condition              | Min  | Typ. | Max  | Unit |
| -------------------------------------- | ---------------------- | ---- | ---- | ---- | ---- |
| Frequency Range                        |                        | 863  |      | 870  | MHz  |
| Modulation Techniques                  | FSK/LoRaWAN           |      |      |      |      |
| TX Frequency Variation vs. Temperature | Power Level Setting:20 | -3   |      | +3   | KHz  |
| TX Power Variation vs. Temperature     | Power Level Setting:20 | -5   |      | +5   | dB   |
| TX Power Variation                     |                        | -1.5 |      | +1.5 | dB   |

##### Receiver RF Characteristics

It is highly recommended to use optimized RSSI calibration values, which is part of the HAL v3.1. For both, Radio 1 and 2, **the RSSI-Offset should be set -169.0**.

The following table gives typically sensitivity level of the RAK831 :

| Signal Bandwidth [KHz] | Spreading Factor | Sensitivity [dBm] |
| :--------------------: | :--------------: | :---------------: |
|          125           |        12        |       -137        |
|          125           |        7         |       -126        |
|          250           |        12        |       -136        |
|          250           |        7         |       -123        |
|          500           |        12        |       -134        |
|          500           |        7         |       -120        |

##### RF Key Components

This section introduces the key components in RAK831 and help the developer to utilize the system to realize own system level design.

**1. LDO**

The system power supply is provided by the external 5V DC power supply. SX1 301 and related clock crystal is powered by Dual output LDO transformer outputs 1 .8V and 3.3V in order to meet the normal working condition of SX1 301 . Other key components are powered by LDO transformer output 3.3V. To be aware of the system design of LDO's power supply enable is provided by the output GPIO of SX1 301 as default. The connection method of pin enable should be kept same as Semtech official code. At the same time, System design also need to keep flexibility and all LDO enable should be connect to pin DB24. For this case, user can run the official reference code in this board, and also can change all external enable clock as they need for achieve the flexibility debugging.

**2. Power amplifier**

The Power amplifier chooses RFMD LF Power Amplifier and built in two steps gain. It realize the Max. 0.5w output power. The frequency range can cover from 380MHZ~960MHz. The two steps gain control table as:

<table style="text-align: center">
<thead>
  <tr>
    <th rowspan="2">Parameter</th>
    <th colspan="3">Specification</th>
    <th rowspan="2">Unit</th>
    <th rowspan="2">Condition</th>
  </tr>
  <tr>
    <th>Min.</th>
    <th>Typ.</th>
    <th>Max.</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td><b>Overall</b></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>T=25<sup>o</sup>C, V<sub>CC</sub>=3.6V, V<sub>PD</sub>=V<sub>BAS</sub>=3.0V, P<sub>IN</sub>=0dBm, Freq=9125MHHz</td>
  </tr>
  <tr>
    <td>CW Output Power</td>
    <td></td>
    <td>27.5</td>
    <td></td>
    <td>dBm</td>
    <td>VCC=3.6V</td>
  </tr>
  <tr>
    <td>CW Output Power</td>
    <td></td>
    <td>30</td>
    <td></td>
    <td>dBm</td>
    <td>VCC=5V</td>
  </tr>
  <tr>
    <td>Small Signal Gain</td>
    <td></td>
    <td>32</td>
    <td></td>
    <td>dB</td>
    <td>PIN=-10dBm</td>
  </tr>
  <tr>
    <td>Second Harmonic</td>
    <td></td>
    <td>23</td>
    <td></td>
    <td>dBc</td>
    <td>Without external second harmonic trap</td>
  </tr>
  <tr>
    <td>Third Harmonic</td>
    <td></td>
    <td>45</td>
    <td></td>
    <td>dBc</td>
    <td></td>
  </tr>
  <tr>
    <td>CW Efficiency</td>
    <td>55</td>
    <td>63</td>
    <td></td>
    <td>%</td>
    <td>G16="high", G8="high", PIN=0dBm</td>
  </tr>
  <tr>
    <td>Power Down "ON"</td>
    <td></td>
    <td>3.0</td>
    <td></td>
    <td>V</td>
    <td>Voltage supplied to the input</td>
  </tr>
  <tr>
    <td>Power Down "OFF"</td>
    <td>0</td>
    <td>0.5</td>
    <td>0.8</td>
    <td>V</td>
    <td>Voltage supplied to the input</td>
  </tr>
  <tr>
    <td>VPD Input Current</td>
    <td></td>
    <td>6</td>
    <td></td>
    <td>mA</td>
    <td>Only in "ON" state</td>
  </tr>
  <tr>
    <td>G16, G8 "ON"</td>
    <td>1.7</td>
    <td></td>
    <td>3.0</td>
    <td>V</td>
    <td>Voltage supplied to the input</td>
  </tr>
  <tr>
    <td>G16, G8 "OFF"</td>
    <td>0</td>
    <td></td>
    <td>0.7</td>
    <td>V</td>
    <td>Voltage supplied to the input</td>
  </tr>
  <tr>
    <td>G16, G8 Input Current</td>
    <td></td>
    <td>1.0</td>
    <td></td>
    <td>mA</td>
    <td>Only in "ON" state</td>
  </tr>
  <tr>
    <td>Output Power</td>
    <td>26.5</td>
    <td>27.5</td>
    <td>29</td>
    <td>dBm</td>
    <td>G16="high", G8="high", PIN=0dBm</td>
  </tr>
  <tr>
    <td></td>
    <td>21</td>
    <td>23</td>
    <td>25</td>
    <td>dBm</td>
    <td>G16="high", G8="low", PIN=0dBm</td>
  </tr>
  <tr>
    <td></td>
    <td>14</td>
    <td>16</td>
    <td>18</td>
    <td>dBm</td>
    <td>G16="low", G8="high", PIN=0dBm</td>
  </tr>
  <tr>
    <td></td>
    <td>3</td>
    <td>5</td>
    <td>8</td>
    <td>dBm</td>
    <td>G16="low", G8="low", PIN=0dBm</td>
  </tr>
  <tr>
    <td>Turn On/Off Time</td>
    <td></td>
    <td>200</td>
    <td></td>
    <td>ns</td>
    <td></td>
  </tr>
</tbody>
</table>

**3. RF switch**

The RF switch choose RFSW1 01 2 which has advantage of high Isolation and low insertion loss. This chip handling the switch between Tx and Rx. The Control logic as below image.Specially need highlight that the pin of CTRL was controlled by SX1 301 ’s GPIO through output signal of LNA_EN_A, the Pin of EN was controlled by SX1 301 ’s GPIO through output signal of RADIO_EN_A. Simultaneously,it also can be controlled by external input signal through DB24.

| State    | VDD          | CTRL       | EN    | RF Path  |
| -------- | ------------ | ---------- | ----- | -------- |
| 1        | 2.7V to 4.6V | VHIGH      | VHIGH | ANT-RF2  |
| 2        | 2.7V to 4.6V | VLOW       | VHIGH | ANT-RF1  |
| Shutdown | 2.7V to 4.6V | Dont' Care | VLOW  | Shutdown |

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/rf-switch-schematic.png"
  width="50%"
  caption="RF Switch Schematic Diagram"
/>

#### Electrical Characteristics

Listed in this document are the differenct electrical characteristics of RAK831 WisLink LPWAN Concentrator.

::: warning ⚠️ WARNING
Stress exceeding of one or more of the limiting values listed under **Absolute Maximum Ratings** may cause permanent damage to the radio module.
:::

##### Absolute Maximum Ratings

| Parameter             | Condition | Min  | Typ. | Max | Unit |
| --------------------- | --------- | ---- | ---- | --- | ---- |
| Supply Voltage(VDD)   |           | -0.3 | 5.0  | 5.5 | V    |
| Operating Temperature |           | -40  |      | +85 | ℃    |
| RF Iuput Power        |           |      |      | -15 | dBm  |

::: warning ⚠️ WARNING
With RF output power level above +15 dBm, a minimum distance to a transmitter should be 1 meter to avoid too large input level.
:::

##### Global Electrical Characteristics

| Parameter            | Condition  | Min | Typ. | Max | Unit |
| -------------------- | ---------- | --- | ---- | --- | ---- |
| Supply Voltage (VDD) |            | 4.8 | 5.0  | 5.2 | V    |
| Current Consumption  | RX Current |     | 100  |     | mA   |
|                      | TX Current |     | 80   |     | mA   |

At **T=25℃, VDD=5V(Typ.)** if nothing else stated

| Parameter                        | Condition                    | Min | Typ. | Max | Unit |
| -------------------------------- | ---------------------------- | --- | ---- | --- | ---- |
| Logic low input threshold (VIL)  | “0” logic input              |     |      | 0.4 | V    |
| Logic high input threshold (VIH) | “1” logic input              | 2.9 |      | 3.3 | V    |
| Logic low output level (VOL)     | “0” logic output, 2mA sink   |     |      | 0.4 | V    |
| Logic high output level (VOH)    | “1” logic output, 2mA source | 2.9 |      | 3.3 | V    |

#### Schematic Diagram

The following images are the schematic diagram of the RAK831 WisLink LPWAN Concentrator:

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/schematic-diagram1.png"
  width="100%"
  caption="RAK831 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak831/datasheet/schematic-diagram2.png"
  width="100%"
  caption="RAK831 Schematic Diagram"
/>

### Software

Download the latest firmware of the RAK831 in the table provided below.

#### Firmware

| Model  | Raspberry Pi Board | Firmware Version | Source                                                                                                                                              |
| ------ | ------------------ | ---------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK831 | Raspberry Pi 3B+   | V4.1.0           | [Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/) |
| RAK831 | Raspberry Pi 4     | V4.1.0           | [Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/) |

## Models / Bundles

Order Information

| P/N        | Band Frequency |
| ---------- | -------------- |
| RAK831_433 | 433MHz         |
| RAK831_470 | 470MHz         |
| RAK831_868 | 868MHz         |
| RAK831_915 | 915MHz         |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />