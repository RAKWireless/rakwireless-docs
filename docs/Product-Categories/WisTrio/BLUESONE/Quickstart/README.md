---
prev: ../Overview/
next: ../Datasheet/
tags:
  - BluesONE
  - Quickstart
  - WisTrio
  - Cellular
rak_desc: Contains instructions and tutorials for installing and deploying your Blues.ONE LTE-M, NB-IoT, GSM cellular, and LoRaWAN Development Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wistrio/bluesone/bluesone.png
---

# Blues.ONE Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each step in the installation guide of the Blues.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board, make sure to prepare the necessary items listed below:

#### Hardware

- [Blues.ONE LTE-M, NB-IoT, GSM cellular and LoRaWAN Development Board](https://store.rakwireless.com/collections/wisblock-solutions)
- USB-C Cable
- Li-Ion 3.7&nbsp;V rechargeable battery
- 5&nbsp;V Solar Panel (optional)
- Nano SIM card if you are using the Blues.IO Notecard in a region that is not supported by the eSIM of the Notecard. You can check the coverage on the [Blues.IO Coverage Overview](https://dev.blues.io/datasheets/notecard-datasheet/note-wbex-500/?&_gl=1*1lmj2te*_ga*MTA3NTk4Nzc2My4xNjg5NzI0NjI3*_ga_PJ7RGMWWBX*MTY5NTk3MTA1MS4xNjUuMS4xNjk1OTcxMDcwLjQxLjAuMA..&_ga=2.90494298.1734536464.1695971059-1075987763.1689724627#cellular-service)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).
- [Blues WisBlock Tracker](https://github.com/beegee-tokyo/Blues-WisBlock-Tracker)- the default firmware that is pre-flashed on the Blues.ONE Solution.

### What's Included in the Package?

When you buy Blues.ONE, you can choose between two variants: one with bare modules and antennas and one with an enclosure and more optimized antennas.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/included_modules.png"
  width="70%"
  caption="Blues.ONE modules without Enclosure"
/>

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/included_modules_enclosure.png"
  width="70%"
  caption="Blues.ONE with Enclosure"
/>

## Product Configuration

### Hardware Setup

#### Blues.ONE Without Enclosure

1. Assemble each module, including the respective antenna. Refer to **Figure 3** for the connections.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/assembly_bluesone.png"
  width="70%"
  caption="Blues.ONE Modules and Antenna Connection"
/>

2. When the modules are plugged in together, they should look the same as in **Figures 4** and **Figure 5**:

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/bluesone_top.png"
  width="45%"
  caption="Blues.ONE Modules top view"
/>

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/bluesone_bottom.png"
  width="45%"
  caption="Blues.ONE Modules bottom view"
/>

#### Blues.ONE With Enclosure

1. If you have the Blues.ONE with enclosure, you have to prepare the WisBlock Modules together with the WisBlock Baseplate with antenna, circular connector, IPEX-SMA cellular antenna connector, and GPS antenna.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/wisblock-base-antenna-enclosure.png"
  width="55%"
  caption="Blues.ONE with Enclosure"
/>

2. On the WisBlock Baseplate, you have to remove the cutout that is designed to be used for the mini-base board. This cutout part must be removed for Blues.ONE.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/wisblock-plate-antenna-cutout.png"
  width="55%"
  caption="Removing the cutout section of the WisBlock Baseplate"
/>

3. After removing the cutout, you can now attach the WisBlock Base Board to the WisBlock Baseplate using screws.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/wisblock-plate-antenna-wisblock.png"
  width="40%"
  caption="Attaching the WisBlock Base board to WisBlock Baseplate with PCB Antenna"
/>

4. The next step is to connect the IPEX-IPEX from the WisBlock Core to the WisBlock Baseplate with an antenna.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/wisblock-plate-antenna-connect.png"
  width="40%"
  caption="IPEX-to-IPEX connector"
/>

5. Then, you can now attach it to the enclosure and complete it with the rest of the parts.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/wisblock-antenna-enclosure.png"
  width="40%"
  caption="Mounting the modules to Blues.ONE enclosure"
/>

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/assembled_with_enclosure.png"
  width="40%"
  caption="Assembled Blues.ONE with all the parts"
/>

:::tip 📝 NOTE:
After assembling all the parts, connect the battery to the WisBlock Base. Without the battery connected, the Blues.IO Notecard will not be able to function correctly due to a lack of power source. The USB connection will not be able to provide enough power to achieve enough performance stability.
:::

#### Power Supply with External 5V

::: tip ⚠️ Info
The RAK13102 module and the connected WisBlock Base Board and Core module can be supplied with a regulated 5V DC supply through the P1 connector on the bottom. A matching connector is available with our [M8 Power Connector](https://store.rakwireless.com/products/m8-power-connector)
:::

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/ex-power.png"
  width="40%"
  caption="5V supply through M8 power connector"
/>

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/m8-power.png"
  width="30%"
  caption="M8 power connector"
/>

### Software Setup

#### Setup Using the Pre-installed Firmware

The Blues.ONE WisBlock Solution comes pre-flashed with location-tracking firmware that utilizes both cellular and LoRaWAN connectivity to transmit the acquired location to the cloud.

You have to set up your Notecard at Blues.IO before it can be used. There are two options for setting up the Notecard:

To follow the [Quickstart](https://dev.blues.io/quickstart/) guides provided by Blues.
To set up the device with AT commands directly through the WisBlock's USB.

##### Option One: Notecard Setup Through the USB of the RAK13102 Notecard

Connect the RAK13102 NoteCarriers USB to your computer. WisBlock has to be powered separately, and then use the [Blues Quickstart](https://dev.blues.io/quickstart/).

##### Option Two: Set Up Through AT commands

:::tip ⚠️ IMPORTANT
If setting up the Notecard through AT commands, these settings will always override settings that are stored in the Notecard.
To remove settings saved from AT commands, use the AT command _**`ATC+BR`**_ to delete all settings saved from AT commands before.
:::

Connect the WisBlock USB port to your computer and connect a serial terminal application to the COM port.

###### Setup the Product UID
To connect the Blues Notecard to the NoteHub, a _**Product UID**_ is required. This product UID is created when you create your project in NoteHub as shown in [Set up Notehub](https://dev.blues.io/quickstart/notecard-quickstart/notecard-and-notecarrier-f/#set-up-notehub).

Get the Product UID from your NoteHub project:
<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Notehub-Product-UID.png"
  width="100%"
  caption="Notecard PUID"
/>

Then use the ATC+BEUI command to save the Product UID in the WisBlock:

_**`ATC+BUID=com.my-company.my-name:my-project`**_

Replace `com.my-company.my-name:my-project` with your project EUI.

The current product UID can be queried with

_**`ATC+BUID=?`**_


###### Select the SIM card
There are two options for the Blues Notecard to connect. The primary option is to use the eSIM that is already on the Notecard. However, there are countries where the eSIM is not working yet. In this case, you need to use an external SIM card in the RAK13102 WisBlock module. This can be a SIM card from your local cellular provider or an IoT data SIM card like for example a SIM card from [Monogoto](https://monogoto.io/)↗️ or from another provider.

Use the AT command ATC+BSIM to select the SIM card to be used.

The syntax is _**`ATC+BSIM=<SIM>:<APN>`**_
- `<SIM>` == 0 to use the eSIM of the Notecard only
- `<SIM>` == 1 to use the external SIM card of the RAK13102 NoteCarrier only
- `<SIM>` == 2 to use the external SIM card as primary and the eSIM of the Notecard as secondary
-   `<SIM>` == 3 to use the external SIM card as secondary and the eSIM of the Notecard as primary

If the external SIM card is selected (`<SIM>` is 1, 2, or 3), the next parameter is the APN that is required to connect the Notecard
`<APN>` e.g. _**`internet`**_ to use with the Filipino network provider SMART.
Several carriers will have a website dedicated to manually configuring devices, while others can be discovered using APN discovery websites like [apn.how](https://apn.how/)↗️

The current settings can be queried with
_**`AT+BSIM=?`**_


###### Select Notecard Connection Mode
The Blues Notecard supports different connection modes. For testing purposes, it might be required to have the Notecard connected continuously to the cellular network, but in a battery-powered application, the preferred connection type would be minimal, which connects to the cellular network only when data needs to be transferred.

The connection mode can be set up with the AT command AT+BMOD.

The syntax is _**`AT+BMOD=<mode>`**_
`<mode>` == 0 to use the minimal connection mode
`<mode>` == 1 to use the continuous connection mode

The default is to use minimal connection mode.

The current status can be queried with
_**`AT+BMOD=?`**_.


###### Delete Blues Notecard settings
If required, all stored Blues Notecard settings can be deleted from the WisBlock Core module with the AT+BR command.
:::tip 📝 NOTE
_Requires restart or power cycle of the device_
:::
The syntax is _**`AT+BR`**_


###### Reset Blues Notecard to Factory Settings
If required, the Blues Notecard can be reset to factory default.


:::warning
<i><h6>⚠️ THIS WILL ERASE ALL SETTINGS IN THE NOTECARD! ⚠️ </h6></i>
:::

<br>

All saved settings like Product UID, connection settings, and the APN in the Notecard _**WILL BE ERASED**_

Syntax: _**`AT+BRES`**_.


###### Get Blues Notecard Status
Show Notecard connection status with _**`req:hub.status`**_.

Syntax: _**`AT+BLUES`**_


###### Send Request to the Notecard
:::tip 📝 NOTE
⚠️ _This works only for simple requests without parameters, like hub.status or hub.sync_ ⚠️
::::

Sends a simple request to the Notecard and returns the response from the Notecard

Syntax: _**`AT+BREQ=<request>`**_
`<request>` is the Notecard request, e.g. _**`card.version`**_ or _**`card.location`**_


##### ⚠️ _LoRaWAN Setup_ ⚠️
Besides the cellular connection, you also need to set the LoRaWAN connection. The WisBlock solutions can be connected to any LoRaWAN server like Helium, Chirpstack, TheThingsNetwork, or others. Details on how to set up the device on a LNS are available in the [RAK Documentation Center](https://docs.rakwireless.com/Introduction/).

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
A detailed manual for the AT commands is in the [AT-Command-Manual](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/).

----

#### Using the WisBlock Blues Tracker

Once the WisBlock Blues Tracker is set up for both cellular and LoRaWAN connections, it will connect to the cellular network and join the LoRaWAN server.
Independent of a successful connection it will start acquiring the location with the GNSS engine that is built into the Notecards cellular modem.

The current application is not yet (work in progress) sending data based on movement, only in the specified time interval. The send interval can be set with an AT command as well:

_**`ATC+SENDINT=300`**_
will set the sendinterval to 300 seconds.

The current send interval can be queried with
_**`ATC+SENDINT=?`**_

:::tip ⚠️ NOTE
_**Inaccurate location**_
As with most location trackers, an accurate location requires that the GNSS antenna can receive signals from the satellites. This means that it is working badly or not at all inside buildings.
If there is no GNSS location available, the device is using the tower location information from the Blues Notecard instead!
:::


### WisBlock Blues Tracker in Action

#### LoRaWAN server

For testing, I used Chirpstack V4 as a LoRaWAN server. The tracker has to be set up with its DevEUI and AppEUI in an application on the Chirpstack LNS.
Optional you can add a payload decoder in the Device Profile. Then you can see the decoded payload in the events list of the device.
Here is an example log output with the result of the CayenneLPP data parson the LNS before it is sent to the Blues NoteHub:
<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/log_gateway.png"
  width="100%"
  caption="LoRaWAN Gateway"
/>

Within the Chirpstack LNS application, integration is needed to forward the data to Datacake, for the visualization. The integration is a simple webhook to Datacake:
<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Chirpstack-Integration.png"
  width="100%"
  caption="Chirpstack"
/>

You can of course use other LoRaWAN servers like TTN or Helium for the LoRaWAN devices connection.
For the location visualization, only the Datacake solution is explained here. If you want to use another location visualization, you need to figure out how to connect one device through both LoRaWAN and cellular connections.

----

#### Blues Notehub
The notes sent to the Blues Notehub can be seen in the _**Events**_ listing of the Nothub
<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Notehub-Event-Log.png"
  width="100%"
  caption="Notehub Event Log"
/>

The location and sensor data are sent as binary payloads, so there is nothing to see here in the body field.

The next step is to create the _**Route**_ in NoteHub that forwards the data to Datacake. Instead of the default URL for the Datacake route, use the URL for LoRaWAN devices. Also, the note you want to forward is the _**`data.qo`**_ note.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Notehub-Routes-Setup.png"
  width="100%"
  caption="Notehub Route Setup"
/>

:::tip ⚠️ NOTE
At this point, it is getting a little bit complicated because the location data sent to Datacake can come _**EITHER**_ from the LoRaWAN server _**OR**_ from NoteHub.IO. The JSON object sent by the two looks of course very different.
:::

Because of the different formats, you can use a very appreciated feature available in the NoteHub Routes, the JSONata Expression. With this data transformation option, make the JSON packet coming from the NoteHub look like a packet coming from a LoRaWAN server. I suggest reading the Blues documentation about [JSONata](https://dev.blues.io/guides-and-tutorials/notecard-guides/using-jsonata-to-transform-json/?_gl=1*15bxcs8*_ga*MTA3NTk4Nzc2My4xNjg5NzI0NjI3*_ga_PJ7RGMWWBX*MTY5MzcyMDAwNi4xNDAuMS4xNjkzNzIwMDExLjU1LjAuMA..&_ga=2.15364470.1351755121.1693639635-1075987763.1689724627#using-jsonata-to-transform-json) to understand how it works.

The JSONata expression needed is very simple. You can simulate a LoRaWAN packet format with just a few JSON fields:

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

In the Route setup, scroll down to the Data section.
Select JSONata Expression to transform the data, then copy the JSONata expression into the entry field.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Notehub-Routes-Transform.png"
  width="100%"
  caption="Notehub Routes Transform"
/>

The JSONata is pulling the required info from the Blues JSON data packet to build the "fake" LoRaWAN packet. You can check the functionality with the JSONata Exerciser:

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/JSONata-exerciser.png"
  width="100%"
  caption="JSONata Exerciser"
/>

The resulting JSON object is then sent to Datacake, which handles it as if it comes from a LoRaWAN server.

The routing events are shown in the Routes log view:

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Notehub-Routes-Log.png"
  width="100%"
  caption="Notehub Routed Log"
/>

----

#### Datacake

To visualize the data in [Datacake](https://datacake.co/), a matching device has to be defined. As the data can come from two different paths, you should transform the packet forward in NoteHub to look like a LoRaWAN packet. The device _**must**_ be a LoRaWAN device.

:::tip ⚠️ NOTE
On the device, the payload is formatted in Cayenne LPP format. Both the LoRaWAN server and NoteHub are forwarding the data in this format, so a single payload decoder can be used.
:::

To distinguish whether the data is coming from the LNS or NoteHub, a different fPort is used in the packets.
- fPort 5 ==> data coming from the LNS.
- fPort 6 ==> data coming from NoteHub (see above in the JSONata expression that it sets the fPort to 6).

The payload decoder I used can be found in the file [Decoder.js](https://github.com/beegee-tokyo/Blues-WisBlock-Tracker/blob/main/Decoder.js) in the Github repository.
The content of this file has to be copied into the _**Payload Decoder**_ of the device configuration in Datacake:

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Payload-Decoder.png"
  width="120%"
  caption="Payload Decoder"
/>

----

Then the matching fields for the sensor data have to be created. The easiest way to do this is to wait for incoming data from the sensors. If no matching field is existing, the data will be shown in the _**Suggested Fields**_ list in the configuration.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Suggested-Fields.png"
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
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Create-Fields.png"
  width="100%"
  caption="Create Fields"
/>


Once all the sensor data is assigned to fields, you can start with the visualization of the data.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Created-Fields.png"
  width="100%"
  caption="Created Fields"
/>


In Datacake, each device has its own _**Device Dashboard**_ which is used to display the location data.
Details on how to create visualization widgets in Datacake is in the other tutorials already.


The final result for the WisBlock Blues Tracker:

You can see life data on the [public dashboard.](https://app.datacake.de/pd/7bb04747-c5a1-42c3-8dc1-ee5de45ee610)

In the top part of the dashboard are the locations of the device (history enabled) on the map and device sensor values on the side (temperature and humidity are only available if a RAK1906 is present).

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Dashboard-1.png"
  width="100%"
  caption="Locations"
/>

In the lower part, a chart shows at what times the sensor used LoRaWAN to transmit data and when it used the cellular connection.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/Datacake-Dashboard-2.png"
  width="100%"
  caption="Data transmission mode"
/>


#### Using Custom Firmware From Other Rakwireless Examples

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the ```https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json``` board installation package, the WisBlock Core RAK4631 should now be available on the Arduino IDE.
2. Blues.ONE uses RAK4631 WisBlock Core as the main processor.

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/sw_select_core.png"
  width="70%"
  caption="Selecting RAK4631 WisBlock Core of Blues.ONE"
/>

3. Once you are ready with the Arduino IDE software and the RAK4631 board has already been added, you can now check the Cellular examples available for the Blues.IO Notecard.
- Blues Note

:::tip 📝 NOTE:
Blues.ONE software guide is focused on Cellular applications. If you are looking for its LoRa and LoRaWAN functionality,
you can check the the [RAK4631 LoRa/LoRaWAN examples repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa).

For low-power examples, you can check:
- [LoRA P2P Deep Sleep example](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK4631-Deep-Sleep-P2P)
- [LoRaWAN Deep Sleep example](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa/LoRaWAN/RAK4631-DeepSleep-LoRaWan)
:::

4. The basic software example you can run is the [WisBlock-Blues-Sensor](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/communications/Cellular/RAK13102_Blues_Module/WisBlock-Blues-Sensor). This is a simple example that sends sensor data through the Blues.IO Notecard from RAK4631. This code will power up the module correctly and after initialization, start sending sensor data to the Blues.IO Notehub.

:::tip ⚠️ IMPORTANT
- This example requires to have the Blues.IO Notecard setup correctly using the [Blues Quickstart.](https://dev.blues.io/quickstart/)
- Without the setup, the Blues.IO Notecard is not able to connect to the Blues.IO Notehub.
::::

:::tip ⚠️ NOTE
This example works without any other WisBlock modules added. But it also supports as well the RAK1906 environment sensor to acquire real sensor data. Without the RAK1906, the example will send fixed virtual sensor data only.
::::

<rk-img
  src="/assets/images/wistrio/bluesone/quickstart/blues-sensor-log.png"
  width="85%"
  caption="UART output of Blues Sensor example"
/>

##### Other Software Examples

There are several examples, utilizing the WisBlock Blues.ONE you can find them in our GitHub repositories together with guides and tutorials:

- [Blues WisBlock Tracker](https://github.com/beegee-tokyo/Blues-WisBlock-Tracker) - The default firmware that is pre-flashed on the Blues.ONE Solution.
- [Blues Sensor Network](https://github.com/beegee-tokyo/Hummingbird-Blues-Gateway) -  Multiple sensors deployed in a building that is communicating over LoRa P2P to an _**endpoint**_ that has connectivity to the cloud. This endpoint can be a sensor by itself as well.
- [Cellular LoRaWAN Modbus](https://github.com/RAKWireless/tutorials-and-guides/tree/master/Cellular_LoRaWAN_Modbus)
- [Indoor Floor Level Tracker](https://github.com/RAKWireless/tutorials-and-guides/tree/master/Indoor_floor_level_tracker)
- [CAN bus vehicle monitor](https://github.com/RAKWireless/tutorials-and-guides/tree/master/CAN_bus_Vehicle_Monitor)
- [Greenhouse Monitor](https://github.com/RAKWireless/tutorials-and-guides/tree/master/greenhouse_monitor)

Check out some [Tutorials and Guides repos on Github](https://github.com/RAKWireless/tutorials-and-guides) for more examples.

