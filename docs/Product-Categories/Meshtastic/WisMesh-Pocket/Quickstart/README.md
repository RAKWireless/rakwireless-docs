---
rak_desc: Contains instructions and tutorials for installing and deploying your Meshtastic WisMesh Pocket. For a full documentation, check the documentation of Meshtastic.org
rak_img: /assets/images/meshtastic/meshtastic.png
prev: ../Overview/
next: false
tags:
    - RAK4631
    - wisblock
    - Meshtastic
    - Nordic
    - nRF52840
    - Semtech
    - SX1262
---

# WisMesh Pocket Quick Start Guide

WisMesh Pocket is a go-to device for ready-to-use and long-lasting connectivity. Ideal for users seeking a hassle-free Meshtastic node.

This guide covers the basics for the RAKwireless Meshtastic devices that are not covered by the <a href="https://meshtastic.org/docs/introduction/" target="_blank">Meshtastic documentation</a>.

For detailed instructions how to configure the devices for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/getting-started/" target="_blank">Meshtastic Getting Started</a> guide.

::: tip 📝 NOTE
To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**
:::

## Prerequisite

Before going through each and every step on using WisMesh Pocket, make sure to prepare the necessary items listed below:

### Hardware

- <a href="https://store.rakwireless.com/products/wismesh-pocket" target="_blank">WisMesh Pocket</a>
- USB Cable

### Software

The WisBlock Core module of the WisMesh Pocket comes pre-flashed with the Meshtastic firmware.

However to connect the device to the Meshtastic network you will have to configure it. Listed below are several applications for the configuration:
- <a href="https://meshtastic.org/docs/category/android-app/" target="_blank">Android App</a>
- <a href="https://meshtastic.org/docs/category/apple-apps/" target="_blank">Apple App</a>
- <a href="https://meshtastic.org/docs/software/web-client/" target="_blank">Web Client</a>
- <a href="https://meshtastic.org/docs/software/python/cli/" target="_blank">Python CLI</a>

::: tip 📝 NOTE
Make sure that you have installed one of these applications, as they are required for the configuration of the Meshtastic network.
::::

## Product Configuration

### Hardware Setup

The WisMesh Pocket comes fully assembled with an internal battery. However, it is recommended to fully recharge the battery before switching the device on. It supports Li-Ion batteries, 5&nbsp;V (e.g. from solar panel) supply, integrated user button, battery disconnect switch and a dedicated connector for a 1.3&nbsp;inches OLED display.

WisMesh Pocket also includes all GPIOs on pin headers, three WisBlock Sensor Slots, one WisBlock IO slot, and an integrated GNSS location chip on the Base Board.

The WisMesh Pocket is based on the WisMesh Base Board, which is specifically designed for the Meshtastic usage. Technical details of the WisMesh Base Board can be found in the <a href="/Product-Categories/Meshtastic/WisMesh-Base/Datasheet/#battery-and-solar-panel-/-5v-connection" target="_blank">WisMesh Base Board</a> documentation.

#### Battery Connector and Solar Panel (5 V) Connector

The WisMesh Pocket has internal a connector for a Li-Ion battery. In case the battery needs to be changed, double check the polarity of the battery cable. The matching connector for the battery wires is a <a href="https://www.jst-mfg.com/product/detail_e.php?series=199" target="_blank">JST PHR-2 2&nbsp;mm pitch female</a>.

WisMesh Pocket also has an internal connector for direct 5&nbsp;V supply or connection of a solar panel. In case this connector is used, make sure to double-check the polarity of the supply cable.

The matching connector for the solar panel wires is an <a href="https://www.jst-mfg.com/product/detail_e.php?series=287" target="_blank">JST ZHR-2 1.5&nbsp;mm pitch female</a>.

<rk-img
  src="/assets/images/meshtastic/rak19026_batt_solar.png"
  width="50%"
  caption="WisMesh Pocket Battery & 5 V/Solar Panel"
/>

#### Recharge the Battery

To recharge the device, plug a USB-C cable into the device and connected it to a 5&nbsp;V 2&nbsp;A USB wall charger. Recharging the battery via a USB port on your computer is not recommended due to the potential low current output.

::: tip 📝 NOTE
Charge the WisMesh Pocket faster by keeping it off with the ON/OFF switch in the off position.
:::

#### Antenna

The LoRa antenna needs to be plugged into the SMA connector of the WisMesh Pocket. Make sure the connector is screwed in correct and is secured by tightening the connection.

::: tip 📝 NOTE
The BLE antenna and GNSS antenna are inside the enclosure and already connected.
:::

#### Assembling and Disassembling of WisMesh Pocket

If you want to add additional WisBlock modules, you can do so by opening the device and plugging the modules into their sensor or IO slots.

##### Disassembling

1. Unscrew the four screws on the corners of the enclosure with a screwdriver.

<rk-img
  src="/assets/images/meshtastic/install-01.png"
  width="50%"
  caption="WisMesh Pocket Disassembly Enclosure Screws"
/>

2. Open the enclosure carefully, as there are battery cables between the top and bottom part, do not use force to pull the cables. Then separate three IPEX connectors from PCBA.

<rk-img
  src="/assets/images/meshtastic/install-02.png"
  width="50%"
  caption="WisMesh Pocket Disassembly Opening - Disconnect antenna cables"
/>

3. Unscrew four screws that hold the Base Board in the enclosure. Then you can remove the Base Board from the enclosure

<rk-img
  src="/assets/images/meshtastic/install-03.png"
  width="50%"
  caption="WisMesh Pocket Disassembly Base Board removal"
/>

4. Separate the battery cable from the Base Board.

<rk-img
  src="/assets/images/meshtastic/install-04.png"
  width="50%"
  caption="WisMesh Pocket Disassembly Battery disconnect"
/>

##### Assembling

1. Plug the battery cable into the Base Board.

<rk-img
  src="/assets/images/meshtastic/install-05.png"
  width="50%"
  caption="WisMesh Pocket Assembly Battery connection"
/>

2. Put the Base Board into the enclosure and fix it with four screws.

<rk-img
  src="/assets/images/meshtastic/install-06.png"
  width="50%"
  caption="WisMesh Pocket Assembly Mount Base Board"
/>

3. Plug the IPEX connectors on the sockets on the Base Board. Make sure to connect each antenna to the correct socket, and then close the enclosure.

<rk-img
  src="/assets/images/meshtastic/install-07.png"
  width="50%"
  caption="WisMesh Pocket Assembly Connect antennas"
/>

4. Put the four nuts into the slots on the bottom of the enclosure, then fix the screws.

<rk-img
  src="/assets/images/meshtastic/install-08.png"
  width="50%"
  caption="WisMesh Pocket Assembly Fix enclosure"
/>


### Software Setup

To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**

<b>Flashing the WisMesh Pocket firmware:</b>

The WisMesh Pocket comes pre-flashed with the Meshtastic firmware. If you encounter problems, update the Meshtastic firmware to the latest version.

- <a href="https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/" target="_blank">Guide to flash nRF52 devices</a>. (link goes to Meshtastic.org)

For the setup of the WisMesh Pocket for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/configuration/) in the Meshtastic documentation." target="_blank">configuration guide</a> in the Meshtastic documentation.
