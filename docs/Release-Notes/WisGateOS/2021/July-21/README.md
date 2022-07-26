---
release_date: 07/21/2021
version: "1.1.2"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.1.2.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---


::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::



##### Added

| No. | Feature                              | Reference                                                                                                                                                             |
| --- | ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Support Multiple WAN                 | [WisGate OS User Manual > Network](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#multi-wan)                         |
| 2   | Support customized breathing light   | [WisGate OS User Manual > System](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/Software-APIs-and-Libraries/WisGateOS/Overview/#system) |
| 3   | WiFi IP address display in dashboard | [WisGate OS User Manual >  Status](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#overview-2 )                       |
| 4   | Support FTP feature                  | -                                                                                                                                                                     |

##### Changed

| No. | Feature                  |
| --- | ------------------------ |
| 1   | Disable insecure ciphers |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                |
| ------------------------- | ------------------------------------------------------------------------------------------ |
| -                         | uhttpd error in syslog: ERROR Connection Refused                                           |
| -                         | Ethernet port can't work when switch to LAN mode                                           |
| -                         | Switch WiFi mode behavior                                                                  |
| -                         | The PingSlot Datarate can't be set to DR0 in US915 RAK7249-r213 if the mode is built in NS |
| -                         | The PingSlot Datarate can't be set to DR0 in IN865 RAK7249                                 |
