---
release_date: 10/12/2023
version: "2.2.0"
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


:::warning ⚠️ IMPORTANT
- The WisGateOS2 firmware has been updated significantly. After this update, it is ***no longer possible*** to revert to previous versions of WisDM or the local WebUI. All WisGateOS2 2.2.x extensions are digitally signed. During this process, extensions will automatically update. Contact RAK support before updating the WireGuard Extension.
- An internet connection is mandatory for the update process. This is because the new firmware signature needs to be confirmed, and the Extension Gallery should be accessible to update the already installed extensions.
:::

## Added

| No. | Feature                                                                      |
| --- | ---------------------------------------------------------------------------- |
| 1   | Upgraded OpenWRT to version 2102 to enhance system security and reliability. |
| 2   | Online extension updated with signature verification.                        |
| 3   | Added Chinese Language support in gateway UI.                                |
| 4   | Display syslog in sequence in gateway UI for download.                       |
| 5   | Now supports spaces in ESSID.                                                |
| 6   | TDOA support in gateway UI.                                                  |
| 7   | ChirpStack V4 (MQTT Bridge) integration.                                     |


## Fixed

| Daily Build No. / Bug No. | Description                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| -                         | Slow loading of the gateway overview page when there's no 4G module.                                                   |
| -                         | Missing some mandatory channels for the RU864 region.                                                                  |
| -                         | Loss of a customized logo after firmware upgrade.                                                                      |
| -                         | When creating a gateway for the AS923 region on the TTN server, no frequency is assigned.                              |
| -                         | Errors encountered after connecting the gateway to AWS IOT Core/TTN.                                                   |
| -                         | Incomplete devEUI display in the subscribed topic when sending uplink data to the AWS server.                          |
| -                         | Slow gateway loading and status issues when adjusting the priority of one of the Multi-WAN networks.                   |
| -                         | Inability to receive confirm-ok data after a node sends uplink data via FSK or STD frequency.                          |
| -                         | Abnormal status of `wan0` (`apcli0`) on the Multi-WAN page when WiFi is set to static IP.                              |
| -                         | The ap_client process doesn't stop after changing WiFi mode from AP STA to AP.                                         |
| -                         | Specification requirement for the maximum payload size of downlink in the LoRaWAN protocol.                            |
| -                         | Gateway doesn't return a new channel plan after receiving an End Device's uplink data for regions KR920/AS923-1/2/3/4. |
| -                         | Built-in ns enters a dead loop when the MQTT client TLS version doesn't match the MQTT broker.                         |
| -                         | The gateway stops functioning normally after connecting to ChirpStack in BS mode for 2 days.                           |
| -                         | Connection failures to ChirpStack via TLS authentication in Basics Station mode.                                       |
| -                         | Incorrect status information display when Ethernet protocol type is set to a static address.                           |
| -                         | Some extensions with added MD5 hash become unusable after upgrading to version 2.2.x.                                  |
| -                         | MQTT password now supports a null value (no password).                                                                 |
| -                         | LAN-WiFi exhibits abnormalities after enabling WAN-WiFi.                                                               |
| -                         | The previous client IP remains available after switching from AP + Client.                                             |
| -                         | Abnormal status of `wan0` (`apcli0`) on the Multi-WAN page when WiFi is configured as a static IP.                     |