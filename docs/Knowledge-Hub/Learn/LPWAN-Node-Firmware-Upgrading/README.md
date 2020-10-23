---
sidebar: false
rak_img: /assets/images/wisduino/rak811-evaluation-board/quickstart/overview/RAK811-wisnode_home.png
rak_desc: This document is a sample demonstration on how to upgrade the firmware of you LPWAN Node.
tags:
  - User-Manual
  - WisNode
  - WisDuino
  - WisDuo
  - WisTrio
header:
  title: LPWAN Node Firmware Upgrading
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/lpwan-node-firmware-upgrading.jpg
posted: 2/29/2020 10:30 AM
---

# LPWAN Node Firmware Upgrading

It is always best for your RAK LPWAN Node to upgrade to its latest firmware to have the optimum performance.

## Requirements

Download or install the requisites listed below:

- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)
- [LPWAN Firmware](https://downloads.rakwireless.com/en/LoRa/)

:::tip 📝 NOTE
For this sample demonstration, we will be using the RAK4200 LPWAN Node.
:::

1. Connect your LPWAN into your windows machine as instructed in the [Quick Start Guide](/Product-Categories/) of your chosen LPWAN Node.

2. Open the RAK Serial Port Tool you have just installed and let your RAK LPWAN Node work in boot mode by setting an AT command through serial port as follows: 

```sh
at+set_config=device:boot
```
<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/boot-mode.jpg"
  width="75%"
  caption="Entering Boot Mode"
/>

3. Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/rak-firmware-upgrade-tool.jpg"
  width="75%"
  caption="RAK Firmware Upgrade Tool"
/>

4. Click “**Choose File**” button to choose a correct upgrade file:

<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/file-choosing.jpg"
  width="75%"
  caption="Choosing the Correct Upgrade file"
/>

5. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/burning-progress.jpg"
  width="75%"
  caption="Firmware Upgrading in Process"
/>

6. You should see something like the image below if everything went well.

<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/upgrade-successful.jpg"
  width="75%"
  caption="Successfully Upgraded Firmware"
/>

7. CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.

8. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/knowledge-hub/user-manual/node-firmware-upgrading/restart.jpg"
  width="75%"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

