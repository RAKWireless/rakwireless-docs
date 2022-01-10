---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4260 Evaluation Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak4260-evaluation-board/overview/RAK4260_Evaluation_home.png
prev: ../Overview/
next: ../Low-Level-Development/
tags:
  - RAK4260 Evaluation Board
  - wisduo
  - quickstart
---

# RAK4260 Evaluation Board Quick Start Guide

<!---
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/2quick-start-guide/rak4260-overview2.png"
  width="50%"
  caption="Back View of the Evaluation Board"
/>
--->
## Prerequisites

The following two sections provide a list of the components and tools you need in order to get started with the development board. Some of the components are included in the package, others you need to provide yourself.

### What Do You Need?

Before going through each and every step in the installation guide of the RAK4260 Evaluation Board, make sure to prepare the necessary items listed below:

1. **RAK4260 Evaluation Board**
2. Gateway in range for testing (not provided)
3. Micro USB Cable
4. Windows PC
5. RAKDAP1 DapLink tools (not provided)

### What's Included in the Package?

* 1-pc RAK4260 EVB (RAK4261 + RAK5005)
* 1-pc Micro USB Cable
* 1-pc LoRa Antenna (iPEX)
* 2-pcs 4-pin Header
* 9-pcs Dupont Lines

<!--
## RAK4260 Development Platform

Before compiling a project for the RAK4260 Evaluation Board it is necessary Microchip Studio integrated development platform (IDP).

* [Microchip Studio](https://www.microchip.com/mplab/microchip-studio)

1. Download and install Microchip Studio web installer.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_studio.png"
  width="80%"
  caption="Microchip Studio web installer"
/>

2. Agree to the license terms and conditions.
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/agree.png"
  width="40%"
  caption="Microchip Studio license"
/>

3. On Select Architeture, choose "SAM".

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/sam_atmel_studio.png"
  width="40%"
  caption="Microchip Studio Architecture"
/>

4. Don't select "Atmel Software Framework and Examples Project" yet. Do it later. 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/asf_dont.png"
  width="40%"
  caption="ASF skip install"
/>

5. Launch Microchip Studio then select Tools->Extensions and Updates.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_extensions.png"
  width="100%"
  caption="Microchip Studio Extensions and Updates"
/>
6. On Extensions and Updates window, click on "**Online**" and then search for "**atmel software 
framework**". 
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/asf.png"
  width="100%"
  caption="ASF install"
/>
7. Select "**Atmel Software Framework**" and click on "**Download**" button to install it.

8. To finish installation, launch Microchip Studio then go to Tools -> Device Pack Manager. Search for "**SAMR34**" and install "**SAMR34_DFP**" pack.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/samr34_pack.png"
  width="100%"
  caption="SAMR34 pack install"
/>

### Build RAK4260 LoRaNode Demo project

RAK has already configured a demo firmware for RAK4260 based on Microchip LoRaWAN Stack (MLS) that can be downloaded freely for testing purposes in this Github Repository: 
* [RAK4260 LoRaNode Demo](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)


:::tip 📝 NOTE
This sample firmware is solely for testing purposes only. If you want to use and deploy your own LoRaWAN application, you need to develop a customized firmware based on Microchip LoRaWAN Stack (MLS).
:::

1. Clone [RAK4260 github repository](https://github.com/RAKWireless/RAK4260-LoRaNode-demo).

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/github-repo.png"
  width="100%"
  caption="RAK4260 Github Repository"
/>

2. Open and configure RAK4260-LoRaNode-demo solution.

Go to the cloned directory folder : 
**<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1**. Then double click on file "**APPS_ENDDEVICE_DEMO1.atsln**".

3. Configure demo application parameters

:::tip 📝 NOTE
 On RAK4260-LoRaNode-demo project, the join parameters and activation methods are defined in the [**conf_app.h**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h) file. 

:::

4. Compile RAK4260-LoRaNode-demo solution

Launch Microchip Studio then select Build->Build Solution

### Flash the Firmware Using DAPLink and RAKDAP1

To flash a new firmware, utilize the RAKDAP1, a SWD adapter. Refer to the figure below as reference to connect RAKDAP1 and RAK4600 Evaluation Board.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/interfacing/rak4260-evb-connection.svg"
  width="75%"
  caption="RAK4260 Evaluation Board connected to RAKDAP1"
/>

1. Install [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool).

RAKDAP1 uses pyOCD package. pyOCD is an open source Python package for programming and debugging ARM Cortex-M microcontrollers using multiple supported types of USB debug probes.

2. Check Support Package installation for RAK4260.
```
pyocd list -t -n atsaml21j18a
```
3. Flash the hex file.

As an example let's flash the RAK4260-LoRaNode demo project. The hex file of the RAK4260-LoRaNode-demo project is located on folder. <br>**<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1\Release** or
<br>**<cloned_dir>\RAK4260-LoRaNode-demo\APPS_ENDDEVICE_DEMO1\Debug**.<br>
Depending on whether you selected to compile the **Debug** or **Release** version of the Microchip Studio project.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_studio_config.png"
  width="100%"
  caption="Microchip Studio Solution Configurations"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/microchip_hex.png"
  width="90%"
  caption="RAK4260 hex file"
/>

```
pyocd flash -t atsaml21j18a APPS_ENDDEVICE_DEMO1.hex
```

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/pyocd_flash.png"
  width="100%"
  caption="Successful pyOCD flash"
/>

-->

## Product Configuration

### Interfacing with the RAK4260 Evaluation Board

To check if you have successfully flashed the custom firmware provided by RAKwireless correctly, download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools).

:::warning ⚠️ WARNING
Before powering the RAK4260 Evaluation Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

1. Connect your RAK4260 Evaluation Board in your Windows PC using the provided micro usb cable.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/rak4260-laptop.png"
  width="60%"
  caption="RAK4260 Evaluation Board to Laptop Connection"
/>

2. Open the RAK Serial Port Tool.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/rak-serial-port-tool.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

3. To find the correct COM Port number for your device, go to Device Manager by pressing **Windows + R**, and then type `devmgmt.msc`. Or, search for Device Manager in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/device-manager.png"
  width="100%"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and find the name **USB-SERIAL CH340**. Take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any port with the name USB-Serial CH340, make sure you have installed the CH340 Drivers in your Windows PC.
:::

5. Choose the Correct Port Number and Baud rate from the Device Manager, then click on the “**OPEN**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/correct-port-and-baudrate.png"
  width="90%"
  caption="Correct Port Number and Baud rate"
/>


### Connecting to The Things Network (TTN)

In this section, you will be connecting the RAK4260 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [The Things Network](https://www.thethingsnetwork.org/) website and create one. Once done, log in to your account and go to the console.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-homepage.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-console-page.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose “**APPLICATIONS**”
<!--
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>
-->

#### Adding an Application

1. Click on “**add application**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>


<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/add-application.png"
  width="100%"
  caption="Add Application Parameters"
/>

Here are the things that you should take note in adding an application:

   - **Application ID** - a unique id of your application in the Network. Note that the characters should be in lower case, and no spaces are allowed.
   - **Description** - a short and concise human readable description of your application.
   - **Application EUI** - this will be generated automatically by The Things Network for convenience.
   - **Handler Registration** - handler you want to register this application to.

2. After you fill in the necessary information, press the “**Add application**” button at the bottom of the page. If you see the same page as shown in Figure 9, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

#### Register Device

1. Click “**register device**”.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

Here are the things that you should take note in registering your device:

  - **Device ID** - a unique identifier for your RAK4260 Evaluation Board in your application. You need to enter this manually.
  - **Device EUI** - a unique identifier for your device in the network. You can change it later, if you want.

2. Click on the highlighted in red icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/fill-device.png"
  width="100%"
  caption="Add your Device"
/>

3. Lastly, click on the “**Register**” button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/add-device.png"
  width="100%"
  caption="Register Device"
/>

#### TTN Device Overview

You can check all parameters of the new registered device created by clicking the “**Overview**”. The default join mode is OTAA.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-overview.png"
  width="100%"
  caption="Device Overview"
/>

##### Testing RAK4260 LoRa Node demo

To test your project, you need to perform the steps below:

1. Install [RAK4260 Development Platform](../Low-Level-Development/#rak4260-development-platform).

2. Check the join parameters as shown in [TTN Device Overview](#ttn-device-overview). Modify and save the "**conf_app.h**" file.

```c
/*Define the Sub band of Channels to be enabled by default for the application*/
#define SUBBAND 1
#if ((SUBBAND < 1 ) || (SUBBAND > 8 ) )
#error " Invalid Value of Subband"
#endif

/* Activation method constants */
#define OVER_THE_AIR_ACTIVATION           LORAWAN_OTAA
#define ACTIVATION_BY_PERSONALIZATION     LORAWAN_ABP

/* Message Type constants */
#define UNCONFIRMED                       LORAWAN_UNCNF
#define CONFIRMED                         LORAWAN_CNF

/* Enable one of the activation methods */
#define DEMO_APP_ACTIVATION_TYPE               OVER_THE_AIR_ACTIVATION
//#define DEMO_APP_ACTIVATION_TYPE               ACTIVATION_BY_PERSONALIZATION

/* Select the Type of Transmission - Confirmed(CNF) / Unconfirmed(UNCNF) */
#define DEMO_APP_TRANSMISSION_TYPE              UNCONFIRMED
//#define DEMO_APP_TRANSMISSION_TYPE            CONFIRMED

/* FPORT Value (1-255) */
#define DEMO_APP_FPORT                           1

/* Device Class - Class of the device (CLASS_A/CLASS_C) */
#define DEMO_APP_ENDDEVICE_CLASS                 CLASS_A
//#define DEMO_APP_ENDDEVICE_CLASS                 CLASS_C


/* ABP Join Parameters */

#define DEMO_DEVICE_ADDRESS                     0x02603119

#define DEMO_APPLICATION_SESSION_KEY            {0x00, 0x60, 0x10, 0x06, 0x30, 0x07, 0x04, 0x00, 0x69, 0x00, 0x60, 0xc0, 0x06, 0x90, 0x07, 0x04}
#define DEMO_NETWORK_SESSION_KEY                {0x00, 0x40, 0x10, 0x06, 0x30, 0x07, 0x04, 0x00, 0x69, 0x00, 0x60, 0xc0, 0x06, 0x90, 0x07, 0x04}

/* OTAA Join Parameters */

#define DEMO_DEVICE_EUI							{ 0x00, 0xDB, 0x28, 0xAF, 0xE9, 0xAC, 0xCB, 0x22 }
#define DEMO_APPLICATION_EUI        { 0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x03, 0x5D, 0x63 }
#define DEMO_APPLICATION_KEY        { 0x3C, 0x6B, 0x36, 0x6C, 0xCA, 0xC3, 0x05, 0xE9, 0x3F, 0x0B, 0x6A, 0xC3, 0x03, 0xF0, 0x7C, 0x07 }

/* Multicast Parameters */
#define DEMO_APP_MCAST_ENABLE                   false
#define DEMO_APP_MCAST_GROUP_ADDRESS            0x0037CC56
#define DEMO_APP_MCAST_APP_SESSION_KEY          {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6}
#define DEMO_APP_MCAST_NWK_SESSION_KEY          {0x3C, 0x8F, 0x26, 0x27, 0x39, 0xBF, 0xE3, 0xB7, 0xBC, 0x08, 0x26, 0x99, 0x1A, 0xD0, 0x50, 0x4D}

/* This macro defines the application's default sleep duration in milliseconds */
#define DEMO_CONF_DEFAULT_APP_SLEEP_TIME_MS     5000

```

:::tip 📝 NOTE
You must choose one LoRaWAN activation method and modify the join parameter's definition. The join parameters and activation methods are defined in the [**conf_app.h**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h) file. 
:::

3. Build [RAK4260 LoRa demo](../Low-Level-Development/#build-rak4260-loranode-demo-project).

4. Flash the [firmware](../Low-Level-Development/#flash-the-firmware-using-daplink-and-rakdap1).

The default join mode is **OTAA**, and the default frequency is **EU868**. After resetting it, RAK4260 will join automatically if the **dev_eui**, **app_eui**, and **app_key**  parameters have been configured correctly in the source code.

5. Connect the RAK4260 Evaluation board and configure [RAK Serial Port Tool](#interfacing-with-the-rak4260-evaluation-board).
 
6. Press the “**reset button**” on your RAK5005 Baseboard Module. If everything works perfectly, you should see the same message shown in Figure 14.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/startup-default-output.png"
  width="45%"
  caption="Serial Port Tool Successful Connection"
/>

7. Choose Option 1 “**Send Join Request**” then click on “**SEND**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/network-join-parameters-set.png"
  width="45%"
  caption="Join parameters sent"
/>

8. To send data from the RAK4260 to the TTN successfully, choose Option 2 then click on “**SEND**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/sending-data-to-the-server.png"
  width="45%"
  caption="LoRaWAN data send"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/tx-success.png"
  width="45%"
  caption="LoRaWAN Transmission Success"
/>

9. Figure 18 shows data received by the TTN.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/data-received-ttn.png"
  width="100%"
  caption="Data received by the TTN"
/>

<!--
8. The Microchip Studio LoRaWAN examples are based on [SAMR34 Xplained Pro](https://www.microchip.com/DevelopmentTools/ProductDetails/dm320111), but RAK260 did not adopt the same GPIO pinout. If you need to develop a new LoRaWAN application, refer to RAK4260 GPIO pins defined in the [**samr34_xplained_pro.h**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/ASF/sam0/boards/samr34_xplained_pro.h) file.
-->

#### ABP Mode


##### Configure the ABP Mode on the Platform

1. To join TTN in ABP mode, first, it is required to change the activation method to ABP. This is done on the TTN website under the “**Device Settings**” page.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-abp-change.png"
  width="100%"
  caption="TTN Console, change the activation mode to ABP"
/>

* For ABP mode, the TTN parameters needed are the following: **Device Address**, **Network Session Key**, and **App Session Key**. 

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values. In other cases, you can complete them with specific values.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-abp-param.png"
  width="100%"
  caption="TTN Console ABP join parameters"
/>

2. After completing the activation mode change, the device parameters will be summarized the same as shown in Figure 21.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/ttn-abp-fill.png"
  width="100%"
  caption="TTN Console, ABP mode configuration finalized"
/>

3. Update the join parameters on “**conf_app.h**” file.

4. Rebuild [RAK4260 LoRa demo](../Low-Level-Development/#build-rak4260-loranode-demo-project).

### Connecting to ChirpStack

This section shows how to connect the RAK4260 Evaluation Board to the ChirpStack platform. As described in the ChirpStack website:

“ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including an user-friendly web-interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/loraserver.png"
  width="80%"
  caption="RAK4260 Evaluation Board in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in the Figure 22. Similar to the case of TTN, the RAK4260 Evaluation board is an **End Device** and will transmit the data to the backend servers through a LoRa gateway. For a more technical understanding of the ChirpStack components, refer to the [Architecture](https://www.chirpstack.io/project/architecture/) page of ChirpStack.

:::tip 📝 NOTE:
To register the device to the ChirpStack network server, you must choose either ABP or OTAA mode.
:::

#### Create a new Application

1. To connect RAK4260 Evaluation Board to ChirpStack, first, you need to create an Application.

2. Go to the Applications section then click on “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-create-new-app.png"
  width="100%"
  caption="Creating a new Application on the RAK’s ChirpStack LoRaServer"
/>

3. Create an Application named **rak4260_node**. Fill the required fields as shown in the Figure 24. 
   
4. To finish, click the “**CREATE APPLICATION**” button. 

ChirpStack LoraServer supports multiple system configurations, with only one by default. By default, a new Application should be created, although it is possible to reuse the existing ones.

* **Application Name**: rak4260_node
* **Application Description**: RAK4260 EVB application
* **Service profile**: This field will select the system profile.

The **Application Description** field is just a descriptive text.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-filling-param.png"
  width="100%"
  caption="Filling parameters of an Application on the RAK’s ChirpStack LoRaServer"
/>

#### Registering a new device

1. Click on the Application **rak4260_node** created in the previous step.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-list-app.png"
  width="100%"
  caption="List of applications created on the RAK’s ChirpStack LoRaServer"
/>

2. Select the “**DEVICES**” tab as shown in Figure 26.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-device-tab.png"
  width="100%"
  caption="Device tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

3. Inside of the “**DEVICES**” tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-add-device.png"
  width="100%"
  caption="Add a new device at DEVICES tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-device-reg.png"
  width="100%"
  caption="New device registration form on the RAK’s ChirpStack LoRaServer"
/>

4. Fill the parameters requested as appears in the Figure 28:

*	**Device name** and **Device description**: These are just descriptive texts. 
*	**Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in the Figure 29. You can also add a specific Device EUI directly in the form. 
*	**Device-profile**: To join in OTAA mode, select “**device_profile_otaa**” or "**device_profile_abp**" to join in ABP mode. 

:::tip 📝 NOTE:
ChirpStack doesn’t support AS923 in ABP mode.
:::

5. Press the “**CREATE DEVICE**” button at the bottom of this page to finish the device registration. 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-generate-deveui.png"
  width="100%"
  caption="Generate a new Device EUI in the device registration form"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or via Activation-By-Personalization (ABP). In OTAA the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA Mode

###### Configure the OTAA mode on the platform

1. If you have selected “**device_profile_otaa**”, then after the device is created, an “**Application Key**” must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-otaa.png"
  width="100%"
  caption="Choosing OTAA mode in the device registration form"
/>

2. A previously created “**Application Key**” can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-otaa-appkey.png"
  width="100%"
  caption="Application Key for the OTAA mode in the device registration form"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 32, a new device should be listed in the  “**DEVICES**” tab. The most important parameters, such as the “**Device EUI**” are shown in the summary. 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-deveui.png"
  width="100%"
  caption="New crated device listed in the DEVICES tab"
/>

4. To end the process, it is a good practice to review that the **Application Key**” is properly associated with this device. The “**Application Key**” can be verified in the “**KEYS(OTAA)**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-appkey.png"
  width="100%"
  caption="Application Key associated to the new device"
/>

:::tip 📝 NOTE:
Standard OTAA mode requires the Device EUI, Application Key, and the Application EUI. But in ChirpStack’s implementation, only Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab.
:::

##### ABP Mode

###### Configure the ABP mode on the platform

During the registration of a new device, if “**device_profile_abp**” is selected, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode. 

1. Fill the parameters requested as appears in the Figure 34:

* **Device name** and **Device description**: These are just descriptive texts.
* **Device EUI**: You can also add a specific Device EUI directly in the form. 

2. Once these parameters are filled, click the “**CREATE DEVICE**” button. 

:::tip 📝 NOTE:
Check the Disable frame-counter validation to prevent the node-side counting the frame starting from zero after the node is powered on during the test, and the server cannot synchronize the node-side counting, causing the transmission to fail.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-abp-console.png"
  width="100%"
  caption="ChirpStack Console, configuring a device in ABP mode"
/>

After selecting the ABP mode, the following parameters appear in the “**ACTIVATION**” tab as shown in the Figure 35: 

*	**Device address**
*	**Network session key**
*	**Application session key**

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-abp-param.png"
  width="100%"
  caption="ChirpStack Console, parameters required for the ABP mode"
/>

* The parameters can be generated as random numbers by the platform or can be set with values. Once these parameters are filled properly, the process is completed by clicking on the “**(RE)ACTIVATE DEVICE**” button.

##### Capturing LoRaWAN Frames on ChirpStack Console

###### View LoRaWAN OTAA Frames

1. Go to Applications->rak4260-node->Devices->rak4260-node, then select “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/otaa-activation.png"
  width="100%"
  caption="OTAA activation frame"
/>

2. Go to Applications->rak4260-node->Devices->rak4260-node, then select “**DEVICE DATA**” tab.
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/otaa-data.png"
  width="100%"
  caption="Device data OTAA frame"
/>

###### View LoRaWAN ABP Frames 

1. Go to Applications->rak4260-node->Devices->rak4260-abp, then select “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-abp-frame.png"
  width="100%"
  caption="LoRaWAN ABP frame"
/>

2. Go to Applications->rak4260-node->Devices->rak4260-abp, then select “**DEVICE DATA**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/6chirpstack/chirpstack-abp-data.png"
  width="100%"
  caption="Device data ABP frame"
/>

### LoRa Simple P2P Demo

This example is based on Microchip demo:
[SAM R34 long range P2P](https://github.com/MicrochipTech/atsamr34_long_range_p2p.git)

Using this project, it is possible to send and receive messages to another nearby RAK4260. The messages can be unicast or broadcast and encrypted or not. The demo does not use **RTOS** but a task scheduler.

The RAK460 P2P demo can be cloned using the following link:

- [RAK4260 long range P2P](https://github.com/RAKWireless/Evaluation_Boards.git)



Use p2p-rak4260 branch as shown in Figure 40.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/7p2p/rak4260-p2p-clone.png"
  width="90%"
  caption="LoRa P2P Demo clone project"
/>
<br>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/7p2p/p2p-scan.png"
  width="90%"
  caption="LoRa P2P Demo scanning channels"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/7p2p/p2p-broadcast.png"
  width="90%"
  caption="Lora P2P Demo broadcast messages"
/>



## Miscellaneous  
  
### RAK5005 Core Module Slot Connection to RAK4261
  
The RAK5005 is the base board that connects the RAK4260 Core Module. It creates the power supply for the attached module and provides additional IO and Sensor support for your project needs.  

::: tip 📝 NOTE
RAK4261 is a circuit board module for RAK5005 with pre-soldered RAK4260 LPWAN Module.
:::
  
Listed below are the accessible pins and data bus of attached RAK5005 base board on the RAK4260 EVB:


| RAK4261 Pin Definition | Function Name of WisBase | Pin Number | Pin Number | Function Name of WisBase | RAK4261 Pin Definition |
| ---------------------- | ------------------------ | ---------- | ---------- | ------------------------ | ---------------------- |
| NC                     | VBAT                     | 1          | 2          | VBAT                     | NC                     |
| GND                    | GND                      | 3          | 4          | GND                      | GND                    |
| 3V3                    | 3V3                      | 5          | 6          | 3V3                      | 3V3                    |
| PA25_USB_P             | USB+                     | 7          | 8          | USB-                     | PA24_USB_N             |
| NC                     | VBUS                     | 9          | 10         | SW1                      | NC                     |
| UART1_TX/PA04          | TXD0                     | 11         | 12         | RXD0                     | UART1_RX/PA05          |
| RST                    | RESET                    | 13         | 14         | LED1                     | PA27                   |
| PA06                   | LED2                     | 15         | 16         | LED3                     | PA07                   |
| 3V3                    | VDD                      | 17         | 18         | VDD                      | 3V3                    |
| SDA/PA16               | I2C1_SDA                 | 19         | 20         | I2C1_SCL                 | SCL/PA17               |
| PA08                   | AIN0                     | 21         | 22         | AIN1                     | PA09                   |
| NC                     | BOOT0                    | 23         | 24         | NC                       | NC                     |
| PA22_SS                | SPI_CS                   | 25         | 26         | SPI_CLK                  | PB23_SCK               |
| PB02_MISO              | SPI_MISO                 | 27         | 28         | SPI_MOSI                 | PA23_MOSI              |
| PB22                   | IO1                      | 29         | 30         | IO2                      | PA15                   |
| PA14                   | IO3                      | 31         | 32         | IO4                      | NC                     |
| UART3_TX/PA19          | TXD1                     | 33         | 34         | RXD1                     | UART3_RX/PA18          |
| NC                     | I2C2_SDA                 | 35         | 36         | I2C2_SCL                 | NC                     |
| NC                     | IO5                      | 37         | 38         | IO6                      | NC                     |
| GND                    | GND                      | 39         | 40         | GND                      | GND                    |

<br>