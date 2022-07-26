---
release_date: 05/14/2022
version: "3.4.1"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
---

<rk-release-notes/>

---


##### Added

| No. | Feature                      | Reference |
| --- | ---------------------------- | --------- |
| 1   | Add RUI3-Sensor-Node example | -         |

##### Changed

| No. | Feature                                                                                                   | Reference                                                           |
| --- | --------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| 1   | The maximum clock of SPI master is changed from 8&nbsp;MHz to 32&nbsp;MHz                                 | -                                                                   |
| 2   | Change RUI BLE API name from `api.ble.customer.xxx` to `api.ble.custom.xxx` because ***customer** is typo | [RUI3 > BLE](https://docs.rakwireless.com/RUI3/BLE/#rakblecustomer) |
| 3   | Force RUI sleep API to go back to sleep on any interrupt until the specified time period passed by        | -                                                                   |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| -                         | Fix erasing user config accidentally by RAK3172 bootloader                 |
| RUI-377                   | `AT+SLEEP` command not working if `AT+PRECV=0` is used                     |
| RUI-372                   | Missing **dtostrf** declaration                                            |
| RUI-239                   | `[/Dev/]`: Refine the checksum mechanism of user configuration for RAK4631 |
| RUI-371                   | RAK3172 battery measurement without `AT+CLIVER` command issue              |
