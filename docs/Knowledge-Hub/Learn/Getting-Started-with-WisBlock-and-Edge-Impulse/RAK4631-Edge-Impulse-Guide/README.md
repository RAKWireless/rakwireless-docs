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
prev: ../../Getting-Started-with-WisBlock-and-Edge-Impulse/
next: false
---

# RAK4631 Edge Impulse Guide

The RAK4631 does not have firmware like the other cores to upload data with the official Edge Impulse ingestion service, but the solution for this is covered in this guide.

## RAK4631 Data Uploading

### Audio Data

To upload audio directly to Edge Impulse, you can use your smartphone or personal computer. This way, you can create your dataset even easier.
On your Edge Impulse project, go to **Devices** and click **Connect a new device**:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/connect-device.png"
  width="100%"
  caption="Connecting a new device"
/>


Select the device you want to use, **mobile phone** or **computer**:


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/select-device.png"
  width="60%"
  caption="Selecting a device"
/>


Once you select your device, the Audio data collection web interface will appear, then grant access to your microphone:


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/access.png"
  width="40%"
  caption="Giving access to the microphone"
/>


Then, give a name to your sample, and define its length and category, then start recording:


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/start-record.png"
  width="60%"
  caption="Start to record"
/>


You should see a success message pops up, and your recording should be visible in the Data acquisition tab of your project:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/data-acquisition.png"
  width="100%"
  caption="Data acquisition"
/>

You can easily record high-quality and long-lasting audio recordings using this method. Enjoy creating your dataset.


### Other Sensor Data

If your project uses a custom or any other sensor from our ecosystem, use the data forwarder to upload your data through serial communication.

If, for example, you are working with a 3-axis accelerometer with a simple code, make your WisBlock print the axis data separated by commas at a certain frequency.

```
Serial.print(x);
Serial.print(",");
Serial.print(y);
Serial.print(",");
Serial.println(z);
```

The output should look like this:

```
-0.12,-6.20,7.90
-0.13,-6.19,7.91
-0.14,-6.20,7.92
-0.13,-6.20,7.90
-0.14,-6.20,7.91
```

Once your board is printing the data through serial, open a command prompt or terminal and run the data forwarder by typing:

```
edge-impulse-data-forwarder
```

If this is the first time running this command, you will be asked to enter your Edge Impulse account credentials. Select the project you want to send your data to and name the axis.
The baud rate should be **115200**, but if you want to use a different one, you need to change it like this:

```
edge-impulse-data-forwarder --baud-rate 460800
```

For examples and more options, refer to this guide: [Data Forwarder](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-data-forwarder).


## RAK4631 Trained Model Deployment


After training and validating your model, you can now deploy it to your WisBlock board. This makes the model run without an internet connection, minimizes latency, and runs with minimal power consumption.

On your Edge Impulse project, navigate to the **Deployment** tab on the left menu and select the **Arduino library** option.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/library.png"
  width="70%"
  caption="Arduino library"
/>

Edge Impulse offers an optimization tool that can help you increase on-device performance but may reduce accuracy. You can test each option one by one and stay with the best results. You can also **Analyze optimizations** before deploying it and see the recommended choice for your target. Or, click **Build** to use the currently selected option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/model-optimization.png"
  width="80%"
  caption="EON compiler option for model optimization"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/save.png"
  width="70%"
  caption="Save the project"
/>


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/build.png"
  width="70%"
  caption="Building the Arduino library"
/>

Download the `.zip` library, save it to your preferred location, and then unzip it.

:::tip 📝 NOTE
In installing and setting up the PlatformIO to work with WisBlock ecosystem boards, refer to the [Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/Board-Support-Package-Installation-in-PlatformIO/).
:::

Finally, to deploy your model, execute the following steps:

1. Clone or download the WisBlock examples for PlatformIO from the [repository](https://github.com/mcmchris/wisblock-edge-impulse-deployment).
2. Open the example that better fits your needs on Visual Studio Code.

If you are working with:

- **Keyword spotting** or **sound recognition** → “i*nference_microphone_continuous*” is recommended.
- **Accelerometer** or **any other sensor** → “*inference_accelerometer*” is recommended.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/lib-folder.jpg"
  width="100%"
  caption="Adding the Arduino library"
/>


Finally, **Build** your project, connect your WisBlock board to your computer and **Upload** the code.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/build-output.png"
  width="70%"
  caption="Build output"
/>


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/upload-output.png"
  width="70%"
  caption="Upload output"
/>

Run the serial monitor, and you should start seeing the inference results:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/rak4631/inference-results.png"
  width="70%"
  caption="Continuous inference results"
/>

:::tip 📝 NOTE
RAK4631 works only with PlatformIO.
:::

