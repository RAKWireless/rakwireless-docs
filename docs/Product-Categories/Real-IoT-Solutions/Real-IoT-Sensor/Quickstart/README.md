---
rak_desc: Contains instructions and a guide for installing and deploying your Real IoT Kit. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/rism/sensor/rism-sensor.png
prev: ../Overview/
next: false
tags:
  - Solutions
  - RISM
  - quickstart
  - Real IoT Kit
  - Real IoT Solutions Marketplace
---

# Real IoT Sensor Quick Start Guide

This guide covers all the steps needed to start using the Real IoT Kit and bundles. The kits are preconfigured, and minimal procedures are required to have a working IoT application.

In summary, there are only three steps to follow to have a working end-to-end Real IoT Kit.

1. Power on the LoRaWAN gateway and connect it to the internet.
2. Power on the end-device.
3. Scan the QR code to generate a working IoT dashboard.

## Gateway Setup

To initiate the Real IoT Kit setup, ensure that the gateway is online and connected to the LoRaWAN Network Server (LNS).

:::tip 📝 NOTE
- If you have a RAKwireless gateway, refer to the  [RAKwireless WisGate Documentation](https://docs.rakwireless.com/Product-Categories/WisGate/) guidelines. 
- If you have a third party gateway, setup the gateway according to its designated configuration.
- Do not use the reset key to restore the factory settings of your gateway. If you do this, it will be disconnected from the LNS and will need to be reconfigured again.
:::

## Power On the Device

After configuring the gateway and ensuring its internet connectivity, you can proceed with powering on the device. The guide to power on the device is included in your Real IoT Kit. It differs depending on the type of device included in your kit. Some devices are battery-powered, so they require careful mounting with consideration of the battery polarity. In addition, deployment and installation considerations are also included in these documents.

A table of documentation is provided so you can easily access the documentation of your specific device.

**Device Documentation**

<table class="text-center">
  <thead><tr>
    <th>Device</th>
    <th>Description</th>
    <th colspan = "2">Documentation</th>
  </tr></thead>
<tbody>
  <tr>
    <td>AM308</td>
    <td>Temperature and Humidity Sensor</td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-NB300-TH%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
    <tr>
    <td>NB300-TH</td>
    <td>Indoor Air Quality Sensor</td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-AM300%20Series%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
</tbody>
</table>


## Datacake App

### App Installation

After powering up the device, download and install the Datacake App on your smartphone. Both Android and iOS are supported.

<rk-img
  src="/assets/images/rism/sensor/quickstart/datacake_iphone.png"
  width="30%"
  caption="Datacake on iOS"
/>

<rk-img
  src="/assets/images/rism/sensor/quickstart/datacake_android.png"
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
  src="/assets/images/rism/sensor/quickstart/add-dashboard.png"
  width="55%"
  caption="Adding device dashboard"
/>

2. Click the **Scan QR Code** button. It will open the camera of your phone, which allows you to capture the QR code. This step might require permission on your smartphone to access the camera. Get your device, locate the QR code, then scan it.

<rk-img
  src="/assets/images/rism/sensor/quickstart/qr_scan.png"
  width="55%"
  caption="Scanning QR"
/>

3. After a successful QR code scan, you will be given quick access to the page with the necessary information. You can change the **Title** field, which corresponds to the name of the device.

:::tip 📝 NOTE
If you do not set a custom title, it will use the default **Title**. It is recommended to modify the **Title** because it allows you to quickly identify specific device dashboards on the App. In addition, you can also create a useful description of the function and purpose of the device.
:::

4. After finalizing the details, you can now click **Save**.

<rk-img
  src="/assets/images/rism/sensor/quickstart/save_url.png"
  width="30%"
  caption="Saving dashboard on the Datacake App"
/>

5. Once done saving the information, the main view of devices will be updated. The demo dashboards will be removed, and you will see two different views of the dashboards available named **LIST** and **GALLERY**. You can choose the suitable interface for your application.

<rk-img
  src="/assets/images/rism/sensor/quickstart/device_on_list_gallery.png"
  width="55%"
  caption="Device added on Datacake App"
/>

6. At this point, the dashboard is now ready for viewing and already saved in your application.

<rk-img
  src="/assets/images/rism/sensor/quickstart/datacake_dashboard.png"
  width="30%"
  caption="Dashboard ready on the App"
/>

## End-Device Claiming on Datacake

Before mounting the device in its final location, it is advisable to claim it first using your Datacake account. This step allows you to access the device and customize its default dashboard, as well as create useful reports, alerts, and notifications. While this step is optional, failing to claim the device will prevent you from accessing these features.

When claiming the device, enter the claim code. If the device has already been mounted, it will be difficult to access the printed claim code.

To claim your device, follow the steps outlined below:

1. Go to [RAKwireless-Datacake](https://rakwireless.datacake.co) site, then click **Create Account**.

:::tip 📝 NOTE
If you have a Datacake account already, you can use your account's login credentials, then proceed to **Step 3**.
:::

<rk-img
  src="/assets/images/rism/sensor/quickstart/datacake_rak_login.png"
  width="90%"
  caption="RAKwireless-Datacake login page"
/>

2. Input the necessary information and agree to the terms and conditions, then click **Create Account**. Once the account is created, log in and go to your RAKwireless-Datacake account.

<rk-img
  src="/assets/images/rism/sensor/quickstart/account_creation.png"
  width="90%"
  caption="Creation of account"
/>

3. Once logged in, start the claiming process by clicking **+ Add Device** and then **Pincode Claiming**.

<rk-img
  src="/assets/images/rism/sensor/quickstart/add-device-on-claim.png"
  width="80%"
  caption="Add device to claim"
/>

<rk-img
  src="/assets/images/rism/sensor/quickstart/pincode_claim.png"
  width="60%"
  caption="PIN code claiming"
/>

4. Input the **Serial Number** which is the DEVEUI of your device as well as the **Claiming Code**, then click on **Add Device to Workplace**.

<rk-img
  src="/assets/images/rism/sensor/quickstart/claiming_code.png"
  width="60%"
  caption="Input DEVEUI as Serial number, then claim code in device sticker"
/>

### Creation of Reports and Alerts via Rules

1. To generate reports, go to the **Reports** tab and click **+ Add Report**. It redirects you to the page where you can configure the reports you need, as shown in **Figure 14**.

<rk-img
  src="/assets/images/rism/sensor/quickstart/report_generation.png"
  width="80%"
  caption="Reports feature of Datacake"
/>

<rk-img
  src="/assets/images/rism/sensor/quickstart/report_configuration.png"
  width="50%"
  caption="Reports setting and configuration"
/>

For notifications and alerts, go to the **Rules** tab and click on **+ Add Rule**. You can create a descriptive name for this notification and set the conditions, as shown in **Figure 16**. When the condition is met, it sends a notification via email or SMS. Also, you can perform automatic actions via webhook or downlink process.

<rk-img
  src="/assets/images/rism/sensor/quickstart/rules_generation.png"
  width="80%"
  caption="Rules and conditional alerts"
/>

<rk-img
  src="/assets/images/rism/sensor/quickstart/rules_configuration.png"
  width="80%"
  caption= "Rules and alert configuration"
/>

## Updating License

1. To upgrade your license for longer data retention and dedicated support, go to the device you want to upgrade the plan.

<rk-img
  src="/assets/images/rism/sensor/quickstart/license_purchase_1.png"
  width="80%"
  caption="Device configuration for the purchase of a license"
/>

2. Scroll down to the bottom until you see **Device Plan** under **Danger Zone**, then click on **Change Plan**. It opens a new window where you can select the plan and payment method to upgrade it, as shown in **Figure 19**.

<rk-img
  src="/assets/images/rism/sensor/quickstart/license_purchase_2.png"
  width="80%"
  caption="Device configuration for the purchase of a license"
/>

<rk-img
  src="/assets/images/rism/sensor/quickstart/license_purchase_3.png"
  width="50%"
  caption="Device configuration for the purchase of a license"
/>

## Device Mounting

The mounting procedure varies depending on the device and sensor. It is common to see walls mounted once and fixed by screws. While others use magnets, double-sided tape, and other methods.

It is recommended to check the user manual of specific devices to see if mounting options are possible.


<table class="text-center">
  <thead><tr>
    <th>Device</th>
    <th>Description</th>
    <th colspan = "2">Documentation</th>
  </tr></thead>
<tbody>
  <tr>
    <td>AM308</td>
    <td>Temperature and Humidity Sensor</td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-NB300-TH%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
    <tr>
    <td>NB300-TH</td>
    <td>Indoor Air Quality Sensor</td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesight-AM300%20Series%20Datasheet.pdf">Datasheet</a></td>
    <td><a href="https://downloads.rakwireless.com/IoT-Marketplace/Milesight/Milesignt-NB308-AM300-Series-User%20Guide.pdf">User Manual</a></td>
  </tr>
</tbody>
</table>