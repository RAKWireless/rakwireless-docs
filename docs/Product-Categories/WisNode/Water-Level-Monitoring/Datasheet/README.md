---
rak_desc: Provides comprehensive information of your Water Level Monitoring Solution to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/water-level-monitoring/water-level-monitoring.png
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
  - datasheet
  - WisNode
---

# Water Level Monitoring Solution Datasheet

## Solution Overview

### Description

The Water Level Monitor Sensor Solution is an ideal tool for monitoring water levels. It comprises the RAK Sensor Hub and ULB16 sensor, which is suitable for use in various settings, such as hydrology exploration, water tank level measurements, and sewage. 

With the plug-and-play feature of the Sensor Hub, the Water Level Solution comes with pre-installed components ready for easy installation and connection. The sensor provides highly accurate water level readings, with the Sensor Hub collecting and transmitting the data via LoRaWAN or NB-IoT/CAT M1.

The Sensor Hub’s connectivity function allows for versatile data transmission to the cloud using the two most commonly used communication protocols in IoT. This versatility ensures that data is readily available for storage, visualization, and in-depth analysis, enabling informed decision-making based on comprehensive knowledge of water levels.


### Features

- Support LoRaWAN and NB-IoT/LTE CAT-M wireless communication modes
- Support LoRa frequency band: CN470, EU868, IN865, RU864, US915, AU915, KR920, AS923-1/2/3/4
- Wide measurement range: 0~200&nbsp;mH2O
- Resolution: 0.25%&nbsp;FS
- Easy to install and configure
- Configurable network access with the WisToolBox mobile app
- Pressure diaphragm in the probe
- Reverse polarity and current limiting protections
- Sturdy and durable structure with IP68 protection rating


## Specifications

### Sensor Hub Specifications

For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Hub-Datasheet/#overview" target="_blank">Sensor Hub Datasheet</a>.

### Sensor Probe IO + Water Level Monitoring Sensor Specifications

<b>Sensor Probe IO Datasheet</b>

- For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/IO-Datasheet/" target="_blank">Probe IO Datasheet</a>.

<b>ULB16 Water Level Sensor Datasheet</b>

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Technical Specifications</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DC Power Supply (default)</td>
      <td>12~36&nbsp;V<sub>DC</sub></td>
    </tr>
    <tr>
      <td>Electrical Connection</td>
      <td>Φ7.6&nbsp;mm shielded cable with vent hose</td>
    </tr>
    <tr>
      <td>Measurement Precision</td>
      <td>0.25~0.5%&nbsp;FS</td>
    </tr>
    <tr>
      <td>Measurement Range</td>
      <td>0~1&nbsp;mH2O - 200&nbsp;mH2O</td>
    </tr>
    <tr>
      <td>Long-Term Stability</td>
      <td>< 0.1%&nbsp;FS/year</td>
    </tr>
    <tr>
      <td>Output Signal</td>
      <td>4~20&nbsp;mA, 0~5&nbsp;V<sub>DC</sub>, 0~10&nbsp;V<sub>DC</sub>, 1~5&nbsp;V<sub>DC</sub></td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>0~70°&nbsp;C</td>
    </tr>
    <tr>
      <td>Material of Housing</td>
      <td>304 Stainless Steel</td>
    </tr>
  </tbody>
</table>

### Solar Cell System Datasheet

#### Definition of Terms

<b>List of Abbreviations</b>

<table>
  <thead>
    <tr>
      <th>Abbreviation</th>
      <th>Definition</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>BMS</td>
      <td>Battery Management System</td>
    </tr>
    <tr>
      <td>BMU</td>
      <td>Battery Management Unit</td>
    </tr>
    <tr>
      <td>BOL</td>
      <td>Begin of Life</td>
    </tr>
    <tr>
      <td>Bus-bar</td>
      <td>Battery Pole Connecting Rod</td>
    </tr>
    <tr>
      <td>CMC</td>
      <td>Cell Manager Circuit</td>
    </tr>
    <tr>
      <td>EOL</td>
      <td>End of Life</td>
    </tr>
    <tr>
      <td>HV</td>
      <td>High Voltage</td>
    </tr>
    <tr>
      <td>LV</td>
      <td>Low Voltage</td>
    </tr>
    <tr>
      <td>OCV</td>
      <td>Open Circuit Voltage</td>
    </tr>
    <tr>
      <td>SOC</td>
      <td>Stage of Charge</td>
    </tr>
  </tbody>
</table>


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

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Technical Specifications</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Battery Model</td>
      <td>RAK9154</td>
      <td></td>
    </tr>
    <tr>
      <td>Battery Cell Model</td>
      <td>Rechargeable cylindrical lithium-ion battery H18650CH</td>
      <td>H18650CH or equivalent product</td>
    </tr>
    <tr>
      <td>Rated Capacity</td>
      <td>5200&nbsp;mAh</td>
      <td></td>
    </tr>
    <tr>
      <td>Rated Voltage</td>
      <td>10.8&nbsp;V</td>
      <td>Single cell voltage 3.6&nbsp;V</td>
    </tr>
    <tr>
      <td>Operating Voltage Range</td>
      <td>9&nbsp;V ~ 12.6&nbsp;V</td>
      <td></td>
    </tr>
    <tr>
      <td>Rated Power</td>
      <td>56.16&nbsp;Wh</td>
      <td></td>
    </tr>
    <tr>
      <td>SOC Transportation Range</td>
      <td>50%</td>
      <td></td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>Charging temperature: <br> 0°&nbsp;C ~ 45°&nbsp;C <br> Discharge temperature: <br> - 20°&nbsp;C ~ 60°&nbsp;C</td>
      <td></td>
    </tr>
    <tr>
      <td>Storage Temperature</td>
      <td>- 20°&nbsp;C ~ 60°&nbsp;C</td>
      <td>More than three months @ 25°&nbsp;C</td>
    </tr>
    <tr>
      <td>Working Humidity</td>
      <td>20 ~ 80%RH</td>
      <td></td>
    </tr>
    <tr>
      <td>PV Input</td>
      <td>18&nbsp;V / 1.0&nbsp;A</td>
      <td>Typical</td>
    </tr>
    <tr>
      <td>Maximum PV Input Voltage</td>
      <td>30&nbsp;V</td>
      <td>Open circuit voltage</td>
    </tr>
    <tr>
      <td>Maximum Continuous Charging Current</td>
      <td>0.2&nbsp;C (1.0&nbsp;A)</td>
      <td>Limited by solar charger</td>
    </tr>
    <tr>
      <td>Maximum Continuous Discharge Current</td>
      <td>0.4&nbsp;C (2.0&nbsp;A)</td>
      <td></td>
    </tr>
    <tr>
      <td>ΔVoltage</td>
      <td>≤ 20&nbsp;mV</td>
      <td>SOC 30% ~ 60%; rest for at least 2 hours after charging or discharging</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>0.85&nbsp;kg</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Interfaces

##### Battery System Structure

As shown in **Figure 1**, the RAK9154 battery system comprises two sets of three 2600&nbsp;mAh battery units connected in series. The system also incorporates one (1) BMS board integrated with an 18&nbsp;V input solar charger.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/datasheet/1.rak9154-battery-system.png"
width="50%"
caption="RAK9154 battery system"
/>

#### Electrical Characteristics

<rk-img
src="/assets/images/wisnode/water-level-monitoring/datasheet/2.rak9154-electrical-diagram.png"
width="70%"
caption="RAK9154 electrical diagram"
/>

<rk-img
src="/assets/images/wisnode/water-level-monitoring/datasheet/3.system-circuit-diagram.png"
width="60%"
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
      <td rowspan = "2">SP11 <br> IP67 <br> Rated current 1&nbsp;A  <br> Contact diameter 1.0&nbsp;mm * 2</td>
    </tr>
    <tr>
      <td>Pin2: PV-</td>
    </tr> 
  </tbody>
</table>

#### Sensor Characteristics


<b>Sensor Data Definition</b>

| Sensor Name        | Sensor Type | Data Length | Scope | Unit |
|--------------------|-------------|-------------|-------|------|
| Water Level Sensor | 0x01        | 2           | 0 ~ 5 | m    |


<b>Data Format</b>

<table>
  <thead>
    <tr>
      <th colspan="3" style="text-align:center">Water Level Sensor _ Data Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID (Channel)</td>
      <td>Type</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>1 byte</td>
      <td>1 byte</td>
      <td>2 bytes</td>
    </tr>
  </tbody>
</table>


<b>Data Sample 1:</b><br>
Payload (hex) received data: **<i>01 02 01 e0</i>**

<b>Water Level Sensor Data Sample 1</b>

<table>
  <thead>
    <tr>
      <th colspan="3" style="text-align:center">Water Level Sensor _ Data Unit</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ID (Channel)</td>
      <td>Type</td>
      <td>Data</td>
    </tr>
    <tr>
      <td>01</td>
      <td>02</td>
      <td>01e0</td>
    </tr>
  </tbody>
</table>

Convert the sensor data from hexadecimal to decimal:

```
0102 (Water Level) - data 01e0
01e0 (hex) = 480 (dec)
0 x 0.01 (conversion coefficient) = 4.8 m/s
```

**Data Conversion** <br>
**Sample:** <br>
A current range of 4~20&nbsp;mA corresponds to a measurement depth range of 0~5&nbsp;m. The water level is converted using a proportional factor of 3.2&nbsp;mA ((20-4)&nbsp;mA / (5-0)&nbsp;m) increasing of the current for every 1 meter increase in depth. The monitored current value is 4.8&nbsp;mA, and the current increases by 4.8-4=0.8&nbsp;mA. Thus, the calculation method is as follows: <br>
**Water Level depth** = 0.8&nbsp;mA/3.2&nbsp;mA x m = 0.25&nbsp;m

#### Environmental Requirements

##### Transportation Requirements

:::warning ⚠️ WARNING
- When transporting the battery, avoid severe vibrations, shaking, and exposure to sunlight or rain. 
- Do not invert the battery to prevent potential short circuits. 
- During loading and unloading, exercise caution to prevent the battery from falling, rolling, enduring heavy pressure, or being inverted.
:::

##### Storage Requirements

Store the module in a partially charged state, typically around 40% state of charge (SOC). Ensure the storage environment meets the following requirements:

<b>Storage Temperature and Humidity Requirements</b>
<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
      <th>Remark</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="2">Temperature</td>
      <td>-30°&nbsp;C to 50°&nbsp;C</td>
      <td>Time period < 3 months</td>
    </tr>
    <tr>
      <td>0°&nbsp;C to 25°&nbsp;C</td>
      <td>Time period > 3 months</td>
    </tr>
    <tr>
      <td>Humidity</td>
      <td>2%RH to 90%RH</td>
      <td>< 85% Recommended</td>
    </tr>
  </tbody>
</table>

- **Storage Environment**: Store the product in a clean, ventilated, and cool environment, avoiding direct sunlight, high temperatures, corrosive gases, severe vibration, mechanical shaking, and heavy pressure. Keep the product away from heat sources and store it at an altitude below 1500&nbsp;meters, maintaining atmospheric pressure between 86&nbsp;kPa and 106&nbsp;kPa.
  
- **Maintenance**: Charge and discharge the device once a month while storing it at room temperature or in a dry and ventilated environment. 
    - If storing the device takes more than 30 days, adjust the SOC to 40% after charging. 
    - If the module is expected to be stored for more than 30 days, adjust the State of Charge (SOC) to 40&nbsp;% after charging is completed.

The operation of the product must adhere to the operating instructions. Installation, maintenance, and usage of the product must strictly comply with relevant safety regulations.

:::warning ⚠️WARNING
-	Avoid storing or using the product in high-temperature environments, and keep it away from heat sources. Temperatures outside the safe range can significantly reduce the performance and lifespan of the product, and may even cause serious consequences such as combustion and explosion.
-	Do not store or use the product in environments with high static electricity or high electromagnetic radiation. Doing so may damage the electronic components of the battery, leading to safety hazards.
-	Avoid exposing the battery to water or immersing it in water. Otherwise, it may result in internal short circuits, loss of function, or abnormal chemical reactions, leading to fire, smoke explosion, and other incidents.
-	If you notice any smoking, heating, discoloration, deformation, or any other abnormalities during the use, storage, transportation, and service of the product, contact a professional immediately for assistance.
-	Do not discard waste batteries in fires or incinerators. Waste batteries should be recycled by professional institutions or organizations.
-	It is strictly prohibited to place heavy objects on the product or stack them on top of each other.
-	Although this module is not a high-voltage energy storage device, improper operation and use of the device may lead to serious consequences such as combustion and explosion. 
-	Only professional technicians must handle the installation and maintenance of the battery system. All operations must strictly adhere to relevant safety regulations. Non-professionals are strictly prohibited from installing, maintaining, and misusing the battery system.
:::

