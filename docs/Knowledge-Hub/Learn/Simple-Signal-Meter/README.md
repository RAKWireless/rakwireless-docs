---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: PoC of a very basic signal tester. It works in both LoRa P2P and LoRaWAN mode.
tags:
  - Tutorial
  - Signal Meter
  - Field Tester
  - WisBlock
  - RUI3
  - LoRa P2P
  - RAK3372
  - RAK19003
  - RAK1921
  - Arduino
header:
  title: Simple RUI3 based Signal Meter
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 09/07/2024 1:00 PM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 2014.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Simple RUI3-Based Signal Meter

## Content
- <a href="#overview" target="_blank">Overview</a>
- <a href="#hardware" target="_blank">Hardware</a>
- <a href="#enclosure" target="_blank">Enclosure</a>
- <a href="#setup" target="_blank">Setup</a>
  - <a href="#lora-p2p" target="_blank">LoRa P2P</a>
  - <a href="#lorawan-confirmed-packets" target="_blank">LoRaWAN confirmed packets</a>
  - <a href="#lorawan-linkcheck" target="_blank">LoRaWAN LinkCheck</a>
- <a href="#firmware" target="_blank">Firmware</a>

:::warning ⚠️ IMPORTANT       
This firmware requires at least RUI3 V4.1.1 or newer.
:::

----

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/device.png"
  width="50%"
  caption="Simple RUI3-Based Signal Meter Device"
/>

## Overview

The device is a PoC of a very basic signal tester that works in both LoRa P2P and LoRaWAN modes. It uses a simple OLED display and has no GUI. All settings are done over USB with RUI3 AT commands.

This signal meter is a very simple and affordable (~$30 USD) device, designed to help check LoRa and LoRaWAN coverage. While it does not claim to be a highly precise instrument, it serves as an inexpensive tool for assessing signal coverage.

:::tip 📝 NOTE        
One of the advantages of this simple tester is that it does not require any backend installations on the LoRaWAN server. It is tested with Helium, TTN, and Chirpstack, but it should work with any LoRaWAN server like AWS or Actility.
:::

### LoRa P2P Mode

When used in LoRa P2P, it simply listens on the configured LoRa P2P settings:
- Frequency
- Bandwidth
- Spreading Factor
- Coding Rate
- Preamble Length  

If a packet is received with the settings above, it displays the information on the OLED screen.

### LoRaWAN Mode

When used in LoRaWAN mode, the device connects to a LoRaWAN server and frequently sends out a data packet. 
It requires setup of the devices with its LoRaWAN credentials and register on a LoRaWAN server with:
- DevEUI
- AppEUI
- AppKey
- OTAA join mode
- LoRaWAN region

The device uses either confirmed packet mode or LinkCheck to collect information about the connection to the gateway(s). 
- If used with confirmed packets, it displays the RSSI and SNR of the ACK packet received from the LoRaWAN server.    
- If used with LinkCheck, the LoRaWAN server reports the number of gateways and the demodulation margin (calculated on the LoRaWAN server). The demodulation margin can give you information about the received signal quality.   

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lorawan-linkcheck.png"
  width="70%"
  caption="LinkCheck extracted from the LoRaWAN 1.0.3 Specification"
/>



## Hardware

The device is built with WisBlock modules with only a little soldering required:
- <a href="https://store.rakwireless.com/products/wisblock-base-board-rak19003" target="_blank">WisBlock Base Board RAK19003 (Mini Base Board)</a>
- <a href="https://store.rakwireless.com/products/wisblock-core-module-rak3372" target="_blank">WisBlock Core Module RAK3372 (STM32WLE5)</a>
- <a href="https://store.rakwireless.com/products/rak1921-oled-display-panel" target="_blank">WisBlock RAK1921 OLED display</a>

The WisBlock module itself does not require any soldering, only the connection for the RAK1921 OLED display to the WisBlock Base Board requires some pin headers soldering to be able to plug the display in.    

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/wisblock.png"
  width="50%"
  caption="Hardware setup"
/>

To extend the device's life, use a simple slider switch to disconnect the battery. This prevents battery discharge while the device is not in use. However, to charge the battery, the device must be turned on.

[Back to top](#content)

----

## Enclosure

The enclosure is 3D printed and designed to be as simple as possible. It consists of three parts, including a lid for the USB access if needed. The bottom and the lid are sliding against each other and are secured with two screws.

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/enclosure-topview.png"
  width="50%"
  caption="Enclosure Top View"
/>

As the OLED display is only supported by the pin headers, the enclosure includes three simple pillars for added support.    

The slider switch requires no screwing or glueing and is clipped into the bottom part of the enclosure, as shown in **Figure 5**.

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/enclosure-switch.png"
  width="50%"
  caption="Enclosure Switch"
/>

If required, the USB access can be closed with a simple rotating lid.

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/enclosure-usb.png"
  width="50%"
  caption="Enclosure USB Lid"
/>

Two M3 screws secure the bottom and lid of the enclosure. To prevent the self-cut threads from wearing out, the bottom part of the enclosure has two small details that hold the M3 nuts. The M3 nuts are simply glued into these details.

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/enclosure-m3-nuts.png"
  width="50%"
  caption="Enclosure M3 Nuts"
/>

Below the OLED display is space for a 500&nbsp;mAh battery to run the device outdoors.

:::tip 📝  TIP        
The step files for the enclosure are available in the Github repository with the source code in the folder <a href="https://github.com/beegee-tokyo/RUI3-Signal-Meter-P2P-LPWAN/tree/main/enclosure" target="_blank">enclosure</a>.
:::

[Back to top](#content)


## Setup

### LoRa P2P

Set the device in LoRa P2P mode with the following command:

```
AT+NWM=0
```

If the device was not already in P2P mode, it may reboot after receiving the command. Then the LoRa P2P parameters must be configured, which in this case are as follows:
- Frequency: 916100000&nbsp;Hz
- Bandwidth: 125&nbsp;kHz
- Spreading factor: 7
- Coding rate: 4/5
- Preamble length: 8
- TX power: 5&nbsp;dBm:

```
AT+PRECV=0
AT+P2P=916000000:7:0:1:8:5
```

:::tip 📝 TIP 
If the credentials were set already (they are saved in the flash of the device), the switch to P2P testing can as well be done with the following command:

```
ATC+MODE=2
```
:::

If the device was not already in LoRa P2P mode, it may reboot after receiving the command.


:::tip 📝 INFO        
The command _**`AT+PRECV=0`**_ is _**required**_ to stop the device from listening. While in RX mode, parameters cannot be changed.
:::

To be able to receive packets from other devices, they have to be setup to exactly the same parameters.

If the setup of all devices is the same, the display will show the received LoRa P2P packets:

- P2P received packet number
- Frequency, spreading factor and bandwidth
- RSSI
- SNR

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lora-p2p-rx.png"
  width="50%"
  caption="LoRa P2P"
/>

[Back to top](#content)

----

### LoRaWAN Confirmed Packets

Set the device in LoRaWAN mode with the following command:

```
AT+NWM=1
```

If the device was not already in LoRaWAN mode, it may reboot after receiving the command. Then the LoRaWAN parameters and credentials have to be setup. 

For this sample guide, the device is set to **AS923-3**, **OTAA join mode**, **confirmed packet mode**, **disable link check**, and then **reset the device** to perform a LoRaWAN JOIN sequence:

```
AT+BAND=10
AT+NJM=1
AT+CFM=1
AT+LINKCHECK=0
AT+DEVEUI=AC1F09FFFE000000
AT+APPEUI=AC1F09FFFE000000
AT+APPKEY=AC1F09FFFE000000AC1F09FFFE000000
ATZ
```

:::tip 📝 TIP 
If the credentials have already been set (they are saved in the device's flash), the switch to CFM testing can be done with the following command:

```
ATC+MODE=1
```
:::

If the device was not already in LoRaWAN mode, it may reboot after receiving the command.

:::warning ⚠️ IMPORTANT ⚠️        
The device must be registered on a LoRaWAN server using the provided credentials, and a gateway in range must be connected to the server. Otherwise, the device cannot join the network, and testing will not be possible. If the device fails to join the network, it will show an error on the display:

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-join-failed.png"
  width="50%"
  caption="LoRaWAN Join Failed"
/>

In this case, double-check all settings on the device and LoRaWAN server and check if a gateway is in range and connected to the LoRaWAN server.
:::

After the device joins the network, it will send confirmed packets to the LoRaWAN server. The server will then send a downlink packet with the ACK. The display will show the following:
- Packet number
- DR of the received packet
- RSSI of the received packet
- SNR of the received packet

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-ok-packet.png"
  width="50%"
  caption="LoRaWAN ACK"
/>

If the device is out of the range of gateways (after it had joined before), it will show an error message if the LoRaWAN server did not send an ACK for the packet:

- Packet number
- Error message
- Error detail
- Number of lost packets

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-nok-packet.png"
  width="50%"
  caption="LoRaWAN NACK"
/>

[Back to top](#content)

----

### LoRaWAN LinkCheck

Set the device in LoRaWAN mode with the following command:

```
AT+NWM=1
```

If the device was not already in LoRaWAN mode, it may reboot after receiving the command. Then the LoRaWAN parameters and credentials have to be setup. 

For this sample guide, the device is set to **AS923-3**, **OTAA join mode**, **unconfirmed packet mode**, **enable link check**, and then **reset the device** to perform a LoRaWAN JOIN sequence:


```
AT+BAND=10
AT+NJM=1
AT+CFM=0
AT+LINKCHECK=2
AT+DEVEUI=AC1F09FFFE000000
AT+APPEUI=AC1F09FFFE000000
AT+APPKEY=AC1F09FFFE000000AC1F09FFFE000000
ATZ
```

:::tip 📝 TIP 
If the credentials were set already (they are saved in the flash of the device), the switch to LinkCheck testing can as well be done with the code:


```
ATC+MODE=0
```
:::

If the device was not already in LoRaWAN mode, it may reboot after receiving the command.   

:::warning ⚠️ IMPORTANT        
The device has to be registered in a LoRaWAN server with the provided credentials, and a gateway in range must be be connected to the LoRaWAN server. Otherwise, the device cannot join and there are no tests possible. If the device cannot join the network, it will show an error on the display:

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-join-failed.png"
  width="50%"
  caption="LoRaWAN Join Failed"
/>

In this case, double-check all settings on the device and LoRaWAN server and check if a gateway is in range and connected to the LoRaWAN server.

:::

After the device joins the network, it will send confirmed packets to the LoRaWAN server. The server will then send a downlink packet with the ACK. The display will show the following:
- Linkcheck result
- Packet number and number of gateways
- DR of the received packet
- RSSI and SNR of the received packet
- Demodulation Margin from the LoRaWAN server


<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-linkcheck-ok.png"
  width="50%"
  caption="LoRaWAN LinkCheck received"
/>

If the device is out of the range of gateways (after it had joined before), it will show an error message if the LoRaWAN server did not respond to the LinkCheck request:
- Linkcheck result
- Number of lost packets

<rk-img
  src="/assets/images/knowledge-hub/learn/simple-signal-meter/lpw-linkcheck-nok.png"
  width="50%"
  caption="LoRaWAN no LinkCheck received"
/>

[Back to top](#content)


## Firmware

The firmware for this simple field tester is available as open source in the GitHub repo <a href="https://github.com/RAKWireless/RUI3-Best-Practice/tree/main/RUI3-Signal-Meter-P2P-LPWAN" target="_blank">RUI3-Signal-Meter-P2P-LPWAN</a>.

Callbacks are defined for all possible events, both LoRa P2P and LoRaWAN, and trigger the display to change its content.

The **`setup()`** function is checking in which mode the device is setup and initializes the required event callbacks.

The application is complete timer-triggered system, and the **`loop()`** function is not used.

### LoRa P2P Callbacks

```cpp
/**
 * @brief Receive callback for LoRa P2P mode
 *
 * @param data structure with RX packet information
 */
void recv_cb_p2p(rui_lora_p2p_recv_t data)
{}
```

### LoRaWAN Callback

```cpp
/**
 * @brief Join network callback
 * 
 * @param status status of join request
 */
void join_cb_lpw(int32_t status)
{}

/**
 * @brief Receive callback for LoRaWAN mode
 *
 * @param data structure with RX packet information
 */
void recv_cb_lpw(SERVICE_LORA_RECEIVE_T *data)
{}

/**
 * @brief Send finished callback for LoRaWAN mode
 *
 * @param status
 */
void send_cb_lpw(int32_t status)
{}

/**
 * @brief Linkcheck callback
 * 
 * @param data structure with the result of the Linkcheck
 */
void linkcheck_cb_lpw(SERVICE_LORA_LINKCHECK_T *data)
{}
```

### LoRaWAN Send

This function sends a short LoRaWAN packet in confirmed or unconfirmed mode, depending whether LinkCheck is enabled or not.

```cpp
/**
 * @brief Send a LoRaWAN packet
 *
 * @param data unused
 */
void send_packet(void *data)
{
	Serial.println("Send packet");
	uint8_t payload[4] = {0x01, 0x02, 0x03, 0x04};
	if (use_link_check)
	{
		// Linkcheck is enabled, send an unconfirmed packet
		api.lorawan.send(4, payload, 2, false);
	}
	else
	{
		// Linkcheck is disabled, send a confirmed packet
		api.lorawan.send(4, payload, 2, true, 8);
	}
}
```

### Display Handler

The display handler callback includes a flag that tells what kind of display content should be displayed.

```cpp
/**
 * @brief Display handler
 *
 * @param reason 1 = RX packet display
 *               2 = TX failed display (only LPW mode)
 *               3 = Join failed (only LPW mode)
 *               4 = Linkcheck result display (only LPW LinkCheck mode)
 */
void handle_display(void *reason)
{}

```
[Back to top](#content)


<rk-author />