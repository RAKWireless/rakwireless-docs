---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/fft-audio-analyzer/fft-audio-analyzer.png
rak_desc: This guide provides a step-by-step tutorial on how to create an FFT audio analyzer using WisBlock Audio.
tags:
  - Tutorial
  - WisBlock Audio
  - WisBlock
  - RAK19007
  - RAK4631
  - RAK18000
  - RAK18030
  - RAK18031
  - FFT
  - Audio Analyzer
  - Fast Fourier Transform
  - Arduino
header:
  title: Build Your Own FFT Audio Analyzer
  caption: by <b>Christopher Méndez</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 03/11/2022 08:45 PM
---

# Build Your Own FFT Audio Analyzer


The Fast Fourier Transform (FFT) is an algorithm capable of converting a signal from its original domain (often time or space) to a representation in the frequency domain and vice versa. It works alongside the consideration that every non-periodical signal in the time domain is a sum of periodic ones in terms of sines and cosines that can be broken down.

In the audio field, this tool can help us to find and filter unwanted noises (frequencies), analyze functions harmonics, extract meaningful features of a signal for Machine Learning purposes, and much more.

FFT is considered the most important numerical algorithm of our lifetime, and in this guide, you will be implementing it with WisBlock.


If you are a visual learner, yan can watch the [video tutorial](https://youtu.be/Avoobbz4wtg) instead.

## Hardware

To carry out this test you need some WisBlock hardware:
   - [RAK19007 WisBlock Base Board 2nd Gen](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)
   - [RAK4631 (nRF52840) WisBlock Core](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)

You can choose between several microphones:
   - [RAK18000 PDM Stereo Microphone Module](https://store.rakwireless.com/products/wisblock-microphone-module-rak18000?utm_source=WisBlockRAK18000&utm_medium=Document&utm_campaign=BuyFromStore)
   - [RAK18030 WisBlock Audio PDM Microphone Module](https://store.rakwireless.com/products/pdm-microphone-sensor-20-20khz-knowles-spk0641ht4h-1-rak18030?utm_source=RAK18030&utm_medium=Document&utm_campaign=BuyFromStore)
   - [RAK18031 WisBlock Audio PDM Microphone Module](https://store.rakwireless.com/products/pdm-microphone-sensor-20-10khz-stmicroelectronics-mp34dt06j-rak18031?utm_source=RAK18031&utm_medium=Document&utm_campaign=BuyFromStore)
   - [RAK18032 WisBlock Audio Ultrasonic Microphone Module](https://store.rakwireless.com/products/pdm-ultrasonic-microphone-sensor-knowles-sph0641lu4h-1-rak18032?utm_source=RAK18032&utm_medium=Document&utm_campaign=BuyFromStore)


:::tip 📝 NOTE
This is also compatible with the ESP32 and RP2040 cores.
:::

## Software

- **Arduino IDE**

Follow the [installation guide of BSP](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) to set up your Arduino IDE to program WisBlock boards.


## WisBlock Assembly

To put together the different modules, you just need to connect them to the respective slots in the base board.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/mounting-sketch.png"
  width="70%"
  caption="Assembling the IO to the base board"
/>

<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/assembled-modules.png"
  width="80%"
  caption="WisBlock + PDM Microphone assembled"
/>


## Code

1. To open the code, download and install the **RAKwireless Audio Library** from the [GitHub repository](https://github.com/RAKWireless/RAKwireless-Audio-library).

2. Open the Arduino IDE, and search for the ZIP file by navigating to **Sketch** > **Include Library** > **Add .ZIP Library…**

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/add-zip-lib.png"
  width="80%"
  caption="Adding the library"
/>

3. On the Arduino IDE, navigate to **File** > **Examples** > **RAKwireless Audio Library** > **RAK4631** > **PDMSerialPlotterFFT**.

:::tip 📝 NOTE
There’s also a High Rate FFT example.
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/lib-navigation.png"
  width="80%"
  caption="Adding PDMSerialPlotterFFT"
/>

4. Select the board you are using, connect it through the USB cable, and select the respective COM port.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/select-board-port.png"
  width="80%"
  caption="Selecting the board"
/>

5. Click **Upload**, and wait for the core to be flashed.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/flash-the-core.png"
  width="80%"
  caption="Flashing the core"
/>

## Testing

Once the code is uploaded, open the **Serial Plotter** on the Arduino IDE and you should see a line graph.

:::tip 📝 NOTE
The line graph doesn’t work with Arduino IDE 2.0.
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/line-graph-no-sound.png"
  width="80%"
  caption="Line graph shows that no sound is being played"
/>

To better see the FFT in action, use [Online Tone Generator](https://www.szynalski.com/tone-generator/) to generate pure tones of any frequency to play some notes.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/line-graph-with-whistle.png"
  width="80%"
  caption="Line graph results with some whistling"
/>

Lastly, set the frequency to 440&nbsp;Hz. The Serial Plotter shows us a high amplitude spike and specifies the frequency component extracted. It almost perfectly matches the set on the tone generator, so we are up and running with very accurate results, which is great.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/fft-audio-analyzer/line-graph.png"
  width="100%"
  caption="Graph showing a high amplitude spike"
/>
