---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/rak-datacake.jpg
rak_desc: A step-by-step guide on how to visualize sensor data on Datacake using Chirpstack.
tags:
  - Chirpstack
  - Datacake
  - RAK4631
  - RAK1906
  - WisBlock
  - Tutorial
header:
  title: How to Visualize Sensor Data on Datacake Using Chirpstack
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/high-power-wifi-module-and-power-line-communications.jpg
posted: 15/07/2021 09:00 PM
---

# How to Visualize Sensor Data on Datacake Using Chirpstack

## Datacake Overview

Datacake is a multi-purpose, low-code IoT platform that makes it quite easy to create a custom IoT application. This article will show how simple it is to forward your sensor data from a WisBlock environment sensor node to Datacake and create the visualization.

_**Helpful Articles Not Covered Here:**_

*   How to setup the [WisBlock Environment sensor](https://store.rakwireless.com/products/rak1906-bme680-environment-sensor?utm_source=RAK1906&utm_medium=Document&utm_campaign=BuyFromStore) node. You can use the [WisBlock Environment Monitoring](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/Environment_Monitoring) example. The same payload structure was exactly used as in that example.
*   How to connect the WisBlock node to a Gateway. Checkout [RAK4631 Quick Start](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631/Quickstart).
*   How to setup the Chirpstack server and connect the Gateway to it. You can find a guide in the [Chirpstack Quick Start](https://www.chirpstack.io/project/guides/debian-ubuntu/).
*   How to setup an application in Chirpstack and add your device to the application. This is shown in [Chirpstack - Connecting a device](https://www.chirpstack.io/project/guides/connect-device/).
*   How to get a Datacake account ([Datacake](https://datacake.co/)).
*   How to run a Datacake application ([Datacake Docs](https://docs.datacake.de/lorawan/get-started)).

_**Topics Covered in This Article:**_

*   [How to set up the HTTP integration in the Chirpstack Server](https://docs.rakwireless.com/Knowledge-Hub/Learn/How-to-Visualize-Sensor-Data-on-Datacake-Using-Chirpstack/#setup-the-http-integration-in-the-chirpstack-server)
*   [How to set up a device in your Datacake application](https://docs.rakwireless.com/Knowledge-Hub/Learn/How-to-Visualize-Sensor-Data-on-Datacake-Using-Chirpstack/#setup-a-device-in-your-datacake-application)
*   [How to create the data parser and data fields for your sensor node in Datacake](https://docs.rakwireless.com/Knowledge-Hub/Learn/How-to-Visualize-Sensor-Data-on-Datacake-Using-Chirpstack/#create-the-data-parser-and-data-fields-for-your-sensor-node-in-datacake)
*   [How to set up your dashboard to visualize the incoming sensor data](https://docs.rakwireless.com/Knowledge-Hub/Learn/How-to-Visualize-Sensor-Data-on-Datacake-Using-Chirpstack/#setup-your-dashboard-to-visualize-the-incoming-sensor-data)

## Setup the HTTP Integration in the Chirpstack Server

:::tip 📝 NOTE:
Make sure that you have already set up your Chirpstack server and created an application.
:::

1. Open your Chirpstack web interface and go to your application.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/2.chirpstack-app-overview.png" width="100%">
</p>

2. Open your application to view all the connected devices. *At this point, you should write down the Device EUI of the node you want to connect to Datacake.* You will need it later in Datacake.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/3.chirpstack-app-dev.png" width="100%">
</p>

3. Click the **Integrations** tab to see the integrations Chirpstack has already implemented.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/4.chirpstack-app-int.png" width="100%">
</p>

4. For Datacake, we will use HTTP integration. Just click on the **`ADD`** button.
5. In the window that opens, we will do three things:
      - Select `JSON` as **Payload marshaler**.
      - Add the Datacake API URL `https://api.datacake.co/integrations/lorawan/chirpstack/`. The URLs for other LPWAN servers can be found on [Datacake LPWAN Get Started](https://docs.datacake.de/lorawan/get-started).
      - Push the **UPDATE INTEGRATION** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/5.chirpstack-app-http.png" width="100%">
</p>

Moving forward, Chirpstack will forward the data coming from your sensor node to Datacake.

Now, it's time to setup your visualization.

## Setup a Device in Your Datacake Application

:::tip 📝 NOTE:
Make sure that you have already setup your Datacake account, created your application, and are ready to add a device. If not, go to the [Datacake Documentation](https://docs.datacake.de/). They have tutorials on how to get everything up and running.
:::

1. In the Datacake application, click **Devices** to see the overview of your devices. Then click the **Add Device** button to start.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/6.dc-add-dev1.png" width="100%">
</p>

2. In the next screen, select **LoRaWAN** and **New Product**. **RAKwireless** WisBlock devices are not yet available as templates.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/7.dc-add-dev2.png" width="80%">
</p>

3. Add your **Product Name** and click the **Next** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/8.dc-add-dev3.png" width="80%">
</p>

4. Then, scroll down the window until you see the **Network Server** section. Search and select _Chirpstack_, and click the **`Next`** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/9.dc-add-dev4.png" width="80%">
</p>

5. In the next step, you have to enter the **DEVEUI** of your node and a name. The DEVEUI must match the node that you chose earlier in the Chirpstack Application. Once you have entered the information, hit the **Next** button again.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/10.dc-add-dev5.png" width="80%">
</p>

6. Depending on your Datacake account and how many devices you have already registered, select between the different payment options. Luckily, a coupon allowed me to use **Extended Free** for this new device. Once done here, push the **Add 1 device** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/11.dc-add-dev6.png" width="80%">
</p>

7. You can now see the new device in the **Devices** overview screen of Datacake. It is not yet shown as connected because no valid data was received yet.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/12.dc-add-dev7.png" width="30%">
</p>

## Create the Data Parser and Data Fields for Your Sensor Node in Datacake

1. To finish the configuration of the device, click it in the overview.
2. In the next window, select **Configuration**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/13.dc-set-dev1.png" width="100%">
</p>

3. In the Configuration tab, scroll down until you see the **LoRaWAN** section. Verify here that the **DevEUI** is correct and that the **Network Server** is indeed **Chirpstack**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/14.dc-set-dev2.png" width="100%">
</p>

4. Continue to scroll down until you see the **Payload Decoder** section. Here, you'll have to enter our custom payload decoder for the arriving data. As you can see in the image, the decoder is returning a nested JSON array where each JSON entry has two fields: **field** and **value**. **field** will later be needed for the visualization and **value** is the sensor data.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/15.dc-set-dev3.png" width="100%">
</p>

5. To make things easier, a payload decoder that you may copy and paste was prepared below. It will work with this example and can be easily extended to use with our other [WisBlock Solutions](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions).

Overwrite the example payload decoder with the following:

```js
function Decoder(payload, port) {
    if(payload[0] === 0x01) {
        return [
            {
                field: "TEMPERATURE",
                value: (payload[1] << 8 | payload[2]) / 100
            },
            {
                field: "HUMIDITY",
                value: (payload[3] << 8 | + payload[4]) / 100
            },
            {
                field: "PRESSURE",
                value: (payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)) / 100
            },
            {
                field: "GAS",
                value: payload[12] | (payload[11] << 8) | (payload[10] << 16) | (payload[9] << 24)
            },
            {
                field: "COUNTER",
                value: payload[16] | (payload[15] << 8) | (payload[14] << 16) | (payload[13] << 24)
            }
        ];
    }
    if(payload[0] === 0x02) {
        return [
            {
                field: "TEMPERATURE",
                value: (payload[1] << 8 | payload[2]) / 100
            },
            {
                field: "HUMIDITY",
                value: (payload[3] << 8 | + payload[4]) / 100
            },
            {
                field: "COUNTER",
                value: payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)
            }
        ];
    }
    if(payload[0] === 0x03) {
        return [
            {
                field: "LIGHT",
                value: (payload[4] | (payload[3] << 8) | (payload[2] << 16) | (payload[1] << 24)) / 100
            },
            {
                field: "COUNTER",
                value: payload[8] | (payload[7] << 8) | (payload[6] << 16) | (payload[5] << 24)
            }
        ];
    }
    if(payload[0] === 0x04) {
        return [
            {
                field: "COUNTER",
                value: payload[4] | (payload[3] << 8) | (payload[2] << 16) | (payload[1] << 24)
            }
        ];
    }
}

```

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/16.dc-set-dev4.png" width="100%">
</p>

6. Check if the decoder works. Scroll further down and hit the **Save** button to update the decoder.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/17.dc-set-dev5.png" width="100%">
</p>

7. Scroll all the way up and select the **Debug** tab. If your device is online and already sending data, you can see the results of the decoder in the **Debug Log**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/18.dc-set-dev6.png" width="70%">
</p>

8. If that works, you'll next have to do some more entry work. Datacake uses fields to find the correct data for the visualization, but you must first define all of the fields.

9. Go back to the configuration tab and scroll down until you see the **Fields** section. Once you're there, click the **Add Field** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/19.dc-set-dev7.png" width="100%">
</p>

10. In the `Add Field` window, select the data type, name for the field, and unit.

:::tip 📝 NOTE
The `Identifier`  must match the field name that is assigned in the payload decoder. So, for _Temperature,_ the correct field name is _TEMPERATURE._
:::

11. After entering all the information, hit the **Add Field** button.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/20.dc-set-dev8.png" width="60%">
</p>

You have to repeat this step until you've defined all four fields that will contain the sensor data. In the end, your **Fields** section should look like this:

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/21.dc-set-dev9.png" width="100%">
</p>

At this point, we're done with the preparations. Now, let's go and show the data with some nice charts.

## Setup Your Dashboard to Visualize the Incoming Sensor Data

1. Return to your device overview and open the **Dashboard** tab. For now, it's empty. To add a new widget, click the small **`edit`** icon on the right side.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/22.dc-set-wid1.png" width="100%">
</p>

2. Now, you will see an **Add Widget** button. Click it to start.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/23.dc-set-wid2.png" width="100%">
</p>

3. In the next screen, you'll see a selection of different visualization options. I chose **Chart** here.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/24.dc-set-wid3.png" width="100%">
</p>

4. The next window has four tabs. Start with the **Basic** tab and enter the chart title.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/25.dc-set-wid4.png" width="100%">
</p>

5. On the **Devices** tab, click **Add Device**.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/26.dc-set-wid5.png" width="70%">
</p>

6. The window will extend, and you can select the **Field**, which represents the data you want to visualize.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/27.dc-set-wid6.png" width="70%">
</p>

7. After selecting **Temperature**, you can choose a color for this data and change the display name (optional).

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/28.dc-set-wid7.png" width="100%">
</p>

8. On the **Axis** tab, you can define the `Unit` of the data and set the `MIN` and `MAX` values to be displayed (optional). I left it here at 0 for the min value and auto for the max value.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/29.dc-set-wid8.png" width="100%">
</p>

9. In the last tab, the **Timeframe** tab, you can set how much data should be displayed. Since we just started receiving data here, I chose `This hour`. You can change this later, once more data is available.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/30.dc-set-wid9.png" width="70%">
</p>

10. The preview will already show some data. Click **Save** to go back to the dashboard edit window.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/31.dc-set-wid10.png" width="100%">
</p>

It will now show your first widget with the temperature data. You can resize it with the small arrow in the lower right corner of the widget.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/32.dc-set-wid11.png" width="100%">
</p>

11. After repeating these steps for other fields, **Humidity**, **Pressure**, and **Air Quality**, you can see the charts with the received data.

12. Click the yellow icon next to 'Unsaved changes' to save your work and return to the main dashboard view.

<p align="center">
<img src="/assets/images/knowledge-hub/learn/visualize-sensor-data-on-datacake/33.dc-set-wid12.png" width="100%">
</p>

Now, you have the data from your environment sensor in a nice visualization that you can access and see from anywhere.
