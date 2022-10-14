---
rak_desc: Provides comprehensive information about your RAK18031 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18031/overview/RAK18031_home.png
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18031
  - MP34DT06JTR
  - ST
prev: ../Overview/
next: false
---

# RAK18031 WisBlock Audio PDM Microphone Module Datasheet

## Overview

### Description

RAK18031 is a WisBlock Audio that extends the WisBlock system based on the MP34DT06JTR module from ST. This module is a mono PDM microphone module, where the analog audio is converted to a Pulse Density Modulation (PDM) output. When used with other WisBlock modules, you can achieve rich applications such as audio monitoring, recording, and even voice control functions.


### Features

* **Sensor Specifications**
    * Voltage supply: **3.3&nbsp;V ~ 3.6&nbsp;V**
    * Current consumption: **5&nbsp;uA ~ 650&nbsp;uA**
    * Chipset: **MP34DT06JTR**
    * PDM Microphone
    * Left or Right Channel Selection
    * Flat frequency response: 100&nbsp;Hz - 10,000&nbsp;Hz
    * Low distortion of 6% at 120&nbsp;dB SPL
    * 64&nbsp;dB(A) Signal-to-Noise Ratio
    * Omnidirectional sensitivity
    
* **Module Size**
    * 15 x 25&nbsp;mm

## Specifications

### Overview

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031.png"
  width="40%"
  caption="RAK18031 WisBlock Audio PDM Microphone Module top and bottom view"
/>

#### Mounting

##### Mount to WisBlock Base

**Figure 2** shows the mounting mechanism of the RAK18031 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK18031 module can be mounted on the IO slots.

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-mount.png"
  width="50%"
  caption="RAK18031 mount to WisBlock Base"
/>

##### Mount to Enclosure

If you want to use the RAK18031 with an enclosure, there are two (2) mounting screw holes that are provided to mount the microphone module up against a hole in the enclosure. In this case, an FPC or a [WisBlock IO Extension Cable](/Product-Categories/WisBlock/RAK19008/Overview/) is required to connect the RAK18031 to the WisBlock system.

:::tip 📝 NOTE:
- The FPC with the Audio Interposer board is recommended as it provides a better mechanical mounting than the IO extension cable.
:::

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-enclosure.png"
  width="50%"
  caption="RAK18031 mounted to the enclosure"
/>

##### Mount to WisBlock Audio Stack

With the use of WisBlock Audio Spacer, the RAK18031 can be mounted to any other WisBlock Audio module. **Figure 4** shows the mounting mechanism of the RAK18031 on a WisBlock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-audiostack.png"
  width="50%"
  caption="RAK18031 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK18031.


#### Chipset

| Vendor      | Part number |
| ----------- | ----------- |
| MP34DT06JTR | ST          |

#### Pin Definition

##### WisBlock IO Connector

The RAK18031 WisBlock Audio PDM Microphone comprises a standard WisBlock connector. The WisBlock connector allows the RAK18031 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-pinouts.png"
  width="70%"
  caption="RAK18031 WisBlock Module pinout diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are power supply from the WisBlock Base.
- **MIC_CTR_IO1** is the GPIO from WisBlock Core. The MIC can be controlled as a left or right channel.
- **MIC_PDM1_Data** and **MIC_PDM1_CLK** are PDM signals.
:::

##### WisBlock FPC Connector

The RAK18031 WisBlock Audio PDM Microphone comprises a standard FPC connector. The FPC connector allows the RAK18031 module to be connected to a WisBlock Audio Interposer board, such as RAK18003. The pin order of the connector and the pinout definition is shown in **Figure 6**.

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-fpc.png"
  width="40%"
  caption="RAK18031 FPC connector pinout diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are power supply from the WisBlock Audio Interposer board.
- **MIC_CTR_IO1** is the GPIO from the Interposer board. The MIC can be controlled as a left or right channel.
- **MIC_PDM1_Data** and **MIC_PDM1_CLK** are PDM signals.
- **MIC_Check** is a signal to let the Interposer board know if the RAK18031 exists or is connected.
:::


#### Electrical Characteristics

##### Acoustic and Electrical Specifications
| Symbol            | Description                                                                            | Min. | Nom. | Max. | Unit  |
| ----------------- | -------------------------------------------------------------------------------------- | ---- | ---- | ---- | ----- |
| V<sub>DD</sub>    | Supply voltage                                                                         | 1.6  | 3.3  | 3.6  | V     |
| I<sub>dd</sub>    | Current consumption in normal mode (V<sub>DD</sub> = 1.8&nbsp;V, Clock = 2.4&nbsp;MHz) | -    | 650  | -    | uA    |
| I<sub>sleep</sub> | Current consumption in Sleep Mode                                                      | -    | -    | 5    | uA    |
| Sensitivity       | 94&nbsp;dB SPL @ 1&nbsp;kHz                                                            | -27  | -26  | -25  | dBFS  |
| SNR               | Signal-to-noise ratio (94&nbsp;dB SPL @ 1&nbsp;kHz, A-weighted)                        | -    | 64   | -    | dB(A) |
| Clock             | Input clock frequency                                                                  | 1.2  | 2.4  | 3.25 | MHz   |
| T<sub>op</sub>    | Operating temperature range                                                            | -40  | -    | +85  | °C    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 7** shows the dimensions and the mechanical drawing of the RAK18031 module.   

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-dim.png"
  width="60%"
  caption="RAK18031 WisBlock Sensor mechanical drawing"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>


#### Schematic Diagram

##### Digital Microphone

The **Pin 2** of the MP34DT06JTR is used to control the MIC as a left or right channel. 

- The MIC is the left channel when **Pin 2** is `HIGH`.
- The MIC is the right channel when **Pin 2** is `LOW`. 

By default, the RAK18031 is the right channel. But, you can remove the 10&nbsp;kΩ resistor on **R9** and connect it to **R8** to change the MIC to the left channel as its default. You may also use **MIC_CTR_IO1** to select the MIC as the right or left channel.  

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-mic.png"
  width="60%"
  caption="RAK18031 Digital Microphone schematic diagram"
/>

**Figure 10** below shows the full schematic diagram of the RAK18031 Audio PDM Microphone module.

<rk-img
  src="/assets/images/wisblock/rak18031/datasheet/rak18031-schem.png"
  width="100%"
  caption="RAK18031 schematic diagram"
/>

