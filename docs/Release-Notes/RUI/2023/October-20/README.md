---
release_date: 10/20/2023
version: "4.1.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/RUI/RUI3/Image/
---

<rk-release-notes/>

---

::: tip 📝 NOTE

Supported Hardware:

- STM32: RAK3172 / RAK3172-SiP / RAK3172LP-SiP / RAK3172-T
- nrf52: RAK4631 / RAK5010 / RAK3401
- Apollo3: RAK11720

:::

##### Added

| No.     | Feature                               |
| ------- | ------------------------------------- |
| RUI-982 | Add new LA915 region to LoRaWAN stack |

##### Changed

| No.     | Feature                                          |
| ------- | ------------------------------------------------ |
| -       | Open-Source SBP                                  |
| RUI-416 | Reduce RUI3 pre-built size                       |
| -       | Support enable or disable feature on Arduino IDE |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                |
| ------------------------- | -------------------------------------------------------------------------- |
| -                         | Fixed power consumption issue on RAK11720                                  |
| -                         | Fixed join retry can't stop after duty cycle restricted                    |
| RUI-949                   | RUI3 Support for SDI-12 Library                                            |
| RUI-977                   | Open-Source BSP: Device cannot join when only 1 LoRaWAN region is selected |
| RUI-983                   | Open-Source BSP: RAK11720 - Error in Boards.txt                            |
