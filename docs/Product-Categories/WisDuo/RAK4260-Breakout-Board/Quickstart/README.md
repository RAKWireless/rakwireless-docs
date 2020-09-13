---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4260 Breakout Board
---

# Quick Start Guide

## Prerequisites

The following two sections provide a list of the components and tools you need in order to get started with the development board. Some of the components are included in the package, others you need to provide yourself.

<!---
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/main/rak4260-breakout.png"
  width="50%"
  caption="RAK4260 Breakout Board"
/>
-->


### What do you need?

Before going through each step in the installation guide of the RAK4260 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

- RAK4260 Breakout Board (provided) – including LoRa antenna, Dupont lines (13x) 
- USB to UART converter – CH340 for example (not provided) 
- RAKDAP1 DapLink tools (not provided)
- Gateway in Range, for testing (not provided) 
- Windows PC (not provided) 
- Emulator Kit (not provided)

#### Software Tools

- [Atmel Studio](https://www.microchip.com/mplab/avr-support/atmel-studio-7)
- [RAK Serial Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- RAKDAP1 tool
- [CH340 Drivers](https://www.driverscape.com/download/usb-serial-ch340)
- [The Things Network](https://account.thethingsnetwork.org/register) account
- [Sample Code](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

### What's Included in the Package?

- RAK4260 Breakout Board
- LoRa antenna
- Dupont lines (24x)


## Product Configuration

### Interfacing with RAK4260 Breakout Board

::: warning ⚠️ WARNING
Before powering the RAK4260 Breakout Board, make sure you have installed the included LoRa Antenna. Not doing so might damage the board.
:::

#### USB to UART

- Connect your USB to UART converter to the pin header on the RAK4260 via a set of 4 dupont lines. Use Figure 1 for reference on wiring the device properly.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/powering-and-interfacing-with-the-board.png"
  width="100%"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: **Windows + R** and typing **devmgmt.msc**, or search in the Start Menu.
- Look for Ports (**COM & LPT**) and find the name **USB-SERIAL CH340** and take note of the COM Port Number as you will need it to connect with the board.

:::tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however, if it is missing in the COM & LP ports list you need to manually install the CH340 Drivers.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/com-port-settings.png"
  width="100%"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/configuring-the-rak-serial-port-tool.png"
  width="90%"
  caption="Configuring the RAK Serial Port Tool"
/>

#### DAPLink Connection

Connect the tool in accordance with the diagram shown in Figure 4 and Figure 5.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/connection.png"
  width="75%"
  caption="DAPLink to RAK4260 Breakout Board"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/pin.png"
  width="60%"
  caption="DAPLink connection"
/>


### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about [**The Things Network**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4260 Breakout Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create an account. Once done, log in to your account and in the home page, go to the console. Refer to figure 7.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/ttn-home-page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/ttn-console-page.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**".

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>

#### Adding an Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/adding-an-application.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - the handler you want to register this application to.

After filling in the necessary information, press the "**Add application**". If the page is the same as figure 10 then, you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

#### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/add-your-device.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4260 Breakout Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.
3. **App Key** – this key will be used to secure the communication between the device and the network.
4. **App EUI**– a unique identifier of the Application that you are registering the device within.

Populate the **Device ID** and **Device EUI**_ (generate a random one by pressing the arrows)_ fields and leave the rest as is. Click “**Register**”.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-overview.png"
  width="100%"
  caption="Device Overview"
/>

In the Device Overview, there are two options of the **Activation Method**: **OTTA** and **ABP**. Take note that the default option is **OTAA** as shown in figure 13. However, instructions will be provided on both methods in the following sections starting with OTAA.


#### OTAA Mode

**OTAA** stands for **Over The Air Activation**. We will not delve into details, however the most important thing from practical perspective is that a device needs to have the 3 parameters (**Device EUI**, **Application EUI**, and **App Key**) we already explained in brief in the previous section, set correctly in order for the LoRa Server to allow it to access the network.

These can be obtained from the Device Overview page, where they are grouped one after the other for convenience (Figure 14).

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-overview-parameters.png"
  width="100%"
  caption="Device Overview Parameters"
/>

As these are randomly generated by TTN we need to update our RAK4260 Breakout Board with their values in order to be able to register it with the network. However, as mentioned before, you can only do this directly in the source code, compile it and then
flash it to the device. The following section will guide you through the
process of doing this with the Atmel Studio.

##### Parameter and Firmware Setup

We need to execute these steps in order for our device to connect with TTN, basically fill in the parameters we obtained by already registering it beforehand.

###### Edit OTAA Parameters in the Code

- Open your Atmel Studio and navigate to the demo firmware you downloaded from the [RAKwireless GitHub repository](https://github.com/RAKWireless/RAK4260-LoRaNode-demo).

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/atmel-studio-main-page.png"
  width="100%"
  caption="Atmel Studio main page"
/>

- Go to `File → Open → Project/Solution:`

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/open-the-sample-project.png"
  width="100%"
  caption="Open the sample project"
/>

- Go to the folder where you downloaded the GitHub repository and select the "**APPS_ENDDEVICE\_\_\_DEMO1**" project file (it is in the directory with the same name as the file). Click Open.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/demo-firmware-project-file.png"
  width="100%"
  caption="Demo firmware project file"
/>

- Once your project has loaded up you will be presented with a file structure that contains folders and files that you can edit. You need to copy the values of the 3 parameters in figure 14 (**Device and Application EUI plus the Application Key**) into the corresponding fields in the “**conf_app.h**” file. It is contained in the scr config folder that you can access via the tree.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-configuration-file.png"
  width="100%"
  caption="Device configuration file (OTAA parameters)"
/>

- Once you have replaced the default values with the one for the device you registered with TTN, you can proceed to compiling the firmware file. There is no real need to edit anything else in order to make a firmware that will allow you to connect to the network.

###### Compile the Code

- Compile the code by going to the `Build → Build Solution`.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/compiling-code.png"
  width="100%"
  caption="Compiling the code"
/>

- The Output should have no errors same as shown in Figure 20.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/successful-compiling-of-the-code.png"
  width="100%"
  caption="Compiling the code"
/>

###### Flashing the firmware

- Once compiled you can find the output file in the “**Debug**” folder of the directory where you downloaded the firmware (See Figure 21):

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/firmware-hex-file.png"
  width="100%"
  caption="Firmware .hex file"
/>

- As the firmware is ready now you are going to proceed to flashing it. In order to do this, you need to utilize your RAKDAP1 hardware tool and the pyocd software tool.

###### Installing Environment
**Install Python3.** Because pyocd needs the Python environment, we must install Python3. We can download the Python3 package from Python website:[https://www.python.org/downloads/](https://www.python.org/downloads/) and install it using the default configuration.After installing successfully, we can check the version as follow:

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/py_ver_check.png"
  width="60%"
  caption="Check Python version"
/>
:::tip 📝 NOTE
If the Python version is above 3.4, pip is automatically installed. But if not, we should install pip3 manually.     
:::

**Install pyocd using pip**Use the following command to install pyocd:     
```
pip3 install pyocd
```

After installation, check the version of pyocd as follow:    
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/pyocd_ver_check.png"
  width="60%"
  caption="Check pyocd version"
/>

**Install the support package for the MCU**
After installing pyocd successfully we need to install the support package for the MCU. The command format is: 
```
pyocd pack --install <MCU model>
```
so the correct command is  
```
pyocd pack --install atsaml21j18a
```
The support packages are MDK packages. You can see a complete list at [https://www.keil.com/dd2/Pack/](https://www.keil.com/dd2/Pack/)

**Flash the firmware using DAPLink and RAKDAP**

Connect the board to RAKDAP. Connect the 4 debug/programming SWD pins of the board to the RAKDAP adapter (| **VCC** | **GND** | **SWIO** | **SWCLK** |)

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/connection.png"
  width="75%"
  caption="DAPLink to RAK4260 Breakout Module"
/>    

To flash the `APPS_END_DEVICE_DEMO1.hex` the command is    
```
pyocd flash -target atsaml21j18a APPS_END_DEVICE_DEMO1.hex
```

Depending on the size of the file, the flashing can take several minutes. The success or failure of the flashing will be shown in the command line:   
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/pyocd_flash_log.png"
  width="75%"
  caption="PYOCD flash log"
/>    

<!-- Once you are done connecting the board, you need to open the J-Flash tool and configure it to work with this particular chip model.

- Start by creating a new project.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/jflash-new-project-window.png"
  width="100%"
  caption="J-Flash new project window"
/>

- The next step is to select the right “**Target Device**”, to match the chip at the core of the RAK4260 Breakout Board. Press the button with the dots on it in Figure 24 and you will be redirected to the selection screen.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/new-project-settings.png"
  width="100%"
  caption="New project settings"
/>

- Select “**Atmel**” as the manufacturer via the drop-down menu and navigate to the **ATSAMR34J18** list entry. This is the chip at the core of the RAK4260 Breakout Board, so we need to instruct the J-Flash tool that we are going to be working with it as shown in Figure 25.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-selection.png"
  width="100%"
  caption="Device selection"
/>

- You will be redirected to the main project window where the newly selected device will be shown. Leave the rest of the parameters with their default values. If for some reason they diverge from what is shown in Figure 26, adjust them.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/project-settings.png"
  width="100%
  caption="Project settings"
/>

- Now the new project will initialize and you need to instruct the tool to connect to the device. Do this by going to `Target → Connect` in the menu list on the top.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-connection.png"
  width="100%"
  caption="Device connection"
/>

- The “**LOG**” window should reflect the connection process log and end up with a “Connection successful” message if everything went smoothly.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-log-successful-connection.png"
  width="100%"
  caption="Device log (connection successful)"
/>

- At this point you have access to the device and now can burn the firmware file into it. Navigate to it via the `File → Open data file…` menu and browse for the _.hex_ file. Figure 28 shows the location of our example.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/loading-the-firmware-file.png"
  width="100%"
  caption="Loading the firmware file into the tool."
/>

- If you have managed to load the correct file the data in it will be visualized in a new window in HEX values. The only thing left to do now is tell the tool to flash it. Navigate to `Target → Production` Programming, or press **F7** to start the process.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/flashing-the-firmware.png"
  width="100%"
  caption="Flashing the firmware."
/>

- The firmware flashing process will initiate and there will be a blue bar that starts filling, reflecting the progress of the operation. Once the process completes successfully you will be shown a message window stating this, together with the time it took for the operation to finish.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/loading-the-firmware-file.png"
  width="100%"
  caption="Loading the firmware file into the tool"
/>

You are now done with flashing the modified firmware and can close the J-Flash tool and disconnect the J-link tool as you will not need it for the next step. -->

##### Connecting to TTN

- Connect your USB to UART converter to the pin header on the RAK4260 via a set of 4 dupont lines. Refer to the [Interfacing with RAK4260 Breakout Board](/Product-Categories/WisDuo/RAK4260-Breakout-Board/Quickstart/#interfacing-with-rak4260-breakout-board) section for more details.

###### Regional Band and Join Network Setup

Upon opening the RAK Serial Port Tool, it should display the same details as shown in Figure 26, provided it has been less than 5 seconds since you powered the board. The firmware is set to work in such a way that 5 seconds after powering the board it initializes with the default settings.

:::tip 📝 NOTE
In our example this would be the EU868 for the region. We are going to show how to change the default region and how to connect with the network.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/startup-default-output.png"
  width="45%"
  caption="Start up default output"
/>

- After the aforementioned 5-second elapse, the current configurations (**Class A, OTAA, Unconfirmed LoRa Frames, Fport - 1**) will be reported .

:::tip 📝 NOTE
These settings are not adjustable at this stage and if you want to change them you need to start over at the stage where we modify the firmware files before compiling it.
:::

- If you use Figure 27 as reference, you will see there is a list of 4 options to choose from. Go to the “**Main Menu**” by sending a 4.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/configuration-menu.png"
  width="45%"
  caption="Configuration menu"
/>

- Afterwhich, send 1 in order to select EU868 Regional Band. You may also choose a different number as selection depending on your case.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/band-selection-menu.png"
  width="45%"
  caption="Band selection menu"
/>

- After you have selected the band, the device will automatically try to connect to the network using the **Device EUI, Application EUI and Application Key** set in the firmware configuration file. These are also reported in the window in Figure 29.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/network-join-parameters-set.png"
  width="45%"
  caption="Network join parameters set"
/>

- If the device was successful at joining the network, this will be reported with the Device Address it has been assigned and the parameters will be reported again (Class A, OTAA, etc.) You will be presented with the Configuration menu (Figure 30) again in case you want to execute another selection. We will do this in the next section, where we will send some uplink data to the network.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/successful-network-join.png"
  width="45%"
  caption="Successful network join"
/>

###### Uplink LoRa Frame Testing

- You should now be in the Main menu and have four options. This time **select Option 2** to send an uplink LoRa Frame.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/sending-data-to-the-server.png"
  width="45%"
  caption="Sending data to the server"
/>

:::tip 📝 NOTE
The firmware uploaded into the RAK4260 Breakout Board is just an example. Thus, the data sent are just dummy Temperature reading (the original Microchip code was for a board with an actual temperature sensor). It will be reported as output together with whether the transmission was successful as shown in Figure 32.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/sending-data-successful.png"
  width="45%"
  caption="Sending data to the server (successful)"
/>

This should be sufficient to prove that the board functions as intended and it is able to send data over the network after successfully joining it. As this module is intended for development the example firmware is limited to this functionality and you can use it as a base to develop a more complex firmware using the Microchip SDK (Atmel Studio).
