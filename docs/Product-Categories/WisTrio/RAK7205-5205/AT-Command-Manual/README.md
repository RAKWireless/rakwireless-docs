---
prev: ../Datasheet/
next: false
tags:
  - at-command-manual
  - wistrio
---

# AT Command Manual

## Introduction

The RAK5205 WisTrio LPWAN Tracker module is designed to simplify LoRa P2P (point to point) and LoRaWAN tracking applications. You can configure the functionality of RAK5205 using AT Commands via UART. A standard Micro-B USB 2.0 with USB to UART bridge is used to provide an interface to control the module. The default parameters of the UART communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this interface.


### AT Command Syntax

The AT command is based on ASCII characters. A command begins with the prefix `AT` or `at` and ends with `<CR><LF>` (i.e. `\r\n`). The maximum length is **255 characters**, which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the `\r\n` part is omitted for the sake of clarity.

After the command is executed by the module, a reply is sent back to the external MCU. In the case the command is successful, the usual reply has the following format:

```
OK\r\n
```

RAK5205 is expected to go to sleep most of the time to save battery. When *any* character is sent to UART during sleep, the expected reply will be:

```
Wake up\r\n
```

The firmware developed running in the external MCU will expect at minimum a string of `OK\r\n` or `Wake up\r\n` after sending a command to the module. On the other hand, when the command is not successfully executed by the module, you will receive a response in the following format:

```
ERROR: [Error Info] [ErrCode]\r\n
```

:::tip 📝 NOTE:
 - If the device is still in boot mode, the reply for most of the commands will be `AT cmd error`.
 - Command `at+run` will make the device escape the boot mode.
:::


### Error Code Table


| Error Code | Description                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | The last command received is an unsupported AT command.                                                                                                                     |
| 2          | Invalid parameter in the AT command.                                                                                                                                        |
| 3          | There is an error when reading or writing the flash memory.                                                                                                                 |
| 5          | There is an error when sending data through the UART port.                                                                                                                  |
| 80         | The LoRa transceiver is busy, could not process a new command.                                                                                                              |
| 81         | LoRa service is unknown. Unknown MAC command received by node. Execute commands that are not supported in the current state, such as sending `at+join` command in P2P mode. |
| 82         | The LoRa parameters are invalid.                                                                                                                                            |
| 83         | The LoRa frequency is invalid.                                                                                                                                              |
| 84         | The LoRa data rate (DR) is invalid.                                                                                                                                         |
| 85         | The LoRa frequency and data rate are invalid.                                                                                                                               |
| 86         | The device has not joined into a LoRa network.                                                                                                                              |
| 87         | The length of the packet exceeded that maximum allowed by the LoRa protocol.                                                                                                |
| 88         | Service is closed by the server. Due to the limitation of duty cycle, the server will send "SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                       |
| 89         | This is an unsupported region code.                                                                                                                                         |
| 90         | Duty cycle is enabled. Due to duty cycle restriction, data cannot be sent at this time until the time limit is removed.                                                     |
| 91         | No valid LoRa channel could be found.                                                                                                                                       |
| 92         | No available LoRa channel could be found.                                                                                                                                   |
| 93         | The internal state of the protocol stack is wrong.                                                                                                                          |
| 94         | Time out reached while sending the packet through the LoRa transceiver.                                                                                                     |
| 95         | Time out reached while waiting for a packet in the LoRa RX1 window.                                                                                                         |
| 96         | Time out reached while waiting for a packet in the LoRa RX2 window.                                                                                                         |
| 97         | There is an error while receiving a packet during the LoRa RX1 window.                                                                                                      |
| 98         | There is an error while receiving a packet during the LoRa RX2 window.                                                                                                      |
| 99         | Failed to join into a LoRa network.                                                                                                                                         |
| 100        | Duplicated downlink message is detected. A message with an invalid downlink count is received.                                                                              |
| 101        | Payload size is not valid for the current data rate (DR).                                                                                                                   |
| 102        | Many downlink packets are lost.                                                                                                                                             |
| 103        | Address fail. The address of the received packet does not match the address of the current node.                                                                            |
| 104        | Invalid MIC is detected in the LoRa message.                                                                                                                                |


### Device AT Command

The Devce AT Command section demonstrates on how to configure the RAK5205 LPWAN Tracker thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| AT Command                           | Description                                                                                                                                                       |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+version`                         | Get the current firmware version number. On BOOT Mode, this command will show the bootloader version.                                                             |
| `at+help`                            | This command is used to obtain all AT commands supported by the current firmware.                                                                                 |
| `at+set_config=device:restart`       | This command will restart the device and will show the standard power on message of the module.                                                                   |
| `at+set_config=device:sleep:X`       | After setting, the device will go to sleep mode or wake up immediately. <br>• **1** - sleep <br>• **0** - wake up.                                                |
| `at+set_config=device:boot`          | Let the device work in boot mode.                                                                                                                                 |
| `at+run`                             | Stop boot mode and run as normal. It is only valid when the device is in boot mode.                                                                               |
| `at+get_config=device:status`        | Get all information about the device’s hardware components and their current status.                                                                              |
| `at+send=uart:X:YYYY`                | Send data through UART.<br>• **X** Definition: The UART number of RAK5205<br>• **Y** Definition: The data you want to send through UART.                          |
| `at+set_config=device:uart_mode:X:Y` | Set the UART work mode.<br>• **X** Definition: The UART number on RAK5205 <br>• **Y** Definition: 0: Configuration mode; 1: Passthrough mode.                     |
| `at+set_config=device:uart:X:Y`      | Set UART BaudRate.<br>• **X** Definition: The UART number on RAK5205 <br>• **YYYY** Definition: The BaudRate value.                                               |
| `at+set_config=device:gpio:X:Y`      | Set a certain GPIO pin to high/low level.<br>• **X** Definition: The pin number of a certain GPIO on RAK5205.<br>• **Y** Definition: 0: low level, 1: high level. |
| `at+get_config=device:gpio:X`        | Get the GPIO level.<br>• **X** Definition: The pin number of the GPIO on RAK5205.                                                                                 |
| `at+get_config=device:adc:X`         | Get the ADC value.<br>• **X** Definition: The pin number of ADC on RAK5205.                                                                                       |


### LoRaWAN AT Command
| AT Command                             | Description                                                                                                                                                                                                                                                                                                                   |
| -------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+join`                              | This command is used for joining to the LoRaWAN network.                                                                                                                                                                                                                                                                      |
| `at+send=lora:X:YYY`                   | This command is used for sending data via LoRaWAN.<br>**X -** LoRa port number. The value range is 1 to 223. <br>**YYY -** Data: The data format is in hexadecimal format and the possible values are between 00-FF                                                                                                           |
| `at+set_config=lora:region:XXX`        | This command is used to set the LoRa region. <br>• **XXX -** one of the following items: EU868, EU433, CN470, IN865, AU915, US915, KR920 and AS923.                                                                                                                                                                           |
| `at+get_config=lora:channel`           | It will return the state of all LoRa channels, then you can see which channel is closed and which channel is open.                                                                                                                                                                                                            |
| `at+set_config=lora:ch_mask:X:Y`       | This command is used to turn on or off a channel in the current region. <br>• **X**: The Channel Number <br>• **Y**: status 0: off, 1: on                                                                                                                                                                                     |
| `at+set_config=lora:dev_eui:XXXX`      | This command is used to set the Device EUI parameter for the LoRaWAN OTAA mode. <br>• **XXXX**: The Device EUI.                                                                                                                                                                                                               |
| `at+set_config=lora:app_eui:XXXX`      | This command is used to set the Application EUI parameter for the LoRaWAN OTAA mode. <br>• **XXXX**: The Application EUI                                                                                                                                                                                                      |
| `at+set_config=lora:app_key:XXXX`      | This command is used to set the Application Key parameter for the LoRaWAN OTAA mode. <br>• **XXXX**: The Application Key                                                                                                                                                                                                      |
| `at+set_config=lora:dev_addr:XXXX`     | This command is used to set the Device Address parameter for the LoRaWAN ABP mode. <br>• **XXXX**: The Device Address                                                                                                                                                                                                         |
| `at+set_config=lora:apps_key:XXXX`     | This command is used to set the Application Session Key parameter for the LoRaWAN ABP mode. <br>• **XXXX**: The Application Session Key                                                                                                                                                                                       |
| `at+set_config=lora:nwks_key:XXXX`     | This command is used to set the Network Session Key parameter for the LoRaWAN ABP mode. <br>• **XXXX**: The Network Session Key                                                                                                                                                                                               |
| `at+set_config=lora:join_mode:X`       | This command is used to switch the LoRaWAN's activation mode between the OTAA and ABP mode. <br>• **X**- 0: OTAA, 1: ABP <br> The default is OTAA.                                                                                                                                                                            |
| `at+set_config=lora:work_mode:X`       | This command is used to set the work mode for LoRa. <br>• **X** - 0: LoRaWAN, 1: LoRa P2P, 2: Test Mode                                                                                                                                                                                                                       |
| `at+set_config=lora:class:X`           | This command is used to set LoRaWAN class to Class A, Class B, or Class C. <br>• **X** - 0: Class A, 1: Class B, 2: Class C                                                                                                                                                                                                   |
| `at+set_config=lora:confirm:X`         | This command is used to set the type of message to be sent: Confirmed/Unconfirmed. <br>• **X** - 0: Unconfirmed, 1: Confirmed                                                                                                                                                                                                 |
| `at+set_config=lora:dr:X`              | This command is used to set the data rate (DR) of LoRa. <br>• **X** - The DR value. Generally, the value of X can be 0 to 5. The data rate is related to the current region. For more details, check the LoRaWAN 1.0.2 specification.                                                                                         |
| `at+set_config=lora:tx_power:X`        | This command is used to set the Tx power level of the LoRa transceiver. <br>• **X** - The unit is in dBm and the default value is 0. LoRaWAN end-device transmit power level limits varies depending on frequency band and DR. For more details, check the LoRaWAN 1.0.2 specification.                                       |
| `at+set_config=lora:adr:X`             | This command is used to turn on or off the ADR (Adaptive Data Rate) feature of the LoRa communication. <br>• **X** - 0: Turn off, 1: Turn on <br> The default is on.                                                                                                                                                          |
| `at+set_config=lora:send_interval:X:Y` | This command is used to set the time interval for sending data. Enable/disable the mechanism for sending data in intervals.<br>• **X** - 0: The device will not send data automatically; 1: the device will send data every Y seconds. <br>• **Y** - Interval time in seconds. This parameter is only valid if X is set to 1. |
| `at+get_config=lora:status `           | It will return all the details of the current LoRa/LoRaWAN configuration.                                                                                                                                                                                                                                                     |

### LoRa P2P AT Commands

| AT Command                            | Description                                                                                                                                                                                                                                                                                                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+set_config=lorap2p:XXX:Y:Z:A:B:C` | This command is used to set the parameters for LoRa P2P mode. This AT command is valid when the work mode is LoRa P2P. <br>• **XXX**: Frequency in Hz <br>• **Y**: Spreading factor \[6, 7, 8, 9, 10, 11, 12\] <br>• **Z**: Bandwidth, 0: 125&nbsp;kHz, 1: 250&nbsp;kHz, 2: 500&nbsp;kHz. <br>• **A**: Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8 <br>• **B -** Preamble Length, 5 to 65535. <br>• **C -** Power in dbm (5 to 20). |
| `at+send=lorap2p:XXX`                 | This command is used to send data through LoRa P2P. This AT command is valid only when LoRa work mode is set to LoRa P2P mode. <br>• **XXX**: The data is in HEX format.                                                                                                                                                                                                                                                            |
                                                                                                                                                                

### Sensor AT Command 

| AT Command                           | Description                                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------- |
| `at+set_config=device:gps_timeout:X` | This command is used to set the timeout for searching GPS satellite <br>• **X**: Time in seconds                                        |
| `at+set_config=device:gps_format:X`  | This command is used to set the GPS payload format <br> • **X** - 0: LPP format 4 decimal digits accuracy; 1: 6 decimal digits accuracy |


## Appendix I: Data Rate by Region

<b> EU433/EU868/AS923 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate \[bit/s\] |
| --------- | ------------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                    |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                    |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                    |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                   |
| 6         | LoRa: SF7 / 250&nbsp;kHz  | 11000                                  |
| 7         | FSK: 50&nbsp;kbps         | 50000                                  |
| 8 …15     | RFU                       |                                        |

<br>

<b> CN470/KR920 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate \[bit/s\] |
| --------- | ------------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                    |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                    |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                    |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                   |
| 6…15      | RFU                       |                                        |

<br>

<b> US915 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate \[bit/s\] |
| --------- | ------------------------- | -------------------------------------- |
| 0         | LoRa: SF10 / 125&nbsp;kHz | 980                                    |
| 1         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                   |
| 2         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                   |
| 3         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                   |
| 4         | LoRa: SF8 / 500&nbsp;kHz  | 12500                                  |
| 5…7       | RFU                       |                                        |
| 8         | LoRa: SF12/500&nbsp;kHz   | 980                                    |
| 9         | LoRa: SF11/500&nbsp;kHz   | 1760                                   |
| 10        | LoRa: SF10/500&nbsp;kHz   | 3900                                   |
| 11        | LoRa: SF9/500&nbsp;kHz    | 7000                                   |
| 12        | LoRa: SF8/500&nbsp;kHz    | 12500                                  |
| 13        | LoRa: SF7/500&nbsp;kHz    | 21900                                  |
| 14…15     | RFU                       |                                        |

<br>

<b> AU915 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate \[bit/s\] |
| --------- | ------------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                    |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                    |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                    |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                   |
| 6         | LoRa: SF8/500&nbsp;kHz    | 12500                                  |
| 7         | RFU                       | RFU                                    |
| 8         | LoRa: SF12/500&nbsp;kHz   | 980                                    |
| 9         | LoRa: SF11/500&nbsp;kHz   | 1760                                   |
| 10        | LoRa: SF10/500&nbsp;kHz   | 3900                                   |
| 11        | LoRa: SF9/500&nbsp;kHz    | 7000                                   |
| 12        | LoRa: SF8/500&nbsp;kHz    | 12500                                  |

<br>

<b> IN865 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate \[bit/s\] |
| --------- | ------------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                    |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                    |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                    |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                   |
| 6         | RFU                       | RFU                                    |
| 7         | FSK: 50&nbsp;kbps         | 50000                                  |
| 8 …15     | RFU                       | RFU                                    |

## Appendix II: TX Power by Region

<b> EU868 </b>
 
By default, MaxEIRP is considered to be +16&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b> US915 </b>

| TXPower | Configuration (conducted power) |
| ------- | ------------------------------- |
| 0       | 30&nbsp;dBm - 2*TXpower         |
| 1       | 28&nbsp;dBm                     |
| 2       | 26&nbsp;dBm                     |
| 3 ~ 9   |                                 |
| 10      | 10&nbsp;dBm                     |
| 11 ~ 15 | RFU                             |

<br>

<b> AU915 </b>

By default, MaxEIRP is considered to be +30&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1 ~ 10  | MaxEIRP - 2*TXPower  |
| 11 ~ 10 | RFU                  |

<br>

<b> KR920 </b>

By default, MaxEIRP is considered to be +14&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b> AS923 </b>

By default, Max EIRP shall be 16&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>

<b> IN865 </b>

By default, MaxEIRP is considered to be 30&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8       | MaxEIRP - 16&nbsp;dB |
| 9       | MaxEIRP - 18&nbsp;dB |
| 10      | MaxEIRP - 20&nbsp;dB |
| 11 ~ 15 | RFU                  |

<br>

<b> CN470 </b>

By default, MaxEIRP is considered to be +19.15&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6       | MaxEIRP - 12&nbsp;dB |
| 7       | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  | RFU                  |

<br>


<b> EU433 </b>

By default, MAxEIRP is considered to be +12.15&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2&nbsp;dB  |
| 2       | MaxEIRP - 4&nbsp;dB  |
| 3       | MaxEIRP - 6&nbsp;dB  |
| 4       | MaxEIRP - 8&nbsp;dB  |
| 5       | MaxEIRP - 10&nbsp;dB |
| 6 ~ 15  | RFU                  |

<br>

## Appendix III：Maximum Transmission Load by Region

::: tip 📝 NOTE
In the following list, M is the length with MAC header while N is the length without MAC header and also the maximum sending data length.
:::

<b> EU868 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6         | 250         | 242         |
| 7         | 250         | 242         |
| 8 ~ 15    | Not Defined | Not Defined |

<br>

<b> US915 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 19          | 11          |
| 1         | 61          | 53          |
| 2         | 133         | 125         |
| 3         | 250         | 242         |
| 4         | 250         | 242         |
| 5 ~ 7     | Not Defined | Not Defined |
| 8         | 61          | 53          |
| 9         | 137         | 129         |
| 10        | 250         | 242         |
| 11        | 250         | 242         |
| 12        | 250         | 242         |
| 13        | 250         | 242         |
| 14 ~ 15   | Not Defined | Not Defined |

<br>

<b> AU915 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6         | 250         | 242         |
| 7         | Not Defined | Not Defined |
| 8         | 61          | 53          |
| 9         | 137         | 129         |
| 10        | 250         | 242         |
| 11        | 250         | 242         |
| 12        | 250         | 242         |
| 13        | 250         | 242         |
| 14 ~ 15   | Not Defined | Not Defined |

<br>

<b> KR920 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6 ~ 15    | Not Defined | Not Defined |

<br>

<b> AS923 </b>

<table style="text-align: center">
<thead>
  <tr>
    <th>Data Rate</th>
    <th colspan = 2>Uplink MAC Payload Size (M)</th>
    <th colspan = 2>Downlink MAC Payload Size (M)</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td></td>
            <td>UplinkDwellTime = 0</td>
            <td>UplinkDwellTime = 1</td>
            <td>DownlinkDwellTime = 0</td>
            <td>DownlinkDwellTime = 1</td>
        </tr>
        <tr>
            <td>0</td>
            <td>59</td>
            <td>N/A</td>
            <td>59</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>1</td>
            <td>59</td>
            <td>N/A</td>
            <td>59</td>
            <td>N/A</td>
        </tr>
        <tr>
            <td>2</td>
            <td>59</td>
            <td>19</td>
            <td>59</td>
            <td>19</td>
        </tr>
        <tr>
            <td>3</td>
            <td>123</td>
            <td>61</td>
            <td>123</td>
            <td>61</td>
        </tr>
        <tr>
            <td>4</td>
            <td>250</td>
            <td>133</td>
            <td>250</td>
            <td>133</td>
        </tr>
        <tr>
            <td>5</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
        </tr>
        <tr>
            <td>6</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
        </tr>
        <tr>
            <td>7</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
            <td>250</td>
        </tr>
        <tr>
            <td>8</td>
            <td colspan=2>RFU</td>
            <td colspan=2>RFU</td>
        </tr>
</tbody>
</table>

<br>


<b> IN865 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6         | 250         | 242         |
| 7         | 250         | 242         |
| 8 ~ 15    | Not Defined | Not Defined |
 
<br>


<b> CN470 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6 ~ 15    | Not Defined | Not Defined |

<br>

<b> EU433 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 250         | 242         |
| 5         | 250         | 242         |
| 6         | 250         | 242         |
| 7         | 250         | 242         |
| 8 ~ 15    | Not Defined | Not Defined |

