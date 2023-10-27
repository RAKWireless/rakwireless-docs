---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This guide provides a step-by-step tutorial on how to build a sensor network with LoRa P2P and cellular connection with the WisBlock RAK13102 IO module for the Blues.IO Notecard.
tags:
  - Tutorial
  - Environment sensing
  - Building management
  - WisBlock
  - Blues.IO
  - Cellular
  - RAK13102
  - RAK4631
  - Arduino
  - Datacake
  - Blues.ONE
header:
  title: Build a Local Environment Sensor Network with LoRa P2P and a Cellular Connection to the Cloud
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 28/10/2023 8:00 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 2014.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Build a Local Environment Sensor Network with LoRa P2P and a Cellular Connection to the Cloud

One of the challenges when deploying sensors in buildings is the connectivity of these sensors. Wi-Fi or wired connections are often not available, a LoRaWAN setup seems to be over-engineered and expensive.
A possible solution is shown with this local environment sensor network. Multiple sensors deployed in a building are communicating over LoRa P2P to an _**endpoint**_ that has connectivity to the cloud. This endpoint can be a sensor by itself as well.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/hummingbird-network.png"
  width="100%"
  caption="Sensor Network"
/>

With the WisBlock RAK13102 IO module RAKwireless is now offering an easy-to-use and cost-effective solution to build such a local sensor network with cellular connectivity. Partnering with [Blues.IO](https://blues.io/) we designed the RAK13102 to work with any of the [Notecard Cell+Wifi](https://blues.io/notecard-cell-wifi/) modules. These cellular modules provide worldwide coverage and come with 500 MB of free cellular data.

In this "Proof-of-Concept" example multiple environment sensors, like the WisBlock Kit 4 and RAK10702 Comfort Node, are sending their sensor data over a simple P2P connection to an endpoint. This endpoint is built with the RAK13102 IO module for the [Blues.IO](https://blues.io/) Notecard. The endpoint then sends the received data to the Blues NoteHub from where it can be forwarded to other endpoints like an MQTT broker or a visualization tool like [Datacake](https://datacake.co/).

The beauty of using the Blues Notecard is that you set up the cellular modem with simple JSON formatted requests instead of learning complicated AT commands (that are different between different suppliers and modem chips). Blues has a very good [documentation](https://dev.blues.io/api-reference/notecard-api/introduction/) for these JSON formatted strings, and if you look into the [source code](https://github.com/RAKWireless/Hummingbird-Blues-Gateway/blob/main/src/blues.cpp) that is used in this tutorial, you can see how easy this can be implemented in your application code.

Read on to learn how easy it is to use the Blues.IO Notecards and build a local sensor network using LoRa P2P and cloud connectivity through a cellular connection.

## WisBlock Goes Blues

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/RAK-Whirls.png"
  width="30%"
  caption="RAKwireless"
/>
<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/blues_logo.jpg"
  width="25%"
  caption="Blues.IO"
/>


### Setup and Use the Local Sensor Network

:::tip 📝 NOTE
In the following text, the network is addressed as _**Hummingbird**_ which is the internal code name for this Proof-of-Concept project.
:::


#### Hardware
The only thing that requires some work is to set up the WisBlock system with the Blues Notecard. To connect the Blues Notecard RAKwireless has the RAK13102 WisBlock IO module. This module uses the IO slot of the RAK19007 Base Board.

:::tip 📝 NOTE
If you purchase the [Blues.ONE](https://store.rakwireless.com/collections/cellular-iot), as an assembled and ready-to-use device, you can flash the provided firmware for this project and start immediately to setup the sensor network.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/hardware.jpg"
  width="100%"
  caption="Hardware Setup"
/>


The only thing that requires some work is to set up the WisBlock system with the Blues NoteCard using the [RAK13102 NoteCarrier](https://store.rakwireless.com/collections/wisblock-wireless). The RAK13102 plugs into the WisBlock Base Board IO slot, so you can only use any of the following base boards:

  - RAK19007
  - RAK19001
  - RAK19010
  - RAK19011

The RAK13102 module blocks the Sensor Slots A and B, but it has a mirror of these two slots, so they still can be used. Optionally, you can add a RAK1906 environment sensor to the WisBlock Base Board.

| Module             | Function                                | Storepage                                                                                                                                                                   |
| ------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK4631            | MCU & LoRa transceiver                  | [RAK4630](https://store.rakwireless.com/products/rak4631-lpwan-node)                                                                                                        |
| RAK13102           | WisBlock NoteCarrier for Blues NoteCard | [RAK13102](https://store.rakwireless.com/collections/wisblock-wireless)                                                                                                     |
| Blues NoteCard     | Cellular modem                          | A Notecard with wolrdwide coverage can be bought bundled with the RAK13102. Otherwise, [choose a Notecard for your requirements.](https://shop.blues.io/collections/notecard) |
| RAK1906 (optional) | Temperature and humidity sensor         | [RAK1906](https://store.rakwireless.com/products/rak1906-bme680-environment-sensor)                                                                                         |


The code for the endpoint is available in the [GitHub Hummingbird Gateway repo](https://github.com/beegee-tokyo/Hummingbird-Blues-Gateway) and supports beside of the communication to the Blues Notecard a RAK1906 environment sensor. The code can be used as well for a simple sensor node with a RAK1906 sensor without the Blues Notecard.

### Setting Up Your Notecard

You have to setup your Notecard at Blues.IO before it can be used. There are two options to setup the Notecard:
1. Follow the [Quickstart](https://dev.blues.io/quickstart/) guides provided by Blues.
2. Set up the device with AT commands directly through the WisBlock's USB.

#### Setup Through the USB of the RAK13102 Notecard

Connect the RAK13102 Notecarriers USB to your computer. WisBlock has to be powered separate, and then use the [Blues Quickstart.](https://dev.blues.io/quickstart/)

#### Setup Through AT Commands

:::tip ⚠️ IMPORTANT
Setting up the Notecard through AT commands will always override settings that are stored in the Notecard.
To remove settings saved from AT commands, use the AT command **`ATC+BR`** to delete all settings saved from AT commands before.
:::

Connect the WisBlock USB port to your computer and connect a serial terminal application to the COM port.

##### Setup the Product UID

To connect the Blues Notecard to the NoteHub, a **Product UID** is required. This product UID is created when you create your project in NoteHub, as shown in [Set Up Notehub](https://dev.blues.io/quickstart/notecard-quickstart/notecard-and-notecarrier-f/#set-up-notehub) section.

1. Get the Product UID from your NoteHub project.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Notehub-Product-UID.png"
  width="100%"
  caption="Notecard PUID"
/>

2. Use the `ATC+BEUI` command to save the Product UID in the WisBlock: `ATC+BUID=com.my-company.my-name:my-project`
3. Replace `com.my-company.my-name:my-project` with your project EUI.
4. The current product UID can be queried with **`ATC+BUID=?`**.


##### Select SIM card
There are two options for the Blues Notecard to connect. The primary option is to use the eSIM that is already on the Notecard. However, there are countries where the eSIM is not working yet. In this case, you need to use an external SIM card in the RAK13102 WisBlock module. This can be a SIM card from your local cellular provider or an IoT data SIM card, for example, a SIM card from [Monogoto](https://monogoto.io/) or another provider.

Use the AT command `ATC+BSIM` to select the SIM card to be used.

Syntax: **`ATC+BSIM=<SIM>:<APN>`**

- `<SIM>` == 0 to use the eSIM of the Notecard only
- `<SIM>` == 1 to use the external SIM card of the RAK13102 Notecarrier only
- `<SIM>` == 2 to use the external SIM card as primary and the eSIM of the Notecard as secondary
- `<SIM>` == 3 to use the external SIM card as secondary and the eSIM of the Notecard as primary

If the external SIM card is selected (`<SIM>` is 1, 2, or 3), the next parameter is the APN that is required to connect the Notecard.
`<APN>`: For example, the **`internet`** to use with the Filipino network provider **SMART**.

Several carriers will have a website dedicated to manually configuring devices, while others can be discovered using APN discovery websites like [apn.how.](https://apn.how/)

The current settings can be queried with **`AT+BSIM=?`**.

##### Select Notecard Connection Mode

The Blues Notecard supports different connection modes. For testing purposes, it might be required to have the NoteCard connected continuously to the cellular network, but in a battery-powered application, the preferred connection type would be minimal, which connects to the cellular network only when data needs to be transferred.

The connection mode can be set up with the AT command `AT+BMOD`.

Syntax: **`AT+BMOD=<mode>`**
- `<mode>` == 0 to use the minimal connection mode
- `<mode>` == 1 to use the continuous connection mode
- The default is to use minimal connection mode.
- The current status can be queried with **`AT+BMOD=?`**.

##### Delete Blues Notecard Settings

If required all stored Blues NoteCard settings can be deleted from the WisBlock Core module with the `AT+BR` command.

:::tip 📝 NOTE
_Requires restart or power cycle of the device_
:::

Syntax: **`AT+BR`**

##### Reset Blues Notecard to Factory Settings

If required, the Blues NoteCard can be reset to factory default.

:::tip ⚠️ WARNING
<i><h6>⚠️ THIS WILL ERASE ALL SETTINGS IN THE NOTECARD! ⚠️ </h6></i>
:::


All saved settings like Product UID, connection settings, APN in the NoteCard _**WILL BE ERASED**_

Syntax: **`AT+BRES`**


#### Get Blues Notecard Status

Show NoteCard connection status with **`req:hub.status`**.

Syntax: **`AT+BLUES`**

----

#### Send Request to the Notecard

:::tip 📝 NOTE
_This works only for simple requests without parameters, like hub.status or hub.sync_.
::::

Sends a simple request to the Notecard and returns the response from the Notecard.

Syntax: **`AT+BREQ=<request>`**

- `<request>` is the Notecard request, for example, **`card.version`** or **`card.location`**.


### LoRa P2P Setup
Besides the cellular connection, you need to set up as well the LoRa P2P connection.
When using LoRa P2P, all devices need to be set up to the same frequency, bandwidth, and spreading factor.

On all the devices (with or without the cellular Notecard), the LoRa P2P settings can be set with AT commands (required once, settings are saved in flash memory):

```log
        // Switch to LoRa P2P mode
AT+NWM=0
		// !!!!!!!!!! Device might restart !!!!!!!!!!
        // Setup LoRa P2P settings
		// 916.1MHz, SF 7, BW 125kHz, CR 4/5, Preamble Length 8, TX power 22
AT+P2P=916100000:7:125:0:8:22
        // Setup AppKey
```
A detailed manual for the AT commands are in the [AT-Command-Manual.](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/)


## Hummingbird Sensor

This guide uses the "standard" data format of WisBlock examples. Many of the existing WisBlock example application can be used without any changes:

- [WisBlock-Seismic-Sensor](https://github.com/beegee-tokyo/WisBlock-Seismic-Sensor)
- [WisBlock-Seismic-Sensor](https://github.com/beegee-tokyo/WisBlock-Seismic-Sensor/tree/main/PIO-Arduino-Seismic-Sensor) (only the Arduino version of the application, the RUI3 version needs some changes)
- [RUI3 door/window status](https://github.com/beegee-tokyo/RUI3-RAK13011)
- [RAK4631-Kit-4-RAK1906](https://github.com/beegee-tokyo/RAK4631-Kit-4-RAK1906)
- [RAK4631-Kit-1-RAK1901-RAK1902-RAK1903](https://github.com/beegee-tokyo/RAK4631-Kit-1-RAK1901-RAK1902-RAK1903)
- [WisBlock Indoor Air Quality Sensor](https://github.com/beegee-tokyo/WisBlock-IAQ-PM-CO2-VOC-EPD)

For other (older) example codes, it is required to add the LoRa P2P send functionality and/or extend the CayenneLPP data packet with the device identifier. I use the DevEUI of the device as a unique device identifier, as every WisBlock Core has the unique DevEUI printed on its label.

In the examples, the [CayenneLPP library from ElectronicCats](https://github.com/ElectronicCats/CayenneLPP) is used with the class extension. When using this library, the data packet is generated in **`WisCayenne g_solution_data(255);`**. The unique device identifier (the DevEUI) is added at the start of the existing data packet using this few lines of code:


### Using WisBlock-API-V2

```cpp
// Add the device DevEUI as a device ID to the packet
g_solution_data.addDevID(LPP_CHANNEL_DEVID, &g_lorawan_settings.node_device_eui[4]);
```

<b> Before sending the packet </b>

```cpp
send_p2p_packet(g_solution_data.getBuffer(), g_solution_data.getSize());
```


### Using RUI3

```cpp
uint8_t packet_buffer[g_solution_data.getSize() + 8];
if (!api.lorawan.deui.get(packet_buffer, 8))
{
	MYLOG("UPLINK", "Could not get DevEUI");
}

memcpy(&packet_buffer[8], g_solution_data.getBuffer(), g_solution_data.getSize());

for (int idx = 0; idx < g_solution_data.getSize() + 8; idx++)
{
	Serial.printf("%02X", packet_buffer[idx]);
}
Serial.println("");
```


<b> Before sending the packet </b>


```cpp
api.lorawan.psend(g_solution_data.getSize() + 8, packet_buffer);
```


## Hummingbird in Action

### Hummingbird Gateway

After doing the hardware setup, flashing the firmware, and following Blues Quickstart guides to set up my Notehub and the Notecard, my existing sensors can send data to the Hummingbird Gateway.

Here is an example log output with the result of the CayenneLPP data parsing and then the packet sent from the gateway over the Notecard:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/log_gateway.png"
  width="100%"
  caption="Gateway Log"
/>


### Blues Notehub

The notes send to the Blues Notehub can be seen in the **Events** listing of the Notehub:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Notehub-Event-Log.png"
  width="100%"
  caption="Notehub Events Log"
/>


To forward the messages to Datacake, a **Route** has to be defined in the Notehub. There are many easy-to-follow tutorials available in the Blues documentation. In this case, the [Datacake Tutorial](https://dev.blues.io/guides-and-tutorials/routing-data-to-cloud/datacake/) is used to setup the routing.

Once the route has been set up, the Notefiles used in this route have to be selected. As all sensor node data are sent as **sensor.qo**, this **Note** has to be enabled.

:::tip 📝 NOTE
Different to the tutorial steps, the Transform Data option is not used.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Notehub-Routes-Setup.png"
  width="100%"
  caption="Notehub Route Setup"
/>

Now, the routing events are shown in the **Routes log view**.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Notehub-Routes-Log.png"
  width="

When opening one of these events, the sensor data can be seen in the **Body view**.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Notehub-Routes-Event.png"
  width="100%"
  caption="Notehub Routed Data"
/>


### Datacake

To visualize the data in Datacake, a matching device has to be defined, as it is described in the [Datacake Tutorial](https://dev.blues.io/guides-and-tutorials/routing-data-to-cloud/datacake/).

:::tip 📝 NOTE
As Hummingbird is sending sensor data from different sensor nodes to one end-point, a different payload decoder is required.
:::

In this guide, the payload decoder separates the incoming sensor data depending on the sensor node ID into different fields. It is required to distinguish between the data of the sensor nodes. The Datacake decoder for this task is the file [Decoder.js](https://github.com/RAKWireless/Hummingbird-Blues-Gateway/blob/main/Decoder.js) in the code repository.

The content of this file has to be copied into the **HTTP Payload Decoder** of Datacake.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Payload-Decoder.png"
  width="100%"
  caption="Payload Decoder"
/>

Then, the matching fields for the sensor data have to be created. The easiest way to do this is to wait for incoming data from the sensors. If no matching field exists, the data will be shown in the **Suggested Fields** list in the configuration.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Suggested-Fields.png"
  width="100%"
  caption="Suggested Fields"
/>

The sensor data can be easily assigned to fields using the **Create Field** button.


Once all the sensor data is assigned to fields, you can start with the visualization of the data.

As you can see, there are multiple fields for battery, temperature, and humidity. Each field has a leading device ID.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Created-Fields.png"
  width="100%"
  caption="Create Fields"
/>

#### Data Visualization

Datacake offers two options for viewing data. The first option is the **Device Dashboard**, which can become quite crowded and confusing when dealing with data from multiple devices. To make it easier to view the data per device, a device-independent Dashboard is created, which allows to create tabs to separate the data from the different sensors.

You can create similar dashboards using the **Add Dashboard** option on the left side of the Datacake panel.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Dashboard-Create.png"
  width="100%"
  caption="Create Dashboard"
/>

After creating the **Dashboard**, click the button on the right side to enable editing, then on **Edit Dashboard Meta**.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Create-Tabs-1.png"
  width="100%"
  caption="Enable editing Dashboard"
/>

In the opening window, add a tab for each of my Hummingbird sensor devices. This allows you to sort the data from the different sensor nodes into these tabs.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Create-Tabs-2.png"
  width="100%"
  caption="Add tabs"
/>

The final result for the two sensors and the sensor gateway that are sending sensor data looks like this:

- **Sensor Device 1 is a particulate matter sensor**

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Sensor-Tabs-1.png"
  width="100%"
  caption="PM Sensor"
/>

- **Sensor Device 2 is a barometric pressure sensor**

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Sensor-Tabs-2.png"
  width="100%"
  caption="Barometer Sensor"
/>

- **Sensor Device 3 is the Hummingbird gateway that I equipped with an environment sensor**

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-sensor-network/Datacake-Sensor-Tabs-3.png"
  width="100%"
  caption="Sensor Gateway"
/>
