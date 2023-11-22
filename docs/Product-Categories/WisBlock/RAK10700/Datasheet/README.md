---
rak_desc: Provides comprehensive information of your RAK10700 GNSS Tracker to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak10700/RAKBox-B2-Enclosure.png
prev: ../AT-Command-Manual/
next: false
tags:
  - datasheet
  - wisblock
  - LPWAN_TRACKER
---

# RAK10700 WisBlock GNSS Tracker for LoRaWAN Datasheet

## Overview

### Description

The **RAK10700 WisBlock GNSS Tracker for LoRaWAN** is a GNSS Tracker device with a GNSS modem. It is built with the WisBlock modules providing LPWAN and BLE communication using the nRF52 MCU and SX1262 LoRa transceiver of the RAK4631 Core module. It includes the RAK12500 GNSS location module with the u-blox ZOE-M8Q chip, the RAK1906 environment sensor with the Bosch BME680 sensor, and the RAK1904 with an ST LIS3DH 3-axis acceleration sensor.

It is a feature-packed tracker device for featured applications development. This device can be used as a quick prototyping tool for Internet-of-Things (IoT) and LoRaWAN Integration. The GNSS Tracker is perfect for IoT applications such as asset tracking, smart vehicle management, and location-based services.

### Features

- Supports sleep mode, low power consumption.
- **Built-in LIS3DH - digital motion sensor**, which has dynamic user selectable full scales of Â±2g/Â±4g/Â±8g/Â±18g and is capable of measuring accelerations with output data rates from 1&nbsp;Hz to 5&nbsp;kHz.
- **Environment sensor**: Built-in Bosch BME680 air quality sensor
- **GNSS location sensor**: u-blox ZOE-M8Q
- LoRaWAN 1.0.2 Standard support - ABP or OTAA mode.
- LoRa P2P support.
- LoRa, BLE, and GPS antenna are integrated inside the casing.
- Micro USB for configuration and charging of the battery
- Supports global license-free frequency band: RU864, IN865, EU868, RU864, US915, AU915, KR920, and AS923.

## Specifications

### Overview

The overview shows the RAK10700 GNSS Tracker with the optional solar panel enclosure.

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/RAKBox-B2-Enclosure.png"
  width="30%"
  caption="RAK10700 WisBlock GNSS Tracker for LoRaWAN"
/>


#### Block Diagram

The block diagram in **Figure 2** shows the different WisBlock modules used in the RAK10700 WisBlock GNSS Tracker for LoRaWAN and their position.

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/modules.png"
  width="60%"
  caption="RAK10700 WisBlock GNSS Tracker for LoRaWAN Block Diagram"
/>

### Hardware

The hardware specification is categorized into seven parts. It shows the interfacing and pinouts of the tracker. It also covers the rf, antennas, electrical, environmental, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK10700 WisBlock GNSS Tracker for LoRaWAN.


#### Interfaces

The RAK10700 WisBlock GNSS Tracker for LoRaWAN provides USB interfaces, as shown in **Figure 3**.

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/usb-interface.png"
  width="80%"
  caption="RAK10700 WisBlock GNSS Tracker for LoRaWAN Interfaces"
/>

- **Micro USB** - 5&nbsp;V DC power supply and UART communication.
- Reset Button

#### Pin Definition

The RAK10700 GNSS Tracker is built using the RAK5005-O Base Board. Available IO pins can be found in the [RAK5005-O datasheet](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Datasheet)

#### RF Characteristics

##### Operating Frequencies

The RAK4631 module used in the GNSS Tracker supports the LoRaWAN bands shown in the table below. When buying a RAK4631 module, pay attention to specify the correct core module RAK4630 H/L for your region. H stands for high-frequency regions and L for low-frequency regions.

:::tip 📝 NOTE
Detailed information about the RAK4631 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/#LoRa/WisBlock/Accessories/).
:::

| Region        | Frequency (MHz) | GNSS Tracker Solution                      |
| ------------- | --------------- | ------------------------------------------ |
| Russia        | RU864           | GNSS Tracker IN865 / EU868 / RU864         |
| India         | IN865           | GNSS Tracker IN865 / EU868 / RU864         |
| Europe        | EU868           | GNSS Tracker IN865 / EU868 / RU864         |
| North America | US915           | GNSS Tracker US915 / AU915 / KR920 / AS923 |
| Canada        | US915           | GNSS Tracker US915 / AU915 / KR920 / AS923 |
| Australia     | AU915           | GNSS Tracker US915 / AU915 / KR920 / AS923 |
| Korea         | KR920           | GNSS Tracker US915 / AU915 / KR920 / AS923 |
| Asia          | AS923           | GNSS Tracker US915 / AU915 / KR920 / AS923 |

#### Antennas

The GNSS Tracker has a built-in active GPS Antenna, an iPex LoRa Antenna, and an iPex BLE Antenna. The performance and the parameters of the Antenna are as follows:

##### GPS Antenna


<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/gps_antenna.png"
  width="50%"
  caption="GPS Antenna"
/>

| Items             | Parameter                           |
| ----------------- | ----------------------------------- |
| Outline Dimension | 15&nbsp;mm x 15&nbsp;mm x 7&nbsp;mm |
| Frequency         | 1575.42&nbsp;MHz                    |

##### LoRa Antenna

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/lora-antenna.png"
  width="40%"
  caption="LoRa Antenna"
/>

##### BLE Antenna


<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/ble-antenna.png"
  width="40%"
  caption="BLE Antenna"
/>

#### Electrical Characteristics


##### Working Mode

| Mode        | Condition      | Power Consumption |
| ----------- | -------------- | ----------------- |
| Sleep Mode  |                | 40&nbsp;µA        |
| Normal Mode | Tx @20&nbsp;dB | 124&nbsp;mA       |
|             | Tx @17&nbsp;dB | 108&nbsp;mA       |
|             | Tx @13&nbsp;dB | 89&nbsp;mA        |
|             | Tx @10&nbsp;dB | 79&nbsp;mA        |
|             | Tx @7&nbsp;dB  | 69&nbsp;mA        |
|             | Rx             | 44&nbsp;mA        |

##### Battery Supply

The GNSS Tracker can be equipped with a built-in rechargeable 3.7&nbsp;V Li-ion battery, which can be charged via Micro USB. _**(Battery not included)**_

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/box-battery.png"
  width="40%"
  caption="Battery placement in the GNSS Tracker"
/>

A matching battery cable is included in the GNSS Tracker.

<rk-img
  src="/assets/images/wisblock/rak10700/datasheet/connector.png"
  width="40%"
  caption="Battery cable for GNSS Tracker"
/>

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements.

| Parameter             | Min.       | Typical     | Max.        |
| --------------------- | ---------- | ----------- | ----------- |
| Operation Temp. Range | -40&nbsp;C | +25&nbsp;°C | +60&nbsp;°C |

#### Mechanical Characteristics

- Dimensions: 95&nbsp;mm (W) x 65&nbsp;mm (L) x 58&nbsp;mm (H)
- Weight: approximately 7.45&nbsp;oz (211.2&nbsp;g) without battery
- Material thickness: 3&nbsp;mm
- Pole and wall-mounting: 60~75&nbsp;mm pole diameter
- Logo customization possibility
- Optional openings for N-type antenna and external components with a gland

### Software

Download the latest firmware version of GNSS Tracker in the table provided below.

| Model            | Version | Source                                                                                             |
| ---------------- | ------- | -------------------------------------------------------------------------------------------------- |
| GNSS Tracker     | V1.1.2  | [Download](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/LPWAN-Tracker-Latest.zip)     |
| GNSS Tracker UF2 | V1.1.2  | [Download](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/LPWAN-Tracker-Latest-UF2.zip) |
| Firmware Updater | NA      | [Download](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/updater.zip)                  |

#### Flashing the Updated Firmware over USB

1. Download the latest firmware to a folder on your computer.
2. Download the firmware update in the same folder.
3. In the same folder, open the command prompt.
4. Connect the WisBlock GNSS Tracker to the computer using USB.
5. Get the COM port the GNSS Tracker is using, for example, COM19.
6. Flash the new firmware with the command **`adafruit-nrfutil dfu serial --package LPWAN-Tracker-Latest.zip -p COM19 -b 115200`**.

#### Flashing the Updated Firmware over USB using UF2 file

1. Download the [latest UF2 firmware file](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/LPWAN-Tracker-Latest-UF2.zip) to your computer. You must extract `LPWAN-Tracker-Latest.uf2` from this zip file.
2. Connect the WisBlock GNSS Tracker to the computer using USB.
3. Press the reset button twice.
4. There should be a new USB drive named `RAK4631` on your computer after double-clicking on reset.
5. Open this drive and drag the extracted UF2 file `LPWAN-Tracker-Latest.uf2` to that USB drive. It will overwrite the `CURRENT.UF2` file and automatically reset the RAK4631 module in the tracker.
6. After reset, the tracker has the updated firmware uploaded.

#### Flashing the Updated Firmware over BLE

##### Using WisBlock Toolbox (Android Only)

1. Download the latest firmware into a folder on your computer.
2. Copy the firmware into a folder of your Android phone.
3. Install [WisBlock Toolbox](https://play.google.com/store/apps/details?id=tk.giesecke.wisblock_toolbox) on your Android phone.
4. In the WisBlock Toolbox, open the DFU application.
5. Connect over BLE to the GNSS Tracker.
6. Select the firmware file on the Android device.
7. Push **UPLOAD** to start flashing the new firmware.

##### Using nRF Connect (Available for Android and iOS)

1. Download the latest firmware into a folder on your computer.
2. Copy the firmware into a folder of your Android phone.
3. Install the nRF Connect on your phone.
   - Android [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
   - iOS [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)
4. In the nRF Connect, connect to the GNSS Tracker.
5. Click the **DFU** button in the top right of the screen.
6. Select the firmware file on the Android device.
7. The upload will start automatically.

##### Creating Your Own GNSS Tracker Firmware

Build your own GNSS Tracker firmware with our open-source code available on the [Github Repo](https://github.com/RAKWireless/LPWAN-Tracker-Solution). You can find their projects for both Arduino IDE and PlatformIO. The sources in the two projects are identical.

You can extend the functionality of the GNSS Tracker by using these sources. You can write, as well, your own GNSS Tracker application based on these sources.
