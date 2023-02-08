---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK815
  - quickstart
  - wistrio
rak_desc: Contains instructions and tutorials for installing and deploying your RAK815 WisTrio LPWAN Tracker. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LPWAN Tracker.
rak_img: /assets/images/wistrio/rak815/quickstart/1main/RAK815.png

---

# RAK815 Quick Start Guide

## Prerequisite



### What do you need?

1. [RAK815 WisTrio LPWAN Tracker](https://store.rakwireless.com/products/rak815-hybrid-location-tracker?utm_source=RAK815HybridLocationTracker&utm_medium=Document&utm_campaign=BuyFromStore)
2. Emulator Kit w/ Debugging Tool
3. Micro - USB Cable
4. Gateway in Range for Testing
5. Raspberry Pi
6. A Windows/Mac OS/Linux Computer
7. Android phone/ iPhone


:::tip 📝 NOTE
This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, refer to the following sections:
* [Firmware Burning](#device-firmware-setup)
* [Firmware Upgrading](#upgrading-the-firmware)
:::

### What's Included in the Package?

* 1-pc RAK815 WisTrio LPWAN Tracker
* 1-pc Micro USB Cable
* 1-pc GPS Antenna
* 1-pc LoRa Antenna
* 1-pc Rod Antenna
* 10-pcs Dupont Lines
* 5-pcs Jumping Caps
* Battery Port Line

## Product Configuration

### Interfacing with RAK815 WisTrio LPWAN Tracker

To interface with the RAK815 WisTrio LPWAN Tracker with your Windows Machine, you need to download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

:::warning ⚠️ WARNING
Before powering the RAK815 WisTrio LPWAN Tracker, you should install the LoRa antenna first. Not doing so might damage the board.
:::

1. Using a standard **Micro - USB Cable**, connect your RAK815 WisTrio LPWAN Tracker to your computer.

:::tip 📝 NOTE
If this is your first time to connecting your RAK815 WisTrio LPWAN Tracker to your computer, it should automatically download the USB - Serial Port Chip CP2102 for them to communicate properly. Make sure to have internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step.
:::

2. Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for Other Devices.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/serial-driver.png"
  width="100%"
  caption="Missing Driver for the RAK815 WisTrio LPWAN Tracker"
/>

3. Under the "**Other devices**" drop-down list, an unknown **USB2.0-Serial** driver must appear. Right click on it and choose "**Search automaticaLly for updated driver software**". Again, before doing so, make sure to have internet access, or it will fail.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/automatic-install.png"
  width="100%"
  caption="Automatic Driver Installation via Internet"
/>

4. Wait for it to automatically download and install the missing driver. Once installation is done, "**Silicon Labs CP210x USB to UART Bridge**" must appear in the **Ports (COM & LPT)** drop-down list. COM port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB - Serial Port Chip CP2102 driver is **COM41**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/3interfacing/cp210x-driver.jpg"
  width="60%"
  caption="USB - Serial Port Chip CP2102 Driver Successfully Installed"
/>

:::tip 📝 NOTE
In case the previous measures mentioned beforehand do not install the needed driver, go to the [USB - Serial Port Chip CP2102](https://www.silabs.com/products/development-tools/software/usb-to-uart-bridge-vcp-drivers) website to manually download and install it.
:::

Now, you have successfully interfaced your RAK815 WisTrio LPWAN Tracker with your computer.

### Configuring the LoRaWAN

#### Project Structure

Because IAR 8.11 and Keil5 has similar project structure, you will be using the IAR 8.11 structure throughout the configuration settings. Visit the [IAR Embedded Workbench IDE](https://www.iar.com/iar-embedded-workbench/#!?architecture=Arm) website to know more.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/iar-project-structure.jpg"
  width="40%"
  caption="IAR Project Structure"
/>

#### Application Switch

There are three application cases in the [**GitHub Open Source**](https://github.com/RAKWireless/RAK813-BreakBoard/tree/master/Apps) projects. You only need to replace the `main.c` and `app_lora.c` files in the project to switch between different applications.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/iar-application-switching.jpg"
  width="100%"
  caption="Switching Applications in IAR"
/>

The applications are made available in the open-source code by clicking the following file directory: **`RAK813-BreakBoard-master>>Doc>>hex`**

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/app-demo-dir.jpg"
  width="80%"
  caption="Application Demo Directory"
/>

#### Configuration of LoRaWAN Parameters

This Board can be connected to LoRaWAN through **Over-the-Air-Activation (OTAA)** or **Activation-By-Personalization (ABP)** activation modes. It can be modified through the `Commissioning.h` file available in the open-source code.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/otaa-activation.jpg"
  width="100%"
  caption="Configuring LoRaWAN Activation Mode in OTAA"
/>

Each mode has the following parameters:
- For OTAA
    - Device EUI
    - Application EUI
    - App Key
- For ABP
    - Device Address
    - Network Address
    - Application Key

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/config-app-parameters.jpg"
  width="100%"
  caption="Configuring Application Parameters"
/>

#### Modify LoRaWAN Region

The open-source code is based on LoRaWAN 1.0.2 modified, so the supported regions are **EU868, US915, AS923, AU915, IN865, and KR920**. If you want to modify the region, you can modify the macro definition.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/region-iar.jpg"
  width="75%"
  caption="Configuring Application Parameters"
/>

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/4configuring-the-lorawan/region-iar-kiel.jpg"
  width="75%"
  caption="Modifying the LoRaWAN Region in Keil"
/>

Now, you now have successfully modified your LoRaWAN parameters.

### Application Demonstration

In this section, you will learn the three different open-source application demo of the RAK815 WisTrio LPWAN Tracker.

#### Log Information

After you finish downloading the application, you can view the Log Information through the serial port defined by the firmware. But first, you need to connect **Pin3 -> Pin5, Pin4 -> Pin6** on the UART switch Interface. Refer to the [datasheet](/Product-Categories/WisTrio/RAK815/Datasheet/) for the proper reference.

:::tip 📝 NOTE
The serial program used in this demonstration is CommUart Assistant, although you may use other serial terminals.
:::

##### See Log Information

After successfully installing the driver, connect the device to the PC via the MicroUSB connector. Then reset (reset Button is defined as SW3) service will see the following log information in the serial port.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/commuart-assistant-serial-terminal.jpg"
  width="75%"
  caption="CommUart Assistant Serial Terminal"
/>

#### LoRaWAN Demo

1. Turn on your RAK815 and download the LoRaWAN Demonstration.
2. Navigate to the Bluetooth settings of your mobile phone and check for "**RAK815 LPWAN Demo**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/bluetooth-radio-status.jpg"
  width="40%"
  caption="Bluetooth Radio Status in Mobile Phone"
/>

3. Using your mobile devices, search for "**nordic**" in Apple Store or Google Play Store, and install the nRF Connect App.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/nrf-connect-app.jpg"
  width="80%"
  caption="nRF Connect App"
/>

4. Open the app and connect to the device's Bluetooth radio "**RAK813 LPWAN Demo**", then click RX Characteristic to send data.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/connect-to-nrf.jpg"
  width="80%"
  caption="Connecting to RAK815 Bluetooth through nRF Connect"
/>

5. Type the value `123456`, as a sample message, and click "**send**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/send-to-nrf.jpg"
  width="80%"
  caption="Sending Message through nRF Connect"
/>

6. After sending, you can see the message in the serial port's Log information.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-serial-port.jpg"
  width="75%"
  caption="Message shown in the Serial Port log Information"
/>

##### Parameters Using LoRaWAN Demo

The LoRaWAN web server provider selected to use for this case is The Things Network (TTN). To know more about setting up your LoRa Gateway device, refer to **[The Things Network document](https://www.thethingsnetwork.org/labs/story/rak831-lora-gateway-from-package-to-online)**.

1. After getting the OTAA or ABP parameters of the device from TTN, you can write data into the flash of RAK815 by transmitting data
through Bluetooth. The format of the data you are sending must be the same, as shown below:

```
lora_cfg:dev_eui=xxxxxxxxxxxxxxxx&app_eui=xxxxxxxxxxxxxxxx&app_key=xxxxxxxxxxx xxxxxxxxxxxxxxxxxxxxx&dev_addr=xxxxxxxx&nwkskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxx&appskey=xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"
```

:::tip 📝 NOTE
Because the information is too long, the serial port won't show the details of the configuration.
:::

2. After successfully configuring your device parameters, a message will be shown in your serial port saying: "**LoRaWAN**® **parameters configured successfully**".

3. Then, **Reset** the device. If your gateway device is ready, RAK815 will send a join request to the LoRaWAN network server. You can see the successful information in the terminal.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/lorawan-status.jpg"
  width="75%"
  caption="LoRaWAN Parameters Configuration Status"
/>

4. You can also see the data sent by the device on the TTN:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/ttn-param-lorawan.jpg"
  width="75%"
  caption="LoRaWAN Parameter Settings in TTN"
/>

#### Peripherals Demo

1. **Download** the Peripherals Demo into your RAK815.
2. Navigate to the Bluetooth settings of your mobile phone and check for "**RAK815 Peripherals Demo**".
3. The device's log information serial port will print the device's sensor information every five seconds.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/dev-info-status.jpg"
  width="75%"
  caption="Device Information Status"
/>

4. Similarly with the LoRaWAN Demo, you can also send a message through the nRF Connect app you installed. The message can be viewed on our serial terminal, as shown in **Figure 20**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-serial-port2.jpg"
  width="75%"
  caption="Message Received shown in Serial Port"
/>

5. If you connect the LCD to the LCD's expansion interface, you can also see the data for each sensor on the LCD display.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/message-in-lcd.jpg"
  width="40%"
  caption="Message Status shown in LCD"
/>

#### Scan Demo

1. Download the Scan Demo into your RAK815.
2. Navigate to the Bluetooth settings of your mobile phone and check for "**RAK815 Scan Demo**".
3. Same with the previous application, open the nRF Connect app and connect to the Bluetooth named "RAK815 Scan Demo"; configure the device by sending the LoRaWAN parameters. The configuration status can be seen in the serial port, as shown in **Figure 22**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/lorawan-status2.jpg"
  width="75%"
  caption="LoRaWAN Parameters Configuration Status"
/>

4. After successfully configuring the parameters, check if your gateway has been set in advance. Reset the device and a message will be sent to your terminal that the device has successfully joined OTAA.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/otaa-activation.jpg"
  width="75%"
  caption="OTAA Activation Message"
/>

5. Next, if you press the first button of the device, see **Figure 24**. The device will scan the surrounding Bluetooth device for 1s.

:::tip 📝 NOTE
This device can only scan Bluetooth BLE devices.
:::

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/button-press-ble.jpg"
  width="35%"
  caption="Pressing the Button to Scan BLE"
/>

6. If the device scans a Bluetooth BLE device, the scanned device information is printed out from the log information serial port.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/scanned-ble-status.jpg"
  width="75%"
  caption="Scanned BLE Information Status"
/>

7. If your device is in a LoRaWAN connection state, at this point your device will send the Bluetooth BLE device information you scanned to the LoRaWAN server.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/scanned-ble-ttn-stat.jpg"
  width="75%"
  caption="Scanned BLE Device Information shown in TTN"
/>

8. In addition, if you connect the LCD to the device LCD expansion interface, you can view the real-time status of the device on the LCD

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/5application-demonstration/status-in-lcd.jpg"
  width="40%"
  caption="Status Update shown in LCD"
/>

## Miscellaneous

### Device Firmware Setup

#### Open-Source Directory

The RAK815 WisTrio LPWAN Tracker is an open-source hardware where you can get all the information about the product. It includes schematic diagrams, program codes, and other references which could help build your RAK815 projects.

This open-source project is based on the official code LoRaWAN 1.0.2 and Nordic nRF5 SDK 14.0.0, modified to support IAR8.11 and Keil5 Compiler.

* To start with, download the files in this open-source **[directory](https://github.com/RAKWireless/RAK813-BreakBoard).**

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/github.jpg"
  width="100%"
  caption="Open Source Directory for RAK815"
/>

#### Firmware

To enable the Bluetooth functionality of our device, you must first write the Bluetooth protocol stack using the official nRFgo Studio Tool.

* Download and install the nRFgo Studio Tool through the **[Nordic Official Site](http://www.nordicsemi.com/Products/Low-power-short-range-wireless/nRF52832)** or the **[RAKwireless Downloads](https://downloads.rakwireless.com/en/LoRa/RAK815/Tools/)**.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/nrfgo-studio-tool-installer.jpg"
  width="100%"
  caption="RFgo Studio tool Installer"
/>

##### Installing the J-Link Driver

1. Navigate to the **[J-Link Site](https://www.segger.com/downloads/jlink).**
2. Click the “**Click for downloads**” under “**J-Link Software and Documentation Pack**”.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-jlink.jpg"
  width="100%"
  caption="Downloading J-Link Software"
/>

3. Download the appropriate package for your OS.
4. Accept the License Agreement.
5. Run the installation program with default configurations.

##### Downloading the Bluetooth Protocol Stack

1. Connect the RAK815 SWD interface (refer to the [**datasheet**](/Product-Categories/WisTrio/RAK815/Datasheet/)) with the J-Link device SWD interface. Then, connect the J-Link device to the PC through the USB port.

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

4. Browse the Bluetooth protocol stack file from the open source code through this directory: **`RAK813-Breakboard-master>>nRFLib>>components>>softdevice>>s132>>hex`**

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/bluetooth-protocol-dir.jpg"
  width="80%"
  caption="Bluetooth Protocol Stack Directory"
/>

5. Click "**Program**" to complete the download.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/browse-stack-file.jpg"
  width="100%"
  caption="Browsing Stack File and Clicking Program"
/>

#### Downloading the Application Code

There are three ways to download your application code on your device: **nRFgo Studio Tool**, **Keil Compiler**, and **IAR compiler**.

##### Using nRFgo Studio Tool

1. After completing the Bluetooth protocol station, click the "**Program Application**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-program-app.jpg"
  width="100%"
  caption="Downloading Program Application"
/>

2. Browse for the application code and click "**Program**". Sample programs are made available in the open-source code, follow this directory: `RAK813-BreakBoard-master>>Doc>>hex`

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

1. Download and install the latest version of Keil Compiler through the [Keil Website](http://www.keil.com/).

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/arm-keil-homepage.jpg"
  width="100%"
  caption="ARM KEIL Homepage"
/>

:::tip 📝 NOTE
The best version of Keil Compiler is version 5.5 or above. If your installed Keil compiler supports the nRF52832 environment, then it is not necessary to install the nRF52832 environment.
:::

2. Install the nRF52832 compiler environment for Keil5 from our repository:  `RAK813-Breakboard-master>>Keil5`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/keil5-directory.jpg"
  width="80%"
  caption="Compiler Environment for Keil5 Directory"
/>

3. After installing it, you can see the Nordic chip information from `Options -> Device`.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/select-nordic-chip.jpg"
  width="75%"
  caption="Selecting the Nordic Chip Information"
/>

4. Use the J-Link device to connect your RAK815 and PC, then write your project. You can open sample projects available in this directory: `RAK813-BreakBoard-master>>Keil5`

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/project-sample-location.jpg"
  width="80%"
  caption="Project Sample Location"
/>

5. Click "**Build**", then "Download" to download your application code.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/build-download-app.jpg"
  width="100%"
  caption="Building and Downloading the Application Code"
/>

6. If you choose to “**Create HEX file**” in the Keil tool's options, then you can see the HEX file in Keil's output directory. This file can also be used by the nRFgo Stdio Tool.

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

The writing of programs using the IAR Compiler has the same steps as the Keil Compiler with different tools but the same functions.

1. First, download and install the latest version of IAR Compiler through the [IAR Website](https://www.iar.com/).
2. Open the IAR project and click the "**Make**" menu.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/make-tool-iar.png"
  width="80%"
  caption="Make Tool in IAR Compiler"
/>

3. Then, click the "**Project**" menu and select the download directory in the "**Download Activities Application**" option to complete the download.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/6device-firmware-setup/download-app-code.png"
  width="80%"
  caption="Downloading Application Code to the Device"
/>

4. If you choose to export the HEX file in the IAR options menu, you can also see the HEX file in the IAR output folder. This file can also be used by the nRFgo Stdio Tool.

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

Now, you have completed your firmware setup. Up next will be the configuration of your LoRaWAN settings.

### Upgrading the Firmware

Device Firmware Upgrade (DFU) is a tool for upgrading your firmware. It is part of the [GitHub Open Source](https://github.com/RAKWireless/RAK813-BreakBoard) project you downloaded for upgrading the firmware of your IAR and Keil Compiler.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-file-location.jpg"
  width="80%"
  caption="DFU File Location"
/>

1. Hex files are already provided and can be found in the open-source project Doc folder:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-hex-files.jpg"
  width="80%"
  caption="DFU Hex Files"
/>

:::tip 📝 NOTE

* Using the DFU function of the nRF, unlike the previous firmware programming method, the bootloader firmware must be programmed. Therefore, three firmware need to be programmed to use the DFU function. They are the Bluetooth protocol stack firmware, the DFU application firmware, and the bootload firmware. Bootload firmware can be found in open-source functions.

* For details on how to program the Bluetooth protocol stack and application firmware, review the [Device Firmware Setup](#device-firmware-setup).
:::

* **Figure 52** shows how to program bootloader firmware:

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/programming-bootloader.jpg"
  width="100%"
  caption="Programming Bootloader Firmware"
/>

2. After all the firmware is written, the device will automatically restart. At this time, use your mobile phone Bluetooth scan, and you will see a device named "**RAK813_DFU**".

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/rak813-ble-radio.jpg"
  width="35%"
  caption="RAK813 DFU Bluetooth Radio"
/>

3. Use the nRF official phone app **nRF Connect** to connect the device's Bluetooth.

4. To upgrade the firmware, you need to import the upgraded firmware to your mobile phone. The upgrade file, a zip file, is accessible from the downloaded open-source code by following this directory: **RAK813-BreakBoard-master**>> **Doc**>> **Hex**>> **rak815_app_package.zip**. Copy this sample upgrade file to your mobile phone.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dfu-app-package-zip.jpg"
  width="80%"
  caption="DFU App Package Zip File"
/>

:::tip 📝 NOTE
Visit [RAK Forum](https://forum.rakwireless.com/) for detailed instructions on how to make an upgraded zip file and how to program DFU. Interested parties can also view the [Nordic document](https://devzone.nordicsemi.com/nordic/nordic-blog/b/blog/posts/getting-started-with-nordics-secure-dfu-bootloader).
:::

5. Open the nRF app and press the "**CONNECT**" button in the **RAK813_DFU** Bluetooth. Then, click the **DFU** icon in the
upper right corner.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/connecting-rak813-dfu.jpg"
  width="80%"
  caption="Connecting to RAK813 DFU"
/>

6. Select the **rak815_app_package.zip** file, and the device will automatically start upgrading the firmware.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/import-upgrade-zip-file.jpg"
  width="80%"
  caption="Importing the Upgrade Zip File"
/>

7. At this point, the program will jump to the bootload and execute the bootload. Then click on the **RAK813_DFU**, as highlighted in **Figure 57**. You can see the progress of the program sent.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/upgrade-progress-chart.jpg"
  width="80%"
  caption="Upgrade Progress Chart"
/>

8. After the program upgrade is complete, reset the device and you will see that your device's Bluetooth broadcast name has changed.

<rk-img
  src="/assets/images/wistrio/rak815/quickstart/7upgrading-the-firmware/dev-ble-boardcast-changes.jpg"
  width="40%"
  caption="Device's Bluetooth Broadcast Changes"
/>

You have completed the RAK815 WisTrio LPWAN Tracker Configuration and successfully upgraded the firmware. You are now ready to try your own projects using the device.


