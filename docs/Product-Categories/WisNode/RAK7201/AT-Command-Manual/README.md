---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK7201.
rak_img: /assets/images/wisnode/rak7201/datasheet/1.rak7201-wisnode-button-4k.png
prev: ../Datasheet/
next: ../Firmware-Upgrade-Guide/
tags:
  - RAK7201
  - AT Command Manual
  - wisnode
---

# RAK7201 AT Command Manual

## Overview

The configuration of the RAK WisNode Button can be done by AT commands send by RAK Serial Tool through a USB cable between a PC and the button.

::: tip 📝 NOTE:
To use the AT commands to configure the RAK WisNode Button you need to activate the Configuration Mode. To activate it press the number 1 key for 3 seconds. All four LED’s will light in blue. After that, you can use the Serial Tool to send AT commands.
:::

### AT Commands Basics

The maximum length of an AT command string is 255 characters (including "\r\n").

The command must start with **"at+"** and end with **\<CR\>\<LF\> ("\r\n").**

::: tip 📝 NOTE:
Adding \r\n at the end of every AT command is not required if the RAK Serial Tool is used. All commands in this manual will be described without \r\n added as the RAK Serial Tool is used.
:::

AT commands can be divided into:

- Read commands - Read the configuration or status of the device, the general format is:

  ```
  at+get_config=<m>:<m>
  ```

  The command name and the parameter are separated by **"="**. If multiple parameters are included, they are separated by **":"**.

- Write commands - Write/modify the device configuration, the general format is:

  ```
  at+set_config=<m>:<n>
  ```

  The command name and the parameter are separated by **"="**. If there are multiple parameters, they are separated by **":"**.

- Other commands - There are some commands, neither read nor write. For example, the command for LoRa to send data is:

  ```
  at+send=lora:<m>:<n>
  ```

Command responses:

- When the execution of the command is successful：

```
OK [information]
```

Read command response will start with **"OK"**, followed by the obtained information. A write command response will contain just **"OK"**.

Some special commands will trigger module restart. For example, the command "**at+set_config=device:restart**". It ends with **"Initialization OK"**, in the following format:

```
[information]
Initialization OK
```

- When the command configuration is unsuccessful：

```
ERROR: <error code>
```

The response will start with **"ERROR:"** followed by the error code.

### Error Code Meaning

| **Error Code** | **Meaning**                                                                                                                                                                             |
| :------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|       1        | The last command received is an unsupported AT command.                                                                                                                                 |
|       2        | An invalid parameter in the AT command.                                                                                                                                                 |
|       3        | There is an error when reading or writing the flash memory.                                                                                                                             |
|       5        | There is an error when sending data through the UART port.                                                                                                                              |
|       80       | The LoRa transceiver is busy, could not process a new command.                                                                                                                          |
|       81       | LoRa service is unknown. Unknown MAC command was received by the node. Execute commands that are not supported in the current state, such as sending the "at+join" command in P2P mode. |
|       82       | The LoRa parameters are invalid.                                                                                                                                                        |
|       83       | The LoRa frequency is invalid.                                                                                                                                                          |
|       84       | The LoRa data rate is invalid.                                                                                                                                                          |
|       85       | The LoRa frequency and data rate are invalid.                                                                                                                                           |
|       86       | The device hasn’t joined a LoRa network.                                                                                                                                                |
|       87       | The length of the packet exceeded the maximum allowed by the LoRa protocol.                                                                                                             |
|       88       | The service is closed by the server. Due to the limitation of the duty cycle, the server will send the "SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                       |
|       89       | This is an unsupported region code.                                                                                                                                                     |
|       90       | The duty cycle is restricted. Due to duty cycle, data cannot be sent at this time until the time limit is removed.                                                                      |
|       91       | No valid LoRa channel could be found.                                                                                                                                                   |
|       92       | No available LoRa channel could be found.                                                                                                                                               |
|       93       | Status is an error. Generally, the internal state of the protocol stack is wrong.                                                                                                       |
|       94       | Time out reached while sending the packet through the LoRa transceiver.                                                                                                                 |
|       95       | Time out reached while waiting for a packet in the LoRa RX1 window.                                                                                                                     |
|       96       | Time out reached while waiting for a packet in the LoRa RX2 window.                                                                                                                     |
|       97       | There is an error while receiving a packet during the LoRa RX1 window.                                                                                                                  |
|       98       | There is an error while receiving a packet during the LoRa RX2 window.                                                                                                                  |
|       99       | Failed to join into a LoRa network.                                                                                                                                                     |
|      100       | Duplicated down-link message detected. A message with an invalid down-link count was received.                                                                                          |
|      101       | The payload size is not valid for the current data rate.                                                                                                                                |
|      102       | There were many downlink packets lost.                                                                                                                                                  |
|      103       | Address fail. The address of the received packet does not match the address of the current node.                                                                                        |
|      104       | Invalid MIC was detected in the LoRa message.                                                                                                                                           |

## General AT Commands

### at+version

This command is used to read the version number of the current firmware.

| **Command type** | **Command**  | **Response**   |
| ---------------- | ------------ | -------------- |
| Read             | `at+version` | `OK <version>` |

Parameter: None

Example:

```
at+version
OK V1.0.0.101520_RC
```

### at+help

This command lists all AT commands supported by the current firmware.

| **Command type** | **Command** | **Response**           |
| ---------------- | ----------- | ---------------------- |
| Read             | `at+help`   | `OK <all AT commands`> |

Parameter: None

Example:

```
at+help
OK Device AT commands:
at+version
at+help
at+set_config=device:restart
at+get_config=device:status
at+heartbeat=<interval>
at+button=<button>:<port>:<data>
LoRaWAM AT commands:
at+join
at+send=lora:<port>:<data>
at+set_config=lora:region:<region>
at+get_config=lora:channel
at+set_config=lora:dev_eui:<deveui>
at+set_config=lora:app_eui:<appeui>
at+set_config=lora:app_key:<appkey>
at+set_config=lora:dev_addr:<devaddr>
at+set_config=lora:apps_key:<appskey>
at+set_config=lora:nwks_key:<nwkskey>
at+set_config=lora:join_mode:<mode>
at+set_config=lora:ch_mask:<channel>:<mask>
at+set_config=lora:confirm:<confirm>
at+set_config=lora:dr:<dr>
at+set_config=lora:tx_power:<power>
at+set_config=lora:adr:<adr>
at+get_config=lora:status
at+set_config=lora:default_parameters
```

### at+set_config=device:restart

This command is used to restart the device.

| **Command type** | **Command**                    | **Response** |
| ---------------- | ------------------------------ | ------------ |
| Write            | `at+set_config=device:restart` |              |

Parameter: None

Example:

```
at+set_config=device:restart
RAK Button version:1.0.0.101520_RC
Initialization OK
```

### at+get_config=device:status

This command is used to query the key content of the device.

| Command type | Command                       | Response           |
| ------------ | ----------------------------- | ------------------ |
| Read         | `at+get_config=device:status` | `OK <information>` |

Parameter: None

Example:

```
at+get_config=device:status
OK Board Core:RAK4270
MCU:STM32L071KB
LoRa chip:SX1262
Heartbeat interval time : 1 h
Button1 Port：1 Information: 1234
Button2 Port：1 Information: 1234
Button3 Port：1 Information: 1234
Button4 Port：1 Information: 1234
```

### at+heartbeat=\<interval\>

This command is used to configure the device's heartbeat. The heartbeat is used to send a packet to the Server at a defined period. This command is disabled by default.

| **Command type** | **Command**               | **Response** |
| ---------------- | ------------------------- | ------------ |
| Write            | `at+heartbeat=<interval>` | `OK`         |

Parameter：

| **Parameter** | Description                                                             |
| ------------- | ----------------------------------------------------------------------- |
| interval      | Heartbeat sending interval, value range 1-120, unit hours. 0 = disable. |

Example:

```
at+heartbeat=1
OK
```

### at+button=\<button\>:\<port\>:\<data\>

This command is used to configure every button frame port and data.

| **Command type** | **Command**                         | **Response** |
| ---------------- | ----------------------------------- | ------------ |
| Other            | `at+button=<button>:<port>:<data>` | `OK`         |

Parameter：

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| button    | Set the key for sending data, range 1-4.            |
| port      | The sending port of LoRa, the value range is 1-223. |
| data      | The data to be sent by the key, max. 10 characters. |

Example: Configure button 1 to send data 1234 on frame port 1.

```
at+button=1:1:1234
OK
```

## LoRaWAN AT Commands

### at+join

This instruction is used to join the LoRaWAN network.

| **Command type** | **Command** | **Response**      |
| ---------------- | ----------- | ----------------- |
| Other            | `at+join`   | `OK Join Success` |

Parameter: None

Example：

```
at+join
OK Join Success
```

### at+send=lora:\<port\>:\<data\>

This command is used to manually send data through LoRaWAN.

| Command type | **Command**                  | Response |
| ------------ | ---------------------------- | -------- |
| Other        | `at+send=lora:<port>:<data>` | `OK`     |

Parameter：

| Parameter | Description                                                |
| --------- | ---------------------------------------------------------- |
| port      | The sending port of LoRa, the value range is 1-223.        |
| data      | The data to be sent has a maximum length of 10 characters. |

Example:

- When the sent data is an unconfirmed type:

```
at+send=lora:1:5A00
OK
```

- When the sent data is a confirmed type：

```
at+send=lora:1:5A00
OK
RX RSSI:-105 SNR:-12
```

When the confirmed type is used, the node will receive an ACK response from the Network. The received message is constructed by the reception parameters. In the exemplary response **"RX RSSI:-105 SNR:-12"** **"-105"** represents the RSSI and **"-12"** represents the SNR.

### at+set_config=lora:region:\<region\>

This command is used to set the corresponding working frequency band. The default is EU868.

| Command type | Command                              | Response |
| ------------ | ------------------------------------ | -------- |
| Write        | `at+set_config=lora:region:<region>` | `OK`     |

Parameter：

| Parameter | Description                               |
| --------- | ----------------------------------------- |
| region    | IN865, EU868, US915, AU915, KR920, AS923. |

Example:

```
at+set_config=lora:region:EU868
OK
```

### at+get_config=lora:channel

This command is used to read all LoRa channel information of the current region of the device.

| **Command type** | **command**                  | **answer**                 |
| ---------------- | ---------------------------- | -------------------------- |
| Read             | `at+get_config=lora:channel` | `OK <channel information>` |

Parameter: None

Example:

```
at+get_config=lora:channel
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0
```

The example is for the EU868 region. In **"\*0, on,868100000,0,5"** as an example, the channel parameter analysis is: **"\*"** if the channel is open, there will be this mark in front; **"0"** is the number of the channel; **"on"** means that the channel is currently open; **"868100000"** is the actual frequency of the channel, in Hz; **"0,5"** means the DR range of the channel is DR0~DR5.

### at+set_config=lora:ch_mask:\<channel_number\>:\<status\>

This command is used to set a channel in the current region to open or close.

| Command type | Command                                                | Response |
| ------------ | ------------------------------------------------------ | -------- |
| Write        | `at+set_config=lora:ch_mask:<channel_number>:<status>` | `OK`     |

Parameter：

| Parameter      | Description          |
| -------------- | -------------------- |
| channel_number | Channel number.      |
| status         | 0 = close, 1 = open. |

Example:

```
at+set_config=lora:ch_mask:0:0
OK
```

### at+set_config=lora:dev_eui:\<dev_eui\>

This command is used to set the parameter Device EUI.

| Command type | Command                                | Response |
| ------------ | -------------------------------------- | -------- |
| Write        | `at+set_config=lora:dev_eui:<dev_eui>` | `OK`     |

Parameter：

| Parameter | Description |
| --------- | ----------- |
| dev_eui   | Device EUI. |

Example：

```
at+set_config=lora:dev_eui:3530353064377716
OK
```

### at+set_config=lora:app_eui:\<app_eui\>

This command is used to set the parameter Application EUI.

| Command type | Command                                | Response |
| ------------ | -------------------------------------- | -------- |
| Write        | `at+set_config=lora:app_eui:<app_eui>` | `OK`     |

Parameter：

| Parameter | Description      |
| --------- | ---------------- |
| app_eui   | Application EUI. |

Example：

```
at+set_config=lora:app_eui:0000000000000001
OK
```

### at+set_config=lora:app_key:\<app_key\>

This command is used to set the parameter Application Key.

| Command type | Command                                | Response |
| ------------ | -------------------------------------- | -------- |
| Write        | `at+set_config=lora:app_key:<app_key>` | `OK`     |

Parameter：

| Parameter | Description      |
| --------- | ---------------- |
| app_key   | Application Key. |

Example:

```
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228
OK
```

### at+set_config=lora:dev_addr:\<dev_addr\>

This command is used to set the Device Address parameter of LoRaWAN.

| Command type | Command                                  | Response |
| ------------ | ---------------------------------------- | -------- |
| Write        | `at+set_config=lora:dev_addr:<dev_addr>` | `OK`     |

Parameter：

| Parameter | Description     |
| --------- | --------------- |
| dev_addr  | Device Address. |

Example:

```
at+set_config=lora:dev_addr:260125D7
OK
```

### at+set_config=lora:apps_key:\<apps_key\>

This command is used to set the parameter Application Session Key.

| Command type | Command                                  | Response |
| ------------ | ---------------------------------------- | -------- |
| Write        | `at+set_config=lora:apps_key:<apps_key>` | `OK`     |

Parameter：

| Parameter | Description              |
| --------- | ------------------------ |
| apps_key  | Application Session Key. |

Example:

```
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228
OK
```

### at+set_config=lora:nwks_key:\<nwks_key\>

This command is used to set the parameter Network Session Key.

| Command type | Command                                  | Response |
| ------------ | ---------------------------------------- | -------- |
| Write        | `at+set_config=lora:nwks_key:<nwks_key>` | `OK`     |

Parameter：

| Parameter | Description          |
| --------- | -------------------- |
| nwks_key  | Network Session Key. |

Example:

```
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42
OK
```

### at+set_config=lora:join_mode:\<mode\>

This command is used to set the network access mode of LoRaWAN to OTAA or ABP. It is set to OTAA by default.

| Command type | Command                               | Response |
| ------------ | ------------------------------------- | -------- |
| Write        | `at+set_config=lora:join_mode:<mode>` | `OK`     |

Parameter：

| Parameter | Description                             |
| --------- | --------------------------------------- |
| mode      | Network access mode, 0 = OTAA, 1 = ABP. |

Example：

```
at+set_config=lora:join_mode:1
OK
```

### at+set_config=lora:confirm:\<type\>

This command is used to set the type of data sent to confirmed or unconfirmed. It is set to unconfirmed data by default.

| Command type | Command                             | Response |
| ------------ | ----------------------------------- | -------- |
| Write        | `at+set_config=lora:confirm:<type>` | `OK`     |

Parameter：

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| type      | 0 = Unconfirmed package, 1 = Confirmed package. |

Example:

```
at+set_config=lora:confirm:0
OK
```

### at+set_config=lora:dr:\<dr\>

This command is used to set the data rate (DR).

| Command type | Command                      | Response |
| ------------ | ---------------------------- | -------- |
| Write        | `at+set_config=lora:dr:<dr>` | `OK`     |

Parameter：

| Parameter | Description                                                                                                                                                   |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dr        | The data rate is related to the current region. In most LoRaWAN regions, 0~5 are commonly used. For details, please refer to the LoRaWAN 1.0.2 specification. |

Example:

```
at+set_config=lora:dr:0
OK
```

### at+set_config=lora:tx_power:\<tx_power\>

This command is used to set the transmit power level of the device.

| Command type | Command                                  | Response |
| ------------ | ---------------------------------------- | -------- |
| Write        | `at+set_config=lora:tx_power:<tx_power>` | `OK`     |

Parameter：

| Parameter | Description                                                                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| tx_power  | The transmit power level will depend on the frequency band and DR. For details, please refer to the LoRaWAN 1.0.2 specification or Appendix 2 of this document. The default is 0, which is the maximum transmit power. |

Example:

```
at+set_config=lora:tx_power:0
OK
```

### at+set_config=lora:adr:\<status\>

This command is used to set the Adaptive Data Rate parameter on or off. It is on by default.

| Command type | Command                           | Response |
| ------------ | --------------------------------- | -------- |
| Write        | `at+set_config=lora:adr:<status>` | `OK`     |

Parameter：

| Parameter | Description      |
| --------- | ---------------- |
| status    | 0 = off, 1 = on. |

Example:

```
at+set_config=lora:adr:0
OK
```

### at+get_config=lora:status

This command is used to obtain all current LoRa status information (except channel information).

| Command type | Command                     | Response                   |
| ------------ | --------------------------- | -------------------------- |
| Read         | `at+get_config=lora:status` | `OK <lora status details>` |

Parameter: None

Example:

```
at+get_config=lora:status
OK Work Mode: LoRaWAN
Region: EU868
MulticastEnable: false
DutycycleEnable: false
Send_repeat_cnt: 0
Join_mode: OTAA
DevEui: AC1F09FFFE013644
AppEui: BBB09D997EB51030
AppKey: AC1F09FFFE013644AC1F09FFF9157201
Class: A
Joined Network:false
IsConfirm: confirm
AdrEnable: false
EnableRepeaterSupport: false
RX2_CHANNEL_FREQUENCY: 869525000, RX2_CHANNEL_DR:0
RX_WINDOW_DURATION: 3000ms
RECEIVE_DELAY_1: 1000ms
RECEIVE_DELAY_2: 2000ms
JOIN_ACCEPT_DELAY_1: 5000ms
JOIN_ACCEPT_DELAY_2: 6000ms
Current Datarate: 5
Primeval Datarate: 5
ChannelsTxPower: 0
UpLinkCounter: 0
DownLinkCounter: 0
```

### at+set_config=lora:default_parameters

This command is used to restore the factory settings in OTAA or ABP.

| Command type | Command                                 | Response |
| ------------ | --------------------------------------- | -------- |
| Write        | `at+set_config=lora:default_parameters` | `OK`     |

Parameter: None

Example:

```
at+set_config=lora:default_parameters
OK
```

## Appendix 1: Data Rate

### EU868/AS923

| Data Rate | Configuration            | Indicative Physical Bit Rate (bit/s) |
| --------- | ------------------------ | ------------------------------------ |
| 0         | LoRa: SF12/ 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11/ 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10/ 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9/ 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8/ 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7/ 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF7/ 250&nbsp;kHz  | 11000                                |
| 7         | FSK: 50&nbsp;kbps        | 50000                                |
| 8 …15     | RFU                      | RFU                                  |

### KR920

| Data Rate | Configuration            | Indicative Physical Bit Rate (bit/s) |
| --------- | ------------------------ | ------------------------------------ |
| 0         | LoRa: SF12/ 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11/ 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10/ 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9/ 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8/ 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7/ 125&nbsp;kHz  | 5470                                 |
| 6…15      | RFU                      | RFU                                  |

### US915

| Data Rate | Configuration            | Indicative Physical Bit Rate (bit/s) |
| --------- | ------------------------ | ------------------------------------ |
| 0         | LoRa: SF10/ 125&nbsp;kHz | 980                                  |
| 1         | LoRa: SF9/ 125&nbsp;kHz  | 1760                                 |
| 2         | LoRa: SF8/ 125&nbsp;kHz  | 3125                                 |
| 3         | LoRa: SF7/ 125&nbsp;kHz  | 5470                                 |
| 4         | LoRa: SF8/ 500&nbsp;kHz  | 12500                                |
| 5…7       | RFU                      | RFU                                  |
| 8         | LoRa: SF12/ 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11/ 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10/ 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9/ 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8/ 500&nbsp;kHz  | 12500                                |
| 13        | LoRa: SF7/ 500&nbsp;kHz  | 21900                                |
| 14…15     | RFU                      | RFU                                  |

### AU915

| Data Rate | Configuration            | Indicative Physical Bit Rate (bit/s) |
| --------- | ------------------------ | ------------------------------------ |
| 0         | LoRa: SF12/ 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11/ 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10/ 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9/ 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8/ 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7/ 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF8/ 500&nbsp;kHz  | 12500                                |
| 7         | RFU                      | RFU                                  |
| 8         | LoRa: SF12/ 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11/ 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10/ 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9/ 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8/ 500&nbsp;kHz  | 12500                                |

### IN865

| Data Rate | Configuration            | Indicative Physical Bit Rate (bit/s) |
| --------- | ------------------------ | ------------------------------------ |
| 0         | LoRa: SF12/ 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11/ 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10/ 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9/ 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8/ 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7/ 125&nbsp;kHz  | 5470                                 |
| 6         | RFU                      | RFU                                  |
| 7         | FSK: 50&nbsp;kbps        | 50000                                |
| 8 …15     | RFU                      | RFU                                  |

## Appendix 2: TX Power

### EU868

By default, Max EIRP is considered to be +16&nbsp;dBm.

| TX Power | Configuration (EIRP)  |
| -------- | --------------------- |
| 0        | Max EIRP              |
| 1        | Max EIRP - 2&nbsp;dB  |
| 2        | Max EIRP - 4&nbsp;dB  |
| 3        | Max EIRP - 6&nbsp;dB  |
| 4        | Max EIRP - 8&nbsp;dB  |
| 5        | Max EIRP - 10&nbsp;dB |
| 6        | Max EIRP - 12&nbsp;dB |
| 7        | Max EIRP - 14&nbsp;dB |
| 8...15   | RFU                   |

### US915

| TX Power | Configuration (conducted power) |
| -------- | ------------------------------- |
| 0        | 30&nbsp;dBm - 2\*TXpower        |
| 1        | 28&nbsp;dBm                     |
| 2        | 26&nbsp;dBm                     |
| 3...9    | ...                             |
| 10       | 10&nbsp;dBm                     |
| 11...15  | RFU                             |

### AU915

By default, Ma EIRP is considered to be +30&nbsp;dBm.

| TX Power | Configuration (EIRP)  |
| -------- | --------------------- |
| 0        | Max EIRP              |
| 1...10   | Max EIRP - 2\*TXpower |
| 11...15  | RFU                   |

### KR920

By default, Max EIRP is considered to be +14&nbsp;dBm.

| TX Power | Configuration (EIRP)  |
| -------- | --------------------- |
| 0        | Max EIRP              |
| 1        | Max EIRP - 2&nbsp;dB  |
| 2        | Max EIRP - 4&nbsp;dB  |
| 3        | Max EIRP - 6&nbsp;dB  |
| 4        | Max EIRP - 8&nbsp;dB  |
| 5        | Max EIRP - 10&nbsp;dB |
| 6        | Max EIRP - 12&nbsp;dB |
| 7        | Max EIRP - 14&nbsp;dB |
| 8...15   | RFU                   |

### AS923

By default, Max EIRP is considered to be 16&nbsp;dBm.

| TX Power | Configuration (EIRP)  |
| -------- | --------------------- |
| 0        | Max EIRP              |
| 1        | Max EIRP - 2&nbsp;dB  |
| 2        | Max EIRP - 4&nbsp;dB  |
| 3        | Max EIRP - 6&nbsp;dB  |
| 4        | Max EIRP - 8&nbsp;dB  |
| 5        | Max EIRP - 10&nbsp;dB |
| 6        | Max EIRP - 12&nbsp;dB |
| 7        | Max EIRP - 14&nbsp;dB |
| 8...15   | RFU                   |

### IN865

By default, Max EIRP is considered to be 30&nbsp;dBm.

| TX Power | Configuration (EIRP)  |
| -------- | --------------------- |
| 0        | Max EIRP              |
| 1        | Max EIRP - 2&nbsp;dB  |
| 2        | Max EIRP - 4&nbsp;dB  |
| 3        | Max EIRP - 6&nbsp;dB  |
| 4        | Max EIRP - 8&nbsp;dB  |
| 5        | Max EIRP - 10&nbsp;dB |
| 6        | Max EIRP - 12&nbsp;dB |
| 7        | Max EIRP - 14&nbsp;dB |
| 8        | Max EIRP - 16&nbsp;dB |
| 9        | Max EIRP - 18&nbsp;dB |
| 10       | Max EIRP - 20&nbsp;dB |
| 11...15  | RFU                   |
