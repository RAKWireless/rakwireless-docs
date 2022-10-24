---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/noise-level-alarm.png
rak_desc: This guide provides a step-by-step tutorial on how to create a noise level alarm using WisBlock hardware such as RAK19007, RAK4631, RAK18000, and RAK18030.
tags:
  - Tutorial
  - WisBlock Audio
  - WisBlock
  - RAK19007
  - RAK4631
  - RAK18000
  - RAK18030
  - Arduino
header:
  title: Build Your Own Noise Level Alarm
  caption: by <b>Christopher Méndez</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 21/10/2022 05:00 PM
---

# Build Your Own Noise Level Alarm

Cities, industries, and citizens are realizing that noise pollution caused by human activities such as entertainment, urban traffic, and industrial sources has a negative impact on health, productivity, and the economy. Whether you are a city official, a farmer, or an operations manager, you want to make sure that noise levels are kept within wellness-required limits.

This guide will teach you how to create a noise level alarm using WisBlock.

If you are a visual learner, yan can watch the [video tutorial](https://youtu.be/jbLdFPcE4rc) instead.

## Hardware

To carry out this test you need some WisBlock hardware:

- [RAK19007 WisBlock Base Board 2nd Gen](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK4631 (nRF52840) core](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK18000](https://store.rakwireless.com/products/wisblock-microphone-module-rak18000?utm_source=WisBlockRAK18000&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK18030](https://store.rakwireless.com/products/pdm-microphone-sensor-20-20khz-knowles-spk0641ht4h-1-rak18030?utm_source=RAK18030&utm_medium=Document&utm_campaign=BuyFromStore) PDM microphone


:::tip 📝 NOTE
This is also compatible with the ESP32 and RP2040 cores.
:::

## Software

- **Arduino IDE**

Follow the [installation guide of BSP](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) to set up your Arduino IDE to program WisBlock boards.

## WisBlock Assembly

To put together the different modules, you need to connect them to the respective slots in the base board. For further information, refer to the [Assembling and Disassembling](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19007/Quickstart/#assembling-a-wisblock-module) section in the Quick Start Guide.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/mounting-sketch.png"
  width="50%"
  caption="Assembling the core to the base board"
/>

<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/nla-assembly-photo.png"
  width="80%"
  caption="Assembling the components"
/>



## Code

1. To open the code, first, you need to install the **RAKwireless Audio Library** from our repository.


2. Download it, and search for the ZIP file by navigating to **Sketch > Include Library > Add .ZIP Library…**

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/add-zip-lib.png"
  width="80%"
  caption="Adding the library"
/>

3. On the Arduino IDE, navigate to **File > Examples > RAKwireless Audio Library > RAK4631 > Audio_Alarm_RAK18003**.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/lib-navigation.png"
  width="80%"
  caption="Adding the Audio_Alarm_RAK18003"
/>

4. Select the board you are using, connect it through the USB cable, and select the respective COM port.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/select-board-port.png"
  width="80%"
  caption="Selecting the board"
/>

5. Modify the noise level threshold by decreasing the **audio_threshold** variable for a more sensitive alarm or increasing it for a less sensitive alarm.

```c
//Alarm threshold
int audio_threshold = 1000; //You can modify this value to your desired noise trigger threshold.
```

6. Click **Upload**, and wait for the core to be flashed.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/upload-flash.png"
  width="80%"
  caption="Increasing / Decreasing the Audio threshold"
/>

## Testing

Once the code is uploaded, you can play some music or start talking and see how your board hears you and activates its LEDs when you reach a certain level of loudness meanwhile.

Instead of just controlling LEDs, you can modify the code to send an email notification or to drive a screen to show a dB live measurement.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/led-off.png"
  width="90%"
  caption="Testing the Noise Level Alarm - Low Audio"
/>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/noise-level-alarm-guide/led-on.png"
  width="90%"
  caption="Testing the Noise Level Alarm - High Audio"
/>
