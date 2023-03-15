---
rak_desc: Contains a comprehensive guide in setting up both your RAK7248 and Amazon Web Services account and permissions.
rak_img: /assets/images/wisgate/rak7248/overview/RAK7248.png
tags:
  - AWS
  - wisgate
  - RAK7248
next: ../AWS-Greengrass/
prev: ../Quickstart/

---

# RAK7248 Supported LoRa Network Servers


## AWS IoT Core for LoRaWAN

Execute the following steps to set up your AWS account and permissions:
### Set Up Your AWS Account and Permissions

If you don't have an AWS account, refer to the instructions in the guide here. The relevant sections are **Sign up for an AWS account** and **Create a user and grant permissions**.

#### Overview

The high-level steps to get started with AWS IoT Core for LoRaWAN are as follows:

1. Set up Roles and Policies in IAM
2. Add a Gateway (see section [Add the Gateway to AWS IoT](#add-the-gateway-to-aws-iot))
3. Add Device(s) (see section [Add a LoRaWAN Device to AWS IoT](#add-a-lorawan-device-to-aws-iot))
    - Verify device and service profiles
    - Set up a Destination to which device traffic will be routed and processed by a rule.

These steps are discussed as you browse through this guide. For additional details, refer to the AWS LoRaWAN developer guide.

#### Add the Gateway to AWS IoT

##### Preparation

Refer to the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-onboard-gateways.html) for steps required prior to onboarding your gateway. For more details, check the software section of the [datasheet](/Product-Categories/WisGate/RAK7248/Datasheet/#software).

##### Frequency Band Selection and Role Setup

Refer to the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-rfregion-permissions.html) for information on selecting an appropriate frequency band.

::: tip 📝 NOTE

LoRa Frequency bands supported by RAK7248 are as follows:
- RU864
- IN865
- EU868
- US915
- AU915
- KR920
- AS923
- CN470

You can select an appropriate frequency band from the [RAK store](https://store.rakwireless.com/products/rak7248).

:::

##### Add the LoRaWAN Gateway

To register the gateway with AWS IoT Core for LoRaWAN, follow the steps in the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-onboard-gateway-add.html) under the **Add a gateway using the console** section.

#### Add a LoRaWAN Device to AWS IoT

##### Preparation

- Go to the datasheet to learn more about the [RAK4631 WisBlock LPWAN Module](/Product-Categories/WisBlock/RAK4631/Datasheet/#rak4631-wisblock-lpwan-module-datasheet).
- Follow the steps in the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-onboard-end-devices.html) under the **Before onboarding your wireless device** section, then proceed to the [**Add your wireless device to AWS IoT Core for LoRaWAN**](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-end-devices-add.html) section.



##### Verify Profiles

AWS IoT Core for LoRaWAN supports device profiles and service profiles.  Device profiles contain the communication and protocol parameter values the device needs to communicate with the network server. Service profiles describe the communication parameters the device needs to communicate with the application server.

Some pre-defined profiles are available for device and service profiles.  Before proceeding, verify that these profile settings match the devices you will be setting up to work with AWS IoT Core for LoRaWAN. For more details, refer to the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-define-profiles.html) under the **Add profiles to AWS IoT Core for LoRaWAN** section.

::: tip 📝 NOTE
Proceed only if you have a device and service profile that will work for you.
:::
##### Set Up a Destination for Device Traffic

Because most LoRaWAN devices don't send data to AWS IoT Core for LoRaWAN in a format that can be consumed by AWS services, traffic must first be sent to a Destination. A Destination represents the AWS IoT rule that processes a device's data for use by AWS services. This AWS IoT rule contains the SQL statement that selects the device's data and the topic rule actions that send the result of the SQL statement to the services that will use it.

For more information, refer to the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-create-destinations.html) under sections **Add a destination using the console** and **Create an IAM role for your destinations**. Also, refer to **Create rules to process LoRaWAN device messages** section in the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-create-destinations.html).

### Set Up the Gateway

- [**Set Up the Gateway Hardware**](/Product-Categories/WisGate/RAK7248/Quickstart/#power-on-the-gateway)
- [**Set Up the Gateway Software**](/Product-Categories/WisGate/RAK7248/Quickstart/#access-the-gateway)

For additional software references, check the following links:

- [**FAQ**](https://docs.rakwireless.com/Knowledge-Hub/FAQs/)
- [**Community Forum**](https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs)

#### Configure the Gateway Device

1. To connect to the AWS IoT Core for LoRaWAN, you need to download and compile **BasicsStation**.
Assuming that you have successfully accessed the gateway via SSH, it is a good policy to update/upgrade. Doing so, it will update all the packages:

```bash
sudo apt update
```

```bash
sudo apt upgrade
```

2. Now, register the gateway in AWS IoT Core for LoRaWAN. To register your gateway, you will need the device’s EUI. To find the gateway’s EUI, run the command below to open the Graphics User Interface (GUI). The EUI can be found on the top of the GUI:

```bash
sudo gateway-config
```

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/1.gateway-id.png"
  width="80%"
  caption="RAK7248 Configuration Options"
/>

You can also run the following command:

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/2.gateway-version.png"
  width="70%"
  caption="Gateway Version"
/>

```bash
pi@rak-gateway:~ $ sudo gateway-version
Raspberry Pi 4 Model B Rev 1.1, OS "10 (buster)", 5.4.79-v7l+.
RAKwireless gateway RAK7248 no LTE version 4.2.7R install from firmware
Gateway ID: DCA632FFFE366417
```

3. Only the configuration of the Basics station remains. Clone the Basics station repository and enter the downloaded folder:

```bash
git clone https://github.com/lorabasics/basicstation.git
cd basicstation
```

:::tip 📝 NOTE:
Run the following commands in the basicstation directory.
:::

4. Install all the dependencies by running the following command:

```bash
make platform=corecell variant=std
```

5. Replace the file `loragw_stts751.c` file using the following command:


```bash
sudo cp -f /opt/ttn-gateway/sx1302_hal/libloragw/src/loragw_stts751.c deps/lgw1302/platform-corecell/libloragw/src/loragw_stts751.c
```

6. Make a clean build in the basicstation directory, and then do a `make` to install all dependencies with the changes.

```bash
make clean
make platform=corecell variant=std
```

7. As the installation is complete, you need to configure the Basics Station protocol. Enter the folder with the given examples by Semtech and specifically corecell folder as the build is for SX1302.

```bash
cd examples/corecell
```

8. First, change the reset pin in the `reset_gw.sh` to 17 in order to successfully start the concentrator.

```sh
#!/bin/sh

# This script is intended to be used on SX1302 CoreCell platform, it performs the following actions:
#        - export/unexport GPI023 and GPI018 used to reset the SX1302 chip and to enable the LDOs
#
# Usage examples:
#       ./reset_lgw.sh stop
#       ./reset_lgw.sh start
#
# GPIO mapping has to be adopted with HW
#

SX1302_RESET_PIN=17
SX1302_POWER_EN_PIN=18

WAIT_GPIO() {
    sleep 0.1
}
```

9. Create a new folder to store all the configuration files for basics station to connect to AWS IoT Core for LoRaWAN.

```bash
mkdir lns-aws
```

10. Copy `station.conf` into this folder.

```bash
cp lns-ttn/station.conf lns-aws/
```

11. Add the certificates that you downloaded earlier to **lns-aws**. (Refer to [Add the LoRaWAN Gateway](#add-the-lorawan-gateway).)

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/3.gateway-certificate.png"
  width="80%"
  caption="Gateway Certificate"
/>

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/4.provisioning-credentials.png"
  width="80%"
  caption="Provisioning Credentials"
/>

12. All the configurations for basics stations are ready. You should now have the files as follows:

```bash
pi@rak-gateway:~/basicstation/examples/corecell/lns-aws $ ls -al
total 28
drwxr-xr-x 2 pi pi 4096 Oct 28 17:57 .
drwxr-xr-x 4 pi pi 4096 Oct 28 17:44 ..
-rw-r--r-- 1 pi pi 1225 Oct 28 17:57 cups.crt
-rw-r--r-- 1 pi pi 1680 Oct 28 17:57 cups.key
-rw-r--r-- 1 pi pi 1607 Oct 28 17:57 cups.trust
-rw-r--r-- 1 pi pi   69 Oct 28 17:57 cups.uri
-rw-r--r-- 1 pi pi 2460 Oct 28 17:46 station.conf
```

13. Before you start using basics station, disable the packet forwarder.
Use the command `sudo systemctl edit ttn-gateway.service` to edit the service of packet forwarder, and add the following codes to the file.


:::tip 📝 NOTE:
If you want to re-activate the packet forwarder, you can just set the value of **Restart** to **always**.
:::

```bash
[Unit]
Description=The Things Network Gateway

[Service]
WorkingDirectory=/opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/
ExecStart=/opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/start.sh
SyslogIdentifier=ttn-gateway
Restart=no
RestartSec=5

[Install]
WantedBy=multi-user.target
```

14. To apply the changes made to the unit, execute the following command:

```bash
sudo systemctl daemon-reload
```

15. Restart the ttn-gateway service to load the new service configuration. The unit file must be restarted if you modify the running unit file.

```bash
sudo systemctl restart ttn-gateway.service
```

16. Find the ttn-gateway process PID and `kill` this process:

```bash
pi@rak-gateway:~/basicstation/example/corecell/lns-aws $ ps aux | grep ttn-gateway
pi      28165   0.2     0.1     7680        2780    pts/0   S+  18:20   0:00 /bin/bash/opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/start.sh
pi      28236   0.0     0.0     7348         488    pts/1   S+  18:20   0:00 grep --color=auto ttn-gateway
pi@rak-gateway:~/basicstation/example/corecell/lns-aws $ sudo kill 28165
```

17. Now, you can start basics station. Exit the configuration folder and start basics station.

```bash
cd ..
./start-station.sh –l ./lns-aws
```


<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/5.configure-output.png"
  width="80%"
  caption="Configuring the Basics Station"
/>

If everything is configured properly, your gateway should be online in the AWS IoT Core for LoRaWAN console:

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/6.lorawan-specific-details.png"
  width="80%"
  caption="Connected Status in the LoRaWAN Console"
/>


### Add End-Devices

Refer to [RAK4631 Quick Start Guide](/Product-Categories/WisBlock/RAK4631/Quickstart/) to enable communication with the gateway.

#### Connect the Device and Verify the Connection Status

Follow the instructions in the [online guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-device-connection-status.html) to connect your device to AWS IoT Core for LoRaWAN. To verify the connection status, refer to the instructions in the **Check device connection status using the console** section.  You can also check [**View format of uplink messages sent from LoRaWAN devices**](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan-uplink-metadata-format.html).


### Verifying Operation

Once setup is completed, provisioned OTAA devices can join the network and start to send messages. Messages from devices can then be received by AWS IoT Core for LoRaWAN and forwarded to the IoT Rules Engine.

Instructions for a sample Hello World application are given below, assuming that the device has joined and is capable of sending uplink traffic.


<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/14.architecture.png"
  width="100%"
  caption="Sending Uplink Architecture"
/>


#### Create a Lambda Function for Destination Rule

Create the lambda function to process device messages processed by the destination rule.

1. Go to the [AWS Lambda console](http://console.aws.amazon.com/lambda).
2. In the navigation pane, click on **Functions**, then **Create function**.
3. Select **Author from scratch**.
4. Under **Basic Information**, enter the function name and choose _**Runtime Python 3.8**_. from the drop-down under **Runtime**.
5. Click on **Create function**.
6. Under **Function code**, paste the copied code into the editor under the _**lambda_function.py**_ tab.

    ```python
    import base64
    import json
    import logging
    import ctypes
    import boto3

    # define function name

    FUNCTION_NAME = 'RAK-HelloWorld'

    # Second Byte in Payload represents Data Types
    # Low Power Payload Reference: https://developers.mydevices.com/cayenne/docs/lora/

    DATA_TYPES = 1

    # Type Temperature

    TYPE_TEMP = 0x67

    # setup iot-data client for boto3

    client = boto3.client('iot-data')

    # setup logger

    logger = logging.getLogger(FUNCTION_NAME)
    logger.setLevel(logging.INFO)

    def decode(event):
        data_base64 = event.get('PayloadData')
        data_decoded = base64.b64decode(data_base64)
        result = {
            'devEui': event.get('WirelessMetadata').get('LoRaWAN'
                    ).get('DevEui'),
            'fPort': event.get('WirelessMetadata').get('LoRaWAN'
                    ).get('FPort'),
            'freq': event.get('WirelessMetadata').get('LoRaWAN'
                    ).get('Frequency'),
            'timestamp': event.get('WirelessMetadata').get('LoRaWAN'
                    ).get('Timestamp'),
            }

        if data_decoded[DATA_TYPES] == TYPE_TEMP:
            temp = data_decoded[DATA_TYPES + 1] << 8 \
                | data_decoded[DATA_TYPES + 2]
            temp = ctypes.c_int16(temp).value
            result['temperature'] = temp / 10

        return result


    def lambda_handler(event, context):
        data = decode(event)
        logger.info('Data: %s' % json.dumps(data))
        response = client.publish(topic=event.get('WirelessMetadata'
                                ).get('LoRaWAN').get('DevEui')
                                + '/project/sensor/decoded', qos=0,
                                payload=json.dumps(data))
        return response

    ```
7. Once the code has been pasted, choose **Deploy** to deploy the lambda code.
8. Click on the **Permissions** tab of the lambda function.
9. Change the **Lambda Role Policy** permission.
    -  Under **Execution role**, click on the hyperlink under **Role name**.
    -  On the **Permissions tab**, find the policy name and select it.
    -  Choose **Edit policy**, and choose the **JSON** tab.
    -  Append the following to the Statement section of the policy to allow publishing to AWS IoT.

    ```json
    {
    "Effect":"Allow",
    "Action":[
        "iot:Publish"
    ],
    "Resource":[
        "*"
    ]
    }
    ```

- Choose **Review Policy**, then Save changes.

11. Create a test event that will allow you to test the functionality of the lambda function.
    - In the drop-down, for the _**Select a test event**_, choose **Configure test events**.
    - Enter a name for the test event under the **Event name**.
    - Paste the following sample payload in the area under Event name:

  ```json
      {
      "WirelessDeviceId": "65d128ab-90dd-4668-9556-fe47c589610b",
      "PayloadData": "AWf/1w==",
      "WirelessMetadata": {
      "LoRaWAN": {
      "DataRate": "4",
      "DevEui": "0000000000000088",
      "FPort": 1,
      "Frequency": "868100000",
      "Gateways": [
              {
      "GatewayEui": "80029cffXXXXXXXX",
      "Rssi": -109,
      "Snr": 5
              }
          ],
      "Timestamp": "2021-02-08T04:00:40Z"
          }
      }
      }
  ```

12. Choose **Create** to save the event.
13. Navigate to the AWS IoT console, choose **Test** on the navigation pane, and select **MQTT client**.
14. Configure the MQTT client to subscribe to "**#**" (all topics).
15. Click on **Test** in the Lambda function page to generate the test event you just created.
16. Verify the published data in the AWS IoT Core MQTT Test client:
    - Open another window. Go to **AWS IoT Console**, select **Test** under Subscription Topic, **enter #** and select **Subscribe to topic**.
    - The output should look similar to this:

        ```json
            000000000000000088/project/sensor/decoded      February 09, 2021, 14:45:29 (UTC+0800)
            {
                "devEui": "000000000000000088",
                "fPort": 1,
                "freq": "868100000",
                "timestamp": "2021-02-08T04:00:40Z",
                "temperature": -4.1
            }
        ```


#### Create the Destination Rule

In this section, you create the IoT rule that forwards the device payload to your application. This rule is associated with the destination created earlier in [Set up a Destination for Device Traffic](#set-up-a-destination-for-device-traffic) section.

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Act**, then select **Rules**.
3. On the Rules page, choose **Create**.
4. On the Create a rule page, enter as follows:
      - Name: **LoRaWANRouting**
      - Description: **Any description of your choice**.


    :::tip 📝 NOTE:
    The **Name of your Rule** is the information needed when you provision devices to run on AWS IoT Core for LoRaWAN.
    :::

5. Leave the default Rule query statement '**SELECT * FROM 'iot/topic**' unchanged. This query has no effect at this time, as traffic is currently forwarded to the rules engine based on the destination.
6. Under **Set one or more actions**, choose **Add action**.
7. On the Select an action page, choose **Republish a message to an AWS IoT topic**. Scroll down, and choose **Configure action**.
8. On the Configure action page, for Topic, enter **_project/sensor/decoded_**. The AWS IoT Rules Engine will forward messages to this topic.
9. Under **Choose or create a role to grant AWS IoT access to perform this action**, select **Create Role**.
10. For Name, enter a name of your choice.
11. Choose **Create role** to complete the role creation.  You will see a "**Policy Attached**" tag next to the role name, indicating that the Rules Engine has been permitted to execute the action.
12. Choose **Add action**.
13. Add one more action to invoke the Lambda function. Under **Set one or more actions**, choose **Add action**.
14. Choose **Send a message to a Lambda function**.
15. Choose **Configure action**.
16. Select the Lambda function created earlier and choose **Add action**.
17. Then, choose **Create rule**.
18. A "**Success**" message will be displayed at the top of the panel, and the destination has a rule bound to it.

You can now check that the decoded data is received and republished by AWS by triggering a condition or event on the device itself.

- Go to the AWS IoT console. In the navigation pane, select **Test**, and choose **MQTT client**.
- Subscribe to the wildcard topic **#** to receive messages from all topics.
- Send message from endDevice using AT command: `at+send:lora:1:01670110`.
- You should see traffic similar as shown below:


    ```json
        393331375d387505/project/sensor/decoded           February 09, 2021, 14:47:21 (UTC+0800)
        {
        "devEui": "393331375d387505",
        "fPort": 1,
        "freq": "867100000",
        "timestamp": "2021-02-09T06:47:20Z",
        "temperature": 27.2
        }
    ```


    ```json
    project/sensor/decoded    February 09, 2021, 14:47:21 (UTC+0800)
        {
            "WirelessDeviceID": "6477ec22-9570-31d5981da021",
            "PayloadData": "AWcBEA==",
            "WirelessMetadata": {
                "LoRaWAN": {
                    "DataRate": "4",
                    "DevEui": "393331375d387505",
                    "FPort": 1,
                    "Frequency": "867100000",
                    "Gateways": [
                        {
                            "GatewayEui": "ac1ff09fffe014bd5",
                            "Rssi": -103,
                            "Snr": 8.5
                        }
                    ],
                    "Timestamp": "2021-02-09T06:47:20Z"
                }
            }
        }
    ```


#### Configuring Amazon SNS

You will be using the Amazon Simple Notification Service to send text messages (SMS) when certain conditions are met.

1. Go to the [Amazon SNS console](http://console.aws.amazon.com/sns).
2. Click on the menu to open the navigation pane.
3. Select **Text Messaging** (SMS) and choose **Publish text message**.
4. Under the Message type, select **Promotional**.
5. Enter your phone number (phone number that will receive text alerts).
6. Enter **Test message** for the Message and choose **Publish** message.
7. If the phone number you entered is valid, you will receive a text message and your phone number will be confirmed.
8. Create an Amazon SNS Topic as follows:
      - In the navigation pane, choose **Topics**.
      - Select **Create topic**.
      - Under Details, select **Standard**.
      - Enter a name of your choice. Here, you will use "**_text_topic_**".
      - Choose **Create topic**.
9. Create a subscription for this topic:
      - On the page for the newly created text_topic, choose the **Subscriptions** tab.
      - Choose **Create subscription**.
      - Select **Protocol** as SMS from the drop-down.
      - Under Endpoint, enter the previously validated phone number to receive the SMS alerts.
      - Choose **Create subscription**. You should see a "_**Subscription to text_topic created successfully**_" message.


##### Add a Rule for Amazon SNS Notification

Now, add a new rule to send an Amazon SNS notification when certain conditions are met in a decoded message.

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Act**, then **Rules**.
3. On the Rules page, choose **Create**.
4. Enter the Name as _text_alert_ and provide an appropriate **Description**.
5. Under the **Rule query statement**, enter the following query:

  ```sql
      SELECT devEui as device_id, "Temperature exceeded 25" as message, temperature as temp, timestamp as time FROM '+/project/sensor/decoded' where temperature > 25
  ```

6. Choose **Add action**.
7. Choose **Send a message as an SNS push notification**.
8. Choose **Configure action**.
9. Under SNS target, select _text_topic_ from the drop-down.
10. Select **RAW** under **Message format**.
11. Under **Choose or create a role to grant AWS IoT access to perform this action**, choose **Create role**.
12. Enter a name for the role, and choose **Add action**.
13. Select **Create rule**.  You should see a "**Success**" message, indicating that the rule has been created.


##### Test the Rule for Amazon SNS Notification

After adding the rule for Amazon SNS notification, you should receive a text message when hitting the event.

Send message from end-device using AT command: `at+send:lora:1:01670110`. Here is the message from mobile after sending an uplink message:

```json
    {
        "device_id": "393331375d387505",
        "message": "Temperature exceeded 25",
        "temp": 27.2,
        "time": "2021-02-22T07:58:54Z"
    }
```

#### Send Downlink Payload

This section shows how to send a downlink payload from AWS IoT LoRaWAN Server to end-device.

##### Install the AWS SAM CLI

Follow the instruction in the [online guide](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html) to install the [AWS SAM CLI.

##### Deploy the SAM Template to AWS

Follow the instruction in the Deploy [SAM template to AWS](https://github.com/aws-samples/aws-iot-core-lorawan/tree/main/send_downlink_payload) GitHub.

##### Send Payload to End-Device

1. Send Payload to End-device.
    - Go to the AWS IoT console.
    - In the navigation pane, select **Test**, and choose **MQTT client**.
    - Subscribe to the wildcard topic **#** to receive messages from all topics.
    - Specify the topic to **`cmd/downlink/{WirelessDeviceId}`** and a base64-encoded message.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/15.publish.png"
  width="90%"
  caption="Specifying a topic"
/>

4. You should see traffic on AWS similar as shown below:

    ```json
        downlink/status/6477ec22-9570-4fea-9668-31d5981da021   February 09, 2021, 15:09:29 (UTC+0800)
        {
            "sendresult": {
                "status": 200,
                "RequestId": "4f1d36e1-8316-4436-8e9d-2207e3711755",
                "MessageId": "60223529-0011d9f5-0095-0008",
                "ParameterTrace": {
                    "PayloadDate": "QQ==",
                    "WirelessDeviceId": "6477ec22-9570-4fea-9668-31d5981da021",
                    "Fport": 1,
                    "TransmitMode": 1
                }
            }
        }
    ```


<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/16.cmd.png"
  width="80%"
  caption="Traffic on AWS"
/>

5. You should see traffic on your console of end-device similar as shown below:

```
SYSLOG:4:LoRa rX : 41 - 14
SYSLOG:4:LoRa Tx :
```

##### IoT Analytics

You will use IoT Analytics to visually display data via graphs if there is a need in the future to do further analysis.

###### Create an IoT Analytics Rule

<b> Create a Rule First </b>

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Act** and then, choose **Rules**.
3. On the Rules page, choose **Create**.
4. Enter the Name as **Visualize** and provide an appropriate **Description**.
5. Under the Rule query statement, enter the following query:

    ```sql
    SELECT * FROM 'project/sensor/decoded'
    ```

6. Choose **Add action**.
7. Select **Send a message to IoT Analytics**.
8. Choose **Configure Action**.
9. Choose **Quick Create IoT Analytics Resources**.
10. Under **Resource Prefix**, enter an appropriate prefix for your resources, such as _LoRa Choose Quick Create_.
11. Once the Quick Create Finished message is displayed, choose **Add action**.
12. Choose **Create rule**. You should see a Success message, indicating that the rule has been created.


###### Configure AWS IoT Analytics

<b> Set Up AWS IoT Analytics </b>

1. Go to the [AWS IoT Analytics console](http://console.aws.amazon.com/iotanalytics).
2. In the navigation panel, choose **Data sets**.
3. Select the data set generated by the Quick Create in [**Create an IoT Analytics Rule**](#create-an-iot-analytics-rule).
4. In the Details section, edit the **SQL query**.
5. Replace the query with as follows:

    ```sql
    SELECT devEui as device_id, temperature as temp, timestamp as time FROM LoRa_datastore
    ```

6. Under Schedule, choose **Add schedule**.
7. Under Frequency, choose **Every 1 minute**, and then click **Save**.

###### Configure Amazon QuickSight

Amazon QuickSight lets you easily create and publish interactive BI dashboards that include Machine Learning-powered insights.

1. Go to [AWS Management console](http://console.aws.amazon.com/).
2. From the management console, enter **QuickSight** in the "_Search for services, features.._" search box.
3. Click on **QuickSight** in the search results.
4. If you haven't signed up for the service before, go ahead and sign up, as there is a free trial period.
5. Select the **Standard Edition**, and choose **Continue**.
6. Enter a unique name in the field **QuickSight account name**.
7. Fill in the **Notification email address**.
8. Review the other checkbox options and change them as necessary. The **AWS IoT Analytics** option must be selected.
9. Choose **Finish**. You will see a confirmation message.
10. Choose **Go to Amazon QuickSight**.
11. Select **Datasets**.
12. Select **New dataset**.
13. Select **AWS IoT Analytics**.
14. Under Select an AWS IoT Analytics data set to import, choose the data set created in [**Create an IoT Analytics Rule**](#create-an-iot-analytics-rule).
15. Choose **Create data source**, and then choose **Visualize**.
16. Select the dataset created, then select **Refresh** or **Schedule Refresh** for a periodic refresh of the dataset.

#### Testing Your "Hello World" Application

Using your device, create a condition to generate an event such as a high-temperature condition. If the temperature is above the configured threshold, then you will receive a text alert on your phone. This alert will include key parameters about the alert.

You can also visualize the data set as follows:

1. Go to the [AWS IoT Analytics console](http://console.aws.amazon.com/iotanalytics).
2. Choose **Data sets**.
3. Select the dataset created earlier.
4. Select **Content** and ensure there are at least a few uplink entries available in the data set.
5. Go to the [**QuickSight console**](http://quicksight.aws.amazon.com/).
6. Choose **New analysis**.
7. Choose the dataset created in [**Create an IoT Analytics Rule**](#create-an-iot-analytics-rule).
8. To see a chart of your dataset, select the following values:
    - **Time** on the X-axis
    - **Value** as temp (Average)
    - **Color** as device_id.


### Debugging

If you experience any issues, you can check the logs located in the `/var/log/` directory.

### Troubleshooting

- Unable to see the web login:
    - Check that your wifi is connected to **RAK7Wireless_XXXX**.
    - Try ping **192.168.230.1**.


## Connecting to The Things Stack (TTNv3)

The Things Network enables low-power devices to use long-range gateways to connect to an open-source, decentralized network to exchange data through an Application. Learn more about the Things Network through their [documentation](https://www.thethingsnetwork.org/docs/).

In this section, you will learn how to connect RAK7248/RAK7248C/RAK7248P WisGate Developer D4H Gateway to TTNv3.

1. To log in to the TTNv3, head to the [TTN site](https://www.thethingsnetwork.org/). If you already have a TTN account, you can use your The Things ID credentials to log in.

2. You should have connected your gateway to the internet through the router according to the method introduced in the **Accessing the Internet** section.

3. Configure your gateway and choose TTN as the LoRa Server. Choose a correct frequency according to the method introduced in the **Configuring the Gateway** section.

4. Click **Start building** and choose the cluster that is geographically closest to your region.


<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/ttnv3/1.cluster.png"
  width="100%"
  caption="Choosing cluster"
/>

5. Select **Register a gateway** (for new users that do not already have a registered gateway) or go to **Gateways > + Add gateway** (for users that have registered gateways before).

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/ttnv3/2.console-page.png"
  width="100%"
  caption="The Things Network console page"
/>

6. All registered gateway will be displayed. To register a new gateway, click **+ Add gateway**.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/ttnv3/3.new-gateway.png"
  width="100%"
  caption="Adding new gateway"
/>

7. Fill in the required information, and click **Create gateway** to register your gateway.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/ttnv3/4.register-gateway.png"
  width="100%"
  caption="Registering your gateway"
/>

- **Owner**- Automatically filled by The Things Stack, based on your account or created Organization.
- **Gateway ID** - This will be the unique ID of your gateway in the Network. Note that the ID must contain only lowercase letters, numbers, and dashes (-).
- **Gateway EUI** - A 64 bit extended unique identifier for your gateway. The gateway's EUI can be found by running either one of the following commands in the CLI of the gateway:

    ```
    gateway-version
    ```
    ```
    sudo gateway-config
    ```

- **Gateway description (optional)**- Optional gateway description; can also be used to save notes about the gateway.
- **Gateway Server address** - The address of the gateway server to connect to.

:::tip 📝 NOTE
This tutorial is based on using the EU868 frequency band, so the server address will be: **eu1.cloud.thethings.network**.
:::

- The other settings are optional and can be changed to satisfy your requirements.

When the gateway is configured to TTN and it is successfully registered in the console, it will show up online.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/ttnv3/5.gateway-ttn.png"
  width="100%"
  caption="Gateway successfully connected to TTN"
/>

## Connecting with ChirpStack

The ChirpStack is an open-source LoRaWAN Network Server. Learn more about [ChirpStack](https://www.chirpstack.io/).

When it comes to RAK7248/RAK7248C/RAK7248P WisGate Developer D4H Gateway, there are two (2) ways to use the ChirpStack:

### Using the Built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware or `rak_common_for_gateway` repository.

When you use it for the first time after burning the latest firmware, the gateway will work in the **EU868 Band**, and it will use the built-in ChirpStack as its default LoRa Server. If you don't want to change the frequency or LoRa Server, you don't have to do anything as this will be configured automatically when the gateway boots.

However, if it is not the first time you use the gateway and you want to use the built-in ChirpStack as the LoRa Server, follow the steps discussed in [**Configuring the Gateway**](/Product-Categories/WisGate/RAK7248/Quickstart/#configuring-the-gateway) section.


  - **Optional** - If ever you disabled the **AP Mode** and you have connected it to your Wifi network **(Client Mode)**, you can search for your gateway’s IP Address via [Advanced IP Scanner](https://www.advanced-ip-scanner.com/).

There is a **Web-based UI** that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

 - **Browser Address**: `<Gateway IP address>:8080` (Example: [http://192.168.0.100:8080](http://192.168.0.100:8080))
 - **Username**: admin
 - **Password**: admin

:::warning ⚠️ WARNING
It is recommended to **change your password** to tighten the security of your account. You can change this by clicking the change password button at the user icon.
:::

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/1.ui.png"
  width="100%"
  caption="ChirpStack web-based UI"
/>

Everything should be pre-configured - **Device profiles** have been created, the gateway has been registered with the server, etc. If you go to the **Gateways tab** and click **rak_gateway**, you should see the gateway details page.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/2.available-gateways.png"
  width="100%"
  caption="Available gateways in ChirpStack"
/>

Go to **Gateways** and see the **Last seen status**. It must be a few seconds ago, which signifies that the gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/3.status.png"
  width="100%"
  caption="Last seen status"
/>

### Using an Independent ChirpStack

You can setup an independent ChirpStack by yourself and can set a ChirpStack in AWS. Refer to the [AWS guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/). If you want to run ChirpStack on a different host/cloud, then refer to the [guide](https://www.chirpstack.io/guides/debian-ubuntu/) on the ChirpStack site.


:::warning ⚠️ WARNING
Remember to run the `sudo gateway-config` command in the CLI and point the gateway to the IP address of the machine you just installed ChirpStack on. This can be done in item 2 in the menu **Setup RAK Gateway LoRa concentrator**.
:::

Assuming you have set it up correctly, log in to your ChirpStack to register your gateway by opening the ChirpStack's web page in a browser by entering:

  - **Browser Address**: `<IP Address of ChirpStack>:8080`
  - **Username**: admin
  - **Password**: admin

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/4.login-page.png"
  width="100%"
  caption="ChirpStack login page"
/>

Click **Gateways** and select **+ CREATE** to register your gateway.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/5.registered-gateways.png"
  width="100%"
  caption="ChirpStack registered gateways"
/>

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/6.your-gateway.png"
  width="100%"
  caption="Registering your gateway"
/>

After registering your gateway, fill in the necessary information.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/7.details.png"
  width="100%"
  caption="Filling in the details"
/>

Fill in the gateway ID you got from the [Configuring the Gateway](/Product-Categories/WisGate/RAK7248/Quickstart/#configuring-the-gateway) section, also called gateway EUI.

If you have properly configured your gateway and there is a network connection between the external ChirpStack and your gateway, you should see the same page and status.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/chirpstack/8.success.png"
  width="100%"
  caption="Successfully registered gateway"
/>

Congratulations! You have now successfully connected your gateway to an external ChirpStack!
