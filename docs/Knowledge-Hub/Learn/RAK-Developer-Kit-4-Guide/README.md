---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/kit4.png
rak_desc: This guide provides a step-by-step tutorial on how to use the RAK Developer Kit 4 (Air Quality Kit).
tags:
  - User-Manual
  - RAK Developer Kit
  - WisBlock
  - WisGate
  - Air Quality Kit
  - RAK7246
  - RAK4631
  - TTN
  - BLE Antenna
  - Arduino
  - Ubidots
header:
  title: RAK Developer Kit 4 (Air Quality Kit) Guide
  caption: by <b>Anthony Aldrin Beltran</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 03/01/2022 08:00 AM
---

# RAK Developer Kit 4 (Air Quality Kit) Guide

## Overview

This guide is about learning how to set up a complete LoRaWAN application from device, gateway up to network server. It composes of the following sections:

- [Setting Up the Gateway](/Knowledge-Hub/Learn/RAK-Developer-Kit-4-Guide/#setting-up-the-gateway)
- [Setting Up the Network Server](/Knowledge-Hub/Learn/RAK-Developer-Kit-4-Guide/#setting-up-the-network-server)
- [Setting Up the Device](/Knowledge-Hub/Learn/RAK-Developer-Kit-4-Guide/#setting-up-the-device)
- [Setting Up IoT Dashboard Using Ubidots](/Knowledge-Hub/Learn/RAK-Developer-Kit-4-Guide/#setting-up-iot-dashboard-using-ubidots)


### Setting Up the Gateway

#### Configuring the RAK7246 WisGate Developer D0

This section will guide you on how to set up and configure your gateway.


:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway?](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

:::

Here are the steps in configuring the [RAK7246G WisGate Developer D0](https://store.rakwireless.com/collections/wisgate-developer/products/rak7246-lpwan-developer-gateway?variant=36313275465886):

1. By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID named **Rakwireless_XXXX** on your PC Wi-Fi network list.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-1.png"
  width="60%"
  caption="RAKwireless Access Point"
/>

:::tip 📝 NOTE
**XXXX** is the last 2&nbsp;bytes of your RAK7246 WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Also, the default IP address of the gateway provided below will be needed in connecting via SSH.

- Wi-Fi Password: **rakwireless**
- Default IP Address: **192.168.230.1**
:::

2. Log into the Gateway.

  - Windows OS
     SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there, namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, Putty is used.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-2-a.png"
  width="50%"
  caption="PuTTY Example"
/>

  - Mac OS
     Open the Terminal of Mac OS. Launch the Terminal application found in the **`/Applications/Utilities/`** directory, but you can also launch it from Spotlight. Press **Command + Spacebar** and type **Terminal**, then return.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-2-b.png"
  width="60%"
  caption="Selecting Terminal on Mac"
/>

3. If you have connected to the gateway through Wi-Fi AP Mode, the IP Address is **192.168.230.1**. It will then prompt you to enter the username and password. Enter the default credentials:

   - Username: **pi**
   - Password: **raspberry**

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-3.png"
  width="70%"
  caption="Command Line using SSH Client Software"
/>

4. From the previous step, get the **Gateway ID** by typing `sudo gateway-config` to your chosen SSH Client terminal editor. It can be found on top of the terminal console, as shown in the red box in **Figure 5**. You may copy it on a txt file or any notepad software. It will be used in setting up the gateway in [TTN V3](https://www.thethingsnetwork.org/). See **Figure 5** for reference. You will use it also as Gateway EUI in the latter part of this guide.

:::tip 📝 NOTE
In this guide, you will be using TTN (The Things Network) as the LNS (LoRaWAN Network Server). There are many other LNS available that you can use, as well. The configuration steps will be different depending on your chosen LNS, but the general LoRaWAN principle is the same.

Like for [RAK WisGate Edge Gateways](https://store.rakwireless.com/collections/wisgate-edge), it has built-in LNS that you can use.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-4.png"
  width="60%"
  caption="sudo gateway-config mode"
/>

5. You can now connect your gateway through Wi-Fi to access TTN. It can easily be done with the wireless capabilities of the Raspberry Pi Zero W by choosing **5 Configure WIFI**. By default, the RAK7246 WisGate Developer D0 Gateway works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-5.png"
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

6. Once Wi-Fi AP Mode has been disabled by choosing **2 Enable Client Mode/Disable AP Mode**, you can now then connect to a new Wi-Fi Network by choosing **4 Add New SSID for Client**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-6.png"
  width="60%"
  caption="Add New SSID for Client"
/>

- Start by selecting your country of residence.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-6-a.png"
  width="60%"
  caption="Selecting Country of Residence"
/>

- Enter the SSID of the network you want to connect.

:::warning ⚠️ WARNING
Ensure to input the correct Wi-Fi SSID and password, or you will not be able to connect to the RAK7246 again via SSH in Wi-Fi AP Mode. If stuck in this situation, follow the [Optional Configurations](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Quickstart/#optional-configurations) procedure listed in the Accessing the Internet, which is applicable for all Raspberry Pi-based gateways to work again in Wi-Fi AP mode.
:::


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-6-b.png"
  width="60%"
  caption="SSID of the Network you want to connect to"
/>

- Enter the SSID of the network you want to connect.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-6-c.png"
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
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-7-a.png"
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
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-7-b.png"
  width="70%"
  caption="Advance IP Scanner for Windows OS"
/>

8. To link your gateway to TTN, you need to set up first the RAK Gateway LoRa by choosing **2 Setup RAK Gateway LoRa concentrator**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-8.png"
  width="60%"
  caption="Choosing Setup RAK Gateway LoRa"
/>

9. Then, you need to select **Server is TTN** as the LoRaWAN server and select the right frequency that will match your gateway and region. The [supported frequency plan of TTN](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) can be found on their website.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-9.png"
  width="60%"
  caption="Selecting TTN as the LoRaWAN server"
/>

10. For this example, you will be using EU868 Frequency Plan. Choose **4 EU_863_870**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-10.png"
  width="60%"
  caption="Selecting the TTN Channel Plan"
/>

11. After choosing the correct frequency, the success message will appear, as shown in **Figure 16**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-11.png"
  width="60%"
  caption="Successfully Changed the Frequency"
/>

12. You need to check if the right SERVER_ADDRESS is used to connect to TTN V3. To do this, choose **4 Edit packet-forwarder config** from the configuration options.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-12.png"
  width="60%"
  caption="Successfully Changed the Frequency"
/>

13.  You will be editing a JSON file to configure the `server_address` to **eu1.cloud.thethings.network**. To save the changes you made, if there is any, press `CTRL + X` to exit the editor and select yes to confirm the changes.

:::tip 📝 NOTE:

There are three server clusters available for TTN V3. In this guide, we will use `eu1.cloud.thethings.network`. You need to select the closes one in your country or location for optimized performance.

The available [TTN V3 clusters](https://console.cloud.thethings.network/) are:

- North American Region - `nam1.cloud.thethings.network`
- European Region - `eu1.cloud.thethings.network`
- Australian Region - `au1.cloud.thethings.network`

:::

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-13.png"
  width="60%"
  caption="Changing Server Name to eu1.cloud.thethings.network"
/>

14. Restart the Packet-forwarder by choosing **3 Restart Packet-forwarder** from the configuration options.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-14.png"
  width="60%"
  caption="Restarting the Packet-forwarder"
/>


### Setting Up the Network Server

#### Connect RAK7246 WisGate Developer D0 to TTN V3

This section shows how to connect RAK7246 WisGate Developer D0 to TTN.

1. Create a [TTN account](https://www.thethingsnetwork.org/) if you don't have one yet.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-1.png"
  width="80%"
  caption="TTN V3 Website"
/>

2.  Make sure you are in the right [TTN cluster](https://console.cloud.thethings.network/), and then log in to TTN. Use your The Things ID credentials to log in. In this example, choose **Europe 1**

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-2.png"
  width="80%"
  caption="Login website for TTN"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-2b.png"
  width="80%"
  caption="Choose Europe 1"
/>

3. After you have logged in, you need to register your gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways > + Add gateway**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-3.png"
  width="80%"
  caption="Gateway console in TTN V3"
/>

4.  Fill in the needed information:

* **Owner** – Automatically filled by The Things Stack, based on your account or created Organization. (e.g. rak-discovery)
* **Gateway ID** – This will be the unique ID of your gateway in the Network. ID must contain only lowercase letters, numbers, and dashes (-). (e.g. rak-d0-ph-las-pinas)
* **Gateway EUI** - A 64 bit extended unique identifier for your gateway. This is where the gateway you get on the above section Configuring the RAK7246 WisGate Developer D0. (e.g. B827EBFFFE81)
* **Gateway name** – A name for your gateway. (e.g. RAK D0 Pilar Las Pinas PH)
* **Gateway description (optional)** - Optional gateway description; can also be used to save notes about the gateway.
* **Gateway Server address** - The address of the Gateway Server to connect to (i.e. eu1.cloud.thethings.network).
* **Frequency plan** - The frequency plan used by the gateway.


:::tip 📝 NOTE

- This tutorial is based on using the EU868 frequency band and the server address (TTN cluster) is **eu1.cloud.thethings.network**.
- Also, you will be using Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended).

:::

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-4-a.png"
  width="60%"
  caption="Filling information to add gateway in TTN V3"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-4-b.png"
  width="50%"
  caption="Clicking the create gateway in TTN V3"
/>

5.  Once the **RAK7246 WisGate Developer D0** is set to the `eu1.cloud.thethings.network server` address, and the gateway account is created, you will now see the connected status, as seen in **Figure 26**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/ttnv3-setup/TTNV3-5.png"
  width="80%"
  caption="Successful creation and connection of Gateway in TTN V3"
/>

### Setting Up the Device

#### Connecting RAK4631 to TTN V3 Application

1. Now that you are logged in to the platform, the next step is to create an application. In your console, click **Create an application**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-1.png"
  width="80%"
  caption="Create an Application"
/>

2. To have an application registered, you need to input first the specific details and necessary information about your application, then click **Create application**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-2.png"
  width="80%"
  caption="Creating an Application"
/>

3. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**.

LoRaWAN specification enforces that each end-device has to be personalized and activated. There are two options for registering devices depending on the activation mode you select. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP). You need to click **+ Add end device**, as shown in **Figure 29**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-3.png"
  width="80%"
  caption="Add end-devices to your TTN application"
/>

4. To register for the module, you need to click **Manually** first.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-4.png"
  width="80%"
  caption="Adding End Devices Manually"
/>

5. Choose the following configurations in adding the end devices.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-5.png"
  width="80%"
  caption="Configurations for adding end devices"
/>

6.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select **Over the air action (OTAA)**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-6.png"
  width="80%"
  caption="OTAA settings"
/>

7. Then you need to put a unique End device ID and EUIs (DevEUI and AppEUI), as shown in **Figure 33**. Check if your RAK4631 module has a **DevEUI** on **sticker or QR** that you can scan, then use this as the device unique DevEUI.

For **AppEUI**, you can click **Fill with Zeros**.
Click **Generate** for the **AppKey**. Then the End Device Name will be automatically filled by the website. You can also put a different End Device ID if you need to. Finally, click **Register End Device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-7.png"
  width="80%"
  caption="Registering the End Device"
/>

8. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 34**. Take note of these keys, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the next part of this guide.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/RAK4631-ttnv3-setup/RAK4631-TTNV3-8.png"
  width="80%"
  caption="OTAA device successfully registered to TTN"
/>


#### Creating Environment Monitoring Application

#### Hardware Setup

This step of the guide is about the actual device configuration.

RAK1906 WisBlock Environmental Sensor module can be connected to any slot of `RAK5005-O WisBlock Base Board` to communicate with the `RAK4631 WisBlock LPWAN Module`. It will work on **SLOT A to D**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/rak1906_assembly.png"
  width="50%"
  caption="RAK1906 connection to WisBlock Base"
/>

##### Assembling and Disassembling of WisBlock Modules

###### Assembling

As shown in **Figure 36**, the location for Slot A, B, C, and D are properly marked by silkscreen. Slots C and D are located on the bottom of WisBlock Base. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="RAK1906 connection to WisBlock Base"
/>

###### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 39**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1906 uses I2C communication lines, and it can cause possible conflict especially on some IO modules.
:::

##### LoRa and BLE Antenna

Another important part component of RAK4631 is the antennas.

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.
:::

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/lora-antenna.png"
  width="30%"
  caption="LoRa Antenna"
/>

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/ble-antenna.png"
  width="40%"
  caption="BLE Antenna"
/>

You need to ensure that the antenna is properly connected to have a good LoRa signal. Do not power the module without an antenna connected to the IPEX connector to avoid damage to the RF section of the chip.

RAK4631 has a label on its sticker where to connect the antennas, as shown in **Figure 43**.


<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK4631-antenna-label.png"
  width="30%"
  caption="RAK4631 Antenna Label"
/>

:::tip 📝 NOTE
Detailed information about the RAK4631 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/).
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming the RAK1906.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::

#### Software Setup

The RAK1906 is a 4-in-1 Environmental Sensor board that contains the Bosch BME680 chip. It is specially designed for wearables where size and low power consumption are critical requirements. The BME680 contains a small Metal-Oxide (MOX) sensor and an I2C interface used to communicate with WisBlock Core.

The RAK1906 module gives information about:
- Air pressure
- Air quality
- Ambient Air Temperature
- Environment Humidity

::: warning ⚠️ WARNING
The BME680 requires a burn-in period to collect accurate readings. The burn-in procedure can be achieved by reading all sensors once every 5&nbsp;seconds for at least 20&nbsp;minutes the first time that you use it. For each subsequent use, the readings should stabilize 2-3&nbsp;minutes after power-up.
:::

##### Software Configuration

1. Download the [Arduino IDE](https://www.arduino.cc/en/software), then install it on your PC or laptop.

:::warning ⚠️ WARNING
_**If you are using Windows 10**_.
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino1.png"
  width="80%"
  caption="Downloading the Arduino IDE"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino2.png"
  width="80%"
  caption="Just download the IDE without any cost"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino3.png"
  width="40%"
  caption="Installing the Arduino IDE"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino4.png"
  width="40%"
  caption="Completing the installation of Arduino IDE"
/>


2. Open the Arduino IDE, then install the **RAKwireless BSP support for the Arduino Board Manager**.


3. Click on **File** > **Preferences**. In the **Preferences** window, look for **Additional Boards Manager URLs** then click the icon on the right side.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino6.png"
  width="80%"
  caption="Preferences setup"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino7.png"
  width="80%"
  caption="Preferences window"
/>


4. Copy **`https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json`** and paste it into the new window, then click **OK** > **OK**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino8.png"
  width="80%"
  caption="RAKwireless BSP support for the Arduino Board Manager setup"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino9.png"
  width="80%"
  caption="Completing the setup of RAKwireless BSP support for the Arduino Board Manager"
/>

5. Go to **Tools** > **Board: Arduino Uno** > **Boards Manager**. Type **RAK** in the search bar and the RAKwireless Core modules will be shown in the window.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino10.png"
  width="80%"
  caption="Boards Manager"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino11.png"
  width="80%"
  caption="Installing RAKwireless nRF Boards"
/>


6. Choose **RAKwireless nRF Boards**, then click **Install**. After installing the RAK4631 Arduino BSP (Board Support Package), click **Close**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino12.png"
  width="80%"
  caption="Successful Installation of  RAKwireless nRF Boards"
/>


7. After the installation of the RAKwireless nRF Board core module, you can get the program by navigating on the example code, as shown in **Figure 54**. Open it on the Arduino IDE, and save it as `Environment_Monitoring.ino`

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/environment/arduino_goto.png"
  width="80%"
  caption="Getting the Arduino Code from the Examples Section"
/>

5. Once the example code is open, install the [Adafruit BME680](https://github.com/adafruit/Adafruit_BME680) library, **SX126x Arduino** library, and the **U8g2lib** library by clicking the links highlighted in red, as shown in **Figure 55**. You will be directed on the `Arduino Library Manager` for each link you click.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/environment/arduino_dl_lib.png"
  width="80%"
  caption="Install the needed library"
/>

During the installation, you will be asked to install the **Adafruit Unified Sensor** library. Install it, as well.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/lib-bme680-install-2.png"
  width="50%"
  caption="Installing Adafruit Unified Sensor Library"
/>

##### Configuring LoRaWAN

Before uploading the Arduino Code, there are configurations that you need to set up to ensure that the device can join a LoRaWAN Network server.

The steps below will explain the default settings and how to configure them.

1. Set up the LoRa Region.

Default region is **EU868**.

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_EU868;
```

You can change this to a region that is applicable to you like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc.

2. Set up the LoRaWAN activation method.

Default is **OTAA**.

```c
bool doOTAA = true;
```

To configure the device to ABP, you need to make this boolean variable `false`.

3. Set up the message type if confirmed or not.

Default is **confirmed message**.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;
```

You can change to unconfirmed message by changing the value to `LMH_UNCONFIRMED_MSG`.

4. Set up device class.

Default is **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;
```

You can change this to **CLASS_B** (still under development) or **CLASS_C**.

5. Set up the EUIs and KEY. Get these parameters from the [Connecting RAK4631 to TTN V3 Application](/Knowledge-Hub/Learn/RAK-Developer-Kit-4-Guide/#connecting-rak4631-to-ttn-v3-application) section of this guide.

It is very important that the EUI and KEY will match the one configured in the TTN application. Otherwise, your device will not be able to connect to the TTN server. In this application, the device is activated via OTAA so you need to configure the Device EUI, Application EUI, and Application Key.

```c
uint8_t nodeDeviceEUI[8] = {0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x33, 0x33};
uint8_t nodeAppEUI[8] = {0xB8, 0x27, 0xEB, 0xFF, 0xFE, 0x39, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88, 0x88};
```

6. Set up uplink period.

The default is **20000&nbsp;mS**.

```c
#define LORAWAN_APP_INTERVAL 20000
```


##### LoRaWAN Payload

- This is the setup on the `void send_lora_frame(void)` function.

```c
if (lmh_join_status_get() != LMH_SET)
{
 //Not joined, try again later
 return;
}
if (!bme.performReading()) {
 return;
}
bme680_get();

lmh_error_status error = lmh_send(&m_lora_app_data, g_CurrentConfirm);
if (error == LMH_SUCCESS)
{
 count++;
 Serial.printf("lmh_send ok count %d\n", count);
}
else
{
 count_fail++;
 Serial.printf("lmh_send fail count %d\n", count_fail);
}
```

<br>

- This is the setup on the `void bme680_get()` function. This will gather the data from the sensor and package them in a LoRaWAN payload.

```c
char oled_data[32] = {0};
Serial.print("result: ");
uint32_t i = 0;
memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
m_lora_app_data.port = gAppPort;

double temp = bme.temperature;
double pres = bme.pressure / 100.0;
double hum = bme.humidity;
uint32_t gas = bme.gas_resistance;

data = "Tem:" + String(temp) + "C " + "Hum:" + String(hum) + "% " + "Pres:" + String(pres) + "KPa " + "Gas:" + String(gas) + "Ohms";
Serial.println(data);

// display bme680 sensor data on OLED
u8g2.clearBuffer();         // clear the internal memory
u8g2.setFont(u8g2_font_ncenB10_tr); // choose a suitable font

memset(oled_data, 0, sizeof(oled_data));
sprintf(oled_data, "T=%.2fC", temp);
u8g2.drawStr(3, 15, oled_data);

memset(oled_data, 0, sizeof(oled_data));
snprintf(oled_data, 64, "RH=%.2f%%", hum);
u8g2.drawStr(3, 30, oled_data);

memset(oled_data, 0, sizeof(oled_data));
sprintf(oled_data, "P=%.2fhPa", pres);
u8g2.drawStr(3, 45, oled_data);

memset(oled_data, 0, sizeof(oled_data));
sprintf(oled_data, "G=%dOhms", gas);
u8g2.drawStr(3, 60, oled_data);

u8g2.sendBuffer(); // transfer internal memory to the display

uint16_t t = temp * 100;
uint16_t h = hum * 100;
uint32_t pre = pres * 100;

//result: T=28.25C, RH=50.00%, P=958.57hPa, G=100406 Ohms
m_lora_app_data.buffer[i++] = 0x01;
m_lora_app_data.buffer[i++] = (uint8_t)(t >> 8);
m_lora_app_data.buffer[i++] = (uint8_t)t;
m_lora_app_data.buffer[i++] = (uint8_t)(h >> 8);
m_lora_app_data.buffer[i++] = (uint8_t)h;
m_lora_app_data.buffer[i++] = (uint8_t)((pre & 0xFF000000) >> 24);
m_lora_app_data.buffer[i++] = (uint8_t)((pre & 0x00FF0000) >> 16);
m_lora_app_data.buffer[i++] = (uint8_t)((pre & 0x0000FF00) >> 8);
m_lora_app_data.buffer[i++] = (uint8_t)(pre & 0x000000FF);
m_lora_app_data.buffer[i++] = (uint8_t)((gas & 0xFF000000) >> 24);
m_lora_app_data.buffer[i++] = (uint8_t)((gas & 0x00FF0000) >> 16);
m_lora_app_data.buffer[i++] = (uint8_t)((gas & 0x0000FF00) >> 8);
m_lora_app_data.buffer[i++] = (uint8_t)(gas & 0x000000FF);
m_lora_app_data.buffsize = i;
```


##### Data Format


| Byte1 | Byte2        | Byte3        | Byte4     | Byte5     |
| ----- | ------------ | ------------ | --------- | --------- |
| 1     | Temperature1 | Temperature2 | Humidity1 | Humidity2 |


| Byte6       | Byte7       | Byte8       | Byte9       | Byte10 | Byte11 | Byte12 | Byte13 |
| ----------- | ----------- | ----------- | ----------- | ------ | ------ | ------ | ------ |
| Barometric1 | Barometric2 | Barometric3 | Barometric4 | Gas1   | Gas2   | Gas3   | Gas4   |



  - Byte1 is a marker for the data type, here always 1.
  - Every byte value is MSB first.
  - Temperature is sent as two bytes, enlarged 100 times for accuracy. For example, 2510 means 25.01 C, sent as 0x09 0xCE.
  - Humidity is sent as two bytes, enlarged 100 times for accuracy. For example, 4173 means 41.73%, sent as 0x10 0x4D.
  - Barometric pressure is sent as four bytes, enlarged 100 times for accuracy. For example, 100945 means 1009.45&nbsp;hPa, sent as 0x00 0x01 0x8A 0x51.
  - Gas resistance is sent as four bytes. For example, 63560&nbsp;Ohm, sent as 0x00 0x00 0xF8 0x48.


##### Uploading the Arduino Code

After a successful installation of the library and configuration of LoRaWan Network Server setup, you can now select the right serial port and upload the code, as shown in **Figure 57** and **Figure 58**.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/env-mon-port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/env-mon-upload.png"
  width="100%"
  caption="Uploading the RAK1906 example code"
/>

When you have successfully uploaded the example sketch, open the serial monitor of the Arduino IDE to see the sensor's reading logs. If you see the logs, as shown below, then your RAK1906 is properly communicating to the WisBlock core.

```js
10:30:07.777 -> =====================================
10:30:07.777 -> Welcome to RAK4630 LoRaWan!!!
10:30:07.777 -> Type: OTAA
10:30:07.777 -> Region: EU868
10:30:07.777 -> =====================================
10:30:07.777 -> Chip ID=0x61
10:30:12.974 -> OTAA Mode, Network Joined!
10:30:33.999 -> Sending frame now...
10:30:33.999 -> result: Tem:28.70C Hum:67.00% Pres:948.50KPa Gas:27646Ohms
10:30:33.999 -> lmh_send ok count 1
10:30:53.979 -> Sending frame now...
10:30:53.979 -> result: Tem:28.70C Hum:67.00% Pres:948.50KPa Gas:242488Ohms
10:30:54.012 -> lmh_send ok count 2
10:31:14.006 -> Sending frame now...
10:31:14.006 -> result: Tem:28.70C Hum:67.00% Pres:948.50KPa Gas:457174Ohms
10:31:14.006 -> lmh_send ok count 3
10:31:33.997 -> Sending frame now...
10:31:33.997 -> result: Tem:28.69C Hum:67.00% Pres:948.50KPa Gas:74102Ohms
10:31:34.032 -> lmh_send ok count 4
```

Check again your **The Things Stack** account and go to **Applications** > `<name of your application>` > **Live Data**. Wait for the uplink data messages that are updated every 20&nbsp;seconds.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/TTS16.png"
  width="80%"
  caption="Successful WisBlock Kit 4 onboarding using The Things Stack"
/>

### Setting Up IoT Dashboard Using Ubidots

This section will guide you to integrate your application using Ubidots.

1. Go to [ubidots.com](https://ubidots.com), then click **SIGN UP**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub1.png"
  width="80%"
  caption="Sign up a Ubidots account"
/>

2. Choose **TAKE ME TO UBIDOTS STEM**, and fill in all the requirements to sign up for an account.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub2.png"
  width="80%"
  caption="Ubidots using STEM account"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub3.png"
  width="80%"
  caption="Sign up for free account"
/>

3. Go to **Devices** > **Devices**, and click **Create Device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub4.png"
  width="80%"
  caption="Device menu of Ubidots"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub5.png"
  width="80%"
  caption="Create Device"
/>

4. A window on the right side pops up, and choose the following:

   - Connectivity: **LoraWAN**
   - Hardware Type: **Dev Kits**
   - Device: **Blank Device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub6.png"
  width="80%"
  caption="Choose Blank Device"
/>


5. Then, a window will appear, and fill in **Device name** and **Device label**. Once done, press the check button.

  - Device name: **Environment Monitoring**
  - Device label: **wisblock-kit4-environment-monitoring**


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub7_1.png"
  width="80%"
  caption="Edit Add New Device for desired name"
/>

6. After adding the device, fill in the **Description** and **SET LOCATION**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub8_1_1.png"
  width="80%"
  caption="Set your desired location"
/>

7. After filling in, go to **Plugins**, then click **Create Data Plugin**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub9.png"
  width="80%"
  caption="Choose Devices then Plugins"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub10.png"
  width="80%"
  caption="Create Data Plugin"
/>


8. A window on the right side pops up, and choose **The Things Stack**. Follow the instructions given by the plugin, then click the forward button.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub11.png"
  width="80%"
  caption="Choose The Things Stack LoraWAN devices"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub12.png"
  width="80%"
  caption="Click forward button"
/>

9. Under the Ubidots Token, use **Default token**, then click again the forward button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub13.png"
  width="80%"
  caption="Choose Default token"
/>

10. Finally, press the check button to install the plugin.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub14.png"
  width="80%"
  caption="Completing the plugins"
/>

11. After installing the plugin, click on **The Things Stack**, then go to **Decoder**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub15.png"
  width="80%"
  caption="Press The Thing Stack"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub16.png"
  width="80%"
  caption="Save then go to Decoder"
/>

12. Ubidots `The Things Stack` default decoder supports the payload format of RAK1906, so there is no need for further decoder configuration. This is the section of the Ubidots decoder that gets the sensor values. Since this decoder is already in Ubidots, no extra decoder is needed in the TTN application console.

```js
function decodeUplink(bytes) {
  // Decoder for the RAK1906 WisBlock Environmental Sensor (https://store.rakwireless.com/products/rak1906-bme680-environment-sensor)
  var decoded = {};
  if (bytes[0] == 1) {
      // If received data is of Environment Monitoring type
      decoded.temperature = (bytes[1] << 8 | (bytes[2])) / 100;
      decoded.humidity = (bytes[3] << 8 | (bytes[4])) / 100;
      decoded.pressure = (bytes[8] | (bytes[7] << 8) | (bytes[6] << 16) | (bytes[5] << 24)) / 100;
      decoded.gas = bytes[12] | (bytes[11] << 8) | (bytes[10] << 16) | (bytes[9] << 24);
  }
  return {"data": decoded};
}
```

13. Go back to The Things Stack account and select **Go to applications**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS17.png"
  width="80%"
  caption="Go to The Things Stack account applications"
/>

14.   Head on to your device under the Applications menu, then click the `<name of your application>`.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS18.png"
  width="80%"
  caption="Go to your device"
/>

15.  Under your device tab, choose **Integrations** > **Webhooks** and then click the **Add webhook** button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS19.png"
  width="80%"
  caption="Add webhook integration"
/>

16. Choose **Custom webhook**, then fill in all the necessary fields like **Webhook ID** and **Webhook format**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS20.png"
  width="80%"
  caption="Choose Custom webhook"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS21.png"
  width="80%"
  caption="Editing webhook"
/>


17.   Go back again to your Ubidots account **Environment Monitoring** to obtain the **Base URL**, **X-Auth-Token**, and **Uplink message**.


- `X-Auth-Token` is the Ubidots token and can be found in the ubidots console, as shown in **Figure 81**.
- Also, settings for the Uplink message can be found in **Figure 82**. You only need to get the part of the URL with `/api/webhook/xxxxxxxxxxxxxxxxxxx`.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS22.png"
  width="80%"
  caption="Editing webhook"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub19.png"
  width="80%"
  caption="Go back to Ubidots account then go to Devices and Environment Monitoring"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub20_1.png"
  width="80%"
  caption="Copying the Token for The Things Stack Webhook token"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub21.png"
  width="80%"
  caption="Copying the Ubidots URL for The Things Stack Base URL and Uplink message"
/>

18.   After filling in the important fields, click the **Add webhook** button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/TTS23.png"
  width="80%"
  caption="Completing the Webhook integration"
/>


19.  Now, you need to create a dashboard in **Ubidots**. Click **Data** > **Dashboards**, then click the **Add new Dashboard** button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub22.png"
  width="80%"
  caption="Choose Data the Dashboards"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub23.png"
  width="80%"
  caption="Adding a new dashboard"
/>

20. Edit the **Add new Dashboard** window to your desired details, then press the check button.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub53.png"
  width="80%"
  caption="Editing the Dashboard general information"
/>

21. Click **Add new Widget**. A window appears on the right side, and choose **Thermometer**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub54.png"
  width="80%"
  caption="Adding a widget by pressing +"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub55.png"
  width="80%"
  caption="Choose Thermometer widget for temp variable"
/>

22. Edit the **Thermometer** widget. Change it into **Temperature**, then click the **Add Variables** button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub56.png"
  width="80%"
  caption="Adding a variable and changing the widget into Temperature"
/>

23. A window will pop up. Click **wisblock-kit4-environment-monitoring**, select the **temp** variable, then press the check button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub30.png"
  width="80%"
  caption="Selecting variables in a widget"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub31.png"
  width="80%"
  caption="Choose temp variable"
/>

24.  Finally, click the check button to save.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub32.png"
  width="80%"
  caption="Pressing check button to finalize the widget"
/>


25.  After adding the Temperature widget, click on the plus sign on the right side to add another widget. This time, choose **Gauge**and add the **Humidity** widget.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub60.png"
  width="80%"
  caption="Adding Gauge to Humidity widget"
/>

26.  After editing the name into **Humidity**, click **Add Variables**. Select **wisblock-kit4-environment-monitoring**, choose the **hum** variable, then press the check button.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub61.png"
  width="80%"
  caption="Adding hum variable to Humidity widget"
/>

27. Finally, click the check button to save.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub62.png"
  width="80%"
  caption="Completing the Humidity widget"
/>


28. Use the same method in adding the Temperature and Humidity widgets. Just click on the plus sign at the right to add another widget, then choose **Gauge**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub63.png"
  width="80%"
  caption="Adding Gauge to Pressure widget"
/>

29.  This time, add the **Pressure** widget under Gauge, then click **Add Variables**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub64.png"
  width="80%"
  caption="Adding variable to Pressure widget"
/>

30. After editing the name into **Pressure**, click **wisblock-kit4-environment-monitoring**, choose the **press** variable, then press the check button.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub65.png"
  width="80%"
  caption="Adding press variable to Pressure widget"
/>

31. Edit the **Range** into 0-1000. After doing it, click the check button to save.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub66.png"
  width="80%"
  caption="Editing Pressure widget range to 0-1000 the press check button"
/>

35. After adding the three widgets, go to the **Devices** > **Devices** menu, and edit the variables.

- For the **temp** variable:
    - Description: **Temperature**
    - Unit: **°C**


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub72.png"
  width="80%"
  caption="Editing the temp variable"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub73.png"
  width="80%"
  caption="Adding unit for temp variable"
/>

- For the **hum** variable:
    - Description: **Humidity**
    - Unit: **%RH**


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub74.png"
  width="80%"
  caption="Editing the hum variable"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub75.png"
  width="80%"
  caption="Adding unit for hum variable"
/>

- For the **press** variable:
    - Description: **Pressure**
    - Unit: **hkPa**


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub76.png"
  width="80%"
  caption="Editing the press variable"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub77.png"
  width="80%"
  caption="Adding unit for press variable"
/>


After doing all these steps, you already finished the **WisBlock Kit 4 Environment Monitoring Project using Ubidots**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub80.png"
  width="80%"
  caption="Check the Dashboard at Dashboards menu"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit4-ubidots/ub82.png"
  width="80%"
  caption="Final dashboard of WisBlock Kit 4 Environment Monitoring"
/>
