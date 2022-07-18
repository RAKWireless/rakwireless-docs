---
rak_desc: Provides comprehensive information about your RAK12034 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak12034/overview/RAK12034_home.png
tags:
  - datasheet
  - wisblock
  - RAK12034
prev: ../Quickstart/
next: false
---

# RAK12034 WisBlock 9-Axis Accelerometer Module Datasheet

## Overview

### Description

The RAK12034 is a 9-axis accelerometer module, part of the RAKwireless WisBlock Sensor series. It is based on BMX160 Bosch Sensor, which is a highly integrated low-power 9-axis sensor providing precise acceleration, angular rate, and geomagnetic measurement in each spatial direction.

Due to its small form factor and low-power consumption, it is ideal for smart wearables. Moreover, you can also use the BSX sensor data fusion software library of Bosch Sensortec to tweak the sensor's performance.

### Possible Applications

- Virtual and augmented reality
- Indoor navigation
- 3D scanning/indoor mapping
- Advanced gesture recognition
- Immersive gaming
- 9-axis motion detection
- Air mouse applications and pointers
- Pedometer/step counting
- Advanced system power management for mobile applications
- Optical image stabilization of camera modules
- Free-fall detection and warranty logging

### Features

- Based on Bosch BMX160
- Very low power consumption: typ. 1585&nbsp;μA in high performance mode
- Selectable acceleration range: ±2&nbsp;g to ±16&nbsp;g
- Gyroscope range: 125&nbsp;°/s to 2000&nbsp;°/s
- Magnetic field range x/y ±1300&nbsp;μT, z ±2500&nbsp;μT
- 3.3&nbsp;V Power supply
- Operating temperature: -40&nbsp;°C ~ 105&nbsp;°C

## Specifications

### Overview 


#### Mounting

The RAK12034 9-Axis Accelerometer Module can be mounted on the sensor slot of any WisBlock Base board.

 <rk-img
  src="/assets/images/wisblock/rak12034/datasheet/mounting.png"
  width="50%"
  caption="RAK12034 WisBlock 9-Axis Accelerometer Module mounting"
/>

### Hardware

The hardware specification is categorized into five parts. It presents the coordinate system, pinouts and the corresponding functions and diagrams of the module. It also covers the electrical and mechanical characteristics that include the tabular data of the functionalities and standard values of the RAK12034 9-Axis Accelerometer Module.

#### Pin Definition

The RAK12034 comprises a standard WisBlock Sensor connector. The WisBlock Sensor connector allows the **RAK12034** module to be mounted on WisBlock Base board, such as RAK5005-O.

The pin order of the connector and the pinout definition are shown in **Figure 2**.

 <rk-img
  src="/assets/images/wisblock/rak12034/datasheet/RAK12034-pinout.svg"
  width="50%"
  caption="RAK12034 WisBlock 9-Axis Accelerometer Module pinout"
/>

::: tip 📝 NOTE
**I2C** related pins: **VCC** and **GND** are connected to WisBlock Sensor connector.
:::

#### Electrical Characteristics

| Symbol | Description                                                                 | Min. | Nom. | Max. | Unit |
| ------ | --------------------------------------------------------------------------- | ---- | ---- | ---- | ---- |
| VCC    | Power supply voltage                                                        | -    | 3.3  | -    | V    |
| IDD    | Accelerometer, gyroscope, and magnetometer in full operation mode           | -    | 1.61 | -    | mA   |
| IDDL   | Accelerometer in low power mode; Gyroscope and magnetometer in suspend mode | -    | 70.3 | -    | uA   |

#### Mechanical Characteristics

##### Board Dimensions

 <rk-img
  src="/assets/images/wisblock/rak12034/datasheet/dimension.png"
  width="60%"
  caption="RAK12034 WisBlock 9-Axis Accelerometer Module mechanical drawing"
/>

##### WisConnector PCB Layout

 <rk-img
  src="/assets/images/wisblock/rak12034/datasheet/pcb-footprint.png"
  width="100%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram

By default, the **AP_AD0** pin is connected to VCC. And the default I2C address of the 9-Axis accelerometer is 1101001.
**R2** and **R3** are not needed in RAK12034 due to pull-up resistors existing on the WisBlock Base board.

<rk-img
  src="/assets/images/wisblock/rak12034/datasheet/schematic.jpg"
  width="100%"
  caption="RAK12034 WisBlock 9-Axis Accelerometer Module schematic diagram"
/>

#### Coordinate System

<rk-img
  src="/assets/images/wisblock/rak12034/datasheet/coordinate.jpg"
  width="40%"
  caption="RAK12034 WisBlock 9-Axis Accelerometer Module coordinate system"
/>


