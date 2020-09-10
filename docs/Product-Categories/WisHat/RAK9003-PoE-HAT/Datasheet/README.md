---
tags:
  - datasheet
  - wishat
prev: ../Overview/
---

# RAK9003 PoE Pi HAT Datasheet

<!---
<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/rak9003-poe-hat.png"
  width="75%"P
  caption="RAK9003 PoE Pi HAT"
/>
--->

## Overview

### Description

The PoE Pi HAT is an add-on board with Raspberry PI form factor which can be plugged into a Raspberry Pi directly. The PoE Pi HAT makes it possible to power the Raspberry Pi via a standard CAT 5 Ethernet cable.

The PoE Pi HAT is designed to be compatible with the IEEE 802.3af/at Power-over-Ethernet (PoE), it is compatible with both PoE Mode A and Mode B. The PoE Pi HAT signature and control circuit provides the PoE AT compatibility signature and power classification required by the Power Sourcing Equipment (PSE) before applying up to 30W power to the port. The PoE Pi HAT is compatible with Class 0 to Class 4 equipment. The high efficiency DC/DC converter operates over a wide input voltage range and provides a regulated low ripple and low noise output. The DC/DC converter also has built-in overload and short-circuit output protection.

### Key Features

- Raspberry Pi form factor with a 40pin compatible header (**Pi3 B, Pi4** compatible)
- Conforming to the IEEE 802.3af/at (mode A & mode B), **25W Max Load**.
- Contains physical layer power negotiation circuitry, compatible with **Class 0 to Class 4 equipment**.
- Wide operating voltage: **42V ~ 57V**.
- Output Current: **5V@5A**
- Output voltage ripple: **200mVPP.**
- High Efficiency: **83% (input 48V, 5V@5A).**
- High isolation: **1.5KV isolation** input to output.
- **Overcurrent / short-circuit** protection.
- **RoHS Compliant**.
- Operating Temperature: **-40 ℃ ～+85 ℃.**

## Specifications

### Overview

The overview covers only the block diagram of the RAK9003 PoE Pi HAT.

#### Block Diagram

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/poe-hat-block-diagram.png"
  width="90%"
  caption="RAK9003 PoE Pi HAT Block Diagram"
/>

### Hardware

The hardware specification shows the pinouts of the RAK9003 and its corresponding functions. It also presents the parameters and the standard values of the board.

#### Pin Definition

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/raspberry-pi-connector-overview.png"
  width="75%"
  caption="Raspberry Pi Connector Overview"
/>

| Pin # | Name | Description   |
| ----- | ---- | ------------- |
| 1     | NC   | No Connection |
| 2     | +5V  | +5V Output    |
| 3     | NC   | No Connection |
| 4     | +5V  | +5V Output    |
| 5     | NC   | No Connection |
| 6     | GND  | GND           |
| 7     | NC   | No Connection |
| 8     | NC   | No Connection |
| 9     | GND  | GND           |
| 10    | NC   | No Connection |
| 11    | NC   | No Connection |
| 12    | NC   | No Connection |
| 13    | NC   | No Connection |
| 14    | GND  | GND           |
| 15    | NC   | No Connection |
| 16    | NC   | No Connection |
| 17    | NC   | No Connection |
| 18    | NC   | No Connection |
| 19    | NC   | No Connection |
| 20    | GND  | GND           |
| 21    | NC   | No Connection |
| 22    | NC   | No Connection |
| 23    | NC   | No Connection |
| 24    | NC   | No Connection |
| 25    | GND  | GND           |
| 26    | NC   | No Connection |
| 27    | NC   | No Connection |
| 28    | NC   | No Connection |
| 29    | NC   | No Connection |
| 30    | GND  | GND           |
| 31    | NC   | No Connection |
| 32    | NC   | No Connection |
| 33    | NC   | No Connection |
| 34    | GND  | GND           |
| 35    | NC   | No Connection |
| 36    | NC   | No Connection |
| 37    | NC   | No Connection |
| 38    | NC   | No Connection |
| 39    | GND  | GND           |
| 40    | NC   | No Connection |

#### Electrical Characteristics

##### Typical Characteristics

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-1.png"
  width="75%"
  caption="Noise VIN = 42V, IO = 5A, 5~20MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-2.png"
  width="75%"
  caption="Transient Response, VIN = 42V IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-3.png"
  width="75%"
  caption="Noise VIN = 48V, IO = 5A, 5~20MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-4.png"
  width="75%"
  caption="Transient Response, VIN = 48V, IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/noise-fig-5.png"
  width="75%"
  caption="Noise VIN = 57V, IO = 5A, 5~20MHz Bandwidth"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/transient-response-fig-6.png"
  width="75%"
  caption="Transient Response VIN = 57V, IO = 50% ~ 100% ~ 50%"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-7.png"
  width="75%"
  caption="Power Down VIN = 42V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-8.png"
  width="75%"
  caption="Short-Circuit Output, VIN = 42V"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-9.png"
  width="75%"
  caption="Power Down VIN = 48V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-10.png"
  width="75%"
  caption="Short-Circuit Output, VIN = 48V"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/power-down-fig-11.png"
  width="75%"
  caption="Power Down, VIN = 57V, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/short-circuit-output-fig-12.png"
  width="75%"
  caption="Short-Circuit Output VIN = 57V"
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
  caption="Startup form 56V 802.3at PSE, C1: Output Voltage, C2: PSE Out, C3: Input Current, ILoad = 100% IO max"
/>

<rk-img
  src="/assets/images/wishat/rak9003-poe-hat/datasheet/derating-curve.png"
  width="75%"
  caption="Derating Curve"
/>

##### Operating Conditions

The table below lists the operation voltage and temperature ranges:

| Parameter             | Description       | Min.  | Typ.  | Max.  |
| --------------------- | ----------------- | ----- | ----- | ----- |
| Input Voltage         | Input DC Voltage  | 42V   | 48V   | 57V   |
| Output Voltage        | Output DC voltage | 4.9V  | 5.0V  | 5.1V  |
| Operating Temperature | Temperature Range | -40°C | +25°C | +85°C |

##### Maximum ESD

The table below lists the maximum ESD:

| Parameter                    | Min | Typical | Max  | Remarks                                      |
| ---------------------------- | --- | ------- | ---- | -------------------------------------------- |
| ESD sensitivity for all pins | -   | -       | 1 kV | Human Body Model according to JESD22-A114    |
| ESD immunity for ANT1        | -   | -       | 4 kV | Contact Discharge according to IEC 61000-4-2 |
| -                            | -   | -       | 8 kV | Air Discharge according to IEC 61000-4-2     |

:::tip 📝 NOTE
The module is an Electrostatic Sensitive Device and require special precautions when handling.
:::
