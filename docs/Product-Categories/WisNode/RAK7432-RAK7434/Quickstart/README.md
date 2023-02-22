---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK7432/RAK7434 WisNode Bridge Analogs. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak7432-rak7434/overview/rak7432-rak7434_home.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK7432
  - RAK7434
  - quickstart
  - wisnode
---

# RAK7432/RAK7434 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each step in the installation guide of the WisNode Bridge Analog RAK7432 (4-20&nbsp;mA) or RAK7434 (0-5&nbsp;V), make sure to prepare the necessary items listed below:

#### Hardware Tools

- [RAK7432/RAK7434](https://store.rakwireless.com/products/wisnode-bridge-rak7432-rak7434?utm_source=RAK7432-RAK7434&utm_medium=Document&utm_campaign=BuyFromStore)
- Micro USB cable
- Gateway in range, for testing
- A Windows/Mac OS/Linux computer

#### Software Tools

- [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)

## Product Configuration

### Typical Network Application

RAK7432/RAK7434 converts data from the 4-20&nbsp;mA/0-5&nbsp;V analog protocol into LPWAN wireless messages and delivers it to a cloud server through an LPWAN gateway. Using the RAK7432/RAK7434, you can convert data from a conventional 4-20&nbsp;mA/0-5&nbsp;V analog sensor to a wireless network.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/1.sample-communication.png"
  width="100%"
  caption="Sample communication with 4-20mA/0-5V analog-enabled devices"
/>

### Connect the RAK7432/RAK7434 to the Sensor

#### Power Interface Configuration

The RAK7432/RAK7434 device can be powered either by:
- DC (VIN/GND) terminals
- Micro USB

The DC screw terminals are supporting 8 to 48&nbsp;V<sub>DC</sub>. The Micro USB port can be used to power the RAK7432/RAK7434, up to 5&nbsp;V / 500&nbsp;mA DC. At the same time, the USB port is used as the configuration port for the device. You can import your configuration settings using the Micro USB cable to connect the RAK7432/RAK7434 to a computer’s USB port.

::: tip 📝 NOTE
The Micro USB port can be used only for powering the device. It cannot provide power to VOUT and power other devices in the other connected 4-20&nbsp;mA/0-5&nbsp;V.
:::

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/2.rak7432-rak7434-bridge-with-connected-sensor-and-power-supply.png"
width="60%"
caption="RAK7432/RAK7434 bridge with connected sensor and power supply"
/>

#### Data Interface Configuration

The RAK7432/RAK7434 analog interface allows you to connect sensors with the same output. The VOUT on the data interface can supply external power to the analog sensor (only when the device is powered from the DC input). The VOUT output voltage is the same as the DC input voltage VIN.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/3.rak7432-rak7434-interface-pin-definition.png"
width="50%"
caption="RAK7432/RAK7434 interface pin definition"
/>

### Gateway Connection Settings

In this section, the **RAK7432/RAK7434 WisNode Bridge Analog** will be connected to the RAKwireless LoRaWAN Gateway. For this demonstration, a [RAK7289 WisGate Edge Pro V2](https://store.rakwireless.com/products/wisgate-edge-pro-rak7289v2-rak7289cv2?utm_source=WisGateRAK7289V2&utm_medium=Document&utm_campaign=BuyFromStore) gateway will be used. Listed below are the prerequisites for this section.

* [RAK Serial Port Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) - Used to configure and set up the RAK7432/RAK78434 WisNode Bridge Analog.
* [Documentation](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7289-V2/Quickstart/#prerequisites) – A guide on how to configure RAK7289 WisGate Edge Pro V2.

#### Gateway Configuration

##### Set Up the Built-in Network Server

1. Start by accessing the gateway. You can see how to do it on the [WisGateOS V2 user manual](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#overview).

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/4.wisgateos-v2-login-page.png"
width="100%"
caption="WisGateOS V2 login page"
/>

2. Once logged in, head to the **LoRa** menu.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/5.lora-page.png"
width="100%"
caption="LoRa page"
/>

3. By default, the gateway works as a Built-In Network server. If that is not the case, check the [Built-in Network Server Mode Settings](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#lora) on the WisGateOS V2 User manual to switch the mode to Built-in network server.

##### Adding Application

1. Once the gateway is in Built-in network server mode, head to the **Applications** tab.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/6.application-page.png"
width="100%"
caption="Application page"
/>

2. Click the **Add application** button or **add one now** link to add a new application. On the new page fill in the following information.

- **Application name** - type a name for the application.
- **Application description** - optionally you can write a description of the application.
- **Application Type** - from the drop-down menu select the type of application.
- **Unified Application key** - all devices will use the same application key. Selecting this option pops up an **Application Key** field. You can type your application key there or use the **Autogenerate** button to generate one.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/7.unified-application-key.png"
width="45%"
caption="Unified application key"
/>

The **Auto Add Device** switch activates an **Application EUI** field. The device will be automatically added to the application after the application EUI and key verification.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/8.auto-add-device.png"
width="45%"
caption="Auto add device"
/>

- **Separate Application keys** – each device will have its own application key. The key is added when registering the device.
- **Payload type** - from the drop-down select **CayenneLPP** payload type and turn on the **Only forward data object** feature.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/9.adding-application.png"
width="100%"
caption="Adding application"
/>

3. Once this is set, click **Save Application** to add the application.
4. After the application is added, head to the **End devices** tab. The devices should automatically register upon join request if you are using the Auto Add Device feature.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/10.successfully-added-end-device.png"
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
src="/assets/images/wisnode/rak7432-rak7434/quickstart/11.adding-abp-device.png"
width="40%"
caption="Adding ABP device"
/>

- **End device (group) name** – the name of the device.
- **End device description (optional)** – optionally, you can add a description for the device.
- **Class** – the class of the device.
- **Frame Counter width** – the width of the frame counter. Leave it as default.
- **LoRaWAN MAC Version** – the LoRaWAN MAC version. V1.0.2 pops up a **LoRaWAN Regional Parameters reversion** field where you need to select the reversion of the device.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/12.successfully-created-application.png"
width="100%"
caption="Successfully created application"
/>

##### Adding the Device

1. Once everything is set, click **Add end devices** to go to the page and add the device.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/13.adding-end-device.png"
width="100%"
caption="Adding end device"
/>

2. In the **Adding end devices** page, type the device EUI at the **End Device EUI (main)** and click **Add to “End Devices list”**. If the EUI is correct, the device will show in the **End devices list**. If the EUI is not correct, the devices will show in the **End devices with an error**.
3. Once the device is added to the **End devices list** click **Add end devices**. Confirm you are adding the device.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/14.confirmation-message-for-adding-a-device.png"
width="50%"
caption="Confirmation message for adding a device"
/>

#### RAK7432/RAK7434 Configuration

##### Connect the RAK7432/RAK7434 to Your Network

1.  Connect the RAK7432/RAK7434 to a computer using the Micro USB cable.
2.  Open the RAK Serial Tool and select the correct COM port. The default baud rate is **115200**.
3.  After selecting, press **Open**.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/15.rak-serial-tool.png"
width="35%"
caption="RAK Serial tool"
/>

4. Run the following commands:

- To set up the Device EUI, run the command:

  ```
  AT+DEVEUI=<Device EUI>
  ```

- To check the Device EUI, run the command:

```
AT+DEVEUI
```

- To set up the Application EUI, run the command:

```
AT+APPEUI=<application EUI>
```

- To set up the Application Key, run the command:

```
AT+APPKEY=<application Key>
```

- To check the previously configured Application EUI and Key, run the commands:

```
AT+APPEUI
```

```
AT+APPKEY
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/16.configuring-the-rak7432-rak7434.png"
width="35%"
caption="Configuring the RAK7432/RAK7434"
/>

##### Set the Frequency Region

The node supports the following Regional Frequencies:

- EU433
- CN470
- CN470
- RU864
- IN865
- EU868
- US915
- AU915
- KR920
- AS923

For this demonstration, EU868 will be used. To set the desired regional frequency band, use the command:

```
AT+REGION=EU868
```

::: tip 📝 NOTE
The regional frequency settings need to be consistent with the RAK commercial gateway-supported band.
:::

##### Operating and Activation Mode Settings

1. Supported operating modes are three: **Class A**, **Class B**,and **Class C**. To set the operating mode (Class C in this case), you need to execute the AT command:

```
AT+CLASS=C
```

::: tip 📝 NOTE
Changes will take effect as soon as they are made.
:::

2. Activation mode supports the following two modes: **ABP** and **OTAA**. To set the activation mode (OTAA in this case), you need to execute the AT command:

```
AT+JOINMODE=OTAA
```

3. **Restart** is needed for the modification to take effect. To restart the RAK7432/RAK7434, execute the command:

```
AT+RESTART
```

4. If everything is configured right, after the execution of the restart command this output pops up in the RAK Serial Tool:

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/17.rak7432-rak7434-successful-join.png"
width="35%"
caption="RAK7432/RAK7434 successful join"
/>

### Connecting to The Things Network V3 (TTNv3)

At The Things Conference 2021, it was announced that **The Things Network** is upgrading to The Things Stack v3.

This section will show how to connect RAK7432/RAK7434 WisNode Bridge Analog to The Things Stack v3.

First, log in to TTNv3. To do so, head to the [TTNv3 site](https://eu1.cloud.thethings.network/console). If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/18.the-things-network-home-page.png"
width="100%"
caption="The Things Network home page"
/>

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/19.the-console-page-after-successful-login.png"
width="100%"
caption="The console page after successful login"
/>

::: tip 📝 NOTE
To be able to connect RAK7432/RAK7434 WisNode Bridge Analog to TTNv3 you should already have connected a gateway in range to TTNv2 or TTNv3, or you have to be sure that you are in the range of a public gateway.
:::

#### Adding an Application

::: tip 📝 NOTE
This tutorial is for the EU868 Frequency band.
:::

1. To create an application, choose **Create an application** (for new users that do not already have created applications) or **Go to applications** > **+ Add application** (for users that have created applications before).

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/20.create-an-application.png"
width="100%"
caption="Create an application"
/>

2. Fill in the needed information:

- **Owner** - Automatically filled by The Things Stack, based on your account or created Organization.
- **Application ID** - This will be the unique ID of your application in the Network. Note that the ID must contain only lowercase letters, numbers, and dashes (-).
- **Application name** (optional) - This is the name of your application.
- **Description** (optional) – Description of your application. Optional application description; can also be used to save notes about the application.

3. After you fill in the information, click **Create application**. If everything is filled in correctly, you will see the same page, as shown in **Figure 21**.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/21.application-overview.png"
width="100%"
caption="Application overview"
/>

#### Registering and Configuring the Device In OTAA Mode

##### Registering the Device in OTAA Mode

1. From the Application Overview page, click **+ Register end device**.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/22.adding-a-device-in-otaa-mode.png"
width="100%"
caption="Adding a device in OTAA mode"
/>

2. Select **Enter device specifics manually** and fill in the **Frequency plan**.
3.  Select LoRaWAN version 1.0.3 and fill in the JoinEUI (AppEUI).

::: tip 📝 NOTE
For this example, the Europe 863-870&nbsp;MHz (SF9 for RX2 - recommended) plan is chosen.
:::

4. For the **JoinEUI**, the AppEUI uniquely identifies the owner of the end device. It is provided by the device manufacturer. To get the AppEUI, connect your device via a USB cable to your computer. Open RAK Serial Port Tool, choose the correct COM port and BaudRate, and run the following command:

```
AT+APPEUI
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/23.appeui-of-the-device.png"
width="75%"
caption="AppEUI of the device"
/>

5. Press the **Confirm** button next to the **JoinEUI** field.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/24.registering-the-device.png"
width="100%"
caption="Registering the device"
/>

6. The **Provisioning information** section will expand. Scroll down to enter the required data for the device.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/25.registration-data.png"
width="60%"
caption="Registration Data"
/>

Here you must enter the following information:

- **DevEUI** - The DevEUI is the unique identifier for this end device. It is provided by the manufacturer and is printed on the label on the back of the device.
- **AppKey** - The root key to deriving session keys to secure communication between the end device and the application. AppKey can be generated by clicking the **Generate** button ![name](/assets/images/wisnode/rak7432-rak7434/quickstart/0.png).
- **End device ID** – The End device ID is automatically filled based on the DevEUI. It can be changed. Note that the end device ID must contain only lowercase letters, numbers, and dashes (-).

::: tip 📝 NOTE
If you are going to register more than one device of this type, you can choose the option **Register another end device of this type** and be transferred to the same page to register the next device.
:::

7. After filling in the registration information, click **Register end device**.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/26.registered-device.png"
width="100%"
caption="Registered device"
/>

##### Configuring the Device in OTAA Mode

1. For configuring the node you will need the following three parameters: **Device EUI**, **Application EUI**, and **Application Key**. You can see them all on the **Device Overview** page, but since the two EUIs come with the device, you only need the Application Key from there.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/27.otaa-device-parameters.png"
width="100%"
caption="OTAA device parameters"
/>

2. Using the RAK Serial Port Tool, set the join mode, device class, and your LoRaWAN region to your correct frequency band, with the following set of AT commands:

- For the join mode (OTAA)

  ```
  AT+JOINMODE=OTAA
  ```

- For the class (Supported classes are: Class A, Class B, and Class C. Remember for different classes to change the command with the correct letter, for example for Class B it will be AT+CLASS=B, in this case, it is Class A.)

```
AT+CLASS=A
```

- For the region, replace the **frequency band** with the one of your LoRaWAN region. Refer to the [TTN site](https://www.thethingsnetwork.org/docs/lorawan/frequency-plans/) to see more about your frequency plan.

```
AT+REGION=EU868
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/28.setting-up-the-rak7432-rak7434-operating-modes.png"
width="75%"
caption="Setting up the RAK7432/RAK7434 operating modes"
/>

::: tip 📝 NOTE
The following tutorial is based on using the EU868 frequency band.
:::

3. Now that those parameters are set, enter the **App Key**, using the command below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case.

```
AT+APPKEY=XXXX
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/29.setting-up-the-rak7432-rak7434-otaa-parameters.png"
width="75%"
caption="Setting up the RAK7432/RAK7434 OTAA parameters"
/>

4. To connect to the LoRaWAN Network after configuration, the device must be restarted. Restart it with the command:

```
AT+RESTART
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/30.joining-the-network-configuration.png"
width="75%"
caption="Joining the network configuration"
/>

5. You can see in the **Live data** feed that the RAK7432/RAK7434 WisNode Bridge Analog is successfully joined.

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/31.receiving-data-in-the-live-data-feed.png"
width="100%"
caption="Receiving data in the Live data feed"
/>

##### **Configuring the Analog Interface**

Modifying the following values is not necessary but depends on the use case you need.

1. Let’s set the AINPERIOD. This value determines the acquisition reporting period. The default value is 600 s. Now we are going to set it to 100 s:

```
AT+AINPERIOD=100
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/32.ainperiod-command-execution.png"
width="35%"
caption="AINPERIOD command execution"
/>

2. The next step is to change the value range (the minimum and maximum value) of the analog interface data.

```
AT+AINVALUERANGE=1:-150:150
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/33.ainvaluerange-command-execution.png"
width="35%"
caption="AINVALUERANGE command execution"
/>

3. AINLPMODE (Low power mode) will also need to be changed. Enabling this value will allow the analog data input interface to be turned off while the device is in AINPERIOD (while no acquisition is initiated).

```
AT+AINLPMODE=1
```

<rk-img
src="/assets/images/wisnode/rak7432-rak7434/quickstart/34.ainlpmode-command-execution.png"
width="35%"
caption="AINLPMODE command execution"
/>
