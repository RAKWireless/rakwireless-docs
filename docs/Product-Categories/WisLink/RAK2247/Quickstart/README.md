---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2247
---

# Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wislink-lora/rak2247/quickstart/2.quickstart/rak2247_1.png"
  width="100%"
  caption="RAK2247 WisLink LPWAN Concentrator Components"
/> -->

### What do you need?

Before going through each and every step in the installation and guide of the RAK2247 LPWAN Gateway, make sure to prepare the necessary items listed below:

1. RAK2247 WisLink LPWAN Concentrator
2. [mPCIe to USB Board](https://store.rakwireless.com/products/mpcie-to-usb-board)
   <!-- 2. RAK2247 Pi Hat (Not included in the package) -->
   <!-- 3. Raspberry Pi 3B+ (Not included in the package)  -->
   <!-- 4. 16GB SD Card (included) + Card Reader -->
3. A Windows/Mac OS/Linux Computer

### What's included in the Package?

<rk-img
  src="/assets/images/wislink-lora/rak2247/quickstart/2.quickstart/package.jpg"
  width="70%"
  caption="Package Contents"
/>

## Product Configuration

### RAK2247 + x86 Linux PC
This section explains the basic steps on how to interface the RAK2247 WisLink LPWAN Concentrator with a Linux Operating System in a computer.

<!-- * The following devices are necessary for the interface:
  * RAK2247 WisLink LPWAN Concentrator
  * [mPCIe to USB Board](https://store.rakwireless.com/products/mpcie-to-usb-board) -->

1. Insert the RAK2247 mPCIe board into the USB carrier board and plugged into a free USB port of your PC. Your Linux PC should recognized it as a USB device.

:::tip 📝 NOTE:
 If you want to connect the **RAK2247 mPCIe board** to the **Linux PC** directly, make sure to have the PERST# signal (Pin 22) pulled down.
:::

<rk-img
  src="/assets/images/wislink-lora/rak2247/quickstart/3.rak2247+linuxpc/rak2247pcie.jpg"
  width="60%"
  caption="RAK2247 WisLink LPWAN Concentrator to a PCIe-to-USB board"
/>

2. Open the command line then enter the command below in order to clone the Github repository that is required for the process to be completed:

```sh
git clone https://github.com/RAKWireless/rak_common_for_gateway.git
```

3. Get the name of the interface you are using to connect to the internet by typing the command:

```sh
ifconfig
```

An example in Figure 2 shows the name of the wireless interface “**wlx6045bdf0cf64**”.

<rk-img
  src="/assets/images/wislink-lora/rak2247/quickstart/3.rak2247+linuxpc/networkname.jpg"
  width="75%"
  caption="Network Interface Name"
/>

* Enter the RAK Folder through:

```sh
cd rak_common_for_gateway/lora/rak2247_usb
```

4. Next, you need to insert the name you got in Step 3 for your interface in the following files:
    * rak_common_for_gateway/lora/set_eui.sh
    * rak_common_for_gateway/lora/update_gwid.sh
* Then, replace the following line:

```
GATEWAY_EUI_NIC=”eth0”
```

* With the line,

```
GATEWAY_EUI_NIC=”wlx6045bdf0cf64h0”
```

Again, the values are just an example. Remember to do this for all 3 files in step 4.

5. **Add** the following lines of code at the end of “**install.sh**” file: ( In addition to inserting the name of the interface from the previous step)

```sh
cp ../set_eui.sh packet_forwarder/lora_pkt_fwd/
cp ../update_gwid.sh packet_forwarder/lora_pkt_fwd/
cp ../start.sh packet_forwarder/lora_pkt_fwd/
mkdir -p /opt/ttn-gateway/
cp -rf packet_forwarder /opt/ttn-gateway/
```

:::tip 📝 NOTE:
 If you want packet forwarder to start on boot, you need to also add the lines below:
:::

```sh
cp ../ttn-gateway.service /lib/systemd/system/
systemctl enable ttn-gateway.service
```

6. Save “**install.sh**” file and execute it in order to install: 

```sh
sudo ./install.sh
```

7.Wait for the installation to complete. Using the commands below, go and run the newly created process (**lora_pkt_fwd**):

```sh
cd /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd 
sudo ./lora_pkt_fwd
```
:::tip 📝 NOTE:
 If you added the additional lines in step 5 it will execute every time on boot.
:::

8. The regional parameter configurations for all the supported regions are located in the folder `</opt/packet_forwarder/lora_pkt_fwd/global_conf>`. In case you need to adjust the region frequency band for example, do so before running the process (**EU868 is the default**)

**Congratulations!** :tada: you should now see your Gateway in TTN!