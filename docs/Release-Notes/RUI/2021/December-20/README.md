---
release_date: 12/20/2021
version: "3.1.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/History-Release-Version/RUI_3.1.0/
---


<rk-release-notes/>

---


##### Added

| No. | Feature                             | Description | Reference |
| --- | ----------------------------------- | ----------- | --------- |
| 1   | Support Button DFU via UART1 TX pin | -           | -         |

##### Changed

| No. | Feature                                                                                                                                                                                                                    | Description | Reference                                                                                                                                                                                                                 |
| --- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `AT+MASK` behavior from `8` to be `8+1` for US915/AU915                                                                                                                                                                    | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-mask)                                                                                                                  |
| 2   | Remove the power-consuming auto hello mechanism                                                                                                                                                                            | -           | -                                                                                                                                                                                                                         |
| 3   | Change the behavior of the following commands: <br> &nbsp;&nbsp; - `AT+JN1DL` <br> &nbsp;&nbsp; - `AT+JN2DL` <br> &nbsp;&nbsp; - `AT+RX1DL` <br> &nbsp;&nbsp; - `AT+RX2DL`                                                 | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#lorawan-network-management)                                                                                               |
| 4   | Change the default port of transport mode from **130** to **1**                                                                                                                                                            | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-send)                                                                                                                  |
| 5   | Change the output format of `AT+LTIME`                                                                                                                                                                                     | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-ltime)                                                                                                                 |
| 6   | Change the output format of LoRaWAN asynchronous event                                                                                                                                                                     | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#asynchronous-events)                                                                                                      |
| 7   | Change `AT+DEUI` to `AT+DEVEUI` and `AT+DADDR` to `AT+DEVADDR`                                                                                                                                                             | -           | [AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-deveui)<br>[AT Command Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#at-devaddr) |
| 8   | Modify the design of the following command: <br> &nbsp;&nbsp; - `AT+SN` <br> &nbsp;&nbsp; - `AT+FSN` <br> &nbsp;&nbsp; - `AT+FACTORY`                                                                                      | -           | -                                                                                                                                                                                                                         |
| 9   | Change the transparent mode AT command from `AT+PAM` to `ATD`                                                                                                                                                              | -           | -                                                                                                                                                                                                                         |
| 10  | Remove the command name in all the reply content                                                                                                                                                                           | -           | -                                                                                                                                                                                                                         |
| 11  | Change the delimiter of AT command from `**,**` to `**:**`                                                                                                                                                                 | -           | -                                                                                                                                                                                                                         |
| 12  | Modify AT CMD handler of the following AT command for API mode: <br> &nbsp;&nbsp; - `AT+JN1DL` <br> &nbsp;&nbsp; - `AT+JN2DL` <br> &nbsp;&nbsp; - `AT+RX1DL` <br> &nbsp;&nbsp; - `AT+RX2DL` <br> &nbsp;&nbsp; - `AT+RX2FQ` | -           | -                                                                                                                                                                                                                         |



##### Fixed

| Daily Build No. / Bug No. | Description                                                                            |
| ------------------------- | -------------------------------------------------------------------------------------- |
| Bug #637                  | `AT+LSTMULC` will cause an unrecoverable/unstoppable print event                       |
| Bug #627                  | RX2 parameter may not be updated by NS via **RXParamSetReq**                           |
| Bug #626                  | Over-length uplink frame will cause unexpected uplink event                            |
| Bug #621                  | Join process was stopped while 500&nbsp;kHz channels were all disabled                 |
| -                         | Fix can't wakeup from external wakeup source problem                                   |
| Bug #628                  | DUT won't actively trigger a uplink event after receiving a confirmed downlink message |
| -                         | Fix `AT+BUILDTIME`                                                                     |
| Bug #512                  | **AnalogRead()** return should be 0~1023                                               |

