---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3172 Evaluation Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3172 Evaluation Board
rak_img: /assets/images/wisduo/rak3172-evaluation-board/overview/RAK3172E_Evaluation_home.png

---

# AT Command Manual

## Introduction

The RAK3172 Evaluation WisDuo Board is based on the STM32WLE5CCU6 chip and it is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, we implemented an easy-to-use USB interface, through which you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication.

The RAK3172 Evaluation Board consists of two modules:    
- RAK3372 WisBlock Core module    
   The RAK3372 is a module built with the [RAK3172 WisDuo Stamp module](/Product-Categories/WisDuo/RAK3172-Module/Overview) on a WisBlock Core-compatible PCB.
- RAK5005-O Base Board    
   The RAK5005-O is a WisBlock Base Board that provides power supply, battery connector, solar panel charging connector, one IO-Slot and 4 small extension slots to use WisBlock modules with the evaluation board. You can find detailed information in the [RAK5005-O Documentation](/Product-Categories/WisBlock/RAK5005-O/Overview).

The USB serial communication is exposed on the USB connector or the RAK5005-O base board. The default parameters of the UART2 communication are **9600 / 8-N-1**. Firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3172-E Module Datasheet](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Datasheet).

## Links to Quick Start Guide

For AT commands example usage, you can check these sections of the quick start guide:

- [TTN OTAA Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK3172-E OTAA activation.
- [TTN ABP Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK3172-E ABP activation. 
- [Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK3172-E OTAA activation.
- [Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK3172-E ABP activation.
- [LoRa P2P](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Quickstart/#lora-p2p-mode) - Point to point communication between two RAK3172-E modules.

## AT Command Syntax

The AT commands use ASCII characters. In general, an AT command starts with the prefix `AT` and ends with `<CR><LF>` (i.e. `\r\n`). For the rest of this document, the `\r\n` part is omitted for the sake of clarity.

The AT commands have the standard format “`AT+XXX`”, with XXX denoting the command.

There are four available command formats:

| **AT COMMAND FORMAT**      | **Description**                                   |
| -------------------------- | ------------------------------------------------- |
| `AT+XXX?`                  | Provides a short description of the given command |
| `AT+XXX=?`                 | Reading the current value on the command          |
| `AT+XXX=<input parameter>` | Writing configuration on the command              |
| `AT+XXX`                   | Used to run a command                             |

The output of the commands is returned via UART.

The format of the reply is divided into two parts: returned value and the status return code.

:::tip 📝 NOTE:

`<CR>` stands for “carriage return” and `<LF>` stands for “line feed”.

:::


1. **`<value><CR><LF>`** is the first reply when (**`AT+XXX?`**) command description or (**`AT+XXX=?`**) reading value is executed. It will be thn followed by a status return code. When there is no return value, like for the (**`AT+XXX=<input parameter>`**) writing configuration command and (**`AT+XXX`**) run command, the status return code only will be returned.

2. **`<CR><LF><STATUS><CR><LF>`** is the second part of the reply, which is the status return code.

The possible status codes are:

| **STATUS RETURN CODE**   | **Description**                                      |
| ------------------------ | ---------------------------------------------------- |
| `OK`                     | Command executed correctly without error.            |
| `AT_ERROR`               | Generic error or input is not supported.             |
| `AT_PARAM_ERROR`         | The input parameter of the command is wrong.         |
| `AT_BUSY_ERROR`          | The network is busy so the command is not completed. |
| `AT_TEST_PARAM_OVERFLOW` | The parameter is too long.                           |
| `AT_NO_NETWORK_JOINED`   | Module is not yet joined to a network.               |
| `AT_RX_ERROR`            | Error detected during the reception of the command.  |
| `AT_DUTYCYLE_RESTRICTED` | Duty cycle limited and cannot send data.             |

More details on each command description and examples are given in the remainder of this section. 

:::tip 📝 NOTE:

In the examples of AT commands on this document, `ATE` is active therefore each AT command is printed before the return values and status return code.

:::

## General Commands

This section describes the generic commands related to “attention” help list, link control and CPU `AT_Slave` reset.

- [AT](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at)
- [ATZ - MCU reset](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#atz)
- [ATR - Restore default parameters](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#atr)
- [ATE - Echo command](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#ate)
- [AT+SN - Device serial number](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-sn)
- [AT+BAUD - Baud rate setting](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-baud)

### AT 

Description: Attention

This command is used to check that the UART communication link is working properly and to show all available AT commands.


| Command   | Input Parameter | Return Value              | Return Code |
| --------- | --------------- | ------------------------- | ----------- |
| **`AT`**  | -               | -                         | `OK`        |
| **`AT?`** | -               | All available AT commands | `OK`        |

**Example**:

```
AT

OK
```

### ATZ 

Description: MCU reset

This command is used to trigger an MCU reset.

| Command    | Input Parameter | Return Value                       | Return Code |
| ---------- | --------------- | ---------------------------------- | ----------- |
| **`ATZ?`** | -               | `ATZ`: Triggers a reset of the MCU | `OK`        |
| **`ATZ`**  | -               | *No return. MCU resets.*           | -           |

**Example**:

```
ATZ

LoRa (R) is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN (R) is a licensed mark.

______  ___   _   __  _    _ _          _               
| ___ \/ _ \ | | / / | |  | (_)        | |              
| |_/ / /_\ \| |/ /  | |  | |_ _ __ ___| | ___  ___ ___ 
|    /|  _  ||    \  | |/\| | | '__/ _ \ |/ _ \/ __/ __|
| |\ \| | | || |\  \ \  /\  / | | |  __/ |  __/\__ \__ \
\_| \_\_| |_/\_| \_/  \/  \/|_|_|  \___|_|\___||___/___/
========================================================
RAK3172-H Version:v1.0.2 May 26 2021
Current Work Mode: LoRaWAN.
```

### ATR 

Description: Restore default parameters

This command is used to restore all parameters to the initial default values of the module.

| Command    | Input Parameter | Return Value                      | Return Code |
| ---------- | --------------- | --------------------------------- | ----------- |
| **`ATR?`** | -               | `ATR`: Restore default parameters | `OK`        |
| **`ATR`**  | -               | -                                 | `OK`        |

**Example**:
```
ATR

LoRa (R) is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN (R) is a licensed mark.

______  ___   _   __  _    _ _          _               
| ___ \/ _ \ | | / / | |  | (_)        | |              
| |_/ / /_\ \| |/ /  | |  | |_ _ __ ___| | ___  ___ ___ 
|    /|  _  ||    \  | |/\| | | '__/ _ \ |/ _ \/ __/ __|
| |\ \| | | || |\  \ \  /\  / | | |  __/ |  __/\__ \__ \
\_| \_\_| |_/\_| \_/  \/  \/|_|_|  \___|_|\___||___/___/
========================================================
RAK3172-H Version:v1.0.2 May 26 2021
Current Work Mode: LoRa P2P.
```

### ATE 

Description: Set command echo

This command is used to see the AT command input on the Serial Terminal.

| Command    | Input Parameter | Return Value            | Return Code |
| ---------- | --------------- | ----------------------- | ----------- |
| **`ATE?`** | -               | `ATE`: Set command echo | `OK`        |
| **`ATE`**  | -               | -                       | `OK`        |

**Example**:
```
ATE

OK
```

### AT+SN  

Description: Serial number

This command is used to read the device serial number.

| Command       | Input Parameter | Return Value                           | Return Code |
| ------------- | --------------- | -------------------------------------- | ----------- |
| **`AT+SN?`**  | -               | `AT+SN`: Read the device serial number | `OK`        |
| **`AT+SN=?`** | -               | `0080E11500004CF6`                     | `OK`        |

**Example**:
```
AT+SN=?
0080E11500004CF6
 
OK
```

### AT+BAUD 

Description: Baud rate setting

This command is used to configure the baud rate of the device.

| Command                         | Input Parameter           | Return Value                                                  | Return Code              |
| ------------------------------- | ------------------------- | ------------------------------------------------------------- | ------------------------ |
| **`AT+BAUD?`**                  | -                         | `AT+BAUD`: Get or set the uart baud rate (4800, 9600, 115200) | `OK`                     |
| **`AT+BAUD=?`**                 | -                         | `4800`,`9600` or `115200`                                     | `OK`                     |
| **`AT+BAUD=<Input Parameter>`** | `4800`,`9600` or `115200` | -                                                             | `OK` or `AT_PARAM_ERROR` |

:::tip 📝 NOTE:
You need to restart the module for the new baud rate to take effect. 
:::

**Example**:
```
AT+BAUD=115200

OK
AT+BAUD=?
115200

OK
AT+BAUD=100000

AT_PARAM_ERROR
```

## Keys, IDs, and EUIs management

This section describes the commands related to the activation of the end device. EUI's and Keys are **MSB first**.  

- [AT+DEVEUI - Set or get device EUI](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-deveui)
- [AT+APPEUI - Set or get application EUI](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-appeui)
- [AT+APPKEY - Set or get application key](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-appkey)
- [AT+DEVADDR - Set or get device address](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-devaddr)
- [AT+APPSKEY - Set or get application session key](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-appskey)
- [AT+NWKSKEY - Set or get network session key](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-nwkskey)

### AT+DEVEUI 

Description: Device EUI or DEVEUI

This command is used to access and configure the device EUI or DEVEUI.

| Command                           | Input Parameter | Return Value                           | Return Code              |
| --------------------------------- | --------------- | -------------------------------------- | ------------------------ |
| **`AT+DEVEUI?`**                  | -               | `AT+DEVEUI`: Get or set the device EUI | `OK`                     |
| **`AT+DEVEUI=?`**                 | -               | *< 8 hex >*                            | `OK`                     |
| **`AT+DEVEUI=<Input Parameter>`** | *< 8 hex >*     | -                                      | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+DEVEUI=1122334455667788

OK
AT+DEVEUI=?
1122334455667788

OK
AT+DEVEUI=112233445566778800

AT_PARAM_ERROR
```

### AT+APPEUI  

Description: Application unique identifier

This command is used to access and configure the APPEUI.

| Command                           | Input Parameter | Return Value                                | Return Code              |
| --------------------------------- | --------------- | ------------------------------------------- | ------------------------ |
| **`AT+APPEUI?`**                  | -               | `AT+APPEUI`: Get or set the application EUI | `OK`                     |
| **`AT+APPEUI=?`**                 | -               | *< 8 hex >*                                 | `OK`                     |
| **`AT+APPEUI=<Input Parameter>`** | *< 8 hex >*     | -                                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPEUI=0080E11500004CF6

OK
AT+APPEUI=?
0080e11500004cf6

OK
AT+APPEUI=0080E11500004CF61234

AT_PARAM_ERROR
```

### AT+APPKEY 

Description: Application key

This command is used to access and configure the APPKEY.

| Command                           | Input Parameter | Return Value                                | Return Code              |
| --------------------------------- | --------------- | ------------------------------------------- | ------------------------ |
| **`AT+APPKEY?`**                  | -               | `AT+APPKEY`: Get or set the application key | `OK`                     |
| **`AT+APPKEY=?`**                 | -               | *< 16 hex >*                                | `OK`                     |
| **`AT+APPKEY=<Input Parameter>`** | *< 16 hex >*    | -                                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPKEY=01020AFBA1CD4D20010230405A6B7F88

OK
AT+APPKEY=?
01020afba1cd4d20010230405a6b7f88

OK
AT+APPKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

### AT+DEVADDR 

Description: Device address or DEVADDR

This command is used to access and configure the device address or DEVADDR.

| Command                            | Input Parameter | Return Value                                | Return Code              |
| ---------------------------------- | --------------- | ------------------------------------------- | ------------------------ |
| **`AT+DEVADDR?`**                  | -               | `AT+DEVADDR`: Get or set the device address | `OK`                     |
| **`AT+DEVADDR=?`**                 | -               | *< 4 hex >*                                 | `OK`                     |
| **`AT+DEVADDR=<Input Parameter>`** | *< 4 hex >*     | -                                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+DEVADDR=01020A0B

OK
AT+DEVADDR=?
01020a0b

OK
AT+DEVADDR=01020A0BCC

AT_PARAM_ERROR
```

### AT+APPSKEY 

Description: Application session key

This command is used to access and configure the application session key or APPSKEY.

| Command                            | Input Parameter | Return Value                                         | Return Code              |
| ---------------------------------- | --------------- | ---------------------------------------------------- | ------------------------ |
| **`AT+APPSKEY?`**                  | -               | `AT+APPSKEY`: Get or set the application session key | `OK`                     |
| **`AT+APPSKEY=?`**                 | -               | *< 16 hex >*                                         | `OK`                     |
| **`AT+APPSKEY=<Input Parameter>`** | *< 16 hex >*    | -                                                    | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F88

OK
AT+APPSKEY=?
01020afba1cd4d20010230405a6b7f88

OK
AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

### AT+NWKSKEY 

Description: Network session keys

This command is used to access and configure the network session keys or NWKSKEY.

| Command                            | Input Parameter | Return Value                                     | Return Code              |
| ---------------------------------- | --------------- | ------------------------------------------------ | ------------------------ |
| **`AT+NWKSKEY?`**                  | -               | `AT+NWKSKEY`: Get or set the network session key | `OK`                     |
| **`AT+NWKSKEY=?`**                 | -               | *< 16 hex >*                                     | `OK`                     |
| **`AT+NWKSKEY=<Input Parameter>`** | *< 16 hex >*    | -                                                | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F88

OK
AT+NWKSKEY=?
01020afba1cd4d20010230405a6b7f88

OK
AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

## Joining and Sending Data to LoRaWAN® Network

This section describes the commands related to the joining process of the device to the LoRaWAN® network.

- [AT+NJM - Set or get LoRaWAN join mode (OTAA or ABP)](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-njm)
- [AT+CFM - Configure confirmed/unconfirmed payload](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-cfm)
- [AT+JOIN - Join command](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-join)
- [AT+NJS - Check join status](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-njs)
- [AT+SEND - LoRaWAN payload send](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-send)
- [AT+CFS - Status of last payload if confirmed or unconfirmed](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-cfs)
- [AT+RECV - Read last received data](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-recv)

### AT+NJM 

Description: LoRaWAN® network join mode

This command is used to access and configure the activation method of the device either OTAA or ABP.

| Command                        | Input Parameter | Return Value                                               | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------ |
| **`AT+NJM?`**                  | -               | `AT+NJM`: Get or set the network join mode (0:ABP, 1:OTAA) | `OK`                     |
| **`AT+NJM=?`**                 | -               | `0` or `1`                                                 | `OK`                     |
| **`AT+NJM=<Input Parameter>`** | `0` or `1`      | -                                                          | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+NJM=1

OK
AT+NJM=?
1

OK
AT+NJM=2

AT_PARAM_ERROR
```

### AT+CFM 

Description: Confirmed payload mode

This command is used to access and configure type of payload of the device.

| Command                        | Input Parameter | Return Value                                                     | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------------- | ------------------------ |
| **`AT+CFM?`**                  | -               | `AT+CFM`: Get or set the confirm mode (0:unconfirmed, 1:confirm) | `OK`                     |
| **`AT+CFM=?`**                 | -               | `0` *(if Unconfirmed)* or `1` *(if confirmed)*                   | `OK`                     |
| **`AT+CFM=<Input Parameter>`** | `0` or `1`      | -                                                                | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+CFM=1

OK
AT+CFM=?
1

OK
AT+CFM=2

AT_PARAM_ERROR
```

### AT+JOIN

Description: Join LoRaWAN® network

This command is used to join a LoRaWAN® network.

| Command                         | Input Parameter                                                                                   | Return Value                     | Return Code             |
| ------------------------------- | ------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------- |
| **`AT+JOIN?`**                  | -                                                                                                 | `AT+JOIN`: Join network          | `OK`                    |
| **`AT+JOIN=?`**                 | -                                                                                                 | *Param1, Param2, Param3, Param4* | `OK` or `AT_BUSY_ERROR` |
| **`AT+JOIN=<Input Parameter>`** | *Param1:Param2:Param3:Param4*                                                                     | -                                | `OK`                    |
|                                 | *Param1* = **Join command**: 1 for joining the network, 0 for stop joining                        |                                  |                         |
|                                 | *Param2* = **Auto-Join config**: 1 for Auto-join on power up), 0 for no auto-join. (0 is default) |                                  |                         |
|                                 | *Param3* = **Reattempt interval**: 7 - 255 seconds (8 is default)                                 |                                  |                         |
|                                 | *Param4* = **No. of join attempts**: 0 - 255 (0 is default)                                       |                                  |                         |

:::tip 📝 NOTE:

This is an asynchronous command. OK means that the device is joining. The completion of the JOIN can be verified with `AT+NJS=?` command.

:::

**Examples**:

Successful join attempt
```
AT+JOIN=1:0:10:8

OK
+EVT:JOINED
```

Failed join attempt
```
AT+JOIN=1:0:10:8

OK
+EVT:JOIN FAILED
```
:::tip 📝 NOTE:

If joining fails, make sure your device is within the coverage of the gateway. Also, ensure that the RAK3172 is in LoRaWAN mode via `AT+NWM=1`, region is correct via `AT+BAND`, and the EUIs and keys are correct.

:::


### AT+NJS 

Description: Network join status

This command is used to check the status of the devices if it is connected to a LoRaWAN® network.

| Command        | Input Parameter | Return Value                         | Return Code |
| -------------- | --------------- | ------------------------------------ | ----------- |
| **`AT+NJS?`**  | -               | `AT+NJS`: Get the join status        | OK          |
| **`AT+NJS=?`** | -               | `0` *(not joined)* or `1` *(joined)* | OK          |

**Examples**:
```
AT+NJS=?
1

OK
```

### AT+SEND 

Description: Send payload data

This command is used to send LoRaWAN® payload on specific port.

| Command                         | Input Parameter      | Return Value                                          | Return Code                                                       |
| ------------------------------- | -------------------- | ----------------------------------------------------- | ----------------------------------------------------------------- |
| **`AT+SEND?`**                  | -                    | `AT+SEND1`: Send data along with the application port | `OK`                                                              |  |
| **`AT+SEND=<Input Parameter>`** | **port**:**payload** | -                                                     | `OK`, `AT_NO_NETWORK_JOINED`, `AT_PARAM_ERROR` or `AT_BUSY_ERROR` |

**Examples**:

Unconfirmed Payload
```
AT+SEND=2:1234

OK
```
Confirm Payload
```
AT+SEND=2:1234

OK
+EVT:SEND CONFIRMED OK
```
With Downlink from the Network Server. Downlink info: FPort = 3, Payload = 4321.
```
AT+SEND=2:1234

OK
+EVT:RX_1, RSSI -52, SNR 9
+EVT:UNICAST
+EVT:3:4321
```


### AT+CFS 

Description: Confirm status

This command is used to access the status of the last confirmed “SEND” command

| Command        | Input Parameter | Return Value                                                      | Return Code |
| -------------- | --------------- | ----------------------------------------------------------------- | ----------- |
| **`AT+CFS?`**  | -               | `AT+CFS`: Get the confirmation status of the last `AT+SEND` (0-1) | `OK`        |
| **`AT+CFS=?`** | -               | `0` or `1`                                                        | `OK`        |

**Example**:
Last confirmed uplink packet is successful.
```
AT+CFS=?
1

OK
```
Last confirmed uplink packet failed.
```
AT+CFS=?
0

OK
```

:::tip 📝 NOTE:

`AT+CFS=?` only reflects the status of the last confirmed packet sent via the `AT+SEND` command. If the last confirmed packet is successful, it will return 1. If the last confirmed packets fails, it will return 0. This is true regardless if you send successful unconfirmed packets in between confirmed payloads. `AT+CFS=?` only tracks the last confirmed packet.

:::

### AT+RECV 

Description: Last received data

This command is used to get the last received data in hex format.

| Command         | Input Parameter | Return Value                                          | Return Code |
| --------------- | --------------- | ----------------------------------------------------- | ----------- |
| **`AT+RECV?`**  | -               | `AT+RECV`: Print the last received data in hex format | `OK`        |
| **`AT+RECV=?`** | -               | **port:payload** (in HEX)                             | `OK`        |

**Example**:
```
AT+RECV=?
3:4321

OK
```

:::tip 📝 NOTE:

When called twice, without new data received between the calls, the second `AT+RECV=?` returns an empty value:

`AT+RECV=?`

`0:`

`OK`
:::

## LoRaWAN® Device Configuration

This section describes the commands related to the configuration of the LoRaWAN® device.

- [AT+ADR - Set or get ADR - Adaptive Data Rate](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-adr)
- [AT+CLASS - LoRaWAN Class Configuration](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-class)
- [AT+DCS - Duty Cycle Settings](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-dcs)
- [AT+DUTYTIME - Get the duty cycle time](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-dutytime)
- [AT+DR - Configure and checking data rate](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-dr)
- [AT+JN1DL - Join delay on RX1 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-jn1dl)
- [AT+JN2DL - Join delay on RX2 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-jn2dl)
- [AT+RX1DL - Delay on RX1 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rx1dl)
- [AT+RX2DL - Delay on RX2 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rx2dl)
- [AT+RX2DR - Data Rate on RX2 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rx2dr)
- [AT+RX2FQ - Frequency of the RX2 window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rx2fq)
- [AT+TXP -  Transmit power](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-txp)
- [AT+RETY - Confirm payload retransmission](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rety)
- [AT+MASK - Setting masked channels](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-mask)
- [AT+BAND - Regional frequency band](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-band)
- [AT+LPSEND - Long data payload](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-lpsend)
- [AT+LINKCHECK - Network link status](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-linkcheck)
- [AT+USEND - Unified send payload data](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-usend)
- [AT+PNM - Public Network Mode](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-pnm)


### AT+ADR 

Description: Adaptive data rate

This command is used to access and configure the adaptive data rate of the module.

| Command                        | Input Parameter | Return Value                                                              | Return Code              |
| ------------------------------ | --------------- | ------------------------------------------------------------------------- | ------------------------ |
| **`AT+ADR?`**                  | -               | `AT+ADR`: Get or set the adaptive data rate setting (0:disable, 1:enable) | `OK`                     |
| **`AT+ADR=?`**                 | -               | 0 *(ADR off) or* 1 *(ARD on)*                                             | `OK`                     |
| **`AT+ADR=<Input Parameter>`** | 0 or 1          | -                                                                         | `OK` or `AT_PARAM_ERROR` |


**Examples**:

```
AT+ADR=1

OK
AT+ADR=?
1

OK
```

### AT+CLASS 

Description: LoRaWAN® class

This command is used to access and configure the LoRaWAN® class of the module.

| Command                          | Input Parameter | Return Value                                      | Return Code              |
| -------------------------------- | --------------- | ------------------------------------------------- | ------------------------ |
| **`AT+CLASS?`**                  | -               | `AT+CLASS`: Get or set the device class (A, B, C) | `OK`                     |
| **`AT+CLASS=?`**                 | -               | A, B, or C                                        | `OK`                     |
| **`AT+CLASS=<Input Parameter>`** | A, B, or C      | -                                                 | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+CLASS=A

OK
AT+CLASS=?
A

OK
```

:::tip 📝 NOTE:

When operating in CLASS B, the current state of Class B operation is also shown:

| Class B Status and Description |
| ------------------------------ |
| `B,S0` = DeviceTimeReq         |
| `B,S1` = Beacon Searching      |
| `B,S2` = Beacon Locked         |
| `B,S3` = Beacon Failed         |


**Example**:

```
AT+CLASS=B

OK
AT+CLASS=?
B,S0

OK
```
:::

### AT+DCS 

Description: Duty cycle settings

This command is used to access and configure duty cycle settings.

| Command                        | Input Parameter | Return Value                                                           | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------------------- | ------------------------ |
| **`AT+DCS?`**                  | -               | `AT+DCS`: Get or set the ETSI duty cycle setting (0:disable, 1:enable) | `OK`                     |
| **`AT+DCS=?`**                 | -               | 0 *(disabled) or* 1 *(enabled)*                                        | `OK`                     |
| **`AT+DCS=<Input Parameter>`** | 0 or 1          | -                                                                      | `OK` or `AT_PARAM_ERROR` |


**Examples**:


```
AT+DCS=1

OK
AT+DCS=?
1

OK
```

### AT+DUTYTIME 

Description: Get the duty cycle time

This command is used to get the duty cycle time (in seconds). The command is only used in the EU868, RU864 and EU433 frequency bands. Other frequency bands will return 0.

| Command             | Input Parameter | Return Value                           | Return Code |
| ------------------- | --------------- | -------------------------------------- | ----------- |
| **`AT+DUTYTIME?`**  | -               | `AT+DUTYTIME`: Get the duty cycle time | `OK`        |
| **`AT+DUTYTIME=?`** | -               | `<time is in seconds>`                 | `OK`        |

**Example**:

```
AT+DUTYTIME=?
0

OK
```

### AT+DR 

Description: Data rate settings

This command is used to access and configure data rate settings.

| Command                       | Input Parameter                 | Return Value                                                  | Return Code              |
| ----------------------------- | ------------------------------- | ------------------------------------------------------------- | ------------------------ |
| **`AT+DR?`**                  | -                               | `AT+DR`: Get or set the data rate (0-7 corresponding to DR_X) | `OK`                     |
| **`AT+DR=?`**                 | -                               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                               | `OK`                     |
| **`AT+DR=<Input Parameter>`** | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` | -                                                             | `OK` or `AT_PARAM_ERROR` |


**Examples**:

```
AT+DR=1

OK
AT+DR=?
1

OK
```

:::tip 📝 NOTE:

`AT+DR` command will return `AT+ERROR` if ADR is active via `AT+ADR` command.
:::

### AT+JN1DL 

Description: Join delay on RX1 window

This command is used to access and configure the join delay on RX1 window.

| Command                          | Input Parameter | Return Value                                                                                          | Return Code                               |
| -------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| **`AT+JN1DL?`**                  | -               | `AT+JN1Dl`: Get or set the join accept delay between the end of the Tx and the join Rx window 1 in ms | `OK`                                      |
| **`AT+JN1DL=?`**                 | -               | *< integer >*                                                                                         | `OK` or `AT_BUSY_ERROR`                   |
| **`AT+JN1DL=<Input Parameter>`** | *< integer >*   | -                                                                                                     | `OK`,`AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+JN1DL=5000

OK
AT+JN1DL=?
5000

OK
```

### AT+JN2DL 

Description: Join delay on RX2 window

This command is used to access and configure the join delay on RX2 window.

| Command                          | Input Parameter | Return Value                                                                                          | Return Code                                |
| -------------------------------- | --------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------ |
| **`AT+JN2DL?`**                  | -               | `AT+JN2Dl`: Get or set the join accept delay between the end of the Tx and the join Rx window 2 in ms | `OK`                                       |
| **`AT+JN2DL=?`**                 | -               | *< integer >*                                                                                         | `OK` or `AT_BUSY_ERROR`                    |
| **`AT+JN2DL=<Input Parameter>`** | *< integer >*   | -                                                                                                     | `OK`, `AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+JN2DL=6000

OK
AT+JN2DL=?
6000

OK
```

### AT+RX1DL 

Description: Delay on RX1 window

This command is used to access and configure the delay on RX1 window.

| Command                          | Input Parameter | Return Value                                                                         | Return Code                                |
| -------------------------------- | --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| **`AT+RX1DL?`**                  | -               | `AT+RX1DL`: Get or set the delay between the end of the Tx and the Rx window 1 in ms | `OK`                                       |
| **`AT+RX1DL=?`**                 | -               | *< integer >*                                                                        | `OK` or `AT_BUSY_ERROR`                    |
| **`AT+RX1DL=<Input Parameter>`** | *< integer >*   | -                                                                                    | `OK`, `AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+RX1DL=1000

OK
AT+RX1DL=?
1000

OK
```

### AT+RX2DL 

Description: Delay on RX2 window

This command is used to access and configure the delay on RX2 window.

| Command                          | Input Parameter | Return Value                                                                         | Return Code                                |
| -------------------------------- | --------------- | ------------------------------------------------------------------------------------ | ------------------------------------------ |
| **`AT+RX2DL?`**                  | -               | `AT+RX2DL`: Get or set the delay between the end of the Tx and the Rx window 2 in ms | `OK`                                       |
| **`AT+RX2DL=?`**                 | -               | *< integer >*                                                                        | `OK` or `AT_BUSY_ERROR`                    |
| **`AT+RX2DL=<Input Parameter>`** | *< integer >*   | -                                                                                    | `OK`, `AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+RX2DL=6000

OK
AT+RX2DL=?
6000

OK
```

### AT+RX2DR 

Description: Data Rate on RX2 window

This command is used to access and configure the data rate of the RX2 window.

| Command                          | Input Parameter                 | Return Value                                                                | Return Code                                |
| -------------------------------- | ------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------ |
| **`AT+RX2DR?`**                  | -                               | `AT+RX2DR`: Get or set the Rx2 window data rate (0-7) corresponding to DR_X | `OK`                                       |
| **`AT+RX2DR=?`**                 | -                               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                                             | `OK` or `AT_BUSY_ERROR`                    |
| **`AT+RX2DR=<Input Parameter>`** | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` | -                                                                           | `OK`, `AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+RX2DR=8

OK
AT+RX2DR=?
8

OK
```

### AT+RX2FQ 

Description: Frequency of the RX2 window

This command is used to access and configure the frequency of the RX2 window.

| Command                          | Input Parameter       | Return Value                                    | Return Code                                |
| -------------------------------- | --------------------- | ----------------------------------------------- | ------------------------------------------ |
| **`AT+RX2FQ?`**                  | -                     | `AT+RX2FQ`: Get or set the Rx2 window frequency | `OK`                                       |
| **`AT+RX2FQ=?`**                 | -                     | *< Frequency in Hz >*                           | `OK` or `AT_BUSY_ERROR`                    |
| **`AT+RX2FQ=<Input Parameter>`** | *< Frequency in Hz >* | -                                               | `OK`, `AT_BUSY_ERROR`, or `AT_PARAM_ERROR` |

**Examples**:

```
AT+RX2FQ=923300000

OK
AT+RX2FQ=?
923300000

OK
```
:::tip 📝 NOTE:

RX2 Frequency via the `AT+RX2FQ` command has a preset value depending on the regional band you selected via the `AT+BAND` command.
:::

### AT+TXP 

Description: Transmit Power

This command is used to access and configure the transmit power.

| Command                        | Input Parameter | Return Value                            | Return Code              |
| ------------------------------ | --------------- | --------------------------------------- | ------------------------ |
| **`AT+TXP?`**                  | -               | `AT+TXP`: Get or set the transmit power | `OK`                     |
| **`AT+TXP=?`**                 | -               | *< value >*                             | `OK` or `AT+PARAM_ERROR` |
| **`AT+TXP=<Input Parameter>`** | *< value >*     | -                                       | `OK` or `AT_PARAM_ERROR` |

Check the [Appendix II Section](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#appendix-ii%EF%BC%9Atx-power-by-region) **TXPower** for the input parameter depending on the frequency band selected.

For example, at EU868, a value of 2 represents **MaxEIRP - 4&nbsp;dB** where MaxEIRP = +16&nbsp;dBm.

**Examples**:

```
AT+TXP=2

OK
AT+TXP=?
2

OK
```

### AT+RETY 

Description: Confirmed payload retransmission

This command is used to access and configure the number of retransmissions for confirmed payload.

| Command                         | Input Parameter                 | Return Value                                                        | Return Code              |
| ------------------------------- | ------------------------------- | ------------------------------------------------------------------- | ------------------------ |
| **`AT+RETY?`**                  | -                               | `AT+RETY`: Set the number of retransmissions of Confirm packet data | `OK`                     |
| **`AT+RETY=?`**                 | -                               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                                     | `OK`                     |
| **`AT+RETY=<Input Parameter>`** | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` | -                                                                   | `OK` or `AT+PARAM_ERROR` |

**Examples**:

```
AT+RETY=7

OK
AT+RETY=?
7

OK
```

### AT+MASK 

Description: Setting masked channels

This command is used to access and configure masked channels.

| Command                         | Input Parameter  | Return Value                                                                                  | Return Code              |
| ------------------------------- | ---------------- | --------------------------------------------------------------------------------------------- | ------------------------ |
| **`AT+MASK?`**                  | -                | `AT+MASK`: Set the channel mask, close or open the channel. Only for US915, AU915, and CN470. | `OK`                     |
| **`AT+MASK=?`**                 | -                | *< mask >*                                                                                    | `OK`                     |
| **`AT+MASK=<Input Parameter>`** | *Channels (hex)* | -                                                                                             | `OK` or `AT+PARAM_ERROR` |

**AT+MASK Input Parameter Options**

| **Sub-Band** | **Channels (hex)** | **US915**   | **AU915**   | **CN470**   |
| ------------ | ------------------ | ----------- | ----------- | ----------- |
| ALL          | 0000               | All Enabled | All Enabled | All enabled |
| 1            | 0001               | 0-7         | 0-7         | 0-7         |
| 2            | 0002               | 8-15        | 8-15        | 8-15        |
| 3            | 0004               | 16-23       | 16-23       | 16-23       |
| 4            | 0008               | 24-31       | 24-31       | 24-31       |
| 5            | 0010               | 32-39       | 32-39       | 32-39       |
| 6            | 0020               | 40-47       | 40-47       | 40-47       |
| 7            | 0040               | 48-55       | 48-55       | 48-55       |
| 8            | 0080               | 56-63       | 56-63       | 56-63       |
| 9            | 0100               | -           | -           | 64-71       |
| 10           | 0200               | -           | -           | 72-79       |
| 11           | 0400               | -           | -           | 80-87       |
| 12           | 0800               | -           | -           | 88-95       |

**Examples**:

```
AT+MASK=0002

OK
AT+MASK=?
0002

OK
```

### AT+BAND 

Description: Regional frequency band

This command is used to access and configure the regional frequency band.

| Command                     | Input Parameter                                                                   | Return Value                                                                                                                                     | Return Code              |
| --------------------------- | --------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------ |
| **`AT+BAND?`**              | -                                                                                 | `AT+BAND`: Set number corresponding to active regions (0: EU433, 1: CN470, 2: RU864, 3: IN865, 4: EU868, 5: US915, 6: AU915, 7: KR920, 8: AS923) | `OK`                     |
| **`AT+BAND=?`**             | -                                                                                 | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `8-1`, `8-1-JP`, `8-2`, `8-3`, `8-4`                                                                | `OK`                     |
| `AT+BAND=<Input Parameter>` | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `8-1`, `8-1-JP`, `8-2`, `8-3`, `8-4` | -                                                                                                                                                | `OK` or `AT_PARAM_ERROR` |

**List of Band Parameter Options**

| Code     | Regional Band                      |
| -------- | ---------------------------------- |
| 0        | EU433                              |
| 1        | CN470                              |
| 2        | RU864                              |
| 3        | IN865                              |
| 4        | EU868                              |
| 5        | US915                              |
| 6        | AU915                              |
| 7        | KR920                              |
| 8 or 8-1 | AS923-1                            |
| 8-1-JP   | AS923-1 for Japan with LBT support |
| 8-2      | AS923-2                            |
| 8-3      | AS923-3                            |
| 8-4      | AS923-4                            |


**Examples**:

```
AT+BAND=5

OK
AT+BAND=?
5

OK
```

### AT+LPSEND 

Description: Long data payload

This command is used to send a long data payload up to 1024 bytes. The total number of payload uplinks is dependent on the DR set using `AT+DR` and the frequency band using `AT+BAND`. It follows the limits set on the LoRaWAN Regional Specification.


| Command                           | Input Parameter              | Return Value                                               | Return Code              |
| --------------------------------- | ---------------------------- | ---------------------------------------------------------- | ------------------------ |
| **`AT+LPSEND?`**                  | -                            | `AT+LPSEND`: Send long packet data (Maximum is 1024 bytes) | `OK`                     |
| **`AT+LPSEND=<Input Parameter>`** | **port**:**ack**:**payload** | -                                                          | `OK` or `AT_PARAM_ERROR` |
**ack**: 0-unconfirmed, 1-confirmed

This command exclusively works in RAKwireless WisGate Edge LoRaWAN Gateways, in which the long payload is automatically combined in the backend. You need to activate the long payload mode (**Enable LPTP** switch) in the device configuration in the RAKwireless WisGate Edge LoRaWAN Gateway built-in network server, as shown in **Figure 1**, to enable this functionality in the gateway side. 

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/at-command/lp_mode.png"
  width="90%"
  caption="Enable long payload mode in the device configuration"
/>

**Example**:

In this example, the device is configured in US915 and illustrated to send 100 bytes confirmed payload in different data rate specifically 2, 1, and 0.

```
AT+LPSEND=2:1:1111111111222222222233333333334444444444555555555566666666667777777777888888888899999999990000000000

OK
```

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/at-command/lp_at.png"
  width="90%"
  caption="AT+LPSEND command"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-evaluation-board/at-command/lp_payload.png"
  width="90%"
  caption="Payload sent in the network server"
/>

:::tip 📝 NOTE:
The large payload via `AT+LPSEND` will be sliced automatically depending on the DR that follows the LoRaWAN specifications. You can check [Appendix III](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#appendix-iii-maximum-transmission-load-by-region) for the maximum size.
:::

### AT+LINKCHECK 

Description: Network link status

This command is used to access and configure device network link status.

| Command                              | Input Parameter | Return Value                               | Return Code              |
| ------------------------------------ | --------------- | ------------------------------------------ | ------------------------ |
| **`AT+LINKCHECK?`**                  | -               | `AT+LINKCHECK`: Verify Network Link Status | `OK`                     |
| **`AT+LINKCHECK=?`**                 | -               | `0`, `1`, `2`                              | `OK`                     |
| **`AT+LINKCHECK=<Input Parameter>`** | `0`, `1`, `2`   | -                                          | `OK` or `AT_PARAM_ERROR` |

Input parameter details:
0 - Disable Link Check
1 - Execute Link Check just once on the next payload uplink.
2 - Module will automatically execute one time Link Check after every payload uplink.

Reply format:

`+EVT:LINKCHECK:Y0,Y1,Y2,Y3,Y4`

- **`Y0`** represent the result of Link Check.
    -  0 – represent the Link Check execute success.
    - Non-0 – represent the Link Check execute fail.
- **`Y1`** represent the DemodMargin.
- **`Y2`** represent the GwCnt (Number of Gateways that received link check command).
- **`Y3`** represent the RSSI.
- **`Y4`** represent the SNR.

**Examples**:

```
AT+LINKCHECK=1

OK
AT+SEND=2:12345678

OK
+EVT:LINKCHECK:0,25,1,-53,11
```

### AT+USEND 

Description: Unified Send Data

This command is used to send unified data on a dedicated port number.

| Command                          | Input Parameter                               | Return Value                                                  | Return Code                                                        |
| -------------------------------- | --------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------ |
| **`AT+USEND?`**                  | -                                             | `AT+USEND`: Unified SEND data along with the application port | `OK`                                                               |
| **`AT+USEND=<Input Parameter>`** | **port**:**confirm**:**nbtrials**:**payload** | -                                                             | `OK`, `AT_PARAM_ERROR`, `AT_BUSY_ERROR`, or `AT_NO_NETWORK_JOINED` |

Input parameter details:
- **port**: value (1 to 223)
- **confirm**: value (0/confirm or 1/unconfirm)
- **nbtrials**: set the number of retransmissions, value (0 to 7)
- **payload**: data to be transmitted

**Example**:

```
AT+USEND=1:1:2:1234

OK
+EVT:SEND CONFIRMED OK
```

### AT+PNM

Description: Public Network Mode

This command is used to enable public network mode. This is only available in LoRaWAN mode and it will return `MODE_NOT_SUPPORT` if the device is in P2P mode. Default setting is `1`.

| Command                        | Input Parameter | Return Value                                               | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------ |
| **`AT+PNM?`**                  | -               | `AT+PNM`: Get or set the public network mode (0=off, 1=on) | `OK`                     |
| **`AT+PNM=?`**                 | -               | `0` or `1`                                                 | `OK`                     |
| **`AT+PNM=<Input Parameter>`** | `0` or `1`      | -                                                          | `OK` or `AT_PARAM_ERROR` |

**Example**:

```
AT+PNM=1

OK
AT+PNM=?
1

OK
```

## Class B Mode

This section describes the commands related to Class B mode.

:::tip 📝 NOTE:
The commands in these sections work in Class B mode. You need to configure your device to Class B via `AT+CLASS=B` to ensure that.
:::

- [AT+PGSLOT - Slot Periodicity Command](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-pgslot)
- [AT+BFREQ - Beacon Frequency Command](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-bfreq)
- [AT+LTIME - Local Time Command](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ltime)

### AT+PGSLOT 

Description: Slot Periodicity Command

This command is used to access and configure unicast ping slot periodicity.

| Command                           | Input Parameter | Return Value                | Return Code              |
| --------------------------------- | --------------- | --------------------------- | ------------------------ |
| **`AT+PGSLOT?`**                  | -               | `AT+PGSLOT`: PS:periodicity | `OK`                     |
| **`AT+PGSLOT=?`**                 | -               | `PS: 0` up to `PS: 7`       | `OK`                     |
| **`AT+PGSLOT=<Input Parameter>`** | *< 0 to 7 >*    | -                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+PGSLOT=3

OK
AT+PGSLOT=?
3

OK
```

### AT+BFREQ 

Description: Beacon Frequency Command

This command is used to get the current beacon (default broadcast) frequency.

| Command          | Input Parameter | Return Value                         | Return Code |
| ---------------- | --------------- | ------------------------------------ | ----------- |
| **`AT+BFREQ?`**  | -               | `AT+BFREQ`: Get the Beacon frequency | `OK`        |
| **`AT+BFREQ=?`** | -               | *<DRx, psfreq>*                      | `OK`        |

**Examples**:

EU868
```
AT+BFREQ=?
3,869.525

OK
```
US915
```
AT+BFREQ=?
8,923.300

OK
```

### AT+LTIME

Description: Local Time Command

This command is used to access the local time in a UTC format.

| Command          | Input Parameter | Return Value                                 | Return Code |
| ---------------- | --------------- | -------------------------------------------- | ----------- |
| **`AT+LTIME?`**  | -               | `AT+LTIME`: Get the local time in UTC format | `OK`        |
| **`AT+LTIME=?`** | -               | `LTIME`: *<hms on MM/DD/YYYY>*               | `OK`        |

**Example**:

```
AT+LTIME=?
LTIME:03h56m52s on 09/18/2021

OK
```

## Device information

This section describes the commands on getting device information.

- [AT+RSSI - Receive signal strength indicator](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rssi)
- [AT+SNR - Signal to Noise Ratio](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-snr)
- [AT+VER - Version of the firmware](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ver)
- [AT+TIMEREQ - UTC time request](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-timereq)

### AT+RSSI 

Description: Receive signal strength indicator

This command is used to get the RSSI value of the last packet received.

| Command         | Input Parameter | Return Value                                        | Return Code |
| --------------- | --------------- | --------------------------------------------------- | ----------- |
| **`AT+RSSI?`**  | -               | `AT+RSSI`: Get the RSSI of the last received packet | `OK`        |
| **`AT+RSSI=?`** | -               | *< integer > in dBm*                                | `OK`        |

:::tip 📝 NOTE:
`AT+RSSI` will show the RSSI of the last downlink received. If no downlink was received yet, it will return 0.
:::

Example:
```
AT+RSSI=?
-31

OK
```

### AT+SNR 

Description: Signal to Noise Ratio

This command is used to get the SNR value of the last packet received.

| Command        | Input Parameter | Return Value                                      | Return Code |
| -------------- | --------------- | ------------------------------------------------- | ----------- |
| **`AT+SNR?`**  | -               | `AT+SNR`: Get the SNR of the last received packet | `OK`        |
| **`AT+SNR=?`** | -               | *< integer >*                                     | `OK`        |

:::tip 📝 NOTE:
`AT+SNR` will show the SNR of the last downlink received. If no downlink was received yet, it will return 0.
:::

**Example**:
```
AT+SNR=?
8

OK
```

### AT+VER 

Description: Version of the firmware

This command is used to get the firmware version installed on the device.

| Command        | Input Parameter | Return Value                              | Return Code |
| -------------- | --------------- | ----------------------------------------- | ----------- |
| **`AT+VER?`**  | -               | `AT+VER`: Get the version of the firmware | `OK`        |
| **`AT+VER=?`** | -               | *< V.x.y >*                               | `OK`        |

**Example**:

```
AT+VER=?
V1.0.2

OK
```

### AT+TIMEREQ 

Description: UTC time request

This command is used to get the UTC time. It only works if the device is in LoRaWAN mode and successfully joined.

| Command                            | Input Parameter | Return Value                                    | Return Code                                       |
| ---------------------------------- | --------------- | ----------------------------------------------- | ------------------------------------------------- |
| **`AT+TIMEREQ?`**                  | -               | `AT+TIMEREQ`: Request the current date and time | `OK`                                              |
| **`AT+TIMEREQ=<Input Parameter>`** | `0` or `1`      |                                                 | `OK`, `AT_PARAM_ERROR`, or `AT_NO_NETWORK_JOINED` |

:::tip 📝 NOTE:
With `AT+TIMEREQ` command, you will have an asynchronous reply `+EVT: TIMEREQ OK` after a successful uplink.

You also need to use `AT+LTIME` command to get the exact time data/value.
:::

**Examples**:

Send `AT+TIMEREQ=1` after a successful join.

```
+EVT:JOINED
AT+TIMEREQ=1

OK
```

Send an uplink payload and see if `TIMEREQ` is successful.
```
AT+SEND=2:12345678

OK
+EVT:TIMEREQ OK
+EVT:SEND CONFIRMED OK
```
Check the returned time/value.
```
AT+LTIME=?
LTIME:02h46m12s on 22/10/2021

OK
```

## RF Test

Description: Radio frequency test management

This section describes the commands related to RF test management.

- [AT+CW - Send Continuous Wave](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-cw)
- [AT+TRSSI - Receive Signal Strength Indicator](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-trssi)
- [AT+TTONE - Start radio frequency tone test](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ttone)
- [AT+TTX - Start RF Tx LoRa® test](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ttx)
- [AT+TRX - Start RF Rx LoRa® test](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-trx)
- [AT+TCONF - LoRa® RF test configuration](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-tconf)
- [AT+TTH - RF Tx hopping test](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-tth)
- [AT+TOFF - Stop ongoing radio frequency test](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-toff)
- [AT+CERTIF - LoRaWAN® Certification mode](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-certif)

### AT+CW 

Description: Send continuous wave

This command is used to enable continuous RF tranmissions with configurable frequency, transmit power and duration.

| Command                       | Input Parameter               | Return Value                  | Return Code              |
| ----------------------------- | ----------------------------- | ----------------------------- | ------------------------ |
| **`AT+CW?`**                  | -                             | `AT+CW`: Send continuous wave | `OK`                     |
| **`AT+CW=<Input Parameter>`** | **freq**:**txpower**:**time** | -                             | `OK` or `AT_PARAM_ERROR` |

:::tip 📝 NOTE:
Frequency configuration:

- RAK3172(L) is needed to use the low frequency range 150000000 - 600000000.
- RAK3172(H) is needed to use the high frequency range 600000000 - 960000000.

Txpower:
- 5 to 22

Time (seconds):
- 0 - 65535

:::

**Example**:

```
AT+CW=868000000:20:60

OK
```

### AT+TRSSI 

Description: Receive Signal Strength Indicator

This command is used to get the RF RSSI tone test of the device.

| Command         | Input Parameter | Return Value                        | Return Code |
| --------------- | --------------- | ----------------------------------- | ----------- |
| **`AT+TRSSI?`** | -               | `AT+TRSSI`: Start RF RSSI tone test | `OK`        |
| **`AT+TRSSI`**  | -               | *[TimeDisplay]: RSSI Value in dBm*  | `OK`        |

**Example**:
```
AT+TRSSI
1632128999s205:Rx FSK Test
1632128999s219:>>> RSSI Value= -12 dBm

OK
```

### AT+TTONE 

Description: Start radio frequency tone test

This command is used to get the RF RSSI tone test of the device.

| Command         | Input Parameter | Return Value                   | Return Code             |
| --------------- | --------------- | ------------------------------ | ----------------------- |
| **`AT+TTONE?`** | -               | `AT+TTONE`: Start RF tone test | `OK`                    |
| **`AT+TTONE`**  | -               | *[TimeDisplay]:Tx FSK Test*    | `OK` or `AT_BUSY_ERROR` |

**Example**:
```
AT+TTONE
1632128969s345:Tx FSK Test

OK
```

### AT+TTX 

Description: Start RF Tx LoRa® test

This command is used to set the number of packets to be sent for a PER RF TX test.

| Command                        | Input Parameter        | Return Value                                           | Return Code              |
| ------------------------------ | ---------------------- | ------------------------------------------------------ | ------------------------ |
| **`AT+TTX?`**                  | -                      | `AT+TTX`: Set number of packets sent with RF LoRa test | `OK`                     |
| **`AT+TTX=<Input Parameter>`** | *< 0 < Integer < 64 >* | -                                                      | `OK` or `AT_PARAM_ERROR` |

**Example**:

```
AT+TTX=3
1632129370s692:Tx LoRa Test
1632129370s698:Tx 1 of 3
1632129372s022:OnTxDone
1v32129372s522:Tx 2 of 3
1632129373s844:OnTxDone
1v32129374s344:Tx 3 of 3
1632129375s666:OnTxDone

OK
```

### AT+TRX 

Description: Start RF Rx LoRa® test

This command is used to set the number of packets to be received for a PER RF TX test.

| Command                        | Input Parameter        | Return Value                                                | Return Code              |
| ------------------------------ | ---------------------- | ----------------------------------------------------------- | ------------------------ |
| **`AT+TRX?`**                  | -                      | `AT+TRX`: Set number of packets received with RF LoRa® test | `OK`                     |
| **`AT+TRX=<Input Parameter>`** | *< 0 < Integer < 64 >* | -                                                           | `OK` or `AT_PARAM_ERROR` |

**Example**:

Another separate device should have a simultaneous `AT+TTX=3` command to get the right readings for `AT+TRX=3`.
```
AT+TRX=3
154s047:OnRxDone
154s047:RssiValue=-24 dBm, SnrValue=7
154s047:Rx 1 of 3  >>> PER= 0 %
155s871:OnRxDone
155s871:RssiValue=-25 dBm, SnrValue=7
155s871:Rx 2 of 3  >>> PER= 0 %
157s693:OnRxDone
157s693:RssiValue=-26 dBm, SnrValue=6
157s693:Rx 3 of 3  >>> PER= 0 %

OK
```

### AT+TCONF 

Description: Config LoRa® RF test

This command is used to access and set LoRa® configuration test.

| Command                          | Input Parameter        | Return Value                        | Return Code              |
| -------------------------------- | ---------------------- | ----------------------------------- | ------------------------ |
| **`AT+TCONF?`**                  | -                      | `AT+TCONF`: Configure LoRa® RF test | `OK`                     |
| **`AT+TCONF=?`**                 | -                      | *Summary of configuration*          | `OK` or `AT_ERROR`       |
| **`AT+TCONF=<Input Parameter>`** | *Check on the example* | -                                   | `OK` or `AT_PARAM_ERROR` |

:::tip 📝 NOTE:
Guide on Bandwidth parameter (in Hz):
`0=7812, 1=15625, 2=31250, 3=62500, 4=125000, 5=250000, 6=500000` 
:::

**Examples**:

```
AT+TCONF=?
1: Freq= 868000000 Hz
2: Power= 14 dBm
3: Bandwidth= 125000 Hz
4: SF= 12 
5: CR= 4/5 
6: LNA State= 0  
7: PA Boost State= 0  
8: modulation LORA
9: Payload len= 16 Bytes
10: Frequency deviation not applicable
11: LowDRopt[0 to 2]= 2 
12 BT product not applicable
can be copy/paste in set cmd: AT+TCONF=868000000:14:4:12:4/5:0:0:1:16:25000:2:3

OK
AT+TCONF=868000000:14:4:12:4/5:0:0:1:16:25000:2:3

OK

```

### AT+TTH 

Description: RF Tx hopping test

This command is used to access and configure RF Tx hopping test.

| Command                        | Input Parameter                              | Return Value                                                                 | Return Code |
| ------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------------- | ----------- |
| **`AT+TTH?`**                  | -                                            | `AT+TTH`: Starts RF Tx hopping test from Fstart to Fstop, with Fdelta steps. | `OK`        |
| **`AT+TTH=<Input Parameter>`** | **Fstart**,**Fstop**,**FDelta**,**PacketNb** | -                                                                            | `OK`        |

**Example**:

```
AT+TTH=p68000000,868300000,100000,4
1467s836:Tx Hop at 868000000Hz. 0 of 4
1467s836:Tx LoRa Test
1467s841:Tx 1 of 1
1468s176:OnTxDone
1468s676:Tx Hop at 868100000Hz. 1 of 4
1468s676:Tx LoRa Test
1468s681:Tx 1 of 1
1469s016:OnTxDone
1469s516:Tx Hop at 868200000Hz. 2 of 4
1469s516:Tx LoRa Test
1469s521:Tx 1 of 1
1469s856:OnTxDone
1470s356:Tx Hop at 868300000Hz. 3 of 4
1470s356:Tx LoRa Test
1470s361:Tx 1 of 1
1470s696:OnTxDone

OK
```

### AT+TOFF 

Description: Stop ongoing radio frequency test

This command is used to stop the ongoing RF test.

| Command        | Input Parameter | Return Value                     | Return Code |
| -------------- | --------------- | -------------------------------- | ----------- |
| **`AT+TOFF?`** | -               | `AT+TOFF`: Stops ongoing RF test | `OK`        |
| **`AT+TOFF`**  | -               | -                                | `OK`        |

**Example**:

```
AT+TOFF
Test Stop

OK
```

### AT+CERTIF 

Description: LoRaWAN® Certification mode

This command is used to enable LoRaWAN® Certification mode (1-OTAA, 0-ABP).

| Command                       | Input Parameter | Return Value                                              | Return Code              |
| ----------------------------- | --------------- | --------------------------------------------------------- | ------------------------ |
| **`AT**+CERTIF?`**            | -               | `AT+CERTIF`: Set the module in LoraWAN Certification mode | `OK`                     |
| `AT+CERTIF=<Input Parameter>` | `0` or `1`      | -                                                         | `OK` or `AT_PARAM_ERROR` |

:::tip 📝 NOTE:
`AT+CERTIF` puts the timer to handler data transmission equal to 5&nbsp;s.
:::

Examples:

OTAA
```
AT+CERTIF=1

OK
+EVT:JOINED
```
ABP
```
AT+CERTIF=0
+EVT:JOINED

OK
```

## P2P Mode

This section describes the commands related to LoRa point to point functionality.

- [AT+NWM - LoRa® network work mode (LoRaWAN or P2P)](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-nwm)
- [AT+PFREQ - P2P mode frequency](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-pfreq)
- [AT+PSF - P2P mode spreading factor](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-psf)
- [AT+PBW - P2P mode bandwidth](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-pbw)
- [AT+PCR - P2P mode coding rate](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-pcr)
- [AT+PPL - P2P mode preamble length](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ppl)
- [AT+PTP - P2P mode TX power](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-ptp)
- [AT+P2P - P2P configuration settings](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-p2p)
- [AT+PSEND - P2P send data](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-psend)
- [AT+PRECV - P2P receive data window](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-precv)

### AT+NWM 

Description: LoRa® network work mode (LoRaWAN or P2P)

This command is used to switch to LoRaWAN or (P2P) Point-to-Point mode.

| Command                        | Input Parameter            | Return Value                                                 | Return Code              |
| ------------------------------ | -------------------------- | ------------------------------------------------------------ | ------------------------ |
| **`AT+NWM?`**                  | -                          | `AT+NWM`: Get or set the network work NWM (0:P2P, 1:LoRaWAN) | `OK`                     |
| **`AT+NWM=?`**                 | -                          | -                                                            | `OK`                     |
| **`AT+NWM=<Input Parameter>`** | `0` *P2P* or `1` *LoRaWAN* | -                                                            | `OK` or `AT_PARAM_ERROR` |

**Examples**:

LoRa P2P to LoRaWAN
```
AT+NWM=0

OK
AT+NWM=1
LoRa (R) is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN (R) is a licensed mark.

______  ___   _   __  _    _ _          _               
| ___ \/ _ \ | | / / | |  | (_)        | |              
| |_/ / /_\ \| |/ /  | |  | |_ _ __ ___| | ___  ___ ___ 
|    /|  _  ||    \  | |/\| | | '__/ _ \ |/ _ \/ __/ __|
| |\ \| | | || |\  \ \  /\  / | | |  __/ |  __/\__ \__ \
\_| \_\_| |_/\_| \_/  \/  \/|_|_|  \___|_|\___||___/___/
========================================================
RAK3172-H Version:v1.0.2 May 26 2021
Current Work Mode: LoRaWAN.
```

LoRaWAN to LoRa P2P
```
AT+NWM=1

OK
AT+NWM=0
LoRa (R) is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN (R) is a licensed mark.

______  ___   _   __  _    _ _          _               
| ___ \/ _ \ | | / / | |  | (_)        | |              
| |_/ / /_\ \| |/ /  | |  | |_ _ __ ___| | ___  ___ ___ 
|    /|  _  ||    \  | |/\| | | '__/ _ \ |/ _ \/ __/ __|
| |\ \| | | || |\  \ \  /\  / | | |  __/ |  __/\__ \__ \
\_| \_\_| |_/\_| \_/  \/  \/|_|_|  \___|_|\___||___/___/
========================================================
RAK3172-H Version:v1.0.2 May 26 2021
Current Work Mode: LoRa P2P.
```


### AT+PFREQ 

Description: P2P mode frequency

This command is used to access and configure the P2P mode frequency.

| Command                          | Input Parameter       | Return Value                        | Return Code              |
| -------------------------------- | --------------------- | ----------------------------------- | ------------------------ |
| **`AT+PFREQ?`**                  | -                     | `AT+PFREQ`: Configure P2P frequency | `OK`                     |
| **`AT+PFREQ=?`**                 | -                     | *< frequency > in Hz*               | `OK`                     |
| **`AT+PFREQ=<Input Parameter>`** | *< frequency > in Hz* | -                                   | `OK` or `AT_PARAM_ERROR` |

:::tip 📝 NOTE:
Frequency configuration:

- RAK3172(L) is needed to use the low frequency range 150000000 - 600000000.
- RAK3172(H) is needed to use the high frequency range 600000000 - 960000000.
:::

**Example**:
```
AT+PFREQ=868000000

OK
AT+PFREQ=?
868000000

OK
```
### AT+PSF 

Description: P2P mode spreading factor

This command is used to access and configure the P2P mode spreading factor.

| Command                        | Input Parameter | Return Value                                               | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------ |
| **`AT+PSF?`**                  | -               | `AT+PSF`: Configure P2P SpreadingFactor (6,7,8,9,10,11,12) | `OK`                     |
| **`AT+PSF=?`**                 | -               | `6`, `7`, `8`, `9`, `10`, `11`, `12`                       | `OK`                     |
| **`AT+PSF=<Input Parameter>`** | *< 6 to 12 >*   | -                                                          | `OK` or `AT_PARAM_ERROR` |

**Examples**:
```
AT+PSF=9

OK
AT+PSF=?
9

OK
```

### AT+PBW 

Description: P2P mode bandwidth

This command is used to access and configure the P2P mode bandwidth.

| Command                        | Input Parameter        | Return Value                                      | Return Code              |
| ------------------------------ | ---------------------- | ------------------------------------------------- | ------------------------ |
| **`AT+PBW?`**                  | -                      | `AT+PBW`: Configure P2P Bandwidth (125, 250, 500) | `OK`                     |
| **`AT+PBW=?`**                 | -                      | `125`, `250`, or `500`                            | `OK`                     |
| **`AT+PBW=<Input Parameter>`** | `125`, `250`, or `500` | -                                                 | `OK` or `AT_PARAM_ERROR` |

**Examples**:
```
AT+PBW=125

OK
AT+PBW=?
125

OK
```

### AT+PCR 

Description: P2P mode coding rate

This command is used to access and configure the P2P mode coding rate.

| Command                        | Input Parameter       | Return Value                                                   | Return Code              |
| ------------------------------ | --------------------- | -------------------------------------------------------------- | ------------------------ |
| **`AT+PCR?`**                  | -                     | `AT+PCR`: Configure P2P code rate (4/5=0, 4/6=1, 4/7=2, 4/8=3) | `OK`                     |
| **`AT+PCR=?`**                 | -                     | `0`, `1`, `2`, or `3`                                          | `OK`                     |
| **`AT+PCR=<Input Parameter>`** | `0`, `1`, `2`, or `3` | -                                                              | `OK` or `AT_PARAM_ERROR` |

**Examples**:
```
AT+PCR=0

OK
AT+PCR=?
0

OK
```

### AT+PPL 

Description: P2P mode preamble length

This command is used to access and configure the P2P mode preamble length.

| Command                        | Input Parameter   | Return Value                                      | Return Code              |
| ------------------------------ | ----------------- | ------------------------------------------------- | ------------------------ |
| **`AT+PPL?`**                  | -                 | `AT+PPL`: Configure P2P Preamble Length (2-65535) | `OK`                     |
| **`AT+PPL=?`**                 | -                 | `2` up to `65535`                                 | `OK`                     |
| **`AT+PPL=<Input Parameter>`** | `2` up to `65535` | -                                                 | `OK` or `AT_PARAM_ERROR` |

**Examples**:
```
AT+PPL=8

OK
AT+PPL=?
8

OK
```
### AT+PTP 

Description: P2P mode TX power

This command is used to access and configure the P2P mode TX power.

| Command                        | Input Parameter | Return Value                        | Return Code              |
| ------------------------------ | --------------- | ----------------------------------- | ------------------------ |
| **`AT+PTP?`**                  | -               | `AT+TP`: Configure P2P Power (5-22) | `OK`                     |
| **`AT+PTP=?`**                 | -               | `5` up to `22`                      | `OK`                     |
| **`AT+PTP=<Input Parameter>`** | `5` up to `22`  | -                                   | `OK` or `AT_PARAM_ERROR` |

**Examples**:
```
AT+PTP=15

OK
AT+PTP=?
15

OK
```

### AT+P2P 

Description: P2P configuration settings

This command is used to access and configure all P2P mode settings.

| Command                        | Input Parameter                                     | Return Value                                        | Return Code              |
| ------------------------------ | --------------------------------------------------- | --------------------------------------------------- | ------------------------ |
| **`AT+P2P?`**                  | -                                                   | `AT+P2P`: Configure P2P all parameters              | `OK`                     |
| **`AT+P2P=?`**                 | -                                                   | *`<Freq>,<SF>,<Bandwidth>,<CR>,<Preamble>,<Power>`* | `OK` or `AT_ERROR`       |
| **`AT+P2P=<Input Parameter>`** | *`<Freq>,<SF>,<Bandwidth>,<CR>,<Preamble>,<Power>`* | -                                                   | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

- RAK3172(L) is needed to use the low frequency range 150000000 - 525000000.
- RAK3172(H) is needed to use the high frequency range 525000000 - 960000000.
- SF: 5 to 12
- Bandwidth: 125, 250, or 500
- CR: 0=4/5, 1=4/6, 2=4/7, 3=4/8
- Preamble: 2 to 65535
- Power: 5 to 22 in dBm. If the value is 14, it means 14&nbsp;dBm.

**Examples**:
```
AT+P2P=868000000:9:125:0:8:15

OK
AT+P2P=?
868000000:9:125:0:8:15

OK
```

### AT+PSEND 

Description: P2P send data

This command is used to send P2P data.

| Command                          | Input Parameter | Return Value              | Return Code              |
| -------------------------------- | --------------- | ------------------------- | ------------------------ |
| **`AT+PSEND?`**                  | -               | `AT+PSEND`: P2P send data | `OK`                     |
| **`AT+PSEND=<Input Parameter>`** | *<`Payload`>*   | -                         | `OK` or `AT_PARAM_ERROR` |

**Example**:
```
AT+PSEND=11223344

OK
```

:::tip 📝 NOTE:
To successfully transmit P2P, you must have another device configured with the same P2P parameters and ready to receive the payload with the `AT+PRECV` command. The maximum payload in P2P mode is 255 bytes.
:::

### AT+PRECV 

Description: P2P receive data window

This command is used to configure timeout period for P2P window reception.

| Command                          | Input Parameter    | Return Value                                                             | Return Code              |
| -------------------------------- | ------------------ | ------------------------------------------------------------------------ | ------------------------ |
| **`AT+PRECV?`**                  | -                  | `AT+PRECV`: Set the timeout period for P2P window reception (0-65535) ms | `OK`                     |
| **`AT+PRECV=?`**                 | -                  | *<`Time in mSec`>*                                                       | `OK`                     |
| **`AT+PRECV=<Input Parameter>`** | *<`Time in mSec`>* | -                                                                        | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

- If the value is set to 65534, the device will continuously listen to P2P LoRa TX packets without any timeout. This is the same as setting the device in RX mode.
- If the value is set to 65535, the device will listen to P2P TX without a timeout. But it will stop listening once a P2P LoRa packet is received to save power.
- If the value is 0, the device will stop listening to P2P TX data. The device is in TX mode.

**Example**:
```
AT+PRECV=65535

OK
+EVT:RXP2P, RSSI -37, SNR 11
+EVT:11223344
```

## Multicast Group

This section describes the commands related to multicast group functionality.

- [AT+ADDMULC - Add multicast group](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-addmulc)
- [AT+RMVMULC - Remove multicast group](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-rmvmulc)
- [AT+LSTMULC - Multicast list](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/AT-Command-Manual/#at-lstmulc)

### AT+ADDMULC 

Description: Add multicast group

This command is used to add a new multicast group and multicast parameters.

| Command                            | Input Parameter                                                                | Return Value                            | Return Code              |
| ---------------------------------- | ------------------------------------------------------------------------------ | --------------------------------------- | ------------------------ |
| **`AT+ADDMULC?`**                  | -                                                                              | `AT+ADDMULC: Add a new multicast group` | `OK`                     |
| **`AT+ADDMULC=<Input Parameter>`** | *`[Class]:[DevAddr]:[NwkSKey]:[AppSKey]:[Frequency]:[Datarate]:[Periodicity]`* | -                                       | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

If Class is C, the periodicity parameter is removed.

**Examples**:

For class B,
```
AT+ADDMULC=B:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0:0

OK
```
For class C,
```
AT+ADDMULC=C:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0

OK
```

### AT+RMVMULC 

Description: Remove multicast group

This command is used to remove the configured multicast group.

| Command                            | Input Parameter | Return Value                         | Return Code |
| ---------------------------------- | --------------- | ------------------------------------ | ----------- |
| **`AT+RMVMULC?`**                  | -               | `AT+RMVMULC`: Delete multicast group | `OK`        |
| **`AT+RMVMULC=<Input Parameter>`** | *`<DevAddr>`*   | -                                    | `OK`        |

**Example**:

You can only remove a group with address that was already added.
```
AT+RMVMULC=11223344

OK
```
### AT+LSTMULC 

Description: Multicast list

This command is used to get the information about the configured multicast group.

| Command            | Input Parameter | Return Value                                                        | Return Code |
| ------------------ | --------------- | ------------------------------------------------------------------- | ----------- |
| **`AT+LSTMULC?`**  | -               | `AT+RMVMULC`: Get multicast group information                       | `OK`        |
| **`AT+LSTMULC=?`** | -               | `MC1:[Class]:[DevAddr]:[NwkSK ey]:[AppSKey]:[Frequency]:[Datarate]` | `OK`        |

**Example**:

```
AT+LSTMULC=?
MC1:ClassC:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0

OK
```


## Data Transparent Transmission

This section describes the commands related to transparent data transmission in UART.

### ATD 

Description: Set transparent transmission mode

This command is used to set the transparent transmission mode. This only works in LoRaWAN mode.

:::tip 📝 NOTE:
In data transparent transmission mode, all your input to the UART port will be transmitted to the network server. Standard AT commands will not work. To get out of data transparent transmission mode, you need to input `+++` command without any termination (e.g. CR or LF).
:::

| Command | Input Parameter | Return Value                                    | Return Code |
| ------- | --------------- | ----------------------------------------------- | ----------- |
| `ATD?`  | -               | `ATD`: Enter data transparent transmission mode | `OK`        |
| `ATD`   | -               | -                                               | `OK`        |

**Example**:

Two packets are transmitted on the demo below. During transparent transmission mode, there is no string shown on the payload sent.
```
ATD

OK

OK
+EVT:SEND CONFIRMED OK

OK
+EVT:SEND CONFIRMED OK
```

### +++ 

Description: Stop transparent transmission mode

This command is used to stop the transparent transmission mode.

| Command    | Input Parameter | Return Value                              | Return Code |
| ---------- | --------------- | ----------------------------------------- | ----------- |
| **`+++?`** | -               | `+++`: Exit transparent transmission mode | `OK`        |
| **`+++`**  | -               | -                                         | `OK`        |

:::tip 📝 NOTE:
There must be no UART termination, no CR and/or LF, after the `+++` command, or else it will be transmitted as payload and the device will stay in Data Transparent Transmission mode.
:::

## Appendix 

### Appendix I：Data Rate by Region

<b> EU433/EU868/RU864/AS923 </b>

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

<br>

<b> CN470/KR920 </b>

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6 ~ 15    | RFU                       |                                      |

<br>

<b> US915 </b>

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

<br>

<b> AU915 </b>

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

<br>

<b> IN865 </b>

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

<br>

### Appendix II：TX Power by Region

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

| TXPower | Configuration (Conducted Power) |
| ------- | ------------------------------- |
| 0       | 30&nbsp;dBm - 2*TXpower         |
| 1       | 28&nbsp;dBm                     |
| 2       | 26&nbsp;dBm                     |
| 3 ~ 9   | -                               |
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

By default, Max EIRP is considered to be 16&nbsp;dBm.

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

<b> RU864 </b>
 
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

<b> CN470 </b>

By default, MaxEIRP is considered to be +19.15&nbsp;dBm.

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP 2&nbsp;dB    |
| 2       | MaxEIRP 4&nbsp;dB    |
| 3       | MaxEIRP 6&nbsp;dB    |
| 4       | MaxEIRP 8&nbsp;dB    |
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

### Appendix III：Maximum Transmission Load by Region

:::tip 📝 NOTE:
M in the following list is the length with MAC header, N is the maximum usable payload size for the user data without MAC header.

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

<b> RU864 </b>

| Data Rate | M           | N           |
| --------- | ----------- | ----------- |
| 0         | 59          | 51          |
| 1         | 59          | 51          |
| 2         | 59          | 51          |
| 3         | 123         | 115         |
| 4         | 230         | 222         |
| 5         | 230         | 222         |
| 6         | 230         | 222         |
| 7         | 230         | 222         |
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

<br>

### Appendix IV: Asynchronous Events

This section describes the output from UART lines from the RAK3172 that can occur at any point in time while the device is operational.

| Event                      | UART output         | Status description                                                                               |
| -------------------------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| Beacon acquisition process | `+BC:`*< status >*  | `FAILED` - Beacon sync failed                                                                    |
|                            |                     | `DONE` - Switch to Class B mode                                                                  |
|                            |                     | `LOST` - No Beacon received for 2 hours, switch to Class A                                       |
|                            |                     | `LOCKED` - Receive Beacon                                                                        |
| Pingslot process           | `+PS:`*< status >*  | `DONE` - At this time, ping slots will be opened periodically. The modem is now in Class B mode. |
| Class B/C downlink         | `+EVT:`*< status >* | `RX3/RXC, RSSI -110, SNR 5` - Indicates that data has been received on pingslot received window. |
|                            |                     | `PortNumber:12345678` - Received binary data on PortNumber.                                      |
|                            |                     | `UNICAST` - Let host know that the Rx is in unicast Class B mode.                                |
|                            |                     | `MULCAST MC1` = Data received in multicast group 1                                               |
| Class A downlink           | `+EVT:`*< status >* | `RX1/RX2, RSSI -110, SNR 5`                                                                      |
|                            |                     | `PortNumber:12345678` - Received binary data on PortNumber.                                      |
| Join                       | `+EVT:`*< status >* | `JOIN FAILED`                                                                                    |
|                            |                     | `JOINED`                                                                                         |
| Confirm                    | `+EVT:`*< status >* | `SEND CONFIRMED OK`                                                                              |
|                            |                     | `SEND CONFIRMED FAILED`                                                                          |
| P2P                        | `+EVT:`*< status >* | `00112233` - Received binary data format data                                                    |
|                            |                     | `RXP2P, RSSI -110, SNR 5` - Indicates that data has been received on P2P received window.        |
| Link Check                 | `+EVT:`*< status >* | `LINKCHECK:Y0,Y1,Y2,Y3,Y4`                                                                       |
|                            |                     | Y0 - represent link status (1:links success, 2: link fail)                                       |
|                            |                     | Y1 - represent the DemodMargin                                                                   |
|                            |                     | Y2 - represent the NbGateways                                                                    |
|                            |                     | Y3 - represent the RSSI of the command’s download                                                |
|                            |                     | Y4 - represent the SNR of the command’s download                                                 |