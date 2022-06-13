---
rak_img: /assets/images/wisnode/rak7204/quickstart/1.overview/RAK7204_home.png
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7204 WisNode Sense Home. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7204
  - wisnode
  - quickstart
---

# RAK7204 Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/2.quick-start-guide/s9kfxgy3q8qiuydxxkrk.jpg"
  width="40%"
  caption="RAK7204 WisNode Sense Home Front View"
/>
-->

### What do you need?
Before going through each and every step in the installation guide of the RAK7204 WisNode Sense Home, make sure to prepare the necessary items listed below:

1. **RAK7204 WisNode Sense Home**
2. Micro USB Cable
3. Gateway in Range, for Testing
4. Windows PC

:::tip 📝 NOTE:
 This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware and bootloader burned, please refer to the sections below:
1. [Burning the Bootloader](/Product-Categories/WisNode/RAK7204/Quickstart/#burning-the-bootloader)
2. [Burning the Firmware](/Product-Categories/WisNode/RAK7204/Quickstart/#burning-the-firmware)
:::

### What's Included in the Package?

- 1pc - RAK7204 WisNode Sense Home
- 1pc - LoRa Antenna
- 1pc - 3500mAh Lithium Battery

## Product Configuration

### Interfacing with the RAK7204 WisNode Sense Home

In order for you to be able to interface with the RAK7204 WisNode Sense Home with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

:::warning ⚠️ WARNING
The included battery is **non rechargeable**. Please do note that when configuring the device, you have to connect the battery first in order for it to work.
:::

- Connect your RAK7204 WisNode Sense Home in your Windows Machine using the provided micro-usb cable.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/rak7204-pc.svg"
  width="70%"
  caption="RAK7204 WisNode Sense Home to Laptop Connection"
/>

:::warning ⚠️ WARNING
The pin distance of the battery connector is **2.0mm**. Reverse connection or short circuit may damage the device and may cause overheating and combustion of the battery. Therefore, when replacing the battery, it is necessary to strictly confirm whether the positive and negative poles of the connector are correct.
:::

- Open the RAK Serial Port Tool :

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/oju7ucgriixkmghcaqxy.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/xjttdlmkzfsh5pg8vwcg.png"
  width="75%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name Silicon Labs CP210x USB to UART Bridge and take note of the COM Port Number.

:::tip 📝 NOTE:
If you didn't find any Port with the name Silicon Labs CP210x USB to UART Bridge, make sure you have downloaded the CP210x USB Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/nujplxpattmmleoaaghm.png"
  width="90%"
  caption="Correct Port Number and Correct Baud rate"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/w90quzm2ah5civgeojbx.png"
  width="90%"
  caption="Connection Success"
/>

### Connecting to Helium (The People's Network) 

Helium has quickly become the most widespread LPWAN communal network with more than 27,000 devices deployed globally. All our node products are compatible with it and the process of adding a device to the network is intuitive and straightforward. This section will focus on giving a brief guide on how to connect the RAK7204 to the network console, assuming that there is a Helium Hotspot within range.

Log in or create your account [here](https://www.helium.com/console):

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/1.png"
  width="70%"
  caption="Helium Console"
/>

Once registered/logged in you will end up at the home page where you can see your function tree on the left and your DC balance at the tops as well as a number of useful links.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/home.png"
  width="80%"
  caption="Helium Console home screen"
/>

Go to the "Devices" section in the function tree. If this is your first time doing this there will be no devices registered. Click the "+ Add Device" button to get started


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/no_dev.png"
  width="80%"
  caption="Helium Devices"
/>

A window will pop up with a set of field containing the device parameters required for its registration (Figure 9):


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/red_device.png"
  width="60%"
  caption="Add a New Device"
/>

Fill a name of your choosing. The Dev EUI, App EUI and App Key (press the eye icon to reveal the values) will have random values generated for you by default. You can manually replace them with values of your own. For the purpose of this tutorial we will stay with the default. Press the "Submit" button and you are done.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/reged_device.png"
  width="80%"
  caption="Helium Devices"
/>

Now your RAK7204 is registered and is awaiting activation. For this to happen we need to import the Dev EUI, App EUI and App Key in the RAK7204 using the RAK Serial Port Tool

Open the tool, select the desired port (default baud rate) and open it. Then start importing your settings.

Configure your LoRa band and activation mode. This tutorial will be using the EU868 band and OTAA (only option available for now with Helium) with device class A (default one, does not need configuring).

- Regional band and activation mode setting

```
at+set_config=lora:join_mode:0
```

```
at+set_config=lora:region:EU868
```


- Enter the Dev UI

Use the command below by replacing the XXXX with your Device EUI from the Helium console:

```
at+set_config=lora:dev_eui:XXXX
```

- Enter the App EUI

Same as with the Device EUI, replace the XXXX with your value:

```
at+set_config=lora:app_eui:XXXX
```

- Enter App Key

Finally fill in the App key with the command:

```
at++set_config=lora:app_key:XXXX
```

- Join Network

Finish executing the join command in order for the node to initiate the join procedure.

Once the procedure is initiated and successfully complete you will have a notification in the serial console

```
at+join
```

You output should resemble the one in Figure 11:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/join.png"
  width="70%"
  caption="RAK7204 EUIs and key"
/>


If you take a look at the Helium console you will also see the join request packets both in the graph and event log. Your node is now a part of the Helium Network.
<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/connecting-to-helium/joined.png"
  width="100%"
  caption="Helium console live device data"
/>

### Configuring the Built-in Server

The procedure for connecting the RAK7204 to the Built-in Server is straightforward and includes going through the following steps:

1. Open a browser and access the Web UI of your WisGate Edge Gateway by entering its IP address in the browser address bar. You will be greeted by the Log in screen. The default user name/password are both **"root".**

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/1.png"
  width="100%"
  caption="Built-in Server Log in screen"
/>

Once you have logged in make sure you are in Network Server mode. By default the gateway is working in this mode, so if this is the first time you are configuring it it should already be set. If this is nit the case go to the Network Server menu, the Network Settings sub menu and select the Network Server option in the Mode drop-down menu:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/2.png"
  width="100%"
  caption="Network Server mode"
/>


2. Start the Device registration process by going to the Application sub menu in the LoRa Network section and creating an application. Enter a name in the field, leave the default type and press "Save & Apply"

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/3.png"
  width="100%"
  caption="Creating your application"
/>

In the following screen you will see fields for the application parameters.

In the Application Configuration sub-window enable the "Auto Add LoRa Device" functionality. Generate a random Application EUI and Application Key via the green arrow button next to the text fields. Note these down as you will need them for the RAK7204 configuration.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/4.png"
  width="100%"
  caption="Application configuration"
/>

Move to the Payload Formats sub-window and set the payload format to "CayenneLPP" via the drop down menu. This is the format that the RAK7204 uses, thus enabling this functionality will allow you to see the parsed data in the Application Server. Finally enable the "Only forward the parsed data object" functionality, press the "Save & Apply" button to finalize the configuration changes.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/5.png"
  width="100%"
  caption="Payload Format"
/>

3. Now that your application has been created you need to go to the device section by pressing the "Edit " button.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/6.png"
  width="100%"
  caption="Editing an application"
/>

Now you are in the "Devices" section and you can add a device by entering its Device EUI, which you can find on a sticker on the back of the RAK7204. Press the "Add" button to proceed.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/7.png"
  width="100%"
  caption="Adding a device"
/>

In the configuration screen enter a name for your device and leave the rest of the parameters with their default values (the Description is optional). Finish by pressing the "Save & Apply" button.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/8.png"
  width="100%"
  caption="Device parameters"
/>

Your Device is now added to the Built-in server and you should see it in the "Devices" section.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/9.png"
  width="100%"
  caption="Devices section"
/>

Next you need to import the same configuration in the RAK7204.

#### Configuring the RAK7204

Start by connecting to your RAK7204 as described in the [Product Configuration section of the Quick Start Guide.](#interfacing-with-the-rak7204-wisnode-sense-home)

Open a terminal and check your firmware version using the command:

```
at+version
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/10.png"
  width="70%"
  caption="Firmware version"
/>

If there is a newer firmware version at the [link](https://docs.rakwireless.com/Product-Categories/WisNode/RAK7204/Datasheet/#software), update using this [procedure](#burning-the-firmware).

Follow the steps in order to update the RAK7204 configuration and connect it to the Built-in Server

1. Import the **Device EUI** (from the label on the back), **Application EUI** and **Application Key** (you should have noted them down as instructed in the previous section), by executing the following commands in order (replace the "xxxx" with your values).

**Device EUI**

```
at+set_config=lora:dev_eui:xxxx
```

**Application EUI**

```
at+set_config=lora:app_eui:xxxx
```

**Application Key**

```
at+set_config=lora:app_key:xxxx
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/11.png"
  width="70%"
  caption="Importing EUIs and Key"
/>

2. Set the activation parameters (**LoRa Region**, **Device Class**, **Activation Mode**). This example will use the **EU868** regional band, **class A**, **OTAA** activation mode.

**LoRa Region**

```
at+set_config=lora:region:EU868
```

**Device Class**

```
at+set_config=lora:class:0
```

**Activation Mode**

```
at+set_config=lora:join_mode:0
```

After executing the last command the node will automatically start the join procedure. If for some reason this is not the case, you can always use the command below to start the activation process:

```
at+join
```


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/12.png"
  width="70%"
  caption="Activation parameters"
/>

Upon successful registration the following response will be shown in the Serial Tool.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/13.png"
  width="70%"
  caption="Successful Device Join"
/>

If you check the Devices Section and the Live Device Data in the Devices section you should see the device being online for some time and also some packets, in this case the Join request and an uplink packet where the data is visible in a human readable format (as we chose the Cayenne payload format)

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/14.png"
  width="100%"
  caption="Device up-time"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/built-in-server/15.png"
  width="100%"
  caption="Device real time packets"
/>

Your RAK7204 is now connected to the Built-in server and transmitting data over regular intervals.

<!-- Outdated

### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK7204 WisNode Sense Home to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/szwxvka0wyqg5ybjrffb.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/jf9flba2uoyc3wt2k9lw.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/eixjrjjdmpc4bstoyleu.png"
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
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/nyiksw5ezoobdkqaifft.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/m0diwppr3c6uq2fzcmnb.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK7204 WisNode Sense Home in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/uvhfpgf50yodwdl9dxp7.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the [OTAA Mode](/Product-Categories/WisNode/RAK7204/Quickstart/#otaa-mode) or [ABP mode](/Product-Categories/WisNode/RAK7204/Quickstart/#abp-mode) section.

#### OTAA Mode

When setting up a new device in TTN it defaults to OTAA mode. For configuring it you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/pyqpw2ihstlgeqv68pbs.png"
  width="100%"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK7204 WisNode Sense Home to work in OTAA mode in the EU868 band, as an example.

:::tip 📝 NOTE:
The default LoRa working mode for the RAK7204 WisNode Sense Home is LoRaWAN 1.0.2, while the default LoRa join mode is OTAA, and the default LoRa class is Class A.
:::

1. Set mode to **OTAA**, device class to **Class A** and your LoRaWAN region to your correct frequency band, with the following set of commands below. Remember to replace **XXX** with the your LoRaWAN region, check [here](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for your frequency plan.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config=lora:class:0
```

```sh
at+set_config=lora:region:XXX
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/okwyucipaed3fnrarkso.png"
  width="90%"
  caption="Setting up the RAK7204 WisNode Sense Home operation mode"
/>

2. Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```sh
at+set_config=lora:dev_eui:XXXX
```

```sh
at+set_config=lora:app_eui:XXXX
```

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/jttmbmkhm0ac0duvap94.png"
  width="90%"
  caption="Setting up the RAK7204 WisNode Sense Home OTAA parameters"
/>

- You should end up with a window as the one in the figure above with **a series of OK messages**.

3. Finally, execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/eevf8jgjt1p48i17vugw.png"
  width="90%"
  caption="Join Command"
/>

4. You can test the connection by sending an uplink frame. Use the following for example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/tsyls5mfkzctes7lh1jg.png"
  width="90%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in the figure below, than you are all set!

:::tip 📝 NOTE:
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network account would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/otaa/tj6whmvvp8hwldemo31b.png"
  width="100%"
  caption="Sending Data to TTN from RAK7204 WisNode Sense Home"
/>

#### ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.
2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/bs9ladvinybe4v0fqowm.png"
  width="100%"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in the figure below.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/ytbwh3dd3u6ul6mw174p.png"
  width="100%"
  caption="ABP parameters screen"
/>

4. Now we need to update the RAK7204 WisNode Sense Home configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```sh
at+set_config=lora:region:EU868
```

- As you can see in the figure below, as we were in the same region (EU868), there was no change.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/gkaye44gsjjuxhtptjmv.png"
  width="90%"
  caption="Region setup"
/>

5. Change the mode to **ABP** with the command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/xxgmfyq9dkgzu7hcfq4g.png"
  width="90%"
  caption="Join mode setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case (Figure 31 for reference of the parameters):

```sh
at+set_config=lora:dev_addr:XXXX
```

```sh
at+set_config=lora:nwks_key:XXXX
```

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/yjupd0dh7ytr1rzqe118.png"
  width="90%"
  caption="Setting up the RAK7204 WisNode Sense Home ABP parameters"
/>

You should end up with a window as the one in the figure above with **a series of OK messages**.

7. Finally, execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/y81mijqfbzfvhxlvt8qm.png"
  width="90%"
  caption="Join command"
/>

8. You can test the connection by sending an uplink frame. Use the following as an example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/tfs0ngbmzluoex9gl3kn.png"
  width="90%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in the figure below, then you are all set!

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/abp/uos1gg9ucwza8nmlt3v6.png"
  width="100%"
  caption="Sending Data to TTN from RAK7204 WisNode Sense Home"
/>

 -->

### Connecting to The Things Network V3 (TTNv3)

At The Things Conference 2021, it was announced that The Things Network is upgrading to The Things Stack v3. 

In this section, it will be shown how to connect RAK7204 WisNode Sense Home to The Things Stack. 

First, log in to the TTNv3. To do so, head to the TTNv3 [site](https://eu1.cloud.thethings.network/console). If you already have a TTN account, you can use your The Things ID credentials to log in.


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image001.png"
  width="100%"
  caption="The Things Stack Home Page"
/>


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image002.png"
  width="100%"
  caption="Console Page after successful login"
/>


:::tip 📝 NOTE:
- To connect RAK7204 WisNode Sense Home to TTNv3, you should already have connected a gateway in range to TTNv2 or TTNv3, or you have to be sure that you are in the range of a public gateway. 

- This tutorial is for EU868 Frequency band.
:::

#### Adding an Application

1. If you do not have created applications yet, to create an application, choose **Create an application**. If you have created applications before, navigate through **Go to applications** > **+ Add application**.


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image003.png"
  width="100%"
  caption="Create an application page"
/>

2. Fill in the needed information:

   - **Owner** - Automatically filled by The Things Stack, based on your account or created organization.

   - **Application ID** - This will be the unique ID of your application in the Network. ID must contain only lowercase letters, numbers, and dashes (-).

   - **Application name** (optional) - This is the name of your application. 

   - **Description** (optional) – Description of your application. Optional application description; can also be used to save notes about the application.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image004.png"
  width="100%"
  caption="Application Overview"
/>


#### OTAA Mode

##### Register the Device

1. From the Application Overview page, click on **+ Add end device**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image005.png"
  width="100%"
  caption="Adding a device in OTAA mode"
/>


2. Below the **Register end device** heading, you can find two options for registering a device. Choose **Manually**.
    - For Activation mode, choose **Over the air activation (OTAA)**
    - For the LoRaWAN version, choose **MAC V1.0.2** (RAK7204 is LoRaWAN 1.0.2 fully compliant). 

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image006.png"
  width="100%"
  caption="Registering the device in OTAA mode"
/>


3. To get to the next step of the registration, click **Start**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image007.png"
  width="100%"
  caption="Basic settings for OTAA mode"
/>

4. Fill in the Basic settings for the device:

   - **End device ID** - This is the unique identifier for your RAK7204 WisNode Sense Home in your application. You need to enter this manually. The End device ID must contain only lowercase letters, numbers, and dashes (-).

   - **AppEUI** - The AppEUI uniquely identifies the owner of the end device. It is provided by the device manufacturer. To get the AppEUI, connect your device via USB cable to your computer. Open RAK Serial Port Tool, choose the correct COM port and BaudRate, and run the following command:

    ```
    at+get_config=lora:status
    ```

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image007a.png"
      width="90%"
      caption="AppEUI of the device"
    />


   - **DevEUI** - The unique identifier for this end device. It can be found on a sticker on the back of the device.
   - **End device name** (optional) - A unique, human-readable identifier for your device. You make it up, so be creative. Device IDs cannot be used by multiple devices within the same application.
   - **End device description** (optional) - Optional end device description; can also be used to save notes about the end device.

5. Click **Network layer setting**.

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image008.png"
      width="100%"
      caption="Network layer setting for OTAA mode"
    />

6. Here you must configure the Network layer settings for the device:

- **Frequency plan -** The frequency plan used by the end device. Note that, for this tutorial, the frequency plan used is Europe 863-870&nbsp;MHz (SF9 for RX2 – recommended).

- **Regional Parameters version** - The Regional Parameters specify frequency, dwell time, and other communication settings for different geographical areas. The Regional Parameters version is the version of the LoRa Alliance specification which your device supports. This should be provided by the device manufacturer in a datasheet. For this example, **PHY V1.0.2 REV B** is chosen.

- **LoRaWAN class capabilities** – Here you can select if your device supports Class B, Class C, or both. 

7. In **Advanced settings**, you can configure additional settings for your device. 

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image009.png"
      width="100%"
      caption="Advanced network layer settings of the device"
    />

:::tip 📝 NOTE:

For this example, these settings will be left as default.

:::


8. Click **Join settings**.

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image010.png"
      width="100%"
      caption="Join settings for OTAA mode"
    />

9. Fill in the **Application key** (AppKey) to secure communication between the end device and the application. The AppKey can be generated automatically by clicking the **Generate** button next to the **AppKey** field.

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image011.png"
      width="100%"
      caption="Generate the AppKey"
    />

10. In the **Advanced settings**, you can configure more options about your device.

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image012.png"
      width="100%"
      caption="Advanced join settings for OTAA mode"
    />

:::tip 📝 NOTE:

For this example, these settings will be left as default.

:::

11. Finally, to finish registering your device, click **Add end device**.


##### Configuring the Device in OTAA Mode


1. For configuring the node, you will need the following three parameters: **Device EUI, Application EUI**, and **Application Key**. You can see them all on the **Device Overview** page. But since the two EUI's come with the device, you only need the Application Key from there.

    <rk-img
      src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image014.png"
      width="100%"
      caption="OTAA device parameters"
    />

2. Using the RAK Serial Port Tool, set the join mode, device class, and your LoRaWAN region to your correct frequency band, with the following set of AT commands:


- For the join mode (OTAA):

```
at+set_config=lora:join_mode:0
```

- For the class (Class A):

```
at+set_config=lora:class:0
```

- For the region: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember to replace the **frequency band** with the one for your LoRaWAN region. Check first your [frequency plan](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html).
:::

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image015.png"
  width="90%"
  caption="Setting up the RAK7204 WisNode Sense Home operation mode"
/>

:::tip 📝 NOTE:
The following tutorial is based on using the EU868 frequency band.
:::

3. Now that those parameters are set, enter the **App Key**, using the command below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case.


```
at+set_config=lora:app_key:XXXX  
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image016.png"
  width="90%"
  caption="Setting up the RAK7204 WisNode Sense Home OTAA parameters"
/>


4. Finally, execute the join command:

```
at+join  
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image017.png"
  width="90%"
  caption="Join command"
/>

If you get a response in the **Live data** feed in The Things Stack, it means your RAK7204 is successfully connected!

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/5.connecting-to-ttn/image019.png"
  width="100%"
  caption="Sending data to The Things Stack from RAK7204 WisNode Sense Home"
/>


### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK7204 WisNode Sense Home to connect with ChirpStack according to the following steps:

:::tip 📝 NOTE:
In this section, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway and [**RAK cloud testing**](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.
2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button, then filling them in.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/wgk31ykcgwp2gbzicmut.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/zcxqc0pe6vquherzw521.png"
  width="100%"
  caption="Creating the Application"
/>

4. Click the new item name “**RAKwireless_Test_Application**”:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/r2ikjxdaluvfxbqhaccc.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/sdrlazcgfseimitslo6u.png"
  width="100%"
  caption="RAKwireless Test Application"
/>

5. Add a Node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/sdrlazcgfseimitslo6u.png"
  width="100%"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/bx0hvot72klwrnznnbig.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

:::tip 📝 NOTE:
If you want to join in OTAA mode, select “DeviceProfile_OTAA” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “DeviceProfile_ABP_CN470” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “DeviceProfile_ABP” in the “Device-profile” item.
:::

#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/qyrvspezqeezlwewbw0t.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/ulkivutt3w112a4yegfs.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK7204 WisNode Sense Home as "dev_eui" is the same in the image highlighted below.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/rrxmljx5q8k8f5t8eejc.png"
  width="100%"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/ulbg6ggoqsntsdmkck25.png"
  width="100%"
  caption="Application Key LoRaWAN"
/>

:::tip 📝 NOTE:
The Application EUI which was into RAK7204 WisNode Sense Home as “app_eui” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK7204 WisNode Sense Home by using **AT commands**. To do this, connect your RAK7204 WisNode Sense Home to a PC, power it on and open **RAK Serial Port Tool** on your computer.

```sh
at+version
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/fqw3e70otnu8ymgnmu79.png"
  width="45%"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK7204 WisNode Sense Home using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa join mode to **OTAA** and LoRa class to **Class A** by typing the AT commands shown in the picture below.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config-lora:class:0
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/mdjpe1uhxdmahhthbt8w.jpg"
  width="90%"
  caption="Setting of LoRaWAN mode and class"
/>

6. Type the following AT command to set the: **Frequency/Region, Device EUI, Application EUI and Application Key.** Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```sh
at+set_config=lora:region:XXXX
```

```sh
at+set_config=lora:dev_eui:XXXX
```

```sh
at+set_config=lora:app_eui:XXXX
```

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/vugtbybavkertynte382.jpg"
  width="90%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/rkeautvpyyd4oquhxvgq.jpg"
  width="90%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/xlebk2u3xe2ryxo5ss11.png"
  width="45%"
  caption="Joining in OTAA"
/>

- **Joined Successfully! :tada:**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/bomjx5d87s8b3dnk7wlc.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK7204 WisNode Sense Home to the ChirpStack by typing the command below in the serial port.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/j7c4lszbgth963mh6kea.png"
  width="45%"
  caption="Sending Data to ChirpStack"
/>

- You can see the message on ChirpStack page:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/otaa/bomjx5d87s8b3dnk7wlc.png"
  width="100%"
  caption="Message Received in ChirpStack"
/>

#### ABP Mode

1. If you select “**Device Profile  ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

:::warning ⚠️ WARNING
 Frequency AS923 in ABP Mode is not supported in ChirpStack
:::

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/ezfbaa2iue5jolxhcn5m.png"
  width="100%"
  caption="Switching to ABP Mode"
/>


2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/z1ox6hvoa4zwe8cpadz5.png"
  width="100%"
  caption="ABP Parameters"
/>

3. Next, let’s use these parameters to set WisNode LoRa by using **AT command**. Let's join in **ABP** mode and set **EU868** frequency as an example.
4. If the join mode is not in ABP, just set the LoRa join mode to **ABP** and LoRa class to **Class A** by typing the following commands in RAK Serial Port Tool

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/z1ox6hvoa4zwe8cpadz5.png"
  width="100%"
  caption="Setting of LoRaWAN Mode and Class"
/>

5. Type the following AT command to set your respective: **Frequency/Region**, **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/lvccenrrczmt4nrtbjya.jpg"
  width="90%"
  caption="Setting of Frequency and Device Address"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/v1mclxe7vemha0yewfyu.jpg"
  width="90%"
  caption="Setting of Device EUI and Network Session Key"
/>

6. Then, **join** in ABP mode.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/pqwlq93vihikp0rgilvi.jpg"
  width="45%"
  caption="Joining of ABP"
/>

- Now, try sending data from our WisNode LoRa to the Chirpstack

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/enenhki5eduvosgktdz8.png"
  width="45%"
  caption="Sending Data to ChirpStack"
/>

- You can see the data which is just sent from RAK7204 WisNode Sense Home on ChirpStack page:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/6.connecting-to-chirpstack/abp/haxxnxf1wv5jlzlytakp.png"
  width="100%"
  caption="Message Status in ChirpStack"
/>

### Decoding Sensor Data on ChirpStack and TTN

#### Analyzing Sensor Data from RAK7204 WisNode Sense Home
In the previous section, we have successfully sent some raw data from our RAK7204 WisNode Sense Home to The Things Network, but the problem is that you can't really see the actual sensor data from the payload. In this section , we will solve that and understand what each payload means.

Let's take this data for example:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/ezfqysepeiwg0ufmxneo.jpg"
  width="80%"
  caption="Received Raw Data in TTN"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/w4zrtlqhhmqewdwntd3d.jpg"
  width="80%"
  caption="Actual Data sent to Cayenne"
/>

For this example, the payload is : **08 02 01 63 07 68 4B 06 73 25 9E 02 67 01 15 04 02 22 72 04 02 22 72**

Now lets analyze each data , which is in Hexadecimal Format. We will be using the data mentioned above as an example. We will convert the Hexadecimal Data into Decimal Data using this [converter](https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=FF) in order to be able to understand it.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/rxvyqkcqn6tqayqijhyi.jpg"
  width="40%"
  caption="Hexadecimal to Decimal converter"
/>

##### 1. Battery Voltage
| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 08 02 |  |  |  | 
| Battery Voltage | 01 67 | 355 | 0.01 Signed | 3.55 V | 

##### 2. Humidity Data

Example Data: **07 68 4B**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 07 68 |  |  |  | 
| Humidity | 4B | 75 | 0.5 % Unsigned | 37.5 % RH | 


##### 3. Pressure Data

Example Data: **06 73 25 9E**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 06 73 |  |  |  | 
| Pressure | 25 9E | 9630 | 0.1 hPa Unsigned MSB | 963.0 hPa | 


##### 4. Temperature Data

Example Data:  **02 67 01 15**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 02 67 |  |  |  | 
| Temperature | 01 15 | 277 | 0.1 °C Signed MSB | 27.7℃ | 


##### 5. Gas Resistance Data

Example Data: **04 02 22 72**

| Parameter | Hex Data | Decimal Equivalent | Multiplier | True Value | 
| ---- | ---- | ---- | ---- | ---- | 
| Data flag | 04 02 |  |  |  | 
| Gas Resistance | 22 72 | 8818 | 0.01 kΩ Signed | 88.18 kΩ | 


For further details about the LPP format, you can take a look at this **[link.](https://developers.mydevices.com/cayenne/docs/lora/#lora-cayenne-low-power-payload-overview)**

#### Decoding Sensor Data in TTN

##### Input Decoding Function in TTN

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_TTN.js)**.

::: details Click me to view the code

```js
// ttn application function to decode uplink data.
// Decode decodes an array of bytes into an object.
//  - port contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
// The function must return an object
// for RAK, return {
//                     "DecodeDataHex": {} // RAK5205 sensor data in Hex format
//                     "DecodeDataObj": {} // RAK5205 sensor data object.
//                 }
// The function prototype cannot be modified.
function Decoder(bytes, port) {
  var decoded = {"DecodeDataHex": {}, "DecodeDataObj": {}};
  var hexString=bin2HexStr(bytes);
  decoded.DecodeDataHex = hexString;
  decoded.DecodeDataObj = rakSensorDataDecode(hexString);

  return decoded;
}

// convert array of bytes to hex string.
// e.g: 0188053797109D5900DC140802017A0768580673256D0267011D040214AF0371FFFFFFDDFC2E
function bin2HexStr(bytesArr) {
  var str = "";
  for(var i=0; i<bytesArr.length; i++) {
    var tmp = (bytesArr[i] & 0xff).toString(16);
    if(tmp.length == 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}

// convert string to short integer
function parseShort(str, base) {
  var n = parseInt(str, base);
  return (n << 16) >> 16;
}

// convert string to triple bytes integer
function parseTriple(str, base) {
  var n = parseInt(str, base);
  return (n << 8) >> 8;
}

// decode Hex sensor string data to object
function rakSensorDataDecode(hexStr) {
  var str = hexStr;
  var myObj = {};
  var environment = {};
  var magnetometer = {};

  while (str.length > 4) {
    var flag = parseInt(str.substring(0, 4), 16);
    switch (flag) {
      case 0x0768:// Humidity
        environment.humidity = ((parseShort(str.substring(4, 6), 16) * 0.01 / 2) * 100).toFixed(1) + '% RH';
        str = str.substring(6);
        break;
      case 0x0673:// Atmospheric pressure
        environment.barometer = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "hPa";
        str = str.substring(8);
        break;
      case 0x0267:// Temperature
        environment.temperature = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "°C";
        str = str.substring(8);
        break;
      case 0x0188:// GPS
        var gps = {};
        gps.latitude = (parseTriple(str.substring(4, 10), 16) * 0.0001).toFixed(4) + "°";
        gps.longitude = (parseTriple(str.substring(10, 16), 16) * 0.0001).toFixed(4) + "°";
        gps.altitude = (parseTriple(str.substring(16, 22), 16) * 0.01).toFixed(1) + "m";
        myObj.gps = gps;
        str = str.substring(22);
        break;
      case 0x0371:// Triaxial acceleration
        var acceleration = {};
        acceleration.x = (parseShort(str.substring(4, 8), 16) * 0.001).toFixed(3) + "g";
        acceleration.y = (parseShort(str.substring(8, 12), 16) * 0.001).toFixed(3) + "g";
        acceleration.z = (parseShort(str.substring(12, 16), 16) * 0.001).toFixed(3) + "g";
        myObj.acceleration = acceleration;
        str = str.substring(16);
        break;
      case 0x0402:// air resistance
        environment.gasResistance = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2)  + "KΩ";
        str = str.substring(8);
        break;
      case 0x0802:// Battery Voltage
        myObj.battery = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "V";
        str = str.substring(8);
        break;
      case 0x0586:// gyroscope
        var gyroscope = {};
        gyroscope.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.y = (parseShort(str.substring(8, 12), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.z = (parseShort(str.substring(12, 16), 16) * 0.01).toFixed(2) + "°/s";
        myObj.gyroscope = gyroscope;
        str = str.substring(16);
        break;
      case 0x0902:// magnetometer x
        magnetometer.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0a02:// magnetometer y
        magnetometer.y = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0b02:// magnetometer z
        magnetometer.z = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      default:
        str = str.substring(7);
        break;
    }
  }
  if(Object.getOwnPropertyNames(environment).length > 0) {
    myObj.environment = environment;
  }
  if(Object.getOwnPropertyNames(magnetometer).length > 0) {
    myObj.magnetometer = magnetometer;
  }

  return myObj;
}
```
:::

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/mj2ln3bm2so2fkpzntxt.png"
  width="100%"
  caption="Github Page for the Decoding Function"
/>

2. From your TTN console, go to application page and click the "**Payload Formats**" tab as shown in the image below.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/qmpbcubp9g1hiqncdsnx.jpg"
  width="80%"
  caption="Payload Format at TTN Application Page"
/>

3. Next, select "**Payload Format**" as "**Custom**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/gk4wflbvc74a8bam946s.jpg"
  width="80%"
  caption="Decoder Function"
/>

##### Testing the Validity of Decoding Sensor Data in TTN

1. Input the data below in the "**Payload**" box as shown in the image below.

**08 02 01 63 07 68 4B 06 73 25 9E 02 67 01 15 04 02 22 72 04 02 22 72**

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/yqoerimlyt5zz2qkbbv8.jpg"
  width="80%"
  caption="Testing Payload Data"
/>

2. Then, click "**Test**" and it will generate a code with the decoded data as shown in the image above.

##### Testing in Real System in TTN

After gateway and node go online, click the uplink data record from the application data tab to check the decode status. From the image below, we can see the data decoded successfully in TTN.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/ao96e3gsctjbrzxvue3a.jpg"
  width="100%"
  caption="Uplink Decoded Data"
/>


#### Decoding Sensor Data in ChirpStack

##### Input Decoding Function in ChirpStack

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_ChirpStack.js)**.

::: details Click me to view the code
```js
// chirpstack application function to decode uplink data.
// Decode decodes an array of bytes into an object.
//  - fPort contains the LoRaWAN fPort number
//  - bytes is an array of bytes, e.g. [225, 230, 255, 0]
// The function must return an object
// for RAK, return {
//                     "DecodeDataHex": {} // RAK5205 sensor data in Hex format
//                     "DecodeDataObj": {} // RAK5205 sensor data object.
//                 }
// The function prototype cannot be modified.
function Decode(fPort, bytes) {
  var decoded = {"DecodeDataHex": {}, "DecodeDataObj": {}};
  var hexString=bin2HexStr(bytes);
  decoded.DecodeDataHex = hexString;
  decoded.DecodeDataObj = rakSensorDataDecode(hexString);

  return decoded;
}

// convert array of bytes to hex string.
// e.g: 0188053797109D5900DC140802017A0768580673256D0267011D040214AF0371FFFFFFDDFC2E
function bin2HexStr(bytesArr) {
  var str = "";
  for(var i=0; i<bytesArr.length; i++) {
    var tmp = (bytesArr[i] & 0xff).toString(16);
    if(tmp.length == 1) {
      tmp = "0" + tmp;
    }
    str += tmp;
  }
  return str;
}

// convert string to short integer
function parseShort(str, base) {
  var n = parseInt(str, base);
  return (n << 16) >> 16;
}

// convert string to triple bytes integer
function parseTriple(str, base) {
  var n = parseInt(str, base);
  return (n << 8) >> 8;
}

// decode Hex sensor string data to object
function rakSensorDataDecode(hexStr) {
  var str = hexStr;
  var myObj = {};
  var environment = {};
  var magnetometer = {};

  while (str.length > 4) {
    var flag = parseInt(str.substring(0, 4), 16);
    switch (flag) {
      case 0x0768:// Humidity
        environment.humidity = ((parseShort(str.substring(4, 6), 16) * 0.01 / 2) * 100).toFixed(1) + '% RH';
        str = str.substring(6);
        break;
      case 0x0673:// Atmospheric pressure
        environment.barometer = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "hPa";
        str = str.substring(8);
        break;
      case 0x0267:// Temperature
        environment.temperature = (parseShort(str.substring(4, 8), 16) * 0.1).toFixed(2) + "°C";
        str = str.substring(8);
        break;
      case 0x0188:// GPS
        var gps = {};
        gps.latitude = (parseTriple(str.substring(4, 10), 16) * 0.0001).toFixed(4) + "°";
        gps.longitude = (parseTriple(str.substring(10, 16), 16) * 0.0001).toFixed(4) + "°";
        gps.altitude = (parseTriple(str.substring(16, 22), 16) * 0.01).toFixed(1) + "m";
        myObj.gps = gps;
        str = str.substring(22);
        break;
      case 0x0371:// Triaxial acceleration
        var acceleration = {};
        acceleration.x = (parseShort(str.substring(4, 8), 16) * 0.001).toFixed(3) + "g";
        acceleration.y = (parseShort(str.substring(8, 12), 16) * 0.001).toFixed(3) + "g";
        acceleration.z = (parseShort(str.substring(12, 16), 16) * 0.001).toFixed(3) + "g";
        myObj.acceleration = acceleration;
        str = str.substring(16);
        break;
      case 0x0402:// air resistance
        environment.gasResistance = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2)  + "KΩ";
        str = str.substring(8);
        break;
      case 0x0802:// Battery Voltage
        myObj.battery = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "V";
        str = str.substring(8);
        break;
      case 0x0586:// gyroscope
        var gyroscope = {};
        gyroscope.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.y = (parseShort(str.substring(8, 12), 16) * 0.01).toFixed(2) + "°/s";
        gyroscope.z = (parseShort(str.substring(12, 16), 16) * 0.01).toFixed(2) + "°/s";
        myObj.gyroscope = gyroscope;
        str = str.substring(16);
        break;
      case 0x0902:// magnetometer x
        magnetometer.x = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0a02:// magnetometer y
        magnetometer.y = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      case 0x0b02:// magnetometer z
        magnetometer.z = (parseShort(str.substring(4, 8), 16) * 0.01).toFixed(2) + "μT";
        str = str.substring(8);
        break;
      default:
        str = str.substring(7);
        break;
    }
  }
  if(Object.getOwnPropertyNames(environment).length > 0) {
    myObj.environment = environment;
  }
  if(Object.getOwnPropertyNames(magnetometer).length > 0) {
    myObj.magnetometer = magnetometer;
  }
  return myObj;
}

```

:::
2. From to your ChirpStack, go to application page and click the "**APPLICATION CONFIGURATION**" tab as shown in the image below.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/klrcxtorpusmjb9who1t.jpg"
  width="100%"
  caption="Application Configuration Tab"
/>

3. Next, select "**Payload codec**" as "**Custom JavaScript codec functions**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/iea9w4hz2mdgzmzadjnd.jpg"
  width="80%"
  caption="Decoded Function in Chirpstack"
/>

4. Then, click ‘**UPDATE APPLICATION**’ button to save decoding function.

##### Testing in Real System in ChirpStack

After gateway and node go online, click the uplink data record from the application data at "**LIVE DEVICE DATA**" tab to check the decode status. From the image below, we can see the data decoded successfully in ChirpStack.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/7.decoding-ttn/vva4otkahxoguyktqljd.jpg"
  width="80%"
  caption="Decode Status in ChirpStack"
/>

### Lora® P2P Mode

The setup process for the RAK7204 WisNode Sense Home in LoRaP2P Mode is just the same with the process with the RAK811 Wisnode. These are the steps that you need to follow for this mode:

1. First, find two RAK7204 WisNode Sense Home which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.
2. Next, connect these two RAK7204 WisNode Sense Home with PC through USB cable, and open two serial port tool on PC.
3. Now, configure them to both work in LoRaP2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/8.lorap2p-mode/esrws29ubqsdrtzhxoyl.jpg"
  width="45%"
  caption="LoRaP2P Mode"
/>

Then configure LoRaP2P parameters for both of them as follow for example:
```sh
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/8.lorap2p-mode/be2eudcfjshdfpp70dh3.jpg"
  width="90%"
  caption="LoRaP2P Configuration"
/>

OK! Try to send a message from RAK7204 WisNode Sense Home - 2 (the right one) to RAK7204 WisNode Sense Home - 1 (the left one):

```sh
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/8.lorap2p-mode/hxqc6l5zeadhs5yd5ucz.jpg"
  width="90%"
  caption="Test Message Sent"
/>

**Success!** You can send more messages:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/8.lorap2p-mode/xiafisnstyg1641kojgl.jpg"
  width="90%"
  caption="Test Message Sent"
/>

Similarly, you can send message from RAK7204 WisNode Sense Home-1 to RAK7204 WisNode Sense Home-2 surely. Just try it freely. Great! We’ve done it, and that’s all about how to use
LoRaP2P on RAK811 WisNode.

You can use RAK7204 WisNode Sense Home LoRaP2P mode according to it.

###### ADR and DR

You can open the ADR feature of RAK7204 WisNode Sense Home by using the following AT command:

```sh
at+set_config=lora:adr:1
```

or you can close the ADR feature of RAK7204 WisNode Sense Home by using this AT command: 

```sh
at+set_config=lora:adr:0
```


There is also an AT command which is used to set the DataRate(DR):

| AT Command | Description | 
| ---- | ---- | 
| `at+set_config=lora:dr:X` | Set the DR of LoRa Node. <br>**• X** : the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN 1.0.2 specification. | 


For example, if you want to set the current DR to DR0, you just do as follow: 
```sh
at+set_config=lora:dr:0
```

## Miscellaneous

###  Burning the Bootloader
:::tip 📝 NOTE:
 Usually you don't need to burn the bootloader since there is a bootloader already in RAK7204 WisNode Sense Home from V3.0.0.0 firmware and so on. If the firmware of your RAK7204 WisNode Sense Home is V3.0.0.0 or a newer one, **Skip this section.**
:::

You can burn the bootloader in your RAK7204 WisNode Sense Home by following the steps below:

1. Download and Install the [**STM32CubeProgrammer**](https://www.st.com/content/st_com/en/products/development-tools/software-development-tools/stm32-software-development-tools/stm32-programmers/stm32cubeprog.html#overview) Software from STMicroelectronics on your Windows PC.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/y0zy3im6dd0ienfsyrsn.jpg"
  width="100%"
  caption="STM32CubeProg Download Page"
/>

2. Insert the provided jumper on the Boot line pins ("BOOT" pin and "VDD"), shorting them . Also, make sure that the RX pin of J25 is connected to the RXCP pin.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/og57pakunpx8jvxp4ktc.jpg"
  width="45%"
  caption="Boot Line shorted using the Jumper Pins"
/>

3. Connect the RAK7204 WisNode Sense Home on your Windows PC's USB Interface and press the RST Button or power it on again.  Open the STM32CubeProgrammer Software and Select UART type.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/3.interfacing/rak7204-pc.svg"
  width="70%"
  caption="USB Interface"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/p1ntn9ii9d4ccu10gjzr.jpg"
  width="100%"
  caption="UART Settings in STM32CubeProgrammer"
/>

4. Choose the appropriate port number in the **COM Port** field.

5. Set the Baud Rate to 115200, and the Parity to Even as seen in the figure above then Press **Connect.**

- If you didn't properly set your RAK7204 WisNode Sense Home to work in BOOT Mode, you will see the following information in the Log Section of the Software:


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/wjjwvo0xfwwlbdabpwdr.jpg"
  width="100%"
  caption="Errors Occurred During Connecting"
/>

- If this happens, Close the STM32CubeProgrammer and go back to the section above and set your RAK7204 WisNode Sense Home to work in **Boot Mode** again.
- If all works well, You will then see the following log:


<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/wgvzidnibvoiqdzjtkby.jpg"
  width="100%"
  caption="Successful Connection Log to your Device"
/>

Now that you have successfully connected your RAK7204 WisNode Sense Home to the STM32CubeProgrammer Tool, let's burn the Bootloader into the RAK7204 WisNode Sense Home.

6. Download the Bootloader for the RAK7204 WisNode Sense Home **[here](https://downloads.rakwireless.com/en/LoRa/RAK7204/Firmware/)**.

7. In the STM32CubeProgrammer, Click the "Erase Chip" button to erase all the data on RAK7204 WisNode Sense Home:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/o5mjjpxf0ifix3vhanl9.jpg"
  width="100%"
  caption="Erasing the Data in the Chip"
/>

8. Click "Open File" and select the correct Bootloader file that you have just downloaded.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/ochgdykv7i7s8kffnt6o.jpg"
  width="100%"
  caption="Opening the Bootloader file"
/>

9. Click the "Download" Button to start the burning process:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/f4g4duloizbd9hmdodph.jpg"
  width="100%"
  caption="Downloading of Bootloader to the device"
/>

10. After a couple of seconds, you will see the following window telling that you have successfully burned the Bootloader to your RAK7204 WisNode Sense Home!

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/9.burning-bootloader/rr9dnhyyoixq3ljstalq.jpg"
  width="100%"
  caption="Successfully Burned the Bootloader to the device"
/>

11. “Disconnect” and close the “STM32CubeProgrammer” tool.

:::warning ⚠️ WARNING
 Disconnect your RAK7204 WisNode Sense Home in your Windows PC and do not forget to remove the Jumper on the Boot Line Pins to work in Normal Mode.
:::

### Burning the Firmware

If the firmware version of your **RAK7204 WisNode Sense Home**  is newer than V3.0.0.0 or you have just burned the bootloader into the board according to the **Burning the Bootloader** section, follow the steps below

- Make sure you have set your RAK7204 WisNode Sense Home to work in boot mode. If you have just burned the bootloader according to the previous section, it works in boot mode now. 
- Open and download the RAK Serial Port Tool [Here](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) and Connect your board via the USB interface and enter the following **AT command** to let it work in boot mode.

:::warning ⚠️ WARNING
 Before configuring your RAK7204 WisNode Sense Home, make sure you already connected the Battery provided  on your device in order for you to communicate with the device successfully.
:::

```sh
at+set_config=device:boot
```

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/jvuee0euhsqbsdnkd7cw.jpg"
  width="80%"
  caption="Entering Boot Mode"
/>

- Download the [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/) from the RAKwireless website.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/rak-upgrade-tool.png"
  width="75%"
  caption="Device Firmware Upgrade Tool"
/>

- Download the latest firmware [here](https://downloads.rakwireless.com/en/LoRa/RAK7204/Firmware/) for the RAK7204 WisNode Sense Home

:::tip 📝 NOTE:
 Make sure to pick the appropriate bin file depending on the region you are in.
- "RUI_RAK7204_V3.x.x.x.H" supported regions are: IN865, EU868, US915, AU915, KR920, AS923
- "RUI_RAK7204_V3.x.x.x.L” supported regions are: EU433, CN470
Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan.
:::

- Select the application firmware file of the module with the suffix ". bin".

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/choose-firmware.png"
  width="75%"
  caption="Select firmware"
/>

- Click the "upgrade" button to upgrade the device. After the upgrade is complete, the RAK7204 is now ready to work with the new firmware.

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/upgrade-firmware.png"
  width="75%"
  caption="Firmware upgrading"
/>

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/upgrade-successful.png"
  width="75%"
  caption="Upgrade successful"
/>


- Now, **CLOSE** the upgrade tool and and proceed to the next section.

### Testing the Installed Firmware

In order for you to check if you have successfully installed the firmware on your RAK7204 WisNode Sense Home, open the Serial Port tool again. Press the "Reset button" or type the command below. If everything works  perfectly, you should see the following message below:

<rk-img
  src="/assets/images/wisnode/rak7204/quickstart/10.burning-firmware/kyecdcrh2uznsuyqjoqv.jpg"
  width="45%"
  caption=" Restarting Your Device"
/>

This information means that you have uploaded the Firmware successfully!

