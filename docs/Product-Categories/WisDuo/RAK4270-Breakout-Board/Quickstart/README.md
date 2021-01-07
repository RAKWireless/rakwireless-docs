---
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK4270 Breakout Board
---

# Quick Start Guide

## Prerequisites

### What do you need?

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

### What's included in the package?

- 1 pc - RAK4270 Breakout Board (chipset pre-soldered on the board)
- 1 pc - LoRa Antenna

## Product Configuration

### Interfacing with RAK4270 Breakout Board

RAK4270 Breakout Board can be configured using AT commands via UART interface. You need a USB to UART TTL adapter to connect the RAK4270 board to PC's USB port and a serial terminal tool.

You can use [RAKDAP1](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#product-description) as the USB to UART interface device. RAKDAP1 is compatible to other RAK modules and can be used as a debugging tool and firmware uploader. It is also highly recommended to use [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools) so you can easily send AT commands and view the replies from its console output.


::: warning ⚠️ WARNING
Before powering the RAK4270 Breakout Board, make sure you have installed the LoRa antenna first. Not doing so might damage the board.
:::

#### USB to UART

- Connect your RAK4270 Breakout Board to the USB-UART interface as shown in Figures 1 and 2. 
- UART1 is used for AT commands input as well as firmware update. Check [RAK4270 Breakout Board Pin Definition](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#pin-definition) on the datasheet for complete details.

<rk-img
 src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/interfacing-with-RAK4270-breakout/rakdap1torak4270bb.jpg"
  width="70%"
  caption="RAK4270 Breakout Board Connected to RAKDAP1 USB-UART Interface"
/>

<rk-img
 src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/interfacing-with-RAK4270-breakout/uart_conn.jpg"
  width="50%"
  caption="RAK4270 Breakout Board to USB Uart Module Connection"
/>

- Connect your USB - UART Module to your Windows PC and open RAK Serial Port Tool.

<rk-img
 src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/interfacing-with-RAK4270-breakout/ou15nrdveyhmrzo8byof.png"
  width="80%"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device, go to your Device Manager by pressing **Windows + R** and type `devmgmt.msc`, or search in the Start Menu.

<rk-img
 src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/interfacing-with-RAK4270-breakout/siqhrem8xxxnvhj7vttn.png"
  width="60%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT). Find the name of of your USB UART Module driver and take note of the COM Port Number.

<rk-img
 src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/interfacing-with-RAK4270-breakout/rib8pvikbtggt9xryvxp.png"
  width="80%"
  caption="Correct Port Number and Correct Baud rate"
/>


### Connecting to The Things Network (TTN)

In this section, a practical exercise will be performed to show how to connect the RAK4270 Breakout Board to The Things Network (TTN) platform. 

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/4.ttn-context.png"
  width="75%"
  caption="RAK4270 Breakout Board in the context of the TTN"
/>

As shown in Figure 6, the RAK4270 Breakout Board is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that ultimately could generate efficiency, traceability and predictability capacity among others.

The RAK4270 Breakout Board can be part of this ecosystem, and the objective of this section is to demonstrate how simple it is to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK4270 Breakout Board must be located inside of the coverage of a LoRaWAN gateway. 


<b>Sign up and login</b>

If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, login to your account and go to the Console. 

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/5.ttn.png"
  width="100%"
  caption="The Things Network Home Page"
/>


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/6.ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>


#### Create a New Application

1. Choose the “**APPLICATIONS**”. 


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/7.application-section.png"
  width="100%"
  caption="Application Section"
/>

2. Click the “**add application**” button.


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/8.adding-application.png"
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
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/9.application-overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**Devices**" button at the top. 

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/10.devices.png"
  width="100%"
  caption="Register a New Device"
/>

2. Then, register a new device by clicking on the "**register devices**".

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/11.adding-device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with a lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN protocol:

* **Device EUI**
* **Application Key**
* **Application EUI**

The TTN platform can generate these parameters randomly by leaving those fields empty or you can enter already existing values. 


3. Press the “**Register**” button at the bottom of this page to finish the process. 


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/12.device-overview.png"
  width="100%"
  caption="Device Overview"
/>

#### LoRaWAN Join Mode


The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP). In OTAA, the previously personalized end-device is activated when is deployed or reset. On the other hand, in ABP, the personalization and activation are done as a single step. 


Hence, this is referred to as the “**Join Mode**". LoRaWAN allows the OTAA mode and the ABP mode. In this section, the configuration process of these two modes is explained, both on the platform side and the node side.


##### OTAA Mode

###### Configure the OTAA Mode on the Platform

As shown in Figure 14, the default activation mode in TTN is the OTAA mode. Therefore, no further actions are required in the platform side. 

###### Configure the OTAA Mode on the RAK4270 Breakout Board

The RAK4270 Breakout Board supports a series of AT commands to configure its internal parameters and control the functionalities of the module. Physically, the module exposes a serial interface through the USB connector. 

To set up the RAK4270 Breakout Board to join the TTN using OTAA, start by connecting the RAK4270 Breakout Board to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/3.command-response.png"
  width="40%"
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

* Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.


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

The Device EUI parameter is not needed for the ChirpStack platform; therefore, you will use the same ID as the Device EUI. Otherwise, the firmware will fail connecting to the network server. 

:::

6. Set the Application Key.

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/14.lora-parameters.png"
  width="40%"
  caption="Configuring LoRa Parameters"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4270 Breakout Board to save the parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see the messages shown in Figure 17.

8. Try to send a message from the RAK4270 Breakout Board.

```
at+send:lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/15.send-message.png"
  width="40%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4270 Breakout Board on the TTN platform as shown in Figure 18.


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/16.message-received.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>


##### ABP Mode

###### Configure the ABP mode on the Platform


If the ABP mode is preferred, then the TTN platform needs to be configured first accordingly. At TTN, once a device is created, you can select the “**SETTINGS**” section of the “**DEVICE**” and switch the “**Activation Method**”.

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/17.abp-mode.png"
  width="100%"
  caption="ABP Activation in TTN"
/>

* For ABP mode, the TTN parameters needed are the following:

  * **Device Address**
  * **Network Session Key**
  * **App Session Key**

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values, in other cases, you can complete them with specific values.
:::


<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/18.abp-parameters.png"
  width="100%"
  caption="ABP Mode Parameters"
/>

The same as the OTAA form, you can leave these fields empty to allow TTN to generate random values or input the specific values that you want.

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/19.abp-mode-configuration.png"
  width="100%"
  caption="ABP Mode Parameters"
/>



###### Configure the ABP mode on the RAK4270 Breakout Board

To set up the RAK4270 Breakout Board to join the TTN using ABP, start by connecting the RAK4270 Breakout Board to the computer via a USB to UART converter (see Figure 2) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+set_config=device:restart
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4270 Breakout Board: 

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

- Refer in the [RAK4270 Breakout Board Datasheet](/Product-Categories/WisDuo/RAK4270-Breakout-Board/Datasheet/#rf-characteristics) for the list of supported frequencies.

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
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/21.abp-at-commands.png"
  width="40%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4270 Breakout Board to save the parameters.

:::


7. After resetting, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4270 Breakout Board, it still required to send at+join command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::

8. Try to send a data from the RAK4270 Breakout Board to TTN in ABP mode.

```
at+send:lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/RAK4270-breakout-board/quickstart/connecting-to-ttn/22.abp-sending-message.png"
  width="40%"
  caption="ABP Test Sample Data Sent via RAK Serial Port Tool"
/>

Then, go to the TTN Console to confirm that the message was properly received.



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

Go to the Application section as shown in the Figure 26.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/23.chirpstack.png"
  width="100%"
  caption="Application Section"
/>

By default, you should create a new Application, although you can reuse the existing ones. For this setup, create a new Application by clicking on the “**CREATE**” button, and fill the required parameters as shown in the Figures 27 and 28.

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

1. Choose the **Application** created in the previous step, then select the **DEVICES** tab as shown in Figures 29 and 30.


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
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 33. You can also add a specific Device EUI directly in the form. 
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


1. If you have selected “**DeviceProfile_OTAA**” as shown in Figure 34, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/31.otaa.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in Figure 35.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/32.otaa-set-device-keys.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 36, a new device should be listed in the DEVICES tab. The most important parameters, such as the Device EUI are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/33.list-device.png"
  width="100%"
  caption="Chirpstack OTAA List of Device in the Device Tab"
/>


4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the **KEYS(OTAA)** tab as shown in Figure 37.


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/34.application-key.png"
  width="100%"
  caption="Application Key Associated with the New Device"
/>


:::tip 📝 NOTE:

Standard OTAA mode requires the **Device EUI**, **Application Key**, and the **Application EUI**. But in the ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is neither required nor recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4270 Breakout Board firmware. To resolve this mismatch, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 

:::

###### Configure the OTAA mode on the RAK4270 Breakout Board


The RAK4270 Breakout Board supports a series of [AT commands](/Product-Categories/WisDuo/RAK4270-Module/AT-Command-Manual/#rak4270-at-command-manual) to configure its internal parameters and control the functionalities of the module. 

To set up the RAK4270 Breakout to join ChirpStack using OTAA, start by connecting the board to the computer (see Figure 2) and open the RAK Serial Port  Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:


```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/3.command-response.png"
  width="40%"
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
  width="40%"
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
  width="40%"
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
  width="40%"
  caption="Send a LoRaWAN Message via RAK Serial Port Tool"
/>

- On the ChirpStack platform, you should also see the messages in the LORAWAN FRAMES tab as shown in Figure 43. Note, by convention, messages sent from nodes to gateways are considered as **Uplinks** while messages sent by gateways to nodes are considered as **Downlinks**. 


<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/40.message-received.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

This concludes the exercise to send data in the OTAA mode.


##### ABP Mode

###### Configure the ABP Mode on the Platform

During the registration of a new device, if you select **DeviceProfile_ABP**”, as shown in Figure 44, then the ChirpStack platform will assume that this device will join to the LoRaWAN network using the ABP mode. 

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
  width="40%"
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
  width="40%"
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
  width="40%"
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
  width="40%"
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

Refer to the [Configuring Using AT Commands](/Product-Categories/WisDuo/RAK4270-Module/AT-Command-Manual/#rak4270-at-command-manual) section to learn more about the definition of the parameters used.

:::

Hence, it is translated into the following RAK4270 Breakout Board AT command and send to both units.

```
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak4270-breakout-board/quickstart/48.configuring-p2p.png"
  width="40%"
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

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool) guide in the Accesories Category.

#### Firmware Upgrade Through UART1

##### Minimum Hardware and Software Requirements

Refer to the table for the minimum hardware and software required to perform the firmware upgrade using J-Link.

| Hardware/Software | Requirement |
| --- | --- |
|  Computer |  A Windows/Ubuntu/Mac computer |
|  Firmware File | Bin firmware file downloaded from the website|
| Others  |  A USB to TTL module |


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




