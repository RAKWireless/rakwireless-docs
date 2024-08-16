---
rak_img: /assets/images/wisgate/rak7289-v2/RAK7289V2.png
rak_desc: The RAK7289 V2 WisGate Edge Pro is an ideal product for commercial IoT deployment. With its industrial-grade components, it achieves a high standard of reliability. It supports WisGateOS 2, which is based on the latest OpenWRT kernel and accommodates the latest security updates.
rak_grp: [wisgate, edge]
rak_model: RAK7289V2/RAK7289CV2
prev: ../../
next: ../Quickstart/
tags:
    - RAK7289V2
    - RAK7289CV2
    - wisgate
---


#  WisGate Edge Pro V2

Thank you for choosing **RAK7289V2/RAK7289CV2 WisGate Edge Pro** in your awesome IoT Project! 🎉 To help you get started, we have provided you with all the necessary documentation for your product.

* <a href="../Quickstart/" target="_blank">Quick Start Guide</a>
* <a href="../Supported-LoRa-Network-Servers/" target="_blank">Supported LoRa Network Servers</a>
* <a href="../Datasheet/" target="_blank">Datasheet</a>
* <a href="https://docs.rakwireless.com/Knowledge-Hub/Learn/OpenVPN-Server-Installation/" target="_blank">OpenVPN Server Installation Guide (For Ubuntu sys)</a>


## Product Description


The RAK7289 V2 WisGate Edge Pro represents the latest iteration of the RAK Edge Series, designed specifically for commercial IoT deployment. Featuring industrial-grade components, it ensures a high level of reliability. 

The new RAK7289 V2 supports up to 16 LoRa channels and offers multi-backhaul options with Ethernet, Wi-Fi, and Cellular connectivity. Additionally, it provides a dedicated port for various power options, including solar panels and batteries. Its redesigned enclosure accommodates LTE, Wi-Fi, and GPS antennas internally for enhanced aesthetics and functionality.

The RAK7289 V2 supports [WisGateOS 2,](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview) built on the latest OpenWRT kernel, ensuring compatibility with the latest security updates. It incorporates key features such as IPv6 support, OpenSSL 1.1 compatibility, multi-account access, and more. The updated web UI features a modern design with improved user-friendly information tooltips for enhanced usability.

In essence, the RAK7289 V2 is versatile, catering to various use case scenarios, whether for rapid deployment or customization, offering flexibility in both UI and functionality.

:::warning ⚠️ WARNING
This product is intended to be powered by 12&nbsp;V<sub>DC</sub> through a designated power port. The use of solar chargers is not recommended, as they may supply overvoltage, potentially damaging the device. We strongly discourage the use of such chargers with this product, and any damage incurred as a result will void the warranty.
:::

## Product Features

### Hardware

- IP67/NEMA-6 industrial-grade enclosure with cable glands
- PoE (802.3af) + Surge Protection
- Dual LoRa Concentrators for up to 16 channels
- Backhaul: Wi-Fi, Ethernet, LTE (optional, available with RAK7289C)
- GPS
- Supports DC 12&nbsp;V or solar power supply with electricity monitoring (Solar Kit optional)
- Internal antenna for Wi-Fi, GPS, and LTE, external antenna for LoRa
- Dying-gasp (optional)

### Software

:::tip 📝 NOTE:
The new version of the WisGate Edge Pro comes pre-installed with WisGate OS 2. This operating system, based on OpenWRT, enables new security updates and the option to install extensions for expanded functionality. To explore WisGate OS 2 further, visit the [User Manual.](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/) Additionally, check out the [WisGate OS 2 Extension page](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/) to discover how to enhance the capabilities of your WisGate Edge Pro V2.
:::

- Built-in Network Server (full LoRaWAN support V 1.0.3)
- OpenVPN
- Software and UI sit on top of OpenWRT
- Full LoRaWAN Stack support with Semtech SX1303
- LoRa Frame filtering (node whitelisting)
- MQTT v3.1 bridging with TLS encryption
- Buffering of LoRa frames in Packet Forwarder mode in case of NS outage (no data loss)
- Listen Before Talk (optional)
- Fine timestamping (optional)