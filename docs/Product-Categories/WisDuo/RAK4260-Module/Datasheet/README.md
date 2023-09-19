---
rak_desc: Provides comprehensive information about your RAK4260 Module to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4260-module/RAK4260-Module.png
tags:
  - datasheet
  - wisduo
  - RAK4260
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4260H/Certification-Report/RAK4260H_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4260H/Certification-Report/RAK4260H_FCC_Certification.zip]
prev: ../Quickstart/
next: false
---

# RAK4260 WisDuo LPWAN Module Datasheet

## Overview

### Description

The **RAK4260 WisDuo LPWAN Module** is based on **Microchip’s ATSAMR34J18B**. It is a SiP device integrating a 32-bit ARM Cortex M0+ MCU with a LoRa Transceiver in a 15&nbsp;mm x 15&nbsp;mm compact package.

The SAM R34 chip provides a number of highly configurable peripherals (configurable as I2C/SPI/UART interfaces). There are 12-bit ADC in addition to the aforementioned.

It is a perfect solution for any LoRaWAN end node developer. The integration of the MCU and LoRa Transceiver reduces size and minimizes costs. Having such a compact solution within a single package reduces time to market and allows for rapid development and deployment for a number of scenarios.

RAK4260 is a solution that is cost-efficient and flexible that can be deployed in a wide variety of IoT scenarios that require the long-range connectivity and great battery life that LoRaWAN provides.

### Features

- Industry's lowest power LoRa SiP device
- 32-bit ARM Cortex M0+ MCU and LoRa Transceiver
- Small form factor: 15&nbsp;mm x 15&nbsp;mm  compact package
- 256&nbsp;KB Flash and 40&nbsp;KB RAM accommodates application code and stack
- Most cost and size effective solution, eliminating the need for external MCU
- Fully supported 862 to 1020&nbsp;MHz frequency coverage
- Receive Sensitivity down to -148&nbsp;dBm
- Maximum Transmit Power up to 20&nbsp;dBm
- Low RX current of 17&nbsp;mA (typical)
- LoRa Technology, (G)FSK, (G)MSK

## Specifications

### Overview

The overview section covers the RAK4260 WisDuo LPWAN Module board overview where both top and bottom views are presented. It also includes the functional block diagram showing the interfaces of the board.

#### Board Overview

**Figure 1** and **Figure 2** present the different views of the RAK4260 chip labeled for the proper reference.

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/rak4260-module-top-view.png"
  width="45%"
  caption="RAK4260 WisDuo LPWAN Module Top View"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/rak4260-bottom-view.png"
  width="45%"
  caption="RAK4260 Bottom View"
/>

#### Block Diagram

The block diagram of the RAK4260 shows the various interfaces for the specific functionalities set in the product overview.

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/block-diagram.png"
  width="70%"
  caption="RAK4260 Interfaces"
/>

### Hardware

The hardware specifications are categorized into five parts. It presents the schematic diagram and pinouts of the module. This section covers also the electrical, mechanical, and frequency parameters including tabular data and diagrams of the RAK4260 WisDuo LPWAN Module board.


#### Pin Definition

Provided in this section is the pinout of the RAK4260 WisDuo LPWAN Module.

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/rak4260-board-pinout.svg"
  width="70%"
  caption="RAK4260 Board Pinout"
/>

:::warning ⚠️ WARNING
When using `RFC` pin for antenna connection and not the IPEX connector variant, make sure there is no ground plane (in all layers of the PCB) under the RF trace path to eliminate the possible effects of unwanted stray capacitance which can cause degradation of the RF signal levels.
:::

|  PIN  |     NAME      |  I/O  |                Description                 |
| :---: | :-----------: | :---: | :----------------------------------------: |
|   1   |      GND      |   -   |                   Ground                   |
|   2   |      RFC      |   -   |                  RF Port                   |
|   3   |      GND      |   -   |                   Ground                   |
|   4   |     PA27      |  I/O  |                  EIC/GCLK                  |
|   5   |     PA06      |  I/O  |   EIC/RSTC/ADC/PTC/OPAMP/TC/CCL/SERCOM0    |
|   6   |     PA07      |  I/O  |     EIC/RSTC/ADC/OPAMP/TC/CCL/SERCOM0      |
|   7   |     PA08      |  I/O  |       DC/PTC/TC/CCL/SERCOM0/SERCOM2        |
|   8   |     PA09      |  I/O  |     EIC/ADC/PTC/TC/CCL/SERCOM0/SERCOM2     |
|   9   |     PB22      |  I/O  |            SERCOM5/TC/GCLK/CCL             |
|  10   |      GND      |   -   |                   Ground                   |
|  11   |    VCC3V3     |   -   |                3V3 power in                |
|  12   |    VCC3V3     |   -   |                3V3 power in                |
|  13   |   PA17_SCL    |  I/O  |    EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3     |
|  14   |   PA16_SDA    |  I/O  |    EIC/PTC/TC/GCLK/CCL/SERCOM1/SERCOM3     |
|  15   |     PA15      |  I/O  |        EIC/TC/GCLK/SERCOM2/SERCOM4         |
|  16   |     PA14      |  I/O  |        EIC/TC/GCLK/SERCOM2/SERCOM4         |
|  17   |      GND      |   -   |                   Ground                   |
|  18   |      GND      |   -   |                   Ground                   |
|  19   | PA18 UART3 RX |  I/O  |     EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3      |
|  20   | PA19 UART3 TX |  I/O  |     EIC/PTC/TC/AC/CCL/SERCOM1/SERCOM3      |
|  21   |      NC       |   -   |               No Connection                |
|  22   |   PA23_MOSI   |  I/O  |   EIC/PTC/TC/AC/CCL/GCLK/SERCOM3/SERCOM5   |
|  23   |    PA22_SS    |  I/O  |     EIC/PTC/TC/AC/CCL/SERCOM3/SERCOM5      |
|  24   |   PB23_SCK    |  I/O  |          EIC/SERCOM5/TC/GCLK/CCL           |
|  25   |   PB02_MISO   |  I/O  |        EIC/ADC/SERCOM5/TC/SUPC/CCL         |
|  26   |  PA25 USB P   |  I/O  |     EIC/SERCOM3/SERCOM5/TC/USB_DM/CCL      |
|  27   |  PA24 USB N   |  I/O  |     EIC/SERCOM3/SERCOM5/TC/USB_DM/CCL      |
|  28   |      GND      |   -   |                   Ground                   |
|  29   |      RST      |   -   |                 MCU Reset                  |
|  30   |  PA30_SWDCLK  |  I/O  |                   SWDCLK                   |
|  31   |  PA31_SWDIO   |  I/O  |                   SWDIO                    |
|  32   | PA04 UART1 TX |  I/O  | EIC/RSTC/VREFB/ADC/AC/OPAMP/TC/CCL/SERCOM0 |
|  33   | PA05 UART1 RX |  I/O  |    EIC/RSTC/ADC/AC/OPAMP/TC/CCL/SERCOM0    |
|  34   |      NC       |   -   |               No Connection                |
|  35   |      GND      |   -   |                   Ground                   |
|  36   |      GND      |   -   |                   Ground                   |
|  37   |      GND      |   -   |                   Ground                   |
|  38   |      GND      |   -   |                   Ground                   |
|  39   |      GND      |   -   |                   Ground                   |
|  40   |      GND      |   -   |                   Ground                   |

##### RF Switch Pin Definition

| **BAND_SEL** | **TX/RX** |
| :----------: | :-------: |
|     PA13     |    D2     |

##### RF Switch control logic table

| **LoRa Mode** | **BAND_SEL** | **TX/RX** | **PA28** |
| :------------ | :----------: | :-------: | :------: |
| Shutdown      |      L       |     L     |    L     |
| PA_BOOST      |      L       |     H     |    H     |
| RFI_HF (RX)   |      H       |     L     |    H     |
| RFO_HF        |      H       |     H     |    H     |


:::tip 📝 NOTE
PA28 is RF Switch VDD pin<br>
H  = High level<br>
L  = Low level <br>
:::

#### RF Requirements

##### Operating Frequencies

The RAK4260 supports LoRaWAN frequency included in the table provided below:

|    Region     | Frequency (MHz) |
| :-----------: | :-------------: |
|    Europe     |      EU868      |
| North America |      US915      |
|   Australia   |      AU915      |
|     Asia      |      AS923      |
|     India     |      IN865      |
|     Korea     |      KR920      |

#### Electrical Characteristics

##### Power Consumption

Shown in the table provided below is the power consumption of the RAK4260 WisDuo LPWAN Module.

|             Item              |   Power Consumption   |         Condition          |
| :---------------------------: | :-------------------: | :------------------------: |
| OUTPUT POWER 20&nbsp;dB (MAX) |     126.3&nbsp;mA     |   PA_BOOST V=3.3&nbsp;V    |
|    OUTPUT POWER 17&nbsp;dB    | 95.6&nbsp;mA(typical) |   PA_BOOST V=3.3&nbsp;V    |
|    OUTPUT POWER 14&nbsp;dB    |     33.1&nbsp;mA      |    RFO_HF V=3.3&nbsp;V     |
|         Receive mode          |     13.6&nbsp;mA      |             -              |
|          Sleep mode           |      860&nbsp;nA      | V=3.3&nbsp;V Backup Mode |

##### OUTPUT POWER 20&nbsp;dB(MAX)PA_BOOST mode

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/output-power-20db.svg"
  width="80%"
  caption="OUTPUT POWER 20&nbsp;dB(MAX)"
/>

##### OUTPUT POWER 17&nbsp;dB(PA_BOOST mode)

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/output-power-17db.svg"
  width="80%"
  caption="OUTPUT POWER 17&nbsp;dB"
/>

##### OUTPUT POWER 14&nbsp;dB(RFO_HF mode)

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/output-power-14db.svg"
  width="80%"
  caption="OUTPUT POWER 14&nbsp;dB"
/>

##### Receive Mode

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/receive-mode.svg"
  width="80%"
  caption="Receive Mode"
/>

##### Sleep Mode

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/sleep-mode.svg"
  width="80%"
  caption="Sleep Mode"
/>

##### Sensitivity Level

The following chart shows the receiving sensitivity of RAK4260 at 868&nbsp;Mhz.

| Receive Power @iPEX | PER (%) @SF7 |
| :-----------------: | :----------: |
|     -40 to -124     |      0       |
|        -125         |      3       |
|        -126         |      20      |
|        -127         |      78      |
|        -128         |     100      |
|        -129         |     100      |
|        -130         |     100      |

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/sensitivity-level-sf7.jpg"
  width="70%"
  caption="Sensitivity Level (SF7)"
/>

| Receive Power @iPEX | PER (%) @SF7 |
| :-----------------: | :----------: |
|     -50 to -134     |      0       |
|        -135         |      0       |
|        -136         |      0       |
|        -137         |      0       |
|        -138         |      7       |
|        -139         |      80      |
|        -140         |     100      |

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/sensitivity-level-sf12.jpg"
  width="70%"
  caption="Sensitivity Level (SF12)"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK4260 WisDuo LPWAN Module Schematic Diagram"
/>

#### Mechanical Characteristics



<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/rak4260-top-view-dimensions.jpg"
  width="65%"
  caption="RAK4260 Top View Dimensions"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-module/datasheet/rak4260-side-view-dimensions.jpg"
  width="65%"
  caption="RAK4260 Side View Dimensions"
/>



### Software

The latest firmware for the RAK4260 WisDuo LPWAN Module is provided in the given table.

#### Firmware

| Model   | Source                                                                                          |
| ------- | ----------------------------------------------------------------------------------------------- |
| RAK4260 | [Download](https://downloads.rakwireless.com/LoRa/RAK4260/Firmware/RAK4260_Latest_Firmware.rar) |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
