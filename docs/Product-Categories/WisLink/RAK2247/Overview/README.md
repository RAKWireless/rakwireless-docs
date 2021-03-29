---
rak_img: /assets/images/wislink-lora/rak2247/quickstart/1.main/RAK2247_home.png
rak_desc: RAK2247 is functional to any embedded platform offering a mini-PCIe slot with an SPI or USB connection. This enables easy integration into routers and other networking equipment. Also, it offers maximum power transmission for a wider LoRaWAN network coverage. 
rak_grp: [wislink, lpwan]
prev: ../../
next: ../Quickstart/
---

# RAK2247 WisLink LPWAN Concentrator
Thank you for choosing **RAK2247 WisLink LPWAN Concentrator** in your awesome IoT Project! 🎉 To help you get started, we have provided you all the necessary documentations for your product.

* [Quick Start Guide](../Quickstart/)
* [Datasheet](../Datasheet/)
* [RAK2247 3D Model](https://downloads.rakwireless.com/3D_File/WisLink/PWB-RAK2247.stp)

RAK2247 supports development based on multiple platforms, you can choose suitable development platform according to your requirements.

* **RAK2247 USB/SPI + Raspberry Pi**
  * [Source Code Repository](https://github.com/RAKWireless/rak_common_for_gateway)
  * [RAK2247 USB + Raspberry Pi Firmware](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/RAK2247-USB_Latest_Firmware.zip)
  * [RAK2247 SPI + Raspberry Pi Firmware](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/RPi-Frimware/RAK2247-SPI_Latest_Firmware.zip)
* **RAK2247 USB + x86 PC**
  * [Source Code Repository](https://github.com/RAKWireless/rak_common_for_gateway)
  * [Quick Start Guide](/Product-Categories/WisLink/RAK2247/Quickstart/#rak2247-x86-linux-pc)
* **RAK2247 USB/SPI + OrangePI(Allwinner H6 CPU based)** 
  * [Source Code Repository](https://github.com/RAKWireless/rak_gateway_for_OrangePi3)
* **RAK2247 USB/SPI + OpenWRT(MT7628 CPU Based)**
  * [RAK2247 USB + OpenWRT Source Code Repository](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/MT7628-Firmware/RAK2247%26RAK833-USB-openwrt-ramips-mt7628.rar)
  * [RAK2247 USB + OpenWRT Firmware](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/MT7628-Firmware/RAK2247%26RAK833-USB-openwrt-ramips-mt7628.rar)
  * [RAK2247 SPI + OpenWRT Source Code Repository](https://github.com/RAKWireless/RAK831-LoRaGateway-OpenWRT-MT7628)
  * [RAK2247 SPI + OpenWRT Firmware](https://downloads.rakwireless.com/LoRa/RAK2247-Mini-PCIe/MT7628-Firmware/RAK833%26RAK2247_SPI_MT7628_OpenWRT_V2.0_20190505.bin)
* **RAK2247 USB + SolidRun(IMX6)**
  * [Yocto Quickstart](https://github.com/RAKWireless/RAK833-LoRaGateway-SolidRun-Yocto)
  * [Debian Quickstart](https://github.com/RAKWireless/RAK833-LoRaGateway-SolidRun-Debian)

## Product Description

The **RAK2247 WisLink LPWAN Concentrator** is a LoRa Concentrator module with mini-PCIe form factor based on the SX1301. This enables easy integration into routers and other networking equipment, adding gateway capabilities. The module can be used in any embedded platform offering a mini-PCIe slot with an SPI or USB connection.

Despite its small size this is an 8 channel concentrator module. By integrating it together with a computing core a fully fledged gateway solution can easily be created.

## Product Features

- Mini PCIe form factor, mounted heat-sink.
- SX1301 base band processor emulates 49 x LoRa demodulators, 10 parallel demodulation paths. It supports 8 uplinks channel and 1 downlink channel.
- 2 x SX125x Tx/Rx front-ends high/low frequency.
- Built-in FT2232H for SPI to USB 2.0 conversion (optional).
- Operates at 3.3 V, making it compatible with standard 3G/LTE card slots of Mini PCI-e type.
- Tx power up to 27 dBm, Rx sensitivity down to -139 dBm @ SF12, BW 125 kHz.
- Supports global license-free frequency band (EU433, CN470, IN865, EU868, US915, AU915, KR920,  and AS923).
