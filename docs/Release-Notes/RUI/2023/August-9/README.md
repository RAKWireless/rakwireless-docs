---
release_date: 08/09/23
version: "4.0.6"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/RUI/RUI3/Image/
---

<rk-release-notes/>

---

##### Added

| No.  | Feature                                                    | Description                                                  |
| ---- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 1    | Add support for CAD to LoRa P2P send command               | Add `AT+CAD`: Get or set the Channel Activity Detection status of P2P mode |
| 2    | Add support for Encryption method to LoRa P2P send command | Add `AT+CRYPIV`: Set or set the encryption IV of P2P mode (16 bytes in hex) |

##### Changed

| No.  | Feature                 | Description                                                  |
| ---- | ----------------------- | ------------------------------------------------------------ |
| 1    | Not support Binary Mode | Remove `AT+APM` <br> Remove `api.apiMode.registerHandler()` `api.apiMode.deregisterHandler()` |
| 2    | Encryption method       | Change `AT+ENCKEY`: Get or set the encryption key of P2P mode (16 bytes in hex) <br> Change `api.lorawan.enckey.set`: The length of encryption key (must be 16 bytes) |

##### Fixed

| Daily Build No. / Bug No. | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| RUI-562                   | P2P encryption between RAK HW and 3rd party HW.              |
| RUI-566                   | Test P2P encryption between RAK HW and ESP32 HW.             |
| RU-825                    | LoRa P2P Receive Callback throws different payload when Encrypted is Enabled on RAK3172. |
| RU-899                    | Encryption Key of LoRa P2P Getting Erased (go back to 0000000000000000). |
| RUI-902                   | `AT+BAT=?`: Always returns `0.00` on RAK3172-SIP.             |
| RU-915                    | `4.0.0_219_RAK11720` can't wakeup when P2P Receive window open(over 10S or do not close windows). |
| RU-953                    | **RAK11720**: `RUI3 V4.0.4_239` battery voltage is wrong.           |
| RU-956                    | **RAK4631**: Sometimes the 1-wire interface does not respond. |
| RUI-957                   | **RAK3172** returns `AT_PARAM_ERROR` on correct `AT+SEND` command.   |
| RU-959                    | **RAK3172-SiP**: The GPIO function at PB4 PIN is not work after the others ADC PIN initialization. |
| RU-960                    | Auto join failed after reboot.                               |
| RUI-923                   | LoRa P2P `AT+PRECV` behavior issue, support `AT+PRECV=?`       |
| RU-963                    | After upgrading FW from **RUI 4.0.5** to **RUI 4.0.6**, encryption key disappears. |
| RUI-966                   | **RAK11720 & RAK4631**: P2P send will cause system hang when CAD enable. |
| RU-968                    | **RAK3172-T**: Not support low band board.                        |
| RUI-969                   | **RAK3172**: `RUI3_4.05` detach interrupt does not work.             |
| RUI-970                   | **RAK11720**: `AT+FACTORY` is not working properly.           |
