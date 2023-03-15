---
rak_desc: Provides comprehensive information about your RAK7431 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak7431/datasheet/RAK7431.png
prev: ../Quickstart/
next: ../AT-Command-Manual/
tags:
  - datasheet
  - wisnode
  - RAK7431
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK7431/Certification-Report/RAK7431_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK7431/Certification-Report/RAK7431_FCC_Certification.zip]
---

# RAK7431 WisNode Bridge Serial Datasheet



## Overview

### Description

**RAK7431** is an RS485 to LoRaWAN converter designed for industrial applications. The device relays ModBUS data using the LoRaWAN network as means of wirelessly transmitting to and from the end-devices.

RAK7431 WisNode Bridge Serial can operate in all of the LoRaWAN bands within the standard parameters defined by the LoRa Alliance. Its open environment range is 15+&nbsp;km and in industrial cases, where there are heavy obstructions in the path of the RF signal performance is improved compared to conventional wireless systems due to the characteristics of LoRa as a modulation technique. This allows for consistently good signal quality within the confines of large factories, densely populated offices, storehouses, etc.

This RS485 compatible devices can address up to 16 client terminal nodes. The conversion from and to LoRa frames is seamless and allows for real time control and monitoring of multiple RS485 devices, bus data to access and control the RS485 terminal nodes.

RAK7431 WisNode Bridge Serial together with RAK gateway and LoRa Server products, can easily and quickly build a wireless industrial field control system. It adopts industrial protection design, supports wide range voltage supply, supports wall mounting and DIN rail installation, facilitates field installation and use.

### Features


- **LoRaWAN 1.0.3** protocol stack, supports Class A, B, & C
- **Working modes**: Polling mode, transparent mode and packet mode
- Remote cloud management of RS485 devices
- Can address up to **16 RS485**, a que with up to **32 instruction sets**
- Industrial grade STM MCU: ultra-low power (**4&nbsp;uA sleep**) and wide temperature range of operation
- Wide range of input voltages, **8-48&nbsp;V<sub>DC</sub> input**
- Can power RS485 devices via a dedicated output
- Mounting: Wall, DIN rail, and magnetic mounting
- Compliant with IEC61000-4-2, IEC61000-4-4 and 18&nbsp;kV HMB ESD protection

## Specifications

### Overview

#### Networking Applications

RAK7431 WisNode Bridge Serial can convert the data of RS485 devices into LoRaWAN that can be sent to the cloud via a standard gateway. Cloud servers can also actively send data to RS485 terminals to achieve two-way data transmission. Using RAK7431 WisNode Bridge Serial, what used to be a costly and time-consuming cable line network deployment can be transformed into a rapid and cost-efficient wireless network deployment.

An example would be using the [RAK7249](https://store.rakwireless.com/products/rak7249-diy-outdoor-gateway?utm_source=RAK7249Max&utm_medium=Document&utm_campaign=BuyFromStore) LoRaWAN Gateway coupled with the RAK WisDM cloud management platform, in order to realize an end-to-end industrial field data acquisition and control system. Using the built-in LoRa Server, that comes standard with any RAK LoRaWAN Gateway, one could seamlessly achieve transmission of the end device data to any application server. Furthermore, the MQTT integration allows for a high level of security and efficiency.

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/RAK7431-1.png"
  width="80%"
  caption="RAK7431 WisNode Bridge Serial network structure"
/>

##### Polling Mode

RAK7431 WisNode Bridge Serial can work in polling mode in order to send query instructions to RS485 nodes, and convert the data returned into LoRa frames to be relayed to the application server via gateway.

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/RAK7431-2.png"
  width="80%"
  caption="RAK7431 WisNode Bridge Serial polling mode"
/>

RAK7431 WisNode Bridge Serial can store a maximum of 32 query instructions in polling mode, each of which has a maximum length of 128 bytes. Polling time interval and waiting time can be adjusted as required.

RAK7431 WisNode Bridge Serial converts the data returned by RS485 nodes into LoRa packets that can be sent to gateway in two ways: transparent or packet.

- In transparent mode, RS485 data is encapsulated in the payload of LoRa frames as it is.
- In packet mode, RS485 data is encapsulated in LoRa frames with the addition of a header and verification.

No matter whether polling mode is enabled or not, the server can actively send commands to query the RS485 nodes through the gateway via the RAK7431 WisNode Bridge Serial. The commands issued and the returned data can also be transmitted in transparent mode or in packet mode.

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/RAK7431-3.png"
  width="80%"
  caption="RAK7431 WisNode Bridge Serial transparent mode"
/>

### Hardware

The hardware specification covers only the interfacing and detailed parameters and functions of the RAK7431 WisNode Bridge Serial. It also includes the installation of which different types of mounting are presented.

#### Interfaces

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/RAK7431-4.png"
  width="80%"
  caption="RAK7431 WisNode Bridge Serial bottom panel"
/>

##### Power Supply and Configuration Interface

RAK7431 WisNode Bridge Serial can be powered by its DC terminal or via its Micro USB port. The DC terminal accepts 8-48&nbsp;V<sub>DC</sub> input, and the rated power of the device is 1&nbsp;W. Pay attention to the positive and negative pole directions when crimping the terminal. Vin is connected to the positive pole of the power supply, and GND is connected to the negative pole of the power supply.

The Micro USB port can also be used for powering the device (5&nbsp;V / 500&nbsp;mA DC). At the same time, the Micro USB port can be used as the configuration interface of the device.

Connect it to a PC and use the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) to open a COM port. The default baud rate is 115200. There is a standard set of AT
commands that can be used to configure the RAK7431 WisNode Bridge Serial.

##### Data Interface

When connecting to RS485 nodes, please connect 485A and 485B on the data interface of RAK7431 WisNode Bridge Serial with the A and B lines of the RS485 bus. Connect the GND terminal to the GN line of the RS485 devices The RS485 bus carrying capacity of RAK7431 WisNode Bridge Serial goes up to 16 RS485 terminals at the same time.

The Vout on the data interface can supply power to the RS485 terminals

:::warning ⚠️ WARNING
Only valid when using the DC input interface power supply, USB power supply is invalid.
:::

Also, the Vout output voltage is the same as DC input voltage Vin.

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/RAK7431-5.png"
  width="80%"
  caption="RAK7431 WisNode Bridge Serial ModBus connection diagram"
/>

##### Reset key and indicator LED

| Reset Key   | Press the reset key shortly to restart the system                  |
| ----------- | ------------------------------------------------------------------ |
| 🔴 Red LED   | Power indicator (Only valid when using the USB power)              |
| 🟢 Green LED | System working indicator, flashing when there is data transmission |

#### Specifications

The table below shows the full specification of RAK7431 WisNode Bridge Serial.

| Parameter               | Value                                                                                                                     | Remarks                                            |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
| LoRaWAN Protocol        | LoRaWAN 1.0.3                                                                                                             |                                                    |
| LoRa Frequency          | RU864, IN865, EU868, US915, AU915, KR920, KR923                                                                           | Different models support different frequency bands |
| LoRaWAN Mode            | Class A / Class B / Class C                                                                                               |                                                    |
| LoRa Tx Power           | 20&nbsp;dBm                                                                                                               |                                                    |
| LoRa Antenna interface  | SMA MALE, External omnidirectional Antenna                                                                                |                                                    |
| RS485 Data Rate         | Configurable 9600 -115200&nbsp;bps                                                                                        |                                                    |
| RS485 Carrying Capacity | 16 Nodes                                                                                                                  |                                                    |
| RS485 Protection        | 18&nbsp;kV HBM protection <br> 13&nbsp;kV IEC61000-4-2 contact discharge <br> 4&nbsp;kV IEC61000-4-4 fast transient burst |                                                    |
| Input Voltage           | 8&nbsp;V - 48&nbsp;V                                                                                                      | 5&nbsp;V for Micro USB                             |
| Rated Power             | Maximum 1&nbsp;W                                                                                                          |                                                    |
| Output Voltage          | 8&nbsp;V - 48&nbsp;V                                                                                                      |                                                    |
| Configuration Interface | Micro USB                                                                                                                 |                                                    |
| Indicator LED           | Power LED, Data LED                                                                                                       |                                                    |
| Housing Material        | Metal                                                                                                                     |                                                    |
| Dimension               | 93.6 x 100.3 x 24&nbsp;mm                                                                                                 |                                                    |
| Protection Grade        | IP31                                                                                                                      |                                                    |
| Installation            | Wall mounting, DIN rail installation, magnetic mounting                                                                   | Magnetic mounting requires optional accessories    |
| Working Temperature     | -30°&nbsp;C ~ 65°&nbsp;C                                                                                                  |                                                    |
| Storage Temperature     | -40°&nbsp;C ~ 85°&nbsp;C                                                                                                  |                                                    |

#### Installation

RAK7431 allows for three installation methods: wall mounting, DIN rail installation and magnetic mounting. The wall installation and the DIN rail installation is the standard installation mode. The accessories required for magnetic mounting are optional.

<rk-img
  src="/assets/images/wisnode/rak7431/datasheet/mounting.jpg"
  width="80%"
  caption="Different Types of Mounting"
/>

### Software

#### Firmware

| Model   | Firmware Version | Source                                                                                          |
| ------- | ---------------- | ----------------------------------------------------------------------------------------------- |
| RAK7431 | 1.1.0067         | [Download](https://downloads.rakwireless.com/LoRa/RAK7431/Firmware/RAK7431_Latest_Firmware.zip) |
## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

