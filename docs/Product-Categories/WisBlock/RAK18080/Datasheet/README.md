---
rak_desc: Provides comprehensive information about your RAK18080 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18080/overview/RAK18080_home.png
tags:
  - datasheet
  - WisBlock Audio
  - RAK18080
  - DSP Group
  - DBM10L
prev: ../Overview/
next: false
---


# RAK18080 WisBlock Audio DSP Board Module Datasheet

## Overview
### Description

**RAK18080** is a professional audio processing module, part of the WisBlock Audio Series. The RAK18080 is designed based on DBM10L by Synaptics. The DBM10L is an Artificial Intelligence (AI) and Machine Learning (ML) SoC based on a digital processor (DSP) optimized for voice and sensor processing. DBM10L can enable AI/ML, voice, and sensor applications, including Voice Trigger (VT), Voice Authentication (VA), Voice Command (VC), Noise Reduction (NR), Acoustic Echo Cancellation (AEC), and Sound Event Detection (SED). When used with **WisBlock Audio Stack**, RAK18080 can do VT and provide I2S data to the speaker.


### Features

* **Module Specifications**
  - Voice trigger
  - Pulse Density Modulation (PDM) interface for digital microphone
  - Two I2S interface for host and amplifier
  - I2C, UART, and SPI Interface for control (SPI as default)
  
* **Module Size**
    * 25 x 35&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/rak18080.png"
  width="65%"
  caption="RAK18080 WisBlock Audio DSP Board Module top and bottom view"
/>

#### Mounting 

##### Mount to a WisBlock Audio Stack

With a 3&nbsp;mm spacer, the RAK18080 can mount to the WisBlock Audio Stack. **Figure 2** shows the mounting mechanism of the RAK18080 on a WisBlock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/RAK18080_Audio_Stack.png"
  width="60%"
  caption="RAK18080 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK18080 Audio DSP Board Module.

#### Chipset

| Vendor    | Part Number |
| --------- | ----------- |
| Synaptics | DBM10L      |

#### Pin Definition

RAK18080 has two board-to-board (BTB) connectors, one for the interposer board and another for the amplifier board.

##### WisBlock Connector

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/rak18080-pinouts.png"
  width="70%"
  caption="RAK18080 WisBlock Connector pinout"
/>


##### Stack Connector for Interposer Board

The RAK18080 WisBlock module comprises a male board-to-board (BTB) connector. The BTB connector allows the RAK18080 module to be stacked with an interposer board such as **RAK18003 (Audio Interposer board)**. 

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/RAK18080_Interpose_Connector.png"
  width="40%"
  caption="RAK18080 BTB connector for Interposer board pinout"
/>

:::tip 📝 NOTE:
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply pins from the Interposer board.
- **DSP_CTR_IO1** is a digital interrupt signal from the DSP board. Normally, this pin is **HIGH**. It will be **LOW** if DBM10L identifies a command word or a trigger word. It will return to **HIGH** when **WisBlock Core** configures the corresponding registers.
- **DSP_CTR_IO2** is a digital output signal from DBM10L, an indication to **WisBlock Core** that it can read data.
- **DSP_CTR_IO3** is a digital input signal used to reset DBM10L (**Active LOW**).
- **Device_I2C_SDA** and **Device_I2C_SCL** are interfaces between DBM10L and WisBlock Core.
- **DSP_I2S_BCLK**, **DSP_I2S_WS**, **DSP_I2S_DI**, and **DSP_I2S_DO** are I2S signals.
- **MCU_SPI1_MOSI**, **MCU_SPI1_MISO**, **MCU_SPI1_CLK**, and **MCU_SPI1_CS2** are SPI interfaces between DBM10L and WisBlock Core.
- **DSP_Check**  is a GPIO pin from the Interposer board. It is used to check whether the DSP board is connected or not. This pin is **LOW** when there is no amplifier board and will be **HIGH** when the amplifier board is connected.
- **DSP_PDM1_CLK**, **DSP_PDM1_Data**, **DSP_PDM2_CLK**, and **DSP_PDM2_Data** are PDM interfaces between DBM10L and digital Microphone.
:::

##### Stack Connector for Amplifier Board

The RAK18080 WisBlock module comprises a female board-to-board (BTB) connector. The BTB connector allows the RAK18080 module to be stacked with an amplifier board such as **RAK18060 (Audio Stereo Amplifier board)**. 

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/RAK18080_Amplifier_Connector.png"
  width="30%"
  caption="RAK18080 BTB connector for Amplifier board Pinout"
/>

:::tip 📝 NOTE:
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply pins for the amplifier board.
- **AMP_CTR_IO1** is the GPIO from the interposer board. Normally, this pin is **HIGH**. It will be **LOW** if there is an error within the amplifier.
- **AMP_I2S_DO**, **AMP_I2S_DI**, **AMP_I2S_WS**, and **AMP_I2S_BCLK** are I2S signals to the amplifier board.
- **Device_I2C_SDA** and **Device_I2C_SCL** are I2C signals to control the amplifier board.
- **AMP_Check** is a GPIO pin. It is used to check whether an Amplifier board is connected or not. This pin is **LOW** when there is no amplifier board and will be **HIGH** when the amplifier board is connected.
:::



#### Electrical Characteristics

This table shows the electrical characteristics of the RAK18080 DSP Module:

| Symbol          | Description                    | Min. | Nom. | Max. | Unit |
| --------------- | ------------------------------ | ---- | ---- | ---- | ---- |
| V<sub>BUS</sub> | USB or POE supply from WisBase | 2.9  | 5    | 5.5  | V    |
| V<sub>BAT</sub> | Battery supply from WisBase    | 3.3  | -    | 4.25 | V    |
| 3V3_S/3V3       | Digital supply voltage         | 3    | 3.3  | 3.6  | V    |

#### Mechanical Characteristic

##### Board Dimensions

**Figure 5** shows the dimensions and the mechanical drawing of the RAK18080 module.

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/RAK18080_mechanical_drawing.png"
  width="80%"
  caption="RAK18080 WisBlock DSP Module mechanical drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/MxxS1003K6M.png"
  width="90%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram


<rk-img
  src="/assets/images/wisblock/rak18080/datasheet/RAK18080_wisblock_connector_interposer_power_supply.png"
  width="100%"
  caption="WisBlock Connector, Interposer Connector, AMP Connector, and Power Supply schematic diagram"
/>

:::tip 📝 NOTE:
- DBM10L requires three different voltage sources:

  - **3V3** comes from the interposer board;  
  - **1V8** is generated by **3V3** through LDO;
  - **1V1** is generated by **3V3** through a DC-DC converter. Then the DBM10L generates **0V8** for the digital core through an internally-integrated LDO.

- Some of the IO ports of the DBM10L are operating at 1.8&nbsp;V, but WisBlock Core and AMP board only support 3.3&nbsp;V. Level shifter is needed on these signals.

:::




