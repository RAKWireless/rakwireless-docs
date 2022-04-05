---
rak_desc: RAK4630 RUI3 based firmware can be updated via USB connection or wirelessly via BLE using OTA DFU (Device Firmware Upgrade). It guides on how to do perform firmware upgrades for the RAK4630 WisDuo.
rak_img: /assets/images/wisblock/rak4630-module/overview/RAK4630_Module_home.png
prev: ../AT-Command-Manual/
next: ../Datasheet/
tags:
  - RAK4630
  - DFU
---

# Device Firmware Update

There will be situations in that you need to update the firmware of your RAK4630. Also, there are times when you want to reupload the firmware on your device to ensure that everything is set properly. Updating the Firmware of RAK4630 WisDuo can be done via USB connection or wirelessly using BLE via OTA DFU (Over-the-Air Device Firmware Upgrade). These methods are discussed in this guide. 

- [Firmware Update via USB](#firmware-update-via-usb)
- [Firmware Update via BLE Using OTA DFU](#firmware-update-using-ble-via-ota-dfu)

## Prerequisites

### What Do You Need?

- [nRFutil utility program](https://github.com/NordicSemiconductor/pc-nrfutil/releases)
- nRF Connect Mobile application
   - [iOS App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)
   - [Android Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en&gl=US)
- [DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip)

## Firmware Update via USB

You need to have a direct connection to the USB bus of RAK4630 before you can proceed with the update. You can check the minimum schematic required in the [quick start guide hardware setup section](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#hardware-setup). This guide covers the three most popular operating systems:

- [Using Windows](/Product-Categories/wisduo/rak4630-module/DFU/#for-windows)
- [Using Linux](/Product-Categories/wisduo/rak4630-module/DFU/#for-linux)
- [Using MacOS](/Product-Categories/wisduo/rak4630-module/DFU/#for-macos)

### For Windows

#### Setup the nRFutil Utility and Environment

1. Download the [nRFutil.exe](https://github.com/NordicSemiconductor/pc-nrfutil/releases) and the latest [DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). 
2. Once you downloaded the listed files, put them in the same directory/folder on your computer.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/nrfutil-dfu.png"
  width="70%"
  caption="nRFutil and DFU package"
/>

#### Setup the Device Console Port in Windows

::: tip 📝 NOTE
- This section uses Tera Term for the Terminal emulation utility.
- USB interface is used. Disregard the Baud Rate setting. 
:::

1. Download the Tera Term Terminal emulator utility or any console utility you prefer. 

2. After downloading and installing the console utility, open the Tera Term and click Setup in the Menu bar.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/serial-port.png"
  width="70%"
  caption="Setting up the serial port"
/>

3. Then click serial port. Check if the port is correct. 

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/serial-port-setup.png"
  width="40%"
  caption="Serial port setup"
/>


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/device-manager.png"
  width="70%"
  caption="Check the port in the device manager"
/>

#### Check the Device Firmware Version

To get the device firmware version, use the `AT+VER` command. 

```
AT+VER?
AT+VER: get the version of the firmware

OK

AT+VER=?
AT+VER=3.2.0-p2_22q1_final.87

OK
```

#### Connect the Device To the DFU Mode

To enter the bootloader mode for firmware upgrade, execute the following steps:

1. Type the command `AT+BOOT` in the Tera Term or any terminal you use.
2. Before upgrading the dfu package, confirm the device into the bootloader mode.
3. The device will reset automatically.
4. After that, close the Tera Term to disconnect the device.

```
AT+BOOT
```


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/disconnect-device.png"
  width="70%"
  caption="Disconnect the device from Tera Term"
/>


#### Firmware Update via USB

1. Open the Windows Command Prompt application, then change the location where you put the [nRFutil utility program](https://github.com/NordicSemiconductor/pc-nrfutil/releases) and [DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). 
2. After that, you can now execute the update using the following command:

`nrfutil dfu usb-serial -pkg RAK4631_latest_dfu_package.zip -p COM4`

::: tip 📝 NOTE
Check if the firmware version is already upgraded.
:::

### For Linux

#### Setup the Linux Environment

1. First, open a new terminal, then install all dependencies.


```
sudo apt-get update
sudo apt-get install net-tools git curl python xclip python3-pip
```

2. The following prerequisite must be installed: `Python 3.7` or later. Check your Python version, as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/python-version.png"
  width="90%"
  caption="Check Python version"
/>

3. Add `.local` folder to Linux `$PATH` variable.

```
export PATH="$HOME/.local:$PATH"
```

4. Now, you can install `nrfutil`. It is available as a package in the Python Package Index (PyPI). Execute the following commands:

```
sudo apt-get update
pip3 install nrfutil --user
```

#### Setup the Device Console Port in Linux

1. Install the minicom using the following commands:

```
sudo apt-get update
sudo apt-get install minicom
```

2. To open the minicom terminal utility with the ttyACM0 interface. The correct port name can be determined using `dmesg`, as shown in the [next steps](/Product-Categories/wisduo/rak4630-module/DFU/#execute-the-firmware-update-via-usb).

Enter the following code: `minicom -D /dev/ttyACM0`


#### Execute the Firmware Update via USB 

1. Download the zip file [DFU Distribution Package](https://downloads.rakwireless.com/RUI/V3/Image/). 

When you plug in the RAK4630 through the USB to Linux, you will see the related information "**cdc_acm 1-1:1.0:  ttyACM0: USB ACM device**" from the `dmesg` command.

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/dmesg-tty.png"
  width="90%"
  caption="Checking USB CDC device using dmesg command"
/>

In this case, the RAK4630 **USB CDC** device name is `/dev/ttyACM0`.

2. Perform the steps described in the section [Setup the Device Console Port in Linux](#setup-the-device-console-port-in-linux).

3. On minicom, enter the following AT command:

```
AT+BOOT
```

4. Now, open the terminal shell and go to the directory where you put the DFU Distribution Package. After that, execute the following command:

`nrfutil dfu usb-serial -pkg RAK4631_latest_dfu_package.zip -p /dev/ttyACM0`


5. To check the device firmware version in the minicom console, enter the following AT command:

```
AT+VER=?
```

You should see then the current FW version of the module.

### For MacOS

1. Download [nrfutil](https://github.com/NordicSemiconductor/pc-nrfutil/releases/download/v6.1.3/nrfutil-mac.1). Usually, the `nrfutil-mac.1` file will go to the downloads folder. This section assumes any downloaded file goes to the downloads folder.

2. Open the terminal and go to the downloads directory or the location where you put the downloaded file. You have to change the `username` based on your machine. In this guide, `apple` is used as the user.

```
cd /Users/username/Downloads
```

3. Make the `nrfutil-mac.1` executable.

```
chmod +x nrfutil-mac.1
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/downloads-chmod-nrfutil.png"
  width="60%"
  caption="Download nrfutil for macOS"
/>

4. You also need to determine the port name of the RAK4630 using the command:

```
ls /dev/cu.*
```

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/rak4631-r-port.png"
  width="60%"
  caption="Check the port"
/>

5. Download the [RAK4630 Firmware](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). Usually, the `RAK4631_latest_dfu_package.zip` file will go to the downloads folder.

6. Open a serial terminal software and run `AT+BOOT` to enable the bootloader mode of RAK4630.

```
AT+BOOT
```

7. You can now execute the firmware update.

::: tip 📝 NOTE
- The `nrfutil-mac.1` must be on the same folder as the `RAK4631_latest_dfu_package.zip`. In this guide, it is the **Downloads** folder.
- You should be connected to the right port. The port name in your computer might be different than the one in this guide.
- It might take a while for the update. Do not remove the USB or terminate the terminal application while doing the uploading process.
:::

```
./nrfutil-mac.1 dfu usb-serial -pkg RAK4631_latest_dfu_package.zip -p /dev/cu.usbmodemC0D048F6604F1
```

## Firmware Update Using BLE via OTA DFU

This section covers how to update your RAK4630 firmware wirelessly via BLE. First, you need to download and install the nRF Connect developed by Nordic Semiconductor. The App is available both in [Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en&gl=US) and [App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403).

- [DFU OTA Using iOS](/Product-Categories/wisduo/rak4630-module/DFU/#for-ios)
- [DFU OTA Using Android](/Product-Categories/wisduo/rak4630-module/DFU/#for-android)

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/nordic-app.png"
  width="60%"
  caption="nRF Connect App available in Play Store and App Store"
/>


<!--

::: tip 📝 NOTE

iOS and Android are supported. 
 - iOS: 6. OTA DFU over BLE 
 - Android: 7. OTA DFU over BLE
:::

-->

### For iOS

<!--

#### iOS and nRF Connect Version

iOS 14.4 to do OTA DFU over BLE and nRF Connect is using the application version of 2.4.11.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/ios-nrfconnect.png"
  width="90%"
  caption="iOS 14.4 and nRF Connect 2.4.11"
/>

--->


#### OTA DFU over BLE


1. Download the [DFU package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip) of the RAK4630 and save it on your mobile phone.

::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to [iCloud Services](https://www.icloud.com/) and download it to your smartphone. 
:::

Make sure the Bluetooth on your mobile is on.

2. Press the reset button and wait for a couple of seconds.

3. Open the nRF Connect mobile application. You will see all the BLE devices in range in the Scanner list.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/available-bluetooth-ios.png"
  width="40%"
  caption="Available Bluetooth Devices"
/>
 
4. Look for a BLE Device named **RAK.XXXXXX** in the scanner list of the app. Connect to this device and then click on the **Client** tab.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4630 is turned off automatically if no connection is established after 60 seconds. Connect to **RAK.XXXXXX** immediately after pressing the reset button.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/secure-dfu-ios.png"
  width="70%"
  caption="Secure DFU service"
/>


5. Choose "**Secure DFU Service**" and click the button highlighted in red, as shown in **Figure 13**.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/buttonless-dfu-ios.png"
  width="40%"
  caption="Buttonless DFU"
/>


7. A **Write Value** window will pop up. Select **Bool** tab, move the switch from `False` to `True` then press **Write** button.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/bootloader-reset-ios.png"
  width="70%"
  caption="Resetting the bootloader via Bluetooth"
/>


8. Now, the RAK4630 is now working in DFU Mode. In the application, you will see the default status overview of RAK4630.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/default-bluetooth-id-ios.png"
  width="40%"
  caption="RAK4630 default status overview after resetting"
/>


9. In the Scanner list, find a BLE device named **DfuTarg** and then click the **Connect** button.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/default-status-overview-ios.png"
  width="40%"
  caption="RAK4630 Default Bluetooth ID after Resetting"
/>


10. After connected, select the **DFU** tab, then click **Open Document Picker**. This will prompt you to select the Distribution packet zip file of the firmware you have downloaded. Press **OK**, and it will automatically start to upgrade the firmware of your RAK4630 through DFU over BLE.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/distribution-packet-file-ios.png"
  width="40%"
  caption="Distribution Packet File Type under DFU"
/>


::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to [iCloud Services](https://www.icloud.com/) and download it to your smartphone. 
:::


11. After upgrading, the module restarts, and the DFU connection will be disconnected. Now, you can use your RAK4630 with the latest firmware.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/dfu-upgrade-ios.png"
  width="100%"
  caption="DFU upgrading of RAK4630 firmware via BLE"
/>



### For Android

<!--

#### Android and nRF Connect version

Android 6.0 to do OTA DFU over BLE and nRF Connect is using the application version of 4.24.3.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/android-nrfconnect.png"
  width="70%"
  caption="Android 6.0 and nRF Connect 4.24.3"
/>

--->


#### OTA DFU Over BLE

1. Download the [DFU package of the RAK4630](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip) and save it on your mobile phone.

::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to Google Drive and download it to your smartphone. 
:::

Make sure the Bluetooth on your mobile is on.

2. Press the reset button and wait for a couple of seconds.

3. Open the nRF Connect mobile application. You will see all the BLE devices in range in the Scanner list.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/available-bluetooth-android.png"
  width="40%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

4. Look for a BLE Device named **RAK.XXXXXX** in the scanner list of the app. Connect to this device and then click the **Client** tab.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4630 is turned off automatically if no connection is established after 60 seconds. Connect to **RAK.XXXXXX** immediately after pressing the reset button.
:::


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/secure-dfu-nordic.png"
  width="70%"
  caption="Secure DFU service in the Nordic App"
/>


5. Choose "**Secure DFU Services**" and click the button highlighted in red, as shown in **Figure 21**.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/buttonless-dfu-android.png"
  width="40%"
  caption="Buttonless DFU"
/>


6. Click the arrow up button highlighted in a red box.

7. A **Write value** window will pop up. Press the **SEND** button.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/resetting-bootloader-android.png"
  width="70%"
  caption="Resetting the Bootloader via Bluetooth"
/>


8. Now, the RAK4630 is now working in DFU Mode. In the application, you will see the default status overview of RAK4630.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/default-status-overview-android.png"
  width="40%"
  caption="RAK4630 default status overview after resetting"
/>


9. In the Devices list, find a BLE device named **DfuTarg** and click on the **Connect** button.

<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/default-bluetooth-id-android.png"
  width="40%"
  caption="RAK4630 default Bluetooth ID after resetting"
/>

After connecting, click on the **DFU** icon highlighted in red, as shown below.

10. Select the **Distribution packet (ZIP**) and press **OK**. This will prompt you to select the zip file of the firmware that you have downloaded. It will automatically start to upgrade the firmware of your RAK4630 through DFU over BLE.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/distribution-packet-file-android.png"
  width="70%"
  caption="Distribution packet file type under DFU"
/>


::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to Google Drive and download it to your smartphone. 
:::



11.  After upgrading, the module restarts, and the DFU connection will be disconnected. Now, you can use your RAK4630 with the latest firmware.


<rk-img
  src="/assets/images/wisduo/rak4630-module/quickstart/dfu-upgrading-android.png"
  width="40%"
  caption="DFU upgrading of RAK4630 firmware via BLE"
/>