---
release_date: 05/18/2022
version: "3.4.2"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/History-Release-Version/RUI_3.4.2/
---

<rk-release-notes/>

---

##### Changed

| No. | Feature        | Description                                                                                                                                                                                                                                                                           | Reference |
| --- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 1   | Enter DFU mode | RUI-345: TX1 used as recovery pin causes problems on RAK3172/RAK4631 if a module is used that uses RX1/TX1 <br> &nbsp;&nbsp; 1. Add a new way to enter DFU mode: double clicking on reset button. <br> &nbsp;&nbsp; 2. Remove button DFU mechanism that is triggered by UART1 TX pin. | -         |
| 2   | NFC            | Enable NFC                                                                                                                                                                                                                                                                            | -         |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                      |
| ------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| RUI-377                   | `AT+SLEEP` command not working if `AT+PRECV=0` is used                                                           |
| RUI-347                   | `[RUI API]`: If join network fails, the join packet will not be sent, even if `api.lorawan.join` is called again |
| -                         | Fix I/O interrupt for RAK3172                                                                                    |
| RUI-405                   | Arduino BSP to support right code size after compilation                                                         |
| RUI-391                   | Arduino BSP reports wrong code size after compilation                                                            |
| -                         | Fix BLE crash after single clicking reset button                                                                 |
| -                         | Fix an issue that RAK12007 could not be displayed                                                                |

