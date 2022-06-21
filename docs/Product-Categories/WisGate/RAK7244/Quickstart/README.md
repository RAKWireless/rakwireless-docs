---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7244. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak7244/quickstart/1.main/RAK7244_home.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - RAK7244
  - wisgate
  - quickstart
---

# RAK7244 Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wisgate/rak7244/quickstart/2.quickstart/rak7244_overview2.jpg"
  width="100%"
  caption="RAK7244 Product Overview"
/> -->

### What Do You Need?

1. RAK7244 WisGate Developer D4 Gateway
2. 16&nbsp;GB SD card (included) + Card Reader
3. 5&nbsp;V at least 2.5&nbsp;A Micro USB Power Supply
4. A Windows/Mac OS/Linux Computer
5. Latest [RAK7244 Firmware](/Product-Categories/WisGate/RAK7244/Datasheet/#firmware) 

:::warning ⚠️ WARNING
The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
:::

### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/2.quickstart/package.png"
  width="100%"
  caption="RAK7244 WisGate Developer D4 Gateway package contents"
/>

## Product Configuration

### Accessing Your Gateway

After burning the firmware image onto the SD card, make sure you have inserted the SD card into the **RAK7244 WisGate Developer D4 Gateway** and have the LoRa and GPS antenna connected. To learn more on how to burn the image, check the [Learn section](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Developer-Gateway-Firmware-Burning/).

After which, you can now safely power on the gateway. In this section, several ways in accessing the gateway are provided to have different alternatives for you to choose depending on the availability of the requirements needed.

:::warning ⚠️WARNING
Before powering the Raspberry Pi 4, you should connect the LoRa and GPS antennas. Not doing so might damage the boards.
:::

#### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP mode, which means you can find an SSID named **Rakwireless_XXXX** on your PC Wi-Fi network list.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/wifi.png"
  width="80%"
  caption="RAKwireless access point"
/>

::: tip 📝 NOTE:
`XXXX` is the last 2 bytes of your RAK7244 WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Take note also of the default IP address of the gateway provided below as this will be needed in connecting via SSH.

- **Wi-Fi Password:** rakwireless
- **Default IP Address:** `192.168.230.1`
:::

#### Raspberry Pi 4 Ethernet Port

You can also connect your PC with the gateway through an Ethernet cable. By default, the IP address of the gateway’s Ethernet interface is `192.168.10.10`, so you need to set the IP address of your PC’s Ethernet to the same network segment, for example, `192.168.10.20`.

- To do this on a Windows PC, go to **Control Panel -> Network and Internet -> Network and Sharing Center** and click on **Ethernet**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/network&sharing.png"
  width="100%"
  caption="Network and sharing center"
/>

- Click **Properties**, then choose **Internet Protocol Version 4 (TCP/IPv4)**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/ethernetproperties.png"
  width="90%"
  caption="Ethernet properties"
/>

- By default, the PC will obtain an IP address automatically. Click **Option Use the following IP Address** and enter the IP address `192.168.0.10.20`, then press **OK**. 

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/tcpipv4.png"
  width="90%"
  caption="TCP/IPv4 properties"
/>

Now, you should be able to access your gateway from your PC successfully using the IP address `192.168.10.10` through SSH.

#### Log in to the Gateway

##### Windows OS

SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there namely [**Putty**](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [**BitVise SSH Client**](https://www.bitvise.com/ssh-client-download), [**MobaXterm**](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs. But for this guide, you will be using Putty.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/puttywindows.png"
  width="60%"
  caption="Putty Software for SSH in Windows"
/>

- If you have connected to the gateway through **Wi-Fi AP Mode**, the IP address is `192.168.230.1`
- If you have connected to the gateway through **Ethernet**, the IP address is `192.168.10.10`
- It will then prompt you to enter the username and password. The default username and password is provided below:
  - **Username**: pi
  - **Password**: raspberry

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/commandline.png"
  width="80%"
  caption="Command line after log in"
/>

##### Mac OS

Open the Terminal of Mac OS. Launch the **Terminal** application, which is found in `/Applications/Utilities/` directory. But you can also launch it from Spotlight by hitting **Command + Spacebar**, typing **Terminal**, and then return.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/mac_terminal.png"
  width="80%"
  caption="Opening Terminal in Mac OS"
/>

Open the terminal of Mac OS. Enter **root mode** by typing the following command: 

```
sudo -i
```

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/sshmac.jpg"
  width="100%"
  caption="SSH in Mac OS"
/>

- If you are not in root mode, enter `ssh pi@192.168.230.1` in the terminal to login to your gateway, the default password is **raspberry**.
- If you connect your PC with the gateway through Ethernet Cable, you should enter `ssh pi@192.168.10.10`, the default password is **raspberry**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/4.accessing your gateway/loginsuccess.jpg"
  width="80%"
  caption="Log in successful notification"
/>

##### Linux OS

If the OS of your PC is Linux, you should do the same as the Mac OS, except for the root mode.


### Accessing the Internet

Assuming you have successfully logged into your gateway using SSH. Enter the following command in the command line:

```
sudo gateway-config
```

You will now then see a page the same as **Figure 11**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/config-options.png"
  width="75%"
  caption="Configuration options for the gateway"
/>

1. **Set pi password** - used to set/change the password of the gateway.
2. **Setup RAK Gateway Channel Plan** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN Server which the gateway will work with.
3. **Restart packet-forwarder** - used to restart the LoRa packet forwarder.
4. **Edit packet-forwarder config** - used to open the `global_conf.json` file, to edit LoRaWAN parameters manually.
5. **Configure WIFI** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.
7. **Configure APN Name (optional)** – used to configure the access point name of the mobile network.
8. **Configure LTE Module (optional)** – used to enable/disable LTE automatic dial-up.

:::tip 📝 NOTE
Points 7 and 8 can be found only on LTE versions of the gateway.
:::

#### Connect through Wi-Fi

If you want to connect through Wi-Fi, it can easily be done with the Wireless capabilities of the Raspberry Pi 4 by choosing **5 Configure WIFI**. By default, the RAK7244 WisGate Developer D4 Gateway works in Wi-Fi AP Mode.

For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/wifi-config.png"
  width="75%"
  caption="Wi-Fi options configuration"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

1. **Enable AP Mode/Disable Client Mode** - the gateway will work in Wi-Fi Access Point mode after rebooting, while the Wi-Fi Client Mode will be disabled (this is the default mode).
2. **Enable Client Mode/Disable AP Mode** - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-Fi AP mode will be disabled.
3. **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP mode is enabled.
4. **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi Network. Only works in Wi-Fi Client mode.
5. **Change Wi-Fi Country** - this is used to modify the resident country to match Wi-Fi standards.

:::warning ⚠️WARNING
To enable Wi-Fi Client Mode, you have to disable AP mode first.
:::

Once Wi-Fi AP Mode has been disabled by choosing **2 Enable Client Mode/Disable AP Mode**, you can now then connect to a new Wi-Fi Network by choosing **4 Add New SSID for Client**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/wifi-ssid.png"
  width="75%"
  caption="Add a new SSID"
/>

- Start by selecting your country of residence.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/region.png"
  width="75%"
  caption="Selecting country of residence"
/>

- Enter the SSID of the network you want to connect.

:::warning ⚠️WARNING
Make sure to input the correct Wi-Fi SSID and password or you will not be able to connect to the RAK7244 again via SSH in Wi-Fi AP mode. If stuck in this situation, follow the procedure listed in the [Reverting to Wi-Fi AP Mode](/Product-Categories/WisGate/RAK7244/Quickstart/#reverting-to-wi-fi-ap-mode) section, which is applicable for all Raspberry Pi based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/set-wifi.png"
  width="75%"
  caption="SSID of the network you want to connect"
/>

- Type the password. If there is none, leave the field empty.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/set-password.png"
  width="75%"
  caption="Wi-Fi password"
/>

#### Connect through Ethernet

If you want to connect to router through Ethernet cable, do the following steps:

- In the main configuration menu, choose **6 Configure LAN**. This will let you set up a static IP address for the gateway’s Ethernet adapter.
- Type a static IP address according to the IP address of the router you want to connect. The gateway and the router must be in the same network segment, otherwise the connection will fail.
- By default, the IP address of the gateway's Ethernet is `192.168.10.10`

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/gateway-eth-ip.png"
  width="75%"
  caption="Default gateway Ethernet IP address"
/>

- Then configure the IP address of the router. This is the LAN interface IP address of the router.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/router-eth-ip.png"
  width="75%"
  caption="Router LAN IP address"
/>

- Press **OK**, and the success message will appear.

#### Reboot

Lastly, reboot the gateway using the command shown below and put it in the command line. 


```
sudo reboot
```

After reboot, the gateway will connect to the router successfully through Ethernet.

#### Optional Configurations

The configurations under this section are only optional and situational.

##### Reverting to Wi-Fi AP Mode

If you have entered either or both incorrect Wi-Fi SSID and password in the Wi-Fi Client mode setup for the RAK7244 WisGate Developer D4 Gateway to connect to the router, follow this set of steps to work again in Wi-Fi AP mode and redo the setup.

- Remove the SD card from your RAK7244 WisGate Developer D4 Gateway and insert it into your PC. Your PC should be able to detect it.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/5.accessing the internet/rak-ap-file.png"
  width="50%"
  caption="Creating rak_ap file to your SD card"
/>

- Using your **Command Prompt** or **Terminal**, navigate to your SD card and type this command to generate the `rak_ap` file.

```
cd > rak_ap
```

- Check if the `rak_ap` file is created successfully. If so, re-insert the SD card into your RAK7244 WisGate Developer D4 Gateway, and it should work again in Wi-Fi AP mode.


### Configuring the Gateway

Assuming you have successfully logged into your gateway using SSH, enter the following command in the command line:

```
sudo gateway-config
```

Then you will see a page like in **Figure 20**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/gateway_id.png"
  width="75%"
  caption="Gateway configuration options"
/>

1. **Set pi password** - used to set/change the password of the gateway.
2. **Setup RAK Gateway Channel Plan** - used to configure the frequency, which the gateway will operate on, and the LoRaWAN server which the gateway will work with.
3. **Restart packet-forwarder** - used to restart the LoRa packet forwarder.
4. **Edit packet-forwarder config**- used to open the `global_conf.json` file, to edit LoRaWAN parameters manually.
5. **Configure WIFI** - used to configure the Wi-Fi settings in order to connect to a network.
6. **Configure LAN** - used to configure the Ethernet adapter settings.

:::tip 📝 NOTE:
 A unique ID will be generated in for gateway. This is also called **Gateway EUI** and is essential for registering the gateway with any LoRa network server (TTN and ChirpStack).
:::

There is also another way to get your **Gateway ID**. Just enter the command below in the command line:

```
sudo gateway-version
```

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/gateway_id_cmd.png"
  width="70%"
  caption="Gateway ID using the command line"
/>

#### Setting a New Password for the Gateway

It is a good security practice to change the default password **raspberry**, which is the same on all Raspberry Pi devices.

1. First, choose **1 Set pi password** option.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/set_pi_pwd.png"
  width="75%"
  caption="Set Pi password"
/>

2. Next, press **Yes**. You will be asked to enter your new password twice then press **Enter**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/confirm_pwd.png"
  width="75%"
  caption="Confirm password change"
/>

3. A success message for changing password will then pop up.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/success_pwd_change.png"
  width="75%"
  caption="Successful Password Change"
/>

#### Setup RAK Gateway Channel Plan

This menu allows you to select your LoRa frequency band and one of the two available networks server options by choosing **2 Setup RAK Gateway Channel Plan**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/setup_rak_gateway.png"
  width="75%"
  caption="Choosing channel plan"
/>

You can choose one of two supported LoRa servers here: **TTN** or **ChirpStack**.

##### Server is TTN

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/server_ttn.png"
  width="75%"
  caption="TTN server"
/>

* **TTN (The Things Network)** - If you choose TTN as the LoRa server, you will see a page the same as shown in **Figure 27**. Visit [LoRa Alliance Regional Parameters](https://lora-alliance.org/wp-content/uploads/2021/05/RP002-1.0.3-FINAL-1.pdf) for more information on your local frequency plan. This will allow you to choose the correct plan. 

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/ttn_channel_plan.png"
  width="75%"
  caption="Selecting the TTN channel plan"
/>

After choosing the correct frequency, a success message will appear, as shown in **Figure 28**.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/success_freq_change.png"
  width="75%"
  caption="Successfully changed the frequency"
/>

::: tip 📝 NOTE:

When a channel plan is selected, the gateway is configured to connect to the nearest cluster to the region. If new clusters are presented, the channel plans will be updated. For now, the only available clusters are as follows:

- Europe: **eu1.cloud.thethings.network** 
- Australia: **au1.cloud.thethings.network**
- North America: **nam1.cloud.thethings.network**

:::

If you want to use TTN for LoRa network server, you can skip the **If the Server is ChirpStack** section and head to registering the gateway in [TTN](https://eu1.cloud.thethings.network/console/).


##### Server is Chirpstack

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/chirpstack.png"
  width="75%"
  caption="Chirpstack server"
/>

**ChirpStack** - If you choose Chirpstack as your LoRa server, you will see the following page with two options available:
- **ChirpStack Channel Plan Configuration** - used to configure your Regional Frequency Band.
- **ChirpStack ADR Configure** - used to enable/disable the Adaptive Data Rate (ADR)
  functionality.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/chirpstack_channel.png"
  width="75%"
  caption="Configure ChirpStack channel plan"
/>


First, select **1 ChirpStack Channel-plan configuration** for configuring your frequency channel.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/chirpstack-channel-plan.png"
  width="75%"
  caption="Regional frequency band option"
/>

Then set the IP address of the ChirpStack.


<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/loraserver_ip.png"
  width="75%"
  caption="Default LoRaServer IP address"
/>

:::tip 📝 NOTE
 The default IP address is `127.0.0.1`. If you want to use an external LoRaServer, you need to set it to its IP address.
:::

* If you have instead selected **Chirpstack ADR Configure**, you can enable/disable the Adaptive Data Rate (ADR) functionality.

<rk-img
  src="/assets/images/wisgate/rak7244/quickstart/6.configure the gateway/adr_settings.png"
  width="75%"
  caption="Chirpstack ADR Enable/Disable"
/>


:::tip 📝 NOTE
If you want to use ChirpStack for LoRa network server, refer to the Supported LoRa Network Servers documentation under [Connecting with ChirpStack](/Product-Categories/WisGate/RAK7244/Supported-LoRa-Network-Servers/#connecting-with-chirpstack) section.

:::

