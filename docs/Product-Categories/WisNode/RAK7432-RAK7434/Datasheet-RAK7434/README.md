---
rak_desc: Provides comprehensive information about your RAK7434 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak7432-rak7434/overview/RAK7432-RAK7434.png
rak_grp: [wisnode,bridge]
prev: ../Datasheet-RAK7432/
next: false
tags:
  - RAK7434
  - wisnode
  - datasheet
---

# RAK7434 WisNode Bridge Analog Datasheet

## Overview

### Description

**RAK7434 WisNode Bridge Analog** is a 0-5&nbsp;V analog to LoRaWAN converter designed for industrial applications. It can read values from devices supporting the current loop.

RAK7434 can operate in all of the LoRaWAN bands within the standard parameters defined by the LoRa Alliance. Its line of sight range is 15+&nbsp;km and in industrial cases, where there are heavy obstructions in the path of the RF signal performance is improved compared to conventional wireless systems due to the characteristics of LoRa as a modulation technique. This allows for consistently good signal quality within large factories, densely populated offices, storehouses, etc.

Together with the RAK gateway and LoRa Server products, it can easily and quickly build a wireless industrial system or extend an already existing one. It adopts industrial protection design, supports a wide range voltage supply supports wall mounting and DIN rail installation and facilitates field installation and use.

### Features

- **LoRaWAN 1.0.3** protocol stack, supports Class A, B, and C modes
- **Low power consumption mode**, wakes up regularly to collect analog input data and report
- **0-5&nbsp;V** acquisition accuracy 5&nbsp;mV, error range 0.1%
- Remote management function
- Supports active query function - the remote server sends query commands to read 0-5&nbsp;V analog data
- Supports external LoRa antennas
- Maximum LoRa transmission power: **20&nbsp;dBm**
- IP31 protection
- Mounting: Wall mounting, DIN rail, & Magnetic installation

## Specifications

### Overview

<rk-img
  src="/assets/images/wisnode/rak7432-rak7434/rak7434-datasheet/rak7434.png"
  width="50%"
  caption="RAK7434 WisNode Bridge Analog"
/>

#### Networking Applications

RAK7434 WisNode Bridge Analog can convert 0-5&nbsp;V analog data into LoRaWAN wireless packets through ADC, that can be sent to the cloud via a standard LoRaWAN gateway. Using RAK7434 WisNode Bridge Analog, you can extend your analog sensors and devices into wireless network solution.

An example would be using the [RAK7289](https://store.rakwireless.com/products/wisgate-edge-pro-rak7289?utm_source=WisGateRAK7289&utm_medium=Document&utm_campaign=BuyFromStore) LoRaWAN Gateway coupled with the RAK WisDM cloud management platform, in order to realize an end-to-end industrial field data acquisition and control system. Using the built-in LoRa Server, which comes standard with any RAK LoRaWAN Gateway, one could seamlessly achieve transmission of the end device data to any application server. Furthermore, the MQTT integration allows for a high level of security and efficiency.

<rk-img
  src="/assets/images/wisnode/rak7432-rak7434/rak7434-datasheet/1.network-structure.png"
  width="100%"
  caption="RAK7434 WisNode Bridge Analog network structure"
/>

### Hardware

The hardware specification covers not only the interfacing and detailed parameters and functions of the RAK7434 WisNode Bridge Analog. It also includes the installation of which different types of mounting are presented.

#### Interfaces

<rk-img
  src="/assets/images/wisnode/rak7432-rak7434/rak7434-datasheet/2.bottom-panel.png"
  width="50%"
  caption="RAK7434 WisNode Bridge Analog bottom panel"
/>

###### Power Supply and Configuration Interface

RAK7434 WisNode Bridge Analog can be powered by its DC terminal or via its Micro USB port. The DC terminal works with 8-48&nbsp;V<sub>DC</sub> input, and the rated power of the device is 1&nbsp;W. Pay attention to the positive and negative pole directions when crimping the terminal. Vin is connected to the positive pole of the power supply, and GND is connected to the negative pole of the power supply.

The Micro USB port can also be used for powering the device (5&nbsp;V / 500&nbsp;mA DC). At the same time, the Micro USB port can be used as the configuration interface of the device.

Connect it to a PC and use the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) to open a COM port. The default baud rate is 115200. There is a set of AT commands that can be used to configure the RAK7434 WisNode Bridge Analog.

##### Reset Key and Indicator LED

<table>
 <tbody>
 <tr><td>Reset key</td><td>Press the reset key shortly to restart the system</td></tr>
 <tr><td>Red LED</td><td>Power indicator (Only valid when using the USB power)</td></tr>
 <tr><td>Green LED</td><td>System working indicator, flashing when there is data transmission</td></tr>
</tbody>
</table>

#### Specifications

The table below shows the full specification of the RAK7434 WisNode Bridge Analog.

<table>
 <thead> <tr> <th>Parameter</th> <th>Value</th> <th>Remarks</th> </tr> </thead>
 <tbody>
 <tr><td>LoRaWAN Protocol</td> <td>LoRaWAN 1.0.3</td> <td></td> </tr>
 <tr><td>LoRa Frequency</td> <td>RU864, IN865, EU868, US915, AU915, KR920, KR923 </td> <td>Different models support different frequency bands</td></tr>
 <tr><td>LoRaWAN Mode</td> <td>Class A/B/C</td> <td></td></tr>
 <tr><td>LoRa Tx Power</td> <td>20&nbsp;dBm</td> <td></td></tr>
 <tr><td>LoRa Antenna interface</td> <td>RP-SMA FEMALE, External Omnidirectional Antenna</td> <td></td></tr>
 <tr><td>0-5&nbsp;V input</td><td>2 inputs/channels</td> <td></td></tr>
 <tr><td>0-5&nbsp;V input interface range</td><td>0-24&nbsp;mA<td> </td></tr>
 <tr><td rowspan="3">Interface protection</td> <td>18&nbsp;kV HBM protection<td> </td> </tr>
 <tr><td>13&nbsp;kV IEC61000-4-2 contact discharge</td> <td></td> </tr>
 <tr><td>4&nbsp;kV IEC61000-4-4 fast transient burst</td> <td></td> </tr>
 <tr><td>Input Voltage</td> <td>8&nbsp;V - 48&nbsp;V</td> <td> 5&nbsp;V for Micro USB</td></tr>
 <tr><td>Rated Power</td><td>Maximum 1&nbsp;W</td> <td></td></tr>
 <tr><td>Output Voltage</td><td>8&nbsp;V - 48&nbsp;V</td> <td></td></tr>
 <tr><td>Configuration Interface</td><td>Micro USB</td> <td></td></tr>
 <tr><td>Indicator LED</td><td>Power LED, Data LED</td> <td></td></tr>
 <tr><td>Housing Material</td><td>Metal</td> <td></td></tr>
 <tr><td>Dimension</td><td>93.6 x 100.3 x 24&nbsp;mm</td> <td></td></tr>
 <tr><td>Protection Grade</td><td>IP31</td> <td></td></tr>
 <tr><td>Installation</td><td>Wall mounting, DIN rail installation, magnetic mounting</td><td>The magnetic mounting requires optional accessories</td></tr>
 <tr><td>Working Temperature</td><td>-30°&nbsp;C ~ 65°&nbsp;C</td><td></td></tr>
 <tr><td>Storage Temperature</td><td>-40°&nbsp;C ~ 85°&nbsp;C</td><td></td></tr>
 </tbody>
</table>

#### Installation

RAK7434 allows for three installation methods: wall mounting, DIN rail installation, and magnetic mounting. The wall installation and the DIN rail installation is the standard installation mode. The accessories required for magnetic mounting are optional.

<rk-img
  src="/assets/images/wisnode/rak7432-rak7434/rak7434-datasheet/3.mounting-options.png"
  width="100%"
  caption="Different types of mounting"
/>

### Firmware

<table>
 <thead><tr><th>Model</th><th>Firmware Version</th><th>Source</th></tr></thead>
 <tbody>
 <tr><td>RAK7432</td><td>1.1.0063</td><td>Download</td></tr>
 </tbody>
</table>

<!-- ## Certification

<rk-certifications :params="$page.frontmatter.certifications" /> -->
