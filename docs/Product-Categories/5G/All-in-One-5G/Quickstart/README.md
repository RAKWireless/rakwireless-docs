---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK M310/M320. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/5g/all-in-one-5g/all-in-one-5g.png
prev: ../Overview/
next: ../Installation-Guide/
tags:
  - All-in-One 5G
  - 5G
  - quickstart
  - M320
  - M310
---

# All-in-One 5G Quick Start Guide

A simple configuration guide for developers, private LTE & 5G, and some other usage.

## Prerequisites

:::tip 📝 NOTE
A good GPS signal is required to activate and run 4G and 5G radios.
:::

1. Assemble the device with the pedestal. Refer to the [Installation Guide](https://docs.rakwireless.com/Product-Categories/5G/All-in-One-5G/Installation-Guide/#installation-guide).
2. After assembling the device, place it close to the window.
3. Then, connect the GPS antenna to the device.
4. Place the antenna outside the window to get a good GPS signal.

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/1.all-in-one-5g.png"
  width="50%"
  caption="All-in-One 5G"
/>

:::warning ⚠️ WARNING
Attach the antenna first before powering on the device.
:::

5. Lastly, connect the PoE power source to the WAN/PoE port on the device to power it up.

## Product Configuration

There are four (4) major scenarios you can use the RAK M310/M320 device for. The device configuration is based on the device’s usage.

1. RAK M310/M320 as a pure 4G and/or 5G radio with the external EPC/5GC
2. RAK M310/M320 running with RAK open-source Magma AGW
3. RAK M310/M320 running with RAK open-source Open5GS
4. RAK M310/M320 with your own EPC/5GC inside on open hardware CM4

### Configuration with External EPC/5GC

**Scenario 1.** RAK M310/M320 as a pure 4G and/or 5G radio with an external EPC/5GC.

This section describes the basic configuration to connect eNodeB and gNodeB to your own EPC/5GC. After the configuration, the eNodeB and gNodeB should start serving.

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/2.with-external-epc-5gc.png"
  width="80%"
  caption="Connect RAK M310/M32 to external EPC/5GC"
/>

Listed in the table are the parameters to consider for the configuration:

<table>
  <thead><tr>
    <th>Item</th>
    <th>Parameter</th>
    <th>Description</th>
  </tr></thead>
<tbody>
  <tr>
    <td rowspan = "2">IP Address</td>
    <td>OAMP IP</td>
    <td>OAM uses a separate IP address to access the local web, e.g., 192.168.150.123/124</td>
  </tr>
  <tr>
    <td>Core IP</td>
    <td>MME IP for 4G eNodeB, AMF IP for 5G gNodeB – planned by the user</td>
  </tr>
    <tr>
    <td rowspan = "3">Cell Parameters</td>
    <td>PLMN</td>
    <td>Planned by the user</td>
  </tr>
  <tr>
    <td>TAC</td>
    <td>Planned by the user</td>
  </tr>
  <tr>
    <td>Cell ID</td>
    <td>Planned by the user</td>
  </tr>
  <tr>
    <td>NTP Server</td>
    <td>NTP Server Address</td>
    <td>Planned by the user. NTP is required to activate and run 4G eNodeB and 5G gNodeB</td>
  </tr>
</tbody>
</table>

To configure RAK M310/M320 with your own EPC/5GC:

**1. Prepare your PC or laptop’s network to access the RAK M310/M320 local web.** <br> Configure the ethernet port to the subnet `192.168.150.0/24` to access eNodeB or gNodeB local web management, bridged by a router/switch or connected directly.

:::tip 📝 NOTE:
- RAK M310&M320 4G eNodeB: `192.168.150.1/24`
- RAK M320 5G gNodeB: `192.168.150.7/24`
:::

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/3.network-connection.png"
  width="80%"
  caption="Network connection"
/>

**2. Log in to eNodeB/gNodeB local web using the default credentials.**
  - RAK M310&M320 4G eNodeB
    - Serving URL: `192.168.150.1/24`
    - Username: **admin**
    - Password: **admin**
  - RAK M320 5G gNodeB
    - Serving URL: `192.168.150.7/24`
    - Username: **new_user**
    - Password: **gNB@2014**

:::tip 📝 NOTE:
It is recommended to use Chrome browser to achieve the best effect.
:::

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/4.login-page.png"
  width="100%"
  caption="Login page"
/>

**3. Configure eNodeB S1 or gNodeB N2 interface network according to your requirement.** <br>
Mostly the eNodeB's S1 and/or gNodeB's N2 interface are required to have a static IP address connected to your EPC and/or 5GC. Dynamic IP address allocated by DHCP is also supported, all depend on your network requirement.

<b>eNodeB S1 Configuration</b>

- **S1 Interface with Static IP**

  a. Log in to eNodeB local web via `https://192.168.150.1` <br>
  b. Navigate to **Network** > **WAN/LAN/VLAN** and click the **edit** button under **WAN Config** in the **Operate** column.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/5.wan-config.png"
    width="100%"
    caption="WAN Configuration Static IP"
  />

  c. The **Edit** window pops up. Select **Static IP** in **IP** **Access Mode**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/6.enodeb-static-ip.png"
    width="100%"
    caption="eNodeB Static IP"
  />

  d. Then edit the static **IP Address**, **Netmask**, and **Gateway** for the eNodeB S1 port.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/7.edit-static.png"
    width="45%"
    caption="Static IP Configuration"
  />

  e. Click **OK** and then save the configuration.

- **S1 Interface with Dynamic IP**

  a. Log in to eNodeB local web via `https://192.168.150.1`. <br>
  b. Navigate to **Network** > **WAN/LAN/VLAN** and click the **edit** button under **WAN Config**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/8.wan-config.png"
    width="100%"
    caption="WAN Configuration Dynamic IP"
  />

  c. The **Edit** window pops up. Select **DHCP** in **IP** **Access Mode** to enable the DHCP client on the eNodeB WAN port.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/9.enodeb-dhcp-config.png"
    width="45%"
    caption="eNodeB DHCP Configuration"
  />

  d. Click **OK** and then save the configuration.

<b>gNode N2 Configuration</b>

- **N2 Interface with Static IP**

  a. Log in to gNodeB local web via `http://192.168.150.7`. Use the abovementioned default credentials:

    - Username: **new_user**
    - Password: **gNB@2014**

  b. Navigate to **Network** > **WAN/VLAN** and click **open** under **WAN List > WAN Card1** to expand the list.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/10.click-open.png"
    width="100%"
    caption="Expand WAN Cards"
  />

  c. **WAN IPv4 table** shows up, then click the **Edit** button under **Operate**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/11.wan-ipv4-config.png"
    width="100%"
    caption="Edit WAN IPv4 Table"
  />

  d. The **Edit** window pops up. Select **Static IP** in the **Addressing Mode** and **Ng** in the **Port Type** field, then edit the following fields as well for the gNodeB S2 port:
     - **IP Address**
     - **Netmask**
     - **Gateway**

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/12.static-ip-config.png"
    width="45%"
    caption="Static IP Configuration"
  />

  f. Lastly, click **OK** then **save** the configuration.


- **N2 Interface with Dynamic IP**

  a. Log in to gNodeB local web via `http://192.168.150.7`. <br>
  b. Navigate to **Network** > **WAN/VLAN** and click **open** under **WAN List > WAN Card1** to expand the list.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/13.click-open.png"
    width="100%"
    caption="Expand WAN Card"
  />

  c. **WAN IPv4 table** shows up, then click the **Edit** button under **Operate**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/14.wan-ipv4-config.png"
    width="100%"
    caption="WAN IPv4 Table Configuration"
  />

  d. The **Edit** window pops up, and then select **DHCP** in the **Addressing Mode** field and **Ng** in the **Port Type** field.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/15.gnode-dhcp-config.png"
    width="100%"
    caption="gNodeB DHCP Configuration"
  />

  f. Then click **OK** and **save** the configuration.

**4. Configure PLMN, TAC, Cell ID, MME, and AMF IP address.** <br>
Configure your eNodeB and gNodeB with planned TAC, PLMN, MME, and AMF IP address to connect your own EPC and 5GC. These parameters depend on your network requirements.

<b>eNodeB Configuration</b>

  a. Log in to eNodeB local web via `https://192.168.150.1` <br>
  b. Navigate to the **Quick Setting** page and then configure the following parameters:
   - PLMN
   - TAC
   - Country code
   - MME IP

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/16.quick-setting-parameters.png"
    width="100%"
    caption="Quick Setting Parameters"
  />

  c. Scroll down, and under **Cell Quick Setting**, configure the **Cell ID** and set the **RF Status** field to **ON**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/17.cell-quick-setting.png"
    width="100%"
    caption="Cell Quick Setting Parameters"
  />

  d. Lastly, **Save** the eNodeB configuration.

<b>gNodeB Configuration</b>

- **PLMN**

  a. Log in to gNodeB local web via `http://192.165.150.7`. <br>
  b. Navigate to **NR Setting**, select **PLMN**, and click the **Edit** button under the **Operate** column.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/18.plmn.png"
    width="100%"
    caption="Edit PLMN Identity Info List"
  />

  c. An **Edit** window will pop up. Edit the **Cell ID** and **TAC**, then click **OK**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/19.cell-id-tac.png"
    width="100%"
    caption="Configure Cell ID and TAC"
  />

  d. The **PLMN List** will show up, then click the **Edit** button under the **Operate** column.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/20.plmn-list.png"
    width="100%"
    caption="PLMN List"
  />

  e. Another **Edit** button appears, then edit the **PLMNID**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/21.plmnid.png"
    width="100%"
    caption="Configure PLMNID"
  />

- **AMF IP Address**

  a. Under the **NR Setting**, select **Advanced** and then click the plus icon beside **CU** to show the CU fields.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/22.adv-setting-config.png"
    width="100%"
    caption="Advanced Setting Configuration"
  />

  b. Scroll down and look for **AMF IP**, then click the **Add** icon.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/23.add-amf-ip.png"
    width="100%"
    caption="Add AMF IP"
  />

  c. The **Add** window pops up, then add the **AMF IP** and **PLMN**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/24.config-amf-ip.png"
    width="100%"
    caption="Configure AMF IP and PLMN"
  />

  d. Once done, click **OK** and **save** the configuration.

**5. Configure the NTP Server.** <br>
NTP is required to activate and run 4G eNodeB and 5G gNodeB. Without any reachable NTP servers, the eNodeB and gNodeB cannot be activated successfully.

<b>eNodeB NTP Server Address</b>

  a. Navigate to **System** then to the **NTP** page. <br>
  b. Tick the slider to turn on the **NTP Servers** and edit the **NTP servers’ IP addresses** and **Port** fields. Then click **Save**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/25.enodeb-ntp-servers.png"
    width="100%"
    caption="eNodeB NTP Servers"
  />

<b>gNodeB NTP Server Address</b>

  a. Navigate to **System** then to the **NTP** page. <br>
  b. In the **Enable** field, select **ON** and then edit the **NTP servers’ IP addresses**.

  <rk-img
    src="/assets/images/5g/all-in-one-5g/quickstart/26.gnodeb-ntp-servers.png"
    width="100%"
    caption="gNodeB NTP Servers"
  />

  c. Once done, click OK and save the configuration.

**6. Reboot to use the new configuration.**

<b>eNodeB Reboot</b>

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/27.enodeb-reboot.png"
  width="100%"
  caption="eNodeB Reboot"
/>

<b>gNodeB Reboot</b>

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/28.gnodeb-reboot.png"
  width="100%"
  caption="gNodeB Reboot"
/>

### Configuration with Magma Inside

**Scenario 2.** RAK M310/M320 as an All-in-One device, running with RAK open-source Magma AGW.
RAK M310/M320 has a built-in open-source Magma AGW installation package inside.

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/29.with-magma-agw-inside.png"
  width="80%"
  caption="RAK M310/M320 as an All-in-One device"
/>

You can log in and install the package manually with the following steps:

1. Prepare the network to access to M310/M320 CM4 module.
2. SSH login to M310/M320 CM4 module.
3. Install AGW with a built-in package.

:::tip 📝 NOTE:
- The package name would be with the prefix `upgrade_agw`.
- Specific package name: ` magma$ sudo /opt/magma/upgrade_agw_xxx`.
:::

4. Reboot to run AGW.

After installing the Magma AGW, the eNodeB and gNodeB will start serving automatically with the following default parameters:

|**Parameter**|**Value**|
| :---------: | :-----: |
| PLMN        | 00101   |
| TAC         | 1       |
| Cell ID     | 1       |

:::tip 📝 NOTE:
- The CM4's static IP address will be changed automatically to `192.168.151.100/24`. Use this IP address to SSH login to CM4 for more configurations.
- For more Magma AGW configuration details, refer to [Magma AGW Configuration Guide](https://docs.rakwireless.com/Knowledge-Hub/Learn/Magma-Orchestrator-and-NMS/Dockerized-Magma-AGW-Installation-Guide/).
:::

### Configuration with Open5GS inside

**Scenario 3.** RAK M310/M320 as an All-in-One device, running with RAK open-source Open5GS.

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/30.with-open5gs-inside.png"
  width="80%"
  caption="RAK M310/M320 with open-source Open5GS inside"
/>

RAK M310/M320 has a built-in open-source Open5GS installation package inside. You can log in and install the package manually with the following steps:

1. Prepare the network to access to M310/M320 CM4 module.
2. SSH login to M310/M320 CM4 module.
3. Install Open5GS with a built-in package.

:::tip 📝 NOTE:
- The package name would be with the prefix `install_open5gs`.
- Specific package name: ` magma$ sudo /opt/open5gs/install_open5gs_xxx`.
:::

4. Reboot to run AGW.

After installing the Open5GS, the eNodeB and gNodeB will automatically start serving with default parameters as follows:

|**Parameter**|**Value**|
| :---------: | :-----: |
| PLMN        | 00101   |
| TAC         | 1       |
| Cell ID     | 1       |

:::tip 📝 NOTE:
- The CM4's static IP address will be changed automatically to `192.168.151.100/24`. Use this IP address to SSH login to CM4 for more configurations.
<!-- - For more Magma AGW configuration details, refer to [Open5GS Configuration Guide](Skip this part). -->
:::

### Configuration with Customer's EPC/5GC Inside

**Scenario 4.** RAK M310/M320 as an All-in-One device with your own EPC/5GC inside on open hardware CM4.

:::tip 📝 NOTE:
If you want to install your own EPC or 5GC onto RAK M310/M320 CM4 Module, make sure that it is compatible with Raspberry CM4.
:::

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/31.with-customers-epc-5gc-inside.png"
  width="80%"
  caption="RAK M310/M320 with EPC/5GC on open hardware CM4"
/>

There are four major steps to install your own EPC or 5GC onto RAK M310/M320's CM4 Module:

1. Prepare the network to access to M310/M320 CM4 module.
2. SSH login to M310/M320 CM4 module.
3. Install with the pre-built EPC or 5GC package.
4. Reboot to run AGW.

#### CM4 Module

RAK M310 & M320 have a Raspberry CM4 where you can log in to the CM4 module to install built-in packages or your own application, depending on your requirements.

To install packages on CM4, here are some basic steps to operate:

**1. Prepare the network**

Prepare the network to access to M310/M320 CM4 module. RAK M310 & M320 CM4 module is configured with a static IP address `192.168.150.100/24` to serve local SSH access.

You need to configure your PC or laptop's ethernet port to subnet `192.168.150.0/24` to SSH access to CM4, bridged by a router/switch or connected directly. The network connection may look like this:

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/32.network-connection.png"
  width="80%"
  caption="Network connection"
/>

:::tip 📝 NOTE:
If the device is installed with the built-in Magma AGW or Open5GS, the CM4's static IP address has changed to `192.168.151.100/24`, then you need to configure the PC or laptop's IP to `192.168.151.0/24` to access to CM4.
:::

**2. SSH Login**

SSH Login to M310/M320 CM4 module. RAK M310 & M320 AGW can be SSH to using the commands below with a default password: `rakwireless`.

```
customer$ ssh magma@192.168.150.100
```

## Disable 4G on M320

RAK M320 is integrated with a 4G eNodeB and a 5G gNodeB. If you want 5G gNodeB only, execute the following steps:

1. Log in to eNodeB's local web via `https://192.168.150.1.`
2. Navigate to the **Quick Setting** page.
3. Scroll down to the **Cell Quick Setting**, then set the **RF Status** to **OFF**.

<rk-img
  src="/assets/images/5g/all-in-one-5g/quickstart/33.rf-stat-off.png"
  width="100%"
  caption="Disable 4G"
/>

4. After that, click **Save** to save the configuration.

## Mobile Phone Access to Network

**Using your own EPC or 5GC**: <br>
You should insert SIM cards managed by yourself into the mobile phones and other end devices, whether configuring the phones or devices to access the network depends on your requirements.

**Using RAK M310/M320 built-in Magma AGW or Open5GS**: <br>
Before mobile phones or other devices access the network, it is required to insert the SIM cards provided by RAK into mobile phones or other end devices, and add an APN named with the internet, and select the network 00101 at the first access.
