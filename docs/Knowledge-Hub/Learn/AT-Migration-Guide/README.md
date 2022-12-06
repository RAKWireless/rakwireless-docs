---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/rui3.png
rak_desc: This document helps the migration of RAK3172 from non-RUI to RUI3 development.
tags:
  - Tutorial
  - WisDuo
  - RAK3172-SiP
  - RAK3172
  - RUI3
header:
  title: AT Command Migration Guide of RAK3172 to RUI3
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/rui3.jpg
posted: 18/04/2020 8:30 AM
---

# AT Command Migration Guide of RAK3172 to RUI3 (RAKwireless Unified Interface V3)

## Overview

This document helps the migration from RAK3172 to RUI3 (RAKwireless Unified Interface V3) showing the main differences between non-RUI to RUI3 based firmware. Also we show in this document the new RUI3 AT commands. This document applies to RAK3172 and its derived products like the RAK3272S Breakout Board that still has the old firmware.

If you want to know more details about RUI3, check the article [RUI3-Simplified IoT Development for Low Power LoRaWAN devices.](https://news.rakwireless.com/rui3-simplified-iot-development-for-low-power-lorawan-devices/)

## Contents

* [Introduction](/Knowledge-Hub/Learn/AT-Migration-Guide/#introduction)
* [Changes on RAK3172 Baud rate](/Knowledge-Hub/Learn/AT-Migration-Guide/#changes-on-rak3172-baud-rate)
* [RAK DFU baud rate](/Knowledge-Hub/Learn/AT-Migration-Guide/#rak-dfu-baud-rate)
* [AT Command Query, Format and ATE (Echo Command)](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-command-query-format-and-ate-echo-command)
* [LoRaWAN Joining and Sending](/Knowledge-Hub/Learn/AT-Migration-Guide/#lorawan-joining-and-sending)
* [LoRa P2P](/Knowledge-Hub/Learn/AT-Migration-Guide/#lora-p2p)
* [New RUI3 AT commands](/Knowledge-Hub/Learn/AT-Migration-Guide/#new-rui3-at-commands)
* [Removed AT commands](/Knowledge-Hub/Learn/AT-Migration-Guide/#removed-at-commands-in-rui3)

### Introduction

Migrating to RUI3 will be extremely beneficial for users but may cause some confusion if you are using the AT commands based on the old firmware. This document will clarify the differences and additional commands that were implemented in RUI3.

To check the firmware in your RAK3172 device, you can use the `AT+VER=?` command.

If you still have the old firmware, the reply will be in this format:

```
V1.0.4
```

If your device is now running a **RUI3 firmware**, the reply will be in this format:
```
AT+VER=3.2.0-p2_22q1_final.87
```

### Changes on RAK3172 Baud rate

There are few changes related to the RAK3172 baud rate.

- The default baud rate for RUI3 is now 115200 baud. In the old firmware, the speed was 9600 baud. If your module does not respond to AT commands, please check the communication speed on the serial console used.
- There are more supported baud rate on RAK3172 RUI3. It now supports the following baud rate speed 4800, 19200, 38400, 57600, and 115200.
- The device will automatically change its baud rate after `AT+BAUD` command. There is no need to reset or restart the device.

### RAK DFU baud rate

In the RAK DFU program the default speed for RUI3 is 115200 baud.

<rk-img
  src="/assets/images/knowledge-hub/learn/at-migration-guide/rak-dfu-115200.png"
  width="95%"
  caption="RUI3 RAK DFU Baud Rate"
/>

:::warning ⚠️ WARNING
If `AT+BAUD` command is used to change the baud rate other than the default 115200, the new baud rate configured must be the baud rate to be used during firmware update using RAK DFU Tool.
:::

### AT Command Query, Format and ATE (Echo command)

It is important to note that the old RAK3172 FW appends `<CR>` and `<LF>` at the end of each AT reply message. That is not present in the RUI3 firmware. You will notice that there is no extra empty line added before the `OK`.

In addition, if you query a command in the new RAK3172 RUI3 firmware, it will not only reply the value but the name of the command itself with equal sign.


**Old RAK3172 firmware**
```
AT+VER=?
V1.0.4

OK
AT+APPEUI=1122334455667788

OK
AT+APPEUI=?
1122334455667788

OK
```

**New RAK3172 RUI3 firmware**
```
AT+VER=?
AT+VER=3.2.0-p2_22q1_final.87
OK
AT+APPEUI=1122334455667788
OK
AT+APPEUI=?
AT+APPEUI=1122334455667788
OK
```

The `ATE` AT echo command is configured to be off by default on both old RAK3172 FW and the new RAK3172 RUI3 FW. The AT command input will not reflect as reply and can't be seen in the terminal. To show the command inputs, you need to input `ATE`.

The improvement in the new RAK3172 RUI3 FW is that ATE configuration is stored in memory and permanent. In the old firmware, the configuration is not stored in memory and it will go back to the default after reset or power off.

### LoRaWAN Joining and Sending
LoRaWAN join messages for joining and send message for RUI3 has some differences. The example below shows the sequence of messages that occurs after the join event and sending a LoRaWAN message.

A successful LoRaWAN join attempt on old RAK3172 firmware shows the message `SEND CONFIRMED OK` with space as delimiter.
```{8}
AT+JOIN=1:0:10:8

OK
+EVT:JOINED
AT+SEND=2:12345678

OK
+EVT:SEND CONFIRMED OK
```

On new RAK3172 RUI3 a successful LoRaWAN join attempt shows the message `SEND_CONFIRMED_OK` with `_` as delimiter.
```{8}
AT+JOIN=1:0:10:8

OK
+EVT:JOINED
AT+SEND=2:12345678

OK
+EVT:SEND_CONFIRMED_OK
```
The example below shows an unsuccessful LoRaWAN join attempt on old RAK3172 firmware. The event message is
`JOIN FAILED` with space as delimiter.
```{4}
AT+JOIN=1:0:10:8

OK
+EVT:JOIN FAILED
```
On new RAK3172 RUI3 firmware the unsuccessful LoraWAN event message is `JOIN_FAILED_RX_TIMEOUT` with `_` as delimiter.
```{4}
AT+JOIN=1:0:10:8

OK
+EVT:JOIN_FAILED_RX_TIMEOUT
```
### LoRa P2P
On LoRA P2P mode the sequence of events for RX mode has changed. The example below shows the sequence of events that occurs when receiving the LoRa `AABBCCDD` message.
First change LoRa P2P to RX mode, then wait for a new LoRa P2P RX event:
```
AT+PRECV=65535

OK
```

On old RAK3172 firmware there where two `+EVT` events:

```
+EVT:RXP2P, RSSI -60, SNR 11
+EVT:AABBCCDD
```

Using new RAK3172 RUI3 firmware we have only one RXP2P `+EVT` event and the character `:` is the delimiter.

```
+EVT:RXP2P:-60:11:AABBCCDD
```

### New RUI3 AT commands

This is the summary of new AT commands.

- [ATDFU](/Knowledge-Hub/Learn/AT-Migration-Guide/#atdfu-dfu-mode)
- [AT+SLEEP](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-sleep-sleep-mode)
- [AT+NETID](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-netid-network-id)
- [AT+BTIME](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-btime-beacon-time)
- [AT+ENCKEY](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-enckey-p2p-encryption-key)
- [AT+ENCRY](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-encry-enable-p2p-encryption)
- [AT+BUILDTIME](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-buildtime-build-time-of-the-firmware)
- [AT+BGW](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-bgw-netid-gwid-and-gps-coordinates)
- [AT+ATM](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-atm-at-command-mode)
- [AT+APM](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-apm-api-mode)
- [AT+PAM](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-pam-pass-through-mode)
- [AT+REPOINFO](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-repoinfo-repo-information)
- [AT+CLIVER](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-cliver-at-command-version)
- [AT+APIVER](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-apiver-api-version)
- [AT+LOCK](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-lock-lock-the-at-command-serial-port)
- [AT+PWORD](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-pword-set-the-at-command-serial-port-password)
- [AT+HWMODEL](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-hwmodel-hardware-model)
- [AT+BOOTSTATUS](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-bootstatus-query-the-status-of-the-module)
- [AT+SN](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-sn-device-serial-number)
- [AT+DADDR](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-daddr-device-address)
- [AT+CHS](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-chs-single-channel-mode)
- [AT+CHE](/Knowledge-Hub/Learn/AT-Migration-Guide/#at-che-eight-channel-mode)

#### ATDFU: DFU mode
This command causes the device to enter bootloader mode to upgrade firmware.

#### AT+SLEEP: Sleep mode
This command enters sleep mode for a period of time (milliseconds).

#### AT+NETID: Network ID
This command allows the user to access the network identifier (NetID). The identifier has 3 octets ( or 6 hexadecimal digits 0 to F ).

#### AT+BTIME: Beacon Time
This command allows the user to access the current beacon time.

#### AT+ENCKEY: P2P Encryption Key
This command sets the P2P encryption key. The key is 16 digit length representing 8 hexadecimal numbers.

#### AT+ENCRY: Enable P2P Encryption
This command  enables the P2P mode with encryption key.

#### AT+BUILDTIME: Build time of the firmware
This command gets the build time of the firmware.

#### AT+BGW: NetID, GwID and GPS coordinates
This command allows the user to access the  network ID, gateway ID  and  GPS coordinates.<br> The command output format is: `<INFO>`, `<network ID>`, `<gateway ID>`, `<longitude>`, `<latitude>`.

#### AT+ATM: AT command mode
This command switches to AT command mode.

#### AT+APM: API mode
This command  switches to Binary mode.

#### AT+PAM: Pass Through mode
This command switches to pass through mode.

#### AT+REPOINFO: Repo information
This command gets the commit ID of the firmware.

#### AT+CLIVER: AT command version
This command gets the AT command version.

#### AT+APIVER: API version
This command gets the RUI API version.

#### AT+LOCK: Lock the AT command serial port
This command locks the serial port.

#### AT+PWORD: Set the AT command serial port password
This command sets the serial port locking password. The maximum password length is 8.

#### AT+HWMODEL: Hardware Model
This command gets the hardware model  of the module.

#### AT+BOOTSTATUS: Query the status of the module
This command gets the status of module : DFU mode or bootloader mode.

#### AT+SN: Device Serial Number
This command gets the device serial number ( 18 character ).

#### AT+DADDR: Device Address
This command allows the user to access the Device Address. The Device Address has 8 digit length. Each digit is a hexadecimal number 0 to F.

#### AT+CHS: Single Channel Mode
This command sets the node to single-channel mode. This mode is valid for US915, AU915 and CN470 regions.

#### AT+CHE: Eight Channel Mode
This command sets the node to eight-channel mode. This mode is valid for US915, AU915 and CN470 regions.


### Removed AT commands in RUI3

These are AT Commands removed from the old RAK3172 firmware:

- `ATD`
- `+++`
- `AT+USEND`


