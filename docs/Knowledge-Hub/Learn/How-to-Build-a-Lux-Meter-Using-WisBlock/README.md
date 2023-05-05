---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/lux-meter-using-wisblock/lux-meter.png
rak_desc: A step-by-step guide on how to build a lux meter using WisBlock.
tags:
  - Lux Meter
  - Light Meter
  - WisBlock
  - RAK5005-O
  - RAK4631
  - RAK1903
  - RAK1921
  - Tutorial
header:
  title: How to Build a Lux Meter Using WisBlock
  caption: by <b>Rally Uminga</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 07/12/2021 09:00 PM
---

# How to Build a Lux Meter Using WisBlock

## Overview

Good lighting in our working areas is crucial since it affects our productivity and safety concerns. The benefit of adequate light levels is to prevent eye strain which allows you to work efficiently and comfortably for longer periods. This article will guide you how to build a lux meter using the [WisBlock](https://www.rakwireless.com/en-us/company/wisblock-series) platform to measure light levels of your workplaces.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/lux-meter-with-wisblock.png" width="80%">
</p>

Based on the [Engineering ToolBox site](https://www.engineeringtoolbox.com/light-level-rooms-d_708.html), the table below shows the recommended light levels for various locations.

<b>Recommended Luminous Intensity for Common Work Areas</b>

|**Work Areas**          |**Luminous Intensity (lumen/m<sup>2</sup>)**|
|------------------------|--------------------------------------------|
|Homes and warehouses    |150                                         |
|Common office work area |250                                         |
|Classrooms              |300                                         |
|Common office work      |500                                         |
|Common drawing areas    |1000                                        |

## Prerequisites
### Hardware

To build this lux meter, you need the following:

- [RAK5005-O WisBlock Base Board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Overview/)
- [RAK4631 nRF52840 SX1262 Module for LoRaWAN](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Overview/)
- [RAK1903 WisBlock Ambient Light Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1903/Overview/)
- [RAK1921 WisBlock OLED Display](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1921/Overview/)
- [RAKBox-B5 Transparent Acrylic Enclosure](https://store.rakwireless.com/products/rakbox-b5-transparent-acrylic-enclosure)
- Jumper Wire Female to Male
- Micro USB cable
- 2.54&nbsp;mm Single Row Male Header Connector 4 pins
- 2.54&nbsp;mm Single Row Female Header Connector 4 pins
- Screws

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/components.png" width="80%">
</p>

### Software

**Arduino IDE**

Follow the [installation guide of BSP](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) to set up your Arduino IDE to program WisBlock boards.

## Assembly

1. Connect the RAK4631 to the CPU slot and solder a 4-pin female header connector to J12 then attach the RAK1903 to slot A.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/assemble.png" width="80%">
</p>

1. Solder a 4-pin male header connector to RAK1921 OLED display. Make sure to cover the OLED display with a masking tape to prevent excess solder lead coming from the pins. The excess solder will damage the OLED display.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/solder.png" width="80%">
</p>

3. Attach the 4-pin male to female jumper wire to the RAK1921. Check the supply polarity pins so that the OLED display will not be destroyed.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/oled-display.png" width="80%">
</p>

4. Fix all the screws in the RAK5005-O and RAKBox-B5 acrylic enclosure. Put all the standoff screws so that the top acrylic enclosure will be secured.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/fix-screw.png" width="80%">
</p>

5. Secure the top part of RAKBox-B5 and put the RAK1921 wire assembly in the J12 of RAK5005-O.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/wire-assembly.png" width="80%">
</p>

6. Fasten all the standoff screws in RAKBox-B5 Transparent Acrylic Enclosure.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/standoff.png" width="80%">
</p>

## Setting Up Arduino IDE to Program the WisBlock Board

1. Download the code from the [WisBlock GitHub repo](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK4631_Light_Sensor_OLED_Screen).
2. Open it using Arduino IDE.
3. Install the RAKwireless Wisblock Core modules for the Arduino Board manager provided in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
4. Add all the libraries by clicking the link of OPT3001 and U8g2 in the Arduino code.
5. Check the code by compiling it and then upload the code in the RAK4631 nRF52840 SX1262 Module for LoRaWAN.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/libraries.png" width="100%">
</p>

You may now test your Lux Meter project to measure the light levels in your room or office to verify if it is adequate.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/lux-meter-using-wisblock/test-lux-meter.png" width="80%">
</p>
