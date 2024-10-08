---
prev: ../Quickstart/
next: ../Datasheet/
tags:
    - wisnode
    - Sensor Hub
    - TTN
    - Datacake
    - LoRaWAN
    - Solar Radiation
rak_desc: Provides comprehensive information to connect it to various LoRaWAN network servers and display data on IoT platforms.
rak_img: /assets/images/wisnode/solar-radiation-monitoring/SolarSolution.png
---

# Solar Radiation Sensor Supported LoRa Network Servers

## Network Server and Visualization Configuration

This section outlines the operational steps for connecting the device to the network server in both the LoRaWAN and NB-IoT application scenarios.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f1application_scenarios.png"
  width="80%"
  caption="LoRaWAN Application Scenarios"
/>

### LoRaWAN Application

#### Cloud Network Server Setup

The cloud network server deployment scenario involves connecting the gateway and devices to third-party cloud network servers. This setup integrates visualization applications to manage real-time solar radiation data.

This section provides instructions on creating a Datacake visualization application using the TTN v3 cloud network server.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f2CloudNetworkServer.png"
  width="80%"
  caption="Cloud network server deployment solution"
/>

##### Connect Gateway to TTN

For this example, you will use the TTNv3 cloud server and RAK7289V2 WisGate Edge Lite 2 to demonstrate how to connect the RAK business gateway to a cloud server.

- **Register the Gateway**

1. Register an account and log in to the [TTN v3 website.](https://eu1.cloud.thethings.network/console/) If you already have a TTN account, you can log in with your **The Things ID** credentials.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f3SolarSolution_LNS_TTN1.png"
  width="50%"
  caption="Log in to the TTN website"
/>

2. Once logged into the site, click on **Register a gateway** to begin the registration process for a new gateway. 

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f4SolarSolution_LNS_TTN2.png"
  width="50%"
  caption="TTN home page"
/>

3. Input the Gateway EUI and then click on **Confirm** to proceed. 

The Gateway EUI serves as a distinct 64-bit extended identifier for the gateway, accessible from the Overview page of the gateway management platform or from the label situated behind the gateway.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f5SolarSolution_LNS_TTN3.png"
  width="100%"
  caption="Enter the Gateway EUI"
/>

4. Choose the appropriate frequency plan used by the gateway, and click **Register gateway** to complete the registration process of the gateway.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f6SolarSolution_LNS_TTN4.png"
  width="100%"
  caption="Configure the gateway frequency"
/>

**Generate Token**

TTNv3 supports TLS server authentication and client tokens, which require trust files and keys to configure the gateway and successfully connect to the network. 

1. To generate a key file, navigate to **API keys** from the **Overview** page of the registered gateway, then click on **Add API key**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f8SolarSolution_LNS_TTN6.png"
  width="100%"
  caption="Add API keys"
/>

2. In the **Add API key** page, set the **Name** field, tick of the checkboxes shown in **Figure 8**, then click **Create API key**. 

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f9SolarSolution_LNS_TTN7.png"
  width="100%"
  caption="Configure the API Key"
/>

3. A new window pops up with the generated key. Copy the new API key by clicking the icon and then the **I have copied the key** button.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f10SolarSolution_LNS_TTN8.png"
  width="60%"
  caption="Copy and save the API Key"
/>

**Register the Gateway**

1. Navigate back to the gateway management platform Web UI. Click on the left navigation bar to access the **LoRa > Configuration** tab. Complete the following settings and save them.

- **Basics Station Server Type**: LNS Server
- **Server URL**: `wss://eu1.cloud.thethings.network`
- **Server Port**: `8887`
- **Authentication Mode**: TLS server & Client Token Authentication
- **Trust (CA Certificate)**: Download the [certificate](https://letsencrypt.org/certs/isrgrootx1.pem)
- **Client Token**: Copied API Keys

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f11SolarSolution_LNS_TTN9.png"
  width="100%"
  caption="Configure the gateway"
/>

2. After saving the changes, return to the TTN gateway interface, and navigate to the **Gateways** tab to confirm that the gateway is now connected to TTNv3 as a Basics Station.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f12SolarSolution_LNS_TTN10.png"
  width="100%"
  caption="Gateway connected successfully"
/>

##### Connect Sensor Hub to TTN

1. Return to the TTNv3 homepage and select **Create an application** to add a node.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f13SolarSolution_LNS_TTN11.png"
  width="70%"
  caption="Select Create application"
/>

2. Click **+ Create application** to initiate the creation of a node.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f14SolarSolution_LNS_TTN12.png"
  width="100%"
  caption="Create a new application"
/>

3. Enter the desired **Application ID** in the provided field, then click on **Create application**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f15SolarSolution_LNS_TTN13.png"
  width="100%"
  caption="Enter the application ID"
/>
4. Click on the **+Register end device** button to add a new end device to the application.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f16SolarSolution_LNS_TTN14.png"
  width="100%"
  caption="Add the end device"
/>

5. Set the parameters of the end device, as shown in **Figure 16**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f17SolarSolution_LNS_TTN15.png"
  width="100%"
  caption="End device parameters"
/>

- **JoinEUI**, **DevEUI**, and **AppKey** can be automatically generated by clicking **Generate** on the TTN web page or customized by the user.

:::tip 📝 NOTE:
Ensure that the three parameters - **JoinEUI**, **DevEUI**, and **AppKey** - are consistent with the parameters set in the WisToolBox application.
:::

6. After completing the settings, return to the WisToolBox app, and click **JOIN NETWORK** to send the end device network access request.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f18SolarSolution_LNS_TTN16.png"
  width="25%"
  caption="Sending end device network join request"
/>

7. As shown in **Figure 18**, the Sensor Hub has successfully joined the TTNv3 network server.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f19SolarSolution_LNS_TTN17.png"
  width="100%"
  caption="Successfully joined the TTNv3 network server"
/>

##### Visualize Data Through Datacake

Datacake is a versatile IoT platform. It offers a range of features tailored for effective data visualization and management, making it a preferred choice for IoT projects requiring efficient monitoring and analysis.

**Create Datacake Integration**

1. In the TTN console, navigate to **Integrations** on the sidebar, proceed to the **Webhooks** section, and then click **+Add Webhooks** to set up an integration.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f20SolarSolution_LNS_TTN18.png"
  width="100%"
  caption="Adding an integration"
/>

2. From the list of webhook templates, select the **Datacake** template.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f21SolarSolution_LNS_TTN19.png"
  width="100%"
  caption="Select the Datacake template"
/>

3. Generate an API key for webhook authentication on Datacake. To get started, register a [Datacake](https://datacake.co/) account, and then log in.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f22SolarSolution_LNS_DC1.png"
  width="100%"
  caption="Log in to the Datacake IoT platform"
/>

4. Navigate to the Datacake workspace. Select **Members** on the sidebar, and switch to the **API Users** tab, then click the **Add API User** button.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f23SolarSolution_LNS_DC2.png"
  width="100%"
  caption="Add API User"
/>

5. Enter the name of the API User, for instance, **TTS API**. Set the relevant parameters accordingly and click **Save** to finalize the creation process.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f24SolarSolution_LNS_DC3.png"
  width="50%"
  caption="Set Parameters"
/>

6. Click the **Copy** button to copy the generated Datacake API Token.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f25SolarSolution_LNS_DC4.png"
  width="100%"
  caption="Copy the generated Datacake API Token"
/>

7. Back on the TTN website, enter **sensorhub** in the **Webhook ID** field (as an example), and paste the Datacake API Token you previously copied into the **Token** field. Click the **Create Datacake Webhook** button to generate the Datacake Webhook.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f26SolarSolution_LNS_DC5.png"
  width="100%"
  caption="Create the Datacake Webhook"
/>

**Add Sensor Hub to Datacake**

1. To add a new device, select **Devices** in the sidebar and click the **+Add Device** button.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f27SolarSolution_LNS_DC6.png"
  width="100%"
  caption="Add a Device"
/>

2. Choose **LoRaWAN** from the options and click **Next** to proceed.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f28SolarSolution_LNS_DC7.png"
  width="50%"
  caption="Choose LoRaWAN connectivity"
/>

3. As the Sensor Hub is a new device, there is no pre-existing template. Create a template by clicking **New Product**, enter the **Product Name**, and click **Next** to proceed.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f29SolarSolution_LNS_DC8.png"
  width="50%"
  caption="Create a New Product"
/>

4. Choose a network server for your device. In this guide, select **The Things Stack V3**, then click **Next** to continue.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f30SolarSolution_LNS_DC9.png"
  width="50%"
  caption="Select the Things Stack V3"
/>

5. In the **Step 3 Devices** tab, enter the device **DEVEUI** and **NAME** fields, and click **Next** to continue.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f31SolarSolution_LNS_DC10.png"
  width="50%"
  caption="Add DEVEUI and Name"
/>

6. In **Step 4 Plan**, select the preferred subscription plan, and click **Add 1 device** to add the device. For this example, choose **Free**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f32SolarSolution_LNS_DC11.png"
  width="50%"
  caption="Select a subscription plan"
/>

7. The registered devices can now be viewed on the **Devices** tab.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f33SolarSolution_LNS_DC12.png"
  width="100%"
  caption="Registered device"
/>

**Create a Payloader Decoder**

1. Click the successfully registered device and go to the **Configuration** tab. Scroll down to the **Payload Decoder** field, then copy and save the decoder code.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f34SolarSolution_LNS_DC13.png"
  width="100%"
  caption="Configuration tab"
/>

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f35SolarSolution_LNS_DC14.png"
  width="100%"
  caption="Decoder code"
/>

````js
function Decoder(bytes, port) {
var decoded = {};
var str = bin2HexStr(bytes);
    var i = 0;  
    while (i < str.length) {  
        var channelId = parseShort(str.slice(i, i + 4), 16);  
        var value = parseShort(str.slice(i + 4, i + 8), 16);  
        i += 8;  
        switch (channelId) {  
            case 0x01C3:  
                decoded.pyranometer = value;  
                break;  
            default:  
                break;  
        }  
    }  
  
    try {  
        decoded.lorawan_rssi = (port && port.metadata && port.metadata.rssi) || 0;  
        decoded.lorawan_snr = (port && port.metadata && port.metadata.snr) || 0;  
        decoded.lorawan_datarate = (port && port.metadata && port.metadata.data_rate) || '';  
    } catch (e) {  
        console.log('Failed to read gateway metadata');  
    }  
  
    return decoded;  
}  
  
function bin2HexStr(bytesArr) {  
    var str = '';  
    for (var i = 0; i < bytesArr.length; i++) {  
        var tmp = (bytesArr[i] & 0xff).toString(16);  
        if (tmp.length == 1) {  
            tmp = '0' + tmp;  
        }  
        str += tmp;  
    }  
    return str;  
}  
  
// convert string to short integer  
function parseShort(str, base) {  
    var n = parseInt(str, base);  
    return (n << 16) >> 16;  
}  
  
// convert string to triple bytes integer  
function parseTriple(str, base) {  
    var n = parseInt(str, base);  
    return (n << 8) >> 8;  
}      var n = parseInt(str, base);  
    return (n << 8) >> 8;   
````

2. Displace the menu bar to the **+Add Field** section and click **+Add Field**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f36SolarSolution_LNS_DC15.png"
  width="100%"
  caption="Add Field"
/>

3. The **Add Field** window appears. Fill out the fields shown in **Figure 36** to configure the stored data in the device.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f37SolarSolution_LNS_DC16.png"
  width="50%"
  caption="Configuration fields"
/>

:::tip 📝 NOTE:
- Enter an appropriate name in the Name field.
- The **Identifier** field will be automatically filled based on the name.
- When an uplink is received, refresh the page, and the **CURRENT VALUE** field will be updated.
- Leave everything else as default, and click **Add Field** to complete the setup.
:::

3. When completed, it will look the same, as shown in **Figure 37**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f38SolarSolution_LNS_DC17.png"
  width="100%"
  caption="Successfully added fields"
/>

**Create a Dashboard**

1. To create a dashboard, toggle the **edit mode** switch on the **Dashboard** tab of the device in Datacake.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f39SolarSolution_LNS_DC18.png"
  width="100%"
  caption="Turn on the edit mode switch"
/>

2. Click **+Add Widget** to include a visualization widget.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f40SolarSolution_LNS_DC19.png"
  width="100%"
  caption="Add visualization widget"
/>

3. Select **Value** from the menu to create a new dashboard.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f41SolarSolution_LNS_DC20.png"
  width="50%"
  caption="Select Value to create a new dashboard"
/>

:::tip 📝 NOTE:
You can select various types of widgets to accommodate different data formats.
:::

4. In the **Title** field under the **Basics** tab, name the widget, for example, *Pyranometer*.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f43SolarSolution_LNS_DC22.png"
  width="50%"
  caption="Name the Widget"
/>

5. Under the **Data** tab, click the Field dropdown arrow, select **Pyranometer**, and set the unit to **W/m2**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f42SolarSolution_LNS_DC21.png"
  width="50%"
  caption="Setting Parameters"
/>

6. Under the **Gauge** tab, select the gauge type and color, set the range of values for the widget, and then click **Save**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f44SolarSolution_LNS_DC23.png"
  width="50%"
  caption="Set Gauge"
/>

7. When you finish adding the widgets, turn off the **edit mode** switch to save the edits.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f45SolarSolution_LNS_DC24.png"
  width="100%"
  caption="Added Widget"
/>

#### Built-In Network Server Setup

The RAK gateway comes with a built-in NS, which eliminates the need to deploy NS in the cloud or locally. This gateway is suitable for small-sized industrial application scenarios and offers various advantages such as cost savings, reduced R&D investment, high execution efficiency, and shorter delays.

The built-in network server of the RAK gateway provides MQTT and HTTP integration that allows for post-processing data and implementing solutions based on the needs.

This section will use the public MQTT broker integration as an example to demonstrate how to use the built-in network server to create a visualization application on ThingsBoard.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f46Built-inServe ApplicationFlow.png"
  width="80%"
  caption="Gateway built-in NS application scenario"
/>

##### Configure the ThingsBoard

1. Log in to [ThingsBoard.](https://thingsboard.cloud/login) If you don't have an account yet, [create one](https://thingsboard.cloud/signup) before proceeding.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f47SolarSolution_LNS_TB1.png"
  width="40%"
  caption="ThingsBoard authentication page"
/>

2. After successfully logging in, you will be directed to the ThingsBoard homepage.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f48SolarSolution_LNS_TB2.png"
  width="100%"
  caption="ThingsBoard Homepage"
/>

3. Navigate to the **Integration center > Data converter** menu bar to create a data converter for the uplink.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f49SolarSolution_LNS_TB3png"
  width="100%"
  caption="Create a Data Converter"
/>

4. Click on the **Add Data Converter** icon and choose the **Create new converter** option.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f50SolarSolution_LNS_TB4.png"
  width="40%"
  caption="Create a new Converter"
/>

5. Enter the name of the decoder in the **Name** field (for example, *Uplink decoder*), leave the **Type** field as **Uplink**, and select the **JavaScript** option.
<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f51SolarSolution_LNS_TB5.png"
  width="50%"
  caption="Add the decoder code"
/>

6. Edit the decoder code by copying the following code into the edit box. Then, click **Add** to include the uplink decoder.

````js

/** Decoder **/
//decode payload to string
var payloadStr = decodeToString(payload);
var data = JSON.parse(payloadStr).data;
var bytes = atob(data).split('').map(function (c) {
return c.charCodeAt(0);
});

var values = {};
let i = 0;
while (i < bytes.length) {
var channelId = (bytes[i] << 8) | bytes[i + 1];
var value = (bytes[i + 2] << 8) | bytes[i + 3];
i += 4;
switch (channelId) {
case 0x01C3:
values.pyranometer= value;
break;
default:
break;
}
}
var integrationName = 'MQTT Integration';
var deviceName = 'Pyranometer';
var result = {
deviceName: deviceName,
attributes: {
integrationName: metadata['integrationName'],
pyranometer: values.pyranometer,
},
};

/** Helper functions **/
function decodeToString(payload) {
return String.fromCharCode.apply(String, payload);
}

return result;
````

:::tip 📝 NOTE:
In the above code, the word `pyranometer` marked is the device ID, which is the device name. This parameter must match the device name added in section [Configure the Gateway.](#configure-gateway) In this example, it is *"pyranometer"*.
:::

7. Navigate to the **Integration Center > Integrations** menu and click the **Add Integration** icon to add the MQTT integration.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f52SolarSolution_LNS_TB6.png"
  width="100%"
  caption="Add the MQTT Integration"
/>

8. Enter the name of the integration (for example, *MQTT Integration*) in the **Name** field and select **MQTT** in the Type drop-down menu. Click **Next** to continue.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f53SolarSolution_LNS_TB7.png"
  width="50%"
  caption="Basic Settings"
/>

9. In the **Uplink data converter** options, click **Select existing** to choose the previously created decoder (**Uplink Decoder**), then click **Next**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f54SolarSolution_LNS_TB8.png"
  width="50%"
  caption="Select the created decoder"
/>

10. In the **Downlink data converter** interface, no configuration is necessary. Simply click **Skip** to bypass this setup.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f55SolarSolution_LNS_TB9.png"
  width="50%"
  caption="WisGate OS Web Management Platform"
/>

11. Configure connection options. **Host** is the MQTT broker address used for messages. The Host of the external MQTT broker used in this example is `broker.hivemq.com`. You can choose to use other brokers with a different Host.


12. Enter the address `broker.hivemq.com` in the **Host** field, with the port number `1883`. Click the **Add topic filter** button to configure the subscription topic:

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f56SolarSolution_LNS_TB10.png"
  width="50%"
  caption="WisGate OS Web Management Platform"
/>

````
application/{{ application_name }}/device/{{ device_EUI }}/join
application/{{ application_name }}/device/{{ device_EUI }}/ rx
application/{{ application_name }}/device/{{ device_EUI }}/ tx
application/{{ application_name }}/device/{{ device_EUI }}/ack
application/{{ application_name }}/device/{{ device_EUI }}/status
````

- **application_name**: the aapplication ID created in the gateway.
- **device_EUI**: the device EUI of the end device.

Modify the parameter values corresponding to the topics based on the actual application created and the device used.

:::tip 📝 NOTE:
The values in the subscription topic must be all lowercase. For example, *application/1/device/0123456789abcdef/join*. 
:::

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f56-1SolarSolution_LNS_TB10-1.png"
  width="50%"
  caption="WisGate OS Web Management Platform"
/>

13.  After configuring the details, click on **Add** to save and complete the settings.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f56-2SolarSolution_LNS_TB10-2.png"
  width="100%"
  caption="WisGate OS Web Management Platform"
/>

##### Configure the Gateway

This section will use [RAK7268 V2 WisGate Edge Lite 2](https://store.rakwireless.com/products/rak7268-8-channel-indoor-lorawan-gateway?variant=42316475924678) as an example.

1. To access the gateway web management platform, refer to the [WisGateOS V2 User Manual](https://docs.rakwireless.com.cn/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/) for details.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f57SolarSolution_LNS_TB11.png"
  width="80%"
  caption="WisGate OS Web Management Platform"
/>

2. After successfully logging in, navigate to the **LoRa®** menu in the left navigation tree. Set the **Work mode** of the gateway to **Built-in network server**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f58SolarSolution_LNS_TB12.png"
  width="100%"
  caption="Set the Work mode of the gateway"
/>

3. Once done with the setting, click the **Applications** tab, then the **Add application** button. You can also click **add one now** text link to add a new application.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f59SolarSolution_LNS_TB13.png"
  width="100%"
  caption="Applications Tab"
/>

4. Configure the following information: **Application name**, **Application Description**, and **Application Type**.

- **Unified Application key**: Choose this option if all devices will use the same application key. Once selected, a field for the application key appears, where you can manually type in an application key or click the **Autogenerate** button to generate one.


<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f60SolarSolution_LNS_TB14.png"
  width="60%"
  caption="Unified Application Key"
/>

- After enabling the Auto Add Device option, configure the **Application EUI option**. The value needs to be consistent with the node value. Once you have verified the application EUI and key, the device will be added automatically to the application.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f61SolarSolution_LNS_TB15.png"
  width="60%"
  caption="Auto Add Device"
/>

:::tip 📝 NOTE:
You can obtain the values by either querying the end device or generating it automatically and modifying the corresponding value of the device synchronously.  
:::

- **Separate Application keys**: Each device has its own application key. Add the key when registering the device.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f62SolarSolution_LNS_TB16.png"
  width="60%"
  caption="Add Application Key"
/>

5. Once you've completed the configuration, click on **Save Application** to add the new application.

6. In the application list, locate the newly created application and navigate to the **End devices** tab. If you've enabled the **Auto Add Device** function, the device will be automatically registered upon the addition request.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f63SolarSolution_LNS_TB17.png"
  width="100%"
  caption="End Devices Tab"
/>

7. Click the **Add end device** button. In the **End device information** interface, fill in the following information:

- **Activation Mode:** Select the activation mode of the device: OTAA or ABP. 
  - Choosing ABP mode creates two additional fields: **Application Session Key** and **Network Session Key**. 
  In this example, you’re using OTAA activation mode.
- **End device (group) name**: Enter the name of the end device or the group it belongs to.
- **End device description (optional)**: Optionally provide a description for the end device.
- **Class:** Select **Class A** for the device's operating mode.
- **Frame Counter Width:** Maintain the default value.
- **LoRaWAN MAC Version:** The protocol version (V1.0.3) of the node.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f64SolarSolution_LNS_TB18.png"
  width="60%"
  caption="Add new end devices"
/>

8. After completing, click **Add end devices** to proceed to the next step.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f64-1SolarSolution_LNS_TB18-1.png"
  width="70%"
  caption="Add the device to the device list"
/>

9. In the **Adding end devices** interface, enter the device EUI in the **End Device EUI (main)** field and select the **Add to End Devices list** button. Then click **Add end devices** to complete adding the end device.

:::tip 📝 NOTE:
- The device EUI configured here must match the end device. You can either obtain it by querying the end device or entering one (1) EUI and synchronously updating the corresponding value of the end device.
- If the EUI is correct, the device will be displayed in the **End devices list**.
- If the EUI is incorrect, the device will be displayed in the **End devices with an error**.
:::

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f65SolarSolution_LNS_TB19.png"
  width="70%"
  caption="Complete the end device addition"
/>

10. Click the Add button to confirm adding the device.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f66SolarSolution_LNS_TB20.png"
  width="50%"
  caption="Confirm to add the end device"
/>

11. When finished, you will enter the **End devices interface**, where you can see the created end device.

##### Connect Sensor Hub to Built-In Network Server

For specific configuration on how to connect SensorHub to the server, please refer to **SensorHub Network Configuration > LoRaWAN Application Scenario**. Once completed, the device will join the network. As shown in **Figure 69**, the end device SensorHub has successfully connected to the gateway's built-in server.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f67SolarSolution_LNS_TB21.png"
  width="80%"
  caption="End device  SensoHub has been connected"
/>

##### Configure MQTT Integration

1. Navigate to the **LoRa® > Configuration > Integration Interface Parameters** section.

2. Enable the **Enable Integration Interface** option and select **Generic MQTT** as the **Integration mode**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f68SolarSolution_LNS_TB22.png"
  width="50%"
  caption="Set up MQTT integration"
/>

3. In the **MQTT Broker Address** option, enter `broker.hivemq.com` then click **Save changes**.

4. After the device has joined and has been sending uplink data, check the uplink data in **ThingsBoard > Integrations > Your Integration > Events**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f69SolarSolution_LNS_TB23.png"
  width="100%"
  caption="View the gateway uplink data"
/>

##### Visualize Data Through ThingsBoard

1. After creating the data converter, integrating, and obtaining some data in the **Event** tab, check the automatically created devices based on the decoder in the **Entities > Devices > Groups** tab.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f70SolarSolution_LNS_TB24.png"
  width="100%"
  caption="Check the device"
/>

2. Click the group named **All** in the **Device groups** menu to automatically create a decoder device.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f71SolarSolution_LNS_TB25.png"
  width="100%"
  caption="Automatically created decoder device"
/>

3. Click the device, and navigate to the **Attributes** tab, and check on the node data.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f72SolarSolution_LNS_TB26.png"
  width="100%"
  caption="Node data"
/>

4. To visualize the data, simply select the values you wish to display, then click the **Show on widget** button.

5. On the next page, choose the desired widget for your data from the **Current bundle** drop-down menu. In this example, select **Outdoor Environment**, and then select the appropriate visualization chart for the *Pyranometer* by clicking the slide icon.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f74SolarSolution_LNS_TB28.png"
  width="100%"
  caption="Select Widget"
/>

6. After selecting the widget, click **Add to dashboard**.

By default, the profile does not have a dashboard, so you need to select **Create new dashboard** and enter a name for the dashboard in the **New dashboard title** field, for example, *Sensor Hub*.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f75SolarSolution_LNS_TB29.png"
  width="100%"
  caption="Add data to Dashboard"
/>

7. After setting the name of the dashboard, click the **Add** button to add more widgets. Alternatively, check the **Open dashboard** option to automatically open the created dashboard after adding the widget.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f76SolarSolution_LNS_TB30.png"
  width="50%"
  caption="Enter the dashboard name"
/>

:::tip 📝 NOTE:
If the **Open** dashboard option is not selected, users can still easily view the added widgets via **Dashboard groups > All > [Group Name]**.
:::

8. Click the Edit mode icon <img src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/icon1.png" alt="Edit" style="width: 10%; vertical-align: middle;"> to set the appropriate name and unit for the Pyranometer. 

9. Click the Edit widget icon <img src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/icon2.png" alt="Edit" style="width: 4%; vertical-align: middle;"> and complete the following setup steps:

- Select the Pyranometer unit in the **Value** drop-down menu; in this example, it's W/m².
- Click the **Apply** button to apply the settings.
- Click the exit icon <img src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/icon3.png" alt="Edit" style="width: 3%; vertical-align: middle;"> , and then click the save icon <img src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/icon4.png" alt="Edit" style="width: 7%; vertical-align: middle;"> to save the settings.

:::tip 📝 NOTE:
The ThingsBoard visualization dashboard editor allows you to adjust the size and shape of widgets by dragging the edges of the widgets in the Edit mode.
:::

If the above settings are correct, the final visualization widget on the Dashboard should resemble **Figure 78**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f77SolarSolution_LNS_TB31.png"
  width="100%"
  caption="Dashboard created"
/>

### NB-IoT/LTE CAT-M1 Application

#### Connect Sensor Hub to MQTT Server

In the **Network Server and Visualization Configuration** section, the server in the example has been set as a public MQTT broker: `broker.hivemq.com`. Refer to the corresponding section for details. Users can also choose other brokers or servers, such as AWS IoT Core (optional), according to actual usage scenarios.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f79NB-IoTLTE-CAT-M1-Application-Scenari.png"
  width="100%"
  caption="NB-IoT/LTE CAT-M1 application scenario"
/>

#### Visualize Data Through Datacake

In this example, we will utilize Datacake as the visualization platform. Datacake is a versatile IoT platform designed to visualize data from nodes in a user-friendly manner. 

To get started, create an account on the [official website](https://datacake.co/) and log in.

##### Add Sensor Hub to Datacake

1. After logging in to your account, navigate to the **Devices** tab and click **+ Add Device** to proceed with adding the Sensor Hub end device.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f80SolarSolution_NBI1.png"
  width="100%"
  caption="Devices Page"
/>

2. Select the **API** option and click **Next** to proceed.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f82SolarSolution_NBI3.png"
  width="50%"
  caption="Select API"
/>

3. As the device is new and there's no ready-made template, choose **New Product** from the **Datacake Product** options. Enter the device name in the **Product Name** field, then click **Next** to proceed.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f83SolarSolution_NBI4.png"
  width="50%"
  caption="Select New Product"
/>

4. The **SERIAL NUMBER** field can be left blank. Datacake will randomly generate a serial number for the device, then click **Next**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f84SolarSolution_NBI5.png"
  width="50%"
  caption="Add Devices"
/>

5. Select the preferred subscription plan, then click **Add 1 device**. For this example, choose **Free**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f85SolarSolution_NBI6.png"
  width="50%"
  caption="Select a subscription plan"
/>

6. The registered device can now be viewed on the **Devices** tab.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f86SolarSolution_NBI7.png"
  width="100%"
  caption="Registered device"
/>

##### MQTT Configuration

1. Click the name of the device you just created in the list to enter the interface, then select the **Configuration** tab.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f88SolarSolution_NBI9.png"
  width="100%"
  caption="Configuration tab"
/>

2. Scroll down to the **API Configuration** option and copy the **Serial number**. Save it locally for later use.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f89SolarSolution_NBI10.png"
  width="100%"
  caption="Copy the serial number"
/>

3. Continue scrolling down to the **MQTT Configuration** option and configure the external MQTT Broker.
4. Click **+Add new MQTT server** and configure the relevant parameters. 

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f90SolarSolution_NBI11.png"
  width="100%"
  caption="Configure the external MQTT Broker"
/>

5. Fill in the relevant information based on the actual server used, then click **Test Connection** to verify whether Datacake can successfully connect to the **MQTT Broker**. The information shown in **Figure 89** is just an example.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f91SolarSolution_NBI12.png"
  width="50%"
  caption="Configure the relevant parameters"
/>

:::tip 📝 NOTE:
If SSL/TLS encryption and authentication are set for more secure communication, ensure to configure them accordingly in this section. However, for this example, you can skip this option.
:::

 6. If the connection is successful, you will see the message **Connection successful**. Click **Add MQTT Server** to complete the addition of the MQTT server.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f92SolarSolution_NBI13.png"
  width="100%"
  caption="Connection established successfully"
/>

7. After successfully adding the MQTT server, click on **+Add Uplink Decoder** to add a decoder.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f93SolarSolution_NBI14.png"
  width="100%"
  caption="Add MQTT Server"
/>

8. A new window will appear, and fill in the fields according to your project.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f94SolarSolution_NBI15.png"
  width="50%"
  caption="Add Uplink Decoder"
/>

- **Subscribe to topics**: Configure the subscription topics, that is, the value of the **Publish Topic** configured in the **Network Server and Visualization Configuration** section.
- **Decoder function**: Copy the following decoding code and paste it into the **Decoder function** space.

````js
function Decoder(topic, payload) {
var decoded = [];
var data = JSON.parse(payload.replace(/\s*/g,""));
for (var key in data) {
decoded.push(
{
device: "37787701-9c0d-44f2-9e6e-11e651236f09" ,
field: key,
value: data[key]
}
)
}
return decoded;
}
````
:::tip 📝 NOTE:
In the above code, make sure that the parameter **serial_number** (device: `37787701-9c0d-44f2-9e6e-11e651236f09`) matches the serial number saved locally earlier.
:::

9. Once completed, click **Add uplink decoder**.
10. In the **Fields** option, click **+Add Field** to show the monitoring values of the devices. Each device can create a certain number of fields, also known as a **_data points_**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f95SolarSolution_NBI16.png"
  width="100%"
  caption="Set the related parameters of the field"
/>

11. Set the necessary parameters of the Fields. For **Fields** with multiple data points, add them one by one. Once done, click **Add Field**.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f95SolarSolution_NBI17.png"
  width="50%"
  caption="Set the related parameters of the field"
/>

:::tip 📝 NOTE:
The **Identifier** field will be automatically filled based on the name.
:::

12. Once the uplink data is received, the **Current value** column in the **Fields** list will display the current monitoring value from the sensor.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f96SolarSolution_NBI18.png"
  width="100%"
  caption="Added sensor monitoring values"
/>

##### **Create a Dashboard to Visualize Data**

**Dashboards** can be customized depending on the specific needs and preferences of a project. Follow the steps below to add widgets and visualize the data.

1. On the device details page, navigate to the **Dashboard** tab, then toggle on the edit mode switch.
2. Click on the **+ Add Widget** button to add a widget for visualizing data.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f97SolarSolution_NBI19.png"
  width="100%"
  caption="Open the edit mode"
/>

3. Choose what type of widgets you want to display. For this example, select **Value** to visualize the Solar Radiation values. 

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f98SolarSolution_NBI20.png"
  width="50%"
  caption="Select and add widgets for visualizing data"
/>

4. Click on the **Data** tab. Choose the field for visualization from the **Field** options and set the unit of the field, which is **W/m2** in this example.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f99SolarSolution_NBI21.png"
  width="50%"
  caption="Select the visualization data field"
/>

5. After configuring the widget, click **Save**. Once done with the dashboard configuration, turn off the **edit mode** switch to save the settings.

<rk-img
  src="/assets/images/wisnode/solar-radiation-monitoring/supported-lora-network-servers/f100SolarSolution_NBI22.png"
  width="100%"
  caption="Solar Radiation data visualization"
/>