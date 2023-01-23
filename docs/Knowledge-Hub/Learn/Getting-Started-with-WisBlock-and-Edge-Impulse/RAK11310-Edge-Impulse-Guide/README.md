---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/wisblock-edgeimpulse.jpg
rak_desc: This tutorial will show you how to set up and connect your WisBlock to Edge Impulse, which includes but is not limited to RAK11310, RAK4631, and RAK11200.
tags:
  - Tutorial
  - WisBlock
  - RAK11310
  - Edge Impluse
  - C++
  - VS Code
header:
  title: Getting Started with WisBlock and Edge Impulse
  caption: by <b>Christopher Mendez Martinez</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 05/08/2022 3:30 PM
prev: ../../Getting-Started-with-WisBlock-and-Edge-Impulse/
next: ../RAK4631-Edge-Impulse-Guide/
---

# RAK11310 Edge Impulse Guide

## RAK11310 Data Uploading 

1. Download the [Edge Impulse firmware](https://github.com/mcmchris/wisblock-edge-impulse/releases/tag/v.1.0.0) `.uf2` file.
2. Connect the WisBlock Base where RAK11310 is attached to the computer via USB.
3. Hold the **BootSel** button in the RAK11300 module, reset the module (press the reset button of WisBlock Base Board for at least 2 seconds), then wait for the USB Mass Storage **RPI-RP2** to appear before releasing the BootSel button.


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/rak11300.png"
  width="40%"
  caption="RAK11310 (RP2040) BootSel button"
/>


4. Drag and drop the `.uf2` file to the **RPI-RP2** USB Mass Storage.

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/firmware-update.png"
  width="90%"
  caption="Firmware update process for RAK11310"
/>

:::tip 📝 NOTE
You can also build the firmware using the [RAK11310 Edge Impulse source code](https://github.com/mcmchris/wisblock-edge-impulse).
:::


### Connecting to Edge Impulse 

Connect your WisBlock board to your PC through the USB cable. From a command prompt or terminal, run the following command:

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
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/devices.png"
  width="100%"
  caption="Registered devices"
/>


### Building a Machine Learning Model 

Now that you have successfully set up the connection, you can now build your first machine learning model.
For this, you need to connect supported WisBlock sensors to your board. In this case, a **PDM microphone** or a **3-axis accelerometer**.

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/pdm.png"
  width="50%"
  caption="PDM microphone"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/3-axis.png"
  width="50%"
  caption="3-axis accelerometer"
/>

Collecting your first data:

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/pdm-selected.png"
  width="60%"
  caption="PDM microphone selected"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/3-axis-selected.png"
  width="60%"
  caption="3-axis accelerometer selected"
/>


Define the **label** and the **sample length** of your data, and click **Start sampling**. After the time you have set, you will see the uploaded sample.


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/imu-data.png"
  width="70%"
  caption="Data from the IMU"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/mic-data.png"
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


## RAK11310 Trained Model Deployment

### Deploying Your Model Back to WisBlock 

After training and validating your model, you can now deploy it to your WisBlock board. This makes the model run without an internet connection, minimizes latency, and runs with minimal power consumption.

On your Edge Impulse project, navigate to the **Deployment** tab on the left menu and select the **C++ library** option.


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/library.png"
  width="70%"
  caption="C++ library"
/>


Edge Impulse offers an optimization tool that can help you increase on-device performance but may reduce accuracy. You can test each option one by one and stay with the best results. You can also **Analyze optimizations** before deploying it and see the recommended choice for your target. Or, click **Build** to use the currently selected option.


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/model-optimization.png"
  width="80%"
  caption="EON compiler option for model optimization"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/save.png"
  width="65%"
  caption="Save the project"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/build.png"
  width="65%"
  caption="Building the Arduino library"
/>



Download the `.zip` library and save it to your preferred location, then unzip it.

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/unzip.png"
  width="65%"
  caption="Unzipping the library"
/>


Now, you need to build the firmware for your corresponding core with the trained model added to it.

- For **Windows** users, follow this guide: [https://shawnhymel.com/2096/](https://shawnhymel.com/2096/).
- For **macOS** users, follow this guide: [https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf) 


:::tip 📝 NOTE
Tested with the GNU Arm Embedded Toolchain version 10.3.1.
:::

- Download or clone the firmware from the [Github repository](https://github.com/mcmchris/wisblock-edge-impulse).


<b> Add Your Trained Model Library </b>

Replace the edge-impulse-sdk, model-parameters, and tflite-model folders from the project with the new ones in the trained model library.

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/delete.png"
  width="80%"
  caption="Delete the three (3) old folders"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/copy-paste.jpg"
  width="80%"
  caption="Copy and paste the trained model folders"
/>


<b> Build the Application </b>

- Delete the **build** folder from the project. (*Important*)
- Run the following command:

```
mkdir build
cd build
cmake -G "MinGW Makefiles" ..
make
```


<b> Flash the Firmware </b>

1. Connect the RAK11310 RP2040 WisBlock board to your computer.
2. Hold the BootSel button in the RAK11300 module, reset the module (press the reset button of WisBlock Base Board for at least 2 seconds), then wait for the USB Mass Storage RPI-RP2 to appear before releasing the BootSel button.
3. Run the following command:

```
cp ei_rak11310_firmware.uf2 /g/
```

After uploading successfully, reset the board.


:::tip 📝 NOTE
Also, you can **build** and **flash** the firmware using the Visual Studio Code **CMake tools**.
:::

<b> Run the Model </b>

1. From the command prompt or terminal, run:

```
edge-impulse-run-impulse
```

2. If your model uses audio, you may use the `--continuous` command as follows:

```
edge-impulse-run-impulse --continuous
```

3. Your model should run and print the inference results in the terminal continuously.


<rk-img
  src="/assets/images/knowledge-hub/learn/getting-started-with-wisBlock-and-edge-impulse/rak11310/terminal.png"
  width="70%"
  caption="Continuous inference results"
/>
