---
rak_desc: Provides comprehensive information about your RAK2270 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak2270/RAK2270.png
prev: ../Quickstart/
next: false
rak_grp: [wisnode,track]
tags:
  - datasheet
  - wisnode
  - RAK2270
  - sticker tracker
certifications:  
  - [CE, https://downloads.rakwireless.com/LoRa/RAK2270/Certification/RAK2270_CE_Certification.pdf]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK2270/Certification/RAK2270_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK2270/Certification/RAK2270_ISED_Certification.pdf]
---

# RAK2270 Sticker Tracker Datasheet

## Overview

### Description

**RAK2270 Sticker Tracker** is a battery-powered LoRaWAN tracker with a label-like form factor powered by STM32WLE5. It’s compact; simply tear, peel, and stick RAK2270 to any product to virtually track its location in real time by leveraging the location estimator functionality of the Helium network server. It is activated using a Ri sensor, making it buttonless for ease of use.

With its built-in temperature sensor, it measures temperatures ranging from -20°&nbsp;C to +60°&nbsp;C with a temperature resolution of 0.1°&nbsp;C while simultaneously uploading the data to the server. It also includes an integrated 3-axis accelerometer that automatically adjusts the device positioning frequency. Because it detects whether the device is stationary or moving, it reduces device usage time.

Data, such as time, temperature, and motion state, remains safe and stored in an EEPROM storage space with a storage capacity of up to 64KB. Data can be saved locally when out of coverage and retained when coverage is restored.
RAK2270 supports various LoRaWAN bands, including IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4.


### Features

- Powered by **STM32WLE5**
- Location based on LoRaWAN
- Real-time location tracking
- Utilizes the **Location Estimator** functionality of the Helium network server
- Up to **64&nbsp;KB EEPROM** storage space
- Built-in temperature sensor
  - Temperature measurement: **-20°&nbsp;C** ~ **+60°&nbsp;C**
  - Temperature resolution: **0.1°&nbsp;C**
  - Operating temperature: **-20°&nbsp;C** ~ **+60°&nbsp;C**
- Built-in 3-axis accelerometer that auto-adjusts the positioning frequency
- Antenna gain: **2.0&nbsp;dBi**
- Maximum output power: **22&nbsp;dBm**
- Battery-operated:
  - Type: **LiMnO2**
  - Battery capacity: **600&nbsp;mAh**
- LoRaWAN supported bands: IN865, EU868, AU915, US915, KR920, RU864, and AS923-1/2/3/4
- Compact size for easy attachment to any product: **85&nbsp;mm x 118&nbsp;mm x 1.5&nbsp;mm**


## Specifications

### Overview

#### Block Diagram

RAK2270 integrates one RAK3172-SiP, one LIS3DHTR, one LiMnO2 battery, and one EEPROM.

- The RAK3172-SiP provides the required LoRa modem and processing functions.
- The LIS3DHTR is used to determine the frequency of data transmission based on motion state judgment.
- EEPROM is used for local data storage.
- The LiMnO2 battery powers the system with a nominal capacity of 600&nbsp;mAh.

<rk-img
  src="/assets/images/wisnode/rak2270/datasheet/block-diagram.png"
  width="70%"
  caption="RAK2270 Sticker Tracker Block Diagram"
/>

### Hardware

#### Chipset

| Vendor             | Part Number |
| ------------------ | ----------- |
| STMicroelectronics | STM32WLE5   |

#### Main Specifications

| Parameter                | Values                                                                                                                          |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------- |
| Temperature              | Measurement Range: -20°&nbsp;C ~ +60°&nbsp;C <br> Resolution: 0.1°&nbsp;C <br> Operating Temperature: -20°&nbsp;C ~ +60°&nbsp;C |
| Battery Type             | LiMnO2                                                                                                                          |
| Nominal Battery Capacity | 600&nbsp;mAh                                                                                                                    |
| Antenna Gain             | 2.0&nbsp;dBi                                                                                                                    |
| Maximum Output Power     | 22&nbspdBm                                                                                                                      |
| Module Size              | 85&nbsp;mm x 118&nbsp;mm x 1.5&nbsp;mm                                                                                          |
| Activation Method        | Ri sensor (buttonless)                                                                                                          |


#### RF Characteristics
##### Operating Frequencies

The table below shows the supported LoRaWAN Bands of the RAK2270 Sticker Tracker:

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU868           |
| North America | US915           |
| Australia     | AU915           |
| Korea         | KR920           |
| Asia          | AS923-1/2/3/4   |
| India         | IN865           |
| Russia        | RU864           |

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

