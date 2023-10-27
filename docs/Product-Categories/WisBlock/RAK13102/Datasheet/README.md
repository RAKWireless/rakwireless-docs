---
rak_desc: Provides comprehensive information about your RAK13102 to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisblock/rak13102/RAK13102.png
tags:
  - datasheet
  - wisblock
  - RAK13102
prev: ../Quickstart/
next: false
---

# RAK13102 WisBlock Blues Notecarrier Module Datasheet

## Overview

### Description

**WisBlock RAK13102 Blues Notecarrier Module** is a part of the WisBlock Wireless series. It provides an interface to connect cellular Blues.IO Notecards to the WisBlock system.

### Features

- M.2 Blues.IO Notecard connector
- Blues Notecard NOTE-NBGL-500
- Quectel BG-95 M3
- Supports LTE-M, NB-IoT and GSM networks
- IPEX connectors for the cellular and GNSS antenna
- USB Type C debug and log output connector
- Nano SIM and ESIM options
- Two WisBlock Sensor Slot connectors
- 3.3&nbsp;V power supply (requires an additional battery for operation)
- Small size: 29&nbsp;mm x 50&nbsp;mm


## Specifications

### Overview

The RAK13102 module can be mounted on the IO slot of the WisBlock Base board. Figure 1 shows the mounting mechanism of the RAK13102 on a WisBlock Base module, such as a RAK19007.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/mounting-mechanism.png"
  width="60%"
  caption="RAK13102 mounting mechanism on a WisBlock Base module"
/>

### Hardware

The hardware specification is categorized into five parts. It shows the chipset of the module and discusses the pinouts and their corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard ratings of the RAK13102 WisBlock GSM/GPRS Module.

#### Chipset

| Vendor   | Part number            |
| -------- | ---------------------- |
| Blues.IO | NoteCard NOTE-NBGL-500 |

#### Pin Definition

The RAK13102 WisBlock Blues Notecarrier module comprises a standard WisBlock IO slot connector. The WisBlock connector allows the RAK13102 module to be mounted on a WisBlock baseboard with an IO slot, such as RAK19007. The pin order of the connector and the pinout definition are shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/rak13102-pin-out.png"
  width="90%"
  caption="RAK13102 Connector Pin Definition"
/>

::: tip 📝 NOTE
- RAK13102 WisBlock IO slot connector utilizes the **I2C** related pins, **ATTNP** via WB_IO5, **VBAT**, **3V3**, and **GND**.

- **VBAT** is the battery voltage input with a max voltage of 4.2&nbsp;V. During cellular data mode, the peak current is ~2000&nbsp;mA, respectively, which exceeds the USB port supply current. That is why you must use a dedicated battery.
:::

::: tip ⚠️ IMPORTANT
This datasheet covers only the specifications of the WisBlock Notecarrier module RAK13102. For detailed information on the Blues.IO Notecard, please check the Blues.IO datasheets from the [Blues Resources](https://dev.blues.io/datasheets/notecard-datasheet/note-nbgl-500/)
:::

#### Power Supply with External 5V

::: tip ⚠️ Info
The RAK13102 module and the connected WisBlock Base Board and Core module can be supplied with a regulated 5&nbsp;V DC supply through the P1 connector on the bottom. A matching connector is available with our [M8 Power Connector.](https://store.rakwireless.com/products/m8-power-connector)
:::

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/ex-power.png"
  width="50%"
  caption="5V supply through M8 power connector"
/>

<rk-img
  src="/assets/images/wisblock/rak13102/quickstart/m8-power.png"
  width="30%"
  caption="M8 power connector"
/>

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Parameter                  | Minimum | Maximum | Unit |
| -------------------------- | ------- | ------- | ---- |
| VBAT                       | -0.3    | +4.2    | V    |
| VBUS                       | -0.3    | +5.5    | V    |
| EX_POWER                   | -0.3    | +5.5    | V    |
| Power supply peak current0 | 0       | 2       | A    |

##### Power Supply Ratings

| Symbol   | Description                      | Condition                               | Min. | Nom. | Max. | Unit |
| -------- | -------------------------------- | --------------------------------------- | ---- | ---- | ---- | ---- |
| VBAT     | Supply Voltage                   | Input voltage must be within this range | 3.3  | 4.0  | 4.2  | V    |
| EX_POWER | Supply Voltage                   | Input voltage must be within this range | 4.5  | 5.0  | 5.5  | V    |

#### Mechanical Characteristics

##### Board Dimensions

**Figure 5** shows the dimensions and the mechanical drawing of the RAK13102 module.

::: tip ⚠️ IMPORTANT
The dimensions are without the Blues Notecard!
:::

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/mechanical_drawing.png"
  width="50%"
  caption="RAK13102 Mechanical Drawing"
/>

##### WisConnector PCB Layout

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/MxxS1003K6M.png"
  width="100%"
  caption="WisConnector PCB Footprint and Recommendations"
/>

#### Schematic Diagram

##### Power Supply

The Blues.IO Notecard main power supply comes from **VBAT**, which is a battery voltage connected to the WisBlock Base board. **EX_POWER** is the supply from an externally regulated 5&nbsp;V DC supply.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/power_supply.png"
  width="90%"
  caption="RAK13102 Power Supply"
/>

##### SIM Circuit

**Figure 8** shows the schematic of the RAK13102 module with the slot for a standard SIM card and an optional **ESIM** PCB footprint.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/sim_circuit.png"
  width="90%"
  caption="RAK13102 Notecarrier Module SIM Circuit"
/>

##### WisConnector

RAK13102 WisBlock IO slot connector utilizes **I2C** related pins, **ATTNP** via WB_IO5, **VBAT**, **3V3**, and **GND**.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/io_connector.png"
  width="30%"
  caption="RAK13102 Notecarrier IO Slot Connector"
/>

##### Debug Connector

**Figure 10** shows the RAK13102 USB debugging circuit.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/usb_debug.png"
  width="50%"
  caption="RAK13102 USB Debugging"
/>

##### Blues Notecard M.2 connector

**Figure 11** shows the RAK13102 M.2 connector that is the interface to the Blues.IO Notecards.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/m2-connector.png"
  width="60%"
  caption="RAK13102 Module M.2 Connector"
/>

##### WisBlock Sensor Slots

::: tip 📝 NOTE
When assembled in the IO slot, the RAK13102 IO module is covering the standard WisBlock Sensor Slots A and B. These two Sensor Slots are available on the RAK13102 module with the same functionality as the Sensor Slots on the Base Boards
:::

**Figure 12** shows the RAK13102 Sensor Slot Connectors.

<rk-img
  src="/assets/images/wisblock/rak13102/datasheet/sensor-slot.png"
  width="80%"
  caption="RAK13102 Module Sensor Slots"
/>
