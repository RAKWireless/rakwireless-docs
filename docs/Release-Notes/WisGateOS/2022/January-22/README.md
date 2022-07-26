---
release_date: 01/22/2022
version: "1.3.1"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.3.1.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---


::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::

##### Fixed


| Daily Build No. / Bug No. | Description                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------- |
| -                         | Support Log rotation storage WisDM related fixes                                                                    |
| -                         | Fix WisDM: WiFi interface error                                                                                     |
| -                         | Fix WisDM: RAK7268/RAK7289 device MAC address error                                                                 |
| -                         | FiX WisDM: Sub-band cannot apply to the 16 Channels gateway (US915/AU915) WisGateOS-related fixes                   |
| -                         | Fix WisGateOS Version: WisGateOS 1.2.3_RAK_build in NS can't start in AS923                                         |
| -                         | Fix MQTT QoS level typo                                                                                             |
| -                         | Fix WisGateOS1.2.1: AWS connection status is '**disconnect**' after running 24H when the gateway working in BS mode |
| -                         | Fix Wi-Fi: In the client mode, the SSID field has a space by default                                                |
| -                         | Fix UI crash when remove all of the device                                                                          |
| -                         | Fix UI bug that the OUI list, Network ID is editable if disable the white list                                      |
| -                         | Fix Alias IP does not work when the MAC address ends with **0xFF** or **0x00**                                      |
| -                         | Fix the WiFi channel lost after WisGateOS_1.0.2                                                                     |
| -                         | Fix the Devaddr name have strict rule to distinguish the capital                                                    |
| -                         | Fix the Wi-Fi unstable issue                                                                                        |
| -                         | Fix the NS Ping slot DR is different from PF IN865                                                                  |
