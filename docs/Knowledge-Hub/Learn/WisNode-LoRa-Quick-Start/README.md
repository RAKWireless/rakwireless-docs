---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A step-by-step guide on how to configure RAK811 WisNode-LoRa.
tags:
  - RAK811
  - WisNode
  - LoRa
  - Tutorial
header:
  title: WisNode - LoRa Quick Start
  caption: by <b>Ken Yuh</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 04/29/2017 09:00 PM
---

# WisNode - LoRa Quick Start

## Overview

Top 3 reasons why we like the RAK811 WisNode-LoRa:

- Low cost.
- Works both standalone as well as an Arduino shield.
- Easy to start with AT commands as well as extend with open-source code for IAR Embedded Workbench for ARM (EWARM) toolchain V7.70.1 + SWD.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisnode-lora-quick-start/1.png" width="50%">
</p>

## Quick Start

Before you start, contact Kotahi Net for a [free network connection](https://kotahi.net/free-connection/). We will send the ABP (Activation by Personalization) details you need to enter into the code. Remember to check if there is [network coverage](https://kotahi.net/network/network-coverage/) in your area.

### Flashing

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisnode-lora-quick-start/2.png" width="40%">
</p>

1.  Download and save updated [firmware](https://www.dropbox.com/s/nkw4ffl6gfvd33p/RAK811_V10235_865_for_NZ.bin?dl=0).
2.  Download and install [STM32 flashing tool](http://www.st.com/en/development-tools/flasher-stm32.html). Requires free registration or providing name and email address to STMicroelectronics.
3.  Put the board in flashing mode by placing the supplied sleeve so as to bridge the pins 3V3 and BOOT.
4.  Connect the board to your computer with a USB cable. It should be set up automatically on a COM port.
5.  Flash the firmware following instructions on [RAK811 Module Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK811-Module/Quickstart/#upgrading-the-firmware).
6.  Disconnect the board from your computer.

### Configuration and Data Sending

1.  Set the board to normal mode by placing the supplied sleeve so as to bridge the pins BOOT and GND.
2.  Connect the board to your computer with a USB cable again.
3.  Use a terminal emulator tool such as [Tera Term](https://osdn.net/projects/ttssh2/releases/) or [PuTTY](http://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html) and connect to the COM port. In Terminal Setup set new-line receive and transmit as CR+LF. Also, select local echo. For serial port settings, leave all as default other than setting Baud rate to 115200.
4.  Configure the board as below and send data.

:::warning ⚠️ IMPORTANT
Change the `dev_addr` (Device Address), `nwks_key` (Network Session Key), and `apps_key` (Application Session Key) in the configuration below to that provided by KotahiNet. Data sent will be visible on a web page. KotahiNet will provide the details about this when providing your ABP details.
:::

:::tip 📝 NOTE:
It may be easier to copy and paste the ABP parameters and configuration for channels into the terminal, one line at a time. Typically, pasting is by right mouse button click.
:::

```
at+version

OK1.0.2.3.5

at+set_config=dev_addr:014D066B

OK

at+set_config=nwks_key:405DD9F2F66300825D80BF2D2E44CA80

OK

at+set_config=apps_key:D4F0B91AC3D50A8B25412E1FCC8AB361

OK

at+join=abp

OK

at+set_config=ch_list:0,on,865000000,0,5

OK

at+set_config=ch_list:1,on,865200000,0,5

OK

at+set_config=ch_list:2,on,865400000,0,5

OK

at+set_config=ch_list:3,on,866200000,0,5

OK

at+set_config=ch_list:4,on,866400000,0,5

OK

at+set_config=ch_list:5,on,866600000,0,5

OK

at+set_config=ch_list:6,on,866800000,0,5

OK

at+set_config=ch_list:7,on,867000000,0,5

OK

at+set_config=rx2:867200000,0

OK

at+set_config=duty:off

OK

at+get_config=ch_list

OK0,on,865000000,0,5;1,on,865200000,0,5;2,on,865400000,0,5;3,on,866200000,0,5;4,on,866400000,0,5;5,on,866600000,0,5;6,on,866800000,0,5;
7,on,867000000,0,5;8,off;9,off;10,off;11,off;12,off;13,off;14,off;15,off

// send data- confirmed transmission, port, hex data
at+send=1,7,ABC123

OK

at+recv=1,0,0

// send data- unconfirmed transmission, port, hex data
at+send=0,7,ABC124

OK

at+recv=2,0,0
```
