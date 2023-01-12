---
release_date: 11/24/2022
version: "3.5.3"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/RUI/RUI3/Image/History-Release-Version/RUI_3.5.3/
---

<rk-release-notes/>

---


##### Changed

| No. | Feature               | Description                                                                                                                        |
| --- | --------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| 1   | Power saving mode     | Changed the power saving mode to used STOP1 for RAK3172 and RAK3172-sip to fix the UART1 that could not trigger the system wake up |
| 2   | Support UART1 wake up | Changed the UART1 used in HSI Clock for RAK3172 and RAK3172-SiP to fix the UART1 that could not trigger the system wake up         |

##### Fixed

| Daily Build No. / Bug No. | Description                                               |
| ------------------------- | --------------------------------------------------------- |
| Support UART1 wake up     | Fixed the UART1 that could not trigger the system wake up |

