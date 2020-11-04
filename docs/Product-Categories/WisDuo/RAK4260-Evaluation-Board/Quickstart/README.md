---
prev: ../Overview/
tags:
  - RAK4260 Evaluation Board
---

# Quick Start Guide

<!---
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/2quick-start-guide/rak4260-overview2.png"
  width="50%"
  caption="Back View of the Evaluation Board"
/>
--->

### What do you need?

Before going through each and every step in the installation guide of the RAK4260 Evaluation Board, make sure to prepare the necessary items listed below:

1. **RAK4260 Evaluation Board**
2. Gateway in range for testing (not provided)
3. Micro USB Cable
4. Windows PC
5. RAKDAP1 DapLink tools (not provided)

### What's included in the Package?

* 1-pc RAK4260 EVB (RAK4261 + RAK5005)
* 1-pc Micro USB Cable
* 1-pc LoRa Antenna (iPEX)
* 2-pcs 4-pin Header
* 9-pcs Dupont Lines


## Burning the Firmware

RAK has already compiled a demo firmware for RAK4260 based on Microchip LoRaWAN Stack (MLS) that can be downloaded freely for testing purposes in this Github Repository: 
* [https://github.com/RAKWireless/RAK4260-LoRaNode-demo](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

Atmel Studio integrated development platform (IDP) is required to compile LoRaWAN demo project.
* [Atmel Studio](https://www.microchip.com/mplab/avr-support)

:::tip 📝 NOTE
This sample firmware is solely for testing purposes only. If you want to use and deploy your own LoRaWAN application, you need to develop a customized firmware based on Microchip LoRaWAN Stack (MLS).
:::

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/github-repo.png"
  width="100%"
  caption="RAK4260 Github Repository"
/>

To flash a new firmware we use RAKDAP1, a SWD adapter. It requires the Python3 tool pyocd installed on your computer.

### Flash the firmware using DAPLink and RAKDAP1

Refer to <a href="../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool" target="_blank">RAKDAP1 Flash and Debug Tool</a>.

## Interfacing with the RAK4260 Evaluation Board

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

2. Open the RAK Serial Port Tool:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/rak-serial-port-tool.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

3. To find the correct COM Port number for your device, go to Device Manager by pressing : **Windows + R** and then type `devmgmt.msc`. Or search for Device Manager in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/device-manager.png"
  width="100%"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and find the name **USB-SERIAL CH340** . Take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have installed the CH340 Drivers in your Windows PC.
:::

5. Choose the Correct Port Number and Baudrate from the Device Manager then click **OPEN** button:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/correct-port-and-baudrate.png"
  width="90%"
  caption="Correct Port Number and Baud rate"
/>


## Connecting to The Things Network (TTN)

In this section, you will be connecting the RAK4260 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log into your account and go to the console which can be found here:


<!--
In this section, we will be connecting the RAK4260 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the console which can be found here:

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

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>

### Adding An Application

1. Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/add-application.png"
  width="100%"
  caption="Application Page"
/>

2. Here are the things that you should take note in adding an application:

   - **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
   - **Description** - this is a short and concise human readable description of your application.
   - **Application EUI** - this will be generated automatically by The Things Network for convenience.
   - **Handler Registration** - handler you want to register this application to.

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the same page as shown in Figure 10, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

### Register Device

1. Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

2. Click "**Register device**".

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/add-device.png"
  width="100%"
  caption="Add your Device"
/>

3. Here are the things that you should take note in registering your device:

   - **Device ID** - this is the unique identifier for your RAK4260 Evaluation Board in your application. You need to enter this manually.
   - **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

4. Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

5. Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/add-device.png"
  width="100%"
  caption="Device Overview"
/>


## OTAA Mode

1. After connecting the device and choosing the appropriate COM Port and Baudrate, press the "**Reset button**" on your RAK5005 Baseboard Module. If everything works perfectly, you should see the following message below:


<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/startup-default-output.png"
  width="60%"
  caption="Serial Port Tool Successful Connection"
/>

2. Choose option 1 "Send Join Request" then click on **SEND** button.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/network-join-parameters-set.png"
  width="60%"
  caption="Join parameters sent"
/>


<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/rak-serial-port-tool-success.jpg"
  width="100%"
  caption="Serial Port Tool Successful Connection"
/>

3. The default join mode is OTAA, and the default frequency is EU868. After resetting it, RAK4260 will join automatically because the dev_eui, app_eui, and app_key have been configured in the source code.

```c
/*Define the Sub band of Channels to be enabled by default for the application*/
#define SUBBAND 1
#if ((SUBBAND < 1 ) || (SUBBAND > 8 ) )
#error " Invalid Value of Subband"
#endif

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
#define DEMO_DEVICE_ADDRESS                     0xdeafface
#define DEMO_APPLICATION_SESSION_KEY            {0x41, 0x63, 0x74, 0x69, 0x6C, 0x69, 0x74, 0x79, 0x00, 0x04, 0xA3, 0x0B, 0x00, 0x04, 0xA3, 0x0B}
#define DEMO_NETWORK_SESSION_KEY                {0x61, 0x63, 0x74, 0x69, 0x6C, 0x69, 0x74, 0x79, 0x00, 0x04, 0xA3, 0x0B, 0x00, 0x04, 0xA3, 0x0B}

/* OTAA Join Parameters */
#define DEMO_DEVICE_EUI                         {0x35,0x34,0x35,0x31,0x65,0x37,0x53,0x00}
#define DEMO_APPLICATION_EUI                    {0x70,0xB3,0xD5,0x7E,0xD0,0x01,0xA1,0xE2}
#define DEMO_APPLICATION_KEY                    {0xD9,0x98,0x8A,0x5F,0x02,0xD8,0x0F,0xAB,0x8B,0xA5,0xF4,0x53,0xC4,0xA2,0xCD,0x2B}

```

:::tip 📝 NOTE
You must choose one LoRaWAN activation method and modify the join parameter's definition if you want. The join parameters and activation methods are defined in the [**conf_app.h**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h) file 

:::

4. In order to send data from the RAK4260 to the TTN successfully, choose option 2 then click on **SEND** button.

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/ttn/sending-data-to-the-server.png"
  width="60%"
  caption="LoraWAN data send"
/>

5. The figure below shows data received by the TTN.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/data-received-ttn.jpg"
  width="100%"
  caption="Data received by the TTN"
/>
-->
