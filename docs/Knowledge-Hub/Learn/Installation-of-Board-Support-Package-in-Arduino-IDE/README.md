---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/arduino-ide.png
rak_desc: A brief guide on how to install the board support package in Arduino IDE.
tags:
  - Tutorial
  - WisBlock
header:
  title: Installation of Board Support Package in Arduino IDE
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/bsp-in-arduino-ide.jpg
posted: 8/14/2020 10:21 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 6 years.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---


# Installation of Board Support Package in Arduino IDE

## Arduino IDE Download and Installation

For WisBlock coding and programming, use Arduine IDE. If you don't have an Arduino IDE yet, you can download it in the [Arduino official website](https://www.arduino.cc/en/Main/Software).

You can see the current version of Arduino IDE is V1.8.13, and there are several versions available for Windows, Linux, and Mac OS X. Choose the correct version of Arduino IDE and download it.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/1.download-arduino.png"
  width="100%"
  caption="Arduino IDE latest version"
/>


### Install in Windows

Now let's install the Arduino IDE, which you just downloaded, on your Windows PC. 

1. Click **I Agree** to proceed.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/2.agreement-license.png"
  width="45%"
  caption="Arduino Setup Licence Agreement"
/>

2. Click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/3.installation-options.png"
  width="45%"
  caption="Arduino Setup Installation Options"
/>

3. Click **Install**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/4.installation-folder.png"
  width="45%"
  caption="Installing Arduino IDE"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/5.installing.png"
  width="45%"
  caption="Ongoing Installation"
/>


After 100% progress, the Arduino IDE has been installed successfully.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/6.installation-success.png"
  width="45%"
  caption="Successful Installation"
/>

### Install in Linux

In Linux, there is no install process. It is just a process of uncompression, then you can open Arduino IDE successfully.


### Install in Mac OS X

In Mac OS X, the same with Linux, there is no install process. It is just a process of uncompression, then you can open Arduino IDE successfully.


### Open Arduino IDE

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/7.arduino-ide.png"
  width="75%"
  caption="Arduino IDE"
/>

As shown in Figure 7 above, the Arduino IDE has mainly 5 parts:

1. **IDE Option Menu**

You can configure some general parameters such as the serial port, the board information, the libraries, the edit parameters, and so on.

2. **Operating Buttons**

The operating buttons has five operations.

  - **Verify/Compile** the source code.
  - **Upload** the compiled code into WisBlock.
  - **Open** a **New** Arduino IDE window or existing application.
  - **Save** the current application.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/8.operating-buttons.png"
  width="30%"
  caption="Operating Buttons"
/>


3. **Code Area**

You can edit the source code which will be compiled and uploaded into WisBlock later in this area.

4. **State Area**

5. **Output Message Area**

You can see the output message in this area, whether it's a failed or a success information.

### Configuration On Arduino IDE

Once Arduino IDE has been installed successfully, and you've understood the mainly parts of Arduino IDE, you can do some configuration changes on Arduino IDE so that it can be adapted to WisBlock.

1. Open Arduino IDE.

2. Go into Preferences.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/9.preferences.png"
  width="75%"
  caption="Preferences"
/>

3. Add [**https://downloads.rakwireless.com/Arduino/BSP/package_raknrf_index.json**](https://downloads.rakwireless.com/Arduino/BSP/package_raknrf_index.json) into the **Additional Board Manager URLs**. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/10.adding-rak-package.png"
  width="75%"
  caption="Adding RAKwireless nRF Board"
/>

4. Restart the Arduino IDE.

5. Open the Boards Manager from Tools Menu. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/11.boards-manager.png"
  width="75%"
  caption="Opening Boards Manager"
/>

6. Search and install "**RAKwireless nRF Boards**".

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/12.installing-rak-nrf.png"
  width="75%"
  caption="Installing RAKwireless nRF Boards"
/>


7. Once the BSP is installed, select any RAK WisBlock modules which will update your system configuration to use the right compiler and settings for the module.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/13.rakwireless-nrf-modules.png"
  width="75%"
  caption="Selecting RAKwireless WisBlock Modules"
/>


### Examples and Tutorials 

After you selected a RAK board, you can see the examples for all WisBlock modules.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/14.wisblock-modules.png"
  width="100%"
  caption="Selecting WisBlock Modules Examples"
/>

For more information about the examples and tutorials, visit RAK [Github WisBlock repository](https://github.com/RAKWireless/WisBlock).

### Development Version

#### Adafruit's nrfutil tools

The [adafruit-nrfutil](https://github.com/adafruit/Adafruit_nRF52_nrfutil) (derived from Nordic pc-nrfutil) is needed to upload sketch via serial port.

  - For Windows and macOS, pre-built executable binaries are included in the BSP at `tools/adafruit-nrfutil/`. It should work out of the box.
  - Linux users need to run follow command to install it from PyPi.

```
$ pip3 install adafruit-nrfutil --user
```

#### Drivers

  - [SiLabs CP2104 driver](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) might be required for some modules.


## Credits 

This BSP is based on [Adafruits nRF52 BSP](https://github.com/adafruit/Adafruit_nRF52_Arduino). It is based on [Arduino-nRF5](https://github.com/sandeepmistry/arduino-nRF5) by **Sandeep Mistry** which is also based on the [Arduino SAMD Core](https://github.com/arduino/ArduinoCore-samd).

The following libraries are used:

  - adafruit-nrfutil is based on Nordic Semiconductor ASA's [pc-nrfutil](https://github.com/NordicSemiconductor/pc-nrfutil)
  - [freeRTOS](https://www.freertos.org/) as operating system
  - [tinyusb](https://github.com/hathach/tinyusb) as USB stack
  - [nrfx](https://github.com/NordicSemiconductor/nrfx) for peripherals driver
  - [littlefs](https://github.com/ARMmbed/littlefs) for internal file system


<rk-author />