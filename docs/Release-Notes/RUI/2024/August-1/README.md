---
release_date: 08/01/2024
version: "4.2.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
download_link: https://downloads.rakwireless.com/#RUI/RUI3/Image/
---

<rk-release-notes/>

---

::: tip 📝 NOTE

Supported Hardware:

- STM32: RAK3172, RAK3172-SiP, RAK3172LP-SiP, RAK3172-T

_**RUI3 V4.2.0 is only released for RAK3172 variants. Other WisDuo modules will be updated later**_

:::

:::warning ⚠️ IMPORTANT

LoRaWAN and LoRa P2P API calls have been separated in two different classes since RUI3 V4.1.1!

| Old                        | New                     | Comment                                          |
|----------------------------|-------------------------|--------------------------------------------------|
| `api.lorawan.pXXX`         | `api.lora.XXX`          | All LoRa P2P API calls change.                   |
| `api.lorawan.registerPyyy` | `api.lora.registerPyyy` | All LoRa P2P callback register API calls change. |
| `api.lorawan.nwm.set(1)`   | `api.lorawan.nwm.set()` | Set device to LoRaWAN mode.                      |
| `api.lorawan.nwm.set(0)`   | `api.lora.nwm.set()`    | Set device to LoRa P2P mode.                     |

<br>
:::

##### Added

| No.      | Feature                                                                                                            |
|----------|--------------------------------------------------------------------------------------------------------------------|
|          | Change to LoRaWAN stack V1.0.4                                                                                     |



##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                                                            |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| -                         | **Fixed LCTT issue**: ABP mode and Fport 224 deactivated                                                                                               |
| -                         | Fixed the baudrate not saved                                                                                                                           |
| RUI-1044                  | RAK3172 controlled by ESP32 host MCU stops responding after a 10&nbsp;us glitch on the UART2 RX                                                        |
| RUI-1062                  | RAK3172-T changing baudrate on UART2 with `AT+BAUD`                                                                                                    |
| RUI-1068                  | [RUI3 V4.2.0] DevNonce is always starting from 1 after reboot                                                                                          |
| RUI-1071                  | RAK3172, RUI3 V4.2.0 build 294: I2C not working                                                                                                        |
| RUI-1072                  | RUI_4.2.0_294, LoRaWAN Tx current is lower then RUI_4.1.1                                                                                              |
| RUI-1075                  | Example LoRaWAN_ABP will crash when receiving AT command after upload Example RUI3-Power-Test.                                                         |