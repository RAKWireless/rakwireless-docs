---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This document is a sample demonstration on how to interconnect your WisGate Edge with its Built-in LoRa Network Server to another WisGate Edge and make an application for the RAK LPWAN Node.
tags:
  - Deployment-Guide
  - WisGate
  - WisDuino
header:
  title: Multi-RAK Gateway Mesh
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/multi-rak-gateway-mesh.jpg
posted: 2/29/2020 10:30 AM
---

# Multi-RAK Gateway Mesh

* [Gateway-A with Built-in LoRa Network Server](#gateway-a-with-built-in-lora®-network-server)
* [Gateway-B with MQTT Bridge](#gateway-b-with-mqtt-bridge)
* [External MQTT Broker Setup](#external-mqtt-broker-setup)
* [RAK LPWAN Node](#rak-lpwan-node)
* [Traffic Testing and Monitoring](#traffic-testing-and-monitoring)

This section is a sample demonstration on how to interconnect your **RAK7249 Macro Outdoor Gateway** with its **Built-in LoRa Network Server** to another **RAK Gateway** and make an application for the **RAK LPWAN Node**. For this sample demonstration, we will be using the RAK811 LPWAN Node.

## Requirements
1. RAK811 LPWAN Node
2. RAK7249 Macro Outdoor Gateway (LoRa Server in use)
3. RAK7249 Macro Outdoor Gateway (MQTT Bridge in use)

# Gateway-A with Built-in LoRa Network Server

This section is the detailed discussion on how to set-up the built-in LoRa Server for your RAK7249 Marco Outdoor Gateway using the Web Management Platform.

We will first set-up the built-in LoRa  network server. Before going through the steps, access the Web Management Platform as discussed in the prior section.

## Packet Forwarder Set-up

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [LoRa Network](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) section of the Web Management Platform document.
:::

1. By navigating through LoRa Gateway tab-> LoRa Packet Forwarder-> General Setup, set the Protocol in the drop-down list to **Build-in LoRa ® Server**.

2. You can leave the rest of the settings with their default values. Remember to "**Save & Apply**".

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/build-in-lora-server.png"
  width="100%"
  caption="Build-in LoRa Server Protocol in Gateway"
/>

## Configure the LoRa Server

:::tip 📝 NOTE
 For other settings and detailed documentation for this section, browse the [LoRa Network](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) section of the Web Management Platform document.
:::

1. Navigate through LoRa Network Server tab -> General and turn-on this feature using the Enable slider. 

2. Select your Region (Frequency Band). For this demonstration, we are going to use **EU863-870 frequency band**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/lora-network-server-general.png"
  width="100%"
  caption="LoRa Network Server General"
/>

## Register RAK7249 Gateway

1. Navigate through LoRa Network Server-> Gateway and enter the **Gateway EUI** in the field.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/adding-gateway-eui.png"
  width="100%"
  caption="Adding Gateway EUI"
/>

2. By pressing the "**Add**" button, you will be redirected into a new tab where you will need to fill the mandatory parameters: **Name** and **Description**.

:::tip 📝 NOTE
 The **Latitude**, **Longitude** and **Altitude** parameters are not mandatory. You can leave them for later, or leave them empty if the gateway is not stationary.
:::

3. If everything is set-up correctly, you should see the same set-up with the image shown below:

:::tip 📝 NOTE
 In order to see the Last Seen status update you need to refresh the page. There should be a value of a couple of seconds, if so than everything went well. In case there is a message **Never Seen**, there is an issue and you best redo the configuration.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/gateway-successful-add.jpg"
  width="100%"
  caption="Gateway Successful Adding"
/>

# Gateway-B with MQTT Bridge

In this section, we will demonstrate on how to point the External RAK7249-B Macro Outdoor Gateway to the built-in LoRa Server of Gateway-A Macro Outdoor Gateway.

## Packet Forwarder Set-up

1. By navigating through LoRa Gateway tab-> LoRa Packet Forwarder-> General Setup, set the Protocol in the drop-down list to **LoRa Gateway MQTT Bridge**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/mqtt-bridge-protocol.png"
  width="100%"
  caption="Set LoRa Gateway MQTT Bridge Protocol"
/>

## LoRa  Gateway MQTT Bridge

1. Navigate through `LoRa Gateway tab -> LoRa Gateway MQTT Bridge -> General Setup` and turn on this feature using the **Enable** slider.

2. Update the credentials needed in the list provided below.

    * **MQTT Broker Address**: IP address of Gateway-A
    * **MQTT Broker Port**: By default, its value is 1883. Please update this if it is not.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/lora-gateway-mqtt-bridge.png"
  width="100%"
  caption="LoRa Gateway MQTT Bridge Configuration"
/>

3. After clicking "**Save & Apply**", all LoRa traffic should be redirected via the Bridge of Gateway-B to the MQTT Broker of Gateway-A.

## Registering RAK7249-B in RAK7249-A's LoRa Network Server

This procedure is the same as when you registered RAK7249-A in its built-in LoRa Network Server. Please refer to the [Gateway-A with Built-in LoRa Network Server](/Knowledge-Hub/Learn/Resources/Multi-RAK-Gateway-Mesh/#gateway-a-with-built-in-lora®-network-server) and repeat the process. The image below is the representation of what your configuration should look like with the two Gateways are added.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/gateway-list.png"
  width="100%"
  caption="LoRa Network Server Gateway List"
/>

You can add more Gateways in the same manner as we did for the two. This is a convenient way to monitor if they are up using the "**Last Seen**" feed.

# External MQTT Broker Setup

This section provides the procedure in setting the external MQTT Broker for your Application Setup.

## Preparing the Raspberry Pi

:::tip 📝 NOTE:
 We are going to use going to use a **Raspberry Pi 3B+** for this tutorial, as the device that is going to be hosting Mosquitto (a popular MQTT broker).
:::

* The following items listed below with its download links for the tools and files needed for this demonstration:
  * [Raspbian Buster Lite Image](https://www.raspberrypi.org/downloads/raspbian/)
  * [Balena Etcher Tool](https://www.balena.io/etcher/)
  * [PuTTY SSH Client](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)

1. Download the Raspbian Buster Lite image and flash it into your SD Card using the Balena Etcher. You can follow the steps provided in the Device Firmware Setup section. Once done, plug the SD card into the **Raspberry Pi 3B+** SD card slot and power it.

:::tip 📝 NOTE:
 It is highly recommended to follow the configurations of [Raspberry Pi headless](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md).
:::

2. Using the PuTTY SSH client, connect to the Raspberry Pi 3B+ with the following credentials:

    * **Username**: pi
    * **Password**: raspberry

3. Execute the following command and note the IP address of the interface you will be using to connect to the network. You will need this, as it will be the address for your MQTT Broker when configuring the Gateway:

```sh
ifconfig
```
<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/rpi-interfaces.jpg"
  width="75%"
  caption="Raspberry Pi interfaces"
/>

## Installing Mosquitto

1. Install the MQTT Broker (Mosquitto) via the command:

```sh
sudo apt install mosquitto mosquitto-clients
```
<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/mqtt-installation.jpg"
  width="80%"
  caption="Mosquitto installation"
/>

2. Mosquitto clients help us easily test MQTT through a command line utility. We will use two command windows; one to subscribe to a topic and one to publish a message to it. Those will be explained in detail further in the tutorial.

:::tip 📝 NOTE:
 This command is not mandatory, however it is recommended as it creates a mosquitto service that will run the broker on startup.
:::

```sh
sudo systemctl enable mosquitto.service
```

## Publish to the MQTT Broker

We will now then configure the Gateway to connect to our external MQTT broker. For the purpose of this example, we are going to use the built-in LoRa Server.

1. First go to the Packet Forwarder Tab and choose Built-in LoRa Server as your Protocol:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/protocol-selection.jpg"
  width="100%"
  caption="Protocol selection"
/>

2. Make sure you have the LoRa Network Server **Enabled** in the General tab:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/builtin-server-activation.jpg"
  width="100%"
  caption="Built-in LoRa Server activation"
/>

3. Add Your Gateway in the Gateway tab if you haven’t done so already. You can also add multiple gateways depending on your preference.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/lora-gateway-config.jpg"
  width="100%"
  caption="LoRa Server Gateway configuration"
/>

4. Finally, go to the **Global Integration** tab and enter the address where you have your Mosquitto instance running in the MQTT Broker Address field leaving the Port with the default `1883` value.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/set-global-integration.jpg"
  width="100%"
  caption="Setting up the Global Integration"
/>

Now that the Gateway parameters are set, we will now register your application in order to be able to send and receive data. We are going to use the **RAK811 LPWAN Node** as an example in the next sub-section.

## Downlink

There is a convenient tool in the Built-in LoRa Server for sending a Downlink frame.

1. You can find it in the Device tab in the LoRa Network Server section. You can choose your Type of frame (**confirmed/unconfirmed**), the Frame port and the Hex Data shown in the image below:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/downlink.jpg"
  width="100%"
  caption="LoRa Network Server Device Downlink tool"
/>

2. Once you schedule a message for downlink it will be displayed in the Live Device Data window. Upon sending the next uplink via the RAK Serial Port Tool you will also see it there, as it needs an uplink frame in order to send the downlink in the RX1 window shown in the image below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/rec-downlink-frm.jpg"
  width="100%"
  caption="Received Downlink Frame"
/>

3. If you want to test the Gateway downlink via the external MQTT Broker, you need to first create a json file which you will be sensing your data in. Below is what the file formatting structure needs to look like:


:::tip 📝 NOTE:
* "**confirmed**": **true** – This is the LoRa frame type. True (confirmed), False (unconfirmed)
* "**data**": "**TEST**" – example data to be sent
* "**fPort**": **10** – the Frame Port Number
:::


```json
{
  "confirmed": true,
  "fPort": 10,
  "data": "1001"
}
```

:::tip 📝 NOTE:
 You need to have a **Base64** encoded **HEX data** for the above to work.
:::

4. Create the file, for example with the following command and copy the data in discussed above:

```sh
sudo nano test.json
```

5. After you have created the file, you need to schedule it for downlink. This means that you have to publish it via Mosquitto with the command:

```sh
sudo mosquito_pub application/{{application_ID{{/device/{{device_EUI}}/ tx –f test.json
```

* The packet will be scheduled for downlink, which you can see in the Gateway Packet logger.
* When the next uplink frame that comes for the Application/Device specified by the **application_ID** and **device_EUI** is received, the Gateway will send the data in the RX1 window to the node. You should have a response similar to the one in **Figure 15**.

# RAK LPWAN Node

This document discusses the steps on how to add your RAK811 LPWAN Node Application into the Built-in LoRa Network Server demonstration. For this demonstration, it is best advised to use our very own [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/).

## Register the Application

1. Connect your RAK811 to your computer by following the [Interfacing your RAK811 LPWAN Node](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#what-do-you-need) section or the RAK811 LPWAN Node. Once connecting is successful, open the RAK Serial Port Tool and press the **RESET Button (RST)** to reboot your device to check the LoRa parameters same with the image shown below:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/rak811-parameters.png"
  width="100%"
  caption="RAK811 LPWAN Node Parameters"
/>

- In case your device is already configured to work in OTAA same with the image above, it will attempt connecting to the gateway but does not get authenticated as it is not registered yet and needs to be configured first.

:::tip 📝 NOTE
Open the [AT Commands for RAK811 LPWAN Node](/Product-Categories/WisDuino/RAK811-Evaluation-Board/Quickstart/#miscellaneous) section of the RAK811 LPWAN Node to check the complete list of AT Commands compatible.
:::

2. Set the Region/Band by plugging in the AT Command below in the RAK Serial Port Tool. For this demonstration, EU868 frequency band shall be used.

```
at+set_config=lora:region:EU868
```

3. Set the authentication mode to OTAA:

```
at+set_config=lora:join_mode:0
```

- Now that your RAK811 LPWAN Node is working in the correct region and mode, you need to fill in the application parameters in your Gateway. This will register the specific device and allow you to exchange data.

4. Navigate through `LoRa Network Server -> Application -> Devices`. Enter a name for your application and press the "**Add**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/add-application.png"
  width="100%"
  caption="Adding Application"
/>

5. Refer back to the RAK Serial Port Tool shown in **Figure 16: RAK811 LPWAN Node Parameters** and take note the **Application EUI** and **Application Key**. Input those into the corresponding fields in the **Application Configuration** screen in the Gateway:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/set-otaa-parameters.png"
  width="100%"
  caption="Adding Application EUI and Key"
/>

:::tip 📝 NOTE
In case your RAK811 LPWAN Node is still not configured, you can manually input an Application EUI and Application Key here or have it randomly generated by clicking the green button at the right side of the input box. You will have these data configured to the RAK811 LPWAN Node using the RAK Serial Port Tool with the commands below. Make sure to change "XXXX" with your equivalent Application EUI and Key.
:::

- Setting the **Application EUI**:

```
at+set_config=lora:app_eui:XXXX
```

- Setting the **Application Key**:

```
at+set_config=lora:app_key:XXXX"
```

6. **Save & Apply** (Make sure the Auto Add Device Slider is in the off position).

## Adding the Device

1. Locate the application created in the previous section and press the "**Edit**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/edit-applications.png"
  width="100%"
  caption="Editing the Application"
/>

2. Enter the **Device EUI** into the corresponding field and press "**Add**" button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/add-device-in-application.png"
  width="100%"
  caption="Adding Device in the Application"
/>

3. Enter a **Device name**, make sure you are in **Class A**, **OTAA** mode. Leave the rest of the parameters with their default settings then **Save & Apply**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/edit-device-parameters.png"
  width="100%"
  caption="Editing Device Parameters"
/>

## Data Transfer Monitoring

By following the steps in the previous sections, you should now have your Device registered and if you click on the **Device EUI**, you will open the corresponding Device window. Go to the **Live Device Data** tab. Here you can monitor data that the application is exchanging in real time.

:::tip 📝 NOTE
Keep the Live Device Data tab opened as we want to monitor traffic.
:::

1. Using the RAK Serial Port Tool, execute the AT command provided below to reboot the RAK811. Alternatively, you could press the **RESET Button (RST)**.

```
at+set_config=device:restart
```

2. Upon reboot, your RAK811 should be able to join via OTAA if all the credentials are authenticated. You should see a **Join** request in the Live Data tab and the **Join Succeeded!** message in the Serial Tool.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/build-in-lora-server/data-monitoring.png"
  width="100%"
  caption="Live Device Data Monitoring"
/>

# Traffic Testing and Monitoring

## Uplink

Now your RAK811 LoRa Node is authenticated with the built-in LoRa Server. As it is connected to the external MQTT Broker via the Global Integration, you can monitor traffic in both the Live Data tab and on the **Raspberry Pi 3B+** where the Mosquitto resides. Let us test this by sending an uplink frame via the RAK811.

1. In the command line window of the Raspberry Pi 3B+, we need to subscribe to the Application/Device we are going to monitor the traffic. This is done via the following command. Take note of the following syntax in the list below to have the command executed correctly:

    * **application_ID**: is the application ID from the Application tab in the Gateway.
    * **device_EUI**: is the Device EUI of the RAK811 LoRa Node

```sh
mosquitto_sub -t application/{{application_ID}}/device/{{device_EUI}}/rx -v
```

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/app-id.jpg"
  width="100%"
  caption="Application ID"
/>

2. After executing the command, you need to send some data via the RAK Serial Port Tool. Use the command below to send an uplink frame on Frame port 1, with the Payload 1110:

```
at+send=lora:1:1110
```
<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/test-uplink.jpg"
  width="100%"
  caption="Test Uplink (Application)"
/>

* Now if you look at the three windows in the image above, in the RAK Serial Port Tool, Live Device Data and the CLI of the Raspberry, you will see that the message arriving is displayed.

3. You can also monitor the Gateway traffic itself. You can do this via the command. Take note of the following syntax in the list below to have the command executed correctly:

:::tip 📝 NOTE
 eui: is the Gateway EUI
:::

```sh
mosquitto_sub -t gateway/{{eui}}/rx -v
```

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/app-test-gateway.jpg"
  width="100%"
  caption="Test Uplink (Gateway)"
/>

* This is very convenient as you have three ways to monitor and you can see the metadata and payload in both the Gateway and via the MQTT Broker.

## Downlink

There is a convenient tool in the Built-in LoRa Server for sending a Downlink frame.

1. You can find it in the Device tab in the LoRa Network Server section. You can choose your Type of frame (confirmed/unconfirmed), the Frame port and the Hex Data shown in the image below:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/downlink-tool.jpg"
  width="100%"
  caption="LoRa Network Server Device Downlink Tool"
/>

2. Once you schedule a message for downlink, it will be displayed in the Live Device Data window. Upon sending the next uplink via the RAK Serial Port Tool you will also see it there, as it needs an uplink frame in order to send the downlink in the RX1 window shown in the image below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/rak-gateway-mesh/downlink-frame.jpg"
  width="100%"
  caption="Received Downlink Frame"
/>

3. If you want to test the Gateway downlink via the external MQTT Broker, you need to first create a json file which you will be sensing your data in. Below is what the file formatting structure needs to look like:

:::tip 📝 NOTE
* "**confirmed**": **true** – This is the LoRa frame type. True (confirmed), False (unconfirmed)
* "**data**": "**TEST**" – example data to be sent
* "**fPort**": **10** – the Frame Port Number
:::

```sh
{
  "confirmed": true,
  "fPort": 10,
  "data": "1001"
}
```

:::tip 📝 NOTE
 You need to have a **Base64** encoded **HEX data** for the above to work.
:::

4. Create the file, for example with the following command and copy the data in discussed above:

```sh
sudo nano test.json
```

5. After you have created the file, you need to schedule it for downlink. This means that you have to publish it via Mosquitto with the command:

```sh
sudo mosquito_pub application/{{application_ID{{/device/{{device_EUI}}/ tx –f test.json
```

* The packet will be scheduled for downlink, which you can see in the Gateway Packet logger.
* When the next uplink frame that comes for the Application/Device specified by the **application_ID** and **device_EUI** is received, the Gateway will send the data in the RX1 window to the node. You should have a response similar to the one in **Figure 27**.

