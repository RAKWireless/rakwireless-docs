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
2. Gateway in Range, for Testing
3. Micro-USB Cable
4. Windows PC
5. RAKDAP1 DapLink tools (not provided)

### What's included in the Package?

* 1-pc RAK4260 EVB (RAK4261 + RAK5005)
* 1-pc Micro USB Cable
* 1-pc LoRa Antenna (iPEX)
* 2-pcs 4-pin Header
* 9-pcs Dupont Lines


## Burning the Firmware

**RAK4260**  is an LPWAN Module based on Microchip’s SIP and the firmware for the RAK4260 can also use the provided SDK of Microchip.

RAK has already compiled a Demo firmware for RAK4260 based on Microchip's SDK that can be downloaded freely for testing purposes in this Github Repository: 
* [https://github.com/RAKWireless/RAK4260-LoRaNode-demo](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

:::tip 📝 NOTE
This sample firmware is solely for testing purposes only. If you want to use and deploy your own, you have to make your own customized firmware based on Microchip SDK.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/github-repo.png"
  width="100%"
  caption="RAK4260 Github Repository"
/>

To flash a new firmware we use RAKDAP1, a J-Link/SWD adapter. It requires the Python3 tool pyocd on your computer.

### Installing Environment

#### 1. Install Python3    
Because pyocd needs the Python environment, we must install Python3. We can download the Python3 package from Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/) and install it using the default configuration. After installing successfully, we can check the version as follow:    

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/py_ver_check.png"
  width="50%"
  caption="Check Python version"
/>     
:::tip 📝 NOTE
If the Python version is above 3.4, pip is automatically installed. But if not, we should install pip3 manually. 
:::
   

#### 2. Install pyocd using pip    
Use the following command to install pyocd:     
```
pip3 install pyocd
```
After installation, check the version of pyocd as follow:    

<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/pyocd_ver_check.png"
  width="30%"
  caption="Check pyocd version"
/> 


#### 3. Install the support package for the MCU
After installing pyocd successfully we need to install the support package for the MCU.    
The command format is:
```
pyocd pack --install <MCU model>
```
so the correct command is    
```
pyocd pack --install atsaml21j18a
```

The support packages are MDK packages. You can see a complete list at [https://www.keil.com/dd2/Pack/](https://www.keil.com/dd2/Pack/)

### Flash the firmware using DAPLink and RAKDAP

#### 1. Connect the board to RAKDAP
* Connect the 4 debug/programming SWD pins of the board to the RAKDAP adapter **(VCC | GND | SWIO | SWCLK)**

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/interfacing/rak4260-evb-connection.png"
  width="60%"
  caption="DAPLink to RAK4260 Connection"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/interfacing/rak4260-evb-pin.png"
  width="60%"
  caption="DAPLink to RAK4260 Connection"
/>
<!-- <rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/jtag-rak4260-connection.png"
  width="70%"
  caption="JTAG to RAK4260 Connections"
/> -->

To flash the `RAK4260_APPS_ENDDEVICE_DEMO.hex` you downloaded before, the command is    
```
pyocd flash -target atsaml21j18a RAK4260_APPS_ENDDEVICE_DEMO.hex
```

Depending on the size of the file, the flashing can take several minutes. The success or failure of the flashing will be shown in the command line:    
<rk-img
  src="/assets/images/wisduo/rak4260-breakout-board/quickstart/interfacing/pyocd_flash_log.png"
  width="75%"
  caption="PYOCD flash log"
/>  

<!-- ### Installing J-Flash

1. Go to the Official Website of **Segger** where you can Download the J-Flash software: 
[https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/segger-website.jpg"
  width="100%"
  caption="Segger Official Website"
/>

2. Download the software that corresponds to your Operating System, in this guide we will be using Windows OS.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/jlink-software.jpg"
  width="100%"
  caption="J-link Software in different platforms"
/>

3. After you have downloaded the corresponding software for your machine, install it and wait for a couple of minutes.

### Creating Project in J-Flash

1. Upon opening the software, you will be greeted with the following window.  Choose **Create a new project**. Then Click **Start J-Flash.**

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/jflash-interface.jpg"
  width="100%"
  caption="J-flash Interface"
/>

2. You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below: 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/config-the-project.jpg"
  width="100%"
  caption="Configuring the Project"
/>

3. Select the Manufacturer to **Atmel** and Select the Device **Atmel ATSAML21J18 .**

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/selecting-the-device.png"
  width="100%"
  caption="Selecting the Device"
/>

4. Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press **OK.**

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/interface-and-speed.jpg"
  width="100%"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/project-successful.jpg"
  width="100%"
  caption="Created Project Successfully"
/>

### Connecting with JTAG

1. Connect the RAK4260 Evaluation Board with your J-Link in your PC through JTAG (refer to the Figure Below)

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/jtag-rak4260-connection.png"
  width="70%"
  caption="JTAG to RAK4260 Connections"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/jtag-rak4260.png"
  width="50%"
  caption="JTAG to RAK4260 Connections"
/>

2. In the J-Flash software Menu Bar, Choose Target -> Connect 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/connect-to-rak4260.png"
  width="100%"
  caption="Connect to the RAK4260"
/>

* If everything works properly, it will prompt "**Connected Successfully"** indicating that you have successfully connected the RAK4260 with J-Link.

3. Now, choose the demo firmware that you have downloaded 

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/choose-demo-firmware.jpg"
  width="100%"
  caption="Choosing the Demo Firmware"
/>

4. After you choose the firmware, select Target -> Production Programming to start the flashing process and wait for a couple of minutes.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/burning-the-firmware.png"
  width="100%"
  caption="Burning the Firmware"
/>

* The following picture below shows the correct log that we have successfully burned the firmware into our device:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/3burning-the-firmware/burning-successful.jpg"
  width="100%"
  caption="Success Burning of Firmware Log"
/> -->


## Interfacing with the RAK4260 Evaluation Board

In order for you to be able to interface with the RAK4260 Evaluation Board with your Windows Machine and check if you have successfully burned the custom firmware provided by RAKwireless correctly, download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

:::warning ⚠️ WARNING
Before powering the RAK4260 Evaluation Board , you should install the LoRa antenna first . Not doing so might damage the board
:::

1. Connect your RAK4260 Evaluation Board in your Windows Machine using the provided micro-usb cable.

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

3. In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : **Windows + R** and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/device-manager.png"
  width="100%"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have downloaded the CH340 Drivers in your Machine.
:::

5. Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/4interfacing-with-rak4260/correct-port-and-baudrate.png"
  width="90%"
  caption="Correct Port Number and Correct Baud rate"
/>


## Connecting to The Things Network (TTN)

In this section, we will be connecting the RAK4260 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

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

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

### Register Device

1. Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

2. Click "**Register device**"

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

1. After connecting the device and choosing the appropriate COM Port and Baudrate, press the "**Reset button**" on your RAK5005 Baseboard Module and If everything works perfectly, you should see the following message below:

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/rak-serial-port-tool-success.jpg"
  width="100%"
  caption="Serial Port Tool Successful Connection"
/>

2. As you see, RAK4260 has joined with TTN successfully. The default join mode is OTAA, and the default frequency is EU868. After resetting it, RAK4260 will join automatically because the dev_eui, app_eui, and app_key have been configured in the source code.

```c
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
You can modify the dev_eui, app_eui, and the app_key as you want. You can find it in the following source [**code**](https://github.com/RAKWireless/RAK4260-LoRaNode-demo/blob/master/APPS_ENDDEVICE_DEMO1/src/config/conf_app.h)
:::

3. In order for you to send the data from the RAK4260 to the TTN successfully, choose the option 2 then press Enter. The following figure below shows the data received in the TTN.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/quickstart/5ttn/data-received-ttn.jpg"
  width="100%"
  caption="Data received in the TTN"
/>
