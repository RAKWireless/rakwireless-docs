---
release_date: 05/12/2023
version: "2.1.5"
release_note_description: Unified operative system for the WisGate Edge line that provides a feature-rich environment to access and configure the LoRaWAN gateway. The latest version of WisGateOS 2 is based on the latest version of the OpenWRT kernel for better security. WisGateOS 2 uses a simplified user interface that makes it easier to use and program. Integrated with WisDM, which allows the remote management of gateways and firmware. With extension functionality, the user can add extra features and functions to their gateways.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip
logo: /assets/images/release-notes/WisGateOS2.png

---

<rk-release-notes/>

---


## Added

| No. | Feature                                                       |
| --- | ------------------------------------------------------------- |
| 1   | Beacon even in Basics Station mode is added to the system log |
| 2   | CA-certificates updated to 20230311 (Azure IoT root certs)    |

## Fixed

| Daily Build No. / Bug No. | Description                                                                                            |
| ------------------------- | ------------------------------------------------------------------------------------------------------ |
| -                         | Failed to obtain the beacons from AWS IoT Core for LoRaWAN in Basics Station mode, Class B end devices |