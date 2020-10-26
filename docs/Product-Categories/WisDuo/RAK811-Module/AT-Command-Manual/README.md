---
prev: ../Quickstart/
next: ../Low-Level-Development/
tags: RAK811
---


# AT Commands for RAK811 

## Introduction

The RAK811 module is designed to simplify LoRa peer to peer (P2P) and LoRaWAN communication. This module aids you in dealing with complicated SPI protocol with the LoRa transceivers. Instead, a well-known serial communication interface is provided for sending commands and requesting the internal status of the module. This approach allows a straightforward way to integrate LoRa technology into your projects. 

On top of this serial interface, a set of AT commands are defined, an external microcontroller will be able to control the RAK811 module as a classic AT modem. Through the AT commands, you can set parameters of the LoRaWAN communication, controlling GPIO pins, and analog inputs. 

In the RAK811 module, the serial communication is exposed on the **UART1 port**, through the **pin 6 (TX1)** and **pin 7 (RX1)**. The parameters of the UART1 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the “**RAK811 Specification Manual**”. See the summary provided in [Appendix IV](/Product-Categories/WisDuo/RAK811-Module/LoRaWAN-P2P/AT-Command-Manual/#appendix-iv-pin-description-of-rak811).


The RAK811 module also exposes another serial port through the **pin 25 (TX3)** and **pin 26 (RX3)**. This port is named as **UART3**. You can use it to connect another MCU or an additional UART peripheral such as a GPS module. The parameters of the UART3 communication are **115200 / 8-N-1**.

In the case that the target application only requires one single UART port, then it is recommended to make use of the UART3 to connect to the MCU and reserved the UART1 for future firmware upgrade.

### AT Command Syntax

The AT command is based on ASCII characters. In general, the AT Command starts with the prefix `AT` or `at` and ends with `<CR><LF>` (i.e. \r\n). The maximum length is **255 characters** which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the "\r\n" part is omitted for the sake of clarity.

The AT commands can be classified in the following groups:

* **Read Command** : Reads the current configuration or status of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character. 

```
at+get_config=<m>:<n>

```

<br>

* **Write Command** : Writes/Modifies the current configuration of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character.


```
at+set_config=<m>:<n>
```

<br>

* **Operational Commands** : There are also commands that are neither read nor write commands. The purpose is to execute an action, for example:

```
at+send=lora:<m>:<n> // Sends data through the LoRa transceiver.
```

<br>

* **Special Command** : The RAK811 UART port has two operational modes: **configuration mode** and **data transmission mode**. When switching from data transmission mode to configuration mode the command to be entered is `+++` and does not contain terminators such as `\ r` and `\ n`.

After executing the command, a response is sent back to the external MCU. The usual reply has the following format:

` OK [information]\r\n `

<br>

:::tip 📝 NOTE:

Only the read commands have information in the replied message, while Write commands do not have an informative description. 

:::

<br>

After sending a successful command to the module, the firmware developed, running in the external MCU, will expect at a minimum string of `Ok\r\n`. On the other hand, when the command is not successfully executed by the module, you will receive a response with the following format:

`ERROR: [ErrCode]\r\n`

### Error Code Table

| **Error Code** | **Description** |
| --- | --- |
|  1  | The last command received is an unsupported AT command. |
|  2  | Invalid parameter in the AT command. |
|  3  | There is an error when reading or writing the flash memory. |
|  4  | There is an error when reading or writing through IIC bus. |
|  5  | There is an error when sending data through the UART port. |
| 41  | The BLE felt into an invalid state, could not applied the command. |
| 80  | The LoRa transceiver is busy, could not process a new command. |
| 81  | LoRa service is unknown. Unknown MAC command received by node. Execute commands that are not supported in the current state, such as sending `at+join` command in P2P mode. |
| 82  | The LoRa parameters are invalid. |
| 83  | The LoRa parameters are invalid. |
| 84  | The LoRa data rate (DR) is invalid. |
| 85  | The LoRa frequency and data rate are invalid. |
| 86  | The device has not joined into a LoRa network. |
| 87  | The length of the packet exceeded that maximum allowed by the LoRa protocol. |
| 88  | Service is closed by the server. Due to the limitation of duty cycle, the server will send " SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service. |
| 89  | This is an unsupported region code. |
| 90  | Duty cycle is restricted. Due to duty cycle, data cannot be sent at this time until the time limit is removed. |
| 91  | No valid LoRa channel could be found. |
| 92  | No available LoRa channel could be found. |
| 93  | Status is error. Generally, the internal state of the protocol stack is wrong. |
| 94  | Time out reached while sending the packet through the LoRa transceiver. |
| 95  | Time out reached while waiting for a packet in the LoRa RX1 window. |
| 96  | Time out reached while waiting for a packet in the LoRa RX2 window. |
| 97  | There is an error while receiving a packet during the LoRa RX1 window. |
| 98  | There is an error while receiving a packet during the LoRa RX2 window. |
| 99  | Failed to join into a LoRa network. |
| 100 | Duplicated down-link message detected. A message with an invalid down-link count was received. |
| 101 | Payload size is not valid for the current data rate (DR). |
| 102 | There many down-link packets were lost. |
| 103 | Address fail. The address of the received packet does not match the address of the current node. |
| 104 | Invalid MIC was detected in the LoRa message. |

## General AT Command

1. <b> `at+version` </b>

This command is used for reading the version number of the current firmware.

| **Operation** |    **Command**   |        **Response**       |
|      ---      |        ---       |             ---           |
|     Read      |   `at+version`   |   `OK <version number>`   |

<br>

**Parameter**: NONE

**Example**:

```
at+version\r\n                         
OK V3.0.0.14.H
```

<br>

2. <b> `at+help` </b>

This command is used to obtain all AT commands supported by the current firmware.

| **Operation** |    **Command**   |        **Response**       |
|      ---      |        ---       |             ---           |
|     Read      |     `at+help`    |  `OK <all AT commands>`   |

<br>

**Parameter**: NONE

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


LoRaP2P AT commands:

  at+set_config=lorap2p:XXX:Y:Z:A:B:C
  at+set_config=lorap2p:transfer_mode:X
  at+send=lorap2p:XXX
```

<br>

3. <b> `at+set_config=device:restart` </b>

This command is used for restarting the device.

| **Operation** |           **Command**          |        **Response**       |
|      ---      |             --------           |             ---           |
|     Read      | `at+set_config=device:restart` |                           |

<br>

**Parameter**: NONE

**Example**:

```
at+set_config=device:restart\r\n        

UART1 work mode: RUI_UART_NORMAL

Current work_mode:LoRaWAN, join_mode:OTAA, MulticastEnable: false, Class: A

Initialization OK
```

<br>

4. <b> `at+set_config=device:sleep:<status>` </b>

This command is used for changing the current state of the device between sleep and wake up mode.

| **Operation** |             **Command**             |     **Response**    |
|      ---      |               --------              |         ---         |
|     Write     |`at+set_config=device:sleep:<status>`|     `OK<STATUS>`    |

<br>

**Parameter**:

| Status | 0: **wake up** <br> 1: **sleep** |
| --- | --- |

<br>

**Example**:

```
at+set_config=device:sleep:1\r\n                         
OK Sleep

at+set_config=device:sleep:0\r\n 
OK Wake Up
```

<br>

5. <b> `at+get_config=device:status` </b>

This command is used for obtaining the status of the device.

| **Operation** |             **Command**             |     **Response**    |
|      ---      |               --------              |         ---         |
|     Read      |     `at+get_config=device:status`   |  `OK<information>`  |

<br>

**Parameter**: None

**Example**:

```
at+get_config=device:status\r\n                         
OK Board Core:RAK811
MCU:STM32L151CB_A
LoRa chip:SX1276
```


## Interface Type AT Command

1. <b> `at+set_config=device:uart:<index>:<baud_rate>` </b>

This command is used for configuring the baud rate for an UART port.

| **Operation** |                   **Command**                 |  **Response**  |
|      ---      |                    --------                   |      ---       |
|    Write      |`at+set_config=device:uart:<index>:<baud_rate>`|      `OK`      |

<br>

**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Number </td>
    </tr>
    <tr>
      <td> baud_rate </td>
      <td> UART Baud rate：1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200 
      </td>
    </tr>
</table>


<br>

**Example**:

```
at+set_config=device:uart:1:115200\r\n                         
OK
```
<br>

2. <b> `at+set_config=device:uart_mode:<index>:<mode>` </b>

This command is used for switching the UART operation between the AT configuration mode and the data transmission mode. 

| **Operation** |                   **Command**                 |  **Response**  |
|      ---      |                    --------                   |      ---       |
|    Write      |`at+set_config=device:uart_mode:<index>:<mode>`|      `OK`      |

<br>

**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Port Number. Currently, the RAK811 only supports UART1. </td>
    </tr>
    <tr>
      <td> mode </td>
      <td> UART Mode： Only 1 can be selected, which means the UART is set to data transmission mode </td>
    </tr>
</table>

<br>

:::tip 📝 NOTE: 

To switch from data transmission mode to configuration mode, use `+++` (`+++` without `\ r\ n`).

:::

<br>

**Example**:

```
at+set_config=device:uart_mode:1:1\r\n                         
OK

+++
OK
```

<br>

3. <b> `at+send=uart:<index>:<data>` </b>

This command is used for sending data over a UART port.

| **Operation** |         **Command**           |  **Response**  |
|      ---      |           --------            |      ---       |
|    Write      | `at+send=uart:<index>:<data>` |      `OK`      |

<br>

**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Port Number. Currently, the RAK811 only supports UART1. </td>
    </tr>
    <tr>
      <td> mode </td>
      <td> The data you want to send. The maximum length of data is <b>250 characters</b>, equivalent to 255 — the length of <code>at+...</code> — the length of <code>\ r\ n.</code> </td>
    </tr>
</table>

<br>

**Example**:

```
at+send=uart:1:12345\r\n                         
OK
```

<br>

4. <b> `at+get_config=device:gpio:<pin_num>` </b>

This command is used for obtaining the voltage level status of a pin on a module.

| **Operation** |              **Command**              |  **Response**  |
|      ---      |               --------                |      ---       |
|     Read      | `at+get_config=device:gpio:<pin_num>` |  `OK<status>`  |

<br>

**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> Pin index of the module </td>
    </tr>
    <tr>
      <td> status（Return Value） </td>
      <td> 0: Low voltage level <br> 1: High voltage level
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+get_config=device:gpio:2\r\n                         
OK 1
```

<br>

5. <b> `at+set_config=device:gpio:<pin_num>:<status>`  </b>

This command is used for setting the voltage level state (high or low) of a pin on a module.

| **Operation** |                  **Command**                  |  **Response** |
|      ---      |                   --------                    |      ---      |
|     Write     |`at+set_config=device:gpio:<pin_num>:<status>` |      `OK`     |

<br>

**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> Pin index of the module </td>
    </tr>
    <tr>
      <td> status </td>
      <td> 0: Low voltage level <br> 1: High voltage level
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=device:gpio:2:0\r\n                         
OK 
```

<br>

6. <b> `at+get_config=device:adc:<pin_num>` </b>

This command is used for obtaining the voltage level of an ADC pin of the module.

| **Operation** |            **Command**              |  **Response** |
|      ---      |             --------                |      ---      |
|     Read      |`at+get_config=device:adc:<pin_num>` | `OK<voltage>` |

<br>

**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> ADC pin index of the module </td>
    </tr>
    <tr>
      <td> Voltage（Return Value） </td>
      <td> Voltage，Unit: <b>mV</b>
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+get_config=device:adc:2\r\n                         
OK 1663mV
```

## LoRaWAN Type AT Command

1. <b> `at+join` </b>

This command is used for joining to the LoRaWAN network. 

| **Operation** | **Command** |    **Response**   |
|      ---      |   ------    |        ---        |
|               |  `at+join`  | `OK Join Success` |

<br>

**Parameter**: NONE

**Example**:

```
at+join\r\n
OK Join Success
```

2. <b> `at+send=lora:<port>:<data>` </b>

This command is used for sending data via LoRaWAN.


| **Operation** |        **Command**         |  **Response**  |
|      ---      |           ------           |      ---       |
|               |`at+send=lora:<port>:<data>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> port </td>
      <td> Sending port of LoRa. The value range is 1-223. </td>
    </tr>
    <tr>
      <td> data </td>
      <td> The sending data format is in hexadecimal format. The possible values are between <b>00-FF</b>. The module will internally cast every two characters into a byte before sending it to the LoRa transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN standard). Refer to <a href="/Product-Categories/WisDuo/RAK811-Module/LoRaWAN-P2P/AT-Command-Manual/#appendix-iii：maximum-transmission-load-by-region" >Appendix III</a>.
    </td>
    </tr>
</table>


<br>

**Example**:

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

When sending a confirmed message, you will receive an ACK response, i.e. `at+recv=...`. In `0, -105, -12, 0`, “**0**" stands for the LoRa port, “**-105**" stands for the RSSI, “**-12**" stands for the SNR, and “**0**" stands for the length of the data (no valid data in ACK).

:::

<br>

3. <b> `at+set_config=lora:region:<region>` </b>

This command is used for setting the appropriate working frequency band.


| **Operation** |            **Command**             |  **Response**  |
|      ---      |               ------               |      ---       |
|    Write      |`at+set_config=lora:region:<region>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> region </td>
      <td> EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923. The default is EU868.
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:region:EU868\r\n                         
OK
```

:::tip 📝 NOTE:
In the AS923 frequency band, the supported frequency plan is "as2" and dwell is set to 1.
:::

<br>

4. <b> `at+get_config=lora:channel` </b>

This command is used for reading all the LoRa channel information for the device's current region.


| **Operation** |       **Command**          |       **Response**       |
|      ---      |         ------             |            ---           |
|    Read       |`at+get_config=lora:channel`|`OK <channel information>`|

<br>

**Parameter**: NONE

**Example**:
- EU868 region

```
at+get_config=lora:channel\r\n                         
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0 
```

:::tip 📝 NOTE:

With “__*0,on,868100000,0,5__” as an example，channel parameter analysis:
“__*__” at the beginning if the channel is open;
“__0__” is the channel ID;
“__on__” indicates the current status of the channel;
“__868100000__” is the actual frequency of the channel，unit is Hz;
“__0,5__” indicates the DR of the channel, DR0~DR5.

:::

<br>

5. <b> `at+set_config=lora:ch_mask:<channel_number>:<status>` </b>

This command is used for switching a channel (turn on or off) in the current region. 


| **Operation** |                         **Command**                  |  **Response**  |
|      ---      |                           ------                     |      ---       |
|    Write      |`at+set_config=lora:ch_mask:<channel_number>:<status>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> channel_number </td>
      <td> Channel number
    </td>
    </tr>
    <tr>
      <td> status </td>
      <td> 0: off <br> 1: on
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:ch_mask:0:0\r\n
OK
```

<br>

6. <b> `at+set_config=lora:dev_eui:<dev_eui>` </b>

This command is used for setting the Device EUI parameter for the LoRaWAN OTAA mode.

| **Operation** |             **Command**              |  **Response**  |
|      ---      |                ------                |      ---       |
|    Write      |`at+set_config=lora:dev_eui:<dev_eui>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> dev_eui </td>
      <td> Device EUI
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:dev_eui:3530353064377716\r\n                         
OK
```

<br>

7. <b> `at+set_config=lora:app_eui:<app_eui>` </b>

This command is used for setting the Application EUI parameter for the LoRaWAN OTAA mode.

| **Operation** |             **Command**              |  **Response**  |
|      ---      |                ------                |      ---       |
|    Write      |`at+set_config=lora:app_eui:<app_eui>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> app_eui </td>
      <td> Application EUI
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:app_eui:0000000000000001\r\n                         
OK
```

<br>

8. <b> `at+set_config=lora:app_key:<app_key>` </b>

This command is used for setting the Application Key parameter for the LoRaWAN OTAA mode.

| **Operation** |             **Command**              |  **Response**  |
|      ---      |                ------                |      ---       |
|    Write      |`at+set_config=lora:app_key:<app_key>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> app_key </td>
      <td> Application Key
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```

<br>

9. <b> `at+set_config=lora:dev_addr:<dev_addr>` </b>

This command is used for setting the Device Address parameter for the LoRaWAN ABP mode.


| **Operation** |               **Command**              |  **Response**  |
|      ---      |                  ------                |      ---       |
|    Write      |`at+set_config=lora:dev_addr:<dev_addr>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> dev_addr </td>
      <td> Device Address
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:dev_addr:260125D7\r\n                         
OK
```

<br>

10. <b> `at+set_config=lora:apps_key:<apps_key>` </b>

| **Operation** |               **Command**              |  **Response**  |
|      ---      |                  ------                |      ---       |
|    Write      |`at+set_config=lora:apps_key:<apps_key>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> apps_key </td>
      <td> Application Session Key
    </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```

<br>

11. <b> `at+set_config=lora:nwks_key:<nwks_key>` </b>

This command is used for setting the Network Session Key parameter for the LoRaWAN ABP mode.

| **Operation** |               **Command**              |  **Response**  |
|      ---      |                  ------                |      ---       |
|    Read       |`at+set_config=lora:nwks_key:<nwks_key>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> nwks_key </td>
      <td> Network Session Key </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42\r\n                         
OK
```

<br>

12. <b> `at+set_config=lora:multicastenable:<IsEnable>` </b>

    
| **Operation** |                  **Command**                  |  **Response**  |
|      ---      |                     ------                    |      ---       |
|    Write      |`at+set_config=lora:multicastenable:<IsEnable>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> IsEnable </td>
      <td> 0: disable <br> 1: enable <br> The default is disable. </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:multicastenable:1\r\n                         
OK
```

<br>

13. <b> `at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>` </b>

This command is used for setting the Device Address for the multicast feature.
 
| **Operation** |                        **Command**                         |  **Response**  |
|      ---      |                           ------                           |      ---       |
|    Write      |`at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> multicast_dev_addr </td>
      <td> Multicast Device Address </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:multicast_dev_addr:260111fd\r\n                         
OK
```

<br>

14. <b> `at+set_config=lora:multicast_apps_key:<multicast_apps_key>` </b>

This command is used for setting of the Application Session Key for the multicast feature.

| **Operation** |                        **Command**                         |  **Response**  |
|      ---      |                           ------                           |      ---       |
|    Write      |`at+set_config=lora:multicast_apps_key:<multicast_apps_key>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> multicast_app_addr </td>
      <td> Multicast Application Session Key </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:multicast_apps_key:F13DDFA2619B10411F02F042E1C0F356\r\n                         
OK
```

<br>

15. <b> `at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>` </b>

This command is used for setting the Network Session Key for the multicast feature.

| **Operation** |                        **Command**                         |  **Response**  |
|      ---      |                           ------                           |      ---       |
|    Write      |`at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> multicast_nwks_key </td>
      <td> Multicast Network Session Key </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:multicast_nwks_key:1D1991F5377C675879C39B6908D437A6\r\n                         
OK
```

<br>

16. <b> `at+set_config=lora:join_mode:<mode>` </b>

This command is used for switching the LoRaWAN access mode between the OTAA and the ABP mode.

| **Operation** |            **Command**              |  **Response**  |
|      ---      |              ------                 |      ---       |
|    Write      |`at+set_config=lora:join_mode:<mode>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> mode </td>
      <td> Activation mode <br> 0: OTAA <br> 1: ABP <br> The default is OTAA. </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:join_mode:1\r\n                         
OK
```

<br>


17. <b> `at+set_config=lora:class:<class>` </b>

This command is used for setting LoRaWAN class to Class A, Class B, or Class C.


| **Operation** |            **Command**              |  **Response**  |
|      ---      |              ------                 |      ---       |
|    Write      |  `at+set_config=lora:class:<class>` |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> class </td>
      <td> 0: Class A <br> 1: Class B （Not supported at this time）<br> 2: Class C <br> The default is Class A. </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:class:0\r\n
OK
```

<br>

18. <b> `at+set_config=lora:confirm:<type>` </b>

This command is used for setting the type messages to be sent: Confirmed/Unconfirmed.

| **Operation** |            **Command**              |  **Response**  |
|      ---      |              ------                 |      ---       |
|    Write      | `at+set_config=lora:confirm:<type>` |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> type </td>
      <td> 0: unconfirm type <br> 1: confirm type <br> The default is unconfirm type.
 </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:confirm:0\r\n                         
OK
```

19. <b> `at+set_config=lora:dr:<dr>` </b>

This command is used to set the data rate (DR) of LoRa.

| **Operation** |            **Command**              |  **Response**  |
|      ---      |              ------                 |      ---       |
|    Write      |     `at+set_config=lora:dr:<dr>`    |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> dr </td>
      <td> The data rate of LoRa is related to the current region. In most of the LoRa areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWAN 1.0.2 specification. </td>
    </tr>
</table>

<br>

20. <b> `at+set_config=lora:tx_power:<tx_power>` </b>

This command is used for setting the level of the RF transmission power of the LoRa transceiver. The unit is in dBm.


| **Operation** |             **Command**                |  **Response**  |
|      ---      |               ------                   |      ---       |
|    Write      |`at+set_config=lora:tx_power:<tx_power>`|      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td>tx_power </td>
      <td> LoRa transmit power level varies depending on frequency band and DR. Refer to the LoRaWAN 1.0.2 specification or Appendix II for details. <br> The default is 0.
 </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:tx_power:0\r\n                         
OK
```

<br>

21. <b> `at+set_config=lora:adr:<status>` </b>

This command is used for setting (turn on/off) the ADR feature of the LoRa communication. 

| **Operation** |             **Command**                |  **Response**  |
|      ---      |               ------                   |      ---       |
|    Write      |    `at+set_config=lora:adr:<status>`   |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> status </td>
      <td> 0: Turn off <br> 1: Turn on <br> The default is on. </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:adr:0\r\n                         
OK
```

<br>

22. <br> `at+get_config=lora:status` </b>

This command is used for getting all of the information related to the current LoRa status (except channel information).

| **Operation** |         **Command**             |  **Response**  |
|      ---      |            ------               |      ---       |
|    Read       |  `at+get_config=lora:status`    |`OK <lora status detail>`|

<br>

**Parameter**: NONE


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

<br>

23. <b> `at+set_config=lora:dutycycle_enable:<status>` </b>

This command is used for enabling or disabling the Duty Cycle feature.

| **Operation** |                   **Command**                 |  **Response**  |
|      ---      |                      ------                   |      ---       |
|    Write      |`at+set_config=lora:dutycycle_enable:<status>` |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> status </td>
      <td> 0: disable <br> 1: enable <br> The default is disable. </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora:dutycycle_enable:1\r\n
OK
```

<br>

24. <b> `at+set_config=lora: send_repeat_cnt:<num>` </b>

This command is used for setting the number attempts for retransmitting an uplink message. When activated, the module will resend a message if its corresponding ACK (down link) is not received after sending a confirmed uplink message. The default value is 0, which means that the module will not resend any message by default.

| **Operation** |                   **Command**                 |  **Response**  |
|      ---      |                      ------                   |      ---       |
|    Write      |  `at+set_config=lora: send_repeat_cnt:<num>`  |      `OK `     |

<br>

**Parameter**:

<table>
    <tr>
      <td> num </td>
      <td> Number of retries, up to 8. <br> The default is 0.  </td>
    </tr>
</table>

<br>

**Example**:

```
at+set_config=lora: send_repeat_cnt:1\r\n
OK
```

<br>

25. <br> `at+set_config=lora:default_parameters` </b>

This command is used for restoring the factory setting.

| **Operation** |                   **Command**                 |  **Response**  |
|      ---      |                      ------                   |      ---       |
|    Write      |   `at+set_config=lora:default_parameters`     |      `OK `     |

<br>

**Parameter**: NONE

**Example**:

```
at+set_config=lora:default_parameters\r\n
OK
```

<br>

## LoRa P2P Type AT Command

1. <b>`at+set_config=lora:work_mode:<mode>`</b>

This command is used for switching the LoRa transmission mode between the LoRaWAN and the LoRAP2p mode. This command will cause the module to restart once applied.

|**Operation**|**Command**|**Response**|
|---------|-------|--------|
|Write|`at+set_config=lora:work_mode:<mode>`||

**Parameter**:

<table>
    <tr>
      <td> mode </td>
      <td>Work mode of LoRa<br>0: LoRaWAN<br>1: LoRa P2P <br><br>The default is LoRaWAN mode</td>
    </tr>
</table>

<br>

**Example**：
```
at+set_config=lora:work_mode:1\r\n                         
UART1 work mode: RUI_UART_NORMAL
Current work_mode:P2P
Initialization OK
```

<br> 

2. <b> `at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`</b>

This command is used for setting the relevant parameters of LoRAP2p mode and is only valid when the LoRa mode was switched to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`|OK| 

**Parameter**:

<table>
        <tr>
            <td>frequency</td>
            <td>Frequency, the unit is Hz<br>The default is 869525000Hz.</td>
        </tr>
        <tr>
            <td>spreadfact</td>
            <td>Spreading factor<br>The default is 12.</td>
        </tr>
        <tr>
            <td>bandwidth</td>
            <td>0:  125KHz<br>1:  250KHz<br>2:  500KHz<br><br>The default is 0.</td>
        </tr>
        <tr>
            <td>codeingrate</td>
            <td>1:  4/5<br>2:  4/6<br>3:  4/7<br>4:  4/8<br><br>The default is 1.</td>
        </tr>
        <tr>
            <td>preamble</td>
            <td>Preamble Length. 5~65535<br>The default is 8.</td>
        </tr>
        <tr>
            <td>power</td>
            <td>TX power. The unit is in dBm. 5~20<br>The default is 20.</td>
        </tr>
</table>

<br>

**Example**：
```
at+set_config=lorap2p:869525000:12:0:1:8:20\r\n                         
OK
```

<br>

3. <b> `at+set_config=lorap2p:transfer_mode:<mode>` </b>

This command is used for switching the state of the LoRa transceiver between sending and receiving state, and it’s only valid when the LoRa mode was set to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lorap2p: transfer_mode:<mode>`|OK|

**Parameter**：

<table>
      <tr>
            <td>mode</td>
            <td>1:  receiver mode<br>2:  sender mode<br><br>The default is sender mode.</td>
        </tr>
</table>

<br>

**Example**：
```
at+set_config=lorap2p:transfer_mode:1\r\n           
OK
```

<br>

4. <b>`at+send=lorap2p:<data>`</b>

This command is used for sending data through LoRaP2P, and only valid when the LoRa work mode was set to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Send|`at+send=lorap2p:<data>`|OK|

**Parameter**：

<table>
      <tr>
            <td>mode</td>
            <td>1:  receiver mode<br>2:  sender mode<br><br>The default is sender mode.</td>
        </tr>
</table>

<br>

**Example**：
```
at+send=lorap2p:1234\r\n                         
OK
```


In LoRa P2P mode, the receiving node receives the data and outputs the data in the following format:

```
at+recv=<RSSI>,<SNR>,< Data Length >:< Data >
```

<br>

## Appendix I：Data Rate by Region

<b> EU433/EU868/AS923 </b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |LoRa: SF7 / 250kHz |                 11000              |
|   7     |FSK: 50kbps        |                 50000              |
| 8 ~ 15  |RFU                |                                    |

<br>

<b> CN470/KR920 </b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
| 6 ~ 15  |        RFU        |                                    |

<br>

<b> US915 </b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF10 / 125kHz|                 980                |
|   1     |LoRa: SF9 / 125kHz |                 1760               |
|   2     |LoRa: SF8 / 125kHz |                 3125               |
|   3     |LoRa: SF7 / 125kHz |                 5470               |
|   4     |LoRa: SF8 / 500kHz |                 12500              |
| 5 ~ 7   |        RFU        |                                    |
|   8     |LoRa: SF12/500kHz  |                 980                |
|   9     |LoRa: SF11/500kHz  |                 1760               |
|   10    |LoRa: SF10/500kHz  |                 3900               |
|   11    |LoRa: SF9/500kHz   |                 7000               |
|   12    |LoRa: SF8/500kHz   |                 12500              |
|   13    |LoRa: SF7/500kHz   |                 21900              |
| 14 ~ 15 |        RFU        |                                    |


<br>


<b> AU915 </b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |LoRa: SF8/500kHz   |                 12500              |
|   7     |        RFU        |                 RFU                |
|   8     |LoRa: SF12/500kHz  |                 980                |
|   9     |LoRa: SF11/500kHz  |                 1760               |
|   10    |LoRa: SF10/500kHz  |                 3900               |
|   11    |LoRa: SF9/500kHz   |                 7000               |
|   12    |LoRa: SF8/500kHz   |                 12500              |

<br>

<b> IN865 </b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |RFU                |                 RFU                |
|   7     |FSK: 50kbps        |                 50000              |
| 8 ~ 15  |RFU                |                 RFU                |

<br>


## Appendix II：TX Power by Region

<b> EU868 </b>
 
By default, MaxEIRP is considered to be +16dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|   6   |   MaxEIRP - 12dB   |
|   7   |   MaxEIRP - 14dB   |
|8 ~ 15 |      RFU           |

<br>


<b> US915 </b>

|TXPower|Configuration (conducted power)|
|-------|-------------------------------|
|   0   |   30 dBm - 2*TXpower          |
|   1   |   28 dBm                      |
|   2   |   26 dBm                      |
| 3 ~ 9 |                               |
|   10  |   10 dBm                      |
|11 ~ 15|      RFU                      |

<b> AU915 </b>

By default, MaxEIRP is considered to be +30dBm. 

|TXPower|Configuration (EIRP)   |
|-------|-----------------------|
|   0   |   MaxEIRP             |
|1 ~ 10 |   MaxEIRP - 2*TXPower |
|11 ~ 10|      RFU              |

<br>


<b> KR920 </b>

By default, MaxEIRP is considered to be +14dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|   6   |   MaxEIRP - 12dB   |
|   7   |   MaxEIRP - 14dB   |
|8 ~ 15 |      RFU           |

<br>


<b> AS923 </b>

By default, Max EIRP shall be 16dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|   6   |   MaxEIRP - 12dB   |
|   7   |   MaxEIRP - 14dB   |
|8 ~ 15 |      RFU           |


<br>


<b> IN865 </b>

By default, MaxEIRP is considered to be 30dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|   6   |   MaxEIRP - 12dB   |
|   7   |   MaxEIRP - 14dB   |
|   8   |   MaxEIRP - 16dB   |
|   9   |   MaxEIRP - 18dB   |
|   10  |   MaxEIRP - 20dB   |
|11 ~ 15|      RFU           |

<br>


<b> CN470 </b>

By default, MaxEIRP is considered to be +19.15dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|   6   |   MaxEIRP - 12dB   |
|   7   |   MaxEIRP - 14dB   |
|8 ~ 15 |      RFU           |

<br>


<b> EU433 </b>

By default, MAxEIRP is considered to be +12.15dBm. 

|TXPower|Configuration (EIRP)|
|-------|--------------------|
|   0   |   MaxEIRP          |
|   1   |   MaxEIRP - 2dB    |
|   2   |   MaxEIRP - 4dB    |
|   3   |   MaxEIRP - 6dB    |
|   4   |   MaxEIRP - 8dB    |
|   5   |   MaxEIRP - 10dB   |
|6 ~ 15 |      RFU           |

<br>

## Appendix III：Maximum Transmission Load by Region

:::tip 📝 NOTE:
M in the following list is the length with MAC header, N is the length without MAC header, and the maximum sending data length is N.
::::

<b> EU868 </b>

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6|250|242|
|7|250|242|
|8 ~ 15|Not Defined|Not Defined|

<br>


<b> US915 </b>

|Data Rate|M|N|
|--------|-|-|
|0|19|11|
|1|61|53|
|2|133|125|
|3|250|242|
|4|250|242|
|5 ~ 7|Not Defined|Not Defined|
|8|61|53|
|9|137|129|
|10|250|242|
|11|250|242|
|12|250|242|
|13|250|242|
|14 ~ 15|Not Defined|Not Defined|

<br>


<b> AU915 </b>

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6|250|242|
|7|Not Defined|Not Defined|
|8|61|53|
|9|137|129|
|10|250|242|
|11|250|242|
|12|250|242|
|13|250|242|
|14 ~ 15|Not Defined|Not Defined|

<br>


<b> KR920 </b>

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6 ~ 15|Not Defined|Not Defined|

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

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6|250|242|
|7|250|242|
|8 ~ 15|Not Defined|Not Defined|
 
<br>


<b> CN470 </b>

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6 ~ 15|Not Defined|Not Defined|

<br>


<b> EU433 </b>

|Data Rate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6|250|242|
|7|250|242|
|8 ~ 15|Not Defined|Not Defined|

<br>



## Appendix IV: Pin Description of RAK811

The pin definition of the RAK811 module can be reviewed in the [Pin Definition](/Product-Categories/WisDuo/RAK811-Module/Datasheet/#pin-definition) section of this documentation.


Listed are the summary of the pins of the RAK811 module:

1. **About the UART pin**: Pin 6 (TX1) and pin 7 (RX1) are reserved for UART1. Pin 25 (TX3) and pin 26 (RX3) are reserved for UART3.
During sleep, pin 7 (RX1) and pin 26 (RX3) are configured as external interrupt mode, internal pull-down resistor, bilateral edge trigger wake-up.

2. **About the SWD debug pin**: Pin 10 (SWDIO) and pin 13 (SWCLK) are used for SWD connection.

3. **About the power pin**: The power pin on the RAK811 module includes VCC/GND, pin 1, pin 11, pin 12, pin 21, pin 28, pin 29, pin 30, pin 31, pin 32, and pin 34;

4. **About the reset pin**: The reset pin on the RAK811 module is the pin 24;

5. **About the BOOT pin**: The BOOT0 pin on the RAK811 module is pin 17;

6. **About the RF antenna pin**: The RF antenna pin on the RAK811 module is the pin 33;

7. **About the ADC pin**: The ADC pins available on the RAK811 are different between the high and low-frequency modules. 

- In the low-frequency modules, the ADC pins arethe following: pin 2, pin 3, pin 4, pin 5, pin 15, pin 20, pin 22, pin 23. 

- In the high-frequency modules, the ADC pins are the following: pin 2, pin 3, pin 4, pin 20, pin 22, pin 23.

8. **About the GPIO**: The GPIO pin available on the RAK811 module are the pin 2, pin 3, pin 4, pin 5, pin 8, pin 9, pin 14, pin 15, pin 16, pin 18, pin 19, pin 20, pin 22, pin 23, pin 27.


:::tip 📝 NOTE:

If you want to use the RAK811 module to make a product, you should understand how to upgrade the RAK811’s firmware in the future. As mentioned, the firmware of the RAK811 module can be upgraded through the SWD or UART1 port. Both requires a general-purpose PC.

:::
