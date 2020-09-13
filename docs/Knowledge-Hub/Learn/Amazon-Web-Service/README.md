---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/aws.png
rak_desc: This document walks through the details on the steps on how to configure the free cloud services of Amazon to work with the WisGate Edge Gateways.
tags:
  - Deployment-Guide
  - WisGate
header:
  title: Amazon Web Service
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 8/31/2020 3:59 PM
---

# Amazon Web Service


* [Installing Chirpstack](#installing-chirpstack)
* [Installing the Gateway Bridge](#installing-the-gateway-bridge)
* [Amazon Web Service Security](#amazon-web-service-security)
* [Configuring the Gateway](#configuring-the-gateway)


This document walks through the details on the steps on how to configure the free cloud services of [Amazon](http://aws.amazon.com/) to work with your **RAK7249 Macro Outdoor Gateway**. Follow each and every step discussed in this document to have a fully functional system. If you encounter errors, kindly contact us through the email provided in the Product Overview.

### Creating an Account

To enjoy the free cloud services of Amazon, make an account through their [Amazon Web Service](http://aws.amazon.com/) page.

    Considerations:
      1. Limited to 750 hours per month for a period of 12 months
      2. A debit card must be linked to verify your identity in order to use the service.

### Configuring the Instance

1. After you have logged into your account, you need to select what instance you are going to be running.

:::tip 📝 NOTE
 For the purpose of this tutorial, we are going to be using "**EC2**". Select it in the **AWS Management Console**.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/1.aws-console.png"
  width="100%"
  caption="AWS Management Console"
/>

2. In the following screen you can see your running instances, key pairs, security groups, etc. Press the blue “**Launch instance**” button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/2.launch-instance.png"
  width="100%"
  caption="Launching an Instance"
/>

3. There is a ton of choices for the operating system, however **Ubuntu** will be used for tutorial. Scroll down and choose **Ubuntu Server 18.04 LTS** (latest at the time of this document). Click the “**Select**” button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/3.selecting-os.png"
  width="100%"
  caption="Selecting the Operating System"
/>

4. In the next window, you can configure your Instance. However, leave it as it is. Just select the _**t2.Micro**_ for the **instance type** as in Figure 4 shown below and click “**Review and Launch**”.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/4.select-instance-type.png"
  width="100%"
  caption="Selecting the Instance Type"
/>

5. Confirm your choice and Launch. Security groups will be edited in the next section so you can go ahead and confirm your choice by pressing the “**Launch**” button as shown in Figure 5 below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/5.launch-instance-f.png"
  width="100%"
  caption="Launching the Instance"
/>

### Accessing Instance via SSH

To have an SSH session to the Instance, you nee to create the appropriate access keys. Thus, after Launching, you will see window the same as Figure 6 below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/6.key-pair.png"
  width="75%"
  caption="Key pair creation"
/>

1. We will choose to "**Create a new key pair**" from the drop-down menu and give it an appropriate name. Finally, click the “**Download Key Pair**” button shown in Figure 7.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/7.new-key-pair.png"
  width="75%"
  caption="Creating a new key pair"
/>

2. After saving the Keys to your chosen location, you can Launch the instance via the blue button "**Launch Instances**".

3. In Figure 8, you can see the parameters of your instance. Note the fields in the highlighted with the red rectangle. These are you real **URL** and **IP Address** for accessing this instance.

:::tip 📝 NOTE
 The URL and IP Address shown in Figure 8 are just examples. You will have a different set of information on your setup.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/8.instance-param.png"
  width="100%"
  caption="Instance Parameters"
/>

4. In order to have SSH access to the Instance we will use [**PuTTY**](https://www.putty.org/). Download and install it.

5. In the **AWS Instance** page, mark your instance and click “**Connect**”. This will bring the instructions page out. Follow the procedure as well.

:::tip 📝 NOTE
Convert first the keys from `.pem` format to `.ppk` format as this is what PuTTY is used for. This is done with PuTTYgen, which comes standard with the PuTTY package.
:::

6. Run **PuTTYgen** (if you are using Windows, just type it in the start menu after installing PuTTY and you will find it).

7. In the main window, select the **Type of key to generate** as **RSA** (should be the default choice). In older versions, it is named **SSH-2 RSA**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/9.puttygen.png"
  width="75%"
  caption="PuTTYgen main window"
/>

8. Press “**Load**” in order to select the key files generated by AWS (make sure to select **All Files (_._)** from the drop down menu as by default only **.ppk** files are shown

9. After successfully loading the keys, you can save them in **.ppk** with the “**Save private key**” button. Use the same name as the original **.pem** file. The **ppk** extension will be added automatically. PuTTYgen displays a warning about saving the keys without a passphrase. Ignore it an choose **Yes**.

:::tip 📝 NOTE
 A passphrase on a private key is an extra layer of protection. Even if your private key is discovered, it cannot be used without the passphrase. The downside to using a passphrase is that it makes automation harder because human intervention is needed to log on to an instance, or to copy files to an instance.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/10.puttygen-public-key.png"
  width="75%"
  caption="PuTTYgen Saving the public key"
/>

10. As your Private Key is now in the correct format, now you can create an SSH session with PuTTY. Open the client and select SSH.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/11.putty-main.png"
  width="75%"
  caption="PuTTY main window"
/>

11. You need the correct **Host Name**. Take note of the Host Name syntax provided below together with an example for a better understanding:

```
user_name@public_dns_name
```

* **Example**: 
    * **user_name**: ubuntu
    * **public_dns_name**: ec2-3-120-237-38.eu-central-1.compute.amazonaws.com
    * **Host name**: [ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com](mailto:ubuntu@ec2-3-120-237-38.eu-central-1.compute.amazonaws.com)
    * To know more about "**public_dns___name**" , follow the instructions shown in Figure 12.


<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/12.public-dns-name.jpg"
  width="75%"
  caption="Knowing your Public DNS Name"
/>

* Afterwhich, fill-in the corresponding Host Name as shown in Figure 13 below.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/13.putty-hostname.png"
  width="75%"
  caption="PuTTY main window with Host Name"
/>

12. Now, you need to tell PuTTY to use the keys. In the **Category panel**, expand **Connections>SSH>Auth**. Click the “**Browse**” button and look for you **.ppk** file

:::tip 📝 NOTE
 If you want to save this configuration for future use, go back to the **Session** tab and enter a name in the **Saved Session** text box and click **Save**.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/14.putty-ssh-auth.png"
  width="75%"
  caption="PuTTY SSH Authentication"
/>

13. Click the “**Open**” button to initiate the session. If this is your first time connecting, PuTTY will ask for confirmation (click **Yes**). You should see the command line window to your instance now.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/15.putty-ssh-command.png"
  width="75%"
  caption="PuTTY SSH Command line"
/>

# Installing Chirpstack

It is always a good idea to make an update and upgrade of your packages. In order to do so run the following commands in the terminal:

```sh
sudo apt update
```
```sh
sudo apt upgrade
```

1. After the procedure is completed, install ChirpStack and its dependencies. To do this, first we need to install Git with the command:

```sh
sudo apt install git
```

2. Next, we **clone** the **RAKwireless Ubuntu** ChirpStack repository:

```sh
git clone https://github.com/RAKWireless/ChirpStack_on_Ubuntu
```

3. After the cloning is complete, open the newly created folder with the command:

```sh
cd ChirpStack_on_ubuntu
```

4. Run the installation script:

```sh
sudo ./install.sh
```

5. After the installation is completed, check if all went well by executing these commands:

```sh
journalctl -u chirpstack-network-server -f -n 50
```
```sh
journalctl -u chirpstack-application-server -f -n 50
```

6. You should see no errors as in Figure 16. Make sure you interrupt the output of the commands above with the key combination “Ctrl+z” so you can continue with the configuration process.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/16.chirpstack-journal.png"
  width="100%"
  caption="ChirpStack Journal Control Output (no errors)"
/>


In case you want to use the Semtech Packet Forwarder to connect your Gateway to the LoRa Network Server proceed [here](#installing-the-gateway-bridge). If you are going to use the MQTT Bridge instead proceed directly [here](#amazon-web-service-security)

* Below is the text form of the logs shown in Figure 16:

```
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-network-server -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Network Server.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Network Server" band=EU_863_870 docs="https://www.chirpstack.io/" net_id=000000 version=3.9.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up storage module"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up Redis client"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: connecting to PostgreSQL"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: applying PostgreSQL data migrations"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="storage: PostgreSQL data migrations applied" count=0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="gateway/mqtt: connecting to mqtt broker" server="tcp://localhost:1883"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="no geolocation-server configured"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="configuring join-server client" ca_cert= server="http://localhost:8003" tls_cert= tls_key=
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="backend/gateway: connected to mqtt server"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="gateway/mqtt: subscribing to gateway event topic" qos=0 topic=gateway/+/event/+
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="api: starting network-server api server" bind="0.0.0.0:8000" ca-cert= tls-cert= tls-key=
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting downlink device-queue scheduler"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-network-server[5588]: time="2020-06-18T10:20:29Z" level=info msg="starting multicast scheduler"
^Z
[4]+  Stopped                 journalctl -u chirpstack-network-server -f -n 50
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-application-server -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Application Server.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Application Server" docs="https://www.chirpstack.io/" version=3.10.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up storage package"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setup metrics"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: setting up Redis client"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: connecting to PostgreSQL database"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: applying PostgreSQL data migrations"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="storage: PostgreSQL data migrations applied" count=1
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: TLS config is empty"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: connecting to mqtt broker" server="tcp://localhost:1883"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-application-server[5591]: time="2020-06-18T10:20:29Z" level=info msg="api/as: starting application-server api" bind="0.0.0.0:8001" ca_cert= tls_cert= tls_key=
```

# Installing the Gateway Bridge 

In this section, an outline is provided on how to perform the installation. For detailed information, you can visit [Chirpstack.io](https://www.chirpstack.io/).

1. Run the following commands provided below to update the Ubuntu Repositories.

```sh
sudo apt-key adv --keyserver keyserver.ubuntu.com --recv-keys 1CE2AFD36DBCCA00
```

```sh
sudo echo "deb https://artifacts.loraserver.io/packages/3.x/deb stable main" | sudo tee /etc/apt/sources.list.d/loraserver.list
```

```sh
sudo apt-get update
```

* This updates the Ubuntu Repositories.

2. Proceed with installing the Bridge itself:

```sh
sudo apt-get install lora-gateway-bridge
```

3. Start the Bridge service:

```sh
sudo systemctl start lora-gateway-bridge
```

4. Check if it is working as it should using the command as shown same with the snippet below:

```sh
journalctl -u lora-gateway-bridge -f -n 50
```
<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/17.gateway-bridge-journal.png"
  width="100%"
  caption="Gateway Bridge Journal Control Output (no errors)"
/>

```
ubuntu@ip-172-31-33-125:~$ journalctl -u chirpstack-gateway-bridge -f -n 50
-- Logs begin at Wed 2020-06-17 11:59:21 UTC. --
Jun 18 10:20:29 ip-172-31-33-125 systemd[1]: Started ChirpStack Gateway Bridge.
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="starting ChirpStack Gateway Bridge" docs="https://www.chirpstack.io/gateway-bridge/" version=3.8.0
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="backend/semtechudp: starting gateway udp listener" addr="0.0.0.0:1700"
Jun 18 10:20:29 ip-172-31-33-125 chirpstack-gateway-bridge[5596]: time="2020-06-18T10:20:29Z" level=info msg="integration/mqtt: connected to mqtt broker"
```

# Amazon Web Service Security

By default, all inbound traffic to an AWS Instance is blocked, only port 22 (SSH) is open. You need to add a set of rules in order for the Gateway and LoRa Network Server to be able to communicate:

* The Semtech Packet Forwarder needs **UDP port 1700**;
* MQTT Bridge (unsecured) needs **TCP port 1883**;
* MQTT Bridge (secured) needs **TCP port 8883**; 
* Chirpstack Web Ui needs **TCP port 8080**.

1. Open the Security Groups tab in the AWS Dashboard:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/18.aws-sec-group.png"
  width="100%"
  caption="AWS Security Groups"
/>

2. Select your desired Security Group (**Ubuntu Instance**). If you have multiple instances you can use the date and time of creation of the group as a guide to which is the one you want. Click the “**Action**” button and from the drop-down menu select **Edit Inbound Rules**:

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/19.inbound-rules.png"
  width="100%"
  caption="Security Group Inbound Rules"
/>

3. In the opened window, press the “**Add Rule**” button and add all the 4 rules mentioned before.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/20.add-inbound-rules.png"
  width="100%"
  caption="Adding Inbound Rules"
/>

:::tip 📝 NOTE
 It is a good practice to name them in accordance with what each of them represents.
:::

4. Make sure to **Save** with the button in the lower right corner.

5. Finally, check if the rules you created are working by entering your instance Public IP address using port 8080 in a browser window. You should see the Login page of the Chirpstack Web UI (for example `3.120.237.38:8080` as in the image below).

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/21.chirpstack-login.jpg"
  width="100%"
  caption="Chirpstack Login Page"
/>

:::tip 📝 NOTE
 The log-in credentials are provided below. Also, there are profiles created in the RAKwireless Chirpstack installation, so you do not need to make those yourself and you can directly proceed to adding your Gateway.
* **Username**: admin
* **Password**: admin
:::

# Configuring the Gateway

## Packet Forwarder Set-up

1. In the Web Management Platform, navigate through **LoRa Network > Network Settings > Packet Forwarder Settings > General Setup**, and set the Protocol in the drop-down list to **Semtech UDP GWMP Protocol**. You only need to change the Server Address to forward the traffic to your ChirpStack running on the Ubuntu Instance (AWS). Enter your Instance Public IP Address in the field marked with the red rectangle in the image below:

:::tip 📝 NOTE
Read the [LoRa Network](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) section in the Web Management Platform to know more about the other modes aside from the Packet Forwarder Setup.
:::

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/22.chirpstack-packet-forwader.png"
  width="100%"
  caption="ChirpStack Packet Forwarder Configuration"
/>

2. Click "**Save and Apply**" and go to your ChirpStack Web UI running on the AWS Instance (IP Address:8080). Go to the Gateway tab. Press the “**Create**” button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/23.chirpstack-add-gateway.png"
  width="100%"
  caption="ChirpStack Gateways Creation"
/>

3. In the next window, input the **Gateway Name, EUI and Description**. Select a network server and Service Profile from the drop-down menu (remember those are pre-configured with the RAKwireless image). Then, click the “**Create Gateway**” button.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/24.chirpstack-gateway-param.png"
  width="100%"
  caption="ChirpStack Gateway Parameters"
/>

4. Assuming you entered the parameters correctly you should see your Gateway status as seen is a few second in the Gateway Details tab. You can also monitor Live LoRa Frames in the tab with the same name to see incoming traffic.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/25.chirpstack-gateway-details.png"
  width="100%"
  caption="ChirpStack Gateway Details"
/>

## MQTT Bridge Set-up

If you want to use the MQTT Bridge to forward your LoRa Traffic to your LoRa Network Server, you need to configure your Gateway use the Bridge instead of the Packet Forwarder. 

1. Navigating through **LoRa Network-> Network Settings-> Packet Forwarder Settings-> General Setup**, set the Protocol in the drop-down list to **LoRa Gateway MQTT Bridge**. Then, click "**Save and Apply**".

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/26.chirpstack-mqtt-bridge.png"
  width="100%"
  caption="Gateway MQTT Bridge Protocol"
/>

2. Next, choose the type of LoRa Network Server you are going to be using.

3. Set the address to the address of the AWS Instance and the **port to 1883**, **Save and Apply**.

<rk-img
  src="/assets/images/knowledge-hub/deployment-guide/amazon-web-service/27.chirpstack-gateway-mqtt-param.png"
  width="100%"
  caption="Gateway MQTT Bridge Parameters"
/>

4. Lastly, register your Gateway to Chirpstack if you have not done so. You can follow the steps undergone in the Packet Forwarder Set-up section of the [**Web Management Platform**](/Knowledge-Hub/Learn/Resources/Web-Management-Platform/#lora®-network) document.

