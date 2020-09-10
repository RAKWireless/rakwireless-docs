---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK815
---

# Quick Start Guide

## Prerequisite

<!---
<rk-img
  src="/assets/images/wistrio/rak815/quickstart/2quick-start-guide/rak815-overview.jpg"
  width="30%"
  caption="RAK815 WisTrio LPWAN Tracker"
/>
-->

### What do you need?

1. **RAK815 WisTrio LPWAN Tracker**
2. Emulator Kit w/ Debugging Tool
3. Micro - USB Cable
4. Gateway in Range for Testing
5. Raspberry Pi
6. A Windows/Mac OS/Linux Computer
7. Android phone/ Iphone


:::tip 📝 NOTE
This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, please refer to the sections below:
* [Firmware Burning](#device-firmware-setup)
* [Firmware Upgrading](#upgrading-the-firmware)
:::

### What's included in the Package?

* 1-pc RAK815 WisTrio LPWAN Tracker
* 1-pc Micro USB Cable
* 1-pc GPS Antenna
* 1-pc LoRa® Antenna
* 1-pc Rod Antenna
* 10-pcs Dupoint Lines
* 5-pcs Jumping Caps
* Battery Port Line

## Product Configuration

### Interfacing with RAK815 WisTrio LPWAN Tracker

In order for you to interface with the RAK815 WisTrio LPWAN Tracker with your Windows Machine, you need to download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

:::warning ⚠️ WARNING
Before powering the RAK815 WisTrio LPWAN Tracker, you should install the LoRa® antenna first . Not doing so might damage the board
:::

1. Using a standard **Micro - USB Cable**, connect your RAK815 WisTrio LPWAN Tracker to your computer.

:::tip 📝 NOTE
If this is your first time to connect your RAK815 WisTrio LPWAN Tracker to your computer, it should automatically download the USB - Serial Port Chip CP2102, in order for them to communicate propperly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.
:::

2. Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for Other Devices.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/serial-driver.png"
  width="100%"
  caption="Missing Driver for the RAK815 WisTrio LPWAN Tracker"
/>

3. Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automaticaly for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/automatic-install.png"
  width="100%"
  caption="Automatic Driver Installation via Internet"
/>

4. Wait for it to automatically download and install the missing driver. Once installation is done, "**Silicon Labs CP210x USB to UART Bridge**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB - Serial Port Chip CP2102 driver is **COM41**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/cp210x-driver.jpg"
  width="60%"
  caption="USB - Serial Port Chip CP2102 Driver Successfully Installed"
/>

:::tip 📝 NOTE
In case the previous measures mentioned beforehand does not install the needed driver, go to the [USB - Serial Port Chip CP2102](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) website to manually download and install it.
:::

Congratulations! :tada: You have just successfully interfaced your RAK815 WisTrio LPWAN Tracker with your computer!

### Configuring the LoRaWAN®

#### Project Structure

Because IAR 8.11 and Keil5 has similar project structure, we will be using the IAR 8.11 structure throughout the configuration settings. Visit the [IAR Embedded Workbench IDE](https://www.iar.com/iar-embedded-workbench/#!?architecture=Arm)'s website to know more.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/iar-project-structure.jpg"
  width="40%"
  caption="IAR Project Structure"
/>

#### Application Switch

In the [**GitHub Open Source**](https://github.com/RAKWireless/RAK813-BreakBoard/tree/master/Apps) projects, there are three application cases. Users only need to replace the main.c and app_lora.c files in the project to switch between different applications.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/iar-application-switching.jpg"
  width="100%"
  caption="Switching Applications in IAR"
/>

The applications are made available in the open source code by clicking this file directory: `RAK813-BreakBoard-master>>Doc>>hex`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/app-demo-dir.jpg"
  width="80%"
  caption="Application Demo Directory"
/>

#### Configuration of LoRaWAN® Parameters

This Board can be connected to LoRaWAN® through **Over-the-Air-Activation(OTAA)** or **Activation-By-Personalization(ABP)** activation modes. This can be modified through the `Commissioning.h` file available in the open source code

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/otaa-activation.jpg"
  width="100%"
  caption="Configuring LoRaWAN® Activation Mode in OTAA"
/>

Along with the following parameters: **Device EUI, Application EUI, App Key for OTAA; Device Address, Network Address and Application key** for ABP.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/config-app-parameters.jpg"
  width="100%"
  caption="Configuring Application Parameters"
/>

#### Modify LoRaWAN® Region

The open source code is based on LoRaWAN® 1.0.2 modified from, so the supported regions have: **EU868, US915, AS923, AU915, IN865, KR920**. If you want to modify the region, you can modify the macro definition.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/region-iar.jpg"
  width="75%"
  caption="Configuring Application Parameters"
/>

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/region-iar-kiel.jpg"
  width="75%"
  caption="Modifying the LoRaWAN® Region in Keil"
/>

Congratulations! :tada: You now have successfully modified your LoRaWAN® parameters.

### Application Demonstration

In this section, you will learn the three different open source application demo of the RAK815 WisTrio LPWAN Tracker. 

#### Log Information

After you finish downloading the application, you can view the Log Information through the serial port defined by the firmware. But first, you need to connect **Pin3 >> Pin5, Pin4 >> Pin6** on the UART switch Interface. Refer to the [RAK815 WisTrio LPWAN Tracker Datasheet](/Product-Categories/WisTrio/RAK815/Datasheet/) for proper reference.

:::tip 📝 NOTE
The serial program used in this demonstration is CommUart Assistant, although you may use other serial terminals.
:::

##### See Log Information

After successfully installing the driver, connect the device to the PC via the Micro
USB connector. Then reset (reset Button is defined as SW3) device will see the following
log information in the serial port.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/commuart-assistant-serial-terminal.jpg"
  width="75%"
  caption="CommUart Assistant Serial Terminal"
/>

#### LoRaWAN® Demo

* Turn on your RAK815 and download the LoRaWAN® Demonstration. 
* Navigate to the Bluetooth settings of your mobile phone and check for "RAK815 LPWAN Demo". 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/bluetooth-radio-status.jpg"
  width="40%"
  caption="Bluetooth Radio Status in Mobile Phone"
/>

* Using your mobile devices, search for "**nordic**" in Apple Store or Google Play Store and install the nRF Connect App.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/nrf-connect-app.jpg"
  width="80%"
  caption="nRF Connect App"
/>

* Open the app and connect to the device's Bluetooth radio "**RAK813
LPWAN Demo**". Then, click RX Characteristic to
send data.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/connect-to-nrf.jpg"
  width="80%"
  caption="Connecting to RAK815 Bluetooth through nRF Connect"
/>

* Type the value `123456` as a sample message and click "**send**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/send-to-nrf.jpg"
  width="80%"
  caption="Sending Message through nRF Connect"
/>

* After sending, you can see the message in the serial port's Log information.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-serial-port.jpg"
  width="75%"
  caption="Message shown in the Serial Port log Information"
/>

##### Parameters using LoRaWAN® Demo

The LoRaWAN® web server provider selected use for this case is The Things Network (TTN). To know more about setting up your LoRa® Gateway device, refer to this **[document](https://www.thethingsnetwork.org/labs/story/rak831-lora-gateway-from-package-to-online).**

* After getting OTAA or ABP parameters of device from TTN, you can write data into the flash of RAK815 by transmitting data
through Bluetooth. The format of the data you are sending must be as shown below:

```
lora_cfg:dev_eui=xxxxxxxxxxxxxxxx&app_eui=xxxxxxxxxxxxxxxx&app_key=xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx&dev_addr=xxxxxxxx&nwkskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxx&appskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::tip 📝 NOTE
Because the information is too long, the serial port won't show the details of the configuration.
:::

* After successfully configuring your device parameters, a message will be shown in your serial port saying: "**LoRaWAN**® **parameters configured successfully**".

* Then, **Reset** the device. If your gateway device is ready, RAK815 will send a join request to LoRaWAN® network server. You can see the successful information in the terminal. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/lorawan-status.jpg"
  width="75%"
  caption="LoRaWAN® Parameters Configuration Status"
/>

* You can also see the data sent by the device on the TTN:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/ttn-param-lorawan.jpg"
  width="75%"
  caption="LoRaWAN® Parameter Settings in TTN"
/>

#### Peripherals Demo

* **Download** the Peripherals Demo into your RAK815.
* Navigate to the Bluetooth settings of your mobile phone and check for **"RAK815 Peripherals Demo"**. 
* The device's log information serial port will print the device's sensor information every five
seconds.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/dev-info-status.jpg"
  width="75%"
  caption="Device Information Status"
/>

* Similarly with the LoRaWAN® Demo, you can also send message through the nRF Connect app you installed. The message can be viewed to our serial terminal as shown in the image below.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-serial-port2.jpg"
  width="75%"
  caption="Message Received shown in Serial Port"
/>

* If you connect the LCD to the LCD's expansion interface, you can also see the data
for each sensor on the LCD display.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-lcd.jpg"
  width="40%"
  caption="Message Status shown in LCD"
/>

#### Scan Demo

* Download the Scan Demo into your RAK815.
* Navigate to the Bluetooth settings of your mobile phone and check for **"RAK815 Scan Demo"**. 
* Same with the previous application, open the nRF Connect app and connect to the Bluetooth named "RAK815 Scan Demo"; configure the device by sending the LoRaWAN® parameters. The configuration status can be seen in the serial port as shown in the figure below. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/lorawan-status2.jpg"
  width="75%"
  caption="LoRaWAN® Parameters Configuration Status"
/>

* After successfully configuring the parameters, check if your gateway has been set in advance. Reset the device and a message will be sent to your terminal that the device has successfully joined in OTAA. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/otaa-activation.jpg"
  width="75%"
  caption="OTAA Activation Message"
/>

* Next, if you press the first button of the device, see the figure below. The device will
scan the surrounding Bluetooth device for 1s. 

:::tip 📝 NOTE
This device can only scan Bluetooth BLE devices.
:::

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/button-press-ble.jpg"
  width="35%"
  caption="Pressing the Button to Scan BLE"
/>

* If the device scans a Bluetooth BLE device, the scanned device information is printed
out from the log information serial port.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/scanned-ble-status.jpg"
  width="75%"
  caption="Scanned BLE Information Status"
/>

* If your device is in a LoRaWAN® connection state, at this point your device will send
the Bluetooth BLE device information you scanned to the LoRaWAN® server.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/scanned-ble-ttn-stat.jpg"
  width="75%"
  caption="Scanned BLE Device Information shown in TTN"
/>

* In addition, if you connect the LCD to the device LCD expansion interface, you can
view the real-time status of the device on the LCD

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/status-in-lcd.jpg"
  width="40%"
  caption="Status Update shown in LCD"
/>

## Miscellaneous

### Device Firmware Setup

#### Open Source Directory 

The RAK815 WisTrio LPWAN Tracker is an open source hardware where users can get all the information about the product. It includes schematic diagrams, program codes and other references which could be helpful in building your RAK815 projects. 

This open source project is based on the official code LoRaWAN® 1.0.2 and Nordic
nRF5 SDK 14.0.0, modified to support IAR8.11 and Keil5 Compiler. 

* To start with, download the files in this open source **[directory](https://github.com/RAKWireless/RAK813-BreakBoard).**

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/github.jpg"
  width="100%"
  caption="Open Source Directory for RAK815"
/>

#### Firmware

To enable the Bluetooth functionality of our device, you must first write the Bluetooth protocol stack using the official nRFgo Studio Tool. 

* Download and Install the nRFgo Studio Tool through the **[Nordic Official Site](http://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52832)** or through the **[RAKwireless Downloads](https://downloads.rakwireless.com/en/LoRa/RAK815/Tools/)**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/nrfgo-studio-tool-installer.jpg"
  width="100%"
  caption="RFgo Studio tool Installer"
/>

##### Installing the J-Link Driver

1. Navigate to this **[J-Link Site](https://www.segger.com/downloads/jlink).**

2. Click  the “**Click for downloads**” under “**J-Link Software and Documentation Pack**”.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-jlink.jpg"
  width="100%"
  caption="Downloading J-Link Software"
/>

3. Download the appropriate package for your OS.
    
4. Accept the License Agreement.
    
5. Run the installation program with default configurations. 

##### Downloading the Bluetooth Protocol Stack

1. Connect the RAK815 SWD interface (refer to the [**datasheet**](/Product-Categories/WisTrio/RAK815/Datasheet/) with the J-Link device SWD interface. Then, connect the J-Link device to the PC through the USB port.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/rak815-jlink.jpg"
  width="75%"
  caption="RAK815 connected to J-TAG Debugger"
/>

2. Open the nRFgo Studio Tool, then select "**nRF5X Programming**" under the Device Manager.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/nrf5x-studio-tool.jpg"
  width="100%"
  caption="nRF5x Programming in nRFgo Studio Tool"
/>

3. Click "**Erase all**" and select the "**Program SoftDevice**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/erase-program-softdev.jpg"
  width="100%"
  caption="Erasing all and Program SoftDevice Function"
/>

4. Browse the Bluetooth protocol stack file from the open source code through this directory: `RAK813-Breakboard-master>>nRFLib>>components>>softdevice>>s132>>hex`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/bluetooth-protocol-dir.jpg"
  width="80%"
  caption="Bluetooth Protocol Stack Directory"
/>

5. And click "**Program**" to complete the download.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/browse-stack-file.jpg"
  width="100%"
  caption="Browsing Stack File and Clicking Program"
/>

#### Downloading the Application Code

There are three ways to download your application code into your device: **nRFgo Studio Tool**, **Keil Compiler** and **IAR compiler**.

##### Using nRFgo Studio Tool

* After completing the Bluetooth protocol station, click the "**Program Application**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-program-app.jpg"
  width="100%"
  caption="Downloading Program Application"
/>

* Browse for the application code and click "**Program**". Sample programs are made available in the open source code, follow this directory: `RAK813-BreakBoard-master>>Doc>>hex`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/app-demo-loc.jpg"
  width="80%"
  caption="Application Demo Location"
/>

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/browse-app-click.jpg"
  width="100%"
  caption="Browsing Application and Click"
/>

##### Using Keil Compiler

* Download and Install the latest version of Keil Compiler through the [Keil Website](http://www.keil.com/).

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/arm-keil-homepage.jpg"
  width="100%"
  caption="ARM KEIL Homepage"
/>

:::tip 📝 NOTE
The best version of Keil Compiler is version 5.5 or above. If your installed Keil compiler supports nRF52832 environment, then it is not necessary to install the nRF52832 environment.
:::

* Install the nRF52832 compiler environment for Keil5 from our repository:  `RAK813-Breakboard-master>>Keil5`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/keil5-directory.jpg"
  width="80%"
  caption="Compiler Environment for Keil5 Directory"
/>

* After installing it, you can see the Nordic chip information from `Options -> Device`.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/select-nordic-chip.jpg"
  width="75%"
  caption="Selecting the Nordic Chip Information"
/>

* Use the J-Link device to connect your RAK815 and PC, then write your project. You can open sample projects available in this directory: `RAK813-BreakBoard-master>>Keil5`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/project-sample-location.jpg"
  width="80%"
  caption="Project Sample Location"
/>

* Click "Build", then "Download" to download your application code. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/build-download-app.jpg"
  width="100%"
  caption="Building and Downloading the Application Code"
/>

If you choose to “**Create HEX file**” in the Keil tool's options then you can see the HEX
file in Keil's output directory. This file can also be used by nRFgo Stdio Tool.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/hex-files-keil5.jpg"
  width="75%"
  caption="Allowing HEX Files in KEIL5"
/>

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/sample-hex-file-loc.jpg"
  width="80%"
  caption="Sample Hex File Location"
/>

##### Using IAR Compiler

The writing of programs using IAR Compiler has the same steps with the Keil Compiler with different tools but the same functions.

* First, download and Install the latest version of IAR Compiler through the [IAR Website](https://www.iar.com/).
* Open the IAR project and click "Make" menu. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/make-tool-iar.png"
  width="80%"
  caption="Make Tool in IAR Compiler"
/>

* Then, click the "**Project**" menu and select the download directory in the "**Download Activities Application**" option to complete the download.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-app-code.png"
  width="80%"
  caption="Downloading Application Code to the Device"
/>

* If you choose to export the HEX file in the IAR options menu, you can also see the HEX file in the IAR output folder. This file can also be used by nRFgo Stdio Tool.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/allow-hex-file-iar.jpg"
  width="75%"
  caption="Allowing HEX File Exports in IAR"
/>

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/sample-hex-file-loc2.jpg"
  width="80%"
  caption="Sample Hex File Directory"
/>

Congratulations! :tada: You now have completed your firmware setup. Up next will be the configuration of your LoRaWAN® settings.

### Upgrading the Firmware

Device Firmware Upgrade or DFU is a tool in upgrading your firmware. It is part of the [GitHub Open Source](https://github.com/RAKWireless/RAK813-BreakBoard) project you downloaded for upgrading the firmware of your IAR and Keil Compiler. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-file-location.jpg"
  width="80%"
  caption="DFU File Location"
/>

* We provide users with hex files, which users can find in the open source project Doc folder:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-hex-files.jpg"
  width="80%"
  caption="DFU Hex Files"
/>

* However, it should be noted that using the DFU function of the nRF, unlike the previous firmware programming method, the bootloader firmware must be programmed. Therefore, three firmwares need to be programmed to use the DFU function. They are the Bluetooth protocol stack firmware, the DFU application firmware, and the bootload firmware. Bootload firmware can be found in open source functions.

:::tip 📝 NOTE
For details on how to program the Bluetooth protocol stack and application firmware, review the [Device Firmware Setup](#device-firmware-setup).
:::

* The following figure shows how to program bootloader firmware:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/programming-bootloader.jpg"
  width="100%"
  caption="Programming Bootloader Firmware"
/>

* After all firmware are written, the device will automatically restart. At this time, use your
mobile phone Bluetooth scan, you will see a device named "**RAK813_DFU**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/rak813-ble-radio.jpg"
  width="35%"
  caption="RAK813 DFU Bluetooth Radio"
/>

* Use the nRF official phone app nRF Connect to connect to the device's Bluetooth. 

* To upgrade the firmware, you need to import the upgraded firmware to your mobile phone. The upgrade file, a zip file, is accessible from the downloaded open source code by following this directory: **RAK813-BreakBoard-master**>> **Doc**>> **Hex**>> **rak815_app_package.zip**. Copy this sample upgrade file to your mobile phone. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-app-package-zip.jpg"
  width="80%"
  caption="DFU App Package Zip File"
/>

:::tip 📝 NOTE
About how to make an upgraded zip file, and how to program DFU step by step, visit the official forum detailing the method. Interested parties can view this [document](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/getting-started-with-nordics-secure-dfu-bootloader).
:::

* Open the nRF app and press "**CONNECT**" button in the **RAK813_DFU** Bluetooth. Then, click the **DFU** icon in the
upper right corner.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/connecting-rak813-dfu.jpg"
  width="80%"
  caption="Connecting to RAK813 DFU"
/>

* Select the **rak815_app_package.zip** file, and the device will automatically start upgrading the firmware. 

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/import-upgrade-zip-file.jpg"
  width="80%"
  caption="Importing the Upgrade Zip File"
/>

* At this point, the program will jump to the bootload and execute the bootload. Then click on the
RAK813_DFU as highlighted in the figure to the right, you can see the progress of the program sent.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/upgrade-progress-chart.jpg"
  width="80%"
  caption="Upgrade Progress Chart"
/>


* After the program upgrade is complete, reset the device and you will see that your device's Bluetooth broadcast name has changed.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dev-ble-boardcast-changes.jpg"
  width="40%"
  caption="Device's Bluetooth Broadcast Changes"
/>

Congratulations! :tada: You have completed the RAK815 WisTrio LPWAN Tracker Configuration and successfully upgraded the firmware. You are now ready to try your own projects using the device.


