---
rak_img: /assets/images/software-apis-and-library/wisgateos2.png
rak_desc: WisGateOS 2 features an extension functionality, which provides additional features and functions that can be added or removed, based on the user's needs. Later this year RAKwireless will provide the option for our users to build their own extensions.
rak_grp: [software-apis-and-libraries, wisgateos]
prev: ../Software-APIs-and-Libraries/
next:  false
tags:
    - wisgate
    - WisGateOS2
    - WisGateOS2 Extensions
---

# WisGateOS 2 Extensions

## Overview

WisGateOS 2 features an extension functionality, which provides additional features and functions that can be added or removed, based on your needs. Later this year, RAKwireless will provide the option for our users to build their own extensions.

The extensions are built to work with version 2 gateways running the WisGateOS 2.

::: tip 📝 NOTE
Some extensions will be available for certain gateway models since they are related to specific hardware functionality.
:::


## How to Add or Remove an Extension

### How to Add an Extension

1. To install an extension, start with accessing the gateway. To access the gateway, check the Access the [WisGateOS 2 Web UI](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#access-the-wisgateos-2-web-ui) user manual.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/1.login-page.png"
  width="100%"
  caption="Login page"
/>

2. After a successful login, head to the **Extensions tab** (<img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/2.png"> ). You can click the WisGate logo (<img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/3.png"/>) in the upper left corner to expand the menu on the left and see the full names of the tabs.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/4.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

By default, no extensions are installed.

3. To install one, you can click either on **Add new extension** button or the **install one now link**. An **Add new extension** window will pop up.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/5.new-extensions.png"
  width="100%"
  caption="Add New Extension"
/>

4. Now, you can either drag and drop the extension file in the **Drop your Extension file here or choose file** form or click the **choose file link** in the form and browse for the extension file.

::: tip 📝 NOTE
The extension files are in **IPK** format and are created specifically for the WisGateOS 2 and the WisGate Edge hardware platform. A general IPK file for OpenWRT cannot be installed.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/6.choose-extensions.png"
  width="100%"
  caption="Choosing an Extension"
/>

5. After you choose the extension file, click **Add extension** to install it.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/7.add-extensions.png"
  width="100%"
  caption="Adding an Extension"
/>

It takes some time for the extension to install.

6. After the installation process is complete, the WisGateOS will reboot and you need to log in again.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/8.login.png"
  width="100%"
  caption="Login Page"
/>

7. Head to the **Extensions tab** again and you should see the installed extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/9.installed-extension.png"
  width="100%"
  caption="Installed Extension"
/>

Your extension is successfully installed.

8. You can now install more extensions via the **Add new** **extension** button or configure the installed ones by clicking the **Launch** button on the extension.

### How to Remove an Extension

1. To remove an extension, head to the **Extensions tab**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/10.installed.png"
  width="100%"
  caption="Installed Extension"
/>

2. Click the **Remove** button at the extension you want to remove. You will be asked if you want to remove that extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/11.remove-extension.png"
  width="100%"
  caption=" Removing an Extension"
/>

3. Click **Remove**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/12.removed.png"
  width="100%"
  caption="Removing extension"
/>

Wait for the process to finish.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/13.removed-extension.png"
  width="100%"
  caption="Extension is removed"
/>

## Extensions

### Breathing Light

The breathing light LED is located on the top cover of the WisGate Edge Lite 2 gateways and helps to easily determine the gateway’s status visually. The breathing light extension allows you to enable or disable the breathing light on the gateway’s top cover. The default state of the LED is as in its Normal state - a slowly blinking blue light.

::: tip 📝 NOTE
Breathing Light extension is available only for the WisGate Edge Lite 2 version 2 gateways.
:::

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-breathing-light-1.0.0_b6.ipk"
  label="Download Breathing Light Extension"
  size="1.5rem"
  _blank
/>

#### Working Modes

By using the breathing light extension you can personalize the LED light’s working modes, frequency, and color. There are two working modes. The first one is All. If you choose it, the LED light will be active when your gateway is working properly. The second work mode is Warning only – the LED light signifies if there is some kind of malfunction.

If you choose Warning only mode, the LED light will only work in case of abnormal activities. For instance, in case of a lost Internet connection. In Warning only mode, you can modify the light color, but not its frequency.

#### Configuring the Extension

If you choose the All working mode, you can change the Normal light color, that is the light you see when the gateway is working properly. The blinking frequency can be changed as well – you can choose from Slow, Fast, and Steady. It’s possible to configure the color of the Warning light in All working mode as well. Note that the colors for the Normal and the Warning Light cannot be the same.

1. Start by Installing and **Launching** the extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/14.light-extension.png"
  width="100%"
  caption="Launch the Breathing Light Extension"
/>

2. Click **Launch** in the **Breathing light**, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/15.light-config.png"
  width="100%"
  caption="Breathing Light Configuration Page"
/>

3. On the configuration page, you can configure different settings about the LED light color and the speed of blinking.
- **Interface**

  * **Enable Breathing Light** - enables/disables the breathing light extension
  * **Mode** -  sets the mode of the extension.
    * **All** - **Normal light** will glow
    * **Warning only** - only **Warning light** will glow. This disables the **Normal light** settings.

- **Normal light** – the settings for the normal light.
  * **Color**- the color of the light (red, green, blue)
  * **Frequency** – blink frequency of the led (slow, fast or steady)

::: tip 📝 NOTE
The **Normal light** settings are disabled if **Warning only** mode is selected.
:::

- **Warning Light** – the color of the warning light.


4. To save the changes, click **Save changes.**

You can check the status of the LED on the gateway itself.

### Custom Logo


The Custom Logo extension allows you to upload your logo in the Web UI. This extension is universal and it works for all gateways, supporting WisGateOS 2. The Custom Logo extension is created with the thought of small or bigger enterprises that want their logo to be recognized and used in their everyday work.

Being able to rebrand your Web UI is particularly useful and even required when it comes to companies that need to promote and visualize their brand or product. This is where RAKWireless’ white label feature comes in handy for the clients.

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-custom-logo-1.0.1_b18.ipk"
  label="Download Custom Logo Extension"
  size="1.5rem"
  _blank
/>

#### Size and Format Requirements

::: tip 📝 NOTE
According to the requirements, the logo picture you upload should be in SVG format and up to 300kb.
:::

And of course, you can preview the Web UI page before finally switching RAKWireless’ logo with the logo of your brand.

You can check the guide on how to download the extension above.

#### Configuring the Extension

1. Start by Installing and **Launching** the extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/16.custom-logo.png"
  width="100%"
  caption="Custom Logo Extension"
/>

2. On the **Extensions** tab, click **Launch** in the **Custom logo** area, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/17.config-page.png"
  width="100%"
  caption="Custom Logo Configuration Page"
/>

3. On the configuration page, you can set a custom logo on the login page and on the sidebar menu.
   - **Interface** – enables/disables custom logo extension.
   - **Large logo** – this logo will be used on the login page and on the expanded sidebar menu. To upload a logo you can either drop the image in the area or click **Choose file** and browse for the image.
   - **Small logo** – this logo will be used for mobile view and on the collapsed sidebar menu. To upload a logo you can either drop the image in the area or click **Choose file** and browse for the image.
   - **Preview** – after choosing the desired images, you can click preview and see how the logo will look on the login page, expanded and collapsed sidebar in desktop and mobile versions.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/19.logo-preview.png"
  width="100%"
  caption="Logo Preview for Desktop Users"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/20.mobile-users.png"
  width="100%"
  caption="Logo Preview for Mobile Users"
/>

1. To apply the selected logos, click **Save changes**. The page will reload and apply the logos.



### Country Settings/LBT

LBT (Listen Before Talk) means that, before transmitting, the gateway checks the availability of the channel. This is necessary because LoRaWAN is a multi-channel protocol and uses ISM Band. Anyone can use the band - a collision occurs if two or more end devices send signals simultaneously.

The gateway checks for empty channels and uses one of them to send downlink data. If a channel is occupied, the gateway performs a random back off. In case all of the channels are occupied, the gateway waits for a free channel and tries to send the downlink data again.

LBT is usually governed by regulations per country. In WisGateOS 2.1, there is a country table which includes proper configurations for all countries so you can set the country code in WisGateOS 2.1.

:::tip 📝 NOTE

AS923 end-devices operating in Japan shall perform Listen Before Talk (LBT), based on ARIB STD-T108 regulations. The ARIB STD-T108 regulation is available for free and should be consulted as needed.
:::


You can switch the frequency plan in the following regions:

* AS923, KR920
* EU868, RU864, IN865
* CN470

The frequency plan will be limited to a particular region. Tx power will be limited to under the maximum.


* Downlink Tx Power
* Beacon Tx Power

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-country-settings-1.0.0_b28.ipk"
  label="Download Country Settings Extension"
  size="1.5rem"
  _blank
/>


#### Installing the Extension

To install the extensions, follow the steps in the [guide](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension).

#### Configuring the Country Settings/LBT Extension


1. In the left navigation bar, click **Extensions**, and you can see the installed **WireGuard** extension.

2. Click the **Launch** button.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/1.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>


3. Select your country by clicking the **Select your country** button.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/2.country-selection.png"
  width="100%"
  caption="Country selection"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/3.country-list.png"
  width="100%"
  caption="Find your country in the list"
/>


4. In the new window, find your country and select it. Confirm that you have chosen the country where the gateway is located, by clicking on the tick box below the country.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/4.confirm-country.png"
  width="100%"
  caption="Confirm your country"
/>


5. When you have selected your country, click **Confirm** to set the LBT for your country. Enable the LBT by clicking on the **Enable Listen Before Talk** switch, then click **Save Changes**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/5.enable-lbt.png"
  width="100%"
  caption="Enable LBT"
/>

6. Now, your gateway has its LBT enabled.



### Open/Close Port

This extension can add or delete packet traffic management rules on the gateway through the Open/Close port extension, allowing the host IP of any (or specific) network segment to communicate with the gateway through the specified port.

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-open-close-port-0.0.1_b11.ipk"
  label="Download Open/Close Port Extension"
  size="1.5rem"
  _blank
/>

#### Installing the Extension

To install the extension, follow the steps in the [guide](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension).

#### Configuring the Open/Close Port Extension

1. In the left navigation bar, click **Extensions**, and you can see the installed **Open/Close port** extension.

2. Click the **Launch** button.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/1.extension-tab.png"
  width="100%"
  caption="Extensions tab"
/>



3. In the **Traffic rules** tab, you can see the default traffic rules of the **Open/Close port** extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/2.open-close-extension.png"
  width="100%"
  caption="Open/Close port extension"
/>


* **Service name** – a readable name for the service.
* **Protocol** – the protocol used.
* **Family** – the protocol version used for the traffic.
* **From** – external source.
* **To** – internal source.

For example, the **Allow-http** service indicates that any host in WAN can communicate with the gateway through port 80 using the TCP protocol type.

4. To add a new rule, click the **Add new rule** button in the upper right corner of the extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/3.new-rule.png"
  width="100%"
  caption="Adding new rule"
/>



5. Fill in the following information:

* **Service name** – give a readable name for the rule.
* **Protocol** – choose the protocol used for the rule:
    * TCP
    * UDP
    * TCP + UDP
* **Sources**
    * Allow any host – allows any host to have access to the rule.
    * Source IP address – you can set up 3 host IPs.
* **Destination Port** – the destination port of the routing.

6. After filling in the required information, click **Add new rule**. Then you can view the rule created in the list of **Traffic rules** interface.


### Solar Battery


The Solar battery extension is used to display the status of the solar battery used by the gateway, including the solar battery's performance, battery health status, cycle period, battery power, charging and discharging mode, and other information. The extension is compatible only with **RAK7289 WisGate Edge Pro gateways**. You can learn the status of solar batteries used in real time through the UI interface.

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-solar-battery-1.0.0_b19.ipk"
  label="Download Solar Battery Extension"
  size="1.5rem"
  _blank
/>

#### Installation

To install the extension, follow the steps in the [guide](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension).

#### Configuring the Solar Battery Extension

1. In the left navigation bar, click **Extensions**, and you can see the installed **Solar battery** extension components.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/solar-battery/1.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>


3. Under the **Details tab**, click **Monitor solar battery** and switch in the **Interface** parameter to enable the Monitor Solar Battery extension.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/solar-battery/2.solar-battery-page.png"
  width="100%"
  caption="Solar battery page"
/>


* **Solar battery performance** – shows the performance of the battery in real-time:
    * **Temperature** – the temperature of the battery. This parameter is used to prevent the battery from overheating or freezing.
    * **Voltage** – the voltage of the battery.
    * **State of charg**e – the battery level.
    * **Current** – the current of the battery whether it is charging or discharging.

* **About solar battery** - contains additional information about the battery:
    * **State of Health** – this value represents the health of the battery.
    * **Cycle times** – the cycles of charge/recharge
    * **Remaining Capacity** – the remaining capacity of the connected battery.
    * **Full-charge capacity** – the capacity of the connected battery.
    * **Battery working mode** – the status of the battery if it is charging or discharging.

* **Solar battery active events** - notifies about issues with the solar battery:
    * **Fault** – The system identifies a possibly damaged solar battery and alerts on replacing it immediately.
    * **Protect** - The system identifies an issue that may cause significant damage to the solar battery, so it switches off the solar battery power as a preventive measure. Once operating conditions become favorable, the solar battery will resume working automatically.


### Wireguard


WireGuard is a simple but fast VPN. It aims to be faster, simpler, and leaner than the IPsec protocol. It intends to be more performant than the well-known RAKwireless - OpenVPN. Before, it was not possible to use the WireGuard protocol on the RAKwireless gateways, but that is not the case now.

The new WisGateOS V2 now offers Extension features, where you can install and set up the WireGuard extension. In this tutorial, you will learn how to set the WireGuard client on the gateway.

This guide assumes that you have some knowledge in setting up a WireGuard server and have a WireGuard server set up. <!--If you are not familiar with the WireGuard server, you can check this link <mark><link></mark>  to learn how to set up a WireGuard server.-->

:::tip 📝 NOTE
WireGuard extension can only be installed on WisGate Edge V2 gateways, with WisGateOS 2 only.
:::


<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-wireguard-1.0.1_b46.ipk"
  label="Download WireGuard Extension"
  size="1.5rem"
  _blank
/>

#### Installing the Extension

To install the extension, follow the steps in the [guide](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension).

#### Configuring the WireGuard Extension

1. In the left navigation bar, click **Extensions** and you can see the installed **WireGuard** extension.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/1.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

3. In the **Configuration** tab, click the **Enable WireGuard** switch to enable the WireGuard extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/2.enable-wireguard.png"
  width="100%"
  caption="Enabling WireGuard"
/>

4. Fill in the following information:

* **Interface** - the settings for the WireGuard client.
    * **Address with netmask** – the address that the WireGuard client will use. IP of the client must be in the same range (e. g. 10.0.8.0 to 10.0.8.255) defined by the server.
    * **Public Key** – the public key of the WireGuard client.
    * **Private Key** – the private key of the WireGuard client.

:::tip 📝 NOTE
Do not share your Private key with anybody.
:::

* **Server** – the settings for the WireGuard server.
    * **Endpoint Host** – the IP of the machine/cloud where the WireGuard server is set.
    * **Endpoint Port** – the port used for the traffic.
    * **Persistent Keepalive (ms)** – the time that a keepalive packet is sent to keep the connection.
    * **Public Key** – the public key of the WireGuard server.
    * **Enable Preshared Key** – this enables the Preshared key field. The preshared key is used as part of the Noise protocol when establishing the encrypted connection between the two peers.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/3.preshared-key.png"
  width="60%"
  caption="Enable preshared key"
/>

* **Route All Traffic** - allows traffic from all IPs.
    * **Allowed IPs** – you can set current IPs that will have the right to connect to the gateway via the WireGuard IP. Only available when Route All Traffic is disabled.

5. When everything is set, click **Save changes** to save the settings.

:::tip 📝 NOTE
Remember to add the WireGuard Client credentials to the WireGuard server configuration. To see how to do that, check How to setup a WireGuard server guide. <mark><link></mark>
:::

6. After the connection is established, check the status of the WireGuard in the Status tab.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/4.wireguard-status.png"
  width="60%"
  caption="WireGuard status"
/>

### OpenVPN

OpenVPN is a virtual private network (VPN). A VPN is created where a server is deployed that both the Gateway and any number of customer devices (PC, Phone, etc.) can connect to via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE). For the LTE backhaul, make sure that the gateway has a static public IP.

Thus, by connecting to the server via a remote client, the user can remotely manage the gateway from any point, at any time. As mentioned above, an OpenVPN server is required. This guide shows how to set up a server in the AWS cloud.

:::tip 📝 NOTE:
The OpenVPN extension can only be installed on WisGate Edge V2 gateways, operating with WisGateOS 2.
:::

<rk-btn
  src="https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-openvpn-1.0.0_b14.ipk"
  label="Download OpenVPN Extension"
  size="1.5rem"
  _blank
/>

#### Installing the Extension

To install the extension, follow the steps in the [How to Add an Extension](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension) guide.

#### Configuring the OpenVPN Extension

Make sure you have local network access to your gateway and connect to it to access the Web UI.

1. Head to **Extensions** → **OpenVPN Client** → **Launch button**.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/1-start-openvpn.png"
  width="100%"
  caption="Start OpenVPN"
/>

2. On the next window, click either **Add tunnel button** or **add one now** link to add an OpenVPN tunnel.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/2-add-openvpn-tunnel.png"
  width="100%"
  caption="Add OpenVPN tunnel"
/>

3. Now click **choose file** link and browse for the `.OVPN` file or drag and drop the `.OVPN` file you have created in the [WisGate Edge V2 Gateways Remote Management OpenVPN](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Edge-V2-Gateways-Remote-Management-OpenVPN/) guide.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/3-add-.ovpn-file-to-the-gateway.png"
  width="100%"
  caption="Add .OVPN file to the gateway"
/>

4. Once the file is added, click **Add tunnel** to add the OpenVPN tunnel.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/4-add-openvpn-tunnel.png"
  width="100%"
  caption="Add OpenVPN tunnel"
/>

5. A success message will appear after the tunnel is added successfully.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/5-successfully-added-tunnel.png"
  width="100%"
  caption="Successfully added tunnel"
/>

6. Click **Configure** button of the VPN tunnel. On the next window, click the **Enable Connection** switch to enable the OpenVPN tunnel and click **Save changes.**

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/6-start-the-openvpn-tunnel.png"
  width="100%"
  caption="Start the OpenVPN tunnel"
/>

7. From the **Logs** tab, you can check the OpenVPN status.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/7-openvpn-tunnel-status.png"
  width="100%"
  caption="OpenVPN tunnel status"
/>

8. You can see the assigned IP in the OpenVPN overview page.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/8-openvpn-assigned-ip.png"
  width="100%"
  caption="OpenVPN assigned IP"
/>
