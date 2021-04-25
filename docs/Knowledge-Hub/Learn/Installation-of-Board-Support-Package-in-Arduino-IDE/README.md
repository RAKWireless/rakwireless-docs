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

For WisBlock coding and programming, use Arduino IDE. If you don't have an Arduino IDE yet, you can download it in the [Arduino official website](https://www.arduino.cc/en/Main/Software).

----
:::warning ⚠️ WARNING    
_**If you are using Windows 10**_.    
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Please install the original Arduino IDE from the Arduino official website! The Arduino app from the Microsoft App Store has problems to use third party Board Support Packages.
:::

----

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

3. To add the WisBlock Core on your Arduino Boards list, you need to edit the Additional Board Manager URLs. Click the icon as shown in Figure 10.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/add_bsp_icon.png"
  width="75%"
  caption="Modifying Additional Board Manager URLs"
/>

1. Copy this URL `https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json` and paste it on the field as shown in Figure 11. If there are other URLs already there, just add it on the next line. After adding the URL, click OK.



<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/add-bsp-url.png"
  width="75%"
  caption="Adding RAKwireless WisBlock Core BSP"
/>
 
5. Restart the Arduino IDE.

6. Open the Boards Manager from Tools Menu. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/11.boards-manager.png"
  width="75%"
  caption="Opening Boards Manager"
/>

7. Write **RAK** in the search bar as shown in Figure 13. This will show the available RAKwireless WisBlock Core boards that you can add in your Arduino Board list. Select the WisBlock Core that you have and click **Install**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/wisblock_core.png"
  width="75%"
  caption="Installing WisBlock Core Boards"
/>


8. Once the BSP is installed, select any RAK WisBlock modules which will update your system configuration to use the right compiler and settings for the module.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/13.rakwireless-nrf-modules.png"
  width="75%"
  caption="Selecting RAKwireless WisBlock Modules"
/>


### Examples and Tutorials 

After selecting a RAK board, you can see the examples for all WisBlock modules.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/14.wisblock-modules.png"
  width="100%"
  caption="Selecting WisBlock Modules Examples"
/>

#### Compile an example

Let's take one of the examples and compile it.      
Open the LoRaWAN-OTAA example from the File -> Example menu.    
<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/15.select-lora-otaa-example.png"
  width="75%"
  caption="Selecting LoRa OTAA example"
/>

The example will open in a new window. You can close the old window.

Next we need to install the LPWAN library. In the code in line 20 you can see the link for the required library

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/16.install-library-step1.png"
  width="75%"
  caption="Install LPWAN library step 1"
/>

Double click on the link to open the library manager. It will show you the required library. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/17.install-library-step2.png"
  width="75%"
  caption="Install LPWAN library step 1"
/>

Click on **Install** to install the library. After installation you can close the library manager window.

Now we are ready to compile the example code. 

Click on the **Verify/Compile** icon in the menu.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/18.compile-example.png"
  width="75%"
  caption="Compile example"
/>

Now, you have successfully installed the LPWAN library and compiled your first WisBlock solution. However, to be able to connect to the LPWAN gateway and the LPWAN server, a few more steps are required. Head on to the full tutorial in the RAK [Github WisBlock repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa/LoRaWAN) to see how to setup the node's EUI's and keys and how to register the node on the gateway and in the LPWAN server.

---- 
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
