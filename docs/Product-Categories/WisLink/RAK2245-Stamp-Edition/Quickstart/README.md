---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2245 Stamp Edition
---

# Quick Start Guide

## Prerequisites
<!-- 
<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/quick-start-guide/ce6miwo22k2n1zqhptaq.png"
  width="60%"
  caption="RAK2245 Stamp WisLink LPWAN Concentrator"
/> -->

### What do you need?

1. **RAK2245 Stamp WisLink LPWAN Concentrator**
2. Raspberry Pi 3B+
3. 16GB SD Card + Card Reader
4. 5V at least 2A Micro USB Power Supply
5. A WIndows/Mac OS/Linux Computer

### What's included in the Package?

- 1pc - RAK2245 Stamp WisLink LPWAN Concentrator
- 1pc - iPEX LoRa® Antenna
- 1pc - Passive GPS Antenna

## Product Configuration

### Accessing your Gateway

After burning the image into the SD Card, make sure you have inserted the SD Card with the Latest Firmware installed to the Raspberry Pi with the RAK2245 Stamp WisLink LPWAN Concentrator Concentrator Module and the LoRa® and GPS Antenna attached to it. After which, you can now safely power on the gateway. In this document, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

::: warning ⚠️ WARNING
Before powering the Raspberry Pi you should install the LoRa® and GPS antennas. Not doing so might damage the boards.
:::

#### 1. Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find a SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/m3gdql9punccouuquldw.jpg"
  width="50%"
  caption="RAKWireless Access Point"
/>

::: tip 📝 NOTE
Connect to this Wi-Fi SSID by using \"**rakwireless**\" as the default password. The default IP address of the Gateway's Wi-Fi is **`192.168.230.1`**. Take note of this IP address as this will be needed in connecting via SSH.
:::

#### 2. Via the Ethernet port on the Raspberry Pi 3B+

You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click **Ethernet**

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/ncj0nh5ynyywotognquj.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/nopiph8bjpdxczgxbztx.png"
  width="90%"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/yuukphgmct3ux8g9iyae.png"
  width="90%"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your Gateway from your PC successfully using the IP Address `192.168.10.10`through SSH.

#### Log into the Gateway via SSH

##### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm ](https://mobaxterm.mobatek.net/)and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/zctxurdhxfooo2qtf9e7.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the Gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`
- If you have connected to the Gateway through **Ethernet**, the IP Address is `192.168.1.10`
- It will then prompt you to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**"

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/xn4iy6bxo6myz6bff6is.jpg"
  width="80%"
  caption="Command Line after Log-in"
/>

##### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/yhqsxlzfx7b4azgjam4e.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i`"

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/n23irdfprbarciykopvs.jpg"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1`" in the terminal to login to your Gateway, the default password is "**raspberry**".
- If you connect your PC with the Gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10`", the default password is "**raspberry**".

OK, you have logged into the Gateway through SSH successfully same with the image shown below:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-your-gateway/ev6njusmdpurynnhahum.jpg"
  width="80%"
  caption="Log-in Successful Notification"
/>

##### 3. Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.




### Accessing the Internet

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/tdvxaiqw3kzn13hawchq.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concenterator** - used to configure the frequency, which the Gateway will operate on, and the LoRa® Server which the Gateway will work with.
3. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
4. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
5. **Configure Wifi** - used to configure the Wi-Fo settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi by choosing "**5 Configure WIFI**". By default, the RAK2245 Stamp WisLink LPWAN Concentrator works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/jauv1w36nhok85pnq0vk.png"
  width="100%"
  caption="Configuration options for WIFII"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

::: warning ⚠️ WARNING
In order to enable Wi-Fi Client Mode, you have to disable AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**"

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/gl2qnzxjyomeqqxkn2in.png"
  width="100%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/wi5ypcszm0stteriadg0.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

::: warning ⚠️ WARNING
Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK2245 Stamp Edition again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the [Accessing the Internet](/Product-Categories/WisLink/RAK2245-Stamp-Edition/Quickstart/#reverting-to-wi-fi-ap-mode) document which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/tg2mnix7dutsjrjo1vg0.png"
  width="100%"
  caption="SSID of the Network you want to connect to"
/>

- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/plpmc4rpno0dt9b7t8v6.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

#### Connect through Ethernet

If you want to connect to router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.
- By default, the IP Address of the Gateway's Ethernet is `192.168.10.10`

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/rh2nvroyzqih1qhaikt7.png"
  width="100%"
  caption="Default Gateway Ethernet IP Address"
/>

- Then configure the router's IP Address. It must be the true IP address of the router:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/qtzblm3kqn7sbijijkn9.png"
  width="100%"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK then the success message will appear.
- Lastly, reboot the Gateway using the command "`sudo reboot`" in the command line and it will connect to the router successfully through Ethernet.

#### Optional Configurations

These configurations under this section are only optional and situational.

##### Reverting to Wi-Fi AP Mode

In the event that you have entered either or both icorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK2245 Stamp WisLink LPWAN Concentrator to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK2245 Stamp WisLink LPWAN Concentrator and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/accessing-the-internet/qn1vee39tbh4vwngo4wt.png"
  width="60%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```sh
cd > rak_ap
```

- Check if the rak_ap file is created succesffuly. If so, re-insert the SD Card into your RAK2245 Stamp WisLink LPWAN Concentrator and it should work again in Wi-Fi AP Mode.




### Configuring the Gateway

Assuming you have successfully logged into your Gateway using SSH, enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/tdvxaiqw3kzn13hawchq.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa® Concenterator** - used to configure the frequency, which the Gateway will operate on, and the LoRa® Server which the Gateway will work with.
3. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN® parameters manually.
4. **Restart packet -forwarder** - used to restart the LoRa® packet forwarded process.
5. **Configure Wifi** - used to configure the Wi-Fo settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

::: tip 📝 NOTE
A unique ID will be generated in for Gateway. This is also called Gateway EUI and is essential for registering the gateway with any LoRa® Network Server (TTN, Chirpstack).
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/f03ijojvwe5w3zt6tjec.png"
  width="70%"
  caption="Gateway ID using the command line"
/>

#### Set a new password for the Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

1. First, choose "**1 Set pi password**" option referred on the image below.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/qgyeekjep9ew26gae8er.png"
  width="100%"
  caption="Set Pi Password"
/>

2. Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/lkxgb6gnw0jfcyijsz4a.png"
  width="100%"
  caption="Confirm Password Change"
/>

3. Alright, the success message for changing password will then pop up.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/ey2uuvxzbotxesld4rbd.png"
  width="100%"
  caption="Successful Password Change"
/>

#### Set up RAK Gateway LoRa® concentrator

This menu allows you to select your LoRa® frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa® concentrator**".

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/hdt5witlefhgxso1nyce.jpg"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa® concentrator"
/>

You can choose one of two supported LoRa® Servers here: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/qsddpkzi6ymsqxha59c1.png"
  width="100%"
  caption="Server Is TTN"
/>

- **TTN (The Things Network)** - If you choose TTN as the LoRa® Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/hv28mtqnkmvcvppwoqh8.jpg"
  width="100%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown below.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/sb4qkln2jjswm2geyiwp.png"
  width="100%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/orau1hsti7dngudqohup.png"
  width="100%"
  caption="Server Is Chirpstack"
/>

**ChirpStack** - If you choose Chirpstack as your LoRa® Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR) functionality.

First, select option 1 for configuring your Regional Frequency Band

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/okcf7wuywmusb0oos5mw.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your Gateway to work with:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/jiut8slqwomg2nel9lho.png"
  width="100%"
  caption="Default ChirpStack IP Address"
/>

::: tip 📝 NOTE
The default IP Address is **`127.0.0.1`** which means you will be using the Built-in LoRa® Server. If you want to use an independent LoRa® Server running on another device or a cloud based LoRa® Server, you need to set it to the corresponding IP address
:::

- If you have instead selected "**Chirpstack ADR Configure**" you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/configuring-the-gateway/sx6la0lcjcf7d4qf9wqe.png"
  width="100%"
  caption="Chirpstack ADR Enable/Disable"
/>



### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range [gateways](https://www.thethingsnetwork.org/docs/gateways/) to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network [here](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your Gateway to the router in order to access the internet according to the method which has been introduced in the [Accessing the Internet](/Product-Categories/WisLink/RAK2245-Stamp-Edition/Quickstart/#accessing-the-internet) section of this document.
- Second, config your Gateway and choose TTN as the LoRa® Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](/Product-Categories/WisLink/RAK2245-Stamp-Edition/Quickstart/#configuring-the-gateway) section.
- Now go to the TTN Website: [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/nedimpnbuhfzonrz8z6y.png"
  width="100%"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateways.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/ebaxmcecz3mhz7jbqupz.png"
  width="100%"
  caption="The Things Network Console Page"
/>

- All of your Registered Gateways will be displayed here in this page. Click "**register gateway**"

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/cgjbjaswugygc8dqsmui.png"
  width="100%"
  caption="Adding a Gateway to TTN"
/>

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/ljjhkak2ekgom8wzw16j.png"
  width="100%"
  caption="Registering your Gateway"
/>

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous steps. In case you forgot, just type "**gateway-version**" in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/tdvxaiqw3kzn13hawchq.png"
  width="100%"
  caption="RAK2245 Stamp WisLink LPWAN Concentrator ID in SSH"
/>

::: tip 📝 NOTE
Make sure to select the \"**I'm using the legacy packet forwarder**\" check box.
:::

- **Description** - A human readable description of your Gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map.
- **Antenna Placement** - Where is your antenna placed? Is it placed indoors or outdoors?

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your Gateway is now connected to the The Things Network (TTN).

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connection-to-ttn/emhpgxht6ngagrutweaj.png"
  width="100%"
  caption="RAK2245 Stamp WisLink LPWAN Concentrator TTN Connection Success"
/>



### Connect the Gateway with ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/)

For the RAK2245 Stamp WisLink LPWAN Concentrator Concentrator Module, there are 2 ways to use the ChirpStack:

#### 1. Using the built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa® Server. If you don't want to change the frequency or LoRa® Server, you don't have to do anything as this will be configured automatically when the gateway boots.
- However if it is not the first time and you want to use the built-in ChirpStack as the LoRa® Server, follow the steps discussed in [Configuring the Gateway](/Product-Categories/WisLink/RAK2245-Stamp-Edition/Quickstart/#configuring-the-gateway) section.
- **Optional:** If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your Gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/mtfxbfnu0pxildkxayzt.png"
  width="100%"
  caption="IP address of your RAK2245 Stamp WisLink LPWAN Concentrator using IP Scanner"
/>

There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP Address:8080" (**Example**: http://192.168.254.176:8080)
- **Username**: admin
- **Password**: admin

::: warning ⚠️ WARNING
It is advisable to change your password to tighten the security of your account. You can change this by clicking the \"change password\" button at the user icon.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/twyskhnlh3qztmnjqbal.png"
  width="100%"
  caption="ChirpStack Web-based UI"
/>

- Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/nm1rcooh5749oeyknm7t.png"
  width="100%"
  caption="Available Gateways in Chirpstack"
/>

- Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/qzfweifwadyreztjellx.png"
  width="100%"
  caption="Last Seen Status"
/>

#### 2. Using an Independent ChirpStack


You can setup an Independent ChirpStack by yourself. This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/).


<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/vn6fioh16k6zjdplr0it.png"
  width="100%"
  caption="Chirpstack Getting Started Guide on Ubuntu"
/>

::: warning ⚠️ WARNING
Remember to run the \"`sudo gateway-config`\" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu \"**Setup RAK Gateway LoRa**® **concentrator**\"!
:::

- Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering "IP Address of ChirpStack:8080".

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/rmibul5ouzluictf9zpq.png"
  width="100%"
  caption="ChirpStack Login Page"
/>

- The default username is "**admin**" and the password is also "**admin**".

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/pxxn6cq9hox9mtjzqxep.png"
  width="100%"
  caption="ChirpStack Home Page"
/>

- Click "Gateways" and Press "**+ CREATE**" to register your Gateway.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/tqyaaom3kzxbgj51eapl.png"
  width="100%"
  caption="ChirpStack Registered Gateways"
/>

- Click "**Create**" to register your Gateway and fill up the necessary information.

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/ku6wofqafkogdpndggwu.png"
  width="100%"
  caption="Registering your own Gateway"
/>

- Fill in the Gateway ID that we got from the last section ([Configuring the Gateway](/Product-Categories/WisLink/RAK2245-Stamp-Edition/Quickstart/#configuring-the-gateway)), also called Gateway EUI.
- If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:

<rk-img
  src="/assets/images/wislink-lora/rak2245-stamp-edition/quickstart/connect-with-chirpstack/p9wtubhkjdsatrhkwvfu.png"
  width="100%"
  caption="Successfully Registered the Gateway"
/>

- Congratulations! :tada: You have connected your Gateway to an external ChirpStack Successfully!
