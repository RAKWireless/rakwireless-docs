---
rak_desc: Provides comprehensive information about your RAK18040 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18040/overview/RAK18040_home.png
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

**RAK18040** is an analog microphone to the I2S module, part of the **WisBlock Audio Series**. With an analog microphone, analog audio can be directed to I2S output using this module. RAK18040 is designed based on **NAU85L40B** from Nuvoton. **NAU85L40B** is an audio ADC with an integrated frequency-locked loop (FLL) and microphone preamplifier.

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
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_front_back.png"
  width="60%"
  caption="RAK18040 WisBlock Audio Analog Microphone to I2S Module"
/>


#### Mounting 

##### Mount to a WisBlock Audio Stack 

With the 3&nbsp;mm spacer, the **RAK18040** can be mounted to the **WisBlock Audio Stack**. **Figure 2** shows the mounting mechanism of the RAK18040 on the WisBlock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_mount_to_wisblock_audio_stack.png"
  width="50%"
  caption="RAK18040 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the acoustics, electrical, and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK18040 WisBlock Audio Analog Microphone to I2S Module.

#### Chipset

| Vendor  | Part Number |
| :-----: | :---------: |
| Nuvoton |  NAU85L40B  |

#### Pin Definition

RAK18040 has two board-to-board (BTB) connectors, one for the interposer board and another for the amplifier board.

##### WisBlock Connector

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/rak18040-pinout.png"
  width="70%"
  caption="RAK18040 WisBlock Connector pinout"
/>


##### Stack Connector for Interposer Board

The RAK18040 WisBlock module comprises a male board-to-board (BTB) connector. The BTB connector allows the RAK18040 module to be stacked with an interposer board, such as **RAK18003 (Audio Interposer Board)**. The pin order of the connector and the pinout definition is shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_interposer_connector.png"
  width="40%"
  caption="RAK18040 BTB Connector for Interposer Board pinout"
/>

::: tip 📝 NOTE
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply pins from the interposer board.
- **Device_I2C_SDA** and **Device_I2C_SCL** are interfaces between NAU85L40B and **WisBlock Core**.
- **AMIC_I2S_BCLK**, **AMIC_I2S_WS**, **AMIC_I2S_DI**, and **AMIC_I2S_DO** are I2S signals.
- **MIC_CTR_IO1** and **MIC_CTR_IO2** are GPIOs from the interposer board used as control signals for reserved analog microphones.
:::

##### Stack Connector for Amplifier Board

The RAK18040 WisBlock module comprises a female board-to-board (BTB) connector. The BTB connector allows the RAK18040 module to be stacked with an amplifier board, such as RAK18060. The pin order of the connector and the pinout definition is shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak18040/datasheet/RAK18040_amplifier_connector.png"
  width="30%"
  caption="RAK18040 BTB Connector for Amplifier Board pinout"
/>

::: tip 📝 NOTE
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply pins for the amplifier board.
- **AMP_CTR_IO1** is the GPIO from the interposer board. Normally, this pin is **HIGH**. It will be **LOW** if there is an error within the amplifier.
- **AMIC_I2S_DO**, **AMIC_I2S_DI**, **AMIC_I2S_WS**, and **AMIC_I2S_BCLK** are I2S signals to the amplifier board.
- **Device_I2C_SDA** and **Device_I2C_SCL** are I2C signals used to control the amplifier board.
- **AMP_Check** is a GPIO pin. It is used to check whether an Amplifier board is connected. This pin is **LOW** when there is no amplifier board and will be **HIGH** when an amplifier board is connected.
:::

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

**Figure 5** shows the dimensions and the mechanical drawing of the RAK18040 module.

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


