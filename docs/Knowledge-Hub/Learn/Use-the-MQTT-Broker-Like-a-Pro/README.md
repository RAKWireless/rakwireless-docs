---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/mqtt-flow.png
rak_desc: This tutorial is for people who have purchased a RAK WisGate Edge gateway and want to use the Built-in Network Server functionality to its fullest. Learn how to subscribe to a topic to obtain data from your end-devices through MQTT.
tags:
  - Tutorial
  - WisGate
  - MQTT
  - LoRaWAN
  - RAK7204
header:
  title: Use the MQTT Broker Like a Pro + Examples
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/applications-of-lorawan-more-than-just-tech.jpg
posted: 26/02/2024 09:00 PM
---

# Use the MQTT Broker Like a Pro + Examples

## Description

This tutorial is for people who have purchased a RAK WisGate Edge gateway and want to use the Built-in Network Server functionality to its fullest.

Here the user will learn how to subscribe to a topic to obtain data from your end-devices through MQTT. For convenience, the Built-in Network Server will be used in the examples.

This article is suitable for all RAK [WisGate Edge series gateways](https://store.rakwireless.com/collections/wisgate-edge). It discusses how to use the built-in MQTT as well as an external one.

## A Brief Introduction to LoRaWAN and MQTT

If you are familiar with the two, you can skip this part.

### LoRaWAN

As shown in **Figure 1**, LoRaWAN network roles are divided into:

- **End nodes** - The end-devices responsible for data collection. the data is then encrypted and transmitted to de gateway in the form of a wireless signal.
- **Concentrator/Gateway** - They collect the data from multiple nodes and send it to the Network server (NS).
- **Network Server** - The NS decrypts and processes the data forwarded by the gateway according to the data identification information and key.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/1.jpg"
  width="100%"
  caption="LoRaWAN network architecture"
/>

RAK simplifies the actual deployment of a LoRaWAN network by integrating an NS in all our commercial gateways.

### MQTT

MQTT stands for **Message Queuing Telemetry Transport,** which is a publish/subscribe, extremely simple and lightweight, messaging protocol, intended for use on constrained devices and low-bandwidth, high-latency, or unreliable networks.

For more information, check out our [article about MQTT](https://news.rakwireless.com/the-mighty-mqtt-what-you-should-know-about-it/).

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/2.png"
  width="50%"
  caption="MQTT architecture"
/>

#### The Role of MQTT in the LoRaWAN Networks

- **Practical application 1: Use the built-in MQTT Broker of RAK commercial gateway**

The WisGate Edge gateway obtains data from the nodes and sends it to the built-in NS. It will then publish the data to the built-in MQTT Broker. 

In this case, the gateway is both the publisher and the broker at the same time. The user then subscribes to the topic through third-party programs, like MQTT.fx, to be able to manage that data.

- **Practical application 2: Use the built-in NS to publish data to an external MQTT Broker**

The RAK commercial gateway obtains the data and sends it to the built-in NS, and it then publishes the data to a third-party MQTT Broker. Users subscribe through third-party programs. In this case, the gateway is only a publisher.

## Configuring the Built-in Network Server

This tutorial is for the WisGate Edge series of devices, all of which come pre-configured in Network Server operation mode, so there is no need to adjust this setting unless you have changed it.

For details on configuring the settings mentioned above visit the [WisGate Edge Documentation](https://docs.rakwireless.com/Product-Categories/WisGate/#wisgate-edge).

However, there might be some adjustments needed for a particular setup like this one. Depending on your location, you have to make sure you have set the channel plan to one corresponding to your regional frequency band. Depending on the gateway variant, the default channel plan might not be the one you need.

For guidance on implementing changes, you can read this [guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/Build-in-LoRa-Server/), or refer to the instructional [video.](https://www.youtube.com/watch?v=6YES3DD-N60&t=205s&ab_channel=RAKwireless)

### Use the Built-in MQTT Broker
 
This chapter will show you how to subscribe to topics, receive and send data reported by nodes through MQTT.fx, using the build-in MQTT Broker. You will need the MQTT.fx tool (MQTT clients) that can be downloaded [here](https://mqttfx.jensd.de/index.php/download).

#### Create an Uplink Topic

1. The data is transmitted using an **Uplink Topic**. To see the MQTT topic templates for your gateway, you can navigate through the Web UI and click **LoRa®** <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/2-1.png" style="zoom:40%;"/> > **Configuration** > **Integration Interface Parameters**.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/3.png"
  width="100%"
  caption="Global Integration topic templates"
/>

:::tip 📝 NOTE
Do not change the topics in your gateway. They are just templates of what your topic should look like and what the built-in MQTT Broker uses.
:::


2. To generate a correct Uplink Topic you will need the template and the following information:

   - **application_ID** – This is the ID of your application. To see it, navigate to **LoRa®** <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/2-1.png" style="zoom:40%;"/> > **Application**.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/4.png"
     width="100%"
     caption="Applications list"
   />

   - **device_EUI** – This is the EUI of your device. To see it, navigate to **LoRa Network** > **Your Application** (mqtt) > **Your End Device** (mqtt_test).

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/5.png"
     width="100%"
     caption="Devices list"
   />

3. With this information, the topic template `application/{{application_name}}/device/{{device_EUI}}/rx` will change to something like:

   ```
   application/mqtt/device/ae10fccc25ae10fc/rx
   ```

   :::tip 📝 NOTE

   Device EUI default lowercase.

   :::

4. If you want to subscribe to all nodes in an application, use the following topic (replace **application_name** with the name of your application):

   ```
   application/{{application_name}}/device/+/rx
   ```

5. If you want to subscribe to data from all applications, use the topic:

   ```
   application/+/device/+/rx
   ```


### Subscribe to the Topic via MQTT.fx

1. Open the MQTT.fx tool and click on the **New** button <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/6.png" style="zoom:60%;" />.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/7.png"
  width="100%"
  caption=" MQTT.fx startup window"
/>

2. Type the IP address of the gateway and click **Connect**. The black indicator on the far right should turn green, indicating that the connection is successful.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/8.png"
  width="100%"
  caption="Connecting MQTT.fx"
/>

:::tip 📝 NOTE

For this tutorial, the gateway is connected to the local network, so the IP is `192.168.230.1`. Yours will be different.

:::

3. To connect to the topic, navigate to the **Subscribe** tab, type in the Uplink Topic you created, and click the **Subscribe** button.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/9.png"
  width="100%"
  caption="Subscribing to the topic"
/>

4. You can send a message from the node to test the connection. Via Download the **WisToolBox** APP, navigate to **Dashboard** > **ADVANCE** > **OPEN CONSOLE**, you can send a “Hello RAKwireless” message. The data must be in **HEX**, so if you want to send the message, use the following command:

```
AT+SEND=1:48656c6c6f2052414b576972656c657373
```

:::tip 📝 NOTE
To convert any message in HEX, use a converter like [this](https://www.rapidtables.com/convert/number/ascii-to-hex.html).
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/10.png"
  width="100%"
  caption="RAK Serial Port Tool"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/11.png"
  width="100%"
  caption="RAK Serial Port Tool"
/>

:::tip 📝 NOTE
In this example, **RAK4630 WisDuo LPWAN+BLE Module** is used. However, the tutorial will work with any LoRaWAN device.
:::

5. In the MQTT.fx interface, you can see the message you just sent. The message is encoded in **base64** format.

<rk-img
  src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/12.png"
  width="100%"
  caption="Uplink data"
/>

### Send Data to the Node via MQTT.fx

1. To send data to the nodes (downlink) requires publishing the data to the **Downlink Topic**. To see the topics templates, go to the [**Create an Uplink Topic**](#create-an-uplink-topic) part for reference. Find the Downlink Topic template and replace the **application_ID** with the ID of your application and **device_EUI** with the EUI of your device.

   An example of a Downlink Topic is similar to what is shown below：

   ```
   application/mqtt/device/ae10fccc25ae10fc/tx
   ```

   :::tip 📝 NOTE
   The Downlink Topic ends with **tx**.
   :::

2. In the MQTT.fx, navigate to **Publish** tab and type the name of your topic.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/13.png"
     width="100%"
     caption="Entering Downlink Topic"
   />

3. To send a message to the node, in the field under the topic’s name type the command for it and click the **Publish** button. To send a "Hello" message, use the command:

   ```
   {"confirmed":true,"data":"SGVsbG8=","fPort":10}
   ```

   Where:

   - **Confirmed** can be true or false.
   - The content of the **data** is the information you want to send. The information must be base64 encoded. This can be done with a [converter](https://www.base64decode.org/).
   - **fPort** is the port number where you send the data. The number can be 1-255.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/14.png"
     width="100%"
     caption="Publish a message"
   />

4. The message you just sent can be seen in the RAK Serial Port tool and it is encoded in HEX format.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/15.png"
     width="100%"
     caption="Received message"
   />

:::tip 📝 NOTE
If the device is configured to work in Class C, it will receive the message immediately after sending. If the node is working in Class A, it will receive the message on the next Uplink.
:::

## Use an External MQTT Broker

This section will explain how to configure the gateway to use an external MQTT Broker and how to connect MQTT.fx to it.


   :::tip 📝 NOTE
   This section describes how to access the external MQTT by username/password.
   :::


### Configuring the Gateway and MQTT.fx
1. In the left navigation bar of the WisGateOS Web UI, select **LoRa®** <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/2-1.png" style="zoom:40%;"/> > **Configuration** > **Integration Interface Parameters**.

2. On the **Integration Interface Parameters** page，set the relevant parameters for application server integration.

   If you want to use the external MQTT Broker, you need to configure the following parameters:

   - **MQTT Broker Address**：The IP address of the external MQTT Broker.
   - **MQTT Broker Port**：The port number of the MQTT server, the default port number is 1883.
   - **Enable User Authentication**(optional)：Switch the **Enable User Authentication**, fill in the **Username** and **Password** to access the MQTT server.
     - **Username**：The username to access the MQTT server.
     - **Password**：The password for accessing the MQTT server.

   As shown in **Figure 15**, the external MQTT Broker is used here and the default configuration of **MQTT Topic** related parameters is maintained.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/16.png"
     width="100%"
     caption="Configuring the gateway"
   />

   :::tip 📝 NOTE
   Enable the User Authentication only if the MQTT Broker requires Username and Password for authentication.
   :::

3. Click **Save & Apply** to save the configuration.

4. Open the MQTT.fx and click on the **Setting** icon <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/17-1.png" style="zoom:60%;"/>.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/17.png"
     width="100%"
     caption="MQTT.fx startup window"
   />

5. In the **Edit Connection Profiles** click on the plus icon <img src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/17-2.png" style="zoom:60%;"/> in the lower-left corner to create a new Profile. Type in **Profile name** of your choice and the IP of the **Broker Address**. Click on **User Credentials** to enter the **User Name** and **Password** to access the MQTT server and then click **OK**.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/18.png"
     width="100%"
     caption="Edit Connection Profiles"
   />

6. From the drop-down menu (left of the **Connect** button) at the main window of the MQTT.fx choose the Profile you just created and click **Connect** to connect to the external MQTT server. The black dot on the far right should turn green, indicating that the connection is successful.

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/19.png"
     width="100%"
     caption="Connecting to the new profile"
   />

   <rk-img
     src="/assets/images/knowledge-hub/learn/use-the-mqtt-like-a-pro/20.png"
     width="100%"
     caption="Successful connection"
   />

7. To subscribe or publish data, refer to the corresponding sections from the previous use case:  [**Subscribe to the Topic via MQTT.fx**](#subscribe-to-the-topic-via-mqtt-fx) and [**Send Data to the Node via MQTT.fx**](#send-data-to-the-node-via-mqtt-fx).

## Format Definition of the Obtained Through MQTT Data

In the previous sections, you were shown how to subscribe to **Uplink** data and how to send a **Downlink** to the node. But there are three more types of data:

- **Join** – This is the information received when the node is connected to the network.
- **Ack** – This is the confirmation message that the node sends as a reply after receiving a Downlink.
- **Status** – This is information about the node’s battery level.

### Uplink

```
{
	"adr": true,							// Whether the node has adaptive data rate enabled
	"applicationID": "1",					// The ID of the application in which the node is registered
	"applicationName": "mqtt",				// The name of the application
    "data": "SGVsbG8gUkFLV2lyZWxlc3M=",		// The data sent by the node
    "data_encode": "base64",				// Decoding data type
    "devEUI": "ae10fccc25ae10fc",			// The EUI of your device
    "deviceName": "mqtt_test",				// The name of your device
    "fCnt": 1,								// The frame counter of the message
    "fPort": 1,								// The port to which the data is send
    "rxInfo": [								// Information about the gateway, that received the node data
    {
        "gatewayID": "ac1f09fffe0fd50c",	// Gateway’s EUI
        "loRaSNR": 9.2,						// Signal-to-noise ration of the message
        "location": {						// GPS information of the gateway
          "altitude": 0,
          "latitude": 0,
          "longitude": 0
       	},
        "rssi": -36							// Received Signal Strength Indicator of the message
    }
    ],
    "timestamp": 1708395729,				// Unix timestamp of received node data
    "txInfo": {
      "dr": 0,								// Node’s data rate
      "frequency": 868100000				// The frequency used by the node to send data
 	}
}
```

### Downlink

```
{
	"confirmed": true,						// Show is the message confirmed or not
	"data": "SGVsbG8=",						// The data sent to the node, encoded in base64 format
    "fPort": 10,							// The port used for the Downlink message
    "timestamp": 1708396901					// Unix timestamp of received node data
}
```

### Join

```
{
	"applicationID": "1",					// The ID of your application
	"applicationName": "mqtt",				// The name of your application
    "devAddr": "02976c6e",					// Short address assigned to your device after a successful join
    "devEUI": "ae10fccc25ae10fc",			// The EUI of your device
    "deviceName": "mqtt_test",				// The name of your device
    "timestamp": 1708337717					// Unix timestamp of received node data
}
```

### Ack

```
{
	"acknowledged": true,					// Acknowledgement confirmation
    "applicationID": "1",					// The ID of the application in which the node is registered
    "applicationName": "mqtt",				// The name of the application
    "devEUI": "ae10fccc25ae10fc",			// The EUI of your device
    "deviceName": "mqtt_test",				// The name of your device
    "fCnt": 4,								// The frame counter of the message
    "timestamp": 1708397210					// Unix timestamp of received node data
}
```

:::tip 📝 NOTE
The node will reply with Ack only after the server has sent the confirmed type of data to the node. The node may not reply to the Ack immediately. The Ack may be carried in the next uplink data sent by the node.
:::

### Status

```
{
	"applicationID": "1",
	"applicationName": "mqtt",
	"deviceName": "mqtt_test",
	"devEUI": "ae10fccc25ae10fc",
	"battery": 254,							// The classification of the remaining battery power. 254 means the power supply is fully charged, 1 means battery is about to run out
	"margin": 8,							// It is the demodulation signal-to-noise ratio of the last successful reception of the DevStatusReq command
	"external PowerSource": false,			// Whether additional power source is presented
	"batteryLevel": 100						//When "external PowerSource" is true, batteryLevel represents the percentage of battery
}
```

## Example Program

In this section, a python code will be shown, that calls the MQTT subscription node's uploaded data and prints the corresponding content. When receiving Uplink data, the program will send a “Hello RAKwireless” message to the node. Make sure you read the code comments carefully before coding.

:::tip 📝 NOTE
For this tutorial, the example program is running on a Raspberry Pi with installed Ubuntu and it is working for both practical applications.
The needed commands can be run on a terminal via SSH, or directly in the graphical environment of Ubuntu.
:::

1. For this tutorial, we will use an external MQTT Broker that is installed on a Raspberry Pi. If you want to build an MQTT server on a Raspberry Pi, run the following commands:

```
sudo apt install mosquitto mosquitto-clients
```

```
sudo systemctl enable mosquitto
```

2. You can check the status of the MQTT Broker by using the command:

```
sudo systemctl status mosquitto
```

3. Python dependencies need to be installed. This is done with the commands:

```
sudo apt install python-pip
```

```
pip install paho-mqtt
```

4. Create a new file where you will put the code, using the command:

```
sudo nano yourfile.py
```

:::tip 📝 NOTE
Make sure when creating the file, you save it as a python file with the correct extension (yourfile<b>.py</b>).
:::

5. The content of the file is this code (make sure you read the explanations and make the needed changes for your particular case):

```py
#!/usr/bin/env python

import json
import base64
import paho.mqtt.client as mqtt
from datetime import datetime

# Type the IP of your server
mqtt_ip = 'ip of your MQTT server'
mqtt_port = 1883
# Type your username and password. If the private MQTT server does not require username and password, commend the lines
mqtt_username = 'username'
mqtt_password = 'password'
# Replace the "id" with the id of your application and "eui" with your device eui
mqtt_rx_topic = 'application/id/device/eui/rx'

# Convert string to hexadecimal
def str_to_hex(s):
	return r"\x"+r'\x'.join([hex(ord(c)).replace('0x', '') for c in s])
# Once subscribed to the message, call back this method
def on_message(mqttc, obj, msg):
	on_print_rak_node_info(msg.payload)
# Print the subscribed node information
def on_print_node_rx_info(json_rx):
	try:
		devEUI = json_rx['devEUI']
		applicationID = json_rx['applicationID']
		applicationName = json_rx['applicationName']
		deviceName = json_rx['deviceName']
		timestamp = json_rx['timestamp']
		fCnt = json_rx['fCnt']
		fPort = json_rx['fPort']
		data = json_rx['data']
		data_hex = str_to_hex(base64.b64decode(data).decode("latin-1"))
		# Convert the timestamp to local time
		str_local_time = datetime.fromtimestamp(timestamp)
		print('---------------- devEUI:[%s] rxpk info -------------------' % devEUI)
		print('+\t applicationName:\t%s' % applicationName)
		print('+\t applicationID:\t\t%s' % applicationID)
		print('+\t deviceName:\t\t%s' % deviceName)
		print('+\t datetime:\t\t%s' % str_local_time)
		print('+\t fCnt:\t\t\t%d' % fCnt)
		print('+\t fPort:\t\t\t%d' % fPort)
		print('+\t data:\t\t\t%s' % data)
		print('+\t data_hex:\t\t%s' % data_hex)
		print('----------------------------------------------------------')

	except Exception as e:
		print(e)
	finally:
		pass
# After subscribing to the node's data, send the "Hello RAKwireless" string to the node
def on_print_rak_node_info(payload):
	json_str = payload.decode()
	try:
		json_rx = json.loads(json_str)
		on_print_node_rx_info(json_rx)
		dev_eui = json_rx['devEUI']
		app_id = json_rx['applicationID']
# Industrial gateway default tx topic
		tx_topic = 'application/%s/device/%s/tx' % (app_id, dev_eui)
		str_hello = "Hello RAKwireless"
		tx_msg = '{"confirmed":true,"fPort":10,"data":"%s" }' % str(base64.b64encode(str_hello.encode("utf-8")).encode("utf-8"))
		mqttc.publish(tx_topic, tx_msg, qos=0, retain=False)
		print('Send \'Hello RAKwireless\' to node %s' % dev_eui)

	except Exception as e:
		raise e
	finally:
		pass

mqttc = mqtt.Client()
mqttc.on_message = on_message
# If there is no username and password, please comment the following line:
mqttc.username_pw_set(mqtt_username, password=mqtt_password)
# Connect to mqtt broker, the heartbeat time is 60s
mqttc.connect(mqtt_ip, mqtt_port, 60)
mqttc.subscribe(mqtt_rx_topic, 0)
mqttc.loop_forever()
```

6. Run the code by typing in the SSH terminal:

```
python yourfile.py
```

