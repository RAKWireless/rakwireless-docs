---
rak_desc: Provides comprehensive information of your RAK10702 Indoor Comfort Node to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak10702/rak10702.png
prev: ../Assembly/
next: false
tags:
  - datasheet
  - wisblock
  - solutions
  - Indoor Comfort Node
---

# RAK10702 Indoor Comfort Node Datasheet

## Overview

### Description

The **RAK10702 WisBlock Indoor Comfort Node** is an indoor air quality sensor kit. It features measurement of CO2, particulate matter, VOC (volatile organic components), temperature, humidity, and light and has in addition a PIR sensor to detect room occupancy.

It is a feature-packed air quality sensing device for application development. This device can be used as a quick prototyping tool for Internet-of-Things (IoT) and LoRaWAN Integration. The Indoor Comfort Node comes with an open-source firmware that covers all sensors and functionality. If this firmware doesn't cover your needs, you can use it as a base to develop your firmware.

### Features

- Supports sleep mode, low power consumption
- **Nordic nRF52840 MCU** combined with the **Semtech SX1262** LoRa transceiver for powerful, yet low-power applications and additional BLE functionality.
- **Sensirion SCD30 CO2 Sensor**: CO2 sensor with a measurement range from 400&nbsp;ppm to 10,000&nbsp;ppm and an accuracy of ±(30&nbsp;ppm + 3%)
- **Plantower PM sensor**: Particle Matter Sensor module allows to capture standard PM1.0, PM2.5, and PM10 values.
- **Sensirion SGP40 VOC Sensor**: Detects a wide range of Volatile Organic Compounds (VOCs) with a measurement range of 0 to 1000&nbsp;ppm (Ethanol in clean air), combined with the Sensorion VOC algorithms it delivers a VOC index from 0 to 500.
- **Vishay Semiconductor VEML7700 Light Sensor**: Can measure light exposure with an ambient light range from 0 lx to about 120,000&nbsp;lx with a resolution of 0.0036 lx.
- **Sensirion SHTC3 Temperature and Humidity Sensor**: Low power T&H sensor with a temperature sensor accuracy of ±0.2°&nbsp;C, a temperature range from -40°&nbsp;C to +125°&nbsp;C, a humidity sensor accuracy of ±2.0% RH and a humidity range from 0 to 100%
- **Senba Technology AM312 PIR Sensor**: Detects occupancy and motion from infrared radiated objects.
- **RGB LED**: Shows the air quality status in 3 levels.
- **Micro Crystal RV-3028-C7 RTC Module**: Keeps the real-time accurate on the device.
- **Button**: To switch between display variants, enable BLE for debug or firmware updates and show hardware device information
- LoRaWAN 1.0.2 Standard support - ABP or OTAA mode
- LoRa P2P support
- LoRa and BLE antenna are integrated inside the casing
- Micro USB for configuration
- Supports global license-free frequency band: RU864, IN865, EU868, RU864, US915, AU915, KR920, and AS923
- (_**Optional**_) **E-Ink Display**: Shows the current values of all integrated sensors, with a resolution of 400x300&nbsp;pixel
- (_**Optional**_) **3D printed enclosure in SLS quality**: Perfect protection for the Indoor Comfort Node with a flexible mounting option
- (_**Optional**_) **Open-sourced enclosure design for 3D printed enclosures**: Enclosure design available in different 3D formats to either print your enclosure or use it as a base for your enclosure design

## Specifications

### Overview

The overview shows the RAK10702 WisBlock Indoor Comfort Node with the optional E-Ink display and the optional enclosure.

<rk-img
    src="/assets/images/wisblock/rak10702/rak10702.png"
    width="60%"
    caption="RAK10702 WisBlock Indoor Comfort Node"
/>


#### Block Diagram

The block diagram in **Figure 2** shows the different WisBlock modules used in the RAK10702 WisBlock Indoor Comfort Node and their position.

Modules on the RAK13013 sensor carrier

<rk-img
    src="/assets/images/wisblock/rak10702/assembly/1-rak13013-1.svg"
    width="60%"
    caption="RAK10702 WisBlock Indoor Comfort Node Block Diagram"
/>

Modules on the top side of the RAK19024 Base Board

<rk-img
    src="/assets/images/wisblock/rak10702/assembly/9-rak19024-2.svg"
    width="60%"
    caption="RAK10702 WisBlock Indoor Comfort Node Block Diagram"
/>

Modules on the bottom side of the RAK19024 Base Board

<rk-img
    src="/assets/images/wisblock/rak10702/assembly/8-rak19024-1.svg"
    width="60%"
    caption="RAK10702 WisBlock Indoor Comfort Node Block Diagram"
/>

### Hardware

The hardware of the RAK10702 WisBlock Indoor Comfort Node is built with a custom Base Board (RAK19024) with integrated RAK4630, a custom WisBlock Module carrier (RAK13013) and several WisBlock Sensor and IO modules.

#### Interfaces

The RAK10702 WisBlock Indoor Comfort Node has multiple interface options:

- USB interface
- UART pin header
- I2C pin header
- SWD/JLink header
- 5-24&nbsp;V supply connector
- Reset button

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-interfaces.png"
    width="100%"
    caption="RAK10702 WisBlock Indoor Comfort Node Interfaces"
/>

#### Pin Definition

##### USB Interface

Standard USB Type C connector, only USB serial and power supply supported.

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-usb-2.png"
    width="50%"
    caption="RAK10702 WisBlock Indoor Comfort Node UART"
/>

##### UART Pin Header

The UART pin header allows to connect to the RAK4630 module for debugging purposes or to connect additional modules with a 3.3&nbsp;V UART interface:

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-uart.png"
    width="40%"
    caption="RAK10702 WisBlock Indoor Comfort Node UART"
/>

| Pin | Pin Name | Description                                                           |
| --- | -------- | --------------------------------------------------------------------- |
| 1   | Unused   | -                                                                     |
| 2   | GND      | Ground connection                                                     |
| 3   | TX       | data transmit, max 3.3&nbsp;V, connected to P0.16/UART2_TX of RAK4630 |
| 4   | RX       | data receive, max 3.3&nbsp;V, connected to P0.15/UART2_RX of RAK4630  |

##### I2C Pin Header

The I2C pin header allows to connection of external I2C devices to the RAK10702. The pinout is compatible with the WisBlock Base Boards:

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-i2c.png"
    width="40%"
    caption="RAK10702 WisBlock Indoor Comfort Node I2C"
/>

| Pin | Pin Name | Description                                                  |
| --- | -------- | ------------------------------------------------------------ |
| 1   | VCC      | 3.3&nbsp;V output                                            |
| 2   | GND      | Ground connection                                            |
| 3   | SCL      | clock, max 3.3&nbsp;V, connected to P0.14/I2C_SCL of RAK4630 |
| 4   | SDA      | data, max 3.3&nbsp;V, connected to P0.13/I2C_SCL of RAK4630  |

##### SWD/Jlink Pin Header

The SWD/JLink pin header allows to flash firmware and debug firmware using a JLink adapter or a DAPLink adapter:

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-swd.png"
    width="50%"
    caption="RAK10702 WisBlock Indoor Comfort Node SWD"
/>

| Pin | Pin Name | Description                                    |
| --- | -------- | ---------------------------------------------- |
| 1   | VCC      | 3.3&nbsp;V output, voltage reference for JLink |
| 2   | IO       | SWDIO data transmission                        |
| 3   | CLK      | SWCLK clock                                    |
| 4   | GND      | Ground connection                              |
| 5   | RESET    | MCU reset connection                           |

##### 5-24V Supply Connector

The 5-24&nbsp; V supply connector is for the power supply of the RAK10702 WisBlock Indoor Comfort Node:

<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-supply.png"
    width="50%"
    caption="RAK10702 WisBlock Indoor Comfort Node Supply"
/>

| Pin | Pin Name | Description       |
| --- | -------- | ----------------- |
| 1   | VCC      | 5-24&nbsp;V input       |
| 2   | GND      | Ground connection |

:::warning ⚠️ WARNING

When connecting an external supply, make sure

- The voltage is not below 5&nbsp;V or exceeds 24&nbsp;V in any case (including voltage spikes)
- The polarity of the connection is correct

:::


#### RF Characteristics

##### Operating Frequencies

The RAK4630 module used in the RAK10702 WisBlock Indoor Comfort Node supports the LoRaWAN bands shown in the table below.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Russia        | RU864           |
| India         | IN865           |
| Europe        | EU868           |
| North America | US915           |
| Canada        | US915           |
| Australia     | AU915           |
| Korea         | KR920           |
| Asia          | AS923-1/2/3     |

#### Antennas

The RAK10702 WisBlock Indoor Comfort Node has a built-in LoRa and BLE Antenna.

<!--- To be added later
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

--->

##### Power Supply

The RAK10702 WisBlock Indoor Comfort Node can be supplied with a DC voltage from 5 to 24&nbsp; V through the screw terminal. Alternatively, the device can be supplied through the USB connector.
<rk-img
    src="/assets/images/wisblock/rak10702/datasheet/rak10702-supply.png"
    width="40%"
    caption="Power supply connector"
/>

:::warning ⚠️ WARNING

When connecting an external supply, make sure

- the voltage is not below 5V or exceeds 24V in any case (including voltage spikes)
- the polarity of the connection is correct

:::

#### Environmental Characteristics

The table below lists the operation and storage temperature requirements.

| Parameter             | Min.       | Typical     | Max.        |
| --------------------- | ---------- | ----------- | ----------- |
| Operation Temp. Range | -40&nbsp;C | +25&nbsp;°C | +60&nbsp;°C |

<!--- to be added later

#### Mechanical Characteristics

- Dimensions: 95&nbsp;mm (W) x 65&nbsp;mm (L) x 58&nbsp;mm (H)
- Weight: approximately 7.45&nbsp;oz (211.2&nbsp;g) without battery
- Material thickness: 3&nbsp;mm
- Pole and wall-mounting: 60~75&nbsp;mm pole diameter
- Logo customization possibility
- Optional openings for N-type antenna and external components with a gland

--->

### Firmware

Download the latest firmware version of RAK10702 WisBlock Indoor Comfort Node in the table provided below.

| Model                                 | Version | Source                                                                                        |
| ------------------------------------- | ------- | --------------------------------------------------------------------------------------------- |
| RAK10702 firmware for USB or BLE DFU  | V1.0.0  | [Download](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/RAK10702-Latest.zip)     |
| RAK10702 firmware for UF2 file update | V1.0.0  | [Download](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/RAK10702-Latest-UF2.zip) |

#### Flashing the Updated Firmware over USB

1. Download the latest firmware to a folder on your computer.
2. Download the firmware update in the same folder.
3. In the same folder, open the command prompt.
4. Connect the WisBlock GNSS Tracker to the computer using USB.
5. Get the COM port the GNSS Tracker is using, for example, COM19.
6. Flash the new firmware with the command **`adafruit-nrfutil dfu serial --package RAK10702-Latest.zip -p COM19 -b 115200`**.

#### Flashing the Updated Firmware Over USB Using the UF2 File

1. Download the [latest UF2 firmware file](https://downloads.rakwireless.com/LoRa/WisBlock/Solutions/RAK10702-Latest-UF2.zip) to your computer. You must extract `RAK10702-Latest-UF2.uf2` from this zip file.
2. Connect the RAK10702 to the computer using USB.
3. Press the reset button twice.
4. There should be a new USB drive named `RAK4631` on your computer after double-clicking on reset.
5. Open this drive and drag the extracted UF2 file `RAK10702-Latest.uf2` to that USB drive. It will overwrite the `CURRENT.UF2` file and automatically reset the RAK4631 module in the RAK10702.
6. After reset, the tracker has the updated firmware uploaded.

#### Flashing the Updated Firmware Over BLE

##### Using WisBlock Toolbox (Android Only)

1. Download the latest firmware into a folder on your computer.
2. Copy the firmware into a folder on your Android phone.
3. Install [WisBlock Toolbox](https://play.google.com/store/apps/details?id=tk.giesecke.wisblock_toolbox) on your Android phone.
4. In the WisBlock Toolbox, open the DFU application.
5. Connect over BLE to the GNSS Tracker.
6. Select the firmware file on the Android device.
7. Push **UPLOAD** to start flashing the new firmware.

##### Using nRF Connect (Available for Android and iOS)

1. Download the latest firmware into a folder on your computer.
2. Copy the firmware into a folder on your Android phone.
3. Install the nRF Connect on your phone.
   - Android [nRF Connect](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp)
   - iOS [nRF Connect](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)
4. In the nRF Connect, connect to the GNSS Tracker.
5. Click the **DFU** button in the top right of the screen.
6. Select the firmware file on the Android device.
7. The upload will start automatically.

##### Creating Your Own RAK10702 WisBlock Indoor Comfort Node Firmware

Build your own RAK10702 WisBlock Indoor Comfort Node firmware with our open-source code available on the [Github Repo](https://github.com/RAKWireless/RAK10702-Indoor-Comfort). The project structure is for PlatformIO. If you need to use ArduinoIDE, you must rename the file app.cpp to an .INO file to be able to load the file in ArduinoIDE.

You can extend the functionality of the RAK10702 WisBlock Indoor Comfort Node by using these sources. You can write, as well, your own RAK10702 WisBlock Indoor Comfort Node application based on these sources.
