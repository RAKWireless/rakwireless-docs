---
prev: ../Overview/
next: ../AT-Command-Manual/
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
2. Micro USB cable
3. LoRA Gateway in Range for testing (not provided)
4. RAKDAP1 DapLink tool (not provided)
5. Windows PC

:::tip 📝 NOTE
This device released by RAKWireless is already pre-loaded with its latest firmware upon manufacture. If you want to have your device's firmware burned or upgraded, please refer to the links below:

1. [Device Firmware Setup](#burning-the-firmware)
2. [Device Firmware Upgrading](#upgrading-firmware-through-dfu-using-ble)
3. [Open Source Framework Development](#open-source-framework)
   :::

### What's Included in the Package?

- 1pc - RAK4600 Evaluation Board
- 1pc - Micro USB cable
- 1pc - LoRa Antenna (iPEX)
- 1pc - BLE Antenna (iPEX)
- 2pcs - 4-pin Header (not soldered)
- 9pcs - Dupont Lines


## Interfacing with RAK4600

In order to interface with the Evaluation Board, using a Windows PC, you need to install the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/).**

:::warning ⚠️ WARNING
Before powering the RAK4600 Evaluation Board , you should install the LoRa and BLE Antenna first. Not doing so might damage the board.
:::

<br>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/u9lgszijijydbyjkgwnx.png"
  width="55%"
  caption="LoRa and BLE Antennas"
/>

- Connect your RAK4600 Evaluation Board to your Windows PC using the provided micro USB cable.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rzolxz9ojiyg0lkqpkqz.png"
  width="55%"
  caption="RAK4600 Evaluation Board to Windows PC Connection"
/>

- Open the RAK Serial Port Tool :

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rak_serial_tool.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

- In order to choose the correct COM Port number for your device you need to open your Device Manager by pressing : Windows + R and typing `devmgmt.msc` or search in the Start Menu

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/dev_manager.png"
  width="100%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and find the name **USB-SERIAL CH340** . Take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have installed the the [CH340 Drivers](https://downloads.rakwireless.com/LoRa/RAK811/Tools/CH340%20Drive.rar) on your Windows PC.
:::

- Choose the Correct Port Number and Baud Rate from the device manager then click Open:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/baud.png"
  width="90%"
  caption="Correct Port Number and Baud rate"
/>

### Checking Device Logs

1. Open the RAK Serial Port Tool

2. Press the reset button on the RAK4600 Evaluation Board then you will see the following contents in the Serial Port Tool.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/rak4600_log.png"
  width="45%"
  caption="Log Checking through UART"
/>

:::tip 📝 NOTE
You still have to connect the micro usb cable to the RAK4600 Evaluation Board to power the board.
:::

## Configuring RAK4600

You can configure your RAK4600 Evaluation Board by sending AT Commands either through BLE or through micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK4600, please refer to the [AT Command Manual](../../AT-Command-Manual/).
:::

### Through Micro USB

1. As mentioned in [Checking Device Logs](#checking-device-logs), if you want to use RAK4600 Evaluation Board through UART, you should connect the RAK4600 to Windows PC as shown in the image below:


<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rzolxz9ojiyg0lkqpkqz.png"
  width="55%"
  caption="RAK4600 Evaluation Board to Windows PC Connection"
/>

2. Try to send a simple AT command to RAK4600 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK4600 in the same way.

```sh
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/at_version.png"
  width="45%"
  caption="AT command for Firmware Version"
/>

### Through BLE

1. In order to configure the RAK4600 through BLE, download and install **nRF Connect for Mobile**. This tool is developed by Nordic Semiconductor and is available on the App Store and Google Play Store.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/eponlb3piu1p6noof1np.png"
  width="85%"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and scan for BLE devices. You will see all BLE devices in range in the scan list:

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
By default, the BLE signal of the RAK4600 is turned off automatically if no connection is established after 60 seconds. Connect to RAK4600 over BLE immediately after pressing the reset button.
:::

4. Click on the arrow which is marked by the red box in the picture below, you will see the following page:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/r7j95cqwrevod7qtvcsv.jpg"
  width="45%"
  caption="RX Characteristic in the Nordic UART Service"
/>

5. You can now send AT commands to the RAK4600.

- For example, if you want to check the current firmware’s version send the following command:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/jficmu58afzs3r1hkw5h.jpg"
  width="85%"
  caption="Sending AT Command via Nordic App"
/>


6. Check the AT command response on Nordic UART Service Tx Characteristic

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-at-version-response.png"
  width="45%"
  caption="AT response over BLE"
/>

## Open Source Framework

Before using RAK4600 on Arduino IDE you need to flash a new bootloader using RAKDAP1 Tool and pyOCD.

1. Install pyOCD.
<!--
Please refer to [RAKDAP1 Flash and Debug Tool](../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool).
-->

Please refer to <a href="../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool" target="_blank">RAKDAP1 Flash and Debug Tool</a>

2. Check pyOCD installation

```sh
pyocd list
```
3. Clone RAK repository

```sh
git clone https://github.com/RAKWireless/RAK4600_Arduino
```

4. Flash bootloader

```sh
cd RAK4600_Arduino
pyocd flash -t nrf52 feather_nrf52832_bootloader.hex
```

5. Install BSP support for Arduino as described on section BSP Installation

https://github.com/RAKWireless/RAK4600_Arduino#bsp-installation

:::tip 📝 NOTE:
Before upload any Arduino example make sure that the RAK4600 is on DFU mode. 
1. Connect the RX pin of RAK4600 to GND.
2. Press the reset button and then disconnect RX pin from GND. Now the RAK4600 is on DFU mode.
:::

## Connecting to The Things Network (TTN)

Please refer to <a href="../../../../../Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-to-the-things-network-ttn" target="_blank">Connecting to The Things Network (TTN)</a>

<!--
Please refer to [Connecting to The Things Network (TTN)](/Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-to-the-things-network-ttn)


The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4600 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the console which can be found here:

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

Before RAK4600 can communicate via The Things Network you need to register it with an application.

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

- Click on the "**add application**" link

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/eixjrjjdmpc4bstoyleu.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - This will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - This is a short and concise human readable description of your application.
3. **Application EUI** - This will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - Handler you want to register this application to.

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

1. **Device ID** - This is the unique identifier for your RAK4600 in your application. You need to enter this manually.
2. **Device EUI** - This is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/7.connecting-to-ttn/uvhfpgf50yodwdl9dxp7.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use, proceed to either the [OTAA Mode](#otaa-mode) or [ABP mode](#abp-mode) section.

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
-->
## Connecting with Chirpstack

Please refer to <a href="../../../../../Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-with-chirpstack" target="_blank">Connecting with ChirpStack</a>


<!--
Please refer to [Connecting with ChirpStack](/Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-with-chirpstack/)

 
The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

:::tip 📝 NOTE:
In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway.
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

5. Configure RAK4600 Evaluation Board by using the available commands found in the [AT Commands for RAK4600 Evaluation Board](../AT-Command-Manual/) section. Connect your RAK4600 Evaluation Board in your Windows Machine.

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
-->

## Miscellaneous

### Bluetooth Connection Modes

There are three BLE modes in RAK4600 from the firmware V3.0.0.6 on, the **Peripheral Mode**, the **Central Mode** and the **Beacon Scan Mode**. You can change the work mode of RAK4600’s BLE using the commands provided below which is defined [here](../../RAK4600-Module/AT-Command-Manual/)

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

If you want to get a pre-compiled firmware instead of compiling the source code by yourself, you can find the latest firmware on RAK website after it is released **[here](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/)**.


#### Flash the firmware using DAPLink and RAKDAP

Please refer to <a href="../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool/" target="_blank">RAKDAP1 Flash and Debug Tool</a>

### Upgrading Firmware through DFU using BLE

1. Download the DFU package of the RAK4600 Evaluation Board [**here**](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/History-Release-Version/DFU-Package/) and save it on your mobile phone.

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 and wait for a couple of seconds. Look for a BLE Device named "RUI-..." in the scan list of the app. Connect to this device and click on "**Secure DFU Service**"

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about Bluetooth Connection Guide can be found here in [here](#bluetooth-connection-modes)
:::

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="85%"
  caption="Secure DFU Service in the Nordic App"
/>

4. On “**Secure DFU Service**” click on the button highlighted in red.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="85%"
  caption="Buttonless DFU"
/>

5. Now, click on the **red box button** as shown below and press "**Send**" in the **Write Value** pop-up window.

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

7.  In the device list, find a BLE device named "**DfuTarg**" and then click on Connect.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="45%"
  caption="RAK4600 Default Bluetooth ID after Resetting"
/>

8. After connected, select the DFU Icon. On Select file type choose **Distribution packet (ZIP)** and press OK. This will then prompt you to select the zip file of the firmware that you have downloaded.

9. The DFU application automatically start to upgrade the firmware of your RAK4600 through DFU over BLE. After upgrading, the application restart the RAK4600 and the DFU mode is disabled. Now you can use the RAK4600 with the latest firmware!

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="90%"
  caption="Distribution Packet File Type under DFU"
/>

9. The DFU application automatically start to upgrade the firmware of your RAK4600 through DFU over BLE. After upgrading, the application restart the RAK4600 and the DFU mode is disabled. Now you can use the RAK4600 with the latest firmware!

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/nzilnqodbz6x33uvnpp4.jpg"
  width="45%"
  caption="DFU Upgrading of RAK4600 Firmware via BLE"
/>




