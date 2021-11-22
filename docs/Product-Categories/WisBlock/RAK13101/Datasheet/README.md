---
rak_desc: Covers the comprehensive information of your RAK13101 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13101/overview/RAK13101_home.png
tags:
  - datasheet
  - wisblock
  - RAK13101
prev: ../Quickstart/
next: false
---

# RAK13101 WisBlock GSM/GPRS Module Datasheet

## Overview

### Description

**WisBlock RAK13101 GSM/GPRS Module** is a part of the WisBlock Wireless series that provides GSM/GPRS capability on the WisBlock platform by using Quectel MC20CE cellular module.

### Features

- Quectel MC20CE module
- Supports GSM/GPRS/GNSS: 850/900/1800/1900&nbsp;MHz
- Supports BeiDou/GPS/GLONASS/QZSS
- Built-in LNA
- IPEX connectors for the GSM and GNSS antenna
- Micro-USB debug and log output connector
- Nano SIM and ESIM options
- 3.3&nbsp;V Power supply
- Small size: 25&nbsp;mm x 45&nbsp;mm


## Specifications

### Overview

The RAK13101 module can be mounted on the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK13101 on a WisBlock Base module, such as a RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK13101 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard ratings of the RAK13101 WisBlock GSM/GPRS Module.

#### Chipset

| Vendor  | Part number |
| ------- | ----------- |
| Quectel | MC20CE      |

#### Pin Definition

The RAK13101 WisBlock GSM/GPRS module comprises a standard WisBlock IO slot connector. The WisBlock connector allows the RAK13101 module to be mounted on a WisBlock baseboard with IO slot, such as RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 2**. 

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/pin_definition.svg"
  width="90%"
  caption="RAK13101 Connector Pin Definition"
/>

::: tip 📝 NOTE
- RAK13101 WisBlock IO slot connector utilizes the **UART** related pins, **PWRKEY** via WB_IO5, **VBAT**, **3V3**, and **GND**.

- **VBAT** is the battery voltage input with max voltage 4.2&nbsp;V. During GPRS data and GSM dial mode, the peak current is 1170&nbsp;mA and 769&nbsp;mA, respectively, which exceeds the USB port supply current. That is why you must use a dedicated battery. 
:::

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Parameter                  | Minimum | Maximum | Unit |
| -------------------------- | ------- | ------- | ---- |
| VBAT                       | -0.3    | +4.2    | V    |
| GNSS_VCC                   | -0.3    | +4.2    | V    |
| Power supply peak current0 | 0       | 2       | A    |

##### Power Supply Ratings

| Symbol   | Description                      | Condition                            | Min. | Nom. | Max. | Unit |
| -------- | -------------------------------- | ------------------------------------ | ---- | ---- | ---- | ---- |
| VBAT     | Supply Voltage                   | Input voltage must within this range | 3.3  | 4.0  | 4.2  | V    |
| GNSS_VCC | GNSS Part Supply voltage         | Input voltage must within this range | 2.8  | 3.3  | 4.2  | V    |
| Ipeak    | Peak Current @ VBAT = 3.8&nbsp;V | Idle                                 | -    | -    | 110  | mA   |
|          | Peak Current @ VBAT = 3.8&nbsp;V | GSM Dial                             | -    | -    | 769  | mA   |
|          | Peak Current @ VBAT = 3.8&nbsp;V | GPRS Data                            | -    | -    | 1170 | mA   |
| Ivbat    | Average Supply Current           | Power down mode                      | -    | 20   | -    | mA   |
|          | Average Supply Current           | Sleep mode @DRX = 5                  | -    | 1.2  | -    | mA   |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK13101 module.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/mechanical_drawing.png"
  width="50%"
  caption="RAK13101 Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### Power Supply

The Quectel MC20CE module's main power supply comes from **VBAT**, which is a battery voltage connected to the WisBlock Base board. **GNSS_VCC** is the GNSS section supply voltage and is turned on or off via **GNSS_VCC_EN**, which is connected to MC20CE. The power supply of the GNSS part is controlled via the AT command `AT+QGNSSC`. 

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/power_supply.png"
  width="90%"
  caption="RAK13101 Power Supply"
/>

##### GSM and GNSS 

**J3** is GSM antenna connector and **J2** is GNSS antenna connector.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/gsm_gprs_antenna.png"
  width="80%"
  caption="RAK13101 GSM and GNSS Antenna Circuit"
/>

##### Voltage Level Transfer

The GSM/GPRS module operates at 2.8&nbsp;V, while the WisBlock Core is at 3.3&nbsp;V. That is why a voltage level shifter is needed.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/voltage_shifter.png"
  width="60%"
  caption="RAK13101 Voltage Level Shifter Circuit"
/>

##### SIM Circuit

**Figure 8** shows the schematic of RAK13101 module as a slot for standard SIM card and an optional **ESIM** pcb footprint.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/sim_circuit.png"
  width="90%"
  caption="RAK13101 GSM/GPRS Module SIM Circuit"
/>

##### WisConnector

RAK13101 WisBlock IO slot connector utilizes **UART** related pins, **PWRKEY** via WB_IO5, **VBAT**, **3V3**, and **GND**.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/io_connector.png"
  width="30%"
  caption="RAK13101 IO Slot Connector"
/>

##### Debug Connector

**Figure 10** shows the RAK13101 USB debugging circuit.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/usb_debug.png"
  width="50%"
  caption="RAK13101 USB Debugging"
/>

##### LED/PWRKER Control Circuit

**Figure 11** shows the RAK13101 module LED and PWRKEY controlled circuit.

<rk-img
  src="/assets/images/wisblock/rak13101/datasheet/led_pwrkey.png"
  width="60%"
  caption="RAK13101 Module LED PWRKEY Control Circuit"
/>

