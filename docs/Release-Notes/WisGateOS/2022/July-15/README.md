---
release_date: 07/15/2022
version: "1.3.4"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.3.4.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---

::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::


##### Added

| No. | Feature                                                                                          |
| --- | ------------------------------------------------------------------------------------------------ |
| 1   | Support system time packet timestamping for the WisGate Edge without GPS WisGateOS-related fixes |
| 2   | Azure IoT Hub certificate deleted after the update                                               |
| 3   | Breathing light fix in Basics Station mode for WisGate Edge Lite 2                               |
| 4   | Cellular signal status                                                                           |
| 5   | AWS IoT Core certificate lost after a power outage                                               |
| 6   | EU433 band gateways failed to start after power cycle                                            |
| 7   | System log garbage                                                                               |

