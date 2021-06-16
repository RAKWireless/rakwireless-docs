---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK4200 Evaluation Board. 
prev: ../Quickstart/
next: false
tags:
  - RAK4200 Evaluation Board
  - wisduo
  - AT Command Manual
---



### AT Command Manual

The purpose of this document is to demonstrate how to configure the RAK4200 Evaluation Board thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

|            **AT Command**              | **Description**    |
| -------------------------------------- | ------------------ |
| `at+help`                              | This AT command can show all available AT commands of this module/product for you.    |
| `at+version`                           | Get the current firmware version number.   |
| `at+get_config=device:status`          | Get all information about the device’s hardware components and their current status.    |
| `at+set_config=device:restart`         | After set, the device will restart.    |
| `at+set_config=device:boot`            | Let the device work in boot mode.     |
| `at+run`                               | Stop boot mode and run as normal. It is valid when the device works in boot mode.      |
| `at+set_config=device:sleep:X`         | After setting, the device will go to sleep mode or wake up immediately. <br> **• X** - 0 - wake up ; 1 - sleep  |
| `at+set_config=device:uart_mode:X:Y`   | Set the UART work mode.<br> **• X** - UART number on RAK4200 module. <br>**• Y** - 0: Configuration mode; 1: Passthrough mode.  |
| `at+join`                              | Start to join LoRa network    |
| `at+send=lora:X:YYY`                   | Send a customized data. <br> **• X** - LoRa port <br>**• YYY** - The data which you want to send. The limited length is 50 Bytes and the data must be in HEX format.    |
| `at+set_config=lora:work_mode:X`       | Set the work mode for LoRa. <br>**• X** - 0: LoRaWAN, 1: LoRa P2P, 2: Test Mode.     |
| `at+set_config=lora:join_mode:X`       | Set the join mode for LoRaWAN. <br>**• X** - 0: OTAA, 1: ABP       |
| `at+set_config=lora:class:X`           | Set the class for LoRa. <br>**• X** - 0: Class A, 1: Class B, 2: Class C     |
| `at+set_config=lora:region:XXXX`       | Sets the region for LoRa. <br> **• XXXX** - EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.   |
| `at+set_config=lora:confirm:XXXX`      | Sets the type of messages which will be sent out through LoRa. <br> **• XXXX** - 0: unconfirmed, 1: confirmed  |
| `at+set_config=lora:dev_eui:XXXX`      | Sets the device EUI for OTAA. <br>**• XXXX** - the Device EUI.  |
| `at+set_config=lora:app_eui:XXXX`      | Set the application EUI for OTAA. <br>**• XXXX** - the Application EUI.  |
| `at+set_config=lora:app_key:XXXX`      | Set the application key for OTAA. <br>**• XXXX** - the Application Key.   |
| `at+set_config=lora:dev_addr:XXXX`     | Set the device address for ABP. <br>**• XXXX** - the Device Address    |
| `at+set_config=lora:apps_key:XXXX`     | Set the application session key for ABP. <br>**• XXXX** - the Application Session Key. |
| `at+set_config=lora:nwks_key:XXXX`     | Set the network session key for ABP. <br>**• XXXX** - the Network Session Key. |
| `at+set_config=lora:ch_mask:X:Y`       | Set a certain channel on or off. <br>**• X** - the channel number, and you can check which channel can be set before you set it. <br>**• Y** - 0: off, 1: on  |
| `at+set_config=lora:adr:X`             | Open or close the ADR function of node. <br>**• X** - 0: Close ADR; 1: Open ADR.  |
| `at+set_config=lora:dr:X`              | Set the Data rate of node. <br>**• X** - the DR value. Generally, the value of X can be 0~5. More details, please check the LoRaWAN 1.0.2 specification. |
| `at+set_config=lora:tx_power:X`        | **• X** - Set the TX power level. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN 1.0.2 region specification   |
| `at+get_config=lora:status`            | It will return all of the current information of LoRa, except LoRa channel. |
| `at+get_config=lora:channel`           | It will return the state of all LoRa channels. You can check which channel is closed and which channel is open very clearly     |
| `at+set_config=lorap2p:XXX:Y:Z:A:B:C`  | Set the parameters for LoRa P2P mode. This AT command is valid when the work mode is LoRa P2P. <br>**• XXX** - Frequency in Hz. <br>**• Y** - Spreading factor, [6, 7, 8, 9, 10, 11, 12]. <br>**• Z** - Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz. <br>**• A** - Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8. <br>**• B** - Preamble Length, 5 - 65535. <br>**• C** - Power in dbm, 5-20. |
| `at+send=lorap2p:XXX`                  | Send data through LoRa P2P. This AT command is valid when it works in LoRa P2P mode. <br>**• XXX** - the data in HEX format.  |