# RAK Unified Interface V3 (RUI3) Serial Operating Modes

RAKwireless offers **RAKwireless Unified Interface V3 (RUI3)** which allows you to develop firmware for you RAKwireless devices and modules quickly and easily. RUI3 has APIs that you can use to create your own custom firmware on the module itself. You also have the option to use an external host microcontroller or microprocessor which sends commands via AT or Binary Commands to RUI3 compatible module. The commands are sent via serial interface (abstracted as Serial Port) thru UART, USB, BLE and NFC. 

This guide gives information and details about the three Serial Operating Modes of RUI3:

- [AT Mode](/RUI3/Serial-Operating-Modes/AT-Command-Manual/)
- [Binary Mode](/RUI3/Serial-Operating-Modes/Binary-Command-Manual/)
- [Custom Mode](/RUI3/Serial-Operating-Modes/Custom-Mode/)

## RUI3 Serial Operating Modes 

### AT Mode

It is designed for humans to configure devices interactively. It can also be used for M2M communication, but the transmission of big-sized human-readable text data is very inefficient. This is the easiest to understand on the three RUI3 serial modes because many other communication modems offers AT Command interfaces. In AT command mode, the RUI3 enabled device needs to wait for an external command coming from a host microcontroller or microprocessor.

For example, `AT+APPEUI=?` AT command will show the Device EUI. 

```
AT+APPEUI=?
0102030405060708
OK
```

### Binary Mode

It is designed for efficient and reliable M2M communication. It is like the standard AT command mode but it is more efficient because it uses byte arrays based on the proprietary RUI3 protocol. It has added data integrity feature by the implemented checksum in each command in the protocol. It can be used for both configuring devices and transmitting data just like the standard AT command.

For example, `AT+APPEUI=?` binary command will show the Device EUI but in Binary Mode. The `AT+APPEUI=?` command is represented by the first line byte array and the returned APPEUI value `0102030405060708` can be seen as payload in the reply in the second line with value `0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08`.

```
>> 0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x00 0x10 0x02
<< 0x7E 0x00 0x0C 0x01 0x01 0x00 0x08 0x01 0x10 0x01 0x02 0x03 0x04 0x05 0x06 0x07 0x08  0x12 
<< 0x7E 0x00 0x05 0x01 0x01 0x00 0x01 0x01 0x10 0x00 0x05
```

::: tip 📝 NOTE
You can to check the Binary Command Mode documentation for more details about the protocol.
:::

### Custom Mode

The AT and Binary Modes have their corresponding parsers to analyze every byte received from the serial port (in every command sent, there will be expected reply). In custom mode, you can disable AT and Binary Modes and create your own set of command and write dedicated parsers for each custom commands you designed. This gives you flexibility in creating your own command. This mode requires you to use RUI3 APIs.

## RAK Modules Default Serial Operating Mode

The default mode of every serial port can be switched to a new mode. After switching to a new mode, the new mode setting will be kept even if the device resets. Default serial port has AT command mode. The default serial port is also where firmware update is done.

**RAK4630**

| **RAK Device**    | **Serial Port**           | **Serial Instance Assignment** | **Default Mode**  |
| ----------------- | ------------------------- | ------------------------------ | ----------------- |
| RAK4630           | USB (Default serial port) | Serial                         | AT Command        |
|                   | UART1 (pin 19, 20)        | Serial0                        | AT Command        |  
|                   | UART2 (pin 15, 16)        | Serial1                        | Custom Mode       |   
|                   | BLE                       |                                | AT Command        |
| RAK4631+RAK5005-O | USB (Default serial port) | Serial                         | AT Command        |
|                   | TX0/RX0 (Base board)      | Serial0                        | AT Command        |  
|                   | TX1/RX1 (Base board)      | Serial1                        | Custom Mode       |   
|                   | BLE                       |                                | AT Command        |

**RAK3172**

| **RAK Device**    | **Serial Port**                                  | **Serial Instance Assignment** | **Default Mode**  |
| ----------------- | ------------------------------------------------ | ------------------------------ | ----------------- |
| RAK3172           | UART2 (pin 1, 2) (Default serial port)           | Serial, Serial2                | AT Command        |
|                   | UART1 (pin 4, 5)                                 | Serial1                        | Custom Mode       | 
| RAK3272S          | UART2 (J4 header pin 7, 8) (Default serial port) | Serial, Serial2                | AT Command        |
|                   | UART1 (J5 header pin 5, 6)                       | Serial1                        | Custom Mode       |
| RAK3372           | USB (Default serial port)                        | Serial, Serial2                | AT Command        |
|                   | TX1/RX1 (Base board)                             | Serial1                        | Custom Mode       | 

**RAK3172-SiP**

| **RAK Device**    | **Serial Port**                                  | **Serial Instance Assignment** | **Default Mode**  |
| ----------------- | ------------------------------------------------ | ------------------------------ | ----------------- |
| RAK3172-SiP       | UART2 (pin 29, 30) (Default serial port)         | Serial, Serial2                | AT Command        |
|                   | UART1 (pin 17, 18)                               | Serial1                        | Custom Mode       | 
| RAK3272-SiP       | UART2 (J3 header pin 7, 8) (Default serial port) | Serial, Serial2                | AT Command        |
|                   | UART1 (J4 header pin 5, 6)                       | Serial1                        | Custom Mode       |

## Switching Serial Operating Mode

After switching to a new mode, the new mode setting will be kept even if the device resets.

<rk-img
  src="/assets/images/rui3/mode_switch.png"
  width="85%"
  caption="RUI3 Serial Operating Modes"
/>

**AT Command to Binary Mode**

`AT+APM` command on a Serial Port will switch its serial operating mode to Binary Command mode.

**AT Command to Custom Mode**

You need to use the RUI API `Serial.begin` to switch the serial operating mode to custom mode. There is no direct AT command to switch to custom mode. You have to upload a firmware that uses the RUI API to the device. For example, in switching the Serial1 to custom mode, you will need `Serial1.begin(115200,RAK_CUSTOM_MODE)`.

**Binary Mode to AT Command**

`AT+ATM` command on a Serial Port will switch its serial operating mode to AT Command mode. In Binary Command mode, you can also send byte array `0x7E 0x00 0x04 0x01 0x00 0x00 0x00 0x02 0x48 x04` to switch to AT Command mode.

**Binary Mode to Custom Mode**

You need to use the RUI API `Serial.begin` to switch the serial operating mode to custom mode. There is no direct Binary command to switch to custom mode. You have to upload a firmware that uses the RUI API to the device. For example, in switching Serial1 to custom mode, you will need `Serial1.begin(115200,RAK_CUSTOM_MODE)`.

**Custom Mode to AT Command**

`AT+ATM` command on a Serial Port will switch its serial operating mode to AT Command mode.

**Custom Mode to Binary Mode**

You need to use the RUI API `Serial.begin` to switch the serial operating mode to Binary mode. For example, in switching Serial1 to Binary mode, you will need `Serial1.begin(115200,API_MODE)`.

## Serial Operating Mode Design Summary

|              | **AT Command Mode**          | **Binary Command Mode**                                      | **Custom Mode**                   |
| ------------ | ---------------------------- | ------------------------------------------------------------ | --------------------------------- |
| Target User  | Human/Machine                | Machine to machine                                           | Human/Machine                     |
| Purpose      | Configure devices            | Efficient & Extendable M2M communication                     | Customize serial port parser      |
| Benefit      | Friendly interface for human | Efficient in M2M case and can send data or configure devices | Extendable                        |
| Drawback     | Inefficient in M2M case      | Complicated                                                  | Need to write parser from scratch |
| Prerequisite | No                           | No                                                           | Need to setup IDE to write code   |

