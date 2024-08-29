---
release_date: 08/29/2024
version: "2.2.8"
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

| No. | Feature                                                     |
| --- | ----------------------------------------------------------- |
| 1   | WisDM agent updated to v1.2.8 - WAN failover fix |

## Fixed

**WisGateOS2-related fixes:**

| No. | Description                                                                                                          |
| --- | -------------------------------------------------------------------------------------------------------------------- |
| 1   | Gateway fails to connect to WisDM for various reasons, causing the WisDM Agent to consume up to 90% of memory.                                  |
| 2   | A bug related to MultiWAN failover to Cellular.                                                     |
| 3   | Consecutive adding of cron job records after each firmware update.                                                                    |
| 4   | Loss of time synchronization, which could lead to the gateway going offline.                           |
| 5   | WisDM connection failure (error code 6800) during failover from Ethernet to Cellular.                                           |
| 6   | Errors during Ethernet link down and link up events.                                            |

