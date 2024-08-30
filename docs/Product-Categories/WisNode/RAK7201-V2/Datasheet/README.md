---
rak_desc: Provides comprehensive information about your RAK7201V2 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: https://images.docs.rakwireless.com/wisnode/rak7201v2/datasheet/rak7201v2.png
prev: ../AT-Command-Manual/
next: ../Firmware-Upgrade-Guide/
tags:
  - datasheet
  - wisnode
  - RAK7201V2
---

# RAK7201V2 WisNode Button 4K Datasheet

## Overview

### Description

The **RAK7201V2 WisNode Button 4K** is a remote wireless trigger device. It supports a user-defined payload for each key and is based on the LoRaWAN 1.0.3 protocol. LoRaWAN bands supported include IN865, EU868, AU915, US915, KR920, and AS923.

With its long-range wireless connectivity, impressive battery life, and four programmable buttons, this device is suitable for a wide range of applications. The Button is suitable for a variety of Smart Home applications, including entertainment system control, light control, an alarm snooze button, and a remote trigger.

<rk-img
    src="https://images.docs.rakwireless.com/wisnode/rak7201v2/datasheet/rak7201v2.png"
    width="40%"
    caption="RAK7201V2 WisNode Button 4k"
/>


### Features

- Four (4) Buttons with LED indicator
- Based on the **RAK3172** module
- **Product Size:** 43x57x15&nbsp;mm
- **LoRaWAN** 1.0.3 specification-compliant
- **Battery:** 400&nbsp;mAh
- Battery **Over Current Protection** and **Over-Temperature Protection**
- **Power Consumption:** Sleep mode is 6.25&nbsp;uA @ 4.2&nbsp;V
- **Operating Temperature:** -10º&nbsp;C to 60º&nbsp;C
- **Working Environment:** Indoor

## Specifications

### Overview

| Parameter             | Value                                                                          |
| --------------------- | ------------------------------------------------------------------------------ |
| LoRa protocol         | LoRaWAN 1.0.3, Class A                                                         |
| LoRa TX power (max.)  | 19.2&nbsp;dBm @ 868&nbsp;MHz, 18.6&nbsp;dBm @ 915&nbsp;MHz                     |
| LoRa RX sensitivity   | -136&nbsp;dBm                                                                  |
| LoRa antenna          | FPC Antenna                                                                    |
| Battery capacity      | 400&nbsp;mAh                                                                   |
| Charge current        | 320&nbsp;mA / 5&nbsp;V                                                         |
| Battery lifetime      | 1 year                                                                         |
| Sleep current         | 6.25&nbsp;uA @ 4.2&nbsp;V                                                      |
| Operating temperature | Charging: 10º&nbsp;C to 45º&nbsp;C <br> Discharging: -10º&nbsp;C to 60º&nbsp;C |
| Storage temperature   | -20º&nbsp;C to&nbsp;60º C                                                      |
| Operating humidity    | 5-95%&nbsp;RH (non-condensing)                                                 |
| Storage humidity      | 5-95%&nbsp;RH (non-condensing)                                                 |
| Dimensions            | 43x57x15&nbsp;mm                                                               |
| Mounting              | Sticker                                                                        |

<br>

<rk-img
    src="https://images.docs.rakwireless.com/wisnode/rak7201v2/datasheet/2.deployment.png"
    width="90%"
    caption="Typical Deployment Scenario"
/>


### Hardware

The **RAK7201V2 WisNode 4K button** supports **Power Path Management (PPM)**, **Over Current Protection (OCP)**, and **Over Temperature Protection (OTP)**. The hardware specification covers the parameters of the RAK7201V2 in terms of electrical and supported LoRaWAN frequency parameters.

#### RF Characteristics

| Parameter           | Value                        |
| ------------------- | ---------------------------- |
| LoRa Protocol       | LoRaWAN 1.0.3                |
| LoRa TX Power       | 19.2&nbsp;dBm @ 868&nbsp;MHz |
| LoRa RX Sensitivity | -136&nbsp;dBm                |
| LoRa Antenna        | FPC antenna                  |

The RAK7201V2 supports different LoRaWAN frequency bands for different country regions.

| Region        | Frequency Band Common Name (MHz) |
| ------------- | -------------------------------- |
| Europe        | EU868                            |
| India         | IN865                            |
| North America | US915                            |
| Australia     | AU915                            |
| Asia          | AS923                            |
| Korea         | KR920                            |

#### Actuators

<rk-img
    src="https://images.docs.rakwireless.com/wisnode/rak7201v2/datasheet/3.buttons-leds.png"
    width="60%"
    caption="RAK7201V2 Buttons and LEDs"
/>


##### Buttons

RAK7201 has four (4) buttons, all of which can be configured to execute defined functionality. The stock firmware is configured to send the button's ID number via a LoRa frame whenever one is pressed.

| Function | Description                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Button 1 | Long press **button 1** for three seconds to send a join request. Short-press **button 1** to send button 1 data. The data can be personalized with an AT command.                                            |
| Button 2 | Long-press **button 2** for three seconds to reset the device. Short-press **button 2** to send button 2 data. The data can be personalized with an AT command.                                               |
| Button 3 | Long-press **button 3** to display the battery level (blue LED battery indicator<sup><b><i>1</i></b></sup>). Short-press **button 3** to send button 3 data. The data can be personalized with an AT command. |
| Button 4 | Short-press **button 4** to send button 4 data. The data can be personalized with an AT command.                                                                                                              |

<sup><b><i>1</i></b></sup>The percentage charge is identified by the number of lit blue LEDs. Each LED represents 25% of the battery charge. 1 lit blue LED indicates a 1–25% charge, two lit blue LEDs indicate a 26–50% charge, and so on.

##### LEDs

There are four RGB LEDs, one per button. The following table shows the LEDs' status:

| Function                                  | Description                                 |
| ----------------------------------------- | ------------------------------------------- |
| The battery is charging.                  | Four **GREEN LEDs** flash                   |
| The battery is fully charged.             | Four **GREEN LEDs** light up                |
| The button is pressed.                    | Corresponding **BLUE LED** will flash once  |
| The data transmission is successful.      | Corresponding **BLUE LED** will flash twice |
| The Data transmission is failed.          | Corresponding **RED LED** will flash twice  |
| The device is trying to join the network. | Four **BLUE LEDs** flash anticlockwise      |

#### Interfaces

RAK7201V2 has a standard Micro USB port on the side, that adheres to the USB 2.0 specification. This port is used as both a configuration interface and for charging the battery.


#### Electrical Characteristics

The following are the electrical characteristics of RAK7201V2 WisNode Button 4K.

For specific details regarding a project, [contact the RAK support](mailto:support@rakwireless.com).

Power consumption:

| Parameter                   | Value                                     |
| --------------------------- | ----------------------------------------- |
| Operating current (Tx Mode) | 87&nbsp;mA (19.2&nbsp;dBm @ 868&nbsp;MHz) |
| Sleep current               | 6.25&nbsp;uA                              |

::: tip 📝 NOTE
Operating current depends on factors such as transmit power, SF, and payload length.
:::


#### Battery Specification

The RAK7201V2 comes with a 400&nbsp;mAh rechargeable LiPo battery inside. In need of replacement, adhere to the specification.

| Parameter               | Value                                                                       |
| ----------------------- | --------------------------------------------------------------------------- |
| Nominal Battery Voltage | 3.7&nbsp;V                                                                  |
| Nominal Capacity        | 400&nbsp;mAh                                                                |
| Temperature Range       | Charging: 10º&nbsp;C ~ 45º&nbsp;C  <br> Discharge: -10º&nbsp;C ~ 60º&nbsp;C |
| Battery Dimensions      | 5.7&nbsp;mm x 21&nbsp;mm x 37&nbsp;mm.5                                     |


### Firmware

The device runs on RAK firmware that allows configuration with a set of simple AT commands.

### Working Modes

The RAK7201V2 supports LoRaWAN and P2P work modes. LoRaWAN-supported modes are OTAA and ABP network modes, operating in Class A communication.

## Models/Bundles

| Model     | Description                                                 |
| --------- | ----------------------------------------------------------- |
| RAK7201V2 | 4 keys LoRaWAN button (EU868/IN865/AU915/US915/KR920/AS923) |

