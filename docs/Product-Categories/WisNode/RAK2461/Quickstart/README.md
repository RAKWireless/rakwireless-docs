---
rak_desc: Contains instructions and tutorials for installing and deploying your <board/module name>. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak2461-n/datasheet/RAK2461.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2461
  - quickstart
  - wisnode
---

# RAK2461 Quick Start Guide

## Prerequisite

Before going through each and every step in the installation guide of the WisNode Bridge IO Lite, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. <a href="https://store.rakwireless.com/products/rak2461-wisnode-bridge-io-lite?utm_source=rak2461&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">RAK2461 WisNode Bridge IO Lite</a>
2. USB configuration cable
3. Gateway in range, for Testing
4. A Windows/macOS/Linux Computer

#### Software Tools

IO.Box Desktop is a software application that will allow you to configure the devices from the RAK24XX series. You can download the application from here: 

- <a href="https://downloads.rakwireless.com/#WisIO/" target="_blank">Windows</a>
- <a href="https://downloads.rakwireless.com/#WisIO/" target="_blank">Linux</a>
- <a href="https://downloads.rakwireless.com/#WisIO/" target="_blank">Mac</a>

#### Package Inclusion

- One (1) RAK2461 WisNode Bridge IO Lite
- One (1) Mounting Kit
- One (1) Screw Kit
- One (1) LoRa Antenna
- One (1) Power Adapter
- One (1) USB Cable (Type C to Type A)
- One (1) 4-Pin Terminal Block 
- Two (2) 8-Pin Terminal Block

## Product Configuration

### Typical Network Application

RAK2461 WisNode Bridge IO Lite provides different Digital Inputs, Outputs (Relay), and RS485 communication. It can convert the data of the connected devices into LoRaWAN that can be sent to the cloud via a standard gateway. Cloud servers can also actively send data to RS485 terminals and control the DI/DO transmission to achieve two-way data transmission. Using RAK2461, what used to be a costly and time-consuming cable line network deployment can be transformed into a rapid and cost-efficient wireless network deployment.

An example would be using the <a href="https://store.rakwireless.com/products/rak7268-8-channel-indoor-lorawan-gateway?m=3&h=wisgate-edge&variant=42316463210694" target="_blank">RAK7268V2 WisGate Edge Lite 2</a> LoRaWAN gateway coupled with the RAK WisDM cloud management platform, to realize an end-to-end industrial field data acquisition and control system. Using the built-in LoRa Server, which comes standard with any RAK LoRaWAN gateway, one could seamlessly achieve transmission of the end device data to any application server. Furthermore, the MQTT integration allows for high security and efficiency.

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/typical-application.png"
  width="100%"
  caption="RAK2461 WisNode Bridge IO Lite network structure"
/>

### Connect the RAK2461 to the Sensor

#### Power Interface Configuration

The RAK2461 device can be powered either by:

- 9-24&nbsp;V<sub>DC</sub> input
- USB type-C

The USB type-C port of the device can be used for configuration. Powering the device from the type-C port will not provide power to the sensor but only to the device itself. To power the device and sensor, you should use the 9-24&nbsp;V<sub>DC</sub> input of the RAK2461.

The RS485 serial interface supports up to 32 RS485 devices. The Vout pin can supply the external power to the RS485 sensors connected to RAK2561.

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/device-with-power-supply.png"
  width="80%"
  caption="Power interface connection"
/>

#### Data Interface Connection

For this example, an RS-FSXCS-N01-3 Ultrasonic Weather Station is used. Here are the basic communication parameters of the sensor:

| Parameter      | Definition                                   |
| -------------- | -------------------------------------------- |
| Format         | 8-bit binary                                 |
| Data bit       | 8-bit                                        |
| Parity         | No                                           |
| Stop bit       | 1                                            |
| Error checking | CRC                                          |
| Baud rate      | Supports: 2400, 4800, 9600 (default is 4800) |

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/device-with-data-interface.png"
  width="80%"
  caption="Data interface connection"
/>

::: tip 📝 NOTE
For connecting to other devices, read their specific documentation carefully and connect accordingly.
:::
::: tip 📝 NOTE
For a demonstration, the RAK2461 Bridge Lite shall be connected to an RAKwireless gateway. For the gateway, the built-in LNS will be used. Listed below are the requisites for this section.

- <a href="https://downloads.rakwireless.com/#WisIO/" target="_blank">IOBox Desktop</a>
- <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview" target="_blank">WisGateOS 2 User Manual</a> - a guide on how to configure the RAK7268 WisGate Edge Lite 2 V2
- <a href="https://www.switchdoc.com/wp-content/uploads/2023/02/RS-FSXCS-N01-3-Manual-for-Ultrasonic-Integrated-Weather-Station.pdf" target="_blank">RS-FSXCS-N01-3 Manual</a> - guide for the Ultrasonic Integrated Weather Station
:::

#### Gateway Configuration

##### Set-up the Built-in Network Server

1. Start by accessing the gateway. You can see how to do it on the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview" target="_blank">WisGateOS V2 user manual</a>.

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/wisgateos-v2-login-page.png"
  width="100%"
  caption="WisGateOS2 login page"
/>

2. Once logged in, head to the **LoRa** menu.

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/lora-page.png"
  width="100%"
  caption="LoRa page"
/>

1. By default, the gateway works as a Built-In Network Server. If that is not the case, check the <a href="https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#lora" target="_blank">Built-in Network Server Mode Settings</a> on the WisGateOS V2 User manual to switch the mode.

##### Adding Application

1. Once the gateway is in Built-in network server mode, head to the **Applications** tab.

<rk-img
  src="/assets/images/wisnode/rak2461-n/quickstart/application-page.png"
  width="100%"
  caption="Create Application in the Built-In Network Server"
/>

2. Click the **Add application** button or **add one now** link to add a new application. On the new page, fill in the following information:

- **Application name** - type a name for the application.
- **Application description** - optionally you can write a description of the application.
- **Application Type** - from the drop-down menu select the type of application.
- **Unified Application key** - all devices will use the same application key. Selecting this option pops up an **Application Key** field. You can type your application key there or use the **Autogenerate** button to generate one.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/7.unified-application-key.png"
width="45%"
caption="Unified application key"
/>

The **Auto Add Device** switch activates the **Application EUI** field. The device will be automatically added to the application after the application EUI and key verification.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/8.auto-add-device.png"
width="45%"
caption="Auto add device"
/>

- **Separate Application keys** – each device will have its own application key. The key is added when registering the device.
- **Payload type** - from the drop-down, select **CayenneLPP** payload type and turn on the **Only forward data object** feature.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/9.adding-application.png"
width="100%"
caption="Adding application"
/>

3. Once set, click **Save application** to add the application.
4. After the application is added, head to the **End devices** tab. The devices should automatically register upon join request if you are using the Auto Add Device feature.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/10.successfully-added-end-device.png"
width="100%"
caption="Successfully added end device"
/>

If that’s not the case, click the **Add end device** button. On the **End device information** page fill in the following information:

- **Activation Mode** - choose the activation mode of your device:
  - **OTAA**
  - **ABP** - This mode pops up two additional fields:
    - **Application Session Key**
    - **Network Session Key**

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/11.adding-abp-device.png"
width="40%"
caption="Adding ABP device"
/>

- **End device (group) name** – the name of the device.
- **End device description (optional)** – optionally, you can add a description for the device.
- **Class** – the class of the device.
- **Frame Counter width** – the width of the frame counter. Leave it as default.
- **LoRaWAN MAC Version** – the LoRaWAN MAC version. V1.0.2 pops up a **LoRaWAN Regional Parameters reversion** field where you need to select the reversion of the device.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/12.successfully-created-application.png"
width="100%"
caption="Successfully created application"
/>

##### Adding the Device

1. Once everything is set, click **Add end devices** to go to the page and add the device.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/13.adding-end-device.png"
width="100%"
caption="Adding end device"
/>

2. On the **Adding end devices** page, type the device EUI at the **End Device EUI (main)** and click **Add to “End Devices list”**.
   - If the EUI is correct, the device will show in the **End devices list**.
   - If the EUI is not correct, the devices will show in the **End devices with an error**.
3. Once the device is added to the **End devices list** click **Add end devices**. Confirm you are adding the device.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/14.confirmation-message-for-adding-a-device.png"
width="40%"
caption="Confirmation message for adding a device"
/>

### RAK2461 Configuration

#### Connect the rak2461 to Your Network

1. Download and open the IO.Box application.
2. Connect the rak2461 to a computer using the USB type-C cable. Note that this will work for the LoRaWAN configuration, but when configuring the sensor you would need to connect the 9-24&nbsp;V<sub>DC</sub> power supply in order to provide power to the sensor itself. Make sure that the USB type-C cable that you are using supports data transfer and no other serial software is connected to the COM port that RAK2461 uses.
3. Click **Connect Device** in the IO.Box console.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/iobox-get-started.png"
width="80%"
caption="IOBox get started"
/>

If an error occurs that shows no device detected, here are some possible causes for that and how to fix it:

- Double-check the quality of the USB cable and if the correct COM port is used.
- Check if other terminal software is active and still connected to the RAK2461.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/iobox-error.png"
width="80%"
caption="No device error"
/>

4. On the IO.Box dashboard screen, you can see information about the devices connected to the PC in the form of a list of connected devices with device models and EUIs. Choose the device that you wish to configure via the **Connect** button next to it.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/list-of-connected-device.png"
width="80%"
caption="List of connected devices"
/>

5. On the main menu to the left, choose **LoRaWAN** to configure the LoRaWAN settings as needed. Do not forget to click **Save** below the changes.

- **Device EUI** - This is the unique identifier provided by RAKwireless.
- **Region** - The LoRaWAN region/band.
- **Class** - The LoRaWAN class (A,B or C).
- **Join Mode** - Choose between OTAA and ABP according to LoRaWAN protocol.
- **Application EUI** - Enter the unique identifier assigned by the application server.
- **Application Key** - Enter the unique secure key assigned by the application server.
- **Confirm Mode** - Activate to receive confirmation messages from the network server for each uplink.
- **ADR** - Enable Adaptive Data Rate allowing the network server to control the data rate for your device.
- **DataRate** - Manually set the data transmission rate. Lower rates extend coverage but increase transmission time and power usage. Choose based on the distance and signal quality to the gateway.
- **TX Power Level** - Adjust the transmission power level. The lower the number the higher the power. 0 is the maximum allowed in the selected region and each incrementation of 1 to the number reduces the power by 2 dBm.
- **Data Report Interval** - Set up the global data report period of the device. Range: 60–86400 in seconds.
- **LoRaWAN Status** - Indicates the activity of the device in the LoRaWAN network.
- To check the previously configured Application EUI and Key, run the commands:

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/lorawan-tab.png"
width="80%"
caption="LoRaWAN tab"
/>

6. Make sure you've added the RAK2461 WisNode Bridge IO Lite to the LoRaWAN Network Server of choice (Built-in LNS in this example).
7. After the device has successfully joined the LNS, you will see the LoRaWAN status toggle as activated. You might need to refresh the page.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/lorawan-status.png"
width="80%"
caption="LoRaWAN status"
/>


### RS485 Configuration

#### RS485 Interface Configuration

Go to the **RS485** tab from the main menu and configure the interface according to the sensor/device you are connecting to. Do not forget to save your changes. In this tab you will find:

- **Baudrate** - Select the communication speed for the RS485 interface, measured in bits per second. Choose a rate that matches your device's requirements.
- **Databits** - Select the number of data bits for each character in the RS485 communication. Typically, options include 7 or 8 bits, depending on your device's protocol requirements.
- **Stopbits** - Select the number of stop bits used in the RS485 communication. Common options are 1 or 2, depending on your device's data transmission protocol.
- **Parity** - Select the parity setting for the RS485 interface. Options typically include **None** for no parity, **Even** for even parity, or **Odd** for odd parity. Choose based on your device's communication requirements.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/interface-configuration.png"
width="80%"
caption="RS485 interface configuration"
/>


#### Add Modbus Poll Task

In the **Modbus Poll Task** menu click **+ Add** for a new poll. You will see the **Polling Task parameters** that need to be configured.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/add-poll-task.png"
width="80%"
caption="Add poll task"
/>

- **Task ID** - Enter the identifier for the polling task. This ID is included in the device’s uplink data to indicate the task.
- **Device Address** - The Modbus slave address in decimal format. Range: 1-254.
- **Function Code** - The Modbus function code defines this poll's operation.
- **Register Addr** - The address of the register that you wish to access in hexadecimal format.
- **Quantity** - The number of register addresses that you want to access.
- **Data Type** - The data type of the Modbus response.
- **Scale** - To adjust the raw data from the Modbus response to the desired units. For example, to convert kilograms to grams set the scale to X1000.
- **Remark** - Length: 15 characters.
- **Enable** - Enable or disable this polling task.
- **Sensor Type** - Choose the unit of the data obtained from the Modbus slave device. If no exact match is available, select **Generic xxxx** as a default option.
- **Modbus Request** - Displays the Modbus command generated based on the settings you've selected above. This command will be used to communicate with the Modbus device.
- **Modbus Response** - Displays the response received from the Modbus slave device.
- **Value** - This shows the data extracted from the Modbus Response is parsed according to the above configuration.
- **Uplink Data** - Displays the data payload format that will be sent to the server, based on the configuration above.
- **Check** - Modbus CRC check. Before saving the task click **Check** for automatic validation.
- **Save** - Save the polling task.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/polling-task-parameters.png"
width="80%"
caption="Polling task parameters"
/>


#### Creating a Raw Data in Binary Poll Task

Fill in the **register address** and other relevant fields according to the specific sensor's datasheet, then after clicking the **Check** button, you will see the Reply Frame on the IO.Box.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/sensor-data.png"
width="100%"
caption="Fill-in sensor specific data"
/>


After saving the polling task, wait awhile and you will see the uplink data from the LoRaWAN network. The format of the uplink message would be as follows: TaskID + Sensor Type + Length + Value

```sh
01 + f1(Raw Data in Binary) + 07 + 010302007d7865
```

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/uplink-data.png"
width="80%"
caption="Uplink data"
/>

#### Creating a Wind Speed Poll Task - Example

Fill in the relevant fields according to the specific sensor's datasheet, then after clicking the **Check** button, you will see the Reply Frame on the IO.Box.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/wind-sensor.png"
width="80%"
caption="Fill in sensor specific data"
/>


After saving the polling task wait awhile and you will see the uplink data from the LoRaWAN network in the gateway Web UI. The format of the uplink message would be as follows: TaskID + Sensor type + Value

```sh
02 + 92(Wind Speed) + 007D(Hex) 125(Dec) 1.25m Wind Speed
```

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/uplink-data_wind.png"
width="80%"
caption="Uplink data"
/>

#### Click Reload to Fetch the Latest Uplink Data

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/uplink-latest.png"
width="80%"
caption="Fetching latest uplink"
/>

#### Search Task

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/search.png"
width="80%"
caption="Search task"
/>

#### Sort Task Based on the Task ID, Address, Function Code, Register Address, Data Type, Sensor Type or Remark

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/sort.png"
width="80%"
caption="Sort task"
/>

#### Export an Existing Task List and Import it into Another Node

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/import-export.png"
width="80%"
caption="Export/Import task"
/>

### Digital Input/Output Configuration

From the main menu of IO.Box, go to the **DI/DO** tab and configure the interface according to the sensor/device you are connecting to. Do not forget to save your changes. In this tab you will find:

- **Port ID** - The identifier of the digital input port. You can find the port ID on the device’s enclosure label.
- **Task ID** - An identifier of the polling task. The ID will be included in the uplink data to indicate the source of the data.
- **Debounce** - Set a delay (Range: 50-2000&nbsp;ms) to stabilize the signal from a switch or button, ensuring only a single action is registered and eliminating false triggers due to contact bounce.
- **Input State** - Displays this digital input port's status (active or inactive).
- **Output State** - Toggle to change this digital output port's current state (active or inactive).
- **Enable** - Toggle to activate the polling task for this port, allowing it to report the port’s state. 

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/di-do-parameters.png"
width="80%"
caption="DI/DO parameters"
/>

#### Connecting a PIR Motion Sensor With Digital Input

For this example, a DH-ARD631-50 Outdoor active PIR sensor is used in the following way:

1. Have two devices, one transmitter and one receiver.
2. The transmitter's POWER(1/2) is connected to the V<sub>out</sub> and GND of the bridge.
3. The receiver's POWER(2/3) is connected to the 12V_Out and GND of the bridge.
4. The receiver's ALARM(5/6) is connected to the DI4 COM and DI4 IN of the bridge.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/sensor-wiring.png"
width="80%"
caption="Sensor to Bridge wiring"
/>

5. Enable the DC V<sub>out</sub> and the 12&nbsp;V<sub>DC</sub> power outputs in the IO.Box console, located in the **System** tab.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/power-outputs.png"
width="80%"
caption="Enabling power outputs"
/>

6. After enabling DI4 and reloading, you will see the input state enabled.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/di4.png"
width="80%"
caption="Enabling DI4"
/>

7. When triggered, the LNS will receive the packet after the debounce time or a periodic uplink.

#### Digital Output for Switching Applications

1. You can connect any module or device to the port of the Digital Output as long as it operates on the recommended voltage rating.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/wiring-switching.png"
width="80%"
caption="Wiring"
/>

2. When the output state is enable in the IO.Box console, the left bulb is supplied, when it is disabled, the right bulb is supplied.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/output-state.png"
width="80%"
caption="Output state"
/>

3. Additionally, modifications can be made through a Downlink message.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/downlink_switching.png"
width="100%"
caption="Downlink"
/>

### System 

From the main menu of IO.Box, go to the **System** tab to find device information for the RAK2461 as well as power output toggles and firmware update options. Do not forget to save your changes. In this tab you will find:

- **Hardware Version** - Displays the specific version of the device’s hardware.
- **Firmware Version** - Displays the device's firmware version.
- **Device EUI** - Displays the unique identifier assigned by the manufacturer.
- **Device Model** - Displays the specific model name or number of the device.
- **Serial Number** - Displays the device’s serial number of the device.
- **Device Type** - Indicates the category or classification of the device, defining its interface types and functionalities. For detailed specifications refer to the device’s model information.
- **Frequency Band** - The device’s frequency band.
- **DC Vout Output** - Toggle to enable or disable the Vout power output. When enabled, Vout passes through the same voltage as the Vin input. 
- **DC 12V Output** - Toggle to enable or disable the 12V_Out power output. When enabled, it provides a 12&nbsp;V / 0.5&nbsp;A power output. 
- **DC 5V Output** - Toggle to enable or disable the 5V_Out power output. When enabled, it provides a 5&nbsp;V / 0.5&nbsp;A power output. 

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/system.png"
width="80%"
caption="System information overview"
/>

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/system-2.png"
width="80%"
caption="System information overview"
/>

#### Reboot

Simply press the **Reboot** button under the **Firmware Upgrade** section.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/reboot.png"
width="80%"
caption="Reboot button"
/>

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/reboot-ok.png"
width="80%"
caption="Successful reboot"
/>

#### Factory Reset 

To restore the device to factory settings, press the **Reset** button under the **Firmware Upgrade** section and wait for the process to be completed.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/reset.png"
width="80%"
caption="Reset Button"
/>

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/reset-on.png"
width="80%"
caption="Reset progress"
/>

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/reset-ok.png"
width="80%"
caption="Successful reset"
/>

### Firmware Update

#### Normal Firmware Update

1. After downloading the latest firmware, click **Browse**.
<!-- deleted the link above because it's not RAK2461's Firmware and the link is non-existent in the Download center -->

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/browse.png"
width="80%"
caption="Browse button"
/>

2. Select the correct file.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/file.png"
width="80%"
caption="Selecting the file"
/>

3. Click **Upgrade** and wait for the procedure to finish.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/upgrade.png"
width="80%"
caption="Upgrading procedure"
/>

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/upgrade-ok.png"
width="60%"
caption="Successful upgrade"
/>

#### Manual Firmware Update

Follow this procedure if the upgrade process fails unexpectedly, or to upgrade the damaged device in boot mode.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/upgrade-fail.png"
width="60%"
caption="upgrade fail"
/>

1. Open the IO.Box application and click **Connect Device**.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/IOBox_app.png"
width="80%"
caption="IOBox application"
/>

2. Select **Connect Manually**.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/no-device.png"
width="60%"
caption="No device found"
/>

3. Manually input the port and device model.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/device-manual.png"
width="80%"
caption="Manually selecting the device"
/>

4. Follow the steps of the normal upgrade procedure above by browsing and selecting the firmware file and so on.

<rk-img
src="/assets/images/wisnode/rak2461-n/quickstart/normal-upgrade-1.png"
width="80%"
caption="Normal upgrade procedure"
/>