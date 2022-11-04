---
rak_desc: Provides comprehensive information of your RAK10701-P Field Tester for LoRaWAN to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/rak10701/overview/RAK10701-p-buy.png
prev: ../Quickstart/
next: false
tags:
  - datasheet
  - WisNode
---

# RAK10701-P Field Tester for LoRaWAN Pro Datasheet

## Overview

### Description

The **RAK10701-P Field Tester for LoRaWAN** is a ready-to-use WisNode for evaluating deployed LoRaWAN network, which comes in a hard case and two different antenna types. It has a GNSS and a touchscreen LCD for the user interface, which displays the number of gateways the device can reach and other parameters like approximate distance, RSSI, and SNR. It is powered by a rechargeable battery and can be charged via USB Type-C interface.

### Features

- Supports LoRaWAN regions: RU864, IN865, EU868, US915, AU915, KR920, & AS923-1/2/3/4
- Compatible with LoRaWAN 1.0.3
- Works with Helium Network, TheThingsNetwork, and with custom end-points with other LoRaWAN networks
- Protected by a hard case which is ideal for fieldwork
- Includes two different antenna types
- Shows the number of gateways/hotspots in the range
- Shows min and max RSSI levels
- Shows min and max distance to gateways/hotspots in range
- Compatible with WisToolBox and allows wireless configuration via BLE
- Powered by 3200&nbsp;mAh battery
- Rechargeable over a USB Type-C connector
- 320x240 TFT touchscreen
- 2.3&nbsp;dBi external antenna via RP-SMA connector
- Operating Temperature: -10°&nbsp;C ~ 60°&nbsp;C
- Storage Temperature: -40°&nbsp;C ~ 80°&nbsp;C

## Specifications

### Overview

RAK10701-P Field Tester for LoRaWAN with the external antenna.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-photo.png"
  width="30%"
  caption="RAK10701-P Field Tester for LoRaWAN"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the interfacing of the tracker. It also covers the rf, antennas, electrical, environmental, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK10701-P Field Tester for LoRaWAN.

#### Interfaces

The RAK10701-P Field Tester for LoRaWAN has four interfaces which are the touch screen LCD, external button, antenna port, and USB connector.

##### Touchscreen TFT LCD

The touchscreen LCD is the main interface of the device. Most of the user interaction is done via the touchscreen LCD.

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/interface-lcd.png"
  width="30%"
  caption="RAK10701-L front view with an LCD screen"
/>

You can interact with the device and check the data needed on your LoRaWAN network field testing. The icons highlighted in the red box are the areas responsive to touch. Other parts of the screen will not be responsive to any touch input.

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/interface-main.png"
  width="35%"
  caption="RAK10701-L home display"
/>

:::tip 📝 NOTE
Complete details on different pages of the screens are discussed in the [RAK10701-L Quick Start Guide](/Product-Categories/WisNode/RAK10701-L/Quickstart/).
:::

##### External Button

There is one external button on RAK10701 which can be used in various scenarios.

1. Turning on and off (holding for five seconds)
2. Forced uplink (double-click)
3. Sleep and wake-up (single click)

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/button.png"
  width="25%"
  caption="RAK10701-L useable button"
/>

:::tip 📝 NOTE
Complete details on different pages of the screens are discussed in the [RAK10701-P Quick Start Guide](/Product-Categories/WisNode/RAK10701/Quickstart/).
:::

##### Antenna RP-SMA Connector

On top of the RAK10701-P Field Tester for LoRaWAN is an RP-SMA port for the external antenna.

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/interface-antenna-2.png"
  width="40%"
  caption="RAK10701-P RP-SMA antenna port"
/>

There are two antennas included in the RAK10701-P one with 2.0dBi gain:

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/2-dbi-antenna.png"
  width="30%"
  caption="2.0 dBi antenna"
/>

:::tip 📝 NOTE
Detailed information about the LoRa antenna can be found on the datasheet:

- [9xx Mhz Antenna](https://downloads.rakwireless.com/Accessories/Antenna/SMA-Antenna/RPSMA-J-915MHz_LoRa_Antenna_Specifications.pdf)
- [8xx Mhz Antenna](https://downloads.rakwireless.com/Accessories/Antenna/SMA-Antenna/RPSMA-J-868MHz_LoRa_Antenna_Specifications.pdf)
:::

Then, another one with 2.3&nbsp;dBi gain.

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/interface-blade-antenna.png"
  width="30%"
  caption="2.3 dBi antenna"
/>

:::tip 📝 NOTE
Detailed information about the LoRa antenna can be found on the datasheet:

- [9xx Mhz Antenna](https://docs.rakwireless.com/Product-Categories/Accessories/RAKARJ16/Overview/)
- [8xx Mhz Antenna](https://docs.rakwireless.com/Product-Categories/Accessories/RAKARJ17/Overview/)
:::

##### USB Type-C for Charging and WisToolBox Configuration

There is also a USB interface on RAK10701. You can use [WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview) software to configure the devices via USB connection. You also have the option to configure the device wirelessly via BLE connection using the [WisToolBox Mobile App](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/WisToolBoxMobile/) compatible with iOS and Android.

<rk-img
  src="/assets/images/wisnode/rak10701/datasheet/interface-usb-typec.png"
  width="40%"
  caption="USB Type-C connector access"
/>

#### RF Characteristics

##### LoRaWAN Operating Frequencies

The RAK10701-L Field Tester for LoRaWAN supports the regional bands shown in the table below. When purchasing a RAK10701, pay attention to specifying the correct variant for your region.

| Region        | Frequency (MHz) | RAK10701-P Field Tester for LoRaWAN |
| ------------- | --------------- | ----------------------------------- |
| Russia        | RU864           | 8xx MHz version                     |
| India         | IN865           | 8xx MHz version                     |
| Europe        | EU868           | 8xx MHz version                     |
| North America | US915           | 9xx MHz version                     |
| Canada        | US915           | 9xx MHz version                     |
| Australia     | AU915           | 9xx MHz version                     |
| Korea         | KR920           | 9xx MHz version                     |
| Asia          | AS923-1/2/3/4   | 9xx MHz version                     |

##### GPS Antenna

| Items     | Parameter        |
| --------- | ---------------- |
| Frequency | 1575.42&nbsp;MHz |

#### Electrical Characteristics

##### Working Mode

| Mode      | Condition | Power Consumption |
| --------- | --------- | ----------------- |
| Idle Mode | LCD On    | 120&nbsp;mA       |
|           | LCD Off   | 60&nbsp;mA        |

##### Battery Supply

The RAK10701-P Field Tester for LoRaWAN is equipped with a built-in rechargeable 3.7&nbsp;V Li-ion battery with 3200&nbsp;mAh capacity. This can be charged via a USB Type-C connector interface.

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements.

| Parameter             | Min.       | Typical     | Max.        |
| --------------------- | ---------- | ----------- | ----------- |
| Storage Temp. Range   | -40&nbsp;C | +25&nbsp;°C | +80&nbsp;°C |
| Operation Temp. Range | -10&nbsp;C | +25&nbsp;°C | +60&nbsp;°C |

#### Mechanical Characteristics

- Dimensions: 100&nbsp;mm x 75&nbsp;mm x 38&nbsp;mm
- Weight: approximately 8.6&nbsp;oz (243.8&nbsp;g) without battery

### Software

Download the latest firmware version of RAK10701-P in the table provided below.

| Model                              | Version | Firmware                                                          |
| ---------------------------------- | ------- | ----------------------------------------------------------------- |
| RAK10701- Field Tester for LoRaWAN | V1.0.2  | [Download](https://downloads.rakwireless.com/LoRa/RAK10701/beta/) |
