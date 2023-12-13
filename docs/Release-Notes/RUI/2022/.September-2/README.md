---
release_date: 09/02/2022
version: "3.5.1"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/History-Release-Version/RUI_3.5.1/
---

<rk-release-notes/>

---

##### Added

| No. | Feature          | Description                                          |
| --- | ---------------- | ---------------------------------------------------- |
| 1   | Support RAK3401  | Supprort Wisblock RAK3401 module                     |
| 2   | Add `AT+BOOTVER` | Add new `AT+BOOTVER` for checking bootloader version |

##### Changed

| No. | Feature                                   | Description                                                                                           |
| --- | ----------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| 1   | Support full bandwidth value on LoRa      | RUI-557: Full BW set for LoRa                                                                         |
| 2   | Solved power consumption issue in class C | RUI-629: Class C high power consumption                                                               |
| 3   | Support All of ADC pins                   | RUI-632: To support all ADC, not only ADC1, ADC2                                                      |
| 4   | Enable all ADC pins                       | RUI-661: [DEV] Enable ADC3/ADC4/ADC                                                                   |
| 5   | AT command for the Bootloader version     | RUI-690: Adding AT commands in system level & Bootloader/Application need to add AT commands function |
| 6   | LCTT timer optimization                   | LCTT timer optimization processing, during operation, only one LCTT timer runs                        |
| 7   | Disable detect UART/I2C pin               | Disable detect UART/I2C pin for going into boot mode                                                  |
| 8   | Disable `AT+LPM=2` mode                   | Disable `AT+LPM=2`                                                                                    |
| 9   | Disable Scheduler for all model           | Disable Scheduler for all model                                                                       |
| 10  | AT command version updated                | Release AT commnad version 1.5.7                                                                      |
| 11  | API version updated                       | Release API version 3.2.2                                                                             |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                       |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| RUI-554                   | RAK3172 UART baudrate support 2400 bps                                                                            |
| RUI-635                   | [Doxygen_ATCMD] According to Doxygen `AT+PSF` range is 5~12, but runs `AT+PSF=5` and response is `AT_PARAM_ERROR` |
| RUI-639                   | [AT_CMD] After `ATZ`, RX2FQ should keep the last validated setting                                                |
| RUI-640                   | [AT_CMD] Input the long data at once, UART will lose data                                                         |
| RUI-651                   | `at+join=1:0:10:5` does not retry to connect after the first trial                                                |
| RUI-652                   | [AT_CMD] After the baud rate is set to 4800, it can not be restored to 115200                                     |
| RUI-663                   | [ClassB] The device failed to receive beacon when `AT+LPM=1`                                                      |
| RUI-667                   | [AT_CMD] Preamble Length = {5-65535}, `AT+P2P=470MHz:7:20000:0:65550:14` should return `AT_PARAM_ERROR`           |
| RUI-668                   | [AT_CMD] `AT+PRECV=?` and `AT+RMVMULC=?`, Command without query should return `AT_PARAM_ERROR`                    |
| RUI-685                   | [AT_CMD] `AT+ADDMULC=` Input incorrect parameters should not be written successfully                              |
| RUI-703                   | [LCTT] If `AT+LPM=1` by default, the LCTT test fails                                                              |
| RUI-709                   | [AT+CMD] `AT+SLEEP` causes the device to crash                                                                    |
| RUI-732                   | [Bootloader] RAK3172 Entering AT Command in Boot mode will print twice AT not support                             |
| RUI-740                   | [Lora] RAK4631 ClassC cannot receive downlink data                                                                |
| RUI-735                   | PC detects that the device name of RAK3401 is **RAK4631 Serial COM**                                              |
| RUI-739                   | **System_Serial_Lock** example compile fail                                                                       |
