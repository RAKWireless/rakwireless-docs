---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK7431
---

# Quick Start Guide

## Prerequisite

### What do you need?
Before going through each and every step in the installation guide of the RAK7431 WisNode Bridge Serial, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. RAK7431 WisNode Bridge Serial
2. Micro USB Cable
3. Gateway in Range, for Testing
4. A Windows/Mac OS/Linux Computer

#### Software Tools

* [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
* [MQTTfx Tool](https://mqttfx.jensd.de/)

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
- Micro USB. 

The DC screw terminals are supporting 8 to 48 VDC. The Micro USB port can be used to power the RAK7431, up to 5 V / 500 mA DC. At the same time, the USB port is used as the configuration port for the device. Using the USB cable to connect the RAK7431 to a computer’s USB port, you can import your configuration settings. 

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

In this section, the **RAK7431 WisNode Bridge Serial** shall be connected into the RAKwireless Gateway. For this demonstration, a **RAK7249 WisGate Edge Max** shall be used. Listed below are the requisites for this section.

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
  caption="Create Application in the Buil-In Network Server"
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
The changes take effect as soon as they are made.
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

**Example**: To set the polling cycle to 60 seconds, use this command:

```sh
AT+POLLPERIOD=60
```

RAK7431 supports polling mode, which stores up to 32 query instructions at a maximum length of 128 bytes per instruction. Polling intervals and wait times can be adjusted as needed. RAK7431 converts the data returned by the RS485 node into a LoRaWAN message, which can be sent to the LoRaWAN gateway as is or encapsulated. In transparent mode, the data for the RS485 is sent in the payload of the LoRa message as is, and in non-transparent mode, the data of RS485 is encapsulated in the LoRa message with a header and validation.

#### Add Polling Instructions

To add polling instruction, execute the AT command:

```sh
AT+ADDPOLL=<n>:<xxxx>
```

| **Parameter** | **Description** | **Value Range** | 
| ---- | ---- | ---- | 
| n | polling instruction ID | 1 to 127 | 
| xxxx | polling instruction content; hexadecimal string | 128 bytes max | 


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


The RAK7431 sends an instruction to the sensor every 1 minute to obtain temperature and humidity data, and the following is the result of 3 consecutive scheduled polls:

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
- **Temperature calculation**: hex is 012F, the decimal is 303, converted temperature is 30.3 ℃.

### MQTT Subscribe to Data Server

To better demonstrate the functionality we will use the Application Server Integration feature to subscribe to the Built-In Network Server Topics, using the MQTT client, to obtain data and send instructions to the RAK7431.

<rk-img
  src="/assets/images/wisnode/rak7431/quickstart/mqtt-topic-template.png"
  width="100%"
  caption="Gateway MQTT Topic Templates"
/>

To communicate with the MQTT bridge in the gateway we need to use MQTT Topic Templates.

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

3. On the next window, input the **Broker Adress** and **Broker Port**. If the Client ID is empty press **Generate**. Then click **OK**.

- **Broken Address**: Address of MQTT server – the gateway IP. 
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

- If we want to receive all data from the MQTT Bridge, we can use the wildcard character **#**.

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

- Notice that the data field is in **base64** format, which has to be converted to hex string to be useful. We can change the data format from the built-in server settings. 

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
The message length does not contain the header
:::

**Example**: We will add a polling
instruction.

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
| **"fPort":129** | Defines the port that we want to send the command. (For more information on the fPort see the AT Command Manual for RAK7431) | 
| **"data":"030001000901010300000002C40B"** | The data of the task in hexadecimal format. | 


**The content of the data that we will send is**:

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

- After publishing the data, we can see the downlink instruction and uplink answer from the RAK Serial Tool:

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
"comfirmed":true, 
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
"comfirmed":true, 
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
"comfirmed":true, 
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
"comfirmed":true, 
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
"comfirmed":true,
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
            <td>3600 seconds</td>
            <td>1 second</td>
            <td>0xE0</td>
        </tr>
</tbody>
</table>

### AT Command Manual

#### Overview

This document applies to Modbus RS485 to LoRaWAN® Bridge products. The supported product models include RAK7421 / RAK7431 / RAK7425.

##### AT Command Syntax

In general, the AT Command for the RAK7431 start with `AT` or `at` and ends with `<CR> <LF>`.
* At commands can be divided into:
    * **Reading commands** - read the configuration or status of the device, which is in the format of: `AT+<x>`
    * **Write commands** - write/modify the device configuration, which is in the format of: `AT+<x>=<m>:<n>`
    The command name and parameters are separated by "**=**". If there are multiple parameters, the parameters are separated by "**:**"
    * **Test commands** - is the test command executable, which is in the format of: `AT+<x>=?`

| Condition| Response|
|--------------------------------|------------------------------|
|Normal response with information|`<Response><CR><LF>OK<CR><LF>`|
|Normal response|`OK<CR><LF>`|
|Response when an error occurs|`ERROR <Error code>:<Error packet><CR><LF>`|

::: tip 📝 NOTE
AT commands are not case sensitive.
:::

##### USB Configuration Interface

The devices are equipped with a standard USB interface for configuring the AT commands. The serial parameters are as follows:

| Parameter  | Value |
|------------|-------|
|Baud rate   |115200 |
|Data bit    |  8    |
|Stop bit    |  1    |
|Verification|  No   |

##### Common Errors

| Error Code | Description |
|------------|-------|
|ERROR 1     |Unsupported command|
|ERROR 2     |Syntax error|
|ERROR 3     |Storage failure|
|ERROR 4     |System busy|
|ERROR 5     |Parameter format / number error|
|ERROR 6     |Insufficient resources|
|ERROR 7     |Parameter out of valid range|

#### LoRaWAN Commands

1. <b>AT+DEVEUI</b>

This command reads or modifies the LoRaWAN Device EUI. The command takes effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+DEVEUI`| `<dev_eui>` <br> `OK`|
|Write|`AT+DEVEUI=<device_eui>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+DEVEUI=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**dev_eui** |**Device EUI**:Hexadecimal characters, 16 bytes in length|

2. <b>AT+REGION</b>

This command reads or modifies the Working Frequency Region/Band of the device. It will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+REGION`| `<region>` <br> `OK`|
|Write|`AT+REGION=<region>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+REGION=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**region** |**Supports frequency bands:** EU433, CN470, CN470ALI, RU864, IN865, EU868, US915, AU915, KR920, AS923|

3. <b>AT+JOINMODE</b>

This command reads or modifies the LoRaWAN Activation Mode of the device. It will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+JOINMODE`| `<mode>` <br> `OK`|
|Write|`AT+JOINMODE=<mode>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+JOINMODE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**mode** |**Supported activation mode:** ABP or OTAA|

4.	<b>AT+PUBLIC</b>

This command reads or modifies the LoRaWAN Public Settings of the device. The working mode is set to Public by default (1 value of the parameter). The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+PUBLIC`| `<x>` <br> `OK`|
|Write|`AT+PUBLIC=<x>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+PUBLIC=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**x** |**Is the node working with public LoRaWAN network?**|
| 0 |Not working in Public mode|
| 1 |Working in Public mode|

5.	<b>AT+CLASS</b>

This command reads or modifies the LoRaWAN working Class of the device. Effective immediately after modification.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+CLASS`| `<class>` <br> `OK`|
|Write|`AT+CLASS=<class>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+CLASS=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**class** |**Supported device Classes:**|
| A |Class A|
| B |Class B|
| C |Class C|

6.	<b>AT+APPEUI</b>

The APPEUI parameter is valid when OTAA is activated. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+APPEUI`| `<app_eui>` <br> `OK`|
|Write|`AT+APPEUI=<app_eui>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+APPEUI=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**app_eui** |**Application EUI:** Hexadecimal character, 16 bytes in length|

7.	<b>AT+APPKEY</b>

The APPKEY parameter is valid in OTAA Activation Mode. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+APPKEY`| `<app_key>` <br> `OK`|
|Write|`AT+APPKEY=<app_key>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+APPKEY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**app_key** |**Application Key:** Hexadecimal character, 32 bytes in length|

8. <b>AT+DEVADDR</b>

The DEVADDR parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+DEVADDR`| `<dev_addr>` <br> `OK`|
|Write|`AT+DEVADDR=<dev_addr>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+DEVADDR=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**dev_addr** |**Device Address:** Hexadecimal character, 8 bytes in length|

9.	<b>AT+APPSKEY</b>

The APPSKEY parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+APPSKEY`| `<apps_key>` <br> `OK`|
|Write|`AT+APPSKEY=<apps_key>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+APPSKEY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**apps_key** |**Application Session Key:** Hexadecimal character, 32 bytes in length|

10.	<b>AT+NWKSKEY</b>

The NWKSKEY parameter is valid in ABP Activation Mode. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+NWKSKEY`| `<nwks_key>` <br> `OK`|
|Write|`AT+NWKSKEY=<nwkskey>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+NWKSKEY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**nwks_key** |**Network Session Key:** Hexadecimal character, 32 bytes in length|


11. <b>AT+ADR</b>

Turn on/off the LoRaWAN dynamic rate adjustment function of the device, which is “on” by default. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+ADR`| `<n>` <br> `OK`|
|Write|`AT+ADR=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+ADR=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Adaptive Data Rate**|
| 0 |Disable ADR|
| 1 |Enable ADR|

12.	 <b>AT+DATARATE</b>

Read/modify the LoRaWAN DataRate setting of the device, which is valid when the ADR function is turned off. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+DATARATE`| `<n>` <br> `OK`|
|Write|`AT+DATARATE=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+DATARATE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**LoRaWAN DataRate**|
| 0 ~ 7 |DataRate from 0 to 7s is possible.|

::: tip 📝 NOTE
The DataRate value and the default value are related to LoRaWAN regional parameters. Refer to [Appendix I: DataRate list of each region](/Product-Categories/WisNode/RAK7431/Datasheet/at-command.html#appendix-i-data-rate-of-each-region) in this document.
:::

13.	<b>AT+CONFIRM</b>

Turn on/off the LoRaWAN packet confirmation mechanic, which is set to be “on” by default. The modification will take effect immediately.

When the confirm function is enabled, the packets sent by the device will require the LoRa network server to send an ACK response. Unless a confirmation is received the device will resend the packet. For more information on the resending mechanic refer to “**14. AT+RETRY**”.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+CONFIRM`| `<n>` <br> `OK`|
|Write|`AT+CONFIRM=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+CONFIRM=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Type of uplink packets**|
| 0 |Unconfirmed uplink packets|
| 1 |Confirmed uplink packets|

14. <b>AT+RETRY</b>

Set the maximum number of retry attempts of the same LoRaWAN message, that will be valid when the confirm function is enabled. The default value is 3. The modification will take effect immediately.

When retry = n (n! = 1), if the device does not receive an ACK of a LoRaWAN message, it will resend the message until the ACK is received, or the retry counter expires.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+RETRY`| `<n>` <br> `OK`|
|Write|`AT+RETRY=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+RETRY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Max resend times**|
| 1 ~ 8 |The number of retries can be between 1 and 8|

15. <b>AT+CHANNEL</b>

When the LoRaWAN channel plan of the device is CN470 / US915 / AU915, it can be read/modified through this instruction. After execution of this command, all channels from “start ID” to “end ID” in the instruction parameters are turned on, and the other channels are turned off. The modification will take effect after restart.

When the device is working in one of the following bands this command can only be used for reading the parameters: EU433 / RU864 / IN865 / EU868 / KR920 / AS923.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read |`AT+CHANNEL`| `<id>:<freq>:<drmin>:<drmax>` <br>...<br> `OK`|
|Write<br>(Only valid when Region<br> is CN470 / US915 / AU915) |`AT+CHANNEL=<startid>:<endid>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+CHANNEL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**id** |Channel ID|
|**freq** |Center frequency of channel, unit: Hz|
|**drmin** |DataRate (Min)|
|**drmax** |DataRate (Max)|
|**startid** |Start channel ID|
|**endid** |Stop channel ID|

16. <b>AT+ADDCHANNEL</b>

Add a LoRaWAN channel.

This instruction is valid when the working frequency band of LoRaWAN is EU433 / RU864 / EU868 / KR920 / AS923. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+ADDCHANNEL=<freq>:<drmin>:<drmax>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+ADDCHANNEL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**freq** |Center frequency of channel, unit: Hz|
|**drmin** |DataRate (Min)|
|**drmax** |DataRate (Max)|

17. <b>AT+RMCHANNEL</b>

Delete a LoRaWAN channel.

This instruction is valid when the working frequency band is EU433 / RU864 / EU868 / KR920 / AS923. The modification takes effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+RMCHANNEL=<freq>:<drmin>:<drmax>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+RMCHANNEL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**freq** |Center frequency of channel, unit: Hz|
|**drmin** |DataRate (Min)|
|**drmax** |DataRate (Max)|

18. <b>AT+CHANMASK</b>

Read the currently configured LoRaWAN Channel Mask. It is determined by the currently open channels. This instruction is “read-only”.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+CHANMASK`| `<chanmsk>`<br>`OK`|
|Test |`AT+CHANMASK=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**chanmask** |**Channel mask:** Hexadecimal string, right to left corresponding channel ID from low to high|

19. <b>AT+TXPOWER</b>

The TXPOWER parameter is valid when the ADR function is turned off. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+TXPOWER`| `<txpwr>`<br>`OK`|
|Write|`AT+TXPOWER=<txpwr>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+TXPOWER=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**txpwr** |Transmit power (dBm, floating-point)<br>The value range is 0 ~ maxeirp, and the effective step size is 2dbm, that is, txpwr = maxeirp – 2 * n, and n is an integer greater than or equal to 0<br>The maxeirp is the Maximum EIRP (Equivalent Isotropic Radiated Power) defined for the specific band you are using in the LoRa Alliance documentation.|

20. <b>AT+PINGNB</b>

Set the PingSlot Number in each Beacon Period for Class B mode. The number of ping slots determines the period of the downlink packet of the device. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+PINGNB`| `<N>`<br>`OK`|
|Write|`AT+PINGNB=<N>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+PINGNB=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**N** |PingSlot Number in Beacon Period<br>1<br>2<br>4<br>8<br>16<br>32<br>64<br>128|

21. <b>AT+LPTP</b>

LoRa Private Transport Protocol (LPTP) is a RAK proprietary message splitting protocol, which can send data with a length exceeding the maximum permissible size, using multiple messages. As it is proprietary it only works with the RAK LoRa networks server built-into our commercial gateways. It is “Off” by default. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+LPTP`| `<x>`<br>`OK`|
|Write|`AT+LPTP=<x>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|
|Test |`AT+LPTP=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**x** |**LPTP status**|
| 0 |disabled|
| 1 |enabled|

#### Data Interface Commands

1.	<b>AT+BAUDRATE</b>

The command is used to read or modify the baud rate of the device's data serial port. The modification will take affect after restarting.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+BAUDRATE`| `<baudrate>`<br>`OK`|
|Write|`AT+BAUDRATE=<baudrate>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+BAUDRATE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**baudrate** |Baud rate of serial port data:<br>2400<br>4800<br>9600<br>14400<br>19200<br>38400<br>57600<br>115200|

2. <b>AT+DATABIT</b>

Read or modify the data bit of the serial data. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+BAUDRATE`| `<databit>`<br>`OK`|
|Write|`AT+BAUDRATE=<databit>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+BAUDRATE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**databit** |**Data bit of serial port data:**|
|7|7th bit|
|8|8th bit|

3. <b>AT+STOPBIT</b>

Read or modify the serial port data stop bit. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+STOPBIT`| `<stopbit>`<br>`OK`|
|Write|`Write	AT+STOPBIT=<stopbit>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+STOPBIT=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**stopbit** |**Serial stop bit:**|
| 1 |1bit|
|1.5|1.5bits|
| 2 |2bits|

4. <b>AT+PARITY</b>

Read or modify the parity check bit of the data. The modification will take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+PARITY`| `<parity>`<br>`OK`|
|Write|`AT+PARITY=<parity>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+PARITY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**parity** |**Parity check:**|
| NONE |No check|
| EVEN |Even parity check|
| ODD  |Odd parity check|

5. <b>AT+DTUMODE</b>

Read or modify the operating mode of the device’s data interface. The data interface supports two modes: P2P and MODBUS. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+DTUMODE`| `<mode>`<br>`OK`|
|Write|`AT+DTUMODE=<mode>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+DTUMODE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**mode** |**Operating mode:**|
| P2P |Point to point mode|
| MODBUS |Modbus mode|

6. <b>AT+MODBUSTIMEOUT</b>

Read or modify the Modbus instruction timeout of the device. It is valid when the data interface is in MODBUS Mode. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+MODBUSTIMEOUT`| `<n>`<br>`OK`|
|Write|`AT+MODBUSTIMEOUT=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+MODBUSTIMEOUT=?`|`OK`|


| Parameter | Information|
|------------|-------|
|n |Modbus timeout in ms|

7. <b>AT+TRANSPARENT</b>

When the serial data port of the device works in MODBUS mode, the data encapsulation format can be divided into two types: transparent transmission mode and non-transparent transmission mode.

In transparent mode, the Modbus execution instruction response data (data, received by the node) will be directly forwarded through LoRaWAN network.

In the non-transparent mode, the Modbus execution instruction response data (data, received by the node) will be encapsulated in the message header according to the Modbus protocol, and then transmitted to the server through LoRaWAN. Please refer to “**Appendix II: MODBUS Data Encapsulation Protocol**” for details.

Non-transparent mode is the default one. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+TRANSPARENT`| `<n>`<br>`OK`|
|Write|`AT+TRANSPARENT=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+TRANSPARENT=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Operating mode:**|
|0 |non-transparent mode|
|1 |transparent mode|

8. <b>AT+MODBUSRETRY</b>

When the device works in MODBUS mode, with this command the number of retries, when a MODBUS instruction does not get response, is specified. By default, there is no retransmission value added. The modification will take effect immediately.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+MODBUSRETRY`| `<n>`<br>`OK`|
|Write|`AT+MODBUSRETRY=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+MODBUSRETRY=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Number of retries:**|
|0 |No retry|
|1 ~ 8 |1 ~ 8 retries|

9. <b>AT+ENABLEPOLL</b>

When the device works in MODBUS mode, it supports the timed polling function.

This means that the device will perform a polling operation every given period (polling cycle). During polling, the device will send the pre-added MODBUS instructions in turn and forward the corresponding response data through the LoRaWAN network.

The device turns on timed polling by default. The modification shall take effect after restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+ENABLEPOLL`| `<n>`<br>`OK`|
|Write|`AT+ENABLEPOLL=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+ENABLEPOLL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Scheduled polling status:**|
|0 |Disabled|
|1 |Enabled|

10. <b>AT+POLLPERIOD</b>

This command sets/reads the scheduled polling cycle. This command only works if scheduled polling is enabled. The modification takes effect after the next polling cycle or a restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+POLLPERIOD`| `<n>`<br>`OK`|
|Write|`AT+POLLPERIOD=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+POLLPERIOD=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Polling cycle in seconds**|

11. <b>AT+ADDPOLL</b>

Add a polling instruction with this command.
Up to 32 polling instructions are supported. The modification takes effect after the next polling cycle or a restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+ADDPOLL=<n>:<xxxx>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+ADDPOLL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Polling instruction ID, value range 1 ~ 127**|
|xxxx|Polling instruction content, hexadecimal string, maximum instruction length 128 bytes|

12. <b>AT+RMPOLL</b>

Delete a polling instruction. The modification takes effect after the next polling cycle or a restart

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+RMPOLL=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+RMPOLL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |**Polling instruction ID, value range 1 ~ 127**|

13. <b>AT+POLLTASK</b>

Query the list of scheduled polling instructions.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+POLLTASK`| When it is successful:<br>`<n>:<xxxx>`<br>...<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+POLLTASK=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |Polling instruction ID, value range 1 ~ 127|
|xxxx|Instruction content, hexadecimal string|

14.	<b>AT+ADDSCHEDULETASK</b>

Schedule an instruction. The modification takes effect immediately after setting.
The time in the command is local time.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+ADDSCHEDULETASK=<id>:<type>:<w>:<h>:<m>:<s>:<data>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+ADDSCHEDULETASK =?`|`OK`|


| Parameter | Information|
|------------|-------|
|**id** |Task ID，value is： 1 ~ 127|
|**type**|the type of schedule task:<br>**WEEK** - once a week<br>**DAY** - once a day<br>**HOUR** - once an hour*|
|**w**|WEEK, only need add the value when the type = WEEK;<br>0 - For Sunday<br>1 ~ 6 For Monday ~ Saturday|
|**h**|Hour:  0 ~ 23|
|**m**|Minute： 0 ~ 59|
|**s**|Second： 0 ~ 59|

::: tip 📝 NOTE
*If selected type is HOUR, the parameter `<h>` is not used from the system. 
:::

15. <b>AT+RMSCHEDULETASK</b>

A command to delete a scheduled instruction. The modification takes effect immediately after setting.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+RMSCHEDULETASK=<n>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+RMSCHEDULETASK=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**n** |Task ID，value is: 1 ~ 127|

#### System Related Commands

1.	<b>AT+TIMEZONE</b>

With this command, the time zone of the device is set.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+TIMEZONE`|`<TZ>`<br>`OK`|
|Write|`AT+TIMEZONE=<TZ>`| When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<message>`|
|Test |`AT+TIMEZONE=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**TZ** |UTC time zone: -12 ~ 12|

2.	<b>AT+VERSION</b>

Read the firmware version of the device.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+VERSION`| When the modification is successful:<br>`<br><a>.<b>.<cccc>`<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|


| Parameter | Information|
|------------|-------|
|**a.b.cccc** |Firmware Version, for example “1.1.0050”|

3.	<b>AT+SYSLOGLVL</b>

Read or set the system log level.
The module turns off the system log output by default. The user can modify the log output level through this command. The modification takes effect immediately after setting.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+SYSLOGLVL`|`<TZ>`<br>`OK`|
|Write|`AT+SYSLOGLVL=<level>`| `OK`|
|Test |`AT+SYSLOGLVL=?`|`OK`|


| Parameter | Information|
|------------|-------|
|**level** |**Output log level**|
|0|does not output any logs|
|1 ~ 6|log with output level less than or equal to the value|

4. <b>AT+ECHO</b>

Turns local echo of the AT command-line interface on/off. Echo is turned off by default. It takes effect immediately after modification and is automatically turned off after a restart.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+ECHO=<n>`|When the modification is successful:<br>`OK`<br>When modification fails: <br>`ERROR <code>:<packet>`|

| Parameter | Information|
|------------|-------|
|**n**|**Local echo**|
|0|Disabled|
|1|Enabled|

5. <b>AT+BOOT</b>

The device supports switching to boot mode. In boot mode, the dedicated upgrade software can be used for firmware update.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+BOOT`|`<BOOT MODE>`|

6.	<b>AT+RESTART</b>
Reboot the device.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+RESTART`|`Null`|

7.	<b>AT+FACTORY</b>

The command restores the device to the factory settings. This operation will last for about 60s. Do not cut off the power supply of the device before it automatically restarts.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+FACTORY`|`Null`|

8.	<b>AT+SYSTIME</b>

Show the real running time.

| Operation | AT Command | Response |
|------------|-------| -------|
|Write|`AT+SYSTIME`|`<time>`<br>`OK`|

| Parameter | Information|
|------------|-------|
|**time**|Timestamp in UNIX format, in seconds|

9.	<b>AT+DATETIME</b>

Show the synchronized with the LoRaWAN Network Server time. Needs LoRaWAN1.0.3 specification support from the server side.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+DATETIME`|`<datetime>`<br>`OK`|

| Parameter | Information|
|------------|-------|
|**datetime**|Date / Time in YYYY/MM/DD hh:mm:ss|

10. <b>AT+SYSINFO</b>

This command gives the system information of the device.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+SYSINFO`|`<model>`<br>`<sn>`<br>`<version>`<br>`<vendor>`<br>`<copyright>`<br>`OK`|

| Parameter | Information|
|------------|-------|
|**model**|Model info|
|**sn**|Product SN info|
|**version**|Firmware version|
|**vendor**|Manufacturer info|
|**copyright**|Copyright info|

11. <b>AT+WAKEUPBYTE</b>

This command allows you to check or change the wake up byte.

| Operation | AT Command | Response |
|------------|-------| -------|
|Read|`AT+WAKEUPBYTE`|`<XX>`<br>`<OK>`|
|Write|`AT+WAKEUPBYTE=<XX>`|`<OK>`|

| Parameter | Information|
|------------|-------|
|**XX**|Wake up byte |

::: tip 📝 NOTE
Default value is 0xAA.
:::

#### Event Notification

When the working state of the module changes, an event notification will be output through the AT command-line interface.
The event notification format is:

```sh
EVENT:[EVENT_ID]:[EVENT_MSG]:<ADDITIONAL_INFO>
```

| Event | Description|
|------------|-------|
|**EVENT_ID**| Event ID |
|**EVENT_MSG**| Event name |
|**ADDITIONAL_INFO**| Additional information - Optional<br><br>Some events need to output additional information. Multiple additional information sets are separated by ":"|

The module supports the following event notifications:

| ID | EVENT_MSG | Description |
|------------|-------| -------|
|0|STARTUP|System startup complete|
|1|JOIN_NETWORK|Successful join to the LoRaWAN network|
|2|LEAVE_NETWORK|Unsuccessful join to the LoRaWAN network|
|5|SYSTEM_WAKEUP|System wakeup|
|6|RESTART|System restart|

1. <b>STARTUP Event</b> - Appears after system initialization.
    * **Message format**: 

```sh
EVENT:0:STARTUP
No additional information.
```

2. <b>JOIN_NETWORK Event</b> - LoRaWAN network activation successful. It appears after OTAA join successful. 
    * **Message format**: 

```sh
EVENT:1:JOIN_NETWORK
No additional information.
```

3. <b>LORA_LEAVE_NETWORK Event</b> - In OTAA activation mode, if eight consecutive uplink confirmed packets do not receive a response, the LORA_LEAVE_NETWORK event will be triggered. After the LORA_LEAVE_NETWORK event is triggered, the module will stop sending LoRaWAN message and start OTAA activation again.
    * **Message format**: 

```sh
EVENT:2:LEAVE_NETWORK
No additional information.
```

4. <b>SYSTEM_WAKEUP Event</b> - A module in a low-power state can be awaken by receiving input from the AT command line interface. After wakeup, the module will no longer enter low-power mode. If you want the module to enter low power mode again, use the command: `AT+SLEEP\r\n`
    * **Message format**: 

```sh
EVENT:5:SYSTEM_WAKEUP
```

5.	<b>RESTART Event</b> - Triggered before the module restarts.
    * **Message format**:

```sh
EVENT:6:RESTART
```

6. <b>Low Power Operation and Wakeup</b> -The module supports low power mode. When the device is working in Class A, it automatically enters into low power operation mode. The module can be woken up at any time, when one of the following events occurs:
    * **Wakeup on system interrupt** - When module needs to perform tasks such as sending/receiving, it will wake up automatically. Automatically returns to low power mode after the task is completed.
    * **Wakeup via the AT command-line interface** - Any instruction sent through the AT command line interface can wake up the module. After wakeup, the SYSTEM_WAKEUP event is triggered, and the low power mode is no longer entered so that the user can use the AT command line to modify the module configuration info. If you want the module to enter low power mode again, use the command: `AT+SLEEP\r\n`


####	LoRaWAN FPort Definition

##### Uplink Message FPort Definition

|FPort|Message Type|Note|
|-----|------------|----|
|1 ~ 128|RS485/232 Scheduled task/poll uplink message|Fport is consistent scheduled task/poll ID|
|129|Non-transparent mode, reply of remote instruction message||
|130|In transparent transmission mode, RS485/232 data upload message||
|131 ~ 223|Reserved|not used|

##### Downlink Message FPort Definition

|FPort|Message Type|Note|
|-----|------------|----|
|1 ~ 128|Reserved|not used|
|129|Non-transparent mode, remote instruction||
|130|RS485/232 downlink data sent remotely in transparent transmission mode||
|131 ~ 119|Reserved|not used|
|200|Remote restart command||
|201|Remote on/off ADR command||
|202|Remote set working rate command|Valid when ADR is closed|
|203|Remote set transmit power command|Valid when ADR is closed|
|204|Remote on/off message acknowledgment||
|205|Remote settings retransmission at this time|Valid when the confirmed message mechanism is on|

#### Appendix I: Data Rate of Each Region

##### EU433/RU864/EU868/AS923

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |LoRa: SF7 / 250kHz |                 11000              |
|   7     |FSK: 50kbps        |                 50000              |
| 8 ~ 15  |RFU                |                                    |

##### CN470/KR920 

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
| 6 ~ 15  |        RFU        |                                    |

##### US915 

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF10 / 125kHz|                 980                |
|   1     |LoRa: SF9 / 125kHz |                 1760               |
|   2     |LoRa: SF8 / 125kHz |                 3125               |
|   3     |LoRa: SF7 / 125kHz |                 5470               |
|   4     |LoRa: SF8 / 500kHz |                 12500              |
| 5 ~ 7   |        RFU        |                                    |
|   8     |LoRa: SF12/500kHz  |                 980                |
|   9     |LoRa: SF11/500kHz  |                 1760               |
|   10    |LoRa: SF10/500kHz  |                 3900               |
|   11    |LoRa: SF9/500kHz   |                 7000               |
|   12    |LoRa: SF8/500kHz   |                 12500              |
|   13    |LoRa: SF7/500kHz   |                 21900              |
| 14 ~ 15 |        RFU        |                                    |

##### AU915 

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |LoRa: SF8/500kHz   |                 12500              |
|   7     |        RFU        |                 RFU                |
|   8     |LoRa: SF12/500kHz  |                 980                |
|   9     |LoRa: SF11/500kHz  |                 1760               |
|   10    |LoRa: SF10/500kHz  |                 3900               |
|   11    |LoRa: SF9/500kHz   |                 7000               |
|   12    |LoRa: SF8/500kHz   |                 12500              |

##### IN865

|Data Rate|   Configuration   |Indicative physical bit rate [bit/s]|
|---------|-------------------|------------------------------------|
|   0     |LoRa: SF12 / 125kHz|                 250                |
|   1     |LoRa: SF11 / 125kHz|                 440                |
|   2     |LoRa: SF10 / 125kHz|                 980                |
|   3     |LoRa: SF9 / 125kHz |                 1760               |
|   4     |LoRa: SF8 / 125kHz |                 3125               |
|   5     |LoRa: SF7 / 125kHz |                 5470               |
|   6     |RFU                |                 RFU                |
|   7     |FSK: 50kbps        |                 50000              |
| 8 ~ 15  |RFU                |                 RFU                |

#### Appendix II: Modbus Data Encapsulation Protocol

This section describes the definition of the Modbus message encapsulation format.

|Message Command|Message Sequence Number|Data Length| Data |
|---------------|-----------------------|-----------|------|
|   DTU_CMD     |       MSER            | MDATA_LEN |MDATA |
|   1Byte       |       2Byte           | 2Byte     |nByte |

* **DTU_CMD**: Message Command (Chapter 9.1)
* **MSER**: Message Sequence Number
* **DTU report message actively** - DTU incremental cycle count.
* **Platform query message** - consistent with the sequence number of the message issued by the platform.

##### Message Command DTU_CMD Definition

<table>
    <thead>
        <tr>
            <th>Data Bits</th>
            <th>BIT7</th>
            <th>BIT6</th>
            <th>BIT5</th>
            <th>BIT4</th>
            <th>BIT3</th>
            <th>BIT2</th>
            <th>BIT1</th>
            <th>BIT0</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Definition</td>
            <td>DIR</td>
            <td>STATUS</td>
            <td>RESERVED</td>
            <td colspan=5>Message TYPE</td>
        </tr>
        <tr>
            <td>Description</td>
            <td>0: Downlink<br>1: Uplink</td>
            <td>0: Success<br>1: Fail</td>
            <td>0: Reserved</td>
            <td colspan=5>0x00: Reserved<br>0x01: Scheduled polling task data<br>0x02: Transparent instruction / data<br>0x03: Add scheduled polling task list<br>0x04: Remove scheduled polling task list<br>0x05: Read scheduled polling task list<br>0x06: Read LoRa configuration<br>0x07: Set LoRa configuration<br>0x08: Read DTU configuration<br>0x09: Set DTU configuration<br>0x1D: Initialize LoRa configuration<br>0x1E: Initialize DTU configuration<br>0x1F: System restart</td>
        </tr>
    </tbody>
</table>

::: tip 📝 NOTE
* **Bit7 direction**: The message sent by the platform to DTU is a downlink message. This is 0. The message sent by DTU to the platform is an uplink message. This is 1.
* **Bit6 status**: The result of DTU executing instruction/task - 0 for success and 1 for failure.
:::

##### Message Type Definition

1.	<b>Data for Scheduled Polling Task</b>

The scheduled polling task list is responsible for sending the read data when the scheduled task list is executed by the platform. This message needs to be sent whether the execution is successful or not. When the execution fails, the status flag position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the status flag position is 0 in the DTU_CMD command.

* Execution success message format:

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
            <td rowspan=2>0x81</td>
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

* Execution failure message format:

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
            <td rowspan=2>0xC1</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **TASK_ID**: Task list ID.
* **DATA**: Data. When the scheduled task list fails to execute, the data length is 0.
:::

2. <b>Transparent Instruction / Data Message</b>

The transparent transmission instructions and the execution results of the instructions issued by the platform are transmitted through this message.

This message needs to be sent whether or not the instruction is executed successfully. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message:

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
            <td rowspan=2>0x02</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>nByte</td>
        </tr>
</tbody>
</table>

* Uplink data message format when execution successful:

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
            <td rowspan=2>0x82</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>nByte</td>
        </tr>
</tbody>
</table>

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC2</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **DATA**: Instruction content / data
* **ERROR_CODE**: Error code
:::

3. <b>Add Scheduled Polling Task List message</b>

DTU timing task list and execution result are added to the platform and transmitted through this message

This message needs to be sent to the platform whether or not the scheduled task list is added successfully. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message:

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

* Uplink data message format when execution successful:

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

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC3</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **TASK_ID**: Task list id
* **DATA**: Task list content
* **ERROR_CODE**: Error code
:::

4. <b>Remove Polling Task List</b>

The platform removes the DTU timing task list and the execution results are transmitted through this message.

The message needs to be sent to the platform whether or not the scheduled task list is successfully removed. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

::: tip 📝 NOTE
If the specified task list ID is not found in the DTU, it will be regarded as successful execution.
:::

* Format of downlink instruction message:

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

* Message format when execution successful:

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


* Message format when execution failed:

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
            <td rowspan=2>0xC4</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **TASK_ID**: Task list id
* **ERROR_CODE**: Error code
:::

5. <b>Read the Polling Task List</b>

The platform reads the DTU timing task list and transmits the execution result through this message.

The message needs to be sent to the platform whether or not the scheduled task list is read successfully. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message:

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

* Uplink data message format when execution successful:

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

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC5</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **TASK_ID**: Task list id
* **DATA**: Task list content
* **ERROR_CODE**: Error code
:::

6. <b>Add Scheduled Task Message</b>

The platform adds DTU scheduled task message and transmits the result through this message. 

This message needs to be sent to the platform no matter whether the scheduled task is added successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* The format of the downlink instruction message: 

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=7>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x0A</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>SCH_TYPE</td>
            <td>W</td>
            <td>H</td>
            <td>M</td>
            <td>S</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>nByte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>nByte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution successful:

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
            <td rowspan=2>0x8A</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution failed:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=2>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0xCA</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>


::: tip 📝 NOTE
* **TASK_ID**：Task ID
* **SCH_TYPE**: Type of scheduled task
    * 0x00 execute once per hour
    * 0x01 execute once per day
    * 0x02 execute once per week
* **W**: Which day of this week; 0 For Sunday, 1 ~ 6 For Monday ~ Saturday
* **H**: Hour
* **M**: Minute
* **S**: Second
* **DATA**：The data of the task
* **ERROR_CODE**: error code
:::

7. <b>Remove Scheduled Task Message</b>

The platform removes DTU scheduled task message and transmits the result through this message. 

This message needs to be sent to the platform no matter whether the scheduled task is removed successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

::: tip 📝 NOTE
When the specified task list ID is not found in DTU, it is considered that the execution is successful.
:::

* The format of the downlink instruction message:

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
            <td rowspan=2>0x0B</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution successful:

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
            <td rowspan=2>0x8B</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution failed:

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
            <td rowspan=2>0xCB</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>


::: tip 📝 NOTE
* **TASK_ID**：Task ID
* **ERROR_CODE**: error code
:::

8. <b>Read Scheduled Task Message</b>

The platform reads DTU scheduled task message and transmits the result through this message. 

This message needs to be sent to the platform no matter whether the scheduled task is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* The format of the downlink instruction message:

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
            <td rowspan=2>0x0C</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution successful:

<table style="text-align: center">
<thead>
  <tr>
    <th>DTU_CMD</th>
    <th>MSER</th>
    <th>MDATA_LEN</th>
    <th colspan=7>MDATA</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td rowspan=2>0x8C</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>SCH_TYPE</td>
            <td>W</td>
            <td>H</td>
            <td>M</td>
            <td>S</td>
            <td>DATA</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>nByte</td>
        </tr>
</tbody>
</table>

* Uplink data message when execution failed:

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
            <td rowspan=2>0xCC</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>TASK_ID</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **TASK_ID**：task ID
* **SCH_TYPE**: type of scheduled task
	* 0x00 execute once per hour
	*	0x01 execute once per day
  *  0x02 execute once per week
* **W**: which day of this week; 0 For Sunday, 1 ~ 6 For Monday ~ Saturday
* **H**: Hour
* **M**: Minute
* **S**: Second
* **DATA**：The data of the task
:::

9. <b>Read LoRa Configuration</b>

The platform reads the LoRa configuration and transmits the result through this message. Platform read message fdata is empty.

This message needs to be sent to the platform whether the LoRa configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message:

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x06  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution successful:

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
            <td>DATARATE</td>
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

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC6</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **DATARATE**: Rate (0 – 5)
* **TXPOWER**: Transmit power (0 - 20)
* **CONFIRM**: Whether to turn on ack. 0 - off, 1 - on
* **RETRY**: Maximum retransmission times when ACK is on (0 ~ 15)
* **ADR**: Whether to turn on dynamic rate adjustment (ADR) 0 - off, 1 - on
* **DUTYCYCLE**: Is the duty cycle limit on 0 - off, 1 – on
:::

10. <b>Set LoRa Configuration</b>

The platform reads the configuration and transmits the result through this message. Platform read message fdata is empty.

This message needs to be sent to the platform whether the LoRa configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message:

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
            <td>DATARATE</td>
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

* Uplink data message format when execution successful:

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x87  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC7</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

::: tip 📝 NOTE
* **DATARATE**: Rate (0 – 5)
* **TXPOWER**: Transmit power (0 - 20)
* **CONFIRM**: Whether to turn on ACK, 0 - off, 1 - on
* **RETRY**: Maximum retransmission times when ACK is on (0 ~ 15)
* **ADR_ENABLE**: Whether to turn on dynamic rate adjustment (ADR) 0 - off, 1 - on
* **DUTYCYCLE_ENABLE**: Is the duty cycle limit on 0-off, 1-on
:::

11. <b>Read DTU Configuration</b>

The DTU configuration and results read by the platform are transmitted through this message. Platform read message fdata is empty.

This message needs to be sent to the platform whether the DTU configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message: 

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x08  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution successful:

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
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message format when execution failed:

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
            <td rowspan=2>0xC8</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>


::: tip 📝 NOTE
* **POLL ENABLE**: Enables scheduled polling, 0 - off, 1 - on
* **POLL PERIOD**: Polling period, in seconds
* **BUS TIMEOUT**: Bus timeout. The unit is seconds.
* **RETRY**: Number of retries after bus timeout. 0 - turn off retry function
* **RS485**: 485 bus parameters
:::

<table style="text-align: center">
<thead>
  <tr>
    <th rowspan=2>Definition</th>
    <th>BIT7</th>
    <th>BIT6</th>
    <th>BIT5</th>
    <th>BIT4</th>
    <th>BIT3</th>
    <th>BIT2</th>
    <th>BIT1</th>
    <th>BIT0</th>
  </tr>
  <tr>
    <th colspan=3>Baud rate</th>
    <th>Data Bit</th>
    <th colspan=2>Stop Bit</th>
    <th colspan=2>Check Code</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>Details</td>
            <td colspan=3>0: 2400<br>1: 4800<br>2: 9600<br>3: 14400<br>4: 19200<br>5: 38400<br>6: 57600<br>7: 115200</td>
            <td>0: 8bit<br>1: 9bit</td>
            <td colspan=2>0: 1bit<br>1: 1.5bit<br>2: 2bit</td>
            <td colspan=2>0: NONE<br>1: EVEN<br>2: ODD</td>
        </tr>
</tbody>
</table>

12. <b>Set DTU Configuration</b>

DTU configuration and results of platform settings are transmitted through this message. Set the result message fdata to null.

This message needs to be sent to the platform whether the DTU configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message: 

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
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* Uplink data message format when execution successful:

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x89  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution failed: 

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
            <td rowspan=2>0xC9</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>


::: tip 📝 NOTE
* **POLL ENABLE**: Enables scheduled polling, 0 - off, 1 - on
* **POLL PERIOD**: Polling period, in seconds
* **BUS TIMEOUT**: Bus timeout. The unit is seconds.
* **RETRY**: Number of retries after bus timeout. 0 - turn off retry function
* **RS485**: 485 bus parameters
:::

<table style="text-align: center">
<thead>
  <tr>
    <th rowspan=2>Definition</th>
    <th>BIT7</th>
    <th>BIT6</th>
    <th>BIT5</th>
    <th>BIT4</th>
    <th>BIT3</th>
    <th>BIT2</th>
    <th>BIT1</th>
    <th>BIT0</th>
  </tr>
  <tr>
    <th colspan=3>Baud rate</th>
    <th>Data Bit</th>
    <th colspan=2>Stop Bit</th>
    <th colspan=2>Check Code</th>
  </tr>
</thead>
<tbody>
        <tr>
            <td>Details</td>
            <td colspan=3>0: 2400<br>1: 4800<br>2: 9600<br>3: 14400<br>4: 19200<br>5: 38400<br>6: 57600<br>7: 115200</td>
            <td>0: 7bit<br>1: 8bit</td>
            <td colspan=2>0: 1bit<br>1: 1.5bit<br>2: 2bit</td>
            <td colspan=2>0: NONE<br>1: EVEN<br>2: ODD</td>
        </tr>
</tbody>
</table>

13. <b>Initialize LoRa Configuration</b>

LoRa configuration and results of platform initial call are transmitted through this message. The message fdata is empty.

It needs to be sent to the platform whether the DTU configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message: 

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x1D  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution successful:

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x9D  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution failed: 

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
            <td rowspan=2>0xDD</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* The initial value of LoRa configuration:

<table style="text-align: center">
<tbody>
        <tr>
            <td>DATARATE</td>
            <td>0 – DR_0</td>
        </tr>
        <tr>
            <td>TXPOWER</td>
            <td>19 – 19dBm</td>
        </tr>
        <tr>
            <td>CONFIRM</td>
            <td>1 – open</td>
        </tr>
        <tr>
            <td>RETRY</td>
            <td>3 – retransmission 3 times</td>
        </tr>
        <tr>
            <td>ADR_ENABLE</td>
            <td>1 – open</td>
        </tr>
        <tr>
            <td>DUTYCYCLE_ENABLE</td>
            <td>0 – close</td>
        </tr>
</tbody>
</table>

14. <b>Initialize DTU Configuration</b>

LoRa configuration and results of platform initial call are transmitted through this message. The message data is empty.

It needs to be sent to the platform whether the DTU configuration is read successfully or not. When the execution fails, the STATUS bit position in the DTU_CMD command is 1, and the data length is 0. When the execution is successful, the STATUS flag position in the DTU_CMD command is 0.

* Format of downlink instruction message: 

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x1E  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution successful:

|DTU_CMD| MSER |MDATA_LEN|MDATA|
|-------|------|---------|-----|
| 0x9E  |2Byte |  2Byte  |0Byte|

* Uplink data message format when execution failed: 

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
            <td rowspan=2>0xDE</td>
            <td rowspan=2>2Byte</td>
            <td rowspan=2>2Byte</td>
            <td>ERROR_CODE</td>
        </tr>
        <tr>
            <td>1Byte</td>
        </tr>
</tbody>
</table>

* The initial value of DTU:

<table style="text-align: center">
<tbody>
        <tr>
            <td>POLL_ENABLE</td>
            <td colspan=2>1（opened）</td>
        </tr>
        <tr>
            <td>POLL_PERIOD</td>
            <td colspan=2>3600 （seconds）</td>
        </tr>
        <tr>
            <td>BUS TIMEOUT</td>
            <td colspan=2>1000 （milliseconds）</td>
        </tr>
        <tr>
            <td>RS485</td>
            <td>0xE0</td>
            <td>Baud rate: 115200<br>Data bits: 8<br>Stop bit: 1<br>Check code: NONE</td>
        </tr>
</tbody>
</table>

