---
tags:
  - datasheet
  - wislink
  - RAK8213
prev: ../Quickstart/
next: false
rak_desc: Provides comprehensive information about your RAK8213 WisLink Cellular mPCIe to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wislink-lte/rak8213/quickstart/overview/RAK8213_home.png
---

# RAK8213 WisLink Cellular mPCIe Datasheet



## Overview

### Description

The **RAK8213 WisLink Cellular mPCIe** is a multi-band LTE Cat M1/Cat NB1/EGPRS module based on the **Quectel BG96** with a standard PCI Express® form factor (**Mini PCIe**). It offers a maximum data rate of 375&nbsp;Kbps downlink and 375&nbsp;Kbps uplink.

RAK8213’s built-in GNSS module can support **GPS, GLONASS, BeiDou/Compass, Galileo, QZSS, integrated GNSS** greatly simplifies product design and provides faster, more accurate and more reliable positioning.

Rich Internet protocol, industry-standard interfaces (USB/UART/I2C/Status indicators) and rich features (applicable to Windows XP, Windows Vista, Windows 7/8/8.1/10, Linux drivers for Linux and Android) Modules that extend applicability are suitable for a wide range of M2M applications such as wireless POS, smart metering, and tracking.

### Features

- **LTE Cat. M1/Cat.NB1/EGPRS module** with Mini PCIe form factor, optimized for M2M and IoT applications
- USB Drivers and support 2.0 high speed interface
- Quectel Enhanced AT commands
- Feature refinements: supports **DFOTA, VoLTE**
- Easy migration from **Quectel GSM/GPRS, UMTS/HSPA and LTE modules**
- Robust mounting and interfaces
- PCM interface available for VOLTE

## Specifications

### Overview

The overview shows the top and back view of the RAK8213 board. It also presents the block diagram that discusses how the board works. 

#### Module Overview

The board is of standard mPCIe size. The top of the board is populated by the **Cellular and GNSS antenna connectors** (both **IPEX**) and the keys (Power and Reset), together with the **BG96 module** itself. The bottom contains the **Micro Sim Slot** and the **ESIM** pad (optional, not provided).

<rk-img
  src="/assets/images/wislink-lte/rak8213/datasheet/kocsckltisyzgecsg2ta.png"
  width="70%"
  caption="RAK8213 Board Overview"
/>

#### Block Diagram

The RAK8213 card integrates **one BG96 module** which represents the core of the device. This provides the related NB-IoT modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and two UFL connectors are available for external antennas integration.

<rk-img
  src="/assets/images/wislink-lte/rak8213/datasheet/fiw7l6fsapdalh4oizrn.png"
  width="80%"
  caption="RAK8213 Block Diagram"
/>

### Hardware

The hardware is categorized into seven (7) parts. It discusses the pinouts and their corresponding functions and diagrams. It also covers the parameters and standard values of the board. 

#### Pin Definition

<rk-img
  src="/assets/images/wislink-lte/rak8213/datasheet/irruft8ngircsmenz5qr.png"
  width="70%"
  caption="RAK8213 Pin Definition"
/>

| **Type** | **Description** |
| -------- | --------------- |
| **IO**   | Bidirectional   |
| **DI**   | Digital input   |
| **DO**   | Digital output  |
| **PI**   | Power input     |
| **PO**   | Power output    |
| **AI**   | Analog input    |
| **AO**   | Analog output   |
| **OC**   | Open collector  |
| **OD**   | Open drain      |
| **NC**   | No Connection   |

| **Pin Number** | **Mini PCIe Pin Rev. 2.0** | **RAK8213 Pin**   | **Type** | **Description**                                                 | **Remarks**                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| -------------- | -------------------------- | ----------------- | -------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1              | WAKE#                      | PI_PWRKEY         | DI       | Turn the module on/off                                          | - 3.3&nbsp;V power domain.<br>- When RAK8213 is in power off mode, it can be turned on to normal mode by driving the PI_PWRKEY pin to a high level for at least 500&nbsp;ms.<br>- When RAK821 is in normal mode, driving the PI_PWRKEY pin to a high level voltage for at least 650&nbsp;ms, the module will execute power-down procedure after the PI_PWRKEY is released. <br> - This pin defaults to NC, and the module will be turned on automatically after powered on. |
|                |                            | J6                |          | Turn on/off the Module Manual Key                               | - When RAK8213 is in power off mode, it can be turned on to normal mode by pushing J6 for at least 500&nbsp;ms.<br>- When RAK8213 is in normal mode, it can be turned to power off mode by pushing J6 for at least 650&nbsp;ms, the module will execute power-down procedure after the J6 is released. If unused, just ignore it. <br> - Not used in default.                                                                                                               |
| 2              | 3.3Vaux                    | 3V3               | PI       | 3.3&nbsp;V<sub>DC</sub> supply                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 3              | COEX1                      | VBUS_CTRL         | DO       | USB detection control                                           | - 3.3&nbsp;V power domain.<br>- High level: Enable USB detection<br>- Low level: Disable USB detection   <br> - This pin defaults to NC.                                                                                                                                                                                                                                                                                                                                    |
| 4              | GND                        | GND               | -        | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 5              | COEX2                      | GNSS_PWR_CTRL     | DO       | Active GNSS antenna power supply control                        | - 3.3&nbsp;V power domain.<br>- High level: Enable power supply (3.3&nbsp;V)<br>- Low level: Disable power supply <br> - This pin defaults to NC.                                                                                                                                                                                                                                                                                                                           |
| 6              | 1.5V                       | NC                |          | No Connection                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 7              | CLKREQ#                    | PI_AP_READY       | DI       | Application processor sleep state detection                     | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 8              | UIM_PWR                    | SIM_VDD_PCIE      | PO       | Power supply for (U) SIM card                                   | - Either 1.8&nbsp;V or 3.0&nbsp;V is supported by the module automatically.<br>- No Connection by default. Using (U) SIM card connector on board.                                                                                                                                                                                                                                                                                                                           |
| 9              | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 10             | UIM_DATA                   | SIM_DATA_PCIE     | IO       | Data signal of (U) SIM card                                     | - No Connection by default. Using (U) SIM card connector on board.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 11             | REFCLK-                    | PI_UART_TX        | DI       | UART receive data of RAK8213                                    | - 3.3&nbsp;V power domain. Connect to BG96’s UART_RX internally.                                                                                                                                                                                                                                                                                                                                                                                                            |
| 12             | UIM_CLK                    | SIM_CLK_PCIE      | DO       | Clock signal of (U) SIM card                                    | - No Connection by default. Using (U) SIM card connector on board.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 13             | REFCLK+                    | PI_UART_RX        | DO       | UART transmit data of RAK8213                                   | - 3.3&nbsp;V power domain. Connect to BG96’s UART_TX internally.                                                                                                                                                                                                                                                                                                                                                                                                            |
| 14             | UIM_RESET                  | SIM_RST_PCIE      | DO       | Reset signal of (U) SIM card                                    | - No Connection by default. Using (U) SIM card connector on board.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 15             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 16             | UIM_VPP                    | SIM_PRESENCE_PCIE | DI       | (U) SIM card insertion detection                                | - No Connection by default. Using (U) SIM card connector on board.                                                                                                                                                                                                                                                                                                                                                                                                          |
| 17             | RESERVED                   | PI_RI             | DO       | DO                                                              | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 18             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 19             | RESERVED                   | NC                |          | No Connection                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 20             | W_DISABLE#                 | PI_W_DISABLE      | DI       | Airplane mode control                                           | - 3.3&nbsp;V power domain.<br>- Pull-up by default.<br>- In low voltage level, the module can enter into airplane mode.<br>- If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                 |
| 21             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 22             | PERST#                     | PI_RESET          | DI       | Reset the module                                                | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
|                |                            | J5                |          | Reset the module Manual Key                                     | - Reset the module manually by pushing down J5. If unused, just ignore it.                                                                                                                                                                                                                                                                                                                                                                                                  |
| 23             | PERn0                      | PI_CTS            | DO       | Clear to send                                                   | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 24             | 3.3Vaux                    | 3V3               | PI       | 3.3&nbsp;V<sub>DC</sub> supply                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 25             | PERp0                      | PI_RTS            | DI       | Request to send                                                 | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 26             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 27             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 28             | 1.5V                       | PI_PSM            | DO       | Power saving mode indicator                                     | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 29             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 30             | SMB_CLK                    | BG96_I2C_SCL      | OD       | I2C serial clock. Used for external codec.                      | - 1.8&nbsp;V power domain.<br>- Pull-up resistor has been set internally.<br>- No Connection by default.                                                                                                                                                                                                                                                                                                                                                                    |
| 31             | PETn0                      | PI_DTR            | DI       | Data terminal ready (sleep mode control)                        | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 32             | SMB_DATA                   | BG96_I2C_SDA      | OD       | I2C serial data. Used for external codec.                       | - 1.8&nbsp;V power domain.<br>- Pull-up resistor has been set internally.<br>- No Connection by default.                                                                                                                                                                                                                                                                                                                                                                    |
| 33             | PETp0                      | PI_DCD            | DO       | Data carrier detection                                          | - 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                                                                                                   |
| 34             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 35             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 36             | USB_D-                     | USB-              | IO       | USB differential data (-)                                       | - Require differential impedance of 90&nbsp;Ω.                                                                                                                                                                                                                                                                                                                                                                                                                              |
| 37             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 38             | USB_D+                     | USB+              | IO       | USB differential data (+)                                       | - USB differential data (+)                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| 39             | 3.3Vaux                    | 3V3               | PI       | 3.3&nbsp;V<sub>DC</sub> supply                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 40             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 41             | 3.3Vaux                    | 3V3               | PI       | 3.3&nbsp;V<sub>DC</sub> supply                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 42             | LED_WWAN#                  | NETLIGHT_LED      | DO       | Indicate the module’s network activity status                   | **Logic Level Changes / _Network Status_**<br><br>- Flicker slowly (200&nbsp;ms Low /1800&nbsp;ms High) / _Network searching_<br>- Flicker slowly (1800&nbsp;ms Low /200&nbsp;ms High) /_Idle_<br>- Flicker quickly (125&nbsp;ms Low /125&nbsp;ms High) / _Data transfer is ongoing_<br>- Always low / _Voice Calling_<br>- 3.3&nbsp;V power domain. If unused, keep this pin open.                                                                                         |
| 43             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 44             | LED_WLAN#                  | NC                |          | No Connection                                                   |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 45             | RESERVED                   | BG96_PCM_CLK      | DO       | PCM clock output                                                | - 1.8&nbsp;V power domain. No Connection by default.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 46             | LED_WPAN#                  | STATUS_LED        | DO       | Indicate the module’s operation status.                         | - 3.3&nbsp;V power domain. <br>- It will output low level when the module is powered on. <br>- If unused, keep this pin open.                                                                                                                                                                                                                                                                                                                                               |
| 47             | RESERVED                   | BG96_PCM_OUT      | DO       | PCM frame synchronization output                                | - 1.8&nbsp;V power domain. No Connection by default.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 48             | 1.5V                       | VDD_EXT_1V8       | PO       | Provide 1.8&nbsp;V for external circuit<br><br>IOmax=10&nbsp;mA | - Power supply for external GPIO’s pull-up circuits. No Connection by default.                                                                                                                                                                                                                                                                                                                                                                                              |
| 49             | RESERVED                   | BG96_PCM_IN       | DI       | PCM data input                                                  | - 1.8&nbsp;V power domain. No Connection by default.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 50             | GND                        | GND               |          | Ground                                                          |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| 51             | RESERVED                   | BG96_PCM_SYNC     | DO       | PCM data output                                                 | - 1.8&nbsp;V power domain. No Connection by default.                                                                                                                                                                                                                                                                                                                                                                                                                        |
| 52             | 3.3Vaux                    | 3V3               | PI       | 3.3&nbsp;V<sub>DC</sub> supply                                  |                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

#### General Specifications

The following table describes the detailed features of RAK8213 module:

| **Features**               | **Details**                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Mini PCIe Interface        | Using the PCI Express Mini Card 1.2 standard interface                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| Power Supply               | - **Supply voltage**: 3.3~3.6&nbsp;V<br>- **Typical supply voltage**: 3.3&nbsp;V                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Transmitting Power         | - Class 3 (23&nbsp;dBm ± 2&nbsp;dB) for LTE-FDD bands<br>- Class 3 (23&nbsp;dBm ± 2&nbsp;dB) for LTE-TDD bands<br>- Class 4 (33&nbsp;dBm ± 2&nbsp;dB) for GSM850<br>- Class 4 (33&nbsp;dBm ± 2&nbsp;dB) for EGSM900<br>- Class 1 (30&nbsp;dBm ± 2&nbsp;dB) for DCS1800<br>- Class 1 (30&nbsp;dBm ± 2&nbsp;dB) for PCS1900<br>- Class E2 (27&nbsp;dBm ± 3&nbsp;dB) for GSM850 8-PSK<br>- Class E2 (27&nbsp;dBm ± 3&nbsp;dB) for EGSM900 8-PSK<br>- Class E2 (26&nbsp;dBm ± 3&nbsp;dB) for DCS1800 8-PSK<br>- Class E2 (26&nbsp;dBm ± 3&nbsp;dB) for PCS1900 8-PSK |
| LTE Features               | - Support LTE Cat M1 and LTE Cat NB1<br>- Support 1.4&nbsp;MHz RF bandwidth for LTE Cat M1<br>- Support 200&nbsp;KHz RF bandwidth for LTE Cat NB1<br>- Support SISO in DL direction<br>- Cat M1: Max. 375&nbsp;Kbps (DL)/375&nbsp;Kbps (UL)<br>- Cat NB1: Max. 32&nbsp;Kbps (DL)/70&nbsp;Kbps (UL)                                                                                                                                                                                                                                                               |
| GSM Features               | **GPRS:**<br><br>- Support GPRS multi-slot class 33 (33 by default)<br>- Coding scheme: CS-1, CS-2, CS-3 and CS-4<br>- Max. 107&nbsp;Kbps (DL)/85.6&nbsp;Kbps (UL)<br><br>**EDGE:**<br><br>- Support EDGE multi-slot class 33 (33 by default)<br>- Support GMSK and 8-PSK for different MCS (Modulation and Coding Scheme)<br>- Downlink coding schemes: CS 1-4 and MCS 1-9<br>- Uplink coding schemes: CS 1-4 and MCS 1-9<br>- Max. 296&nbsp;Kbps (DL)/236.8&nbsp;Kbps (UL)                                                                                     |
| Internet Protocol Features | - Support **PPP/TCP/UDP/SSL/TLS/FTP(S)/HTTP(S)/NITZ/PING/MQTT** protocols<br>- Support **Password Authentication Protocol** (PAP) and **Challenge Handshake Authentication Protocol** (CHAP) protocols which are usually used for PPP connections                                                                                                                                                                                                                                                                                                                |
| SMS                        | - Text and PDU mode<br>- Point to point MO and MT<br>- SMS cell broadcast<br>- SMS storage: ME by default                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| (U) SIM Card Interface     | - Support USIM/SIM card: 1.8&nbsp;V, 3.0&nbsp;V                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Audio Feature \*\*         | - Support one digital audio interface: PCM interface                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| USB Interface              | - Compliant with USB 2.0 specification (slave only) and the data transfer rate can reach up to 480&nbsp;Mbps<br>- Used for AT command communication, data transmission, GNSS NMEA output, software debugging and firmware upgrade<br>- Support USB serial drivers for **Windows** 7/8/8.1/10, **Linux** 3.x(3.4 or later)/4.1~4.15, **Android** 4.x/5.x/6.x/7.x/8.x/9.x                                                                                                                                                                                          |
| UART Interfaces            | **UART1:**<br><br>- Used for data transmission and AT command communication;<br>- 115200&nbsp;bps by default;<br>- The default frame format is 8N1 (8 data bits, no parity, 1 stop bit) ;<br>- Support RTS and CTS hardware flow control;<br><br>**UART2:**<br><br>- Used for module debugging and log output;<br>- 115200&nbsp;bps baud rate;<br><br>**UART3:**<br><br>- Used for outputting GNSS data or NMEA sentences;                                                                                                                                      |
| AT Commands                | - 3GPP TS 27.007 and 3GPP TS 27.005 AT commands, as well as Quectel enhanced AT commands                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| Network Indication         | - One NETLIGHT pin for network connectivity status indication                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| Antenna Interfaces         | - Main antenna (ANT_MAIN) and GNSS antenna (ANT_GNSS) interfaces                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| Physical Characteristics   | - **Size**: (51.0±0.15)&nbsp;mm × (30.0±0.15)&nbsp;mm × (4.9±0.2)&nbsp;mm<br>- **Weight**: approx. 128.6&nbsp;g                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| Temperature Range          | - **Operation temperature range**: -35°&nbsp;C ~ +75°&nbsp;C _(1)_<br>- **Extended temperature range**: -40°&nbsp;C ~ +85°&nbsp;C _(2)_<br>- **Storage temperature range**: -40°&nbsp;C ~ +90°&nbsp;C                                                                                                                                                                                                                                                                                                                                                            |
| Firmware Upgrade           | - USB interface, DFOTA                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| RoHS                       | - All hardware components are fully compliant with EU RoHS directive                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |

::: tip 📝 NOTE
\*\* means under development.

_(1)_ Within the operation temperature range, the module is 3GPP compliant.

_(2)_ Within an extended temperature range, the module remains the ability to establish and maintain a voice, SMS, data transmission, emergency call, etc. There is no unrecoverable malfunction. There are also no effects on radio spectrum and no harm to the radio network. Only one or more parameters like Pout might reduce in their value and exceed the specified tolerances. When the temperature returns to the normal operating temperature levels, the module will meet 3GPP specifications again.
:::

#### GNSS Receiver

RAK8213 includes a fully integrated **Global Navigation Satellite System (GNSS)** solution that supports Gen8C-Lite of Qualcomm (GPS, GLONASS, BeiDou/Compass, Galileo andQZSS).

The module supports standard NMEA-0183 protocol, and outputs NMEA sentences at 1&nbsp;Hz data update rate via USB interface by default. By default, RAK8213 GNSS engine is switched off. It has to be switched on via AT command.

##### GNSS Performance

The following table shows the GNSS performance of RAK8213:

| **Parameter**             | **Description**       | **Conditions**                  | **Typical**     | **Unit**   |
| ------------------------- | --------------------- | ------------------------------- | --------------- | ---------- |
| Sensitivity<br><br>(GNSS) | Cold start            | - Autonomous                    | -146            | dBm        |
|                           | Reacquisition         | - Autonomous                    | -157            | dBm        |
|                           | Tracking              | - Autonomous                    | -157            | dBm        |
| TTFF<br><br>(GNSS)        | Cold start @ open sky | - Autonomous <br>- XTRA enabled | 31<br><br>11.54 | s<br><br>s |
|                           | Warm start @ open sky | - Autonomous <br>- XTRA enabled | 21<br><br>2.52  | s<br><br>s |
|                           | Hot start @ open sky  | - Autonomous<br>- XTRA enabled  | 27<br><br>1.82  | s<br><br>s |
| Accuracy <br><br>(GNSS)   | CEP-50                | - Autonomous @ open sky         | <2.5            | m          |

::: tip 📝 NOTE 
1. **Tracking sensitivity**: the lowest GNSS signal value at the antenna port on which the module can keep on positioning for 3&nbsp;minutes.

2. **Reacquisition sensitivity**: the lowest GNSS signal value at the antenna port on which the module can fix position again within 3&nbsp;minutes after loss of lock.

3. **Cold start sensitivity**: the lowest GNSS signal value at the antenna port on which the module fixes position within 3&nbsp;minutes after executing cold start command.
:::

#### RF Characteristics

##### Operating Frequencies

The RAK8213 is an **LTE Cat M1/Cat NB1/EGPRS** module offering maximum data rates of 375&nbsp;kbps downlink and uplink. It features global frequency bands, ultra-low power consumption.

| **3GPP Band**       | **Transmit** | **Receive** | **Unit** |
| ------------------- | ------------ | ----------- | -------- |
| LTE-FDD B1          | 1920~1980    | 2110~2170   | MHz      |
| LTE-FDD B2, PCS1900 | 1850~1910    | 1930~1990   | MHz      |
| LTE-FDD B3, DCS1800 | 1710~1785    | 1805~1880   | MHz      |
| LTE-FDD B4          | 1710~1755    | 2110~2155   | MHz      |
| LTE-FDD B5, GSM850  | 824~849      | 869~894     | MHz      |
| LTE-FDD B8, EGSM900 | 880~915      | 925~960     | MHz      |
| LTE-FDD B12         | 699~716      | 729~746     | MHz      |
| LTE-FDD B13         | 777~787      | 746~756     | MHz      |
| LTE-FDD B18         | 815~830      | 860~875     | MHz      |
| LTE-FDD B19         | 830~845      | 875~890     | MHz      |
| LTE-FDD B20         | 832~862      | 791~821     | MHz      |
| LTE-FDD B25 _(1)_   | 1850~1915    | 1930~1995   | MHz      |
| LTE-FDD B26 _(2)_   | 814~849      | 859~894     | MHz      |
| LTE-FDD B28         | 703~748      | 758~803     | MHz      |
| LTE-FDD B39         | 1880~1920    | 1880~1920   | MHz      |

::: tip 📝 NOTE
_(1)_ LTE-FDD B25 is supported on BG96 of R1.2 hardware version.

_(2)_ means under development.
:::

#### Electrical Characteristics

##### Operation and Storage Temperatures

The operation and storage temperatures of the module are listed in the following table:

| **Parameter**                     | **Minimum** | **Typical** | **Maximum** | **Unit** |
| --------------------------------- | ----------- | ----------- | ----------- | -------- |
| Operation Temperature Range _(1)_ | -35         | +25         | +75         | ºC       |
| Extended Temperature Range _(2)_  | -40         |             | +85         | ºC       |
| Storage Temperature Range         | 40          |             | +90         | ºC       |

::: tip 📝 NOTE
\_(1)\_Within operation temperature range, the module is 3GPP compliant.

_(2)_ Within extended temperature range, the module remains the ability to establish and maintain a voice, SMS, data transmission, emergency call, etc. There is no unrecoverable malfunction. There are also no effects on radio spectrum and no harm to radio network. Only one or more parameters like Pout might reduce in their value and exceed the specified tolerances. When the temperature returns to the normal operating temperature levels, the module will meet 3GPP specifications again.
:::

##### Current Consumption

The following table shows current consumption of RAK8213:

::: tip 📝 NOTE
**LTE-FDD B25** is supported on BG96 of R1.2 hardware version.
:::

| **Parameter** | **Description**                          | **Condition**                     | **Typical**_(1)_ | **Unit** |
| ------------- | ---------------------------------------- | --------------------------------- | ---------------- | -------- |
| **IVBAT**     | **Leakage Current**                      | Power off mode                    | 8                | uA       |
|               | **PSM**                                  | Power Saving Mode @ Real Network  | 10               | uA       |
|               | **Rock Bottom Sleep** _(2)_              | AT+CFUN=0 @ Sleep State           | 0.8              | mA       |
|               | **Sleep State** _(3)_                    | DRX=1.28&nbsp;s @ Instrument      | 1.5              | mA       |
|               |                                          | DRX=1.28&nbsp;s @ Instrument      | 1.96             | mA       |
|               |                                          | e-I-DRX=20.48&nbsp;s @ Instrument | 1.2              | mA       |
|               |                                          | e-I-DRX=20.48&nbsp;s @ Instrument | 1.1              | mA       |
|               |                                          | @ Real 2G Network                 | 2.0              | mA       |
|               | **Idle State**                           | DRX=1.28&nbsp;s @ Instrument      | 15               | mA       |
|               |                                          | DRX=1.28&nbsp;s @ Instrument      | 15               | mA       |
|               |                                          | e-I-DRX=20.48&nbsp;s @ Instrument | 15               | mA       |
|               |                                          | e-I-DRX=20.48&nbsp;s @ Instrument | 15               | mA       |
|               |                                          | @ Real 2G Network                 | 15               | mA       |
|               | **LTE Cat M1 Data Transfer (GNSS OFF)**  | LTE-FDD B1 @ 23.31&nbsp;dBm       | 220              | mA       |
|               |                                          | LTE-FDD B2 @ 23.05&nbsp;dBm       | 208              | mA       |
|               |                                          | LTE-FDD B3 @ 23.09&nbsp;dBm       | 214              | mA       |
|               |                                          | LTE-FDD B4 @ 23.19&nbsp;dBm       | 214              | mA       |
|               |                                          | LTE-FDD B5 @ 23.22&nbsp;dBm       | 210              | mA       |
|               |                                          | LTE-FDD B8 @ 21.83&nbsp;dBm       | 203              | mA       |
|               |                                          | LTE-FDD B12 @ 21.88&nbsp;dBm      | 215              | mA       |
|               |                                          | LTE-FDD B13 @ 21.96&nbsp;dBm      | 197              | mA       |
|               |                                          | LTE-FDD B18 @ 23.04&nbsp;dBm      | 212              | mA       |
|               |                                          | LTE-FDD B19 @ 23.13&nbsp;dBm      | 211              | mA       |
|               |                                          | LTE-FDD B20 @ 23.07&nbsp;dBm      | 209              | mA       |
|               |                                          | LTE-FDD B25 @ 23.01&nbsp;dBm      | 211              | mA       |
|               |                                          | LTE-FDD B26 @ TBD                 | TBD              | mA       |
|               |                                          | LTE-FDD B28 @ 22.52&nbsp;dBm      | 215              | mA       |
|               |                                          | LTE-TDD B39 @ TBD                 | TBD              | mA       |
|               | **LTE Cat NB1 Data Transfer (GNSS OFF)** | LTE-FDD B1 @ 22.8&nbsp;dBm        | 170              | mA       |
|               |                                          | LTE-FDD B2 @ 22.6&nbsp;dBm        | 171              | mA       |
|               |                                          | LTE-FDD B3 @ 22.6&nbsp;dBm        | 161              | mA       |
|               |                                          | LTE-FDD B4 @ 22.6&nbsp;dBm        | 161              | mA       |
|               |                                          | LTE-FDD B5 @ 22.9&nbsp;dBm        | 156              | mA       |
|               |                                          | LTE-FDD B8 @ 22.7&nbsp;dBm        | 170              | mA       |
|               |                                          | LTE-FDD B12 @ 23&nbsp;dBm         | 170              | mA       |
|               |                                          | LTE-FDD B13 @ 22.9&nbsp;dBm       | 167              | mA       |
|               |                                          | LTE-FDD B18 @ 23.1&nbsp;dBm       | 159              | mA       |
|               |                                          | LTE-FDD B19 @ 22.9&nbsp;dBm       | 155              | mA       |
|               |                                          | LTE-FDD B20 @ 22.7&nbsp;dBm       | 157              | mA       |
|               |                                          | LTE-FDD B25 @ 23&nbsp;dBm         | 165              | mA       |
|               |                                          | LTE-FDD B26 @ TBD                 | TBD              | mA       |
|               |                                          | LTE-FDD B28 @ 22.5&nbsp;dBm       | 163              | mA       |
|               | **GPRS Data Transfer (GNSS OFF)**        | GSM850 4UL 1DL @ 30.17&nbsp;dBm   | 575              | mA       |
|               |                                          | GSM850 3UL 2DL @ 32&nbsp;dBm      | 533              | mA       |
|               |                                          | GSM850 2UL 3DL @ 32.74&nbsp;dBm   | 402              | mA       |
|               |                                          | GSM850 1UL 4DL @ 32.52&nbsp;dBm   | 220              | mA       |
|               |                                          | EGSM900 4UL 1DL @ 30.54&nbsp;dBm  | 586              | mA       |
|               |                                          | EGSM900 3UL2DL @ 31.36&nbsp;dBm   | 556              | mA       |
|               |                                          | EGSM900 2UL 3DL @ 32.62&nbsp;dBm  | 399              | mA       |
|               |                                          | EGSM900 1UL 4DL @ 32.75&nbsp;dBm  | 228              | mA       |
|               |                                          | DCS1800 4UL 1DL @ 29.81&nbsp;dBm  | 543              | mA       |
|               |                                          | DCS1800 3UL 2DL @ 30.09&nbsp;dBm  | 426              | mA       |
|               |                                          | DCS1800 2UL 3DL @ 30.1&nbsp;dBm   | 301              | mA       |
|               |                                          | DCS1800 1UL4DL @ 30.34&nbsp;dBm   | 182              | mA       |
|               |                                          | PCS1900 4UL 1DL @ 29.64&nbsp;dBm  | 516              | mA       |
|               |                                          | PCS1900 3UL 2DL @ 29.86&nbsp;dBm  | 404              | mA       |
|               |                                          | PCS1900 2UL 3DL @ 29.7&nbsp;dBm   | 281              | mA       |
|               |                                          | PCS1900 1UL 4DL @ 29.94&nbsp;dBm  | 171              | mA       |
|               | **EDGE Data Transfer (GNSS OFF)**        | GSM850 4UL1DL @ 26.02&nbsp;dBm    | 403              | mA       |
|               |                                          | GSM850 3UL 2DL @ 26.11&nbsp;dBm   | 312              | mA       |
|               |                                          | GSM850 2UL 3DL @ 26.57&nbsp;dBm   | 224              | mA       |
|               |                                          | GSM850 1UL 4DL @ 26.92&nbsp;dBm   | 224              | mA       |
|               |                                          | EGSM900 4UL 1DL @ 25.92&nbsp;dBm  | 136              | mA       |
|               |                                          | EGSM900 3UL 2DL @ 26.11&nbsp;dBm  | 391              | mA       |
|               |                                          | EGSM900 2UL 3DL @ 26.16&nbsp;dBm  | 301              | mA       |
|               |                                          | EGSM900 1UL 4DL @ 26.88&nbsp;dBm  | 217              | mA       |
|               |                                          | DCS1800 4UL 1DL @ 24.7&nbsp;dBm   | 133              | mA       |
|               |                                          | DCS1800 3UL 2DL @ 25.97&nbsp;dBm  | 373              | mA       |
|               |                                          | DCS1800 2UL 3DL @ 25.03&nbsp;dBm  | 286              | mA       |
|               |                                          | DCS1800 1UL 4DL @ 25.03&nbsp;dBm  | 208              | mA       |
|               |                                          | PCS1900 4UL1DL @ 24.92&nbsp;dBm   | 127              | mA       |
|               |                                          | PCS1900 3UL 2DL @ 24.86&nbsp;dBm  | 375              | mA       |
|               |                                          | PCS1900 2UL 3DL @ 25.17&nbsp;dBm  | 288              | mA       |
|               |                                          | PCS1900 1UL 4DL @ 25.31&nbsp;dBm  | 207              | mA       |
|               | _\_LTE Voice (GNSS OFF) _\_              | Voice @ LTE Cat M1 network        | 108              | mA       |

::: tip 📝 NOTE
_(1)_**Typical value** means the average current consumption value.

_(2)_**Rock Bottom Sleep** means the operation is performed with **AT+CFUN=0** and **AT+QSLCK=1** (DTR pin at high level).

_(3)_**Sleep state** with UART connected and USB disconnected. The module can enter sleep mode through executing **AT+QSCLK=1** command via UART interface and then controlling the module’s DTR pin.
:::

The following table shows GNSS Current Consumption:

| **Description**       | **Conditions**               | **Typical** | **Unit** |
| --------------------- | ---------------------------- | ----------- | -------- |
| Searching (AT+CFUN=0) | Cold Start @ Passive Antenna | 41.7        | mA       |
|                       | Lost State @ Passive Antenna | 42          | mA       |
| Tracking (AT+CFUN=0)  | Instrument Environment       | 21.7        | mA       |
|                       | Open Sky @ Passive Antenna   | 36          | mA       |
|                       | Open Sky @ Active Antenna    | 35          | mA       |

##### RF Output Power

The following table shows the RF output power of RAK8213:

| **Frequency**                                              | **Max**                 | **Min**          |
| ---------------------------------------------------------- | ----------------------- | ---------------- |
| LTE-FDD B1/B2/B3/B4/B5/B8/B12/B13/B18/B19/B20/B25/ B26/B28 | 23&nbsp;dBm ± 2&nbsp;dB | -                |
| LTE-TDD B39                                                | 23&nbsp;dBm ± 2&nbsp;dB | -                |
| GSM850/EGSM900                                             | 33&nbsp;dBm ± 2&nbsp;dB | 5&nbsp;dBm ± 5dB |
| DCS1800/PCS1900                                            | 30&nbsp;dBm ± 2&nbsp;dB | 0&nbsp;dBm ± 5dB |
| GSM850/EGSM900 (8-PSK)                                     | 27&nbsp;dBm ± 3&nbsp;dB | 5&nbsp;dBm ± 5dB |
| DCS1800/PCS1900 (8-PSK)                                    | 26&nbsp;dBm ± 3&nbsp;dB | 0&nbsp;dBm ± 5dB |

##### RF Receiving Sensitivity

::: tip 📝 NOTE
**Cat M1/ 3GPP, Cat NB1 /3GPP** and **GSM/3GPP** are the RF Receiving Sensitivity of RAK8213 in dBm.
:::

| **Network** | **Band**          | **Primary** | **Diversity**        | **Cat M1/ 3GPP** | **Cat NB1**_(1)_**/3GPP** | **GSM/3GPP** |
| ----------- | ----------------- | ----------- | -------------------- | ---------------- | ------------------------- | ------------ |
| **LTE**     | LTE-FDD B1        | Supported   | Not Supported        | -107.0/-102.7    | -112.5/-107.5             |              |
|             | LTE-FDD B2        |             |                      | -106.7/-100.3    | -112.5/-107.5             |              |
|             | LTE-FDD B3        |             |                      | -106.8/-99.3     | -113/-107.5               |              |
|             | LTE-FDD B4        |             |                      | -106.9/-102.3    | -112.5/-107.5             |              |
|             | LTE-FDD B5        |             |                      | -107.0/-100.8    | -114/-107.5               |              |
|             | LTE-FDD B8        |             |                      | -107.3/-99.8     | -113/-107.5               |              |
|             | LTE-FDD B12       |             |                      | -107.7/-99.3     | -113.5/-107.5             |              |
|             | LTE-FDD B13       |             |                      | -106.5/-99.3     | -112/-107.5               |              |
|             | LTE-FDD B18       |             |                      | -107.5/-102.3    | -113.5/-107.5             |              |
|             | LTE-FDD B19       |             |                      | -107.1/-102.3    | -114/-107.5               |              |
|             | LTE-FDD B20       |             |                      | -107.2/-99.8     | -114/-107.5               |              |
|             | LTE-FDD B25 _(2)_ |             |                      | -106/-100.3      | -112/-107.5               |              |
|             | LTE-FDD B26       |             |                      | TBD/-100.3       | TBD/-107.5                |              |
|             | LTE-FDD B28       |             |                      | -107.2/-100.8    | -113/-107.5               |              |
|             | LTE-FDD B39       |             |                      | TBD /-103        | Not Supported             |              |
| **GSM**     | GSM850/EGSM900    | Supported   | Not<br><br>Supported |                  |                           | -109/-102    |
|             | DCS1800/PCS1900   |             |                      |                  |                           | -108.5/-102  |

::: tip 📝 NOTE
\_(1)\_LTE Cat NB1 receiving sensitivity without repetitions.

\_(2)\_LTE-FDD B25 is supported on BG96 of R1.2 hardware version.
:::

##### Electrostatic Discharge

The module is not protected against **electrostatics discharge (ESD)** in general. Consequently, it is subject to ESD handling precautions that typically apply to ESD sensitive components. Proper ESD handling and packaging procedures must be applied throughout the processing, handling and operation of any application that incorporates the module.

The following table shows the electrostatic discharge characteristics of RAK8213:

| **Tested Interfaces**                | **Contact Discharge** | **Air Discharge** | **Unit** |
| ------------------------------------ | --------------------- | ----------------- | -------- |
| 3.3Vaux, GND                         | ±10                   | ±15               | kV       |
| Main/GNSS Antenna <br><br>Interfaces | ±10                   | ±15               | kV       |

#### Mechanical Characteristics

The board only weighs 128.6&nbsp;grams, its length is 51&nbsp;mm while its width is 30&nbsp;mm. The dimensions of the module fall completely within the **PCI Express Mini Card Electromechanical Specification**, except for the card's thickness (nominal value of 4.9&nbsp;mm).

<rk-img
  src="/assets/images/wislink-lte/rak8213/datasheet/RAK8213_Dimensions.png"
  width="80%"
  caption="RAK8213 Board Overview"
/>

#### Schematic Diagram

**Figure 5** shows RAK8213’s PCIe interface schematic.

<rk-img
  src="/assets/images/wislink-lte/rak8213/datasheet/sjmmlwoo7ehwdaj0ulr3.jpg"
  width="90%"
  caption="RAK8213 Schematic Diagram"
/>

### Software

Download the latest firmware version of RAK8212 in the table provided below.

| Model   | Version | Source                                                                                              |
| ------- | ------- | --------------------------------------------------------------------------------------------------- |
| RAK8213 | V1.0.1  | [Download](https://downloads.rakwireless.com/Cellular/RAK8213/Firmware/RAK8213_Latest_Firmware.zip) |

## Models / Bundles

### Ordering Information

| **Model** | **Description**                                                 | **Supported Regions** |
| --------- | --------------------------------------------------------------- | --------------------- |
| RAK8213   | Multi-band LTE Cat M1/Cat NB1/EGPRS module of Mini-PCIe edition | Global                |
