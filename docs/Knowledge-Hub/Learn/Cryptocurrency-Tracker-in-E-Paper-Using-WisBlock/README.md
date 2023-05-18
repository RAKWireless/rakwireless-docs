---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/cryptocurrency-with-wisblock/crypto-tracker.png
rak_desc: A guide on how to build a cryptocurrency tracker with WisBlock.
tags:
  - Tutorial
  - WisBlock
  - Cryptocurrency
  - RAK11200
  - RAK14000
  - RAK5005-O
header:
  title: Cryptocurrency Tracker in E-Paper Using WisBlock
  caption: by <b>Carl Rowan</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 08/10/2021 5:40 PM
---

# Cryptocurrency Tracker in E-Paper Using WisBlock

If you are interested in cryptocurrency or decentralized applications, this WisBlock project is for you. This project displays the most recent cryptocurrency values for three popular cryptocurrencies. It monitors three different cryptocurrencies: Bitcoin (BTC), Ethereum (ETH), and Helium (HNT). It draws data from the Coingecko API and shows US dollar and Euro values. It also displays the percentage change in the cryptocurrency's value over the last 24 hours.

This project requires a RAK11200 as the WisBlock Core, which can connect to WiFi. The RAK11200 is based on the ESP32. It will connect to the internet via WiFi and then retrieve the most recent values using the Coingecko API.

To display the data, you must use the WisBlock RAK14000 E-Ink (E-Paper) Module. This display module is very low-power, making it ideal for IoT projects that are battery-powered or for projects that are running continuously for 24 hours. The RAK14000 also has three push-button membrane switches that can be used to toggle through the specific cryptocurrency you want to see the current value of.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/cryptocurrency-with-wisblock/1.rak14000-wisblock-epd-module.png" width="80%">
</p>

A WisBlock Base Board with an IO slot is required in addition to the RAK11200 (WisBlock Core) and RAK14000 (WisBlock E-Ink/E-Paper). In this project, RAK5005-O will be used.

## Prerequisites

### Hardware

- **WisBlock Core**: [RAK11200](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore)
- **WisBlock Base**: [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore)
- **WisBlock Display**: [RAK14000](https://store.rakwireless.com/products/wisblock-epd-module-rak14000?utm_source=WisBlockRAK14000&utm_medium=Document&utm_campaign=BuyFromStore)

## How to Build This Project

1. Install the RAKwireless ESP32 BSP for the RAK11200. The full instructions can be found in the module's [quick start guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#install-rakwireless-esp32-bsp-on-arduino-boards-manager).

2. Test your setup to see if all is working by running the sample code for RAK14000 on the RAK11200 WisBlock Core. By doing this test, you can be sure that your hardware is in tip-top shape.

The complete guide for running the sample sketch is detailed in [RAK14000 quick start guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK14000/Quickstart/#rak14000-in-rak11200-wisblock-core-guide).

:::tip 📝 NOTE
Before doing any firmware upload with the RAK11200, make sure to press the reset button first while the BOOT0 pin is shorted. If you don't do this, your upload will fail.

For more details, you can refer to the [RAK11200 quick start guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<p align="center">
<img src="/assets/images/knowledge-hub/learn/cryptocurrency-with-wisblock/2.force-esp32-download-mode.png" width="60%">
</p>


3. You can now run the Cryptocurrency Tracker sketch on your RAK11200. You can get the source code from the [WisBlock GitHub repository](https://github.com/RAKWireless/WisBlock/blob/master/tutorials/RAK11200_Crypto_Tracker/RAK11200_Crypto_Tracker.ino). Make sure to update the SSDI and password on your sketch to establish the WiFi connection.

If you uploaded the Cryptocurrency Tracker sketch successfully, you should see WisBlock Crypto Tracker at the start (some kind of splash screen).

Then, in less than a minute, it will show BTC as the default coin selected.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/cryptocurrency-with-wisblock/3.crypto-tracker.png" width="80%">
</p>


The three buttons represent BTC, ETH, and HNT, respectively. You can select which coin you want to see by pressing the button. Every minute, the selected coin's value will be updated, and you can adjust the update interval to your liking.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/cryptocurrency-with-wisblock/4.eth-hnt.png" width="80%">
</p>


That concludes this crypto-related project! You can improve this project by adding more features, such as a buzzer for alerts, and additional integrations, such as email, for example. You can even add more cryptocurrencies and currencies besides USD and EUR. With the release of more WisBlock modules, the possibilities for IoT applications are truly limitless!