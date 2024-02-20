---
release_date: 02/27/2024
version: "2.2.2"
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
 - WisGate Edge Lite 2 version 2: RAK7268V2, RAK7268CV2, RAK7268V2H, RAK7268CV2H
 - WisGate Edge Prime version 2: RAK7240V2, RAK7240CV2, RAK7240V2H, RAK7240CV2H
:::


:::warning ⚠️ IMPORTANT
- The WisGateOS2 firmware has been updated significantly. After this update, it is ***no longer possible*** to revert to previous versions of WisDM or the local WebUI. All WisGateOS2 2.2.x extensions are digitally signed. During this process, extensions will automatically update. Contact RAK support before updating the WireGuard Extension.
- An internet connection is mandatory for the update process. This is because the new firmware signature needs to be confirmed, and the Extension Gallery should be accessible to update the already installed extensions.
:::

## Fixed

**WisGateOS2-related fixes:**

| Daily Build No. / Bug No. | Description                                                                                                                  |
|---------------------------|------------------------------------------------------------------------------------------------------------------------------|
| -                         | In UDP Packet Forwarder mode, the region number in the topic does not match the actual value.                                |
| -                         | In UDP Packet Forwarder mode, the topic sent to the Built-In NS is incorrect.                                                |
| -                         | In Built-In NS mode, the value of maxEIRP in the `TxParamSetupReq` is wrong.                                                 |
| -                         | In Built-In NS mode, devices which statistical data have been viewed, will have wrong statistical data.                      |
| -                         | For RAK72xxV2/CV2, NO ETH LED after upgrading to WisGateOS2 2.2.1.                                                           |
| -                         | WisGateOS2.x OpenVPN lost the client configuration after firmware update.                                                    |
| -                         | For a gateway without LTE: If both ETH and FiWi are configured and ETH is with Priority 2, the ETH is still used as Primary. |
| -                         | Failed to add Trackit to gateway on WisGateOS2 2.2.0_b68.                                                                    |
| -                         | When both Cellular and ETH connections are presented, Wireguard fails to connect normally.                                   |
| -                         | After update to WisGateOS2 2.2.x failed to install extension due to `wes` missing.                                           |
