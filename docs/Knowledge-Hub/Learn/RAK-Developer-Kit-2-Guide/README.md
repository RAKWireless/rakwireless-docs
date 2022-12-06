---
sidebar: false
rak_img: /assets/images/knowledge-hub/rak-developer-kit/kit-2/kit2.png
rak_desc: This guide provides a step-by-step tutorial on how to use the RAK Developer Kit 2 (Weather Kit).
tags:
  - Tutorial
  - RAK Developer Kit
  - WisBlock
header:
  title: RAK Developer Kit 2 (Weather Kit) Guide
  caption: by <b>Rally Uminga</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 13/01/2021 08:00 AM
---

# RAK Developer Kit 2 (Weather Kit) Guide

## Overview

This guide is about learning how to set up a complete LoRaWAN application from device, gateway up to network server. It composes of the following sections:

- [Setting Up the Gateway](/Knowledge-Hub/Learn/RAK-Developer-Kit-2-Guide/#setting-up-the-gateway)
- [Setting Up the Network Server](/Knowledge-Hub/Learn/RAK-Developer-Kit-2-Guide/#setting-up-the-network-server)
- [Setting Up the Device](/Knowledge-Hub/Learn/RAK-Developer-Kit-2-Guide/#setting-up-the-device)
- [Setting Up IoT Dashboard Using Ubidots](/Knowledge-Hub/Learn/RAK-Developer-Kit-2-Guide/#setting-up-iot-dashboard-using-ubidots)


### Setting Up the Gateway

#### Configuring the RAK7246 WisGate Developer D0

This section will guide you on how to set up and configure your gateway.

:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway?](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN® Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN® Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

:::

Here are the steps in configuring the [RAK7246 WisGate Developer D0](https://store.rakwireless.com/collections/wisgate-developer/products/rak7246-lpwan-developer-gateway?variant=36313275465886):

1. By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID named "**Rakwireless_XXXX**" on your PC Wi-Fi network list.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\D0WifiAP1.png"
  width="50%"
  caption="RAKwireless Access Point"
/>

:::tip 📝 NOTE
“XXXX” is the last 2 bytes of your RAK7246 WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Also, the default IP address of the gateway provided below will be needed in connecting via SSH.

- Wi-Fi Password: **rakwireless**
- Default IP Address: **192.168.230.1**
:::

2. Log into the gateway.

  - Windows OS
     SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there, namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, Putty is used.
 
<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\putty2.png"
  width="40%"
  caption="PuTTY example"
/>

  - Mac OS
     Open the Terminal of Mac OS. Launch the Terminal application found in the **`/Applications/Utilities/`** directory, but you can also launch it from Spotlight. Press **Command + Spacebar** and type **“Terminal”**, then return.
     
<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\terminal3.png"
  width="50%"
  caption="Selecting Terminal on Mac"
/>

3. If you have connected to the gateway through Wi-Fi AP Mode, the IP Address is **192.168.230.1**. It will then prompt you to enter the username and password. Enter the default credentials:

   - Username: **pi**
   - Password: **raspberry**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\sshpi4.png"
  width="60%"
  caption="Command Line using SSH Client Software"
/>

4. From the previous step, get the **Gateway ID** by typing `sudo gateway-config` to your chosen SSH Client terminal editor. It can be found on top of the terminal console, as shown in the red box in **Figure 5**. You may copy it on a txt file or any notepad software. It will be used in setting up the gateway in [TTN V3](https://www.thethingsnetwork.org/). See **Figure 5** for reference. You will use it also as Gateway EUI in the latter part of this guide. In this example, the Gateway ID is **B827EBFFFE81**.

:::tip 📝 NOTE
In this guide, you will be using TTN (The Things Network) as the LNS (LoRaWAN Network Server). There are many other LNS available that you can use, as well. The configuration steps will be different depending on your chosen LNS, but the general LoRaWAN principle is the same. 

Like for [RAK WisGate Edge Gateways](https://store.rakwireless.com/collections/wisgate-edge), it has built-in LNS that you can use.
:::

5. You can now connect your gateway through Wi-Fi to access TTN. It can easily be done with the wireless capabilities of the Raspberry Pi Zero W by choosing **"5 Configure WIFI"**. By default, the RAK7246 WisGate Developer D0 Gateway works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig5_1.png"
  width="60%"
  caption="Configuring your Wifi"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig6.png"
  width="60%"
  caption="Configuration options for WIFI"
/>

There are 5 options to choose from in the Wi-Fi configuration menu:

   1.  **Enable AP Mode/Disable Client Mode** - the gateway will work in Wi-Fi Access Point Mode after rebooting, while the Wi-Fi Client Mode will be disabled (this is the default mode).
   2.  **Enable Client Mode/Disable AP Mode** - the gateway will work in Wi-Fi Client mode after rebooting, while Wi-FI AP Mode will be disabled.
   3.  **Modify SSID and pwd for AP Mode** - used to modify the SSID and password of the Wi-Fi AP. Only works if the Wi-Fi AP Mode is enabled.
   4.  **Add New SSID for Client** - this is used if you want to connect to a new Wi-Fi network. Only works in Wi-Fi Client mode.
   5.  **Change Wi-Fi Country** - this is used to modify the Resident Country to match Wi-Fi standards.

:::tip 📝 NOTE

To enable Wi-Fi Client Mode, you have to disable first the Wi-Fi AP Mode.

:::

6. Once Wi-Fi AP Mode has been disabled by choosing **"2 Enable Client Mode/Disable AP Mode"**, you can now then connect to a new Wi-Fi Network by choosing **"4 Add New SSID for Client"**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig7.png"
  width="60%"
  caption="Add New SSID for Client"
/>

- Start by selecting your country of residence.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig8.png"
  width="60%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect.

:::tip 📝 NOTE
Ensure to input the correct Wi-Fi SSID and password, or you will not be able to connect to the RAK7246 again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the [Optional Configurations](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Quickstart/#optional-configurations) procedure listed in the Accessing the Internet, which is applicable for all Raspberry Pi-based gateways to work again in Wi-Fi AP mode.
:::


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig9.png"
  width="60%"
  caption="SSID of the Network you want to connect to"
/>

- Enter the SSID of the network you want to connect.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gatewayconfig10.png"
  width="60%"
  caption="Password of the Wi-Fi"
/>

- Lastly, reboot the gateway using the command sudo reboot in the command line, and it will connect to the router successfully.

```
sudo reboot
```

7. After rebooting the RAK7246 WisGate Developer D0, you should check if it is connected successfully to your Wi-Fi network. You may use your local network modem/router admin console to check if RAK7246 is successfully connected. 

In this example, the admin console can be accessed via `http://192.168.0.1`. It is also common to have it on `http://192.168.1.1` on some routers. Take note of the IP address allotted to the RAK7246 by your Wi-Fi network.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\wifirouter1.png"
  width="60%"
  caption="Web UI of local modem/router"
/>

You can also use [Advance IP Scanner](https://download.advanced-ip-scanner.com/download/files/Advanced_IP_Scanner_2.5.3850.exe) for Windows OS, or [Angry IP Scanner](https://angryip.org/download/) for Mac OS, and locate the IP address of RAK7246 WisGate Developer D0 in your Wi-Fi device. 

As seen in **Figure 12**, it is `192.168.0.28`, where the company is Raspberry Pi Foundation. You can use that IP address to configure other related parameters of `RAK7246 WisGate Developer D0` by logging in to the SSH Client Software, as stated in the previous step, now with the IP address of `RAK7246 WisGate Developer D0` from your Wi-Fi network.

:::tip 📝 NOTE

- At this point, you can only access the RAK7246 via ssh on the allocated IP address by the Wi-Fi network. In this example, it is `192.168.0.28`.
- You cannot access anymore the RAK7246 console on its default IP `192.168.230.1`.

:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\ipscanner1.png"
  width="60%"
  caption="Advance IP scanner for Windows OS"
/>

8. To link your gateway to TTN, you need to set up first the RAK Gateway LoRa by choosing "**2 Setup RAK Gateway LoRa concentrator**".

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-8.png"
  width="60%"
  caption="Choosing Setup RAK Gateway LoRa"
/>

9. Then, you need to select **Server is TTN** as the LoRaWAN server and select the right frequency that will match your gateway and region. The [supported frequency plan of TTN](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) can be found on their website.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-9.png"
  width="60%"
  caption="Selecting TTN as the LoRaWAN server"
/>

10. For this example, you will be using EU868 Frequency Plan. Choose “**4 EU_863_870**”.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-10.png"
  width="60%"
  caption="Selecting the TTN channel plan"
/>

11. After choosing the correct frequency, the success message will appear, as shown in **Figure 16**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-11.png"
  width="60%"
  caption="Successfully changed the frequency"
/>

12. You need to check if the right SERVER_ADDRESS is used to connect to TTN V3. To do this, choose “**4 Edit packet-forwarder config**” from the configuration options.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-12.png"
  width="60%"
  caption="Checking if TTNv3 is used for the connection"
/>

13.  You will be editing a JSON file to configure the server_address to **eu1.cloud.thethings.network**. To save the changes you made, if there is any, press `CTRL + X` to exit the editor and select yes to confirm the changes.

:::tip 📝 NOTE:

There are three server clusters available for TTN V3. In this guide, you will use `eu1.cloud.thethings.network`. You need to select the closes one in your country or location for optimized performance.

The available [TTN V3 clusters](https://console.cloud.thethings.network/) are:

- North American Region - `nam1.cloud.thethings.network`
- European Region - `eu1.cloud.thethings.network`
- Australian Region - `au1.cloud.thethings.network`

:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-13.png"
  width="60%"
  caption="Changing Server Name to eu1.cloud.thethings.network"
/>

14. Restart the Packet-forwarder by choosing “**3 Restart Packet-forwarder**” from the configuration options. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\RAK7246G-14.png"
  width="60%"
  caption="Restarting the Packet-forwarder"
/>

### Setting Up the Network Server

#### Connect RAK7246 WisGate Developer D0 to TTNv3

This section shows how to connect RAK7246 WisGate Developer D0 to TTNv3.

1. Create a [TTN account](https://www.thethingsnetwork.org/) if you don't have one yet. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\TTS1.png"
  width="80%"
  caption="TTN V3 Website"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\TTS2.png"
  width="80%"
  caption="Creating TTN V3 Account"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\TTS3.png"
  width="80%"
  caption="Email Validation"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\TTS4.png"
  width="80%"
  caption="Activating Your Account"
/>

2.  Make sure you are in the right [TTN cluster](https://console.cloud.thethings.network/), and then log in to TTN. Use your The Things ID credentials to log in.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\TTS6.png"
  width="80%"
  caption="Login website for TTN"
/>

3. After you have logged in, you need to register your gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways > + Add gateway**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw1.png"
  width="80%"
  caption="Creating a gateway"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw2.png"
  width="80%"
  caption="Gateway console in TTN V3"
/>

4. Fill in the needed information:

* **Owner** – Automatically filled by The Things Stack, based on your account or created Organization. (e.g. rak-discovery)
* **Gateway ID** – This will be the unique ID of your gateway in the Network. ID must contain only lowercase letters, numbers, and dashes (-). (e.g. rak-d0-ph-las-pinas)
* **Gateway EUI** - A 64 bit extended unique identifier for your gateway. This is where the Gateway you get on step 4 of Configuring the RAK7246 WisGate Developer D0 above. (e.g. B827EBFFFE81) 
* **Gateway name** – A name for your gateway. (e.g. RAK D0 Pilar Las Pinas PH)
* **Gateway description (optional)** - Optional gateway description; can also be used to save notes about the gateway.
* **Gateway Server address** - The address of the Gateway Server to connect to (i.e. eu1.cloud.thethings.network).
* **Frequency plan** - The frequency plan used by the gateway.

:::tip 📝 NOTE:

- This tutorial is based on using the EU868 frequency band and the server address (TTN cluster) is **eu1.cloud.thethings.network**.
- Also, you will be using Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended).

:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw3.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

* To register your gateway, scroll down and click **Create gateway**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw4.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw5.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

5. Gateway is now registered to TTN V3. Click **Live data** to check if the gateway already working.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw6.png"
  width="80%"
  caption="Gateway is already created"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\rak7246g-gateway\gw7.png"
  width="80%"
  caption="Gateway is working when Live data has gateway status"
/>


#### Creating a LoRaWAN Application in TTN

This section will guide you on how to set up using The Things Stack Community Edition.

1. Go to the [TTN website](https://www.thethingsnetwork.org/).

2. Go to **CONSOLE**, then choose **Europe 1**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS5.png"
  width="80%"
  caption="Console of The Things Stack"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS6.png"
  width="80%"
  caption="Europe 1 network server"
/>

3.  After choosing Europe 1, click on **Create an application**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS7.png"
  width="80%"
  caption="Creating a new application"
/>

4. Add the WisBlock Kit 2 by clicking the **Create application**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS8.png"
  width="80%"
  caption="Creating a WisBlock Kit 2 application"
/>

5. Click **End devices**, then **Add end device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS9.png"
  width="80%"
  caption="Adding an end device"
/>

6.  Choose **Manually** to register the end device. Fill in the required details and click **Register end device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS10.png"
  width="80%"
  caption="First step of registering an end device"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS11.png"
  width="80%"
  caption="Second step of registering an end device"
/>

7. In the End devices tab, click **General settings**, then fill in the  **End device name** and **End device description**. After that, press **Save changes**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS12.png"
  width="80%"
  caption="End devices and General settings"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS13.png"
  width="80%"
  caption="End device name and End device description"
/>

8. Then, click on **Payload formatters** > **Uplink** > **Formatter type** and choose **Javascript**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS14.png"
  width="80%"
  caption="Payload formatters setup"
/>

9. Delete the default code of the **Formatter parameter** field. Copy and paste the code below, and click **Save changes**.

```js
function Decoder(bytes, port) 
{
  var decoded = {};
  
  if (port== 2)
  {
    var temp  = ((bytes[1]) << 8) | (bytes[2]);
    temp = (temp/100.0);
    decoded.temp = temp;
    
    var hum  = ((bytes[3]) << 8) | (bytes[4]);
    hum = (hum/100.0);
    decoded.hum = hum;
    
    var press = (bytes[5] << 24) | (bytes[6] << 16) | (bytes[7] << 8) | (bytes[8]);
    press = (press / 100.0);
    decoded.press = press;
    
    var light = ((bytes[9]) << 8) | (bytes[10]);
    light = (light / 100.0);
    decoded.light = light;

    return decoded;
  }
}
```

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\the-things-stack-kit1\TTS15.png"
  width="80%"
  caption="Payload formatters using Javascript"
/>

12. After doing all the steps, set up first your Lora device so that it can send data to your The Things Stack account. 

### Setting Up the Device

This section will guide you on how to set up your device.

1. Download the [Arduino IDE](https://www.arduino.cc/en/software), then install it on your PC or laptop.

:::warning ⚠️ WARNING
If you are using Windows 10:
Do NOT install the Arduino IDE from the Microsoft App Store. Install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino1.png"
  width="80%"
  caption="Downloading the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino2.png"
  width="80%"
  caption="Just download the IDE without any cost"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino3.png"
  width="50%"
  caption="Installing the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino4.png"
  width="50%"
  caption="Completing the installation of Arduino IDE"
/>


2. Open the Arduino IDE, then install the **RAKwireless BSP support for the Arduino Board Manager**. 

3. Click on **File** -> **Preferences**. In the **Preferences** window, look for **Additional Boards Manager URLs**, then click the icon on the right side.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino6.png"
  width="80%"
  caption="Preferences setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino7.png"
  width="80%"
  caption="Preferences window"
/>


4. Copy **`https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json`** and paste it into the new window, then click **OK** > **OK**.




<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino8.png"
  width="80%"
  caption="RAKwireless BSP support for the Arduino Board Manager setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino9.png"
  width="80%"
  caption="Completing the setup of RAKwireless BSP support for the Arduino Board Manager"
/>

5. Go to **Tools** > **Board: "Arduino Uno"** > **Boards Manager**. Type **RAK** in the search bar, and the RAKwireless Core modules will be shown in the window.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino10.png"
  width="80%"
  caption="Boards Manager"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino11.png"
  width="80%"
  caption="Installing RAKwireless nRF boards"
/>

6. Choose **RAKwireless nRF Boards**, then click **Install**. After installing the RAK4631 Arduino BSP (Board Support Package), click **Close**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino12.png"
  width="80%"
  caption="Successful installation of RAKwireless nRF boards"
/>

7. After the installation of the RAKwireless nRF Boards core module, copy the code in the [GitHub repo](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/solutions/Weather_Monitoring/Weather_Monitoring.ino), and paste it to the Arduino IDE. Save this file as "**Weather_Monitoring.ino**".

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino13.png"
  width="80%"
  caption="Github code for WisBlock Kit 2"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino14.png"
  width="80%"
  caption="Copy paste the code to the Arduino IDE"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino15.png"
  width="80%"
  caption="Save the file as Weather_Monitoring.ino"
/>

8. Install all the libraries needed by the **WisBlock Kit 2**, as shown in **Figure 57**. Just click the links in the sketch, then install them one by one.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino16.png"
  width="80%"
  caption="Installing the WisBlock Kit 2 libraries"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino17.png"
  width="80%"
  caption="Installing the SX126x Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino18.png"
  width="80%"
  caption="Completing the installation of SX126x Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino19.png"
  width="80%"
  caption="Installing the LPS22HB Arduino library"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino20.png"
  width="80%"
  caption="Completing the installation of LPS22HB Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino21.png"
  width="80%"
  caption="Installing the SHTC3 Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino22.png"
  width="80%"
  caption="Completing the installation of SHTC3 Arduino library"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino23.png"
  width="80%"
  caption="Installing the OPT3001 Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino24.png"
  width="80%"
  caption="Completing the installation of OPT3001 Arduino library"
/>

9. After all the libraries are installed, go to **Tools** > **Board: “Arduino Uno”** > **RAKwireless nRF Modules** > **WisBlock RAK4631**. 


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino25.png"
  width="80%"
  caption="Board configuration using WisBlock RAK4631"
/>


10. Compile the "**Weather_Monitoring.ino**" by pressing the check button in the Arduino IDE. Wait after the code compiled is successful, and the **Done compiling** status appears.



<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino26.png"
  width="80%"
  caption="Compiling the Weather_Monitoring.ino"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino27.png"
  width="80%"
  caption="Done compiling Weather_Monitoring .ino"
/>


11. After a successful compilation, assemble the hardware of **WisBlock Kit 2**. All parts are shown in **Figure 69**. All details about **WisBlock Kit 2** can be found on the [GitHub Repo](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/Weather_Monitoring). 

  - Connect the **RAK4631** in the **CPU SLOT** of the **RAK5005-O**.
  - Next, attach the following WisBlock to their corresponding slots:
      - **RAK1901** to the **SLOT A**
      - **RAK1903** to the **SLOT B**


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\rak-kit1-1.png"
  width="70%"
  caption="Parts list of WisBlock Kit 2 and connection guidelines"
/>

12. Finally, place the **RAK1902** to the **SLOT D**. Screw all the edges so that the connection is firm and tight to avoid a loose connection. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\rak-kit1-2.png"
  width="60%"
  caption="Connecting the RAK1902 to the SLOT D"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\rak-kit1-3.png"
  width="60%"
  caption="Mounting the screws of parts list to the base board RAK5005-O"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\rak-kit1-4.png"
  width="60%"
  caption="Mounting of the RAK1902 using screw at bottom of RAK5005-O"
/>


13. Attached also are the **LORA** and **BLE** antennas to the **RAK4631 LPWAN CPU**. 

:::warning ⚠️ WARNING
Make sure to attach the antennas first before powering on the **WisBlock Kit 2** to avoid damaging the Weather Monitoring kit.
:::


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\rak-kit1-5.png"
  width="80%"
  caption="USB and Antenna connection using RAK5005-O and RAK4631"
/>

14. Go back to your The Things Stack account. Go to **Applications**  > **Wisblock Kit2 Weather Monitoring** > **End devices** > **Wisblock kit2 weather monitoring**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\TTS_kit1.png"
  width="80%"
  caption="Copying the end device keys"
/>


15. Copy the **AppEUI**, **DevEUI**, and **AppKey**, then paste them into any text editor. Use the Toggle, Copy, and Visibility buttons to copy the correct format. 


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\TTS1_kit1.png"
  width="80%"
  caption="Paste it to the text editor"
/>

    
16. Open again your **Arduino IDE**. Change the keys of the sketch/code the keys from The Things Stack end device copied to the text editor from line 74 to line 76. Connect your complete assembled **WisBlock Kit 2** to your PC or laptop to the USB. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino29.png"
  width="80%"
  caption="Changing the OTAA keys of the sketch/code"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino29_1.png"
  width="80%"
  caption="Keys are updated using the The Things Stack keys"
/>


17. Upload your sketch/code Weather_Monitoring.ino to the **WisBlock RAK4631** after updating the keys by pressing the **Upload** button. Double check if the Arduino IDE Board and Port is using **WisBlock RAK4631** to have a successful code uploading.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino29_2.png"
  width="80%"
  caption="Double check the board and COM port"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino29_3.png"
  width="80%"
  caption="Press the upload button to program the WisBlock Kit 2 using RAK4631"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\arduino29_4.png"
  width="80%"
  caption="Successful code Uploading"
/>

18. Check again your **The Things Stack** account and go to **Applications** > **Wisblock Kit2 Weather Monitoring** > **Live Data**. Wait for the uplink data messages that are updated every 20 seconds.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-device\TTS16.png"
  width="80%"
  caption="Successful WisBlock Kit 2 onboarding using The Things Stack"
/>

### Setting Up IoT Dashboard Using Ubidots

This section will guide you on how to integrate your application using Ubidots.

1. Go to [ubidots.com](https://ubidots.com), then click **SIGN UP**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub1.png"
  width="80%"
  caption="Sign up a Ubidots account"
/>


2. Choose **TAKE ME TO UBIDOTS STEM**, and fill in all the requirements to sign up for an account.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub2.png"
  width="80%"
  caption="Ubidots using STEM account"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub3.png"
  width="80%"
  caption="Sign up for free account"
/>

3. Go to **Devices** > **Devices**, and click **Create Device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub4.png"
  width="80%"
  caption="Device menu of Ubidots"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub5.png"
  width="80%"
  caption="Create Device"
/>

4. A window on the right side pops up, and choose the following:
   
   - Connectivity: **LoraWAN**
   - Hardware Type: **Dev Kits**
   - Device: **Blank Device**. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub6.png"
  width="80%"
  caption="Choose Blank Device"
/>


5. Then, a window will appear, and fill in **Device name** and **Device label**. Once done, press the check button.

  - Device name: **Weather Monitoring**
  - Device label: **wisblock-kit2-weather-monitoring**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub7_1.png"
  width="80%"
  caption="Edit Add New Device for desired name"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub8_1.png"
  width="80%"
  caption="Device Weather Monitoring was created"
/>

6. After adding the device, fill in the **Description** and **SET LOCATION**. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub8_1_1.png"
  width="80%"
  caption="Set your desired location"
/>

7. After filling in, go to **Plugins**, then click **Create Data Plugin**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub9.png"
  width="80%"
  caption="Choose Devices then Plugins"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub10.png"
  width="80%"
  caption="Create Data Plugin"
/>

8. A window on the right side pops up, and choose **The Things Stack**. Follow the instructions given by the plugin, then click the forward button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub11.png"
  width="80%"
  caption="Choose The Things Stack LoraWAN devices"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub12.png"
  width="80%"
  caption="Click forward button"
/>

9. Under the Ubidots Token, use **Default token**, then click again the forward button. 


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub13.png"
  width="80%"
  caption="Choose Default token"
/>

10. Finally, press the check button to install the plugin.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub14.png"
  width="80%"
  caption="Completing the plugins"
/>

11. After installing the plugin, click on **The Things Stack**, then go to **Decoder**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub15.png"
  width="80%"
  caption="Press The Thing Stack"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub16.png"
  width="80%"
  caption="Save then go to Decoder"
/>

12. At the **Decoding Function**, execute the following steps, and then click **SAVE & MAKE LIVE**.
    
       - Uncomment **line 37** (Remove `//`)
       - Comment **line 41** and **line 42** (Add `//`)
       - Comment **line 48** and **line 59** (Add `/*` & `*/`)


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub17.png"
  width="80%"
  caption="Editing the Decoding Function"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub18.png"
  width="80%"
  caption="After editing, press SAVE & MAKE LIVE"
/>

13. Go back to the The Things Stack account and select **Go to applications**.
    
<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS17.png"
  width="80%"
  caption="Go to The Things Stack account applications"
/>

14. Head on to your device under Applications menu, then click **wisblock-kit2-weathermonitoring**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS18.png"
  width="80%"
  caption="Go to your device wisblock-kit2-weathermonitoring"
/>


15. Under your device tab, choose **Integrations** > **Webhooks** and then click the **Add webhook** button.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS19.png"
  width="80%"
  caption="Add webhook integration"
/>


16. Choose **Custom webhook**, then fill in all the necessary fields like **Webhook ID** and **Webhook format**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS20.png"
  width="80%"
  caption="Choose Custom webhook"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS21.png"
  width="80%"
  caption="Editing webhook"
/>

17.  Go back again to your Ubidots account **Weather Monitoring** to obtain **Base URL**, **X-Auth-Token**, and **Uplink message**. 
    
<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS22.png"
  width="80%"
  caption="Editing webhook"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub19.png"
  width="80%"
  caption="Go back to Ubidots account then go to Devices and Weather Monitoring"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub20_1.png"
  width="80%"
  caption="Copying the Token for The Things Stack Webhook token"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub21.png"
  width="80%"
  caption="Copying the Ubidots URL for The Things Stack Base URL and Uplink message"
/>

18.  After filling in the important fields, click the **Add webhook** button.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\TTS23.png"
  width="80%"
  caption="Completing the Webhook integration"
/>

19. Now, you need to create a dashboard in **Ubidots**. Click **Data** > **Dashboards**, then click the **Add new Dashboard** button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub22.png"
  width="80%"
  caption="Choose Data the Dashboards"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub23.png"
  width="80%"
  caption="Adding a new dashboard"
/>


20. Edit the **Add new Dashboard** window to your desired details, then press check button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub53.png"
  width="80%"
  caption="Editing the Dashboard general information"
/>

21. Click **Add new Widget**. A window appears on the right side, and choose **Thermometer**. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub54.png"
  width="80%"
  caption="Adding a widget by pressing +"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub55.png"
  width="80%"
  caption="Choose Thermometer widget for temp variable"
/>


22. Edit the **Thermometer** widget. Change it into **Temperature**, then click the **Add Variables** button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub56.png"
  width="80%"
  caption="Adding a variable and changing the widget into Temperature"
/>


23. A window will pop up. Click **wisblock-kit2-weather-monitoring**, select the **temp** variable, then press the check button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub30.png"
  width="80%"
  caption="Selecting variables in a widget"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub31.png"
  width="80%"
  caption="Choose temp variable"
/>


24.  Finally, click the check button to save.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub32.png"
  width="80%"
  caption="Pressing check button to finalize the widget"
/>

25.  After adding the Temperature widget, click on the plus sign at the right side to add another widget. This time, choose **Gauge**, and add the **Humidity** widget. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub60.png"
  width="80%"
  caption="Adding Gauge to Humidity widget"
/>


26.  After editing the name into **Humidity**, click **Add Variables**. Select **wisblock-kit2-weather-monitoring**, choose the **hum** variable, then press the check button. 


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub61.png"
  width="80%"
  caption="Adding hum variable to Humidity widget"
/>

27. Finally, click the check button to save.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub62.png"
  width="80%"
  caption="Completing the Humidity widget"
/>

28. Use the same method in adding the Temperature and Humidity widgets. Just click on the plus sign at the right to add another widget, then choose **Gauge**. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub63.png"
  width="80%"
  caption="Adding Gauge to Pressure widget"
/>

29.  This time, add the **Pressure** widget under Gauge, then click **Add Variables**. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub64.png"
  width="80%"
  caption="Adding variable to Pressure widget"
/>


30. After editing the name into **Pressure**, click **wisblock-kit2-weather-monitoring**, choose the **press** variable, then press the check button. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub65.png"
  width="80%"
  caption="Adding press variable to Pressure widget"
/>

31. Edit the **Range** into 0-1000. After doing it, click the check button to save.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub66.png"
  width="80%"
  caption="Editing Pressure widget range to 0-1000 the press check button"
/>

32.   Finally, the last widget to be created is the **Luminosity**. Click on the plus sign at the right to add another widget, choose **Gauge**, add the **Luminosity** widget, then click **Add Variables**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub67.png"
  width="80%"
  caption="Adding Gauge for Luminosity widget"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub68.png"
  width="80%"
  caption="Adding variable of Luminosity widget"
/>


33.  After editing the name into **Luminosity**, click **wisblock-kit2-weather-monitoring**, choose the **light** variable, then click check button. 


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub69.png"
  width="80%"
  caption="Adding light variable of Luminosity widget"
/>

34. Edit the **Range** into 0-1000. After doing it, click the check button to save.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub70.png"
  width="80%"
  caption="Editing Luminosity widget range to 0-1000 the press check button"
/>

35. After adding the four widgets, you will then see the same page, as shown in **Figure 131**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub71.png"
  width="80%"
  caption="Final appearance of the widgets"
/>

36. Then, go to **Devices** > **Devices** menu, and edit the variables. 

- For the **temp** variable:
    - Description: **Temperature**
    - Unit: **°C**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub72.png"
  width="80%"
  caption="Editing the temp variable"
/>



<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub73.png"
  width="80%"
  caption="Adding unit for temp variable"
/>


- For the **hum** variable: 
    - Description: **Humidity**
    - Unit: **%RH**


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub74.png"
  width="80%"
  caption="Editing the hum variable"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub75.png"
  width="80%"
  caption="Adding unit for hum variable"
/>
  
- For the **press** variable:
    - Description: **Pressure**
    - Unit: **hkPa**


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub76.png"
  width="80%"
  caption="Editing the press variable"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub77.png"
  width="80%"
  caption="Adding unit for press variable"
/>


- For the **light** variable:
    - Description: **Luminosity**
    - Unit: **lux** 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub78.png"
  width="80%"
  caption="Editing the light variable"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub79.png"
  width="80%"
  caption="Adding unit for light variable"
/>

After doing all these steps, you already finished the **WisBlock Kit 2 Weather Monitoring Project using Ubidots**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-2\wisblock-kit1-ubidots\ub82.png"
  width="80%"
  caption="Final dashboard of WisBlock Kit 2 Weather Monitoring"
/>

