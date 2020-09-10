---
tags:
  - datasheet
  - wislink
prev: ../Quickstart/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247_CE_Certificate.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/Certification-Report/RAK2247_FCC_Certificate.zip]
---

# RAK2247 WisLink LPWAN Concentrator Datasheet

<!-- <rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/rak2247-overview.png"
  width="50%"
  caption="RAK2247 WisLink LPWAN Concentrator"
/> -->

## Overview

### Description

The **RAK2247 WisLink LPWAN Concentrator** is a LoRa® Concentrator module with mini-PCIe form factor based on the SX1301. This enables easy integration into routers and other networking equipment, adding gateway capabilities. The module can be used in any embedded platform offering a mini-PCIe slot with an SPI or USB connection.

Despite its small size this is an 8 channel concentrator module. By integrating it together with a computing core a fully fledged gateway solution can easily be created.

### Features

- Mini PCIe form factor, mounted heat-sink.
- SX1301 base band processor emulates 49 x LoRa® demodulators, 10 parallel demodulation paths. It supports 8 uplinks channel and 1 downlink channel.
- 2 x SX125x Tx/Rx front-ends high/low frequency.
- Built-in FT2232H for SPI to USB 2.0 conversion (optional).
- Operates at 3.3 V, making it compatible with standard 3G/LTE card slots of Mini PCI-e type.
- Tx power up to 25 dBm, Rx sensitivity down to -139 dBm @ SF12, BW 125 kHz.
- Supports the LoRaWAN® 1.0.2 protocol.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS920 and AS923).

## Specifications

### Overview

The overview shows the top and back view of the RAK2247 board. It also presents the block diagram that discusses how the board works. 

#### Board Overview

The outer dimension of the RAK2247 WisLink LPWAN Concentrator is **50.95 millimeters x 30.0 millimeters x 10.4 millimeters**. The board with top-side and bottom-side keep-out areas, and all other dimension is defined by PCI Express Mini Card Electromechanical Specification except for the card thickness. And the thickness 10.4 millimeters which includes the 8 millimeter heat sink.

<rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/board-overview-rak2247.jpg"
  width="70%"
  caption="RAK2247 WisLink LPWAN Concentrator Overview"
/>

#### Block Diagram

RAK2247 WisLink LPWAN Concentrator integrates one SX1301 chip and two SX1255/7. The other chip is for RF signal, which represents the core of the device. This provides the related LoRa® modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express Mini Card compliance, and one uFL connectors are available for external antennas integration.

<rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/block-diagram.png"
  width="100%"
  caption="RAK2247 WisLink LPWAN Concentrator Block Diagram"
/>

### Hardware

The hardware is categorized into six parts. It discusses the interfacing, pinouts and its corresponding functions and diagrams. It also covers the parameters and standard values of the board. 

#### Interface

##### Power Supply

RAK2247 WisLink LPWAN Concentrator must be supplied through the **3.3Vaux** pins by a **DC power supply**. The voltage must be stable, because during this operation the current drawn from 3.3Vaux can vary significantly, based on the power consumption profile of the SX1301 chip (please refer to **SX1301 [datasheet](https://www.semtech.com/uploads/documents/sx1301.pdf)**).

##### SPI Interface

SPI interface is provided on the PCIe*SCK, PCIe* MISO, PCIe*MOSI, PCIe* CSN pins of the system connector. The SPI interface gives access to the configuration register of SX1301 via a synchronous full-duplex protocol. Only the slave side is implemented.

:::tip 📝 NOTE
RAK2247-USB version does not have this interface.
:::

##### USB Interface

RAK2247 WisLink LPWAN Concentrator can support the high speed USB to SPI by FT2232HL, it includes a USB 2.0 compliant interface with maximum 480 Mb/s data rate, representing the interface for any communication with an external host application processor. The module itself acts as a USB device and can be connected to any USB host equipped with compatible drivers. For more information, please refer to the [datasheet](https://www.ftdichip.com/Support/Documents/DataSheets/ICs/DS_FT2232H.pdf) of FT2232HL.

:::tip 📝 NOTE
RAK2247-SPI version does not have this interface.
:::

##### GPS_PPS

RAK2247 WisLink LPWAN Concentrator includes the GPS_PPS input for received packets time-stamped.

##### RESET

RAK2247 WisLink LPWAN Concentrator includes the RESET active-high input signal to reset the radio operations as specified by the SX1301 Specification.

##### LEDs

Three (3) Green LED for indicating the status of **PWR**, **TX**, **RX**.

##### Antenna RF Interface

The modules have one RF interfaces over a standard uFL connectors (Hirose U. FL-RSMT) with a characteristic impedance of **50Ω**. The RF port (J1) supports both Tx and Rx, providing the antenna interface.

#### Pin Definition

<rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/pinout.png"
  width="70%"
  caption="RAK2247 WisLink LPWAN Concentrator Pinout Diagram"
/>

| Pin # | Mini PCIEx PIN Rev. 2.0 | RAK2247 PIN             | POWER   | I/O | Description                | Remarks                                                                                                                                                                               |
| ----- | ----------------------- | ----------------------- | ------- | --- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1     | WAKE#                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 2     | 3.3Vaux                 | 3.3Vaux                 | 3.3Vaux | N/A | RAK2247 Power Supply Input | Connect to 3.3 volts                                                                                                                                                                  |
| 3     | COEX1                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 4     | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 5     | COEX2                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 6     | 1.5V                    | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 7     | CLKREQ#                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 8     | UIM_PWR                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 9     | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 10    | UIM_DATA                | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 11    | REFCLK-                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 12    | UIM_CLK                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 13    | REFCLK+                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 14    | UIM_RESET               | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 15    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 16    | UIM_SPU                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 17    | UIM*IC* DM              | NC (5V Optional For PA) |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 18    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 19    | GPS_PPS                 | 1PPS                    |         | N/A |                            | Internal connection GPS_PPS for SX1301                                                                                                                                                |
| 20    | W_DISABLE1#             | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 21    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 22    | PERST#                  | RESET                   |         | I   | RAK2247 reset input        | Active high (≥100ns) for SX1301 reset.                                                                                                                                                |
| 23    | PERn0                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 24    | 3.3Vaux                 | 3.3Vaux                 | 3.3Vaux | I   | RAK2247 supply input       | Connect to 3.3 V                                                                                                                                                                      |
| 25    | PERp0                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 26    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 27    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 28    | 1.5V                    | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 29    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 30    | SMB_CLK                 | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 31    | PETn0                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 32    | SMB_DATA                | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 33    | PETp0                   | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 34    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 35    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 36    | USB_D-                  | USB_D-                  | USB     | I/O | USB Data Line D-           | 90Ω nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. |
| 37    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 38    | USB_D+                  | USB_D+                  | USB     | I/O | USB Data Line D+           | 90Ω nominal differential impedance. Pull-up, pull-down and series resistors as required by USB 2.0 specifications are part of the USB pin driver and need not be provided externally. |
| 39    | 3.3Vaux                 | 3.3Vaux                 | 3.3Vaux | I   | RAK2247 supply input       | Connect to 3.3 V                                                                                                                                                                      |
| 40    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 41    | 3.3Vaux                 | 3.3Vaux                 | 3.3Vaux | I   | RAK2247 supply input       | Connect to 3.3 V                                                                                                                                                                      |
| 42    | LED_WWAN#               | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 43    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 44    | LED_WLAN#               | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 45    | Reserved                | PCIe_SCK                |         | I/O | Host SPI CLK               | Max 10MHz clock                                                                                                                                                                       |
| 46    | LED_WPAN#               | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 47    | Reserved                | PCIe_MISO               |         | I/O | Host SPI MISO              |                                                                                                                                                                                       |
| 48    | 1.5V                    | NC                      |         | N/A |                            | Internally not connected                                                                                                                                                              |
| 49    | Reserved                | PCIe_MOSI               |         | I/O | Host SPI MOSI              |                                                                                                                                                                                       |
| 50    | GND                     | GND                     | GND     | N/A | Ground                     | Connect to ground                                                                                                                                                                     |
| 51    | W_DISABLE2#             | PCIe_CSN                |         | I/O | Host SPI CS                |                                                                                                                                                                                       |
| 52    | 3.3Vaux                 | 3.3Vaux                 | 3.3Vaux | I   | RAK2247 supply input       | Connect to 3.3 V                                                                                                                                                                      |

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN® frequency channels, allowing easy configuration while building the firmware from the source code.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU433, EU868    |
| China         | CN470           |
| North America | US915           |
| Asia          | AS923, AS920    |
| Australia     | AU915           |
| Korea         | KR920           |
| Indian        | IN865           |

##### RF Characteristics

The following table gives typically sensitivity level of the RAK2247 WisLink LPWAN Concentrator.

| Signal Bandwidth [KHz] | Spreading Factor | Sensitivity [dBm] |
| ---------------------- | ---------------- | ----------------- |
| 125                    | 12               | -139              |
| 125                    | 7                | -125              |
| 250                    | 12               | -136              |
| 250                    | 7                | -123              |
| 500                    | 12               | -134              |
| 500                    | 7                | -120              |

#### Electrical Requirements

Exceeding the device's rating on one or more listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only.
Operating the module at these or at any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.
The operating condition range define those limit within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

##### Absolute Maximum Rating

Limiting values given below are in accordance with the Absolute Maximum Rating System (**IEC 134**)

| Symbol  | Description           | Condition                                  | Min.  | Max.      |
| ------- | --------------------- | ------------------------------------------ | ----- | --------- |
| 3.3Vaux | Module supply voltage | Input DC voltage at 3.3Vaux pins           | –0.3V | 3.6V      |
| USB     | USB D+/D- pins        | Input DC voltage at USB interface pins     |       | 3.6V      |
| RESET   | RAK2247 reset input   | Input DC voltage at RESET input pin        | –0.3V | 3.6V      |
| SPI     | SPI interface         | Input DC voltage at SPI interface pin      | –0.3V | 3.6V      |
| GPS_PPS | GPS 1 pps input       | Input DC voltage at GPS_PPS input pin      | –0.3V | 3.6V      |
| Rho_ANT | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 |       | 10:1 VSWR |
| Tstg    | Storage Temperature   |                                            | –40°C | 85°C      |

:::warning ⚠️ WARNING
The product is not protected against over voltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in table above, must be limited to values within the specified boundaries by using appropriate protection devices
:::

##### Maximum ESD

The table below lists the maximum ESD.

| Parameter                              | Min | Typical | Max   | Remarks                                      |
| -------------------------------------- | --- | ------- | ----- | -------------------------------------------- |
| ESD sensitivity for a pins except ANT1 |     |         | 1000V | Human Body Model according to JESD22-A114    |
| ESD sensitivity for ANT1               |     |         | 1000V | Human Body Model according to JESD22-A114    |
| ESD immunity for ANT1                  |     |         | 4000V | Contact Discharge according to IEC 61000-4-2 |
|                                        |     |         | 8000V | Air Discharge according to IEC 61000-4-2     |

:::tip 📝 NOTE
RAK2247 WisLink LPWAN Concentrator is an Electrostatic Sensitive Device and require special precautions when handling.
:::

##### Power Consumption

| Mode             | Condition                                                 | Min. | Typical | Max. |
| ---------------- | --------------------------------------------------------- | ---- | ------- | ---- |
| Idle-Mode        | All of the chip on the board enter idle mode or shutdown. |      | 68 uA   |      |
| Active-Mode(TX)  | The power of TX channel is 25dBm and 3.3V supply.         |      | 440 mA  |      |
| Active-Mode(RX ) | TX disabled and RX enabled.                               |      | 470 mA  |      |

##### Power Supply Range

The table below lists the power supply range.

Input voltage at **3.3Vaux** must be above the normal operating range minimum limit to switch-on the module.

| Symbol  | Parameter                               | Min. | Typical | Max.  |
| ------- | --------------------------------------- | ---- | ------- | ----- |
| 3.3Vaux | Module supply operating input voltage14 | 3 V  | 3.3 V   | 3.6 V |

#### Environmental Requirements

##### Operating Conditions

The table below lists the operation temperature range

| Parameter                    | Min.  | Typical | Max.  | Remarks                                                                            |
| ---------------------------- | ----- | ------- | ----- | ---------------------------------------------------------------------------------- |
| Normal operating temperature | -40°C | +25°C   | +85°C | Normal operating temperature range (fully functional and meet 3GPP specifications) |

:::tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°C. Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

#### Schematic Diagram

RAK2247 card refers to Semtech's reference design of SX1301. The SPI interface or USB interface converts SPI to USB2.0 by FT2232H and can be used on PCIE connector.

<rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/schematic-2.png"
  width="80%"
  caption="RAK2247 Schematic Diagram"
/>

The figure below shows the minimum application schematic of the RAK2247 card. You should use it at least 3.3V / 1A DC power, connect the SPI interface or USB interface to the main processor.

<rk-img
  src="/assets/images/wislink-lora/rak2247/datasheet/schematic-1.png"
  width="70%"
  caption="RAK2247 Card Minimum Schematic Reference"
/>

### Software

#### Firmware

| Model         | Raspberry Pi Board  | Firmware Version | Source                                                                                                            |
| ------------- | ------------------- | ---------------- | ----------------------------------------------------------------------------------------------------------------- |
| RAK2247 - SPI | Raspberry Pi 3B+, 4 | V4.2.0R          | [Download](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/RAK2247-SPI_Latest_Firmware.zip) |
| RAK2247 - USB | Raspberry Pi 3B+, 4 | V4.2.0R          | [Download](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/RAK2247-USB_Latest_Firmware.zip) |

## Models / Bundles

Order Information

| Part Number    | Package                                   | Description                                              |
| -------------- | ----------------------------------------- | -------------------------------------------------------- |
| RAK2247-0X-R01 | 1x board and 1x Antenna retail package    | RAK2247-SPI, 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |
| RAK2247-0X-R01 | 10-piece board and Antenna carton package | RAK2247-SPI, 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |
| RAK2247-0X-R01 | 1x board and 1x Antenna retail package    | RAK2247-USB, 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |
| RAK2247-0X-R01 | 10-piece board and Antenna carton package | RAK2247-USB, 433 / 470 / 868 / 915 / 923 / 920 / 865 MHz |


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />