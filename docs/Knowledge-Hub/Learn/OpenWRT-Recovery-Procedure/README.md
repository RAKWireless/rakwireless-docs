---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A recovery procedure guide for WisGate Edge Gateways (OpenWRT).
tags:
  - Tutorials
  - WisGate
header:
  title: OpenWRT Recovery Procedure
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 03/09/2021 2:45 PM
---

# OpenWRT Recovery Procedure

## Requirements

1. [PuTTY](https://the.earth.li/~sgtatham/putty/latest/w64/putty-64bit-0.74-installer.msi)

2. [TFTPD64](http://tftpd32.jounin.net/tftpd32.html)

3. Latest firmware for your WisGate Edge Gateway
    - [RAK7249](https://downloads.rakwireless.com/LoRa/DIY-Gateway-RAK7249/Firmware/RAK7249_Latest_Firmware.zip)
    - [RAK7258](https://downloads.rakwireless.com/LoRa/Indoor-Gateway-RAK7258/Firmware/RAK7258_Latest_Firmware.zip)
    - [RAK7240](https://downloads.rakwireless.com/LoRa/RAK7240/Firmware/RAK7240_Latest_Firmware.zip)

4. Console cable
5. Ethernet cable

## Connecting the Gateway

1. Make sure your gateway is off.

2. Connect the console cable to the console port of the gateway and your PC's USB port.

3. Connect the ethernet cable to your gateway’s ETH port and your PC’s ETH port.

4. Do not power the gateway, leave it off.

## PuTTY Configuration

1. Install the PuTTY tool and run the PuTTY.exe. 

2. In the **Connection type** section, select **Serial**, as shown in Figure 2.

3. In the **Serial line** field (Figure 2), change the number of the COM port (in this case it is 3, yours may be different) to the one that represents the Console Cable Port. You can check the number of your COM port in the Device Manager by opening it and expanding the **Ports (COM & LPT)**.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/1.png"
  width="80%"
  caption="Device Manager"
/>

4. In the **Speed** field, input **57600**, as shown in Figure 2.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/2.png"
  width="70%"
  caption="PuTTY Configuration"
/>

5. Click **Open**.

6. Power on the gateway.

If everything is set up correctly, you will see image 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/3.png"
  width="80%"
  caption="Debug output in the PuTTY serial console"
/>

## Changing the LAN Card’s IP Address 

1. To manage to download the firmware, you need to set a static IP address to the LAN card. This is done in Windows: Control Panel > Network and Internet > Network and Sharing Center > Change adapter settings > right-click over the Ethernet option > Properties > Networking. Select **Internet Protocol Version 4 (TCP/IPv4)** and click **Prosperities**. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/4.png"
  width="50%"
  caption="Ethernet Properties"
/>

2. Select the **Use the following IP address** radio button.

3. For **IP address**, input **192.168.1.10**.

4. For **Subnet mask**, input **255.255.255.0**.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/5.png"
  width="50%"
  caption="Internet Protocol Version 4 (TCP/IPv4) Properties"
/>

5. Click **OK** to confirm.

## Set up the TFTPD64

1. Extract the RAR archive downloaded from the TFTPD64 site. 

2. Download the latest firmware for your gateway and extract the BIN file.

3. Rename the BIN file to **recovery.bin** and add it to the TFTPD64 folder.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/6.png"
  width="60%"
  caption="TFTPD64 Folder"
/>

4. Start the **tftpd64.exe**. It should ask you for permission. Make sure that you allow both private and public networks and click **Allow access**.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/7.png"
  width="80%"
  caption="Windows Security Alert"
/>

5. You do not need to make any changes here. Just open the **Log viewer** tab so you can see the process.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/8.png"
  width="50%"
  caption="TFTPD64"
/>

## Flashing the Gateway

1. Restart the gateway.

2. The dialog showed in Figure 8 will appear in the PuTTY serial console. Press **2** on your PC’s keyboard to choose the second option.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/9.png"
  width="80%"
  caption="Operation list"
/>

3. You will have the next dialog with the console:

      - Are you sure? (Y/N) – press Y;
      - Input device IP - press Enter;
      - Input server IP - press Enter;
      - Input Linux Kernel filename - type recovery.bin.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/10.png"
  width="80%"
  caption="PuTTY serial console input"
/>

4. If everything is ok you should see the firmware send and flash.

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/11.png"
  width="100%"
  caption="Firmware is flashing"
/>

It takes some time to download flash and boot. Do not power off or disconnect anything.

When the console output prints **Done!** (Figure 12), you are good to go. You should be able to see the Wi-Fi AP and connect to your gateway as usual. 

<rk-img
  src="/assets/images/knowledge-hub/tutorials/openwrt-recovery-procedure/12.png"
  width="75%"
  caption="Recovery procedure is done"
/>
