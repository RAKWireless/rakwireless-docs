---
release_date: 04/21/2022
version: "1.3.3"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.3.3.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---


::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::


##### Fixed

**WisGateOS-related fixes:**

| Daily Build No. / Bug No. | Description                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| -                         | In Packet Forwarder mode, packet loss is monitored when sending multiple packets with a payload size of 222b          |
| -                         | LoRa LED is off after reboot in Basics(tm) Station(BS) mode                                                           |
| -                         | Configuration data lost after disable/enable the OpenVPN                                                              |
| -                         | OpenVPN configuration file can't be uploaded by upload file function                                                  |
| -                         | Breathing light is not normal in BS mode                                                                              |
| -                         | On the dashboard interface, the subscripts of the Airtime(s)/Min table are displayed in reverse order                 |
| -                         | Gateway WiFi is switching in multi-AP (with the same SSID), so that the WiFI connection is unstable                   |
| -                         | If the gateway runs for more than one hour, the display of the three network statuses of multi-WAN will be abnormal   |
| -                         | the default value of the system log buffer size (System->System->Logging->System log buffer size) with the wrong size |
| -                         | Fix the issue with system logging on the SD card                                                                      |

**WisDM-related fixes:**

| Daily Build No. / Bug No. | Description                                                                                              |
| ------------------------- | -------------------------------------------------------------------------------------------------------- |
| -                         | Gateway performs a factory reset unexpectedly after the firmware upgrade from 1.0.2 to 1.3.1             |
| -                         | Fix in some cases the firmware is damaged during OTA from WisDM                                          |
| -                         | Fix WisDm: Agent cannot report the interface rollback event to shadow when the network rollback happened |
