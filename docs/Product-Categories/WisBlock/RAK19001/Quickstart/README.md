---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19001. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19001/overview/RAK19001_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK19001
  - quickstart
  - wisblock
---

# RAK19001 Quick Start Guide

This guide introduces the RAK19001 WisBlock Base Board and how to use it.

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19001 WisBlock Base Board, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK19001 WisBlock Dual IO Base Board](https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- Your choice of [WisBlock Modules](https://store.rakwireless.com/pages/wisblock).<br>
It is highly recommended to also check the dedicated quick start guide that you can follow on various WisBlock Modules. Each quick start guide of these modules contains the detailed steps on how to open the example codes and upload them to the WisBlock Core.
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- Type-C USB cable for programming and debugging

#### Software

Based on the choice of the WisBlock Core, select a Development Environment:

<b>Programming via Arduino IDE</b>
- [RAKwireless BSP support for Arduino](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)
<br>In Arduino IDE, once you installed the BSP, the examples for WisBlock Core will be automatically included on the list of examples.

<b>Programming via PlatformIO IDE:</b>
- [RAKwireless WisBlock modules in PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md)


## Product Configuration

### Overview

To give you a better understanding of how the WisBlock Base works, the block diagram RAK19001 is provided in this section.

#### Block Diagram

The block diagram shown in **Figure 1** shows the internal architecture and external interfaces of the RAK19001 board.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/rak19001-block-diagram.png"
  width="90%"
  caption="RAK19001 WisBlock Base block diagram"
/>

The MCU in the WisBlock Core module offers the I2C, UART, and SPI data buses to the sensor and IO modules. Through these buses, the MCU can control and retrieve data from the sensors. The RAK19001 WisBlock Base board connects all these modules.

The RAK19001 is designed to be powered by either rechargeable or non-rechargeable battery. The rechargeable battery it supports is Li-Ion and provides the necessary charger IC on-board. The charger circuitry can be connected to a wall outlet charger through the Type-C USB connector or via the solar panel connector.

A high-efficiency step-down converter with a low quiescent current is used for generating 3.3&nbsp;V. This 3.3&nbsp;V power supply drives the consumption of the WisBlock Core module and the sensor modules.

3V3_S is another 3.3&nbsp;V power supply, it can be controlled by the MCU to disconnect the power to the sensor and interface modules during idle periods. 3V3_S is controlled by an IO2 pin on the WisBlock Core board.

- Set **IO2=1**, 3V3_S is on.
- Set **IO2=0**, 3V3_S is off.


### Hardware Setup

#### RAK19001 WisBlock Base Board Installation Guide

RAK19001 WisBlock Base Board is the main board that allows you to attach MCU, sensors, and IO modules through the standardized expansion connectors. These connectors provide a data bus interconnection between the modules attached to the RAK19001 Base Board.

This guide shows the details related to the installation of modules into the RAK19001 Base board.

##### Attaching a WisConnector

The WisConnector is the interface between the RAK19001 module and the WisBlock Core, Sensor, and IO modules. Before connecting these modules, read the following instructions:

:::tip 📝 NOTE:

This guide uses two arrows. Refer to **Figure 2** for its representation.

:::

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/1.arrows.png"
  width="50%"
  caption="Notation within the guide"
/>

1. Align the connectors. Keep the header parallel and place it lightly in the corresponding lap joint of the socket.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/2.alignment.png"
  width="75%"
  caption="Alignment of WisConnector"
/>

2. Fit the connector. Tilt one end of the connector (header) less than 20 degrees, while do not apply force during this process, gently place the other end in parallel.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/3.header-to-socket.png"
  width="75%"
  caption="Fit the WisConnector’s header inside of the socket"
/>

3. After the above alignment steps, the header and socket are matched but still not buckled.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/4.header-matched.png"
  width="75%"
  caption="WisConnector’s header matched inside of the socket"
/>

4. Apply forces evenly by pressing in parallel, then there will be a sound confirming the completion of the buckling.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/5.buckle-the-head.png"
  width="75%"
  caption="Apply forces to buckle the heard to the socket "
/>

5. In the process of buckling and applying force, avoid the application of uneven force on both sides.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/6.uneven-forces.png"
  width="75%"
  caption="Avoid applying uneven forces"
/>

6. When the buckling process is completed, check that the header and socket are kept in parallel.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/7.buckle-header-to-socket.png"
  width="75%"
  caption="Correct way to buckle the WisConnector’s header to the socket"
/>

7. If after buckling, the header and socket are not in a parallel state (not fully assembled in one place), then press the even force on both sides of the long side to complete the correct buckling.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/8.not-parallel.png"
  width="75%"
  caption="WisConnector’s header is not parallel to the socket"
/>

8. When the aforementioned steps are not completed yet, do not apply force to buckle. Otherwise, there will be a risk to damage the connector. When the connector cannot be smoothly buckled down, repeat the alignment step.

##### Detaching a WisConnector

1. To disconnect the header from the socket, pull out in parallel with even forces.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/9.detach-header.png"
  width="75%"
  caption="Correct way: Applying even forces to detach the header from the socket"
/>

2. Avoid pulling out the header asymmetrically in the long-side direction.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/10.wrong-way-of-detaching.png"
  width="60%"
  caption="Wrong way: Applying uneven forces to detach the header from the socket"
/>

3. The short-side of the connector can be pulled out asymmetrically, but apply the force vertically and avoid rotating the header.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/11.dont-rotate.png"
  width="60%"
  caption="Wrong way: Do not rotate the header"
/>

4. Avoid applying forces in a single corner.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/12.dont-apply-force.png"
  width="55%"
  caption="Wrong way: Do not apply force in a single corner of the header"
/>

#####  Assembling a WisBlock Module

###### WisBlock Core

A WisBlock Core module is designed to be installed on the CPU slot of the RAK19001 Base Board. As shown in **Figure 14**, the location is properly marked by silkscreen. Follow carefully the procedure defined in [attaching a WisConnector](/Product-Categories/WisBlock/RAK19001/Quickstart/#attaching-a-wisconnector/) section in order to attach a Core module. Once attached, fix the module  with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the WisBlock Core.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/rak19001-core-assembly.png"
  width="60%"
  caption="WisBlock Core silkscreen on the RAK19001 Base Board"
/>

###### WisBlock Sensor

A WisBlock Sensor module is designed to be installed on the sensor slot of the RAK19001 Base Board. There are six (6) available sensor slots in the RAK19001 Base Board. As shown in **Figure 15**, the location of the slots is properly marked by silkscreen. Follow carefully the procedure of the section, [attaching a WisConnector](/Product-Categories/WisBlock/RAK19001/Quickstart/#attaching-a-wisconnector/), to attach a WisBlock Sensor module. Once attached, fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/rak19001-sensor-assembly.png"
  width="60%"
  caption="WisBlock Sensor silkscreen on the RAK19001 Base Board"
/>

###### WisBlock IO

A WisBlock IO module is designed to be installed on the IO slot of the RAK19001 Base Board. There are two (2) IO slots in the RAK19001 Base Board. As shown in **Figure 16**, the location is properly marked by silkscreen. Follow carefully the procedure of the section, [attaching a WisConnector](/Product-Categories/WisBlock/RAK19001/Quickstart/#attaching-a-wisconnector/), to attach a WisBlock IO module. Once attached, fix the module with three pieces of M1.2 x 3&nbsp;mm screws.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/rak19001-io-assembly.png"
  width="60%"
  caption="WisBlock IO silkscreen on the RAK19001 Base Board"
/>

##### Disassembling a WisBlock Module

1. The procedure to disassemble any type of WisBlock modules is the same. As shown in **Figure 17**, first, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/rak19001-unscrew.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, on the PCB of a WisBlock module, there is a silkscreen that shows the correct location where force can be applied. By applying even force under the marked area, the module can be detached from the Base Board. See **Figure 18** and **Figure 19**.


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/17.detaching-silkscreen.png"
  width="75%"
  caption="Detaching silkscreen on the WisBlock module"
/>


<rk-img
  src="/assets/images/wisblock/rak19001/quickstart/18.detaching-module.png"
  width="65%"
  caption="Applying even forces on the proper location of a WisBlock module to detach the module from the Base Board"
/>


#### Battery Selector

The RAK19001 supports both rechargeable and non-rechargeable batteries. You can also use this slide switch as a power on/off switch to disconnect the battery from the board.

<rk-img
  src="/assets/images/wisblock/rak19001/datasheet/battery_select.png"
  width="50%"
  caption="Battery selector switch"
/>

##### Non-Rechargeable Battery

Various non-rechargeable batteries are supported by the RAK19001 as long as it is in the voltage range of 3.3 to 5.5&nbsp;V. The onboard connector used on the non-rechargeable battery is [FWF20009-S02S22W1B](https://www.txga.com/product-details/FWF20009-S02S22W1B.html). The matching connector housing is [FHG20005-S02M2W1B](https://www.txga.com/product-details/FHG20005-S02M2W1B.html), and the connector tin-plate pin is [FT20004-F2H](https://www.txga.com/details/FT20004.html).

<rk-img
  src="/assets/images/wisblock/rak19001/datasheet/non-rechargeable.png"
  width="50%"
  caption="Non-Rechargeable battery connector pin"
/>

##### Rechargeable Battery

RAK19001 can be powered by a rechargeable Li-Ion/LiPo battery via the dedicated connectors, as shown in **Figure 22**. The matching connector for the rechargeable battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199). A cable assembly for the rechargeable battery connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/battery-connector-cable).

<rk-img
  src="/assets/images/wisblock/rak19001/datasheet/rechargeable.png"
  width="50%"
  caption="Rechargeable battery connector pin"
/>

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- Make sure the battery wires, both rechargeable and non-rechargeable, match the polarity on the RAK19001 board. Not all batteries have the same wiring.

:::

#### Solar Panel Connection

The battery can be recharged, as well, via a small Solar Panel, as shown in **Figure 23**. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287). A cable assembly for the solar panel connector is also available for purchase in [RAK store](https://store.rakwireless.com/products/solar-panel-connector-cable).

<rk-img
  src="/assets/images/wisblock/rak19001/datasheet/solar_label.png"
  width="45%"
  caption="Solar panel connector V+ and GND"
/>


:::warning ⚠️ WARNING

- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- The GND pin of the Solar Panel Connector is located on edge of the board. Make sure the solar panel wires match the polarity on the RAK19001 board.

:::

### Software Setup

The WisBlock Core is designed to be interfaced with other WisBlock Modules like sensors, displays, and other interfaces. To make useful devices, you need to upload a source code to the WisBlock Core.
Before you continue, you should have already set up either an [Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) or
[PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md).

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the [WisBlock Example code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples). The example codes on folder `common` are compatible with RAK4631, RAK11200, and RAK11310 WisBlock cores.




