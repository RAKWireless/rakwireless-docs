---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK2270. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisnode/rak2270/RAK2270.png
prev: ../Overview/
next: ../Datasheet/
rak_grp: [wisnode,track]
rak_model: WisNode
tags:
  - quickstart
  - wisnode
  - RAK2270
  - sticker tracker
---

# RAK2270 Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step in the guide of the RAK2270 Sticker Tracker, make sure to prepare the necessary items listed below:

1. [RAK2270 Sticker Tracker](https://store.rakwireless.com/products/rak2270-rak-sticker-tracker?utm_source=RAK2270RAKStickerTracker&utm_medium=Document&utm_campaign=BuyFromStore&variant=42714196803782)
2. A device with a camera
3. An account on [Trackpac RAK](https://v2.trackpac.io/)


:::tip 📝 NOTE:
The RAK2270 does not have an integrated GPS. The accuracy of the location will be determined by the redundancy of Helium hotspots in the surrounding area. To learn more about trilateration, refer to [Trackpac Medium](https://trackpac.medium.com/removing-the-need-for-gps-with-ai-trilateration-and-the-helium-network-40118a1fd5d7).
:::

## Product Configuration

### Onboard the RAK2270 to the RAK Trackpac

1. Log in to the Trackpac RAK platform. If you do not yet have a Trackpac RAK account, follow these steps to create one:
    - Go to [Trackpac RAK](https://v2.trackpac.io/) and click Sign up.
    - You can also register with your Google account by clicking the **Continue with Google** button.


<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/sign-up.png"
  width="35%"
  caption="Sign up to RAK Trackpac"
/>

2. After logging into the Trackpac RAK platform, click the **Scan QR Code** button.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/dashboard.png"
  width="100%"
  caption="RAK Trackpac Dashboard"
/>

3. Allow camera access if requested, then scan the QR code of your RAK2270.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/scan-qr.png"
  width="30%"
  caption="Scan the QR Code"
/>

4. Your RAK2270 sticker should be successfully listed and onboarded in the dashboard's Stickers field.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/sticker-dashboard.png"
  width="100%"
  caption="Sticker Dashboard"
/>

### Power On the RAK2270

After adding the RAK2270 to the Trackpac RAK platform, you can now power it on whenever you want. To do this, peel off the bottom part of the sticker.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/power-on.png"
  width="50%"
  caption="Power on the Sticker Tracker"
/>

### Customize Data Visualization

Once the RAK2270 is onboarded, you can customize how you visualize the data.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/visualize-data.png"
  width="80%"
  caption="RAK2270 Data Visualization"
/>

You can customize the following:
- Change Name
- Change Forwarder
- Convert Temperatures to Fahrenheit
- Disable Map Matching
- Disable Animated Lines
- View in 2D or 3D
- Set Date and Time Range



#### Add a Base

Adding a base stops drift when static and allows you to set up alerts when a tag enters or exits a base.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/add-base.png"
  width="50%"
  caption="Adding a Base"
/>

#### Create Alert

Alerts are triggered when the value of a tag exceeds or falls below a predefined threshold, such as battery or temperature.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/create-alert.png"
  width="50%"
  caption="Create an Alert"
/>

#### Add Contact

Manage your contacts for receiving SMS and email alerts.

<rk-img
  src="/assets/images/wisnode/rak2270/quickstart/add-contact.png"
  width="50%"
  caption="Add a Contact"
/>