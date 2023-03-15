---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK612.
rak_img: /assets/images/wisnode/rak612/quickstart/main/RAK612.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
  - RAK612
  - AT Command Manual
  - wisnode
---

# RAK612 AT Command Manual

The purpose of this section is to demonstrate on how to configure the LPWAN Button thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| AT Command | Description |
| ---- | ---- |
| `at+version` | Get the current firmware version. |
| `at+mode=0` | Set the LPWAN Button to work LoRaWAN mode. |
| `at+band=XXX` | Set the region for LoRa. <br>• XXX - one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923. |
| `at+get_config=dev_eui` | Check the current device EUI |
| `at+set_config=join_mode:X` | Set the activation method <br>• X - 0: ABP, 1: OTAA |
| `at+set_config=dev_eui:XXXX` | Set the device EUI for OTAA. <br>• XXXX - the device EUI. |
| `at+set_config=app_eui:XXXX` | Set the application EUI for OTAA. <br>• XXXX - the application EUI. |
| `at+set_config=app_key:XXXX` | Set the application key for OTAA. <br>• XXXX - the application key. |
| `at+set_config=dev_addr:XXXX` | Set the device address for ABP. <br>• XXXX - the device address. |
| `at+set_config=nwks_key:XXXX` | Set the network session key for ABP. <br>• XXXX - the network session key. |
| `at+set_config=apps_key:XXXX` | Set the application session key for ABP. <br>• XXXX - the application session key. |
| `at+set_config=timer_sleep:XX` | The cycle time in seconds before the LPWAN Button will turn off since the last time you pressed any key <br>• XX - time in seconds; 0 - the default value meaning that it will not power cycle. |
| `at+get_config=timer_sleep` | Get the current sleep timer value. |
| `at+key_config=X,YY,ZZZZ` | Customize the function of each key. <br>• X - the number of the key that you want to customize <br>• YY - the frame port where you are sending the data <br>• ZZZZ - the actual data that you want to send when you press this specific key of the LPWAN Button. |
| `at+send=X` | The type of data that you are sending. <br>• X - 0: unconfirm, 1: confirm |
| `at+join=otaa` | Join via OTAA. |
| `at+join=abp` | Join via ABP. |
| `at+reset=0` | Restart the LPWAN Button. |
