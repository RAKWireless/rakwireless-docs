---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4600 Breakout Board
---

# Quick Start Guide

## Prerequisites

<!---
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/main/rak4600-breakout-module.png"
  width="50%"
  caption="RAK4600 Breakout Board"
/>
--->

### What do you need?

Before going through each and every step in the installation guide of the RAK4600 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

- RAK4600 Breakout Board (provided) – including **LoRa and BLE antenna**, **Dupont lines (9x)** and **4 pin headers (2x)**
- Micro USB Cable (provided)
- Gateway in Range, for testing (not provided)
- Windows PC (not provided)
- USB to UART adapter (not provided)
- RAKDAP1 Flash and Debug Tool (not provided)

#### Software Tools

- RAK Serial Port Tool
- CH340 Drivers
- [The Things Network](https://account.thethingsnetwork.org/register) account


## Product Configuration


### Interfacing with RAK4600 Breakout Board

To interface with the RAK4600 Breakout Board with your Windows PC, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/).**

::: warning ⚠️ WARNING
Before powering the RAK4600 Breakout Module, make sure you have installed the included LoRa and BLE antennas. Not doing so might damage the board.
:::

 Use the Figure 1 as reference to connect the antennas.
 
 
<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/RAK4600_Breakout_Module_Antenna_Label.svg"
  width="80%"
  caption="RAK4600 Breakout Board antenna connection"
/>

- Connect your USB to UART converter to the pin header on the RAK4600 via a set of 4 dupont lines. Use Figure 2 for reference on wiring the device properly.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/powering-and-interfacing.png"
  width="100%"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: Windows + R and typing devmgmt.msc or search in the Start Menu.
- Look for Ports (**COM & LPT**) and find the name **USB-SERIAL CH340** and take note of the COM Port Number as you will need it to connect with the board.

::: tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however if it is missing in the COM & LPT ports list you need to manually install the CH340 Drivers.
:::

- Look for Ports (COM & LPT) and Find the name USB-SERIAL CH340 and take note of the COM Port Number as you will need it to connect with the board. You might have another model number but the wording “USB-SERIAL” should be present in some form.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/com-port-settings.png"
  width="100%"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/interfacing/configuring-rak-serial-tool.png"
  width="90%"
  caption="Configuring the RAK Serial Port Tool"
/>

### Connecting to The Things Network (TTN)

Please refer to <a href="../../../../../Product-Categories/WisDuo/RAK4600-Module/Quick-Start-Guide/Quickstart/#connecting-to-the-things-network-ttn" target="_blank">Connecting to The Things Network (TTN)</a>
<!--
The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4600 Breakout Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-home-page.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/ttn-console-main-page.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/application-page.png"
  width="100%"
  caption="Application Page"
/>

#### Adding an Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/adding-application.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note in adding an application:

1. **Application ID** - this will be the unique id of your application in the Network. Please note that characters should be in lower case, no spaces are allowed.
2. **Description** - this is a short and concise human readable description of your application.
3. **Application EUI** - this will be generated automatically by The Things Network for convenience.
4. **Handler Registration** - handler you want to register this application to.

After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/application-overview.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/device-section.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device**"

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/add-device.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4600 Breakout Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.
3. **App Key**– this key will be used to secure the communication between the device and the network.
4. **App EUI**– a unique identifier of the Application that you are registering the device within.

Populate the **Device ID** and **Device EUI** _(generate a random one by pressing the arrows)_ fields and leave the rest as is.
Click “**Register**”

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/device-overview-page.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use, proceed to either **OTAA mode** or **ABP mode** section.


#### OTAA Mode

When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-device-overview.png"
  width="100%"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, let join in OTAA mode, EU868 frequency and the default LoRa class is Class A.
:::

::: tip 📝 NOTE
Execute the following commands one by one and in the order given.
:::

1. Set the LoRa join mode to
   **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

2. Set the LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

3. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-join.png"
  width="45%"
  caption="AT Command for OTAA Join Mode, Class and Region"
/>

::: tip 📝 NOTE
Execute the following commands one by one and in the order given.
:::

4. Set the **Device EUI.**

```sh
at+set_config=lora:dev_eui:XXXX
```

5. Set the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

6. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-otaa-device-eui.png"
  width="45%"
  caption="AT Command for OTAA Device EUI, Application EUI and Application Key"
/>

7. Reboot the RAK4600 Breakout Board to save the parameters.

```sh
at+set_config=device:restart
```

8. After resetting RAK4600 Breakout Board, join in OTAA mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/at-command-otaa-serial-port.png"
  width="45%"
  caption="AT Command for OTAA LoRa Join via RAK Serial Port Tool"
/>

9. Joined successfully! Now, let’s try to send a data from the RAK4600 Breakout Board to TTN:

```sh
at+send=lora:2:0123456789
```

<rk-img
  src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-test-sample-data.png"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from RAK4600 Breakout Board on TTN website as follows:

<rk-img
src="/assets/images/wisduo/rak4600-breakout-board/quickstart/connecting-ttn/otaa-test-sample-sent.png""
width="100%"
caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

-->


