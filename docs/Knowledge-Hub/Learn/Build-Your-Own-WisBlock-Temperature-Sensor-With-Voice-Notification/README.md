---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature-Alert.jpg
rak_desc: This guide provides a step-by-step tutorial on creating a WisBlock Sensor with Voice Notification using WisBlock Audio.
tags:
  - Tutorial
  - WisBlock Audio
  - WisBlock
  - RAK19001
  - RAK1901
  - RAK4631
  - RAK18003
  - RAK18060
  - Temperature Sensor
header:
  title: Build Your Own WisBlock Temperature Sensor with Voice Notification
  caption: by <b>Ronald Collamar and Carl Erick Rowan</b>
  img: /assets/images/knowledge-hub/banners/wisblock-io-tutorial.jpg
posted: 01/12/2022
---

# Build Your Own WisBlock Temperature Sensor with Voice Notification

Temperature monitoring is one of the most useful IoT applications. This type of device is common in establishments and industries whose environments are sensitive to temperature changes. Temperature monitoring is necessary to check whether a certain critical area or vicinity is still safe for the people and the sensitive items in it.

In this [WisBlock Audio](https://store.rakwireless.com/collections/wisblock-audio) tutorial, you will make a WisBlock temperature sensor application with voice notification using the [RAKwireless Audio Library](https://github.com/RAKWireless/RAKwireless-Audio-library) running on [RAK4631](https://store.rakwireless.com/products/rak4631-lpwan-node?variant=37505443987654?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) WisBlock Core module. This project is helpful in situations where the device needs to get attention from a person when the temperature goes above the set threshold.

This demo application notifies via voice and is possible using the WisBlock Audio modules. WAV files are created using a Text-To-Speak converter and are stored in an SD card attached to the interposer board [RAK18003](https://store.rakwireless.com/products/wisblock-audio-interposer-rak18003?utm_source=RAK18003&utm_medium=Document&utm_campaign=BuyFromStore) SD card slot. The audio files will be played via speaker using [RA18060](https://store.rakwireless.com/products/5-6w-stereo-amplifier-texas-instruments-tas2560-rak18060?utm_source=RAK18060&utm_medium=Document&utm_campaign=BuyFromStore) WisBlock Audio Amplifier module. The RAK4631 WisBlock Core facilitates all the functionalities offered by the said modules.

WAV audio files are executed during the following conditions:

1. **Initialization stage** - Successful initialization is notified via voice if all configurations are executed correctly and no error. It will indicate the device is properly set and ready to be deployed.
2. **Sensor limit trigger** - In the event that the temperature threshold is reached, a voice will notify the user with the WAV audio files stored in the SD card via the attached speaker.
3. **Self-test button** - A self-test button allows the user to check if the temperature sensor is still working and if there is still audio output coming from the amplifier and speaker setup. This is important since the device will not execute any notification unless the sensor threshold is reached.

## Hardware

To assemble this project, you will need the following components:

- [RAK19001 WisBlock Dual IO Base Board](https://store.rakwireless.com/products/rak19001-wisblock-dual-io-base-board?utm_source=RAK19001&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK4631 WisBlock Core Module](https://store.rakwireless.com/products/rak4631-lpwan-node?variant=37505443987654?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK1901 Temperature and Humidity Sensor](https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor?utm_source=RAK1901&utm_medium=Document&utm_campaign=BuyFromStor)
- [RAK18060 WisBlock Audio Stereo Amplifier Module](https://store.rakwireless.com/products/5-6w-stereo-amplifier-texas-instruments-tas2560-rak18060?utm_source=RAK18060&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK18003 WisBlock Audio Interposer](https://store.rakwireless.com/products/wisblock-audio-interposer-rak18003?utm_source=RAK18003&utm_medium=Document&utm_campaign=BuyFromStore)
- [Speaker Connector Cable](https://store.rakwireless.com/products/speaker-connector-cable?utm_source=SpeakerConnectorCable&utm_medium=Document&utm_campaign=BuyFromStore)
- [3.7&nbsp;V LiPo Battery](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [SD Card](https://store.rakwireless.com/collections/accessories/products/16gb-tf-card?utm_source=SDcard&utm_medium=Document&utm_campaign=BuyFromStore)
- Push Button Switch
- Wires

## Software

- **Arduino IDE**

Follow the [installation guide of BSP](https://docs.rakwireless.com/Knowledge-Hub/Learn/Installation-of-Board-Support-Package-in-Arduino-IDE/) to set up your Arduino IDE to program WisBlock Core RAK4631.

## WisBlock Modules Assembly

To put the WisBlock modules together, you need to connect them to their respective slots in the WisBlock Base board. For further information, refer to the [Assembling and Disassembling](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK19001/Quickstart/#assembling-a-wisblock-module) section in the **RAK19001** Quick Start Guide.

In making the RAK4631 Sensor with Voice Notification, the procedure below should be done.

1. Connect the push button switch to the WisBlock base board by soldering them, as shown in the image. The push button uses an internal pull-up resistor of the RAK4631 module, and the IO pin used is WB_IO4.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_2A.png"
  width="60%"
  caption="Soldering the push button switch to WisBlock base board"
/>

:::tip 📝 NOTE:
This guide shows you can use the WisBlock IO pin via the pin header. There is a simpler approach on RAK19001 since it has a user button that you can use via WB_SW1.

Both methods will work fine in this tutorial.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/sw1.png"
  width="60%"
  caption="RAK19001 built-in user button"
/>
:::

2. Gather the modules and assemble them with placements, as shown in Figure 2.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_3A.png"
  width="100%"
  caption="Assembling the modules"
/>

3. After interconnecting all the modules, you can now attach the speakers and battery to their respective slots.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_4A.png"
  width="90%"
  caption="Portions where to connect the battery and speakers"
/>

4. The hardware is now complete to build your own **RAK4631 Sensor with Voice Notification module**.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_A.png"
  width="100%"
  caption="Fully-assembled modules"
/>

## Code

For this application, you can use the **RAK4631_sensor_with_voice_notification** code from this [link](https://github.com/RAKWireless/WisBlock/tree/master/tutorials). The code is compatible with the RAK4631 WisBlock core and uses [RAK1901 Temperature Sensor](https://store.rakwireless.com/products/rak1901-shtc3-temperature-humidity-sensor). It will notify the user when the temperature hits the critical level using the **WisBlock Audio modules**. The following details are the things you need to do to use and understand the application code.

### Check RAK1901 Functionality

This procedure is essential to check whether the RAK1901 temperature sensor is working or not. You need to open the example code for **RAK1901** using **RAK4631**, then upload it to the module and check for the response of the temperature sensor through the serial monitor.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_11A.png"
  width="80%"
  caption="Uploading the sample code for RAK1901 to check for its functionality"
/>

If **RAK1901** is working well, temperature and humidity measurements should register in the serial monitor.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_12A.png"
  width="100%"
  caption="RAK1901 works well as observed in the serial monitor"
/>

As shown in **Figure 8**, it registers if **RAK1901** is damaged or dismantled in the module.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_13A.png"
  width="100%"
  caption="Error occurs when RAK1901 is damaged or removed from the module"
/>

### Check the RAKwireless Audio Library Example for SD Card Playback

Before heading on the voice notification, you have to ensure that the speaker is working properly together with the RAK18003 interposer board. You can follow the guide and the installation of RAKwireless Audio Library on [RAK18003+RAK18060 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK18003/Quickstart/#sample-code-test-of-the-rak18060-module-with-rak18003-interposer-module).

Once the speaker is working, prepare an SD card and try to play a WAV sound file. The example code requires you to have a WAV file `test.wav`.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/playbackfromsd.png"
  width="75%"
  caption="RAKwireless Audio Library for SD card Playback"
/>

:::tip 📝 NOTE:
If your compilation fails, you might need to rename the default `I2S.h` from the Arduino library folder to another file name, for example, `I2S-arduino.h`.
:::

### How to Create WAV Files

This project needs to include WAV files in the code to make a notifier that will be turned into an audio output using the WisBlock Audio module.

1. First thing to do is to generate a voice audio file from text using the [Voice Generator](https://voicegenerator.io/), then download the generated voice audio file to your PC.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_5.png"
  width="70%"
  caption="Text to Voice Audio Generator"
/>

2. Upload the generated voice audio file in [MP3 to WAV converter](https://www.freeconvert.com/mp3-to-wav) to convert your voice audio file into a wav file. Then download the converted wav file to your PC and save it to the SD card that you will be using later in your project.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_6.png"
  width="70%"
  caption="MP3 to WAV converter"
/>

3. Save the WAV files to the SD card. These are the WAV files used which you can also find on the GitHub repository.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/wav_files.png"
  width="80%"
  caption="WAV files"
/>

The text/words on each file are as follows:

- **config.wav** - RAK4631 audio test
- **alert.wav** - Temperature high reached
- **test.wav** - Perform self-test
- **ok.wav** - Device self-test ok
- **fail.wavs** - Device failed self-test

4. Once saved, insert the SD card into the slot card of the **RAK18003** module, as shown in **Figure 13**.

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_7A.png"
  width="100%"
  caption="Insertion of SD card into the RAK18003 module"
/>

### Sections in the Code

#### Notify Sensor Initialization

This section shows the initialization of **RAK1901** if it is properly working after assembly.

```c
  Serial.println("shtc3 init");
  Serial.print("Beginning sensor. Result = "); // Most SHTC3 functions return a variable of the type "SHTC3_Status_TypeDef" to indicate the status of their execution
  errorDecoder(g_shtc3.begin());              // To start the sensor you must call "begin()", the default settings use Wire (default Arduino I2C port)
  Wire.setClock(400000);                      // The sensor is listed to work up to 1 MHz I2C speed, but the I2C clock speed is global for all sensors on that bus so using 400kHz or 100kHz is recommended
  Serial.println();

  if (g_shtc3.passIDcrc)                      // Whenever data is received the associated checksum is calculated and verified so you can be sure the data is true
  { // The checksum pass indicators are: passIDcrc, passRHcrc, and passTcrc for the ID, RH, and T readings respectively
    Serial.print("ID Passed Checksum. ");
    Serial.print("Device ID: 0b");
    Serial.println(g_shtc3.ID, BIN);          // The 16-bit device ID can be accessed as a member variable of the object
  }
  else
  {
    Serial.println("ID Checksum Failed. ");
  }
```


#### Sensor Readings

This section shows sensor reading from the code, which is initially printed via serial monitor.

```c
void loop()
{
  shtc3_read_data();
  Serial.printf("Temperature = %.2f。C\r\n", temperature_raw);
```

#### Alert on Threshold and Loop Notification

This section executes the wav file playing whenever the temperature reading hits the critical level.

```c
  if ((temperature_raw > temperature_upper_limit) && (notificaiton_done == 0))
  {
    Serial.println("Temperature high reached");
    uint8_t notification_loop = NOTIFICATION_COUNT;
    while (notification_loop != 0)      //It will loop 10 times since NOTIFICATION_COUNT macro is 10. Can be changed above.
    {
      notification_loop--;
      play_wav("alert.wav");   // Inserted wav file for "Temperature high reached"
      delay(2000);
      notificaiton_done = 1;
    }
  }
```

##### With Lower Hysteresis

This section shows the lower hysteresis in the code. By default, the notification alert will run only 10 times and reactivate again depending on the `temperature_lower_limit`.

```c
  else if (temperature_raw < temperature_lower_limit)
  {
    notificaiton_done = 0;
  }
```

##### With Self-Test Feature Using External Button

This section is another essential part of the code, especially since it will execute the self-test for the entire assembled module. Whenever the push button is pressed, it will indicate whether the module is working properly or not. For instance, if the temperature sensor is damaged or disassembled from the modules, it will tell via audio as **"Device Failed Self-Test"**. That's the time that you need to check for your modules and check for any mistakes during assembly.

```c
  if (digitalRead(SELF_TEST_BUTTON) == 0)  //Check if pressed!
  {
    Serial.println("Perform self test!");
    play_wav("test.wav");    // Inserted wav file for "Perform Self Test"
    delay(2000);
    if (sensor_ok == 0)
    {
      Serial.println("Device failed self-test!");
      play_wav("fail.wav");   // Inserted wav file for "Device Failed Self-test"
      delay(2000);
    }
    else
    {
      Serial.println("Device self-test ok!");
      play_wav("ok.wav");   // Inserted wav file for "Device Self-test Ok"
      delay(2000);
    }
  }
```
<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_10A.png"
  width="90%"
  caption="Pressing the push button switch to execute Device Self-Test"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/build-your-own-temperature-alert-notifier-via-audio/Temperature_Alert_9A.png"
  width="90%"
  caption="Removing the RAK1901 module to observe Device Failed Self-Test"
/>