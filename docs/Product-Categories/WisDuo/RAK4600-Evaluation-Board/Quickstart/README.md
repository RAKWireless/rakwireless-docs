---
prev: ../Overview/
tags:
  - RAK4600 Evaluation Board
---

# Quick Start Guide

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/2.quick-start-guide/jm6rnmjjsgr5hr1kzynr.jpg"
  width="50%"
  caption="RAK4600 Evaluation Board Bottom View"
/>
--->

### What do you need?

Before going through the configuration guide of the RAK4600 Evaluation Board, make sure to prepare the items listed below:

1. **RAK4600 Evaluation Board**
2. Micro USB Cable
3. Gateway in Range for Testing
4. RAKDAP1 DapLink tools (not provided)
5. Windows PC

:::tip 📝 NOTE
This device released by RAKWireless is already pre-loaded with its latest firmware upon manufacture. If you want to have your device's firmware burned or upgraded, please refer to the links below:

1. [Device Firmware Setup](#burning-the-firmware)
2. [Device Firmware Upgrading](#upgrading-firmware-through-dfu-using-ble)
   :::

### What's Included in the Package?

- 1pc - RAK4600 Evaluation Board
- 1pc - Micro USB Cable
- 1pc - LoRa Antenna (iPEX)
- 1pc - 2.4G Antenna (iPEX)
- 2pcs - 4-pin Header (not soldered)
- 9pcs - Dupont Lines


## Interfacing with RAK4600

**In order for you**to be able to interface with the Evaluation Board, using a Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

:::warning ⚠️ WARNING
Before powering the RAK4600 Evaluation Board , you should install the LoRa and BLE Antenna first. Not doing so might damage the board.
:::

<br>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/u9lgszijijydbyjkgwnx.png"
  width="55%"
  caption="LoRa and BLE Antennas"
/>


- Connect your RAK4600 Evaluation Board to your Windows Machine using the provided Micro USB cable.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rzolxz9ojiyg0lkqpkqz.png"
  width="55%"
  caption="RAK4600 Evaluation Board to Laptop Connection"
/>



- Open the RAK Serial Port Tool :


<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/gnm0smmpj2hiaaxv65m2.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

- In order to choose the correct COM Port number for your device you need to go to your Device Manager by pressing : Windows + R and typing `devmgmt.msc` or search in the Start Menu

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/cj2yhkexwphkmkscqoxb.png"
  width="100%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have instaalled the the [CH340 Drivers](https://downloads.rakwireless.com/LoRa/RAK811/Tools/CH340%20Drive.rar) to your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baud Rate then click Open:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/gqq1izhoofyqj6ecrgaa.png"
  width="90%"
  caption="Correct Port Number and Correct Baud rate"
/>

### Checking Device Logs

<!-- There are 2 ways that you can check the logs for debugging purposes on your RAK4600 Evaluation Board:

1. **Through J-Link RTT Viewer**
2. **Through UART**

#### Through J-Link RTT Viewer

1. If you want to check the logs of RAK4600 Evaluation Board using this method, make sure you have connected the RAK4600 Evaluation Board with your PC through JTAG like the following diagram below:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/zyvc5cexqy2g04lh5gqm.png"
  width="70%"
  caption="RAK4600 Evaluation Board to Windows PC connection thru JTAG"
/>

<br>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/yrwn46pfwepuhlh1wuof.png"
  width="50%"
  caption="RAK4600 Evaluation Board to Windows PC connection thru JTAG"
/>

:::warning ⚠️ WARNING
You still have to connect the Micro-usb Cable to the RAK4600 Evaluation Board to power the board.
:::

2. Go to the Official Website of **Segger** where you can Download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program “**J-Link RTT Viewer V6.60f**” and choose "**USB**" for the type of connection to J-Link. After which, press "**OK**".

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/k40v5ssykcsgrwfvd6ds.png"
  width="100%"
  caption="J-Link RTT Viewer Start-up Window"
/>

3. Choose the device parameters as the following picture shows and press "OK".

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/xjnmuyygdpfhmjbko2dn.png"
  width="100%"
  caption="J-Link RTT Viewer Connection Parameters"
/>

4. Connect to your RAK4600 by navigating through File>Connect in the Main Menu. Alternatively, you could just press "**F2**" to do the same process.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/xhppkxsyq7k0zste4xpx.png"
  width="100%"
  caption="J-Link RTT Viewer Connecting Shortcut"
/>

5. Once connection is obtained, you should see the same log as shown in the image below:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/uvpxna4236xrglaamrcx.jpg"
  width="75%"
  caption="Log Checking through J-Link RTT Viewer"
/>

:::tip 📝 NOTE
If there is no log after connecting successfully, you can try to reset RAK4600 or double check the connection of JTAG.
:::

#### Through UART -->

1. If you want to check the log of RAK4600 through UART, you should make sure that RAK4600 has been connected with your PC through UART correctly as the following picture shows:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/munukxglkrz6vw7n9tow.jpg"
  width="85%"
  caption="UART to RAK4600 Evaluation Board Connection"
/>

:::tip 📝 NOTE
You still have to connect the Micro-usb Cable to the RAK4600 Evaluation Board to power the board.
:::

2. Open the RAK Serial Port Tool as described in [Interfacing with RAK4600](#interfacing-with-rak4600)

3. Press the Reset Button on the RAK4600 Evaluation Board then you will see the following contents in the Serial port Tool.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/ebx6auejnil1ob8hvhaf.jpg"
  width="45%"
  caption="Log Checking through UART"
/>

## Configuring RAK4600

You can configure your RAK4600 Evaluation Board by sending AT Commands either through UART, through BLE or through Micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK4600, kindly check [here](#at-commands-for-rak4600-lpwan-evaluation-board)
:::

### Through UART

1. As mentioned in [Checking Device Logs](#checking-device-logs), if you want to use RAK4600 Evaluation Board through UART, you should connect the RAK4600 in your machine through UART as shown in the image below:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/evtfrnai2bs2mtpyhusv.jpg"
  width="85%"
  caption="RAK4600 and USB-UART Connection"
/>

2. Try to send a simple AT command to RAK4600 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK4600 in the same way.

```sh
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/viskdhazv9uu3yxhotid.jpg"
  width="45%"
  caption="AT command for Firmware Version"
/>

### Through BLE

1. In order to configure the RAK4600 Evaluation Boardthrough BLE, download and install **nRF Connect** which is developed by Nordic Semiconductor and is also available in both App Store and Google Play Store.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/eponlb3piu1p6noof1np.png"
  width="85%"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/rwpeihuyflhu65gopfml.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 Evaluation Board and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/mg6xtfoepu06s33iedyu.jpg"
  width="85%"
  caption="Nordic UART Service in the Nordic App"
/>

:::warning ⚠️ WARNING
By the default, the BLE signal of the RAK4600 is turned off automatically if no connection is established after 60 seconds. Connect to the BLE signal of the RAK4600 immediately after pressing the reset button.
:::

4. Click the arrow which is marked by the red box in the picture below, you will see the following page:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/r7j95cqwrevod7qtvcsv.jpg"
  width="45%"
  caption="RX Characteristic in the Nordic UART Service"
/>

5. You can now then send AT commands to the RAK4600. Meanwhile you can also see log information in RTT Viewer as discussed in [Checking Device Logs](#checking-device-logs).

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/jficmu58afzs3r1hkw5h.jpg"
  width="85%"
  caption="Sending AT Command via Nordic App"
/>

6. Then, you can see the version number in RTT Viewer tool:
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/nqqegmebbppnrcguzshh.png"
     width="75%"
     caption="Log Info in J-Link RTT Viewer"
   />


## Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4600 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/szwxvka0wyqg5ybjrffb.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/jf9flba2uoyc3wt2k9lw.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

- Click the "**add application**" button
  <rk-img
    src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/eixjrjjdmpc4bstoyleu.png"
    width="100%"
    caption="Adding an Application"
  />

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

- After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/nyiksw5ezoobdkqaifft.png"
  width="100%"
  caption="Application Overview"
/>

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/m0diwppr3c6uq2fzcmnb.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4600 Evaluation Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/uvhfpgf50yodwdl9dxp7.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the [OTAA Mode](#otaa-mode) or [ABP mode](#abp-mode) section.

### OTAA Mode

When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/otjgr7rhyejvmsx4i4km.png"
  width="100%"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE:
As an example, let’s join in OTAA mode, EU868 frequency and the default LoRa class is Class A.
:::

1. Set the LoRa join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/ugvheykwbjgqrmve3gr1.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Join Mode via RAK Serial Port Tool"
/>

2. Set the LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/uwdcbt0uegx9s5nacmdh.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Class via RAK Serial Port Tool"
/>

3. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/iuxsdncululn7d4ywcis.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Region Frequency via RAK Serial Port Tool"
/>

4. Set the **Device EUI.**

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/pu2digmbwm9tms4h3mtm.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Device EUI via RAK Serial Port Tool"
/>

5. Set the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/k2nhwyd1ctfx6gjwuboz.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Application EUI via RAK Serial Port Tool"
/>

6. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/rv7qwzhicwokmmgxcawf.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
After configuring all parameters, you need to reset RAK4600 Evaluation Board for saving parameters!
:::

7. After resetting RAK4600 Evaluation Board, join in OTAA mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/mgztynrigiozealhlv6t.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Join via RAK Serial Port Tool"
/>

8. Joined successfully! Now, let’s try to send a data from the RAK4600 Evaluation Board to TTN:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/drwvcagphdvkbt8kefnc.jpg"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from RAK4600 Evaluation Board on TTN website as follows:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-otaa/vdrrdeh7oifamkrwvryn.jpg"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>



### ABP Mode

1. First, switch the activation method to ABP as shown in the following image:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="APB Activation in The Things Network"
/>

2. These three parameters will be used on RAK4600 Evaluation Board: **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="ABP Parameters in The Things Network"
/>

::: tip 📝 NOTE:
As an example, let's join in ABP mode, EU868 frequency, and LoRa class is Class A.
:::

3. If the join mode is not in ABP Mode, just set the LoRa join mode to **ABP** as follows:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/cl6jv8cge7hzkavag3hn.jpg"
  width="45%"
  caption="ABP Parameters in The Things Network"
/>

4. Set the LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/mmll3jdm6l9hg3jm5jy7.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/hoxaobrwlgh6otjde6vd.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Class via RAK Serial Port Tool"
/>

6. Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/i5tmaceu0jqjbh3qt4po.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/kc6fxzmr4ijlan1sgrh8.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/wcfzckjltpwf2n8pdobs.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
After configuring all parameters, you need to reset RAK4600 Evaluation Board for saving parameters!
:::

9. After resetting your RAK4600 Evaluation Board, join in **ABP mode**:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/mqklekitvyx1smagkvx5.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
There is no need to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode
:::

Now, let’s try to send a data from the RAK4600 Evaluation Board to TTN in ABP mode.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/ttn-abp/hdyn5eezsmczhxvblpkn.jpg"
  width="45%"
  caption=" OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

## Connecting with Chirpstack

The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

:::tip 📝 NOTE:
In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway and [**RAK cloud testing**](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/wgk31ykcgwp2gbzicmut.png"
     width="100%"
     caption="Chirpstack Default Window"
   />

:::tip 📝 NOTE:
By default, there is already one or more items in this page, you can use it or create a new item.
:::

2. Create a new item by clicking the “**CREATE**” button, and fill up the necessary items.
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/l8na6pcdsvjl0lrqznyr.png"
     width="100%"
     caption="Chirpstack Creating Application"
   />

3. Once done , click “**CREATE APPLICATION**”.
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/zcxqc0pe6vquherzw521.png"
     width="100%"
     caption="Chirpstack Applications Available"
   />

4. The list of items are then provided same with the image above. Click the new item created.
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/r2ikjxdaluvfxbqhaccc.png"
     width="100%"
     caption=" Applications Page in Chirpstack"
   />

5. Add a Node device into ChirpStack by clicking the “**CREATE**” button:
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/sdrlazcgfseimitslo6u.png"
     width="100%"
     caption="Chirpstack Adding Node into the  RAK4 LPWAN Evaluation Board "
   />

6. Once the Node is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/bx0hvot72klwrnznnbig.png"
     width="100%"
     caption="Chirpstack Adding Parameters in the Node"
   />

### OTAA Mode

1. If you select “**device_profile_otaa**”, it means you want to join ChirpStack in **OTAA mode**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/o1o2cdekg9oyx8nojvcl.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. Click “**CREATE DEVICE**” then generate the application key in this page. You can write it by yourself or generate it automatically by clicking the following icon and press “**SET DEVICE-KEYS**”.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/b7nijxtl27bnr6mtgn6u.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Set the **Device EUI** for the RAK4600 Evaluation Board using the "**dev_eui**" same with the image below:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/vlakwnyaoitygjhhn0hx.png"
  width="100%"
  caption="Chirpstack OTAA Set Device EUI"
/>

4. Set the **Application Key** for the RAK4600 Evaluation Board using the "**app_key**" same with the image below:
   <rk-img
     src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/gomyqs6fsi4limpvngbp.jpg"
     width="100%"
     caption="Chirpstack OTAA Set Application Key"
   />
::: tip 📝 NOTE:
The Application EUI which will be set into RAK4600 Evaluation Board as “app_eui” is not necessary for ChirpStack, and you can set it to any value with a correct format.
:::

5. Configure RAK4600 Evaluation Board by using the available commands found in the [AT Commands for RAK4600 Evaluation Board](#at-commands-for-rak4600-evaluation-board) section. Connect your RAK4600 Evaluation Board in your Windows Machine.

6. Power it **ON** and open **RAK Serial Port Tool** on your PC as instructed in the [Interfacing with RAK4600](#interfacing-with-rak4600) section.

::: tip 📝 NOTE:
The default join mode is **OTAA**, the default class is **Class A** and the default region is **EU868**.
:::

7. If the **join mode** is not in OTAA, just set the LoRa join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/mrydatc2hlwrxiyjpoqw.jpg"
  width="45%"
  caption="Chirpstack OTAA Join Mode via RAK Serial Port Tool"
/>

8. Set the LoRa class to **Class A**:

```sh
at+set_config-lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/edffrutqfohfxvhz0su8.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Class via RAK Serial Port Tool"
/>

9. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/evudoedib3ovd9ye98gy.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Region/Frequency via RAK Serial Port Tool"
/>

10. Set the **Device EUI**:

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/vsbevdit52xkqq0ocn5n.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Dev EUI via RAK Serial Port Tool"
/>

11. Set the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/yzqpmzjhqj58akm7xqcm.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Application EUI via RAK Serial Port Tool"
/>

12. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/uf6hawlomc92hhp2dlbl.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
After configuring all parameters, you need to reset RAK4600 Evaluation Board to save the parameters.
:::

13. After resetting, start to join:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/kp0hhztd0d1txr0xlsnd.jpg"
  width="45%"
  caption="Chirpstack OTAA Join via RAK Serial Port Tool"
/>

14. You can then see the **JoinRequest** and **JoinAccept** on ChirpStack page:
    <rk-img
      src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/szgnpputwklp26s1epwd.png"
      width="100%"
      caption=" Chirpstack OTAA JoinRequest and JoinAccept"
    />

15. Let’s try to send a data from RAK4600 Evaluation Board to ChirpStack:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/sy4nezodryajjldti9ki.jpg"
  width="45%"
  caption="Chirpstack OTAA Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the message on ChirpStack page:
  <rk-img
    src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/y8olaqg8ywggopiglkdv.png"
    width="100%"
    caption="Chirpstack Data Received Preview"
  />

OK, that’s all about “Join in OTAA Mode” with ChirpStack.


### ABP Mode

1. If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning
Frequency AS923  in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n794vly7saocsviprbbj.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n3ragennimcdzazgxhyp.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

3. Use these parameters to set RAK4600 Evaluation Board by using AT command. Set **LoRa join** mode to **ABP**:
```sh
at+set_config=lora:join_mode:1
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa class to **Class A**:
```sh
at+set_config=lora:class:0
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/kkm5pwzhi44aif78akij.jpg"
  width="45%"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:
```sh
at+set_config=lora:region:EU868
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/hybihb6l6knq8lccnm1h.jpg"
  width="45%"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Too"
/>

6. Set the **Device Address**:
```sh
at+set_config=lora:dev_addr:XXXX
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/tpqvwwbxnmlwzqcfgozy.jpg"
  width="45%"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:
```sh
at+set_config=lora:nwks_key:XXXX
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/gzryq4icdnjuxykqgfhz.jpg"
  width="45%"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:
```sh
at+set_config=lora:apps_key:XXXX
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/czhbmtdl7or1c2d6katt.jpg"
  width="45%"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Too"
/>

::: tip 📝 NOTE:
 After configuring all parameters, you need to reset RAK4600 Evaluation Board for saving parameters!
:::

9. After resetting RAK4600 Evaluation Board, join in ABP mode:
```sh
at+join
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 It is not needed to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode.
:::

10. Now, let’s try to send a data from RAK4600 Evaluation Board to ChirpStack:
```sh
at+send=lora:2:123456789
```
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK4600 Evaluation Board on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/fnw0xofynzzxjxhjuhrv.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

## Miscellaneous

### AT Commands for RAK4600 Evaluation Board
The purpose of this document is to demonstrate on how to configure the RAK4600 Evaluation Board thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| AT Command | Description | 
| ---- | ---- | 
| `at+help` | This AT command can show all available AT commands of this module/product for you. | 
| `at+version` | Get the current firmware version number. | 
| `at+set_config=device:restart` | After set, the device will restart. | 
| `at+run` | Stop boot mode and run as normal. It is valid when the device works in boot mode. | 
| `at+set_config=device:sleep:X` | After setting, the device will go to sleep mode or wake up immediately. <br>• 0 - sleep • 1 - wake up | 
| `at+join` | Start to join LoRa network. | 
| `at+send=lora:X:YYY` | Send a customized data. <br>**• X** - LoRa port <br>**• YYY** - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format. | 
| `at+set_config=lora:work_mode:X` | Set the work mode for LoRa. <br>**• X** - 0: LoRaWAN, 1: LoRaP2P, 2: Test Mode. | 
| `at+set_config=lora:join_mode:X` | Set the join mode for LoRaWAN. <br>**• X** - 0: OTAA, 1: ABP | 
| `at+set_config=lora:class:X` | Set the class for LoRa. <br>**• X** - 0: Class A, 1: Class B, 2: Class C | 
| `at+set_config=lora:region:XXX`| Set the region for LoRa. <br>**• XXX** -one of the following items: EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923. | 
| `at+set_config=lora:confirm:X` | Set the type of messages which will be sent out through LoRa. <br>**• X** - 0: unconfirm, 1: confirm | 
| `at+set_config=lora:dev_eui:XXXX` | Set the device EUI for OTAA. <br>**• XXXX** - the device EUI. | 
| `at+set_config=lora:app_eui:XXXX` | Set the application EUI for OTAA. <br>**• XXXX** - the application EUI. | 
| `at+set_config=lora:app_key:XXXX` | Set the application key for OTAA. <br>**• XXXX** - the application key. | 
| `at+set_config=lora:dev_addr:XXXX `| Set the device address for ABP. <br>**• XXXX** -the device address. | 
| `at+set_config=lora:apps_key:XXXX` | Set the application session key for ABP. <br>**• XXXX** - the application session key | 
| `at+set_config=lora:nwks_key:XXXX` | Set the network session key for ABP. <br>**• XXXX** - the network session key. | 
| `at+set_config=lora:ch_mask:X:Y` | Set a certain channel on or off. <br>**• X** - the channel number, and you can check which channel can be set before you set it. <br>**• Y** - 0: off, 1: on | 
| `at+set_config=lora:adr:X` | Open or close the ADR function of the Node. <br>**• X** - 0: Close ADR; 1: Open ADR. | 
| `at+set_config=lora:dr:X `| Set the DR of the Node. <br>**• X** -the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN 1.0.2 specification. | 
| `at+get_config=lora:status` | It will return all of the current information of LoRa, except LoRa channel. | 
| `at+get_config=lora:channel` | It will return the state of all LoRa channels, then you can see which channel is closed and which channel is open very clearly. | 
| `at+set_config=ble:work_mode:X:Y` | Set the work mode for BLE. <br>**• X** - 0: BLE peripheral mode, 1: BLE central mode, 2: Beacon scan mode <br>**• Y** - 0: normal range, 1: BLE long range More information about BLE Connection Modes [here](#bluetooth-connection-modes)| 


### Bluetooth Connection Modes

There are three BLE modes in RAK4600 from the firmware V3.0.0.6 on, the **Peripheral Mode**, the **Central Mode** and the **Beacon Scan Mode**. You can change the work mode of RAK4600’s BLE using this command provided below which is defined [here](#at-commands-for-rak4600-lpwan-evaluation-board)

```sh
at+set_config=ble:work_mode:X:Y
```
**Description:** Set the work mode for BLE.
- **X** - 0: BLE peripheral mode, 1: BLE central mode. 2: Beacon scan mode.
- **Y** - 0: normal range, 1: BLE long range.

#### BLE Peripheral Mode

For the Peripheral Mode, you can scan RAK4600’s BLE and connect with it using your mobile device.

#### BLE Central Mode

For the Central Mode, RAK4600’s BLE will not broadcast so that your mobile devices will not be able to scan it.  This is very useful if you want to make the RAK4600 act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 Devices) can send sensor data.

#### Beacon Scan Mode

For the Beacon Scan mode, RAK4600 can scan around the Beacon signal, it is useful for Beacon use case like iBeacon.

#### RAK4600 BLE Default Settings

By default, the RAK4600 Evaluation Board will work on **Peripheral Mode.** In this mode users can configure it through BLE including DFU easily. It should be noted that after resetting the RAK4600, the user has only 60 seconds to establish a connection with your Mobile Device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the RAK4600's BLE signal will not be broadcasted and it will enter power saving mode. On the other hand, there is no limitation once you are already connected with the RAK4600's BLE.

If you set the RAK4600 to work in Central Mode, the RAK4600 will work first on Peripheral Mode for 30 seconds and if no connection is established after 30 seconds, it will automatically work in **Central Mode.** In this mode,the BLE signal of the RAK4600 will stop broadcasting and will not be visible on your mobile devices up until you change the work mode to peripheral mode or reset the RAK4600 again.


### Burning the Firmware

If you want to get a pre-compiled firmware instead of compiling the source code by yourself, and flash it into RAK4600 through J-Link with the RAKDAP1 DAPlink adapter, you can find the latest firmware on RAK website after it is released **[here](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/)**.

#### Installing Environment

##### 1. Install Python3    
Because pyocd needs the Python environment, we must install Python3. We can download the Python3 package from Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/) and install it using the default configuration. After installing successfully, we can check the version as follow:    

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/py_ver_check.png"
  width="50%"
  caption="Check Python version"
/>     
:::tip 📝 NOTE
If the Python version is above 3.4, pip is automatically installed. But if not, we should install pip3 manually. 
:::

##### 2. Install pyocd using pip    
Use the following command to install pyocd:     
```
pip3 install pyocd
```
After installation, check the version of pyocd as follow:    

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/pyocd_ver_check.png"
  width="30%"
  caption="Check pyocd version"
/>    

##### 3. Install the support package for the MCU
After installing pyocd successfully we need to install the support package for the MCU. The command format is:
```
pyocd pack --install <MCU model>
``` 
The MCU models for this board is nrf52. So the correct command is    
```
pyocd pack --install nrf52
``` 
The support packages are MDK packages. You can see a complete list at [https://www.keil.com/dd2/Pack/](https://www.keil.com/dd2/Pack/)

### Flash the firmware using DAPLink and RAKDAP

#### 1. Connect the board to RAKDAP

Connect the 4 debug/programming SWD pins of the board to the RAKDAP adapter (| **VCC** | **GND** | **SWIO** | **SWCLK** |)

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rak4600-connection.png"
  width="60%"
  caption="DAPLink to RAK4600 Connection"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rak4600-evb-pin.png"
  width="60%"
  caption="DAPLink to RAK4600 Connection"
/>

To flash the `RAK4600_V3.0.0.8.hex` the command is    
```
pyocd flash -target nrf52 RAK4600_V3.0.0.8.hex
```   

Depending on the size of the file, the flashing can take several minutes. The success or failure of the flashing will be shown in the command line:   
<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/pyocd_flash_log.png"
  width="75%"
  caption="PYOCD flash log"
/>  

<!-- 
#### Installing J-Flash

- Go to the Official Website of **Segger** where you can Download the J-Flash software: [https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/chigugx8lnw5xc1xi3bv.jpg"
  width="100%"
  caption="Segger Official Website"
/>

- Download the software that corresponds to your Operating System, in this guide we will be using Windows OS.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/rr1yopbrhjw2xmpmiwue.jpg"
  width="100%"
  caption="J-link Software in different platforms"
/>

- After you have downloaded the corresponding software for your machine, install it and wait for a couple of minutes.

#### Creating Project in J-Flash
- Upon opening the software, you will be greeted with the following window. Choose Create a new project. Then Click Start J-Flash.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/zaeihbaoq4cbnf4dt2zd.jpg"
  width="100%"
  caption="J-flash Interface"
/>

- You will be then prompt to configure your new Project. Select the Target Device by clicking the box labeled red below:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/djbvyzwlbgn1j2mrif96.jpg"
  width="100%"
  caption="Configuring the Project"
/>

- Select the Manufacturer to **Nordic Semi** and Select the Device **nRF52832_XXAA.**

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/fzxezoootvevolfb4igi.png"
  width="100%"
  caption="Selecting the Device"
/>

- Select the Target Interface to be **SWD** and the Speed (kHz) to be **4000** and Press OK.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/fzxezoootvevolfb4igi.png"
  width="100%"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/r54lhlakju7kxoytqmsx.png"
  width="100%"
  caption="Project Created Successfully"
/>


#### Connecting the RAK4600 Evaluation Board with JTAG

- Connect the RAK4600 Evaluation Board with your J-Link in your PC through JTAG (refer to the Figure Below)

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/iouectenf1oll8kwx76z.png"
  width="75%"
  caption="RAK4600 to Windows PC connection thru JTAG"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/ynx1rtolamjddsqrhzft.png"
  width="55%"
  caption="RAK4600 to Windows PC connection thru JTAG"
/>

- In the J-Flash software Menu Bar, Choose Target -> Connect

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/grfidkobx8jqno7d4grc.png"
  width="100%"
  caption="Connect to the RAK4600"
/>

- If everything works properly, it will prompt "Connected Successfully" indicating that you have successfully connected the RAK4600 with J-Link.
- Now, choose the demo firmware (.hex) that you have downloaded and extracted.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/afc3lsreloedocidbfjy.png"
  width="100%"
  caption=" Choosing the Firmware"
/>


- After you choose the firmware, select **Target -> Production Programming**  or Press F7 to start the flashing process and wait for a couple of minutes.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/6.device-firmware-setup/zqmxlrkxu4f3siwxn6pd.png"
  width="100%"
  caption="Burning the Firmware"
/> -->

### Upgrading Firmware through DFU using BLE
1. Download the DFU package of the RAK4600 Evaluation Board [**here**](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/DFU-Package/RAK4600_V3.0.0.7_dfu.zip) and save it on your mobile phone.

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="45%"
   caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click "**Nordic UART Service**"

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about Bluetooth Connection Guide can be found here in [here](#bluetooth-connection-modes)
:::

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="85%"
  caption="Secure DFU Service in the Nordic App"
/>


4. Choose “**Secure DFU Service**” and click the button highlighted in red.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="85%"
  caption="Buttonless DFU"
/>

5. Now, click the **red box button** in the image shown below and press "**Send**" in the **Write Value** pop-up window.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="85%"
  caption="Resetting the Bootloader via Bluetooth"
/>

6. Great! Now the RAK4600 is now working in DFU Mode. In the application, you will see the following:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/qmi89z3vqxvukvbiodnc.jpg"
  width="45%"
  caption="RAK4600 Default Status Overview after Resetting"
/>

7.  In the list of devices, find a BLE signal named "**DfuTarg**" and Connect.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="45%"
  caption="RAK4600 Default Bluetooth ID after Resetting"
/>

9. After connecting, select the DFU Icon. Select the **Distribution packet (ZIP)** and press OK. This will then prompt you to select the zip file of the firmware that you have downloaded.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="90%"
  caption="Distribution Packet File Type under DFU"
/>

10. It will then automatically start to upgrade the firmware of your RAK4600 through DFU over BLE. After upgrading, it will restart and the DFU Connection will be disconnected. Now you can use your RAK4600 with the latest firmware!

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/nzilnqodbz6x33uvnpp4.jpg"
  width="45%"
  caption="DFU Upgrading of RAK4600 Firmwave via BLE"
/>


