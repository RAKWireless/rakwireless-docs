---
tags:
  - datasheet
  - wishat
  - RAK9003 PoE Pi HAT
prev: ../Overview/
next: false
rak_desc: Provides comprehensive information about your RAK9003 PoE Pi HAT to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wishat/rak9003-poe-hat/datasheet/RAK9003_home.png

---

# RAK9003 PoE Pi HAT Datasheet



## Overview

### Description

The PoE Pi HAT is an add-on board a with Raspberry PI form factor, compatible with RPi 3B+ and RPi4 which can be plugged into a Raspberry Pi directly. The PoE Pi HAT makes it possible to power the Raspberry Pi via a standard CAT 5 Ethernet cable.

The PoE Pi HAT is designed to be compatible with the IEEE 802.3af/at Power-over-Ethernet (PoE). It is compatible with both PoE Mode A and Mode B. The PoE Pi HAT signature and control circuit provides the PoE AT compatibility signature and power classification required by the Power Sourcing Equipment (PSE) before applying up to 30&nbsp;W power to the port. The PoE Pi HAT is compatible with Class 0 to Class 4 equipment. The high efficiency DC/DC converter operates over a wide input voltage range and provides a regulated low ripple and low noise output. The DC/DC converter also has built-in overload and short-circuit output protection.

### Key Features

- Raspberry Pi form factor with a 40-pin compatible header (**Pi3 B+, Pi4** compatible)
- Conforming to the IEEE 802.3af/at (mode A & mode B), **25W max load**
- Contains physical layer power negotiation circuitry, compatible with **Class 0 to Class 4 equipment**
- Wide operating voltage: **42&nbsp;V ~ 57&nbsp;V**
- Output Current: **5&nbsp;V @ 5&nbsp;A**
- Output voltage ripple: **200&nbsp;mVPP**
- High Efficiency: **83% (input 48&nbsp;V, 5&nbsp;V @ 5&nbsp;A)**
- High isolation: **1.5&nbsp;kV isolation** input to output
- **Overcurrent / short-circuit** protection
- **RoHS Compliant**
- Operating Temperature: **-40°&nbsp;C ～+85°&nbsp;C**

## Specifications

### Overview

The overview covers only the block diagram of the RAK9003 PoE Pi HAT.

#### Block Diagram

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/poe-hat-block-diagram.png"
  width="70%"
  caption="RAK9003 PoE Pi HAT Block Diagram"
/>

### Hardware

The hardware specification shows the pinouts of the RAK9003 and its corresponding functions. It also presents the parameters and the standard values of the board.

#### Pin Definition

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/raspberry-pi-connector-overview.png"
  width="70%"
  caption="RAK9003 PoE HAT Pinout Diagram"
/>

| **Pin No.** | **Name**  | **Description**  |
| ----------- | --------- | ---------------- |
| 1           | NC        | No Connection    |
| 2           | +5&nbsp;V | +5&nbsp;V Output |
| 3           | NC        | No Connection    |
| 4           | +5&nbsp;V | +5&nbsp;V Output |
| 5           | NC        | No Connection    |
| 6           | GND       | GND              |
| 7           | NC        | No Connection    |
| 8           | NC        | No Connection    |
| 9           | GND       | GND              |
| 10          | NC        | No Connection    |
| 11          | NC        | No Connection    |
| 12          | NC        | No Connection    |
| 13          | NC        | No Connection    |
| 14          | GND       | GND              |
| 15          | NC        | No Connection    |
| 16          | NC        | No Connection    |
| 17          | NC        | No Connection    |
| 18          | NC        | No Connection    |
| 19          | NC        | No Connection    |
| 20          | GND       | GND              |
| 21          | NC        | No Connection    |
| 22          | NC        | No Connection    |
| 23          | NC        | No Connection    |
| 24          | NC        | No Connection    |
| 25          | GND       | GND              |
| 26          | NC        | No Connection    |
| 27          | NC        | No Connection    |
| 28          | NC        | No Connection    |
| 29          | NC        | No Connection    |
| 30          | GND       | GND              |
| 31          | NC        | No Connection    |
| 32          | NC        | No Connection    |
| 33          | NC        | No Connection    |
| 34          | GND       | GND              |
| 35          | NC        | No Connection    |
| 36          | NC        | No Connection    |
| 37          | NC        | No Connection    |
| 38          | NC        | No Connection    |
| 39          | GND       | GND              |
| 40          | NC        | No Connection    |

#### Electrical Characteristics

##### Typical Characteristics

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-1.png"
  width="75%"
  caption="Noise VIN = 42 V, IO = 5 A, 5~20 MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-2.png"
  width="75%"
  caption="Transient Response, VIN = 42 V IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-3.png"
  width="75%"
  caption="Noise VIN = 48 V, IO = 5 A, 5~20 MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-4.png"
  width="75%"
  caption="Transient Response, VIN = 48 V, IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-5.png"
  width="75%"
  caption="Noise VIN = 57 V, IO = 5 A, 5~20 MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-6.png"
  width="75%"
  caption="Transient Response VIN = 57 V, IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-7.png"
  width="75%"
  caption="Power Down VIN = 42 V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-8.png"
  width="75%"
  caption="Short-Circuit Output, VIN = 42 V"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-9.png"
  width="75%"
  caption="Power Down VIN = 48 V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-10.png"
  width="75%"
  caption="Short-Circuit Output, VIN = 48 V"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-11.png"
  width="75%"
  caption="Power Down, VIN = 57 V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-12.png"
  width="75%"
  caption="Short-Circuit Output VIN = 57 V"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/efficiency.png"
  width="75%"
  caption="Efficiency"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-dissipation.png"
  width="75%"
  caption="Power Dissipation"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/startup-form-fig-15.png"
  width="75%"
  caption="Startup form 56 V 802.3at PSE, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/derating-curve.png"
  width="75%"
  caption="Derating Curve"
/>

##### Operating Conditions

The table below lists the operation voltage and temperature ranges:

| Parameter             | Description       | Min.        | Typical     | Max.        |
| --------------------- | ----------------- | ----------- | ----------- | ----------- |
| Input Voltage         | Input DC Voltage  | 42&nbsp;V   | 48&nbsp;V   | 57&nbsp;V   |
| Output Voltage        | Output DC voltage | 4.9&nbsp;V  | 5.0&nbsp;V  | 5.1&nbsp;V  |
| Operating Temperature | Temperature Range | -40°&nbsp;C | +25°&nbsp;C | +85°&nbsp;C |

##### Maximum ESD

The table below lists the maximum ESD:

| Parameter                    | Min | Typical | Max       | Remarks                                      |
| ---------------------------- | --- | ------- | --------- | -------------------------------------------- |
| ESD sensitivity for all pins | -   | -       | 1&nbsp;kV | Human Body Model according to JESD22-A114    |
| ESD immunity for ANT1        | -   | -       | 4&nbsp;kV | Contact Discharge according to IEC 61000-4-2 |
| -                            | -   | -       | 8&nbsp;kV | Air Discharge according to IEC 61000-4-2     |

:::tip 📝 NOTE
The module is an Electrostatic Sensitive Device and requires special precautions when handling.
:::
