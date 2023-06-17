---
prev: ../Quickstart/
next: false
tags:
  - AT Command Manual
  - RAK5010-M
  - wistrio
rak_desc: For an easier experience with your RAK5010-M-BG95 WisTrio NB-IoT Tracker, a comprehensive list of commands for configuring your device is provided.
rak_img: /assets/images/wistrio/rak5010-m/overview/RAK5010-M.png
---

# RAK5010-M AT Command Manual

The purpose of this section is to demonstrate how to configure the RAK5010-M-BG95 WisTrio NB-IoT Tracker thru the use of AT Commands via a Serial Port Tool running on your Windows PC. The list below shows the AT Commands available for use:

:::tip 📝 NOTE:
 You need a serial port tool that can support DTR functions, like Termite. You can download Termite on their [website](https:\/\/www.compuphase.com\/software_termite.htm).

 For Linux and MacOS, the alternative is [Coolterm](http://freeware.the-meiers.org/).
:::

| AT Command | Description |
| ---- | ---- |
| `at+version` | Get the current firmware version number. |
| `at+set_config=device:restart` | After set, the device will restart. |
| `at+get_config=device:status` | Get all information about the device’s hardware components and their current status. |
| `at+set_config=device:sleep:X` | After set, the device will go to sleep or wake up immediately. <br>• 1 - sleep • 0 - wake up |
| `at+set_config=device:cellular:X` | **• X** - 0: close, 1: open |
| `at+set_config=cellular:send_interval:X:Y` | Set the interval of sending packet loop. <br>**• X** - 0: off, 1: on. <br>**• Y** - the interval time (ms) This value must be more than 150000 (150s). If the X is set to 1, it means that the device will sleep for Y ms after sending a packet automatically in a loop, until you set X to 0. |
| `at+scan=cellular` | Scan the around Cellular networks |
| `at+set_config=cellular:XXX:Y:ZZZ:AAA:BBB:C` | Set the IP address and port which you want to send data through Cellular. <br>**• XXX** - The IP address you want to send data to. <br>**• Y** - The port you want to send data to. <br>**• ZZZ** - The cellular operator’s long name you want to connect, for example: CHINA MOBILE. <br>**• AAA** - The short name of the Cellular operator, for example: CMCC. <br>**• BBB** - The operator’s APN name, for example CMNET. <br>**• C** - The number of the Cellular network type. For example, 0 indicates GSM, 8 indicates LTE cat.M1, and 9 indicates LTE cat.NB1. |
| `at+set_config=cellular:(XXX)` | Set the Cellular module using the Cellular module’s common AT commands which come from its manufacturer. <br>**• XXX** - The Cellular module’s common AT commands. For the full list of supported Quectel BG95-M3 AT Commands, check their [website](https://www.quectel.com/product/lpwa-bg95-cat-m1-cat-nb2-egprs-series).<br>• This is a reserve AT command, and you will not use it normally. |
| `at+send=cellular:XXX` | Send a data through cellular. <br>**• XXX** - The data you want to send. |
|`at+set_config=hologram:XXX` | Configure the Hologram SIM card. <br>**• XXX** - The device key of the Hologram SIM card. You can find it on [Hologram web page](https://dashboard.hologram.io) after activating the Hologram SIM card. |
| `at+send=hologram:user:XXX` | Send a data to Hologram server. <br>**• XXX** - the data you want to send. |
| `at+send=hologram:sensor` | Send a packet of the current sensor’s data to the Hologram server. |
| `at+set_config=ble:work_mode:X:Y`| Set the work mode for BLE. <br>**• X** - 0: BLE peripheral mode, 1: BLE central mode, 2: Beacon scan mode <br>**• Y** - 0: normal range, 1: BLE long range|
