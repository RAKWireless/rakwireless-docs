---
rak_desc: Contains instructions and tutorials for installing and deploying your Meshtastic WisMesh Hub. For a full documentation check the documentation of Meshtastic.org
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

# WisMesh Hub Quick Start Guide

WisMesh Hub is a solar-powered repeater that comes in a waterproof enclosure with a high-performance built-in antenna, making it deployable anywhere regardless of power availability or weather conditions.

This guide covers the basics for the RAKwireless Meshtastic devices that are not covered by the <a href="https://meshtastic.org/docs/introduction/" target="_blank">Meshtastic documentation</a>.

For detailed instructions how to configure the devices for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/getting-started/" target="_blank">Meshtastic Getting Started</a> guide.

::: tip 📝 NOTE
To be sure to run the latest version of the Meshtastic firmware, we advice you to download the <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the RAK14000 WisBlock E-Ink Display connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**
:::

## Prerequisite

Before going through each and every step on using WisMesh Hub, make sure to prepare the necessary items listed below:

### Hardware

- <a href="https://store.rakwireless.com/" target="_blank">WisMesh Hub</a>

### Software

The WisBlock Core module of the WisMesh Hub comes pre-flashed with the Meshtastic firmware.

However to connect the device to the Meshtastic network you will have to configure it. The preferred method for the configuration of the WisMesh Hub is from a mobile phone through a BLE connection with the following:
- <a href="https://meshtastic.org/docs/category/android-app/" target="_blank">Android App</a>
- <a href="https://meshtastic.org/docs/category/apple-apps/" target="_blank">Apple App</a>

Alternatively, the WisMesh Hub has an USB connector in its unused battery cabinet. To access it, you have to open the battery lid. With the USB connection you can use either of these configurations:
- <a href="https://meshtastic.org/docs/software/web-client/" target="_blank">Web Client</a>
- <a href="https://meshtastic.org/docs/software/python/cli/" target="_blank">Python CLI</a>

The location of the USB connector is shown in **Figure 5**
<rk-img
  src="/assets/images/meshtastic/wismesh-hub-usb.png"
  width="30%"
  caption="WisMesh Hub USB access"
/>

Make sure that you have installed one of these applications, as they are required for the configuration of the Meshtastic network.

## Product Configuration

### Hardware Setup

The WisMesh Hub comes fully assembled. However, it is required to connect it to the Solar Battery Lite to power it up. The WisMesh Hub itself has no internal battery.

:::warning ⚠️ WARNING
The WisMesh Hub has the option to power the device with four LiSoCl2 batteries. But due to the power consumption of the Meshtastic LoRa network, it is not recommended to power the device with these non-rechargeable batteries. The lifespan of these batteries will be very limited.
:::

#### Connect the battery

Connect the Solar Battery Lite to the WisMesh Hub as shown in **Figure 6**
<rk-img
  src="/assets/images/meshtastic/wismesh-hub-solar.png"
  width="30%"
  caption="WisMesh Hub connection to the Solar Battery"
/>

::: tip 📝 NOTE
The cable from the Solar Battery Lite can be plugged into any of the two connectors of the WisMesh Hub.
:::

To recharge the battery, mount the Solar Battery Lite in direct sun light without any shadowing.

::: tip 📝 NOTE
For more details about the mounting options of the solar battery lite, refer to the <a href="https://docs.rakwireless.com/Product-Categories/Accessories/RAK9154/Installation-Guide/#rak9154-solar-battery-installation-guide" target="_blank">Solar Battery Lite Installation Guide</a>.
:::

#### Antenna

The WisMesh Hub has internal LoRa and BLE antennas and does not require the assembly or connection of any external antenna.

#### Assembling and Disassembling of WisMesh Hub

:::warning ⚠️ WARNING
It is strongly recommended to keep both the WisMesh Hub and the Solar Battery Lite closed at all times. If the devices are opened, the devices might not be waterproof anymore and can be easily damaged.
:::

### Software Setup

To be sure to run the latest version of the Meshtastic firmware, we advice you to download the latest <a href="https://meshtastic.org/downloads" target="_blank">Meshtastic firmware</a> and upload it to your RAKwireless device to make it compatible with the Meshtastic network.

For Firmware 1.3 and 2.0 (from November 1, 2022), the WisBlock Base board is autodetected. There's a special firmware if you have the RAK14000 WisBlock E-Ink Display connected. All other use cases are covered in the stock firmware.

- All the base boards with RAK4631 - **`firmware-rak4631-w.x.yy.zzzzzzz.uf2`**
- RAK4631 with RAK14000 - **`firmware-rak4631_eink-w.x.yy.zzzzzzz.uf2`**

<b>Flashing the WisMesh Hub firmware:</b>

The WisMesh Hub comes pre-flashed with the Meshtastic firmware. If you encounter problems, update the Meshtastic firmware to the latest version.

- <a href="https://meshtastic.org/docs/getting-started/flashing-firmware/nrf52/" target="_blank">Guide to flash nRF52 devices</a>. (link goes to Meshtastic.org)

For the setup of the WisMesh Hub for the Meshtastic network, follow the <a href="https://meshtastic.org/docs/configuration/" target="_blank">configuration guide</a> in the Meshtastic documentation.

