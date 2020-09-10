# AT Command Manual

## AT Commands

### Introduction

The RAK4200 module is designed to simplify LoRa peer to peer and LoRaWAN communication. This module saves customers to deal with complicated SPI protocol with the LoRa transceivers and instead, a well-known serial communication interface is provided for sending commands and requesting internal status of the module. This approach allows a straightforward way to integrate LoRa technology into your projects.

On top of this serial interface a set of AT commands are defined, an external micro controller will be able to control the RAK4600 module as a classic AT modem. Through the AT commands, customers can set parameters of the LoRaWAN communication, controlling GPIO pins, analog inputs, etc.

In the RAK4200 module, the serial communication is exposed on the UART1 port, through the pin 4 (TX1) and pin 5 (RX1). The parameters of the UART1 communication are: 115200 / 8-N-1. The firmware upgrade is also possible through this port. In order to get familiar with the pin distribution of this module and find a schematic circuit of a reference application, please refer to the "RAK4200 Specification Manual". We provide a summary in the Appendix IV.

In addition, the RAK4200 module also exposes another serial port through the pin 2 (TX2) and pin 1 (RX1). This port is named as UART2. You can use it to connect another MCU or an additional UART peripheral such as a GPS module.

UART2 is PIN2 (TX2) and PIN1 (RX2) on modules.

In the case that the target application only requires one single UART port, then it is recommended that the customer to make use of the UART2 to connect to the customer’s MCU and reserved the UART1 for future firmware upgrade.

### AT Command Syntax

The AT command is based on ASCII characters. A command begins with the prefix `at` and ends with `<CR><LF>` (i.e. `\r\n`). The maximum length is 255 characters which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the `\r\n` part is omitted for the sake of clarity.
The AT commands can be classified in the following groups:

- Read Command `at+get_config=<m>:<n>`
  Reads the current configuration or status of the module. The command name and the list of parameters are separated by "=" character. The `<m>` parameter is separated with its associated value `<n>` by the ":" character.
- Write Command – `at+set_config=<m>:<n>`
  Writes/modifies the current configuration of the module. The command name and the list of parameters are separated by "=" character. The `<m>` parameter is separated with its associated value `<n>` by the ":" character.
- Operational Commands - There are also commands that are neither read nor write commands. The purpose is to execute an action, for example: `at+send=lora:<m>:<n>`, will send data through the LoRa transceiver.
- Special Command — The RAK4200 UART port has two operational modes: configuration mode and data transmission mode. When switching from data transmission mode to configuration mode the command to be entered is "+++" and does not contain terminators such as '\r' and '\n'.

After the command is executed by the module, a reply is sent back to the external MCU. In the case the command was successful, the usual reply has the following format:

`OK [information]\r\n`

Note that only Read commands have information in the replied message, while Write commands do not have an informative description. The firmware developed by the customer, running in the external MCU, will expect at minimum a string of "Ok\r\n" after sending a successful command to the module. In the other hand, when the command is not successfully executed by the module. A reply with will be received in the following format:

`ERROR: [ErrCode]\r\n`

The error codes are shown in the following section:

### Error Code Table

| Error Code | Description                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | The last command received is an unsupported AT command.                                                                                                                     |
| 2          | Invalid parameter in the AT command.                                                                                                                                        |
| 3          | There is an error when reading or writing the flash memory.                                                                                                                 |
| 5          | There is an error when sending data through the UART port.                                                                                                                  |
| 80         | The LoRa transceiver is busy, could not process a new command.                                                                                                              |
| 81         | LoRa service is unknown. Unknown MAC command received by node. Execute commands that are not supported in the current state, such as sending "at+join" command in P2P mode. |
| 82         | The LoRa parameters are invalid.                                                                                                                                            |
| 83         | The LoRa frequency is invalid.                                                                                                                                              |
| 84         | The LoRa data rate (DR) is invalid.                                                                                                                                         |
| 85         | The LoRa frequency and data rate are invalid.                                                                                                                               |
| 86         | The device hasn’t joined into a LoRa network.                                                                                                                               |
| 87         | The length of the packet exceeded that maximum allowed by the LoRa protocol.                                                                                                |
| 88         | Service is closed by the server. Due to the limitation of duty cycle, the server will send " SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                      |
| 89         | This is an unsupported region code.                                                                                                                                         |
| 90         | Duty cycle is restricted. Due to duty cycle, data cannot be sent at this time until the time limit is removed.                                                              |
| 91         | No valid LoRa channel could be found.                                                                                                                                       |
| 92         | No available LoRa channel could be found.                                                                                                                                   |
| 93         | Status is error. Generally, the internal state of the protocol stack is wrong.                                                                                              |
| 94         | Time out reached while sending the packet through the LoRa transceiver.                                                                                                     |
| 95         | Time out reached while waiting for a packet in the LoRa RX1 window.                                                                                                         |
| 96         | Time out reached while waiting for a packet in the LoRa RX2 window.                                                                                                         |
| 97         | There is an error while receiving a packet during the LoRa RX1 window.                                                                                                      |
| 98         | There is an error while receiving a packet during the LoRa RX2 window.                                                                                                      |
| 99         | Failed to join into a LoRa network.                                                                                                                                         |
| 100        | Duplicated down-link message detected. A message with an invalid down-link count was received.                                                                              |
| 101        | Payload size is not valid for the current data rate (DR).                                                                                                                   |
| 102        | There many down-link packets were lost.                                                                                                                                     |
| 103        | Address fail. The address of the received packet does not match the address of the current node.                                                                            |
| 104        | Invalid MIC was detected in the LoRa message.                                                                                                                               |

## General AT Command

### at+version

This command is used for reading the version number of the current firmware.

| Operation | Command      | Response              |
| --------- | ------------ | --------------------- |
| Read      | `at+version` | `OK <version number>` |

Parameter: None

Example:

```sh
at+version\r\n
OK V3.2.0.14
```

### at+help

This command is used for obtaining all AT commands supported by the current firmware.

| Operation | Command   | Response               |
| --------- | --------- | ---------------------- |
| Read      | `at+help` | `OK <all AT commands>` |

Parameter: None

Example:

```sh
at+help\r\n
OK Device AT commands:
at+version
at+help
at+set_config=device:restart
at+set_config=device:sleep:X
at+get_config=device:status
at+set_config=device:uart:X:Y
at+set_config=device:uart_mode:X:Y
at+send=uart:X:YYY
at+set_config=device:gpio:X:Y
at+get_config=device:gpio:X
at+get_config=device:adc:X

LoRaWAN AT commands:
at+set_config=lora:default_parameters
at+join
at+send=lora:X:YYY
at+set_config=lora:region:XXX
at+get_config=lora:channel
at+set_config=lora:dev_eui:XXXX
at+set_config=lora:app_eui:XXXX
at+set_config=lora:app_key:XXXX
at+set_config=lora:dev_addr:XXXX
at+set_config=lora:apps_key:XXXX
at+set_config=lora:nwks_key:XXXX
at+set_config=lora:multicastenable:X
at+set_config=lora:multicast_dev_addr:XXXX
at+set_config=lora:multicast_apps_key:XXXX
at+set_config=lora:multicast_nwks_key:XXXX
at+set_config=lora:join_mode:X
at+set_config=lora:work_mode:X
at+set_config=lora:ch_mask:X:Y
at+set_config=lora:class:X
at+set_config=lora:confirm:X
at+set_config=lora:dr:X
at+set_config=lora:tx_power:X
at+set_config=lora:adr:X
at+get_config=lora:status
at+set_config=lora:dutycycle_enable:X
at+set_config=lora:send_repeat_cnt:X

LoRaP2P AT commands:
at+set_config=lorap2p:XXX:Y:Z:A:B:C
at+set_config=lorap2p:transfer_mode:X
at+send=lorap2p:XXX
```

### at+set_config=device:restart

This command is used for restarting the device.

| Operation | Command                        | Response |
| --------- | ------------------------------ | -------- |
| Write     | `at+set_config=device:restart` |          |

Parameter: None

Example:

```sh
at+set_config=device:restart\r\n
UART1 work mode: RUI_UART_NORMAL
Current work_mode:LoRaWAN, join_mode:ABP, Class: A
Initialization OK
```

### at+set_config=device:sleep:\<status\>

This command is used for changing the current state of the device between the sleep and the wake-up mode.

| Operation | Command                               | Response      |
| --------- | ------------------------------------- | ------------- |
| Write     | `at+set_config=device:sleep:<status>` | `OK <STATUS>` |

| Parameter | Description |
| --------- | ----------- |
| status    | 0: wake up  |
|           | 1: sleep    |

Example

```sh
at+set_config=device:sleep:1\r\n
OK Sleep

at+set_config=device:sleep:0\r\n
OK Wake Up
```

### at+get_config=device:status

This command is used for obtaining the status of the device.

| Operation | Command                       | Response           |
| --------- | ----------------------------- | ------------------ |
| Read      | `at+get_config=device:status` | `OK <information>` |

Parameter: None

Example:

```sh
at+get_config=device:status\r\n
OK Board Core:RAK4200
MCU:STM32L071KB
LoRa chip:SX1276
```

## AT Command of Interface Type

### at+set_config=device:uart:\<index\>:\<baud_rate\>

This command is used for configuring the baud rate for a UART port.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart:<index>:<baud_rate>` | `OK`     |

| Parameter | Description                                                  |
| --------- | ------------------------------------------------------------ |
| index     | UART Number                                                  |
| baud_rate | UART Baud rate：1200,2400,4800,9600,19200,38400,57600,115200 |

Example:

```sh
at+set_config=device:uart:1:115200\r\n
OK
```

### at+set_config=device:uart_mode:\<index\>:\<mode\>

This command is used for switching the UART operation between the AT configuration mode and the data transmission mode.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart_mode:<index>:<mode>` | `OK`     |

| Parameter | Description                                                                                         |
| --------- | --------------------------------------------------------------------------------------------------- |
| index     | UART Port Number. Currently, the RAK4200 supports UART1 and UART2.                                  |
| mode      | UART Mode： Only ‘1’ can be selected, which means the UART is set to data transmission mode.        |
|           | Note：To switch from data transmission mode to configuration mode, use "+++" (+++ without\\ r\\ n). |

Example:

```sh
at+set_config=device:uart_mode:1:1\r\n
OK

+++
OK
```

### at+send=uart:\<index\>:\<data\>

This command is used for sending data through a UART port.

| Operation | Command                       | Response |
| --------- | ----------------------------- | -------- |
| Write     | `at+send=uart:<index>:<data>` | `OK`     |

| Parameter | Description                                                                                                          |
| --------- | -------------------------------------------------------------------------------------------------------------------- |
| index     | UART Port Number. Currently, the RAK4200 supports UART1 and UART2.                                                   |
| data      | The data you want to send.                                                                                           |
|           | The maximum length of data is 250 characters, equivalent to 255 – the length of "at+..." – the length of "\\ r\\ n". |

Example:

```sh
at+send=uart:1:12345\r\n
OK
```

### at+get_config=device:gpio:\<pin_num\>

This command is used for obtaining the voltage level status of a pin on a module.

| Operation | Command                               | Response      |
| --------- | ------------------------------------- | ------------- |
| Read      | `at+get_config=device:gpio:<pin_num>` | `OK <status>` |

| Parameter             | Description             |
| --------------------- | ----------------------- |
| pin_num               | Pin index of the module |
| status（Return Value) | 0: Low voltage level    |
|                       | 1: High voltage level   |

Example:

```sh
at+get_config=device:gpio:3\r\n
OK 1
```

### at+set_config=device:gpio:\<pin_num\>:\<status\>

This command is used for setting the voltage level state (high or low) of a pin on a module.

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=device:gpio:<pin_num>:<status>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| pin_num   | Pin index of the module |
| status    | 0: Low voltage level    |
|           | 1: High voltage level   |

Example:

```sh
at+set_config=device:gpio:3:0\r\n
OK
```

### at+get_config=device:adc:\<pin_num\>

This command is used for obtaining the voltage level of an ADC pin of the module.

| Operation | Command                              | Response       |
| --------- | ------------------------------------ | -------------- |
| Read      | `at+get_config=device:adc:<pin_num>` | `OK <voltage>` |

| Parameter               | Description                 |
| ----------------------- | --------------------------- |
| pin_num                 | ADC pin index of the module |
| Voltage（Return Value） | Voltage，Unit mV            |

Example:

```sh
at+get_config=device:adc:3\r\n
OK 1663mV
```

## AT Command of LoRaWAN Type

### at+join

This command is used for joining into the LoRaWAN network.

| Operation | Command   | Response          |
| --------- | --------- | ----------------- |
|           | `at+join` | `OK Join Success` |

Parameter: None

Example：

```sh
at+join\r\n
OK Join Success
```

### at+send=lora:\<port\>:\<data\>

This command is used for sending data via LoRaWAN.

| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
|           | `at+send=lora:<port>:<data>` | `OK`     |

| Parameter | Description                                                                                                                                                                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| port      | Sending port of LoRa. The value range is 1-223.                                                                                                                                                                                                                                                                         |
| data      | The sending data format is in hexadecimal format. The possible values are between 00-FF. The module internally will cast every two characters into a byte before sending it to the LoRa transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN standard). Please refer to Appendix III. |

Example：

When sending data as unconfirmed uplink:

```sh
at+send=lora:1:5A00\r\n
OK
```

When sending data as confirmed uplink:

```sh
at+send=lora:1:5A00\r\n
OK
at+recv=0,-105,-12,0
```

When sending a confirmed message, you will receive an ACK response, i.e. "at+recv=...". In "0, -105, -12,0", "0" stands for the LoRa port, "-105" stands for the RSSI, "-12" stands for the SNR, and "0" stands for the length of the data (no valid data in ACK).

::: tip 📝 NOTE
When sending an unconfirmed message, sometimes the gateway will send MAC commands to nodes, and the node will also receive "at + recv =...".
:::

### at+set_config=lora:region:\<region\>

This command is used for setting the appropriate working frequency band.

| Operation | Command                              | Response |
| --------- | ------------------------------------ | -------- |
| Write     | `at+set_config=lora:region:<region>` | `OK`     |

| Parameter | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| region    | EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923. The default is EU868. |

Example：

```sh
at+set_config=lora:region:EU868\r\n
OK
```

::: tip 📝 NOTE
In the AS923 frequency band, the supported frequency plan is "as2" and dwell time is set to 1.
:::

### at+get_config=lora:channel

This Command is used for reading all the LoRa channel information for the device's current region.

| Operation | Command                      | Response                   |
| --------- | ---------------------------- | -------------------------- |
| Read      | `at+get_config=lora:channel` | `OK <channel information>` |

Parameter: None

Example (EU868 region):

```sh
at+get_config=lora:channel\r\n
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0
```

::: tip 📝 NOTE
With "\_0,on,868100000,0,5" as an example，channel parameter analysis:

- "\_" at the beginning if the channel is open;
- "0" is the channel ID;
- "on" indicates the current status of the channel;
- "868100000" is the actual frequency of the channel，unit is Hz;
- "0,5" indicates the DR of the channel, DR0~DR5.
  :::

### at+set_config=lora:ch_mask:\<channel_number\>:\<status\>

This command is used for switching a channel (turn on or off) in the current region.

| Operation | Command                                                | Response |
| --------- | ------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:ch_mask:<channel_number>:<status>` | `OK`     |

| Parameter      | Description    |
| -------------- | -------------- |
| channel_number | Channel number |
| status         | 0: off         |
|                | 1: on          |

```sh
at+set_config=lora:ch_mask:0:0\r\n
OK
```

### at+set_config=lora:dev_eui:\<dev_eui\>

This command is used for setting the Device EUI parameter for LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_eui:<dev_eui>` | `OK`     |

| Parameter | Description |
| --------- | ----------- |
| dev_eui   | Device EUI. |

Example：

```sh
at+set_config=lora:dev_eui:3530353064377716\r\n
OK
```

### at+set_config=lora:app_eui:\<app_eui\>

This command is used for setting the Application EUI parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_eui:<app_eui>` | `OK`     |

| Parameter | Description      |
| --------- | ---------------- |
| app_eui   | Application EUI. |

Example：

```sh
at+set_config=lora:app_eui:0000000000000001\r\n
OK
```

### at+set_config=lora:app_key:\<app_key\>

This command is used for setting the Application Key parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_key:<app_key>` | `OK`     |

| Parameter | Description      |
| --------- | ---------------- |
| app_key   | Application Key. |

Example:

```sh
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228\r\n
OK
```

### at+set_config=lora:dev_addr:\<dev_addr\>

This command is used for setting the Device Address parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_addr:<dev_addr>` | `OK`     |

| Parameter | Description     |
| --------- | --------------- |
| dev_addr  | Device Address. |

Example:

```sh
at+set_config=lora:dev_addr:260125D7\r\n
OK
```

### at+set_config=lora:apps_key:\<apps_key\>

This command is used for setting the Application Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:apps_key:<apps_key>` | `OK`     |

| Parameter | Description              |
| --------- | ------------------------ |
| apps_key  | Application Session Key. |

Example:

```sh
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228\r\n
OK
```

### at+set_config=lora:nwks_key:\<nwks_key\>

This command is used for setting the Network Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Read      | `at+set_config=lora:nwks_key:<nwks_key>` | `OK`     |

| Parameter | Description          |
| --------- | -------------------- |
| nwks_key  | Network Session Key. |

Example:

```sh
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42\r\n
OK
```

### at+set_config=lora:multicastenable:\<IsEnable\>

This command is used for enabling or disabling the multicast feature.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=lora:multicastenable:<IsEnable>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| IsEnable  | 0: disable              |
|           | 1: enable               |
|           | The default is disable. |

Example:

```sh
at+set_config=lora:multicastenable:1\r\n
OK
```

### at+set_config=lora:multicast_dev_addr:\<multicast_dev_addr\>

This command is used for setting the Device Address for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>` | `OK`     |

| Parameter          | Description              |
| ------------------ | ------------------------ |
| multicast_dev_addr | Multicast Device Address |

Example:

```sh
at+set_config=lora:multicast_dev_addr:260111fd\r\n
OK
```

### at+set_config=lora:multicast_apps_key:\<multicast_apps_key\>

This command is used for setting the Application Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_apps_key:<multicast_apps_key>` | `OK`     |

| Parameter          | Description                       |
| ------------------ | --------------------------------- |
| multicast_apps_key | Multicast Application Session Key |

Example:

```sh
at+set_config=lora:multicast_apps_key:F13DDFA2619B10411F02F042E1C0F356\r\n
OK
```

### at+set_config=lora:multicast_nwks_key:\<multicast_nwks_key\>

This command is used for setting the Network Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>` | `OK`     |

| Parameter          | Description                   |
| ------------------ | ----------------------------- |
| multicast_nwks_key | Multicast Network Session Key |

Example:

```sh
at+set_config=lora:multicast_nwks_key:1D1991F5377C675879C39B6908D437A6\r\n
OK
```

### at+set_config=lora:join_mode:\<mode\>

This command is used for switching the LoRaWAN's access mode between the OTAA and ABP mode.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:join_mode:<mode>` | `OK`     |

| Parameter | Description          |
| --------- | -------------------- |
| mode      | Activation mode      |
|           | 0: OTAA              |
|           | 1: ABP               |
|           | The default is OTAA. |

Example：

```sh
at+set_config=lora:join_mode:1\r\n
OK
```

### at+set_config=lora:class:\<class\>

This command is used for setting LoRaWAN's class to Class A, Class B, or Class C.

| Operation | Command                            | Response |
| --------- | ---------------------------------- | -------- |
| Write     | `at+set_config=lora:class:<class>` | `OK`     |

| Parameter | Description                             |
| --------- | --------------------------------------- |
| class     | 0: Class A                              |
|           | 1: Class B (Not supported at this time) |
|           | 2: Class C                              |
|           | The default is Class A.                 |

Example:

```sh
at+set_config=lora:class:0\r\n
OK
```

### at+set_config=lora:confirm:\<type\>

This command is used for setting the type of message to be sent: Confirmed/Unconfirmed.

| Operation | Command                             | Response |
| --------- | ----------------------------------- | -------- |
| Write     | `at+set_config=lora:confirm:<type>` | `OK`     |

| Parameter | Description                    |
| --------- | ------------------------------ |
| type      | 0: unconfirm type              |
|           | 1: confirm type                |
|           | The default is unconfirm type. |

Example:

```sh
at+set_config=lora:confirm:0\r\n
OK
```

### at+set_config=lora:dr:\<dr\>

This command is used for setting the data rate (DR) of LoRa.

| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
| Write     | `at+set_config=lora:dr:<dr>` | `OK`     |

| Parameter | Description                                                                                                                                                           |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dr        | The data rate of LoRa is related to the current region. In most LoRa areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWan1.0.2 specification. |

### at+set_config=lora:tx_power:\<tx_power\>

This command is used for setting the level of the RF transmission power level of the LoRa transceiver. The unit is in dBm.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:tx_power:<tx_power>` | `OK`     |

| Parameter | Description                                                                                                                                        |
| --------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| tx_power  | LoRa's transmit power level varies depending on frequency band and DR. Please refer to the LoRaWAN 1.0.2 specification or Appendix II for details. |
|           | The default is 0.                                                                                                                                  |

Example:

```sh
at+set_config=lora:tx_power:0\r\n
OK
```

### at+set_config=lora:adr:\<status\>

This command is used for setting (turn on/off) the ADR feature of the LoRa communication.

| Operation | Command                           | Response |
| --------- | --------------------------------- | -------- |
| Write     | `at+set_config=lora:adr:<status>` | `OK`     |

| Parameter | Description        |
| --------- | ------------------ |
| status    | 0: Turn off        |
|           | 1: Turn on         |
|           | The default is on. |

Example:

```sh
at+set_config=lora:adr:0\r\n
OK
```

### at+get_config=lora:status

This command is used for getting all of the information related to the current LoRa status (except channel information）

| Operation | Command                     | Response                  |
| --------- | --------------------------- | ------------------------- |
| Read      | `at+set_config=lora:status` | `OK <lora status detail>` |

Parameter: None

Example:

```sh
at+get_config=lora:status\r\n
OK Work Mode: LoRaWAN
Region: EU868
Send_interval: 600s
Auto send status: false.
MulticastEnable: true.
Multi_Dev_Addr: 260111FD
Multi_Apps_Key: F13DDFA2619B10411F02F042E1C0F356
Multi_Nwks_Key: 1D1991F5377C675879C39B6908D437A6
Join_mode: OTAA
DevEui: 0000000000000888
AppEui: 0000000000000888
AppKey: 00000000000008880000000000000888
Class: C
Joined Network:false
IsConfirm: unconfirm
AdrEnable: true
EnableRepeaterSupport: false
RX2_CHANNEL_FREQUENCY: 869525000, RX2_CHANNEL_DR:0
RX_WINDOW_DURATION: 3000ms
RECEIVE_DELAY_1: 1000ms
RECEIVE_DELAY_2: 2000ms
JOIN_ACCEPT_DELAY_1: 5000ms
JOIN_ACCEPT_DELAY_2: 6000ms
Current Datarate: 4
Primeval Datarate: 4
ChannelsTxPower: 0
UpLinkCounter: 0
DownLinkCounter: 0
```

### at+set_config=lora:dutycycle_enable:\<status\>

This command is used for enabling or disabling the Duty Cycle feature.

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=lora:dutycycle_enable:<status>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| status    | 0: disable              |
|           | 1: enable               |
|           | The default is disable. |

Example:

```sh
at+set_config=lora:dutycycle_enable:1\r\n
OK
```

### at+set_config=lora: send_repeat_cnt:\<num\

This command is used for setting the number attempts for retransmitting an uplink message. When activated, the module will resend a message if its corresponding ACK (down link) is not received after sending a confirmed uplink message. The default value is 0, which means that the module will not resend any message by default.

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=lora: send_repeat_cnt:<status>` | `OK`     |

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| num       | Number of retries, 0~7. The default value is 0. |

Example:

```sh
at+set_config=lora: send_repeat_cnt:1\r\n
OK
```

### at+set_config=lora:default_parameters

This command is used to restore OTAA, ABP, multicast related network access parameters set at the factory, including dev_eui，app_eui, etc.

| Operation | Command                                 | Response |
| --------- | --------------------------------------- | -------- |
| Write     | `at+set_config=lora:default_parameters` | `OK`     |

Parameter: none

Example:

```sh
at+set_config=lora:default_parameters\r\n
OK
```

## AT Command of LoRa P2P Type

### at+set_config=lora:work_mode:\<mode\>

This command is used for switching the LoRa's transmission mode between the LoRaWAN and the LoRAP2p mode. This command will cause the module to restart once applied.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:work_mode:<mode>` |          |

| Parameter | Description                  |
| --------- | ---------------------------- |
| mode      | Work mode of LoRa            |
|           | 0: LoRaWAN                   |
|           | 1: LoRaP2P                   |
|           | The default is LoRaWAN mode. |

Example:

```sh
at+set_config=lora:work_mode:1\r\n
UART1 work mode: RUI_UART_NORMAL
Current work_mode:P2P
Initialization OK
```

### at+set_config=lorap2p:\<frequency\>:\<spreadfact\>:\<bandwidth\>:\<codingrate\>:\<preamlen\>:\<power\>

This command is used for setting the relevant parameters of LoRAP2p mode and is only valid when the LoRa mode was switched to LoRaP2P before.

| Operation | Command                                                                                      | Response |
| --------- | -------------------------------------------------------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>` | `OK`     |

| Parameter   | Description                        |
| ----------- | ---------------------------------- |
| frequency   | Frequency, the unit is Hz          |
|             | The default is 869525000Hz.        |
| spreadfact  | Spreading factor                   |
|             | The default is 12.                 |
| bandwidth   | 0: 125KHz                          |
|             | 1: 250KHz                          |
|             | 2: 500KHz                          |
|             | The default is 0.                  |
| codeingrate | 1: 4/5                             |
|             | 2: 4/6                             |
|             | 3: 4/7                             |
|             | 4: 4/8                             |
|             | The default is 1.                  |
| preamlen    | Preamble Length. 5~65535           |
|             | The default is 8.                  |
| power       | TX power. The unit is in dBm. 5~20 |
|             | The default is 20.                 |

Example:

```sh
at+set_config=lorap2p:869525000:12:0:1:8:20\r\n
OK
```

### at+set_config=lorap2p:transfer_mode:\<mode\>

This command is used for switching the state of the LoRa transceiver between sending and receiving state, and it’s only valid when the LoRa mode was set to LoRaP2P before.

| Operation | Command                                       | Response |
| --------- | --------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p: transfer_mode:<mode>` | `OK`     |

| Parameter | Description                 |
| --------- | --------------------------- |
| mode      | 1: receiver mode            |
|           | 2: sender mode              |
|           | The default is sender mode. |

Example:

```sh
at+set_config=lorap2p:transfer_mode:1\r\n
OK
```

### at+send=lorap2p:\<data\>

This command is used for sending data through LoRaP2P, and only valid when the LoRa work mode was set to LoRaP2P before.

| Operation | Command                  | Response |
| --------- | ------------------------ | -------- |
| Send      | `at+send=lorap2p:<data>` | `OK`     |

| Parameter | Description                                        |
| --------- | -------------------------------------------------- |
| data      | The data to be sent, and the format is hexadecimal |

Example:

```sh
at+send=lorap2p:1234\r\n
OK
```

::: tip 📝 NOTE
In LoRa P2P mode, the receiving node receives the data and outputs the data in the following format:
`at+recv=<RSSI>,<SNR>,< Data Length >:< Data >`
:::

## Data Rate by Region

### EU868/EU433/AS923

| Data Rate | Configuration       | Indicative physical bit rate \[bit/s\] |
| --------- | ------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125kHz | 250                                    |
| 1         | LoRa: SF11 / 125kHz | 440                                    |
| 2         | LoRa: SF10 / 125kHz | 980                                    |
| 3         | LoRa: SF9 / 125kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125kHz  | 5470                                   |
| 6         | LoRa: SF7 / 250kHz  | 11000                                  |
| 7         | FSK: 50kbps         | 50000                                  |
| 8 …15     | RFU                 |                                        |

### CN470/KR920

| Data Rate | Configuration       | Indicative physical bit rate \[bit/s\] |
| --------- | ------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125kHz | 250                                    |
| 1         | LoRa: SF11 / 125kHz | 440                                    |
| 2         | LoRa: SF10 / 125kHz | 980                                    |
| 3         | LoRa: SF9 / 125kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125kHz  | 5470                                   |
| 6…15      | RFU                 |                                        |

### US915

| Data Rate | Configuration       | Indicative physical bit rate \[bit/s\] |
| --------- | ------------------- | -------------------------------------- |
| 0         | LoRa: SF10 / 125kHz | 980                                    |
| 1         | LoRa: SF9 / 125kHz  | 1760                                   |
| 2         | LoRa: SF8 / 125kHz  | 3125                                   |
| 3         | LoRa: SF7 / 125kHz  | 5470                                   |
| 4         | LoRa: SF8 / 500kHz  | 12500                                  |
| 5…7       | RFU                 |                                        |
| 8         | LoRa: SF12/500kHz   | 980                                    |
| 9         | LoRa: SF11/500kHz   | 1760                                   |
| 10        | LoRa: SF10/500kHz   | 3900                                   |
| 11        | LoRa: SF9/500kHz    | 7000                                   |
| 12        | LoRa: SF8/500kHz    | 12500                                  |
| 13        | LoRa: SF7/500kHz    | 21900                                  |
| 14…15     | RFU                 |                                        |

### AU915

| Data Rate | Configuration       | Indicative physical bit rate \[bit/s\] |
| --------- | ------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125kHz | 250                                    |
| 1         | LoRa: SF11 / 125kHz | 440                                    |
| 2         | LoRa: SF10 / 125kHz | 980                                    |
| 3         | LoRa: SF9 / 125kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125kHz  | 5470                                   |
| 6         | LoRa: SF8/500kHz    | 12500                                  |
| 7         | RFU                 | RFU                                    |
| 8         | LoRa: SF12/500kHz   | 980                                    |
| 9         | LoRa: SF11/500kHz   | 1760                                   |
| 10        | LoRa: SF10/500kHz   | 3900                                   |
| 11        | LoRa: SF9/500kHz    | 7000                                   |
| 12        | LoRa: SF8/500kHz    | 12500                                  |

### IN865

| Data Rate | Configuration       | Indicative physical bit rate \[bit/s\] |
| --------- | ------------------- | -------------------------------------- |
| 0         | LoRa: SF12 / 125kHz | 250                                    |
| 1         | LoRa: SF11 / 125kHz | 440                                    |
| 2         | LoRa: SF10 / 125kHz | 980                                    |
| 3         | LoRa: SF9 / 125kHz  | 1760                                   |
| 4         | LoRa: SF8 / 125kHz  | 3125                                   |
| 5         | LoRa: SF7 / 125kHz  | 5470                                   |
| 6         | RFU                 | RFU                                    |
| 7         | FSK: 50kbps         | 50000                                  |
| 8 …15     | RFU                 | RFU                                    |

## TX Power by Region

### EU868

By default, MaxEIRP is considered to be +16dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6        | MaxEIRP - 12dB       |
| 7        | MaxEIRP - 14dB       |
| 8…15     | RFU                  |

### US915

| TX Power | Configuration (conducted power) |
| -------- | ------------------------------- |
| 0        | 30 dBm - 2 \* TX power          |
| 1        | 28 dBm                          |
| 2        | 29 dBm                          |
| 3 : 9    | …                               |
| 10       | 10 dBm                          |
| 11 : 15  | RFU                             |

### AU915

By default, MaxEIRP is considered to be +30dBm.

| TX Power | Configuration (EIRP)   |
| -------- | ---------------------- |
| 0        | MaxEIRP                |
| 1 : 10   | MaxEIRP - 2 \* TXPower |
| 11 : 15  | RFU                    |

### KR920

By default, MaxEIRP is considered to be +14dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6        | MaxEIRP - 12dB       |
| 7        | MaxEIRP - 14dB       |
| 8…15     | RFU                  |

### AS923

By default, Max EIRP shall be 16dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6        | MaxEIRP - 12dB       |
| 7        | MaxEIRP - 14dB       |
| 8…15     | RFU                  |

### IN865

By default, MaxEIRP is considered to be 30dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6        | MaxEIRP - 12dB       |
| 7        | MaxEIRP - 14dB       |
| 8        | MaxEIRP - 16dB       |
| 9        | MaxEIRP - 18dB       |
| 10       | MaxEIRP - 20dB       |
| 11 … 15  | RFU                  |

### CN470

By default, MaxEIRP is considered to be +19.15dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6        | MaxEIRP - 12dB       |
| 7        | MaxEIRP - 14dB       |
| 8…15     | RFU                  |

### EU433

By default, MAxEIRP is considered to be +12.15dBm.

| TX Power | Configuration (EIRP) |
| -------- | -------------------- |
| 0        | MaxEIRP              |
| 1        | MaxEIRP - 2dB        |
| 2        | MaxEIRP - 4dB        |
| 3        | MaxEIRP - 6dB        |
| 4        | MaxEIRP - 8dB        |
| 5        | MaxEIRP - 10dB       |
| 6 … 15   | RFU                  |

## Maximum Transmission Load by Region

::: tip 📝 NOTE
M in the following list is the length with MAC header, N is the length without MAC header, and the maximum sending data length is N.
:::

### EU868

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6        | 250 | 242 |
| 7        | 250 | 242 |
| 8 : 15   | \-  | \-  |

### US915

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 19  | 11  |
| 1        | 61  | 53  |
| 2        | 133 | 125 |
| 3        | 250 | 242 |
| 4        | 250 | 242 |
| 5 : 7    | \-  | \-  |
| 8        | 61  | 53  |
| 9        | 137 | 129 |
| 10       | 250 | 242 |
| 11       | 250 | 242 |
| 12       | 250 | 242 |
| 13       | 250 | 242 |
| 14 : 15  | \-  | \-  |

### AU915

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6        | 250 | 242 |
| 7        | \-  | \-  |
| 8        | 61  | 53  |
| 9        | 137 | 129 |
| 10       | 250 | 242 |
| 11       | 250 | 242 |
| 12       | 250 | 242 |
| 13       | 250 | 242 |
| 14 : 15  | \-  | \-  |

### KR920

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6 : 15   | \-  | \-  |

### AS923

**Uplink MAC Payload Size (M)**

| DataRate | UplinkDwellTime = 0 | UplinkDwellTime = 1 |
| -------- | ------------------- | ------------------- |
| 0        | 59                  | N/A                 |
| 1        | 59                  | N/A                 |
| 2        | 59                  | 19                  |
| 3        | 123                 | 61                  |
| 4        | 250                 | 133                 |
| 5        | 250                 | 250                 |
| 6        | 250                 | 250                 |
| 7        | 250                 | 250                 |
| 8 : 15   | RFU                 | RFU                 |

**Downlink MAC Payload Size (M)**

| DataRate | DownlinkDwellTime = 0 | DownlinkDwellTime = 1 |
| -------- | --------------------- | --------------------- |
| 0        | 59                    | N/A                   |
| 1        | 59                    | N/A                   |
| 2        | 59                    | 19                    |
| 3        | 123                   | 61                    |
| 4        | 250                   | 133                   |
| 5        | 250                   | 250                   |
| 6        | 250                   | 250                   |
| 7        | 250                   | 250                   |
| 8 : 15   | RFU                   | RFU                   |

### IN865

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6        | 250 | 242 |
| 7        | 250 | 242 |
| 8 : 15   | \-  | \-  |

### CN470

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6 : 15   | \-  | \-  |

### EU433

| DataRate | M   | N   |
| -------- | --- | --- |
| 0        | 59  | 51  |
| 1        | 59  | 51  |
| 2        | 59  | 51  |
| 3        | 123 | 115 |
| 4        | 250 | 242 |
| 5        | 250 | 242 |
| 6        | 250 | 242 |
| 7        | 250 | 242 |
| 8 : 15   | \-  | \-  |

## Pin Description of RAK4200

The pin definition of the RAK4200 module can be reviewed [here]().

A summary of the pins of the RAK4200 module:

- About the UART pin. Pin 4(TX1), Pin 5(RX1) are reserved for UART1. Pin 2(TX2), Pin 1(RX2) are reserved for UART2.
  During sleep, Pin5(RX1) and Pin1(RX2) are configured as external interrupt mode, internal pull-down resistor, rising edge trigger wake-up.
- About the SWD debug pin. Pin 7 (SWDIO) and Pin 8 (SWCLK) are used for SWD debug port.
- About the power pin. The power pin on the RAK4200 module includes: VCC/GND, Pin 11, Pin 13, Pin 14, Pin 19, Pin 20;
- About the reset pin. The reset pin on the RAK4200 module is PIN 18;
- About the RF antenna pin. The RF antenna pin on RAK4200 module is PIN 12;
- About the ADC pin. The ADC pin on RAK4200 is PIN 3;
