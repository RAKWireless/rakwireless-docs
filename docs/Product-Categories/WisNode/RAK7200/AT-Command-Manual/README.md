---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK612. 
rak_img: /assets/images/wisnode/rak7200/quickstart/overview/RAK7200_home.png
prev: ../Datasheet/
next: false
tags:
    - RAK7200
    - AT Command Manual
    - wisnode
---

# RAK7200 AT Command Manual

To connect the RAK7200 module to a LoRa-P2P connection or a LoRaWAN®  network, the module must be configured and LoRa® parameters must be set  by sending AT commands. Listed below are the summary of the AT commands  supported by the RAK7200 Module.

## AT Command Syntax

The AT command is based on ASCII characters. In general, the AT Command starts with the prefix `AT` or `at` and ends with `<CR><LF>` (i.e. \r\n). The maximum length is **255 characters** which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the "\r\n" part is omitted for the sake of clarity.

The AT commands can be classified in the following groups:

* **Read Command** : Reads the current configuration or status of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character. 

```
at+get_config=<m>:<n>
```
* **Write Command** : Writes/Modifies the current configuration of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character.

```
at+set_config=<m>:<n>
```

* **Operational Commands** : There are also commands that are neither read nor write commands. The purpose is to execute an action, for example:

```
at+send=lora:<m>:<n> // Sends data through the LoRa transceiver.
```

* **Special Command** : The RAK811 UART port has two operational modes: **configuration mode** and **data transmission mode**. When switching from data transmission mode to configuration mode the command to be entered is `+++` and does not contain terminators such as `\ r` and `\ n`.

After executing the command, a response is sent back to the external MCU. The usual reply has the following format:

` OK [information]\r\n `


:::tip 📝 NOTE:
Only the read commands have information in the replied message, while Write commands do not have an informative description. 
:::

After sending a successful command to the module, the firmware developed, running in the external MCU, will expect at a minimum string of `Ok\r\n`. On the other hand, when the command is not successfully executed by the module, you will receive a response with the following format:

`ERROR: [ErrCode]\r\n`

## Error Code Table

| **Error Code** | **Description**                                                                                                                                                             |
| -------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1              | The last command received is an unsupported AT command.                                                                                                                     |
| 2              | Invalid parameter in the AT command.                                                                                                                                        |
| 3              | There is an error when reading or writing the flash memory.                                                                                                                 |
| 4              | There is an error when reading or writing through IIC bus.                                                                                                                  |
| 5              | There is an error when sending data through the UART port.                                                                                                                  |
| 80             | The LoRa transceiver is busy, could not process a new command.                                                                                                              |
| 81             | LoRa service is unknown. Unknown MAC command received by node. Execute commands that are not supported in the current state, such as sending `at+join` command in P2P mode. |
| 82             | The LoRa parameters are invalid.                                                                                                                                            |
| 83             | The LoRa parameters are invalid.                                                                                                                                            |
| 84             | The LoRa data rate (DR) is invalid.                                                                                                                                         |
| 85             | The LoRa frequency and data rate are invalid.                                                                                                                               |
| 86             | The device has not joined into a LoRa network.                                                                                                                              |
| 87             | The length of the packet exceeded that maximum allowed by the LoRa protocol.                                                                                                |
| 88             | Service is closed by the server. Due to the limitation of duty cycle, the server will send " SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                      |
| 89             | This is an unsupported region code.                                                                                                                                         |
| 90             | Duty cycle is restricted. Due to duty cycle, data cannot be sent at this time until the time limit is removed.                                                              |
| 91             | No valid LoRa channel could be found.                                                                                                                                       |
| 92             | No available LoRa channel could be found.                                                                                                                                   |
| 93             | Status is error. Generally, the internal state of the protocol stack is wrong.                                                                                              |
| 94             | Time out reached while sending the packet through the LoRa transceiver.                                                                                                     |
| 95             | Time out reached while waiting for a packet in the LoRa RX1 window.                                                                                                         |
| 96             | Time out reached while waiting for a packet in the LoRa RX2 window.                                                                                                         |
| 97             | There is an error while receiving a packet during the LoRa RX1 window.                                                                                                      |
| 98             | There is an error while receiving a packet during the LoRa RX2 window.                                                                                                      |
| 99             | Failed to join into a LoRa network.                                                                                                                                         |
| 100            | Duplicated down-link message detected. A message with an invalid down-link count was received.                                                                              |
| 101            | Payload size is not valid for the current data rate (DR).                                                                                                                   |
| 102            | There many down-link packets were lost.                                                                                                                                     |
| 103            | Address fail. The address of the received packet does not match the address of the current node.                                                                            |
| 104            | Invalid MIC was detected in the LoRa message.                                                                                                                               |

## Device AT Command

1. <b> `at+version` </b>

This command is used for reading the version number of the current firmware.

| **Operation** | **Command**  | **Response**          |
| ------------- | ------------ | --------------------- |
| Read          | `at+version` | `OK <version number>` |

<br>

**Parameter**: NONE

**Example**:

```
at+version\r\n                         
OK 3.1.0.13
```

<br>

2. <b> `at+help` </b>

This command is used to obtain all AT commands supported by the current firmware.

| **Operation** | **Command** | **Response**           |
| ------------- | ----------- | ---------------------- |
| Read          | `at+help`   | `OK <all AT commands>` |

<br>

**Parameter**: NONE

**Example**:

```
at+help\r\n         

OK.
*************************************************
===============AT Commands List==================
Device AT commands:
  at+version
  at+help
  at+run  
  at+set_config=device:restart
  at+set_config=device:sleep:X
  at+set_config=device:boot
  at+get_config=device:status

LoRaWAN AT commands:
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
  at+set_config=lora:join_mode:X
  at+set_config=lora:work_mode:X 
  at+set_config=lora:ch_mask:X:Y
  at+set_config=lora:class:X
  at+set_config=lora:confirm:X
  at+set_config=lora:dr:X
  at+set_config=lora:tx_power:X
  at+set_config=lora:adr:X
  at+set_config=lora:send_interval:X:Y
  at+get_config=lora:status

Sensor AT commands:
  at+set_config=device:gps_timeout:X
  at+set_config=device:gps_format:X
  at+set_config=device:voltage:X
  at+set_config=device:gps:X
  at+set_config=device:acc:X
  at+set_config=device:magn:X
  at+set_config=device:gyro:X
===================List End======================
*************************************************
```

<br>

3. <b> `at+set_config=device:restart` </b>

This command is used for restarting the device.

| **Operation** | **Command**                    | **Response** |
| ------------- | ------------------------------ | ------------ |
| Read          | `at+set_config=device:restart` |              |

<br>

**Parameter**: NONE

**Example**:

```
OK,restart ...


========================================================
______  ___   _   __  _    _ _          _               
| ___ \/ _ \ | | / / | |  | (_)        | |              
| |_/ / /_\ \| |/ /  | |  | |_ _ __ ___| | ___  ___ ___ 
|    /|  _  ||    \  | |/\| | | '__/ _ \ |/ _ \/ __/ __|
| |\ \| | | || |\  \ \  /\  / | | |  __/ |  __/\__ \__ \
\_| \_\_| |_/\_| \_/  \/  \/|_|_|  \___|_|\___||___/___/
========================================================
********************************************************
RAK7200 version:3.1.0.13
********************************************************
========================================================
```

<br>

4. <b> `at+set_config=device:sleep:<status>` </b>

This command is used for changing the current state of the device between sleep and wake up mode.

| **Operation** | **Command**                           | **Response** |
| ------------- | ------------------------------------- | ------------ |
| Write         | `at+set_config=device:sleep:<status>` | `OK<STATUS>` |

<br>

**Parameter**:

| Status | 0: **wake up** <br> 1: **sleep** |
| ------ | -------------------------------- |

<br>

**Example**:

```
at+set_config=device:sleep:1\r\n                         
OK Sleep

at+set_config=device:sleep:0\r\n 
OK Wake Up
```

<br>

5. <b> `at+get_config=device:<status>` </b>

This command is used for obtaining the status of the device.

| **Operation** | **Command**                   | **Response**      |
| ------------- | ----------------------------- | ----------------- |
| Read          | `at+get_config=device:status` | `OK<information>` |

<br>

**Parameter**: None

**Example**:

```
at+get_config=device:status\r\n                         
OK.
*************************************************
===============Device Status List================
Board Core:  S76G_B
MCU:  STM32L073RZ
LoRa chip:  SX1276

Battery Voltage = 3.811 V 
Support Gps:true
gps_timeout: 100s
gps_format:standard LPP format
No signal with Satellite.

MPU9250 sensor:
Acceleration(g) of X,Y,Z:
0.00,0.00,0.00
Gyro(degress/s) of X,Y,Z:
0.00,0.00,0.00
Magnetometer(uT) of X,Y,Z:
0.00,0.00,0.00

===================List End======================
*************************************************

```


## LoRaWAN Type AT Command

1. <b> `at+join` </b>

This command is used for joining to the LoRaWAN network. 

| **Operation** | **Command** | **Response**      |
| ------------- | ----------- | ----------------- |
|               | `at+join`   | `OK Join Success` |

<br>

**Parameter**: NONE

**Example**:

```
at+join\r\n
OK 
[LoRa]:Joined Successed!
```

2. <b> `at+send=lora:<port>:<data>` </b>

This command is used for sending data via LoRaWAN.


| **Operation** | **Command**                  | **Response** |
| ------------- | ---------------------------- | ------------ |
|               | `at+send=lora:<port>:<data>` | `OK `        |

<br>

**Parameter**:

<table>
    <tr>
      <td> port </td>
      <td> Sending port of LoRa. The value range is 1-223. </td>
    </tr>
    <tr>
      <td> data </td>
      <td> The sending data format is in hexadecimal format. The possible values are between <b>00-FF</b>. The module will internally cast every two characters into a byte before sending it to the LoRa transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN standard). Refer to <a href="/Product-Categories/WisDuo/RAK811-Module/AT-Command-Manual/#appendix-iii：maximum-transmission-load-by-region" >Appendix III</a>.
    </td>
    </tr>
</table>

<br>

**Example**:

When sending data as unconfirmed uplink:

```
at+send=lora:1:5A00\r\n                         
[LoRa]: RUI_MCPS_UNCONFIRMED send success
OK
```

When sending data as confirmed uplink:

```
at+send=lora:1:5A00\r\n                         
OK
at+recv=0,-36,8,0
```

:::tip 📝 NOTE:
When sending a confirmed message, you will receive an ACK response, i.e. `at+recv=...`. In `0, -105, -12, 0`, “**0**" stands for the LoRa port, “**-105**" stands for the RSSI, “**-12**" stands for the SNR, and “**0**" stands for the length of the data (no valid data in ACK).
:::

<br>

3. <b> `at+set_config=lora:region:<region>` </b>

This command is used for setting the appropriate working frequency band.


| **Operation** | **Command**                          | **Response** |
| ------------- | ------------------------------------ | ------------ |
| Write         | `at+set_config=lora:region:<region>` | `OK `        |

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
Selected LoRaWAN 1.0.2 Region: EU868
Band switch success
OK
```

:::tip 📝 NOTE:
In the AS923 frequency band, the supported frequency plan is "as2" and dwell is set to 1.
:::

<br>

4. <b> `at+get_config=lora:channel` </b>

This command is used for reading all the LoRa channel information for the device's current region.


| **Operation** | **Command**                  | **Response**               |
| ------------- | ---------------------------- | -------------------------- |
| Read          | `at+get_config=lora:channel` | `OK <channel information>` |

<br>

**Parameter**: NONE

**Example**:
- EU868 region

```
at+get_config=lora:channel\r\n                         
OK 0,off,0,0,0; 1,off,0,0,0; 2,off,0,0,0; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; 8,off,0,0,0; 9,off,0,0,0; 10,off,0,0,0; 11,off,0,0,0; 12,off,0,0,0; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0 
```

:::tip 📝 NOTE:
With “__*0,on,868100000,0,5__” as an example，channel parameter analysis:
- “__*__” at the beginning if the channel is open;
- “__0__” is the channel ID;
- “__on__” indicates the current status of the channel;
- “__868100000__” is the actual frequency of the channel，unit is Hz;
- “__0,5__” indicates the DR of the channel, DR0~DR5.
:::

<br>

5. <b> `at+set_config=lora:ch_mask:<channel_number>:<status>` </b>

This command is used for switching a channel (turn on or off) in the current region. 


| **Operation** | **Command**                                            | **Response** |
| ------------- | ------------------------------------------------------ | ------------ |
| Write         | `at+set_config=lora:ch_mask:<channel_number>:<status>` | `OK `        |

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

| **Operation** | **Command**                            | **Response** |
| ------------- | -------------------------------------- | ------------ |
| Write         | `at+set_config=lora:dev_eui:<dev_eui>` | `OK `        |

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

| **Operation** | **Command**                            | **Response** |
| ------------- | -------------------------------------- | ------------ |
| Write         | `at+set_config=lora:app_eui:<app_eui>` | `OK `        |

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

| **Operation** | **Command**                            | **Response** |
| ------------- | -------------------------------------- | ------------ |
| Write         | `at+set_config=lora:app_key:<app_key>` | `OK `        |

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


| **Operation** | **Command**                              | **Response** |
| ------------- | ---------------------------------------- | ------------ |
| Write         | `at+set_config=lora:dev_addr:<dev_addr>` | `OK `        |

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

| **Operation** | **Command**                              | **Response** |
| ------------- | ---------------------------------------- | ------------ |
| Write         | `at+set_config=lora:apps_key:<apps_key>` | `OK `        |

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

| **Operation** | **Command**                              | **Response** |
| ------------- | ---------------------------------------- | ------------ |
| Read          | `at+set_config=lora:nwks_key:<nwks_key>` | `OK `        |

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

12. <b> `at+set_config=lora:join_mode:<mode>` </b>

This command is used for switching the LoRaWAN access mode between the OTAA and the ABP mode.

| **Operation** | **Command**                           | **Response** |
| ------------- | ------------------------------------- | ------------ |
| Write         | `at+set_config=lora:join_mode:<mode>` | `OK `        |

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
join_mode:OTAA
OK
```

<br>

13. <b> `at+set_config=lora:class:<class>` </b>

This command is used for setting LoRaWAN class to Class A, Class B, or Class C.


| **Operation** | **Command**                        | **Response** |
| ------------- | ---------------------------------- | ------------ |
| Write         | `at+set_config=lora:class:<class>` | `OK `        |

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

14. <b> `at+set_config=lora:confirm:<type>` </b>

This command is used for setting the type messages to be sent: Confirmed/Unconfirmed.

| **Operation** | **Command**                         | **Response** |
| ------------- | ----------------------------------- | ------------ |
| Write         | `at+set_config=lora:confirm:<type>` | `OK `        |

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

15. <b> `at+set_config=lora:dr:<dr>` </b>

This command is used to set the data rate (DR) of LoRa.

| **Operation** | **Command**                  | **Response** |
| ------------- | ---------------------------- | ------------ |
| Write         | `at+set_config=lora:dr:<dr>` | `OK `        |

<br>

**Parameter**:

<table>
    <tr>
      <td> dr </td>
      <td> The data rate of LoRa is related to the current region. In most of the LoRa areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWAN 1.0.2 specification. </td>
    </tr>
</table>

<br>

16. <b> `at+set_config=lora:tx_power:<tx_power>` </b>

This command is used for setting the level of the RF transmission power of the LoRa transceiver. The unit is in dBm.


| **Operation** | **Command**                              | **Response** |
| ------------- | ---------------------------------------- | ------------ |
| Write         | `at+set_config=lora:tx_power:<tx_power>` | `OK `        |

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

17. <b> `at+set_config=lora:adr:<status>` </b>

This command is used for setting (turn on/off) the ADR feature of the LoRa communication. 

| **Operation** | **Command**                       | **Response** |
| ------------- | --------------------------------- | ------------ |
| Write         | `at+set_config=lora:adr:<status>` | `OK `        |

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
at+set_config=lora:adr:1\r\n                         
OK
```

<br>

18. <b>`at+get_config=lora:status` </b>

This command is used for getting all of the information related to the current LoRa status (except channel information).

| **Operation** | **Command**                 | **Response**              |
| ------------- | --------------------------- | ------------------------- |
| Read          | `at+get_config=lora:status` | `OK <lora status detail>` |

<br>

**Parameter**: NONE

**Example**:

```
OK.
*************************************************
===============Device Status List================
Board Core:  S76G_B
MCU:  STM32L073RZ
LoRa chip:  SX1276

Battery Voltage = 4.298 V 
Support Gps:true
gps_timeout: 100s
gps_format:standard LPP format
No signal with Satellite.

MPU9250 sensor:
Acceleration(g) of X,Y,Z:
0.02,0.01,1.02
Gyro(degress/s) of X,Y,Z:
-1.01,0.84,0.83
Magnetometer(uT) of X,Y,Z:
20.85,63.15,51.75

===================List End======================
*************************************************
```

<br>

19. <b> `at+set_config=lora:send_interval:<status>:<interval>` </b>

This command is used for setting the time interval for sending data.

| **Operation** | **Command**                                            | **Response** |
| ------------- | ------------------------------------------------------ | ------------ |
| Write         | `at+set_config=lora:send_interval:<status>:<interval>` | `OK `        |

<br>

**Parameter**: 

<table>
    <tr>
      <td> status </td>
         <td> Enable/disable the mechanism for sending data in intervals. <br> 0: the device will not send data automatically. <br> 1: the device will send data every 'interval' seconds.  </td>
    </tr>
    <tr>
        <td> interval </td>
        <td> Time in seconds. This parameter is only valid if 'status' is set to 1. </td>
    </tr>
</table>

**Example**:

```
at+set_config=lora:send_interval:1:120\r\n
Start auto send data with sleep.
OK
```

<br>

<h2>Sensor AT command</h2>

1. <b>` at+set_config=device:gps_timeout:<time> ` </b>	

This command is used to set the timeout of searching GPS satellite.

| Operation | Command                                   | Response |
| --------- | ----------------------------------------- | -------- |
| Write     | `at+set_config=device:gps_timeout:<time>` | OK       |

**Parameter:**

<table>
      <tr>
            <td>time</td>
            <td>Time in seconds.</td>
        </tr>
</table>
<br>

**Example**：

```
at+set_config=device:gps_timeout:120\r\n                         
OK
```

<br>

2. <b> `at+set_config=device:gps_format:<accuracy>`</b>

This command is used to configurate the GPS payload format.

| Operation | Command                                      | Response |
| --------- | -------------------------------------------- | -------- |
| Write     | `at+set_config=device:gps_format:<accuracy>` | OK       |

**Parameter:**

<table>
      <tr>
            <td>accuracy</td>
          <td> 0: LPP format which is only 4 decimal digits accuracy <br>            1: 6 decimal digits accuracy <br><br> The default is 0.</td> 
        </tr>
</table>

<br>

**Example**：

```
at+set_config=device:gps_format:0\r\n                         
OK
```

<br>

3. <b>` at+set_config=device:<parameter>:<status> ` </b>	

This command is used to set a certain sensor’s status.

| Operation | Command                                     | Response |
| --------- | ------------------------------------------- | -------- |
| Write     | `at+set_config=device:<parameter>:<status>` | OK       |

**Parameter:**

<table>
      <tr>
            <td>parameter</td>
            <td> gps = GPS <br>
				 acc = Accelerate <br>
				 magn = Magnetic <br>
				 gyro = Gyroscope <br>
				 voltage = Voltage 
            </td>
        </tr>
      <tr>
          <td>status</td>
          <td>0: close <br> 1: open</td>
        </tr>
</table>

<br>

**Example**：

```
at+set_config=device:voltage:1\r\n                         
open voltage detecte.
OK
```

<br>

## Appendix I：Data Rate by Region

<b> EU868/AS923/US915 </b>

| Data Rate | Configuration       | Indicative physical bit rate [bit/s] |
| --------- | ------------------- | ------------------------------------ |
| 0         | LoRa: SF10 / 125kHz | 980                                  |
| 1         | LoRa: SF9 / 125kHz  | 1760                                 |
| 2         | LoRa: SF8 / 125kHz  | 3125                                 |
| 3         | LoRa: SF7 / 125kHz  | 5470                                 |
| 4         | LoRa: SF8 / 500kHz  | 12500                                |
| 5 ~ 7     | RFU                 |                                      |
| 8         | LoRa: SF12/500kHz   | 980                                  |
| 9         | LoRa: SF11/500kHz   | 1760                                 |
| 10        | LoRa: SF10/500kHz   | 3900                                 |
| 11        | LoRa: SF9/500kHz    | 7000                                 |
| 12        | LoRa: SF8/500kHz    | 12500                                |
| 13        | LoRa: SF7/500kHz    | 21900                                |
| 14 ~ 15   | RFU                 |                                      |


<br>


<b> AU915 </b>

| Data Rate | Configuration       | Indicative physical bit rate [bit/s] |
| --------- | ------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125kHz | 250                                  |
| 1         | LoRa: SF11 / 125kHz | 440                                  |
| 2         | LoRa: SF10 / 125kHz | 980                                  |
| 3         | LoRa: SF9 / 125kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125kHz  | 5470                                 |
| 6         | LoRa: SF8/500kHz    | 12500                                |
| 7         | RFU                 | RFU                                  |
| 8         | LoRa: SF12/500kHz   | 980                                  |
| 9         | LoRa: SF11/500kHz   | 1760                                 |
| 10        | LoRa: SF10/500kHz   | 3900                                 |
| 11        | LoRa: SF9/500kHz    | 7000                                 |
| 12        | LoRa: SF8/500kHz    | 12500                                |

<br>

<b> IN865 </b>

| Data Rate | Configuration       | Indicative physical bit rate [bit/s] |
| --------- | ------------------- | ------------------------------------ |
| 0         | LoRa: SF12 / 125kHz | 250                                  |
| 1         | LoRa: SF11 / 125kHz | 440                                  |
| 2         | LoRa: SF10 / 125kHz | 980                                  |
| 3         | LoRa: SF9 / 125kHz  | 1760                                 |
| 4         | LoRa: SF8 / 125kHz  | 3125                                 |
| 5         | LoRa: SF7 / 125kHz  | 5470                                 |
| 6         | RFU                 | RFU                                  |
| 7         | FSK: 50kbps         | 50000                                |
| 8 ~ 15    | RFU                 | RFU                                  |

<br>


## Appendix II：TX Power by Region

<b> EU868 </b>

By default, MaxEIRP is considered to be +16dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2dB        |
| 2       | MaxEIRP - 4dB        |
| 3       | MaxEIRP - 6dB        |
| 4       | MaxEIRP - 8dB        |
| 5       | MaxEIRP - 10dB       |
| 6       | MaxEIRP - 12dB       |
| 7       | MaxEIRP - 14dB       |
| 8 ~ 15  | RFU                  |

<br>


<b> US915 </b>

| TXPower | Configuration (conducted power) |
| ------- | ------------------------------- |
| 0       | 30 dBm - 2*TXpower              |
| 1       | 28 dBm                          |
| 2       | 26 dBm                          |
| 3 ~ 9   |                                 |
| 10      | 10 dBm                          |
| 11 ~ 15 | RFU                             |

<b> AU915 </b>

By default, MaxEIRP is considered to be +30dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1 ~ 10  | MaxEIRP - 2*TXPower  |
| 11 ~ 10 | RFU                  |

<br>


<b> KR920 </b>

By default, MaxEIRP is considered to be +14dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2dB        |
| 2       | MaxEIRP - 4dB        |
| 3       | MaxEIRP - 6dB        |
| 4       | MaxEIRP - 8dB        |
| 5       | MaxEIRP - 10dB       |
| 6       | MaxEIRP - 12dB       |
| 7       | MaxEIRP - 14dB       |
| 8 ~ 15  | RFU                  |

<br>


<b> AS923 </b>

By default, Max EIRP shall be 16dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2dB        |
| 2       | MaxEIRP - 4dB        |
| 3       | MaxEIRP - 6dB        |
| 4       | MaxEIRP - 8dB        |
| 5       | MaxEIRP - 10dB       |
| 6       | MaxEIRP - 12dB       |
| 7       | MaxEIRP - 14dB       |
| 8 ~ 15  | RFU                  |


<br>


<b> IN865 </b>

By default, MaxEIRP is considered to be 30dBm. 

| TXPower | Configuration (EIRP) |
| ------- | -------------------- |
| 0       | MaxEIRP              |
| 1       | MaxEIRP - 2dB        |
| 2       | MaxEIRP - 4dB        |
| 3       | MaxEIRP - 6dB        |
| 4       | MaxEIRP - 8dB        |
| 5       | MaxEIRP - 10dB       |
| 6       | MaxEIRP - 12dB       |
| 7       | MaxEIRP - 14dB       |
| 8       | MaxEIRP - 16dB       |
| 9       | MaxEIRP - 18dB       |
| 10      | MaxEIRP - 20dB       |
| 11 ~ 15 | RFU                  |

<br>

## Appendix III：Maximum Transmission Load by Region

:::tip 📝 NOTE:
M in the following list is the length with MAC header, N is the length without MAC header, and the maximum sending data length is N.
::::

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
