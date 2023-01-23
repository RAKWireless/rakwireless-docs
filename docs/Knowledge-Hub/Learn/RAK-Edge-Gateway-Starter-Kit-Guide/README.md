---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/rak-developer-kit1.png
rak_desc: This guide provides step-by-step tutorial on how to use your WisBlock Starter Kit and RAK Edge Gateway.
tags:
  - User-Manual
  - RAK Edge Gateway
  - WisGate
  - WisBlock
  - RAK7240
  - RAK7249
  - RAK7258
  - RAK7268
  - RAK7289
  - RAK4631
  - RAK5005-O
  - LoRaWAN
  - TTN
  - Arduino
header:
  title: WisBlock Starter Kit and RAK Edge Gateway Complete LoRaWAN Guide
  caption: by <b>Anthony Aldrin Beltran</b>
  img: /assets/images/knowledge-hub/banners/wisblock-sensor-tutorial.jpg
posted: 03/01/2022 08:00 AM
---

# WisBlock Starter Kit and RAK Edge Gateway Complete LoRaWAN Guide

## Overview

This guide is about learning how to set up a complete LoRaWAN application from device, gateway up to network server.

This guide is composed of the following section:
- [Setting Up the Gateway](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Starter-Kit-Guide/#setting-up-the-gateway)
- [Setting Up the Network Server](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Starter-Kit-Guide/#setting-up-the-network-server)
- [Setting Up the Device](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Starter-Kit-Guide/#setting-up-the-device)

:::tip 📝 NOTE:
If you are new to LoRaWAN, here are a few good references about LoRaWAN and gateways:

- [LoRaWAN 101](https://news.rakwireless.com/lorawan-r-101-all-you-need-to-know/)
- [What is a LoRaWAN Gateway?](https://news.rakwireless.com/what-is-a-lorawan-gateway/)
- [How do LoRaWAN Gateways work?](https://news.rakwireless.com/how-do-lorawan-gateways-work/)
- [Things to Consider When Picking A LoRaWAN Gateway](https://news.rakwireless.com/things-to-consider-when-picking-a-lorawan-gateway/)

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
In this tutorial, `RAK7268 WisGate Edge Lite 2` will be used. In powering and assembling the gateway,  you may look for the Quick Start Guide of the WisGate Edge Gateways.
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

By default, the gateway will work in Wi-Fi AP Mode which means that you can find an SSID named **RAK72XX_YYYY** on your PC's Wi-Fi Network List. **XX** is the code of your chosen WisGate Edge Gateway and **YYYY** is the last two bytes of the gateway's MAC address.

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

#### Registering WisGate Edge Gateway to TTNv3

In this section, it will be shown how to connect WisGate Edge Gateway to TTNv3.

1.  If you don’t have a [TTN account](https://www.thethingsnetwork.org/), create an account first. Click the Sign up button, then login.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-1.png"
  width="80%"
  caption="TTN V3 Website"
/>

2.  Make sure first you are in the right [TTN cluster](https://eu1.cloud.thethings.network/console). Use your **The Things ID** credentials to log in. In this example, choose **Europe 1**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-2.png"
  width="80%"
  caption="Log-in Website for TTN"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-2b.png"
  width="80%"
  caption="Choose Europe 1"
/>

3. After you have logged in, you need to register your commercial gateway to TTNv3. To register, choose **Go to gateways**. If you have already registered your gateways before, head on to **Gateways** > **+ Add gateway**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-3.png"
  width="80%"
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
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttnv3-setup/TTNV3-4-a.png"
  width="60%"
  caption="Filling information to add gateway in TTN V3"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/starter-kit/ttnv3-setup/TTNV3-4-b.png"
  width="50%"
  caption="Clicking the create gateway in TTN V3"
/>


5. TTNv3 supports TLS server authentication and Client token, which requires a trust file and a key file to configure the gateway and successfully connect it to the network. Generating the token for the gateway is the next step in this guide. To generate a key file, from the **Overview page** of the registered gateway, navigate to **API keys**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttnv3-setup/TTNV3-6.png"
  width="80%"
  caption="Overview page"
/>

6. On the **API keys page**, choose **+ Add API key**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttn/6.png"
  width="80%"
  caption="API key page"
/>

7. In the **Name field**, type the name of your key (for example - *mykey*). Choose **Grant individual rights** and select **Link as Gateway to a Gateway for traffic exchange, i.e. read uplink and write downlink**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttn/7.png"
  width="80%"
  caption="Generating an API key"
/>

8. To generate the key, choose the **Create API key**. The following window will pop up, telling you to copy the key you just generated.

<rk-img
  src="/assets/images/wisgate/rak7268/supported-lora-network-servers/ttn/8.png"
  width="60%"
  caption="Copying the generated key"
/>

:::warning ⚠️ WARNING
Copy the key and save it in a `.txt` file (or other), because you won’t be able to view or copy your key after that.
:::


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttn/8-copy.png"
  width="80%"
  caption="Copying the generated API key"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttnv3-setup/TTNV3-8.png"
  width="80%"
  caption="Copying the generated key in a txt file"
/>

9.  Click **I have copied the key** to proceed.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttn/8-labeled.png"
  width="80%"
  caption="Generating an API key"
/>

10.  You will configure the gateway to connect it successfully to the TTN V3 Server. To configure the gateway, access it via the Web UI. To learn how to do that, check out the [RAK7268 Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268/Quickstart/#access-the-gateway).

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

13. To save the changes click **Save & Apply**.

You can now see that your gateway is connected to TTNv3 as Basics Station:

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-discovery-kit/starter-kit/ttnv3-setup/TTNV3-5.png"
  width="80%"
  caption="Successful creation and connection of Gateway in TTN V3"
/>

### Setting Up the Device

#### Connecting RAK4631 to TTN V3 Application

1. Now that you are logged in to the platform, the next step is to create an application. In your console, Click **Create an application**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-1.png"
  width="80%"
  caption="Create an Application"
/>

2.  To have an application registered, you need to input first the specific details and necessary information about your application then click Create application.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-2.png"
  width="80%"
  caption="Creating an Application"
/>

3. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**. LoRaWAN specification enforces that each end-device has to be personalized and activated. There are two options for registering devices depending on the activation mode you select. Activation can be done either via Over-The-Air-Activation (OTAA) or Activation-By-Personalization (ABP).  You need to click **+ Add end device**, as shown in **Figure 21**.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-3.png"
  width="80%"
  caption="add end-devices to your TTN application"
/>

4. To register the module, you need to click **Manually** first.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-4.png"
  width="80%"
  caption="Adding End Devices Manually"
/>

5. Choose the following configurations in adding the end devices.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-5.png"
  width="80%"
  caption="Configurations for adding end devices"
/>

6.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select Over the air action (OTAA).


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-6.png"
  width="80%"
  caption="OTAA Settings"
/>

7. Then you need to put a unique End device ID and EUIs (DevEUI and AppEUI), as shown in **Figure 25**. Check if your RAK4631 module has a **DevEUI** on **sticker or QR** that you can scan then use this as the device unique DevEUI.

For **AppEUI**, you may click **Fill with Zeros**. Click **Generate** for the **AppKey**. Then the End Device ID will be automatically filled by the website. You can also put a different End Device ID if you need to. Finally, click **Register End Device**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-7.png"
  width="80%"
  caption="Registering the End Device"
/>


8. You should now be able to see the device on the TTN console after you fully register your device, as shown in **Figure 26**. Take note of these keys, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the next part of this guide.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/RAK4631-ttnv3-setup/RAK4631-TTNV3-8.png"
  width="80%"
  caption="OTAA device successfully registered to TTN"
/>

#### Hardware Setup

The RAK4631 will not work without a WisBlock Base board. The WisBlock Base provides a USB connection for programming the RAK4631. It also provides a power source and various interfaces to RAK4631 so that it can be connected to other WisBlock modules via different module slots.

RAKwireless offers many [WisBlock Base Boards](https://store.rakwireless.com/collections/wisblock-base) compatible with WisBlock Core. It is highly recommended for you to look on these WisBlock Base boards to see what matches your requirements in terms of available module slots, power supply options, and overall size.

To illustrate, RAK4631 can be connected to RAK5005-O WisBlock Base, as shown in **Figure 27**.

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK5005-connect.png"
  width="80%"
  caption="RAK4631 Connection to WisBlock Base RAK5005-O"
/>

There are few pins that are exposed on RAK5005-O, and you can easily use them via header pins. The labels are at the back, as shown in **Figure 28**.

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

There are usable LEDs as well that can be controlled by the RAK4631 on the WisBlock Base board:

- `LED_GREEN`
- `LED_BLUE`

UART1 and I2C_1 are also exposed on the header of the WisBlock Base board.

- RAK4631 has a native USB peripheral onboard (Serial), which is used for programming and Serial debugging and two usable hardware **UART1** and **UART2** (Serial 1 and Serial 2). **UART1** is accessible to WisBlock Slot A, WisBlock IO slot, and the exposed header pins. **UART2** is accessible only on the WisBlock IO slot.
- The **I2C_1** header pins are as well shared to the WisBlock Base Slots A to D. The second **I2C_2** is available only on the WisBlock IO slot.

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

**Figure 29** shows how to mount the RAK4631 module on top of a WisBlock Base board (RAK5005-O). Follow carefully the procedure defined in [WisBlock module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) in order to secure the connection safely. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

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

3. Apply force to the module at the position of the connector, as shown in **Figure 32** to detach the module from the baseboard.

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

RAK4631 has a label on its sticker where to connect the antennas, as shown in **Figure 35**.


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


#### Creating LoRaButton Application

Once the RAK4631 is connected to RAK5005-O WisBlock Base, You can connect a push button to the **RAK5005-O WisBlock Base**, having its terminals, one in  `WB_IO1` for IO1 pin, and the other one in `GND`.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/lorabutton/lorabutton-1.png"
  width="60%"
  caption="Connecting Push Button with RAK 5005-O WisBlock Base"
/>

##### Software Setup

1. Download the (Arduino IDE)[https://www.arduino.cc/en/software](https://www.arduino.cc/en/software), then install it on your PC or laptop.

:::warning ⚠️ WARNING
_**If you are using Windows 10**_.
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Install the original Arduino IDE from the Arduino official website! The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
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
  width="50%"
  caption="Installing the Arduino IDE"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino4.png"
  width="50%"
  caption="Completing the installation of Arduino IDE"
/>


2. Open the Arduino IDE, then install the **RAKwireless BSP support for the Arduino Board Manager**.

3. Click on **File** > **Preferences**. In the **Preferences** window, look for **Additional Boards Manager URLs**, then click the icon on the right side.


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

4. Copy `https://raw.githubusercontent.com/RAKwireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless_index.json`, paste it into the new window, then click **OK** > **OK**.


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

5. Go to **Tools** > **Board: "Arduino Uno"** > **Boards Manager**. Type RAK in the search bar, and the RAKwireless Core modules will be shown in the window.


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


6. Choose **RAKwireless nRF Boards**, then **Install**. After installing the core nRF core module, click **Close**.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-developer-kit/kit-4/wisblock-kit1-device/arduino12.png"
  width="80%"
  caption="Successful Installation of  RAKwireless nRF Boards"
/>

7. Lastly, ensure that you have the updated SX126x.


<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/lorabutton/sx126xarduino.png"
  width="60%"
  caption="SX126x-Arduino Library"
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

// Foward declaration
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

// Private defination
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

You can change this to a region that is applicable to you like `LORAMAC_REGION_US915`, `LORAMAC_REGION_AU915`, etc.

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

5. Setup the EUIs and KEY. Get these parameters from the [Connecting RAK4631 to TTN V3 Application](/Knowledge-Hub/Learn/RAK-Edge-Gateway-Starter-Kit-Guide/#connecting-rak4631-to-ttn-v3-application) section of this guide. It is very important that the EUI and KEY will match the one configured in the TTN application. Otherwise, your device will not be able to connect to the TTN server. In this application, the device is activated via OTAA so you need to configure the Device EUI, Application EUI, and Application Key.


```c
uint8_t nodeDeviceEUI[8] = {0x70, 0xB3, 0xD5, 0x7E, 0xD0, 0x04, 0xAD, 0x3D};
uint8_t nodeAppEUI[8] = {0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00, 0x00};
uint8_t nodeAppKey[16] = {0x80, 0x3B, 0x4F, 0xE5, 0xCC, 0x76, 0xDF, 0x81, 0x21, 0xC1, 0x27, 0xC4, 0xBB, 0x74, 0x90, 0xF3};
```

##### LoRaWAN Payload

- This LoRaButton Application will send an integer `1` to the LoRaWAN server when the button is pressed. This is set up on the `void loop()` function.

```c
int stat=digitalRead(WB_IO1);
  if(!stat){
    send_lora_frame();
    delay(5000);
  }
```

- This is set up on the `void send_lora_frame(void)` function. The data will be sent to the LoRaWAN Server. The LoRaWAN payload is packaged in this function.

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
  caption="Double check the Board and COM port"
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
On the other hand, if the error is related to the difficulty of uploading the FW, try to double click the reset button on the WisBlock Base board and reupload it again.
:::

With the LoRaButton code successfully uploaded, you can now try to press the button on your device that you set up earlier.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/lorabutton/lorabutton-1.png"
  width="60%"
  caption="Connecting Push Button with RAK 5005-O WisBlock Base"
/>

Then check again your The Things Stack account and go to **Applications** > `name of your application` > **Live Data**. Wait for the uplink LoRaWAN payload every time you will press the button.

<rk-img
  src="/assets/images/knowledge-hub/learn/rak-edge-gateway-developer-kit/starter-kit/lorabutton/ttn_output.png"
  width="80%"
  caption="Successful Wisblock Kit 1 onboarding using The Things Stack"
/>

You will also see output on the Serial Monitor of the Arduino IDE.

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