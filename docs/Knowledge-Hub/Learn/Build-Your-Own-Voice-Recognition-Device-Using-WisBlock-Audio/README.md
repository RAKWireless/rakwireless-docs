---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/sidebar_image.png
rak_desc: A step-by-step guide on how to build a voice recognition device using WisBlock Audio.
tags:
  - Tutorial
  - WisBlock
  - WisBlock Audio
  - WisBlock Audio Kit
  - Voice Recognition
  - RAK18080 DSP
  - RAK4631
  - Cyberon
header:
  title: Build Your Own Voice Recognition Device Using Wisblock Audio
  caption: by <b>Geoff Roddick</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 24/04/2023 09:00 PM
---

# Build Your Own Voice Recognition Device Using Wisblock Audio

## Overview

In our lives today, we are seeing more and more devices that can be controlled by your voice, be it a simple light controller or controlling devices in an operating room. With RAKwireless’ [WisBlock Audio](https://store.rakwireless.com/collections/wisblock-audio), you can create your own voice-controlled device. This WisBlock Audio tutorial will walk you through the steps on how to create you own device that is voice controlled using offline voice recognition. RAK has a number of options available for Voice Recognition. One example is creating your own voice models using an [Edge Impulse running on a WisCore to a full solution with a Cyberon voice model running on a DSP](/Knowledge-Hub/Learn/WisBlock-Audio-Processing-Comparison-Table/#model-comparison). In this tutorial, we will be using the Cyberon Voice model running on the RAK18080 DSP processing board.

## Contents

- [Hardware](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#hardware)
- [Kit Assembly](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#kit-assembly)
- [Kit Assembly Steps](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#kit-assembly-steps)
  - [Board Stack Assembly](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#board-stack-assembly)
  - [Enclosure Base Assembly](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#enclosure-base-assembly)
  - [Lid Assembly](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#lid-assembly)
  - [Assemble Full Enclosure](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#assemble-full-enclosure)
  - [M8 GPIO Cable](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#m8-gpio-cable)
    - [M8 Pinout](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#m8-pinout)
    - [Power Supply](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#power-supply)
- [Software Setup](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#software-set-up)
  - [Example Code](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#example-code)
  - [Updating for you Application](/Knowledge-Hub/Learn/Build-your-own-Voice-Recognition-Device-using-WisBlock-Audio/#updating-for-you-application)


## Hardware

This tutorial will be using the [WisBlock Voice Processing Speaker Kit](https://store.rakwireless.com/products/wisblock-voice-processing-speaker-kit-audio-kit-4a). If you don’t need audible responses, you can use the [WisBlock Voice Processing Kit](https://store.rakwireless.com/products/wisblock-voice-processing-kit-audio-kit-3c), which is the same kit but without the amplifier board and speaker.

The WisBlock Voice Processing Speaker Kit includes the following major components:
- RAK18003 Interposer Modules - Allows you to connect multiple WisBlock Audio modules onto a single base board IO slot.
- RAK18080 DSP Module - Contains a DSP (DSPg DBM10L), which runs algorithms to clean up the voice audio and run the Cyberon software for voice recognition.
- RAK18060 (or RAK18061) Amplifier Module
- RAK18030 Microphone Module
- Speaker
- Enclosure & Hardware

You will also need the following:
- RAK5005 or RAK19007 base board
- WisCore module (RAK11200, RAK4631, RAK11300)

:::warning ⚠️ WARNING
RAK4631 should have Arduino BSP. RUI3 is not compatible with the RAKwireless Audio Library.
:::

## Kit Assembly

Below are the parts to be assembled for the Voice Processing Speaker Kit:

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/1.png"
  width="60%"
  caption="WisBlock Audio Modules"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/2.png"
  width="60%"
  caption="Unify Enclosure"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/3.png"
  width="60%"
  caption="Accessory Cables"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/4.png"
  width="60%"
  caption="Lid, Speaker, and Microphone"
/>

:::tip 📝 NOTE:
If you are using the RAK11200 as your WisBlock Core, the RAK11200 requires the Boot0 pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).

When using a RAK11200 and a firmware update is needed, be sure to attach some fly wires so you can put the ESP32 into boot mode. Also, the reset button can be hard to reach once it is assembled into the enclosure. It may also need fly wires or a small screwdriver to get access to it.
:::

## Kit Assembly Steps

### Board Stack Assembly

1. Assemble WisBlock Core onto the base board.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/5.png"
  width="60%"
  caption="WisBlock Core attached to the Base board"
/>

2. Screw the base board onto the enclosure base plate using three screws. If using the base plate with an integrated antenna (for Core modules with IPEX connectors like RAK4631 and RAK11310), plug in the antenna via the IPEX connector cable.

:::tip 📝 NOTE
The 4th screw on the bottom right is not used.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/6.png"
  width="60%"
  caption="WisBlock Base attached to mounting plate"
/>

3. Connect the FPC cable to the Interposer board (RAK18003). Assemble the Interposer board onto the Base board, and screw down to the enclosure base plate using the remaining two screws.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/7.png"
  width="60%"
  caption="FPC cable to the Interposer board"
/>

:::tip 📝 NOTE:
The latch is in the open/up position in this image. After inserting the FPC it should be in the closed or down position.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/8.png"
  width="60%"
  caption="Interposer board attached to WisBlock Base"
/>

4. Using one of the 3&nbsp;mm spacers between the Interposer board and RAK18080 board, start assembling the board stack (See **Figure 11** on Step 6 for a side view).

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/9.png"
  width="60%"
  caption="RAK18080 on top of RAK18003 Interposer board"
/>

5. Using the last 3&nbsp;mm spacer between the RAK18080 board and RAK18060, finish assembling the board stack.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/10.png"
  width="60%"
  caption="RAK18060 Amplifier board on top of RAK18080"
/>

6.  Screw down the board stack using the three 12&nbsp;mm screws

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/11.png"
  width="60%"
  caption="WisBlock Audio modules stack"
/>

### Enclosure Base Assembly

Now that the boards are assembled onto the enclosure base plate, you can proceed with assembling the base part of the enclosure.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/12.png"
  width="60%"
  caption="Bottom enclosure and base plate with WisBlock Audio modules"
/>

1.  Assemble the Power and GPIO cables into the case

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/13.png"
  width="60%"
  caption="Enclosure and GPIO cable"
/>

2.  Assemble the Antenna extender into the case (if used)

:::tip 📝 NOTE:
- This step may be different if using a RAK11200 Core, which does not need an external antenna.
- The antenna extender is not used if you are using the base plate with an integrated antenna.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/14.png"
  width="60%"
  caption="Enclosure and Antenna Cable"
/>

3.  Add the assembled base plate into the enclosure base and screw it down. Plug in RAK18060 power and base board power connectors.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/15.png"
  width="60%"
  caption="WisBlock Audio Modules in Mounting Plate attached to the Enclosure and Cables"
/>

4.  After the assembly is finished, the plug cover for the USB hole should be inserted as this will ensure the case is watertight and will improve the quality of the audio from the speaker.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/16.png"
  width="60%"
  caption="USB plug"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/17.png"
  width="60%"
  caption="USB plug"
/>

### Lid Assembly

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/18.png"
  width="60%"
  caption="Components for the Lid"
/>

1.  Screw down the microphone board. It should be snug. Do not over-tighten it.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/19.png"
  width="60%"
  caption="Microphone module in the Lid"
/>

2.  Place the speaker in its cavity and screw down the retainer.

:::tip 📝 NOTE:
The wires should be wrapped around the retainer for strain control.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/20.png"
  width="60%"
  caption="Speaker attached to the Lid"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/21.png"
  width="60%"
  caption="Speaker retainer attached"
/>

### Assemble Full Enclosure

1.  Plug in the FPC cable to the microphone module and speaker connector to RAK18060.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/23.png"
  width="60%"
  caption="Cable connected from lid to bottom enclosure"
/>

2.  Close up the case and screw it together.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/24.png"
  width="60%"
  caption="Voice Kit assembled inside enclosure"
/>

## M8 GPIO Cable

During development, the USB cable can provide power to all the modules. However, after development, you can also power everything using the M8 connector, while having the option to utilize the unused connections for GPIO to control or communicate with an external device.

### M8 Pinout

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/m8.png"
  width="35%"
  caption="M8 Pinout with labels"
/>

| Pin | Wire Color on Breakout Cable | Usage                                                |
| --- | ---------------------------- | ---------------------------------------------------- |
| 1   | Black                        | Ground                                               |
| 2   | White                        | GPIO #1 (Can be used as needed for user application) |
| 3   | Green                        | GPIO #2 (Can be used as needed for user application) |
| 4   | Black                        | GPIO #3 (Can be used as needed for user application) |
| 5   | Black                        | Power (See power supply in the next section)         |

### Power Supply

If you are using the power over the M8 connector to power the Base board and/or amplifier board, follow these voltage requirements:

| M8 Power Configuration       | Allowable Voltage Range | Notes                                                                                                             |
| ---------------------------- | ----------------------- | ----------------------------------------------------------------------------------------------------------------- |
| Base Board only              | 4 – 5.5&nbsp;V          |                                                                                                                   |
| Amplifier Board only         | 2.9 – 5.5&nbsp;V        | A higher voltage within the range is preferred as the amplifier will be able to provide more power to the speaker |
| Base Board & Amplifier Board | 4 – 5.5&nbsp;V          | A higher voltage within the range is preferred as the amplifier will be able to provide more power to the speaker |

Make sure you have the correct solder blob on your amplifier board for your choice of power source.

:::tip 📝 NOTE:
See the documentation of [RAK18060/61](/Product-Categories/WisBlock/RAK18060/Overview/) for further information on the amplifier module power requirements.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/25.png"
  width="80%"
  caption="Amplifier board section of power source"
/>

## Software Set-up
:::tip How Voice Recognition is Done
With the example code, the audio from the microphone is routed to the DSP module (via the Interposer module). The DSP module then cleans up the audio and runs it through the Cyberon software which generates an interrupt when a trigger word is heard. The WisBlock Core accepts the interrupt and queries the DSP to determine what trigger or command was said.
:::

You will need to install the Arduino IDE and then install [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) to set up your Arduino IDE to program the WisBlock Core (RAK11200, RAK4631, or RAK11310). Once you have the BSP installed, you will also need to install the [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library).

1.  Install the RAKwireless Arduino BSP for WisBlock by using the `https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json` board installation package json link. Follow the instructions on the RAKwireless Arduino BSP repository. The WisBlock Core should now be available on the Arduino IDE.

2.  You need to select first the WisBlock Core you have (RAK4631, RAK11200, or RAK11300), as shown in the figures below.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/26.png"
  width="100%"
  caption="WisBlock Core Selection"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/27.png"
  width="100%"
  caption="WisBlock Core Selection"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/28.png"
  width="100%"
  caption="WisBlock Core Selection"
/>

3.  Install the RAKwireless Audio Library by adding the following line to a sketch.

`http://librarymanager/All#RAKwireless-Audio-library`

Click the link you just added to the sketch and install the latest version of the Library.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/29.png"
  width="100%"
  caption="WisBlock Audio Library"
/>

### Example Code

For this tutorial, we will be using the **DSPG_Playback** example. If you are using the Kit without the speaker and amplifier module, you can use the **VoiceRecogntion_DSPG** example which is almost identical with the audio playback removed.

1.  From the RAKwireless Audio Library, open up the **DSPG_Playback** example for the core you are using.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/30.png"
  width="100%"
  caption="DSPG_Playback example"
/>

2.  You can now select the right serial port.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/31.png"
  width="100%"
  caption="Selection of Port"
/>

3.  Compile and upload your code.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/32.png"
  width="100%"
  caption="Upload and compilation"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/33.png"
  width="100%"
  caption="Upload and compilation"
/>

4.  When you have successfully uploaded the example sketch, open the Serial Monitor of the Arduino IDE to see the logs. Depending on the WisBlock Core, you may need to press the reset button to show the output.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/34.png"
  width="100%"
  caption="Open Serial Monitor"
/>

5.  On the Serial Monitor, you can see the available Trigger words and Commands.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/35.png"
  width="100%"
  caption="Trigger Words and Command"
/>

6.  When you say the Trigger word then followed with a command, you will see them appear on the Serial Monitor along with a “bing” from the speaker after the Trigger word.

<rk-img
  src="/assets/images/knowledge-hub/learn/voice-recognition-device-using-wisblock-audio/36.png"
  width="100%"
  caption="WisBlock Audioo Modules"
/>

### Updating for your Application
To update the application to perform an action based on the Trigger and Commands, you can add your own code to the loop function:

```c
void loop()
{
  if (int_flag == 1)
  {
    trigger_count++;
    Serial.printf("***************** %d\r\n", trigger_count);
    uint16_t pin_state = DSPG_USER.readIoState();   //this is necessary to read IO expander register
    //    Serial.printf("pinstate:%04X\r\n", pin_state);
    DSPG_USER.eventCallBack(cmd_string, &cmd_id);
    Serial.printf("CMD ID: %d\r\n", cmd_id);
    Serial.println(cmd_string);
    // ******************************************
    // User code here to perform any other required tasks based on
    // the Command ID
    // ******************************************
    led_state = !led_state;
    timerAlarmEnable(blinkTimer);
//    digitalWrite(LED_BLUE, led_state);
    digitalWrite(LED_GREEN, led_state);
    int id_case = cmd_id;
    xQueueSend(integerQueue, &id_case, portMAX_DELAY);
    int_flag = 0; //clear the interrupt flag
  }
}

```
