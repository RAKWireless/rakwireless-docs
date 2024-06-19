---
rak_desc: Contains instructions and tutorials for installing and deploying your Weather Station Solution. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisnode/weather-station/weather-station-solution.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - Sensor Hub
  - Sensor Hub Solutions
  - quickstart
  - wisnode
  - Weather Station
---

# Weather Station Monitoring Solution Quick Start Guide

## Prerequisites

Before proceeding with each step for using the Weather Station Monitoring Solution, make sure to have all the necessary items listed below:

<rk-img
    src="/assets/images/wisnode/weather-station/quickstart/0.sensor-hub-weather-station-solution-accessories.png"
    width="80%"
    caption="Weather Station Solution Package Inclusion"
/>

### Hardware Tools

- <a href="https://store.rakwireless.com/products/weather-station-monitoring?variant=42505214427334?utm_source=W&utm_medium=Document&utm_campaign=BuyFromStore" target="_blank">Weather Station Monitoring Solution</a>
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
src="/assets/images/wisnode/weather-station/quickstart/1.sim-card-insertion.png"
width="20%"
caption="Remove the back cover"
/>

2. Insert the SIM card into the groove, then gently push it into the card slot.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/2.sim-card-insertion.png"
width="40%"
caption="Insert the SIM card"
/>

#### Sensor Hub Mounting

##### Wall Mounting

1. Use a 5&nbsp;mm drill bit to drill holes in the wall, then insert the screw anchors into the holes.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/3.sensor-hub-installation.png"
width="80%"
caption="Installation preparation"
/>

2. Secure the mounting bracket to the wall by using self-tapping screws.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/4.sensor-hub-installation.png"
width="30%"
caption="Secure the mounting bracket"
/>

3. Align the device's hanging tab with the slots on the bracket, and then insert the tab into the slots. Pull the device downwards until it snaps into place.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/5.sensor-hub-installation.png"
width="40%"
caption="Align the device with the hanging tabs"
/>

##### Pole Mounting

1. Secure the mounting bracket to the pole using a steel strap.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/6.pole-mounting.png"
width="20%"
caption="Fix the mounting bracket"
/>

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

2. Align the hanging tab of the device with the slots on the bracket, then insert the tab into the slots. Gently pull the device downwards until it securely snaps in place.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/7.pole-mounting.png"
width="40%"
caption="Device installation"
/>

3. Insert a security screw at the top to fasten the device and the bracket together.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/8.pole-mounting.png"
width="20%"
caption="Fasten the device and the bracket"
/>

## RAK2560 WisNode Sensor Hub + Micro Weather Sensor Setup

### Sensor Probe IO + Micro Weather Sensor Installation

1. Pass the communication cable connector of the micro weather sensor through the circular hole in the provided mounting bracket.

2. Connect the micro weather sensor and the communication cable. Align the grooves of the connectors and insert the cable connector into the sensor connector.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/9.installation-of-micro-weather-sensor.png"
width="40%"
caption="Insert the Cable Connector into the Sensor Connector"
/>

3. After inserting, tighten the locking nut.

4. Fix the sensor to the mounting bracket using the provided wing screws. When installing the sensor, ensure that the indicator on the sensor corresponds to the geographical north.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/10.installation-of-micro-weather-sensor.jpg"
width="40%"
caption="Fix the Sensor to the Mounting Bracket"
/>

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/11.installation-of-micro-weather-sensor.png"
width="30%"
caption="Indicator"
/>

5. Fix the mounting bracket to the pole.

:::tip 📝 NOTE
**Precautions during mounting:**
- Check regularly to ensure that the sensor is not disturbed by other running equipment that may not fully comply with the general standards, such as radio/radar transmitters, ship engines, and motors.
- Do not mount the sensor on the same plane as any radar scanning devices, and keep a distance of at least 2&nbsp;meters between them.
- When mounting the sensor, keep it at a certain distance from the radio receiving antennas around.
- Avoid nearby structures, such as trees, utility poles, and tall buildings, which can generate an eddying flow that affects the accuracy of the ultrasonic sensor.
- When mounting the sensor on a building, the ideal mounting height should be 1.5 times the height of the building.
- When mounting the sensor on the boom of a mast, the boom needs to be on the prevailing wind side.
:::

#### Sensor Hub + Sensor Probe IO + Micro Weather Sensor Installation

The micro weather sensor comes pre-assembled with Sensor Probe IO by default at the factory. No additional assembly is required; simply connect Sensor Probe IO and Sensor Hub.

1. Connect Sensor Probe IO with Sensor Hub via the SP11 connector.
2. Align the white dot symbol on the Sensor Probe IO SP11 connector plug with the white dot symbol on the Sensor Hub SP11 connector socket and push the plug firmly into the socket.
3. Once connected, tighten the locking nut to secure the SPI connection. The Sensor Probe IO can connect to any Sensor Hub SP11 connector port. Refer to the actual use and connect to the appropriate port, as shown in **Figure 13**.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/12.connect-sensor-probe-IO-and-sensor-hub.png"
width="45%"
caption="Connect the Sensor Probe IO"
/>

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/13.connect-sensor-probe-IO-and-sensor-hub.png"
width="40%"
caption="Installation completed"
/>

## Power Supply Setup

The Sensor Hub relies on the Sensor Probe IO for connectivity to the micro weather sensors. Consequently, it cannot be powered by batteries alone and requires a connection to either a solar panel or a 12&nbsp;V<sub>DC</sub> power supply for operation.

### RAK9154 Solar Battery Installation

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

1. Secure the mounting bracket on the pole with two steel straps.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/14.connect-solar-panel-system.png"
width="20%"
caption="Secure the mounting bracket"
/>

2. Attach the mounting plate to the RAK9154 with two (2) M3 screws.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/15.connect-solar-panel-system.png"
width="40%"
caption="Attach the mounting plate"
/>

3. Install the RAK9154 to the back of the solar panel with four (4) screws and nuts.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/16.connect-solar-panel-system.png"
width="40%"
caption="Attach RAK9154 to solar panel"
/>

4. Connect the cable of the solar panel to the **PV input** connector of RAK9154. Install two (2) M6 screws to the mounting plate with a clearance of about 3&nbsp;mm.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/17.connect-solar-panel-system.png"
width="40%"
caption="Connector the RAK9154"
/>

5. Suspend the solar panel on the mounting bracket, adjust its angle and direction, and then tighten the two (2) M6 screws along with the remaining two screws.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/18.connect-solar-panel-system.png"
width="40%"
caption="Install the solar panel combination"
/>

6. Connect Sensor Hub and RAK9154. Use a cable to link the remaining connection port of the Sensor Hub to the lithium battery Output 1 SP11 connection port of RAK9154.

:::tip 📝 NOTE
When connecting to RAK9154, ensure that the Sensor Hub is connected to the Output 1 connection port.
:::

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/connect-sensorhub-rak9154.png"
width="60%"
caption="Connect the Sensor Hub and RAK9154"
/>

7. Once the connection is complete, the Sensor Hub is ready to be powered up.

### 12&nbsp;V<sub>DC</sub> Power Supply Installation

1. Connect the power adapter to the external power cable of Sensor Hub using a circular DC connector.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/21.connect-the-12-vdc-power-supply.png"
width="40%"
caption="Power Adapter Connection"
/>

2. Connect the external power cable to the Sensor Hub using the SP11 connector.
3. Align the white dot mark on the SP11 connector plug of the external power cable with the white dot mark on the Sensor Hub SP11 connector socket, and push the plug firmly into the socket.
4. After the plug and socket are connected, tighten the locking nut to secure the connection of the SP11 connector. The external power cable can connect to any Sensor Hub connection port.


<rk-img
src="/assets/images/wisnode/weather-station/quickstart/22.connect-the-12-vdc-power-supply.png"
width="40%"
caption="Connect the external power cable"
/>

## Software Configuration Guide

### Sensor Hub Configuration

#### Power Up Sensor Hub

After installing all hardware components, connect the power supply. If the power supply consists of a solar panel and a battery, the device will power on automatically once all hardware has been installed.

:::warning ⚠️ WARNING
To prevent damage to the device, refrain from powering up the Sensor Hub before connecting it to the sensor. It is advisable to use the 12&nbsp;V<sub>DC</sub> adapter provided with the Sensor Hub for optimal performance.
:::

#### Connect Sensor Hub to WisToolBox

1. Download and install the WisToolBox app on your smart mobile device. The WisToolBox app is available for download from the Apple App Store and the Android Google Play Store.

2. Initiate the app and confirm that NFC and Bluetooth are enabled on your mobile device. Click on **START**.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/1. start-app.png"
width="40%"
caption="Start App"
/>

3. On the **Select connection mode** menu, choose **NFC Activation**.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/2. select-nfc-activation.png"
width="40%"
caption="Select NFC Activation"
/>

4. Select the **Sensor HUB** option in the device selection interface to establish a connection.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/3. select-sensor-hub.png"
width="40%"
caption="Select Sensor Hub"
/>

5. Click the **CONNECT** button to initiate the scanning process for devices.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/4. click-on-the-connect-button.png"
width="40%"
caption="Click on the CONNECT button"
/>

6. Hold your mobile device close to the **N** symbol on the Sensor Hub device.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/5. scanning-in-progress.png"
width="40%"
caption="Scanning in progress"
/>

:::tip 📝 NOTE
The detection of the Sensor Hub device indicates that the device has been successfully powered up.
:::

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/6. scan-successful.png"
width="40%"
caption="Scan Successful"
/>

7. After the connection is established, there will be a synchronization of device data. This process may take some time.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/7. sync-device.png"
width="40%"
caption="Sync Device"
/>

:::tip 📝 NOTE
- By default, if no connection is established within 30 seconds, the BLE broadcast of the Sensor Hub will automatically shut down. To establish a connection, connect the RAK device immediately after turning on the power or restart the power.
- Certain Android smartphones may necessitate enabling GPS to connect to BLE. Enabling GPS does not involve the use or sharing of sensitive information with the app.
:::

8. Upon completion of data synchronization, the app will automatically transition to the **SENSOR HUB INFO** page.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/8. sensor-hub-info-page.png"
width="40%"
caption="SENSOR HUB INFO page"
/>

9. While on the **SENSOR HUB INFO** page, configure the Uplink Settings according to the selected network.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/9. uplink-settings-option.png"
width="40%"
caption="Uplink Settings option"
/>

10. Once configured, click **SAVE SELECTION**, and then the **APPLY** button to implement the configuration options.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/10. apply-the-configuration-options.png"
width="40%"
caption="Apply the configuration options"
/>

After a few seconds, the synchronization progress will be completed, concluding this process.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/11. commands-applied-successfully.png"
width="40%"
caption="Commands applied successfully"
/>

### Sensor Hub Network Configuration

#### LoRaWAN Configuration

This section focuses on configuring the LoRaWAN parameters and joining the network. Before proceeding with the following steps, ensure that the gateway and Sensor Hub are connected to the server.

Refer to the **Connect the Gateway to the Server** and **Connect Sensor Hub to the Server** sections for detailed instructions.

1. Click the **LORA & LORAWAN PARAMETERS** tab. Configure the following parameters:

- <b>Global settings</b>

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/12. global-settings.png"
width="40%"
caption="Global Settings"
/>

- **Join mode**: Configure the Join mode based on the device's network access mode: **Over-The-Air Activation (OTAA)** or **Activation By Personalization (ABP)**. Make sure it matches the join mode registered on the network server.
- **Active region**: Set the Active region to the device's frequency plan. Ensure that it is consistent with the gateway and device frequency plan registered on the network server.

Supported frequency bands include CN470, RU864, IN865, EU868, US915, AU915, KR920, AS923-1/2/3/4.

<b>LoRaWAN keys, ID, EUI</b>

- For the **OTAA join mode**, configure the following parameters: **Application EUI**, **Application key**, and **Device EUI**.

  <rk-img
  src="/assets/images/wisnode/weather-station/quickstart/13. otaa-join-mode-configuration.png"
  width="40%"
  caption="OTAA join mode configuration"
  />

  - **Application EUI**: Confirm that it matches the device's Application EUI as registered in the network server.
  - **Application key**: Verify its alignment with the device's Application key registered in the network server. Click **GENERATE KEY** to create a new key if needed.
  - **Device EUI**: Confirm that it matches the Device EUI registered in the network server. 



<rk-img
    src="/assets/images/wisnode/weather-station/quickstart/14. abp-join-mode.png"
    width="40%"
    caption="ABP join mode"
/>

- <b>Data on LoRa® network</b>

- For the ABP join mode, configure the required parameters: **Application session key**, **Device address**, and **Network session key**. 

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/15. data-on-lora-network.png"
width="40%"
caption="Data on LoRa® network"
/>

  * **Confirm mode**: Message confirmation mode.
  * **Enable auto join**: Determine whether to activate automatic network access. When enabled, the device will join the network automatically upon powering up.
  * **Network status**: Indicates the status of the network connection. It will be activated automatically once successfully connected to the network.
  * **ADR**: The Adaptive Data Rate optimizes data rates in the network. Toggle the button to enable or disable it.
  * **JOIN NETWORK**: After completing the network parameter, click the **JOIN NETWORK** button to run the join network command.

2. After clicking **JOIN NETWORK**, a **Message sent** message will appear, indicating that the join network command has been sent.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/16. join-the-network.png"
width="40%"
caption="Join the Network"
/>

#### NB-IoT/LTE CAT-M1 Configuration

This section primarily introduces the configuration of LTE-M network parameters. If you are using the NB-IoT/LTE CAT-M1 network, after connecting the device, select **LTE-M** in the **Uplink Settings** options on the **SENSOR HUB INFO** interface to display the **LTE-M PARAMETERS** configuration tab.

1. Click the **LTE-M PARAMETERS** tab and check the following parameters to ensure that the network is working properly.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/17. view-the-nb-iot-parameters-tab-parameters.png"
width="40%"
caption="View the LTE-M Parameters tab"
/>

<b>LTE-M Network</b>

- **OPERATOR**: Shows the Network operator. If the operator's name is displayed, it indicates that the device has recognized the SIM card.
For example, *CHINAMOBILE*.

<b>IP Network</b>

- **STATUS**: If the status is **Activated**, it signifies that the network of the SIM card is functioning normally.

2. Select the **Application** option to configure the cellular network parameters.
 
<rk-img
src="/assets/images/wisnode/weather-station/quickstart/18. configure-the-cellular-network-parameters.png"
width="40%"
caption="Configure the cellular network parameters"
/>

- **Service**: Choose a service, either AWS IoT Core or Generic MQTT. For this guide, use Generic MQTT as an example.
- **Server address**: Input the server address. Using the external MQTT broker as an example, enter `broker.hivemq.com`. Enter the address based on your specific use case.
- **Server Port**: Specify the server port according to your configuration.
- **Client ID**: Set the client ID for your device.
- **Enable user auth**: Decide whether to activate user authentication for your device.
- **Enable SSL**: Decide whether to activate SSL (Secure Sockets Layer) for secure communication.
- **Publish Topic**: Specify the topic for publishing messages.
- **Data Format**: Select **JSON** as the preferred format for data transmission.
- **Subscribe Topic**: Subscribe to the topic for receiving incoming messages, as illustrated in this example.

3. Following the configuration, click **APPLY** in the command list at the bottom of the interface to implement the changes. If the message **All commands applied successfully** appears, it indicates a successful configuration modification.
 
<rk-img
src="/assets/images/wisnode/weather-station/quickstart/19. apply-the-modified-configuration.png"
width="70%"
caption="Apply the modified configuration"
/>

4. When configured correctly and successfully connected to the server, the **Connection Status** will display as **connected**.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/20. successfully-connected-to-the-server.png"
width="40%"
caption="Successfully connected to the server"
/>

### Sensor Configuration

This section details the configuration process of the weather sensor. It shows how to access the monitoring data and device details of the weather station solution. Additionally, there’s an option to configure other information for each monitoring parameter, such as the uplink data sending period and threshold.

1. To start with, click the **SENSOR PROBE** tab to display the connected weather stations on the interface. 

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/21. weather-station-sensor.png"
width="40%"
caption="Weather Station sensor"
/>

2. Click the dropdown arrow to expand the details of the weather station sensor.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/22. sensor-details.png"
width="40%"
caption="Sensor details"
/>

- **Wind speed**
- **Wind direction**
- **Temperature**
- **Humidity**
- **Pressure**: The atmospheric pressure.
- **FETCH DATA**: Update the monitoring data from the sensor.
- **Device details**

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/23. sensor-details.png"
width="40%"
caption="Sensor details"
/>

For this example, fetch the data of the Wind speed and set the parameters by then choosing the Wind speed feature. 

3. Configure the periodic uplink data sending, thresholds, and other relevant information for the sensor.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/24. set-the-sensor-parameters.png"
width="40%"
caption="Set the sensor parameters"
/>

- **Sensor data**: Data provided by the sensor.
- **FETCH DATA**: Update the latest sensor data.
- **Send uplink if value changes**: Send uplink data if the sensor data changes.
- **Sensor interval(s)**: The payload sending interval in seconds. It determines how often the sensor sends uplink data to the server, with a range interval from 60~86,400&nbsp;seconds. Set this parameter when the **Send periodic uplink** is enabled.
- **Send periodic uplink**: Send uplink data periodically based on the sensor interval.
- **Lower threshold**: Specifies the minimum acceptable value.
- **Send uplink if below threshold**: Trigger the transmission of uplink data if the value falls below the lower threshold.
- **Upper threshold**: Maximum acceptable value.
- **Send uplink if above threshold**: Send uplink data if the value exceeds the upper threshold.
- **Threshold, m/s**: Range of acceptable values.
- **Send uplink if between thresholds**: Send uplink data if the value falls within the specified threshold range.

4. After completing the modifications, a message **Commands in queue** will appear at the bottom of the interface. Click **APPLY** to send the parameter update commands.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/25. apply-commands.png"
width="40%"
caption="Apply commands"
/>

5. When the message **All commands applied successfully**, appears on the interface, it indicates that the parameter update commands have been successfully sent.

<rk-img
src="/assets/images/wisnode/weather-station/quickstart/26. commands-applied-successfully.png"
width="40%"
caption="Commands applied successfully"
/>

<b>Other Operations</b>

- **REMOVE SENSOR PROBE**: Detach the sensor.
- **RESTORE TO DEFAULT SETTINGS**: Reset the Sensor Probe to its default settings.
- **UPGRADE SENSOR PROBE**: Upgrade the firmware of the Sensor Probe.
