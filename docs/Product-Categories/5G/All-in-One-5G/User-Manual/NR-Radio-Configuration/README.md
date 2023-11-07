---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK M310/M320. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/5g/all-in-one-5g/all-in-one-5g.png
prev: ../../User-Manual/LTE-Radio-Configuration/
next: ../../Installation-Guide/
tags:
  - All-in-One 5G
  - 5G
  - User Manual
  - M320
  - M310
  - NR
---

# All-in-One. 5G NR Radio Configuration

This document describes the configuration of the integrated Next Generation Node B (gNB) for software version **BaiBBU_QSS_1.1.x**. It is a guide on how to configure the device after completing installation.

## Overview

The All-in-One. 5G NR Next Generation Node B (gNB) is loaded with its own GUI for configuring its operating parameters. You can log in to the GUI either locally through the Local Maintenance Terminal (LMT), which is an Ethernet port, or remotely via an IP address.

After the gNB is powered on, configure the gNB to start services and access UEs, providing voice and data service. When configuring a newly installed gNB, we recommend you follow the flow that is shown in **Figure&nbsp;1**.

<rk-img
  src="/assets/images/5g/all-in-one-5g/user-manual-nr/1.gnb-configuration-flow.png"
  width="40%"
  caption="gNB Configuration Flow"
/>

Before configuring the device, data planning needs to be done first. The data to configure includes local parameters and network parameters. These parameters are either provided by the user or determined after negotiation with the customers.

The data to prepare includes network parameters, cell parameters, protocol parameters, software version, etc., as shown in **Table&nbsp;1**.

<b> Table 1</b>: Data Planning

| Item       | Parameter         | Description                     |
| ---------- | ----------------- | ------------------------------- |
| IP Address | OAM IP            | OAM uses a separate IP address. |
|            | AMF IP            | Planned by the customer.        |
| Cell       | PLMN              | Planned by the customer.        |
| Parameters | TAC               | Planned by the customer.        |
|            | CellID            | Planned by the customer.        |
|            | NREF(PointA, SSB) | Planned by the customer.        |
|            | Offset To PointA  | Planned by the customer.        |
|            | Kssb              | Planned by the customer.        |

## Login Client Web

### Client Web Environmental Requirements

<b> Table 2</b>: Client Environmental Requirements

| Item              | Description                                                                                  |
| ----------------- | -------------------------------------------------------------------------------------------- |
| CPU               | Intel core above 1&nbsp;GHz                                                                  |
| Memory            | At least 2G RAM                                                                              |
| Hard disk         | At least 100 MB of storage space                                                             |
| Operating system  | Microsoft: Windows XP, Windows Vista, Windows 7 or Windows10 <br> Mac: MacOS X 10.5 or above |
| Screen resolution | Above 1024 x 768                                                                             |
| Browser           | Chrome 6 or higher                                                                           |


### Connect Client Web to Base Station

Connect the Ethernet interface of the computer to the network interface of the base station with the Ethernet cable.

### Set Up Client Computer

Before logging into the Web client, the client computer’s IP address needs to be set up first so that the connection between the client and the server is possible. Take Windows 10 as an example:

1. Open **Control Panel** from the Start Menu, then go to **Network and Internet**.
2. Choose **View network status and tasks,** and then click **Local Connectivity** in the resulting window.
3. Within the **Status of Local Connectivity,** click on **Properties** to open the **Properties Local Connectivity** pop-up window.
4. Choose **Internet Protocol Version (TCP/IPV4)** and click **Properties** to access the window, as shown in **Figure&nbsp;2**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/2.internet-protocol-version4.png"
width="40%"
caption="Internet Protocol Version4"
/>

Select either **Obtain an IP address automatically** or **Use the following IP address**:
- If **Obtain an IP address automatically** is chosen, proceed to step 7
- If **Use the following IP address** is selected, follow step 5 to step 7

:::tip 📝 NOTE
In general, if the **Obtain an IP address automatically** setting fails, one needs to set up the IP address manually.
:::

5. Select **Use the following IP address**.
6. Enter the IP address for the Operation and Maintenance (OAM) interface, along with the subnet mask and default gateway, then click **OK** to save the settings.
- IP address: **`192.168.150.XXX`** (recommended XXX: 100~254).

:::tip 📝 NOTE
Avoid using '192.168.150.7' since it's already assigned to the LAN interface of the base station.
:::

- Subnet mask: **`255.255.255.0`**
- Default gateway: **`192.168.150.7`**

:::tip 📝 NOTE
The default OAM IP address is `192.168.150.7/24`. If the gNB configures IP address in other segments, you should configure according to your actual network environment.
:::

7. Open a command window and run the 'ping **`192.168.150.XXX`** command to test the connection between the client computer and the server. If the ping command does not succeed, contact network engineers to verify network connectivity.

### GUI Log In

1. Open a web browser, and enter [http://192.168.150.7](http://192.168.150.7), as shown in **Figure&nbsp;3**.

:::tip 📝 NOTE
This guide uses the initial IP address `192.168.150.7`. If the IP address is changed, log in through the new IP address.
:::

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/3.gui-login.png"
width="85%"
caption="GUI Login"
/>

2. Input user name, password, and click **Login**. The homepage is shown in **Figure&nbsp;4**.  <br>
Default credentials: <br>
username: `new_user` <br>
password: `gNB@2014`

:::tip 📝 NOTE
For security reasons, you should change the password after you first log in rather than leaving the default value.
:::

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/4.gui-homepage.png"
width="85%"
caption="GUI Homepage"
/>

:::tip 📝 NOTE
The menus and information may vary by product type or software version.
:::

The homepage displays the navigation pane on the left, and shows the window for the first menu: **Basic Setting** and then **Basic Info**. This window is like a dashboard for the device.

  - **Basic info:** shows information such as the hardware version, software version, and serial number, and many more.
  - **Status info:** shows the status information of Cell, F1, IPSec, NG and the Overall Upgrade. If the Cell status, F1 status, and NG status all show Active, it indicates that the cell is normal.
    - **IPsec status:** is an indicator which is configured according to the actual network environment.
    - **Overall Upgrade Status:** is the upgrade status indicator.

For the second menu: **Basic Setting** and then **Alarm** is the menu displays the current alarms, as shown in **Figure&nbsp;5**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/5.current-alarm.png"
width="85%"
caption="Current Alarm"
/>

## Basic Setting

The quick settings determine important RF parameters. These parameters need to be planned in advance during the network planning stage.

1. In the navigation column in the left, select **Basic Setting** and then **Quick Setting** to enter the quick setting page, as shown in **Figure&nbsp;6**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/6.quick-setting.png"
width="85%"
caption="Quick Setting"
/>

2. Input quick setting parameters, the parameter descriptions are given in **Table&nbsp;3**.

<b> Table 3</b>: Quick Setting Parameter Description

| Parameter               | Description                                                                                                                                                                               |
| ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Band                    | Operation frequency band, currently includes N48, N78                                                                                                                                     |
| UL NRARFCN              | Uplink NR-ARFCN                                                                                                                                                                           |
| DL NRARFCN              | Downlink NR-ARFCN                                                                                                                                                                         |
| PCI                     | Physical Cell ID (PCI) is allocated by the operator. It is an essential Layer 1 cell identity for each cell site in the network. Planning PCIs is crucial for QoS.  <br> Range from 0 to 1007. |
| TX Antenna Count        | The number of transmitting antennas. <br> The gNB supports up to 2 TX antenna.                                                                                                                     |
| RX Antenna Count        | The number of receiving antennas. <br> The gNB supports up to 2 RX antennas.                                                                                                                       |
| DL SubCarrierSpacing    | Downlink subcarrier spacing <br> The gNB supports 30&nbsp;kHz in this version.                                                                                                                |
| DL CarrierBandWidth(RB) | Downlink carrier bandwidth                                                                                                                                                               |
| UL SubCarrierSpacing    | Uplink subcarrier spacing <br> The gNB supports 30&nbsp;kHz in this version.                                                                                                                  |
| UL CarrierBandWidth(RB) | Uplink carrier bandwidth                                                                                                                                                                 |
| Power Modify            | Transmitted power <br> Range from 0 to 43&nbsp;dBm.                                                                                                                                              |

3. Click **Save** to complete the quick settings for the gNB.

## System Parameter Configuration

### NTP Configuration

This page includes the time zone and the NTP configuration, which are configured according to actual needs. If NTP is used by the gNB as an external clock source, up to five NTP servers are supported, one for master NTP service and the others for backup.

1. In the navigation column on the left, select **System** and then **NTP** to enter the NTP setting page, as shown in **Figure&nbsp;7**. The page displays the current date and time.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/7.ntp-server-setting.png"
width="85%"
caption="NTP Server Setting"
/>

2. Select the Time Zone where the gNB is located.
3. Select whether or not to enable the NTP function.
4. Input NTP server parameters. The parameter description is shown in **Table&nbsp;4**.

<b> Table 4</b>: NTP Server Parameter Description

| Parameter  | Description                                                                                 |
| ---------- | ------------------------------------------------------------------------------------------- |
| NTPServer1 | Domain name or IP address of the primary NTP server. Must be consistent with the other end. |
| NTPServer2 | Domain name or IP address of a secondary NTP server. Must be consistent with the other end. |
| NTPServer3 | Domain name or IP address of a secondary NTP server. Must be consistent with the other end. |
| NTPServer4 | Domain name or IP address of a secondary NTP server. Must be consistent with the other end. |
| NTPServer5 | Domain name or IP address of a secondary NTP server. Must be consistent with the other end. |

5. Click **Save** to complete the NTP server configuration.

### Log Configuration

In the navigation column on the left, select **System** and then **Log** to enter the log level setting page, as shown in **Figure&nbsp;8**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/8.log-level-setting.png"
width="85%"
caption="Log Level Setting"
/>

The gNB supports the log level setting for Media Access Control (MAC) log, Radio Link Control (RLC) log and RLCL.

The following levels are supported:
- FATAL
- ERROR
- INFO
- BRIEF
- DETAILED
- DETAILED ALL

### Software Upgrade

When the preset version does not meet the actual need, the software version needs to be updated to the latest version. The system supports firmware version upgrade and rollback, configuration upgrade, etc.

:::warning ⚠️ WARNING
Firmware upgrade may lead to the damage of the gNB file, contact the support engineer before upgrading. If necessary, the vendor will provide the technical support.
:::

#### Firmware Upgrade

1. In the navigation column on the left, select **System** and then **Upgrade** to enter the upgrade page, as shown in **Figure&nbsp;9**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/9.upgrade.png"
width="85%"
caption="Upgrade"
/>

2. Get new version of firmware file and save it to your local computer.
3. Select whether or not to preserve the current settings.
4. Click **Select File** to select the firmware file to upload. 
5. Check whether the software version is correct again and then click **Update Now**.
6. In the pop-up window click **PROCEED**.

:::tip 📝 NOTE
- In step 4, the file type is `.EXT`.
- In the **Basic Setting > Basic Info** page, the upgraded version displayed should match the version from step 2.
:::

#### Rollback

Only one rollback operation is allowed for each upgrade. By permission of the BBU, the software can roll back to the version before upgrading. After the rollback, a new rollback will not be permitted until an upgrade has taken place. If the previous version is `-`, there is no software version for rollback.

1. Click **Click Rollback**.
2. In the pop-up window, click **OK**. Wait for about three minutes until the base station will reboot completely. In the **Basic Setting > Basic Info** page, the version after rollback will be displayed in the **Software Version**.

#### Configuration Upgrade

1. Click **Select File** to select the configuration file to upload.
2. Then click **Update Now**

:::tip 📝 NOTE
Other file will also upgrade by following these steps.
:::

### Backup

In the navigation column on the left, select **System** and then **Backup** to enter the backup page, as shown in **Figure&nbsp;10**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/10.system-backup.png"
width="85%"
caption="System Backup"
/>

#### Backup Current Configuration

1. Click **Get Backup Files**.
2. In the pop-up download dialog box, select the file path to save the current configuration file to the local computer.

#### Backup Log Files

1. Click **Get Backup Files**.
2. In the pop-up download dialog box, select the file path to save the log files to the local computer.

#### Backup Crash Logs

1. Click **Get Backup Files**.
2. In the pop-up download dialog box, select the file path to save the crash log files to the local computer.

#### Restore Default Configuration

:::warning ⚠️ WARNING
After the restore operation, the gNB will reboot immediately. Be careful when using the **Restore Default Configuration** feature. It will disrupt the current service.
:::

1. Click **Restore Default Configuration**.
2. In the pop-up download dialog box click **OK**, the base station will reboot immediately.<br>
Wait for about three minutes, the base station will reboot completely.

#### Import Configuration File

1. Click **Select File** to select the configuration file from the local computer.
2. Click **Upload** to import the configuration file.
3. Click **Import Configurations Files** to import the configuration file.

### Diagnostics

The gNB supports the tcpdump command to collect and analyze network data.

1. In the navigation column on the left, select **System** and then **Diagnostics** to enter the diagnostics page, as shown in **Figure&nbsp;11**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/11.diagnostics.png"
width="85%"
caption="Diagnostics"
/>

2. Input network diagnostics parameters, the parameter descriptions are shown in **Table&nbsp;5**.

<b> Table 5</b>: Parameter Description of tcpdump Command

| Parameter                 | Description                     |
| ------------------------- | ------------------------------- |
| Method of Diagnostics     | Tcpdump                         |
| Command                   | Tcpdump command                 |
| Count of captured packets | The number of captured packets. |

3. Click **Start** to run the tcpdump command.
4. Click **Stop** to stop running.
5. Click **Get File** to download the file to the local computer.



### Reboot

:::warning ⚠️ WARNING
The reboot operation will interrupt the current service, so be careful when performing this operation.
:::

1. On the left navigation, select **Reboot** to enter the reboot window.
2. Click **Reboot**, and the gNB will restart immediately.

## Network Interface Configuration

Configuration of the network interface includes WAN, VLAN, IPsec, Differentiated Services Code Point (DSCP) and static routes.

### WAN/LAN Interface Configuration

The WAN interface is an external communication portal (Internet connection) to the core network. The only option for the Interface name field is WAN. The WAN interface supports the configuration of multiple VLANs.

1. On the navigation column on the left, select **Network** and then **WAN/VLAN** to enter the WAN interface and VLAN configuration page, as shown in **Figure&nbsp;12**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/12.configure-wan-vlan.png"
width="85%"
caption="Configure WAN/VLAN"
/>

:::tip 📝 NOTE
In this software version, DPDK is not supported.
:::

2. Click `+` to add WAN card, as shown in **Figure&nbsp;13**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/13.add-wan-card.png"
width="85%"
caption="Add WAN Card"
/>

3. Input parameters of the WAN card, as shown in **Table&nbsp;6**.

<b> Table 6</b>: WAN Card Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Index</td>
      <td>The Index is generated automatically.</td>
    </tr>
    <tr>
      <td>Enable</td>
      <td>Enables or disables the port.</td>
    </tr>
    <tr>
      <td>Name</td>
      <td>Name</td>
    </tr>
    <tr>
      <td>User Label</td>
      <td>User Label</td>
    </tr>
    <tr>
      <td>Max Bit Rate</td>
      <td>
        Select maximum bit rate of the port from the drop-down list. The units are in Mbit/s
        <ul>
          <li>10</li>
          <li>100</li>
          <li>1000</li>
          <li>Auto</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mode</td>
      <td>
        Select the working mode of the port from the drop-down list:
        <ul>
          <li>Full</li>
          <li>Half</li>
          <li>Auto</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

4. Click **Open** to display the attribute parameters of the WAN interface, as shown in **Figure&nbsp;14**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/14.configure-wan-interface-attribute.png"
width="85%"
caption="Configure WAN Interface Attribute"
/>

5. Configure IPv4, IPv6, or VLAN parameters based on the actual network deployment.

##### &bull; IPv4

Click `+`  on **WAN IPv4 table** zone to display the IPv4 configuration parameters, as shown in **Figure&nbsp;15**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/15.ipv4-configuration-parameters.png"
width="85%"
caption="IPv4 Configuration Parameters"
/>

The description of IPv4 configuration parameters is shown in **Table&nbsp;7**.

<b> Table 7</b>: IPv4 Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Addressing Type</td>
      <td>The interface protocol used by the WAN interface. It includes:
        <ul>
          <li>DHCP: If DHCP is selected, no other parameter needs to be configured.</li>
          <li>Static: If Static is selected, the IP address, gateway and subnet mask should be configured.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Port Type</td>
      <td>
        WAN port type. According to the network plan, specify the usage of the port.
        <ul>
          <li>Ng</li>
          <li>Xn</li>
          <li>Ng</li>
          <li>Xn</li>
          <li>S1</li>
          <li>X2</li>
          <li>S1/X2</li>
          <li>F1</li>
          <li>E1</li>
          <li>OAM</li>
          <li>Other</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>IP</td>
      <td>
        When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The IP address of the WAN interface.
      </td>
    </tr>
    <tr>
      <td>Default Gateway</td>
      <td>
        When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The IP address of the default gateway.
      </td>
    </tr>
    <tr>
      <td>Subnet Mask</td>
      <td>
        When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The Subnet mask address of the IP address.
      </td>
    </tr>
  </tbody>
</table>


##### &bull; IPv6

Click `+` on **WAN IPv6 table** zone to display the IPv6 configuration parameters, as shown in **Figure&nbsp;16**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/16.ipv6-configuration-parameters.png"
width="85%"
caption="IPv6 Configuration Parameters"
/>

The description of IPv6 configuration parameters is shown in **Table&nbsp;8**.

<b> Table 8</b>: IPv6 Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Addressing Type</td>
      <td>The interface protocol used by the WAN interface, includes:
        <ul>
          <li>DHCPv6: If DHCP is selected, no other parameter needs to be configured.</li>
          <li>Static: If Static is selected, the IP address, gateway and subnet mask should be configured.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Port Type</td>
      <td>
      WAN port type. According to the network plan, specify the usage of the port.
        <ul>
          <li>Ng</li>
          <li>Xn</li>
          <li>Ng</li>
          <li>Xn</li>
          <li>S1</li>
          <li>X2</li>
          <li>S1/X2</li>
          <li>F1</li>
          <li>E1</li>
          <li>OAM</li>
          <li>Other</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>IP</td>
      <td>When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The IP address of the WAN interface.
      </td>
    </tr>
    <tr>
      <td>Default Gateway</td>
      <td>When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The IP address of the default gateway.
      </td>
    </tr>
      <tr>
      <td>Subnet Mask</td>
      <td>When <b>Addressing Type</b> is set to <b>Static</b>, the parameter displays. <br> The Subnet mask address of the IP address.
      </td>
    </tr>
  </tbody>
</table>

##### &bull; VLAN

Click `+` on **WAN VLAN table** zone to display the VLAN configuration parameters, as shown in **Figure&nbsp;17**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/17.vlan-configuration-parameters.png"
width="85%"
caption="VLAN Configuration Parameters"
/>

The description of VLAN configuration parameters is shown in **Table&nbsp;9**.

<b> Table 9</b>:  VLAN Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
<tbody>
	<tr>
		<td>Name</td>
		<td>VLAN name</td>
	</tr>
	<tr>
		<td>ID</td>
		<td>VLAN ID</td>
	</tr>
	<tr>
		<td>Enable</td>
		<td>
		Enables or disables VLAN
			<ul>
				<li>0: Disable</li>
				<li>1: Enable</li>
			</ul>
		</td>
	</tr>
</tbody>
</table>

6. Click **Save** to complete the WAN and VLAN configuration.

### IPSec Configuration

The security gateway (SeGW) can provide a security protocol at the network layer to ensure safe message transmission. If the operator has deployed the security gateway, the gNB needs to enable the IPsec function accordingly to establish a safe VPN channel between the gNB and the SeGW.

The gNB disables the IPsec by default.

1. Select **Network** and then **IPsec** to enter the IPsec configuration page, as shown in **Figure&nbsp;18**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/18.configure-ipsec.png"
width="85%"
caption="Configure IPsec"
/>

2. Select enable or disable the IPsec function. The IPsec function is enabled by default.
3. If the IPsec function is enabled, click `+` to add a IPsec tunnel.
4. In **IPsec Tunnel List** area, click **Edit** to enter the edit dialog box, as shown in **Figure&nbsp;19**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/19.edit-ipsec-tunnel.png"
width="85%"
caption="Edit IPsec Tunnel"
/>

The description of basic parameters is shown in **Table&nbsp;10**.

<b> Table 10</b>:  IPsec Tunnel Basic Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
  <tbody>
    <tr>
      <td>Enabled</td>
      <td>Enables or disables this IPsec tunnel.</td>
    </tr>
    <tr>
      <td>LeftAuth</td>
      <td>Local authentication type of the IPsec. Must be consistent with the security gateway side.
        <ul>
          <li>PSK</li>
          <li>PUBKEY</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>RightAuth</td>
      <td>Peer authentication type of the IPsec. Must be consistent with the security gateway side.
        <ul>
          <li>PSK</li>
          <li>PUBKEY</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Gateway</td>
      <td>The security gateway (IPsec server) IP address. <br> Make sure the IP address entered here matches the actual IP address on the security gateway side.
      </td>
    </tr>
    <tr>
      <td>Right Subnet</td>
      <td>IP address of the remote subnet, which must be consistent with the security gateway side. <br> Message within this address range will be packed as a tunnel.
      </td>
    </tr>
    <tr>
      <td>Right Id</td>
      <td>Identification of the server end (0-48 digits string). <br> It must be consistent with the security gateway side.
      </td>
    </tr>
  </tbody>
</table>

:::warning ⚠️ WARNING
It is highly recommended that for the **Advanced Setting** fields you use the default values. Improper changes may lead to system malfunctions. <br> Changes in the **LeftAuth** and **RightAuth** values are not recommended.
:::

The **Advanced Setting** fields become particularly important to network operations as areas become denser with users.

The description of advanced parameters is shown in **Table&nbsp;11**.

<b> Table 11</b>:  Advanced Parameter Description of IPsec Tunnel Mode

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
  <tbody>
    <tr>
      <td>Left Id</td>
      <td>The Identification of the client end (0-48 digit string). <br> It must be consistent with the security gateway side. If there is no security gateway left identifier, leave this field empty.
      </td>
    </tr>
    <tr>
      <td>LeftCert</td>
      <td>If set <b>LeftAuth</b> to <b>Pubkey</b>, the parameter needs to be set. Certificate name. On this version is clientCert.derpsk.
      </td>
    </tr>
    <tr>
      <td>LeftSourceIp</td>
      <td>The Virtual address allocation assigned by the system. If absent, use the local IP address
      </td>
    </tr>
    <tr>
      <td>Left Subnet</td>
      <td>The IP address of the local subnet.</td>
    </tr>
    <tr>
      <td>Fragmentation</td>
      <td>
      The type of fragmentation
        <ul>
          <li>YES</li>
          <li>ACCEPT</li>
          <li>FORCE</li>
          <li>NO</li>
        </ul>
      </td>
    </tr>
		<tr>
			<td>IKE Encryption</td>
			<td>The Internet Key Exchange (IKE) encryption method. <br> IKE is a protocol used to ensure security for virtual private network (VPN) negotiation and remote host or network access.
				<ul>
					<li>AES128</li>
					<li>AES256</li>
					<li>3DES</li>
          <li>DES</li>
				</ul>
			</td>
		</tr>
    <tr>
			<td>IKE DH Group</td>
			<td>IKE Diffie-Hellman (DF) groups set key size and strength used in the key exchange process. It enable devices to agree on a secret key without direct transmission while enhancing security in the IKE protocol.
				<ul>
					<li>MODP768</li>
					<li>MODP1024</li>
					<li>MODP1536</li>
					<li>MODP2048</li>
					<li>MODP4096</li>
				</ul>
			</td>
		</tr>
    <tr>
			<td>IKE Authentication</td>
			<td>Authentication algorithm
				<ul>
					<li>SHA1</li>
					<li>SHA1_160</li>
					<li>SHA256_96</li>
					<li>SHA256</li>
				</ul>
			</td>
		</tr>
    <tr>
			<td>ESP Encryption</td>
			<td>Encapsulating Security Payload (ESP) – member of the IPsec protocol suite that provides origin authenticity, integrity, and confidentiality protection of packets.
				<ul>
					<li>AES128</li>
					<li>AES256</li>
					<li>3DES</li>
					<li>DES</li>
				</ul>
			</td>
		</tr>
    <tr>
			<td>ESP DH Group</td>
			<td>ESP Diffie-Hellman (DF) groups determine key size and strength for securing communication in the IPSec protocol. It enhancesencryption in a concise manner.
      	<ul>
					<li>MODP768</li>
					<li>MODP1024</li>
					<li>MODP1536</li>
					<li>MODP2048</li>
					<li>MODP4096</li>
				</ul>
			</td>
		</tr>
    <tr>
			<td>ESP Authentication</td>
			<td>ESP Authentication algorithm
				<ul>
					<li>SHA1</li>
					<li>SHA1_160</li>
					<li>SHA256_96</li>
					<li>SHA256</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Key Life</td>
			<td>IPsec security association (SA) renegotiation time. <br> Format: Seconds, Minutes, Hours or Days.
      </td>
		</tr>
		<tr>
			<td>IKELifeTime</td>
			<td>IKE security association renegotiation time. <br>Format: Seconds, Minutes, Hours or Days.
      </td>
		</tr>
		<tr>
			<td>RekeyMargin</td>
			<td>Renegotiation time before the expiry of IKE life time (negotiate the IKE security association time before the expiry of IKE life time). <br>Format: Seconds, Minutes, Hours or Days.
      </td>
		</tr>
		<tr>
			<td>Dpdaction</td>
			<td>DPD stands for dead peer detection (DPD) protocol. Determines what action to take when a gateway exception occurs.
				<ul>
					<li>None</li>
					<li>Clear</li>
					<li>Hold</li>
					<li>Restart</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Dpddelay</td>
			<td>Time interval for sending the DPD detection message. <br>Format: Seconds, Minutes, Hours or Days.</td>
		</tr>
		<tr>
			<td>Left Interface</td>
			<td>The interface on the gNB side.</td>
		</tr>
  </tbody>
</table>


5. Input strong WAN configuration parameters, as shown in **Table&nbsp;12**.

<b> Table 12</b>:  Strong WAN Parameter Description

| Parameter               | Description                                                     |
| ----------------------- | --------------------------------------------------------------- |
| IKE Debug Level         | IKE debug level <br> Range: -1,0,1,2,3,4                        |
| ESP Debug Level         | ESP debug level <br> Range: -1,0,1,2,3,4                        |
| CFG Debug Level         | CFG debug level <br> Range: -1,0,1,2,3,4                        |
| KNL Debug Level         | KNL debug level <br> Range: -1,0,1,2,3,4                        |
| MGR Debug Level         | MGR debug level <br> Range: -1,0,1,2,3,4                        |
| ASN Debug Level         | ASN debug level <br> Range: -1,0,1,2,3,4                        |
| CHD Debug Level         | CHD debug level <br> Range: -1,0,1,2,3,4                        |
| LIB Debug Level         | LIB debug level <br> Range: -1,0,1,2,3,4                        |
| Port                    | Port number                                                     |
| Port NAT T              | NAT T port number                                               |
| Retry Initiate Interval | Retry initiate interval                                         |
| MTU                     | Maximum transmission unit <br> The maximum value is 9600 bytes. |
| MCS                     | MCS <br> Range: 0 9600 bytes                                    |

6. Click **Save** to complete the IPsec configuration.

### DSCP Configuration

1. In the navigation column on the left, select **Network** and then **DSCP** to enter the DSCP configuration page, as shown in **Figure&nbsp;20**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/20.configure-dscp.png"
width="85%"
caption="Configure DSCP"
/>

2. Click `+` to display DSCP adding window as shown in **Figure&nbsp;21**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/21.add-a-dscp.png"
width="85%"
caption="Add a DSCP"
/>

3. Input DSCP parameters, as shown in **Table&nbsp;13**.

<b> Table 13</b>:  Strong WAN Parameter Description

| Parameter     | Description                                                                               |
| ------------- | ----------------------------------------------------------------------------------------- |
| DSCP          | DSCP code is used to differentiate the priority level. <br> Range from 0 to 63 (integer). |
| VLAN Priority | Vlan priority <br> Range from 0 to 7 (integer).                                           |

4. Click **Save** to complete the DSCP setting.

:::tip 📝 NOTE
On the lower of the page, you can specify DSCP value and VLAN priority for NGAP, X2AP, F1AP, XNAP and OAM.
:::

### Core Network Configuration

:::tip 📝 NOTE
This version does not support this menu.
:::

### Static Routing Configuration

This function is for users that need to configure static routing.

1. In the navigation column on the left, select **Network** and then **Static Routing** to enter the static routing configuration page, as shown in **Figure&nbsp;22**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/22.configure-static-routing.png"
width="85%"
caption="Configure Static Routing"
/>

This page displays the static route list.

2. Click `+` to display static configuration parameters, as shown in **Figure&nbsp;23**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/23.add-static-route.png"
width="85%"
caption="Add Static Route"
/>

Input the configuration parameters of the static route, which are given in **Table&nbsp;14**.

<b> Table 14</b>: Static Route Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>IP Address Version</td>
      <td>Profit
        <ul>
          <li>IPv4</li>
          <li>IPv6</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Port Name</td>
      <td>Port Name</td>
    </tr>
    <tr>
      <td>Destination Network</td>
      <td>The destination IP address.
      </td>
    </tr>
    <tr>
      <td>Subnet Mask</td>
      <td>The subnet mask of target IP address.</td>
    </tr>
    <tr>
      <td>Default Gateway</td>
      <td>The gateway IP address of target IP address.</td>
    </tr>
  </tbody>
</table>

4. Click **Save** to complete the static route configuration.

:::tip 📝 NOTE
For the **Destination Network**, the target IP address must reachable from the original IP address of the WAN interface or VLAN source port.
:::

## BTS Parameter Configuration

### Management Server Configuration

For the Network Management System (NMS), an operator can configure their own management server.

After configuring NMS, you can log in to NMS to check whether the gNBs have been added or not. Once added, the gNB can be configured and managed on the NMS.

1. In the left navigation column, select **BTS Setting** and then **Management Server** as shown in **Figure&nbsp;24**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/24.configure-network-management-server.png"
width="85%"
caption="Configure Network Management Server"
/>

2. Input the network management parameters, whose descriptions are given in **Table&nbsp;15**.

<b> Table 15</b>: Network Management Server Parameter Description

| Parameter         | Description                                                                                                                                                                                                               |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Management Server | The URL of the management server. <br> Example: [http://172.17.9.82:8080/smallcell/AcsService](http://172.17.9.82:8080/smallcell/AcsService) <br> When the NMS is hosted in the cloud, the domain name is also supported. |
| Period            | The period of the gNB and the NMS, range from 1 to 65535. The units are in minutes.                                                                                                                                       |
| OMC Vendor        | The vendor that provides the NMS.                                                                                                                                                                                         |

3. Click **Save** to complete the NMS configuration.

### Performance Management

1. In the left navigation column, select **BTS Setting** and then **Performance Management** as shown in **Figure&nbsp;25**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/25.performance-management.png"
width="85%"
caption="Performance Management"
/>

2. Input the performance management parameters, whose descriptions are given in in **Table&nbsp;16**.

<b> Table 16</b>: Performance Management Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>PM</td>
			<td>Enables or disables performance management.
				<ul>
					<li>ON: Enable</li>
					<li>OFF: Disable</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>Alise</td>
			<td>Alise</td>
		</tr>
		<tr>
			<td>URL</td>
			<td><a href="http://localhost.net" target="_blank">http://localhost.net</a>
      </td>
		</tr>
		<tr>
			<td>Username</td>
			<td>Username</td>
		</tr>
		<tr>
			<td>Password</td>
			<td>Password</td>
		</tr>
		<tr>
			<td>Periodic Upload Interval</td>
			<td>Periodic upload interval</td>
		</tr>
		<tr>
			<td>Periodic Upload Time</td>
			<td>Periodic upload time</td>
		</tr>
		<tr>
			<td>Replenish</td>
			<td>Enables or disables replenish</td>
		</tr>
		<tr>
			<td>Replenish Start Time</td>
			<td>Replenish start time</td>
		</tr>
		<tr>
			<td>Replenish End Time</td>
			<td>Replenish end time</td>
		</tr>
	</tbody>
</table>

3. Click **Save** to complete the performance management configuration.

### Synchronization Configuration

5G technology standards specify time synchronization requirements between adjacent gNBs. Synchronization between gNBs can help reduce interference, optimize bandwidth utilization, and improve network capacity.

This gNB supports GPS synchronization in this version.

1. In the left navigation column, select **BTS Setting** and then **Sync Setting** to enter the synchronization configuration page, as shown in **Figure&nbsp;26**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/26.synchronization-mode-setting.png"
width="85%"
caption="Synchronization Mode Setting"
/>

2. Select **GPS** source.
-  GPS
-  GLONASS
-  BEIDOU
-  GALILEO
-  QZSS

3. Input PPS time offset. Range is from 0 to 5,000,000&nbsp;ns.
4. Click **Save** to complete the synchronization setting.

### Energy Saving Configuration

:::tip 📝 NOTE
In this software version, energy saving is not be supported.
:::

### License Management

The License Management menu may be used to import license files for optional features, such as regulatory certificates of authorization to operate. When imported, the files are stored in the gNB memory and shown in the License List area of this window.

1. In the left navigation column, select **BTS Setting** and then **License Management** to enter the License Management page, as shown in **Figure&nbsp;27**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/27.license-management.png"
width="85%"
caption="License Management"
/>

Remain Time Indicates the remaining days of the License. If 0 is displayed, apply for a License and upload it to update it as soon as possible. Otherwise, the cell cannot be activated or user access is restricted.

2. Select the License file from the local computer.
3. Click **Import License** to upload the license file to the gNB. After the License file is uploaded, it will display in the license list.

### Certificate Store

If the gNB wants to achieve some functions which need some authentication, this page supports to upload, view, export, or delete these certificates.

:::tip 📝 NOTE
For IPsec private setting, only the .der files need to be uploaded. The .bin files are generated automatically and do not need to be uploaded.
:::

This version does not support the menu.

### Cell Management

In the left navigation column, select **BTS Setting** and then **Device Topology** to enter the device topology page, as shown in **Figure&nbsp;28**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/28.cell-management.png"
width="85%"
caption="Cell Management"
/>

:::tip 📝 NOTE
This version supports one cell.
:::

## NR Parameter Configuration

### LTE Neighbor Frequency and Cell Configuration

1. In the left navigation column, select **NR Setting** and then **LTE Freq/Cell** to enter the LTE neighbor frequency and cell configuration page, as shown in **Figure&nbsp;29**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/29.lte-neighbor-frequency-cell-settings.png"
width="85%"
caption="LTE Neighbor Frequency/Cell Settings"
/>

:::tip 📝 NOTE
Users can add, modify, and delete the LTE neighbor frequency and cell. Up to eight LTE neighbor frequencies and 16 LTE neighbor cells can be set.
:::

2. Input TRSelectionNR. (Range from 0 to 7 (integer))

#### LTE Neighbor Frequency

3. In the neighbor frequency list, click `+` to enter the page for adding an LTE neighbor frequency. The parameter descriptions are given in **Table&nbsp;17**.

<b> Table 17</b>: LTE Neighbor Frequency Parameter Description

| Parameter                | Description                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| CarrierFreq              | The carrier frequency. <br> Range is from 0 to 3279165 (integer).                                                                                                                                                                                                                                                                                                              |
| AllowdMeasBandWidth      | The allowable measurement of bandwidth.                                                                                                                                                                                                                                                                                                                                        |
| PresAntenaPort1          | The current antenna port. <br> Value is 0 or 1.                                                                                                                                                                                                                                                                                                                                |
| Q_OffsetRange            | Indicates the difference in signal level between the serving and neighboring gNBs, as determined by the received signal level at the UE. If the received signal level is better from a neighboring gNB by at least this amount of difference in dB, the UE will reselect the other cell. <br> The range is -24 to +24. A typical value is 0&nbsp;dB.                           |
| WideBandRsrqMeas         | The RSRQ measurement of the bandwidth. <br> Value is 0 or 1.                                                                                                                                                                                                                                                                                                                   |
| CellReselection Priority | Priority of the cell reselection to cells at this frequency. <br> Range is 0 to 7 (integer). A typical value is 4.                                                                                                                                                                                                                                                             |
| ThreshXHigh              | The cell reselection threshold for higher priority inter-band frequency. It represents the access threshold level, at which the UE will leave the serving cell and reselect another cell at the target frequency. This occurs if the target frequency cell has a higher reselection priority than the serving cell. <br> Range is 0 to 31&nbsp;dB. A typical value is 18&nbsp;dB. |
| ThreshXLow               | The cell reselection threshold for lower priority inter-band frequency. It epresents the access threshold level at which the UE will leave the serving cell and reselect another cell at the target frequency. This occurs if the target frequency cell has an absolute priority lower than the serving cell. <br> Range is 0 to 31&nbsp;dB. A typical value is 13&nbsp;dB.      |
| QRxLevMin                | The minimum received signal level at which user equipment (UE) will detect a neighboring gNB’s signal. <br> Range is from -70 to -22.                                                                                                                                                                                                                                          |
| QQualMin                 | The minimum received signal quality. <br> Range is from -34 to -3.                                                                                                                                                                                                                                                                                                             |
| PMaxEUTRA                | The maximum transmit power that UEs in this cell are allowed to use in the uplink. <br> Range is -30 to 33&nbsp;dBm. A typical value is 23&nbsp;dBm.                                                                                                                                                                                                                           |
| PLMNID                   | PLMN ID                                                                                                                                                                                                                                                                                                                                                                        |

#### LTE Neighbor Cell

4. In the neighbor cell list, click `+` to enter the page for adding a LTE neighbor cell, the parameter descriptions are given in **Table&nbsp;18**.

<b> Table 18</b>: LTE Neighbor Cell Parameter Description

| Parameter           | Description                                                                                                                                                                                                                                                                                                                                                                               |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PLMNID              | PLMN ID                                                                                                                                                                                                                                                                                                                                                                                   |
| CID                 | Unique identification number for the Cell.                                                                                                                                                                                                                                                                                                                                                |
| EUTRACarrierARFC    | Frequency point of the neighbor cell.                                                                                                                                                                                                                                                                                                                                                     |
| PhyCellID           | Physical Cell Identifier (PCI) of the neighbor cell.                                                                                                                                                                                                                                                                                                                                      |
| QOffset             | Frequency offset this neighbor cell. Indicates the difference in signal level between the serving and this neighboring eNB, as determined by the received signal level at the UE. If the received signal level is better from a neighboring eNB by at least this amount of difference in dB, the UE will reselect this cell. <br> Range is +24 to -24. <br> A typical value is 0&nbsp;dB. |
| QRxLevMinOffsetCell | Cell minimum received level offset. This parameter represents the cell’s minimum received level offset. It is used only when the UE resides in the VPLMN and cell selection is triggered due to periodic searches for high-priority PLMNS. <br> Range is from 1 to 8.                                                                                                                     |
| QQualMinOffsetCell  | Cell minimum received signal quality offset. This parameter represents the cell’s minimum received signal quality offset. <br> Range is from 1 to 8.                                                                                                                                                                                                                                      |
| CIO                 | Cell Individual Offset (CIO) is this neighbor gNB’s cell offset, which is one of the variables used to determine which gNB will best serve a given UE. <br> Range is +24 to -24. A typical value is 0&nbsp;dB.                                                                                                                                                                            |
| Blacklisted         | Blacklisted <br> Value is 0 or 1.                                                                                                                                                                                                                                                                                                                                                         |
| TAC                 | Tracking Area Code (TAC) of this neighbor cell <br> Range is from 0 to 16777215.                                                                                                                                                                                                                                                                                                          |
| eNB Type            | eNB Type <br> Value is 0 or 1.                                                                                                                                                                                                                                                                                                                                                            |
| eNB ID              | The global identity of the E-UTRAN cell <br> Range is from 0 to 1048575.                                                                                                                                                                                                                                                                                                                  |
| No Remove           | No remove identity <br> ON or OFF.                                                                                                                                                                                                                                                                                                                                                        |

5. Click **Save** to complete the setting of the LTE neighbor frequencies and cells.

### NR Neighbor Frequency and Cell Configuration

1. In the left navigation column, select **NR Setting** and then **NR Freq/Cell** to enter the NR neighbor frequency and cell configuration page, as shown in **Figure&nbsp;30**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/30.nr-neighbor-frequency-cell-settings.png"
width="85%"
caption="NR Neighbor Frequency/Cell Settings"
/>

:::tip 📝 NOTE
Users can add, modify, and delete the NR neighbor frequency and cell.
:::

#### Intra Frequency Measurement

2. In the IntraFREQ Measurement list, click `+` to enter the page for adding an intra frequency measurement, the parameter descriptions are given in **Table&nbsp;19**.

<b> Table 19</b>: Intra Frequency Measurement Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>SSBlocksConsolidationRsrp</td>
			<td>The consolidation of Synchronization Signal and PBCH block (SSB) blocks of Reference Signal Receiving Power (RSRP). <br> Range is from 0 to 127.
      </td>
		</tr>
		<tr>
			<td>SSBlocksConsolidationRsrq</td>
			<td>The consolidation of SSB blocks of Reference Signal Receiving Quality (RSRQ). <br> Range is from 0 to 127.
      </td>
		</tr>
		<tr>
			<td>SSBlocksConsolidationSinr</td>
			<td>The consolidation of SSB blocks of Signal to Interference plus Noise Ratio (SINR). <br> Range is from 0 to 127.
      </td>
		</tr>
		<tr>
			<td>NrofSSBlocksToAverage</td>
			<td>This parameter indicates the signal quality of a cell in NR measurement of SSB. <br> Range is from 2 to 16.
      </td>
		</tr>
		<tr>
			<td>RsrpOffsetSSB</td>
			<td>The SSB offset of RSRP. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
			<td>RsrqOffsetSSB</td>
			<td>The SSB offset of RSRQ. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
			<td>SinrOffsetSSB</td>
			<td>The SSB offset of SINR. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
			<td>RsrpOffsetCsiRs</td>
			<td>The CSI-RS offset of RSRP. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
			<td>RsrqOffsetCsiRs</td>
			<td>The CSI-RS offset of RSRQ. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
		<tr>
			<td>SinrOffsetCsiRs</td>
			<td>The CSI-RS offset of SINR. <br> Range is from 0 to 30.
      </td>
		</tr>
		<tr>
			<td>BitmapType</td>
			<td>Bitmap type <br> Range is 0, 1, 2.
      </td>
		</tr>
		<tr>
			<td>Bitmap</td>
			<td>Bitmap <br> Range is from 0 to 18446744073709551615.
      </td>
		</tr>
		<tr>
			<td>DeriveSSBIndexFromCell</td>
			<td>Whether the frame boundaries of all cells at this frequency point are the same. Value is 0 or 1.
      </td>
		</tr>
		<tr>
			<td>SSBFrequency</td>
			<td>The frequency of SSB. <br> Range is from 0 to 3279165.
      </td>
		</tr>
		<tr>
			<td>SubcarrierSpacing</td>
			<td>The space between subcarriers.
      </td>
		</tr>
		<tr>
			<td>Content Cell</td>
			<td>The period of (SSB-based RRM Measurement Timing Configuration) SMTC.
				<ul>
          <li>sf5</li>
          <li>sf10</li>
          <li>sf20</li>
          <li>sf40</li>
          <li>sf80</li>
          <li>sf160</li>
				</ul>
			</td>
		</tr>
		<tr>
			<td>SmtcOffset</td>
			<td>The offset of SMTC. <br> Range is from 0 to 159.
      </td>
		</tr>
		<tr>
			<td>SmtcDuration</td>
			<td>The duration time of SMTC.
      </td>
		</tr>
		<tr>
			<td>PLMNID</td>
			<td>PLMN ID
      </td>
		</tr>
	</tbody>
</table>

#### Inter Frequency Measurement

3. In the InterFREQ Measurement list, click `+` to enter the page for adding an inter frequency measurement, the parameter descriptions are given in **Table&nbsp;20**.

<b> Table 20</b>: Inter Frequency Measurement Parameter Description

<table>
	<thead>
		<tr>
      <th>Parameter</th>
      <th>Description</th>
		</tr>
	</thead>
	<tbody>
		<tr>
      <td>Enable</td>
      <td>Enables or disables the inter frequency measurement function.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
		</tr>
		<tr>
      <td>SSBFrequency</td>
      <td>The frequency of SSB. <br> Range is from 0 to 3279165.
      </td>
		</tr>
    <tr>
      <td>SubcarrierSpacing</td>
      <td>The space between subcarriers.
      </td>
    </tr>
		<tr>
      <td>SmtcPeriodicity</td>
      <td>The period of (SSB-based RRM Measurement Timing Configuration) SMTC.
        <ul>
          <li>sf5</li>
          <li>sf10</li>
          <li>sf20</li>
          <li>sf40</li>
          <li>sf80</li>
          <li>sf160</li>
        </ul>
      </td>
		</tr>
    <tr>
      <td>SmtcOffset</td>
      <td>The offset of SMTC. <br> Range is from 0 to 159.
      </td>
    </tr>
    <tr>
      <td>SmtcDuration</td>
      <td>The duration time of SMTC.
      </td>
    </tr>
    <tr>
      <td>SSBlocksConsolidationRsrp</td>
      <td>The consolidation of Synchronization Signal and PBCH block (SSB) blocks of Reference Signal Receiving Power (RSRP). <br> Range is from 0 to 127.
      </td>
    </tr>
    <tr>
      <td>SSBlocksConsolidationRsrq</td>
      <td>The consolidation of SSB blocks of Reference Signal Receiving Quality (RSRQ). <br> Range is from 0 to 127.
      </td>
    </tr>
    <tr>
      <td>SSBlocksConsolidationSinr</td>
      <td>The consolidation of SSB blocks of Signal to Interference plus Noise Ratio (SINR). <br> Range is from 0 to 127.
      </td>
    </tr>
    <tr>
      <td>NrofSSBlocksToAverage</td>
      <td>This parameter indicates the signal quality of a cell in NR measurement of SSB. <br> Range is from 2 to 16.
      </td>
    </tr>
    <tr>
      <td>RsrpOffsetSSB</td>
      <td>The SSB offset of RSRP. <br> Range is from 0 to 30.
      </td>
    </tr>
    <tr>
      <td>RsrqOffsetSSB</td>
      <td>The SSB offset of RSRQ. <br> Range is from 0 to 30.
      </td>
    </tr>
    <tr>
      <td>SinrOffsetSSB</td>
      <td>The SSB offset of SINR. <br> Range is from 0 to 30.
      </td>
    </tr>
    <tr>
      <td>RsrpOffsetCsiRs</td>
      <td>The CSI-RS offset of RSRP. <br> Range is from 0 to 30.
      </td>
    </tr>
    <tr>
      <td>RsrqOffsetCsiRs</td>
      <td>The CSI-RS offset of RSRQ. <br> Range is from 0 to 30.</td>
    </tr>
    <tr>
      <td>SinrOffsetCsiRs</td>
      <td>The CSI-RS offset of SINR. <br> Range is from 0 to 30.</td>
    </tr>
    <tr>
      <td>BitmapType</td>
      <td>Bitmap type <br> Values are 0, 1, 2.</td>
    </tr>
    <tr>
      <td>Bitmap</td>
      <td>Bitmap <br> Range is from 0 to 18446744073709551615.</td>
    </tr>
    <tr>
      <td>DeriveSSBIndexFromCell</td>
      <td>Whether the frame boundaries of all cells at this frequency point are the same. <br> Value is 0 or 1.
      </td>
    </tr>
    <tr>
      <td>FreqBandIndicatorNR</td>
      <td>The indicator of NR frequency bandwidth. <br> Range is from 0 to 1024.</td>
    </tr>
    <tr>
      <td>Offset To Point A</td>
      <td>The offset of Point A. <br> Range is from 0 to 2199.</td>
    </tr>
    <tr>
      <td>SSB Sub Carrier Offset</td>
      <td>The sub carrier offset of SSB. <br> Range is from 0 to 31.</td>
    </tr>
    <tr>
      <td>PLMNID</td>
      <td>PLMN ID</td>
    </tr>
	</tbody>
</table>

#### NR Neighbor Cell

4. In the Cell Neigh list, click `+` to enter the page for adding a neighbor cell, the parameter descriptions are given in **Table&nbsp;21**.

<b> Table 21</b>: Neighbor Cell Parameter Description

| Parameter                  | Description                                                                                                                                                                                                                                                                                                                                                                             |
| -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| PLMNID                     | PLMN ID                                                                                                                                                                                                                                                                                                                                                                                 |
| CID                        | Unique identification number for the Cell.                                                                                                                                                                                                                                                                                                                                              |
| NRARFCN                    | Frequency point of the neighbor cell.                                                                                                                                                                                                                                                                                                                                                   |
| SSBFrequency               | The frequency of SSB. <br> Range is from 0 to 3279165.                                                                                                                                                                                                                                                                                                                                       |
| ReferenceSubcarrierSpacing | The space between reference subcarriers. <br> Range is from 0 to 4.                                                                                                                                                                                                                                                                                                                          |
| PhyCellID                  | Physical Cell Identifier (PCI) of the neighbor cell. <br> Range is from 0 to 1007.                                                                                                                                                                                                                                                                                                           |
| QOffset                    | Frequency offset of this neighbor cell. Indicates the difference in signal level between the serving and this neighboring eNB, as determined by the received signal level at the UE. If the received signal level is better from a neighboring eNB by at least this amount of difference in dB, the UE will reselect this cell. <br> Range is +24 to -24. A typical value is 0&nbsp;dB. |
| QRxLevMinOffsetCell        | Cell minimum received level offset. This parameter represents the cell’s minimum received level offset. It is used only when the UE resides in the VPLMN and cell selection is triggered due to periodic searches for high-priority PLMNS. <br> Range is from 1 to 8.                                                                                                                        |
| QQualMinOffsetCell         | Cell minimum received signal quality offset. This parameter represents the cell’s minimum received signal quality offset. <br> Range is from 1 to 8.                                                                                                                                                                                                                                         |
| CIO                        | Cell Individual Offset (CIO) is this neighbor eNB’s cell offset, which is one of the variables used to determine which eNB will best serve a given UE. <br> Range is +24 to -24. A typical value is 0&nbsp;dB.                                                                                                                                                                          |
| Blacklisted                | Blacklisted. Value is 0 or 1.                                                                                                                                                                                                                                                                                                                                                           |
| TAC                        | Tracking Area Code (TAC) of this neighbor cell. <br> Range is from 0 to 16777215.                                                                                                                                                                                                                                                                                                            |
| No Remove                  | No remove identity. ON or OFF.                                                                                                                                                                                                                                                                                                                                                          |
| gNBIdLength                | The length of the gNB ID.                                                                                                                                                                                                                                                                                                                                                               |


5. Click **Save** to complete the setting of the NR neighbor frequencies and cells.

### SIB Configuration

In the left navigation column, select **NR Setting**, and then choose **SIB** to enter the SIB configuration page, as shown in **Figure&nbsp;31**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/31.sib-setting.png"
width="85%"
caption="SIB Setting"
/>

The gNB supports SIB1 to SIB5. The following tables outline the supported SIB parameters and their corresponding descriptions:

<b> Table 22</b>: SIB1 Parameter Description

| Parameter       | Description                                                                                                                                                                                                                                                      |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| QRxLevMinSIB1   | The minimum received level of SIB1. <br> Range is from -70 to -22.                                                                                                                                                                                                    |
| Qqualminoffset  | Cell minimum received signal quality offset. This parameter represents the cell’s minimum received signal quality offset. <br> Range is from 1 to 8.                                                                                                                  |
| QRxLevMinOffset | Cell minimum received level offset. This parameter represents the cell’s minimum received level offset. It is used only when the UE resides in the VPLMN and cell selection is triggered due to periodic searches for high-priority PLMNS. <br> Range is from 1 to 8. |
| QQualMinSIB1    | The minimum received signal quality of SIB1. <br> Range is from -43 to -12.                                                                                                                                                                                           |

<b> Table 23</b>: SIB2 Parameter Description

| Parameter               | Description                                                                                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Enable                  | Enables or disables SIB2.                                                                                                                                                                                                                                                                                                             |
| Qhyst                   | Delay time for reselection. In general the value of the parameter is 2. <br> Range is from 0 to 15. <br> This parameter will overestimate the signal strength of the serving cell to delay the cell reselection.                                                                                                                      |
| QRxLevMinSIB2           | The minimum received level of SIB2. <br> Range is from -70 to -22.                                                                                                                                                                                                                                                                    |
| SIntraSearchP           | The threshold of intra frequency measurement. <br> Range is from 0 to 31.                                                                                                                                                                                                                                                             |
| TReselectionNR          | Cell reselection timer for NR. <br> Range is from 0 to 7.                                                                                                                                                                                                                                                                             |
| CellReselectionPriority | Priority of the cell reselection to cells at this frequency. <br> Range is 0 to 7 (integer).                                                                                                                                                                                                                                          |
| ThreshServingLowP       | The lower priority reselection threshold of serving frequency point. This parameter indicates the threshold when the serving frequency point moves to a lower priority inter-frequency or an Inter-RAT. It applies to the scenario when the UE moves to a lower priority inter-frequency or an Inter-RAT. <br> Range is from 0 to 31. |
| DeriveSSBIndexFromCell  | Whether the frame boundaries of all cells at this frequency point are the same. Value is 0 or 1.                                                                                                                                                                                                                                      |
| SIB2 valueTag           | The tag of SIB2 value. <br> Range is from 0 to 31.                                                                                                                                                                                                                                                                                    |

<b> Table 24</b>: SIB3 Parameter Description

| Parameter     | Description                                        |
| ------------- | -------------------------------------------------- |
| Enable        | Enables or disables SIB3                           |
| SIB3 valueTag | The tag of SIB3 value. <br> Range is from 0 to 31. |

<b> Table 25</b>: SIB4 Parameter Description

| Parameter     | Description                                   |
| ------------- | --------------------------------------------- |
| Enable        | Enables or disables SIB3                      |
| SIB3 valueTag | The tag of SIB3 value. Range is from 0 to 31. |

<b> Table 26</b>: SIB5 Parameter Description

| Parameter     | Description                                        |
| ------------- | -------------------------------------------------- |
| Enable        | Enables or disables SIB3                           |
| SIB3 valueTag | The tag of SIB3 value. <br> Range is from 0 to 31. |

### ANR Configuration

1. In the left navigation column, select **NR Setting** and then **ANR** to enter the ANR configuration page, as shown in **Figure&nbsp;32**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/32.anr-settings.png"
width="85%"
caption="ANR Settings"
/>

2. Input ANR parameters, the parameter descriptions are shown in **Table&nbsp;27**.

<b> Table 27</b>: ANR Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
	<tbody>
    <tr>
      <td>Enable</td>
      <td>Enables or disables the function.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>InterFeqEnable</td>
      <td>Enables or disables the inter-frequency.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>EUTRANEnable</td>
      <td>Enables or disables the EUTRAN.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>BiNRCellEnable</td>
      <td>Enables or disables the BiNR cell.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>MRTriggerType</td>
      <td>MR trigger type
        <ul>
          <li>Event</li>
          <li>Period</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>AbsoluteThreshold</td>
      <td>Absolute threshold <br> Range is from 0 to 127.
      </td>
    </tr>
    <tr>
      <td>RelativeThreshold</td>
      <td>Relative threshold <br> Range is from -30 to 30.
      </td>
    </tr>
    <tr>
      <td>AbsEnable</td>
      <td>Enables or disables the Abs.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>KPIPeriod</td>
      <td>The period of KPI. <br> Range is from 0 to 3279165.
      </td>
    </tr>
    <tr>
    <td>AutoAdjustEnable</td>
    <td>Enables or disables the auto adaptive.
      <ul>
        <li>ON: Enable</li>
        <li>OFF: Disable</li>
      </ul>
    </td>
    </tr>
    <tr>
    <td>AutoRemoveEnable</td>
      <td>Enables or disables the auto remove.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
    </td>
    </tr>
    <tr>
      <td>AutoRemovePeriod</td>
      <td>The period of auto remove. <br> Range is from 0 to 3279165.
      </td>
    </tr>
    <tr>
      <td>AutoRemoveMaxCell</td>
      <td>The maximum cells of auto remove. <br> Range is from 0 to 65535
      </td>
    </tr>
    <tr>
      <td>MaxHOtimes</td>
      <td>The maximum handover time. <br> Range is from 0 to 3279165.
      </td>
    </tr>
    <tr>
      <td>MaxHOSuccess</td>
      <td>The maximum successful handover time. <br> Range is from 0 to 100.
      </td>
    </tr>
  </tbody>
</table>

3. Click **Save** to complete the ANR setting.
4. Input XN parameters, the parameter descriptions are shown in **Table&nbsp;28**.

<b> Table 28</b>: XN Parameter Description

<table>
	<thead>
		<tr>
			<th>Parameter</th>
			<th>Description</th>
		</tr>
	</thead>
  <tbody>
    <tr>
      <td>PLMNID</td>
      <td>PLMN ID</td>
    </tr>
    <tr>
      <td>RemoteAddress</td>
      <td>The remote IP address.</td>
    </tr>
    <tr>
      <td>XnLinkEnable</td>
      <td>Enables or disables the XN link.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>XnHoEnable</td>
      <td>Enables or disables the XN handover.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>BlackList IP</td>
      <td>IP addresses of the blacklist.</td>
    </tr>
  </tbody>
</table>

### XN Configuration

1. In the left navigation column, select **NR Setting** and then **XN** to enter the XN configuration page, as shown in **Figure&nbsp;33**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/33.xn-settings.png"
width="85%"
caption="XN Settings"
/>

2. In the XN list, click `+` to pop up the XN configuration parameters.
4. Click **OK** to complete the XN setting.
5. In the XN black list, click `+` to pop up the black configuration parameter.
6. Input the IP addresses of the blacklist.
7. Click **Save** to complete the blacklist setting.


### PCI Configuration

1. In the left navigation column, select **NR Setting** and then **PCI** to enter the PCI configuration page, as shown in **Figure&nbsp;34**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/34.pci-setting.png"
width="85%"
caption="PCI Setting"
/>

2. Select whether enable the PCI conflict detection function.
3. Click **Save** to complete the PCI setting.

### Mobility Parameter Configuration

In the left navigation column, select **NR Setting** and then **Mobility Parameter** to enter the mobility parameter configuration page.
The Mobility Parameter menu pertains to how roaming UE sessions are handled between different gNBs in the same service area. When a UE is actively connected to a gNB it is referred to as the serving gNB or cell. The other gNBs in the area are referred to as either neighbor or target gNBs or cells.

The process of a device moving from cell to cell and changing over from its serving gNB to a neighbor (target) gNB is called handoff or handover. The UE exchanges information with its serving gNB to perform cell selection and reselection based on parameters which you will set for each gNB.

#### Event Threshold

The A1 event is triggered when the serving cell’s Reference Signal Received Power (RSRP) is better than the A1 threshold. The A1 event can be used to turn off certain inter-cell measurements. The conditions for entering A1 event are shown in **Formula&nbsp;1**, and the conditions for leaving A1 event are shown in **Formula&nbsp;2**.

**Formula&nbsp;1**: <br>
`(Ms - Hys) < Thresh`

**Formula&nbsp;2**: <br>
`(Ms + Hys) < Thresh`

:::tip 📝 NOTE
***Ms*** indicates the measurement results of the serving cell with no offset. ***Hys*** indicates the hysteresis parameter of the event. Thresh indicates the preset
threshold.
:::

1. In the A1 list, click `+` to display A1 event configuration parameters, which are shown in **Table&nbsp;29**.

<b> Table 29</b>: A1 Event Threshold Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>A1</td>
      <td>Enables or disables the A1 event.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Threshold Trigger Type</td>
      <td>The trigger type of the A1 threshold, including RSRP, RSRQ, and SINR.</td>
    </tr>
    <tr>
      <td>A1 Threshold RSRP</td>
      <td>The RSRP threshold value for triggering A1 event. <br> Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>A1 Threshold RSRQ</td>
      <td>The RSRQ threshold value for triggering A1 event. <br> Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>A1 Threshold SINR</td>
      <td>The SINR threshold value for triggering A1 event. <br> Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>Report On leave</td>
      <td>Indicator of A1 event on leave.
      It indicates whether the UE initializes the measurement reporting process when cells in the Triggered List are in leaving state.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Hysteresis</td>
      <td>This parameter refers to the hysteresis (historical records) of the handover measurement event. The value is used to avoid the frequent triggering of cell handover evaluation due to the fluctuation in wireless signals. This setting tells the UE, if you hear another gNB with at least this amount of dB better, initiate a handover. The lower the number the sooner the handover is initiated. If set too low, it may cause the UE to ping-pong between gNBs. <br> Range is from 0 to 30&nbsp;dB.
      </td>
    </tr>
    <tr>
      <td>Max Report Cells</td>
      <td>The maximum cells of reported. <br> Range is from 0 to 8.</td>
    </tr>
    <tr>
      <td>Measure Purpose</td>
      <td>Indicates the usage of configuring the A1 event. <br> Range is from 0 to 100.
        <ol>
          <li>Inter-frequency measurement </li>
          <li>Inter-RAT EUTRA measurement. </li>
        </ol>
      The customized measurement event is from 10.
      </td>
    </tr>
    <tr>
      <td>Report Amount</td>
      <td>The number of report. <br> Range is from 1 to 100.</td>
    </tr>
    <tr>
      <td>MaxNrofRSIndexToReport</td>
      <td>The maximum number of RS measurement reports. <br> Range is from 1 to 32.</td>
    </tr>
    <tr>
      <td>Report Interval</td>
      <td>The report interval of A1 event triggering report.</td>
    </tr>
    <tr>
      <td>Report Quantity</td>
      <td>The quantity of the measurement report.</td>
    </tr>
    <tr>
      <td>Report Quantity RS IDX</td>
      <td>The RS measurement report of the A1 event, including RSRP, RSRQ, and SINR.</td>
    </tr>
    <tr>
      <td>Time To Trigger</td>
      <td>Trigger time</td>
    </tr>
    <tr>
      <td>RS Type</td>
      <td>RS type, including SSB and CSI-RS.</td>
    </tr>
    <tr>
      <td>Include Beam Measurements</td>
      <td>Enables or disables the beam measurement indicator.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>PLMN</td>
      <td>PLMN ID</td>
    </tr>
  </tbody>
</table>

2. Click **Save** to complete the A1 event threshold setting.

#### A2 Event Threshold


The A2 event is triggered when the serving cell’s Reference Signal Received Power (RSRP) is better than the A2 threshold.
1. In the A2 list, click `+` to display A2 event configuration parameters.
2. Input the value of A2 event, which is the same as A1 event, refer to **Table&nbsp;29**.
3. Click **Save** to complete the A2 event threshold setting.

#### A3 Event Threshold

The A3 event is triggered when the neighbor cell becomes better than the serving cell by as much as the offset value. The offset can be either positive or negative.

1. In the A3 list, click `+` to display A3 event configuration parameters.
2. Input the value of A3 event, which is the same as A1 event, refer to **Table&nbsp;29**.
3. Click **Save** to complete the A3 event threshold setting.

#### A4 Event Threshold

The A4 event is triggered when the neighbor cell becomes better than the serving cell by as much as the relative threshold value. A4 event is used to the handover based on coverage of intra-frequency and inter-frequency.

1. In the A4 list, click `+` to display A4 event configuration parameters.
2. Input the value of A4 event, which is the same as A1 event, refer to **Table&nbsp;29**.
3. Click **Save** to complete the A4 event threshold setting.

#### A5 Event Threshold

The A5 event is triggered when the serving cell becomes worse than Threshold 1 while a neighbor cell becomes better than Threshold 2. A5 event can control the edge of handover out of the serving cell and the edge of handover in of the neighbor cell.

1. In the A5 list, click `+` to display A5 event configuration parameters.
2. Input the value of A5 event, which is the same as A1 event, refer to **Table&nbsp;29**.
3. Click **Save** to complete the A4 event threshold setting.

#### B1 Event Threshold

The B1 Event Thresholds pertains the neighbor is better than the absolute threshold, which is used to measure the RAT cell with high priority.

1. In the B1 list, click `+` to display B1 event configuration parameters, which are shown in **Table&nbsp;30**.

<b> Table 30</b>: B1 Event Threshold Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>B1</td>
      <td>Enables or disables the B1 event.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Threshold Trigger Type</td>
      <td>The trigger type of the B1 threshold, including RSRP, RSRQ, and SINR.</td>
    </tr>
    <tr>
      <td>B1 Threshold1 EUTRA RSRP</td>
      <td>The RSRP threshold value for triggering B1 event. <br> Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>B1 Threshold1 EUTRA RSRQ</td>
      <td>The RSRQ threshold value for triggering B1 event. RSRQ Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>B1 Threshold1 EUTRA SINR</td>
      <td>The SINR threshold value for triggering B1 event. <br> Range is from 0 to 127.</td>
    </tr>
    <tr>
      <td>Hysteresis</td>
      <td>This parameter refers to the hysteresis (historical records) of the handover measurement event. The value is used to avoid the frequent triggering of cell handover evaluation due to the fluctuation in wireless signals. This setting tells the UE, if you hear another gNB with at least this amount of dB better, initiate a handover. The lower the number the sooner the handover is initiated. If set too low, it may cause the UE to ping-pong between gNBs. <br> Range is from 0 to 30&nbsp;dB.
    </td>
    </tr>
    <tr>
      <td>Max Report Cells</td>
      <td>The maximum cells of reported. <br> Range is from 0 to 8.</td>
    </tr>
    <tr>
      <td>Measure Purpose</td>
      <td>Indicates the usage of configuring the B1 event. <br> Range is from 0 to 100.
        <ol>
          <li>Inter-frequency measurement</li>
          <li>Inter-RAT EUTRA measurement.</li>
        </ol>
        The customized measurement event is from 10.
      </td>
    </tr>
    <tr>
      <td>Report Amount</td>
      <td>The number of report. <br> Range is from 1 to 100.</td>
    </tr>
    <tr>
      <td>Report Interval</td>
      <td>The report interval of B1 event triggering report</td>
    </tr>
    <tr>
      <td>Time To Trigger</td>
      <td>Length of time the target cell RSRP value is better than the serving cell before the UE initiates a handover request.
      </td>
    </tr>
    <tr>
      <td>Report Quantity</td>
      <td>The RS measurement report of the B1 event, including RSRP, RSRQ, and SINR.</td>
    </tr>
    <tr>
      <td>Report On leave</td>
      <td>Enables or disables the beam measurement indicator.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>PLMN</td>
      <td>PLMN ID</td>
    </tr>
  </tbody>
</table>


2. Click **Save** to complete the B1 event threshold setting.

#### B2 Event Threshold

The B2 Event Thresholds pertains only to TD-SCDMA and GSM adjacent cells, not to adjacent LTE cells.

1. In the B2 list, click `+` to display B2 event configuration parameters.
2. Input the value of B2 event, which is the same as B1 event, refer to **Table&nbsp;30**.
3. Click **Save** to complete the B2 event threshold setting.

### Period Measurement Parameter

1. In the Period Measure list, click `+` to display period measurement configuration parameters, which are shown in **Table&nbsp;31**.

<b> Table 31</b>: Period Measurement Parameter Description

| Parameter        | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| Report Quantity  | The RS measurement report of the B1 event, including RSRP, RSRQ, and SINR. |
| Max Report Cells | The maximum cells of reported. <br> Range is from 0 to 8.                  |
| Report Interval  | The report interval of A1 event triggering report                          |
| Report Amount    | The number of report. <br> Range is from 1 to 100.                         |

2. Click **Save** to complete the period measurement setting


#### Advanced Parameter Configuration

On the left navigation column, select **NR Setting** and then **Advanced** to enter the advanced parameter configuration page.

#### CU

1. Click `+` in the front of **CU** to display CU configuration parameters, as shown in **Table&nbsp;32**.

<b> Table 32</b>: CU Parameter Description

| Parameter     | Description                                                                                                                        |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| NR T300       | RRC timer. When the gNB receives the RRCSetupRequest message, the timer starts up.                                                 |
| NR T301       | RRC timer. When the gNB receives the RRCReestabilshmentRequest message, the timer starts up.                                       |
| NR T304       | RRC timer. When the gNB receives the RRC reconfiguration message with synchronization, the timer starts up.                        |
| NR T310       | RRC timer. When the gNB receives the continuous “**out-of-sync**” message from the bottom layer, the timer starts up.              |
| NR T311       | RRC timer. When the RRC reestablishment is triggered, the timer starts up.                                                         |
| NR N310       | This parameter is used to indicate that the Pcell receives the maximum continuous “**out-of-sync**” message from the bottom layer. |
| NR N311       | This parameter is used to indicate that the Pcell receives the maximum continuous “**in-sync**” message from the bottom layer.     |
| NR T319       | RRC timer. When the gNB receives the RRCResumeRequest message, the timer starts up.                                                |
| F1ap Local IP | The CU IP address in control plane of F1 interface.                                                                                |
| F1U IP        | The CU IP address in user plane of F1 interface.                                                                                   |
| NGAP Local IP | The local CU IP address of the NG interface. Click `+` to all multiple IP addresses.                                               |
| NGU IP        | The IP address of the NGU. Click `+` to all multiple IP addresses.                                                                 |
| AMF IP        | The peer AMF IP address of the NG interface. Click `+` to all multiple IP addresses.                                               |

2. Click **Save** to complete the CU setting.

#### DU

1. Click `+` in the front of **DU** to display DU configuration parameters, as shown in **Table&nbsp;33**.

<b> Table 33</b>: DU Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Offset To Point A</td>
      <td>The offset to point A. The unit is RB. <br> Range is from 0 to 2199.</td>
    </tr>
    <tr>
      <td>SSB Sub Carrier Offset</td>
      <td>The offset of SSB sub carrier. <br> Range is from 0 to 31.</td>
    </tr>
    <tr>
      <td>ReferenceSubcarrierSpacing</td>
      <td>The space of reference sub carrier. <br> Range is from 0 to 4.</td>
    </tr>
    <tr>
      <td>PAT1 DL UL Trans Periodicity</td>
      <td>Subframe ratio. The Uplink and downlink transmission period of PAT1. <br> Range is from 0 to 7.</td>
    </tr>
    <tr>
      <td>PAT1 of Downlink Slots</td>
      <td>Subframe ratio. The downlink time slot configuration of PAT1. <br> Range is from 0 to 320.</td>
    </tr>
    <tr>
      <td>PAT1 of Downlink Symbols</td>
      <td>Subframe ratio. The special time slot downlink symbol configuration of PAT1. <br> Range is from 0 to 13.</td>
    </tr>
    <tr>
      <td>PAT1 of Uplink Slots</td>
      <td>Subframe ratio. The uplink time slot configuration of PAT1. <br> Range is from 0 to 320.
      </td>
    </tr>
    <tr>
      <td>PAT1 of Uplink Symbols</td>
      <td>Subframe ratio. The special time slot uplink symbol configuration of PAT1. <br> Range is from 0 to 13.</td>
    </tr>
    <tr>
      <td>PAT2 DL UL Trans Periodicity</td>
      <td>Subframe ratio. The Uplink and downlink transmission period of PAT2. <br> Range is from 0 to 7.</td>
    </tr>
    <tr>
      <td>PAT2 of Downlink Slots</td>
      <td>Subframe ratio. The downlink time slot configuration of PAT2. <br> Range is from 0 to 320.</td>
    </tr>
    <tr>
      <td>PAT2 of Downlink Symbols</td>
      <td>Subframe ratio. The special time slot downlink symbol configuration of PAT2. <br> Range is from 0 to 13.</td>
    </tr>
    <tr>
      <td>PAT2 of Uplink Slots</td>
      <td>Subframe ratio. The uplink time slot configuration of PAT1. <br> Range is from 0 to 320.</td>
    </tr>
    <tr>
      <td>PAT2 of Uplink Symbols</td>
      <td>Subframe ratio. The special time slot uplink symbol configuration of PAT1. <br> Range is from 0 to 13.</td>
    </tr>
    <tr>
      <td>Max DL HARQ ReTX</td>
      <td>The maximum number of downlink HARQ retransmission. <br> Range is from 0 to 4.</td>
    </tr>
    <tr>
      <td>DL LA</td>
      <td>Downlink AMC auto adaptive switch.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Max UL HARQ ReTX</td>
      <td>The maximum number of uplink HARQ retransmission. <br> Range is from 0 to 4.</td>
    </tr>
    <tr>
      <td>UL LA</td>
      <td>Uplink AMC auto adaptive switch
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>CsiRsReporting</td>
      <td>CSI report switch.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DU F1AP Local IP</td>
      <td>The DU IP address in control plane of F1 interface.</td>
      </tr>
    <tr>
      <td>DU F1U IP</td>
      <td>The DU IP address in user plane of F1 interface.</td>
      </tr>
    <tr>
      <td>DU F1AP Remote IP</td>
      <td>The Remote IP address in control plane of F1 interface.</td>
      </tr>
    <tr>
      <td>numForceGrant</td>
      <td>(Reserved)</td>
    </tr>
    <tr>
      <td>HealthTimeInterval</td>
      <td>(Reserved)</td>
    </tr>
    <tr>
      <td>PerfOptFlag</td>
      <td>(Reserved)</td>
    </tr>
    <tr>
      <td>CalcPaddingRateFlag</td>
      <td>Calculate Padding rate flag</td>
    </tr>
  </tbody>
</table>

2. Click **Save** to complete the DU setting.

#### SSB

1. Click `+` in the front of **SSB** to display SSB configuration parameters, as shown in **Table&nbsp;34**.

<b> Table 34</b>: PCI Range Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>SSB Periodicity</td>
      <td>The period of SSB. The unit is ms. <br> Range is from 0 to 5</td>
    </tr>
    <tr>
      <td>SSB Power</td>
      <td>The transmission power of SSB. <br> Range is from -60 to 50.</td>
    </tr>
    <tr>
      <td>SSB Absolute Freq</td>
      <td>The frequency point of SSB. <br> Range is from 0 to 3279165.</td>
    </tr>
    <tr>
      <td>SsbResourceReserved</td>
      <td>The reserved resource of SSB.
      <ul>
        <li>ON: Enable</li>
        <li>OFF: Disable</li>
      </ul>
      </td>
    </tr>
  </tbody>
</table>

2. Click **Save** to complete the SSB setting.

#### UL RSSI Measurement

:::tip 📝 NOTE
In this software version, UL RSSI is not supported.
:::


#### DRX

1. Click `+` in the front of **DRX** to display Discontinuous reception (DRX) configuration parameters, as shown in **Table&nbsp;35**.

<b> Table 35</b>: DRX Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>DRXOnDurationTimer</td>
      <td>The duration timer of DRX.</td>
    </tr>
    <tr>
      <td>DRXInactivityTimer</td>
      <td>The inactivity timer of DRX.</td>
    </tr>
    <tr>
      <td>DRXHarqRttTimerDL</td>
      <td>The number of symbols received in the downlink BWP transfer block. The retransmission of the downlink process will be scheduled after this timer ending. The scheduling window is within drX-RetransmissionTimerdl. <br> Range is from 0 to 56.
      </td>
    </tr>
    <tr>
      <td>DRXHarqRttTimerUL</td>
      <td>The number of symbols received in the uplink BWP transfer block. The retransmission of the uplink process will be scheduled after this timer ending. The scheduling window is within drX-RetransmissionTimerUL. When the last symbol of PUSCH is sent, the drx-HARQ-RTT-TimerUL starts up. <br> Range is from 0 to 56.
      </td>
    </tr>
    <tr>
      <td>DRXRetransmissionTimerDL</td>
      <td>The downlink retransmission timer of DRX.</td>
    </tr>
    <tr>
      <td>DRXRetransmissionTimerUL</td>
      <td>The uplink retransmission timer of DRX.</td>
    </tr>
    <tr>
      <td>LongDRXCycle</td>
      <td>Long DRX period</td>
    </tr>
    <tr>
      <td>DRXStartOffset</td>
      <td>Specify the start sub frame of the DRX period. <br> Range is from 0 to 10239.</td>
    </tr>
    <tr>
      <td>ShortDRXCycle</td>
      <td>Short DRX period</td>
    </tr>
    <tr>
      <td>ShortCycleTimer</td>
      <td>The timer of DRX short period. <br> Range is from 0 to 16.
        <ul>
          <li>If the value is set to 1, it means 1 * ShortDRXCycle.</li>
          <li>If the value is set to 1, it means 2 * ShortDRXCycle And so forth.</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>DRXSlotOffset</td>
      <td>DRX Slot offset <br> Range is from 0 to 31.</td>
    </tr>
  </tbody>
</table>

2. Click **Save** to complete the DRX setting.

#### Voice

1. Click `+` in the front of **Voice** to display the voice configuration parameters, as shown in **Table&nbsp;36**.

<b> Table 36</b>: Voice Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>VONR</td>
      <td>Voice Over NR
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>EPS Fallback Type</td>
      <td>EPS fallback type, including five types.
        <ul>
          <li>EPS Fallback Blind Red</li>
          <li>EPS Fallback Meas Red</li>
          <li>EPS Fallback Meas HO</li>
          <li>PS Meas Red</li>
          <li>PS Meas HO</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

2. Click **Save** to complete the voice setting.

#### GNB

1. Click `+` in the front of **GNB** to display the gNB configuration parameters, as shown in **Table&nbsp;37**.

<b> Table 37</b>: GNB Parameter Description

| Parameter     | Description                                        |
| ------------- | -------------------------------------------------- |
| GNB ID Length | The length of GNB ID. <br> Range is from 22 to 32. |
| GNB ID        | GNB ID <br> Range is from 0 to 4294967295.         |
| GNB Name      | GNB name <br> Range is from 0 to 150 bytes.        |

2. Click **Save** to complete the gNB setting.

#### Multi PLMN

1. Click `+` in the front of **Multi PLMN** to display multi PLMN configuration parameters.
2. Whether enable multi PLMN.
3. Click **Save** to complete the multi PLMN setting.

### PLMN Configuration

1. In the left navigation column, select **NR Setting** and then **PLMN** to enter the PLMN configuration page, as shown in **Figure&nbsp;35**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/35.plmn-settings.png"
width="85%"
caption="PLMN Settings"
/>

2. Click `+` to display PLMN configuration parameters, as shown in **Table&nbsp;38**.

<b> Table 38</b>: PLMN Parameter Description

| Parameter | Description                                  |
| --------- | -------------------------------------------- |
| Cell ID   | Cell ID <br> Range is from 0 to 68719476735. |
| TAC       | TAC <br> Range is from 0 to 16777215.        |
| Ranac     | Ranac                                        |

3. Click **Save** to complete the PLMN setting.

### BWP Configuration

:::tip 📝 NOTE
In this software version, BWP is not supported.
:::

### SCS Configuration

1. In the left navigation column, select **NR Setting** and then **SCS** to enter the Sub-carrier Space (SCS) configuration page, as shown in **Figure&nbsp;36**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/36.scs-setting.png"
width="85%"
caption="SCS Setting"
/>

2. In the DL SCS list, click `+` to display the downlink SCS parameters, whose descriptions are shown in **Table&nbsp;39**.

<b> Table 39</b>: DL SCS Parameter Description

| Parameter         | Description                                                                         |
| ----------------- | ----------------------------------------------------------------------------------- |
| SubcarrierSpacing | The sub carrier spacing is 30&nbsp;kHz.                                             |
| CarrierBandwidth  | The bandwidth of the carrier. <br>  Values are 25, 52, 79, 106, 133, 160, 216, 273. |

:::tip 📝 NOTE
The configuration of UL SCS is the same as DL SCS configuration.
:::

3. Click **Save** to complete the uplink/downlink SCS setting.

### CSI Configuration

1. In the left navigation column, select **NR Setting** and then **CSI** to enter the CSI configuration page, as shown in **Figure&nbsp;37**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/37.csi-setting.png"
width="85%"
caption="CSI Setting"
/>

2. Click `+` to display CSI configuration parameters, the configuration parameter description is shown in **Table&nbsp;40**.

<b> Table 40</b>: CSI Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Parameter</td>
      <td>Description</td>
    </tr>
    <tr>
      <td>Csi Report Periodicity</td>
      <td>CSI report period</td>
    </tr>
    <tr>
      <td>Nr Subband Size</td>
      <td>NR sub-band size</td>
    </tr>
    <tr>
      <td>Csi Report Config Type</td>
      <td>The configuration type of the CSI report.
        <ul>
          <li>Periodic</li>
          <li>SemiPersistentOnPUCCH</li>
          <li>SemiPersistentOnPUSCH</li>
          <li>Aperiodic</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Csi Report Quantity</td>
      <td>CSI report quantity</td>
    </tr>
    <tr>
      <td>Freq Config Cqi Format Ind</td>
      <td>CQI format
        <ul>
          <li>widebandCQI</li>
          <li>subbandCQI</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Freq Config Pmi Format Ind</td>
      <td>PMI format
        <ul>
          <li>widebandPMI</li>
          <li>subbandPMI</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

3. Click **Save** to complete the CSI setting.

### SRS Configuration

:::tip 📝 NOTE
In this software version, SRS is not supported.
:::


### PUSCH Configuration

1. In the left navigation column, select **NR Setting** and then **PUSCH** to enter the PUSCH page, as shown in **Figure&nbsp;38**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/38.pusch-setting.png"
width="85%"
caption="PUSCH Setting"
/>

2. Input the value of **UlMcsLimit**. Range is from 0 to 28.
3. Click **Save** to complete the PUSCH setting.

### PDSCH Configuration

1. In the left navigation column, select **NR Setting** and then **PDSCH** to enter the PDSCH page, as shown in **Figure&nbsp;39**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/39.pdsch-setting.png"
width="85%"
caption="PDSCH Setting"
/>

2. Input PDSCH configuration parameters, whose descriptions are shown in **Table&nbsp;41**.

<b> Table 41</b>: PDSCH Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Power Control</td>
      <td>Enables or disables the power control function.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Power Control Value Start</td>
      <td>The start value of power control. <br> Range is from -6 to 6.</td>
    </tr>
    <tr>
      <td>Power Control Value End</td>
      <td>The end value of power control. <br> Range is from -6 to 6.</td>
    </tr>
    <tr>
      <td>DIMcsLimit</td>
      <td>The limit of uplink MCS. <br> Range is from 0 to 28.</td>
    </tr>
  </tbody>
</table>

3. Click **Save** to complete the PDSCH setting.

### PUCCH Configuration

1. In the left navigation column, select **NR Setting** and then **PUCCH** to enter the PUCCH page, as shown in **Figure&nbsp;40**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/40.pucch-setting.png"
width="85%"
caption="PUCCH Setting"
/>

2. Input PUCCH configuration parameters, which description is shown in **Table&nbsp;42**.

<b> Table 42</b>: PUCCH Parameter Description

<table>
  <thead>
    <tr>
    <th>Parameter</th>
    <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>ClpcPucchEnable</td>
      <td>Enables or disables Clpc PUCCH.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ClpcPucchSinrEnable</td>
      <td>Enables or disables Clpc PUCCH SINR.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>ClpcPucchBlerEnable</td>
      <td>Enables or disables Clpc PUCCH BLER.
        <ul>
          <li>ON: Enable</li>
          <li>OFF: Disable</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

3. Click **Save** to complete the PUCCH setting.

### QoS Configuration

1. In the left navigation column, select **NR Setting** and then **QoS** to enter the QoS configuration page, as shown in **Figure&nbsp;41**.

<rk-img
src="/assets/images/5g/all-in-one-5g/user-manual-nr/41.qos-setting.png"
width="85%"
caption="QoS Setting"
/>

2. In the QoS list, click `+` to display the QoS configuration parameters, whose descriptions are shown in **Table&nbsp;43**.

<b> Table 43</b>: QoS Parameter Description

<table>
  <thead>
    <tr>
      <th>Parameter</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Enable</td>
      <td>Enables or disables QoS function.</td>
    </tr>
    <tr>
      <td>MappingDrbIndex</td>
      <td>Index</td>
    </tr>
    <tr>
      <td>5QI</td>
      <td>5QI <br> Range is from 1 to 255.</td>
    </tr>
    <tr>
      <td>Type</td>
      <td>GBR <br> Non-GBR</td>
    </tr>
    <tr>
      <td>Priority</td>
      <td>Priority <br> Range is from 1 to 16.</td>
    </tr>
    <tr>
      <td>MinBr</td>
      <td>MinBr</td>
    </tr>
    <tr>
      <td>IsDefault</td>
      <td>Whether the QoS is default.</td>
    </tr>
    <tr>
      <td>UeInactivityTimerConifg</td>
      <td>UE inactivity Timer</td>
    </tr>
    <tr>
      <td>TReorderingPdcp</td>
      <td>TReordering PDCP <br> Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>TReorderingUE</td>
      <td>TReordering UE Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>DiscardTimer</td>
      <td>Discard timer</td>
    </tr>
    <tr>
      <td>StatusReportRequired</td>
      <td>Enables or disables report status.</td>
    </tr>
    <tr>
      <td>PdcpSnSizeUl</td>
      <td>Uplink PDCP SN size</td>
    </tr>
    <tr>
      <td>PdcpSnSizeDl</td>
      <td>Downlink PDCP SN size</td>
    </tr>
    <tr>
      <td>Dscp</td>
      <td>DSCP</td>
    </tr>
    <tr>
      <td>RlcMode</td>
      <td>RLC mode.UMAM</td>
    </tr>
    <tr>
      <td>SnFieldLengthAmDl</td>
      <td>Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>SnFieldLengthAmUl</td>
      <td>Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>SnFieldLengthUmDl</td>
      <td>Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>SnFieldLengthUmUl</td>
      <td>Range is from 0 to 35.</td>
    </tr>
    <tr>
      <td>UlConfig</td>
      <td>Uplink configuration <br> Values are 0, 1, 2.
      </td>
    </tr>
    <tr>
      <td>EnableRohc</td>
      <td>Enables or disables ROHC.</td>
    </tr>
    <tr>
      <td>RohcProfile0x0001</td>
      <td>ROHC profile</td>
    </tr>
    <tr>
      <td>RohcProfile0x0002</td>
      <td>ROHC profile</td>
    </tr>
    <tr>
      <td>RohcProfile0x0006</td>
      <td>ROHC profile</td>
    </tr>
    <tr>
      <td>PdcpDuplicationActivated</td>
      <td></td>
    </tr>
    <tr>
      <td>PrimaryPathDl</td>
      <td>Downlink primary path</td>
    </tr>
    <tr>
      <td>PrimaryPath</td>
      <td>Whether the path is primary</td>
    </tr>
    <tr>
      <td>UlDataSplitThreshold</td>
      <td>Uplink data split threshold</td>
    </tr>
    <tr>
      <td>DlDataSplitThreshold</td>
      <td>Downlink data split threshold</td>
    </tr>
    <tr>
      <td>AllowedIntegrityAlgo</td>
      <td>Allowed integrity algorithm</td>
    </tr>
    <tr>
      <td>LongDrxCycle</td>
      <td>Long DRX cycle</td>
    </tr>
    <tr>
      <td>ShortDrxCycle</td>
      <td>Short DRX cycle</td>
    </tr>
    <tr>
      <td>ShortDRXcycle</td>
      <td>Short DRX cycle timer</td>
    </tr>
    <tr>
      <td>DrbInactivityTimerConfig</td>
      <td>DRB inactivity timer</td>
    </tr>
  </tbody>
</table>

3. In the SST list, click to display the SST configuration parameters, whose descriptions are shown in **Table&nbsp;44**.

<b> Table 44</b>: SST Parameter Description

| Parameter           | Description                                                 |
| ------------------- | ----------------------------------------------------------- |
| SST                 | Enables or disables SST.                                    |
| SstResourceType     | SST source type                                             |
| MaxResourceReserved | The maximum reserved resource. <br> Range is from 0 to 273. |
| MinResourceReserved | The minimum reserved resource. <br> Range is from 0 to 273. |

4. Click **Save** to complete the QoS setting.

### TestMAC Configuration
:::tip 📝 NOTE
In this software version, testMAC is not supported.
:::