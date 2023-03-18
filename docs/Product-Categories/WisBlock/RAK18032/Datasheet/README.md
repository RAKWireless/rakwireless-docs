---
rak_desc: Provides comprehensive information about your RAK18032 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak18032/RAK18032.png
tags:
  - Datasheet
  - WisBlock Audio
  - RAK18032
  - SPH0655LM4H-1
  - Knowles
prev: ../Quickstart/
next: false
---

# RAK18032 WisBlock Audio Ultrasonic Microphone Module Datasheet

## Overview

### Description

RAK18032 is a WisBlock Audio that extends the WisBlock system based on the SPH0655LM4H-1 module from Knowles. This module is an ultrasonic microphone module, where the analog audio is converted to a Pulse Density Modulation (PDM) output. When used with other WisBlock modules, you can achieve rich applications such as audio monitoring, recording, and even voice control functions.

### Features

* **Sensor Specifications**
    * Voltage supply: **3.3&nbsp;V ~ 3.6&nbsp;V**
    * Current consumption: **40&nbsp;uA ~ 690&nbsp;uA**
    * Chipset: **SPH0655LM4H-1**
    * Ultrasonic PDM Microphone
    * Left or right channel selection
    * Flat frequency response: 20&nbsp;kHz - 80&nbsp;kHz
    * Low distortion
    * High SNR
    * Bottom port
    * Omnidirectional sensitivity

* **Module Size**
    * 15 x 25&nbsp;mm

## Specifications

### Overview

<br>


<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032.png"
  width="40%"
  caption="RAK18032 WisBlock Audio Ultrasonic Microphone Module top and bottom view"
/>

#### Mounting

##### Mount to WisBlock Base

**Figure 2** shows the mounting mechanism of the RAK18032 module on a [WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) board. The RAK18032 module can be mounted on the IO slots.

<br>

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-mount.png"
  width="50%"
  caption="RAK18032 mounted to the WisBlock Base"
/>

##### Mount to WisBlock Audio Stack

With the use of WisBlock Audio Spacer, the RAK18032 can be mounted to any other WisBlock Audio module. **Figure 3** shows the mounting mechanism of the RAK18032 on a WisBlock Audio Stack.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-audiostack.png"
  width="50%"
  caption="RAK18032 mounted to the WisBlock Audio Stack"
/>

### Hardware

The hardware specification is categorized into five (5) parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK18032 Audio Ultrasonic Microphone Module.


#### Chipset

| Vendor        | Part number |
| ------------- | ----------- |
| SPH0655LM4H-1 | Knowles     |

#### Pin Definition

##### WisBlock IO Connector

The RAK18032 WisBlock Audio Ultrasonic Microphone Module comprises a standard WisBlock connector. The WisBlock connector allows the RAK18032 module to be mounted to a WisBlock Base board. The pin order of the connector and the pinout definition is shown in **Figure 4**.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-pinouts.png"
  width="70%"
  caption="RAK18032 WisBlock Module pinout diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are power supplies from the WisBlock Base.
- **MIC_CTR_IO1** is the GPIO from WisBlock Core. The MIC can be controlled as a left or right channel.
- **MIC_PDM1_Data** and **MIC_PDM1_CLK** are PDM signals.
:::

##### WisBlock FPC Connector

The RAK18032 WisBlock Audio PDM Microphone comprises a standard FPC connector. The FPC connector allows the RAK18032 module to be connected to a WisBlock Audio Interposer board, such as RAK18003. The pin order of the connector and the pinout definition is shown in **Figure 5**.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-fpc.png"
  width="40%"
  caption="RAK18032 FPC connector pinout diagram"
/>

:::tip 📝 NOTE:
- **3V3** and **GND** are power supplies from the WisBlock Audio Interposer board.
- **MIC_CTR_IO1** is the GPIO from the Interposer board. The MIC can be controlled as a left or right channel.
- **MIC_PDM1_Data** and **MIC_PDM1_CLK** are PDM signals.
- **MIC_Check** is a signal to let the Interposer board know if the RAK18032 exists or is connected.
:::


#### Electrical Characteristics

##### Acoustic and Electrical Specifications
| Symbol            | Description                                                                            | Min. | Nom. | Max. | Unit  |
| ----------------- | -------------------------------------------------------------------------------------- | ---- | ---- | ---- | ----- |
| V<sub>DD</sub>    | Supply voltage                                                                         | 1.6  | 3.3  | 3.6  | V     |
| I<sub>dd</sub>    | Current consumption in normal mode (@ Fclock = 1.2&nbsp;MHz)                           | -    | 650  | 690  | uA    |
| I<sub>sleep</sub> | Current consumption in Sleep Mode                                                      | -    | 40   | 45   | uA    |
| Sensitivity       | 94&nbsp;dB SPL @ 1&nbsp;kHz                                                            | -38  | -37  | -36  | dBFS  |
| SNR               | Signal-to-noise ratio (94&nbsp;dB SPL @ 1&nbsp;kHz, A-weighted, Fclock = 1.2&nbsp;MHz) | -    | 64.5 | -    | dB(A) |
| Clock             | Input clock frequency                                                                  | 1.1  | -    | 4.8  | MHz   |
| T<sub>op</sub>    | Operating temperature range                                                            | -40  | -    | +100 | °C    |

**Figure 6** shows the RAK18032 typical free field ultrasonic response.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-field.png"
  width="50%"
  caption="RAK18032 typical free field ultrasonic response"
/>

#### Mechanical Characteristics

##### Board Dimensions

**Figure 7** shows the dimensions and the mechanical drawing of the RAK18032 module.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-dim.png"
  width="60%"
  caption="RAK18032 WisBlock Sensor mechanical drawing"
/>

##### WisBlock Connector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/wisblock-conn.png"
  width="100%"
  caption="WisBlock Connector PCB footprint and recommendations"
/>


#### Schematic Diagram

##### Digital Microphone

The **Pin 2** of the SPH0655LM4H-1 is used to control the MIC as a left or right channel.

- The MIC is the left channel when **Pin 2** is `HIGH`.
- The MIC is the right channel when **Pin 2** is `LOW`.

By default, the RAK18032 is the right channel. But, you can remove the 10K&nbsp;Ohms resistor on **R9** and connect it to **R8** to change the MIC to the left channel as its default. You may also use **MIC_CTR_IO1** to select the MIC as the right or left channel.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-mic.png"
  width="60%"
  caption="RAK18032 WisBlock Ultrasonic Microphone schematic diagram"
/>

**Figure 10** shows the full schematic diagram of the RAK18032 Audio PDM Microphone module.

<rk-img
  src="/assets/images/wisblock/rak18032/datasheet/rak18032-schem.png"
  width="100%"
  caption="RAK18032 schematic diagram"
/>

