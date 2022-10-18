---
rak_desc: Contains a comprehensive guide in setting up both your RAK7268 V2 with TTN and ChirpStack.
rak_img: /assets/images/wisgate/rak7268-v2/overview/RAK7268V2.png
tags:
  - ChirpStack
  - TTN
  - wisgate
  - RAK7268V2
  - RAK7268CV2
prev: ../Quickstart/
next: ../Datasheet/
---

# RAK7268V2/RAK7268CV2 Supported LoRa Network Servers


## The Things Network (TTN)

### WisGateOS 2 Basics Station to TTNv3

This tutorial illustrates how to configure and connect your RAK Edge Gateway V2 with WisGateOS 2 to a LoRaWAN Network Server by using the Basics Station protocol. For this example, it will be shown how to connect the gateway to TTNv3.


:::tip 📝 NOTE:

LoRa Basics Station is an implementation of a LoRa packet forwarder. This protocol simplifies the management of large-scale LoRaWAN Networks. More information about the Basics Station protocol can be found in the [explanatory document](https://lora-developers.semtech.com/build/software/lora-basics/lora-basics-for-gateways/) provided by Semtech.
:::

#### Registering the Gateway

1. Log in first and head on to [TTNv3 website](https://eu1.cloud.thethings.network/console). If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/1.ttn.png"
  width="100%"
  caption="The Things Stack login page"
/>


:::tip 📝 NOTE:
This tutorial is for the EU868 Frequency band.
:::


2. To register a commercial gateway, choose **Register a gateway** (for new users that do not already have a registered gateway) or go to **Gateways** > **+ Add gateway** (for users that have registered gateways before).


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/2.console-page.png"
  width="100%"
  caption="Console Page after a successful login"
/>


3. You will be redirected to the **Register gateway** page.

4. In the **Gateway EUI** field, type the EUI of the gateway. The gateway's EUI can be found either on the sticker on the casing or by going to the **LoRa Network Settings** page in the **LoRa Gateway** menu accessible via the Web UI. Instructions on how to access your gateway via Web UI can be found in the product's [Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268-V2/Quickstart/).

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/3.register-gateway.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/4.adding-gateway.png"
  width="100%"
  caption="Adding a gateway"
/>


6. To register your gateway, click **Register gateway**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/5.gateway-added.png"
  width="100%"
  caption="Successfully added a gateway"
/>


TTNv3 supports TLS server authentication and Client token, which requires a trust file and a key file to configure the gateway to successfully connect it to the network.

#### Generating the Token

1. To generate a key file, from the **Overview page** of the registered gateway navigate to **API keys**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/6.overview-page.png"
  width="100%"
  caption="Overview page"
/>


2. On the **API keys page**, choose **+ Add API key**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/7.api-key-page.png"
  width="100%"
  caption="API key page"
/>


3. In the **Name field**, type the name of your key (for example - mykey). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/8.generate-api-key.png"
  width="100%"
  caption="Generating an API key"
/>


4. To generate the key, choose **Create API key**. The following window will pop up, telling you to copy the key you just generated.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/9.copy-api-key.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/10.working-mode.png"
  width="100%"
  caption="Changing the working mode"
/>


3. Expand the Basics Station settings by clicking **Configure Basics Station server setup.**


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/11.basics-station.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/12.basics-station-settings.png"
  width="100%"
  caption="Basics Station settings"
/>


5. To save the changes, click **Save Changes**.

Now, you can see that their gateway is connected to TTNv3 as Basics Station.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/ttn/13.successful-connection.png"
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

1. Start by accessing the gateway. To see how to access the gateway, refer to the [**Access the Gateway**](/Product-Categories/WisGate/RAK7268-V2/Quickstart/#access-the-gateway) section.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/1.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the [**Access the Gateway**](/Product-Categories/WisGate/RAK7268-V2/Quickstart/#access-the-gateway) section.

3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a Built-in network server.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/2.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/3.packet-forwarder.png"
  width="100%"
  caption="Setting Packet Forwarder Mode"
/>


4. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected.

5. To point the gateway to the ChirpStack network using the packet forwarder, you only need to set the **Server address** of the ChirpStack.

In this case, the ChirpStack is installed locally on an Ubuntu machine on IP `192.168.0.130` (yours will be different). The other fields are filled with default parameters and can be left by default.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/4.packet-forwarder.png"
  width="70%"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/5.login.png"
  width="100%"
  caption="ChirpStack Login page"
/>


2. Login using the following credentials:

- Username/email: **admin**
- Password: **admin**


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/6.dashboard.png"
  width="100%"
  caption="ChirpStack dashboard"
/>


3. Head to **Gateways**, on the left pane.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/7.list.png"
  width="100%"
  caption="Gateway list"
/>


4. By default, no gateways are registered. To register one, click **+ Create**.

5. In the **General menu**, you need to set the gateway parameters.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/8.register.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/9.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


7. If everything is set correctly, the **Last seen** status will state a few seconds ago in a while.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/10.connect-gateway.png"
  width="100%"
  caption="Connect the gateway"
/>


You can click the gateway name to inspect the gateway traffic.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/11.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


##### Connect the Gateway via MQTT Bridge

In this method, you will configure the gateway’s built-in gateway bridge to send data to the ChirpStack Broker.

1. Start by accessing the gateway. To access the gateway check the Access the gateway.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/12.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/13.network-server.png"
  width="100%"
  caption="Network server settings"
/>

4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/14.packet-forward.png"
  width="100%"
  caption="Setting Packet Forwarder Mode"
/>


5. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected. To use the built-in gateway bridge, from the **Protocol** select **LoRa Gateway MQTT Bridge**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/15.mqtt-bridge.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/16.access-chirpstack.png"
  width="70%"
  caption="PuTTY client"
/>


7. In the `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`, find the **Integration** section and change the marshaler to JSON.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/17.payload-marshaler.png"
  width="100%"
  caption="Payload Marshaler"
/>

8. Save and exit the file.

9. However, if you are using an earlier version of ChirpStack (V2), you will need to select **MQTT for ChirpStack 2. x**. The option **MQTT for Embedded RAK Network Server** is for a mesh network, where one gateway plays the role of a network server.

For this example, you will choose **MQTT for ChirpStack 3. x (PROTOBUF).**

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/18.mqtt.png"
  width="100%"
  caption="MQTT for Chirpstack Protocol"
/>


10. By default, the built-in gateway bridge is pointed to the local Broker (127.0.0.1). To point the gateway to the ChirpStack network, you need to set the ChirpStack Broker address in the **MQTT Broker Address** field.

In this case, the ChirpStack is installed locally on an Ubuntu machine on IP 192.168.0.130 (yours will be different). The default port that the MQTT Broker uses is 1883.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/19.packet-forwarder.png"
  width="70%"
  caption="Configuring Packet Forwarder to ChirpStack"
/>


11.  Click **Save changes** to save the changes.

12.  Now you need to register the gateway in the ChirpStack Network server. When Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected by default. To register the gateway in ChirpStack, see **Registering gateway in ChirpStack Network server** section.

13.  If everything is set correctly, the **Last seen** status will state **a few seconds ago**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/20.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


You can click the gateway's name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/21.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

##### Connecting the Gateway via Basics Station

1. In this method, you will connect the gateway to the **ChirpStack** via **Basics Station**. The **LoRa Basics™ Station** is an implementation of a LoRa packet forwarder.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/22.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. n the left side, head to LoRa. By default, the gateway is configured to work as a Built-in network server.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/23.network.png"
  width="100%"
  caption="Network Server Settings"
/>


4. For **Work Mode**, select **Basics station** and click **Configure Basics Station** server setup to expand the Basics Station settings.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/24.basic-station.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/25.basics-station.png"
  width="100%"
  caption="Configuring Basics Station to ChirpStack"
/>


5. Click **Save changes** to save the changes.

Now your gateway is configured to work as Basics Station, and it is pointed to the ChirpStack gateway bridge. The default installation of the ChirpStack setups the backend configuration of the ChirpStack gateway bridge to `semtech_udp`.

6. To configure the backend of the ChirpStack gateway bridge, you need to access the configuration file of the bridge. To access it, you will need an SSH terminal. In this case, you will use a PuTTY client.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/26.access.png"
  width="70%"
  caption="PuTTY client"
/>


Copy the configuration file's text in the [ChirpStack Gateway bridge webpage](https://www.chirpstack.io/gateway-bridge/install/config/) and place it in `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`.

7. In the file, find the **Gateway backend configuration** paragraph and replace the type with `basic_station.`


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/27.bridge-type.png"
  width="100%"
  caption="Configure gateway bridge type"
/>


8. Now scroll down until you find the **Concentrator configuration** paragraph and uncomment the following text as shown below. Uncommenting the text, enables the configuration for the SX1301 concentrator chips.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/28.bridge-backend.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/29.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/30.gateway-details.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/31.udp-port.png"
  width="100%"
  caption="Opened 1700 UDP port"
/>

1. Start by accessing the gateway.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/32.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/33.network-server.png"
  width="100%"
  caption="Network server settings"
/>



4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/34.packet-forwarder.png"
  width="100%"
  caption="Setting packet forwarder settings"
/>


When Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected by default.

To point the gateway to the ChirpStack network using the packet forwarder, you only need to set the When Packet Forwarder mode. The **Semtech UDP GWMP Protocol** is selected by default of the ChirpStack.

In this case, the ChirpStack is installed on the AWS cloud instance with public IP **18.156.176.220** (yours will be different). The default ports that the packet forwarder is using are 1700.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/35.configure-packet.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/36.login-page.png"
  width="100%"
  caption="ChirpStack login page"
/>


3. Login using the following credentials:

- Username/email: **admin**
- Password: **admin**


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/37.dashboard.png"
  width="100%"
  caption="ChirpStack dashboard"
/>

4. On the left pane, head to **Gateways**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/38.list.png"
  width="100%"
  caption="Gateway list"
/>


5. By default, no gateways are registered. To register one, click **+ Create.**

6. In the **General** menu, you need to set the gateway parameters.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/39.register.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/40.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>


8. You can click the gateway name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/41.gateway-details.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/42.login-page.png"
  width="100%"
  caption="Login page"
/>


1. Start by accessing the gateway.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/43.login.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.

3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as **Built-in network server**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/44.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. From **Work Mode**, select **Packet forwarder**. Click **Choose from the available protocols** to expand the Packet forwarder settings.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/45.packet-forwarder.png"
  width="100%"
  caption="Setting packet forwarder mode"
/>


5. By default, when Packet Forwarder mode is chosen, the **Semtech UDP GWMP Protocol** is selected. To use the built-in gateway bridge, from the **Protocol** select **LoRa Gateway MQTT Bridge**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/46.mqtt-bridge.png"
  width="70%"
  caption="LoRa Gateway MQTT bridge"
/>


The latest ChirpStack version supports both **MQTT for ChirpStack 3.x (JSON)** and **MQTT for ChirpStack 3.x (PROTOBUF).**

:::tip 📝 NOTE
If you want to use JSON protocol, you need to change the payload marshaler in the gateway bridge `.toml` file to json. By default, the marshaler is protobuf.
:::

6. To configure the payload marshaler, you need to access the configuration file of the gateway bridge. You can access it with an SSH connection. In this case, you will use the SSH client PuTTY to access the configuration files. How to do this is explained in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#accessing-instance-via-ssh) section.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/47.access-chirpstack.png"
  width="70%"
  caption="PuTTY client"
/>


7. In the `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml` find the Integration section and change the marshaler to `json`.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/48.payload-masher.png"
  width="100%"
  caption="Payload Masher"
/>

8. Save and exit the file.

However, if you are using an earlier version of ChirpStack (V2), you will need to select **MQTT for ChirpStack 2.x.** The option **MQTT for Embedded RAK Network Server** is for a mesh network, where one gateway plays the role of a network server. For this example, you will choose **MQTT for ChirpStack 3.x (PROTOBUF)**.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/49.chirpstack-protocol.png"
  width="100%"
  caption="MQTT for ChirpStack protocol"
/>


By default, the built-in gateway bridge is pointed to the local Broker (127.0.0.1). To point the gateway to the ChirpStack network, you need to set the ChirpStack Broker address in the **MQTT Broker Address** field.

In this case, the ChirpStack is installed on an AWS cloud instance with public IP `18.156.176.220` (yours will be different). The default port that the MQTT Broker uses is 1883.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/50.configure.png"
  width="70%"
  caption="Configuring packet forwarder to ChirpStack"
/>


9. Click **Save changes** to save the changes.

If everything is set correctly, the **Last seen status** will state a few seconds ago. You can click the gateway name to inspect the gateway traffic.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/51.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/52.gateway-details.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/53.enable-port.png"
  width="100%"
  caption="Enable 8080 and 3001 port"
/>


1. Start by accessing the gateway.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/54.login-page.png"
  width="100%"
  caption="Login page"
/>


2. Login using the set credentials you have set in the **Access the gateway**.
3. On the left side, head to **LoRa®**. By default, the gateway is configured to work as a **Built-in network server**.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/55.network-server.png"
  width="100%"
  caption="Network server settings"
/>


4. For **Work Mode**, select **Basics station** and click **Configure Basics Station** server setup to expand the Basics Station settings.

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/56.basics-station.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/57.basics-station.png"
  width="70%"
  caption="Configuring Basics Station to ChirpStack"
/>


5. Click **Save changes** to save the changes.

Now your gateway is configured to work as Basics Station and it is pointed to the ChirpStack gateway bridge. The default installation of the ChirpStack setups backend of the ChirpStack gateway bridge as `semtech_udp`.

To configure the backend of the ChirpStack gateway bridge, you need to access the configuration file of the bridge. To access it, you will need an SSH terminal. In this case, you will use the PuTTy client.

To access the ChirpStack configuration files, you need to access the instance. How to do this is explained in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/Amazon-Web-Services/#accessing-instance-via-ssh) section.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/58.access-chirpstack.png"
  width="70%"
  caption="PuTTY client"
/>


6. In the ChirpStack Gateway bridge webpage, copy the configuration file text and place it in `/etc/chirpstack-gateway-bridge/chirpstack-gateway-bridge.toml`.

7. In the file, find the gateway backend configuration paragraph and replace the type with `basic_station`.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/59.bridge-type.png"
  width="100%"
  caption="Configure gateway bridge type"
/>


8. Now scroll down until you find the **Concentrator configuration** paragraph and uncomment the following text as shown below.


<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/60.bridge-backend.png"
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
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/61.registered-gateway.png"
  width="100%"
  caption="Registered gateway"
/>

<rk-img
  src="/assets/images/wisgate/rak7268-v2/supported-lora-network-servers/chirpstack/62.gateway-details.png"
  width="100%"
  caption="Gateway details"
/>


Now your gateway is connected to the ChirpStack Network server.

