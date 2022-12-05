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

## Content

- [ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS](#thingsboard-configuration-with-mqtthttp-integrations-via-wisgateos)
  - [Content](#content)
  - [MQTT Integration](#mqtt-integration)
    - [Configure ThingsBoard](#configure-thingsboard)
      - [External MQTT Broker](#external-mqtt-broker)
        - [Configure the Gateway](#configure-the-gateway)
        - [Add a Device to the Application](#add-a-device-to-the-application)
        - [Set the MQTT Integration](#set-the-mqtt-integration)
      - [Local MQTT Broker](#local-mqtt-broker)
        - [Configure the Gateway (Local MQTT)](#configure-the-gateway-local-mqtt)
        - [Set the MQTT Integration (Local MQTT)](#set-the-mqtt-integration-local-mqtt)
  - [HTTP Integration](#http-integration)
    - [Configure ThingsBoard (HTTP Integration)](#configure-thingsboard-http-integration)
      - [Configure the Gateway (HTTP Integration)](#configure-the-gateway-http-integration)
      - [Set the HTTP Integration](#set-the-http-integration)
  - [Data Visualization from the End-Device](#data-visualization-from-the-end-device)

## MQTT Integration

MQTT is a publish/subscribe protocol that allows data transfer to the desired MQTT broker. In this article, two examples will be shown:

- Connecting to the local MQTT broker on the gateway
- Connecting to an external broker

In the MQTT Integration, the ThingsBoard acts as an MQTT client.

### Configure ThingsBoard

1. Login to your [ThingsBoard account](https://thingsboard.cloud/login). If you do not have an account yet, then [create](https://thingsboard.cloud/signup) one first.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/1-thingsboard-login-page.png"
  width="45%"
  caption="ThingsBoard login page"
/>

2. After a successful login, you will see the ThingsBoard Overview page.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/2-thingsboard-overview-page.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>

3. The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/3-data-converters.png"
  width="100%"
  caption="Data converters"
/>

4. To add a data converter, click the **Add Data Converter** icon (➕) and choose **Create a new converter**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/4-adding-new-converter.png"
  width="35%"
  caption="Adding new converter"
/>
<br>

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/5-add-uplink-data-converter.png"
  width="60%"
  caption="Add uplink data converter"
/>

5. In the **Name** field, type a name for the decoder (e.g. ***Uplink decoder***). Leave the **Type** as **Uplink**. You can use the default decoder code provided by ThingsBoard.
6. Click **Add** to add the uplink decoder.
7. Now, that the uplink data converter is ready, you can proceed to add the MQTT integration. Click **Integrations** tab from the menu on the left.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/6-integration-menu.png"
  width="100%"
  caption="Integration menu"
/>

8. Click **Add Integration** (➕) button to add one.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/7-add-integration.png"
  width="70%"
  caption="Add integration"
/>

9. In the **Name** field, give a name of the integration (e.g. ***MQTT Integration***). On the **Type** field, select **MQTT** from the drop-down menu.

:::tip 📝 NOTE
Note that after you select the type of integration, the additional settings for the specified type will appear.
:::

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/8-mqtt-integration-settings.png"
  width="70%"
  caption="MQTT integration settings"
/>

10. For the **Uplink data converter**, choose the created decoder earlier. The **Host** is the address of the MQTT broker which will be used for the messages.

#### External MQTT Broker

The first example will be with an external MQTT broker. If you want to use the local broker, proceed to the [Local MQTT broker](#_Local_MQTT_broker) section.

The external broker used in this example is `broker.hivemq.com`. It is a free public MQTT broker, ideal for testing. You can use other ones or your own broker, then click **Topic filters** to set the subscription topics to which the ThingsBoard client must subscribe.

For WisGate Edge gateways, the topics are:

- `application/{{application_ID}}/device/{{device_EUI}}/join`
- `application/{{application_ID}}/device/{{device_EUI}}/rx`
- `application/{{application_ID}}/device/{{device_EUI}}/tx`
- `application/{{application_ID}}/device/{{device_EUI}}/ack`
- `application/{{application_ID}}/device/{{device_EUI}}/status`
- `mcast_group/{{mcast_ID}}/tx`

The **application_ID**, **device_EUI**, and **mcast_ID** are the ID of the application, the EUI of the device, and the ID of the multicast group, respectively.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/9-mqtt-integration-example.png"
  width="70%"
  caption="MQTT integration example"
/>

:::tip 📝 NOTE
You need to change the values on the topics in the ThingsBoard. For example, `application/1/device/0123456789ABCDEF/join`.
:::

Click **Add** to create the integration.

##### Configure the Gateway

1. Now, that the ThingsBoard is configured, you need to configure the gateway. Start by accessing the gateway. To access the gateway check the [WisGateOS user manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#overview).

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/10-wisgateos-login-page.png"
  width="100%"
  caption="WisGateOS login page"
/>

2. Once logged in, head to the **LoRa Network** menu.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/11-lora-network-page.png"
  width="100%"
  caption="LoRa Network page"
/>

3. By default, the gateway works as a built-in network server. If that is not the case, check the [Network Server](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS/Overview/#network-server) section of the WisGateOS User manual to switch the mode to the Built-in Network Server.
Once the gateway is in Built-In Network Server mode, head to the **Applications** tab.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/12-application-page.png"
  width="100%"
  caption="Application page"
/>

4. Type the name of the application on the **Please input application name** field and click **Add** to add an application.
5. On the **Application Configuration** tab, choose the **Device Authentication Mode**. Leave it as it is by default.
- The **Auto Add LoRa Device** feature can be enabled. When the feature is enabled, the LoRa Device will be added automatically after Application EUI and Application Key pass verification.
- Type your **Application Key** (Application EUI if Auto Add LoRa Device is enabled) or generate a random one with the **Generate Key** (![generate-key.png](/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/generate-key.png)) option.
- The description field is optional.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/13-add-application.png"
  width="100%"
  caption="Add application"
/>

6. In the **Payload format** tab, you can convert the data payload format into JSON by selecting **CayenneLPP**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/14-payload-format.png"
  width="100%"
  caption="Payload format"
/>
<br>

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/15-cayennelpp-payload-format.png"
  width="70%"
  caption="CayenneLPP Payload Format"
/>

7. Once set, click **Save & Apply** to add the application.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/16-created-application.png"
  width="100%"
  caption="Created application"
/>

##### Add a Device to the Application

1. Now that your application is created, you need to add devices to that application. click **Edit** of the application.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/17-add-device-page.png"
  width="100%"
  caption="Add device page"
/>

2. Type the device EUI in the **Please input device EUI** field and click **Add** to add a device.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/18-edit-device-page.png"
  width="100%"
  caption="Edit device page"
/>

3. In the **Edit Device** page, you must name your device in the **Device name** field. 
4. Change the other settings to match your needs.
5. When done, click **Save & Apply** to add the device to the application.

##### Set the MQTT Integration

1. After your device joins, head to the **Global Integration** menu on the left. By default, the **Integration Mode** is **Generic MQTT**. If that is not the case, select it.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/19-generic-mqtt-mode.png"
  width="100%"
  caption="Generic MQTT mode"
/>

2. The default MQTT Broker is the built-in one (`127.0.0.1`). To point the MQTT client to the *hivemq* broker, you need to type **broker.hivemq.com** in the **MQTT Broker Address** field and then click **Save & Apply**.
3. After your device joins and sends uplink data, you can see it in **ThingsBoard** -> **Integrations** -> **Your Integration** -> **Events**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/20-successful-mqtt-integration.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is successful. You can now proceed with processing the data.

#### Local MQTT Broker

The gateway comes with a built-in broker. You can connect the ThingsBoard client to the local broker.

:::tip 📝 NOTE:
For the connection to be successful, you need to put the gateway on DMZ. The DMZ exposes the gateway to the public network, so make sure you set a secured password to protect your device.
:::

1. To connect to the broker, find your [public IP](https://whatismyipaddress.com/) and paste it into the **Host** field.
2. Click **Topic filters** to set the subscription topics to which the ThingsBoard client must subscribe.
For WisGate Edge gateways, the topics are:

- `application/{{application_ID}}/device/{{device_EUI}}/join`
- `application/{{application_ID}}/device/{{device_EUI}}/rx`
- `application/{{application_ID}}/device/{{device_EUI}}/tx`
- `application/{{application_ID}}/device/{{device_EUI}}/ack`
- `application/{{application_ID}}/device/{{device_EUI}}/status`
- `mcast_group/{{mcast_ID}}/tx`

Where **application_ID**, **device_EUI**, and **mcast_ID** are the ID of the application, EUI of the device, and the ID of the multicast group, respectively.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/21-local-broker-example.png"
  width="70%"
  caption="Local broker example"
/>

3. Click **Add** to add the integration.

##### Configure the Gateway (Local MQTT)

To configure the gateway, follow the steps on the [Configure the Gateway](#configure-the-gateway) section.

##### Set the MQTT Integration (Local MQTT)

1. After your device joins, head to the **Global Integration** menu on the left. By default, the **Integration Mode** is **Generic MQTT**. If that is not the case, select it.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/22-generic-mqtt-mode.png"
  width="100%"
  caption="Generic MQTT mode"
/>

2. The default MQTT Broker is the built-in one (`127.0.0.1`). Check if the device’s default broker is selected. Leave everything else to default. Click **Save & Apply**.
3. After your device joins and sends uplink data, you can see it in **ThingsBoard** -> **Integrations** -> **Your Integration** -> **Events**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/23-successful-mqtt-integration.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is successful. You can now proceed with processing the data.

## HTTP Integration

The built-in Network Server provides HTTP integration. The HTTP integration converts existing protocols and payload formats to the ThingsBoard message format.

### Configure ThingsBoard (HTTP Integration)

1. Login to your [ThingsBoard account](https://thingsboard.cloud/login). If you do not have an account yet, then [create](https://thingsboard.cloud/signup) one first.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/24-thingsboard-login-page.png"
  width="100%"
  caption="ThingsBoard login page"
/>

2. After a successful login, you will see the ThingsBoard Overview page.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/25-thingsboard-overview-page.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>

3. The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/26-data-converters.png"
  width="100%"
  caption="Data converters"
/>

4. To add a data converter, click **Add Data Converter** icon (➕) and choose to **Create a new converter**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/27-adding-new-converter.png"
  width="30%"
  caption="Adding new converter"
/>

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/28-add-an-uplink-data-converter.png"
  width="60%"
  caption="Add an uplink data converter"
/>

5. In the **Name** field, type a name for the decoder (e.g. ***Uplink decoder***). Leave the **Type** as **Uplink**. You can use the default decoder code provided by ThingsBoard.
6. Click **Add** to add the uplink decoder.
7. Now, that the uplink data converter is ready, you can proceed to add the HTTP integration. click **Integrations** menu on the left (below **Data converters**).

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/29-integration-menu.png"
  width="100%"
  caption="Integration menu"
/>

8. Click the **Add Integration** (➕) button to add one.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/30-add-integration.png"
  width="100%"
  caption="Add integration"
/>

9. In the **Name** field, give a name of the integration (e.g., ***HTTP Integration***). In the **Type** field, select **HTTP** from the drop-down menu.

:::tip 📝 NOTE
After selecting the type of integration, the additional settings for the specified type will appear.
:::

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/31-http-integration-settings.png"
  width="80%"
  caption="HTTP integration settings"
/>

10. Enable **Debug mode**. Debug mode is useful for development and troubleshooting.
11. For the **Uplink data converter**, choose the created decoder earlier.
12. While creating the integration you can copy the **HTTP endpoint URL**, as it will be needed later.
13. Click **Add** to create the integration.

#### Configure the Gateway (HTTP Integration)

To configure the gateway, follow the steps on the [Configure the Gateway](#configure-the-gateway) section.

#### Set the HTTP Integration

1. After your device joins, head to **LoRa Network** -> **Application** -> **Edit** -> **Integrations** tab.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/32-http-integration.png"
  width="100%"
  caption="HTTP integration"
/>

2. Turn on the integration by clicking **Enable HTTP/HTTPS Integration** switch.
3. In the **Uplink data**, **Join notification**, **Ack notification**, and **Device-status notification** fields, paste the endpoint URL copied above.

:::tip 📝 NOTE:
- Remove the ‘***s***’ from the HTTPS link:
`http://thingsboard.cloud/api/v1/integrations/http/3eb7f351-7b7c-XXXX-XXXX-XXXXXXXXXXXX`
- If you want to see only the uplink messages, you can place the endpoint URL only in the Uplink data field.
:::

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/33-http-integration-example.png"
  width="100%"
  caption="HTTP integration example"
/>

4. Click **Save & Apply** to save the changes. You should see the uplink messages in the **Event** log.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/34-successful-http-integration.png"
  width="100%"
  caption="Successful HTTP integration"
/>

## Data Visualization from the End-Device

In this example, the RAK7204 WisNode Sense is the device used. The method to visualize the data for other devices is the same.

1. After creating the data converter, integration and getting some data in the **Events** tab, this automatically creates a device in the default device group based on the decoder. Head to the **Device group** menu.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/35-device-groups-menu.png"
  width="100%"
  caption="Device groups menu"
/>

2. By default, in the **Device groups** menu, you will find only one group named **All**. Click the **Open** icon (![open-icon.png](/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/open-icon.png)).

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/36-automatically-created-device.png"
  width="100%"
  caption="Automatically created device"
/>

3. You can find the created device. Just click on the device and head to the **Attributes** tab, and you will see the data from the node.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/37-device-data.png"
  width="100%"
  caption="Device data"
/>

4. To visualize the data, simply select the desired value you want to visualize and then click the **Show on widget** button. In this example, choose temperature.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/38-visualizing-temperature-value.png"
  width="100%"
  caption="Visualizing temperature value"
/>

5. On the next page, from **Current bundle** drop-down menu, choose a desired widget for the data. For this example, choose **Analogue gauges** as the analog gauges have a widget for the temperature.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/39-analogue-gauge-widget-for-temperature.png"
  width="100%"
  caption="Analogue gauge widget for temperature"
/>

6. After you choose the widget, click **Add to dashboard**.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/40-adding-widget-to-dashboard.png"
  width="100%"
  caption="Adding widget to dashboard"
/>

7. By default, the profile does not have a dashboard. You will need to create a new one. Choose **Create new dashboard** and type a name for the dashboard in the **New dashboard title** field. For example, RAK7204.
8. In that dashboard, you can add more widgets for the device. When you set the name for the dashboard, click **Add** button to add the widget. Optionally, you can check the **Open dashboard** option. This will automatically open the created dashboard after the widget is added.

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/41-added-temperature-widget.png"
  width="100%"
  caption="Added temperature widget"
/>

9. You can do the steps above for the other data of the device. The only difference is when adding a widget. Click **Select existing dashboard** and select the already created dashboard (in this case, **RAK7204**).

<rk-img
src="/assets/images/knowledge-hub/user-manual/thingsboard-integration-with-wisgateos/42-complete-the-data-visualization-of-rak7204.png"
  width="100%"
  caption="Complete the data visualization of RAK7204"
/>
