---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/setup-components.png
rak_desc: A step-by-step guide on how to integrate RAK11200 WisBlock Core (which is based on ESP32) and with Google Assistant to control devices with voice commands.
tags:
  - Google Assistant
  - MQTT
  - WisBlock
  - Ubidots
  - Voice Command
  - RAK11200
  - RAK5005-O
  - RAK1906
  - RAK1301
  - Tutorial
header:
  title: WisBlock Integration to Ubidots Over MQTT and Voice Command Using Google Assistant
  caption: by <b>Christian Jay Mendoza</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 22/10/2021 09:00 PM
---

# WisBlock Integration to Ubidots Over MQTT and Voice Command Using Google Assistant

## Overview

You can monitor your home or office with our RAKwireless WisBlock modules using a web or mobile dashboard, add voice commands with Google Assistant for automation, and switch control to integrate your IoT (Internet of Things) easier.

## Hardware

You need the following to get started:

- [RAK11200 WisBlock Core](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore) Module for WiFi
- [RAK5005-O WisBlock Base](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK1906 WisBlock Environmental Sensor](https://store.rakwireless.com/products/rak1906-bme680-environment-sensor?utm_source=RAK1906&utm_medium=Document&utm_campaign=BuyFromStore) to measure temperature, humidity, pressure, & gas resistance
- [RAK13001 WisBlock Interface Relay IO Module](https://store.rakwireless.com/products/relay-io-rak13001?utm_source=RAK13001&utm_medium=Document&utm_campaign=BuyFromStore)
- Electrical Wires
- Light / AC Powered Devices

## Software

The following are also required to get started:

- [Ubidots Account](https://industrial.ubidots.com/accounts/signup_industrial/)
- [IFTTT Account](https://ifttt.com/join)
- [Google Assistant Account](https://assistant.google.com/)
- [Arduino IDE](https://www.arduino.cc/en/software)

## WisBlock Integration

### WisBlock Integration to Ubidots over MQTT

1. Setup the hardware components. The RGB LED strip was used as the load for our relay.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/rgb-led.png" width="80%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/assemble.png" width="100%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/led-strip-boards.png" width="80%">
</p>

2. Install the [RAKWireless ESP32 BSP](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#install-rakwireless-esp32-bsp-on-arduino-boards-manager) on Arduino Boards Manager.

3. Download and install the following libraries into your Arduino IDE:
   - PubSubClient
   - Ubidots ESP MQTT
   - Adafruit_BME680

4.  Before uploading codes to the RAK11200, short circuit **BOOT0** and **GND** pin and press the reset button. Make sure to do this so that your upload will not fail.

5. See [Uploading to WisBlock](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock) for a complete guide on Arduino Tools Configuration.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/short-ckt.png" width="60%">
</p>

6. Copy and upload the code from our [WisBlock GitHub repo](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK11200_Ubidots_pubsub) into your Arduino IDE.

:::tip 📝 NOTE:
- Input your WiFi credentials:

```c
const char *WIFI_SSID = "******";
const char *WIFI_PASS = "******";

```

- Input your Ubidots Default Token:
Refer to this guide [to find your Ubidots Default Token](https://help.ubidots.com/en/articles/590078-find-your-token-from-your-ubidots-account).

```c
const char *UBIDOTS_TOKEN = "******";
```
:::

7. Once you're done uploading the code, go and log in to your Ubidots account. It will automatically input the newly created device, its variables within the device, and sensor data.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/device-created.png" width="100%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/board-info.png" width="100%">
</p>

8. The relay variable has not been automatically inserted in Ubidots, and it is still missing. We need to manually add a variable for the relay:

   - Select the **Add Variable**.
   - Choose **Raw**.
   - Rename the added variable with **relay**.

9. Then, you can create your own dashboard where you can monitor the environment coming from the sensor. To create a dashboard, go to [Create Dashboards and Widgets](https://help.ubidots.com/en/articles/2400308-create-dashboards-and-widgets).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/dashboard.png" width="100%">
</p>

10. Set up an IFTTT to control your relay where the RGB LED strip is connected to your system via voice command using Google Assistant.

### WisBlock Integration to Google Assistant over IFTTT

1. After integrating your WisBlock with Ubidots, log in to your IFTTT account.
2. Select **Create** to create a new Applet.
3. Then click the **If This Add** icon.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/applets.png" width="60%">
</p>

4. Search and select **Google Assistant**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/google-assistant.png" width="60%">
</p>

5. Select the **Say a simple phrase**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/phrases.png" width="80%">
</p>

6. You need to fill the fields with the Google Assistant to switch the relay and turn our RGB LED light on.
For example:
- **What do you want to say?**: Turn on the led
- **What's another way to say it? (optional)**: Switch on the led
- **And another way? (optional)**: Lights on
- **What do you want the Assistant to say in response?**: Okay RAKstar! Turning on the led lights
- **Language**: English

Then, click **Create trigger**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/trigger.png" width="60%">
</p>

7. When the trigger is already set, create the action **Then That Add**.
8. Then, choose Webhooks as action service.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/service.png" width="60%">
</p>

9. Make a web request and fill the fields of the WebHooks setup with the following parameters:
- **URL**: `http://industrial.api.ubidots.com/api/v1.6/devices/{DEVICE-LABEL}?token={YOUR-UBIDOTS-TOKEN}`
- **Method**: POST
- **Content Type**: application/json
- **Body**: {"relay":1}

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/action.png" width="40%">
</p>

Then, click **Create action** to finish.

10.  Once the trigger and action have been properly configured and connected, go to your Google Assistant and say **Turn on the led** and listen to Google Assistant's response. See how the relay is turned on to switch the RGB LED strip.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/connect.png" width="50%">
</p>

11. Repeat the previous steps to create the applet that will switch the relay and turn off the RGB LED strip. All of the preceding steps are the same; the only differences are listed below:

- **Trigger Configuration (Google Assistant)**: switch `on` for `off`
- **Action Configuration (Webhooks)**: the body should be `{"relay":0}` to switch off the relay

12. Once both applets are created and connected, you’re done! You can now control and automate your devices using Google voice commands.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/voice-command.png" width="50%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/wisblock-integration-to-ubidots-mqtt-google-assistant/activity.png" width="70%">
</p>


Now, you have a smart home application for remotely controlling your devices by using Ubidots and Google Assistant!
