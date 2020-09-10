---
prev: ../Quickstart/
next: ../../Deep-Development/
tags: RAK4600
---

# AT Command Manual

## Introduction

The RAK4600 module is designed to simplify LoRa® peer to peer and LoRaWAN® communication. This module saves customers to deal with complicated SPI protocol with the LoRa® transceivers and instead, a well-known serial communication interface is provided for sending commands and requesting internal status of the module. This approach allows a straightforward way to integrate LoRa® technology into your projects. 

On top of this serial interface a set of AT commands are defined, an external micro controller will be able to control the RAK4600 module as a classic AT modem. Through the AT commands, customers can set parameters of the LoRaWAN® communication, controlling GPIO pins, analog inputs, etc. 

In the RAK4600 module, the serial communication is exposed on the UART1 port, through the pin 22 (RX) and pin 23 (TX). The parameters of the UART1 communication are: 115200 / 8-N-1. The firmware upgrade is also possible through this port. In order to get familiar with the pin distribution of this module and find a schematic circuit of a reference application, please refer to the “RAK4200 Specification Manual”. We provide a summary in the Appendix IV.

In addition, the RAK4600 also supports BLE. You can use your mobile phone to communicate with the module via BLE interface, or you can use the module to scan the surrounding Bluetooth beacon information.

### AT Command Syntax

The AT command is based on ASCII characters. A command begins with the prefix “at” and ends with `<CR><LF>` (i.e. \r\n). The maximum length is 255 characters which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the "\r\n" part is omitted for the sake of clarity.

The AT commands can be classified in the following groups:

*	**Read Command**: Reads the current configuration or status of the module. The command name and the list of parameters are separated by “=” character. The `<m>` parameter is separated with its associated value `<n>` by the “:” character.
```
at+get_config=<m>:<n>
``` 
*	**Write Command**: Writes/modifies the current configuration of the module. The command name and the list of parameters are separated by “=” character. The `<m>` parameter is separated with its associated value `<n>` by the “:” character.
```
at+set_config=<m>:<n>
```
*	**Operational Commands**: There are also commands that are neither read nor write commands. 

Example: 
```
at+send=lora:<m>:<n>
```
The purpose is to execute an action. This will send data through the LoRa® transceiver. 

*	**Special Command**: The RAK4600 UART port has two operational modes: configuration mode and data transmission mode. When switching from data transmission mode to configuration mode the command to be entered is “+++” and does not contain terminators such as ‘\ r’ and ‘\ n’.

After the command is executed by the module, a reply is sent back to the external MCU. In the case the command was successful, the usual reply has the following format:

```
OK [information]\r\n
```
Note that only Read commands have information in the replied message, while Write commands do not have an informative description. The firmware developed by the customer, running in the external MCU, will expect at minimum a string of “Ok\r\n” after sending a successful command to the module. In the other hand, when the command is not successfully executed by the module. A reply with will be received in the following format:

```
ERROR: [Err Code]\r\n
```
### Error Code Table

<table style="text-align: left">
<thead>
  <tr>
    <th>Error Code</th>
    <th>Description</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>1</td>
            <td>The last command received is an unsupported AT command.</td>
        </tr>
        <tr>
            <td>2</td>
            <td>Invalid parameter in the AT command.</td>
        </tr>
        <tr>
            <td>3</td>
            <td>There is an error when reading or writing the flash memory.</td>
        </tr>
        <tr>
            <td>5</td>
            <td>There is an error when sending data through the UART port.</td>
        </tr>
        <tr>
            <td>41</td>
            <td>The BLE felt into an invalid state, could not applied the command.</td>
        </tr>
        <tr>
            <td>80</td>
            <td>The LoRa® transceiver is busy, could not process a new command.</td>
        </tr>
        <tr>
            <td>81</td>
            <td>LoRa® service is unknown. Unknown MAC command received by node. Execute commands that are not supported in the current state, such as sending "adjoin" command in P2P mode.</td>
        </tr>
        <tr>
            <td>82</td>
            <td>The LoRa® parameters are invalid.</td>
        </tr>
        <tr>
            <td>83</td>
            <td>The LoRa® frequency is invalid.</td>
        </tr>
        <tr>
            <td>84</td>
            <td>The LoRa® data rate (DR) is invalid.</td>
        </tr>
        <tr>
            <td>85</td>
            <td>The LoRa® frequency and data rate are invalid.</td>
        </tr>
        <tr>
            <td>86</td>
            <td>The device hasn’t joined into a LoRa® network.</td>
        </tr>
        <tr>
            <td>87</td>
            <td>The length of the packet exceeded that maximum allowed by the LoRa® protocol.</td>
        </tr>
        <tr>
            <td>88</td>
            <td>Service is closed by the server. Due to the limitation of duty cycle, the server will send " SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.</td>
        </tr>
        <tr>
            <td>89</td>
            <td>This is an unsupported region code.</td>
        </tr>
        <tr>
            <td>90</td>
            <td>Duty cycle is restricted. Due to duty cycle, data cannot be sent at this time until the time limit is removed.</td>
        </tr>
        <tr>
            <td>91</td>
            <td>No valid LoRa® channel could be found.</td>
        </tr>
        <tr>
            <td>92</td>
            <td>No available LoRa® channel could be found.</td>
        </tr>
        <tr>
            <td>93</td>
            <td>Status is error. Generally, the internal state of the protocol stack is wrong.</td>
        </tr>
        <tr>
            <td>94</td>
            <td>Time out reached while sending the packet through the LoRa® transceiver.</td>
        </tr>
        <tr>
            <td>95</td>
            <td>Time out reached while waiting for a packet in the LoRa® RX1 window.</td>
        </tr>
        <tr>
            <td>96</td>
            <td>Time out reached while waiting for a packet in the LoRa® RX2 window.</td>
        </tr>
        <tr>
            <td>97</td>
            <td>There is an error while receiving a packet during the LoRa® RX1 window.</td>
        </tr>
        <tr>
            <td>98</td>
            <td>There is an error while receiving a packet during the LoRa® RX2 window.</td>
        </tr>
        <tr>
            <td>99</td>
            <td>Failed to join into a LoRa® network.</td>
        </tr>
        <tr>
            <td>100</td>
            <td>Duplicated down-link message detected. A message with an invalid down-link count was received.</td>
        </tr>
        <tr>
            <td>101</td>
            <td>Payload size is not valid for the current data rate (DR).</td>
        </tr>
        <tr>
            <td>102</td>
            <td>There many down-link packets were lost.</td>
        </tr>
        <tr>
            <td>103</td>
            <td>Address fail. The address of the received packet does not match the address of the current node.</td>
        </tr>
        <tr>
            <td>104</td>
            <td>Invalid MIC was detected in the LoRa® message.</td>
        </tr>
</tbody>
</table>

## General AT Command

1. <b>at+version</b>

This command is used for reading the version number of the current firmware.

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+version`|`OK <version number>`|

**Parameter**: None

**Example**:
```
at+version\r\n                         
OK V3.3.0.14
```

2. <b>at+help</b>

This command is used for obtaining all the AT commands supported by the current firmware.

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+help`|`OK <all AT commands>`|

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

LoRaWAM AT commands:
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

BLE AT commands:
  at+set_config=ble:work_mode:X:Y
```

3. <b>at+set_config=device:restart</b>

This command is used for restarting the device.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=device:restart`||

**Parameter**: None

**Example**:
```
at+set_config=device:restart\r\n                         
UART1 work mode: RUI_UART_NORMAL
Current work_mode:LoRaWAN®, join_mode:ABP, Class: A
Initialization OK
```
4. <b>at+set_config=device:sleep:`<status>`</b>

This command is used for changing the current state of the device between the sleep and the wake-up mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=device:sleep:<status>`|`OK <STATUS>`|

**Parameter**:
<table style="text-align: left">
<tbody>
        <tr>
            <td>status</td>
            <td>0: wake up <br>1: sleep</td>
        </tr>
</tbody>
</table>

**Example**:
```
at+set_config=device:sleep:1\r\n                         
OK Sleep

at+set_config=device:sleep:0\r\n 
OK Wake Up
```
5. <b>at+get_config=device:status</b>

This command is used for obtaining status of the device.

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+get_config=device:status`|`OK <information>`|

**Parameter**: None

**Example**:
```
at+get_config=device:status\r\n                         
OK Board Core:RAK4600
MCU:nRF52832
LoRa® chip:SX1276
```
## Interface Type AT Command

1. <b>at+set_config=device:uart:`<index>:<baud_rate>`</b>

This command is used for configuring the baud rate for an UART port.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=device:uart:<index>:<baud_rate>`|`OK`|

Parameter：

<table style="text-align: left">
<tbody>
        <tr>
            <td>index</td>
            <td>UART Number</td>
        </tr>
        <tr>
            <td>baud_rate</td>
            <td>UART Baud rate:<br>1200,2400,4800,9600,19200,38400,57600,115200</td>
        </tr>
</tbody>
</table>

2. <b>at+set_config=device:uart_mode:`<index>:<mode>`</b>

This command is used for setting the UART operation between the AT configuration mode and the data transmission mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=device:uart_mode:<index>:<mode>`|`OK`|

**Parameter**：

<table style="text-align: left">
<tbody>
        <tr>
            <td>index</td>
            <td>UART Port Number. Currently, the RAK4600 only supports UART1.</td>
        </tr>
        <tr>
            <td>mode</td>
            <td>UART Mode： Only ‘1’ can be selected, which means the UART is set to data transmission mode. <br><br>Note：To switch from data transmission mode to configuration mode, use “+++” (+++ without\ r\ n).</td>
        </tr>
</tbody>
</table>

**Example**:
```
at+set_config=device:uart_mode:1:1\r\n                         
OK

+++
OK
```
## LoRaWAN® Type AT Command

1. <b>at+join</b>

This command is used for joining the LoRaWAN® network. 

|Operation|Command|Response|
|---------|-------|--------|
||`at+join`|OK Join Success|

**Parameter**: None

**Example**：
```
at+join\r\n
OK Join Success
```
2. <b>at+send=lora:`<port>:<data>`</b>

This command is used for sending data via LoRaWAN®.

|Operation|Command|Response|
|---------|-------|--------|
||`at+send=lora:<port>:<data>`|OK|

**Parameter**：

<table style="text-align: left">
<tbody>
        <tr>
            <td>port</td>
            <td>Sending port of LoRa. The value range is 1-223.</td>
        </tr>
        <tr>
            <td>data</td>
            <td>The sending data format is in hexadecimal format. The possible values are between 00-FF. The module internally will cast every two characters into a byte before sending it to the LoRa® transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN® standard). Please refer to Appendix III.</td>
        </tr>
</tbody>
</table>

**Example**：

When sending data as unconfirmed uplink:
```
at+send=lora:1:5A00\r\n                         
OK
```
When sending data as confirmed uplink:
```
OK
at+recv=0,-105,-12,0
```
:::tip 📝 NOTE:
When sending a confirmed message, you will receive an ACK response, i.e. “at+recv=...”. In “0, -105, -12,0".

* 0 stands for the LoRa® port
* -105 stands for the RSSI
* -12 stands for the SNR
* 0 stands for the length of the data (no valid data in ACK).
::::

:::tip 📝 NOTE:
When sending an unconfirmed message, sometimes the gateway will send MAC commands to nodes, and the node will also receive "at + recv =...".
:::

3. <b>at+set_config=lora:region:`<region>`</b>

This command is used for setting the appropriate working frequency band.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:region:<region>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>region</td>
            <td>EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923.<br><br>The default is EU868.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:region:EU868\r\n                         
OK
```
:::tip 📝 NOTE:
In the AS923 frequency band, the supported frequency plan is "as2" and dwell time is set to 1.
:::

4. <b>at+get_config=lora:channel</b>

This command is used for reading all the LoRa® channel information for the device's current region.

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+get_config=lora:channel`|`OK <channel information>`|

**Parameter**：None

**Example**：
```
at+get_config=lora:channel\r\n                         
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0 

```
:::tip 📝 NOTE:

With "***0,on,868100000,0,5**" as an example，channel parameter analysis:

* `*` - at the beginning if the channel is open;
* 0 - is the channel ID;
* on - indicates the current status of the channel;
* 868100000 - is the actual frequency of the channel，unit is Hz;
* 0,5 - indicates the DR of the channel, DR0~DR5.
:::

5. <b>at+set_config=lora:ch_mask:`<channel_number>:<status>`</b>

This command is used for switching a channel (turn on or off) in the current region. 

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:ch_mask:<channel_number>:<status>`|OK|

**Parameter**：

<table style="text-align: left">
<tbody>
        <tr>
            <td>channel_number</td>
            <td>Channel number</td>
        </tr>
        <tr>
            <td>status</td>
            <td>0: off<br>1: on</td>
        </tr>
</tbody>
</table>

**Example**: 
```
at+set_config=lora:ch_mask:0:0\r\n
OK
```

6. <b>at+set_config=lora:dev_eui:`<dev_eui>`</b>

This command is used for setting the Device EUI parameter for LoRaWAN® OTAA mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:dev_eui:<dev_eui>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>dev_eui</td>
            <td>Device EUI</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:dev_eui:3530353064377716\r\n                         
OK
```
7.	<b>at+set_config=lora:app_eui:`<app_eui>`</b>

This command is used for setting the Application EUI parameter for the LoRaWAN® OTAA mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:app_eui:<app_eui>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>app_eui</td>
            <td>Application EUI</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:app_eui:0000000000000001\r\n                         
OK
```
8. <b>at+set_config=lora:app_key:`<app_key>`</b>

This command is used for setting the Application Key parameter for the LoRaWAN® OTAA mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:app_key:<app_key>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>app_key</td>
            <td>Application Key</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```
9. <b>at+set_config=lora:dev_addr:`<dev_addr>`</b>

This command is used for setting the Device Address parameter for the LoRaWAN® ABP mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:dev_addr:<dev_addr>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>dev_addr</td>
            <td>Device Address</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:dev_addr:260125D7\r\n                         
OK
```

10. <b>at+set_config=lora:apps_key:`<apps_key>`</b>

This command is used for setting the Application Session Key parameter for the LoRaWAN® ABP mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:apps_key:<apps_key>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>apps_key</td>
            <td>Application Session Key</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```

11. <b>at+set_config=lora:nwks_key:`<nwks_key>`</b>

This command is used for setting the Network Session Key parameter for the LoRaWAN® ABP mode

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+set_config=lora:nwks_key:<nwks_key>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>nwks_key</td>
            <td>Network Session Key</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42\r\n                           
OK
```

12. <b>at+set_config=lora:multicastenable:`<IsEnable>`</b>

This command is used for enabling or disabling the multicast feature.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:multicastenable:<IsEnable>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>IsEnable</td>
            <td>0: disable<br>1: enable<br><br>The default is disable.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:multicastenable:1\r\n                         
OK
```

13. <b>at+set_config=lora:multicast_dev_addr:`<multicast_dev_addr>`</b>

This command is used for setting the Device Address for the multicast feature.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>multicast_dev_addr</td>
            <td>Multicast Device Address</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:multicast_dev_addr:260111fd\r\n                         
OK
```
14. <b>at+set_config=lora:multicast_apps_key:`<multicast_apps_key>`</b>

This command is used for setting the Application Session Key for the multicast feature.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:multicast_apps_key:<multicast_apps_key>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>multicast_apps_key</td>
            <td>Multicast Application Session Key</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:multicast_apps_key:F13DDFA2619B10411F02F042E1C0F356\r\n                     
OK
```

15. <b>at+set_config=lora:multicast_nwks_key:`<multicast_nwks_key>`</b>

This command is used for setting the Network Session Key for the multicast feature.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>multicast_nwks_key</td>
            <td>Multicast Network Session Key</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:multicast_nwks_key:1D1991F5377C675879C39B6908D437A6\r\n                         
OK
```

16. <b>at+set_config=lora:join_mode:`<mode>`</b>

This command is used for switching the LoRaWAN® access mode between the OTAA and the ABP mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:join_mode:<mode>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>mode</td>
            <td>Activation mode<br>0: OTAA<br>1: ABP <br><br>The default is OTAA.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:join_mode:1\r\n                         
OK
```

17. <b>at+set_config=lora:class:`<class>`</b>

This command is used for setting LoRaWAN® class to Class A, Class B, or Class C.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:class:<class>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>class</td>
            <td>0: Class A<br>1: Class B  (Not supported at this time)<br>2: Class C<br><br>The default is Class A.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:join_mode:1\r\n                         
OK
```

18. <b>at+set_config=lora:confirm:`<type>`</b>

This command is used for setting the type data to be sent: Confirmed/Unconfirmed.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:confirm:<type>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>type</td>
            <td>0: unconfirm type<br>1: confirm type<br><br>The default is unconfirm type.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:confirm:0\r\n                         
OK
```

19. <b>at+set_config=lora:dr:`<dr>`</b>

This command is used for setting the data rate (DR) of LoRa.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:dr:<dr>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>dr</td>
            <td>The data rate of LoRa® is related to the current region. In most LoRa® areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWan1.0.2 specification.</td>
        </tr>
</tbody>
</table>

20. <b>at+set_config=lora:tx_power:`<tx_power>`</b>

This command is used for setting the level of the RF transmission power level of the LoRa® transceiver. The unit is in dBm.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:tx_power:<tx_power>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>tx_power</td>
            <td>LoRa's transmit power level varies depending on frequency band and DR. Please refer to the LoRaWAN® 1.0.2 specification or Appendix II for details.The default is 0.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:tx_power:0\r\n                         
OK
```

21. <b>at+set_config=lora:adr:`<status>`</b>

This command is used for setting (turn on/off) the ADR feature of the LoRa® communication. 

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:adr:<status>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>status</td>
            <td>0: Turn off<br>1: Turn on<br><br>The default is on.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:adr:0\r\n                         
OK
```

22. <b>at+get_config=lora:status</b>

This command is used for getting all of the information related to the current LoRa® status (except channel information).

|Operation|Command|Response|
|---------|-------|--------|
|Read|`at+set_config=lora:status`|`OK <lora status detail>`|

**Parameter**：None

**Example**：
```
at+get_config=lora:status\r\n                         
OK Work Mode: LoRaWAN®
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

This command is used for enabling or disabling the Duty Cycle feature.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:dutycycle_enable:<status>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>status</td>
            <td>0: disable<br>1: enable<br><br>The default is disable.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:dutycycle_enable:1\r\n                       
OK
```

24. <b>at+set_config=lora: send_repeat_cnt:`<num>`</b>

This command is used for setting the number attempts for retransmitting an uplink message. When activated, the module will resend a message if its corresponding ACK (down link) is not received after sending a confirmed uplink message. The default value is 0, which means that the module will not resend any message by default.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora: send_repeat_cnt:<status>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>num</td>
            <td>Number of retries, up to 7.<br><br>The default is 0.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora: send_repeat_cnt:1\r\n
OK
```

25. <b>at+set_config=lora:default_parameters</b>

This command is used to restore OTAA, ABP, multicast related network access parameters set at the factory, including dev_eui，app_eui, etc.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:default_parameters`|OK|

**Parameter**：None

**Example**：
```
at+set_config=lora:default_parameters\r\n
OK
```
## LoRa® P2P Type AT Command

1. <b>at+set_config=lora:work_mode:`<mode>`</b>

This command is used for switching the LoRa's transmission mode between the LoRaWAN® and the LoRAP2p mode. This command will cause the module to restart once applied.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lora:work_mode:<mode>`||

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>mode</td>
            <td>Work mode of LoRa<br>0: LoRaWAN®<br>1: LoRaP2P <br><br>The default is LoRaWAN® mode</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lora:work_mode:1\r\n                         
UART1 work mode: RUI_UART_NORMAL
Current work_mode:P2P
Initialization OK
```

2. <b>at+set_config=lorap2p:`<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`</b>

This command is used for setting the relevant parameters of LoRAP2p mode and is only valid when the LoRa® mode was switched to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
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
</tbody>
</table>

**Example**：
```
at+set_config=lorap2p:869525000:12:0:1:8:20\r\n                         
OK
```

3. <b>at+set_config=lorap2p:transfer_mode:`<mode>`</b>

This command is used for switching the state of the LoRa® transceiver between sending and receiving state, and it’s only valid when the LoRa® mode was set to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=lorap2p: transfer_mode:<mode>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>mode</td>
            <td>1:  receiver mode<br>2:  sender mode<br><br>The default is sender mode.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=lorap2p:transfer_mode:1\r\n           
OK
```

4. <b>at+send=lorap2p:`<data>`</b>

This command is used for sending data through LoRaP2P, and only valid when the LoRa® work mode was set to LoRaP2P before.

|Operation|Command|Response|
|---------|-------|--------|
|Send|`at+send=lorap2p:<data>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>data</td>
            <td>The data to be sent, and the format is hexadecimal </td>
        </tr>
</tbody>
</table>

**Example**：
```
at+send=lorap2p:1234\r\n                         
OK
```
In LoRa® P2P mode, the receiving node receives the data and outputs the data in the following format:

```
at+recv=<RSSI>,<SNR>,< Data Length >:< Data >
```

## BLE Type AT Command

1. <b>at+set_config=ble:work_mode:`<mode>:<long_range>`</b>

This command is used for configuring the BLE mode.

|Operation|Command|Response|
|---------|-------|--------|
|Write|`at+set_config=ble:work_mode:<mode>:<long_range>`|OK|

**Parameter**：
<table style="text-align: left">
<tbody>
        <tr>
            <td>mode</td>
            <td>BLE work mode.<br>0: Peripheral mode (Default)<br>1: Central mode<br>2: Beacon scan mode</td>
        </tr>
        <tr>
            <td>long_range</td>
            <td>Long range enable, only ‘0’ can be selected, RAK4600 does not support this feature.</td>
        </tr>
</tbody>
</table>

**Example**：
```
at+set_config=ble:work_mode:0:0\r\n
OK
```

## Appendix I：Data Rate by Region

<b>EU433/EU868/AS923</b>

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

<b>CN470/KR920</b>

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
| 6 ~ 15  |        RFU        |                                    |

<b>US915</b>

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

<b>AU915</b> 

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

<b>IN865</b>

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

## Appendix II：TX Power by Region

<b>EU868</b>

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

<b>US915</b>

|TXPower|Configuration (conducted power)|
|-------|-------------------------------|
|   0   |   30 dBm - 2*TXpower          |
|   1   |   28 dBm                      |
|   2   |   26 dBm                      |
| 3 ~ 9 |                               |
|   10  |   10 dBm                      |
|11 ~ 15|      RFU                      |

<b>AU915</b>

By default, MaxEIRP is considered to be +30dBm. 

|TXPower|Configuration (EIRP)   |
|-------|-----------------------|
|   0   |   MaxEIRP             |
|1 ~ 10 |   MaxEIRP - 2*TXPower |
|11 ~ 10|      RFU              |

<b>KR920</b>

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

<b>AS923</b>

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


<b>IN865</b>

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

<b>CN470</b>

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

<b>EU433</b>

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

## Appendix III：Maximum Transmission Load by Region

:::tip 📝 NOTE:
The M in the following list is the length with MAC header, N is the length without MAC header, and the maximum sending data length is N.
::::

<b>EU868</b>

|DataRate|M|N|
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

<b>US915</b>

|DataRate|M|N|
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

<b>AU915</b>

|DataRate|M|N|
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

<b>KR920</b>

|DataRate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6 ~ 15|Not Defined|Not Defined|

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
            <td>8</td>
            <td colspan=2>RFU</td>
            <td colspan=2>RFU</td>
        </tr>
</tbody>
</table>

<b>IN865</b>

|DataRate|M|N|
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

<b>CN470</b>

|DataRate|M|N|
|--------|-|-|
|0|59|51|
|1|59|51|
|2|59|51|
|3|123|115|
|4|250|242|
|5|250|242|
|6 ~ 15|Not Defined|Not Defined|

<b>EU433</b>

|DataRate|M|N|
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

## Appendix IV: Pin Description of RAK4600

The pin definition of the RAK4600 module can be reviewed in the [Pin Definition](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#pin-definition) section of this documentation.

A summary of the pins of the RAK4600 module:

1.	About the UART pin: Pin 22 (RX), pin 23 (TX). During sleep, pin 22 (RX) is configured as EXTI, with internal pull-down and rising edge triggering wake-up.
2. About the SWD debug pin. Pin 37 and pin 38 are used for SWD debug port.
3.	About the power pin. The power pin on the RAK4600 module includes: VCC/GND， pin 1, pin 8, pin 12, pin 13, pin 14, pin 16, pin 18, pin 19, pin 20, pin 31, pin 39, pin 40, pin 41, pin 42;
4.	About the reset pin. The reset pin on the RAK4600 module is the pin 36;
5.	About the RF antenna pin. The RF antenna pin on the RAK4600 module is the pin15 (BLE), pin 17 (LoRa);
6.	About the GPIO. The pins available for the GPIO on the RAK4600 module are pin 4, pin 5, pin 6, pin 7, pin 9, pin 10, pin 21, and pin 24.

:::tip 📝 NOTE:
The subsequent firmware upgrade of the product is carried out through the OTA interface.
:::