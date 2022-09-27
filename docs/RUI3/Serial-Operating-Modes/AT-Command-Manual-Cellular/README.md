# AT Command Manual (Cellular)

## Overview
AT command manual for cellular is a supplementary document on the main [RUI3 AT command set](/RUI3/Serial-Operating-Modes/AT-Command-Manual/). These set of AT commands only work on modules that have cellular capabilities.

### Devices that support RUI3 AT Commands Cellular

| RAK Modules                                        |
| -------------------------------------------------- |
| [RAK5010](/Product-Categories/WisTrio/RAK5010)     |
| [RAK5010-M](/Product-Categories/WisTrio/RAK5010-M) |

### AT Commands Format

#### RUI3 Standard Commands Format

The RUI3 standard AT commands has the standard format `AT+XXX`, with `XXX` denoting the command. However, LoRaWAN-related commands do not work on cellular modules. Only the general commands and miscellaneous commands work on cellular modules. These commands are related to information and overall configuration of the module like sleep mode, serial port lock, hardware model, etc.

- [AT General Commands](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#general-commands)
- [AT Miscellaneous Commands](/RUI3/Serial-Operating-Modes/AT-Command-Manual/#miscellaneous-at-command)

#### RUI3 Cellular Commands Format

For cellular-related commands, the RUI3 is designed to work on the format `ATCELL+XXX` where `XXX` denotes the specific command for the cellular module. These commands are based on the specific documentation of the cellular module.

For example, the BG96 Cellular module supports `AT+GMI` on its official command set. But in RUI3 AT Command Cellular implementation, this will be equivalent to `ATCELL+GMI`. You are basically sending `ATCELL+GMI` to the MCU of the board then the MCU with RUI3 firmware will send `AT+GMI` to the BG96 Module. You have no direct interaction with the Cellular Module.

Here's a table of some commands showing comparison (only to illustrate).

| Cellular Command Description      | RUI3 Command  | Actual Command in Cellular Module |
| --------------------------------- | ------------- | --------------------------------- |
| Request Manufacturer Identificat  | ATCELL+GMI    | AT+GMI                            |
| Operator Selection                | ATCELL+COPS=? | AT+COPS=?                         |

In summary, **AT+** on the cellular module original AT commands is replaced by **ATCELL+** in RUI3 followed by the specific command/function.

:::tip 📝 NOTE:
There are commands in BG96 do not have `AT+` in front of them like `ATI`, `AT&V`, and others. These commands still follow the RUI3 format of the `ATCELL+` command. For example, `ATI` is `ATCELL+ATI` in RUI3 command format.
:::

## AT Commands Cellular

This section list the common AT Commands for Cellular modules. This includes device information, TCP/IP, HTTP, MQTT, GNSS, etc.

:::tip 📝 NOTE:
The commands in this list are not the complete commands of the BG96 module. Only the mostly used commands are listed in this document. The complete command set can be found on the [Quectel BG96 webpage](https://www.quectel.com/product/lpwa-bg96-cat-m1-nb1-egprs).

- *Quectel_BG96_AT_Commands_Manual_V2.1*
- *Quectel_BG96_HTTP(S)_AT_Commands_Manual_V1.0*
- *Quectel_BG96_GNSS_AT_Commands_Manual_V1.1*
- *Quectel_BG96_TCP(IP)_AT_Commands_Manual_V1.0*
- *Quectel_BG96_MQTT_Application_Note_V1.0*

:::

### ATCELL+ATI

Description: Display Product Identification Information

The command shows the product information.

| Command      | Input Parameter | Return Value | Return Code |
| ------------ | --------------- | ------------ | ----------- |
| `ATCELL+ATI` <br> `ATCELL+ATI=` | -               | ATI <br> Quectel <br> BG96 <br> Revision: BG96MAR02A07M1G | OK / ERROR |

### ATCELL+AT&F

Description: Set All Current Parameters to Manufacturer Defaults

The command resets AT command settings to their factory default.

| Command                             | Input Parameter | Return Value | Return Code |
| ----------------------------------- | --------------- | ------------ | ----------- |
| `ATCELL+AT&F0` <br> `ATCELL+AT&F0=` | -               | -            | OK / ERROR  |

### ATCELL+QCFG

Description: Extended Configuration Settings

The command is used to query and configure various settings of UE. There are many configurations available like *nwscanmode*, *nwscanseq*, etc. It is highly recommended to see the *BG96_AT_Commands_Manual_V2.1.pdf* to get all possible configurations.

| Command | Input Parameter | Return Value                                | Return Code |
| ------- | --------------- | ------------------------------------------- | ----------- |
| `ATCELL+QCFG=?`| -        | Returns all configurations settings available           | OK / ERROR  |
| `ATCELL+QCFG=<Input>` | Input parameter depends on the specific configuration settings to modify. | -  | OK / ERROR         |

**Examples:**

Checking various configurations available in `AT+QCFG`.
```
ATCELL+QCFG=?
AT+QCFG=?
+QCFG: "nwscanmode",(0,1,3),(0,1)
+QCFG: "nwscanseq",(00-010203),(0,1)
+QCFG: "servicedomain",(1,2),(0,1)
+QCFG: "roamservice",(1,2,255),(0,1)
+QCFG: "band",(0-F),(0-7FFFFFFFFFFFFFFF),(0-7FFFFFFFFFFFFFFF),(0,1)
+QCFG: "msc",(0-2)
+QCFG: "sgsn",(0-2)
+QCFG: "celevel",(0-2)
+QCFG: "pdp/duplicatechk",(0,1)
+QCFG: "iotopmode",(0-2)
+QCFG: "nb1/bandprior",<band_priority_seq>
+QCFG: "psm/urc",(0,1)
+QCFG: "ledmode",(0,1,3)
+QCFG: "gpio",<mode>,<pin>[,[<dir>,<pull>,<drv>]/[<val>][,<save>]]
+QCFG: "airplanecontrol",(0,1)
+QCFG: "urc/ri/ring",("off","pulse","always","auto","wave"),(1-2000),(1-10000),(1-10000),("off","on"),(1-5)
+QCFG: "urc/ri/smsincoming",("off","pulse","always"),(1-2000),(1-5)
+QCFG: "urc/ri/other",("off","pulse"),(1-2000),(1-5)
+QCFG: "risignaltype",("respective","physical")
+QCFG: "urc/delay",(0,1)
+QCFG: "cmux/urcport",(0-4)
+QCFG: "ims",(0-2)
+QCFG: "apready",(0,1),(0,1),(100-3000)
+QCFG: "nccconf",(0-1FF)
+QCFG: "psm/enter",(0,1)
+QCFG: "simeffect",(0,1)
+QCFG: "irat/timer",(5,300),(5,20)
+QCFG: "nasconfig",(0-7FFF)
+QCFG: "bip/auth",(0-3)

OK
```

Setting up *nwscanmode* parameters.
```
ATCELL+QCFG="nwscanseq",030201,1
AT+QCFG="nwscanseq",030201,1
OK
```

Checking specific mode parameters.
```
ATCELL+QCFG="nwscanseq"?
AT+QCFG="nwscanseq"?
+QCFG: "nwscanseq",030201
OK
```

### ATCELL+CTZU

Description: Automatic Time Zone Update

The Write Command enables and disables automatic time zone updates via NITZ. The configuration is stored in NV automatically.

| Command | Input Parameter | Return Value                                        | Return Code |
| ------- | --------------- | --------------------------------------------------- | ----------- |
| `ATCELL+CTZU?`  | -       |`+CTZU: `<0, 1 or 3>                                 | OK / ERROR  |
| `ATCELL+CTZU=?` | -       | `+CTZU: (0,1,3)`                                    | OK / ERROR  |

+CTZU values:
- `0` = Disable automatic time zone update via NITZ.
- `1` = Enable automatic time zone update via NITZ.
- `3` = Enable the local time.

**Examples:**

```
ATCELL+CTZU?
AT+CTZU?
+CTZU: 1

OK

ATCELL+CTZU=?
AT+CTZU=?
+CTZU: (0,1,3)

OK

ATCELL+CTZU=3
AT+CTZU=3
OK
```

### ATCELL+CTZR

Description: Time Zone Reporting

The command controls the time zone reporting of a changed event. If reporting is enabled, the MT returns the unsolicited result code `+CTZV: <tz>` or `+CTZE: <tz>,<dst>,<time>` whenever the time zone is changed. The configuration is stored in NV automatically.

| Command | Input Parameter | Return Value                                        | Return Code |
| ------- | --------------- | --------------------------------------------------- | ----------- |
| `ATCELL+CTZR?`  | -       |`+CTZR: `<0, 1 or 2>                                 | OK / ERROR  |
| `ATCELL+CTZR=?` | -       |`+CTZU: (0-2)`                                       | OK / ERROR  |

Reporting type:
- `0` = Disable time zone reporting of a changed event
- `1` = Enable time zone reporting of changed event by unsolicited result code: `+CTZV: <tz>`
- `2` = Enable extended time zone reporting of changed event by unsolicited result code: `+CTZE: <tz>,<dst>,<time>`

**Examples:**

```
ATCELL+CTZR=?
AT+CTZR=?
+CTZR: (0-2)
OK

ATCELL+CTZR=2
AT+CTZR=2
OK

ATCELL+CTZR?
AT+CTZR?
+CTZR: 2

+CTZE: “+32”,0,“2013/08/23,06:51:13”
```

### ATCELL+COPS

Description: Operator Selection

The command returns the current operators and their status and allows setting automatic or manual network selection.

| Command | Input Parameter | Return Value                            | Return Code |
| ------- | --------------- | --------------------------------------- | ----------- |
| `ATCELL+COPS?`  | -       | `+COPS: <mode, format, operator, act>`  | OK / ERROR  |
| `ATCELL+COPS=?` | -       | Returns available network               | OK / ERROR  |
| `ATCELL+COPS=<Input Paramter>` | `<mode, format, operator, act>`    | Configures Connection ot the Network | OK / ERROR  |

It is highly recommended to see the *BG96_AT_Commands_Manual_V2.1.pdf* to get complete details.

Mode:
- `0` = Automatic
- `1` = Manual operator selection
- `2` = Manual deregister from network

Format:
- `0` = Long format alphanumeric operator
- `1` = Short format alphanumeric operator

Operator:
- Operator name 

Act (Access Technology) of the network:
- `0` = GSM
- `8` = LTE Cat M1
- `9` = LET Cat NB1

**Examples:**

```
ATCELL+COPS=?
AT+COPS=?
+COPS: (1,"SMART","SMART","51503",0),(3,"Globe Telecom-PH","GLOBE","51502",0),,(0,1,2,3,4),(0,1,2)

OK

ATCELL+COPS=0,0,"SMART",0
AT+COPS=0,0,"SMART",0
OK

ATCELL+COPS?
AT+COPS?
+COPS: 0,0,"SMART Prepaid",0

OK
```

### ATCELL+QICSGP

Description: Configure Parameters of a TCP/IP Context

The command can be used to configure the `<APN>`, `<username>`, `<password>`, and other parameters of a TCP/IP context.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QICSGP?`                 | -                | `+QICSGP: <context_type>,<APN>,<username>,<password>,<authentication>` | OK          |
| `ATCELL+QICSGP=?`                | -                | `+QICSGP: (1-16),(1-3),<APN>,<username>,<password>,(0-3)` | OK          |
| `ATCELL+QICSGP=<Input Parameter>` | <*context_type*> | `<context_type>,<APN>,<username>,<password>,<authentication>`   |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<contextID>` Integer type. The context ID. The range is 1-16. <br>
`<context_type>` Integer type. The protocol type. `1` = IPV4 or `2` = IPV6 <br>
`<APN>` String type. The access point name. <br>
`<username>` String type. The username. <br>
`<password>` String type. The password. <br>
`<authentication>` Integer type. The authentication methods = `0 = NONE`, `1 = PAP`, `2 = CHAP` or `3 = PAP or CHAP` 

**Examples:**

```
ATCELL+QICSGP=?
AT+QICSGP=?
+QICSGP: (1-16),(1-3),<APN>,<username>,<password>,(0-3)

OK

ATCELL+QICSGP=1,1,"internet","","",0
AT+QICSGP=1,1,"internet","","",0

OK

ATCELL+QICSGP=1
AT+QICSGP=1
+QICSGP: 1,"internet","","",0

OK

ATCELL+QICSGP=2
AT+QICSGP=2
+QICSGP: 0,"","","",0

OK
```

### ATCELL+CREG 

Description: Network Registration Status

The command checks the module registration status to the network via unsolicited result code.

| Command | Input Parameter | Return Value                                        | Return Code |
| ------- | --------------- | --------------------------------------------------- | ----------- |
| `ATCELL+CREG?`  | -       |`+CREG: 0,1`                                         | OK / ERROR  |
| `ATCELL+CREG=?` | -       |`+CREG: (0-2)`                                       | OK / ERROR  |
| `ATCELL+CREG=<Input Paramter>` | `0,1,2`|                                       | OK / ERROR  |

It is highly recommended to see the *BG96_AT_Commands_Manual_V2.1.pdf* to get complete details.

Input parameter:
- `0` = Disable network registration unsolicited result code
- `1` = Enable network registration unsolicited result code
- `2` = Enable network registration and location information unsolicited result code

**Examples:**

```
ATCELL+CREG=?
AT+CREG=?
+CREG: (0-2)

OK

ATCELL+CREG?
AT+CREG?
+CREG: 0,1

OK

ATCELL+CREG=1
AT+CREG=1
OK
```

### ATCELL+CPIN 

Description: Enter PIN

The command is used to enter a password or query whether or not the module requires a password which is necessary before it can be operated. The password may be (U)SIM PIN, (U)SIM PUK, PH-SIM PIN, etc.


| Command | Input Parameter | Return Value    | Return Code |
| ------- | --------------- | --------------- | ----------- |
| `ATCELL+CPIN?`  | -       | `+CPIN: <code>` | OK / ERROR  |
| `ATCELL+CPIN=?` | -       | -               | OK / ERROR  |

It is highly recommended to see the *BG96_AT_Commands_Manual_V2.1.pdf* to get complete CPIN code details and how to change the pin.

Code
- `READY` = MT is not pending for any password
- `SIM PIN` = MT is waiting for (U)SIM PIN to be given

**Examples:**

```
ATCELL+CPIN=?
AT+CPIN=?
OK

ATCELL+CPIN?
AT+CPIN?
+CPIN: READY

OK
```

### ATCELL+QNWINFO

Description: Query Network Information

The command indicates network information such as the access technology selected, the operator, and the band selected.

| Command          | Input Parameter | Return Value                                        | Return Code |
| ---------------- | --------------- | --------------------------------------------------- | ----------- |
| `ATCELL+QNWINFO` | -               | `+QNWINFO: <service info> `                         | OK / ERROR  |

**Examples:**

```
ATCELL+QNWINFO
AT+QNWINFO
+QNWINFO: "EDGE","51503","GSM 1800",698

OK
```

### ATCELL+QIDEACT

Description: Deactivate a PDP Context

The command is used to deactivate the specific context and close all TCP/IP connections set up in the context. 

| Command          | Input Parameter | Return Value                                        | Return Code |
| ---------------- | --------------- | --------------------------------------------------- | ----------- |
| `ATCELL+QIDEACT=?` | -               | `+QIDEACT: (1-16)`                         | OK / ERROR  |
| `ATCELL+QIDEACT=<Input Paramter>` | `<1-16>`               | -                        | OK / ERROR  |

**Examples:**

```
ATCELL+QIDEACT=?
AT+QIDEACT=?
+QIDEACT: (1-16)

OK

ATCELL+QIDEACT=1
AT+QIDEACT=1
OK
```

### ATCELL+QIACT

Description: Activate a PDP Context

Before activating a PDP context via AT+QIACT, the context should be configured by AT+QICSGP. 

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QIACT?`                 | -                | Returns current available context <br>`+QIACT: <contextID>,<context_state>,<context_type>,<ipaddress>` | OK          |
| `ATCELL+QIACT=?`                | -                | `+QIACT: (1-16)` | OK          |
| `ATCELL+QIACT=<Input Parameter>` | <*contextID*> | -   |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<contextID>` Integer type. The context ID. The range is 1-16. <br>
`<context_state>` Integer type. The context type. `0` = Deactivated or `1` = Activated <br>
`<context_type>` Integer type. The protocol type. `1` = IPV4 or `2` = IPV6 <br>
`<ipaddress>` String type. The username. <br>

**Examples:**

```
ATCELL+QIACT=?
AT+QIACT=?
+QIACT: (1-16)

OK

ATCELL+QIACT=1
AT+QIACT=1
ATCELL+QIACT?

OK
AT+QIACT?
+QIACT: 1,1,1,"10.100.32.119"

OK

```

### ATCELL+QPING

Description: Ping a Remote Server

The command is used to test the Internet protocol reachability of a host.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QPING=?`                 | -                | `+QPING: (1-16),<host>,(1-255),(1-10)`                | OK          |
| `ATCELL+QPING=<Input Parameter>` | `<contextID>,<host><timeout><pingnum>` | -   |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QPING=?
AT+QPING=?
+QPING: (1-16),<host>,(1-255),(1-10)

OK
```

### ATCELL+QIOPEN

Description: Open a Socket Service

The command is used to open a socket service.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QIOPEN=?`                 | -                | `+QIOPEN: (1-16),(0-11),"TCP/UDP/TCP LISTENER/UDP SERVICE","<IP_address>/<domain_name>",<remote_port>,<local_port>,(0-2)` | OK          |
| `ATCELL+QIOPEN=<Input Parameter>` | `<contextID>,<connectID>,<service_type>,<IP_address>/<domain_name>,<remote_port>[,<local_port>[,<access_mode>]]` | -   |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QIOPEN=?
AT+QIOPEN=?
+QIOPEN: (1-16),(0-11),"TCP/UDP/TCP LISTENER/UDP SERVICE","<IP_address>/<domain_name>",<remote_port>,<local_port>,(0-2)

OK
```

### ATCELL+QISENDEX

Description: Send Hex String

This command is used to send hex string data. It cannot be applied for “UDP SERVICE” and “TCP LISTENER” sockets.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QISENDEX=?`                 | -                | `+QISENDEX: (0-11),<hex_string>)` | OK          |
| `ATCELL+QISENDEX=<Input Parameter>` | `<connectID>,<hex_string>` | -   |  SEND OK <br> SEND FAIL <br> ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<connectID>` Integer type. The socket service index. The range is 0-11 <br>
`<hex_string>` String type. Hex string. The max length is 512 bytes <br>

**Examples:**

```
ATCELL+QISENDEX=?
AT+QISENDEX=?
+QISENDEX: (0-11),<hex_string>

OK
```

### ATCELL+QISTATE

Description: Query Socket Service Status

The command is used to query the socket service status. 

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QISTATE=?`               | -                | -                                                     | OK          |
| `ATCELL+QISTATE=<Input Parameter>` | `<query_type>,<contextID>` or `<query_type>,<connectID>` | Returns the status of all existing connections   |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QISTATE=?
AT+QISTATE=?
OK
```

### ATCELL+QICLOSE

Description: Close a Socket Service

The command is used to close the specified socket service. Depending on the network, it will take at most 10 seconds (default value, can be modified by `<timeout>`) to return “OK” or “ERROR” after executing AT+QICLOSE. Before the response is returned, other AT commands cannot be executed.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QICLOSE=?`               | -                | `+QICLOSE: (0-11),(0-65535)`                           | OK          |
| `ATCELL+QICLOSE=<Input Parameter>` | `<connectID>,<timeout>` | -                                            |   OK / ERROR   |

It is highly recommended to see the *BG96_TCP/IP_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QICLOSE=?
AT+QICLOSE=?
+QICLOSE: (0-11),(0-65535)

OK
```

### ATCELL+QHTTPCFG

Description: Configure Parameters for HTTP(S) Server

The command is used to configure the parameters for HTTP(S) server, including configuring a PDP context ID, customizing HTTP(S) request header, outputting HTTP(S) response header, and querying SSL settings.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QHTTPCFG=?`              | -                | `+QHTTPCFG: "contextid",(1-16)`<br>`+QHTTPCFG: "requestheader",(0,1)`<br>`+QHTTPCFG: "responseheader",(0,1)`<br>`+QHTTPCFG: "prefix",<ip_prefix>,<prefix_length>`<br>`+QHTTPCFG: "sslctxid",(0-5)`<br>`+QHTTPCFG: "contenttype",(0-3)` | OK          |
| `ATCELL+QHTTPCFG?`               | - | `+QHTTPCFG: "contextid",1`<br>`+QHTTPCFG: "requestheader",0`<br>`+QHTTPCFG: "responseheader",0`<br>`+QHTTPCFG: "prefix","64:FF9B:0:0:0:0:0:0",96`<br>`+QHTTPCFG: "sslctxid",1`<br>`+QHTTPCFG: "contenttype",0` |   OK / ERROR   |

It is highly recommended to see the *BG96_HTTP(S)_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QHTTPCFG?
AT+QHTTPCFG?
+QHTTPCFG: "contextid",1
+QHTTPCFG: "requestheader",0
+QHTTPCFG: "responseheader",0
+QHTTPCFG: "prefix","64:FF9B:0:0:0:0:0:0",96
+QHTTPCFG: "sslctxid",1
+QHTTPCFG: "contenttype",0

OK

ATCELL+QHTTPCFG=?
AT+QHTTPCFG=?
+QHTTPCFG: "contextid",(1-16)
+QHTTPCFG: "requestheader",(0,1)
+QHTTPCFG: "responseheader",(0,1)
+QHTTPCFG: "prefix",<ip_prefix>,<prefix_length>
+QHTTPCFG: "sslctxid",(0-5)
+QHTTPCFG: "contenttype",(0-3)

OK
```

### ATCELL+QSSLCFG

Description: Configure Parameters of an SSL Context

The command can be used to configure the SSL version, cipher suites, security level, CA certificate, client certificate, and client key.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QHTTPCFG=?`              | -                | SSL Configuration values                              | OK          |

It is highly recommended to see the *BG96_SSL_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QSSLCFG=?
AT+QSSLCFG=?
+QSSLCFG: "sslversion",(0-5),(0-4)
+QSSLCFG: "ciphersuite",(0-5),(0X0035,0X002F,0X0005,0X0004,0X000A,0X003D,0XC011,0XC012,0XC013,0XC014,0XC027,0XC028,0XC02F,0XFFFF)
+QSSLCFG: "cacert",(0-5),<cacertpath>
+QSSLCFG: "clientcert",(0-5),<client_cert_path>
+QSSLCFG: "clientkey",(0-5),<client_key_path>
+QSSLCFG: "seclevel",(0-5),(0-2)
+QSSLCFG: "sni",(0-5),(0,1)
+QSSLCFG: "checkhost",(0-5),(0,1)
+QSSLCFG: "ignorecertchain",(0-5),(0,1)
+QSSLCFG: "ignorelocaltime",(0-5),(0,1)
+QSSLCFG: "negotiatetime",(0-5),(10-300)

OK
```

### ATCELL+QHTTPURL

Description: Set URL of HTTP(S) Server

The URL must begin with `“http://”` or `“https://”`, which indicates an HTTP or HTTPS server will be accessed.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QHTTPURL=?`              | -                | `+QHTTPURL: (1-700),(1-65535)`                        | OK          |
| `ATCELL+QHTTPURL=<Input Parameter>` | `<URL_length>,<timeout>` | -                                            |   OK / ERROR   |

It is highly recommended to see the *BG96_HTTP(S)_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QHTTPURL?
AT+QHTTPURL?
OK

ATCELL+QHTTPURL=22,80
AT+QHTTPURL=22,80
CONNECT
```

### ATCELL+QHTTPGET

Description: Send GET Request to HTTP(S) Server

The command is used to query the Send and Get Request to HTTPS Server.

| Command                          | Input Parameter  | Return Value                                          | Return Code |
| -------------------------------- | ---------------- | ----------------------------------------------------- | ----------- |
| `ATCELL+QHTTPGET=?`              | -                | `+QHTTPGET: (1-65535),(1-2048),(1-65535)`             | OK          |
| `ATCELL+QHTTPGET=<Input Parameter>` | `<rsptime>`,`<data_length>`,`<input_time>` | -                        |   OK / ERROR   |

It is highly recommended to see the *BG96_HTTP(S)_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<rsptime>` Integer type. The range is 1-65535, and the default value is 60. Unit: second. It is used to configure the timeout for the HTTP(S) GET respons <br>
`<data_length>` Integer type. The length of HTTP(S) request information, including HTTP(S) request header and HTTP(S) request body. The range is 1-2048. Unit: byte. <br>
`<input_time>` Integer type. The maximum time for inputting HTTP(S) requestinformation. The range is 1-65535, and the default value is 60. Unit: second.

**Examples:**

```
ATCELL+QHTTPGET=?
AT+QHTTPGET=?
+QHTTPGET: (1-65535),(1-2048),(1-65535)

OK
```

### ATCELL+QHTTPREAD

Description: Read Response from HTTP(S) Server via UART/USB

After sending HTTP(S) GET/POST requests, customers can retrieve HTTP(S) response information from HTTP(S) server via UART/USB port by the AT+QHTTPREAD command.

| Command                          | Input Parameter  | Return Value             | Return Code |
| -------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QHTTPREAD=?`             | -                | `+QHTTPREAD: (1-65535)`  | OK          |
| `ATCELL+QHTTPGET=<Input Parameter>` | `<wait_time>` | -                        | OK / ERROR  |

It is highly recommended to see the *BG96_HTTP(S)_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<wait_time>` Integer type. The maximum interval time between receiving two packets of data. The range is 1-65535, and the default value is 60. Unit: second

**Examples:**

```
ATCELL+QHTTPREAD=?
AT+QHTTPREAD=?
+QHTTPREAD: (1-65535)

OK
```

### ATCELL+QGPS

Description: Turn on GNSS

The command is used to turn on the GNSS function. Currently, it only supports turning on GNSS in stand-alone mode (that is, `<gnssmode>`=1). When `<fixcount>` is 0, GNSS will fix the position continuously, and it can be turned off via AT+QGPSEND. When `<fixcount>` is non-zero and reaches the specified value, GNSS will be turned off automatically.

| Command                         | Input Parameter  | Return Value             | Return Code |
| ------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QGPS=?`                 | -                | `+QGPS: (1-4),(1-255),(1-1000),(0-1000),(1-65535)`  | OK          |
| `ATCELL+QGPS=<Input Parameter>` | `<gnssmode>`,`<fixmaxtime>`,`<fixmaxdist>`,`<fixcount>`,`<fixrate>` | -    | OK / ERROR  |

It is highly recommended to see the *Quectel_BG96_GNSS_AT_Commands_Manual_V1.1* to get complete details.

### ATCELL+QGPSLOC

Description: Acquire Positioning Information

Before executing the command, GNSS must be turned on via AT+QGPS.

| Command                         | Input Parameter  | Return Value             | Return Code |
| ------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QGPSLOC=?`              | -                | GNSS parameters           | OK          |

It is highly recommended to see the *Quectel_BG96_GNSS_AT_Commands_Manual_V1.1* to get complete details.

**Examples:**

```
ATCELL+QGPSLOC=?
AT+QGPSLOC=?
+QGPSLOC: <UTC>,<latitude>,<longitude>,<hdop>,<altitude>,<fix>,<cog>,<spkm>,<spkn>,<date>,<nsat>

OK
```

### ATCELL+QGPSEND

Description: Turn off GNSS

When GNSS is turned on and `<fixcount>` is 0, GNSS fixes the position continuously. In this case, GNSS can be turned off compulsorily via AT+QGPSEND. When `<fixcount>` is non-zero, GNSS will be turned off automatically when the parameter reaches the specified value, and thus the command can be ignored. 

| Command                         | Input Parameter  | Return Value   | Return Code |
| ------------------------------- | ---------------- | -------------- | ----------- |
| `ATCELL+QGPSEND=?`              | -                | -              | OK          |

It is highly recommended to see the *Quectel_BG96_GNSS_AT_Commands_Manual_V1.1* to get complete details.

### ATCELL+QGPSCFG

Description: GNSS Configurations

The command is used to query and configure various GNSS settings, including NMEA sentences output port, output type of NMEA sentences, and more 

| Command                         | Input Parameter  | Return Value             | Return Code |
| ------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QGPSCFG=?`              | -                | GNSS settings, parameters, etc. | OK          |
| `ATCELL+QGPSCFG=<Input Parameter>` | Specific parameter to change | -    | OK / ERROR  |

It is highly recommended to see the *Quectel_BG96_GNSS_AT_Commands_Manual_V1.1* to get complete details.

**Examples:**

```
ATCELL+QGPSCFG=?
AT+QGPSCFG=?
+QGPSCFG: "outport",("none","usbnmea","uartnmea","auxnmea","cmux1","cmux2","cmux3","cmux4"),(4800,9600,19200,38400,57600,115200)
+QGPSCFG: "nmeasrc",(0,1)
+QGPSCFG: "gpsnmeatype",(0-31)
+QGPSCFG: "glonassnmeatype",(0-7)
+QGPSCFG: "galileonmeatype",(0,1)
+QGPSCFG: "beidounmeatype",(0-3)
+QGPSCFG: "gsvextnmeatype",(0,1)
+QGPSCFG: "gnssconfig",(0-6)
+QGPSCFG: "autogps",(0,1)
+QGPSCFG: "odpcontrol",(0-2)
+QGPSCFG: "dpoenable",(0,1)
+QGPSCFG: "plane",(0-2)
+QGPSCFG: "suplver",(1,2)
+QGPSCFG: "agpsposmode",(0-4294967295)
+QGPSCFG: "lbsapn",(0-31),(0-4),<apn>
+QGPSCFG: "agnssprotocol",(0-255),(0-65535)
+QGPSCFG: "gpsweek",(0-65535)
+QGPSCFG: "appidname",<id>,<pwd>
+QGPSCFG: "ecidconfig",(0,1)
+QGPSCFG: "sate_mode",(0,1)
+QGPSCFG: "speed_threshold",(0-2)[,(0-10000)]
+QGPSCFG: "estimation_error",<hori_unc>,<vert_unc>,<speed_unc>,<head_unc>
+QGPSCFG: "nmea_epe",(0,1)
+QGPSCFG: "agnssjamming",(0-4)[,(2-10),(1-65535)]
+QGPSCFG: "agnssjammingurcmode",(0-1)

OK

ATCELL+QGPSCFG="nmeasrc",1 
AT+QGPSCFG="nmeasrc",1 
OK

```

### ATCELL+QFUPL

Description: Upload a File

The command can be used to upload a file to UFS.

| Command                          | Input Parameter  | Return Value             | Return Code |
| -------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QFUPL=?`                 | -                | `+QFUPL: <filename>[,(1-<freesize>)[,(1-65535)[,(0,1)]]]`  | OK          |
| `ATCELL+QFUPL=<Input Parameter>` | `<filename>`,`<file_size>`,`<timeout>`,`<ackmode>]]]` | -                        | OK / ERROR  |

It is highly recommended to see the *BG96_FILE_AT_Commands_Manual_V1.0.pdf* to get complete details.

`<freesize>` The free space size of `<name_pattern>`. Refer to the AT+QFLDS command for more details of `<name_pattern>`.
`<filename>` Name of the file to be uploaded. The maximum length is 80 bytes. `<filename>` Name of the file to be uploaded to UFS.
`<file_size>` The file size is expected to be uploaded. The default value is 10240. Unit: byte.
`<upload_size>` The actual size of the uploaded data. Unit: byte.
`<timeout>` The time waiting for data to be inputted to USB/UART. The default value is 5. Unit: s.
` <ackmode>` Whether to use ACK mode: 0 = Turn off the ACK mode by default and 1 = Turn on the ACK mode.
`<checksum>` The checksum of the uploaded data.

**Examples:**

```
ATCELL+QFUPL=?
AT+QFUPL=?
+QFUPL: <filename>[,(1-<freesize>)[,(1-65535)[,(0,1)]]]

OK

ATCELL+QFUPL="cacert.pem",1187,100
AT+QFUPL="cacert.pem",1187,100
CONNECT
```

### ATCELL+QFDEL

Description: Delete Files

The command deletes a specified file or all the files in UFS.

| Command                          | Input Parameter  | Return Value             | Return Code |
| -------------------------------- | ---------------- | ------------------------ | ----------- |
| `ATCELL+QFDEL=?`                 | -                | `+QFDEL: <filename>`     | OK          |

It is highly recommended to see the *BG96_FILE_AT_Commands_Manual_V1.0.pdf* to get complete details.

**Examples:**

```
ATCELL+QFUPL=?
AT+QFDEL=?
+QFDEL: <filename>

OK
```
