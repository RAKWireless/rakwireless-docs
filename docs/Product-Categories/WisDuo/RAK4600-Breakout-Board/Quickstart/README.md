---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4600 Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak4600-breakout-board/quickstart/main/RAK4600_Breakout_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4600 Breakout Board
  - wisduo
  - quickstart
---

# RAK4600 Breakout Board Quick Start Guide

This guide covers the following topics:

- [The Things Stack (TTN V3) OTAA Guide](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#the-things-stack-otaa-device-registration)
- [RAK4600 OTAA AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#rak4600-otaa-configuration-for-the-things-stack)
- [The Things Stack (TTN V3) ABP Guide](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#the-things-stack-abp-device-registration)
- [RAK4600 ABP AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#rak4600-abp-configuration-for-the-things-stack)
- [Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#configure-the-otaa-mode-on-the-platform)
- [RAK4600 OTAA AT Commands for Chirpstack](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#configure-the-otaa-mode-on-the-rak4600-breakout-board)
- [Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#configure-the-abp-mode-on-the-platform)
- [RAK4600 ABP AT Commands for Chirpstack](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#configure-the-abp-mode-on-the-rak4600-breakout-board)
- [LoRa P2P Guide](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#lora-p2p-mode)
- [Updating RAK4600 FW Procedure](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Quickstart/#upgrading-the-firmware)

## Prerequisites

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/main/rak4600-breakout-module.png"
  width="50%"
  caption="RAK4600 Breakout Board"
/>
--->

### What Do You Need?

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
  width="90%"
  caption="RAK4600 Breakout Board antenna connection"
/>

Use Figures 2 and 3 as a reference to identify the antennas.

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

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the BaudRate to **115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/configuring-rak-serial-tool.png"
  width="90%"
  caption="Configuring the RAK Serial Port Tool"
/>


#### BLE Interface

To configure the RAK4600 through BLE, execute the following steps. 

1. Install the “**nRF Connect**” or “**nRF Master Control Panel (BLE)**” app provided by Nordic Semiconductor.
2. Open the app on the mobile device and scan for BLE devices.
3. Reset the RAK4600 board. After a few seconds, a list of BLE devices will be shown. The RAK4600 is listed as “**RUI-XX: XX: XX**"

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/nordic-scan.jpg"
  width="30%"
  caption="Nordic app scan for BLE devices"
/>

:::tip 📝 NOTE:
Connect within 60 seconds after resetting the RAK4600. After that time, the BLE broadcast will be stopped.
:::

4.	After pressing the “**CONNECT**” button, a list will be displayed as shown in Figure 7. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-connect.jpg"
  width="30%"
  caption="Options to connect to the RAK4600"
/>

5.	Select the service named “**Nordic UART Service**”.
6.	To receive data from mobile, enable notification on TX Characteristic by clicking on the arrow.
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-enable.png"
  width="30%"
  caption="Enable notifications from mobile phone"
/>

7.	Write a value on RX Characteristic by clicking on the arrow.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-send-at-command.png"
  width="30%"
  caption="Send AT command"
/>

7.	A small input window will pop-up. This is where AT commands shall be typed. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-at-command-input.png"
  width="30%"
  caption="nRF app AT command input window"
/>

8.	Send AT commands to RAK4600 in this dialog. 

    * For example, to check the current firmware version, type “at+version” then click on “SEND” button.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-send-at-version.jpg"
  width="30%"
  caption="nRF app, send at command over BLE"
/>

The console output shall be read on the TX Characteristic of the App.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/ble-at-version-response.png"
  width="30%"
  caption="AT response over BLE"
/>

### Connecting to The Things Stack (TTN V3)

This section will show how to connect the RAK4600 Breakout Board to The Things Stack (TTN V3) platform. 

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/4.ttn-context.png"
  width="95%"
  caption="The Things Stack diagram"
/>

As shown in Figure 13, The Things Stack is an open source LoRaWAN Network Server suitable for global, geo-distributed public and private deployments as well as for small, local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliancy and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide-area networks. It allows for large scale Internet of Things deployments where low-powered devices efficiently communicate with Internet-connected applications over long range wireless connections.

The RAK4600 board can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to the The Things Stack using the LoRaWAN protocol. To achieve this, the RAK4600 must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server. 


#### Registration to TTN and Creating LoRaWAN Applications

The first step is to go to [The Things Network platform](https://console.cloud.thethings.network/) and select a cluster as shown in Figure 14. The Things Industries adds more cluster from time to time, so select the one closes to your location. In this guide, Europe 1 is selected.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_1.png"
  width="100%"
  caption="Selecting Cluster in TTN V3"
/>

You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

To register as a new user to TTN, click on **Login with The Things ID** then select **register** on the next page as shown in Figures 15 and 16.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_2.png"
  width="100%"
  caption="Login using TTN account"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_3.png"
  width="100%"
  caption="Registration of new account"
/>

You should now be on the step of creating your TTN account. Fill in all the necessary details and activate your account.

After creating an account, you should login on the platform using your username/email and password then click **Submit** as shown in Figure 17.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_4.png"
  width="100%"
  caption="Logging in to TTN platform"
/>

You need to click **Authorize** to proceed.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_5.png"
  width="100%"
  caption="Authorization to TTN"
/>

Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_6.png"
  width="100%"
  caption="Creating TTN application for your LoRaWAN devices"
/>

To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.
 
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_7.png"
  width="100%"
  caption="Details of the TTN application"
/>

If you have no error on the previous step, you should now be on the application console page. The next step is to add end-devices to your The Things Stack application. LoRaWAN specification enforces that each end device has to be personalized and activated. There are two options for registering devices depending on the activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

:::tip 📝 NOTE:

Once you have the application in The Things Stack (TTN V3), you need to ensure that you are in coverage of a LoRaWAN gateway that is registered to The Things Stack (TTN V3) as well. Without the coverage of that LoRaWAN gateway, you cannot activate any device that you will register in your application. 

RAKwireless has [LoRaWAN gateways](https://store.rakwireless.com/collections/wisgate) that you can connect to The Things Stack (TTN V3) if no LoRaWAN gateway coverage available in your location.

:::

#### The Things Stack OTAA Device Registration

You need to go to your application console to be able to register a device. To start adding an OTAA end device, you need to click **+ Add end device** as shown in Figure 21.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Over the air activation (OTAA)** and compatible **LoRaWAN version** then click **Start** button as shown in Figures 22 and 23.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_10.png"
  width="100%"
  caption="Device activation configuration"
/>

Then you need to put a unique **End device ID** and EUIs (**DevEUI** and **AppEUI**) as shown in Figure 15. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed on the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device` is for illustration purposes only.

:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_11.png"
  width="100%"
  caption="OTAA Device Information"
/>

Next step is to setup **Frequency plan**, compatible **Regional Parameter version** and **LoRaWAN class** supported. Then you can click **Join settings**

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_12.png"
  width="100%"
  caption="OTAA Configuration"
/>

The last step in the registration of a new OTAA end-device is the configuration of the **AppKey**. To get the AppKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_13.png"
  width="100%"
  caption="OTAA AppKey generation and device registration"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 27.

:::tip 📝 NOTE:

The **AppEUI**, **DevEUI** and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reason but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

The three OTAA parameters on The Things Stack device console are MSB by default. 

These parameters are always accessible on the device console page as shown in Figure 27.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_14.png"
  width="100%"
  caption="OTAA device successfully registered to The Things Stack"
/>


#### RAK4600 OTAA Configuration for The Things Stack

The RAK4600 Breakout Board supports a series of AT commands to configure its internal parameters and control the functionalities of the module. To set up the RAK4600 board to join The Things Stack using OTAA, start by connecting the RAK4600 board to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>


As an example, these are the list of the parameters you need to configure in RAK4600: 

- LoRa join mode: **OTAA**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device EUI: **1133557799224466**
- Application EUI: **1000000000000009**
- Application Key: **04FA4E626EF5CF227C969601176275C2**


1. Set the LoRa join mode to OTAA.

```
at+set_config=lora:join_mode:0
```

2. Set the LoRa class to Class A.

```
at+set_config=lora:class:0
```

3. Set the frequency/region to EU868.

* Refer in the [RAK4600 Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics) for the list of supported frequencies.


```
at+set_config=lora:region:EU868
```

4. Set the Device EUI.

```
at+set_config=lora:dev_eui:1133557799224466
```

5. Set the Application EUI.

```
at+set_config=lora:app_eui:1000000000000009
```

6. Set the Application Key.

```
at+set_config=lora:app_key:04FA4E626EF5CF227C969601176275C2
```


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/14.lora-parameters.png"
  width="90%"
  caption="Configuring LoRa Parameters"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4600 Module for saving parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see the messages shown in Figure 30.

8. Try to send a message from the RAK4600 board.

```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/15.send-message.png"
  width="90%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4600 board on The Things Stack platform as shown in Figure 31.


<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/otaasend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>


#### The Things Stack ABP Device Registration

To register an ABP device, you need to go to your application console and select the application where you want your device to be added. Then you need to click **+ Add end device** as shown in Figure 32.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Activation by personalization (ABP)**, compatible **LoRaWAN version** and click **Start** button as shown in Figures 33 and 34.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Add end device"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/image_1_abp.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

At this step, you need to put a unique **End device ID** and **DevEUI** as shown in Figure 35. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed to the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device-abp` is for illustration purposes only.

:::

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/image_2_abp.png"
  width="100%"
  caption="Device Information"
/>

Next step is to set up **Frequency plan**, compatible **Regional Parameter version**, and **LoRaWAN class** supported. In an ABP device, you also need to generate **Device Address** and **NwkSKey** (Network Session Keys). Then you can click **Application layers settings**.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/image_3_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

The last step in the registration of a new ABP end-device is the configuration of the **AppSKey**. To get the AppSKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/image_4_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 38.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/image_5_abp.png"
  width="100%"
  caption="RAK4600 registered at The Things Stack"
/>

#### RAK4600 ABP Configuration for The Things Stack

To set up the RAK4600 Breakout Board to join The Things Stack using ABP, start by connecting the RAK4600 board to the Computer (see Figure 1) and open the RAK Serial Port  Tool. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4600: 

- LoRa join mode: **ABP**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device address: **260BDE80**
- Network Session Key: **433C7A924F7F6947778FE821525F183A**
- Application Session Key: **A585653A949C2B2D44B55E99E94CB533**



1. Set the LoRa join mode to ABP.

```
at+set_config=lora:join_mode:1
```
2. Set the LoRa class to Class A.

```
at+set_config=lora:class:0
```

3. Set the frequency/region to EU868.

- Refer in the [RAK4600 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4600-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.

```
at+set_config=lora:region:EU868
```

4. Set the Device Address.

```
at+set_config=lora:dev_addr:260BDE80
```

5. Set the LoRa Network Session Key.

```
at+set_config=lora:nwks_key:433C7A924F7F6947778FE821525F183A
```

6. Set the LoRa Application Session Key.

```
at+set_config=lora:apps_key:A585653A949C2B2D44B55E99E94CB533
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/21.abp-at-commands.png"
  width="90%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset RAK4600 Module for saving the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4600 board, it is still required to send `at+join` command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::

8. Try to send a data from the RAK4600 to The Things Network in ABP mode.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/15.send-message.png"
  width="90%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4600 board on The Things Stack device console *Live data* section and the *Last seen* info should be a few seconds ago.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/abpsend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>


### Connecting with ChirpStack

This section shows how to connect the RAK4600 Breakout Board to the ChirpStack platform. As described in the ChirpStack website:

“ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including an user-friendly web-interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-architecture.png"
  width="60%"
  caption="RAK4600 Breakout Board in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in Figure 43. Similar to the case of TTN, the RAK4600 Breakout Board is located in the periphery and will transmit the data to the backend servers through a LoRa gateway. For a more technical understanding of the ChirpStack components, refer to its [Architecture](https://www.chirpstack.io/project/architecture/) page.


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

3. Create an Application named “**rak_node_test**”. Fill the required parameters as shown in Figure 46. To finish, click on “**CREATE APPLICATION**” button. 

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

2. Select the “**DEVICES**” tab as shown in Figure 48.

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

4. Once the device is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the icon highlighted in Figure 51. Or, you can write a correct Device EUI in the edit box.

Fill the parameters requested:

*	**Device name** and **Device description**: These are just descriptive texts. 
*	**Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 51. You can also add a specific Device EUI directly in the form. 
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

2. A previously created Application key can be entered here, or a new one can be generated automatically by clicking on the icon highlighted in red in Figure 53.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-otaa-appkey.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Once the “**Application key**” is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 54, a new device should be listed in the “**DEVICES**” tab. The most important parameters, such as the **Device EUI** are shown in the summary. 

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
  width="45%"
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
  width="45%"
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
  width="45%"
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
  width="45%"
  caption="Send a LoRaWAN Message via RAK Serial Port Tool"
/>

- On the ChirpStack console, the messages shall appear in the “**LORAWAN FRAMES**” tab as shown in Figure 61.<br>

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

1. Fill the parameters requested as appears in Figure 62:

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
  width="45%"
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
  width="45%"
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
  width="45%"
  caption="RAK Serial Port Tool join LoRaWAN in ABP mode."
/>



9. Try to send data from RAK4600 Breakout Board to ChirpStack.

```
at+send=lora:2:1234567890
```
The console will feedback with an “OK” message.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/abp-send-reply.png"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

The sent data shall be displayed on the ChirpStack console on “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-chirpstack/chirpstack-console-abp-uplink.png"
  width="1000%"
  caption="ChirpStack Console UPLINK LoRaWAN Frame in ABP mode."
/>


### LoRa P2P
Refer to <a href="/Product-Categories/WisDuo/RAK4600-Module/Quickstart/#lora-p2p-mode" target="_blank">LoRa P2P guide.</a>

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

5. In the “**Secure DFU Service**”, click the button highlighted in red in Figure 71.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="65%"
  caption="Buttonless DFU"
/>

6. Click the arrow highlighted in Figure 72. A Write value pop-up window will appear and press “**Send**”.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="65%"
  caption="Resetting the Bootloader via Bluetooth"
/>

7. Now, the RAK4600 Breakout Board is now working in DFU Mode. In the application, you will see the the default status of the breakout board as shown in Figure 73.

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

