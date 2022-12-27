---
release_date: 12/19/2022
version: "1.3.6"
release_note_description: WisGateOS is the operating system running on every WisGate Edge gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it. It gives instructions on configuring WAN, the LoRa Packet Forwarder, and MQTT Bridge. It explains how to do system monitoring, update the firmware, and reset the device. Last but not least, it provides information on using the Built-in LoRa Server.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS/WisGateOS_V1.3.6.zip
logo: /assets/images/release-notes/WisGateOS.png

---

<rk-release-notes/>

---


::: tip 📝 NOTE
As of March 2021, all RAK's WisGate Edge gateways are running the new WisGateOS. This also requires a change in the version control of the firmware. That's why WisGateOS starts with version 1.x.x.
:::



##### Added

| No. | Feature                                        | Reference |
| --- | ---------------------------------------------- | ----- |
| 1   | Added WisDM quick link in the WebUI bottom bar | [WisGateOS User Manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#gateway-start-up) |


![login-page.png](/assets/images/release-notes/wisgateos/login-page.png)

![fleet-management.png](/assets/images/release-notes/wisgateos/fleet-management.png)

##### Fixed

**WisGateOS-related fixes:**

| Daily Build No. / Bug No. | Description                                                                                                                                      |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ |
| -                         | Class B beacon cannot be received                                                                                                                |
| -                         | After connecting to TTN, join issues in the AS923 band                                                                                           |
| -                         | Downlinks are rejected by the forwarder in some cases                                                                                            |
| -                         | AWS IoT MQTT client failed to subscribe to the topic if the message is 64 bytes                                                                  |
| -                         | Basics Station won't connect to Actility NS after the gateway is rebooted                                                                        |
| -                         | Devices can not join the Built-In server if the Global integration uses TLS V1                                                                   |
| -                         | In the case of backup restore without a backup link, the WebUI shows a blank page                                                                |
| -                         | MultiWAN default ping interval field setting to 10 minutes                                                                                       |
| -                         | Minor issues with the cellular status                                                                                                            |
| -                         | The RSSI value of FSK channel data exceeds the expected range                                                                                    |
| -                         | AS923-1/AS923-2/AS923-3/AS923-4, the Join Accept message carries FSK and STD channels, which does not conform to the Lora protocol specification |
| -                         | In the end device page, in Built-In Server mode, when the value of the page is set to 0 or a negative number, the page will crash                |



