---
rak_desc: Contains instructions and tutorials for installing and deploying your <board/module name>. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak7431/datasheet/RAK7431_home.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7431
  - quickstart
  - wisnode
---

# RAK7431 Quick Start Guide

## Prerequisite

### What do you need?
Before going through each and every step in the installation guide of the RAK7431 WisNode Bridge Serial, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. [RAK7431 WisNode Bridge Serial](https://store.rakwireless.com/products/rak7431?utm_source=RAK7431WisNodeBridge&utm_medium=Document&utm_campaign=BuyFromStore)
2. Micro USB Cable
3. Gateway in Range, for Testing
4. A Windows/Mac OS/Linux Computer

#### Software Tools

* [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
* [MQTTfx Tool](http://mqttfx.jensd.de/)

## Product Configuration

### Typical Network Application

RAK7431 converts data from the RS485 protocol into LPWAN wireless messages and delivers it to a cloud server through an LPWAN gateway. Cloud servers can also proactively send data to RAK7431 for two-way data transmission. Using the RAK7431, you can convert data from a conventional RS485 wired network to a wireless network.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/typical-application.png"
  width="80%"
  caption="Example communication with RS485 enabled devices"
/>

### Connect the RAK7431 to the Sensor

#### Power Interface Configuration

The RAK7431 device can be powered either by:
- DC (VIN/GND) terminals
- Micro USB

The DC screw terminals are supporting 8 to 48&nbsp;V<sub>DC</sub>. The Micro USB port can be used to power the RAK7431, up to 5&nbsp;V / 500&nbsp;mA DC. At the same time, the USB port is used as the configuration port for the device. Using the USB cable to connect the RAK7431 to a computer’s USB port, you can import your configuration settings.

::: tip 📝 NOTE
The Micro USB port can be used only for powering the device. It cannot provide power to VOUT and power other devices in the RS485 network.
:::

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/device-with-power-supply.png"
  width="80%"
  caption="RAK7431 bridge with connected sensor and power supply"
/>

#### Data Interface Configuration

The RAK7431 - RS485 serial interface can support up to **16 RS485 devices**. VOUT on the data interface can supply external power to the RS485 connected devices (only when the device is powered from the DC input). The VOUT output voltage is the same as the DC input voltage VIN.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/rak7431-interface-pin-def.png"
  width="50%"
  caption="RAK7431 Interface pin definition"
/>

### Gateway Connection Settings

In this section, the **RAK7431 WisNode Bridge Serial** shall be connected into the RAKwireless Gateway. For this demonstration, a [RAK7249 WisGate Edge Max](https://store.rakwireless.com/products/rak7249-diy-outdoor-gateway?utm_source=RAK7249Max&utm_medium=Document&utm_campaign=BuyFromStore) shall be used. Listed below are the requisites for this section.

- [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) - used to configure the RAK7431 WisNode Bridge Serial
- [Web Management Platform Documentation](/Knowledge-Hub/Learn/WEB-Management-Platform/) - guide on how to configure the RAK7249 WisGate Edge Max

#### Gateway Configuration

##### Set-up the Built-in Network Server

1. Sign in to the gateway by following the [Accessing the Web Management](/Knowledge-Hub/Learn/WEB-Management-Platform/#accessing-the-web-management-platform) section of the WEB Management Platform documentation.

2. Setup the RAK7249 WisGate Edge Max using its Built-in Network Server by following this [guide](/Knowledge-Hub/Learn/Build-in-LoRa-Server/#gateway-built-in-lora®-ns).

##### Adding Application

1. To enter the application configuration interface click: **LoRaNetwork > Application**. Enter a name for the application and click the **Add** button.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/create-application.png"
  width="100%"
  caption="Create Application in the Built-In Network Server"
/>

2. Turn on the **Auto Add LoRa Device** slider.

3. Generate **Application EUI** and **Application Key** by pressing the generate icon marked in the image below.

::: tip 📝 NOTE
The description is optional.
:::

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/register-application.png"
  width="100%"
  caption="Registering an application"
/>

4. After which, press **Save & Apply**.

5. You will be returned to the Application page. Select **Edit** on the created application.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/application-list.png"
  width="100%"
  caption="Application list"
/>

6. Enter the **Device EUI** and press **Add**.

::: tip 📝 NOTE
The RAK7431 Device EUI can be seen at the label on the back
:::

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/app-add-rak7431.png"
  width="100%"
  caption="Adding the RAK7431"
/>

7. On the next page, select the settings provided below:

- **LoRaWAN Class**: C
- **Join Mode**: OTAA
- **Description**: Optional

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/bns-add-rak7431.png"
  width="100%"
  caption="Adding the RAK7431 to the Built-In Server"
/>

#### RAK7431 Configuration

##### Connect the RAK7431 to your Network

1. Connect the RAK7431 to a computer using the Micro USB cable.

2. Open the RAK Serial Tool and select the correct COM port. The default baud rate is **115200**.

3. After selecting, press **Open**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/rak-serial-port-tool.png"
  width="45%"
  caption="RAK Serial Tool"
/>

- To set up the Device EUI, run the command:

```sh
AT+DEVEUI=<Device EUI>
```

- To check the Device EUI run:

```sh
AT+DEVEUI
```

- To set up the Application EUI run the command:

```sh
AT+APPEUI=<application EUI>
```

- To set up the Application Key run the command:

```sh
AT+APPKEY=<application Key>
```

- To check the previously configured Application EUI and Key, run the commands:

```sh
AT+APPEUI
```

```sh
AT+APPKEY
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/configuring-the-rak7431.png"
  width="45%"
  caption="Configuring the RAK7431"
/>

##### Set the Frequency Region

The node supports the
following Regional Frequencies:

- EU433
- CN470
- CN470ALI
- RU864
- IN865
- EU868
- US915
- AU915
- KR920
- AS923

For this demonstration, EU868 shall be used. To set the desired regional frequency band use the command:

```sh
AT+REGION=EU868
```

::: tip 📝 NOTE
The regional frequency settings need to be consistent with the RAK commercial gateway supported band.
:::

##### Data Serial Port Rate Setting

::: tip 📝 NOTE
The baud rate setting needs to be consistent with the baud rate of the sensor, which is **9600**.
:::

The AT command for execution is:

```sh
AT+BAUDRATE=9600
```

##### Operating and Activation Mode Settings

1. Supported operating modes are two: **Class A** and **Class C**. To set the operating mode (Class C in this case), you need to execute the AT command:

```sh
AT+CLASS=C
```

::: tip 📝 NOTE
Changes will take effect as soon as they are made.
:::

2. Activation mode supports the following two modes: **ABP** and **OTAA**. To set the activation mode (OTAA in this case), you need to execute the AT command:

```sh
AT+JOINMODE=OTAA
```

3. **Restart** is needed for the modification to take effect. To restart the RAK7431, execute the command:

```sh
AT+RESTART
```

4. If everything is configured right, after the execution of the restart command this output pops up in the RAK Serial Tool:

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/rak7431-successful-join.png"
  width="45%"
  caption="RAK7431 Successful Join"
/>

### Configure RAK7431 Working Modes

#### Data Transparent Mode

When the RS485 data interface works in Modbus mode, the data encapsulation format can be divided into two types: **transparent mode** and **non-transparent mode.**

- In **transparent mode**, the Modbus execution instruction response data (data, received by the node) will be directly forwarded through the LoRaWAN network.
- In the **non-transparent mode**, the Modbus execution instruction response data (data, received by the node) will be encapsulated in the message header according to the Modbus protocol, and then transmitted to the server through LoRaWAN.

::: tip 📝 NOTE
The non-transparent mode is the default one.
:::

Enter the following AT command in the RAK Serial Tool to change the mode:

```sh
AT+TRANSPARENT=n
```


| **n** | **Condition** |
| ---- | ---- |
| 0 | transparent mode is turned off |
| 1 | it is turned on |


::: tip 📝 NOTE
The change takes effect immediately after modification.
:::

#### Scheduled Polling Function

When the device works in MODBUS mode, it supports the scheduled polling function.

This means that the device will perform a polling operation every given period (polling cycle). During polling, the device will send the pre-added MODBUS instructions in turn and forward the corresponding response data through the LoRaWAN network.

The device turns on the scheduled polling by default. The AT command for this is:

```sh
AT+ENABLEPOLL=n
```

| **n** | **Condition** |
| ---- | ---- |
| 0 | turns scheduled polling off |
| 1 | turns it on |


::: tip 📝 NOTE
The modification takes effect after restart.
:::

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/sched-polling-example.png"
  width="80%"
  caption="Scheduled polling example"
/>

#### Scheduled Polling Cycle

This command sets/reads the scheduled polling cycle. This command only works if scheduled polling is enabled. The modification takes effect after the next polling cycle or a restart.

**Example**: To set the polling cycle to 60&nbsp;seconds, use this command:

```sh
AT+POLLPERIOD=60
```

RAK7431 supports polling mode, which stores up to 32 query instructions at a maximum length of 128&nbsp;bytes per instruction. Polling intervals and wait times can be adjusted as needed. RAK7431 converts the data returned by the RS485 node into a LoRaWAN message, which can be sent to the LoRaWAN gateway as is or encapsulated. In transparent mode, the data for the RS485 is sent in the payload of the LoRa message as is, and in non-transparent mode, the data of RS485 is encapsulated in the LoRa message with a header and validation.

#### Add Polling Instructions

To add polling instruction, execute the AT command:

```sh
AT+ADDPOLL=<n>:<xxxx>
```

| **Parameter** | **Description** | **Value Range** |
| ---- | ---- | ---- |
| n | polling instruction ID | 1 to 127 |
| xxxx | polling instruction content; hexadecimal string | 128&nbsp;bytes max |

According to the temperature and humidity register address of the temperature and humidity sensor in the example and the RS485 address, the polling instruction should be:

```sh
AT+ADDPOLL=1:010300000002C40B
```

**Example**: If you have added multiple RS485 temperature and humidity sensors, continue to increase the polling instructions based on the RS485 address and register address, for example:

- RS485 Temperature and humidity sensor addr: 01, Polling 1: 010300000002C40B
- RS485 Temperature and humidity sensor addr: 04, Polling 2: 040300000002C45E
- RS485 Temperature and humidity sensor addr: 08, Polling 3: 080300000002C492
- RS485 Temperature and humidity sensor addr: 0F, Polling 4: 0F0300000002C525

You will need to increase the polling instruction by the following AT commands:

```sh
AT+ADDPOLL=1:010300000002C40B
```


```sh
AT+ADDPOLL=2:040300000002C45E
```


```sh
AT+ADDPOLL=3:080300000002C492
```


```sh
AT+ADDPOLL=4:0F0300000002C525
```

The RAK7431 sends an instruction to the sensor every 1&nbsp;minute to obtain temperature and humidity data, and the following is the result of 3 consecutive scheduled polls:

- **DTU Tx**: The polling instruction sent to the Sensors over RS485 Data Interface
- **DTU Rx**: The sensor data received.
- **LoRa Tx**：Send the received data through a LoRaWAN network.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/transparent-mode.png"
  width="45%"
  caption="Data in transparent mode"
/>

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/non-transparent-mode.png"
  width="45%"
  caption="Data in non-transparent mode"
/>

- **Humidity calculation**: hex is 0210, the decimal is 528, converted humidity is 52.8% RH.
- **Temperature calculation**: hex is 012F, the decimal is 303, converted temperature is 30.3°&nbsp;C.

### MQTT Subscribe to Data Server

To better demonstrate the functionality, you will use the Application Server Integration feature to subscribe to the Built-In Network Server Topics, using the MQTT client, to obtain data and send instructions to the RAK7431.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/mqtt-topic-template.png"
  width="100%"
  caption="Gateway MQTT Topic Templates"
/>

To communicate with the MQTT bridge in the gateway, you need to use MQTT Topic Templates.

**MQTT Topic Configuration**:

```sh
Application/{{application_ID}}/device/{{device_EUI}}/join
Application/{{application_ID}}/device/{{device_EUI}}/rx
Application/{{application_ID}}/device/{{device_EUI}}/tx
Application/{{application_ID}}/device/{{device_EUI}}/ack
Application/{{application_ID}}/device/{{device_EUI}}/status
```

1. Download and install [MQTTfx tool](https://mqttfx.jensd.de/) to read the topics and send data to the gateway and node.

2. After installation, the MQTT Client must be configured. Select **local mosquitto** from the drop-down list and click the **edit connection profiles** icon marked in the image below to open the settings page.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/mqttfx-client.png"
  width="100%"
  caption="MQTT.fx Client"
/>

3. On the next window, input the **Broker Address** and **Broker Port**. If the Client ID is empty press **Generate**. Then click **OK**.

- **Broker Address**: Address of MQTT server – the gateway IP.
- **Broker Port**: Consistent with MQTT Broker Port set by the gateway - by default 1883.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/mqttfx-settings.png"
  width="75%"
  caption="MQTT.fx settings"
/>

4. Click on the **Connect** button. The green dot indicates that the connection is successfully subscribed to the MQTT Broker.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/subscribe-mqtt-broker.png"
  width="100%"
  caption="MQTT.fx connected successfully"
/>

- If you want to receive all data from the MQTT Bridge, use the wildcard character **#**.

5. Choose the **Subscribe tab**, enter the wildcard and press **Subscribe**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/subscribed-mqtt-wildcard.png"
  width="100%"
  caption="Subscribing to MQTT Broker with wildcard"
/>

- If the node sends data, the MQTT client will display it as it is subscribed to the topic.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/subscribed-topic-data.png"
  width="100%"
  caption="Subscribed topic data"
/>

- Notice that the data field is in **base64** format, which has to be converted to hex string to be useful. You can change the data format from the built-in server settings.

6. This is done by going to **Gateway>Application>Integrations>Data Encode/Decode Type** and chose **HEX String** form the drop-down menu. Press **Save & Apply**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/data-encode-decode-type.png"
  width="100%"
  caption="Change the Data Encode/Decode Type"
/>

- Now, all received data will be in HEX String.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-hex-format.png"
  width="100%"
  caption="Received data field in HEX format"
/>

### RAK7431 Remote Control and Configuration via MQTT.fx

To remotely control the RAK7431 you need to publish messages to the **Gateway’s Network Server MQTT “TX” topic**.

#### Add a Scheduled Polling Task List

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan="2">MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x03</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>nByte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
The message length does not contain the header.
:::

**Example**: You will add a polling instruction.

**Publish topic**:

```sh
application/1/device/60c5a8fffe75404b/tx
```

::: tip 📝 NOTE
Application ID and Device EUI should be consistent with the settings within the gateway.
:::

- To successfully complete this, the JSON data format must be followed.

**Content of the uplink**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"030001000901010300000002C40B"
}
```

| **Parameter** | **Description** |
| ---- | ---- |
| **"confirmed":true** | This indicates that the downlink to the RAK7431 will be confirmed for successful receiving. |
| **"fPort":129** | Defines the port that you want to send the command. (For more information on the fPort see the [AT Command Manual](../AT-Command-Manual/) for RAK7431) |
| **"data":"030001000901010300000002C40B"** | The data of the task in hexadecimal format. |


**The content of the data that you will send is**:

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/content-data.jpg"
  width="40%"
  caption="Data arrangement"
/>

1. DTU command word
2. The message number
3. Message length (excluding header)
4. The task ID
5. The content of the task

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-data-to-rx-topic.png"
  width="100%"
  caption="Publishing data to RX topic"
/>

- After publishing the data, you can see the downlink instruction and uplink answer from the RAK Serial Tool:

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-data-reply.png"
  width="45%"
  caption="Received data and sent an answer"
/>

**Message format when execution is successful**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x83</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

- The MQTT subscription bar can see the upstream message "**83000100010101**" for successful execution.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-task-confirmation.png"
  width="100%"
  caption="Received confirmation of the task"
/>

#### Remove the Scheduled Polling Task List

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x04</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

**Example**: Removal of timed polling temperature and humidity sensor task order on a node:

**Publish the topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
 "fPort":129,
"data":"040001000101"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/remove-poll-downlink-message.png"
  width="100%"
  caption="Remove poll downlink message"
/>

**Message format when execution is successful**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x84</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/poll-remove-successful.png"
  width="100%"
  caption="Poll removed successfully message"
/>

- The MQTT subscription bar sees the upstream message "**84000100010101**", which means the task was successfully removed.

#### Read the Scheduled Polling Task List

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x05</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

**Publish topic**:

```sh
application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"050001000101"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-read-poll-task.png"
  width="100%"
  caption="Publishing the read poll task message"
/>

**Perform successful upstream message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan="2">MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x85</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>nByte</td>
        </tr>
</tbody>
</table>

- Open the MQTT subscription column that is to see to the performance of the above line: "**8500010009010103000000002C40B**" is the query to the task, the order ID is 1, the task order content is 010300000002C40B (example registers).

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-message-from-node.png"
  width="100%"
  caption="Received message from the node"
/>

#### Read the LoRa Configuration

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>0x06</td>
            <td>2Byte</td>
            <td>2Byte</td>
            <td>0Byte</td>
        </tr>
</tbody>
</table>

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
 "data":"0600010000"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-lora-config-message.png"
  width="100%"
  caption="Publish LoRa configuration read message"
/>

**Perform successful upstream message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=6>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x86</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>DATA RATE</td>
            <td>TXPWR</td>
            <td>CONFIRM</td>
            <td>RETRY</td>
            <td>ADR</td>
            <td>DUTY CYCLE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

- **DATARATE**: Speed rate (0 – 5)
- **TXPOWER**: The transmit power level (0 – 20)
- **CONFIRM**: Whether to turn on ACK 0 – off, 1 – on
- **RETRY**: Maximum re-transmission times when ACK is on (0 ~ 15)
- **ADR**: Whether to turn on the dynamic rate adjustment 0 – off, 1 - on
- **DUTY CYCLE**: Whether to turn on duty cycle limit 0 – off, 1 – on

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-message-with-lora-config.png"
  width="75%"
  caption="Received message with LoRa configuration"
/>

- Open the MQTT subscription bar to see the upstream message "**860001000006000010301000000**" to read the LoRa configuration based on the upstream message format for the successful execution above.

#### Change the LoRa Configuration

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=6>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x07</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>DATA RATE</td>
            <td>TXPWR</td>
            <td>CONFIRM</td>
            <td>RETRY</td>
            <td>ADR</td>
            <td>DUTY CYCLE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"070001000601050103010"
}
```

- The above command changes the **data rate to "1"** and the **transmit power to "5"**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-change-lora-config-data.png"
  width="100%"
  caption="Publish change LoRa configuration data"
/>

**Perform successful upstream message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>0x87</td>
            <td>2Byte</td>
            <td>2Byte</td>
            <td>0Byte</td>
        </tr>
</tbody>
</table>

- Open the MQTT subscription bar to see the upstream message for successful execution: "**8700010000**".

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-confirmation-message.png"
  width="75%"
  caption="Received confirmation message"
/>

#### Reset the default LoRa Configuration

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"1D00010000"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-reset-def-lora-config.png"
  width="100%"
  caption="Publish reset the default LoRa configuration"
/>

- Open the MQTT subscription bar to see the upstream message for successful execution: "**9D00010000**".

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-data1.png"
  width="75%"
  caption="Received Data"
/>

**LORA configuration default values**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DATARATE</th>
    <th>TXPOWER</th>
    <th>CONFIRM</th>
    <th>RETRY</th>
    <th>ADR_ENABlE</th>
    <th>DUTYCYCLE_ENABLE</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>0 – DR_0</td>
            <td>19 -19dBm</td>
            <td>1 – open</td>
            <td>3 times</td>
            <td>1 – open</td>
            <td>0 – close</td>
        </tr>
</tbody>
</table>

#### Read the DTU Configuration

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>0x08</td>
            <td>2Byte</td>
            <td>2Byte</td>
            <td>0Byte</td>
        </tr>
</tbody>
</table>

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"0800010000"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-read-dtu-config.png"
  width="100%"
  caption="Publish message for reading the DTU configuration"
/>

**Uplink data message format when execution successful**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=5>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x88</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>POLL ENABLE</td>
            <td>POLL PERIOD</td>
            <td>BUS TIMEOUT</td>
            <td>RETRY</td>
            <td>RS485</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>4Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

- **POLL ENABLE**: Enables scheduled polling, 0 - off, 1 - on
- **POLL PERIOD**: Polling period, in seconds
- **BUS TIMEOUT**: Bus timeout. The unit is seconds
- **RETRY**: Number of retries after bus timeout. 0 - turn off retry function
- **RS485**: 485 bus parameters

Open the MQTT subscription bar to see the upstream message "**8800010000800000003C010050**" to read the DTU configuration according to the successful upstream message format above.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/receive-current-dtu-config.png"
  width="75%"
  caption="Received message with current DTU configuration"
/>

#### Change the DTU POLL configuration

**Downlink instruction message format**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=5>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x09</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>POLL ENABLE</td>
            <td>POLL PERIOD</td>
            <td>BUS TIMEOUT</td>
            <td>RETRY</td>
            <td>RS485</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>4Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"09000100080100000E10010050"
}
```

- The above command changes the polling period to only 1 hour.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-change-dtu-config.png"
  width="100%"
  caption="Publish message for change the DTU configuration"
/>

**Uplink data message format when execution successful**:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>0x89</td>
            <td>2Byte</td>
            <td>2Byte</td>
            <td>0Byte</td>
        </tr>
</tbody>
</table>

- Open the MQTT subscription bar to see the upstream message for successful execution: "**8900010000**".

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-dtu-confirm-message.png"
  width="75%"
  caption="Received confirmation message"
/>

#### Reset the default DTU Configuration

**Publish topic**:

```sh
Application/1/device/60c5a8fffe75404b/tx
```

**Content**:

```sh
{
"confirmed":true,
"fPort":129,
"data":"1E00010000"
}
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/publish-reset-default-dtu.png"
  width="100%"
  caption="Publish reset the default DTU configuration"
/>

- Open the MQTT subscription bar to see the upstream message for successful execution: "**9E00010000**".

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/received-data2.png"
  width="75%"
  caption="Received Data"
/>

**DTU Configure the initial value**:

<table style="text-align: center">
<thead>
  <tr>
    <th>POLL_ENABLE</th>
    <th>POLL_PERIOD</th>
    <th>BUS_TIMEOUT</th>
    <th>RS485</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>1 - on</td>
            <td>3600&nbsp;seconds</td>
            <td>1&nbsp;second</td>
            <td>0xE0</td>
        </tr>
</tbody>
</table>


### Connecting to the Helium Network

Helium has quickly become the most widespread LPWAN communal network with more than 27,000 devices deployed globally. All the RAKwireless node products are compatible with it and the process of adding a device to the network is intuitive and straightforward.

This section will focus on giving a brief guide on how to connect the RAK7431 to the network console, assuming that there is a Helium Hotspot within range.

Log in or create your account in the [Helium console page](https://www.helium.com/console).


<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/1.helium-console.png"
  width="85%"
  caption="Helium Console"
/>

Once registered/logged in, you will end up at the home page where you can see your function tree on the left and your DC balance at the top, as well as several useful links.


<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/2.home.png"
  width="100%"
  caption="Helium console home screen"
/>

Go to the **Devices** section in the function tree. If this is your first time doing this, there will be no devices registered. Click the **+ Add Device** button to get started.


<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/3.device-section.png"
  width="100%"
  caption="Devices section"
/>

A window will pop up with a set of a field containing the device parameters required for its registration.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/4.add-device.png"
  width="60%"
  caption="Adding a new device"
/>

Fill in a name of your choosing. The **Dev EUI**, **App EUI**, and **App Key** will have random values generated for you by default. Press the eye icon to reveal the values. You can manually replace them with values of your own. For this tutorial, use the default values. Press the **Submit** button, and you are done.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/5.registered-device.png"
  width="100%"
  caption="Helium devices"
/>

Now, your RAK7431 is registered and is awaiting activation. For this to happen, you need to import the Dev EUI, App EUI, and App Key in the RAK7431 using the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

Open the tool, select the desired port (default baud rate) and open it. Then start importing your settings.

Configure your LoRa band and activation mode. This tutorial will be using the EU868 band and OTAA (the only option available for now with Helium) with device class A (default one, does not need configuring).

- Regional band, device class, and activation mode setting


```
at+joinmode=OTAA
```

```
at+region=EU868
```


- Enter the Dev UI

Use the command below by replacing the XXXX with your Device EUI from the Helium console:


```
at+deveui=XXXX
```

- Enter the App EUI

The same as with the Device EUI, replace the XXXX with your value:

```
at+appeui=XXXX
```

- Enter App Key

Finally, fill in the App key with the following command:


```
at+appkey=XXXX
```

- Join Network

Run the following AT command in order for the node to join the network.

Once the procedure is initiated and successfully complete, you will have a notification in the serial console.

```
at+restart
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/6.join.png"
  width="90%"
  caption="RAK7431 EUIs and key"
/>

If you take a look at the Helium console, you will also see the join request packets both in the graph and event log. Your node is now a part of the Helium Network.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/connecting-to-helium-network/7.live-data.png"
  width="100%"
  caption="Helium console live device data"
/>


### Connecting to The Things Network V3 (TTNv3)
At The Things Conference 2021, it was announced that The Things Network is upgrading to The Things Stack v3.  In this section, it will be shown how to connect RAK7431 WisNode Bridge Serial to The Things Stack.  To login into the TTNv3, head on [here](https://eu1.cloud.thethings.network/console). If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image001.png"
  width="100%"
  caption="The Things Stack Home Page"
/>

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image002.png"
  width="100%"
  caption="Console Page after successful login"
/>

::: tip 📝 NOTE
To be able to connect RAK7431 WisNode Bridge Serial to TTNv3 you should already have connected a gateway in range to TTNv2 or TTNv3, or you have to be sure that you are in the range of a public gateway.
:::

#### Adding an application

::: tip 📝 NOTE
This tutorial is for EU868 Frequency band.
:::

1. To create an application, choose **Create an application** (for new users that do not already have created applications) or **Go to applications** > **+ Add application** (for users that have created applications before).

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image003.png"
  width="100%"
  caption="Create an application page"
/>

2. Fill in the needed information:

- **Owner** - Automatically filled by The Things Stack, based on your account or created Organization.
- **Application ID** - This will be the unique ID of your application in the Network. Note that the ID must contain only lowercase letters, numbers, and dashes (-).
- **Application name** (optional) - This is the name of your application.
- **Description** (optional) – Description of your application. Optional application description; can also be used to save notes about the application.

3. After you fill in the information, click **Create application**. If everything is filled in correctly, you will see the same page, as shown in Figure 53.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image004.png"
  width="100%"
  caption="Application Overview"
/>

#### Registering and Configuring the Device In OTAA Mode

##### Registering the Device in OTAA Mode

1. From the Application Overview page, click on **+ Add end device**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image005.png"
  width="100%"
  caption="Adding a device in OTAA mode"
/>

2. Below the **Register end device** heading you can find two options for registering a device. Since RAK7431 WisNode Bridge Serial is part of The LoRaWAN Device Repository, you can register it **From The LoRaWAN Repository** option. In the **Brand** dropdown menu find and select **RAKwireless Technology Co.** and a **Model** field will pop up next to it. In it choose **RAK7431 WisNode Bridge Serial**.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image006.png"
  width="100%"
  caption="Choosing the device"
/>

3. After choosing the device, three more fields will pop up.

- **Hardware Ver.** – Version of the hardware. This is the only option, so leave it as default.
- **Firmware Ver.** – Version of the firmware. This is the only option, so leave it as default.
- **Profile (Region)** – Here the region is chosen.

::: tip 📝 NOTE
For this example, the EU_863_870 is chosen.
:::

4. Next, an **Enter registration data** heading will pop up below. Scroll down to enter the required data for the device.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image007.png"
  width="100%"
  caption="Registration Data"
/>

5. Here you must enter the following information:

- **Frequency plan** – Note: For this example, you will choose Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended).
- **AppEUI** - The AppEUI uniquely identifies the owner of the end device. It is provided by the device manufacturer. To get the AppEUI, connect your device via USB cable to your computer. Open RAK Serial Port Tool, choose the correct COM port and BaudRate and run the following command:

```
AT+APPEUI
```
<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/1.png"
  width="70%"
  caption="AppEUI of the device"
/>

- **DevEUI** - The DevEUI is the unique identifier for this end device. It is provided by the manufacturer and is printed on the label on the back of the device.
- **AppKey** - The root key to deriving session keys to secure communication between the end device and the application. AppKey can be generated by clicking the **Generate** button <img src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image008.png">.
-  **End device ID** – The End device ID is automatically filled based on the DevEUI. It can be changed. Note that the end device ID must contain only lowercase letters, numbers, and dashes (-).

::: tip 📝 NOTE
If you are going to register more than one device of this type, you can choose the option **Register another end device of this type** and be transferred to the same page to register the next device.
:::

6. After filling in the registration information, click **Register end device**.

##### Configuring the Device in OTAA Mode

1. For configuring the node you will need the following three parameters: **Device EUI, Application EUI**, and **Application Key**. You can see them all in the **Device Overview** page, but since the two EUI's come with the device, you only need the Application Key from there.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image009.png"
  width="100%"
  caption="OTAA device parameters"
/>

2. Using the RAK Serial Port Tool, set the join mode, device class, and your LoRaWAN region to your correct frequency band, with the following set of AT commands:

- For the join mode (OTAA)

```
AT+JOINMODE=OTAA
```

- For the class (Supported classes are: Class A, Class B and Class C. Remember for different classes to change the command with the correct letter, for example for Class B it will be AT+CLASS=B, in this case it is Class A.)

```
AT+CLASS=A
```

- For the region, replace the **frequency band** with the one for your LoRaWAN region. Refer to the [TTN site](https://www.thethingsnetwork.org/docs/lorawan/frequencies-by-country.html) for your frequency plan.

```
AT+REGION=EU868
```

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image010.png"
  width="70%"
  caption="Setting up the RAK7431 WisNode Bridge Serial operation modes"
/>

::: tip 📝 NOTE
The following tutorial is based on using the EU868 frequency band.
:::

1. Now that those parameters are set, enter the **App Key**, using the command below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case.

```
AT+APPKEY=XXXX
```
<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image011.png"
  width="70%"
  caption="Setting up the RAK7431 WisNode Bridge Serial OTAA parameters"
/>

4. To connect to the LoRaWAN Network after configuration, the device must be restarted. Restart it with the command:

```
AT+RESTART
```
<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image012.png"
  width="70%"
  caption="Joining the network confirmation"
/>

You can see in the **Live data** feed that the RAK7431 WisNode Bridge Serial is successfully joined.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/ttnv3/image013.png"
  width="100%"
  caption="Receiving data in the Live data feed"
/>



