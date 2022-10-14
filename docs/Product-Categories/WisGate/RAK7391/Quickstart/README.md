---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7391. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7391/overview/RAK7391_home.png
prev: ../Overview/
next: ../Assembly-Guide/
tags:
  - RAK7391
  - Quickstart
  - WisGate
---

# RAK7391 Quick Start Guide


## Powering on the Device

The RAK7391 can be powered via 10-28&nbsp;V<sub>DC</sub>. There is one Barrel Jack and one Phoenix Connector, so the user has two options. Make sure you power either using one or the other not both at the same time. 

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

RAK7391 utilizes a Raspberry Pi Compute Module 4 (CM4). As these come either with or without built-in eMMC, there are two options to use:

- For models with eMMC storage (CM4 Lite version) – utilize a Micro SD card the same way it is used for a Raspberry Pi 4 (RPi 4).
- For models with eMMC storage – the OS image has to be flashed to the onboard storage, **you cannot choose to use the SD card** in this case.

### Preparing the Software

RAK offers two options for the OS, either a prepared image [RAKPiOS](https://downloads.rakwireless.com/LoRa/WisGate-Connect/RAK7391/20221019-rakpios-0.6.0-arm64-lite.zip) or a [public repo](https://github.com/RAKWireless/rakpios).

You can use either Windows, Mac OS, or Linux to flash the image, it is recommended to use [balenaEtcher](https://www.balena.io/etcher/), a cross-platform tool that works with either of the three.

## Flashing a Micro SD Card

It is recommended to use a Micro SD card of 8&nbsp;GB or greater coupled with good quality and speed card reader. Insert the card into the card reader (make sure it is properly connected to the host device) and follow the steps below:

1. Open balenaEtcher, select the OS image (no need to unzip the archive)
2. Select the target (your Micro SD card)
3. Press the “Flash!” button to start the process.

<br>
<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/4.balena-etcher.png"
  width="70%"
  caption="balena Etcher flashing window"
/>

Wait for the flashing process followed by the verification phase to finish. You can now unplug the card from the reader and insert it into the RAK7391's Micro SD slot on the bottom side of the board, (next to the three SIM slots).

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/5.micro-sd.png"
  width="70%"
  caption="Micro SD slot"
/>

## Flashing the eMMC

To access the eMMC storage on the CM4 you need to have the proper drivers and boot tool installed. This will allow you to access it as you would a mass storage device (SD card for example) and flash the firmware file the same way you did in the previous step with balenaEtcher.

Instructions are provided for Windows, Mac OS, and Linux.

### Installing the Drivers and Mounting the Storage

Before installing the drivers, no matter the operating system, make sure you execute the following procedure so you put the gateway into `flash mode`, allowing it to be seen as removable storage by the host OS.

1. Connect the Type-C port via a suitable cable to a USB port on your computer. Do not power the gateway on yet.

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/6.typec-port-location.png"
  width="70%"
  caption="Type-C port and Flash button location"
/>

2. Press and hold the Flash button, or bridge the eMMC Flash jumper and power the gateway.

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/7.flash-jumper-location.png"
  width="70%"
  caption="eMMC flash jumper location"
/>

3. Once you have the respective utility installed depending on the OS, you will be able to see it as mounted storage.

#### Windows

The official stand-alone installer is the recommended approach. Check Raspberry Pi's [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for information about the [Windows installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) as well as how to install the drivers and boot tools.

#### Mac OS

To mount the eMMC storage, you need to install a required USB library on your Mac OS device and build the `rpiboot` executable. All operations can be done in the Terminal application.

1. First, you need to install [Homebrew](https://brew.sh/) by entering the following command in the terminal:

```bash
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Once Homebrew has been installed, you can install the `libusb` library by the following command:

```bash
brew install pkgconfig libusb
```

3. Clone the `usbboot` repository to your computer:

```bash
git clone --depth=1 https://github.com/raspberrypi/usbboot
```

4. After that, `cd` into the `usbboot` directory and build `rpiboot`:

```bash
cd usbboot && make
```

5. Now, there should be a `rpiboot` executable in the directory. To mount the eMMC storage, run:

```
sudo ./rpiboot
```

6. A few seconds later, you should see the boot volume mounted. The output of the CLI should be as follows:

```bash
rak@RAK7391 usbboot % sudo ./rpiboot
Password:
RPIBOOT: build-date Sep 20 2022 version 20220815~145439 2472aaf9
Waiting for BCM2835/6/7/2711...
Loading embedded: bootcode4.bin
Sending bootcode.bin
Successful read 4 bytes 
Waiting for BCM2835/6/7/2711...
Loading embedded: bootcode4.bin
Second stage boot server
Loading embedded: start4.elf
File read: start4.elf
Second stage boot server done
rak@RAK7391 usbboot %
```

#### Linux

Please check Raspberry Pi's [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for instructions on how to install the tools required, build the `usbboot` tool, and run the tool.

## Flashing the Image File

Now that you have the eMMC properly mounted, the rest of the procedure is very similar to what one has to do if flashing an SD card. Simply open up balenaEtcher, select the file, select the drive named `Compute Module`, and flash.

<rk-img
  src="/assets/images/wisgate/rak7391/quickstart/8.emmc-balena.jpg"
  width="70%"
  caption="eMMC as seen in Balena"
/>


## First Login

It is recommended to connect the RAK7391 via Ethernet for its first-time setup. The OS operates in DHCP client mode by default so you should be able to connect it to your router via one of the Ethernet ports and simply look up the IP address it gets assigned in your router, or if you have the OLED screen installed you can look it up there too. It will be listed as `rakpios`. Use your favorite SSH tool to log in and get started.

The default RAKPiOS user name is *“rak”*, and the password is *“rakpios”*. At first login, you will be forced to change the default password. For example, if you log in via SSH for the first time, you will have to set a new one by entering the default one and a new one after.

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

There are two Ethernet ports on the gateway: one 1&nbsp;GB Ethernet Port `(eth0)` and one 2.5&nbsp;GB Ethernet port `(eth0)`. Once you connect to one of them, the Ethernet DHCP should work without requiring any specific configuration for Network Manager (you can grab the assigned address either via your router interface or from the OLED screen if you have it installed).


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

