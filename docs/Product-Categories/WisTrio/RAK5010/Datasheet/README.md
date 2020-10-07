---
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wistrio
---

# RAK5010 WisTrio NB-IoT Tracker Pro Datasheet

<!---
<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/rak5010-wis-trio-nb-iot-tracker.jpg"
  width="40%"
  caption="RAK5010 WisTrio NB-IoT Tracker Pro"
/>
-->

## Overview

### Description

The **RAK5010 WisTrio NB-IoT Tracker Pro** is an advanced, highly flexible NB-IoT tracker based on Quectel BG96 LTE Cat M1&NB1, integrated with GPS, BLE and a variety of sensors. The MCU running the board is a Nordic nRF52840 controller.

With the GPS and BLE features, the device can be used in a wide range of applications from outdoor to indoor scenarios where location based service are necessary.

The board is equipped with four sensors on board: humidity and temperature sensor, pressure sensor, 3-axis motion sensor, and ambient light sensor. Additionally, the extension IOs in the module allow expandable sensor application in addition to the on-board ones.

This board is particularly suitable to be used as a quick testing and prototyping tool for applications requiring Nb-IoT connectivity.
Application development supports the GCC environment.

### Features

- Quectel BG96 with LTE CAT M1, LTE NB1 and GNSS
- Nordic nRF52840, with BLE 5.0 and long range BLE.
- nRF52840 integrates the ultra-low power microcontroller ARM Cortex-M4 (64Mhz)
- Built-in humidity and temperature sensor, pressure sensor, 3-axis motion
  sensor, and ambient light sensor.
- iPEX connectors for the LoRa and GPS antenna and an on-board ceramic
  antenna for the BLE.
- nano SIM and ESIM options.
- Can be powered by either Micro USB, 3.7V rechargeable battery or a 5V
  Solar Panel Port
- Multiple interfaces, I2C, UART, GPIO and AD.

## Specifications

### Overview

The overview presents the RAK5010 WisTrio top view and its block diagram that shows the core of the board.


#### Module Overview

Figure 1 shows the top view and the interfaces of the RAK5010 NB-IoT tracker board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/top-view-of-the-board-with-interfaces.jpg"
  width="60%"
  caption="Top View of the Board with Interfaces"
/>

Figure 2 shows the bottom of the board, where Figure 3, the dimensions of the board, and Figure 4 shows the header pin spacing.

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

The block diagram below shows the internal architecture and external interfaces of the RAK5010 board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/block-diagram.png"
  width="80%"
  caption="RAK5010 Block Diagram"
/>

### Hardware

The hardware specification is categorized into seven parts. It discusses the interfacing, pinouts, and its corresponding functions and diagrams. It also covers the standard parameters of the board in terms of Electrical, Mechanical and Environmental of which the tabular data of the functionalities and the standard values are presented. Moreover, a thorough discussion of the RAK5010 specification is included in this section.

#### Interfaces

The node is built around the BG96 module and the nRF52840 BLE chip. It provides the following interfaces, headers, jumpers, buttons and connectors:

- Micro USB
- 2 sets of 4-pin 2.54mm Headers (UART, GPIOS, I2C, power)
- 4-pin Jlink header
- 2-pin Battery female
  interface
- 2-pin Solar Panel
  female interface
- LEDs
- Reset Button
- PWR Button for the
  BG96

There are two Antenna connectors:

- LTE Antenna with iPEX
  connector
- GPS Antenna with iPEX
  connector

##### Micro-B USB Interface

A Standard Micro-B USB compliant with USB 2.0 standard specification. This USB interface is connected to the USB port of NRF52840 for default. It also can connect to BG96 by reworking some resistor on the board. If this USB port is connected to the BG96, BG96’s AT command port GNSS port and debug port can be accessed through
this USB. It is also used as charge input port for battery. The Micro-B USB pin
definition is shown below:

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/usb-connector-pinout.png"
  width="20%"
  caption="USB Connector Pinout"
/>

| Pin |  Description   |
| :-: | :------------: |
|  1  | USB_VBUS (+5V) |
|  2  |     USB_DM     |
|  3  |     USB_DP     |
|  4  |       NC       |
|  5  |      GND       |

This USB port is also used as port for charging the battery.

##### LEDs

Three LEDs are used to indicate operating status, here are their functions:

|    Color     |        Connection         |                 Function                 |
| :----------: | :-----------------------: | :--------------------------------------: |
| 🟢 Green LED | connected to the nRF52840 |           Defined by the user            |
| 🔵 Blue LED  |    connect to the BG96    |    Indicates the status of the BG96.     |
|  🔴 Red LED  |    connect to the BG96    | Indicates the network status of the BG96 |

##### RESET Push Button

Reset Push Button is used to reset the nRF52840. You can control the BG96 reset with by the firmware of the nRF52840.

##### PWRKEY Push Button

When the BG96 is inpower off mode, it can be turned back on to normal mode by holding the PWRKEY button for at least 100ms. Holding the PWRKEY button for at least 650 ms, the module will execute the power-down procedure, after the PWRKEY is released.

##### IO Connections between the BG96 and the nRF52840

The nRF52840 communicates with the BG96 primarily though the UART interface. There is, however, additional signaling between the two modules. This is for the purpose
of auto monitoring of status indicators and control. The pin mapping is shown
below:

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

If BG96_RESET, BG96_PWRKEY, and BG96_WDISABLE are not set correctly, the BG96 module will not boot up normally. When powering up, the BG96 RESET should be retained at a low-level voltage, the BG96_WDISABLE should be retained at low level voltage, and the BG96_PWRKEY should be given a pulse with a high level and at least
100ms width in order to turn the BG96 normally.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/turning-on-the-bg96-via-the-pwrkey.jpg"
  width="50%"
  caption="Turning on the BG96 via the PWRKEY"
/>

##### Antenna Connector

The connectors for both the GPS and LTE antennas are iPEX.

Make sure that the LTE antenna is tuned to work at the operational frequency of your LTE provider, corresponding to your region.

#### Pin Definition

There are two connectors on the board:

##### P1

**Solar panel interface**

| Pin | Pin Name |       Description       |
| :-: | :------: | :---------------------: |
|  1  | C0NN_5V  | Positive of Solar Panel |
|  2  |   GND    |           GND           |

:::tip 📝 NOTE
The output of the solar panel cannot exceed 5.5V, otherwise it may cause permanent damage to the board.
:::

##### P2

**Li-ion battery connector**

| Pin | Pin Name |       Description       |
| :-: | :------: | :---------------------: |
|  1  |   GND    |           GND           |
|  2  |   VBAT   | Positive of the Battery |

##### J9

J9 is J-LINK connector, with J-LINK debugger, you can program and debug nRF52840.

| Pin | Pin Name |                    Description                     |
| :-: | :------: | :------------------------------------------------: |
|  1  |   VDD    | 1.8V default. Reference voltage for J-LINK, note 1 |
|  2  |  SWDIO   |           SWD data signal(3.3V tolerant)           |
|  3  |  SWDCLK  |          SWD clock signal(3.3V tolerant)           |
|  4  |   GND    |                        GND                         |

:::tip 📝 NOTE
VDD of J9 should connect to the PIN1 of SEGGER J-LINK (See Figure 8 below) debugger for SWDIO/SWDCLK’s reference voltage. If this pin is not connect correctly, the J-LINK’ logic level may not set to VDD of nrf52840, it may damage the nrf52840.
:::

Below is the definition of 20PIN segger J-LINK connector:

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/j-link-pinout.png"
  width="60%"
  caption="J-LINK Pinout"
/>

| Pin | Signal | Type  |                                                                                                                                        Description                                                                                                                                         |
| :-: | :----: | :---: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1  | VTref  | Input | This is the target reference voltage. It is used to check if the target has power, to create the logic-level reference for the input comparators and to control the output logic levels to the target. It is normally fed from VDD of the target board and must not have a series resistor |

##### J10 and J12

J10 and J12 are IO extension headers. Those are bridged from the nRF52840 IOs, through logical level shift circuits. Thus, the IOs level is set by the VREF pin. The function of these IOs is configurable. They can work as UART, I2C ，general GPIO or AD.

- Definition of J10:

| Pin | Pin Name |                                                                                                          Description                                                                                                           |
| :-: | :------: | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1  |   GND    |                                                                                                              GND                                                                                                               |
|  2  |   VBAT   |                                                                                                    Connected to the Battery                                                                                                    |
|  3  |   AIN    | Configurable IO, connected to AIN3 (P0.05) on nRF52840. If used as AD, the input range is configurable, please refer to the manual of nrf52840, if used as general IO, the logic level is 1.8V and there no level shift on it. |
|  4  | NRF_IO1  |                                                     Configurable IO, connected to P0.19 on the nRF52840. There is a level shift circuit between this pin and the nRF52840                                                      |

- Definition of J12:

| Pin | Pin Name |                                                     Description                                                     |
| :-: | :------: | :-----------------------------------------------------------------------------------------------------------------: |
|  1  | EXT_VREF |                                        Reference level for the IO extensions                                        |
|  2  | NRF_IO2  | Configurable IO, connect to P0.20 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 |
|  3  | NRF_IO3  | Configurable IO, connect to P1.02 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 |
|  4  | NRF_IO4  | Configurable IO, connect to P1.01 on the nRF52840. There is a level shift circuit between this pin and the nRF52840 |

The logic level shift circuit on the RAK5010 board connects EXT_VREF to your extension board’s power and equalizes it to the logical level of the IO on your extension board.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/typical-converter-circuitry.jpg"
  width="80%"
  caption="Typical Converter Circuitry"
/>

#### System on a Chip (SoCs) and Sensors

This section provides detail specifications about the different module present in the RAK5010 device.

##### 1. BG96

###### 1.1 Frequency Bands

|                        LTE Bands                         |      GSM      | Rx-Diversity  |                     GNSS                     |
| :------------------------------------------------------: | :-----------: | :-----------: | :------------------------------------------: |
|                    **Cat M1 & NB1**:                     |       -       |       -       |                      -                       |
| LTE-FDD: B1/B2/B3/B4/ B5/B8/B12/B13/B18/ B19/B20/B26/B28 | GSM850/GSM900 | Not Supported | GPS, GLONASS, BeiDou/ Compass, Galileo, QZSS |

###### 1.2 Key Feature of BG96 Module

|        Feature         | Details                                                                                                                                                                                                                                                                                                                                                                       |
| :--------------------: | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|    **Power Supply**    | Supply Voltage: 3.3V – 4.3V Typical supply voltage: 3.8V                                                                                                                                                                                                                                                                                                                      |
| **Transmitting Power** | Class: 3 (23dBm±2dB) for LTE-FDD bands Class: 3 (23dBm±2dB) for LTE-TDD bands Class: 4 (33dBm±2dB) for GSM850 Class: 4 (33dBm±2dB) for GSM900 Class: 1 (30dBm±2dB) for DCS1800 Class: 1 (30dBm±2dB) for PCS1900 Class: E2 (27dBm±3dB) for GSM850 8-PSK Class: E2 (27dBm±3dB) for GSM900 8-PSK Class: E2 (26dBm±3dB) for DCS1800 8-PSK Class: E2 (26dBm±3dB) for PCS1900 8-PSK |
|    **LTE Features**    | Supports LTE Cat M1 and LTE Cat NB1 Supports 1.4MHz RF bandwidth for LTE Cat M1 Supports 200KHz RF bandwidth for LTE Cat NB1 Supports SISO in the DL direction Cat M1: Max. 300Kbps (DL)/375Kbps (UL) Cat NB1: Max. 32Kbps (DL)/70Kbps (UL)                                                                                                                                   |
|    **GSM Features**    | **GPRS**: Supports GPRS multi-slot class 33 (33 by default) Coding scheme: CS-1, CS-2, CS-3, and CS-4 Max. 107Kbps (DL), Max. 85.6Kbps (UL) EDGE: Supports Edge multi-slot class 33 (33 by default) Supports GMSK and 8-PSK for different MCS Downlink Coding Schemes: CS 1-4 and MCS 1-9 Uplink Coding Schemes: CS 1-4 and MCS 1-9 Max. 296Kbps (DL), 236.8Kbps (UL)         |

##### 2. nRF52840 Module

|      Parameter      |                      Detail                       |
| :-----------------: | :-----------------------------------------------: |
|         CPU         | ARM® Cortex®-M4 32-bit processor with FPU, 64 MHz |
|        Flash        |                       1 MB                        |
|         RAM         |                      256 KB                       |
|    BLE Protocol     |                      BLE 5.0                      |
|    BLE Tx Power     |                     8 dBm max                     |
| BLE Rx Sensitivity  |             95 dBm @ 1 Mbps BLE mode              |
|    BLE Data Rate    |         2 Mbps, 1 Mbps, 500 Kbps,125 Kbps         |
| Current Consumption | 4.8mA in Tx, 4.6mA in Rx and 1.5uA in Sleep Mode  |

##### 3. Humidity and Temperature Sensors

The Temperature and Humidity Sensor is an SHTC3 from Sensirion.

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

| Symbol  |            Parameter            |                        Test Condition                        | Min |      Typ      | Max  |   Unit   |
| :-----: | :-----------------------------: | :----------------------------------------------------------: | :-: | :-----------: | :--: | :------: |
|  PTop   |   Operating Temperature Range   |                              -                               | -40 |       -       | +85  |    °C    |
| PTfull  | Full Accuracy Temperature Range |                              -                               |  0  |       -       | +65  |    °C    |
|   Pop   |    Operating Pressure Range     |                              -                               | 260 |       -       | 1260 |   hPa    |
|  Pbits  |      Pressure Output Data       |                              -                               |  -  |      24       |  -   | bitsbits |
|  Psens  |      Pressure Sensitivity       |                              -                               |  -  |     4096      |  -   | LSB/hPa  |
| PAccRel | Relative Accuracy over Pressure |               • P=800–1100 hPa <br>• T = 25°C                |  -  |     ±0.1      |  -   |   hPa    |
|  PAccT  |        Absolute Accuracy        | • **After OPC** Pop=0 to 65°C <br>• **No OPC** Pop=0 to 65°C |  -  |  ±0.1 <br>±1  |  -   |   hPa    |
| Pnoise  |   RMS Pressure Sensing Noise    |                   with embedded filtering                    |  -  |    0.0075     |  -   | hPa RMS  |
| ODRPres |    Pressure Output Data Rate    |                              -                               |  -  | 1/10/25/50/75 |  -   |    Hz    |

##### 5. 3-Axis Motion Sensor

| Symbol |     Parameter     |             Test Condition             | Min. | Typ.  | Max. |   Unit   |
| :----: | :---------------: | :------------------------------------: | :--: | :---: | :--: | :------: |
|   FS   | Measurement Range |            FS bit set to 00            |      | ±2.0  |      |    g     |
|        |                   |            FS bit set to 01            |      | ±4.0  |      |    g     |
|        |                   |            FS bit set to 10            |      | ±8.0  |      |    g     |
|        |                   |            FS bit set to 11            |      | ±16.0 |      |    g     |
|   So   |    Sensitivity    | FS bit set to 00; High-resolution mode |      |   1   |      | mg/digit |
|        |                   |     FS bit set to 00; Normal mode      |      |   4   |      | mg/digit |
|        |                   |    FS bit set to 00; Low Power mode    |      |  16   |      | mg/digit |
|        |                   | FS bit set to 01; High-resolution mode |      |   2   |      | mg/digit |
|        |                   |     FS bit set to 01; Normal mode      |      |   8   |      | mg/digit |
|        |                   |    FS bit set to 01; Low-power mode    |      |  32   |      | mg/digit |
|        |                   | FS bit set to 10; High-resolution mode |      |   4   |      | mg/digit |
|        |                   |     FS bit set to 10; Normal mode      |      |  16   |      | mg/digit |
|        |                   |    FS bit set to 10; Low-power mode    |      |  64   |      | mg/digit |
|        |                   | FS bit set to 11; High-resolution mode |      |  12   |      | mg/digit |
|        |                   |     FS bit set to 11; Normal mode      |      |  48   |      | mg/digit |
|        |                   |    FS bit set to 11; Low-power mode    |      |  192  |      | mg/digit |

##### 6. Ambient Light Sensor

The Ambient Light Sensor is an OPT3001 from TI:

| Parameter                                                   | Test Condition                                                                  | Min.           | Typ.           | Max.           | Unit    |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------- | -------------- | -------------- | ------- |
| Peak irradiance spectral responsibility                     | -                                                                               | -              | 550            | -              | nm      |
| Resolution (LSB)                                            | Lowest full-scale range, RN[3:0] = 0000b                                        | -              | 0.01           | -              | lux     |
| Full-scale illuminance                                      | -                                                                               | -              | 83865.6        | -              | -       |
| Measurement output result                                   | 0.64 lux per ADC code, 2620.90 lux full-scale (RN[3:0] = 0110) , 2000 lux input | 2812 <br> 1800 | 3125 <br> 2000 | 3437 <br> 2200 | ADC lux |
| Relative accuracy between gain ranges                       | -                                                                               | -              | 0.2%           | -              | -       |
| Infrared response (850 nm)                                  | -                                                                               | -              | 0.2%           | -              | -       |
| Light source variation (incandescent, halogen, fluorescent) | Bare device, no cover glass                                                     | -              | 4%             | -              | -       |
| Linearity                                                   | Input luminance > 40 lux <br> Input luminance < 40 lux                          | -              | 2%             | -              | -       |
| Measured drift across temperature                           | Input luminance = 2000 lux                                                      | -              | 5%             | -              | %/ °C   |
| Dark condition, ADC output                                  | 0.01 lux per ADC code                                                           | -              | 0 <br> 0       | 3 <br> 0.03    | lux     |
| Half-power angle                                            | 50% of full-power reading                                                       | -              | 47             | -              | degrees |

#### Antennas

##### 1. LTE Antenna

The LTE Antenna Connector is shown below:

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/ipex-onboard-connector-for-the-lte-antenna.jpg"
  width="25%"
  caption="iPEX onboard connector for the LTE antenna"
/>

A PCB antenna (Figure 11) is included with the board. In case you want to use another antenna keep in mind that you need to have the proper connector (iPEX) and have it tuned to the frequency band of operation in your region.

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/pcb-lte-antenna-with-pigtail.png"
  width="50%"
  caption="PCB LTE Antenna with Pigtail"
/>

###### Antenna Specifications

| Item               | Specifications       |
| ------------------ | -------------------- |
| Range of Frequency | 806-960/1710-2700MHz |
| VSWR               | ≤1.5                 |
| Gain               | 1.0                  |
| Polarization       | Linear               |
| Impedance (Ω)      | 50                   |
| Antenna Type       | PCB                  |

###### Environmental Requirements

The antenna environmental requirements are listed in the table below:

| Conditions | Temperature     | Humidity |
| ---------- | --------------- | -------- |
| Working    | -40 ºC ~ +75 ºC | 0% ~ 95% |
| Storage    | 40 ºC ~ +85 ºC  | 0% ~ 95% |

##### 2. GPS Antenna

The GPS antenna connector is shown below (same as the LTE one):

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/ipex-onboard-connector-for-the-gps-antenna.jpg"
  width="25%"
  caption="iPEX onboard connector for the GPS antenna"
/>

###### GPS Antenna Power Supply Control

In order to support low power and long battery life, the active GPS antenna’s power supply should be shut down when system don’t access the data from GPS module. The GPS power supply is controlled by nRF52840 with MOSFET, The pin map of GPS_EN on Nrf52840 is P1.09, and the circuit is below:

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/circuit-diagram.png"
  width="50%"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/circuit-diagram-2.png"
  width="50%"
  caption="iPEX onboard connector for the GPS antenna"
/>

- **set P1.07=1, GPS antenna power is on;**
- **set P1.07=0, GPS antenna power is off;**

###### Antenna Specifications

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/gps-antenna.png"
  width="50%"
  caption="GPS Antenna"
/>

| Item                                         | Specifications        | PET  |
| -------------------------------------------- | --------------------- | ---- |
| Range of Receiving Frequency                 | 1575.42±1.1           | ±2.5 |
| Center Frequency (MHz) w/ 30mm2 (2 GND plane | 1575.42               | ±3.0 |
| Bandwidth (MHz) (Return Loss ≤ -10dB)        | ≥10                   | ±0.5 |
| VSWR (in Center Frequency)                   | ≤1.5                  | ±0.5 |
| Gain (Zenith) (dBi Typ.) w/ 70mm2 GND Plane  | 4.5                   | ±0.5 |
| Axial Ratio (dB) w/ 70mm2 GND Plane          | 3.0                   | ±0.2 |
| Polarization                                 | Right-Handed Circular |      |
| Impedance (Ω)                                | 50                    |      |
| Frequency Temperature Coefficient (ppm/ºC)   | 0±10                  |      |

###### Amplifier Specifications

| Item              | Specifications |
| ----------------- | -------------- |
| Frequency Range   | 1575.42 MHz    |
| Gain              | 27 dB          |
| VSWR              | ≤ 2.0 V        |
| Noise Coefficient | ≤ 2.0 dB       |
| DC Voltage        | 3 ~ 5 V        |
| DC Current        | 10 mA          |

###### Environmental Test Performance Specifications

| Item              | Normal Temp. | High Temp. | Low Temp.  |
| ----------------- | ------------ | ---------- | ---------- |
| Amplifier Gain    | 27dB ± 2.0   | 27dB ± 2.0 | 27dB ± 2.0 |
| VSWR              | ≤ 2.0        | ≤ 2.0      | ≤ 2.0      |
| Noise Coefficient | ≤ 2.0        | ≤ 2.0      | ≤ 2.0      |

:::tip 📝 NOTE
**1. High temperature test:** soap in temperature (85°C) and humidity (95%) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change. <br> **2. Low temperature test:** soap in temperature (-40°C) chamber for 24-hour and return to normal temperature (at least for 1-hour) without visual shape change.
:::

###### Environmental Requirements

| Conditions | Temperature     | Humidity |
| ---------- | --------------- | -------- |
| Working    | -35 ºC ~ +80 ºC | 0% ~ 95% |
| Storage    | -35 ºC ~ +80 ºC | 0% ~ 95% |

#### Electrical Characteristics

##### Schematic Diagram

The component schematic diagram of the RAK5010 are shown below:

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

Stresses above those listed as “**absolute maximum ratings**” may cause permanent damage to the device. This is a stress rating, functional operation of the device under these conditions is not advised. Exposure to maximum rating conditions may affect device reliability.

|               Ratings               | Maximum Value (V) |
| :---------------------------------: | :---------------: |
|   Vbus, power supply on UBS port    |    -0.3 - 5.5     |
|        Vbat, battery voltage        |    -0.3 - 4.3     |
|      Vconn solar panel voltage      |    -0.3 - 5.5     |
|         IOs of J-link (J9)          |    -0.3 - 1.9     |
| IOs of BG96, nRF52840 - J10 and J12 |    -0.3 -VREF     |
|                 ESD                 |       2000        |

:::warning ⚠️ WARNING
The RAK5010, as any electronic equipment, is sensitive to electrostatic discharge (ESD), improper handling can cause permanent damage to module.
:::

##### Current Consumption

|                           Conditions                            | Current |
| :-------------------------------------------------------------: | :-----: |
|  The nRF52840 is Running, the BG96 transmits data @ NB1, 23dBm  | 200 mA  |
|     BLE transmits @ 0dBm, the BG96 is in power saving mode      |  7 mA   |
| The nRF52840 is in sleep mode, the BG96 is in power saving mode |  13 µA  |

:::tip 📝 NOTE
For the above results to be reached, the nRF52840's regulator has to be in DC-DC mode and all the sensors have to be in sleep mode.
:::

##### Power Requirements

The RAK5010 tracker board can be powered by a battery, connected to the P2. The nominal operational voltage of the battery should be within the range in the table:

| Min | Type | Max | Unit |
| :-: | :--: | :-: | :--: |
| 3.3 | 3.7  | 4.3 |  V   |

If a rechargeable battery is used, the USB connector is used as a charging port. The voltage and current fed to the battery through the port should not exceed the ones in the table below.

|    Parameter     |   Value   |
| :--------------: | :-------: |
| Charging Voltage | 4.5-5.5 V |
| Charging Current |  500 mA   |

A suitable Li-Ion battery would have the following parameters:

|     Parameter     |    Value    |
| :---------------: | :---------: |
| Standard Voltage  |    3.7 V    |
| Charging Voltage  |    4.2 V    |
|     Capacity      | As required |
| Discharge Current |     2A      |

:::tip 📝 NOTE
If a non-rechargeable battery is connected to the RAK5010, please never power USB port, it will damage the battery, might damage the board and is considered a fire hazard.
:::

_A 5V Solar panel can be connected to the board via the P1 connector to serve for the purpose of charging the battery._

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/battery-charging-via-solar-panel.jpg"
  width="60%"
  caption="Battery Charging via Solar Panel"
/>

##### Laboratory Testings

The figures below are the average current consumptions based on the different test cases.

**Equipments**:

- Oscilloscope
- RAK5010 WisTrio NB-IoT Tracker Pro

**LoRa Packet Sending**

The RAK5010 WisTrio NB-IoT Tracker Pro takes **489.733 ms** to send a LoRa packet which consumes **64.9** **mA** of current.

- **Sending Time**: 489.733 ms
- **Current consumption**: 64.9 mA

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/oscilloscope-screen-capture-of-lora®-packet-sending.jpg"
  width="85%"
  caption="Oscilloscope Screen Capture of LoRa Packet Sending"
/>

**Sleep Mode**

The RAK5010 WisTrio NB-IoT Tracker Pro when in sleep mode consumes **20.5 uA** of current.

- **Current consumption**: 20.5 uA

<rk-img
  src="/assets/images/wistrio/rak5010/datasheet/oscilloscope-screen-capture-of-rak4600-lora®-module-in-sleep-mode.jpg"
  width="85%"
  caption="Oscilloscope Screen Capture of RAK4600 LoRa Module in Sleep Mode"
/>

#### Mechanical Characteristics

##### Module Dimensions

Here are the detailed dimensions of the RAK5010 Tracker:

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

|        Parameter        |  Min   | Typical |  Max   |
| :---------------------: | :----: | :-----: | :----: |
| Operational Temp. Range | -35 ºC | +25 ºC  | +75 ºC |
|  Extended Temp. Range   | -40 ˚C | +25 ºC  | +80 ˚C |
|   Storage Temp. Range   | -40 ˚C | +25 ºC  | +80 ˚C |

### Software

Download the latest firmware version of the RAK5010 WisTrio™ provided in the table below. 

| Model     | Version  | Source                                                                                       |
| --------- | -------- | -------------------------------------------------------------------------------------------- |
| RAK5010   | V3.0.0.8 | [Download](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010_Latest_Firmware.zip) |
| RAK5010-M | V3.0.0.8 | [Download](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip)        |

## Models / Bundles

### Ordering Information

| **Part Number** | **Built-in Nordic nRF52840** | **Built-in Nordic BG96** | **Built-in Temperature and Humidity Sensor** | **Built-in 3-axis Motion Sensor** | **Built-in Pressure Sensor** | **Built in Light Sensor** |
| --------------- | ---------------------------- | ------------------------ | -------------------------------------------- | --------------------------------- | ---------------------------- | ------------------------- |
| RAK5010         | ✓                            | ✓                        | ✓                                            | ✓                                 | ✓                            | ✓                         |
| RAK5010-M       | ✓                            | ✓                        | ✓                                            | ✓                                 |                              |                           |

