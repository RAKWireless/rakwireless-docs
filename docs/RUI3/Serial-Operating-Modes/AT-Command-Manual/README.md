# AT Command Manual

## Overview
AT command is the initial setting in the default serial port used on RUI3 devices. The default baud rate is 115200.

### Switching to AT Mode

**Binary Mode to AT Command**

`AT+ATM` command on a Serial Port will switch its serial operating mode to AT Command mode. In Binary Command mode, you can also send byte array `0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x48 x04` to switch to AT Command mode.

**Custom Mode to AT Command**

`AT+ATM` command on a Serial Port will switch its serial operating mode to AT Command mode.

During AT mode, the RUI3 powered device is compatible to WisToolBox.

[WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) is a software tool that setups the LoRa parameters and configurations of the RUI3-powered device and also manages firmware updates.

### Devices that supports RUI3 AT Commands

| RAK Modules                                                                                        |
| -------------------------------------------------------------------------------------------------- |
| [RAK4630](/Product-Categories/WisDuo/RAK4630-Module/Overview)                                      |
| [RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Overview)                                       |
| [RAK3172](/Product-Categories/WisDuo/RAK3172-Module/Overview)                                      |
| [RAK3272S](/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Overview)                            |
| [RAK3372 / RAK3172 Evaluation Board](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Overview) |
| [RAK3172-SiP](/Product-Categories/WisDuo/RAK3172-SiP/Overview)                                     |
| [RAK3272-SiP](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Overview)                      |

### RUI3 AT Command Format

The AT commands have the standard format `AT+XXX`, with `XXX` denoting the command.
There are four available command behaviors:
* `AT+XXX?` provides a short description of the given command, for example, `AT+DEVEUI?`.
* `AT+XXX` is used to run a command, such as `AT+JOIN`.
* `AT+XXX=?` is used to get the value of a given command, for example, `AT+CFS=?`.
* `AT+XXX=<value>` is used to provide a value to a command, for example, `AT+CFM=1`.

The output format is as below:

```
AT+XXX=<value><CR><LF>
<CR><LF><Status<CR><LF>
```

:::tip 📝 NOTE:

- `<CR>` stands for “carriage return” and `<LF>` stands for “line feed”.
- The `<value><CR><LF>` output is returned whenever the “help `AT+XXX?`” or the “get `AT+XXX=?`” commands are run.
:::


When no value is returned, the `<value><CR><LF>` output is not returned at all. Every command (except for `ATZ` used for MCU reset) returns a status string, which is preceded and followed by `<CR><LF>` in a `<CR><LF><Status<CR><LF>` format.

The possible status codes are:

* `OK`: command runs correctly without error.
* `AT_ERROR`: generic error.
* `AT_PARAM_ERROR`: a parameter of the command is wrong
* `AT_BUSY_ERROR`: the LoRa® network is busy, so the command has not been completed.
* `AT_TEST_PARAM_OVERFLOW`: the parameter is too long.
* `AT_NO_CLASSB_ENABLE`: End-node has not yet switched in Class B.
* `AT_NO_NETWORK_JOINED`: the LoRa® network has not been joined yet.
* `AT_RX_ERROR`: error detection during the reception of the command.

More details on each command description and examples are given in the remainder of this section.


## Content
- [RUI3 AT Command Manual](#rui3-at-command-format)
  - [Content](#content)
  - [General Commands](#general-commands)
    - [AT](#at)
    - [AT?](#at-1)
    - [ATE](#ate)
    - [ATZ](#atz)
    - [ATR](#atr)
    - [AT+BOOT](#at-boot)
    - [AT+SN](#at-sn)
    - [AT+BAT](#at-bat)
    - [AT+BUILDTIME](#at-buildtime)
    - [AT+REPOINFO](#at-repoinfo)
    - [AT+VER](#at-ver)
    - [AT+CLIVER](#at-cliver)
    - [AT+APIVER](#at-apiver)
    - [AT+HWMODEL](#at-hwmodel)
    - [AT+HWID](#at-hwid)
    - [AT+SLEEP](#at-sleep)
  - [Miscellaneous AT Command](#miscellaneous-at-command)
    - [AT+LOCK](#at-lock)
    - [AT+PWORD](#at-pword)
    - [AT+BAUD](#at-baud)
    - [AT+ATM](#at-atm)
    - [AT+APM](#at-apm)
  - [LoRaWAN Keys and IDs](#lorawan-keys-and-ids)
    - [AT+DEVEUI](#at-deveui)
    - [AT+APPEUI](#at-appeui)
    - [AT+APPKEY](#at-appkey)
    - [AT+DEVADDR](#at-devaddr)
    - [AT+APPSKEY](#at-appskey)
    - [AT+NWKSKEY](#at-nwkskey)
    - [AT+NETID](#at-netid)
  - [LoRaWAN Joining and Sending](#lorawan-joining-and-sending)
    - [AT+CFM](#at-cfm)
    - [AT+CFS](#at-cfs)
    - [AT+JOIN](#at-join)
    - [AT+NJM](#at-njm)
    - [AT+NJS](#at-njs)
    - [AT+RECV](#at-recv)
    - [AT+SEND](#at-send)
    - [AT+LPSEND](#at-lpsend)
    - [AT+RETY](#at-rety)
  - [LoRaWAN Network Management](#lorawan-network-management)
    - [AT+ADR](#at-adr)
    - [AT+CLASS](#at-class)
    - [AT+DCS](#at-dcs)
    - [AT+DR](#at-dr)
    - [AT+JN1DL](#at-jn1dl)
    - [AT+JN2DL](#at-jn2dl)
    - [AT+PNM](#at-pnm)
    - [AT+RX1DL](#at-rx1dl)
    - [AT+RX2DL](#at-rx2dl)
    - [AT+RX2DR](#at-rx2dr)
    - [AT+RX2FQ](#at-rx2fq)
    - [AT+TXP](#at-txp)
    - [AT+LINKCHECK](#at-linkcheck)
  - [Class B Mode](#class-b-mode)
    - [AT+PGSLOT](#at-pgslot)
    - [AT+BFREQ](#at-bfreq)
    - [AT+BTIME](#at-btime)
    - [AT+BGW](#at-bgw)
    - [AT+LTIME](#at-ltime)
  - [Asynchronous Events](#asynchronous-events)
  - [LoRaWAN Information](#lorawan-information)
    - [AT+RSSI](#at-rssi)
    - [AT+ARSSI](#at-arssi)
    - [AT+SNR](#at-snr)
  - [Supplement Command](#supplement-command)
    - [AT+MASK](#at-mask)
    - [AT+CHE](#at-che)
    - [AT+CHS](#at-chs)
    - [AT+BAND](#at-band)
  - [P2P Instructions](#p2p-instructions)
    - [AT+NWM](#at-nwm)
    - [AT+PFREQ](#at-pfreq)
    - [AT+PSF](#at-psf)
    - [AT+PBW](#at-pbw)
    - [AT+PCR](#at-pcr)
    - [AT+PPL](#at-ppl)
    - [AT+PTP](#at-ptp)
    - [AT+PSEND](#at-psend)
    - [AT+PRECV](#at-precv)
    - [AT+ENCRY](#at-encry)
    - [AT+ENCKEY](#at-enckey)
    - [AT+P2P](#at-p2p)
  - [LoRaWAN Multicast Group](#lorawan-multicast-group)
    - [AT+ADDMULC](#at-addmulc)
    - [AT+RMVMULC](#at-rmvmulc)
    - [AT+LSTMULC](#at-lstmulc)
  - [RF Test](#rf-test)
    - [AT+TRSSI](#at-trssi)
    - [AT+TTONE](#at-ttone)
    - [AT+TTX](#at-ttx)
    - [AT+TRX](#at-trx)
    - [AT+TCONF](#at-tconf)
    - [AT+TTH](#at-tth)
    - [AT+TOFF](#at-toff)
    - [AT+CERTIF](#at-certif)

## General Commands

This section describes the generic commands related to the device.

### AT

Description: Attention

This command is used to check that the link is working properly.

| Command | Input Parameter | Return Value | Return Code |
| ------- | --------------- | ------------ | ----------- |
| `AT`    | -               | -            | OK          |

[Back](#content)

### AT?

Description: Short help

This command provides short help for all the supported commands.

| Command | Input Parameter | Return Value                                                                                                                                                                                  | Return Code |
| ------- | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| `AT?`   | -               | -  `AT+<CMD>?`: help on `<CMD>` <br> -  `AT+<CMD>`: run `<CMD>` <br> -  `AT+<CMD>=<value>`: set the value <br> - `AT+<CMD>=?`: get the value <br> - *followed by the details of all commands* | OK          |

[Back](#content)

### ATE

Description: AT Command Echo

This command is used to see the AT command input on the Serial Terminal.

| Command | Input Parameter | Return Value                                | Return Code |
| ------- | --------------- | ------------------------------------------- | ----------- |
| `AT`    | -               | -                                           | OK          |
| `AT?`   | -               | `ATE`: toggle the At Command echo available | OK          |

**Example:**

```
ATE
OK
```

[Back](#content)

### ATZ

Description: MCU Reset

This command is used to trigger a reset on the module.

| Command | Input Parameter | Return Value                                        | Return Code |
| ------- | --------------- | --------------------------------------------------- | ----------- |
| `ATZ?`  | -               | `ATZ`: triggers a reset on the MCU.                 | OK          |
| `ATZ`   | -               | No return value and return code. The module resets. | -           |

**Example:**

```
ATZ
RAKWireless Example
------------------------------------------------------
Current Work Mode: LoRaWAN.

```

[Back](#content)
### ATR

Description: Restore default parameters

This command is used to restore all parameters to the initial default values.

| Command | Input Parameter | Return Value                      | Return Code |
| ------- | --------------- | --------------------------------- | ----------- |
| `ATR?`  | -               | `ATR`: restore default parameters | OK          |
| `ATR`   | -               | No return value.                  | OK          |

[Back](#content)

### AT+BOOT

Description: Bootloader mode

This command causes the device to enter Bootloader mode to upgrade firmware.

| Command    | Input Parameter | Return Value                                          | Return Code |
| ---------- | --------------- | ----------------------------------------------------- | ----------- |
| `AT+BOOT?` | -               | `AT+BOOT`: enter bootloader mode for firmware upgrade | OK          |
| `AT+BOOT` or `AT+BOOT=`  | -               | `<BOOT MODE>`                                         |             |

**Example:**

```
AT+BOOT
<BOOT MODE>
```

:::tip 📝 NOTE:
To escape BOOT MODE, execute `at+run` command. This is will end the BOOT MODE then restart the RUI3 device.

`AT_BUSY_ERROR` is returned when the bootloader process is already running.
:::

[Back](#content)

### AT+SN

Description: Serial number

This command can read the device serial number.

| Command   | Input  Parameter | Return Value                                               | Return Code |
| --------- | ---------------- | ---------------------------------------------------------- | ----------- |
| `AT+SN?`  | -                | `AT+SN`: get the serial number of the device (max 18 char) | OK          |
| `AT+SN=?` | -                | `<1-18char>`                                               | OK          |


**Example:**

```
AT+SN=?
9181004E20900057
OK
```

[Back](#content)


### AT+BAT

Description: Battery level

This command is used to access the battery level.

| Command    | Input Parameter | Return Value                           | Return Code |
| ---------- | --------------- | -------------------------------------- | ----------- |
| `AT+BAT?`  | -               | `AT+BAT`: get the battery level (volt) | OK          |
| `AT+BAT=?` | -               | `AT+BAT`= `<float>`                    | OK          |

**Example:**

```
AT+BAT=?
AT+BAT=0.971191
OK
```

[Back](#content)


### AT+BUILDTIME

Description: Build time of the firmware

This command is used to access the build date and time of the firmware.

| Command          | Input Parameter | Return value                                        | Return code           |
| ---------------- | --------------- | --------------------------------------------------- | --------------------- |
| `AT+BUILDTIME?`  | -               | `AT+BUILDTIME`:  get the build time of the firmware | OK                    |
| `AT+BUILDTIME=?` | -               | `AT+BUILDTIME`=*date-time of build*                 | OK <br> AT_BUSY_ERROR |

**Example:**

```
AT+BUILDTIME=?
AT+BUILDTIME=20220324-153044
OK
```

[Back](#content)


### AT+REPOINFO

Description: Repo information

This command is used to access the Repo Information of the firmware.

| Command         | Input Parameter | Return value                                     | Return code |
| --------------- | --------------- | ------------------------------------------------ | ----------- |
| `AT+REPOINFO?`  | -               | `AT+REPOINFO`: get the commit ID of the firmware | OK          |
| `AT+REPOINFO=?` | -               | `AT+REPOINFO`=*firmware repo information*        | OK          |

**Example:**

```
AT+REPOINFO=?
AT+REPOINFO=713fbcca:6ecbb45f:e198f620:b43f5395:4a6defb9:c9438443:5ccb8eec:70e5bb3f
OK
```

[Back](#content)


### AT+VER

Description: Version of the firmware

This command is used to access the version of the firmware.

| Command    | Input Parameter | Return Value                              | Return Code |
| ---------- | --------------- | ----------------------------------------- | ----------- |
| `AT+VER?`  | -               | `AT+VER`: get the version of the firmware | OK          |
| `AT+VER=?` | -               | `AT+VER`=*firmware version*               | OK          |

**Example:**

```
AT+VER=?
AT+VER=3.2.0-p2_22q1_final.87
OK
```

[Back](#content)


### AT+CLIVER

Description: Version of the AT Command

This command is used to access the version of the AT command.

| Command       | Input Parameter | Return Value                                   | Return Code |
| ------------- | --------------- | ---------------------------------------------- | ----------- |
| `AT+CLIVER?`  | -               | `AT+CLIVER`: get the version of the AT command | OK          |
| `AT+CLIVER=?` | -               | `AT+CLIVER`=*x.y.z*                            | OK          |

**Example:**

```
AT+CLIVER=?
AT+CLIVER=1.5.2
OK
```

[Back](#content)


### AT+APIVER

Description: Version of the API

This command is used to access the version of the RUI API.

| Command       | Input Parameter | Return Value                                | Return Code |
| ------------- | --------------- | ------------------------------------------- | ----------- |
| `AT+APIVER?`  | -               | `AT+APIVER`: get the version of the RUI API | OK          |
| `AT+APIVER=?` | -               | `AT+APIVER`=*x.y.z*                         | OK          |

**Example:**

```
AT+APIVER=?
AT+APIVER=3.0.0
OK
```

[Back](#content)


### AT+HWMODEL

Description: The string of the hardware model

This command is used to access the string of the hardware model.

| Command        | Input Parameter | Return Value                                       | Return Code |
| -------------- | --------------- | -------------------------------------------------- | ----------- |
| `AT+HWMODEL?`  | -               | `AT+HWMODEL`: get the string of the hardware model | OK          |
| `AT+HWMODEL=?` | -               | `AT+HWMODEL`=*module model*                        | OK          |

**Example:**

```
AT+HWMODEL=?
AT+HWMODEL=rak4631
OK
```

[Back](#content)


### AT+HWID

Description: The string of the hardware ID

This command is used to access the string of the hardware mode.

| Command     | Input Parameter | Return Value                                 | Return Code |
| ----------- | --------------- | -------------------------------------------- | ----------- |
| `AT+HWID?`  | -               | `AT+HWID`: get the string of the hardware ID | OK          |
| `AT+HWID=?` | -               | `AT+HWID`=*module hw ID*                     | OK          |

**Example:**

```
AT+HWID=?
AT+HWID=nrf52840
OK
```

[Back](#content)


### AT+SLEEP

Description: Sleep mode

This command enables sleep mode.

| Command            | Input Parameter | Return Value                                           | Return Code            |
| ------------------ | --------------- | ------------------------------------------------------ | ---------------------- |
| `AT+SLEEP?`        | -               | `AT+SLEEP`: enter sleep mode for a period of time (ms) | OK                     |
| `AT+SLEEP=<Input>` | `<integer>`     | -                                                      | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+SLEEP=1000
OK
```
:::tip 📝 NOTE
- AT_PARAM_ERROR is returned when setting wrong or malformed value.
- `<Input>`: 1 decimal integer and the range of values is 1~(2<sup>32</sup> -1).
:::

[Back](#content)


## Miscellaneous AT Command

These commands are related to device command configurations.

### AT+LOCK

Description: Lock the AT Command serial port

This command locks the AT command serial port.

| Command                 | Input Parameter | Return Value                    | Return Code |
| ----------------------- | --------------- | ------------------------------- | ----------- |
| `AT+LOCK?`              | -               | `AT+LOCK`: lock the serial port | OK          |
| `AT+LOCK` or `AT+LOCK=` | -               | -                               | -           |


:::tip 📝 NOTE
 - If you input the `AT+LOCK` or `AT+LOCK=` command, it will lock the serial port.
 - The default password is '00000000' and can be changed via the `AT+PWORD` command.
:::

**Example:**
```
AT
OK

AT+LOCK

AT+VER=?
COMMAND_LOCKED

00000000

AT+VER=?
3.1.0-p1_21q4_rc2.50
OK
```


[Back](#content)


### AT+PWORD

Description: Set the AT Command serial port password

This command sets the password for locking the AT command serial port.

| Command            | Input Parameter   | Return Value                                     | Return Code |
| ------------------ | ----------------- | ------------------------------------------------ | ----------- |
| `AT+PWORD?`        | -                 | `AT+PWORD`: set the serial port locking password | OK          |
| `AT+PWORD=<input>` | `<1-8 character>` | -                                                | OK          |

**Example:**

```
AT+PWORD=~!@pword
OK
```
:::tip 📝 NOTE
 - Any printable characters. `<Input>`: 1-8 characters.
:::

[Back](#content)


### AT+BAUD

Description: Set the serial port baud rate

This command sets the serial port baud rate.

| Command           | Input Parameter | Return Value                                    | Return Code            |
| ----------------- | --------------- | ----------------------------------------------- | ---------------------- |
| `AT+BAUD?`        | -               | `AT+BAUD`: get or set the serial port baud rate | OK                     |
| `AT+BAUD=<Input>` | `<integer>`     | -                                               | OK <br> AT_PARAM_ERROR |


**Example:**

```
AT+BAUD=?
AT+BAUD=115200
OK

AT+BAUD=921600
AT_PARAM_ERROR
```

:::tip 📝 NOTE
 - `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
 - `<Input>`: 1 decimal integer and the range of values is 1~2<sup>32</sup>.
:::

[Back](#content)


### AT+ATM

Description: AT Command mode

This command provides a way to switch to AT command mode.

| Command   | Input Parameter | Return Value                        | Return Code |
| --------- | --------------- | ----------------------------------- | ----------- |
| `AT+ATM?` | -               | `AT+ATM`: switch to AT command mode | OK          |
| `AT+ATM`  | -               | -                                   | OK          |

:::tip 📝 NOTE

AT Command mode is the default setting of RUI3 devices. For direct use of RUI3 API, you need to use API mode to be set via `AT+APM`.

:::

[Back](#content)


### AT+APM

Description: API mode

This command provides a way to switch to API mode.

| Command   | Input Parameter | Return Value                 | Return Code |
| --------- | --------------- | ---------------------------- | ----------- |
| `AT+APM?` | -               | `AT+APM`: switch to API mode | OK          |
| `AT+APM`  | -               | -                            | OK          |

:::tip 📝 NOTE
This command is used to change `AT+ATM` to `AT+APM` mode.
If it has been changed, use the recover commands to roll back to `AT+ATM` mode.
**Windows OS & Commands Prompt:** `copy recovery.bin COM4 /B`
**Linux OS & Terminal:** `echo -e '\x7E\x00\x04\x01\x00\x00\x00\x02\x48\x04' > /dev/ttyACM0`
:::

[Back](#content)


## LoRaWAN Keys and IDs

This section describes the commands related to the activation of the end device. EUI's and Keys are MSB first.

### AT+DEVEUI

Description: Device EUI

This command is used to access the unique end-device ID.

| Command             | Input Parameter | Return Value                                             | Return Code            |
| ------------------- | --------------- | -------------------------------------------------------- | ---------------------- |
| `AT+DEVEUI?`        | -               | `AT+DEVEUI`:  get or set the device EUI (8 bytes in hex) | OK                     |
| `AT+DEVEUI=?`       | -               | < 8 hex >                                                | OK                     |
| `AT+DEVEUI=<Input>` | < 8 hex >       | -                                                        | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+DEVEUI=?
AT+DEVEUI=1122334455667788
OK

AT+DEVEUI=1122334455667788
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- Keys are MSB first. `<Input>`: 16 digit length, character 0-9, a-f, A-F only, representing eight (8) hexadecimal numbers.
:::

[Back](#content)


### AT+APPEUI

Description: Application identifier

This command is used to access the unique application identifier.

| Command             | Input Parameter | Return Value                                                 | Return Code            |
| ------------------- | --------------- | ------------------------------------------------------------ | ---------------------- |
| `AT+APPEUI?`        | -               | `AT+APPEUI`: get or set the application EUI (8 bytes in hex) | OK                     |
| `AT+APPEUI=?`       | -               | < 8 hex >                                                    | OK                     |
| `AT+APPEUI=<Input>` | < 8 hex >       | -                                                            | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+APPEUI=0102030405060708
OK

AT+APPEUI=010203040506070809
AT_PARAM_ERROR

AT+APPEUI=?
AT+APPEUI=0102030405060708
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- Keys are MSB first. `<Input>`: 16 digit length, character 0-9, a-f, A-F only, representing eight (8) hexadecimal numbers.
:::

[Back](#content)


### AT+APPKEY

Description: Application Key

This command is used to access the application key.


| Command             | Input Parameter | Return Value                                                  | Return Code            |
| ------------------- | --------------- | ------------------------------------------------------------- | ---------------------- |
| `AT+APPKEY?`        | -               | `AT+APPKEY`: get or set the application key (16 bytes in hex) | OK                     |
| `AT+APPKEY=?`       | -               | < 8 hex >                                                     | OK                     |
| `AT+APPKEY=<Input>` | < 16 hex >      | -                                                             | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+APPKEY=01020AFBA1CD4D20010230405A6B7F88
OK

AT+APPKEY=01020AFBA1CD4D20010230405A6B7F
AT_PARAM_ERROR

AT+APPKEY=?
AT+APPKEY=01020AFBA1CD4D20010230405A6B7F88
OK
```

:::tip 📝 NOTE:
 - `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
 - Keys are MSB first. `<Input>`: 32 digit length, character 0-9, a-f, A-F only, representing 16 hexadecimal numbers.
:::

[Back](#content)



### AT+DEVADDR

Description: Device Address

This command is used to access the device address.

| Command              | Input Parameter | Return Value                                                  | Return Code            |
| -------------------- | --------------- | ------------------------------------------------------------- | ---------------------- |
| `AT+DEVADDR?`        | -               | ` AT+DEVADDR`: get or set the device address (4 bytes in hex) | OK                     |
| `AT+DEVADDR=?`       | -               | < 4 hex >                                                     | OK                     |
| `AT+DEVADDR=<Input>` | < 4 hex >       | -                                                             | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+DEVADDR=01020A0B
OK

AT+DEVADDR=?
AT+DEVADDR=01020A0B
OK
```

:::tip 📝 NOTE:
 - `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
 - Keys are MSB first. `<Input>`: 8 digit length, character 0-9, a-f, A-F only, representing four (4) hexadecimal numbers.
:::

[Back](#content)


### AT+APPSKEY

Description: Application Session Key

This command is used to set the application session key.

| Command              | Input Parameter | Return Value                                          | Return Code            |
| -------------------- | --------------- | ----------------------------------------------------- | ---------------------- |
| `AT+APPSKEY?`        | -               | `AT+APPSKEY`: get or set the application session key. | OK                     |
| `AT+APPSKEY=<Input>` | < 16 hex >      |                                                       | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F88
OK

AT+APPSKEY=01020AFBA1CD4D20010230405A6B7F
AT_PARAM_ ERROR
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- Keys are MSB first. `<Input>`: 32 digit length, character 0-9, a-f, A-F only, representing 16 hexadecimal numbers.

:::

[Back](#content)


### AT+NWKSKEY

Description: Network Session Key

This command is used to get or set the network session key.

| Command              | Input Parameter | Return Value                                                       | Return Code            |
| -------------------- | --------------- | ------------------------------------------------------------------ | ---------------------- |
| `AT+NWKSKEY?`        | -               | `AT+NWKSKEY`: get or set the network session key (16 bytes in hex) | OK                     |
| `AT+NWKSKEY=?`       | -               | `AT+NWKSKEY`=< 16 hex >                                            | OK                     |
| `AT+NWKSKEY=<Input>` | < 16 hex >      | -                                                                  | OK <br> AT_PARAM_ERROR |


**Example:**
```
AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F88
OK

AT+NWKSKEY=?
AT+NWKSKEY=01020AFBA1CD4D20010230405A6B7F88
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- Keys are MSB first. `<Input>`: 32 digit length, character 0-9, a-f, A-F only, representing 16 hexadecimal numbers.
:::

[Back](#content)



### AT+NETID

Description: Network ID (NetID)

This command is used to access the network identifier (NetID) of 3 octets.

| Command      | Input Parameter | Return Value                                                   | Return Code |
| ------------ | --------------- | -------------------------------------------------------------- | ----------- |
| `AT+NETID?`  | -               | `AT+NETID`: get or set the network ID (NetID) (3 bytes in hex) | OK          |
| `AT+NETID=?` | -               | `AT+NETID`=< 3 hex >                                           | OK          |

**Example:**

```
AT+NETID=?
AT+NETID=000001
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- Keys are MSB first. **Return Value:** 6-digit length, character 0-9, a-f, A-F only, representing three (3) hexadecimal numbers.
:::

[Back](#content)

## LoRaWAN Joining and Sending

This section describes the commands related to the join procedure and data payload.

### AT+CFM

Description: Confirm Mode

This command is used to configure the uplink payload to be confirmed or unconfirmed type.

| Command          | Input Parameter | Return Value                                     | Return Code            |
| ---------------- | --------------- | ------------------------------------------------ | ---------------------- |
| `AT+CFM?`        | -               | `AT+CFM`: get or set the confirmation mode (0-1) | OK                     |
| `AT+CFM=?`       | -               | `AT+CFM`= (0 or 1)                               | OK                     |
| `AT+CFM=<Input>` | 0 or 1          | -                                                | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+CFM=1
OK

AT+CFM=?
AT+CFM=1
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the **default value is 0.** <br>
`AT+CFS=?` is used to know whether the last sent message has been confirmed or not.
When the confirmation mode is 1, each sent message must be confirmed FAILED or OK.<br>
e.g.
```
?>at+send=12:123456
?>+EVT: SEND CONFIRMED FAILED
?>at+send=12:123456
?>+EVT: SEND CONFIRMED OK
```
:::

[Back](#content)


### AT+CFS

Description: Confirm Status

This command is used to access the status of the last **SEND** command.

| Command    | Input Parameter | Return Value                                                                           | Return Code |
| ---------- | --------------- | -------------------------------------------------------------------------------------- | ----------- |
| `AT+CFS?`  | -               | `AT+CFS`: get the confirmation status of the last `AT+SEND` (0 = failure, 1 = success) | OK          |
| `AT+CFS=?` | -               | 0 or 1                                                                                 | OK          |


**Example:**

```
AT+CFS=?
AT+CFS=0
OK
```

:::tip 📝 NOTE:
This command works together with `AT+CFM=1`, which is the confirm mode configuration. If the return of this command is `1`, the last confirmed uplink is successful. If it is `0`, then the last confirmed uplink attempt failed. This command is read only, and the default value on device startup is `0`.
:::

[Back](#content)


### AT+JOIN

Description: Join LoRaWAN Network

This command is used to join a LoRaWAN network.

| Command                     | Input Parameter                                                                                   | Return Value                               | Return Code         |
| --------------------------- | ------------------------------------------------------------------------------------------------- | ------------------------------------------ | ------------------- |
| `AT+JOIN?`                  | -                                                                                                 | `AT+JOIN`: join network                    | OK                  |
| `AT+JOIN=?`                 | -                                                                                                 | `AT+JOIN`=*Param1: Param2: Param3: Param4* | OK or AT_BUSY_ERROR |
| `AT+JOIN=<Input Parameter>` | *Param1:Param2:Param3:Param4*                                                                     | -                                          | OK                  |
|                             | *Param1* = **Join command**: 1 for joining the network, 0 for stop joining.                       |                                            |                     |
|                             | *Param2* = **Auto-Join config**: 1 for Auto-join on power up), 0 for no auto-join. (0 is default) |                                            |                     |
|                             | *Param3* = **Reattempt interval**: 7 - 255 seconds (8 is default).                                |                                            |                     |
|                             | *Param4* = **No. of join attempts**: 0 - 255 (0 is default).                                      |                                            |                     |

:::tip 📝 NOTE:
This is an asynchronous command. `OK` means that the device is joining. The completion of the JOIN can be verified with the `AT+NJS=?` command.

Parameters of `AT+JOIN` command are optional. You can use `AT+JOIN` directly to join the LoRaWAN network. If no parameters are configured, the device will use the default values.

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

If joining fails, make sure your device is within the coverage of the gateway. Also, ensure that the RUI3 LoRaWAN device is in LoRaWAN mode via `AT+NWM=1`. The region is correct via `AT+BAND`, and the EUIs and keys are correct.

:::


[Back](#content)


### AT+NJM

Description: Network Join Mode

This command is used to access the network join mode.

| Command          | Input Parameter | Return Value                                                   | Return Code            |
| ---------------- | --------------- | -------------------------------------------------------------- | ---------------------- |
| `AT+NJM?`        | -               | `AT+NJM`: get or set the network join mode (0 = ABP, 1 = OTAA) | OK                     |
| `AT+NJM`         | -               | -                                                              | OK                     |
| `AT+NJM=<Input>` | 0 or 1          | -                                                              | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+NJM=?
0
OK

AT+NJM=1
OK

AT+NJM=2
OK
AT_PARAM_ERROR
```
:::tip 📝 NOTE:

- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is **1.**
:::

[Back](#content)


### AT+NJS

Description: LoRa® Network Join status

This command is used to access the current activation status of the device. It shows if the device joined or not in a LoRaWAN network.

| Command    | Input Parameter | Return Value                                               | Return Code |
| ---------- | --------------- | ---------------------------------------------------------- | ----------- |
| `AT+NJS?`  | -               | `AT+NJS`: get the join status (0 = not joined, 1 = joined) |
| OK         |
| `AT+NJS=?` | -               | `AT+NJS`= (0 or 1)                                         | OK          |


**Example:**

```
AT+NJS=?
AT+NJS=0
OK

AT+NJS=?
AT+NJS=1
OK
```
:::tip 📝 NOTE:
The command will return `1` if the device has successfully joined the network and `0` if the device hasn't joined the network yet.
:::

[Back](#content)


### AT+RECV

Description: Last received data

This command is used to access the last received data in hex format.

| Command     | Input Parameter | Return Value                                          | Return Code |
| ----------- | --------------- | ----------------------------------------------------- | ----------- |
| `AT+RECV?`  | -               | `AT+RECV`: print the last received data in hex format | OK          |
| `AT+RECV=?` | -               | `AT+RECV`=`<port>:<payload> `                         | OK          |

Where:
- `<port>`: 1 decimal integer and the range of values is 1~233.
- `<payload>`: 2~500 digit length, must be an even number of digits and character 0-9, a-f, A-F only,
representing 1~256 hexadecimal numbers.

**Example:**

```
AT+RECV=?
AT+RECV=45:112233
OK
```


This command returns the last received data in a form, along with the port on which it was received. The format of the output is as follows:

```
<port>:<payload><CR><LF>
<CR><LF>OK<CR><LF>
```

When called twice, without new data received between the calls, the second `AT+RECV=?` returns an empty value as shown below:

```
0:
OK
```

[Back](#content)


### AT+SEND

Description: Send data

This command provides the way to send data on a dedicated port number.

| Command           | Input Parameter    | Return Value                                         | Return Code                                                           |
| ----------------- | ------------------ | ---------------------------------------------------- | --------------------------------------------------------------------- |
| `AT+SEND?`        | -                  | `AT+SEND`: send data along with the application port | OK                                                                    |
| `AT+SEND=<input>` | `<port>:<payload>` | -                                                    | OK <br> AT_PARAM_ERROR  <br> AT_BUSY_ERROR  <br> AT_NO_NETWORK_JOINED |

**Where:**
* `<port>`: 1 decimal integer and the range of values is 1~233.
* `<payload>`: 2~500-digit length, must be an even number of digits and character 0-9, a-f, A-F only,
representing 1~256 hexadecimal numbers.

**Example:**

```
AT+SEND=12:112233
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` R is returned when setting wrong or malformed value.
- `AT_BUSY_ERROR` is returned when the previous send is not complete (send waiting for duty cycle, rx window not consumed).
- `AT_NO_NETWORK_JOINED` is returned when the network is not yet joined.
:::

[Back](#content)


### AT+LPSEND

Description: Long packet data

This command provides the way to send long packet text data.

| Command             | Input Parameter | Return Value                                               | Return Code            |
| ------------------- | --------------- | ---------------------------------------------------------- | ---------------------- |
| `AT+LPSEND?`        | -               | `AT+LPSEND`: send long packet data (Maximum is 1000 bytes) | OK                     |
| `AT+LPSEND=<Input>` | -               | `<port>:<ack>:<payload> `                                  | OK <br> AT_PARAM_ERROR |

**Where:**
`<port>`: application port to be transmitted
`<ack>`;
– 0: indicates this is an unconfirmed message;
– 1: indicates this is a confirmed message;
`<payload>`: payload in hexadecimal format strings (maximum length is 1000 bytes).

**Example:**

```
AT+LPSEND=2:1:123456
OK
```
:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- This command is only supported by WisGate Edge gateways and their internal LoRaWAN server.
:::

[Back](#content)



### AT+RETY

Description: Confirm packet retransmission

This command sets the number of retransmissions of confirmed packet data.

| Command           | Input Parameter   | Return Value                                                        | Return Code            |
| ----------------- | ----------------- | ------------------------------------------------------------------- | ---------------------- |
| `AT+RETY?`        | -                 | `AT+RETY`: set the number of retransmissions of Confirm packet data | OK                     |
| `AT+RETY=?`       | -                 | `AT+RETY`=[0,1,2,3,4,5,6,7]                                         | OK                     |
| `AT+RETY=<input>` | [0,1,2,3,4,5,6,7] | -                                                                   | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+RETY=?
AT+RETY=3
OK

AT+RETY=2
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 0, and the retry cycle range of values is 0~7.
:::


[Back](#content)

## LoRaWAN Network Management

This section provides a set of commands for network management.

### AT+ADR

Description: Adaptive Rate

This command is used to access the adaptive data rate.

| Command          | Input Parameter | Return Value                                                          | Return Code            |
| ---------------- | --------------- | --------------------------------------------------------------------- | ---------------------- |
| `AT+ADR?`        | -               | `AT+ADR`: get or set the adaptive data rate setting (0 = off, 1 = on) | OK                     |
| `AT+ADR=?`       | -               | `AT+ADR`=(0 or 1)                                                     | OK                     |
| `AT+ADR=<Input>` | 0 or 1          | -                                                                     | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+ADR=?
AT+ADR=1
OK

```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
-  In this case, the default value is 1.
:::

[Back](#content)


### AT+CLASS

Description: LoRa® Class

This command is used to access the LoRaWAN® class.

| Command                      | Input Parameter | Return Value                                                                    | Return Code          |
| ---------------------------- | --------------- | ------------------------------------------------------------------------------- | -------------------- |
| `AT+CLASS?`                  | -               | `AT+CLASS`: get or set the device class (A = class A, B = class B, C = class C) |
| OK                           |
| `AT+CLASS=?`                 | -               | `AT+CLASS`=(A, B, or C)                                                         | OK                   |
| `AT+CLASS=<Input Parameter>` | A, B, or C      | -                                                                               | OK or AT_PARAM_ERROR |

**Examples**:
```
AT+CLASS=A
OK

AT+CLASS=?
AT+CLASS=A
OK
```

:::tip 📝 NOTE:

When operating in CLASS B, more return value is shown, that shows the current state of Class B operation:

| Class B Status | Description      |
| -------------- | ---------------- |
| `B,S0`         | DeviceTimeReq    |
| `B,S1`         | Beacon Searching |
| `B,S2`         | Beacon Locked    |
| `B,S3`         | Beacon Failed    |


**Example**:
```
AT+CLASS=B
OK

AT+CLASS=?
AT+CLASS=B,S0
OK
```
:::

[Back](#content)


### AT+DCS

Description: Duty cycle settings

| Command          | Input Parameter | Return Value                                                                 | Return Code            |
| ---------------- | --------------- | ---------------------------------------------------------------------------- | ---------------------- |
| `AT+DCS?`        | -               | `AT+DCS`: get or set the ETSI duty cycle setting (0 = disabled, 1 = enabled) |
| OK               |
| `AT+DCS=?`       | -               | `AT+DCS`=(0 or 1)                                                            | OK                     |
| `AT+DCS=<Input>` | 0 or 1          | -                                                                            | OK <br> AT_PARAM_ERROR |


**Example:**

```
AT+DCS=?
AT+DCS=1
OK

AT+DCS=1
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the **EU868 default value is 1.**
It depends on the region to disable or enable, and it can only be read.
:::

[Back](#content)


### AT+DR

Description: Data rate

This command is used to access and configure data rate settings.

| Command         | Input Parameter | Return Value                      | Return Code            |
| --------------- | --------------- | --------------------------------- | ---------------------- |
| `AT+DR?`        | -               | `AT+DR`: get or set the data rate | OK                     |
| `AT+DR=?`       | -               | `AT+DR`=(0,1,2,3,4,5,6,7)         | OK                     |
| `AT+DR=<Input>` | 0,1,2,3,4,5,6,7 | -                                 | OK <br> AT_PARAM_ERROR |


**Example:**

```
AT+DR=?
AT+DR=3
OK

AT+DR=2
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
-  In this case, the EU868 default value is 0. <br>
 **EU433 / RU864 / IN865 / EU868 / CN470 / KR920** and the data rate range of values is 0-5 (DR0-DR5). <br>
 **AS923** and the data rate range of values is 2-5 (DR2-DR5). <br>
 **US915** and the data rate range of values is 0-4 (DR0-DR4). <br>
 **AU915** and the data rate range of values is 0-6 (DR0-DR6).
 - Complete information about DR parameter on each region can be found on [RUI3 Appendix - LoRaWAN Regional Parameter (Data Rate)](/RUI3/Appendix/#data-rate-by-region).
:::

[Back](#content)


### AT+JN1DL

Description: Join delay on RX window 1

This command is used to access the join delay on RX window 1. The range of acceptable values is 1 to 14 seconds. Whenever `AT+JN1DL` is updated, `AT+JN2DL` is also updated automatically.

| Command            | Input Parameter | Return Value                                                                                          | Return Code                               |
| ------------------ | --------------- | ----------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `AT+JN1DL?`        | -               | `AT+JN1DL`: get or set the join accept delay between the end of TX and the join RX window 1 in second | OK                                        |
| `AT+JN1DL=?`       | -               | `<integer>`                                                                                           | OK <br> AT_BUSY_ERROR                     |
| `AT+JN1DL=<input>` | `<integer>`     | -                                                                                                     | OK <br> AT_PARAM_ERROR <br> AT_BUSY_ERROR |

**Example:**

```
AT+JN1DL=?
AT+JN1DL=5
OK

AT+JN1DL=10
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is **5.** `<Input>`: 1-decimal integer and the range of values is 1~14.
:::

[Back](#content)


### AT+JN2DL

Description: Join delay on RX window 2

This command is used to access the join delay on RX window 2. The range of acceptable values is 2 to 15 seconds. Whenever `AT+JN2DL` is updated, `AT+JN1DL` is also updated automatically.

| Command            | Input Parameter | Return Value                                                                                   | Return Code                               |
| ------------------ | --------------- | ---------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `AT+JN2DL?`        | -               | `AT+JN2DL`: get the join accept delay between the end of TX and the join RX window 2 in second | OK                                        |
| `AT+JN2DL=?`       | -               | `<integer>`                                                                                    | OK <br> AT_BUSY_ERROR                     |
| `AT+JN2DL=<input>` | `<integer>`     | -                                                                                              | OK <br> AT_PARAM_ERROR <br> AT_BUSY_ERROR |

**Example:**

```
AT+JN2DL=?
AT+JN2DL=6
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
:::

[Back](#content)


### AT+PNM

Description: Public network mode

This command is used to access the public network mode.

| Command          | Input Parameter | Return Value                                                   | Return Code            |
| ---------------- | --------------- | -------------------------------------------------------------- | ---------------------- |
| `AT+PNM?`        | -               | `AT+PNM`: get or set the public network mode (0 = off, 1 = on) | OK                     |
| `AT+PNM=?`       | -               | 0 or 1                                                         | OK                     |
| `AT+PNM=<input>` | 0 or 1          | -                                                              | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+PNM=?
AT+PNM=0
OK

AT+PNM=1
OK

AT+PNM=2
AT_PARAM_ERROR
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 1.
:::

[Back](#content)



### AT+RX1DL

Description: Delay of the received window 1

This command is used to access the delay of the received window 1. The range of acceptable values is 1 to 14 seconds. Whenever `AT+RX1DL` is updated, `AT+RX2DL` is also updated automatically.

| Command            | Input Parameter | Return Value                                                                                | Return Code                               |
| ------------------ | --------------- | ------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `AT+RX1DL?`        | -               | `AT+RX1DL`: get or set the delay between the end of TX and the RX window 1 in second (1-15) | OK                                        |
| `AT+RX1DL=?`       | -               | `<integer>`                                                                                 | OK                                        |
| `AT+RX1DL=<input>` | `<integer>`     | -                                                                                           | OK <br> AT_PARAM_ERROR <br> AT_BUSY_ERROR |

**Example:**

```
AT+RX1DL=?
AT+RX1DL=1
OK

AT+RX1DL=10
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 1. `<Input>`: 1-decimal integer and the range of values is 1~14.
:::


[Back](#content)


### AT+RX2DL

Description: Delay of the received window 2

This command is used to access the delay of the received window 2. The range of acceptable values is 2 to 15 seconds. Whenever `AT+RX2DL` is updated, `AT+RX1DL` is also updated automatically.

| Command      | Input Parameter | Return Value                                                                         | Return Code      |
| ------------ | --------------- | ------------------------------------------------------------------------------------ | ---------------- |
| `AT+RX2DL?`  | -               | `AT+RX2DL`: get the delay between the end of TX and the RX window 2 in second (2-16) | OK               |
| `AT+RX2DL=?` | -               | `<integer>`                                                                          | OK AT_BUSY_ERROR |

**Example:**

```
AT+RX2DL=?
AT+RX2DL=2
OK
```

:::tip 📝 NOTE:
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
:::


[Back](#content)

### AT+RX2DR

Description: Data rate of the received window 2

This command is used to access the data rate of received window 2.

| Command            | Input Parameter                        | Return Value                                    | Return Code                               |
| ------------------ | -------------------------------------- | ----------------------------------------------- | ----------------------------------------- |
| `AT+RX2DR?`        | -                                      | `AT+RX2DR`: get or set the RX2 window data rate | OK                                        |
| `AT+RX2DR=?`       | -                                      | [0,1,2,3,4,5,6,7] or [8,9,10,11,12,13]          | OK <br> AT_BUSY_ERROR                     |
| `AT+RX2DR=<input>` | [0,1,2,3,4,5,6,7] or [8,9,10,11,12,13] | -                                               | OK <br> AT_PARAM_ERROR <br> AT_BUSY_ERROR |


**Example:**

```
AT+RX2DR=?
AT+RX2DR=6
OK

AT+RX2DR=5
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
- In this case, the EU868 default value is 0 and the US915 default value is 8. <br>
**EU433 / RU864 / IN865 / EU868 / CN470 / KR920** and the data rate range of values is 0-5 (DR0-DR5). <br>
**AS923** and the data rate range of values is 2-5 (DR2-DR5). <br>
**US915** / **AU915** and the data rate range of values is 8-13 (DR8-DR13).
:::

[Back](#content)


### AT+RX2FQ

Description: Frequency of the received window 2

This command is used to access the frequency of the received window 2.

| Command      | Input Parameter | Return Value                                  | Return Code           |
| ------------ | --------------- | --------------------------------------------- | --------------------- |
| `AT+RX2FQ?`  | -               | `AT+RX2FQ`: get the Rx2 window frequency (Hz) | OK                    |
| `AT+RX2FQ=?` | -               | Frequency in Hz                               | OK <br> AT_BUSY_ERROR |

**Example:**

```
AT+RX2FQ=?
AT+RX2FQ=869535000
OK

```

:::tip 📝 NOTE:
- `AT_BUSY_ERROR` is returned when setting wrong or malformed value.
- In this case, the EU868 default value is 869525000. It depends on the region frequency, and it can only be read.
:::

[Back](#content)


### AT+TXP

Description: Transmit power

This command is used to access the transmit power.

| Command          | Input Parameter | Return Value                                | Return Code            |
| ---------------- | --------------- | ------------------------------------------- | ---------------------- |
| `AT+TXP?`        | -               | `AT+TXP`: get or set the transmitting power | OK                     |
| `AT+TXP=?`       | -               | `<value>`                                   | OK <br> AT_PARAM_ERROR |
| `AT+TXP=<input>` | `<value>`       | -                                           | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+TXP=?
AT+TXP=1
OK

AT+TXP=4
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
- In this case, the TX Power default value is 0. <br>
**EU868 / RU864 / KR920 / AS923 / CN470** and Transmit power range of values is 0-7. <br>
**US915 / AU915** and Transmit power range of values is 0-14. <br>
**EU433** and Transmit power range of values is 0-5. <br>
**IN865** and Transmit power range of values is 0-10.
- Highest power start from 0. Complete information about TXP parameter on each region can be found on [RUI3 Appendix - LoRaWAN Regional Parameter (TX Power)](/RUI3/Appendix/#tx-power-by-region).
:::

[Back](#content)


### AT+LINKCHECK

Description: Verify network link status

This command is used to access and configure the device network link status.

| Command                | Input Parameter | Return value                                                                              | Return code            |
| ---------------------- | --------------- | ----------------------------------------------------------------------------------------- | ---------------------- |
| `AT+LINKCHECK?`        | -               | `AT+LINKCHECK`: get or set the link check setting (0 = disabled, 1 = once, 2 = everytime) | OK                     |
| `AT+LINKCHECK=?`       | -               | [0,1,2]                                                                                   | OK                     |
| `AT+LINKCHECK=<Input>` | [0,1,2]         | -                                                                                         | OK <br> AT_PARAM_ERROR |

Input parameter details:

- 0 - Disable Link Check
- 1 - Execute Link Check just once on the next payload uplink.
- 2 - Module will automatically execute one-time Link Check after every payload uplink.

**Example:**
```
AT+LINKCHECK=?
AT+LINKCHECK=0
OK

AT+LINKCHECK=1
OK

AT+SEND=3:12341234
OK

+EVT:LINKCHECK:0,21,1,-60,11
```

:::tip 📝 NOTE

`LINKCHECK` is a dedicated LoRaWAN MAC command that checks the connectivity status of the end-device to the network. You will have the `LINKCHECK` status reply once the `AT+SEND` command is executed. In case of a failed uplink (regardless if confirmed or unconfirmed), the `LINKCHECK` reply will be `+EVT:LINKCHECK:1,0,0,0,0`.

Reply format: `+EVT:LINKCHECK:Y0,Y1,Y2,Y3,Y4`

- **Y0** represents the result of Link Check
  -	0 – represents the Link Check execute success (+EVT:LINKCHECK:0,0,1,-107,4)
  -	Non-0 – represents the Link Check execute fail (+EVT:LINKCHECK:1,0,0,0,0)
- **Y1** represents the DemodMargin
- **Y2** represents the NbGateways
- **Y3** represents the RSSI
- **Y4** represents the SNR
:::

[Back](#content)


## Class B Mode

This section provides a set of commands for Class B mode management.

### AT+PGSLOT

Description: Periodicity

This command is used to get or set the unicast ping slot periodicity.

| Command             | Input Parameter   | Return Value                                                    | Return Code            |
| ------------------- | ----------------- | --------------------------------------------------------------- | ---------------------- |
| `AT+PGSLOT?`        | -                 | `AT+PGSLOT`: get or set the unicast ping slot periodicity (0-7) | OK                     |
| `AT+PGSLOT=?`       | -                 | [0,1,2,3,4,5,6,7]                                               |                        |
| `AT+PGSLOT=<input>` | [0,1,2,3,4,5,6,7] | -                                                               | OK <br> AT_PARAM_ERROR |

**Example:**

```
AT+PGSLOT=?
AT+PGSLOT=0
OK

AT+PGSLOT=1
OK
```

:::tip 📝 NOTE:
- `AT_PARAM_ERROR` is returned when a join or a send is being processed.
-  In this case, the default value is 0. <br>
`<Input>`: 1 decimal integer and the range of values is 0~7. <br>
**Periodicity** = 0 means that the end device opens a ping slot approximately every second during the beacon_window interval. <br>
**Periodicity** = 7, every 128 seconds, which is the maximum ping period.
:::

[Back](#content)


### AT+BFREQ

Description: Beacon frequency

This command is used to access the current beacon (default broadcast) frequency

| Command      | Input Parameter | Return Value                                             | Return Code |
| ------------ | --------------- | -------------------------------------------------------- | ----------- |
| `AT+BFREQ?`  | -               | `AT+BFREQ`: get the data rate and beacon frequency (MHz) | OK          |
| `AT+BFREQ=?` | -               | BCON: <0, 1, 2, 3, 4, 5, 6, or 7>, `<integer>`           | OK          |

**Example:**

```
AT+BFREQ=?
BCON: 3, 869.525
OK
```

:::tip 📝 NOTE:
-  In this case, the EU868 SF9 / 125&nbsp;MHz and the default frequency value is 869525000.
It depends on the region frequency, and it can only be read.
:::

[Back](#content)


### AT+BTIME

Description: Beacon time

This command is used to access the current beacon time.

| Command      | Input Parameter | Return Value                                                | Return Code |
| ------------ | --------------- | ----------------------------------------------------------- | ----------- |
| `AT+BTIME?`  | -               | `BTIME`: get the beacon time (seconds since GPS Epoch time) | OK          |
| `AT+BTIME=?` | -               | `BTIME`: GPS epoch time                                     | OK          |

**Example:**

```
AT+BTIME=?
BTIME: 1226592311
OK
```


[Back](#content)


### AT+BGW

Description: Gateway GPS coordinate, NetID, and GwID

This command is used to access the GW GPS coordinate, NetID, and GwID.

| Command    | Input Parameter | Return Value                                                    | Return Code |
| ---------- | --------------- | --------------------------------------------------------------- | ----------- |
| `AT+BGW?`  | -               | `AT+BGW`: get the gateway GPS coordinate, NetID and GwID        | OK          |
| `AT+BGW=?` | -               | BGW: `<INFO>`, `<netid>`, `<gwid>`, `<longitude>`, `<latitude>` | OK          |

**Example:**

```
AT+BGW=?
BGW: 3, “NetID”, “GwID”, “N/A”, “N/A”
OK
```

:::tip 📝 NOTE:
In this case, the default value is 0,0,0,0.
- For a single omnidirectional antenna gateway, the INFO value is 0 with GPS coordinates.
- For a site featuring three sectored antennas, for example, the first antenna INFO equals 0 with GPS
coordinates, the second antenna INFO equals 1 with GPS coordinate, etc. In this case, netid and gwid are not relevant. When INFO = 3, the content of network NetID plus a freely allocated gateway gwid and longitude and latitude are not relevant.
- Time in seconds since January 6, 1980 00:00:00 UTC (start of the GPS epoch) modulo 2<sup>32</sup>.
:::

[Back](#content)


### AT+LTIME

Description: Local time

This command is used to access the local time in a UTC format.

| Command      | Input Parameter | Return Value                                   | Return Code |
| ------------ | --------------- | ---------------------------------------------- | ----------- |
| `AT+LTIME?`  | -               | `AT+LTIME`: get the local time                 | OK          |
| `AT+LTIME=?` | -               | `LTIME:<HOUR>h<MINUTE>m<SECOND>s<DAY>-<MONTH>` | OK          |

**Example:**

```
AT+LTIME=?
LTIME: 00h37m58s 2018-11-14
OK
```

[Back](#content)

## Asynchronous Events

This section describes the output from serial/comm lines of the module that can occur at any point in time while the device is operational. Host parser may need to handle this event at any time.

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
|                            |                     | `MULCAST MC1` = Data received in multicast group 1.                                              |
| Class A downlink           | `+EVT:`*< status >* | `RX1/RX2, RSSI -110, SNR 5`                                                                      |
|                            |                     | `PortNumber:12345678` = received binary data on PortNumber.                                      |
| Join                       | `+EVT:`*< status >* | `JOIN FAILED`                                                                                    |
|                            |                     | `JOINED`                                                                                         |
| Confirm                    | `+EVT:`*< status >* | `SEND CONFIRMED OK`                                                                              |
|                            |                     | `SEND CONFIRMED FAILED`                                                                          |
| P2P                        | `+EVT:`*< status >* | `00112233` = received binary data format data                                                    |
|                            |                     | `RXP2P, RSSI -110, SNR 5` = indicates that data has been received on P2P received window.        |
| Link Check                 | `+EVT:`*< status >* | `LINKCHECK:Y0,Y1,Y2,Y3,Y4`                                                                       |
|                            |                     | Y0 = represents link status (1:links success, 2: link fail)                                      |
|                            |                     | Y1 = represents the DemodMargin                                                                  |
|                            |                     | Y2 = represents the NbGateways                                                                   |
|                            |                     | Y3 = represents the RSSI                                                                         |
|                            |                     | Y4 = represents the SNR                                                                          |

[Back](#content)

## LoRaWAN Information

This section provides a set of commands for battery level, RF signal quality, and FW version.

### AT+RSSI

Description: RSSI on reception

This command is used to access the RSSI on reception.

| Command     | Input Parameter | Return Value                                        | Return Code |
| ----------- | --------------- | --------------------------------------------------- | ----------- |
| `AT+RSSI?`  | -               | `AT+RSSI`: get the RSSI of the last received packet | OK          |
| `AT+RSSI=?` | -               | -31                                                 | OK          |

:::tip 📝 NOTE
-  `AT+RSSI=?` provides a value in dBm, and it can only be read.
- When the connection is successful, it gets the RSSI of the last received packet.
:::

[Back](#content)


### AT+ARSSI

Description: Inquire all channel RSSI

This command allows you to view all open channels RSSI

| Command      | Input Parameter | Return value                                                                 | Return code |
| ------------ | --------------- | ---------------------------------------------------------------------------- | ----------- |
| `AT+ARSSI?`  | -               | `AT+ARSSI`: access all open channel RSSI                                     | OK          |
| `AT+ARSSI=?` | -               | 0:`<Channel 0 rssi>` <br>1:`<Channel 1 rssi>`<br>.... 15:`<Channel 15 rssi>` | OK          |


**Example:**

```
AT+ARSSI=?
0:-57,1:-57,2:-57
OK
```
:::tip 📝 NOTE
- `AT+ARSSI=?` provides a value in dBm, and it can only be read.
- When the connection is successful, it views all open channels RSSI of the last received packet.
:::

[Back](#content)


### AT+SNR

Description: Signal noise ratio

This command is used to access the SNR of the last received packet.

| Command    | Input Parameter | Return Value                                      | Return Code |
| ---------- | --------------- | ------------------------------------------------- | ----------- |
| `AT+SNR?`  | -               | `AT+SNR`: get the SNR of the last received packet | OK          |
| `AT+SNR=?` | -               | 32                                                | OK          |

:::tip 📝 NOTE
- `AT+SNR=?` provides a value in dB and it can only be read.
When the connection is successful and gets the SNR of the last received packet
:::

[Back](#content)


## Supplement Command

This section provides the set of commands related to channels and LoRaWAN regions.

### AT+MASK

Description: Set the channel mask, close or open the channel

This command configures the channel of the device by setting the hexadecimal channel mask.

| Command           | Input Parameter | Return Value                                                                                       | Return Code                               |
| ----------------- | --------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------- |
| `AT+MASK? `       | -               | `AT+MASK`: get or set the channel mask to close or open the channel (only for US915, AU915, CN470) | OK                                        |
| `AT+MASK=?`       | -               | `<mask>`                                                                                           | OK                                        |
| `AT+MASK=<input>` | `<mask>`        | -                                                                                                  | OK <br> AT_PARAM_ERROR <br> AT_BUSY_ERROR |

**Example:**

```
AT+MASK=0001
OK

AT+MASK=?
AT+MASK=0001
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- `AT_BUSY_ERROR` is returned when the set command process is already running.
-  In this case, the channel mask mode is only for US915, AU915, CN470.
US915 / AU915 default value is 01FF and CN470 and default value is 0FFF.
<br>`<Input>`: 4-digit length, character 0-9, a-f, A-F only, representing a 16-bit mask.
:::


The table below shows the attached list on setting the channel mask.

<table style="text-align: center">
<thead>
  <tr>
    <th>Sub-Band</th>
    <th>Channels</th>
    <th>16bits</th>
    <th>US915</th>
    <th>AU915</th>
    <th>CN470</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>ALL</td>
            <td>0000</td>
            <td>0000000000000000</td>
            <td>ENABLE</td>
            <td>ALL</td>
            <td>Channels</td>
        </tr>
        <tr>
            <td>1</td>
            <td>0001</td>
            <td>0000000000000001</td>
            <td>0-7</td>
            <td>0-7</td>
             <td>0-7</td>
        </tr>
        <tr>
           <td>2</td>
            <td>0002</td>
            <td>0000000000000010</td>
            <td>8-15</td>
            <td>8-15</td>
            <td>8-15</td>
        </tr>
        <tr>
           <td>3</td>
            <td>0004</td>
            <td>0000000000000100</td>
            <td>16-23</td>
            <td>16-23</td>
            <td>16-23</td>
        </tr>
        <tr>
           <td>4</td>
            <td>0008</td>
            <td>0000000000001000</td>
            <td>24-31</td>
            <td>24-31</td>
            <td>24-31</td>
        </tr>
        <tr>
           <td>5</td>
            <td>0010</td>
            <td>0000000000010000</td>
            <td>32-39</td>
            <td>32-39</td>
            <td>32-39</td>
        </tr>
        <tr>
           <td>6</td>
            <td>0020</td>
            <td>0000000000100000</td>
            <td>40-47</td>
            <td>40-47</td>
            <td>40-47</td>
        </tr>
        <tr>
           <td>7</td>
            <td>0040</td>
            <td>0000000001000000</td>
            <td>48-55</td>
            <td>48-55</td>
            <td>48-55</td>
        </tr>
        <tr>
           <td>8</td>
            <td>0080</td>
            <td>0000000010000000</td>
            <td>56-63</td>
            <td>56-63</td>
            <td>56-63</td>
        </tr>
        <tr>
           <td>9</td>
            <td>0100</td>
            <td>0000000100000000</td>
            <td>64-71</td>
            <td>64-71</td>
            <td>64-71</td>
        </tr>
        <tr>
           <td>10</td>
            <td>0200</td>
            <td>0000001000000000</td>
            <td>-</td>
            <td>-</td>
            <td>72-79</td>
        </tr>
        <tr>
           <td>11</td>
            <td>0400</td>
            <td>0000010000000000</td>
            <td>-</td>
            <td>-</td>
            <td>80-87</td>
        </tr>
        <tr>
           <td>12</td>
            <td>0800</td>
            <td>0000100000000000</td>
            <td>-</td>
            <td>-</td>
            <td>88-95</td>
        </tr>
</tbody>
</table>

[Back](#content)


### AT+CHE

Description: Eight channel mode

This command sets the node to eight-channel mode.

| Command          | Input Parameter | Return Value                                                          | Return Code             |
| ---------------- | --------------- | --------------------------------------------------------------------- | ----------------------- |
| `AT+CHE?`        | -               | `AT+CHE`: get or set eight channels mode (only for US915 AU915 CN470) | OK                      |
| `AT+CHE=?`       | -               | `<value>`                                                             | OK                      |
| `AT+CHE=<Input>` | `<value>`       | -                                                                     | OK <br>  AT_PARAM_ERROR |


**Example:**

```
AT+CHE=1:2:3:4
OK

AT+CHE=?
AT+CHE=1:2:3:4
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the eight-channel mode is only for US915, AU915, CN470. US915 / AU915 range of values is 0~9, and CN470 range of values is 0~12. e.g. `AT+CHE=1:2:3:4` to enable ch0~31. `<value>`: maximum 12 decimal numbers and the range of values depends on region.
- According to LoRaWAN Regional Parameters v1.0.3revA, the first 64 channels are numbered 0 to 63, starting at 902.3&nbsp;MHz and increments linearly by 200&nbsp;kHz to 914.9&nbsp;MHz. The next eight (8) channels numbered 64 to 71 are starting at 903.0&nbsp;MHz and increments linearly by 1.6&nbsp;MHz to 914.2&nbsp;MHz.
:::

**US915 Uplink Channels & Attached List**
<table>
<thead>
  <tr>
    <th>CHE</th>
    <th colspan="9">US915 Uplink Channels(125&nbsp;kHz,4/5,Unit:MHz,CHS=0)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td colspan="9">ENABLE Channel 0-71</td>
  </tr>
  <tr>
    <td>1</td>
    <td>902.3</td>
    <td>902.5</td>
    <td>902.7</td>
    <td>902.9</td>
    <td>903.1</td>
    <td>903.3</td>
    <td>903.5</td>
    <td>903.7</td>
    <td>Channel0-7</td>
  </tr>
  <tr>
    <td>2</td>
    <td>903.9</td>
    <td>904.1</td>
    <td>904.3</td>
    <td>904.5</td>
    <td>904.7</td>
    <td>904.9</td>
    <td>905.1</td>
    <td>905.3</td>
    <td>Channel8-15</td>
  </tr>
  <tr>
    <td>3</td>
    <td>905.5</td>
    <td>905.7</td>
    <td>905.9</td>
    <td>906.1</td>
    <td>906.3</td>
    <td>906.5</td>
    <td>906.7</td>
    <td>906.9</td>
    <td>Channel16-23</td>
  </tr>
  <tr>
    <td>4</td>
    <td>907.1</td>
    <td>907.3</td>
    <td>907.5</td>
    <td>907.7</td>
    <td>907.9</td>
    <td>908.1</td>
    <td>908.3</td>
    <td>908.5</td>
    <td>Channel24-31</td>
  </tr>
  <tr>
    <td>5</td>
    <td>908.7</td>
    <td>908.9</td>
    <td>909.1</td>
    <td>909.3</td>
    <td>909.5</td>
    <td>909.7</td>
    <td>909.9</td>
    <td>910.1</td>
    <td>Channel32-39</td>
  </tr>
  <tr>
    <td>6</td>
    <td>910.3</td>
    <td>910.5</td>
    <td>910.7</td>
    <td>910.9</td>
    <td>911.1</td>
    <td>911.3</td>
    <td>911.5</td>
    <td>911.7</td>
    <td>Channel40-47</td>
  </tr>
  <tr>
    <td>7</td>
    <td>911.9</td>
    <td>912.1</td>
    <td>912.3</td>
    <td>912.5</td>
    <td>912.7</td>
    <td>912.9</td>
    <td>913.1</td>
    <td>913.3</td>
    <td>Channel48-55</td>
  </tr>
  <tr>
    <td>8</td>
    <td>913.5</td>
    <td>913.7</td>
    <td>913.9</td>
    <td>914.1</td>
    <td>914.3</td>
    <td>914.5</td>
    <td>914.7</td>
    <td>914.9</td>
    <td>Channel56-63</td>
  </tr>
  <tr>
    <td>9</td>
    <td>903</td>
    <td>904.6</td>
    <td>906.2</td>
    <td>907.8</td>
    <td>909.4</td>
    <td>911</td>
    <td>912.6</td>
    <td>914.2</td>
    <td>Channel64-71</td>
  </tr>
  <tr>
    <td>Channel 72-79</td>
    <td>484700000</td>
    <td>484900000</td>
    <td>485100000</td>
    <td>485300000</td>
    <td>485500000</td>
    <td>485700000</td>
    <td>485900000</td>
    <td>486100000</td>
    <td></td>
  </tr>
  <tr>
    <td>Channel 80-87</td>
    <td>486300000</td>
    <td>486500000</td>
    <td>486700000</td>
    <td>486900000</td>
    <td>487100000</td>
    <td>487300000</td>
    <td>487500000</td>
    <td>487700000</td>
    <td></td>
  </tr>
  <tr>
    <td>Channel 88-95</td>
    <td>487900000</td>
    <td>488100000</td>
    <td>488300000</td>
    <td>488500000</td>
    <td>488700000</td>
    <td>488900000</td>
    <td>489100000</td>
    <td>489300000</td>
    <td></td>
  </tr>
</tbody>
</table>


:::tip 📝 NOTE
- According to LoRaWAN Regional Parameters v1.0.3revA, the first 64 channels are numbered 0 to 63, starting at 902.3&nbsp;MHz and increments linearly by 200&nbsp;kHz to 914.9&nbsp;MHz. The next eight (8) channels numbered 64 to 71 are starting at 903.0&nbsp;MHz and increments linearly by 1.6&nbsp;MHz to 914.2&nbsp;MHz.
:::


**AU915 Uplink Channels & Attached List**
<table>
<thead>
  <tr>
    <th>CHE</th>
    <th colspan="9">AU915 Uplink Channels(125&nbsp;kHz,4/5,Unit:MHz, CHS=0)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td colspan="9">ENABLE Channel 0-71</td>
  </tr>
  <tr>
    <td>1</td>
    <td>915.2</td>
    <td>915.4</td>
    <td>915.6</td>
    <td>915.8</td>
    <td>916</td>
    <td>916.2</td>
    <td>916.4</td>
    <td>916.6</td>
    <td>Channel 0-7</td>
  </tr>
  <tr>
    <td>2</td>
    <td>916.8</td>
    <td>917</td>
    <td>917.2</td>
    <td>917.4</td>
    <td>917.6</td>
    <td>917.8</td>
    <td>918</td>
    <td>918.2</td>
    <td>Channel 8-15</td>
  </tr>
  <tr>
    <td>3</td>
    <td>918.4</td>
    <td>918.6</td>
    <td>918.8</td>
    <td>919</td>
    <td>919.2</td>
    <td>919.4</td>
    <td>919.6</td>
    <td>919.8</td>
    <td>Channel 16-23</td>
  </tr>
  <tr>
    <td>4</td>
    <td>920</td>
    <td>920.2</td>
    <td>920.4</td>
    <td>920.6</td>
    <td>920.8</td>
    <td>921</td>
    <td>921.2</td>
    <td>921.4</td>
    <td>Channel 24-31</td>
  </tr>
  <tr>
    <td>5</td>
    <td>921.6</td>
    <td>921.8</td>
    <td>922</td>
    <td>922.2</td>
    <td>922.4</td>
    <td>922.6</td>
    <td>922.8</td>
    <td>923</td>
    <td>Channel32-39</td>
  </tr>
  <tr>
    <td>6</td>
    <td>923.2</td>
    <td>923.4</td>
    <td>923.6</td>
    <td>923.8</td>
    <td>924</td>
    <td>924.2</td>
    <td>924.4</td>
    <td>924.6</td>
    <td>Channel40-47</td>
  </tr>
  <tr>
    <td>7</td>
    <td>924.8</td>
    <td>925</td>
    <td>925.2</td>
    <td>925.4</td>
    <td>925.6</td>
    <td>925.8</td>
    <td>926</td>
    <td>926.2</td>
    <td>Channel 48-55</td>
  </tr>
  <tr>
    <td>8</td>
    <td>926.4</td>
    <td>926.6</td>
    <td>926.8</td>
    <td>927</td>
    <td>927.2</td>
    <td>927.4</td>
    <td>927.6</td>
    <td>927.8</td>
    <td>Channel 56-63</td>
  </tr>
  <tr>
    <td>9</td>
    <td>915.9</td>
    <td>917.5</td>
    <td>919.1</td>
    <td>920.7</td>
    <td>922.3</td>
    <td>923.9</td>
    <td>925.5</td>
    <td>927.1</td>
    <td>Channel 64-71</td>
  </tr>
</tbody>
</table>

:::tip 📝 NOTE
- According to LoRaWAN Regional Parameters v1.0.3revA, the first 64 channels are numbered 0 to 63, starting at 915.2&nbsp;MHz and increments linearly by 200&nbsp;kHz to 927.8&nbsp;MHz. The next eight (8) channels numbered 64 to 71 are starting at 915.9&nbsp;MHz and increments linearly by 1.6&nbsp;MHz to 927.1&nbsp;MHz.
:::

**CN470 Uplink Channels & Attached List**
<table>
<thead>
  <tr>
    <th>CHE</th>
    <th colspan="9">CN470 Uplink Channels(125&nbsp;kHz,4/5,Unit:MHz,CHS=0)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>0</td>
    <td colspan="9">ENABLE Channel 0-95</td>
  </tr>
  <tr>
    <td>1</td>
    <td>470.3</td>
    <td>470.5</td>
    <td>470.7</td>
    <td>470.9</td>
    <td>471.1</td>
    <td>471.3</td>
    <td>471.5</td>
    <td>471.7</td>
    <td>Channel0-7</td>
  </tr>
  <tr>
    <td>2</td>
    <td>471.9</td>
    <td>472.1</td>
    <td>472.3</td>
    <td>472.5</td>
    <td>472.7</td>
    <td>472.9</td>
    <td>473.1</td>
    <td>473.3</td>
    <td>Channel8-15</td>
  </tr>
  <tr>
    <td>3</td>
    <td>473.5</td>
    <td>473.7</td>
    <td>473.9</td>
    <td>474.1</td>
    <td>474.3</td>
    <td>474.5</td>
    <td>474.7</td>
    <td>474.9</td>
    <td>Channel16-23</td>
  </tr>
  <tr>
    <td>4</td>
    <td>475.1</td>
    <td>475.3</td>
    <td>475.5</td>
    <td>475.7</td>
    <td>475.9</td>
    <td>476.1</td>
    <td>476.3</td>
    <td>476.5</td>
    <td>Channel24-31</td>
  </tr>
  <tr>
    <td>5</td>
    <td>476.7</td>
    <td>476.9</td>
    <td>477.1</td>
    <td>477.3</td>
    <td>477.5</td>
    <td>477.7</td>
    <td>477.9</td>
    <td>478.1</td>
    <td>Channel32-39</td>
  </tr>
  <tr>
    <td>6</td>
    <td>478.3</td>
    <td>478.5</td>
    <td>478.7</td>
    <td>478.9</td>
    <td>479.1</td>
    <td>479.3</td>
    <td>479.5</td>
    <td>479.7</td>
    <td>Channel40-47</td>
  </tr>
  <tr>
    <td>7</td>
    <td>479.9</td>
    <td>480.1</td>
    <td>480.3</td>
    <td>480.5</td>
    <td>480.7</td>
    <td>480.9</td>
    <td>481.1</td>
    <td>481.3</td>
    <td>Channel48-55</td>
  </tr>
  <tr>
    <td>8</td>
    <td>481.5</td>
    <td>481.7</td>
    <td>481.9</td>
    <td>482.1</td>
    <td>482.3</td>
    <td>482.5</td>
    <td>482.7</td>
    <td>482.9</td>
    <td>Channel56-63</td>
  </tr>
  <tr>
    <td>9</td>
    <td>483.1</td>
    <td>483.3</td>
    <td>483.5</td>
    <td>483.7</td>
    <td>483.9</td>
    <td>484.1</td>
    <td>484.3</td>
    <td>484.5</td>
    <td>Channel64-71</td>
  </tr>
  <tr>
    <td>10</td>
    <td>484.7</td>
    <td>484.9</td>
    <td>485.1</td>
    <td>485.3</td>
    <td>485.5</td>
    <td>485.7</td>
    <td>485.9</td>
    <td>486.1</td>
    <td>Channel72-79</td>
  </tr>
  <tr>
    <td>11</td>
    <td>486.3</td>
    <td>486.5</td>
    <td>486.7</td>
    <td>486.9</td>
    <td>487.1</td>
    <td>487.3</td>
    <td>487.5</td>
    <td>487.7</td>
    <td>Channel80-87</td>
  </tr>
  <tr>
    <td>12</td>
    <td>487.9</td>
    <td>488.1</td>
    <td>488.3</td>
    <td>488.5</td>
    <td>488.7</td>
    <td>488.9</td>
    <td>489.1</td>
    <td>489.3</td>
    <td>Channel88-95</td>
  </tr>
</tbody>
</table>


:::tip 📝 NOTE
- According to LoRaWAN Regional Parameters v1.0.3revA, the 96 channels are numbered 0 to 95, starting at 470.3&nbsp;MHz and increments linearly by 200&nbsp;kHz to 489.3&nbsp;MHz.
:::

[Back](#content)


### AT+CHS

Description: Single channel mode

This command sets the node to single-channel mode.

| Command          | Input Parameter | Return Value                                                           | Return Code |
| ---------------- | --------------- | ---------------------------------------------------------------------- | ----------- |
| `AT+CHS?`        | -               | `AT+CHS`: get or set single channels mode (only for US915 AU915 CN470) | OK          |
| `AT+CHS=?`       | -               | 0 or `<frequency>`                                                     | OK          |
| `AT+CHS=<Input>` | `<frequency>`   | -                                                                      | OK          |

**Example:**

```
AT+CHS=902300000
OK
AT+CHS=?
AT+CHS=902300000
OK
```

:::tip 📝 NOTE
In this case, the single-channel mode is only for US915, AU915, CN470.
- US915 frequency range is from 902300000 to 914900000 and increments linearly by 200&nbsp;kHz (ch0-63).
- US915 frequency range is from 903000000 to 914200000 and increments linearly by 1.6&nbsp;MHz (ch64-71).
- AU915 frequency range is from 915200000 to 927800000 and increments linearly by 200&nbsp;kHz (ch0-63).
- AU915 frequency range is from 915900000 to 927100000 and increments linearly by 1.6&nbsp;MHz (ch64-71).
- CN470 frequency range is from 470300000 to 489300000 and increments linearly by 200&nbsp;kHz (ch0-95).
- If you input `AT+CHS=903900000`, it will overwrite the `AT+MASK` and `AT+CHE` settings.
- `AT+MASK=0001(single channel mode: 903900000)`, the 0001 is the previous one, and the current is 90390000.
:::

**US915 Uplink Channels Frequency & Attached List**
<table>
<thead>
  <tr>
    <th colspan="9">US915 Uplink Channels(125k&nbsp;Hz,4/5,Unit:MHz,CHS=Frequency)   </th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="9">ENABLE Channel 0-71</td>
  </tr>
  <tr>
    <td>Channel 0-7</td>
    <td>902300000</td>
    <td>902500000</td>
    <td>902700000</td>
    <td>902900000</td>
    <td>903100000</td>
    <td>903300000</td>
    <td>903500000</td>
    <td>903700000</td>
  </tr>
  <tr>
    <td>Channel 8-15</td>
    <td>903900000</td>
    <td>904100000</td>
    <td>904300000</td>
    <td>904500000</td>
    <td>904700000</td>
    <td>904900000</td>
    <td>905100000</td>
    <td>905300000</td>
  </tr>
  <tr>
    <td>Channel 16-23</td>
    <td>905500000</td>
    <td>905700000</td>
    <td>905900000</td>
    <td>906100000</td>
    <td>906300000</td>
    <td>906500000</td>
    <td>906700000</td>
    <td>906900000</td>
  </tr>
  <tr>
    <td>Channel 24-31</td>
    <td>907100000</td>
    <td>907300000</td>
    <td>907500000</td>
    <td>907700000</td>
    <td>907900000</td>
    <td>908100000</td>
    <td>908300000</td>
    <td>908500000</td>
  </tr>
  <tr>
    <td>Channel 32-39</td>
    <td>908700000</td>
    <td>908900000</td>
    <td>909100000</td>
    <td>909300000</td>
    <td>909500000</td>
    <td>909700000</td>
    <td>909900000</td>
    <td>910100000</td>
  </tr>
  <tr>
    <td>Channel 40-47</td>
    <td>910300000</td>
    <td>910500000</td>
    <td>910700000</td>
    <td>910900000</td>
    <td>911100000</td>
    <td>911300000</td>
    <td>911500000</td>
    <td>911700000</td>
  </tr>
  <tr>
    <td>Channel 48-55</td>
    <td>911900000</td>
    <td>912100000</td>
    <td>912300000</td>
    <td>912500000</td>
    <td>912700000</td>
    <td>912900000</td>
    <td>913100000</td>
    <td>913300000</td>
  </tr>
  <tr>
    <td>Channel 56-63</td>
    <td>913500000</td>
    <td>913700000</td>
    <td>913900000</td>
    <td>914100000</td>
    <td>914300000</td>
    <td>914500000</td>
    <td>914700000</td>
    <td>914900000</td>
  </tr>
  <tr>
    <td>Channel 64-71</td>
    <td>903000000</td>
    <td>904600000</td>
    <td>906200000</td>
    <td>907800000</td>
    <td>909400000</td>
    <td>911000000</td>
    <td>912600000</td>
    <td>   914200000</td>
  </tr>
</tbody>
</table>

:::tip 📝 NOTE
According to LoRaWAN Regional Parameters v1.0.3revA, the first 64 channels are numbered 0 to 63, starting at 902.&nbsp;3&nbsp;MHz and increments linearly by 200&nbsp;kHz to 914.9MHz. The next eight (8) channels numbered 64 to 71 are starting at 903.0&nbsp;MHz and increments linearly by 1.6&nbsp;MHz to 914.2&nbsp;MHz
:::

**AU915 Uplink Channels Frequency & Attached List**

<table>
<thead>
  <tr>
    <th colspan="9">AU915 Uplink Channels(125&nbsp;kHz,4/5,Unit:MHz,CHS=Frequency)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="9">ENABLE Channel 0-71</td>
  </tr>
  <tr>
    <td>Channel 0-7</td>
    <td>915200000</td>
    <td>915400000</td>
    <td>915600000</td>
    <td>915800000</td>
    <td>916000000</td>
    <td>916200000</td>
    <td>916400000</td>
    <td>916600000</td>
  </tr>
  <tr>
    <td>Channel 8-15</td>
    <td>916800000</td>
    <td>917000000</td>
    <td>917200000</td>
    <td>917400000</td>
    <td>917600000</td>
    <td>917800000</td>
    <td>918000000</td>
    <td>918200000</td>
  </tr>
  <tr>
    <td>Channel<br>16-23</td>
    <td>918400000</td>
    <td>918600000</td>
    <td>918800000</td>
    <td>919000000</td>
    <td>919200000</td>
    <td>919400000</td>
    <td>919600000</td>
    <td>919800000</td>
  </tr>
  <tr>
    <td>Channel 24-31</td>
    <td>920000000</td>
    <td>920200000</td>
    <td>920400000</td>
    <td>920600000</td>
    <td>920800000</td>
    <td>921000000</td>
    <td>921200000</td>
    <td>921400000</td>
  </tr>
  <tr>
    <td>Channel 32-39</td>
    <td>921600000</td>
    <td>921800000</td>
    <td>922000000</td>
    <td>922200000</td>
    <td>922400000</td>
    <td>922600000</td>
    <td>922800000</td>
    <td>923000000</td>
  </tr>
  <tr>
    <td>Channel<br>40-47</td>
    <td>923200000</td>
    <td>923400000</td>
    <td>923600000</td>
    <td>923800000</td>
    <td>924000000</td>
    <td>924200000</td>
    <td>924400000</td>
    <td>924600000</td>
  </tr>
  <tr>
    <td>Channel 48-55</td>
    <td>924800000</td>
    <td>925000000</td>
    <td>925200000</td>
    <td>925400000</td>
    <td>925600000</td>
    <td>925800000</td>
    <td>926000000</td>
    <td>926200000</td>
  </tr>
  <tr>
    <td>Channel 56-63</td>
    <td>926400000</td>
    <td>926600000</td>
    <td>926800000</td>
    <td>927000000</td>
    <td>927200000</td>
    <td>927400000</td>
    <td>927600000</td>
    <td>927800000</td>
  </tr>
  <tr>
    <td>Channel 64-71</td>
    <td>915900000</td>
    <td>917500000</td>
    <td>919100000</td>
    <td>920700000</td>
    <td>922300000</td>
    <td>923900000</td>
    <td>925500000</td>
    <td>927100000</td>
  </tr>
</tbody>
</table>

:::tip 📝 NOTE
According to LoRaWAN Regional Parameters v1.0.3revA, the first 64 channels are numbered 0 to 63, starting at 915.2&nbsp;MHz and increments linearly by 200&nbsp;kHz to 927.8&nbsp;MHz. The next eight (8) channels numbered 64 to 71 are starting at 915.9&nbsp;MHz and increments linearly by 1.6&nbsp;MHz to 927.1&nbsp;MHz.
:::


**CN470 Uplink Channels Frequency & Attached List**

<table>
<thead>
  <tr>
    <th colspan="9"><br>CN470 UplinkChannels(125&nbsp;kHz,4/5,Unit:MHz,CHS=Frequency)</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td colspan="9"><br>ENABLE Channel 0-95</td>
  </tr>
  <tr>
    <td>Channel 0-7</td>
    <td>470300000</td>
    <td>470500000</td>
    <td>470700000</td>
    <td>470900000</td>
    <td>471100000</td>
    <td>471300000</td>
    <td>471500000</td>
    <td>471700000</td>
  </tr>
  <tr>
    <td>Channel<br><br>8-15</td>
    <td>471900000</td>
    <td>472100000</td>
    <td>472300000</td>
    <td>472500000</td>
    <td>472700000</td>
    <td>472900000</td>
    <td>473100000</td>
    <td>473300000</td>
  </tr>
  <tr>
    <td>Channel 16-23</td>
    <td>473500000</td>
    <td>473700000</td>
    <td>473900000</td>
    <td>474100000</td>
    <td>474300000</td>
    <td>474500000</td>
    <td>474700000</td>
    <td>474900000</td>
  </tr>
  <tr>
    <td>Channel 24-31</td>
    <td>475100000</td>
    <td>475300000</td>
    <td>475500000</td>
    <td>475700000</td>
    <td>475900000</td>
    <td>476100000</td>
    <td>476300000</td>
    <td>476500000</td>
  </tr>
  <tr>
    <td>Channel<br><br>32-39</td>
    <td>476700000</td>
    <td>476900000</td>
    <td>477100000</td>
    <td>477300000</td>
    <td>477500000</td>
    <td>477700000</td>
    <td>477900000</td>
    <td>478100000</td>
  </tr>
  <tr>
    <td>Channel 40-47</td>
    <td>478300000</td>
    <td>478500000</td>
    <td>478700000</td>
    <td>478900000</td>
    <td>479100000</td>
    <td>479300000</td>
    <td>479500000</td>
    <td>479700000</td>
  </tr>
  <tr>
    <td>Channel 48-55</td>
    <td>479900000</td>
    <td>480100000</td>
    <td>480300000</td>
    <td>480500000</td>
    <td>480700000</td>
    <td>480900000</td>
    <td>481100000</td>
    <td>481300000</td>
  </tr>
  <tr>
    <td>Channel 56-63</td>
    <td>481500000</td>
    <td>481700000</td>
    <td>481900000</td>
    <td>482100000</td>
    <td>482300000</td>
    <td>482500000</td>
    <td>482700000</td>
    <td>482900000</td>
  </tr>
  <tr>
    <td>Channel 64-71</td>
    <td>483100000</td>
    <td>483300000</td>
    <td>483500000</td>
    <td>483700000</td>
    <td>483900000</td>
    <td>484100000</td>
    <td>484300000</td>
    <td>484500000</td>
  </tr>
  <tr>
    <td>Channel 72-79</td>
    <td>484700000</td>
    <td>484900000</td>
    <td>485100000</td>
    <td>485300000</td>
    <td>485500000</td>
    <td>485700000</td>
    <td>485900000</td>
    <td>486100000</td>
  </tr>
  <tr>
    <td>Channel 80-87</td>
    <td>486300000</td>
    <td>486500000</td>
    <td>486700000</td>
    <td>486900000</td>
    <td>487100000</td>
    <td>487300000</td>
    <td>487500000</td>
    <td>487700000</td>
  </tr>
  <tr>
    <td>Channel 88-95</td>
    <td>487900000</td>
    <td>488100000</td>
    <td>488300000</td>
    <td>488500000</td>
    <td>488700000</td>
    <td>488900000</td>
    <td>489100000</td>
    <td>489300000</td>
  </tr>
</tbody>
</table>

:::tip 📝 NOTE
According to LoRaWAN Regional Parameters v1.0.3revA, the 96 channels are numbered 0 to 95, starting at 470.3&nbsp;MHz and increments linearly by 200&nbsp;kHz to 489.3&nbsp;MHz.
:::


[Back](#content)

### AT+BAND

Description: Active region

This command sets numbers corresponding to active regions.

| Command           | Input Parameter   | Return Value                                                                                                                               | Return Code                                |
| ----------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------ |
| `AT+BAND?`        | -                 | `AT+BAND`: get or set the active region (0 = EU433, 1 = CN470, 2 = RU864, 3 = IN865, 4 = EU868, 5 = US915, 6 = AU915, 7 = KR920, 8 = AS923-1, 9 = AS923-2) | OK                                         |
| `AT+BAND=?`       | -                 | 0,1,2,3,4,5,6,7,8,9                                                                                                                          | OK                                         |
| `AT+BAND=<Input>` | 0,1,2,3,4,5,6,7,8,9 | -                                                                                                                                          | OK <br>  AT_PARAM_ERROR <br> AT_BUSY_ERROR |

**Example:**
```
AT+BAND=?
AT+BAND=3
OK

AT+BAND=2
OK

```
:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- `AT_BUSY_ERROR` is returned when the set command process is already running.
- In this case, the default value is 4, and it depends on the region. 0: EU433 1: CN470 2: RU864 3: IN865 4: EU868 5: US915 6: AU915 7: KR920 8: AS923-1 9: AS923-2 `<Input>`: 1 decimal integer and the range of values is 0~8.
- RUI3 LoRa/LoRaWAN devices are divided into two variants - Low Frequency and High Frequency. Examples are the RAK4630(L) and RAK4630(H) devices.

    - Low frequency variant is compatible only to 0 - 1.
    - High frequency variant is compatible only to 2 - 9.

:::



[Back](#content)

## P2P Instructions

This section describes the commands related to LoRa point-to-point functionality.

### AT+NWM

Description: LoRa® network work mode

Switch to point-to-point mode, or LoRaWAN mode [0:Point-to-point, 1:LoRaWAN].

| Command          | Input Parameter | Return Value                                                                           | Return Code |
| ---------------- | --------------- | -------------------------------------------------------------------------------------- | ----------- |
| `AT+NWM? `       | -               | `AT+NWM`: get or set the network working mode (0 = P2P_LORA, 1 = LoRaWAN, 2 = P2P_FSK) | OK          |
| `AT+NWM=?`       | -               | 0,1,2                                                                                  | OK          |
| `AT+NWM=<Input>` | 0,1,2           | *The RUI3 device will restart automatically to switch network work mode*               | -           |

**Example:**
```
AT+NWM=?
AT+NWM=1
OK

AT+NWM=0
RAKwireless RAK3172-E Example
------------------------------------------------------
Current Work Mode: LoRa P2P.
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 1.
- On RAK4630/RAK4631, the device will restart which requires reconnection to detect it again via UART.
:::

[Back](#content)


### AT+PFREQ

Description: P2P mode frequency

This command sets the frequency of P2P mode.

| Command            | Input Parameter | Return value                        | Return code            |
| ------------------ | --------------- | ----------------------------------- | ---------------------- |
| `AT+PFREQ?`        | -               | `AT+PFREQ`: configure P2P Frequency | OK                     |
| `AT+PFREQ=?`       | -               | `<Frequency>`                       | OK                     |
| `AT+PFREQ=<param>` | `<Frequency>`   | -                                   | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PFREQ=?
AT+PFREQ=868000000
OK

AT+PFREQ=868500000
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
-  In this case, the default frequency value is **868000000**, and the frequency range is from **150000000 to 960000000.**
- RUI3 LoRa/LoRaWAN devices are divided into two variants - Low Frequency and High Frequency. Examples are the RAK4630(L) and RAK4630(H) devices.

    - Low frequency variant is compatible only to 150000000 - 600000000.
    - High frequency variant is compatible only to 600000000 - 960000000.

:::

[Back](#content)


### AT+PSF

Description: P2P mode spreading factor

This command provides a configuration of the spreading factor for the P2P mode.

| Command          | Input Parameter      | Return Value                                    | Return Code            |
| ---------------- | -------------------- | ----------------------------------------------- | ---------------------- |
| `AT+PSF?`        | -                    | `AT+PSF`: configure P2P Spreading Factor (5-12) | OK                     |
| `AT+PSF=?`       | -                    | `<Spreading Factor>`                            | OK                     |
| `AT+PSF=<param>` | `<Spreading Factor>` | -                                               | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PSF=?
AT+PSF=7
OK

AT+PSF=12
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
-  In this case, the default value is **7**, and the Spreading Factor range of values is **5~12.** P2P is an SW proprietary protocol, and it depends on HW support the range of Spreading Factors SF5~SF12.
:::


[Back](#content)

### AT+PBW

Description: P2P mode bandwidth

This command provides bandwidth configuration for the P2P mode.

| Command          | Input Parameter | Return Value                                                        | Return Code            |
| ---------------- | --------------- | ------------------------------------------------------------------- | ---------------------- |
| `AT+PBW? `       | -               | `AT+PBW`: configure P2P Bandwidth(LORA:125,250,500 FSK:4800-467000) | OK                     |
| `AT+PBW=? `      | -               | `<Bandwidth>`                                                       | OK                     |
| `AT+PBW=<param>` | `<Bandwidth>`   | -                                                                   | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PBW=?
AT+PBW=125
OK

AT+PBW=125
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
-  In this case, the default value is 125, and the bandwidth only supports 125, 250, 500.
:::

[Back](#content)


### AT+PCR

Description: P2P mode code rate

This command provides the configuration code rate for the P2P mode.

| Command          | Input Parameter | Return Value                                                  | Return Code            |
| ---------------- | --------------- | ------------------------------------------------------------- | ---------------------- |
| `AT+PCR? `       | -               | `AT+PCR`: configure P2P Code Rate(0=4/5, 1=4/6, 2=4/7, 3=4/8) | OK                     |
| `AT+PCR=? `      | -               | `<Code Rate>`                                                 | OK                     |
| `AT+PCR=<param>` | `<Code Rate>`   | -                                                             | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PCR=?
AT+PCR=2
OK

AT+PCR=3
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 0, and the code rate range of values is 0~3. LoRa using coding rate 4/5.
:::

[Back](#content)


### AT+PPL

Description: P2P mode preamble length

This command provides configuration Preamble Length for the P2P mode.

| Command          | Input Parameter     | Return Value                                      | Return Code            |
| ---------------- | ------------------- | ------------------------------------------------- | ---------------------- |
| `AT+PPL?`        | -                   | `AT+PPL`: configure P2P Preamble Length (5-65535) | OK                     |
| `AT+PPL=?`       | -                   | `<Preamble Length>`                               | OK                     |
| `AT+PPL=<param>` | `<Preamble Length>` | -                                                 | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PPL=?
AT+PPL=200
OK

AT+PPL=200
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 8. `<param>`: 1 decimal integer, and the range of values is 5~65535.
:::

[Back](#content)


### AT+PTP

Description: P2P mode TX power

This command provides configuration TX Power for the P2P mode.

| Command          | Input Parameter | Return Value                            | Return Code            |
| ---------------- | --------------- | --------------------------------------- | ---------------------- |
| `AT+PTP?`        | -               | `AT+PTP`: configure P2P TX power (5-22) | OK                     |
| `AT+PTP=? `      | -               | `<TX Power> `                           | OK                     |
| `AT+PTP=<param>` | `<TX Power>`    | -                                       | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PTP=?
AT+PTP=14
OK

AT+PTP=20
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the TX Power default value is **14&nbsp;dBm**, and the range of values is **5~22&nbsp;dBm.**
:::

[Back](#content)


### AT+PSEND

Description: P2P send data

This command provides the way to P2P send data.

| Command            | Input Parameter | Return Value                      | Return Code            |
| ------------------ | --------------- | --------------------------------- | ---------------------- |
| `AT+PSEND?`        | -               | `AT+PSEND`: send data in P2P mode | OK                     |
| `AT+PSEND=<Input>` | `<payload>`     | -                                 | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+PSEND=112233
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- `<payload>`: 2~500 digit length, must be an even number of digits and character 0-9, a-f, A-F only, representing 1~256 hexadecimal numbers.
:::

[Back](#content)


### AT+PRECV

Description: P2P received data

This command provides configuration the timeout period for P2P window reception.

| Command            | Input Parameter | Return Value                                            | Return Code |
| ------------------ | --------------- | ------------------------------------------------------- | ----------- |
| `AT+PRECV? `       | -               | `AT+PRECV`: enter P2P RX mode for a period of time (ms) | OK          |
| `AT+PRECV=<Input>` | `<time>`        | -                                                       | OK          |

When valid LoRa P2P packets are received, the format is RSSI, SNR and Payload.

`+EVT:RXP2P:-30:13:1234`

- RSSI = -30
- SNR = 13
- Payload = 1234

**Examples:**

1. P2P LoRa RX configurable duration value is from 1 to 65533 ms. In this example, the device will wait for LoRa P2P Packets for 30 seconds. It will automatically disable RX mode and switch to TX mode after the timeout. The callback after timeout is `+EVT:RXP2P RECEIVE TIMEOUT`.
```
AT+PRECV=30000
OK
```
2. If the value is set to **65535**, the device will listen to P2P LoRa packets without timeout but it will stop listening once a P2P LoRa packet is received. The device is configured to RX mode until a LoRa P2P packet is received. After the reception, it will disable RX mode and automatically switch to TX mode.
```
AT+PRECV=65535
OK
```
3. If the value is set to **65534**, the device will continuously listen to P2P LoRa packets without any timeout. **The device is in RX mode**. It will continuously be listed to LoRa P2P packets.
```
AT+PRECV=65534
OK
```
:::tip 📝 NOTE
If configured in continuous RX mode `AT+PRECV=65534`, any new values to `AT+PRECV` will not be accepted. RX mode must be disabled first via `AT+PRECV=0`.
During continuous RX mode, there are many LoRa P2P parameters that cannot be modified as well. `AT+PRECV` must be set to zero first.
:::
4. If the value is 0, the device will stop listening to P2P LoRa packets. It disables LoRa P2P RX mode and switch to TX mode.
```
AT+PRECV=0
OK
```

:::tip 📝 NOTE
- LoRa P2P default setting is TX mode. This consumes lower power compared to RX mode where the radio is always listening for LoRa packets.
- `AT_BUSY_ERROR` is returned if the device is configured to RX mode and still waiting for LoRa P2P packets.
- `AT_PARAM_ERROR` is returned when the setting is wrong or malformed value.
:::

[Back](#content)


### AT+ENCRY

Description: P2P encryption enabled

This command enables P2P mode encryption.

| Command            | Input Parameter | Return Value                                             | Return Code |
| ------------------ | --------------- | -------------------------------------------------------- | ----------- |
| `AT+ENCRY?`        | -               | `AT+ENCRY`: get or set the encryption status of P2P mode | OK          |
| `AT+ENCRY=?`       | -               | 0 or 1                                                   | OK          |
| `AT+ENCRY=<Input>` | `<value>`       | -                                                        | OK          |

**Example:**
```
AT+ENCRY=1
OK

AT+ENCRY=?
AT+ENCRY=1
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- In this case, the default value is 0.
:::

[Back](#content)


### AT+ENCKEY

Description: P2P Encryption KEY

This command Key will encrypt the data being sent and received.

| Command             | Input Parameter | Return Value                                                           | Return Code |
| ------------------- | --------------- | ---------------------------------------------------------------------- | ----------- |
| `AT+ENCKEY?`        | -               | `AT+ENCRY`: get or set the encryption key of P2P mode (8 bytes in hex) | OK          |
| `AT+ENCKEY=?`       | -               | <8 hex>                                                                | OK          |
| `AT+ENCKEY=<Input>` | <8 hex>         | -                                                                      | OK          |

**Example:**
```
AT+ENCKEY=0102030405060708
OK

AT+ENCKEY=?
AT+ENCKEY=0102030405060708
OK
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- `<Input>`: 16 digit length, character 0-9, a-f, A-F only, representing eight (8) hexadecimal numbers.
:::

[Back](#content)


### AT+P2P

Description: View P2P all parameters

This command provides configuration of all parameters for the P2P mode.

| Command          | Input Parameter                                                                            | Return Value                            | Return Code            |
| ---------------- | ------------------------------------------------------------------------------------------ | --------------------------------------- | ---------------------- |
| `AT+P2P?`        | -                                                                                          | `AT+P2P`: get or set all P2P parameters | OK                     |
| `AT+P2P=?`       | -                                                                                          | -                                       | OK <br> AT_BUSY_ERROR  |
| `AT+P2P=<param>` | `<Frequency>:<Spreading Factor>:<Bandwidth>:<Code Rate>:<Preamble Length>:<TX Power>` | -                                       | OK <br> AT_PARAM_ERROR |

**Example:**
```
AT+P2P=?
AT+P2P=868000000:12:125:3:200:14
OK

AT+P2P=868:12:300:3:200:14
AT_PARAM_ERROR
```

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting a wrong or malformed value.
- In this case, the default value is “868000000:7:125:0:8:14”.
- Frequency = {150000000-960000000}, SF = {6, 7, 8, 9, 10, 11, 12}, Bandwidth = {125, 250, 500}, CR = {4/5=0, 4/6=1, 4/7=2, 4/8=3}, Preamble Length = {2-65535}, TX Power = {5-22}.
- RUI3 LoRa/LoRaWAN devices are divided into two variants - Low Frequency and High Frequency. Examples are the RAK4630(L) and RAK4630(H) devices.

    - Low frequency variant is compatible only to 150000000 - 600000000.
    - High frequency variant is compatible only to 600000000 - 960000000.


:::

[Back](#content)


## LoRaWAN Multicast Group

This section describes the commands related to multicast group functionality.

### AT+ADDMULC

Description: Add multicast group

This command is used to add a new multicast group and multicast parameters.

| Command                        | Input Parameter                                                                | Return Value                            | Return Code              |
| ------------------------------ | ------------------------------------------------------------------------------ | --------------------------------------- | ------------------------ |
| `AT+ADDMULC?`                  | -                                                                              | `AT+ADDMULC`: add a new multicast group | `OK`                     |
| `AT+ADDMULC=<Input Parameter>` | *`[Class]:[DevAddr]:[NwkSKey]:[AppSKey]:[Frequency]:[Datarate]:[Periodicity]`* | -                                       | `OK` or `AT_PARAM_ERROR` |

**Examples**:

```
AT+ADDMULC=B:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0:0

OK
```

[Back](#content)


### AT+RMVMULC

Description: Remove multicast group

This command is used to remove the configured multicast group.

| Command                        | Input Parameter | Return Value                           | Return Code |
| ------------------------------ | --------------- | -------------------------------------- | ----------- |
| `AT+RMVMULC?`                  | -               | `AT+RMVMULC`: delete a multicast group | `OK`        |
| `AT+RMVMULC=<Input Parameter>` | *`<DevAddr>`*   | -                                      | `OK`        |

Example:

You can only remove a group with the address already added.
```
AT+RMVMULC=11223344

OK
```

[Back](#content)


### AT+LSTMULC

Description: Multicast list

This command is used to get the information about the configured multicast group.

| Command        | Input Parameter | Return Value                                                        | Return Code |
| -------------- | --------------- | ------------------------------------------------------------------- | ----------- |
| `AT+LSTMULC?`  | -               | `AT+RMVMULC`: view multicast group information                      | `OK`        |
| `AT+LSTMULC=?` | -               | `MC1:[Class]:[DevAddr]:[NwkSK ey]:[AppSKey]:[Frequency]:[Datarate]` | `OK`        |

Examples:
```
AT+LSTMULC=?
B:11223344:11223344556677881122334455667788:11223344556677881122334455667788:868000000:0

OK
```

[Back](#content)

## RF Test

This section describes the commands related to RF test management.

### AT+TRSSI

Description: Start RF RSSI tone test

This command is used to start the RF RSSI tone test.

| Command      | Input Parameter | Return Value                        | Return Code           |
| ------------ | --------------- | ----------------------------------- | --------------------- |
| `AT+TRSSI?`  | -               | `AT+TRSSI`: start RF RSSI tone test | OK                    |
| `AT+TRSSI=?` | -               | -115                                | OK <br> AT_BUSY_ERROR |

:::tip 📝 NOTE
- `AT_BUSY_ERROR` is returned when the start radio frequency RSSI process is already running.
- This command is used for the RF certification test, `AT+TRSSI=?`. It provides a value in dBm, and it can only be read.
:::

**Example:**

```
AT+TRSSI=?
Rx FSK Test
RSSI Value -115 dBm
OK
```

[Back](#content)


### AT+TTONE

Description: Start RF tone test

This command is used to start the RF tone.

| Command     | Input Parameter | Return Value                   | Return Code           |
| ----------- | --------------- | ------------------------------ | --------------------- |
| `AT+TTONE?` | -               | `AT+TTONE`: start RF tone test | OK                    |
| `AT+TTONE`  | -               |                                | OK <br> AT_BUSY_ERROR |

:::tip 📝 NOTE
- `AT_BUSY_ERROR` is returned when the start frequency tone process is already running.
- This command is used for the RF certification test.
:::

**Example:**

```
AT+TTONE
Tx toneOK

```

[Back](#content)


### AT+TTX

Description: Start RF TX test

Set the number of packets sent for the RF TX test.

| Command          | Input Parameter | Return Value                                                  | Return Code           |
| ---------------- | --------------- | ------------------------------------------------------------- | --------------------- |
| `AT+TTX?`        | -               | `AT+TTX`: set number of packets to be sent for PER RF TX test | OK                    |
| `AT+TTX=<Input>` | `<integer>`     |                                                               | OK <br> AT_BUSY_ERROR |

:::tip 📝 NOTE
- `AT_BUSY_ERROR` is returned when the start tx process is already running.
- This command is used for the RF certification test.
- `<Input>`: 1 decimal integer and the range of values is 0~(2<sup>32</sup> -1).
:::

**Example:**

```
AT+TTX=4
Tx Test
OK

Tx Test : Packet 1 of 4
OnTxDone
Tx Test : Packet 2 of 4
OnTxDone
Tx Test : Packet 3 of 4
OnTxDone
Tx Test : Packet 4 of 4
OnTxDone
```

[Back](#content)


### AT+TRX

Description: Start RF RX test

Set the number of packets sent for the RF RX test.

| Command          | Input Parameter | Return Value                                                      | Return Code            |
| ---------------- | --------------- | ----------------------------------------------------------------- | ---------------------- |
| `AT+TRX?`        | -               | `AT+TRX`: set number of packets to be received for PER RF RX test | OK                     |
| `AT+TRX=<Input>` | `<integer>`     |                                                                   | OK <br> AT_PARAM_ERROR |

:::tip 📝 NOTE
- `AT_BUSY_ERROR` is returned when the start tx process is already running.
- This command is used for the RF certification test.
- `<Input>`: 1 decimal integer and the range of values is 0~(2<sup>32</sup> -1).
:::

**Example:**

```
AT+TRX=4
OK

Rx 1 of 4  >>> PER= 100 %
Rx 2 of 4  >>> PER= 100 %
Rx 3 of 4  >>> PER= 100 %
Rx 4 of 4  >>> PER= 100 %
```

[Back](#content)


### AT+TCONF

Description: Configure LoRa® RF test

This command is used to access the LoRa® configuration test.

| Command            | Input   parameter                                                                                                                           | Return   value                       | Return   code    |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------- |
| `AT+TCONF?`        | -                                                                                                                                           | `AT+TCONF`: configure LoRa® RF test  | OK               |
| `AT+TCONF=?`       | -                                                                                                                                           | AT+TCONF=868000000:14:4:12:0:0:0:1:16:25000:2:3 | OK               |
| `AT+TCONF=<Input>` | `<Freq>:<Power>:<Bandwidth>:<SpreadingFactor>:<CodingRate>:<LNA>:<PABoost>:<Modulation>:<PayloadLen>:<FskDeviation>:<LowDRopt>:<BTproduct>` | -                                    | OKAT_PARAM_ERROR |

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- This command is used for the RF certification test, and in this case, the default value is “868000000,14,0,7,1,0,0,1,4,25000,0,0”.

**Summary of parameters:**<br>
1 - Frequency <br>
2 - Power <br>
3 - Bandwidth parameter: (LoRa mode in Khz) 0=125, 1=250, 2=500, 3=7.8, 4=10.4, 5=15.63, 6=20.83, 7=31.25, 8=41.67, 9=62.5; (FSK mode in Hz): 4800-467000 <br>
4 - Spreading Factor (5-12) <br>
5 - Coding Rate: 1=4/5, 2=4/6, 3=4/7, 4=4/8 <br>
6 - LNA State (not implemented) <br>
7 - PA Boost State (not implemented) <br>
8 - Modulation: 0=FSK, 1=LoRa <br>
9 - Payload len <br>
10 - Freq deviation (only fsk 600 - 200000 hz) <br>
11 - LowDRopt (not implemented) <br>
12 - BT product (not implemented) <br>

:::

**Example:**

```
/* Example1: Set LoRa RF test configuration */

AT+TCONF=868000000:14:4:12:0:0:0:1:16:25000:2:3
OK

```

[Back](#content)


### AT+TTH

Description: RF TX hopping test

Starts RF TX hopping test from Start to Fstop, with Fdelta steps.

| Command          | Input Parameter                        | Return Value                                                                | Return Code            |
| ---------------- | -------------------------------------- | --------------------------------------------------------------------------- | ---------------------- |
| `AT+TTH?`        | -                                      | `AT+TTH`: start RF Tx hopping test from Fstart to Fstop, with Fdelta steps. | OK                     |
| `AT+TTH=?`       | -                                      | 868000000:868500000:100000:6                                                | OK                     |
| `AT+TTH=<Input>` | `<Fstart>:<Fstop>:<FDelta>:<PacketNb>` | -                                                                           | OK <br> AT_PARAM_ERROR |

:::tip 📝 NOTE
- `AT_PARAM_ERROR` is returned when setting wrong or malformed value.
- This command is used for the RF certification test, and in this case, the default value is “868000000,868500000,100000,6”.
:::

**Example:**

```
/* Example: set TX hopping test from 868 to 868,5 MHz with 6 steps of 100 kHz */ #

AT+TTH=868000000:868500000:100000:6
OK

Tx Hop at 868000000 Hz
Tx Test : Packet 1 of 6
OnTxDone
Tx Hop at 868100000 Hz
Tx Test : Packet 2 of 6
OnTxDone
Tx Hop at 868200000 Hz
Tx Test : Packet 3 of 6
OnTxDone
Tx Hop at 868300000 Hz
Tx Test : Packet 4 of 6
OnTxDone
Tx Hop at 868400000 Hz
Tx Test : Packet 5 of 6
OnTxDone
Tx Hop at 868500000 Hz
Tx Test : Packet 6 of 6
OnTxDone
```

[Back](#content)


### AT+TOFF

Description: Stop Radio frequency test

This command is used to stop the ongoing RF test.

| Command    | Input Parameter | Return Value                    | Return Code |
| ---------- | --------------- | ------------------------------- | ----------- |
| `AT+TOFF?` | -               | `AT+TOFF`: stop ongoing RF test | OK          |
| `AT+TOFF`  | -               |                                 | OK          |

:::tip 📝 NOTE
- This command is used for the RF certification test.
:::

[Back](#content)


### AT+CERTIF

Description: Configure LoRaWAN® Certification test

This command is used to start the RF Rx LoRa test.

| Command      | Input Parameter | Return Value                                                                                         | Return Code           |
| ------------ | --------------- | ---------------------------------------------------------------------------------------------------- | --------------------- |
| `AT+CERTIF?` | -               | `AT+CERTIF`: set the module in LoraWAN® Certification mode (0 = normal mode, 1 = certification mode) | OK                    |
| `AT+CERTIF`  | -               |                                                                                                      | OK <br> AT_BUSY_ERROR |

:::tip 📝 NOTE
- `AT_BUSY_ERROR` is returned when the start frequency tone process is already running.
- This command is used for the RF certification test and the timer to handler data transmission equal to 5s.
:::
