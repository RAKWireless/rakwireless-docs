---
release_date: 07/15/2022
version: "3.5.0"
release_notes_description: The RAKwireless Unified Interface V3 (RUI3) is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules and supports the standard AT Commands and the Binary Mode. The Binary mode is an improved version of the AT command with its efficient byte-array-based protocol and implementation of checksum. RUI3 also allows you to create your own custom firmware using RUI3 APIs that are compatible with popular IDEs like Arduino and Visual Studio. With custom firmware, you will not need any external host microcontroller or microprocessor, which can save you cost, circuit board space, and current consumption.
logo: /assets/images/release-notes/rui.png
---

<rk-release-notes/>

---

##### Added

| No. | Feature                            | Description                                                | Reference                                                                                                       |
| --- | ---------------------------------- | ---------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| 1   | Support RAK5010                    | Support RAK5010                                            | [RAK5010 WisTrio NB-IoT Tracker Pro](https://docs.rakwireless.com/Product-Categories/WisTrio/RAK5010/Overview/) |
| 2   | Schedular mode to RAK3172          | RUI-145: [DEV] Implementation on Scheduler API for RAK3172 | -                                                                                                               |
| 3   | New AT command                     | Add AT+TIMEREQ                                             | -                                                                                                               |
| 4   | New AT command                     | Add AT+DEBUG                                               | -                                                                                                               |
| 5   | New AT command                     | Add AT+LPM                                                 | -                                                                                                               |
| 6   | Add new library                    | Add Wire1 instance for Arduino Wire library                | -                                                                                                               |
| 7   | New AT command to RAK4630 &RAK5010 | For RAK4630/RAK5010, add AT+BLEMAC                         | -                                                                                                               |
| 8   | Add new example                    | Add AWS MQTT SSL example                                   | -                                                                                                               |
| 9   | Add new example                    | Add RUI3-Power-Test example                                | -                                                                                                               |



##### Changed

| No. | Feature                               | Description                                                             |
| --- | ------------------------------------- | ----------------------------------------------------------------------- |
| 1   | Enhance SPI master performance        | Enhance SPI master performance                                          |
| 2   | Open the source of UHAL layer         | Open the source of UHAL layer                                           |
| 3   | Optimize LINK ADR logic               | Optimize LINK ADR logic,reject LINK ADR when ADR is closed              |
| 4   | Querying multicast groups optimzation | Optimizing logical processing for querying multicast groups             |
| 5   | Optimizing Smart Fram example         | Use timer for Smart Farm example                                        |
| 6   | Optimizing BLE configuration example  | Add delay 10s for BLE Configuration example, or user can't see the logs |
| 7   | New AT command                        | RUI-630: [Doc]add AT+VER=?can read that the device is in Boot mode      |

##### Fixed

| Daily Build No. / Bug No. | Description                                                                                                                                   |
| ------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| RUI-335                   | EU868 CLASS A +EVT:SEND_CONFIRMED_FAILED.                                                                                                     |
| RUI-392                   | [UART] UART transmission takes a lot of time.                                                                                                 |
| RUI-508                   | [Firmware] Buffer overflow condition occurs inside service_lora_lstmulc function                                                              |
| RUI-490                   | Inside At_Restore function, else if (ret = -UDRV_BUSY) only has one equal operator                                                            |
| RUI-489                   | Arduino BSP reports wrong code size after compilation.                                                                                        |
| RUI-488                   | [RUI API] service_lora_trssi(int16_t *rssiVal) function returns pointer                                                                       |
| RUI-480                   | [Firmware] There is only one equal operator inside if statement                                                                               |
| RUI-479                   | [Firmware] There is only one equal operator inside if statement                                                                               |
| RUI-456                   | [RUI_API] When IO_1 is triggered, just WakeUP and then continue Sleep again                                                                   |
| RUI-491                   | [BLE] Compared to BLE SPEC, the range of advertising intervals is too different                                                               |
| RUI-493                   | [BLE] Advertise Tx Power set functional fail                                                                                                  |
| RUI-503                   | [RUI API] api.ble.uart.start() will system crash                                                                                              |
| RUI-492                   | [BLE] Advertise interval set functional fail                                                                                                  |
| RUI-515                   | [BLE] Setting up Advertising data will crash if there is no pre-action                                                                        |
| RUI-446                   | no analogOversampling function on rak3172(rak5811)                                                                                            |
| RUI-433                   | no analogOversampling function on rak4631(rak5811)                                                                                            |
| RUI-533                   | [RUI API] [SensorHub] After Uploading Data for a while, connect USB debug port to PC and crash happened                                       |
| RUI-439                   | The program will get stuck at 100 lines on rak3172(rak1901)                                                                                   |
| RUI-458                   | [RUI_ATCMD]Baud rate is not saved after power failure                                                                                         |
| RUI-517                   | [BLE] BLE_Beacon_Custom_Payload example program note error                                                                                    |
| -                         | Fix LoRa P2P example's bug                                                                                                                    |
| RUI-428                   | Parameter problem of the analogReference() function on rak3172(rak19006)                                                                      |
| RUI-427                   | Parameter problem of the analogReference() function on rak4631(rak19006)                                                                      |
| RUI-471                   | api.system.sleep.lora(10000); puts everything into sleep. Loop() is not continuing after call                                                 |
| RUI-459                   | [RUI_ATCMD]AT+LOCK and AT+PWORD can be queried, inconsistent with the document,and the return value of AT+LOCK is not standard                |
| RUI-460                   | [RUI_ATCMD]The AT+SLEEP range is incorrect                                                                                                    |
| RUI-457                   | [RUI_ATCMD]AT+APM=1 should be return AT_PARAM_ERROR(AT+APM/AT+ATM/ATZ/ATR/AT+BOOT)                                                            |
| RUI-514                   | [NBIOT]BG96 AT Command cannot be used. The NBIOT function cannot be tested                                                                    |
| RUI-477                   | [RUI API] To modify txpower with “api.ble.settings.txPower.set(power)” in beacon mode is not work                                             |
| RUI-454                   | [RUI_API] RUI3 - RAK5010 Doxygen LPS22HB / pressure (MIKKIBAR) error ,it should be pressure(MILLIBAR)                                         |
| RUI-453                   | [RUI_API] Undefined reference to `rak1901::deinit()'                                                                                          |
| RUI-436                   | rak2305 needs to add delay before it can run normally on rak4631                                                                              |
| RUI-432                   | "SERIAL_PORT_HARDWARE "is not defined on rak4631(rak5802)                                                                                     |
| RUI-424                   | The default band for low-frequency nodes is 4                                                                                                 |
| RUI-390                   | [SPI] SPI transmission takes a lot of time                                                                                                    |
| RUI-379                   | classC ABP mode sends AT+JOIN=1:0:7:5 is reported AT_ERROR                                                                                    |
| RUI-516                   | [BLE] The api.ble.settings.broadcastName.get() will fail after setting the advertising data                                                   |
| RUI-513                   | [BLE] Advertising set Advertising data to Complete Local Name fail                                                                            |
| RUI-570                   | When there is Code in the Void loop, the device will sleep automatically                                                                      |
| RUI-597                   | [RUI API] About RAK5010, can't use RUI API to get BG96's response                                                                             |
| RUI-595                   | [NBIOT]5010 Maximum number of sent bytes supported                                                                                            |
| RUI-591                   | [NBIOT] Example RAK5010_Access_HTTP_Server commmand "AT+QHTTPREADFILE=" always response ERROR:730                                             |
| RUI-583                   | [NBIOT] BG96 bg96_write funtion appears unknown "⸮"                                                                                           |
| RUI-581                   | [classB]AT+CLASS=? B:S3 status display error                                                                                                  |
| RUI-579                   | Because powering on BG96 is slow, we have at least 60s time to keep it on. However, every activity on AT command should restart the 60s timer |
| RUI-577                   | RAK5010 naming is not correct in Arduino IDE                                                                                                  |
| RUI-571                   | [NBIOT] BG96 command cannot be used after baud rate is changed                                                                                |
| RUI-569                   | [NBIOT]BG96 command? will return ATCELL: Send a command to LTE module                                                                         |
| RUI-558                   | The behavior of RAK4631, RAK5010 and RAK3172 is inconsistent when they reboot after entering boot mode                                        |
| RUI-550                   | [classB]Sending data during beacon search returns AT_BUSY_ERROR, device stuck                                                                 |
| RUI-549                   | [classB]AT_ERROR is reported when data is sent in ClassB mode                                                                                 |
| RUI-547                   | [classB]The device in ClassB mode cannot receive downlink data                                                                                |
| RUI-546                   | [classB] Pingslot Open window does not print PS:Done                                                                                          |
| RUI-544                   | [AT+CMD]AT command return 'AT_ERROR' should be 'AT_PARAM_ERROR'                                                                               |
| RUI-442                   | The code compiles properly, downloads to Core and doesn't execute on rak3172(rak14000)                                                        |
| RUI-430                   | rak18000 compiler error::PDM.h: No such file or directory on rak4631                                                                          |
| RUI-429                   | rak12500 UART interface cannot communicate properly on rak4631                                                                                |
| RUI-407                   | Beacon search failed to print twice +EVT: BC FAILED (zengtao 643)                                                                             |
| RUI-402                   | [RUI API] Execute RAK12500 Official Uart example, it prints an error value and is not a search step                                           |
| RUI-596                   | RAK3172 randomly goes into boot mode when production or testing                                                                               |
| RUI-637                   | [Doxygen_ATCMD] Send Long Packet Data with hexadecimal "ABCDEF" should be work                                                                |
| RUI-617                   | ATCELL+QFUPL is too hard to use                                                                                                               |
