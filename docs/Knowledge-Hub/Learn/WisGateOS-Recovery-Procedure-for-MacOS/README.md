---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A recovery procedure guide for WisGate Edge Gateways (OpenWRT) for MacOS.
tags:
  - User-Manual
  - WisGate
  - WisGateOS
  - MacOS
  - RAK7268
  - RAK7268C
  - RAK7289
  - RAK7289C
  - TFTP
header:
  title: WisGateOS Recovery Procedure for MacOS
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/multi-rak-gateway-mesh.jpg
posted: 18/04/2022 10:30 AM
---

# WisGateOS Recovery Procedure for MacOS

## Requirements

- Apple PC or MacBook with MacOS
- One free USB type A port and a LAN port
- USB type A to USB type C cable
- Ethernet cable
- Latest firmware
  - [RAK7268/C](https://downloads.rakwireless.com/LoRa/RAK7268/Firmware/RAK7268_Latest_Firmware.zip)
  - [RAK7289/C](https://downloads.rakwireless.com/LoRa/RAK7289/RAK7289_Latest_Firmware.zip)

## Connecting the Gateway

1. Make sure the gateway is off.
2. Connect the USB-C end of the cable to the gateway and the Type-A end to the PC/laptop
3. Connect the Ethernet cable between the Gateway and the PC/laptop.
4. Do not power the gateway, lave it off.

## Serial Communication Configuration

To be able to interact with the serial console of the gateway you need to open the serial terminal. In this guide, we will use the “screen”.

1. Open an OS X terminal session by pressing **Cmd+Space**, type **terminal** and start it.

2. List the connected devices <code>ls /dev/cu.*</code>

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/1.png"
  width="60%"
  caption="Listing of connected devices"
/>

If there are no other USB serial devices connected the one starting with **cu.usbserial*** will be the gateway.

3. To establish a connection, type in <code>screen /dev/cu.usbserial-XXXXX 57600</code> (Change the **XXXXX** with your specific USB serial port number.)

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/2.png"
  width="60%"
  caption="Typing in the USB serial port number"
/>

4. The terminal will clear.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/3.png"
  width="60%"
  caption="Blank terminal"
/>

5. Power on the gateway.
6. If everything is configured correctly, you will see the booting of the gateway with some additional options.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/4.png"
  width="60%"
  caption="Establishing the connection"
/>

## LAN Card Configuration

To be able to send the firmware to the gateway, you need to set the LAN card to a static address.

1. Go to the Network Preferences of your MAC OS and select the LAN card settings. In this example, it is a USB LAN card.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/5.png"
  width="60%"
  caption="LAN card settings"
/>

2. Change the **Configure IPv4** option to **Manually**.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/6.png"
  width="60%"
  caption="Changing the Configure IPv4 option"
/>

3. Change the **IP Address** to **192.168.1.10** and the **Subnet Mask** to **255.255.255.0**.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/7.png"
  width="60%"
  caption="Changing the IP Address and the Subnet Mask"
/>

4. Apply the changes by pressing the **Apply** button.

## Downloading the Firmware

1. Based on the used model, download the latest available firmware:
- [RAK7268/C latest firmware](https://downloads.rakwireless.com/LoRa/RAK7268/Firmware/RAK7268_Latest_Firmware.zip)
- [RAK7289/C latest firmware](https://downloads.rakwireless.com/LoRa/RAK7289/RAK7289_Latest_Firmware.zip)

2. After downloading, unzip it and rename the **WisGateOS_X.Y.Z.bin** file to **recovery.bin**.

## Set Up the TFTP

1. You can use the built-in TFTP server in the MAC OS X. Usually, the server uses the **/private/tftpboot** folder. Have in mind that by default, the folder is hidden in the finder.  To access it, open the finder. Use **Cmd+Shift+G** and enter **/private/ftpboot**.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/8.png"
  width="60%"
  caption="Finding the TFTP boot folder"
/>

2. Copy the **recovery.bin** file from earlier into the **tftpboot** folder.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/9.png"
  width="100%"
  caption="Finding the TFTP boot folder"
/>

3. Open another terminal and run the following commands:
- To start the TFTP server:

```
sudo launchctl load –F /System/Library/LaunchDaemons/tftp.plist
```

```
sudo launchctl start com.apple.tftpd
```

- To set the permissions to the tftpboot folder and the files inside:

```
sudo chmod 777 /private/tftpboot
```

```
sudo chmod 777 /private/tftpboot/*
```

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/10.png"
  width="60%"
  caption="Executing the commands"
/>

## Flashing the Gateway

1. Go back to the terminal you used to configure the communication.
2. Restart the gateway with the reset button.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/11.png"
  width="60%"
  caption="Restarting the gateway"
/>

3. A dialog will appear in the terminal, press 2 on the keyboard to select the **Load system code then write to Flash via TFTP** option.

4. For the next dialog enter the answers below:

5. - Are you sure? (Y/N) – press **Y**;
   - Input device IP - type **192.168.1.1**, then press **Enter**;
   - Input server IP - type **192.168.1.10**, then press **Enter**;
   - Input Linux Kernel filename - type **recovery.bin**, then press **Enter**.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/12.png"
  width="60%"
  caption="Dialog"
/>

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/13.png"
  width="60%"
  caption="Loading"
/>

5. If everything is ok you should see the firmware transfer and flash. It takes some time to download, flash, and boot. Do not power off or disconnect anything.
6. When the console output prints **Boot done**, you are good to go. You should be able to see the Wi-Fi AP and connect to your gateway as usual.

<rk-img
  src="/assets/images/knowledge-hub/learn/wisgateos-for-macos/14.png"
  width="60%"
  caption="Boot Done"
/>

## Stopping the TFTP

To stop the TFTP server, type in the terminal:

```
sudo launchctl unload -F /System/Library/LaunchDaemons/tftp.plist
```
