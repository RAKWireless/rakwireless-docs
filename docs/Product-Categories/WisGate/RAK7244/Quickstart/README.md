---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7244
---

# Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wisgate/rak7244/quickstart/2.quickstart/rak7244_overview2.jpg"
  width="100%"
  caption="RAK7244 Product Overview"
/> -->

### What do you need?

1. RAK7244 WisGate Developer D4 Gateway
2. 16GB SD Card (included) + Card Reader
3. 5V at least 2.5A Micro USB Power Supply
4. A Windows/Mac OS/Linux Computer


### What's included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/2.quickstart/package.png"
  width="100%"
  caption="RAK7244 WisGate Developer D4 Gateway Package Contents"
/>

## Product Configuration

### Accessing your Gateway

After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the **RAK7244 WisGate Developer D4 Gateway** and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️WARNING
Before powering the Raspberry Pi 4 you should install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

#### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/wifi.png"
  width="80%"
  caption="RAKwireless Access Point"
/>

::: tip 📝 NOTE:
“XXXX” is the last 2 bytes of your RAK7244’s WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
  :::

#### Raspberry Pi 4 Ethernet Port

You can also connect your PC with the gateway through an Ethernet cable. By default, the IP address of the gGateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`.

- To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click **Ethernet**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/network&sharing.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4)**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/ethernetproperties.png"
  width="90%"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/tcpipv4.png"
  width="90%"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your gateway from your PC successfully using the IP Address `192.168.10.10` through SSH.

#### Log into the Gateway

##### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/puttywindows.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`
- If you have connected to the gateway through **Ethernet**, the IP Address is `192.168.10.10`
- It will then prompt you to enter the username and password. The default username and password is provided below:
  - **Username**: pi
  - **Password**: raspberry

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/commandline.png"
  width="80%"
  caption="Command line after log in"
/>

##### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “**Terminal**” and then return:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/mac_terminal.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`"

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/sshmac.jpg"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your gateway, the default password is "**raspberry**".
- If you connect your PC with the gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/loginsuccess.jpg"
  width="80%"
  caption="Log-in Successful Notification"
/>

##### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.


### Accessing the Internet

Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/config-options.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 4 by choosing "**5 Configure WIFI**". By default, the RAK7244 WisGate Developer D4 Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/wifi-config.png"
  width="100%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

:::warning ⚠️WARNING
In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/wifi-ssid.png"
  width="100%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/region.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

:::warning ⚠️WARNING
Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7244 again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the [Reverting to Wi-Fi AP Mode](/Product-Categories/WisGate/RAK7244/Quickstart/#reverting-to-wi-fi-ap-mode) section which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/set-wifi.png"
  width="100%"
  caption="SSID of the Network you want to connect to"
/>

- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/set-password.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

#### Connect through Ethernet

If you want to connect to router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose “**6 Configure LAN**”. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.
- By default, the IP Address of the gateway's Ethernet is `192.168.10.10`

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/gateway-eth-ip.png"
  width="100%"
  caption="Default Gateway Ethernet IP Address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/router-eth-ip.png"
  width="100%"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK then the success message will appear.
- Lastly, reboot the Gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.

```sh
sudo reboot
```

#### Optional Configurations

These configurations under this section are only optional and situational.

##### Reverting to Wi-Fi AP Mode

In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7244 WisGate Developer D4 Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK7244 WisGate Developer D4 Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/rak-ap-file.png"
  width="50%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```
cd > rak_ap
```

- Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your RAK7244 WisGate Developer D4 Gateway and it should work again in Wi-Fi AP Mode.


### Configuring the Gateway

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/gateway_id.png"
  width="100%"
  caption="Config Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN® Server which the Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

:::tip 📝 NOTE:
 A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa® Network Server (TTN, ChirpStack)
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```
<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/gateway_id_cmd.png"
  width="70%"
  caption="Gateway ID using the command line"
/>

#### Setting a new password for the Gateway
It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/set_pi_pwd.png"
  width="100%"
  caption="Set Pi Password"
/>

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/confirm_pwd.png"
  width="100%"
  caption="Confirm Password Change"
/>

3. Alright, the success message for changing password will then pops up.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/success_pwd_change.png"
  width="100%"
  caption="Successful Password Change"
/>

#### Setup RAK Gateway LoRa® Concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa® concentrator**"

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/setup_rak_gateway.jpg"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa® concentrator"
/>

You can choose one of two supported LoRa® Servers here: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/server_ttn.png"
  width="100%"
  caption="Server is TTN"
/>

* **TTN (The Things Network)** - If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/ttn_channel_plan.jpg"
  width="100%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown below.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/success_freq_change.png"
  width="100%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/chirpstack.png"
  width="100%"
  caption="Server Is Chirpstack"
/>

**ChirpStack** - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:

* **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
* **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR) functionality.

First, select "**1 ChirpStack Channel-plan configuration**" for configuring your frequency channel. Then, set the IP address of the ChripStack.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/chirpstack_channel.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/loraserver_ip.png"
  width="100%"
  caption="Default LoRaServer IP Address"
/>

:::tip 📝 NOTE
 The default IP Address is "`127.0.0.1`". If you want to use an external LoRaServer, you need to set it to its IP Address.
:::

* If you have instead selected "**Chirpstack ADR Configure**" you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/adr_settings.png"
  width="100%"
  caption="Chirpstack ADR Enable/Disable"
/>


### Connecting to the Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network through their [documentation](https://www.thethingsnetwork.org/docs/).

* First, you should have connected your gateway into the internet through the router according to the method which has been introduced in the [Accessing the Internet](#accessing-the-internet) section.
* Second, config your Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](#configuring-the-gateway) section.
* Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/ttn_home_page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

* Choose Console then Click Gateways.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/ttn_console.png"
  width="100%"
  caption="The Things Network Console Page"
/>

* All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/ttn_register_gateway.png"
  width="100%"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/register_gateway.png"
  width="100%"
  caption="Registering your Gateway"
/>

* **Gateway EUI** - refers to the Gatway ID you obtained from the previous steps. In case you forgot, just type `gateway-version` in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/gateway_id.png"
  width="100%"
  caption="RAK7244 - LPWAN Developer Gateway ID in SSH"
/>

:::tip 📝 NOTE:
 Make sure to select the "**I'm using the legacy packet forwarder**" check box.
:::

* **Description** - A human readable description of your Gateway.
* **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
* **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
* **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
* **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your gateway is now connected to the The Things Network (TTN).

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/7.connecting to ttn/connection_success.png"
  width="100%"
  caption="RAK7244 - LPWAN Developer Gateway TTN Connection Success"
/>


### Connect the Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [here](https://www.chirpstack.io/).

For the RAK7244 WisGate Developer D4 Gateway there are 2 ways to use the ChirpStack:

#### 1. Using the built-in ChirpStack
There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

* When you use it for the first time after burning the latest firmware, the Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the Gateway boots.
* However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in [Configuring the Gateway](/Product-Categories/WisGate/RAK7244/Quickstart/#configuring-the-gateway) the Gateway section.
* **Optional**: If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your Gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/advanced-ip-scanner.png"
  width="100%"
  caption="IP address of your RAK7244 using IP Scanner"
/>

* There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:
    * **Browser Address**: `<Gateway IP address>:8080` (**Example**: http://192.168.254.176:8080)
    * **Username**: admin
    * **Password**: admin

:::warning ⚠️WARNING
 It is advisable to change your password to tighten the security of your account. You can change this by clicking the "**change password**" button at the user icon.
:::

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirpstack-ui.png"
  width="100%"
  caption="ChirpStack Web-based UI"
/>

* Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/gateways-in-chirpstack.png"
  width="100%"
  caption="Available Gateways in Chirpstack"
/>

* Go to the rak_gateway and see the "**Last seen**" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirpstack-last-seen.png"
  width="100%"
  caption="Last Seen Status"
/>

#### 2. Using an Independent ChirpStack

You can setup an Independent ChirpStack by yourself. This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/).


<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirpstack-guide-ubuntu.png"
  width="100%"
  caption="Chirpstack Getting Started Guide on Ubuntu"
/>

:::warning ⚠️WARNING
 Remember to run the "`sudo gateway-config`" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu [Setup RAK Gateway LoRa® concentrator](/Product-Categories/WisGate/RAK7244/Quickstart/#setup-rak-gateway-lora®-concentrator).
:::

* Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering:
    * **Browser Address**: `<IP Address of ChirpStack>:8080`
    * **Username**: admin
    * **Password**: admin

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirpstack-login.png"
  width="100%"
  caption="ChirpStack Login Page"
/>

* Click "**Gateways**" and Press "+ **CREATE**" to register your Gateway

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirpstack-reg-gateway.png"
  width="100%"
  caption="ChirpStack Registered Gateways"
/>

* Click "**Create**" to register your Gateway and fill up the necessary information.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/reg-own-gateway.png"
  width="100%"
  caption="Registering your own Gateway"
/>

* Fill in the Gateway ID that we got from the [Configuring the Gateway](/Product-Categories/WisGate/RAK7244/Quickstart/#configuring-the-gateway) section, also called Gateway EUI.

* If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/8.connecting to chirpstack/chirsptack-successful-register.png"
  width="100%"
  caption="Successfully Registered the Gateway"
/>

**Congratulations!** :tada: You have connected your gateway to an external ChirpStack Successfully!
