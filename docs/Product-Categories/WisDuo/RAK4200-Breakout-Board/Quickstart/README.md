---
prev: ../Overview/
next: ../Datasheet/
tags:
  - RAK4200 Breakout Board
---

# Quick Start Guide

## Prerequisites

<!---

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/main/peojuzuyfj5wzl51igyk.jpg"
  width="50%"
  caption="RAK4200 Breakout Board"
/>
--->

### What do you need?

Before going through each and every step in the installation guide of the RAK4200 Breakout Board, make sure to prepare the necessary items listed below:

#### Hardware Tools

- RAK4200 Breakout Board (provided) – including LoRa® antenna, Dupont lines (13x) 
- USB to UART converter – CH340 for example (not provided) 
- Gateway in Range, for testing (not provided) 
- Windows PC (not provided) 
- Emulator Kit (not provided)

#### Software Tools

- RAK Serial Port Tool
- CH340 Drivers 
- [The Things Network](https://account.thethingsnetwork.org/register) account

### What's Included in the Package?

- RAK4200 Breakout Board
- LoRa® antenna
- Dupont lines (18x)


## Product Configuration

### Interfacing with RAK4200 Breakout Board

In order for you to be able to interface with the RAK4200 Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK4200 Breakout Board, make sure you have installed the included LoRa Antenna. Not doing so might damage the board
:::

- Connect your USB to UART converter to the pin header on the RAK4200 via a set of 4 dupont lines. Use **Figure 1** for reference on wiring the device properly.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/interfacing/a6qkw8rluttf89wrzwum.jpg"
  width="100%"
  caption="Powering up and interfacing with the board"
/>

- Go to your Device Manager by pressing: Windows + R and typing devmgmt.msc or search in the Start Menu.

::: tip 📝 NOTE
Windows 10 should recognize the board and automatically install drivers, however if it is missing in the COM & LP ports list you need to manually install the CH340 Drivers.
:::

- Look for Ports (COM & LPT) and Find the name USB-SERIAL CH340 and take note of the COM Port Number as you will need it to connect with the board. You might have another model number but the wording “USB-SERIAL” should be present in some form.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/interfacing/tvkkkqpdpkszdf4ioyg6.png"
  width="70%"
  caption="COM Port settings"
/>

- Open the RAK Serial Port Tool. Select the COM Port number (the one you noted in the previous step) and set the **Baud Rate to 115200**. Click “**OPEN**” and you should be connected to the board and be able to send commands.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/interfacing/ybo1fczw8uhagao2io7h.png"
  width="80%"
  caption="Configuring the RAK Serial Port Tool"
/>

### Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4200 Breakout Board to The Things Network (TTN). If you don't have an account yet, head on to [TTN site](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/ttn-homepage.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/ttn-console.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/add-application.png"
  width="100%"
  caption="Application Page"
/>

#### Adding An Application

- Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/application-input.png"
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
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/app-overview.png"
  width="100%"
  caption="Application Overview"
/>

##### Register Device

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/dev-section.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/add-device.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4200 Breakout Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/dev-overview2.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the **OTAA mode** or **ABP mode** section.



#### OTAA Mode

When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/ttn-dev-overview.png"
  width="100%"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, let's join in OTAA mode, EU868 frequency and the default LoRa® class is Class A.
:::

::: tip 📝 NOTE
Execute the following commands one by one and in the order given.
:::

1. Set the LoRa® join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

2. Set the LoRa® class to **Class A**:

```sh
at+set_config=lora:class:0
```

3. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/otaa-serial1.png"
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
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/otaa-serial2.png"
  width="45%"
  caption="AT Command for OTAA Device EUI, Application EUI and Application Key"
/>

7. Reboot the RAK4200 Breakout Board to save the parameters.

```sh
at+set_config=device:restart
```

8. After resetting RAK4200 Breakout Board, join in OTAA mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/otaa-join.png"
  width="45%"
  caption="AT Command for OTAA LoRa® Join via RAK Serial Port Tool"
/>

9. Joined successfully! Now, let’s try to send a data from the RAK4200 Breakout Board to TTN:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/otaa-send-data.jpg"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from RAK4200 Breakout Board on TTN website as follows:

<rk-img
  src="/assets/images/wisduo/rak4200-breakout-board/quickstart/ttn/ttn-traffic.png"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>


