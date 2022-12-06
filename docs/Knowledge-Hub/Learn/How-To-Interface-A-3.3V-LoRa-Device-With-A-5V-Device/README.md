---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/interfacing-3.3v-to-5v.png
rak_desc: A brief guide on how to simulate the Rx/Tx between 5-V and 3.3-V machines.
tags:
  - Tutorial
  - BastWAN
header:
  title: How to Interface a 3.3-V LoRa Device with a 5-V Device
  caption: by <b>Kongduino</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 30/09/2022 6:00 PM
---


# How to Interface a 3.3-V LoRa Device with a 5-V Device

## Overview

I am building a LoRa dongle specifically for a Tandy TRS-80 Model 102, a 40-year-old portable computer, arguably the first usable laptop in existence – and still going strong. It was very popular with journalists and writers because of a combination of format (A4 size), keyboard, battery life, and general convenience.

Today, its specs pale in comparison with modern laptops, but it still has a strong following and can be used for many things. I use it to write blog post drafts, this one included, but the main goal for me was to build a LoRa testing device, especially for LoRa distance tests.

In terms of connectivity, it had a rich assortment back then, but today the only usable port is the RS-232 serial port, in its antiquated but still supported DB-25 format. There is plenty of DB-25 to DB-9 and DB-9 to USB cables, and even DB-25 to USB. So backing up and loading files is easy, albeit slow. So the temptation to create a LoRa dongle via the RS-232 port was strong, and I have taken a few steps.

While this computer can be a programmer in BASIC, it is quite slow – although I suppose for a LoRa PING-PONG machine, it wouldn't matter that much. But I decided to go directly for the hard and fast option: ASM code.

The 80C85 CPU running on this laptop is a cousin of 8080, and by extension of the probably most famous CPU of all time, the Z80. Learning the 8085 "dialect" wasn't too hard, and there are assemblers running on modern machines. In a couple of days, I verified it can send and receive strings of characters via the RS232 port.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/DB25_Connector.jpg"
  width="70%"
  caption="DB25 connector"
/>



## The Challenge

Now comes the real challenge: **building a dongle**. Most modern IoT machines, especially for LoRa modules, run at 3.3&nbsp;V, and 40-year-old devices don't. Lucky enough if the output is 5&nbsp;V and not 12. That would make any LoRa chip dance a little. So while waiting for my Tandy 102 to arrive, I bought DB-25 connector (and a few others just in case), and some bi-directional level shifters. I found some with 2 to 8 lines, which could come in handy - RS232 doesn't just use Rx and Tx, so I might need more than 2 lines. But for this exercise, simulating Rx/Tx between 5-V and 3.3-V machines, I stick to these 2 lines only.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Level_Shifter.png"
  width="50%"
  caption="Level shifter"
/>



Also, the other (minor difficulty) is that RS232 doesn't supply a 5-Volt line per se. When HIGH, the signals come out at 5&nbsp;V, but there's no power source for the device connected to it. The 25 pins can't provide a measly 5-V Signal. However, to function properly, the level shifter must receive 5&nbsp;V on one side and 3.3&nbsp;V on the other.

Fortunately, BastWAN has a USB line, which outputs 5&nbsp;V, or a little more. So I did the following:

 - Wired both sides with lines from the BastWAN;
 - GND to GND, on both sides;
 - Rx1/Tx1 on the Mega's side to HV1 and HV2;
 - Tx1/Rx1 on the BastWAN's side to LV1 and LV2.

The level shifter is actually small enough to fit snugly inside the connector's casing, which would be the ideal solution.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Voltage_Shifter.jpg"
  width="70%"
  caption="Voltage shifter"
/>


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Bastwan.jpg"
  width="70%"
  caption="BastWAN"
/>


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Mega_Serial1.jpg"
  width="70%"
  caption="Mega Serial1"
/>



## The Code

After that, all it required to test was the same code for both machines (since they both have `Serial` and `Serial1`), a variant of the SoftwareSerial bridge. The code is small enough to be quoted here in its entirety:



```c
void setup() {
  Serial.begin(115200);
  Serial1.begin(115200);
  delay(5000);
  Serial.println("5v<->3.3v UART Test");
}

void loop() {
  if (Serial.available()) {
    Serial.println("Incoming from Serial. Forwarding to Serial1!");
    char buf[256] = {0};
    uint8_t ix = 0;
    while (Serial.available()) {
      char c = Serial.read();
      buf[ix++] = c;
      delay(10);
    }
    buf[ix++] = 0;
    Serial.print(buf);
    Serial1.print(buf);
  }
  if (Serial1.available()) {
    Serial.println("Incoming from Serial1!");
    char buf[256] = {0};
    uint8_t ix = 0;
    while (Serial1.available()) {
      char c = Serial1.read();
      buf[ix++] = c;
      delay(10);
    }
    buf[ix++] = 0;
    Serial.print(buf);
  }
}
```


<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Mega_Screenshot.png"
  width="60%"
  caption="Successful connection"
/>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/5v-to-3.3v-bridge/Bastwan_Screenshot.png"
  width="60%"
  caption="Successful connection"
/>



The next steps would be working on the RS232 protocol and seeing which lines needed to wire to send and receive data. There are quite a few projects that interface the Tandy Model 100 or 102 with the modern world, so I'll have a look and try not to make too much of a mess.

Meanwhile, if you need to interface a 3.3&nbsp;V device to a 5&nbsp;V one, you know what to do!