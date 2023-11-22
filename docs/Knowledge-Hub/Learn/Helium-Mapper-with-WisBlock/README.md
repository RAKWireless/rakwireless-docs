---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/helium-mapper/helium-mapper.png
rak_desc: A guide on how to create a Helium Mapper with WisBlock devices.
tags:
  - Tutorial
  - WisBlock
  - Helium Mapper
  - nRF Connect
  - RAK4631
  - RAK12500
  - RAK1910
  - RAK19003
  - RAK5005-O
  - RAK1904
  - RAKBox-B2
  - PlatformIO
header:
  title: Make a Helium Mapper with WisBlock
  caption: by <b>Johan Sebastian Macias</b>
  img: /assets/images/knowledge-hub/banners/how-to-successfully-carry-out-a-lorawan-coverage-test-with-rakwireless.jpg
posted: 09/10/2021 5:40 PM
---

# Make a Helium Mapper with WisBlock

[Helium Mappers](https://docs.helium.com/use-the-network/coverage-mapping/) is a community-driven project looking to provide information about the effective coverage for nodes (LoRaWAN end devices) within the Helium Network. The coverage map is available at [mappers.helium.com](https://mappers.helium.com/). You will find gray hexes to indicate the regions where one or more hotspots are deployed, similar to the green ones in the [Helium Explorer](https://explorer.helium.com/). Furthermore, the green clickable hex regions within the Mappers tool display the information gathered by the community Mappers about the coverage available in that region.

A Helium Mapper is a LoRa node equipped with GPS that sends location information as LoRaWAN messages. When at least one Helium hotspot receives the packets, the Helium Console forwards some data, such as the Received Signal Strength Indicator (RSSI) and the signal-to-noise ratio (SNR), to the Mappers API. The RSSI is a measure of the power present in the received signal; the higher the value (less negative), the stronger it is considered. A higher SNR ratio indicates a clear signal, while a lower number indicates a noisy signal.

The Mappers backend then performs some checks, such as filtering valid messages based on hotspot locations, coloring a new green hexagon, or updating existing ones with the most recent information. The [Helium Discord Server](https://discord.gg/helium) has a #mappers channel. There you will find insightful project discussions, troubleshooting assistance, and other hardware alternatives. In addition, you may also be assigned the role of mapper.

If you have a [Helium Developer Kit](https://store.rakwireless.com/products/helium-developer-kit) or a [WisBlock Connected Box](https://store.rakwireless.com/collections/kits-bundles/products/wisblock-connected-box), you already have all the main components to build up your first Helium Mapper.

## Prerequisites

- [RAK4631](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore) nRF52840 SX1262 Module for LoRaWAN
- WisBlock Base Board: [RAK5005-O](https://store.rakwireless.com/products/rak5005-o-base-board?utm_source=RAK5005-OWisBlockBaseBoard&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK19003](https://store.rakwireless.com/products/wisblock-base-board-rak19003?utm_source=RAK19003&utm_medium=Document&utm_campaign=BuyFromStore)
- WisBlock GNSS Location Module: [RAK1910](https://store.rakwireless.com/products/rak1910-max-7q-gnss-location-sensor?utm_source=RAK1910&utm_medium=Document&utm_campaign=BuyFromStore) or [RAK12500](https://store.rakwireless.com/products/wisblock-gnss-location-module-rak12500?utm_source=WisBlockRAK12500&utm_medium=Document&utm_campaign=BuyFromStore)
- [RAK1904](https://store.rakwireless.com/products/rak1904-lis3dh-3-axis-acceleration-sensor?utm_source=RAK1904&utm_medium=Document&utm_campaign=BuyFromStore) WisBlock 3-Axis Acceleration Sensor
- Li-Ion/LiPo battery
- [RAKBox-B2 Enclosure](https://store.rakwireless.com/products/rakbox-b2-enclosure-with-solar-panel?utm_source=WisBlockRAKBox-B2Enclosure&utm_medium=Document&utm_campaign=BuyFromStore) with solar panel (Optional)


The [Helium Mapper Kit](https://store.rakwireless.com/products/helium-mapper-kit) or [WisBlock Kit 2](https://store.rakwireless.com/collections/kits-bundles/products/wisblock-kit-2-lora-based-gps-tracker-with-solar-panel) includes in a single package all the previous components as well. Furthermore, the Helium Mapper Kit option comes with the firmware pre-flashed and ready for you to follow this guide even easier.

The acceleration sensor detects when the WisBlock Mapper is moving and sends periodic messages every 15 seconds; otherwise, only keep-alive messages are sent every hour. When the location module fails to receive a proper fix, no messages are sent.

In addition, the BLE capability of RAK4631 enables an easy configuration interface and wireless debugging from your phone, either Android or iOS.


## Hardware Setup

In this section, you are going to attach all the WisBlock modules and the antennas required.

### Connecting the WisBlock Modules

1. First, connect the RAK4631 WisBlock Core to the Base Board (if not already connected).
2. Then, insert the accelerometer into slot D, which contains the interrupt pin configured in the firmware to wake up the mapper whenever movement is detected.
3. Connect the GNSS module in slot A, where the RAK1910 requires a serial interface. Always use compatible tiny screws to ensure the connection of the WisBlock modules.

Refer to the diagram below for a better understanding of the connection to be made.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/connect-wisblock-modules.png" width="80%">
</p>

### Connecting the Antennas

The RAK4631 has a label on its sticker that highlights where to connect the antennas. In this case, you need to connect both the BLE and [LoRa antennas](https://www.rakwireless.com/en-us/technology/antennas).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/connect-antennas.png" width="80%">
</p>

Another essential component of the mapping feature is the GPS antenna for the location module. To receive a proper GPS signal, make sure it is properly connected.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/gps-antenna.png" width="60%">
</p>

:::tip 📝 NOTE
Because of the weak GPS signal inside the buildings, it is best to use the GPS module outside, with a clear line of sight to the sky. This will ensure the necessary signal quality for valid geolocation data. Whatever option you choose for the enclosure, make sure to place the GPS antenna at the very top; the side with the adhesive should face the sky.
:::

### Casing and Power Supply Recommendations

You can use the RAKBox-B2 as your mapper's enclosure. This enclosure is ready to use with the WisBlock; it protects it from the elements and includes a solar panel to recharge the battery. Refer to [Battery and Solar Panel Specification](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Datasheet/#battery-and-solar-panel-specification) and [Battery and Solar Panel Connection](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK5005-O/Quickstart/#battery-connection).

Additionally, you can print an enclosure like the RAKBox-B2 from its [3D model](https://downloads.rakwireless.com/3D_File/Accessory/RAKBox-B3.stp) or adapt one of the options at [Awesome-WisBlock/Enclosures](https://github.com/RAKWireless/Awesome-WisBlock/tree/main/Enclosures). Finally, if you end up designing a new enclosure, don’t hesitate to make a pull request to include it in the [Awesome-WisBlock repo](https://github.com/RAKWireless/Awesome-WisBlock/tree/main/Enclosures). Contributions from the RAKstars are always welcomed and appreciated.


<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/mapper.png" width="80%">
</p>


## Flashing the Firmware

:::tip 📝 NOTE
If you purchased the Helium Mapper Kit, feel free to skip this section. Instead, you can keep reading this guide's Helium Console section and move on to the Creating the device section.
:::


### Using PlatformIO

Assume you are already familiar with PlatformIO and use it to run WisBlock projects. In that case, you can clone the project from GitHub using the command share below and then compile and flash it quickly using the PlatformIO upload option. This option is suitable for those who wish to review the firmware source code, contribute to it, or use it as a baseline for their very own mapper implementation.

```
git clone https://github.com/RAKWireless/WisBlock-RAK4631-Helium-Mapper.git
```

However, if you haven’t used PlatformIO with WisBlock before and want to explore setting it up, you can refer to [another guide](https://github.com/RAKWireless/WisBlock/tree/master/PlatformIO/RAK4630).

### Using a Ready-to-Use Package

You can also download the package at [RAK Downloads Center](https://downloads.rakwireless.com/#LoRa/WisBlock/RAK4631/Solutions/Helium-Mapper/).

Follow the step-by-step instructions provided in this [post](https://forum.rakwireless.com/t/bootloader-fails-to-upgrade-via-ble/4193/5) to check if the RAK4631 has the latest bootloader. Then you can use the following adafruit-nrfutil command to upload the firmware file you downloaded previously. Remember to set the `<version>` and specify the serial `<port>` of the WisBlock that is connected.

```
adafruit-nrfutil dfu serial --package WisBlock-RAK4631-Helium-Mapper_<version>.zip -p <port> -b 115200
```

As the updated firmware uploads, the green LED flashes.
Once the firmware has been flashed, the WisBlock Mapper can be configured. The configuration of the Helium console, the LoRaWAN settings, and additional guidance on how to use the WisBlock Mapper are among the subsequent steps.

## Creating a Device in the Helium Console

Sign in to your Helium Console account at [console.helium.com](https://console.helium.com/). You will have the option to create an account if this is your first time using the Helium Console.

Click **Devices**, choose **Add New Device (+)**, give the device a name, change the **Device EUI** to match the one that appears on the RAK4631 sticker (the one you get when you scan the QR code), and then click the Save Device button.

:::tip 📝 NOTE
When a device is created, you will see a pending indicator. This indicates that the device is awaiting a Helium Network internal procedure before joining the network for the first time. It could take up to 20 minutes. This behavior is related to the XOR filter mechanism, and you can find more information about it at [Helium Docs](https://docs.helium.com/use-the-network/console/adding-devices/#when-adding-devices-for-the-first-time).
:::

When you click on the device to view its information, you'll notice a bug button on the right side that allows you to view the device's packet transfer logs in real-time; this is a great option for debugging that we'll use later.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/create-device.gif" width="100%">
</p>

Let's get started with the configuration required to receive the first message from the device. That is, your first LoRaWAN packet.

## Setting Up the LoRaWAN Parameters

Since the firmware uses the [WisBlock-API library](https://github.com/beegee-tokyo/WisBlock-API), you will find two main options to set up the LoRaWAN credentials without digging into the firmware source files. The first is a serial interface that can be accessed while the WisBlock is connected to any of your PC's USB ports. The second uses BLE capabilities to send the configuration from a smartphone.

Modify the parameters that differ from the default configuration. In this case, the identifiers and AppKey for joining the network via the Over-the-Air-Activation (OTAA) method, as well as the region frequency.

:::tip 📝 NOTE
It is possible to configure a regional channel mask (aka sub-band) for regions such as US915 and AU915, which allows you to select the subset of channels the device uses to send LoRaWAN packets. Helium currently uses sub-band 2 for those regions.
:::


### Over Serial

To connect to serial ports, open your preferred tool. Examples of common options include CoolTerm, PuTTY, Tera Term, the Arduino Serial Monitor, and the PlatformIO monitor command. Once the connection is established, send the AT commands listed below one by one.

From the Helium console, you can copy the values to set `<YOUR_DEVEUI>`, `<YOUR_APPEUI>`, and `<YOUR_APPKEY>`.

Set the Device EUI.
```
AT+DEVEUI=<YOUR_DEVEUI>
```

Set the Application EUI.
```
AT+APPEUI=<YOUR_APPEUI>
```

Set the Application Key.
```
AT+APPKEY=<YOUR_APPKEY>
```

Possible values for the `<REGION_CODE>` parameter for the next command are:

| Code | Regional Band | Code | Regional Band |
| ---- | ------------- | ---- | ------------- |
| 0    | AS923-1       | 7    | KR920         |
| 1    | AU915         | 8    | US915         |
| 2    | CN470         | 9    | AS923-2       |
| 3    | CN779         | 10   | AS923-3       |
| 4    | EU433         | 11   | AS923-4       |
| 5    | EU868         | 12   | RU864         |
| 6    | IN865         | -    | -             |


Set the LoRaWAN region
```
AT+BAND=<REGION_CODE>
```

If you are using US915 or AU915 as the region, you must set the sub-band to 2 with the following command.
```
AT+MASK=2
```

Set the automatic transmission period. In this case, it is used as the period for the keep-alive messages for the mapper.
```
AT+SENDFREQ=3600
```

Start the joining process.
```
AT+JOIN=1:1:8:10
```

Detailed documentation about all the [AT commands](https://github.com/beegee-tokyo/WisBlock-API/blob/main/AT-Commands.md) and their parameter options is available in the [WisBlock-API documentation](https://github.com/beegee-tokyo/WisBlock-API#at-command-format).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/at-config.gif" width="100%">
</p>


### Over BLE

WisBlock Toolbox is an Android mobile application. It includes an LPWAN SETUP module for communicating configuration using the custom BLE service implemented in WisBlock. Despite the fact that it is only available for Android, mobile apps that implement the BLE UART service can also be used to configure it using AT commands. iOS users, for example, can use nRF Toolbox as an alternative.

#### Using the WisBlock Toolbox LPWAN SETUP Module

First, download [WisBlock ToolBox](https://play.google.com/store/apps/details?id=tk.giesecke.wisblock_toolbox) available for Android devices on Google Play.

When you open the WisBlock ToolBox, you will see several modules. Select LPWAN SETUP first, then click on the Bluetooth icon to display a list of available devices, and select your Mapper from the list; it is indicated by the prefix WB-Mapper. Next, enable the Auto join option, choose a region, and set the Send Repeat Time value. Then enter the LoRaWAN credentials and set the Subband value (you must set the sub-band to 2 when using US915 or AU915 as the region; otherwise, the default value is OK).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/ble-setup.gif" width="40%">
</p>


#### Using the nRF Toolbox UART Module

The WisBlock Toolbox app is not available for iOS users yet. However, the nRF ToolBox app can be used as an alternative. The process is very similar to the one described for the serial option using AT commands; basically, you can send the same commands after establishing a connection to the WisBlock using the UART module within the app.

The WisBlock Toolbox app is not yet available for iOS users. However, the nRF ToolBox app can be used as an alternative. The process is very similar to that described for the serial option using AT commands; basically, you can send the same commands after connecting to the WisBlock using the UART module within the app.

Download the nRF ToolBox from [Google Play](https://play.google.com/store/apps/details?id=no.nordicsemi.android.nrftoolbox) or the [App Store](https://apps.apple.com/us/app/nrf-toolbox/id820906058), connect to the WisBlock Mapper, and send the commands.

The following animations show how to establish the connection and send one AT command.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/ios.gif" width="40%">
</p>

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/android.gif" width="40%">
</p>


## Understanding WisBlock Mapper Operation

After the LoRaWAN setup, the WisBlock Mapper tries to join the network. If a hotspot is in range, Join Request messages will appear in the Helium console Event Logs. You can view more detailed information by using the Debug View. A new join procedure is carried out each time the WisBlock Mapper is powered on or reset.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/join-request.gif" width="100%">
</p>

The UART modules in the WisBlock Toolbox and nRF Toolbox apps allow you to debug mapper behavior from your phone via BLE. After a wake-up or reset, the device is connectable (BLE discoverable). Remember that the wake-up occurs when it is moving or during the period defined for the keep-alive messages.

While connected via the UART module, log messages provide information about the GNSS, accelerometer interrupt detection, and the timing for sending LoRaWAN packets.

The first GNSS location can now be obtained by moving your WisBlock Mapper. Move to a location with a clear line of sight to the sky and wait for a valid GNSS position.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/debug-uart.gif" width="40%">
</p>


## Adding a Decoder

Every uplink message sent by the WisBlock Mapper contains a payload of 14 bytes size. The payload must be decoded in order to obtain the latitude, longitude, altitude, accuracy, and battery level values.

Select **Functions**, then click **Add New Function**. Name the function and then set the **Function Type** as **Decoder** and select **Custom Script** in the **Choose Format selector**.

After Custom Script is selected, a new field to enter the decoder is shown. Copy and paste the following code and click the **Save Function** button.

```js
function Decoder(bytes, port) {
    var sensor = {};
    sensor.latitude  = (bytes[0] | bytes[1] << 8 | bytes[2] << 16 | bytes[3] << 24 | (bytes[3] & 0x80 ? 0xFF << 24 : 0)) / 100000;
    sensor.longitude = (bytes[4] | bytes[5] << 8 | bytes[6] << 16 | bytes[7] << 24 | (bytes[7] & 0x80 ? 0xFF << 24 : 0)) / 100000;
    sensor.altitude  = (bytes[8] | bytes[9] << 8 | (bytes[9] & 0x80 ? 0xFF << 16 : 0));
    sensor.accuracy  = (bytes[10] | bytes[11] << 8 | (bytes[9] & 0x80 ? 0xFF << 16 : 0)) / 100;
    sensor.battery   = (bytes[12] | bytes[13] << 8 | (bytes[9] & 0x80 ? 0xFF << 16 : 0)) / 1000;
    return( sensor );
}
```

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/create-function.gif" width="100%">
</p>


## Adding the Mapper's Integration

The Mappers project has an API to send the data from an HTTP integration within the console. You can find details about the required fields at [Mappers API | Helium Documentation](https://docs.helium.com/use-the-network/coverage-mapping/mappers-api).

Select Integrations, then click Add New Integration. Select HTTP, and copy and paste the following Endpoint URL:

```
https://mappers.helium.com/api/v1/ingest/uplink
```

Finally, name the integration and click the **Add Integration** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/create-integration.gif" width="100%">
</p>


## Connecting the Flows

You will find a node to drag into the flow workspace for each of the previous components you created. Then, from the node section tabs, select the device, decoder, and integration. The connection points are then used to define how data flows from the device to the integration.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/flows.gif" width="100%">
</p>

## Debugging the Integration

Open the debug view, move your WisBlock Mapper, and look at the console events.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/flows-debug.gif" width="100%">
</p>

## Enabling Multiple Packets

When multiple hotspots detect the device, there is a configuration option to purchase more packets. This is a good one for mapping purposes because it provides more information to the mapper API. However, it increases DC consumption. It's entirely up to you how many packets you want to buy. This option may vary depending on the number of hotspots deployed and the amount of DC you are willing to use for mapping.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/multiple-packets.gif" width="100%">
</p>


## What's Next

Move around your city, town, or wherever you want to check Helium coverage with your WisBlock Mapper. Remember to visit [mappers.helium.com](https://mappers.helium.com/) to check the results and continue coloring new hexes.


<p align="center">
<img src="/assets/images/knowledge-hub/learn/helium-mapper/animated-map.gif" width="100%">
</p>


