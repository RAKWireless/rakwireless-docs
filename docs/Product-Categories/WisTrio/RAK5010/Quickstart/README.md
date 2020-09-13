---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK5010
---

# Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/2.quick-start-guide/fqyo41hvkupnrljccsam.jpg"
  width="30%"
  caption="Front View of RAK5010"
/>
-->

### What do you need?

Before going through each and every step in the installation guide of the RAK5010 WisTrio NB-IoT Tracker Pro, make sure to prepare the necessary items listed below:

1. RAK5010 WisTrio NB-IoT Tracker Pro
2. USB-UART Module
3. Jumper Wires
4. Micro USB / 3.7V rechargeable battery / 5V Solar Panel Port
5. JTAG Emulator

:::tip 📝 NOTE:
 This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, please refer to the sections below:
1. [Burning the Firmware](/Product-Categories/WisTrio/RAK5010/Quickstart/#burning-the-firmware)
2. [Upgrading Firmware through DFU Over BLE](/Product-Categories/WisTrio/RAK5010/Quickstart/#upgrading-firmware-through-dfu-using-ble)
:::

### What's included in the Package?

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/2.quick-start-guide/rzoescy4hwuxkrcayggx.jpg"
  width="75%"
  caption="Included Items in RAK5010 Package"
/>

## Product Configuration

### Checking Device Logs

There are 3 ways that you can check the logs for debugging purposes on your RAK5010 WisTrio NB-IoT Tracker Pro:

1. **Through J-Link RTT Viewer**
2. **Through UART**
3. **Through Micro-USB**

#### Through J-Link RTT Viewer

1. If you want to check the logs of RAK5010 WisTrio NB-IoT Tracker Pro using this method, make sure you have connected the RAK5010 with your PC through JTAG like the following diagram below


<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/rrktg8blr065uoa0irl1.jpg"
  width="75%"
  caption="RAK5010 and PC Connection through JTAG"
/>  

:::warning ⚠️WARNING
 You still have to connect the Micro USB Cable to the RAK5010 to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/xgdllxo7gb3ks0y3tbch.png"
  width="100%"
  caption="J-Link RTT Viewer"
/>  

3. Choose the device parameters as the following picture shows or in the table provided and press "OK".

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/wmoh5e7i8n6gxxr9h4o9.png"
  width="80%"
  caption="J-Link Target Device Settings"
/>  

| Parameter | Data | 
| ---- | ---- | 
| Manufacturer | Nordic Semi | 
| Device | nRF52840\_xxAA | 
| Core | Cortex-M4 | 
| NumCores | 1 | 
| Flash Size | 1028 KB | 
| RAM Size | 256 KB | 


4. Connect to your RAK5010 by navigating through File>Connect in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/jrqm79eoaojwuynzdu1t.jpg"
  width="100%"
  caption="Connecting in J-Link RTT Viewer"
/>  

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/uku52cmdo7ccdzwbwubz.png"
  width="80%"
  caption="J-Link RTT Viewer showing RAK5010 Logs"
/>  

:::tip 📝 NOTE:
 If there is no log after connecting successfully, you can try to reset RAK5010 or check the connection of JTAG.
:::


#### Through UART

1. If you want to check the log of RAK5010 through UART, you should make sure that RAK5010 has been connected with your PC through UART correctly as the following picture shows:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/vnimzkp0kinl9ri7y3zm.jpg"
  width="75%"
  caption="RAK5010 and USB-UART Connection"
/>  


- Then open a serial port tool in your PC. If you haven’t a serial port tool, I recommend using RAK Serial Port Tool which you can download from **[RAKwireless Downloads](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**
- After pushing the RST button on RAK5010, you can see the following contents in the serial port tool:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/qsst0fqcss6tlwofo9ex.jpg"
  width="45%"
  caption="RAK Serial Port Tool"
/>  

- OK, you can see the log through UART now.

#### Through Micro USB

- To start with, connect RAK5010 with your PC through microUSB/USB as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/cjkxyja4hkqovtiddklj.jpg"
  width="60%"
  caption="MicroUSB Interface for RAK5010"
/>  

- Open the serial port tool in your PC.

:::tip 📝 NOTE:
 For this method, you need a serial port tool which can support DTR function, like Termite. You can download Termite on their [website](https:\/\/www.compuphase.com\/software_termite.htm).
:::

- Alright, after opening the serial tool, configure its setting by following the picture below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/gpubckbaii9vocy1h32u.png"
  width="75%"
  caption="Termite Configuration Enabling DTR"
/>  

- Now, the Termite app will connect with RAK5010 automatically. Then you can send AT commands and check the log in Termite:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/3.checking-device-logs/hqfcunna1swkknili72n.png"
  width="75%"
  caption="Checked Log in Termite"
/>  
 
### Configuring RAK5010

You can configure your RAK5010 WisTrio NB-IoT Tracker Pro by sending AT Commands either through UART, through BLE or through Micro USB.

:::tip 📝 NOTE:
 For the full list of AT Commands available for configuring your RAK5010, kindly check [here](../AT-Command-Manual/)
:::

#### Through UART

1. As mentioned in [Checking Device Logs](#checking-device-logs), if you want to use RAK5010 WisTrio NB-IoT Tracker Pro through UART, you should connect the RAK5010 in your machine through UART as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/g1rz6rigcuznvqtlfcb5.jpg"
  width="75%"
  caption="RAK5010 and USB-UART Connection"
/>  

2. Try to send a simple AT command to RAK5010 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK5010 in the same way.
```sh
at+version
```

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/viskdhazv9uu3yxhotid.jpg"
  width="45%"
  caption="AT command for Firmware Version"
/>  

#### Through BLE

1. In order to configure the RAK5010 WisTrio NB-IoT Tracker Pro through BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/eponlb3piu1p6noof1np.png"
  width="75%"
  caption="nRF Connect App in Android and IOS"
/>  


2. Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list:


<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/rwpeihuyflhu65gopfml.jpg"
  width="40%"
  caption="Available Bluetooth Devices in the Nordic App"
/>  

3. Press the reset button on the RAK5010 Board and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/mg6xtfoepu06s33iedyu.jpg"
  width="80%"
  caption="Nordic UART Service in the Nordic App"
/>  

:::warning ⚠️WARNING
 By the default, the BLE signal of the RAK5010 is turned off automatically if no connection is established after 60 seconds. Connect to the BLE signal of the RAK5010 immediately after pressing the reset button.
:::

4. Click the arrow which is marked by the red box in the picture below, you will see the following page:


<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/r7j95cqwrevod7qtvcsv.jpg"
  width="40%"
  caption="RX Characteristic in the Nordic UART Service"
/>  

5. You can now then send AT commands to the RAK5010. Meanwhile you can also see log information in RTT Viewer as discussed in [Checking Device Logs](/Product-Categories/WisTrio/RAK5010/Quickstart/#checking-device-logs).

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/jficmu58afzs3r1hkw5h.jpg"
  width="80%"
  caption="Sending AT Command via Nordic App"
/>  

6. Then, you can see the version number in RTT Viewer tool:
<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/nqqegmebbppnrcguzshh.png"
  width="80%"
  caption="Log Info in J-Link RTT Viewer"
/>  

#### Through Micro USB

- To begin with, connect your RAK5010 with your PC through microUSB/USB as shown in the image below:
<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/ehzpnpgveqdplcndqwc7.jpg"
  width="60%"
  caption="MicroUSB Interface for RAK5010"
/> 

- Open the serial port tool in your PC.


:::tip 📝 NOTE:
 For this method, you need a serial port tool which can support DTR function, like Termite. You can download Termite [**here**](https:\/\/downloads.rakwireless.com\/en\/Cellular\/Tools\/).
:::

Alright, after opening the serial tool, configure its setting by following the picture below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/ginpaktnnszkf65cnlgo.png"
  width="75%"
  caption="Termite Configuration Enabling DTR"
/> 

Termite will connect with RAK5010 automatically, if not, just click the blue button to connect again:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/fjdgvai3o7c0fkworis5.jpg"
  width="75%"
  caption="Termite Initial Log"
/> 

- Now, you can send AT commands into RAK5010.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/4.configuring-rak5010/ytdlpxiq25p7o1o3ylkr.png"
  width="75%"
  caption="Checked Log in Termite"
/> 

### Connecting Cellular Network and Sending Packet over Cellular

In this section, you will learn more on how to connect Cellular Network of your device. 

- To start with,  insert a SIM card into your RAK5010. For this section, use China Mobile SIM card and based on GSM network for example.

As describe in the previous section, we learned that there are three ways to configure our RAK5010: through UART, BLE and microUSB. For this section,  I’ll use UART to configure RAK5010 as an example, but surely you can use BLE or microUSB to configure it too.

OK! Let’s start configuring our RAK5010 through UART.

There are two ways to
connect Cellular network and send packet over Cellular: Manual and Automatic.

#### 1 . Connecting Cellular Network and Sending Packet over Cellular Manually

- To begin with, send the AT command `at+scan=cellular` to scan Cellular networks:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/ldd1gtipgjw2rdimcm06.jpg"
  width="45%"
  caption="Scanning for Cellular Networks"
/>  

- Wait for about 30 seconds, then you will see the following output in the serial port tool:


<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/o1yixmjvgqaheaczyyvb.jpg"
  width="45%"
  caption="Scanned Cellular Network shown in Serial Port"
/> 

- As you see, RAK5010 has scanned around Cellular network and show them in the serial port tool.

Then, use the AT command `at+set_config=cellular: (AT+COPS=1,0,"CHINA MOBILE",0)` to configure the operator information:


<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/s397ccuztyjg01v9oe57.jpg"
  width="45%"
  caption="Configuring the Operator"
/> 


Now, continue to configure by using the AT command `at+set_config=cellular: (AT+QICSGP=1,1,"CMCC","","",1)` and `at+set_config=cellular:(AT+QIACT=1)` :

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/viol2m3ggyntrqdrju3l.jpg"
  width="45%"
  caption="Configuring the Cellular Network"
/> 

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/kbfkkzhigynpqvvserph.jpg"
  width="45%"
  caption="Configuring the Cellular Network"
/> 

- Then, set the IP address of the server which will receive the packet sending from RAK5010:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/wfgibirfba6br8wfddeo.jpg"
  width="45%"
  caption="Configuring the IP Address of the Server"
/> 

:::tip 📝 NOTE:
 This IP address is just used for example, and it is my testing server actually. For your configuration, use your own server IP address.
:::

- OK, we’ve configured RAK5010 correctly.

Next, let’s try sending a packet manually over Cellular.

- You can use the AT command `at+send=cellular:XXX` to send data over Cellular:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/qliw07b9ag9om2ytbi6k.jpg"
  width="45%"
  caption="Sending Data over Cellular"
/> 

- As you can see, the data we send is “**123456**”. 

Now, let’s check it on our receiving server:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/muvnk5vma57gwns6apo9.jpg"
  width="75%"
  caption="Received Data shown in the terminal"
/>

Great! As you see in the **Figure 32**, the server has received the packet successfully, and the data sent is “**123456**” which is same with the one we just sent out.

#### 2 . Connect Cellular Network and Send Packet Automatically

We have already discussed the manual process, now, we'll learn about the **automatic** way of connecting and sending data with Cellular Network. First, configure the parameters for the Cellular operator information and the receiving server information as follows (a China Mobile SIM card and based on GSM network were used as an example):

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/nmsor2nxqikesbzduzdj.jpg"
  width="45%"
  caption="Configuring the Cellular Network Parameters"
/>

- Then, set the interval for sending loop as follow:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/usvaf8prsuthawdgwv2t.jpg"
  width="45%"
  caption="Setting the Loop Intervals"
/>

As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer [here](../AT-Command-Manual/).

- Now, restart RAK5010 by sending the AT command `at+set_config=device:restart`:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/b5oewg5p13m9pvimgcr0.jpg"
  width="45%"
  caption="Restarting your RAK5010"
/>

After restarting, RAK5010 will connect the Cellular network which you just set and send packet of sensor’s data automatically in a loop. Every time it sends a packet out, RAK5010 will go to sleep for 180 seconds which you just set, then RAK5010 will wake up and searching GPS, building a new packet, and sending it out.

- You will see a continuously loop as the following picture shows:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/ijh8cftfzy4x9ybyalvr.jpg"
  width="45%"
  caption="Continuous Loop seen in The Serial Tool"
/>

- RAK5010 will send sensor’s data automatically in a loop.

Let’s check the data in the receiving server:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/urwjby1runkjaijb18re.jpg"
  width="100%"
  caption="Data Receive in the Server"
/>

Great! As we see, the server has received the packet which RAK5010 sends out successfully, and they are all sensor’s data in the packet.

## Miscellaneous

### Bluetooth Connection Modes

There are three BLE modes in RAK5010 from the firmware V3.0.0.6 on, the **Peripheral Mode**, the **Central Mode** and the **Beacon Scan Mode**. You can change the work mode of RAK5010’s BLE using this command provided in the [AT Commands for RAK5010 WisTrio NB-IoT Tracker Pro](../AT-Command-Manual/) section.

```sh
at+set_config=ble:work_mode:X:Y
```
**Description:** Set the work mode for BLE.
- **X** - 0: BLE peripheral mode, 1: BLE central mode. 2: Beacon scan mode.
- **Y** - 0: normal range, 1: BLE long range.

#### BLE Peripheral Mode

For the Peripheral Mode, you can scan RAK5010’s BLE and connect with it using your mobile device.

#### BLE Central Mode

For the Central Mode, RAK5010’s BLE will not broadcast so that your mobile devices will not be able to scan it.  This is very useful if you want to make the RAK5010 act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 Devices) can send sensor data.

#### Beacon Scan Mode

For the Beacon Scan mode, RAK5010 can scan around the Beacon signal, it is useful for Beacon use case like iBeacon.

#### RAK5010 BLE Default Settings

By default, the RAK5010 LPWAN Evaluation Board will work on **Peripheral Mode.** In this mode users can configure it through BLE including DFU easily. It should be noted that after resetting the RAK5010, the user has only 60 seconds to establish a connection with your Mobile Device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the RAK5010's BLE signal will not be broadcasted and it will enter power saving mode. On the other hand, there is no limitation once you are already connected with the RAK5010's BLE.

If you set the RAK5010 to work in Central Mode, the RAK5010 will work first on Peripheral Mode for 30 seconds and if no connection is established after 30 seconds, it will automatically work in **Central Mode.** In this mode,the BLE signal of the RAK5010 will stop broadcasting and will not be visible on your mobile devices up until you change the work mode to peripheral mode or reset the RAK5010 again.

### Burning the Firmware

An easy and quick way to get started with your RAK5010 is through using a pre-compiled firmware.  However, if you wanted to compile your own customized firmware, you can visit [RUI Customized Development](/RUI/) documentation to learn how.

#### Installing J-Flash

- Go to the Official Website of **Segger** where you can Download the J-Flash software: [https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/rhblajzhsv9pb1fdos3h.jpg"
  width="100%"
  caption=" Segger Official Website"
/>

- Download the software that corresponds to your Operating System, in this guide we will be using Windows

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/etylt7rqrbcjedteqhqc.jpg"
  width="100%"
  caption="J-link Software in different platforms"
/>

- After you have downloaded your corresponding software, install it and wait for a couple of minutes.

#### Creating Project in J-Flash

- Upon opening the software, you will be greeted with the following window. Choose **Create a new project**. Then Click **Start J-Flash.**

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/qbhdb7hj0cfq0cghohxx.jpg"
  width="100%"
  caption="J-flash Interface"
/>

- You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/sccml4h6imieppibarpy.jpg"
  width="100%"
  caption="Configuring the Project"
/>

- Select the Manufacturer to **Nordic Semi** and Select the Device **nRF52840_xxAA.**

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/h3wken4r8z0rfbznrgrc.jpg"
  width="100%"
  caption="Selecting the Device"
/>

- Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press **OK.**

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/hil2ag7u5vavbgpluu1c.jpg"
  width="100%"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/s91d5tazgtvl1lgihina.jpg"
  width="100%"
  caption="Created Project Successfully"
/>

#### Connecting the RAK5010 with JTAG

- Connect your RAK5010 to your PC through JTAG using the following pinout diagram below:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/hx3crsaspcr2aadaesnc.jpg"
  width="35%"
  caption="RAK5010 and JTAG Hardware Interface"
/>

- Download the latest pre-compiled firmware from the [RAKwireless Downloads](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/) and extract it in your PC.
- In the J-Flash software Menu Bar, Choose Target -> Connect

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/wcw1maqbahdyhqm5hdb6.jpg"
  width="100%"
  caption="Successfully Created Project"
/>

- Now, choose the demo firmware that you have downloaded

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/iyk5ueztu9i3eul8jp6z.jpg"
  width="100%"
  caption="Selecting the Hex File"
/>

- Select Target -> Production Programming to start the flashing process and wait for a couple of minutes.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/7.burning-the-firmware/wechf9fckqgvlw46bfqe.jpg"
  width="100%"
  caption="Connect with the RAK5010"
/>

### Upgrading Firmware through DFU using BLE
1. Download the DFU package of the RAK5010 WisTrio NB-IoT Tracker Pro [**here**](https://downloads.rakwireless.com/en/Cellular/RAK5010/Firmware/DFU-Package/) and save it on your mobile phone.

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK5010 and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about Bluetooth Connection Guide can be found here in [here](/Product-Categories/WisTrio/RAK5010/Quickstart/#bluetooth-connection-modes)
:::

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="80%"
  caption="Secure DFU Service in the Nordic App"
/>


4. Choose “**Secure DFU Service**” and click the button highlighted in red.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="80%"
  caption="Buttonless DFU"
/>

5. Now, click the **red box button** in the image shown below and press "**Send**" in the **Write Value** pop-up window.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="80%"
  caption="Resetting the Bootloader via Bluetooth"
/>

6. Great! Now the RAK5010 is now working in DFU Mode. In the application, you will see the following:

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/qmi89z3vqxvukvbiodnc.jpg"
  width="40%"
  caption="RAK5010 Default Status Overview after Resetting"
/>

7.  In the list of devices, find a BLE signal named "**DfuTarg**" and Connect.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="40%"
  caption="RAK5010 Default Bluetooth ID after Resetting"
/>

9. After connecting, select the DFU Icon. Select the **Distribution packet (ZIP)** and press OK. This will then prompt you to select the zip file of the firmware that you have downloaded.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="80%"
  caption="Distribution Packet File Type under DFU"
/>

10. It will then automatically start to upgrade the firmware of your RAK5010 through DFU over BLE. After upgrading, it will restart and the DFU Connection will be disconnected. Now you can use your RAK5010 with the latest firmware!

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/nzilnqodbz6x33uvnpp4.jpg"
  width="40%"
  caption="DFU Upgrading of RAK5010 Firmwave via BLE"
/>


