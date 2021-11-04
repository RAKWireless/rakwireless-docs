---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK811 Breakout Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak811-breakout-board/quickstart/overview/RAK811_Breakout_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK811 Breakout Board
  - wisduo
  - quickstart
---

# RAK811 Breakout Board Quick Start Guide

This guide covers the following topics:

- [The Things Stack (TTN V3) OTAA Guide](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#the-things-stack-otaa-device-registration)
- [RAK811 OTAA AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#rak811-otaa-configuration-for-the-things-stack)
- [The Things Stack (TTN V3) ABP Guide](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#the-things-stack-abp-device-registration)
- [RAK811 ABP AT Commands for The Things Stack](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#rak811-abp-configuration-for-the-things-stack)
- [Chirpstack OTAA Guide and AT Commands](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#otaa-mode)
- [Chirpstack ABP Guide and AT Commands](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#abp-mode)
- [LoRa P2P Guide](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#lora-p2p-mode)
- [Updating RAK811 FW Procedure](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#upgrading-the-firmware)

## Prerequisites

<!--
<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/quick-start-guide/dzsrvm2eaasyt3shktdh.png"
  width="35%"
  caption="RAK811 Breakout Board"
/>
--->

### What Do You Need?

Before going through each and every step in the installation and guide of the RAK811 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. **RAK811 Breakout Board**
2. RAKDAP1 Flash and Debug Tool
3. Gateway in Range for Testing
4. Jumper Wires
5. 3.3 V Battery Power Supply
6. A Windows/Mac OS/Linux Computer

#### Software Tools
1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools)
2. [RAK811 Breakout Board Firmware](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#firmware-os)
3. [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)


::: tip 📝 NOTE
The bootloader of the RAK811 Breakout Board is already pre-installed upon manufacturing, so flashing the bootloader is not necessary for you to perform. If you find that the bootloader of your RAK811 Breakout Board damaged, kindly contact our support though our [RAKwireless forum](https://forum.rakwireless.com/). However, if you want to [upgrade the firmware](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#upgrading-the-firmware) of the device, refer to the miscellaneous section of this document.
:::

### What's included in the package?

- 1 pc - RAK811 Breakout Board (chipset pre-soldered on the board)
- 1 pc - LoRa Antenna

## Product Configuration

### Interfacing with RAK811 Breakout Board

RAK811 Breakout Board can be configured using AT commands via UART interface. You need a USB to UART TTL adapter to connect the RAK811 to PC's USB port and a serial terminal tool. It is highly recommended to use [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools) so you can easily send AT commands and view the replies from the console output.


::: warning ⚠️ WARNING
Before powering the RAK811 Breakout Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

- Connect your RAK811 Breakout Board with the following diagram below.
- **Figure 1** shows the Pinout Diagram of the Board and **Figure 2** shows how to connect the RAK811 Breakout Board to the RAKDAP1.

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/pinout_diagram.png"
  width="50%"
  caption="RAK811(H) Breakout Board Pinout Diagram"
/>

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/RAK811_Diagram.svg"
  width="70%"
  caption="RAKDAP1 to RAK811 Breakout Board Connection"
/>

- Connect your RAKDAP1 Flash and Debug Tool to your Windows Machine then open RAK Serial Port Tool and select the right COM port:

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/rib8pvikbtggt9xryvxp.png"
  width="80%"
  caption="Correct Port Number and Correct Baud rate"
/>


### Connecting to The Things Stack (TTN V3)

This section will show how to connect the RAK811 Breakout Board to The Things Stack (TTN V3) platform. 

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/4.ttn-context.png"
  width="95%"
  caption="The Things Stack diagram"
/>

As shown in Figure 4, The Things Stack is an open source LoRaWAN Network Server suitable for global, geo-distributed public and private deployments as well as for small, local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliancy and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide-area networks. It allows for large scale Internet of Things deployments where low-powered devices efficiently communicate with Internet-connected applications over long range wireless connections.

The RAK811 Board can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to The Things Stack using the LoRaWAN protocol. To achieve this, the RAK811 Board must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server. 


#### Registration to TTN and Creating LoRaWAN Applications

The first step is to go to [The Things Network platform](https://console.cloud.thethings.network/) and select a cluster as shown in Figure 5. The Things Industries adds more clusters from time to time so select the one closes to your location. In this guide, Europe 1 is selected.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_1.png"
  width="100%"
  caption="Selecting Cluster in TTN V3"
/>

You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

To register as a new user to TTN, click on **Login with The Things ID** then select **register** on the next page as shown in Figures 6 and 7.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_2.png"
  width="100%"
  caption="Login using TTN account"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_3.png"
  width="100%"
  caption="Registration of new account"
/>

You should now be on the step of creating your TTN account. Fill all the necessary details and activate your account.

After creating an account, you should log in on the platform using your username/email and password then click **Submit** as shown in Figure 8.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_4.png"
  width="100%"
  caption="Logging in to TTN platform"
/>

You need to click **Authorize** to proceed.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_5.png"
  width="100%"
  caption="Authorization to TTN"
/>

Now that you are logged in to the platform, the next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_6.png"
  width="100%"
  caption="Creating TTN application for your LoRaWAN devices"
/>

To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.
 
<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_7.png"
  width="100%"
  caption="Details of the TTN application"
/>

If you have no error on the previous step, you should now be on the application console page. The next step is to add end-devices to your The Things Stack application. LoRaWAN specification enforce that each end device has to be personalized and activated. There are two options in registering devices depending on the activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

:::tip 📝 NOTE:

Once you have the application in The Things Stack (TTN V3), you need to ensure that you are in coverage of a LoRaWAN gateway that is registered to The Things Stack (TTN V3) as well. Without the coverage of that LoRaWAN gateway, you cannot activate any device that you will register in your application. 

RAKwireless has [LoRaWAN gateways](https://store.rakwireless.com/collections/wisgate) that you can connect to The Things Stack (TTN V3) if no LoRaWAN gateway coverage available in your location.

:::

#### The Things Stack OTAA Device Registration

You need to go to your application console to be able to register a device. To start adding an OTAA end device, you need to click **+ Add end device** as shown in Figure 12.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Over the air activation (OTAA)** and compatible **LoRaWAN version** then click **Start** button as shown in Figures 13 and 14.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_10.png"
  width="100%"
  caption="Device activation configuration"
/>

Then you need to put a unique **End device ID** and EUIs (**DevEUI** and **AppEUI**) as shown in Figure 15. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed to the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device` is for illustration purposes only.

:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_11.png"
  width="100%"
  caption="OTAA Device Information"
/>

Next step is to setup **Frequency plan**, compatible **Regional Parameter version**, and **LoRaWAN class** supported. Then you can click **Join settings**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_12.png"
  width="100%"
  caption="OTAA Configuration"
/>

The last step in the registration of a new OTAA end-device is the configuration of the **AppKey**. To get the AppKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_13.png"
  width="100%"
  caption="OTAA AppKey generation and device registration"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 18.

:::tip 📝 NOTE:

The **AppEUI**, **DevEUI** and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reasons but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

The three OTAA parameters on The Things Stack device console are MSB by default. 

These parameters are always accessible on the device console page as shown in Figure 18.
:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_14.png"
  width="100%"
  caption="OTAA device successfully registered to The Things Stack"
/>


#### RAK811 OTAA Configuration for The Things Stack

The RAK811 Board supports a series of AT commands to configure its internal parameters and control the functionalities of the module. To set up the RAK811 Board to join The Things Stack using OTAA, start by connecting the RAK811 Board to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>


As an example, these are the list of the parameters you need to configure in RAK811: 

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

* Refer in the [RAK811 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.


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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/14.lora-parameters.png"
  width="90%"
  caption="Configuring LoRa Parameters"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK811 Board for saving the parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request is successfully received by a LoRa gateway, then you should see the messages shown in Figure 21.

8. Try to send a message from the RAK811 Board.

```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/15.send-message.png"
  width="90%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK811 Board on The Things Stack platform as shown in Figure 22.


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/otaasend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>


#### The Things Stack ABP Device Registration

To register an ABP device, you need to go to your application console and select the application where you want your device to be added. Then you need to to click **+ Add end device** as shown in Figure 23.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the activation method by selecting **Activation by personalization (ABP)**, compatible **LoRaWAN version** and click **Start** button as shown in Figures 24 and 25.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/t_image_9.png"
  width="100%"
  caption="Add end device"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/image_1_abp.png"
  width="100%"
  caption="Manually register device to The Things Stack"
/>

At this step, you need to put a unique **End device ID** and **DevEUI** as shown in Figure 26. Check if your module has a DevEUI on sticker or QR that you can scan then use this as the device unique DevEUI.

Optionally, you can add a more descriptive **End device name** and **End device description** about your device.

After putting all the details, you need to click **Network layer settings** to proceed to the next step.

:::tip 📝 NOTE:

It is advisable to use a meaningful End device ID, End device name, and End device description that will match your device purpose. The End device ID `rak-device-abp` is for illustration purposes only.

:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/image_2_abp.png"
  width="100%"
  caption="Device Information"
/>

Next step is to set up **Frequency plan**, compatible **Regional Parameter version** and **LoRaWAN class** supported. In an ABP device, you also need to generate **Device Address** and **NwkSKey** (Network Session Keys). Then you can click **Application layers settings**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/image_3_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

The last step in the registration of a new ABP end device is the configuration of the **AppSKey**. To get the AppSKey, you must click the **generate button**. Then you need to click **Add end device** to finish your new device registration.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/image_4_abp.png"
  width="100%"
  caption="ABP Configuration in The Things Stack"
/>

You should now be able to see the device on The Things Stack console after you fully registered your device as shown in Figure 29.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/image_5_abp.png"
  width="100%"
  caption="RAK811 registered at The Things Stack"
/>

#### RAK811 ABP Configuration for The Things Stack

To set up the RAK811 Board to join The Things Stack using ABP, start by connecting the RAK811 Board to the Computer (see Figure 1) and open the RAK Serial Port  Tool. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-module/quickstart/3.command-response.png"
  width="90%"
  caption="AT Command response"
/>

As an example, these are the list of the parameters you need to configure in RAK811: 

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

- Refer in the [RAK811 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.

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
  src="/assets/images/wisduo/rak811-module/quickstart/21.abp-at-commands.png"
  width="90%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset RAK811 Board for saving the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK811 Board, it still required to send at+join command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::

8. Try to send a data from the RAK811 to The Things Network in ABP mode.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak811-module/quickstart/15.send-message.png"
  width="90%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK811 Board on the The Things Stack device console *Live data* section and the *Last seen* info should be a few seconds ago.

<rk-img
  src="/assets/images/wisduo/rak811-module/quickstart/abpsend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Stack"
/>

### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. To learn more about ChirpStack, visit their [**website**](https://www.chirpstack.io/).

You can use RAK811 Breakout Board to connect with ChirpStack according to the following steps:


:::tip 📝 NOTE:

In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. Also, the [RAK Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack) must be configured successfully.

:::

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more items in this page. You can either use it or create a new item, but for this, create a new item by clicking the “**CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/xlubsj8qfhs9o1wqg3ao.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/jjfxkdc14hrwxavqnejk.png"
  width="100%"
  caption="Creating the Application"
/>

4. Click the new item name “**RAKwireless_Test_Application**”:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/huqfi7q0iuvj3peoerje.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/zvda6jcwtxr1ci2fvdqc.png"
  width="100%"
  caption="RAK811 Breakout Board Application"
/>

5. **Add** a Node device into ChirpStack by clicking the “**CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/o86hkpxcz88w3gtgq3rr.png"
  width="100%"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/kdmfb9lhoygt8lxczsew.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

::: tip 📝 NOTE
- If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. 
- If you want to join in ABP mode and CN470 frequency, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item.
- If you want to join in ABP mode and other frequencies except AS923 and CN470, select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::


#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/vy0kq5njvnuzo49ivkd5.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in Figure 41.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ojwnskkac1njlitkurvr.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI, which was set in the previous section to your RAK811 Breakout Board as "dev_eui" is the same as highlighted in Figure 42.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/tvgeeoltqkzdne3ya5qw.png"
  width="100%"
  caption="Device EUI Code"
/>

- The same with the Application Key, it was also set in the previous section as "app_key", and it should be the same as highlighted in Figure 43.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/j0gh8yxjinczq4m7rxo1.png"
  width="100%"
  caption="Application Key LoRaWAN"
/>

::: tip 📝 NOTE
The Application EUI which was into RAK811 Breakout Board as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, **configure** RAK811 Breakout Board by using **AT commands**. To do this, connect your RAK811 Breakout Board to a PC, power it on and open **RAK Serial Port Tool** on your computer.

```sh
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/fqw3e70otnu8ymgnmu79.png"
  width="45%"
  caption="RAK Serial Port Tool"
/>

- Now, join your RAK811 Breakout Board using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa join mode to **OTAA** and LoRa class to **Class A** by typing the AT commands shown in Figure 45.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config-lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/mdjpe1uhxdmahhthbt8w.jpg"
  width="90%"
  caption="Setting of LoRaWAN mode and class"
/>

6. Type the following AT command to set the **Frequency/Region**, **Device EUI**, **Application EUI**, and **Application Key**. Remember to replace "**XXX"** and "**XXXX"** with the parameters set in the previous steps.

```sh
at+set_config=lora:region:EU868
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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/vugtbybavkertynte382.jpg"
  width="90%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/rkeautvpyyd4oquhxvgq.jpg"
  width="90%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/xlebk2u3xe2ryxo5ss11.png"
  width="45%"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on the ChirpStack page.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ll6wmv6jqlnyhpxgaovj.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Try sending data from the RAK811 Breakout Board to the ChirpStack by typing the command below in the serial port.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/j7c4lszbgth963mh6kea.png"
  width="45%"
  caption="Sending Data to ChirpStack"
/>

You can see the message on ChirpStack page as shown in Figure 51.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ovefavt84zya1aepa2kk.png"
  width="100%"
  caption="Message Received in ChirpStack"
/>



#### ABP Mode

1. If you select “**DeviceProfile_ABP**” or "**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning ⚠️ WARNING
Frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/bhpdwgda7tdz2eqduf4b.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

2. Then, you can see that there are some parameters for ABP in the “**ACTIVATION**” item.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/ypjzi1ho8i1edi2so2ak.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

3. Use these parameters to set RAK811 Breakout Board by using AT command. To set **LoRa join** mode to **ABP**, type the following command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa class to **Class A**.

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/kkm5pwzhi44aif78akij.jpg"
  width="45%"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**.

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/hybihb6l6knq8lccnm1h.jpg"
  width="45%"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Tool"
/>

6. Set the **Device Address**.

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/tpqvwwbxnmlwzqcfgozy.jpg"
  width="45%"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**.

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/gzryq4icdnjuxykqgfhz.jpg"
  width="45%"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**.

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/czhbmtdl7or1c2d6katt.jpg"
  width="45%"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all the parameters, you need to reset your RAK811 Breakout Board to save the parameters.
:::

9. After resetting RAK811 Breakout Board, join in ABP mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
Actually, it is not needed to join in ABP mode, but you still need to set this AT command to validate the parameters you just set for ABP mode.
:::

10. Try to send a data from RAK811 Breakout Board to ChirpStack.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK811 Breakout Board on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/hqqusvgjrzhbgouuqf36.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>


### LoRa P2P Mode

This section shows how to use LoRa P2P mode. You will be using EU868 as the frequency, although it is applicable to other standard bands.

1. First, find two RAK811 Breakout Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.

2. Next, connect these two RAK811 Breakout Board with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRaP2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/qytvsg9mx3y4drl7pwrg.png"
  width="45%"
  caption="P2P Initialization"
/>

4. Then, configure LoRaP2P parameters for both of them.

```sh
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/fyoulppnh8gdz3vawjv7.jpg"
  width="90%"
  caption="Configuring P2P in both RAK811 Breakout Board Nodes"
/>

5. Try to send a message from RAK811 Breakout Board 2 (the right one) to RAK811 Breakout Board 1 (the left one):

```sh
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/khjhkisjuxtjb5oxps94.png"
  width="90%"
  caption="Message sent and received status in the two Nodes"
/>

6. You can send more messages.

```sh
at+send=lorap2p:12345678901234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/ckbymbjhypol3p0q1bjp.jpg"
  width="90%"
  caption="Succeeding Messages sent to the other Node"
/>

You have successfully finished your RAK811 Breakout Board set up. 

## Miscellaneous

### Upgrading the Firmware

:::tip 📝 NOTE:

For RAK811 modules with firmware version V3.0.0.12 and below, you need to use the [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) to upgrade your firmware and upload the **.hex file** (not the .bin file) of the [latest RAK811 firmware](https://downloads.rakwireless.com/LoRa/RAK811/Firmware/). The lower versions of the firmware have a different bootloader code and will not work on the RAK DFU Tool.

:::

Execute the following procedure to upgrade the firmware in Device Firmware Upgrade (DFU) mode through the UART1 interface.


1.	Download the latest application firmware of the RAK811 that can be found on the datasheet.
    - [RAK811 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#firmware-os)

2. Download and open the RAK Device Firmware Upgrade (DFU) tool.
    - [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/2.device-firmware.png"
  width="90%"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/3.select-firmware.png"
  width="90%"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade. This may take a minute.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/4.firmware-upgrading.png"
  width="90%"
  caption="Firmware Upgrading in Process"
/>

5. You should see the same pop-window as shown in Figure 62 if everything went well.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/5.upgrade-success.png"
  width="90%"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

- It is recommend to use RAK serial port tool since there are some ready AT commands in this tool which very useful for you. You can get it from RAK website available for free at this **[RAK directory](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)**.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then, open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 Breakout Board.

```sh
at+set_config=device:restart
```


If you want to configure your RAK811 Breakout Board using the available **AT commands**, check the [AT Commands for RAK811 Breakout Board](/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/). 
