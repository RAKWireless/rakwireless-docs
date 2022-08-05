---
rak_desc: Covers the comprehensive information of your RAK12018 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12018/overview/RAK12018_home.png
tags:
  - datasheet
  - wisblock
  - RAK12018
prev: ../Quickstart/
next: false
---

# RAK12018 WisBlock Code Scanner Module Datasheet

## Overview

## Description

RAK12018 WisBlock Code Scanner Module is a WisBlock Interface module capable of scanning 1D or 2D codes. It uses the LV3296 scanner module from RAKINDA that works on bar codes, QR, and other standard 1D/2D codes. 

LV3296 is connected to the main RAK12018 board via flex cable, which is ideal for different enclosure setups. The RAK12018 also has mounting screw holes dedicated to LV3296, so you can fix it directly to the board making the setup very compact.


### Features

- Uses RAKINDA LV3296 scanner module
- Read 1D and 2D Barcodes
- 3.3&nbsp;V Power Supply
- 25&nbsp;mm x 36.4&nbsp;mm

## Specifications

### Overview

#### Mounting

The RAK12018 module can be mounted to the IO slot of your WisBlock Base board. To illustrate, RAK12018 can be mounted on the IO slot of RAK5005-O WisBlock Base, as shown in **Figure 1**.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/RAK12018-mounting.png"
  width="60%"
  caption="RAK12018 Mounting to WisBlock Base"
/>

LV3296 can be mounted on the RAK12018 board via the mounting screw hole. A 12-pin FPC is used to connect RAK12018 and LV3296 together.

### Hardware

The hardware specification is categorized into four parts. It covers the pinouts and diagrams of the board. It also discusses the electrical and mechanical characteristics of the RAK12018 WisBlock Code Scanner Module.

####  Chipset
| Vendor  | Part number |
| ------- | ----------- |
| RAKINDA | LV3296      |

#### Pin Definition

The RAK12018 has a standard 40-pin WisConnector which can be mounted directly to the IO slot of WisBlock Base board like RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/RAK12018_Pinouts.svg"
  width="70%"
  caption="RAK12018 Pin Definition"
/>

:::tip 📝 NOTE:
The pins in the module connected to the WisConnector are **3V3_S**, **GND**, **UART** related pins, **NRST**, and **nTRIG**.

3V3_S voltage output from the WisBlock Base that powers the RAK12018 module can be controlled by the WisBlock Core via WB_IO2 (WisBlock IO2 pin). This makes the module ideal for low-power IoT projects since the WisBlock Core can totally disconnect the power of the RAK12018 module.
:::

#### Electrical Characteristics

| Symbol | Description       | Min. | Nom. | Max. | Unit |
| ------ | ----------------- | ---- | ---- | ---- | ---- |
| VIN    | Operating Voltage | -    | 3.3  | -    | V    |
| I1     | Operating Current | -    | 100  | 168  | mA   |
| I2     | Standby Current   | -    | 8.1  | -    | mA   |
| I3     | Sleep Current     | -    | -    | 100  | uA   |

#### Mechanical Characteristics

##### Board Dimensions

Refer to **Figure 5** below for the mechanical dimensions of the RAK12018 module.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/mechanical-dimensions.png"
  width="80%"
  caption="RAK12018 Mechanical Dimensions"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_sch.png"
  width="100%"
  caption="RAK12018 Schematic Diagram"
/>

##### WisBlock Connector

TX_CORE and RX_CORE are UART interfaces to WisBlock Core. NRST is used by the core to reset LV3296. nTRIG is used by the WisBlock Core to provide the module signal to trigger a scan and decode session. This signal can also provide by a key on RAK12018.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_connector.png"
  width="45%"
  caption="WisBlock Connector"
/>

##### FPC Connector

J2 is used to connect LV3296.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_fpc.png"
  width="30%"
  caption="FPC Connector"
/>

##### nTRIG KEY

It provides the LV3296 module with a signal to trigger a scan and decode session.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_ntrig.png"
  width="30%"
  caption="nTrigger Key"
/>  


##### Indicator Light 

It is used as an LED indicator for a successful scan. This LED is controlled by LV3296.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_light.png"
  width="30%"
  caption="Indicator Light"
/>  

##### Beeper Driver

The circuit below is used to drive an external buzzer. The beep sound is controlled by LV3296.

<rk-img
  src="/assets/images/wisblock/rak12018/datasheet/rak12018_buzzer.png"
  width="40%"
  caption="Beeper Driver"
/>  
