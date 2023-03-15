---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK7432/RAK7434.
rak_img: /assets/images/wisnode/rak7432-rak7434/overview/RAK7432-RAK7434.png
prev: ../Quickstart/
next: ../Datasheet-RAK743/
tags:
  - RAK7432
  - RAK7434
  - AT Command Manual
  - wisnode
---

# RAK7432/RAK7434 AT Command Manual

## Overview

This document applies to Analog to LoRaWAN Bridge products. The supported product models include RAK7432/RAK7434.

### AT Command Syntax

The AT command must start with `AT` or `at` and ends with `<CR> <LF>`.

AT commands can be divided into:
   - **Read commands** - read the configuration or status of the device, which is in the format of `AT+<x>`
   - **Write commands** - write/modify the device configuration, which is in the format of `AT+<x>=<m>:<n>`
   The command name and parameters are separated by "**=**". If there are multiple parameters, the parameters are separated by "**:**".
   - **Test commands** - is the test command executable, which is in the format of `AT+<x>=?`

The response format of the command is usually:

| Condition                        | Response                                    |
| -------------------------------- | ------------------------------------------- |
| Normal response with information | `<Response><CR><LF>OK<CR><LF>`              |
| Normal response                  | `OK<CR><LF>`                                |
| Response when an error occurs    | `ERROR <Error code>:<Error packet><CR><LF>` |

::: tip 📝 NOTE
AT commands are not case-sensitive.
:::

### USB Configuration Interface

The devices are equipped with a standard USB interface for configuring via AT commands. The serial parameters are as follows:

<table>
    <thead><tr><th>Parameter</th><th>Value</th></tr></thead>
    <tbody>
        <tr><td>Baud rate</td><td>115200</td></tr>
        <tr><td>Data bit</td><td>8</td></tr>
        <tr><td>Stop bit</td><td>1</td></tr>
        <tr><td>Vrification</td><td>No</td></tr>
  </tbody>
</table>

### Common Errors

<table>
    <thead><tr><th>Error Code</th><th>Description</th></tr></thead>
    <tbody>
        <tr><td>ERROR 1</td><td>Unsupported command</td></tr>
        <tr><td>ERROR 2</td><td>Syntax Error</td></tr>
        <tr><td>ERROR 3</td><td>Storage failure</td></tr>
        <tr><td>ERROR 4</td><td>System busy</td></tr>
        <tr><td>ERROR 5</td><td>Parameter format / number error</td></tr>
        <tr><td>ERROR 6</td><td>Insufficient resources</td></tr>
        <tr><td>ERROR 7</td><td>Parameter out of valid range</td></tr>
  </tbody>
</table

<br>

## LoRaWAN Commands

1. <b>AT+DEVEUI</b>

This command reads or modifies the LoRaWAN Device EUI. The command takes effect after restart.

| Operation | AT Command               | Response                                                                                             |
| --------- | ------------------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+DEVEUI`              | `<dev_eui>` <br> `OK`                                                                                |
| Write     | `AT+DEVEUI=<device_eui>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+DEVEUI=?`            | `OK`                                                                                                 |


| Parameter   | Information                                                     |
| ----------- | --------------------------------------------------------------- |
| **dev_eui** | **Device EUI**: Hexadecimal characters, 16&nbsp;bytes in length |

2. <b>AT+REGION</b>

This command reads or modifies the Working Frequency Region/Band of the device. It will take effect after restart.

| Operation | AT Command           | Response                                                                                             |
| --------- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+REGION`          | `<region>` <br> `OK`                                                                                 |
| Write     | `AT+REGION=<region>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+REGION=?`        | `OK`                                                                                                 |


| Parameter  | Information                                                                                           |
| ---------- | ----------------------------------------------------------------------------------------------------- |
| **region** | **Supports frequency bands:** EU433, CN470, CN470ALI, RU864, IN865, EU868, US915, AU915, KR920, AS923 |

3. <b>AT+JOINMODE</b>

This command reads or modifies the LoRaWAN Activation Mode of the device. It will take effect after restart.

| Operation | AT Command           | Response                                                                                             |
| --------- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+JOINMODE`        | `<mode>` <br> `OK`                                                                                   |
| Write     | `AT+JOINMODE=<mode>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+JOINMODE=?`      | `OK`                                                                                                 |


| Parameter | Information                                |
| --------- | ------------------------------------------ |
| **mode**  | **Supported activation mode:** ABP or OTAA |

4.  <b>AT+PUBLIC</b>

This command reads or modifies the LoRaWAN Public Settings of the device. The working mode is set to Public by default (1 value of the parameter). The modification will take effect after restart.

| Operation | AT Command      | Response                                                                                             |
| --------- | --------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+PUBLIC`     | `<x>` <br> `OK`                                                                                      |
| Write     | `AT+PUBLIC=<x>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+PUBLIC=?`   | `OK`                                                                                                 |


| Parameter | Information                                              |
| --------- | -------------------------------------------------------- |
| **x**     | **Is the node working with the public LoRaWAN network?** |
| 0         | Not working in Public mode                               |
| 1         | Working in Public mode                                   |

5.  <b>AT+CLASS</b>

This command reads or modifies the LoRaWAN working Class of the device. Effective immediately after modification.

| Operation | AT Command         | Response                                                                                             |
| --------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+CLASS`         | `<class>` <br> `OK`                                                                                  |
| Write     | `AT+CLASS=<class>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+CLASS=?`       | `OK`                                                                                                 |


| Parameter | Information                   |
| --------- | ----------------------------- |
| **class** | **Supported device Classes:** |
| A         | Class A                       |
| B         | Class B                       |
| C         | Class C                       |

6.  <b>AT+APPEUI</b>

The APPEUI parameter is valid when OTAA is activated. The modification will take effect after restart.

| Operation | AT Command            | Response                                                                                             |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+APPEUI`           | `<app_eui>` <br> `OK`                                                                                |
| Write     | `AT+APPEUI=<app_eui>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+APPEUI=?`         | `OK`                                                                                                 |


| Parameter   | Information                                                         |
| ----------- | ------------------------------------------------------------------- |
| **app_eui** | **Application EUI:** Hexadecimal character, 16&nbsp;bytes in length |

7.  <b>AT+APPKEY</b>

The APPKEY parameter is valid in OTAA Activation Mode. The modification will take effect after restart.

| Operation | AT Command            | Response                                                                                             |
| --------- | --------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+APPKEY`           | `<app_key>` <br> `OK`                                                                                |
| Write     | `AT+APPKEY=<app_key>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+APPKEY=?`         | `OK`                                                                                                 |


| Parameter   | Information                                                         |
| ----------- | ------------------------------------------------------------------- |
| **app_key** | **Application Key:** Hexadecimal character, 32&nbsp;bytes in length |

8. <b>AT+DEVADDR</b>

The DEVADDR parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command              | Response                                                                                             |
| --------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+DEVADDR`            | `<dev_addr>` <br> `OK`                                                                               |
| Write     | `AT+DEVADDR=<dev_addr>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+DEVADDR=?`          | `OK`                                                                                                 |


| Parameter    | Information                                                       |
| ------------ | ----------------------------------------------------------------- |
| **dev_addr** | **Device Address:** Hexadecimal character, 8&nbsp;bytes in length |

9.  <b>AT+APPSKEY</b>

The APPSKEY parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command              | Response                                                                                             |
| --------- | ----------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+APPSKEY`            | `<apps_key>` <br> `OK`                                                                               |
| Write     | `AT+APPSKEY=<apps_key>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+APPSKEY=?`          | `OK`                                                                                                 |


| Parameter    | Information                                                                 |
| ------------ | --------------------------------------------------------------------------- |
| **apps_key** | **Application Session Key:** Hexadecimal character, 32&nbsp;bytes in length |

10. <b>AT+NWKSKEY</b>

The NWKSKEY parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command             | Response                                                                                             |
| --------- | ---------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+NWKSKEY`           | `<nwks_key>` <br> `OK`                                                                               |
| Write     | `AT+NWKSKEY=<nwkskey>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+NWKSKEY=?`         | `OK`                                                                                                 |


| Parameter    | Information                                                             |
| ------------ | ----------------------------------------------------------------------- |
| **nwks_key** | **Network Session Key:** Hexadecimal character, 32&nbsp;bytes in length |

11. <b>AT+ADR</b>

Turn on/off the LoRaWAN dynamic rate adjustment function of the device, which is “on” by default. The modification will take effect immediately.

| Operation | AT Command   | Response                                                                                             |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+ADR`     | `<n>` <br> `OK`                                                                                      |
| Write     | `AT+ADR=<n>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+ADR=?`   | `OK`                                                                                                 |


| Parameter | Information            |
| --------- | ---------------------- |
| **n**     | **Adaptive Data Rate** |
| 0         | Disable ADR            |
| 1         | Enable ADR             |

12.  <b>AT+DATARATE</b>

Read/modify the LoRaWAN DataRate setting of the device, which is valid when the ADR function is turned off. The modification will take effect immediately.

| Operation | AT Command        | Response                                                                                             |
| --------- | ----------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+DATARATE`     | `<n>` <br> `OK`                                                                                      |
| Write     | `AT+DATARATE=<n>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+DATARATE=?`   | `OK`                                                                                                 |


| Parameter | Information                              |
| --------- | ---------------------------------------- |
| **n**     | **LoRaWAN DataRate**                     |
| 0 ~ 7     | DataRate from 0 to 7&nbsp;s is possible. |

::: tip 📝 NOTE
The DataRate value and the default value are related to LoRaWAN regional parameters. Refer to [Appendix I: DataRate list of each region](/Product-Categories/WisNode/RAK7431/AT-Command-Manual/#appendix-i-data-rate-of-each-region) in this document.
:::

13. <b>AT+CONFIRM</b>

Turn on/off the LoRaWAN packet confirmation mechanic, which is set to be “on” by default. The modification will take effect immediately.

When the confirm function is enabled, the packets sent by the device will require the LoRa network server to send an ACK response. Unless a confirmation is received the device will resend the packet. For more information on the resending mechanic refer to **14. AT+RETRY**.

| Operation | AT Command       | Response                                                                                             |
| --------- | ---------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+CONFIRM`     | `<n>` <br> `OK`                                                                                      |
| Write     | `AT+CONFIRM=<n>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+CONFIRM=?`   | `OK`                                                                                                 |


| Parameter | Information                |
| --------- | -------------------------- |
| **n**     | **Type of uplink packets** |
| 0         | Unconfirmed uplink packets |
| 1         | Confirmed uplink packets   |

14. <b>AT+RETRY</b>

Set the maximum number of retry attempts of the same LoRaWAN message, that will be valid when the confirm function is enabled. The default value is 3. The modification will take effect immediately.

When retry = n (n! = 1), if the device does not receive an ACK of a LoRaWAN message, it will resend the message until the ACK is received, or the retry counter expires.

| Operation | AT Command     | Response                                                                                             |
| --------- | -------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+RETRY`     | `<n>` <br> `OK`                                                                                      |
| Write     | `AT+RETRY=<n>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+RETRY=?`   | `OK`                                                                                                 |


| Parameter | Information                                  |
| --------- | -------------------------------------------- |
| **n**     | **Max resend times**                         |
| 1 ~ 8     | The number of retries can be between 1 and 8 |

15. <b>AT+CHANNEL</b>

When the LoRaWAN channel plan of the device is CN470 / US915 / AU915, it can be read/modified through this instruction. After execution of this command, all channels from “start ID” to “end ID” in the instruction parameters are turned on, and the other channels are turned off. The modification will take effect after restart.

When the device is working in one of the following bands this command can only be used for reading the parameters: EU433 / RU864 / IN865 / EU868 / KR920 / AS923.

| Operation                                                      | AT Command                     | Response                                                                                             |
| -------------------------------------------------------------- | ------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Read                                                           | `AT+CHANNEL`                   | `<id>:<freq>:<drmin>:<drmax>` <br>...<br> `OK`                                                       |
| Write<br>(Only valid when Region<br> is CN470 / US915 / AU915) | `AT+CHANNEL=<startid>:<endid>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test                                                           | `AT+CHANNEL=?`                 | `OK`                                                                                                 |


| Parameter   | Information                           |
| ----------- | ------------------------------------- |
| **id**      | Channel ID                            |
| **freq**    | Center frequency of channel, unit: Hz |
| **drmin**   | DataRate (Min)                        |
| **drmax**   | DataRate (Max)                        |
| **startid** | Start channel ID                      |
| **endid**   | Stop channel ID                       |

16. <b>AT+ADDCHANNEL</b>

Add a LoRaWAN channel.

This instruction is valid when the working frequency band of LoRaWAN is EU433 / RU864 / EU868 / KR920 / AS923. The modification will take effect after restart.

| Operation | AT Command                             | Response                                                                                             |
| --------- | -------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Write     | `AT+ADDCHANNEL=<freq>:<drmin>:<drmax>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+ADDCHANNEL=?`                      | `OK`                                                                                                 |


| Parameter | Information                           |
| --------- | ------------------------------------- |
| **freq**  | Center frequency of channel, unit: Hz |
| **drmin** | DataRate (Min)                        |
| **drmax** | DataRate (Max)                        |

17. <b>AT+RMCHANNEL</b>

Delete a LoRaWAN channel.

This instruction is valid when the working frequency band is EU433 / RU864 / EU868 / KR920 / AS923. The modification takes effect after restart.

| Operation | AT Command                            | Response                                                                                             |
| --------- | ------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Write     | `AT+RMCHANNEL=<freq>:<drmin>:<drmax>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+RMCHANNEL=?`                      | `OK`                                                                                                 |


| Parameter | Information                           |
| --------- | ------------------------------------- |
| **freq**  | Center frequency of channel, unit: Hz |
| **drmin** | DataRate (Min)                        |
| **drmax** | DataRate (Max)                        |

18. <b>AT+CHANMASK</b>

Read the currently configured LoRaWAN Channel Mask. It is determined by the currently open channels. This instruction is “read-only”.

| Operation | AT Command      | Response            |
| --------- | --------------- | ------------------- |
| Read      | `AT+CHANMASK`   | `<chanmsk>`<br>`OK` |
| Test      | `AT+CHANMASK=?` | `OK`                |


| Parameter    | Information                                                                                   |
| ------------ | --------------------------------------------------------------------------------------------- |
| **chanmask** | **Channel mask:** Hexadecimal string, right to left corresponding channel ID from low to high |

19. <b>AT+TXPOWER</b>

The TXPOWER parameter is valid when the ADR function is turned off. The modification will take effect immediately.

| Operation | AT Command           | Response                                                                                             |
| --------- | -------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+TXPOWER`         | `<txpwr>`<br>`OK`                                                                                    |
| Write     | `AT+TXPOWER=<txpwr>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+TXPOWER=?`       | `OK`                                                                                                 |


| Parameter | Information                                                                                                                                                                                                                                                                                                                                            |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **txpwr** | Transmit power (dBm, floating-point)<br>The value range is 0 ~ maxeirp, and the effective step size is 2dbm, that is, txpwr = maxeirp – 2 * n, and n is an integer greater than or equal to 0<br>The maxeirp is the Maximum EIRP (Equivalent Isotropic Radiated Power) defined for the specific band you are using in the LoRa Alliance documentation. |

20. <b>AT+PINGNB</b>

Set the PingSlot Number in each Beacon Period for Class B mode. The number of ping slots determines the period of the downlink packet of the device. The modification will take effect after restart.

| Operation | AT Command      | Response                                                                                              |
| --------- | --------------- | ----------------------------------------------------------------------------------------------------- |
| Read      | `AT+PINGNB`     | `<N>`<br>`OK`                                                                                         |
| Write     | `AT+PINGNB=<N>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>` |
| Test      | `AT+PINGNB=?`   | `OK`                                                                                                  |


| Parameter | Information                                                                    |
| --------- | ------------------------------------------------------------------------------ |
| **N**     | PingSlot Number in Beacon Period:<br>1<br>2<br>4<br>8<br>16<br>32<br>64<br>128 |

21. <b>AT+LPTP</b>

LoRa Private Transport Protocol (LPTP) is a RAK proprietary message splitting protocol, which can send data with a length exceeding the maximum permissible size, using multiple messages. As it is proprietary it only works with the RAK LoRa networks server built into our commercial gateways. It is “Off” by default. The modification will take effect immediately.

| Operation | AT Command    | Response                                                                                             |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+LPTP`     | `<x>`<br>`OK`                                                                                        |
| Write     | `AT+LPTP=<x>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+LPTP=?`   | `OK`                                                                                                 |


| Parameter | Information     |
| --------- | --------------- |
| **x**     | **LPTP status** |
| 0         | disabled        |
| 1         | enabled         |

## Data Acquisition Setting Commands

1.  <b>AT+AINPERIOD</b>

The command is used to read or modify the analog data acquisition reporting period. The value is in seconds and the default value is 600s.

| Operation | AT Command         | Response                                                                                             |
| --------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+AINPERIOD`     | `<N>`<br>`OK`                                                                                        |
| Write     | `AT+AINPERIOD=<N>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+AINPERIOD=?`   | `OK`                                                                                                 |

| Parameter | Information                                         |
| --------- | --------------------------------------------------- |
| **N**     | **Analog acquisition cycle**                        |
| 5 ~ 43200 | The value is in the range of 5 ~ 43200&nbsp;seconds |

2.  <b>AT+AINVALUERANGE</b>

Read or modify the actual values represented by the minimum and maximum values of the analog interface range. The analog data read by the system will be linearly converted and reported over LoRaWAN.

The default values are:
<br>
**4-20&nbsp;mA interface:** 4-20
<br>
**0-5&nbsp;V interface:** 0-5

| Operation | AT Command                               | Response                                                                                             |
| --------- | ---------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+AINVALUERANGE`                       | `1:<MIN>:<MAX>`<br>`2:<MIN>:< MAX>`                                                                  |
| Write     | `AT+AINVALUERANGE=<channel>:<MIN>:<MAX>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+AINVALUERANGE=?`                     | `OK`                                                                                                 |

| Parameter     | Information                                |
| ------------- | ------------------------------------------ |
| **CHANNEL**   | The analog input interface (AIN1=1/AIN2=2) |
| **MIN VALUE** | Allowed range [-300,300]                   |
| **MAX VALUE** | Allowed range [-300,300]                   |

3.  <b>AT+AINLPMODE</b>

Set the analog data interface in low-power operation mode. When the low-power operation mode is enabled the power output and the analog data input interface will be turned off while there is no acquisition.

| Operation | AT Command         | Response                                                                                             |
| --------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+AINLPMODE`     | `<N>`<br>`OK`                                                                                        |
| Write     | `AT+AINLPMODE=<N>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+AINLPMODE=?`   | `OK`                                                                                                 |

| Parameter | Information          |
| --------- | -------------------- |
| **N**     | **AINLPMODE status** |
| 0         | disabled             |
| 1         | enabled              |

4.  <b>AT+AINWARMUP</b>

When the analog data interface is working in low power consumption mode, the device needs to turn the acquisition circuit and warm up the sensor before data acquisition. The command allows setting the warm-up time. The value is in milliseconds (ms), and the default value is 1000&nbsp;ms.

| Operation | AT Command         | Response                                                                                             |
| --------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| Read      | `AT+AINWARMUP`     | `<N>`<br>`OK`                                                                                        |
| Write     | `AT+AINWARMUP=<N>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |
| Test      | `AT+AINWARMUP=?`   | `OK`                                                                                                 |

<table>
    <thead><tr><th>Parameter</th><th>Information</th></tr></thead>
    <tbody>
        <tr><td>N</td><td>Warm-up time, ms</td></tr>
</tbody>
</table>

5.  <b>AT+AINREAD</b>

Read the current analog input interface data.

| Operation | AT Command   | Response      |
| --------- | ------------ | ------------- |
| Read      | `AT+AINREAD` | `<N>`<br>`OK` |

| Parameter   | Information                 |
| ----------- | --------------------------- |
| **channel** | **Analog input channel ID** |
| 1           | AIN1                        |
| 2           | AIN2                        |

## System-Related Commands

1.  <b>AT+TIMEZONE</b>

With this command, the time zone of the device is set.

| Operation | AT Command         | Response                                                                                              |
| --------- | ------------------ | ----------------------------------------------------------------------------------------------------- |
| Read      | `AT+TIMEZONE`      | `<TZ>`<br>`OK`                                                                                        |
| Write     | `AT+TIMEZONE=<TZ>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>` |
| Test      | `AT+TIMEZONE=?`    | `OK`                                                                                                  |


| Parameter | Information             |
| --------- | ----------------------- |
| **TZ**    | UTC time zone: -12 ~ 12 |

2.  <b>AT+VERSION</b>

Read the firmware version of the device.

| Operation | AT Command   | Response                                                                                                                     |
| --------- | ------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| Read      | `AT+VERSION` | When the modification is successful:<br>`<br><a>.<b>.<cccc>`<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |


| Parameter    | Information                              |
| ------------ | ---------------------------------------- |
| **a.b.cccc** | Firmware Version, for example “1.1.0050” |

3.  <b>AT+SYSLOGLVL</b>

Read or set the system log level.
The module turns off the system log output by default. The user can modify the log output level through this command. The modification takes effect immediately after setting.

| Operation | AT Command             | Response       |
| --------- | ---------------------- | -------------- |
| Read      | `AT+SYSLOGLVL`         | `<TZ>`<br>`OK` |
| Write     | `AT+SYSLOGLVL=<level>` | `OK`           |
| Test      | `AT+SYSLOGLVL=?`       | `OK`           |


| Parameter | Information                                           |
| --------- | ----------------------------------------------------- |
| **level** | **Output log level**                                  |
| 0         | does not output any logs                              |
| 1 ~ 6     | log with output level less than or equal to the value |

4. <b>AT+ECHO</b>

Turns local echo of the AT command-line interface on/off. Echo is turned off by default. It takes effect immediately after modification and is automatically turned off after a restart.

| Operation | AT Command    | Response                                                                                             |
| --------- | ------------- | ---------------------------------------------------------------------------------------------------- |
| Write     | `AT+ECHO=<n>` | When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>` |

| Parameter | Information    |
| --------- | -------------- |
| **n**     | **Local echo** |
| 0         | Disabled       |
| 1         | Enabled        |

5.  <b>AT+RESTART</b>
Reboot the device.

| Operation | AT Command   | Response |
| --------- | ------------ | -------- |
| Write     | `AT+RESTART` | `Null`   |

6.  <b>AT+FACTORY</b>

The command restores the device to the factory settings. This operation will last for about 60&nbsp;seconds. Do not cut off the power supply of the device before it automatically restarts.

| Operation | AT Command   | Response |
| --------- | ------------ | -------- |
| Write     | `AT+FACTORY` | `Null`   |

7.  <b>AT+SYSTIME</b>

Show the real running time.

| Operation | AT Command   | Response         |
| --------- | ------------ | ---------------- |
| Write     | `AT+SYSTIME` | `<time>`<br>`OK` |

| Parameter | Information                          |
| --------- | ------------------------------------ |
| **time**  | Timestamp in UNIX format, in seconds |

8.  <b>AT+DATETIME</b>

Show the synchronized with the LoRaWAN Network Server time. Needs LoRaWAN1.0.3 specification support from the server side.

| Operation | AT Command    | Response             |
| --------- | ------------- | -------------------- |
| Read      | `AT+DATETIME` | `<datetime>`<br>`OK` |

| Parameter    | Information                        |
| ------------ | ---------------------------------- |
| **datetime** | Date / Time in YYYY/MM/DD hh:mm:ss |

9. <b>AT+SYSINFO</b>

This command gives the system information about the device.

| Operation | AT Command   | Response                                                                  |
| --------- | ------------ | ------------------------------------------------------------------------- |
| Read      | `AT+SYSINFO` | `<model>`<br>`<sn>`<br>`<version>`<br>`<vendor>`<br>`<copyright>`<br>`OK` |

| Parameter     | Information       |
| ------------- | ----------------- |
| **model**     | Model info        |
| **sn**        | Product SN info   |
| **version**   | Firmware version  |
| **vendor**    | Manufacturer info |
| **copyright** | Copyright info    |

## Event Notification

When the working state of the module changes, an event notification will be output through the AT command-line interface.
The event notification format is:

```sh
EVENT:[EVENT_ID]:[EVENT_MSG]:<ADDITIONAL_INFO>
```

| Event               | Description                                                                                                                                       |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| **EVENT_ID**        | Event ID                                                                                                                                          |
| **EVENT_MSG**       | Event name                                                                                                                                        |
| **ADDITIONAL_INFO** | Additional information - Optional<br>Some events need to output additional information. Multiple additional information sets are separated by ":" |

The module supports the following event notifications:

| ID  | EVENT_MSG     | Description                              |
| --- | ------------- | ---------------------------------------- |
| 0   | STARTUP       | System startup complete                  |
| 1   | JOIN_NETWORK  | Successful join to the LoRaWAN network   |
| 2   | LEAVE_NETWORK | Unsuccessful join to the LoRaWAN network |
| 5   | SYSTEM_WAKEUP | System wakeup                            |
| 6   | RESTART       | System restart                           |

1. <b>STARTUP Event</b> - Appears after system initialization.
    * **Message format**:

```sh
EVENT:0:STARTUP
No additional information.
```

2. <b>JOIN_NETWORK Event</b> - LoRaWAN network activation successful. It appears after OTAA joins successfully.
    * **Message format**:

```sh
EVENT:1:JOIN_NETWORK
No additional information.
```

3. <b>LORA_LEAVE_NETWORK Event</b> - In OTAA activation mode, if eight consecutive uplink-confirmed packets do not receive a response, the LORA_LEAVE_NETWORK event will be triggered. After the LORA_LEAVE_NETWORK event is triggered, the module will stop sending LoRaWAN messages and start OTAA activation again.
    * **Message format**:

```sh
EVENT:2:LEAVE_NETWORK
No additional information.
```

4. <b>SYSTEM_WAKEUP Event</b> - A module in a low-power state can be awakened by receiving input from the AT command line interface. After wakeup, the module will no longer enter low-power mode. If you want the module to enter low power mode again, use the command: `AT+SLEEP\r\n`
    * **Message format**:

```sh
EVENT:5:SYSTEM_WAKEUP
```

5.  <b>RESTART Event</b> - Triggered before the module restarts.
    * **Message format**:

```sh
EVENT:6:RESTART
```

## LoRaWAN Data Format Definition

The basic message format is defined as follows:

<table>
    <thead><tr><th>Channel ID 1</th><th>Type 1</th><th>Data 1</th><th>Channel ID 2</th><th>Type 2</th><th>Data 2</th></tr></thead>
    <tbody>
        <tr><td>1Byte</td><td>1Byte</td><td>nBytes</td><td>1Byte</td><td>1Byte</td><td>nBytes</td></tr>
</tbody>
</table>

The data adopts big-endian byte order, that is, the high byte is in Uplink

### Message Data Format

The channel ID: analog input interface ID, interface AIN1: 0x01, interface AIN2: 0x02

type: fixed value 0x02, indicating analog input data.length of this type of data is 2&nbsp;bytes of data: the analog input value of this channel\*100. Length 2 bytes, signed integer,

* Parsing example:

0x010401EF02040474

<table>
    <thead><tr><th>Channel ID 1</th><th>type 1</th><th>data 1</th></tr></thead>
    <tbody>
        <tr><td>0x01</td><td>0x04</td><td>0x01EF</td></tr>
        <tr><td>AIN1</td><td>analog input data</td><td>0x01EF=495=>4.95</td></tr>
</tbody>
</table>

<table>
    <thead><tr><th>Channel ID 2</th><th>type 2</th><th>data 2</th></tr></thead>
    <tbody>
        <tr><td>0x02</td><td>0x04</td><td>0x0474</td></tr>
        <tr><td>AIN2</td><td>analog input data</td><td>0x0474=1140=>11.4</td></tr>
</tbody>
</table>

## Downlink Control

Basic structure message:

<table>
    <thead><tr><th>Channel ID 1</th><th>type </th><th>data </th></tr></thead>
    <tbody>
        <tr><td>1Byte</td><td>1Byte</td><td>nBytes</td></tr>
</tbody>
</table>

### Remote Modification Configuration Channel

Channel ID: 0x80

Supported parameter types:
- Data reporting cycle, 2&nbsp;bytes, unit is second
- Low power consumption mode, 1 word Section
- Acquisition circuit warm-up time, 2-byte

Parsing example:

0x8001003C

Set the data reporting period to 60 seconds

60 = 0x003C

<table>
    <thead><tr><th>Cannel ID 1</th><th>type </th><th>data </th></tr></thead>
    <tbody>
        <tr><td>0x80</td><td>0x01</td><td>0x003C</td></tr>
</tbody>
</table>

## Appendix: Data Rate of Each Region

### EU433/RU864/EU868/AS923

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

### CN470/KR920

| Data Rate | Configuration             | Indicative Physical Bit Rate [bit/s] |
| --------- | ------------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125&nbsp;kHz | 250                                  |
| 1         | LoRa: SF11 / 125&nbsp;kHz | 440                                  |
| 2         | LoRa: SF10 / 125&nbsp;kHz | 980                                  |
| 3         | LoRa: SF9 / 125&nbsp;kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125&nbsp;kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125&nbsp;kHz  | 5470                                 |
| 6 ~ 15    | RFU                       |                                      |

### US915

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

### AU915

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

### IN865

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
