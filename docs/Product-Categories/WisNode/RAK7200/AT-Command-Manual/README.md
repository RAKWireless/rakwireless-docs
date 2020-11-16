---
prev: ../Datasheet/
next: false
tags:
    - RAK7200
---


# AT Command Manual

To connect the RAK7200 module to a LoRa-P2P connection or a LoRaWAN® network, the module must be configured and LoRa® parameters must be set by sending AT commands. Listed below are the summary of the AT commands supported by the RAK7200 Module.


| **AT Command** |     **Description**          |
| -------------- | ---------------------------- |
| `at+help`                           | Get all available AT Commands        |
| `at+version`                        | Get the current firmware version number      |
| `at+get_config=device:status`       | Get all information about the device’s hardware components and their current status.   |
| `at+set_config=device:restart`      | Restart the Device     |
| `at+set_config=device:XXX:YYY`      | Set a certain sensor’s status. <br>• **XXX**: the sensor’s flag <br> - **gps** = GPS <br> - **acc** = Accelerate <br> - **magn** = Magnetic <br> - **gyro** = Gyroscope <br> - **pressure** = Pressure <br> - **temperature** = Temperature <br> - **humidity** = Humidity <br> - **light_strength** = Light_strength <br> - **voltage** = Voltage <br>• **YYY** - 0: close, 1: open |
| `at+join`                           | Start the join procedure for the LoRaWAN® network     |
| `at+send=X:YYY`                     | Send a customized data. <br>• **X**: LoRa® port <br>• **YYY**: the data you want to send. The limited length is 50 Bytes, and the data must be in HEX format.|
| `at+set_config=lora:work_mode:X`    | Set the Working Mode: <br>• **X** - **0**: LoRaWAN®, **1**: LoRaP2P, **2**: Test Mode. |
| `at+set_config=lora:join_mode:X`    | Set the Join Mode: <br>• **X** - **0**: OTAA, **1**: ABP  |
| `at+set_config=lora:class:X`        | Set the Class for LoRa®. <br>• **X** - **0**: Class A, **1**: Class B, **2**: Class C   |
| `at+set_config=lora:region:XXX`     | Set the Region for LoRa® **XXX -** one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.  |
| `at+set_config=lora:confirm:X`      | Set the type of messages which will be sent out through LoRa®: <br>• **X** - **0**: unconfirm, **1**: confirm  |
| `at+set_config=lora:ch_mask:X:Y`    | Set a certain channel on/off <br>• **X** - The channel number you want to toggle. You can check which channel can be set before you set it. <br>• **Y** - **0**: off, **1**: on    |
| `at+set_config=lora:dev_eui:XXXX`   | Set the device EUI for OTAA. <br>• **XXXX** - the device EUI.       |
| `at+set_config=lora:app_eui:XXXX`   | Set the application EUI for OTAA. <br>• **XXXX -** the application EUI.  |
| `at+set_config=lora:app_key:XXXX`   | Set the application key for OTAA. <br>• **XXXX -** the application key.     |
| `at+set_config=lora:dev_addr:XXXX`  | Set the device address for ABP. <br>• **XXXX -** the device address.       |
| `at+set_config=lora:apps_key:XXXX`  | Set the application session key for ABP. <br>• **XXXX -** the application session key. |
| `at+set_config=lora:nwks_key:XXXX`  | Set the network session key for ABP. <br>• **XXXX** - the network session key.  |
| `at+set_config=lora:send_interval:X:Y` | Set the time interval for sending data. <br>• **X** - Enable/disable the mechanism for sending data in intervals. 0: the device will not send data automatically. 1: the device will send data every Y seconds. <br>• **Y** - Interval time in seconds. This parameter is only valid if X is set to 1. |
| `at+get_config=lora:status`         | It will return all of the current information of LoRa®, except the LoRa® Channel. |
| `at+get_config=lora:channel `       | It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly.  |
