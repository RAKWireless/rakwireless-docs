---
rak_img: /assets/images/wisnode/environmental-monitoring/environmental-monitoring.png
rak_desc: Provides comprehensive information on your Environmental Monitoring Solution to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
  - datasheet
  - Sensor Hub
  - Sensor Hub Solutions
  - Environmental Monitoring
---

# Environmental Monitoring Solution Datasheet

## Solution Overview

### Description

The Environmental Monitoring solution offers an effective tool for monitoring temperature and humidity levels, comprising the RAK Sensor Hub and the RAK1901 WisBlock Temperature and Humidity Sensor inside the Sensor Probe. This comprehensive monitoring system is well-suited for various applications, including agricultural greenhouses, incubators, and smart cities.

With the plug-and-play feature of the Sensor Hub, the Environmental Monitoring Solution comes with pre-installed components ready for easy installation and connection. The sensor provides highly accurate temperature and humidity readings, with the Sensor Hub collecting and transmitting the data via LoRaWAN or NB-IoT/CAT M1.

The Sensor Hub’s connectivity function allows for versatile data transmission to the cloud using the two most used communication protocols in IoT. This versatility ensures that data is readily available for storage, visualization, and in-depth analysis, enabling informed decision-making based on comprehensive knowledge of temperature and humidity levels.

### Features

- Support LoRaWAN and NB-IoT/LTE CAT-M wireless communication modes
- Supported frequency bands: CN470, EU868, IN865, RU864, US915, AU915, KR920, and AS923-1/2/3/4
- Easy to install and configure
- Configurable network access with the WisToolBox mobile app
- Automatic recognition of sensor type
- Long transmission distance
- High-strength structural design
- IP rating: IP67
- Support solar panel and 12&nbsp;V<sub>DC</sub> power adapter for power supply 
- Temperature measure range: -40°&nbsp;C ~ +125°&nbsp;C
- Temperature accuracy: ±2%°&nbsp;C
- Temperature resolution: 0.01°&nbsp;C
- Humidity measure range: 0~100%RH
- Humidity precision: ±2.0%RH
- Humidity resolution: 0.01%RH

## Specifications

### Sensor Hub Specifications

For detailed information about the Sensor Hub, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Hub-Datasheet/#description" target="_blank">Sensor Hub Datasheet</a>.

### Sensor Probe IO + RAK1901 Temperature & Humidity Sensor Specifications

<b>Sensor Probe IO Datasheet</b>

- Refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/IO-Datasheet/" target="_blank">Probe IO Datasheet</a> for more details.

<b>Temperature and Humidity Sensor Datasheet</b>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Technical Specifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="3">Temperature</td>
      <td>Range: -40°&nbsp;C~+125°&nbsp;C</td>
    </tr>
    <tr>
      <td>Resolution: 0.01°&nbsp;C</td>
    </tr>
    <tr>
      <td>Precision: ± 2.0°&nbsp;C</td>
    </tr>
    <tr>
      <td rowspan="3">Humidity</td>
      <td>Range: 0~100%&nbsp;RH</td>
    </tr>
    <tr>
      <td>Resolution: 0.01%&nbsp;RH</td>
    </tr>
    <tr>
      <td>Precision: ± 2.0%&nbsp;RH</td>
    </tr>
    <tr>
      <td>Power Supply (module power supply)</td>
      <td>3.3 V<sub>DC</sub></td>
    </tr>
    <tr>
      <td>Output Signal</td>
      <td>UART</td>
    </tr>
    <tr>
      <td>Sensor Communication Protocol</td>
      <td>I2C</td>
    </tr>
    <tr>
      <td>Sleep Current</td>
      <td>14 µA</td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>-30°&nbsp;C~+80°&nbsp;C</td>
    </tr>
    <tr>
      <td>IP Rating</td>
      <td>IP67</td>
    </tr>
    <tr>
      <td>Measuring Current (normal mode)</td>
      <td>3.5&nbsp;mA</td>
    </tr>
    <tr>
      <td>Measuring Current (low power mode)</td>
      <td>3.2&nbsp;mA</td>
    </tr>
    <tr>
      <td>Main Materials</td>
      <td>ABS</td>
    </tr>
  </tbody>
</table>


### Solar Cell System Datasheet

#### Definition of Terms

<b>List of Abbreviations</b>

| Abbreviation | Definition                  |
|--------------|-----------------------------|
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
<table>
  <thead>
    <tr>
      <th>Terminology</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Battery Cell</td>
      <td>Commonly known as a battery. It is the fundamental unit of energy storage, which converts chemical energy to electrical energy.</td>
    </tr>
    <tr>
      <td>Battery Module</td>
      <td>Intermediate energy storage unit, comprising several individual cells and circuitry components, along with electrical and communication interfaces.</td>
    </tr>
    <tr>
      <td>Battery Pack</td>
      <td>A comprehensive power system consisting of multiple battery modules and circuits working together to supply power to electrical devices.</td>
    </tr>
    <tr>
      <td>Rated Voltage</td>
      <td>Refers to the approximate voltage value that a battery is designed to operate at or provide.</td>
    </tr>
    <tr>
      <td>Capacity</td>
      <td>The amount of electrical charge that a fully charged battery can store and subsequently provide to a device or system. It is typically measured in ampere-hours (Ah)</td>
    </tr>
    <tr>
      <td>Energy Capacity</td>
      <td>The total amount of energy that a fully charged battery can deliver under specific conditions. It is typically measured in watt-hours (Wh) or kilowatt-hours (kWh).</td>
    </tr>
    <tr>
      <td>Rated Capacity</td>
      <td>The minimum capacity that a fully charged battery can deliver at the beginning of its life (BOL), typically measured under specific conditions such as a discharge rate of 1C (discharge C-rate).</td>
    </tr>
    <tr>
      <td rowspan = "10">Unit</td>
      <td><b>V</b>: Volt, voltage</td>
    </tr>
    <tr>
      <td><b>A</b>: Ampere, current</td>
    </tr>
    <tr>
      <td><b>Ah</b>: Ampere-hour, electric charge</td>
    </tr>
    <tr>
      <td><b>Wh</b>: Watt-hour, electrical energy</td>
    </tr>
    <tr>
      <td><b>Ω</b>: Ohm, resistance</td>
    </tr>
    <tr>
      <td><b>°&nbsp;C</b>: Celsius, temperature</td>
    </tr>
    <tr>
      <td><b>mm</b>: millimeter, length</td>
    </tr>
    <tr>
      <td><b>s</b>: second, time</td>
    </tr>
    <tr>
      <td><b>kg</b>: kilogram, weight</td>
    </tr>
    <tr>
      <td><b>Hz</b>: Hertz, frequency</td>
    </tr>
  </tbody>
</table>

#### Main Specifications

| Parameter                              | Specifications                                                                                | Remark                                                               |
|----------------------------------------|-----------------------------------------------------------------------------------------------|----------------------------------------------------------------------|
| Battery Model                          | RAK9154                                                                                       |                                                                      |
| Battery Cell Model                     | Rechargeable cylindrical lithium-ion battery H18650CH                                         | H18650CH or equivalent product                                       |
| Rated Capacity                         | 5200&nbsp;mAh                                                                                 | 5.2&nbsp;Ah                                                          |
| Rated Voltage                          | 10.8&nbsp;V                                                                                   | Single battery voltage 3.6&nbsp;V                                    |
| Operating Voltage Range                | 9&nbsp;V~12.6&nbsp;V                                                                          |                                                                      |
| Rated Power                            | 56.16&nbsp;Wh                                                                                 |                                                                      |
| SOC Transportation Range               | 50%                                                                                           |                                                                      |
| Operating Temperature                  | Charging temperature: 0°&nbsp;C~45°&nbsp;C<br>Discharge temperature: -20°&nbsp;C~60°&nbsp;C   |                                                                      |
| Storage Temperature                    | -20°&nbsp;C~60°&nbsp;C                                                                        | More than 3 months @ 25°&nbsp;C                                  |
| Operating Humidity                     | 20~80%&nbsp;RH                                                                                |                                                                      |
| PV Input                               | 18&nbsp;V/1.0&nbsp;A                                                                          | Typical                                                              |
| Maximum PV Input Voltage               | 30&nbsp;V                                                                                     | Open circuit voltage                                                 |
| Maximum Continuous Charging Current    | 0.2&nbsp;C (1.0&nbsp;A)                                                                       | Limited by solar charger                                             |
| Maximum Continuous Discharging current | 0.4&nbsp;C (2.0&nbsp;A)                                                                       |                                                                      |
| ∆ Voltage                              | ≤ 20&nbsp;mV                                                                                  | SOC 30%~60%; rest for at least 2 hours after charging or discharging |
| Weight                                 | 0.85&nbsp;Kg                                                                                  |                                                                      |
| Dimension                              | Length: 180&nbsp;(±3)&nbsp;mm<br>Width: 130&nbsp;(±3)&nbsp;mm<br>Height: 60&nbsp;(±3)&nbsp;mm |                                                                      |


#### Interfaces

##### Battery System Structure

As shown in **Figure 1**, the RAK9154 battery system comprises two sets of three 2600&nbsp;mAh battery units connected in series. The system also incorporates one (1) BMS board integrated with an 18&nbsp;V input solar charger.

<rk-img
  src="/assets/images/wisnode/environmental-monitoring/datasheet/3-appearance-of-the-RAK9154.png"
  width="75%"
  caption="RAK9154 battery system"
/>

#### Electrical Characteristics


<rk-img
  src="/assets/images/wisnode/environmental-monitoring/datasheet/1-Eletrical-Diagram.png"
  width="75%"
  caption="RAK9154 Electrical Diagram"
/>

<rk-img
  src="/assets/images/wisnode/environmental-monitoring/datasheet/2-System-Circuit-Diagram.png"
  width="75%"
  caption="System circuit diagram"
/>

<b>Battery System Panel Connector</b>

<table>
  <thead>
    <tr>
      <th>Connector</th>
      <th>Connector Socket Model</th>
      <th>Connector Plug Model</th>
      <th>Definition</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan = "4">Gateway Load</td>
      <td rowspan = "4">SP1110/P4</td>
      <td rowspan = "4">SP1110/P4-N</td>
      <td>Pin1: P+</td>
      <td rowspan = "4">SP11 <br> IP67 <br> Rated current 2&nbsp;A  <br> Contact diameter 0.75&nbsp;mm * 4</td>
    </tr>
    <tr>
      <td>
       Pin2: P-</td>
    </tr>
    <tr>
      <td>
       Pin3: RS485A</td>
    </tr>
    <tr>
      <td>
       Pin4: RS485B</td>
    </tr>    
    <tr>    
      <td rowspan = "5">Sensor Hub Load</td>
      <td rowspan = "5">SP1110/P5</td>
      <td rowspan = "5">SP1110/P5-N</td>
      <td>Pin1: P+</td>
      <td rowspan = "5">SP11 <br> IP67 <br> Rated current 2&nbsp;A <br> Contact diameter 0.75&nbsp;mm * 5</td>
    <tr>
      <td>Pin2: P-</td>
    </tr>   
    <tr>
      <td>Pin3: TXD</td>
    </tr>   
    <tr>
      <td>Pin4: 3V3_In</td>
    </tr>
    <tr>
      <td>Pin5: RXD</td>
    </tr>   
    <tr>
      <td rowspan = "2">PV Input</td>
      <td rowspan = "2">SP1110/P2</td>
      <td rowspan = "2">SP1110/P2-N</td>
      <td>Pin1: PV+</td>
      <td rowspan = "2">SP11 <br> IP67 <br> Rated current 1&nbsp;A  <br> Contact diameter 0.75&nbsp;mm * 2</td>
    </tr>
    <tr>
      <td>Pin2: PV-</td>
    </tr> 
  </tbody>
</table>

#### Sensor Characteristics

<b>Sensor Data Definition</b>

| Register Name | Function Code | Register Address | Data Length | Sensor Code | Unit      | Resolution   | Range           | Precision |
|---------------|---------------|------------------|-------------|-------------|-----------|--------------|-----------------|-----------|
| Temperature   | 0x03          | 0x0000           | 2           | 0x67        | °&nbsp;C  | 0.1°&nbsp;C  | -40~125°&nbsp;C | 0.1       |
| Moisture      | 0x03          | 0x0001           | 1           | 0x68        | %&nbsp;RH | 0.1%&nbsp;RH | 0~100%&nbsp;RH  | 0.1       |


<b>Data Format</b>

| Sensor Data Unit | ID (Channel) |  Type  |  Data   |
|:----------------:|:------------:|:------:|:-------:|
|   Temperature    |    1 byte    | 1 byte | 2 bytes |
|     Humidity     |    1 byte    | 1 byte | 1 byte  |

With the defined data, here's how to interpret the payload received data:

<b>Data Sample 1:</b><br>

Payload (hex) received data: `016700c802681a`

| Sensor Data Unit | ID (Channel) | Type | Data |
|:----------------:|:------------:|:----:|:----:|
|   Temperature    |      01      |  67  | 00c8 |
|     Humidity     |     102      |  68  |  1a  |

Convert the sensor data from hexadecimal to decimal:

```
0167 (Temperature) - Data 00c8 
(00C8)₁₆ = (0 × 16³) + (0 × 16²) + (12 × 16¹) + (8 × 16⁰) = (200)₁₀ 
200 x 0.1 (conversion factor) = 20° C 
```

```
0268 (Humidity) - Data 1a 
(1A)₁₆ = (1 × 16¹) + (10 × 16⁰) = (26)₁₀ 
26₁₀ = 26%RH 
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

<b>Storage Temperature and Humidity Requirements</b>

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
      <td>2%&nbsp;RH to 90%&nbsp;RH</td>
      <td>< 85% Recommended</td>
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

The operation of the product must adhere to the operating instructions. 
Installation, maintenance, and use of the product must strictly comply with relevant 
safety regulations.

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
