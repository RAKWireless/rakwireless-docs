---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/class-b-rui3-guide.jpg
rak_desc: This document is a guide on how to use the Class B mode on the WisDuo module with RUI3 firmware.
tags:
  - User-Manual
  - WisDuo
  - RAK3172-SiP
  - RAK3172
  - RAK4630
  - RAK11720
  - STM32
  - UART
header:
  title: Class B RUI3 Guide
  caption: by <b>Carl Erick Rowan</b>
  img: /assets/images/knowledge-hub/banners/class-b-rui3-guide.jpg
posted: 13/07/2023 8:30 AM
---

# Class B RUI3 Guide

## Overview

LoRaWAN devices operate in three different classes: **A**, **B**, and **C**. **Class A** is the most popular and has the **lowest power consumption**, but its operation on the downlink payload from the LoRaWAN Network Server is not real-time. On Class A, the RX of the device is only available after each uplink. There are two RX windows available, called **RX1** and **RX2**, which are available after each uplink. This is the only time a Class A device can accept downlink packets.

On applications where **immediate response to downlinks** is necessary, the appropriate mode is **Class C**. In this class, the RX is always open and will receive the downlink packets from the LoRaWAN Network Server instantly. The drawback is that this results in **higher current consumption**, which is not ideal for battery-powered IoT devices. This mode is appropriate for applications such as street lighting and automation projects that require remote device control.

**Class B** sits in the middle of Class A and Class C. It uses periodic intervals called **beacons**, which open up the RX window of the device **without needing to transmit any uplinks** (unlike Class A, which requires uplinks to make the RX1 and RX2 windows available). In each beacon interval, Class B devices can respond to downlinks. Unlike Class C, it is not always open, but the periodic interval is a good compromise for balancing power consumption and the ability to respond to downlinks.

## How To Enable and Use Class B Mode

To operate in Class B, the end-device firmware must support this mode. In addition, both the LoRaWAN Gateway and the LoRaWAN Network Server must support Class B operation.

- [LoRaWAN GW and LNS configuration for Class B](/Knowledge-Hub/Learn/Class-B-RUI3-Guide/#setting-up-lorawan-gateway-for-class-b)
- [RUI3 based module configuration for Class B](/Knowledge-Hub/Learn/Class-B-RUI3-Guide/#setting-up-lorawan-end-device-for-class-b)

### Setting up LoRaWAN Gateway and LNS for Class B

Class B mode is not as popular as Class A and C modes. One of the reasons is that it requires Class B support on gateways as well as the LoRaWAN Network Server.

In this guide, we will use WisGate Edge LoraWAN Gateways, which are powered by WisGateOS and WisGateOS2 (both software support class B). Timing is very critical in Class B, which is why GPS time is needed to synchronize its operation. Class B can be enabled in the application section of WisGateOS and WisGateOS2 built-in LoRaWAN Network Server.

<rk-img
  src="/assets/images/knowledge-hub/learn/class-b-rui3-guide/wisgate_os.png"
  width="100%"
  caption="WisGate OS Class B Configuration"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/class-b-rui3-guide/wisgate_os2.png"
  width="100%"
  caption="WisGate OS 2 Class B Configuration"
/>

:::tip 📝 NOTE
Class B in Multicast operation is supported only by WisGate OS.
:::

### Setting up LoRaWAN End-Device for Class B

Devices that are compatible with this guide are modules that are based on RUI3 firmware, like RAK3172, RAK4630, and RAK11720.

:::tip 📝 NOTE
Not all RAK modules are compatible with Class B.
:::

The configuration of a Class B device can be divided into three stages: searching, attempting to lock, and determining whether it is locked or failed.

The first thing to do is configure the parameters of the module to operate as a standard LoRaWAN end device (correct EUI/KEYS, BAND, MASK, and other settings). The class must then be configured as Class B before joining the network.

```c
AT+CLASS=B
OK
AT+JOIN
OK
+EVT:JOINED
```

At this point, the device will need to obtain the time from the LNS via `DeviceTimeReq`. You can check the status of your Class B device using `AT+CLASS=?`. The return on this stage will be `AT+CLASS=B:S0`. The `AT+CLASS=?` command will be used repeatedly in the following steps to check the status of your Class B configuration.

```c
AT+CLASS=?
AT+CLASS=B:S0
OK
```

The next step needed is to send an uplink using the `AT+SEND=x:yyyy` command. Either confirmed or unconfirmed is acceptable. The required `DeviceTimeReq` will be provided on the downlink that will be received on this uplink's RX1 or RX2 windows. If the uplink is successful and the downlink was correctly received by the end device, the status of your device should now be *Beacon Searching*. You can confirm this by using the `AT+CLASS=?` command again, and the return will be `AT+CLASS=B:S1`.

```c
AT+SEND=1:12345678
OK
+EVT:SEND_CONFIRMED_OK
AT+CLASS=?
AT+CLASS=B:S1
OK
```

Within 128 seconds, the device will proceed to the next stage which will indicate if the device was successfully synced with the beacon. If everything is configured correctly on the end device, LoRaWAN gateway, and network server, there should be `+BC:LOCKED` on the terminal. This can be confirmed as well via `AT+CLASS=?` and it will return `AT+CLASS=B:S2`.

```c
+BC:LOCKED
AT+CLASS=?
AT+CLASS=B:S2
OK
```

:::tip 📝 NOTE
If the device fails on Class B configuration, it will be indicated by `+BC:FAILED`. It can also be confirmed via `AT+CLASS=?` and should return `AT+CLASS=B:S3`.

```c
+BC:FAILED
AT+CLASS=?
AT+CLASS=B:S3
OK
```
When a Class B configuration attempt fails, it will be reinitiated by sending another uplink.

:::

After all of the setup and successful Class B mode configuration, it should display '+BC:DONE,' indicating that the device is now operating in Class B mode. Also, a `+PS:DONE` is shown to indicate the ping slot configured by the `AT+PGSLOT` command.

```c
+PS:DONE
+BC:DONE
```

### Class B Status During Configuration

Here is the summary of the return status when the `AT+CLASS` command is used during Class B configuration:

| Class B Status | Description      |
| -------------- | ---------------- |
| `B:S0`         | DeviceTimeReq    |
| `B:S1`         | Beacon Searching |
| `B:S2`         | Beacon Locked    |
| `B:S3`         | Beacon Failed    |