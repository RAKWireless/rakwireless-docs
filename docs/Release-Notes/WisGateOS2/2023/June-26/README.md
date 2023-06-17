---
release_date: 06/26/2023
version: "2.1.6"
release_note_description: Unified operative system for the WisGate Edge line that provides a feature-rich environment to access and configure the LoRaWAN gateway. The latest version of WisGateOS 2 is based on the latest version of the OpenWRT kernel for better security. WisGateOS 2 uses a simplified user interface that makes it easier to use and program. Integrated with WisDM, which allows the remote management of gateways and firmware. With extension functionality, the user can add extra features and functions to their gateways.
download_link: https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2_Latest_Firmware.zip
logo: /assets/images/release-notes/WisGateOS2.png

---

<rk-release-notes/>

---

::: tip 📝 NOTE

WisGateOS 2 is available only for version 2 WisGate Edge gateways.
The supported models are as follows:
 - WisGate Edge Pro version 2: RAK7289V2, RAK7289CV2, RAK7289V2H, RAK7289CV2H
 - WisGate Edge Lite 2 version 2:  RAK7268V2, RAK7268CV2, RAK7268V2H, RAK7268CV2H
 - WisGate Edge Prime version 2: RAK7240V2, RAK7240CV2, RAK7240V2H, RAK7240CV2H

:::

## Added

| No. | Feature                               |
| --- | ------------------------------------- |
| 1   | WisDM Agent version updated to 1.2.3. |

## Changed

| No. | Feature                     |
| --- | --------------------------- |
| 1   | Update CN470 power meter    |
| 2   | WiFi Password support space |

## Fixed

| Daily Build No. / Bug No. | Description                                                                                                                                           |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| -                         | In case the end device/s sends uplink data every 3 seconds (too frequently), the gateway reports an error "ERROR: [up] failed packet fetch, exiting". |
| -                         | China cannot be selected on the **Change your country** page for CN470 gateways.                                                                      |
| -                         | **AS923 band only** - After a node sends uplink data through FSK or STD frequency, it cannot receive confirm-ok data.                                 |
| -                         | The maximum payload size of the downlink should be specified in the LoRaWAN protocol.                                                                 |
| -                         | In Build-in server mode, AS923 band, downlink phy payload size large than the max limit.                                                              |
| -                         | The frame count stored in DB by NS is inconsistent after restarting the server.                                                                       |
| -                         | In Basics Station mode, connected to Chirp Stack, an error failed to open COM port `/dev/ttyACM0`.                                                    |
| -                         | NS mode, adding "/" at the beginning when configuring Downlink Topic in Integration Interface Parameters will cause an NS error.                      |
