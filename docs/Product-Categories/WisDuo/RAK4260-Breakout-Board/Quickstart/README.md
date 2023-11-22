---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4260 Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak4260-breakout-board/quickstart/main/RAK4260-Breakout.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4260 Breakout Board
  - wisduo
  - quickstart
---

# RAK4260 Breakout Board Quick Start Guide

## Prerequisites

The following two sections provide a list of the components and tools you need in order to get started with the development board. Some of the components are included in the package, others you need to provide yourself.




### What Do You Need?

Before going through each step in the installation guide of the RAK4260 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

- [**RAK4260 Breakout Board**](https://store.rakwireless.com/products/rak4260-breakout-board?utm_source=RAK4260BreakoutModule&utm_medium=Document&utm_campaign=BuyFromStore) (provided) – including LoRa antenna, Dupont lines (13x)
- USB to UART adapter – CH340 for example (not provided)
- [RAKDAP1 DAPLink Tool](https://store.rakwireless.com/products/daplink-tool?utm_source=RAKDAP1&utm_medium=Document&utm_campaign=BuyFromStore) (not provided)
- Gateway in range, for testing (not provided)
- Windows PC (not provided)

#### Software Tools

- [Microchip Studio](https://www.microchip.com/mplab/microchip-studio)
- [RAK Serial Tool](https://downloads.rakwireless.com/#LoRa/Tools/)
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

1. Connect your USB to the UART adapter to the pin header on the RAK4260 via a set of four (4) DuPont lines. See **Figure 1** for reference on wiring the device properly.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/powering-and-interfacing-with-the-board.png"
  width="100%"
  caption="Powering up and interfacing with the board"
/>

2. Go to your Device Manager by pressing: **Windows + R** and typing **devmgmt.msc**, or search in the Start Menu.

3. Look for Ports (**COM & LPT**) and find the name **USB-SERIAL CH340** and take note of the COM Port Number as you will need it to connect with the board.

:::tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers.
If you didn't find any port with the name USB-Serial CH340, make sure you have installed the CH340 Drivers in your Windows PC.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/com-port-settings.png"
  width="100%"
  caption="COM Port settings"
/>

4. Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the baud rate to **115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/configuring-the-rak-serial-port-tool.png"
  width="90%"
  caption="Configuring the RAK Serial Port Tool"
/>

#### DAPLink Connection

Connect the tool in accordance with the diagram shown in **Figure 4** and **Figure 5**.

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

The Things Network is about enabling low-power devices to be used in long-range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about [**The Things Network**](https://www.thethingsnetwork.org/docs/).

In this section, you will be connecting the RAK4260 Breakout Board to The Things Network (TTN).

1. If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create an account. Once done, log in to your account. And on the home page, go to the console. Refer to **Figure 7**.

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

2. Choose "**APPLICATIONS**".

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>

#### Adding an Application

3. Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/adding-an-application.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note of in adding an application:

   - **Application ID** - this will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
   - **Description** - this is a short and concise human-readable description of your application.
   - **Application EUI** - this will be generated automatically by The Things Network for convenience.
   - **Handler Registration** - the handler you want to register this application to.

4. After filling in the necessary information, press the "**Add application**". If the page is the same as shown in **Figure 10**, then you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

#### Register Device

5. Scroll down until you see the Devices section. You can also click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

6. Click "**Register device"**.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/add-your-device.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note of in registering your device:

   - **Device ID** - this is the unique identifier for your RAK4260 Breakout Board in your application. You need to enter this manually.
   - **Device EUI** - this is the unique identifier for your device in the network. You can change it later if you want.
   - **App Key** – this key will be used to secure the communication between the device and the network.
   - **App EUI**– a unique identifier of the Application that you are registering the device within.

7. Populate the **Device ID** and **Device EUI** (generate a random one by pressing the arrows) fields and leave the rest as is. Click “**Register**”.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-overview.png"
  width="100%"
  caption="Device Overview"
/>

In the Device Overview, there are two options for the **Activation Method**: **OTAA** and **ABP**. The default option is **OTAA** as shown above.


#### OTAA Mode

**OTAA** stands for **Over-The-Air Activation**. Detailed information about the OTAA will not be discussed in this document; however, the most important thing from a practical perspective is that a device needs to have the three (3) parameters: **Device EUI**, **Application EUI**, and **App Key**. It is already explained briefly in the previous section. It is set correctly in order for the LoRa Server to allow it to access the network.

These can be obtained from the Device Overview page, where they are grouped one after the other for convenience.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/device-overview-parameters.png"
  width="100%"
  caption="Device Overview Parameters"
/>

As these are randomly generated by TTN, you need to update your RAK4260 Breakout Board with their values to register it with the network. However, as mentioned before, you can only do this directly in the source code, compile it and then flash it to the device.

The following section will guide you through the process of doing this with the Atmel Studio.

##### Parameter and Firmware Setup

Execute the following steps to connect your device with the TTN. Register and then fill in the parameters obtained upon registering.

###### Edit OTAA Parameters in the Code

1. Open your Atmel Studio and navigate to the demo firmware you downloaded from the [RAKwireless GitHub repository](https://github.com/RAKWireless/RAK4260-LoRaNode-demo).

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/atmel-studio-main-page.png"
  width="100%"
  caption="Atmel Studio main page"
/>

2 Go to `File → Open → Project/Solution`.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/open-the-sample-project.png"
  width="100%"
  caption="Open the sample project"
/>

3. Go to the folder where you downloaded the GitHub repository and select the "**APPS_ENDDEVICE_DEMO1**" project file (it is in the directory with the same name as the file). Then click **Open**.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/demo-firmware-project-file.png"
  width="100%"
  caption="Demo firmware project file"
/>

4. Once your project has loaded up, you will be presented with a file structure that contains folders and files that you can edit. You need to copy the values of the three (3) parameters shown in **Figure 14** (**Device and Application EUI plus the Application Key**) into the corresponding fields in the “**conf_app.h**” file. It is contained in the scr config folder that you can access via Solution Explorer tree.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/otaa_atmel_studio.png"
  width="100%"
  caption="Device configuration file (OTAA parameters)"
/>

5. After replacing the default values with the one for the device you registered with TTN, you can proceed to compile the project. There is no need to edit anything else in order to compile the firmware that will allow you to connect to the TTN network.

###### Compile the Code

6. Compile the code by going to the `Build → Build Solution`.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/build_solution.png"
  width="100%"
  caption="Compiling the code"
/>

7. The output should have no errors, as shown in **Figure 20**.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/successful-compiling-of-the-code.png"
  width="100%"
  caption="Compiling the code"
/>

###### Flashing the firmware

8. Once compiled, you can find the output file in the “**Debug**” folder of the directory, where you downloaded the firmware. See **Figure 21**.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/firmware-hex-file.png"
  width="100%"
  caption="Firmware .hex file"
/>

9. As the firmware is now ready, you are going to proceed to flashing it. To do this, you need to utilize your RAKDAP1 hardware tool and the pyocd software tool.

###### Flash the Firmware Using RAKDAP1

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool).

##### Connecting to TTN

Connect your USB to the UART adapter to the pin header on the RAK4260 via a set of four (4) DuPont lines. Refer to the [Interfacing with RAK4260 Breakout Board](/Product-Categories/WisDuo/RAK4260-Breakout-Board/Quickstart/#interfacing-with-rak4260-breakout-board) section for more details.

###### Regional Band and Join Network Setup

1. Upon opening the RAK Serial Port Tool, it should display the same details, as shown in **Figure 22**, provided it has been less than 5 seconds since you powered the board. The firmware is set to work in such a way that 5 seconds after powering the board it initializes with the default settings.

:::tip 📝 NOTE
EU868 is used for the region as an example. This section shows how to change the default region and connect with the network.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/startup-default-output.png"
  width="45%"
  caption="Start up default output"
/>

2. After the aforementioned 5-second elapse, the current configurations (**Class A, OTAA, Unconfirmed LoRa Frames, Fport - 1**) will be reported.

:::tip 📝 NOTE
These settings are not adjustable at this stage. If you want to change them, you need to start over at the stage where you modify the firmware files before compiling them.
:::

3. If you use **Figure 2**3 as a reference, you will see there is a list of four (4) options to choose from. Go to the “**Main Menu**” by sending a 4.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/configuration-menu.png"
  width="45%"
  caption="Configuration menu"
/>

4. After which, send 1 to select EU868 Regional Band. You may also choose a different number as a selection depending on your case.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/band-selection-menu.png"
  width="45%"
  caption="Band selection menu"
/>

5. After you have selected the band, the device will automatically try to join to the LoRaWAN network using the **Device EUI, Application EUI, and Application Key** set in the firmware configuration file. These are also reported in **Figure 25**.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/network-join-parameters-set.png"
  width="45%"
  caption="Network join parameters set"
/>

6. If the device is successful at joining the network, this will be reported with the Device Address that it has been assigned, and the parameters will be reported again (Class A, OTAA, etc.). You will be presented with the Configuration menu again in case you want to send another command. You will do this in the next section, where you will send some uplink data to the network.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/successful-network-join.png"
  width="45%"
  caption="Successful network join"
/>

###### Uplink LoRa Frame Testing

6. You should now be on the Main menu and have four options. This time **select Option 2** to send an uplink LoRa Frame.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/sending-data-to-the-server.png"
  width="45%"
  caption="Sending data to the server"
/>

:::tip 📝 NOTE
The firmware uploaded into the RAK4260 Breakout Board is just an example. Thus, the data sent are just dummy temperature readings (the original Microchip code was for a board with an actual temperature sensor). It will be reported as output together with the transmission is successful, as shown in **Figure 28**.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/sending-data-successful.png"
  width="45%"
  caption="Sending data to the server (successful)"
/>

This should be sufficient to prove that the board functions as intended, and it can send data over the network after successfully joining it. As this module is intended for development, the example firmware is limited to this functionality. You can use this project as a base to develop a more complex firmware using the Microchip LoRaWAN Stack (MLS).