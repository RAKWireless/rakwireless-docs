---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK10701-L Field Tester for LoRaWAN. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak10701/overview/RAK10701-l-buy.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - Field Tester for LoRaWAN
  - quickstart
  - wisblock
---

# RAK10701-L Field Tester for LoRaWAN Quick Start Guide

The Field Tester is an inexpensive tool used to map the coverage of LoRaWAN gateways to ensure that LoRaWAN nodes can connect and send data.

It does this by sending out uplink packets then a backend server is checking which gateways receive this payload. Using the Field Tester location data and the gateways' locations, the backend then calculates an average distance and submits the min and max RSSI plus SNR values of the receiving gateways. This data is then shown on the Field Testers touch screen display.

The backend server can be a dedicated server, but it can be implemented as well using platforms like Datacake.

## Prerequisites

### What Do You Need?

Before going through each and every step in the installation guide of the RAK10701-L Field Tester for LoRaWAN, make sure to prepare the necessary items listed below:

#### Hardware Tools

1. **RAK10701-L Field Tester for LoRaWAN**
2. LoRa SubGhz Antenna with RP-SMA connector
3. USB Type-C Cable
4. Windows/Linux/macOS for PC or iOS/Android for mobile

#### Software Tools

[WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) for configuration and firmware update.

:::tip 📝 NOTE:
It is mandatory that you are within the coverage of the LoRaWAN Gateway of the network you are trying to join. Without the coverage, the Field Tester will not be useable.
:::

## Product Configuration

### RAK10701-L Field Tester Physical Interface

The user interface of the RAK10701-L Field Tester for LoRaWAN is via TFT Touchscreen LCD and one pushbutton at the side. There is also an external LoRA antenna port via RP-SMA connector and USB-C port for charging and configuration if connected to a PC.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/physical-interface.png"
  width="55%"
  caption="Parts of RAK10701-L"
/>

:::tip 📝 NOTE:
You have to ensure that the LoRa antenna is attached before turning on the device.
:::

1. To turn on the device, you have to press and hold the button for at least five seconds.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/button.png"
  width="35%"
  caption="RAK10701-L button to turn on"
/>

:::tip 📝 NOTE:
The same button can be used to power off. You have to hold it as well for at least five seconds.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/power_off.png"
  width="35%"
  caption="RAK10701-L power off"
/>

:::

2. When the device initializes, it will show the RAK logo on the screen. If there is any initialization error, it will be shown on the upper right section of the screen as well. A properly working device should not have any errors shown.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/rak10701_boot.png"
  width="35%"
  caption="RAK10701-L power up successful"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/boot_unterface_error.png"
  width="35%"
  caption="GPS error on boot up sequence"
/>

3. After the successful boot up, the main home screen will be shown. Take note, that there will be no data at the first start of the device.

:::tip 📝 NOTE:
The field tester must be outside and has a clear view of the sky to get GPS coordinates. The GPS antenna is located on top of the device beside the RP-SMA connector of the LoRa Antenna.

If you are indoors, there will be no reception of the GPS signal. The latitude and longitude data will be empty.
:::

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/home_hotspot_empty.png"
  width="35%"
  caption="RAK10701-L Main Page waiting for valid data"
/>

4. Once fully powered on, the external button at the side can sleep or wake up the display on the LCD screen via a single press on it.

5. If the device is connected via USB C to a computer, then the button is pressed, it will not remove the display but will lock the screen (touch screen behavior is disabled).

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lockscreen.png"
  width="35%"
  caption="RAK10701-L locked screen"
/>

### LoRaWAN Network Servers Guide for RAK10701-L Field Tester

The field tester supports different network servers and can be used as well on others not listed in this guide as long as the uplink and downlink packets are configured correctly.

You can check each guide on how to use the RAK10701-L Field Tester for LoRaWAN in the following network servers.

- [Helium](/Product-Categories/WisNode/RAK10701-L/Quickstart/#rak10701-l-field-tester-guide-for-the-helium-network)
- [The Things Network](/Product-Categories/WisNode/RAK10701-L/Quickstart/#rak10701-l-field-tester-guide-for-the-things-network)
- [Chirpstack (with Datacake integration used as backend)](/Product-Categories/WisNode/RAK10701-L/Quickstart/#rak10701-l-field-tester-guide-for-chirpstack)

:::tip 📝 NOTE:
This section will focus on the configuration of each network server. The procedure of [Device Configuration of RAK10701-L via WisToolBox](/Product-Categories/WisNode/RAK10701-L/Quickstart/#configuration-of-rak10701-l-using-wistoolbox) is the same for all network server and will be covered in a separate section of the guide.
:::

#### RAK10701-L Field Tester Guide for the Helium Network

RAK10701-L can be manually registered to [Helium Console](https://console.helium.com/). This is a public LoRaWAN network server that you can use for your LoRaWAN end-devices powered by community-driven Helium Hotspots. This guide will show every detail of how to prepare the Helium Console for your RAK10701-L field tester.

:::tip 📝 NOTE:
This guide is based on [disk19 guide for the Field Tester](https://github.com/disk91/WioLoRaWANFieldTester/blob/master/doc/ConfigureHelium.md) configuration for the Helium Console.
:::

1. You need to register an account and then purchase data credits (DC) to use the network. If you are a new user, there are free data credits (DC) included in your new account to get you started quickly.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-login.png"
  width="100%"
  caption="Heluim Console"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-home.png"
  width="100%"
  caption="Console Home Page"
/>

2. Once you are logged in, you can start adding your device. You have two ways to add a device as shown in the image.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-device-page.png"
  width="100%"
  caption="Adding Device"
/>

3. The newly added device parameters will be shown. You have to put a device name and click save.

:::tip 📝 NOTE:
The DEVEUI, APPEUI, and APPKEY are important in this step. These values must be configured on your RAK10701-L device using WisToolBox which will be covered later in this guide.
:::

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-device-name.png"
  width="100%"
  caption="Configuring Device Name"
/>

4. The device will be added to the blockchain and it will show pending beside its name.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-pending.png"
  width="100%"
  caption="Pending Device Status"
/>

5. While waiting for the device to be added to the blockchain, you can create a `Label`. This will allow you to group your device to have a common setting. This will be needed to attach the needed integrations to the backend server of `dev.disk91.com`. You have to click the folder with the + icon and add a `Label` name then click `Save Label`. The newly created label should now be shown in the `Devices` console.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-label1.png"
  width="100%"
  caption="Add Label icon"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-label2.png"
  width="100%"
  caption="Add Label Name"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-label3.png"
  width="100%"
  caption="Label created successfully"
/>

6. Once the `Label` is created you have to associate it on the RAK10701 device. You can attach the `Label` on the device by clicking the Add Label button.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-attach-label1.png"
  width="100%"
  caption="Attach the label to the device"
/>

7. A pop-up will be shown and you have to select the correct `Label` created for RAK10701 then click **Add Label**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-attach-label2.png"
  width="30%"
  caption="Drop-down on label selection"
/>

8. After successful attachment of `Label` on the devices, it should show one (1) device is under that `Label`. The device is properly labeled which is needed for the next steps - `Integrations` and `Flow`

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-attach-label3.png"
  width="100%"
  caption="Label added on the RAK10701 device"
/>

9. To connect the backend server, you have to create an `Integration`.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-create-integration1.png"
  width="100%"
  caption="Add integration"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-create-integration2.png"
  width="100%"
  caption="HTTP integration"
/>

10. Then you must proceed to steps 2 and 3 sections of the `Integration` settings. You have to select `POST` then on the Endpoint URL, you must put `https://dev.disk91.com/fieldtester/helium/v3`. It is also needed to put the integration name before the clicking Add integration button.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-integration-details.png"
  width="100%"
  caption="Details of HTTP Integration"
/>

11. After preparing the device and the integration, you can now proceed with creating the flow to connect them. You have to click `Flows` and then the `+` icon on `NODES`.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-flow1.png"
  width="100%"
  caption="Setting up the Flows"
/>

12. You must select `Labels` and `Integrations` and then drag the correct blocks on the flows canvas.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-flow2.png"
  width="100%"
  caption="Drag the rak10701-devices label"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-flow3.png"
  width="100%"
  caption="Drag the RAK1070x_Integration"
/>

13. You then have to connect the `Label` block to the `Integration` block via the tiny connector indicated by the red arrows by using your mouse cursor and dragging the line connector.

:::tip 📝 NOTE:
There is no need to save the changes created on the flows canvas since it is automatically saved as you do changes.
:::

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-flow4.png"
  width="100%"
  caption="Connecting Labels to Integrations"
/>

14. The final step in the setting up of the Helium Console for RAK10701 is the setting up of packets. You have to click on `Packets` and then the `Add New Packet Config` icon.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-packets1.png"
  width="100%"
  caption="Creating Packets"
/>

15. You must also input a name on the `Packet Config Name`, select `Multiple Packets` and drag the slider, so it will show `All Available Packets`. Once done, you can now click on `+ Create Packet Config`.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-packets2.png"
  width="100%"
  caption="Multiple packets configuration"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-packets3.png"
  width="100%"
  caption="Successful packets creation"
/>

16. You must associate the multiple packet setup with the `rak10701-devices` label. To do this, you have to go back on `Flows`, double-click on the `rak10701-devices` label, choose the `Pakets` tab under rak10701-devices settings then enable `ALL Packets`. After this, you can now proceed with the configuration of RAK10701 using WisToolBox.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/helium-add-packets4.png"
  width="100%"
  caption="Attaching multiple packets to the rak10701-devices label"
/>

17. You can now proceed on [device configuration](/Product-Categories/WisNode/RAK10701-L/Quickstart/#configuration-of-rak10701-l-using-wistoolbox) so that the proper EUIs and KEY will match the one in the Helium network.

#### RAK10701-L Field Tester Guide for The Things Network

This section shows how to use the RAK10701-L Field Tester for LoRaWAN to The Things Stack.

1. First, log in to TTNv3. To do so, head to the TTNv3 [site](https://console.cloud.thethings.network/) and select your cluster. If you already have a TTN account, you can use your The Things ID credentials to log in.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/image001.png"
  width="100%"
  caption="The Things Stack home page"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/image002.png"
  width="100%"
  caption="Console page after a successful login"
/>


:::tip 📝 NOTE:
- To connect RAK10701-L Field Tester to TTNv3, you should already have connected a gateway in range to TTNv3. Or, you have to be sure that you are in the range of a public gateway.
:::

2. Now that you are logged in to the platform, the next step is to create an application. In your console, click **Create an application**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-1.png"
  width="100%"
  caption="Create an application"
/>

3. To have an application registered, you need to input first the specific details and necessary information about your application then click **Create application**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-2.png"
  width="100%"
  caption="Creating an Application"
/>

4. If you had no error during the previous step, you should now be on the application console page. The next step is to **add end-devices to your TTN application**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-3.png"
  width="100%"
  caption="Add end-devices to your TTN application"
/>

5. To register the RAK10701-L Field Tester, you need to click **Manually** first.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-4.png"
  width="100%"
  caption="Adding end devices manually"
/>

6. Choose the following configurations in adding the end devices. You must choose the correct Frequency Plan and the LoRaWAN version must be 1.0.3.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-5.png"
  width="100%"
  caption="Configurations for adding end devices"
/>

7.  Click **Show advanced activation, LoRaWAN class, and cluster settings**, then select **Over the air action** (OTAA).

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-6.png"
  width="100%"
  caption="OTAA settings"
/>

8. Then input the LoRaWAN OTAA parameters. For **AppEUI**, you may click **Fill with Zeros**. For **AppKey** and **DevEUI**, you can click **Generate**. Then the parameters will be automatically filled by the TTS platform. Finally, click **Register End Device**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-7.png"
  width="100%"
  caption="Registering the end device"
/>

9. You should now be able to see the device on the TTN console after you fully register your device. Take note of these OTAA parameters, such as the `AppEUI`, `DevEUI`, and the `AppKey`, as they are needed in the configuration of the RAK10701-L Field Tester hardware later on in this guide.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK4631-TTNV3-8.png"
  width="100%"
  caption="OTAA device successfully registered to TTN"
/>

10. After adding the device to the LoRaWAN application, link it to the backend server. The first step is to create an API key.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-API-icon.png"
  width="100%"
  caption="Creating API key"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-API-add.png"
  width="100%"
  caption="Creating API key"
/>

11. Configure the API key parameters. You can put any names that will easily track your API. You have to set the expiration date as well. Then you must check `Write downlink application traffic`. After the configuration, you can now click `Create API key`.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-API-info.png"
  width="95%"
  caption="API key parameters"
/>

12. This step is critical. You need to copy the API key because this will be used on Webhook integration.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-API-key-copy.png"
  width="70%"
  caption="Copy API key"
/>

13. With the API key created, you can proceed with creating the Webhook integration.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-Webhook.png"
  width="100%"
  caption="Webhook Integration"
/>

14. Select **Custom Webhook**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-Webhook-custom.png"
  width="100%"
  caption="Custom Webhook"
/>

15. Configure the necessary parameters on the Webhook. You can select any name for the webhook. You then need to set the base URL going to disk19 server `https://dev.disk91.com/fieldtester/ttn/v3`, add the API key from the previous step and lastly put a check on the `Uplink message` under **Enabled event types**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-Webhook-configuration.png"
  width="90%"
  caption="Webhook parameters"
/>

16. After setting all the configurations, you can now add the webhook.
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-Webhook-add.png"
  width="100%"
  caption="Add Webhook"
/>

17. You should see now the newly created webhook.
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/RAK10701-Webhook-list.png"
  width="100%"
  caption="Add Webhook"
/>

18. After adding the application, device, and webhook integration to the console, you have to configure the parameters in your device to match the parameters on the TTN console. You can use [WisToolBox](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/) via USB connection or wirelessly via BLE. You also have the option to update device parameters directly via [RUI3 AT Commands](https://docs.rakwireless.com/RUI3/Serial-Operating-Modes/AT-Command-Manual/#lorawan-keys-and-ids).

#### RAK10701-L Field Tester Guide for Chirpstack

##### How Does It Work?

There are two steps under the hood of the Field Tester. In step one, the Field Tester is sending out data packets over LoRaWAN. These packets are received by one or multiple gateways. These packets are forwarded from the LoRaWAN network server to another backend server. When the packets are forwarded, they include information about signal strength and the number of gateways that have received the packet.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/1_flow_1.png"
  width="55%"
  caption="Step 1 - Field Tester Sending Uplink Payload"
/>

In the second step, the backend server is calculating the minimum and maximum distance between the Field Tester Pro and the gateways that received the data. Together with the minimum and maximum RSSI levels, this information is then sent back to the Field Tester Pro as a LoRaWAN downlink.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/2_flow_2.png"
  width="55%"
  caption="Step 2 - Backend Server Sending Useful Information as Downlink"
/>

To use Chirpstack for RAK10701-L, you must have a working installation of the Chirpstack LoRaWAN network server. It can be on a dedicated machine, Raspberry Pi, or in a cloud VPS instance. It should have a fixed IP address and port to where `Datacake.co` will connect to.

1. To start with Chirpstack, you must create a device profile for your RAK10701-L Field Tester device. You must select `LoRaWAN MAC version 1.0.3` which is the LoRaWAN specification version that the RAK10701 Field Tester supports.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/3_device_profile.png"
  width="95%"
  caption="Creating Device Profile in Chirpstack"
/>

2. You must enable `Device supports OTAA` as the network join method as well.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/4_device_profile.png"
  width="95%"
  caption="Enable support for OTAA"
/>

3. You can also include a custom javascript decoder under the `CODEC` tab. This will allow you to see the specific information transmitted by the device.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/5_device_profile.png"
  width="95%"
  caption="Custom Javascript Decoder for RAK10701 Field Mapper"
/>

Here's the complete decoder script:

```js
function Decode(fPort, bytes, variables) {
    var decoded = {};
    // avoid sending Downlink ACK to integration (Cargo)
    if ((fPort === 1) || (fPort === 2)){
        var lonSign = (bytes[0] >> 7) & 0x01 ? -1 : 1;
        var latSign = (bytes[0] >> 6) & 0x01 ? -1 : 1;

        var encLat = ((bytes[0] & 0x3f) << 17) +
            (bytes[1] << 9) +
            (bytes[2] << 1) +
            (bytes[3] >> 7);

        var encLon = ((bytes[3] & 0x7f) << 16) +
            (bytes[4] << 8) +
            bytes[5];

        var hdop = bytes[8] / 10;
        var sats = bytes[9];

        var maxHdop = 2;
        var minSats = 5;

        if ((hdop < maxHdop) && (sats >= minSats)) {
            // Send only acceptable quality of position to mappers
            decoded.latitude = latSign * (encLat * 108 + 53) / 10000000;
            decoded.longitude = lonSign * (encLon * 215 + 107) / 10000000;
            decoded.altitude = ((bytes[6] << 8) + bytes[7]) - 1000;
            decoded.accuracy = (hdop * 5 + 5) / 10
            decoded.hdop = hdop;
            decoded.sats = sats;
        } else {
            decoded.error = "Need more GPS precision (hdop must be <" + maxHdop +
                " & sats must be >= " + minSats + ") current hdop: " + hdop + " & sats:" + sats;
            decoded.latitude = latSign * (encLat * 108 + 53) / 10000000;
            decoded.longitude = lonSign * (encLon * 215 + 107) / 10000000;
            decoded.altitude = ((bytes[6] << 8) + bytes[7]) - 1000;
            decoded.accuracy = (hdop * 5 + 5) / 10
            decoded.hdop = hdop;
            decoded.sats = sats;
        }
        return decoded;
    }
    return null;

```
:::tip 📝 NOTE:
This decoder script can be found on [RUI3-Field-Tester GitHub repository](https://github.com/beegee-tokyo/RUI3-Field-Tester/blob/main/decoders) which also includes a custom decoder script for TTN and Helium.
:::

4. After creating the device profile, you can now create an application and add the RAK10701 device. And then attached the `Device-profile` you created. You have to take note of the DEVEUI and APPKEY in this section. These parameters must match the ones in our RAK10701 Field Tester.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/6_create_application.png"
  width="95%"
  caption="Create application in Chirpstack"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/7_create_device.png"
  width="95%"
  caption="Create device in Chirpstack."
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/8_create_device_appkey.png"
  width="95%"
  caption="Device APPKEY"
/>

5. You also need to secure that you have a Gateway registered in Chirpstack and with the correct Network Server profile.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/9_gateway.png"
  width="95%"
  caption="Gateways registered in Chripstack"
/>

6. The next step after setting up the network server, devices, and gateway, is the integration of the Chirpstack application to Datacake. You must choose HTTP, then click `Edit`. Then you have to use this endpoint going to datacake `https://api.datacake.co/integrations/lorawan/chirpstack/`.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/10_integration_1.png"
  width="95%"
  caption="Creating integration"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/10_integration_2.png"
  width="95%"
  caption="Creating endpoint for Datacake.co  "
/>

7. The last step on the Chirpstack side, is the creation of the API key. This is needed to allow Datacake in sending downlink packets to the RAK10701 Field Tester. Make sure the key is copied and saved somewhere, it is only retrievable during the key creation. Copy the Token and save it in a text editor.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/11_apikey_1.png"
  width="95%"
  caption="Creation of API Key"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/11_apikey_2.png"
  width="95%"
  caption="Creation of API Key"
/>

8. You can now proceed on [www.datacake.co](www.datacake.co) and add a LoRaWAN device that will be linked to your RAK10701 created in ChirpStack. You have to create an account if you do not have one yet.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/12_datacake_init_1.png"
  width="95%"
  caption="Device list dashboard"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/12_datacake_init_2.png"
  width="45%"
  caption="Selecting LoRaWAN"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/12_datacake_init_3.png"
  width="45%"
  caption="Add new product"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/12_datacake_init_4.png"
  width="45%"
  caption="Selecting chirpstack"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/12_datacake_init_5.png"
  width="45%"
  caption="Adding device name"
/>

9. Next step is to enable the downlink. This is the step where you'll be needing the previously created API key in step 7 of this guide. Take note that the `ChirpStack URL` should be based on your deployed Chirpstack network server. After doing all configurations, click update and save.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/13_downlink_1.png"
  width="95%"
  caption="Configuration settings"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/13_downlink_2.png"
  width="95%"
  caption="Chirpstack downlink configuration"
/>
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/13_downlink_3.png"
  width="55%"
  caption="Chirpstack URL and API key"
/>

10. Just below the `LoRaWAN` section in datacake.co, you'll see the `Payload Decoder`. This is a very critical step to ensure that all important data will be covered.

```js
function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
    }
}

function Decoder(bytes, fPort) {
    var decoded = {};
    // avoid sending Downlink ACK to integration (Cargo)
    if (fPort === 1) {
        var lonSign = (bytes[0] >> 7) & 0x01 ? -1 : 1;
        var latSign = (bytes[0] >> 6) & 0x01 ? -1 : 1;

        var encLat = ((bytes[0] & 0x3f) << 17) +
            (bytes[1] << 9) +
            (bytes[2] << 1) +
            (bytes[3] >> 7);

        var encLon = ((bytes[3] & 0x7f) << 16) +
            (bytes[4] << 8) +
            bytes[5];

        var hdop = bytes[8] / 10;
        var sats = bytes[9];

        var maxHdop = 2;
        var minSats = 5;

        if ((hdop < maxHdop) && (sats >= minSats)) {
            // Send only acceptable quality of position to mappers
            decoded.latitude = latSign * (encLat * 108 + 53) / 10000000;
            decoded.longitude = lonSign * (encLon * 215 + 107) / 10000000;
            decoded.altitude = ((bytes[6] << 8) + bytes[7]) - 1000;
            decoded.accuracy = (hdop * 5 + 5) / 10
            decoded.hdop = hdop;
            decoded.sats = sats;
            decoded.location = "(" + decoded.latitude + "," + decoded.longitude + ")";
        } else {
            decoded.error = "Need more GPS precision (hdop must be <" + maxHdop +
                " & sats must be >= " + minSats + ") current hdop: " + hdop + " & sats:" + sats;
            decoded.latitude = latSign * (encLat * 108 + 53) / 10000000;
            decoded.longitude = lonSign * (encLon * 215 + 107) / 10000000;
            decoded.altitude = ((bytes[6] << 8) + bytes[7]) - 1000;
            decoded.accuracy = (hdop * 5 + 5) / 10
            decoded.hdop = hdop;
            decoded.sats = sats;
            decoded.location = "(" + decoded.latitude + "," + decoded.longitude + ")";
        }
        //      decoded.raw = rawPayload.uplink_message.rx_metadata[0].location;
        decoded.num_gw = normalizedPayload.gateways.length;
        decoded.minRSSI = 0;
        decoded.maxRSSI = 0;
        decoded.minSNR = 0;
        decoded.maxSNR = 0;
        decoded.minDistance = 0;
        decoded.maxDistance = 0;

        var server_type = 0;
        // Check if payload comes from TTN
        if (typeof (rawPayload.uplink_message) != "undefined") {
            console.log("Found TTN format");
            server_type = 1;
        }
        // Check if payload comes from Helium
        else if (typeof (rawPayload.hotspots) != "undefined") {
            console.log("Found Helium format");
            server_type = 2;
        }
        // Check if payload comes from Chirpstack
        else if (typeof (rawPayload.rxInfo) != "undefined") {
            console.log("Found Chirpstack format");
            server_type = 3;
            decoded.is_chirpstack = 1;
        }
        else {
            console.log("Unknown raw format");
        }

        var gw_lat = {};
        var gw_long = {};

        decoded.num_gw = 0;
        for (idx_tst = 0; idx_tst < 10; idx_tst++)
        {
            if (typeof (normalizedPayload.gateways[idx_tst]) != "undefined")
            {
                console.log("Found gateway with IDX " + idx_tst);
                decoded.num_gw += 1;
            }
        }

        for (idx = 0; idx < decoded.num_gw; idx++) {
            var new_rssi = (!!normalizedPayload.gateways && !!normalizedPayload.gateways[idx] && normalizedPayload.gateways[idx].rssi) || 0;
            var new_snr = (!!normalizedPayload.gateways && !!normalizedPayload.gateways[idx] && normalizedPayload.gateways[idx].snr) || 0;
            if ((new_rssi < decoded.minRSSI) || (decoded.minRSSI == 0)) {
                decoded.minRSSI = new_rssi;
            }
            if ((new_rssi > decoded.maxRSSI) || (decoded.maxRSSI == 0)) {
                decoded.maxRSSI = new_rssi;
            }
            if ((new_snr < decoded.minSNR) || (decoded.minSNR == 0)) {
                decoded.minSNR = new_snr;
            }
            if ((new_snr > decoded.maxSNR) || (decoded.maxSNR == 0)) {
                decoded.maxSNR = new_snr;
            }

            // var gw_lat = 0.0;
            // var gw_long = 0.0;
            switch (server_type) {
                //TTN
                case 1:
                    gw_lat[idx] = rawPayload.uplink_message.rx_metadata[idx].location.latitude;
                    gw_long[idx] = rawPayload.uplink_message.rx_metadata[idx].location.longitude;
                    break;
                // Helium
                case 2:
                    gw_lat[idx] = rawPayload.hotspots[idx].lat;
                    gw_long[idx] = rawPayload.hotspots[idx].long;
                    break;
                // Chirpstack
                case 3:
                    gw_lat[idx] = rawPayload.rxInfo[idx].location.latitude;
                    gw_long[idx] = rawPayload.rxInfo[idx].location.longitude;
                    break;
                default:
                    console.log("Unknown LNS");
                    break;
            }

            console.log("IDX " + idx + " lat " + gw_lat[idx] + " long " + gw_long[idx]);
            // decoded.gw_lat[idx] = gw_lat;
            // decoded.gw_long[idx] = gw_long;

            // Calculate distance
            var new_distance = distance(gw_lat[idx], gw_long[idx], decoded.latitude, decoded.longitude);
            if ((new_distance < decoded.minDistance) || (decoded.minDistance == 0)) {
                decoded.minDistance = new_distance * 1000;
            }
            if ((new_distance > decoded.maxDistance) || (decoded.maxDistance == 0)) {
                decoded.maxDistance = new_distance * 1000;
            }
        }

        switch (decoded.num_gw) {
            case 20:
                decoded.hotspot_10 = "(" + gw_lat[19] + "," + gw_long[19] + ")";
            case 19:
                decoded.hotspot_09 = "(" + gw_lat[18] + "," + gw_long[18] + ")";
            case 18:
                decoded.hotspot_08 = "(" + gw_lat[17] + "," + gw_long[17] + ")";
            case 17:
                decoded.hotspot_07 = "(" + gw_lat[16] + "," + gw_long[16] + ")";
            case 16:
                decoded.hotspot_06 = "(" + gw_lat[15] + "," + gw_long[15] + ")";
            case 15:
                decoded.hotspot_05 = "(" + gw_lat[14] + "," + gw_long[14] + ")";
            case 14:
                decoded.hotspot_04 = "(" + gw_lat[13] + "," + gw_long[13] + ")";
            case 13:
                decoded.hotspot_03 = "(" + gw_lat[12] + "," + gw_long[12] + ")";
            case 12:
                decoded.hotspot_02 = "(" + gw_lat[11] + "," + gw_long[11] + ")";
            case 11:
                decoded.hotspot_01 = "(" + gw_lat[10] + "," + gw_long[10] + ")";
            case 10:
                decoded.hotspot_10 = "(" + gw_lat[9] + "," + gw_long[9] + ")";
            case 9:
                decoded.hotspot_09 = "(" + gw_lat[8] + "," + gw_long[8] + ")";
            case 8:
                decoded.hotspot_08 = "(" + gw_lat[7] + "," + gw_long[7] + ")";
            case 7:
                decoded.hotspot_07 = "(" + gw_lat[6] + "," + gw_long[6] + ")";
            case 6:
                decoded.hotspot_06 = "(" + gw_lat[5] + "," + gw_long[5] + ")";
            case 5:
                decoded.hotspot_05 = "(" + gw_lat[4] + "," + gw_long[4] + ")";
            case 4:
                decoded.hotspot_04 = "(" + gw_lat[3] + "," + gw_long[3] + ")";
            case 3:
                decoded.hotspot_03 = "(" + gw_lat[2] + "," + gw_long[2] + ")";
            case 2:
                decoded.hotspot_02 = "(" + gw_lat[1] + "," + gw_long[1] + ")";
            case 1:
                decoded.hotspot_01 = "(" + gw_lat[0] + "," + gw_long[0] + ")";
            default:
                break;
        }

        decoded.maxMod = parseInt((decoded.maxDistance / 250), 10);
        decoded.minMod = parseInt((decoded.minDistance / 250), 10);
        decoded.maxDistance = parseInt((decoded.maxMod * 250), 10);
        decoded.minDistance = parseInt((decoded.minMod * 250), 10);
        if (decoded.maxDistance <= 1) {
            decoded.maxDistance = parseInt(250, 10);
        }
        if (decoded.minDistance <= 1) {
            decoded.minDistance = parseInt(250, 10);
        }
        return decoded;
    }
    return null;

}
```

This decoder is not only decoding data from the LoRaWAN packet but is as well reading gateway information from the additional data that the LoRaWAN server added to the data it forwarded to Datacake.

Each LoRaWAN server uses a different format for this additional information, so there is a code section that tries to detect whether the data came from a Chirpstack LSN, from TTN, or from a Helium Console:

```js
var server_type = 0;
        // Check if payload comes from TTN
        if (typeof (rawPayload.uplink_message) != "undefined") {
            console.log("Found TTN format");
            server_type = 1;
        }
        // Check if payload comes from Helium
        else if (typeof (rawPayload.hotspots) != "undefined") {
            console.log("Found Helium format");
            server_type = 2;
        }
        // Check if payload comes from Chirpstack
        else if (typeof (rawPayload.rxInfo) != "undefined") {
            console.log("Found Chirpstack format");
            server_type = 3;
            decoded.is_chirpstack = 1;
        }
        else {
            console.log("Unknown raw format");
        }
```

Once the data is extracted, it calculates the distance between the RAK10701 Field Tester location and the different gateways that received the LoRaWAN packet. This version of the decoder can handle up to 10 gateways, but it can be extended.

```js
function distance(lat1, lon1, lat2, lon2) {
    if ((lat1 == lat2) && (lon1 == lon2)) {
        return 0;
    }
    else {
        var radlat1 = Math.PI * lat1 / 180;
        var radlat2 = Math.PI * lat2 / 180;
        var theta = lon1 - lon2;
        var radtheta = Math.PI * theta / 180;
        var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
        if (dist > 1) {
            dist = 1;
        }
        dist = Math.acos(dist);
        dist = dist * 180 / Math.PI;
        dist = dist * 60 * 1.1515;
        dist = dist * 1.609344;
        return dist;
    }
}
```

In the next step, it analyzes the different distances and RSSI levels to find the closest and farthest gateway and the lowest and highest RSSI and SNR levels.

The result of the decoding is then put into different data fields that are used by Chirpstack for the visualization and by the rule, we will define to create the downlink to the RAK10701 Field Tester.

11. The next step is to create the different data fields that are filled by the data decoder. This is done in the Fields section of the device configuration, just below the data encoder section.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/14_datafield.png"
  width="95%"
  caption="Creation of data field"
/>


The following fields are required:

| Field Name    | Identifier (returned value from the decoder) | Field Type |
| ------------- | -------------------------------------------- | ---------- |
| Field Tester  | LOCATION                                     | Location   |
| MinDistance   | MINDISTANCE                                  | Integer    |
| MaxDistance   | MAXDISTANCE                                  | Integer    |
| MinRSSI       | MINRSSI                                      | Float      |
| MaxRSSI       | MAXRSSI                                      | Float      |
| MinSNR        | MINSNR                                       | Float      |
| MaxSNR        | MAXSNR                                       | Float      |
| hotspot_01    | HOTSPOT_01                                   | Location   |
| hotspot_02    | HOTSPOT_01                                   | Location   |
| hotspot_0…    | HOTSPOT_...                                  | Location   |
| hotspot_09    | HOTSPOT_09                                   | Location   |
| hotspot_10    | HOTSPOT_10                                   | Location   |
| is_chirpstack | IS_CHIRPSTACK                                | Boolean    |

There are more variables created by the decoder, but this is the minimum set required for the dashboard and to configure the download.

12. This is the most critical step so that the RAK10701 will be able to display the necessary details helpful in Field Testing the LoRaWAN network. This section is responsible for the "backend-server functions". In this step, we create the automatic downlink to the device that is executed every time a data packet from the RAK10701 Field Tester arrives. Take note that port number 2 is used by RAK10701 for downlinks and `Trigger on measurements` should be checked.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/15_add_dl_1.png"
  width="95%"
  caption="Chirpstack downlink configuration"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/15_add_dl_2.png"
  width="55%"
  caption="Chirpstack downlink configuration"
/>

In this guide, the downlink is only created when the Field Tester is connected through a Chirpstack server. When TTN or Helium is used, the downlink would be created by the original backend server.

This is controlled by the “Fields used” where you can see the IS_CHIRPSTACK.

The Payload Encoder is preparing a downlink packet that will be sent back to the RAK10701 Field Tester. The downlink packet is only 6 bytes large to avoid problems in LoRaWAN regions with limited downlink packet sizes.

This is the complete decoder script. The first byte is usually a counter, but it works well if the counter is ignored and always set to 1.

```js
function Encoder(measurements, port) {
    var buf = [];
    buf[0] = 1;
    buf[1] = measurements.MINRSSI.value + 200;
    buf[2] = measurements.MAXRSSI.value + 200;
    // var temp = parseInt(measurements.MINMOD.value,10);
    if (measurements.MINMOD.value == 0) {
        measurements.MINMOD.value = 1;
    }
    console.log(measurements.MINMOD.value);
    buf[3] = measurements.MINMOD.value;
    if (measurements.MAXMOD.value == 0) {
        measurements.MAXMOD.value = 1;
    }
    buf[4] = measurements.MAXMOD.value;
    buf[5] = measurements.NUM_GW.value;
    return buf;
}
```
13. You can now proceed on [device configuration](/Product-Categories/WisNode/RAK10701-L/Quickstart/#configuration-of-rak10701-l-using-wistoolbox) so that the proper EUIs and KEY will match the one in the network server.


### Configuration of RAK10701-L Using WisToolBox

The Field Mapper should have the correct credentials to connect to the Helium Console. This can be done using WisToolBox and also with the help of the touchscreen LCD user interface.

1. Connect the RAK10701-L to the PC via USB Type-C cable and open the WisToolBox application. You can find more info on how to install and use the [WisToolbox from its documentation](https://docs.rakwireless.com/Product-Categories/Software-Tools/WisToolBox/Overview/).

2. Click the **CONNECT DEVICE** button to launch WisToolBox Dashboard.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-connect.png"
  width="85%"
  caption="WisToolBox Desktop splash screen"
/>

3. Review the **Connection settings** parameters on the dashboard, then click on the **CONNECT** button.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-connect-settings.png"
  width="85%"
  caption="WisToolBox Desktop connection settings"
/>

4. On the WisToolBox Dashboard screen, select the RAK4630 module. This is the module inside the RAK10701-L Field Tester device.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-module.png"
  width="85%"
  caption="Detected module by WisToolBox"
/>

5. You can now update the APPEUI, DEVEUI, and APPKEY. It must be the same as the parameters you have in the [Setting up of Network Server](/Product-Categories/WisNode/RAK10701-L/Quickstart/#lorawan-network-servers-guide-for-rak10701-l-field-tester). Then you can click **APPLY COMMANDS**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-parameters.png"
  width="85%"
  caption="Changing device parameters"
/>

:::tip 📝 NOTE:
These are the only parameters that you need to change via WisToolBox. Other configurations like frequency plan, the interval of uplinks, TX power, and data rate can be done on the touchscreen of RAK10701.

For the frequency plan change, the device has to restart to activate this newly configured frequency band. There will be a notification on the UI touchscreen LCD. If you use WisToolBox to configure the band, you have to restart the device manually, and there will be no notification from the UI of the LCD.
:::

6. You will see the summary of commands that was applied successfully. If the update is unsuccessful, just resend the needed changes. After the successful update, click the **CLOSE** button to return to Dashboard.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-config-success.png"
  width="85%"
  caption="Successful update of parameters"
/>

7. You can now remove the USB Type-C cable and proceed to the screen of RAK10701. You can click the settings icon and then update the frequency plan, the interval of uplinks, TX power, and data rate as needed. You can use the arrows for navigation and click `OK` to save changes.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/home_ui_settings.png"
  width="35%"
  caption="RAK10701-L settings button"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/settings-parameters.png"
  width="35%"
  caption="Configurable parameters"
/>

### Miscellaneous

This part of the guide shows the Field Tester interface and how to update the firmware.

- [User Interface](/Product-Categories/WisBlock/RAK10701/Quickstart/#field-tester-display-interface)
- [Firmware Update](/Product-Categories/WisBlock/RAK10701/Quickstart/#upgrading-the-firmware)

#### Field Tester Display Interface

This section discusses the interfaces on the LCD of the device as well as its pages.

##### Display Status and Indicator

The RAK10701-L WisBlock Field Tester has status indicators that show the current state of the device.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-status.png"
  width="35%"
  caption="Device status and indicator"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-status-indicator.png"
  width="35%"
  caption="Different device status"
/>

**Status:**

- **IDLE**: RAK10701-L Field Tester state is in between the previous uplink and the next uplink. The duration of IDLE depends on the interval configured on the device.
- **JOINING**: RAK10701-L Field Tester is trying to join the network. This status is triggered when a Join request is sent.
- **JOINED**: RAK10701-L Field Tester successfully received the Join accept the packet. This status will be displayed until refreshed when new data is sent.
- **FAILED**: RAK10701-L Field Tester failed to join the network. Triggered by receive timeout. There might be no available gateway reachable by the Field Tester.
- **SENDING**: RAK10701-L Field Tester's data such as GPS is being uploaded via an uplink. It will be displayed until the reception is completed or timed out.

##### Settings

The field tester has configurable parameters: Band, TX power, TX interval, backlight intensity, and DR. You can navigate the settings using the arrow widgets plus the back and ok buttons.
The OTAA parameters APPEUI, DEVEUI, and APPKEY are also displayed but can't be changed on the touchscreen. WisToolBox or another Serial Port terminal tool is needed to send the AT commands to update the EUIs and key.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/home_ui_settings.png"
  width="35%"
  caption="Settings button"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/settings-parameters-gw.png"
  width="35%"
  caption="Settings page"
/>

##### Data Plots

There are four different data plots on the field tester: **number of gateways**, **RSSI**, **SNR**, and **approximate distance**. These graphs are accessible by touching the respective icons assigned to the parameter.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-plots.png"
  width="35%"
  caption="Accessing different data plots"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-distance.png"
  width="35%"
  caption="Distance plot"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-rssi.png"
  width="35%"
  caption="RSSI plot"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-snr.png"
  width="35%"
  caption="SNR plot"
/>

##### GPS Data

The main page shows the last GPS data captured by the device.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-gps-icon.png"
  width="35%"
  caption="GPS display"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/lcd-gps-data.png"
  width="35%"
  caption="GPS data"
/>


#### Upgrading the Firmware

It is recommended to update to the latest version of the firmware. To do this, download the latest [RAK10701-L WisBlock Field Tester firmware](/Product-Categories/WisBlock/RAK10701/Datasheet/#software) and use the WisToolBox to update the custom firmware.

1. Drag the downloaded firmware to the WisToolBox custom firmware section.
<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-firmware.png"
  width="85%"
  caption="WisToolBox firmware"
/>

2. After the firmware file is uploaded to the application, you can now select **UPGRADE DEVICE**.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-firmware-upgrade.png"
  width="85%"
  caption="Upload the latest firmware"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-firmware-upgrade2.png"
  width="85%"
  caption="Confirm upgrading of firmware"
/>

3. If all proceed with no error, you should see `Firmware update successful` notification, and the RAK10701-L will restart automatically.

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-firmware-upgrade3.png"
  width="85%"
  caption="Ongoing upgrading of firmware"
/>

<rk-img
  src="/assets/images/wisnode/rak10701/quickstart/wistoolbox-firmware-successful.png"
  width="85%"
  caption="Successful upload of latest firmware"
/>

