---
sidebar: false
rak_img: /assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/wisblock-edgeimpulse.jpg
rak_desc: This tutorial will show you how to set up and connect your WisBlock to Edge Impulse, which includes but is not limited to RAK11310 and RAK11200.
tags:
  - Tutorials
  - WisBlock
header:
  title: Getting Started with WisBlock and Edge Impulse
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 05/08/2022 3:30 PM
---


# Getting Started with WisBlock and Edge Impulse

WisBlock is a modular system that makes it easy to implement edge IoT solutions. It is your ally from rapid prototyping to mass production without the need to create new hardware modules for each step. 

WisBlock ecosystem lets you decide on several core options as the RAK11200 (ESP32) and the RAK11310 (RP2040), to develop your TinyML project alongside the largest variety of sensors in the market, from PDM microphones for audio recognition to motion sensors for movement models and many more. A starter kit is available in the [RAK store](https://store.rakwireless.com/products/wisblock-starter-kit?variant=41786596720838).

## Setting Up Your Development Board

<!---
<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/1.development-board.png"
  width="70%"
  caption="Minimum hardware requirements"
/>
--->

The minimum hardware you will need to start developing with WisBlock and Edge Impulse are as follows:

- [WisBlock Base](https://store.rakwireless.com/products/rak19007-wisblock-base-board-2nd-gen?utm_source=RAK19007&utm_medium=Document&utm_campaign=BuyFromStore)
- WisBlock [RAK11200 (ESP32)](https://store.rakwireless.com/products/wiscore-esp32-module-rak11200?utm_source=WisBlockRAK11200&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK11310 (RP2040)](https://store.rakwireless.com/collections/wisblock-core/products/rak11310-wisblock-lpwan-module?utm_source=RAK11310WisBlockCoreModule&utm_medium=Document&utm_campaign=BuyFromStore) core
- [RAK1904 3-Axis Acceleration Sensor (LIS3DH)](https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK18000 PDM Microphone](https://store.rakwireless.com/products/wisblock-microphone-module-rak18000?utm_source=WisBlockRAK18000&utm_medium=Document&utm_campaign=BuyFromStore)


### Installing Dependencies

To set WisBlock up in Edge Impulse, you will need to install the following software:

- [Edge Impulse CLI](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-installation)
- [Arduino IDE](https://www.arduino.cc/en/software)

### Updating the Firmware

Once you have the software already installed, it’s time to flash the Edge Impulse firmware on your core. This process will vary depending on the core you are using - RAK11310 or RAK11200.

#### RAK11310 Raspberry Pi Pico Core (RP2040)

1. Download the [Edge Impulse firmware](https://github.com/mcmchris/wisblock-edge-impulse/releases/tag/v.1.0.0) `.uf2` file.
2. Connect the WisBlock Base where RAK11310 is attached to the computer via USB.
3. Hold the BootSel button in the RAK11300 module, reset the module (press the reset button of WisBlock Base Board for at least 2 seconds) then wait for the USB Mass Storage RPI-RP2 to appear before releasing the BootSel button.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/2.rak11300.png"
  width="40%"
  caption="Connecting the WisBlock Base"
/>

4. Drag and drop the `.uf2` file to the RPI-RP2 USB Mass Storage.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/3.usb-mass-storage.png"
  width="80%"
  caption="Moving the firmware to RPI-RP2"
/>

#### RAK11200 ESP32 Core

1.	Download the [Edge Impulse firmware](https://github.com/mcmchris/wisblock-edge-impulse/releases/tag/v.1.0.0) `.zip` file.
2.	Download the [ESP Flash Download Tool](https://www.espressif.com/en/support/download/other-tools).
3.	Open the Flash Download Tool and set chipType to "**ESP32**" and left workMode on "**develop**". Then click  **OK**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/4.flash-download-tool.png"
  width="35%"
  caption="Moving the firmware to RPI-RP2"
/>

3. Connect the WisBlock Base, where RAK11200 is attached to the computer via USB.
4. Short the **BOOT0** and **GND** pins then reset the board to re-start the core in boot mode.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/5.short-and-reset.png"
  width="60%"
  caption="Short the pins and reset the board"
/>

5. Search for the firmware files and set them on the right memory partition.

    - Search for the `ei_rak11200_firmware.bin` and set it on `@ 0x10000` partition.
    - Search for the `bootloader.bin` and set it on `@ 0x1000` partition.
    - Search for the `partition-table.bin` and set it on `@ 0x8000` partition.
    - Set the SPI SPEED to **40&nbsp;MHz**, SPI MODE to **DIO** and check **DoNotChgBin**. 

Everything should look like this:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/6.esp32.png"
  width="40%"
  caption="Setting the ESP32 download tool"
/>

6. Click the **START** button and wait until you see a **FINISH** status on the Download panel.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/7.download.png"
  width="40%"
  caption="Download complete"
/>


7. Finally, reset the board.


## Connecting to Edge Impulse

Connect your WisBlock board to your PC through the USB cable. In the command prompt or terminal, run the following command:

```
edge-impulse-daemon
```

This command will start a wizard. It will ask you to log in and choose an Edge Impulse project. If you want to switch projects, run the command with `--clean`.

### Connection Verification

After running the command, your WisBlock is now connected to Edge Impulse. To verify, go to your [Edge Impulse Project](https://studio.edgeimpulse.com/login?next=%2Fstudio%2Fselect-project%3Fautoredirect%3D1), and click **Devices**. The device should now be listed.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/8.device-connected.png"
  width="100%"
  caption="WisBlock is now connected to Edge Impulse"
/>

## Building a Machine Learning Model

With everything set up, you can now build your first machine learning model. For this, you need to connect supported WisBlock sensors to your board, in this case, **RAK1904 3-Axis Acceleration Sensor** or a **RAK18000 PDM Microphone**.


1. Collect your first data. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/9.first-data.png"
  width="100%"
  caption="Collecting the first data"
/>

Define the **label** and the **sample length** of your data and click on **Start sampling**. After the time you set, you will see the uploaded sample.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/10.raw-data.png"
  width="80%"
  caption="Sampling graph"
/>

Knowing this, you are ready to create your dataset for your custom project. Also, you can follow these tutorials for specific use cases:

 - [Responding to your voice](https://docs.edgeimpulse.com/docs/tutorials/responding-to-your-voice)
 - [Recognize sounds from audio](https://docs.edgeimpulse.com/docs/tutorials/audio-classification)

The [Data forwarder](https://docs.edgeimpulse.com/docs/edge-impulse-cli/cli-data-forwarder) lets you easily send data from any sensor into Edge Impulse For more RAK sensor to connect with Edge Impulse, refer to the [RAK store](https://store.rakwireless.com/collections/wisblock-sensor).

## Deploying the Model Back to WisBlock

After training and validating your model, you can now deploy it to your WisBlock board. This makes the model run without an internet connection, minimizes latency, and runs with minimal power consumption.

1. On your Edge Impulse project, navigate to the Deployment tab on the left menu and select the `C++` library option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/11.create-library.png"
  width="70%"
  caption="Creating a library"
/>

2. Edge Impulse offers an optimization tool that can help you increase on-device performance but may reduce accuracy. You can test each option one by one and stay with the best results. You can also Analyze optimizations before deploying it and see the recommended choice for your target. Or, click **Build** to use the currently selected option.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/12.build-compiler.png"
  width="80%"
  caption="Build the compiler"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/13.build-library.png"
  width="80%"
  caption="Built C++ library"
/>

3. Download the `.zip` library and save it to your preferred location, then unzip it. Now, you need to build the firmware for your corresponding core with the trained model added to it.

### RAK11200 (ESP32)

1. Install **ESP IDF v4.4**. 
2. Download or clone the [firmware](https://github.com/mcmchris/wisblock-edge-impulse) from our Github repository.
 - You'll need two additional components to compile this firmware:
     - LIS3DHTR_ESP-IDF
     - ESP-NN
3. First, open the **ESP-IDF 4.4 CMD** from the Desktop shortcut.
4. Then Navigate to the firmware folder .`./RAK11200-Edge-Impulse-Firmware`.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/14.cmd.png"
  width="70%"
  caption="Navigating to the firmware folder using the terminal "
/>

Get the additional components by cloning the corresponding repositories to components folder in the root folder of the project: `../RAK11200-Edge-Impulse-Firmware/components`.

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

With this last `cd ..` you must be in the project folder `../RAK11200-Edge-Impulse-Firmware`.


5. Add Your Trained model library. Replace the `edge-impulse-sdk`, `model-parameters`, and `tflite-model` folders from the project with the new ones in the trained model library. 

6. Build the Application:
    - Delete the **build** folder from the project
    - Run the following command:

    ```
    idf.py build
    ```

7. Flash the firmware.
    - Connect the RAK11200 ESP32 WisBlock board to your computer.
    - Short **BOOT0** and **GND** then press the **Reset** button of the base board. (To restart the core in boot mode)
    - Identify the COM port where it's connected.
    - Run the following command:

    ```
    idf.py -p COMxx flash monitor
    ```

8. Run the model with the following command:

```
edge-impulse-run-impulse
```

- If your model uses audio, you may use the `--continuous` command as follows:

    ```
    edge-impulse-run-impulse --continuous
    ```

- Your model should run and print the inference results in the terminal continuously:


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/15.continuous-results.png"
  width="70%"
  caption="Continuous inference results"
/>


### RAK11310 (RP2040)

 - For Windows users, follow the guide: [https://shawnhymel.com/2096/](https://shawnhymel.com/2096/).
 - For macOS users, follow the guide under chapter 9.1 page 36: [Getting started with Raspberry Pi Pico](https://datasheets.raspberrypi.com/pico/getting-started-with-pico.pdf)

Tested with the **GNU Arm Embedded Toolchain version 10.3.1**:
 - Download or clone the firmware from our Github repository.

1. Add your trained model library. Replace the `edge-impulse-sdk`, `model-parameters`, and `tflite-model` folders from the project with the new ones in the trained model library.

2. Build the Application:
    - Delete the **build** folder from the project
    - Run the following command:

    ```
    mkdir build
    cd build
    cmake -G "MinGW Makefiles" ..
    make
    ```

3. Flash the firmware. 
    - Connect the RAK11310 RP2040 WisBlock board to your computer.
    - Hold the **BootSel** button in the RAK11300 module, reset the module. Press the reset button of WisBlock Base Board for at least 2 seconds, then wait for the USB Mass Storage RPI-RP2 to appear before releasing the BootSel button.
    - Run the following command:

    ```
    cp ei_rak11310_firmware.uf2 /g/
    ```

    - After uploaded successfully, reset the board.
    - Also, you can build and flash the firmware using **Visual Studio Code CMake tools**.

4. Run the model with the following command:

```
edge-impulse-run-impulse
```

- If your model uses audio, you may use the `--continuous` command as follows:

    ```
    edge-impulse-run-impulse --continuous
    ```

- Your model should run and print the inference results in the terminal continuously:


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Getting-Started-with-WisBlock-and-Edge-Impulse/16.continuous-results-rak11300.png"
  width="70%"
  caption="Continuous inference results"
/>

