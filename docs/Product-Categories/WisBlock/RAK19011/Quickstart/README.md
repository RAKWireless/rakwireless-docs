---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK19011. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak19011/overview/RAK19011_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK19011
  - quickstart
  - wisblock
---

# RAK19011 Quick Start Guide

This guide introduces the RAK19011 WisBlock Dual IO Base Board with Power Slot and how to use it. 

## Prerequisite

### What Do You Need?

Before going through each and every step on using the RAK19011 WisBlock Dual IO Base Board with Power Slot, make sure to prepare the necessary items listed below:

#### Hardware

- Your choice of [WisBlock Base Power Module](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base)
- [RAK19011 WisBlock Dual IO Base Board with Power Slot](https://store.rakwireless.com/products/rak19011-max-base-board-third-generation?utm_source=RAK19011&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- Your choice of [WisBlock Modules](https://store.rakwireless.com/pages/wisblock).

It is highly recommended to also check the dedicated quick start guide that you can follow on various WisBlock Modules. Each quick start guide of these modules contains the detailed steps on how to open the example codes and upload them to the WisBlock Core.

#### Software

Based on the choice of the WisBlock Core, select a Development Environment:

<b>Programming via Arduino IDE</b>
- [RAKwireless BSP support for Arduino](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index)
<br>In Arduino IDE, once you installed the BSP, the examples for WisBlock Core will be automatically included on the list of examples. 

<b>Programming via PlatformIO IDE:</b>
- [RAKwireless WisBlock modules in PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md)


## Product Configuration

### Overview

To give you a better understanding of how the WisBlock Base works, the block diagram RAK19011 is provided in this section.

#### Block Diagram

The block diagram shown in **Figure 1** shows the internal architecture and external interfaces of the RAK19011 board.


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19011-block-diagram.png"
  width="90%"
  caption="RAK19011 WisBlock Dual IO Base Board with Power Slot block diagram"
/>


The MCU in the WisBlock Core module offers the I2C, UART, and SPI data buses to the sensor and IO modules. Through these buses, the MCU can control and retrieve data from the sensors. The RAK19011 WisBlock Dual IO Base Board with Power Slot board connects all these modules.


### Hardware Setup

#### RAK19011 WisBlock Dual IO Base Board with Power Slot Installation Guide

RAK19011 WisBlock Dual IO Base Board with Power Slot is the main board that allows you to attach MCU, Power modules, sensors, and IO modules through the standardized expansion connectors. These connectors provide a data bus interconnection between the modules attached to the RAK19011 WisBlock Dual IO Base Board with Power Slot.

This guide shows the details related to the installation of modules into the RAK19011 WisBlock Dual IO Base Board with Power Slot.

##### Attaching a WisConnector

The WisConnector is the interface between the RAK19011 module and the WisBlock Core, Wisblock Power, Sensor, and IO modules. Before connecting these modules, read the following instructions:

:::tip 📝 NOTE:

This guide uses two arrows. Refer to **Figure 2** for its representation.

:::

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/1.arrows.png"
  width="50%"
  caption="Notation within the guide"
/>

1. Align the connectors. Keep the header parallel and place it lightly in the corresponding lap joint of the socket.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/2.alignment.png"
  width="75%"
  caption="Alignment of WisConnector"
/>

2. Fit the connector. Tilt one end of the connector (header) less than 20 degrees, while do not apply force during this process, gently place the other end in parallel.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/3.header-to-socket.png"
  width="75%"
  caption="Fit the WisConnector’s header inside of the socket"
/>

3. After the above alignment steps, the header and socket are matched but still not buckled.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/4.header-matched.png"
  width="75%"
  caption="WisConnector’s header matched inside of the socket"
/>

4. Apply forces evenly by pressing in parallel, then there will be a sound confirming the completion of the buckling.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/5.buckle-the-head.png"
  width="75%"
  caption="Apply forces to buckle the heard to the socket "
/>

5. In the process of buckling and applying force, avoid the application of uneven force on both sides.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/6.uneven-forces.png"
  width="75%"
  caption="Avoid applying uneven forces"
/>

6. When the buckling process is completed, check that the header and socket are kept in parallel.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/7.buckle-header-to-socket.png"
  width="75%"
  caption="Correct way to buckle the WisConnector’s header to the socket"
/>

7. After buckling, if the header and socket are not in a parallel state (not fully assembled in one place), press with even force on both sides of the long side to complete the correct buckling.


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/8.not-parallel.png"
  width="75%"
  caption="WisConnector’s header is not parallel to the socket"
/>

8. When the aforementioned steps are not completed yet, do not apply force to buckle. Otherwise, there will be a risk to damage the connector. When the connector cannot be smoothly buckled down, repeat the alignment step. 

##### Detaching a WisConnector

1. To disconnect the header from the socket, pull out in parallel with even forces.


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/9.detach-header.png"
  width="75%"
  caption="Correct way: Applying even forces to detach the header from the socket"
/>

2. Avoid pulling out the header asymmetrically in the long-side direction.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/10.wrong-way-of-detaching.png"
  width="60%"
  caption="Wrong way: Applying uneven forces to detach the header from the socket"
/>

3. The short-side of the connector can be pulled out asymmetrically, but apply the force vertically and avoid rotating the header.


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/11.dont-rotate.png"
  width="60%"
  caption="Wrong way: Do not rotate the header"
/>

4. Avoid applying forces in a single corner.

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/12.dont-apply-force.png"
  width="55%"
  caption="Wrong way: Do not apply force in a single corner of the header"
/>

#####  Assembling a WisBlock Module

###### WisBlock Core


A WisBlock Core module is designed to be installed on the CPU slot of the RAK19011 WisBlock Dual IO Base Board with Power Slot. As shown in **Figure 14**, the location is properly marked by silkscreen. Follow carefully the procedure defined in [attaching a WisConnector](#attaching-a-wisconnector) section in order to attach a Core module. Once attached, fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the WisBlock Core. 


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19001-core-assembly.png"
  width="60%"
  caption="WisBlock Core silkscreen on the RAK19011 Base Board"
/>


###### WisBlock Power


A WisBlock Power module is designed to be installed on the Power slot of the RAK19011 WisBlock Dual IO Base Board with a Power Slot. As shown in **Figure 15**, the location is properly marked by silkscreen. Follow carefully the procedure defined in [attaching a WisConnector](#attaching-a-wisconnector) section in order to attach a Core module. Once attached, fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the WisBlock Core. 


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19001-core-assembly.png"
  width="60%"
  caption="WisBlock Power silkscreen on the RAK19011 Base Board"
/>

###### WisBlock Sensor


A WisBlock Sensor module is designed to be installed on the sensor slot of the RAK19011 WisBlock Dual IO Base Board with Power Slot. There are six (6) available sensor slots in the RAK19011 WisBlock Dual IO Base Board with Power Slot. As shown in **Figure 16**, the location of the slots is properly marked by silkscreen. Follow carefully the procedure of the section, [attaching a WisConnector](#attaching-a-wisconnector), to attach a WisBlock Sensor module. Once attached, fix the module with an M1.2 x 3&nbsp;mm screw. 

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19001-sensor-assembly.png"
  width="60%"
  caption="WisBlock Sensor silkscreen on the RAK19011 Base Board"
/>

###### WisBlock IO

A WisBlock IO module is designed to be installed on the IO slot of the RAK19011 WisBlock Dual IO Base Board with Power Slot. There are two (2) IO slots in the RAK19011 WisBlock Dual IO Base Board with Power Slot. As shown in **Figure 17**, the location is properly marked by silkscreen. Follow carefully the procedure of the section, [attaching a WisConnector](#attaching-a-wisconnector), to attach a WisBlock IO module. Once attached, fix the module with three pieces of M1.2 x 3&nbsp;mm screws. 


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19001-io-assembly.png"
  width="60%"
  caption="WisBlock IO silkscreen on the RAK19011 Base Board"
/>

##### Disassembling a WisBlock Module

1. The procedure to disassemble any type of WisBlock module is the same. As shown in **Figure 18**, first, remove the screws. 

<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/rak19001-unscrew.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, on the PCB of a WisBlock module, there is a silkscreen that shows the correct location where force can be applied. By applying even force under the marked area, the module can be detached from the Base Board. See **Figure 19** and **Figure 20**.


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/17.detaching-silkscreen.png"
  width="75%"
  caption="Detaching silkscreen on the WisBlock module"
/>


<rk-img
  src="/assets/images/wisblock/rak19011/quickstart/18.detaching-module.png"
  width="65%"
  caption="Applying even forces on the proper location of a WisBlock module to detach the module from the Base Board"
/>

### Software Setup

The WisBlock Core is designed to be interfaced with other WisBlock Modules like sensors, displays, and other interfaces. To make useful devices, you need to upload a source code to the WisBlock Core. 
Before you continue, you should have already set up either an [Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) or
[PlatformIO](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md).

#### WisBlock Examples Repository

To quickly build your IoT device with less hassle, example codes for WisBlock Core are provided. You can access the codes on the [WisBlock Example code repository](https://github.com/RAKWireless/WisBlock/tree/master/examples). The example codes on folder `common` are compatible with RAK4631, RAK11200, and RAK11310 WisBlock cores.

