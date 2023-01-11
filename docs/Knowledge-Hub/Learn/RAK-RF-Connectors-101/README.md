---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A short explanatory piece about the RF connectors used in RAK's devices. Have a look and use it as a reference when making decisions about your antenna choice.
tags:
  - Tutorial
  - Antennas
  - RP SMA
  - SMA
header:
  title: RAK Antenna RF Connectors 101
  caption: by <b>Denitsa Prodanova</b>
  img: /assets/images/knowledge-hub/banners/rak5005-O-baseboard-installation-guide.jpg
posted: 16/04/2021 9:43 AM
author:
  name: Denitsa Prodanova
  about: Denitsa is a Technical Graphics and Documentation Editor at RAKwireless. She is passionate about the arts and believes technology and art go hand in hand.
  img: /assets/images/knowledge-hub/authors/denitsa.png
---

# RAK Antenna RF Connectors 101

Antennas are a pretty important part of any IoT device. Anyone knows that and usually makes lengthy research about what antenna to get to ensure better performance. But there is one small and seemingly not so important part of the antenna, that sometimes gets neglected. An actually crucial part, that makes the connection of the antenna to the device – the RF connector!

We see an increased demand for antennas with big projects like Helium’s “People’s Network”, and the overall growing popularity of IoT, and we are making this small article to give some more information and clarification about our antenna connectors in particular.

**So, what is the RF connector?**

The coaxial Radio Frequency connector (RF connector) is an electrical connector designed to work at radio frequencies in the multi-megahertz range. RF connectors are usually used with coaxial cables. They are designed to maintain the shielding that the coaxial design offers. The better and newer ones minimize the change in transmission line impedance at the connection so signal reflection and power loss are reduced (this means they have lower insertion loss). The RF connector must not allow external signals into the circuit through electromagnetic interference and capacitive pickup.

Common types of RF connectors are Type-N, UHF, TNC, BNC, SMA, and they are used for many things such as radios, surge protectors, enclosures, coaxial cables, and antennas.


## Polarity and Gender

Trying to identify male and female connectors, can be tricky. It is helpful to be aware of some basics:
- Typically, RF plugs are male, and the threads are on the inside of the shell.
- Typically, RF jacks are female, and the threads are on the outside of the shell.
- The shell of a jack (female) typically goes on the inside of the shell of a plug (male).

As for polarity, have in mind that:

- Both plug and jack you are trying to mate must have the same polarity.
- In standard polarity, the female jack has a socket in the center designed to receive the pin from the male plug.
- In reverse polarity, the pin is in the female jack and the socket in the male plug.

Our antennas and devices, depending on the environment (indoor or outdoor), use 3 types of connectors and we will illustrate them below.


### N Connectors

The Type N connector is a threaded, weatherproof, medium-sized connector for durable applications that can easily handle frequencies up to 11 GHz. This type of connector follows MIL-STD-348 and is widely used in lower frequency microwave systems where ruggedness and low cost are needed. Here at RAK, we use the standard polarity N connector for our outdoor solutions, giving the needed robustness to the link between antenna and gateway. All outdoor antennas and outdoor gateways from the WisGate Edge series use this type of connector.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rak-rf-connectors/ntype.png"
  width="60%"
  caption="N-Type Connectors"
/>

These connectors have the lowest insertion loss from the 3 types in this article. A good N-type connector in general will have less than 0.3 dB insertion loss. Some lesser brands could go up to 0.5dB.

As a rule of thumb when installing add 1dB loss to the link budget for every 2 connectors, for example on both ends of a cable.


### SMA Connectors

The SMA (SubMiniature version A) connectors are semi-precision coaxial RF connectors operating up to 18 GHz, though some proprietary versions are rated to 26.5 GHz. It is commonly used in RF power amplifiers, RF isolators, microwave systems, mobile telephone antennas, Wi-Fi antenna systems, and radio astronomy at 5 GHz+. It is mostly used in indoor solutions as it is not sufficiently weather-proof for outdoor deployments.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rak-rf-connectors/sma.png"
  width="70%"
  caption="SMA Connectors"
/>

These connectors have significantly higher insertion loss than the N-type connectors. For LoRa frequencies around the 800 to 900MHz band, 0.6 to 1dB is what one would expect.

As a rule of thumb when installing add 2dB loss to the link budget for every 2 connectors, for example on both ends of a cable.



### RP-SMA Connectors

The same as SMA but with reversed polarity. Reverse-polarity SMA (RP-SMA) is a variation of the SMA connector specification that reverses the gender of the interface. The term "reverse polarity" here refers only to the gender of the connector's contact pin, not in any way to the signal polarity. It is suitable for indoor solutions. All our indoor antennas, all gateways from the WisGate Developer series, the indoor gateway from the WisGate Edge series, and the famous RAK Hotspot use this type of connector.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rak-rf-connectors/rpsma.png"
  width="70%"
  caption="RP-SMA Connectors"
/>

For approximating the insertion loss see the SMA section.

For more detailed explanation about losses refer to [this](https://www.hamradio.me/connectors/uhf-connector-test-results.html?fbclid=IwAR0VV-TMbFf0NLpzMBGqLdtIv8oYPKSeJYVhBZ7hqUCzrd12cCep1gzb4uE) article from Ham Radio.

To ensure you will get the right antenna for your device, just have those references in mind!

<rk-author />