---
tags:
  - datasheet
  - wislink
  - RAK5167
prev: ../Overview/
next: false
rak_desc: Provides technical information about the RAK5167 WisLink LPWAN Concentrator for its usage. This information includes specifications, characteristics, requirements and the device components.
rak_img: /assets/images/wislink-lora/rak5167/RAK5167.png
---

# RAK5167 WisLink LPWAN Concentrator Datasheet

## Overview

### Product Description

The **RAK5167** is an LPWAN Concentrator Module with PCI Express M.2 Type 2280 form factor and Key B-M Dual Key IDs based on Semtech SX1303 and SX126X for Listen Before Talk feature, which enables easy integration into an existing router or other network equipment with LPWAN Gateway capabilities. It can be used in any embedded platform offering a free PCIe M.2 slot with a USB connection. Furthermore, the ZOE- M8Q GPS chip is integrated onboard.

This module is an exceptional, complete, and cost-efficient gateway solution offering up to 10 programmable parallel demodulation paths, 8 x 8 channel LoRa packet detectors, 8 x SF5-SF12 LoRa demodulators, and 8 x SF5-SF10 LoRa demodulators. It is capable of detecting an uninterrupted combination of packets at 8 different spreading factors and 10 channels with continuous demodulation of up to 16 packets. This product is best for smart metering fixed networks and Internet-of-Things (IoT) applications.

### Product Features

- Designed based on **PCI Express M.2 Type 2280 form factor** and **Key B-M Dual Key IDs**
- **SX1303 baseband processor** emulates 8 x 8 channels LoRa packet detectors
- 8x SF5-SF12 LoRa demodulators
- 8x SF5-SF10 LoRa demodulators
- High-speed 125/250/500&nbsp;kHz LoRa demodulator
- (G)FSK demodulator
- 3.3&nbsp;V **PCI Express M.2**
- Compatible with Type 2280 Socket 2 Key B-M PCIe-based WWAN Module
- Tx power up to 27&nbsp;dBm
- Rx sensitivity down to -139&nbsp;dBm @ SF12, BW 125&nbsp;kHz
- Supports **global license-free frequency band** (EU868, IN865, RU864, US915, AU915, KR920, AS923-1, AS923-2, AS923-3, AS923-4)
- Supports **USB** interfaces
- Listen Before Talk
- Fine Timestamp
- Built-in **ZOE-M8Q** GPS module

## Specifications

### Overview

The overview shows the top and back views of the RAK5167 board. It also presents the block diagram that discusses how the board works.

#### Board Overview

RAK5167 is a compact LPWAN Gateway Module, making it suitable for integration in systems where mass and size constraints are essential. It has been designed with the PCI Express M.2 Type 2280 form factor in mind, so it can easily become a part of products that comply with the standard, where they allow cards with a thickness of at least 3.7&nbsp;mm.

The board has two MHF4 IPEX connectors for the LoRa and GNSS antennas and a standard 75-pin connector (M.2) with Key B-M Dual Key IDs.

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/RAK5167_Overview.png"
  width="30%"
  caption="RAK5167 Board Overview"
/>

#### Block Diagram

The RAK5167 concentrator is equipped with one SX1303 chip and two SX1250. The first chip is utilized for the RF signal and the core of the device, while the latter provides the related LoRa modem and processing functionalities. Additional signal conditioning circuitry is implemented for PCI Express M.2 compliance, and two MHF4 IPEX connectors are available for external antenna integration.

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/rak5167-Block-Diagram.png"
  width="80%"
  caption="RAK5167 Block Diagram"
/>

### Hardware

The hardware is categorized into seven (7) parts. It discusses the interfacing, pinouts, and their corresponding functions and diagrams. It also covers the parameters and standard values of the board.

#### Interfaces

- **Power Supply** - The RAK5167 concentrator module must be supplied through the 3.3Vaux pins by a DC power supply. The voltage needs to be stable since the current drawn can vary significantly during operation based on the power consumption profile of the SX1303 chip (for more information, see the [SX1303 Datasheet](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000Hlli/Te0cB6.fNWAPfxRfoFz38R6LOTf3sLAJhD4CpS2RwFc)).

- **USB Interface** - The USB interface mainly provides for the USB_D+, USB_D- pins of the system connector. The USB interface gives access to the configuration register of SX1303 via an MCU STM32L412KBU6. Only the slave side is implemented.

- **UART and I2C Interface** - RAK5167 integrates a ZOE-M8Q GPS module which has UART and I2C interface. The PINs on the golden finger provide a UART connection and an I2C connection, which allows direct access to the GPS module. The PPS signal is not only connected to SX1303 internally but also connected to the golden finger which can be used by the host board.

- **GPS_PPS** - RAK5167 reserved the GPS_PPS input for received packets time-stamped and Fine timestamp.

- **MCU RESET** - RAK5167 USB card includes the RESET active-low input signal to reset the MCU. SX1303’s RESET is controlled by MCU to reset the radio operations as specified by the SX1303 Specification.

- **Antenna RF Interface** - The module has two RF interfaces over a standard MHF4 IPEX connector with a characteristic impedance of 50&nbsp;Ω. The RF port (J1) supports both Tx and Rx, providing the antenna interface for LoRa. The RF port (J2) provides the antenna interface for GPS.

#### Pin Definition

##### Pinout Diagram

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/RAK5167_pinout.png"
  width="100%"
  caption="RAK5167 Pinout Diagram"
/>

##### Pinout Description

| Type | Description    |
| ---- | -------------- |
| IO   | Bidirectional  |
| DI   | Digital input  |
| DO   | Digital output |
| OC   | Open collector |
| OD   | Open drain     |
| PI   | Power input    |
| PO   | Power output   |
| NC   | No connection  |

<table>
    <thead>
        <tr>
            <th>Pin No.</th><th>RAK5167 Pin</th><th>Type</th><th>Description</th><th>Remarks</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>1</td><td>NC (CONFIG_3=GND)</td><td> </td><td>No connection by default</td><td>Reserved for CONFIG_3</td>
        </tr>
        <tr>
            <td>2</td><td>3.3&nbsp;V</td><td>PI</td><td>3.3&nbsp;V<sub>DC</sub> supply</td><td> </td>
        </tr>
        <tr>
            <td>3</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>4</td><td>3.3&nbsp;V</td><td>PI</td><td>3.3&nbsp;V<sub>DC</sub> supply</td><td> </td>
        </tr>
        <tr>
            <td>5</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>6</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>7</td><td>USB_D+</td><td>IO</td><td>USB differential data (+)</td><td>Require differential impedance of 90&nbsp;Ω</td>
        </tr>
        <tr>
            <td>8</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>9</td><td>USB_D-</td><td>IO</td><td>USB differential data (-)</td><td>Require differential impedance of 90&nbsp;Ω</td>
        </tr>
         <tr>
            <td>10</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>11</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td></td><td></td><td></td><td rowspan="1" colspan="1"> <b>KEY-B Notch</b> </td><td></td>
        </tr>
        <tr>
            <td>20</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>21</td><td>NC (CONFIG_0=GND)</td><td> </td><td>No connection by default</td><td>Reserved for CONFIG_0</td>
        </tr>
        <tr>
            <td>22</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>23</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>24</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>25</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>26</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>27</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>28</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>29</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>30</td><td>NC (Optional: MCU_RESET)</td><td> </td><td>No connection by default</td><td>Reserved for MCU_RESET</td>
        </tr>
        <tr>
            <td>31</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>32</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>33</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>34</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>35</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>36</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>37</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>38</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>39</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>40</td><td>NC (Optional: I2C_SCL)</td><td> </td><td>No connection by default</td><td>Reserved for connecting to GPS module ZOE-M8Q's I2C_SCL internally</td>
        </tr>
        <tr>
            <td>41</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>42</td><td>NC (Optional: I2C_SDA)</td><td> </td><td>No connection by default</td><td>Reserved for connecting to GPS module ZOE-M8Q's I2C_SDA internally</td>
        </tr>
        <tr>
            <td>43</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>44</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>45</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>46</td><td>GPS_RESET</td><td>DI</td><td>GSP module ZOE-M8Q reset input</td><td>Active low, leave open if not in use</td>
        </tr>
        <tr>
            <td>47</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>48</td><td>NC (Optional: 1PPS)</td><td> </td><td>No connection by default</td><td>Reserved for GPS module  Time pulse output</td>
        </tr>
        <tr>
            <td>49</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>50</td><td>MCU_RESET</td><td>DI</td><td>RESET signal for MCU of RAK5167</td><td>Active low</td>
        </tr>
        <tr>
            <td>51</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>52</td><td>HOST_UART_RX</td><td>DO</td><td>HOST_UART_RX</td><td>Connect to GPS module ZOE-M8Q's UART_TX internally, leave open if not in use</td>
        </tr>
        <tr>
            <td>53</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>54</td><td>HOST_UART_TX</td><td>DI</td><td>HOST_UART_TX</td><td>Connect to GPS module ZOE-M8Q's UART_RX internally, leave open if not in use</td>
        </tr>
        <tr>
            <td>55</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>56</td><td>NC (Optional: 1PPS)</td><td> </td><td>No connection by default</td><td>Reserved for GPS module Time pulse output</td>
        </tr>
        <tr>
            <td>57</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>58</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td></td><td></td><td></td><td rowspan="1" colspan="1"> <b>KEY-M Notch</b> </td><td></td>
        </tr>
        <tr>
            <td>67</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>68</td><td>NC</td><td> </td><td>No connection</td><td> </td>
        </tr>
        <tr>
            <td>69</td><td>NC (CONFIG_1=GND)</td><td> </td><td>No connection by default</td><td>Reserved for CONFIG_1</td>
        </tr>
        <tr>
            <td>70</td><td>3.3&nbsp;V</td><td>PI</td><td>3.3&nbsp;V<sub>DC</sub> supply</td><td> </td>
        </tr>
        <tr>
            <td>71</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>72</td><td>3.3&nbsp;V</td><td>PI</td><td>3.3&nbsp;V<sub>DC</sub> supply</td><td> </td>
        </tr>
        <tr>
            <td>73</td><td>GND</td><td> </td><td>Ground</td><td> </td>
        </tr>
        <tr>
            <td>74</td><td>3.3&nbsp;V</td><td>PI</td><td>3.3&nbsp;V<sub>DC</sub> supply</td><td> </td>
        </tr>
        <tr>
            <td>75</td><td>NC (CONFIG_2=GND)</td><td> </td><td>No connection by default</td><td>Reserved for CONFIG_2</td>
        </tr>
    </tbody>
</table>



#### **LED** Definition

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/RAK5167_LED.png"
  width="75%"
  caption="RAK5167 LED Definition"
/>

#### RF Characteristics

##### Operating Frequencies

The board supports the following LoRaWAN frequency channels, allowing easy configuration while building the firmware from the source code.

| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU868           |
| North America | US915           |
| Asia          | AS923           |
| Australia     | AU915           |
| Korea         | KR920           |
| India         | IN865           |

##### Sensitivity Level

The following table gives the typically sensitivity level of the RAK5167 Concentrator Module.

| Signal Bandwidth (kHz) | Spreading Factor | Sensitivity (dBm) |
| ---------------------- | ---------------- | ----------------- |
| 125                    | 12               | -139              |
| 125                    | 7                | -125              |
| 250                    | 7                | -123              |
| 500                    | 12               | -134              |
| 500                    | 7                | -120              |

#### Electrical Requirements

Stressing the device above one or more of the ratings listed in the Absolute Maximum Rating section may cause permanent damage. These are stress ratings only. Operating the module at these or any conditions other than those specified in the Operating Conditions sections of the specification should be avoided. Exposure to Absolute Maximum Rating conditions for extended periods may affect device reliability.

The operating condition range defines those limits within which the functionality of the device is guaranteed. Where application information is given, it is advisory only and does not form part of the specification.

##### Absolute Maximum Rating

The limiting values given below are following the Absolute Maximum Rating System (IEC 134).

| Symbol    | Description           | Condition                                  | Min         | Max        |
| --------- | --------------------- | ------------------------------------------ | ----------- | ---------- |
| 3V3       | Module supply voltage | Input DC voltage at 3V3 pins               | -0.3&nbsp;V | 3.6&nbsp;V |
| USB       | USB D+/D- pins        | Input DC voltage at USB interface pins     | -           | 3.6&nbsp;V |
| MCU_RESET | RAK5167 reset input   | Input DC voltage at RESET input pin        | -0.3&nbsp;V | 3.6&nbsp;V |
| GPS_PPS   | GPS 1 PPS input       | Input DC voltage at GPS_PPS input pin      | -0.3&nbsp;V | 3.6&nbsp;V |
| Rho_ANT   | Antenna ruggedness    | Output RF load mismatch ruggedness at ANT1 | -           | 10:1 VSWR  |
| Tstg      | Storage temperature   |                                            | -40°&nbsp;C | 85°&nbsp;C |

:::warning ⚠️ WARNING
The product is not protected against over voltage or reversed voltages. If necessary, voltage spikes exceeding the power supply voltage specification, given in the table above, must be limited to values within the specified boundaries by using appropriate protection devices.
:::

##### Maximum ESD

| Parameter | Min | Typical | Max         | Remarks                                    |
| --------- | --- | ------- | ----------- | ------------------------------------------ |
| ESD_HBM   |     |         | 1000&nbsp;V | Charged Device Model JESD22-C101 CLASS III |
| ESD_CDM   |     |         | 1000&nbsp;V | Charged Device Model JESD22-C101 CLASS III |

:::tip 📝 NOTE
Although this module is designed to be as robust as possible, electrostatic discharge (ESD) can damage the module. This module must be protected at all times from ESD when handling or transporting. Static charges may easily produce potentials of several kilovolts on the human body or equipment, which can discharge without detection. Industry-standard ESD handling precautions should be used at all times.
:::

##### Power Consumption

| Mode             | Condition                                                         | Min         | Typical      | Max         |
| ---------------- | ----------------------------------------------------------------- | ----------- | ------------ | ----------- |
| Active Mode (TX) | The power of the TX channel is 27&nbsp;dBm and 3.3&nbsp;V supply. | 511&nbsp;mA | 512&nbsp;mA  | 513&nbsp;mA |
| Active Mode (RX) | TX disabled and RX enabled.                                       | 70&nbsp;mA  | 81.6&nbsp;mA | 101&nbsp;mA |

##### Power Supply Range

Input voltage at **3V3** must be above the normal operating range minimum limit to switch on the module.

| Symbol | Parameter                             | Min      | Typical    | Max        |
| ------ | ------------------------------------- | -------- | ---------- | ---------- |
| 3V3    | Module supply operating input voltage | 3&nbsp;V | 3.3&nbsp;V | 3.6&nbsp;V |

#### Mechanical Characteristics

The board weighs 8.2&nbsp;grams, it is 22&nbsp;mm wide and 80&nbsp;mm tall. The dimensions of the module fall completely within the PCI Express M.2 Card Electromechanical Specification, except for the card's thickness (3.7&nbsp;mm at its thickest).

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/RAK5167_Dimensions.png"
  width="20%"
  caption="RAK5167 Dimensions"
/>

#### Environmental Requirements

##### Operating Conditions

| Parameter                    | Min         | Typical     | Max         | Remarks                                                                            |
| ---------------------------- | ----------- | ----------- | ----------- | ---------------------------------------------------------------------------------- |
| Normal operating temperature | -40°&nbsp;C | +25°&nbsp;C | +85°&nbsp;C | Normal operating temperature range (fully functional and meet 3GPP specifications) |

:::tip 📝 NOTE
Unless otherwise indicated, all operating condition specifications are at an ambient temperature of 25°&nbsp;C. Operation beyond the operating conditions is not recommended and extended exposure beyond them may affect device reliability.
:::

#### Schematic Diagram

RAK5167 M.2 concentrator module was designed by RAKWireless for SX1303. The USB interface can be used on the M.2 connector. **Figure 6** shows the minimum application schematic of the RAK5167. You should use at least 3.3&nbsp;V / 1&nbsp;A DC power, connect the USB interface to the main processor.

<rk-img
  src="/assets/images/wislink-lora/rak5167/datasheet/rak5167-Schematic-Diagram.png"
  width="70%"
  caption="Schematic Diagram"
/>

## Models / Bundles

In general, the RAK5167's variation is defined as **RAK5167 - XYZ**, where **X**, **Y**, **Z** is the model variant. Take a look at the tables below to know the variants and their specification.

| Symbol                  | Description                 |
| ----------------------- | --------------------------- |
| X - Supported region    | 1 - US915; 2 - EU868        |
| Y - GPS Module          | 1 - GPS; 2 - No GPS         |
| Z - Additional features | 0 - No additional features; |

| Model       | Frequency | GPS  |
| ----------- | --------- | ---- |
| RAK5167-110 | US915     | √    |
| RAK5167-120 | US915     |      |
| RAK5167-210 | EU868     | √    |
| RAK5167-220 | EU868     |      |

