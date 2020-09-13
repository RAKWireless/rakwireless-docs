---
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK5010-M
---

# Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/1.prerequisites/1.front-view.jpg"
  width="50%"
  caption="Front View of RAK5010"
/>
-->

### What do you need?

Before going through each step in the installation guide of the RAK5010-M WisTrio NB-IoT Tracker, make sure to prepare the necessary items listed below:

#### Hardware Tools
1. RAK5010-M WisTrio NB-IoT Tracker
2. USB-UART Module
3. Jumper Wires
4. Micro-USB Cable
<!---4. Micro USB / 3.7V rechargeable battery / 5V Solar Panel Port-->
5. JTAG Emulator

#### Software Tools

1. [J-Link Tool](https://downloads.rakwireless.com/en/Cellular/Tools/)
2. [RAK iTracker flash tool](https://downloads.rakwireless.com/en/Cellular/Tools/)
3. [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)


:::tip 📝 NOTE:
 This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware upgraded, refer to the sections below:
 - [Firmware Update](#firmware-update)
:::

#### Definition of Terms

##### List of Acronyms

<table style="text-align: left">
<tbody>
        <tr>
            <td>APN</td>
            <td>Access Point Name</td>
        </tr>
        <tr>
            <td>BLE</td>
            <td>Bluetooth Low Energy</td>
        </tr>
        <tr>
            <td>DFU</td>
            <td>Device Firmware Upgrade</td>
        </tr>
        <tr>
            <td>EUI</td>
            <td>Extender Unique Identifier</td>
        </tr>
        <tr>
            <td>MCC</td>
            <td>Mobile Country Code</td>
        </tr>
        <tr>
            <td>MNC</td>
            <td>Mobile Network Code.</td>
        </tr>
</tbody>
</table>

### What's included in the Package?

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/1.prerequisites/2.package-inclusion.jpg"
  width="60%"
  caption="RAK5010-M Package Inclusion"
/>

## Product Configuration

### Interfacing with RAK5010-M

During the configuration of the module through the AT commands, it is possible to read the console outputs. There are three ways to connect to the console of the RAK5010-M module: 

&nbsp;&nbsp;&nbsp;&nbsp;a) through J-link RTT Viewer<br>
&nbsp;&nbsp;&nbsp;&nbsp;b) through the UART interface<br>
&nbsp;&nbsp;&nbsp;&nbsp;c) through the micro-USB interface

Here, the second and the third option are described since they are the most straight forward ways.

#### Through the micro-USB Port

The following procedure will show how to connect to the USB port of the RAK5010-M module through the micro-USB cable.

1. Connect the RAK5010-M to the USB port of a general-purpose computer using an appropriate cable, as shown in Figure 2.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/1.microusb-interface.jpg"
  width="75%"
  caption="RAK5010-M module USB connection"
/>

2.	Any serial tool that support DTR/DSR flow control can be used. For example, **Termite** shall be used. Figure 3 show to enable the "**Flow Control**"
 in Termite’s configuration.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/termite-setup.png"
  width="60%"
  caption="Termite serial communication tool setup."
/>

3.	Configure the serial communication tool by selecting the proper port of the computer and configure the link as:

    * Baud Rate: 115200
    * Data bits: 8
    * Stop bits: 1
    * Parity: none

4.	After pushing the RST button on RAK5010-M, you can see the following contents in the serial port tool, shown in Figure 4.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/termite-output-connect.png"
  width="60%"
  caption="Termite serial communication outputs."
/>

#### Through the USB-UART Port

The following procedure will show how to connect to the UART port of the RAK5010-M module through a USB-UART adapter, as shown in the Figure 5.

1.	Any serial tool will work, but it is recommended to use the **RAK Serial Port Tool** that can be downloaded from here:
[https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)

2.	Configure the serial communication tool by selecting the proper port of the computer and configure the link as:

    * Baud Rate: 115200
    * Data bits: 8
    * Stop bits: 1
    * Parity: none

3.	After pushing the RST button on RAK5010-M, you can see the following contents in the serial port tool, shown in Figure 6.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/3.rak5010-m-to-uart.jpg"
  width="75%"
  caption="RAK5010-M module UART connection"
/>

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/rak-serial-port-tool.png"
  width="40%"
  caption="RAK Serial Port Tool connected to RAK5010-M"
/>

### Configure the RAK5010-M

#### Through the UART Interface

After connecting to the RAK5010-M through the UART Interface as shown in section 2, the first action is to verify the version of the firmware. This can be achieved with the following command, as shown in Figure 7.

```
at+version
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/3.configuring-rak5010-m/configure-at-command.png"
  width="40%"
  caption="RAK Serial Port Tool, get firmware version"
/>

* Similarly, you can send other AT commands of RAK5010-M shown in the **[RAK5010-M AT Commands](../AT-Command-Manual/)** section.


### Connecting to Cellular Network

In this section, a procedure to configure RAK5010-M to a Cellular network is presented. For demonstration, a China Mobile SIM card and based on GSM network were used. There are two methods to connect and send packets over the Cellular network: Manual and Automatic mode. 

To establish a connection to a Cellular network, the following element are necessary:

- Mobile operator’s MCC and MNC
- Mobile operator’s APN parameter and password (optional)
- Remote server IP and port number. 

#### Manual Connection Mode

1. Scan the available cellular network providers. Send the following AT command.

```sh
at+scan=cellular
```

* After waiting around 30 seconds, an output similar to the Figure 8 appears. In this case, two providers were detected: CHINA MOBILE and CHN-UNICOM. In your local area, you should different results.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/2.scanned-cellular-network.jpg"
  width="40%"
  caption="RAK Serial Port Tool, scan the available cellular network"
/>


2. Connect to the SIM card’s operator.

Once the Cellular network operator is identified, send the following AT command to choose the Cellular carrier compatible with the SIM card in use. As shown in Figure 9, in this example, the SIM card belongs to Hologram.io, which has worldwide coverage carrier. This time the carrier ENTEL is chosen which the following command.  

```sh
at+set_config=cellular:(AT+COPS=0,0,"ENTEL")
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/3.cellular-operator.jpg"
  width="40%"
  caption="RAK Serial Port Tool, choose to the Cellular operator"
/>

* Then, the following command is sent in order to confirm the registration was successful, as shown in Figure 10.

```sh
at+set_config=cellular:(AT+COPS?)
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/3.1.cellular-operator-confirmation.jpg"
  width="40%"
  caption="RAK Serial Port Tool, confirm the registration to the preferable carrier"
/>

3. Configure the APN

The next step is to configure the APN, username, and password that will be required by the Cellular carrier in order to establish a connection. In this case:

  -	**APN**: imovil.entelpcs.cl
  -	**username**: entelpcs
  -	**password**: entelpcs

The final parameter “1” refers to the authentication mode (PAP). The following command is sent, as shown in Figure 11. 

```sh
at+set_config=cellular:(AT+QICSGP=1,1,"imovil.entelpcs.cl","entelpcs","entelpcs", 1)
```
<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/4.register-cellular-operator.jpg"
  width="40%"
  caption="RAK Serial Port Tool, register to the Cellular operator"
/>

4. Enable the GPRS interface 

Once the APN is configured, the PDP context must be activated, in order to use the GPRS interface. The following AT command is sent, as shown in the Figure 12.

```sh
at+set_config=cellular:(AT+QIACT=1)
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/5.gprs-interface.jpg"
  width="40%"
  caption="RAK Serial Port Tool, enable the GPRS interface."
/>


5. Set the IP address of the remote server

Then, set the IP address of the server which will receive the packet sending from RAK5010-M. In the example, the remote server has the IP address of **209.172.33.72**, and there is a process listening at the port **12111**. 

```sh
at+set_config=cellular:209.172.33.72:12111:ENTEL:ENTEL:imovil.entelpcs.cl:0
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/6.configure-remote-server-ip.jpg"
  width="40%"
  caption="RAK Serial Port Tool, configure the remote server's IP."
/>

:::tip 📝 NOTE:
This IP address is just used for example, and it is my testing server actually. For your configuration, use your own server IP address.
:::

6. Sending data 

Finally, The RAK5010-M is configured properly, and it’s ready for sending data over the Cellular network. In this case, some random characters are sent: “123456”. The following AT command is sent, as shown in the Figure 14.

```sh
at+send=cellular:123456
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/7.send-data-to-remote-server.jpg"
  width="40%"
  caption="RAK Serial Port Tool, sending data to remote server."
/>



7. Receiving data

A TCP/IP process must be listening on the IP and port previously defined. The IP address must be a public IP number. Please also make sure the port used is not blocked by a firewall. The Figure 15 shows that the list of characters sent in the previous step were properly received by the TCP/IP process.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/8.receive-data.jpg"
  width="75%"
  caption="Verify the data received by the server"
/>


As you see in the **Figure 15**, the server has received the packet successfully, and the data sent is “**123456**” which is same with the one we just sent out.

#### Automatic Connection Mode

The procedure of the automatic connection mode is very similar to the manual mode, except for the step 6, in which the transmission interval and the periodic data transmission parameters are set. 

1. Scan the available cellular network providers. Send the following AT command.

    - Same as the manual mode

2. Connect to the SIM card’s operator. 

    - Same as the manual mode

3. Configure the APN

    - Same as the manual mode

4. Enable the GPRS interface

    - Same as the manual mode

5. Set the IP address of the remote server 

    - Same as the manual mode

6. Set data transmission interval

In order to activate the automatic data transmission, the following AT command must be sent. As shown in the Figure 16, an interval of 180000 milliseconds (3 minutes) was configured. The “1” before the interval indicates the periodic data sending loop is activated.

```sh
at+set_config=cellular:send_interval:1:180000
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/9.set-transmission-interval.jpg"
  width="40%"
  caption="RAK Serial Port Tool, set the data transmission interval"
/>

As you see, this setting means that we open the sending loop and the interval time at 180 seconds. To know more details about the command, refer to the **[RAK5010-M AT Commands](../AT-Command-Manual/)**.

7. Restart the module

To apply the new configuration, the module must be restarted. Send the following AT command as shown in the Figure 17.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/10.restart-the-module.jpg"
  width="40%"
  caption="RAK Serial Port Tool, restart the module."
/>



8. Receiving the data. 

After restarting, RAK5010-M will connect automatically to the Cellular network with the parameters configured previously. The RAK5010-M will sleep during the interval and wake up, activate the accelerometer, and the GPS, format the packet and send the data to the destination. Process logs will be displayed in the console as shown in the Figure 18.


<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/11.console-logs.jpg"
  width="40%"
  caption="RAK Serial Port Tool, console logs of the periodic data transmission."
/>


On the server side. A packet should be received every 180 seconds. The data format is shown in the Figure 19.



<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/4.connecting-cellular-network/12.received-data.jpg"
  width="100%"
  caption="Data received on the server side."
/>

## Miscellaneous

### Firmware Update

Before to start working with the RAK5010-M, it is recommended to keep the RAK5010-M module updated to the latest version of the firmware. Get the latest pre-compiled firmware version on the RAK website: [https://downloads.rakwireless.com/Cellular/RAK5010/](https://downloads.rakwireless.com/Cellular/RAK5010/)

In the following sections, two options for flashing new firmware in a RAK5010-M module are shown: Upgrade through J-Link and Upgrade through UART1.

#### Through J-Link

##### Requirements

The table shows the minimum hardware and software required to perform the firmware upgrade using J-Link.

<table style="text-align: left">
<tbody>
        <tr>
            <td>Computer</td>
            <td>Computer running Windows OS</td>
        </tr>
        <tr>
            <td>J-Link</td>
            <td>A J-Link hardware, corresponding software JFlash.</td>
        </tr>
        <tr>
            <td>Firmware File</td>
            <td>Hex firmware file downloaded from the website.</td>
        </tr>
</tbody>
</table>

##### Upgrade Procedure

1. Download the latest compiled firmware. It can be found in the RAKwireless website: 
[https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip](https://downloads.rakwireless.com/Cellular/RAK5010/Firmware/RAK5010-M_Latest_Firmware.zip)

2. The firmware file is in a `zip` or `rar` format. Uncompress it to get a file with `hex` extension.

3.	Connect the RAK5010-M module with a computer through JTAG as shown in Figure 20.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/1.jtag.jpg"
  width="75%"
  caption="RAK5010-M connection through JTAG"
/>

4.	Connect the power supply to power the module.

5.	Install J-Link tool on your computer. You can download the software from the RAKwireless website: [https://downloads.rakwireless.com/en/Cellular/Tools/](https://downloads.rakwireless.com/en/Cellular/Tools/)

6.	Open the **JFlash tool** and select the target device.

:::tip 📝 NOTE:
The chip model of RAK5010-M is **nRF52840_xxAA**.
:::

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/jtag-select-device.png"
  width="25%"
  caption="Select target device"
/>

7.	Drag the module firmware with Suffix `.hex` into the software.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/jtag-open-firmware.png"
  width="80%"
  caption="JFlash open firmware"
/>

8.	Under the Target menu option choose Connect to connect the device and download the firmware into it.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/jtag-connect-device.png"
  width="40%"
  caption="Connect the device"
/>

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/jtag-program-firmware.png"
  width="40%"
  caption="Programming firmware"
/>

9.	After the download is finished, it will run normally after restart.

<rk-img
  src="/assets/images/wistrio/rak5010-m/quickstart/5.upgrading-firmware/jtag-programming-process.png"
  width="80%"
  caption="Programming process"
/>
