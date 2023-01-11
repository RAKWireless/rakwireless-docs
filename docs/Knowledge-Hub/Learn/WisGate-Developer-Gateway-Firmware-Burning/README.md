---
sidebar: false
rak_img: /assets/images/wisgate/rak7243c/quickstart/1.product-overview/1.index/RAK7243C_home.png
rak_desc: This document is a sample demonstration on how to burn the latest firmware of the WisGate Developer Series.
tags:
  - User-Manual
  - WisGate
  - Firmware Catalog
  - Raspberry Board
  - balenaEtcher
header:
  title: Developer Gateway Firmware Setup
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/developer-gateway-firmware-setup.jpg
posted: 29/02/2020 10:30 AM
---

# WisGate Developer Gateway Firmware Setup

Flashing an Image to an SD card is an essential process of setting up any gateway device. In this guide, a straightforward process will be shown, the following of which will ensure a successful flashing.

# Firmwares

Welcome to the Developer Gateways Firmware Catalog. Download the latest firmware on your chosen device and proceed to the [Firmware Burning](#burn-the-firmware) section to burn it.

| Model                                     | Raspberry Board     | Firmware Version | Source                                                                                                                               |
| ----------------------------------------- | ------------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| RAK2245 Pi HAT WisLink LPWAN Concentrator | Raspberry Pi 3B+/4  | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245_Latest_Firmware.zip)                               |
| RAK2245 Stamp WisLink LPWAN Concentrator  | Raspberry Pi 3B+/4  | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/RAK2245-Pi-HAT/Firmware/RAK2245_Latest_Firmware.zip)                               |
| RAK7243 WisGate Developer D3              | Raspberry Pi 3/3B+  | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243_Latest_Firmware.zip)                    |
| RAK7243C WisGate Developer D3+            | Raspberry Pi 3/3B+  | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/Pilot-Gateway-Pro-RAK7243/Firmware/RAK7243C_Latest_Firmware.zip)                   |
| RAK7244 WisGate Developer D4              | Raspberry Pi 4      | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244%26RAK7244P/Firmware/RAK7244_Latest_Firmware.zip) |
| RAK7244C WisGate Developer D4+            | Raspberry Pi 4      | 4.2.6_20210108   | [Download](https://downloads.rakwireless.com/LoRa/Developer-LoRaWAN-Gateway-RAK7244C/Firmware/RAK7244C_Latest_Firmware.zip)          |
| RAK7246G WisGate Developer D0             | Raspberry Pi Zero W | 4.2.5_20200909   | [Download](https://downloads.rakwireless.com/en/LoRa/NeoPi-Gateway-RAK7246/Firmware/RAK7246_Latest_Firmware.zip)                     |
| RAK7248 WisGate Developer D4H             | Raspberry Pi 4      | 4.2.7_20210121   | [Download](https://downloads.rakwireless.com/LoRa/RAK7248/Firmware/RAK7248_Latest_Firmware.zip)                                      |
| RAK7248C WisGate Developer D4H            | Raspberry Pi 4      | 4.2.7_20210121   | [Download](https://downloads.rakwireless.com/LoRa/RAK7248C/Firmware/RAK7248C_Latest_Firmware.zip)                                    |
# Flashing an Image

::: tip 📝 NOTE:
 All LPWAN Developer Gateways mentioned in the previous section are pre-installed with its latest firmware upon purchase. Follow these steps if you intend to re-install the firmware of your device.
:::

1. Plug the SD card into your PC or laptop.
2. Download the [balenaEtcher](https://www.balena.io/etcher/) software. There are options for Windows, macOS, and Linux. Clicking the **Download** button will provide you with the software directly, no installation is required.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/developer-gateways/firmware-burning/1.png"
  width="60%"
  caption="balenaEtcher Download Page"
/>

3. Open balenaEtcher and click **Flash from file**. Here, you need to select the file that will be flashed on the SD card. Note that the software allows the user to **Flash from URL** and **Clone drive** as well, but in this tutorial, only the **Flash from file** function will be demonstrated.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/developer-gateways/firmware-burning/2.png"
  width="60%"
  caption="balenaEtcher Main Screen"
/>

4. By clicking on the **Select target** button, you will have the option to choose the SD card that you want to flash.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/developer-gateways/firmware-burning/3.png"
  width="60%"
  caption="Image and target selected"
/>

5. Click the **Flash** button to finalize the procedure. Wait until the flashing and validating processes are done. When both are completed, your SD card is flashed and ready to use.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/developer-gateways/firmware-burning/4.png"
  width="60%"
  caption="Flashing"
/>

<rk-img
  src="/assets/images/knowledge-hub/user-manual/developer-gateways/firmware-burning/5.png"
  width="60%"
  caption="Validating"
/>
