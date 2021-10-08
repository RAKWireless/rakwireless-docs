---
rak_desc: Covers the comprehensive information of your RAK7200 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak7200/quickstart/overview/RAK7200_home.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - wisnode
  - RAK2171
---

# RAK2171 WisNode TrackIt Datasheet

## Overview

<rk-img
  src="/assets/images/wisnode/rak2171/datasheet/rak2171.png"
  width="40%"
  caption="RAK2171 WisNode TrackIt"
/>

### Description

WisNode TrackIt (RAK2171) is RAKwireless’ latest LoRaWAN GPS tracking device. It comes in a small form factor with rechargeable battery and tracking and configuration application, available for iOS and Android devices. 

RAK2171 supports multiple working modes and notification options. When used with RAK WisGate Edge gateways and in P2P mode you can monitor your tracker on the application map, create geofences, and receive SOS and movement notifications. You can also configure the WisNode TrackIt to work with any third-party LoRaWAN network using the TrackIt application as a configuration tool. 

### Features

- MTK2323G with built-in Bluetooth and GPS
- SX1262 LoRa chip
- Built-in battery: 400 mAh
- Charger with a magnetic plate 
- Small size
- Built-in accelerometer 
- Operating temperature: -20° C to +60° C
- Android and iOS application for easy management, configuration, and location tracking




## Specifications

### Overview

#### Board Overview 

<rk-img
  src="/assets/images/wisnode/rak2171/datasheet/dimensions.png"
  width="40%"
  caption="RAK2171 WisNode TrackIt Dimensions"
/>


| Parameter             | Value                                                  |
| --------------------- | ------------------------------------------------------ |
| Dimensions            | 42x42x18 mm                                            |
| Weight                | 25 g                                                   |
| Operating temperature | -20° C to +60° C                                       |
| Battery capacity      | 400 mAh                                                |
| Color                 | Tracker - white / dark grey; charger - black           |
| Charger               | 5-pin magnetic plate; USB Type-A; cable length - 50 cm |


### Hardware

#### Interfaces
<rk-img
  src="/assets/images/wisnode/rak2171/datasheet/rak2171-interface.png"
  width="80%"
  caption="RAK2171 WisNode TrackIt Interfaces"
/>

##### Buttons and LED's

* **Function button -** Used for LED signalization.

| LED color         | Meaning                    |
| ----------------- | -------------------------- |
| Blue breathing 🔵   | Charging                   |
| Green steady 🟢     | Battery is full            |
| Red signal blink 🔴 | Low battery (20% and down) |

* **Power/SOS button** - Used for powering on/off the device and sending SOS signals.

| Press combination            | Function                     | LED color               |
| ---------------------------- | ---------------------------- | ----------------------- |
| Press and hold for 3 seconds | Power on/off                 | Red light for 3 seconds |
| 5 consecutively clicks       | Sends SOS message to the app | Red flash on            |
| 5 consecutively clicks again | Cancel SOS message           | Red flash off           |

* **Charging interface** - The device has 3 pins charging port on the back that connects to the magnetic charging plate. 

:::tip 📝 NOTE:
Use the original charging plate and cable only.   
:::




#### RF Characteristics

| Parameter     | Value          |
| ------------- | -------------- |
| Positioning   | GPS, GLONASS   |
| Communication | Bluetooth V4.2 |

#### Antennas

The RAK2172 WisNode TrackIt has built-in LoRaWAN, GPS, and Bluetooth antennas.

#### Electrical Characteristics

| Parameter        | Value    |
| ---------------- | -------- |
| Batery type      | Lithium  |
| Battery capacity | 400 mAh  |
| Charging         | 5 V, 1 A |

#### Environmental Requirements

| Parameter             | Value            |
| --------------------- | ---------------- |
| Charging temperature  | +10° C to +45° C |
| Operating temperature | -20° C to +60° C |

### Software

#### Firmware



#### Mobile application

- For Android
- For iOS
