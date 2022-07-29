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
- [Latest RAK4630 FW DFU Distribution Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip)

## Firmware Update via USB

You need to have a direct connection to the USB bus of RAK4630 before you can proceed with the update. You can check the minimum schematic required in the [quick start guide hardware setup section](/Product-Categories/WisDuo/RAK4630-Module/Quickstart/#hardware-setup). This guide covers the three most popular operating systems:

- [Using Windows](/Product-Categories/wisduo/rak4630-module/DFU/#for-windows)
- [Using Linux](/Product-Categories/wisduo/rak4630-module/DFU/#for-linux)
- [Using MacOS](/Product-Categories/wisduo/rak4630-module/DFU/#for-macos)

### For Windows

1. Create a new folder in your `C:\` drive named `RAK4631-R Update`.
2. Download the [nRFutil.exe](https://github.com/NordicSemiconductor/pc-nrfutil/releases) and the [latest DFU Package](https://downloads.rakwireless.com/RUI/RUI3/Image/RAK4631_latest_dfu_package.zip). Once you downloaded both files, put them in the `RAK4631-R Update` folder you created as shown in Figure 1.

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/x2_files_needed.png"
  width="70%"
  caption="nRFutil.exe and RAK4630 Latest Firmware"
/>

3. Connect the RAK4630 via USB and check if port has been detected via device manager. In this guide it is detected as COM32. The COM port number is not fixed and can be different depending on the PC. If no port is shown in device manager, you can try to double click reset button on the WisBlock Base and check again.

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/2_device_manager_port_update.png"
  width="70%"
  caption="Checking COM Port via Device Manager"
/>

4. After that, you need to send `AT+BOOT` command to the device via Serial Terminal software. You can follow the [guide on using Tera Term from RAK4631-R documentation](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) but instead of checking the firmware version, you have to input `AT+BOOT`. You will see no reply since the module will restart then will be disconnected momentarily before re-establishing again the connection to Tera Term. 

::: tip 📝 NOTE
You have to disconnect the device connection to TeraTerm/Serial Terminal software or close it so that the COM port will be free when you do the firmware update on the next step. Else, you will have error during FW update.
:::

:::warning ⚠️ WARNING
**Recovery Mode**

If `AT+BOOT` is not possible to be sent to the device, you can enable DFU mode via UART2_TX pin. You need to connect UART2_TX pin to GND then reset the device to enter DFU mode. You can now proceed on the next step and upload the firmware even without the `AT+BOOT` command.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/x4_boot.png"
  width="70%"
  caption="AT+BOOT to Initialize Boot Mode"
/>

5. After initiating Boot mode, you can now execute the firmware update. You need to open command prompt and must be in `RAK4631-R Update` folder directory to do the firmware update. This is folder where you place the nRFutil and the latest firmware. You need to input `cd C:/RAK4631-R Update/` followed  by `nrfutil.exe dfu serial -pkg RAK4631_latest_dfu_package.zip -p COM32`. You have to ensure that you have the right `.zip` file name and `COM port number` to avoid errors.

::: tip 📝 NOTE
You need to change the COM port number in the command based on your PC. In this example, it is COM32 but it can be different in your PC.
:::

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/x5_sucesss_nrfutil.png"
  width="90%"
  caption="FW Update Using nRFutil"
/>

6. Congrats on the 100% firmware upload, you can now check if the firmware is successful updated by using `AT+VER=?` command. You can follow the [guide on Tera Term from RAK4631-R documentation](/Product-Categories/WisBlock/RAK4631-R/DFU/#how-to-check-firmware-version-using-tera-term) to check the firmware version and to confirm if the device is now updated.

<rk-img
  src="/assets/images/wisduo/rak4630-module/dfu/x6_version_check_ok.png"
  width="70%"
  caption="RAK4631-R Latest Firmware Version Check"
/>

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




### For iOS




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