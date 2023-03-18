---
rak_desc: Provides comprehensive information about your RAK18040 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18040/RAK18040.png
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18040
  - Nuvoton
  - NAU85L40B
prev: ../Overview/
next: false
---


# RAK18040 WisBlock Audio Analog Microphone to I2S Module Datasheet

## Overview

### Description

**RAK18040** is an analog microphone to the I2S module, part of the **WisBlock Audio Series**. With an analog microphone like the RAK18041, analog audio can be directed to I2S output using this module. RAK18040 is designed based on **NAU85L40B** from Nuvoton. **NAU85L40B** is an audio ADC with an integrated frequency-locked loop (FLL) and microphone preamplifier.

### Features

* **Module Specifications**
    - Audio ADC
    - Integrated FLL and microphone preamplifier
    - I2S interface for audio data
    - I2C interface for control
    - Supports two (2) analog microphones

* **Module Size**
    * 25 x 35&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/rak18040.png"
  width="60%"
  caption="RAK18040 WisBlock Audio Analog Microphone to I2S Module"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the acoustics, electrical, and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK18040 WisBlock Audio Analog Microphone to I2S Module.

#### Chipset

| Vendor  | Part Number |
| :-----: | :---------: |
| Nuvoton |  NAU85L40B  |

#### Pin Definition

##### WisBlock Connector

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/rak18040-pinout.png"
  width="70%"
  caption="RAK18040 WisBlock Connector pinout"
/>

#### Acoustic and Electrical Characteristics

This table shows the RAK18040 WisBlock Audio Analog Microphone to I2S Module electrical characteristics.

| Symbol    | Description                                                                                                          | Min. | Nom. | Max. | Unit |
| --------- | -------------------------------------------------------------------------------------------------------------------- | ---- | ---- | ---- | ---- |
| VBUS      | USB or POE supply form WisBase                                                                                       | 2.9  | 5    | 5.5  | V    |
| VBAT      | Battery supply form WisBase                                                                                          | 3.3  | -    | 4.25 | V    |
| 3V3_S/3V3 | Digital supply voltage                                                                                               | 3    | 3.3  | 3.6  | V    |
| MICBIas   | Output voltage for analog MIC                                                                                        | 2.1  | -    | 2.8  | V    |
| THD+N     | Digital supply voltage                                                                                               | -    | -80  | -92  | dB   |
| SNR       | Reference = VOUT(0&nbsp;dBFS), A-Weighted, MIC Input, MIC Gain = 0&nbsp;dB, fs = 8&nbsp;KHz, Mono Differential Input | -    | 101  | -    | dB   |

#### Mechanical Characteristic

##### Board Dimensions

**Figure 3** shows the dimensions and the mechanical drawing of the RAK18040 module.

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_mechanic_drawing.png"
  width="70%"
  caption="RAK18040 WisBlock DSP Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/MxxS1003K6M.png"
  width="80%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

##### WisBlock, Interposer, AMP and MIC Connectors, and LDO

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_wisblock_interposer_amp_mic_ldo.png"
  width="100%"
  caption="WisBlock, Interposer, AMP and MIC Connectors, and LDO"
/>

##### ADC and Analog Filter

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_adc_analog_filter.png"
  width="100%"
  caption="ADC and Analog Filter"
/>


