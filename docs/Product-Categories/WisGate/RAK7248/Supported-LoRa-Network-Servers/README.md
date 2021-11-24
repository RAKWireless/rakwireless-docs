---
rak_desc: Contains a comprehensive guide in setting up both your RAK7248 and Amazon Web Services account and permissions. 
rak_img: /assets/images/wisgate/rak7248/overview/RAK7248_home.png
tags:
  - AWS
  - wisgate
  - RAK7248
next: ../Datasheet/
prev: ../Overview/

---

# RAK7248 Supported LoRa Network Servers


## AWS IoT Core

Execute the following steps to set up your AWS account and permissions:
### Set Up Your AWS Account and Permissions

If you don't have an AWS account, refer to the instructions in the guide here. The relevant sections are **Sign up for an AWS account**and **Create a user and grant permissions**.  

#### Overview 

The high-level steps to get started with AWS IoT Core for LoRaWAN are as follows:

1. Set up Roles and Policies in IAM
2. Add a Gateway (see section Add the Gateway to AWS IoT)
3. Add Device(s) (see section Add a LoRaWAN Device to AWS IoT)
    - Verify device and service profiles
    - Set up a Destination to which device traffic will be routed and processed by a rule.  

These steps are discussed as you browse through this guide. For additional details, refer to the AWS LoRaWAN developer guide.

#### Set Up Roles and Policies in IAM


Adding an IAM role will allow the Configuration and Update Server (CUPS) to handle the wireless gateway credentials. 

This procedure needs to be done only once but must be performed before a LoRaWAN gateway tries to connect with AWS IoT Core for LoRaWAN.

1. Go to the [IAM Roles](https://console.aws.amazon.com/iam/home#/roles) page on the IAM console.
2. Choose **Create role**.
3. On the Create Role page, choose **Another AWS account**. 
4. Enter your **Account ID**, then select **Next: Permissions**.
5. In the search box next to the Filter Policies, type **_AWSIoTWirelessGatewayCertManager_**.
   - If the search results show the policy named **_AWSIoTWirelessGatewayCertManager_**, select it by clicking the checkbox.
   - If the policy does not exist, create one:
      - Go to the [IAM console](http://console.aws.amazon.com/iam).
      - Choose **Policies** from the navigation pane.
      - Choose **Create Policy**, then select the **JSON** tab to open the policy editor. 
      - Replace the existing template with trust policy document.
  
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

      - Choose **Review Policy** to open the Review Page.
      - For the Name, type _**AWSIoTWirelessGatewayCertManager**_.

   :::tip 📝 NOTE:
   You must enter the name as **_AWSIoTWirelessGatewayCertManager_** and must not use a different name. This is for consistency with future releases.
   :::

     - For the **Description**, enter a description of your choice. 
     - Then choose **Create policy**. You will see a confirmation message showing the policy has been created.
  

6. Choose **Next: Tags**, then **Next: Review**.
7. In **Role name**, enter _**IoTWirelessGatewayCertManagerRole**_, and then choose to **Create role**.
   
:::tip 📝 NOTE:
You must not use a different name.  This is for consistency with future releases.
:::

8. In the confirmation message, choose _**IoTWirelessGatewayCertManagerRole**_ to edit the new role.
9. In the **Summary**, choose the **Trust relationships** tab, and then choose **Edit trust relationship**.
10. In the **Policy Document**, change the **Principal** property to represent the IoT Wireless service:

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

11. Choose **Update Trust Policy** to save your changes and exit.
At this point, you have created the _**IoTWirelessGatewayCertManagerRole**_ and you won't need to do this again.

:::tip 📝 NOTE:
The examples in this document are intended only for dev environments. All devices in your fleet must have credentials with privileges that authorize only intended actions on specific resources. The specific permission policies can vary for your use case. Identify the permission policies that best meet your business and security requirements. For more information, refer to <a href="https://docs.aws.amazon.com/iot/latest/developerguide/example-iot-policies.html"><b>Example Policies</b></a> and <a href="https://docs.aws.amazon.com/iot/latest/developerguide/security-best-practices.html"><b>Security Best Practices</b></a>
:::


##### Add IAM Role for Destination to AWS IoT Core for LoRaWAN


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

4. Choose **Review Policy** to open the Review page.
5. For **Name**, enter a name of your choice.
6. For **Description**, enter a description of your choice.
7. Choose **Create policy**.  You will see a confirmation message indicating that the policy has been created.


<b> Creating the Role </b>

1. In the **IAM console**, choose **Roles** from the navigation pane to open the Roles page.
2. Choose **Create Role**. 
3. In **Select type of trusted entity**, choose **Another AWS account**.
4. In **Account ID**, enter your AWS account ID, and then choose **Next: Permissions**.
5. Search for the **IAM policy** you just created by entering the policy name in the search bar.
6. In the search results, select the checkbox corresponding to the policy.
7. Choose **Next: Tags**. 
8. Choose **Next: Review** to open the Review page. 
9. For **Role name**, enter an appropriate name of your choice. 
10. For **Description**, enter a description of your choice. 
11. Choose **Create role**.  You will see a confirmation message indicating that your role has been created.


<b> Updating Your Trust Policy</b>

Update your role's trust relationship to grant AWS IoT Core for LoRaWAN permission to assume this IAM role when delivering messages from devices to your account.

1. In the IAM console, choose **Roles** from the navigation pane to open the Roles page.
2. Enter the name of the role you created earlier in the search window and click on the role name in the search results. This opens up the Summary page.
3. Choose the **Trust relationships** table to navigate to the Trust relationships page.
4. Choose **Edit trust relationship**. The principal AWS role in your trust policy document defaults to root and must be changed. Replace the existing policy with this:
   
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

5. Choose **Update Trust Policy.** Under Trusted entities, you will see: *The identity provider(s) iotwireless.amazonaws.com*.



#### Add the Gateway to AWS IoT

##### Requirements

To complete setting up your gateway, you need the following:

- **LoRaWAN region**. For example, if the gateway is deployed in a US region, the gateway must support LoRaWAN region US915.
- **Gateway LNS-protocols**. Currently, the LoRa Basics Station protocol is supported.
- **Gateway ID (GatewayEUI) or serial number**. This is used to establish the connection between the LNS and the gateway. Consult the documentation for your gateway to locate this value.
- Add minimum software versions required, including Basics Station 2.0.5.

##### Add the LoRaWAN Gateway

To register the Gateway with AWS IoT Core for LoRaWAN, execute these steps:

1. Go to the [AWS IoT console](http://console.aws.amazon.com/iot). 
2. Select **Wireless connectivity** in the navigation panel on the left.
3. Choose **Intro**, and then select **Get started**. This step is needed to pre-populate the default profiles.
4. Under **Add LoRaWAN gateways and wireless devices**, choose **Add gateway**.
5. In the **Add gateway** section, fill in the **GatewayEUI** and **Frequency band (RF Region)** fields.
6. Enter a descriptive name in the **Name** – optional field. It is recommended that you use the GatewayEUI as the name.
7. Choose **Add gateway**.
8. On the **Configure your Gateway** page, find the section titled **Gateway certificate**. 
9. Select **Create certificate**.
10. Once the **Certificate created and associated with your gateway** message is shown, select **Download certificates** to download the certificate (*xxxxx.cert.pem*) and private key (*xxxxxx.private.key*).
11. In the section **Provisioning credentials**, choose **Download server trust certificates** to download the **CUPS (cups.trust)** and **LNS (lns.trust)** server trust certificates.
12. Copy the CUPS and LNS endpoints and save them for use while configuring the gateway.
13. Choose **Submit** to add the gateway.


#### Add a LoRaWAN Device to AWS IoT

##### Requirements

- Locate and note the following specifications about your endpoint device.
    - **LoRaWAN Region**: This must match the gateway LoRaWAN region. The following Frequency bands (RF regions) are supported:
        o	EU868
        o	US915
        o	EU433
    - **MAC Version**: This must be one of the following:
        o	V1.0.2
        o	v1.0.3 
        o	v1.1
    - OTAA v1.0x and OTAA v1.1 are supported.
    - ABP v1.0x and ABP v1.1 are supported.

- Locate and note the following information from your device manufacturer: 
    - For **OTAA v1.0x devices**: DevEUI, AppKey, AppEUI
    - For **OTAA v1.1 devices**: DevEUI, AppKey, NwkKey, JoinEUI
    - For **ABP v1.0x devices**: DevEUI, DevAddr, NwkSkey, AppSkey
    - For **ABP v1.1 devices**: DevEUI, DevAddr, NwkSEnckey, FNwkSIntKey, SNwkSIntKey, AppSKey


##### Verify Profiles

AWS IoT Core for LoRaWAN supports device profiles and service profiles. Device profiles contain the communication and protocol parameter values the device needs to communicate with the network server. Service profiles describe the communication parameters the device needs to communicate with the application server.

Some pre-defined profiles are available for device and service profiles. Before proceeding, verify that these profile settings match the devices you will be setting up to work with AWS IoT Core for LoRaWAN.


1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. In the navigation pane, choose **Wireless connectivity** then select **Profiles**.
3. In the **Device Profiles** section, there are some pre-defined profiles listed. Check each of the profiles to determine if one of them will work for you.
4. If not, select **Add device profile** and set up the parameters as needed. For US 915 as an example, the values are as follows:
      
      - MacVersion 1.0.3
      - RegParamsRevision RP002-1.0.1
      - MaxEirp 10
      - MaxDutyCycle 10
      - RfRegion US915
      - SupportsJoin true

5. Continue once you have a device profile that will work for you.
6. In the **Service Profiles** section, there are some pre-defined profiles listed. Check each of the profiles to determine if one of them will work for you.
7. If not, select **Add service profile** and set up the parameters as needed.  As an example, the default service profile parameters are shown below. However, only the _**AddGwMetadata**_ setting can be changed at this time.
     
      - UlRate 60
      - UlBucketSize 4096
      - DlRate 60
      - DlBucketSize 4096
      - AddGwMetadata true
      - DevStatusReqFreq 24
      - DrMax 15
      - TargetPer 5
      - MinGwDiversity 1

8. Proceed only if you have a device and service profile that will work for you.

##### Set Up a Destination for Device Traffic

Because most LoRaWAN devices don't send data to AWS IoT Core for LoRaWAN in a format that can be consumed by AWS services, traffic must first be sent to a Destination.  A Destination represents the AWS IoT rule that processes a device's data for use by AWS services. This AWS IoT rule contains the SQL statement that selects the device's data and the topic rule actions that send the result of the SQL statement to the services that will use it.

For more information on Destinations, refer to the AWS [LoRaWAN Developer Guide](https://docs.aws.amazon.com/iot/latest/developerguide/connect-iot-lorawan.html).

A destination consists of a **Rule** and a **Role**. To set up the destination, execute the following steps:

1. Navigate to the [AWS IoT console](http://console.aws.amazon.com/iot). 
2. In the navigation pane, choose **Wireless connectivity**, and then **Destinations**.
3. Choose **Add Destination**.
4. On the Add destination page, in the **Permissions** section, select the IAM role you had created earlier from the drop-down.
5. Under the **Destination details**, enter _**ProcessLoRa**_ as the Destination name, and an appropriate description under **Destination description – optional**.


:::tip 📝 NOTE:
The Destination name can be anything. For getting started and consistency, choose **ProcessLoRa** for the first integration with AWS IoT Core for LoRaWAN.
:::

5. For **Rule name**, enter _**LoRaWANRouting**_. Ignore the section **Rules configuration – Optional** for now.  The Rule will be set up later in the *"Hello World*" sample application. See Create the IoT Rule for the destination.
6. Choose **Add Destination**.  You will see a message "_Destination added_", indicating the destination has been successfully added.


##### Register the Device

Now, register an endpoint device with AWS IoT Core for LoRaWAN as follows:

1. Go to the [AWS IoT console](http://console.aws.amazon.com/iot).
2. Select **Wireless connectivity** in the navigation panel on the left.
3. Select **Devices**, then choose **Add wireless device**.
4. On the **Add device** page, select the LoRaWAN specification version in the drop-down under **Wireless device specification**.
5. Under **LoRaWAN specification and wireless device configuration**, enter the **DevEUI** and confirm it in the **Confirm DevEUI** field.
6. Enter the remaining fields as per the OTAA/ABP choice you made above.
7. Enter a name for your device in the **Wireless device name – optional field**.
8. In the **Profiles** section, under **Wireless device profile**, find a drop-down option that corresponds to your device and region. 

:::tip 📝 NOTE:
Compare your device details to ensure the device profile is correct.  If there are no valid default options, you will have to create a new profile. See the Verify Profiles section.
:::

9. Choose **Next**.
10. Choose the destination you created earlier (_ProcessLoRa_) from the drop-down under **Choose destination**.
11. Choose **Add device**.
12. You will see a message saying "_Wireless device added_", indicating that your device has been set up successfully.


### Set Up the Gateway

- [**Set Up the Gateway Hardware**](/Product-Categories/WisGate/RAK7248/Quickstart/#power-on-the-gateway)
- [**Set Up the Gateway Software**](/Product-Categories/WisGate/RAK7248/Quickstart/#access-the-gateway)

For Additional Software References, check the following links:

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
Run the following commands in the basicstaion directory.
:::

4. Install all the dependencies by running the following command:

```bash
make platform=corecell variant=std
```

5. Replace the file `loragw_stts751.c` file using following command:


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

11.  Add the certificates that you downloaded earlier to **lns-aws**. (Refer to [Add the LoRaWAN Gateway](#add-the-lorawan-gateway).)

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

12. All the configurations about basics stations are ready. You should now have the files as follows:

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

14. To apply changes made to the unit, execute the following command:

```bash
sudo systemctl daemon-reload
```

15. Restart the ttn-gateway service to load the new service configuration. Unit file must be restated if you modify the running unit file.

```bash
sudo systemctl restart ttn-gateway.service
```

16. Find the ttn-gateway process PID and `kill` this process:

```bash
pi@rak-gateway:~/basicstation/example/corecell/lns-aws $ px aux | grep ttn-gateway
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

This section shows an example of how to join the AWS IoT LoRaWAN server.

1. Add Device Profile.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/7.add-device-profile.png"
  width="70%"
  caption="Adding the Device Profile"
/>


2. Add Service Profile.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/8.add-service-profile.png"
  width="70%"
  caption="Adding the Service Profile"
/>

3. Add Destination.

Before adding the destination, follow the Add IAM role for Destination to AWS IoT Core for LoRaWAN section to configure IAM policy and role.

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/9.add-destination.png"
  width="70%"
  caption="Adding Destination"
/>


4. Add Device.

Before adding a device to AWS IoT, retrieve the **DevEui**, **AppEui**, and **AppKey** from the end-device console. You can use the following AT command to obtain the information:

```
at+get_config=lora:status
```

For more AT commands, refer to the [RAK4200 AT Command Manual](/Product-Categories/WisDuo/RAK4200-Evaluation-Board/AT-Command-Manual/).


```
at+get_config=lora:status\r\n
OK Work Mode: LoRaWAN
Region: EU868
Send_interval: 600s
Auto send status: false.
MulticastEnable: true.
Multi_Dev_Addr: 260111FD
Multi_Apps_Key: F13DDFA2619B10411F02F042E1C0F356
Multi_Nwks_Key: 1D1991F5377C675879C39B6908D437A6
Join_mode: OTAA
DevEui: 0000000000000888
AppEui: 0000000000000888
AppKey: 00000000000008880000000000000888
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
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/10.wireless-device-specification.png"
  width="80%"
  caption="LoRaWAN specifications and wireless device configuration"
/>


<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/11.wireless-device-profile.png"
  width="80%"
  caption="Choosing a Wireless Device Profile"
/>

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/12.choose-destination.png"
  width="80%"
  caption="Choosing a Destination"
/>



5. Restart the end-device, and it should join the AWS IoT LoRaWAN server.

```
EVENT:0:STARTUP
SYSLOG:4:OTAA Join Request
SYSLOG:4:OTAA Join Success
EVENT:1:JOIN_NETWORK
SYSLOG:4:LoRa Tx :
```

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/aws/13.checking-device.png"
  width="100%"
  caption="Checking the device in the LoRaWAN Server"
/>

6. Use the following AT command to send an uplink message:

```
at+send:lora:1:1234567890
``` 

Here is the console log after sending uplink message:

```
1
OK
SYSLOG:4:LoRa Tx : 1234567890
EVENT:3:LORA_TX_DONE:1:OK
```


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
3. Select **Author** from scratch.
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
    - Open another window. Go to **AWS IoT Console**, select **Test** under Subscription Topic, **enter #** and select to **Subscribe to topic**.
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
8. On the Configure action page, for Topic, enter **_project/sensor/decoded_**.The AWS IoT Rules Engine will forward messages to this topic.
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

This section shows how to send downlink payload from AWS IoT LoRaWAN Server to end-device.

1. Install the [AWS SAM CLI](https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/serverless-sam-cli-install.html).
2. Deploy [SAM template to AWS](https://github.com/aws-samples/aws-iot-core-lorawan/tree/main/send_downlink_payload).
3. Send Payload to End Device.
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
3. Select the data set generated by the Quick Create in Create an IoT Analytics Rule
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
3. Click on QuickSight in the search results.
4. If you haven't signed up for the service before, go ahead and sign up, as there is a free trial period.
5. Select the **Standard Edition**, and choose Continue.
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

#### Testing Your "Hello Word" Application

Using your device, create a condition to generate an event such as a high-temperature condition. If the temperature is above the configured threshold, then you will receive a text alert on your phone. This alert will include key parameters about the alert.

You can also visualize the data set as follows:

1. Go to the [AWS IoT Analytics console](http://console.aws.amazon.com/iotanalytics).
2. Choose **Data sets**.
3. Select the dataset created earlier.
4. Select **Content** and ensure there are at least few uplink entries available in the data set. 
5. Go to the [**QuickSight console**](http://quicksight.aws.amazon.com/).
6. Choose **New analysis**.
7. Choose the dataset created in **Create an IoT Analytics Rule**.
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


## AWS IoT GreengrassV2

To learn more about AWS IoT GreengrassV2, see [how it works](https://docs.aws.amazon.com/greengrass/v2/developerguide/how-it-works.html) and [what's new](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-v2-whats-new.html).

### Set Up Your Development Environment

#### Tools Installation (IDEs, Toolchains, SDKs)

- RAK7248 is based on Raspberry Pi 4 SBC. By default, the latest Raspbian OS based on Linux is used. More information and the available releases can be found [here](https://www.raspberrypi.com/software/).
- RAKwireless provides ready to use image to be flashed on the SD card [here](https://downloads.rakwireless.com/LoRa/AWS_GreengrassV2/RAK7248-AWS-GreengrassV2.zip).
- The main service is the LoRa packet forwarder. It can be found [here](https://github.com/Lora-net/packet_forwarder).

#### Additional Software References

- Our [FAQ page](https://docs.rakwireless.com/Knowledge-Hub/FAQs/)
- Our [Community Forum](https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs)

### Set Up Your Hardware

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/greengrass/1.hardware-setup.png"
  width="70%"
  caption="RAK7248 Interfaces"
/>

- A detailed description of components and interfaces can be found in the Datasheet [here](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7248/Datasheet/#overview).
- The required power supply is a 5 V/3A USB C that is not included in the package. The device only comes with a USB cable and no adapter. There are no battery options.
- The device has only one LED indicator that flashes green when there is activity.
- The latest firmware version can be found [here](https://downloads.rakwireless.com/LoRa/RAK7248/Firmware/RAK7248_Latest_Firmware.zip).
- Instructions on how to set up the new firmware can be found [here](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Developer-Gateway-Firmware-Burning/).

### Setup Your AWS Account and Permissions

Refer to the instructions found at the [Set up your AWS Account](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html) guide. Follow the steps outlined in these sections to create your account and a user and get started:

1. Sign up for an AWS account.
2. Create a user and grant permissions. 
3. Open the AWS IoT console. 

**Pay special attention to the Notes.**

### Create Resources in AWS IoT

Refer to the instructions found at the [Create AWS IoT Resources](https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html) guide. Follow the steps outlined in these sections to provision resources for your device:

1. Create an AWS IoT Policy.
2. Create a thing object. 

**Pay special attention to the Notes.**

 

### Install the AWS Command Line Interface

To install the AWS CLI on your host machine, refer to the instructions found at the [Installing the AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) guide. Installing the CLI is needed to complete the instructions in this guide.

Once you have installed AWS CLI, configure it as per the instructions in this [online guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config). Set the appropriate values for Access key ID, Secret access key, and AWS Region. You can set the output format to "json" if you prefer.



### Install AWS IoT Greengrass

#### Flash Raspberry Image to SD Card

1. Download the [RAK7248-AWS-GreengrassV2](https://downloads.rakwireless.com/LoRa/AWS_GreengrassV2/RAK7248-AWS-GreengrassV2.zip) image.
2. Download the [balenaEtcher ](https://www.balena.io/etcher/)software. There are options for Windows, macOS, and Linux. Clicking the **Download** button will provide you with the software directly, no installation is required.
3. Flash image to SD Card. 

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/greengrass/2.etcher.jpg"
  width="70%"
  caption="Flashing Raspberry Pi Image"
/>
#### Download the AWS IoT Greengrass Core Software

1. Greengrass has already been included in the SD card image, its directory is **~/greengrass-nucleus**.

You can also download the latest Greengrass core software and install it with commands as follows:

```bash
 $ rm ~/greengrass-nucleus -rf  
 $ wget  https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip  
 $ unzip greengrass-nucleus-latest.zip -d  ~/greengrass-nucleus  
 $ rm greengrass-nucleus-latest.zip 
```

2. Verify the version of the AWS IoT Greengrass Core software:

```bash
 $ java -jar  ~/greengrass-nucleus/lib/Greengrass.jar --version    
```

3. You will see the Greengrass version displayed - similar to: **AWS Greengrass v2.4.0**.

##### Provide Your Credentials

Run the following commands to provide the credentials to the AWS IoT Greengrass Core software.

```bash
export AWS_ACCESS_KEY_ID=<the access key id for your account>
```

```bash
export AWS_SECRET_ACCESS_KEY=<the secret access key for your account>
```

##### Run the Installer

1. Run the installer as shown below. Modify the values as per your region, install directory, and thing name. 
2. Use the **--provision true** option to have the installer set up the "thing" and required policies for you. If you prefer to configure Greengrass manually, see the [online guide](https://docs.aws.amazon.com/greengrass/v2/developerguide/manual-installation.html).

```bash
sudo -E java -Droot="/greengrass/v2" -Dlog.store=FILE \

-jar ./GGCoreInstall/lib/Greengrass.jar \

--aws-region us-west-2 \

--thing-name thing-name \

--tes-role-name GreengrassV2TokenExchangeRole \

--tes-role-alias-name GreengrassCoreTokenExchangeRoleAlias \

--component-default-user ggc_user:ggc_group \

--provision true \

--setup-system-service true \

--deploy-dev-tools true
```

3. If all goes well, you will see the following output on the device console:

```
Successfully configured Nucleus with provisioned resource details!

Configured Nucleus to deploy aws.greengrass.Cli component

Successfully set up Nucleus as a system service
```

4. The local development tools (specified by the --deploy-dev-tools option) take some time to deploy. The following command can be used to check the status of this deployment:

```bash
aws greengrassv2 list-effective-deployments --core-device-thing-name thing-name
```

5. When the status is SUCCEEDED, run the following command to verify that the Greengrass CLI is installed and runs on your device. Replace /greengrass/v2 with the path to the base folder on your device as needed.

```bash 
/greengrass/v2/bin/greengrass-cli help
```

### Create a Hello World Component

In Greengrass v2, components can be created on the edge device and uploaded to the cloud, or vice versa.

#### Create the Component on Your Edge Device

Follow the instructions online under the section [To create a Hello World component](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html) to create, deploy, test, update and manage a simple component on your device.

#### Upload the Hello World Component

Follow the instructions online at [Upload your component](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html) to upload your component to the cloud, where it can be deployed to other devices as needed.


### Debugging

If you experience any issues, you can check the logs located in the **/var/log/** directory. 

### Troubleshooting

If you are unable to ssh to the device:

1. Check that your Wi-Fi is connected to **RAKWireless_XXXX**.
2. Try ping **192.168.230.1**