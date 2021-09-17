---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK7244C. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak7244c/quickstart/overview/RAK7244C_home.png
prev: ../Overview/
next: ../Testing-Report/
tags:
  - RAK7244C
  - quickstart
  - wisgate
---

# RAK7244C Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/quick-start-guide/fendmvbfrguhtcxjnewh.jpg"
  width="90%"
  caption="RAK7244C Product Overview"
/> -->

### What Do You Need?

1. RAK7244C WisGate Developer D4+ Gateway
2. 16&nbsp;GB SD Card + Card Reader
3. 5&nbsp;V at least 3&nbsp;A Micro USB Power Supply
4. A Windows/Mac OS/Linux Computer
5. Latest [RAK7244C Firmware](/Product-Categories/WisGate/RAK7244/Datasheet/#firmware)

### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/quick-start-guide/package.png"
  width="100%"
  caption="RAK7244C Package Contents"
/>


## Product Configuration

### Accessing Your Gateway

After burning the firmware image onto the SD Card, make sure you have inserted the SD Card into the **RAK7244C WisGate Developer D4+ Gateway** and have the LoRa and GPS Antenna connected. After which, you can now safely power on the gateway. In this document, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️WARNING
Before powering the Raspberry Pi 4, you should connect the LoRa and GPS antennas. Not doing so might damage the boards.
:::

#### 1. Wi-Fi AP Mode

By default, the Gateway will work in Wi-Fi AP Mode which means that you can find an SSID named like "**Rakwireless_XXXX**" on your PC Wi-Fi Network List.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.lz4jkwc4hc5bulz0tial.png"
  width="80%"
  caption="RAKWireless Access Point"
/>

::: tip 📝 NOTE:
“XXXX” is the last 2 bytes of your RAK7244C WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the Gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
  :::

#### 2. Via the Ethernet Port on the Raspberry Pi 4

You can also connect your PC with the Gateway through an Ethernet cable. By default, the IP address of the Gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`_._

- To do this in Windows, go to Control Panel -> Network and Internet -> Network and Sharing Center and Click **Ethernet**

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/2.em5xb92hmbrbk6l0k8ta.png"
  width="100%"
  caption="Network and Sharing Center"
/>

- Click **Properties** then Choose **Internet Protocol Version 4 (TCP/IPv4).**

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/3.q1fuiang2vcayglvgirm.png"
  width="90%"
  caption="Ethernet Properties"
/>

- By default, it will obtain an IP Address automatically. Click the Option "Use the following IP Address" and enter the IP Address: `192.168.10.20` and press OK.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/4.qdbxt5z0vcc0xuv6kjie.png"
  width="90%"
  caption="TCP/IPv4 Properties"
/>

Now , you should be able to access your Gateway from your PC successfully using the IP Address `192.168.10.10`through SSH.

#### Log into the Gateway via SSH

##### 1. Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, you will be using Putty for this guide.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/5.o9zqtf7g3e8ortdutvtd.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP Address is `192.168.230.1`
- If you have connected to the gateway through **Ethernet**, the IP Address is `192.168.10.10`
- It will then prompt you to enter the username and password. The default username is "**pi**" and the default password is "**raspberry**"

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/6.wzhirj41gxy8gnjgm0xy.png"
  width="80%"
  caption="Command line after log in"
/>

##### 2. Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in "/Applications/Utilities/" directory but you can also launch it from Spotlight by hitting **Command + Spacebar** and typing “Terminal” and then return:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/7.ml30pbgwlefwpd72liak.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: "`sudo -i"

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/8.nwmfjgjta9pulz2ztcns.jpg"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter "`ssh pi@192.168.230.1" in the terminal to login to your Gateway, the default password is "**raspberry**".
- If you connect your PC with the Gateway through Ethernet Cable, you should enter "`ssh pi@192.168.10.10", the default password is "**raspberry**".

OK, you have logged into the Gateway through SSH successfully same with the image shown below:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/9.ke0ouxpmixgalqyu5cgk.jpg"
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
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/01.pgz9vj3jtvdmollkanqc.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN Server which the Gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process.
4. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure APN Name -** used to configure the APN name of pppd.
7. **Configure LTE Module -** (Online for the Cellular Version) - used to configure automatic LTE network connection on startup.
8. **Configure LAN** - used to configure the Ethernet adapter settings.

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 3B+ by choosing "**5 Configure Wifi**". By default, the RAK7244C WisGate Developer D4+ Gateway works in Wi-Fi AP Mode. In order for the Gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/02.bzvol7clyvogrlfcf6mm.png"
  width="100%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the Gateway will work in Wi-Fi Access Point Mode after rebooting while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the Gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the Resident Country to match with Wi-Fi standards.

::: warning
In order to enable Wi-Fi Client Mode, you have to disable first the AP Mode.
:::

Once Wi-Fi AP Mode has been disabled by choosing "**2 Enable Client Mode/Disable AP Mode**", you can now then connect to a new Wi-Fi Network by choosing "**4 Add New SSID for Client**":

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/03.oedelnm55crlacr1qezp.png"
  width="100%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/04.tho0wgcekiybxiyw1lg1.png"
  width="100%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

::: warning
Please ensure to input the correct Wi-Fi SSID and Password or you will not be able to connect to the RAK7244C again via SSH in Wi-Fi AP Mode. If stuck in this situation, please follow this procedure listed in the [Reverting Back to Wi-Fi AP Mode](/Product-Categories/WisGate/RAK7244C/Quickstart/#reverting-to-wi-fi-ap-mode) section which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/05.d2h64zg2aqhpwtzektci.png"
  width="100%"
  caption="SSID of the Network you want to connect to"
/>

- Enter also the password. Just leave it empty if None.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/06.toenoesnbmrz1eeza4yq.png"
  width="100%"
  caption="Password of the Wi-Fi"
/>

#### Connect through Ethernet

If you want to connect to router through Ethernet Cable, do the following steps:

- In the main configuration menu, choose **“6 Configure LAN”**. This will let you set up a static IP address for the Gateway’s Ethernet adapter.
- Just fill a static IP Address according to the IP address of the router you want to connect. Please note that the gateway and the router must be in the same network segment, otherwise the connection will fail.
- By default, the IP Address of the Gateway's Ethernet is `192.168.10.10`

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/07.q7cisano0ckdjzfmrjwn.png"
  width="100%"
  caption="Default Gateway Ethernet IP Address"
/>

- Then configure the IP address of the Router. This is the LAN Interface IP address of the router.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/08.rfflmexk4jeyay8yyfp9.png"
  width="100%"
  caption="LAN Interface IP Address of the Router"
/>

- Press OK then the success message will appear.
- Lastly, reboot the Gateway using the command "`sudo reboot" in the command line and it will connect to the router successfully through Ethernet.

#### Connecting through an LTE Network

The RAK7244C comes with the RAK2013 Cellular making it capable of connecting through LTE network. In this section, you will learn on how to connect your Gateway to an LTE network.

**1.** First, insert a SIM card of the appropriate type and size into the SIM card slot. Power on the Gateway.

**2.** Then, log into the Gateway through SSH, and
enter the command:

```sh
sudo gateway-config
```

**3.** Next, in the main configuration menu choose “**7 Configure LTE Module**”:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/09.s4wdcqiwukl5evm7fyhm.png"
  width="100%"
  caption="Configure LTE Module"
/>

Two configuration options are available for your LTE.

1. **Enable LTE Automatic Dial-up** - the default option and is used to enable automatic connection during start-up.
2. **Disable LTE Automatic Dial-up** - used to disable automatic connection during start-up.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/10.qzy2znqy3rn32asplaki.png"
  width="100%"
  caption="LTE Configuration Options"
/>

After that, you need to configure the LTE network operator’s information. Make sure to disable the automatic connection on start-up feature before starting.

**4.** Execute the command below in the console to start minicom tool:

```sh
sudo minicom -D /dev/ttyAMA0 -b 115200
```

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/11.hsnj9bmmt4hm7jjivlfn.png"
  width="80%"
  caption="Minicom Tool"
/>

**5.** Then, try entering the command “**at**” in the tool, if it returns with “**OK**”, it means you have opened the serial port successfully:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/12.e2nnhzfcsvrzawsnjc3x.png"
  width="80%"
  caption="AT Command in Minicom"
/>

::: tip 📝 NOTE:
If you cannot see the “at”, which you just entered, try to hold “CTRL+A”, then press “Z”, then press “E”. This should allow you to go to the command entering mode.
:::

**6.** Next, execute the AT command “**`at+cops=?`**” to look for all available LTE networks in range:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/13.gnqzfqfiyr9midcxzykr.png"
  width="80%"
  caption="AT Command for LTE Network Query"
/>

This may take a couple of seconds. After that, you'll see the available LTE Network information similar to the image below.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/14.a2dffmeci1qkvarbnh4h.jpg"
  width="100%"
  caption="LTE Network Example"
/>

::: tip 📝 NOTE:
The image above shows the available LTE network in China. These information may vary depending on the available network in your region. For instance in China, the available network are “CHINA MOBILE”, “CHN-UNICOM”, or “CHN-CT”.
:::

**7.** Next, execute the AT command below to set the information of the LTE network operator that you want to use.

- XXX - this parameter is set to describe the network operator. For example, "CHINA MOBILE”, “CHN-UNICOM”, or “CHN-CT”
- **YYY** - this parameter is set as the last value of every operator. Choose the network with 0 value as this is the currently used network.

Now let’s take this LTE network in Europe (Bulgaria) as an example:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/15.mtzbhqbruxtqqtg0993z.jpg"
  width="100%"
  caption="Sample LTE Networks in EU"
/>

Then, using the sample AT command described above, the command will be:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/16.dgcsdrvgw5yyjlxfhzdn.jpg"
  width="100%"
  caption="Sample AT Command for LTE Network"
/>

After then, you will receive "OK" which means you have successfully configured the LTE network.

::: tip How to Quit Minicom?
In order for you to exit Minicom. Press Enter, Ctrl + A then press Q. A pop up will appear and choose Yes.
:::

**8.** Proceed to setting the **APN name** for the **pppd**
process. From the main configuration menu choose “**6
Configure APN name**”.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/17.mgnltetmph7fql2dyptt.png"
  width="100%"
  caption="Configure APN Name"
/>

**9.** Then, you will see the window option below where you can change the APN Name or retain its default name.

::: tip 📝 NOTE:
If you want to modify the APN Name, make it sure it is a real and valid APN Name.
:::

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/18.wxlr9qc1jvgrtdqokbj0.png"
  width="100%"
  caption="APN Name"
/>

**10.** Lastly, set the baud rate. The default value is 115200.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/19.sje1mevpfizxspzka0jf.png"
  width="100%"
  caption="Baud Rate Setting"
/>

Great! You have finished configuring your LTE network. Now, let's test and verify the connection.

**1.** Execute the command. in the terminal.

```sh
sudo pppd call gprs
```

There will be a series of log but after that, you will see the the following information at the end of the log.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/20.i3bmpsoxp2urhnag3vyx.jpg"
  width="75%"
  caption="IP address Information"
/>

You will be assigned with an IP address (local and remote) along with the DNS addresses. Having these information signifies that your connection has successfully established.

Also, do not forget to re-enable the automatic LTE connection on start up

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/21.q4viffhbutonrx71vwjs.png"
  width="100%"
  caption="Enabling the Automatic LTE Connection during Start-Up"
/>

#### Optional Configurations

These configurations under this section are only optional and situational.

##### Reverting to Wi-Fi AP Mode

In the event that you have entered either or both incorrect Wi-Fi SSID and Password in the Wi-Fi Client Mode setup for the RAK7244C WisGate Developer D4+ Gateway to connect to the router, follow these set of steps for you to work again in Wi-Fi AP Mode and redo the setup.

- Remove the SD Card from your RAK7244C WisGate Developer D4+ Gateway and insert it into your PC. Your PC should be able to detect it same with the image below:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/2.accessing-gateway/1.accessing-internet/22.oyjadnh8ouvogrgpfox0.png"
  width="50%"
  caption="Creating rak_ap file to your SD Card"
/>

- Using your "**Command Prompt**" or "**Terminal**", navigate to your SD Card and type this command to generate the "**rak_ap**" file.

```sh
cd > rak_ap
```

- Check if the rak_ap file is created successfully. If so, re-insert the SD Card into your RAK7244C WisGate Developer D4+ Gateway and it should work again in Wi-Fi AP Mode.


### Configuring the Gateway

Assuming you have successfully logged into your Gateway using SSH. Enter the following command in the command line:

```sh
sudo gateway-config
```

You will now then see a page like the following picture below:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/01.ivnbudjlcg1xm2noagvl.png"
  width="100%"
  caption="Configuration Options for the Gateway"
/>

1. **Set pi password** - used to set/change the password of the Gateway.
2. **Set up RAK Gateway LoRa Concentrator** - used to configure the frequency, which the Gateway will operate on, and the LoRaWAN Server which the gateway will work with.
3. **Restart packet -forwarder** - used to restart the LoRa packet forwarded process.
4. **Edit packet-forwarder config-** used to open the global_conf.json file, in order to edit LoRaWAN parameters manually.
5. **Configure Wifi** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure APN Name -** used to configure the APN name of pppd.
7. **Configure LTE Module -** (Online for the Cellular Version) - used to configure automatic LTE network connection on startup.
8. **Configure LAN** - used to configure the Ethernet adapter settings.

::: tip 📝 NOTE:
 A unique ID will be generated in for Gateway. This is also called Gateway EUI squared in red in the figure above and is essential for registering the gateway with any LoRa Network Server (TTN, ChirpStack)
:::

There is also another way to get your "Gateway ID", just enter the command below in the command line:

```sh
sudo gateway-version
```

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/02.8vfjxamrr5jnftl.png"
  width="80%"
  caption="Gateway ID using the command line"
/>

#### Setting a new password for the Gateway

It is a good security practice to change the default password "**raspberry**" which is the same on all Raspberry Pi devices.

**1.** First, choose "**1 Set pi password**" option referred on the image below.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/03.lb4lcpcxk9vuhg8xxwkv.png"
  width="100%"
  caption="Set Pi Password"
/>

**2.** Next, press "**Yes**" and you will be asked to enter your new password twice then press "**Enter**".

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/04.puwtmxjqflai90ejzwj4.png"
  width="100%"
  caption="Confirm Password Change"
/>

**3.** Alright, the success message for changing password will then pop up.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/05.vm2z749vmvlt92sksnek.png"
  width="100%"
  caption="Successful Password Change"
/>

#### Set up RAK Gateway LoRa Concentrator

This menu allows you to select your LoRa frequency band and one of the two available Networks Server options by choosing "**2 Setup RAK Gateway LoRa concentrator**"

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/06.ktnjwl2w33wsmzgth2oh.png"
  width="100%"
  caption="Choosing Setup RAK Gateway LoRa concentrator"
/>

You can choose one of two supported LoRa Servers here: **TTN** or
**ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/07.ul588xl3su91f9xlqkd9.png"
  width="100%"
  caption="Server Is TTN"
/>

- **TTN (The Things Network)** - If you choose TTN as the LoRa Server, you will see the following page. Visit this [article](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for more information on your local TTN frequency plan. This will allow you to choose the correct plan.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/08.n2dwbzss4hzqxsevyeqg.jpg"
  width="100%"
  caption="Selecting the TTN Channel Plan"
/>

After choosing the correct frequency, the success message will appear as shown below.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/09.oz0vetzytinpkrmnklmz.png"
  width="100%"
  caption="Successfully Changed the Frequency"
/>

##### Server is Chirpstack

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/10.wxplmfajuroo8dcgaadk.png"
  width="100%"
  caption="Server Is TTN"
/>

**ChirpStack** - If you choose Chirpstack as your LoRa Server, you will see the following page with two options available:

- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR)
  functionality.

First, select option 1 for configuring your Regional Frequency Band

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/11.sdcqyojrwjtpfe3mtj46.png"
  width="100%"
  caption="Regional Frequency Band Option"
/>

Then, set the IP address of the ChirpStack which you want your Gateway to work with:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/12.cnm6bvyeuxzzj2uyoes0.png"
  width="100%"
  caption="Default LoRaServer IP Address"
/>

::: tip 📝 NOTE:
 The default IP Address is **`127.0.0.1`** which means you will be using the Built-in LoRa Server. If you want to use an independent LoRa Server running on another device or a cloud based LoRa Server, you need to set it to the corresponding IP address
:::

- If you have instead selected "**Chirpstack ADR Configure**" you can enable/disable the Adaptive Data Rate (ADR) functionality:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/3.configure-gateway/13.brnbjhabtzzav0bnf52r.png"
  width="100%"
  caption="Chirpstack ADR Enable/Disable"
/>


### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to use long range [gateways](https://www.thethingsnetwork.org/docs/gateways/) to connect to an open-source, decentralized network to exchange data with Application. Learn more about the Things Network through their [documentation](https://www.thethingsnetwork.org/docs/).

- First, you should have connected your Gateway into the internet through a router according to the method which has been introduced in the [Accessing the Internet](#accessing-the-internet) section of this document.
- Second, config your Gateway and choose TTN as the LoRa Server and choose a correct frequency according to the method which has been introduced in the [Configuring the Gateway](#configuring-the-gateway) section.
- Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Login. You will then see the following page:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/4.connecting-ttn/1.fnb3qqtayustdujbkhmt.png"
  width="100%"
  caption="The Things Network Home Page"
/>

- Choose Console then Click Gateway.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/4.connecting-ttn/2.yeysczfmxhmlh26j6o28.png"
  width="100%"
  caption="The Things Network Console Page"
/>

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/4.connecting-ttn/3.qkmub7m7hgn0zzoi0cnh.png"
  width="100%"
  caption="Adding a Gateway to TTN"
/>

- All of your Registered Gateways will be displayed here in this page. Click "register gateway"

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/4.connecting-ttn/4.ohve3d6gfqksz1ctk27a.png"
  width="100%"
  caption="Registering your Gateway"
/>

::: tip 📝 NOTE:
Make sure to select the \"**I'm using the legacy packet forwarder**\" check box.
:::

- **Gateway EUI** - refers to the Gatway ID you obtained from the previous step. In case you forgot, just type `gateway-version` in the command line. This must be the same with the Gateway's True Gateway ID otherwise you will fail to register your Gateway on TTN.
- **Description** - A human readable description of your Gateway.
- **Frequency Plan** - This is the frequency you want to use and it must be the same with Gateway and the Node.
- **Router** - The router this gateway will connect to. To reduce latency, pick a router that is in a region which is close to the location of the gateway.
- **Location** - Choose the location of the Gateway by entering its coordinates. This is reflected on the Gateway World Map!
- **Antenna Placement** - refers to the location of your antenna whether indoor or outdoor.

Click Register Gateway and wait for a couple of minutes . If the status of your gateway is **Connected**, Congratulations! :tada: Your Gateway is now connected to the The Things Network (TTN).



### Connect the Gateway with ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/)

For the RAK7244C WisGate Developer D4+ Gateway, there are 2 ways to use the ChirpStack:


##### 1. Using the built-in ChirpStack

There is a built-in ChirpStack in every RAK Developer gateway if you use the latest firmware.

- When you use it for the first time after burning the latest firmware, the Gateway will work in the EU868 Band and use the built-in ChirpStack as its default LoRa Server. If you don't want to change the frequency or LoRa Server, you don't have to do anything as this will be configured automatically when the Gateway boots.
- However if it is not the first time and you want to use the built-in ChirpStack as the LoRa Server, follow the steps discussed in [Configuring the Gateway](#configuring-the-gateway) section.
- **Optional:** If ever you disabled the AP Mode and you have connected it to your own Wifi network (Client Mode). You can search for your gateway’s IP Address via [**Advanced IP Scanner**](https://www.advanced-ip-scanner.com/). Copy the IP Address of your Gateway, it should have a Manufacturer name of **Raspberry Pi Foundation**:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/01.mtfxbfnu0pxildkxayzt.png"
  width="100%"
  caption="IP address of your RAK7244C using IP Scanner"
/>

There is a Web-based UI that comes with the ChirpStack instance. Simply open a browser and enter the following credentials:

- **Browser Address**: "Gateway IP Address:8080" (**Example**: http://192.168.254.176:8080)
- **Username**: admin
- **Password**: admin

::: warning
It is advisable to change your password to tighten the security of your account. You can change this by clicking the \"change password\" button at the user icon.
:::

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/02.twyskhnlh3qztmnjqbal.png"
  width="100%"
  caption="ChirpStack Web-based UI"
/>

- Everything should be pre-configured: Device profiles have been created, the Gateway has been registered with the server, etc. If you go to the Gateways tab and click on rak_gateway, you should see the Gateway details page.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/03.nm1rcooh5749oeyknm7t.png"
  width="100%"
  caption="Available Gateways in Chirpstack"
/>

- Go to the rak_gateway and see the "Last seen" status. It must be a few seconds ago which signifies that the Gateway is visible in the ChirpStack server.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/04.qzfweifwadyreztjellx.png"
  width="100%"
  caption="Last Seen Status"
/>

##### 2. Using an Independent ChirpStack

You can setup an Independent ChirpStack by yourself. This is a lot more complicated having to deploy a remote ChirpStack by yourself but Chirpstack provided a detailed guide on how to do it [here](https://www.chirpstack.io/guides/debian-ubuntu/).


<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/05.vn6fioh16k6zjdplr0it.png"
  width="100%"
  caption="Chirpstack Getting Started Guide on Ubuntu"
/>

::: warning
Remember to run the \"`sudo gateway-config`\" command in the CLI and point the Gateway to the IP address of the machine you just installed Chirpstack on. This can be done in item 2 in the menu \"**Setup RAK Gateway LoRa concentrator**\"!
:::

- Assuming you have set it up correctly, Login to your ChirpStack to register your Gateway by opening the ChirpStack's web page in a browser by entering "IP Address of ChirpStack:8080".

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/06.rmibul5ouzluictf9zpq.png"
  width="100%"
  caption="ChirpStack Login Page"
/>

- The default username is "**admin**" and the password is also "**admin**"

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/07.pxxn6cq9hox9mtjzqxep.png"
  width="100%"
  caption="ChirpStack Home Page"
/>

- Click "Gateways" and Press "**+ CREATE**" to register your Gateway

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/08.tqyaaom3kzxbgj51eapl.png"
  width="100%"
  caption="ChirpStack Registered Gateways"
/>

- Click "Create" to register your Gateway and fill up the necessary information.

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/09.ku6wofqafkogdpndggwu.png"
  width="100%"
  caption="Registering your own Gateway"
/>

- Fill in the Gateway ID that we got from the last section [Configuring the Gateway](#configuring-the-gateway), also called Gateway EUI.
- If you have properly configured your Gateway and there is a network connection between the external ChirpStack and your Gateway, you should see the following page and status:

<rk-img
  src="/assets/images/wisgate/rak7244c/quickstart/5.connect-chirpstack/10.p9wtubhkjdsatrhkwvfu.png"
  width="100%"
  caption="Successfully Registered the Gateway"
/>

- Congratulations! :tada: You have connected your Gateway to an external ChirpStack Successfully!

