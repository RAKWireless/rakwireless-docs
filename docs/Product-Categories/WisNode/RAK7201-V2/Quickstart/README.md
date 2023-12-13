---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7201V2. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak7201-v2/datasheet/RAK7201.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK7201V2
  - quickstart
  - wisnode
---

# RAK7201V2 Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step in the installation guide of the RAK7201V2 WisNode Button, make sure to prepare the necessary items listed below:

1. [RAK7201V2 WisNode Button 4K](https://store.rakwireless.com/products/wisnode-button-4k-rak7201v2?utm_source=RAK7201V2WisNodeButton4K&utm_medium=Document&utm_campaign=BuyFromStore)
2. Micro USB cable
3. A gateway in range
4. Windows PC

### What’s Included in the Package

- 1 pc RAK7201V2 WisNode Button 4K
- 1 pc Micro USB cable
- 1 pc Sticker for attaching the button to a flat surface

## Product Configuration

### Interfacing With the RAK7201V2 WisNode Button 4K

For you to be able to interface with the RAK7201V2 WisNode Button 4K with your Windows machine, you need to download the [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

1. Connect your RAK7201V2 WisNode Button 4K to your Windows machine using the provided Micro USB cable.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/1.laptop-connection.png"
    width="50%"
    caption="RAK7201V2 WisNode Button 4k to laptop connection"
/>

2. Open the RAK Serial Port Tool.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/2.rak-serial-tool.png"
    width="80%"
    caption="RAK Serial Port Tool"
/>

3. To choose the correct COM Port number for your device, go to your **Device Manager** by pressing the **Windows key + R** and type **devmgmt.msc**. You can also search for the Device Manager in the Start menu.
4. Once opened, look for **Ports (COM & LPT)** and find the name **USB-SERIAL CH340**. The COM Port Number differs, and in this guide, it is **COM4**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/3.device-manager.png"
    width="45%"
    caption="Device Manager"
/>

5. Choose the correct COM port number from the device manager and the correct baud rate, then click **Open**. The default baud rate of the WisNode Button 4K is **115200 bps**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/4.com-port.png"
    width="80%"
    caption="Correct COM port and baud rate are chosen"
/>

6. To check if the latest firmware version is in use, send the `AT+VER=?` command. If your device is not running the latest firmware, you need to upgrade it, following the [Firmware Upgrade Guide](../Firmware-Upgrade-Guide/).

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/5.check-firmware.png"
    width="80%"
    caption="Checking the firmware version"
/>


### Connecting to the Built-In Network Server

This section provides instructions on how to connect the RAK WisNode Button 4K to the built-in server that is part of all RAK WisGate Series gateways.

You can find more information about RAK's Edge gateways and how to use the built-in server here:

- [RAK7240](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7240-V2/Quickstart/)
- [RAK7240V2](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7240/Quickstart/)
- [RAK7249](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7249/Quickstart/)
- [RAK7258](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7258/Quickstart/)
- [RAK7268V2](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7268-V2/Quickstart/)
- [RAK7289V2](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7289-V2/Quickstart/)
- [RAK7289](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7289/Quickstart/)

::: tip 📝 NOTE
The following guide showcases the Web UI of WisGateOS 2 which is run by WisGate Edge Version 2 gateways.
:::

#### Creating an Application

1. Login into the gateway via the Web UI and select the **Application** tab in the **LoRa** menu.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/6.app-menu.png"
    width="100%"
    caption="Application menu in the web UI of the gateway"
/>


2. Click the **Add application** button and fill out the Application name. Select **Unified Application key** as **Application Type** and use the **Autogenerate** button to generate an **Application Key** and **Application EUI**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/7.com-port.png"
    width="100%"
    caption="Creating an application"
/>

#### Adding the Device to the Application

1. In the created application, click on the **End device** tab and then the **Add end device** button.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/8.app-edit.png"
    width="100%"
    caption="Application edit"
/>


2. Fill out the **End device name** and the **LoRaWAN MAC Version** (V1.0.3 is the correct one for RAK7201V2). Click on the **Add end devices**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/9.add-device.png"
    width="100%"
    caption="Adding the device"
/>


3. Input the **End Device EUI** of your device and then click **Add to "End Devices list"**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/10.add-device.png"
    width="100%"
    caption="Configuring the device's setings"
/>


4. You will see the device in the **End devices list** and the **Add end devices** button will allow you to register your end device in the application.


<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/11.add-device.png"
    width="100%"
    caption="The device is registered"
/>


#### Configuring the Button in OTAA Mode

1. To manage to connect the Button to the Built-In Server in the gateway, a configuration with the correct parameters is needed. Using the AT commands and the RAK Serial Port Tool, the following parameters must be set:

- Join Mode (OTAA)

```
at+njm=1
```

- Region (EU868 for this example)

```
at+band=2
```

- Device EUI (on the sticker at the back of the device)

```
at+deveui=ac1f09fffexxxxxx
```

- Application EUI (from the application configuration created previously in the gateway)

```
at+appeui=bf3112d69fxxxxxx
```

- Application Key (from the application configuration created previously in the gateway)

```
at+appkey=ea980d6f2e42772550c66ec265xxxxxx
```

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/12.configure-otaa.png"
    width="80%"
    caption="Configuring RAK7201V2 in OTAA mode"
/>


::: tip 📝 NOTE
The Keys and EUIs shown here are just examples, use the ones generated by your system or corresponding to your device.
:::


2. To connect to the LoRaWAN Network after the configuration, the device must be restarted. The restart command is as follows:

```
atz
```

3. After the restart, you need to issue `at+join` to join the LoRaWAN network. If all the settings are configured correctly, an `+EVT:JOINED` message will be displayed in the RAK Serial Port Tool.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/13.restart-connect.png"
    width="80%"
    caption="The device has restarted and connected to the LoRaWAN Network"
/>


4. After the successful connection, the data obtained from pressing the buttons will be transmitted to the application server of the gateway.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/14.buttons-operation.png"
    width="80%"
    caption="Successful operation of the buttons"
/>


5. The received data from RAK7201V2 can be seen in the web UI of the gateway under **Application > Device > Live Device Data**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/15.received-data.png"
    width="100%"
    caption="Received data"
/>


#### Configuring the Button in ABP Mode

To use the RAK7201V2 in ABP mode, a change of the activation method is needed.

1. Go to the **Device Configuration** in the gateway, and select the **ABP Join mode**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/16.change-activation-method.png"
    width="100%"
    caption="Changing the activation method"
/>


2. The following fields appear: **Device Address**, **Application Session Key**, and **Network Session Key**. Enter the **Device Address** manually, and it should be in **HEX format** and 8 digits long.
3. To generate the needed keys automatically, click the **Autogenerate** button next to the Application Session key and Network Session Key fields. Click **Save & Apply**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/17.abp-mode.png"
    width="100%"
    caption="Changing the activation method"
/>

4. To set the RAK7201V2 in ABP work mode, the following AT commands must be executed in the RAK Serial Port Tool:

- Join mode (ABP)

```
at+njm=0
```

- Device Address (from the device configuration created previously in the gateway)

```
at+devaddr=00000001
```

- Application Session Key (from the device configuration created previously in the gateway)

```
at+appskey=bfb959106b004e5a32d8dde9fexxxxxx
```

- Network Session Key (from the device configuration created previously in the gateway)

```
at+nwkskey=0a8139122e9e9011c049bcc575xxxxxx
```

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/18.configure-in-abp.png"
    width="80%"
    caption="Configure the RAK7201V2 in ABP mode"
/>

::: tip 📝 NOTE
The Keys and EUIs shown are just examples. Use the ones generated by your system or corresponding to your device.
:::


5. To connect to the LoRaWAN Network after the configuration, the device must be restarted. The restart command is as follows:

```
atz
```

6. After the restart, the device will be ready to send the information through the LoRaWAN Network.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/19.restart-device.png"
    width="80%"
    caption="Configure the RAK7201V2 in ABP mode"
/>

::: tip 📝 NOTE
There is no Join procedure in ABP mode. To be sure that the Button can send data, you need to press the buttons and see if you have uplinks in the Live Device Data field of the device in the gateway.
:::

7. To test the ABP mode, press the buttons of the device.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/20.abp-test.png"
    width="80%"
    caption="Testing the ABP mode"
/>

8. The received data from RAK7201V2 can be seen in the web UI of the gateway under **Application > Device > Live Device Data**.

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/21.received-data.png"
    width="100%"
    caption="Received data"
/>


#### Customized the Data Sent

This section addresses the main functionality of the different keys (buttons) of the device.

The default payload data of the keys:

| Key   | Data |
| ----- | ---- |
| Key 1 | A    |
| Key 2 | B    |
| Key 3 | C    |
| Key 4 | D    |

To customize the data sent by every button, follow the AT command:

```
at+button=<button>:<port>:<data>
```

**Where**:

- `<button>`: the configured key (range 1-4)

- `<port>`: the configured port number (range 1-223)

- `<data>`: the sent data (max length is 10 characters)

**Example**:

Change the data sent from the pressing of button 1 to `HelloWorld` using the command:

```
at+button=1:1:HelloWorld
```

::: tip 📝 NOTE
Refer to the [datasheet](/Product-Categories/RAK7201-V2/Datasheet/#buttons/) to view the key functions of the button.
:::

After the button is pressed, if the device is still sending, the user's subsequent key actions will be ignored until the device has finished sending.

#### LEDs Functions

Refer to the [datasheet](/Product-Categories/RAK7201-V2/Datasheet/#leds/) to view the key functions of the button.

#### HeartBeat Functions

The HeartBeat is used to monitor the network connection and to send the battery level information of the RAK7201V2.

The device can send a HeartBeat packet according to the configured HeartBeat interval. The AT command for configuring the HeartBeat interval is as follows:

```
at+heartbeat=<interval>
```

**Where**:

- The interval range is **0-120** (in hours), 0 to turn off the function.

**Example**:

Set the HeartBeat to one hour using the command:

```
at+heartbeat=1
```

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/22.heartbeat-interval.png"
    width="80%"
    caption="Set the HeartBeat interval"
/>


The HeartBeat message data format is as follows:

| Headers | Payload              |
| ------- | -------------------- |
| 0X48    | Battery level in HEX |

The battery level is represented in percentage form in hexadecimal format.

**Example**:

If the payload message of the HeartBeat is 48 61, it represents 96% battery level.


<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/23.hearbeat-message.png"
    width="100%"
    caption="HeartBeat message in the Live Device Data"
/>


The device will automatically send a low-voltage alarm signal when the battery power is below 20% and again when it is below 10%.

Battery power warning signal:

| Battery Power           | Warning Signal |
| ----------------------- | -------------- |
| Power is less than 20%. | 57 14          |
| Power is less than 10%. | 57 0a          |

#### Device Restart

Two restart options are available:

1. Using an AT command:

```
atz
```

<rk-img
    src="/assets/images/wisnode/rak7201-v2/quickstart/24.restart-at-command.png"
    width="80%"
    caption="Restarting with an AT command"
/>



2. Hold **Key 2** for three (3) seconds. When held, the blue LED will stay lit. It will turn off when the device is restarted.

::: tip 📝 NOTE

After restarting the device either manually or through the AT command, the RAK7201V2 will attempt to automatically join the network if the OTAA method is configured. You can identify this process through the four blue LEDs that will flash clockwise.

The device will make three attempts to join the network. If the first three attempts fail, the red LED on button 4 will flash for a second. If all three attempts are unsuccessful, the device must be restarted either manually or through the AT command to make a new attempt.
:::