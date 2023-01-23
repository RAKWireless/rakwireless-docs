---
sidebar: false
rak_img: /assets/images/knowledge-hub/learn/web-management-platform/1.webui.jpg
rak_desc: This document describes in detail the functionality of the Web Management UI and how to use it for configuration and management of the Gateway.
tags:
  - User-Manual
  - WisGate
  - OpenWRT
  - MQTT
  - LoRaWAN
  - TTN
header:
  title: WEB Management Platform
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/web-management-platform.jpg
posted: 29/02/2020 10:30 AM
---

# WEB Management Platform

* [Accessing the Web Management Platform](#accessing-the-web-management-platform)
* [Status Page](#status-page)
* [Network](#network)
* [Channel Plan](#channel-plan)
* [LoRa Network](#lora®-network)
* [Services](#services)
* [System](#system)

This document describes in detail the functionality of the Web Management UI and how to use it for configuration and management of the Gateway. The interface builds on top of OpenWRT and all gateway products of the RAK72xx line share it.

Also, it instructs on the configuration of the WAN interface, the LoRa Packet Forwarder, and Gateway MQTT Bridge and more. It explains how to do system-monitoring, the update of the firmware, and reset the device. Last but not least, it provides information on using the built-in LoRa Server.

This guide functions as a reference for several products with similar functionality, thus some sections do not apply to certain products. When the word “Gateway” is used it refers to the three devices when the functionality is the same. In case there is a specific feature or difference, the name of the specific device will be mentioned.

:::tip 📝 NOTE
This document assumes you have already gone through the Quick Start Guide, and you know how to power on, connect to the Gateway, and then connect it to your network.
:::

## Accessing the Web Management Platform

To get started, open the browser, enter the IP address of the gateway, and open the login page of the WEB Management Platform. Enter root as both the username and password and then click login. You can choose in the options provided in this section to access the platform.

### Wi-Fi AP Mode

By default, the Gateway works in Wi-Fi AP Mode, which means that you can find an SSID named "**RAK7249_XXXX**" on your PC's Wi-Fi Network List. "XXXX" is the last two bytes of the Gateway MAC address.

• To access the Web Management Platform, input the IP Address: **192.168.230.1** in your Web browser.

:::tip 📝 NOTE
No password is required to connect via Wi-Fi.
:::

Using your preferred web browser, input the aforementioned IP Address. You should see the same login page shown in Figure 1 below. Use the following credentials:

* **Username**: root
* **Password**: root

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/1.webui.jpg"
  width="100%"
  caption="Web User Interface Log-in"
/>

### WAN Port (DHCP IP) Mode
Connect the Ethernet cable to the port marked “**ETH**” on the gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your router. The router’s DHCP server should assign an IP Address to the Gateway. You can change the default settings below if you wish (details in the User Manual).

### WAN Port Direct Connection
Connect the Ethernet cable to the port marked “**ETH**” on the gateway and the other end to the PoE port of the PoE injector. Connect the LAN port of the PoE injector to your PC.

The default IP is **169.254.X.X**. The last two segments(X.X) are mapped from the last four bits of the MAC address of your gateway. For example, the last four bits of the MAC address are 0F:01, and the IP address is 169.254.15.1. Make sure to manually set the address of your PC to one in the same network, like for example 169.254.15.100. You can then access the Web Management Platform using the Gateway's IP Address: 169.254.X.X.

# Status Page

The Status Page is where statistics about the gateway behavior can be monitored in real-time.

## 1. Overview

Figure 2 below is the default page you will see every time you log into the gateway. It contains the following sub areas/windows that give an overview of some of the most important Gateway metrics.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/2.status-overview.jpg"
  width="100%"
  caption="Status Overview of the WEB Management Platform."
/>

The following are the parts of the Overview window:

- **Received**: Shows the total number of uplink LoRa messages received by the gateway.
- **Transmitted**: Shows the total number of downlink LoRa messages sent by the gateway.
- **Active Nodes**: Shows the number of active LoRaWAN Nodes within the LoRaWAN Gateway coverage. (**Those that have sent no data for more than 10 min are discarded from the count**.)
- **Busy Nodes**: Shows the number of busy nodes within the LoRaWAN gateway coverage (**Nodes with an average message spacing of fewer than 60 seconds**.)
- **Duty Cycle of the LoRa Channel**: The graph represents the [Duty Cycle](https://www.thethingsnetwork.org/docs/lorawan/duty-cycle.html) load by frequency channel (**Data is kept for the last 12 hours**). The minimum resolution along the time axis is 60 seconds. Each value is an average of over 60 seconds. The values are color code – green to red, low to high.
- **RSSI & SNR**: These graphs show how many of the total amount packets haw an RSSI/SNR value within a certain range. This is also shown in a pie chart to the side of the graphs.
- **Uplink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets overall spreading factors for the time sample.
- **Downlink Traffic**: The graph shows the packet per minute rate as a function of time. Above the image, one can see the color-coding of the different Spreading Factors, where the actual height of the values is a sum of all the packets overall spreading factors for the time sample. Additionally, you have sub-windows displaying the System, Memory, LoRa Network Server, Network (WAN). Cellular, and Wi-Fi information. Those have their separate sections and will be discussed in detail further down.
- **System**: Information for the Hostname and model of the Gateway can be found here. There is also the Local Time and Uptime of the Gateway. Most importantly, you can see the Firmware version here.
- **Memory**: There are bars in this section that shows how much the Total Available, Free, and Buffered Memory is.
- **LoRa Network Server**: You can see the statistics for your network server. A number of associated LoRa Nodes, Uplink, Downlink, Received Join, Rejected Join, those types of packets all have numerical values associated with them. Additionally, you can check the Uptime and whether you have the MQTT Integration running.
- **Network**: The WAN status with its Type and Addressing parameters, together with the time since it has been connected are displayed here.
- **Cellular**: The connection status of your cellular together with the corresponding Network ID and the parameters of your Sim (**ICCID, IMSI, Phone number**).
- **Wireless**: The status of the Wi-Fi is displayed here. There are connectivity status, signal strength, and IP addressing parameters for both the AP and Client interfaces.
- **Dynamic DNS**: You can oversee your Dynamic DNS configuration here, assuming you have one configured, otherwise there are example values.


## 2. LoRaWAN Packet Logger

This is where a log of the LoRa messages is shown in real-time. There are several options for filtering as well as the possibility to download the statistics in a file. Additionally, there is a summary (**Total, Uplink, and Downlink**), below the filter fields.

By clicking on a particular packet, you get an expanded window with the detailed metadata for it as well as some RF parameters. Additionally, there is a graph area below the packet list that displays the “**Air Time**” per node and also the load per frequency channel.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/3.packet-logger-view.jpg"
  width="100%"
  caption="LoRaWAN Packet Logger View of the WEB Management Platform."
/>

You can choose to filter the packets by one of the following:

- **Type**: Filter by message type. By default, all messages are displayed, where possible options are: Join Request/Accept, Unconfirmed Data Up/Down, and Confirmed Data Up/Down
- **DevAddr**: Filter messages based on node addresses.
- **Hide CRC_ERR packet**: When it is selected, no "CRC"  check error message will be displayed.

## 3. System Log

The complete system logs. It is useful mainly for debugging purposes. It reports both system information (especially useful when booting up the Gateway) and actual data from LoRa frames coming from end nodes. The button for pausing the auto-refresh of the log is in the top right.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/4.system-log.jpg"
  width="100%"
  caption="System Log"
/>

## 4. Firewall

This section shows only information about traffic on different ports, addresses, etc. It is organized in tables, however, there are no configuration options here, this is only for observation. There is a dedicated sub-section for the Firewall Settings in the Network section, where you can actually configure, rather only observe. The only actions you can perform here are to “Reset Counters” or “Restart Firewall” via the links on the top left.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/5.firewall.jpg"
  width="100%"
  caption="Firewall Status"
/>

# Network

This section contains all the settings that affect the connectivity of the Gateway to the backbone network (Internet, Cloud, etc.) In essence, these settings all affect the backhaul connectivity, over which the LoRa data is being relayed.

It contains the following sub-sections: **WAN Interface**, **Cellular Interface** (when the hardware is present), **Wi-Fi**, **Firewall**, **Diagnostics**, and **Ping Watchdog**.

## 1. WAN Interface

The user can check the Status (Uptime, IPv4 Address, Amount of transmitted and received packets and the MAC Address of the interface), or configure the protocol to be used for connecting to your provider’s network.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/6.wan-interface.jpg"
  width="100%"
  caption="WAN Interface Configuration"
/>

- The following options are available for the protocol: **Static Address**, **DHCP client**, **None**, or **PPPoE**. The default is the DHCP client, if you choose None the interface will be disabled.

- Flipping the DNS switch allows you to enter a custom DNS server address.

- Also, one can set the Gateway metrics (how high is this interface in the connectivity priority, very useful for failover) and the MTU size (1500 standard).

## 2. Cellular Network Configuration

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/7.cellular-interface.jpg"
  width="100%"
  caption="Cellular Interface Configuration"
/>

The same statistics as with the WAN Interface are available. It is here that you set the **APN**, **User**, and **Password** (in case you need to, some service providers do not require these as they are automatically acquired).

- Make sure to enter the SIM’s PIN code if there is one, in the “**PIN Code**” field as it is something most users forget.
- The gateway metric determines the priority of this interfaces, compared with the other connectivity options. The lower the value the higher the priority.
- It is recommended that this interface has the highest Gateway metric (lowest priority) in order to conserve your traffic, which can be limited or costly.

:::tip 📝 NOTE
There is also a field for the PIN Code in case your SIM card is locked.
:::

## 3. Wi-Fi

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/8.wifi-interfaces.jpg"
  width="100%"
  caption="Wi-Fi Interfaces"
/>

Enabling/Disabling the Wi-Fi is done from this page via the blue button at the top. Additionally, you can pick a radio channel or leave it on Auto configuration (default). The Wi-Fi always works in AP mode (so you can always access the Gateway via it), however, you can choose to enable/disable the Client Mode

- **Wireless Access Point**: By default, there is no encryption/password. One can access the Web UI via the IP address: **192.168.230.1** once connected to the AP. The SSID is "**RAK7240_XXXX**" by default, where the “**XXXX**” is filled with the last symbols from the interface’s MAC Address.

:::tip 📝 NOTE
If you swipe the **Hidden** slider, the SSID will not be advertised.
:::

- **Wireless Client**: By default, the client mode is disabled. If you want to use it you have to click the “**Enable**” button. Click the “**Scan**” button to choose your preferred wireless network. Choose the encryption method, fill in the password and press **Save & Apply**. This will result in your Wi-Fi becoming one of the Gateway’s backhaul interfaces.

## 4. Firewall

The Firewall settings that can be configured are too many for the scope of this document and will not be discussed in details. Still functionality is abundant and you can configure **Zones**, **Port Forwarding**, and **Traffic rule**s can be imposed. Additionally, you can create Custom Rules that are not covered by the Firewall framework by default.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/9.network-firewall.jpg"
  width="100%"
  caption="Firewall"
/>


## 5. Diagnostics

The connection diagnostic tools are in this section: **Ping**, **Traceroute**, **Nslookup**.

You can enter either an URL or an IP Address in the text box and execute the command with the button. Both IPv4 and IPv6 are supported (chosen via the drop-down menu). The results are conveniently displayed in a CLI box.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/10.diagnostics.jpg"
  width="100%"
  caption="Diagnostics"
/>


## 6. Ping Watchdog

Ping Watchdog monitors the quality of network links by constantly pinging the specified IP Address or Domain name on the specified uplink network interface. When network link failures are detected, scheduled measures are taken automatically. Those include: Interface restart, Interface priority reduction, Device restart, etc.

:::tip 📝 NOTE
Reducing the priority of an uplink interface only works when the LoRaWAN Gateway uses both Ethernet and Cellular as uplink methods at the same time.
:::

- WAN interface represents the Ethernet interface and WWAN represents the Cellular.

- For example, if Ping Watchdog is enabled for both uplink interfaces at the same time and the response to the degradation of the link quality is set as Increase Gateway Metric the two uplink interfaces work as backups for each other. In the event of significant degradation on one, the Gateway switches to the other.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/11.ping-watchdog.jpg"
  width="100%"
  caption="Ping Watchdog Interface Overview"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/12.ping-watchdog-2.jpg"
  width="100%"
  caption="Ping Watchdog Interface Overview"
/>

# Channel Plan

This is a very important section of the Web UI. Here you set the frequency of operation of the Gateway. It is these frequency channels that it will be monitoring and both receiving from and transmitting to LoRa nodes.

- For your convenience, there is a drop-down list at the top of the page where you can choose one of several pre-set Regions. This will populate the Multi-SF LoRa Channels with the mandatory channels (under the LoRa Alliance Regional Parameters).
- In case you want to use a custom set, you can enter a channel’s frequency (in MHz) in the text box and add it via the blue button. This applies to the Standard LoRa Channel and FSK Channel as well (normally you would have one per Concentrator.
- You can also “**Switch to Advanced Mode**”, where you have more granular control per concentrator and per radio. (up to 2 concentrators and 2 radios per concentrator for up to 4 total radios).

:::tip 📝 NOTE
If you have 2 Concentrator modules as the Outdoor Gateways allow the maximum number of channels will be double (16). These are all grouped together if you configure in Standard Mode and split in 8 per concentrator in Advanced Mode.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/13.channel-plan-standard.jpg"
  width="100%"
  caption="Channel Plan – Standard Mode"
/>


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/14.channel-plan-advanced.jpg"
  width="100%"
  caption="Channel Plan – Advanced Mode"
/>

# LoRa Network

All the LoRa Settings reside in this section. Its subsections change depending on what “**Mode**” you choose to work-in in the “**Network Settings**” subsection. As the three modes (**Network Server**, **Basic Station**, and **Packet Forwarder**) are very different, we will go through each one in detail.

:::tip 📝 NOTE
The one thing that is the same for all of the modes is the "**LoRaWAN Network Settings**" area at the top of the "**Network Settings**" sub-section. It is in this area where the Gateway EUI and the Mode drop-down menu reside.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/15.lora-network-settings.jpg"
  width="100%"
  caption="LoRaWAN Network Settings"
/>

**As there are additional menus that appear when one uses the “Network Server” Mode, it is the one that will be discussed in the greatest detail. The other two Modes only have the “Network Settings” sub-menu and relatively less configuration options.**

## 1. Network Settings

This page changes depending on which of the 3 options for the Mode you have chosen.


### Network Server

As this Mode provides a fully functioning LoRa Server instance, there is a complete set of features to configure.

* **Region**: It is only displayed, can’t be changed as this is done in the “Channel Plan” menu.
* **Enable ADR**: Adaptive Data Rate, turned on/off.
* **Minimum/Maximum Allowed data-rate**: Dr0 to DR7 can be selected in order to limit the ADR possible values range
* **ADR Margin** (dB): A value to keep in dB to make sure that the data rate is not overestimated resulting in a poor performance (error rate and range). Default value is 10.
* **Network ID**: A decimal number to distinguish between networks if you are deploying multiple ones
* **Rx 1 Delay** (sec): The delay of the first receive window in seconds.
* **Rx 1 DataRate Offset**: It determines the data rate of the downlink frames originating from the Gateway for the Rx1 window. By default, it is 0 – identical to the uplink.
* **Rx 2 Frequency** (Hz): The frequency of the second receive window in Hz.
* **Rx 2 Datarate**: The Data Rate of the frames to be sent in the second receive window.
* **Downlink Tx Power** (dBm): This is useful in case you want to opt for a larger antenna with more gain, however you want to stay within regulations. Values from -6 to 20 are permissible.
* **Disable Frame-counter Validate**: This will turn on/off Frame counter validation.
* **Device-status request interval** (sec): It shows how often should the end devices be polled for their status Log Level - choose one of for, useful for troubleshooting.
* **Statistic Period**: It shows how often the statistics will be gathered. Possible values are: 1 min, 10 min, 1h, 1 day.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/16.network-settings.jpg"
  width="100%"
  caption="Network Settings - Network Server"
/>

### Basic Station

This Mode allows one to utilize the Basic Station, which is Semtech’s latest packet-forwarder iteration. For more information on how Basic Station operates please refer to the [Basic Station official website](https://doc.sm.tc/station/).

There are 3 sub-sections listed below. Each of the above needs an URI and Port, together with the corresponding token/key/certificate of TLS authentication is used.

- Cups Boot Server
- XUPS Server
- LNS Server


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/17.basic-station.jpg"
  width="100%"
  caption="Network Settings - Basic Station"
/>

### Packet Forwarder

This Mode utilizes the **Semtech Legacy Packet-forwarder**. An important thing to mention is the fact that this mode has two Protocol options that change the core functionality. One can choose via the Protocol drop-down menu to use the Gateway either as a pure **Semtech Packet forwarder** or as an **MQTT bridge**.

**1. General Setup - Semtech UDP GWMP Protocol**

This is something that every Gateway supports, that has been there from the very beginning of the LPWAN days. Just a general means of forwarding your LoRa frame data over UDP to a LoRa Server instance. The most popular/well-known setup of this is to use it together with TTN (The Things Network), which was more or less what made LoRa popular back in 2016. This can naturally be pointed toward any LoRa Server, not necessarily TTN.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/18.semtech-protocol.jpg"
  width="100%"
  caption="Network Settings – Semtech UDP GWMP Protocol"
/>

Take note of the following parameters. Refere to Figure 18 above.

* **Gateway EUI**: The value in this field is necessary for registering your gateway with any LoRa Network Server.
* **Protocol**: As mentioned, this is either a Packet forwarder or an MQTT bridge. (The former is chosen for the purpose of going through the settings.)
* **Server Address**: The URL of the LoRa Server. (In the example: the EU TTN address)
* **Server Port Up/Down**: The ports of the LoRa Server that are going to be used for inbound and outbound traffic.
* **Push Timeout** (ms): Time delay for the server response after sending uplink data.
* **Statistic Interval** (s): How often statistics are pushed to the server.
* **Keepalive Interval** (s): This exists to make sure that periodically data is pushed via the Gateway to make sure the server is aware that the Gateway is online. (For example, the MQTT bridge will unsubscribe from the topics after certain period of inactivity.)
* **Automatic Data Recovery**: This is an important feature that allows LoRa frames to be stored on the SD card (provided there is one in the slot), if there is no connection to the LoRa Network Server. Upon restoring connectivity, these buffed messages will be forwarded, so no data will be lost. This is done in blocks of 8 (FIFO), until all are cleared from the buffer.
* **Auto-restart Threshold**: A number that defines how many times the Keepalive Interval can expire before the Packet forwarder restarts.
* **Is LoRaWAN Network**: If you choose “NO” here you will enable frames that are not compliant with the LoRaWAN specification to be forwarded (in case you have your proprietary LoRa Server solution). By default, “YES” is selected and non LoRaWAN packets are dropped.
* **Log Level**: You can choose from 5 different log levels (Error/Warning/Notice/Info/Debug). This will affect System Log. From Errors only to full system log for debugging.

**2. General Setup - LoRa Gateway MQTT Bridge**

The Gateway is capable of working with an external LoRa Server, where the MQTT Broker is pointed toward an external Server or the Built-in Server. For this purpose, there are several tabs with their corresponding parameters to be filled.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/19.lora-mqtt-bridge.jpg"
  width="100%"
  caption="LoRa MQTT Bridge - General Setup"
/>

**General Setup**: The is where you configure the behavior of the MQTT Bridge.

1. In **LoRa Network Server Type**, you have four (4) options:
- **Built-in LoRa Network Server** – pointing to the Built-in Server
- **ChirpStack 2.x** – for MQTT 2.x Broker (JSON) endpoints
- **ChirpStack 3.x** – for MQTT 3.x Broker (PROTOBUF) endpoints
- **ChirpStack 3.x** – for MQTT 3x 3.x Broker (JSON-V3) endpoint

2. **MQTT Broker Address**: The IP Address of the machine where the MQTT Broker is hosted (127.0.0.1 for the Built-in one).
3. **MQTT Broker Port**: The corresponding port (1883 default).
4. **MQTT Protocol Version**: You can choose between V3.1 and V3.1.1.
5. **Client ID**: An ID that is used to associate with the topic. If left empty, a random one will be generated.
6. **Clean Session**: With this button enabled, the broker will not store any subscription information or undelivered messages.
7. **Will Retain**: With this button enabled, the last message published will be retained.
8. **QoS**: You can set the desired Quality of Service level.
9. **Keepalive**: The keep alive interval in seconds (10 default).
10. **Enable Authentication**: The switch turns on Encryption of the transmitted data. You need to configure the Certificates used to encrypt the data in order for secure authentication to be performed.
11. **Username**: The username, if one is use, leave blank if there isn’t one.
12. **Password**: The password, if one is use, leave blank if there isn’t one. Can be randomly generated with the green arrows to the side of the field.
13. **SSL/TLS Mode**: By default, this is Disabled. You can choose one of 3 other modes: **CA signed server certificate**, **Self-signed server certificate**, **Self-signed server**, & **Client certificate**.
14. **TLS Version**: The version of the TLS protocol to be used. Options are **TLSv1**, **TLSv1.1**, **TLSv1.2**.
15. **CA Certificate, Client Certificate, Client Key, Client Key Passphrase**: You can have one or all of these to set up depending on the SSL/TLS Mode chosen. These are to be generated via the appropriate algorithm and distributed between the MQTT Broker and the LoRa Server Please refer to the MQTT Bridge with TLS Encryption Configuration Manual for details on how to edit the settings in order for the Gateway to work as an MQTT Bridge with TLS Encryption.
16. **Log Level**: The granularity of the log information is chosen from the following levels: **ERROR**, **INFO** (default), **DEBUG**, **TRACE**.

**MQTT Topic Template Setup**: MQTT Topic Template SetupThere are two types of templates, depending on which LoRa Network Server Type you choose.

- ChirpStack 2.x Topic Template

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/20.mqtt-setup1.jpg"
  width="100%"
  caption="LoRa MQTT Bridge – MQTT Topic Template Setup 1"
/>

- ChirpStack 3.x Topic Template, Built-in Server

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/21.mqtt-setup2.jpg"
  width="100%"
  caption="LoRa MQTT Bridge – MQTT Topic Template Setup 2"
/>


**3. Packet Filter**

By enabling this functionality, you can filter incoming traffic and only forward packets from the desired nodes in order to optimize bandwidth usage over backhaul.  You can filter by OUI or Network ID by whitelisting.

The Enable Auto Filter slider allows nodes to be automatically dropped in accordance with a set of parameters. One can set threshold values for **Discard Period (1800s), Join Period (1800s), Join Interval (6), Join Count 1 (5) and Join Count 2 (20)**.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/22.packet-filter.jpg"
  width="100%"
  caption="Packet Filter"
/>

**4. GPS Information**

In case, you want to enter the GPS parameters for the Gateway manually. Flipping the Fake GPS switch turns this functionality on/off.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/23.gps.jpg"
  width="100%"
  caption="GPS Information"
/>

## 2. Network Server Status

There is a dedicated page for the status of your Built-in Network Server. You get Data in both Table and Graph form.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/24.server-status.jpg"
  width="100%"
  caption="Network Server Status"
/>

**1. Tabular Data**

- **Uptime**: How long the Built-in Server has been working without interruption
- **Devices**: The total amount of end-devices that are currently authenticated with the server.
- **Gateways**: The total amount of gateways that re forwarding frames to the server.
- **Total Uplink**: The total uplink frames processed.
- **Total Downlink**: The total downlinks frames transmitted.
- **Data Downlink**: The total downlink frames that carry data (non-services).
- **Total OTAA Requests**: The total authentication requests submitted by end-nodes.
- **Rejected OTAA Request**: The total authentication requests that were rejected.

**2. Graphical Data**

- **RSSI Distribution**: It reflects the RSSI in increments of 20dBm starting from -120dBm and going up to -40dBm. One can get an idea of how many of the total packets received fall within a certain RSSI level and draw conclusions.
- **SNR Distribution**: It reflects the SNR in increments of 5dB starting from -15dB and going up to 5dB. One can get an idea of how many of the total packets received fall within a certain SNR level and draw conclusions.
- **DataRate Distribution**: The percentage of packets that have a certain Data Rate (DR0 to DR7)
- **Traffic History**: The general graphs reflecting the amount of traffic in packets versus time. Good for evaluating the time of the heaviest traffic to prevent potential fallouts.

## 3. Gateway

In this section you can add and External Gateways to work with your LoRa Network Server. This way packet forwarded by the listed Gateways will be forwarded as though they were within the range of this device and processed by the Application Server.

:::tip 📝 NOTE
By default, you do not need to add the current Gateway as the Network Server works on it anyway, even though it is not listed.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/25.gateway-settings.jpg"
  width="100%"
  caption="Gateway Settings"
/>

Below is a short explanation of the main parameters:

### Gateway

Here you can add a Gateway. You simply need to input the EUI into the text box and press the Add button. Additionally, you can add a Name, Description and the coordinates of the Gateway.


### Gateway Backend Configuration

This section allows you to configure the Gateway to use the Built-in Server to act as a MQTT Bridge.

**1. General Setup**

These setting are the same as for the LoRa Gateway MQTT Bridge, refer to its section [LoRa Network](#lora®-network) for more information.

**2. MQTT Topic**

Here you can get information on the topic templates: Uplink MQTT Topic, Downlink MQTT Topic, Downlink acknowledge MQTT Topic, Gateway Statistic MQTT Topic.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/26.gateway-settings2.jpg"
  width="100%"
  caption="Gateway Settings"
/>

## 4. Application

In order for End-node data to be processed by the Built-in LoRa Server you need to have an Application under which you register the device. This will allow a node to join the network and you can decrypt its data payload.

The first time you access this section there will be no applications created by default. Enter a name in the field, choose one of the two type from the drop-down menu (more on this further down) and press the “**Add**” button.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/27.ns-application.jpg"
  width="100%"
  caption="NS Application"
/>

Now, you need to configure some parameters. These are separated in 3 tabs, which we will go through in order:

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/28.ns-configuration.jpg"
  width="100%"
  caption="NS Application Configuration"
/>

### Application Configuration

These are the mandatory things to configure, so they come first.

1. **Device Authentication Mode**: This reflects the choice you made when creating the Application.

- **Unified Application Key**: have the same key for every device that is a part of the Application
- **Separate Application Key**: allow for devices in the same application to use different application keys

2. **Name**: Chose something distinguishable.
3. **Auto Add LoRa Device**: If this is turned on, a field appears where you enter the Application EUI (or generate a random one). The idea here is to have your device be automatically added to the device pool if the Device EUI it has not already been added, provided the join request has the correct Application EUI and Key. This speeds up the process of adding a device to your network (from user perspective).
4. **Application EUI**: You can enter one manually or generate a random one via the “green arrows” button. Make sure this one matches the one in the node.
5. **Application Key**: Manual or random generation options are available.
6. **Description**: Not a mandatory field.


### Payload Format

There are only two options here. More features to come on future updates.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/29.payload-format.jpg"
  width="100%"
  caption="NS Application Payload Format"
/>

You can choose to have no encoding or to use **Cayenne LPP** (a popular low power format). This allows to directly work with services using the format, without the need to do post processing. As this functionality separates the data field (provided you have chosen the Cayenne LPP and your node has the corresponding encoding) you should be able to have the parsed data field. You can choose to only forward the parsed data via the flip-switch. This will effectively not forward data objects that are not adhering to the Cayenne LPP format.

### Integrations

This tab allows the user to make a simple HTTPS integration to directly publish data.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/30.ns-integration.jpg"
  width="100%"
  caption="NS Integrations"
/>

- There are several fields that need to be filled in, starting with the **Data Encoder/Decoder type** (Base 64 or HEX String). Once selected you can Enable the functionality with the slider.
- Afterwards make sure to fill the rest of the fields: HTTP/HTTPS Headers, Uplink data URL, Join notification URL, Ack notification URL, Device-status notification URL.
- You can test the HTTP endpoint integration with a free service like [https://webhook.site](https://webhook.site/)
- Last but not least, select a value for the Maximum number of concurrent connections and the Maximum length of the queue (default values are 16 and 64 respectively).
- The parameters and their configuration are out of the scope of this document as they are not specific to this device and there is plenty on information on the topic from various sources. Furthermore, you can check our documentation hub information and examples on the topic.
- Once your Application configuration is as you desire you can press the “**Save & Apply**” button. This will return you to the main Application section screen.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/31.ns-main-screen.jpg"
  width="100%"
  caption="NS Main Application screen"
/>


- Press the “**Edit**” button to get access to the Application parameters, these includes both the parameters you entered when creating it (you can adjust these if you like) and a new tab where you can add a Device. As this is a fresh Application there are no registered devices.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/32.ns-devices-tab.jpg"
  width="100%"
  caption="NS Application – Devices tab"
/>

### Devices

You need to enter a valid **Device EUI** in the text box (16 HEX symbols) and press the “**Add**” button. This starts the process and brings you to the screen where the parameters are configured. Additionally, you can Batch Add devices and Import/Export.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/33.ns-configuration-tab.jpg"
  width="100%"
  caption="NS Device – Configuration tab"
/>


**1. Configuration**

The configurable parameters are in this tab, the other tabs available are only for monitoring purposes.

- **Device name**: A distinguishable name for your device.
- **Class**: LoRa device class (both A and C are supported, B will be available in future updates).
- **Join mode**: The type of authentication method (both OTAA and ABP are supported).
- **Frame-counter Width**: The option for 16 and 32 bit exists.
- **Enable LPTP**: A proprietary protocol that allows for jumbo packets to be transferred. If such a packet arrives the Application Server will buffer it and assemble it once all the portions are available.
- **Description**: A human readable description of what the devices is to do.

**2. Activation**

This portion of the interface is empty to start with and will be popular ted with values once the devices have been authenticated and have joined the network. This applies if you use OTAA. In the case of ABP, the parameters in the Activation tab are entered manually and they will be present from the start.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/34.ns-activation-tab.jpg"
  width="100%"
  caption="NS Device – Activation tab"
/>

**3. Downlink**

The user is given the option to create dummy downlink frames in order to test. Option for selecting whether the frame requires an Acknowledgment or not is present. In order to successfully transmit a downlink, you need to enter a valued Frame port and the payload bytes in HEX format.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/35.ns-downlink-tab.jpg"
  width="100%"
  caption="NS Device – Downlink tab"
/>

**4. Live Device Data**

This is perhaps the most useful tool in the Application Server interface, as it allows the user to monitor the LoRa traffic in real time. By clicking on a given packet one can expand its windows and access detailed information containing both meta data and payload. In case the node is transmitting in LPP the payload is decrypted and decoded and one can see the information (in the case of Figure 36 there is some environmental data – temperature, barometric pressure, etc.)

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/36.ns-live-device.jpg"
  width="100%"
  caption="NS Device – Live Device Data tab"
/>

**5. Overview**

One last thing to note is that there is an additional page to the Device data, which however only appears when the device has been authenticated and has started transmitting. It provides statistics similar to the ones on the Main interface page (RSSI, SNR, etc.), however this are not for the Gateway as a whole, but only for the particular device.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/37.ns-overview.jpg"
  width="100%"
  caption="NS Device – Overview tab"
/>


## 5. Global Integration

This feature allows for integration of the Built-in LoRa Application Server with an External MQTT broker.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/38.ns-global-integration.jpg"
  width="100%"
  caption="NS Global Integration"
/>

### General Setup

You can refer to the Gateway MQTT Bridge section for a detailed explanation of the parameters.


### MQTT Topic Template Setup

Here you can get information on the topic templates: Join Topic, Uplink Topic, Downlink Topic, Ack Topic, Status Topic.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/39.mqtt-topic-template.jpg"
  width="100%"
  caption="NS Global Integration MQTT Topic Template"
/>

# Services

## 1. Dynamic DNS (Beta)

Dynamic DNS allows your router to be reached via a fixed host name while having a dynamically changing IP address.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/40.dns-tab.jpg"
  width="100%"
  caption="Dynamic DNS Tab"
/>

:::tip 📝 NOTE
Make sure to go through the **Hints** in order to get some understanding of how Dynamic DNS functions as a whole. You can do this by clicking on the "**Show more**" text in the Hints field.
:::

### Overview

To change the global settings press on the text "**To change global settings click here**" that is marked in the red rectangle in Figure 40. This will affect DDNS as a whole (both IPv4 and IPv6 for example).

If you want to have separate settings/rules for IPv4/IPv6, you need to define two sets, one for each. You can do this by filling in a name in the text box and pressing the “**Add**” button.

An IPv4 example is created by default and you only need to configure its parameters by pressing the “**Edit**” button. Refer to the [DDNS/VPN Document](/Knowledge-Hub/Learn/Resources/) for a practical example on how to configure this feature.

## 2. OpenVPN Tunnels

This is where you can create and new tunnels and monitor existing ones. You can check the available options in the image below:

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/41.openvpn.jpg"
  width="100%"
  caption="OpenVPN Tunnels Tab"
/>

# System

## 1. System

This is the section where you configure general device parameters.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/42.system-tab.jpg"
  width="100%"
  caption="System Tab"
/>


- **General Settings**: The system time is displayed here. Additionally, you can edit the Host Name and select the Time zone. Another way to get the correct time is to use Timing Synchronization. You can Enable NTP client mode, enable NTP server and provide server candidate URLs.

:::tip 📝 NOTE
Time Synchronization tab is displayed in all System sub-menus.
:::

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/43.general-settings.jpg"
  width="100%"
  caption="System – General Settings"
/>

- **Logging**: In case you want to keep a log of system events you can configure how this is done here. You can set the Buffer size, provide the IP Address and port of an External log server, and set the Log Level.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/44.logging.jpg"
  width="100%"
  caption="System – Logging"
/>

- **Language**: By default, this is in Auto (English), however you can choose from several options including German, Spanish, Russian, etc.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/45.language.jpg"
  width="100%"
  caption="System – Language"
/>

### 2. Administration

This is where you change the administration password of the device.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/46.admin-tab.jpg"
  width="100%"
  caption="Administration Tab"
/>

### 3. License

This is the status of your license. You can see the Type, Expiration date, Number of Supported Nodes, and the Number of External Gateways Supported. There is a field to ender the License data in case you are upgrading. All Gateways include a free with the parameters as in Figure 24 in the [LoRa Network](#lora®-network) section.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/47.license-tab.jpg"
  width="100%"
  caption="License Tab"
/>

### 4. Backup / Flash Firmware

There are a number of actions that this portion of the Firmware allows the user to perform. It is recommended you make regular backups and refresh the firmware when there is a new release in order to assure optimal performance.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/48.system-update.jpg"
  width="100%"
  caption="Backup, reset and firmware update"
/>

- **Generate archive**: Downloads an archive of the current configuration
- **Perform reset**: Resets the Gateway to the default settings
- **Restore**: You can upload a previously generated archive to restore the configuration settings at the time of its making
- **Flash new firmware**: Update the firmware by flashing a bin file. Use the button to select the location of the new firmware file and the blue button to initiate the flashing process. There is a tick box to toggle the option of keeping the current settings of the gateway


:::tip 📝 NOTE
"The **Keep Settings** check box is selected by default, as unchecking it will results in having a Gateway with stock settings after the firmware update."
:::


### 5. Reboot

Reboots the gateway. All unsaved changes will be discarded. This is not a reset in any way and only power cycles the device. All configuration settings will be left intact.

<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/49.reboot.jpg"
  width="100%"
  caption="System reboot"
/>

### 6. File Browser

This gives you access to the files in the **root** partition.


<rk-img
  src="/assets/images/knowledge-hub/learn/web-management-platform/50.file-browser.jpg"
  width="100%"
  caption="File Browser"
/>



