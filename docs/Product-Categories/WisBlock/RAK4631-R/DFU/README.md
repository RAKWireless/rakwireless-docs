---
rak_desc: RAK4631-R RUI3 based firmware can be updated via USB connection or wirelessly via BLE using OTA DFU (Device Firmware Upgrade). It guides on how to do perform firmware upgrades for the RAK4631-R WisBlock Core.
rak_img: /assets/images/wisblock/rak4631-r/overview/RAK4631-R_home.png
prev: ../AT-Command-Manual/
next: ../Datasheet/
tags:
  - RAK4631-R
  - DFU
  - wisblock
---

# Device Firmware Upgrade

There will be situations that you need to update the firmware of your RAK4631-R. Also, there are times when you want to reupload the firmware on your device to ensure that everything is set properly.

Updating the Firmware of RAK4631-R WisBlock Core can be done via USB connection or wirelessly using BLE via OTA DFU (Over-the-Air Device Firmware Upgrade). These methods are discussed in this guide. 

You can also update the firmware of your RAK4631 WisBlock Core to RAK4631-R which supports RUI3 and vice-versa.

This section covers:

- [Firmware Update via USB](#firmware-update-via-usb)
- [Firmware Update via BLE Using OTA DFU](#firmware-update-using-ble-via-ota-dfu)   
- [Upgrading RAK4631 to RUI3](#updating-rak4631-to-rui3)
- [Converting RAK4631-R to RAK4631](#converting-rak4631-r-to-rak4631)

## Prerequisites

### What Do You Need?

- [nRFutil utility program](https://github.com/NordicSemiconductor/pc-nrfutil/releases)
- [adafruit-nrfutil.exe (you need to unzip the downloaded file)](https://github.com/adafruit/Adafruit_nRF52_nrfutil/releases/download/0.5.3.post17/adafruit-nrfutil--0.5.3.post17-win.zip)
- nRF Connect Mobile application
   - [iOS App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403)
   - [Android Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en&gl=US)
- [RUI3 firmware for RAK4630 Upgrade](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/)
- [Latest RAK4631-R FW DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip)

## Firmware Update via USB

After connecting your RAK4631-R to WisBlock Base, you can immediately update its firmware via USB.

- [Using Windows](/Product-Categories/WisBlock/RAK4631-R/DFU/#for-windows)
- [Using Linux](/Product-Categories/WisBlock/RAK4631-R/DFU/#for-linux)
- [Using MacOS](/Product-Categories/WisBlock/RAK4631-R/DFU/#for-macos)

### For Windows

1. [Check the FW version of your RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term). If it is not the latest firmware version (you can check the [FW change logs](https://downloads.rakwireless.com/RUI/RUI3/Image/)), you can update the firmware of your device.
2. Create a new folder in your `C:\` drive named `RAK4631-R Update`.
3. Download the [nRFutil.exe](https://github.com/NordicSemiconductor/pc-nrfutil/releases) and the [latest DFU Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). Once you downloaded both files, put them in the `RAK4631-R Update` folder you created as shown in Figure 1.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x2_files_needed.png"
  width="70%"
  caption="nRFutil.exe and RAK4631-R Latest Firmware"
/>

4. Connect the RAK4631-R via USB and check if port has been detected via device manager. In this guide it is detected as COM32. The COM port number is not fixed and can be different depending on the PC. If no port is shown in device manager, you can try to double click reset button on the WisBlock Base and check again.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/2_device_manager_port_update.png"
  width="70%"
  caption="Checking COM Port via Device Manager"
/>

5. After that, you need to send `AT+BOOT` command to the device via Serial Terminal software. You can follow the [guide on using Tera Term](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) but instead of checking the firmware version, you have to input `AT+BOOT`. You will see no reply since the module will restart then will be disconnected momentarily before re-establishing again the connection to Tera Term. 

::: tip 📝 NOTE
You have to disconnect the device connection to TeraTerm/Serial Terminal software or close it so that the COM port will be free when you do the firmware update on the next step. Else, you will have error during FW update.
:::

:::warning ⚠️ WARNING
**Recovery Mode**

If `AT+BOOT` is not possible to be sent to the device, you can enable DFU mode via WisBlock Base TX1 pin. You need to connect TX1 pin to GND then reset the device to enter DFU mode. You can now proceed on the next step and upload the firmware even without the `AT+BOOT` command.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x4_boot.png"
  width="70%"
  caption="AT+BOOT to Initialize Boot Mode"
/>

6. After initiating Boot mode, you can now execute the firmware update. You need to open command prompt and must be in `RAK4631-R Update` folder directory to do the firmware update. This is folder where you place the nRFutil and the latest firmware. You need to input `cd C:/RAK4631-R Update/` followed  by `nrfutil.exe dfu serial -pkg RAK4631_latest_dfu_package.zip -p COM32`. You have to ensure that you have the right `.zip` file name and `COM port number` to avoid errors.

::: tip 📝 NOTE
You need to change the COM port number in the command based on your PC. In this example, it is COM32 but it can be different in your PC.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x5_sucesss_nrfutil.png"
  width="90%"
  caption="FW Update Using nRFutil"
/>

7. Congrats on the 100% firmware upload, you can now check if the firmware is successful updated by using `AT+VER=?` command. You can follow the [guide on Tera Term](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) to check the firmware version and to confirm if the device is now updated.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x6_version_check_ok.png"
  width="70%"
  caption="RAK4631-R Latest Firmware Version Check"
/>



### For Linux

Perform the four steps described in the next section [Setup the Linux Environment](#setup-the-linux-environment).

#### Setup the Linux Environment

1. First, open a new terminal, then install all dependencies.


```
sudo apt-get update
sudo apt-get install net-tools git curl python xclip python3-pip
```

2. The following prerequisite must be installed: `Python 3.7` or later. Check your Python version, as shown in **Figure 6**:

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/python-version.png"
  width="90%"
  caption="Check Python version"
/>

3. Add `.local` folder to Linux `$PATH` variable.

```
export PATH="$HOME/.local:$PATH"
```

4. Now, you can install `adafruit-nrfutil` and `nrfutil`.

`nrfutil` and `adafruit-nrfutil` are available as a package in the Python Package Index (PyPI). Execute the following commands:

```
sudo apt-get update
pip3 install nrfutil --user
pip3 install adafruit-nrfutil==0.5.3.post16 --user
```

#### Execute the Firmware Update via USB 

1. Download the zip file [DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). 

When you plug in the RAK4631-R through the USB to Linux, you will see the related information "**cdc_acm 1-1:1.0:  ttyACM0: USB ACM device**" from the `dmesg` command.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/dmesg-tty.png"
  width="90%"
  caption="Checking USB CDC device using dmesg command"
/>

In this case, the RAK4631-R **USB CDC** device name is `/dev/ttyACM0`.

2. Perform the steps described in the section [Setup the Device Console Port in Linux](#setup-the-device-console-port-in-linux).

3. On minicom, enter the following AT command:

```
AT+BOOT
```

4. Now, open the terminal shell go to the directory where you put the DFU Distribution Package. After that, execute the following command:

`nrfutil dfu usb-serial -pkg RAK4631_latest_dfu_package.zip -p /dev/ttyACM0`



-->

#### Setup the Device Console Port in Linux

1. Install the minicom using the following commands:

```
sudo apt-get update
sudo apt-get install minicom
```

2. Open the minicom terminal utility with the ttyACM0 interface.

Enter the following code: `minicom -D /dev/ttyACM0`


#### Checking the Device Firmware Version

To check the device firmware version in the minicom console, enter the following AT command:

```
AT+VER=?
```

You should see then the current FW version of the module.




### For MacOS

1. Download [nrfutil](https://github.com/NordicSemiconductor/pc-nrfutil/releases/download/v6.1.3/nrfutil-mac.1). Usually, the `nrfutil-mac.1` file will go to the downloads folder. This section assumes any downloaded file goes to downloads folder.

2. Open the terminal and go to the downloads directory or the location where you put the downloaded file. You have to change the `username` based on your machine. In this guide, `apple` is used as the user.

```
cd /Users/username/Downloads
```

or you can directly try

```
cd Downloads
```

3. Make the `nrfutil-mac.1` executable.

```
chmod +x nrfutil-mac.1
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/downloads-chmod-nrfutil.png"
  width="60%"
  caption="Download nrfutil for macOS"
/>

4. You also need to determine the port name of the RAK4631-R using the command:

```
ls /dev/cu.*
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rak4631-r-port.png"
  width="60%"
  caption="Check the port"
/>

5. Download the [RAK4631-R Firmware.](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip) Usually, the `RAK4631_latest_dfu_package.zip` file will go to the downloads folder.

6. Open a serial terminal software and run `AT+BOOT` to enable bootloader mode of RAK4631-R.

```
AT+BOOT
```

7. You can now execute the firmware update.

::: tip 📝 NOTE
- The `nrfutil-mac.1` must be on the same folder with the `RAK4631_latest_dfu_package.zip`. In this guide it is **Downloads** folder.
- You should be connected on the right port. The port name in your computer might be different than the one in this guide.
- It might take a while for the update. Do not remove the USB or terminate the terminal application while doing the uploading process.
:::

```
./nrfutil-mac.1 dfu usb-serial -pkg RAK4631_latest_dfu_package.zip -p /dev/cu.usbmodemC0D048F6604F1
```

## Firmware Update Using BLE via OTA DFU

This section covers how to update your RAK4631-R firmware wirelessly via BLE. First, you need to download and install the nRF Connect developed by Nordic Semiconductor. The App is available both in [Play Store](https://play.google.com/store/apps/details?id=no.nordicsemi.android.mcp&hl=en&gl=US) and [App Store](https://apps.apple.com/us/app/nrf-connect-for-mobile/id1054362403).

- [DFU OTA Using iOS](/Product-Categories/WisBlock/RAK4631-R/DFU/#for-ios)
- [DFU OTA Using Android](/Product-Categories/WisBlock/RAK4631-R/DFU/#for-android)

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/nordic-app.png"
  width="60%"
  caption="nRF Connect App available in Play Store and App Store"
/>




### For iOS




#### OTA DFU over BLE

1. Download the [DFU package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip) of the RAK4631-R and save it on your mobile phone.

::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to [iCloud Services](https://www.icloud.com/) and download it to your smartphone. 
:::

Make sure the Bluetooth on your mobile is on.

2. Press the reset button and wait for a couple of seconds.

3. Open the nRF Connect mobile application. You will see all the BLE devices in range in the Scanner list.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/available-bluetooth-ios.png"
  width="40%"
  caption="Available Bluetooth Devices"
/>

4. Look for a BLE Device named **RAK.XXXXXX** in the scanner list of the app. Connect to this device and then click on the **Client** tab.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4631-R is turned off automatically if no connection is established after 60 seconds. Connect to **RAK.XXXXXX** immediately after pressing the reset button.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/secure-dfu-ios.png"
  width="70%"
  caption="Secure DFU Service"
/>

5. Choose "**Secure DFU Service**" and click the button highlighted in red, as shown in **Figure 13**.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/buttonless-dfu-ios.png"
  width="40%"
  caption="Buttonless DFU"
/>

7. A **Write Value** window will pop up. Select **Bool** tab, move the switch from `False` to `True` then press **Write** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/bootloader-reset-ios.png"
  width="70%"
  caption="Resetting the Bootloader via Bluetooth"
/>

8. Now, the RAK4631-R is now working in DFU Mode. In the application, you will see the default status overview of RAK4631-R.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/default-bluetooth-id-ios.png"
  width="40%"
  caption="RAK4631-R default status overview after resetting"
/>

9. In the Scanner list, find a BLE device named **DfuTarg** and then click the **Connect** button.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/default-status-overview-ios.png"
  width="40%"
  caption="RAK4631-R Default Bluetooth ID after Resetting"
/>

10. After connected, select the **DFU** tab, then click **Open Document Picker**. This will prompt you to select the Distribution packet zip file of the firmware you have downloaded. Press **OK**, and it will automatically start to upgrade the firmware of your RAK4631-R through DFU over BLE.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/distribution-packet-file-ios.png"
  width="40%"
  caption="Distribution Packet File Type under DFU"
/>


::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to [iCloud Services](https://www.icloud.com/) and download it to your smartphone. 
:::

11. After upgrading, the module restarts, and the DFU connection will be disconnected. Now, you can use your RAK4631-R with the latest firmware.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/dfu-upgrade-ios.png"
  width="100%"
  caption="DFU Upgrading of RAK4631-R Firmware via BLE"
/>



### For Android




#### OTA DFU Over BLE

1. Download the [DFU package of the RAK4631-R](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip) and save it on your mobile phone.

::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to Google Drive and download it to your smartphone. 
:::

Make sure the Bluetooth on your mobile is on.

2. Press the reset button and wait for a couple of seconds.

3. Open the nRF Connect mobile application. You will see all the BLE devices in range in the Scanner list.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/available-bluetooth-android.png"
  width="40%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

4. Look for a BLE Device named **RAK.XXXXXX** in the scanner list of the app. Connect to this device and then click the **Client** tab.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4631-R is turned off automatically if no connection is established after 60 seconds. Connect to **RAK.XXXXXX** immediately after pressing the reset button.
:::


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/secure-dfu-nordic.png"
  width="70%"
  caption="Secure DFU Service in the Nordic App"
/>

5. Choose "**Secure DFU Services**" and click the button highlighted in red, as shown in **Figure 21**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/buttonless-dfu-android.png"
  width="40%"
  caption="Buttonless DFU"
/>

6. Click the arrow up button highlighted in a red box.

7. A **Write value** window will pop up. Press the **SEND** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/resetting-bootloader-android.png"
  width="70%"
  caption="Resetting the Bootloader via Bluetooth"
/>

8. Now, the RAK4631-R is now working in DFU Mode. In the application, you will see the default status overview of RAK4631-R.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/default-status-overview-android.png"
  width="40%"
  caption="RAK4631-R default status overview after resetting"
/>

9. In the Devices list, find a BLE device named **DfuTarg** and click on the **Connect** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/default-bluetooth-id-android.png"
  width="40%"
  caption="RAK4631-R Default Bluetooth ID after Resetting"
/>

After connected, click on the **DFU** icon highlighted in red, as shown below.

10. Select the **Distribution packet (ZIP**) and press **OK**. This will prompt you to select the zip file of the firmware that you have downloaded. It will automatically start to upgrade the firmware of your RAK4631-R through DFU over BLE.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/distribution-packet-file-android.png"
  width="70%"
  caption="Distribution Packet File Type under DFU"
/>


::: tip 📝 NOTE
You can upload the Distribution packet (ZIP) file to Google Drive and download it to your smartphone. 
:::

11.  After upgrading, the module restarts, and the DFU connection will be disconnected. Now, you can use your RAK4631-R with the latest firmware.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/dfu-upgrading-android.png"
  width="40%"
  caption="DFU Upgrading of RAK4631-R Firmware via BLE"
/>

## Updating RAK4631 to RUI3

If your device is the RAK4631 WisBlock Core, you can upgrade its firmware to make it RAK4631-R. This section covers the steps on how to do the upgrade.

::: tip 📝 NOTE
Converting the RAK4631 to RAK4631-R is a two-step processes. First, you need to update the RAK4631 bootloader that is compatible to RAK4631-R Firmware. Second, you need to upload the right RAK4631-R firmware dedicated for FW conversion of RAK4631 to RAK4631-R.
:::

- [Using Windows](/Product-Categories/WisBlock/RAK4631-R/DFU/#using-windows)
- [Using Linux](/Product-Categories/WisBlock/RAK4631-R/DFU/#using-linux)
- [Using MacOS](/Product-Categories/WisBlock/RAK4631-R/DFU/#using-macos)
    
### Using Windows

#### Bootloader Update via USB

1. Create a new folder in your `C:\` drive named `RAK4631 Bootloader to RUI v3`.
2. Download the [adafruit-nrfutil.exe (you need to unzip/extract the downloaded zip to get the .exe file)](https://github.com/adafruit/Adafruit_nRF52_nrfutil/releases/download/0.5.3.post17/adafruit-nrfutil--0.5.3.post17-win.zip) and [rui3_nrf52840_bootloader](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/rui3_nrf52840_bootloader_latest.zip) then copy both files to `RAK4631 Bootloader to RUI v3` folder you created.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/1_nrf_rui3_bootloader.png"
  width="80%"
  caption="Adafruit-nrfutil and RUI3 Bootloader"
/>

3. Connect the RAK4631-R via USB and check if port has been detected via device manager. In this guide it is detected as COM31. The COM port number is not fixed and can be different depending on the PC. If no port is shown in device manager, you can try to double click reset button on the WisBlock Base and check again.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/2_device_manager_port.png"
  width="80%"
  caption="COM Port on Device Manager"
/>

4. You are now ready to do the bootloader upgrade. Open the command prompt and change directory via `cd C:\RAK4631 Bootloader to RUI v3\`. After that, you can now execute the bootloader upgrade using the command below. 
   
::: tip 📝 NOTE
You need to change the COM port number in the command based on your PC. In this example, it is COM31 but it can be different in your PC.

If you see errors, check again if you are in the right directory and have the necessary files as shown in Figure 27.
:::

```
adafruit-nrfutil.exe --verbose dfu serial --package rui3_nrf52840_bootloader_latest.zip --port COM31 -b 115200 --singlebank --touch 1200 
```
<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/3_adafruit_nrfutil_upload.png"
  width="90%"
  caption="RUI3 Bootloader Upgrade"
/>

5. After a successful bootloader upload, you are now ready to upload the RUI3 firmware on the next steps.


#### Firmware Update via USB

1. After completing the bootloader upgrade, it will change to a new COM port number. It this guide it changed to `COM32` from `COM31`.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/4_comport_change.png"
  width="40%"
  caption="COM Port Change"
/>

2. Download [nrfutil.exe](https://github.com/NordicSemiconductor/pc-nrfutil/releases) and the [rui3_rak4631_latest](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/)RUI3 FW which is specifically designed for the RAK4631's conversion to RAK4631-R. Then place the two files on `RAK4631 Bootloader to RUI v3` folder.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/5_nrfutil_rui3_fw.png"
  width="90%"
  caption="Nrfutil and rui3_rak4631_latest Firmware"
/>

3. You are now ready to do the firmware update. Open the command prompt and change directory via `cd C:\RAK4631 Bootloader to RUI v3\`. After that, you can now execute the firmware update using the command below.

```
nrfutil.exe dfu serial -pkg rui3_rak4631_latest.zip -p COM32
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/6_rui3_success.png"
  width="90%"
  caption="Firmware update via USB"
/>

4. You can now check if the firmware upload is successful by checking the the firmware version using `AT+VER=?` command. You can follow the [guide on Tera Term](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) to check firmware version and confirm if the device is already updated.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x6_version_check_ok.png"
  width="70%"
  caption="RAK4631-R Latest Firmware Version Check"
/>

### Using Linux

Perform the four steps described in the section [Setup the Linux Environment](#setup-the-linux-environment).

When you plug in the RAK4631-R through the USB to Linux, you will see the related information "**cdc_acm 1-1:1.0:  ttyACM0: USB ACM device**" from the `dmesg` command.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/dmesg-tty.png"
  width="90%"
  caption="Checking USB CDC device using dmesg command"
/>

In this case, the RAK4631-R **USB CDC** device name is `/dev/ttyACM0`


#### Bootloader Update via USB on Linux

After determining the **USB CDC** device name, download the [rui3_nrf52840_bootloader](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/rui3_nrf52840_bootloader_latest.zip).

Then execute the following command:

```
adafruit-nrfutil --verbose dfu serial --package rui3_nrf52840_bootloader_latest.zip -p /dev/ttyACM0 
```

The -p parameter is RAK4631-R **USB CDC** device name.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rui-boot-linux.png"
  width="90%"
  caption="Bootloader update via USB"
/>

#### Firmware Update via USB on Linux

Download the [rui3_rak4631_latest](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/) firmware.

On the download folder, execute the following command: 

```
 nrfutil dfu usb-serial -pkg rui3_rak4631_latest -p /dev/ttyACM0
```

The -p parameter is RAK4631-R **USB CDC** device name.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/ruiv3-fw.png"
  width="90%"
  caption="Firmware update via USB"
/>

this case, the RAK4631-R **USB CDC** device name is `/dev/ttyACM0`
-->



#### Set Up the Device Console Port in Linux

Install the minicom terminal emulator utility. Open a new terminal and execute the following commands:

```
sudo apt-get update
sudo apt-get install minicom
```

Now, open minicom on **USB CDC** port and then send the `AT+VER=?` command to check the RUI firmware version.

```
minicom -D /dev/ttyACM0

```

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/minicom.png"
  width="90%"
  caption="Minicom utility"
/>



### Using MacOS

#### Updating the Bootloader to be Compatible with RAK4631-R FW

1. Download the [adafruit-nrfutil-macos](https://github.com/adafruit/Adafruit_nRF52_nrfutil/releases/download/%24(APPVEYOR_REPO_TAG_NAME)/adafruit-nrfutil-macos). Usually, the `adafruit-nrfutil-macos` file will go to the downloads folder. This section assumes any downloaded file goes to downloads folder.

2. The next step after downloading the file is to open the terminal and go to the downloads directory or the location where you put the downloaded file. You have to change the `username` based on your machine. In this guide, `apple` is used as the user.

```
cd /Users/username/Downloads
```

or you can directly try

```
cd Downloads
```

3. Make the `adafruit-nrfutil-macos` executable.

```
chmod +x adafruit-nrfutil-macos
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/downloads-chmod.png"
  width="60%"
  caption="Download adafruit-nrfutil for macOS"
/>

4. You also need to determine the port name of the RAK4631-R using the command:

```
ls /dev/cu.*
```
<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rak4631-port.png"
  width="60%"
  caption="Check the port"
/>

5. Download the [RAK4631 to RAK4631-R Bootloader](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/rui3_nrf52840_bootloader_latest.zip) firmware. Usually, the `rui3_nrf52840_bootloader_latest.zip` file will go to the downloads folder.

6. You can now execute the bootloader update.

::: tip 📝 NOTE
- The `adafruit-nrfutil-macos` must be on the same folder with the `ruiv3_nrf52840_bootloader.zip`. In this guide it is **Downloads** folder.
- You should be connected on the right port. The port name in your computer might be different than the one in this guide.
:::

```
./adafruit-nrfutil-macos --verbose dfu serial --package rui3_nrf52840_bootloader_latest.zip -p /dev/cu.usbmodem14101 -b 115200 --singlebank --touch 1200
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rak4631-r-bootloader-ok.png"
  width="60%"
  caption="Successful bootloader update"
/>


#### Uploading the RAK4631-R Firmware

After updating the bootloader, you can now upload the RAK4631-R firmware by following the steps below. You have to note that the RAK4631-R firmware used in this section is a dedicated firmware designed for updating RAK4631 to RAK4631-R.

1. Download the [nrfutil](https://github.com/NordicSemiconductor/pc-nrfutil/releases/download/v6.1.3/nrfutil-mac.1). Usually, the `nrfutil-mac.1` file will go to the downloads folder. This section assumes any downloaded file goes to downloads folder.

2. If your terminal is not yet open, open the terminal and go to the downloads directory or the location where you put the downloaded file. You have to change the `username` based on your machine. In this guide, `apple` is used as the user.

```
cd /Users/username/Downloads
```

or you can directly try

```
cd Downloads
```

3. Make the `nrfutil-mac.1` executable.

```
chmod +x nrfutil-mac.1
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/downloads-chmod-nrfutil.png"
  width="60%"
  caption="Download adafruit-nrfutil for macOS"
/>

4. You also need to determine the port name of the RAK4631 using the command:

```
ls /dev/cu.*
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rak4631-r-port.png"
  width="60%"
  caption="Check the port"
/>

5. Download the [RAK4631 to RAK4631-R Conversion](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/) firmware. Usually, the `rui3_rak4631_latest.zip` file will go to the downloads folder.

6. You can now execute the firmware update.

::: tip 📝 NOTE
- The `nrfutil-mac.1` must be on the same folder with the `rui3_rak4631_latest.zip`. In this guide it is **Downloads** folder.
- You should be connected on the right port. The port name in your computer might be different than the one in this guide.
- It might take a while for the update. Do not remove the USB or terminate the terminal application while doing the uploading process.
:::

```
./nrfutil-mac.1 dfu usb-serial -pkg rui3_rak4631_latest.zip -p /dev/cu.usbmodemC0D048F6604F1
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/rak4631-r-conversion-fw-ok.png"
  width="60%"
  caption="Successful RAK4631-R Conversion"
/>

7. After the success FW upload, your RAK4631 is now RAK4631-R. Open a serial terminal software and run `AT+VER=?` to see the FW version.

```
AT+VER=3.2.0-p2_22q1_final.87
OK
```


## Converting RAK4631-R to RAK4631

You have the option to convert your RAK4631-R to RAK4631.

1. Download the necessary files needed for conversion. You need to have the [`rak4631_factory_application.zip`, `rak4631_factory_bootloader.zip`, `rak4631_factory_softdevice.zip`](https://downloads.rakwireless.com/RUI/RUI3/Bootloader%20Upgrade/), and [nrfutil.exe](https://github.com/NordicSemiconductor/pc-nrfutil/releases) in a common folder. 

2. Create a new folder in your `C:\` drive named `RAK4631 Bootloader to RUI v3` and place all the conversion files you downloaded from the previous step.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/11_downgrade_files.png"
  width="70%"
  caption="RAK4631-R Conversion FW files and NRFUTIL"
/>

3. Connect the RAK4631-R via USB and check if port has been detected via device manager. In this guide it is detected as COM32. The COM port number is not fixed and can be different depending on the PC. If no port is shown in device manager, you can try to double click reset button on the WisBlock Base and check again.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/2_device_manager_port_update.png"
  width="70%"
  caption="Checking COM Port via Device Manager"
/>

4. After that, you need to send `AT+BOOT` command to the device. You can follow the [guide on using Tera Term](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) but instead of checking the firmware version, you have to input `AT+BOOT`. You will see no reply since the module will restart then will be disconnected momentarily before re-establishing again the connection to Tera Term. 

::: tip 📝 NOTE
You have to disconnect the device connection to Tera Term or close it so that the COM port will be free when you do the firmware update on the next step. Else, you will have error during FW update.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x4_boot.png"
  width="70%"
  caption="AT+BOOT to Initialize Boot Mode"
/>

5. After initiating Boot mode, you can now execute the firmware conversion. Open the command prompt and change directory via `cd C:\RAK4631 Bootloader to RUI v3\`. After that, you can now execute the conversion using the command below.  You have to ensure that you have the right `.zip` file name and `COM port number` to avoid errors.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/13_success_nrfutil.png"
  width="90%"
  caption="RAK4631-R to RAK4631 Conversion"
/>

6. After the successful upload, you can now see RAK4631 drive detected. This indicates that the device has now the Arduino BSP bootloader on it and ready to be uploaded with firmware created using the WisBlock Arduino BSP and not RUI3. You also need to check the COM port number since it will changed once you convert to Arduino BSP bootloader.

::: tip 📝 NOTE
If there is no RAK4631 drive detected, try to double-click on the reset button on the WisBlock Base.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/14_rak4631_detected.png"
  width="70%"
  caption="RAK4631 Detected"
/>

## Miscellaneous

### How to Check Firmware Version using Tera Term

1. Download and install the console UART utility [Tera Term](https://osdn.net/projects/ttssh2/releases/). You can also use other serial terminal tool or even the Arduino Serial Monitor.
2. Connect the RAK4631-R via USB port of the WisBlock Base board.
3. Check the COM port of the device using device manager. The port number is not fix and can change on different computers. If no port is detected, double click the reset button on the WisBlock Base.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/2_device_manager_port_update.png"
  width="70%"
  caption="Checking COM port via device manager"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/x3_port_zoom.png"
  width="40%"
  caption="COM port list"
/>

4. Launch **Tera Term** and **New Connection** window will open. Click on `Serial` and select the correct serial port on `Port`. To close the window, click on the **OK** button. You can check the co

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/7_tera_term_port.png"
  width="60%"
  caption="Tera Term New connection window"
/>

5. On the Tera Term menu, select **Setup** -> **Serial port...**

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/8_tera_term_setting.png"
  width="60%"
  caption="Tera Term Serial port selection"
/>

5. Check the `Port` if correct. A USB interface is used for connection so you can ignore the Baud Rate (Speed) setting. Click on the **New setting** button to save.

<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/9_tera_term_baud.png"
  width="40%"
  caption="Tera Term Serial port Configuration"
/>

6. You can now check the firmware version of your device via `AT+VER=?`. You can also input first `ATE` command so you can see the command you send.
   
<rk-img
  src="/assets/images/wisblock/rak4631-r/dfu/10_tera_term_success.png"
  width="60%"
  caption="Get the device Firmware Version"
/>

::: tip 📝 NOTE

`AT+VER`: get the version of the FW.

```
AT+VER=?

AT+VER=3.2.0-p2_22q1_final.87 
```

:::
