---
sidebar: false
rak_img: /assets/images/knowledge-hub/rak-developer-kit/kit-3/kit3.png
rak_desc: This guide provides a step-by-step tutorial on how to use the RAK Developer Kit 3 (Tracker Kit).
tags:
  - User-Manual
  - RAK Developer Kit
  - WisBlock
  - WisGate
  - Tracker Kit
  - RAK7246
  - RAK4631
  - RAK5005-O
  - RAK1910
  - PuTTY
  - TTN
  - Arduino
  - Datacake
header:
  title: RAK Developer Kit 3 (Tracker Kit) Guide
  caption: by <b>Rally Uminga</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 13/01/2022 08:00 AM
---

# RAK Developer Kit 3 (Tracker Kit) Guide

## Overview

This guide is about learning how to setup a complete LoRaWAN application from device, gateway up to network server.It composes of the following sections:

- [Setting Up the Gateway](/Knowledge-Hub/Learn/RAK-Developer-Kit-3-Guide/#setting-up-the-gateway)
- [Setting Up the Network Server](/Knowledge-Hub/Learn/RAK-Developer-Kit-3-Guide/#setting-up-the-network-server)
- [Setting Up the Device](/Knowledge-Hub/Learn/RAK-Developer-Kit-3-Guide/#setting-up-the-device)
- [Setting Up IoT Dashboard Using Datacake](/Knowledge-Hub/Learn/RAK-Developer-Kit-3-Guide/#setting-up-iot-dashboard-using-datacake)


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
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\D0WifiAP1.png"
  width="80%"
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
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\putty2.png"
  width="60%"
  caption="PuTTY example"
/>

  - Mac OS
     Open the Terminal of Mac OS. Launch the Terminal application found in the **`/Applications/Utilities/`** directory, but you can also launch it from Spotlight. Press **Command + Spacebar** and type **“Terminal”**, then return.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\terminal3.png"
  width="60%"
  caption="Selecting Terminal on Mac"
/>

3. If you have connected to the gateway through Wi-Fi AP Mode, the IP Address is **192.168.230.1**. It will then prompt you to enter the username and password. Enter the default credentials:

   - Username: **pi**
   - Password: **raspberry**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\sshpi4.png"
  width="60%"
  caption="Command Line using SSH Client Software"
/>

4. From the previous step, get the **Gateway ID** by typing `sudo gateway-config` to your chosen SSH Client terminal editor. It can be found on top of the terminal console, as shown in the red box in **Figure 5**. You may copy it on a txt file or any notepad software. It will be used in setting up the gateway in [TTN V3](https://www.thethingsnetwork.org/). See **Figure 5** for reference. You will use it also as Gateway EUI in the latter part of this guide. In this example, the Gateway ID is **B827EBFFFE81**.

:::tip 📝 NOTE
In this guide, you will be using TTN (The Things Network) as the LNS (LoRaWAN Network Server). There are many other LNS available that you can use, as well. The configuration steps will be different depending on your chosen LNS, but the general LoRaWAN principle is the same.

Like for [RAK WisGate Edge Gateways](https://store.rakwireless.com/collections/wisgate-edge), it has built-in LNS that you can use.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig5.png"
  width="60%"
  caption="sudo gateway-config mode"
/>

5. You can now connect your gateway through Wi-Fi to access TTN. It can easily be done with the wireless capabilities of the Raspberry Pi Zero W by choosing **"5 Configure WIFI"**. By default, the RAK7246 WisGate Developer D0 Gateway works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig5_1.png"
  width="60%"
  caption="Configuring your Wifi"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig6.png"
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

To enable Wi-Fi Client Mode, you have to disable first the Wi-Fi AP Mode

:::

6. Once Wi-Fi AP Mode has been disabled by choosing **"2 Enable Client Mode/Disable AP Mode"**, you can now then connect to a new Wi-Fi Network by choosing **"4 Add New SSID for Client"**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig7.png"
  width="60%"
  caption="Add New SSID for Client"
/>

- Start by selecting your country of residence.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig8.png"
  width="60%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect:

:::warning ⚠️ WARNING
Ensure to input the correct Wi-Fi SSID and password, or you will not be able to connect to the RAK7246 again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the [Optional Configurations](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Quickstart/#optional-configurations) procedure listed in the Accessing the Internet, which is applicable for all Raspberry Pi-based gateways to work again in Wi-Fi AP mode.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig9.png"
  width="60%"
  caption="SSID of the Network you want to connect to"
/>

- Enter the SSID of the network you want to connect.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gatewayconfig10.png"
  width="60%"
  caption="Password of the Wi-Fi"
/>

- Lastly, reboot the gateway using the command sudo reboot in the command line and it will connect to the router successfully.

```
sudo reboot
```

7.	After rebooting the RAK7246 WisGate Developer D0, you should check if it is connected successfully to your Wi-Fi network. You may use your local network modem/router admin console to check if RAK7246 is successfully connected.

In this example, the admin console can be access via `http://192.168.0.1`. It is also common to have it on `http://192.168.1.1` on some routers. Take note on the IP address alloted to the RAK7246 by your Wi-Fi network.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\wifirouter1.png"
  width="80%"
  caption="Web UI of local modem/router"
/>

You can also use [Advance IP Scanner](https://download.advanced-ip-scanner.com/download/files/Advanced_IP_Scanner_2.5.3850.exe) for Windows OS, or [Angry IP Scanner](https://angryip.org/download/) for Mac OS, and locate the IP address of RAK7246 WisGate Developer D0 in your Wi-Fi device.

As seen in **Figure 12**, it is `192.168.0.28`, where the company is Raspberry Pi Foundation. You can use that IP address to configure other related parameters of `RAK7246 WisGate Developer D0` by logging in to the SSH Client Software, as stated in the previous step, now with the IP address of `RAK7246 WisGate Developer D0` from your Wi-Fi network.

:::tip 📝 NOTE

- At this point, you can only access the RAK7246 via ssh on the allocated IP address by the Wi-Fi network. In this example, it is `192.168.0.28`.
- You cannot access anymore the RAK7246 console on its default IP `192.168.230.1`.

:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\ipscanner1.png"
  width="60%"
  caption="Advance IP scanner for Windows OS"
/>

8.	To link your gateway to TTN, you need to setup first the RAK Gateway LoRa by choosing "**2 Setup RAK Gateway LoRa concentrator**".

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-8.png"
  width="60%"
  caption="Choosing Setup RAK Gateway LoRa"
/>

9. Then, you need to select **Server is TTN** as the LoRaWAN server and select the right frequency that will match your gateway and region. The [supported frequency plan of TTN](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) can be found on their website.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-9.png"
  width="60%"
  caption="Selecting TTN as the LoRaWAN server"
/>

10. For this example, you will be using EU868 Frequency Plan. Choose “**4 EU_863_870**”.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-10.png"
  width="60%"
  caption="Selecting the TTN channel plan"
/>

11. After choosing the correct frequency, the success message will appear, as shown in **Figure 16**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-11.png"
  width="60%"
  caption="Successfully changed the frequency"
/>

12.	You need to check if the right SERVER_ADDRESS is used to connect to TTN V3. To do this, you need to choose “**4 Edit packet-forwarder config**” from the Configuration Options.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-12.png"
  width="60%"
  caption="Checking if TTNv3 is used for the connection"
/>

13.  You will be editing a JSON file to configure the server_address to **eu1.cloud.thethings.network**. To save the changes you made, if there is any, press `CTRL + X` to exit the editor and select yes to confirm the changes.

:::tip 📝 NOTE:

There are three server clusters available for TTN V3. In this guide, we will use `eu1.cloud.thethings.network`. You need to select the closes one in your country or location for optimized performance.

The available [TTN V3 clusters](https://console.cloud.thethings.network/) are:

- North American Region - `nam1.cloud.thethings.network`
- European Region - `eu1.cloud.thethings.network`
- Australian Region - `au1.cloud.thethings.network`

:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-13.png"
  width="60%"
  caption="Changing Server Name to eu1.cloud.thethings.network"
/>

14. Restart the Packet-forwarder by choosing “**3 Restart Packet-forwarder**” from the configuration options.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\RAK7246G-14.png"
  width="60%"
  caption="Restarting the Packet-forwarder"
/>

### Setting Up the Network Server

#### Connect RAK7246 WisGate Developer D0 to TTNv3

This section shows how to connect RAK7246 WisGate Developer D0 to TTNv3.

1. Create a [TTN account](https://www.thethingsnetwork.org/) if you don't have one yet.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\TTS1.png"
  width="80%"
  caption="TTN V3 Website"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\TTS2.png"
  width="80%"
  caption="Creating TTN V3 Account"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\TTS3.png"
  width="80%"
  caption="Email Validation"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\TTS4.png"
  width="80%"
  caption="Activating Your Account"
/>

2.  Make sure you are in the right [TTN cluster](https://console.cloud.thethings.network/), and then log in to TTN. Use your The Things ID credentials to log in.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\TTS6.png"
  width="80%"
  caption="Login website for TTN"
/>

3. After you have logged in, you need to register your gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways > + Add gateway**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw1.png"
  width="80%"
  caption="Creating a gateway"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw2.png"
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
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw3.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

* To register your gateway, scroll down and click **Create gateway**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw4.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw5.png"
  width="80%"
  caption="Filling in the information to add the gateway in the TTN V3"
/>

5. Gateway is now registered to TTN V3. Click **Live data** to check if the gateway already working.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw6.png"
  width="80%"
  caption="Gateway is already created"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\rak7246g-gateway\gw7.png"
  width="80%"
  caption="Gateway is working when Live data has gateway status"
/>

#### Creating a LoRaWAN Application in TTN

This section will guide you on how to set up using The Things Stack Community Edition.

1. Go to the [TTN website](https://www.thethingsnetwork.org/).


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS1.png"
  width="80%"
  caption="Registering a new account"
/>

2. Fill in all your details to create a new account. Click on **Create account**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS2.png"
  width="80%"
  caption="Creating a new account"
/>

3. Validate the link from your email account so you can now start onboarding Lora devices.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS3.png"
  width="80%"
  caption="Validate your registered account"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS4.png"
  width="80%"
  caption="Activate your account"
/>

4. Go to **CONSOLE**, then choose Europe 1.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS5.png"
  width="80%"
  caption="Console of The Things Stack"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS6.png"
  width="80%"
  caption="Europe 1 network server"
/>

5.	After choosing Europe 1, click on **Create an application**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS7.png"
  width="80%"
  caption="Creating a new application"
/>

6. Add the WisBlock Kit 3 by clicking the **Create application**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS8.png"
  width="80%"
  caption="Creating a WisBlock Kit3 application"
/>

7. Click **End devices**, then **Add end device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS9.png"
  width="80%"
  caption="Adding an end device"
/>

8.	Choose **Manually** to register the end device. Fill in the required details and click **Register end device**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS10.png"
  width="80%"
  caption="First step of registering an end device"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS11.png"
  width="80%"
  caption="Second step of registering an end device"
/>

9. In the End devices tab, click **General settings**, then fill in the  **End device name** and **End device description**. After that, press **Save changes**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS12.png"
  width="80%"
  caption="End devices and General settings"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS13.png"
  width="80%"
  caption="End device name and End device description"
/>

10. Then, click on **Payload formatters** > **Uplink** > **Formatter type** and choose **Javascript**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS14.png"
  width="80%"
  caption="Payload formatters setup"
/>

11.	Delete the default code of the **Formatter parameter** field. Copy and paste the code below, and click **Save changes**.

```js
function Decoder(bytes, port)
{
  var longitude_int, latitude_int;
  var decoded = {};

  if (port === 2)
  {
    if(bytes[0]==9) // check if the header byte is 9.
    {
      latitude_int = (bytes[1] << 24) | (bytes[2] << 16) | (bytes[3] << 8) | (bytes[4]);
      decoded.latitude = latitude_int / 100000;
      longitude_int = (bytes[6] << 24) | (bytes[7] << 16) | (bytes[8] << 8) | (bytes[9]);
      decoded.longitude = longitude_int / 100000;
      return decoded;
    }
  }
}
```

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\the-things-stack-kit3\TTS15.png"
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
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino1.png"
  width="80%"
  caption="Downloading the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino2.png"
  width="80%"
  caption="Just download the IDE without any cost"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino3.png"
  width="50%"
  caption="Installing the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino4.png"
  width="50%"
  caption="Completing the installation of Arduino IDE"
/>


2. Open the Arduino IDE, then install the **RAKwireless BSP support for the Arduino Board Manager**.

3. Click on **File** > **Preferences**. In the **Preferences** window, look for **Additional Boards Manager URLs**, then click the icon on the right side.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino6.png"
  width="80%"
  caption="Preferences setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino7.png"
  width="80%"
  caption="Preferences window"
/>


4. Copy **`https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json`** and paste it into the new window, then click **OK** > **OK**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino8.png"
  width="80%"
  caption="RAKwireless BSP support for the Arduino Board Manager setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino9.png"
  width="80%"
  caption="Completing the setup of RAKwireless BSP support for the Arduino Board Manager"
/>

5. Go to **Tools** > **Board: "Arduino Uno"** > **Boards Manager**. Type **RAK** in the search bar, and the RAKwireless Core modules will be shown in the window.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino10.png"
  width="80%"
  caption="Boards Manager"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino11.png"
  width="80%"
  caption="Installing RAKwireless nRF boards"
/>


6. Choose **RAKwireless nRF Boards**, then click **Install**. After installing the RAK4631 Arduino BSP (Board Support Package), click **Close**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino12.png"
  width="80%"
  caption="Successful installation of RAKwireless nRF boards"
/>

7. After the installation of the RAKwireless nRF Boards core module, copy the code in the [GitHub repo](https://github.com/RAKWireless/WisBlock/blob/master/examples/RAK4630/solutions/GPS_Tracker/GPS_Tracker.ino), and paste it to the Arduino IDE. Save this file as "**GPS_Tracker.ino**".

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino13.png"
  width="80%"
  caption="Github code for WisBlock Kit 3"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino14.png"
  width="80%"
  caption="Copy paste the code to the Arduino IDE"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino15.png"
  width="80%"
  caption="Save the file as GPS_Tracker.ino"
/>

8. Install all the libraries needed by the **WisBlock Kit 3**, as shown in **Figure 62**. Just click the links in the sketch, then install them one by one.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino16.png"
  width="80%"
  caption="Installing the WisBlock Kit 3 libraries"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino18.png"
  width="80%"
  caption="Completing the installation of SX126x Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino20.png"
  width="80%"
  caption="Completing the installation of LIS3DH Arduino library"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino22.png"
  width="80%"
  caption="Completing the installation of TinyGPS Arduino library"
/>

9. After all the libraries are installed, go to **Tools** > **Board: “Arduino Uno”** > **RAKwireless nRF Modules** > **WisBlock RAK4631**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino25.png"
  width="80%"
  caption="Board configuration using WisBlock RAK4631"
/>


10. Compile the "**GPS_Tracker.ino**" by pressing the check button in the Arduino IDE. Wait after the code compiled is successful, and the **Done compiling** status appears.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino26.png"
  width="80%"
  caption="Compiling the GPS_Tracker.ino"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino27.png"
  width="80%"
  caption="Done compiling GPS_Tracker.ino"
/>

11. After a successful compilation, assemble the hardware of **WisBlock Kit 3**. All parts are shown in **Figure 69**. All details about **WisBlock Kit 3** can be found on the [GitHub Repo](https://github.com/RAKWireless/WisBlock/tree/master/examples/RAK4630/solutions/GPS_Tracker).


  -  Connect the **RAK4631** in **CPU SLOT** of the **RAK5005-O**.
  -  Next, attach the **RAK1910** to the **SLOT A** port.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\rak-kit1-1.png"
  width="60%"
  caption="Parts list of WisBlock Kit 3 and connection guidelines"
/>

12. Finally, place the **RAK1904** to the **SLOT D**. Screw all the edges so that connection is firm and tight to avoid loose connection.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\rak-kit1-2.png"
  width="60%"
  caption="Connecting the RAK1904 to the SLOT D"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\rak-kit1-3.png"
  width="60%"
  caption="Mounting the screws of parts list to the base board RAK5005-O"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\rak-kit1-4.png"
  width="60%"
  caption="Mounting of the RAK1904 using screw at bottom of RAK5005-O"
/>

13.  Attached also are the **LORA** and **BLE** antennas to the **RAK4631 LPWAN CPU**.

:::warning ⚠️ WARNING
Make sure to attach the antennas first before powering on the **WisBlock Kit 3** to avoid damaging the GPS Tracker kit.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\rak-kit1-5.png"
  width="60%"
  caption="USB and Antenna connection using RAK5005-O and RAK4631"
/>

14. Go back to your The Things Stack account. Go to **Applications** > **WisBlock Kit3 GPS Tracker** > **End devices** > **wisblock-kit3-gpstracker** > **Overview**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\TTS_kit1.png"
  width="80%"
  caption="Copying the end device keys"
/>

15. Copy the **AppEUI**, **DevEUI**, and **AppKey** then paste them to any text editor. Use Toggle, Copy, and Visibility buttons to copy the correct format.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\TTS1_kit1.png"
  width="80%"
  caption="Paste it to the text editor"
/>


16. Open again your **Arduino IDE**. Change the keys of the sketch/code the keys from The Things Stack end device copied to the text editor from line 78 to line 80. Connect your complete assembled **WisBlock Kit 3** to your PC or laptop to the USB.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino29.png"
  width="80%"
  caption="Changing the OTAA keys of the sketch/code"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino29_1.png"
  width="80%"
  caption="Keys are updated using the The Things Stack keys"
/>

17. Upload your sketch/code GPS_Tracker.ino to the **WisBlock RAK4631** after updating the keys by pressing the **Upload** button. Double check if the Arduino IDE Board and Port is using **WisBlock RAK4631** to have a successful code uploading.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino29_2.png"
  width="80%"
  caption="Double check the board and COM port"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino29_3.png"
  width="80%"
  caption="Press the upload button to program the WisBlock Kit 3 using RAK4631"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\arduino29_4.png"
  width="80%"
  caption="Successful code Uploading"
/>

18.  Check again your **The Things Stack** account and go to **Applications** > **WisBlock Kit3 GPS Tracker** > **Live Data**. Wait for the uplink data messages that are updated every 10 seconds.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-device\TTS16.png"
  width="80%"
  caption="Successful WisBlock Kit 3 onboarding using The Things Stack"
/>

### Setting Up IoT Dashboard Using Datacake

This section will guide you on how to integrate your application using Datacake.

1. Go to [datacake.co](https://datacake.co). Click **Dashboard**, then select **Sign Up**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake1.png"
  width="80%"
  caption="Create Dashboard using Datacake"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake2.png"
  width="80%"
  caption="Choose Sign Up"
/>

2. Fill in all the requirements, then click **Create Account**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake3.png"
  width="80%"
  caption="Creating account using Datacake"
/>

3. Under the **Devices** tab, click the **Add Device** button.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake4.png"
  width="80%"
  caption="Add LoraWAN Device"
/>

4. A window will pop up. Select the following listed below, then click **Next**.

   - Device: **LoraWAN**
   - Datacake Product: **New Product**
   - Product Name: **WisBlock Kit3 GPS Tracker**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake5.png"
  width="80%"
  caption="Add New Product"
/>

5. On the same window, under the **Network Server** tab, choose **The Things Stack V3**, then click **Next**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake6.png"
  width="80%"
  caption="Choose The Things Stack V3"
/>

6.  Go back to your **The Things Stack** account. Copy the **End device ID** and **DevEUI** from your **The Things Stack** account. Then, add the **DEVEUI** and **NAME** from the **The Things Stack** device and click **Next**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\tts1.png"
  width="80%"
  caption="Copy the End device ID and DevEUI from The Things Stack account"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake7.png"
  width="80%"
  caption="Edit the DEVEUI and NAME"
/>

7. Finally, choose a free account of the **Add 1 device**. Wait until the **wisblock-kit3-gps-tracker** device appears.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake8.png"
  width="80%"
  caption="Choose Free Account"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake9.png"
  width="80%"
  caption="The wisblock-kit3-gps-tracker device was added"
/>

5. Under the **Members** tab, click **API Users**, then **Add API User**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake10.png"
  width="80%"
  caption="Adding API User in Members"
/>


6. Fill in all necessary information, then click **Save**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake11.png"
  width="80%"
  caption="Editing API User"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake12.png"
  width="80%"
  caption="Saving API User"
/>


7. After filling in, copy the **Datacake API Token**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake13.png"
  width="80%"
  caption="Datacake API Token"
/>


8. Then go back to the **The Things Stack** account, and head on to **Integrations** > **Webhook** > **Add webhook**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\tts2.png"
  width="80%"
  caption="Add Webhook Integration"
/>

9. Choose **Datacake**, then fill in all the data requirements.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\tts3.png"
  width="80%"
  caption="Add Datacake Integration"
/>


10. Paste the **Datacake API Token** and press **Create datacake webhook**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\tts4.png"
  width="80%"
  caption="Adding Datacake API Token"
/>

11. Go back to your **Datacake** account. Under the **Devices** tab, click **wisblock-kit3-gpstracker** > **Configuration** > **Fields**, then **Add Field**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake14.png"
  width="80%"
  caption="wisblock-kit3-gpstracker Settings"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake15.png"
  width="80%"
  caption="Configuration Settings"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake16.png"
  width="80%"
  caption="Adding a Field"
/>


12. An Add Field window will pop up. Choose the following details, then click **Add Field**.

  - Type: **Geolocation**
  - Name: **Location**

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake17.png"
  width="80%"
  caption="Adding a Geolocation Field"
/>

13. Delete the default **Payload Decoder**. Copy-paste the code below and click **Save**.

```js
function Decoder(bytes, port) {

    var datacakeFields = [];

    var latitude = (bytes[1] << 24 | bytes[2] << 16 | bytes[3] << 8 | bytes[4]) / 100000;
    var longitude = (bytes[6] << 24 | bytes[7] << 16 | bytes[8] << 8 | bytes[9]) / 100000;

    datacakeFields.push({
        field: "LOCATION",
        value: "(" + latitude + "," + longitude + ")"
    });

    return datacakeFields;
}
```

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake18.png"
  width="80%"
  caption="Editing the Payload Decoder"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake19.png"
  width="80%"
  caption="Saving the Payload Decoder"
/>

14. After adding the **Location** field, click **Devices** and select **Debug**. You will now see the **field** and **value** parameters.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake20.png"
  width="80%"
  caption="Debug log"
/>

15. Still under the **Devices** tab, click **Dashboard**, then **Add Widget**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake21.png"
  width="80%"
  caption="Adding dashboard and widget"
/>

16. A window will pop up, and you can now select a widget. For this example, choose **Map**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake22.png"
  width="80%"
  caption="Adding a map widget"
/>

17. After selecting **Map** widget, you can now start editing its data fields.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake23.png"
  width="80%"
  caption="Editing title of the map widget"
/>


18.  You can also add another data field by clicking **Add Field**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake24.png"
  width="80%"
  caption="Adding field of Data parameter of Map Widget"
/>

19. Add a **Location** field. Once done, click **Save**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake25.png"
  width="80%"
  caption="Adding Location Field"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake26.png"
  width="80%"
  caption="Saving the Map Widget"
/>


20.   After doing all these steps, you can now see the **Map** widget in the **Datacake** dashboard.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-3\wisblock-kit3-datacake\datacake27.png"
  width="80%"
  caption="Final Datacake Dashboard"
/>

Now, you have already completed setting up the **WisBlock Kit 3 GPS Tracker Project using Datacake Dashboard**.