---
prev: ../Overview/
next: ../Datasheet/
tags:
  - Link.ONE
  - Quickstart
  - WisTrio
rak_desc: Contains instructions and tutorials for installing and deploying your Link.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wistrio/linkone/linkone.png
---

# Link.ONE Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each step in the installation guide of the Link.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board, make sure to prepare the necessary items listed below:

#### Hardware

- [Link.ONE WisTrio LTE-M NB-IoT LoRaWAN Development Board](https://store.rakwireless.com/products/link-one-lte-m-nb-iot-lorawan-device-based-on-nrf52840-sx1262-and-bg77-arduino-ide-compatible?variant=42659406512326?utm_source=LinkOne&utm_medium=Document&utm_campaign=BuyFromStore)
- USB-C Cable
- Li-Ion 3.7&nbsp;V rechargeable battery
- 5&nbsp;V Solar Panel (optional)

#### Software

- Download and install the [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards on your Arduino Boards Manager, install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

### What's Included in the Package?

When you buy Link.ONE, you can choose between two variants: one with bare modules and antennas and one with an enclosure and more optimized antennas.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/included_modules.png"
  width="60%"
  caption="Link.ONE modules without Enclosure"
/>

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/included_modules_enclosure.png"
  width="60%"
  caption="Link.ONE with Enclosure"
/>

## Product Configuration

### Hardware Setup

#### Link.ONE Without Enclosure

1. Assemble each module together including the respective antenna. Refer to **Figure 3** for the connections.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/assembly_linkone.png"
  width="75%"
  caption="Link.ONE Modules and Antenna Connection"
/>

2. When the modules are plugged in together, they should look the same as in **Figures 4** and **Figure 5**:

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/linkone_top.png"
  width="45%"
  caption="Link.ONE Modules top view"
/>

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/linkone_bottom.png"
  width="45%"
  caption="Link.ONE Modules bottom view"
/>

#### Link.ONE With Enclosure

1. If you got the Link.ONE with enclosure, you have to prepare the WisBlock Modules together with the WisBlock Baseplate with antenna, circular connector, the IPEX-SMA cellular antenna connector, and GPS antenna.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/wisblock-base-antenna-enclosure.png"
  width="70%"
  caption="Link.ONE with Enclosure"
/>

2. On the WisBlock Baseplate, you have to remove the cutout that is designed to be used for the mini-base board. This cutout part must be removed for Link.ONE.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/wisblock-plate-antenna-cutout.png"
  width="70%"
  caption="Removing the cutout section of the WisBlock Baseplate"
/>

3. After removing the cutout, you can now attach the WisBlock Base Board to the WisBlock Baseplate using screws.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/wisblock-plate-antenna-wisblock.png"
  width="45%"
  caption="Attaching the WisBlock Base board to WisBlock Baseplate with PCB Antenna"
/>

4. The next step is to connect the IPEX-IPEX from the WisBlock Core to the WisBlock Baseplate with antenna.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/wisblock-plate-antenna-connect.png"
  width="45%"
  caption="IPEX-to-IPEX connector"
/>

5. Then, you can now attach it to the enclosure and complete it with the rest of the parts.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/wisblock-antenna-enclosure.png"
  width="45%"
  caption="Mounting the modules to Link.ONE enclosure"
/>

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/assembled_with_enclosure.png"
  width="45%"
  caption="Assembled Link.ONE with all the parts"
/>

:::tip 📝 NOTE:
After assembling all the parts, connect the battery to the WisBlock Base. Without the battery connected, the BG77 Cellular Module will not be able to function correctly due to a lack of power source. The USB connection will not be able to provide enough power to achieve enough performance stability.
:::

### Software Setup

1. Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index) for WisBlock by using the ```https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json``` board installation package, the WisBlock Core RAK4631 should now be available on the Arduino IDE.
2. Link.ONE uses RAK4631 WisBlock Core as the main processor.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_select_core.png"
  width="70%"
  caption="Selecting RAK4631 WisBlock Core of Link.ONE"
/>

3. Once you are ready with the Arduino IDE software and the RAK4631 board is already added, you can now check the Cellular examples available for the RAK5860 Cellular Wireless module. You can look at examples for TCP, MQTT, HTTP, and GPS on the [RAK5860 Examples Repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/communications/Cellular/RAK5860_BG77_Module).

:::tip 📝 NOTE:
Link.ONE software guide is focused on Cellular applications. If you are looking for its LoRa and LoRaWAN functionality,
you can check the the [RAK4631 LoRa/LoRaWAN examples repository](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa).

For low-power examples, you can check:
- [LoRA P2P Deep Sleep example](https://github.com/RAKWireless/WisBlock/tree/master/tutorials/RAK4631-Deep-Sleep-P2P)
- [LoRaWAN Deep Sleep example](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/communications/LoRa/LoRaWAN/RAK4631-DeepSleep-LoRaWan)
:::

4. The basic software example you can run is the [BG77_Unvarnished_Transmission](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/communications/Cellular/RAK5860_BG77_Module/BG77_Unvarnished_Transmission). This is a UART passthrough to the BG77 from RAK4631. This code will power up the module correctly and after initialization, AT commands is passed and received to the BG77 module. In the example below, the module responded to `AT` and `ATI` commands.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_uart_passthru.png"
  width="85%"
  caption="UART Passthrough to BG77 Module"
/>

##### Software Examples

This section provides different example codes that can be used with Link.ONE.

- [GNSS Satellite](/Product-Categories/WisTrio/LINKONE/Quickstart/#gnss-satellite-example)
- [HTTP Access](/Product-Categories/WisTrio/LINKONE/Quickstart/#http-access-example)
- [TCP Client](/Product-Categories/WisTrio/LINKONE/Quickstart/#tcp-client-example)
- [MQTT](/Product-Categories/WisTrio/LINKONE/Quickstart/#mqtt-example)


###### GNSS Satellite Example

1. Go to the [GNSS satellite example code from the RAK5860 repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/communications/Cellular/RAK5860_BG77_Module/RAK5860_GNSS_Satellite/RAK5860_GNSS_Satellite.ino).
2. Copy and paste the code to Arduino IDE and click upload.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_gnss_1.png"
  width="70%"
  caption="GNSS Example Code"
/>

:::warning ⚠️WARNING
BG77 is based on a cost-optimized architecture in which WWAN (LTE Cat-M1, LTE Cat-NB2, and GSM) and GNSS Rx chains share certain hardware blocks. As a result, the modules do not support the concurrent operation of WWAN and GNSS.
:::

3. The process will turn on the GNSS and Acquire Positioning Information and Query Satellite System as shown in the example. It should be able to obtain the latitude and longitude during 30&nbsp;s ~ 2&nbsp;mins of power-up. Open `Serial Terminal` in Arduino from the Tools tab to see the output data/coordinates.

:::tip 📝 NOTE:
If there are no coordinates data shown, make sure that you are exposed to a clear sky. You can also double-check that the antenna connector is properly attached to the module.
:::

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_gnss_2.png"
  width="60%"
  caption="Serial Terminal output waiting for coordinates"
/>

###### HTTP Access Example

1. Go to the [HTTP Access example code from the RAK5860 repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/communications/Cellular/RAK5860_BG77_Module/RAK5860_Access_HTTP_Server/RAK5860_Access_HTTP_Server.ino).
2. Copy and paste the code to Arduino IDE and click upload.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_http_1.png"
  width="70%"
  caption="HTTP Example Code"
/>

3. The process will first configure the APN of the cellular network, then set up the URL of the HTTP server to be accessed, send an HTTP GET/Read request, and enable the output of the HTTP response header to display on the Serial Terminal of the Arduino IDE.

:::tip 📝 NOTE:

The APN must be configured to the correct setting based on the SIM card used on Link.ONE.

The server to be accessed in the example is `sina.com`, but this can be changed to a different website.

:::

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_http_2.png"
  width="60%"
  caption="Successful HTTP Get with reply"
/>

###### TCP Client Example

1. Go to the [TCP Client example code from the RAK5860 repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/communications/Cellular/RAK5860_BG77_Module/RAK5860_TCP_Client/RAK5860_TCP_Client.ino).
2. Copy and paste the code to Arduino IDE and click upload.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_tcp_1.png"
  width="70%"
  caption="TCP Example Code"
/>

3. The process will first configure the APN of the cellular network, then create a TCP socket connection and send data to the TCP server. You can see the status if the device has already sent the payload via the Serial Terminal of the Arduino IDE.

:::tip 📝 NOTE:
You need to configure your own TCP server that will receive the transferred data. You have to edit the `AT+QIOPEN` and put the address of your server.
:::

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_tcp_2.png"
  width="70%"
  caption="TCP Client connection"
/>

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_tcp_3.png"
  width="70%"
  caption="Data transmitted from TCP Client"
/>

###### MQTT Example

1. Go to the [MQTT Client example code from the RAK5860 repository](https://github.com/RAKWireless/WisBlock/blob/master/examples/common/communications/Cellular/RAK5860_BG77_Module/RAK5860_MQTT/RAK5860_MQTT.ino).
2. Copy and paste the code to Arduino IDE and click upload.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_mqtt_1.png"
  width="70%"
  caption="MQTT Example"
/>

3. The process will first configure the APN of the cellular network, then configure the MQTT Broker (in this example, pointing to a specific address). It will then subscribe to an MQTT topic in the setup section and continuously publish **Hello RAKwireless** at fixed intervals. You can see the status if the device has already sent the payload via the Serial Terminal of the Arduino IDE.

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_mqtt_2.png"
  width="60%"
  caption="MQTT Subscription to Topic"
/>

<rk-img
  src="/assets/images/wistrio/linkone/quickstart/sw_mqtt_3.png"
  width="60%"
  caption="MQTT Publishing in fix interval"
/>
