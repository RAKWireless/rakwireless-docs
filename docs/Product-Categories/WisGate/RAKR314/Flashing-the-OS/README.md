---
rak_img: /assets/images/wisgate/rakr314/RAKR314.png
rak_desc: Contains instructions on how to flash the OS of RAKR314. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_grp: [wisgate, developer]
prev: ../../
next: ../Assembly-Guide/
tags:
    - RAKR314
    - wisgate
    - Raspberry Pi
---


# RAKR314 Flashing the OS


RAKR314 utilizes a Raspberry Pi Compute Module 4 (CM4). As these come either with or without built-in eMMC, there are two options to use:

- For models without eMMC storage (CM4 Lite version) – utilize a Micro SD card the same way it is used for a Raspberry Pi 4 (RPi 4).
- For models with eMMC storage – the OS image has to be flashed to the onboard storage, **you cannot choose to use the SD card** in this case.


### Preparing the Software

RAK offers two options for the OS, either a prepared image [RAKPiOS](https://downloads.rakwireless.com/LoRa/Software_Firmware/RAKPiOS/History-Version-Release/20221019-rakpios-0.6.0-arm64-lite.zip) or a [public repo](https://github.com/RAKWireless/rakpios).

You can use either Windows, MacOS, or Linux to flash the image. Using [balenaEtcher](https://www.balena.io/etcher/), a cross-platform tool that works with either of the three is recommended.

### Flashing a Micro SD Card

Using a Micro SD card of 8 GB or greater coupled with a good quality and speed card reader is recommended. Insert the card into the card reader and make sure it is properly connected to the host device. Then follow the steps below:

1. Open balenaEtcher, and select the OS image (no need to unzip the archive).
2. Select the target (your Micro SD card).
3. Press the “Flash!” button to start the process.

<rk-img
  src="/assets/images/wisgate/rakr314/3.balena.png"
  width="70%"
  caption="balena Etcher"
/>


Wait for the flashing process, followed by the verification phase, to finish. You can now unplug the card from the reader and insert it into the RAKR314's Micro SD slot on the bottom side of the board.


### Flashing the eMMC


To access the eMMC storage on the CM4, you need to have the proper drivers and boot tool installed. This will allow you to access it as you would a mass storage device (SD card, for example) and flash the firmware file the same way you did in the previous step with balenaEtcher.

Instructions are provided for Windows, MacOS, and Linux.


#### Installing the Drivers and Mounting the Storage

Before installing the drivers, no matter the operating system, make sure you execute the following procedure so you put the module into `flash mode`, allowing it to be seen as removable storage by the host OS.

1. Connect the Type-C port via a suitable cable to a USB port on your computer. Do not power the board on yet.
2. Short the eMMC boot PIN and GND PIN.


<rk-img
  src="/assets/images/wisgate/rakr314/4.boot-pins.png"
  width="50%"
  caption="GND and eMMC boot pins"
/>

3. Once you have the respective utility installed depending on the OS, you will be able to see it as mounted storage.


#### Windows

The official stand-alone installer is the recommended approach. Check Raspberry Pi's [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for information about the [Windows installer](https://github.com/raspberrypi/usbboot/raw/master/win32/rpiboot_setup.exe) as well as how to install the drivers and boot tools.


#### MacOS

To mount the eMMC storage, install the required USB library on your Mac OS device and build the `rpiboot` executable. All operations can be done in the Terminal application.

1. First, you need to install [Homebrew](https://brew.sh/) by entering the following command in the terminal:

```
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```

2. Once Homebrew has been installed, you can install the `libusb` library by the following command:

```
brew install pkgconfig libusb
```

3. Clone the `usbboot` repository to your computer:

```
git clone --depth=1 https://github.com/raspberrypi/usbboot
```

4. After that, `cd` into the `usbboot` directory and build `rpiboot`:

```
cd usbboot && make
```

5. Now, there should be a `rpiboot` executable in the directory. To mount the eMMC storage, run:

```
sudo ./rpiboot
```

6. A few seconds later, you should see the boot volume mounted. The output of the CLI should be as follows:

```
rak@RAKR314 usbboot % sudo ./rpiboot
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
rak@RAKR314 usbboot %
```

#### Linux

Please check Raspberry Pi's [official documentation](https://www.raspberrypi.com/documentation/computers/compute-module.html) for instructions on how to install the tools required, build the `usbboot` tool, and run the tool.


#### Flashing the Image

Now that you have the eMMC properly mounted, the rest of the procedure is very similar to what one has to do when flashing an SD card. Simply open up balenaEtcher, select the file, select the drive named `Compute Module`, and flash.


<rk-img
  src="/assets/images/wisgate/rakr314/5.eMMC.png"
  width="70%"
  caption="eMMC as seen in balenaEtcher"
/>


#### First Login


:::tip 📝 NOTE
It is recommended to connect the RAKR314 via Ethernet for its first-time setup.
:::

The OS operates in DHCP client mode by default, so you should be able to connect it to your router via one of the Ethernet ports. Then look up the IP address that gets assigned to the router. It will be listed as `rakpios`. Use your favorite SSH tool to log in and get started.

The default RAKPiOS user name is `rak`, and the password is `changeme`. At first login, you will be forced to change the default password. For example, if you log in via SSH for the first time, you need to set a new one by entering the default one and a new one after.
