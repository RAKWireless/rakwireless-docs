---
rak_img: /assets/images/wisnode/soil-monitoring/soil-moisture.png
rak_desc: Provides comprehensive information on your Soil Moisture, Temperature, and Electrical Conductivity Solution to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
  - datasheet
  - Sensor Hub Solutions
  - Soil Monitoring
---

# Soil Moisture, Temperature, and Electrical Conductivity Solution Datasheet

## Solution Overview

### Description

The Soil Moisture, Temperature, and Electrical Conductivity Solution consists of the RAK Sensor Hub and soil sensor RK520-02. This solution provides accurate measurements with a sensor equipped with built-in temperature compensation and a probe that can be permanently embedded in the ground and linked to a data recorder for continuous testing. This comprehensive monitoring system is well-suited for various applications, including agriculture, turf farming, water conservation, and soil testing.

With the plug-and-play feature of the Sensor Hub, the Soil Moisture, Temperature, and Electrical Conductivity Solution comes with pre-installed components ready for easy installation and connection. The sensor provides highly accurate soil readings, with the Sensor Hub collecting and transmitting the data via LoRaWAN or NB-IoT/CAT M1.

The Sensor Hub’s connectivity function allows for versatile data transmission to the cloud using the two most commonly used communication protocols in IoT. This versatility ensures that data is readily available for storage, visualization, and in-depth analysis, enabling informed decision-making based on comprehensive knowledge of Soil Moisture, Temperature, and Electrical Conductivity levels.



### Features

- Support LoRaWAN frequency band: CN470, EU868, IN865, RU864, US915, AU915, KR920, & AS923-1/2/3/4
- Support LoRa and NB-IoT/LTE CAT-M wireless communication modes.
- Durable design for outdoor applications
- Configurable network access with the WisToolBox mobile app
- Accurate and reliable measurements
- External DC power supply (optional)
- Solar panel power source (optional)
- Measure range: 0~1999&nbsp;mg/kg
- Accuracy: ±2%&nbsp;F.s
- Resolution: 1&nbsp;mg/kg (mg/l)
- Working temperature: +5~+45°&nbsp;C
- Working humidity: 5~95%&nbsp;RH, no condensation
- Fully sealed structure, waterproof and can be placed underground (up to 5000&nbsp;mm)


## Specifications

### Sensor Hub Specifications

For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Hub-Datasheet/#description" target="_blank">RAK2560 WisNode Sensor Hub Datasheet</a>.

### Sensor Probe IO + Soil Moisture, Temperature, and Electrical Conductivity Sensor Specifications 

**Sensor Probe IO Datasheet** 

- For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/IO-Datasheet/#overview" target="_blank">Probe IO Datasheet</a>.

**RK520-02 Soil Moisture, Temperature, and Electrical Conductivity Sensor Datasheet**

| Parameter                  | Technical Specifications                                                                  |
| -------------------------- | ----------------------------------------------------------------------------------------- |
| Moisture Range             | 0~100% (m<sup>3</sup>/m<sup>3</sup>) <br> 0~50% (m<sup>3</sup>/m<sup>3</sup>)             |
| Temperature Range          | -30°&nbsp;C~+70°&nbsp;C                                                                   |
| EC Range                   | 0-10&nbsp;mS/cm                                                                           |
| Moisture Precision         | ±2% (0~50%) <br> ±3% (51~100%)                                                            |
| Temperature Precision      | ± 0.5°&nbsp;C                                                                             |
| EC Precision               | ± 3%&nbsp;FS                                                                              |
| Output Signal              | RS485, 0~2&nbsp;V                                                                         |
| Response Time              | <1&nbsp;s                                                                                 |
| Effective Measurement Area | With the probe as the center, a diameter of 70&nbsp;mm and height of 70&nbsp;mm cylinder. |
| Housing                    | ABS                                                                                       |
| Dimensions                 | 45 * 15 * 145&nbsp;mm (probe: 3 * Ø3 * 70&nbsp;mm)                                        |
| Operating Temperature      | -40°&nbsp;C~+80°&nbsp;C                                                                   |
| IP Rating                  | IP68                                                                                      |
| Storage                    | 10-60°&nbsp;C @ 20%-90%&nbsp;RH                                                           |
| Probe Material             | 316L stainless steel                                                                      |

### Solar Cell System Datasheet

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

<b> Terminologies </b>

| Terminology     | Definition                                                                                                                                                                                                                                                                                                                         |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Battery Cell    | Commonly known as a battery. It is the fundamental unit of energy storage, which converts chemical energy to electrical energy.                                                                                                                                                                                                    |
| Battery Module  | The intermediate energy storage unit comprises several individual cells, circuitry components, and electrical and communication interfaces.                                                                                                                                                                                        |
| Battery Pack    | A comprehensive power system consisting of multiple battery modules and circuits working together to supply power to electrical devices.                                                                                                                                                                                           |
| Rated Voltage   | Refers to the approximate voltage value that a battery is designed to operate at or provide.                                                                                                                                                                                                                                       |
| Capacity        | The amount of electrical charge that a fully charged battery can store and subsequently provide to a device or system. <br> Unit: Ampere-hours (**Ah**)                                                                                                                                                                            |
| Energy Capacity | The total amount of energy that a fully charged battery can deliver under specific conditions. <br> Unit: Watt-hours (**Wh**) or kilowatt-hours (**kWh**)                                                                                                                                                                          |
| Rated Capacity  | At the beginning of life (BOL), the minimum capacity that a fully charged battery can provide is at a discharge rate of 1 C (discharge C-rate).                                                                                                                                                                                    |
| Unit            | **V**: Volt, Voltage <br> **A**: Ampere, current <br> **Ah**: Ampere-hour, charge <br> **Wh**: Watt-hour, electrical energy <br> **Ω**: Ohm, Electrical resistance <br> **°C**: degrees Celsius, temperature <br> **mm**: millimeter, length <br> **s**: seconds, time <br> **kg**: kilogram, weight <br> **Hz**: Hertz, frequency |


#### Main Specifications 

| Parameter                              | Specifications                                                                                | Remark                                                                           |
| -------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- |
| Battery Model                          | RAK9154                                                                                       |                                                                                  |
| Battery Cell Model                     | Rechargeable cylindrical lithium-ion battery H18650CH                                         | H18650CH or equivalent product                                                   |
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
| Dimension                              | Length: 180&nbsp;(±3)&nbsp;mm<br>Width: 130&nbsp;(±3)&nbsp;mm<br>Height: 60&nbsp;(±3)&nbsp;mm |                                                                                  |


#### Interfaces

##### Battery System Structure

As shown in **Figure 1**, the RAK9154 battery system comprises two sets of three 2600&nbsp;mAh battery units connected in series. The system also incorporates one (1) BMS board integrated with an 18&nbsp;V input solar charger.

<rk-img
  src="/assets/images/wisnode/soil-monitoring/datasheet/3-appearance-of-the-RAK9154.png"
  width="75%"
  caption="RAK9154 battery System"
/>

#### Electrical Characteristics


<rk-img
  src="/assets/images/wisnode/soil-monitoring/datasheet/1-Eletrical-Diagram.png"
  width="75%"
  caption="RAK9154 Electrical Diagram"
/>

<rk-img
  src="/assets/images/wisnode/soil-monitoring/datasheet/2-System-Circuit-Diagram.png"
  width="75%"
  caption="System circuit diagram"
/>

| Connector           | Connector Socket Model | Connector Plug Model | Definition                                                             | Remark                                                               |
| ------------------- | ---------------------- | -------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------- |
| **Gateway Load**    | SP1110/P4              | SP1110/P4-N          | Pin1: P+ <br> Pin2: P- <br> Pin3: R485A <br> Pin4: RS485B              | SP11 <br> IP67 <br> Rated current 2A <br> Contact diameter 0.75mm *4 |
| **Sensor Hub Load** | SP1110/P5              | SP1110/P5-N          | Pin1: P+ <br> Pin2: P- <br> Pin3: TXD <br> Pin4: 3V3_In <br> Pin5: RXD | SP11 <br> IP67 <br> Rated current 2A <br> Contact diameter 0.75mm *5 |
| **PV Input**        | SP1110/P2              | SP1110/P2-N          | Pin1: PV+ <br> Pin2: PV-                                               | SP11 <br> IP67 <br> Rated current 1A <br> Contact diameter 1.0mm *2  |


##### Sensor Characteristics

The following tables show the sensor data definition and the data format of the Soil Moisture, Temperature and Electrical Conductivity Solution.

- <b>Register Summary</b>

| Register Name | Function Code | Register Address | Data Length | Sensor Code | Ratio | Unit  | Resolution       | Range                                | Precision                    |
| ------------- | ------------- | ---------------- | ----------- | ----------- | ----- | ----- | ---------------- | ------------------------------------ | ---------------------------- |
| Temperature   | 0x03          | 0x0000           | 2           | 0x67        | 0.1   | °C    | 0.1°&nbsp;C      | -30~70°&nbsp;C                       | ±0.5°&nbsp;C                 |
| Moisture      | 0x03          | 0x0001           | 2           | 0x70        | 0.1   | %     | 0.1° %           | 0~100% (m<sup>3</sup>/m<sup>3</sup>) | ±2%(0~50%) <br> ±3%(51~100%) |
| EC            | 0x03          | 0x0002           | 2           | 0xC0        | 0.001 | mS/cm | 0.001&nbsp;mS/cm | 0~10&nbsp;mS/cm                      | ±3&nbsp;%FS                  |

- <b>Data Interpretation</b>

| Data Format  | Temperature Sensor Data Unit | Moisture Sensor Data Unit | EC Sensor Data Unit |
| :----------: | :--------------------------: | :-----------------------: | :-----------------: |
| ID (Channel) |            1 byte            |          1 byte           |       1 byte        |
|     Type     |            1 byte            |          1 byte           |       1 byte        |
|     Data     |           2 bytes            |          2 bytes          |       2 bytes       |

With the defined data, here's how to interpret the payload received data:

<b> Data Sample: </b>  

Payload (hexadecimal) received data is: `016700fe0270029e03C00041`

| Data Format  | Temperature Sensor Data Unit | Moisture Sensor Data Unit | EC Sensor Data Unit |
| :----------: | :--------------------------: | :-----------------------: | :-----------------: |
| ID (Channel) |              01              |            02             |         03          |
|     Type     |              67              |            70             |         c0          |
|     Data     |             00fe             |           029e            |        0041         |

Convert the value to decimal:

- **Temperature**: `0167`
- **Data**: `00fe`

```
00fe (hex) = 254 (dec)
254 × 0.1 (conversion factor) ＝ 25.4° C
```

- **Moisture**: `0270`
- **Data**: `029e`

```
029e (hex) = 670 (dec)
670 × 0.1 (conversion factor) = 67%
```

- **EC**: `03c0`
- **Data**: `0041`

```
0041 (hex) = 65 (dec)
65 × 0.001 (conversion factor) ＝ 0.065 mS/cm
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

<b>Temperature and Humidity</b>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Value</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan = "2">Temperature</td>
      <td>-30°&nbsp;C to 50°&nbsp;C, 40% SOC</td>
      <td>Storage time < 3&nbsp;months</td>
    </tr>
    <tr>
      <td>0°&nbsp;C to 25°&nbsp;C, 40% SOC</td>
      <td>Storage time > 3&nbsp;months</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>2%RH to 90%RH</td>
      <td> < 85% Recommended </td>
    </tr>
  </tbody>
</table>

- **Storage Environment**: 
    - Store the product in a clean, ventilated, and cool environment.
    - Avoid direct sunlight, high temperatures, corrosive gases, severe vibration, mechanical shaking, and heavy pressure.
    - Keep the product away from heat sources and store it at an altitude below 1500&nbsp;meters, maintaining atmospheric pressure between 86&nbsp;kPa and 106&nbsp;kPa.

- **Maintenance**: 
    - Charge and discharge the device once a month while storing it at room temperature or in a dry and ventilated environment. 
    - If storing the device takes more than 30 days, adjust the SOC to 40&nbsp;% after charging. 
    - If the module is expected to be stored for more than 30 days, adjust the State of Charge (SOC) to 40% after charging is completed.

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
