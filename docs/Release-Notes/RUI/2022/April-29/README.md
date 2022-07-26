---
release_date: 04/29/2022
version: "3.3.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
---

<rk-release-notes/>

---

##### Added


| No. | Feature                                                                                  | Reference                                          |
| --- | ---------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 1   | Support NFC when RUI3 SDK is used to customize firmware                                  | -                                                  |
| 2   | Add `api.ble.stop()`                                                                     | [BLE](https://docs.rakwireless.com/RUI3/BLE/#stop) |
| 3   | Add `api.system.timer.create()`, `api.system.timer.start()`, & `api.system.timer.stop()` | -                                                  |

##### Fixed

| Daily Build No. / Bug No. | Description     |
| ------------------------- | --------------- |
| Bug #838                  | BLE stop, crash |
