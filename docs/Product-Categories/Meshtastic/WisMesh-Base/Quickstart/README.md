---
rak_desc: Contains instructions and tutorials for installing and deploying your Meshtastic WisMesh Base. For a full documentation check the documentation of Meshtastic.org
rak_img: /assets/images/meshtastic/meshtastic.png
prev: ../Overview/
next: ../Datasheet/
tags:
    - RAK4631
    - wisblock
    - Meshtastic
    - Nordic
    - nRF52840
    - Semtech
    - SX1262
---

# WisMesh Base Quick Start Guide

WisMesh Base is a base board, ideal for creating your own Meshtastic node, simplifying assembly without requiring extra cables.

This guide covers the basics for the RAKwireless Meshtastic devices that are not covered by the <a href="https://meshtastic.org/docs/introduction/" target="_blank">Meshtastic documentation</a>.

For detailed instructions how to configure the devices for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/getting-started/" target="_blank">Meshtastic Getting Started</a> guide.

The Meshtastic Base is different from our other WisBlock Base Boards, as it has the RAK4630 module directly mounted on the Base Board.

## Prerequisite

Before going through each and every step on using WisMesh Pocket, make sure to prepare the necessary items listed below:

#### Hardware

- <a href="https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19026" target="_blank">RAK19026 WisMesh Base</a>
- Your choice of <a href="https://store.rakwireless.com/pages/wisblock" target="_blank">WisBlock Modules</a>.<br>
It is highly recommended to also check the dedicated Quick Start Guide that you can follow on various WisBlock Modules. Each Quick Start Guide of these modules contains the detailed steps on how to open the example codes and upload them to the WisBlock Core.
- <a href="https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Li-Ion/LiPo battery (optional)</a>
- <a href="https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Solar charger (optional)</a>
- Type-C USB cable for programming and debugging

#### Software

The RAK4630 on the WisMesh Base Board comes already pre-flashed with the Meshtastic firmware.    

::: tip 📝 NOTE
To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**
:::

## Product Configuration

### Overview

To give you a better understanding of how the WisMesh Base works, the block diagram and power supply diagram of RAK19026 are provided in this section.

#### Block Diagram

The block diagram in **Figure 1** shows the internal architecture and external interfaces of the RAK19026 WisMesh Base Board.


<rk-img
  src="/assets/images/meshtastic/rak19026_block.png"
  width="90%"
  caption="RAK19026 WisMesh Base Board block diagram"
/>

The RAK4630 module on the WisMesh Base Boards is based on the Nordic nRF52840 MCU and the Semtech SX1262 LoRa transceiver. It offers the I2C, UART, and SPI data buses and GPIO's to the sensor modules. Through these buses, the MCU can control and retrieve data from the sensors.

Some MCU IO pins have an alternate function. In this case, you have the option to modify the IO via software or rework the hardware to redefine the function of IO. Refer to the <a href="https://docs.rakwireless.com/Product-Categories/WisDuo/RAK4630-Module/Datasheet" target="_blank">WisDuo RAK4630 datasheet</a> to get all the details.

The RAK19026 is designed to be powered by a battery and has a charger circuitry for **lithium batteries**. The charger circuitry can be connected to a wall outlet charger through a Type-C USB connector, or the specific connector for a solar panel. The voltage coming from the Type-C USB port or solar panel connector goes only to a charger chip. The charger chip detects when to recharge the battery and stops charging when it is fully charged.  The output of the charger chip is used to supply the WisBlock modules via a step-down converter.

A switch between the battery output and the on-board DC-DC converter can power down the MCU and all sensor and IO modules. The charger chip remains active in the OFF position, allowing the battery to recharge through the USB port or solar connector.

A high-efficiency step-down converter with a low quiescent current is used to generate 3.3&nbsp;V. This 3.3&nbsp;V power supply drives the consumption of the WisBlock Core module and the sensor modules. The max current supported by the 3.3&nbsp;V LDO is 750&nbsp;mA.

3V3_S is another 3.3&nbsp;V power supply, it can be controlled by the MCU to disconnect the power sensors during idle periods to save power. 3V3_S is controlled by the IO2 pin on the WisBlock Core board.

- Set **IO2=1**, 3V3_S is on.
- Set **IO2=0**, 3V3_S is off.


### Hardware Setup

#### RAK19026 WisMesh Base Board Installation Guide

RAK19007 WisBlock Base Board is the main board with an onboard RAK4630 WisDuo module. It allows you to attach WisBlock sensors, and IO modules through the standardized expansion connectors. These connectors provide a data bus interconnection between the modules attached to the RAK19026 Base Board.

This guide shows the details related to the installation of modules into the RAK19026 board. The following section discusses the general concepts to manipulate the WisBlock Connector in any WisBlock Module. The installation and removal details of each type of WisBlock module: Core and Sensor are explained.

##### Attaching a WisBlock Connector

The WisBlock Connector is the interface between the RAK19026 board and the WisBlock Core, Sensor, and IO modules. Before connecting these modules, read the following instructions:

:::tip 📝 NOTE
This guide uses two arrows. Refer to **Figure 2** for its representation.
:::

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/1.arrows.png"
  width="50%"
  caption="Notation within the guide"
/>

1. Align the connectors. Keep the header parallel and place it lightly in the corresponding lap joint of the socket.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/2.alignment.png"
  width="75%"
  caption="Alignment of WisBlock Connector"
/>

2. Fit the connector. Tilt one end of the connector (header) less than 20 degrees, gently place the other end parallel without applying force.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/3.header-to-socket.png"
  width="75%"
  caption="Fit the WisBlock Connector’s header inside of the socket"
/>

3. After the above alignment steps, the header and socket are matched but still not buckled.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/4.header-matched.png"
  width="75%"
  caption="WisBlock Connector’s header matched inside of the socket"
/>

4. Apply forces evenly by pressing in parallel, then there will be a sound confirming the completion of the buckling.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/5.buckle-the-head.png"
  width="75%"
  caption="Apply forces to buckle the heard to the socket "
/>

5. In the process of buckling and applying force, avoid the application of uneven force on both sides.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/6.uneven-forces.png"
  width="75%"
  caption="Avoid applying uneven forces"
/>

6. When the buckling process is completed, check that the header and socket are kept in parallel.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/7.buckle-header-to-socket.png"
  width="75%"
  caption="Correct way to buckle the WisBlock Connector’s header to the socket"
/>

7. If after buckling, the header and socket are not in a parallel state (not fully assembled in one place), then press the even force on both sides of the long side to complete the correct buckling.


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/8.not-parallel.png"
  width="75%"
  caption="WisBlock Connector’s header is not parallel to the socket"
/>

8. When the aforementioned steps are not completed yet, do not apply force to buckle. Otherwise, there will be a risk to damage the connector. When the connector cannot be smoothly buckled down, repeat the alignment step.

##### Detaching a WisBlock Connector

1. To disconnect the header from the socket, pull out in parallel with even forces.


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/9.detach-header.png"
  width="75%"
  caption="Correct way: Applying even forces to detach the header from the socket"
/>

2. Avoid pulling out the header asymmetrically in the long-side direction.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/10.wrong-way-of-detaching.png"
  width="60%"
  caption="Wrong way: Applying uneven forces to detach the header from the socket"
/>

3. The short-side of the connector can be pulled out asymmetrically, but apply the force vertically and avoid rotating the header.


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/11.dont-rotate.png"
  width="60%"
  caption="Wrong way: Do not rotate the header"
/>

4. Avoid applying forces in a single corner.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/12.dont-apply-force.png"
  width="55%"
  caption="Wrong way: Do not apply force in a single corner of the header"
/>

#####  Assembling a WisBlock Module

###### WisBlock IO

A WisBlock IO module is designed to be installed on the IO slot of the RAK19026 Base Board. As shown in **Figure 16**, the location is properly marked by silkscreen. Follow carefully the procedure defined in <a href="/Product-Categories/WisBlock/RAK19007/Quickstart/#attaching-a-wisblock-connector/" target="_blank">attaching a WisBlock Connector</a> section in order to attach an IO module.<br> Once attached, fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the WisBlock IO.<br>


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/wisblock-io-silkscreen.png"
  width="60%"
  caption="WisBlock IO silkscreen on the RAK19026 Base Board"
/>

###### WisBlock Sensor

A WisBlock Sensor module is designed to be installed on the Sensor slots of the RAK19026 Base Board. As shown in **Figure 17**, the location of the slots is properly marked by silkscreen. Follow carefully the procedure of the section, <a href="/Product-Categories/WisBlock/RAK19007/Quickstart/#attaching-a-wisblock-connector/" target="_blank">attaching a WisBlock Connector</a>, to attach a WisBlock Sensor module. Once attached, fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/rak19007-sensor.png"
  width="60%"
  caption="WisBlock Sensor silkscreen on the top of RAK19026 Base Board"
/>


##### Disassembling a WisBlock Module

1. The procedure to disassemble any type of WisBlock modules is the same. As shown in **Figure 18**, first, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/rak19007-unscrew.png"
  width="60%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, on the PCB of a WisBlock module, there is a silkscreen that shows the correct location where force can be applied. By applying even force under the marked area, the module can be detached from the Base Board. See **Figure 19** and **Figure 20**.


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/17.detaching-silkscreen.png"
  width="75%"
  caption="Detaching silkscreen on the WisBlock module"
/>


<rk-img
  src="/assets/images/wisblock/rak19007/quickstart/18.detaching-module.png"
  width="65%"
  caption="Applying even forces on the proper location of a WisBlock module to detach the module from the Base Board"
/>

#### Battery and Solar Panel/5 V Connection

RAK19026 can be powered via the USB cable or Li-Ion/LiPo battery via the dedicated connectors, as shown in below. The matching connector for the battery wires is a <a href="https://www.jst-mfg.com/product/detail_e.php?series=199" target="_blank">JST PHR-2 2&nbsp;mm pitch female</a>.

The battery can be recharged as well via a small solar panel or a regulated 5V supply, as shown below. The matching connector for the battery wires is a <a href="https://www.jst-mfg.com/product/detail_e.php?series=287" target="_blank">JST ZHR-2 1.5&nbsp;mm pitch female</a>.

<rk-img
  src="/assets/images/meshtastic/rak19026_batt_solar.png"
  width="50%"
  caption="Battery connector pin order"
/>

:::warning ⚠️ WARNING
- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK19007 board. Not all batteries have the same wiring.
:::

:::warning ⚠️ WARNING
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- The GND pin of the Solar Panel Connector is located on edge of the board. Make sure the Solar Panel wires are matching the polarity on the RAK19007 board.
:::

The full specification of the <a href="/Product-Categories/Meshtastic/WisMesh-Base/Datasheet/#battery-and-solar-panel-/-5v-connection" target="_blank">Solar Panel Connection</a> can be found on the datasheet of the RAK19026 WisMesh Base Board 2nd Gen.

### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

🔴 Red LED - Connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.<br>
🟢 Green LED - Connected to the MCU module, controlled by MCU defined by the user.<br>
🔵 Blue LED - Connected to the MCU module, controlled by MCU defined by the user.


### Software Setup

To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**

<b>Flashing the WisMesh Base firmware:</b>

The RAK4630 on the WisMesh Base Board come pre-flashed with the Meshtastic firmware. If you encounter problems, update the Meshtastic firmware to the latest version.

- <a href="https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/" target="_blank">Guide to flash nRF52 devices</a>. (link goes to Meshtastic.org)

For the setup of the WisMesh Base Board for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/configuration/" target="_blank">configuration guide</a> in the Meshtastic documentation.





