---
rak_desc: Contains instructions and tutorials for installing and deploying your Water Level Monitoring. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/wisnode/water-level-monitoring/water-level-monitoring.png
prev: ../Overview/
next: ../Supported-LoRa-Network-Servers/
tags:
  - Field Tester for LoRaWAN
  - quickstart
  - wisnode
---

# Water Level Monitoring Quick Start Guide

## Prerequisites

Before proceeding with each step of using the Water Level Monitoring Solutions, ensure that you have the necessary items.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/1.device-list.png"
width="80%"
caption="Solutions package inclusion"
/>

### Hardware Tools

- <a href="https://store.rakwireless.com/products/water-level-monitoring?variant=42505217638598" target="_blank">Sensor Hub Water Level Monitoring Solution</a>
- <a href="https://store.rakwireless.com/products/rak-battery-lite-solar-power-solution-rak9154?m=9&h=power-supplies-accessories" target="_blank">Solar Battery Lite for Sensor Hub</a> (Optional)
- Additional accessories: Probe Cable, Probe Splitter, Power Supply, and others (numbers and variations depending on the use case)
- An Android or iOS mobile device with Bluetooth and NFC

### Software

- <a href="https://store.rakwireless.com/products/rak-battery-lite-solar-power-solution-rak9154?m=9&h=power-supplies-accessories" target="_blank">WisToolBox</a>

## Solution Configuration

### Sensor Hub Setup

#### SIM Card Installation

If the selected solution utilizes the NB-IoT/LTE CAT-M wireless communication mode, follow these steps to insert a SIM card. If you opt for the LoRaWAN wireless communication mode, skip this section, as a SIM card is not required.

1. Remove the back cover by unscrewing the four screws with a cross screwdriver.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/1.remove-the-back-cover.png"
width="25%"
caption="Remove the back cover"
/>

2. Insert the SIM card into the groove, then gently push it into the card slot.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/2.insert-the-sim-card.png"
width="50%"
caption="Insert the SIM card"
/>

#### Sensor Hub Mounting

##### Wall Mounting

1. Use a 5&nbsp;mm drill bit to drill holes in the wall, then insert the screw anchors into the holes.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/3.installation-preparation.png"
width="80%"
caption="Installation preparation"
/>

2. Secure the mounting bracket to the wall by using self-tapping screws.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/4.secure-the-mounting-bracket.png"
width="30%"
caption="Secure the mounting bracket"
/>

3. Align the device's hanging tab with the slots on the bracket, and then insert the tab into the slots. Pull the device downwards until it snaps into place.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/5.align-the-device-with-the-hanging-tabs.png"
width="45%"
caption="Align the device with the hanging tabs"
/>

##### Pole Mounting

1. Fix the mounting bracket to the pole using a steel strap.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/6.fix-the-mounting-bracket.png"
width="20%"
caption="Fix the mounting bracket"
/>

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

2. Align the hanging tabs of the device with the slots on the bracket, then insert the tabs into the slots. Gently pull the device downwards until it securely snaps into place.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/7.device-installation.png"
width="45%"
caption="Device installation"
/>

3. Insert a security screw at the top to fasten the device and the bracket together.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/8.fasten-the-device-and-the-bracket.png"
width="30%"
caption="Fasten the device and the bracket"
/>

## RAK2560 WisNode Sensor Hub + Water Level Sensor Setup

### Sensor Probe IO + Water Level Sensor Installation

The Water Level Sensor comes pre-assembled with the Sensor Probe IO by default at the factory, so no additional assembly is required.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/9.sensor-probe-io-and-water-level-sensor.png"
width="35%"
caption="Sensor Probe IO and Water Level Sensor"
/>

#### Sensor Hub + Sensor Probe IO + Water Level Sensor Installation

1. Connect the Sensor Probe IO to the SensorHub using the SP11 connector.
2. Align the white dot mark on the Sensor Probe IO SP11 connector plug with the white dot mark on the SensorHub SP11 connector socket, and push the plug firmly into the socket.
3. Once connected, tighten the locking nut to secure the SP11 connector. The Sensor Probe IO can be linked to any Sensor Hub SP11 connector port. Refer to the actual use and connect to the appropriate port as illustrated in **Figure 11**.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/10.connect-the-sensor-probe-io.png"
width="30%"
caption="Connect the Sensor Probe IO"
/>

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/11.installation-completed.png"
width="30%"
caption="Installation completed"
/>

## Power Supply Setup

The Sensor Hub relies on the Sensor Probe IO for connectivity to the water level monitoring sensors. Consequently, it cannot be powered by batteries alone and requires a connection to either a solar panel or a 12&nbsp;V<sub>DC</sub> power supply for operation.

### RAK9154 Solar Battery Installation

:::tip 📝 NOTE
Mount the bracket on a pole with a 50-80&nbsp;mm diameter. For larger poles, use a bigger steel strap. The standard kit does not include a larger steel strap. Purchase separately if needed.
:::

1. Secure the mounting bracket to the pole using two steel straps.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/12.secure-the-mounting-bracket.png"
width="35%"
caption="Secure the mounting bracket"
/>

2. Attach the mounting plate to RAK9154 using two (2) M3 screws.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/13.attach-the-mounting-plate.png"
width="35%"
caption="Attach the mounting plate"
/>

3. Install the RAK9154 to the back of the solar panel using four (4) screws and nuts.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/14.attach-rak9154-to-solar-panel.png"
width="45%"
caption="Attach the RAK9154 to solar panel"
/>

4. Connect the cable from the solar panel to the PV Input connector of RAK9154. Install two (2) M6 screws on the mounting plate with a clearance of about 3&nbsp;mm.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/15.rak9154-connection.png"
width="45%"
caption="RAK9154 and Solar Panel Connection"
/>

5. Suspend the solar panel on the mounting bracket, adjust its angle and direction, and then secure it by tightening the two (2) M6 screws along with the remaining two screws.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/16.install-the-solar-panel-combination.png"
width="30%"
caption="Install the solar panel combination"
/>

6. Connect the Sensor Hub to the RAK9154. Use a cable to link the remaining connection ports of the Sensor Hub to the Output 1 SP11 connection port of the RAK9154.

:::tip 📝 NOTE
When connecting to RAK9154, ensure that the Sensor Hub is connected to the Output 1 connection port.
:::

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/17.connect-sensor-hub-and-rak9154.png"
width="60%"
caption="Connect Sensor Hub and RAK9154"
/>

7. Once the connection is complete, the Sensor Hub is ready to be powered up.

### 12&nbsp;V<sub>DC</sub> Power Supply Installation

1. Connect the power adapter and the external power cable of the Sensor Hub through the circular DC interface.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/18.power-adapter-connection.png"
width="40%"
caption="Power adapter connection"
/>

2. Connect the external power cable to the Sensor Hub through the SP11 connector.

3. Align the white dot mark on the SP11 connector plug of the external power cable with the white dot mark on the Sensor Hub SP11 connector socket, and push the plug in firmly into the socket.

4. After the plug and socket are connected, tighten the locking nut to secure the SP11 connector. The external power cable can connect to any Sensor Hub connection port.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/19.connect-external-power-cable.png"
width="40%"
caption="Connect the external power cable"
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
src="/assets/images/wisnode/water-level-monitoring/quickstart/1.start-app.png"
width="30%"
caption="Start the App"
/>

3. On the **Select connection mode** menu, choose **NFC Activation**.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/2.select-nfc-activation.png"
width="30%"
caption="Select NFC Activation"
/>

4. Select the **Sensor HUB** option in the device selection interface to establish a connection.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/3.select-sensor-hub.png"
width="30%"
caption="Select Sensor Hub"
/>

5. Click the **CONNECT** button to initiate the scanning process for devices.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/4.click-on-the-connect-button.png"
width="30%"
caption="Click on the CONNECT button"
/>

6. Hold your mobile device close to the **N** symbol on the SensorHub device.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/5.scanning-in-progress.png"
width="30%"
caption="Scanning in progress"
/>

:::tip 📝 NOTE
The detection of the Sensor Hub device indicates that the device has been successfully powered up.
:::

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/6.scan-successful.png"
width="30%"
caption="Scan Successful"
/>

7. After the connection is established, there will be a synchronization of device data. This process may take some time.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/7.sync-device.png"
width="30%"
caption="Sync Device"
/>

:::tip 📝 NOTE
- By default, if no connection is established within 30 seconds, the BLE broadcast of the Sensor Hub will automatically shut down. To establish a connection, connect the RAK device immediately after turning on the power or restart the power.
- Certain Android smartphones may necessitate enabling GPS to connect to BLE. Enabling GPS does not involve the use or sharing of sensitive information with the app.
:::

8. Upon completion of data synchronization, the app will automatically transition to the **SENSOR HUB INFO** page.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/8.sensor-hub-info-page.png"
width="30%"
caption="SENSOR HUB INFO page"
/>

9. While on the **SENSOR HUB INFO** page, configure the Uplink Settings according to the selected network.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/9.uplink-settings-option.png"
width="30%"
caption="Uplink Settings option"
/>

10. Once configured, click **SAVE SELECTION** and then the **APPLY** button to implement the configuration options.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/10.apply-the-configuration-options.png"
width="30%"
caption="Apply the configuration options"
/>

After a few seconds, the synchronization progress will be completed, concluding this process.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/11.commands-applied-successfully.png"
width="30%"
caption="Commands applied successfully"
/>

#### Sensor Hub Network Configuration

##### LoRaWAN Configuration

This section focuses on configuring LoRaWAN parameters and joining the network. Before proceeding with the following steps, ensure that both the gateway and Sensor Hub are successfully connected to the server.

Refer to the <a href="/Product-Categories/WisNode/Water-Level-Monitoring/Supported-LoRa-Network-Servers/#connect-gateway-to-ttn/" target="_blank">Connect Gateway to TTN</a> and <a href="/Product-Categories/WisNode/Water-Level-Monitoring/Supported-LoRa-Network-Servers/#connect-sensor-hub-to-ttn/" target="_blank">Connect Sensor Hub to TTN</a> sections for detailed instructions.

1. Click on the **LORA & LORAWAN PARAMETERS** tab. Configure the following parameters:

<b>Global Settings</b>

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/12.global-settings.png"
width="30%"
caption="Global Settings"
/>

- **Join Mode**: Configure the Join mode based on the device's network access mode: **Over-The-Air Activation (OTAA)** or **Activation By Personalization (ABP)**. Make sure it matches the join mode registered on the network server.
- **Active Region**: Set the Active region to the device's frequency plan. Ensure that it is consistent with the gateway and device frequency plan registered on the network server. 
Supported frequency bands include CN470, RU864, IN865, EU868, US915, AU915, KR920, AS923-1/2/3/4.

<b>LoRaWAN keys, ID, EUI</b>

- For the **OTAA join mode**, configure the following parameters: **Application EUI**, **Application key**, and **Device EUI**.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/13.lorawan-parameters.png"
width="30%"
caption="LoRaWAN parameters"
/>

  - **Application EUI**: Confirm that it matches the device's Application EUI as registered in the network server.
  - **Application key**: Verify its alignment with the device's Application key registered in the network server. Click **GENERATE KEY** to create a new key if needed.
  - **Device EUI**: Confirm that it matches the device's EUI as registered in the network server.


- For the **ABP join mode**, configure the following parameters: **Application session key**, **Device address**, and **Network session key**.


<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/abp.jpg"
width="30%"
caption="LoRaWAN parameters"
/>

<b>Data on LoRa® network</b>

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/14.data-on-lora-network.png"
width="30%"
caption="Data on LoRa® network"
/>

- **Confirm mode**: Message confirmation mode.
- **Enable auto join**: Determine whether to activate automatic network access. When enabled, the device will join the network automatically upon powering up.
- **Network status**: Indicates the status of the network connection. It will be activated automatically once successfully connected to the network.
- **ADR**: The Adaptive Data Rate optimizes data rates in the network. Toggle the button to enable or disable it.
- **JOIN NETWORK**: After completing the network parameter, click the **JOIN NETWORK** button to run the join network command.

2. After clicking **JOIN NETWORK**, a message **Message sent** will appear, indicating that the join network command has been sent.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/15.join-the-network.png"
width="30%"
caption="Join the network"
/>

##### NB-IoT/LTE CAT-M1 Configuration
This section primarily introduces the configuration of LTE-M network parameters. If you are using the NB-IoT/LTE CAT-M1 network, after connecting the device, select **LTE-M** in the **Uplink Settings** options on the **SENSOR HUB INFO** interface to display the **LTE-M PARAMETERS** configuration tab.

1. Click the **LTE-M PARAMETERS** tab. Check the following parameters to ensure the normal use of the network.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/16.view-the-nb-iot-parameters-tab-parameters.png"
width="30%"
caption="View the NB-IOT PARAMETERS tab parameters"
/>

<b>NB-IoT Network</b>

- **OPERATOR**: Shows the Network operator. If the operator's name is displayed, it indicates that the device has recognized the SIM card. For example, _T-Mobile_.

<b>IP Network</b>

- **STATUS**: If the status is **Activated**, it signifies that the network of the SIM card is functioning normally.

2. Select the **Application** option to set up the cellular network parameters.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/17.configure-the-cellular-network-parameters.png"
width="60%"
caption="Configure the cellular network parameters"
/>

- **Service**: choose a service, either AWS IoT Core or Generic MQTT. Let's take Generic MQTT as an example.
- **Server address**: input the server address. Using the external MQTT broker as an example, enter `broker.hivemq.com`. Enter the address based on your specific use case.
- **Server Port**: specify the server port according to your configuration.
- **Client ID**: set the client ID for your device.
- **Enable user auth**: decide whether to activate user authentication for your device.
- **Enable SSL**: decide whether to activate SSL (Secure Sockets Layer) for secure communication.
- **Publish Topic**: specify the topic for publishing messages.
- **Data Format**: select **JSON** as the preferred format for data transmission.
- **Subscribe Topic**: subscribe to the topic for receiving incoming messages, as illustrated in this example.

3. Following the configuration, click **APPLY** in the command list at the bottom of the interface to implement the changes. If the message **All commands applied successfully** appears, it indicates a successful configuration modification.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/18.apply-the-modified-configuration.png"
width="60%"
caption="Apply the modified configuration"
/>

4. When the configuration is accurate and the connection to the server is successful, the **Connection Status** will display as **connected**.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/19.successfully-connected-to-the-server.png"
width="60%"
caption="Successfully connected to the server"
/>

#### Sensor Configuration

This section details the configuration process of the Water Level sensor. It shows how to access the monitoring data and device details of the Water Level sensor. Additionally, there’s an option to configure other information for each monitoring parameter, such as the uplink data sending period and threshold.

1. To start with, click the **SENSOR PROBE** tab to display the connected water level sensor.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/20.water-level-sensor.png"
width="30%"
caption="Water Level sensor"
/>

2. Click the dropdown arrow to expand the details of the water level sensor.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/21.sensor-information.png"
width="30%"
caption="Sensor Information"
/>

- **Water level**
- **FETCH DATA**: Update the monitoring data from the sensor.
- **Device details**: Device details of the Water Level sensor.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/22.sensor-details.png"
width="30%"
caption="Sensor details"
/>

3. Configure the periodic uplink data sending, threshold, and other pertinent information of the sensor.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/23.set-the-sensor-parameters.png"
width="30%"
caption="Set the sensor parameters"
/>

- **Sensor data**: Information provided by the sensor.
- **FETCH DATA**: Retrieve the latest sensor data.
- **Send uplink if value changes**: Send uplink data if the sensor data changes.
- **Sensor interval(s)**: The payload sending interval in seconds. It determines how often the sensor sends uplink data to the server, with a range interval from 60~86,400 seconds. Set this parameter when the **Send periodic uplink** is enabled.
- **Send periodic uplink**: Send uplink data periodically based on the sensor interval.
- **Lower threshold, meter**: Specifies the minimum acceptable water level.
- **Send uplink if below threshold**: Send uplink data if the value falls below the lower threshold.
- **Upper threshold, meter**: Maximum acceptable value.
- **Send uplink if above threshold**: Send uplink data if the value exceeds the upper threshold.
- **Threshold, meter**: Range of acceptable values.
- **Send uplink if within threshold**: Send uplink data if the value exceeds the upper threshold.

4. After completing the modifications, a message **Commands in queue** will appear at the bottom of the interface. Click **APPLY** to send the parameter update commands.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/24.apply-commands.png"
width="30%"
caption="Apply commands"
/>

5. When the message **All commands applied successfully** appears on the interface, it indicates that the parameter update commands have been successfully sent.

<rk-img
src="/assets/images/wisnode/water-level-monitoring/quickstart/25.commands-applied-successfully.png"
width="30%"
caption="Commands applied successfully"
/>

<b>Other Operations</b>

- **REMOVE SENSOR PROBE**: Detach the sensor.
- **RESTORE TO DEFAULT SETTINGS**: Reset the Sensor Probe to its default settings.
- **UPGRADE SENSOR PROBE**: Upgrade the firmware of the Sensor Probe.
