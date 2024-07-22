---
rak_desc: Contains instructions and tutorials for installing and deploying your Meshtastic WisMesh Starter Kit. For a full documentation, check the documentation of Meshtastic.org
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

# Meshtastic WisMesh Starter Kit Quick Start Guide

WisMesh Starter Kit is a versatile DIY Kit, ideal for DIY enthusiasts. Ideal for users looking for a hassle-free Meshtastic node.

This guide covers the basics for the Meshtastic Starter Kit that are not handled by the <a href="https://meshtastic.org/docs/introduction/" target="_blank">Meshtastic documentation</a>.

For detailed instructions how to configure the devices for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/getting-started/" target="_blank">Meshtastic Getting Started</a> guide.

::: tip 📝 NOTE
To be sure to run the latest version of the Meshtastic firmware, we advice you to download the <a href="https://meshtastic.org/downloads" target="_blank">latest Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**
:::

## Prerequisite

Before going through each and every step on using Meshtastic Starter Kit, make sure to prepare the necessary items listed below:

### Hardware

- <a href="https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK4631 WisBlock Core LPWAN Module</a>
- <a href="https://store.rakwireless.com/collections/wisblock-base" target="_blank">RAK19007 WisBlock Base</a>
- <a href="https://store.rakwireless.com/pages/wisblock" target="_blank">Your choice of WisBlock Modules</a>
- <a href="" target="_blank">USB Cable</a>
- <a href="https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Li-Ion/LiPo battery (optional)</a>
- <a href="https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Solar charger (optional)</a>

### Software

The WisBlock Core module of the Meshtastic Starter Kit comes pre-flashed with the Meshtastic firmware.

However to connect the device to the Meshtastic network you will have to configure it. There are several applications for the configuration:
- <a href="https://meshtastic.org/docs/category/android-app/" target="_blank">Android App</a>
- <a href="https://meshtastic.org/docs/category/apple-apps/" target="_blank">Apple App</a>
- <a href="https://meshtastic.org/docs/software/web-client/" target="_blank">Web Client</a>
- <a href="https://meshtastic.org/docs/software/python/cli/" target="_blank">Python CLI</a>

::: tip 📝 NOTE
Make sure that you have installed one of these applications, as they are required for the configuration of the Meshtastic network.
::::

## Product Configuration

### Hardware Setup

#### RAK4631 to WisBlock Base

The Meshtastic Starter Kit comes with the RAK4631 module already assembled on the WisBlock Base board. The WisBlock Base provides a USB connection for programming the RAK4631. It also provides a power source and various interfaces to RAK4631 so that it can be connected to other WisBlock modules via different module slots.

In case you need to change the RAK4631 or install additional modules, this guide illustrates how the RAK4631 can be connected to RAK19007 WisBlock Base, as shown in **Figure 1**.

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK5005-connect.png"
  width="80%"
  caption="RAK4631 Connection to WisBlock Base RAK5005-O"
/>

::: tip 📝 NOTE
Assembly of the RAK4631 on other Base Boards is performed in the same way.
Assembly guides for other modules can be found in the Quick Start Guides of these modules.
:::


#### Assembling and Disassembling of WisBlock Modules

##### Assembling

**Figure 2** shows how to mount the RAK4631 module on top of a WisBlock Base board (RAK19007). Follow carefully the procedure defined in <a href="https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/" target="_blank">WisBlock module assembly/disassembly instructions</a> in order to secure the connection safely. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/mounting-sketch.png"
  width="50%"
  caption="RAK4631 Mounting Sketch"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. Start by removing the screws.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 3,** to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

#### LoRa and BLE Antenna

Another important part component of Meshtastic Starter kit are the antennas.

For LoRa, two antennas are included.    
1. A 2&nbsp;dBi rubber antenna with a RP-SMA connector and an IPEX-to-RP-SMA pigtail cable.

<rk-img
  src="/assets/images/meshtastic/rubber-antenna-90.png"
  width="30%"
  caption="LoRa Antenna"
/>    
2. A LoRa PCB antenna that can be connected directly to the RAK4631
<rk-img
  src="/assets/images/meshtastic/lora-pcb-antenna.png"
  width="40%"
  caption="LoRa PCB Antenna"
/>
3. A BLE PCB antenna that can be connected directly to the RAK4631
<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/ble-antenna.png"
  width="40%"
  caption="BLE PCB Antenna"
/>

You need to ensure that the antenna is properly connected to have a good LoRa signal. Do not power the module without an antenna connected to the IPEX connector to avoid damage to the RF section of the chip.

RAK4631 has a label on its sticker where to connect the antennas, as shown in **Figure 9**.


<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK4631-antenna-label.png"
  width="30%"
  caption="RAK4631 Antenna Label"
/>

:::tip 📝 NOTE
Detailed information about the RAK4631 BLE and LoRa antenna can be found on the <a href="https://downloads.rakwireless.com/#LoRa/WisBlock/Accessories/" target="_blank">antenna datasheet</a>.
:::

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.
:::

### Software Setup

To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the <a href="https://store.rakwireless.com/products/wisblock-epd-module-rak14000" target="_blank">RAK14000 WisBlock E-Ink Display</a> connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**

<b>Flashing the Meshtastic Starter Kit firmware:</b>

The Meshtastic Starter Kits come pre-flashed with the Meshtastic firmware. If you encounter problems, update the Meshtastic firmware to the latest version.

- <a href="https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/" target="_blank">Guide to flash nRF52 devices</a>. (link goes to Meshtastic.org)

For the setup of the Meshtastic Starter Kit for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/configuration/" target="_blank">configuration guide</a> in the Meshtastic documentation.

### RAK4631 and WisBlock Base Boards

Detailed information and datasheets can be found in the documentation for the different modules:

- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631" target="_blank">RAK4631 Core Module</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007" target="_blank">RAK19007 Base Board</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19003" target="_blank">RAK19003 Base Board</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19001" target="_blank">RAK19001 Base Board</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1921" target="_blank">RAK1921 OLED Display</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12500" target="_blank">RAK12500 GNSS Location Module</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1904" target="_blank">RAK1904 Acceleration Sensor</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK13800" target="_blank">RAK13800 Ethernet Module</a>
- <a href="https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19018" target="_blank">RAK19018 Ethernet PoE Module</a>

