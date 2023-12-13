---
release_date: 08/10/2022
version: "3.4.11"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/History-Release-Version/RUI_3.4.11/
---

<rk-release-notes/>

---

##### Added

| No. | Feature                                             |
| --- | --------------------------------------------------- |
| 1   | Support RAK3272LP-SiP                               |
| 2   | For RAK3172, add boot log for HF board and LF board |

##### Changed

| No. | Feature                                                                       |
| --- | ----------------------------------------------------------------------------- |
| 1   | Disable the mechanism that detects gpio for going into boot mode              |
| 2   | For RAK3172, it gives different default values to the HF board and LF board   |
| 3   | For RAK3172, the AT command handler can distinguish the HF board and LF board |


##### Fixed


| Daily Build No. / Bug No. | Description                                                                                                            |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| RUI-456                   | [RUI_API] When IO_1 is triggered, just WakeUP and then continue Sleep again                                            |
| RUI-471                   | `api.system.sleep.lora(10000)` - puts everything to sleep. `Loop()` is not continuing after a call.                    |
| RUI-503                   | [RUI API] `api.ble.uart.start()` will the system crash                                                                 |
| RUI-533                   | [RUI API] [SensorHub] After uploading the data for a while, connect the USB debug port to the PC, and a crash happened |
| RUI-546                   | [classB] Pingslot Open window does not print PS:Done                                                                   |
| RUI-547                   | [classB] The device in ClassB mode cannot receive downlink data                                                        |
| RUI-549                   | [classB] AT_ERROR is reported when data is sent in ClassB mode                                                         |
| RUI-550                   | [classB] Sending data during beacon search returns `AT_BUSY_ERROR`, device stuck                                       |
| RUI-581                   | [classB] `AT+CLASS=?` B:S3 status display error                                                                        |
| RUI-596                   | RAK3172 randomly goes into boot mode when production or testing                                                        |
| -                         | Fix the LoRa P2P example's bug                                                                                         |
| -                         | Fix typo for BLE custom service example                                                                                |
| -                         | For RAK3172, fix getting to Boot Mode always                                                                           |
| RUI-390                   | SPI transmission takes a lot of time                                                                                   |
| RUI-392                   | UART transmission takes a lot of time                                                                                  |
