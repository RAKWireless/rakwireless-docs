---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK5010-M
  - quickstart
  - wistrio
rak_desc: Contains instructions and tutorials in installing and deploying your RAK5010 WisTrio NB-IoT Tracker. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wistrio/rak5010-m/overview/RAK5010-M.png
---

# RAK5010-M Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through every step in the installation guide of the RAK5010-M-BG95 WisTrio NB-IoT Tracker, make sure to prepare the necessary items listed below:

1. [RAK5010-M-BG95 WisTrio NB-IoT Tracker](https://store.rakwireless.com/products/rak5010-nb-iot-tracker?variant=35173395660958&utm_source=RAK5010-MWisTrioNB-IoTTracker&utm_medium=Document&utm_campaign=BuyFromStore)
2. USB-UART Module [(RAKDAP1 Tool)](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/)
3. Jumper Wires
4. Micro USB / 3.7&nbsp;V rechargeable battery / 5&nbsp;V Solar Panel Port
5. JTAG Emulator

:::tip 📝 NOTE:
 This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device firmware burned or upgraded, refer to the following sections:
1. [Burning the Firmware](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#burning-the-firmware)
2. [Upgrading Firmware through DFU Over BLE](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#upgrading-firmware-through-dfu-using-ble)
:::

### What's Included in the Package?

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/2.quick-start-guide/package-inclusion.jpg"
  width="75%"
  caption="Included Items in RAK5010-M-BG95 Package"
/>

## Product Configuration

### Checking Device Logs

There are three ways that you can check the logs for debugging purposes on your RAK5010-M-BG95 WisTrio NB-IoT Tracker:

1. **Through J-Link RTT Viewer**
2. **Through UART**
3. **Through Micro-USB**

#### Through J-Link RTT Viewer

1. If you want to check the logs of RAK5010-M-BG95 WisTrio NB-IoT Tracker using this method, make sure you have connected the RAK5010-M-BG95 with your PC through JTAG as shown in **Figure 2** and **Figure 3**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/rak5010tojlink.png"
  width="75%"
  caption="RAK5010-M-BG95 and PC Connection through JTAG"
/>

:::warning ⚠️WARNING
You still have to connect the Micro USB Cable to the RAK5010-M-BG95 to power the board.
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/jlinkdiagram.png"
  width="55%"
  caption="J-Link Connector to RAK5010-M"
/>

:::warning ⚠️WARNING
VDD of RAK5010-M-BG95 is rated only to 1.8&nbsp;V. It must **not** be connected to 3.3&nbsp;V or 5&nbsp;V.
:::

2. Go to the official website of **Segger** where you can download the [J-Flash software](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/). Open the program **J-Link RTT Viewer V6.60f** and choose **USB** for the type of connection to J-Link. After which, press **OK**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/xgdllxo7gb3ks0y3tbch.png"
  width="100%"
  caption="J-Link RTT Viewer"
/>

3. Choose the device parameters as shown in **Figure 5** or the table provided, then press **OK**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/wmoh5e7i8n6gxxr9h4o9.png"
  width="80%"
  caption="J-Link Target Device Settings"
/>

| Parameter | Data |
| ---- | ---- |
| Manufacturer | Nordic Semi |
| Device | nRF52840_xxAA |
| Core | Cortex-M4 |
| NumCores | 1 |
| Flash Size | 1028&nbsp;kB |
| RAM Size | 256&nbsp;kB |

4. Connect to your RAK5010-M-BG95 by navigating through **File>Connect** in the Main Menu. Alternatively, you could just press **F2** to do the same process.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/jrqm79eoaojwuynzdu1t.jpg"
  width="100%"
  caption="Connecting in J-Link RTT Viewer"
/>

5. Once the connection is obtained, you should see the same log as shown in **Figure 7**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/uku52cmdo7ccdzwbwubz.png"
  width="80%"
  caption="J-Link RTT Viewer showing RAK5010-M-BG95 Logs"
/>

:::tip 📝 NOTE:
 If there is no log after connecting successfully, you can try to reset RAK5010-M. Ensure that the micro USB is connected properly or check the connection of the JTAG.
:::

#### Through UART

1. If you want to check the log of RAK5010-M-BG95 through UART, you should make sure that RAK5010-M-BG95 has been connected to your PC through the USB-UART module correctly as shown in **Figure 8**. It is highly recommended to use RAKDAP1 as the USB to UART interface. [RAKDAP1 Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/) is compatible with other RAK devices and can be used as a debugger and programmer as well.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/7.jpg"
  width="90%"
  caption="RAK5010-M-BG95 and USB-UART Connection"
/>

2. Open a serial port tool on your PC. If you don't have a serial port tool yet, download and install the RAK Serial Port Tool.

    - **[RAKwireless Downloads](https://downloads.rakwireless.com/en/LoRa/Tools).**

3. After pushing the RST button on RAK5010-M, you can see the following contents in the serial port tool as shown in **Figure 9**:

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/serialtool_connect.jpg"
  width="80%"
  caption="RAK Serial Port Tool"
/>

#### Through Micro USB

1. To start with, connect RAK5010-M-BG95 with your PC through micro USB/USB as shown in **Figure 10**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/cjkxyja4hkqovtiddklj.jpg"
  width="60%"
  caption="MicroUSB Interface for RAK5010-M"
/>

2. Open the serial port tool on your PC.

:::tip 📝 NOTE:
 - For this method, you need a serial port tool that can support the DTR function, like Termite. You can download Termite on their [website](https:\/\/www.compuphase.com\/software_termite.htm).
 - For Linux and MacOS, the alternative is [Coolterm](http://freeware.the-meiers.org/).
 - It is highly recommended to connect a battery when doing configuration via USB to have a stable serial connection.
:::

3. After opening the Termite serial tool, configure its setting as shown in **Figure 11**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/gpubckbaii9vocy1h32u.png"
  width="75%"
  caption="Termite Configuration Enabling DTR"
/>

4. Now, the Termite app will connect with RAK5010-M-BG95 automatically. Then you can send AT commands and check the log in Termite.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.checking-device-logs/hqfcunna1swkknili72n.png"
  width="75%"
  caption="Checked Log in Termite"
/>

### Configuring RAK5010-M

You can configure your RAK5010-M-BG95 WisTrio NB-IoT Tracker by sending AT Commands either through UART, BLE, or Micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK5010-M, check the [AT Command Manual](../AT-Command-Manual/).
:::

#### Through UART

1. As mentioned in the [Checking Device Logs](#through-uart) section, if you want to use RAK5010-M-BG95 WisTrio NB-IoT Tracker through UART, you should connect the RAK5010-M-BG95 in your PC through UART as shown in **Figure 8**.

2. Try to send a simple AT command to RAK5010-M-BG95 to get the current firmware version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK5010-M-BG95 in the same way.

```
at+version
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/13.jpg"
  width="70%"
  caption="AT command for Firmware Version"
/>

#### Through BLE

1. To configure the RAK5010-M-BG95 WisTrio NB-IoT Tracker through BLE, download and install **nRF Connect** developed by Nordic Semiconductor. The App is available both in App Store and Google Play Store.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/eponlb3piu1p6noof1np.png"
  width="75%"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and you will see all BLE devices in range in the scan list.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/rwpeihuyflhu65gopfml.jpg"
  width="40%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK5010-M-BG95 Board and wait for a couple of seconds. Look for a BLE Device named **RUI-...** in the scan list of the app. Connect to this device and click **Nordic UART Service**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/mg6xtfoepu06s33iedyu.jpg"
  width="80%"
  caption="Nordic UART Service in the Nordic App"
/>

:::warning ⚠️WARNING
By default, the BLE signal of the RAK5010-M-BG95 is turned off automatically if no connection is established after 60 seconds. Connect to the BLE signal of the RAK5010-M-BG95 immediately after pressing the reset button.
:::

4. Click the arrow marked by the red box, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/r7j95cqwrevod7qtvcsv.jpg"
  width="40%"
  caption="RX Characteristic in the Nordic UART Service"
/>

5. You can now send AT commands to the RAK5010-M. Meanwhile, you can also see log information in RTT Viewer as discussed in [Checking Device Logs](/Product-Categories/WisTrio/RAK5010-M/Quickstart/#checking-device-logs).

- For example, if you want to check the current firmware version, send the following command:

```
at+version
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/jficmu58afzs3r1hkw5h.jpg"
  width="80%"
  caption="Sending AT Command via Nordic App"
/>

6. Then, you can see the version number in the RTT Viewer tool.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.configuring-rak5010/nqqegmebbppnrcguzshh.png"
  width="80%"
  caption="Log Info in J-Link RTT Viewer"
/>

#### Through Micro USB

Configuring the RAK5010-M-BG95 and checking logs via USB has the same setup. Refer to the guide on USB connection in the [checking device logs](#through-micro-usb) section.

### Connecting Cellular Network and Sending Packets over Cellular

In this section, you will learn more about how to connect to the Cellular Network of your device.

- To start with, insert a SIM card into your RAK5010-M. For this section, a China Mobile SIM card is used to have a GSM network connection.

As described in the previous section, there are three ways to configure our RAK5010-M: through UART, BLE, and micro USB. For this section, configuring the RAK5010-M-BG95 through UART is used as an example.

There are two ways to connect and send packets to Cellular Network: **Manual** and **Automatic**.

#### Manual Connection

- To begin with, send the following AT command to scan cellular networks:

```
at+scan=cellular
```

:::tip 📝 NOTE:
 - Ensure that the LTE Antenna of the RAK5010-M-BG95 is connected properly.
 - Alternative command to `at+scan=cellular` is `at+set_config=cellular:(AT+COPS=?)`.
 - Complete the details of the BG95-M3 TCP AT commands manual can be downloaded from the [Quectel website](https://www.quectel.com/product/lpwa-bg95-cat-m1-cat-nb2-egprs-series).
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/24.jpg"
  width="70%"
  caption="Scanning for Cellular Networks"
/>

- Wait for about 30 seconds, then you will see the following output in the serial port tool the same as shown in **Figure 21**:

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/25.jpg"
  width="70%"
  caption="Scanned Cellular Network shown in Serial Port"
/>

- As you can see, the RAK5010-M-BG95 has scanned around the Cellular network and shown them in the serial port tool.

To configure the operator information, the following command is used:

```
at+set_config=cellular:(AT+COPS=1,0,"CHINA MOBILE",0)
```

:::tip 📝 NOTE:
 - The last parameter of AT+COPS command is the type of connection: 0-GSM, 8-LTE CAT-M1, 9-LTE CAT-NB1.
 - For example, if you want to connect to LTE CAT-M1, the command must be `at+set_config=cellular:(AT+COPS=1,0,"CHINA MOBILE",8**)`.
 - You can also check if your configuration is saved correctly with this command: `at+set_config=cellular:(AT+COPS?)`.
 - Complete the details of the BG95-M3 TCP AT commands manual can be downloaded from the [Quectel website](https://www.quectel.com/product/lpwa-bg95-cat-m1-cat-nb2-egprs-series).
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/26.jpg"
  width="70%"
  caption="Configuring the Operator"
/>

Now, continue to configure the network:

```
at+set_config=cellular:(AT+QICSGP=1,1,"CMCC","","",1)
```

:::tip 📝 NOTE:
 - The third parameter of AT+QICSGP command is the APN of the cellular network. This is different per country and dependent on what cellular telecommunications company you want to connect with.
 - Complete the details of the BG95-M3 TCP AT commands manual can be downloaded from the [Quectel website](https://www.quectel.com/product/lpwa-bg95-cat-m1-cat-nb2-egprs-series).
:::

```
at+set_config=cellular:(AT+QIACT=1)
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/27.jpg"
  width="70%"
  caption="Configuring the Cellular Network"
/>

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/28.jpg"
  width="70%"
  caption="Configuring the Cellular Network"
/>

- Then, set the IP address of the server which will receive the packet sent from RAK5010.

```
at+set_config=cellular:118.31.121.60:12111:CHINA MOBILE:CMCC:CMNET:0
```

:::tip 📝 NOTE:
 This IP address is just used for example. For your configuration, use your server IP address.
:::

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/5.connecting-cellular-network/29.jpg"
  width="70%"
  caption="Configuring the IP Address of the Server"
/>

- Next, try sending a packet manually over Cellular. Use the following command to send data over Cellular:

```
at+send=cellular:XXX
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/30.jpg"
  width="70%"
  caption="Sending Data over Cellular"
/>

- As you can see, the data sent is **123456**.

Now, check it on the receiving server:


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/muvnk5vma57gwns6apo9.jpg"
  width="75%"
  caption="Received Data shown in the terminal"
/>

```
rak2016@iZbp1980wxsue6enel4qc0Z:/home/rak2001$ tail -f rak12111
[Tue Sep 24 18:37:36 2019] [new_client] accept client [117.132.196.229:14809], new_fd:6
[Tue Sep 24 18:37:46 2019] [handle_message]: client:6 recvbuf:123456
[Tue Sep 24 18:37:47 2019] [handle_message]: client:6 disconnect.
```

As you can see in **Figure 27**, the server has received the packet successfully, and the data sent is **123456**, which is the same as the one you just sent out.

#### Automatic Connection

In this section, you will be connecting and sending data with cellular network, **automatically**.

- First, configure the parameters for the cellular operator information and the receiving server information as follows (a China Mobile SIM card based on a GSM network is used as an example):

```
at+set_config=cellular:118.31.121.60:12111:CHINA MOBILE:CMCC:CMNET:0
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/32.jpg"
  width="70%"
  caption="Configuring the Cellular Network Parameters"
/>

- Then, set the interval for sending the loop as shown in **Figure 29**.

```
at+set_config=cellular:send_interval:1:180000
```

:::tip 📝 NOTE:
During sleep (LEDs are all off), you cannot send any AT command to the RAK5010-M-BG95 module. You need to restart your device and before going to sleep, you must send the command `at+set_config=cellular:send_interval:0:180000` to go back to normal mode.
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/33.jpg"
  width="70%"
  caption="Setting the Loop Intervals"
/>

As you can see, the setting means that you open the sending loop and the interval time at 180 seconds. To know more details about the command, refer to the [AT Command Manual](../AT-Command-Manual/).

- Now, restart RAK5010-M-BG95 by sending the following AT command:

```
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/34.jpg"
  width="70%"
  caption="Restarting your RAK5010-M"
/>

After restarting, the RAK5010-M-BG95 will automatically connect to the Cellular Network you set and send a looping packet of sensor data. Every time it sends a packet, RAK5010-M-BG95 will sleep for 180 seconds, which you just set, after which it will wake up and search for a GPS, build a new packet, and send it out.

- You will see a continuous loop as shown in **Figure 31**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.connecting-cellular-network/35.jpg"
  width="70%"
  caption="Continuous Loop seen in The Serial Tool"
/>

- RAK5010-M-BG95 will send sensor data automatically in a loop. You can check the data in the receiving server:

Check the data in the receiving server:

```
rak2001@iZbp1980wxsue6enel4qc0Z:~$ tail -f rak121111
[Tue Sep 24 19:18:03 2019] [new_client] accept client [221.178.125.59:14996], new_fd:6
[Tue Sep 24 19:18:17 2019] [handle_message]: client:6 recvbuf:Acc:-732.00, -178.00,620.00; Tem:27.29;Hum:46.04; Pre:964.82; Lig:3.84; Lat(0-N,1-S):0,3411.777725,Lon(0-E,1-W):0,10852.877460; Battery:3.90;
```

As you can see, the server has received the packet which RAK5010-M-BG95 sends out successfully, and they are all sensor data in the packet.

## Miscellaneous

### Bluetooth Connection Modes

There are three BLE modes in RAK5010-M-BG95 from the firmware V3.0.0.6, the **Peripheral Mode**, the **Central Mode**, and the **Beacon Scan Mode**. You can change the work mode of RAK5010-M-BG95 BLE using the command provided in the [AT Commands Manual](../AT-Command-Manual/).

```
at+set_config=ble:work_mode:X:Y
```

**Description**: Set the work mode for BLE.
- **X** - 0: BLE peripheral mode; 1: BLE central mode; 2: Beacon scan mode.
- **Y** - 0: Normal range; 1: BLE long range.

#### BLE Peripheral Mode

For the Peripheral Mode, you can scan RAK5010-M-BG95 BLE and connect with it using your mobile device.

#### BLE Central Mode

For the Central Mode, RAK5010-M-BG95 BLE will not broadcast, so that your mobile devices will not be able to scan it. This is very useful if you want to make the RAK5010-M-BG95 act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 Devices) can send sensor data.

#### Beacon Scan Mode

For the Beacon Scan Mode, RAK5010-M-BG95 can scan around the Beacon signal. It is useful for Beacon use cases like iBeacon.

#### RAK5010-M BLE Default Settings

By default, the RAK5010-M-BG95 will work on **Peripheral Mode.** In this mode, you can configure it through BLE, including DFU easily. It should be noted that after resetting the RAK5010-M, you only have 60 seconds to establish a connection with your mobile device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the RAK5010-M-BG95 BLE signal will not be broadcasted, and it will enter power-saving mode. On the other hand, there is no limitation once you are already connected with the RAK5010-M-BG95 BLE.

If you set the RAK5010-M-BG95 to work in Central Mode, it will first work in Peripheral Mode for 30 seconds, and if no connection is established after 30 seconds, it will automatically work in **Central Mode.** In this mode, the BLE signal of the RAK5010-M-BG95 will stop broadcasting and will not be visible on your mobile devices until you change the work mode to Peripheral Mode or reset the RAK5010-M-BG95.

### Burning the Firmware

An easy and quick way to get started with your RAK5010-M-BG95 is by using pre-compiled firmware. However, if you want to compile your customized firmware, you can visit the [RUI Customized Development](/RUI/) documentation to learn how.

#### Installing J-Flash

1. Go to the official website of **Segger** and download the J-Flash software.
      - [J-Flash](https://www.segger.com/products/debug-probes/j-link/tools/j-flash/about-j-flash/)

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/rhblajzhsv9pb1fdos3h.jpg"
  width="100%"
  caption="Segger Official Website"
/>

2. Download the software that corresponds to your operating system. In this guide, Windows is used.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/etylt7rqrbcjedteqhqc.jpg"
  width="100%"
  caption="J-link Software in different platforms"
/>

3. After you have downloaded your corresponding software, install it and wait for a couple of minutes.

#### Creating Project in J-Flash

1. Upon opening the software, you will be greeted with a pop-up window. Choose **Create a new project**, then click **Start J-Flash**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/qbhdb7hj0cfq0cghohxx.jpg"
  width="100%"
  caption="J-flash Interface"
/>

2. You will be then prompted to configure your new project. Select the Target Device by clicking the box highlighted in red as shown in **Figure 35**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/sccml4h6imieppibarpy.jpg"
  width="100%"
  caption="Configuring the Project"
/>

3. Select the Manufacturer to **Nordic Semi** and Device **nRF52840_xxAA**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/h3wken4r8z0rfbznrgrc.jpg"
  width="100%"
  caption="Selecting the Device"
/>

4. Select the Target Interface to **SWD** and the Speed (kHz) to **4000**. Press **OK**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/hil2ag7u5vavbgpluu1c.jpg"
  width="100%"
  caption="Target Interface and Speed (kHz)"
/>

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/s91d5tazgtvl1lgihina.jpg"
  width="100%"
  caption="Created Project Successfully"
/>

#### Connecting the RAK5010-M with JTAG

1. Connect your RAK5010-M-BG95 to your PC through JTAG as shown in **Figure 39**. The pinout diagram and connection to Jlink can be found on the [Datasheet](/Product-Categories/WisTrio/RAK5010-m/Datasheet/#pin-definition).

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/hx3crsaspcr2aadaesnc.jpg"
  width="35%"
  caption="RAK5010-M-BG95 and JTAG Hardware Interface"
/>

2. Download the latest pre-compiled firmware from the [RAKwireless Downloads](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/) and extract it to your PC.

3. In the J-Flash software Menu Bar, choose **Target** -> **Connect**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/wcw1maqbahdyhqm5hdb6.jpg"
  width="100%"
  caption="Successfully Created Project"
/>

4. Now, choose the demo firmware that you have downloaded.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/iyk5ueztu9i3eul8jp6z.jpg"
  width="100%"
  caption="Selecting the Hex File"
/>

5. Select **Target** -> **Production Programming** to start the flashing process, and wait for a couple of minutes.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/7.burning-the-firmware/wechf9fckqgvlw46bfqe.jpg"
  width="100%"
  caption="Connect with the RAK5010-M"
/>

### Upgrading Firmware through DFU using BLE

1. Download the DFU package of the RAK5010-M-BG95 WisTrio NB-IoT Tracker and save it on your mobile phone.

    - [**DFU Package**](https://downloads.rakwireless.com/en/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip) is inside the RAK5010-M_Latest_Firmware.zip with file name RAK5010M_dfu_xxxxxxxxxxxx.zip

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application, and you will see all BLE devices in range in the scan list.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK5010-M-BG95 and wait for a couple of seconds. Look for a BLE Device named **RUI-...** in the scan list of the app. Connect to this device and click **Nordic UART Service**.

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about the Bluetooth connection guide can be found in the [Bluetooth Connection Modes](/Product-Categories/WisTrio/RAK5010-m/Quickstart/#bluetooth-connection-modes) section.
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="80%"
  caption="Secure DFU Service in the Nordic App"
/>

4. Choose **Secure DFU Service** and click the button highlighted in red as shown in Figure 45.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="80%"
  caption="Buttonless DFU"
/>

5. Click the arrow highlighted in red as shown in **Figure 46**. A **Write Value** window pop-up, then press **Send**.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="80%"
  caption="Resetting the Bootloader via Bluetooth"
/>

6. Now, the RAK5010-M-BG95 is now working in DFU Mode. In the application, you will see the default status overview of RAK5010-M.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/qmi89z3vqxvukvbiodnc.jpg"
  width="40%"
  caption="RAK5010-M-BG95 Default Status Overview after Resetting"
/>

7. In the list of devices, find a BLE signal named **DfuTarg** and connect.

<rk-img
  src="/assets/images/wistrio/rak5010/quickstart/8.upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="40%"
  caption="RAK5010-M-BG95 Default Bluetooth ID after Resetting"
/>

8. After connecting, select the **DFU Icon**. Select the **Distribution packet (ZIP)** and press **OK**. This will then prompt you to select the zip file of the firmware that you have downloaded.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="80%"
  caption="Distribution Packet File Type under DFU"
/>

9. Then, it will automatically start to upgrade the firmware of your RAK5010-M-BG95 through DFU over BLE. After upgrading, it will restart and the DFU connection will be disconnected. Now, you can use your RAK5010-M-BG95 with the latest firmware.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/8.upgrading-firmware/nzilnqodbz6x33uvnpp4.jpg"
  width="40%"
  caption="DFU Upgrading of RAK5010-M-BG95 Firmware via BLE"
/>
