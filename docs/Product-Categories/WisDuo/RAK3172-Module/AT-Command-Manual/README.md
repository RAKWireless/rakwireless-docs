---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK3172. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak3172-module/overview/RAK3172_Module_home.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisduo
    - AT Command Manual
    - RAK3172
---

# RAK3172 Module AT Command Manual

## Introduction

RAK3172 WisDuo module is based on STM32WLE5CC chip and it is designed to simplify LoRaWAN and LoRa point to point (P2P) communication. To integrate LoRa technology into your projects, RAK3172 implemented easy to use UART communication interface where you can send AT commands. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can also use any microcontroller with UART interface to control the RAK3172 module. 

The UART serial communication is exposed on the UART2 (also identified as **LPUART1 port**), through **Pin 2 (TX2)** and **Pin 1 (RX2)**. The default parameters of the UART2 communication are **9600 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK3172 Module Datasheet](/Product-Categories/WisDuo/RAK3172-Module/Datasheet/#rak3172-wisduo-lpwan-module-datasheet).

## Links to Quick Start Guide

For AT commands example usage, you can check these sections of quick start guide:

- [RAK3172 TTN OTAA Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK3172 OTAA activation.
- [RAK3172 TTN ABP Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK3172 ABP activation. 
- [RAK3172 Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK3172 OTAA activation.
- [RAK3172 Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK3172 ABP activation.
- [LoRa P2P](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#lora-p2p-mode) - Point to point communication between two RAK3172 modules.

## AT Command Syntax

The AT command is based on ASCII characters. In general, the AT Command starts with the prefix `AT` and ends with `<CR><LF>` (i.e. \r\n). For the rest of the document, the `\r\n` part is omitted for the sake of clarity.

The AT commands have the standard format “AT+XXX”, with XXX denoting the command.

There are four available command formats:

| **AT COMMAND FORMAT**      | **Description**                                   |
| -------------------------- | ------------------------------------------------- |
| AT+XXX?                    | Provides a short description of the given command |
| AT+XXX=?                   | Reading the current value on the command          |
| AT+XXX=`<input parameter>` | Writing configuration on the command              |
| AT+XXX                     | Used to run a command                             |


The output of the commands is returned via UART.

The format of the reply is divided into two parts: returned value and the status return code.

:::tip 📝 NOTE:

`<CR>` stands for “carriage return” and `<LF>` stands for “line feed”

:::


1. **`<value><CR><LF>`** is the first reply when (**AT+XXX?**) command description or (**AT+XXX=?**) reading value is executed then it will be followed by the status return code. The formats with no return value like (**AT+XXX=`<input parameter>`) writing configuration command and (**AT+XXX**) run command will just reply the status return code.


2. **`<CR><LF><STATUS><CR><LF>`** is the second part of the reply which is the status return code.

The possible status are:

| **STATUS RETURN CODE**   | **Description**                                      |
| ------------------------ | ---------------------------------------------------- |
| `OK`                     | Command executed correctly without error.            |
| `AT_ERROR`               | Generic error or input is not supported.             |
| `AT_PARAM_ERROR`         | The input parameter of the command is wrong.         |
| `AT_BUSY_ERROR`          | The network is busy so the command is not completed. |
| `AT_TEST_PARAM_OVERFLOW` | The parameter is too long.                           |
| `AT_NO_NETWORK_JOINED`   | Module is not yet joined to a network.               |
| `AT_RX_ERROR`            | Error detected during the reception of the command   |
| `AT_DUTYCYLE_RESTRICTED` | Duty cycle limited and cannot send data              |

More details on each command description and examples are given in the remainder of this section. 

:::tip 📝 NOTE ON EXAMPLES:

On the examples of AT Commands on this document, ATE is active therefore each input AT Command is printed before the return values and status return code. It is preceded by **>** symbol to quickly identify it.

:::

## General Commands

This section describes the generic commands related to “attention” help list, link control and CPU AT_Slave reset.

### AT 

Description: Attention

This command is used to check that the UART communication link is working properly.


| Command | Input Parameter | Return Value | Return Code |
| ------- | --------------- | ------------ | ----------- |
| AT      | -               | -            | `OK`        |
    
### ATZ 

Description: MCU reset

This command is used to trigger an MCU reset.

| Command | Input Parameter | Return Value             | Return Code |
| ------- | --------------- | ------------------------ | ----------- |
| ATZ?    | -               | `ATZ Trig a MCU reset`   | `OK`        |
| ATZ     | -               | *No return. MCU resets.* | `OK`        |

### ATR 

Description: Restore default parameters

This command restores all parameters to the initial default values of the module.

| Command | Input Parameter | Return Value | Return Code |
| ------- | --------------- | ------------ | ----------- |
| ATR?    | -               | -            | `OK`        |
| ATR     | -               | -            | `OK`        |

### ATE 

Description: Set command echo

This command allows the user to see the AT command input on the Serial Terminal.

| Command | Input Parameter | Return Value           | Return Code |
| ------- | --------------- | ---------------------- | ----------- |
| ATE?    | -               | `ATE Set command echo` | `OK`        |
| ATE     | -               | -                      | `OK`        |

### AT+SN  

Description: Serial number

This command can read the device serial number.

| Command | Input Parameter | Return Value                          | Return Code |
| ------- | --------------- | ------------------------------------- | ----------- |
| AT+SN?  | -               | `AT+SN read the device serial number` | `OK`        |
| AT+SN=? | -               | `0080E11500004CF6`                    | `OK`        |


## Keys, IDs and EUIs management

This section describes the commands related to the activation of the end device. EUI's and Keys are **MSB first**.

### AT+DEVEUI 

Description: Device EUI or DEVEUI

This command allows the user to access and configure the device EUI or DEVEUI.

| Command                       | Input Parameter | Return Value                                                  | Return Code              |
| ----------------------------- | --------------- | ------------------------------------------------------------- | ------------------------ |
| AT+DEVEUI?                    | -               | `AT+DEVEUI=<XXXXXXXXXXXXXXXX><CR>. Get or Set the Device EUI` | `OK`                     |
| AT+DEVEUI=?                   | -               | *< 8 hex >*                                                   | `OK`                     |
| AT+DEVEUI=`<Input Parameter>` | *< 8 hex >*     | -                                                             | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+DEVEUI?
AT+DEVEUI=<XXXXXXXXXXXXXXXX><CR>. Get or Set the Device EUI

OK
> AT+DEVEUI=1122334455667788

OK
> AT+DEVEUI=?
1122334455667788

OK
> AT+DEVEUI=112233445566778800

AT_PARAM_ERROR
```

### AT+APPEUI  

Description: Application unique identifier

This command allows the user to access and configure the APPEUI.

| Command                       | Input Parameter | Return Value                                               | Return Code              |
| ----------------------------- | --------------- | ---------------------------------------------------------- | ------------------------ |
| AT+APPEUI?                    | -               | `AT+APPEUI=<XXXXXXXXXXXXXXXX><CR>. Get or Set the App Eui` | `OK`                     |
| AT+APPEUI=?                   | -               | *< 8 hex >*                                                | `OK`                     |
| AT+APPEUI=`<Input Parameter>` | *< 8 hex >*     | -                                                          | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+APPEUI?
AT+APPEUI=<XXXXXXXXXXXXXXXX><CR>. Get or Set the App Eui

OK
> AT+APPEUI=0080E11500004CF6

OK
> AT+APPEUI=?
0080e11500004cf6

OK
> AT+APPEUI=0080E11500004CF61234

AT_PARAM_ERROR
```

### AT+APPKEY 

Description: Application key

This command allows the user to access and configure the APPKEY.

| Command                       | Input Parameter | Return Value                                                                       | Return Code              |
| ----------------------------- | --------------- | ---------------------------------------------------------------------------------- | ------------------------ |
| AT+APPKEY?                    | -               | `AT+APPKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Application Key` | `OK`                     |
| AT+APPKEY=?                   | -               | *< 16 hex >*                                                                       | `OK`                     |
| AT+APPKEY=`<Input Parameter>` | *< 16 hex >*    | -                                                                                  | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+APPKEY?
AT+APPKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Application Key

OK
> AT+APPKEY=01020AFBA1CD4D20010230405A6B7F88

OK
> AT+APPKEY=?
01020afba1cd4d20010230405a6b7f88

OK
> AT+APPKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

### AT+DEVADDR 

Description: Device address or DEVADDR

This command allows the user to access and configure the device address or DEVADDR.

| Command                        | Input Parameter | Return Value                                               | Return Code              |
| ------------------------------ | --------------- | ---------------------------------------------------------- | ------------------------ |
| AT+DEVADDR?                    | -               | `AT+DEVADDR=<XXXXXXXX><CR>. Get or Set the Device address` | `OK`                     |
| AT+DEVADDR=?                   | -               | *< 4 hex >*                                                | `OK`                     |
| AT+DEVADDR=`<Input Parameter>` | *< 4 hex >*     | -                                                          | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+DEVADDR?
AT+DEVADDR=<XXXXXXXXXXXXXXXX><CR>. Get or Set the Device EUI

OK
> AT+DEVADDR=01020A0B

OK
> AT+DEVADDR=?
01020a0b

OK
> AT+DEVADDR=01020A0BCC

AT_PARAM_ERROR
```

### AT+APPSKEY 

Description: Application session key

This command allows the user to access and configure the application session key or APPSKEY.

| Command                        | Input Parameter | Return Value                                                                                | Return Code              |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| AT+APPSKEY?                    | -               | `AT+APPSKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Application Session Key` | `OK`                     |
| AT+APPSKEY=?                   | -               | *< 16 hex >*                                                                                | `OK`                     |
| AT+APPSKEY=`<Input Parameter>` | *< 16 hex >*    | -                                                                                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+APPSKEY?
AT+APPSKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Application Session Key

OK
> AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F88

OK
> AT+APPSKEY=?
01020afba1cd4d20010230405a6b7f88

OK
> AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

### AT+NWKSKEY 

Description: Network session keys

This command allows the user to access and configure the network session keys or NWKSKEY.

| Command                        | Input Parameter | Return Value                                                                                | Return Code              |
| ------------------------------ | --------------- | ------------------------------------------------------------------------------------------- | ------------------------ |
| AT+NWKSKEY?                    | -               | `AT+APPSKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Application Session Key` | `OK`                     |
| AT+NWKSKEY=?                   | -               | *< 16 hex >*                                                                                | `OK`                     |
| AT+NWKSKEY=`<Input Parameter>` | *< 16 hex >*    | -                                                                                           | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+NWKSKEY?
AT+NWKSKEY=<XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX><CR>. Get or Set the Network Session Key

OK
> AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F88

OK
> AT+NWKSKEY=?
01020afba1cd4d20010230405a6b7f88

OK
> AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F

AT_PARAM_ERROR
```

## Joining and Sending Data to LoRaWAN® network

This section describes the commands related to the joining process of the device to the LoRaWAN® newtork.

### AT+NJM 

Description: LoRaWAN® network join mode

This command allows the user to access and configure the activation method of the device either OTAA or ABP.

| Command                    | Input Parameter | Return Value                                                  | Return Code              |
| -------------------------- | --------------- | ------------------------------------------------------------- | ------------------------ |
| AT+NJM?                    | -               | `AT+NJM Get or set the network join mode (0 = ABP, 1 = OTAA)` | `OK`                     |
| AT+NJM=?                   | -               | `0` or `1`                                                    | `OK`                     |
| AT+NJM=`<Input Parameter>` | `0` or `1`      | -                                                             | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
> AT+NJM?
AT+NJM Get or set the network join mode (0 = ABP, 1 = OTAA)

OK
> AT+NJM=1

OK
> AT+NJM=?
1

OK
> AT+NJM=2

AT_PARAM_ERROR
```

### AT+CFM 

Description: Confirmed payload mode

This command allows the user to access and configure type of payload of the device.

| Command                    | Input Parameter | Return Value                               | Return Code            |
| -------------------------- | --------------- | ------------------------------------------ | ---------------------- |
| AT+CFM?                    | -               | AT+CFM: get or set the confirm mode (0-1)  | OK                     |
| AT+CFM=?                   | -               | 0 *(if Unconfirmed) or* 1 *(if confirmed)* | OK                     |
| AT+CFM=`<Input Parameter>` | 0 or 1          | -                                          | OK *or* AT_PARAM_ERROR |

### AT+JOIN

Description: Join LoRaWAN® network

This command allows the user to join a LoRaWAN® network.

| Command                     | Input Parameter                                                                                    | Return Value                     | Return Code           |
| --------------------------- | -------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------- |
| AT+JOIN?                    | -                                                                                                  | AT+JOIN: join network            | OK                    |
| AT+JOIN=?                   | -                                                                                                  | *Param1, Param2, Param3, Param4* | OK *or* AT_BUSY_ERROR |
| AT+JOIN=`<Input Parameter>` | *Param1:Param2:Param3:Param4*                                                                      | -                                | OK                    |
|                             | *Param1* = **Join command**: 1 for joining the network , 0 for stop joining                        |                                  |                       |
|                             | *Param2* = **Auto-Join config**: 1 for Auto-join on power up) , 0 for no auto-join. (0 is default) |                                  |                       |
|                             | *Param3* = **Reattempt interval**: 7 - 255 seconds (8 is default)                                  |                                  |                       |
|                             | *Param4* = **No. of join attempts**: 0 - 255 (0 is default)                                        |                                  |                       |

:::tip 📝 NOTE:

This is an asynchronous command. OK means that the device is joining. The completion of the JOIN can be verified with AT+NJS=? command.

:::

### AT+NJS 

Description: Network join status

This command allows the user to check the status of the devices if it is connected to a LoRaWAN® network.

| Command  | Input Parameter | Return Value                     | Return Code |
| -------- | --------------- | -------------------------------- | ----------- |
| AT+NJS?  | -               | AT+NJS: get the join status      | OK          |
| AT+NJS=? | -               | 0 *(not joined) or* 1 *(joined)* | OK          |

### AT+SEND 

Description: Send payload data

This command allows the user to send LoRaWAN® payload on specific port.

| Command                     | Input Parameter      | Return Value                                        | Return Code                                                   |
| --------------------------- | -------------------- | --------------------------------------------------- | ------------------------------------------------------------- |
| AT+SEND?                    | -                    | AT+SEND: send  data along with the application port | OK                                                            |
| AT+SEND=`<Input Parameter>` | **port**:**payload** | -                                                   | OK , AT_NO_NETOWRK_JOINED , AT_PARAM_ERROR *or* AT_BUSY_ERROR |

### AT+CFS 

Description: Confirm status

This command allows the user to access the status of the last “SEND” command

| Command  | Input Parameter | Return Value                                                  | Return Code |
| -------- | --------------- | ------------------------------------------------------------- | ----------- |
| AT+CFS?  | -               | AT+CFS: get the confirmation status of the last AT+SEND (0-1) | OK          |
| AT+CFS=? | -               | 0 *or* 1                                                      | OK          |

### AT+RECV 

Description: Last received data

This command allows the user to get the last received data in hex format.

| Command   | Input Parameter | Return Value                                        | Return Code |
| --------- | --------------- | --------------------------------------------------- | ----------- |
| AT+RECV?  | -               | AT+RECV: print the last received data in hex format | OK          |
| AT+RECV=? | -               | **port:payload** (in HEX)                           | OK          |


:::tip 📝 NOTE:

When called twice, without new data received between the calls, the second AT+RECV=? returns an empty value 

`0:<CR><LF>`<br>
`<CR><LF>OK<CR><LF>`

:::

## LoRaWAN® device configuration

This section describes the commands related to the configuration of the LoRaWAN® device.

### AT+ADR 

Description: Adaptive data rate

This command allows the user to access and configure the adaptive data rate of the module.

| Command                    | Input Parameter | Return Value                                                                    | Return Code            |
| -------------------------- | --------------- | ------------------------------------------------------------------------------- | ---------------------- |
| AT+ADR?                    | -               | AT+ADR=`<ADR><CR>`. Get or Set the Adaptive Data Rate setting ADR=[0:off, 1:on] | OK                     |
| AT+ADR=?                   | -               | 0 *(ADR off) or* 1 *(ARD on)*                                                   | OK                     |
| AT+ADR=`<Input Parameter>` | 0 or 1          | -                                                                               | OK *or* AT_PARAM_ERROR |

### AT+CLASS 

Description: LoRaWAN® class

This command allows the user to access and configure the the LoRaWAN® class of the module.

| Command                      | Input Parameter | Return Value                                                  | Return Code            |
| ---------------------------- | --------------- | ------------------------------------------------------------- | ---------------------- |
| AT+CLASS?                    | -               | AT+CLASS=`<Class><CR>`. Get or Set the Device Class=[A, B, C] | OK                     |
| AT+CLASS=?                   | -               | A, B or C                                                     | OK                     |
| AT+CLASS=`<Input Parameter>` | A, B or C       | -                                                             | OK *or* AT_PARAM_ERROR |

:::tip 📝 NOTE:

This FW of the device supports the LoRaWAN® V1.0.3 stack

:::

### AT+DCS 

Description: Duty cycle settings

This command allows the user to access and configure duty cycle settings.

| Command                    | Input Parameter | Return Value                                                                  | Return Code            |
| -------------------------- | --------------- | ----------------------------------------------------------------------------- | ---------------------- |
| AT+DCS?                    | -               | AT+DCS=`<DutyCycle><CR>`. Get or Set the ETSI DutyCycle=[0:disable, 1:enable] | OK                     |
| AT+DCS=?                   | -               | 0 *(disabled) or* 1 *(enabled)*                                               | OK                     |
| AT+DCS=`<Input Parameter>` | 0 or 1          | -                                                                             | OK *or* AT_PARAM_ERROR |

### AT+DUTYTIME 

Description: Get the duty cycle time

This command allows the user to get the duty cycle time (in seconds). The command is only used in the EU868, RU864 and EU433 frequency bands. Other frequency band query will return 0.

| Command       | Input Parameter | Return Value                             | Return Code |
| ------------- | --------------- | ---------------------------------------- | ----------- |
| AT+DUTYTIME?  | -               | AT+DUTYTIME:Get the duty cycle time (s). | OK          |
| AT+DUTYTIME=? | -               | `<time is in seconds>`                   | OK          |

### AT+DR 

Description: Data rate settings

This command allows the user to access and configure data rate settings.

| Command                   | Input Parameter                 | Return Value                                              | Return Code            |
| ------------------------- | ------------------------------- | --------------------------------------------------------- | ---------------------- |
| AT+DR?                    | -                               | `AT+DR=<DataRate><CR>. Get or Set the Tx DataRate=[0..7]` | `OK`                   |
| AT+DR=?                   | -                               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                           | OK                     |
| AT+DR=`<Input Parameter>` | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7` | -                                                         | OK *or* AT_PARAM_ERROR |

### AT+JN1DL 

Description: Join delay on RX1 window

This command allows the user to access and configure the join delay on RX1 window.

| Command                      | Input Parameter | Return Value                                                                                           | Return Code                              |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------- |
| AT+JN1DL?                    | -               | `AT+JN1Dl: get or set the joint accept delay between the end of the Tx and the join Rx window 1 in ms` | `OK`                                     |
| AT+JN1DL=?                   | -               | *< integer >*                                                                                          | `OK` or `AT_BUSY_ERROR`                  |
| AT+JN1DL=`<Input Parameter>` | *< integer >*   | -                                                                                                      | `OK`,`AT+BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+JN2DL 

Description: Join delay on RX2 window

This command allows the user to access and configure the join delay on RX2 window.

| Command                      | Input Parameter | Return Value                                                                                           | Return Code                                 |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------------------------ | ------------------------------------------- |
| AT+JN2DL?                    | -               | `AT+JN2Dl: get or set the joint accept delay between the end of the Tx and the join Rx window 2 in ms` | `OK`                                        |
| AT+JN2DL=?                   | -               | *< integer >*                                                                                          | `OK` or `AT_BUSY_ERROR`                     |
| AT+JN2DL=`<Input Parameter>` | *< integer >*   | -                                                                                                      | `OK`,`AT+AT_BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+RX1DL 

Description: Delay on RX1 window

This command allows the user to access and configure the delay on RX1 window.

| Command                      | Input Parameter | Return Value                                                                         | Return Code                              |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| AT+RX1DL?                    | -               | `AT+RX1DL: get or set the delay between the end of the Tx and the Rx window 1 in ms` | `OK`                                     |
| AT+RX1DL=?                   | -               | *< integer >*                                                                        | `OK` or `AT_BUSY_ERROR`                  |
| AT+RX1DL=`<Input Parameter>` | *< integer >*   | -                                                                                    | `OK`,`AT_BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+RX2DL 

Description: Delay on RX2 window

This command allows the user to access and configure the delay on RX2 window.

| Command                      | Input Parameter | Return Value                                                                         | Return Code                              |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------------ | ---------------------------------------- |
| AT+RX2DL?                    | -               | `AT+RX2DL: get or set the delay between the end of the Tx and the Rx window 2 in ms` | `OK`                                     |
| AT+RX2DL=?                   | -               | *< integer >*                                                                        | `OK` or `AT_BUSY_ERROR`                  |
| AT+RX2DL=`<Input Parameter>` | *< integer >*   | -                                                                                    | `OK`,`AT_BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+RX2DR 

Description: Data Rate on RX2 window

This command allows the user to access and configure the data rate of the RX2 window.

| Command                      | Input Parameter | Return Value                                                                | Return Code                              |
| ---------------------------- | --------------- | --------------------------------------------------------------------------- | ---------------------------------------- |
| AT+RX2DR?                    | -               | `AT+RX2DR: get or set the Rx2 window data rate (0-7) corresponding to DR_X` | `OK`                                     |
| AT+RX2DR=?                   | -               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                                             | `OK` or `AT_BUSY_ERROR`                  |
| AT+RX2DR=`<Input Parameter>` | 0,1,2,3,4,5,6,7 | -                                                                           | `OK`,`AT_BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+RX2FQ 

Description: Frequency of the RX2 window

This command allows the user to access and configure the frequency of the RX2 window.

| Command                      | Input Parameter       | Return Value                                    | Return Code                              |
| ---------------------------- | --------------------- | ----------------------------------------------- | ---------------------------------------- |
| AT+RX2FQ?                    | -                     | `AT+RX2FQ: get or set the Rx2 window frequency` | `OK`                                     |
| AT+RX2FQ=?                   | -                     | *< Frequency in Hz >*                           | `OK` or `AT_BUSY_ERROR`                  |
| AT+RX2FQ=`<Input Parameter>` | *< Frequency in Hz >* | -                                               | `OK`,`AT_BUSY_ERROR` or `AT_PARAM_ERROR` |

### AT+TXP 

Description: Transmit Power

This command allows the user to access and configure the transmit power.

| Command                    | Input Parameter | Return Value                             | Return Code              |
| -------------------------- | --------------- | ---------------------------------------- | ------------------------ |
| AT+TXP?                    | -               | `AT+TXP:  Get or set the transmit power` | `OK`                     |
| AT+TXP=?                   | -               | *< value >*                              | `OK` or `AT+PARAM_ERROR` |
| AT+TXP=`<Input Parameter>` | *< value >*     | -                                        | `OK` or `AT_PARAM_ERROR` |

Check [Appendix II Section](/Product-Categories/WisDuo/RAK3172-Module/AT-Command-Manual/#appendix-ii%EF%BC%9Atx-power-by-region) **TXPower** for the input parameter depending on the frequency band selected.

For example, at EU868, a value of 2 represents **MaxEIRP - 4 dB** where MaxEIRP = +16 dBm.

### AT+RETY 

Description: Confirmed payload retransmission

This command allows the user to access and configure the number of retransmission for confirmed payload.

| Command                     | Input Parameter | Return Value                                                        | Return Code            |
| --------------------------- | --------------- | ------------------------------------------------------------------- | ---------------------- |
| AT+RETY?                    | -               | `AT+RETY: set the number of retransmissions of Confirm packet data` | `OK`                   |
| AT+RETY=?                   | -               | `0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`                                     | `OK`                   |
| AT+RETY=`<Input Parameter>` | 0,1,2,3,4,5,6,7 | -                                                                   | `OK`or`AT+PARAM_ERROR` |

### AT+MASK 

Description: Setting masked channels

This command allows the user to access and configure masked channels.

| Command                     | Input Parameter | Return Value                                                                         | Return Code            |
| --------------------------- | --------------- | ------------------------------------------------------------------------------------ | ---------------------- |
| AT+MASK?                    | -               | `AT+MASK:Set the channel mask, close or open the channel,Only for US915,AU915,CN470` | `OK`                   |
| AT+MASK=?                   | -               | *< mask >*                                                                           | `OK`                   |
| AT+MASK=`<Input Parameter>` | *Channels (hex)*      | -                                                                                    | `OK`or`AT+PARAM_ERROR` |

**AT+MASK Input Parameter Options**

| **Sub-Band**            | **Channels (hex)** | **US915**   | **AU915**   | **CN470**   |
| ----------------------- | ------------------ | ----------- | ----------- | ----------- |
| ALL                     | 0000               | All Enabled | All Enabled | All enabled |
| 1                       | 0001               | 0-7         | 0-7         | 0-7         |
| 2                       | 0002               | 8-15        | 8-15        | 8-15        |
| 3                       | 0004               | 16-23       | 16-23       | 16-23       |
| 4                       | 0008               | 24-31       | 24-31       | 24-31       |
| 5                       | 0010               | 32-39       | 32-39       | 32-39       |
| 6                       | 0020               | 40-47       | 40-47       | 40-47       |
| 7                       | 0040               | 48-55       | 48-55       | 48-55       |
| 8                       | 0080               | 56-63       | 56-63       | 56-63       |
| 9                       | 0100               | -           | -           | 64-71       |
| 10                      | 0200               | -           | -           | 72-79       |
| 11                      | 0400               | -           | -           | 80-87       |
| 12                      | 0800               | -           | -           | 88-95       |

### AT+BAND 

Description: Regional frequency band

This command allows the user to access and configure the regional frequency band.

| Command                     | Input Parameter | Return Value                                                                                                                             | Return Code              |
| --------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| AT+BAND?                    | -               | `AT+BAND: Set number corresponding to active regions (0: EU433 1: CN470 2: RU864 3: IN865 4: EU868 5: US915 6: AU915 7: KR920 8: AS923)` | `OK`                     |
| AT+BAND=?                   | -               | `0` , `1` , `2` , `3` , `4` , `5` , `6` , `7` , `8`                                                                                      | `OK`                     |
| AT+BAND=`<Input Parameter>` | *< 0 to 8 >*    | -                                                                                                                                        | `OK` or `AT_PARAM_ERROR` |

**List of Band Parameter Options**

| Code | Regional Band |
| ---- | ------------- |
| 0    | EU433         |
| 1    | CN470         |
| 2    | RU864         |
| 3    | IN865         |
| 4    | EU868         |
| 5    | US915         |
| 6    | AU915         |
| 7    | KR920         |
| 8    | AS923         |

### AT+LPSEND 

Description: Long data payload

This command allows the user to long data payload.

| Command                       | Input Parameter              | Return Value                                               | Return Code              |
| ----------------------------- | ---------------------------- | ---------------------------------------------------------- | ------------------------ |
| AT+LPSEND?                    | -                            | `AT+LPSEND: Send long packet data (Maximum is 1024 bytes)` | `OK`                     |
| AT+LPSEND=`<Input Parameter>` | **port**:**ack**:**payload** | -                                                          | `OK` or `AT_PARAM_ERROR` |

*ack*: 0-unconfirmed, 1-confirmed

### AT+LINKCHECK 

Description: Network link status

This command allows the user to access and configure device network link status.

| Command                          | Input Parameter | Return Value                               | Return Code              |
| -------------------------------- | --------------- | ------------------------------------------ | ------------------------ |
| AT+LINKCHECK?                    | -               | `AT+LINKCHECK: Verify Network Link Status` | `OK`                     |
| AT+LINKCHECK=?                   | -               | `0` , `1` , `2`                            | `OK`                     |
| AT+LINKCHECK=`<Input Parameter>` | 0 , 1 , 2       | -                                          | `OK` or `AT_PARAM_ERROR` |

Input parameter details:
0 - Disable Link Check
1 - Execute Link Check just once on the next payload uplink.
2 - Module will automatically execute one time Link Check after every payload uplink.

Reply format:

`+EVT:LINKCHECK:Y0,Y1,Y2,Y3,Y4`

- `**Y0**` represent the result of Link Check.
    -  0 – represent the Link Check execute success.
    - Non-0 – represent the Link Check execute fail.
- `**Y1**` represent the DemodMargin.
- `**Y2**` represent the GwCnt (Number of Gateways that received link check command).
- `**Y3**` represent the RSSI.
- `**Y4**` represent the SNR.


### AT+USEND 

Description: Unified Send Data

This command allows the user to send unified data on a dedicated port number.

| Command                      | Input Parameter                                     | Return Value                                                  | Return Code                                                         |
| ---------------------------- | --------------------------------------------------- | ------------------------------------------------------------- | ------------------------------------------------------------------- |
| AT+USEND?                    | -                                                   | `AT+USEND: Unified SEND data along with the application port` | `OK`                                                                |
| AT+USEND=`<Input Parameter>` | **port** : **confirm** : **nbtrials** : **payload** | -                                                             | `OK` , `AT_PARAM_ERROR` , `AT_BUSY_ERROR` or `AT_NO_NETWORK_JOINED` |

Input parameter details:
- **port**: value (1 to 223)
- **confirm**:value (0/confirm or 1/unconfirm)
- **nbtrials**: set the number of retransmissions, value (0 to 7)
- **payload**: data to be transmitted

## Class B Mode

This section describes the commands related to Class B mode.

### AT+PGSLOT 

Description: Unified Send Data

This command allows the user to access and configure unicast ping slot periodicity.

| Command                       | Input Parameter | Return Value                 | Return Code              |
| ----------------------------- | --------------- | ---------------------------- | ------------------------ |
| AT+PGSLOT?                    | -               | `PS: Get or set Periodicity` | `OK`                     |
| AT+PGSLOT=?                   | -               | `PS: 0` *up to* `PS: 7`      | `OK`                     |
| AT+PGSLOT=`<Input Parameter>` | *< 0 to 7 >*    | -                            | `OK` or `AT_PARAM_ERROR` |

### AT+BFREQ 

Description: Unified Send Data

This command allows the user to get the current beacon (default broadcast) frequency.

| Command    | Input Parameter | Return Value                          | Return Code |
| ---------- | --------------- | ------------------------------------- | ----------- |
| AT+BFREQ?  | -               | `AT+BFREQ: “Get the Beacon frequency` | `OK`        |
| AT+BFREQ=? | -               | *<DRx, psfreq>*                       | `OK`        |

### AT+LTIME

Description: Unified Send Data

This command allows the user to get the current beacon (default broadcast) frequency.

| Command    | Input Parameter | Return Value                                 | Return Code |
| ---------- | --------------- | -------------------------------------------- | ----------- |
| AT+LTIME?  | -               | `AT+LTIME: Get the local time in UTC format` | `OK`        |
| AT+LTIME=? | -               | `LTIME:`*<hms on MM/DD/YYYY>*                | `OK`        |

## Device information

This section describes the commands on getting device information.

### AT+RSSI 

Description: Receive signal strength indicator

This command allows the user to get RSSI value of the last packet received.

| Command   | Input Parameter | Return Value                                        | Return Code |
| --------- | --------------- | --------------------------------------------------- | ----------- |
| AT+RSSI?  | -               | `AT+RSSI: Get the RSSI of the last received packet` | `OK`        |
| AT+RSSI=? | -               | *< integer > in dBm*                                | `OK`        |

### AT+SNR 

Description: Signal to Noise Ratio

This command allows the user to get SNR value of the last packet received.

| Command  | Input Parameter | Return Value                                      | Return Code |
| -------- | --------------- | ------------------------------------------------- | ----------- |
| AT+SNR?  | -               | `AT+SNR: Get the SNR of the last received packet` | `OK`        |
| AT+SNR=? | -               | *< integer >*                                     | `OK`        |

### AT+VER 

Description: Version of the firmware

This command allows the user to get firmware version installed on the device.

| Command                    | Input Parameter | Return Value                              | Return Code |
| -------------------------- | --------------- | ----------------------------------------- | ----------- |
| AT+VER?                    | -               | `AT+VER: Get the version of the firmware` | `OK`        |
| AT+VER=?                   | -               | *< V.x.y   >*                             | `OK`        |

## RF Test

Description: Radio frequency test management

This section describes the commands related to RF test management.

### AT+TRSSI 

Description: Receive Signal Strength Indicator

This command allows the user to get RF RSSI tone test of the device.

| Command                      | Input Parameter | Return Value                        | Return Code |
| ---------------------------- | --------------- | ----------------------------------- | ----------- |
| AT+TRSSI?                    | -               | `AT+TRSSI: Start RF RSSI tone test` | `OK`        |
| AT+TRSSI=`<Input Parameter>` | -               | *< integer > in dBm*                | `OK`        |

### AT+TTONE 

Description: Start radio frequency tone test

This command allows the user to get RF RSSI tone test of the device.

| Command                      | Input Parameter | Return Value                   | Return Code             |
| ---------------------------- | --------------- | ------------------------------ | ----------------------- |
| AT+TTONE?                    | -               | `AT+TTONE: Start RF tone test` | `OK`                    |
| AT+TTONE=`<Input Parameter>` | -               | *< integer > in dBm*           | `OK` or `AT_BUSY_ERROR` |

### AT+TTX 

Description: Start RF Tx LoRa® test

This command allows the user to set the number of packets to be sent for a PER RF TX test.

| Command                    | Input Parameter        | Return Value                                            | Return Code              |
| -------------------------- | ---------------------- | ------------------------------------------------------- | ------------------------ |
| AT+TTX?                    | -                      | `AT+TTX: Set number of® packets sent with RF LoRa test` | `OK`                     |
| AT+TTX=`<Input Parameter>` | *< 0 < Integer < 64 >* | -                                                       | `OK` or `AT_PARAM_ERROR` |

### AT+TRX 

Description: Start RF Tx LoRa® test

This command allows the user to set the number of packets to be received for a PER RF TX test.

| Command                    | Input Parameter        | Return Value                                                | Return Code              |
| -------------------------- | ---------------------- | ----------------------------------------------------------- | ------------------------ |
| AT+TRX?                    | -                      | `AT+TRX: Set number of packets received with RF LoRa® test` | `OK`                     |
| AT+TRX=`<Input Parameter>` | *< 0 < Integer < 64 >* | -                                                           | `OK` or `AT_PARAM_ERROR` |

### AT+TCONF 

Description: Config LoRa® RF test

This command allows the user to access and set LoRa® configuration test.

| Command                      | Input Parameter | Return Value                        | Return Code              |
| ---------------------------- | --------------- | ----------------------------------- | ------------------------ |
| AT+TCONF?                    | -               | `AT+TCONF: Configure LoRa® RF test` | `OK`                     |
| AT+TCONF=?                   | -               | -                                   | `OK` or `AT_ERROR`       |
| AT+TCONF=`<Input Parameter>` | -               | -                                   | `OK` or `AT_PARAM_ERROR` |

### AT+TTH 

Description: RF Tx hopping test

This command allows the user to access and configure RF Tx hopping test.

| Command                                               | Input Parameter | Return Value                                                                 | Return Code |
| ----------------------------------------------------- | --------------- | ---------------------------------------------------------------------------- | ----------- |
| AT+TTH?                                               | -               | `AT+TTH: Starts RF Tx hopping test from Fstart to Fstop, with Fdelta steps.` | `OK`        |
| AT+TTH=*<` F start>, <Fstop>, <FDelta>,<P acketNb `>* | -               | -                                                                            | `OK`        |

### AT+TOFF 

Description: Stop ongoing radio frequency test

This command allows the user to stop the ongoing RF test.

| Command  | Input Parameter | Return Value                    | Return Code |
| -------- | --------------- | ------------------------------- | ----------- |
| AT+TOFF? | -               | `AT+TOFF: Stop ongoing RF test` | `OK`        |
| AT+TOFF  | -               | -                               | `OK`        |

### AT+CERTIF 

Description: Set the module in LoRaWAN® Certification mode

This command allows the user to start the RF Rx LoRa test.

| Command    | Input Parameter | Return Value                                               | Return Code             |
| ---------- | --------------- | ---------------------------------------------------------- | ----------------------- |
| AT+CERTIF? | -               | `AT+CERTIF: Set the module in LoraWAN® Certification mode` | `OK`                    |
| AT+CERTIF  | -               | -                                                          | `OK` or `AT_BUSY_ERROR` |

## P2P Mode

This section describes the commands related to LoRa point to point functionality.

### AT+NWM 

Description: LoRa® network work mode (LoRaWAN or P2P)

This command allows the user to switch to LoRaWAN or (P2P)point-to-point mode.

| Command                    | Input Parameter            | Return Value                                                     | Return Code              |
| -------------------------- | -------------------------- | ---------------------------------------------------------------- | ------------------------ |
| AT+NWM?                    | -                          | `AT+NWM: Get or set the network work NWM (0 = P2P, 1 = LoRaWAN)` | `OK`                     |
| AT+NWM=?                   | -                          | -                                                                | `OK`                     |
| AT+NWM=`<Input Parameter>` | `0` *P2P or* `1` *LoRaWAN* | -                                                                | `OK` or `AT_PARAM_ERROR` |

### AT+PFREQ 

Description: P2P mode frequency

This command allows the user to access and configure P2P mode frequency.

| Command                      | Input Parameter       | Return Value                        | Return Code              |
| ---------------------------- | --------------------- | ----------------------------------- | ------------------------ |
| AT+PFREQ?                    | -                     | `AT+PFREQ: Configure P2P frequency` | `OK`                     |
| AT+PFREQ=?                   | -                     | *< frequency > in Hz*               | `OK`                     |
| AT+PFREQ=`<Input Parameter>` | *< frequency > in Hz* | -                                   | `OK` or `AT_PARAM_ERROR` |

### AT+PSF 

Description: P2P mode spreading factor

This command allows the user to access and configure P2P mode spreading factor.

| Command                    | Input Parameter | Return Value                                                    | Return Code              |
| -------------------------- | --------------- | --------------------------------------------------------------- | ------------------------ |
| AT+PSF?                    | -               | `AT+PSF: Configure P2P SpreadingFactor (6,7, 8, 9, 10, 11, 12)` | `OK`                     |
| AT+PSF=?                   | -               | `6` , `7` , `8` , `9` , `10` , `11` , `12`                      | `OK`                     |
| AT+PSF=`<Input Parameter>` | *< 6 to 12 >*   | -                                                               | `OK` or `AT_PARAM_ERROR` |

### AT+PBW 

Description: P2P mode bandwidth

This command allows the user to access and configure P2P mode bandwidth.

| Command                    | Input Parameter        | Return Value                                     | Return Code              |
| -------------------------- | ---------------------- | ------------------------------------------------ | ------------------------ |
| AT+PBW?                    | -                      | `AT+PBW: Configure P2P Bandwidth(125, 250, 500)` | `OK`                     |
| AT+PBW=?                   | -                      | `125` , `250` or `500`                           | `OK`                     |
| AT+PBW=`<Input Parameter>` | `125` , `250` or `500` | -                                                | `OK` or `AT_PARAM_ERROR` |

### AT+PCR 

Description: P2P mode coding rate

This command allows the user to access and configure P2P mode coding rate.

| Command                    | Input Parameter        | Return Value                                                 | Return Code              |
| -------------------------- | ---------------------- | ------------------------------------------------------------ | ------------------------ |
| AT+PCR?                    | -                      | `AT+PCR: Configure P2P code rate(4/5=0, 4/6=1, 4/7=2,4/8=3)` | `OK`                     |
| AT+PCR=?                   | -                      | `0` , `1` , `2` or `3`                                       | `OK`                     |
| AT+PCR=`<Input Parameter>` | `0` , `1` , `2` or `3` | -                                                            | `OK` or `AT_PARAM_ERROR` |

### AT+PPL 

Description: P2P mode preamble length

This command allows the user to access and configure P2P mode preamble length.

| Command                    | Input Parameter     | Return Value                                     | Return Code              |
| -------------------------- | ------------------- | ------------------------------------------------ | ------------------------ |
| AT+PPL?                    | -                   | `AT+PPL: Configure P2P Preamble Length(2-65535)` | `OK`                     |
| AT+PPL=?                   | -                   | `2` *up to* `65535`                              | `OK`                     |
| AT+PPL=`<Input Parameter>` | `2` *up to* `65535` | -                                                | `OK` or `AT_PARAM_ERROR` |

### AT+PTP 

Description: P2P mode TX power

This command allows the user to access and configure P2P mode TX power.

| Command                    | Input Parameter  | Return Value                       | Return Code              |
| -------------------------- | ---------------- | ---------------------------------- | ------------------------ |
| AT+PTP?                    | -                | `AT+TP: Configure P2P Power(5-22)` | `OK`                     |
| AT+PTP=?                   | -                | `5` *up to* `22`                   | `OK`                     |
| AT+PTP=`<Input Parameter>` | `5` *up to* `22` | -                                  | `OK` or `AT_PARAM_ERROR` |

### AT+P2P 

Description: P2P configuration settings

This command allows the user to access and configure all P2P mode settings.

| Command                    | Input Parameter                                     | Return Value                                        | Return Code              |
| -------------------------- | --------------------------------------------------- | --------------------------------------------------- | ------------------------ |
| AT+P2P?                    | -                                                   | `AT+P2P: Configure P2P all parameters`              | `OK`                     |
| AT+P2P=?                   | -                                                   | *`<Freq>,<SF>,<Bandwidth>,<CR>,<Preamble>,<Power>`* | `OK` or `AT_ERROR`       |
| AT+P2P=`<Input Parameter>` | *`<Freq>,<SF>,<Bandwidth>,<CR>,<Preamble>,<Power>`* | -                                                   | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

- SF: 5 to 12
- Bandwidth: 125, 250 or 500
- CR: 0=4/5, 1=4/6, 2=4/7, 3=4/8
- Power: in dBm. If the value is 14, it means 14&nbsp;dBm.

### AT+PSEND 

Description: P2P send data

This command allows the user to send P2P data.

| Command                      | Input Parameter | Return Value              | Return Code              |
| ---------------------------- | --------------- | ------------------------- | ------------------------ |
| AT+PSEND?                    | -               | `AT+PSEND: P2P send data` | `OK`                     |
| AT+PSEND=`<Input Parameter>` | *<`Payload`>*   | -                         | `OK` or `AT_PARAM_ERROR` |

### AT+PRECV 

Description: P2P receive data window

This command allows the user to configure timeout period for P2P window reception.

| Command                      | Input Parameter    | Return Value                                                             | Return Code              |
| ---------------------------- | ------------------ | ------------------------------------------------------------------------ | ------------------------ |
| AT+PRECV?                    | -                  | `AT+PRECV: Set the timeout period for P2P window reception (0-65535) ms` | `OK`                     |
| AT+PRECV=?                   | -                  | *<`Time in mSec`>*                                                       | `OK`                     |
| AT+PRECV=`<Input Parameter>` | *<`Time in mSec`>* | -                                                                        | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

- If the value is set to 65535, the device will constantly listen to P2P TX without a timeout. This is the same as setting the device in RX mode.
- If the value is 0, the device will stop listening to P2P TX data. The device is in TX mode.


## Multicast Group

This section describes the commands related to multicast group functionality.

### AT+ADDMULC 

Description: Add multicast group

This command allows the user to add new multicast group and multicat parameters.

| Command                        | Input Parameter                                                                | Return Value                            | Return Code              |
| ------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------- | ------------------------ |
| AT+ADDMULC?                    | -                                                                              | `AT+ADDMULC: Add a new multicast group` | `OK`                     |
| AT+ADDMULC=`<Input Parameter>` | *`[Class]:[DevAddr]:[NwkSKey]:[AppSKey]:[Frequency]:[Datarate]:[Periodicity]`* | -                                       | `OK` or `AT_PARAM_ERROR` |

Input parameter details:

If Class is C, periodicity parameter is removed.

**Examples**:

For class B,
```
> AT+ADDMULC=B:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0:0

OK
```
For class C,
```
> AT+ADDMULC=C:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0

OK
```

### AT+RMVMULC 

Description: Remove multicast group

This command allows the user to remove the configured multicat group.

| Command                        | Input Parameter | Return Value                         | Return Code |
| ------------------------------ | --------------- | ------------------------------------ | ----------- |
| AT+RMVMULC?                    | -               | `AT+RMVMULC: Delete multicast group` | `OK`        |
| AT+RMVMULC=`<Input Parameter>` | *`<DevAddr>`*   | -                                    | `OK`        |

### AT+LSTMULC 

Description: Multicast list

This command allows the get to information about the configured multicat group.

| Command      | Input Parameter | Return Value                                                         | Return Code |
| ------------ | --------------- | -------------------------------------------------------------------- | ----------- |
| AT+LSTMULC?  | -               | `AT+RMVMULC:Get multicast group information`                         | `OK`        |
| AT+LSTMULC=? | -               | `MC1:[Class]:[DevAddr]:[NwkSK ey]:[AppSKey]:[Frequency]:[Dat arate]` | `OK`        |

## Data Transparent Tranmission

This section describes the commands related to transparent data transmission in UART.

### ATD 

Description: Set transparent transmission mode

This command allows the user to set the transparent transmission mode.

| Command | Input Parameter | Return Value                                    | Return Code |
| ------- | --------------- | ----------------------------------------------- | ----------- |
| ATD?    | -               | `ATD: Enter data transparent transmission mode` | `OK`        |
| ATD     | -               | -                                               | `OK`        |

### +++ 

Description: Stop transparent transmission mode

This command allows the user to stop the transparent transmission mode.

| Command | Input Parameter | Return Value                              | Return Code |
| ------- | --------------- | ----------------------------------------- | ----------- |
| +++?    | -               | `+++: Exit transparent transmission mode` | `OK`        |
| +++     | -               | -                                         | `OK`        |


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

By default, Max EIRP isconsidered to be 16&nbsp;dBm.

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

This section describes the output from UART lines of RAK3172 that can occur at any point in time while the device is operational.

| Event                      | UART output         | Status description                                                                               |
| -------------------------- | ------------------- | ------------------------------------------------------------------------------------------------ |
| Beacon acquisition process | `+BC:`*< status >*  | `FAILED` = beacon sync failed                                                                    |
|                            |                     | `DONE` = Switch to classB mode                                                                   |
|                            |                     | `LOST` = No Beacon received for 2 hours, switch to classA                                        |
|                            |                     | `LOCKED` = Receive Beacon                                                                        |
| Pingslot process           | `+PS:`*< status >*  | `DONE` = At this time, ping slots will be opened periodically. The modem is now in Class B mode. |
| Class B/C downlink         | `+EVT:`*< status >* | `RX3/RXC, RSSI -110, SNR 5` = indicates that data has been received on pingslot received window. |
|                            |                     | `PortNumber:12345678` = received binary data on PortNumber.                                      |
|                            |                     | `UNICAST` = lets host know that the Rx is in unicast Class B mode.                               |
|                            |                     | `MULCAST MC1` = Data received in multicast group 1                                               |
| Class A downlink           | `+EVT:`*< status >* | `RX1/RX2, RSSI -110, SNR 5`                                                                      |
|                            |                     | `PortNumber:12345678` = received binary data on PortNumber.                                      |
| Join                       | `+EVT:`*< status >* | `JOIN FAILED`                                                                                    |
|                            |                     | `JOINED`                                                                                         |
| Confirm                    | `+EVT:`*< status >* | `SEND CONFIRMED OK`                                                                              |
|                            |                     | `SEND CONFIRMED FAILED`                                                                          |
| P2P                        | `+EVT:`*< status >* | `00112233` = received binary data format data                                                    |
|                            |                     | `RXP2P, RSSI -110, SNR 5` = indicates that data has been received on P2P received window.        |
| Link Check                 | `+EVT:`*< status >* | `LINKCHECK:Y0,Y1,Y2,Y3,Y4`                                                                       |
|                            |                     | Y0 = represent link status (1:links success, 2: link fail)                                       |
|                            |                     | Y1 = represent the DemodMargin                                                                   |
|                            |                     | Y2 = represent the NbGateways                                                                    |
|                            |                     | Y3 = represent the RSSI of the command’s dowmload                                                |
|                            |                     | Y4 = represent the SNR of the command’s download                                                 |