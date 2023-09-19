---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7391. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7391/RAK7391.png
prev: ../datasheet/
next: false
tags:
  - RAK7391
  - Datasheet
  - WisGate
certifications:
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK7391/Certification/RAK7391_FCC_Certification.pdf]
  - [ISED, https://downloads.rakwireless.com/LoRa/RAK7391/Certification/RAK7391_ISED_Certification.pdf]
---

# RAK7391 WisGate Connect Datasheet

## Overview

### Description

RAK7391 WisGate Connect is a Raspberry Pi CM4-based gateway product meant to support different radio and WisBlock modules. It has several interfaces to meet the needs of different developers, which include HDMI, Ethernet, USB, mPCIe, CSI, DSI, M.2, WisBlock, PoE, and Raspberry Pi HAT. Of course, it can also be used as a basic LoRaWAN gateway product supporting up to four (4) separate modules. You can have a 16-channel sub-GHz LoRaWAN gateway plus a 2.4&nbsp;GHz LoRaWAN gateway on the same device.

The RAK7391 has flexible power supply modes such as the DC terminal, Phoenix terminal, and POE (optional). It provides a fan interface to dissipate heat for the CPU that you can control based on the CPU temperature. It can also monitor the power supply. In the event of a power failure, the ultracapacitors can provide power to the system so that the system can send a notification or easily survive micro-cuts in the power supply.


### Features

#### Hardware

- Accepts the complete range of CM4 modules
- Flexible power supply modes such as DC terminal, Phoenix terminal, and POE (optional)
- HDMI 2.0 connector
- 1&nbsp;GB Ethernet with PoE support (optional)
- 2.5&nbsp;GB Ethernet without PoE support (optional)
- USB2.0 + 2x USB3.0
- Type-C USB socket for updating the CM4
- Micro SD card socket for CM4 Lite modules
- Standard fan connector, compatible with 5&nbsp;V and 12&nbsp;V fans (jumper cap configuration)
- External power connector (+5&nbsp;V, +12&nbsp;V with PoE)
- MIPI DSI display FPC connectors (22 pins 0.5&nbsp;mm pitch cable)
- 2x MIPI CSI-2 camera FPC connectors (22 pins 0.5&nbsp;mm pitch cable)
- Raspberry Pi HAT connector
- PoE support via an optional module
- Debug UART port
- 2x WisBlock IO connectors
- 3x mPCIe slots
- 1x M.2 B-Key interface
- RTC with battery socket and ability to wake up CM4
- Configuration jumpers (WiFi and BLE enabling/disabling, EEPROM write enable, buzzer enabling)

#### Software

A custom «distro» for the WisGate Connect called RAKPiOS has been prepared. The RAKPiOS is a fork of the Raspberry Pi OS with all the required drivers to use the device, some security changes, helper scripts, and Docker included by default.

You can easily deploy several IoT services from a curated list of docker containers available from the device.

<rk-img
  src="/assets/images/wisgate/rak7391/datasheet/1.software-structure.png"
  width="70%"
  caption="Software structure"
/>


### Typical Application

- LoRaWAN gateway (multichannel and multiband)
- Industrial gateway leveraging existing WisBlock modules (ModBUS, 4-20&nbsp;mA, 0-5&nbsp;V, and general IO)
- Edge gateway or standalone gateway
- Development platform for new products

## Specifications

### Overview


<rk-img
  src="/assets/images/wisgate/rak7391/datasheet/2.block-diagram.png"
  width="70%"
  caption="RAK7391 block diagram"
/>


### Hardware

The hardware specification is categorized into three (3) parts. It covers the main specifications of the power source and backhaul connectivity options. It also discusses the multiple interfacing options and also the pinouts of RAK7391 WisGate Connect.

#### Main Specifications



##### Power

| Feature    | Value                               |
| ---------- | ----------------------------------- |
| DC inputs  | 3 (DC jack, Phoenix connector, PoE) |
| DC voltage | 10-28&nbsp;V                        |
| PoE        | Active IEEE 802.3at or IEEE 802.3bt |

#####  Wireless (optional)

| Feature                          | Value                |
| -------------------------------- | -------------------- |
| Wireless 2.4&nbsp;GHz generation | WiFi 5               |
| Wireless 2.4&nbsp;GHz standards  | IEEE 802.11 b/g/n/ac |
| Wireless 5.0&nbsp;GHz generation | WiFi 5               |
| Wireless 5.0&nbsp;GHz standards  | IEEE 802.11 b/g/n/ac |
| Bluetooth Low Energy             | 5.0                  |

##### Ethernet

| Feature                   | Value           |
| ------------------------- | --------------- |
| 1&nbsp;GB Ethernet Port   | 1 (PoE enabled) |
| 2.5&nbsp;GB Ethernet Port | 1               |

#####  Peripherals

| Feature                    | Value                                                                              |
| -------------------------- | ---------------------------------------------------------------------------------- |
| mPCIe slots                | 3 (USB, SPI, I2C, UART, and PCIe interfaces)                                       |
| M.2 slots                  | 1 (B-key, USB, and PCIe interfaces)                                                |
| WisBlock IO slots          | 2, more than 20 compatible modules (0-5&nbsp;V, 4-20&nbsp;mA, ModBUS, LinBUS, I/O) |
| USB3 ports                 | 2                                                                                  |
| USB2 ports                 | 1                                                                                  |
| HDMI ports                 | 1                                                                                  |
| DSI connectors             | 1                                                                                  |
| CSI connectors             | 2                                                                                  |
| Standard 40-pin RPi header | 1                                                                                  |

##### Other

| Feature                 | Value                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------- |
| Voltage monitor         | Yes                                                                                 |
| PCB temperature monitor | Yes                                                                                 |
| Real-time clock         | Yes                                                                                 |
| Onboard buzzer          | Yes                                                                                 |
| Operating temperature   | -20º&nbsp;C to 85º&nbsp;C (except for USB3 and Buzzer which are rated 0-70º&nbsp;C) |

#### Interfaces

This section discusses the different interaces of RAK7391 WisGate Connect.

- [RAK7391 WisGate Connect Datasheet](#rak7391-wisgate-connect-datasheet)
  - [Overview](#overview)
    - [Description](#description)
    - [Features](#features)
      - [Hardware](#hardware)
      - [Software](#software)
    - [Typical Application](#typical-application)
  - [Specifications](#specifications)
    - [Overview](#overview-1)
    - [Hardware](#hardware-1)
      - [Main Specifications](#main-specifications)
        - [Power](#power)
        - [Wireless (optional)](#wireless-optional)
        - [Ethernet](#ethernet)
        - [Peripherals](#peripherals)
        - [Other](#other)
      - [Interfaces](#interfaces)
        - [CM4 Module Connectors](#cm4-module-connectors)
        - [PSU Input](#psu-input)
        - [Full-Sized HDMI 2.0 Connector](#full-sized-hdmi-20-connector)
        - [Ethernet](#ethernet-1)
        - [PoE HAT](#poe-hat)
        - [USB 2.0 Hub](#usb-20-hub)
        - [USB 3.0 Hub](#usb-30-hub)
        - [USB Type-C Connector](#usb-type-c-connector)
        - [Micro SD Card Socket](#micro-sd-card-socket)
        - [Fan Connector](#fan-connector)
        - [DSI Display Connectors (22 Pin 0.5 mm Pitch Cable)](#dsi-display-connectors-22-pin-05-mm-pitch-cable)
        - [Dual CSI-2 Display Connectors (22 Pin 0.5 mm Pitch Cable)](#dual-csi-2-display-connectors-22-pin-05-mm-pitch-cable)
        - [Raspberry Pi HAT Connector](#raspberry-pi-hat-connector)
        - [Real-Time Clock](#real-time-clock)
      - [Pin Definitions](#pin-definitions)
        - [Jumpers](#jumpers)
        - [CM4 IO Voltage Selection](#cm4-io-voltage-selection)
        - [I2C](#i2c)
        - [ADC](#adc)
        - [GPIO Expander](#gpio-expander)
        - [mPCIe Interfaces](#mpcie-interfaces)
        - [M.2 Interface](#m2-interface)
        - [WisBlock IO Slots](#wisblock-io-slots)
  - [Certification](#certification)


##### CM4 Module Connectors

The RAK7391 is based on Raspberry Pi CM4. The following table shows the CPU features:

| Feature               | Description                   |
| --------------------- | ----------------------------- |
| CPU                   | Broadcom BCM2711              |
| Architecture          | ARMv8 Cortex-A72 64&nbsp;bits |
| CPU core count        | 4                             |
| CPU nominal frequency | 1.5&nbsp;GHz                  |
| Operating system      | RAK Pi OS                     |
| RAM                   | 1, 2, 4, or 8&nbsp;GB DDR4    |
| Storage               | 8, 16, or 32&nbsp;eMMC (optional)  |

##### PSU Input

You can choose between three main power supply solutions:

- 2.1 x 5.5&nbsp;mm DC input, center positive, 10-28&nbsp;V<sub>DC</sub>
- Phoenix terminal input, 10-28&nbsp;V<sub>DC</sub>
- Active IEEE 802.3at or IEEE 802.3bt on 1&nbsp;GbE connector

:::tip 📝 NOTE
You can only use one of the previous power supply ways at the same time.
:::


The exact current required from the +12&nbsp;V PSU is dependent on the application and what is connected to the RAK7391. It is recommended to budget 25&nbsp;W for the CM4.

Under normal circumstances, it can provide 5&nbsp;V<sub>out</sub>. If you want to supply 12&nbsp;V<sub>out</sub> from the different PSU connectors on the board, you have to use PoE to feed the board with 12&nbsp;V<sub>DCin</sub>.

:::tip 📝 NOTE
The 12&nbsp;V<sub>DCout</sub> connectors in the board are directly connected to the power supply. Use only 12&nbsp;V<sub>DC</sub> adapters when powering 12&nbsp;V devices from the board.
:::

##### Full-Sized HDMI 2.0 Connector

The CM4 does most of the interfacing required for the HDMI interface so that most signals are directly connected to the CM4. The current for the HDMI interface is limited to 500&nbsp;mA.

##### Ethernet

RAK7391 has two Ethernet ports, one with 1&nbsp;GB supporting PoE and the other with 2.5&nbsp;GB not supporting PoE. To support the PoE function, you need to install the RAK PoE module.

1&nbsp;GB Ethernet is an inherent interface to the CM4 module. With high-speed network requirements, it can use the 2.5&nbsp;GB Ethernet port. The 2.5&nbsp;GB Ethernet is connected to the PCI bus which is shared with other components (USB3, MiniPCIe slot#3, M.2 slot). Actual max speed will depend on CPU use and other peripherals connected to the board. Under normal use and without tweaking the CM4 configuration it should reach 1.8-2.0&nbsp;Gbps.

##### PoE HAT

If you want to use the PoE function of RAK7391, you need to have the RAK PoE module. The RAK7391 has an onboard PoE Hat interface. The PoE module supports both 802.3AT and 802.3BT standards to meet the different needs. The PoE input voltage ranges from 42&nbsp;V to 57&nbsp;V. AT module max output is 12&nbsp;V 2.5&nbsp;A (30&nbsp;W), and BT max output is 12&nbsp;V 6&nbsp;A (72&nbsp;W).

##### USB 2.0 Hub

The RAK7391 board has two (2) onboard USB2.0 hubs that expand one USB2.0 port in the CM4 to seven (7) ports: one is available on the USB2 connector on the board, two are connected to mPCIe slots #1 and #2, and two more are connected to WisBlock slots and the other two are converted to UART and connected to the WisBlock interfaces as well.

There is an internal current limit switch to provide VBUS to the USB connectors. The current limit is set to approximately 500&nbsp;mA.

##### USB 3.0 Hub

The RAK7391 board has an onboard PCIe to USB 3.0 hub that provides four (4) USB3 interfaces. Two are connected to the USB3 connectors on the board, another one is connected to mPCIe slot #3, and the last one is connected to the M.2 interface. Mind that the PCIe line is shared with the 2.5&nbsp;GB Ethernet connector and, possibly, with modules connected to mPCIe #3 and M.2 slots.

There is an internal current limit switch to provide VBUS to the USB connectors. The current limit is set to approximately 1&nbsp;A.

##### USB Type-C Connector

The Type-C connector is used to flash the eMMC on the CM4 non-lite versions via `rpiboot`. When a Type-C cable is plugged in, the USB2 hub is automatically disabled and the CM4 becomes a USB device.

You have two options to upload an image to the CM4 module. One way is to add a jumper to the eMMC Flash pair in the configuration header and power the board. The other way is to press the Flash Mode button while powering on the board, after powering on, you can release the button.

##### Micro SD Card Socket

The micro SD Card socket is a **PUSH-PUSH** socket. To release the micro SD Card a gentle push on the micro SD card will enable it to be removed. This socket is only used with CM4 Lite modules that do not have an onboard eMMC.

##### Fan Connector

This connector supports standard fans with a PWM drive and tacho output. An EMC2301 driver controls the fan via I2C. It is compatible with 5&nbsp;V and 12&nbsp;V fans, using an optional jumper cap.

If you only have a 2-wire fan, you can also use it by connecting it to the 5&nbsp;V-GND connectors.

##### DSI Display Connectors (22 Pin 0.5 mm Pitch Cable)

DSI 4 channel interface is brought out to separate 22-way 0.5&nbsp;mm pitch connectors. This connector is the same as on the existing CMIO board, but it is different from the Raspberry Pi 4, Model B. If you want to use a Raspberry Pi 4, Model B display, you will need to purchase an adapter board.

##### Dual CSI-2 Display Connectors (22 Pin 0.5 mm Pitch Cable)

Both CSI-2 interfaces (2-channel and 4-channel) are brought out to separate 22-way 0.5&nbsp;mm pitch connectors. These connectors are the same as on the existing CMIO board, but they are different from the Raspberry Pi 4, Model B. If you want to use a Raspberry Pi 4, Model B camera, you will need to purchase an adapter board.

##### Raspberry Pi HAT Connector

The RAK7391 has a standard Raspberry Pi 40-way HAT connector. Mounting holes are also provided so that a standard HAT can be secured in place.

##### Real-Time Clock

The RAK7391 has a PCF85063AT RTC onboard. A battery socket is provided for a CR2032 battery. On initial setup, the **CLKOUT** of the RTC should be disabled to save power. The alarm output of the RTC is used to wake up the CM4 from a previous halt mode. If an alarm goes off during normal operation the CM4 will be reset, this can be used as a watchdog timer if required.

#### Pin Definitions

##### Jumpers

The J39 header can be optionally used to set some specific configurations:

| Pin   | Name       | Function                                                                       |
| ----- | ---------- | ------------------------------------------------------------------------------ |
| 1-2   | eMMC Flash | If fitted, forces USB booting. Use it to flash a new image to the eMMC memory. |
| 3-4   | EEPROM_nWP | If fitted, write protects the EEPROM on the CM4.                               |
| 5-6   | WiFi OFF   | If fitted, disables Wi-Fi.                                                     |
| 7-8   | BT OFF     | If fitted, disables Bluetooth.                                                 |
| 9-10  | Wake up    | Enables wakeup/reset using the onboard RTC.                                    |
| 11-12 | Buzzer ON  | If fitted, the buzzer is enabled.                                              |

##### CM4 IO Voltage Selection

By default, the RAK7391 Board sets the CM4 IO voltage to +3.3&nbsp;V via R11. Moving R11 to R12 sets the IO voltage on the CM4 to +1.8&nbsp;V.

##### I2C

GPIO2 and GPIO3 are used for the I2C interface (i2c1) and connected to the onboard I2C devices as well as to the external I2C interfaces (WisBlock, Raspberry Pi HAT, mPCIe slots). If an external device using the I2C interface conflicts with the address of an I2C device in the RAK7391, the external I2C bus can be changed by moving the 0&nbsp;Ohm resistors from R718 and R719 to R716 and R717. In addition, R720 and R721 need to be increased to 4.7K and R722 and R723 must be removed. After these modifications, the bus controlling the external I2C devices will be i2c3 (GPIO4 and GPIO5), and internal devices (RTC, ADC, GPIO Expanders) will still be on i2c1.

If you want to use ID_SC and ID_SD signals on the Raspberry PI Hat, you can remove R711 and R712.

**I2C default addresses**

| Device             |	Part	    | Default Address |
| ------------------ | ---------  | --------------- |
| OLED Screen	       | SSD1306	  | 0x3C            |
| GPIO Expander #1	 | TPT29555	  | 0x27            |
| GPIO Expander #2	 | TPT29555	  | 0x26            |
| ADC	               | SGM58031	  | 0x4B            |
| FAN Controller	   | EMC2301	  | 0x2F            |
| Temperature Sensor | SHTC3	    | 0x70            |
| Real-Time Clock	   | PCF85063A	| 0x51            |
| Secure IC	         | ATECC608A	| 0x60            |

Note you can change the address of some of these devices by modifying the resistor configuration.

##### ADC

If the I2C address of the ADC chip on the board conflicts with any other I2C device, you can remove R648 and connect it to one of R647, R649, or R650 to change its address and prevent the conflict. The available addresses are as follows (default one in bold):

| Resistor | ADC Address        |
| -------- | ------------------ |
| R650     | 1001000 (0x48)     |
| R647     | 1001001 (0x49)     |
| R649     | 1001010 (0x4A)     |
| **R648** | **1001011 (0x4B)** |

##### GPIO Expander

You can change the GPIO expander address by modifying the resistor if there is an address conflict. The available addresses are as follows (default one in bold):

| First GPIO Expander (U134)                                     | Address            |
| -------------------------------------------------------------- | ------------------ |
| R701=NC, R704=4.7K, R702=NC, R705=4.7K, R703=NC, R706=4.7K     | 0100000 (0x20)     |
| R701=4.7, R704=NC, R702=NC, R705=4.7K, R703=NC, R706=4.7K      | 0100001 (0x21)     |
| R701=NC, R704=4.7K, R702=4.7K, R705=NC, R703=NC, R706=4.7K     | 0100010 (0x22)     |
| R701=4.7K, R704=NC, R702=4.7K, R705=NC, R703=NC, R706=4.7K     | 0100011 (0x23)     |
| R701=NC, R704=4.7K, R702=NC, R705=4.7K, R703=4.7K, R706=NC     | 0100100 (0x24)     |
| R701=4.7, R704=NC, R702=NC, R705=4.7K, R703=4.7K, R706=NC      | 0100101 (0x25)     |
| R701=NC, R704=4.7K, R702=4.7K, R705=NC, R703=4.7K, R706=NC     | 0100110 (0x26)     |
| **R701=4.7K, R704=NC, R702=4.7K, R705=NC, R703=4.7K, R706=NC** | **0100111 (0x27)** |
| **Second GPIO expander (U133)**                                | **Address**        |
| R633=NC, R634=4.7K, R635=NC, R636=4.7K, R637=NC, R638=4.7K     | 0100000 (0x20)     |
| R633=4.7, R634=NC, R635=NC, R636=4.7K, R637=NC, R638=4.7K      | 0100001 (0x21)     |
| R633=NC, R634=4.7K, R635=4.7K, R636=NC, R637=NC, R638=4.7K     | 0100010 (0x22)     |
| R633=4.7K, R634=NC, R635=4.7K, R636=NC, R637=NC, R638=4.7K     | 0100011 (0x23)     |
| R633=NC, R634=4.7K, R635=NC, R636=4.7K, R637=4.7K, R638=NC     | 0100100 (0x24)     |
| R633=4.7, R634=NC, R635=NC, R636=4.7K, R637=4.7K, R638=NC      | 0100101 (0x25)     |
| **R633=NC, R634=4.7K, R635=4.7K, R636=NC, R637=4.7K, R638=NC** | **0100110 (0x26)** |
| R701=4.7K, R704=NC, R702=4.7K, R705=NC, R703=4.7K, R706=NC     | 0100111 (0x27)     |

##### mPCIe Interfaces

The RAK7391 has three (3) mPCIe interfaces, which can connect different products, making the product very flexible. It greatly facilitates the creation of multi-radio access networks or the development of user-defined products. The following products support the three mPCIe interfaces:

| Socket   | Primary Use | Secondary Use                                                   | Compatible Modules                                                                                                                                          |
| -------- | ----------- | --------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| mPCIe #1 | LoRaWAN     | Zigbee                                                          | RAK2247-USB/SPI, RAK2287-USB/SPI, RAK5146-USB/SPI<br />USB-based  Zigbee module (TBD)                                                                       |
| mPCIe #2 | LoRaWAN     | Zigbee, 4G                                                      | RAK2247-USB/SPI, RAK2287-USB/SPI, RAK5146-USB/SPI, RAK8213-USB<br  />Quectel LTE EC25<br />USB-based Zigbee module (TBD)                                    |
| mPCIe #3 | 4G          | WiFi6, GbE, IA, SATA (via PCIe)<br />Adapters to M.2 A+E boards | RAK8213-USB<br />Hailo-8, Google Coral TPU<br />IO Crest 4  SATA<br />I210AT GbE<br />MiniPCIe to M.2 Key-E adapters<br  />AX210 and AX211 (via an adapter) |

##### M.2 Interface

RAK7391 has an M.2 B-key interface, which provides PCIe and USB3.0 signals. Currently, it supports the following products for the M.2 interface:

| Socket | Primary Use | Secondary Use | Compatible Modules                                                   |
| ------ | ----------- | ------------- | -------------------------------------------------------------------- |
| M.2    | NVMe Drive  | SATA 5G       | Any M.2 B-Key NVMe drive<br />Quectel RM510Q<br />JMB585-based  SATA |

##### WisBlock IO Slots

The WisBlock IO interface is a standard, open interface defined by RAK. It is compatible with many sensors and other modules, providing users with many different choices. The RAK7391 is compatible with the majority of WisBlock IO modules, allowing the user to use industrial protocols from the RAK7391 or connect sensors and actuators to it.

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
