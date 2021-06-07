---
tags:
  - datasheet
  - wisblock
  - RAK18000
prev: ../Quickstart/
next: false
---


# RAK18000 WisBlock PDM Stereo Microphone Module Datasheet

## Overview
<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/RAK18000_Back_Front.png"
  width="40%"
  caption="RAK18000 PDM Stereo Microphone Module"
/>

### Description

**RAK18000** is a **WisBlock Sensor** module that extends the **WisBlock** system with sound sensing capability. It is based on two MP34DT06J microphone modules.

The RAK18000 is a digital microphone module that is designed to detect sounds and to support left and right channels. It is also capable of changing microphone orientation on the left or right channel through the switch resistor.

### Features

* **Module Specifications**   
   
    - 3.3&nbsp;V input voltage
    - 64&nbsp;dB signal-to-noise ratio
    - –26&nbsp;dBFS ± 1&nbsp;dB sensitivity 
    - Stereo microphone 2 x MP34DT06J   
    - Low power consumption
  
* **Size**    
    * 25 x 15&nbsp;mm  

## Specifications

### Overview 

#### Mounting 

The RAK18000 module can be mounted to the slot IO of the WisBase board. Figure 2 shows the mounting mechanism of the RAK18000 on a WisBase module, such as the RAK5005-O.

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/RAK18000_mounting.png"
  width="50%"
  caption="RAK18000 PDM Stereo Microphone Module Mounting"
/>

### Hardware

The hardware specification is categorized into five parts that cover the chipset and pinouts and the corresponding functions and diagrams of the board. It also presents the parameters and their standard values in terms of acoustic, electrical, and mechanical. 

#### Chipset
| Vendor | Part number |
| ------ | ----------- |
| ST     | MP34DT06J   |

#### Pin Definition

The RAK18000 PDM Stereo Microphone Module comprises a standard WisIO connector. The WisIO connector allows the RAK18000 module to be mounted to a WisBlock baseboard, such as RAK5005-O. The pin order of the connector and the Pinout Definition is shown in Figure 3. 

:::tip 📝 NOTE:
**DMIC1**, **DMCLK**, **3V3**, and **GND** are connected to WisIO connector.  
:::

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/RAK18000_Pinout.svg"
  width="60%"
  caption="RAK18000 PDM Stereo Microphone Module Pinout Diagram"
/>

#### Acoustic and Electrical Characteristics

The table below shows RAK18000 digital microphone module acoustic and electrical characteristics:

| Symbol            | Description                            | Min. | Nom.  | Max. | Unit  |
| ----------------- | -------------------------------------- | ---- | ----- | ---- | ----- |
| V<sub>DD</sub>    | Supply Voltage                         | 1.6  | 3.3   | 3.6  | V     |
| I<sub>DD</sub>    | Current consumption in normal mode     | -    | 650   | -    | µA    |
| I<sub>ddPdn</sub> | Current consumption in power-down mode | -    | -     | 5    | µA    |
| AOP               | Acoustic Overload Point                | -    | 122.5 |      | dBSPL |
| SNR               | Signal-to-Noise Ratio                  | -    | 64    | -    | dB    |
| Clock             | Input clock frequency                  | 1.2  | 2.4   | 3.25 | MHz   |
| T<sub>op</sub>    | Operating temperature range            | -40  | -     | +85  | °C    |

#### Mechanical Characteristic

##### Board Dimensions

Figure 4 shows the dimensions and the mechanical drawing of the RAK18000 module.

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/RAK18000_mechanic_drawing.png"
  width="60%"
  caption="RAK18000 PDM Stereo Microphone Module Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

##### WisIO Connector Connection

Figure 6 shows the WisIO Connector connection and the digital microphone data line connected to **IO3** and the clock line connected to **IO4**. 

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/wisio-connection.png"
  width="80%"
  caption="RAK18000 PDM Stereo Microphone Module Connection"
/>

##### Digital Microphone

Figure 7 shows the schematic of RAK18000. The two digital microphones, left or right channel, can be switch through R6, R7, R8, and R9.

<rk-img
  src="/assets/images/wisblock/rak18000/datasheet/digital-microphone.png"
  width="100%"
  caption="RAK18000 PDM Stereo Microphone Module Schematic"
/>