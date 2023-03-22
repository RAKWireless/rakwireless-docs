---
release_date: 03/14/2023
version: "4.0.1"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/RUI/RUI3/Image/
---

<rk-release-notes/>

---

##### Added

| No. | Feature                    | Description        |
| --- | -------------------------- | ------------------ |
| 1   | Add `Serial.getBaudrate()` | Adding API command |


##### Changed

| No. | Feature           | Description                                                 |
| --- | ----------------- | ----------------------------------------------------------- |
| 1   | Enhance log level | [`AT+Debug`] Enhance log level to present more description. |


##### Fixed

| Daily Build No. / Bug No. | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| RUI-930                   | [`AT+BAUD`] It can't restore new baud rate setting after `ATZ` command. |