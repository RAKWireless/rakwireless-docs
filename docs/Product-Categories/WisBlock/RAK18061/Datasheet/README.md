---
rak_desc: Provides comprehensive information about your RAK18061 to help you use it. This information includes technical specifications, characteristics, and requirements. It also discusses the device components.
rak_img: /assets/images/wisblock/rak18061/overview/RAK18061_home.png
tags:
  - Datasheet
  - Wisblock
  - RAK18061
  - Texas Instruments
  - TAS2560
prev: ../Quickstart/
next: false
---


# RAK18061 WisBlock Audio Mono Amplifier Module Datasheet

## Overview

### Description

**RAK18061** is a mono amplifier module, part of the **WisBlock Audio Series**. It is designed based on the TAS2560 from TI, which features an ultra-low-noise audio DAC and Class-D audio amplifier. It incorporates speaker voltage and current sensing feedback for use with speaker protection algorithms.

The RAK18061 can drive the speaker to play audio through the input I2S signals. With other WisBlock modules, it can achieve rich applications, such as recording and voice control functions.

### Features

* **Module Specifications**    
    - Audio mono amplifier  
    - Amplifier power can be selected by a solder bridge
    - I2S interface for data and I2C interface for control
    - 5.6&nbsp;W at 1% THD+N into 4-Ω load from 4.2&nbsp;V supply  
    - High-efficiency Class-H boost converter  
    - Built-in speaker sense and automatic gain control  
    - Thermal, short-circuit, and under-voltage protection  
  
* **Module Size**    
    * 25 x 35&nbsp;mm  

## Specifications


### Overview

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/rak18061-front-back.png"
  width="60%"
  caption="RAK18061 WisBlock Audio Mono Amplifier Module top and bottom view"
/>
#### Mounting 

##### Mounting to WisBlock Base

Just like other WisBlock modules with a standard WisBlock IO connector, RAK18061  can be mounted to the IO slot of any WisBlock Base board. **Figure 2** shows the mounting mechanism of the RAK18061 on a WisBase module, such as the **RAK19007**.

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_mount_to_wisbase.png"
  width="60%"
  caption="RAK18061 mounted to the WisBlock Base"
/>

##### Mounting to WisBlock Audio Stack

With the 3&nbsp;mm spacer, the RAK18061 can be mounted to the WisBlock Audio Stack. **Figure 3** shows the mounting mechanism of the RAK18061 on the WisBlock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_mount_to_wisblock_audio_stack.png"
  width="60%"
  caption="RAK18061 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the acoustic, electrical, and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK18061 Audio Mono Amplifier Module.


#### Chipset

| Vendor | Part number |
| ------ | ----------- |
| TI     | TAS2560     |

#### Pin Definition

##### IO Slot Connector

The RAK18061 WisBlock module comprises a standard IO slot connector. The 40-pin WisBlock IO Slot Connector allows the RAK18061 module to be mounted to a WisBlock baseboard, such as the RAK5005-O. The pin order of the connector and the pinout definition is shown in **Figure 4**. 

<br>

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/rak18061-pinouts.png"
  width="60%"
  caption="RAK18061 WisIO Connector pinout"
/>

:::tip 📝 NOTE:
- **3V3_S** and **GND** are the power supply pins from the WisBlock Base. **3V3_S**, **VBAT**, and **VBUS** can be selected by the solder bridge as the amplifier power. **3V3_S** is always needed for digital power input.
- **AMP_INT** is a GPIO pin (IO1) from WisBlock Core. Normally, this pin is **HIGH**. It will be **LOW** if there is an error within the amplifier.
- **Core_I2S_DO**, **Core_I2S_DI**, **Core_I2S_WS**, and **Core_I2S_BCLK** are I2S signals.
- **Device_I2C_SDA** and **Device_I2C_SCL** are I2C signals, which control the TAS2560. 
:::

##### Stack Connector

The RAK18061 WisBlock module comprises a board-to-board (BTB) connector. The BTB connector allows the RAK18061 module to be stacked with other WisBlock Audio modules, such as the RAK18080 (DSP board) and the RAK18003 (Audio Interposer board). The pin order of the connector and the pinout definition is shown in **Figure 5**. 
  

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_btb_connector_pinout.png"
  width="40%"
  caption="RAK18061 BTB Connector pinout"
/>

:::tip 📝 NOTE:
- **3V3**, **VBAT**, **VBUS**, and **GND** are power supply pins from the Interposer board. **3V3**, **VBAT**, and **VBUS** can be selected by the solder bridge as the amplifier power. **3V3** is always needed for digital power input.
- **AMP_CTR_IO1** is the GPIO from the interposer board. Normally, this pin is **HIGH**. This pin will be **LOW** if there is an error within the amplifier and is shared between both amplifiers.
- **AMP_I2S_DO**, **AMP_I2S_DI**, **AMP_I2S_WS**, and **AMP_I2S_BCLK** are I2S signals.
- **Device_I2C_SDA** and **Device_I2C_SCL** are I2C signals which control the TAS2560.
**AMP_Check** is the GPIO from the interposer board. It is used to check whether an Amplifier board is connected. This pin is **LOW** when there is no Amplifier board and will be **HIGH** when an Amplifier board is connected.
:::

#### Acoustic and Electrical Characteristics

The table below shows the acoustic and electrical characteristics of the RAK18061 AMP Module:


| Symbol          | Description                                                            | Min. | Nom.   | Max. | Unit  |
| --------------- | ---------------------------------------------------------------------- | ---- | ------ | ---- | ----- |
| V<sub>BUS</sub> | USB or POE supply from WisBase                                         | 2.9  | 5      | 5.5  | V     |
| V<sub>BAT</sub> | Battery supply from WisBase                                            | 3.3  | -      | 4.25 | V     |
| 3V3_S/3V3       | Digital supply voltage                                                 | 3    | 3.3    | 3.6  | V     |
| EX_POWER        | Extra supply for J12                                                   | 2.9  | 5      | 5.5  | V     |
| I1              | Boost converter current limit (default)                                | -    | 3      | -    | A     |
| I2              | Class-D output current limit                                           | -    | 4      | -    | A     |
| RL              | Load resistance (Load spec resistance)                                 | 3.6  | 8      | -    | Ω     |
| THD+N           | THD+N @ 1&nbsp;kHz, Po = 3&nbsp;W）RL = 8&nbsp;Ω                       | -    | 0.0043 | -    | %     |
| SNR             | Referenced to 1% THD+N at output, A-weighted, RL = 8&nbsp;Ω            | -    | 110.6  | -    | dB(A) |
| Pm              | Max output power @ (3&nbsp;A current limit, THD+N = 1%, 8&nbsp;Ω load) | -    | 3.7    | -    | W     |
| Top             | Operating temperature range                                            | -40  | -      | +85  | ℃     |

#### Mechanical Characteristic

##### Board Dimensions

**Figure 6** shows the dimensions and the mechanical drawing of the RAK18061 module.

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_mechanic_drawing.png"
  width="70%"
  caption="RAK18061 WisBlock AMP Module mechanical drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

##### WisBlock Connector, AMP/DSP Board Connector, and Power Select

TAS2560 needs three power supplies. Analog supply voltage and I/O supply voltage are fixed on RAK18061. The amplifier input power supply can be selected via solder bridges (SB1, SB2, SB3, or SB4). 

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_wisblock_dsp_connector_power_select.png"
  width="100%"
  caption="RAK18061 WisBlock Connector, AMP/DSP Board Connector, and Power Select schematic diagram"
/>

The power supply needs to be selected according to the desired speaker output power:

- **3V3** from the WisBlock Base (maximum output current of 750&nbsp;mA)
- **V<sub>BAT</sub>** from the WisBlock Base (maximum output current of 1&nbsp;A)
- **V<sub>BUS</sub>** from the WisBlock Base (maximum output current of about 1.25&nbsp;A)
- **EX_Power** from an external power supply from J12

:::tip 📝 NOTE
If you want to achieve a higher speaker output power, use **EX_Power**. 
  - Voltage at EX_Power should not exceed 5.5&nbsp;V. 
  - Current of EX_Power should be higher than the speaker output power.
:::

##### Left and Right Channels

<rk-img
  src="/assets/images/wisblock/rak18061/datasheet/RAK18061_left_right_channel.png"
  width="100%"
  caption="RAK18061 Left and Right Channel Amplifier schematic diagram"
/>

