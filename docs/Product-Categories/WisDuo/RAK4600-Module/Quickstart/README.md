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
4. RAKDAP1 Flash and Debug Tool
5. LoRaWAN gateway in range

#### Software Tools

1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/)
2. [RAK4600 Firmware](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/)
3. [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)


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
</tbody>
</table>


## Product Configuration

### Interfacing with RAK4600

In this section, a RAK4600 module is used for demonstration. Use a USB to TTL adapter to connect to the module. In case the RAK4600 module is mounted on an evaluation board or on a custom PCB, use the appropriate interface to connect to the serial port.

:::warning ⚠️ WARNING
Before powering the RAK4600 Module, you should install the LoRa and BLE Antenna first. Not doing so might damage the board.
:::

 Use Figure 1 as reference to connect the antennas.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/RAK4600_Module_Antenna_Label.svg"
  width="80%"
  caption="RAK4600 Module antenna connection "
/>

1. Connect the RAK4600 to USB to TTL adapter, as shown in Figure 2.

In general, the pin marked as TX of the adapter must be connected to the USART1_RX pin of the RAK4600, and the RX pin of the adapter connects to RAK4600 USART1_TX pin.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/usb-ttl.png"
  width="75%"
  caption="RAK4600 module connection"
/>

2. Open RAK Serial Port Tool. Any serial communication tool will work, but it is recommended to use the RAK Serial Port Tool.

    * [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools)

3.	Configure the serial communication tool by selecting the proper port of the computer UART port and configure the link as: **115200 baud, 8 bits, no parity bit, and 1 stop bit**.

* Choose the correct COM Port number for your device. Go to your Device Manager by pressing **Windows + R** and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/comport.png"
  width="75%"
  caption="Device Manager"
/>

* Look for Ports (COM & LPT). Find the name of your USB UART Module driver and take note of the COM Port Number.

4.	The RAK4600 console output can now be read in the RAK serial port tool as shown in Figure 4.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/rak-serial-port-connected.png"
  width="40%"
  caption="Device Manager"
/>

### Configure the RAK4600

#### Through UART

To connect the RAK4600 module to a LoRa P2P connection or a LoRaWAN network, the module must be configured and LoRa parameters must be set by sending AT commands through the UART interface.

Connect the RAK4600 module to the computer as described in the previous section. Using the serial communication tool, it is possible to send commands to the RAK4600, for example, sending the `at+version` will display the current firmware version as shown in Figure 5.

The full set of RAK4600 AT commands can be found in Appendix I.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/at-version-response.png"
  width="40%"
  caption="at+version command response"
/>

#### Through the BLE Interface

To configure the RAK4600 through BLE, execute the following steps. 

1. Install the “**nRF Connect**” or “**nRF Master Control Panel (BLE)**” app provided by Nordic Semiconductor.
2. Open the app on the mobile device and scan for BLE devices.
3. Reset the RAK4600 module. After a few seconds, a list of BLE devices will be shown. The RAK4600 is listed as “**RUI-XX: XX: XX**"

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/nordic-scan.jpg"
  width="30%"
  caption="Nordic app scan for BLE devices"
/>

:::tip 📝 NOTE:
Connect within 60 seconds after resetting the RAK4600. After that time, the BLE broadcast will be stopped.
:::

4.	After pressing the “**CONNECT**” button, a list will be displayed as in Figure 6. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-connect.jpg"
  width="30%"
  caption="Options to connect to the RAK4600"
/>

5.	Select the service named “**Nordic UART Service**”.
6.	To receive data from mobile, enable notification on TX Characteristic by clicking on the arrow.
<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-enable.png"
  width="30%"
  caption="Enable notifications from mobile phone"
/>

7.	Write a value on RX Characteristic by clicking on the arrow.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-send-at-command.png"
  width="30%"
  caption="Send AT command"
/>

7.	A small input window will pop-up. This is where AT commands shall be typed. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-at-command-input.png"
  width="30%"
  caption="nRF app AT command input window"
/>

8.	Send AT commands to RAK4600 in this dialog. 

    * For example, to check the current firmware version, type “at+version” then click on “SEND” button.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-send-at-version.jpg"
  width="30%"
  caption="nRF app, send at command over BLE"
/>

The console output shall be read on the TX Characteristic of the App.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-at-version-response.png"
  width="30%"
  caption="AT response over BLE"
/>

### Connecting to The Things Network (TTN)

In this section, a practical exercise will be performed to show how to connect the RAK4600 to The Things Network (TTN) platform.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-context.png"
  width="75%"
  caption="RAK4600 in the context of the TTN"
/>

As shown in Figure 13, the RAK4600 is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense the relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that, ultimately, could generate efficiency, traceability, predictability capacity among others.

The RAK4600 can be part of this ecosystem, and the objective of this section is to demonstrate how simple is to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK4600 must be located inside of the coverage of a LoRaWAN gateway. 


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

1. Choose the **APPLICATIONS**. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/application-page.png"
  width="100%"
  caption="Application Page"
/>

2. Click on the **Add application** link.


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note in adding an application:

    * **Application ID**: This will be the unique id of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description**: This is a short and concise human readable description of your application.
    * **Application EUI**: This will be generated automatically by The Things Network for convenience.
    * **Handler Registration**: The handler you want to register this application to.


3. After you fill in the necessary information, press the **Add application** button at the bottom of this page. 


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

Before RAK4600 can communicate via The Things Network, you need to register it with an application.

1. Scroll down until you see the Devices section or you can click the **DEVICES** button at the top. 
2. Then, register a new device by clicking on the **register device**.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/devices.png"
  width="100%"
  caption="Register your Device"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/adding-device.png"
  width="100%"
  caption="Add your Device"
/>

The device ID must be unique for the application and must be completed with a lower case, alphanumeric characters. The rest of the parameters are very important for the LoRaWAN protocol:

* **Device EUI**
* **Application Key**
* **Application EUI**

The TTN platform can generate these parameters randomly by leaving those fields empty or the user can enter already existing values. 

3. Press the **Register** button at the bottom of this page to finish the process. The registration results will appear the same as shown in Figure 21.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/device-overview.png"
  width="100%"
  caption="Device Overview"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join in a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via **Over-The-Air-Activation (OTAA)** or via **Activation-By-Personalization (ABP)**. In OTAA, the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA mode

###### Configure the OTAA mode on the TTN platform

As shown in Figure 22, the default activation mode in TTN is the OTAA mode. Therefore, no further actions are required on the platform side. Three parameters from the TTN setup are used to configure the RAK4600: **Device EUI**, **Application EUI**, and **App Key**.

###### Configure the OTAA mode on the RAK4600

RAK4600 complies with the LoRaWAN 1.0.2 specification. By default, the LoRa join mode is **OTAA** and the LoRa Class is **Class A**.

To set up the RAK4600 to join the TTN using OTAA, start by connecting the RAK4600 to the Computer as shown in section [Interfacing with RAK4600](#interfacing-with-rak4600). Open the RAK Serial Port Tool and wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

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

Type the command:

```
at+set_config=lora:join_mode:0
```
2.	Set the LoRa Class to Class A

Type the command:  

```
at+set_config=lora:class:0
```

3.	Set the frequency/region

The supported frequencies are listed in the [Datasheet](../../Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics). For Europe region, type the command: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the Gateway.
:::

4.	Set the Device EUI

Get the Device EUI number from TTN register. Type the command: 

```
at+set_config=lora:dev_eui:5e9d1e0857cf25f1
```

5. Set the Application EUI

Get the Application EUI number from the TTN register. Type the command: 

```
at+set_config=lora:app_ eui:5e9d1e0857cf25f1
```

6.	Set the Application Key

Get the Application Key from the TTN register. Type the command: 

```
at+set_config=lora:app_key:f921d50cd7d02ee3c5e6142154f274b2
```

7.	Save the RAK4600 parameters

Reset the RAK4600 to activate the new configuration. 


* Figure 23 summarizes the set of commands sent over the console for setting the OTAA mode on the RAK4600.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-param-config.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8. Send the command to join LoRaWAN with OTAA mode.

Type the command:

```
at+join
```

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then “**OK Join Success**” messages will be shown in the console.


9.	Send data from RAK4600 to TTN. 

For example, to send the string 123456789 over LoRa port 2, type the command:

```
at+send=lora:2:1234567890 
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-send-data.png"
  width="40%"
  caption="RAK4600 example of sending data to TTN, in this case the string 123456890 over port 2"
/>

The data will appear in TTN Application Data.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-receive.png"
  width="100%"
  caption="TTN’s website showing the data received from RAK4600"
/>


##### ABP Mode

###### Configure the ABP mode on the platform

1. To join TTN in ABP mode, first, it is required to switch the activation method to ABP. This is done on the TTN website under the **Device Settings** page.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-switch.png"
  width="100%"
  caption="TTN Console, change the activation mode to ABP"
/>

* For ABP mode, the TTN parameters needed are the following: **Device Address**, **Network Session Key**, and **App Session Key**. 

:::tip 📝 NOTE:
These fields can be left empty in the form and TTN will complete them with random values. In other cases, the user can complete them with specific values.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-param.png"
  width="100%"
  caption="TTN Console, ABP mode’s parameters"
/>

2. After completing the activation mode change, the device parameters will be the summarized the same as shown in Figure 28.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-param.png"
  width="100%"
  caption="TTN Console, ABP mode configuration finalized"
/>

###### Configure the ABP mode on the RAK4600

To set up the RAK4600 to join the TTN using ABP, start by connecting the RAK4600  to the Computer as shown in section [Interfacing with RAK4600](#interfacing-with-rak4600). Open the RAK Serial Port Tool and wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

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

1.	Set LoRa join mode to ABP.

Type the command:

```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to Class A.

Type the command:

```
at+set_config=lora:class:0
```

3.	Set the frequency/region.

The supported frequencies are listed in the [Datasheet](../../../../../Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics). For Europe region, type the command:


```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band of the Gateway.
:::

4. Set the Device Address.

Get the Device Address from TTN register,

For example, to set the LoRa Device Address to “**26011af9**”, type the command:

```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key.

Get the Network Session Key from the TTN register. 

For example, to set the LoRa Network Session Key to “**c280cb8d1df688bc18601a97025c5488**”, type the command:

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key.

Get the Application Key from the TTN register.

For example, to set the Application Key to “**4d42ec5caf97f03d833cdaf5003f69e1**”, type the command:

```
at+set_config=lora:apps_key: 4d42ec5caf97f03d833cdaf5003f69e1
```

7. Save RAK4600 parameters.

Reset the RAK4600 to save the parameters. 


Figure 30 summarizes the set of commands sent over the console for setting the ABP mode on the RAK4600:

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-set-param.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8.	Command the RAK4600 to join in ABP mode

Type the command:

```
at+join
```

:::tip 📝 NOTE:
When using ABP mode, there is no handshaking between the RAK4600 and the network. The LoRaWAN end-device doesn’t require to join a network before sending a LoRaWAN package to the air. But, in order to keep the consistency of internal states of the firmware of the RAK4600, it is still required to send `at+join` command in the ABP mode.
:::

* Almost immediately after sending the command, the “**OK Join Success**” should be replied in the console.

9.	Send data from RAK4600 to TTN.

For example, to send the string 123456789 over LoRa port 2, type command:

```
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-otaa-send-data.png"
  width="40%"
  caption="RAK Serial Port Tool, sending a message in ABP mode."
/>

The data will appear in TTN Application Data.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ttn-abp-receive.png"
  width="100%"
  caption="TTN Application Data showing received data from RAK4600"
/>

### Connecting with ChirpStack

This section shows how to connect the RAK4600 to the ChirpStack platform. As described in the ChripsStack website:

“The ChirpStack open-source LoRaWAN Network Server stack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including a user-friendly web-interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-architecture.png"
  width="60%"
  caption="RAK4600 in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in Figure 33. Similar to the case of TTN, the RAK4600 is located in the periphery and will transmit the data to the backend servers through a LoRa gateway. More information about this architecture can be found at [https://www.chirpstack.io/](https://www.chirpstack.io/).

* In this section, it is assumed that you are using a RAK LoRa gateway, such as RAK7243. The gateway must be configured and registered previously to ChirpStack deployment. More information about that can be found at: [Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)

:::tip 📝 NOTE:
The frequency band used in this example is EU868 which is supported by the high-frequency version of RAK4600.
:::

* This are the steps needed in order to send data to the ChirpStack platform from a RAK4600 module: 

  1. Create a new Application.
  2. Register a new device on the platform: 
  3. Configure the Join Mode:
      *	OTAA mode on the platform
      *	OTAA mode on the RAK4600
      *	ABP mode on the platform
      *	ABP mode on the RAK4600 
  4. Send data from the RAK4600 and receive it at the platform

The following section gives the details of each of these aforementioned steps. As usual, you must choose to use either ABP or OTAA mode to register the device to the network server.

#### Create a new Application

Go to the Application section then click on “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-applications.png"
  width="100%"
  caption="Application section of the RAK’s ChirpStack LoRaServer"
/>


ChirpStack LoraServer supports multiple system configurations, with only one by default. By default, a new Application should be created, although it is possible to reuse the existing ones. For this setup, create a new Application by clicking on the "**CREATE APPLICATION**" button.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-create-new-app.png"
  width="100%"
  caption="Creating a new Application on the RAK’s ChirpStack LoRaServer"
/>

Create an Application named “**rak_node_test**”. Fill the required parameters as shown in Figure 36. To finish, click on **CREATE APPLICATION** button. 

* **Application Name**: rak_node_test
* **Application Description**: test 
* **Service profile**: field is to select the system profile.

The **Application Description** field is just a descriptive text.

 “**CREATE APPLICATION**”.
<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-filling-param.png"
  width="100%"
  caption="Filling parameters of an Application on the RAK’s ChirpStack LoRaServer"
/>

<b>Register a new Device</b>

1. Click on the Application “**rak_node_test**” created in the previous step.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-list-app.png"
  width="100%"
  caption="List of applications created on the RAK’s ChirpStack LoRaServer"
/>

2. Select the “**DEVICES**” tab as shown in Figure 38.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-device-tab.png"
  width="100%"
  caption="Device tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

3. Inside of the “DEVICES” tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-add-device.png"
  width="100%"
  caption="Add a new device at DEVICES tab of an Application on the RAK’s ChirpStack LoRaServer"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-device-reg.png"
  width="100%"
  caption="New device registration form on the RAK’s ChirpStack LoRaServer"
/>

Fill the parameters requested as appears in Figure 40:

*	**Device name** and **Device description**: These are just descriptive texts. 
*	**Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in Figure 41. You can also add a specific Device EUI directly in the form. 
*	**Device-profile**: To join in OTAA mode, select “**device_profile_otaa**” or “**device_profile_abp**” to join in ABP mode. 

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

1. If you have selected “**device_profile_otaa**”, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa.png"
  width="100%"
  caption="Choosing OTAA mode in the device registration form"
/>

2. A previously created Application Key can be entered here or a new one can be generated automatically by clicking on the icon highlighted in red :

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-appkey.png"
  width="100%"
  caption="Application Key for the OTAA mode in the device registration form"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 44, a new device should be listed in the  “**DEVICES**” tab. The most important parameters, such as the **Device EUI** are shown in the summary. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-deveui.png"
  width="100%"
  caption="New crated device listed in the DEVICES tab"
/>

4. To end the process, it is a good practice to review that the “**Application Key**” is properly associated with this device. The “**Application Key**” can be verified in the “**KEYS(OTAA)**” tab.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-appkey.png"
  width="100%"
  caption="Application Key associated to the new device"
/>

:::tip 📝 NOTE:
Standard OTAA mode requires the Device EUI, Application Key, and the Application EUI, but in the ChirpStack’s implementation, only Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab. Nevertheless, the Application EUI is a mandatory parameter in the RAK4600 module firmware. To resolve this mismatch, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 
:::

###### Configure the OTAA mode on the RAK4600

RAK4600 complies with the LoRaWAN 1.0.2 specification. By default, the LoRa join mode is **OTAA** and the LoRa Class is **Class A**.

To set up the RAK4600 to join ChirpStack using OTAA, start by connecting the RAK4600 to the Computer as shown in section [Interfacing with RAK4600](#interfacing-with-rak4600). Open the RAK Serial Port Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

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
*	**Device EUI**: d045f054b2797f7c (from ChirpStack registration)
*	**Application EUI**: d045f054b2797f7c (from ChirpStack registration)
*	**Application Key**: 2cb29aefe344c0d7b044e7a7d3afda6d (from ChirpStack registration)

1. Set the LoRa join mode to OTAA.

Type the command:

```
at+set_config=lora:join_mode:0
```

2.	Set the LoRa Class to Class A.

Type the command:

```
at+set_config=lora:class:0
```
3.	Set the frequency/region.

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics). For Europe region, type the command: 

```
at+set_config=lora:region:EU868
```

:::tip 📝 NOTE:
Remember that the device frequency shall be in the same frequency band than the Gateway.
:::

4.	Set the Device EUI.

 Get the Device EUI number from ChirpStack register. Type the command:

```
at+set_config=lora:dev_eui:d045f054b2797f7c
```

5.	Set the Application EUI.

Get the Application EUI number from the ChirpStack register. Type the command:

```
at+set_config=lora:app_eui:d045f054b2797f7c
```
:::tip 📝 NOTE:
Remember, the Application EUI parameter was not required in the ChirpStack platform, therefore it possible to use the same id as the Device EUI. Otherwise, the firmware will complain. 
::: 

6.	Set the Application Key.

Get the Application Key from the TTN register. Type the command:

```
at+set_config=lora:app_key:2cb29aefe344c0d7b044e7a7d3afda6d
```

7. Save RAK4600 parameters.

Reset the RAK4600 to save the parameters. 

Figure 47 summarizes the set of commands sent over the console for setting the OTAA mode on the RAK4600

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-param-config.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8. Command the RAK4600 to join in OTAA mode

Type the command:

```
at+join
```

* After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then “**OK Join Success**” message will be shown. 

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-success.png"
  width="40%"
  caption="RAK Serial Port Tool, join the network"
/>

* The **JoinRequest** and **JoinAccept** messages are also displayed on the ChirpStack platform, specifically in the **LORAWAN FRAMES** section.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-receive.png"
  width="100%"
  caption="ChirpStack Console, checking LoRaWAN join request"
/>

9.	Send data from RAK4600 to ChirpStack 

For example, to send the string 1234567890 over LoRa port 2, type the command:
 
```
at+send=lora:2:1234567890
```


<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-otaa-send.png"
  width="40%"
  caption="RAK Serial Port Tool, send a LoRaWAN message"
/>

On the ChirpStack platform, the messages shall appear in the “**LORAWAN FRAMES**” tab as shown in Figure 51.<br>

:::tip 📝 NOTE:
By convention, messages sent from nodes to gateway are considered as **UPLINK** while message send by gateway to nodes are considered as a **DOWNLINK**. 
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-console-otaa-rec.png"
  width="100%"
  caption="ChirpStack Console, checking LoRaWAN messages received"
/>

##### ABP Mode

###### Configure the ABP mode on the platform

During the registration of a new device, if “**device_profile_abp**” is selected, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode. 

Fill the parameters requested as appears in Figure 52:

* **Device name** and **Device description**: These are just descriptive texts.
* **Device EUI**: You can also add a specific Device EUI directly in the form. 

Once these parameters are filled, click on “**CREATE DEVICE**” button. 

:::tip 📝 NOTE:
Check Disable counting frame verification to prevent the node-side counting frame counting from starting from zero after the node is powered on during the test, and the server cannot synchronize the node-side counting, causing the transmission to fail.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-console.png"
  width="100%"
  caption="ChirpStack Console, configuring a device in ABP mode"
/>

After selecting the ABP mode, the following parameters appear in the **ACTIVATION** tab below: 

*	**Device address**
*	**Network Session Key**
*	**Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-param.png"
  width="100%"
  caption="ChirpStack Console, parameters required for the ABP mode"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**(RE)ACTIVATE DEVICE**” button.

###### Configure the ABP mode on the RAK4600


RAK4600 complies with the LoRaWAN 1.0.2 specification. The RAK4600 LoRa join mode is **OTAA** by default and the LoRa Class is **Class A**.

To set up the RAK4600 module to join ChirpStack using ABP start by connecting the RAK4600 to the Computer as shown in section [Interfacing with RAK4600](#interfacing-with-rak4600). Open the RAK Serial Port Tool, wait for the communication to start. It is recommended to test the serial communication by sending an AT command as:

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
*	**Network Session Key**: c280cb8d1df688bc18601a97025c5488 (from ChirpStack registration)
*	**Application Session Key**: 4d42ec5caf97f03d833cdaf5003f69e1 (from ChirpStack registration)

1. Set the LoRa join mode to ABP.

Type the command:

```
at+set_config=lora:join_mode:1
```

2.	Set the LoRa Class to Class A.

Type the command:

```
at+set_config=lora:class:0
```

3.	Set the frequency/region.

The supported frequencies are listed in the [Datasheet](/Product-Categories/WisDuo/RAK4600-Module/Datasheet/#rf-characteristics). For Europe region, type the command: 

```
at+set_config=lora:region:EU868
```

4.	Set the Device Address.

Get the Device Address from ChirpStack registration. For example, to set the LoRa Device Address to “**26011af9**”, type the command:

```
at+set_config=lora:dev_addr:26011af9
```

5.	Set the Network Session Key.

Get the Network Session Key from the ChirpStack registration. 
For example, to set the LoRa Network Session Key to “**c280cb8d1df688bc18601a97025c5488**”, type the command:

```
at+set_config=lora:nwks_key:c280cb8d1df688bc18601a97025c5488
```

6.	Set the Application Key.

Get the Network Session Key from the ChirpStack registration.
For example, to set the LoRa Network Session Key to “**4d42ec5caf97f03d833cdaf5003f69e1**”, type the command:

```
at+set_config=lora:apps_key: 4d42ec5caf97f03d833cdaf5003f69e1
```

7.	Save RAK4600 parameters.

Reset the RAK4600 to save the parameters. 

Figure 55 summarizes the set of commands sent over the console for setting the ABP mode on the RAK4600.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-abp-param-serial.png"
  width="40%"
  caption="RAK4600 LoRa parameters configuration over the Serial Port Tool"
/>

8.	Command the RAK4600 to join in ABP mode.

Type the command:

```
at+join
```

Almost immediately after sending the command, the “**OK Join Success**” should be replied in the console as shown in Figure 56.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/abp-join.png"
  width="40%"
  caption="RAK Serial Port Tool join LoRaWAN in ABP mode."
/>

:::tip 📝 NOTE:
The ABP mode in LoRaWAN doesn’t require to join a network before sending a LoRaWAN package. But, in order to keep the consistency of internal states of the firmware of the RAK4600, it is still required to send at+join command in the ABP mode.
:::

9. Send data from RAK4600 to ChirpStack.

For example, to send the string 1234567890 over LoRa port 2, type the command:

```
at+send=lora:2:1234567890
```
The console will feedback with an “OK” message.
<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/abp-send-reply.png"
  width="40%"
  caption="RAK Serial Port Tool ABP message sent "
/>

The sent data shall be displayed on the ChirpStack console on **LORAWAN FRAMES** tab.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/chirpstack-console-abp-uplink.png"
  width="1000%"
  caption="ChirpStack console UPLINK LoRaWAN frame in ABP mode."
/>

### LoRa P2P Mode

This section will show how to set and link two RAK4600 units to work in LoRa P2P mode.

1. The two RAK4600 units shall be set to operate at the same frequency, for this demonstration: **EU868**.

2. As shown in the previous sections, the setup of the RAK4600 units is done by connecting them with a general-purpose computer through the UART port as shown in section [Interfacing with RAK4600](#interfacing-with-rak4600). The setup of each RAK4600 can be done separately, but testing the LoRa P2P mode will require having both units connected simultaneously to a UART port (This could be one computer with 2 ports or 2 computers with one UART port each).

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
  *	**Z**: Bandwidth, [0:125&nbsp;kHz, 1:250&nbsp;kHz, 2:500&nbsp;kHz]
  *	**A**: Coding Rate, [1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8]
  *	**B**: Preamble Length, 5~65535.
  *	**C**: Power in dBm, 5~20.

For this example, the LoRa parameters are:
*	**Link frequency**: 869525000&nbsp;Hz
*	**Spreading factor**:7
*	**Bandwidth**: 125&nbsp;kHz
*	**Coding Rate**:4/5
*	**Preamble Length**: 5
*	**Power**: 5&nbsp;dBm

5. The set parameters are translated into the following RAK4600 AT command that is sent to both units as shown in Figure 60:

```
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-param-example.png"
  width="40%"
  caption="Setting both RAK4600 units with the LoRa P2P parameters"
/>

6. Next, set the transmission mode of the RAK4600. In this example, Unit 1 is set to sender mode, and Unit 2 is set to receiver mode by AT command.
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

7. Now, to send a message, the string “**123456890**” from Unit1 to Unit2. Type the command on Unit 1:

```
at+send=lorap2p:1234567890
```
* The message will be automatically received by Unit 2.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/p2p-send-data.png"
  width="80%"
  caption="Sending a message from RAK unit 1(left) to RAK unit 2 (right)"
/>

### Bluetooth Interface

Starting with the firmware version V3.0.0.6, there are three BLE modes in RAK4600 module: **Peripheral mode**, **Central mode**, and **Beacon scan mode**. 

1. **Peripheral mode**: In this mode, you can scan RAK4600 BLE and connect with it using your normal mobile devices.
2. **Central mode**: The RAK4600 BLE will not broadcast so that your normal mobile devices will not able to scan it. But it is useful for IoT use case, for example, you can connect some BLE sensor node to the RAK4600. By setting the RAK4600 in the central mode, the RAK4600 acts as a BLE gateway. In the central mode, "Nordic UART Service" is supported.
3. **Beacon scan mode**: The RAK4600 will scan the surrounding BLE signal. This mode is useful to scan for beacons like iBeacon near you.

:::tip 📝 NOTE:
For the central and beacon scan patterns, you need to use the API development of RUI to play its role. Refer to the following link for BLE related API interfaces: [RUI API Reference](/RUI/)
:::

By default, RAK4600 BLE will work in the peripheral mode so that you can configure it over BLE including DFU easily. Note that every time after resetting, you have only 60 seconds to connect your mobile device with RAK4600 over BLE. If you don’t connect with RAK4600 in 60 seconds after resetting it, the RAK4600 BLE radio will not broadcast to reduce power consumption. There is no limitation once your mobile device has connected with RAK4600 over BLE in 60 seconds.

Surely, you can set RAK4600 BLE to work in the central mode. After a RAK4600 module reset, there will be 30 seconds that RAK4600 BLE radio works in the peripheral mode. In peripheral mode, you can connect to RAK4600 through BLE using your mobile device and configure RAK4600 over BLE. But if you don’t connect with RAK4600 through BLE in 30 seconds, the RAK4600 BLE radio will change to central mode automatically. In central mode, RAK4600 can not be scanned by your mobile devices until you change the work mode to the peripheral or reset RAK4600 again.


## Miscellaneous

### Upgrading the Firmware

Before to start working with the RAK4600, it is recommended to keep the RAK4600 updated to the latest version of the firmware. The latest firmware can be found in the software section of the [RAK4600 Module Datasheet](../../../../../Product-Categories/WisDuo/RAK4600-Module/Datasheet/#firmware).

In the following sections, two (2) options for flashing new firmware in a RAK4600 are shown: **Upgrade through DAPLink** and **Upgrade through BLE**.

#### Firmware Upgrade Through DAPLink

Refer to [RAKDAP1 Flash and Debug Tool Overview](../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview)

<!--
Refer to the [RAKDAP1 Flash and Debug Tool](/Knowledge-Hub/Learn/RAKDAP1-Flash-and-Debug-Tool/) guide in the Knowledge Hub.
To flash a new firmware we use RAKDAP1 tool a SWD adapter. It requires the Python3 tool pyocd on your computer.

##### Installing Environment

1.  Install Python3   

Because **pyocd** needs the **Python environment**, we must install **Python3**. We can download the Python3 package from Python website: [https://www.python.org/downloads/](https://www.python.org/downloads/) and install it using the default configuration. After installing successfully, we can check the version as follow:    

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/py_ver_check.png"
  width="40%"
  caption="Check Python version"
/> 

:::tip 📝 NOTE:
If the Python version is above 3.4, pip3 is automatically installed. But if not, we should install pip3 manually.     
:::

2. Install pyocd using pip

Use the following command to install pyocd:     

```
pip3 install pyocd   
```

* After installation, check the version of pyocd as follow:    

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/pyocd_ver_check.png"
  width="20%"
  caption="Check pyocd version"
/> 
   
3. Install the support package for the MCU

After installing pyocd successfully we need to install the support package for the MCU. The command format is:

```
pyocd pack --install <MCU model>
```

**Example**: The MCU model for this board is **nrf52832** so the correct command is:

```
pyocd pack --install nrf52
```

The support packages are MDK packages. You can see a complete list at [https://www.keil.com/dd2/Pack/](https://www.keil.com/dd2/Pack/).

##### Flash the firmware using DAPLink and RAKDAP1

1. Connect the board to RAKDAP1

Connect the 4 debug/programming SWD pins of the board to the RAKDAP1 adapter(| VCC | GND | SWIO | SWCLK |)

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/rak4600-swd.png"
  width="60%"
  caption="RAK4600 to SWD debug pins"
/> 

2. Flash the latest firmware

To flash the latest firmware version the command is:

```
pyocd flash -target nrf52 <path/to/file.bin>
```    

* Depending on the size of the file, the flashing can take several minutes. The success or failure of the flashing will be shown in the command line:    

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/pyocd_flash_log.png"
  width="65%"
  caption="PYOCD flash log"
/>
-->

#### Through BLE

##### Requirements

The table shows the minimum hardware and software required to perform the firmware upgrade through BLE.

<table style="text-align: left">
<tbody>
        <tr>
            <td>Mobile Phone</td>
            <td>Android</td>
        </tr>
        <tr>
            <td>DFU Package</td>
            <td><a href="https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/">https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/</a></td>
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

1.	Download the latest DFU package of the RAK4600 from here: [https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/DFU-Package/](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/)

2.	Install the mobile app named “**nRF Connect**” or “**nRF Master Control Panel (BLE)**” which are developed by the Nordic Semiconductor company. 

3.	Open the Nordic mobile app and scan for BLE signal. 

4.	After resetting the RAK4600, its BLE interface should broadcast a device name with format “**RUI_XX:XX:XX**” during 60 seconds as shown in the image below. Refer to the [Bluetooth Interface](/Product-Categories/WisDuo/RAK4600-Module/LoRaWAN®-P2P/Quickstart/#bluetooth-interface) to know more.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-rak4600-device.png"
  width="30%"
  caption="RAK4600 BLE device name"
/>

5.	Select the device and press **CONNECT**.

6.	Select **Secure DFU Service** and enable the “**Indications**” option by pressing the icon highlighted in red in Figure 64.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-disable-notif.png"
  width="30%"
  caption="Enable the “Indications” option"
/>

7.	On Buttonless DFU, click on the up arrow, then a pop up menu should appear as shown in Figure 65.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-bootloader-mode.png"
  width="30%"
  caption="Pop up menu to enter to the bootloader mode"
/>

8.	Press the **SEND** button to reset the RAK4600 and to enter into the DFU mode. 

9.	Scan again with the Nordic app and a device named **DfuTarg** should appear as shown in Figure 66.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/ble-nordic-scan.png"
  width="30%"
  caption="Nordic app scan with RAK4600 in DFU mode"
/>

10.	Press **CONNECT**, then click the icon highlighted in red (DFU).

11.	Select the **Distribution packet (ZIP)** option in the pop up menu and press **OK**.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-icon.png"
  width="30%"
  caption="DFU icon"
/>

11.	Select the **Distribution packet (ZIP)** option in the pop up menu and press **OK**.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-mode-optios.png"
  width="30%"
  caption="DFU mode options"
/>

12.	In the dialog menu, select the DFU package that was downloaded in step 1. After that, it will start to update the firmware through DFU over BLE interface. The upgrade progress will be shown the same as Figure 69.

<rk-img
  src="/assets/images/wisduo/rak4600-module/quickstart/dfu-firmware-update.png"
  width="30%"
  caption="DFU firmware update progress"
/>

13.	Upon completion, the RAK4600 will restart automatically, and DFU connection will be terminated.

Now the RAK4600 is ready to work with the new firmware.
