---
sidebar: false
rak_img: /assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/wisblock-edgeimpulse.jpg
rak_desc: This tutorial will show you how to set up and connect your WisBlock to Edge Impulse, which includes but is not limited to RAK11310, RAK4631, and RAK11200.
tags:
  - Tutorial
  - WisBlock
header:
  title: Getting Started with WisBlock and Edge Impulse
  caption: by <b>Christopher Mendez Martinez</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 05/08/2022 3:30 PM
next: ../Getting-Started-with-WisBlock-and-Edge-Impulse/RAK11200-Edge-Impulse-Guide/
---


# Getting Started with WisBlock and Edge Impulse

WisBlock is a modular system that makes it easy to implement edge IoT solutions. It is your ally from rapid prototyping to mass production without the need to create new hardware modules for each step. 

WisBlock ecosystem lets you decide on several core options as the RAK11200 (ESP32), RAK4631 (nRF52840), and the RAK11310 (RP2040), to develop your TinyML project alongside the largest variety of sensors in the market, from PDM microphones for audio recognition to motion sensors for movement models and many more. 

A starter kit is available in the [RAK store](https://store.rakwireless.com/products/wisblock-starter-kit?variant=41786596720838).

## Setting Up Your Development Board

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/development-board.png"
  width="80%"
  caption="WisBlock Ecosystem"
/>

The minimum hardware you will need to start developing with WisBlock and Edge Impulse are as follows:

- [WisBlock Base](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)
- WisBlock [RAK11200 (ESP32)](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK11310 (RP2040)](https://store.rakwireless.com/collections/wisblock-core/products/rak11310-wisblock-lpwan-module?utm_source=RAK11310WisBlockCoreModule&utm_medium=Document&utm_campaign=BuyFromStore) core
- [RAK1904 3-Axis Acceleration Sensor (LIS3DH)](https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK18000 PDM Microphone](https://store.rakwireless.com/products/wisblock-microphone-module-rak18000?utm_source=WisBlockRAK18000&utm_medium=Document&utm_campaign=BuyFromStore)


![product-table.png](/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/product-table.png)

### Installing Dependencies

To set WisBlock up in Edge Impulse, you will need to install the following software:

- [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)
- [Arduino IDE](https://www.arduino.cc/en/software)
- [Visual Studio Code](https://code.visualstudio.com/)

### Uploading Data to Edge Impulse

Once you have the software already installed, it’s time to start creating your dataset. 

<b> Select the core you are using: </b>

- [RAK11200 (ESP32)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK11200-Edge-Impulse-Guide/#rak11200-edge-impulse-guide)
- [RAK11310 (RP2040)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK11310-Edge-Impulse-Guide/#rak11310-edge-impulse-guide)
- [RAK4631 (nRF52840)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK4631-Edge-Impulse-Guide/#rak4631-edge-impulse-guide)


### Deploying the Trained Model Locally

Once your dataset is created and your model is trained, it’s time to deploy it back to your WisBlock.

<b> Select the core you are using: </b>

- [RAK11200 (ESP32)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK11200-Edge-Impulse-Guide/#rak11200-trained-model-deployment)
- [RAK11310 (RP2040)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK11310-Edge-Impulse-Guide/#rak11310-trained-model-deployment)
- [RAK4631 (nRF52840)](/Knowledge-Hub/Learn/Getting-Started-with-WisBlock-and-Edge-Impulse/RAK4631-Edge-Impulse-Guide/#rak4631-trained-model-deployment)



