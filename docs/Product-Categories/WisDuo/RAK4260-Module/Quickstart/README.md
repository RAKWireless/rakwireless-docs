---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4260 Module. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak4260-module/RAK4260-Module.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4260
  - quickstart
  - wisduo
---

# RAK4260 Module Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through the quick start guide of the RAK4260 WisDuo LPWAN Module, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. [**RAK4260 LPWAN Module**](https://store.rakwireless.com/products/rak4260-lora-module?utm_source=RAK4260LPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)
2. USB to TTL Converter
3. [RAKDAP1 DAPLink Tool](https://store.rakwireless.com/products/daplink-tool?utm_source=RAKDAP1&utm_medium=Document&utm_campaign=BuyFromStore)
4. Gateway in range for testing
3. Windows PC

#### Software Tools

1. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
2. [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)
3. [Atmel Studio](https://www.microchip.com/mplab/microchip-studio)
4. [Sample Code](https://github.com/RAKWireless/RAK4260-LoRaNode-demo)

## Product Configuration

### Interfacing with RAK4260

During the configuration of the module, a guided setup is available on the console output. You can connect to the console of the RAK4260 module through the UART interface.

#### Connect to the RAK4260

In this document, a RAK4260 module is used as an example. Use a USB to TTL converter to connect to the module.

1. Connect the RAK4260 to the USB port of a general-purpose computer (Windows PC) using a USB to TTL module (3.3&nbsp;V), as shown in Figure 1.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/1.USB-TTL.png"
  width="55%"
  caption="RAK4260 Module Connection"
/>

2. Any serial communication tool can be used. However, it is recommended to use the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

3. Configure the serial communication tool by selecting the proper port detected by the computer and configure the link as follows:

 * Baud Rate: **115200 bauds**
 * Data Bits: **8 bits**
 * Stop Bits: **1 stop bit**
 * Parity: **NONE**

4. The RAK4260 console output can now be read in the RAK serial port tool, as shown in **Figure 2**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/2.serial.png"
  width="45%"
  caption="RAK Serial Port Tool Connected to RAK4260 Module"
/>

Before establishing a LoRa Connection using the RAK4260 Module, several configurations must be set first, which will be discussed in the next sections.

### Connecting to the Things Network (TTN)

In this section, a practical exercise will be performed to show how to connect the RAK4260 module to The Thing Network (TTN) platform.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/3.ttn-context.png"
  width="65%"
  caption="RAK4260 in the context of the TTN"
/>

As shown in **Figure 3**, the RAK4260 module is one of the devices located on the left side. In the context of an IoT solution, the objective is to deploy devices to sense the relevant process variables and transmit the data to the backend servers located in the cloud. The data will be processed and integrated as part of a larger solution that could generate efficiency, traceability, and predictability capacity among others.

The RAK4260 module can be part of this ecosystem, and the objective of this section is to demonstrate how simple to send data to the TTN using the LoRaWAN protocol. To achieve this, the RAK4260 module must be located inside of the coverage of a LoRaWAN gateway.

<b>Sign up and log in</b>

If you don't have an account yet, head on to the [TTN website](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the Console.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/4.ttn-home.png"
  width="85%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/5.console.png"
  width="85%"
  caption="TTN Console Page"
/>

#### Create a New Application

1. Choose the **APPLICATIONS**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/6.application_section.png"
  width="100%"
  caption="Application Section"
/>

2. Click the “**add application**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/7.adding_application.png"
  width="100%"
  caption="Adding an Application"
/>

* Here are the things that you should take note of in adding an application:

    * **Application ID** - this will be the unique ID of your application in the Network. Note that the characters should be in lower case, no spaces are allowed.
    * **Description** - this is a short and concise human-readable description of your application.
    * **Application EUI** - this will be generated automatically by The Things Network for convenience.
    * **Handler Registration** - handler you want to register this application to.

3. After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see a similar page, as shown in **Figure 8**, then you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/8.application_overview.png"
  width="100%"
  caption="Application Overview"
/>

<b>Register a New Device</b>

1. Scroll down until you see the Devices section. Or, you can click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/9.devices.png"
  width="100%"
  caption="Register a New Device"
/>

2. Then, register a new device by clicking on the "**register devices**".

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/10.adding_device.png"
  width="100%"
  caption="Add your Device"
/>

In this form, the device ID must be unique for the application and must be completed with lower case, alphanumeric characters. The rest of the parameters in the form are very important for the LoRaWAN protocol:

* Device EUI
* Application Key
* Application EUI

The TTN platform can generate these parameters randomly by leaving those fields empty, or you can enter already existing values.

3. Press the “**Register**” button at the bottom of this page to finish the process.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/11.device_overview.png"
  width="100%"
  caption="Device Overview"
/>

### Configuring RAK4260 LPWAN Module

To connect the RAK4260 module to a LoRa P2P Connection or a LoRaWAN network, the module must be configured and LoRa parameters must be set properly. This can be done by modifying the LoRa parameters on the firmware source code and flashing it into the module. The following section will guide you through the process of doing this using Atmel Studio.

#### Parameter and Firmware Setup

To connect your device with TTN, execute the following steps. To do this, fill in the parameters obtained when setting up the TTN.

###### Edit OTAA Parameters in the Code

1. Open your Atmel Studio and navigate to the demo firmware you downloaded from the [RAKwireless GitHub repository](https://github.com/RAKWireless/RAK4260-LoRaNode-demo).

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/12.atmel-studio-main-page.png"
  width="85%"
  caption="Atmel Studio Main Page"
/>

2. Go to **File** → **Open** → **Project/Solution**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/13.open-the-sample-project.png"
  width="85%"
  caption="Open the sample project"
/>

3. Go to the folder where you downloaded the GitHub repository, and select the "**APPS_ENDDEVICE_DEMO1**" project file (it is in the directory with the same name as the file). Then click **Open**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/14.demo-firmware-project-file.png"
  width="85%"
  caption="Demo firmware project file"
/>

4. Once your project has loaded up, you will be presented with a file structure that contains folders and files that you can edit. You need to copy the values of the three (3) parameters shown in **Figure 11** (**Device, Application EUI, and Application Key**) into the corresponding fields in the “**conf_app.h**” file. It is contained in the scr config folder that you can access via Solution Explorer tree.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/15.otaa_atmel_studio.png"
  width="100%"
  caption="Device configuration file (OTAA parameters)"
/>

5. After replacing the default values with the one for the device you registered with TTN, you can proceed to compile the project. There is no need to edit anything else in order to compile firmware that will allow you to connect to the TTN network.

###### Compile the Code

1. Compile the code by going to the **Build** → **Build Solution**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/16.build_solution.png"
  width="100%"
  caption="Compiling the code"
/>

2. The output should have no errors, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/17.successful-compiling-of-the-code.png"
  width="100%"
  caption="Compiling the code"
/>

###### Flashing the Firmware

Once compiled, you can find the output file in the “**Debug**” folder of the directory where you downloaded the firmware. See **Figure 18**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/ttn/18.firmware-hex-file.png"
  width="40%"
  caption="Firmware .hex file"
/>

- As the firmware is ready, proceed to flashing it. In order to do this, you need to utilize your RAKDAP1 hardware tool and the pyocd software tool.

###### Flash the Firmware Using RAKDAP1

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool).

##### Connecting to TTN

1. Connect your USB to the TTL adapter to the corresponding pins of RAK4260, which have been discussed in the earlier section. Refer to **Figure 1**.

Use the serial communication tool to use the guided setup. Based on the firmware you flashed to the RAK4260 Module, it is configured in OTAA Mode. To initiate the connection to TTN, press the key "1" to enter into the Demo Application. A list of frequencies will appear on the console output, choose the one that suits your application. In this example, EU868 is used for the region, since it was the configured parameter at the LoRa gateway. Sample console output is shown in **Figure 19**.


<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/19.Option1_serial.png"
  width="40%"
  caption="Demo application response"
/>

2. Make sure to set the proper configuration in-line with the LoRa Gateway settings to successfully connect the RAK4260 module to a LoRa network.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/20.join-success.png"
  width="40%"
  caption="Join request which shows configured parameters"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/21.application-configuration.png"
  width="40%"
  caption="Connection successful for OTAA mode"
/>

3. Try to send data after a successful connection to the TTN, by pressing the key "2" for the "Send Data" option.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/22.send-data.png"
  width="40%"
  caption="Join request which shows configured parameters"
/>

4. As you can see, the sample data were sent successfully and should be expected to appear on TTN Console.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/23.receive_ttn.png"
  width="100%"
  caption="Received data on TTN side"
/>

### Connecting to ChirpStack

This section shows how to connect the RAK4260 LPWAN Module to the ChirpStack platform. As described in the ChirpStack website:

“ChirpStack provides open-source components for LoRaWAN networks. Together they form a ready-to-use solution including a user-friendly web interface for device management and APIs for integration. The modular architecture makes it possible to integrate within existing infrastructures. All components are licensed under the MIT license and can be used for commercial purposes.”

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/24.loraserver.png"
  width="70%"
  caption="RAK4260 LPWAN Module in the context of the ChirpStack platform"
/>

The architecture of the ChirpStack platform is shown in the previous figure. Similar to the case of TTN, the RAK4260 Module is an **End Device** and will transmit the data to the backend servers through a LoRa gateway. For a more technical understanding of the ChirpStack components, refer to the [Architecture](https://www.chirpstack.io/project/architecture/) page of ChirpStack.

:::tip 📝 NOTE:
To register the device to the ChirpStack network server, you must choose either ABP or OTAA mode.
:::

#### Create a New Application

1. To connect the RAK4260 Module to ChirpStack, first, you need to create an Application.

2. Go to the Applications section then click on the “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/25.chirpstack-create-new-app.png"
  width="100%"
  caption="Creating a new Application"
/>

3. Create an Application named **rak4260_node**. Fill in the required fields, as shown in **Figure 25**.

4. To finish, click the “**CREATE APPLICATION**” button.

ChirpStack LoRaServer supports multiple system configurations, with only one by default. By default, a new Application should be created, although it is possible to reuse the existing ones.

* Application Name: **rak4260_node**
* Application Description: **RAK4260 Module application**
* Service profile: **This field will select the system profile.**

The **Application Description** field is just a descriptive text.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/26.chirpstack-filling-param.png"
  width="100%"
  caption="Filling the Application Parameters"
/>

#### Registering a New Device

1. Click on the Application **rak4260_node** created in the previous step.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/27.chirpstack-list-app.png"
  width="100%"
  caption="List of applications created"
/>

2. Select the “**DEVICES**” tab, as shown in **Figure 28**.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/28.chirpstack-device-tab.png"
  width="100%"
  caption="Device tab of an Application"
/>

3. Inside the “**DEVICES**” tab, create a new device (LoRa node) by clicking on the “**+ CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/29.chirpstack-add-device.png"
  width="100%"
  caption="Add a new device at the Devices tab"
/>

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/30.chirpstack-device-reg.png"
  width="100%"
  caption="New device registration form"
/>

4. Fill in the parameters requested as appears in **Figure 30**:

* **Device name** and **Device description**: These are just descriptive texts.
* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the icon highlighted in red in **Figure 31**. You can also add a specific Device EUI directly in the form.
* **Device-profile**: To join in OTAA mode, select “**device_profile_otaa**” or "**device_profile_abp**" to join in ABP mode.

:::tip 📝 NOTE:
ChirpStack doesn’t support AS923 in ABP mode.
:::

5. Press the “**CREATE DEVICE**” button at the bottom of this page to finish the device registration.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/31.chirpstack-generate-deveui.png"
  width="100%"
  caption="Generate a new Device EUI in the device registration form"
/>

#### LoRaWAN Join Mode

The LoRaWAN specification defines that to join a LoRaWAN network, each end-device has to be personalized and activated. Activation can be done either via Over-The-Air-Activation (OTAA) or via Activation-By-Personalization (ABP). In OTAA, the end-device previously personalized is activated when is deployed or reset. In ABP, personalization and activation are done as a single step.

##### OTAA Mode

###### Configure the OTAA Mode on the Platform

1. If you have selected “**device_profile_otaa**”, then after the device is created, an “**Application Key**” must be also created for this device.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/32.chirpstack-otaa.png"
  width="100%"
  caption="Choosing OTAA mode in the device registration form"
/>

2. A previously created “**Application Key**” can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/33.chirpstack-otaa-appkey.png"
  width="100%"
  caption="Application Key for the OTAA mode in the device registration form"
/>

3. Once the Application Key is added to the form, the process can be finalized by clicking the “**SET DEVICE-KEYS**” button.

* As shown in **Figure 34**, a new device should be listed in the  “**DEVICES**” tab. The most important parameters, such as the “**Device EUI**”, are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/34.chirpstack-deveui.png"
  width="100%"
  caption="New crated device listed in the DEVICES tab"
/>

4. To end the process, it is a good practice to review that the **Application Key**” is properly associated with this device. The “**Application Key**” can be verified in the “**KEYS(OTAA)**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/35.chirpstack-appkey.png"
  width="100%"
  caption="Application Key associated to the new device"
/>

:::tip 📝 NOTE:
Standard OTAA mode requires the Device EUI, Application Key, and the Application EUI. But in ChirpStack’s implementation, only Device EUI and the Application Key are mandatory. The Application EUI is not required and is not recorded in the Application tab.
:::

##### ABP Mode

###### Configure the ABP Mode on the Platform

During the registration of a new device, if “**device_profile_abp**” is selected, then the ChirpStack platform will assume that this device will join the LoRaWAN network using the ABP mode.

1. Fill in the parameters requested as appears in **Figure 36**:

* **Device name** and **Device description**: These are just descriptive texts.
* **Device EUI**: You can also add a specific Device EUI directly in the form.

2. Once these parameters are filled, click the “**CREATE DEVICE**” button.

:::tip 📝 NOTE:
Check the **Disable frame-counter validation** to prevent the node-side counting the frame starting from zero after the node is powered on during the test, and the server cannot synchronize the node-side counting, causing the transmission to fail.
:::

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/36.chirpstack-abp-console.png"
  width="100%"
  caption="ChirpStack Console, configuring a device in ABP mode"
/>

After selecting the ABP mode, the following parameters appear in the “**ACTIVATION**” tab, as shown in **Figure 37**.

* **Device address**
* **Network session key**
* **Application session key**

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/37.chirpstack-abp-param.png"
  width="100%"
  caption="ChirpStack Console, parameters required for the ABP mode"
/>

* The parameters can be generated as random numbers by the platform or can be set with values. Once these parameters are filled properly, the process is completed by clicking on the “**(RE)ACTIVATE DEVICE**” button.

##### Capturing LoRaWAN Frames on ChirpStack Console

###### View LoRaWAN OTAA Frames

1. Go to **Applications** -> **rak4260-node** -> **Devices** -> **rak4260-node**, then select the “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/38.otaa-activation.png"
  width="100%"
  caption="OTAA activation frame"
/>

2. Go to **Applications** -> **rak4260-node** -> **Devices** -> **rak4260-node**, then select “**DEVICE DATA**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/39.otaa-data.png"
  width="100%"
  caption="Device data OTAA frame"
/>

###### View LoRaWAN ABP Frames

1. Go to **Applications** -> **rak4260-node** -> **Devices** -> **rak4260-abp**, then select the “**LORAWAN FRAMES**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/40.chirpstack-abp-frame.png"
  width="100%"
  caption="LoRaWAN ABP frame"
/>

2. Go to **Applications** -> **rak4260-node** -> **Devices** -> **rak4260-abp**, then select “**DEVICE DATA**” tab.

<rk-img
  src="/assets/images/wisduo/rak4260-module/quickstart/chirpstack/41.chirpstack-abp-data.png"
  width="100%"
  caption="Device data ABP frame"
/>

## Miscellaneous

### Firmware Upgrade Through DAPLink

Refer to the [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool) guide in the Accessories Category.
