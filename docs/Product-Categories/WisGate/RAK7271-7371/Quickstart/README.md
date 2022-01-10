---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7271-7371. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisgate/rak7271-7371/overview/rak7271-7371.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - datasheet
  - wisgate
  - RAK7271
  - RAK7371
---

# RAK7271/RAK7371 Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step in the installation guide of the RAK7271/7371 WisGate Developer Base, make sure to prepare the necessary items listed below:

1. WisGate Developer Base RAK7271 or RAK7371
2. A Host - Linux running PC/laptop or Raspberry Pi

:::warning ⚠️ WARNING
The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
:::

### What’s Included in the Package?

1. 1pc WisGate Developer Base
2. 1pc USB Type C to A Cable
3. 1pc LoRa Antenna 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/1.package-content.png"
  width="60%"
  caption="Package Content"
/>


## Product Configuration

### Using Raspberry Pi as a Host

#### Interfacing Between the Raspberry Pi and the WisGate Developer Base

The WisGate Developer Base is a device designed for integration with desktop, mobile, and embedded systems that converts the RAK2287/RAK5146 mPCIe LoRa concentrator modules into USB Type C pluggable (via the include Type C to A cable). 


::: tip 📝 NOTE

It is assumed that your Raspberry Pi has already been installed with an [OS](https://www.raspberrypi.org/software/operating-systems) and has an internet access. You must also have an access to it over SSH or directly to the command line interface (CLI).
:::

1. Connect the WisGate Developer Base with the included cable: Type-C end in the Developer Base and Type-A in one of the Raspberry Pi USB ports. 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/2.connecting-to-raspberry-pi.png"
  width="50%"
  caption="Connecting the WisGate Developer Base to the Raspberry Pi"
/>

2. After connecting the Developer Base to the Pi, the Power Led will be steady green. This mean that the Base is properly powered.  

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/3.power-on.png"
  width="30%"
  caption="Powering On the Developer Base"
/>

3. You can check if the base is properly connected by running this command on the CLI:

```
lsusb
```

4. In the output, you should see a **STMicroelectronics Virtual COM Port** line. This means your RAK WisGate Developer Base is properly connoted to the Raspberry Pi. 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/4.checking-connection.png"
  width="60%"
  caption="Checking the Connection"
/>


```
pi@raspberrypi:~ $ lsusb
Bus 001 Device 005: ID 0483:5740 STMicroelectronics Virtual COM Port
Bus 001 Device 004: ID 0424:7800 Standard Microsystems Corp.
Bus 001 Device 003: ID 0424:2514 Standard Microsystems Corp. USB 2.0 Hub
Bus 001 Device 002: ID 0424:2514 Standard Microsystems Corp. USB 2.0 Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
pi@raspberrypi:~ $

```

### Install the Software  

To be able to use the Base, an installation and configuration of the software is needed. 

1. To download the software, you need to execute the following commands in the CLI:

- This command will check for the latest updates of the OS and download the Git tool that will allow to download the software:

```
sudo apt update; sudo apt install git -y
```

* This command will download the software:

```
git clone https://github.com/RAKWireless/rak_common_for_gateway.git
```

2. Enter the created directory with:

```
cd ~/rak_common_for_gateway
```

3. Start the installation with:

```
sudo ./install.sh
```

4. You will be asked to select the model of the concentrator you are installing. For this case, you should select **9. RAK2287 USB** if you are using WisGate Developer Base **RAK7271** or **10. RAK5146 USB** if you are using WisGate Developer Base **RAK7371**. 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/5.selecting-concentrator-model.png"
  width="50%"
  caption="Selecting the Concentrator Model"
/>

::: tip 📝 NOTE

Have in mind that the script will also install ChirpStack—an open-source LoRaWAN® Network Server stack. This will allow you to create fully functional LoRaWAN Server locally on the Raspberry Pi.

:::

If you do not want the ChirpStack to be installed, you need to run the installation with this parameter:

```
sudo ./install.sh --chirpstack=not_install
```

5. After a few minutes, the installation will be completed. 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/6.successful-installation.png"
  width="60%"
  caption="Successful Installation"
/>


```
Copy sys_config file success!
/home/pi/rak_common_for_gateway
***********************************************************
*   The RAKwireless gateway is successfully installed!    *
***********************************************************
pi@raspberrypi:~/rak_common_for_gateway $

```

### Using a Linux Machine as a Host

#### Interfacing Between the Linux Machine and the WisGate Developer Base

Connect the two using the included USB cable to the Host PC. It is recommended to use **Ubuntu 18.04 LTS** as the operating system.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/7.base-to-host.png"
  width="60%"
  caption="Connecting the WisGate Developer Base to the Host"
/>

#### Installing the Software

To be able to use the Base, an installation and configuration of the software are needed. The procedure differs slightly for the two variants of the WisGate Developer Base.

##### For RAK7271 WisGate Developer Base with RAK2287 Inside

1. Install the needed **make** and **gcc** tools with the commands:

```
sudo apt install make
```

```
sudo apt install gcc
```

2. Download the archive from the Semtech Repository:

```
wget https://github.com/Lora-net/sx1302_hal/archive/V2.0.1.tar.gz
```

3. After the download is complete, extract the files with the command:

```
tar -zxvf V2.0.1.tar.gz
```

4. Enter the created folder:

```
cd sx1302_hal-2.0.1
```

5. Do a **make** with the command:

```
sudo make
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/8.install-software.png"
  width="80%"
  caption="Installing the Software"
/>


After the compilation has successfully finished, you need to configure the correct channel plan and set the correct `global_conf.json` file to be used from the packet forwarder. 

6. Open the Packet forwarder folder with the following code:

   ```
   cd packet_forwarder
   ```

7. Then list the files and folders:

   ```
   ls -l
   ```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/9.listing-the-content.png"
  width="80%"
  caption="Listing the Content of the Folder"
/>


8. You can see that there is a different example configuration files for different LoRaWAN bands and different types of concentrators. In this setup, you are using RAK Developer Base, which is the USB, and the EU868 band. Run this command to rename the correct file to `global_conf.json`:

```
 cp global_conf.json.sx1250.EU868.USB global_conf.json
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/10.after-renaming.png"
  width="80%"
  caption="Listing the Content of the Folder After Renaming"
/>


9. Now, you can start the packet forwarder process, which will bridge the LoRaWAN radio part with the Network Server. Use the command: 

```
sudo ./lora_pkt_fwd
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/11.starting-packet-forwarder.png"
  width="80%"
  caption="Starting the Packet Forwarder"
/>


10. At the end of this example, you can see the concentrator's EUI. Save it somewhere as it will be needed to register your gateway in the Network Server later.

You can also check the EUI from the `chip_id` tool located in the `util_chip_id` folder. Navigate to the folder and run:

```
sudo ./chip_id -u -d /dev/ttyACM0
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/12.concentrator-eui.png"
  width="80%"
  caption="Concentrator EUI"
/>


##### For RAK7371 WisGate Developer Base with RAK5146 Inside

1. Install the needed **make** and **gcc** tools with the commands:

```
sudo apt install make
```

```
sudo apt install gcc
```

2. Clone the software from the Git repo:

```
sudo git clone https://github.com/Lora-net/sx1302_hal.git
```

3. After the download is finished, open the newly created folder:

```
cd sx1302_hal
```

4. Do a **make** with the command:

```
sudo make
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/13.install-software.png"
  width="80%"
  caption="Installing the Software"
/>


After the compilation has successfully finished, you need to configure the correct channel plan and set the correct `global_conf.json` file to be used from the packet forwarder. 

5. Open the Packet forwarder folder with the following command:

```
cd packet_forwarder
```

6. And then list the files and folders with:

```
ls -l
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/14.listing-the-content.png"
  width="80%"
  caption="Listing the Content of the Folder"
/>


7. You can see that there is a different example configuration files for different LoRaWAN bands and different types of concentrators. In this setup, you are using RAK Developer Base, which is the USB, and the EU868 band. Run this command to rename the correct file to `global_conf.json`:

```
 cp global_conf.json.sx1250.EU868.USB global_conf.json
```


<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/15.after-renaming.png"
  width="80%"
  caption="Listing the Content of the Folder After Renaming"
/>


8. Now, you can start the packet forwarder process, which will bridge the LoRaWAN radio part with the Network Server. Use the command: 

```
sudo ./lora_pkt_fwd
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/16.starting-packet-forwarder.png"
  width="80%"
  caption="Starting the Packet Forwarder"
/>


9. At the end of this example, you can see the concentrator's EUI. Save it somewhere as it will be needed to register your gateway in the Network Server later.

You can also check the EUI from the `chip_id` tool located in the `util_chip_id` folder. Navigate to the folder and run:

```
sudo ./chip_id -u -d /dev/ttyACM0
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/17.concentrator-eui.png"
  width="80%"
  caption="Concentrator EUI"
/>



#### Connecting to The Things Network V3 (TTNv3)

##### Using Raspberry Pi as a Host

If you use the RAKwireless scripts, connecting to TTN is easy. 

1. Open the configuration tool by running the command in the Raspberry Pi CLI.

```
sudo gateway-config
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/18.configuration-tool.png"
  width="60%"
  caption="Open the Configuration Tool"
/>

2. Select option **2 Setup RAK Gateway Channel Plan**.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/19.selection.png"
  width="60%"
  caption="Make a Selection"
/>

3. On the next window, choose option **1 Server is TTN**.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/20.server.png"
  width="60%"
  caption="Selecting the Server"
/>

4. Select the correct band. In this example, it is option **5 EU_863_870**, and then confirm.  

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/21.channel.png"
  width="60%"
  caption="Selecting the Channel Plan"
/>

5. Now, based on your location, you need to set the correct TTN address for the packet forwarder. Select option **4 Edit packet-forwarder config**.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/22.configuration-options.png"
  width="60%"
  caption="Configuration Options"
/>


6. Then, the configuration file will open for editing:

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/23.file-content.png"
  width="80%"
  caption="File Content Configuration "
/>


7. Find the **"gateway_conf"** part:

```
  "gateway_conf": {
        "gateway_ID": "AA555A0000000000",
        /* change with default server address/ports */
        "server_address": "router.eu.thethings.network",
        "serv_port_up": 1700,
        "serv_port_down": 1700,
```

8.  In it, change the **"server _address"** line to the desired TTN URL. In this example, the URL for Europe is used:

```
  eu1.cloud.thethings.network
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/24.server-address.png"
  width="60%"
  caption="Changing the server address"
/>


9. To save the changes, press **Ctrl+X** and confirm with **Y** for Yes. 

10.  Restart the packet forwarder by choosing **Option 3**.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/25.restart.png"
  width="60%"
  caption="Restart the Packet Forwarder"
/>

11. Quit to exit from the configuration menu. 

Now, you have a fully working gateway that is configured to use TTN as Network Server. 

12. To successfully register the gateway to TTN, you will need the gateway EUI. Run the command below in the CLI to get the EUI: 

```
sudo gateway-version
```

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/26.gateway-eui.png"
  width="80%"
  caption="Getting the Gateway's EUI"
/>

```
pi@rak-gateway:~ $ sudo gateway-version
Raspberry Pi 3 Model B Plus Rev 1.3, OS "10 (buster)", 5.10.17-v7+.
RAKwireless gateway RAK2287 for USB version 4.2..7R install from source code.
Gateway ID: B827EBFFFE7AFF6A.
pi@rak-gateway:~ $
```


13. Open the TTN website in your browser, login, and navigate to the console page. Click on **+Add Gateway button**. 

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/27.add-gateway.png"
  width="100%"
  caption="Adding Gateway"
/>


14. Fill the EUI and the needed data as description, channel plan, etc. If you have followed the steps correctly, you will see your gateway as connected, having activity.

<rk-img
  src="/assets/images/wisgate/rak7271-7371/quickstart/28.register-gateway.png"
  width="100%"
  caption="Registered Gateway"
/>
