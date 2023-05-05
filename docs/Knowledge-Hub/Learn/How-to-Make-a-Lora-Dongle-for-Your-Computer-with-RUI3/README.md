---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/lora-dongle-for-your-computer-with-rui3/lora-dongle.png
rak_desc: A step-by-step guide on how to make a LoRa dongle for your computer with RUI3.
tags:
  - RUI3
  - LoRa Dongle
  - LoRa Companion
  - RAK4631-R
  - RAK19003
  - Arduino
  - Tutorial
header:
  title: How to Make a LoRa Dongle for Your Computer with RUI3
  caption: by <b>Kongduino</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 08/10/2022 09:00 PM
---

# How to Make a LoRa Dongle for Your Computer with RUI3

## Overview

While [LoRa and LoRaWAN](https://www.rakwireless.com/en-us/technology/lorawan) have penetrated the IoT world, providing an easy-to-use long-range communication solution, computers are largely ignored. Rare is the laptop with a LoRa module included. However, some solutions at various price points have begun to emerge. For a while now, I've been making custom **LoRa USB dongles** that can be connected to either my laptop or a Raspberry Pi, providing a great alternative to squinting at minuscule [RAK1921 OLED displays](https://store.rakwireless.com/products/rak1921-oled-display-panel?utm_source=RAK1921&utm_medium=Document&utm_campaign=BuyFromStore). Most of the time, they're set up to work from home as transceivers in a ping/pong scheme. However, as receivers, they can sometimes serve as a convenient test platform: sit outside with a laptop, send commands, log results, and so on.

[WisBlock](https://www.rakwireless.com/en-us/products/wisblock) has not only made it possible but also simple. I have two types of dongles: one with custom software on the computer (managing the LoRa module's AT firmware) and one with custom software on the LoRa module, which does the majority of the work, while the computer serves as a dumb terminal. Today we'll do the latter, creating simple custom firmware for the [RAK4631-R](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) with [RAKwireless Unified Interface V3 (RUI3)](https://docs.rakwireless.com/RUI3/). The RUI3 is designed to help IoT developers make their IoT products faster. It is compatible with RAK LPWAN modules. It supports the well-known AT commands as well as the Binary Mode.

## Prerequisites

For a basic setup, we will need the following:

### Hardware

- Base Board: For this case, I chose the [RAK19003](https://store.rakwireless.com/products/wisblock-base-board-rak19003?utm_source=RAK19003&utm_medium=Document&utm_campaign=BuyFromStore), which presents the smallest footprint, 30 x 35&nbsp;mm.

- Core Module: A [RAK4631-R](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) in a frequency range that's allowed in your country. The RAK4631-R WisBlock LPWAN is a WisBlock Core module that delivers a powerful Nordic nRF52840 MCU with BLE 5.0 paired to the latest LoRa transceivers from Semtech, the SX126x series.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lora-dongle-for-your-computer-with-rui3/rak4631-r.png" width="50%">
</p>

:::tip 📝 NOTE:
We can also use [RAK3172](https://store.rakwireless.com/products/wisduo-lpwan-module-rak3172?utm_source=WisBlockRAK3172&utm_medium=Document&utm_campaign=BuyFromStore) for this, as RUI3 code compiles for both, as long as you are using supported features. BLE and hardware encryption are not supported for RAK3172. We are going to encrypt our LoRa packets but adding AES128 to the code would go beyond the scope of this article.
:::

- A USB cable (USB-C for the RAK19003)

### Software

- Arduino IDE
- A terminal application, like [CoolTerm](https://freeware.the-meiers.org/), although even the Arduino IDE's Serial Terminal will do in a pinch.

## Working Modes

A dongle basically needs two working modes: a transmission mode and a setup mode. Contrary to AT firmware, which is essentially single-mode (they're always in setup mode), where even sending and receiving are commands, a default transmission mode acts as a bridge between the [LoRa module](https://www.rakwireless.com/en-us/technology/lorawan) and the USB port: whatever comes in one way is output the other. Only when the user issues a special command does the dongle switch between transmission and setup modes. I've seen some [LoRa modules](https://www.rakwireless.com/en-us/technology/lorawan) that do this - albeit modules aimed at IoT devices rather than computers - by supplying a pin or two for this purpose.

You can switch modes by setting them to high/low, but this is not possible with a computer. So a special string, which is unlikely to occur normally, is the way to go. In the old days of modems, `$$$` was often that "unlikely" string. So, let's use this.

## Workflow

In a regular [LoRa application](https://www.rakwireless.com/en-us/technology/lorawan), the workflow will often be like this:

- Initialize serial
- Set up wire, then the LoRa module (pin assignments, etc)
- Set up LoRa options (SF, BW, Frequency, etc)

With RUI3, we can skip the second point because the API has already done it for us: batteries included, as they say. `api.lorawan` allows you to configure LoRa options. Because the LoRa module is pre-wired, configuring LoRa is as simple as a few lines of API calls and checking the result:

```c
bool rslt = api.lorawan.nwm.set(0);
  if (!rslt) {
    // Do something
  }
  rslt = api.lorawan.pfreq.set(myFreq);
  if (!rslt) {
    // Do something
  }
  rslt = api.lorawan.psf.set(sf);
  if (!rslt) {
    // Do something
  }
  rslt = api.lorawan.pbw.set(bw);
  if (!rslt) {
    // Do something
  }
  // etc etc etc...
```

That is a nice improvement on the days of setting up pin assignments, calling a library (one among a few, with varying degrees of flexibility and differing syntax), and checking whether things work before even being able to set up the options. Here, it's pre-done, and the API is consistent.

Then you set up the LoRa callbacks: receive and transmit. This enables you to offload the code managing these events to a separate part of the code, in an asynchronous manner instead of bloating the main `loop()` code.

```C
api.lorawan.registerPRecvCallback(recv_cb);
api.lorawan.registerPSendCallback(send_cb);

rslt = api.lorawan.precv(65534);
```

The last line sets the LoRa module into permanent listen mode.

So this takes care of `setup()`. You can add an OLED to check the status without switching windows or configuring LEDs (there are two available on the board, one green and one blue).

## loop()

In `loop()`, you check the serial port for incoming characters and act on them accordingly. However, you must also check on the LoRa module, and if it has a data packet for you, you must send the contents to the serial port. As mentioned, there is a bridge between the two parts. This is often done in other frameworks in the same way as in Serial. If something is detected, poll the LoRa module and read it.

If it is not in RUI3, it is done in the `void recv_cb(rui_lora_p2p_recv_t data)` event declared above. You can decide what to do with the raw data before sending it to serial. For instance, if you are expecting JSON data, you could unpack it and pretty-print it to Serial. Likewise, if you know the data is encrypted, or expect it to be, you can decrypt it before further processing.
The callback looks like this:

```c
void recv_cb(rui_lora_p2p_recv_t data) {
  uint16_t ln = data.BufferSize;
  char plainText[ln + 1] = {0};
  char buff[92];
  sprintf(buff, "Incoming message, length: %d, RSSI: %d, SNR: %d", data.BufferSize, data.Rssi, data.Snr);
  Serial.println(buff);
  if (needAES) {
    // Do we need to decrypt the data?
    int rslt = aes.Process((char*)data.Buffer, ln, myIV, myPWD, 16, plainText, aes.decryptFlag, aes.ecbMode);
    if (rslt < 0) {
      Serial.printf("Error %d in Process ECB Decrypt\n", rslt);
      return;
    }
  } else {
    // No? Just copy the data
    memcpy(plainText, data.Buffer, ln);
  }
  // The easiest way to know whether the data is a JSON packet is to try and decode it :-)
  StaticJsonDocument<200> doc;
  DeserializationError error = deserializeJson(doc, plainText);
  if (!error) {
    JsonObject root = doc.as<JsonObject>();
    // using C++11 syntax (preferred):
    for (JsonPair kv : root) {
      sprintf(buff, " * %s: %s", kv.key().c_str(), kv.value().as<char*>());
      Serial.println(buff);
    }
    return; // End for JSON messages
  }
  // There was an error, so this is not a JSON packet – not well-formed anyway.
  // Print it as a plain message
  Serial.println("Message:");
  Serial.println(plainText);
}
```

## Tx

There is a callback for Tx too, which is called when the transmission is complete. You can put anything there, but in most cases, it's used to ensure that the module returns to listening mode:

```c
void send_cb(void) {
  // TX callback
  Serial.println("Tx done!");
  isSending = false;
  // Flag used to determine whether we're still sending something or we're free to send.
  api.lorawan.precv(65534);
}
```

We'll keep the callback short and sweet, no need to prolong the return to listening mode.

## Setup Mode

When the user sends `$$$` (followed by `\n`), the code switches to setup mode. This part is slightly more complex, and I'm reusing a command system I use almost everywhere. It is very simple to reuse, and the majority of the work is copy-paste, changing function names, and writing the appropriate code for each command. First, we have a `struct` for commands:

```c
int cmdCount = 0;
struct myCommand {
  void (*ptr)(char *); // Function pointer
  char name[12];
  char help[48];
};

```

The `cmdCount` will be useful later. It contains a function pointer, a name, and a useful description. Following that, an array of commands is declared:

```c
myCommand cmds[] = {
  {handleHelp, "help", "Shows this help."},
  {handleP2P, "p2p", "Shows the P2P settings."},
  {handleFreq, "fq", "Gets/sets the working frequency."},
  {handleBW, "bw", "Gets/sets the working bandwidth."},
  {handleSF, "sf", "Gets/sets the working spreading factor."},
  {handleCR, "cr", "Gets/sets the working coding rate."},
  {handleTX, "tx", "Gets/sets the working TX power."},
  {handleAES, "aes", "Gets/sets AES encryption status."},
  {handlePassword, "pwd", "Gets/sets AES password."},
  {handleIV, "iv", "Gets/sets AES IV."},
  {handleJSON, "json", "Gets/sets JSON sending status."},
};

```

At startup, in the `setup()` function, the number of available commands will be calculated so that we know how many we have.

`cmdCount = sizeof(cmds) / sizeof(myCommand);` is used in the `evalCmd` function to loop through the commands.

```c
void evalCmd(char *str, string fullString) {
  uint8_t ix, iy = strlen(str);
  for (ix = 0; ix < iy; ix++) {
    char c = str[ix];
    // lowercase the keyword
    if (c >= 'A' && c <= 'Z') str[ix] = c + 32;
  }
  Serial.print("Evaluating: `");
  Serial.print(fullString.c_str());
  Serial.println("`");
  for (int i = 0; i < cmdCount; i++) {
    if (strcmp(str, cmds[i].name) == 0) {
      // call the function
      cmds[i].ptr((char*)fullString.c_str());
      return;
    }
  }
}

```

After that, it is easy to add commands and handle their calls. Let's have a look at the `handleHelp(char*)` command:

```c
void handleHelpc(char *param) {
  Serial.printf("Available commands: %d\n", cmdCount);
  for (int i = 0; i < cmdCount; i++) {
    sprintf(msg, " . %s: %s", cmds[i].name, cmds[i].help);
    Serial.println(msg);
  }
}

```

The `char *param` argument may or may not be needed so it's sent by default, and each command is free to use or ignore. The `handleFreq()` command uses it:

```c
void handleFreq(char *param) {
  if (strcmp("fq", param) == 0) {
    // no parameters
    sprintf(msg, "P2P frequency: %.3f MHz\n", (myFreq / 1e6));
    Serial.print(msg);
    sprintf(msg, "Fq: %.3f MHz\n", (myFreq / 1e6));
    displayScroll(msg);
    return;
  } else {
    // fq xxx.xxx set frequency
    float value = atof(param + 2);
    if (value < 150.0 || value > 960.0) {
      // sx1262 freq range 150MHz to 960MHz
      // Your chip might not support all...
      sprintf(msg, "Invalid frequency value: %.3f\n", value);
      Serial.print(msg);
      return;
    }
    myFreq = value * 1e6;
    api.lorawan.precv(0);
    // turn off reception while we're doing setup
    sprintf(msg, "Set P2P frequency to %3.3f: %s MHz\n", (myFreq / 1e6), api.lorawan.pfreq.set(myFreq) ? "Success" : "Fail");
    Serial.print(msg);
    api.lorawan.precv(65534);
    sprintf(msg, "New freq: %.3f", value);
    displayScroll(msg);
    return;
  }
}

```

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lora-dongle-for-your-computer-with-rui3/command.png" width="55%">
</p>

So, with this, we have a fully functional LoRa USB dongle in a few hours of coding (even less for me in this case because I just reused the 'Commands.h' code from previous projects). I'm skipping the AES encryption part, even though I'll leave it in the example project because it's a bit more involved and usually not part of a simple project: in fact, I usually add AES after a project is functional so that nothing else breaks. But, like `Commands.h`, I have the AES files ready from other projects, so it's mostly a drag-and-drop and copy-paste job.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lora-dongle-for-your-computer-with-rui3/setup.png" width="80%">
</p>

## Extensions

Feature creep is always an issue for developers, but let's indulge a little. Even with such a small baseboard, the following elements could be included in this project:

- An [OLED Display](https://store.rakwireless.com/products/rak1921-oled-display-panel?utm_source=RAK1921&utm_medium=Document&utm_campaign=BuyFromStore). Because of the pin configuration, it would be at the back of the base board but could be useful. Learning how to turn it off after a while to save energy and maintain the screen's integrity could be beneficial.
- An [RTC](https://store.rakwireless.com/products/rtc-module-rak12002?utm_source=RAK12002&utm_medium=Document&utm_campaign=BuyFromStore). You could timestamp your packets, either in a JSON packet or in a Cayenne LPP-like format.
- A [GNSS module](https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore). You could add GPS coordinates to your packets, and if you have recorded or set the coordinates of the transceiver at home, use them to calculate the distance automatically (Haversine formula).
- A firmware BLE UART route. This is quite easy to do, even from just looking at existing examples, and could lead to an interesting development: once you have BLE set up, the code is quasi-identical to the serial code. Then, instead of being a USB LoRa dongle for a computer with a battery, it could become a wireless mobile phone LoRa dongle.

The code is available at [RUI3 LoRa Companion](https://github.com/Kongduino/RUI3_LoRa_Companion).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lora-dongle-for-your-computer-with-rui3/dongle-with-wisblock.png" width="80%">
</p>
