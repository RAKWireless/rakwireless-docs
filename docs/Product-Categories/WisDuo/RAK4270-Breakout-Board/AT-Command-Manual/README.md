---
prev: ../Quickstart/
next: ../Datasheet/
tags: RAK4270 Breakout Board
---



# RAK4270 Breakout Board AT Command Manual

## AT Commands

The RAK4270 Breakout Board is designed to simplify LoRaWAN and LoRa point to point (P2P) communication. To integrate LoRa technology to your projects, RAK4270 has easy to use AT commands via UART communication interface. Through these AT commands, you can set the parameters needed for LoRaWAN and LoRa P2P communication.

In the RAK4270 Breakout Board, the serial communication is exposed on **UART1 port** via **UART1_TX/PA9** and **UART2_RX/PA10**. The default parameters of the UART1 are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. 

In addition, RAK4270 board also exposed another serial port **UART2**, via **UART2_TX/PA2** and **UART2_RX/PA3**. You can use UART2 as alternative to UART1 when sending AT commands. You can also use UART2 when developing custom firmware via [RUI](/RUI/). The default parameters of the UART2 are **115200 / 8-N-1**.

To get familiar with the pin distribution and other hardware details, refer to [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#hardware).



If only one UART is used in your project, it is recommended that you dedicate UART2 for AT commands and UART1 is reserved for firmware upgrade.

### AT Command Syntax

The AT command is based on ASCII characters. A command begins with the prefix `at` and ends with `<CR><LF>` (i.e. `\r\n`). The maximum length is 255 characters which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the `\r\n` part is omitted for the sake of clarity.

The AT commands can be classified in the following groups:

* **Read Command**: Reads the current configuration or status of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character. 

```
at+get_config=<m>:<n>
```

<br>

* **Write Command**: Writes/Modifies the current configuration of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character.


```
at+set_config=<m>:<n>
```

<br>

* **Operational Commands**: There are also commands that are neither read nor write commands. The purpose is to execute an action, for example:

```
at+send=lora:<m>:<n> // Sends data through the LoRa transceiver.
```

<br>

* **Special Command**: The RAK4270 UART port has two operational modes: **Configuration Mode** and **Data Transmission Mode**. When switching from data transmission mode to configuration mode the command to be entered is `+++` and does not contain terminators such as `\ r` and `\ n`.

After the command is executed by the module, a reply is sent back to the external MCU. In the case the command is successful, the usual reply has the following format:

`OK [information]\r\n`

:::tip 📝 NOTE:

Only Read commands have information in the replied message, while Write commands do not have an informative description. 

:::

The firmware you developed, running in the external MCU, will expect at a minimum string of "Ok\r\n" after sending a successful command to the module. On the other hand, when the command is not successfully executed by the module, a reply will be received in the following format:

`ERROR: [ErrCode]\r\n`

The error codes are shown in the following section.

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
| 86         | The device hasn’t joined into a LoRa network.                                                                                                                               |
| 87         | The length of the packet exceeded the maximum allowed by the LoRa protocol.                                                                                                 |
| 88         | Service is closed by the server. Due to the limitation of duty cycle, the server will send "SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                       |
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
| 100        | Duplicate downlink message is detected. A message with an invalid downlink count is received.                                                                               |
| 101        | Payload size is not valid for the current data rate (DR).                                                                                                                   |
| 102        | Many downlink packets are lost.                                                                                                                                             |
| 103        | Address fail. The address of the received packet does not match the address of the current node.                                                                            |
| 104        | Invalid MIC is detected in the LoRa message.                                                                                                                                |

## General AT Command

1. <b>at+version</b>

This command is used to get the current firmware version number.

| Operation | Command      | Response              |
| --------- | ------------ | --------------------- |
| Read      | `at+version` | `OK <version number>` |

**Parameter**: None

**Example**:

```
at+version\r\n
OK V3.3.0.14
```

2. <b>at+help</b>

This command is used to obtain all the AT commands supported by the current firmware.

| Operation | Command   | Response               |
| --------- | --------- | ---------------------- |
| Read      | `at+help` | `OK <all AT commands>` |

**Parameter**: None

**Example**:

```
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

LoRa P2P AT commands:
  at+set_config=lorap2p:XXX:Y:Z:A:B:C
  at+set_config=lorap2p:transfer_mode:X
  at+send=lorap2p:XXX
```

3. <b>at+set_config=device:restart</b>

This command is used to restart the device.

| Operation | Command                        | Response |
| --------- | ------------------------------ | -------- |
| Write     | `at+set_config=device:restart` |          |

**Parameter**: None

**Example**

```
at+set_config=device:restart\r\n
UART1 work mode: RUI_UART_NORMAL
Current work_mode:LoRaWAN, join_mode:ABP, Class: A
Initialization OK
```

4. <b>at+set_config=device:sleep:`<status>`</b>

This command is used to change the current state of the device between the sleep and the wake-up mode.

| Operation | Command                               | Response      |
| --------- | ------------------------------------- | ------------- |
| Write     | `at+set_config=device:sleep:<status>` | `OK <STATUS>` |

| Parameter | Description |
| --------- | ----------- |
| status    | 0: wake up  |
|           | 1: sleep    |


**Example**

```
at+set_config=device:sleep:1\r\n
OK Sleep

at+set_config=device:sleep:0\r\n
OK Wake Up
```

5. <b>at+get_config=device:status</b>

This command is used to obtain the current status of the device.

| Operation | Command                       | Response           |
| --------- | ----------------------------- | ------------------ |
| Read      | `at+get_config=device:status` | `OK <information>` |

**Parameter**: None

**Example**:

```
at+get_config=device:status\r\n
OK Board Core:RAK4270
MCU:STM32L071KB
LoRa chip:SX1262
```

## Interface Type AT Command

1. <b>at+set_config=device:uart:`<index>:<baud_rate>`</b>

This command is used to configure the baud rate for a UART port.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart:<index>:<baud_rate>` | `OK`     |

| Parameter | Description                                                         |
| --------- | ------------------------------------------------------------------- |
| index     | UART Number (1 or 2)                                                |
| baud_rate | UART Baud rate：1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200 |

**Example**:

```
at+set_config=device:uart:1:115200\r\n
OK
```

2. <b>at+set_config=device:uart_mode:`<index>:<mode>`</b>

This command is used to set the UART operation between the AT configuration mode and the data transmission mode.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart_mode:<index>:<mode>` | `OK`     |

| Parameter | Description                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------- |
| index     | UART Number (1 or 2)                                                                                 |
| mode      | UART Mode： Only `1` can be selected, which means the UART is set to data transmission mode.         |
|           | Note：To switch from data transmission mode to configuration mode, use `+++` (`+++` without `\r\n`). |

**Example**:

```
at+set_config=device:uart_mode:1:1\r\n
OK

+++
OK
```

3. <b>at+send=uart:`<index>:<data>`</b>

This command is used to send data over a UART port.

| Operation | Command                       | Response |
| --------- | ----------------------------- | -------- |
| Write     | `at+send=uart:<index>:<data>` | `OK`     |

| Parameter | Description                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------- |
| index     | UART Number (1 or 2)                                                                                             |
| data      | The data you want to send.                                                                                       |
|           | The maximum length of data is 250 characters, equivalent to 255 – the length of `at+...` – the length of `\r\n`. |

**Example**:

```
at+send=uart:1:12345\r\n
OK
```

4. <b>at+get_config=device:gpio:`<pin_num>`</b>

This command is used to obtain the voltage level status of a GPIO pin on a module. The GPIO pin number mapping can be found in the Pin Definition section of the [Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#pin-definition).

| Operation | Command                               | Response      |
| --------- | ------------------------------------- | ------------- |
| Read      | `at+get_config=device:gpio:<pin_num>` | `OK <status>` |

| Parameter              | Description             |
| ---------------------- | ----------------------- |
| pin_num                | Pin index of the module |
| status（Return Value） | 0: Low voltage level    |
|                        | 1: High voltage level   |

**Example**:

```
at+get_config=device:gpio:3\r\n
OK 1
```

5. <b>at+set_config=device:gpio:`<pin_num>:<status>`</b>

This command is used to set the voltage level state (high or low) of a GPIO pin on a module. The GPIO pin number mapping can be found in the Pin Definition section of the [Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#pin-definition).

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=device:gpio:<pin_num>:<status>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| pin_num   | Pin index of the module |
| status    | 0: Low voltage level    |
|           | 1: High voltage level   |

**Example**:

```
at+set_config=device:gpio:3:0\r\n
OK
```

6. <b> at+get_config=device:adc:`<pin_num>` </b>

This command is used to obtain the voltage level of an ADC pin of the module. The ADC pin number mapping can be found in the Pin Definition section of the [Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#pin-definition).

| Operation | Command                              | Response       |
| --------- | ------------------------------------ | -------------- |
| Read      | `at+get_config=device:adc:<pin_num>` | `OK <voltage>` |

| Parameter               | Description                 |
| ----------------------- | --------------------------- |
| pin_num                 | ADC pin index of the module |
| Voltage（Return Value） | Voltage，Unit: mV           |

**Example**:

```
at+get_config=device:adc:3\r\n
OK 1663mV
```

## LoRaWAN Type AT Command

1. <b>at+join</b>

This command is used to join a LoRaWAN network.

| Operation | Command   | Response          |
| --------- | --------- | ----------------- |
|           | `at+join` | `OK Join Success` |

**Parameter**: None

**Example**

```
at+join\r\n
OK Join Success
```

2. <b>at+send=lora:`<port>:<data>`</b>

This command is used to send data via LoRaWAN.

| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
|           | `at+send=lora:<port>:<data>` | `OK`     |

| Parameter | Description                                                                                                                                                                                                                                                                                                      |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| port      | Sending port of LoRa. The value range is 1-223.                                                                                                                                                                                                                                                                  |
| data      | The sending data format is in hexadecimal format. The possible values are between 00-FF. The module internally will cast every two characters into a byte before sending it to the LoRa transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN standard). Refer to Appendix III. |

**Example**：

When sending data as unconfirmed uplink:

```
at+send=lora:1:5A00\r\n
OK
```

When sending data as confirmed uplink:

```
at+send=lora:1:5A00\r\n
OK
at+recv=0,-105,-12,0
```

:::tip 📝 NOTE:

* When sending a confirmed message, you will receive an ACK response: `at+recv=....` in `0, -105, -12, 0`.
 
    * `0` stands for the LoRa port
    * `-105` stands for the RSSI
    * `-12` stands for the SNR
    * `0` stands for the length of the data (no valid data in ACK).

* When sending an unconfirmed message, sometimes the gateway will send MAC commands to nodes, and the node will also receive `at + recv =...`.

:::

3. <b>at+set_config=lora:region:`<region>`</b>

This command is used to set the appropriate working frequency band.

| Operation | Command                              | Response |
| --------- | ------------------------------------ | -------- |
| Write     | `at+set_config=lora:region:<region`> | `OK`     |

| Parameter | Description                                                                   |
| --------- | ----------------------------------------------------------------------------- |
| region    | EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923. The default is EU868. |

**Example**：

```
at+set_config=lora:region:EU868\r\n
OK
```

::: tip 📝 NOTE
In the AS923 frequency band, the supported frequency plan is "as2" and the dwell time is set to 1.
:::

4. <b>at+get_config=lora:channel</b>

This command is used to read all the LoRa channel information given the current region configured on the board.

| Operation | Command                      | Response                   |
| --------- | ---------------------------- | -------------------------- |
| Read      | `at+get_config=lora:channel` | `OK <channel information>` |

**Parameter**: None

**Example** (EU868 region):

```
at+get_config=lora:channel\r\n
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0
```

::: tip 📝 NOTE

With "*0,on,868100000,0,5" as an example，channel parameter analysis:

- `*` - at the beginning, if the channel is open;
- `0` - is the channel ID;
- `on` - indicates the current status of the channel;
- `868100000` - is the actual frequency of the channel，unit is Hz;
- `0,5` - indicates the DR of the channel, DR0~DR5.

:::

5. <b>at+set_config=lora:ch_mask:`<channel_number>:<status>`</b>

This command is used to enable (on) or disable (off) a channel in the current region.

| Operation | Command                                                | Response |
| --------- | ------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:ch_mask:<channel_number>:<status>` | `OK`     |

| Parameter      | Description    |
| -------------- | -------------- |
| channel_number | Channel number |
| status         | 0: off         |
|                | 1: on          |

**Example**:

```
at+set_config=lora:ch_mask:0:0\r\n
OK
```

6. <b>at+set_config=lora:dev_eui:`<dev_eui>`</b>

This command is used to set the Device EUI parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_eui:<dev_eui>` | `OK`     |

| Parameter | Description |
| --------- | ----------- |
| dev_eui   | Device EUI  |

**Example**：

```
at+set_config=lora:dev_eui:3530353064377716\r\n
OK
```

7.	<b>at+set_config=lora:app_eui:`<app_eui>`</b>

This command is used to set the Application EUI parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_eui:<app_eui>` | `OK`     |

| Parameter | Description     |
| --------- | --------------- |
| app_eui   | Application EUI |

**Example**：

```
at+set_config=lora:app_eui:0000000000000001\r\n
OK
```

8. <b>at+set_config=lora:app_key:`<app_key>`</b>

This command is used to set the Application Key parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_key:<app_key>` | `OK`     |

| Parameter | Description     |
| --------- | --------------- |
| app_key   | Application Key |

**Example**:

```
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228\r\n
OK
```

9. <b>at+set_config=lora:dev_addr:`<dev_addr>`</b>

This command is used to set the Device Address parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_addr:<dev_addr>` | `OK`     |

| Parameter | Description    |
| --------- | -------------- |
| dev_addr  | Device Address |

**Example**:

```
at+set_config=lora:dev_addr:260125D7\r\n
OK
```

10. <b>at+set_config=lora:apps_key:`<apps_key>`</b>

This command is used to set the Application Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:apps_key:<apps_key>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| apps_key  | Application Session Key |

**Example**:

```
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228\r\n
OK
```

11. <b>at+set_config=lora:nwks_key:`<nwks_key>`</b>

This command is used to set the Network Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Read      | `at+set_config=lora:nwks_key:<nwks_key>` | `OK`     |

| Parameter | Description         |
| --------- | ------------------- |
| nwks_key  | Network Session Key |

**Example**:

```
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42\r\n
OK
```

12. <b>at+set_config=lora:multicastenable:`<IsEnable>`</b>

This command is used to enable or disable the multicast feature.

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=lora:multicastenable:<IsEnable>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| IsEnable  | 0: disable              |
|           | 1: enable               |
|           | The default is disable. |

**Example**:

```
at+set_config=lora:multicastenable:1\r\n
OK
```

13. <b>at+set_config=lora:multicast_dev_addr:`<multicast_dev_addr>`</b>

This command is used to set the Device Address for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>` | `OK`     |

| Parameter          | Description              |
| ------------------ | ------------------------ |
| multicast_dev_addr | Multicast Device Address |

**Example**:

```
at+set_config=lora:multicast_dev_addr:260111fd\r\n
OK
```

14. <b>at+set_config=lora:multicast_apps_key:`<multicast_apps_key>`</b>

This command is used to set the Application Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_apps_key:<multicast_apps_key>` | `OK`     |

| Parameter          | Description                       |
| ------------------ | --------------------------------- |
| multicast_apps_key | Multicast Application Session Key |

**Example**:

```
at+set_config=lora:multicast_apps_key:F13DDFA2619B10411F02F042E1C0F356\r\n
OK
```

15. <b>at+set_config=lora:multicast_nwks_key:`<multicast_nwks_key>`</b>

This command is used to set the Network Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>` | `OK`     |

| Parameter          | Description                   |
| ------------------ | ----------------------------- |
| multicast_nwks_key | Multicast Network Session Key |

**Example**:

```
at+set_config=lora:multicast_nwks_key:1D1991F5377C675879C39B6908D437A6\r\n
OK
```

16. <b>at+set_config=lora:join_mode:`<mode>`</b>

This command is used to switch the LoRaWAN access mode between the OTAA and the ABP mode.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:join_mode:<mode>` | `OK`     |

| Parameter | Description          |
| --------- | -------------------- |
| mode      | Activation mode      |
|           | 0: OTAA              |
|           | 1: ABP               |
|           | The default is OTAA. |

**Example**：

```
at+set_config=lora:join_mode:1\r\n
OK
```

17. <b>at+set_config=lora:class:`<class>`</b>

This command is used to set LoRaWAN class to Class A, Class B, or Class C.

| Operation | Command                            | Response |
| --------- | ---------------------------------- | -------- |
| Write     | `at+set_config=lora:class:<class>` | `OK`     |

| Parameter | Description                             |
| --------- | --------------------------------------- |
| class     | 0: Class A                              |
|           | 1: Class B (Not supported at this time) |
|           | 2: Class C                              |
|           | The default is Class A.                 |

**Example**:

```
at+set_config=lora:class:0\r\n
OK
```

18. <b>at+set_config=lora:confirm:`<type>`</b>

This command is used to set the type data to be sent: Confirmed/Unconfirmed.

| Operation | Command                             | Response |
| --------- | ----------------------------------- | -------- |
| Write     | `at+set_config=lora:confirm:<type>` | `OK`     |

| Parameter | Description                    |
| --------- | ------------------------------ |
| type      | 0: unconfirm type              |
|           | 1: confirm type                |
|           | The default is unconfirm type. |

**Example**:

```
at+set_config=lora:confirm:0\r\n
OK
```

19. <b>at+set_config=lora:dr:`<dr>`</b>

This command is used to set the data rate (DR) of LoRa.

| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
| Write     | `at+set_config=lora:dr:<dr>` | `OK`     |

| Parameter | Description                                                                                                                                                            |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| dr        | The data rate of LoRa is related to the current region. In most LoRa areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWAN 1.0.2 specification. |

20. <b>at+set_config=lora:tx_power:`<tx_power>`</b>

This command is used to set the RF transmission power level of the LoRa transceiver. The unit is in dBm.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:tx_power:<tx_power>` | `OK`     |

| Parameter | Description                                                                                                                                          |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| tx_power  | The transmit power level of LoRa varies depending on the frequency band and DR. Refer to the LoRaWAN 1.0.2 specification or Appendix II for details. |
|           | The default is 0.                                                                                                                                    |

**Example**:

```
at+set_config=lora:tx_power:0\r\n
OK
```

21. <b>at+set_config=lora:adr:`<status>`</b>

This command is used to turn on/off the ADR feature of the LoRa communication. 

| Operation | Command                           | Response |
| --------- | --------------------------------- | -------- |
| Write     | `at+set_config=lora:adr:<status>` | `OK`     |

| Parameter | Description        |
| --------- | ------------------ |
| status    | 0: Turn off        |
|           | 1: Turn on         |
|           | The default is on. |

**Example**:

```
at+set_config=lora:adr:0\r\n
OK
```

22. <b>at+get_config=lora:status</b>

This command is used to get all the information related to the current LoRa status (except channel information).

| Operation | Command                     | Response                  |
| --------- | --------------------------- | ------------------------- |
| Read      | `at+get_config=lora:status` | `OK <lora status detail>` |

**Parameter**: None

**Example**:

```
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

23. <b>at+set_config=lora:dutycycle_enable:`<status>`</b>

This command is used to enable or disable the Duty Cycle feature.

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=lora:dutycycle_enable:<status>` | `OK`     |

| Parameter | Description             |
| --------- | ----------------------- |
| status    | 0: disable              |
|           | 1: enable               |
|           | The default is disable. |

**Example**:

```
at+set_config=lora:dutycycle_enable:1\r\n
OK
```

24. <b>at+set_config=lora:send_repeat_cnt:`<num>`</b>

This command is used to set the number of retransmitting attempts on an uplink message. When activated, the board will resend a message if its corresponding ACK (downlink) is not received after sending a confirmed uplink message. The default value is 0, which means that the board will not resend any message by default.

| Operation | Command                                       | Response |
| --------- | --------------------------------------------- | -------- |
| Write     | `at+set_config=lora:send_repeat_cnt:<status>` | `OK`     |

| Parameter | Description                 |
| --------- | --------------------------- |
| num       | Number of retries, up to 7. |
|           | The default is 0.           |

**Example**:

```
at+set_config=lora: send_repeat_cnt:1\r\n
OK
```

25. <b>at+set_config=lora:default_parameters</b>

This command is used to restore OTAA, ABP, multicast related network access parameters set at the factory, including dev_eui，app_eui, etc.

| Operation | Command                                 | Response |
| --------- | --------------------------------------- | -------- |
| Write     | `at+set_config=lora:default_parameters` | `OK`     |

**Parameter**: none

**Example**:

```
at+set_config=lora:default_parameters\r\n
OK
```

## LoRa P2P Type AT Command

1. <b>at+set_config=lora:work_mode:`<mode>`</b>

This command is used to switch the LoRa's work mode between the LoRaWAN and the LoRa P2P mode. This command will cause the board to restart.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:work_mode:<mode>` |          |

| Parameter | Description                  |
| --------- | ---------------------------- |
| mode      | Work mode of LoRa            |
|           | 0: LoRaWAN                   |
|           | 1: LoRa P2P                  |
|           | The default is LoRaWAN mode. |

**Example**:

```
at+set_config=lora:work_mode:1\r\n
UART1 work mode: RUI_UART_NORMAL
Current work_mode:P2P
Initialization OK
```

2. <b>at+set_config=lorap2p:`<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`</b>

This command is used to set the relevant parameters of LoRA P2P mode and is only valid when the LoRa work mode is changed to LoRa P2P before.

| Operation | Command                                                                                      | Response |
| --------- | -------------------------------------------------------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>` | `OK`     |

| Parameter  | Description                        |
| ---------- | ---------------------------------- |
| frequency  | Frequency, the unit is Hz          |
|            | The default is 869525000&nbsp;Hz.  |
| spreadfact | Spreading factor (7 to 12)         |
|            | The default is 12.                 |
| bandwidth  | 0: 125&nbsp;kHz                    |
|            | 1: 250&nbsp;kHz                    |
|            | 2: 500&nbsp;kHz                    |
|            | The default is 0.                  |
| codingrate | 1: 4/5                             |
|            | 2: 4/6                             |
|            | 3: 4/7                             |
|            | 4: 4/8                             |
|            | The default is 1.                  |
| preamlen   | Preamble Length. 5~65535           |
|            | The default is 8.                  |
| power      | TX power. The unit is in dBm. 5~20 |
|            | The default is 20.                 |

**Example**:

```
at+set_config=lorap2p:869525000:12:0:1:8:20\r\n
OK
```

3. <b>at+set_config=lorap2p:transfer_mode:`<mode>`</b>

This command is used to switch the state of the LoRa transceiver between sending and receiving state, and it is only valid when the LoRa mode is set to LoRa P2P before.

| Operation | Command                                       | Response |
| --------- | --------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p: transfer_mode:<mode>` | `OK`     |

| Parameter | Description                 |
| --------- | --------------------------- |
| mode      | 1: receiver mode            |
|           | 2: sender mode              |
|           | The default is sender mode. |

**Example**:

```
at+set_config=lorap2p:transfer_mode:1\r\n
OK
```

4. <b>at+send=lorap2p:`<data>`</b>

This command is used to send data through LoRa P2P and only valid when the LoRa work mode is set to LoRa P2P before.

| Operation | Command                  | Response |
| --------- | ------------------------ | -------- |
| Send      | `at+send=lorap2p:<data>` | `OK`     |

| Parameter | Description                                         |
| --------- | --------------------------------------------------- |
| data      | The data to be sent, and the format is hexadecimal. |

**Example**:

```
at+send=lorap2p:1234\r\n
OK
```

In LoRa P2P mode, the receiving node receives the data and outputs the data in the following format:

```
at+recv=<RSSI>,<SNR>,<Data Length>:<Data>
```

## Appendix I: Data Rate by Region

<b>EU868/EU433/AS923</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF7 / 250&nbsp;kHz  | 11000                                |
| 7         | FSK: 50&nbsp;kbps         | 50000                                |
| 8 ~ 15    | RFU                       |                                      |

<b>CN470/KR920</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6 ~ 15    | RFU                       |                                      |

<b>US915</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 1         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 2         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 3         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 4         | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 5 ~ 7     | RFU                       |                                      |
| 8         | LoRa: SF12 / 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11 / 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10 / 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9 / 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 13        | LoRa: SF7 / 500&nbsp;kHz  | 21900                                |
| 14 ~ 15   | RFU                       |                                      |

<b>AU915</b> 

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |
| 7         | RFU                       | RFU                                  |
| 8         | LoRa: SF12 / 500&nbsp;kHz | 980                                  |
| 9         | LoRa: SF11 / 500&nbsp;kHz | 1760                                 |
| 10        | LoRa: SF10 / 500&nbsp;kHz | 3900                                 |
| 11        | LoRa: SF9 / 500&nbsp;kHz  | 7000                                 |
| 12        | LoRa: SF8 / 500&nbsp;kHz  | 12500                                |

<b>IN865</b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6         | RFU                       | RFU                                  |
| 7         | FSK: 50&nbsp;kbps         | 50000                                |
| 8 ~ 15    | RFU                       | RFU                                  |

## Appendix II：TX Power by Region

<b>EU868</b>

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

<b>US915</b>

| TXPower | Configuration (Conducted Power) |
| ------- | ------------------------------- |
| 0       | 30&nbsp;dBm - 2*TXpower         |
| 1       | 28&nbsp;dBm                     |
| 2       | 26&nbsp;dBm                     |
| 3 ~ 9   | -                               |
| 10      | 10&nbsp;dBm                     |
| 11 ~ 15 | RFU                             |

<b>AU915</b>

By default, MaxEIRP is considered to be +30&nbsp;dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1 ~ 10  | MaxEIRP - 2*TXPower  |
| 11 ~ 15 | RFU                  |

<b>KR920</b>

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

<b>AS923</b>

By default, MaxEIRP shall be 16&nbsp;dBm. 

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

<b>IN865</b>

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

<b>CN470</b>

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

<b>EU433</b>

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

## Appendix III：Maximum Transmission Load by Region

::: tip 📝 NOTE
In the following list, M is the length with MAC header and N is the length without MAC header and also the maximum sending data length.
:::

<b>EU868</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |

<b>US915</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 19          | 11          |
| 1        | 61          | 53          |
| 2        | 133         | 125         |
| 3        | 250         | 242         |
| 4        | 250         | 242         |
| 5 ~ 7    | Not Defined | Not Defined |
| 8        | 61          | 53          |
| 9        | 137         | 129         |
| 10       | 250         | 242         |
| 11       | 250         | 242         |
| 12       | 250         | 242         |
| 13       | 250         | 242         |
| 14 ~ 15  | Not Defined | Not Defined |

<b>AU915</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | Not Defined | Not Defined |
| 8        | 61          | 53          |
| 9        | 137         | 129         |
| 10       | 250         | 242         |
| 11       | 250         | 242         |
| 12       | 250         | 242         |
| 13       | 250         | 242         |
| 14 ~ 15  | Not Defined | Not Defined |

<b>KR920</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6 ~ 15   | Not Defined | Not Defined |

<b>AS923</b>

<table style="text-align: center">
<thead>
  <tr>
   <th>DataRate</th>
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
    <td>8 ~ 15</td>
      <td colspan=2>RFU</td>
      <td colspan=2>RFU</td>
  </tr>
</tbody>
</table>

<b>IN865</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |

<b>CN470</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6 ~ 15   | Not Defined | Not Defined |

<b>EU433</b>

| DataRate | M           | N           |
| -------- | ----------- | ----------- |
| 0        | 59          | 51          |
| 1        | 59          | 51          |
| 2        | 59          | 51          |
| 3        | 123         | 115         |
| 4        | 250         | 242         |
| 5        | 250         | 242         |
| 6        | 250         | 242         |
| 7        | 250         | 242         |
| 8 ~ 15   | Not Defined | Not Defined |

## Pin Description of RAK4270 Breakout Board

The pin definition of the RAK4270 Breakout Board can be reviewed in the following documentation:

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/datasheet/2.pin-definition.png"
  width="40%"
  caption="RAK4270 Breakout Board Pinout"
/>

A summary of the pins of the RAK4270 Breakout Board:

1. **About the UART pin**:
  
  - Pins UART1_TX/PA9 and UART1_RX/PA10 are reserved for UART1.
  - Pins UART2_TX/PA2 and UART2_RX/PA3 are reserved for UART2. 
  - During sleep, UART1_RX1/PA10 and UART1_RX1/PA3 are configured as external interrupt mode, internal pull-down resistor, rising edge trigger wake-up.
  
2. **About the SWD debug pin**: Pins SWDIO/PA13 and SWCLK/PA14 are used for SWD debug port.

3. **About the reset pin**: The reset pin on the RAK4270 Breakout Board is MCU_NRST.


4. **About the ADC pin**: The ADC pin on the RAK4270 Breakout Board is assigned to the UART2_DE/PA1. This is called Pin 3 which is based on the RAK4270 pin numbers.


5. **About the GPIO pins**: The pin numbers are based on RAK4270 pin naming. The GPIO pin available on the RAK4270 board are the following:
  
  - Pin 3 (UART2_DE/PA1)
  - Pin 6 (UART1_DE/PA12)
  - Pin 9 (I2C_SCL/PB6)
  - Pin 10 (I2C_SDA/PB7)
  - Pin 16 (PB4)
  - Pin 17 (PA8)

::: tip 📝 NOTE
If you want to use RAK4270 Breakout Board to make a product, you should understand how to upgrade the RAK4270 firmware in future. As mentioned, the firmware of the RAK4270 Breakout Board can be upgraded through the SWD or UART1. Both requires a general-purpose PC.
:::
