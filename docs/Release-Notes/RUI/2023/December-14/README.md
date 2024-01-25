---
release_date: 12/14/2023
version: "4.1.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/
---

<rk-release-notes/>

---

::: tip 📝 NOTE

Supported Hardware:

- STM32: RAK3172, RAK3172-SiP, RAK3172LP-SiP, RAK3172-T
- nrf52: RAK4631, RAK5010, RAK3401
- Apollo3: RAK11720

:::

##### Added

| No.     | Feature                               |
| ------- | ------------------------------------- |
| RUI-982 | Add new LA915 region to LoRaWAN stack |

##### Changed

| No.     | Feature                                          |
| ------- | ------------------------------------------------ |
| -       | Open-Source BSP                                  |
| RUI-416 | Reduce RUI3 pre-built size                       |
| -       | Support enable or disable feature on Arduino IDE |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                           |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------- |
| -                         | Fixed power consumption issue on RAK11720                                                                             |
| -                         | Fixed join retry can't stop after duty cycle restricted                                                               |
| RUI-949                   | RUI3 Support for SDI-12 Library                                                                                       |
| RUI-977                   | Open-Source BSP: Device cannot join when only one (1) LoRaWAN region is selected                                      |
| RUI-983                   | Open-Source BSP: RAK11720 - Error in `Boards.txt`                                                                     |
| RUI-984                   | `AT+DEBUG` enabled, reported send and receive frequency is not correct                                                |
| RUI-993                   | After arduino build for single region, `DUT` did not received beacon in class B.                                      |
| RUI-995                   | RUI3 I2C buffer is limited to 32&nbsp;bytes, which is too small and needs increase to 64&nbsp;bytes.                  |
| RUI-996                   | When the band setting is not supported by the current app, it is recommended to return the prompt.                    |
| RUI-997                   | [RAK4631] After the second development with Arduino, `AT+BOOT` has an exception and cannot update the firmware again. |
| RUI-998                   | LoRa exception after trying to switch to an unsupported region                                                        |
| RUI-999                   | After the second development with Arduino, the command `ATR` does not work.                                           |
| RUI-1000                  | P2P only mode, compilation fails when all regions are closed.                                                         |
| RUI-1001                  | [RAK4631] Cannot join LoRa network after turning on low power mode.                                                   |
| RUI-1002                  | [RAK4631] [RAK11720] P2P mode only, failure                                                                           |
| RUI-1003                  | RAK3172 file `wdt.cpp` Class WDT, `wdt::enable()` has bug, and the time setting is incorrect.                         |
