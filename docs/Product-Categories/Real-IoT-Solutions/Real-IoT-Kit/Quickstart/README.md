---
rak_desc: Contains instructions and a guide for installing and deploying your Real IoT Kit. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/rism/kit/rism-kit.png
prev: ../Overview/
next: false
tags:
  - Solutions
  - RISM
  - quickstart
  - Real IoT Kit
  - Real IoT Solutions Marketplace
---

# Real IoT Kit Quick Start Guide

This guide covers all the steps needed to start using the Real IoT Kit and bundles. The kits are preconfigured, and minimal procedures are required to have a working IoT application.

In summary, there are only three steps to follow to have a working end-to-end Real IoT Kit.

1. Power on the LoRaWAN gateway and connect it to the internet.
2. Power on the end-device.
3. Scan the QR code to generate a working IoT dashboard.

## 1. Gateway Setup

To initiate the Real IoT Kit setup, ensure that the gateway is online and connected to the LoRaWAN Network Server (LNS). By default, a successfully connected LoRaWAN gateway to the internet will have a blue LED indicator.

The LED indicator feature allows you to quickly determine the gateway's internet connection status by looking at it. If the LED indicator is not blue, the gateway is not connected to the internet and cannot transfer data from devices to the LNS.

When using an Ethernet connection or cellular connectivity via a SIM card, simply turn on your gateway and connect the LAN cable. Alternatively, insert the SIM card and wait for the LED to turn blue.

On the other hand, if you connect via WiFi, you need to follow the <a href="/Product-Categories/WisGate/RAK7268/Quickstart/" target="_blank">RAK7268V2 Quick Start Guide</a>. This guide gives more details about your gateway, like the meaning of different LED color statuses.

:::warning ⚠️ WARNING
Do not use the reset key to restore the factory settings of your gateway. If you do this, it will be disconnected from the LNS and will need to be reconfigured to its solutions kit factory settings.
:::

### Power On the Gateway

1. Attach the LoRa Antenna via screwing it to the RP-SMA connector on the back panel of the RAK7268/C WisGate Edge Lite 2.

<rk-img
  src="/assets/images/rism/kit/quickstart/gateway_with_antenna.png"
  width="50%"
  caption="RAK7268V2 with attached LoRa antenna"
/>

:::warning ⚠️ WARNING
Do not power the device if the LoRa Antenna port has been left open to avoid potential damage to the RAK7268/RAK7268C WisGate Edge.
:::


2. Connect the Ethernet cable to the port marked ETH on the gateway and the other end to the router. After the ethernet connection, you can now connect the AC power adapter to the gateway and plug it to the power source.

For more advance setup, you can configure the gateway on its portal if your PC is connected on the same LAN network where your gateway is connected.

<rk-img
  src="/assets/images/rism/kit/quickstart/gateway_ethernet.png"
  width="80%"
  caption="RAK7268V2 Ethernet and AC power connection"
/>


## 2. Power On the Device

After configuring the gateway and ensuring its internet connectivity, you can proceed with powering on the device that is included in your Real IoT Kit.

The guide differs depending on the type of device included in your kit. Some devices are battery-powered, so they require careful mounting with consideration of the battery polarity.

In addition, deployment and installation considerations are also included in the specific documentation of these devices.

A table of documentation is provided so you can easily access the documentation of your specific device.

How to activate devices is also shown on the next sections. If you have no advance setting needed, you can just activate the device and start using it. However, if more advance configuration is needed you can find the complete details on the device specific user guide.

**Device Documentation**

<table class="text-center">
  <thead><tr>
    <th>Device</th>
    <th>Description</th>
    <th colspan = "2">Documentation</th>
  </tr></thead>
<tbody>
    <tr>
    <td>NB300-TH</td>
    <td>Indoor Air Quality Sensor</td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-AM300%20Series%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
    <tr>
    <td>NB308/AM308</td>
    <td>Indoor Air Quality Sensor </td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-AM300%20Series%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
</tbody>
</table>

### Sample: Enable Milesight Devices

Milesight devices are not enabled once you receive it. You need to use a smartphone with NFC feature and download/install the Milesight Toolbox app from <a href="https://play.google.com/store/apps/details?id=com.ursalinknfc" target="_blank">Google Playstore</a> or <a href="https://apps.apple.com/us/app/milesight-toolbox/id1518748039" target="_blank">Apple App Store</a> to enable Milesight devices.

1. Enable the NFC of the smartphone and open the Milesight Toolbox App. Place the smartphone in front of the sensor so it can detect the NFC then click the **NFC Read**. If you see a **Ready to Scan** image, you can move away the smartphone and put it back again to trigger the NFC.

<rk-img
  src="/assets/images/rism/kit/quickstart/nfc_connection.png"
  width="70%"
  caption="Milesight Toolbox NFC Connection"
/>

:::tip 📝 NOTE:
If it doesn't respond, you can try to turn on and off the NFC function of the smartphone and try again. In addition, the position of the smartphone and the device is important. It must be very close to the device NFC section. You can slowly move the device left-right and up-down to determine the trigger area.
:::

2. After successful connection, you should be able to see the front screen where you can enable the device via the **Device Status** button switch. Enable it and scan/trigger the NFC again with **NFC Read** button.


<rk-img
  src="/assets/images/rism/kit/quickstart/device_status_on.png"
  width="25%"
  caption="Device Status Activation"
/>

<rk-img
  src="/assets/images/rism/kit/quickstart/power_on.png"
  width="25%"
  caption="Device Successfully Activated"
/>

3. If activation is successful, you should be able to see display on the device (if it has display) and dashboard update in few minutes.

:::tip 📝 NOTE
Mounting instructions varies in each device. It is recommended to check the device specific users guide.
:::


:::warning ⚠️ WARNING
If you want full ownership and access to your device you need to <a href="/Product-Categories/Solutions/Real-IoT-Solutions-Marketplace/Quickstart/#how-to-claim-the-device-to-your-own-account" target="_blank">claim the device to your own Datacake account</a>.
:::

## 3. Device Dashboard Visualization

### Datacake App

After powering up the device, download and install the Datacake App on your smartphone. Both Android and iOS are supported.

<rk-img
  src="/assets/images/rism/kit/quickstart/datacake_iphone.png"
  width="30%"
  caption="Datacake on iOS"
/>

<rk-img
  src="/assets/images/rism/kit/quickstart/datacake_android.png"
  width="30%"
  caption="Datacake on Android"
/>


When you open the App, the Datacake logo will show momentarily then proceed on the list of demo dashboards. You can have a glance at these dashboards to have an idea of how the widgets look.

::: tip 📝 NOTE
The Datacake App can be used without registration or creation of any account.
:::

### Dashboard Creation

To enable the dashboard of your device, scan the QR code on the device. You also need to get the claim code under the QR code to create a custom dashboard, notifications, and alerts later.

Follow the steps below for the dashboard creation:

1. To create a dashboard, click on the **+** (plus) icon located on the upper right to proceed with adding your device dashboard.

<rk-img
  src="/assets/images/rism/kit/quickstart/add-dashboard.png"
  width="55%"
  caption="Adding device dashboard"
/>

2. Click the **Scan QR Code** button. It will open the camera of your phone, which allows you to capture the QR code. This step might require permission on your smartphone to access the camera. Get your device, locate the QR code, then scan it.

<rk-img
  src="/assets/images/rism/kit/quickstart/qr_scan.png"
  width="55%"
  caption="Scanning QR"
/>

3. After a successful QR code scan, you will be given quick access to the page with the necessary information. You can change the **Title** field, which corresponds to the name of the device.

:::tip 📝 NOTE
If you do not set a custom title, it will use the default **Title**. It is recommended to modify the **Title** because it allows you to quickly identify specific device dashboards on the App.

In addition, you can also create a useful description of the function and purpose of the device.
:::

4. After finalizing the details, you can now click **Save**.

<rk-img
  src="/assets/images/rism/kit/quickstart/save_url.png"
  width="30%"
  caption="Saving dashboard on the Datacake App"
/>

5. Once done saving the information, the main view of devices will be updated. The demo dashboards will be removed, and you will see two different views of the dashboards available named **LIST** and **GALLERY**. You can choose the suitable interface for your application.

<rk-img
  src="/assets/images/rism/kit/quickstart/device_on_list_gallery.png"
  width="55%"
  caption="Device added on Datacake App"
/>

6. At this point, the dashboard is now ready for viewing and already saved in your application.

<rk-img
  src="/assets/images/rism/kit/quickstart/datacake_dashboard.png"
  width="30%"
  caption="Dashboard ready on the App"
/>

## Frequently Asked Questions

### Why No Data is Showing in the Dashboard?

The device uplinks data to the LoRaWAN Network Server every few minutes. You have to wait for this uplink period before data is shown on the dashboard.

You can also check the LoRaWAN Gateway if you are online. The LED on the gateway should be blue. Otherwise, there is no connection to the internet. There are three possible reasons:

- The ethernet cable is disconnected.
- The SIM card is already out of data connectivity.
- WiFi is down, especially since the gateway connects to an access point.

In the deployment aspect, it is crucial to ensure that the external antenna of the gateway and the device are properly attached. Failure to do so could cause degradation of the RF signal leading to the failure of uplink packets.

Additionally, it is important to consider the area and placement of the device. If it is mounted in an area where the LoRaWAN gateway cannot reach, such as a location too far away or has many walls and blockages, it can cause attenuation of the signal.

You can check for possible issues on the Datacake platform by going to its status page <a href="https://datacake-status.com/" target="_blank">Datacake Status</a>. You can see if there is downtime on the platform or if issues are being solved.

### How to Claim the Device to Your Account?

Before mounting and deploying the device in its final location, it is recommended to first claim the device using your Datacake account. By doing this, you will be able to access the device and customize its default dashboard, as well as create useful reports, alerts, and notifications. While this step is optional, failing to claim the device will prevent you from accessing these features.

When claiming the device, you need to enter the claim code. It may be difficult to access the printed claim code if the device has already been installed.

To claim your device, follow the steps outlined below:

1. Go to <a href="https://rakwireless.datacake.co" target="_blank">RAKwireless-Datacake</a> site, then click **Create Account**.

:::tip 📝 NOTE
If you have a Datacake account already, you can use your account's login credentials, then proceed to **Step 3**.
:::

<rk-img
  src="/assets/images/rism/kit/quickstart/datacake_rak_login.png"
  width="90%"
  caption="RAKwireless-Datacake login page"
/>

2. Input the necessary information and agree to the terms and conditions, then click **Create Account**. Once the account is created, log in and go to your RAKwireless-Datacake account.

<rk-img
  src="/assets/images/rism/kit/quickstart/account_creation.png"
  width="90%"
  caption="Creation of account"
/>

3. Once logged in, start the claiming process by clicking **+ Add Device** and then **Pincode Claiming**.

<rk-img
  src="/assets/images/rism/kit/quickstart/add-device-on-claim.png"
  width="80%"
  caption="Add device to claim"
/>

<rk-img
  src="/assets/images/rism/kit/quickstart/pincode_claim.png"
  width="60%"
  caption="PIN code claiming"
/>

4. Input the **Serial Number** which is the DEVEUI of your device as well as the **Claiming Code**, then click on **Add Device to Workplace**.

<rk-img
  src="/assets/images/rism/kit/quickstart/claiming_code.png"
  width="60%"
  caption="Input DEVEUI as Serial number, then claim code in device sticker"
/>

### How to Create Reports and Alerts via Rules?

1. To generate reports, go to the **Reports** tab and click **+ Add Report**. It redirects you to the page where you can configure the reports you need.

<rk-img
  src="/assets/images/rism/kit/quickstart/report_generation.png"
  width="80%"
  caption="Reports feature of Datacake"
/>

<rk-img
  src="/assets/images/rism/kit/quickstart/report_configuration.png"
  width="50%"
  caption="Reports setting and configuration"
/>

2. For notifications and alerts, go to the **Rules** tab and click on **+ Add Rule**. You can create a descriptive name for this notification and set the condition.

<rk-img
  src="/assets/images/rism/kit/quickstart/rules_generation.png"
  width="80%"
  caption="Rules and conditional alerts"
/>

3. When the condition is met, it sends a notification via email or SMS. Also, you can perform automatic actions via webhook or downlink process.

<rk-img
  src="/assets/images/rism/kit/quickstart/rules_configuration.png"
  width="80%"
  caption= "Rules and alert configuration"
/>

### How to Upgrade Datacake License?

1. To upgrade your license for longer data retention and dedicated support, go to the device you want to upgrade the plan.

<rk-img
  src="/assets/images/rism/kit/quickstart/license_purchase_1.png"
  width="80%"
  caption="Device configuration for the purchase of a license"
/>

2. Scroll down to the bottom until you see **Device Plan** under **Danger Zone**, then click on **Change Plan**. It opens a new window where you can select the plan and payment method to upgrade it.

<rk-img
  src="/assets/images/rism/kit/quickstart/license_purchase_2.png"
  width="80%"
  caption="Device configuration for the purchase of a license"
/>

<rk-img
  src="/assets/images/rism/kit/quickstart/license_purchase_3.png"
  width="50%"
  caption="Device configuration for the purchase of a license"
/>
