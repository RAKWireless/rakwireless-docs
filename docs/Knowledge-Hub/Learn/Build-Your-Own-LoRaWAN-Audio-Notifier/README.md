---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/lorawan-audio-notifier.png
rak_desc: This guide provides a step-by-step tutorial on creating a LoRaWAN Audio Notifier using WisBlock Audio.
tags:
  - Tutorial
  - WisBlock Audio
  - WisBlock
  - RAK5005-O
  - RAK11310
  - RAK18060
  - Arduino
  - Helium
header:
  title: Build Your Own LoRaWAN Audio Notifier
  caption: by <b>Christopher Méndez</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 25/10/2022 05:00 PM
---

# Build Your Own LoRaWAN Audio Notifier

Never miss an important situation with this LoRaWAN Audio Notifier using WisBlock Audio. It would be helpful to get an audio notification to call our attention in particular situations, such as when a variable is approaching a risky limit, a procedure is complete, or even when a smart doorbell is installed at home. 

## Hardware 

To carry out this test, you need the following hardware components:

- [RAK5005-O WisBlock Base Board](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore) 
- [RAK11310 (RP2040) WisBlock Core Module](https://store.rakwireless.com/collections/wisblock-core/products/rak11310-wisblock-lpwan-module?utm_source=RAK11310WisBlockCoreModule&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK18060 WisBlock Audio Stereo Amplifier Module](https://store.rakwireless.com/products/5-6w-stereo-amplifier-texas-instruments-tas2560-rak18060?utm_source=RAK18060&utm_medium=Document&utm_campaign=BuyFromStore)
- LoRa Antenna
- Speaker
- 3.7&nbsp;V LiPo battery

:::tip 📝 NOTE
This is also compatible with the ESP32 and Nordic cores.
:::


## Software 

- **Helium Console**
- **Arduino IDE**

Follow the [installation guide of BSP](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) to set up your Arduino IDE to program WisBlock boards.

## WisBlock Assembly

To put together the different modules, you need to connect them to the respective slots in the base board. For further information, refer to the [Assembling and Disassembling](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Quickstart/#assembling-a-wisblock-module) section in the Quick Start Guide.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/mounting-sketch.png"
  width="50%"
  caption="Assembling the core to the base board"
/>

<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/assembly-photo.png"
  width="80%"
  caption="Assembling the components"
/>

## Helium Console Setup

1. Log in to Helium Console or create an account if you don’t have one.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/log-in.png"
  width="40%"
  caption="Helium Console"
/>


2. Go to **Devices**, then click **Add New Device**.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/add-new-device.png"
  width="100%"
  caption="Adding a new device"
/>

3. Define a name for your device. In this example, the device name is **LoRa Notifier**.
4. Change the **Dev EUI** with the one printed on your core sticker. Do not modify the APP EUI and APP Key!
5. Click **Save device**.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/dev-eui.jpg"
  width="60%"
  caption="Printed Dev EUI"
/>


<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/save-device.png"
  width="80%"
  caption="Saving the device"
/>


6. Wait for the device to be added. You will see a pending sign and this could last for several minutes.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/pending-device.png"
  width="100%"
  caption="Pending initial configuration"
/>

7. Once done, you are now ready with the initial configuration.



## Code


1. To open the code, first, you need to download it from the [repository](https://github.com/mcmchris/LoRaWAN-Notifier).
2. Unzip the downloaded file and open the code in the Arduino IDE.
3. Install the required libraries by clicking on the URLs next to them.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/lorawan-notifier-file.png"
  width="80%"
  caption="Opening LoRaWAN Notifier file"
/>


```c
#include <Arduino.h>
#include "LoRaWan-Arduino.h" //http://librarymanager/All#SX126x
#include <SPI.h>
#include "audio.h" //http://librarymanager/All#RAKwireless-Audio-Library
#include "sound.h"
```

4. Define your country's LoRaWAN frequency. For example **LORAMAC_REGION_AU915**.

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_XX;    /* Region: Which works in your Country*/
```


5. Edit the OTAA keys with the ones of your devices in the Helium Console.

```c
//OTAA keys !!!! KEYS ARE MSB !!!

uint8_t nodeDeviceEUI[8] = {0xAC, 0x1F, 0x09, 0xFF, 0xFE, 0x05, 0x41, 0X95}; // The one printed on your core
uint8_t nodeAppEUI[8] = {0x60, 0x81, 0xF9, 0x7D, 0x71, 0x89, 0xC3, 0x47};
uint8_t nodeAppKey[16] = {0x03, 0xE6, 0xF0, 0xC1, 0x75, 0x2C, 0x91, 0x9F, 0x70, 0xED, 0x69, 0xBE, 0x54, 0x81, 0x22, 0xAC};

```

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/otaa-keys.png"
  width="80%"
  caption="OTAA keys"
/>

6. Select the board you are using (RAK11310), connect it through the USB cable, and select the respective COM port.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/selecting-board.png"
  width="80%"
  caption="Selecting the board"
/>

7. Click **Upload** and wait for the core to be flashed.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/uploading-core.png"
  width="80%"
  caption="Uploading the core"
/>


## Testing

1. To test the project, you just need to power up our board with the LiPo battery. (It can also be powered in other ways).
2. It should start sending data to the console every 20 seconds. Verify if you are in the range of the Helium Network.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/power-device.png"
  width="80%"
  caption="Powering the device"
/>

3. To send a message to the project so it can send notifications, go to the blue downlink icon on the right of your screen, as shown in **Figure 12** 

4. Set the Payload type to Text. Enter one of the trigger commands (G1 or B1), and uncheck the confirmation of response box.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/add-downlink.png"
  width="70%"
  caption="Adding Downlink Payload"
/>


:::tip 📝 NOTE
You will need to send the message **B1** or **G1** = **Base64** (**QjE=** and **RzE=**, respectively) to trigger the notification.
:::

5. Click again the blue downlink icon. Right after the module has sent something, the notification will be executed. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/lorawan-audio-notifier/test-device.png"
  width="100%"
  caption="Device will now send notification"
/>


:::tip 📝 NOTE
The Helium console only supports Class A devices, which means that a downlink is just received after an uplink from the device to the console.
:::



