---
rak_desc: Contains instructions and tutorials in installing and deploying your RAK2171. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img:  /assets/images/wisnode/rak2171/overview/rak2171.png
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK2171
  - quickstart
  - wisnode
---


# RAK2171 Quick Start Guide

## Prerequisites

### What Do You Need?

Before going through each and every step in the guide of the RAK2171 WisNode TrackIt, make sure to prepare the necessary items listed below:

- RAK2171 WisNode TrackIt
- WisGate Edge gateway
- An Android or iOS device with Bluetooth

### What’s Included in the Package?

- 2pc RAK2171 WisNode TrackIt
- 2pc Charging cable with magnetic plate
- 2pc Protective silicone case

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/1.png"
  width="50%"
  caption="Inclusion list"
/>


## Product Configuration

WisNode TrackIt supports three working modes:
1. [LoRaWAN Mode](#lorawan-mode)
2. [P2P Mode](#lora-peer-to-peer-p2p-mode), 
3. [Third-party LNS](#third-party-lorawan-network-server-lns-mode).

### LoRaWAN Mode

To fully utilize the WisNode TrackIt and the TrackIt App in this mode, you need to use RAK WisGate Edge gateway/s.

In this mode, the WisNode TrackIt is configured via the TrackIt application on your phone. The TrackIt application automatically registers the RAK2171 trackers in the WisGate Edge gateways' Built-in Network Server. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/2.png"
  width="50%"
  caption="LoRaWAN mode"
/>


1. Download and install the **TrackIt App** on your smartphone.
2. Turn on the Bluetooth on tour smartphone.
3. Start the **TrackIt App**. Location permission may be requested, allow it.
4. Agree with the **Terms and Conditions** and the **Privacy Policy**, and press the **Sign in with RAK ID** button.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/3.jpg"
  width="30%"
  caption="Welcome screen"
/>

5. Sign in with your RAK ID or sign up for a new RAK ID if you don’t have an account. If you do not have a RAK ID, press the **Create new** link and fill the needed information.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/sign-in.png"
  width="70%"
  caption="Sign in screen"
/>

6. After you log in, the App will prompt you to add a tracker. To start the pairing process, press the **+ ADD TRACKER** button.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/pairing.png"
  width="70%"
  caption="Add tracker and Start Pairing screen"
/>


7. Hold the **Power button** of your RAK2171 for 3 seconds to turn it on. If the device was turned on previously, you may need to restart it, as the Bluetooth is available for pairing for 3 minutes. 

8. Press the **Start Pairing** in the app. An information screen will be displayed to inform you of the process. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/8.jpg"
  width="30%"
  caption="Pairing screen"
/>

If the tracker is turned off or the Bluetooth pair period has expired, you will see a **Tracker not found** message. Restart the tracker and try again.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/9.jpg"
  width="30%"
  caption="Pairing screen"
/>


9. After successful pairing, you will see a configuration screen, where you will be able to change the tracker's default name and the working mode. This section is for the LoRaWAN mode, so press the LoRaWAN button to change the mode from LoRa P2P to LoRaWAN. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/setup-process.png"
  width="70%"
  caption="Set up screen"
/>

10. You will see two options: **RAK Embedded NS** and **Third Party NS**. For this mode, press **RAK Embedded NS**.

11. Confirm that the gateway is powered and ready by pressing the **GATEWAY ON** button. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/12.jpg"
  width="30%"
  caption="Gateway on confirmation"
/>

12. You will be prompted to connect to the Wi-Fi AP of your RAK gateway. Press the **GO TO WI-FI SETTINGS** button. You will be redirected to your phone's Wi-Fi settings, where you need to find the RAK WisGate Edge gateway Wi Fi AP and connect to it. You will be promoted for the gateway's login credentials.

- By default,
  - Username: **root**
  - Password: **root**

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/connecting-wifi.png"
  width="70%"
  caption="Connect to the gateway's Wi-Fi screen"
/>

13. After successful login, the TrackIt app will create an application in the gateway's built-In NS and will register the TrackIt device automatically. Once you are done, press the **VIEW ON MAP** button to see the WisNode TrackIt location on the application map. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/map.png"
  width="70%"
  caption="Successful connection screen"
/>

### LoRa Peer-to-Peer (P2P) Mode

In this mode, no LoRaWAN gateway is needed, but you need at least two RAK2171 devices. One of the trackers is permanently connected via Bluetooth to the TrackIt App on your smartphone and acts a **Host**. The other tracker/s is/are registered as **Client** and send their data to the Host tracker. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/17.png"
  width="60%"
  caption="P2P mode"
/>

1. Download and install the **TrackIt App** on your smartphone.
2. Turn on the Bluetooth on tour smartphone.
3. Start the **TrackIt App**. Location permission may be requested, allow it.
4. Agree with the **Terms and Conditions** and the **Privacy Policy**, and press the **Sign in with RAK ID** button.


<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/3.jpg"
  width="30%"
  caption="Welcome screen"
/>

5. Sign in with your RAK ID or sign up for a new RAK ID if you don’t have an account. If you do not have a RAK ID, press the **Create new** link and fill the needed information.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/sign-in.png"
  width="70%"
  caption="Sign in screen"
/>

6. After you log in, the App will prompt you to add a tracker. To start the pairing process, press the **+ ADD TRACKER** button.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/pairing.png"
  width="70%"
  caption="Add tracker and Start Pairing screen"
/>

7. Hold the **Power button** of your RAK2171 for 3 seconds to turn it on. If the device was turned on previously, you may need to restart it, as the Bluetooth is available for pairing for 3 minutes. 

8. Press the **Start Pairing** in the app. An information screen will be displayed to inform you of the process. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/8.jpg"
  width="30%"
  caption="Pairing screen"
/>

If the tracker is turned off or the Bluetooth pair period has expired, you will see a **Tracker not found** message. Restart the tracker and try again.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/9.jpg"
  width="30%"
  caption="Pairing screen"
/>

10. After successful pairing, you will see a configuration screen, where you will be able to change the tracker's default name and the working mode. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/10.jpg"
  width="30%"
  caption="Set up screen"
/>

11. Select the LoRa P2P mode and press **ADD**. Your tracker is now added as a **Host**, then press the **VIEW ON MAP** button to see its location. As the Host should be always connected to your smartphone, this is also your position. 

:::tip 📝 NOTE:
The first Tracker you add will act as a **Host**. All other trackers added will be **Clients**. 
:::

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/1819.png"
  width="70%"
  caption="Host tracker is added"
/>

12. To add a **Client** tracker, press the **+** button on the map. The adding process is the same as for the **Host**.  If you go to the map and slide up the menu at the bottom, you will see the registered trackers, their role, and battery status.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/2021.png"
  width="70%"
  caption="Client tracker is added and Registered Trackers List"
/>


### Third-Party LoRaWAN Network Server (LNS) Mode

In this mode, any LoRaWAN NS can be used (TTN, Helium, or other). The RAK TrackIt App acts only as a configuration tool for the trackers, no map or location data is available in the App. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/22.png"
  width="80%"
  caption="Client tracker is added and Registered Trackers List"
/>

1. Download and install the **TrackIt App** on your smartphone.
2. Turn on the Bluetooth on tour smartphone.
3. Start the **TrackIt App**. Location permission may be requested, allow it.
4. Agree with the **Terms and Conditions** and the **Privacy Policy**, and press the **Sign in with RAK ID** button.
   
<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/3.jpg"
  width="30%"
  caption="Welcome screen"
/>

5. Sign in with your RAK ID or sign up for a new RAK ID if you don’t have an account. If you do not have a RAK ID, press the **Create new** link and fill the needed information.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/sign-in.png"
  width="70%"
  caption="Sign in screen"
/>

6. After you log in, the App will prompt you to add a tracker. To start the pairing process, press the **+ ADD TRACKER** button.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/pairing.png"
  width="70%"
  caption="Add tracker and Start Pairing screen"
/>


7. Hold the **Power button** of your RAK2171 for 3 seconds to turn it on. If the device was turned on previously, you may need to restart it, as the Bluetooth is available for pairing for 3 minutes. 

8. Press the **Start Pairing** in the app. An information screen will be displayed to inform you of the process. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/8.jpg"
  width="30%"
  caption="Pairing screen"
/>

If the tracker is turned off or the Bluetooth pair period has expired, you will see a **Tracker not found** message. Restart the tracker and try again.

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/9.jpg"
  width="30%"
  caption="Pairing screen"
/>


9. After successful pairing, you will see a configuration screen, where you will be able to change the tracker's default name and the working mode. Press the LoRaWAN button to change the mode from LoRa P2P to LoRaWAN. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/setup-process.png"
  width="70%"
  caption="Set up screen"
/>

10. You will see two options: **RAK Embedded NS** and **Third Party NS**. For this mode, press **Third Party NS**.

11. You can see the RAK2171 **Device EUI**, **Application EUI**, **Application Key**, **Class**, and **Join mode**. From the **Region** menu, you can select the LoRaWAN band to be used.
    
:::tip 📝 NOTE:
* For now, the Class and Join mode can't be changed.
* All LoRaWAN bands will be added with next firmware updates. 
::: 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/2324.png"
  width="70%"
  caption="Third Party NS Set up screen"
/>

12. Press **CONFIRM** to choose the selected LoRaWAN region. Then, press **CONTINUE**. 
13. A notification will be displayed, that in Third-party LNS mode the device's position data will be not available on the TrackIt App's map as the data will be sent to the Third-party Network Server directly. 

<rk-img
  src="/assets/images/wisnode/rak2171/quickstart/25.jpg"
  width="30%"
  caption="Third Party NS Confirmation"
/>