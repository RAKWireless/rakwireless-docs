---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/How-s-your-heart--Creating-a-Pulse-Oximeter-Sensor-with-WisBlock.jpg
rak_desc: A brief guide on creating a health monitoring tool using the RAK WisBlock product such as RAK5005-O, RAK4631, and RAK12012.
tags:
  - Tutorial
  - WisBlock
  - Pulse Oximeter Sensor
  - RAK5005-O
  - RAK4631
  - RAK12012
header:
  title: How to Create a Pulse Oximeter Sensor Using WisBlock
  caption: by <b>Anthony Aldrin Beltran</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 18/01/2022 2:30 PM
---

# How to Create a Pulse Oximeter Sensor Using WisBlock

In this time of the pandemic, especially with our response in treating and monitoring the infections caused by the Coronavirus Disease (COVID-19), it is important to have the right assessment of your health.

A Pulse Oximeter Sensor is one of the most used tools in health monitoring. In this guide, you will create a Pulse Oximeter Sensor with WisBlock, which can help you to have easy access to health monitoring tools. You may also create a health kiosk with this Pulse Oximeter Sensor with the WisBlock platform.

<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\1.pulse-oximeter-sensor.png"
  width="70%"
  caption="Pulse Oximeter Sensor using WisBlock Platform"
/>


According to Ridgmount Practices’ Website, an ideal oxygen level is between 96% and 99%, and an ideal heart rate is between 50 and 90 beats per minute (bpm).

The table below shows the ranges and classification of Blood Oxygen Level and Heart Rate.


| Observation                | Blood Oxygen Level | Heart Rate (BPM) |
| -------------------------- | ------------------ | ---------------- |
| Normal Reading             | 96% or more        | 40-100           |
| Acceptable                 | 95%                | 101-109          |
| Seek Advice                | 93%-94%            | 110-130          |
| Need Urgent Medical Advice | 92% or less        | 131 or more      |


## What Do You Need?

Here are the parts and materials neede in creating your Pulse Oximeter Sensor with WisBlock:

- [RAK5005-O WisBlock Base Board](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Overview/)
- [RAK4631 WisBlock Module for LoRaWAN](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Overview/)
- [RAK12012 WisBlock Heart Rate Sensor Module](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK12012/Overview/)
- Alphanumeric LCD with I2C interface
- Jumper Wire Female to Male
- Micro USB cable
- 2.54&nbsp;mm Single Row Male Header Connector 4 pins
- 2.54&nbsp;mm Single Row Female Header Jumper Cable 4 pins
- Screws
- Arduino IDE

## Pulse Oximeter Sensor Using WisBlock


1. Gather the listed parts and materials below in creating the Pulse Oximeter Sensor using WisBlock

<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\2.parts-needed.png"
  width="100%"
  caption="Parts needed"
/>


2. Connect the RAK4631 to the CPU slot and solder a 4pin female header connector to J12 then attach the RAK12012 to IO Slot.


<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\3.connect-rak4631.png"
  width="70%"
  caption="RAK4631 and CPU slot connection"
/>

3. Fix all the screws in the RAK5005-O for a secured connection.


<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\4.fix-screws.gif"
  width="50%"
  caption="Fix all the screws"
/>



4. With WisBlock Base exposed pins, connect the LCD 2x16 I2C Module with the following pin configurations.

<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\5.connect-lcd.png"
  width="90%"
  caption="LCD 2x16 I2C Module configurations"
/>


5. Download the code of the [RAK12012 MAX30105 LCD I2C](https://drive.google.com/drive/folders/1VB6nxWG9FcTTPRD_kC5N0_pySgqrSm15?usp=sharing)), and then open it using Arduino IDE.

6. After that, install the [RAKwireless WisBlock Core](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) modules for the Arduino Board manager. Follow the instructions provided in the mentioned tutorial for proper installation.

7. After installing, you should click the URL, as seen in **Figure 6**, to install the library for Pulse Oximeter Sensor.

<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\6.pulse-oximeter-sensor-library.png"
  width="80%"
  caption="Pulse Oximeter Sensor library installation"
/>



8. On the Arduino IDE, go to **Sketch** > **Include Library** > **Manage Libraries**. The Library Manager should open, then install the LiquidCrystal I2C (opens new window) library, as shown in **Figure 7**.


<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\7.install-liquidcrystal.png"
  width="80%"
  caption="Install LiquidCrystal I2C"
/>

9. After completing all the requirements, check the code by compiling it and then upload the code in the RAK4631 WisBlock module for LoRaWAN. After successfully uploading, you may now see the Pulse Oximeter Sensor using the WisBlock platform.


<rk-img
  src="\assets\images\knowledge-hub\tutorials\how-to-create-a-pulse-oximeter-sensor-using-wisblock\8.compile-code.png"
  width="70%"
  caption="Compile and upload the code"
/>



