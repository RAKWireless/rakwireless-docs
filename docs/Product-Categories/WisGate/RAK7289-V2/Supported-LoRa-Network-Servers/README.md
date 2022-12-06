---
rak_desc: Contains a comprehensive guide in setting up both your RAK7289 V2 and Amazon Web Services account and permissions. It also includes instructions in connecting and configuring your LoRaWAN Gateway with TTN and ChirpStack.
rak_img: /assets/images/wisgate/rak7289-v2/overview/RAK7289V2.png
tags:
  - ChirpStack
  - TTN
  - AWS
  - wisgate
  - RAK7289V2
  - RAK7289CV2
prev: ../Quickstart/
next: ../Datasheet/
---

# RAK7289V2/RAK7289CV2 Supported LoRa Network Servers

## AWS IoT Core for LoRaWAN

Execute the following steps to set up your AWS account and permissions:

### Set up Roles and Policies in IAM

#### Add an IAM Role for CUPS Server

Adding an IAM role will allow the Configuration and Update Server (CUPS) to handle the wireless gateway credentials.

This procedure needs to be done only once, but must be performed before a LoRaWAN gateway tries to connect with AWS IoT Core for LoRaWAN.

1. Go to the [IAM Roles](https://console.aws.amazon.com/iam/home#/roles) page on the IAM console.
2. Choose **Create role**.
3. On the Create Role page, choose **Another AWS account**.
4. Enter your **Account ID**, then select **Next**.
5. In the search box next to the **Filter Policies**, type **_AWSIoTWirelessGatewayCertManager_**.
   - If the search results show the policy named **_AWSIoTWirelessGatewayCertManager_**, select it by clicking the checkbox.
   - If the policy does not exist, create one.
      - Choose **Create Policy**, then select the **JSON** tab to open the policy editor.
      - Replace the existing template with a trust policy document.

      ```json
      {
      "Version": "2012-10-17",
      "Statement": [
      {
      "Sid": "IoTWirelessGatewayCertManager",
      "Effect": "Allow",
      "Action": [
      "iot:CreateKeysAndCertificate",
      "iot:DescribeCertificate",
      "iot:ListCertificates",
      "iot:RegisterCertificate"
               ],
      "Resource": "*"
                }
            ]
      }
      ```

      - Select **Next Tags** and click **Next: Review** to open the Review Page.
      - For the **Name**, type **_AWSIoTWirelessGatewayCertManager_**.

   :::tip 📝 NOTE:
   You must enter the name as **_AWSIoTWirelessGatewayCertManager_** and must not use a different name. This is for consistency with future releases.
   :::

     - For the **Description**, enter a description of your choice.
     - Then choose **Create policy**. You will see a confirmation message showing the policy has been created.

6. Click **Next**.
7. In **Role** name, enter **_IoTWirelessGatewayCertManagerRole_**, and then choose to **Create role**.

:::tip 📝 NOTE:
You must not use a different name.  This is for consistency with future releases.
:::

8. In the confirmation message, choose **_IoTWirelessGatewayCertManagerRole_** to edit the new role.
9. In the **Summary**, choose the **Trust relationships** tab, and then choose **Edit trust relationship**.
10.  In the **Policy Document**, change the **Principal** property to represent the IoT Wireless service:

```json
"Principal": {
"Service": "iotwireless.amazonaws.com"
},
```

- After changing the Principal property, the complete policy document should look like the following:

```json
{
"Version": "2012-10-17",
"Statement": [
    {
"Effect": "Allow",
"Principal": {
"Service": "iotwireless.amazonaws.com"
        },
"Action": "sts:AssumeRole",
"Condition": {}
    }
    ]
}
```

11.  Choose **Update Trust Policy** to save your changes and exit.
At this point, you have created the **_IoTWirelessGatewayCertManagerRole_** and you won't need to do this again.

:::tip 📝 NOTE:
The examples in this document are intended only for dev environments. All devices in your fleet must have credentials with privileges that authorize only intended actions on specific resources. The specific permission policies can vary for your use case. Identify the permission policies that best meet your business and security requirements. For more information, refer to <a href="https://docs.aws.amazon.com/iot/latest/developerguide/example-iot-policies.html"><b>Example Policies</b></a> and <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html"><b>Security Best Practices</b></a>
:::

#### Add IAM Role for Destination to AWS IoT Core for LoRaWAN


<b> Creating a Policy </b>

Creating a policy gives the role permissions to describe the IoT endpoint and publish messages to AWS IoT.

1. Go to the [IAM console](http://console.aws.amazon.com/iam).
2. Choose **Policies** from the navigation pane.
3. Choose **Create Policy**, then choose the **JSON** tab to open the policy editor. Replace the existing template with this trust policy document:

```json
{
"Version": "2012-10-17",
"Statement": [
   {
"Effect": "Allow",
"Action":
[
"iot:DescribeEndpoint",
"iot:Publish"
],
"Resource": "*"
   }
   ]
}
```

4. Click **Next: Tags** then **Next: Review** to open the Review page.
5. For **Name**, enter a name of your choice.
6. For **Description**, enter a description of your choice.
7. Choose **Create policy**.  You will see a confirmation message indicating that the policy has been created.

<b> Creating the Role </b>

1. In the **IAM console**, choose **Roles** from the navigation pane to open the Roles page.
2. Choose **Create Role**.
3. In **Select type of trusted entity**, select **AWS account** and click **Next**.
4. In **Account ID**, enter your AWS account ID, and then choose **Next: Permissions**.
5. Search for the **IAM policy** you just created by entering the policy name in the search bar.
6. In the search results, select the checkbox corresponding to the policy.
7. Click **Next**.
9. For **Role name**, enter an appropriate name of your choice.
10. For **Description**, enter a description of your choice.
11. Choose **Create role**.  You will see a confirmation message indicating that your role has been created.

<b> Updating your Trust Policy</b>

Update your role's trust relationship to grant AWS IoT Core for LoRaWAN permission to assume this IAM role when delivering messages from devices to your account.

1. In the IAM console, choose **Roles** from the navigation pane to open the Roles page.
2. Enter the name of the role you created earlier in the search window, and click on the role name in the search results. This opens up the **Summary** page.
3. Choose the **Trust relationships table** to navigate to the Trust relationships page.
4. Click **Edit trust relationship**. The principal AWS role in your trust policy document defaults to root and must be changed. Replace the existing policy with this:

```json
{
"Version": "2012-10-17",
"Statement": [
{
"Sid": "",
"Effect": "Allow",
"Principal": {
"Service": "iotwireless.amazonaws.com"
},
"Action": "sts:AssumeRole",
"Condition": {}
   }
   ]
}
```
5. Choose **Update Trust Policy.**

### Add the Gateway to AWS IoT

<b> Requirements </b>

To complete setting up your gateway, you need the following:

- LoRaWAN region. For example, if the gateway is deployed in a US region, the gateway must support LoRaWAN region US915.
- Gateway LNS-protocols. Currently, the LoRa Basics Station protocol is supported.
- Gateway ID (GatewayEUI) or serial number. This is used to establish the connection between the LNS and the gateway. Consult the documentation for your gateway to locate this value.
- Add minimum software versions required, including Basics Station 2.0.5.

#### Add the LoRaWAN Gateway

To register the gateway with AWS IoT Core for LoRaWAN, execute these steps:

1. Go to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. Select **Wireless connectivity** in the navigation panel on the left.
3. Choose **Gateways**, and then click **Add Gateway**.
4. In the **Add gateway section**, fill in the **GatewayEUI** and **Frequency band (RF Region)** fields.
5. Enter a descriptive name in the **Name** – optional field. It is recommended that you use the GatewayEUI as the name.
6. Choose **Add gateway**.
7. On the **Configure your Gateway** page, find the section titled **Gateway certificate**.
8. Select **Create certificate**.
9. Once the **Certificate created and associated with your gateway** message is shown, select **Download certificates** to download the certificate (*xxxxx.cert.pem*) and private key (*xxxxxx.private.key*).
10. In the section **Provisioning credentials**, choose **Download server trust certificates** to download the **CUPS (cups.trust)** and **LNS (lns.trust)** server trust certificates.
11. Copy the CUPS and LNS endpoints and save them in a `.txt` file for use while configuring the gateway.
12. Choose **Submit** to add the gateway.

### Add a LoRaWAN Device to AWS IoT

<b> Requirements: </b>

- Locate and note the following specifications about your endpoint device.
    - **LoRaWAN Region** - This must match the gateway LoRaWAN region. The following Frequency bands (RF regions) are supported:
        o	EU868
        o	US915
        o	EU433
    - **MAC Version** - This must be one of the following:
        o	V1.0.2
        o	v1.0.3
        o	v1.1
    - OTAA v1.0x and OTAA v1.1 are supported.
    - ABP v1.0x and ABP v1.1 are supported.

- Locate and note the following information from your device manufacturer:
    - For OTAA v1.0x devices: DevEUI, AppKey, AppEUI
    - For OTAA v1.1 devices: DevEUI, AppKey, NwkKey, JoinEUI
    - For ABP v1.0x devices: DevEUI, DevAddr, NwkSkey, AppSkey
    - For ABP v1.1 devices: DevEUI, DevAddr, NwkSEnckey, FNwkSIntKey, SNwkSIntKey, AppSKey

#### Verify Profiles

AWS IoT Core for LoRaWAN supports device profiles and service profiles. Device profiles contain the communication and protocol parameter values the device needs to communicate with the network server.  Service profiles describe the communication parameters the device needs to communicate with the application server.

Some pre-defined profiles are available for device and service profiles.  Before proceeding, verify that these profile settings match the devices you will be setting up to work with AWS IoT Core for LoRaWAN.

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot). In the navigation pane, choose **Wireless connectivity** then click **Profiles**.
2. In the **Device Profiles** section, there are some pre-defined profiles listed.
3. Check each of the profiles to determine if one of them will work for you. If not, select **Add device profile** and set up the parameters as needed. For US 915 as an example, the values are:
      - MacVersion 1.0.3
      - RegParamsRevision RP002-1.0.1
      - MaxEirp 10
      - MaxDutyCycle 10
      - RfRegion US915
      - SupportsJoin true

4. Click **Add device profile** once you have set a device profile that will work for you.
5. In the **Service Profiles** section, click **Add service profile** and set up the parameters as needed. As an example, the default service profile parameters are shown below. However, only the **_AddGwMetadata_** setting can be changed at this time.
      - UlRate 60
      - UlBucketSize 4096
      - DlRate 60
      - DlBucketSize 4096
      - AddGwMetadata true
      - DevStatusReqFreq 24
      - DrMax 15
      - TargetPer 5
      - MinGwDiversity 1

7. Proceed only if you have a device and service profile that will work for you.

#### Set up a Destination for Device Traffic

Because most LoRaWAN devices don't send data to AWS IoT Core for LoRaWAN in a format that can be consumed by AWS services, traffic must first be sent to a Destination. A Destination represents the AWS IoT rule that processes a device's data for use by AWS services. This AWS IoT rule contains the SQL statement that selects the device's data and the topic rule actions that send the result of the SQL statement to the services that will use it.

For more information on Destinations, refer to the AWS [LoRaWAN Developer Guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan.html).

A destination consists of a Rule and a Role. To set up the destination, execute the following steps:

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot). In the navigation pane, choose **Wireless connectivity**, and then **Destinations**.
2. Choose **Add Destination**.
3. For the **Destination name**, enter **_ProcessLoRa_**, and then add an appropriate description under **Destination description – optional**.
4. For **Rule name**, enter **_LoRaWANRouting_**. Ignore the section **Rules configuration – Optional** for now.  The Rule will be set up later in the "Hello World" sample application. See Create the IoT Rule for the destination.
5. In the **Permissions** section, choose **Select an existing service role** and select the IAM role you had created earlier, from the drop-down.

:::tip 📝 NOTE:
The Destination name can be anything. For getting started and consistency, choose **ProcessLoRa** for the first integration with AWS IoT Core for LoRaWAN.
:::

5. Choose **Add Destination**.  You will see a message "_Destination added_", indicating the destination has been successfully added.

#### Register the Device

Now, register an endpoint device with AWS IoT Core for LoRaWAN as follows:

1. Go to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. Select **Wireless connectivity** in the navigation panel on the left.
3. Select **Devices**, then choose **Add wireless device**.
4. On the **Add device** page, select the LoRaWAN specification version in the drop-down under **Wireless device specification**.
5. Under **LoRaWAN specification and wireless device configuration**, enter the **DevEUI** and confirm it in the **Confirm DevEUI** field.
6. Enter the remaining fields as per the OTAA/ABP choice you made above.
7. Enter a name for your device in the **Wireless device name – optional field**.
8. In the **Profiles** section, under **Wireless device profile**, from the drop-down option find the device profile you have created or the one that corresponds to your device and region.

:::tip 📝 NOTE:
Compare your device details to ensure the device profile is correct.  If there are no valid default options, you will have to create a new profile. See the [Verify Profiles](#verify-profiles) section.
:::

9. Click **Next** and then choose the destination you created earlier (_ProcessLoRa_) from the drop-down under **Choose destination**.
10. Choose **Add device**. You will see a message saying "_Wireless device added_", indicating that your device has been set up successfully.


### Set up the Gateway

- [**Set up the Gateway Hardware**](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268-V2/Quickstart/#power-on-the-gateway)
- [**Set up the Gateway Software**](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268-V2/Quickstart/#access-the-gateway)



### Configure the Gateway Device

1. Using your preferred Web browser, access the gateway. To access the gateway, see the Quick Start guide.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/1-web-user-interface-log-in.png"
  width="100%"
  caption="Web User Interface Log-in"
/>


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/2-checking-the-firmware-version.png"
  width="100%"
  caption="Checking the Firmware Version"
/>


2. Configure **Network Mode** to **Basics Station**.
3. Navigate to **LoRa®**. For **Work mode**, select **Basics station** and click **Configure Basics Station server setup** to expand the Basics Station settings.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/3-basics-station-work-mode.png"
  width="100%"
  caption="Basics Station work mode"
/>

4. Select **LNS Server** from Server, then choose **TLS Server and Client Authentication** from Authentication Mode.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/4-configuring-network-mode-to-basics-station.png"
  width="70%"
  caption="Configuring Network Mode to Basics Station"
/>

5. Configure URI, Port, and Authentication Mode.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/5-configuring-uri-port-and-authentication-mode.png"
  width="100%"
  caption="Configuring URI, Port, and Authentication Mode"
/>

6. Click **Save**. Check if the gateway is online in AWS IoT console.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/6-verifying-operation.png"
  width="100%"
  caption="Verifying Operation"
/>

### Add End Devices

This section shows an example of how to join the AWS IoT LoRaWAN server.

1. Add Device Profile.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/7-adding-the-device-profile.png"
  width="70%"
  caption="Adding the Device Profile"
/>

2. Add Service Profile.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/8-adding-the-service-profile.png"
  width="70%"
  caption="Adding the Service Profile"
/>

3. Add Destination.

Before adding the destination, follow the Add IAM role for Destination to AWS IoT Core for LoRaWAN section to configure the IAM policy and role.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/9-adding-destination.png"
  width="70%"
  caption="Adding Destination"
/>

4. Add Device.

Before adding a device to AWS IoT, retrieve the **DevEui**, **AppEui**, and **AppKey** from the end Device's console. You can use AT command `at+get_config=lora:status` to obtain the information.

For more AT commands, refer to the [RAK4200 AT Command Manual](/Product-Categories/WisDuo/RAK4200-Evaluation-Board/AT-Command-Manual/).


```
at+get_config=lora:status\r\n
OK Work Mode: LoRaWAN
Region: EU868
Send_interval: 600s
Auto send status: false.
MulticastEnable: true.
Multi_Dev_Addr: 260XXXXX
Multi_Apps_Key: F13DDFA2619B10411F02XXXXXXXXXXXX
Multi_Nwks_Key: 1D1991F5377C675879C3XXXXXXXXXXXX
Join_mode: OTAA
DevEui: 70B3XXXXXXXXXXXX
AppEui: F573D2XXXXXXXXXX
AppKey: 70B3DXXXXXXXXXXXXXXXXXXXXXXXXXXX
Class: C
Joined Network:false
IsConfirm: unconfirm
AdrEnable: true
EnableRepeaterSupport: false
RX2_CHANNEL_FREQUENCY: 869525000, RX2_CHANNEL_DR:0
RX_WINDOW_DURATION: 3000ms
RECEIVE_DELAY_1: 1000ms
RECEIVE_DELAY_2: 2000ms
JOIN_ACCEPT_DELAY_1: 5000ms
JOIN_ACCEPT_DELAY_2: 6000ms
Current Datarate: 4
Primeval Datarate: 4
ChannelsTxPower: 0
UpLinkCounter: 0
DownLinkCounter: 0

```

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/10-lorawan-specifications-and-wireless-device-configuration.png"
  width="70%"
  caption="LoRaWAN specifications and wireless device configuration"
/>


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/11-choosing-a-wireless-device-profile.png"
  width="70%"
  caption="Choosing a Wireless Device Profile"
/>

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/12-choosing-a-destination.png"
  width="70%"
  caption="Choosing a Destination"
/>

5. Restart the end Device, and it should join the AWS IoT LoRaWAN server.

```
EVENT:0:STARTUP
SYSLOG:4:OTAA Join Request
SYSLOG:4:OTAA Join Success
EVENT:1:JOIN_NETWORK
SYSLOG:4:LoRa Tx :
```

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/13-joined-device.png"
  width="100%"
  caption="Joined device"
/>



### Verifying Operation

Once setup is completed, provisioned OTAA devices can join the network and start to send messages. Messages from devices can then be received by AWS IoT Core for LoRaWAN and forwarded to the IoT Rules Engine.

Instructions for a sample Hello World application are given below, assuming that the device has joined and is capable of sending uplink traffic.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/14-sending-uplink-architecture.png"
  width="100%"
  caption="Sending Uplink Architecture"
/>

#### Create a Lambda Function for Destination Rule

Create the lambda function to process device messages processed by the destination rule.

1. Go to the [AWS Lambda console](http://console.aws.amazon.com/lambda).
2. Click **Functions** in the navigation pane.
3. Click **Create function**.
4. Select **Author** from scratch.
5. Under **Basic Information**, enter the function name and choose **_Runtime Python 3.8_**. from the drop-down under **Runtime**.
6. Click **Create function**.
7. Under **Function code**, paste the copied code into the editor under the **_lambda_function.py_** tab.

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

8. Once the code has been pasted, choose **Deploy** to deploy the lambda code.
9. Click the **Configuration** tab of the lambda function and click **Permissions**.
10. Change the **Lambda Role Policy** permission.
    -  Under **Execution role**, click the hyperlink under **Role name**.
    -  On the **Permissions tab**, find the policy name and select it.
    -  Choose **Edit policy**, and choose the **JSON** tab.
    -  Append the following to the **Statement** section of the policy to allow publishing to AWS IoT.


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

- After the change the code should look like this:

```json
{
    "Version": "2012-10-17",
    "Statement": [
        {
        "Effect":"Allow",
        "Action":[
             "iot:Publish"
        ],
         "Resource":[
          "*"
         ]
        }
    ]
}
```

- Choose **Review Policy**, then Save changes.

11. Go back to the Lambda function **Code source** and create a test event that will allow you to test the functionality of the lambda function.
  -	Click **Test** next to **Deploy**.
  - In the **Configure test event**, enter a name for the test event in the **Event name** field.
  - Paste the following sample payload in the area under **Event JSON** field:

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

11.	Choose **Save** to save the event.
12. In a new window, navigate to the AWS IoT console, choose **Test** on the navigation pane, and select MQTT test client.
13.	In Subscription topic field type “#” (all topics) and click Subscribe to topic. The MQTT will subscribe to all topics.
14.	Click on Test in the Lambda function page to generate the test event you just created.
15.	Verify the published data in the AWS IoT Core MQTT Test client. The output should look similar to this:


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

In this section, create the IoT rule that forwards the device payload to your application.  This rule is associated with the destination created earlier in Set up a Destination for Device Traffic section.

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Act**, then select **Rules**.
3. On the Rules page, choose **Create**.
4. On the Create a rule page, enter as follows:
      - Name: **LoRaWANRouting**
      - Description: **Any description of your choice**.


    :::tip 📝 NOTE:
    The **Name of your Rule** is the information needed when you provision devices to run on AWS IoT Core for LoRaWAN.
    :::

5. Leave the default Rule query statement: '**SELECT * FROM 'iot/topic**' unchanged. This query has no effect at this time, as traffic is currently forwarded to the rules engine based on the destination.
6. Under Set one or more actions, choose **Add action**.
7. On the Select an action page, choose **Republish a message to an AWS IoT topic**. Scroll down and choose **Configure action**.
8. On the Configure action page, for Topic, enter **_project/sensor/decoded_**. The AWS IoT Rules Engine will forward messages to this topic.
9. Under **Choose or create a role to grant AWS IoT access to perform this action**, select **Create Role**.
10. For Name, enter a name of your choice.
11. Choose **Create role** to complete the role creation. You will see a "**Policy Attached**" tag next to the role name, indicating that the Rules Engine has been permitted to execute the action.
12. Choose **Add action**.
13. Add one more action to invoke the Lambda function. Under **Set one or more actions**, choose **Add action**.
14. Choose **Send a message to a Lambda function**.
15. Choose **Configure action**.
16. Select the Lambda function created earlier and choose **Add action**.
17. Then choose **Create rule**.
18. A "**Success**" message will be displayed at the top of the panel, and the destination has a rule bound to it.

You can now check that the decoded data is received and republished by AWS by triggering a condition or event on the device itself.

- Go to the AWS IoT console. In the navigation pane, select **Test**, and choose **MQTT client**.
- Subscribe to the wildcard topic '**#**' to receive messages from all topics.
- Send message from endDevice using AT command: `at+send:lora:1:01670110`.
- You should see traffic similar to that shown below.

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
       "WirelessDeviceID": "3eff83dd-9159-XXXX-XXXX-XXXXXXXXXXXX",
       "PayloadData": "AWcBEA==",
       "WirelessMetadata": {
           "LoRaWAN": {
               "DataRate": "4",
               "DevEui": "3933XXXXXXXXXXXX ",
               "FPort": 1,
               "Frequency": "867100000",
               "Gateways": [
                  {
                       "GatewayEui": "ac1ff09ffXXXXXXXX",
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
2. Select **Text Messaging** (SMS) and choose **Publish text message**.
3. Under **Message type**, select **Promotional**.
4. Enter your phone number (phone number that will receive text alerts).
5. Enter "*Test message*" for the **Message** and choose **Publish** message.
6. If the phone number you entered is valid, you will receive a text message and your phone number will be confirmed.
7. Create an Amazon SNS Topic as follows:
      - In the navigation pane, choose **Topics**.
      - Select **Create topic**.
      - Under **Type**, select **Standard**.
      - Enter a name of your choice. Here, you will use "*text_topic*".
      - Select **Create topic**.
8. Create a subscription for this topic:
      - On the newly created *text_topic* page, choose the **Subscriptions** tab.
      - Choose **Create subscription**.
      - In **Topic ARN**, choose the topic you have created earlier.
      - Select **Protocol** as **SMS** from the drop-down.
      - Under **Endpoint**, enter the previously validated phone number to receive the SMS alerts.
      - Choose **Create subscription**. You should see a "**_Subscription to text_topic created successfully**_" message.


##### Add a Rule for Amazon SNS Notification

Now, add a new rule to send an Amazon SNS notification when certain conditions are met in a decoded message.

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Act**. Then, choose **Rules**.
3. On the Rules page, choose **Create**.
4. Enter the Name as *text_alert* and provide an appropriate Description.
5. Under the **Rule query statement**, enter the following query:
  ```sql
      SELECT devEui as device_id, "Temperature exceeded 25" as message, temperature as temp, timestamp as time FROM '+/project/sensor/decoded' where temperature > 25
  ```
6. Under **Set one or more actions**, choose **Add action**.
7. Choose **Send a message as an SNS push notification**.
8. Choose **Configure action**.
9. Under SNS target, select *text_topic* from the drop-down.
10. Select **RAW** under **Message format**.
11. Under **Choose or create a role to grant AWS IoT access to perform this action**, choose **Create role**.
12. Enter a name for the role and choose **Create role**.
13. Choose **Create rule**.  You should see a "**Success**" message, indicating that the rule has been created.

##### Test the Rule for Amazon SNS Notification

After adding the rule for Amazon SNS notification, you should receive a text message when hitting the event.

Wait for an uplink from the device. Here is the message from mobile after sending an uplink message.

```json
  {
       "device_id": "3933XXXXXXXXXXXX",
       "message": "Temperature exceeded 25",
       "temp": 27.2,
       "time": "2021-02-22T07:58:54Z"
  }

```

##### Send Downlink Payload

This section shows how to send downlink payload from AWS IoT LoRaWAN Server to the end Device.

1. Install the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
2. Deploy [SAM template to AWS](https://github.com/aws-samples/aws-iot-core-lorawan/tree/main/send_downlink_payload).
3. Send Payload to End Device.
    - Go to the AWS IoT console.
    - In the navigation pane, select **Test** and choose **MQTT client**.
    - Subscribe to the wildcard topic '**#**' to receive messages from all topics.
    - Specify the topic to **_cmd/downlink/{WirelessDeviceId}_** and a base64-encoded message.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/15-specifying-a-topic.png"
  width="100%"
  caption="Specifying a topic"
/>

4. You should see traffic on AWS similar as shown below:

    ```json
    downlink/status/3eff83dd-9159-XXXX-XXXX-XXXXXXXXXXXX  February 09, 2021, 15:09:29 (UTC+0800)
    {
        "sendresult": {
            "status": 200,
            "RequestId": "4f1d36e1-8316-4436-8e9d-2207e3711755",
            "MessageId": "60223529-0011d9f5-0095-0008",
            "ParameterTrace": {
                "PayloadDate": "QQ==",
                "WirelessDeviceId": "3eff83dd-9159-XXXX-XXXX-XXXXXXXXXXXX",
                "Fport": 1,
                "TransmitMode": 1
            }
        }
    }
    ```


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/16-traffic-on-aws.png"
  width="100%"
  caption="Traffic on AWS"
/>

5. You should see traffic on your console of end device similar as shown below.

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
4. Enter the Name as **Visualize**, and provide an appropriate Description.
5. Under the Rule query statement, enter the following query:
```sql
SELECT * FROM 'project/sensor/decoded'
```
6. Choose **Add action**.
7. Select **Send a message to IoT Analytics**.
8. Choose **Configure Action**.
9. Choose **Quick Create IoT Analytics Resources**.
10. Under **Resource Prefix**, enter an appropriate prefix for your resources, such as _LoRa_.
11. Choose **Quick Create**.
12. Once the Quick Create Finished message is displayed, choose **Add action**.
13. Choose **Create rule**. You should see a Success message, indicating that the rule has been created.

###### Configure AWS IoT Analytics

<b> Set up AWS IoT Analytics </b>

1. Go to the [AWS IoT Analytics console](http://console.aws.amazon.com/iotanalytics).
2. In the navigation panel, choose **Datasets**.
3. Select the data set generated by the Quick Create in Create an IoT Analytics Rule
4. In the Details section, click **Edit** in the **SQL query**.
5. Replace the query with as follows:
```sql
SELECT devEui as device_id, temperature as temp, timestamp as time FROM LoRa_datastore
```
6. Click **Update.
7. Navigate to **Schedule**, and click **Edit**.
8. Under Frequency, choose **Every 1 minute**, and then click **Update**.

###### Configure Amazon QuickSight

Amazon QuickSight lets you easily create and publish interactive BI dashboards that include Machine Learning-powered insights.

1. Go to [AWS Management console](http://console.aws.amazon.com/).
2. From the management console, enter **QuickSight** in the "_Search for services, features.._" search box.
3. Click on **QuickSight** in the search results.
4. If you haven't signed up for the service before, go ahead and sign up, as there is a free trial period.
5. Select the **Standard Edition**, and choose **Continue**.
6. Enter a unique name in the field QuickSight account name.
7. Fill in the Notification email address.
8. Review the other checkbox options and change them as necessary. The **AWS IoT Analytics** option must be selected.
9. Choose **Finish**. You will see a confirmation message.
10. Choose **Go to Amazon QuickSight**.
11. Select **Datasets**.
12. Select **New dataset**.
13. Select **AWS IoT Analytics**.
14. Under Select an AWS IoT Analytics data set to import, choose the data set created in **Create an IoT Analytics Rule**.
15. Choose **Create data source**, and then choose **Visualize**.
16. Select the dataset created, then select **Refresh** or **Schedule Refresh** for a periodic refresh of the dataset.

###### Testing Your "Hello Word" Application

Using your device, create a condition to generate an event such as a high-temperature condition. If the temperature is above the configured threshold then you will receive a text alert on your phone. This alert will include key parameters about the alert.

You can also visualize the data set as follows:

1. Go to the [AWS IoT Analytics console](http://console.aws.amazon.com/iotanalytics).
2. Choose **Data sets**.
3. Select the dataset created earlier.
4. Select **Content** and ensure there are at least few uplink entries available in the data set.
5. Go to the [**QuickSight console**](http://quicksight.aws.amazon.com/).
6. Choose **New analysis**.
7. Choose the dataset created in **Create an IoT Analytics Rule**.
8. Select time on the X-axis, Value as temp (Average), and Color as device_id to see a chart of your dataset.

### Debugging

After login to the device using the web browser, the system log can be viewed from **Diagnostics** > **System Log**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/aws/17-system-log.png"
  width="100%"
  caption="System Log"
/>

### Troubleshooting

1. Unable to see the web login:
    - Check that your wifi is connected to **RAK7268_XXXX**.
    - Try ping **192.168.230.1**.

2. Lost password to login to the web login.
   - Hold the reset button for 10 seconds to factory reset the device




## The Things Network (TTN)

### WisGateOS 2 Basics Station to TTNv3

This tutorial illustrates how to configure and connect your RAK Edge Gateway V2 with WisGateOS 2 to a LoRaWAN Network Server by using the Basics Station protocol. For this example, it will be shown how to connect the gateway to TTNv3.


:::tip 📝 NOTE:

LoRa Basics Station is an implementation of a LoRa packet forwarder. This protocol simplifies the management of large-scale LoRaWAN Networks. More information about the Basics Station protocol can be found in the [explanatory document](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/) provided by Semtech.
:::

#### Registering the Gateway

1. Log in first and head on to [TTNv3 website](https://eu1.cloud.thethings.network/console). If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/1.ttn.png"
  width="100%"
  caption="The Things Stack login page"
/>


:::tip 📝 NOTE:
This tutorial is for the EU868 Frequency band.
:::


2. To register a commercial gateway, choose **Register a gateway** (for new users that do not already have a registered gateway) or go to **Gateways** > **+ Add gateway** (for users that have registered gateways before).


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/2.console-page.png"
  width="100%"
  caption="Console Page after a successful login"
/>


3. You will be redirected to the **Register gateway** page.

4. In the **Gateway EUI** field, type the EUI of the gateway. The gateway's EUI can be found either on the sticker on the casing or by going to the **LoRa Network Settings** page in the **LoRa Gateway** menu accessible via the Web UI. Instructions on how to access your gateway via Web UI can be found in the product's [Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7289-V2/Quickstart/).

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/3.register-gateway.png"
  width="100%"
  caption="Register gateway"
/>


5. After typing the EUI, click on **Confirm**. Additional fields will pop up. Fill in the following information:

- **Gateway ID** – This will be the unique ID of your gateway in the Network. An ID based on the EUI is automatically generated. You can change it if you need. Note that the ID must contain only lowercase letters, numbers, and dashes (-).
- **Gateway name** – Optionally, you can type a name for your gateway.
- **Frequency plan** - The frequency plan used by the gateway.


:::tip 📝 NOTE:
- The other settings are optional and can be changed to satisfy your requirements.
- For this tutorial, we will use Europe 863-870&nbsp;MHz (SF12 for RX2).
:::

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/4.adding-gateway.png"
  width="100%"
  caption="Adding a gateway"
/>


6. To register your gateway, click **Register gateway**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/5.gateway-added.png"
  width="100%"
  caption="Successfully added a gateway"
/>


TTNv3 supports TLS server authentication and Client token, which requires a trust file and a key file to configure the gateway to successfully connect it to the network.

#### Generating the Token

1. To generate a key file, from the **Overview page** of the registered gateway navigate to **API keys**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/6.overview-page.png"
  width="100%"
  caption="Overview page"
/>


2. On the **API keys page**, choose **+ Add API key**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/7.api-key-page.png"
  width="100%"
  caption="API key page"
/>


3. In the **Name field**, type the name of your key (for example - mykey). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/8.generate-api-key.png"
  width="100%"
  caption="Generating an API key"
/>


4. To generate the key, choose **Create API key**. The following window will pop up, telling you to copy the key you just generated.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/9.copy-api-key.png"
  width="70%"
  caption="Copying the generated key"
/>


:::warning ⚠️ WARNING:
Copy the key and save it in a `.txt` file (or other), because you won’t be able to view or copy your key after that.
:::

5.  Click **I have copied the key** to proceed.

### Configuring the Gateway

1. To configure the gateway, access it via the Web UI. To learn how to do that, refer to the Quick Start Guide for each gateway.

2. Navigate to **LoRa** > **Configuration** > **Work mode** and select **Basics station**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/10.working-mode.png"
  width="100%"
  caption="Changing the working mode"
/>


3. Expand the Basics Station settings by clicking **Configure Basics Station server setup.**


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/11.basics-station.png"
  width="100%"
  caption="Expanded Basics Station settings"
/>


4. To connect the gateway to TTNv3, configure the following parameters:

- **Basics Station Server Type** – For server type, choose **LNS Server**.
- **Server URL** – This is the link to The Things Stack server. Note that, for this tutorial, the gateway is connected to the European cluster. For Europe fill in the following:

```
wss://eu1.cloud.thethings.network
```

- **Server Port** – The LNS Server uses port 8887. Type in **8887**.
- **Authentication Mode** – Choose **TLS server authentication and Client token**. When selected, the **Trust (CA Certificate)** and **Client token** fields will show up.
- **Trust (CA Certificate)** – For trust, upload the **Let’s Encrypt ISRG ROOT X1 Trust** certificate by clicking **choose file**. The file with the certificate can be downloaded [directly](https://letsencrypt.org/certs/isrgrootx1.pem).
- **Client Token** - This is the generated API key. The key must start with **Authorization:**.

For example:

```
Authorization: YOUR_API_KEY
```

:::tip 📝 NOTE:
Replace **YOUR_API_KEY** with the key generated previously. Have in mind that there should be a **space** between **Authorization:** and **YOUR_API_KEY**, as shown in the example.
:::

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/12.basics-station-settings.png"
  width="100%"
  caption="Basics Station settings"
/>


5. To save the changes, click **Save Changes**.

Now, you can see that their gateway is connected to TTNv3 as Basics Station.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/ttn/13.successful-connection.png"
  width="100%"
  caption="Successful connection"
/>


## ChirpStack

This guide will show you how to connect the RAKWireless Commercial V2 gateway running WisGateOS 2 to a ChirpStack Network server, whether it is installed in the local or external network.

The guide is not about how to install the ChirpStack, but how to configure the gateway to send data to it.

### Configuring the Edge Gateway V2 to ChirpStack

As mentioned before, the guide is for all RAK Edge V2 Series gateways running WisGateOS 2. It will be separated into two main sections based on where the ChirpStack Network server is installed:

- Local ChirpStack
- External ChirpStack

Different methods on how to connect the gateway to the server will be shown.

#### Local ChirpStack

In this case, the ChirpStack is installed in the local network. Three options will be considered here:

- **Connecting the Gateway via Packet Forwarder**
- **Connecting the Gateway via MQTT Bridge**
- **Connecting the Gateway via Basics Station**

Each option is explained in a separate section.

##### Connecting the Gateway via Packet Forwarder

In this method, you will configure the gateway’s packet forwarder to send data to the ChirpStack Gateway Bridge.

1. Start by accessing the gateway. To see how to access the gateway, refer to the [**Access the Gateway**](/Product-Categories/wisgate/rak7289-v2/Quickstart/#access-the-gateway) section.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/1.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the [**Access the Gateway**](/Product-Categories/wisgate/rak7289-v2/Quickstart/#access-the-gateway) section.

3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a Built-in network server.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/2.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/3.packet-forwarder.png"
  width="100%"
  caption="Setting Packet Forwarder Mode"
/>


4. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected.

5. To point the gateway to the ChirpStack network using the packet forwarder, you only need to set the **Server address** of the ChirpStack.

In this case, the ChirpStack is installed locally on an Ubuntu machine on IP `192.168.0.130` (yours will be different). The other fields are filled with default parameters and can be left by default.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/4.packet-forwarder.png"
  width="60%"
  caption="Configuring Packet Forwarder to ChirpStack"
/>


6. Click **Save changes** to save the changes.

Now you need to register the gateway in ChirpStack. The steps are the same for all options.

#### Registering the Gateway in ChirpStack Network Server

1. To register the gateway in the ChirpStack Network server, access the ChirpStack UI. To do that, open a web browser and type the server address of the ChirpStack with port 8080.

```
<IP address of ChirpStack>:8080
```

In this case, the ChirpStack is installed on a local Ubuntu machine with IP `192.168.0.130`. The server address will be `192.168.0.130:8080`.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/5.login.png"
  width="100%"
  caption="ChirpStack Login page"
/>


2. Login using the following credentials:

- Username/email: **admin**
- Password: **admin**


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/6.dashboard.png"
  width="100%"
  caption="ChirpStack dashboard"
/>


3. Head to **Gateways**, on the left pane.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/7.list.png"
  width="100%"
  caption="Gateway list"
/>


4. By default, no gateways are registered. To register one, click **+ Create**.

5. In the **General menu**, you need to set the gateway parameters.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/8.register.png"
  width="100%"
  caption="Register the gateway"
/>


- **Gateway name** – unique name for the gateway on the Network server. The name may only contain words, numbers, and dashes.
- **Gateway description** – a brief description of the gateway.
- **Gateway ID** – the Extended Unique Identifier (EUI) of the gateway. The EUI can be found, on the Overview page of the Dashboard menu of the web UI of the gateway.
- **Network-server** - the network server to which the gateway will connect. When no network servers are available in the dropdown, make sure a service profile exists for this organization.
- **Service profile** - the service profile under which the gateway must be added. The available service profiles depend on the selected network server, which must be selected first.
- **Gateway profile** – this field is optional. When assigning a gateway profile to the gateway, ChirpStack Network Server will attempt to update the gateway according to the gateway profile. Note that this does require a gateway with ChirpStack Concentratord.
- **Gateway discovery enabled** - When enabled (and ChirpStack Network Server is configured with the gateway discover feature enabled), the gateway will send out periodical pings to test its coverage by other gateways in the same network.
- **Gateway attitude** - When the gateway has an onboard GPS, this value will be set automatically when the network has received statistics from the gateway.
- **Gateway location** – you can drag the marker to the location of the gateway. When the gateway has an onboard GPS, this value will be set automatically when the network receives statistics from the gateway.



6. Once, everything is set, click **Create gateway** to register the gateway. You will see the registered gateway in the **Gateway list**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/9.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


7. If everything is set correctly, the **Last seen** status will state a few seconds ago in a while.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/10.connect-gateway.png"
  width="100%"
  caption="Connect the gateway"
/>


You can click the gateway name to inspect the gateway traffic.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/11.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


##### Connect the Gateway via MQTT Bridge

In this method, you will configure the gateway’s built-in gateway bridge to send data to the ChirpStack Broker.

1. Start by accessing the gateway. To access the gateway check the Access the gateway.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/12.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/13.network-server.png"
  width="100%"
  caption="Network server settings"
/>

4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/14.packet-forward.png"
  width="100%"
  caption="Setting Packet Forwarder Mode"
/>


5. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected. To use the built-in gateway bridge, from the **Protocol** select **LoRa Gateway MQTT Bridge**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/15.mqtt-bridge.png"
  width="70%"
  caption="LoRa Gateway MQTT Bridge"
/>


The latest ChirpStack version supports both **MQTT for ChirpStack 3.x (JSON)** and **MQTT for ChirpStack 3.x (PROTOBUF).**

::: tip 📝 NOTE
If you want to use JSON protocol, you need to change the payload marshaler in the gateway bridge .toml file to “JSON”.
:::


To configure the payload marshaler you need to access the configuration file of the gateway bridge. You can access it with the configuration file of the gateway bridge. You can also access it with an SSH connection. In this case, you will use the SSH client PuTTY to access the configuration files.

6. Access the ChirpStack via PuTTY. You need to type the address of the ChirpStack server in the **Host name** field and click **Open**. In this case on IP 192.168.0.130.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/16.access-chirpstack.png"
  width="70%"
  caption="PuTTY client"
/>


7. In the `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`, find the **Integration** section and change the marshaler to JSON.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/17.payload-marshaler.png"
  width="100%"
  caption="Payload Marshaler"
/>

8. Save and exit the file.

9. However, if you are using an earlier version of ChirpStack (V2), you will need to select **MQTT for ChirpStack 2. x**. The option **MQTT for Embedded RAK Network Server** is for a mesh network, where one gateway plays the role of a network server.

For this example, you will choose **MQTT for ChirpStack 3. x (PROTOBUF).**

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/18.mqtt.png"
  width="100%"
  caption="MQTT for Chirpstack Protocol"
/>


10. By default, the built-in gateway bridge is pointed to the local Broker (127.0.0.1). To point the gateway to the ChirpStack network, you need to set the ChirpStack Broker address in the **MQTT Broker Address** field.

In this case, the ChirpStack is installed locally on an Ubuntu machine on IP 192.168.0.130 (yours will be different). The default port that the MQTT Broker uses is 1883.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/19.packet-forwarder.png"
  width="60%"
  caption="Configuring Packet Forwarder to ChirpStack"
/>


11.  Click **Save changes** to save the changes.

12.  Now you need to register the gateway in the ChirpStack Network server. When Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected by default. To register the gateway in ChirpStack, see **Registering gateway in ChirpStack Network server** section.

13.  If everything is set correctly, the **Last seen** status will state **a few seconds ago**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/20.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


You can click the gateway's name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/21.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

##### Connecting the Gateway via Basics Station

1. In this method, you will connect the gateway to the **ChirpStack** via **Basics Station**. The **LoRa Basics™ Station** is an implementation of a LoRa packet forwarder.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/22.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. n the left side, head to LoRa. By default, the gateway is configured to work as a Built-in network server.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/23.network.png"
  width="100%"
  caption="Network Server Settings"
/>


4. For **Work Mode**, select **Basics station** and click **Configure Basics Station** server setup to expand the Basics Station settings.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/24.basic-station.png"
  width="100%"
  caption="Setting Basics Station mode"
/>


Here you need to point the gateway to the ChirpStack Network server:

- **Server** – For server, choose LNS Server.
- **URI** – the address of the ChirpStack server. In this case, the ChirpStack is installed locally on an Ubuntu machine on IP 192.168.0.130 (yours will be different). The URI will be `ws://192.168.0.130`.

::: tip 📝 NOTE
The URL starts with ws:// in case a plain text connection is used. Using the wss:// scheme will trigger a TLS connection based on the `tc.{cert,key,trust}` credentials set.
:::

- **Port** – the port to which the Websocket listens. The port is 3001.
- **Authentication Mode** – authentication for the ChirpStack server. For this case, you will use no authentication.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/25.basics-station.png"
  width="100%"
  caption="Configuring Basics Station to ChirpStack"
/>


5. Click **Save changes** to save the changes.

Now your gateway is configured to work as Basics Station, and it is pointed to the ChirpStack gateway bridge. The default installation of the ChirpStack setups the backend configuration of the ChirpStack gateway bridge to `semtech_udp`.

6. To configure the backend of the ChirpStack gateway bridge, you need to access the configuration file of the bridge. To access it, you will need an SSH terminal. In this case, you will use a PuTTY client.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/26.access.png"
  width="65%"
  caption="PuTTY client"
/>


Copy the configuration file's text in the [ChirpStack Gateway bridge webpage](https://www.chirpstack.io/gateway-bridge/install/config/) and place it in `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`.

7. In the file, find the **Gateway backend configuration** paragraph and replace the type with `basic_station.`


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/27.bridge-type.png"
  width="100%"
  caption="Configure gateway bridge type"
/>


8. Now scroll down until you find the **Concentrator configuration** paragraph and uncomment the following text as shown below. Uncommenting the text, enables the configuration for the SX1301 concentrator chips.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/28.bridge-backend.png"
  width="100%"
  caption="Configure gateway bridge backend"
/>



9. Save and exit the `.toml` file and restart the gateway bridge service to apply the changes by restarting the gateway bridge service with the following command:

```
sudo systemctl restart chirpstack-gateway-bridge.service
```

Now the ChirpStack backend configuration is set to basics station.

10. Then, you need to register the gateway in the ChirpStack Network server. To register the gateway in ChirpStack, see **Registering gateway in ChirpStack Network server** section.

If everything is set correctly, the **Last seen** status will state a few seconds ago. You can click the gateway name to inspect the gateway traffic.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/29.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/30.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

#### External ChirpStack

In this case, the ChirpStack is installed on an external network. In the following example, the ChirpStack Network server is installed on the AWS cloud. A guide on how to install it on AWS can be found in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#installing-chirpstack) section.

To access the ChirpStack web UI, you need to enable **TCP port 8080** and to make the gateway to communicate with the Network server you need to enable the following ports in the inbound rules of the instance:

- The Semtech Packet Forwarder needs UDP port 1700.
- MQTT Bridge (unsecured) needs TCP port 1883.
- MQTT Bridge (secured) needs TCP port 8883.
- Basics Station needs TCP port 3001.

:::tip 📝 NOTE
A guide on how to open the above ports can be found in the [guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#installing-chirpstack) on how to install ChirpStack on AWS.
:::

Three options will be considered here:

- **Connecting the Gateway via Packet Forwarder**
- **Connecting the Gateway via MQTT Bridge**
- **Connecting the Gateway via Basics Station**

Each option is explained in its own separate section.

##### Connecting the Gateway via Packet Forwarder

In this method, you will configure the gateway’s packet forwarder to send data to the ChirpStack Gateway Bridge.

:::tip 📝 NOTE
When connecting the gateway to the ChirpStack, you will need to open ports 1700 and 8080 to enable the communication between the gateway and the server and be able to access the ChirpStack.
:::

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/31.udp-port.png"
  width="100%"
  caption="Opened 1700 UDP port"
/>

1. Start by accessing the gateway.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/32.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/33.network-server.png"
  width="100%"
  caption="Network server settings"
/>



4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/34.packet-forwarder.png"
  width="100%"
  caption="Setting packet forwarder settings"
/>


When Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected by default.

To point the gateway to the ChirpStack network using the packet forwarder, you only need to set the When Packet Forwarder mode. The **Semtech UDP GWMP Protocol** is selected by default of the ChirpStack.

In this case, the ChirpStack is installed on the AWS cloud instance with public IP **18.156.176.220** (yours will be different). The default ports that the packet forwarder is using are 1700.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/35.configure-packet.png"
  width="70%"
  caption="Configure packet forwarder to ChirpStack"
/>


5. Click **Save changes** to save the changes.

Now you need to register the gateway in the ChirpStack Network server.

##### Registering the Gateway in ChirpStack

The steps for registering the gateway in ChirpStack are the same for all options.

1. To register the gateway in the ChirpStack Network server, access the ChirpStack UI. To do that, open a web browser and type the server address of the ChirpStack with port 8080.

```
<IP address of ChirpStack>:8080
```

2. In this case, the ChirpStack is installed on the AWS cloud with the public IP address `18.156.176.220.`


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/36.login-page.png"
  width="100%"
  caption="ChirpStack login page"
/>


3. Login using the following credentials:

- Username/email: **admin**
- Password: **admin**


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/37.dashboard.png"
  width="100%"
  caption="ChirpStack dashboard"
/>

4. On the left pane, head to **Gateways**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/38.list.png"
  width="100%"
  caption="Gateway list"
/>


5. By default, no gateways are registered. To register one, click **+ Create.**

6. In the **General** menu, you need to set the gateway parameters.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/39.register.png"
  width="100%"
  caption="Register the gateway"
/>

- **Gateway name** – unique name for the gateway on the Network server. The name may only contain words, numbers, and dashes.
- **Gateway description** – a brief description of the gateway.
- **Gateway ID** – the Extended Unique Identifier (EUI) of the gateway. The EUI is in the Overview menu of the Dashboard page of the web UI of the gateway.
- **Network server** - the network server to which the gateway will connect. When no network servers are available in the dropdown, make sure a service profile exists for this organization.
- **Service-profile** - the service profile under which the gateway must be added. The available service profiles depend on the selected network server, which must be selected first.
- **Gateway profile** – this field is optional. When assigning a gateway profile to the gateway, ChirpStack Network Server will attempt to update the gateway according to the gateway profile. Note that this does require a gateway with ChirpStack Concentrator.
- **Gateway discovery enabled** - When enabled (and ChirpStack Network Server is configured with the gateway discover feature enabled), the gateway will send out periodical pings to test its coverage by other gateways in the same network.
- **Gateway attitude** - When the gateway has an onboard, this value will be set automatically when the network has received statistics from the gateway.
- **Gateway location** – you can drag the marker to the location of the gateway. When the gateway has an onboard GPS, this value will be set automatically when the network receives statistics from the gateway.


7. Once everything is set, click **Create gateway** to register the gateway. You will see the registered gateway in the Gateway list.

If everything is set correctly, the Last seen status in the ChirpStack will state **a few seconds ago.**

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/40.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


8. You can click the gateway name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/41.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>

Now your gateway is connected to the ChirpStack Network server.

##### Connecting the Gateway via MQTT Bridge

In this method, you will configure the gateway’s built-in bridge to publish the data to the ChirpStack MQTT broker.

:::tip 📝 NOTE
When connecting the gateway to the ChirpStack, you will need to open ports 1883 and 8080 to enable the communication between the gateway and the server and be able to access the ChirpStack.
:::


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/42.login-page.png"
  width="100%"
  caption="Login page"
/>


1. Start by accessing the gateway.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/43.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.

3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as **Built-in network server**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/44.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/45.packet-forwarder.png"
  width="100%"
  caption="Setting packet forwarder mode"
/>


5. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected. To use the built-in gateway bridge, from the **Protocol** select **LoRa Gateway MQTT Bridge**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/46.mqtt-bridge.png"
  width="70%"
  caption="LoRa Gateway MQTT bridge"
/>


The latest ChirpStack version supports both **MQTT for ChirpStack 3.x (JSON)** and **MQTT for ChirpStack 3.x (PROTOBUF).**

:::tip 📝 NOTE
If you want to use JSON protocol, you need to change the payload marshaler in the gateway bridge `.toml` file to json. By default, the marshaler is protobuf.
:::

6. To configure the payload marshaler, you need to access the configuration file of the gateway bridge. You can access it with an SSH connection. In this case, you will use the SSH client PuTTY to access the configuration files. How to do this is explained in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#accessing-instance-via-ssh) section.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/47.access-chirpstack.png"
  width="70%"
  caption="PuTTY client"
/>


7. In the `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`, find the Integration section and change the marshaler to `json`.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/48.payload-masher.png"
  width="100%"
  caption="Payload Masher"
/>

8. Save and exit the file.

However, if you are using an earlier version of ChirpStack (V2), you will need to select **MQTT for ChirpStack 2.x.** The option **MQTT for Embedded RAK Network Server** is for a mesh network, where one gateway plays the role of a network server. For this example, you will choose **MQTT for ChirpStack 3.x (PROTOBUF)**.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/49.chirpstack-protocol.png"
  width="100%"
  caption="MQTT for ChirpStack protocol"
/>


By default, the built-in gateway bridge is pointed to the local Broker (127.0.0.1). To point the gateway to the ChirpStack network, you need to set the ChirpStack Broker address in the **MQTT Broker Address** field.

In this case, the ChirpStack is installed on an AWS cloud instance with public IP `18.156.176.220` (yours will be different). The default port that the MQTT Broker uses is 1883.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/50.configure.png"
  width="60%"
  caption="Configuring packet forwarder to ChirpStack"
/>


9. Click **Save changes** to save the changes.

If everything is set correctly, the **Last seen status** will state a few seconds ago. You can click the gateway name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/51.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/52.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

##### Connecting the Gateway via Basics Station

In this method, you will connect the gateway to the ChirpStack via Basics Station. The LoRa Basics™ Station is an implementation of a LoRa® packet forwarder.

:::tip 📝 NOTE
When connecting the gateway to the ChirpStack, you will need to open TCP ports3001 and 8080 to enable the communication between the gateway and the server and be able to access the ChirpStack.
:::

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/53.enable-port.png"
  width="100%"
  caption="Enable 8080 and 3001 port"
/>


1. Start by accessing the gateway.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/54.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/55.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. For **Work Mode**, select **Basics station** and click **Configure Basics Station** server setup to expand the Basics Station settings.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/56.basics-station.png"
  width="100%"
  caption="Setting Basics Station mode"
/>


- **Server** – For server, choose LNS Server.
- **URI** – the address of the ChirpStack server. In this case, the ChirpStack is installed on an AWS cloud instance with public `IP 18.156.176.220` (yours will be different). The URI will be: `ws://18.156.176.220`.

:::tip 📝 NOTE
The URL starts with `ws://` in case a plain text connection is used. Using the `wss://` scheme will trigger a TLS connection based on the ``tc.{cert,key,trust} `credentials set.
:::


- **Port** – the port to which the Websocket listens. The port is 3001.
- **Authentication Mode** – Authentication for the ChirpStack server. For this case, you will use no authentication.

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/57.basics-station.png"
  width="70%"
  caption="Configuring Basics Station to ChirpStack"
/>


5. Click **Save changes** to save the changes.

Now your gateway is configured to work as Basics Station and it is pointed to the ChirpStack gateway bridge. The default installation of the ChirpStack setups backend of the ChirpStack gateway bridge as `semtech_udp`.

To configure the backend of the ChirpStack gateway bridge, you need to access the configuration file of the bridge. To access it, you will need an SSH terminal. In this case, you will use the PuTTy client.

To access the ChirpStack configuration files, you need to access the instance. How to do this is explained in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#accessing-instance-via-ssh) section.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/58.access-chirpstack.png"
  width="65%"
  caption="PuTTY client"
/>


6. In the ChirpStack Gateway bridge webpage, copy the configuration file text and place it in `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`.

7. In the file, find the gateway backend configuration paragraph and replace the type with `basic_station`.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/59.bridge-type.png"
  width="100%"
  caption="Configure gateway bridge type"
/>


8. Now scroll down until you find the **Concentrator configuration** paragraph and uncomment the following text as shown below.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/60.bridge-backend.png"
  width="100%"
  caption="Configuring gateway bridge backend"
/>


9. Save and exit the `.toml` file and restart the gateway bridge service to apply the changes by restarting the gateway bridge service with the following command:

```
sudo systemctl restart chirpstack-gateway-bridge.service
```

Now the ChirpStack backend configuration is set to Basics station.

If everything is set correctly, the Last seen status will state a few seconds ago. You can click the gateway name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/61.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>

<rk-img
  src="/assets/images/wisgate/rak7289-v2/supported-lora-network-servers/chirpstack/62.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

## ThingPark by Actility

In this section, you will learn how to add RAK7289V2/RAK7289CV2 WisGate Edge Pro in **ThingPark**.

ThingPark is Actility’s platform, in which you can register your LoRaWAN gateway and end devices. ThingPark offers a user-friendly dashboard, in which you can monitor different information about the gateway/end device like status, radio traffic, statistics, and more. Together with HTTPS integration, you can send the data received from the end nodes to an Application server for post-processing and visualizing.

For the complete step-by-step tutorial, refer to the [How to Add RAK WisGate Edge Gateway in ThingPark - Actility ThingPark Guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/How-to-Add-RAK-WisGate-Edge-Gateway-in-ThingPark-Actility-ThingPark-Guide/).
