---
sidebar: false
rak_img: /assets/images/knowledge-hub/rak-developer-kit/kit-4/wisblock-kit4-tagoio/kit4-tagoio.png
rak_desc: This guide provides a step-by-step tutorial on how to use your WisBlock Kit 4 and RAK Edge Gateway to connect it with TTN v3 and TagoIO. 
tags:
  - Tutorial
  - RAK Edge Gateway
  - WisGate
header:
  title: WisBlock Kit 4 and RAK Edge Gateway Complete LoRaWAN Guide with TTN V3 and TagoIO
  caption: by <b>Christian Jay Mendoza</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 21/07/2022 05:17 PM
---

# WisBlock Kit 4 and RAK Edge Gateway Complete LoRaWAN Guide with TTN V3 and TagoIO

## Overview

This guide is about learning how to set up a complete LoRaWAN application from the device and gateway up to the network server.

This guide is composed of the following section:
- [Setting Up the Gateway](#setting-up-the-gateway)
- [Setting Up the Network Server](#setting-up-the-network-server)
- [Setting Up the Device](#setting-up-the-device)
- [Setting Up IoT Dashboard Using TagoIO](#setting-up-iot-dashboard-using-tagoio)

:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway?](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN® Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN® Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

LoRaWAN gateway models like WisGate Edge have built-in network servers. It is also common that the LoRaWAN network server is external or in the cloud. The popular LoRaWAN network server in the cloud that you can use for free (but offers enterprise service, too) is TTN.
:::

### Setting Up the Gateway

**WisGate Edge** is the RAK flagship line of commercial-grade gateways. Gateways from this product line are designed to work either indoor or outdoor, customizable in terms of the backhaul connectivity options, antenna type, and power provisioning. Here are the products that you may look to as you build your LPWAN base station:

- [RAK7240 WisGate Edge Prime](https://store.rakwireless.com/collections/wisgate-edge/products/rak7240-outdoor-lpwan-gateway)
- [RAK7249 WisGate Edge Max](https://store.rakwireless.com/collections/wisgate-edge/products/rak7249-diy-outdoor-gateway)
- [RAK7258 WisGate Edge Lite](https://store.rakwireless.com/collections/wisgate-edge/products/rak7258-micro-gateway)
- [RAK7268 WisGate Edge Lite 2](https://store.rakwireless.com/collections/wisgate-edge/products/wisgate-edge-lite-2-rak7268-rak7268c)
- [RAK7289 WisGate Edge Pro](https://store.rakwireless.com/collections/wisgate-edge/products/wisgate-edge-pro-rak7289)

#### Configuring the WisGate Edge Gateway

This section will guide you on how to set up your [WisGate Edge Gateway](https://docs.rakwireless.com/Product-Categories/WisGate/#wisgate-edge).

:::tip 📝 NOTE:
In this tutorial, `RAK7268 WisGate Edge Lite 2` will be used. In powering and assembling the gateway, you may look for the Quick Start Guide of the WisGate Edge Gateways.

- [RAK7240 WisGate Edge Prime](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7240/Quickstart/)
- [RAK7249 WisGate Edge Max](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7249/Quickstart/)
- [RAK7258 WisGate Edge Lite](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7258/Quickstart/)
- [RAK7268 WisGate Edge Lite 2](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/)
- [RAK7289 WisGate Edge Pro](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7289/Datasheet/#overview)
:::

##### Access the Gateway

In this section, several ways of accessing the gateway are provided to have different alternatives for you to choose from depending on the availability of the requirements needed.

:::warning ⚠️ WARNING
Do not power the device if the LoRa Antenna port has been left open to avoid potential damage to the RAK7268/RAK7268C WisGate Edge Lite 2.
:::

##### Wi-Fi AP Mode

By default, the gateway will work in Wi-Fi AP Mode, which means that you can find an SSID named **RAK72XX_YYYY** on your PC's Wi-Fi Network List. **XX** is the code of your chosen WisGate Edge Gateway and **YYYY** is the last two bytes of the gateway's MAC address.

:::tip 📝 NOTE:
 No password is required to connect via Wi-Fi
:::

Using your preferred Web browser, log in with the credentials provided below:

- **Browser Address**: 192.168.230.1
- **Username**: root
- **Password**: root

##### WAN Port (Ethernet)

Connect the Ethernet cable to the port marked ETH on the gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X.** The last two segments (X.X) are mapped from the last four bits of the MAC address of your gateway.

For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network (for example 169.254.15.100). Use the same credentials for the Web UI as for AP mode.

<rk-img
  src="/assets/images/wisgate/rak7268/quickstart/3.login-page.png"
  width="100%"
  caption="Web UI Login Page"
/>

### Setting Up the Network Server

#### Registering RAK7268 WisGate Edge Lite 2 to TTNv3

In this section, it will be shown how to connect RAK7268 WisGate Edge Lite 2 to TTNv3.

1.  If you don’t have a [TTN account]((https://www.thethingsnetwork.org/)), create an account first. Click the **Sign up** button, then log in.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\starter-kit\ttnv3-setup\TTNV3-1.png"
  width="100%"
  caption="TTN V3 Website"
/>

2.  Make sure first you are in the right [TTN cluster](https://eu1.cloud.thethings.network/console). Use your **The Things ID** credentials to log in. In this example, choose **Europe 1**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\starter-kit\ttnv3-setup\TTNV3-2.png"
  width="100%"
  caption="Log-in Website for TTN"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\starter-kit\ttnv3-setup\TTNV3-2b.png"
  width="100%"
  caption="Choose Europe 1"
/>

3. After you have logged in, you need to register your commercial gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways** > **+ Add gateway**.
   

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\starter-kit\ttnv3-setup\TTNV3-3.png"
  width="100%"
  caption="Gateway Console in TTN V3"
/>

4.  Fill in the needed information:
  - **Owner** – Automatically filled by The Things Stack, based on your account or created Organization. 
  - **Gateway ID** – This will be the unique ID of your gateway in the Network. ID must contain only lowercase letters, numbers, and dashes (-).
  - **Gateway EUI** - A 64 bit extended unique identifier for your gateway. This is where the gateway you get on the above section Configuring the RAK7268 WisGate Edge Lite 2.
  - **Gateway name** – A name for your gateway. 
  - **Gateway description (optional)** - Optional gateway description; can also be used to save notes about the gateway.
  - **Gateway Server address** - The address of the gateway server to connect to.
  - **Frequency plan** - The frequency plan used by the gateway.
  
:::tip 📝 NOTE

- There are three server clusters available for TTN V3. In this guide, you will use `eu1.cloud.thethings.network`. You need to select the closes one in your country or location for optimized performance.

- The available [TTN V3 clusters](https://console.cloud.thethings.network/) are:

      - North American Region - `nam1.cloud.thethings.network`
      - European Region - `eu1.cloud.thethings.network`
      - Australian Region - `au1.cloud.thethings.network`

- Also, you will be using Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended).
  :::

<rk-img
  src="\assets\images\knowledge-hub\rak-edge-gateway-discovery-kit\starter-kit\ttnv3-setup\TTNV3-4-a.png"
  width="60%"
  caption="Filling information to add gateway in TTN V3"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\starter-kit\ttnv3-setup\TTNV3-4-b.png"
  width="50%"
  caption="Clicking the create gateway in TTN V3"
/>


5. TTNv3 supports TLS server authentication and Client token, which requires a trust file and a key file to configure the gateway and successfully connect it to the network. Generating the token for the gateway is the next step in this guide. To generate a key file, from the **Overview page** of the registered gateway, navigate to **API keys**.

<rk-img
  src="\assets\images\knowledge-hub\rak-edge-gateway-discovery-kit\starter-kit\ttnv3-setup\TTNV3-6.png"
  width="100%"
  caption="Overview page"
/>

6. On the **API keys page**, choose **+ Add API key**.

<rk-img
  src="/assets/images/knowledge-hub/rak-edge-gateway-discovery-kit/starter-kit/ttn/6.png"
  width="100%"
  caption="API key page"
/>

7. In the **Name field**, type the name of your key (for example - *mykey*). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.

<rk-img
  src="/assets/images/knowledge-hub/rak-edge-gateway-discovery-kit/starter-kit/ttn/7.png"
  width="100%"
  caption="Generating an API key"
/>

8. To generate the key, choose the **Create API key**. The following window will pop up, telling you to copy the key you just generated. 

<rk-img
  src="/assets/images/wisgate/rak7268/supported-lora-network-servers/ttn/8.png"
  width="100%"
  caption="Copying the generated key"
/>

:::warning ⚠️ WARNING
Copy the key and save it in a `.txt` file (or other), because you won’t be able to view or copy your key after that.
:::

<rk-img
  src="/assets/images/knowledge-hub/rak-edge-gateway-discovery-kit/starter-kit/ttn/8-copy.png"
  width="80%"
  caption="Copying the generated API key"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-edge-gateway-discovery-kit\starter-kit\ttnv3-setup\TTNV3-8.png"
  width="80%"
  caption="Copying the generated key in a txt file"
/>

9.  Click **I have copied the key** to proceed. 

<rk-img
  src="/assets/images/knowledge-hub/rak-edge-gateway-discovery-kit/starter-kit/ttn/8-labeled.png"
  width="80%"
  caption="Generating an API key"
/>

10.   You will configure the gateway to connect it successfully to the TTN V3 Server. To configure the gateway, access it via the Web UI. To learn how to do that, check out the [RAK7268 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#access-the-gateway). 

<rk-img
  src="/assets/images/wisgate/rak7268/quickstart/3.login-page.png"
  width="100%"
  caption="Web UI Login Page"
/>

11.  Navigate to **LoRa Network** > **Network Settings** > **Mode** drop-down menu, then choose **Basics Station**. 

<rk-img
  src="/assets/images/wisgate/rak7268/supported-lora-network-servers/ttn/9.png"
  width="100%"
  caption="Changing the working mode"
/>

12. Select **Switch mode** to apply the change. After that, the **Basics Station Configuration** pane settings will show up. To connect the gateway to TTNv3, the following parameters must be configured:

- **Server** – For server, choose **LNS Server**.
- **URI** – This is the link to The Things Stack server. Note that, for this tutorial, you are connecting the gateway to the European cluster. For Europe, fill in the following: `wss://eu1.cloud.thethings.network`.
- **Port** – The LNS Server uses port 8887. Type in **8887**.
- **Authentication Mode** – Choose **TLS server authentication and Client token**. When selected, the trust and the token field will show up.
- **trust** – For trust, you will use the **Let’s Encrypt ISRG ROOT X1 Trust** certificate. [Download](https://letsencrypt.org/certs/isrgrootx1.pem) the certificate first.
- **token** -  This is the generated **API key**. The key must start with **Authorization:**. Example: 

```
Authorization: YOUR_API_KEY
```

::: tip 📝 NOTE
Replace **YOUR_API_KEY** with the key generated previously. Have in mind that there should be a “space” between **Authorization:** and **YOUR_API_KEY**, as shown in **Figure 17**.
:::

<rk-img
  src="/assets/images/wisgate/rak7268/supported-lora-network-servers/ttn/10.png"
  width="100%"
  caption="LoRa Basics Station settings"
/>

13. To save the changes, click **Save & Apply**.

You can now see that your gateway is connected to TTNv3 as Basics Station:

<rk-img
  src="\assets\images\knowledge-hub\rak-edge-gateway-discovery-kit\starter-kit\ttnv3-setup\TTNV3-5.png"
  width="100%"
  caption="Successful creation and connection of Gateway in TTN V3"
/>

### Setting Up the Device

#### Connecting RAK4631 to TTN V3 Application

1. Now that you are logged in to the platform, the next step is to create an application. In your console, Click **Create an application**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-1.png"
  width="100%"
  caption="Create an Application"
/>

2.  To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-2.png"
  width="100%"
  caption="Creating an Application"
/>

3. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**. 

LoRaWAN specification enforces that each end-device has to be personalized and activated. There are two options for registering devices depending on the activation mode you select. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP). Click **+ Add end device**, as shown in **Figure 21**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-3.png"
  width="100%"
  caption="add end-devices to your TTN application"
/>

4. To register the module, you need to click **Manually** first.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-4.png"
  width="100%"
  caption="Adding End Devices Manually"
/>

5. Choose the following configurations in adding the end devices.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-5.png"
  width="100%"
  caption="Configurations for adding end devices"
/>

6.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select **Over the air action** (OTAA). 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-6.png"
  width="100%"
  caption="OTAA Settings"
/>

7. Then input a unique End device ID and EUIs (DevEUI and AppEUI), as shown in **Figure 25**. Check if your RAK4631 module has a **DevEUI** on **sticker or QR** that you can scan then use this as the device unique DevEUI. 

For **AppEUI**, you may click **Fill with Zeros**. Click **Generate** for the **AppKey**. Then the End Device ID will be automatically filled by the website. You can also put a different End Device ID if you need to. Finally, click **Register End Device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-7.png"
  width="100%"
  caption="Registering the End Device"
/>

8. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 26**. Take note of these keys, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the next part of this guide. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\RAK4631-ttnv3-setup\RAK4631-TTNV3-8.png"
  width="100%"
  caption="OTAA device successfully registered to TTN"
/>


#### Creating Environment Monitoring Application

##### Hardware Setup

This section is about the actual device configuration.

RAK1906 WisBlock Environmental Sensor Module can be connected to any slot of `RAK5005-O WisBlock Base Board` to communicate with the `RAK4631 WisBlock LPWAN Module`. It will work on **SLOT A to D**. Also, always secure the connection of the WisBlock module by using compatible screws.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/rak1906_assembly.png"
  width="70%"
  caption="RAK1906 connection to WisBlock Base"
/>

##### Assembling and Disassembling of WisBlock Modules

###### Assembling

As shown in **Figure 28**, the location for Slots A, B, C, and D are properly marked by silkscreen. Slots C and D are located on the bottom of WisBlock Base. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with an M1.2 x 3&nbsp;mm screw.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/wisblock-sensor-silkscreen.png"
  width="70%"
  caption="RAK1906 connection to WisBlock Base"
/>

###### Disassembling

The procedure for disassembling any type of WisBlock module is the same. 

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

3. Apply force to the module at the position of the connector, as shown in **Figure 31**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK1906 uses I2C communication lines, and it can cause possible conflict, especially on some IO modules. 
:::

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

RAK4631 has a label on its sticker on where to connect the antennas, as shown in **Figure 34**.


<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK4631-antenna-label.png"
  width="30%"
  caption="RAK4631 Antenna Label"
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

#### Software Setup

The RAK1906 is a 4-in-1 Environmental Sensor board that contains the Bosch BME680 chip. It is specially designed for wearables where size and low power consumption are critical requirements. The BME680 contains a small Metal-Oxide (MOX) sensor and an I2C interface used to communicate with WisBlock Core.

The RAK1906 module gives information about:
- Air pressure
- Air quality
- Ambient Air Temperature
- Environment Humidity

::: warning ⚠️ WARNING    
The BME680 requires a burn-in period to collect accurate readings. The burn-in procedure can be achieved by reading all sensors once every 5 seconds for at least 20 minutes the first time that you use it. For each subsequent use, the readings should stabilize 2-3 minutes after power-up.
:::

##### Software Configuration

1. Download the (Arduino IDE)[https://www.arduino.cc/en/software](https://www.arduino.cc/en/software), then install it on your PC or laptop.

:::warning ⚠️ WARNING    
_**If you are using Windows 10**_.    
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Install the original Arduino IDE from the Arduino official website! The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino1.png"
  width="100%"
  caption="Downloading the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino2.png"
  width="100%"
  caption="Just download the IDE without any cost"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino3.png"
  width="50%"
  caption="Installing the Arduino IDE"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino4.png"
  width="50%"
  caption="Completing the installation of Arduino IDE"
/>



2. Open the Arduino IDE, then install the **RAKwireless BSP support for the Arduino Board Manager**. 

3. Click on **File** > **Preferences**. In the **Preferences** window, look for **Additional Boards Manager URLs**, then click the icon on the right side. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino6.png"
  width="100%"
  caption="Preferences setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino7.png"
  width="100%"
  caption="Preferences window"
/>


4. Copy `https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json`, paste it into the new window, then click **OK** > **OK**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino8.png"
  width="100%"
  caption="RAKwireless BSP support for the Arduino Board Manager setup"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino9.png"
  width="100%"
  caption="Completing the setup of RAKwireless BSP support for the Arduino Board Manager"
/>

5. Go to **Tools** > **Board: "Arduino Uno"** > **Boards Manager**. Type RAK in the search bar and the RAKwireless Core modules will be shown in the window. 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino10.png"
  width="100%"
  caption="Boards Manager"
/>


<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino11.png"
  width="100%"
  caption="Installing RAKwireless nRF boards"
/>

6. Choose **RAKwireless nRF Boards**, then **Install**. After installing the core nRF core module, click **Close**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit1-device\arduino12.png"
  width="100%"
  caption="Successful Installation of RAKwireless nRF Boards"
/>


7. After the installation of the RAKwireless nRF Board core module, you can get the program by navigating on the example code, as shown in **Figure 46**. Open it on the Arduino IDE, and save it as `Environment_Monitoring.ino`

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\environment\arduino_goto.png"
  width="100%"
  caption="Getting the Arduino Code from the Examples Section"
/>

8. Once the example code is open, install the [Adafruit BME680](https://github.com/adafruit/Adafruit_BME680) library, **SX126x Arduino** library, and the **U8g2lib** Library, by clicking the links highlighted in red. You will be directed to `Arduino Library Manager` for each link you will be clicking.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\environment\arduino_dl_lib.png"
  width="100%"
  caption="Install the needed library"
/>

During the installation, you will be asked to install the **Adafruit Unified Sensor** library. Install it, as well.

<rk-img
  src="/assets/images/wisblock/rak1906/quickstart/lib-bme680-install-2.png"
  width="100%"
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

You can change to an unconfirmed message by changing the value to `LMH_UNCONFIRMED_MSG`.

4. Set up device class.

Default is **Class A**.

```c
DeviceClass_t g_CurrentClass = CLASS_A; 
```

You can change this to **CLASS_B** (still under development) or **CLASS_C**.

5. Setup the EUIs and KEY. Get these parameters from the [Connecting RAK4631 to TTN V3 Application](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Kit-4-TagoIO-Guide/#connecting-rak4631-to-ttn-v3-application) section of this guide. It is very important that the EUI and KEY will match the one configured in the TTN application. Otherwise, your device will not be able to connect to the TTN server. In this application, the device is activated via OTAA so you need to configure the Device EUI, Application EUI, and Application Key.

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

After a successful installation of the library and configuration of the LoRaWan Network Server setup, you can now select the right serial port and upload the code, as shown in **Figure 49** and **Figure 50**.

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

```c
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

Check again your **The Things Stack** account and go to **Applications** > `<name of your application>` > **Live Data**. Wait for the uplink data messages that are updated every 20 seconds.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img1.png"
  width="100%"
  caption="Successful Wisblock Kit onboarding using The Things Stack"
/>

##### Payload Format

Payload formatters allow you to process data going to and from end devices. This is useful for converting binary payloads to human readable fields, or for doing any other kind of data conversion on uplinks and downlinks.

1. On your **The Things Stack** account, go to **Applications** > ` <name of your application> ` > **Uplink** > **Payload formatters**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img2.png"
  width="100%"
  caption="Uplink Payload Formatter"
/>

2. Choose the **Custom Javascript formatter** as the Formatter type.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img3.png"
  width="100%"
  caption="Choosing Formatter type"
/>

3. Copy this Decoder code and paste it inside the Formatter code. Then click **Save Changes**.

```js
// WisBlock Enviromental Data Frame Example: 0x0109CE104D00018A510000F848

function Decoder(bytes, port) {
    // Decode an uplink message from a buffer
    // (array) of bytes to an object of fields.
    var decoded = {};
    // Check which data we received
    if (bytes[0] == 1) {
        // Received data is Environment Monitoring data
        decoded.temperature = (bytes[1] << 8 | (bytes[2])) / 100;
        decoded.humidity = (bytes[3] << 8 | (bytes[4])) / 100;
        decoded.pressure = (bytes[8] | (bytes[7] << 8) | (bytes[6] << 16) | (bytes[5] << 24)) / 100;
        decoded.gas = bytes[12] | (bytes[11] << 8) | (bytes[10] << 16) | (bytes[9] << 24);
    } else if (bytes[0] == 7) {
// add more sensor data formats here
//        } else if (bytes.[0] == xx) {
    }
    return decoded;
}
```
<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img4.png"
  width="100%"
  caption="Payload format code"
/>

4. After saving, go to **Applications** > `<name of your application>` > **Live Data**. Wait for the uplink data messages again and you'll be able to see that the payload is already decoded into human-readable data.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img5.png"
  width="100%"
  caption="Decoded Uplink Payload"
/>

### Setting Up IoT Dashboard Using TagoIO

This section will guide you on how to integrate your application using TagoIO.

1. Go to [Tago.io](https://tago.io/) and create your account.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img6.png"
  width="100%"
  caption="Signup TagoIO account"
/>

2. Login into your TagoIO account. If this is your first device to connect between TTN V3 and TagoIO, then you will need to create a [Service Authorization](https://admin.tago.io/devices/authorization). You will need to copy the authorization that you created for TTN V3 later.

:::tip 📝 NOTE:
- You need to create **ONLY** one Authorization for all of your devices.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img7.png"
  width="100%"
  caption="Service Authorization"
/>

3. When you're already on the [Service Authorization](https://admin.tago.io/devices/authorization) page, enter a name for this authorization then click **Generate**. After that, you can now see your newly created authorization.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img8.png"
  width="100%"
  caption="Generate Authorization"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img9.png"
  width="100%"
  caption="Created Authorization"
/>

4. Copy the Authorization key and take note or save it in a `.txt` file (or other), because we will be needing this later to connect your TTN V3 devices to TagoIO.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img10.png"
  width="100%"
  caption="Copying Authorization Key"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img11.png"
  width="100%"
  caption="Copied Authorization Key"
/>

5. On your **The Things Stack** account, you need to create a new integration. You can create a new integration under the **Applications** > ` <name of your application> ` > **Webhooks**. Then click **+ Add Webhook** and choose **TagoIO**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img12.png"
  width="100%"
  caption="Add Webhook Integration"
/>

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img13.png"
  width="100%"
  caption="TagoIO Webhook"
/>

6. Fill in the needed information:
  - **Webhook ID** – This will be the unique ID of your Webhook. Your ID must contain only lowercase letters, numbers, and dashes (-).
  - **Authorization** – You will have to put here the TagoIO Authorization that you have copied previously from **STEP 4**.

   then, click **Create TagoIO webhook**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img14.png"
  width="50%"
  caption="Webhook Setup for TagoIO"
/>  

7. You'll now be able to see your newly created webhook.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img15.png"
  width="100%"
  caption="Created Webhook"
/>  
  
8. Now, on your TagoIO account, you just need to start adding your device. Go to **Devices**, and under **Networks**, click the **LoRaWAN TTI/TTN v3**, then choose **Custom TTI/TTN**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img16.png"
  width="100%"
  caption="Network Selection for your Device"
/>  

9. To connect the device to TagoIO, the following parameters must be set:
  - **Device Name** – Give a name for your device.
  - **Device EUI** – This will be your `DevEUI` key that you have on **The Things Stack**. To find your Device EUI, go to **Applications** > ` <name of your application> ` > **End devices** > ` <name of your device> `. Then under **Activation information**, you will see your `DevEUI`.

  then, click **Create my Device**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img17.png"
  width="100%"
  caption="Custom TTI/TTN"
/> 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img18.png"
  width="100%"
  caption="Device EUI"
/> 

10. After creating your device, you'll now be able to see it on your TagoIO account.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img19.png"
  width="100%"
  caption="Created device on TagoIO"
/> 

11. Next, go to **Devices** > ` <name of your device> ` **Live Inspector** and click the `play button` then wait for data to arrive. It will take 1-2 minutes or less for the data to arrive from your device. If you see incoming data, then your device is now successfully connected to your TagoIO account.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img20.png"
  width="100%"
  caption="Device successfully connected to TagoIO"
/> 

If you click the arrow on the left side of the incoming data in the **Live Inspector**, you'll be able to see the variables and values of those data and also some other details.

:::tip 📝 NOTE:
These variables such as **gas**, **humidity**, **pressure**, and **temperature** are important to remember, for you to make your dashboard.
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img22.png"
  width="100%"
  caption="Live Inspector incoming data"
/> 


12. You can now create a dashboard. On your **TagoIO** menu, click the `+` sign beside **Dashboard** to add a new dashboard.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img21.png"
  width="100%"
  caption="Adding new Dashboard"
/> 

13. Enter a **Name** for your dashboard and choose **Normal** as the type of your dashboard. After that, click **Create my Dashboard**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img23.png"
  width="70%"
  caption="Adding new Dashboard"
/> 

14. Click **Add widget**. A window will appear and choose the **Display** widget.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img24.png"
  width="100%"
  caption="Adding a widget"
/> 

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img25.png"
  width="100%"
  caption="Display widget"
/> 

15. Edit the **Display** widget. Click **Title** on the right side of the window and a dropdown will appear, change the title name to **Temperature**.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img26.png"
  width="100%"
  caption="Change title name"
/> 

16. Click **Data from**, then fill out the important fields:
  - **Device** – The ` <name of your device> `.
  - **Variable** – The variable name of the data. You may look at your variables in the **Live Inspector**. For further details, see **Step 11** of [Setting Up IoT Dashboard using TagoIO](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Kit-4-TagoIO-Guide/#setting-up-iot-dashboard-using-tagoio).

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img27.png"
  width="100%"
  caption="Getting the data"
/> 

17.  Go to **Visual**. Check the **Show last update** and then click **Create** at the bottom right side of the window to create the widget.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img28.png"
  width="100%"
  caption="Create widget"
/> 

18. After creating the widget, you will now be able to see your widget and the variable, the data values coming from your device, and also when was it last updated.

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img29.png"
  width="100%"
  caption="Completed widget"
/> 

19. You may follow the same previous steps on creating widgets for your other variables like **humidity**, **pressure**, **gas**, **and others**. After doing all these steps, you already finished making the **Wisblock Kit 4 Environment Monitoring using TagoIO**.

:::tip 📝 NOTE:
If you want to learn how to create beautiful dashboards and other more details, see [Dashboard Help Center](https://help.tago.io/portal/en/kb/tagoio/dashboards).
:::

<rk-img
  src="\assets\images\knowledge-hub\rak-developer-kit\kit-4\wisblock-kit4-tagoio\img30.png"
  width="100%"
  caption="Environment Monitoring dashboard using TagoIO"
/> 