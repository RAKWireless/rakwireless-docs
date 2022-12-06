---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/how-to-extend-battery-of-your-iot-device/overview.jpg
rak_desc: A brief discussion on how to maximize the battery life of your IoT device.
tags:
  - Tutorial
header:
  title: How LoRa Can Help You Save The Battery Life of Your IoT Device
  caption: by <b>Sam Domingo</b>
  img: /assets/images/knowledge-hub/banners/how-lora-can-help-you-save-the-battery-life-of-your-iot-device.jpg
posted: 01/08/2019 10:30 AM
author:
  name: Sam Domingo
  about: Sam is the technical and marketing content writer for RAKwireless. Her passion for writing that manifested in her playwriting and poetry now flows into her in-depth coverage of the IoT community.
  img: /assets/images/knowledge-hub/authors/sam-domingo.jpg
---

# How LoRa Can Help You Save The Battery Life of Your IoT Device

In this technology-driven era, the adoption of the internet of things, IoT is on the increase. According to forecasts, by 2022, the total spending in IoT technologies will be about $2.5 trillion.

Additionally, the estimate of the total number of devices is in the billions. This is not surprising, seeing that there are a billion connected devices already.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-extend-battery-of-your-iot-device/saving-tip.jpeg"
/>

Besides, many more will be deployed in difficult situations to cater to challenging and expensive cases. It therefore becomes critical that developers and system integrators leverage every measure to provide technology that will help these devices operate optimally and more importantly, prolong the life of these IoT devices.

With LoRa, this is easily achievable especially when future-proof designs are factored into the process.

## LoRa with RAKwireless

A great way to extend the life of IoT devices is with LoRa. In essence, RAKwireless LoRa resonates with how the business case for any IoT device is cool if it comes at low cost, has efficient and consistent operation for years, and can effortlessly connect to the cloud from a distance. LoRa is undoubtedly an ideal interface for IoT applications.

## How to Use LoRa Technology and LoRaWAN

The LoRaWAN is built on LoRa wireless RF. The benefits offered are: low-cost, mobility and long range. Also, LoRa is suitable for IoT for deep indoor penetration and energy-efficiency.

Specifically dedicated to use cases of IoT, LoRa allows for cost efficient deployments and operations for private or public networks. RAKwireless designs LoRa specially to reduce power consumption, which consequently extends the battery lifetime of connected devices up to 10+ years.

Simply, LoRa means "Long Range". LoRa is a radio communication technology which RAKWireless deploys for transmission of messages. Think of this as the physical layer in the OSI Network Stack.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-extend-battery-of-your-iot-device/lora.png"
/>

It is prominently known for low power usage and long range. When a device runs off a small and cheap battery, it lasts just a few months or years because the vast majority of its time is spent powered down.

A lot of times, this could be attributed to the device manufacturer's impact in terms of design. In other words, failure of the manufacturer to put up a good design, and proper software writing such that the device goes into a low power state when inactive contributes to the destruction of the device’s battery life in the long run.

In addition, the data being sent and the strength of the radio signal are equally responsible for the malfunction of the device. Ideally, the data format should be fixed by the device manufacturer or it is something you should be able to design yourself.

LoRaWAN, which functions exactly like Wi-Fi uses the unlicensed band to cover a wider range of network options. Additionally, it provides a highly secure dual encryption model which offers safety data during transfer. Thus, LoRaWAN perfectly complements the networking technologies and its long range.

## Characteristics of LPWAN

<rk-img
  src="/assets/images/knowledge-hub/tutorials/how-to-extend-battery-of-your-iot-device/lpwan.png"
/>

According to statistics, the Low Power Wide Area (LPWAN) IoT offers low power consumption, low cost, high positioning, high data rate and emerging standards. This is achievable with LoRa.

<b>Some key characteristics of LPWAN are;</b>
* Long battery life: More than 10 years
* Low cost chipsets and networks
* Limited data communication throughput capacity

## How to make the battery last longer

There are some tips on how you can save the battery life of your IoT device with LoRa. These include, but are not limited to;

<b>Send small amounts of data</b>

When the device is made to send small data payload, it means it needs to be powered up for less time. While it is correct that LoRa assures lower power usage, transmitting data consumes power. Besides, many LoRa sensor devices come with a radio chip and separate micro-controller.

These two use power. But when less data is being sent, it takes less time, and this equals less usage of power. Sending data must be done in a way that the minimum amount possible is sent. This can be achieved by cleverly encoding your data.

<b>Send messages less frequently</b>

Sending messages less frequently means the device is operating in its low power for a longer period. This translates to saving some power, and better battery life. It can however be tempting to make the sensor send back data every sixty (60) seconds, but this is really not necessary.

Taking a reading in an interval of five minutes is a waste of energy. Your battery will last up to 10 times as long which could be the distinguishing factor between changing it bi-monthly or bi-annually.

<b>Keep LoRa Spreading Factor very low</b>

What does the spreading factor in LoRa mean? Simply, it is the length of the "chirps" sent over the air during data transmission. For longer "chirps", they will take a longer amount of time to transmit but their reception will cover a longer distance.

The spreading factor is from 7 to 12. For every step up, the transmit time increases by a factor of 2. The impact of higher spreading factors on battery life cannot be taken lightly. Using the SF12 consumes more time when compared to the SF7.

Therefore, it is pertinent that you use the lowest spreading factor. The way this works is ultimately dependent on the implementation of the network server.

## Conclusion

Extending the life of an IoT device transcends using the correct battery. The lifetime of the device is affected by the power usage and the efficiency of the power the device is using.

Ideally, the data transmission in IoT device is kept to the barest minimum in order to conserve power. Additionally, because LoRa and LoraWAN are of the non-cellular LPWAN wireless communication network category; the fundamental function of the LoRa is that it serves as the physical player, which hosts the communication protocol.

Unlike other sensors that might be transmitting data constantly, a LoRa-based sensor will act on and determine if the input has gotten to the necessary threshold, and is just transmitting a data packet when it must.

When data packet is transmitted to a gateway, the device automatically returns to sleep mode. In sleep mode, the energy use is at its lowest level.

<rk-author />