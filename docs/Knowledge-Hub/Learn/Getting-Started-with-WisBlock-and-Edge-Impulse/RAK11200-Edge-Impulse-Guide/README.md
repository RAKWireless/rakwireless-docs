---
sidebar: false
rak_img: /assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/wisblock-edgeimpulse.jpg
rak_desc: This tutorial will show you how to set up and connect your WisBlock to Edge Impulse, which includes but is not limited to RAK11310, RAK4631, and RAK11200.
tags:
  - Tutorials
  - WisBlock
header:
  title: Getting Started with WisBlock and Edge Impulse
  caption: by <b>Christopher Mendez Martinez</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 05/08/2022 3:30 PM
prev: ../../Getting-Started-with-WisBlock-and-Edge-Impulse/
next: ../RAK11310-Edge-Impulse-Guide/
---


# RAK11200 Edge Impulse Guide

## RAK11200 Data Uploading 

1. Download the [**Edge Impulse firmware**](https://github.com/mcmchris/wisblock-edge-impulse/releases/tag/v.1.0.0) `.zip` file.
2. Download the [**ESP Flash Download Tool**](https://www.espressif.com/en/support/download/other-tools).
3. Open the **Flash Download Tool** and set chipType to "**ESP32**" and left workMode on "**develop**", then click **OK**.
4. Connect the WisBlock Base, where RAK11200 is attached to the computer via USB.
5. Short the **BOOT0** and **GND** pins, then reset the board to restart the core in boot mode.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/flash-esp32.jpg"
  width="60%"
  caption="Restarting the core after shorting the pins"
/>

6. Search for the firmware files and set them on the right memory partition.
   
- Search for the `ei_rak11200_firmware.bin` and set it on @ **0x10000** partition
- Search for the `bootloader.bin` and set it on @ **0x1000** partition
- Search for the `partition-table.bin` and set it on @ **0x8000** partition
- Set the SPI SPEED to 40&nbsp;MHz, SPI MODE to **DIO**, and **DoNotChgBin** checked. Everything should look like this:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/config-esp32.png"
  width="45%"
  caption="Configuring ESP32 download tool"
/>


7. Click the **START** button and wait until you see a **FINISH** status on the Download panel.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/start-config.png"
  width="45%"
  caption="Starting the configuration"
/>

8. Finally, reset the board.

:::tip 📝 NOTE
You can also build the firmware using the [**RAK11200 Edge Impulse source code**](https://github.com/mcmchris/wisblock-edge-impulse).
:::

### Connecting to Edge Impulse

Connect your WisBlock board to your PC through the USB cable. In the command prompt or terminal, run the following code:

```
edge-impulse-daemon
```
This will start a wizard which will ask you to log in and choose an Edge Impulse project. If you want to switch projects, run the command:

```
--clean
```

### Verifying Connection 

After running the command, your WisBlock is now connected to Edge Impulse. To verify this, go to your [**Edge Impulse Project**](https://studio.edgeimpulse.com/studio/select-project?autoredirect=1), and click **Devices**. The device should be listed here.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/device-listed.png"
  width="100%"
  caption="Registered devices"
/>


### Building a Machine Learning Model

Now that you have successfully set up the connection, you can now build your first machine learning model.
For this, you need to connect supported WisBlock sensors to your board. In this case, a **PDM microphone** or a **3-axis accelerometer**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/pdm-mic.png"
  width="55%"
  caption="PDM microphone"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/3-axis.png"
  width="55%"
  caption="3-axis accelerometer"
/>

Collecting your first data:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/pdm-selected.png"
  width="60%"
  caption="PDM microphone selected"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/3-axis-selected.png"
  width="60%"
  caption="3-axis accelerometer selected"
/>

Define the **label** and the **sample length** of your data, and click **Start sampling**. After the time you have set, you will see the uploaded sample.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/imu-data.png"
  width="70%"
  caption="Data from the IMU"
/>


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/mic-data.png"
  width="70%"
  caption="Data from the microphone"
/>

Now, you are ready to create your dataset for your custom project. Also, you can follow these tutorials for specific use cases.

- [Responding to your voice](https://docs.edgeimpulse.com/docs/tutorials/responding-to-your-voice)
- [Recognize sounds from audio](https://docs.edgeimpulse.com/docs/tutorials/audio-classification)

:::tip 📝 NOTE

The [**Data forwarder**](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-data-forwarder) lets you easily send data from any sensor into Edge Impulse. For more WisBlock Sensors options, refer to [**RAK store**](https://store.rakwireless.com/collections/wisblock-sensor). 

WisBlock team is working on supporting new sensors with Edge Impulse everyday.

:::


## RAK11200 Trained Model Deployment

RAK11200 ESP32 core lets you deploy your model using the native **ESP IDF** or **PlatformIO**. You can select your preferred option.

### Deploying Your Model Back to WisBlock

#### ESD IDF

After training and validating your model, you can now deploy it to your WisBlock board. This makes the model run without an internet connection, minimizes latency, and runs with minimal power consumption.

On your Edge Impulse project, navigate to the **Deployment** tab on the left menu and select the **C++ library** option.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/library.png"
  width="80%"
  caption="C++ library"
/>

Edge Impulse offers an optimization tool that can help you increase on-device performance but may reduce accuracy. You can test each option one by one and stay with the best results. You can also click the **Analyze optimizations** button before deploying it and see the recommended choice for your target. Or, click **Build** to use the currently selected option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/analyze-optimization.png"
  width="80%"
  caption="EON compiler option for model optimization"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/save.png"
  width="70%"
  caption="Save the project"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/build-library.png"
  width="80%"
  caption="Building the library"
/>

Download the `.zip` library and save it to your preferred location, then unzip it.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/unzip.png"
  width="70%"
  caption="Unzipping the library"
/>

Now, you need to build the firmware for your corresponding core with the trained model added to it.

Download and install [**ESP IDF v4.4**](https://dl.espressif.com/dl/esp-idf/).

- Download or clone the firmware from the [Github repository](https://github.com/mcmchris/wisblock-edge-impulse).
- You'll need two additional components to compile the firmware:
    - LIS3DHTR_ESP-IDF
    - ESP-NN
- Then open the **ESP-IDF 4.4 CMD** from the Desktop shortcut.
- Navigate to the firmware folder `../RAK11200-Edge-Impulse-Firmware`.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/firmware-folder.png"
  width="70%"
  caption="Navigating to the firmware folder"
/>

Get the additional components by cloning the corresponding repositories to the **components** folder in the root folder of the project: `../RAK11200-Edge-Impulse-Firmware/components`.

```
cd components
git clone <https://github.com/AIWintermuteAI/LIS3DHTR_ESP-IDF.git> LIS3DHTR_ESP-IDF/
cd LIS3DHTR_ESP-IDF 
git checkout 641bda8c3e4b706a2365fe87dd4d925f96ea3f8c 
cd ..
git clone <https://github.com/espressif/esp-nn.git> esp-nn/
cd esp-nn 
git checkout 24d18025f300c1e15afa2abb86519da54c7a5d90 
cd ..
cd ..
```

With the last `cd ..`, you must be in the project folder `../RAK11200-Edge-Impulse-Firmware`.


<b> Add Your Trained Model Library </b>

Replace the edge-impulse-sdk, model-parameters, and tflite-model folders from the project with the new ones in the trained model library.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/delete.png"
  width="80%"
  caption="Delete the three (3) old folders"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/copy-paste.jpg"
  width="80%"
  caption="Copy and paste the trained model folders"
/>


<b> Build the Application </b>

- Delete the build folder from the project. (Important)
- Run the following command:

```
idf.py build
```

<b> Flash </b>

- Connect the RAK11200 ESP32 WisBlock board to your computer.
- Short BOOT0 and GND then press the Reset button of the base board. (To restart the core in boot mode)
- Identify the COM port where it's connected.
- Run the following command:

```
idf.py -p COMxx flash monitor
```

Where `COMxx` needs to be changed to the actual port where your WisBlock is connected on your system.

- After uploading successfully, reset the board.


:::tip 📝 NOTE
Also, you can build and flash the firmware using the **Visual Studio Code Esspressif** plugin.
:::


<b> Run the Model </b>

From a command prompt or terminal, run:

```
edge-impulse-run-impulse
```

If your model uses audio, you may use the `--continuous` command as follows:

```
edge-impulse-run-impulse --continuous
```

Your model should run and print the inference results in the terminal continuously.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/esp-idf/run-model.png"
  width="65%"
  caption="Run the model in the terminal"
/>


#### PlatformIO 


After training and validating your model, you can now deploy it to your WisBlock board. This makes the model run without an internet connection, minimizes latency, and runs with minimal power consumption.


:::tip 📝 NOTE
In installing and setting up the PlatformIO to work with WisBlock ecosystem boards, refer to the [Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/).
:::

On your Edge Impulse project, navigate to the **Deployment** tab on the left menu and select the **Arduino library** option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/arduino-lib.png"
  width="80%"
  caption="Arduino library"
/>

Edge Impulse offers an optimization tool that can help you increase on-device performance but may reduce accuracy. You can test each option one by one and stay with the best results. You can also **Analyze optimizations** before deploying it and see the recommended choice for your target. Or, click **Build** to use the currently selected option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/model-optimization.png"
  width="70%"
  caption="EON compiler option for model optimization"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/save.png"
  width="70%"
  caption="Save the project"
/>


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/build.png"
  width="70%"
  caption="Building the Arduino library"
/>

Download the `.zip` library, save it to your preferred location, and then unzip it.

Finally, to deploy your model:
1. Clone or download the WisBlock examples for PlatformIO from the [repository](https://github.com/mcmchris/wisblock-edge-impulse-deployment).
2. Open the example that better fits your needs on Visual Studio Code.

If you are working with:
- **Keyword spotting or sound recognition** → “*inference_microphone_continuous*” is recommended.
- **Accelerometer or any other sensor** → “*inference_accelerometer*” is recommended.

Drag and drop the Arduino library to the **lib** folder of your project:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/lib-folder.jpg"
  width="100%"
  caption="Adding the Arduino library"
/>

Finally, **Build** your project, connect your WisBlock board to your computer and **Upload** the code.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/build-output.png"
  width="80%"
  caption="Build output"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/upload-output.png"
  width="80%"
  caption="Upload output"
/>

Run the Serial Monitor, and you should start seeing the inference results:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak11200/platformio/serial-monitor.png"
  width="70%"
  caption="Continuous inference results"
/>
