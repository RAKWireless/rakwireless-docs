---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/aws-iot-core-integration/aws-integration-edge.png
rak_desc: This document will show you how to set up a LoRaWAN end-node and view its data on the AWS IoT Console. In addition, it’ll show you how to send a message from AWS IoT Console to the end-node as well.
tags:
  - Tutorial
  - AWS
  - RAK7200
  - RAK7268
  - WisGate Edge Lite 2
  - WisNode
  - WisBlock
  - Cayenne LPP
header:
  title: AWS IoT Core Integration
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/amazon-web-service.jpg
posted: 07/10/2021 3:30 PM
---

# AWS IoT Core Integration

## Overview

### Description

AWS IoT Core Integration is a software service that enables your LoRaWAN gateway to work with AWS IoT Core. This document will show you how to set up a LoRaWAN end-node and view its data on the AWS IoT Console. In addition, it’ll show you how to send a message from AWS IoT Console to the end-node as well.

### Prerequisites

- A gateway from the RAK WisGate Edge series
- A node from the RAK WisNode or WisBlock series, or another LoRaWAN compatible node
- An [AWS account](https://signin.aws.amazon.com/signin?redirect_uri=https%3A%2F%2Fconsole.aws.amazon.com%2Fconsole%2Fhome%3Ffromtb%3Dtrue%26hashArgs%3D%2523%26isauthcode%3Dtrue%26nc2%3Dh_ct%26src%3Dheader-signin%26state%3DhashArgsFromTB_us-east-1_a53fa9852547e0dd&client_id=arn%3Aaws%3Asignin%3A%3A%3Aconsole%2Fcanvas&forceMobileApp=0&code_challenge=pdxKQdhyX4lCmF3_dH3QBzFZ_lvpvhTprqWNAcHrtlk&code_challenge_method=SHA-256))

:::tip 📝 NOTE
For this tutorial, the RAK7200 WisNode Track Lite is used as the end-node and RAK7268 WisGate Edge Lite 2 for the gateway.
:::

### Set Up Environment for Evaluation

#### Set Up the Build-in Network Server

All the WisGate Edge Gateways are pre-configured in the Network Server mode of operation. If you want some modifications, creating the application and adding the device needed for this demonstration, refer to the [Build in LoRa Server](https://docs.rakwireless.com/Knowledge-Hub/Learn/Build-in-LoRa-Server/) tutorial. It shows the detailed way on how to configure your gateway.


#### Integrate AWS IoT Core

AWS IoT Core is a cloud-based service that connects your "things" (devices, sensors, etc.) to other devices and AWS cloud services. AWS IoT provides software that can help you integrate your IoT devices into AWS IoT-based solutions. If your devices can connect to AWS IoT, the AWS IoT can connect them to the cloud services that AWS provides.

##### Create a Thing

1. To create a thing (add a device) in the AWS IoT console, navigate to **Manage** > **Things** and select **Create Things.**

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/1.things-tab.png"
  width="100%"
  caption="Things Tab in the AWS IoT Console"
/>

2. You can choose to add a single device or multiple ones. For this demonstration, select **Create single thing** and click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/2.create-things.png"
  width="100%"
  caption="Create Things"
/>

3. Give your thing a name and click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/3.specify-things.png"
  width="100%"
  caption="Specify the Thing Properties"
/>

4. To generate certificates for your thing, select the **Auto-generate a new certificate (recommended)** and click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/4.configure-device-certificate.png"
  width="100%"
  caption="Configure Device Certificate"
/>


5. A policy is needed for your thing, hence click **Create policy**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/5.attach-policies.png"
  width="100%"
  caption="Attach Policies to Certificate"
/>


6. You’ll be automatically redirected to a new window. Click **Secure** then **Policies**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/6.create-policy.png"
  width="100%"
  caption="Create a Policy"
/>


7. Fill in the following fields, then click **Create**.

- **Name**: A name for your policy. For this example, the name will be `My_policy`.
- **Action**: Type `iot:*`
- **Resource ARN**: Type `*`
- **Effect**: Mark **Allow**.

8. Return to the previous window and refresh it by clicking the **Refresh** button. You will then see the newly created policy pop up in the list. Choose it and click **Create Thing**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/7.attach-policies.png"
  width="100%"
  caption="Attach Policies to Certificate"
/>


10. In the opened window, download all the certificates and keys, then click **Done**.

:::warning ⚠️ WARNING
Save the downloaded certificates and keys, as they cannot be downloaded again if needed.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/8.download-certificates-keys.png"
  width="100%"
  caption="Download Certificates and Keys"
/>


11. Your thing is created. Now, you need to attach the policy you’ve created to it. Click on the name of your thing and navigate to **Certificates**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/9.things.png"
  width="100%"
  caption="The Things"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/10.things-details.png"
  width="100%"
  caption="The Things Details"
/>


12. Click on the **Certificate ID**. In the **Actions** drop-down menu, choose **Attach policy**.


<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/11.certificate.png"
  width="100%"
  caption="Certificate"
/>


13.  Select the previously created policy and click **Attach**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/12.attach-certificate.png"
  width="100%"
  caption="Attach Policies to Certificate"
/>


##### Configure Global Integration for the AWS Proxy

1. Now, you need to configure the global integration of the gateway for the AWS IoT Core. To do so, in the gateway's Web UI, navigate to **LoRa Network** > **Global Integration**. Then choose **AWS IoT Core** for the **Integration Mode**.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/13.application-server-integration.png"
  width="100%"
  caption="Application Server Integration"
/>


2. Fill in the following information:

- **AWS URL** - The URL for your things can be found in the **Settings** menu under the **Endpoint** in the AWS IoT console.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/14.endpoint.png"
  width="100%"
  caption="Device Data Endpoint"
/>

- **AWS Port** – The port for the AWS IoT core. Fill the field with port `8883`.
- **CA Certificate** – The certificate you've downloaded (see Figure 15).
- **Vendor Certificate** – The certificate you've downloaded (see Figure 15).
- **Vendor Key** – The key you've downloaded (see Figure 15).

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/15.certificates-and-keys-placement.png"
  width="100%"
  caption="Certificates and Keys Placement"
/>


### Verify a Successful Integration

#### See messages from the device in the AWS IoT console

1. To see the messages from the end-node, navigate to the **Test** tab in the AWS IoT console.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/16.test-tab.png"
  width="100%"
  caption="Certificates and Keys Placement"
/>


2. In the **Topic filter** field, subscribe to all topics by typing `#` to see the data (join, uplink, downlinks, etc.) from the node.

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/17.messages.png"
  width="100%"
  caption="Messages from the Device"
/>


3. RAKwireless provides a [decoder](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder) for all WisNode devices that are based on RUI. All WisNode devices support **Cayenne LPP** payload format, and it can be activated via the Web UI of the gateway. Navigate to **LoRa Network** > **Application** > **Your_application** > **Edit** > **Payload Formats**.


4. In the **Payload Format** drop-down menu, choose **Cayenne LPP**, then enable **Only forward the parsed data object** to receive only the data of the sensor. Click **Save & Apply**.


<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/18.payloads.png"
  width="100%"
  caption="Payload formats"
/>


#### Send Messages to the Device

1. To send messages to the end-node, in the AWS IoT console, navigate to **Test** > **Publish to a Topic**.

   Here you need to fill in the following:

   - **Topic Name** – The name of the topic to which you want to publish a message. Here is a template of the downlink topic the RAK Gateway uses `application/id/device/eui/tx`, where:
     - **id** – This is the ID of your application. It can be found in the **LoRa Network** > **Application** tab of the gateway’s UI.
     - **eui** – This is the device’s EUI.

   An example of a downlink topic would be `application/6/device/60c5a8fffeXXXXXX/tx`.

   - **Message Payload** – The message that you want to send to the end-node. It must be in the format `{"confirmed":true,"data":"SGVsbG8=","fPort":10}`, where:
     - **Confirmed** can be true or false.
     - The content of the **data** is the information you want to send. The information must be base64 encoded. This can be done with a [converter](https://www.base64decode.org/).
     - **fPort** is the port number where you send the data. The number can be 1-255.

   You can send the message by clicking **Publish.**

<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/19.mqtt.png"
  width="100%"
  caption="MQTT Test Client"
/>


2. The message can be seen in the **Live Device Data** of the node in the Web UI of the gateway.


<rk-img
  src="/assets/images/knowledge-hub/learn/aws-iot-core-integration/20.live-device-data.png"
  width="100%"
  caption="Live Device Data"
/>

