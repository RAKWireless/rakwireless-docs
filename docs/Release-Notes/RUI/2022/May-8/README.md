---
release_date: 05/08/2022
version: "3.4.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
---

<rk-release-notes/>

---

##### Added

| No. | Feature                             | Reference                                                                                                |
| --- | ----------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 1   | Support **AS923-2/AS923-3/AS923-4** | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-band) |

##### Changed

| No. | Feature                                                                                                                               | Reference                                                                                                 |
| --- | ------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| 1   | If `AT+PRECV=65534` is entered, the device will be set as RX mode until `AT+PRECV=0` is typed                                         | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-precv) |
| 2   | If `api.lorawan.precv(65534)` is called, the device will be set as RX mode until `api.lorawan.precv(0)` is called                     | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-precv) |
| 3   | If `AT+PRECV=65533` is typed, the device will be set as RX mode, but still can do TX without typing `AT+PRECV=0`                      | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-precv) |
| 4   | If `api.lorawan.precv(65533)` is called, the device will be set as RX mode but still can do TX without calling `api.lorawan.precv(0)` | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-precv) |
| 5   | Enhance LoRa/LoRaWAN examples                                                                                                         | -                                                                                                         |
| 6   | Temporarily disable NFC feature for RAK4630                                                                                           | -                                                                                                         |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| -                         | Fix Arduino compatibility issues about **I2C/SPI/UART/GPIO**                                      |
| -                         | For RAK4630, fix `AT+SLEEP` crash issue                                                           |
| -                         | Fix small input value issue of `AT+SLEEP`, `api.system.sleep.all()`, and `api.system.sleep.cpu()` |
| RUI-239                   | `[Dev]`: Refine the checksum mechanism of user configuration for RAK4631                          |
| RUI-334                   | BLE disconnect issue when over DFU upgrades                                                       |
| -                         | Workaround `api.system.battery.get()` by looking up a mapping table                               |
