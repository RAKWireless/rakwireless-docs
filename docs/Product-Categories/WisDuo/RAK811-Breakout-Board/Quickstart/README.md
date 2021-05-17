---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK811 Breakout Board
  - wisduo
  - quickstart
---

# Quick Start Guide

## Prerequisites

<!--
<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/quick-start-guide/dzsrvm2eaasyt3shktdh.png"
  width="35%"
  caption="RAK811 Breakout Board"
/>
--->

### What do you need?

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

- Connect your RAKDAP1 Flash and Debug Tool to your Windows Machine and Open RAK Serial Port Tool:

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/ou15nrdveyhmrzo8byof.png"
  width="80%"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device, go to your Device Manager by pressing **Windows + R** and type `devmgmt.msc`, or search in the Start Menu.

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/siqhrem8xxxnvhj7vttn.png"
  width="60%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT). Find the name of of your RAKDAP1 driver and take note of the COM Port Number.

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/rib8pvikbtggt9xryvxp.png"
  width="80%"
  caption="Correct Port Number and Correct Baud rate"
/>


### Connecting to The Things Network (TTN)

In this section, it shows how to connect the RAK811 Breakout Board to The Things Network (TTN) platform. 

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/4.ttn-context.png"
  width="75%"
  caption="RAK811 Breakout Board in the context of the TTN"
/>

As shown in Figure 6, the RAK811 Breakout Board is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that ultimately could generate efficiency, traceability and predictability capacity among others.

The RAK811 Breakout Board can be part of this ecosystem, and the objective of this section is to demonstrate how simple it is to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK811 Breakout Board must be located inside of the coverage of a LoRaWAN gateway. 


<b>Sign up and login</b>

If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, login to your account and go to the Console. 

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/5.ttn.png"
  width="100%"
  caption="The Things Network Home Page"
/>


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/6.ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>


#### Create a New Application

1. Choose the “APPLICATIONS”. 


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/7.application-section.png"
  width="100%"
  caption="Application Section"
/>

2. Click the “**add application**” button.


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/8.adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note in adding an application:

    * **Application ID** - this will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description** - this is a short and concise human readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.


3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see similar page as shown in Figure 11, then you have successfully registered your application.


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/9.application-overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**Devices**" button at the top. 

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/10.devices.png"
  width="100%"
  caption="Register a New Device"
/>

2. Then, register a new device by clicking on the "**register devices**".

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/11.adding-device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with a lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN protocol:

* **Device EUI**
* **Application Key**
* **Application EUI**

The TTN platform can generate these parameters randomly by leaving those fields empty, or you can enter already existing values. 


3. Press the “**Register**” button at the bottom of this page to finish the process. 


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/12.device-overview.png"
  width="100%"
  caption="Device Overview"
/>

#### LoRaWAN Join Mode


The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP). In OTAA, the previously personalized end-device is activated when is deployed or reset. On the other hand, in ABP, the personalization and activation are done as a single step. 


Hence, this is referred to as the “**Join Mode**". LoRaWAN allows the OTAA mode and the ABP mode. In this section, the configuration process of these two modes is explained, both on the platform side and the node side.


##### OTAA Mode

###### Configure the OTAA Mode on the Platform

As shown in the Figure 14, the default activation mode in TTN is the OTAA mode. Therefore, no further actions are required in the platform side. 

###### Configure the OTAA Mode on the RAK811 Breakout Board

The RAK811 Breakout Board supports a series of AT commands to configure its internal parameters and control the functionalities of the module. Physically, the module exposes a serial interface through the USB connector. 


To set up the RAK811 Breakout Board to join the TTN using OTAA, start by connecting the RAK811 Breakout Board to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>


As an example, these are the list of the parameters you need to configure in RAK811 Breakout Board: 

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

* Refer in the [RAK811 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK811-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.


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

6. Set the Application Key.

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/14.lora-parameters.png"
  width="40%"
  caption="Configuring LoRa Parameters"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK811 Breakout Board to save the parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see the messages shown in Figure 17.

8. Try to send a message from the RAK811 Breakout Board.

```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/15.send-message.png"
  width="40%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK811 Breakout Board on the TTN platform as shown in Figure 18.


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/16.message-received.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>


##### ABP Mode

###### Configure the ABP mode on the Platform


If the ABP mode is preferred, then the TTN platform needs to be configured first accordingly. At TTN, once a device is created, you can select the “**SETTINGS**” section of the “**DEVICE**” and switch the “**Activation Method**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/17.abp-mode.png"
  width="100%"
  caption="ABP Activation in TTN"
/>

* For ABP mode, the TTN parameters needed are the following:

  * **Device Address**
  * **Network Session Key**
  * **App Session Key**

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values. In other cases, you can complete them with specific values.
:::


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/18.abp-parameters.png"
  width="100%"
  caption="ABP Mode Parameters"
/>

The same as the OTAA form, you can leave these fields empty to allow TTN to generate random values or input the specific values that you want.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/19.abp-mode-configuration.png"
  width="100%"
  caption="ABP Mode Parameters"
/>



###### Configure the ABP mode on the RAK811

To set up the RAK811 Breakout Board to join the TTN using ABP, start by connecting the RAK811 board to the Computer via a USB to UART converter (see Figure 2) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>

As an example, these are the list of the parameters you need to configure in RAK811: 

- LoRa join mode: **ABP**
- LoRa class: **Class A**
- LoRa region: **EU868** 
- Device address: **26011af9**
- Network Session Key: **c280cb8d1df688bc18601a97025c5488**
- Application Session Key: **4d42ec5caf97f03d833cdaf5003f69e1**



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
at+set_config=lora:dev_addr:26011af9
```

5. Set the LoRa Network Session Key.

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6. Set the LoRa Application Session Key.

```
at+set_config=lora:apps_key:4d42ec5caf97f03d833cdaf5003f69e1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/21.abp-at-commands.png"
  width="40%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK811 Breakout Board to save the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK811 Breakout Board, it is still required to send `at+join` command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::

8. Try to send a data from the RAK811 Breakout Board to TTN in ABP mode.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/22.abp-sending-message.png"
  width="40%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

Then, go to the TTN Console to confirm that the message was properly received.



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

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in Figure 32.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ojwnskkac1njlitkurvr.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI, which was set in the previous section to your RAK811 Breakout Board as "dev_eui" is the same as highlighted in Figure 33.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/tvgeeoltqkzdne3ya5qw.png"
  width="100%"
  caption="Device EUI Code"
/>

- The same with the Application Key, it was also set in the previous section as "app_key", and it should be the same as highlighted in Figure 34.

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

5. If the join mode is not in OTAA, just set the LoRa join mode to **OTAA** and LoRa class to **Class A** by typing the AT commands shown in Figure 36.

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

You can see the message on ChirpStack page as shown in Figure 42.

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


If the firmware version of your **RAK811 Breakout Board** is newer than V3.0.0.0 or you have just burned the bootloader into the RAK811 Breakout Board according to the **Burning Bootloader into the Device** section, then proceed to Step 2.

1. In case you have not just burned the bootloader, as instructed in the previous section, you need to go into **boot mode**. Connect your board via the USB interface and enter the following **AT command** after you have connected via the proper COM port.

```sh
at+set_config=device:boot
```


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/1.bootmode.jpg"
  width="90%"
  caption="Entering Boot Mode"
/>


2. Download and open the RAK Device Firmware Upgrade (DFU) tool.
    - [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/2.device-firmware.png"
  width="75%"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/3.select-firmware.png"
  width="75%"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade. This may take a minute.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/4.firmware-upgrading.png"
  width="75%"
  caption="Firmware Upgrading in Process"
/>

5. You should see the same pop-window as shown in Figure 62 if everything went well.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/5.upgrade-success.png"
  width="75%"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

- It is recommend to use RAK serial port tool since there are some ready AT commands in this tool which very useful for you. You can get it from RAK website available for free at this **[RAK directory](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)**.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then, open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 Breakout Board.

```sh
at+set_config=device:restart
```


If you want to configure your RAK811 Breakout Board using the available **AT commands**, check the [AT Commands for RAK811 Breakout Board](/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/). 
