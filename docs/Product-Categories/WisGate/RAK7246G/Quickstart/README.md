---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK7246G. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak7246g/quickstart/RAK7246_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7246G
  - wisgate
  - quickstart
---

# RAK7246G Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/rak7246_overview.jpg"
  width="50%"
  caption="RAK7246G Product Overview"
/> -->


### What Do You Need?

1. RAK7246G WisGate Developer D0 Gateway
2. 16&nbsp;GB SD Card (included) + Card Reader
3. 5&nbsp;V at least 2.5&nbsp;A Micro USB Power Supply (not included)
4. A Windows/Mac OS/Linux Computer
5. Latest [RAK7246G Firmware](/Product-Categories/WisGate/RAK7246G/Datasheet/#firmware)


### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/package-contents.png"
  width="100%"
  caption="RAK7246G Package Contents"
/>

## Product Configuration

### Accessing Your Gateway

After burning the firmware image into the SD Card, make sure you have inserted the SD Card into the **RAK7246G WisGate Developer D0 Gateway** and have the LoRa and GPS Antenna connected. After which, you can now safely power on the gateway.

:::warning ⚠️WARNING
Before powering the RAK7246G WisGate Developer D0 Gateway, you must connect the LoRa and GPS antennas. Not doing so might damage the boards.
:::

#### Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/access_point.png" 
  width="80%" 
  caption="RAKWireless Access Point"
/>

::: tip 📝 NOTE:
“XXXX” is the last 2 bytes of your RAK7246’s WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
  :::

#### Log into the Gateway

##### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/ssh.png" 
  width="60%" 
  caption=" Putty Software for SSH in Windows"
/>

<!-- <Cimg src="/assets/images/wisgate/rak7246g/quickstart/ssh.png" width="70%" figure_number = "2" caption="RAKwireless Access Point"/> -->

- If you have connected to the Gateway through Wi-Fi AP Mode, the IP Address is `192.168.230.1`
- It will then prompt you to enter the username and password. The default username is **"pi"** and the default password is **"raspberry"**

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/command_line.png" 
  width="80%" 
  caption="Command line after log in"
/>

##### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting Command + Spacebar and typing “Terminal” and then return:

<rk-img src="/assets/images/wisgate/rak7246g/quickstart/mac_terminal.png" width="80%" caption="Opening Terminal in Mac OS"/>

Open the terminal of Mac OS. Enter root mode by typing the following command: `sudo -i`

- If you are not in root mode, enter `ssh pi@192.168.230.11` in the terminal to login to your Gateway, the default password is "**raspberry**".

##### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except the root mode.


### Accessing the Internet

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/config-options.png" 
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN Server which the gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi Zero W by choosing "**5 Configure WIFI**". By default, the RAK7246G WisGate Developer D0 Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/config-wifi.png" 
  width="100%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

::: tip 📝 NOTE:
In order to enable Wi-Fi Client Mode, you have to disable first the Wi-Fi AP Mode
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/add_ssid.png" 
  width="100%"
  caption="Add a New SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/country_residence.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

::: warning
Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7246G again via SSH in Wi-Fi AP Mode. If stuck in this situation,  follow [this](#optional-configurations) procedure listed in the Accessing the Internet document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/ssid_new.png"
  width="100%"
  caption="SSID of the Network you want to connect to."
/>

- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/password.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

- Lastly, reboot the gateway using the command `sudo reboot` in the command line and it will connect to the router successfully.

```sh
sudo reboot
```

#### Optional Configurations

These configurations under this section are only optional and situational.

##### Reverting Back to Wi-Fi AP Mode

In the event that you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7246G WisGate Developer D0 Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK7246G WisGate Developer D0 Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/rak_ap.png"
  width="50%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "Command Prompt" or "Terminal", navigate to your SD Card and type this command to generate the "rak_ap" file.

```
cd > rak_ap
```

- Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK7246G WisGate Developer D0 Gateway and it should work again in Wi-Fi AP Mode.


### Configuring the Gateway

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will see a page like the following picture below:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/gateway_id.png"
  width="100%"
  caption="Config Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN Server which the Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process.
4. **Edit packet-forwarder config**- used to open the global_conf.json file, in order to edit LoRaWAN parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.

:::tip 📝 NOTE:
 A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa Network Server (TTN, ChirpStack)
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/gateway_id_cmd.png"
  width="70%"
  caption="Gateway ID using the command line"
/>

#### Setting a new password for the Gateway
It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/set_pi_pwd.png"
  width="100%"
  caption="Set Pi Password"
/>

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/confirm_pwd.png"
  width="100%"
  caption="Confirm Password Change"
/>

3. Alright, the success message for changing password will then pops up.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/success_pwd_change.png"
  width="100%"
  caption="Successful Password Change"
/>

#### Setup RAK Gateway LoRa Concentrator

This menu allows you to select your LoRa frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa concentrator**"

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/setup_rak_gateway.png"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa concentrator"
/>

You can choose one of two supported LoRa Servers here: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/server_ttn.png"
  width="100%"
  caption="Server is TTN"
/>

* **TTN (The Things Network)** - If you choose TTN as the LoRa Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.


<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/ttn_channel_plan.jpg"
  width="100%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown below.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/success_freq_change.png"
  width="100%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack.png"
  width="100%"
  caption="Server Is Chirpstack"
/>

* **ChirpStack** - If you choose Chirpstack as your LoRa Server, choose "2 Server is Other server". First, configure your Regional Frequency Band by choosing the option below:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/reg_frequency.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

For this example, we will be using EU868 Frequency Plan.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/select_chirpstack_plan.png"
  width="100%"
  caption="Selecting the Chirpstack Channel Plan"
/>

Then, set the IP address of the ChirpStack which you want your Gateway to work with:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/default_ip.png"
  width="100%"
  caption="Default LoRaServer IP Address"
/>

:::tip 📝 NOTE:
 Unlike the other RAK boards, the RAK7246G WisGate Developer D0 Gateway does not have a Built-in LoRa Server. In this document, the IP Address of the Chirpstack is shown above. If you have another ChirpStack, you can fill its IP address here too.
:::

You can then open your Chirpstack webpage by using the link below as an example. Make sure to have the [**IP Address**] changed same with what you have input in the previous step.

```http
http://[IP Address]:8080/#/login
```

### Connecting to the Things Network (TTN)

The Things Network is about enabling low power devices to use long range gateways to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network through their [documentation](https://www.thethingsnetwork.org/docs/).

* First, you should have connected your Gateway into the internet through a router according to the method which has been introduced in the [Accessing the Internet](#accessing-the-internet) section.
* Second, config your Gateway and choose TTN as the LoRa Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](#configuring-the-gateway) section.
* Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Login. You will then see the following page:


<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/ttn_home_page.png" 
  width="100%"
  caption="The Things Network Home Page"
/>

* Choose Console then Click Gateways.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/ttn_console.png"
  width="100%"
  caption="The Things Network Console Page"
/>

* All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/adding_gateway.png"
  width="100%"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/register_gateway.png"
  width="100%"
  caption="Registering your Gateway"
/>

* **Gateway EUI** - refers to the Gatway ID you obtained from the previous steps. In case you forgot, just type `gateway-version` in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/gateway_id.png"
  width="100%"
  caption="RAK7246G WisGate Developer D0 Gateway ID in SSH"
/>

:::tip 📝 NOTE:
 Make sure to select the "**I'm using the legacy packet forwarder**" check box.
:::

* **Description** - A human readable description of your Gateway.
* **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
* **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
* **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
* **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your Gateway is now connected to the The Things Network (TTN).


<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/connection_success.png"
  width="100%"
  caption="RAK7246G WisGate Developer D0 Gateway TTN Connection Success"
/>

### Connect the Gateway with Chirpstack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [here](https://www.chirpstack.io/).

#### Using an Independent ChirpStack

You can setup an Independent ChirpStack by yourself. This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/).


<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_ubuntu.png"
  width="100%"
  caption="Chirpstack Getting Started Guide on Ubuntu"
/>

:::warning ⚠️WARNING
  Remember to run the `sudo gateway-config` command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu "**Setup RAK Gateway LoRa concentrator**"!
:::

Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering "**IP Address of ChirpStack:8080**".

* If you are using an Independent Chirpstack, use the IP Address you have set in the Configuring the Gateway document. 
* If you are using the RAK Free Cloud Server Chirpstack `209.250.251.9`

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_login.png"
  width="100%"
  caption="ChirpStack Login Page"
/>

* The default username is "**admin**" and the password is also "**admin**"

:::tip 📝 NOTE:
 If you are using the RAK Cloud Testing ChirpStack, input the account and password you have asked in the forum provided beforehand.
:::

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_home.png"
  width="100%"
  caption="ChirpStack Home Page"
/>

* Click "**Gateways**" in the left menu and Press "**+ CREATE**" to register your Gateway

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_gateway.png"
  width="100%"
  caption="ChirpStack Registered Gateways"
/>

* Click "Create" to register your Gateway and fill up the necessary information.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_register_gateway.png"
  width="100%"
  caption="Registering your own Gateway"
/>

* Fill in the Gateway ID that we got from the last section ([Configuring the Gateway](#configuring-the-gateway)), also called Gateway EUI.

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/gateway_id.png"
  width="100%"
  caption="Gateway ID"
/>

* If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:

<rk-img
  src="/assets/images/wisgate/rak7246g/quickstart/chirpstack_success.png"
  width="100%"
  caption=" Successfully Registered the Gateway"
/>

* By clicking the Live LORAWAN® FRAMES tab, you can check the LoRa packets sent by the nodes into your RAK7246G WisGate Developer D0 Gateway

**Congratulations!** :tada: You have connected your Gateway to an external ChirpStack Successfully!

### Connecting to ResIOT

[ResIOT](https://www.resiot.io/en/) is a platform for LoRaWAN/LPWAN Networks and IoT Projects for Smart City or Industry 4.0. Cost-effective High availability and scalability. Open ResIOT's webpage to sign-up using you e-mail.

<rk-img src="/assets/images/wisgate/rak7246g/quickstart/resiot_home.png" width="100%" caption="ResIOT Home Page"/>

<rk-img 
src="/assets/images/wisgate/rak7246g/quickstart/resiot_signup.png" 
width="100%"
caption="ResIOT Sign-up Page"/>

* After clicking the "**Sign up free**" button, a new window shows up in which you will fill in the necessary information to complete your registration. Afterwhich, click the "SIGN UP FREE" button at the bottom of the webpage.

<rk-img 
src="/assets/images/wisgate/rak7246g/quickstart/resiot_registration.png" 
width="50%"
caption="ResIOT Registration Credentials"
/>

* Once registration is done, a new page will be shown in your screen with you username and a link which will be is your ResIOT application site.

<rk-img 
src="/assets/images/wisgate/rak7246g/quickstart/resiot_application_site.png"
width="100%"
caption="ResIOT Application Site Link"
/>

* Upon clicking the application site link, you will see the login page:

<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_application_login.png"
width="60%"
caption="ResIOT Application Log-in Page"
/>

* Upon successful log-in, you shall then be asked to choose your LoRaWAN Frequency Plan. For this example, choose **EU868 Region.**

<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_freq_plan.png"
width="100%"
caption= "ResIOT LoRaWAN Frequency Plan"
/>

* We will now then setup your RAK7246G WisGate Developer D0 Gateway by clicking the "**Step 1: Add Gateway Wizard**".

<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_add_gateway.png"
width="100%"
caption=" Adding your Gateway in ResIOT"
/>

* A list of LPWAN Gateways are then shown. Choose the item "**IMST iC880a + Raspberry Pi**".

<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_choose_gateway.png"
width="100%"
caption="Choosing IMST iC880a + Raspberry Pi for your RAK7246G WisGate Developer D0 Gateway"
/>

* Afterwhich, a new page will show up asking you to fill in the necessary credentials.

<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_credentials_gateway.png"
width="100%"
caption="Adding Credentials in Gateway Setup"
/>

1. **Name:** You can fill in any content based on your preference
2. **Mac Address:** This is the Wi-Fi MAC Address of your RAK7246G WisGate Developer D0 Gateway. You can get the Mac Address by typing `ifconfig` command in the terminal you accessed through SSH.


<rk-img
src="/assets/images/wisgate/rak7246g/quickstart/resiot_ifconfig.png"
width="70%"
caption="Getting the Wi-Fi MAC Address of the RAK7246G WisGate Developer D0 Gateway"
/>

3. **Gateway EUI/ID:** This is the Gateway ID which you can get in the [Configuring your Gateway](#configuring-the-gateway) section.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/gateway_id.png" 
  width="100%"
  caption="Getting the Gateway ID of the RAK7246G WisGate Developer D0 Gateway"
/>

* After getting all the necessary credentials, fill in the data ang click "**Save Config**" button.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/resiot_save_config.png" 
  width="100%"
  caption="Saving the Gateway Configuration for the RAK7246G in ResIOT"
/>

* Login back to the RAK7246G WisGate Developer D0 Gateway and choose "**4 Edit packet-forwarder config**" through SSH.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/edit_packet_forwarder.png"
  width="80%"
  caption=" Editing the packet-forwarder configuration through SSH"
/>

* It will then open the "**global_conf.json**" file. Edit it to update the LoRaWAN configuration by modifying the content with the data from the ResIOT website same with the image shown below:

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/resiot_data_config.png"
  width="100%"
  caption="ResIOT Data to be inserted in the LoRaWAN Configuration"
/>

* Modify the contents of the Json File with the data from the image shown in the previous step.

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/resiot_json.png" 
  width="100%"
  caption=" The Json Configuration File to be Modified"
/>

* Click the hotkey "Ctrl + X" to stop editing the Json File and Press "Y" to save the modifications.
* If you could see a Green Check Mark :heavy_check_mark: same with the image shown below, that means that you have successfully connected your RAK7246G WisGate Developer D0 Gateway with ResIOT. Congratulations! :tada:

<rk-img 
  src="/assets/images/wisgate/rak7246g/quickstart/resiot_success.png" 
  width="100%"
  caption=" ResIOT Connection Successful"
/>




