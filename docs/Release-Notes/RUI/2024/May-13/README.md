---
release_date: 05/13/2024
version: "4.1.1"
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

:::warning ⚠️ IMPORTANT

LoRaWAN and LoRa P2P API calls have been separated in two different classes!

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
| RUI-958  | Implement the default setting by 2 different user scenarios and APIs for watchdog feature in RAK3172 and RAK11720. |
|          | Add `api.system.wdt.enable(wdt_reset_timer)`.                                                                      |
|          | Add `api.system.wdt.reset()`.                                                                                      |
| RUI-1019 | `AT+TIMEREQ` and `AT+LTIME` do not have API calls to request and retrieve time from LoRaWAN server.                |
|          | Add `api.lorawan.timereq.get()`.                                                                                   |
|          | Add `api.lorawan.timereq.set(value)`.                                                                              |
|          | Add `api.lorawan.registerTimereqCallback(service_lora_timereq_cb callback)`.                                       |
|          | Add `api.lorawan.ltime.get(struct tm * localtime)`.                                                                |
|          | Add `api.lorawan.ltime.get(struct tm * localtime, int32_t offset)`.                                                |
|          | Delete `api.lorawan.ltime.get()`.                                                                                  |


##### Changed

| No.      | Feature                                                                                       |
|----------|-----------------------------------------------------------------------------------------------|
| RUI-1021 | Add receiving status flag in struct `rui_lora_p2p_revc` to support user get receiving status. |


##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                                                            |
|---------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|
| -                         | Fix retransmission reaches max duty cycle time                                                                                                         |
| -                         | Correct **OneWireSerial API** and doxygen document                                                                                                     |
| RUI-992                   | RUI3 support to FastLed library                                                                                                                        |
| RUI-1006                  | Doxygen Documentation for RUI3 V4.0.1                                                                                                                  |
| RUI-1007                  | Make source code in the generated BSP files easier to read.                                                                                            |
| RUI-1008                  | File `uploader.exe` is flagged as malware by Microsoft Defender.                                                                                       |
| RUI-1009                  | Enabling only LoRa P2P and disabling all LoRaWAN regions throws compiler errors                                                                        |
| RUI-1010                  | **RAK11720**: If the firmware download is interrupted, device is hanging, not returning to bootloader mode                                             |
| RUI-1011                  | API callback for `linkcheck` cannot be registered. No matching function available.                                                                     |
| RUI-1017                  | Disable CN470, CN779, and EU433 by default in Arduino IDE Board Manager                                                                                |
| RUI-1022                  | RUI_4.1.1_270 Compilation for RAK11720 fails                                                                                                           |
| RUI-1030                  | RUI3 V4.1.1 is changing API call syntax. Example codes in the BSP must be updated.                                                                     |
| RUI-1038                  | **RAK3172-SiP**: The pins of GPIO C Group can't be used.                                                                                               |
| RUI-1040                  | Setting the watchdog time does not work.                                                                                                               |
| RUI-1042                  | Failed to compile P2P-related examples.                                                                                                                |
| RUI-1043                  | After sending 50 and 125 Bytes, the DUT crashed.                                                                                                       |
| RUI-1045                  | If AS923 region is disabled, the compiler throws error **undefined reference to RegionAS923SubBandSet**.                                               |
| RUI-1047                  | RUI3-Power-Test Compilation Failure                                                                                                                    |
| RUI-1048                  | RUI3-Sensor-Node Compilation Failure                                                                                                                   |
| RUI-1054                  | **RUI_4.1.1**: The maximum length of payload of `AT+PSEND` is 478 digit length (meaning 239 bytes) but with encryption it extends to 512 digit length. |
