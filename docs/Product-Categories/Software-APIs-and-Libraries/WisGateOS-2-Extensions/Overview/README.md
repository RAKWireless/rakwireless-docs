---
rak_img: /assets/images/software-apis-and-library/wisgateos2.png
rak_desc: WisGateOS2 features an extension functionality, which provides additional features and functions that can be added or removed, based on the user's needs. Later this year RAKwireless will provide the option for our users to build their own extensions.
rak_grp: [software-apis-and-libraries, wisgateos]
prev: ../../
next:  false
tags:
    - wisgate
    - WisGateOS2
    - WisGateOS2 Extensions
---

# WisGateOS2 Extensions

:::warning ⚠️ IMPORTANT
WisGateOS2 2.2 comes with significant updates that affect all extensions, downgrade flow, and others. Read the following critical points carefully:

- **Downgrading Restrictions**: Once you upgrade to WisGateOS2 2.2.x, you will not be able to revert to version 2.1.x using the standard downgrade (WebUI). Make sure to back up and secure all critical data before proceeding with the upgrade. Only through a recovery procedure will a downgrade be possible. The steps for the recovery procedure can be found here: <a href="https://docs.rakwireless.com/Knowledge-Hub/Learn/OpenWRT-Recovery-Procedure/" target="_blank">OpenWrt Recovery Procedure</a>.
- **Extension Signature Requirement**: All extensions for WisGateOS2 2.2.x will now require a signature for increased security and compatibility. Extensions that lack this signature (such as those for WisGateOS2 2.0.x/2.1.x) will not be installable on 2.2.x. This ensures that you are running the new firmware with verified and trusted extensions. On WisGateOS2 2.2.x, the Extension Gallery will automatically update installed Extensions. Some extensions, such as WireGuard, require manual installation after upgrading to WisGateOS2 2.2.x.
- **Internet Connection**: Because the new firmware and Extension gallery require a signature check, an Internet connection is required during the update.
- **Dual Firmware**: Some customers may still be using firmware version 2.1.x. Both versions will be supported, but it is critical to use the correct and corresponding extensions for each version to avoid compatibility issues. We strongly recommend upgrading to the new WisGateOS2 2.2.x version to be able to use the latest features, security, and services.
:::

The following table lists the supported WisGate Edge Gateway models of every WisGateOS:

|              WisGateOS1 1.x              |                 WisGateOS2 2.x                  |
| :--------------------------------------: | :---------------------------------------------: |
|  WisGate Edge Lite (RAK7258 / RAK7258C)  | WisGate Edge Lite 2 V2 (RAK7268V2 / RAK7268CV2) |
| WisGate Edge Lite 2 (RAK7268 / RAK7268C) |  WisGate Edge Pro V2 (RAK7289V2 / RAK7289CV2)   |
|  WisGate Edge Pro (RAK7289 / RAK7289C)   | WisGate Edge Prime V2 (RAK7240V2 / RAK7240CV2)  |
| WisGate Edge Prime (RAK7240 / RAK7240C)  |     WisGate Edge Ultra (RAK7285 / RAK7285C)     |
|                                          |           WisGate Soho Pro (RAK7267)            |

::: tip 📝 NOTE
The hardware in V1 and V2 Gateways are different. WisGateOS2 can be used only with V2 Gateways.
:::


| Feature                      | WisGateOS1 1.x | WisGateOS2 2.x |
|------------------------------|:--------------:|:--------------:|
| UDP PF                       |       ✔        |       ✔        |
| Basics Station               |       ✔        |       ✔        |
| Built-in LNS                 |       ✔        |       ✔        |
| MQTT integrations            |       ✔        |       ✔        |
| HTTP integrations            |       ✔        |       ✔        |
| MultiWAN                     |       ✔        |       ✔        |
| WisDM integration            |       ✔        |       ✔        |
| Latest OpenWrt security      |       X        |       ✔        |
| Secure activation from WisDM |       X        |       ✔        |
| OpenSSL1.1                   |       X        |       ✔        |
| OpenVPN                      |       X        |       ✔        |
| WireGuard                    |       X        |       ✔        |
| Extensions                   |       X        |       ✔        |
| LBT                          |       X        |       ✔        |

::: tip 📝 NOTE
**LBT** is available for certain gateway models since they are related to a specific hardware functionality.
:::

## Overview

WisGateOS2 features an extension functionality, which provides additional features and functions that can be added, removed, or updated based on your needs. Later this year, RAKwireless will provide the option for our users to build their own extensions.

**Supported Extensions**

| Extensions                | Descriptions                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Remarks                                                                                                |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------|
| Breathing Light           | By using the breathing light extension you can personalize the LED light’s working modes, frequency, and color.                                                                                                                                                                                                                                                                                                                                                                                       |                                                                                                        |
| Custom Logo               | The Custom Logo extension allows you to upload your logo in the Web UI. This extension is universal and it works for all gateways, supporting WisGateOS2.                                                                                                                                                                                                                                                                                                                                             |                                                                                                        |
| Country Settings/LBT      | LBT (Listen Before Talk) means that, before transmitting, the gateway checks the availability of the channel. This is necessary because LoRaWAN is a multi-channel protocol and uses ISM Band. Anyone can use the band - a collision occurs if two or more end devices send signals simultaneously. LBT is usually governed by regulations per country. In WisGateOS2, there is a country table which includes proper configurations for all countries so you can set the country code in WisGateOS2. |                                                                                                        |
| Open/Close Port           | This extension can add or delete packet traffic management rules on the gateway through the Open/Close port extension, allowing the host IP of any (or specific) network segment to communicate with the gateway through the specified port.                                                                                                                                                                                                                                                          |                                                                                                        |
| Solar Battery             | The Solar battery extension is used to display the status of the solar battery used by the gateway. The status includes the solar battery's performance, battery health status, cycle period, battery power, charging and discharging mode, and other information.                                                                                                                                                                                                                                    | The extension is compatible with **RAK7289 WisGate Edge Pro and RAK7285 WisGate Edge Ultra Gateways**. |
| Wireguard                 | WireGuard is a simple but fast VPN. It aims to be faster, simpler, and leaner than the IPsec protocol. It intends to be more performant than the well-known RAKwireless - Open VPN. Before, it was not possible to use the WireGuard protocol on the RAKwireless gateways, but that is not the case now.                                                                                                                                                                                              |                                                                                                        |
| Open VPN                  | Open VPN is a virtual private network (VPN). A VPN is created where a server is deployed that both the Gateway and any number of customer devices (PC, Phone, etc.) can connect to via a public IP address. This can be implemented using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE). For the LTE backhaul, make sure that the gateway has a static public IP.                                                                                              |                                                                                                        |
| Operation and Maintenance | This is an operation and maintenance tool that features scheduled device reboot and monitoring of the 4G network status. If the 4G network connection is lost, it automatically restarts the cellular module to recover the connection.                                                                                                                                                                                                                                                               | This extension is only compatible with **WisGateOS2 2.2.2 and later**.                                 |

The extensions are built to work with gateways running WisGateOS2. With new firmware update for gateway, WisGateOS2 2.2.x simplifies the installation of extensions, allowing you to select and install the required extensions in the **Extension gallery**. You can choose the installation method for extensions based on the firmware version running on the gateway. To check the gateway firmware version, head to the **Dashboard** >&nbsp;**Overview** webpage.

+ If your gateway is running firmware version WisGateOS2 2.0.x or WisGateOS2 2.1.x, follow carefully the procedure defined in <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#for-wisgateos2-2-0-x-2-1-x" target="_blank">For WisGateOS2 2.0.x/2.1.x</a>.
+ If your gateway is running firmware version WisGateOS2 2.2.x or later, follow carefully the procedure defined in <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#for-wisgateos2-2-2-x-or-later" target="_blank">For WisGateOS2 2.2.x or Later</a>.

## For WisGateOS2 2.0.x/2.1.x

Before installing the extensions, you need to obtain the extension files in `ipk` format. Gateways running WisGateOS2 2.0.x/2.1.x support the extensions shown in the table below.

| **Extension Name**   |                                                  **Extension Files**                                                   |
|----------------------|:----------------------------------------------------------------------------------------------------------------------:|
| Breathing Light      |  [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-breathing-light-1.0.0_b6.ipk)  |
| Custom Logo          |   [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-custom-logo-1.0.1_b18.ipk)    |
| Country Settings/LBT | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-country-settings-1.0.0_b28.ipk) |
| Open/Close Port      | [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-open-close-port-0.0.1_b11.ipk)  |
| Solar Battery        |  [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-solar-battery-1.0.0_b19.ipk)   |
| Wireguard            |    [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-wireguard-1.0.1_b46.ipk)     |
| Open VPN             |     [Download](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-openvpn-1.0.0_b14.ipk)      |

### How to Add an Extension

1. To install an extension, start with accessing the gateway. In accessing the gateway, check the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#access-the-wisgateos-2-web-ui" target="_blank">Access the WisGateOS 2 Web UI</a> user manual.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/1.login-page.png"
  width="100%"
  caption="Login page"
/>

2. After a successful login, head to the **Extensions tab** ( <img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/2.png"> ).

::: tip 📝 NOTE
- You can click the WisGate logo ( <img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/3.png"/> ) in the upper left corner to expand the menu on the left and see the full names of the tabs.
- By default, no extensions are installed.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/4.extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

3. To install one, you can click either on **Add new extension** button or the **install one now link**. An **Add new extension** window will pop up.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/5.new-extensions.png"
  width="100%"
  caption="Add New Extension"
/>

4. Now, you can either drag and drop the extension file in the **Drop your Extension file here or choose file** form or click the **choose file link** in the form and browse for the extension file.

::: tip 📝 NOTE

The extension files are in **IPK** format and are created specifically for the WisGateOS2 and the WisGate Edge hardware platform. A general IPK file for OpenWrt cannot be installed.

:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/6.choose-extensions.png"
  width="100%"
  caption="Choosing an Extension"
/>

5. After you choose the extension file, click **Add extension** to install it. It takes some time for the extension to install.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/7.add-extensions.png"
  width="100%"
  caption="Adding an Extension"
/>

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

### How to Use Extensions

- <a href="#breathing-light" target="_blank">Breathing Light</a>
- <a href="#custom-logo" target="_blank">Custom Logo</a>
- <a href="#country-settings-lbt" target="_blank">Country Settings/LBT</a>
- <a href="#open-close-port" target="_blank">Open/Close Port</a>
- <a href="#solar-battery" target="_blank">Solar Battery</a>
- <a href="#wireguard" target="_blank">Wireguard</a>
- <a href="#openvpn" target="_blank">OpenVPN</a>

#### Breathing Light

The breathing light LED is located on the top cover of the WisGate Edge Lite 2 Gateways and helps to easily determine the gateway’s status visually. The breathing light extension allows you to enable or disable the breathing light on the gateway’s top cover. The default state of the LED is as in its Normal state - a slowly blinking blue light.

::: tip 📝 NOTE
Breathing Light extension is available only for the WisGate Edge Lite 2 version 2 Gateways.
:::

##### Working Modes

By using the breathing light extension you can customize the LED light's operation modes, frequency, and color. There are two working modes: **All** and **Warning only**. Selecting **All** activates the LED light when your gateway is functioning correctly, while **Warning only** mode indicates any malfunctions.

If you choose Warning only mode, the LED light will only work in case of abnormal activities like Internet connection loss. In Warning only mode, you can modify the light's color, but not its frequency.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the Extension

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

#### Custom Logo

The Custom Logo extension allows you to upload your logo in the Web UI. This extension is universal and it works for all gateways, supporting WisGateOS2. The Custom Logo extension is created with the thought of small or bigger enterprises that want their logo to be recognized and used in their everyday work.

Being able to rebrand your Web UI is particularly useful and even required when it comes to companies that need to promote and visualize their brand or product. This is where RAKWireless’ white label feature comes in handy for the clients.

##### Size and Format Requirements

::: tip 📝 NOTE
According to the requirements, the logo picture you upload should be in SVG format and up to 300&nbsp;kb.
:::

And of course, you can preview the Web UI page before finally switching RAKWireless’ logo with the logo of your brand.

You can check the guide on how to download the extension above.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the Extension

1. Start by Installing and **Launching** the extension.

2. On the **Extensions** tab, click **Launch** in the **Custom logo** area, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/16.custom-logo.png"
  width="100%"
  caption="Custom Logo Extension"
/>

3. On the **Configuration** page, you can set a custom logo on the login page and on the sidebar menu.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/17.config-page.png"
  width="100%"
  caption="Custom Logo Configuration Page"
/>

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

4. To apply the selected logos, click **Save changes**. The page will reload and apply the logos.

#### Country Settings/LBT

LBT (Listen Before Talk) means that, before transmitting, the gateway checks the availability of the channel. This is necessary because LoRaWAN is a multi-channel protocol and uses ISM Band. Anyone can use the band - a collision occurs if two or more end devices send signals simultaneously.

The gateway checks for empty channels and uses one of them to send downlink data. If a channel is occupied, the gateway performs a random back off. In case all of the channels are occupied, the gateway waits for a free channel and tries to send the downlink data again.

LBT is usually governed by regulations per country. In WisGateOS2 2.x, there is a country table which includes proper configurations for all countries so you can set the country code in WisGateOS2 2.x.

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


##### Installing the Extension

To install the extensions, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the Country Settings/LBT Extension


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


4. In the new window, find your country and select it. Tick the checkbox below to confirm that you have chosen the country where the gateway is located. Then click **Confirm** to set the LBT for your country.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/4.confirm-country.png"
  width="100%"
  caption="Confirm your country"
/>


5. Enable the LBT by clicking on the **Enable Listen Before Talk** switch, then click **Save Changes**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/5.enable-lbt.png"
  width="100%"
  caption="Enable LBT"
/>

6. Now, your gateway has its LBT enabled.



#### Open/Close Port

This extension can add or delete packet traffic management rules on the gateway through the Open/Close port extension, allowing the host IP of any (or specific) network segment to communicate with the gateway through the specified port.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the Open/Close Port Extension

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


#### Solar Battery

The Solar battery extension is used to display the status of the solar battery used by the gateway. The status includes the solar battery's performance, battery health status, cycle period, battery power, charging and discharging mode, and other information. The extension is compatible only with **RAK7289 WisGate Edge Pro and RAK7285 WisGate Edge Ultra Gateways**. You can learn the status of solar batteries used in real time through the UI interface.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the Solar Battery Extension

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
    * **State of charge** – the battery level.
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


#### Wireguard

WireGuard is a simple but fast VPN. It aims to be faster, simpler, and leaner than the IPsec protocol. It intends to be more performant than the well-known RAKwireless - OpenVPN. Before, it was not possible to use the WireGuard protocol on the RAKwireless Gateways, but that is not the case now.

The new WisGateOS2 now offers Extension features, where you can install and set up the WireGuard extension. In this tutorial, you will learn how to set the WireGuard client on the gateway.

This guide assumes that you have some knowledge in setting up a WireGuard server and have a WireGuard server set up. <!--If you are not familiar with the WireGuard server, you can check this link <mark><link></mark>  to learn how to set up a WireGuard server.-->

:::tip 📝 NOTE
WireGuard extension can only be installed on WisGate Edge V2 Gateways, with WisGateOS2 only.
:::

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the WireGuard Extension

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
    * **Address with netmask** – the address that the WireGuard client will use. IP of the client must be in the same range (e.g. `10.0.8.0` to `10.0.8.255`) defined by the server.
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
Remember to add the WireGuard Client credentials to the WireGuard server configuration. To see how to do that, check How to setup a WireGuard server guide. <!-- <mark><link></mark> -->
:::

6. After the connection is established, check the status of the WireGuard in the Status tab.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/4.wireguard-status.png"
  width="60%"
  caption="WireGuard status"
/>

#### OpenVPN

OpenVPN is a virtual private network (VPN). A VPN is created where a server is deployed that both the Gateway and any number of customer devices (PC, Phone, etc.) can connect to via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE). For the LTE backhaul, make sure that the gateway has a static public IP.

Thus, by connecting to the server via a remote client,  can remotely manage the gateway from any point, at any time. As mentioned above, an OpenVPN server is required. This guide shows how to set up a server in the AWS cloud.

:::tip 📝 NOTE:
The OpenVPN extension can only be installed on WisGate Edge V2 Gateways, operating with WisGateOS2.
:::

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension" target="_blank">guide</a>.

##### Configuring the OpenVPN Extension

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

3. Now click **choose file** link and browse for the `.OVPN` file or drag and drop the `.OVPN` file you have created in the <a href="https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Edge-V2-Gateways-Remote-Management-OpenVPN/" target="_blank">WisGate Edge V2 Gateways Remote Management - OpenVPN</a> guide.

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

## For WisGateOS2 2.2.x or Later

If your gateway firmware is WisGateOS2 2.2.x or later. Installing extensions becomes easier, you can select and install extensions from the **Extension gallery**.

### How to Add an Extension

1. To install an extension, start with accessing the gateway. In accessing the gateway, check the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#access-the-wisgateos-2-web-ui" target="_blank">Access the WisGateOS 2 Web UI</a> user manual.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/1.login-page.png"
  width="100%"
  caption="Login page"
/>

2. After a successful login, head to the **Extensions tab** ( <img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/2.png"> ). 

::: tip 📝 NOTE
- You can click the WisGate logo ( <img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/3.png"/> ) in the upper left corner to expand the menu on the left and see the full names of the tabs.
- By default, no extensions are installed.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-login-page.png"
  width="100%"
  caption="Extensions tab"
/>

3. To install one, you can click **Extension gallery** tab. All extensions that support WisGateOS2 2.2.x or later will be displayed in the gallery.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-extensions-gallery.png"
  width="100%"
  caption="Extension gallery"
/>

4. Choose the extension to install, click **Install** button. For example, installing RAK OpenVPN Client. It takes some time for the extension to install.

::: tip 📝 NOTE

+ If the icon <img src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-unsupported-icon.png"/> is displayed on the Extension tab, it means that the gateway hardware does not support the installation of this extension.
+ If the icon 🟢 is displayed on the Extension tab, it means that the gateway hardware support the installation of this extension. You can choose to install this extension.
+ If the **Auto Update** button is enabled during installation, the gateway will automatically update the extension if the latest version is available.
  :::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-install-extension.png"
  width="100%"
  caption="Installing extension"
/>

5. After the installation process is complete, you can see the installed extensions in the **Installed** tab.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-extension-list.png"
  width="100%"
  caption="Installed extension list"
/>

### How to Remove an Extension

1. To remove an extension, head to the **Extensions tab** → **Installed**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-installed.png"
  width="100%"
  caption="Installed Extension"
/>

2. Click the **Remove** button at the extension you want to remove. You will be asked if you want to remove that extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-remove-extension.png"
  width="100%"
  caption=" Removing an Extension"
/>

3. Click **Remove**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-removed.png"
  width="100%"
  caption="Removing extension"
/>

Wait for the process to finish.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-removed-extension.png"
  width="100%"
  caption="Extension is removed"
/>

### How to Update an Extension

In order to use the latest features of the extension, we strongly recommend updating the extension to the latest version. 

1. To update an extension, head to the **Extensions** → **Installed** tab. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-update1.png"
  width="100%"
  caption="Installed extensions page"
/>

2. Click **Update**. If the extension has the latest version, the **Update** button will be highlighted, indicating that you can choose to update the extension. It takes some time for the extension to update.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-update2.png"
  width="100%"
  caption="Updating extension"
/>

3. After the update process is complete, you can see the extension is already in the latest version and there are no updates available.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-update3.png"
  width="100%"
  caption="Updated extension"
/>

For the convenience of timely updates, RAK Gateways provide an automatic update feature. It allows you to check the **Auto Update** button on the extension tab. When the **Auto Update** is enabled, gateways will automatically update the extension if the latest version is available.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-update4.png"
  width="100%"
  caption="Auto Update"
/>

### How to Use Extensions

- <a href="#rak-breathing-light" target="_blank">RAK Breathing Light</a>
- <a href="#rak-custom-logo" target="_blank">RAK Custom Logo</a>
- <a href="#rak-country-settings-lbt" target="_blank">RAK Country Settings/LBT</a>
- <a href="#rak-open-close-port" target="_blank">RAK Open/Close Port</a>
- <a href="#rak-solar-battery" target="_blank">RAK Solar Battery</a>
- <a href="#rak-wireguard" target="_blank">RAK Wireguard</a>
- <a href="#rak-openvpn-client" target="_blank">RAK OpenVPN Client</a>
- <a href="#operation-and-maintenance" target="_blank">Operation and Maintenance</a>

#### RAK Breathing Light

The breathing light LED is located on the top cover of the WisGate Edge Lite 2 Gateways. The LED determines the gateway’s status visually. The breathing light extension allows you to enable or disable the breathing light. The default state of the LED is its Normal state, indicated by a slow blinking blue light.

::: tip 📝 NOTE
Breathing Light extension is available only for the WisGate Edge Lite 2 version 2 Gateways.
:::

##### Working Modes

By using the breathing light extension you can customize the LED light's operation modes, frequency, and color. There are two working modes: **All** and **Warning only**. Selecting **All** activates the LED light when your gateway is functioning correctly, while **Warning only** mode indicates any malfunctions.

If you choose **Warning only** mode, the LED light will only work in case of abnormal activities like Internet connection loss. In **Warning only** mode, you can modify the light's color, but not its frequency.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the Extension

If you choose the **All** working mode, you can change the Normal light color, that is the light you see when the gateway is working properly. The blinking frequency can be changed as well – you can choose from Slow, Fast, and Steady. It’s possible to configure the color of the Warning light in **All** working mode as well. Note that the colors for the Normal and the Warning Light cannot be the same.

1. Start by Installing and **Launching** the extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-light-extension.png"
  width="100%"
  caption="Launch the Breathing Light Extension"
/>

2. Click **Launch** in the **Breathing light**, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-light-config.png"
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


4. To save the changes, click **Save changes**.

You can check the status of the LED on the gateway itself.

#### RAK Custom Logo

The Custom Logo extension allows you to upload your logo in the Web UI. This extension is universal and it works for all gateways, supporting WisGateOS2. The Custom Logo extension is created with the thought of small or bigger enterprises that want their logo to be recognized and used in their everyday work.

Being able to rebrand your Web UI is particularly useful and even required when it comes to companies that need to promote and visualize their brand or product. This is where RAKWireless’ white label feature comes in handy for the clients.

##### Size and Format Requirements

::: tip 📝 NOTE
According to the requirements, the logo picture you will upload should be in `.SVG` format and up to 300&nbsp;kb.
:::

And of course, you can preview the Web UI page before finally switching RAKWireless’ logo with the logo of your brand.

You can check the guide on how to download the extension above.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the Extension

1. Start by Installing and **Launching** the extension.

2. On the **Extensions** tab, click **Launch** in the **Custom logo** area, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-custom-logo.png"
  width="100%"
  caption="Custom Logo Extension"
/>

3. On the **Configuration** page, you can set a custom logo on the login page and on the sidebar menu.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22config-page.png"
  width="100%"
  caption="Custom Logo Configuration Page"
/>

   - **Interface** – enables/disables custom logo extension.
   - **Large logo** – this logo will be used on the login page and on the expanded sidebar menu. To upload a logo you can either drop the image in the area or click **Choose file** and browse for the image.
   - **Small logo** – this logo will be used for mobile view and on the collapsed sidebar menu. To upload a logo you can either drop the image in the area or click **Choose file** and browse for the image.
   - **Preview** – after choosing the desired images, you can click preview and see how the logo will look on the login page, expanded and collapsed sidebar in desktop and mobile versions.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-logo-preview.png"
  width="100%"
  caption="Logo Preview for Desktop Users"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/extensions/v22x-mobile-users.png"
  width="100%"
  caption="Logo Preview for Mobile Users"
/>

4. To apply the selected logos, click **Save changes**. The page will reload and apply the logos.

#### RAK Country Settings/LBT

LBT (Listen Before Talk) means that, before transmitting, the gateway checks the availability of the channel. This is necessary because LoRaWAN is a multi-channel protocol and uses ISM Band. Anyone can use the band - a collision occurs if two or more end devices send signals simultaneously.

The gateway checks for empty channels and uses one of them to send downlink data. If a channel is occupied, the gateway performs a random back off. In case all of the channels are occupied, the gateway waits for a free channel and tries to send the downlink data again.

LBT is usually governed by regulations per country. In WisGateOS2 2.x, there is a country table which includes proper configurations for all countries so you can set the country code in WisGateOS2 2.x.

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


##### Installing the Extension

To install the extensions, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the Country Settings/LBT Extension


1. In the left navigation bar, click **Extensions**, and you can see the installed **WireGuard** extension.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/v22x-extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>


3. Select your country by clicking the **Select your country** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/v22x-country-selection.png"
  width="100%"
  caption="Country selection"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/v22x-country-list.png"
  width="100%"
  caption="Find your country in the list"
/>


4. In the new window, find your country and select it. Tick the checkbox below to confirm that you have chosen the country where the gateway is located. Then click **Confirm** to set the LBT for your country.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/v22x-confirm-country.png"
  width="100%"
  caption="Confirm your country"
/>


5. Enable the LBT by clicking on the **Enable Listen Before Talk** switch, then click **Save Changes**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/lbt-configuration/v22x-enable-lbt.png"
  width="100%"
  caption="Enable LBT"
/>

6. Now, your gateway has its LBT enabled.



#### RAK Open/Close Port

This extension can add or delete packet traffic management rules on the gateway through the Open/Close port extension, allowing the host IP of any (or specific) network segment to communicate with the gateway through the specified port.

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the Open/Close Port Extension

1. In the left navigation bar, click **Extensions**, and you can see the installed **Open/Close port** extension.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/v22x-extension-tab.png"
  width="100%"
  caption="Extensions tab"
/>

3. In the **Traffic rules** tab, you can see the default traffic rules of the **Open/Close port** extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/v22x-open-close-extension.png"
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
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/open-close-port/v22x-new-rule.png"
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


#### RAK Solar Battery

The Solar battery extension is used to display the status of the solar battery used by the gateway. The status includes the solar battery's performance, battery health status, cycle period, battery power, charging and discharging mode, and other information. The extension is compatible only with **RAK7289 WisGate Edge Pro and RAK7285 WisGate Edge Ultra Gateways**. You can learn the status of solar batteries used in real time through the UI interface.

##### Installation

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the Solar Battery Extension

1. In the left navigation bar, click **Extensions**, and you can see the installed **Solar battery** extension components.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/solar-battery/v22x-extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>


3. Under the **Details tab**, click **Monitor solar battery** and switch in the **Interface** parameter to enable the Monitor Solar Battery extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/solar-battery/v22x-solar-battery-page.png"
  width="80%"
  caption="Solar battery page"
/>


* **Solar battery performance** – shows the performance of the battery in real-time:
  * **Temperature** – the temperature of the battery. This parameter is used to prevent the battery from overheating or freezing.
  * **Voltage** – the voltage of the battery.
  * **State of charge** – the battery level.
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


#### RAK Wireguard

WireGuard is a simple but fast VPN. It aims to be faster, simpler, and leaner than the IPsec protocol. It intends to be more performant than the well-known RAKwireless - OpenVPN. Before, it was not possible to use the WireGuard protocol on the RAKwireless Gateways, but that is not the case now.

The new WisGateOS2 now offers Extension features, where you can install and set up the WireGuard extension. In this tutorial, you will learn how to set the WireGuard client on the gateway.

This guide assumes that you have some knowledge in setting up a WireGuard server and have a WireGuard server set up. <!--If you are not familiar with the WireGuard server, you can check this link <mark><link></mark>  to learn how to set up a WireGuard server.-->

:::tip 📝 NOTE
WireGuard extension can only be installed on WisGate Edge V2 Gateways, with WisGateOS2 only.
:::

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the WireGuard Extension

1. In the left navigation bar, click **Extensions** and you can see the installed **WireGuard** extension.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/v22x-extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

3. In the **Configuration** tab, click the **Enable WireGuard** switch to enable the WireGuard extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/v22x-enable-wireguard.png"
  width="80%"
  caption="Enabling WireGuard"
/>

4. Fill in the following information:

* **Interface** - the settings for the WireGuard client.
  * **Address with netmask** – the address that the WireGuard client will use. IP of the client must be in the same range (e. g. `10.0.8.0` to `10.0.8.255`) defined by the server.
  * **Public Key** – the public key of the WireGuard client.
  * **Private Key** – the private key of the WireGuard client.
  * **DNS** - DNS server.

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
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/v22x-preshared-key.png"
  width="50%"
  caption="Enable preshared key"
/>

* **Route All Traffic** - allows traffic from all IPs.
  * **Allowed IPs** – you can set current IPs that will have the right to connect to the gateway via the WireGuard IP. Only available when Route All Traffic is disabled.

5. When everything is set, click **Save changes** to save the settings.

:::tip 📝 NOTE
Remember to add the WireGuard Client credentials to the WireGuard server configuration. To see how to do that, check How to setup a WireGuard server guide. <!-- <mark><link></mark> -->
:::

6. After the connection is established, check the status of the WireGuard in the Status tab.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/wireguard/v22x-wireguard-status.png"
  width="100%"
  caption="WireGuard status"
/>

#### RAK OpenVPN Client

OpenVPN is a virtual private network (VPN). A VPN is created where a server is deployed that both the Gateway and any number of customer devices (PC, Phone, etc.) can connect to via a public IP address. This is possible to implement using any of the backhaul connectivity options the Gateway supports (Ethernet, Wi-Fi, LTE). For the LTE backhaul, make sure that the gateway has a static public IP.

Thus, by connecting to the server via a remote client, the user can remotely manage the gateway from any point, at any time. As mentioned above, an OpenVPN server is required. This guide shows how to set up a server in the AWS cloud.

:::tip 📝 NOTE:
The OpenVPN extension can only be installed on WisGate Edge V2 Gateways, operating with WisGateOS2.
:::

##### Installing the Extension

To install the extension, follow the steps in the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2" target="_blank">guide</a>.

##### Configuring the OpenVPN Extension

Make sure you have local network access to your gateway and connect to it to access the Web UI.

1. Head to **Extensions** → **RAK OpenVPN Client** → **Launch button**.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-start-openvpn.png"
  width="100%"
  caption="Start OpenVPN"
/>

2. On the next window, click either **Add tunnel button** or **add one now** link to add an OpenVPN tunnel.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-add-openvpn-tunnel.png"
  width="100%"
  caption="Add OpenVPN tunnel"
/>

3. Now click **choose file** link and browse for the `.OVPN` file or drag and drop the `.OVPN` file you have created in the <a href="https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Edge-V2-Gateways-Remote-Management-OpenVPN/" target="_blank">WisGate Edge V2 Gateways Remote Management - OpenVPN</a> guide.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-add-.ovpn-file-to-the-gateway.png"
  width="100%"
  caption="Add .OVPN file to the gateway"
/>

4. Once the file is added, click **Add tunnel** to add the OpenVPN tunnel.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-add-openvpn-tunnel2.png"
  width="100%"
  caption="Add OpenVPN tunnel"
/>

5. A success message will appear after the tunnel is added successfully.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-successfully-added-tunnel.png"
  width="100%"
  caption="Successfully added tunnel"
/>

6. Click **Configure** button of the VPN tunnel. On the next window, click the **Enable Connection** switch to enable the OpenVPN tunnel and click **Save changes.**

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-start-the-openvpn-tunnel.png"
  width="100%"
  caption="Start the OpenVPN tunnel"
/>

7. From the **Logs** tab, you can check the OpenVPN status.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-openvpn-tunnel-status.png"
  width="100%"
  caption="OpenVPN tunnel status"
/>

8. You can see the assigned IP in the OpenVPN overview page.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/openvpn/v22x-openvpn-assigned-ip.png"
  width="100%"
  caption="OpenVPN assigned IP"
/>

#### Operation and Maintenance

The Operation and Maintenance extension is operation and maintenance tool that features scheduled device reboot and monitoring of the 4G network status. If the 4G network connection is lost, it automatically restarts the cellular module to recover the connection.

:::tip 📝 NOTE:
This extension is only compatible with **WisGateOS2 2.2.2 and later**.
:::

##### Installing the Extension

To install the extension, follow the steps in the [guide](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2-Extensions/Overview/#how-to-add-an-extension-2).

##### Configuring the Extension

1. In the left navigation bar, click **Extensions** and you can see the installed **Operation and Maintenance** extension.

2. Click the **Launch** button.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/operation-and-Maintenance/v22x-extensions-tab.png"
  width="100%"
  caption="Extensions tab"
/>

3. On the configuration page, you can set up cellular network monitoring and schedule reboot.

<rk-img
src="/assets/images/software-apis-and-library/wisgateos2-extensions/operation-and-Maintenance/v22x-configuration-page.png"
  width="100%"
  caption="Configuration page"
/>

+ **Cellular Network Monitoring**: Enabling this feature, the gateway will monitor cellular connection status every 2 minutes. If the 4G network connection is lost, it automatically restarts the cellular module to recover the connection. 
+ **Schedule Reboot**: Enabling this feature, the gateway will reboot periodically according to the settings.
+ **Gateway Current Time**: System time need to sync for schedule task to work properly. If you need to change the current time, head to **User Preferences** to set it.
+ **Reboot Time**: Set reboot time.
+ **Repeat Time**: Set reboot cycle.

4. When everything is set, click **Save changes** to save the settings.