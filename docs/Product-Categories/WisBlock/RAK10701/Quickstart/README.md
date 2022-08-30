---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK10701 Field Tester for LoRaWAN. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisblock/rak10701/overview/RAK10701-buy.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - Field Tester for LoRaWAN
  - quickstart
  - wisblock
---

# RAK10701 WisBlock Field Tester for LoRaWAN Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step in the installation guide of the RAK10701 WisBlock Field Tester for LoRaWAN, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. **RAK10701 WisBlock Field Tester for LoRaWAN**
2. LoRa SubGhz Antenna with RP-SMA connector
3. USB Type-C Cable
4. Windows/Linux/macOS for PC or iOS/Android for mobile

#### Software Tools

[WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) for configuration and firmware update.

## Product Configuration

### Turning on the RAK10701 WisBlock Field Tester

The main interface of the RAK10701 WisBlock Field Tester is via TFT Touchscreen LCD.

:::tip 📝 NOTE:
You have to ensure that the LoRa antenna is attached before turning on the device.
:::

1. To turn on the device, you have to touch any two points on the touchscreen LCD simultaneously for at least a second. This will initiate the boot up of the field tester.

2. When the device initializes, it will show the RAK logo on the screen. If there is any initialization error, it will be shown on the screen as well.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-boot-ok.png"
  width="35%"
  caption="RAK10701 power up successful"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-boot-fail.png"
  width="35%"
  caption="Power up indicator showing GPS initialization error"
/>

3. After the successful boot up, the main home screen will be shown. Take note, that there will be no data at the first start of the device RAK10701 field tester. 

:::tip 📝 NOTE:
There will be no GPS data if there is no satellite fix. It must be outside and have a clear view of the sky. The GPS antenna is located on top of the device beside the RP-SMA connector of the LoRa Antenna.

If you are indoors, there will be no reception of the GPS signal. The latitude and longitude data will be empty.
:::

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-home.png"
  width="35%"
  caption="RAK10701 Main Page with valid data"
/>

### Using Field Tester with The Things Network V3 (TTS)

This section shows how to use the RAK10701 Field Tester to The Things Stack. 

1. First, log in to TTNv3. To do so, head to the TTNv3 [site](https://console.cloud.thethings.network/) and select your cluster. If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/image001.png"
  width="100%"
  caption="The Things Stack home page"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/image002.png"
  width="100%"
  caption="Console page after a successful login"
/>


:::tip 📝 NOTE:
- To connect RAK10701 Field Tester to TTNv3, you should already have connected a gateway in range to TTNv3. Or, you have to be sure that you are in the range of a public gateway. 
:::

#### Creating Application to On-Board the RAK10701 Field Tester to TTN.

2. Now that you are logged in to the platform, the next step is to create an application. In your console, click **Create an application**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-1.png"
  width="100%"
  caption="Create an application"
/>

3. To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-2.png"
  width="100%"
  caption="Creating an Application"
/>

4. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**. 

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-3.png"
  width="100%"
  caption="Add end-devices to your TTN application"
/>

5. To register the RAK10701 Field Tester, you need to click **Manually** first.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-4.png"
  width="100%"
  caption="Adding end devices manually"
/>

6. Choose the following configurations in adding the end devices. You must choose the correct Frequency Plan and the LoRaWAN version must be 1.0.3.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-5.png"
  width="100%"
  caption="Configurations for adding end devices"
/>

7.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select **Over the air action** (OTAA). 

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-6.png"
  width="100%"
  caption="OTAA settings"
/>

8. Then input the LoRaWAN OTAA parameters. For **AppEUI**, you may click **Fill with Zeros**. For **AppKey** and **DevEUI**, you can click **Generate**. Then the parameters will be automatically filled by the TTS platform. Finally, click **Register End Device**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-7.png"
  width="100%"
  caption="Registering the end device"
/>

9. You should now be able to see the device on the TTN console after you fully register your device. Take note of these OTAA parameters, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the configuration of the RAK10701 Field Tester hardware later on in this guide.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK4631-TTNV3-8.png"
  width="100%"
  caption="OTAA device successfully registered to TTN"
/>

10. After adding the device to the LoRaWAN application, link it to the backend server. The first step is to create an API key.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-API-icon.png"
  width="100%"
  caption="Creating API key"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-API-add.png"
  width="100%"
  caption="Creating API key"
/>

11. Configure the API key parameters. You can put any names that will easily track your API. You have to set the expiration date as well. Then you must check `Write downlink application traffic`. After the configuration, you can now click `Create API key`.
 
<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-API-info.png"
  width="95%"
  caption="API key parameters"
/>

12. This step is critical. You need to copy the API key because this will be used on Webhook integration.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-API-key-copy.png"
  width="70%"
  caption="Copy API key"
/>

13. With the API key created, you can proceed with creating the Webhook integration.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-Webhook.png"
  width="100%"
  caption="Webhook Integration"
/>

14. Select **Custom Webhook**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-Webhook-custom.png"
  width="100%"
  caption="Custom Webhook"
/>

15. Configure the necessary parameters on the Webhook. You can select any name for the webhook. You then need to set the base URL going to disk19 server `https://dev.disk91.com/fieldtester/ttn/v3`, add the API key from the previous step and lastly put a check on the `Uplink message` under **Enabled event types**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-Webhook-configuration.png"
  width="90%"
  caption="Webhook parameters"
/>

16. After setting all the configurations, you can now add the webhook.
<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-Webhook-add.png"
  width="100%"
  caption="Add Webhook"
/>

17. You should see now the newly created webhook.
<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/RAK10701-Webhook-list.png"
  width="100%"
  caption="Add Webhook"
/>

18. After adding the application, device, and webhook integration to the console, you have to configure the parameters in your device to match the parameters on the TTN console. You can use [WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) via USB connection or wirelessly via BLE. You also have the option to update device parameters directly via [RUI3 AT Commands](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#lorawan-keys-and-ids).


#### Configure RAK10701 via WisToolBox

19. Connect the RAK10701 to the PC via USB Type-C cable and open the WisToolBox application. You can find more info on how to install and use the [WisToolbox from its documentation](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/).

20. Click the **CONNECT DEVICE** button to launch WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-connect.png"
  width="85%"
  caption="WisToolBox Desktop splash screen"
/>

21. Review the **Connection settings** parameters on the dashboard, then click on the **CONNECT** button.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-connect-settings.png"
  width="85%"
  caption="WisToolBox Desktop connection settings"
/>

22. On the WisToolBox Dashboard screen, select the RAK4630 module. This is the module inside the RAK10701 Field Tester device.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-module.png"
  width="85%"
  caption="Detected module by WisToolBox"
/>

23. You can now update the APPEUI, DEVEUI, and APPKEY. It must be the same as the parameters you have in the TTN console configured in step 8. Then you can click **APPLY COMMANDS**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-parameters.png"
  width="85%"
  caption="Changing device parameters"
/>

:::tip 📝 NOTE:
These are the only parameters that you need to change via WisToolBox. Other configurations like frequency plan, the interval of uplinks, TX power, and data rate can be done on the touchscreen of RAK10701.
:::

24. You will see the summary of commands that was applied successfully. If the update is unsuccessful, just resend the needed changes. After the successful update, click the **CLOSE** button to return to Dashboard. 

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-config-success.png"
  width="85%"
  caption="Successful update of parameters"
/>

25. You can now remove the USB Type-C cable and proceed to the screen of RAK10701. You can click the settings icon and then update the frequency plan, the interval of uplinks, TX power, and data rate as needed. You can use the arrows for navigation and click `OK` to save changes.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-settings-nogateway.png"
  width="35%"
  caption="RAK10701 settings menu"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-settings-config-modify.png"
  width="35%"
  caption="RAK10701 parameters update"
/>

26. After updating the settings, you can reset the module so it will create a new join request.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-power-nogateway.png"
  width="35%"
  caption="RAK10701 parameters update"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-powerbutton-reset.png"
  width="35%"
  caption="RAK10701 parameters update"
/>

27. After a successful uplink and downlink from the backend server, you should now have updated information from the RAK10701 field tester. You can also access the [plot of different parameters](/Product-Categories/WisBlock/RAK10701/Quickstart/#data-plots) on its respective pages.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-home.png"
  width="35%"
  caption="RAK10701 main page with valid data"
/>


### Miscellaneous

This part of the guide shows the Field Tester interface and how to update the firmware.

- [User Interface](/Product-Categories/WisBlock/RAK10701/Quickstart/#field-tester-display-interface)
- [Firmware Update](/Product-Categories/WisBlock/RAK10701/Quickstart/#upgrading-the-firmware)

#### Field Tester Display Interface 

This section discusses the interfaces on the LCD of the device as well as its pages.

##### Display Status and Indicator

The RAK10701 WisBlock Field Tester has status indicators that show the current state of the device.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-status.png"
  width="35%"
  caption="Device status and indicator"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-status-indicator.png"
  width="35%"
  caption="Different device status"
/>

**Status:**

- **IDLE**: RAK10701 Field Tester state is in between the previous uplink and the next uplink. The duration of IDLE depends on the interval configured on the device.
- **JOINING**: RAK10701 Field Tester is trying to join the network. This status is triggered when a Join request is sent.
- **JOINED**: RAK10701 Field Tester successfully received the Join accept the packet. This status will be displayed until refreshed when new data is sent.
- **FAILED**: RAK10701 Field Tester failed to join the network. Triggered by receive timeout. There might be no available gateway reachable by the Field Tester.
- **SENDING**: RAK10701 Field Tester's data such as GPS is being uploaded via an uplink. It will be displayed until the reception is completed or timed out.

**Transmit indicator:** 
- **GREEN** circle: ACK received successfully, indicating successful transmission.
- **RED** circle: ACK reception timed out, indicating that the transmission failed.

##### Settings

The field tester has configurable parameters: Band, TX power, TX interval, backlight intensity, and DR. You can navigate the settings using the arrow widgets plus the back and ok buttons.
The OTAA parameters APPEUI, DEVEUI, and APPKEY are also displayed but can't be changed on the touchscreen. WisToolBox or other Serial Port terminal tool is needed to send the AT commands to update the EUIs and key.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-settings.png"
  width="35%"
  caption="Settings button"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-settings-config.png"
  width="35%"
  caption="Settings page"
/>

##### Power Icon

The power icon of the field tester has four buttons: power off, restart, sleep display, and lock display.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-powerbutton-icon.png"
  width="35%"
  caption="Power button"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-powerbutton.png"
  width="35%"
  caption="Power button options: POWER OFF, RESTART, SLEEP DISPLAY, and LOCK DISPLAY"
/>

##### Data Plots

There are four different data plots on the field tester: **number of gateways**, **RSSI**, **SNR**, and **approximate distance**. These graphs are accessible by touching the respective icons assigned to the parameter.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-plots.png"
  width="35%"
  caption="Accessing different data plots"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-distance.png"
  width="35%"
  caption="Distance plot"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-rssi.png"
  width="35%"
  caption="RSSI plot"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-snr.png"
  width="35%"
  caption="SNR plot"
/>

##### GPS Data

The main page shows the last GPS data captured by the device.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-gps-icon.png"
  width="35%"
  caption="GPS display"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/lcd-gps-data.png"
  width="35%"
  caption="GPS data"
/>


#### Upgrading the Firmware

It is recommended to update to the latest version of the firmware. To do this, download the latest [RAK10701 WisBlock Field Tester firmware](/Product-Categories/WisBlock/RAK10701/Datasheet/#software) and use the WisToolBox to update the custom firmware.

1. Drag the downloaded firmware to the WisToolBox custom firmware section. 
<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-firmware.png"
  width="85%"
  caption="WisToolBox firmware"
/>

2. After the firmware file is uploaded to the application, you can now select **UPGRADE DEVICE**.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-firmware-upgrade.png"
  width="85%"
  caption="Upload the latest firmware"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-firmware-upgrade2.png"
  width="85%"
  caption="Confirm upgrading of firmware"
/>

3. If all proceed with no error, you should see `Firmware update successful` notification, and the RAK10701 will restart automatically.

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-firmware-upgrade3.png"
  width="85%"
  caption="Ongoing upgrading of firmware"
/>

<rk-img
  src="/assets/images/wisblock/rak10701/quickstart/wistoolbox-firmware-successful.png"
  width="85%"
  caption="Successful upload of latest firmware"
/>