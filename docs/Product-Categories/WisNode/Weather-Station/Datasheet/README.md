---
rak_desc: Provides comprehensive information of your Weather Station Solution to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisnode/weather-station/weather-station-solution.png
prev: ../Supported-LoRa-Network-Servers/
next: false
tags:
  - datasheet
  - Sensor Hub Solutions
  - Weather Station
---

# Weather Station Solution Datasheet

## Solution Overview

### Description

The Weather Station Solution is a mini ultrasonic weather, built with RAK Sensor Hub and RK900-09. It incorporates integrated ultrasonic wind speed and direction sensors, along with high-precision digital temperature, humidity, and pressure sensors.

The weather station features a high-strength structural design that enables it to function reliably even in harsh climates and environments. This solution is ideal for environmental monitoring, industry, agriculture, and transportation.


### Features

- Support LoRa and NB-IoT/LTE CAT-M wireless communication modes
- Support LoRaWAN frequency bands: CN470, EU868, IN865, RU864, US915, AU915, KR920, and AS923-1/2/3/4
- Easy to install and configure
- Configurable network access with the WisToolBox mobile app
- RS485 output
- High precision
- Versatile climate assessment
- High-strength structural design
- IP rating: IP65
- Support solar panel and 12&nbsp;V<sub>DC</sub> power adapter for power supply

## Specifications

### Sensor Hub Specifications

For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/Hub-Datasheet/#description" target="_blank">RAK2560 WisNode Sensor Hub Datasheet</a>.

### Sensor Probe IO + Weather Station Sensor Specifications

<b>Sensor Probe IO Datasheet</b>

- For details, refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisNode/RAK2560/IO-Datasheet/#overview" target="_blank">Probe IO Datasheet</a>.

<b>Micro Weather Sensor Datasheet</b>

<table>
  <thead>
    <tr>
      <th>Monitoring Item</th>
      <th>Parameter Content</th>
      <th>Range</th>
      <th>Resolution</th>
      <th>Precision</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Wind Speed</td>
      <td>Ultrasonic Wave</td>
      <td>0 ~ 40&nbsp;m/s</td>
      <td>0.01&nbsp;m/s</td>
      <td>±0.5+2%FS</td>
    </tr>
    <tr>
      <td>Wind Direction</td>
      <td></td>
      <td>0 ~ 359°</td>
      <td>1°</td>
      <td>±3°</td>
    </tr>
    <tr>
      <td>Atmospheric Temperature</td>
      <td>MEMS</td>
      <td>-40 ~ +100°&nbsp;C</td>
      <td>0.1°&nbsp;C</td>
      <td>±0.5°&nbsp;C</td>
    </tr>
    <tr>
      <td>Atmospheric Humidity</td>
      <td></td>
      <td>0 ~ 100%RH</td>
      <td>0.1%RH</td>
      <td>±3%</td>
    </tr>
    <tr>
      <td>Atmospheric Pressure</td>
      <td></td>
      <td>10 ~ 1100&nbsp;hPa</td>
      <td>0.1&nbsp;hPa</td>
      <td>±1.5&nbsp;hPa</td>
    </tr>
    <tr>
      <td>Power Supply</td>
      <td>12&nbsp;V<sub>DC</sub></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Output</td>
      <td>RS485</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Communication Protocol</td>
      <td>Modbus-RTU</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Power Consumption</td>
      <td>0.6&nbsp;W</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td></td>
      <td>-40 ~ +80°&nbsp;C</td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>IP Rating</td>
      <td>IP65</td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td>Main Materials</td>
      <td>ABS + Aluminum alloy</td>
      <td></td>
      <td></td>
      <td></td>
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
      <td>State of charge</td>
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
      <td>The intermediate energy storage unit comprises several individual cells, circuitry components, and electrical and communication interfaces.</td>
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
      <td>The amount of electrical charge that a fully charged battery can store and subsequently provide to a device or system. <br> Unit: Ampere-hours (Ah)</td>
    </tr>
    <tr>
      <td>Energy Capacity</td>
      <td>The total amount of energy that a fully charged battery can deliver under specific conditions. <br> Unit: Watt-hours (Wh) or kilowatt-hours (kWh)</td>
    </tr>
    <tr>
      <td>Rated Capacity</td>
      <td>At the beginning of life (BOL), the minimum capacity that a fully charged battery can provide at a discharge rate of 1&nbsp;C (discharge C-rate).</td>
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
      <td>H18650CH or products of the same level</td>
    </tr>
    <tr>
      <td>Rated Capacity</td>
      <td>5200&nbsp;mAh</td>
      <td>5.2&nbsp;Ah</td>
    </tr>
    <tr>
      <td>Rated Voltage</td>
      <td>10.8&nbsp;V</td>
      <td>Single cell voltage 3.6&nbsp;V</td>
    </tr>
    <tr>
      <td>Operating Voltage Range</td>
      <td>9&nbsp;V～12.6&nbsp;V</td>
      <td></td>
    </tr>
    <tr>
      <td>Rated Power</td>
      <td>56.16&nbsp;Wh</td>
      <td></td>
    </tr>
    <tr>
      <td>SOC Transportation Range</td>
      <td>0.5</td>
      <td></td>
    </tr>
    <tr>
      <td>Operating Temperature</td>
      <td>Charging temperature:  <br> 0°&nbsp;C ~ 45°&nbsp;C</td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td>Discharging temperature: <br> -20°&nbsp;C ~ 60°&nbsp;C</td>
      <td></td>
    </tr>
    <tr>
      <td>Storage Temperature</td>
      <td>-20°&nbsp;C ~ 60°&nbsp;C</td>
      <td>Over 3 months @ 25°&nbsp;C</td>
    </tr>
    <tr>
      <td>Operating Humidity</td>
      <td>20 ~ 80%RH</td>
      <td></td>
    </tr>
    <tr>
      <td>PV input</td>
      <td>18&nbsp;V/1.0&nbsp;A</td>
      <td>Typical</td>
    </tr>
    <tr>
      <td>Maximum PV Input Voltage</td>
      <td>30&nbsp;V</td>
      <td>Open circuit voltage</td>
    </tr>
    <tr>
      <td>Maximum Charging Continuous Current</td>
      <td>0.2&nbsp;C (1.0&nbsp;A)</td>
      <td>Limited by solar chargers</td>
    </tr>
    <tr>
      <td>Maximum Discharge Continuous Current</td>
      <td>0.4&nbsp;C (2.0&nbsp;A)</td>
      <td></td>
    </tr>
    <tr>
      <td>∆ Voltage</td>
      <td>≤20&nbsp;mV</td>
      <td>Rest for at least 2&nbsp;hours after charging or discharging</td>
    </tr>
    <tr>
      <td>Weight</td>
      <td>0.85&nbsp;Kg</td>
      <td></td>
    </tr>
    <tr>
      <td>Size</td>
      <td>Length: 180 (±3)&nbsp;mm <br> Width: 130 (±3)&nbsp;mm <br> Height: 60 (±3)&nbsp;mm</td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Interfaces

##### Battery System Structure

As shown in **Figure 1**, the RAK9154 battery system comprises two sets of three 2600&nbsp;mAh battery units connected in series. The system also incorporates one (1) BMS board integrated with an 18&nbsp;V input solar charger.

<rk-img
src="/assets/images/wisnode/weather-station/datasheet/2.battery-system-structure.png"
width="60%"
caption="RAK9154 battery system"
/>

#### Electrical Characteristics

<rk-img
src="/assets/images/wisnode/weather-station/datasheet/3.electrical-diagram.png"
width="70%"
caption="RAK9154 electrical diagram"
/>

<rk-img
src="/assets/images/wisnode/weather-station/datasheet/4.system-circuit-diagram.png"
width="70%"
caption="System circuit schematic"
/>

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
      <td rowspan = "4">SP11  <br> IP67 <br> Rated current 2&nbsp;A  <br> Contact diameter 0.75&nbsp;mm * 4</td>
    </tr>
    <tr>
      <td>Pin2: P-</td>
    </tr>
    <tr>
      <td>Pin3: R485A</td>
    </tr>
    <tr>
      <td>Pin4: RS485B</td>
    </tr>
    <tr>
      <td rowspan = "5">Sensor Hub Load</td>
      <td rowspan = "5">SP1110/P5</td>
      <td rowspan = "5">SP1110/P5-N</td>
      <td>Pin1: P+</td>
      <td rowspan = "5">SP11  <br> IP67 <br> Rated current 2&nbsp;A  <br> Contact diameter 0.75&nbsp;mm * 4</td>
    </tr>
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
      <td rowspan = "2">SP11  <br> IP67 <br> Rated current 2&nbsp;A  <br> Contact diameter 0.75&nbsp;mm * 4</td>
    </tr>
    <tr>
      <td>Pin1: PV-</td>
    </tr>
  </tbody>
</table>

#### Sensor Characteristics

The following table shows the sensor data definition and the data format of the Weather Station Solution.

- <b>Register Summary</b>

| Register Name  | Function Code | Register Address | Data Length | Sensor Code | Ratio    | Unit          | Resolution         | Range | Precision |
| -------------- | ------------- | ---------------- | ----------- | ----------- | -------- | ------------- | ------------------ | ----- | --------- |
| Wind Speed     | 0x03          | 0x0000           | 2           | 0xBE        | m/s      | 0.01&nbsp;m/s | 0 ~ 40&nbsp;m/s    | 0.01  |
| Wind Direction | 0x03          | 0x0001           | 2           | 0xBF        | °        | 1°            | 0 ~ 359°           | 1     |
| Temperature    | 0x03          | 0x0002           | 2           | 0x67        | °&nbsp;C | 0.1°&nbsp;C   | -40 ~ 100°&nbsp;C  | 0.1   |
| High Humidity  | 0x03          | 0x0003           | 2           | 0x70        | %        | 0.1%RH        | 0 ~ 100%RH         | 0.1   |
| Pressure       | 0x03          | 0x0004           | 2           | 0x73        | mbar     | 0.1&nbsp;hPa  | 10 ~ 1100&nbsp;hPa | 0.1   |

- <b>Data Interpretation</b>

| Sensor Data Unit | ID (Channel) | Type   | Data    |
| ---------------- | ------------ | ------ | ------- |
| Wind Speed       | 1 Byte       | 1 Byte | 2 Bytes |
| Wind Direction   | 1 Byte       | 1 Byte | 2 Bytes |
| Temperature      | 1 Byte       | 1 Byte | 2 Bytes |
| Humidity         | 1 Byte       | 1 Byte | 2 Bytes |
| Air Pressure     | 1 Byte       | 1 Byte | 2 Bytes |

With the defined data, here's how to interpret the payload received data:

<b>Data Sample 1:</b><br>

Payload (hex) received data: `1be000002bf000003670122047001ac057324fe`

| Sensor Data Unit | ID (Channel) | Type | Data |
| ---------------- | ------------ | ---- | ---- |
| Wind Speed       | 01           | be   | 0000 |
| Wind Direction   | 02           | bf   | 0000 |
| Temperature      | 03           | 67   | 0122 |
| Humidity         | 04           | 70   | 01ac |
| Air Pressure     | 05           | 73   | 24fe |

Convert the sensor data from hexadecimal to decimal:

- **Wind Speed**: `01be`
- **Data**: `0000`

```
0000 (hex) = 0 (dec)
0 x 0.01 (conversion factor) = 0 m/s
```

- **Wind Direction**: `02bf`
- **Data**: `0000`

```
0000 (hex) = 0 (dec)
0 x 1 (conversion factor) = 0°
```

- **Temperature**: `0367`
- **Data**: `0122`

```
0122 (hex) = 290 (dec)
290 x 0.1 (conversion factor) = 29° C
```

- **Humidity**: `0470`
- **Data**: `01ac`

```
01ac (hex) = 428 (dec)
428 x 0.1 (conversion factor) = 42.8%RH
```

- **Air Pressure**: `0573`
- **Data**: `24fe`  

```
24fe (hex) = 9470 (dec)
9470 x 0.1 (conversion factor) = 947 hPa
```

<b> Data Sample 2: </b><br>

Payload (hex) received data: `01be00c002bf000403670122047001ac057324ff`

| Sensor Data Unit | ID (Channel) | Type | Data |
| ---------------- | ------------ | ---- | ---- |
| Wind Speed       | 01           | be   | 00c0 |
| Wind Direction   | 02           | bf   | 0004 |
| Temperature      | 03           | 67   | 0122 |
| Humidity         | 04           | 70   | 01ac |
| Air Pressure     | 05           | 73   | 24ff |

Convert the sensor data from hexadecimal to decimal:

- **Wind Speed**: `01be`
- **Data**: `00c0`

```
00c0 (hex) = 192 (dec)
192 x 0.01 (conversion factor) = 1.92 m/s
```

- **Wind Direction**: `02bf`
- **Data**: `0004`

```
0004 (hex) = 4(dec)
4 x 1 (conversion factor) = 4°
```

- **Temperature**: `0367`
- **Data**: `0122`

```
0122 (hex) = 290 (dec)
290 x 0.1 (conversion factor) = 29° C
```

- **Humidity**: `0470`
- **Data**: `01ac`

```
01ac (hex) = 428 (dec)
428 x 0.1 (conversion factor) = 42.8%RH
```

- **Air Pressure**: `0573`
- **Data**: `24ff`  

```
24ff (hex) = 9471 (dec)
9471 x 0.1 (conversion factor) = 947.1 hPa
```


#### Environmental Requirements

##### Transportation Requirements

:::warning ⚠️ WARNING
- When transporting the battery, avoid severe vibrations, shaking, and exposure to sunlight or rain. 
- Do not invert the battery to prevent potential short circuits. 
- During loading and unloading, exercise caution to prevent the battery from falling, rolling, enduring heavy pressure, or being inverted.
:::

##### Storage Requirements

Store the module in a partially charged state, typically around 40 % state of charge (SOC). Ensure the storage environment meets the following requirements:

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


<!-- #### Mechanical Characteristics

The appearance of the RAK9154 battery system is shown below. The battery system consists of two sets of three 2600&nbsp;mAh battery cells connected in series and one BMS board that integrated a 18&nbsp;V input solar charger.

##### Battery Dimensions

<rk-img
src="/assets/images/wisnode/weather-station/datasheet/5.rak9154-dimensions.png"
width="35%"
caption="RAK9154 Dimensions"
/> -->

