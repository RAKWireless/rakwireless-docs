---
sidebar: false
rak_img: /assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/overview.jpg
rak_desc: A quick start guide on how to setup your RAK Commercial Gateway LoRa Server.
tags:
  - Tutorial
header:
  title: Tips on Getting Started With RAK Commercial Gateway LoRa Server
  caption: by <b>Ken Yu</b>
  img: /assets/images/knowledge-hub/banners/getting-started-with-rak-commercial-gateway.jpg
posted: 08/16/2019 10:30 AM
author:
  name: Ken Yu
  about: "Founder and CEO of RAKwireless. Making Things at #Rakwireless with The #RAKstars"
  img: /assets/images/knowledge-hub/authors/ken-yu.jpg
---

# Tips on Getting Started With RAK Commercial Gateway LoRa Server

All RAKwireless [Commercial Gateway](https://store.rakwireless.com/products/rak7258-micro-gateway) devices come with an integrated LoRa Server. This turns what is a simple Packet Forwarder into a complete LoRaWAN Network solution.

The LoRa Server expands the capabilities of the Gateway so it can monitor traffic locally, visualize network load, list active devices and their behavior, show duty cycle loading, etc.

Having this functionality available raises the bar on what one could do with the [LoRaWAN Gateway](https://store.rakwireless.com/collections/lpwan-products). The user gets all the packet metadata, the decrypted payload is visible and you can easily observer the network behavior via the web based visual UI.

Additionally, one can extend the functionality even further by integrating one or more external gateways and aggregate the data in the LoRa Server.

This can than be built on top of by creating custom encoders/decoders or bridging the data to an off-site Application server.

## New to LoRaWAN and LoRa Server?
The built-in LoRa Server is well suited for both testing use case scenarios and integration with existing deployments of [Nodes and Gateways](https://store.rakwireless.com/collections/boards-nodes). It is a great starting tool to learn and develop your own LoRa Network

So, what do you need to do in order to reap the benefits of these features?

### Step 1: Switch to working in the Built-in LoRa Server mode

First and foremost, you need to configure the Gateway to act as a LoRa Server, not just a Packet Forwarder, as is the default setting. To switch between modes, go to the following sub menu (Figure 1)

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/protocol-section.jpg"
  figure-number="1"
  caption="Protocol selection"
/>

LoRa Gateway → LoRa Packet Forwarder → Protocol

You should use the drop-down menu to switch to the Built-in LoRa Server.

### Step 2: Enable the LoRa Network Server

This is done in the General tab of the LoRa Network Server menu. Simply press on the slider to turn it on/off (it is on, when blue). It is mandatory to choose your Region from the menu, make sure this is in line with the allowed bands at your location.

The following parameters can be adjusted or left with their default values (they should be within norm). See Figure 2 for reference:

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/enable-the-lora-server.jpg"
  figure-number="2"
  caption="Enabling the LoRa Server"
/>

* <b>Adaptive Data Rate</b> (ADR): You can set you minimum and maximum data rates depending on whether you want to use (ADR) or not.
* <b>Network ID</b> The ID of the network to be advertised to end devices in case you want to have roaming to other networks.
* <b>Downlink Tx Power</b> The power in dBm the Gateway will be transmitting with (make sure you adhere to local limits).
* <b>Device-status request interval</b> The time in seconds, over which the Gateway sends a status request downlink. Enter 0 to disable it (default).

### Step 3: Adding additional Gateways (Optional)

In this section you can add and External Gateways to work with your LoRa Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/adding-gateways.jpg"
  figure-number="3"
  caption="Adding Gateways"
/>

You can configure the Gateway Backend Configuration in order to point the Gateway to an external MQTT Broker. However, this feature is beyond the scope of this article, as it implies, the data will be handled externally.

### Step 4: Application

In order to have your nodes be authenticated and to see the decrypted data you need to have an Application created. Simply enter a name in the text field and press the “<b>Add</b>” button.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/application-creation.jpg"
  figure-number="4"
  caption="Application creation"
/>

You will be redirected to the main Application screen, where you need to you can start adding Devices to you Application or Change the Application Configuration (Name and Description).

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/main-application-screen.jpg"
  figure-number="5"
  caption="Main Application screen"
/>

Simply input a valid Device EUI and press the “Add” button (you can also do this in batch).

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/adding-a-device.jpg"
  figure-number="6"
  caption="Adding a Device"
/>

You will be redirected to the Device Configuration screen where you need to enter the following:

* <b>Name</b> This is up to your choice
* <b>Class</b> Class A and Class C are supported
* <b>Join Mode</b> OTAA and ABP are both supported
* <b>Application Key</b> Make sure you input a valid Key (this can also be generated randomly)

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/device-param-config.jpg"
  figure-number="7"
  caption="Device parameter configuration"
/>

For the purpose of this example we are using the parameters in Figure 7 above. Thus, upon hitting the “<b>Save & Apply</b>” button your device will request to be authenticated.

If this is successful you should see the data in Figure 8. This would mean that your Device has successfully joined the network and its LoRa Frames will be properly handled (forwarded, decrypted, etc).

<rk-img
  src="/assets/images/knowledge-hub/tutorials/tips-on-getting-started-with-rak-commercial-gateway-lora-server/activated-dev-param.jpg"
  figure-number="8"
  caption="Activated device parameters"
/>

If you go to the Live Device Data tab you can monitor the traffic of your Device. You can observe in real time the meta data and payload (provided the Device is sending Uplink Frames).

<b>There You Go!!</b>

We are going to end the tutorial here. To Summarize:
* You have a working Gateway with a full LoRa Server running on it now
* You have configured your first Application and added your first Device.
* You can see the data sent by the Device in real time.

This is a great start and a solid base for understanding how a LoRaWAN network works. Furthermore, as you have a working server you can now expand its functionality, by adding payload encoders/decoders, integrations, etc.

That, however, is a topic for another article. 😊

<rk-author />