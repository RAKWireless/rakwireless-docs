---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/kit1.png
rak_desc: This guide provides a step-by-step tutorial on how to use the RAK Developer Kit 1 (Entry Kit).
tags:
  - User-Manual
  - RAK Developer Kit
  - WisGate
  - WisBlock
  - Entry Kit
  - RAK7246
  - RAK4631
  - RAK5005-O
  - PuTTY
  - TTN
  - Arduino
  - PlatformIO
  - BLE
  - LoRaWAN
header:
  title: RAK Developer Kit 1 (Entry Kit) Guide
  caption: by <b>Anthony Aldrin Beltran</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 03/01/2022 08:00 AM
---

# RAK Developer Kit 1 (Entry Kit) Guide

## Overview

This guide is about learning how to set up a complete LoRaWAN application from device, gateway up to network server. It composes of the following sections:

- [Setting Up the Gateway](/Knowledge-Hub/Learn/RAK-Developer-Kit-1-Guide/#setting-up-the-gateway)
- [Setting Up the Network Server](/Knowledge-Hub/Learn/RAK-Developer-Kit-1-Guide/#setting-up-the-network-server)
- [Setting Up the Device](/Knowledge-Hub/Learn/RAK-Developer-Kit-1-Guide/#setting-up-the-device)


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

Here are the steps in configuring the [RAK7246 WisGate Developer D0](https://store.rakwireless.com/collections/wisgate-developer/products/rak7246-lpwan-developer-gateway?variant=36313275465886):

1. By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID named "**Rakwireless_XXXX**" on your PC Wi-Fi network list.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-1.png"
  width="50%"
  caption="RAKwireless Access Point"
/>

:::tip 📝 NOTE
“XXXX” is the last 2 bytes of your RAK7246 WiFi MAC address. Connect to this Wi-Fi SSID using the password provided below. Also, the default IP address of the gateway provided below will be needed in connecting via SSH.

- Wi-Fi Password: **rakwireless**
- Default IP Address: **192.168.230.1**
:::

2. Log in to the gateway.

  - Windows OS
     SSH (Secure Shell) is typically used to log in to a remote machine and execute commands. There are a lot of free and good SSH Clients out there, namely [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html), [BitVise SSH Client](https://www.bitvise.com/ssh-client-download), [MobaXterm](https://mobaxterm.mobatek.net/) and many more. Feel free to choose one that fits your needs, but in this guide, Putty is used.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-2-a.png"
  width="40%"
  caption="PuTTY example"
/>

  - Mac OS
     Open the Terminal of Mac OS. Launch the Terminal application found in the **`/Applications/Utilities/`** directory, but you can also launch it from Spotlight. Press **Command + Spacebar** and type **“Terminal”**, then return.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-2-b.png"
  width="50%"
  caption="Selecting Terminal on Mac"
/>

3. If you have connected to the gateway through Wi-Fi AP Mode, the IP Address is **192.168.230.1**. It will then prompt you to enter the username and password. Enter the default credentials:

   - Username: **pi**
   - Password: **raspberry**

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-3.png"
  width="60%"
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

5. You can now connect your gateway through Wi-Fi to access TTN. It can easily be done with the wireless capabilities of the Raspberry Pi Zero W by choosing **"5 Configure WIFI"**. By default, the RAK7246 WisGate Developer D0 Gateway works in Wi-Fi AP Mode. For the gateway to connect to the router, it must work in Wi-Fi Client Mode.

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

6. Once Wi-Fi AP Mode has been disabled by choosing **"2 Enable Client Mode/Disable AP Mode"**, you can now then connect to a new Wi-Fi Network by choosing **"4 Add New SSID for Client"**.

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
  caption="SSID of the network you want to connect to"
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

In this example, the admin console can be accessed via `http://192.168.0.1`. It is also common to have it on `http://192.168.1.1` on some routers. Take note of the IP address allotted to the RAK7246 by your Wi-Fi

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
  width="60%"
  caption="Advance IP scanner for Windows OS"
/>

8. To link your gateway to TTN, you need to set up first the RAK Gateway LoRa by choosing "**2 Setup RAK Gateway LoRa concentrator**".

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-8.png"
  width="60%"
  caption="Choosing Setup RAK Gateway LoRa"
/>

9. Then, you need to select **Server is TTN** as the LoRaWAN server and select the right frequency that will match your gateway and region. The [supported frequency plan of TTN](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) can be found on their website.
<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-9.png"
  width="60%"
  caption="Server is TTN"
/>

10. For this example, you will be using EU868 Frequency Plan. Choose “**4 EU_863_870**”.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-10.png"
  width="60%"
  caption="Selecting the TTN channel plan"
/>

11. After choosing the correct frequency, the success message will appear, as shown in **Figure 16**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-11.png"
  width="60%"
  caption="Successfully changed the frequency"
/>

12. You need to check if the right SERVER_ADDRESS is used to connect to TTN V3. To do this, choose “**4 Edit packet-forwarder config**” from the configuration options.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-12.png"
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
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak7246g-gateway/RAK7246G-13.png"
  width="60%"
  caption="Changing Server Name to eu1.cloud.thethings.network"
/>

14. Restart the Packet-forwarder by choosing “**3 Restart Packet-forwarder**” from the configuration options.


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
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-1.png"
  width="80%"
  caption="TTN V3 Website"
/>

2.  Make sure you are in the right [TTN cluster](https://console.cloud.thethings.network/), and then log in to TTN. Use your The Things ID credentials to log in. In this example, choose **Europe 1**

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-2.png"
  width="80%"
  caption="Login website for TTN"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-2b.png"
  width="80%"
  caption="Choose Europe 1"
/>

3. After you have logged in, you need to register your gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways > + Add gateway**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-3.png"
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

:::tip 📝 NOTE:

- This tutorial is based on using the EU868 frequency band and the server address (TTN cluster) is **eu1.cloud.thethings.network**.
- Also, you will be using Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended).

:::

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-4-a.png"
  width="60%"
  caption="Filling information to add gateway in TTN V3"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-4-b.png"
  width="50%"
  caption="Clicking the create gateway in TTN V3"
/>

5.  Once the **RAK7246 WisGate Developer D0** is set to the `eu1.cloud.thethings.network server` address, and the gateway account is created, you will now see the connected status, as seen in **Figure 26**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-5.png"
  width="80%"
  caption="Successful creation and connection of Gateway in TTN V3"
/>

### Setting Up the Device

This section will guide you on how to set up your device.

#### Connecting RAK4631 to TTN V3 Application

1. Now that you are logged in to the platform, the next step is to create an application. In your console, click **Create an application**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-1.png"
  width="80%"
  caption="Create an Application"
/>

2. To have an application registered, you need to input first the specific details and necessary information about your application, then click **Create application**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-2.png"
  width="80%"
  caption="Creating an Application"
/>

3. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**. LoRaWAN specification enforces that each end-device has to be personalized and activated. There are two options for registering devices depending on the activation mode you select. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).  You need to click **+ Add end device** as shown in **Figure 29**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-3.png"
  width="80%"
  caption="Add end-devices to your TTN application"
/>

4. To register for the module, you need to click **Manually** first.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-4.png"
  width="80%"
  caption="Adding end devices manually"
/>

5. Choose the following configurations in adding the end devices.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-5.png"
  width="80%"
  caption="Configurations for adding end devices"
/>

6.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select **Over the air action (OTAA)**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-6.png"
  width="80%"
  caption="OTAA settings"
/>

7. Then you need to put a unique End device ID and EUIs (DevEUI and AppEUI), as shown in **Figure 33**. Check if your RAK4631 module has a **DevEUI** on **sticker or QR** that you can scan, then use this as the device unique DevEUI.

For **AppEUI**, you can click **Fill with Zeros**.
Click **Generate** for the **AppKey**. Then the End Device Name will be automatically filled by the website. You can also put a different End Device ID if you need to. Finally, click **Register End Device**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-7.png"
  width="80%"
  caption="Registering the End Device"
/>

8. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 34**. Take note of these keys, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the next part of this guide.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-8.png"
  width="80%"
  caption="OTAA device successfully registered to TTN"
/>

#### RAK4631 Hardware Setup

This section is about the actual device configuration.

The RAK4631 will not work without a WisBlock Base board. In this kit, you have RAK5005-O as the WisBlock Base board. The WisBlock Base provides a USB connection for programming the RAK4631. It also provides a power source and various interfaces to RAK4631 so that it can be connected to other WisBlock modules via different module slots.

To illustrate, RAK4631 can be connected to RAK5005-O WisBlock Base, as shown in **Figure 35**.

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK5005-connect.png"
  width="40%"
  caption="RAK4631 Connection to WisBlock Base RAK5005-O"
/>

There are a few pins that are exposed on RAK5005-O, and you can easily use them via header pins. The labels are at the back, as shown in **Figure 36**.

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/IO-pins.png"
  width="35%"
  caption="WisBlock Base exposed pins"
/>

More information can be found on the [official documentation of the specific WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) you used in your project.

For RAK5005-O WisBlock Base with RAK4631 WisBlock Core, the accessible GPIO pins are defined as follows in the Arduino IDE and Platform IO:

- `WB_IO1` for IO1 pin
- `WB_IO2` for IO2 pin (Also used to control the 3.3&nbsp;V supply of some WisBlock Modules to achieve low-power IoT devices.)
- `WB_A0` for AIN

There are usable LEDs, as well, that can be controlled by the RAK4631 on the WisBlock Base board:

- `LED_GREEN`
- `LED_BLUE`

UART1 and I2C_1 are also exposed on the header of the WisBlock Base board.

- RAK4631 has a native USB peripheral onboard (Serial), which is used for programming and Serial debugging and two usable hardware **UART1** and **UART2** (Serial 1 and Serial 2). **UART1** is accessible to WisBlock Slot A, WisBlock IO slot, and the exposed header pins. **UART2** is accessible only on the WisBlock IO slot.
- The **I2C_1** header pins are as well shared to the WisBlock Base Slots A to D. The second **I2C_2** is available only on the WisBlock IO slot.
#### Assembling and Disassembling of WisBlock Modules

##### Assembling

**Figure 37** shows how to mount the RAK4631 module on top of a WisBlock Base board (RAK5005-O). Follow carefully the procedure defined in [WisBlock module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) in order to secure the connection safely. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/mounting-sketch.png"
  width="50%"
  caption="RAK4631 Mounting Sketch"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 40**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

##### LoRa and BLE Antenna

Another important part component of RAK4631 is the antennas.

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
  caption="RAK4631 antenna label"
/>

:::tip 📝 NOTE
Detailed information about the RAK4631 BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/).
:::

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.
:::

After all this setup, you can now connect the battery (optional) and USB cable to start programming the RAK1906.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::

#### Creating LoRaButton Application

Once the RAK4631 is connected to RAK5005-O WisBlock Base, You can connect a push button to the **RAK5005-O WisBlock Base**, having its terminals, one in  `WB_IO1` for IO1 pin, and the other one in `GND`. At the end of this guide, you should have a LoRaWAN device where a LoRaWAN uplink packet will be transmitted every time that button will be pressed.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/lorabutton/lorabutton-1.png"
  width="60%"
  caption="Connecting Push Button with RAK 5005-O WisBlock Base"
/>

##### Software Setup

1. Download the Arduino IDE from this link [https://www.arduino.cc/en/software](https://www.arduino.cc/en/software) then install it on your PC or laptop.

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

5. Go to **Tools** > **Board: "Arduino Uno"** > **Boards Manager**. Type **RAK** in the search bar and the RAKwireless Core modules will be shown in the window.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino10.png"
  width="80%"
  caption="Boards manager"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino11.png"
  width="80%"
  caption="Installing RAKwireless nRF boards"
/>


6. Choose **RAKwireless nRF Boards**, then click **Install**. After installing the RAK4631 Arduino BSP (Board Support Package), click **Close**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino12.png"
  width="80%"
  caption="Successful Installation of  RAKwireless nRF Boards"
/>

7. Lastly, ensure that you have the updated SX126x.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/lorabutton/sx126xarduino.png"
  width="60%"
  caption="SX126x-Arduino library"
/>

##### Configuration of LoRaButton Application Code

Copy this code in your Arduino IDE. More information about the code is discussed in the following steps.

```c
/**
 * @file LoRaButton_demo.ino
 * @author rakwireless.com
 * @brief LoRaWan Button Example Application
 * @version 0.1
 * @date 2022-01-10
 *
 * @copyright Copyright (c) 2022
 *
 * @note RAK4631 GPIO mapping to nRF52840 GPIO ports
   RAK4631    <->  nRF52840
   WB_IO1     <->  P0.17 (GPIO 17)
   WB_IO2     <->  P1.02 (GPIO 34)
   WB_IO3     <->  P0.21 (GPIO 21)
   WB_IO4     <->  P0.04 (GPIO 4)
   WB_IO5     <->  P0.09 (GPIO 9)
   WB_IO6     <->  P0.10 (GPIO 10)
   WB_SW1     <->  P0.01 (GPIO 1)
   WB_A0      <->  P0.04/AIN2 (AnalogIn A2)
   WB_A1      <->  P0.31/AIN7 (AnalogIn A7)
 */
#include <Arduino.h>
#include <LoRaWan-RAK4630.h> //http://librarymanager/All#SX126x
#include <SPI.h>

// RAK4630 supply two LED
#ifndef LED_BUILTIN
#define LED_BUILTIN 35
#endif

#ifndef LED_BUILTIN2
#define LED_BUILTIN2 36
#endif

bool doOTAA = true;   // OTAA is used by default.
#define SCHED_MAX_EVENT_DATA_SIZE APP_TIMER_SCHED_EVENT_DATA_SIZE /**< Maximum size of scheduler events. */
#define SCHED_QUEUE_SIZE 60                     /**< Maximum number of events in the scheduler queue. */
#define LORAWAN_DATERATE DR_0                   /*LoRaMac datarates definition, from DR_0 to DR_5*/
#define LORAWAN_TX_POWER TX_POWER_5             /*LoRaMac tx power definition, from TX_POWER_0 to TX_POWER_15*/
#define JOINREQ_NBTRIALS 3                      /**< Number of trials for the join request. */
DeviceClass_t g_CurrentClass = CLASS_A;         /* class definition*/
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_US915;    /* Region:EU868*/
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;         /* confirm/unconfirm packet definition*/
uint8_t gAppPort = LORAWAN_APP_PORT;                      /* data port*/

/**@brief Structure containing LoRaWan parameters, needed for lmh_init()
*/
static lmh_param_t g_lora_param_init = {LORAWAN_ADR_ON, LORAWAN_DATERATE, LORAWAN_PUBLIC_NETWORK, JOINREQ_NBTRIALS, LORAWAN_TX_POWER, LORAWAN_DUTYCYCLE_OFF};

// Forward declaration
static void lorawan_has_joined_handler(void);
static void lorawan_join_failed_handler(void);
static void lorawan_rx_handler(lmh_app_data_t *app_data);
static void lorawan_confirm_class_handler(DeviceClass_t Class);
static void send_lora_frame(void);

/**@brief Structure containing LoRaWan callback functions, needed for lmh_init()
*/
static lmh_callback_t g_lora_callbacks = {BoardGetBatteryLevel, BoardGetUniqueId, BoardGetRandomSeed,
                                        lorawan_rx_handler, lorawan_has_joined_handler, lorawan_confirm_class_handler, lorawan_join_failed_handler
                                       };
//OTAA keys !!!! KEYS ARE MSB !!!!
uint8_t nodeDeviceEUI[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x04, 0xAD, 0x3D};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x80, 0x3B, 0x4F, 0xE5, 0xCC, 0x76, 0xDF, 0x81, 0x21, 0xC1, 0x27, 0xC4, 0xBB, 0x74, 0x90, 0xF3};

// ABP keys
uint32_t nodeDevAddr = 0x260116F8;
uint8_t nodeNwsKey[16] = {0x7E, 0xAC, 0xE2, 0x55, 0xB8, 0xA5, 0xE2, 0x69, 0x91, 0x51, 0x96, 0x06, 0x47, 0x56, 0x9D, 0x23};
uint8_t nodeAppsKey[16] = {0xFB, 0xAC, 0xB6, 0x47, 0xF3, 0x58, 0x45, 0xC7, 0x50, 0x7D, 0xBF, 0x16, 0x8B, 0xA8, 0xC1, 0x7C};

// Private definition
#define LORAWAN_APP_DATA_BUFF_SIZE 64                     /**< buffer size of the data to be transmitted. */
static uint8_t m_lora_app_data_buffer[LORAWAN_APP_DATA_BUFF_SIZE];            //< Lora user application data buffer.
static lmh_app_data_t m_lora_app_data = {m_lora_app_data_buffer, 0, 0, 0, 0}; //< Lora user application data structure.

static uint32_t count = 0;
static uint32_t count_fail = 0;

void setup()
{
  pinMode(LED_BUILTIN, OUTPUT);
  digitalWrite(LED_BUILTIN, LOW);
  pinMode(WB_IO1,INPUT_PULLUP);

  // Initialize LoRa chip.
  lora_rak4630_init();

  // Initialize Serial for debug output
  time_t timeout = millis();
  Serial.begin(115200);
  while (!Serial)
  {
    if ((millis() - timeout) < 5000)
    {
      delay(100);
    }
    else
    {
      break;
    }
  }
  Serial.println("=====================================");
  Serial.println("Welcome to RAK4630 LoRaWan!!!");
  if (doOTAA)
  {
    Serial.println("Type: OTAA");
  }
  else
  {
    Serial.println("Type: ABP");
  }

  switch (g_CurrentRegion)
  {
    case LORAMAC_REGION_AS923:
      Serial.println("Region: AS923");
      break;
    case LORAMAC_REGION_AU915:
      Serial.println("Region: AU915");
      break;
    case LORAMAC_REGION_CN470:
      Serial.println("Region: CN470");
      break;
    case LORAMAC_REGION_EU433:
      Serial.println("Region: EU433");
      break;
    case LORAMAC_REGION_IN865:
      Serial.println("Region: IN865");
      break;
    case LORAMAC_REGION_EU868:
      Serial.println("Region: EU868");
      break;
    case LORAMAC_REGION_KR920:
      Serial.println("Region: KR920");
      break;
    case LORAMAC_REGION_US915:
      Serial.println("Region: US915");
      break;
  }
  Serial.println("=====================================");

  // Setup the EUIs and Keys
  if (doOTAA)
  {
    lmh_setDevEui(nodeDeviceEUI);
    lmh_setAppEui(nodeAppEUI);
    lmh_setAppKey(nodeAppKey);
  }
  else
  {
    lmh_setNwkSKey(nodeNwsKey);
    lmh_setAppSKey(nodeAppsKey);
    lmh_setDevAddr(nodeDevAddr);
  }

  uint32_t err_code;
  // Initialize LoRaWan
  err_code = lmh_init(&g_lora_callbacks, g_lora_param_init, doOTAA, g_CurrentClass, g_CurrentRegion);
  if (err_code != 0)
  {
    Serial.printf("lmh_init failed - %d\n", err_code);
    return;
  }

  // Start Join procedure
  lmh_join();
}

void loop()
{
  // Put your application tasks here, like reading of sensors,
  // Controlling actuators and/or other functions.
  int stat=digitalRead(WB_IO1);
  if(!stat){
    send_lora_frame();
    delay(5000);
  }
}

/**@brief LoRa function for handling HasJoined event.
 */
void lorawan_has_joined_handler(void)
{
  Serial.println("OTAA Mode, Network Joined!");
}

/**@brief LoRa function for handling OTAA join failed
*/
static void lorawan_join_failed_handler(void)
{
  Serial.println("OTAA join failed!");
  Serial.println("Check your EUI's and Keys's!");
  Serial.println("Check if a Gateway is in range!");
}
/**@brief Function for handling LoRaWan received data from Gateway
 *
 * @param[in] app_data  Pointer to rx data
 */
void lorawan_rx_handler(lmh_app_data_t *app_data)
{
  Serial.printf("LoRa Packet received on port %d, size:%d, rssi:%d, snr:%d, data:%s\n",
          app_data->port, app_data->buffsize, app_data->rssi, app_data->snr, app_data->buffer);
}

void lorawan_confirm_class_handler(DeviceClass_t Class)
{
  Serial.printf("switch to class %c done\n", "ABC"[Class]);
  // Informs the server that switch has occurred ASAP
  m_lora_app_data.buffsize = 0;
  m_lora_app_data.port = gAppPort;
  lmh_send(&m_lora_app_data, g_CurrentConfirm);
}

void send_lora_frame(void)
{
  if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }

  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;
  m_lora_app_data.buffer[i++] = 1;
  m_lora_app_data.buffsize = i;

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
}
```


This section explains the default settings and how to configure them.

1. Setup the region.

Default is **EU868**.

```c
LoRaMacRegion_t g_CurrentRegion = LORAMAC_REGION_EU868;
```

You can change this to a region that applies to you like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc.

2. Setup the activation method.

Default is **OTAA**.

```c
bool doOTAA = true;
```

To configure the device to ABP, you need to make this boolean variable `false`.

3. Setup the message type if confirmed or not.

Default is **confirmed message**.

```c
lmh_confirm g_CurrentConfirm = LMH_CONFIRMED_MSG;
```
You can change to unconfirmed message by changing the value to `LMH_UNCONFIRMED_MSG`.

4. Setup device class.

Default is **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A;
```
You can change this to `CLASS_B` (still under development) or `CLASS_C`.

5. Setup the EUIs and KEY. Get these parameters from the [Connecting RAK4631 to TTN V3 Application](/Knowledge-Hub/Learn/RAK-Developer-Kit-1-Guide/#connecting-rak4631-to-ttn-v3-application) section of this guide. It is very important that the EUI and KEY will match the one configured in the TTN application. Otherwise, your device will not be able to connect to the TTN server. In this application, the device is activated via OTAA so you need to configure the Device EUI, Application EUI, and Application Key.

```c
uint8_t nodeDeviceEUI[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x04, 0xAD, 0x3D};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x80, 0x3B, 0x4F, 0xE5, 0xCC, 0x76, 0xDF, 0x81, 0x21, 0xC1, 0x27, 0xC4, 0xBB, 0x74, 0x90, 0xF3};
```

##### LoRaWAN Payload

This LoRaButton Application will send an integer `1` to the LoRaWAN server when the button is pressed. This is set up on the `void loop()` function.

```c
int stat=digitalRead(WB_IO1);
  if(!stat){
    send_lora_frame();
    delay(5000);
  }
```
This is setup on the `void send_lora_frame(void)` function. The data will be send to the LoRaWAN Server. The LoRaWAN payload is packaged in this function.
```c
 if (lmh_join_status_get() != LMH_SET)
  {
    //Not joined, try again later
    return;
  }

  uint32_t i = 0;
  memset(m_lora_app_data.buffer, 0, LORAWAN_APP_DATA_BUFF_SIZE);
  m_lora_app_data.port = gAppPort;
  m_lora_app_data.buffer[i++] = 1;
  m_lora_app_data.buffsize = i;

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


##### Uploading the Arduino Code

After all the configuration is done and the payload is already formatted properly, you can now compile and upload the code.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino29_2.png"
  width="80%"
  caption="Double check the Board and COM Port"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino29_3.png"
  width="80%"
  caption="Press Upload button to program the WisBlock Kit 1 using RAK4631"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino29_4.png"
  width="80%"
  caption="Successful code Uploading"
/>

:::tip 📝 NOTE
On the other hand, if the error is related to the difficulty of uploading the FW, try to double-click the reset button on the WisBlock Base board and reupload it again.
:::

With the LoRaButton code successfully uploaded, you can now try to press the button on your device that you have set up earlier.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/lorabutton/lorabutton-1.png"
  width="60%"
  caption="Connecting Push Button with RAK5005-O WisBlock Base"
/>

Then check again your **The Things Stack** account and go to **Applications** > `<name of your application>` > **Live Data**. Wait for the uplink LoRaWAN payload every time you will press the button.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/lorabutton/ttn_output.png"
  width="80%"
  caption="Successful WisBlock Kit 1 onboarding using The Things Stack"
/>

You will also see the output on the serial monitor of the Arduino IDE.

```c
=====================================
Welcome to RAK4630 LoRaWan!!!
Type: OTAA
Region: EU868
=====================================
OTAA Mode, Network Joined!
lmh_send ok count 1
lmh_send ok count 2
lmh_send ok count 3
```