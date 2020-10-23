---
tags:
  - datasheet
  - wislink
prev: ../Overview/
next: false
---

# RAK833 WisLink LPWAN Concentrator Datasheet

<!-- <rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rak833.png"
  width="60%"
  caption="RAK833 WisLink LPWAN Concentrator"
/> -->

## Overview

### Description

The **RAK833 WisLink LPWAN Concentrator** is a family of LoRa concentrator modules with mini PCIe form factor based on SX1301, which enables an easy integration into an existing routers and other network equipments with gateway capabilities.This can be used in any embedded platform offering a free mini-PCIe slot with USB and SPI connectivity.

RAK833 WisLink LPWAN Concentrator is a complete and cost efficient gateway solution offering up to 10 programmable parallel demodulation paths. It is targeted at smart metering fixed networks and Internet of Things applications with up to 500 nodes per square kilometer (km²) in moderately interfered environment. These modules have the industry standard PCI Express Mini Card form factor which enables easy integration into an application board.

### Product Features

- Full LoRaWAN 1.0.2 stack support
- Compact size in the form of a mPCIe 52pin form factor card
- SX1301 base band processor emulates 49 x LoRa demodulators, 10 parallel demodulation paths. It supports 8 uplinks channel and 1 downlink channel.
- Max Tx Power of 20dBm
- RX sensitivity of -136dBm
- Compatible with 3.3V mPCIe type slots, common for 3G/LTE modules
- With an option for SPI interface board or both SPI and USB interfaces
- Perfect for a Plug-and-Play Setup when used together with the mPCIe to USB adapter (check this option above to include the board)

## Specifications

### Overview

The overview shows the top and back view of the RAK833 board. It also presents the block diagram that shows how the board works. 

#### Board Overview

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/board_overview.png"
  width="80%"
  caption="RAK833 WisLink LPWAN Concentrator Dimension"
/>

#### Block Diagram

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/block-diagram.png"
  width="90%"
  caption="RAK833 WisLink LPWAN Concentrator Block Diagram"
/>

### Hardware

The hardware is categorized into seven parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board in terms of electrical, mechanical, and environmental. 

#### Interfaces

##### GPS_PPS

The RAK833 WisLink LPWAN Concentrator includes the GPS_PPS input for received packets time-stamped. It integrates **one (1) SX1301** chip, **two (2) SX1255/7**, and other chip for RF signal, which represents the core of the device, providing the related LoRa modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one u.FL connectors are available for external antennas integration.

##### Module supply input

RAK833 WisLink LPWAN Concentrator must be supplied through the **3.3Vaux** pins by a DC power supply. The voltage must be stable, because during this operation the current drawn from 3.3Vaux can vary significantly based on the power consumption profile of the SX1301 chip (see [**SX1301 DS**](https://www.semtech.com/uploads/documents/sx1301.pdf) datasheet).

##### Antenna RF interfaces

The modules have one RF interface over a standard **U. FL connectors** (Hirose U. FL-R-SMT) with a characteristic impedance of 50 Ω. The RF port (ANT1) supports both Tx and Rx, providing the antenna interface.

##### SPI interface

An SPI interface is provided on the PCIe*SCK, PCIe* MISO, PCIe*MOSI, PCIe* CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1301 via a synchronous full-duplex protocol. Only the slave side is implemented.

##### USB interface

:::warning ⚠️ WARNING
This feature is not available for RAK833-SPI version
:::

RAK833 WisLink LPWAN Concentrator can support the high speed USB to SPI by **FT2232H**, it includes a high-speed USB 2.0 compliant interface with maximum 480 Mb/s data rate, representing the interface for any communication with an external host application processor. The module itself acts as a USB device and can be connected to any USB host equipped with compatible drivers. For more information, please refer to the data sheet of [**FT2232H**](https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT2232H.pdf).

##### RESET

RAK833 WisLink LPWAN Concentrator includes the RESET active-high input signal to reset the radio operations as specified by the SX1301 Specification.

##### SPDT_SEL

RAK833 WisLink LPWAN Concentrator includes the SPDT_SEL input for selecting SPI or USB interface.

- SPDT_SEL="H", USB Port Enable,
- SPDT_SEL="L", SPI Port Enable.

#### Pin Definition

The following table lists the pin numbers of RAK833 WisLink LPWAN Concentrator and its corresponding names and description. Refer to figure below for a pinout diagram.

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/pinout.png"
  width="80%"
  caption="RAK833 WisLink LPWAN Concentrator Pinout Diagram"
/>

| No  | Mini PCIEx PIN Rev. 2.0 | RAK833 PIN |  Power  | I/O |     Description     |                                                                                         Remarks                                                                                          |
| :-: | :---------------------: | :--------: | :-----: | :-: | :-----------------: | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|  1  |          WAKE#          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  2  |         3.3Vaux         |  3.3Vaux   | 3.3Vaux | N/A | RAK833 supply input |                                                                                     Connect to 3.3 V                                                                                     |
|  3  |          COEX1          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  4  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
|  5  |          COEX2          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  6  |          1.5V           |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  7  |         CLKREQ#         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  8  |         UIM_PWR         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
|  9  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 10  |        UIM_DATA         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 11  |         REFCLK-         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 12  |         UIM_CLK         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 13  |         REFCLK+         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 14  |        UIM_RESET        |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 15  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 16  |         UIM_SPU         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 17  |       UIM_IC\_ DM       |  SPDT_SEL  |    -    | N/A |          -          |                                                                                 Internal 10K ohm pull-up                                                                                 |
| 18  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 19  |         GPS_PPS         |  GPS_PPS   |         | N/A |                     |                                                                          Internal connection GPS_PPS for SX1301                                                                          |
| 20  |       W_DISABLE1#       |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 21  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 22  |         PERST#          |   RESET    |         |  I  | RAK833 reset input  |                                                                              Active high(≥100ns) for SX1301                                                                              |
| 23  |          PERn0          |     NC     |         | N/A |                     |                                                                                 Internally not connected                                                                                 |
| 24  |         3.3Vaux         |  3.3Vaux   | 3.3Vaux |  I  | RAK833 supply input |                                                                                     Connect to 3.3 V                                                                                     |
| 25  |          PERp0          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 26  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 27  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 28  |          1.5V           |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 29  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 30  |         SMB_CLK         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 31  |          PETn0          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 32  |        SMB_DATA         |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 33  |          PETp0          |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 34  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 35  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 36  |         USB_D-          |   USB_D-   |   USB   | I/O |  USB Data Line D-   | 90-ohm nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. |
| 37  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 38  |         USB_D+          |   USB_D+   |   USB   | I/O |  USB Data Line D+   | 90-ohm nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. |
| 39  |         3.3Vaux         |  3.3Vaux   | 3.3Vaux |  I  | RAK833 supply input |                                                                                     Connect to 3.3 V                                                                                     |
| 40  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 41  |         3.3Vaux         |  3.3Vaux   | 3.3Vaux |  I  | RAK833 supply input |                                                                                     Connect to 3.3 V                                                                                     |
| 42  |        LED_WWAN#        |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 43  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 44  |        LED_WLAN#        |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 45  |        Reserved         |  PCIe_SCK  |    -    | I/O |    Host SPI CLK     |                                                                                     Max 10 MHz clock                                                                                     |
| 46  |        LED_WPAN#        |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 47  |        Reserved         | PCIe_MISO  |    -    | I/O |    Host SPI MISO    |                                                                                            -                                                                                             |
| 48  |          1.5V           |     NC     |    -    | N/A |          -          |                                                                                 Internally not connected                                                                                 |
| 49  |        Reserved         | PCIe_MOSI  |    -    | I/O |    Host SPI MOSI    |                                                                                            -                                                                                             |
| 50  |           GND           |    GND     |   GND   | N/A |       Ground        |                                                                                    Connect to Ground                                                                                     |
| 51  |       W_DISABLE2#       |  PCIe_CSN  |    -    | I/O |     Host SPI CS     |                                                                                            -                                                                                             |
| 52  |         3.3Vaux         |  3.3Vaux   | 3.3Vaux |  I  | RAK833 supply input |                                                                                     Connect to 3.3 V                                                                                     |

#### RF Characteristics

The following table shows the typical sensitivity
level of the RAK833 WisLink LPWAN Concentrator:

| Signal Bandwidth (kHz) | Spreading Factor | Sensitivity (dBm) |
| ---------------------- | ---------------- | ----------------- |
| 125                    | 12               | -136.5            |
| 125                    | 7                | -124              |
| 250                    | 12               | -136              |
| 250                    | 7                | -123              |
| 500                    | 12               | -134              |
| 500                    | 7                | -120              |

#### Electrical Characteristics

##### Absolute Maximum Rating

Limiting values given below are in accordance with the Absolute Maximum Rating System (IEC 134).

:::warning ⚠️ WARNING
Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or at any conditions other than those specified in the Operating Conditions section of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.
:::

| Symbol   | Description           | Condition                                  | Min  | Max  | Unit |
| -------- | --------------------- | ------------------------------------------ | ---- | ---- | ---- |
| 3.3Vaux  | Module supply voltage | Input DC voltage at 3.3Vaux pins           | –0.3 | 3.6  | V    |
| USB      | USB D+/D- pins        | Input DC voltage at USB interface pins     | -    | 3.6  | V    |
| SPDT_SEL | Port select           | Input DC voltage at SPDT_SEL input pins    | –0.3 | 3.6  | V    |
| RESET    | RAK833 reset input    | Input DC voltage at RESET input pin        | –0.3 | 3.6  | V    |
| SPI      | SPI interface         | Input DC voltage at SPI interface pin      | –0.3 | 3.6  | V    |
| GPS_PPS  | GPS 1 pps input       | Input DC voltage at GPS_PPS input pin      | –0.3 | 3.6  | V    |
| Rho_ANT  | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 | -    | 10:1 | VSWR |
| Tstg     | Storage Temperature   | -                                          | –40  | 85   | °C   |

:::warning ⚠️ WARNING
The product is not protected against over-voltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::

##### Maximum Electrostatic Discharge (ESD)

:::tip 📝 NOTE
RAK833 WisLink LPWAN Concentrator are Electrostatic Sensitive Devices and require special precautions when handling.
:::

| Parameter                                | Min | Typical | Max  | Unit | Remarks                                      |
| ---------------------------------------- | --- | ------- | ---- | ---- | -------------------------------------------- |
| ESD sensitivity for all pins except ANT1 | -   | -       | 1000 | V    | Human Body Model according to JESD22-A114    |
| ESD sensitivity for ANT1                 | -   | -       | 1000 | V    | Human Body Model according to JESD22-A114    |
| ESD immunity for ANT1                    | -   | -       | 4000 | V    | Contact Discharge according to IEC 61000-4-2 |
| -                                        | -   | -       | 8000 | V    | Air Discharge according to IEC 61000-4-2     |

##### Operating Conditions

Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°C.

:::warning ⚠️ WARNING
Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

##### Operating Temperature Range

| Parameter                      | Min | Typical | Max | Unit | Remarks                                                                                                                                 |
| ------------------------------ | --- | ------- | --- | ---- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Normal operating temperature   | –20 | +25     | +65 | °C   | Normal operating temperature range (fully functional and meet 3GPP specifications)                                                      |
| Extended operating temperature | –40 | -       | +85 | °C   | Extended operating temperature range (RF performance may be affected outside normal operating range, though module is fully functional) |

##### Supply/Power Pins

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch-on the module.

| Symbol  | Parameter                             | Min. | Typical | Max. | Unit |
| ------- | ------------------------------------- | ---- | ------- | ---- | ---- |
| 3.3Vaux | Module supply operating input voltage | 3.00 | 3.30    | 3.60 | V    |

##### Current Consumption

| Mode              | Condition                                                 | Min | Type | Max | Unit |
| ----------------- | --------------------------------------------------------- | --- | ---- | --- | ---- |
| Idle-Mode         | All of the chip on the board enter idle mode or shutdown. | 60  | 100  | -   | uA   |
| Active-Mode (TX)  | The power of TX channel is 23dBm and 3.3V supply.         | -   | TBD  | -   | mA   |
| Active-Mode (RX ) | TX disabled and shutdown PA.                              | -   | TBD  | -   | mA   |

#### Mechanical Characteristics

RAK833 WisLink LPWAN Concentrator is fully compliant to the **52-pin PCI Express Full-Mini Card Type F2** form factor, with top-side and bottom-side keep-out areas, with 50.95 millimeter nominal length, 30 millimeter nominal width and all the other dimensions as defined by the PCI Express Mini Card Electromechanical Specification except for the card thickness with a nominal value of 3.7 millimeter. The weight of the RAK833 WisLink LPWAN Concentrator is about 9.7 grams.

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rak833-lpwan-gateway-concentrator-module-mechanical-characteristics.png"
  width="70%"
  caption="RAK833 WisLink LPWAN Concentrator Mechanical Characteristics"
/>

#### Schematic Diagrams

RAK833 WisLink LPWAN Concentrator refer Semtech’s reference design of SX1301, and a 4 chancel SPDT to switch SPI of SX1301 to PCI edge connector or FT2232H which converts SPI to USB2.0 interface.

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/interface-schematic-diagram.jpg"
  width="80%"
  caption="RAK833 WisLink LPWAN Concentrator Mechanical Characteristics"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/power-source-schematic-diagram.jpg"
  width="80%"
  caption="Power Source Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/ft22323-ic-schematic-diagram.jpg"
  width="80%"
  caption="FT22323 IC Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/semtech-sx1301-schematic-diagram.jpg"
  width="100%"
  caption="Semtech - SX1301 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/stm32f401cdu6-schematic-diagram.jpg"
  width="80%"
  caption="STM32F401CDU6 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rf-part-1-schematic-diagram.jpg"
  width="100%"
  caption="RF Part-1 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rf-part-2-schematic-diagram.jpg"
  width="100%"
  caption="RF Part-2 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rf-part-3-schematic-diagram.jpg"
  width="100%"
  caption="RF Part-3 Schematic Diagram"
/>

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/rf-part-4-schematic-diagram.jpg"
  width="100%"
  caption="RF Part-4 Schematic Diagram"
/>

#### Reference Applications

The figure below shows the minimum application schematic of the RAK833 WisLink LPWAN Concentrator which uses at least **3.3V/1A DC power source**. It can either connect through the SPI interface or USB interface to the main processor. If the SPI interface is chosen, **SPDT_SEL** should be connected to the ground (GND) otherwise, leave the pin open.

<rk-img
  src="/assets/images/wislink-lora/rak833/datasheet/wtmebjc8oldgbqvdkyfb.png"
  width="100%"
  caption="Reference Minimum Schematic"
/>

### Software

Download the latest version of RAK833 in the table provided below.


#### Firmware

| Model        | Raspberry Pi Board  | Firmware Version | Source                                                                                                                                                     |
| ------------ | ------------------- | ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK833 - SPI | Raspberry Pi 3B+, 4 | V4.1.0           | [Download](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/) |
| RAK833 - USB | Raspberry Pi 3B+, 4 | V4.1.0           | [Download](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/) |

## Models / Bundles

Ordering Information

|    Part Number     |         Description         |
| :----------------: | :-------------------------: |
| RAK833-SPI/USB-915 | USB and SPI, 902MHz-928 MHz |
| RAK833-SPI/USB-868 | USB and SPI, 863MHz-870 MHz |
|   RAK833-SPI-915   |     SPI, 902MHz-928 MHz     |
|   RAK833-SPI-868   |     SPI, 863MHz-870 MHz     |
