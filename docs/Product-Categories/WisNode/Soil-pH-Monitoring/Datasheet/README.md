---
rak_img: /assets/images/wisnode/soil-ph-monitoring/SoilpHSol.png
rak_desc: Contains the key features of the Soil pH Monitoring sensor, detailing its main technical specifications, physical attributes, and data configuration.
prev: ../Supported-LoRa-Network-Servers/
tags:
    - Sensor Hub
    - Soil pH
    - Sensor Hub Solutions
---

# Soil pH Monitoring Sensor Datasheet

## Solution Overview

### Description

The Soil pH Sensor Solution is an ideal tool for monitoring soil pH levels. It comprises the RAK Sensor Hub and JXBS-3001-PF 485, which are suitable for use in various settings, such as rice fields and greenhouse cultivation. 

This solution provides a comprehensive and versatile soil condition monitoring system with Sensor Hub’s form factor, which allows for simultaneous connection of different sensors.  

In addition, the sensor features three isolated components: input power supply, sensing probe, and signal output. This design ensures safety, reliability, and easy installation. 

### Features

- Support LoRaWAN and NB-IoT/LTE CAT-M wireless communication modes
- Support LoRa frequency band: CN470, EU868, IN865, RU864, US915, AU915, KR920, AS923-1/2/3/4
- Wide measurement range: 0~1999&nbsp;mg/kg
- Resolution: 1&nbsp;mg/kg (mg/l)
- Easy to install and configure
- Configurable network access with the WisToolBox mobile app 
- pH electrode in the probe 
- Stable signal
- Good linearity

## Hardware Specifications

### Sensor Hub Specifications

If you need detailed information about the Sensor Hub, including technical specifications and features, refer to the [Sensor Hub Datasheet](https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Hub-Datasheet/#overview) page.


### Sensor Probe IO + Soil pH Sensor Specifications

**Sensor Probe IO Datasheet** 

- For details, refer to the [Probe IO Datasheet](https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/IO-Datasheet/#overview).

**Model 485 Soil pH Sensor Datasheet**

| Parameter Name            | Parameter Content                                |
| ------------------------- | ------------------------------------------------ |
| DC Power Supply (default) | 12&nbsp;V<sub>DC</sub> to 24&nbsp;V<sub>DC</sub> |
| Power Consumption         | ≤0.15&nbsp;W                                     |
| pH Test Range             | 3~9&nbsp;pH                                      |
| Long-Term Stability       | ≤5&nbsp;%/year                                   |
| Output Signal             | RS485 output (Modbus protocol)                   |
| Operating Temperature     | 0°&nbsp;C to -55°&nbsp;C                         |
| Responding Speed          | ≤1 5&nbsp;s                                      |


### Solar Cell System Specifications

#### Definition of Terms

<b>List of Abbreviations</b>

| Abbreviation | Definition                  |
| ------------ | --------------------------- |
| BMS          | Battery Management System   |
| BMU          | Battery Management Unit     |
| BOL          | Begin of Life               |
| Bus-bar      | Battery Pole Connecting Rod |
| CMC          | Cell Manager Circuit        |
| EOL          | End of Life                 |
| HV           | High Voltage                |
| LV           | Low Voltage                 |
| OCV          | Open Circuit Voltage        |
| SOC          | Stage of Charge             |


<b>Terminologies</b>

| Terminology     | Definition                                                                                                                                                                                                                                                                                                   |
| --------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Battery Cell    | Commonly known as a battery. It is the fundamental unit of energy storage, which converts chemical energy to electrical energy.                                                                                                                                                                              |
| Battery Module  | The intermediate energy storage unit comprises several individual cells, circuitry components, and electrical and communication interfaces.                                                                                                                                                                  |
| Battery Pack    | A comprehensive power system consisting of multiple battery modules and circuits working together to supply power to electrical devices.                                                                                                                                                                     |
| Rated Voltage   | Refers to the approximate voltage value that a battery is designed to operate at or provide.                                                                                                                                                                                                                 |
| Capacity        | The amount of electrical charge that a fully charged battery can store and subsequently provide to a device or system. Unit: Ampere-hours (**Ah**)                                                                                                                                                           |
| Energy Capacity | The total amount of energy that a fully charged battery can deliver under specific conditions. Unit: Watt-hours (**Wh**) or kilowatt-hours (**kWh**)                                                                                                                                                         |
| Rated Capacity  | The minimum capacity that a fully charged battery can deliver at the beginning of its life (BOL), typically measured under specific conditions such as a discharge rate of 1&nbsp;C (discharge C-rate).                                                                                                      |
| Units           | **V**: Volt, voltage<br>**A**: Ampere, current<br>**Ah**: Ampere-hour, charge<br>**Wh**: Watt-hour, electrical energy<br>**Ω**: Ohm, resistance<br>**°&nbsp;C**: degrees Celsius, temperature<br>**mm**: millimeter, length<br>**s**: seconds, time <br>**kg**: kilogram, weight<br>**Hz**: Hertz, frequency |


#### Main Specifications 

| Parameter                              | Specifications                                                                                | Remark                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Battery Model                          | RAK9154                                                                                       |                                                                                  |
| Battery Cell Model                     | Rechargeable cylindrical lithium-ion battery H18650CH                                         | H18650CH or equivalent product.                                                  |
| Rated Capacity                         | 5200&nbsp;mAh                                                                                 |                                                                                  |
| Rated Voltage                          | 10.8&nbsp;V                                                                                   | Single battery voltage 3.6&nbsp;V                                                |
| Operating Voltage Range                | 9&nbsp;V~12.6&nbsp;V                                                                          |                                                                                  |
| Rated Power                            | 56.16&nbsp;Wh                                                                                 |                                                                                  |
| SOC Transportation Range               | 50%                                                                                           |                                                                                  |
| Operating Temperature                  | Charging temperature: 0°&nbsp;C~45°&nbsp;C<br>Discharge temperature: -20°&nbsp;C~60°&nbsp;C   |                                                                                  |
| Storage Temperature                    | -20°&nbsp;C~60°&nbsp;C                                                                        | More than three months @ 25°&nbsp;C                                              |
| Operating Humidity                     | 20~80°&nbsp;%RH                                                                               |                                                                                  |
| PV Input                               | 18°&nbsp;V/1.0°&nbsp;A                                                                        | Typical                                                                          |
| Maximum PV Input Voltage               | 30&nbsp;V                                                                                     | Open circuit voltage                                                             |
| Maximum Continuous Charging Current    | 0.2&nbsp;C (1.0&nbsp;A)                                                                       | Limited by solar charger                                                         |
| Maximum Continuous Discharging current | 0.4&nbsp;C (2.0&nbsp;A)                                                                       |                                                                                  |
| ∆ Voltage                              | ≤20&nbsp;mV                                                                                   | SOC 30&nbsp;%~60&nbsp;%; rest for at least 2 hours after charging or discharging |
| Weight                                 | 0.85&nbsp;Kg                                                                                  |                                                                                  |
| Size                                   | Length: 180&nbsp;(±3)&nbsp;mm<br>Width: 130&nbsp;(±3)&nbsp;mm<br>Height: 60&nbsp;(±3)&nbsp;mm |                                                                                  |

#### Interfaces

##### Battery System Structure

As shown in **Figure 2**, the RAK9154 battery system comprises two sets of three 2600&nbsp;mAh battery units connected in series. The system also incorporates one (1) BMS board integrated with an 18&nbsp;V input solar charger.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/datasheet/f2pHSolution_dimensions.png"
  width="80%"
  caption="RAK9154 battery system"
/>

#### Electrical Characteristics

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/datasheet/f3pHSolution_bdiagram1.png"
  width="80%"
  caption="RAK9154 electrical diagram"
/>

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/datasheet/f4pHSolution_bdiagram2.png"
  width="80%"
  caption="System circuit diagram"
/>


| Connector           | Connector Socket Model | Connector Plug Model | Definition                                                     | Remark                                                                        |
| ------------------- | ---------------------- | -------------------- | -------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **Gateway Load**    | SP1110/P4              | SP1110/P4-N          | Pin1: P+<br>Pin2: P-<br>Pin3: R485A<br>Pin4: RS485B            | SP11<br>IP67<br>Rated current 2&nbsp;A<br>Contact diameter<br>0.75&nbsp;mm *4 |
| **Sensor Hub Load** | SP1110/P5              | SP1110/P5-N          | Pin1: P+<br>Pin2: P-<br>Pin3: TXD<br>Pin4: 3V3_In<br>Pin5: RXD | SP11<br>IP67<br>Rated current 2&nbsp;A<br>Contact diameter 0.75&nbsp;mm *5    |
| **PV Input**        | SP1110/P2              | SP1110/P2-N          | Pin1: PV+<br>Pin2: PV-                                         | SP11<br>IP67<br>Rated current 1&nbsp;A<br>Contact diameter 1.0&nbsp;mm *2     |


#### Sensor Characteristics

The following table shows the sensor data definition and the data format of the Soil pH Solutions. 

- **Sensor Data Definitions**
  
|      Register Name      | Function Code | Register Address | Data Length | Sensor Code | Ratio | Unit  | Resolution | Range | Precision |
| :---------------------: | :-----------: | :--------------: | :---------: | :---------: | :---: | :---: | :--------: | :---: | :-------: |
| High Precision pH Value |     0x03      |      0x0006      |      2      |    0xC1     | 0.01  |  pH   |  ± 0.3pH   | 3~9pH |  ± 0.3pH  |
| Low Precision pH Value  |     0x03      |      0x000d      |      2      |    0xC2     |  0.1  |  pH   |  ± 0.3pH   | 3~9pH |  ± 0.3pH  |

- **Data Format**

| ID (Channel) |  Type  |  Data   |
| :----------: | :----: | :-----: |
|    1 byte    | 1 byte | 2 bytes |

With the defined data, here's how to interpret the payload received data:

<b> Data Sample 1: </b> 

Payload (hex) received data: `01C1 0320`

| ID (Channel) | Type  | Data  |
| :----------: | :---: | :---: |
|      01      |  C1   | 0320  |

`01C1` (pH) - `0320` (data)

Convert the value to decimal:

```
0320 (hex) = 800 (dec)
800 × 0.01 (conversion factor) = 8 pH
```

<b> Data Sample 2: </b> 

Payload (hex) received data: `01C2 002d`

| ID (Channel) | Type  | Data  |
| :----------: | :---: | :---: |
|      01      |  C2   | 002d  |

`01C2` (pH) - `002d` (data)

Convert the value to decimal:

```
002d (hex) = 45 (dec)
45 × 0.1 (conversion factor) = 4.5 pH
```

#### Environmental Requirements

##### Transportation Requirements

:::warning ⚠️WARNING
- When transporting the battery, avoid severe vibrations, shaking, and exposure to sunlight or rain. 
- Do not invert the battery to prevent potential short circuits. 
- During loading and unloading, exercise caution to prevent the battery from falling, rolling, enduring heavy pressure, or being inverted. 
:::

##### Storage Requirements

Store the module in a partially charged state, typically around 40&nbsp;% state of charge (SOC). Ensure the storage environment meets the following requirements:

**Temperature and Humidity**

| Parameter   | Description                                             | Remark                                             |
| ----------- | ------------------------------------------------------- | -------------------------------------------------- |
| Temperature | -30°&nbsp;C to 50°&nbsp;C  <br> 0°&nbsp;C to 25°&nbsp;C | Time period < 3 months <br> Time period > 3 months |
| Humidity    | 2&nbsp;%RH to 90&nbsp;%RH                               | <85&nbsp;% Recommended                             |

- **Storage Environment**: 
    - Store the product in a clean, ventilated, and cool environment.
    - Avoid direct sunlight, high temperatures, corrosive gases, severe vibration, mechanical shaking, and heavy pressure.
    - Keep the product away from heat sources and store it at an altitude below 1500&nbsp;meters, maintaining atmospheric pressure between 86&nbsp;kPa and 106&nbsp;kPa.

- **Maintenance**: 
    - Charge and discharge the device once a month while storing it at room temperature or in a dry and ventilated environment. 
    - If storing the device takes more than 30 days, adjust the SOC to 40&nbsp;% after charging. 
    - If the module is expected to be stored for more than 30 days, adjust the State of Charge (SOC) to 40&nbsp;% after charging is completed.

The operation of the product must adhere to the provided operating instructions. Installation, maintenance, and usage of this product must strictly comply with relevant safety regulations.

:::warning ⚠️WARNING
- Avoid storing or using the product in high-temperature environments, and keep it away from heat sources. Temperatures outside the safe range can significantly reduce the performance and lifespan of the product, and may even cause serious consequences such as combustion and explosion.
- Do not store or use the product in environments with high static electricity or high electromagnetic radiation. Doing so may damage the electronic components of the battery, leading to safety hazards.
- Avoid exposing the battery to water or immersing it in water. Otherwise, it may result in internal short circuits, loss of function, or abnormal chemical reactions, leading to fire, smoke explosion, and other incidents.
- If you notice any smoking, heating, discoloration, deformation, or any other abnormalities during the use, storage, transportation, and service of the product, contact a professional immediately for assistance.
- Do not discard waste batteries in fires or incinerators. Waste batteries should be recycled by professional institutions or organizations.
- It is strictly prohibited to place heavy objects on the product or stack them on top of each other.
- Although this module is not a high-voltage energy storage device, improper operation and use of the device may lead to serious consequences, such as combustion and explosion.
- Only professional technicians must handle the installation and maintenance of the battery system. All operations must strictly adhere to relevant safety regulations. Non-professionals are strictly prohibited from installing, maintaining, and misusing the battery system.
:::