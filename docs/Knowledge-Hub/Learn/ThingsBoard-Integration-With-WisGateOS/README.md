---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: Visualize your end device’s data in ThingsBoard with MQTT or HTTP integrations via WisGate Edge’s Built-In network server.
tags:
  - User-Manual
  - WisGateOS
  - WisGate
  - MQTT
  - HTTP
  - ThingsBoard
header:
  title: ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 12/02/2022 7:30 PM
---

# ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS

The Built-in Network Server of the WisGate Edge gateways provides MQTT and HTTP integrations. Integrations help the user post-process the data and implement solutions based on their needs. In this article, you will learn how to create an MQTT or HTTP Integration to ThingsBoard using the Built-in Network Server.

## MQTT Integration

MQTT is a publish/subscribe protocol that allows data transfer to the desired MQTT broker. In this article, two examples will be shown: connecting to the local MQTT broker on the gateway and connecting to an external broker.

In the MQTT Integration, the ThingsBoard acts as an MQTT client.

### Configure ThingsBoard

Firstly, [login](https://thingsboard.cloud/login) into your ThingsBoard account. If you do not have one, you can create one [here](https://thingsboard.cloud/signup).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/thingsboard.png"
  width="100%"
  caption="ThingsBoard login page"
/>

After a successful login, you will see the ThingsBoard Overview page.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture2.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>

The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture3.png"
  width="100%"
  caption="Data converters"
/>

To add a data converter, click on the **Add Data Converter** icon (➕) and choose to **Create a new converter**.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture4.png"
  width="35%"
  caption="Adding new converter"
/>
<br>

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture5.png"
  width="60%"
  caption="Add uplink data converter"
/>

In the **Name** field, type a name** for the decoder (e.g. Uplink decoder).

Leave the **Type** as **Uplink**. You can use the default decoder code provided by ThingsBoard.

Click on **Add** to add the uplink decoder.

Now, that the uplink data converter is ready, you can proceed to add the MQTT integration. Click on the **Integration** menu on the left (below **Data converters**).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture6.png"
  width="100%"
  caption="Integration menu"
/>

Click on the **Add Integration** (➕) button to add one.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture7.png"
  width="70%"
  caption="Add integration"
/>

In the **Name** field, give a name of the integration (e.g. MQTT Integration).

For **Type** select **MQTT** from the drop-down menu.

Note that after you select the type of integration, the additional settings for the specified type will appear.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture8.png"
  width="70%"
  caption="MQTT integration settings"
/>

For the **Uplink data converter** choose the created decoder earlier.

The **Host** field should be filled with the address of the MQTT broker.

#### External MQTT broker

The first example will be with an external MQTT broker. If you want to use the local broker, proceed to the [Local MQTT broker](#_Local_MQTT_broker) section.

The external broker used in this example is **broker.hivemq.com**. It is a free public MQTT broker, ideal for testing. You can use other ones or your own broker.

Then click on **Topic filters** to set the subscription topics to which the ThingsBoard client must subscribe. For WisGate Edge gateways the topics are:

- application/{{application_ID}}/device/{{device_EUI}}/join
- application/{{application_ID}}/device/{{device_EUI}}/rx
- application/{{application_ID}}/device/{{device_EUI}}/tx
- application/{{application_ID}}/device/{{device_EUI}}/ack
- application/{{application_ID}}/device/{{device_EUI}}/status
- mcast_group/{{mcast_ID}}/tx

where *application_ID, device_EUI and mcast_ID* are respectively the ID of the application, the EUI of the device, and the ID of the multicast group.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture9.png"
  width="70%"
  caption="MQTT integration example"
/>

You need to change the values in the topics in the ThingsBoard (e.g. application/1/device/0123456789ABCDEF/join).

Click **Add** to create the integration.

#### Configure the gateway

Now, that the ThingsBoard is configured, you need to configure the gateway. Start by accessing the gateway. To access the gateway check the WisGateOS user [manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#overview).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture10.png"
  width="100%"
  caption="WisGateOS login page"
/>

Once you log in, head to the **LoRa Network** menu.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture11.png"
  width="100%"
  caption="LoRa Network page"
/>

By default, the gateway works as a Built-in Network Server. If that is not the case, check [this](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#lora-network) section of the WisGateOS User manual to switch the mode to the Built-in Network Server.

Once the gateway is in Built-In Network Server mode, head to the **Application** tab.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture12.png"
  width="100%"
  caption="Application page"
/>

Type the name of the application in the **Please input application name** field and click on **Add** to add an application.

On the **Application Configuration** tab, you can choose **Device Authentication Mode**. Leave it as it is by default.

You can enable the **Auto Add LoRa Device** feature. When the feature is enabled the LoRa Device will be added automatically after Application EUI and Application Key pass verification.

You will need to type your **Application Key** (Application EUI if Auto Add LoRa Device is enabled) or generate a random one with the **Generate Key** (![generate-key.png](/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/generate-key.png)) option.

The description field is optional.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture13.png"
  width="100%"
  caption="Add application"
/>

In the **Payload format** tab, you can convert the data payload format into JSON by selecting **CayenneLPP**.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture14.png"
  width="100%"
  caption="Payload format"
/>
<br>

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture15.png"
  width="70%"
  caption="CayenneLPP Payload Format"
/>

Once set, click on **Save & Apply** to add the application.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture16.png"
  width="100%"
  caption="Created application"
/>

#### Add a device to the application

Now that your application is created, you need to add devices to that application. Click on **Edit** of the application.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture17.png"
  width="100%"
  caption="Add device page"
/>

Type the device EUI in the **Please input device EUI** field and click **Add** to add a device.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture18.png"
  width="100%"
  caption="Edit device page"
/>

In the **Edit Device** page, you must name your device in the **Device name** field.

Change the other settings to match your needs.

When done, click on **Save & Apply** to add the device to the application.

#### Set the MQTT integration

After your device joins, head to the **Global Integration** menu on the left. By default, the **Integration Mode** is **Generic MQTT**. If that is not the case, select it.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture19.png"
  width="100%"
  caption="Generic MQTT mode"
/>

The default MQTT Broker is the built-in one (127.0.0.1). To point the MQTT client to the *hivemq* broker, you need to type **broker.hivemq.com** in the **MQTT Broker Address** field and then click **Save & Apply**.

After your device joins and sends uplink data, you can see it in ThingsBoard -> Integrations -> Your Integration -> Events.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture20.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is successful. You can now proceed with processing the data.

#### Local MQTT broker

The gateway comes with a built-in broker. You can connect the ThingsBoard client to the local broker.

:::tip 📝 NOTE:
For the connection to be successful, you need to put the gateway on DMZ. The DMZ exposes the gateway to the public network, so make sure you set a secured password to protect your device.
:::

To connect to the broker, find your public IP and paste it into the **Host** field. To find your IP, click [here](https://whatismyipaddress.com/).

Then click on **Topic filters** to set the subscription topics to which the ThingsBoard client must subscribe. For WisGate Edge gateways the topics are:

- application/{{application_ID}}/device/{{device_EUI}}/join
- application/{{application_ID}}/device/{{device_EUI}}/rx
- application/{{application_ID}}/device/{{device_EUI}}/tx
- application/{{application_ID}}/device/{{device_EUI}}/ack
- application/{{application_ID}}/device/{{device_EUI}}/status
- mcast_group/{{mcast_ID}}/tx

where *application_ID, device_EUI and mcast_ID* are respectively the ID of the application, the EUI of the device, and the ID of the multicast group.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture21.png"
  width="70%"
  caption="Local broker example"
/>

Click on **Add** to add the integration.

#### Configure the gateway

Follow the [Configure the gateway](#_Configure_the_gateway) steps above.

#### Set the MQTT integration

After your device joins, head to the **Global Integration** menu on the left. By default, the **Integration Mode** is **Generic MQTT**. If that is not the case, select it.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture22.png"
  width="100%"
  caption="Generic MQTT mode"
/>

The default MQTT Broker is the built-in one (127.0.0.1). Check if the device’s default broker is selected. Leave everything else to default. Click **Save & Apply**.

After your device joins and sends uplink data, you can see it in ThingsBoard -> Integrations -> Your Integration -> Events.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture23.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is successful. You can now proceed with processing the data.

## HTTP Integration

The built-in Network Server provides HTTP integration. The HTTP integration converts existing protocols and payload formats to the ThingsBoard message format.

### Configure ThingsBoard

First, [login](https://thingsboard.cloud/login) into your ThingsBoard account. If you do not have one, you create one [here](https://thingsboard.cloud/signup).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture24.png"
  width="100%"
  caption="ThingsBoard login page"
/>

After a successful login, you will see the ThingsBoard **Overview** page.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture25.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>

The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture26.png"
  width="100%"
  caption="Data converters"
/>

To add a data converter, click on the **Add Data Converter** icon (➕) and choose to **Create a new converter**.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture27.png"
  width="30%"
  caption="Adding new converter"
/>

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture28.png"
  width="60%"
  caption="Add an uplink data converter"
/>

In the **Name** field, type a name** for the decoder (e.g. Uplink decoder).

Leave the **Type** as **Uplink**. You can use the default decoder code provided by ThingsBoard.

Click on **Add** to add the uplink decoder.

Now, that the uplink data converter is ready, you can proceed to add the HTTP integration. Click on the **Integration** menu on the left (below **Data converters**).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture29.png"
  width="100%"
  caption="Integration menu"
/>

Click on the **Add Integration** (➕) button to add one.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture2.png"
  width="100%"
  caption="Add integration"
/>

In the **Name** field, give a name of the integration (e.g., HTTP Integration).

For **Type** select **HTTP** from the drop-down menu.

Note that after you select the type of integration, the additional settings for the specified type will appear.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture31.png"
  width="80%"
  caption="HTTP integration settings"
/>

Enable **Debug mode**. Debug mode is useful for development and troubleshooting.

For the **Uplink data converter** choose the created decoder earlier.

While creating the integration you can copy the **HTTP endpoint URL** as it will be needed later.

Click on **Add** to create the integration.

### Configure the gateway

To configure the gateway, see the [Configure the gateway](#_Configure_the_gateway) steps above.

### Set the HTTP Integration

After your device joins, head to **LoRa Network** -> **Application** -> **Edit** (button of your application) -> **Integrations** tab.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/32.http-integration.png"
  width="100%"
  caption="HTTP integration"
/>

Turn on the integration by clicking **Enable HTTP/HTTPS Integration** switch.

In the **Uplink data**/**Join**/**Ack**/**Device-status notification** fields paste the endpoint URL copied above.

:::tip 📝 NOTE:
- Remove the ‘s’ from the HTTPS link like shown below
`http://thingsboard.cloud/api/v1/integrations/http/3eb7f351-7b7c-XXXX-XXXX-XXXXXXXXXXXX`
- If you want to see only the uplink messages, you can place the endpoint URL only in the Uplink data field.
:::

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/33.integration-example.png"
  width="100%"
  caption="HTTP integration example"
/>

Click **Save & Apply** to save the changes.

Now you can see the uplink messages in the **Event** log.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture34.png"
  width="100%"
  caption="Successful HTTP integration"
/>

## Visualize the data from the end device

In this example, as mentioned above, we are using a RAK7204 WisNode Sense device. The method to visualize the data for other devices is the same.

After creating the data converter, integration, and getting some data in the **Events** tab, a device will be automatically created in the default device group, based on the decoder. Head to the **Device group** menu.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture35.png"
  width="100%"
  caption="Device groups menu"
/>

By default, in the **Device groups** menu you will find only one group named **All.** Click on the **Open** icon (![open-icon.png](/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/open-icon.png)).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture36.png"
  width="100%"
  caption="Automatically created device"
/>

Here you can find the created device. If you click on the device and head to the **Attributes** tab, you will see the data from the node.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture37.png"
  width="100%"
  caption="Device data"
/>

To visualize the data, simply click on desired value you want to visualize and click on **Show on widget** button. In this example, we choose temperature.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture38.png"
  width="100%"
  caption="Visualizing temperature value"
/>

On the next page, from the **Current bundle** drop-down menu choose a desired widget for the data. We will choose **Analogue gauges** as the analog’s gauges have a widget for the temperature.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture39.png"
  width="100%"
  caption="Analogue gauge widget for temperature"
/>

After you choose the widget, click on **Add to dashboard**.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture40.png"
  width="100%"
  caption="Adding widget to dashboard"
/>

By default, the profile does not have a dashboard. You will need to create a new one. Choose **Create new dashboard** and type a name for the dashboard in the new **dashboard title** field. For example, **RAK7204**. In that dashboard, you can add more widgets for the device.

When you set the name for the dashboard, click on **Add** button to add the widget. Optionally, you can check the **Open dashboard** option. This will automatically open the created dashboard after the widget is added.

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture41.png"
  width="100%"
  caption="Added temperature widget"
/>

You can do the steps above for the other data of the device. The only difference is when adding a widget, click on **Select existing dashboard** and select the already created dashboard (in this case **RAK7204**).

<rk-img
src="/assets/images/knowledge-hub/tutorials/thingsboard-integration-with-wisgateos/Picture42.png"
  width="100%"
  caption="Complete the data visualization of RAK7204"
/>
