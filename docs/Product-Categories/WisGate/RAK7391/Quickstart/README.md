---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7391. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7391/overview/RAK7391.png
prev: ../Overview/
next: ../Assembly-Guide/
tags:
  - RAK7391
  - Quickstart
  - WisGate
  - RAKPiOS
---

# RAK7391 Quick Start Guide


## Powering on the Device

The [RAK7391](https://store.rakwireless.com/products/wisgate-connect-base-kit-rak7391?utm_source=WisGateRAK7391&utm_medium=Document&utm_campaign=BuyFromStore) can be powered via 10-28&nbsp;V<sub>DC</sub>. There is one Barrel Jack and one Phoenix Connector, so the user has two options. Make sure you power either using one or the other not both at the same time.

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/1.power-connectors.png"
  width="70%"
  caption="DC power connectors"
/>

The device also supports IEEE 802.3&nbsp;at/bt active PoE in combination with a specialized PoE HAT module. Mount the PoE Hat module then you can power the board through the 1&nbsp;GB Ethernet port.

:::tip 📝 NOTE
The PoE board is specialized. A general Raspberry Pi 40-pin PoE HAT cannot be used.
:::

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/2.poe-hat-socket.png"
  width="70%"
  caption="PoE HAT socket"
/>

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/3.poe-provisioning.png"
  width="70%"
  caption="PoE provisioning via the 1-GB port (PoE HAT installed)"
/>

## Flashing the OS

RAK7391 recommended OS is RAKPiOS. Refer to the [RAKPiOS documentation](/Product-Categories/Software-APIs-and-Libraries/RAKPiOS) for instructions on flashing and booting the OS.

## Network Connectivity

For the RAK7391, connectivity management is done via the [**NetworkManager**](https://networkmanager.dev/) tool suite. NetworkManager allows for flexibility when configuring the Ethernet, Wi-Fi, and Cellular interfaces. It is used to create, display, edit, delete, activate, and deactivate network connections via configuration files. One can also use the command-line tool [nmcli](https://man.archlinux.org/man/nmcli.1) for controlling NetworkManager.

:::tip 📝 NOTE
The NetworkManager configuration file must be owned by `root` and only `root` should be able to read it, so you need to set permissions by using the commands below:


```bash
sudo chmod -R 600
/etc/NetworkManager/system-connections/MyConnection.nmconnection
sudo chown -R root:root
/etc/NetworkManager/system-connections/MyConnection.nmconnection
```
**The OS needs to be rebooted / Gateway power cycled for the configuration to take effect**

:::

### Ethernet

There are two Ethernet ports on the gateway: one 1&nbsp;Gb Ethernet Port `(eth0)` and one 2.5&nbsp;Gb Ethernet port `(eth1)`. Once you connect to one of them, the Ethernet DHCP should work without requiring any specific configuration for Network Manager (you can grab the assigned address either via your router interface or from the OLED screen if you have it installed).


<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/9.ip-address-listed.png"
  width="70%"
  caption="IP address listed on the OLED screen"
/>



If you want to change the IP to a static one for one of the Ethernet interfaces for example `eth0` you need to create a new connection file named `ethernet-eth0.nmconnection` in the folder `/etc/NetworkManager/system-connections/`.

The file should have the following contents:

```bash
[connection]
id=ethernet-eth0
type=ethernet
interface-name=eth0

[ipv4]
address1=192.168.1.111/24,192.168.1.1
dns=8.8.8.8
method=manual

[ipv6]
addr-gen-mode=stable-privacy
method=auto
```

The important bits to take note of here are:

- `interface-name=eth0` - indicates which network interface to use, `(eth0)` in this example .
- `address1=192.168.1.111/24,192.168.1.1` - shows which the assigned static IP address assigned to the interface is and which gateway is to be used  `(192.168.1.111)` and the network gateway IP address  `192.168.1.1`.
- `dns=8.8.8.8` - indicates which Domain Name Server (DNS) is to be used, Google's in this example.

If one wants to do the above static IP setting, but using the command-line tool `nmcli`, execute the following command:

```bash
sudo nmcli con add type ethernet autoconnect yes ifname eth0 ipv4.addr 192.168.1.111/24 ipv4.gateway 192.168.1.1 ipv4.dns 8.8.8.8 ipv4.method manual
```

### WiFi

#### WiFi 5

If the CM4 you have decided to use has built-in Wi-Fi, speeds up to Wi-Fi 5, as it supports IEEE 802.11 b/g/n/ac. Connecting is done in a similar way to how a manual Ethernet connection is set up.

For example, if you want to connect to a hotspot named `RAK`, you should add a new connection file named `RAK.nmconnection` in the folder `/etc/NetworkManager/system-connections/`.

The file should have the following contents:

```bash
[connection]
id=RAK
type=wifi
interface-name=wlan0

[wifi]
ssid=RAK

[wifi-security]
auth-alg=open
key-mgmt=wpa-psk
psk=rak20140629

[ipv4]
method=auto
route-metric=100

[ipv6]
addr-gen-mode=stable-privacy
method=auto
```

:::tip 📝 NOTE

- `interface-name=wlan0` - the built-in Wi-Fi interface is `wlan0` .
- `ssid=RAK` - the SSID of the network, in this case, it is `RAK` .
- `key-mgmt=wpa-psk` - type of authentication, in this case `wpa-psk` .
- `psk=rak20220922` - password, in this case `rak20220922`.
:::

The configuration needs to be reloaded for the new settings to take effect via the following series of commands:

```bash
sudo chown -R root:root /etc/NetworkManager/system-connections/RAK.nmconnection
sudo chmod -R 600 /etc/NetworkManager/system-connections/RAK.nmconnection
sudo nmcli con reload
sudo nmcli con up RAK
```

The equivalent of the above with the command-line tool `nmcli` would be:

```bash
sudo nmcli device wifi connect RAK if name wlan0 password rak20220922
```

#### WiFi 6

The RAK7391 also supports Wi-Fi 6 modules through the mPCIe interface. The OS image comes with pre-installed firmware for several of Intel's Wi-Fi 6 card models (*AX200, AX201 & AX210*) including the default drivers. For example, one can use the [WiFi6E Intel AX210](https://es.aliexpress.com/item/1005004282432974.html) module (tested already) as a Plug & Play device just by connecting it to the `MiniPCie #3`  on the RAK7391. The wireless interface name should be `wlan1` in the RAKPiOS. To connect to a Wi-Fi 6 hotspot, the same procedure is used as for Wi-Fi 5, however, the only difference is that the interface name should be changed from `wlan0` to `wlan1`.

### Cellular

RAK7391supports Cellular connectivity when used together with [RAK8213](https://docs.rakwireless.com/Product-Categories/WisLink/RAK8213/Overview/), which is a multi-band LTE Cat M1/Cat Nb1/EGPRS module based on the Quectel BG96 with a standard PCI Express® form factor (mPCIe).

#### Hardware Setup

You can insert the RAK8213 into the `mPCIe #2` or `mPCIe #3` on the RAK7391 board, you also need a SIM card that supports at least one of the following: LTE Cat M1/Cat Nb1/EGPRS. Insert the SIM card into the SIM card slot `SIM #2` or `SIM #3`, both of which are located on the underside of the board.


<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/10.sim-slots.png"
  width="70%"
  caption="SIM slots"
/>


#### Cellular Configuration

Before you create a 4G connection file, you need to do some configuration to register the SIM card to the network provider. This requires connecting to the BG96 via the serial port and sending over a few AT commands.

For this example, you are going to configure the BG96 with the serial communication tool [minicom](https://wiki.emacinc.com/wiki/Getting_Started_With_Minicom).

1. To start, execute the following command:

```
sudo minicom -D /dev/ttyUSB3
```

2. Make sure to turn the local Echo so you can input the command with the **Ctrl+A**, followed by **pressing Z** to get to the **Command summary**.
3. **Press E** to turn the local echo on/off.

The following code block is a summary of the commands you need to execute in the same order. For detailed descriptions of these commands, refer to this [AT command manual](https://docs.particle.io/assets/pdfs/Quectel_BG96_AT_Commands_Manual_V2.1.pdf) from Quectel.

```bash
at+cfun=0   //Minimum functionality
at+qcfg="nwscanmode",0,1 //set scanmode automatic
at+qcfg="nwscanseq",010203,1  // set searching sequence:GSM -> LTE CAT M1 -> LTE CAT NB1
at+qcfg="iotopmode",1,1
at+qcfg="servicedomain",1,1
at+qcfg="roamservice",255,1
at+qcfg="band",f,400A0E189F,A0E189F,1 //search all band
at+cpsms=0
at+cfun=1  //Full functionality
at+cops=?  //Lists the available network providers.
at+cops=1,2,"46000",0  //select and register the network providers
at+cops?  //Queries the connected web server information.
```

#### Connection File

Create a cellular connection file named `gsm.nmconnection` in the folder `/etc/NetworkManager/system-connections/`.

The file should have the following contents:

```bash
[connection]
id=gsm
uuid=55e9c95e-5947-4dad-9a92-9d409449ba4d
type=gsm
interface-name=cdc-wdm0
permissions=

[gsm]
apn=iot.1nce.net

[ipv4]
dns-search=
method=auto

[ipv6]
addr-gen-mode=stable-privacy
dns-search=
method=auto

[proxy]
```

The important bits to take note of here are `apn=cmnet` which indicates the APN of your sim card network provider, then reboot your board and the `wwan0` will get an IP address and it is also ready for the internet connection.

:::tip 📝 NOTE

- `interface-name=cdc-wdm0` - this indicates the interface used.
- `uuid=55e9c95e-5947-4dad-9a92-9d409449ba4d` - the UUID, should be provided with the SIM card.
- `apn=iot.1nce.net` - every provider has a specific one, you need to obtain it via their online portal, for example, [1nce](https://1nce.com/) is used, which has the APN `iot.1nce.net`.
:::

After creating the file reboot/power cycle the gateway for the changes to take effect. This will result in the `wwan0` interface getting an IP address (if the connection has been established successfully), which you can check on the OLED display.

