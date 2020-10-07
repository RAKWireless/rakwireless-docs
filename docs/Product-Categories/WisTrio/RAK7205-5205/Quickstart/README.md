---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK5205
  - RAK7205
---
# Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/quick-start-guide/lzqkvgwzjeol3o5no5ej.jpg"
  width="70%"
  caption="RAK5205 Package Contents"
/>
-->

### What do you need?

Before going through each and every step in the installation guide of the RAK5205 WisTrio LPWAN Tracker, make sure to prepare the necessary items listed below:

1. **RAK5205 WisTrio LPWAN Tracker**
2. Micro USB Cable
3. Gateway in Range for Testing
4. Windows PC

::: tip 📝 NOTE
This device released by RAKWireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, please refer to the sections below:

1. [Burning the Bootloader](/Product-Categories/WisTrio/RAK7205-5205/Quickstart/#burning-bootloader-into-the-device)
2. [Upgrading the Firmware](/Product-Categories/WisTrio/RAK7205-5205/Quickstart/#upgrading-the-firmware)
:::


### What's Included in the Package?

- 1pc - RAK5205 WisTrio LPWAN Tracker
- 1pc - Micro USB Cable
- 1pc - LoRa Antenna
- 1pc - GPS Antenna
- 1pc - Battery connector cable (JST) - requires soldering
- 5pcs - Jumper Caps
- Male to Female Jumper Wires

## Product Configuration

### Interfacing with the RAK7205/RAK5205 WisTrio LPWAN Tracker

In order for you to be able to interface with the RAK7205/RAK5205 WisTrio LPWAN Tracker with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK5205 , you should install the LoRa and GPS antenna first . Not doing so might damage the board
:::

- Connect your RAK5205 WisTrio LPWAN Tracker in your Windows Machine using the provided micro-usb cable.
- Open the RAK Serial Port Tool :

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/interfacing-with/teufuzsi3aykwmda4un2.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type devmgmt.msc or search in the Start Menu

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/interfacing-with/jnsaeljcwqk3gnxjvgum.png"
  width="90%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name Silicon Labs CP210X USB to UART Bridge and take note of the COM Port Number.

::: tip 📝 NOTE
If you didn't find any Port with the name Silicon Labs CP210X , make sure you have downloaded the CP210X Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct BaudRate then click Open:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/interfacing-with/ipc7wkiipcbsfrgvtm9e.png"
  width="90%"
  caption="Correct COM Port and Baudrate"
/>

### Connecting to The Things Network (TTN)

In this section, we will be connecting the RAK5205 WisTrio LPWAN Tracker to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/szwxvka0wyqg5ybjrffb.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/zswi6okyca0xho7ncmpr.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/avbjws3k6waobihvlkxz.png"
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
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/xku0fqxd0skmbhs9rykk.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device"**

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/qqtxyb9wei7egapulrnx.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK5205 WisTrio LPWAN Tracker in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-ttn/tcurvojvwchovusuxptg.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the **OTAA mode** or **ABP mode** section.

#### OTAA Mode

When setting up a new device in TTN, its default mode is **OTAA** or **Over-the-Air Activation**. For configuring it you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/s5ezrnlxr9qbwfbtssne.png"
  width="100%"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK5205 to work in OTAA mode in the EU868 band, as an example.

::: tip 📝 NOTE
The default LoRa working mode for the RAK5205 is LoRaWAN 1.0.2, while the default LoRa join mode is OTAA, and the default LoRa class is Class A.
:::

1. Set mode to OTAA, device class to Class A and your LoRaWAN region to your correct frequency band, with the following set of commands below. Remember to replace XXX with the your LoRaWAN region, see this link for your frequency plan.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config=lora:class:0
```

```sh
at+set_config=lora:region:XXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/okwyucipaed3fnrarkso.png"
  width="90%"
  caption="Setting up the RAK5205 operation mode"
/>

2. Now that the modes are set, enter the parameters: : **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

```sh
at+set_config=lora:dev_eui:XXXX
```

```sh
at+set_config=lora:app_eui:XXXX
```

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/jttmbmkhm0ac0duvap94.png"
  width="90%"
  caption="Setting up the RAK5205 OTAA parameters"
/>

You should end up with a window as the one in **Figure 15** above with **a series of OK messages**.

3. Finally, execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/eevf8jgjt1p48i17vugw.png"
  width="90%"
  caption="Join command"
/>

4. You can test the connection by sending an uplink frame. Use the following as an example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/tsyls5mfkzctes7lh1jg.png"
  width="90%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 17, then you are all set!

::: tip 📝 NOTE
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-otaa-mode/vab3mt37t1tozvj2bg0i.png"
  width="90%"
  caption="Sending Data to TTN from RAK5205"
/>

#### ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/orxqkqr9ydutx24y9k3m.png"
  width="100%"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in Figure 19.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/dj7tij9ejfoopdheutmh.png"
  width="100%"
  caption="ABP parameters screen"
/>

4. Now we need to update the RAK5205 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```sh
at+set_config=lora:region:EU868
```

As you can see in Figure 20, as we were in the same region (EU868), there was no change.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/gkaye44gsjjuxhtptjmv.png"
  width="90%"
  caption="Region setup"
/>

5. Change the mode to **ABP** with the command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/xxgmfyq9dkgzu7hcfq4g.png"
  width="90%"
  caption="Join mode setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case (Figure 20 for reference of the parameters):

```sh
at+set_config=lora:dev_addr:XXXX
```

```sh
at+set_config=lora:nwks_key:XXXX
```

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/yjupd0dh7ytr1rzqe118.png"
  width="90%"
  caption="Setting up the RAK5205 ABP parameters"
/>

You should end up with a window as the one in **Figure 22** above with **a series of OK messages**.

7. Finally, execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/y81mijqfbzfvhxlvt8qm.png"
  width="90%"
  caption="Join command"
/>

8. You can test the connection by sending an uplink frame. Use the following as an example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/tfs0ngbmzluoex9gl3kn.png"
  width="90%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 25, then you are all set!

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/ttn-abp-mode/nyce6bmb0fhsfjyi4op6.png"
  width="100%"
  caption="Sending Data to TTN from RAK5205"
/>

### Connecting to ChirpStack

The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use to connect with ChirpStack according to the following steps:

::: tip 📝 NOTE
In this section, it is an assumption that you have already connected your Gateway with TTN correctly. If not, kindly look into our [online documentation](https://doc.rakwireless.com/) of your RAK Gateway in hand.
:::

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button, then filling them in.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/yrgeavaswetbj2xf7sqq.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/nsuwadkci3t4e6u1ttzu.png"
  width="100%"
  caption="Creating the Application"
/>

4. Click the new item name “**RAKwireless_Test_Application**”:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/cxpiojzcr5o096l09g0h.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/auuldsmkfjgmb6tmo6ta.png"
  width="100%"
  caption="RAKwireless Test Application"
/>

5. Add a LoRa node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/jocka410vvlsenkdcf0a.png"
  width="100%"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/connecting-to-chirpstack/xigu9w6pypfqr8mgnsld.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::

#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/xjpytzbfs9a9bzjjqohr.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/hkmekngvrkk9goqid1pv.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK5205 WisTrio LPWAN Tracker as "dev_eui" is the same in the image highlighted below.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/mdbj3th73unruqxl98zs.png"
  width="100%"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/xrmpjlafrry3ag479lnl.png"
  width="100%"
  caption="Application Key LoRaWAN"
/>

::: tip 📝 NOTE:
The Application EUI which was into RAK5205 as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK5205 WisTrio LPWAN Tracker by using **AT commands**. To do this, connect your RAK5205 WisTrio LPWAN Tracker to a PC, power it on and open **RAK Serial Port Tool** on your computer.

```sh
at+version
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/fqw3e70otnu8ymgnmu79.png"
  width="45%"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK5205 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa join mode to **OTAA** and LoRa class to **Class A** by typing the AT commands shown in the picture below.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config-lora:class:0
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/mdjpe1uhxdmahhthbt8w.jpg"
  width="90%"
  caption="Setting of LoRaWAN mode and class"
/>

6. Type the following AT command to set the: **Frequency/Region, Device EUI, Application EUI and Application Key.** Remember to replace the **"XXX"** and **"XXXX"** with the corresponding parameter value for your particular case:

```sh
at+set_config=lora:region:XXX
```

```sh
at+set_config=lora:dev_eui:XXXX
```

```sh
at+set_config=lora:app_eui:XXXX
```

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/vugtbybavkertynte382.jpg"
  width="90%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/rkeautvpyyd4oquhxvgq.jpg"
  width="90%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/xlebk2u3xe2ryxo5ss11.png"
  width="45%"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/pvt7etzwzprp8nqebfqi.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK5205 WisTrio LPWAN Tracker to the ChirpStack by typing the command below in the serial port.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/j7c4lszbgth963mh6kea.png"
  width="45%"
  caption="Sending Data to ChirpStack"
/>

You can see the message on ChirpStack page:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-otaa-mode/qk5n8nssmvinougxfqk6.png"
  width="100%"
  caption="Message Received in ChirpStack"
/>

#### ABP Mode

**1.** If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning Warning:
 Frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/sgmhz031rjwdryeko8cv.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

**2.** Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/anv0xqjuyslnkiue0ltb.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

**3.** Use these parameters to set RAK5205 WisTrio LPWAN Tracker by using AT command. Set **LoRa join** mode to **ABP**:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

**4.** Set LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/kkm5pwzhi44aif78akij.jpg"
  width="45%"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

**5.** Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/hybihb6l6knq8lccnm1h.jpg"
  width="45%"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Tool"
/>

**6.** Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/tpqvwwbxnmlwzqcfgozy.jpg"
  width="45%"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

**7.** Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/gzryq4icdnjuxykqgfhz.jpg"
  width="45%"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

**8.** Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/czhbmtdl7or1c2d6katt.jpg"
  width="45%"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 After configuring all parameters, you need to reset RAK5205 WisTrio LPWAN Tracker for saving parameters!
:::

**9.** After resetting RAK5205 WisTrio LPWAN Tracker, join in ABP mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE:
 Actually,
it is not needed to join in ABP mode. But you still need to set this AT command to
validate the parameters which you just set for ABP mode.
:::

**10.** Now, let’s try to send a data from RAK5205 WisTrio LPWAN Tracker to ChirpStack:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK5205 WisTrio LPWAN Tracker on ChirpStack page:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/chirpstack-abp-mode/wv0gms26hbo1cktpspfe.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

### Decoding Sensor Data on ChirpStack and TTN

#### Analyzing Sensor Data from RAK5205

In the previous section, we have successfully sent some raw data from our RAK5205 LPWAN Tracker to The Things Network, but the problem is that you can't really see the actual sensor data from the payload. In this section , we will solve that and understand what each payload means.

Let's take this data for example:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/otdvg3shjsksxrm6bbl1.jpg"
  width="100%"
  caption="Sample Payload"
/>

For this example, the payload is : **01 88 05 37 97 10 9D 59 00 DC 14 08 02 01 7A 07 68 58 06 73 25 6D 02 67 01 1D 04 02 14 AF 03 71 FF FF FF DD FC 2E**

Now let's analyze each data , which is in Hexadecimal Format. We will be using the data mentioned above as an example. We will convert the Hexadecimal Data into Decimal Data using this [converter](https://www.rapidtables.com/convert/number/hex-to-decimal.html?x=FF) in order to be able to understand it.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/lwg2elvxz58fwgheftzw.jpg"
  width="45%"
  caption="Hexadecimal to Decimal converter"
/>

##### 1. GPS Data

Example Data: **01 88 05 37 97 10 9D 59 00 DC 14**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier**      | **True Value** |
| ------------- | ------------ | ---------------------- | ------------------- | -------------- |
| **Data Flag** | 01 88        |                        |                     |                |
| **Latitude**  | 05 37 97     | 341911                 | 0.0001 ° Signed MSB | 34.1911°       |
| **Longitude** | 10 9D 59     | 1088857                | 0.0001 ° Signed MSB | 108.8857°      |
| **Altitude**  | 00 DC 14     | 56340                  | 0.01 m Signed MSB   | 563.4 m        |

##### 2. Battery Voltage

Example Data: **08 02 01 7A**

| **Parameter**       | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag**       | 08 02        |                        |                |                |
| **Battery Voltage** | 01 7A        | 378                    | 0.01 Signed    | 3.78 V         |

##### 3. Humidity

Example Data: **07 68 58**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------- | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag** | 07 68        |                        |                |                |
| **Humidity**  | 58           | 88                     | 0.5 % Unsigned | 44.0 % RH      |

##### 4. Pressure

Example Data: **06 73 25 6D**

| **Parameter** | **Hex Data** | **Decimal Equivalent** | **Multiplier**       | **True Value** |
| ------------- | ------------ | ---------------------- | -------------------- | -------------- |
| **Data Flag** | 06 73        |                        |                      |                |
| **Pressure**  | 25 6D        | 9581                   | 0.1 hPa Unsigned MSB | 958.1 hPa      |

##### 5. Temperature

Example Data: **02 67 01 1D**

| **Parameter**   | **Hex Data** | **Decimal Equivalent** | **Multiplier**    | **True Value** |
| --------------- | ------------ | ---------------------- | ----------------- | -------------- |
| **Data Flag**   | 02 67        |                        |                   |                |
| **Temperature** | 01 1D        | 285                    | 0.1 °C Signed MSB | 28.5℃          |

##### 6. Gas Resistance

Example Data: **04 02 14 AF**

| **Parameter**      | **Hex Data** | **Decimal Equivalent** | **Multiplier** | **True Value** |
| ------------------ | ------------ | ---------------------- | -------------- | -------------- |
| **Data Flag**      | 04 02        |                        |                |                |
| **Gas Resistance** | 14 AF        | 5295                   | 0.01 kΩ Signed | 52.95 kΩ       |

##### 7. Accelerometer

Example Data: **03 71 FF FF FF DD FC 2E**

| **Parameter**      | **Hex Data** | **Decimal Equivalent** | **Multiplier**     | **True Value** |
| ------------------ | ------------ | ---------------------- | ------------------ | -------------- |
| **Data Flag**      | 03 71        |                        |                    |                |
| **Acceleration X** | FF FF        | -1                     | 0.001 g Signed MSB | -0.001g        |
| **Acceleration Y** | FF DD        | -35                    | 0.001 g Signed MSB | -0.035g        |
| **Acceleration Z** | FC 2E        | -978                   | 0.001 g Signed MSB | -0.978g        |

#### Decoding Sensor Data in TTN

##### Input Decoding Function in TTN

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_TTN.js)**.

2. From your TTN console, go to application page and click the "**Payload Formats**" tab as shown in the image below.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/i4xmo8ndpvbmx8i6q8tj.jpg"
  width="80%"
  caption="Payload Format at TTN Application Page"
/>

3. Next, select "**Payload Format**" as "**Custom**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/ddpqx0x7rlma36ogiwc1.jpg"
  width="80%"
  caption="Inputting the Decoder Function"
/>

##### Testing the Validity of Decoding Sensor Data in TTN

**Input** the data below in the "**Payload**" box as shown in the image below.

**01 88 05 37 97 10 9D 59 00 DC 14 08 02 01 7A 07 68 58 06 73 25 6D 02 67 01 1D 04 02 14 AF 03 71 FF FF FF DD FC 2E**

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/mlgmgm8lstjnnufc5q88.jpg"
  width="80%"
  caption="Testing Payload Data"
/>

- Then, click "**Test**" and it will generate a code with the decoded data as shown in the image above.

```json
{
  "DecodeDataHex": "0188053797109d5900dc140802017a0768580673256d0267011d040214af0371ffffffddfc2e",
  "DecodeDataObj": {
    "acceleration": {
      "x": "-0.001g",
      "y": "-0.035g",
      "z": "-0.978g"
    },
    "battery": "3.78V",
    "environment": {
      "gasResistance": "52.95kΩ",
      "humidity": "44.0% RH",
      "pressure": "958.10hPa",
      "temperature": "28.50°C"
    },
	  "gps": {
      "altitude": "563.4m",
      "latitude": "34.1911°",
      "longitude": "108.8857°"
    }
  }
}
```

Click "save payload functions" button to save the decoding function.

#### Testing in Real System in TTN

After gateway and node go online, click the uplink data record from the application data tab to check the decode status. From the image below, we can see the data decoded successfully in TTN.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/gncjz92kenv5h8w39bp0.jpg"
  width="80%"
  caption="Uplink Decoded Data"
/>

#### Decoding Sensor Data in ChirpStack

##### Input Decoding Function in ChirpStack

1. To start with, download the decoding function through this **[link](https://github.com/RAKWireless/RUI_LoRa_node_payload_decoder/blob/master/RUISensorDataDecoder_for_ChirpStack.js)**.

2. From to your ChirpStack, go to application page and click the "**APPLICATION CONFIGURATION**" tab as shown in the image below.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/vs8mobszwtkfyqeodvze.jpg"
  width="80%"
  caption="Application Configuration Tab"
/>

3. Next, select "**Payload codec**" as "**Custom JavaScript codec functions**". Then, from the decoder tab, copy and paste the decoder function from **step 1**.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/pvjdwnmlcykwa7g4upmr.jpg"
  width="80%"
  caption="Decoded Function in Chirpstack"
/>

4. Then, click ‘**UPDATE APPLICATION**’ button to save decoding function.

##### Testing in Real System in ChirpStack

After gateway and node go online, click the uplink data record from the application data at "**LIVE DEVICE DATA**" tab to check the decode status. From the image below, we can see the data decoded successfully in ChirpStack.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/decoding-sensor-data/grvuetv6kt8qdtnopyuf.jpg"
  width="80%"
  caption="Decode Status in ChirpStack"
/>

### Cayenne Integration

MyDevice/Cayenne is a service that allows one to monitor node data in real time and can also send downlink control messages. Additionally it has a wide range of integrations for alerts, notifications, and alarms. Its visualization tools provide various ways of representing both real time and statistical data (graphs, dials, gauges, scales, charts, etc.).

#### The Things Network Configuration

Before we can use Cayenne , we need to configure our Application in TTN to properly work with it.

- Log into your TTN Console and navigate to the desired application and Device (RAK5205 in this case).
- Go to the Payload Formats tab as seen in the Figure 64 and choose **"Cayenne LPP**"

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/crg46b4kwqgjgutbshaa.jpg"
  width="100%"
  caption="Device Payload Formats"
/>

- Next, go to the Integrations Tab and press the "add integration" button:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/qpggeszni6bbpsvngyjr.jpg"
  width="100%"
  caption="Device Integration"
/>

- Select the MyDevices Icon :

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/szfeauknzfqphzri2pwb.jpg"
  width="100%"
  caption="My Devices Integration"
/>

- You will then be redirected to a page as seen below (Figure 67) where you need to enter a Process ID and select an Access Key (Choose the default key)

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/y5ruf9bbupnyvggmjm1d.jpg"
  width="100%"
  caption="myDevices Integration Configuration"
/>

#### Cayenne Configuration

If you don't have an account in Cayenne, head on to [https://mydevices.com/cayenne/signup/](https://mydevices.com/cayenne/signup/) and create an account for free.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/o4dkqcf3od2nzjxn5vws.jpg"
  width="100%"
  caption="Cayenne start screen"
/>

- Once logged in, navigate to the "Add New" drop down menu in the upper left corner and choose "Device/Widget".

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/jixjac2mbfkrsskosthu.jpg"
  width="100%"
  caption="Adding a device"
/>

- Select **LoRa** in the list of Devices and Widgets and navigate to The Things Network at the end of the list.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/aqizwyy4tnhzu7qrrext.jpg"
  width="100%"
  caption="Choosing your device from the list"
/>

- A list of LoRa Products and Widgets are now displayed. Scroll down and look for "**Cayenne LPP**".

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/hrzw47je3uxbv9a8fyhe.jpg"
  width="100%"
  caption="Cayenne LPP device selection"
/>

- Lastly, Input the Device EUI and Optionally set if your device is moving or stationary.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/tlrku9fdhfgzkypfgswe.jpg"
  width="100%"
  caption="Setting device parameters"
/>

- If everything went well you should end up with a screen as the in Figure 73:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/cayenne-integration/x80ncxi5xnwkhjlqcqby.jpg"
  width="100%"
  caption="Dashboard live view of RAK5205"
/>

::: tip 📝 NOTE
There are two widgets that appear as general Analog ones. The first one on channel 8 is the Speed as measured by the GPS receiver. The second one on channel 9 is the AQI (Air Quality Index). The user needs to edit the names and choose an appropriate UI representation by hand. This is so, because as of this moment LPP doesn’t support data of such type and they are transmitted as general analog values. In Rev2 of the LPP standard it is expected these issues will be address.
:::

### LoRa P2P Mode

In this section, I’ll show how to use LoRa P2P mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.

1. First, find two **RAK5205 LoRa Tracker** which can work on EU868 frequency and make sure their firmware version isn’t less than **V3.0.0.1**.

2. Next, connect these two RAK5205 LoRa Tracker with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRaP2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/lora-p2p-mode/qytvsg9mx3y4drl7pwrg.png"
  width="45%"
  caption="P2P Initialization"
/>

4. Then configure LoRaP2P parameters for both of them as follow for example:

```sh
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/lora-p2p-mode/fyoulppnh8gdz3vawjv7.jpg"
  width="90%"
  caption="Configuring P2P in both RAK5205 Nodes"
/>

5. OK! Try to send a message from LoRa Breakout Module 2 (the right one) to LoRa Breakout Module 1 (the left one):

```sh
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/lora-p2p-mode/khjhkisjuxtjb5oxps94.png"
  width="90%"
  caption="Message sent and received status in the two Nodes"
/>

6. Successfully! Now, send more messages.

```sh
at+send=lorap2p:12345678901234567890
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/lora-p2p-mode/ckbymbjhypol3p0q1bjp.jpg"
  width="90%"
  caption="Succeeding Messages sent to the other Node"
/>

Yehey! You have successfully finished your RAK5205 LPWAN Tracker Set Up. You are now ready to develop the coolest project that could potentially change the world.

## Miscellaneous

### Burning Bootloader into the Device

Use the the latest firmware for the RAK5205 WisTrio LPWAN Tracker accessible in this **[directory](https://downloads.rakwireless.com/en/LoRa/WisTrio-LoRa-RAK5205/Firmware/)** in order to avoid potential problems. Burning the Bootloader into the device is done as follows:

::: warning ⚠️ WARNING
Skip this section if you have a RAK5205 V3.0.0.0 firmware or newer, for it has already a bootloader.
:::

You need to make sure you have the latest firmware on your device . To be able to do this, you need to follow these steps:

1. To start with, download and install the “STM32CubeProgrammer” tool in your PC through this link or through this RAK directory.

2. Then, configure your RAK5205 by jumping the “**BOOT**” pin and “**VCC**” pin for boot mode as the following pictures shown below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/eeh8zvvyderwyp6caxsu.jpg"
  width="60%"
  caption="Boot and VCC Pins"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/ygkxl9ch7laja72wssxw.jpg"
  width="60%"
  caption="Jumper at Boot and VCC pins"
/>

3. Connect your RAK5205 to your PC using the USB cable as follow:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/mnlyzbqc9pcxtudki9gb.jpg"
  width="50%"
  caption="RAK5205 connected to your PC via USB cable"
/>

4. Choose the correct port number in the **COM Port** field. You can check this in the Device Manager.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/ct9xcr8m3feyf4hcsuc1.jpg"
  width="75%"
  caption="Checking COM Port through Device Manager"
/>

5. Open the “**STM32CubeProgrammer**” tool.

6. Select **UART type**; go to COM Port and look for your RAK5205 Breakout Board COM Port (ex. COM5).

7. Configure the **Baud rate** and **Parity**.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/kxwsnn5cfc3c7mhdg9kw.jpg"
  width="100%"
  caption="UART Settings in STM32CubeProgrammer"
/>

8. Then, press the “**Connect**” button at the top right corner.

::: warning ⚠️ WARNING
If there are some errors in the Log box or it can’t connect, please close the STM32CubeProgrammer and reset RAK5205, then open the STM32CubeProgrammer and connect again.
:::

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/uu4dimjfeqnzjefqbznv.jpg"
  width="100%"
  caption="Errors Occurred During Connecting"
/>

- The correct Log you should see is the information like the following picture shows:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/fe8qmougdo8brhppqggd.jpg"
  width="100%"
  caption="Successful Connection Log to your Device"
/>

Now, let’s start burning the bootloader into the RAK5205 WisTrio LPWAN Tracker.

9. First, **erase all** data on the RAK5205 WisTrio LPWAN Tracker referred from the following picture below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/tzcxzjuvnvzibznrfcwg.jpg"
  width="100%"
  caption="Erasing the Data in the Chip"
/>

10. Press “**Open file**” and select the bootloader file in the pop-up window as follows:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/ldnfi1fr87cxoxwgfbpa.jpg"
  width="100%"
  caption="Opening the Bootloader file"
/>

11. Click the “**Download**” button to start the burning process

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/gzos6pwkmw5lvbotnxf5.jpg"
  width="100%"
  caption="Downloading of Bootloader to the device"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/iteqb0yu5pqaz13he92k.jpg"
  width="100%"
  caption="Completing the Download of Bootloader into the device"
/>

12. OK, you have successfully burned the firmware into RAK5205 WisTrio LPWAN Tracker!

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/fnx2ybuctwfdgjcdnb9c.jpg"
  width="100%"
  caption="Successfully Burned the Bootloader to the device"
/>

13. "**Disconnect**” and close the “**STM32CubeProgrammer**” tool. Then, power down and remove the connection between BOOT pin and VCC pin to let RAK5205 WisTrio LPWAN Tracker work in normal mode.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/nuoi6ddmrpp7ne32p7gm.jpg"
  width="60%"
  caption="Jumper connection removed"
/>

14. Then, connect RAK5205 with your PC’s USB interface again.

If you have opened the serial port tool, you can see some content like this:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/burning-the-bootloader/wpwt4lcs7bupbdess4ns.jpg"
  width="45%"
  caption="Successfully Downloading the Bootloader"
/>

Alright! You can now start burning the firmware into RAK5205 WisTrio LPWAN Tracker.

### Upgrading the Firmware

If the firmware version of your RAK5205 WisTrio LPWAN Tracker is newer than V3.0.0.0 or you have just burned the bootloader into RAK5205 WisTrio LPWAN Tracker according to the Burning Bootloader into the Device section, you just need to burn the upgrade firmware according to the following steps now:

- First, type the command to let the RAK5205 WisTrio LPWAN Tracker work in boot mode.

::: tip 📝 NOTE
If you have just burned the bootloader by yourself according to the section 2, it works in boot mode now. If the current version of the RAK5205’s firmware is newer than V3.0.0.0, you need to set an AT command to let it work in boot mode
:::

```sh
at+set_config=device:boot
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/ak6dmrbeykbyxktghplr.jpg"
  width="45%"
  caption="Turning the Boot Mode on"
/>

- Next, close the serial port tool and download the **RAK Upgrade Tool** from this **[website](https://downloads.rakwireless.com/en/LoRa/RAK612-LoRaButton/Tools/RAK%20LoRaButton%20Upgrade%20Tool%20V1.0.zip)**. Then, extract and open the tool.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/bhnagxk2lyikpa1rqpmd.jpg"
  width="75%"
  caption="RAK Upgrade Tool"
/>

- Click “**Choose File**” button to choose the correct upgrade file:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/xy32xtmb8urj28pk1cr0.jpg"
  width="75%"
  caption="Choosing the Correct Upgrade file"
/>

- Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/nbn7qmum5do7ivvvva3m.jpg"
  width="75%"
  caption="Start Upgrading your Firmware"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/eprjekj8xxk77om7vbw3.jpg"
  width="75%"
  caption="Successfully Upgraded your Firmware"
/>

- Now, close the upgrade tool and open a serial port tool.
- We recommend you to use RAK serial port tool, because there are some ready AT commands in this tool and this will be very useful for you. You can get it from RAK website available for free at this [**RAK directory**](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).
- Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command to restart.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/upgrading-the-firmware/nrnvbjsxvodttrumo7x9.jpg"
  width="45%"
  caption="Restarting your Firmware"
/>

**Congratulations**! This information means that you have upgraded successfully the new firmware.

### Assembly Guide for RAK5205 Enclosure

This section provides you assistance when installing the Tracker Node Enclosure of your RAK5205.

#### Assembly List

The assembly includes the following

- **1x Enclosure**
- **1x Installation Kit**
- **1x LoRa Antenna**
- **1x GPS Antenna**
- **1x Supporting Plate**
- **4x M16, 2x M12 Cable Gland Covers**
- **1x PCB**
- **Battery and Adhesive**

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/gari52wtjjl62ychcxzn.jpg"
  width="75%"
  caption="Assembly List"
/>

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/os7t2xyybsnel3nku0vb.jpg"
  width="75%"
  caption="Assembly List"
/>

**1.** To start with, assemble the cover for your RAK5205 Enclosure.

**a.** If solar panel is necessary, attached it to the cover as shown using the silicon glue.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/hkvlodlletmm7bjllgf0.jpg"
  width="100%"
  caption="Attached Solar Panel in Cover"
/>

**b.** If not, then directly plug the opening cover with M16 Dome
plug.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/yk3veg7yrij2xrsln2ws.jpg"
  width="45%"
  caption="Inserting Plug in Cover with no Solar Panel"
/>

**2.** Install the Supporting Plate along with the two M4x5 Screws as shown in the image below:

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/naneciy4etcubtmm0xvl.jpg"
  width="45%"
  caption="Installed Supporting Plate"
/>

**3.** Using the three M16 Dome plugs and two M12 Dome plugs, plug the opening of the bottom
shell (left of the figure below). Then, if an external antenna or an external
interface is needed, replace the corresponding hole with the corresponding
cable (right or below).

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/rkdtlzgisoimwdls7cgh.jpg"
  width="100%"
  caption="Opening for External Antenna"
/>

**4.** Fix the PCB in the enclosure using the three M2.5x4 screws.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/htgbbtejshnbjjopd9dt.jpg"
  width="45%"
  caption="Fixing of RAK5205 in Enclosure"
/>

**5.** Attach the LoRa and GPS antenna at the bottom shell, in which the LoRa antenna is pasted above the M12 Dome plug while the GPS is pasted on the shorter side as shown in the figure below.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/roaftyivpwpzljam2c9x.jpg"
  width="45%"
  caption="Attached GPS and LoRa Antenna"
/>

**6.** Install two M2.5x15 hexagonal standoffs.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/o6epx0kevfpme74vd0io.jpg"
  width="45%"
  caption="Installed Hexagonal Standoffs"
/>

**7.** Plug the connector of the battery into the
socket of the PCB. (If you use solar panels,
then connect the cable to the PCB). Then, fix the supporting plate on the
standoff with two M2.5x4 screws.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/klxhtfnocwfgtjmy5yuc.jpg"
  width="45%"
  caption="Fixed Supporting Plate and Battery Cable Connected"
/>

**8.** Next, remove double-sided adhesive on the surface of the battery and attached it to the supporting plate.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/ktwfag3m6g3gssmy7569.jpg"
  width="45%"
  caption="Attaching of Battery in Supporting Plate"
/>

**9.** Lastly, install the cover.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/i7kgsa6tjlixqixruwca.jpg"
  width="45%"
  caption="Enclosure Cover Installed"
/>

#### Installation

##### Wall Mounting

**1.** Fix the installation kit on the bottom of the enclosure with four M5x10 screws.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/hfdmjo2talujxnwbuqni.jpg"
  width="45%"
  caption="Fixing Installation Kit"
/>

**2.** Using a Ø5mm drill head, drill 4 holes on the wall according to the dimension of the following picture and then plug the screw anchors in the wall.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/czouz5aajdzqxpkfvodf.jpg"
  width="45%"
  caption="Drill Holes into Wall according to this Dimension"
/>

**3.** Using the tapping screws, attach the device to the wall.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/psflyxobbeptcavumxpz.jpg"
  width="60%"
  caption="Mounting of Enclosure in Wall"
/>

##### Pole Mounting

**1.** The same with wall mounting, first, fix the installation kit on the bottom of the
enclosure with four M5x10 screws.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/dauvvkgtxw54m8hwdy75.jpg"
  width="45%"
  caption="Installation Kit Attached in Enclosure"
/>

**2.** Slide the Steel band clamps through the rectangular hole of the mount kit. Then, wrap the band clamps around the pole, lock them and tighten the clamps using a screwdriver.

<rk-img
  src="/assets/images/wistrio/rak7205-5205/quickstart/assembly-guide/lkfk2ftqzwgyovwlsjtb.jpg"
  width="45%"
  caption="Enclosure Clamped around the Pole"
/>
