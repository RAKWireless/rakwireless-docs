---
rak_desc: Contains instructions and tutorials in deploying your RAK11300. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak11300-module/overview/RAK11300_Module_home.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - wisduo
  - quickstart
  - RAK11300
---

# RAK11300 Module Quick Start Guide

This guide covers the following topics:

- [TheThingsNetwork Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#connecting-to-the-things-network-ttn) - How to login, register new accounts and create new applications on TTN.
- [RAK11300 TTN OTAA Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#ttn-otaa-device-registration) - How to add OTAA device on TTN and what AT commands to use on RAK11300 OTAA activation.
- [RAK11300 TTN ABP Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#ttn-abp-device-registration) - How to add ABP device on TTN and what AT commands to use on RAK11300 ABP activation.
- [Chirpstack Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#connecting-with-chirpstack) - How to create new applications on Chirpstack. 
- [RAK11300 Chirpstack OTAA Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#chirpstack-otaa-device-registration) - How to add OTAA device to Chirpstack and what AT commands to use on RAK11300 OTAA activation.
- [RAK11300 Chirpstack ABP Guide](/Product-Categories/WisDuo/RAK11300-Module/Quickstart/#chirpstack-abp-device-registration) - How to add ABP device on Chirpstack and what AT commands to use on RAK11300 ABP activation.
- [Updating RAK11300-Module FW](/Product-Categories/WisDuo/rak11300-module/Quickstart/#upgrading-the-firmware) - Procedures on how to update RAK11300 module firmware.

## Prerequisites

### What Do You Need?

Before going through the step in the installation guide of the RAK11300 WisDuo LPWAN Module, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. RAK11300 WisDuo LPWAN Module 
2. Windows PC
3. USB to UART TTL adapter
4. USB connection and cable for UF2 firmware update


#### Software Tools
1. Serial Terminal software like [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools)


#### List of Acronyms

| Acronym | Definition                                       |
| ------- | ------------------------------------------------ |
| DFU     | Device Firmware Upgrade                          |
| JTAG    | Joint Test Action Group                          |
| LoRa    | Long Range                                       |
| OTAA    | Over-The-Air-Activation                          |
| ABP     | Activation-By-Personalization (ABP)              |
| TTN     | The Things Network                               |
| DEVEUI  | Device EUI (Extended Unique Identification)      |
| APPEUI  | Application EUI (Extended Unique Identification) |
| APPKEY  | Application Key                                  |
| DEVADDR | Device Address                                   |
| NWKSKEY | Network Session Key                              |
| APPSKEY | Application Session Key                          |


## Product Configuration

### Interfacing with RAK11300

RAK11300 module can be configured using AT commands via UART interface. You need a USB to UART TTL adapter to connect the RAK11300 to PC's USB port and a serial terminal tool. You can use [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools) so you can easily send AT commands and view the replies from the console output.

You can also use the USB pins of RAK11300 to send AT commands and update the firmware via .uf2 firmware file.

#### Connect to the RAK11300

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/RAK11300_connection.png"
  width="55%"
  caption="RAK11300 Module Connection"
/>

1. Connect the UART pins of RAK11300 to the USB port of a general-purpose computer using a USB to UART TTL adapter like [RAKDAP1](https://store.rakwireless.com/collections/accessories/products/daplink-tool).

2. You can also establish direct USB connection to the USB Data pins (+) and (-) of the RAK11300. However you still need to power the RAK11300 via external 3.3V on the VDD lines. You cannot use VBUS of the USB port of the PC because it is still at 5V level. 

3. Prepare a serial terminal software like the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools).

4. Configure the serial communication tool by selecting the proper port detected by the computer and configure the link as follows: 

 * Baud Rate: **115200 baud**
 * Data Bits: **8 bits**
 * Stop Bits: **1 stop bit**
 * Parity: **NONE**

#### Configuring RAK11300

The first step is to connect the RAK11300 module to the USB-UART converter computer as described in the previous section. Using a serial communication tool, you can now send commands to the RAK11300. For example, sending the `AT` will display `OK`. For the details of all supported AT commands, refer to [AT Commands for RAK11300](/Product-Categories/WisDuo/RAK11300-Module/AT-Command-Manual/).

:::tip 📝 NOTE:

You can also send AT command via the USB pins of RAK11300.

:::

### Connecting to The Things Network (TTN)

In this section, a quick tutorial guide will show how to connect the RAK11300 module to TTN platform. 

:::tip 📝 NOTE:

In this guide, you need to have a working gateway that is connected to TTN or you have a coverage of TTN community network.

:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/4.ttn-context.png"
  width="95%"
  caption="RAK11300 EVB in the context of the TTN"
/>

As shown in Figure 2, The Things Stack (TTN V3) is an open-source LoRaWAN Network Server suitable for global, geo-distributed public and private deployments as well as for small, local networks. The architecture follows the LoRaWAN Network Reference Model for standards compliancy and interoperability. This project is actively maintained by [The Things Industries](https://www.thethingsindustries.com/).

LoRaWAN is a protocol for low-power wide-area networks. It allows for large scale Internet of Things deployments where low-powered devices efficiently communicate with Internet-connected applications over long range wireless connections.

The RAK11300 WisDuo module can be part of this ecosystem as a device, and the objective of this section is to demonstrate how simple it is to send data to The Things Stack using the LoRaWAN protocol. To achieve this, the RAK11300 WisDuo module must be located inside the coverage of a LoRaWAN gateway connected to The Things Stack server. 

#### Registration to TTN and Creating LoRaWAN Applications

The first step is to go to [The Things Network platform](https://console.cloud.thethings.network/) and select a cluster as shown on Figure 3.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_1.png"
  width="100%"
  caption="Selecting Cluster in TTN V3"
/>

You can use the same login credentials on the TTN V2 if you have one. If you have no account yet, you need to create one.

To register as a new user to TTN, click on **Login with The Things ID** then select **register** on the next page as shown on Figures 4 and 5.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_2.png"
  width="100%"
  caption="Login using TTN account"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_3.png"
  width="100%"
  caption="Registration of new account"
/>

You should now be on the step of creating your TTN account. Fill all the necessary details and activate your account.

After creating an account, you should login on the platform using your username/email and password then click **Submit** as shown on Figure 6.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_4.png"
  width="100%"
  caption="Logging in to TTN platform"
/>

You need to click **Authorize** to proceed.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_5.png"
  width="100%"
  caption="Authorization to TTN"
/>

Now that you are logged in to the platform. The next step is to create an application. Click **Create an application**.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_6.png"
  width="100%"
  caption="Creating TTN application for your LoRaWAN devices"
/>

To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.
 
<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_7.png"
  width="100%"
  caption="Details of the TTN application"
/>

If you have no error on previous step, you should now be on the application console page. The next step is to add end-devices to your TTN application. LoRaWAN specification enforce that each end-device has to be personalized and activated. There are two options on registering devices depending on activation mode selected. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).

#### TTN OTAA Device Registration

You need to go to your application console to be able to register a device. To start adding an OTAA end-device, you need to click **+ Add end device** as shown on Figure 10.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_8.png"
  width="100%"
  caption="Add end device"
/>

To register the module, you need to click first **Manually** then configure the **Frequency Plan**, **LoRaWAN Version** and **Regional Parameter version** as shown on Figures 11 and 12. By default TTN V3, will be setting your device via OTAA mode.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_9.png"
  width="100%"
  caption="Manually register device to TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_10.png"
  width="65%"
  caption="Device configuration"
/>

Then you need to put the OTAA joining parameters **DevEUI**, **AppEUI** and **AppKey**. You can click generate button on the side of the parameters **DevEUI** and **AppKey** to generate a unique combinations. If your device has **DevEUI** on its label or sticker, you must use it to ensure your device uniqueness. The **AppKey** needs to be generated. **AppKey** can be leave as all zero or with specific hexadecimal value. Also, you can add a more descriptive **End device ID** for your device.

:::tip 📝 NOTE:

It is advisable to use a meaningful **End device ID** that will match your device purpose. The End device ID `rak-device-test` is for illustration purpose only.

:::

After putting all the details, you need to click **Register end device** to end your device registration as shown in Figure 13.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_11.png"
  width="65%"
  caption="OTAA Device Registration"
/>

You should now be able to see the device on the TTN console after you fully registered your device as shown on Figure 14.

:::tip 📝 NOTE:

The **AppEUI**, **DevEUI** and **AppKey** are the parameters that you will need to activate your LoRaWAN end-device via OTAA. The **AppKey** is hidden by default for security reason but you can easily show it by clicking the show button. You can also copy the parameters quickly using the copy button.

The three OTAA parameters on the TTN device console are MSB by default. 

These parameters are always accessible on the device console page as shown on Figure 14.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_14.png"
  width="95%"
  caption="OTAA device successfully registered to TTN"
/>


#### OTAA Configuration for TTN

The RAK11300 module supports a series of AT commands to configure its internal parameters and control the functionalities of the module. 

To set up the RAK11300 module to join the TTN using OTAA, start by connecting the RAK11300 module to your computer and open the Serial terminal like the RAK Serial Port Tool. Select the right COM port and set baudrate to 115200.

It is recommended to start by testing the serial communication and verify that the current configuration is working by sending a simple `AT` command:

```
AT

OK
```

You will receive `OK` when you input `AT` command. 

:::tip 📝 NOTE:

If do not receive an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to . Also you can check if the device is powered correctly. If you are getting power from USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/at_ok.png"
  width="55%"
  caption="at+version command response"
/>


The next step is to configure the OTAA LoRaWAN parameters in RAK11300: 

- LoRaWAN join mode: **OTAA**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868** 

Set the LoRaWAN activation to OTAA.

```
AT+NJM=1
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=5
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11300 to match the gateway and LoRaWAN network server. This is specially important on Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the [AT+MASK command that can be found on the AT Commands Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11300-Module/AT-Command-Manual/#atmask).

To illustrate, you can use use sub-band 2 by sending the command `AT+MASK=2`.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/otaaconfig.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

**List of band parameter options**

| Code  | Regional Band |
| ----- | ------------- |
| 0     | AS923-1       |
| 1     | AU915         |
| 2     | CN470         |
| 3     | CN779         |
| 4     | EU433         |
| 5     | EU868         |
| 6     | KR920         |
| 7     | IN865         |
| 8     | US915         |
| 9     | AS923-2       |
| 10    | AS923-3       |
| 11    | AS923-4       |
| 12    | RU864         |




After configuration of the LoRaWAN parameters, the next step is to setup the EUIs and key. You need the use the values from the TTN console you configured in the earlier steps. 


- Device EUI: **70B3D57ED0046DBD**
- Application EUI: **0000000000000000**
- Application Key: **FB55B2F3409A5E2AF3442AC2E99BBD14**


Set the Device EUI.

```
AT+DEVEUI=70B3D57ED0046DBD
```

Set the Application EUI.

```
AT+APPEUI=0000000000000000
```

Set the Application Key.

```
AT+APPKEY=FB55B2F3409A5E2AF3442AC2E99BBD14
```

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/otaaeuis.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

After EUI and keys configuration, you need to restart the device for the changes to take effect. You can do this by inputting `ATZ` command or push the reset button. The Serial port connection is lost after the ATZ command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again. You must be able to see the summary of configurations when you reconnect your device.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/atz.png"
  width="55%"
  caption="Reset the Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/otaa_summary.png"
  width="55%"
  caption="Summary of Device Parameters"
/>


After checking if the parameters are properly set, you can now join the network and send payload.

```
AT+JOIN=1:1:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| w         | Join command - 1: joining, 0: stop joining.                     |
| x         | Auto-join config - 1: auto-join on powerup, 0: no auto-join     |
| y         | Reattempt interval in seconds (7-255) - **This is currently fixed to 30sec**|
| z         | Number of join attempts (0-255) - 0 is default.                 |

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see `AT+JOIN=SUCCESS` status reply as shown on Figure 20.

:::tip 📝 NOTE:

If the OTAA device join failed, you need to check if your device is within reach of a working LoRaWAN gateway that is configured to connect to TTN. It is also important to check that all your OTAA parameters (DEVEUI, APPEUI and APPKEY) are correct by using `AT+DEVEUI=?`, `AT+APPEUI=?` and `AT+APPKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to join again. 
:::

With the end-device properly activated, you can now try to send some payload after successful join.

```
AT+SEND=2:1234
```

Send command format: **`AT+SEND=<port>:<payload>`**

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/join_send.png"
  width="55%"
  caption="OTAA Joining and Sample payload"
/>

You can see the data sent by the RAK11300 module on the TTN device console *Live data* section. Also, the *Last seen* info should be few seconds or minutes ago.


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/otaasend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>


#### TTN ABP Device Registration

To register an ABP device, you need to go to your application console and select the application where you want your device to be added. Then you need to to click **+ Add end device** as shown in Figure 22.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_8.png"
  width="100%"
  caption="Adding ABP Device"
/>

To register the module as ABP device, you need to select **Manually** then click **Show advance activation, LoRaWAN class and cluster settings**. This will allow you to change the activation mode to **Activation by personalization (ABP)** as shown on Figures 23 and 24. By default, TTN V3 registers a device via OTAA so you need to make sure ABP is selected. You can also enable here other **LoRaWAN class capabilities**.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_9.png"
  width="100%"
  caption="Manually register device to TTN"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_1_abp.png"
  width="65%"
  caption="Selecting ABP and LoRaWAN version"
/>

At this step, you need to put the ABP parameters needed by the device. You need to generate the parameters by clicking the Generate button. You must have values for **Device address**, **AppSKey** and **NwkSKey**. The DevEUI is not really needed in ABP but you can add that too. Check if your module has a DevEUI on sticker or QR that you can scan. You can use this as the DevEUI.

Optionally, you can add a more descriptive **End device name** about your device.

:::tip 📝 NOTE:

It is advisable to use a meaningful **End device ID** that will match and describe your device purpose. The End device ID `rak-abp-test` is for illustration purpose only.

:::

After all is configured, you can now click **Register end device** button.
<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_2_abp.png"
  width="65%"
  caption="ABP Device Configuration"
/>

You should now be able to see the device on the TTN console after you fully registered your device as shown on Figure 26.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/image_5_abp.png"
  width="100%"
  caption="ABP device successfully registered to TTN"
/>

#### ABP Configuration for TTN

To set up the RAK11300 module to join the TTN using ABP, start by connecting the RAK11300 module to the Computer and configure it using a Serial terminal software like the RAK Serial Port Tool. Select the right COM port and set baudrate to 115200.

It is recommended to start by testing the serial communication and verify the current configuration is working by sending the basic `AT` command:

```
AT
```

:::tip 📝 NOTE:

If do not receive an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to 115200. Also you can check if the device is powered correctly. If you are getting power from USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/at_ok.png"
  width="55%"
  caption="at+version command response"
/>


The next step is to configure the ABP LoRaWAN parameters in RAK11300: 

- LoRaWAN join mode: **ABP**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868** 

Set the LoRaWAN activation to ABP.

```
AT+NJM=0
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=5
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11300 to match the gateway and LoRaWAN network server. This is specially important on Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the [AT+MASK command that can be found on the AT Commands Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11300-Module/AT-Command-Manual/#atmask).

To illustrate, you can use use sub-band 2 by sending the command `AT+MASK=2`.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abpconfig.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

**List of band parameter options**

| Code  | Regional Band |
| ----- | ------------- |
| 0     | AS923-1       |
| 1     | AU915         |
| 2     | CN470         |
| 3     | CN779         |
| 4     | EU433         |
| 5     | EU868         |
| 6     | KR920         |
| 7     | IN865         |
| 8     | US915         |
| 9     | AS923-2       |
| 10    | AS923-3       |
| 11    | AS923-4       |
| 12    | RU864         |


After configuration of the LoRaWAN parameters, the next step is to setup the device address and sessions keys. You need the use the values from the TTN console. 

- Device Address: **260B7C8C**
- Application Session Key: **5128A8C13BC4A8DA10AA3EF07BE3D610**
- Network Session Key: **351F9B3C6468886E9B811FE596AD38BF**

Set the Device Address.

```
AT+DEVADDR=260B7C8C
```

Set the Application Session Key.

```
AT+APPSKEY=5128A8C13BC4A8DA10AA3EF07BE3D610
```

Set the Network Session Key.

```
AT+NWKSKEY=351F9B3C6468886E9B811FE596AD38BF
```

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abpeuis.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

After Device address and sessions keys configuration, you need to restart the device for the changes to take effect. You can do this by inputting `ATZ` command or push the reset button. The Serial port connection is lost after the ATZ command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again. You must be able to see the summary of configurations when you reconnect your device.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abp_atz.png"
  width="55%"
  caption="Reset the Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abp_summary.png"
  width="55%"
  caption="Summary of Device Parameters"
/>

After checking if the parameters are properly set, you can now join the network and send payload.

```
AT+JOIN=1:1:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**
| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| w         | Join command - 1: joining, 0: stop joining.                 |
| x         | Auto-join config - 1: auto-join on powerup, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - **This is currently fixed to 30sec**      |
| z         | Number of join attempts (0-255) - 0 is default.             |


With the end-device properly activated, you can now try to send some payload after successful join. In ABP, there will be no `AT+JOIN=SUCCESS` reply on the join command.

```
AT+SEND=2:1234
```
Send command format: **`AT+SEND=<port>:<payload>`**

:::tip 📝 NOTE:

If your LoRaWAN payload didn't reach the TTN, check if your device is within reach of a working LoRaWAN gateway that is configured to connect to TTN. It is also important to check that all your ABP parameters (DEVADDR, APPSKEY and NWKSKEY) are correct by using `AT+DEVADDR=?`, `AT+APPSKEY=?` and `AT+NWKSKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to send LoRaWAN payloads again. 
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abpjoin.png"
  width="55%"
  caption="ABP Uplink Sent to TTN server"
/>

You can see the data sent by the RAK11300 module on the TTN device console *Live data* section and the *Last seen* info should be few seconds ago.


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abpsend.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in TTN"
/>

:::tip 📝 NOTE:

The module is not tracking the frame counters when it resets via `ATZ` or when power is recycled. To continuously receive ABP packets even when the device resets, you need to enable `Resets Frame Counters` in Network Layer configuration under general settings section of the device in the TTN V3 console.
:::

### Connecting with ChirpStack

In this section, it shows how to connect the RAK11300 module to the ChirpStack platform.


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/23.chirpstack-platform.png"
  width="60%"
  caption="RAK11300 Module in the Context of the ChirpStack Platform"
/>

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. Like the case of TTN, the RAK11300 module is located in the periphery and will transmit the data to the backend servers through a LoRa gateway. Learn more about [ChirpStack](https://www.chirpstack.io/).

:::tip 📝 NOTE:

It is assumed that you are using RAK Gateway and its built-in ChirpStack. Also, the gateway with the ChirpStack must be configured successfully. For further information, check the RAK documents for more details.

:::

* In summary, these are the requirements: 

  1. Have ChirpStack online gateway, the frequency band of the nodes should be consistent with the frequency band of the gateway in use.
      *	[Connect the Gateway with Chirpstack](/Product-Categories/WisGate/RAK7243/Quickstart/#connect-the-gateway-with-chirpstack)
  2.	The RAK Serial Port Tool provided by RAK
  3.	RAK11300 module

:::tip 📝 NOTE:
The frequency band used in the demonstration is EU868. Use a high-frequency version of RAK11300. The product number should be “**RAK11300**”.
:::

#### Create a New Application

Login to the ChirpStack server using your account and password.

Go to the Application section as shown in the Figure 35.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/24.chirpstack.png"
  width="100%"
  caption="Application Section"
/>

By default, you should create a new application, although you can reuse the existing ones. For this setup, create a new Application by clicking on the “**CREATE**” button, and fill the required parameters as shown in the Figures 36 and 37.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/25.new-application.png"
  width="100%"
  caption="Creating a New Application"
/>


* For this setup, create an Application named “**rak_node_test**”.

ChirpStack LoraServer supports multiple system configurations, with only one by default. 

* **Service profile**: Field is to select the system profile.
* **Payload codec**: It is the parsing method for selecting load data such as parsing LPP format data.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/26.filling-parameters.png"
  width="100%"
  caption="Filling Parameters of an Application"
/>

<b>Register a New Device</b>

1. Choose the **Application** created in the previous step, then select the **DEVICES** tab as shown in Figures 38 and 39.

2. Once done, click “**+ CREATE**”.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/27.application-available.png"
  width="100%"
  caption="List of Applications Created"
/>


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/28.application-page.png"
  width="100%"
  caption="Device Tab of an Application"
/>

3. Once inside of the DEVICE tab, create a new device (LoRaWAN node) by clicking on the “**+ CREATE**” button. 

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/29.adding-node.png"
  width="100%"
  caption="Add a New Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/30.new-device-registration.png"
  width="100%"
  caption="Chirpstack Adding Node into the RAK11300 Module"
/>


6. Once the node is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.

Fill the parameters requested:

* **Device name and Device description**: These are descriptive texts about your device. 

* **Device EUI**: This interface allows you to generate a Device EUI automatically by clicking the generate icon. You can also add a specific Device EUI directly in the form. 

* **Device Profile**: 
  * If you want to join in OTAA mode, select “**DeviceProfile_OTAA**”.
  * If you want to join in ABP mode, select “**DeviceProfile_ABP**”.

:::tip 📝 NOTE:
Device profiles **DeviceProfile_OTAA** and **DeviceProfile_ABP** are only available if you are using the built-in Chirpstack LoRaWAN Server of RAK Gateways.

If you have your own Chirpstack installation, you can set up the device profile with `LoRaWAN MAC version 1.0.3` and `LoRaWAN Regional Parameters revision B` to make it compatible with RAK11300.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/31.adding-parameters.png"
  width="100%"
  caption="Generate a New Device EUI "
/>


#### Chirpstack OTAA Device Registration

1. If you have selected “**DeviceProfile_OTAA**” as shown in Figure 43, then after the device is created, an Application Key must be also created for this device. 

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/32.otaa.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. A previously created Application Key can be entered here, or a new one can be generated automatically by clicking the icon highlighted in red in Figure 44:

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/33.otaa-set-device-keys.png"
  width="100%"
  caption="Chirpstack OTAA Set Application Keys"
/>

3. Once the Application Key is added in the form, the process can be finalized by clicking on the “**SET DEVICE-KEYS**” button. 

* As shown in Figure 45, a new device should be listed in the DEVICES tab. The most important parameters, such as the Device EUI are shown in the summary.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/34.set-device-eui.png"
  width="100%"
  caption="Chirpstack OTAA List of Device in the Device Tab"
/>

4. To end the process, it is a good practice to review that the Application Key is properly associated with this device. The Application Key can be verified in the **KEYS(OTAA)** tab as shown in Figure 46.


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/35.application-key.png"
  width="100%"
  caption="Application Key Associated with the New Device"
/>

:::tip 📝 NOTE:

Standard OTAA mode requires the **Device EUI**, **Application Key**, and **Application EUI**, but in the ChirpStack’s implementation, only the Device EUI and the Application Key are mandatory. The Application EUI is not required and not recorded in the Application tab. Nevertheless, you can reuse the Device EUI as the Application EUI during the configuration in the side of the node. 

:::

#### OTAA Configuration for Chirpstack

The RAK11300 module supports a series of AT commands to configure its internal parameters and control the functionalities of the module. 

To set up the RAK11300 module to join the Chirpstack using OTAA, start by connecting the RAK11300 module to your computer and open the Serial terminal like the RAK Serial Port Tool. Select the right COM port and set baudrate to 115200.

It is recommended to start by testing the serial communication and verify that the current configuration is working by sending a simple `AT` command:

```
AT

OK
```

You will receive `OK` when you input `AT` command. 

:::tip 📝 NOTE:

If do not receive an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to . Also you can check if the device is powered correctly. If you are getting power from USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/at_ok.png"
  width="55%"
  caption="at+version command response"
/>


The next step is to configure the OTAA LoRaWAN parameters in RAK11300: 

- LoRaWAN join mode: **OTAA**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868** 

Set the LoRaWAN activation to OTAA.

```
AT+NJM=1
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=5
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11300 to match the gateway and LoRaWAN network server. This is specially important on Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the [AT+MASK command that can be found on the AT Commands Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11300-Module/AT-Command-Manual/#atmask).

To illustrate, you can use use sub-band 2 by sending the command `AT+MASK=2`.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/otaaconfig.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>


**List of band parameter options**

| Code  | Regional Band |
| ----- | ------------- |
| 0     | AS923-1       |
| 1     | AU915         |
| 2     | CN470         |
| 3     | CN779         |
| 4     | EU433         |
| 5     | EU868         |
| 6     | KR920         |
| 7     | IN865         |
| 8     | US915         |
| 9     | AS923-2       |
| 10    | AS923-3       |
| 11    | AS923-4       |
| 12    | RU864         |


After configuration of the LoRaWAN parameters, the next step is to setup the EUIs and key. You need the use the values from the Chirpstack console you configured in the earlier steps. 

- Device EUI: **5E9D1E0857CF25F1**
- Application EUI: **5E9D1E0857CF25F1**
- Application Key: **F921D50CD7D02EE3C5E6142154F274B2**

:::tip 📝 NOTE:
The Application EUI parameter is not required in the ChirpStack platform; therefore, it possible to use the same id as the Device EUI. 
::: 

Set the Device EUI.

```
AT+DEVEUI=5E9D1E0857CF25F1
```

Set the Application EUI.

```
AT+APPEUI=5E9D1E0857CF25F1
```

Set the Application Key.

```
AT+APPKEY=F921D50CD7D02EE3C5E6142154F274B2
```

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_otaaeuis.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

After EUI and keys configuration, you need to restart the device for the changes to take effect. You can do this by inputting `ATZ` command or push the reset button. The Serial port connection is lost after the ATZ command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again. You must be able to see the summary of configurations when you reconnect your device.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_atz.png"
  width="55%"
  caption="Reset the Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_otaa_summary.png"
  width="50%"
  caption="Summary of Device Parameters"
/>


After checking if the parameters are properly set, you can now join the network and send payload.

```
AT+JOIN=1:1:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**

| Parameter | Description                                                     |
| --------- | --------------------------------------------------------------- |
| w         | Join command - 1: joining, 0: stop joining.                     |
| x         | Auto-join config - 1: auto-join on powerup, 0: no auto-join     |
| y         | Reattempt interval in seconds (7-255) - **This is currently fixed to 30sec**|
| z         | Number of join attempts (0-255) - 0 is default.                 |

After 5 or 6 seconds, if the request was successfully received by a LoRa gateway, then you should see `AT+JOIN=SUCCESS` status reply as shown on Figure 20.

:::tip 📝 NOTE:

If the OTAA device join failed, you need to check if your device is within reach of a working LoRaWAN gateway that is configured to connect to TTN. It is also important to check that all your OTAA parameters (DEVEUI, APPEUI and APPKEY) are correct by using `AT+DEVEUI=?`, `AT+APPEUI=?` and `AT+APPKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to join again. 
:::

With the end-device properly activated, you can now try to send some payload after successful join.

```
AT+SEND=2:1234
```

Send command format: **`AT+SEND=<port>:<payload>`**

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/join_send.png"
  width="55%"
  caption="OTAA Joining and Sample payload"
/>

On the ChirpStack platform, you should see the join and uplink messages in the LORAWAN FRAMES tab as shown in Figure 51. By convention, messages sent from nodes to gateways are considered as **Uplinks** while messages sent by gateways to nodes are considered as **Downlinks**. 


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/41.message-received.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

#### Chirpstack ABP Device Registration

During the registration of a new device, if you select “**DeviceProfile_ABP**”, as shown in Figure 52, then the ChirpStack platform will assume that this device will join to the LoRaWAN network using the ABP mode. 


:::tip 📝 NOTE:

Check “**Disable counting frame verification**”. During the test, when the module is restarted, the frame counting number will be also be restarted from zero. This would cause a synchronization problem with the ChirpStack server treating it as a replay attack. For the testing purpose, it is safe to disable this feature, but remember to activate it in a production environment.

:::


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/42.configuring-device-abp.png"
  width="100%"
  caption="ChirpStack Console, Configuring a Device"
/>


After selecting the ABP mode, the following parameters appear in the Activation tab: 

2. Then, you can see that there are some parameters for ABP in the **“ACTIVATION”** item:

  *	**Device address**
  *	**Network Session Key**
  *	**Application Session Key**

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/43.abp-activation-parameters.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

* The parameters can be generated as random numbers by the platform or can be set with user values. Once these parameters are filled properly, the process is completed by clicking on the “**ACTIVATE DEVICE**” button.


#### ABP Configuration for Chirpstack

To set up the RAK11300 module to join the Chirpstack using ABP, start by connecting the RAK11300 module to the Computer and configure it using a Serial terminal software like the RAK Serial Port Tool. Select the right COM port and set baudrate to 115200.

It is recommended to start by testing the serial communication and verify the current configuration is working by sending the AT command:

```
AT
```

:::tip 📝 NOTE:

If do not receive an `OK` or any reply, you need to check if the wiring of your UART lines is correct and if the baud is correctly configured to 115200. Also you can check if the device is powered correctly. If you are getting power from USB port, ensure that you have a good USB cable.
:::

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/at_ok.png"
  width="55%"
  caption="at+version command response"
/>


The next step is to configure the ABP LoRaWAN parameters in RAK11300: 

- LoRaWAN join mode: **ABP**
- LoRaWAN class: **Class A**
- LoRaWAN region: **EU868** 

Set the LoRaWAN activation to ABP.

```
AT+NJM=0
```

Set the LoRaWAN class to Class A.

```
AT+CLASS=A
```

Set the frequency/region to EU868.

```
AT+BAND=5
```

:::tip 📝 NOTE:

Depending on the Regional Band you selected, you might need to configure the sub-band of your RAK11300 to match the gateway and LoRaWAN network server. This is specially important on Regional Bands like US915, AU915, and CN470.

To configure the masking of channels for the sub-bands, you can use the [AT+MASK command that can be found on the AT Commands Manual](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK11300-Module/AT-Command-Manual/#atmask).

To illustrate, you can use use sub-band 2 by sending the command `AT+MASK=2`.
:::

**List of band parameter options**

| Code  | Regional Band |
| ----- | ------------- |
| 0     | AS923-1       |
| 1     | AU915         |
| 2     | CN470         |
| 3     | CN779         |
| 4     | EU433         |
| 5     | EU868         |
| 6     | KR920         |
| 7     | IN865         |
| 8     | US915         |
| 9     | AS923-2       |
| 10    | AS923-3       |
| 11    | AS923-4       |
| 12    | RU864         |


<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/abpconfig.png"
  width="55%"
  caption="Configuring LoRa Parameters"
/>

After configuration of the LoRaWAN parameters, the next step is to setup the device address and sessions keys. You need the use the values from the TTN console. 

- Device Address: **26011AF9**
- Application Session Key: **4D42EC5CAF97F03D833CDAf5003F69E1**
- Network Session Key: **C280CB8D1DF688BC18601A97025C5488**

Set the Device Address.

```
AT+DEVADDR=26011AF9
```

Set the Application Session Key.

```
AT+APPSKEY=4D42EC5CAF97F03D833CDAf5003F69E1
```

Set the Network Session Key.

```
AT+NWKSKEY=C280CB8D1DF688BC18601A97025C5488
```

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_abpeuis.png"
  width="50%"
  caption="Configuring LoRa Parameters"
/>

After Device address and sessions keys configuration, you need to restart the device for the changes to take effect. You can do this by inputting `ATZ` command or push the reset button. The Serial port connection is lost after the ATZ command or pushing the reset button. The connection must be re-established on the connected computer before log output can be seen or AT commands can be entered again. You must be able to see the summary of configurations when you reconnect your device.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_abp_atz.png"
  width="55%"
  caption="Reset the Device"
/>

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/chirp_abp_summary.png"
  width="55%"
  caption="Summary of Device Parameters"
/>

After checking if the parameters are properly set, you can now join the network and send payload.

```
AT+JOIN=1:1:10:8
```

Join command format: **`AT+JOIN=w:x:y:z`**
| Parameter | Description                                                 |
| --------- | ----------------------------------------------------------- |
| w         | Join command - 1: joining, 0: stop joining.                 |
| x         | Auto-join config - 1: auto-join on powerup, 0: no auto-join |
| y         | Reattempt interval in seconds (7-255) - **This is currently fixed to 30sec**     |
| z         | Number of join attempts (0-255) - 0 is default.             |


With the end-device properly activated, you can now try to send some payload after successful join. In ABP, there will be no `AT+JOIN=SUCCESS` reply on the join command.

```
AT+SEND=2:1234
```
Send command format: **`AT+SEND=<port>:<payload>`**

:::tip 📝 NOTE:

If your LoRaWAN payload didn't reach the Chirpstack server, check if your device is within reach of a working LoRaWAN gateway that is configured to connect to Chirpstack server. It is also important to check that all your ABP parameters (DEVADDR, APPSKEY and NWKSKEY) are correct by using `AT+DEVADDR=?`, `AT+APPSKEY=?` and `AT+NWKSKEY=?` commands. Lastly, ensure that the antenna of your device is properly connected.

After checking all the things above, try to send LoRaWAN payloads again. 
:::

## Miscellaneous

### Upgrading the Firmware
If you want to upgrade the latest version firmware of the module, you can follow this section. The latest firmware can be found in the software section of [RAK11300 Datasheet](/Product-Categories/WisDuo/rak11300-module/Datasheet/#firmware-os).

#### Firmware Upgrade Through USB

##### Minimum Hardware and Software Requirements

Refer to the table for the minimum hardware and software required to perform the firmware upgrade via USB.

| Hardware/Software | Requirement                                   |
| ----------------- | --------------------------------------------- |
| Computer          | A Windows/Ubuntu/Mac computer                 |
| USB Connection    | RAK11300 main board should have a USB connector |
| Firmware File     | **.uf2 firmware** file downloaded from the website |

##### Firmware Upgrade Procedure

Execute the following procedure to upgrade the firmware via USB using the .uf2 firmware file.
1.	Download the latest application firmware of the RAK11300.
    - [RAK11300 Firmware](/Product-Categories/WisDuo/rak11300-module/Datasheet/#firmware-os)
    
2.	Connect the RAK11300 module to the computer via USB. If your main board has no USB connection, you won't be able to upload the .uf2 firmware file.

3.	Activate RAK11300 USB bootloader mode. There are two possible ways to do this.

- Reset the module twice by momentarily shorting the reset pin to ground.
- Hold BootSel button in the RAK11300 module, reset the module (short the reset pin to ground for at least 2 seconds) then wait for the USB Mass Storage `RPI-RP2` before releasing BootSel button.

You need to do either of the two options until the USB Mass Storage `RPI-RP2` shows in your computer. 

4.	Copy the **firmware.uf2** file to the `RPI-RP2` Mass Storage device.

<rk-img
  src="/assets/images/wisduo/rak11300-module/quickstart/uf2.png"
  width="75%"
  caption="Drag the firmware.uf2 file to RPI-RP2 USB Mass Storage"
/>

5. You need to reset the device after updating the `.uf2` firmware file.
