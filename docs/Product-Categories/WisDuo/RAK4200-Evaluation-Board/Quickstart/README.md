---
prev: ../Overview/
tags:
  - RAK4200 Evaluation Board
---

# Quick Start Guide

<!---
<rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/2.quick-start-guide/kgkvn088cnoef6gqfxa6.jpg"
    width="50%"
    caption="RAK4200 Evaluation Board"
  />
--->

### What do you need?

Before going through each and every step in the installation guide of the RAK4200 Evaluation Board, make sure to prepare the necessary items listed below:

1. **RAK4200 Evaluation Board**
2. Micro USB Cable
3. Gateway in Range, for testing
4. Windows PC
5. Emulator Kit

::: tip 📝 NOTE
In order to have an optimal antenna matching for the Low and High LoRa® bands there are two types of modules with different hardware. The L type module only works for the 433MHz and 470MHz LoRa® bands. The H type module is for the 868MHz to 923MHz (the rest of the spectrum). Note that the hardware is specific for your selected band and can't be changed.
:::

### What's included in the Package?

- 1pc - RAK4200 Evaluation Board
- 1pc - Micro USB Cable
- 1pc - LoRa® Antenna(iPEX)
- 2pcs - 4-pin Header
- 13pcs - Dupont Lines

::: tip 📝 NOTE
This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device's firmware burned or upgraded, please refer to the documentations below:

1. [Burning the Bootloader into the Device](#burning-the-bootloader-into-the-device)
2. [Upgrading the Firmware](#upgrading-the-firmware)
   :::

## Interfacing with RAK4200 Evaluation Board

In order for you to be able to interface with the RAK4200 Evaluation Board with your Windows Machine, you need to download the RAK Serial Port Tool **[here](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip).**

::: warning ⚠️ WARNING
Before powering the RAK4200 Evaluation Board , you should install the LoRa® antenna first . Not doing so might damage the board
:::

- Connect your RAK4200 Evaluation Board in your Windows Machine using the provided micro-usb cable.
  <rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/kq51hnmw5xoquykfd1dw.png"
    width="65%"
    caption="RAK4200 Evaluation Board to Laptop Connection"
  />

- Open the RAK Serial Port Tool :
  <rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/gnm0smmpj2hiaaxv65m2.png"
    width="90%"
    caption="RAK Serial Port Tool"
  />

- In choosing the correct COM Port number for your device. Go to your Device Manager by pressing : Windows + R and type `devmgmt.msc` or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/cj2yhkexwphkmkscqoxb.png"
  width="100%"
  caption="Device Manager"
/>

- Look for Ports (COM & LPT) and Find the name **USB-SERIAL CH340** and take note of the COM Port Number.

::: tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have downloaded the CH340 Drivers in your Machine.
:::

- Choose the Correct Port Number from the device manager and the Correct Baudrate then click Open:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/gqq1izhoofyqj6ecrgaa.png"
  width="90%"
  caption="Correct Port Number and Correct Baud rate"
/>

## Connecting to The Things Network (TTN)

The Things Network is about enabling low power devices to be used in long range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about the Things Network [**here**](https://www.thethingsnetwork.org/docs/).

In this section, we will be connecting the RAK4200 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, Log in to your account and go to the console which can be found here:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/szwxvka0wyqg5ybjrffb.png"
  width="100%"
  caption="The Things Network Home Page"
/>

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/jf9flba2uoyc3wt2k9lw.png"
  width="100%"
  caption="TTN Console Page"
/>

- Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

- Click the "**add application**" button
  <rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/eixjrjjdmpc4bstoyleu.png"
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
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/nyiksw5ezoobdkqaifft.png"
  width="100%"
  caption="Application Overview"
/>

- Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

- Click "**Register device "**

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/m0diwppr3c6uq2fzcmnb.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note in registering your device:

1. **Device ID** - this is the unique identifier for your RAK4200 Evaluation Board in your application. You need to enter this manually.
2. **Device EUI** - this is the unique identifier for your device in the network. You can change it later, if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto generation mode by default.

- Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/uvhfpgf50yodwdl9dxp7.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use ,proceed to either the [OTAA Mode](#otaa-mode) or [ABP mode](#abp-mode) section.

### OTAA Mode

When setting up a new device in TTN its default is to join in OTAA mode. For configuration, you need the following three parameters: **Device EUI, Application EUI** and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/otjgr7rhyejvmsx4i4km.png"
  width="100%"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, let’s join in OTAA mode, EU868 frequency and the default LoRa® class is Class A.
:::

1. Set the LoRa® join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/ugvheykwbjgqrmve3gr1.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Join Mode via RAK Serial Port Tool"
/>

2. Set the LoRa® class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/uwdcbt0uegx9s5nacmdh.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Class via RAK Serial Port Tool"
/>

3. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/iuxsdncululn7d4ywcis.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Region Frequency via RAK Serial Port Tool"
/>

4. Set the **Device EUI.**

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/pu2digmbwm9tms4h3mtm.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Device EUI via RAK Serial Port Tool"
/>

5. Set the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/k2nhwyd1ctfx6gjwuboz.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Application EUI via RAK Serial Port Tool"
/>

6. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/rv7qwzhicwokmmgxcawf.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 Evaluation Board for saving parameters!
:::

7. After resetting RAK4200 Evaluation Board, join in OTAA mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/mgztynrigiozealhlv6t.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa® Join via RAK Serial Port Tool"
/>

8. Joined successfully! Now, let’s try to send a data from the RAK4200 Evaluation Board to TTN:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/drwvcagphdvkbt8kefnc.jpg"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can then see the data sent from RAK4200 Evaluation Board on TTN website as follows:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/vdrrdeh7oifamkrwvryn.jpg"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

### ABP Mode

1. First, switch the activation method to ABP as shown in the following image:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="APB Activation in The Things Network"
/>

2. These three parameters will be used on RAK4200 Evaluation Board: **Device Address**, **Network Session Key** and **App Session Key**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="ABP Parameters in The Things Network"
/>

::: tip 📝 NOTE
As an example, let's join in ABP mode, EU868 frequency, and LoRa® class is Class A.
:::

3. If the join mode is not in ABP Mode, just set the LoRa® join mode to **ABP** as follows:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/cl6jv8cge7hzkavag3hn.jpg"
  width="45%"
  caption="ABP Parameters in The Things Network"
/>

4. Set the LoRa® class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/mmll3jdm6l9hg3jm5jy7.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/hoxaobrwlgh6otjde6vd.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Class via RAK Serial Port Tool"
/>

6. Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/i5tmaceu0jqjbh3qt4po.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/kc6fxzmr4ijlan1sgrh8.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/wcfzckjltpwf2n8pdobs.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 Evaluation Board for saving parameters!
:::

9. After resetting your RAK4200 Evaluation Board, join in **ABP mode**:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/mqklekitvyx1smagkvx5.jpg"
  width="45%"
  caption="AT Command for ABP LoRa® Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
There is no need to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode
:::

Now, let’s try to send a data from the RAK4200 Evaluation Board to TTN in ABP mode.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/hdyn5eezsmczhxvblpkn.jpg"
  width="45%"
  caption=" OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

## Connecting with Chirpstack

The **ChirpStack** or previously known as LoRaServer project provides open-source components for building LoRaWAN® networks. You can learn more about ChirpStack [**here**](https://www.chirpstack.io/).

:::tip 📝 NOTE
In this document, it is assumed that you are using RAK Gateway and its built-in ChirpStack or RAK cloud testing ChirpStack. It is also assumed that a Gateway with the ChirpStack has been configured successfully. If not, please have a look at RAK's documents for more details about RAK LPWAN Gateway and [**RAK cloud testing**](https://forum.rakwireless.com/t/rak-free-cloud-loraserver-for-testing/344).
:::

1. Open the web page of the ChirpStack which you want to connect with and login.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/wgk31ykcgwp2gbzicmut.png"
     width="100%"
     caption="Chirpstack Default Window"
   />

:::tip 📝 NOTE
By default, there is already one or more items in this page, you can use it or create a new item.
:::

2. Create a new item by clicking the “**CREATE**” button, and fill up the necessary items.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/l8na6pcdsvjl0lrqznyr.png"
     width="100%"
     caption="Chirpstack Creating Application"
   />

3. Once done , click “**CREATE APPLICATION**”.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/zcxqc0pe6vquherzw521.png"
     width="100%"
     caption="Chirpstack Applications Available"
   />

4. The list of items are then provided same with the image above. Click the new item created.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/r2ikjxdaluvfxbqhaccc.png"
     width="100%"
     caption=" Applications Page in Chirpstack"
   />

5. Add a node device into ChirpStack by clicking the “**CREATE**” button:
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/sdrlazcgfseimitslo6u.png"
     width="100%"
     caption="Chirpstack Adding Node into the  RAK4200 Evaluation Board "
   />

6. Once the node is created, fill-in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/bx0hvot72klwrnznnbig.png"
     width="100%"
     caption="Chirpstack Adding Parameters in the Node"
   />

### OTAA Mode

1. If you select “**device_profile_otaa**”, it means you want to join ChirpStack in **OTAA mode**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/o1o2cdekg9oyx8nojvcl.png"
  width="100%"
  caption="Chirpstack OTAA Activation"
/>

2. Click “**CREATE DEVICE**” then generate the application key in this page. You can write it by yourself or generate it automatically by clicking the following icon and press “**SET DEVICE-KEYS**”.

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/b7nijxtl27bnr6mtgn6u.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Set the **Device EUI** for the RAK4200 Evaluation Board using the "**dev_eui**" same with the image below:

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/vlakwnyaoitygjhhn0hx.png"
  width="100%"
  caption="Chirpstack OTAA Set Device EUI"
/>

4. Set the **Application Key** for the RAK4200 Evaluation Board using the "**app_key**" same with the image below:
   <rk-img
     src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/gomyqs6fsi4limpvngbp.jpg"
     width="100%"
     caption="Chirpstack OTAA Set Application Key"
   />
   ::: tip 📝 NOTE
   The Application EUI which will be set into RAK4200 Evaluation Board as “app_eui” is not necessary for ChirpStack, and you can set it to any value with a correct format.
   :::

5. Configure RAK4200 Evaluation Board by using the available commands found in the [AT Commands for RAK4200 Evaluation Board](#at-commands-for-rak4200-evaluation-board) section. Connect your RAK4200 Evaluation Board in your Windows Machine.

6. Power it **ON** and open **RAK Serial Port Tool** on your PC as instructed in the [Interfacing with RAK4200 Evaluation Board](#interfacing-with-evaluation-board) section.

::: tip 📝 NOTE
The default join mode is **OTAA**, the default class is **Class A** and the default region is **EU868**.
:::

7. If the **join mode** is not in OTAA, just set the LoRa® join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/mrydatc2hlwrxiyjpoqw.jpg"
  width="45%"
  caption="Chirpstack OTAA Join Mode via RAK Serial Port Tool"
/>

8. Set the LoRa® class to **Class A**:

```sh
at+set_config-lora:class:0
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/edffrutqfohfxvhz0su8.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Class via RAK Serial Port Tool"
/>

9. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/evudoedib3ovd9ye98gy.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Region/Frequency via RAK Serial Port Tool"
/>

10. Set the **Device EUI**:

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/vsbevdit52xkqq0ocn5n.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Application EUI via RAK Serial Port Tool"
/>

11. Set the **Application EUI**:

```sh
at+set_config=lora:app_eui:XXXX
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/yzqpmzjhqj58akm7xqcm.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Application EUI via RAK Serial Port Tool"
/>

12. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/uf6hawlomc92hhp2dlbl.jpg"
  width="45%"
  caption="Chirpstack OTAA Set Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 Evaluation Board to save the parameters.
:::

13. After resetting, start to join:

```sh
at+join
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/kp0hhztd0d1txr0xlsnd.jpg"
  width="45%"
  caption="Chirpstack OTAA Join via RAK Serial Port Tool"
/>

14. You can then see the **JoinRequest** and **JoinAccept** on ChirpStack page:
    <rk-img
      src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/szgnpputwklp26s1epwd.png"
      width="100%"
      caption=" Chirpstack OTAA JoinRequest and JoinAccept"
    />

15. Let’s try to send a data from RAK4200 Evaluation Board to ChirpStack:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/sy4nezodryajjldti9ki.jpg"
  width="45%"
  caption="Chirpstack OTAA Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the message on ChirpStack page:
  <rk-img
    src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/y8olaqg8ywggopiglkdv.png"
    width="100%"
    caption="Chirpstack Data Received Preview"
  />

OK, that’s all about “Join in OTAA Mode” with ChirpStack.

### ABP Mode

1. If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning ⚠️ WARNING
Frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n794vly7saocsviprbbj.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

2. Then you can see that there are some parameters for ABP in the “**ACTIVATION**” item:
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n3ragennimcdzazgxhyp.png"
     width="100%"
     caption="Chirpstack ABP Activation Parameters Needed"
   />

3. Use these parameters to set RAK4200 Evaluation Board by using AT command. Set **LoRa® join** mode to **ABP**:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa® class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/kkm5pwzhi44aif78akij.jpg"
  width="45%"
  caption="Chirpstack ABP Set Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/hybihb6l6knq8lccnm1h.jpg"
  width="45%"
  caption="Chirpstack ABP Set Region/Frequency via RAK Serial Port Too"
/>

6. Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/tpqvwwbxnmlwzqcfgozy.jpg"
  width="45%"
  caption="Chirpstack ABP Set Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/gzryq4icdnjuxykqgfhz.jpg"
  width="45%"
  caption="Chirpstack ABP Set Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/czhbmtdl7or1c2d6katt.jpg"
  width="45%"
  caption="Chirpstack ABP Set Application Session Key via RAK Serial Port Too"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset RAK4200 Evaluation Board for saving parameters!
:::

9. After resetting RAK4200 Evaluation Board, join in ABP mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
It is not needed to join in ABP mode. But you still need to set this AT command to validate the parameters which you just set for ABP mode.
:::

10. Now, let’s try to send a data from RAK4200 Evaluation Board to ChirpStack:

```sh
at+send=lora:2:123456789
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the data which is just sent from RAK4200 Evaluation Board on ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/fnw0xofynzzxjxhjuhrv.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

## LoRa® P2P Mode

In this section, we will discuss on how we can use P2P on our RAK4200. We will be using EU868 as our frequency, although it is applicable also to other standard bands.

1. First, find two RAK4200 Evaluation Board which can work on EU868 frequency and make sure their firmware version isn’t less than V3.0.0.1.
2. Next, connect these two RAK4200 Evaluation Board with PC through UART, and open two serial port tool on PC.
3. Now, configure them to both work in LoRaP2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/nerylgv02xmr8hstfksm.jpg"
  width="45%"
  caption="P2P Initialization"
/>

4. Then configure LoRaP2P parameters for both of them as follow for example:

```sh
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```

Please refer to the [Configuring Using AT Commands](#at-commands-for-rak4200-evaluation-board) section to learn about the definition of the parameters used.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/cgjnyy9zykhbdemr2rvs.jpg"
  width="90%"
  caption="Configuring P2P in both RAK4200 Nodes"
/>

5. OK! Try to send a message from the first RAK4200 Evaluation Board to the second RAK4200 Evaluation Board.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/csib8zhcwfkevehq7fby.jpg"
     width="90%"
     caption="Message sent and received status in the two nodes"
   />

6. Success! Now, send more messages.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/gbvh6jy5olovvt0fjyib.jpg"
     width="90%"
     caption="Succeeding Messages sent to the other node"
   />

Congratulations! :tada: You have successfully finished your RAK4200 Evaluation Board Set Up. You are now ready to develop the coolest project that could potentially change the world.

## Miscellaneous

### AT Commands for RAK4200 Evaluation Board

The purpose of this document is to demonstrate on how to configure the RAK4200 Evaluation Board thru the use of AT Commands via a Serial Port Tool running in your Windows PC. The list below shows the AT Commands available for use:

| AT Command                            | Description                                                                                                                                                                                                                                                                                                                                                                                  |
| ------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `at+help`                             | This AT command can show all available AT commands of this module/product for you.                                                                                                                                                                                                                                                                                                           |
| `at+version`                          | Get the current firmware version number.                                                                                                                                                                                                                                                                                                                                                     |
| `at+get_config=device:status`         | Get all information about the device’s hardware components and their current status.                                                                                                                                                                                                                                                                                                         |
| `at+set_config=device:restart`        | After set, the device will restart.                                                                                                                                                                                                                                                                                                                                                          |
| `at+set_config=device:boot`           | Let the device work in boot mode                                                                                                                                                                                                                                                                                                                                                             |
| `at+run`                              | Stop boot mode and run as normal. It is valid when the device works in boot mode.                                                                                                                                                                                                                                                                                                            |
| `at+set_config=device:sleep:X`        | After setting, the device will go to sleep mode or wake up immediately. <br> **• X** - 0 - wake up ; 1 - sleep                                                                                                                                                                                                                                                                               |
| `at+set_config=device:uart_mode:X:Y`  | Set the UART work mode.<br> **• X** - UART number on RAK4200 module. <br>**• Y** - 0: Configuration mode;1: Passthrough mode.                                                                                                                                                                                                                                                                |
| `at+join`                             | Start to join LoRa® network                                                                                                                                                                                                                                                                                                                                                                  |
| `at+send=lora:X:YYY`                  | Send a customized data. <br> **• X** - LoRa® port <br>**• YYY** - the data which you want to send. The limited length is 50 Bytes, and the data must be in HEX format.                                                                                                                                                                                                                       |
| `at+set_config=lora:work_mode:X`      | Set the work mode for LoRa®. <br>**• X** - 0: LoRaWAN®, 1: LoRaP2P, 2: Test Mode.                                                                                                                                                                                                                                                                                                            |
| `at+set_config=lora:join_mode:X`      | Set the join mode for LoRaWAN®. <br>**• X** - 0: OTAA, 1: ABP                                                                                                                                                                                                                                                                                                                                |
| `at+set_config=lora:class:X`          | Set the class for LoRa®. <br>**• X** - 0: Class A, 1: Class B, 2: Class C                                                                                                                                                                                                                                                                                                                    |
| `at+set_config=lora:region:XXXX`      | Sets the region for LoRa®. <br> **• XXXX** - EU868 EU433, CN470, IN865, EU868, AU915, US915, KR920, AS923.                                                                                                                                                                                                                                                                                   |
| `at+set_config=lora:confirm:XXXX`     | Sets the type of messages which will be sent out through LoRa®. <br> **• XXXX** - 0: unconfirmed, 1: confirm                                                                                                                                                                                                                                                                                 |
| `at+set_config=lora:dev_eui:XXXX`     | Sets the device EUI for OTAA. <br>**• XXXX** - the Device EUI.                                                                                                                                                                                                                                                                                                                               |
| `at+set_config=lora:app_eui:XXXX`     | Set the application EUI for OTAA. <br>**• XXXX** - the Application EUI.                                                                                                                                                                                                                                                                                                                      |
| `at+set_config=lora:app_key:XXXX`     | Set the application key for OTAA. <br>**• XXXX** - the Application Key.                                                                                                                                                                                                                                                                                                                      |
| `at+set_config=lora:dev_addr:XXXX`    | Set the device address for ABP. <br>**• XXXX** - the Device Address                                                                                                                                                                                                                                                                                                                          |
| `at+set_config=lora:apps_key:XXXX`    | Set the application session key for ABP. <br>**• XXXX** - the Application Session Key.                                                                                                                                                                                                                                                                                                       |
| `at+set_config=lora:nwks_key:XXXX`    | Set the network session key for ABP. <br>**• XXXX** - the Network Session Key.                                                                                                                                                                                                                                                                                                               |
| `at+set_config=lora:ch_mask:X:Y`      | Set a certain channel on or off. <br>**• X** - the channel number, and you can check which channel can be set before you set it. <br>**• Y** - 0: off, 1: on                                                                                                                                                                                                                                 |
| `at+set_config=lora:adr:X`            | Open or close the ADR function of Node. <br>**• X** - 0: Close ADR; 1: Open ADR.                                                                                                                                                                                                                                                                                                             |
| `at+set_config=lora:dr:X`             | Set the DR of Node. <br>**• X** - the number of DR. Generally, the value of X can be 0~5. More details, please check the LoRaWAN® 1.0.2 specification.                                                                                                                                                                                                                                       |
| `at+set_config=lora:tx_power:X`       | **• X** - The level of TX power. If you want to know the relationship between TX power level and dbm, please have a look at LoRaWAN® 1.0.2 region specification                                                                                                                                                                                                                              |
| `at+get_config=lora:status`           | It will return all of the current information of LoRa®, except LoRa® channel.                                                                                                                                                                                                                                                                                                                |
| `at+get_config=lora:channel`          | It will return the state of all LoRa® channels, then you can see which channel is closed and which channel is open very clearly                                                                                                                                                                                                                                                              |
| `at+set_config=lorap2p:XXX:Y:Z:A:B:C` | Set the parameters for LoRa® P2P mode. This AT command is valid when the work mode is LoRaP2P. <br>**• XXX** - Frequency in Hz. <br>**• Y** - Spreading factor, [6, 7, 8, 9, 10, 11, 12]. <br>**• Z** - Bandwidth, 0: 125 kHz, 1: 250 kHz, 2: 500kHz. <br>**• A** - Coding Rate, 1: 4/5, 2: 4/6, 3: 4/7, 4: 4/8. <br>**• B** - Preamble Length, 5 - 65535. <br>**• C** - Power in dbm, 5-20. |
| `at+send=lorap2p:XXX`                 | Send data through LoRaP2P. This AT command is valid when it works in LoRaP2P mode. <br>**• XXX** - the data in HEX.                                                                                                                                                                                                                                                                          |

### Burning the bootloader into the Device

The RAK4200 Evaluation Board bootloader is already pre-installed upon manufacturing so this bootloader flashing is not necessary for you to perform. If you find that the bootloader of your RAK4200 Evaluation Board damaged, kindly contact our support though our [RAKwireless forum](https://forum.rakwireless.com/).

### Upgrading the Firmware

The following steps show you how to update the firmware for RAK4200 WisDuo LPWAN Module connected to the Baseboard.

1. Download and install the software needed in your PC:

- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- [RAK Firmware Upgrade Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_Upgrade_Tool_V1.0.rar)
- [RAK4200 Firmware](https://downloads.rakwireless.com/en/LoRa/RAK4200/Firmware/RAK4200_V3.2.0.12.rar)

2. Connect your RAK4200 Evaluation Board in your windows machine as instructed in the [Interfacing with RAK4200 Evaluation Board](#interfacing-with-rak4200-evaluation-board) section. 

3. Open the RAK Serial Port Tool you have just installed and let RAK4200 work in boot mode by setting an AT command through serial port as follows:

```sh
at+set_config=device:boot
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/hdtvmsxeqpzo2tx53a2x.jpg"
  width="45%"
  caption="Entering Boot Mode"
/>

4. Close RAK serial port tool and open RAK firmware upgrade tool on your PC. Make sure to choose the correct COM Port.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/uq2mchzjcptfhpiem4p0.jpg"
     width="75%"
     caption="RAK Firmware Upgrade Tool"
   />

5. Click “**Choose File**” button to choose a correct upgrade file:
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/qaxfg8sllput33ycskaq.jpg"
     width="75%"
     caption="Choosing the Correct Upgrade file"
   />

6. Click “**Start**” to upgrade, this may take a minute:
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/dzctnumbclyzrawjf6kl.jpg"
     width="75%"
     caption="Firmware Upgrading in Process"
   />

7. You should see something like the image below if everything went well.
   <rk-img
     src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/xrtlzi2q6cht8tfkn9kr.jpg"
     width="75%"
     caption="Successfully Upgraded Firmware"
   />

8. CLOSE the Firmware Upgrade Tool and OPEN the RAK Serial Port Tool again.

9. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart.

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/xgkhng5xr1tg4prxnbuq.jpg"
  width="45%"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully! :tada:
