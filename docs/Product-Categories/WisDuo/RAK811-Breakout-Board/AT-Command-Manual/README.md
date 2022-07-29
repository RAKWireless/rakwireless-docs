---
rak_desc: For an easier experience with your LoRaWAN Module, a comprehensive list of commands for the LoRa P2P and LoRaWAN communication is provided. A serial communication interface is also presented for the two-way communication of the RAK811 Breakout Board. 
rak_img: /assets/images/wisduo/rak811-breakout-board/quickstart/overview/RAK811_Breakout_home.png
prev: ../Datasheet/
next: false
tags:
  - RAK811 Breakout Board
  - AT Command Manual
  - wisduo
---


# RAK811 Breakout Board AT Command Manual

## Introduction

The RAK811 Breakout Board is designed to simplify LoRaWAN and LoRa point-to-point (P2P) communication. To integrate LoRa technology into your projects, RAK811 has easy-to-use AT commands via a UART communication interface. Through these AT commands, you can set the parameters needed for LoRa P2P and LoRaWAN communication. You can even control the available GPIO pins and analog input of RAK811. You can also use any microcontroller with a UART interface to control the RAK811 Breakout Board. 

The UART serial communication is exposed on the **UART1 port** through **Pin 6 (TX1)** and **Pin 7 (RX1)**. The default parameters of the UART1 communication are **115200 / 8-N-1**. The firmware upgrade is also possible through this port. To get familiar with the pin distribution of this module and find a schematic circuit of a reference application, refer to the [RAK811 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#rak811-wisduo-lpwan-module-datasheet). You can also see the complete RAK811 Breakout Board pin descriptions in [Appendix IV](/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/#appendix-iv-pin-description-of-rak811).

The RAK811 Breakout Board also supports another serial port through the **Pin 25 (TX3)** and **Pin 26 (RX3)**. This port is named **UART3** with default parameters **115200 / 8-N-1**. You can use UART3 as an alternative to UART1 when sending AT commands. You can also use UART3 when developing custom firmware via [RUI](/RUI/).  **UART3 pins are not exposed on RAK811 Breakout Module**. You can use RAK811 Breakout Board or RAK811 Evaluation Board if you need UART3 pins.

For AT commands example usage, you can check these sections of the Quick Start Guide:

- [TTN OTAA/ABP](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#connecting-to-the-things-network-ttn)
- [ChirpStack OTAA/ABP](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#otaa-mode-2)
- [LoRa P2P](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#lora-p2p-mode)


## Content

- [RAK811 Breakout Board AT Command Manual](#rak811-breakout-board-at-command-manual)
  - [Introduction](#introduction)
  - [Content](#content)
  - [AT Command Syntax](#at-command-syntax)
  - [Error Code Table](#error-code-table)
  - [General AT Command](#general-at-command)
  - [Interface Type AT Command](#interface-type-at-command)
  - [LoRaWAN Type AT Command](#lorawan-type-at-command)
  - [LoRa P2P Type AT Command](#lora-p2p-type-at-command)
  - [Appendix](#appendix)
    - [Appendix I：Data Rate by Region](#appendix-idata-rate-by-region)
    - [Appendix II：TX Power by Region](#appendix-iitx-power-by-region)
    - [Appendix III：Maximum Transmission Load by Region](#appendix-iiimaximum-transmission-load-by-region)
    - [Appendix IV: Pin Description of RAK811 Breakout Board](#appendix-iv-pin-description-of-rak811-breakout-board)


## AT Command Syntax

The AT command is based on ASCII characters. A command begins with the prefix `AT` or `at` and ends with `<CR><LF>` (i.e. \r\n). The maximum length is **255 characters**, which includes the `<CR><LF>` characters at the end of the command. For the rest of the document, the `\r\n` part is omitted for the sake of clarity.

The AT commands can be classified into the following groups:

* **Read Command**: Reads the current configuration or status of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character. 


```
at+get_config=<m>:<n>
```


* **Write Command**: Writes/Modifies the current configuration of the module. The command name and the list of parameters are separated by `=` character. The `<m>` parameter is separated with its associated value `<n>` by the `:` character.


```
at+set_config=<m>:<n>
```

* **Operational Command**: Some commands are neither read nor write commands but are used to execute an action.

```
at+send=lora:<m>:<n> // Sends data through the LoRa transceiver.
```


* **Special Command**: The RAK811 UART port has two operational modes: **Configuration Mode** (default mode) and **Data Transmission Mode**. Data transmission mode allows you to send ASCII payloads directly to the network server via UART without using any AT Command interface like `at+send=lora:X:YYY`. Data transmission mode is explained further on [Interface Type AT Command](/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/#interface-type-at-command) section of this document.

:::tip 📝 NOTE:
To enable data transmission mode, you need to input `at+set_config=device:uart_mode:<index>:<mode>` command.  To switch back from data transmission mode to configuration mode (AT command default mode), the command to be entered is `+++` and does not contain terminators such as `\r` and `\n`.
:::

After the command is executed by the module, a reply is sent back to the external MCU. If the command is successful, the usual reply has the following format:

```
OK [information]\r\n 
```

:::tip 📝 NOTE:

Only Read Commands have information in the replied message, while Write Commands do not have an informative description. 

:::

The firmware developed running in the external MCU will expect at a minimum string of `Ok\r\n` after sending a successful command to the board. On the other hand, when the command is not successfully executed by the board, you will receive a response in the following format:

```
ERROR: [ErrCode]\r\n
```

## Error Code Table

| Error Code | Description                                                                                                                                                                 |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1          | The last command received is an unsupported AT command.                                                                                                                     |
| 2          | Invalid parameter in the AT command.                                                                                                                                        |
| 3          | There is an error when reading or writing the flash memory.                                                                                                                 |
| 4          | There is an error when reading or writing through the IIC bus.                                                                                                                  |
| 5          | There is an error when sending data through the UART port. Check if you exceed 256 bytes UART buffer.                                                                                                                  |
| 80         | The LoRa transceiver is busy, could not process a new command.                                                                                                              |
| 81         | LoRa service is unknown. Unknown MAC command received by the node. Execute commands that are not supported in the current state, such as sending the `at+join` command in P2P mode. |
| 82         | The LoRa parameters are invalid.                                                                                                                                            |
| 83         | The LoRa parameters are invalid.                                                                                                                                            |
| 84         | The LoRa data rate (DR) is invalid.                                                                                                                                         |
| 85         | The LoRa frequency and data rate are invalid.                                                                                                                               |
| 86         | The device has not joined into a LoRa network.                                                                                                                              |
| 87         | The length of the packet exceeded the maximum allowed by the LoRa protocol.                                                                                                 |
| 88         | Service is closed by the server. Due to the limitation of duty cycle, the server will send the "SRV_MAC_DUTY_CYCLE_REQ" MAC command to close the service.                      |
| 89         | This is an unsupported region code.                                                                                                                                         |
| 90         | Duty cycle is restricted. Due to the duty cycle, data cannot be sent at this time until the time limit is removed.                                                              |
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

1. <b> at+version </b>

This command is used to get the current firmware version number.

| Operation | Command      | Response              |
| --------- | ------------ | --------------------- |
| Read      | `at+version` | `OK <version number>` |


**Parameter**: NONE

**Example**:

```
at+version\r\n                         
OK V3.0.0.14.H
```

<br>

2. <b> at+help </b>

This command is used to obtain all AT commands supported by the current firmware.

| Operation | Command   | Response               |
| --------- | --------- | ---------------------- |
| Read      | `at+help` | `OK <all AT commands>` |


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

3. <b>at+set_config=device:restart</b>

This command is used to restart the device.

| Operation | Command                        | Response |
| --------- | ------------------------------ | -------- |
| Read      | `at+set_config=device:restart` |          |


**Parameter**: NONE

**Example**:

```
at+set_config=device:restart

LoRa (R) is a registered trademark or service mark of Semtech Corporation or its affiliates. LoRaWAN (R) is a licensed mark.

RAK811 Version:3.0.0.14.H
UART1 work mode: RUI_UART_NORMAL, 9600, N81
UART3 work mode: RUI_UART_NORMAL, 115200, N81
LoRa work mode: P2P
LoRa P2P Transfer_mode: Sender
Initialization OK 
```

<br>

4. <b>at+set_config=device:sleep:`<status>`</b>

This command is used to change the current state of the device between the sleep and the wake-up mode.

| Operation | Command                               | Response     |
| --------- | ------------------------------------- | ------------ |
| Write     | `at+set_config=device:sleep:<status>` | `OK<STATUS>` |


**Parameter**:

<table>
  <tr>
    <td> Status </td>
    <td> 0: wake up <br> 1: sleep </td>
  </tr>
</table>


<br>

**Example**:

```
at+set_config=device:sleep:1\r\n                         
OK Sleep

at+set_config=device:sleep:0\r\n 
OK Wake Up
```

:::tip 📝 NOTE: 

During sleep, Pin 7 (RX1) and Pin 26 (RX3) are automatically configured as wake up pins and in external interrupt mode with an internal pull-down resistor. Wake-up will be triggered by a rising edge on these RX pins.

:::


<br>

5. <b>at+get_config=device:status</b>

This command is used to obtain the current status of the device.

| Operation | Command                       | Response          |
| --------- | ----------------------------- | ----------------- |
| Read      | `at+get_config=device:status` | `OK<information>` |


**Parameter**: None

**Example**:

```
at+get_config=device:status\r\n                         
OK Board Core:RAK811
MCU:STM32L151CBU6A
LoRa chip:SX1276
```


## Interface Type AT Command

1. <b>at+set_config=device:uart:`<index>:<baud_rate>`</b>

This command is used to configure the baud rate for a UART port. 

:::tip 📝 NOTE:
There will be no reply after executing this configuration if a different baud rate is set. To make your UART serial communication work again, configure the UART baud rate setting of the Serial Port Tool based on the new baud rate.
:::

| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart:<index>:<baud_rate>` | `OK`     |

**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Number: 1 or 3. Two UART ports are currently supported starting FW V3.0.0.14.H - UART1 and UART3 </td>
    </tr>
    <tr>
      <td> baud_rate </td>
      <td> UART Baud rate：1200, 2400, 4800, 9600, 19200, 38400, 57600, 115200 
      </td>
    </tr>
</table>


**Example**:

```
at+set_config=device:uart:1:115200\r\n                         
```
<br>

2. <b>at+set_config=device:uart_mode:`<index>:<mode>`</b>

This command is used to set the UART operation from AT **configuration mode** to **data transmission mode**.

During **data transmission mode**, all standard AT Commands will not work and the data that you sent to UART will go directly to the network server as ASCII payload with `\r\n`. If you input `AZ`, the network server will receive an uplink hex value of `415A0D0A`. This means **A**=`0x41`, **Z**=`0x5A`, **\r**=`0x0D` and **\n**=`0x0A`.

:::tip 📝 NOTE: 

To switch back from data transmission mode to configuration mode, use `+++` (`+++` without `\ r\ n`).

:::



| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=device:uart_mode:<index>:<mode>` | `OK`     |

**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Number: 1 or 3. Two UART ports are currently supported starting FW V3.0.0.14.H - UART1 and UART3 </td>
    <tr>
      <td> mode </td>
      <td> UART Mode： Only 1 can be selected, which means the UART is set to data transmission mode. </td>
    </tr>
</table>




**Example**:

```
at+set_config=device:uart_mode:1:1\r\n
OK

+++
OK
```

<br>

3. <b>at+send=uart:`<index>:<data>`</b>

This command is used for sending data over a UART port.

| Operation | Command                       | Response |
| --------- | ----------------------------- | -------- |
| Write     | `at+send=uart:<index>:<data>` | `OK`     |


**Parameter**:

<table>
    <tr>
      <td> index </td>
      <td> UART Number: 1 or 3. Two UART ports are currently supported starting FW V3.0.0.14.H - UART1 and UART3 </td>
    </tr>
    <tr>
      <td> mode </td>
      <td> The data you want to send. The maximum length of data is <b>250 characters</b>, equivalent to 255 — the length of <code>at+...</code> — the length of <code>\ r\ n.</code> </td>
    </tr>
</table>


**Example**:

```
at+send=uart:1:12345\r\n                         
OK
```

<br>

4. <b>at+get_config=device:gpio:`<pin_num>`</b>

This command is used to obtain the voltage level status of a pin on a module.
| Operation | Command                               | Response     |
| --------- | ------------------------------------- | ------------ |
| Read      | `at+get_config=device:gpio:<pin_num>` | `OK<status>` |

**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> Pin index of the module <br> (GPIO pins available on this Breakout board are Pin 2, Pin 3, Pin 4, Pin 5, Pin 8, Pin 9, Pin 14, Pin 15, Pin 16, Pin 20, Pin 22, and Pin 23 of the RAK811 module) </td>
    </tr>
    <tr>
      <td> status（Return Value） </td>
      <td> 0: Low Voltage Level <br> 1: High Voltage Level
    </td>
    </tr>
</table>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/at-command/RAK811_gpio.png"
  width="60%"
  caption="GPIO Pinout Mapping for RAK811 Breakout Board"
/>

**Example**:

```
at+get_config=device:gpio:2\r\n                         
OK 1
```

<br>

5. <b>at+set_config=device:gpio:`<pin_num>:<status>`</b>

This command is used to set the voltage level state (high or low) of a pin on a board. 

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=device:gpio:<pin_num>:<status>` | `OK`     |


**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> Pin index of the module <br> (GPIO pins available on this Breakout board are Pin 2, Pin 3, Pin 4, Pin 5, Pin 8, Pin 9, Pin 14, Pin 15, Pin 16, Pin 20, Pin 22, and Pin 23 of the RAK811 module) <br> <b> Please refer on Figure 1. </b> </td>
    </tr>
    <tr>
      <td> status </td>
      <td> 0: Low Voltage Level <br> 1: High Voltage Level
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=device:gpio:2:0\r\n                         
OK 
```

<br>

6. <b>at+get_config=device:adc:`<pin_num>`</b>

This command is used to obtain the voltage level of an ADC pin of the board.

| Operation | Command                              | Response      |
| --------- | ------------------------------------ | ------------- |
| Read      | `at+get_config=device:adc:<pin_num>` | `OK<voltage>` |


**Parameter**:

<table>
    <tr>
      <td> pin_num </td>
      <td> ADC pin index of the module <br> (ADC pins available on this Breakout board are different between high and low-frequency modules. <br> - For low-frequency modules, the ADC pins are Pin 2, Pin 3, Pin 4, Pin 5, Pin 15, Pin 20, Pin 22, and Pin 23 <br> - For high-frequency modules, the ADC pins are in 2, Pin 3, Pin 4, Pin 20, Pin 22, and Pin 23) </td>
    </tr>
    <tr>
      <td> Voltage（Return Value） </td>
      <td> Voltage，Unit: <b>mV</b>
    </td>
    </tr>
</table>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/at-command/RAK811_BBLF_ADC_pins.png"
  width="65%"
  caption="ADC Pinout of the RAK811 Breakout board on Low-frequency modules"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/at-command/RAK811_BBHF_ADC_pins.png"
  width="65%"
  caption="ADC Pinout of the RAK811 Breakout board on High-frequency modules"
/>

**Example**:

```
at+get_config=device:adc:2\r\n                         
OK 1663mV
```

## LoRaWAN Type AT Command

1. <b>at+join</b>

This command is used to join a LoRaWAN network.

| Operation | Command   | Response          |
| --------- | --------- | ----------------- |
|           | `at+join` | `OK Join Success` |


**Parameter**: NONE

**Example**:

```
at+join\r\n
OK Join Success
```

<br>

2. <b>at+send=lora:`<port>:<data>`</b>

This command is used to send data via LoRaWAN.


| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
|           | `at+send=lora:<port>:<data>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> port </td>
      <td> Sending port of LoRa. The value range is 1-223. </td>
    </tr>
    <tr>
      <td> data </td>
      <td> The sending data format is in hexadecimal format. The possible values are between <b>00-FF</b>. The module will internally cast every two characters into a byte before sending it to the LoRa transceiver. The maximum length varies depending on the band frequency and DR (LoRaWAN standard). Refer to <a href="/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/#appendix-iii：maximum-transmission-load-by-region" >Appendix III</a>.
    </td>
    </tr>
</table>

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

When sending a confirmed message, you will receive an ACK response, i.e. `at+recv=...`. 
The `0, -105, -12,0` stands for:
  * `0`: For the LoRa port;
  * `-105`: For the RSSI;
  * `-12`: For the SNR;
  * `0`: For the length of the data (no valid data in ACK).
:::

<br>

3. <b>at+set_config=lora:region:`<region>`</b>

This command is used for setting the appropriate working frequency band.


| Operation | Command                              | Response |
| --------- | ------------------------------------ | -------- |
| Write     | `at+set_config=lora:region:<region>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> region </td>
      <td> EU433, CN470, IN865, EU868, US915, AU915, KR920, AS923. The default is EU868.
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:region:EU868\r\n                         
OK
```

:::tip 📝 NOTE:
In the AS923 frequency band, the supported frequency plan is "as2" and dwell is set to 1.
:::

<br>

4. <b>at+get_config=lora:channel</b>

This command is used to read all the LoRa channel information given the current region configured on the board.


| Operation | Command                      | Response                   |
| --------- | ---------------------------- | -------------------------- |
| Read      | `at+get_config=lora:channel` | `OK <channel information>` |


**Parameter**: NONE

**Example**: EU868 region

```
at+get_config=lora:channel\r\n                         
OK *0,on,868100000,0,5; *1,on,868300000,0,5; *2,on,868500000,0,5; 3,off,0,0,0; 4,off,0,0,0; 5,off,0,0,0; 6,off,0,0,0; 7,off,0,0,0; *8,on,867100000,0,5; *9,on,867300000,0,5; *10,on,867500000,0,5; *11,on,867700000,0,5; *12,on,867900000,0,5; 13,off,0,0,0; 14,off,0,0,0; 15,off,0,0,0 
```

:::tip 📝 NOTE:

With "<b>*0,on,868100000,0,5</b>" as an example，the following is the channel parameter analysis:

- `*` at the beginning, if the channel is open;
- `0` is the channel ID;
- `on` indicates the current status of the channel;
- `868100000` is the actual frequency of the channel，unit is Hz;
- `0,5` indicates the DR of the channel, DR0~DR5.

:::

<br>

5. <b>at+set_config=lora:ch_mask:`<channel_number>:<status>`</b>

This command is used for switching a channel (turn on or off) in the current region. 


| Operation | Command                                                | Response |
| --------- | ------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:ch_mask:<channel_number>:<status>` | `OK `    |


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


**Example**:

```
at+set_config=lora:ch_mask:0:0\r\n
OK
```

<br>

6. <b>at+set_config=lora:dev_eui:`<dev_eui>`</b>

This command is used to set the Device EUI parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_eui:<dev_eui>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> dev_eui </td>
      <td> Device EUI
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:dev_eui:3530353064377716\r\n                         
OK
```

<br>

7. <b>at+set_config=lora:app_eui:`<app_eui>`</b>

This command is used to set the Application EUI parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_eui:<app_eui>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> app_eui </td>
      <td> Application EUI
    </td>
    </tr>
</table>

:::tip 📝 NOTE:
All zero value Application EUI `at+set_config=lora:app_eui:0000000000000000` is **not supported** and will return error. 
:::

**Example**:

```
at+set_config=lora:app_eui:0000000000000001\r\n                         
OK
```

<br>

8. <b>at+set_config=lora:app_key:`<app_key>`</b>

This command is used to set the Application Key parameter for the LoRaWAN OTAA mode.

| Operation | Command                                | Response |
| --------- | -------------------------------------- | -------- |
| Write     | `at+set_config=lora:app_key:<app_key>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> app_key </td>
      <td> Application Key
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:app_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```

<br>

9. <b>at+set_config=lora:dev_addr:`<dev_addr>`</b>

This command is used to set the Device Address parameter for the LoRaWAN ABP mode.


| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:dev_addr:<dev_addr>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> dev_addr </td>
      <td> Device Address
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:dev_addr:260125D7\r\n                         
OK
```

<br>

10. <b>at+set_config=lora:apps_key:`<apps_key>`</b>

This command is used to set the Application Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:apps_key:<apps_key>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> apps_key </td>
      <td> Application Session Key
    </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:apps_key:841986913ACD00BBC2BE2479D70F3228\r\n                         
OK
```

<br>

11. <b>at+set_config=lora:nwks_key:`<nwks_key>`</b>

This command is used to set the Network Session Key parameter for the LoRaWAN ABP mode.

| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Read      | `at+set_config=lora:nwks_key:<nwks_key>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> nwks_key </td>
      <td> Network Session Key </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:nwks_key:69AF20AEA26C01B243945A28C9172B42\r\n                         
OK
```

<br>

12. <b>at+set_config=lora:multicastenable:`<IsEnable>`</b>

    
| Operation | Command                                         | Response |
| --------- | ----------------------------------------------- | -------- |
| Write     | `at+set_config=lora:multicastenable:<IsEnable>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> IsEnable </td>
      <td> 0: disable <br> 1: enable <br> The default is disable. </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:multicastenable:1\r\n                         
OK
```

<br>

13. <b>at+set_config=lora:multicast_dev_addr:`<multicast_dev_addr>`</b>

This command is used for setting the Device Address for the multicast feature.
 
| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_dev_addr:<multicast_dev_addr>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> multicast_dev_addr </td>
      <td> Multicast Device Address </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:multicast_dev_addr:260111fd\r\n                         
OK
```

<br>

14. <b>at+set_config=lora:multicast_apps_key:`<multicast_apps_key>`</b>

This command is used for the setting of the Application Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_apps_key:<multicast_apps_key>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> multicast_app_addr </td>
      <td> Multicast Application Session Key </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:multicast_apps_key:F13DDFA2619B10411F02F042E1C0F356\r\n                         
OK
```

<br>

15. <b> `at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>` </b>

This command is used to set the Network Session Key for the multicast feature.

| Operation | Command                                                      | Response |
| --------- | ------------------------------------------------------------ | -------- |
| Write     | `at+set_config=lora:multicast_nwks_key:<multicast_nwks_key>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> multicast_nwks_key </td>
      <td> Multicast Network Session Key </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:multicast_nwks_key:1D1991F5377C675879C39B6908D437A6\r\n                         
OK
```

<br>

16. <b>at+set_config=lora:join_mode:`<mode>`</b>

This command is used to switch the LoRaWAN access mode between the OTAA and the ABP mode.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:join_mode:<mode>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> mode </td>
      <td> Activation mode <br> 0: OTAA <br> 1: ABP <br> The default is OTAA. </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:join_mode:1\r\n                         
OK
```

<br>

17. <b>at+set_config=lora:class:`<class>`</b>

This command is used to set LoRaWAN class to Class A, Class B, or Class C.


| Operation | Command                            | Response |
| --------- | ---------------------------------- | -------- |
| Write     | `at+set_config=lora:class:<class>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> class </td>
      <td> 0: Class A <br> 1: Class B （Not supported at this time）<br> 2: Class C <br> The default is Class A. </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:class:0\r\n
OK
```

<br>

18. <b>at+set_config=lora:confirm:`<type>`</b>

This command is used for setting the type of messages to be sent: Confirmed/Unconfirmed.

| Operation | Command                             | Response |
| --------- | ----------------------------------- | -------- |
| Write     | `at+set_config=lora:confirm:<type>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> type </td>
      <td> 0: unconfirm type <br> 1: confirm type <br> The default is unconfirm type.
 </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:confirm:0\r\n                         
OK
```

19. <b>at+set_config=lora:dr:`<dr>`</b>

This command is used to set the data rate (DR) of LoRa.

| Operation | Command                      | Response |
| --------- | ---------------------------- | -------- |
| Write     | `at+set_config=lora:dr:<dr>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> dr </td>
      <td> The data rate of LoRa is related to the current region. In most of the LoRa areas, it is common to use 0 to 5. Detailed reference can be made to LoRaWAN 1.0.2 specification. </td>
    </tr>
</table>

<br>

20. <b>at+set_config=lora:tx_power:`<tx_power>`</b>

This command is used to set the RF transmission power level of the LoRa transceiver.


| Operation | Command                                  | Response |
| --------- | ---------------------------------------- | -------- |
| Write     | `at+set_config=lora:tx_power:<tx_power>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td>tx_power </td>
      <td> Refer to <a href="/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/#appendix-ii：tx-power-by-region" >Appendix II</a> for possible values of tx_power. The table of Appendix II is based on LoRaWAN 1.0.2 specification. LoRa transmit power level varies depending on frequency band.  <br> <br>If the resulting TX power is higher than the capability of LoRa Radio, the output power will be based on the max TX power of the LoRa Radio in the module. For RAK811 module, the max TX power is 20dBm. Take note of this when using regional bands with MaxEIRP higher than 20dBm like US915, AU915 and IN865 whose MaxEIRP is 30dBm.<br> <br> The default setting is 0. 
 </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:tx_power:0\r\n                         
OK
```

<br>

21. <b>at+set_config=lora:adr:`<status>`</b>

This command is used to turn on/off the ADR feature of the LoRa communication. 

| Operation | Command                           | Response |
| --------- | --------------------------------- | -------- |
| Write     | `at+set_config=lora:adr:<status>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> status </td>
      <td> 0: Turn off <br> 1: Turn on <br> The default is on. </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:adr:0\r\n                         
OK
```

<br>

22. <b>at+get_config=lora:status</b>

This command is used to get all the information related to the current LoRa status, except the channel information.

| Operation | Command                     | Response                  |
| --------- | --------------------------- | ------------------------- |
| Read      | `at+get_config=lora:status` | `OK <lora status detail>` |


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

23. <b>at+set_config=lora:dutycycle_enable:`<status>`</b>

This command is used to enable or disable the Duty Cycle feature.

| Operation | Command                                        | Response |
| --------- | ---------------------------------------------- | -------- |
| Write     | `at+set_config=lora:dutycycle_enable:<status>` | `OK `    |

**Parameter**:

<table>
    <tr>
      <td> status </td>
      <td> 0: disable <br> 1: enable <br> The default is disable. </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:dutycycle_enable:1\r\n
OK
```

<br>

24. <b>at+set_config=lora: send_repeat_cnt:`<num>`</b>

This command is used to set the number of retransmitting attempts on an uplink message. When activated, the board will resend a message if its corresponding ACK (downlink) is not received after sending a confirmed uplink message. The default value is 0, which means that the board will not resend any message by default.

| Operation | Command                                     | Response |
| --------- | ------------------------------------------- | -------- |
| Write     | `at+set_config=lora: send_repeat_cnt:<num>` | `OK `    |


**Parameter**:

<table>
    <tr>
      <td> num </td>
      <td> Number of retries, up to 8. <br> The default is 0.  </td>
    </tr>
</table>


**Example**:

```
at+set_config=lora:send_repeat_cnt:1\r\n
OK
```

<br>

25. <b>at+set_config=lora:default_parameters</b>

This command is used to restore OTAA, ABP, multicast related network access parameters set at the factory, including dev_eui，app_eui, etc.

| Operation | Command                                 | Response |
| --------- | --------------------------------------- | -------- |
| Write     | `at+set_config=lora:default_parameters` | `OK `    |


**Parameter**: NONE

**Example**:

```
at+set_config=lora:default_parameters\r\n
OK
```


## LoRa P2P Type AT Command

1. <b>at+set_config=lora:work_mode:`<mode>`</b>

This command is used to switch the LoRa work mode between the LoRaWAN and the LoRa P2P mode. This command will cause the module to restart.

| Operation | Command                               | Response |
| --------- | ------------------------------------- | -------- |
| Write     | `at+set_config=lora:work_mode:<mode>` |          |


**Parameter**:

<table>
    <tr>
      <td> mode </td>
      <td>Work mode of LoRa<br>0: LoRaWAN<br>1: LoRa P2P <br><br>The default is LoRaWAN mode.</td>
    </tr>
</table>

**Example**：

```
at+set_config=lora:work_mode:1\r\n                         
UART1 work mode: RUI_UART_NORMAL
Current work_mode:P2P
Initialization OK
```

<br> 

2. <b>at+set_config=lorap2p:`<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>`</b>

This command is used to set the relevant parameters of LoRa P2P mode and is only valid when the LoRa mode is switched to LoRa P2P before.

| Operation | Command                                                                                      | Response |
| --------- | -------------------------------------------------------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p:<frequency>:<spreadfact>:<bandwidth>:<codingrate>:<preamlen>:<power>` | OK       |

**Parameter**:

<table>
        <tr>
            <td>frequency</td>
            <td>Frequency, the unit is Hz<br>The default is 869525000&nbsp;Hz.</td>
        </tr>
        <tr>
            <td>spreadfact</td>
            <td>Spreading factor<br>The default is 12.</td>
        </tr>
        <tr>
            <td>bandwidth</td>
            <td>0:  125&nbsp;kHz<br>1:  250&nbsp;kHz<br>2:  500&nbsp;kHz<br><br>The default is 0.</td>
        </tr>
        <tr>
            <td>codingrate</td>
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


**Example**：

```
at+set_config=lorap2p:869525000:12:0:1:8:20\r\n                         
OK
```

<br>

3. <b>at+set_config=lorap2p:transfer_mode:`<mode>`</b>

This command is used to switch the state of the LoRa transceiver between sending and receiving state, and it is only valid when the LoRa mode is set to LoRa P2P before.

| Operation | Command                                       | Response |
| --------- | --------------------------------------------- | -------- |
| Write     | `at+set_config=lorap2p: transfer_mode:<mode>` | OK       |

**Parameter**：

<table>
      <tr>
            <td>mode</td>
            <td>1:  receiver mode<br>2:  sender mode<br><br>The default is sender mode.</td>
        </tr>
</table>


**Example**：
```
at+set_config=lorap2p:transfer_mode:1\r\n           
OK
```

<br>

4. <b>at+send=lorap2p:`<data>`</b>

This command is used to send data through LoRa P2P and is only valid when the LoRa work mode is set to LoRa P2P before.


| Operation | Command                  | Response |
| --------- | ------------------------ | -------- |
| Send      | `at+send=lorap2p:<data>` | OK       |

**Parameter**：

<table>
      <tr>
            <td>data</td>
            <td>The data to be sent, and the format is hexadecimal. </td>
        </tr>
</table>


**Example**：
```
at+send=lorap2p:1234\r\n                         
OK
```

In LoRa P2P mode, the receiving node receives the data and outputs the data in the following format:

```
at+recv=<RSSI>,<SNR>,<Data Length>:<Data>
```

<br>

## Appendix

### Appendix I：Data Rate by Region

<b> EU433/EU868/AS923 </b>

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

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 20&nbsp;dBm. 

| TXPower | Configuration (Conducted Power) |
| ------- | ------------------------------- |
| 0       | MaxEIRP                         |
| 1       | MaxEIRP - 2&nbsp;dB             |
| 2       | MaxEIRP - 4&nbsp;dB             |
| 3 ~ 9   |                                 |
| 10      | 10&nbsp;dBm                     |
| 11 ~ 15 | RFU                             |

<br>

<b> AU915 </b>

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 20&nbsp;dBm. 

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

By default, Max EIRP shall be 16&nbsp;dBm. 

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

By default, MaxEIRP is considered to be +30&nbsp;dBm based on LoRa Alliance specification.
However, the module's max TX power is only up to 20&nbsp;dBm. 

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


<b> CN470 </b>

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

<br>

### Appendix III：Maximum Transmission Load by Region

:::tip 📝 NOTE:
The LoRaWAN stack adds 8 bytes to the user payload. In the following list, M is the maximum payload size and N is the maximum usable payload size for the user data without the MAC header.
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



### Appendix IV: Pin Description of RAK811 Breakout Board

The pin definition of the RAK811 Breakout Board can be reviewed in the [Pin Definition](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#pin-definition) section of the Datasheet.

Listed are the summary of the pins of the RAK811 Breakout Board:

:::tip 📝 NOTE:
Not all pins of the RAK811 module are exposed on the RAK811 Breakout board header connectors. Below are the pins available on the RAK811 Module that is on this Breakout board. For complete RAK811 module pinouts information, refer to the [datasheet](/Product-Categories/WisDuo/RAK811-Module/Datasheet/#pin-definition).
:::

1. **About the UART Pin**: 

     - Pin 7 (RX1) and Pin 6 (TX1) are reserved for UART1.
     - Pin 26 (RX3) and Pin 25 (TX3) are reserved for UART3.
     - During sleep, Pin 7 (RX1) and Pin 26 (RX3) are automatically configured as wake-up pins and in external interrupt mode with internal pull-down resistor. Wake-up will be triggered by a rising edge on these RX pins.

2. **About the SWD debug Pin**: Pin 10 (SWDIO) and Pin 13 (SWCLK) are used for SWD connection.

3. **About the power Pin**: The power pin on the RAK811 module includes the VCC pin on Pin 11, and Ground pins (GND) are on the Pin 1, Pin 12, Pin 21, Pin 28, Pin 29, Pin 30, Pin 31, Pin 32, and Pin 34.

4. **About the reset Pin**: The reset pin on the RAK811 module is Pin 24 (RST).

5. **About the BOOT Pin**: The boot Pin on the RAK811 module is Pin 17 (BOOT0).

6. **About the RF antenna Pin**: The RF antenna Pin on the RAK811 module is Pin 33 (RF_OUT).

7. **About the ADC Pin**: The ADC pins available on the RAK811 are different between the high and low-frequency modules. 

  - In the low-frequency modules, the ADC Pins are the following:
    - Pin 2 (PB12)
    - Pin 3 (PB14)
    - Pin 4 (PB15)
    - Pin 5 (PB13)
    - Pin 15 (PA3)
    - Pin 20 (PA2)
    - Pin 22 (PA1)
    - Pin 23 (PA0)

  - In the high-frequency modules, the ADC Pins are the following:
    - Pin 2 (PB12)
    - Pin 3 (PB14)
    - Pin 4 (PB15)
    - Pin 20 (PA2)
    - Pin 22 (PA1)
    - Pin 23 (PA0)

8. **About the GPIO Pin**: The GPIO pins available on the RAK811 module are the following:
    - Pin 2
    - Pin 3
    - Pin 4
    - Pin 5
    - Pin 8
    - Pin 9
    - Pin 14
    - Pin 15
    - Pin 16
    - Pin 20
    - Pin 22
    - Pin 23


:::tip 📝 NOTE:

If you want to use the RAK811 Breakout Board to make a product, you should understand how to upgrade the RAK811 firmware in the future. As mentioned, the firmware of the RAK811 Breakout Board can be upgraded through the SWD or UART1 port. Both require a general-purpose PC.

:::
