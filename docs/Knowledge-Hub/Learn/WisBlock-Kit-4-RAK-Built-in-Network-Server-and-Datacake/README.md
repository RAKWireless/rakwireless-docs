---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A step-by-step guide on how to register your WisBlock Kit/s 4 in the Built-in network server of any gateway from the WisGate Edge series and visualize the data in Datacake via MQTT integration.
tags:
  - User-Manual
  - WisBlock
  - Datacake
  - RAK7268
  - WisGate
  - MQTT
  - Tera Term
header:
  title: WisBlock Kit 4 + RAK Built-in Network Server + Datacake
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 11/08/2022 10:55 PM
---

# WisBlock Kit 4 + RAK Built-in Network Server + Datacake

In this guide, you will learn how to register your WisBlock Kit/s 4 in the Built-in network server of any gateway from the WisGate Edge series and visualize the data in Datacake via MQTT integration. For this demonstration, RAK7268 WisGate Edge Lite 2 (with WisGateOS) is used, but the principle is the same for all WisGate Edge gateways.

## Setting Up the Built-In Network Server

Some configurations of RAK7268 will be needed as well as the creation of an application and registration of the device.

### Setting Up the Gateway

1. First, power on the gateway. To do so, you can refer to [RAK7268 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/).
2. Then, you need to [access the gateway](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#access-the-gateway).
3. Connect the gateway to the internet. You can refer to the [Access the Internet](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#access-the-internet) section of the Quick Start Guide.
4. By default, the gateway is preconfigured to work in built-in network server mode.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/1.lora-network-settings.png"
  width="100%"
  caption="LoRa network settings"
/>

:::tip 📝 NOTE
For more information about the built-in network server, you can check the [Network Server](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#network-server) section of the WisGateOS user manual.
:::


### Add an Application in the Built-In Network Server

1. To register the WisBlock Kit 4, first, you will need an application. Head to the **LoRa Network** > **Application** tab.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/2.application-tab.png"
  width="100%"
  caption="Application tab"
/>

2. To add an application, type the name of the application in the **Please input application name** field and click the Add button. Then, you will see the page similar to **Figure 3**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/3.adding-application.png"
  width="100%"
  caption="Adding application"
/>

3. At the **Application Configuration** tab, configure the application key and/or EUI. Next to the **Application Key** field, you can generate a key via the **Generate Key** button.
4. Copy the **Application Key** somewhere, as it will be needed later when setting up the WisBlock Kit.

- Optionally, you can enable the **Auto Add LoRa Device** feature via the switch. The feature enables the LoRa device to be automatically added to the application, after Application EUI and Key verification. When activated, an **Application EUI** field will pop up. Same as the **Application Key** field, you can generate a EUI via the **Generate EUI** button. Again, copy the **Application EUI** somewhere, as it will be used later when setting the WisBlock Kit.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/4.application-eui-field.png"
  width="80%"
  caption="Application EUI field"
/>


5. Head to the **Payload Formats** tab.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/5.payload-format.png"
  width="100%"
  caption="Payload format"
/>

6. From the **Payload Format** drop-down menu, choose the **CayenneLPP** format of the payload.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/6.payload-format.png"
  width="80%"
  caption="Payload format"
/>

7. Enable the **Only forward the parsed data object** option. This feature will forward only the object data of the payload.
8. Finally, click **Save & Apply** to add the application to the built-in network server.



### Register the WisBlock Kit 4 in the Application

1. Proceed with adding the WisBlock Kit 4 end device to the application.

:::tip 📝 NOTE
Remember or write down the ID of the application, as it will be needed when creating decoders.
:::


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/7.added-application.png"
  width="100%"
  caption="Added application"
/>


2. To add the end device (the WisBlock Kit 4), click the **Edit** button of the application.
3. In the **please input device EUI** field, you need to type the EUI of the WisBlock Kit. You can find the EUI on the sticker on the RAK4631 module. Or you can scan the QR code on the module to get the device EUI. Type the EUI in the field and click the **Add** button.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/8.add-end-device.png"
  width="100%"
  caption="Adding end device in the application"
/>


:::tip 📝 NOTE
Copy the device EUI as it will be used later when setting the end device and adding payload decoders.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/9.configure-end-device.png"
  width="100%"
  caption="Configuring end device"
/>

4. Give the name of your device in the **Device name** field.
5. You can configure the other settings to fulfill your needs. In this example, you will leave everything with its default settings.


:::tip 📝 NOTE
In this example, the device will be set in Class A, OTAA join mode.
:::

6. When everything is set, click **Save & Apply** to add the device to the application.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/10.device-added.png"
  width="100%"
  caption="Successfully added device"
/>

### Setting Up the Global Integration

1. Now, that the device is added, you can set up the MQTT integration. Head to the **LoRa Network** > **Global Integration** tab.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/11.global-integration.png"
  width="100%"
  caption="Global integration"
/>

2. Here, you must set the external MQTT Broker that will be used. In this example, you will use the public free HiveMQ MQTT Broker: `broker.hivemq.com`.
3. In the **MQTT Broker Address**, files set the address of the HiveMQ: `broker.hivemq.com`.

:::tip 📝 NOTE
- While here, you can copy somewhere the Uplink Topic as it will be used later when creating decoders for the payload.
- When using a free public broker, it is recommended to set SSL/TLLS encryption for your data and user authentication. For this example, we will skip adding additional security for the communication.
:::

## Setting Up the WisBlock Kit 4

Now you need to set up the end device to join the Built-in network server.

### Install Tera Term

1. To set up the WisBlock, you will need [Tera Term](https://osdn.net/projects/ttssh2/releases/). Tera Term is an open-source terminal emulator program you will use for this task. Download, install, and open the program.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/12.tera-term.png"
  width="70%"
  caption="Tera Term program"
/>

:::tip 📝 NOTE
Before you open Tera Term, connect the WisBlock to your PC/laptop via a USB cable. Not doing so, the terminal emulator will not detect the serial port on which the WisBlock is connected.
:::


### Set Up the WisBlock Kit


1. Now that the WisBlock is connected to the PC/laptop via the USB cable and Tera Term is launched, you can connect to the WisBlock.

Select **Serial**. From the **Port** drop-down menu, find the COM port of the WisBlock. It should be named: **COMX: USB Serial Device (COMX)**, where ‘**X**’ is the number of the port. In this example, the port number is 27. Yours might be different.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/13.serial-port.png"
  width="70%"
  caption="Selecting Serial port"
/>

2. Click **OK** to connect to the device.
3. After a connection is established, you will see a blank terminal.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/14.successfully-connected.png"
  width="70%"
  caption="Successfully connected to the end device"
/>

4. Before you continue with setting up the WisBlock click **Setup** > **Terminal**.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/15.setup-terminal.png"
  width="70%"
  caption="Setup terminal"
/>

5. Here, you will setup how Tera Term is to convert the carriage return (CR). In the **Terminal Setup**, find **Receive** in the **New-line** section.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/16.receive-setting.png"
  width="70%"
  caption="Change receive setting"
/>


6. From the drop-down menu, select AUTO and click **OK** to save the change.
7. You can use the following AT commands to set up the WisBlock device:

- Set the application key, where **XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX** is the application key.

```
AT+APPKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
```

- Set the application EUI, where **XXXXXXXXXXXXXXXX** is the application EUI.

```
AT+DEVEUI=XXXXXXXXXXXXXXXX
```

- Set the application EUI, where XXXXXXXXXXXXXXXX is the application EUI.

```
AT+APPEUI=XXXXXXXXXXXXXXXX
```

:::tip 📝 NOTE
This command is needed only when **Auto Add LoRa Device** feature is enabled in the gateway.
:::

- Set the join mode of the device, where **X** is **0** for **ABP** join mode and **1** for **OTAA** join mode.

```
AT+NJM=X
```

- Set the send interval between the packets, where **X** is the interval in seconds.

```
AT+SENDFREQ=X
```

- Set the class of the device, where **X** is **A** for **Class A** and **C** for **Class C**.

```
AT+CLASS=X
```

:::tip 📝 NOTE
Class B is not supported.
:::

- Set up the regional frequency band of the device, where **X** is **1-12** depending on the option. See the table below for reference.

| Value | Corresponding Band |
| :---: | :----------------: |
|   0   |      AS923-1       |
|   1   |       AU915        |
|   2   |       CN470        |
|   3   |       CN779        |
|   4   |       EU433        |
|   5   |       EU868        |
|   6   |       KR920        |
|   7   |       IN865        |
|   8   |       US915        |
|   9   |      AS923-2       |
|  10   |      AS923-3       |
|  11   |      AS923-4       |
|  12   |       RU864        |


8. Example of WisBlock, set to **EU868**, **class A**, with send interval of **60 seconds** in OTAA join mode.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/17.configuration-example.png"
  width="70%"
  caption="Configuration example"
/>



9. To make the device join the Built-in network server, use the following command:

```
AT+JOIN=X:Y:Z:W
```

Where:
- **X** is 0 for stop joining, and 1 for join.
- **Y** is 0 for stop auto join and 1 for enable auto join.
- **Z** is the interval between reattempting to join (7-255) in seconds.
- **W** is the number of attempts before the device quits retrying (between 0-255. Default is 0).

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/17.1.successfully-joined.png"
  width="70%"
  caption="Successfully joined device"
/>


10. Now, you can see that the device is active in the web UI of the gateway.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/18.active-device.png"
  width="100%"
  caption="Active device"
/>

## Create MQTT Integration and Visualize the Data in Datacake

Now, that you have a WisBlock sending data in the built-in network server, you can visualize the object payload in Datacake in a more user-friendly way. To do so, you will need to create an MQTT integration to Datacake.


### Add the WisBlock to Datacake


1. Datacake is a multi-purpose IoT platform that visualizes the data from nodes in a more user-friendly way. You can create an account and log in from their [website](https://datacake.co/). After logging in, you will see the following page.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/19.device-page.png"
  width="100%"
  caption="Device page"
/>

2. To add your WisBlock, click the **+ Add Device** button.
3. Select **API** and click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/20.add-device.png"
  width="100%"
  caption="Add device"
/>


4. As this is a new device and does not have a ready-to-use template, on the Step 2 tab, click **New Product** and give it a name in the **Product Name** field. Then click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/21.step2.png"
  width="100%"
  caption="Add API device step 2"
/>


5. On the Step 3 tab, leave the **Serial Number** field blank. Datacake will generate a random one for the device. Give a name for your WisBlock in the **Name** field. Click **Next** to continue.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/22.step3.png"
  width="100%"
  caption="Add API device step 3"
/>

6. In the last step, choose the payment plan of your device fleet. For this example, we will use the **Free** plan. After the payment plan is selected, click **Add 1 device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/23.payment-plan.png"
  width="100%"
  caption="Payment plan"
/>

7.	Now you can see your device registered in the **Devices** tab.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/24.registered-device.png"
  width="100%"
  caption="Registered device"
/>



### MQTT Configuration

1. From the Devices page, click on the name of your device and head to the **Configuration** menu.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/25.configuration-menu.png"
  width="100%"
  caption="Configuration menu"
/>

2.	Scroll down until you find the **API Configuration**. Copy the **Serial Number** somewhere, as it will be needed later for the decoder.
3.	Keep scrolling until you find the **MQTT Configuration** section. Here, you will set the external MQTT Broker.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/26.mqtt-configuration.png"
  width="100%"
  caption="MQTT configuration"
/>


4.	Then click **+Add new MQTT server**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/27.add-mqtt.png"
  width="80%"
  caption="Add MQTT Broker"
/>

5. In the Hostname field, place the broker address. As mentioned above, for this example, use **`broker.hivemq.com`**.

:::tip 📝 NOTE
If you have set any **SSL/TLS** encryption and authentication for more secure communication in the gateway, you will need to set them here as well. In this example, we will skip this option.
:::

6. Click the **Test Connection** to check if Datacake can make a successful connection with the MQTT Broker. If the connection is successful, you will see a **Connection successful** message.
7. Finally, click **Add MQTT Server** to add the Broker. After that, you will see the broker in the **MQTT Server** field.
8. You need to set a decoder for the data and add fields for the different data in Datacake.


### Add Decoder and Fields for the Payload

1. The specific thing here is that you will need the same number of decoders as the number of measurements you will visualize. For example, if you want to visualize temperature and barometer, you will need two decoders (one for each measurement). Click **+Add Uplink Decoder** to add your first decoder.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/28.add-decoder.png"
  width="70%"
  caption="Add decoder"
/>


2. In the **Subscribe to topics** field, place the **Uplink** topic copied above:

```
application/{{application_ID}}/device/{{device_EUI}}/rx
```


Where:

- **application_ID** is the ID of your application;
- **device_EUI** is the EUI of your WisBlock.



3. In the **Decoder function** field, place the following decoder for the temperature:



```
function Decoder(topic, payload) {
    payload = JSON.parse(payload);

    var temperature = payload.temperature;

    return [
        {
            device: "serial_number",
            field: "Temperature",
            value: temperature
        }
    ];
}
```


:::tip 📝 NOTE
Change the **serial_number** with the serial number of your device that you have copied.
:::

4. Click on Add uplink decoder.
5. Now that you have a decoder for the temperature, head to the **Fields** section and click **+Add Field**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/29.add-field.png"
  width="100%"
  caption="Add field"
/>

6. Here, you will set the field settings.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/30.field-settings.png"
  width="80%"
  caption="Field settings"
/>

- As this field is for the temperature, add a suitable name in the **Name** field.


:::tip 📝 NOTE
The **Identifier** field will automatically be filled based on the name.
:::

- Leave everything else as default and click **Add Field** to add the field.


7. When an uplink is received, the field will get the **Current value**.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/31.temp-value.png"
  width="100%"
  caption="Temperature value"
/>

:::tip 📝 NOTE
This is an example of how to create a Temperature value and decoder for it. You can do the same with the other data the WisBlock Kit supports - barometer, humidity, and air quality. The steps to add the other decoders are the same as the ones shown above. The only difference is to change temperature with the data name (barometer, humidity, analogInput (air quality)) in the decoder.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/32.uplink-decoders.png"
  width="100%"
  caption="Complete uplink decoders and fields for WisBlock Kit 4"
/>

When an uplink is received, refresh the page and the **Current Value** of the fields will update. Then the only thing left is the dashboard.


### Create a Dashboard to Visualize the Data

The Dashboard can be unique for each user. You can use your imagination to create a dashboard to correspond with your project’s needs.

1. To create a dashboard, head to the Dashboard tab of the device in Datacake and click on the Edit mode switch (![edit-mode.png](/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/edit-mode.png))

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/33.edit-mode.png"
  width="100%"
  caption="Edit mode of the Dashboard"
/>

2. To add widgets that will help you visualize the data, click **+ Add Widget**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/34.datacake-widget.png"
  width="80%"
  caption="Datacake widgets"
/>

3. You can choose different types of widgets to make your dashboard more useful. For the demonstration, choose **Chart** to visualize a temperature/time graph.
4. In the **Title** field from the **Basic** tab, give a name to the widget. As this is an example with temperature, name it **Temperature**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/35.chart-widget.png"
  width="80%"
  caption="Chart widget"
/>

5. Now, you need to set the value of the temperature field to this widget. Click the **Data** tab and then **+Add Field**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/36.set-value.png"
  width="80%"
  caption="Set field value to chart widget"
/>

6. From the **Field** drop-down menu, choose **Temperature** then click **Save**.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/37.add-field.png"
  width="80%"
  caption="Add field to widget"
/>

7. The chart will appear in the Dashboard page.

<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/38.temp-chart.png"
  width="100%"
  caption="Temperature chart"
/>


8. To add another widget, click again the **+Add Widget** button while the **Edit mode** switch is enabled (![add-widget.png](/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/add-widget.png)).
9. When you are done with adding widgets, don’t forget to switch off the edit mode, to save the edits.
10. You can see an idea of a complete dashboard for the WisBlock Kit 4.


<rk-img
  src="/assets/images/knowledge-hub/learn/WisBlock-Kit-4-RAK-Built-in-Network-Server-and-Datacake/39.dashboard.png"
  width="100%"
  caption="Example dashboard "
/>
