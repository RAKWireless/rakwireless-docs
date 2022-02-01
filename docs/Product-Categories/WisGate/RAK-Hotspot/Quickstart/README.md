---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK Hotspot . Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Gateway.
rak_img: /assets/images/wisgate/rak-hotspot-miner/overview/RAK-Hotspot-Miner_home.png
next: ../Backup/
prev: ../Overview/
tags:
  - RAK Hotspot 
  - quickstart
  - wisgate
---

# RAK Hotspot Quick Start Guide

## Prerequisites

### What Do You Need?

1. **RAK Hotspot**
2. 32GB microSD Card (included) + Card Reader
3. USB Type-C Power Adapter (included)

:::warning ⚠️ WARNING
The SIM card slot of the cellular versions is not hot-swappable. Make sure the gateway is switched off before inserting or ejecting the SIM card.
:::

### What's Included in the Package?

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/quickstart/package-contents.png"
  width="75%"
  caption="Package Contents"
/>

## Product Configuration
For Antenna Mounting Scenarios and proper connectivity chain, refer to this [guide](../Troubleshooting/#proper-miner-connection-scenarios-with-the-rak-outdoor-enclosure-antennas) 

### Download the Helium App

The application is available for both Android and iOS. You can manually search it or just scan the QR Code provided below:
* [**Android**](https://play.google.com/store/apps/details?id=com.helium.wallet)
* [**iOS:**](https://apps.apple.com/ph/app/helium-hotspot/id1450463605)

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/quickstart/qr.png"
  width="50%"
  caption="QR Codes"
/>

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/quickstart/app.png"
  width="50%"
  caption="iOS and Android App"
/>


### Power on the RAK Hotspot

:::warning ⚠️ WARNING
Before powering on, it is best advice to follow the guidelines below to avoid damaging the RAK Hotspot. Familiarize the interfaces of the product as shown in the  [Interfaces](/Product-Categories/WisGate/RAK-Hotspot/Datasheet/#interfaces) section of the RAK Hotspot Datasheet.
:::

1. Attach the LoRa Antenna.  

2. When you are ready to setup your RAK Hotspot, plug in and connect the included power supply to the USB-C port on the RAK Hotspot. After 30 seconds, the device should be ready to configure via the app.

:::tip 📝 NOTE
From powering up the device, you only have 5 minutes to complete the setup. After 5 minutes, the app will no longer pair with the RAK Hotspot. In that case, you need to turn it off and turn it back on to try again.
:::

#### Account Security

During the setup of your account, you will be asked to input 12 words that must be used in order to recover or move accounts between phones. 

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/quickstart/fill-up.png"
  width="50%"
  caption="Account recovery or transfer keywords"
/>

### Backup your microSD Card

Backing up your microSD Card is very important as this contains your RAK Hotspot identity. If the card is lost or damaged, you may lose access to the Helium network, and require payment of a new add gateway fee. **Keep this backup card in a safe place**. 

You should only backup after adding the hotspot to your Helium account, and ideally once it has fully synced.

To backup, power off the RAK Hotspot and follow [backup instructions](../Backup/).