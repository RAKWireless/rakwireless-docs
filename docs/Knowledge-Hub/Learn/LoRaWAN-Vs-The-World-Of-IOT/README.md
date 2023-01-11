---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/overview.png
rak_desc: A detailed comparison between LoRaWAN and the different IoT protocols using S.W.O.T. Analysis.
tags:
  - Tutorial
  - IoT
  - LoRaWAN
  - SWOT
  - Zigbee
  - WiFi
  - Bluetooth Low Energy
  - BLE
  - NB-IoT
header:
  title: LoRaWAN vs. The World of IoT!
  caption: by <b>Vladislav Yordanov</b>
  img: /assets/images/knowledge-hub/banners/lorawan-vs-the-world-of-iot.jpg
posted: 01/11/2019 10:30 AM
author:
  name: Vladislav Yordanov
  about: CCO of RAKwireless, Co-founder and CEO of IoT4Green. I believe technology can be the solution to most issues human kind is facing.
  img: /assets/images/knowledge-hub/authors/vladislav-yordanov.jpg
---

# LoRaWAN vs. The World of IoT!

You know (or you will know after reading this) that there are not 1 or 2 technologies and protocols in the Internet of Things. They all have their strengths and weaknesses and today we will discuss that for the main players in the game.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/swot-analysis.jpg"
/>

To not waste too much time in rambling about every protocol's functions we will use the nifty and smart S.W.O.T. analysis system. S.W.O.T. like in <b>S</b>trengths, <b>W</b>eaknesses, <b>O</b>pportunities, and <b>T</b>hreads, right? Right.

Refer to the image on the above to get an idea on how SWOT looks like. It is that simple.

So, let us start going through some of the potential contenders in the IoT arena. Naturally they all have their distinct advantages and disadvantages, thus there is no panacea for the ailments of IoT deployments. The good news is some are better than others and LoRaWAN in particular is the champ in a number of areas, so read on to get a better understanding.

## Zigbee

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/zigbee.jpg"
/>

Now, let us start with [Zigbee](https://zigbee.org/). If you’re using any smart home technology, there’s a good chance it runs on Zigbee. A wireless communication protocol designed to underpin everything from thermostats to lightbulbs. Zigbee was introduced by the Zigbee Alliance, a group that includes Amazon, Samsung, Huawei, [Qualcomm](https://www.qualcomm.com/), and Toshiba, not to mention many of the other biggest companies in the home appliances sector and energy and consumer technology industries. More importantly, it’s fast becoming the standard wireless protocol that smart home devices use to communicate. Plus it has been around for some time, so some of the initial issues that plague every technology have already been cleared and it is now stable and robust.

_**The little table here will show us what is good and what is not so good about Zigbee**_:

|
- It uses less power than Wi-Fi (its main competitor) <br> - It’s designed to support hundreds of devices on a network. |  - You could use bidirectional command-and-control functionality, but to work appropriately, network density would need to be high. <br> - The network is not available everywhere (not a public network in any means).  |
| ------ | ------------ |
| - **You can use a wide range of devices from different manufacturers without needing a specific hub for each (interoperability is good).** | - **Something that can cause problems is all your devices running over the same 2.4GHz wireless band.** |

LoRa is the better option if you need true bidirectionality because of the symmetric link. Better command-and-control functionality. You can set up and manage your own network. The open standard has the potential to be flexible because it’s not going to be driven by a specific company.

## WiFi

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/wifi.png"
/>

Next, we will discuss Wi-Fi. Pretty much everyone knows what Wi-Fi is. Wi-Fi is a family of [radio technologies](https://en.wikipedia.org/wiki/Radio) commonly used for [wireless local area networking](https://en.wikipedia.org/wiki/Wireless_LAN) (WLAN) of devices. It is based on the [IEEE 802.11](https://en.wikipedia.org/wiki/IEEE_802.11) family of standards. We will not delve deep in its many variations, simply examine what its core functionalities are.

_**Here are the strengths and weaknesses of Wi-Fi in light of its newest standard**_:

|- It works directly with a router and doesn’t need a special hub. Nowadays there isn’t a single household in developed countries that lacks one.| - Uses a lot of power. <br> - Having too many devices on a single home network isn’t always such a great idea for performance or stability. <br> - Range can also be an issue across larger areas.|
| ------ | ------------ |
| - **At close range, some versions of Wi-Fi, running on suitable hardware, can achieve speeds of over 1 Gbit/s. The only solution where High Speed data is a must.** | - **It is potentially more vulnerable to attack than wired networks because anyone within range of a network with a wireless network interface controller can attempt access.** |

WiFi doesn't really classify in the race between IoT technologies.  LoRa and the others are far more superior with its low power consumption and wider area network.

## How about Bluetooth Low Energy (BLE)?

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/ble.png"
/>

It is a version of Bluetooth designed for lower-powered devices that use less data. To conserve power, BLE remains in sleep mode except when a connection is initiated. This makes it ideal for wearable fitness trackers and health monitors. Bluetooth itself if wildly known as of its uses so let us quickly do a SWOT analysis on BLE:

|- Consuming extremely low amounts of power. <br> - Remains in sleep mode constantly except for when a connection is initiated. <br> - One of the most compatible options for IoT.| - If it is used more frequently the power consumption and battery life drops drastically. <br> - Short-range wireless connectivity. <br> - Without backhaul there is lack of two-way communication |
| ------ | ------------ |
| - **It is used for applications that do not need to exchange large amounts of data.** | - **Pretty much none.** |

[LoRa](https://lora-alliance.org/about-lorawan), often referred to as a low-power wide-area-network (LPWAN), provides secure, bidirectional data transfer and communications with IoT networks over long distances for years without a battery change. It can send and receive signals up to 10 miles, and that distance can extend to hundreds of miles with repeaters, if needed. LoRa works well as a complement for BLE in battery-powered networks of IoT devices because it can operate for an extended time on a battery and requires very infrequent maintenance — just like BLE. They are a great team actually.

## Narrowband Internet of Things

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/nb-iot.png"
/>

(NB-IoT) is a Low Power Wide Area Network ([LPWAN](https://en.m.wikipedia.org/wiki/LPWAN)) [radio technology](https://en.m.wikipedia.org/wiki/Radio_technology) standard developed by [3GPP](https://en.m.wikipedia.org/wiki/3GPP) to enable a wide range of cellular devices and services. The specification was frozen in [3GPP Release 13](https://en.m.wikipedia.org/wiki/3GPP#Standards) ([LTE Advanced Pro](https://en.m.wikipedia.org/wiki/LTE_Advanced_Pro)), in June 2016. Other 3GPP [IoT](https://en.m.wikipedia.org/wiki/Internet_of_things) technologies include [eMTC](https://en.m.wikipedia.org/wiki/EMTC)(enhanced Machine-Type Communication) and EC-GSM-IoT.

NB-IoT focuses specifically on indoor coverage, low cost, long battery life, and high connection density. NB-IoT uses a subset of the [LTE](https://en.m.wikipedia.org/wiki/LTE_(telecommunication)) standard, but limits the bandwidth to a single narrow-band of 200kHz. It uses [OFDM](https://en.m.wikipedia.org/wiki/OFDM) modulation for downlink communication and [SC-FDMA](https://en.m.wikipedia.org/wiki/SC-FDMA) for uplink communications.

|- Uses the existing cellular network infrastructure. <br> - Great range.| - Expensive end-user hardware. <br> - Not suitable for small scale deployment |
| ------ | ------------ |
| - **Perfect for deployment in dense urban environments** <br> - **One of the main solutions for smart cities** | - **Expensive due to subscription costs.** <br>- **Not suitable for suburban deployment (farms).** |

Many technology articles compare LoRA and NB-IoT technologies as if they were battling it out for dominance in the IoT market. In reality, these technologies are two branches within an emerging technology ecosystem. Similar to WiFi and Bluetooth, they will most likely to diverge into different niches, rather than directly compete with each other. LoRa and NB-IoT both operate within LPWAN technology. They are two major standards for low-power IoT devices.

<b>Both LoRa and NB-IoT standards</b> were developed to improve security, power efficiency, and interoperability for IoT devices. Each features bidirectional communication (meaning the network can send data to the IoT device, and the IoT device can send data back), and both are designed to scale well, from a few devices to millions of devices. But overall the target group of users seems to be different, hence their differences may be strengths or weaknesses, depending on the point of view.

:::tip 📝 NOTE
After all, it turns out that there is not much battle here. Every product is suitable for something different and the choice depends entirely on the users' needs. To top it off, here is a quick diagram to show it simpler, where the ***green is the better choice***:
:::

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-vs-the-world-of-iot/comparison-table.png"
/>

<rk-author />