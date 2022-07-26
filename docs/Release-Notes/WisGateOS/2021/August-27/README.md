---
release_date: 08/27/2021
version: "1.2.1"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.2.1.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---

::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::

##### Added

| No. | Feature                                              | Reference                                                                                                                                             |
| --- | ---------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Support SX1303                                       | -                                                                                                                                                     |
| 2   | Support Wi-Fi Client static IP address configuration | [WisGate OS User Manual > Network ](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#wi-fi)            |
| 3   | Support AS923-2/3/4                                  | [WisGate OS User Manual > Channel Plan](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#channel-plan) |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| -                         | The air time doesn't appear in the packet logger page when the WisGateOS1.1.1 connected with AWS in Basics station mode in US915                  |
| -                         | Fix Luci: LTE status in overview page - RSSI cannot be displayed                                                                                  |
| -                         | Fix Luci: Error when switching region in advanced mode                                                                                            |
| -                         | Fix RAK7249: The LoRa Concentrator1 'Disable' is invalid in wisgateOS-1.1.1 advance mode                                                          |
| -                         | Fix the channel frequency changing in WisGateOS1.1.2 if the region is in AS923, WisGateOS1.1.2 channel frequency can't be changed in advance mode |
| -                         | Fix multicast default pingslot data rate is not the protocol suggested value in class B in WisGateOS1.1.2                                         |
| -                         | Fix the application key can't be changed in WisGateOS1.1.2 when export the nodes                                                                  |
| -                         | Fix the packet forwarder cycle reboot if the AS923 beacon is set in SF7 or SF11 in r213                                                           |
| -                         | Fix the application ID verification missing in 1.0.1 if user use ABP class C and send downlink unicast via MQTT                                   |
| -                         | Fix the beacon couldn't be sent in WisGateOS1.1.1                                                                                                 |
| -                         | Fix the LoRa std button couldn't be closed in Channel Plan advanced mode                                                                          |
