---
rak_desc: Covers the comprehensive information of your RAK7271-7371 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisgate/rak7271-7371/overview/rak7271-7371.png
tags:
  - datasheet
  - wisgate
  - RAK7271
  - RAK7371
prev: ../Overview/
next: false 
---

# RAK7271/RAK7371 WisGate Developer Base Datasheet

## Overview

### Description

The RAK Developer Base is a device designed for integration with desktop/mobile/embedded systems that converts the RAK2287/RAK5146 mPCIe LoRa concentrator modules into USB Type C pluggable (via the include Type C to A cable). 

This new approach allows for it to be easily integrated into existing hardware like routers, industrial PC, etc., adding LoRaWAN gateway capabilities (for example turning a laptop into a testbed LoRaWAN gateway by simply plugging it in and running the software stack)

As it features a fully functioning concentrators modules it is capable of working with 8 uplink and 1 downlink channels at SF7-12 (RAK2287) / SF5-12 (RAK5146). 

The RAK Developer Base is an ideal solution for LPWAN deployments where integration with existing hardware is crucial, or scenarios when on the go deployment is required, for drive testing or coverage evaluation in mobile scenarios.

This device is a complete and cost-efficient LoRa gateway solution offering up to 10 programmable parallel demodulation paths. 

### Features

- Compatible with RAK2287(SX1302) / RAK5146(SX1303) concentrator modules with 8 uplink channels and 1 downlink channel.
- 2 x SX125x Tx/Rx front-ends.
- Tx power up to 27 dBm, Rx sensitivity down to -139 dBm @ SF12, BW 125 kHz.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923)
- USB Type C interface port (USB 2.0)


### Package Contents

- 1pc RAK Developer Base
- 1pc USB Type C to A Cable
- 1pc LoRa Antenna (2.3 dBi)

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/1.package-contents.png"
  width="70%"
  caption="Package Contents"
/>

## Specifications 

### Overview

The RAK7271/RAK7371 WisGate Developer Base consists of four components:

1. RAK2005
2. RAK2287/RAK5146
3. iPEX to RP-SMA female cable
4. Casing

#### Block Diagram

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/2.block-diagram.png"
  width="80%"
  caption="WisGate Developer Base Block Diagram"
/>

### Hardware

The hardware specification covers the interfacing of WisGate Developer Base and its corresponding functionalities. It also presents the parameters and the standard values of the board.

#### Interfaces 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/3.interfaces.png"
  width="70%"
  caption="WisGate Developer Base Interfaces"
/>

- **Power supply**: There is a 5&nbsp;V to 3.3&nbsp;V DC-DC converter integrated on RAK2005, so the 5&nbsp;V DC that comes from the USB interface is enough for this device.
- **USB Interface**: This device can be connected to any USB 2.0 host equipped with compatible drivers. The RAK2287/RAK5146 module inside can support high-speed USB to SPI by STM32L412KBU6. It includes a USB 2.0 compliant interface with a maximum 480&nbsp;Mb/s data rate, representing the interface for any communication with an external host application processor.
- **RP-SMA antenna interface**: The modules have one RF interface over a standard RPSMA connector with a characteristic impedance of 50&nbsp;Ω. The RF port supports both Tx and Rx, providing the antenna interface.


#### RF Characteristics

##### Operating Frequencies

The WisGate Developer Base supports the LoRaWAN bands in the table below.

| **Region**    | **Frequency (MHz)** |
| ------------- | ------------------- |
| China         | CN470               |
| Russia        | RU864               |
| India         | IN865               |
| Europe        | EU433, EU868        |
| North America | US915               |
| Australia     | AU915               |
| Korea         | KR920               |
| Asia          | AS923               |

##### LoRa RF Charactertistics

It is highly recommended to use optimized RSSI calibration values, which is part of the HAL v3.1. For both, Radio 1 and 2, the RSSI-Offset should be set -169.0. The following table gives the typical sensitivity level of the RAK2287 and RAK5146.

| Signal Bandwidth (kHz) | Spreading Factor | Sensitivity (dBm) |
| :--------------------: | :--------------: | :---------------: |
|          125           |        12        |       -139        |
|          125           |        7         |       -125        |
|          250           |        12        |       -136        |
|          250           |        7         |       -123        |
|          500           |        12        |       -134        |
|          500           |        7         |       -120        |


#### Antenna Specifications

##### LoRa Antenna

WisGate Developer Base comes with LoRa Antenna with RP-SMA Male connector, shown in Figure 4.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/4.lora-antenna.png"
  width="60%"
  caption="LoRa Antenna"
/>

##### Antenna Dimension

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/5.antenna-dimension.png"
  width="70%"
  caption="Antenna Dimension in mm"
/>

##### Antenna Parameters

| Items                              | Specifications               | Specifications               |
| ---------------------------------- | :--------------------------- | ---------------------------- |
| Frequency Range                    | 863~870&nbsp;MHz             | 902~928&nbsp;MHz             |
| Peak Gain                          | 2.8&nbsp;dBi                 | 2.3&nbsp;dBi                 |
| Voltage Standard Wave Ratio (VSWR) | ≤ 1.5                        | ≤ 1.5                        |
| Efficiency                         | > 80%                        | > 80%                        |
| Feed Impedance                     | 50&nbsp;Ω                    | 50&nbsp;Ω                    |
| Working Temperature & Humidity     | T: -30~+75&nbsp;ºC, H: 5~95% | T: -30~+75&nbsp;ºC, H: 5~95% |

#### Electrical Requirements

:::warning ⚠️ WARNING

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the device at these or any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect the device’s reliability. The operating condition range defines those limits within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

:::

##### Absolute Maximum Rating

Limiting values given below are in accordance with the Absolute Maximum Rating System (IEC 134).

| Symbol | Description            | Condition                                   | Min         | Max         |
| ------ | ---------------------- | ------------------------------------------- | ----------- | ----------- |
| 5V     | Device  supply voltage | Input  DC voltage                           | –0.3&nbsp;V | 5.25&nbsp;V |
| USB    | USB  D+/D- pins        | Input  DC voltage at USB interface pins     |             | 3.6&nbsp;V  |
| ANT    | Antenna  ruggedness    | Output  RF load mismatch ruggedness at ANT1 |             | 10:1 VSWR   |
| Tstg   | Storage  Temperature   |                                             | –40&nbsp;°C | 85&nbsp;°C  |


:::tip 📝 NOTE:

The product is not protected against overvoltage or reversed voltages. Voltage spikes exceeding the power supply voltage specification, given in the table above, must be limited to values within the specified boundaries by using appropriate protection devices.

:::

##### Maximum ESD

| Parameter | Min | Typical    | Max | Remarks                                            |
| --------- | --- | ---------- | --- | -------------------------------------------------- |
| ESD       |     | ±4&nbsp;KV |     | Indirect Discharge VCP according  to IEC 61000-4-2 |
| ESD       |     | ±4&nbsp;KV |     | Indirect Discharge HCP according  to IEC 61000-4-2 |

##### Operating Conditions

| Parameter             | Min         | Typical     | Max         |
| --------------------- | ----------- | ----------- | ----------- |
| Operating temperature | –40&nbsp;°C | +25&nbsp;°C | +85&nbsp;°C |


:::warning ⚠️ WARNING

Unless indicated otherwise, all operating condition specifications are at an ambient temperature of 25&nbsp;°C. Operation beyond the operating conditions is not recommended and extended exposure may affect the device's reliability.

:::

##### Power Supply Range

| Symbol   | Parameter                             | Min         | Typical  | Max         |
| -------- | ------------------------------------- | ----------- | -------- | ----------- |
| 5&nbsp;V | Device supply operating input voltage | 4.75&nbsp;V | 5&nbsp;V | 5.25&nbsp;V |

##### Power Consumption

| Mode             | Condition                                                   | Min | Typical     | Max |
| ---------------- | ----------------------------------------------------------- | --- | ----------- | --- |
| Active Mode (TX) | The power of TX channel is 27&nbsp;dBm and 5&nbsp;V supply. |     | 365&nbsp;mA |     |
| Active Mode (RX) | TX disabled and RX enabled.                                 |     | 66&nbsp;mA  |     |

#### Environmental Characteristics

| Parameter                   | Min         | Typical     | Max         |
| --------------------------- | ----------- | ----------- | ----------- |
| Operation Temperature Range | -40&nbsp;°C | +25&nbsp;°C | +85&nbsp;°C |

:::warning ⚠️ WARNING

Unless indicated otherwise, all operating condition specifications are at an ambient temperature of 25&nbsp;°C. Operation beyond the operating conditions is not recommended and extended exposure may affect the device's reliability.

:::

#### Mechanical Characteristics

<rk-img
  src="/assets/images/wisgate/rak7271-7371/datasheet/6.mechanical-dimension.png"
  width="50%"
  caption="WisGate Developer Base Dimension"
/>
## Models / Bundles            

| Product   | Concentrator | GPS | LBT | USB |
| --------- | ------------ | --- | --- | --- |
| RAK7271-Y | RAK2287      |     |     | √   |
| RAK7371-Y | RAK5146      |     |     | √   |


| Parameter            | Variations                                                                             |
| -------------------- | -------------------------------------------------------------------------------------- |
| Y - Supported Region | 1 - EU433; 2 - CN470; 3 - EU868; 4 - US915; 5 - KR920; 6 - AS923; 7 - IN865; 8 - AU915 |
