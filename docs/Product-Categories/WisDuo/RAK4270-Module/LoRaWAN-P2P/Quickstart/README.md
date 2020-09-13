---
prev: ../../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK4270
---

# Quick Start Guide

## Prerequisites

### What do you need?

Before going through the step in the installation guide of the RAK4270 WisDuo LPWAN Module, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. RAK4270 Module
2. USB to TTL Converter
3. Windows PC

#### Software Tools

1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
2. [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip)
<!-- 3.  [J-Link Tool](https://downloads.rakwireless.com/en/Cellular/Tools/) -->


### List of Acronyms

| Acronym |        Definition       |
| ------- | ----------------------- |
|   DFU   | Device Firmware Upgrade |
|   JTAG  | Joint Test Action Group |
|  LoRa  |       Long Range        |

## Product Configuration

### Interfacing with RAK4270

During the configuration of the module through the AT commands, it is possible to read the console outputs. You can connect to the console of the RAK4270 module through the UART interface. 

#### Connect to the RAK4270

In this document, a RAK4270 module is used as example case. Use a USB to TTL converter to connect to the module.

1. Connect the RAK4270 to serial port of a general-purpose computer (e.g.: USB port) using an USB to TTL module (3.3v), as shown in the Figure 1.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/1.module-connection.png"
  width="75%"
  caption="RAK4270 Module Connection"
/>

2. Any serial communication tool can be used. But, it is recommended to use the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

3. Configure the serial communication tool by selecting the proper port detected by the computer and configure the link as follows: 

 * Baud Rate: **115200 bauds**
 * Data Bits: **8 bits**
 * Stop Bits: **1 stop bit**
 * Parity: **NONE**


4. The RAK4270 console output can now be read in the RAK serial port tool as shown in the Figure 2.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/2.serial-port-tool-connected.png"
  width="40%"
  caption="RAK Serial Port Tool Connected to RAK4270 Module"
/>

### Configuring RAK4270

To connect the RAK4270 module to a LoRa-P2P connection or a LoRaWAN network, the module must be configured and LoRa parameters must be set by sending AT commands. You can send AT commands to the RAK4270 module through the UART interface.

Connect the RAK4270 module to the computer as described in the previous section. Use the serial communication tool to send commands to the RAK4270. For example, sending the `at+version` will return and display the current firmware version as shown in Figure 3. More AT commands can be found in [AT Commands for RAK4270](/Product-Categories/WisDuo/RAK4270-Module/LoRaWAN-P2P/AT-Command-Manual/#rak4270-at-command-manual).

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>

### Connecting to The Things Network (TTN)


In this section, a practical exercise will be performed to show how to connect the RAK4270 module to The Thing Network (TTN™) platform. 

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/4.ttn-context.png"
  width="65%"
  caption="RAK4270 in the context of the TTN"
/>


As shown in Figure 4, the RAK4270 module is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense the relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that, ultimately, could generate efficiency, traceability, predictability capacity among others.

The RAK4270 module can be part of this ecosystem, and the objective of this section is to demonstrate how simple is to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK4270 module must be located inside of the coverage of a LoRaWAN gateway. 

<b>Sign up and login</b>


If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, login to your account and go to the Console. 

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/5.ttn.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/6.ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>


#### Create a New Application

1. Choose the **APPLICATIONS**. 


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/7.application-section.png"
  width="100%"
  caption="Application Section"
/>


2. Click the “**add application**” button.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/8.adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note in adding an application:

    * **Application ID** - this will be the unique ID of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description** - this is a short and concise human readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.


3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see similar page as shown in Figure 9, then you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/9.application-overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**Devices**" button at the top. 

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/10.devices.png"
  width="100%"
  caption="Register a New Device"
/>

2. Then, register a new device by clicking on the "**register devices**".

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/11.adding-device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with a lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN protocol:

* Device EUI
* Application Key
* Application EUI

The TTN platform can generate these parameters randomly by leaving those fields empty. Or, you can enter already existing values. 

3. Press the “**Register**” button at the bottom of this page to finish the process. 

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/12.device-overview.png"
  width="100%"
  caption="Device Overview"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP). In OTAA, the previously personalized end-device is activated when is deployed or reset. On the other hand, in ABP, the personalization and activation are done as a single step. 


Hence, this is referred to as the “**Join Mode**". LoRaWAN allows the OTAA mode and the ABP mode. In this section, the configuration process of these two modes is explained, both on the platform side and the node side.


##### OTAA Mode

###### Configure the OTAA Mode on the Platform

As shown in the Figure 12, the default activation mode in TTN is the OTAA mode. Therefore, no further actions are required in the platform side. 


###### Configure the OTAA Mode on the RAK4270 module

The RAK4270 module supports a series of AT commands to configure its internal parameters and control the functionalities of the module. Physically, the module exposes a serial interface through the USB connector. 

To set up the RAK4270 module to join the TTN using OTAA, start by connecting the RAK4270 module to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication and verify the current configuration by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>



As an example, these are the list of the parameters you need to configure in RAK4270: 

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

* Refer in the [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#rf-characteristics) for the list of supported frequencies.


```
at+set_config=lora:region:EU868
```

4. Set the Device EUI.

```
at+set_config=lora:dev_eui:5e9d1e0857cf25f1
```

5. Set the Application EUI.

```
at+set_config=lora:app_ eui:5e9d1e0857cf25f1
```
:::tip 📝 NOTE:

The Device EUI parameter is not needed for the ChirpStack platform, therefore you will use the same ID as the Device EUI. Otherwise, the firmware will compliant. 

:::


6. Set the Application Key.

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/14.lora-parameters.png"
  width="40%"
  caption="Configuring LoRa Parameters"
/>


:::tip 📝 NOTE:

After configuring all the parameters, you need to reset your RAK4270 Module for saving parameters.

:::

7. After resetting, join in OTAA mode.

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see the messages shown in Figure 15.

8. Now try to send a message from the RAK4270 module.

```
at+send:lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/15.send-message.png"
  width="40%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent by the RAK4270 module on the TTN platform as shown in Figure 16.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/16.message-received.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>

##### ABP Mode

###### Configure the ABP mode on the Platform


If the ABP mode is preferred, then the TTN platform needs to be configured first. At TTN, once a device is created, you can select the “**SETTINGS**” section of the “**DEVICE**” and switch the “**Activation Method**”.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/17.abp-mode.png"
  width="100%"
  caption="ABP Activation in TTN"
/>

* For ABP mode, the TTN parameters needed are the following:

  * **Device Address**
  * **Network Session Key**
  * **App Session Key**


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/18.abp-parameters.png"
  width="100%"
  caption="ABP Mode Parameters"
/>

The same as the OTAA form, you can leave these fields empty to allow TTN to generate random values or input the specific values that you want.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/19.abp-mode-configuration.png"
  width="100%"
  caption="ABP Mode Parameters"
/>


###### Configure the ABP mode on the RAK4270

To set up the RAK4270 module in joining the TNN using ABP, start by connecting the RAK4270 module to the Computer (see Figure 1) and open the RAK Serial Port Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:


```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>


As an example, these are the list of the parameters you need to configure in RAK4270: 

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

- Refer in the [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#rf-characteristics) for the list of supported frequencies.

```
at+set_config=lora:region:EU868
```

4. Set the Device Address.

```
at+set_config=lora:dev_addr: 26011af9
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
  src="/assets/images/wisduo/rak4270-module/quickstart/20.abp-at-commands.png"
  width="40%"
  caption="AT Command for ABP LoRa parameters via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all parameters, you need to reset RAK4270 Module for saving parameters.

:::


7. After resetting, join in OTAA mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN, it doesn’t require to join a network before sending a LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4270 module, it is still required to send at+join command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::


8. Now, try sending a data from the RAK4270 to TTN in ABP mode.

```
at+send:lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/21.abp-sending-message.png"
  width="40%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

Then, go to the TTN Console to confirm that the message was properly received.


### Connecting with ChirpStack

In this section, a practical exercise will be performed to show how to connect the RAK4270 module to the ChirpStack platform.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/22.chirpstack-platform.png"
  width="60%"
  caption="RAK4270 Module in the Context of the ChirpStack Platform"
/>

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. Like the case of TTN, the RAK4270 module is located in the periphery and transmit the data to the backend servers through a LoRa gateway. Learn more about [ChirpStack](https://www.chirpstack.io/).

:::tip 📝 NOTE:

In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. Also, the gateway with the ChirpStack must be configured successfully. For further information, check the RAK documents for more details.

:::

In this section, you need the following requirements:

  1. Have ChirpStack online gateway, the frequency band of the nodes should be consistent with the frequency band of the gateway in use.
      *	[Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)
  2.	The RAK Serial Port Tool provided by RAK
  3.	RAK4270 module

:::tip 📝 NOTE:
The frequency band used in the test is EU868, use the high-frequency version of RAK4270.
:::


Before you start, you must choose which mode you are going to use, whether in OTAA or ABP mode, to register the device to the network server.


<b>Sign up and login</b>

Login to the ChirpStack server using your account and password.

#### Create a New Application

Go to the Application section as shown in the Figure 24.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/23.chirpstack.png"
  width="100%"
  caption="Application Section"
/>

By default, you should create a new Application, although you can reuse the existing ones. For this setup, create a new Application by clicking on the “**CREATE**” button, and fill the required parameters as shown in the Figure 25 and Figure 26.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/24.new-application.png"
  width="100%"
  caption="Creating a New Application"
/>

* For this setup, create an Application named “**rak_node_test**”.


ChirpStack LoraServer supports multiple system configurations, with only one by default. 

* **Service profile**: field is to select the system profile.
* **Payload codec**: is the parsing method for selecting load data. Such as parsing LPP format data.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/25.filling-parameters.png"
  width="100%"
  caption="Filling Parameters of an Application"
/>

<b>Register a New Device</b>

1. Choose the **Application** created in the previous step, then select the **DEVICES** tab as shown in Figures 27 and 28.


2. Once done, click “**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/26.application-available.png"
  width="100%"
  caption="List of Applications Created"
/>


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/27.application-page.png"
  width="100%"
  caption="Device Tab of an Application"
/>

3. Once inside of the DEVICE tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/28.adding-node.png"
  width="100%"
  caption="Add a New Device"
/>

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/29.new-device-registration.png"
  width="100%"
  caption="New Device Registration Form"
/>

6. Once the node is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.

Fill the parameters requested:

* **Device name and Device description**: These are descriptive texts about your device. 
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 31. You can also add a specific Device EUI directly in the form. 
* **Device Profile**: 
  * If you want to join in OTAA mode, select “**DeviceProfile_OTAA**”.
  * If you want to join in ABP mode, select “**DeviceProfile_ABP**”.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/30.adding-parameters.png"
  width="100%"
  caption="Generate a New Device EUI"
/>

#### LoRaWAN Join Mode

In LoRaWAN, there are two (2) ways a node can connect itself to the LoRaWAN network. This is referred to as **Join Mode**. LoRaWAN allows the OTAA mode and the ABP mode. In this section, the configuration process of these two modes, both on the platform side and the node side will be explained.


##### OTAA Mode

###### Configure the OTAA Mode on the Platform


1. If you have selected “**DeviceProfile_OTAA**” as shown in Figure 32, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/31.otaa.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in Figure 33:

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/32.otaa-set-device-keys.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 34, a new device should be listed in the DEVICES tab. The most important parameters, such as the Device EUI are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/33.list-device.png"
  width="100%"
  caption="Chirpstack OTAA List of Device in the Device Tab"
/>


4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the **KEYS(OTAA)** tab as shown in Figure 35.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/34.application-key.png"
  width="100%"
  caption="Application Key Associated with the New Device"
/>


:::tip 📝 NOTE:

Standard OTAA mode requires the **Device EUI**, **Application Key**, and the **Application EUI**. But in the ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4270 module’s firmware. To resolve this mismatch, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 

:::

###### Configure the OTAA mode on the RAK4270


The RAK4270 module supports a series of [AT commands](/Product-Categories/WisDuo/RAK4270-Module/LoRaWAN-P2P/AT-Command-Manual/#rak4270-at-command-manual) to configure its internal parameters and control the functionalities of the module. 

To set up the RAK4270 module to join ChirpStack using OTAA start by connecting the RAK4270 module to the Computer (see Figure 1) and open the RAK Serial Port  Tool. Wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:


```
at+get_config=lora:status
```

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>



As an example, these are the list of the parameters you need to configure in RAK4270: 

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

- Refer in the [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#rf-characteristics) for the list of supported frequencies.


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
Remember, the Application EUI parameter was not required in the ChirpStack platform. Therefore, it is possible to use the same ID as the Device EUI. Otherwise, the firmware will complain. 
::: 

6. Set the Application Key.

- Get the Application Key from the TTN register.


```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/36.configure-lora-parameters.png"
  width="40%"
  caption="Chirpstack OTAA configuration via RAK Serial Port Tool"
/>


:::tip 📝 NOTE:
After configuring all parameters, you need to reset RAK4270 Module to save the parameters.
:::

7. After resetting, start to join.

```
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/37.otaa-join-chirpstack.png"
  width="40%"
  caption="Chirpstack OTAA Join the Network via RAK Serial Port Tool"
/>


8. You can then see the JoinRequest and JoinAccept on ChirpStack page.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/38.chirpstack-console.png"
  width="100%"
  caption="Checking LoRaWAN Joint Request in Chirpstack OTAA Console"
/>


9. Now try to send a data from RAK4270 Module to ChirpStack.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/39.send-message-chirpstack.png"
  width="40%"
  caption="Send a LoRaWAN Message via RAK Serial Port Tool"
/>



- On the ChirpStack platform, you should also see the messages in the LORAWAN FRAMES tab as shown in Figure 41. Note, by convention, messages sent from nodes to gateways are considered as **Uplinks**. While messages sent by gateways to nodes are considered as **Downlinks**. 


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/40.message-received.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

This concludes the exercise to send data in the OTAA mode.


##### ABP Mode

###### Configure the ABP Mode on the Platform

During the registration of a new device, if you select “**DeviceProfile_ABP**”, as shown in Figure 42, then the ChirpStack platform will assume that this device will join to the LoRaWAN network using the ABP mode. 

:::tip 📝 NOTE:

Check “**Disable counting frame verification**”. During the test, when the module is restarted, the frame counting number will be also be restarted from zero. This would cause a synchronization problem with the ChirpStack server treating it as a replay attack. For the testing purpose, it is safe to disable this feature, but remember to activate it in a production environment.

:::


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/41.configuring-device-abp.png"
  width="100%"
  caption="ChirpStack Console, Configuring a Device"
/>

After selecting the ABP mode, the following parameters appear in the Activation tab: 

*	Device address
*	Network Session Key
*	Application Session Key

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/42.abp-activation-parameters.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**ACTIVATE DEVICE**” button.

###### Configure the ABP mode on the RAK4270


In the following steps, you will configure the RAK4270 module to work in the ABP mode. To set up the RAK4270 module to join ChirpStack using ABP start by connecting the RAK4270 module to the Computer (see Figure 1) and open the RAK Serial Port Tool, wait for the communication to start. It is recommended to test the serial communication by sending either of these two AT commands:

```
at+get_config=lora:status
```

```
at+version
```


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/3.command-response.png"
  width="40%"
  caption="at+version command response"
/>

As an example, these are the list of the parameters you need to configure in RAK4270: 

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

- Refer in the [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#rf-characteristics) for the list of supported frequencies.

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
  src="/assets/images/wisduo/rak4270-module/quickstart/44.configure-abp-parameters.png"
  width="40%"
  caption="Chirpstack ABP Parameters Configuration via RAK Serial Port Tool"
/>

:::tip 📝 NOTE:

After configuring all parameters, you need to reset RAK4270 Module for saving parameters.

:::

7. After resetting RAK4270 Module, join in ABP mode.

```
at+join
```

:::tip 📝 NOTE:

By using the ABP mode in LoRaWAN protocol, it doesn’t require to join a network before sending LoRaWAN package. But to keep the consistency of internal states of the firmware of the RAK4270 module, it still required to send at+join command in the ABP mode. This time, the firmware should reply almost immediately with an “OK”.

:::


8. Now, try sending a data from RAK4270 Module to ChirpStack.

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/45.data-sent-abp.png"
  width="40%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

### LoRa P2P Mode

This section will show you how to set up and connect two RAK4270 units to work in the LoRa P2P mode. You will be using EU868 as your frequency, although it is applicable also to other standard bands.

1. Two RAK4270 units shall be set to operate on EU868 frequency. 

2. The setup of the RAK4270 units is done by connecting then with a general-purpose computer through the UART port. The setup of each RAK4270 can be done separately but testing the LoRa P2P mode will require having both units connected simultaneously to its respective UART port. This could be one computer with 2 USB ports or 2 computers with one USB port each.

3. Set the RAK4270 to work in LoRa P2P mode. Open the RAK Serial Port Tool and send the following command:

```
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/46.lora-p2p.png"
  width="40%"
  caption="P2P Initialization"
/>


4. Then, configure LoRa P2P parameters for both of them.


```
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```


For this example, the LoRa parameters are the following:

- Link frequency: **869525000 Hz**
- Spreading factor: **7**
- Bandwidth: **125 kHz**
- Coding Rate: **4/5**
- Preamble Length: **5**
- Power: **5 dBm**

:::tip 📝 NOTE:

Refer to the [Configuring Using AT Commands section](/Product-Categories/WisDuo/RAK4270-Module/LoRaWAN-P2P/AT-Command-Manual/#rak4270-at-command-manual) to learn more about the definition of the parameters used.

:::

Hence, it is translated into the following RAK4270 AT command and send to both units.

```
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/48.configuring-p2p.png"
  width="40%"
  caption="Configuring P2P in both RAK4270 Module"
/>

5. Set the transmission mode of the module. Unit 1 is configured as the sender, and Unit 2 is set to the receiver by AT command.

```
at+set_config=lorap2p:transfer_mode:2

at+set_config=lorap2p:transfer_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/49.mode-setting.png"
  width="80%"
  caption="Setting Modes in both RAK4270 Module"
/>



6. Try sending a message from Unit 1 to Unit 2. 

```
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/50.sending-message.png"
  width="80%"
  caption="Message sent and received status in the two modules"
/>


## Miscellaneous

### Upgrading the Firmware

Before you start working with the RAK4270, it is recommended to keep the RAK4270 module updated to the latest version of the firmware. Download the latest [RAK4270 firmware](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#software).


In the following sections, two (2) options for flashing new firmware in a RAK4270 module are shown: **Upgrade through DAPLink** and **Upgrade through UART1**.

#### Firmware Upgrade Through DAPLink

To flash a new firmware we use RAKDAP1, a J-Link/SWD adapter. It requires the Python3 tool pyocd on your computer.

##### Installing Environment

1.  Install Python3   

Because **pyocd** needs the **Python environment**, we must install **Python3**. We can download the Python3 package from Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/) and install it using the default configuration. After installing successfully, we can check the version as follow:    

<rk-img
  src="/assets/images/wisduo/rak4200-module/quickstart/py_ver_check.png"
  width="40%"
  caption="Check Python version"
/> 

:::tip 📝 NOTE:
If the Python version is above 3.4, pip is automatically installed. But if not, we should install pip3 manually.     
:::

2. Install pyocd using pip

Use the following command to install pyocd:     

```
pip3 install pyocd   
```

* After installation, check the version of pyocd as follow:    

<rk-img
  src="/assets/images/wisduo/rak4200-module/quickstart/pyocd_ver_check.png"
  width="20%"
  caption="Check pyocd version"
/> 
   
3. Install the support package for the MCU

After installing pyocd successfully we need to install the support package for the MCU. The command format is:

```
pyocd pack --install <MCU model>
```

**Example**: The MCU models for this board is **stm32l151cb** so the correct command is:

```
pyocd pack --install stm32l151cb
```

The support packages are MDK packages. You can see a complete list at [https://www.keil.com/dd2/Pack/](https://www.keil.com/dd2/Pack/).

##### Flash the firmware using DAPLink and RAKDAP

1. Connect the board to RAKDAP

Connect the 4 debug/programming SWD pins of the board to the RAKDAP adapter(| VCC | GND | SWIO | SWCLK |)

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/rak4270-swd.png"
  width="40%"
  caption="RAK4270 to SWD debug pins"
/>

2. Flash the latest firmware

To flash the latest firmware version the command is:

```
pyocd flash -target stm32l151cb <path/to/file.bin>
```    

* Depending on the size of the file, the flashing can take several minutes. The success or failure of the flashing will be shown in the command line:    

<rk-img
  src="/assets/images/wisduo/rak4200-module/quickstart/pyocd_flash_log.png"
  width="65%"
  caption="PYOCD flash log"
/>

<!-- #### Firmware Upgrade Through J-Link

##### Minimum Hardware and Software Requirements

Refer to the table for the minimum hardware and software required to perform the firmware upgrade using J-Link.

| Hardware/Software | Requirement |
| --- | --- |
| Computer | A Windows computer |
| J-Link | A J-Link hardware, corresponding software JFlash. |
| Firmware File | Hex firmware file downloaded from the website. |


##### Firmware Upgrade Procedure

1. Download the latest compiled firmware.

    - [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#software)

2. The firmware file is in a zip or rar format. Uncompressing it to get a file with hex extension.

3.	Connect the RAK4270 module with a computer through the JTAG interface as shown in Figure 51.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/51.jtag-connection.png"
  width="80%"
  caption="RAK4270 connection through JTAG"
/>

4.	Connect the power supply to power the module

5.	Download and install the [J-Link tool](https://downloads.rakwireless.com/en/Cellular/Tools/) on your computer.

6.	Open the JFlash tool and select the target device. The model of the core chip of RAK4270 is the **STM32L151CB-A**.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/52.target-device.png"
  width="30%"
  caption="Select Target Device"
/>

7.	Drag the module firmware with Suffix "**.hex**" into the software.


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/53.jflash.png"
  width="90%"
  caption="JFlash Open Firmware"
/>


8.	Connect the device and download the firmware.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/54.connect-device.png"
  width="40%"
  caption="Connect the Device"
/>


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/55.programming-firmware.png"
  width="40%"
  caption="Programming Firmware"
/>



9.	After the download is finished, it will run normally after restarting the module.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/55.programming-process.png"
  width="90%"
  caption="Programming Process"
/> -->

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

1.	Download the latest application firmware of the RAK4270.

    - [RAK4270 Datasheet](/Product-Categories/WisDuo/RAK4270-Module/Datasheet/#software)


2.	Download the device firmware upgrade (DFU) tool.

    - [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip)

3.	Connect the RAK4270 module with a computer through a USB to TTL. Refer to [Figure 1](/Product-Categories/WisDuo/RAK4270-Module/LoRaWAN-P2P/Quickstart/#connect-to-the-rak4270)

4.	Open the Device Firmware Upgrade tool. Select the serial port and baud rate of the module and click the "Select Port" button.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/56.device-firmware.png"
  width="80%"
  caption="Device Firmware Upgrade Tool"
/>


5.	Select the application firmware file of the module with the suffix "**.bin**".

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/57.select-firmware.png"
  width="80%"
  caption="Select Firmware"
/>

6.	Click the "Upgrade" button to upgrade the device. After the upgrade is complete, the RAK4270 module will be ready to work with the new firmware.

<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/58.firmware-upgrading.png"
  width="80%"
  caption="Firmware Upgrading"
/>


<rk-img
  src="/assets/images/wisduo/rak4270-module/quickstart/59.upgrade-success.png"
  width="80%"
  caption="Upgrade Successful"
/>








