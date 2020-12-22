---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4600 Breakout Board
---

# Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/main/rak4600-breakout-module.png"
  width="50%"
  caption="RAK4600 Breakout Board"
/>
--->

### What do you need?

Before going through each and every step in the installation guide of the RAK4600 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

- RAK4600 Breakout Board (provided) – including **LoRa and BLE antenna**, **Dupont lines (9x)**, and **4-pin headers (2x)**
- Micro USB Cable (provided)
- LoRa Gateway in range, for testing (not provided)
- Windows PC (not provided)
- USB to UART adapter (not provided)
- RAKDAP1 Flash and Debug Tool (not provided)

#### Software Tools

- [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/)
- [CH340 Drivers](https://downloads.rakwireless.com/LoRa/Tools/)
- [The Things Network](https://account.thethingsnetwork.org/register) account


#### Definition of Terms

##### List of acronyms

<table style="text-align: left">
<tbody>
        <tr>
            <td>ABP</td>
            <td>Activation By Personalization</td>
        </tr>
        <tr>
            <td>BLE</td>
            <td>Bluetooth Low Energy</td>
        </tr>
        <tr>
            <td>DFU</td>
            <td>Device Firmware Upgrade</td>
        </tr>
        <tr>
            <td>EUI</td>
            <td>Extender Unique Identifier</td>
        </tr>
        <tr>
            <td>LoRa</td>
            <td>Long Range</td>
        </tr>
        <tr>
            <td>OTAA</td>
            <td>Over The Air Activation</td>
        </tr>
        <tr>
            <td>TTN</td>
            <td>The Things Network</td>
        </tr>
        <tr>
            <td>P2P</td>
            <td>Peer to peer communication</td>
        </tr>
        <tr>
            <td>SWD</td>
            <td>Serial Wire Debug</td>
        </tr>
        <tr>
            <td>RUI</td>
            <td>RakWireless Unified Interface</td>
        </tr>
</tbody>
</table>



## Product Configuration


### Interfacing with RAK4600 Breakout Board

To interface with the RAK4600 Breakout Board with your Windows PC, you need to download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/).

::: warning ⚠️ WARNING
Before powering the RAK4600 Breakout Module, make sure you have installed the included LoRa and BLE antennas. Not doing so might damage the board.
:::

 Use Figure 1 as a reference to connect the antennas.
 
 
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/RAK4600_Breakout_Module_Antenna_Label.svg"
  width="80%"
  caption="RAK4600 Breakout Board antenna connection"
/>

Use Figures 2 and 3 as a reference to indentify the antennas.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/ble-antenna.png"
  width="60%"
  caption="RAK4600 Breakout Board BLE antenna"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/lora-antenna.png"
  width="60%"
  caption="RAK4600 Breakout Board LoRa antenna"
/>

#### USB to UART

- Connect your USB to UART adapter to the pin header on the RAK4600 Breakout Board via a set of 4 Dupont lines. Use Figure 4 as reference on wiring the device properly.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/powering-and-interfacing.png"
  width="100%"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing **Windows + R** and type `devmgmt.msc`, or search in the Start Menu.

- Look for Ports (COM & LPT). Find the name of your USB UART Module driver and take note of the COM Port Number as you will need it to connect with the board.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/com-port-settings.png"
  width="70%"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the BaudRate to **115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/configuring-rak-serial-tool.png"
  width="90%"
  caption="Configuring the RAK Serial Port Tool"
/>

### Connecting to The Things Network (TTN)
<!--
Please refer to <a href="../../../../../Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-to-the-things-network-ttn" target="_blank">Connecting to The Things Network (TTN)</a>
-->

In this section, you will be connecting your RAK4600 Breakout Board to The Things Network (TTN).

The Things Network is about enabling low power devices to be used in long-range gateways that connect to an open-source, decentralized network, and exchange data with Applications. To learn more about the Things Network, visit their [**website**](https://www.thethingsnetwork.org/docs/).

<b>Sign up and Login</b>

 If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the Console.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-home-page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-console-main-page.png"
  width="100%"
  caption="TTN Console Page"
/>


#### Adding an Application

1. Choose "**APPLICATIONS**".

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>

2. Click the "**add application**" button.

Here are the things that you should take note in adding an application:

- **Application ID** - this will be the unique id of your application in the Network. Note that characters should be in lower case, no spaces are allowed.
- **Description** - this is a short and concise human readable description of your application.
- **Application EUI** - this will be generated automatically by The Things Network for convenience.
- **Handler Registration** - handler you want to register this application to.

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of the page. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

If you see a page the same as shown in Figure 11, then this means you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

1. Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

2. Click on "**register device**" link

Here are the things that you should take note in registering your device:

- **Device ID** - this is the unique identifier for your RAK4600 Breakout Board in your application. You need to enter this manually.
- **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.
- **App Key** - this key will be used to secure the communication between the device and the network.
- **App EUI** - a unique identifier of the Application that you are registering the device within.


3. Populate the **Device ID** and **Device EUI** _(generate a random one by pressing the arrows)_ fields and leave the rest as is. Then, click “**Register**” button.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/add-device.png"
  width="100%"
  caption="Add your Device"
/>

Depending on which authentication method you want to use, proceed to either **OTAA mode** or **ABP mode** section.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/device-overview-page.png"
  width="100%"
  caption="Device Overview"
/>

#### OTAA Mode

When setting up a new device in TTN, its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI**, and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-device-overview.png"
  width="100%"
  caption="Device Overview Parameters"
/>

As an example, these are the list of the parameters you need to configure in RAK4600 Breakout Board: 


- LoRa join mode: **OTAA**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device EUI: **5e9d1e0857cf25f1**
- Application EUI: **5e9d1e0857cf25f1**
- Application Key: **f921d50cd7d02ee3c5e6142154f274b2**


1. Set the LoRa join mode to **OTAA**.

```sh
at+set_config=lora:join_mode:0
```

2. Set the LoRa class to **Class A**.

```sh
at+set_config=lora:class:0
```

3. Set the frequency/region to **EU868** (for Europe).

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#rf-characteristics).

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-join.png"
  width="45%"
  caption="AT Command for OTAA Join Mode, Class and Region"
/>


4. Set the Device EUI.

```sh
at+set_config=lora:dev_eui:5e9d1e0857cf25f1
```

5. Set the Application EUI.

```sh
at+set_config=lora:app_eui:5e9d1e0857cf25f1
```

6. Set the Application Key.

```sh
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-otaa-device-eui.png"
  width="45%"
  caption="AT Command for OTAA Device EUI, Application EUI, and Application Key"
/>

7. Reboot the RAK4600 Breakout Board to save the parameters.

```sh
at+set_config=device:restart
```

8. After resetting RAK4600 Breakout Board, join in OTAA mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-otaa-serial-port.png"
  width="45%"
  caption="AT Command for OTAA LoRa Join via RAK Serial Port Tool"
/>

9. Try to send a data from the RAK4600 Breakout Board to TTN.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-test-sample-data.png"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from RAK4600 Breakout Board on TTN console Application Data as shown in Figure 20.

<rk-img
src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-test-sample-sent.png""
width="100%"
caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>


##### ABP Mode

###### Configure the ABP mode on the platform

1. To join TTN in ABP mode, first, it is required to change the activation method to ABP. This is done on the TTN console under the **Device Settings** page.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-abp-switch.png"
  width="100%"
  caption="ABP Activation in TTN"
/>

* For ABP mode, the TTN parameters needed are the following: 

- **Device Address**
- **Network Session Key**
- **App Session Key**

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values. In other cases, you can complete them with specific values.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-abp-param.png"
  width="100%"
  caption="ABP Mode Parameters"
/>

2. After completing the activation mode change, the device parameters will be the summarized the same as shown in Figure 23.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-abp-mode-configuration.png"
  width="100%"
  caption="ABP Mode Parameters Overview"
/>

###### Configure the ABP mode on the RAK4600 Breakout Board

To set up the RAK4600 Breakout Board to join the TTN using ABP, start by connecting the breakout board to the computer as shown in section [Interfacing with RAK4600 Breakout Board](#interfacing-with-rak4600-breakout-board). Open the RAK Serial Port Tool and wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-connect-rak4600.png"
  width="40%"
  caption="at+version command response"
/>


As an example, the following parameters will be configured in RAK4600 Breakout Board:

* LoRa join mode: **ABP**
* LoRa class: **Class A**
* LoRa region: **EU868**
* Device address: **26011af9** (from TTN registration)
* Network Session Key: **c280cb8d1df688bc18601a97025c5488** (from TTN registration)
* Application Session Key: **4d42ec5caf97f03d833cdaf5003f69e1** (from TTN registration)

1.	Set LoRa join mode to **ABP**.


```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to **Class A**.


```
at+set_config=lora:class:0
```

3.	Set the frequency/region to **EU868** (for Europe).

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#rf-characteristics).


```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band of the gateway.
:::

4. Set the Device Address.


```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key.

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key.

```
at+set_config=lora:apps_key:4d42ec5caf97f03d833cdaf5003f69e1
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-abp-set-param.png"
  width="40%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4600 Breakout Board to save the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:
When using ABP mode, there is no handshaking between the RAK4600 Breakout Board and the network. The LoRaWAN end-device doesn’t require to join a network before sending a LoRaWAN package to the air. But, to keep the consistency of internal states of the firmware of the RAK4600, it is still required to send `at+join` command in the ABP mode.
:::


8. Send data from RAK4600 Breakout Board to TTN.


```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-otaa-send-data.png"
  width="40%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

Then, go to the TTN Console to confirm that the message is properly received. The data will appear in TTN Application Data.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-abp-receive.png"
  width="100%"
  caption="Data received from RAK4600 Breakout Board"
/>


### Connecting with ChirpStack

This section shows how to connect the RAK4600 Breakout Board to the ChirpStack platform. As described in the ChripStack website:

“ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including an user-friendly web-interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-architecture.png"
  width="60%"
  caption="RAK4600 Breakout Board in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in Figure 28. Similar to the case of TTN, the RAK4600 Breakout Board is located in the periphery and will transmit the data to the backend servers through a LoRa gateway. For a more technical understanding of the ChirpStack components, refer to its [Architecture](https://www.chirpstack.io/project/architecture/) page.


* In this section, it is assumed that you are using a RAK LoRa gateway, such as the RAK7243. The gateway must be configured and registered previously to ChirpStack deployment. More information about that can be found at [Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack).

:::tip 📝 NOTE:
The frequency band used in this example is EU868 which is supported by the high-frequency version of RAK4600 Breakout Board.
:::

* These are the steps needed to send data to the ChirpStack platform from a RAK4600 Breakout Board: 

  1. Create a new Application.
  2. Register a new device on the platform: 
  3. Configure the Join Mode:
      *	OTAA mode on the platform
      *	OTAA mode on the RAK4600
      *	ABP mode on the platform
      *	ABP mode on the RAK4600 Breakout Board 
  4. Send data from the RAK4600 Breakout Board and receive it at the platform

The following section gives the details of each of these aforementioned steps. Before you start, you must choose to use either ABP or OTAA mode to register the device to the network server.

#### Create a new Application

1. Go to the Application section then click on “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-applications.png"
  width="100%"
  caption="Application Section"
/>


2. ChirpStack LoraServer supports multiple system configurations, with only one by default. By default, a new Application should be created, although it is possible to reuse the existing ones. For this setup, create a new Application by clicking on the "**CREATE APPLICATION**" button.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-create-new-app.png"
  width="100%"
  caption="Creating a New Application"
/>

3. Create an Application named “**rak_node_test**”. Fill the required parameters as shown in Figure 31. To finish, click on “**CREATE APPLICATION**” button. 

* **Application Name**: rak_node_test
* **Application Description**: test 
* **Service profile**: field is to select the system profile.

The **Application Description** field is just a descriptive text.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-filling-param.png"
  width="100%"
  caption="Filling Parameters of an Application"
/>

<b>Register a new Device</b>

1. Click on the Application “**rak_node_test**” created in the previous step.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-list-app.png"
  width="100%"
  caption="List of Applications Created"
/>

2. Select the “**DEVICES**” tab as shown in Figure 33.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-device-tab.png"
  width="100%"
  caption="Devices Tab of an Application"
/>

3. Inside of the “**DEVICES**” tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-add-device.png"
  width="100%"
  caption="Add a New Device"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-device-reg.png"
  width="100%"
  caption="New Device Registration Form"
/>

4. Once the device is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the icon highlighted in Figure 36. Or, you can write a correct Device EUI in the edit box.

Fill the parameters requested:

*	**Device name** and **Device description**: These are just descriptive texts. 
*	**Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 36. You can also add a specific Device EUI directly in the form. 
*	**Device-profile**: To join in OTAA mode, select “**device_profile_otaa**” or “**device_profile_abp**” to join in ABP mode. 

5. To finish, click on “**CREATE DEVICE**” button.

:::tip 📝 NOTE:
ChirpStack doesn’t support AS923 in ABP mode.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-generate-deveui.png"
  width="100%"
  caption="Generate a new Device EUI in the device registration form"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or via Activation-By-Personalization (ABP). In OTAA, the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA Mode

###### Configure the OTAA mode on the platform

1. If you have selected “**device_profile_otaa**”, then after the device is created, an Application key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. A previously created Application key can be entered here, or a new one can be generated automatically by clicking on the icon highlighted in red in Figure 38.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-appkey.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Once the “**Application key**” is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 39, a new device should be listed in the “**DEVICES**” tab. The most important parameters, such as the **Device EUI** are shown in the summary. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-deveui.png"
  width="100%"
  caption="Chirpstack OTAA List of Device in the Device Tab"
/>

4. To end the process, it is a good practice to review that the “**Application key**” is properly associated with this device. The “**Application key**” can be verified in the “**KEYS(OTAA)**” tab.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-appkey.png"
  width="100%"
  caption="Application Key associated to the new device"
/>

:::tip 📝 NOTE:
Standard OTAA mode requires the **Device EUI**, **Application Key**, and the **Application EUI**. But in the ChirpStack’s implementation, only Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4600 Breakout Board firmware. To resolve this mismatch, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 
:::

###### Configure the OTAA mode on the RAK4600 Breakout Board

RAK4600 Breakout Board complies with the LoRaWAN 1.0.2 specification. By default, the LoRa join mode is **OTAA** and the LoRa Class is **Class A**.

To set up the RAK4600 Breakout Board to join ChirpStack using OTAA, start by connecting the breakout board to the Windows PC as shown in section [Interfacing with RAK4600 Breakout Board](#interfacing-with-rak4600-breakout-board) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/otaa-connect-rak4600.png"
  width="40%"
  caption="at+version command response"
/>

As an example, the following parameters will be configured in RAK4600 Breakout Board:

- LoRa join mode: **OTAA**
- LoRa class: **Class A**
- LoRa region: **EU868**
- Device EUI: **d045f054b2797f7c** (from ChirpStack registration)
- Application EUI: **d045f054b2797f7c** (from ChirpStack registration)
- Application Key: **2cb29aefe344c0d7b044e7a7d3afda6d** (from ChirpStack registration)


1. Set the LoRa join mode to **OTAA**.


```
at+set_config=lora:join_mode:0
```

2.	Set the LoRa Class to **Class A**.


```
at+set_config=lora:class:0
```
3.	Set the frequency/region to EU868 (for Europe).

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#rf-characteristics). 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the gateway.
:::

4.	Set the Device EUI.

```
at+set_config=lora:dev_eui:d045f054b2797f7c
```

5.	Set the Application EUI.

```
at+set_config=lora:app_eui:d045f054b2797f7c
```
:::tip 📝 NOTE:
The App EUI parameter is not needed for the ChirpStack platform; therefore, you will use the same ID as the Device EUI. Otherwise, the firmware will fail connecting to the network server. 
::: 

6.	Set the Application Key.


```
at+set_config=lora:app_key:2cb29aefe344c0d7b044e7a7d3afda6d
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-param-config.png"
  width="40%"
  caption="Chirpstack OTAA configuration via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:
After configuring all the parameters, you need to reset your RAK4600 Breakout Board to save the parameters.
:::

7. After resetting, start to join.

```
at+join
```

8. After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, then “**OK Join Success**” message will be shown. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-success.png"
  width="40%"
  caption="Chirpstack OTAA Join the Network via RAK Serial Port Tool"
/>

9. The **JoinRequest** and **JoinAccept** messages are also displayed on the ChirpStack platform, specifically in the **LORAWAN FRAMES** tab.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-receive.png"
  width="100%"
  caption="Checking LoRaWAN Joint Request in Chirpstack OTAA Console"
/>

9.	Try to send data from RAK4600 Breakout Board to ChirpStack. 


```
at+send=lora:2:1234567890
```


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-send.png"
  width="40%"
  caption="Send a LoRaWAN Message via RAK Serial Port Tool"
/>

- On the ChirpStack console, the messages shall appear in the “**LORAWAN FRAMES**” tab as shown in Figure 46.<br>

:::tip 📝 NOTE:
By convention, messages sent from nodes to gateway are considered as **UPLINK** while message send by gateway to nodes are considered as a **DOWNLINK**. 
:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-console-otaa-rec.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

##### ABP Mode

###### Configure the ABP mode on the platform

During the registration of a new device, if “**device_profile_abp**” is selected, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode. 

:::tip 📝 NOTE:
Check **Disable frame-counter validation** to prevent the node-side counting frame counting from starting from zero after the node is powered on during the test, and the server cannot synchronize the node-side counting, causing the transmission to fail.
:::

1. Fill the parameters requested as appears in Figure 47:

* **Device name** and **Device description**: These are just descriptive texts.
* **Device EUI**: You can also add a specific Device EUI directly in the form. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-abp-console.png"
  width="100%"
  caption="Configuring a Device in ABP Mode"
/>


2. Once these parameters are filled, click on “**CREATE DEVICE**” button. 

After selecting the ABP mode, the following parameters appear in the “**ACTIVATION**” tab: 

*	**Device address**
*	**Network Session Key**
*	**Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-abp-param.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**(RE)ACTIVATE DEVICE**” button.

###### Configure the ABP mode on the RAK4600 Breakout Board


RAK4600 Breakout Board complies with the LoRaWAN 1.0.2 specification. By default, the LoRa join mode is **OTAA**, and the LoRa Class is **Class A**.

To set up the RAK4600 Breakout Board to join ChirpStack using ABP, start by connecting the breakout board to the computer as shown in section [Interfacing with RAK4600 Breakout Board](#interfacing-with-rak4600-breakout-board) and pen the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/otaa-connect-rak4600.png"
  width="40%"
  caption="at+version command response"
/>

As an example, the following parameters will be configured in RAK4600:



- LoRa join mode: **ABP**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device address: **26011af9** (from ChirpStack registration)
- Network Session Key: **c280cb8d1df688bc18601a97025c5488** (from ChirpStack registration)
- Application Session Key: **4d42ec5caf97f03d833cdaf5003f69e1** (from ChirpStack registration)


1. Set the LoRa join mode to **ABP**.

```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to **Class A**.


```
at+set_config=lora:class:0
```

3.	Set the frequency/region to EU868 (for Europe).

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#rf-characteristics). 

```
at+set_config=lora:region:EU868
```

4. Set the Device Address.

```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key.


```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key.

```
at+set_config=lora:apps_key:4d42ec5caf97f03d833cdaf5003f69e1
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-abp-param-serial.png"
  width="40%"
  caption="Chirpstack ABP Parameters Configuration via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4600 Breakout Board to save the parameters.

:::

7.	After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:
The ABP mode in LoRaWAN doesn’t require to join a network before sending a LoRaWAN package. But, to keep the consistency of internal states of the firmware of the RAK4600, it is still required to send `at+join` command in the ABP mode.
:::


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/abp-join.png"
  width="40%"
  caption="RAK Serial Port Tool join LoRaWAN in ABP mode."
/>



9. Try to send data from RAK4600 Breakout Board to ChirpStack.

```
at+send=lora:2:1234567890
```
The console will feedback with an “OK” message.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/abp-send-reply.png"
  width="40%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

The sent data shall be displayed on the ChirpStack console on “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-console-abp-uplink.png"
  width="1000%"
  caption="ChirpStack Console UPLINK LoRaWAN Frame in ABP mode."
/>


## Miscellaneous

### Bluetooth Connection Modes

There are three BLE modes in RAK4600 Breakout Board from the firmware V3.0.0.6: the **Peripheral Mode**, the **Central Mode**, and the **Beacon Scan Mode**. You can change the work mode of RAK4600 Breakout Board BLE using the AT command provided which is define. For further information, refer to RAK4600 Breakout Board [**AT Command Manual**](/Product-Categories/WisDuo/RAK4600-Breakout-Board/AT-Command-Manual/#bluetooth-connection-modes).

```
at+set_config=ble:work_mode:<mode>:<long_range>
```

**Description:** Set the work mode for BLE.
- **mode** - 0: BLE peripheral mode, 1: BLE central mode. 2: Beacon scan mode.
- **long_range** - 0: normal range. RAK4600 Breakout Board does not support BLE long-range.

#### BLE Peripheral Mode

Using the Peripheral Mode, you can scan RAK4600 Breakout Board BLE and connect it using your mobile device.

#### BLE Central Mode

Using the Central Mode, the RAK4600 Breakout Board BLE will not advertise so your mobile device will not be able to scan it. This is very useful if you want to make the breakout board to act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 devices) can send sensor data.

#### Beacon Scan Mode

Using the Beacon Scan mode, the RAK4600 Breakout Board can scan around for Beacon devices. It is useful to scan iBeacon and Eddystone.

#### RAK4600 Breakout Board BLE Default Settings

By default, the RAK4600 Breakout Board will work on **Peripheral Mode**. In this mode, you can configure it through BLE including DFU easily. It should be noted that after resetting the breakout board, you only have 60 seconds to establish a connection with your mobile device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the breakout board will stop the BLE advertising and enter power-saving mode. On the other hand, there is no limitation once you are already connected with the RAK4600 Breakout Board BLE.

If you set the RAK4600 Breakout Board to work in **Central Mode**, the RAK4600 Breakout Board will work first on **Peripheral Mode** for 30 seconds, and if no connection is established after 30 seconds, it will automatically change to **Central Mode**. In this mode, the breakout board will stop the BLE advertising and will not be visible on your mobile device up until you change the work mode to peripheral mode or reset the RAK4600 Breakout Board again.

### Upgrading the Firmware

Before start working with the RAK4600 Breakout Board, it is recommended to keep the breakout board updated to the latest version of the firmware. The latest firmware can be found in the firmware section of the [RAK4600 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#firmware).

In the following sections, two (2) options for flashing new firmware in a RAK4600 Breakout Board are shown: **Upgrade through DAPLink** and **Upgrade through BLE**.

#### Firmware Upgrade Through DAPLink

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool) guide in the Accessories category.

#### Firmware Upgrade Through BLE

1. Install **nRF Connect for Mobile** tool developed by the Nordic Semiconductor company. This tool is available on Google Play Store and Apple App Store. 

    - [nRF Connect for Mobile](https://www.nordicsemi.com/Software-and-tools/Development-Tools/nRF-Connect-for-mobile)

2. Download the **DFU package** for the RAK4600 Breakout Board and save it on your mobile phone.

    - [**DFU package**](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/History-Release-Version/DFU-Package/)

3. Make sure the Bluetooth on your mobile is turned on. Open the “**nRF Connect for Mobile**” application and you will see all BLE devices in range in the scan list:

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="35%"
  caption="Available Bluetooth Devices in the nRF Connect app"
/>

4. Turn on your RAK4600 Breakout Board and wait for a couple of seconds. Search for a BLE Device named “**RUI-...**” in the scan list of the app. Connect to this device and then click on “**Secure DFU Service**”.

:::tip 📝 NOTE:
 The “**RUI-...**” BLE device is visible only for 60 seconds. For more information, see [**Bluetooth Connection Modes**](#bluetooth-connection-modes).
:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="65%"
  caption="Secure DFU Service in the nRF Connect App"
/>

5. In the “**Secure DFU Service**”, click the button highlighted in red in Figure 56.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="65%"
  caption="Buttonless DFU"
/>

6. Click the arrow highlighted in Figure 57. A Write value pop-up window will appear and press “**Send**”.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="65%"
  caption="Resetting the Bootloader via Bluetooth"
/>

7. Now, the RAK4600 Breakout Board is now working in DFU Mode. In the application, you will see the the default status of the breakout board as shown in Figure 59.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/qmi89z3vqxvukvbiodnc.jpg"
  width="35%"
  caption="RAK4600 Breakout Board Default Status Overview after Resetting"
/>

8. In the nRF Connect device list, search for a BLE device named “**DfuTarg**” and then, click on “**CONNECT**” button.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="35%"
  caption="RAK4600 Breakout Board Default Bluetooth ID after Resetting"
/>

9. After connected, select the **DFU Icon**. On the Select file type, choose the “**Distribution packet (ZIP)**” and press OK. This will then prompt you to select the zip file of the DFU package that you have downloaded.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="65%"
  caption="Distribution Packet File Type under DFU"
/>

10. The DFU application automatically starts to upgrade the firmware of your RAK4600 Breakout Board through DFU over BLE. After upgrading, the application restarts the breakout board and the DFU mode is disabled. Now, you can use the RAK4600 Breakout Board with the latest firmware.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/nzilnqodbz6x33uvnpp4.jpg"
  width="35%"
  caption="DFU Upgrading of RAK4600 Breakout Board Firmware via BLE"
/>

