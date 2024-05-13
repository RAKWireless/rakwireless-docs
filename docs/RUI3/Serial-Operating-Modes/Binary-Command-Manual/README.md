# Binary Command Manual

::: tip 📝 NOTE    
Binary Mode has been removed from the API to reduce code size.    
:::

<!--
## Overview

Binary mode is designed for M2M (Machine to Machine) communication, which provides an efficient way to do binary data transmission between multiple devices supporting Binary mode. On receiving a frame, it unwraps the received frame and dispatches the payload to the correct upper software layer. It can be easily extended via upper software layers to register customized frame types and provide corresponding customized handlers.

You can enable Binary mode by sending `AT+APM` if you are in AT Command Mode and `Serial.begin(API_MODE)` if you are in custom mode.

### Software Architecture

1. If a serial port is in Binary mode, all received frames with the correct checksum will always be dispatched to the upper layers

2. According to the value of Frame Type in the Binary mode header, each frame is dispatched to the upper software layer that registers this Frame Type. If no one registers this Frame Type, the frame will be dropped immediately.
    - Every upper software layer that wants to utilize Binary mode protocol needs to register a request handler to process requests from other remote devices.
    - When an upper software layer wants to send out a request frame through the Binary mode stack, it should provide a one-time response handler to process the corresponding response of that request frame.

3. According to the value of Flag in the Binary mode header, the Binary mode stack knows if this frame is a transmit request frame or a response frame.
    - If this frame is a transmit request frame, the request handler of the corresponding upper software layer should be selected to process this frame.
    - If this frame is a response frame, the response handler of the corresponding upper software layer should be selected to process this frame.

4. If a corrupted frame is detected by checksum, it is dropped immediately instead of further processing.

### Binary Mode Limitations

1. The maximum payload size is 64K bytes. Upper software layers need to do fragmentation if sending a long frame is needed.
2. The types of upper-layer protocol are limited to 256.
3. There is no retransmission mechanism unless upper software layers implement acknowledgment and retransmission mechanism by themselves.
4. The received frames may not arrive in order, so upper software layers could implement the sequence number mechanism by themselves if needed.

### Frame Structure

The frame structure of Binary mode protocol is in the following format: 

| Start Delimiter | Length       | Frame Type  | Flag        | Payload      | Checksum    |
| --------------- | ------------ | ----------- | ----------- | ------------ | ----------- |
| 0x7E            | MSB First    |             |             |              |             |
| 1&nbsp;Byte     | 2&nbsp;Bytes | 1&nbsp;Byte | 1&nbsp;Byte | N&nbsp;Bytes | 1&nbsp;Byte |


**Start Delimiter**	

- 0x7E, which represents the start of frame transmission.

**Length**

- 2&nbsp;bytes value, in the unit of byte, which indicates the length of the frame payload.

**Frame Type** 

- A single byte frame type value, which is used to dispatch the payload. It indicates which handler should be used to process the frame payload.
- If the frame type is 0x00 or 0x01, the frame payload will be sent to the built-in handlers:
    - **0x00** : Echo handler echoes the received payload back to the source.
    - **0x01** : AT command handler executes the encapsulated AT commands inside frame payload.
- Other frame types are for upper software layers to register their customized handlers:
    - **0x02-0xFF** : Customized handlers could be registered by RUI API.

**Flag**
- 8-bit flag, which contains frame information such as whether this frame is a transmit request frame or a response frame.
    - Bit 0
    - **0** - Indicates this is a Transmit Request flag
    - **1** - Indicates this is a Response flag
    - Bit 1~7 (Reserved for future use)


**Payload** 
- The format of the payload depends on how upper software layers design their protocol. For example, the RAK sensor hub UART protocol uses TLV format to pack the data.

**Checksum**
- Checksum is the last byte of the frame and helps test data integrity, which simply counts the number of set bits, and then only saves the lowest byte to this field.
- Only the following 3 values are calculated by checksum:
    - Frame Type: 1&nbsp;byte
    - Flag: 1&nbsp;byte
    - Payload: N&nbsp;bytes
- If the Checksum value is not as expected, silently drop this frame.

### Built-in Echo Handler

If an API mode device receives a frame with **frame type 0x00**, the payload data will be dispatched to the built-in echo handler.

The built-in echo handler only changes the Flag field of the received frame from request type to response type and sends it back to the serial interface without any further processing.

## Built-in AT Command Handler

If an API mode device receives a frame with frame type 0x01, the payload data will be dispatched to the AT command handler.

The expected frame payload of the built-in AT command handler is in the following format:


| Length       | Flag        | ATCMD ID    | Payload      |
| ------------ | ----------- | ----------- | ------------ |
| 2&nbsp;Bytes | 1&nbsp;Byte | 1&nbsp;Byte | N&nbsp;Bytes |


**Length**

- 2&nbsp;bytes value, in the unit of byte, which indicates the length of the frame payload.

**Flag**

- 8-bit flag, which contains the important information about this frame:

    - *Bit 0* 
        - 1 - This is a response frame 
        - 0 - This is a request frame

    - *Bit 1*
        - 1 - This is a write operation or execution
        - 0 - This is a read operation

    - *Bit 2*
        - 1 - There is an error. The payload is error code
        - 0 - There is no any error

    - *Bit 3*
        - 1 - There is more frame to send
        - 0 - This is the last frame

    - *Bit 4~7* (Reserved for future use)

### ATCMD ID

It is composed of 1&nbsp;byte ID which represents which AT command should be selected. For CLI version 1.6.0, the following is the ATCMD ID mapping table:

::: tip 📝 NOTE
The ATCMD ID in the table are in decimal format. It must be converted to hexadicemal if applied to the binary command format.
<br>For example, `AT+HWMODEL` will use `0x0D` instead of 13.
:::

| ATCMD ID | AT Command Name | Description                                     |
| -------- | --------------- | ----------------------------------------------- |
| 0        | AT or AT?       | Attention and Short Help                        |
| 1        | ATZ             | MCU Reset                                       |
| 2        | -               | Reserved for Future Use                         |
| 3        | ATR             | Restore default parameters                      |
| 4        | AT+BOOT         | Bootloader mode                                 |
| 5        | AT+BUILDTIME    | Build time of the firmware                      |
| 6        | AT+REPOINFO     | Repo Information                                |
| 7        | AT+VER          | Version of the firmware                         |
| 8        | AT+CLIVER       | Version of the AT command                       |
| 9        | AT+APIVER       | Version of the API                              |
| 10       | AT+LOCK         | Lock the AT command serial port                 |
| 11       | AT+PW0RD        | Set the AT command serial port password         |
| 12       | AT+BAUD         | Set the Serial Port Baud Rate                   |
| 13       | AT+HWMODEL      | The string of the hardware model                |
| 14       | AT+HWID         | The string of the hardware id                   |
| 15       | AT+BAT          | Battery Level                                   |
| 16       | AT+APPEUI       | Application Identifier                          |
| 17       | AT+APPKEY       | Application Key                                 |
| 18       | AT+APPSKEY      | Application Session Key                         |
| 19       | AT+DEVADDR      | Device Address                                  |
| 20       | AT+DEVEUI       | Device EUI                                      |
| 21       | AT+NETID        | Network ID                                      |
| 22       | AT+NWKSKEY      | Network Session Key                             |
| 23       | AT+CFM          | Confirm Mode                                    |
| 24       | AT+CFS          | Confirm Status                                  |
| 25       | AT+JOIN         | Join LoRaWAN Network                            |
| 26       | AT+NJM          | LoRaWAN Network Join Mode                       |
| 27       | AT+NJS          | LoRaWAN Network Join Status                     |
| 28       | AT+RECV         | Last Received Data                              |
| 29       | AT+SEND         | Send Data                                       |
| 30       | AT+RETY         | Confirm Packet Retransmission                   |
| 31       | AT+ADR          | Adaptive Rate                                   |
| 32       | AT+CLASS        | LoRaWAN Class                                   |
| 33       | AT+DCS          | Duty Cycle Settings                             |
| 34       | AT+DR           | Data Rate                                       |
| 35       | AT+JN1DL        | Join Delay on RX Window 1                       |
| 36       | AT+JN2DL        | Join Delay on RX Window 2                       |
| 37       | AT+PNM          | Public Network Mode                             |
| 38       | AT+RX1DL        | Delay of the Received Window 1                  |
| 39       | AT+RX2DL        | Delay of the Received Window 2                  |
| 40       | AT+RX2DR        | Data Rate of the Received Window 2              |
| 41       | AT+RX2FQ        | Frequency of the Received Window 2              |
| 42       | AT+TXP          | Transmit Power                                  |
| 43       | AT+LINKCHECK    | Verify Network Link Status                      |
| 44       | AT+PGSLOT       | Periodicity                                     |
| 45       | AT+BFREQ        | Beacon Frequency                                |
| 46       | AT+BTIME        | Beacon Time                                     |
| 47       | AT+BGW          | Gateway GPS coordinate, NetID and GwID          |
| 48       | AT+LTIME        | Local Time                                      |
| 49       | AT+RSSI         | RSSI on Reception                               |
| 50       | AT+SNR          | Signal Noise Ratio                              |
| 51       | AT+MASK         | Set the channel mask, close or open the channel |
| 52       | AT+CHE          | Eight Channel mode                              |
| 53       | AT+CHS          | Single Channel mode                             |
| 54       | AT+BAND         | Active Region                                   |
| 55       | AT+NWM          | LoRaWAN Network Work Mode                       |
| 56       | AT+PFREQ        | P2P mode Frequency                              |
| 57       | AT+PSF          | P2P mode Spreading Factor                       |
| 58       | AT+PBW          | P2P mode Bandwidth                              |
| 59       | AT+PCR          | P2P mode Code Rate                              |
| 60       | AT+PPL          | P2P mode Preamble Length                        |
| 61       | AT+PTP          | P2P mode TX Power                               |
| 62       | AT+PSEND        | P2P Send Data                                   |
| 63       | AT+PRECV        | P2P Received Data                               |
| 64       | AT+ENCRY        | P2P Encryption Enabled                          |
| 65       | AT+ENCKEY       | P2P Encryption KEY                              |
| 66       | AT+P2P          | View P2P All Parameters                         |
| 67       | AT+PBR          | P2P FSK Modem Bitrate                           |
| 68       | AT+PFDEV        | P2P FSK Modem Frequency Deviation               |
| 69       | AT+ADDMULC      | Add a new multicast group                       |
| 70       | AT+RMVMULC      | Remove multicast group                          |
| 71       | AT+LSTMULC      | Multicast list                                  |
| 72       | AT+ATM          | AT Command mode                                 |
| 73       | AT+APM          | Binary Command mode                             |
| 74       | -               | Reserved for Future Use                         |
| 75       | AT+ARSSI        | Inquire All Channel RSSI                        |
| 76       | -               | Reserved for Future Use                         |
| 77       | -               | Reserved for Future Use                         |
| 78       | -               | Reserved for Future Use                         |
| 79       | -               | Reserved for Future Use                         |
| 80       | -               | Reserved for Future Use                         |
| 81       | -               | Reserved for Future Use                         |
| 82       | -               | Reserved for Future Use                         |
| 83       | AT+LPSEND       | Long Packet Data                                |
| 84       | -               | Reserved for Future Use                         |
| 85       | AT+SLEEP        |                                                 |
| 86       | -               | Reserved for Future Use                         |
| 87       | AT+FSN          | Serial Number                                   |
| 88       | AT+ALIAS        | Alias name of the device                        |

## General Commands

This section describes the generic commands related to the device.

### AT

Description: Attention

The following table explains how to build a frame to execute the `AT` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x00  | AT: Attention                      |
| Checksum        | 9       | 0x02  |                                    |

**Example:**

Send **AT**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x00 0x02
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x00 0x00 0x04
```

### AT?

Description: Short help

This command is not supported by API mode because API mode is designed for M2M communication, so any help message for humans to read is not needed.

### ATZ

Description: MCU Reset

The following table explains how to build a frame to execute the `ATZ` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x00  | AT: MCU Reset                      |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

Send **ATZ**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x01 0x03
(device resets immediately)
```

### ATR

Description: Restore default parameters

The following table explains how to build a frame to execute the `ATR` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x03  | ATR                                |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

Send **ATR**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x03 0x04
(device restored to default immediately)
```

### AT+BOOT

Description: Bootloader mode

The following table explains how to build a frame to execute the `AT+BOOT` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x04  | AT+BOOT                            |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

Send **AT+BOOT**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x04 0x03
(device goes to DFU mode immediately)
```

### AT+BUILDTIME

Description: Build time of the firmware

The following table explains how to build a frame to execute the `AT+BUILDTIME=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x05  | AT+BUILDTIME                       |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

Send **AT+BUILDTIME=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x05 0x03
<< 0x7E 0x00 0x13 0x01 0x01 0x00 0x0F 0x01 0x05 0x32 0x30 0x32 0x31 0x31 0x30 0x32 0x34 0x2D 0x30 0x38 0x33 0x39 0x32 0x36 0x37 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x05 0x00 0x06
```

### AT+REPOINFO

Description: Repo Information

The following table explains how to build a frame to execute the `AT+REPOINFO=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x06  | `AT+REPOINFO`                      |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the repository information of firmware is "622d1ba1,48affa71,0d2fec6b,612cd8e3,63164348,1552b6cd,ed2c6524,42d0fb64,043d0032,0b8b712c,945178e2,94b0f465,3c187a2f,302de187,505c90bf,e5db85df,". 

Send **AT+REPOINFO=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x06 0x03
<< 0x7E 0x00 0x94 0x01 0x01 0x00 0x90 0x01 0x06 0x36 0x32 0x32 0x64 0x31 0x62 0x61 0x31 0x2C 0x34 0x38 0x61 0x66 0x66 0x61 0x37 0x2C 0x30 0x64 0x32 0x66 0x65 0x63 0x36 0x62 0x2C 0x36 0x31 0x32 0x63 0x64 0x38 0x65 0x33 0x2C 0x36 0x33 0x36 0x34 0x33 0x34 0x38 0x2C 0x31 0x35 0x35 0x32 0x62 0x36 0x63 0x64 0x2C 0x65 0x64 0x32 0x63 0x36 0x35 0x32 0x34 0x2C 0x34 0x32 0x64 0x30 0x62 0x36 0x34 0x2C 0x30 0x34 0x33 0x64 0x30 0x30 0x33 0x32 0x2C 0x30 0x62 0x38 0x62 0x37 0x31 0x32 0x63 0x2C 0x39 0x34 0x35 0x31 0x37 0x38 0x65 0x32 0x2C 0x39 0x34 0x62 0x30 0x66 0x34 0x36 0x35 0x2C 0x33 0x63 0x31 0x38 0x37 0x61 0x32 0x66 0x2C 0x33 0x30 0x32 0x64 0x65 0x31 0x38 0x2C 0x35 0x30 0x35 0x63 0x39 0x30 0x62 0x66 0x2C 0x65 0x35 0x64 0x62 0x38 0x35 0x64 0x66 0x2C  0xE8 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x06 0x00 0x06
```


### AT+VER

Description: The version of the firmware

The following table explains how to build a frame to execute the `AT+VER=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x07  | `AT+VER`                           |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the firmware version is "RUIv3(8.0.0+user)"

Send **AT+VER=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x07 0x04
<< 0x7E 0x00 0x15 0x01 0x01 0x00 0x11 0x01 0x07 0x52 0x55 0x49 0x76 0x33 0x28 0x38 0x2E 0x30 0x2E 0x30 0x2B 0x75 0x73 0x65 0x72 0x29  0x45 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x07 0x00 0x07
```

### AT+CLIVER

Description: The version of the AT Command

The following table explains how to build a frame to execute the `AT+CLIVER=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x08  | `AT+VER`                           |
| Checksum        | 9       | 0x02  |                                    |

**Example:**

If the CLI version is "1.0.0"

Send **AT+CLIVER=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x08 0x02
<< 0x7E 0x00 0x09 0x01 0x01 0x00 0x05 0x01 0x08 0x31 0x2E 0x30 0x2E 0x30  0x15 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x08 0x00 0x05
```

### AT+APIVER

Description: The version of the AT Command

The following table explains how to build a frame to execute the `AT+APIVER=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x09  | `AT+VER`                           |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the API version is "1.0.0"

Send **AT+APIVER=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x09 0x03
<< 0x7E 0x00 0x09 0x01 0x01 0x00 0x05 0x01 0x09 0x31 0x2E 0x30 0x2E 0x30  0x16 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x09 0x00 0x06
```

### AT+HWMODEL

Description: The string of the hardware model

The following table explains how to build a frame to execute the `AT+HWMODEL=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x0D  | `AT+HWMODEL`                       |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the hardware model is "rak4631",

Send **AT+HWMODEL=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x0D 0x04
<< 0x7E 0x00 0x0B 0x01 0x01 0x00 0x07 0x01 0x0D 0x72 0x61 0x6B 0x34 0x36 0x33 0x31 0x23 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x0D 0x00 0x07
```

### AT+HWID

Description: The string of the hardware ID

The following table explains how to build a frame to execute the `AT+HWID=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x0E  | `AT+HWID`                          |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the hardware ID is "nrf52840",

Send **AT+HWID=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x0E 0x04
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x0E 0x6E 0x72 0x66 0x35 0x32 0x38 0x34 0x30 0x23 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x0E 0x00 0x07
```

### AT+BAT

Description: Battery level

The following table explains how to build a frame to execute the `AT+BAT=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x0F  | `AT+BAT`                           |
| Checksum        | 9       | 0x05  |                                    |

**Example:**

If the battery level is 4.3V,

Send **AT+BAT=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x0F 0x05
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x0F 0x34 0x2E 0x33 0x30 0x30 0x30 0x30 0x30 0x1D 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x0F 0x00 0x08
```


## Sleep Mode

### AT+SLEEP

The following table explains how to build a frame to execute the `AT+SLEEP` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x55  | `AT+SLEEP`                         |
| `Payload`       | 9       | 0x00  | Example data                       |
|                 | 10      | 0x00  |                                    |
|                 | 11      | 0x00  |                                    |
|                 | 12      | 0x10  |                                    |
| Checksum        | 13      | 0x08  |                                    |

**Example:**

Send **AT+SLEEP**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x55 0x00 0x00 0x00 0x10 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x55 0x00 0x08
```

## Serial Port Command

### AT+LOCK

Description: Lock the AT Command serial port 

This command is not supported by Binary mode because both `AT+LOCK` and `AT+PWORD` are designed for AT Command Mode to prevent the device from human input, so they have no effect when the operating mode is API Mode.

### AT+PWORD

This command is not supported by Binary mode because both `AT+LOCK` and `AT+PWORD` are designed for AT Command Mode to prevent the device from human input, so they have no effect when the operating mode is API Mode.

### AT+ATM

Description: Switching to AT Command mode

The command `AT+ATM` is the generic command used on RUI3 devices to switch back to the default AT command mode. You can input this command directly to the Serial Port without doing binary command format. You can also check the documentation on [switching serial operating modes](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/#switching-serial-operating-mode) used for RUI3 devices.

If switching will be done via Binary Mode format, 

The following table explains how to build a frame to execute the `AT+ATM` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execute                            |
| `ATCMD ID`      | 8       | 0x48  | `AT+ATM`                           |
| Checksum        | 9       | 0x04  |                                    |

### AT+BAUD

Description: Set the serial port baud rate 

The following table explains how to build a frame to execute the `AT+BAUD=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x0C  | `AT+BAUD`                          |
| Checksum        | 9       | 0x03  |                                    |


**Example:**

If the baud rate is 115200, the example is shown as follows:

Send **AT+BAUD=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x0C 0x03
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x0C 0x00 0x01 0xC2 0x00 0x0A 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x0C 0x00 0x06
```

The following table explains how to build a frame to execute the `AT+BAUD=115200` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Write                              |
| `ATCMD ID`      | 8       | 0x0C  | `AT+BAUD`                          |
| `Payload`       | 9       | 0x00  | Example data:                      |
|                 | 10      | 0x01  | 115200 = 0x0001C200                |
|                 | 11      | 0xC2  |                                    |
|                 | 12      | 0x00  |                                    |
| Checksum        | 13      | 0x09  |                                    |


**Example:**

Send **AT+BAUD=115200**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x0C 0x00 0x01 0xC2 0x00 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x0C 0x00 0x06
```

## LoRaWAN Keys, IDs and EUIs Management

This section describes the commands related to the configuration of the end device EUI's and keys.

### AT+APPEUI

Description: Application Identifier

This command is used to access the unique application identifier.

The following table explains how to build a frame to execute the `AT+APPEUI=?` AT command:

| Frame Field     | Offset  | Value | Description                         |
| --------------- | ------- | ----- | ----------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                     |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length          |
|                 | 2 (LSB) | 0x04  | Binary mode payload length          |
| Frame Type      | 3       | 0x01  | AT command                          |
| FLAG            | 4       | 0x00  | Request                             |
| Payload         |         |       |                                     |
| `Length`        | 5       | 0x00  | AT command protocol payload length  |
|                 | 6       | 0x00  | AT command protocol payload length  |
| `Flag`          | 7       | 0x00  | Read                                |
| `ATCMD ID`      | 8       | 0x10  | `AT+APPEUI`: Application Identifier |
| Checksum        | 9       | 0x02  |                                     |


**Example:**

If the application EUI is 0x0102030405060708, the example is shown as follows:

Send **AT+APPEUI=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x10 0x02
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x10 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08  0x12 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x10 0x00 0x05
```

The following table explains how to build a frame to execute the `AT+APPEUI=0102030405060708` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | -       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x0C  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x08  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x0C  | `AT+APPEUI`                        |
| `Payload`       | 9       | 0x01  | Example data:                      |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
|                 | 13      | 0x05  |                                    |
|                 | 14      | 0x06  |                                    |
|                 | 15      | 0x07  |                                    |
|                 | 16      | 0x08  |                                    |
| Checksum        | 17      | 0x11  |                                    |


**Example:**

Send **AT+APPEUI=0102030405060708**
```
>> 0x7E 0x00 0x0C 0x01 0x00 0x00 0x08 0x02 0x10 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x11
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x10 0x00 0x05
```

### AT+APPKEY

Description: Application Key

The following table explains how to build a frame to execute the `AT+APPKEY=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x11  | `AT+APPKEY`: Application Key       |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the application key is 0x01020304050607080102030405060708, 

Send **AT+APPKEY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x11 0x03
<< 0x7E 0x00 0x14 0x01 0x01 0x00 0x10 0x01 0x11 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x20
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x11 0x00 0x06
```

The following table explains how to build a frame to request a remote Binary mode device to execute the `AT+APPKEY=01020304050607080102030405060708` AT Command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | -       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x14  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x10  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x11  | `AT+APPKEY`: Application Key       |
| `Payload`       | 9       | 0x01  | Example data:                      |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
|                 | 13      | 0x05  |                                    |
|                 | 14      | 0x06  |                                    |
|                 | 15      | 0x07  |                                    |
|                 | 16      | 0x08  |                                    |
|                 | 17      | 0x01  |                                    |
|                 | 18      | 0x02  |                                    |
|                 | 19      | 0x03  |                                    |
|                 | 20      | 0x04  |                                    |
|                 | 21      | 0x05  |                                    |
|                 | 22      | 0x06  |                                    |
|                 | 23      | 0x07  |                                    |
|                 | 24      | 0x08  |                                    |
| Checksum        | 25      | 0x1F  |                                    |

**Example:**

Send **AT+APPKEY=01020304050607080102030405060708**
```
>> 0x7E 0x00 0x14 0x01 0x00 0x00 0x10 0x02 0x11 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x1F
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x11 0x00 0x06
```


### AT+APPSKEY

Description: Application Session Key

The following table explains how to build a frame to execute the `AT+APPSKEY=?` AT command:

| Frame Field     | Offset  | Value | Description                           |
| --------------- | ------- | ----- | ------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                       |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length            |
|                 | 2 (LSB) | 0x04  | Binary mode payload length            |
| Frame Type      | 3       | 0x01  | AT command                            |
| FLAG            | 4       | 0x00  | Request                               |
| Payload         |         |       |                                       |
| `Length`        | 5       | 0x00  | AT command protocol payload length    |
|                 | 6       | 0x00  | AT command protocol payload length    |
| `Flag`          | 7       | 0x00  | Read                                  |
| `ATCMD ID`      | 8       | 0x12  | `AT+APPSKEY`: Application Session Key |
| Checksum        | 9       | 0x03  |                                       |

**Example:**

If the network join mode is set the ABP mode first and the application session key is 0x01020304050607080102030405060708.
(AT+NJM: get or set the network join mode (0 = ABP, 1 = OTAA))


Send **AT+APPSKEY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x12 0x03
<< 0x7E 0x00 0x14 0x01 0x01 0x00 0x10 0x01 0x12 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x20
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x12 0x00 0x06
```

The following table explains how to build a frame to request a remote Binary mode device to execute the `AT+APPSKEY=01020304050607080102030405060708` AT Command:

| Frame Field     | Offset  | Value | Description                          |
| --------------- | ------- | ----- | ------------------------------------ |
| START DELIMITER | -       | 0x7E  |                                      |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length           |
|                 | 2 (LSB) | 0x14  | Binary mode payload length           |
| Frame Type      | 3       | 0x01  | AT command                           |
| FLAG            | 4       | 0x00  | Request                              |
| Payload         |         |       |                                      |
| `Length`        | 5       | 0x00  | AT command protocol payload length   |
|                 | 6       | 0x10  | AT command protocol payload length   |
| `Flag`          | 7       | 0x02  | Write                                |
| `ATCMD ID`      | 8       | 0x11  | `AT+APPKEY`: Application Session Key |
| `Payload`       | 9       | 0x01  | Example data:                        |
|                 | 10      | 0x02  |                                      |
|                 | 11      | 0x03  |                                      |
|                 | 12      | 0x04  |                                      |
|                 | 13      | 0x05  |                                      |
|                 | 14      | 0x06  |                                      |
|                 | 15      | 0x07  |                                      |
|                 | 16      | 0x08  |                                      |
|                 | 17      | 0x01  |                                      |
|                 | 18      | 0x02  |                                      |
|                 | 19      | 0x03  |                                      |
|                 | 20      | 0x04  |                                      |
|                 | 21      | 0x05  |                                      |
|                 | 22      | 0x06  |                                      |
|                 | 23      | 0x07  |                                      |
|                 | 24      | 0x08  |                                      |
| Checksum        | 25      | 0x1F  |                                      |

**Example:**

Send **AT+APPSKEY=01020304050607080102030405060708**
```
>> 0x7E 0x00 0x14 0x01 0x00 0x00 0x10 0x02 0x12 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x1F
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x12 0x00 0x06
```


### AT+DEVADDR

Description: Device Address

The following table explains how to build a frame to execute the `AT+DEVADDR=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x13  | `AT+DEVADDR`: Device Address       |
| Checksum        | 9       | 0x04  |                                    |


**Example:**

If the network join mode is set the ABP mode first and the device address is 0x01020304.
(AT+NJM: get or set the network join mode (0 = ABP, 1 = OTAA))

Send **AT+DEVADDR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x13 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x13 0x01 0x02 0x03 0x04 0x0C
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x13 0x00 0x07
```

The following table explains how to build a frame to request a remote Binary mode device to execute the `AT+DEVADDR=01020304` AT Command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | -       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x14  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x13  | `AT+DEVADDR`: Device Address       |
| `Payload`       | 9       | 0x01  | Example data:                      |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
| Checksum        | 13      | 0x0B  |                                    |

**Example:**

Send **AT+DEVADDR=01020304**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x13 0x01 0x02 0x03 0x04 0x0B
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x13 0x00 0x07
```


### AT+DEVEUI

Description: Device AEUI

The following table explains how to build a frame to execute the `AT+DEVEUI=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x14  | `AT+DEVEUI`: Device EUI            |
| Checksum        | 9       | 0x03  |                                    |


**Example:**

If the device EUI is 0x0102030405060708

Send **AT+DEVEUI=?** from the address "0xB" to the address "0xC"
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x14 0x03
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x14 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08  0x13
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x14 0x00 0x06
```

The following table explains how to build a frame to request a remote Binary mode device to execute the `AT+DEVEUI=0102030405060708` AT Command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | -       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x0C  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x08  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x14  | `AT+DEVADDR`: Device EUI           |
| `Payload`       | 9       | 0x01  | Example data:                      |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
|                 | 13      | 0x05  |                                    |
|                 | 14      | 0x06  |                                    |
|                 | 15      | 0x07  |                                    |
|                 | 16      | 0x08  |                                    |
| Checksum        | 17      | 0x12  |                                    |

**Example:**

Send **AT+DEVEUI=0102030405060708**
```
>> 0x7E 0x00 0x0C 0x01 0x00 0x00 0x08 0x02 0x14 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x12
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x14 0x00 0x06
```

### AT+NETID

Description: Network ID

The following table explains how to build a frame to execute the `AT+NETID=?` AT command:

| Frame Field     | Offset  | Value | Description                            |
| --------------- | ------- | ----- | -------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                        |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length             |
|                 | 2 (LSB) | 0x04  | Binary mode payload length             |
| Frame Type      | 3       | 0x01  | AT command                             |
| FLAG            | 4       | 0x00  | Request                                |
| Payload         |         |       |                                        |
| `Length`        | 5       | 0x00  | AT command protocol payload length     |
|                 | 6       | 0x00  | AT command protocol payload length     |
| `Flag`          | 7       | 0x00  | Read                                   |
| `ATCMD ID`      | 8       | 0x15  | `AT+NETID`: Network Identifier (NetID) |
| Checksum        | 9       | 0x04  |                                        |


**Example:**

If the network identifier (NetID) is 0x010203

Send **AT+NETID=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x15 0x04
<< 0x7E 0x00 0x07 0x01 0x01 0x00 0x03 0x01 0x15 0x01 0x02 0x03 0x0C
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x15 0x00 0x07
```

### AT+NWKSKEY

Description: Network Session Key

The following table explains how to build a frame to execute the `AT+NWKSKEY=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x16  | `AT+NWKSKEY`: Network Session Key  |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the network session key is 0x01020304050607080102030405060708


Send **AT+NWKSKEY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x16 0x04
<< 0x7E 0x00 0x14 0x01 0x01 0x00 0x10 0x01 0x16 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x21
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x16 0x00 0x07
```

The following table explains how to build a frame to request a remote Binary mode device to execute the `AT+NWKSKEY=01020304050607080102030405060708` AT Command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | -       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x14  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x10  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x16  | `AT+NWKSKEY`: Network Session Key  |
| `Payload`       | 9       | 0x01  | Example data:                      |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
|                 | 13      | 0x05  |                                    |
|                 | 14      | 0x06  |                                    |
|                 | 15      | 0x07  |                                    |
|                 | 16      | 0x08  |                                    |
|                 | 17      | 0x01  |                                    |
|                 | 18      | 0x02  |                                    |
|                 | 19      | 0x03  |                                    |
|                 | 20      | 0x04  |                                    |
|                 | 21      | 0x05  |                                    |
|                 | 22      | 0x06  |                                    |
|                 | 23      | 0x07  |                                    |
|                 | 24      | 0x08  |                                    |
| Checksum        | 25      | 0x20  |                                    |

**Example:**

Send **AT+NWKSKEY=01020304050607080102030405060708**
```
>> 0x7E 0x00 0x14 0x01 0x00 0x00 0x10 0x02 0x16 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x20
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x16 0x00 0x07
```





## LoRaWAN Joining and Sending

This section describes the commands related to the join procedure and data payload.

### AT+CFM

Description: Confirm Mode 

This command is used to configure the uplink payload to be confirmed or unconfirmed type.

The following table explains how to build a frame to execute the `AT+CFM=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x17  | `AT+CFM`: Confirm Mode             |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the confirm mode is enabled, the example is shown as follows:

Send **AT+CFM=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x17 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x17 0x01 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x17 0x00 0x08
```

The following table explains how to build a frame to execute the `AT+CFM=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x17  | `AT+CFM`: Confirm Mode             |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x08  |                                    |


**Example:**

Send **AT+CFM=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x17 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x17 0x00 0x08
```

### AT+CFS

Description: Confirm Status 

This command is used to access the status of the last **SEND** command.

The following table explains how to build a frame to execute the `AT+CFS=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x18  | `AT+CFS`: Confirm Status           |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the confirm status of the last **AT+SEND** is true, the example is shown as follows:  

Send **AT+CFS=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x18 0x03
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x18 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x18 0x00 0x06
```

### AT+JOIN

Description: Join LoRaWAN Network 

This command is used to join a LoRaWAN network.

The following table explains how to build a frame to execute the `AT+JOIN=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x19  | `AT+JOIN`: Join LoRa Network       |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the auto join parameters are 1,1,8,8, and the example is shown as follows: 

Send **AT+JOIN=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x19 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x19 0x01 0x01 0x08 0x08 0x0B
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x19 0x00 0x07
```

The following table explains how to build a frame to execute the `AT+JOIN=1,1,8,8` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x19  | `AT+JOIN`: Join LoRa Network       |
| `Payload`       | 9       | 0x01  | Example data                       |
|                 | 10      | 0x01  | Example data                       |
|                 | 11      | 0x08  | Example data                       |
|                 | 12      | 0x08  | Example data                       |
| Checksum        | 13      | 0x0A  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+JOIN=1,1,8,8**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x19 0x01 0x01 0x08 0x08 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x19 0x00 0x07
```

### AT+NJM

Description: LoRaWAN Network Join Mode

This command is used to access the network join mode.

The following table explains how to build a frame to execute the `AT+NJM=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x1A  | `AT+NJM`: LoRa Network Join Mode   |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the LoRa network join mode is OTAA, and the example is shown as follows:   
[AT+NJM: get or set the network join mode (0 = ABP, 1 = OTAA)]

Send **AT+NJM=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x1A 0x04
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1A 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1A 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+NJM=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x1A  | `AT+NJM`: LoRa Network Join Mode   |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x07  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+NJM=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x1A 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1A 0x00 0x07
```

### AT+NJS

Description: LoRaWAN Network Join status 

This command is used to access the current activation status of the device. It shows if the device joined or not in a LoRaWAN network.

The following table explains how to build a frame to execute the `AT+NJS=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x1B  | `AT+NJS`: LoRa Network Join Status |
| Checksum        | 9       | 0x05  |                                    |

**Example:**

If the LoRaWAN network join success and the status is true, the example is shown as follows:

Send **AT+NJS=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x1B 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1B 0x01 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1B 0x00 0x08
```

### AT+RECV

Description: Last Received Data 

This command is used to access the last received data in hex format.

The following table explains how to build a frame to execute the `AT+RECV=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x1C  | `AT+RECV`: Last Received Data      |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the LoRaWAN network join success and the status is true and the last received packet is **0x3456** from **fPort 12**, and the example is shown as follows:

Send **AT+RECV=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x1C 0x04
<< 0x7E 0x00 0x07 0x01 0x01 0x00 0x03 0x01 0x1C 0x0C 0x34 0x56 0x11
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1C 0x00 0x07
```

### AT+SEND

Description: Send Data 

This command provides the way to send data on a dedicated port number.

The following table explains how to build a frame to execute the `AT+SEND` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x07  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x03  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x1D  | `AT+SEND`: Send Data               |
| `Payload`       | 9       | 0x0C  | Example data                       |
|                 | 10      | 0x34  | Example data                       |
|                 | 11      | 0x56  | Example data                       |
| Checksum        | 12      | 0x11  |                                    |

**Example:**

If the LoRaWAN network join success and the status is true, and the example is shown as follows:

Send **AT+SEND=12:3456**
```
>> 0x7E 0x00 0x07 0x01 0x00 0x00 0x03 0x02 0x1D 0x0C 0x34 0x56 0x11
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1D 0x00 0x08
```

### AT+LPSEND

Description: Long Packet Data 

This command provides the way to send long packet text data.

The following table explains how to build a frame to execute the `AT+LPSEND` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Execution                          |
| `ATCMD ID`      | 8       | 0x53  | `AT+LPSEND`: Long Packet Data      |
| `Payload`       | 9       | 0x0C  | Example data                       |
|                 | 10      | 0x01  | Example data                       |
|                 | 12      | 0x56  | Example data                       |
| Checksum        | 13      | 0x11  |                                    |

**Example:**

If the LoRaWAN network join success and the status is true, and the example is shown as follows:

Send **AT+LPSEND=12,1,3456**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x53 0x0C 0x01 0x34 0x56 0x11
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x53 0x00 0x08
```

### AT+RETY

Description: Confirm Packet Retransmission

This command sets the number of retransmissions of confirmed packet data.

The following table explains how to build a frame to execute the `AT+RETY=?` AT command:

| Frame Field     | Offset  | Value | Description                              |
| --------------- | ------- | ----- | ---------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                          |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length               |
|                 | 2 (LSB) | 0x04  | Binary mode payload length               |
| Frame Type      | 3       | 0x01  | AT command                               |
| FLAG            | 4       | 0x00  | Request                                  |
| Payload         |         |       |                                          |
| `Length`        | 5       | 0x00  | AT command protocol payload length       |
|                 | 6       | 0x00  | AT command protocol payload length       |
| `Flag`          | 7       | 0x00  | Read                                     |
| `ATCMD ID`      | 8       | 0x1E  | `AT+RETY`: Confirm Packet Retransmission |
| Checksum        | 9       | 0x05  |                                          |

**Example:**

If the retry count is 0, and the example is shown as follows:

Send **AT+RETY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x1E 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1E 0x00 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1E 0x00 0x08
```
The following table explains how to build a frame to execute the `AT+RETY=1` AT command:

| Frame Field     | Offset  | Value | Description                              |
| --------------- | ------- | ----- | ---------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                          |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length               |
|                 | 2 (LSB) | 0x05  | Binary mode payload length               |
| Frame Type      | 3       | 0x01  | AT command                               |
| FLAG            | 4       | 0x00  | Request                                  |
| Payload         |         |       |                                          |
| `Length`        | 5       | 0x00  | AT command protocol payload length       |
|                 | 6       | 0x01  | AT command protocol payload length       |
| `Flag`          | 7       | 0x02  | Write                                    |
| `ATCMD ID`      | 8       | 0x1E  | `AT+RETY`: Confirm Packet Retransmission |
| `Payload`       | 9       | 0x01  | Example data                             |
| Checksum        | 10      | 0x08  |                                          |

**Example:**

The example is shown as follows:   

Send **AT+RETY=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x1E 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1E 0x00 0x08
```

## LoRaWAN Network Management

This section provides a set of commands for network management.

### AT+ADR

Description: Adaptive Rate 

This command is used to access the adaptive data rate.

The following table explains how to build a frame to execute the `AT+ADR=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x1F  | `AT+ADR`: Adaptive Rate            |
| Checksum        | 9       | 0x06  |                                    |


**Example:**

If the ADR is enabled, the example is shown as follows:

Send **AT+ADR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x1F 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1F 0x01 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1F 0x00 0x09
```

The following table explains how to build a frame to execute the `AT+ADR=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x1F  | `AT+ADR`: Adaptive Rate            |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x09  |                                    |


**Example:**

Send **AT+ADR=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x1F 0x01 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x1F 0x00 0x09
```

### AT+CLASS

Description: LoRaWAN Class

This command is used to access the LoRaWAN class.

The following table explains how to build a frame to execute the `AT+CLASS=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x20  | `AT+CLASS`: LoRaWAN Class          |
| Checksum        | 9       | 0x02  |                                    |

**Example:**

If the device is **Class A**, and the example is shown as follows:

Send **AT+CLASS=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x20 0x02
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x20 0x41 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x20 0x00 0x05
```
The following table explains how to build a frame to execute the `AT+RETY=C` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x20  | `AT+CLASS`: LoRaWAN Class          |
| `Payload`       | 9       | 0x43  | Example data                       |
| Checksum        | 10      | 0x07  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+CLASS=C**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x20 0x43 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x20 0x00 0x05
```

### AT+DCS

Description: Duty Cycle Settings 

This command is used to access and configure duty cycle settings.

The following table explains how to build a frame to execute the `AT+DCS=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x21  | `AT+DCS`: Duty Cycle Settings      |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the duty cycle is enabled, and the example is shown as follows:

Send **AT+DCS=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x21 0x03
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x21 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x21 0x00 0x06
```
The following table explains how to build a frame to execute the `AT+DCS=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x21  | `AT+DCS`: Duty Cycle Settings      |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x06  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+DCS=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x21 0x01 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x21 0x00 0x06
```

### AT+DR

Description: Data Rate

This command is used to access and configure data rate settings.

The following table explains how to build a frame to execute the `AT+DR=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x22  | `AT+DR`: Data Rate                 |
| Checksum        | 9       | 0x03  |                                    |

**Example:**

If the data rate is **DR_0**, and the example is shown as follows:

Send **AT+DR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x22 0x03
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x22 0x00 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x22 0x00 0x06
```
The following table explains how to build a frame to execute the `AT+DR=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x22  | `AT+DR`: Data Rate                 |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x06  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+DR=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x22 0x01 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x22 0x00 0x06
```

### AT+JN1DL

Description: Join Delay on RX Window 1

This command is used to access the join delay on RX Window 1. The range of acceptable values is 1 to 14 seconds. Whenever **`AT+JN1DL`** is updated, **`AT+JN2DL`** is also updated automatically.

The following table explains how to build a frame to execute the `AT+JN1DL=?` AT command:

| Frame Field     | Offset  | Value | Description                           |
| --------------- | ------- | ----- | ------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                       |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length            |
|                 | 2 (LSB) | 0x04  | Binary mode payload length            |
| Frame Type      | 3       | 0x01  | AT command                            |
| FLAG            | 4       | 0x00  | Request                               |
| Payload         |         |       |                                       |
| `Length`        | 5       | 0x00  | AT command protocol payload length    |
|                 | 6       | 0x00  | AT command protocol payload length    |
| `Flag`          | 7       | 0x00  | Read                                  |
| `ATCMD ID`      | 8       | 0x23  | `AT+JN1DL`: Join Delay on RX Window 1 |
| Checksum        | 9       | 0x04  |                                       |

**Example:**

If the join accept delay between the end of TX and the join RX Window 1 is 5 seconds, and the example is shown as follows:

Send **AT+JN1DL=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x23 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x23 0x00 0x00 0x00 0x05 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x23 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+JN1DL=5` AT command:

| Frame Field     | Offset  | Value | Description                           |
| --------------- | ------- | ----- | ------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                       |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length            |
|                 | 2 (LSB) | 0x08  | Binary mode payload length            |
| Frame Type      | 3       | 0x01  | AT command                            |
| FLAG            | 4       | 0x00  | Request                               |
| Payload         |         |       |                                       |
| `Length`        | 5       | 0x00  | AT command protocol payload length    |
|                 | 6       | 0x04  | AT command protocol payload length    |
| `Flag`          | 7       | 0x02  | Write                                 |
| `ATCMD ID`      | 8       | 0x23  | `AT+JN1DL`: Join Delay on RX Window 1 |
| `Payload`       | 9       | 0x00  | Example data                          |
|                 | 10      | 0x00  | Example data                          |
|                 | 11      | 0x00  | Example data                          |
|                 | 12      | 0x05  | Example data                          |
| Checksum        | 13      | 0x08  |                                       |

**Example:**

The example is shown as follows:   

Send **AT+JN1DL=5**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x23 0x00 0x00 0x00 0x05 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x23 0x00 0x07
```

### AT+JN2DL

Description: Join Delay on RX Window 2

This command is used to access the join delay on RX Window 2. The range of acceptable values is 2 to 15 seconds. Whenever **`AT+JN2DL`** is updated, **`AT+JN1DL`** is also updated automatically.

The following table explains how to build a frame to execute the `AT+JN2DL=?` AT command:

| Frame Field     | Offset  | Value | Description                           |
| --------------- | ------- | ----- | ------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                       |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length            |
|                 | 2 (LSB) | 0x04  | Binary mode payload length            |
| Frame Type      | 3       | 0x01  | AT command                            |
| FLAG            | 4       | 0x00  | Request                               |
| Payload         |         |       |                                       |
| `Length`        | 5       | 0x00  | AT command protocol payload length    |
|                 | 6       | 0x00  | AT command protocol payload length    |
| `Flag`          | 7       | 0x00  | Read                                  |
| `ATCMD ID`      | 8       | 0x24  | `AT+JN2DL`: Join Delay on RX Window 2 |
| Checksum        | 9       | 0x03  |                                       |

**Example:**

If the join accept delay between the end of TX and the join RX Window 2 is 6 seconds, and the example is shown as follows:

Send **AT+JN2DL=?**
```
>>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x24 0x03
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x24 0x00 0x00 0x00 0x06 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x24 0x00 0x06
```
The following table explains how to build a frame to execute the `AT+JN2DL=6` AT command:

| Frame Field     | Offset  | Value | Description                           |
| --------------- | ------- | ----- | ------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                       |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length            |
|                 | 2 (LSB) | 0x08  | Binary mode payload length            |
| Frame Type      | 3       | 0x01  | AT command                            |
| FLAG            | 4       | 0x00  | Request                               |
| Payload         |         |       |                                       |
| `Length`        | 5       | 0x00  | AT command protocol payload length    |
|                 | 6       | 0x04  | AT command protocol payload length    |
| `Flag`          | 7       | 0x02  | Write                                 |
| `ATCMD ID`      | 8       | 0x24  | `AT+JN2DL`: Join Delay on RX Window 2 |
| `Payload`       | 9       | 0x00  | Example data                          |
|                 | 10      | 0x00  | Example data                          |
|                 | 11      | 0x00  | Example data                          |
|                 | 12      | 0x06  | Example data                          |
| Checksum        | 13      | 0x07  |                                       |

**Example:**

The example is shown as follows:   

Send **AT+JN2DL=6**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x24 0x00 0x00 0x00 0x06 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x24 0x00 0x06
```

### AT+PNM

Description: Public Network Mode

This command is used to access the public network mode.

The following table explains how to build a frame to execute the `AT+PNM=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x25  | `AT+PNM`: Public Network Mode      |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the public network mode is enabled, and the example is shown as follows:

Send **AT+PNM=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x25 0x04
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x25 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x25 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+PNM=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x25  | `AT+PNM`: Public Network Mode      |
| `Payload`       | 9       | 0x01  | Example data                       |
| Checksum        | 10      | 0x07  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+PNM=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x25 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x25 0x00 0x07
```

### AT+RX1DL

Description: Delay of the Received Window 1

This command is used to access the delay of the received Window 1. The range of acceptable values is 1 to 14 seconds. Whenever **`AT+RX1DL`** is updated, **`AT+RX2DL`** is also updated automatically.

The following table explains how to build a frame to execute the `AT+RX1DL=?` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x04  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x00  | AT command protocol payload length         |
| `Flag`          | 7       | 0x00  | Read                                       |
| `ATCMD ID`      | 8       | 0x26  | `AT+RX1DL`: Delay of the Received Window 1 |
| Checksum        | 9       | 0x04  |                                            |

**Example:**

If the delay between the end of TX and the join RX Window 1 is 1 second, and the example is shown as follows:

Send **AT+RX1DL=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x26 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x26 0x00 0x00 0x00 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x26 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+RX1DL=1` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x08  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x04  | AT command protocol payload length         |
| `Flag`          | 7       | 0x02  | Write                                      |
| `ATCMD ID`      | 8       | 0x26  | `AT+RX1DL`: Delay of the Received Window 1 |
| `Payload`       | 9       | 0x00  | Example data                               |
|                 | 10      | 0x00  | Example data                               |
|                 | 11      | 0x00  | Example data                               |
|                 | 12      | 0x01  | Example data                               |
| Checksum        | 13      | 0x07  |                                            |

**Example:**

The example is shown as follows:   

Send **AT+RX1DL=1**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x26 0x00 0x00 0x00 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x26 0x00 0x07
```

### AT+RX2DL

Description: Delay of the Received Window 2

This command is used to access the delay of the received Window 2. The range of acceptable values is 2 to 15 seconds. Whenever **`AT+RX2DL`** is updated, **`AT+RX1DL`** is also updated automatically.

The following table explains how to build a frame to execute the `AT+RX2DL=?` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x04  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x00  | AT command protocol payload length         |
| `Flag`          | 7       | 0x00  | Read                                       |
| `ATCMD ID`      | 8       | 0x27  | `AT+RX2DL`: Delay of the Received Window 2 |
| Checksum        | 9       | 0x05  |                                            |

**Example:**

If the delay between the end of TX and the join RX Window 2 is 2 seconds, and the example is shown as follows:

Send **AT+RX2DL=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x27 0x05
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x27 0x00 0x00 0x00 0x02 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x27 0x00 0x08 
```
The following table explains how to build a frame to execute the `AT+RX2DL=2` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x08  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x04  | AT command protocol payload length         |
| `Flag`          | 7       | 0x02  | Write                                      |
| `ATCMD ID`      | 8       | 0x27  | `AT+RX2DL`: Delay of the Received Window 2 |
| `Payload`       | 9       | 0x00  | Example data                               |
|                 | 10      | 0x00  | Example data                               |
|                 | 11      | 0x00  | Example data                               |
|                 | 12      | 0x02  | Example data                               |
| Checksum        | 13      | 0x08  |                                            |

**Example:**

The example is shown as follows:   

Send **AT+RX2DL=2**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x27 0x00 0x00 0x00 0x02 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x27 0x00 0x08
```

### AT+RX2DR

Description: Data Rate of the Received Window 2

This command is used to access the data rate of received window 2.

The following table explains how to build a frame to execute the `AT+RX2DR=?` AT command:

| Frame Field     | Offset  | Value | Description                                    |
| --------------- | ------- | ----- | ---------------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                                |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                     |
|                 | 2 (LSB) | 0x04  | Binary mode payload length                     |
| Frame Type      | 3       | 0x01  | AT command                                     |
| FLAG            | 4       | 0x00  | Request                                        |
| Payload         |         |       |                                                |
| `Length`        | 5       | 0x00  | AT command protocol payload length             |
|                 | 6       | 0x00  | AT command protocol payload length             |
| `Flag`          | 7       | 0x00  | Read                                           |
| `ATCMD ID`      | 8       | 0x28  | `AT+RX2DR`: Data Rate of the Received Window 2 |
| Checksum        | 9       | 0x03  |                                                |

**Example:**

If the RX2 data rate is **DR_8**, and the example is shown as follows:

Send **AT+RX2DR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x28 0x03
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x28 0x08 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x28 0x00 0x06
```
The following table explains how to build a frame to execute the `AT+RX2DR=8` AT command:

| Frame Field     | Offset  | Value | Description                                    |
| --------------- | ------- | ----- | ---------------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                                |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                     |
|                 | 2 (LSB) | 0x05  | Binary mode payload length                     |
| Frame Type      | 3       | 0x01  | AT command                                     |
| FLAG            | 4       | 0x00  | Request                                        |
| Payload         |         |       |                                                |
| `Length`        | 5       | 0x00  | AT command protocol payload length             |
|                 | 6       | 0x01  | AT command protocol payload length             |
| `Flag`          | 7       | 0x02  | Write                                          |
| `ATCMD ID`      | 8       | 0x28  | `AT+RX2DR`: Data Rate of the Received Window 2 |
| `Payload`       | 9       | 0x08  | Example data                                   |
| Checksum        | 10      | 0x06  |                                                |

**Example:**

The example is shown as follows:   

Send **AT+RX2DR=8**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x28 0x08 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x28 0x00 0x06
```

### AT+RX2FQ

Description: Frequency of the Received Window 2

This command is used to access the frequency of the received window 2.

The following table explains how to build a frame to execute the `AT+RX2FQ=?` AT command:

| Frame Field     | Offset  | Value | Description                                    |
| --------------- | ------- | ----- | ---------------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                                |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                     |
|                 | 2 (LSB) | 0x04  | Binary mode payload length                     |
| Frame Type      | 3       | 0x01  | AT command                                     |
| FLAG            | 4       | 0x00  | Request                                        |
| Payload         |         |       |                                                |
| `Length`        | 5       | 0x00  | AT command protocol payload length             |
|                 | 6       | 0x00  | AT command protocol payload length             |
| `Flag`          | 7       | 0x00  | Read                                           |
| `ATCMD ID`      | 8       | 0x29  | `AT+RX2FQ`: Frequency of the Received Window 2 |
| Checksum        | 9       | 0x04  |                                                |

**Example:**

If the RX2 frequency is **923300000**, and the example is shown as follows:

Send **AT+RX2FQ=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x29 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x29 0x37 0x08 0x70 0xA0 0x12
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x29 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+RX2FQ=923300000` AT command:

| Frame Field     | Offset  | Value | Description                                    |
| --------------- | ------- | ----- | ---------------------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                                |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                     |
|                 | 2 (LSB) | 0x08  | Binary mode payload length                     |
| Frame Type      | 3       | 0x01  | AT command                                     |
| FLAG            | 4       | 0x00  | Request                                        |
| Payload         |         |       |                                                |
| `Length`        | 5       | 0x00  | AT command protocol payload length             |
|                 | 6       | 0x04  | AT command protocol payload length             |
| `Flag`          | 7       | 0x02  | Write                                          |
| `ATCMD ID`      | 8       | 0x29  | `AT+RX2FQ`: Frequency of the Received Window 2 |
| `Payload`       | 9       | 0x37  | Example data                                   |
|                 | 10      | 0x08  | Example data                                   |
|                 | 11      | 0x70  | Example data                                   |
|                 | 12      | 0xA0  | Example data                                   |
| Checksum        | 13      | 0x11  |                                                |

**Example:**

The example is shown as follows:   

Send **AT+RX2FQ=923300000**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x29 0x37 0x08 0x70 0xA0 0x11
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x29 0x00 0x07
```

### AT+TXP

Description: Transmit Power

This command is used to access the transmit power.

The following table explains how to build a frame to execute the `AT+TXP=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x2A  | `AT+TXP`: Transmit Power           |
| Checksum        | 9       | 0x04  |                                    |

**Example:**

If the TX power is 0, and the example is shown as follows:

Send **AT+TXP=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2A 0x04
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2A 0x00 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2A 0x00 0x07
```
The following table explains how to build a frame to execute the `AT+TXP=0` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x2A  | `AT+TXP`: Transmit Power           |
| `Payload`       | 9       | 0x00  | Example data                       |
| Checksum        | 10      | 0x06  |                                    |

**Example:**

The example is shown as follows:   

Send **AT+TXP=0**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x2A 0x00 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2A 0x00 0x07
```

### AT+LINKCHECK

Description: Verify Network Link Status

This command is used to access and configure the device network link status.

The following table explains how to build a frame to execute the `AT+LINKCHECK=?` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x04  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x00  | AT command protocol payload length         |
| `Flag`          | 7       | 0x00  | Read                                       |
| `ATCMD ID`      | 8       | 0x2B  | `AT+LINKCHECK`: Verify Network Link Status |
| Checksum        | 9       | 0x05  |                                            |

**Example:**

If the link check is disabled, and the example is shown as follows:

Send **AT+LINKCHECK=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2B 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2B 0x00 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2B 0x00 0x08
```
The following table explains how to build a frame to execute the `AT+LINKCHECK=1` AT command:

| Frame Field     | Offset  | Value | Description                                |
| --------------- | ------- | ----- | ------------------------------------------ |
| START DELIMITER | 0       | 0x7E  |                                            |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length                 |
|                 | 2 (LSB) | 0x05  | Binary mode payload length                 |
| Frame Type      | 3       | 0x01  | AT command                                 |
| FLAG            | 4       | 0x00  | Request                                    |
| Payload         |         |       |                                            |
| `Length`        | 5       | 0x00  | AT command protocol payload length         |
|                 | 6       | 0x01  | AT command protocol payload length         |
| `Flag`          | 7       | 0x02  | Write                                      |
| `ATCMD ID`      | 8       | 0x2B  | `AT+LINKCHECK`: Verify Network Link Status |
| `Payload`       | 9       | 0x01  | Example data                               |
| Checksum        | 10      | 0x08  |                                            |

**Example:**

The example is shown as follows:   

Send **AT+LINKCHECK=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x2B 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2B 0x00 0x08
```

## Class B Mode

This section provides a set of commands for Class B mode management.

### AT+PGSLOT

Description: Periodicity  

This command is used to get or set the unicast ping slot periodicity.

The following table explains how to build a frame to execute the `AT+PGSLOT=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x2C  | `AT+PGSLOT`: Periodicity           |
| Checksum        | 9       | 0x04  |                                    |


**Example:**

If the periodicity is 0, the example is shown as follows:

Send **AT+PGSLOT=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2C 0x04
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2C 0x00 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2C 0x00 0x07
```

The following table explains how to build a frame to execute the `AT+PGSLOT=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x2C  | `AT+PGSLOT`: Periodicity           |
| `Payload`       | 9       | 0x01  | Example data:                      |
| Checksum        | 10      | 0x07  |                                    |


**Example:**

Send **AT+PGSLOT=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x2C 0x01 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2C 0x00 0x07
```

### AT+BFREQ

Description: Beacon Frequency  

This command is used to get or set beacon frequency.

The following table explains how to build a frame to execute the `AT+BFREQ=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x2D  | `AT+BFREQ`                         |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the beacon frequency is 869525000Hz, and the example is shown as follows:

Send **AT+BFREQ=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2D 0x05
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x2D 0x33 0xD3 0xE6 0x08 0x17
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2D 0x00 0x08
```

#### AT+BTIME

Description: Beacon Time  

This command is used to get or set beacon time.

The following table explains how to build a frame to execute the `AT+BTIME=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x2E  | `AT+BTIME`                         |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the beacon time is  1319453824, and the example is shown as follows:

Send **AT+BTIME=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2E 0x05
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x2E 0x4E 0xA5 0x44 0x80 0x13
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2E 0x00 0x08
```

### AT+BGW

Description: Gateway GPS coordinate, NetID, and GwID 

This command is used to get or set Gateway GPS coordinate, NetID, and GwID.

The following table explains how to build a frame to execute the `AT+BGW=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x2F  | `AT+BGW`                           |
| Checksum        | 9       | 0x06  |                                    |


**Example:**

If the BGW is 0,0,0,0,0, and the example is shown as follows:

Send **AT+BGW=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x2F 0x06
<< 0x7E 0x00 0x0D 0x01 0x01 0x00 0x09 0x01 0x2F 0x30 0x2C 0x30 0x2C 0x30 0x2C 0x30 0x2C 0x30 0x20
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x2F 0x00 0x09
```

### AT+LTIME

Description: Local Time 

This command is used to get or set local time.

The following table explains how to build a frame to execute the `AT+BGW=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x30  | `AT+LTIME`                         |
| Checksum        | 9       | 0x03  |                                    |


**Example:**

If the local time is 03h56m52s on 09/18/2021, and the example is shown as follows:

Send **AT+LTIME=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x30 0x03
<< 0x7E 0x00 0x18 0x01 0x01 0x00 0x14 0x01 0x30 0x31 0x31 0x68 0x32 0x34 0x6D 0x35 0x38 0x73 0x20 0x32 0x38 0x2D 0x31 0x30 0x2D 0x32 0x30 0x32 0x31 0x46
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x30 0x00 0x06
```

## LoRaWAN Information

This section provides a set of commands for battery level, RF signal quality, and FW version.

### AT+RSSI

Description: RSSI on reception 

This command is used to access the RSSI on reception.

The following table explains how to build a frame to execute the `AT+RSSI=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x31  | `AT+RSSI`                          |
| Checksum        | 9       | 0x04  |                                    |


**Example:**

If the RSSI of the last received packet is -77, the example is shown as follows:

Send **AT+RSSI=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x31 0x04
<< 0x7E 0x00 0x06 0x01 0x01 0x00 0x02 0x01 0x31 0xFF 0xB3 0x14
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x31 0x00 0x07
```

### AT+SNR

Description: Signal Noise Ratio 

This command is used to access the Signal Noise Ratio.

The following table explains how to build a frame to execute the `AT+SNR=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x32  | `AT+SNR`                           |
| Checksum        | 9       | 0x04  |                                    |


**Example:**

If the SNR of the last received packet is 7, and the example is shown as follows:

Send **AT+SNR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x32 0x04
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x32 0x07 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x32 0x00 0x07
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x32 0x00 0x07
```

## Supplement Command

This section provides the set of commands related to channels and LoRaWAN regions.

### AT+MASK

Description: Set the channel mask, close or open the channel 

This command configures the channel of the device by setting the hexadecimal channel mask.

The following table explains how to build a frame to execute the `AT+MASK=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x33  | `AT+MASK`                          |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the AT+MASK is 00FF, the example is shown as follows:

Send **AT+MASK=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x33 0x05
<< 0x7E 0x00 0x06 0x01 0x01 0x00 0x02 0x01 0x33 0x00 0xFF 0x10
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x33 0x00 0x08
```

The following table explains how to build a frame to execute the `AT+PGSLOT=1` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x06  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x02  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x33  | `AT+MASK`                          |
| `Payload`       | 9       | 0x00  | Example data:                      |
|                 | 10      | 0x01  |                                    |
| Checksum        | 11      | 0x08  |                                    |


**Example:**

Send **AT+MASK=0001**
```
>> 0x7E 0x00 0x06 0x01 0x00 0x00 0x02 0x02 0x33 0x00 0x01 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x33 0x00 0x08
```


### AT+CHS

Description: Single Channel Mode 

This command configures the channel of the device into single channel mode.

The following table explains how to build a frame to execute the `AT+CHS=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x35  | `AT+CHS`                           |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the single channel mode is turned off, and the example is shown as follows:

Send **AT+CHS=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x35 0x05
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x35 0x00 0x00 0x00 0x00 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x35 0x00 0x08
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+CHS=902700000` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x35  | `AT+CHS`                           |
| `Payload`       |         |       |                                    |
|                 | 9       | 0x35  | Example data:                      |
|                 | 10      | 0xCE  |                                    |
|                 | 11      | 0x1B  |                                    |
|                 | 12      | 0xE0  |                                    |
| Checksum        | 13      | 0x17  |                                    |


**Example:**

The example is shown as follows:

Send "AT+CHS=902700000"
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x35 0x35 0xCE 0x1B 0xE0 0x17
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x35 0x00 0x08
```

### AT+BAND

Description: Active Region 

This command get or set the device active region.

The following table explains how to build a frame to execute the `AT+BAND=?` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x36  | `AT+BAND`                          |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the AT+BAND is US915, and the example is shown as follows:

Send **AT+BAND=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x36 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x36 0x05 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x36 0x00 0x08
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+BAND=5` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x36  | `AT+BAND`                          |
| `Payload`       |         |       |                                    |
|                 | 9       | 0x05  | Example data:                      |
| Checksum        | 10      | 0x09  |                                    |


**Example:**

The example is shown as follows:

Send "AT+BAND=5"
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x36 0x05 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x36 0x00 0x08
```

## P2P Instructions

This section describes the commands related to LoRa point-to-point functionality.

### AT+NWM

Description: LoRa network work mode 

Switch to point-to-point mode, or LoRaWAN mode [0:Point-to-point, 1:LoRaWAN].

The following table explains how to build a frame to request a remote API mode device to execute the `AT+NWM=?` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x37  | `AT+NWM`                           |
| Checksum        | 9       | 0x06  |                                    |


**Example:**

If the network working mode is LoRaWAN, the example is shown as follows:

Send **AT+NWM=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x37 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x37 0x01 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x37 0x00 0x09
```

The following table explains how to build a frame to execute the `AT+NWM=0` AT command:

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x37  | `AT+NWM`                           |
| `Payload`       | 9       | 0x00  | Example data:                      |
| Checksum        | 10      | 0x08  |                                    |


**Example:**

Send **AT+NWM=0**
(device resets and goes to P2P mode immediately)
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x37 0x00 0x08
```

### AT+PFREQ

Description: P2P mode Frequency 

This command is used to get or set P2P frequency. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PFREQ=?` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x38  | `AT+PFREQ`                         |
| Checksum        | 9       | 0x04  |                                    |


**Example:**

If the P2P frequency is 868000000, and the example is shown as follows:

Send **AT+PFREQ=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x38 0x04
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x38 0x33 0xBC 0xA1 0x00 0x13
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x38 0x00 0x07
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PFREQ=868000000` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x38  | `AT+PFREQ`                         |
| `Payload`       | 9       | 0x33  |                                    |
|                 | 10      | 0xBC  |                                    |
|                 | 11      | 0xA1  |                                    |
|                 | 12      | 0x00  |                                    |
| Checksum        | 13      | 0x12  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PFREQ=868000000**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x38 0x33 0xBC 0xA1 0x00 0x12
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x38 0x00 0x07
```

### AT+PSF

Description: P2P mode Spreading Factor 

This command is used to get or set P2P spreading factor. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PSF=?` AT command: 

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x39  | `AT+PSF`                           |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the P2P spreading factor is 7, and the example is shown as follows:

Send **AT+PSF=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x39 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x39 0x07 0x0B
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x39 0x00 0x08
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PSF=7` AT command:  

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x39  | `AT+PSF`                           |
| `Payload`       | 9       | 0x07  |                                    |
| Checksum        | 10      | 0x0A  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PSF=7**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x39 0x07 0x0A
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x39 0x00 0x08
```

### AT+PBW

Description: P2P mode Bandwidth 

This command is used to get or set P2P bandwidth. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PBW=?` AT command:  

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x3A  | `AT+PBW`                           |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the P2P bandwidth is 125KHz, and the example is shown as follows

Send **AT+PBW=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x3A 0x05
<< 0x7E 0x00 0x08 0x01 0x01 0x00 0x04 0x01 0x3A 0x00 0x00 0x00 0x7D 0x0E
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3A 0x00 0x08
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PBW=125` AT command:  

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x3A  | `AT+PBW`                           |
| `Payload`       | 9       | 0x00  |                                    |
|                 | 10      | 0x00  |                                    |
|                 | 11      | 0x00  |                                    |
|                 | 12      | 0x7D  |                                    |
| Checksum        | 13      | 0x0D  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PBW=125**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x3A 0x00 0x00 0x00 0x7D 0x0D
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3A 0x00 0x08
```

### AT+PCR

Description: P2P mode Code Rate 

This command is used to get or set P2P code rate. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PCR=?` AT command:   

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x3B  | `AT+PCR`                           |
| Checksum        | 9       | 0x06  |                                    |


**Example:**

If the coding rate is 4/5, and the example is shown as follows:

Send **AT+PCR=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x3B 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3B 0x00 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3B 0x00 0x09
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PCR=1` AT command:   

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x3B  | `AT+PCR`                           |
| `Payload`       | 9       | 0x01  |                                    |
| Checksum        | 10      | 0x09  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PCR=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x3B 0x01 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3B 0x00 0x09
```

### AT+PPL

Description: P2P mode Preamble Length 

This command is used to get or set P2P preamble length. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PPL=?` AT command:    

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x3C  | `AT+PPL`                           |
| Checksum        | 9       | 0x05  |                                    |


**Example:**

If the P2P preamble length is 8, and the example is shown as follows:

Send **AT+PPL=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x3C 0x05
<< 0x7E 0x00 0x06 0x01 0x01 0x00 0x02 0x01 0x3C 0x00 0x08 0x09
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3C 0x00 0x08
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PPL=8` AT command:   

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x02  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x3C  | `AT+PPL`                           |
| `Payload`       | 9       | 0x00  |                                    |
|                 | 10      | 0x08  |                                    |
| Checksum        | 11      | 0x08  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PPL=8**
```
>> 0x7E 0x00 0x06 0x01 0x00 0x00 0x02 0x02 0x3C 0x00 0x08 0x08
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3C 0x00 0x08
```

### AT+PTP

Description: P2P mode TX Power 

This command is used to get or set P2P TX power. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PTP=?` AT command:    

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x3D  | `AT+PTP`                           |
| Checksum        | 9       | 0x06  |                                    |


**Example:**

If the P2P TX power is 14, and the example is shown as follows:

Send **AT+PTP=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x3D 0x06
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3D 0x0E 0x0C
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3D 0x00 0x09
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PTP=13` AT command:    

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x3D  | `AT+PTP`                           |
| `Payload`       | 9       | 0x0D  |                                    |
| Checksum        | 10      | 0x0B  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+PTP=13**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x3D 0x0D 0x0B
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3D 0x00 0x09
```

### AT+PSEND

Description: P2P Send Data 

This command is used to send P2P data. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PSEND=123456` AT command:     

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x07  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x03  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Read                               |
| `ATCMD ID`      | 8       | 0x3E  | `AT+PSEND`                         |
|                 | 9       | 0x12  |                                    |
|                 | 10      | 0x34  |                                    |
|                 | 11      | 0x56  |                                    |
| Checksum        | 12      | 0x12  |                                    |


**Example:**

The example is shown as follows:

Send **AT+PSEND=123456**
```
>> 0x7E 0x00 0x07 0x01 0x00 0x00 0x03 0x02 0x3E 0x12 0x34 0x56 0x12
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3E 0x00 0x09
```

### AT+PRECV

Description: P2P Received Data 

This command is used to send P2P data. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+PRECV=1000` AT command:    

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x08  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x04  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x3F  | `AT+PRECV`                         |
| `Payload`       | 9       | 0x00  |                                    |
|                 | 10      | 0x00  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0xE8  |                                    |
| Checksum        | 13      | 0x0F  |                                    |


**Example:**

The example is shown as follows 

Send **AT+PRECV=1000**
```
>> 0x7E 0x00 0x08 0x01 0x00 0x00 0x04 0x02 0x3F 0x00 0x00 0x03 0xE8 0x0F
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x3F 0x00 0x0A
```

### AT+ENCRY

Description: P2P Encryption Enabled 

This command is used to get or set P2P encryption. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+ENCRY=?` AT command:     

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x40  | `AT+ENCRY`                         |
| Checksum        | 9       | 0x02  |                                    |


**Example:**

If the P2P encryption is disabled, and the example is shown as follows:

Send **AT+ENCRY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x40 0x02
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x40 0x00 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x40 0x00 0x05
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+ENCRY=1` AT command:     

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x05  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x01  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x40  | `AT+ENCRY`                         |
| `Payload`       | 9       | 0x01  |                                    |
| Checksum        | 10      | 0x05  |                                    |


**Example:**

The example is shown as follows: 

Send **AT+ENCRY=1**
```
>> 0x7E 0x00 0x05 0x01 0x00 0x00 0x01 0x02 0x40 0x01 0x05
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x40 0x00 0x05
```

### AT+ENCKEY

Description: P2P Encryption KEY 

This command is used to get or set P2P encryption key. 

The following table explains how to build a frame to request a remote API mode device to execute the `AT+ENCKEY=?` AT command    

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x04  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x00  | AT command protocol payload length |
| `Flag`          | 7       | 0x00  | Read                               |
| `ATCMD ID`      | 8       | 0x41  | `AT+ENCKEY`                        |
| Checksum        | 9       | 0x03  |                                    |


**Example:**

If the P2P encryption key is 0x0102030405060708, and the example is shown as follows:

Send **AT+ENCKEY=?**
```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x41 0x03
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x41 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x13
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x41 0x00 0x06
```

The following table explains how to build a frame to request a remote API mode device to execute the `AT+ENCKEY=0102030405060708` AT command:     

| Frame Field     | Offset  | Value | Description                        |
| --------------- | ------- | ----- | ---------------------------------- |
| START DELIMITER | 0       | 0x7E  |                                    |
| Length          | 1 (MSB) | 0x00  | Binary mode payload length         |
|                 | 2 (LSB) | 0x0C  | Binary mode payload length         |
| Frame Type      | 3       | 0x01  | AT command                         |
| FLAG            | 4       | 0x00  | Request                            |
| Payload         |         |       |                                    |
| `Length`        | 5       | 0x00  | AT command protocol payload length |
|                 | 6       | 0x08  | AT command protocol payload length |
| `Flag`          | 7       | 0x02  | Write                              |
| `ATCMD ID`      | 8       | 0x41  | `AT+ENCKEY`                        |
| `Payload`       | 9       | 0x01  |                                    |
|                 | 10      | 0x02  |                                    |
|                 | 11      | 0x03  |                                    |
|                 | 12      | 0x04  |                                    |
|                 | 13      | 0x05  |                                    |
|                 | 14      | 0x06  |                                    |
|                 | 15      | 0x07  |                                    |
|                 | 16      | 0x08  |                                    |
| Checksum        | 17      | 0x12  |                                    |



**Example:**

The example is shown as follows: 

Send **AT+ENCKEY=0102030405060708**
```
>> 0x7E 0x00 0x0C 0x01 0x00 0x00 0x08 0x02 0x41 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08 0x12
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x41 0x00 0x06
```
-->