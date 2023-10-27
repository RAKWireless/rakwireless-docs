---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: This guide provides a step-by-step tutorial on how to build a location tracker with the WisBlock RAK13102 IO module for the Blues.IO Notecard.
tags:
  - Tutorial
  - Location tracker
  - WisBlock
  - Blues.IO
  - Cellular
  - RAK13102
  - RAK4631
  - Arduino
  - Datacake
  - Blues.ONE
header:
  title: Build a Location Tracker for Cellular and LoRaWAN Connections
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 28/10/2023 8:00 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 2014.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Build a Location Tracker for Cellular and LoRaWAN Connections

Location tracking devices are today used in a lot of scenarios. Be it cargo, package, logistic truck tracking, or in other applications.
One of the challenges for such devices is the connectivity. LoRaWAN provides low-power long-range communication but depends on the coverage with LoRaWAN gateways. The cellular connection provides wide coverage, but it consumes more energy, which influences the lifetime of battery-powered devices.

The ideal solution is to have a device that has both connectivity, LoRaWAN, and cellular connections. The cellular modem can work as a backup for the LoRaWAN transceiver if the device is out of range of LoRaWAN gateways.

With the WisBlock RAK13102 IO module RAKwireless is now offering an easy-to-use and cost-effective solution to build such a dual-connectivity location tracker. Partnering with [Blues.IO](https://blues.io/) we designed the RAK13102 to work with any of the [Notecard Cell+Wifi](https://blues.io/notecard-cell-wifi/) modules. These cellular modules provide worldwide coverage and come with 500 MB of free cellular data.

The beauty of using the Blues Notecard is that you set up the cellular modem with simple JSON formatted requests instead of learning complicated AT commands (that are different between different suppliers and modem chips). Blues has a very good [documentation](https://dev.blues.io/api-reference/notecard-api/introduction/) for these JSON formatted strings, and if you look into the [source code](https://github.com/RAKWireless/WisBlock-Blues-Tracker/blob/main/src/blues.cpp) that is used in this tutorial, you can see how easy this can be implemented in your application code.

Read on to learn how easy it is to use the Blues.IO Notecards and build a dual-connectivity device.

:::tip 📝 NOTE
If you purchase the [Blues.ONE](https://store.rakwireless.com/collections/cellular-iot), as an assembled and ready-to-use device, comes already with the firmware that is used here.
:::


## WisBlock Goes Blues

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/RAK-Whirls.png"
  width="30%"
  caption="RAKwireless"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/blues_logo.jpg"
  width="30%"
  caption="Blues.IO"
/>


While WisBlock is usually associated with **LoRa** and **LoRaWAN**, this time we are diving into the cellular data transmission using the Blues.IO NoteCard. This project is about building a location tracker that can connect to both LoRaWAN and a cellular connection with a [Blues NoteCard.](https://blues.io/notecard-cell-wifi/)


### Setup the WisBlock Blues Location Tracker


#### Hardware

:::tip 📝 NOTE
If you purchase the [Blues.ONE](https://store.rakwireless.com/collections/cellular-iot), as an assembled and ready to use device, you can go directly to the [Setup section](#setup) section. Otherwise, you build the device with a few easy step.
:::

The only thing that requires some work is to set up the WisBlock system with the Blues NoteCard using the [RAK13102 NoteCarrier](https://store.rakwireless.com/collections/wisblock-wireless). The RAK13102 plugs into the WisBlock Base Board IO slot, so you can only use any of the following base boards:

  - RAK19007
  - RAK19001
  - RAK19010
  - RAK19011

The RAK13102 module blocks the Sensor Slots A and B, but it has a mirror of these two slots, so they still can be used. Optionally, you can add a RAK1906 environment sensor to the WisBlock Base Board.

The code provided in the [GitHub repository](https://github.com/RAKWireless/WisBlock-Blues-Tracker) supports beside of the communication to the Blues NoteCard, the LoRaWAN connection and a RAK1906 environment sensor.

| Module             | Function                                | Storepage                                                                                                                                                                   |
| ------------------ | --------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| RAK4631            | MCU & LoRa transceiver                  | [RAK4630](https://store.rakwireless.com/products/rak4631-lpwan-node)                                                                                                        |
| RAK13102           | WisBlock NoteCarrier for Blues NoteCard | [RAK13102](https://store.rakwireless.com/collections/wisblock-wireless)                                                                                                     |
| Blues NoteCard     | Cellular modem                          | A Notecard with worldwide coverage can be bought bundled with the RAK13102. Otherwise, [choose a Notecard for your requirements.](https://shop.blues.io/collections/notecard) |
| RAK1906 (optional) | Temperature and humidity sensor         | [RAK1906](https://store.rakwireless.com/products/rak1906-bme680-environment-sensor)                                                                                         |


For this tutorial, a 3D printed enclosure is used.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/hardware.jpg"
  width="30%"
  caption="DIY open"
/>
<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/hardware_2.jpg"
  width="30%"
  caption="DIY closed"
/>
<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/hardware_3.jpg"
  width="30%"
  caption="DIY USB"
/>


The enclosure is printed with PLA+ and the STEP files are available in the [GitHub repo](https://github.com/beegee-tokyo/Blues-WisBlock-Tracker/tree/main/Enclosure), where you can find as well the code for this tutorial.

But for an outdoor application RAKwireless is offering the pre-assembled [Blues.ONE](https://docs.rakwireless.com/Product-Categories/WisTrio/BLUESONE) device in our IP65 Unify Enclosure.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/blues.one.png"
  width="50%"
  caption="Blues.ONE"
/>

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


##### Select SIM Card

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


##### Select Notecard Location Send Trigger

:::tip 📝 NOTE
Motion trigger mode is not implemented yet.
:::

There are two location transmission modes: defined timer intervals or triggered by the motion of the device.
The transmission mode can be set with the `AT+BTRIG` command.

Syntax: **`AT+BTRIG=<mode>`**
- `<mode>` == 0 to use the time interval set with the AT command `AT+SENDINT`
- `<mode>` == 1 to use the continuous connection mode
- The default is to use time interval mode.
- The current status can be queried with **`AT+BTRIG=?`**.


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


#### Send Request to the Notecard

:::tip 📝 NOTE
_This works only for simple requests without parameters, like hub.status or hub.sync_.
::::

Sends a simple request to the Notecard and returns the response from the Notecard.

Syntax: **`AT+BREQ=<request>`**

- `<request>` is the Notecard request, for example, **`card.version`** or **`card.location`**.


### LoRaWAN Setup

Besides the cellular connection, you need to set up as well the LoRaWAN connection. The WisBlock solutions can be connected to any LoRaWAN server like Helium, Chirpstack, TheThingsNetwork, or others.

<!-- Details on how to setup the device on a LNS are available in the [RAK Documentation Center](https://docs.rakwireless.com/Introduction/). -->

On the device itself, the required setup with AT commands is:

```log
        // Setup AppEUI
AT+APPEUI=70b3d57ed0abcdef
        // Setup DevEUI
AT+DEVEUI=ac1f09fffabcdef
        // Setup AppKey
AT+APPKEY=2b84e0b09b68e5cb42176fe753abcdef
        // Set automatic send interval in seconds
AT+SENDINT=60
        // Set data rate
AT+DR=3
        // Set LoRaWAN region (here US915)
AT+BAND=5
        // Reset node to save the new parameters
ATZ
        // After reboot, start join request
AT+JOIN=1,0,8,10
```

A detailed manual for the AT commands are in the [AT-Command-Manual.](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/)

## Using the WisBlock Blues Tracker

Once the WisBlock Blues Tracker is set up for both cellular and LoRaWAN connections, it will connect to the cellular network and join the LoRaWAN server.
Independent of a successful connection, it will start acquiring location data using the GNSS engine that is built into the Notecards cellular modem.

The current application is a work in progress and only sends data at specified time intervals, not based on movement. The send interval can be set using an AT command.

**`ATC+SENDINT=300`**: Set the send interval to 300 seconds.

The current send interval can be queried with **`ATC+SENDINT=?`**.

:::tip 📝 NOTE
_**Inaccurate location**_
As with most location trackers, an accurate location requires the GNSS antenna to receive signals from the satellites. It means that it is working badly or not at all inside buildings.
If there is no GNSS location available, the device is using the tower location information from the Blues NoteCard instead.
:::

### WisBlock Blues Tracker in Action


#### LoRaWAN Server

For testing, Chirpstack V4 is used as a LoRaWAN server. The tracker has to be set up with its **DevEUI** and **AppEUI** in an application on the Chirpstack LNS.
Optionally, you can add a payload decoder in the Device Profile, and then view the decoded payload in the events list of the device.

Here is an example log output with the result of the CayenneLPP data parson the LNS before it is sent to the Blues NoteHub:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/log_gateway.png"
  width="100%"
  caption="LoRaWAN Gateway"
/>

Within the Chirpstack LNS application, integration is needed to forward the data to Datacake, used for visualization. The integration is a simple webhook to Datacake.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Chirpstack-Integration.png"
  width="100%"
  caption="Chirpstack"
/>

You can use other LoRaWAN servers like TTN or Helium for the device's LoRaWAN connection. For the location visualization, only the Datacake solution is explained here. If you want to use another location visualization, you need to figure out how to connect one device through both LoRaWAN and cellular connections.


#### Blues Notehub

The notes sent to the Blues Notehub can be seen in the **Events** listing of the Notehub.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Notehub-Event-Log.png"
  width="100%"
  caption="Notehub Event Log"
/>

The location and sensor data are sent as binary payloads, so there is nothing to see in the body field.

The next step is to create the **Route** in NoteHub that forwards the data to Datacake. Instead of the default URL for the Datacake route, use the URL for LoRaWAN devices. The note you want to forward is the **`data.qo`** note.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Notehub-Routes-Setup.png"
  width="100%"
  caption="Notehub Route Setup"
/>

:::tip 📝 NOTE
At this point, it is getting a little bit complicated since the location data sent to Datacake can come either from the LoRaWAN server or NoteHub.IO. The JSON object sent by the two looks very different.
:::

Because of the different formats, this guide uses a very appreciated feature available in the NoteHub Routes, the JSONata Expression. With this data transformation option, you will make the JSON packet coming from the NoteHub look like a packet coming from a LoRaWAN server. Read the Blues documentation about [JSONata](https://dev.blues.io/guides-and-tutorials/notecard-guides/using-jsonata-to-transform-json/?_gl=1*15bxcs8*_ga*MTA3NTk4Nzc2My4xNjg5NzI0NjI3*_ga_PJ7RGMWWBX*MTY5MzcyMDAwNi4xNDAuMS4xNjkzNzIwMDExLjU1LjAuMA..&_ga=2.15364470.1351755121.1693639635-1075987763.1689724627#using-jsonata-to-transform-json) to understand how it works.

The JSONata expression needed is very simple and simulate a LoRaWAN packet format with just a few JSON fields:

```JSON
{
    "deviceInfo": {
       "tenantName":"ChirpStack",
       "devEui": body.dev_eui
    },
    "fPort": 6,
    "data": payload
}
```

In the Route setup, scroll down to the Data section. Select **JSONata Expression** to transform the data, then copy-paste the JSONata Expression into the entry field.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Notehub-Routes-Transform.png"
  width="100%"
  caption="Notehub Routes Transform"
/>

The JSONata is pulling the required information from the Blues JSON data packet to build the *fake* LoRaWAN packet. You can check the functionality with the JSONata Exerciser:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/JSONata-exerciser.png"
  width="100%"
  caption="JSONata Exerciser"
/>

The resulting JSON object is then sent to Datacake, which handles it as if it comes from a LoRaWAN server.

The routing events are shown in the Routes log view:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Notehub-Routes-Log.png"
  width="100%"
  caption="Notehub Routed Log"
/>


#### Datacake

To visualize the data in [Datacake](https://datacake.co/), a matching device has to be defined. As the data can come from two different paths, but you have transformed the packet forward in NoteHub to look like a LoRaWAN packet. Keep in mind that the the device _**must**_ be a LoRaWAN device.

:::tip 📝 NOTE
On the device, the payload is formatted in Cayenne LPP format. Both the LoRaWAN server and NoteHub are forwarding the data in this format, so a single payload decoder can be used.
:::

To distinguish whether the data is coming from the LNS or NoteHub, a different fPort is used in the packets.
**fPort 5** ==> data coming from the LNS
**fPort 6** ==> data coming from NoteHub (see above in the JSONata expression that it sets the fPort to 6)

The payload decoder used in this guide can be found in the file [Decoder.js](https://github.com/RAKWireless/WisBlock-Blues-Tracker/blob/main/Decoder.js) in the Github repository. The content of this file has to be copied into the **Payload Decoder** of the device configuration in Datacake:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Payload-Decoder.png"
  width="100%"
  caption="Payload Decoder"
/>


The matching fields for the sensor data have to be created. The easiest way to do this is to wait for incoming data from the sensors. If no matching field is existing, the data will be shown in the _**Suggested Fields**_ list in the configuration.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Suggested-Fields.png"
  width="100%"
  caption="Suggested Fields"
/>

The sensor data can be easily assigned to fields using the _**Create Field**_ button.

It will take some time before the suggested fields are listed as complete. Instead of using the suggested fields, you can just create the following fields manually:

| Name                                     | Identifier  | Type     | Role            |
| ---------------------------------------- | ----------- | -------- | --------------- |
| Voltage                                  | VOLTAGE_1   | Float    | Device Battery  |
| Source                                   | SOURCE      | String   | Primary         |
| Islorawan                                | ISLORAWAN   | Boolean  | N/A             |
| Location                                 | LOCATION_10 | Location | Device Location |
| Temperature (only if RAK1906 is present) | TEMPERATURE | Float    | Secondary       |
| Humidity (only if RAK1906 is present)    | HUMIDITY    | Float    | N/A             |
| Barometer (only if RAK1906 is present)   | BAROMETER   | Float    | N/A             |

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Create-Fields.png"
  width="100%"
  caption="Create Fields"
/>

Once all the sensor data is assigned to fields, you can start with the visualization of the data.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Created-Fields.png"
  width="100%"
  caption="Created Fields"
/>


In Datacake, each device has its own _**Device Dashboard**_ which we will use to display the location data.
I will not go into details on how to create visualization widgets in Datacake, this step is handled in other tutorials already.

In the final result for the WisBlock Blues Tracker, you can see life data on my [public dashboard.](https://app.datacake.de/pd/7bb04747-c5a1-42c3-8dc1-ee5de45ee610)
The top part of the dashboard are the locations of the device (history enabled) on the map. The device sensor values on the side, temperature and humidity, are only available if a RAK1906 is present.

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Dashboard-1.png"
  width="100%"
  caption="Locations"
/>

In the lower part, a chart shows at what times the sensor used LoRaWAN to transmit data and when it used the cellular connection:

<rk-img
  src="/assets/images/knowledge-hub/learn/blues-lorawan-tracker/Datacake-Dashboard-2.png"
  width="100%"
  caption="Data transmission mode"
/>
