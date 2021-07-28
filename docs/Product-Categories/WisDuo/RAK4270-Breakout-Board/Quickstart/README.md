---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK4270 Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak4270-breakout-board/overview/RAK4270_home.svg
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK4270 Breakout Board
  - wisduo
  - quickstart
---

# RAK4270 Breakout Board Quick Start Guide

This guide covers the following topics:

- [The Things Stack (TTN V3) OTAA Guide](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#the-things-stack-otaa-device-registration)
- [RAK4270 OTAA AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#rak4270-otaa-configuration-for-the-things-stack)
- [The Things Stack (TTN V3) ABP Guide](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#the-things-stack-abp-device-registration)
- [RAK4270 ABP AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#rak4270-abp-configuration-for-the-things-stack)
- [Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#configure-the-otaa-mode-on-the-platform)
- [RAK4270 OTAA AT Commands for Chirpstack](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#configure-the-otaa-mode-on-the-rak4270-breakout-board)
- [Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#configure-the-abp-mode-on-the-platform)
- [RAK4270 ABP AT Commands for Chirpstack](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#configure-the-abp-mode-on-the-rak4270-breakout-board)
- [LoRa P2P Guide](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#lora-p2p-mode)
- [Updating RAK4270 FW Procedure](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#upgrading-the-firmware)

## Prerequisites

### What Do You Need?

Before going through each and every step in the installation and guide of the RAK4270 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. **RAK4270 Breakout Board**
2. USB-UART Module [(RAKDAP1 Tool)](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/)
3. Gateway in Range for Testing
4. Jumper Wires
5. 3.3&nbsp;V Battery Power Supply
6. A Windows/Mac OS/Linux Computer

#### Software Tools
1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools)
2. [RAK4270 Firmware](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#firmware)
3. [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)


::: tip 📝 NOTE
The bootloader of the RAK4270 Breakout Board is already pre-installed upon manufacturing so flashing the bootloader is not necessary for you to perform. If you find that the bootloader of your RAK4270 Breakout Board damaged, contact RAK support through [RAKwireless forum](https://forum.rakwireless.com/). However, if you want to [upgrade the firmware](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Quickstart/#upgrading-the-firmware) of the device, refer to the miscellaneous section of this document.
:::

### What's Included in the Package?

- 1 pc - RAK4270 Breakout Board (chipset pre-soldered on the board)
- 1 pc - LoRa Antenna

### List of Acronyms

| Acronym | Definition                          |
| ------- | ----------------------------------- |
| DFU     | Device Firmware Upgrade             |
| JTAG    | Joint Test Action Group             |
| LoRa    | Long Range                          |
| OTAA    | Over-The-Air-Activation             |
| ABP     | Activation-By-Personalization (ABP) |
| TTN     | The Things Network                  |
| TTS     | The Things Stack                    |

## Product Configuration

### Interfacing with RAK4270 Breakout Board

RAK4270 Breakout Board can be configured using AT commands via the UART interface. You need a USB to UART TTL adapter to connect the RAK4270 board to the PC's USB port and a serial terminal tool.

You can use [RAKDAP1](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#product-description) as the USB to the UART interface device. RAKDAP1 is compatible with other RAK modules and can be used as a debugging tool and firmware uploader. It is also highly recommended to use [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools) so you can easily send AT commands and view the replies from its console output.


::: warning ⚠️ WARNING
Before powering the RAK4270 Breakout Board, make sure you have installed the LoRa antenna first. Not doing so might damage the board.
:::

#### USB to UART

- Connect your RAK4270 Breakout Board to the USB-UART interface as shown in Figures 1 and 2. 
- UART1 is used for AT commands input as well as firmware update. Check [RAK4270 Breakout Board Pin Definition](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#pin-definition) on the datasheet for complete details.

<rk-img
 src="/assets/images/wisduo/rak4270-breakout-board/quickstart/interfacing-with-rak4270-breakout/rakdap1torak4270bb.jpg"
  width="80%"
  caption="RAK4270 Breakout Board Connected to RAKDAP1 USB-UART Interface"
/>

<rk-img
 src="/assets/images/wisduo/rak4270-breakout-board/quickstart/interfacing-with-rak4270-breakout/uart_conn.jpg"
  width="50%"
  caption="RAK4270 Breakout Board to USB Uart Module Connection"
/>

- Connect your USB - UART Module to your Windows PC and open RAK Serial Port Tool then select the right COM port and baud rate.

<rk-img
 src="/assets/images/wisduo/rak4270-breakout-board/quickstart/interfacing-with-rak4270-breakout/rib8pvikbtggt9xryvxp.png"
  width="80%"
  caption="Correct Port Number and Baud rate"
/>


### Connecting to The Things Stack (TTN V3)

This section will show how to connect the RAK4270 board to The Things Stack (TTN V3) platform. 

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/4.ttn-context.png"
  width="95%"
  caption="The Things Stack diagram"
/>

As shown in Figure 4, The Things Stack is an open source LoRaWAN Network Server suitable for global, geo-distributed public and private deployments as well as for small, local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliancy and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide area networks. It allows for large scale Internet of Things deployments where low-powered devices efficiently communicate with Internet-connected applications over long-range wireless connections.

The RAK4270 Breakout Board can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to The Things Stack using the LoRaWAN protocol. To achieve this, the RAK4270 board must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server. 


#### Registration to TTN and Creating LoRaWAN Applications

The first step is to go to [The Things Network platform](https://console.cloud.thethings.network/) and select a cluster as shown in Figure 5. The Things Industries adds more clusters from time to time so select the one closes to your location. In this guide, Europe 1 is selected.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_1.png"
  width="100%"
  caption="Selecting Cluster in TTN V3"
/>

You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

To register as a new user to TTN, click on **Login with The Things ID** then select **register** on the next page as shown in Figures 6 and 7.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_2.png"
  width="100%"
  caption="Login using TTN account"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_3.png"
  width="100%"
  caption="Registration of new account"
/>

You should now be on the step of creating your TTN account. Fill in all the necessary details and activate your account.

After creating an account, you should log in on the platform using your username/email and password then click **Submit** as shown in Figure 8.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_4.png"
  width="100%"
  caption="Logging in to TTN platform"
/>

You need to click **Authorize** to proceed.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_5.png"
  width="100%"
  caption="Authorization to TTN"
/>

Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_6.png"
  width="100%"
  caption="Creating TTN application for your LoRaWAN devices"
/>

To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.
 
<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_7.png"
  width="100%"
  caption="Details of the TTN application"
/>

If you have no error on the previous step, you should now be on the application console page. The next step is to add end devices to your The Things Stack application. LoRaWAN specification enforces that each end device has to be personalized and activated. There are two options on registering devices depending on the activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

:::tip 📝 NOTE:

Once you have the application in The Things Stack (TTN V3), you need to ensure that you are in coverage of a LoRaWAN gateway that is registered to The Things Stack (TTN V3) as well. Without the coverage of that LoRaWAN gateway, you cannot activate any device that you will register in your application. 

RAKwireless have [LoRaWAN gateways](https://store.rakwireless.com/collections/wisgate) that you can connect to The Things Stack (TTN V3) if no LoRaWAN gateway coverage is available in your location.

:::

#### The Things Stack OTAA Device Registration

You need to go to your application console to be able to register a device. To start adding an OTAA end-device, you need to click **+ Add end device** as shown in Figure 12.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Over the air activation (OTAA)** and compatible **LoRaWAN version** then click **Start** button as shown in Figures 13 and 14.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_10.png"
  width="100%"
  caption="Device activation configuration"
/>

Then you need to put a unique **End device ID** and EUIs (**DevEUI** and **AppEUI**) as shown in Figure 15. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed to the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device` is for illustration purpose only.

:::

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_11.png"
  width="100%"
  caption="OTAA Device Information"
/>

Next step is to set up **Frequency plan**, compatible **Regional Parameter version**, and **LoRaWAN class** supported. Then you can click **Join settings**.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_12.png"
  width="100%"
  caption="OTAA Configuration"
/>

The last step in the registration of a new OTAA end device is the configuration of the **AppKey**. To get the AppKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_13.png"
  width="100%"
  caption="OTAA AppKey generation and device registration"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 18.

:::tip 📝 NOTE:

The **AppEUI**, **DevEUI** and **AppKey** are the parameters that you will need to activate your LoRaWAN end device via OTAA. The **AppKey** is hidden by default for security reason but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

The three OTAA parameters on The Things Stack device console are MSB by default. 

These parameters are always accessible on the device console page as shown in Figure 18.
:::

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_14.png"
  width="100%"
  caption="OTAA device successfully registered to The Things Stack"
/>


#### RAK4270 OTAA Configuration for The Things Stack

The RAK4270 Breakout Board supports a series of AT commands to configure its internal parameters and control the functionalities of the module. To set up the RAK4270 board to join The Things Stack using OTAA, start by connecting the RAK4270 board to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>


As an example, these are the list of the parameters you need to configure in RAK4270: 

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

* Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.


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
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/14.lora-parameters.png"
  width="90%"
  caption="Configuring LoRa Parameters"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4270 Breakout Board for saving the parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, then you should see the messages shown in Figure 21.

8. Try to send a message from the RAK4270 board.

```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/15.send-message.png"
  width="90%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4270 board on The Things Stack platform as shown in Figure 22.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/otaasend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>


#### The Things Stack ABP Device Registration

To register an ABP device, you need to go to your application console and select the application where you want your device to be added. Then you need to click **+ Add end device** as shown in Figure 23.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Activation by personalization (ABP)**, compatible **LoRaWAN version** and click **Start** button as shown in Figures 24 and 25.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Add end device"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/image_1_abp.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

At this step, you need to put a unique **End device ID** and **DevEUI** as shown in Figure 26. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed on the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device-abp` is for illustration purpose only.

:::

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/image_2_abp.png"
  width="100%"
  caption="Device Information"
/>

Next step is to setup **Frequency plan**, compatible **Regional Parameter version**, and **LoRaWAN class** supported. In an ABP device, you also need to generate **Device Address** and **NwkSKey** (Network Session Keys). Then you can click **Application layers settings**.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/image_3_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

The last step in the registration of a new ABP end device is the configuration of the **AppSKey**. To get the AppSKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/image_4_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 29.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/image_5_abp.png"
  width="100%"
  caption="RAK4270 registered at The Things Stack"
/>

#### RAK4270 ABP Configuration for The Things Stack

To set up the RAK4270 Breakout Board to join The Things Stack using ABP, start by connecting the RAK4270 board to the Computer (see Figure 1) and open the RAK Serial Port  Tool. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4270: 

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

- Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.

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
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/21.abp-at-commands.png"
  width="90%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset RAK4270 Breakout Board for saving the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4270 board, it is still required to send `at+join` command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::

8. Try to send a data from the RAK4270 to The Things Network in ABP mode.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/15.send-message.png"
  width="90%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4270 board on the The Things Stack device console *Live data* section and the *Last seen* info should be few seconds ago.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/abpsend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>


### Connecting with ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. Like the case of TTN, the RAK4270 Breakout Module is located in the periphery and transmit the data to the backend servers through a LoRa gateway. Learn more about [ChirpStack](https://www.chirpstack.io/).


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/22.chirpstack-platform.png"
  width="60%"
  caption="RAK4270 Breakout Board in the Context of the ChirpStack Platform"
/>


:::tip 📝 NOTE:

In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. Also, the RAK Gateway with the ChirpStack must be configured successfully. For further information, check the RAK documents for more details.

:::

In this section, you need the following requirements:

  1. Have ChirpStack online gateway, the frequency band of the nodes should be consistent with the frequency band of the gateway in use.
      *	[Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)
  2.	The RAK Serial Port Tool provided by RAK
  3.	RAK4270 Breakout Board

:::tip 📝 NOTE:
The frequency band used in the test is EU868, use the high-frequency version of RAK4270 Breakout Board.
:::


Before you start, you must choose which mode you are going to use, whether in OTAA or ABP mode, to register the device to the network server.


<b>Sign up and login</b>

Login to the ChirpStack server using your account and password.

#### Create a New Application

Go to the Application section as shown in the Figure 35.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/23.chirpstack.png"
  width="100%"
  caption="Application Section"
/>

By default, you should create a new Application, although you can reuse the existing ones. For this setup, create a new Application by clicking on the “**CREATE**” button, and fill the required parameters as shown in the Figures 36 and 37.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/24.new-application.png"
  width="100%"
  caption="Creating a New Application"
/>

* For this setup, create an Application named “**rak_node_test**”.


ChirpStack LoraServer supports multiple system configurations, with only one by default. 

* **Service profile**: field is to select the system profile.
* **Payload codec**: the parsing method for selecting load data such as parsing LPP format data.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/25.filling-parameters.png"
  width="100%"
  caption="Filling Parameters of an Application"
/>

<b>Register a New Device</b>

1. Choose the **Application** created in the previous step, then select the **DEVICES** tab as shown in Figures 38 and 39.


2. Once done, click “**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/26.application-available.png"
  width="100%"
  caption="List of Applications Created"
/>


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/27.application-page.png"
  width="100%"
  caption="Device Tab of an Application"
/>

3. Once inside of the DEVICE tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/28.adding-node.png"
  width="100%"
  caption="Add a New Device"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/29.new-device-registration.png"
  width="100%"
  caption="New Device Registration Form"
/>

6. Once the node is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.

Fill the parameters requested:

* **Device name and Device description**: These are descriptive texts about your device. 
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 42. You can also add a specific Device EUI directly in the form. 
* **Device Profile**: 
  * If you want to join in OTAA mode, select “**DeviceProfile_OTAA**”.
  * If you want to join in ABP mode, select “**DeviceProfile_ABP**”.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/30.adding-parameters.png"
  width="100%"
  caption="Generate a New Device EUI"
/>

#### LoRaWAN Join Mode

In LoRaWAN, there are two (2) ways a node can connect itself to the LoRaWAN network. This is referred to as **Join Mode**. LoRaWAN allows both the OTAA mode and the ABP mode. In this section, the configuration process of these two modes, both on the platform side and the node side, will be explained.


##### OTAA Mode

###### Configure the OTAA Mode on the Platform


1. If you have selected “**DeviceProfile_OTAA**” as shown in Figure 43, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/31.otaa.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in Figure 44.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/32.otaa-set-device-keys.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 45, a new device should be listed in the DEVICES tab. The most important parameters, such as the Device EUI are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/33.list-device.png"
  width="100%"
  caption="Chirpstack OTAA List of Device in the Device Tab"
/>


4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the **KEYS(OTAA)** tab as shown in Figure 46.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/34.application-key.png"
  width="100%"
  caption="Application Key Associated with the New Device"
/>


:::tip 📝 NOTE:

Standard OTAA mode requires the **Device EUI**, **Application Key**, and the **Application EUI**. But in the ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is neither required nor recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4270 Breakout Board firmware. To resolve this mismatch, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 

:::

###### Configure the OTAA mode on the RAK4270 Breakout Board


The RAK4270 Breakout Board supports a series of [AT commands](/Product-Categories/WisDuo/RAK4270-Breakout-Board/AT-Command-Manual/) to configure its internal parameters and control the functionalities of the module. 

To set up the RAK4270 Breakout to join ChirpStack using OTAA, start by connecting the board to the computer (see Figure 2) and open the RAK Serial Port  Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:


```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="at+version command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4270 Breakout Board: 

- LoRa join mode: **OTAA**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device EUI: **5e9d1e0857cf25f1**
- Application EUI: **5e9d1e0857cf25f1**
- Application Key: **f921d50cd7d02ee3c5e6142154f274b2**


1. Set the LoRa join mode to OTAA.

```
at+set_config=lora:join_mode:0
```

2. Set the LoRa class to Class A.

```
at+set_config=lora:class:0
```

3. Set the frequency/region to EU868. 

- Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.


```
at+set_config=lora:region:EU868
```

4. Set the Device EUI.

```
at+set_config=lora:dev_eui:5e9d1e0857cf25f1
```

5. Set the Application EUI.

```
at+set_config=lora:app_eui:5e9d1e0857cf25f1
```

:::tip 📝 NOTE:

The App EUI parameter is not needed for the ChirpStack platform; therefore, you will use the same ID as the Device EUI. Otherwise, the firmware will fail connecting to the network server. 


::: 

6. Set the Application Key.

- Get the Application Key from the TTN register.


```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/36.configure-lora-parameters.png"
  width="45%"
  caption="Chirpstack OTAA configuration via RAK Serial Port Tool"
/>


:::tip 📝 NOTE:
After configuring all the parameters, you need to reset your RAK4270 Breakout Board to save the parameters.
:::

7. After resetting, start to join.

```
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/37.otaa-join-chirpstack.png"
  width="45%"
  caption="Chirpstack OTAA Join the Network via RAK Serial Port Tool"
/>


8. You can then see the JoinRequest and JoinAccept on ChirpStack page.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/38.chirpstack-console.png"
  width="100%"
  caption="Checking LoRaWAN Joint Request in Chirpstack OTAA Console"
/>


9. Try to send a data from RAK4270 Breakout Board to ChirpStack.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/39.send-message-chirpstack.png"
  width="45%"
  caption="Send a LoRaWAN Message via RAK Serial Port Tool"
/>

- On the ChirpStack platform, you should also see the messages in the LORAWAN FRAMES tab as shown in Figure 52. Note, by convention, messages sent from nodes to gateways are considered as **Uplinks** while messages sent by gateways to nodes are considered as **Downlinks**. 


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/40.message-received.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

This concludes the exercise to send data in the OTAA mode.


##### ABP Mode

###### Configure the ABP Mode on the Platform

During the registration of a new device, if you select **DeviceProfile_ABP**”, as shown in Figure 53, then the ChirpStack platform will assume that this device will join to the LoRaWAN network using the ABP mode. 

:::tip 📝 NOTE:

Check “**Disable counting frame verification**”. During the test, when the module is restarted, the frame counting number will be also be restarted from zero. This would cause a synchronization problem with the ChirpStack server treating it as a replay attack. For the testing purpose, it is safe to disable this feature, but remember to activate it in a production environment.

:::


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/41.configuring-device-abp.png"
  width="100%"
  caption="ChirpStack Console, Configuring a Device"
/>

After selecting the ABP mode, the following parameters appear in the Activation tab: 

*	**Device address**
*	**Network Session Key**
*	**Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/42.abp-activation-parameters.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**ACTIVATE DEVICE**” button.

###### Configure the ABP mode on the RAK4270 Breakout Board

In the following steps, you will configure the RAK4270 Breakout Board to work in the ABP mode. To set up the RAK4270 Breakout Board to join ChirpStack using ABP, start by connecting the board to the computer (see Figure 2) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="at+version command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4270 Breakout Board: 

- LoRa join mode: **ABP**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device address: **26011af9**
- Network Session Key: **c280cb8d1df688bc18601a97025c5488**
- Application Session Key: **4d42ec5caf97f03d833cdaf5003f69e1**

1. Set LoRa join mode to ABP.

```
at+set_config=lora:join_mode:1
```

2. Set LoRa class to Class A.

```
at+set_config=lora:class:0
```

3. Set the frequency/region to EU868. 

- Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.

```
at+set_config=lora:region:EU868
```

4. Set the Device Address. 

```
at+set_config=lora:dev_addr:26011af9
```

5. Set the Network Session Key.

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6. Set the Application Session Key.

```
at+set_config=lora:apps_key:4d42ec5caf97f03d833cdaf5003f69e1
```


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/44.configure-abp-parameters.png"
  width="45%"
  caption="Chirpstack ABP Parameters Configuration via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4270 Breakout Board to save the parameters.

:::

7. After resetting RAK4270 Breakout Board, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN protocol, it doesn’t require to join a network before sending LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4270 Breakout Board, it still required to send at+join command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::


8. Try to send a data from RAK4270 Breakout Board to ChirpStack.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/45.data-sent-abp.png"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

### LoRa P2P Mode

This section will show you how to set up and connect two RAK4270 Breakout Board units to work in the LoRa P2P mode. You will be using EU868 as your frequency, although it is applicable also to other standard bands.

1. Two RAK4270 Breakout Board units shall be set to operate on EU868 frequency. 

2. The setup of the RAK4270 board units is done by connecting then with a general-purpose computer through the UART port. The setup of each RAK4270 Breakout Board can be done separately but testing the LoRa P2P mode will require having both units connected simultaneously to its respective UART port. This could be one computer with two USB ports or two computers with one USB port each.

3. Set the RAK4270 Breakout Board to work in LoRa P2P mode. Open the RAK Serial Port Tool and send the following command:

```
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/46.lora-p2p.png"
  width="45%"
  caption="P2P Initialization"
/>


4. Then, configure LoRa P2P parameters for both of them.


```
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```


For this example, the LoRa parameters are the following:

- Link frequency: **869525000&nbsp;Hz**
- Spreading factor: **7**
- Bandwidth: **125&nbsp;kHz**
- Coding Rate: **4/5**
- Preamble Length: **5**
- Power: **5&nbsp;dBm**

:::tip 📝 NOTE:

Refer to the [Configuring Using AT Commands](/Product-Categories/WisDuo/RAK4270-Breakout-Board/AT-Command-Manual/#rak4270-breakout-board-at-command-manual) section to learn more about the definition of the parameters used.

:::

Hence, it is translated into the following RAK4270 Breakout Board AT command and send to both units.

```
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/48.configuring-p2p.png"
  width="45%"
  caption="Configuring P2P in both RAK4270 Breakout Board"
/>

5. Set the transmission mode of the module. Unit 1 is configured as the sender, and Unit 2 is set to the receiver by AT command.

```
at+set_config=lorap2p:transfer_mode:2
```

```
at+set_config=lorap2p:transfer_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/49.mode-setting.png"
  width="80%"
  caption="Setting Modes in both RAK4270 Breakout Board"
/>



6. Try to send a message from Unit 1 to Unit 2. 

```
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/50.sending-message.png"
  width="80%"
  caption="Message sent and received status in the two modules"
/>


## Miscellaneous

### Upgrading the Firmware

Before you start working with the RAK4270 Breakout Board, it is recommended to keep the board updated to the latest version of the firmware. Download the latest [RAK4270 firmware](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#software).


In the following sections, two (2) options for flashing new firmware in the RAK4270 Breakout Module are shown: **Upgrade through DAPLink** and **Upgrade through UART1**.

#### Firmware Upgrade Through DAPLink

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool) guide in the Accessories Category.

#### Firmware Upgrade Through UART1

##### Minimum Hardware and Software Requirements

Refer to the table for the minimum hardware and software required to perform the firmware upgrade using J-Link.

| Hardware/Software | Requirement                                   |
| ----------------- | --------------------------------------------- |
| Computer          | A Windows/Ubuntu/Mac computer                 |
| Firmware File     | Bin firmware file downloaded from the website |
| Others            | A USB to TTL module                           |


##### Firmware Upgrade Procedure

Execute the following procedure to upgrade the firmware in Device Firmware Upgrade (DFU) mode through the UART1 interface.

1.	Download the latest application firmware of the RAK4270 Breakout Board.

    - [RAK4270 Firmware](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#software)


2.	Download the RAK Device Firmware Upgrade (DFU) tool. 
    - [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)

3.	Connect the RAK4270 Breakout Board with a computer through a USB to TTL.

4.	Open the Device Firmware Upgrade tool. Select the serial port and baud rate of the module and click the "Select Port" button.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/56.device-firmware.png"
  width="80%"
  caption="Device Firmware Upgrade Tool"
/>


5.	Select the application firmware file of the module with the suffix "**.bin**".

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/57.select-firmware.png"
  width="80%"
  caption="Select Firmware"
/>

6.	Click the "Upgrade" button to upgrade the device. After the upgrade is complete, the RAK4270 Breakout Board will be ready to work with the new firmware.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/58.firmware-upgrading.png"
  width="80%"
  caption="Firmware Upgrading"
/>


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/59.upgrade-success.png"
  width="80%"
  caption="Upgrade Successful"
/>




