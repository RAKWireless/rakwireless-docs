---
prev: ../../Overview/
next: ../AT-Command-Manual/
tags: RAK4600
---

# Quick Start Guide

## Prerequisites 

### What do you need?

Before going through the step in the installation guide of the RAK4600 WisDuo LPWAN Module, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. RAK4600 WisDuo LPWAN Module
2. Windows PC
3. USB to TTL adapter


#### Software Tools

1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
2. [RAK4600 Firmware](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#firmware)
3. [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_Tool_v1.4.zip)
<!-- 4. [J-Link Tool](https://downloads.rakwireless.com/en/Cellular/Tools/) -->


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
            <td>JTAG</td>
            <td>Joint Test Action Group</td>
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
</tbody>
</table>


## Product Configuration

### Interfacing with RAK4600

In this section, a RAK4600 module is used for demonstration. Use a USB to TTL module to connect to the module. In case the RAK4600 is mounted on an evaluation board or a customized PCB then use the appropriate interface to connect to the Serial port.

1.	Connect the RAK4600 to the serial port of a general-purpose (e.g.: USB port) using a USB to TTL adapter, as shown in Figure 1. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/usb-ttl.png"
  width="75%"
  caption="RAK4600 module connection"
/>

2.	Any serial communication tool will work, but it is recommended to use the RAK Serial Port Tool that can be downloaded from here:
    * [https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)

3.	Configure the serial communication tool by selecting the proper port of the computer UART port and configure the link as: **115200 bauds, 8 bits, no parity bit, and 1 stop bit**.

* In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : **Windows + R** and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/comport.png"
  width="75%"
  caption="Device Manager"
/>

* Look for Ports (COM & LPT) . Find the name of of your USB UART Module driver and take note of the COM Port Number.

4.	The RAK4600 console output can now be read in the RAK serial port tool as shown in Figure 3.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/rak-serial-port-connected.png"
  width="40%"
  caption="Device Manager"
/>

### Configure the RAK4600

#### Through UART

In order to connect the RAK4600 module to a LoRa-P2P connection or a LoRaWAN®® network, the module must be configured and LoRa parameters must be set by sending AT commands through the UART interface.

Connect the RAK4600 module to the computer as described in the previous section. Using the Serial communication tool then is possible to send commands to the RAK4600, e.g.: sending the `at+version` will display the current firmware version as shown in Figure 4.

The full set of RAK4600 AT commands can be found in Appendix I.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/at-version-response.png"
  width="40%"
  caption="at+version command response"
/>

#### Through the BLE Interface

To configure the RAK4600 through BLE, you have to install the “**nRF Connect**” app or “**nRF Master Control Panel (BLE)**” app provided by Nordic Semiconductor in your mobile phone, then:

1.	Open the app on the mobile device and scan for BLE devices.
2.	Reset the RAK4600 module, after some seconds it should appear in the device list a device with name format “**RUI-XX:XX:XX**". See Figure 5. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/nordic-scan.jpg"
  width="30%"
  caption="Nordic app scan for BLE devices"
/>

3.	Then, press the “**CONNECT**” button, a list will be displayed as Figure 6. 

:::tip 📝 NOTE:
Connect within 60 seconds after resetting RAK4600 as after that time the BLE broadcast will be stopped.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-connect.jpg"
  width="30%"
  caption="Options to connect to the RAK4600"
/>

4.	Select the item named “**Nordic UART Service**”.

5.	Enable receiving in Bluetooth communication, click the arrow which is marked by the red box in Figure 7.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-enable.png"
  width="30%"
  caption="Enable the reception of the mobile phone"
/>

6.	Click the arrow which is marked by the red box in Figure 8.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-send-at-command.png"
  width="30%"
  caption="Send AT command"
/>

7.	A small input window will pop-up, here is where AT commands shall be typed. (see Figure 9).

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-at-command-input.png"
  width="30%"
  caption="nRF app AT command input window"
/>

8.	Send AT commands to RAK4600 in this dialog, the console output shall be read in the App.

    * For example, to check the current firmware version, type “at+version” as shown in the Figure 10. The response can be seen in Figure 11.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-send-at-version.jpg"
  width="30%"
  caption="nRF app, send at command over BLE"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-at-version-response.png"
  width="30%"
  caption="AT response over BLE"
/>

### Connecting to The Things Network (TTN)

In this section, a practical exercise will be performed to show how to connect the RAK4600 module to The Thing Network (TTN™) platform.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-context.png"
  width="75%"
  caption="RAK4600 in the context of the TTN"
/>

As shown in Figure 12, the RAK4600 module is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense the relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that, ultimately, could generate efficiency, traceability, predictability capacity among others.

The RAK4600 module can be part of this ecosystem, and the objective of this section is to demonstrate how simple is to send data to the TTN using the LoRaWAN® protocol. To achieve this, the RAK4600 module must be located inside of the coverage of a LoRaWAN® gateway. 


<b>Sign up and login</b>

If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, login to your account and go to the Console. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn.png"
  width="100%"
  caption="The Things Network Home Page"
/>


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>


#### Create a new Application

1. Choose the **“APPLICATIONS”**. 


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/application-page.png"
  width="100%"
  caption="Application Page"
/>

2. Click  the “**add application**” button.


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note in adding an application:

    * **Application ID** - this will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description** - this is a short and concise human readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.


3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a new Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**DEVICES**" button at the top. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/devices.png"
  width="100%"
  caption="Add your Device"
/>

2. Then, register a new device by clicking on the "**register devices**" 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/adding-device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with a lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN® protocol:

* Device EUI
* Application Key
* Application EUI

The TTN platform can generate these parameters randomly by leaving those fields empty or the user can enter already existing values. 

3. Press the “**Register**” button at the bottom of this page to finish the process. The registration results will appear summarized as in Figure 20. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/device-overview.png"
  width="100%"
  caption="Device Overview"
/>

#### LoRaWAN Join Mode

The LoRaWAN® specification defines that to join in a LoRaWAN® network, each end-device has to be personalized and activated. Activation can be done either via **Over-The-Air-Activation (OTAA)** or via **Activation-By-Personalization (ABP)**. In OTAA the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA mode

###### Configure the OTAA mode on the TTN platform

As shown in Figure 20, the default activation mode in TTN is the OTAA mode. Therefore, no further actions are required on the platform side. Three parameters from the TTN setup are used to configure the RAK4600: “**Device EUI**”, “**Application EUI**” and “**App Key**”.

###### Configure the OTAA mode on the RAK4600

RAK4600 complies with LoRaWAN® 1.0.2, by default the LoRa join mode is **OTAA** and the LoRa Class is **Class A**.

To set up the RAK4600 module to join the TTN using OTAA start by connecting the RAK4600 module to the Computer (as in Figure 1) and open the RAK Serial Port Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

```
at+get_config=lora:status
```
or 
```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/otaa-connect-rak4600.png"
  width="40%"
  caption="RAK Serial Port Tool connected to a RAK4600"
/>

As an example, the following parameters will be configured in RAK4600:

* **LoRa join mode**: OTAA
* **LoRa class**: Class A
* **LoRa region**: EU868 
* **Device EUI**: 5e9d1e0857cf25f1 (from TTN registration)
* **Application EUI**: 5e9d1e0857cf25f1 (from TTN registration)
* **Application Key**: f921d50cd7d02ee3c5e6142154f274b2 (from TTN registration)

1. Set the LoRa join mode to OTAA

Type command:

```
at+set_config=lora:join_mode:0
```
2.	Set the LoRa Class to Class A

Type command:  

```
at+set_confing=lora:class:0
```

3.	Set the frequency/region

Listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics) are the supported frequencies. For Europe Type command: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the Gateway.
:::

4.	Set the Device EUI

Get the Device EUI number from TNN register. Type command: 

```
at+set_config=lora:dev_eui:5e9d1e0857cf25f1
```

5. Set the Application EUI

Get the Application EUI number from the TNN register. Type command: 

```
at+set_config=lora:app_ eui:5e9d1e0857cf25f1
```

6.	Set the Application Key

Get the Application Key from the TNN register. Type command: 

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

7.	Saving RAK4600 parameters

Reset the RAK4600 to activate the new configuration. 


* Figure 21 summarizes the set of commands sent over the console for setting the OTAA mode on the RAK4600

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-param-config.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8. Command the RAK4600 to join in OTAA mode

Type command:

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then “OK Join Success” messages will be shown in the console (see Figure 23).


9.	Send data from RAK4600 to TTN. 

E.G. To send the string 123456789 over LoRa port 2, type command:

```
at+send=lora:2:1234567890. 
```

The data will appear in the TTN’s web (see Figure 24).

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-send-data.png"
  width="40%"
  caption="RAK4600 example of sending data to the TTN, in this case the string 123456890 over port 2"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-receive.png"
  width="100%"
  caption="TTN’s website showing the data received from RAK4600"
/>


##### ABP Mode

###### Configure the ABP mode on the platform

1. For joining TTN in ABP mode first it is needed to switch the activation method as ABP. This is done on the TTN’s website under the “Device Settings” page, as shown in Figure 25.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-switch.png"
  width="100%"
  caption="TTN Console, change the activation mode to ABP"
/>

* For ABP mode, the TTN parameters needed are the following: “**Device Address**”, “**Network Session Key**” and “**App Session Key**” (see Figure 26). 

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values, in other cases, the user can complete them with specific values.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-param.png"
  width="100%"
  caption="TTN Console, ABP mode’s parameters"
/>

2. After completing the mode change the device parameters will be the summarized as in Figure 27.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-param.png"
  width="100%"
  caption="TTN Console, ABP mode configuration finalized"
/>

###### Configure the ABP mode on the RAK4600

To set up the RAK4600 module to join the TNN using ABP start by connecting the RAK4600 module to the Computer (as in Figure 1) and open the RAK Serial Port  Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

```
at+get_config=lora:status
```

or

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/otaa-connect-rak4600.png"
  width="40%"
  caption="RAK Serial Port Tool connected to a RAK4600"
/>


As an example, the following parameters will be configured in RAK4600:

* **LoRa join mode**: ABP
* **LoRa class**: Class A
* **LoRa region**: EU868
* **Device address**: 26011af9 (from TTN registration)
* **Network Session Key**: c280cb8d1df688bc18601a97025c5488 (from TTN registration)
* **Application Session Key**: 4d42ec5caf97f03d833cdaf5003f69e1 (from TTN registration)

1.	Set LoRa join mode to ABP

Type command:

```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to Class A

Type command:

```
at+set_confing=lora:class:0
```

3.	Set the frequency/region

Listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics) are the supported frequencies. For Europe Type command: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the Gateway.
:::

4. Set the Device Address

Get the Device Address from TNN register, E.G.: To set the LoRa Device Address to “**26011af9**”, type command:

```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key

Get the Network Session Key from the TTN register. E.G.: To set the LoRa Network Session Key to “**c280cb8d1df688bc18601a97025c5488**”, type command:

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key

Get the Application Key from the TTN register. E.g.: To set the Application Key to “**4d42ec5caf97f03d833cdaf5003f69e1**”, type command:

```
at+set_config=lora:apps_key: 4d42ec5caf97f03d833cdaf5003f69e1
```

7. Saving RAK4600 parameters

Reset the RAK4600 for saving the parameters. 


Figure 29 summarizes the set of commands sent over the console for setting the ABP mode on the RAK4600:

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-set-param.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8.	Command the RAK4600 to join in ABP mode

Type command:

```
at+join
```

:::tip 📝 NOTE:
The ABP mode in LoRaWAN® doesn’t require to join a network before sending a LoRaWAN® package to the air. But, in order to keep the consistency of internal states of the firmware of the RAK4600 module, it is still required to send `at+join` command in the ABP mode.
:::

* Almost immediately after sending the command the “**OK Join Success**” should be replied in the console as shown in Figure 30.

9.	Send data from RAK4600 to ChirpStack.

E.G. To send the string 123456789 over LoRa port 2, type command:

```
at+send=lora:2:1234567890
```

The data will appear in the TTN’s web (see  Figure 31)

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-send-data.png"
  width="40%"
  caption="RAK Serial Port Tool, sending a message in ABP mode."
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-receive.png"
  width="100%"
  caption="TTN’s website with received data from RAK4600"
/>

### Connecting with ChirpStack

This section shows how to connect the RAK4600 module to the ChirpStack platform. As described in the ChripsStack’s website:

“The ChirpStack open-source LoRaWAN® Network Server stack provides open-source components for LoRaWAN® networks. Together they form a ready-to-use solution including a user-friendly web-interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-architecture.png"
  width="60%"
  caption="RAK4600 module in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in Figure 33. Similar to the case of TTN, the RAK4600 module is located in the periphery and will transmit the data to the backend servers through a LoRa gateway. More information about this architecture can be found at: [https://www.chirpstack.io/](https://www.chirpstack.io/)

* In this document, it is assumed that users are using a RAK LoRa gateway, such as RAK7243. The gateway must be configured and registered previously to ChirpStack deployment. More information about that can be found at: [Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)

:::tip 📝 NOTE:
The frequency band used in this example is EU868 which is supported by the high-frequency version of RAK4600.
:::

* And these are the steps to send data to the ChirpStack platform from a RAK4600 module: 

  1. Request an account to RAK and login to the RAK’s ChirpStack platform. 
  2. Create a new Application.
  3. Register a new device on the platform: 
  4. Configure the Join Mode:
      *	OTAA mode on the platform
      *	OTAA mode on the RAK4600 module
      *	ABP mode on the platform
      *	ABP mode on the RAK4600 module
  5. Send data from the module and receive it at the platform

The following section gives the details of each of these aforementioned steps. As usual, the user must choose to use ABP or OTAA mode to register the device to the network server.

<b>Sign up and login</b>

Request an account in the forum of RAK, then access to server assigned for your region with your username and password. 

#### Create a new Application

Go to the Application section as shown in Figure 33.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-applications.png"
  width="100%"
  caption="Application section of the RAK’s ChirpStack LoRaServer"
/>

By default, a new Application should be created, although it is possible to reuse the existing ones. For this setup, let’s create a new Application by clicking on the “**CREATE**” button, and fill the required parameters as shown in Figure 34 and Figure 35.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-create-new-app.png"
  width="100%"
  caption="Creating a new Application on the RAK’s ChirpStack LoRaServer"
/>

* For this setup, create an Application named “**rak_node_test**”.

ChirpStack LoraServer supports multiple system configurations, with only one by default. 

* **Service profile**: field is to select the system profile.
* **Payload codec**: is the parsing method for selecting load data. Such as parsing LPP format data.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-filling-param.png"
  width="100%"
  caption="Filling parameters of an Application on the RAK’s ChirpStack LoRaServer"
/>

<b>Register a new Device</b>

1. Choose the Application created in the previous step, then select the DEVICES tab as shown in Figure 36, Figure 37.

2. “**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-list-app.png"
  width="100%"
  caption="List of applications created on the RAK’s ChirpStack LoRaServer"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-device-tab.png"
  width="100%"
  caption="Device tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

3. Once inside of the DEVICE tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-add-device.png"
  width="100%"
  caption="Add a new device at Device tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-device-reg.png"
  width="100%"
  caption="New device registration form on the RAK’s ChirpStack LoRaServer"
/>

Fill the parameters requested as appears in Figure 39:

*	**Device name and Device description**: These are just descriptive texts. 
*	**Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 39. Users can also add a specific Device EUI directly in the form. 
*	**Device Profile**: To join in OTAA mode, select “DeviceProfile_OTAA”. To join in ABP mode and CN470 frequency, select “DeviceProfile_ABP_CN470”. To join in ABP mode, select “DeviceProfile_ABP”. 

:::tip 📝 NOTE:
ChirpStack doesn’t support AS923 in ABP mode.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-generate-deveui.png"
  width="100%"
  caption="Generate a new Device EUI in the device registration form"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or via Activation-By-Personalization (ABP). In OTAA the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA Mode

###### Configure the OTAA mode on the platform

1. If you have selected “**DeviceProfile_OTAA**” as shown in Figure 40, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa.png"
  width="100%"
  caption="Choosing OTAA mode in the device registration form"
/>

2. A previously created Application Key can be entered here or a new one can be generated automatically by clicking the icon highlighted in red in Figure 42:

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-appkey.png"
  width="100%"
  caption="Application Key for the OTAA mode in the device registration form"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 43, a new device should be listed in the DEVICES tab. The most important parameters, such as the **Device EUI** is shown in the summary. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-deveui.png"
  width="100%"
  caption="New crated device listed in the DEVICES tab"
/>

4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the KEYS(OTAA) tab as shown in Figure 44.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-appkey.png"
  width="100%"
  caption="Application Key associated to the new device"
/>

:::tip 📝 NOTE:
Standard OTAA mode requires the Device EUI, Application Key, and the Application EUI, but in the ChirpStack’s implementation, only Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4600 module’s firmware, in order to resolve this mismatch, users can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 
:::

###### Configure the OTAA mode on the RAK4600

RAK4600 complies with LoRaWAN 1.0.2, by default the LoRa join mode is **OTAA** and the LoRa Class is **Class A**. 

To set up the RAK4600 module to join ChirpStack using OTAA start by connecting the RAK4600 module to the Computer (as in Figure 1) and open the RAK Serial Port  Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

```
at+get_config=lora:status
```
or
```
at+version
```
<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/otaa-connect-rak4600.png"
  width="40%"
  caption="RAK Serial Port Tool connected to a RAK4600"
/>

As an example, the following parameters will be configured in RAK4600:

*	**LoRa join mode**: OTAA
*	**LoRa class**: Class A
*	**LoRa region**: EU868 
*	**Device EUI**: 5e9d1e0857cf25f1 (from ChirpStack registration)
*	**Application EUI**: 5e9d1e0857cf25f1 (from ChirpStack registration)
*	**Application Key**: f921d50cd7d02ee3c5e6142154f274b2 (from ChirpStack registration)

1. Set the LoRa join mode to OTAA

Type command:

```
at+set_config=lora:join_mode:0
```

2.	Set the LoRa Class to Class A

Type command:

```
at+set_confing=lora:class:0
```
3.	Set the frequency/region

Listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics) are the supported frequencies. For Europe Type command: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the Gateway.
:::

4.	Set the Device EUI

 Get the Device EUI number from ChirpStack register. Type command:

```
at+set_config=lora:dev_eui: 5e9d1e0857cf25f1
```

5.	Set the Application EUI

Get the Application EUI number from the ChirpStack register.Type command:

```
at+set_config=lora:app_eui: 5e9d1e0857cf25f1
```
:::tip 📝 NOTE:
Remember, the Application EUI parameter was not required in the ChirpStack platform, therefore it possible to use the same id as the Device EUI. Otherwise, the firmware will complain. 
::: 

6.	Set the Application Key

Get the Application Key from the TTN register. Type command:

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

7. Saving RAK4600 parameters

Reset the RAK4600 for saving the parameters. 


Figure 46 summarizes the set of commands sent over the console for setting the OTAA mode on the RAK4600

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-param-config.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8. Command the RAK4600 to join in OTAA mode

Type command:

```
at+join
```

* After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then “**OK Join Success**” messages will be shown in the console (see Figure 47).


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-success.png"
  width="40%"
  caption="RAK Serial Port Tool, join the network"
/>

* The **JoinRequest** and **JoinAccept** messages are also displayed on the ChirpStack platform, specifically in the **LoRaWAN FRAMES** section, as shown in Figure 48.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-receive.png"
  width="100%"
  caption="ChirpStack Console, checking LoRaWAN join requests"
/>

9.	Send data from RAK4600 to ChirpStack 

E.G. To send the string 123456789 over LoRa port 2, type command:
 
```
at+send=lora:2:1234567890
```

The data will appear in the ChirpStack web (see Figure 49).

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-success.png"
  width="40%"
  caption="RAK Serial Port Tool, send a LoRaWAN message"
/>

On the ChirpStack platform, the messages shall appear in the **LORAWAN FRAMES** tab as shown in Figure 50. Note, by convention, messages sent from nodes to gateways are considered as **Uplink**. While message send by gateways to nodes are considered as a **Downlinks**. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-console-otaa-rec.png"
  width="100%"
  caption="ChirpStack Console, checking LoRaWAN messages received"
/>

##### ABP Mode

###### Configure the ABP mode on the platform

During the registration of a new device, if “**DeviceProfile_ABP**” is selected, as shown in Figure 50, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode. 

:::tip 📝 NOTE:
Check Disable counting frame verification to prevent the node-side counting frame counting from starting from zero after the node is powered on during the test, and the server cannot synchronize the node-side counting and causing the transmission to fail.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-console.png"
  width="100%"
  caption="ChirpStack Console, configuring a device in ABP mode"
/>

After selecting the ABP mode, the following parameters appear in the Activation tab (see Figure 52): 

*	Device address
*	Network Session Key
*	Application Session Key

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-param.png"
  width="100%"
  caption="ChirpStack Console, parameters required for the ABP mode"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**ACTIVATE DEVICE**” button.

###### Configure the ABP mode on the RAK4600

RAK4600 complies with LoRaWAN 1.0.2, by default the LoRa join mode is OTAA and the LoRa Class is Class A. 

To set up the RAK4600 module to join ChirpStack using ABP start by connecting the RAK4600 module to the Computer (as in Figure 1) and open the RAK Serial Port Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

```
at+get_config=lora:status
```
or

```
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/otaa-connect-rak4600.png"
  width="40%"
  caption="RAK Serial Port Tool connected to a RAK4600"
/>

As an example, the following parameters will be configured in RAK4600:

*	**LoRa join mode**: ABP
*	**LoRa class**: Class A
*	**LoRa region**: EU868 
*	**Device address**: 26011af9 (from ChirpStack registration)
*	**Network Session Key**: c280cb8d1df688bc18601a97025c5488(from ChirpStack registration)
*	**Application Session Key**: 4d42ec5caf97f03d833cdaf5003f69e1(from ChirpStack registration)

1. Set the LoRa join mode to ABP

Type command:

```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to Class A

Type command:

```
at+set_confing=lora:class:0
```

3.	Set the frequency/region:

Listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics) are the supported frequencies. For Europe Type command:

```
at+set_config=lora:region:EU868
```

4.	Set the Device Address

Get the Device Address from ChirpStack register, E.G.: To set the LoRa Device Address to “**26011af9**”, type command:

```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key

Get the Network Session Key from the ChirpStack register. E.G.: To set the LoRa Network Session Key to “**c280cb8d1df688bc18601a97025c5488**”, type command:

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key

Get the Network Session Key from the ChirpStack register. E.G.: To set the LoRa Network Session Key to “**4d42ec5caf97f03d833cdaf5003f69e1**”, type command:

```
at+set_config=lora:apps_key: 4d42ec5caf97f03d833cdaf5003f69e1
```

7.	Saving RAK4600 parameters

Reset the RAK4600 for saving the parameters. 

Figure 54 summarizes the set of commands sent over the console for setting the ABP mode on the RAK4600

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-param-serial.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8.	Command the  RAK4600 to join in ABP mode

Type command:

```
at+join
```

Almost immediately after sending the command the “**OK Join Success**” should be replied in the console as shown in Figure 55.

:::tip 📝 NOTE:
The ABP mode in LoRaWAN doesn’t require to join a network before sending a LoRaWAN package. But, in order to keep the consistency of internal states of the firmware of the RAK4600 module, it is still required to send at+join command in the ABP mode.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-send-data.png"
  width="40%"
  caption="RAK Serial Port Tool, sending a message in ABP mode."
/>

9. Send data from RAK4600 to ChirpStack 

E.G. To send the string 123456789 over LoRa port 2, type command:

```
at+send=lora:2:1234567890
```

The console will feedback with an “OK” message (see Figure 55). The sent data shall be displayed on the ChirpStack web.

### LoRa P2P Mode

This section will show how to set and link two RAK4600 units to work in LoRa P2P mode.

1. The two RAK4600 units shall be set to operate at the same frequency, (For this demonstration: EU868)

2. As shown in the previous sections, the setup of the RAK4600 units is done by connecting them with a general-purpose computer through the UART port (see Figure 1). The setup of each RAK4600 can be done separately, but testing the LoRa P2P mode will require having both units connected simultaneously to a UART port (This could be one computer with 2 ports or 2 computers with one UART port each).

3. To set the RAK4600 to work in LoRa P2P mode, open the RAK Serial port tool and send the command as in Figure 56:

```
at+set_config=lora:work_mode:1
```
<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-work-mode.png"
  width="40%"
  caption="RAK4600 setting to LoRa P2P mode"
/>

4. Configure the LoRa P2P parameters for both units. The command for setting the parameters has the format.

```
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```

* Based on the [AT Commands for RAK4600](/Product-Categories/WisDuo/RAK4600-Module/LoRaWAN-P2P/AT-Command-Manual/), the parameters are:

  *	**XXX**: Frequency in Hz.
  *	**Y**: Spreading factor, [6, 7, 8, 9, 10, 11, 12].
  *	**Z**: Bandwidth, [0: 125 kHz,1: 250 kHz,2: 500kHz]
  *	**A**: Coding Rate, [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
  *	**B**: Preamble Length, 5~65535.
  *	**C**: Power in dBm, 5~20.

For this example, the LoRa parameters are:
*	**Link frequency**: 869525000 Hz
*	**Spreading factor**:7
*	**Bandwidth**: 125 kHz
*	**Coding Rate**:4/5
*	**Preamble Length**: 5
*	**Power**: 5 dBm

5. Which is translated into the following RAK4600 AT command and that is sent to both units as shown in Figure 57:

```
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-param-example.png"
  width="40%"
  caption="Setting both RAK4600 units with the LoRa P2P parameters"
/>

6. Next, set the transmission mode of the module. In this example, Unit 1 is set to sender mode, and Unit 2 is set to receiver mode by AT command. See Figure 58.
  * **Unit 1** (Sender):		
```
at+set_config=lorap2p:transfer_mode:2
```
  * **Unit 2** (Receiver):	
```
at+set_config=lorap2p:transfer_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-send-receive-set.png"
  width="80%"
  caption="Set the module in the sender (left) and the receiver (right) mode"
/>

7. Now, to send a message with the string “**123456890**” from Unit1 to Unit2, use the command on Unit 1:

```
at+send=lorap2p:1234567890
```
* The message will be automatically received by Unit 2 (see Figure 59).

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-send-data.png"
  width="80%"
  caption="Sending a message from RAK unit 1(left) to RAK unit 2 (right)"
/>

### Bluetooth Interface

Starting on the version V3.0.0.6, there are three BLE modes in RAK4600 module: **Peripheral mode**, **Central mode**, and **Beacon scan mode**. 

1. **Peripheral mode**: you can scan RAK4600’s BLE and connect with it using your normal mobile devices.
2. **Central mode**: the RAK4600’s BLE will not broadcast so that your normal mobile devices will not able to scan it. But it is useful for IoT use case, for example, you can connect some BLE sensor node to the RAK4600 module. By setting the module in the central mode, the RAK4600 module acts as a BLE gateway. In the central mode, "Nordic UART Service" is supported.
3. **Beacon scan mode**: the RAK4600 module will scan the surrounding BLE signal, it is useful for Beacon use case like iBeacon.

:::tip 📝 NOTE:
For the central and beacon scan patterns, you need to use the API development of Rui to play its role. You can refer to the following address for BLE related API interfaces: [RUI API Reference](/RUI/)
:::

By default, RAK4600’s BLE will work in the peripheral mode so that users can config it over BLE including DFU easily, but you should know that every time after resetting, you have only 60 seconds to connect your mobile device with RAK4600 over BLE, because of power consumption. If you don’t connect with RAK4600 in 60 seconds after resetting it, RAK4600’s BLE will not broadcast for saving power, but there is no limitation once your mobile device has connected with RAK4600 over BLE in 60 seconds.

Surely, you can set RAK4600’s BLE to work in the central mode, when RAK4600 is reset, there will be 30 seconds that RAK4600’s BLE works in the peripheral mode for users to connect RAK4600 through BLE using their mobile device and configure RAK4600 over BLE, in this case, if you don’t connect with RAK4600 through BLE in 30 seconds, RAK4600’s BLE will work in the central mode automatically and it can not be scanned by your mobile devices until you change the work mode to the peripheral mode or reset RAK4600 again.


## Miscellaneous

### Upgrading the Firmware

Before to start working with the RAK4600, it is recommended to keep the RAK4600 module updated to the latest version of the firmware. The latest firmware can be found in the software section of the [RAK4600 Module Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#firmware).

In the following sections, two (2) options for flashing new firmware in a RAK4600 module are shown: **Upgrade through DAPLink** and **Upgrade through UART1**.

#### Firmware Upgrade Through DAPLink

Refer to the [RAKDAP1 Flash and Debug Tool](/Knowledge-Hub/Learn/RAKDAP1-Flash-and-Debug-Tool/) guide in the Knowledge Hub.

#### Through BLE

##### Requirements

The table shows the minimum hardware and software required to perform the firmware upgrade through BLE.

<table style="text-align: left">
<tbody>
        <tr>
            <td>Mobile Telephone</td>
            <td>Android</td>
        </tr>
        <tr>
            <td>DFU Package</td>
            <td><a href="https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/RAK4600_V3.0.0.7_dfu.zip">https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/RAK4600_V3.0.0.7_dfu.zip</a></td>
        </tr>
        <tr>
            <td>nRF connect app</td>
            <td>Nordic Semiconductor</td>
        </tr>
        <tr>
            <td>nRF Master Control Panel (BLE)</td>
            <td>Nordic Semiconductor</td>
        </tr>
</tbody>
</table>

##### Upgrade Procedure

Follow this procedure in order to upgrade the firmware in Device Firmware Upgrade (DFU) mode through the Bluetooth Low Energy (BLE) interface.

1.	Download the latest DFU package of the RAK4600 module from here: [https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/)

2.	Install the mobile app named “**nRF Connect**” or “**nRF Master Control Panel (BLE)**” which are developed by the Nordic Semiconductor company. 

3.	Open the Nordic app and scan for BLE signal. 

4.	Reset the RAK4600 module, its BLE interface should broadcast a device name with format “**RUI_XX:XX:XX**” during 60 seconds as shown in the image below. Please refer to the [Bluetooth Interface](/Product-Categories/WisDuo/RAK4600-Module/LoRaWAN-P2P/Quickstart/#bluetooth-interface) to know more.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-rak4600-device.png"
  width="30%"
  caption="RAK4600 BLE device name"
/>

5.	Select the device and press “**CONNECT**"

6.	Select “**Secure DFU Service**” and disable the “**Notification and indications**” option by pressing the icon highlighted in red in the image below.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-disable-notif.png"
  width="30%"
  caption="Disable the “Notification and indications” option"
/>

7.	Press the icon highlighted in red, a pop up menu should appear as shown in image above.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-bootloader-mode.png"
  width="30%"
  caption="Pop up menu to enter to the bootloader mode"
/>

8.	Press the “**SEND**” button to reset the module and to enter into the DFU mode. 

9.	Scan again with the Nordic app and a device named “**DfuTarg**” should appear as shown in the image below.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-nordic-scan.png"
  width="30%"
  caption="Nordic app scan with RAK4600 in DFU mode"
/>

10.	Press “**CONNECT**”, then click the icon highlighted in red (DFU) in the Figure 68.

11.	Select the “**Distribution packet (ZIP)**” option in the pop up menu and press and “**OK**” as shown in the Figure 69.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-icon.png"
  width="30%"
  caption="DFU icon"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-mode-optios.png"
  width="30%"
  caption="DFU mode options"
/>

12.	In the dialog menu, select the DFU package that was downloaded in step 1. After that, it will start to update the firmware through DFU over BLE interface. The upgrade progress will be shown same as in the image below.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-firmware-update.png"
  width="30%"
  caption="DFU firmware update progress"
/>

13.	Upon completion, the RAK4600 module will restart automatically, and DFU connection will be terminated.

Now, the RAK4600 module is now ready to work with the new firmware.
