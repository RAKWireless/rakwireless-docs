---
prev: ../Overview/
next: false
tags: 
  - RAK9155
  - power supply
  - accessories
  - datasheet
rak_desc: Provides comprehensive information about your RAK9155 Battery Plus to help you use it. This information includes technical specifications, characteristics, and requirements.
rak_img: /assets/images/accessories/rak9155/RAK9155.png
certifications:
  - [CE, https://downloads.rakwireless.com/Accessories/RAK9155/Certification/RAK9155_CE_Certification.jpg]
  - [FCC, https://downloads.rakwireless.com/Accessories/RAK9155/Certification/RAK9155_FCC_Certification.jpg]
---

# RAK9155 Battery Plus Datasheet

## Overview


### Description 

Battery Plus is the RAK's latest battery system incorporating a solar charging system and status monitoring. It is specially developed for the WisGate Edge Pro gateways. It will allow reliable outdoor deployment of the gateway in remote off-grid scenarios where the power is unreliable or inaccessible. Not only your gateway will be powered 24/7 with the solar panel option, but you will get all the battery data and status in the WisGateOS’ Web UI locally, and in the WisDM remotely. With its 50Ah battery, your gateway can run for more than 5 days without sun.

### Features

- **Long Life Span** - The Lithium Iron Phosphate battery can be expected to remain serviceable for more than 10 years, considering that it is charged and discharged once a day at room temperature (25 °C).  
- **Integrated Heating Function** - The battery integrates a solar charger and heater, it can be connected to PV panels directly and charged under 0 °C. 
- **Lightweight Design** - The weight of RAK9155 is no more than 8 kg making installation by a single person easier. 
- **High Waterproof Grade** - With IP65 rating of the enclosure, RAK9155 is suitable for both indoor and outdoor environments.
- **Two PV inputs** - One mandatory for primary solar panel and one optional for a second panel, ideal for high-altitude or low-sunlight areas.


## Specifications

### Overview

<rk-img
  src="/assets/images/accessories/rak9155/datasheet/1.png"
  width="80%"
  caption="RAK9155 Battery Plus"
/>

<table>
 <thead><tr><th>Term</th><th>Definition</th></tr></thead>
 <tbody>
 <tr><td>Battery Cell</td><td>The smallest energy storage unit, a basic electrochemical energy storage device, consisting of a positive electrode, a negative electrode, an electrolyte, a separator, and a casing, also called a cell.</td></tr>
 <tr><td rowspan="1">Battery Module</td><td>Intermediate energy storage unit, a combination of several single-unit and circuit devices (monitoring and protection circuits, electrical and communication interfaces), also called modules, placed in a mechanical-electrical unit.</td></tr>
 <tr><td rowspan="1">Battery Pack</td><td>A power supply system consisting of a number of battery modules, circuit equipment (protection circuits, cell management systems, electrical and communication interfaces), and thermal management devices for powering electrical devices.</td></tr>
 <tr><td>Nominal Voltage</td><td>Indicates or identifies an appropriate voltage approximation for the cell.</td></tr>
 <tr><td rowspan="1">Capacity</td><td>The amount of electricity that can be supplied by a fully charged battery under specified conditions. Usually expressed in Ah.</td></tr>
 <tr><td>Energy Capacity</td><td>The energy that can be supplied by a fully charged cell under specified conditions. Usually expressed in Wh or kWh.</td></tr>
 <tr><td>Nominal Capacity</td><td>At the beginning of life (BOL), the minimum capacity that can be provided by a fully charged cell at a rate of 1 C (C-rate).</td></tr>
 <tr><td rowspan="10">Units</td><td>"V" (Volt) Volt (V), voltage unit</td></tr>
 <tr><td>"A" (Ampere) Ampere (A), current unit</td></tr>
 <tr><td>"Ah" (Ampere-Hour) Ampere-hour (Ah), charge unit</td></tr>
 <tr><td>“Wh” (Watt-Hour) Watt-hour (Wh), unit of electrical energy</td></tr>
 <tr><td>“Ω” (Ohm) ohm (Ω), resistance unit</td></tr>
 <tr><td>°C (degree Celsius) Celsius (°C), temperature unit</td></tr>
 <tr><td>"mm" (millimeter) mm (mm), length unit</td></tr>
 <tr><td>"s" (second) seconds (s), time unit</td></tr>
 <tr><td>"kg" (kilogram) kilograms (kg), weight unit</td></tr>
 <tr><td>"Hz" (Hertz) Hertz (Hz), frequency unit</td></tr>
</tbody>
</table>

### Abbreviations

<table>
    <thead><tr><th>Abbreviations</th><th>Meaning</th></tr></thead>
    <tbody>
        <tr><td>BMS</td><td>Battery Management System</td></tr>
        <tr><td rowspan="1">BMU</td><td>Battery Management Unit</td></tr>
        <tr><td rowspan="1">BOL</td><td>Begin of Life</td></tr>
        <tr><td>Bus-bar</td><td>Battery Pole Connecting Rod</td></tr>
        <tr><td rowspan="1">CMC</td><td>Cell Manager Circuit</td></tr>
        <tr><td>EOL</td><td>End of Life</td></tr>
        <tr><td>HV</td><td>High Voltage</td></tr>
        <tr><td>LV</td><td>Low Voltage</td></tr>
        <tr><td>OCV</td><td>Open Circuit Voltage</td></tr>
        <tr><td>SOC</td><td>Stage of charge</td></tr>
    </tbody>
</table>

#### Technical Parameters

The key parameters of the hybrid battery system are as follows:

| Parameter                            | Value                                                            | Notes                                                                                                                        |
| ------------------------------------ | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Battery Type                         | Cathode: Lithium iron phosphate; Anode: Graphite.                |                                                                                                                              |
| Nominal Capacity                     | 50 Ah                                                            |                                                                                                                              |
| Nominal Voltage                      | 12.8 V                                                           | Single-cell voltage 3.2 V.                                                                                                   |
| Operating Voltage  Range             | 10～14.6 V                                                        |                                                                                                                              |
| Rated Energy                         | 640 Wh                                                           |                                                                                                                              |
| Available SOC Range                  | 0 ~ 100%                                                         |                                                                                                                              |
| SOC Transportation  Range            | 50%                                                              |                                                                                                                              |
| Operating Temperature                | Charging  Temperature：0 ℃~55 ℃; Discharge Temperature：-15 ℃～60 ℃ | This operating temperature refers to cell temperature. The ambient temperature range must be narrower than that of the cell. |
| Storage Temperature                  | -20 ~ 50 °C                                                      | If the storage will be longer than three months, store the device at 25 ℃.                                                   |
| Working Humidity                     | 20~80% RH                                                        |                                                                                                                              |
| Standard Charging  Current           | 0.16 C (8 A)                                                     |                                                                                                                              |
| Maximum Charging  Continuous Current | 0.2 C (10 A)                                                     | Limited by a solar charger.                                                                                                  |
| Standard Discharge  Current          | 0.16 C (8 A)                                                     |                                                                                                                              |
| Max Discharge Continuous Current     | 0.2 C (10 A)                                                     |                                                                                                                              |
| ∆Voltage                             | ≤20 mV                                                           | 60 min after put in standby, stopped or after charging/discharging.                                                          |
| Enclosure Flammability rating        | UL94 5VA                                                         | 
| Weight                               | ~8 kg                                                            |                                                                                                                              |
| Dimensions (L/W/H)                   | 499x280x75（±3) mm                                                |                                                                                                                              |

:::tip 📝 NOTE
Unless otherwise stated, all tests in this specification are performed under the following environmental conditions: Temperature: 25±3 °C; Humidity: 65±20% RH.
:::

### Hardware

#### Dimensions and External Surface Requirements

The appearance of the RAK9155 battery system is shown below. The battery system consists of 4 pcs of 50 Ah cells connected in serial and a 1pcs 12V solar charger. The appearance of the assembly has no obvious processing flaws or bumps, no cracks on the surface, and no burrs on the weld.

​                               
<rk-img
  src="/assets/images/accessories/rak9155/datasheet/2.png"
  width="80%"
  caption="RAK9155 Dimensions"
/>


#### Electrical Schematic

<rk-img
  src="/assets/images/accessories/rak9155/datasheet/3.svg"
  width="80%"
  caption="Electrical schematic"
/>

:::tip 📝 NOTE
For reference only, this module does not contain a sampling wiring harness.
:::

<rk-img
  src="/assets/images/accessories/rak9155/datasheet/4.svg"
  width="80%"
  caption="Wiring schematics"
/>


#### Panel Connector Definition

| Connector | Connector  socket model | Connector  plug type | Definition                                      | Note                                                       |
| --------- | ----------------------- | -------------------- | ----------------------------------------------- | ---------------------------------------------------------- |
| Load      | LP-16-J04SX-02-101      | LP-16-C04PE-02-001   | Pin1：P+;  Pin2：P-;  Pin3: RS485A;  Pin4: RS485B | Linco;  IP67; Rated current 10 A; Contact diameter 1.5mm*4 |
| PV INPUT  | LP-16-J02SX-02-101      | LP-16-J02PE-02-001   | Pin1: PV+;  Pin2: PV-                           | Linco; IP67; Rated current 10 A; Contact diameter 1.5mm*2  |

:::tip 📝 NOTE
The Battery Plus RAK9155 features two PV inputs for up to two Solar Panel:

PV Input 1 (Mandatory): Connects to the primary solar panel to charge the battery. 

PV Input 2 (Optional): Can be used for a second solar panel. This is beneficial in high-altitude regions or areas with low sunlight, ensuring adequate charging.
:::

#### Environmental Requirements

#### Transportation Requirements

During transportation, it should be protected from severe vibration, shock, sun, and rain, and should not be inverted to ensure that short circuits will not occur. During the loading and unloading process, it should be handled gently to prevent falling, rolling, heavy pressure, and inversion.

#### Storage Requirements

The module is stored in an incompletely charged state, typically around 40% SOC. Product storage environment requirements are as follows:

- Storage temperature: storage time < 3 months, then stored at -30 ° C ~ 50 ° C, 40%SOC; Storage time > 3 months, then 0 ~ 25 ° C, 40%SOC;
- Storage humidity: humidity is 2%RH~ 90%RH, it is recommended to store in the range of no more than 85%RH;
- Storage environment: The product should be stored in a clean, ventilated, and cool environment, avoiding direct sunlight, high temperature, corrosive gas, severe vibration, mechanical shock and heavy pressure; away from heat source; altitude is less than 1500 meters, atmospheric pressure is 86 ~ 106 kPa.
- Maintenance: In a dry and ventilated environment, recharge is required once every 1 month during storage; the maintenance test method during product storage is as follows:
- Under normal temperature conditions, the product is charged and discharged once every month with standard charging. If the module is expected to be stored for more than 30 days, the SOC will be adjusted to 40% after the charging is completed.
- This product must comply with the operating instructions. Any installation, maintenance, and use of this product must strictly comply with the relevant safety regulations.

:::warning ⚠️ WARNING
- Do not store or use at high temperatures, and must be kept away from heat. These environments above the safe temperature range can cause significant degradation in the performance and life of the product, and even cause serious consequences such as burning and explosion;
- Storage and use in environments with high static or high electromagnetic radiation are prohibited. Otherwise, the electronic components in this product may be damaged, which may cause safety hazards;
- Do not get wet or even soak in water. Otherwise, it may cause an internal short circuit, loss of function, or abnormal chemical reaction of the product, and cause fire, smoke, explosion, and other accidents;
- If you find any abnormalities in smoking, fever, discoloration or deformation, or use, storage, transportation, and service, you should contact the professional department immediately to further observe and control the risks;
- Do not discard discarded products in fire or hot furnaces. Waste batteries should be recycled and recycled by professional agencies or organizations;
- It is forbidden to press heavy objects on the product or stack them on each other;
- Although the module is not a high-pressure energy storage device, non-professionals and improper operation and use may still cause serious consequences such as burning and explosion. The installation and maintenance of the battery system must be operated by professional technicians. The use must strictly abide by the relevant safety regulations; non-professionals are strictly prohibited to install, and repairing battery systems and abuse.
:::


## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
