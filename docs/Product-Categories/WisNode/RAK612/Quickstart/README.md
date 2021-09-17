---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK612. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak612/quickstart/main/RAK612_home.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK612
  - quickstart
  - wisnode
---

# RAK612 Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wisnode/rak612/quickstart/quick-start-guide/rak612-overview.jpg"
  width="50%"
  caption="RAK612 WisNode Button"
/>
-->

### What do you need?

1. **RAK612 WisNode Button**
2. Micro USB Cable
3. Gateway in Range for Testing
4. A Windows PC


:::tip 📝 NOTE
This device released by RAKWireless is already pre-loaded with its latest firmware upon manufacture. If you want to have your device's firmware burned or upgraded, please refer to the section below:
* [Upgrading the Firmware](#upgrading-the-firmware)
:::

## Product Configuration

### Interfacing with RAK612 WisNode Button

In order for you to be able to interface with the RAK612 WisNode Button with your Windows Machine, you need to download the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).

1. Using a standard **Micro - USB Cable**, connect your RAK612 WisNode Button to your computer.

:::tip 📝 NOTE
If this is your first time to connect your RAK612 WisNode Button to your computer, it should automatically download the CH340 driver in order for them to communicate properly. Make sure to have an internet access if you want such automatic installation to be successful. If such process fails, re-plug your Micro - USB cord and proceed to the next step."
:::

2. Go to your **Device Manager** by pressing : **Windows + R** and type `devmgmt.msc` or **search in Start Menu** or right click "**My Computer**" or "**This PC**" and click **Manage**. Look for **Other Devices.**

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/missing-driver.png"
  width="100%"
  caption="Missing Driver for the RAK612 WisNode Button"
/>

3. Under "**Other devices**" drop down list, an unknown **USB2.0-Serial** driver must appear. Right click into it and choose "**Search automatically for updated driver software**". Again, before doing so, make sure to have an internet access or it will fail.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/automatic-install.png"
  width="100%"
  caption="Automatic Driver Installation via Internet"
/>

4. Wait for it to automatically download and install the missing driver. Once installation is done, "**USB-SERIAL CH340**" must appear in the **Ports (COM & LPT)** drop down list. Take note of the COM Port associated with the driver as it will be used in the succeeding steps. For this sample process, the COM Port used by the USB-SERIAL CH340 driver is **COM4**.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/usb-ch340.png"
  width="100%"
  caption="USB-SERIAL CH340 Driver Successfully Installed"
/>

:::tip 📝 NOTE
In case the driver is still not installed upon doing the previous steps, kindly download the driver manually through this [link](https://downloads.rakwireless.com/LoRa/RAK811/Tools/).
:::

5. Let us now test if your RAK612 WisNode Button can now communicate with the RAK Serial Port Tool. Connect with the RAK Serial Port Tool using the parameters listed below and click "**Open**".

   - **COM**: Choose the COMPort associated with the USB-SERIAL CH340 from the previous step. For this tutorial, the COM Port is COM4.
   - **Baud Rate**: **115200** bps

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/rak-serial.png"
  width="90%"
  caption="Connecting to the RAK Serial Port Tool"
/>

6. To verify connectivity, let's try sending AT Commands. In the RAK Serial Port Tool, there are built-in AT Commands within it at the right side. Try sending the code below to check the firmware version of your RAK612 WisNode Button. If connection is successful, in the monitor panel at the left, the firmware version should appear same with the image shown below:

```sh
at+version
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/interfacing-with-rak612/at-comm.png"
  width="90%"
  caption="AT Command Sample Serial Communication Test"
/>

Congratulations! :tada: You have just successfully interfaced your RAK612 WisNode Button with your computer!

### Connecting to The Things Network (TTN)

In this section, we will be connecting the RAK612 WisNode Button to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/ttn-homepage.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/ttn-application.png"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/add-application.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

- After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/application-overview.png"
  width="100%"
  caption="Adding an Application"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device"**

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/add-device.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK612 WisNode Button in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/device-overview.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the **OTAA mode** or **ABP mode** section.

#### OTAA Mode

According to **The Things Network, Over-the-Air Activation** (OTAA) is the preferred and most secure way to connect with The Things Network. Thus, it is chosen as the default method when registering a device.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/otaa-activation.png"
  width="100%"
  caption="Activation Method - OTAA"
/>

:::tip 📝 NOTE
As an example, let's join in OTAA mode and EU868 frequency.
:::

1. Set the LoRa join mode to **OTAA** as follows:

```sh
at+set_config=join_mode:1
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-join-otaa.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Join Mode via RAK Serial Port Tool"
/>

2. Set the frequency/region to **EU868**:

```sh
at+band=EU868
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-region-otaa.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Region/Frequency via RAK Serial Port Tool"
/>

3. Set the **Device EUI.**

```sh
at+set_config=dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-eui-otaa.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Device EUI via RAK Serial Port Tool"
/>

4. Set the **Application EUI**:

```sh
at+set_config=app_eui:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-appeui-otaa.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Application EUI via RAK Serial Port Tool"
/>

5. Set the **Application Key**:

```sh
at+set_config=app_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-appkey-otaa.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Application Key via RAK Serial Port Tool"
/>

:::tip 📝 NOTE
After configuring all the parameters, you need to reset your RAK612 WisNode Button for saving parameters.
:::

6. After resetting RAK612 WisNode Button, join in OTAA mode:

```sh
at+join=otaa
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/otaa-join.jpg"
  width="45%"
  caption="AT Command for OTAA LoRa Join via RAK Serial Port Tool"
/>

7. Joined successfully! Now, let’s try to send a data to TTN. Try pressing any key on your RAK612 WisNode Button. You should see any data printed in the RAK Serial Port Tool whenever you press any key same as with the image below:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/otaa-senddata.jpg"
  width="45%"
  caption="Testing the RAK612 WisNode Button in RAK Serial Port Tool"
/>

* You can then see the data sent from RAK612 WisNode Button in TTN website as follows:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/otaa-ttn-received.jpg"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

#### ABP Mode

Follow these steps, if you want to join with The Things Network in **Activation By Personalisation** (ABP) Mode.

1. First, switch the activation method to ABP as shown in the following image

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-ttn.png"
  width="100%"
  caption="APB Activation in The Things Network"
/>

2. These three parameters will be used on RAK612 WisNode Button: **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-param.png"
  width="100%"
  caption="ABP Parameters in The Things Network"
/>

:::tip 📝 NOTE
As an example, let's join in ABP mode and EU868 frequency.
:::

3. If the join mode is not in ABP Mode, just set the LoRa join mode to **ABP** as follows:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-lora-join.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Join Mode via RAK Serial Port Tool"
/>

4. Set the frequency/region to **EU868**:

```sh
at+band=EU868
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/lora-region-otaa.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Region/Frequency via RAK Serial Port Tool"
/>

5. Set the **Device Address**:

```sh
at+set_config=dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-devaddr.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Device Address via RAK Serial Port Tool"
/>

6. Set the **Network Session Key**:

```sh
at+set_config=nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-nwkskey.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Network Session Key via RAK Serial Port Tool"
/>

7. Set the **Application Session Key**:

```sh
at+set_config=apps_key:XXXX
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-appskey.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Application Session Key via RAK Serial Port Tool"
/>

:::tip 📝 NOTE
After configuring all parameters, you need to reset the RAK612 WisNode Button for saving parameters.
:::

8. After resetting your RAK612 WisNode Button, join in **ABP mode**:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-join.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Join via RAK Serial Port Tool"
/>

9. Joined successfully! Now, let’s try to send a data to TTN. Try pressing any key on your RAK612 WisNode Button. You should see any data printed in the RAK Serial Port Tool whenever you press any key same as with the image below:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/abp-send-data.jpg"
  width="45%"
  caption="Testing the RAK612 WisNode Button in RAK Serial Port Tool"
/>

- You can then see the data sent from RAK612 WisNode Button in TTN website as follows:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/ttn/ttn-abp-received.jpg"
  width="100%"
  caption="ABP Test Sample Data Sent Viewed in The Things Network"
/>

### Key Functions Customizing

This section walks through the step-by-step discussion on how to customize each key functions of the RAK612 WisNode Button. For you to enable the message customization, you must at least have the 2.0.2.1.2 firmware version. 

:::tip 📝 NOTE
If your RAK612 WisNode Button's firmware version is lower than the least version set, please download the latest [RAK612 WisNode Button Firmware](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Firmware/) and proceed to the [Upgrading the Firmware](#upgrading-the-firmware) section.
:::

#### Defaults

Listed below are the default messages send by the RAK612 WisNode Button whenever each key is pressed:

| Key   | Message |
| ----- | ------- |
| Key 1 | "Key 1" |
| Key 2 | "Key 2" |
| Key 3 | "Key 3" |
| Key 4 | "Key 4" |


#### Customizing

To fully customize the messages sent by the RAK612 WisNode Button in each key pressed, we must configure it using the [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip) with the AT Command below:

```sh
at+key_config=<key>,<frame_port>,<message>
```

- **key** - The key you want to customize in your  RAK612 WisNode Button
- **frame_port** - the port you want to send the customized message
- **message** - your customized message in replacement of your default message in every key pressed.

1. **Connect** your RAK612 WisNode Button to your Windows PC using a Micro USB cable. Follow the steps in the [Interfacing with RAK612 WisNode Button](#interfacing-with-rak612-wisnode-button) section if this is the first time you are connecting the device into your WIndows PC. 

2. Using the same RAK Serial Port Tool used in the previous step and the AT Command syntax, let us try configuring your RAK612 WisNode Button keys. As an example, try sending the AT Command same with the image shown below:

```sh
at+key_config=2,37,Hello Mark Angelo!
```

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/key-function-customizing/at-command.png"
  width="45%"
  caption="Configuring Each button"
/>

* You should be able to change the message to "**Hello Mark Angelo!**" whenever you press the key "**Key 2**". Congratulations, you have just customized your RAK612 WisNode Button keys. Go try the other keys with your desired message!

## Miscellaneous

### Upgrading the Firmware

Please use the the latest firmware for the RAK612 WisNode Button in order to avoid potential problems. Installing the firmware for is done as follows:

1. Download the [RAK LoRaButton Upgrade tool](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Tools/) and the latest [firmware](https://downloads.rakwireless.com/LoRa/RAK612-LoRaButton/Firmware/) for the RAK612 WisNode Button.

2. Connect your RAK612 WisNode Button to your PC using the micro-USB cable.

3. Press and Hold Key 1 and Key 2 simultaneously for more than 5 seconds until you see all of the LEDs blink very fast. This will set the LPWAN Button in **boot mode**.

4. Open the RAK LPWAN Button Upgrade tool.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/upgrade-tool.png"
  width="75%"
  caption="RAK LPWAN Button Upgrade Tool"
/>

5. Choose the appropriate port number in the **COM Port** field. Open [Interfacing with RAK612 WisNode Button](#interfacing-with-rak612-wisnode-button) section to learn on how to choose the appropriate COM Port used. For this demonstration, the COM Port is "**COM3**".

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/select-com-port.png"
  width="75%"
  caption="Select the Appropriate COM Port"
/>

6. Click **Choose File** and navigate to the directory where you have saved the firmware, that you have just downloaded.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/choosing-the-firmware.png"
  width="75%"
  caption="Choosing the Firmware"
/>

7. Click the **Start** Button and wait for a couple of minutes.

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/start-flashing.png"
  width="75%"
  caption="Start Flashing the Firmware"
/>

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/upgrade-success.png"
  width="75%"
  caption="Upgrade Firmware Success"
/>

#### Testing the Installed Firmware 

1. In order for you to check if you have successfully installed the firmware on your RAK612 WisNode Button, open the RAK Serial Port tool on your PC. 

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/serial-port.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

* **COM Port** - this is where you choose the COM Port of your RAK612 WisNode Button. 
* **Baudrate** - the rate, at which information is transferred. (Use **115200** for RAK612 WisNode Button).
* **Receiving** - this is where all the responses of your AT Commands will be displayed. 
* **Sending** - this is where you input your AT Command.
* **Command** - this is where you save all of your AT Commands for quick reuse. This is very useful in the [AT Commands for RAK612 WisNode Button](../AT-Command-Manual) section.

2. Choose the appropriate COM Port and Baud Rate for your RAK612 WisNode Button then click the **Open** button to open the serial port.
3. Hold any key of the RAK612 WisNode Button for more than 5 seconds and then you will be able to see the following information:

<rk-img
  src="/assets/images/wisnode/rak612/quickstart/firmware-upgrade/lpwan-upgrade-success.jpg"
  width="40%"
  caption="RAK612 WisNode Button Upgraded Firmware"
/>





