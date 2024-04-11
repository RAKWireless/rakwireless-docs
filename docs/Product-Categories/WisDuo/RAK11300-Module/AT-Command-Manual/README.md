---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK11300 WisDuo Module.
rak_img: /assets/images/wisduo/rak11300-module/RAK11300-Module.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK11300
---

# RAK11300 Module AT Command Manual

## Introduction

RAK11300 WisDuo LPWAN Module is based on the Raspberry Pi RP2040 chip and SX1262 RF transceiver. It provides an easy-to-use, small-size, low-power solution for long-range wireless data applications. This module complies with Class A & C of LoRaWAN 1.0.2 specifications. It can easily connect to different LoRaWAN server platforms like TheThingsNetwork (TTN), Chirpstack, Helium, etc. It also supports LoRa Point-to-Point (P2P) communication mode which helps you in implementing your own customized long-range LoRa network quickly.

The AT commands can be interfaced via USB acting as a serial port (Pin 2 **USB_DM** and Pin 3 **USB_DP**) or via UART1 (Pin 10 **TX1** and Pin 9 **RX1**). The default parameter of the AT commands is fixed to **115200 / 8-N-1**. The firmware upgrade is only possible via USB. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK11300 Module Datasheet](/Product-Categories/WisDuo/RAK11300-Module/Datasheet/).



## Content

- [RAK11300 Module AT Command Manual](#rak11300-module-at-command-manual)
  - [Introduction](#introduction)
  - [Content](#content)
  - [AT Command Syntax](#at-command-syntax)
  - [AT?](#at)
  - [ATR](#atr)
  - [ATZ](#atz)
  - [AT+APPEUI](#atappeui)
  - [AT+APPKEY](#atappkey)
  - [AT+DEVEUI](#atdeveui)
  - [AT+APPSKEY](#atappskey)
  - [AT+NWKSKEY](#atnwkskey)
  - [AT+DEVADDR](#atdevaddr)
  - [AT+CFM](#atcfm)
  - [AT+JOIN](#atjoin)
  - [AT+NJS](#atnjs)
  - [AT+NJM](#atnjm)
  - [AT+SENDFREQ](#atsendfreq)
  - [AT+SEND](#atsend)
  - [AT+ADR](#atadr)
  - [AT+CLASS](#atclass)
  - [AT+DR](#atdr)
  - [AT+TXP](#attxp)
  - [AT+BAND](#atband)
  - [AT+MASK](#atmask)
  - [AT+BAT](#atbat)
  - [AT+RSSI](#atrssi)
  - [AT+SNR](#atsnr)
  - [AT+VER](#atver)
  - [AT+STATUS](#atstatus)
  - [Appendix](#appendix)
    - [Appendix I Data Rate by Region](#appendix-i-data-rate-by-region)
    - [Appendix II TX Power by Region](#appendix-ii-tx-power-by-region)
    - [Appendix III Maximum Transmission Load by Region](#appendix-iii-maximum-transmission-load-by-region)
## AT Command Syntax

The AT command is based on ASCII characters. In general, the AT Command starts with the prefix `AT` and ends with `<CR><LF>` (i.e. \r\n). For the rest of the document, the `\r\n` part is omitted for the sake of clarity.

The AT commands have the standard format “AT+XXX”, with XXX denoting the command.

There are four available command formats:

|   **AT COMMAND FORMAT**    |                  **Description**                  |
| :------------------------: | :-----------------------------------------------: |
|         `AT+XXX?`          | Provides a short description of the given command |
|         `AT+XXX=?`         |     Reading the current value on the command      |
| `AT+XXX=<input parameter>` |       Writing configuration on the command        |
|          `AT+XXX`          |               Used to run a command               |

The output of the commands is returned via UART.

The format of the reply is divided into two parts: returned value and the status return code.

:::tip 📝 NOTE

`<CR>` stands for “carriage return” and `<LF>` stands for “line feed”.

:::

1. **`<value><CR><LF>`** is the first reply when (**`AT+XXX?`**) command description or (**`AT+XXX=?`**) reading value is executed then it will be followed by the status return code. The formats with no return value like (**`AT+XXX=<input parameter>`**) writing configuration command and (**`AT+XXX`**) run command will just reply to the status return code.

2. **`<CR><LF><STATUS><CR><LF>`** is the second part of the reply which is the status return code.

The possible status codes are:

| **STATUS RETURN CODE** |               **Description**                |
| :--------------------: | :------------------------------------------: |
|          `OK`          |  Command executed correctly without error.   |
|     `+CME ERROR:1`     |   Generic error or input is not supported.   |
|     `+CME ERROR:2`     |             Command not allowed.             |
|     `+CME ERROR:5`     | The input parameter of the command is wrong. |
|     `+CME ERROR:6`     |          The parameter is too long.          |
|     `+CME ERROR:8`     |             Value out of range.              |

More details on each command description and examples are given in the remainder of this section.

:::tip 📝 NOTE

After changing LoRaWAN parameters, the device must be reset by either the `ATZ` command or pushing the reset button.

The Serial port connection is lost after the `ATZ` command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again.

:::

## AT?

Description: Help

Returns a list of all available commands with a short description

| Command | Input Parameter |    Return Value    | Return Code |
| :-----: | :-------------: | :----------------: | :---------: |
|  `AT?`  |        -        | *List of commands* |    `OK`     |


```
AT?
AT?

+++++++++++++++
AT command list
+++++++++++++++
AT?     AT commands
ATR     Restore default
ATZ     ATZ Trig a MCU reset
AT+APPEUI       Get or set the application EUI
AT+APPKEY   Get or set the application key
AT+DEVEUI   Get or set the device EUI
AT+APPSKEY  Get or set the application session key
AT+NWKSKEY  Get or Set the network session key
AT+DEVADDR  Get or set the device address
AT+CFM  Get or set the confirm mode
AT+JOIN Join network
AT+NJS  Get the join status
AT+NJM  Get or set the network join mode
AT+SENDFREQ Get or Set the automatic send time
AT+SEND Send data
AT+ADR  Get or set the adaptive data rate setting
AT+CLASS    Get or set the device class
AT+DR   Get or Set the Tx DataRate=[0..7]
AT+TXP  Get or set the transmit power
AT+BAND Get and Set number corresponding to active regions
AT+MASK Get and Set channels mask
AT+BAT  Get battery level
AT+RSSI Last RX packet RSSI
AT+SNR  Last RX packet SNR
AT+VER  Get SW version
AT+STATUS   Show LoRaWAN status
+++++++++++++++

OK

```
[Back](#content)

----

## ATR

This command is used to restore all parameters to the initial default values of the module.

| Command | Input Parameter | Return Value | Return Code |
| :-----: | :-------------: | :----------: | :---------: |
| `ATR?`  |        -        |      -       |    `OK`     |
|  `ATR`  |        -        |      -       |    `OK`     |

[Back](#content)

----

## ATZ

Description: MCU reset

This command is used to trigger an MCU reset.

| Command | Input Parameter |       Return Value       | Return Code |
| :-----: | :-------------: | :----------------------: | :---------: |
| `ATZ?`  |        -        | `ATZ: Trig a MCU reset`  |    `OK`     |
|  `ATZ`  |        -        | *No return. MCU resets.* |    `OK`     |

[Back](#content)

----

## AT+APPEUI

Description: Application unique identifier

This command is used to access and configure the APPEUI.

|            Command            | Input Parameter |            Return Value             |       Return Code        |
| :---------------------------: | :-------------: | :---------------------------------: | :----------------------: |
|         `AT+APPEUI? `         |        -        | `AT+APPEUI`: Get or set the App Eui |           `OK`           |
|         `AT+APPEUI=?`         |        -        |             *< 8 hex >*             |           `OK`           |
| `AT+APPEUI=<Input Parameter>` |   *< 8 hex >*   |                  -                  | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPEUI?

+APPEUI: Get or set the application EUI
OK

AT+APPEUI=?

AT+APPEUI:70b3d57ed00201e1
OK

AT+APPEUI=70b3d57ed00201e1

OK

AT+APPEUI=70b3d57ed00201eh

+CME ERROR:5
```

[Back](#content)

----

## AT+APPKEY

Description: Application key

This command is used to access and configure the APPKEY.

|            Command            | Input Parameter |                Return Value                 |       Return Code        |
| :---------------------------: | :-------------: | :-----------------------------------------: | :----------------------: |
|         `AT+APPKEY?`          |        -        | `AT+APPKEY`: Get or set the Application Key |           `OK`           |
|         `AT+APPKEY=?`         |        -        |                *< 16 hex >*                 |           `OK`           |
| `AT+APPKEY=<Input Parameter>` |  *< 16 hex >*   |                      -                      | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPKEY?

AT+APPKEY: Get or set the application key
OK

AT+APPKEY=?

AT+APPKEY:2b84e0b09b68e5cb42176fe753dcee79
OK

AT+APPKEY=2b84e0b09b68e5cb42176fe753dcee79

OK

AT+APPKEY=2b84e0b09b68e5cb42176fe753dcee7x

+CME ERROR:5
```

[Back](#content)

----

## AT+DEVEUI

Description: Device EUI or DEVEUI

This command is used to access and configure the device EUI or DEVEUI.

|            Command            | Input Parameter |              Return Value              |       Return Code        |
| :---------------------------: | :-------------: | :------------------------------------: | :----------------------: |
|         `AT+DEVEUI?`          |        -        | `AT+DEVEUI`: Get or set the Device EUI |           `OK`           |
|         `AT+DEVEUI=?`         |        -        |              *< 8 hex >*               |           `OK`           |
| `AT+DEVEUI=<Input Parameter>` |   *< 8 hex >*   |                   -                    | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+DEVEUI?

+DEVEUI: Get or set the device EUI
OK

AT+DEVEUI=?

+DEVEUI:ac1f09fffe03efdc
OK

AT+DEVEUI=ac1f09fffe03efdc

OK

AT+DEVEUI=ac1f09fffe03efdx

+CME ERROR:5
```

[Back](#content)

----

## AT+APPSKEY

Description: Application session key

This command is used to access and configure the application session key or APPSKEY.

|            Command             | Input Parameter |                     Return Value                     |       Return Code        |
| :----------------------------: | :-------------: | :--------------------------------------------------: | :----------------------: |
|         `AT+APPSKEY?`          |        -        | `AT+APPSKEY`: Get or set the Application Session Key |           `OK`           |
|         `AT+APPSKEY=?`         |        -        |                     *< 16 hex >*                     |           `OK`           |
| `AT+APPSKEY=<Input Parameter>` |  *< 16 hex >*   |                          -                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPSKEY?

AT+APPSKEY: Get or set the application session key
OK

AT+APPSKEY=?

AT+APPSKEY:3f6a66459d5edca63cbc4619cd61a11e
OK

AT+APPSKEY=3f6a66459d5edca63cbc4619cd61a11e

OK

AT+APPSKEY=3f6a66459d5edca63cbc4619cd61a11x

+CME ERROR:5
```

[Back](#content)

----

## AT+NWKSKEY

Description: Network session keys

This command is used to access and configure the network session keys or NWKSKEY.

|            Command             | Input Parameter |                   Return Value                   |       Return Code        |
| :----------------------------: | :-------------: | :----------------------------------------------: | :----------------------: |
|         `AT+NWKSKEY?`          |        -        | `AT+NWKSKEY`: Get or set the Network Session Key |           `OK`           |
|         `AT+NWKSKEY=?`         |        -        |                   *< 16 hex >*                   |           `OK`           |
| `AT+NWKSKEY=<Input Parameter>` |  *< 16 hex >*   |                        -                         | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+NWKSKEY?

AT+NWKSKEY: Get or Set the network session key
OK

AT+NWKSKEY=?

AT+NWKSKEY:323d155a000df335307a16da0c9df53f
OK

AT+NWKSKEY=323d155a000df335307a16da0c9df53f

OK

AT+NWKSKEY=323d155a000df335307a16da0c9df53f0

+CME ERROR:5
```

[Back](#content)

----

## AT+DEVADDR

Description: Device address or DEVADDR

This command is used to access and configure the device address or DEVADDR.

|            Command             | Input Parameter |                Return Value                 |       Return Code        |
| :----------------------------: | :-------------: | :-----------------------------------------: | :----------------------: |
|         `AT+DEVADDR?`          |        -        | `AT+DEVADDR`: Get or set the device address |           `OK`           |
|         `AT+DEVADDR=?`         |        -        |                 *< 4 hex >*                 |           `OK`           |
| `AT+DEVADDR=<Input Parameter>` |   *< 4 hex >*   |                      -                      | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+DEVADDR?

AT+DEVADDR: Get or set the device address
OK

AT+DEVADDR=?

AT+DEVADDR:26021FB0

OK

AT+DEVADDR=26021FB0

OK

AT+DEVADDR=26021FBX

+CME ERROR:5
```

[Back](#content)

----

## AT+CFM

Description: Confirmed payload mode

This command is used to access and configure the type of payload of the device.

|          Command           | Input Parameter |               Return Value               |       Return Code        |
| :------------------------: | :-------------: | :--------------------------------------: | :----------------------: |
|         `AT+CFM?`          |        -        |  `AT+CFM`: Get or set the confirm mode   |           `OK`           |
|         `AT+CFM=?`         |        -        | **0** (Unconfirmed) or **1** (Confirmed) |           `OK`           |
| `AT+CFM=<Input Parameter>` | **0** or **1**  |                    -                     | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+CFM?

AT+CFM: Get or set the confirm mode
OK

AT+CFM=?

AT+CFM:0
OK

AT+CFM=0

OK

AT+CFM=3

+CME ERROR:5
```

[Back](#content)

----

## AT+JOIN

Description: Join the LoRaWAN network

This command is used to join a LoRaWAN network.

| Command                     | Input Parameter                                                                                   | Return Value                     | Return Code             |
| --------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| `AT+JOIN? `                 | -                                                                                                 | `AT+JOIN`: Join network          | `OK`                    |
| `AT+JOIN=? `                | -                                                                                                 | *Param1, Param2, Param3, Param4* | `OK` or `AT_BUSY_ERROR` |
| `AT+JOIN=<Input Parameter>` | *Param1:Param2:Param3:Param4*                                                                     | -                                | `OK`                    |
|                             | *Param1* = **Join command**: 1 for joining the network, 0 for stop joining                        |                                  |                         |
|                             | *Param2* = **Auto-Join config**: 1 for Auto-join on power up), 0 for no auto-join. (0 is default) |                                  |                         |
|                             | *Param3* = **Reattempt interval**: 7 - 255 seconds (30 is default)                                |                                  |                         |
|                             | *Param4* = **No. of join attempts**: 0 - 255 (0 is default)                                       |                                  |                         |

::: tip 📝 NOTE
- This is an asynchronous command. `OK` means that the device is joining. The completion of the JOIN can be verified with `AT+NJS=?` command.
- Param3 is not supported yet and is fixed to 30 seconds always.
:::

**Examples**:

```
AT+JOIN?

AT+JOIN: Join network
OK

AT+JOIN=?

AT+JOIN=0:1:8:10
OK

AT+JOIN=1:1:8:10

OK

AT+JOIN=SUCCESS

AT+JOIN=3:1:8:10

+CME ERROR:5
```

[Back](#content)

----

## AT+NJS

Description: Network join status

This command is used to check the status of the devices if it is connected to a LoRaWAN network.

|  Command   | Input Parameter |             Return Value             | Return Code |
| :--------: | :-------------: | :----------------------------------: | :---------: |
| `AT+NJS?`  |        -        |    `AT+NJS`: Get the join status     |    `OK`     |
| `AT+NJS=?` |        -        | **0** (not joined) or **1** (joined) |    `OK`     |

**Examples**:

```
AT+NJS?

AT+NJS: Get the join status
OK

AT+NJS=?

AT+NJS:1
OK
```

[Back](#content)

----

## AT+NJM

Description: LoRaWAN network join mode

This command is used to access and configure the activation method of the device either OTAA or ABP. A value of 1 means OTAA join mode, a value of 0 means ABP join mode

|          Command           | Input Parameter |                Return Value                |       Return Code        |
| :------------------------: | :-------------: | :----------------------------------------: | :----------------------: |
|         `AT+NJM? `         |        -        | `AT+NJM`: Get or set the network join mode |           `OK`           |
|         `AT+NJM=?`         |        -        |               **0** or **1**               |           `OK`           |
| `AT+NJM=<Input Parameter>` | **0** or **1**  |                     -                      | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+NJM?

AT+NJM: Get or set the network join mode
OK

AT+NJM=?

AT+NJM:0
OK

AT+NJM=0

OK

AT+NJM=2

+CME ERROR:5
```

[Back](#content)

----

## AT+SENDFREQ

Description: Set the automatic transmission period

This command is used to set the period in seconds between automatic packet transmissions. If set to 0, automatic packet transmission is disabled.

|             Command             |    Input Parameter    |                   Return Value                    |       Return Code        |
| :-----------------------------: | :-------------------: | :-----------------------------------------------: | :----------------------: |
|         `AT+SENDFREQ?`          |           -           | `AT+SENDFREQ`: Get or set the automatic send time |           `OK`           |
|         `AT+SENDFREQ=?`         |           -           |               `<period in seconds>`               |           `OK`           |
| `AT+SENDFREQ=<Input Parameter>` | `<period in seconds>` |                         -                         | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+SENDFREQ?

AT+SENDFREQ: Get or Set the automatic send time
OK

AT+SENDFREQ=?

AT+SENDFREQ:60
OK

AT+SENDFREQ=60

OK
```

[Back](#content)

----

## AT+SEND

Description: Send payload data

This command is used to send the LoRaWAN payload to a specific port.
| Command                     | Input Parameter | Return Value         | Return Code                                                        |
| --------------------------- | --------------- | -------------------- | ------------------------------------------------------------------ |
| `AT+SEND?`                  | -               | `AT+SEND`: Send data | `OK`                                                               |
| `AT+SEND=<Input Parameter>` | `port:payload`  | -                    | `OK`, `AT_NO_NETWORK_JOINED`, `AT_PARAM_ERROR`, or `AT_BUSY_ERROR` |

**Examples**:
```
AT+SEND?

AT+SEND: Send data
OK
```

Unconfirmed Payload
```
AT+SEND=2:1234

OK

AT+SEND=SUCCESS
```

Confirm Payload
```
AT+SEND=2:1234

OK

AT+SEND=SUCCESS
```
Downlink packet received

:::tip 📝 NOTE

- If there is a pending downlink message from the LNS (LoRaWAN Network Server), the downlink payload will be received after the `AT+SEND` command with the format `<fport>:<data length>:<rssi>:<snr>:<data>`.

- In this example, the format has the corresponding values:
  - **fport**: 2
  - **data length**: 6
  - **rssi**: -46&nbsp;dBm
  - **snr**: 11&nbsp;dB
  - **data payload**: 48656C6C6F0A

:::

```
AT+SEND=5:10AAFF45

OK

AT+SEND=SUCCESS
RX:2:6:-46:11:48656C6C6F0A
OK
```

[Back](#content)

----

## AT+ADR

Description: Adaptive data rate

This command is used to access and configure the adaptive data rate of the module.

|          Command           | Input Parameter |                    Return Value                     |       Return Code        |
| :------------------------: | :-------------: | :-------------------------------------------------: | :----------------------: |
|         `AT+ADR?`          |        -        | `AT+ADR`: Get or set the Adaptive Data Rate setting |           `OK`           |
|         `AT+ADR=?`         |        -        |          **0** (ADR off) or **1** (ARD on)          |           `OK`           |
| `AT+ADR=<Input Parameter>` | **0** or **1**  |                          -                          | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+ADR?

+ADR: Get or set the adaptive data rate setting
OK

AT+ADR=?

AT+ADR:0
OK

AT+ADR=0

OK

AT+ADR=3

+CME ERROR:5
```

[Back](#content)

----

## AT+CLASS

Description: LoRaWAN class

This command is used to access and configure the LoRaWAN class of the module.

|           Command            | Input Parameter |                   Return Value                    |       Return Code        |
| :--------------------------: | :-------------: | :-----------------------------------------------: | :----------------------: |
|         `AT+CLASS?`          |        -        | `AT+CLASS`: Get or set the Device Class (A, B, C) |           `OK`           |
|         `AT+CLASS=?`         |        -        |         **A** or **C** (B not supported)          |           `OK`           |
| `AT+CLASS=<Input Parameter>` | **A** or **C**  |                         -                         | `OK` or `AT_PARAM_ERROR` |

_**This FW of the device supports the LoRaWAN V1.0.2 stack**_.

**Examples**:

```
AT+CLASS?

+CLASS: Get or set the device class
OK

AT+CLASS=?

AT++CLASS:A
OK

AT+CLASS=A

OK

AT+CLASS=F

+CME ERROR:5
```

[Back](#content)

----

## AT+DR

Description: Data rate settings

This command is used to access and configure data rate settings.

|          Command          |         Input Parameter         |                    Return Value                     |       Return Code        |
| :-----------------------: | :-----------------------------: | :-------------------------------------------------: | :----------------------: |
|         `AT+DR?`          |                -                | `AT+DR=<DataRate><CR>`: Get or set the Tx Data Rate |           `OK`           |
|         `AT+DR=?`         |                -                |           `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`           |           `OK`           |
| `AT+DR=<Input Parameter>` | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` |                          -                          | `OK` or `AT_PARAM_ERROR` |

Check [Appendix I](#appendix-i-data-rate-by-region) for the input parameter depending on the frequency band selected.

**Examples**:

```
AT+DR?

AT+DR: Get or Set the Tx DataRate=[0..7]
OK

AT+DR=?

AT+DR:3
OK

AT+DR=3

OK
```

[Back](#content)

----

## AT+TXP

Description: Transmit Power

This command is used to access and configure the transmit power.

|          Command           | Input Parameter |              Return Value               |       Return Code        |
| :------------------------: | :-------------: | :-------------------------------------: | :----------------------: |
|         `AT+TXP?`          |        -        | `AT+TXP`: Get or set the transmit power |           `OK`           |
|         `AT+TXP=?`         |        -        |               *< value >*               | `OK` or `AT+PARAM_ERROR` |
| `AT+TXP=<Input Parameter>` |   *< value >*   |                    -                    | `OK` or `AT_PARAM_ERROR` |

Check [Appendix II](#appendix-ii-tx-power-by-region) for the input parameter depending on the frequency band selected.

For example, at EU868, a value of 2 represents **MaxEIRP - 4&nbsp;dB** where MaxEIRP = +16&nbsp;dBm.

**Examples**:

```
AT+TXP?

AT+TXP: Get or set the transmit power
OK

AT+TXP=?

AT+TXP:0
OK

AT+TXP=0

OK
```

[Back](#content)

----

## AT+BAND

Description: Regional frequency band

This command is used to access and configure the regional frequency band.

|           Command           | Input Parameter |                            Return Value                            |       Return Code        |
| :-------------------------: | :-------------: | :----------------------------------------------------------------: | :----------------------: |
|         `AT+BAND?`          |        -        |   `AT+BAND`: Get and Set number corresponding to active regions    |           `OK`           |
|         `AT+BAND=?`         |        -        | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |           `OK`           |
| `AT+BAND=<Input Parameter>` |  *< 0 to 12 >*  |                                 -                                  | `OK` or `AT_PARAM_ERROR` |

**List of Band Parameter Options**

| Code  | Regional Band |       | Code  | Regional Band |
| :---: | :-----------: | :---: | :---: | :-----------: |
|   0   |    AS923-1    |       |   7   |     IN865     |
|   1   |     AU915     |       |   8   |     US915     |
|   2   |     CN470     |       |   9   |    AS923-2    |
|   3   |     CN779     |       |  10   |    AS923-3    |
|   4   |     EU433     |       |  11   |    AS923-4    |
|   5   |     EU868     |       |  12   |     RU864     |
|   6   |     KR920     |       |       |               |

**Examples**:

```
AT+BAND?

AT+BAND: Get and Set number corresponding to active regions
OK

AT+BAND=?

AT+BAND:10
OK

AT+BAND=10

OK

AT+BAND=22

+CME ERROR:8
```

[Back](#content)

----

## AT+MASK

Description: Regional channel mask

This command is used to access and configure the regional channel mask.
Channel mask can only be set for the following regions: AU915, CN470, and US915

|           Command           | Input Parameter |                         Return Value                          |       Return Code        |
| :-------------------------: | :-------------: | :-----------------------------------------------------------: | :----------------------: |
|         `AT+MASK?`          |        -        |             `AT+MASK: Get and Set channels mask`              |           `OK`           |
|         `AT+MASK=?`         |        -        | `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12` |           `OK`           |
| `AT+MASK=<Input Parameter>` |  *< 0 to 12 >*  |                               -                               | `OK` or `AT_PARAM_ERROR` |

**List of mask channels per region**

| **Mask (Sub-Band)** | **US915** | **AU915** | **CN470** |
| :-----------------: | :-------: | :-------: | :-------: |
|          1          |    0-7    |    0-7    |    0-7    |
|          2          |   8-15    |   8-15    |   8-15    |
|          3          |   16-23   |   16-23   |   16-23   |
|          4          |   24-31   |   24-31   |   24-31   |
|          5          |   32-39   |   32-39   |   32-39   |
|          6          |   40-47   |   40-47   |   40-47   |
|          7          |   48-55   |   48-55   |   48-55   |
|          8          |   56-63   |   56-63   |   56-63   |
|          9          |     -     |     -     |   64-71   |
|         10          |     -     |     -     |   72-79   |
|         11          |     -     |     -     |   80-87   |
|         12          |     -     |     -     |   88-95   |

**Examples**:

```
AT+MASK?

AT+MASK: Get and Set channels mask
OK

AT+MASK=?

AT+MASK:10
OK

AT+MASK=10

OK

AT+MASK=13

+CME ERROR:8
```

[Back](#content)

----

## AT+BAT

Description: Read the battery voltage

This command is used to read the battery voltage of the device

|  Command   | Input Parameter |        Return Value         |       Return Code        |
| :--------: | :-------------: | :-------------------------: | :----------------------: |
| `AT+BAT?`  |        -        | `AT+BAT`: Get battery level |           `OK`           |
| `AT+BAT=?` |        -        |         *< value >*         | `OK` or `AT+PARAM_ERROR` |

:::tip 📝 NOTE

_**The battery level is returned as a value between 0 and 255**_.

:::

**Examples**:

```
AT+BAT?

+BAT:"Get battery level"
OK

AT+BAT=?

+BAT:254
OK
```

[Back](#content)

----

## AT+RSSI

Description: Receive signal strength indicator

This command is used to get the RSSI value of the last packet received.

|   Command   | Input Parameter |                    Return Value                     | Return Code |
| :---------: | :-------------: | :-------------------------------------------------: | :---------: |
| `AT+RSSI?`  |        -        | `AT+RSSI`: Get the RSSI of the last received packet |    `OK`     |
| `AT+RSSI=?` |        -        |                *< integer > in dBm*                 |    `OK`     |

:::tip 📝 NOTE

The reply will be **'0'** if there is no last packet received yet.

:::

**Examples**:

```
AT+RSSI?

AT+RSSI: Last RX packet RSSI
OK

AT+RSSI=?

AT+RSSI:-41
OK
```

[Back](#content)

----

## AT+SNR

Description: Signal to Noise Ratio

This command is used to get the SNR value of the last packet received.

|  Command   | Input Parameter |                   Return Value                    | Return Code |
| :--------: | :-------------: | :-----------------------------------------------: | :---------: |
| `AT+SNR?`  |        -        | `AT+SNR`: Get the SNR of the last received packet |    `OK`     |
| `AT+SNR=?` |        -        |                *< integer >* in dB                |    `OK`     |

:::tip 📝 NOTE

The reply will be **'0'** if there is no last packet received yet.

:::

**Examples**:

```
AT+SNR?

AT+SNR: Last RX packet SNR
OK

AT+SNR=?

AT+SNR:11
OK
```

[Back](#content)

----

## AT+VER

Description: Version of the firmware

This command is used to get the firmware version installed on the device.

|  Command   | Input Parameter |               Return Value                | Return Code |
| :--------: | :-------------: | :---------------------------------------: | :---------: |
| `AT+VER?`  |        -        | `AT+VER`: Get the version of the firmware |    `OK`     |
| `AT+VER=?` |        -        |                *< V.x.y >*                |    `OK`     |

**Examples**:

```
AT+VER?

AT+VER: Get SW version
OK

AT+VER=?

AT+VER:1.0.0.0 May 27 2021 17:11:12
OK
```

[Back](#content)

----

## AT+STATUS

Description: Show device status

This command is used to get the current device status.

|    Command    | Input Parameter |           Return Value           | Return Code |
| :-----------: | :-------------: | :------------------------------: | :---------: |
| `AT+STATUS?`  |        -        | `AT+STATUS`: Show LoRaWAN status |    `OK`     |
| `AT+STATUS=?` |        -        |           *< status >*           |    `OK`     |

**Examples**:

```
AT+STATUS?

AT+STATUS: Show LoRaWAN status
OK

AT+STATUS=?
LoRaWAN status:
   Auto join disabled
   OTAA enabled
   Dev EUI 5032333338350012
   App EUI 1200353833333250
   App Key 50323333383500121200353833333250
   NWS Key 50323333383500121200353833333250
   Apps Key 50323333383500121200353833333250
   Dev Addr 83986D12
   Repeat time 120000
   ADR disabled
   Public Network
   Dutycycle disabled
   Join trials 10
   TX Power 0
   DR 3
   Class 0
   Subband 1
   Fport 2
   Unconfirmed Message
   Region 10
   Network joined
   Mode User

+STATUS:
OK
```

[Back](#content)

----

## Appendix

### Appendix I Data Rate by Region

<b> EU433/EU868/RU864/AS923 </b>

| Data Rate |       Configuration       | Indicative Physical Bit Rate [bit/s] |
| :-------: | :-----------------------: | :----------------------------------: |
|     0     | LoRa: SF12 / 125&nbsp;kHz |                 250                  |
|     1     | LoRa: SF11 / 125&nbsp;kHz |                 440                  |
|     2     | LoRa: SF10 / 125&nbsp;kHz |                 980                  |
|     3     | LoRa: SF9 / 125&nbsp;kHz  |                 1760                 |
|     4     | LoRa: SF8 / 125&nbsp;kHz  |                 3125                 |
|     5     | LoRa: SF7 / 125&nbsp;kHz  |                 5470                 |
|     6     | LoRa: SF7 / 250&nbsp;kHz  |                11000                 |
|     7     |     FSK: 50&nbsp;kbps     |                50000                 |
|  8 ~ 15   |            RFU            |                                      |

<br>

<b> CN470/KR920 </b>

| Data Rate |       Configuration       | Indicative Physical Bit Rate [bit/s] |
| :-------: | :-----------------------: | :----------------------------------: |
|     0     | LoRa: SF12 / 125&nbsp;kHz |                 250                  |
|     1     | LoRa: SF11 / 125&nbsp;kHz |                 440                  |
|     2     | LoRa: SF10 / 125&nbsp;kHz |                 980                  |
|     3     | LoRa: SF9 / 125&nbsp;kHz  |                 1760                 |
|     4     | LoRa: SF8 / 125&nbsp;kHz  |                 3125                 |
|     5     | LoRa: SF7 / 125&nbsp;kHz  |                 5470                 |
|  6 ~ 15   |            RFU            |                                      |

<br>

<b> US915 </b>

| Data Rate |       Configuration       | Indicative Physical Bit Rate [bit/s] |
| :-------: | :-----------------------: | :----------------------------------: |
|     0     | LoRa: SF10 / 125&nbsp;kHz |                 980                  |
|     1     | LoRa: SF9 / 125&nbsp;kHz  |                 1760                 |
|     2     | LoRa: SF8 / 125&nbsp;kHz  |                 3125                 |
|     3     | LoRa: SF7 / 125&nbsp;kHz  |                 5470                 |
|     4     | LoRa: SF8 / 500&nbsp;kHz  |                12500                 |
|   5 ~ 7   |            RFU            |                                      |
|     8     | LoRa: SF12 / 500&nbsp;kHz |                 980                  |
|     9     | LoRa: SF11 / 500&nbsp;kHz |                 1760                 |
|    10     | LoRa: SF10 / 500&nbsp;kHz |                 3900                 |
|    11     | LoRa: SF9 / 500&nbsp;kHz  |                 7000                 |
|    12     | LoRa: SF8 / 500&nbsp;kHz  |                12500                 |
|    13     | LoRa: SF7 / 500&nbsp;kHz  |                21900                 |
|  14 ~ 15  |            RFU            |                                      |

<br>

<b> AU915 </b>

| Data Rate |       Configuration       | Indicative Physical Bit Rate [bit/s] |
| :-------: | :-----------------------: | :----------------------------------: |
|     0     | LoRa: SF12 / 125&nbsp;kHz |                 250                  |
|     1     | LoRa: SF11 / 125&nbsp;kHz |                 440                  |
|     2     | LoRa: SF10 / 125&nbsp;kHz |                 980                  |
|     3     | LoRa: SF9 / 125&nbsp;kHz  |                 1760                 |
|     4     | LoRa: SF8 / 125&nbsp;kHz  |                 3125                 |
|     5     | LoRa: SF7 / 125&nbsp;kHz  |                 5470                 |
|     6     | LoRa: SF8 / 500&nbsp;kHz  |                12500                 |
|     7     |            RFU            |                 RFU                  |
|     8     | LoRa: SF12 / 500&nbsp;kHz |                 980                  |
|     9     | LoRa: SF11 / 500&nbsp;kHz |                 1760                 |
|    10     | LoRa: SF10 / 500&nbsp;kHz |                 3900                 |
|    11     | LoRa: SF9 / 500&nbsp;kHz  |                 7000                 |
|    12     | LoRa: SF8 / 500&nbsp;kHz  |                12500                 |

<br>

<b> IN865 </b>

| Data Rate |       Configuration       | Indicative Physical Bit Rate [bit/s] |
| :-------: | :-----------------------: | :----------------------------------: |
|     0     | LoRa: SF12 / 125&nbsp;kHz |                 250                  |
|     1     | LoRa: SF11 / 125&nbsp;kHz |                 440                  |
|     2     | LoRa: SF10 / 125&nbsp;kHz |                 980                  |
|     3     | LoRa: SF9 / 125&nbsp;kHz  |                 1760                 |
|     4     | LoRa: SF8 / 125&nbsp;kHz  |                 3125                 |
|     5     | LoRa: SF7 / 125&nbsp;kHz  |                 5470                 |
|     6     |            RFU            |                 RFU                  |
|     7     |     FSK: 50&nbsp;kbps     |                50000                 |
|  8 ~ 15   |            RFU            |                 RFU                  |

[Back](#content)

----

### Appendix II TX Power by Region

<b> EU868 </b>

By default, MaxEIRP is considered to be +16&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  |         RFU          |

<br>


<b> US915 </b>

| TXPower | Configuration (Conducted Power) |
| :-----: | :-----------------------------: |
|    0    |     30&nbsp;dBm - 2*TXpower     |
|    1    |           28&nbsp;dBm           |
|    2    |           26&nbsp;dBm           |
|  3 ~ 9  |                -                |
|   10    |           10&nbsp;dBm           |
| 11 ~ 15 |               RFU               |

<br>

<b> AU915 </b>

By default, MaxEIRP is considered to be +30&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
| 1 ~ 10  | MaxEIRP - 2*TXPower  |
| 11 ~ 10 |         RFU          |

<br>


<b> KR920 </b>

By default, MaxEIRP is considered to be +14&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  |         RFU          |

<br>


<b> AS923 </b>

By default, Max EIRP is considered to be 16&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  |         RFU          |


<br>


<b> IN865 </b>

By default, MaxEIRP is considered to be 30&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
|    8    | MaxEIRP - 16&nbsp;dB |
|    9    | MaxEIRP - 18&nbsp;dB |
|   10    | MaxEIRP - 20&nbsp;dB |
| 11 ~ 15 |         RFU          |

<br>

<b> RU864 </b>

By default, MaxEIRP is considered to be +16&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  |         RFU          |

<br>

<b> CN470 </b>

By default, MaxEIRP is considered to be +19.15&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    |  MaxEIRP 2&nbsp;dB   |
|    2    |  MaxEIRP 4&nbsp;dB   |
|    3    |  MaxEIRP 6&nbsp;dB   |
|    4    |  MaxEIRP 8&nbsp;dB   |
|    5    | MaxEIRP - 10&nbsp;dB |
|    6    | MaxEIRP - 12&nbsp;dB |
|    7    | MaxEIRP - 14&nbsp;dB |
| 8 ~ 15  |         RFU          |

<br>

<b> EU433 </b>

By default, MAxEIRP is considered to be +12.15&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| :-----: | :------------------: |
|    0    |       MaxEIRP        |
|    1    | MaxEIRP - 2&nbsp;dB  |
|    2    | MaxEIRP - 4&nbsp;dB  |
|    3    | MaxEIRP - 6&nbsp;dB  |
|    4    | MaxEIRP - 8&nbsp;dB  |
|    5    | MaxEIRP - 10&nbsp;dB |
| 6 ~ 15  |         RFU          |

[Back](#content)

----

### Appendix III Maximum Transmission Load by Region

:::tip 📝 NOTE
M in the following list is the length with MAC header, N is the maximum usable payload size for the user data without MAC header.
:::

<b> EU868 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|     6     |     250     |     242     |
|     7     |     250     |     242     |
|  8 ~ 15   | Not Defined | Not Defined |

<br>

<b> US915 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     19      |     11      |
|     1     |     61      |     53      |
|     2     |     133     |     125     |
|     3     |     250     |     242     |
|     4     |     250     |     242     |
|   5 ~ 7   | Not Defined | Not Defined |
|     8     |     61      |     53      |
|     9     |     137     |     129     |
|    10     |     250     |     242     |
|    11     |     250     |     242     |
|    12     |     250     |     242     |
|    13     |     250     |     242     |
|  14 ~ 15  | Not Defined | Not Defined |

<br>

<b> AU915 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|     6     |     250     |     242     |
|     7     | Not Defined | Not Defined |
|     8     |     61      |     53      |
|     9     |     137     |     129     |
|    10     |     250     |     242     |
|    11     |     250     |     242     |
|    12     |     250     |     242     |
|    13     |     250     |     242     |
|  14 ~ 15  | Not Defined | Not Defined |

<br>

<b> KR920 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|  6 ~ 15   | Not Defined | Not Defined |

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

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|     6     |     250     |     242     |
|     7     |     250     |     242     |
|  8 ~ 15   | Not Defined | Not Defined |

<br>

<b> RU864 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     230     |     222     |
|     5     |     230     |     222     |
|     6     |     230     |     222     |
|     7     |     230     |     222     |
|  8 ~ 15   | Not Defined | Not Defined |

<br>

<b> CN470 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|  6 ~ 15   | Not Defined | Not Defined |

<br>

<b> EU433 </b>

| Data Rate |      M      |      N      |
| :-------: | :---------: | :---------: |
|     0     |     59      |     51      |
|     1     |     59      |     51      |
|     2     |     59      |     51      |
|     3     |     123     |     115     |
|     4     |     250     |     242     |
|     5     |     250     |     242     |
|     6     |     250     |     242     |
|     7     |     250     |     242     |
|  8 ~ 15   | Not Defined | Not Defined |

[Back](#content)

