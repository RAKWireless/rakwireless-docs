---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2247
  - quickstart
  - wislink
rak_desc: Contains instructions and tutorials in installing and deploying your RAK2247 WisLink LPWAN Concentrator. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LPWAN Concentrator. 
---

# Quick Start Guide

## Prerequisites

<!-- <rk-img
  src="/assets/images/wislink-lora/rak2247/quickstart/2.quickstart/rak2247_1.png"
  width="100%"
  caption="RAK2247 WisLink LPWAN Concentrator Components"
/> -->

### What Do You Need?

Before going through each and every step in the installation and guide of the RAK2247 LPWAN Gateway, make sure to prepare the necessary items listed below:

1. RAK2247 WisLink LPWAN Concentrator
2. [mPCIe to USB Board](https://store.rakwireless.com/products/mpcie-to-usb-board)
   <!-- 2. RAK2247 Pi Hat (Not included in the package) -->
   <!-- 3. Raspberry Pi 3B+ (Not included in the package)  -->
   <!-- 4. 16GB SD Card (included) + Card Reader -->
3. A Windows/Mac OS/Linux Computer

### What's Included in the Package?

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
  src="/assets/images/wislink-lora/rak2247/quickstart/3.rak2247-linuxpc/rak2247-pcie.jpg"
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
  src="/assets/images/wislink-lora/rak2247/quickstart/3.rak2247-linuxpc/network-name.jpg"
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


5. Change the `global_conf.json` that will be copied during installation by replacing the `global_conf.eu_863_870.json` in the end of the (install.sh file)[https://github.com/RAKWireless/rak_common_for_gateway/blob/master/lora/rak2247_usb/install.sh] to one of those inside `/global_conf` or a custom one. (**EU868 is the default**)
```sh
cp global_conf/global_conf.eu_863_870.json $INSTALL_DIR/packet_forwarder/lora_pkt_fwd/global_conf.json
```

:::tip 📝 NOTE:
 You may also comment on the line below so the TTN address doesn't get replaced by localhost.
:::
```sh
# sed -i "s/^.*server_address.*$/\t\"server_address\": \"127.0.0.1\",/" $INSTALL_DIR/packet_forwarder/lora_pkt_fwd/global_conf.json
```

6. If you are using the RAK2247 in a board that has a different pinout than the RAK2247 Pi Hat, replace the `SX1301_RESET_BCM_PIN` in the `rak_common_for_gateway/lora/start.sh` to the corresponding RESET pin.
```sh
# Reset iC880a PIN
SX1301_RESET_BCM_PIN=<YOUR_RESET_PIN_HERE>
```
:::tip 📝 NOTE:
 If you want to have your Gateway_ID automatically update when running your package forwarder, uncomment and change the line `#./update_gwid.sh ./local_conf.json` in the same file (start.sh) to `./update_gwid.sh ./global_conf.json`.
:::

7. **Add** the following lines of code at the end of “**install.sh**” file: ( In addition to inserting the name of the interface from the previous step)

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


8. Save “**install.sh**” file and execute it in order to install: 

```sh
sudo ./install.sh
```

9. Wait for the installation to complete. Using the commands below, go and run the newly created process (**lora_pkt_fwd**):

```sh
cd /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd 
sudo ./lora_pkt_fwd
```
:::tip 📝 NOTE:
 If you added the additional lines in step 5 it will execute every time on boot.
:::

10. To check if it is working, run `sudo systemctl start ttn-gateway.service` to start the service and check its status `service ttn-gateway status`. You should see something like the box below. Be aware that it may take some minutes to see your gateway as connected in TTN's console.
```sh
pi@raspberrypi:~ $ service ttn-gateway status
● ttn-gateway.service - The Things Network Gateway
   Loaded: loaded (/lib/systemd/system/ttn-gateway.service; disabled; vendor preset: enabled)
   Active: active (running) since Fri 2020-10-09 17:50:55 BST; 1min 9s ago
 Main PID: 721 (start.sh)
    Tasks: 6 (limit: 2065)
   CGroup: /system.slice/ttn-gateway.service
           ├─721 /bin/bash /opt/ttn-gateway/packet_forwarder/lora_pkt_fwd/start.sh
           └─769 ./lora_pkt_fwd

Oct 09 17:52:00 raspberrypi ttn-gateway[721]: src/jitqueue.c:448:jit_print_queue(): INFO: [jit] queue is empty
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: ### [GPS] ###
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: # GPS sync is disabled
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: ##### END #####
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: JSON up: {"stat":{"time":"2020-10-09 16:51:30 GMT","rxnb":0,"rxok":0,"rxfw":0,"ackr":0.0,"dwnb":0,"t
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: INFO: [down] PULL_ACK received in 368 ms
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: ##### 2020-10-09 16:52:00 GMT #####
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: ### [UPSTREAM] ###
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: # RF packets received by concentrator: 0
Oct 09 17:52:00 raspberrypi ttn-gateway[721]: # CRC_OK: 0.00%, CRC_FAIL: 0.00%, NO_CRC: 0.00%
```

**Congratulations!** :tada: you should now see your Gateway in TTN!
