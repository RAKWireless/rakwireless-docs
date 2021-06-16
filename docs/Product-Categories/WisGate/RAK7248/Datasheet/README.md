---
static_root: 
rak_desc: Covers the comprehensive information of your RAK7248 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisgate
  - RAK7248
next: false
prev: ../Overview/
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_FCC_Certification.zip]
  - [IC, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_IC_Certification.zip]
  - [SRRC, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_SRRC_certification.zip]
  - [IMDA, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_IMDA_Certification.zip]
  - [Ukraine, https://downloads.rakwireless.com/LoRa/RAK7248/Certification/RAK7248_Ukraine_Certification.rar]

---

# RAK7248 WisGate Developer D4H Gateway Datasheet

## Overview

### Description

The WisGate Developer D4H RAK7248 is a LoRaWAN® Gateway that consists of Raspberry Pi4, RAK2287 Concentrator, and RAK2287 Pi HAT. RAK2287 includes a GPS module and a heat sink for better performance and thermal heat dissipation management, and its housing is built with an aluminum casing.

For the build-in RAK2287, it uses the **SX1302 chip** from Semtech which built-in LoRa® concentrator IP core is a powerful digital signal processing engine. It can receive up to **8 LoRa packets** with different spreading factors on different channels and available in multiple variants so it can be used for international standard bands. This unique capability allows implementing innovative network architectures advantageous over other short-range systems. RAK2287 Pi HAT is a converter board with Raspberry Pi form factor that enables the RAK2287 module to be mounted on the top of the Raspberry Pi. It integrates one (1) 40-pin female Pi HAT connector and one mPCIe connector to connect RAK2287 to the Raspberry Pi 4.

RAK7248 is ideal for prototyping, proof-of-concept demonstration, or evaluation. It includes a ready to use LoRaWAN Gateway OS that can be connected to a LoRaWAN server. Also, it is developer-friendly and simple even for no-so-tech users to set up a LoRaWAN system. It has to be the best value and function for connectivity to address a variety of applications like Smart Grid, Intelligent Farm, and other IoT enterprise applications.

### Features 

- Computing with Raspberry Pi4 (Linux).
- Based on the LoRa Concentrator Engine: Semtech® SX1302.
- Built-in Ublox ZOE-M8Q GPS Module.
- Built-in Heat Sink for thermal heat dissipation management.
- Supports 5V/3A power supply.
- IP30 housing.
- TX power up to 27dBm, RX sensitivity down to -139 dBm @SF12, BW 125 KHz.
- LoRa® Frequency band support: RU864, IN865, EU868, US915, AU915, KR920, AS923.
- Includes Pi ready 'ID EEPROM', GPIO setup, and device tree can be automatically configured from vendor information.
- Supports a fully open source LoRaWAN server.

## Specifications

### Overview

The overview covers the RAK7248 board and block diagram.

#### Board Overview

The outer dimension of RAK7248 is **92x68.3x57.2 mm**. 

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/dimensions.png"
  width="60%"
  caption="Device Dimensions"
/>

#### Circuit Board Modules Stack

The figure below summarizes the basic building blocks of RAK7248. The RAK2287 is an essential part of it as it provides all LoRaWAN connectivity. It receives and transmits LoRa Frames and takes care of modulating/demodulating the signals among others. The processing of the LoRa Frames as well as higher-level protocol related tasks are done by the embedded host system (Raspberry Pi). Received and processed LoRa Frames are being sent to a LoRaWAN Server. The segmentation of protocol related tasks is outside the scope of this document.

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/RAK7244_system_structure.png"
  width="75%"
  caption="RAK7248 System Structure"
/>

#### Block Diagram

RAK7248 is the central hardware solution for all LoRa based radio communication. It receives and transmits radio messages. The processing of radio messages as well as the protocol related tasks is done by the embedded host system (Raspberry Pi4). Received and processed radio messages are being sent to a LoRaWAN server. The following figure shows the block diagram of RAK7248.

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/rak7248-block-diagram.png"
  width="75%"
  caption="RAK7248 Block Diagram"
/>

:::tip 📝 NOTE
The concrete segmentation of the protocol related tasks is outside the scope of this document.
::: 

### Hardware

#### Interfaces

The interface of RAK7248 is shown in the figure below.

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/interface.svg"
  width="100%"
  caption="RAK7248 Interfaces"
/>

#### RF Characteristics

##### Operating Frequencies

The WisGate Developer D4H supports all LoRaWAN frequency channels as below. Which is easy to configure while building the firmware from the source code.

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

The RAK2287 has an excellent transmitter performance. It is highly recommended to use an optimized configuration for the power level configuration, which is part of the HAL. This results in a mean RF output power level and current consumption.

| **PA control** | **pwid  control** | **Power** |
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
| **TX Frequency Variation vs. Temperature** | Power Level Setting : 20 | -3 KHz   |          | +3 KHz   |
| **TX Power Variation vs. Temperature**     | Power Level Setting : 20 | -5 dBm   |          | +5 dBm   |
| **TX Power Variation**                     |                          | -1.5 dBm |          | +1.5 dBm |

###### Receiver RF Characteristics

It is highly recommended, to use optimized RSSI calibration values, which is part of the HAL v3.1. For both, Radio 1 and 2, the RSSI-Offset should be set -169.0. The following table gives the typical sensitivity level of the RAK2287.

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

The LoRa Antenna with RP-SMA male connector shown in the figure below:

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/lora-antenna.png"
  width="40%"
  caption="LoRa® Antenna"
/>

###### Antenna Dimension

The antenna's mechanical dimension is shown below:

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/lora-antenna-dimension.png"
  width="40%"
  caption="LoRa® Antenna Dimension (mm)"
/>

###### Antenna Parameters

| Items                              | Specifications          | Specifications          |
| ---------------------------------- | :---------------------- | ----------------------- |
| Frequency Range                    | 863~870 MHz             | 902~928 MHz             |
| Peak Gain                          | 2.8 dBi                 | 2.3 dBi                 |
| Voltage Standard Wave Ratio (VSWR) | ≤1.5                    | ≤1.5                    |
| Efficiency                         | >80%                    | >80%                    |
| Feed Impedance                     | 50 Ohms                 | 50 Ohms                 |
| Working Temperature & Humidity     | T: -35~+75 ºC, H: 5~95% | T: -35~+75 ºC, H: 5~95% |

##### GPS Antenna

###### Overview

The GPS antenna with SMA Male Connector for the WisGate D4H LPWAN Gateway is shown below

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/gps-antenna.png"
  width="30%"
  caption="GPS Antenna"
/>

###### GPS Antenna Dimension

The antenna's mechanical dimension is shown below:

<rk-img
  src="/assets/images/wisgate/rak7248/datasheet/gps-antenna-dimension.png"
  width="40%"
  caption="GPS Antenna Dimensions"
/>

###### GPS Environmental Requirements

| **Conditions** | **Temperature** | **Humidity** |
| -------------- | --------------- | ------------ |
| **Working**    | -35 ºC ~ +80 ºC | 0% ~ 95%     |
| **Storage**    | -40 ºC ~ +85 ºC | 0% ~ 95%     |

###### GPS Antenna Parameters

Antenna specifications are listed in the table below:

| **Item**                                        | **Specifications**    | **PET** |
| ----------------------------------------------- | --------------------- | ------- |
| **Range of Receiving Frequency**                | 1575.42±1.1           | ±2.5    |
| **Center Frequency (MHz) w/ 30mm2 GND plane**   | 1575.42               | ±3.0    |
| **Bandwidth (MHz) (Return Loss ≤ -10dB)**       | ≥10                   | ±0.5    |
| **VSWR (in Center Frequency)**                  | ≤2.0                  | ±0.5    |
| **Gain (Zenith) (dBi Typ.) w/ 70mm2 GND Plane** | 4.5                   | ±0.5    |
| **Axial Ratio (dB) w/ 70mm2 GND Plane**         | 3.0                   | ±0.2    |
| **Polarization**                                | Right-Handed Circular | -       |
| **Impedance (Ω)**                               | 50                    | -       |
| **Frequency Temperature Coefficient (ppm/ºC)**  | 0±10                  | -       |

Amplifier Specifications are listed below:

| **Item**              | **Specifications** |
| --------------------- | ------------------ |
| **Frequency Range**   | 1575.42 MHz        |
| **Gain**              | 27 dB              |
| **VSWR**              | ≤ 2.0 V            |
| **Noise Coefficient** | ≤ 2.0 dBm          |
| **DC Voltage**        | 3 ~ 5 V            |
| **DC Current**        | 5 ± 2 mA           |

Environmental test performance specifications are listed below:

| **Item**              | **Normal Temp.** | **High Temp (1)** | **Low Temp (2)** |
| --------------------- | ---------------- | ----------------- | ---------------- |
| **Amplifier Gain**    | 27 dB ± 2.0      | 27 dB ± 2.0       | 27 dB ± 2.0      |
| **VSWR**              | ≤ 2.0            | ≤ 2.0             | ≤ 2.0            |
| **Noise Coefficient** | ≤ 2.0            | ≤ 2.0             | ≤ 2.0            |

:::tip 📝 NOTE
1. **High Temperature**: For 24 hours, the device was enclosed into a chamber with temperature and humidity set to 85ºC and 95%, respectively. Then, for at least an hour, the temperature is set back to normal. **The device experienced no physical deformation.**
2. **Low Temperature**: For 24 hours, the device was enclosed into a chamber with a temperature set to -40ºC.Then, for at least an hour, the temperature is set back to normal. **The device experienced no physical deformation.**
:::

#### Electrical Requirements

The WisGate Developer D4H operates at 5V/3A.

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

| **Model** | **Raspberry Pi Board** | **Firmware Version** | **Source**                                                                                      |
| --------- | ---------------------- | -------------------- | ----------------------------------------------------------------------------------------------- |
| RAK7248   | Raspberry Pi 4         | 4.2.5R               | [Download](https://downloads.rakwireless.com/LoRa/RAK7248/Firmware/RAK7248_Latest_Firmware.zip) |

#### LoRaWAN

* Supports class A, C
* Supports connect to TTN server
* Supports LoRa package forward
* Supports build-in ChirpStack® LoRaWAN Server

#### Network Protocol Stack

* Supports 802.11ac
* Supports WiFi AP mode and Client mode
* Supports DHCP

#### Managment

* Supports SSH

## Models / Bundles

| Part  Number | Package                                                                                                     | Description              |
| ------------ | ----------------------------------------------------------------------------------------------------------- | ------------------------ |
| RAK7248-03   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for EU868 region |
| RAK7248-04   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for US915 region |
| RAK7248-05   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for KR920 region |
| RAK7248-06   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for AS923 region |
| RAK7248-07   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for IN865 region |
| RAK7248-08   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for AU915 region |
| RAK7248-09   | 1pc LoRa Antenna <br/>1pc GPS Antenna<br/>1pc Power Adapter<br/>1pc 16G SD card with pre-installed firmware | RAK7248 for RU864 region |

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

This equipment complies with FCC radiation exposure limits set forth for an uncontrolled environment. This equipment should be installed and operated with a minimum distance of 20 cm between the radiator& your body.

:::warning 📝 ISEDC Warning

This device complies with Innovation, Science, and Economic Development Canada licence-exempt RSS standard(s). Operation is subject to the following two conditions:
1. this device may not cause interference, and
2. this device must accept any interference, including interference that may cause undesired operation of the device.

Le présent appareil est conforme aux CNR d' Innovation, Sciences et Développement économique Canada applicables aux appareils radio exempts de licence. L'exploitation est autorisée aux deux conditions suivantes :

1. l'appareil nedoit pas produire de brouillage, et
2. l'utilisateur de l'appareil doit accepter tout brouillage radioélectrique subi, même si le brouillage est susceptible d'en compromettre le fonctionnement.
:::

:::warning 📝 ISEDC Warning
The device complies with RF exposure guidelines, users can obtain Canadian information on RF exposure and compliance. The minimum distance from the body to use the device is 20 cm.

Le présent appareil est conforme Après examen de ce matériel aux conformité ou aux limites d’intensité de champ RF, les utilisateurs peuvent sur l’exposition aux radiofréquences et la conformité and compliance d’acquérir les informations correspondantes. La distance minimale du corps à utiliser le dispositif est de 20cm.
:::