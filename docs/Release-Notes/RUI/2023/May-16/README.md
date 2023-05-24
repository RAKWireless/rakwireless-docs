---
release_date: 05/16/23
version: "4.0.5"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/RUI/RUI3/Image/
---

<rk-release-notes/>

---

##### Added

| No.  | Feature                                                                          |
| ---- | -------------------------------------------------------------------------------- |
| 1    | Added RAK3172-T in the RUI support model.                                        |
| 2    | Low power mode USB plug/unplug wakeup API.                                       |
| 3    | Added `api.system.sleep.register` Wakeup Callback (POWER_SAVE_HANDLER callback). |

##### Changed

| No.  | Feature                                                                               |
| ---- | ------------------------------------------------------------------------------------- |
| 1    | `AT+P2P` adds a new parameter for the runtime setting.                                |
| 2    | Support detects battery voltage from internal Vref for RAK3172-SiP and RAK3172LP-SiP. |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                     |
| ------------------------- | ----------------------------------------------------------------------------------------------- |
| RUI-954                   | The RAK3172 had problems after random power cycles.                                             |
| RUI-943                   | RAK3172 does not respond to `AT+` commands after 48 days.                                       |
| RUI-131                   | [`RUI API`]: `api.lorawan.join()` cannot customize parameters.                                  |
| RUI-838                   | [`AT+LPSEND`]: `AT+SLEEP=0` documentation error.                                                |
| RUI-839                   | [`AT+LPSEND`]: `AT+LPSEND=0:0:11` will return `OK`.                                             |
| RUI-843                   | [`AT+BAND`]: `RX2 DR=7` shall not be set in AU915.                                              |
| RUI-847                   | [`AT+P2P`]: `DUT` would change the parameter while inputting an invalid parameter via `AT+P2P`. |
| RUI-885                   | Missing `Serial.begin(xxxx);` in some examples.                                                 |
| RUI-941                   | With RUI3 V4.0.1, the `LoRaWAN_ABP` example sketch fails to work.                               |
| RUI-944                   | RUI3 firmware boot-up message standardization.                                                  |
| RUI-945                   | Added [`+EVT`]: `Transmission Done` message on `AT+PSEND` of LoRa P2P and `AT+SEND` of LoRaWAN. |
| RUI-951                   | `AT+DR` value is not updated when ADR changes the latest DR used.                               |
