---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: Visualize your end device's data in ThingsBoard with MQTT or HTTP integrations via WisGate Edge V2 Built-in Network Server
tags:
  - User-Manual
  - WisGateOS2
  - WisGate
  - MQTT
  - HTTP
  - ThingsBoard
header:
  title: ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS2
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/developer-gateway-firmware-setup.jpg
posted: 12/02/2022 5:30 PM
---


# ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS2

The Built-in Network server of the WisGate Edge V2 gateways provides MQTT and HTTP integrations. Integration helps the user to post-process the data and implement solutions based on their needs. This article will show you how to create an MQTT or HTTP integration to ThingsBoard using the built-in network server.

## Content

- [ThingsBoard Configuration with MQTT/HTTP Integrations via WisGateOS2](#thingsboard-configuration-with-mqtthttp-integrations-via-wisgateos2)
  - [Content](#content)
  - [MQTT Integration](#mqtt-integration)
    - [Configure ThingsBoard](#configure-thingsboard)
    - [External MQTT Broker](#external-mqtt-broker)
      - [Configure the Gateway](#configure-the-gateway)
      - [Set the MQTT Integration](#set-the-mqtt-integration)
    - [Local MQTT Broker](#local-mqtt-broker)
      - [Configure the Gateway (Local MQTT)](#configure-the-gateway-local-mqtt)
      - [Set the MQTT Integration (Local MQTT)](#set-the-mqtt-integration-local-mqtt)
  - [HTTP Integration](#http-integration)
    - [Configure ThingsBoard](#configure-thingsboard-1)
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
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/1.login-page.png"
  width="50%"
  caption="ThingsBoard login page"
/>

2. After a successful login, you will see the ThingsBoard Overview page.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/2.overview-page.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>


3. The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/3.overview-page.png"
  width="100%"
  caption="Data converters"
/>


4. To add a data converter, click the **Add Data Converter** icon ![add-data.png](/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/add-data.png) and choose to **Create new converter**.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/4.create-new-converter.png"
  width="40%"
  caption="Adding a new converter"
/>


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/5.uplink-data-converter.png"
  width="70%"
  caption="Adding an uplink data converter"
/>


5. In the **Name** field, type a name for the decoder (e.g. ***Uplink decoder***). Leave the **Type** as **Uplink**. You can also use the default decoder code provided by ThingsBoard.

```
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);

var deviceName =  'RAK7204';
var result = {
   deviceName: deviceName,
   attributes: {
       integrationName: metadata['integrationName'],
       temperature: data.temperature,
       humidity: data.humidity,
       barometer: data.barometer,
       gas_resistance: data.analogInput,
   },
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // convert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```


6. Click **Add** to add the uplink decoder.
7. Now that the uplink data converter is ready, you can proceed to add the MQTT integration. Click the **Integrations** menu on the left tab.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/6.integration.png"
  width="100%"
  caption="Integration menu"
/>


8. Click the **Add Integration** ![add-data.png](/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/add-data.png) button to add one.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/7.integration.png"
  width="70%"
  caption="Add integration"
/>



9. In the **Name** field, give a name of the integration (e.g. ***MQTT Integration***). In the **Type** field, select **MQTT** from the drop-down menu.

:::tip 📝 NOTE
Selecting the type of integration pops up settings for the specified type.
:::


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/8.mqtt-integration.png"
  width="70%"
  caption="MQTT integration settings"
/>


10. For the **Uplink data converter**, choose the decoder created earlier. The **Host** is the address of the MQTT broker which will be used for the messages.


:::tip 📝 NOTE
Check the **Debug mode** to track events while configuring the integration.
:::


### External MQTT Broker

The first example will be with an external MQTT broker. If you want to use the local broker, proceed to the Local MQTT broker  section.

The external broker used in this example is `broker.hivemq.com`. It is a free public MQTT broker, ideal for testing. You can use other ones or your own broker, then click thbe **Topic** filters to set the subscription topics to which the ThingsBoard client must subscribe.

For WisGate Edge gateways the topics are as follows:

 - `application/{{application_ID}}/device/{{device_EUI}}/join`
 - `application/{{application_ID}}/device/{{device_EUI}}/rx`
 - `application/{{application_ID}}/device/{{device_EUI}}/tx`
 - `application/{{application_ID}}/device/{{device_EUI}}/ack`
 - `application/{{application_ID}}/device/{{device_EUI}}/status`
 - `mcast_group/{{mcast_ID}}/tx`


Where **application_ID**, **device_EUI**, and **mcast_ID** are the ID of the application, the EUI of the device, and the ID of the multicast group, respectively.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/9.mqtt-integration-example.png"
  width="70%"
  caption="MQTT integration example"
/>

:::tip 📝 NOTE

You need to change the values in the topics in the ThingsBoard. For example, `application/1/device/0123456789ABCDEF/join`.

:::


#### Configure the Gateway

1. Now that the ThingsBoard is configured, you need to configure the gateway. Start by accessing the gateway. You can see how to do it in the [WisGateOS V2 user manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/).


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/10.wisgateos2-login-page.png"
  width="100%"
  caption="WisGateOS V2 login page"
/>

2. Once you log in, head to the **LoRa** menu.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/11.lora-page.png"
  width="100%"
  caption="LoRa page"
/>


3. By default, the gateway works as a built-in network server. If that is not the case, check the [Built-in Network Server Mode Settings](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#lora) in the WisGateOS V2 User manual to switch the mode to Built-in network server.

Once the gateway is in Built-in network server mode, head to the **Applications** tab.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/12.app-page.png"
  width="100%"
  caption="Application page"
/>

4. Click the **Add application** button or **add one now** link to add a new application. On the new page, fill in the following information:

- **Application name** – type a name for the application.
- **Application description** – optionally, you can write a description of the application.
- **Application Type** – from the drop-down menu select the type of application.
    - **Unified Application key** – all devices will use the same application key. Selecting this option pops up an Application Key field. You can type your application key there or use the Autogenerate button to generate one.

        <rk-img
        src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/13.unified-app-key.png"
        width="50%"
        caption="Unified Application key"
        />

        :::tip 📝 NOTE

        The **Auto Add Device** switch pops up an Application EUI field. The device will be automatically added to the application after application EUI and key verification.

        <rk-img
        src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/14.auto-add-device.png"
        width="50%"
        caption="Auto Add Device"
        />

        :::


    - **Separate Application keys** – each device will have its own application key. The key is added when registering the device.
- **Payload type** – from the drop-down select CayenneLPP payload type and turn on the Only forward data object feature.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/15.adding-application.png"
  width="100%"
  caption="Adding Application"
/>

5. Once done setting up, click **Save Application** to add the application.
6. After the application is added, head to the End devices tab. If you are using the **Auto Add Device** feature, the devices should automatically register upon join request.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/16.end-device.png"
  width="100%"
  caption="Added end device"
/>


7. If that’s not the case, click the **Add end device** button. On the **End device information** page, fill in the following information:


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/17.abp-device.png"
  width="50%"
  caption="Adding ABP device"
/>


   - **Activation Mode** – choose the activation mode of your device – OTAA or ABP. ABP mode pops up two additional fields for the Application Session Key and Network Session Key.
   - **End device (group) name** – name of the device.
   - **End device description (optional)** – optionally, you can add description for the device.
   - **Class** – the class of the device.
   - **Frame Counter width** – the width of the frame counter. Leave as default.
   - **LoRaWAN MAC Version** – the LoRaWAN MAC version. V1.0.2 pops up a LoRaWAN Regional Parameters reversion field where you need to select the reversion of the device.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/18.application.png"
  width="100%"
  caption="Created application"
/>

8. Once everything is set, click **Add end devices** to go the page to add the device.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/19.add-end-device.png"
  width="100%"
  caption="Adding end device"
/>

9. In the **Adding end devices** page, type the device EUI at the **End Device EUI (main)** and click **Add to “End Devices list”**.

:::tip 📝 NOTE
- If the EUI is correct, the device will show in the **End devices list**.
- If the EUI is not correct, the devices will show in the **End devices with an error**.
:::

10. Once the device is added to the **End devices list**, click **Add end devices** to add the device. Confirm you are adding the device.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/20.confirm-message.png"
  width="50%"
  caption="Add device confirm message"
/>

You will be redirected to the **End devices** page, where the device is added.


#### Set the MQTT Integration

1. After your device joins, head to **LoRa** -> **Integration Interface Parameters** section.
2. Turn on the integration by clicking **Enable Integration Interface switch**. By default, the **Integration mode** is **Generic MQTT**. If that is not the case, select the **Generic MQTT** as the integration mode.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/21.mqtt-mode.png"
  width="100%"
  caption="Generic MQTT mode"
/>

3. The default MQTT Broker is the built-in one (**127.0.0.1**). To point the MQTT client to the *hivemq* broker, you need to type `broker.hivemq.com` in the **MQTT Broker Address** field and then click **Save changes**.
4. After your device joins and sends uplink data, you can see it in **ThingsBoard** -> **Integrations** -> **Your Integration** -> **Events**.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/22.successful-mqtt.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is ready. You can now proceed with processing the data.


### Local MQTT Broker

The gateway comes with a built-in broker. You can connect the ThingsBoard client to the local broker.


:::tip 📝 NOTE

- For the connection to be successful, you need to put the gateway on DMZ or set a static IP address on the gateway and forward the 1883 port.
- When setting a DMZ, the gateway is exposed to the public network, so make sure you set a secured password to protect your device.
:::


1. To connect to the broker, find your [public IP](https://whatismyipaddress.com/) and paste it into the **Host** field.
2. Click **Topic filters** to set the subscription topics to which the ThingsBoard client must subscribe. For WisGate Edge gateways the topics are as follows:

- `application/{{application_ID}}/device/{{device_EUI}}/join`
- `application/{{application_ID}}/device/{{device_EUI}}/rx`
- `application/{{application_ID}}/device/{{device_EUI}}/tx`
- `application/{{application_ID}}/device/{{device_EUI}}/ack`
- `application/{{application_ID}}/device/{{device_EUI}}/status`
- `mcast_group/{{mcast_ID}}/tx`

Where **application_ID**, **device_EUI**, and **mcast_ID** are the ID of the application, EUI of the device, and the ID of the multicast group, respectively.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/23.local-broker-example.png"
  width="70%"
  caption="Local broker example"
/>

#### Configure the Gateway (Local MQTT)

To configure the gateway, follow the steps on the [Configure the Gateway](#configure-the-gateway) section.


#### Set the MQTT Integration (Local MQTT)

1. After your device joins, head to **LoRa** -> **Integration Interface Parameters** section.
2. Turn on the integration by clicking **Enable Integration Interface** switch. By default, the **Integration** mode is **Generic MQTT**. If that is not the case, select it manually.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/24.generic-mqtt-mode.png"
  width="100%"
  caption="Generic MQTT mode"
/>

3. The default MQTT Broker is the built-in one (**127.0.0.1**). Check if the device default broker is selected. Leave everything else to default, then click **Save changes**.
4. After your device joins and sends uplink data, you can see it in **ThingsBoard** -> **Integrations** -> **Your Integration** -> **Events**.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/25.mqtt-integration.png"
  width="100%"
  caption="Successful MQTT Integration"
/>

The MQTT integration is successful. You can now proceed with processing the data.


## HTTP Integration

The built-in network server provides HTTP integration. The HTTP integration converts existing protocols and payload formats to the ThingsBoard message format.

### Configure ThingsBoard

1. Login to your [ThingsBoard account](https://thingsboard.cloud/login). If you do not have an account yet, then [create](https://thingsboard.cloud/signup) one first.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/26.login-page.png"
  width="50%"
  caption="ThingsBoard login page"
/>

2. After a successful login, you will see the ThingsBoard Overview page.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/27.overview-page.png"
  width="100%"
  caption="ThingsBoard Overview page"
/>


3. The first thing you need is a data converter for the uplinks. To create one, head to the **Data converters** menu.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/28.overview-page.png"
  width="100%"
  caption="Data converters"
/>


4. To add a data converter, click the **Add Data Converter** icon (<font-awesome-icon icon="fa-solid fa-plus" />) and choose to **Create new converter**.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/29.create-new-converter.png"
  width="40%"
  caption="Adding a new converter"
/>

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/30.uplink-data-converter.png"
  width="70%"
  caption="Adding an uplink data converter"
/>

:::tip 📝 NOTE
Check the **Debug** mode to track events while configuring the integration.
:::



5. In the **Name** field, type a name for the decoder (e.g. ***Uplink decoder***). Leave the **Type** as **Uplink**. You can also use the default decoder code provided by ThingsBoard.

```
/** Decoder **/

// decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr);

var deviceName =  'RAK7204';
var result = {
   deviceName: deviceName,
   attributes: {
       integrationName: metadata['integrationName'],
       temperature: data.temperature,
       humidity: data.humidity,
       barometer: data.barometer,
       gas_resistance: data.analogInput,
   },
};

/** Helper functions **/

function decodeToString(payload) {
   return String.fromCharCode.apply(String, payload);
}

function decodeToJson(payload) {
   // convert payload to string.
   var str = decodeToString(payload);

   // parse string to JSON
   var data = JSON.parse(str);
   return data;
}
return result;
```


6. Click **Add** to add the uplink decoder.
7. Now that the uplink data converter is ready, you can proceed to add the HTTP integration. Click the **Integrations** menu on the left tab.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/31.integration.png"
  width="100%"
  caption="Integration menu"
/>


1. Click the **Add Integration** ![add-data.png](/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/add-data.png) button to add one.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/32.integration.png"
  width="70%"
  caption="Add integration"
/>



9. In the **Name** field, give a name of the integration (e.g. ***HTTP Integration***). In the **Type** field, select **HTTP** from the drop-down menu.

:::tip 📝 NOTE
Selecting the type of integration pops up settings for the specified type.
:::


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/33.http-integration-settings.png"
  width="70%"
  caption="HTTP integration settings"
/>

10. Enable the **Debug** mode. The debug mode is useful for development and troubleshooting.
11. For **Uplink data converter**, choose the created decoder earlier.
12. While creating the integration, you can copy the **HTTP endpoint URL**, as it will be needed later.
13. Click **Add** to create the integration.


### Configure the Gateway (HTTP Integration)


To configure the gateway, follow the steps on the [Configure the Gateway](#configure-the-gateway) section.


### Set the HTTP Integration

1. After your device joins, head to **LoRa Network** -> **Applications** -> **Select your application** -> **Configuration** -> **Integration Parameters**.
2. Turn on the integration by clicking **Enable HTTP/HTTPS Integration** switch. This will pop up the HTTP/S integration field settings.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/34.http-integration.png"
  width="100%"
  caption="HTTP integration"
/>

3. In the **Uplink data**, **Join notification**, **Ack notification**, and **Device-status notification URLs** fields, paste the end point URL copied above.

:::tip 📝 NOTE
- Remove the ‘***s***’ from the HTTPS link:

`http://thingsboard.cloud/api/v1/integrations/http/3eb7f351-7b7c-XXXX-XXXX-XXXXXXXXXXXX`

- If you want to see only the uplink messages, you can place the endpoint URL only in the Uplink data field.

:::


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/35.http-integration.png"
  width="100%"
  caption="HTTP integration example"
/>


4. Click **Save & Apply** to save the changes. You should see the uplink messages in the **Event** log.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/36.http-integration.png"
  width="100%"
  caption="Successful HTTP integration"
/>


## Data Visualization from the End-Device

In this example, the RAK7204 WisNode Sense is the device used. The method to visualize the data for other devices is the same.

1. After creating the data converter, integration and getting some data in the **Events** tab, this automatically creates a device in the default device group based on the decoder. Head to the **Device group** menu.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/37.device-group.png"
  width="100%"
  caption="Device groups menu"
/>

2. By default, in the **Device groups** menu, you will find only one group named **All**. Click the **Open** icon ![open-icon.png](/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/open-icon.png).


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/38.auto-create-device.png"
  width="100%"
  caption="Automatically created device"
/>

3. You can find the created device. Just click on the device and head to the **Attributes** tab, and you will see the data from the node.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/39.device-data.png"
  width="100%"
  caption="Device data"
/>

4. To visualize the data, simply select the desired value you want to visualize and then click the **Show on widget** button. In this example, choose temperature.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/40.temp-value.png"
  width="100%"
  caption="Visualizing temperature value"
/>


5. On the next page, from **Current bundle** drop-down menu, choose a desired widget for the data. For this example, choose **Analogue gauges** as the analog gauges have a widget for the temperature.


<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/41.analogue-gauge-widget.png"
  width="100%"
  caption="Analogue gauge widget for temperature"
/>

6. After choosing a widget, click **Add to dashboard**.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/42.add-widget.png"
  width="100%"
  caption="Adding widget to dashboard"
/>

7. By default, the profile does not have a dashboard. You will need to create a new one. Choose **Create new dashboard** and type a name for the dashboard in the **New dashboard title** field. For example, RAK7204.

8. In that dashboard, you can add more widgets for the device. When you set the name for the dashboard, click **Add** button to add the widget. Optionally, you can check the **Open dashboard** option. This will automatically open the created dashboard after the widget is added.

:::tip 📝 NOTE
If you have not checked the **Open dashboard** option, you can easily navigate to **Dashboard groups** menu -> **All** -> `<Name_of_your_group>` to see the added widget.

:::

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/43.temp-widget.png"
  width="100%"
  caption="Added temperature widget"
/>


9. You can do the steps above for the other data of the device. The only difference is when adding a widget. Click **Select existing dashboard** and select the already created dashboard (in this case, RAK7204).

<rk-img
  src="/assets/images/knowledge-hub/user-manual/wisgateos2-thingsboard/44.data-visualization.png"
  width="100%"
  caption="Complete data visualization of RAK7204"
/>