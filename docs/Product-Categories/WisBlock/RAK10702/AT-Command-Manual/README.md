---
rak_desc: For an easier experience with your RAK10702 Indoor Comfort Node, the default firmware of the device comes with and AT command interface that is mostly compatible with the RUI3 AT command format.
rak_img: /assets/images/wisblock/rak10702/rak10702.png
prev: ../Quickstart/
next: ../Assembly/
tags:
  - wisblock
  - solutions
  - Indoor Comfort Node
---

# RAK10702 Indoor Comfort Node AT Command Manual

To make it easy to set up the LoRaWAN credentials and LoRa P2P settings, an AT command interface over USB and BLE is implemented. The AT command format is compatible with the [RUI3 AT Command interface](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/) with some exceptions because the used LoRaWAN stack is different from RUI3.

::: tip 📝 NOTE
_**REMARK 1**_:
After changing the LoRaWAN parameters or LoRa P2P settings, the device must be reset by either the `ATZ` command or by pushing the reset button.

_**REMARK 2**_:
The Serial port connection is lost after the `ATZ` command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again.

_**REMARK 3**_:
The Serial port is set up for 115200 baud, 8N1. It cannot be changed by AT commands.

:::

## Content

  - [AT Command Syntax](#at-command-syntax)
  - [Send Interval Setup](#send-interval-setup)
  - [Set fPort](#set-fport)
  - [UI Selection](#ui-selection)
  - [RTC Setup](#rtc-setup)
  - [CO2 Sensor Calibration](#co2-sensor-calibration)
  - [Differences to RUI3 AT commands](#differences-to-rui3-at-commands)
  - [Appendix](#appendix)
    - [Appendix I Data Rate by Region](#appendix-i-data-rate-by-region)
    - [Appendix II TX Power by Region](#appendix-ii-tx-power-by-region)
    - [Appendix III Maximum Transmission Load by Region](#appendix-iii-maximum-transmission-load-by-region)


## AT Command Syntax

The AT command is based on ASCII characters. In general, the AT Command starts with the prefix `AT` and ends with `<CR><LF>` (i.e. `\r\n`). For the rest of the manual, the `\r\n` part is omitted for the sake of clarity.

The AT commands have the standard format `AT+XXX` with `XXX` denoting the command.

There are four available command formats:

| **AT COMMAND FORMAT**      | **Description**                                   |
| -------------------------- | ------------------------------------------------- |
| `AT+XXX?`                  | Provides a short description of the given command |
| `AT+XXX=?`                 | Reading the current value on the command          |
| `AT+XXX=<input parameter>` | Writing configuration on the command              |
| `AT+XXX`                   | Used to run a command                             |

The output of the commands is returned via UART.

The format of the reply is divided into two parts: **returned value** and the **status return code**.

::: tip 📝 NOTE

`<CR>` stands for **carriage return** and `<LF>` stands for **line feed**.

:::

1. **`<value><CR><LF>`** is the first reply when **`AT+XXX?`** command description or **`AT+XXX=?`** reading value is executed, then it will be followed by the status return code. The formats with no return value like **`AT+XXX=<input parameter>`** writing configuration command and **`AT+XXX`** run command will just reply to the status return code.

2. **`<CR><LF><STATUS><CR><LF>`** is the second part of the reply, which is the status return code.

The possible status codes are:

| **STATUS RETURN CODE** | **Description**                              |
| ---------------------- | -------------------------------------------- |
| `OK`                   | Command executed correctly without error.    |
| `+CME ERROR:1`         | Generic error or input is not supported.     |
| `+CME ERROR:2`         | Command not allowed.                         |
| `+CME ERROR:5`         | The input parameter of the command is wrong. |
| `+CME ERROR:6`         | The parameter is too long.                   |
| `+CME ERROR:8`         | Value out of range.                          |

More details on each command description and examples are given in the remainder of this section.

[Back](#content)

----

## Send Interval Setup

Description: Get and set the data send interval

This command allows the user to get the current device status.

| Command                         | Input Parameter            | Return Value                                                         | Return Code                |
| ------------------------------- | -------------------------- | -------------------------------------------------------------------- | -------------------------- |
| `ATC+SENDINT?`                  | -                          | `ATC+SENDINT: Send interval, Get or Set the automatic send interval` | `OK`                       |
| `ATC+SENDINT=?`                 | -                          | *< interval >*                                                       | `OK`                       |
| `ATC+SENDINT=<Input Parameter>` | *< interval in seconds  >* | -                                                                    | `OK` *or* `AT_PARAM_ERROR` |

**Examples**:

```
atc+sendint?

AT+SENDINT:"Send interval, Get or Set the automatic send interval"

OK

atc+sendint=?
AT+SENDINT=600

OK

atc+sendint=600
OK

```

[Back](#content)

----

## Set fPort

Description: fPort settings

This command allows the user to access and configure port settings.

| Command                      | Input Parameter | Return Value                              | Return Code                |
| ---------------------------- | --------------- | ----------------------------------------- | -------------------------- |
| `ATC+PORT?`                  | -               | `AT+PORT=<Port><CR>. Get or Set the Port` | `OK`                       |
| `ATC+PORT=?`                 | -               | 1-223                                     | `OK`                       |
| `ATC+PORT=<Input Parameter>` | 1-223           | -                                         | `OK` *or* `AT_PARAM_ERROR` |

**Examples**:

```
ATC+PORT?

ATC+PORT: Get or Set the Port=[1..223]
OK

ATC+PORT=?

ATC+PORT:2
OK

ATC+PORT=2

OK
```

[Back](#content)

----

## UI Selection

The default UI can be set with an AT command.

| Command                    | Input Parameter                  | Return Value                                              | Return Code            |
| -------------------------- | -------------------------------- | --------------------------------------------------------- | ---------------------- |
| `ATC+UI?`                  | -                                | `ATC+UI`: Switch display UI, 0 = scientific, 1 = iconized | `OK`                   |
| `ATC+UI=?`                 | -                                | `<current UI>`                                            | `OK`                   |
| `ATC+UI=<Input Parameter>` | `<0 = scientific, 1 = iconized>` | -                                                         | `OK` or `+CME ERROR:6` |


**Examples**:

Check function
```log
ATC+UI?

ATC+UI:"Switch display UI, 0 = scientific, 1 = iconized"

OK
```

Get current default

```log
ATC+UI=?

1

OK
```

Set new default

```log
ATC+UI=1

OK
```

Wrong selection

```log

ATC+UI=3

+CME ERROR:6
```

[Back](#content)

----

## RTC Setup

If the RAK12002 RTC module is used, an additional user AT command is available to set the RTC time and date.

| Command                     | Input Parameter | Return Value                         | Return Code            |
| --------------------------- | --------------- | ------------------------------------ | ---------------------- |
| `ATC+RTC?`                  | -               | `ATC+RTC`: Get/Set RTC time and date | `OK`                   |
| `ATC+RTC=?`                 | -               | `<date & time>`                      | `OK`                   |
| `ATC+RTC=<Input Parameter>` | `<date & time>` | -                                    | `OK` or `+CME ERROR:6` |

**Examples**:

Check function
```log
ATC+RTC?

ATC+RTC:"Get/Set RTC time and date"

OK
```

Get time

```log
ATC+RTC=?

2023.07.02 20:44:45

OK
```

Set time

```log
ATC+RTC=2023:7:2:20:49

OK
```

Wrong time format

```log

ATC+RTC=2023:7:2:25:61

+CME ERROR:6
```

[Back](#content)

----

## CO<sub>2</sub> Sensor Calibration

The SCD30 CO<sub>2</sub> Sensor from Sensirion has a calibration function. If the sensor results are not within the expected range, the CO<sub>2</sub> sensor can be calibrated with a value retrieved from a calibration device.

| Command                     | Input Parameter | Return Value                                          | Return Code            |
| --------------------------- | --------------- | ----------------------------------------------------- | ---------------------- |
| `ATC+CO2?`                  | -               | `ATC+CO2`: Set CO2 calibration value, 400 ... 2000ppm | `OK`                   |
| `ATC+CO2=?`                 | -               | `<calibration>`                                       | `OK`                   |
| `ATC+CO2=<Input Parameter>` | `<calibration>` | -                                                     | `OK` or `+CME ERROR:6` |

**Examples**:

Check function
```
ATC+CO2?

ATC+CO2:"Set CO2 calibration value, 400 ... 2000ppm"

OK
```

Get current calibration value

```
ATC+CO2=?

400

OK
```

Set new calibration value

```
ATC+CO2=400

OK
```

Wrong calibration value

```
ATC+CO2=2300

+CME ERROR:6
```

[Back](#content)

----

## Differences to RUI3 AT commands

As the firmware of the RAK10702 Indoor Comfort Node is not based on RUI3, the following AT commands are not supported or have a different behaviour:

| RUI3 AT command | Remark                                                             |
| --------------- | ------------------------------------------------------------------ |
| `AT+BOOT`       | Restarts device in Arduino bootloader mode with DFU/UF2 mode       |
| `AT+BUILDTIME`  | Returns the build time of the application, not the RUI3 build time |
| `AT+CLIVER`     | Returns fixed version 1.5.8, not the RUI3 CLI version              |
| `AT+APIVER`     | Returns fixed version 3.2.3, not the RUI3 API version              |
| `AT+SN`         | Returns the MCU unique ID, cannot be changed                       |
| `AT+NETID`      | Returns always 0, cannot be changed                                |
| `AT+LPM`        | RUI3 low power mode is not supported                               |
| `AT+DCS`        | Returns the current duty cycle setting, cannot be changed          |
| `AT+PNM`        | Returns the current network selection, cannot be changed           |
| `AT+CHE`        | Returns the current network selection, cannot be changed           |
| `AT+CHS`        | Returns the current network selection, cannot be changed           |
| `AT+JN1DL`      | Returns the current delay, cannot be changed                       |
| `AT+JN2DL`      | Returns the current delay, cannot be changed                       |
| `AT+RX1DL`      | Returns the current delay, cannot be changed                       |
| `AT+RX2DL`      | Returns the current delay, cannot be changed                       |
| `AT+RX2DR`      | Returns the current delay, cannot be changed                       |
| `AT+RX2FQ`      | Returns the current delay, cannot be changed                       |
| `AT+ARSSI`      | Returns the only last data RSSI, not all channels                  |
| `AT+LINKCHECK`  | Returns always 0                                                   |
| `AT+LSTMULC`    | Returns always no multicast channels defined                       |

[Back](#content)

----

## Appendix

### Appendix I Data Rate by Region

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

[Back](#content)

----

### Appendix II TX Power by Region

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

[Back](#content)

----

### Appendix III Maximum Transmission Load by Region

_**M in the following list is the length with MAC header, N is the maximum usable payload size for the user data without MAC header.**_

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

[Back](#content)
