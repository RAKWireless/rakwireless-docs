---
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wistrio
  - RAK5010
rak_desc: Provides comprehensive information about your RAK5010 WisTrio NB-IoT Tracker Pro to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wistrio/rak5010/quickstart/1.overview/RAK5010.png
certifications:
  - [RoHS, https://downloads.rakwireless.com/LoRa/RAK5010/Certification/RAK5010_ROHS_Report.pdf]
---

# RAK5010 WisTrio NB-IoT Tracker Pro Datasheet



## Overview

### Description

The **RAK5010 WisTrio NB-IoT Tracker Pro** is an advanced, highly flexible eMTC/NB-IoT/EGPRS tracker based on Quectel BG96 LTE Cat M1&NB1, integrated with GPS, BLE, and a variety of sensors. The MCU running the board is a Nordic nRF52840 controller.

With the GPS and BLE features, the device can be used in a wide range of applications from outdoor to indoor scenarios where location-based services are necessary.

The board is equipped with four sensors onboard: humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor. Additionally, the extension IOs in the module allow expandable sensor application in addition to the on-board ones.

This board is particularly suitable to be used as a quick testing and prototyping tool for applications requiring Nb-IoT connectivity. Application development supports the GCC environment.

### Features

- **Quectel BG96** with LTE CAT M1, LTE NB1, EGPRS, and GNSS
- **Nordic nRF52840**, with BLE 5.0 and long-range BLE
- nRF52840 integrates the ultra-low-power microcontroller ARM Cortex-M4 (64&nbsp;Mhz)
- Built-in humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor
- iPEX connectors for the LoRa and GPS antenna and an on-board ceramic antenna for the BLE
- Nano SIM and ESIM options
- Can be powered by either Micro USB, 3.7&nbsp;V rechargeable battery, or a 5&nbsp;V Solar Panel port
- Multiple interfaces, I2C, UART, GPIO, and ADC

## Specifications

### Overview

The overview presents the RAK5010 WisTrio top view and its block diagram that shows the core of the board.


#### Module Overview

**Figure 1** shows the top view and the interfaces of the RAK5010 NB-IoT tracker board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/top-view-of-the-board-with-interfaces.jpg"
  width="60%"
  caption="Top View of the Board with Interfaces"
/>

**Figure 2** shows the bottom of the board, where **Figure 3** is the dimensions of the board, and **Figure 4** shows the header pin spacing.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/bottom-view-of-the-board-with-interfaces.jpg"
  width="60%"
  caption="Bottom View of the Board with Interfaces"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/board-dimensions.jpg"
  width="45%"
  caption="Board Dimensions"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/header-spacing.jpg"
  width="45%"
  caption="Header Spacing"
/>

#### Block Diagram

The block diagram in **Figure 5** shows the internal architecture and external interfaces of the RAK5010 board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/block-diagram.png"
  width="80%"
  caption="RAK5010 Block Diagram"
/>

### Hardware

The hardware specification is categorized into seven parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the standard parameters of the board in terms of Electrical, Mechanical, and Environmental of which the tabular data of the functionalities and the standard values are presented. Moreover, a thorough discussion of the RAK5010 specification is included in this section.

#### Interfaces

The node is built around the BG96 module and the nRF52840 BLE chip. It provides the following interfaces, headers, jumpers, buttons, and connectors:

- Micro USB
- 2 sets of 4-pin 2.54&nbsp;mm Headers (UART, GPIOS, I2C, power)
- 4-pin Jlink header
- 2-pin battery female interface
- 2-pin Solar Panel female interface
- LEDs
- Reset Button
- PWR Button for the BG96

There are two antenna connectors:

- LTE Antenna with iPEX connector
- GPS Antenna with iPEX connector

##### Micro-B USB Interface

A standard Micro-B USB is compliant with USB 2.0 standard specification. This USB interface is connected to the USB port of NRF52840 for default. It also can connect to BG96 by reworking some resistors on the board. If this USB port is connected to the BG96, BG96 AT command port, GNSS port, and debug port can be accessed through this USB. It is also used as a charge input port for the battery. The Micro-B USB pin
the definition is shown in **Figure 6**:

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/usb-connector-pinout.png"
  width="20%"
  caption="USB Connector Pinout"
/>

|  Pin  |     Description      |
| :---: | :------------------: |
|   1   | USB_VBUS (+5&nbsp;V) |
|   2   |        USB_DM        |
|   3   |        USB_DP        |
|   4   |          NC          |
|   5   |         GND          |

This USB port is also used as a port for charging the battery.

##### LEDs

Three LEDs are used to indicate operating status. Listed in the table are their functions:

|    Color    |        Connection         |                 Function                 |
| :---------: | :-----------------------: | :--------------------------------------: |
| 🟢 Green LED | connected to the nRF52840 |           Defined by the user            |
| 🔵 Blue LED  |    connect to the BG96    |     Indicates the status of the BG96     |
|  🔴 Red LED  |    connect to the BG96    | Indicates the network status of the BG96 |

##### RESET Push Button

Reset Push Button is used to reset the nRF52840. You can control the BG96 reset with the firmware of the nRF52840.

##### PWRKEY Push Button

When the BG96 is in power off mode, it can be turned back on to normal mode by holding the PWRKEY button for at least 100&nbsp;ms. Holding the PWRKEY button for at least 650&nbsp;ms, the module will execute the power-down procedure after the PWRKEY is released.

##### IO Connections between the BG96 and the nRF52840

The nRF52840 communicates with the BG96 primarily through the UART interface. There is, however, additional signaling between the two modules. This is for auto-monitoring of status indicators and control. The pin mapping is shown below:

| Function of BG96 | PIN definition on nRF52840  |
| :--------------: | :-------------------------: |
|    TX of UART    | P0.08 (RX for the nRF52840) |
|    RX of UART    | P0.06 (TX for the nRF52840) |
|     BG96_CTS     |            P0.11            |
|     BG96_RTS     |            P0.07            |
|     BG96_RI      |            P0.27            |
|   BG96_STATUS    |            P0.31            |
|    BG96_RESET    |            P0.28            |
|   BG96_PWRKEY    |            P0.02            |
|  BG96_WDISABLE   |            P0.29            |
|     BG96_DTR     |            P0.26            |
|  BG96_AP READY   |            P0.30            |
|     BG96_PSM     |            P0.03            |

If BG96_RESET, BG96_PWRKEY, and BG96_WDISABLE are not set correctly, the BG96 module will not boot up normally. When powering up, the BG96 RESET should be retained at a low-level voltage, the BG96_WDISABLE should be retained at low-level voltage, and the BG96_PWRKEY should be given a pulse with a high level and at least 100&nbsp;ms width to turn the BG96 normally.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/turning-on-the-bg96-via-the-pwrkey.jpg"
  width="50%"
  caption="Turning on the BG96 via the PWRKEY"
/>

##### Antenna Connector

The connectors for both the GPS and LTE antennas are iPEX. Make sure that the LTE antenna is tuned to work at the operational frequency of your LTE provider, corresponding to your region.

#### Pin Definition

There are two connectors on the board:

##### P1

**Solar panel interface**

|  Pin  | Pin Name |       Description       |
| :---: | :------: | :---------------------: |
|   1   | C0NN_5V  | Positive of Solar Panel |
|   2   |   GND    |           GND           |

:::tip 📝 NOTE
The output of the solar panel cannot exceed 5.5&nbsp;V. Otherwise, it may cause permanent damage to the board.
:::

##### P2

**Li-ion battery connector**

|  Pin  | Pin Name |       Description       |
| :---: | :------: | :---------------------: |
|   1   |   GND    |           GND           |
|   2   |   VBAT   | Positive of the Battery |

##### J9

J9 is a J-LINK connector, with a J-LINK debugger, you can program and debug nRF52840.

|  Pin  | Pin Name |                       Description                        |
| :---: | :------: | :------------------------------------------------------: |
|   1   |   VDD    | 1.8&nbsp;V default. Reference voltage for J-LINK, note 1 |
|   2   |  SWDIO   |          SWD data signal (1.8&nbsp;V tolerant)           |
|   3   |  SWDCLK  |          SWD clock signal (1.8&nbsp;V tolerant)          |
|   4   |   GND    |                           GND                            |

:::tip 📝 NOTE
VDD of J9 should connect to the PIN1 of SEGGER J-LINK (see **Figure 8**) debugger for SWDIO/SWDCLK reference voltage. If this pin is not connected correctly, the J-LINK logic level may not be set to VDD of nrf52840, and it may damage the nrf52840.
:::

**Figure 8** shows the definition of a 20-Pin segger J-LINK connector.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/j-link-pinout.png"
  width="60%"
  caption="J-LINK Pinout"
/>

|  Pin  | Signal | Type  |                                                                                                                                           Description                                                                                                                                            |
| :---: | :----: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   1   | VTref  | Input | This is the target reference voltage. It is used to check if the target has power, to create the logic-level reference for the input comparators, and to control the output logic levels to the target. It is normally fed from the VDD of the target board and must not have a series resistor. |

##### J10 and J12

J10 and J12 are IO extension headers. They bridged from the nRF52840 IOs, through logical level shift circuits. Thus, the IOs level is set by the VREF pin. The function of these IOs is configurable. They can work as UART, I2C，general GPIO, or ADC.

- Definition of J10:

|  Pin  | Pin Name |                                                                                                            Description                                                                                                             |
| :---: | :------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|   1   |   GND    |                                                                                                                GND                                                                                                                 |
|   2   |   VBAT   |                                                                                                      Connected to the Battery                                                                                                      |
|   3   |   AIN    | Configurable IO, connected to AIN3 (P0.05) on nRF52840. If used as ADC, the input range is configurable. Refer to the manual of nrf52840. If used as general IO, the logic level is 1.8&nbsp;V, and there is no level shift on it. |
|   4   | NRF_IO1  |                                                       Configurable IO, connected to P0.19 on the nRF52840. There is a level shift circuit between this pin and the nRF52840.                                                       |

- Definition of J12:

|  Pin  | Pin Name |                                                     Description                                                      |
| :---: | :------: | :------------------------------------------------------------------------------------------------------------------: |
|   1   | EXT_VREF |                                        Reference level for the IO extensions.                                        |
|   2   | NRF_IO2  | Configurable IO, connect to P0.20 on the nRF52840. There is a level shift circuit between this pin and the nRF52840. |
|   3   | NRF_IO3  | Configurable IO, connect to P1.02 on the nRF52840. There is a level shift circuit between this pin and the nRF52840. |
|   4   | NRF_IO4  | Configurable IO, connect to P1.01 on the nRF52840. There is a level shift circuit between this pin and the nRF52840. |

The logic level shift circuit on the RAK5010 board connects EXT_VREF to your extension board’s power and equalizes it to the logical level of the IO on your extension board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/typical-converter-circuitry.jpg"
  width="80%"
  caption="Typical Converter Circuitry"
/>

#### System on a Chip (SoCs) and Sensors

This section provides detailed specifications about the different modules present in the RAK5010 device.

##### 1. BG96

###### 1.1 Frequency Bands

|                        LTE Bands                         |      GSM      | Rx-Diversity  |                     GNSS                     |
| :------------------------------------------------------: | :-----------: | :-----------: | :------------------------------------------: |
|                    **Cat M1 & NB1**:                     |       -       |       -       |                      -                       |
| LTE-FDD: B1/B2/B3/B4/ B5/B8/B12/B13/B18/ B19/B20/B26/B28 | GSM850/GSM900 | Not Supported | GPS, GLONASS, BeiDou/ Compass, Galileo, QZSS |

###### 1.2 Key Feature of BG96 Module

|        Feature         | Details                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| :--------------------: | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **Power Supply**    | - Supply Voltage: 3.3&nbsp;V – 4.3&nbsp;V <br> - Typical supply voltage: 3.8&nbsp;V                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| **Transmitting Power** | - Class: 3 (23&nbsp;dBm ± 2&nbsp;dB) for LTE-FDD bands <br> - Class: 3 (23&nbsp;dBm ± 2&nbsp;dB) for LTE-TDD bands <br> - Class: 4 (33&nbsp;dBm ± 2&nbsp;dB) for GSM850 <br> - Class: 4 (33&nbsp;dBm ± 2&nbsp;dB) for GSM900 <br> - Class: 1 (30&nbsp;dBm ± 2&nbsp;dB) for DCS1800 <br> - Class: 1 (30&nbsp;dBm ± 2&nbsp;dB) for PCS1900 <br> - Class: E2 (27&nbsp;dBm ± 3&nbsp;dB) for GSM850 8-PSK <br> - Class: E2 (27&nbsp;dBm ± 3&nbsp;dB) for GSM900 8-PSK <br> - Class: E2 (26&nbsp;dBm ± 3&nbsp;dB) for DCS1800 8-PSK <br> -Class: E2 (26&nbsp;dBm ±3&nbsp;dB) for PCS1900 8-PSK |
|    **LTE Features**    | - Supports LTE Cat M1 and LTE Cat NB1 <br> - Supports 1.4&nbsp;MHz RF bandwidth for LTE Cat M1 <br> - Supports 200&nbsp;kHz RF bandwidth for LTE Cat NB1 <br> - Supports SISO in the DL direction Cat M1: Max. 300&nbsp;Kbps (DL)/375&nbsp;Kbps (UL); Cat NB1: Max. 32&nbsp;Kbps (DL)/70&nbsp;Kbps (UL)                                                                                                                                                                                                                                                                                  |
|    **GSM Features**    | **GPRS**: <br> - Supports GPRS multi-slot Class 33 (by default) <br> - Coding scheme: CS-1, CS-2, CS-3, and CS-4 Max. 107&nbsp;Kbps (DL), Max. 85.6&nbsp;Kbps (UL) <br> **EDGE**: <br> - Supports Edge multi-slot Class 33 (by default) <br> - Supports GMSK and 8-PSK for different MCS Downlink <br> - Coding Schemes: CS 1-4 and MCS 1-9 Uplink Coding Schemes: CS 1-4 and MCS 1-9 Max. 296&nbsp;Kbps (DL), 236.8&nbsp;Kbps (UL)                                                                                                                                                      |

##### 2. nRF52840 Module

|      Parameter      |                               Detail                                |
| :-----------------: | :-----------------------------------------------------------------: |
|         CPU         |       ARM® Cortex®-M4 32-bit processor with FPU, 64&nbsp;MHz        |
|        Flash        |                              1&nbsp;MB                              |
|         RAM         |                             256&nbsp;KB                             |
|    BLE Protocol     |                               BLE 5.0                               |
|    BLE Tx Power     |                           8&nbsp;dBm max                            |
| BLE Rx Sensitivity  |                 95&nbsp;dBm @ 1&nbsp;Mbps BLE mode                  |
|    BLE Data Rate    |       2&nbsp;Mbps, 1&nbsp;Mbps, 500&nbsp;Kbps, 125&nbsp;Kbps        |
| Current Consumption | 4.8&nbsp;mA in Tx, 4.6&nbsp;mA in Rx, and 1.5&nbsp;uA in Sleep Mode |

##### 3. Humidity and Temperature Sensors

The Temperature and Humidity Sensors are an SHTC3 from Sensirion.

###### 3.1 Temperature

|    Parameter    | Conditions |       Value        | Units |
| :-------------: | :--------: | :----------------: | :---: |
|    Accuracy     |    Typ     |        ±2.0        |  °C   |
|    Tolerance    |    Max     | See _**Figure 2**_ |  °C   |
|  Repeatability  |     -      |        0.1         |  °C   |
|   Resolution    |     -      |        0.01        |  °C   |
| Specified Range |     -      |    -40 to +125     |  °C   |
|  Response Time  |   τ 63%    |      <5 to 30      |   s   |
| Long-term Drift |    Typ.    |        <0.2        | °C/y  |

###### 3.2 Humidity

|    Parameter    | Conditions |       Value        | Units |
| :-------------: | :--------: | :----------------: | :---: |
|    Accuracy     |    Typ     |        ±2.0        |  %RH  |
|    Tolerance    |    Max     | See _**Figure 2**_ |  %RH  |
|  Repeatability  |     -      |        0.1         |  %RH  |
|   Resolution    |     -      |        0.01        |  %RH  |
|   Hysteresis    |     -      |         ±1         |  %RH  |
| Specified Range |  Extended  |      0 to 100      |  %RH  |
|  Response Time  |   τ 63%    |         8          |   s   |
| Long-term Drift |    Typ.    |       <0.25        | %RH/y |

##### 4. Pressure Sensor

The Pressure Sensor is an LPS22HB from ST:

| Symbol  |            Parameter            |                               Test Condition                               |  Min  |      Typ      |  Max  |  Unit   |
| :-----: | :-----------------------------: | :------------------------------------------------------------------------: | :---: | :-----------: | :---: | :-----: |
|  PTop   |   Operating Temperature Range   |                                     -                                      |  -40  |       -       |  +85  |   °C    |
| PTfull  | Full Accuracy Temperature Range |                                     -                                      |   0   |       -       |  +65  |   °C    |
|   Pop   |    Operating Pressure Range     |                                     -                                      |  260  |       -       | 1260  |   hPa   |
|  Pbits  |      Pressure Output Data       |                                     -                                      |   -   |      24       |   -   |  bits   |
|  Psens  |      Pressure Sensitivity       |                                     -                                      |   -   |     4096      |   -   | LSB/hPa |
| PAccRel | Relative Accuracy over Pressure |                 • P=800–1100&nbsp;hPa <br>• T = 25&nbsp;°C                 |   -   |     ±0.1      |   -   |   hPa   |
|  PAccT  |        Absolute Accuracy        | • **After OPC**: Pop=0 to 65&nbsp;°C <br>• **No OPC**: Pop=0 to 65&nbsp;°C |   -   |  ±0.1 <br>±1  |   -   |   hPa   |
| Pnoise  |   RMS Pressure Sensing Noise    |                          With embedded filtering                           |   -   |    0.0075     |   -   | hPa RMS |
| ODRPres |    Pressure Output Data Rate    |                                     -                                      |   -   | 1/10/25/50/75 |   -   |   Hz    |
##### 5. 3-Axis Motion Sensor

| Symbol |     Parameter     |             Test Condition             | Min.  | Typ.  | Max.  |   Unit   |
| :----: | :---------------: | :------------------------------------: | :---: | :---: | :---: | :------: |
|   FS   | Measurement Range |            FS bit set to 00            |       | ±2.0  |       |    g     |
|        |                   |            FS bit set to 01            |       | ±4.0  |       |    g     |
|        |                   |            FS bit set to 10            |       | ±8.0  |       |    g     |
|        |                   |            FS bit set to 11            |       | ±16.0 |       |    g     |
|   So   |    Sensitivity    | FS bit set to 00; High-resolution mode |       |   1   |       | mg/digit |
|        |                   |     FS bit set to 00; Normal mode      |       |   4   |       | mg/digit |
|        |                   |    FS bit set to 00; Low-Power mode    |       |  16   |       | mg/digit |
|        |                   | FS bit set to 01; High-resolution mode |       |   2   |       | mg/digit |
|        |                   |     FS bit set to 01; Normal mode      |       |   8   |       | mg/digit |
|        |                   |    FS bit set to 01; Low-power mode    |       |  32   |       | mg/digit |
|        |                   | FS bit set to 10; High-resolution mode |       |   4   |       | mg/digit |
|        |                   |     FS bit set to 10; Normal mode      |       |  16   |       | mg/digit |
|        |                   |    FS bit set to 10; Low-power mode    |       |  64   |       | mg/digit |
|        |                   | FS bit set to 11; High-resolution mode |       |  12   |       | mg/digit |
|        |                   |     FS bit set to 11; Normal mode      |       |  48   |       | mg/digit |
|        |                   |    FS bit set to 11; Low-power mode    |       |  192  |       | mg/digit |

##### 6. Ambient Light Sensor

The Ambient Light Sensor is an OPT3001 from TI:

| Parameter                                                   | Test Condition                                                                                 | Min.           | Typ.           | Max.           | Unit    |
| ----------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | -------------- | -------------- | -------------- | ------- |
| Peak Irradiance Spectral Responsibility                     | -                                                                                              | -              | 550            | -              | nm      |
| Resolution (LSB)                                            | Lowest full-scale range, RN[3:0] = 0000b                                                       | -              | 0.01           | -              | lux     |
| Full-scale Illuminance                                      | -                                                                                              | -              | 83865.6        | -              | -       |
| Measurement Output Result                                   | 0.64&nbsp;lux per ADC code, 2620.90&nbsp;lux full-scale (RN[3:0] = 0110) , 2000&nbsp;lux input | 2812 <br> 1800 | 3125 <br> 2000 | 3437 <br> 2200 | ADC lux |
| Relative Accuracy Between Gain Ranges                       | -                                                                                              | -              | 0.2%           | -              | -       |
| Infrared Response (850&nbsp;nm)                             | -                                                                                              | -              | 0.2%           | -              | -       |
| Light Source Variation (Incandescent, Halogen, Fluorescent) | Bare device, no cover glass                                                                    | -              | 4%             | -              | -       |
| Linearity                                                   | Input luminance > 40&nbsp;lux <br> Input luminance < 40&nbsp;lux                               | -              | 2%             | -              | -       |
| Measured Drift Across Temperature                           | Input luminance = 2000&nbsp;lux                                                                | -              | 5%             | -              | %/ °C   |
| Dark Condition, ADC Output                                  | 0.01&nbsp;lux per ADC code                                                                     | -              | 0 <br> 0       | 3 <br> 0.03    | lux     |
| Half-power Angle                                            | 50% of full-power reading                                                                      | -              | 47             | -              | degrees |

#### Antennas

##### 1. LTE Antenna


<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/ipex-onboard-connector-for-the-lte-antenna.jpg"
  width="25%"
  caption="iPEX onboard connector for the LTE antenna"
/>

A PCB antenna (**Figure 11**) is included with the board. In case you want to use another antenna, keep in mind that you need to have the proper connector (iPEX) and have it tuned to the frequency band of operation in your region.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/pcb-lte-antenna-with-pigtail.png"
  width="50%"
  caption="PCB LTE Antenna with Pigtail"
/>

###### Antenna Specifications

| Item               | Specifications             |
| ------------------ | -------------------------- |
| Range of Frequency | 806-960/1710-2700&nbsp;MHz |
| VSWR               | ≤1.5                       |
| Gain               | 1.0                        |
| Polarization       | Linear                     |
| Impedance (Ω)      | 50                         |
| Antenna Type       | PCB                        |

###### Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions | Temperature               | Humidity |
| ---------- | ------------------------- | -------- |
| Working    | -40&nbsp;ºC ~ +75&nbsp;ºC | 0% ~ 95% |
| Storage    | 40&nbsp;ºC ~ +85&nbsp;ºC  | 0% ~ 95% |

##### 2. GPS Antenna

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/ipex-onboard-connector-for-the-gps-antenna.jpg"
  width="25%"
  caption="iPEX onboard connector for the GPS antenna"
/>

###### GPS Antenna Power Supply Control

To support low power and long battery life, the active GPS antenna power supply should be shut down when the system doesn’t access the data from the GPS module. The GPS power supply is controlled by nRF52840 with MOSFET. The pin map of GPS_EN on Nrf52840 is P1.09, and the circuit is shown in **Figure 13** and **Figure 14**.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/circuit-diagram.png"
  width="50%"
  caption="iPEX onboard connector for the GPS antenna"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/circuit-diagram-2.png"
  width="50%"
  caption="iPEX onboard connector for the GPS antenna"
/>

- **Set P1.07=1, GPS antenna power is on.**
- **Set P1.07=0, GPS antenna power is off.**

###### Antenna Specifications

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/gps-antenna.png"
  width="50%"
  caption="GPS Antenna"
/>

| Item                                               | Specifications        | PET  |
| -------------------------------------------------- | --------------------- | ---- |
| Range of Receiving Frequency                       | 1575.42±1.1           | ±2.5 |
| Center Frequency (MHz) w/ 30&nbsp;mm2 (2 GND plane | 1575.42               | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10&nbsp;dB)        | ≥10                   | ±0.5 |
| VSWR (in Center Frequency)                         | ≤1.5                  | ±0.5 |
| Gain (Zenith) (dBi Typ.) w/ 70&nbsp;mm2 GND Plane  | 4.5                   | ±0.5 |
| Axial Ratio (dB) w/ 70&nbsp;mm2 GND Plane          | 3.0                   | ±0.2 |
| Polarization                                       | Right-Handed Circular |      |
| Impedance (Ω)                                      | 50                    |      |
| Frequency Temperature Coefficient (ppm/ºC)         | 0±10                  |      |

###### Amplifier Specifications

| Item              | Specifications      |
| ----------------- | ------------------- |
| Frequency Range   | 1575.42&nbsp;MHz    |
| Gain              | 27&nbsp;dB          |
| VSWR              | ≤ 2.0&nbsp;V        |
| Noise Coefficient | ≤ 2.0&nbsp;dB       |
| DC Voltage        | 3&nbsp;V ~ 5&nbsp;V |
| DC Current        | 10&nbsp;mA          |

###### Environmental Test Performance Specifications

| Item              | Normal Temp.     | High Temp.       | Low Temp.        |
| ----------------- | ---------------- | ---------------- | ---------------- |
| Amplifier Gain    | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 | 27&nbsp;dB ± 2.0 |
| VSWR              | ≤ 2.0            | ≤ 2.0            | ≤ 2.0            |
| Noise Coefficient | ≤ 2.0            | ≤ 2.0            | ≤ 2.0            |

:::tip 📝 NOTE
**1. High-Temperature Test**: Soap in temperature (85&nbsp;°C) and humidity (95%) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change. <br> **2. Low-Temperature Test**: Soap in temperature (-40&nbsp;°C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.
:::

###### Environmental Requirements

| Conditions | Temperature               | Humidity |
| ---------- | ------------------------- | -------- |
| Working    | -35&nbsp;ºC ~ +80&nbsp;ºC | 0% ~ 95% |
| Storage    | -35&nbsp;ºC ~ +80&nbsp;ºC | 0% ~ 95% |

#### Electrical Characteristics

##### Schematic Diagram

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/schematic-diagram-part-1.png"
  width="100%"
  caption="Schematic Diagram Part 1"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/schematic-diagram-part-2.png"
  width="100%"
  caption="Schematic Diagram Part 2"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/schematic-diagram-part-3.png"
  width="100%"
  caption="Schematic Diagram Part 3"
/>

##### Absolute Maximum Ratings

Functional operation of the device under the conditions listed is not advised. Hence, exposure to maximum rating conditions may affect device reliability.

|               Ratings               | Maximum Value (V) |
| :---------------------------------: | :---------------: |
|   Vbus, power supply on UBS port    |    -0.3 - 5.5     |
|        Vbat, battery voltage        |    -0.3 - 4.3     |
|      Vconn solar panel voltage      |    -0.3 - 5.5     |
|         IOs of J-link (J9)          |    -0.3 - 1.9     |
| IOs of BG96, nRF52840 - J10 and J12 |    -0.3 -VREF     |
|                 ESD                 |       2000        |

:::warning ⚠️ WARNING
The RAK5010, as any electronic equipment, is sensitive to electrostatic discharge (ESD). Improper handling can cause permanent damage to the module.
:::

##### Current Consumption

|                             Conditions                              |   Current   |
| :-----------------------------------------------------------------: | :---------: |
| The nRF52840 is running, the BG96 transmits data @ NB1, 23&nbsp;dBm | 200&nbsp;mA |
|    BLE transmits @ 0&nbsp;dBm, the BG96 is in power saving mode     |  7&nbsp;mA  |
|   The nRF52840 is in sleep mode, the BG96 is in power saving mode   | 13&nbsp;µA  |

:::tip 📝 NOTE
For the above results to be reached, the nRF52840 regulator has to be in DC-DC mode, and all the sensors have to be in sleep mode.
:::

##### Power Requirements

The RAK5010 tracker board can be powered by a battery, connected to the P2. The nominal operational voltage of the battery should be within the range in the table:

|  Min  | Type  |  Max  | Unit  |
| :---: | :---: | :---: | :---: |
|  3.3  |  3.7  |  4.3  |   V   |

If a rechargeable battery is used, the USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed the ones in the table below.

|    Parameter     |          Value          |
| :--------------: | :---------------------: |
| Charging Voltage | 4.5&nbsp;V ~ 5.5&nbsp;V |
| Charging Current |       500&nbsp;mA       |

A suitable Li-Ion battery should have the following parameters:

|     Parameter     |    Value    |
| :---------------: | :---------: |
| Standard Voltage  | 3.7&nbsp;V  |
| Charging Voltage  | 4.2&nbsp;V  |
|     Capacity      | As required |
| Discharge Current |  2&nbsp;A   |

A 5&nbsp;V solar panel can be connected to the board via the P1 connector to serve the purpose of charging the battery.


:::warning ⚠️ WARNING

To avoid damage both to the battery and board:

  1. Do not power the USB port if a non-rechargeable battery is connected to the RAK5010-M
  2. Do not attach the solar panel if the non-rechargeable battery is used.

:::

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/battery-charging-via-solar-panel.jpg"
  width="60%"
  caption="Battery Charging via Solar Panel"
/>

##### Laboratory Testings

**Figure 20** and **Figure 21** display the average current consumptions based on the different test cases.

**Equipments**:

- Oscilloscope
- RAK5010 WisTrio NB-IoT Tracker Pro

**Sending a Cellular Packet**

The RAK5010 WisTrio NB-IoT Tracker Pro takes **489.733&nbsp;ms** to send a Cellular packet which consumes **64.9&nbsp;mA** of current.

- **Sending Time**: 489.733&nbsp;ms
- **Current consumption**: 64.9&nbsp;mA

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/oscilloscope-screen-capture-of-lora®-packet-sending.jpg"
  width="85%"
  caption="Oscilloscope Screen Capture of Sending a Cellular Packet"
/>

**Sleep Mode**

When in sleep mode, the RAK5010 WisTrio NB-IoT Tracker Pro consumes **20.5&nbsp;uA** of current.

- **Current consumption**: 20.5&nbsp;uA

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/oscilloscope-screen-capture-of-rak4600-lora®-module-in-sleep-mode.jpg"
  width="85%"
  caption="Oscilloscope Screen Capture of RAK4600 LoRa Module in Sleep Mode"
/>

#### Mechanical Characteristics

##### Module Dimensions


<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/top-view-mechanical-dimension.jpg"
  width="75%"
  caption="Top View"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/bottom-view-mechanical-dimension.jpg"
  width="50%"
  caption="Bottom View"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements:

|        Parameter        |     Min     |   Typical   |     Max     |
| :---------------------: | :---------: | :---------: | :---------: |
| Operational Temp. Range | -35&nbsp;ºC | +25&nbsp;ºC | +75&nbsp;ºC |
|  Extended Temp. Range   | -40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |
|   Storage Temp. Range   | -40&nbsp;ºC | +25&nbsp;ºC | +80&nbsp;ºC |

### Firmware

Download the latest firmware version of the RAK5010 WisTrio provided in the download link below.

:::warning ⚠️ WARNING
RAK5010 and RAK5010-M have the same PCB, but their firmware is different and not interchangeable.
:::

| Model   | Version   | Source                                                                                              |
| ------- | --------- | --------------------------------------------------------------------------------------------------- |
| RAK5010 | V3.0.0.15 | [Download](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010_Latest_Firmware.zip) |


## Models / Bundles

### Ordering Information

| **Part Number** | **Built-in Nordic nRF52840** | **Built-in Nordic BG96** | **Built-in Temperature and Humidity Sensor** | **Built-in 3-axis Motion Sensor** | **Built-in Pressure Sensor** | **Built in Light Sensor** |
| --------------- | ---------------------------- | ------------------------ | -------------------------------------------- | --------------------------------- | ---------------------------- | ------------------------- |
| RAK5010         | ✓                            | ✓                        | ✓                                            | ✓                                 | ✓                            | ✓                         |
| RAK5010-M       | ✓                            | ✓                        | ✓                                            | ✓                                 |                              |                           |



## Certification

<rk-certifications :params="$page.frontmatter.certifications" />