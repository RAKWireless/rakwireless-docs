---
release_date: 5/17/23
version: "1.3.8"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.3.8.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---

::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::

##### Fixed

**WisGateOS-related fixes:**

| Daily Build No. / Bug No. | Description                                                                                                                                                     |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| -                         | Fixed an issue where sometimes the cellular connection could not be established after a reboot. Addressed the channel autoselect option.                        |
| -                         | Resolved the problem with FineTimestampType uplink to ChirpStack value being set to NONE.                                                                       |
| -                         | Fixed the Frame Buffer Backup (Automatic data recovery) to TTN in Packet Forwarder mode. Packet timestamps are now correctly recovered.                         |
| -                         | Addressed a scenario where downlinks were rejected by the forwarder.                                                                                            |
| -                         | Fixed an issue where the Build-In NS would fall into a loop when the MQTT client TLS version did not match the MQTT broker.                                     |
| -                         | Using the AWS IoT MQTT client to subscribe to 64 bytes of uplink data will now receive the data properly after 1 minute.                                        |
| -                         | Basics Station now connects to Actility NS after the gateway is rebooted.                                                                                       |
| -                         | Devices can now join the Built-In server even if the Global integration uses TLS V1.                                                                            |
| -                         | Fixed an issue with backup files in WisGateOS versions 1.3.1(b41) to 1.3.5(b135).                                                                               |
| -                         | Resolved the problem where the RSSI value of FSK channel data displayed on the RAK2287 gateway exceeded the expected range.                                     |
| -                         | Addressed the issue where RSSI levels were displayed as 2 or 0 in WisGateOS 1.3.6.                                                                              |
| -                         | Fixed the inability to select Basics Station as the work mode in RAK7289C-8Channel(USB), where USB-7289C BS was disabled.                                       |
| -                         | After inserting the SIM card and disabling the cellular function, the values for signal level and network are now updated correctly.                            |
| -                         | Reduced the default ping interval for 4G to minimize SIM data consumption.                                                                                      |
| -                         | Fixed an issue where lorasrv became abnormal after setting the SSL/TLS Mode to Self-signed server & client certification and after configuring the certificate. |
| -                         | Resolved the problem where Basics Station mode failed to obtain beacons in TTN and AWS class B modes.                                                           |
| -                         | Fixed the "Bad Gateway 502 error" that occurred when using the MQTT protocol to connect to Azure IoT Hub through PF mode.                                       |
