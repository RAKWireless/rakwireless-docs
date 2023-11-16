---
rak_img: /assets/images/wisnode/soil-ph-monitoring/SoilpHSol.png
rak_desc: This section provides instructions on installing and configuring the Sensor Hub for the Soil pH Monitoring Solution, covering details on mounting, power supply, and battery installation.
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
    - Sensor Hub
    - Soil pH
    - Sensor Hub Solutions
    - Installation

---

# Soil pH Monitoring Solution Quick Start Guide

## Prerequisites

Before proceeding with each step for using the Soil pH Solution, make sure to have all the necessary items listed below:

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/datasheet/f1pHSolution_accesories.png"
  width="70%"
  caption="Sensor Hub Soil pH Solution Accesories"
/>

### Hardware Tools


- <a href="https://store.rakwireless.com/products/soil-ph-monitoring?m=3&h=sensor-hub&variant=42505216786630?utm_source=SoilpH&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Soil pH Monitoring Solution</a>
- <a href="https://store.rakwireless.com/products/rak-battery-lite-solar-power-solution-rak9154?utm_source=RAK9154SolarBattery&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Solar Battery Lite for Sensor Hub</a> (optional)
- Additional accessories: Probe Cable, Probe Splitter, power supply, and others (numbers and variations depending on the use case)
- An Android or iOS mobile device with Bluetooth and NFC 


### Software

<a href="https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/WisToolBoxMobile/" target="_blank">WisToolBox</a>


## Solution Configuration

### Sensor Hub Setup

#### SIM Card Installation

If the selected solution utilizes the NB-IoT/LTE CAT-M wireless communication mode, follow these steps to insert a SIM card. If you opt for the LoRaWAN wireless communication mode, skip this section, as a SIM card is not required.

1. Remove the back cover by unscrewing the four screws with a cross screwdriver.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f2pHSolution_simInstall1.png"
  width="25%"
  caption="Remove the back cover"
/>

2. Insert the SIM card into the groove, then gently push it into the card slot.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f3pHSolution_simInstall2.png"
  width="35%"
  caption="Insert the SIM card"
/>

#### Sensor Hub Mounting

##### Wall Mounting

1. Use a 5&nbsp;mm drill bit to drill holes in the wall, then insert the screw anchors into the holes.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f4pHSolution_wallMount1.png"
  width="50%"
  caption="Installation preparation"
/>

2. Secure the mounting bracket to the wall by using self-tapping screws.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f5pHSolution_wallMount2.png"
  width="30%"
  caption="Secure the mounting bracket"
/>

3. Align the device's hanging tab with the slots on the bracket, and then insert the tab into the slots. Pull the device downwards until it snaps into place.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f6pHSolution_wallMount3.png"
  width="35%"
  caption="Align the device with the hanging tabs"
/>


##### Pole Mounting

1. Secure the mounting bracket to the pole using a steel strap.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f7pHSolution_poleMount1.png"
  width="20%"
  caption="Fix the Mounting Bracket"
/>

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

2. Align the hanging tab of the device with the slots on the bracket, then insert the tab into the slots. Gently pull the device downwards until it securely snaps in place.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f8pHSolution_poleMount2.png"
  width="35%"
  caption="Device installation"
/>

3. Insert a security screw at the top to fasten the device and the bracket together.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f9pHSolution_poleMount3.png"
  width="30%"
  caption="Fasten the device and the bracket"
/>

###  RAK2560 WisNode Sensor Hub + Soil pH Sensor Setup 

#### Sensor Probe IO + Soil pH Sensor Installation

The soil pH sensor comes pre-assembled with the Sensor Probe IO by default at the factory. Therefore, no additional assembly is necessary.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f10pHSolution_Sensor.png"
  width="35%"
  caption="Soil pH Sensor"
/>

#### Sensor Hub + Sensor Probe IO + Soil pH Sensor Installation

1. Connect the Sensor Probe IO to the SensorHub using the SP11 connector. 
2. Align the white dot mark on the Sensor Probe IO SP11 connector plug with the white dot mark on the SensorHub SP11 connector socket, and push the plug firmly into the socket. 
3. Once connected, tighten the locking nut to secure the SP11 connector. The Sensor Probe IO can be linked to any Sensor Hub SP11 connector port. Refer to the actual use and connect to the appropriate port as illustrated in **Figure 11**.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f11pHSolution_SensorInstall.png"
  width="35%"
  caption="Connect the Sensor Probe IO"
/>

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f12pHSolution_SensorSetup.png"
  width="35%"
  caption="Installation complete"
/>

## Power Supply Setup

The Sensor Hub relies on the Sensor Probe IO for connectivity to the soil pH combo sensors. Consequently, it cannot be powered by batteries alone and requires a connection to either a solar panel or a 12&nbsp;V<sub>DC</sub> power supply for operation.

### RAK9154 Solar Battery Installation

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

1. Secure the mounting bracket on the pole with two steel straps.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f13pHSolution_Batteryins1.png"
  width="20%"
  caption="Secure the mounting bracket"
/>

2. Attach the mounting plate to the RAK9154 with two (2) M3 screws.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f14pHSolution_Batteryins2.png"
  width="30%"
  caption="Attach the mounting plate"
/>

3. Install the RAK9154 to the back of the solar panel with four (4) screws and nuts.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f15pHSolution_Batteryins3.png"
  width="35%"
  caption="Attach the RAK9154 to solar panel"
/>

4. Connect the cable of the solar panel to the **PV input** connector of RAK9154. Install two (2) M6 screws to the mounting plate with a clearance of about 3&nbsp;mm.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f16pHSolution_Batteryins4.png"
  width="35%"
  caption="RAK9154 and Solar Panel Connection"
/>

5. Suspend the solar panel on the mounting bracket, adjust its angle and direction, and then tighten the two (2) M6 screws along with the remaining two screws.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f17pHSolution_Batteryins5.png"
  width="30%"
  caption="Install the solar panel combination"
/>

6. Connect Sensor Hub and RAK9154. Use a cable to link the remaining connection port of the Sensor Hub to the lithium battery Output 1 SP11 connection port of RAK9154.

:::tip 📝 NOTE
When connecting to RAK9154, ensure that the Sensor Hub is connected to the Output 1 connection port.
:::

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f18pHSolution_Batteryins6.png"
  width="45%"
  caption="Connect the Sensor Hub and RAK9154"
/>

7. Once the connection is complete, the Sensor Hub is ready to be powered up.

### 12&nbsp;V<sub>DC</sub> Power Supply Installation

1. Connect the power adapter to the external power cable of Sensor Hub using a circular DC connector.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f19pHSolution_powersupply.png"
  width="35%"
  caption="Power adapter connection"
/>

2. Connect the external power cable to the Sensor Hub using the SP11 connector.
3. Align the white dot mark on the SP11 connector plug of the external power cable with the white dot mark on the Sensor Hub SP11 connector socket, and push the plug firmly into the socket.
4. After the plug and socket are connected, tighten the locking nut to secure the connection of the SP11 connector. The external power cable can connect to any Sensor Hub connection port.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f20pHSolution_ProbeInstall1.png"
  width="35%"
  caption="Connect external power supply"
/>

## Software Configuration Guide

### Sensor Hub Configuration

#### Power Up Sensor Hub

After installing all hardware components, connect the power supply. If the power supply consists of a solar panel and a battery, the device will power on automatically once all hardware has been installed.

:::warning ⚠️WARNING
To prevent damage to the device, refrain from powering up the Sensor Hub before connecting it to the sensor. It is advisable to use the 12&nbsp;V<sub>DC</sub> adapter provided with the Sensor Hub for optimal performance.
:::

#### Connect Sensor Hub to WisToolBox

1. Download and install the WisToolBox app on your smart mobile device. The WisToolBox app is available for download from the Apple App Store and the Android Google Play Store.

2. Initiate the app and confirm that NFC and Bluetooth are enabled on your mobile device. Click on **START**.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f21pHSolution_WTB_Start.png"
  width="25%"
  caption="Start App"
/>

3. On the **Select connection mode** menu, choose **NFC Activation**.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f22pHSolution_WTB_selDevice1.png"
  width="25%"
  caption="Select NFC Activation"
/>

4. Select the **Sensor HUB** option in the device selection interface to establish a connection.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f23pHSolution_WTB_selDevice2.png"
  width="25%"
  caption="Select Sensor Hub"
/>

5. Click the **CONNECT** button to initiate the scanning process for devices.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f24pHSolution_WTB_nfcconn.png"
  width="25%"
  caption="Click on the CONNECT button"
/>

6. Hold your mobile device close to the **N** symbol on the Sensor Hub device.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f25pHSolution_WTB_Scandevices.png"
  width="25%"
  caption="Scanning in progress"
/>

:::tip 📝 NOTE
The detection of the Sensor Hub device indicates that the device has been successfully powered up.
:::

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f26pHSolution_WTB_scanSuccess.png"
  width="25%"
  caption="Scan Successful"
/>

7. After the connection is established, there will be a synchronization of device data. This process may take some time.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f27pHSolution_WTB_GetDevInfo.png"
  width="25%"
  caption="Sync Device"
/>

:::tip 📝 NOTE
- By default, if no connection is established within 30 seconds, the BLE broadcast of the Sensor Hub will automatically shut down. To establish a connection, connect the RAK device immediately after turning on the power or restart the power.
- Certain Android smartphones may necessitate enabling GPS to connect to BLE. Enabling GPS does not involve the use or sharing of sensitive information with the app.

:::

8. Upon completion of data synchronization, the app will automatically transition to the **SENSOR HUB INFO** page.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f28pHSolution_WTB_SHinfo.png"
  width="25%"
  caption="SENSOR HUB INFO page"
/>

9. While on the **SENSOR HUB INFO** page, configure the Uplink Settings according to the selected network.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f29pHSolution_WTB_LoRaSel.png"
  width="25%"
  caption="Uplink Settings option"
/>

10. Once configured, click **SAVE SELECTION**, and then the **APPLY** button to implement the configuration options.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f30pHSolution_WTB_queue.png"
  width="25%"
  caption="Apply the configuration options"
/>

After a few seconds, the synchronization progress will be completed, concluding this process.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f31pHSolution_WTB_cmndsapld.png"
  width="25%"
  caption="Commands applied successfully"
/>

### Sensor Hub Network Configuration

#### LoRaWAN Configuration

This section focuses on configuring the LoRaWAN parameters and joining the network. Before proceeding with the following steps, ensure that the gateway and Sensor Hub are connected to the server.

Refer to the **Connect the Gateway to the Server** and **Connect Sensor Hub to the Server** sections for detailed instructions.

1. Click the **LORA & LORAWAN PARAMETERS** tab. Configure the following parameters:

- <b>Global settings</b>

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f32pHSolution_WTB_LoRaconf1.png"
  width="35%"
  caption="Global Settings"
/>

- **Join mode**: Configure the Join mode based on the device's network access mode: **Over-The-Air Activation (OTAA)** or **Activation By Personalization (ABP)**. Make sure it matches the join mode registered on the network server.
- **Active region**: Set the Active region to the device's frequency plan. Ensure that it is consistent with the gateway and device frequency plan registered on the network server.
Supported frequency bands include CN470, RU864, IN865, EU868, US915, AU915, KR920, AS923-1/2/3/4.

<b>LoRaWAN keys, ID, EUI</b>

- For the **OTAA join mode**, configure the following parameters: **Application EUI**, **Application key**, and **Device EUI**.
<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f33pHSolution_WTB_LoRaconf2.png"
  width="25%"
  caption="LoRaWAN parameters"
/>  

   * **Application EUI**: Confirm that it matches the device's Application EUI as registered in the network server.
   * **Application key**: Verify its alignment with the device's Application key registered in the network server. Click **GENERATE KEY** to create a new key if needed.
   * **Device EUI**: Confirm that it matches the device's EUI as registered in the network server. 

**Data on LoRa® Network**
* For the ABP join mode, configure the following parameters: **Application session key**, **Device address**, and **Network session key**.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f34pHSolution_WTB_LoRaconf3.png"
  width="25%"
  caption="Data on LoRa® Network"
/>

  * **Confirm mode**: Message confirmation mode.
  * **Enable auto join**: Determine whether to activate automatic network access. When enabled, the device will join the network automatically upon powering up.
  * **Network status**: Indicates the status of the network connection. It will be activated automatically once successfully connected to the network.
  * **ADR**: The Adaptive Data Rate optimizes data rates in the network. Toggle the button to enable or disable it.
  * **JOIN NETWORK**: After completing the network parameter, click the **JOIN NETWORK** button to run the join network command.

1. After clicking **JOIN NETWORK**, a message **Message sent** will appear, indicating that the join network command has been sent.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f35pHSolution_WTB_LoRaconf4.png"
  width="25%"
  caption="Join the network"
/>

#### NB-IoT/LTE CAT-M1 Configuration

This section primarily introduces the configuration of LTE-M network parameters. If you are using the NB-IoT/LTE CAT-M1 network, after connecting the device, select **LTE-M** in the **Uplink Settings** options on the **SENSOR HUB INFO** interface to display the **LTE-M PARAMETERS** configuration tab.

1. Click the **LTE-M PARAMETERS** tab and check the following parameters to ensure that the network is working properly.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f36pHSolution_WTB_NBconf1.png"
  width="25%"
  caption="View the NB-IOT PARAMETERS tab parameters"
/>

**LTE-M Network**

- **OPERATOR**: Shows the Network operator. If the operator's name is displayed, it indicates that the device has recognized the SIM card. 
For example, *T-Mobile*.

**IP Network**

- **STATUS**: If the status is **Activated**, it signifies that the network of the SIM card is functioning normally.

2. Select the **Application** option to configure the cellular network parameters.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f37pHSolution_WTB_NBconf2.png"
  width="25%"
  caption="Configure the cellular network parameters"
/>

- **Service**: Choose a service, either AWS IoT Core or Generic MQTT. For this guide, use Generic MQTT as an example.
- **Server address**: Input the server address. Using the external MQTT broker as an example, enter `broker.hivemq.com`. Enter the address based on your specific use case.
- **Server Port**: Specify the server port according to your configuration.
- **Client ID**: Set the client ID for your device.
- **Enable user auth**: Decide whether to activate user authentication for your device.
- **Enable SSL**: Decide whether to activate SSL (Secure Sockets Layer) for secure communication.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f38pHSolution_WTB_NBconf3.png"
  width="25%"
  caption="Configure the Subscription Topics"
/>

- **Publish Topic**: Specify the topic for publishing messages.
- **Data Format**: Select **JSON** as the preferred format for data transmission.
- **Subscribe Topic**: Subscribe to the topic for receiving incoming messages, as illustrated in this example.

3. Following the configuration, click **APPLY** in the command list at the bottom of the interface to implement the changes. If the message **All commands applied successfully** appears, it indicates a successful configuration modification.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f39pHSolution_WTB_NBconf4.png"
  width="25%"
  caption="Apply the modified configuration"
/>

4. When configured correctly and successfully connected to the server, the **Connection Status** will display as **connected**.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f40pHSolution_WTB_NBconf5.png"
  width="50%"
  caption="Successfully connected to the server"
/>

### Sensor Configuration

This section details the configuration process of the soil pH sensor. It shows how to access the monitoring data and device details of the soil pH sensor. Additionally, there’s an option to configure other information for each monitoring parameter, such as the uplink data sending period and threshold.

1. To start with, click the **SENSOR PROBE** tab to display the connected soil pH sensor on the interface. 

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f41pHSolution_WTB_SHconf1.png"
  width="25%"
  caption="Soil pH Sensor"
/>

2. Click the dropdown arrow to expand the details of the soil pH sensor.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f42pHSolution_WTB_SHconf2.png"
  width="25%"
  caption="Sensor Information"
/>

- **pH**: Soil pH value.
- **FETCH DATA**: Update the monitoring data from the sensor.
- **Device details**

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f43pHSolution_WTB_SHconf3.png"
  width="30%"
  caption="Sensor Details"
/>

3. Configure the periodic uplink data sending, thresholds, and other relevant information for the sensor.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f44pHSolution_WTB_SHconf4.png"
  width="25%"
  caption="Sensor details"
/>

- **Sensor data**: Data provided by the sensor.
- **FETCH DATA**: Update the latest sensor data.
- **Send uplink if value changes**: Send uplink data if the sensor data changes.
- **Sensor interval(s)**: The payload sending interval in seconds. It determines how often the sensor sends uplink data to the server, with a range interval from 60~86,400 seconds. Set this parameter when the Send periodic uplink is enabled.
- **Send periodic uplink**: Send uplink data periodically based on the sensor interval.
- **Lower threshold, pH**: Specifies the minimum acceptable pH value.
- **Send uplink if below threshold**: Trigger the transmission of uplink data if the value falls below the lower threshold.
- **Upper threshold, pH**: Maximum acceptable pH value.
- **Send uplink if above threshold**: Send uplink data if the value exceeds the upper threshold.
- **Threshold, pH**: Range of acceptable values.
- **Send uplink if between threshold**: Send uplink data if the value falls within the specified threshold range.

4. After completing the modifications, a message **Commands in queue** will appear at the bottom of the interface. Click **APPLY** to send the parameter update commands.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f45pHSolution_WTB_SHconf5.png"
  width="25%"
  caption="Set the sensor parameters"
/>

5. When the message **All commands applied successfully**, appears on the interface, it indicates that the parameter update commands have been successfully sent.

<rk-img
  src="/assets/images/wisnode/soil-ph-monitoring/quickstart/f46pHSolution_WTB_SHconf6.png"
  width="25%"
  caption="Apply commands"
/>

**Other Operations**

- **REMOVE SENSOR PROBE**: Detach the sensor.
- **RESTORE TO DEFAULT SETTINGS**: Reset the Sensor Probe to its default settings.
- **UPGRADE SENSOR PROBE**: Upgrade the firmware of the Sensor Probe.