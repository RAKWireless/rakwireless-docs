---
prev: ../Overview/
next: false
tags: 
  - RAK9168
  - power supply
  - accessories
  - datasheet
rak_desc: Provides comprehensive information about your RAK9168 5V/6A 12V/2.5A PoE Splitter to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/accessories/rak9168/rak9168.png
certifications:
  - [CE, https://downloads.rakwireless.com/Accessories/RAK9168/Certification/RAK9168_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/Accessories/RAK9168/Certification/RAK9168_FCC_Certification.zip]
---

# RAK9168 5V/6A 12V/2.5A PoE Splitter Datasheet

## Overview

### Description

The RAK PoE Splitter RAK9168 is a device that draws power from a traditional Category 5 twisted-pair Ethernet cable with PoE and complies with the IEEE 802.3af/at PoE standard. It has an isolated 42~57&nbsp;VDC input and a 30&nbsp;W DC-DC converter. You can choose between two versions: one with 12V jack output with a maximum output current of 2.5&nbsp;A, and the other is with 5&nbsp;V USB Type-C output with a maximum current of 6&nbsp;A.

### Features

- Wide Input Voltage: 42&nbsp;V~57&nbsp;V 
- Full features 802.3af/at interface built-in
- Output for the 5&nbsp;V variant: 5&nbsp;V / 6&nbsp;A USB type-C connector
- Output for the 12&nbsp;V variant: 12&nbsp;V / 2.5&nbsp;A  barrel jack connector
- Over current /short circuit protection
- Power Pin: 1/2(+),3/6(-) or 4/5(+),7/8(-)
- Data Pin: 1/2, 3/6, 4/5, 7/8
- Data Speed: 10/100/1000&nbsp;Mbps
- Operating Temperature: -30&nbsp;℃～+75&nbsp;℃


## Specifications

### Overview

<rk-img
  src="/assets/images/accessories/rak9168/rak9168-5v-poe-spitter.png"
  width="70%"
  caption="RAK9168 5V PoE Splitter View"
/>

<rk-img
  src="/assets/images/accessories/rak9168/rak9168-12v-poe-splitter.png"
  width="70%"
  caption="RAK9168 12V PoE Splitter View"
/>

### Hardware

The hardware specification is categorized into three parts. It shows the interfacing and the electrical and environmental of the RAK9168 PoE Splitter.

#### Interface 

<rk-img
  src="/assets/images/accessories/rak9168/rj45-interface.png"
  width="40%"
  caption="RJ45 Interface and Pins"
/>


##### PoE Input

**Figure 4** shows the DC 42-57&nbsp;V Ethernet Input of the RAK9168 PoE Splitter.

<rk-img
  src="/assets/images/accessories/rak9168/poe-input.png"
  width="50%"
  caption="RAK9168 PoE Input"
/>

##### PoE Output

- <b> 5&nbsp;V Version </b>

**Figure 5** shows the DC 5&nbsp;V and the ethernet output for the 5&nbsp;V version.

<rk-img
  src="/assets/images/accessories/rak9168/5v-output.png"
  width="50%"
  caption="RAK9168 PoE Output 5V"
/>


- <b> 12&nbsp;V Version </b>

**Figure 5** shows the DC 12&nbsp;V and the ethernet output for the 12&nbsp;V version.

<rk-img
  src="/assets/images/accessories/rak9168/12v-output.png"
  width="50%"
  caption="RAK9168 PoE Output 5V"
/>

#### Electrical Characteristics


<b> For 5&nbsp;V Version </b>

| Parameter          | Value           |
| ------------------ | --------------- |
| Input Voltage      | DC 42-57&nbsp;V |
| Output Voltage     | DC 5&nbsp;V     |
| Max Output Current | 6&nbsp;A        |
| Connector Type     | USB Type-C      |

<b> For 12&nbsp;V Version </b>

| Parameter          | Value                    |
| ------------------ | ------------------------ |
| Input Voltage      | DC 42-57&nbsp;V          |
| Output Voltage     | DC 12&nbsp;V             |
| Max Output Current | 2.5&nbsp;A               |
| Connector Type     | Barrel Jack 2.1&nbsp;mmm |

#### Environmental Characteristics

| Feature               | Specifications             |
| --------------------- | -------------------------- |
| Type of use           | Indoor environment         |
| Operating Temperature | -30&nbsp;˚C to +75&nbsp;˚C |
| Storage Temperature   | -40&nbsp;˚C to +85&nbsp;˚C |
| Operating Humidity    | 35~90% RH non-condensing   |
| Storage Humidity      | 10~95% RH non-condensing   |
| Enclosure Material    | Aluminum                   |
| Dimensions            | 108.4 x 46.2 x 28&nbsp;mm  |



## Certification
<rk-certifications :params="$page.frontmatter.certifications" />
