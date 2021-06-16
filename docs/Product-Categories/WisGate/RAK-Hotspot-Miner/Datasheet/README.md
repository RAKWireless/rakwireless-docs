---
static_root: 
rak_desc: Covers the comprehensive information of your RAK Hotspot Miner to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisgate
  - RAK Hotspot Miner
next: false
prev: ../Troubleshooting/
certifications:
  - [KCC, https://downloads.rakwireless.com/LoRa/RAK_Hotspot_Miner/Certification/RAK7248_HotspotMiner_KC_certificate.zip)]
  - [RCM, https://downloads.rakwireless.com/LoRa/RAK_Hotspot_Miner/Certification/RCMA0210312001RCM%20cert-RAK7248%20RCM_Australia.pdf]
---

# RAK Hotspot Miner Datasheet

## Overview

### Description

**Hotspot Details**

- Efficient miner for a new cryptocurrency, Helium (HNT)
- Complete set-up in minutes using a smartphone
- LongFi technology maximizes range and battery life without Wi-Fi, cellular or Bluetooth
- Low Power – only uses about the same amount as an LED light bulb (5W)
- Easily manage Hotspots and tokens from the mobile app
- LongFi™ Technology

![longfi](/assets/images/wisgate/rak-hotspot-miner/icons/longfi.png)

Helium LongFi is a technology architecture that combines a leading wireless technology, LoRaWAN, and the
Helium Blockchain. LongFi is optimized for miles of range, and long battery life for IoT devices.

![proof-of-coverage](/assets/images/wisgate/rak-hotspot-miner/icons/proof-of-coverage.png)

RAK Hotspot Miners earn Helium when devices connect, and for validating wireless coverage delivered by
peers. Using a system called Proof-of-Coverage, RAK Hotspot Miners earn more Helium when they're in
range of other RAK Hotspot Miners, but need to be at least 300 meters apart.

Range depends on the environment, for rural areas up to 10 miles or more, but for more dense areas up to a
mile. Single RAK Hotspot Miners earn less as they can only issue Challenges over the internet, and can’t
participate in Proof-of-Coverage.

![wireless-coverage](/assets/images/wisgate/rak-hotspot-miner/icons/wireless-coverage.png)

- Deliver may square miles of coverage from a single RAK Hotspot Miner
- Based on initial testing, only about 50 to 100 RAK Hotspot Miners are needed to provide complete
coverage for an entire city

![connect-anything](/assets/images/wisgate/rak-hotspot-miner/icons/connect-anything.png)

- Create a new global network for billions of devices
- Any IoT device can become Helium-enabled using readily available off-the-shelf hardware components,
software, and a reference design that is open source for anyone to improve upon

### Features 

- Computing with Raspberry Pi4 (Linux)
- 2GB on-board RAM
- 32GB SD card
- Based on the LoRa Concentrator Engine: Semtech® SX1302
- Built-in Heat Sink for thermal heat dissipation management
- Supports 5V/ 3A power supply
- IP30 housing
- TX power up to 27dBm, RX sensitivity down to -139 dBm @SF12, BW 125 KHz
- LoRa® Frequency band support: RU864, IN865, EU868, US915, AU915, KR920, AS923.
- Includes Pi ready 'ID EE PROM', GPIO setup, and device tree can be automatically configured
from vendor information
- Supports a fully open source LoRaWAN server

## Specifications

### Overview

The overview covers the RAK Hotspot Miner hotspot details and block diagram.

#### Board Overview

The outer dimension of RAK Hotspot Miner is **92 x 68.3 x 57.2 mm**. 

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/dimensions.png"
  width="40%"
  caption="Device Dimensions"
/> 

#### Hotspot Details

The figure below summarizes the basic building blocks of the RAK Hotspot Miner. The RAK2287 is an essential part of it as it provides all LoRaWAN connectivity. It receives and transmits LoRa Frames and takes care of modulating/demodulating the signals among others. The processing of the LoRa Frames as well as higher-level protocol related tasks are done by the embedded host system (Raspberry Pi). Received and processed LoRa Frames are being sent to a LoRaWAN Server. The segmentation of protocol related tasks is outside the scope of this document.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/hotspot-details.png"
  width="65%"
  caption="RAK Hotspot Miner System Structure"
/>

#### Block Diagram

The RAK Hotspot Miner is the central hardware solution for all LoRa based radio communication. It receives and transmits radio messages. The processing of radio messages as well as the protocol related tasks is done by the embedded host system (Raspberry Pi 4). Received and processed radio messages are being sent to a LoRaWAN server. The following fgure shows the block diagram of the RAK Hotspot Miner.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/block-diagram.png"
  width="65%"
  caption="RAK Hotspot Miner Block Diagram"
/>

:::tip 📝 NOTE
The concrete segmentation of the protocol related tasks is outside the scope of this document.
::: 

### Hardware

#### Interfaces

The interface of RAK Hotspot Miner is shown in the figure below.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/interfaces.svg"
  width="100%"
  caption="RAK Hotspot Miner Interfaces"
/>

#### RF Characteristics

##### Operating Frequencies

The RAK Hotspot Miner supports all LoRaWAN frequency channels as below. It is easy to configure while building the firmware from the source code.

| **Region**    | **Frequency (MHz)** |
| ------------- | ------------------- |
| Europe        | EU868               |
| North America | US915               |
| Asia          | AS923               |
| Australia     | AU915               |
| Korea         | KR920               |
| India         | IN865               |
| Russia        | RU864               |

##### LoRa® RF Characteristics

###### Transmitter RF Characteristics

The RAK Hotspot Miner has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

| **PA Control** | **PWID Control** | **Power** |
| -------------- | ----------------- | --------- |
| **0**          | 10                | -6 dBm    |
| **0**          | 13                | -3 dBm    |
| **0**          | 17                | 0 dBm     |
| **0**          | 20                | 4 dBm     |
| **1**          | 0                 | 8 dBm     |
| **1**          | 2                 | 10 dBm    |
| **1**          | 4                 | 12 dBm    |
| **1**          | 7                 | 14 dBm    |
| **1**          | 9                 | 16 dBm    |
| **1**          | 10                | 17 dBm    |
| **1**          | 12                | 19 dBm    |
| **1**          | 13                | 20 dBm    |
| **1**          | 16                | 23 dBm    |
| **1**          | 18                | 25 dBm    |
| **1**          | 20                | 26 dBm    |
| **1**          | 22                | 27 dBm    |

:::tip 📝 NOTE
Normally, there is a ±1.5dB difference between the actual test value and the table data.
:::

:::tip 📝 NOTE
T=25℃, VDD=5V (Typ.) if nothing else is stated.
:::

| **Parameter**                              | **Condition**            | **Min**  | **Typ.** | **Max**  |
| ------------------------------------------ | ------------------------ | -------- | -------- | -------- |
| **Frequency Range**                        |                          | 863 MHz  |          | 870 MHz  |
| **Modulation Techniques**                  | FSK/LoRa                 |          |          |          |
| **TX Frequency Variation vs. Temperature** | Power Level Setting : 20 | -3 KHz   |          | +3 KHz   |
| **TX Power Variation vs. Temperature**     | Power Level Setting : 20 | -5 dBm   |          | +5 dBm   |
| **TX Power Variation**                     |                          | -1.5 dBm |          | +1.5 dBm |

| **Parameter**                              | **Condition**            | **Min**  | **Typ.** | **Max**  |
| ------------------------------------------ | ------------------------ | -------- | -------- | -------- |
| **Frequency Range**                        |                          | 902 MHz  |          | 928 MHz  |
| **Modulation Techniques**                  | FSK/LoRa                 |          |          |          |

###### Receiver RF Characteristics

It is highly recommended, to use optimized RSSI calibration values, which is part of the HAL v3.l. For both, Radio 1 and 2, the RSSI-Offset should be set -169.0. The following table gives the typical sensitivity level of the RAK Hotspot Miner.

| **Signal Bandwidtth (Khz)** | **Spreading Factor** | **Sensitivity (dBm)** |
| :-------------------------: | :------------------: | :-------------------: |
|             125             |          12          |         -139          |
|             125             |          7           |         -125          |
|             250             |          12          |         -136          |
|             250             |          7           |         -123          |
|             500             |          12          |         -134          |
|             500             |          7           |         -120          |

#### Antenna Specifications

##### LoRa Antenna

###### Overview

The LoRa Antenna with RP-SMA Male connector shown in the figure below:

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/lora-antenna.png"
  width="40%"
  caption="LoRa® Antenna"
/>

###### Antenna Dimension

The antenna's mechanical dimension is shown below:

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/datasheet/lora-antenna-dimension.png"
  width="50%"
  caption="LoRa® Antenna Dimension (mm)"
/>

###### Antenna Parameters

| Items                              | Specifications          | Specifications          |
| ---------------------------------- |  ---------------------- | ----------------------- |
| Frequency Range                    | 863~870 MHz             | 902~928 MHz             |
| Peak Gain                          | 2.8 dBi                 | 2.3 dBi                 |
| Voltage Standard Wave Ratio (VSWR) | ≤1.5                    | ≤1.5                    |
| Efficiency                         | >80%                    | >80%                    |
| Feed Impedance                     | 50 Ohms                 | 50 Ohms                 |
| Working Temperature & Humidity     | T: -35~+75 ºC, H: 5~95% | T: -35~+75 ºC, H: 5~95% |

#### Electrical Requirements

The RAK Hotspot Miner operates at 5V/ 3A

| **Parameter**      | **Min.** | **Typical** | **Max** |
| ------------------ | -------- | ----------- | ------- |
| **LoRa Tx mode**   | -        | -           | 950 mA  |
| **Standby power**  | -        | 550 mA      | -       |
| **Burn test mode** | -        | -           | 940 mA  |

:::tip 📝 NOTE
* LoRa Tx mode: The LoRa module works at the maximum transmit power state.
* Burn test mode: Raspberry Pi CPU and memory are running at full capacity.
:::

#### Environmental Requirements

The table below lists the operation and storage temperature requirements:

| **Parameter**                   | **Min.** | **Typical** | **Max** |
| ------------------------------- | -------- | ----------- | ------- |
| **Operation Temperature Range** | -10 ºC   | +25 ºC      | +55 ºC  |
| **Storage Temperature Range**   | -40 ºC   |             | +85 ºC  |

### Software

#### Firmware

|      **Model**      | **Raspberry Pi Board** | **Firmware Version** | **Source** |
| ------------------- | ---------------------- | -------------------- | ---------- |
| RAK Hotspot Miner   | Raspberry Pi 4         |                      |            |

#### LoRaWAN

* Supports class A, C
* Supports connect to TTN server Supports LoRa package forward
* Supports build-in ChirpStack® LoRaWAN Server

#### Network Protocol Stack

* Supports 802.11ac
* Supports Wi-Fi AP mode and Client mode Supports DHCP


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />

### FCC Caution

Any changes or modifications not expressly approved by the party responsible for compliance could void the user's authority to operate the equipment. 

This device complies with part 15 of the FCC Rules. Operation is subject to the following two conditions: (1) This device may not cause harmful interference, and (2) this device must accept any interference received, including interference that may cause undesired operation. 

:::tip 📝 IMPORTANT NOTE
This equipment has been tested and found to comply with the limits for a Class B digital device, according to part 15 of the FCC Rules. These limits are designed to provide reasonable protection against harmful interference in a residential installation. This equipment generates, uses, and can radiate radio frequency energy and, if not installed and used following the instructions, may cause harmful interference to radio communications. However, there is no guarantee that interference will not occur in a particular installation. If this equipment does cause harmful interference to radio or television reception, which can be determined by turning the equipment off and on, the user is encouraged to try to correct the interference by one or more of the following measures: 

* Reorient or relocate the receiving antenna. 
* Increase the separation between the equipment and receiver. 
* Connect the equipment into an outlet on a circuit different from that to which the receiver is connected. 
* Consult the dealer or an experienced radio/TV technician for help. 
:::

### FCC Radiation Exposure Statement

This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment. This equipment should be installed and operated with a minimum distance of 20 cm between the radiator & your body.

:::warning 📝 ISEDC Warning
This device complies with Innovation, Science, and Economic Development Canada licence-exempt RSS standard(s). Operation is subject to the following two conditions:

1. this device may not cause interference, and
2. this device must accept any interference, including interference that may cause undesired operation of the device.

The device complies with RF exposure guidelines, users can obtain Canadian information on RF exposure and compliance. The minimum distance from the body to use the device is 20 cm.
:::
