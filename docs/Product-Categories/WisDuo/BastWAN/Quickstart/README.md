---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK3244. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/bastwan/BastWAN.png
prev: ../Overview/
next: false
tags:
  - BastWAN
  - RAK3244
  - quickstart
  - wisduo
---

# BastWAN Quick Start Guide

## Introduction

RAK3244 BastWAN puts the RAK4260 module into a Feather compatible format, developed by [ElectronicCats](http://www.electroniccats.com/). The RAK4260 LPWAN Module used as the core of RAK3244 BastWAN is based on Microchip’s SAM R34 (R34J18B). It is a SiP device integrating a 32-bit ARM Cortex -M0+ MCU with a LoRa Transceiver. It offers full coding support with the Arduino™ IDE.

For more information about the board, check the [ElectronicCats RAK3244 BastWAN repository](https://github.com/ElectronicCats/Bast-WAN).

## Hardware Setup

The BastWAN is a Feather breakout board with everything you need to get started on your project.

::: warning ⚠️ WARNING
Before powering the Feather Board, make sure that you have already connected the included LoRa Antenna. Not doing so might damage the board.
:::

## Software Setup



### Burning a Bootloader

RAK3244 BastWAN board comes with a pre-flashed bootloader upon purchase. However, if it is necessary to replace the bootloader, you can burn the [bootloader-bast-wan-v3.4.0.bin](https://github.com/RAKWireless/Evaluation_Boards/tree/master/RAK4260/Arduino) with Jlink as demonstrated below:

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/download.png"
  width="60%"
  caption="Burning the bootloader"
/>

You can also flash the bootloader by using the [RAKDAP1 Flash and Debug Tool](https://docs.rakwireless.com/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/). The guide on how to connect RAK3244 to RAKDAP1 can be found on [SWD Programming Interface section of RAK3244 datasheet](https://docs.rakwireless.com/Product-Categories/WisDuo/BastWAN/Datasheet/#interfaces).

After ensuring the correct wiring connection, you can now flash the bootloader using the `pyocd` command. If you do not have pyocd installed on your system, check the [pyocd installation guide](https://docs.rakwireless.com/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Quickstart/#pyocd-installation).

```
pyocd flash -t atsaml21j18a bootloader-bast-wan-v3.4.0.bin
```

Once the command is executed, the bootloader should be flashed successfully. You can now connect the RAK3244 BastWan to your PC.

### Setting up The Things Network (TTN)

In this section, The Things Network (TTN) and the procedure to set up the platform to connect with RAK3244 BastWAN are explained.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/3.ttn-context.png"
  width="65%"
  caption="RAK3244 BastWAN in the context of the TTN"
/>

As shown in **Figure 2**, the RAK3244 BastWAN is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense the relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that could generate efficiency, traceability, predictability capacity among others.

The RAK3244 BastWAN can be part of this ecosystem, and the objective of this section is to demonstrate how simple to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK3244 BastWAN must be located inside the coverage of a LoRaWAN gateway.

:::tip 📝 NOTE:
The device name used for the setup is "RAK4260" since it is the core of RAK3244 BastWAN. You can designate any device name you want on your setup.
:::

<b>Sign up and Login</b>

If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the Console.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/4.ttn-home.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/5.ttn_console.png"
  width="100%"
  caption="TTN Console Page"
/>

#### Create a New Application

1. Choose **APPLICATIONS**.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/6.application_section.png"
  width="100%"
  caption="Application Section"
/>

2. Click the “**add application**” button.


<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/7.adding_application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note of in adding an application:

    * **Application ID** - this will be the unique ID of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description** - this is a concise human-readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of the page. If you see a similar page as shown in **Figure 8**, then you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/8.application_overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/9.devices.png"
  width="100%"
  caption="Register a New Device"
/>

2. Then, register a new device by clicking on the "**register devices**".

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/10.adding_device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN protocol:

* Device EUI
* Application Key
* Application EUI

The TTN platform can generate these parameters randomly by leaving those fields empty, or you can enter already existing values.

3. Press the “**Register**” button at the bottom of this page to finish the process.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/11.device_overview.png"
  width="100%"
  caption="Device Overview"
/>

Now that the Device EUI, Application EUI, and Application Key are defined, you can now proceed with the setup of RAK3244 BastWAN LoRa configurations.

## Using Arduino IDE to Modify and Flash Firmware

In this section, you will be introduced on how to use the RAK3244 BastWAN with Arduino™ IDE.

### BSP Installation

1. After successful flashing of the bootloader, the BSP library should be installed. To add board support for the RAK3244 BastWAN, start Arduino IDE and open the Preferences window by navigating through **File > Preferences**. Now, copy and paste the following URL into the '**Additional Boards Manager URLs**' input field: `https://electroniccats.github.io/Arduino_Boards_Index/package_electroniccats_index.json`. Then, press the "**OK**" button.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/additional-board-support.png"
  width="60%"
  caption="Arduino additional board support"
/>

:::tip 📝 NOTE:
If there is already an existing URL on the textbox, click the button at the right end of the field. This will open an editing window, allowing you to paste the above URL onto a new line as demonstrated in **Figure 12**.
:::

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/support-board-add-url.png"
  width="60%"
  caption="Alternative method for additional board support"
/>

4. Open the "**Boards Manager**" by navigating through **Tools > Board > Boards Manager**.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/boards-manager.png"
  width="60%"
  caption="Arduino boards manager"
/>

1. Look for **Electronic Cats SAMD Boards** in the Boards Manager search bar. Click **Install** for the **Electronic Cats SAMD Boards**, and wait for the installation to finish before closing the window.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/electronic-cats-samd-boards.png"
  width="60%"
  caption="Installing Electronic Cats SAMD Boards"
/>

1. RAK3244 BastWAN should now be on the list of Boards by navigating through **Tools > Board > Electronic Cats SAMD(L)(C) Core for Arduino**.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/bastwan-in-boards.png"
  width="85%"
  caption="RAK3244 BastWAN available in Boards list"
/>

### LoRaWAN Library Installation

RAK3244 BastWAN board uses the Beelan-LoRaWAN library, which supports LoRaWAN Class A and Class C implementations operating in EU-868, AS-923, US-915, and AU-915 bands. You can recognize this library as the `<lorawan.h>` on the sample code.

In order for the sample code to work, the Beelan-LoRaWAN library must be installed. To do this, navigate to **Tools > Manage Libraries** on Arduino IDE. Then search for **Beelan LoraWAN** and install the latest version of the library. The window indicates if the library is installed, as shown in **Figure 15**.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/library-installed.png"
  width="70%"
  caption="Beelan LoRaWAN library installed"
/>

Visit the [Beelan-LoRaWAN official GitHub repository](https://github.com/BeelanMX/Beelan-LoRaWAN) for more information.

## First Test

For a quick test, a sample source code is provided for a LoRaWAN Class A node with OTAA support. Download the source code and open it with Arduino IDE.

- [Example source code for RAK3244 BastWAN](https://github.com/RAKWireless/Evaluation_Boards/tree/master/RAK4260/Arduino/send-class-A-OTAA)

The following sections will demonstrate how to modify LoRaWAN parameters to establish a connection with The Things Network (TTN).

### Modifying LoRaWAN Parameters

For the RAK3244 BastWAN to successfully connect to a LoRaWAN Platform, several parameters must be properly configured. Not doing so will result in connection failure.

The most volatile parameters on LoRaWAN configuration are the Device EUI, Application EUI, and Application Keys. These data must match with the ones on The Thing Network (TTN) platform. Copy the EUIs and Keys from the TTN platform and paste them on the sample source code. **Figure 17** shows the lines of codes that should be modified:

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/dev_app_eui.png"
  width="60%"
  caption="Device EUI, Application EUI, and Application Keys"
/>

### Compiling and Flashing the Firmware

Now that the LoRaWAN parameters are set, you can now run the sample program.

Click the **Verify** button on the upper left of Arduino IDE to compile the code. Before uploading the sample firmware, make sure that the RAK3244 BastWAN is connected and recognized by your PC. To verify this, there must be an assigned port on the **Tools** toolbar of Arduino IDE. It should not be grayed out.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/compilation.png"
  width="100%"
  caption="Compilation of sample source code"
/>

If everything is well, you can now click the **Upload** button and the firmware should be flashed to your RAK3244 BastWAN.

<rk-img
  src="/assets/images/wisduo/bastwan/quickstart/uploading.png"
  width="100%"
  caption="Uploading of sample source code"
/>

The RAK3244 BastWAN will try to join the LoRaWAN network server, and if it is successful, it will send a string to verify its presence. You can find more details of the operation by examining the sample source code and opening the serial monitor.

Feel free to experiment with your own and explore the capabilities of RAK3244 BastWAN.
