---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7201
---

# Quick Start Guide

## Prerequisites

### What do you need?

Before going through each and every step in the installation guide of the RAK7201 WisNode Button, make sure to prepare the necessary items listed below:

1. WisNode Button 4K RAK7201 
2. Micro USB cable
3. Gateway in range 
4. Windows PC

### What’s included in the package

- 1 pc WisNode Button 4K RAK7201
- 1 pc Micro USB cable
- 1 pc Sticker for attaching the button to flat surface

## Product Configuration

### Interfacing with the RAK7201 WisNode Button 4K

For you to be able to interface with the RAK7201 WisNode Button 4K with your Windows Machine, you need to download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

1. Connect your RAK7201 WisNode Button 4K to your Windows Machine using the provided Micro USB cable.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/1.png"
  width="50%"
  caption="RAK7201 WisNode Button 4k to laptop connection"
/>

2. Open the RAK Serial Port Tool.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/2.png"
  width="80%"
  caption="RAK Serial Port Tool"
/>

3. For choosing the correct COM Port number for your device, go to your Device Manager by pressing the **Windows key + R** and type **devmgmt.msc** or search for the Device Manager in the Start menu. Once opened, look for **Ports (COM & LPT)** and find the name **USB-SERIAL CH340**. Take note of the COM Port Number, in this example it is **COM4**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/3.png"
  width="50%"
  caption="Device Manager"
/>

4. Choose the correct COM port number from the device manager and the correct baud rate, then click **Open**. The default baud rate of the WisNode Button 4K is **115200 bps**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/4.png"
  width="80%"
  caption="Correct COM port and baud rate are chosen"
/>

5. To configure the Button, Configuration Mode must be entered. To do that, press **Key 1** for three seconds. All blue LEDs will light up and you will have confirmation in the RAK Serial Port Tool.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/5.png"
  width="80%"
  caption="Confirmation for entering Configuration mode"
/>

6. To check if the latest firmware version is in use, send the **at+version** command.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/6.png"
  width="80%"
  caption="Checking the firmware version"
/>

### Connecting to Built-In Server

In this section, we will be connecting the RAK WisNode Button 4K to the Built-In server that is part of all RAK WisGate Series gateways.

#### Creating an Application

1. Login into the gateway via the web UI and select the **Application** tab in the **LoRa Network** menu.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/7.png"
  width="80%"
  caption=" Application menu in the web UI of the gateway"
/>

2. Input a name for the application and click the **Add** button. 

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/8.png"
  width="80%"
  caption="Creating an application"
/>

3. Turn on the **Auto Add LoRa Device** switch and click the key generation icon next to the Application EUI and Application Key fields. This will generate the EUI and the Key automatically. Click **Save and Apply**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/9.png"
  width="80%"
  caption="Application settings"
/>

#### Adding the Device to the Application

1. In the created application, click on the **Edit** button as shown in Figure 10.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/10.png"
  width="80%"
  caption="Application edit"
/>

2. Enter the Device EUI in the corresponding input filed and press **Add**. You can find the Device EUI on the sticker on the back of the RAK WisNode Button 4K.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/11.png"
  width="80%"
  caption="Adding the device"
/>

3. Input a Device name of your choice. The Class is A and the Join Mode is OTAA by default. Leave the other fields as-is. Click **Save And Apply**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/12.png"
  width="80%"
  caption="Configuring the devices setings"
/>

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/13.png"
  width="80%"
  caption="The device is registered"
/>

### Configuring In OTAA Mode


1. To manage to connect the Button to the Built-In Server in the gateway, a configuration with the correct parameters is needed. Using the AT commands and the RAK Serial Port Tool, the following parameters must be set:

- Join Mode (OTAA)

```
at+set_config=lora:join_mode:0
```

- Region (EU868 for this example)

```
at+set_config=lora:region:EU868
```

- Device EUI (on the sticker at the back of the device)

```
at+set_config=lora:dev_eui:ac1f09fffe01366a
```

- Application EUI (from the application configuration created previously in the gateway)

```
at+set_config=lora:app_eui:bf3112d69fc06a1b
```

- Application Key (from the application configuration created previously in the gateway)

```
at+set_config=lora:app_key:ea980d6f2e42772550c66ec2651f24f5
```

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/14.png"
  width="80%"
  caption="Configuring the RAK WisNode Button 4k in OTAA mode"
/>

2. To connect to the LoRaWAN Network after the configuration, the device must be restarted. The restart command is:


```
at+set_config=device:restart
```

3. After the restart, the device will try to join the LoRaWAN network automatically. If all the settings are configured correctly an **OK Join Success** message will be displayed in the RAK Serial Port Tool.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/15.png"
  width="80%"
  caption="The device has restarted and connected to the LoRaWAN Network"
/>

4. After the successful connection, the data obtained from pressing the buttons will be transmitted to the application server of the gateway. 

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/16.png"
  width="80%"
  caption="Successful operation of the buttons"
/>

5. The received data from the WisNode Button 4K can be seen in the web UI of the gateway under **Application > Device > Live Device Data**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/17.png"
  width="80%"
  caption="Received data"
/>

### Configuring in ABP Mode


To use the RAK WisNode Button 4K in ABP mode, a change of the activation method is needed. 

1. Go to the Device configuration in the Gateway, as shown in Figure 18 and select the ABP Join mode from the drop-down menu. 

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/18.png"
  width="80%"
  caption="Changing the activation method"
/>

2. Device Address, Application Session Key, and Network Session Key fields will appear. Enter the Device Address manually, it should be in HEX format and 8 digits long. To generate the needed keys automatically, click the key generation icon next to the Application Session key and Network Session Key fields. Click **Save & Apply**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/19.png"
  width="80%"
  caption="ABP mode configuration"
/>

3. To set the WisNode Button 4K in ABP work mode, the following AT commands must be executed in the RAK Serial Port Tool:


- Join mode (ABP) 

```
at+set_config=lora:join_mode:1
```

- Device Address (from the device configuration created previously in the gateway)

```
at+set_config=lora:dev_addr:00000001
```

- Application session key (from the device configuration created previously in the gateway)

```
at+set_config=lora:apps_key:5e8b925ee63053a9ef5cbff8fc712451
```

Network session key (from the device configuration created previously in the gateway) 

```
at+set_config=lora:nwks_key:c021e522f93751a92cc72e260031dde7
```

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/20.png"
  width="80%"
  caption="Configuring the WisNode Button 4K in ABP mode"
/>

4. To connect to the LoRaWAN Network after the configuration, the device must be restarted. The restart command is:


```
at+set_config=device:restart
```

5. After the restart, the device will be ready to send the information through the LoRaWAN Network. 

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/21.png"
  width="80%"
  caption="The device is restarted"
/>
 
::: tip 📝 NOTE:
In ABP mode there is no Join procedure. To be sure that the Button can send data you need to press the buttons and see if you have uplinks in the Live Device Data field of the device in the gateway.
:::

6. To test the ABP mode, press the buttons of the device.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/22.png"
  width="80%"
  caption="Testing the ABP mode"
/>

The received data from the WisNode Button 4K can be seen in the web UI of the gateway under **Application > Device > Live Device Data**.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/23.png"
  width="80%"
  caption="Received data"
/>

## Key Functions


In this section, the main functionality of the different keys (buttons) of the device will be addressed. 

Default payload data of the keys:

| Key   | Data |
| ----- | ---- |
| Key 1 | A    |
| Key 2 | B    |
| Key 3 | C    |
| Key 4 | D    |

To customize the data sent by every button, the following AT command is used:

```
at+button=<button>:<port>:<data>
```

Where:
- **`<button>`** - The configured key (range 1-4)
- **`<port>`** - Configured port number (range 1-223)
- **`<data>`** - The sent data (max length is 10 characters) 

Example: 

Change the data sent from the pressing of button 1 to HelloWorld using the command:

```
at+button=1:1:HelloWorld
```

To check the data of the buttons you can execute the command:

```
at+get_config=device:status
```

The result is shown in Figure 23.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/24.png"
  width="80%"
  caption="Changing the data sent from button 1"
/>

Key functions:


| Function | Description                                                  |
| -------- | ------------------------------------------------------------ |
| Key 1    | Long press Key 1 for three seconds. the device enters or exits configuration mode. Short press Key 1 to send Key 1 data. The data can be personalized with an AT command. |
| Key 2    | Long press Key 2 for three seconds, the device resets. Short press Key 2 to send Key 2 data. The data can be personalized with an AT command. |
| Key 3    | Short press Key 3 to send Key 3 data. The data can be personalized with an AT command. |
| Key 4    | Short press Key 4 to send Key 4 data. The data can be personalized with an AT command. |

::: tip 📝 NOTE:
When the device is still sending after the button is pressed, if the user presses a key again, the device will ignore this action. Only when the device is not sending, the user's key action will be accepted.
:::


## LEDs Functions

| LED function                                       | Description                                                  |
| -------------------------------------------------- | ------------------------------------------------------------ |
| Blue LED  corresponding to each button flash one   | Corresponding LED will flash once when the button is pressed. |
| Blue LED  corresponding to each button flash twice | Corresponding LED will flash twice when the data transmission is successful. |
| Key 4 red LED  flash twice                         | Data transmission is not successful.                         |
| Key 4 red LED  flash for 1 sec                     | One flash Indicates that the WisNode Button 4K is not connected to the Network, after the user press any button. Two flashes Indicate that the join procedure have failed. |
| All four blue LEDs  flash at once for 1 second     | Joining the network is successful.                           |
| All blue LEDs flash clockwise 1-2-4-3              | The device is trying to join the network.                    |
| Key 2 red LED                                      | Indicates battery charging mode. You can charge the battery of the WisNode Button 4k via the micro USB port. When the red LED on button 2 is on – the battery is charging, when it goes off – the battery is charged. |
| All four blue LEDs  are on                         | The device is in configuration mode.                         |

## HeartBeat function

The HeartBeat is used to monitor the network connection and to send the battery level information of the WisNode Button 4K. 

The device can send a HeartBeat packet according to the configured HeartBeat interval. The AT command for configuring the HeartBeat interval is:

```
at+heartbeat=<interval>
```

 Where the interval range is 0-120 (in hours), 0 to turn off the function.

Example:

Set the HeartBeat to one hour using the command:

```
at+heartbeat=1
```

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/25.png"
  width="80%"
  caption="Set the HeartBeat interval"
/>


The HeartBeat message data format is:


| Headers | Payload              |
| ------- | -------------------- |
| 0X48    | Battery level in HEX |

The battery level is represented in percentage form in hexadecimal format.

For example: if the payload message of the HeartBeat is 48 60, this represents 96% battery level.

<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/26.png"
  width="80%"
  caption="HeartBeat message in the Live Device Data"
/>

The device will automatically send a low-voltage alarm signal when the battery power is below 20% and again when it is below 10%.
Battery power warning signal:


| Battery power          | Warning signal |
| ---------------------- | -------------- |
| Power is less than 20% | 57 14          |
| Power is less than 10% | 57 0a          |

## Device Restart

Two restart options are available:

1. You can restart the device by using the AT command:

```
at+set_config=device:restart
```
<rk-img
  src="/assets/images/wisnode/rak7201/quickstart/27.png"
  width="80%"
  caption="Restarting with an AT command"
/>

2. You can restart the device by holding Key 2 for three seconds. When held, the blue LED will stay lit, and will turn off when the device is restarted. 

::: tip 📝 NOTE:
After the device restart manually or by AT command the WisNode Button 4K will try to join the network automatically if the OTAA method is configured. This will be indicated by 4 blue LEDs flashing clockwise. The device will make three attempts to Join the Network. If a Join attempt fails, the red LED on button 4 will flash for 1 second. If the three join attempts are failed, the device needs to be restarted manually or by AT command to make a new attempt. 
:::
