---
rak_img: /assets/images/software-apis-and-library/rakpios.png
rak_desc: This document describes in detail the functionality of RAKPiOS, a custom OS for CM4-based products based on Raspberry Pi OS, including Docker and rakpios-cli for network and service management.
rak_grp: [software-apis-and-libraries, rakpios]
prev: ../Overview/
next: ../Portainer/
tags:
    - rakpios
    - wisgate connect
---

# RAKPiOS Quick Start Guide

## Get the OS

The latest version of RAKPiOS is available for download from the [RAK downloads center](https://downloads.rakwireless.com/#LoRa/WisGate-Connect/RAK7391) or the [RAKPiOS repository](https://github.com/RAKWireless/rakpios/releases).

To flash the image, you can use either Windows, Mac OS, or Linux; however, it is recommended that you use [balenaEtcher], a cross-platform tool that works with all three.

Depending on the device to which you want to flash the OS, you may have:

- **For models with eMMC storage (CM4 Lite version)** – utilize a Micro SD card the same way it is used for a Raspberry Pi 4 (RPi 4).
- **For models with eMMC storage** – the OS image must be flashed to the onboard storage; in this case, **you cannot use an SD card**.

## Flash to a Micro SD Card

It is recommended to use a Micro SD card of 8&nbsp;GB or greater coupled with a good-quality and fast card reader. Insert the card into the card reader (make sure it is properly connected to the host device) and proceed as follows:

1. Open balenaEtcher and select the OS image (no need to unzip the archive).
2. Select the target (your Micro SD card).
3. To begin the process, press the **Flash!** button.


<rk-img
  src="/assets/images/software-apis-and-library/rakpios/quickstart/4.balena-etcher.png"
  width="70%"
  caption="balena Etcher flashing window"
/>

Wait for the flashing process to complete, followed by the verification phase. You can now remove the card from the reader and insert it into the device's Micro SD slot on the bottom side of the board (next to the three SIM slots).

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/quickstart/5.micro-sd.png"
  width="70%"
  caption="Micro SD slot"
/>

## Flash to the eMMC

To access the CM4's eMMC storage, you must first install the necessary drivers and boot tool. This will allow you to access it as you would a mass storage device (SD card, for example) and flash the firmware file as you did in the previous step with balenaEtcher.

Instructions are provided for Windows, Mac OS, and Linux.

### Installing the Drivers and Mounting the Storage

Before installing the drivers, regardless of the operating system, make sure to execute the following steps to put the gateway into `flash mode`, allowing it to be seen as removable storage by the host OS.

1. Connect the Type-C port to a USB port on your computer using a suitable cable. Do not turn on the gateway yet.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/quickstart/6.typec-port-location.png"
  width="70%"
  caption="Type-C port and Flash button location"
/>

2. Press and hold the Flash button, or bridge the eMMC Flash jumper and power the gateway.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/quickstart/7.flash-jumper-location.png"
  width="70%"
  caption="eMMC flash jumper location"
/>

3. Once you have the respective utility installed depending on the OS, you will be able to see it as mounted storage.

#### Windows

The official stand-alone installer is the recommended method. Check out the Raspberry Pi [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for details on the [Windows installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) and how to install the drivers and boot tools.

#### Mac OS

To mount the eMMC storage, you need to install the required USB library on your Mac OS device and build the `rpiboot` executable. All operations can be done in the Terminal application.

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

4. With the `cd` command, go to the `usbboot` directory and build `rpiboot`.

```bash
cd usbboot && make
```

5. Now, there should be a `rpiboot` executable in the directory. To mount the eMMC storage, run the following command:

```bash
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

Check out the Raspberry Pi [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for instructions on how to install the tools required, build the `usbboot` tool, and run the tool.


### Flash the Image File

Now that you have the eMMC properly mounted, the rest of the procedure is very similar to what one has to do if flashing an SD card. Simply launch balenaEtcher, select the file, choose the **Compute Module** drive, and flash.

<rk-img
  src="/assets/images/software-apis-and-library/rakpios/quickstart/8.emmc-balena.jpg"
  width="70%"
  caption="eMMC as seen in Balena"
/>


## First Login

It is recommended to connect the device via Ethernet for its first-time setup. By default, the OS runs in DHCP client mode, so you should be able to connect it to your router via one of the Ethernet ports and simply look up the IP address it is assigned in your router, or if you have the OLED screen installed, you can look it up there as well. It will be listed as `rakpios`. Log in with your preferred SSH tool and get started.

The default RAKPiOS user name is `rak`, and the password is `changeme`. You will be prompted to change your default password upon your first login. For example, if you log in via SSH for the first time, you will have to create a new one by entering the default one first, followed by a new one.
