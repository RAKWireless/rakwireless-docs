---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK811 Breakout Board
---

# Quick Start Guide

## Prerequisites

<!--
<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/quick-start-guide/dzsrvm2eaasyt3shktdh.png"
  width="35%"
  caption="RAK811 Breakout Board"
/>
--->

### What do you need?

Before going through each and every step in the installation and guide of the RAK811 Breakout Board, make sure to prepare the necessary items listed below:

1. **RAK811 Breakout Board**
2. USB-UART Module
3. Gateway in Range for Testing
4. Jumper Wires
5. 3.3 V Battery Power Supply
6. A Windows/Mac OS/Linux Computer


::: tip 📝 NOTE
The bootloader of the RAK811 Breakout Board is already pre-installed upon manufacturing so flashing the bootloader is not necessary for you to perform. If you find that the bootloader of your RAK811 Breakout Board damaged, kindly contact our support though our [RAKwireless forum](https://forum.rakwireless.com/). However, if you want to upgrade the firmware of the device, please refer to the documentation below:

1. [Upgrading the Firmware](/Product-Categories/WisDuo/RAK811-Breakout-Board/Quickstart/#upgrading-the-firmware)
   :::

### What's included in the package?

- 1 pc - RAK811 Breakout Board (chipset pre-soldered on the board)
- 1 pc - LoRa Antenna

## Product Configuration

### Interfacing with RAK811 Breakout Board

In order for you to be able to interface with the RAK811 Breakout Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK811 Breakout Board , you should install the LoRa antenna first . Not doing so might damage the board
:::

- Connect your RAK811 Breakout Board with the following diagram below.
- **Figure 1** shows the Pinout Diagram of the Board and **Figure 2** shows how to connect the RAK811 Breakout Board to the UART Module.

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/pinout_diagram.png"
  width="50%"
  caption="RAK811 Breakout Board Pinout Diagram"
/>

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/a5vvi5oofgnq7mwpiavn.jpg"
  width="40%"
  caption="RAK811 to USB Uart Module Connection"
/>

- Connect your USB - UART Module to your Windows Machine and Open RAK Serial Port Tool:

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/ou15nrdveyhmrzo8byof.png"
  width="80%"
  caption="RAK Serial Port Tool"
/>

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/siqhrem8xxxnvhj7vttn.png"
  width="60%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) . Find the name of of your USB UART Module driver and take note of the COM Port Number.

<rk-img
 src="/assets/images/wisduo/rak811-breakout-board/quickstart/interfacing-with-rak811-breakout/rib8pvikbtggt9xryvxp.png"
  width="80%"
  caption="Correct Port Number and Correct Baud rate"
/>


### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).
In this section, we’ll show you how to connect the RAK811 Breakout Board with TTN.

1. First, **connect** the RAK811 Breakout Board to your PC and open the **Serial Port Tool**.

2. Select the appropriate COM port and **open** it as in the image:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/lcvx0tpp0mvbqtfvveja.png"
  width="80%"
  caption="RAK811 Serial Port Tool"
/>

::: tip 📝 NOTE
In this section, it is the assumption that you are within the coverage range of a TTN Gateway.
:::

3. Now go to the [TTN Website](https://www.thethingsnetwork.org/) and Log in.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/xcnu0ubgglpnncjaxcxx.jpg"
  width="100%"
  caption="The Things Network Homepage"
/>

4. Choose "**Console**" located at the top right corner. Then, Click "**Application**".

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/dewhjv5kvji5cnwlb8q4.png"
  width="100%"
  caption="TTN Console page"
/>

#### Adding an Application

5. Press the "**add application**" button.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/q69iye4keg0wcwvllxq4.png"
  width="80%"
  caption="TTN Applications Page"
/>

**6.** Create your own Application by filling in with correct contents.

::: tip 📝 NOTE
The Application ID is an unique combination of lower case, alphanumerical characters, nonconsecutive - and \_.
:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/kyllbiovwoj3dagerfw9.png"
  width="80%"
  caption="TTN Add Application Page"
/>

7. Then press the “**Add application**” button at the bottom of this page, and you can see the following page:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/ig62tkokbeyymlwpe1gr.png"
  width="100%"
  caption="TTN Application Information Page"
/>

8. At the middle of this page, you can find the box named “**DEVICES**” and click “**register device**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/jxfqlvwpvbe8irybx6sm.png"
  width="100%"
  caption="Registering Device in TTN"
/>

9. Fill in the "**Device ID"** . Click the icon in the **“Device EUI**”, then a code is generated automatically.

You can get the **“Device EUI**” of your RAK811 with the following command, which will display all node parameters:

```sh
at+get_config=lora:status
```

In case you have had TTN generate a new **“Device EUI**” you can use the command below to import it into the RAK811 configuration parameters (**XXXX is the Device_EUI you want to update**):

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/izycmdjz16pclj4sbhtn.png"
  width="100%"
  caption="Filling in the Device Information"
/>

10. Then press the “**Register**” button at the bottom of this page to finish.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-ttn/jbsjagixye7gonowplap.png"
  width="100%"
  caption="Device Overview in TTN"
/>

Depending on which authentication method you want to use please proceed to either the **OTAA mode** or **ABP mode** section.


#### OTAA Mode

When setting up a new device in TTN, its default mode is **OTAA** or **Over-the-Air Activation**. For configuring it you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/hfrnmdayur5nwiykqf90.png"
  width="100%"
  caption="Device OTAA Parameters"
/>

Now, let us configure the RAK811 to work in OTAA mode in the EU868 band, as an example.

::: tip 📝 NOTE
The default LoRa working mode for the RAK811 is LoRaWAN 1.0.2, while the default LoRa join mode is OTAA, and the default LoRa class is Class A.
:::

1. Set mode to OTAA, device class to Class A and your LoRaWAN region to your correct frequency band, with the following set of commands below. Remember to replace XXX with your LoRaWAN region, see this link for your country's available frequency.

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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/okwyucipaed3fnrarkso.png"
  width="80%"
  caption="Setting up the RAK811 operation mode"
/>

2. Now that the modes are set, enter the parameters: **Device EUI, Application EUI** and **App Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case:

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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/jttmbmkhm0ac0duvap94.png"
  width="80%"
  caption="Setting up the RAK811 OTAA parameters"
/>

You should end up with a window as the one in **Figure 17** above with **a series of OK messages**.

3. Finally execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/eevf8jgjt1p48i17vugw.png"
  width="80%"
  caption="Join command"
/>

4. You can test the connection by sending an uplink frame. Use the following for example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/tsyls5mfkzctes7lh1jg.png"
  width="80%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 20, than you are all set!

::: tip 📝 NOTE
Be sure to have this window opened prior to sending data through the RAK Serial Port or you will not be able to receive the packet sent. Logging out your The Things Network acccount would also clear all the data sent and not being able to receive packets sent.
:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-otaa-mode/c3rkktdn5q8tofeo2oum.png"
  width="100%"
  caption="Sending Data to TTN from RAK811"
/>



#### ABP Mode

1. To join the ABP mode, go to device settings and switch the activation method to **ABP**.

2. The **Device Address**, **Network Session Key** and **App Session Key** will be generated automatically by default.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/msdyy9qeahlwmkezdktb.png"
  width="100%"
  caption="Switching to ABP mode"
/>

3. Save the mode change and return to the **Device Overview page**. You can copy the keys by pressing the button after the value fields marked in red in Figure 22.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/kujly9q7b3ka0avth0hn.png"
  width="100%"
  caption="ABP parameters screen"
/>

4. Now we need to update the RAK811 configuration (mode and parameters). Open the Serial Tool and type the command below to change the region (in case you have not done so already):

```sh
at+set_config=lora:region:EU868
```

As you can see in Figure 23, since we are in the same region (EU868), nothing has changed.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/gkaye44gsjjuxhtptjmv.png"
  width="80%"
  caption="Region setup"
/>

5. Change the mode to **ABP** with the command:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/xxgmfyq9dkgzu7hcfq4g.png"
  width="80%"
  caption="Join mode setup"
/>

6. Now that the mode has been changed, enter the parameters: **Device Address, Network Session Key**, and **Application Session Key**. Use the commands below. Remember to replace the **"XXXX"** with the corresponding parameter value for your particular case (See Figure 22 for reference of the parameters):

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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/yjupd0dh7ytr1rzqe118.png"
  width="80%"
  caption="Setting up the RAK811 ABP parameters"
/>

You should end up with a window as the one in **Figure 25** above with **a series of OK messages**.

7. Finally execute the join command:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/y81mijqfbzfvhxlvt8qm.png"
  width="80%"
  caption="Join command"
/>

8. You can test the connection by sending an uplink frame. Use the following as an example:

```sh
at+send=lora:1:12345678
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/tfs0ngbmzluoex9gl3kn.png"
  width="90%"
  caption="Sending an uplink frame"
/>

If you get a response in your TTN live data feed as in Figure 28, then you are all set!

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/ttn-abp-mode/rzwucwtfq8mue3evp2fc.png"
  width="100%"
  caption="Sending Data to TTN from RAK811"
/>



### Connecting to ChirpStack

The ChirpStack or previously known as LoRaServer project provides open-source components for building LoRaWAN networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

You can use RAK811 Breakout Board to connect with ChirpStack according to the following steps:

::: tip 📝 NOTE
This section assumed that you had already connected your Gateway with TTN correctly. If not, please take a look at [RAK Document Center](/wisgate/rak7244c/quickstart/).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.

2. By default, there is already one or more items in this page, you can use it or create a new item. Now, let’s create a new item by clicking the “**CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/xlubsj8qfhs9o1wqg3ao.png"
  width="100%"
  caption="ChirpStack Applications"
/>

3. Fill up the necessary information then Click "**CREATE APPLICATION**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/jjfxkdc14hrwxavqnejk.png"
  width="100%"
  caption="Creating the Application"
/>

4. Click the new item name “**RAK811**”:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/huqfi7q0iuvj3peoerje.png"
  width="100%"
  caption="Applications page in ChirpStack"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/zvda6jcwtxr1ci2fvdqc.png"
  width="100%"
  caption="RAK811 Application"
/>

5. **Add** a Node device into ChirpStack by clicking the “**CREATE**” button:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/o86hkpxcz88w3gtgq3rr.png"
  width="100%"
  caption="Adding a Node Device"
/>

6. Fill them in. You can generate a **Device EUI** automatically by clicking the Device EUI icon, or you can write the correct Device EUI in the edit box.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/connecting-to-chirpstack/kdmfb9lhoygt8lxczsew.png"
  width="100%"
  caption="Filling the Device Parameters"
/>

::: tip 📝 NOTE
If you want to join in OTAA mode, select “**DeviceProfile_OTAA**” in the “Device-profile” item. If you want to join in ABP mode and CN470 frequency, then, select “**DeviceProfile_ABP_CN470**” in the “Device-Profile” item. If you want to join in ABP mode and other frequencies except AS923 and CN470, you should select “**DeviceProfile_ABP**” in the “Device-profile” item.
:::


#### OTAA Mode

1. To join ChirpStack in OTAA mode, select “**DeviceProfile_OTAA**”.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/vy0kq5njvnuzo49ivkd5.png"
  width="100%"
  caption="Selecting OTAA Activation Mode in ChirpStack"
/>

2. Press “**CREATE DEVICE**” button. You may write the application key by yourself or generate it automatically by clicking the icon highlighted in the image.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ojwnskkac1njlitkurvr.png"
  width="100%"
  caption="Application Key Generation"
/>

3. Click "**SET DEVICE KEYS**” button. Now, you’ve completed the configuration on ChirpStack.

- The Device EUI which was set in the previous section to your RAK811 Breakout Board as "dev_eui" is the same in the image highlighted below.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/tvgeeoltqkzdne3ya5qw.png"
  width="100%"
  caption="Device EUI Code"
/>

- Same with the Application Key, which was set in the previous section as "app_key" is the same with the image highlighted.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/j0gh8yxjinczq4m7rxo1.png"
  width="100%"
  caption="Application Key LoRaWAN"
/>

::: tip 📝 NOTE
The Application EUI which was into RAK811 Breakout Board as “**app_eui**” is not needed for ChirpStack.
:::

4. Next, let’s **configure** RAK811 Breakout Board by using **AT commands**. To do this, connect your RAK811 Breakout Board to a PC, power it on and open **RAK Serial Port Tool** on your computer.

```sh
at+version
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/fqw3e70otnu8ymgnmu79.png"
  width="45%"
  caption="RAK Serial Port Tool"
/>

- Now, let us join our RAK811 using the OTAA activation mode.

5. If the join mode is not in OTAA, just set the LoRa join mode to **OTAA** and LoRa class to **Class A** by typing the AT commands shown in the picture below.

```sh
at+set_config=lora:join_mode:0
```

```sh
at+set_config-lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/mdjpe1uhxdmahhthbt8w.jpg"
  width="90%"
  caption="Setting of LoRaWAN mode and class"
/>

6. Type the following AT command to set the:**Frequency/Region, Device EUI, Application EUI and Application Key.** Remember to replace "**XXX"** and "**XXXX"** with the parameters set in the previous steps.

```sh
at+set_config=lora:region:EU868
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
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/vugtbybavkertynte382.jpg"
  width="90%"
  caption="Setting of Frequency and Device EUI"
/>

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/rkeautvpyyd4oquhxvgq.jpg"
  width="90%"
  caption="Setting of Application EUI and Key"
/>

7. Then, **join** in OTAA mode.

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/xlebk2u3xe2ryxo5ss11.png"
  width="45%"
  caption="Joining in OTAA"
/>

- **Joined Successfully!**

8. You can view the "**JoinRequest**" and "**JoinAccept**" on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ll6wmv6jqlnyhpxgaovj.png"
  width="100%"
  caption="Join Request of the Device in the ChirpStack"
/>

9. Let’s try sending data from our RAK811 Breakout Board to the ChirpStack by typing the command below in the serial port.

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/j7c4lszbgth963mh6kea.png"
  width="45%"
  caption="Sending Data to ChirpStack"
/>

You can see the message on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-otaa-mode/ovefavt84zya1aepa2kk.png"
  width="100%"
  caption="Message Received in ChirpStack"
/>



#### ABP Mode

1. If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning ⚠️ WARNING
Frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/bhpdwgda7tdz2eqduf4b.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/ypjzi1ho8i1edi2so2ak.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

3. Use these parameters to set RAK811 Breakout Board by using AT command. Set **LoRa join** mode to **ABP**:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/kkm5pwzhi44aif78akij.jpg"
  width="45%"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/hybihb6l6knq8lccnm1h.jpg"
  width="45%"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Tool"
/>

6. Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/tpqvwwbxnmlwzqcfgozy.jpg"
  width="45%"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/gzryq4icdnjuxykqgfhz.jpg"
  width="45%"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/czhbmtdl7or1c2d6katt.jpg"
  width="45%"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK811 Breakout Board for saving parameters!
:::

9. After resetting RAK811 Breakout Board, join in ABP mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
Actually, it is not needed to join in ABP mode. But you still need to set this AT command to
validate the parameters which you just set for ABP mode.
:::

10. Now, let’s try to send a data from RAK811 Breakout Board to ChirpStack:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK811 Breakout Board on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/chirpstack-abp-mode/hqqusvgjrzhbgouuqf36.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>


### LoRa P2P Mode

In this section, I’ll show how to use LoRa P2P mode. We will be using EU868 as our frequency, although it is applicable to other standard bands.

1. First, find two RAK811 Breakout Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.

2. Next, connect these two RAK811 Breakout Board with PC through UART, and open two serial port tool on PC.

3. Now, configure them to both work in LoRaP2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/qytvsg9mx3y4drl7pwrg.png"
  width="45%"
  caption="P2P Initialization"
/>

4. Then configure LoRaP2P parameters for both of them as follow for example:

```sh
at+set_config=lorap2p:869525000:7:0:1:5:5
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/fyoulppnh8gdz3vawjv7.jpg"
  width="90%"
  caption="Configuring P2P in both RAK811 Nodes"
/>

5. OK! Try to send a message from RAK811 Breakout Board 2 (the right one) to RAK811 Breakout Board 1 (the left one):

```sh
at+send=lorap2p:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/khjhkisjuxtjb5oxps94.png"
  width="90%"
  caption="Message sent and received status in the two Nodes"
/>

6. Successfully! Now, send more messages.

```sh
at+send=lorap2p:12345678901234567890
```

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/lora-p2p-mode/ckbymbjhypol3p0q1bjp.jpg"
  width="90%"
  caption="Succeeding Messages sent to the other Node"
/>

Yehey! You have successfully finished your RAK811 Breakout Board Set Up. You are now ready to develop the coolest project that could potentially change the world.

## Miscellaneous

### Upgrading the Firmware


If the firmware version of your **RAK811 Breakout Board** is newer than V3.0.0.0 or you have just burned the bootloader into the RAK811 Breakout Board according to the **Burning Bootloader into the Device** section, then proceed to Step 2.

1. In case you have not just burned the bootloader, as instructed in the previous section, you need to go into **boot mode**. Connect your board via the USB interface and enter the following **AT command** after you have connected via the proper COM port:

```sh
at+set_config=device:boot
```


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/1.bootmode.jpg"
  width="90%"
  caption="Entering Boot Mode"
/>


2. Download and open the RAK Device Firmware Upgrade (DFU) tool.
    - [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)


<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/2.device-firmware.png"
  width="75%"
  caption="RAK Upgrade Tool"
/>

3. Click “**Choose File**” and choose the firmware you have downloaded for your desired frequency band.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/3.select-firmware.png"
  width="75%"
  caption="Choosing the Correct Upgrade file"
/>

4. Click “**Start**” to upgrade, this may take a minute:

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/4.firmware-upgrading.png"
  width="75%"
  caption="Firmware Upgrading in Process"
/>

5. You should see something like the image in Figure 66, if everything went well.

<rk-img
  src="/assets/images/wisduo/rak811-breakout-board/quickstart/upgrading-the-firmware/5.upgrade-success.png"
  width="75%"
  caption="Successfully Upgraded Firmware"
/>

6. Now, **CLOSE** the upgrade tool and **OPEN** the serial port too, again.

- We recommend you to use RAK serial port tool, because there are some ready AT commands in this tool and this will be very useful for you. You can get it from RAK website available for free at this **[RAK directory](https://downloads.rakwireless.com/en/LoRa/RAK811/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)**.

7. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart. Another option is to press the **RST** button on the RAK811 Breakout Board.

```sh
at+set_config=device:restart
```


If you want to configure your RAK811 Breakout Board using the available **AT commands**, check [AT Commands for RAK811 Breakout Board](/Product-Categories/WisDuo/RAK811-Breakout-Board/AT-Command-Manual/). 
