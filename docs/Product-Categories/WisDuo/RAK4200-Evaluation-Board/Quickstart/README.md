---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4200 Evaluation Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module. 
rak_img: /assets/images/wisduo/rak4200-evaluation-board/overview/RAK4200_Evaluation_home.png
prev: ../Overview/
next: ../AT-Command-Manual/
tags:
  - RAK4200 Evaluation Board
  - quickstart
  - wisduo
---

# RAK4200 Evaluation Board Quick Start Guide

<!---
<rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/2.quick-start-guide/kgkvn088cnoef6gqfxa6.jpg"
    width="50%"
    caption="RAK4200 Evaluation Board"
  />
--->

### What Do You Need?

Before going through each and every step in the installation guide of the RAK4200 Evaluation Board, make sure to prepare the necessary items listed below:

1. **RAK4200 Evaluation Board**
2. Micro USB Cable
3. LoRA gateway in range, for testing
4. Windows PC
5. RAKDAP1 DAPLink Tool

::: tip 📝 NOTE
To have an optimal antenna matching for the Low and High LoRa bands, there are two types of modules with different hardware. The L-type module only works for the 433&nbsp;MHz and 470&nbsp;MHz LoRa bands. The H type module is for the 868&nbsp;MHz to 923&nbsp;MHz (the rest of the spectrum). Note that the hardware is specific for your selected band and can't be changed.
:::

### What's included in the Package?

- 1pc - RAK4200 Evaluation Board
- 1pc - Micro USB Cable
- 1pc - LoRa Antenna (iPEX)
- 2pcs - 4-pin Header
- 13pcs - Dupont Lines

::: tip 📝 NOTE
This device released by RAKwireless is already pre-loaded with its latest firmware upon manufacturing. If you want to have your device firmware burned or upgraded, refer to the documentation below:

1. [Burning the Bootloader into the Device](#burning-the-bootloader-into-the-device)
2. [Upgrading the Firmware](#upgrading-the-firmware)
   :::

## Interfacing with RAK4200 Evaluation Board

To interface with the RAK4200 Evaluation Board with your Windows PC, you need to download the [**RAK Serial Port Tool**](https://downloads.rakwireless.com/en/LoRa/Tools/).

::: warning ⚠️ WARNING
Before powering the RAK4200 Evaluation Board, you should install the LoRa antenna first. Not doing so might damage the board
:::

1. Connect your RAK4200 Evaluation Board to your Windows PC using the provided micro USB cable.

  <rk-img
    src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/kq51hnmw5xoquykfd1dw.svg"
    width="65%"
    caption="RAK4200 Evaluation Board to Laptop Connection"
  />

2. Open the RAK Serial Port Tool:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/gnm0smmpj2hiaaxv65m2.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

3. Go to Device Manager by pressing **Windows + R** and typing **devmgmt.msc** or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/cj2yhkexwphkmkscqoxb.png"
  width="100%"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and find the name **USB-SERIAL CH340**. Take note of the COM Port Number.

::: tip 📝 NOTE
If you didn't find any port with the name **USB-SERIAL CH340**, make sure you have installed the CH340 drivers on your Windows PC.
:::

5. Choose the correct Port Number from the Device Manager, select 115200 as the baud rate then click the **Open** button:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/3.interfacing/gqq1izhoofyqj6ecrgaa.png"
  width="90%"
  caption="Correct Port Number and Baud rate"
/>

## Connecting to The Things Network (TTN)

The Things Network is about enabling low-power devices to be used in long-range gateways that connect to an open-source, decentralized network and exchange data with Applications. Learn more about [**The Things Network**](https://www.thethingsnetwork.org/docs/).

In this section, you will be connecting the RAK4200 Evaluation Board to The Things Network (TTN). If you don't have an account yet, head on to [https://www.thethingsnetwork.org/](https://www.thethingsnetwork.org/) and create one. Once done, log in to your account then go to the console, as shown in **Figure 5**.

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

1. Choose "**APPLICATIONS**"

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/bfbdxer0da06nxv0bymr.png"
  width="100%"
  caption="Application Page"
/>

2. Click the "**add application**" button

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/eixjrjjdmpc4bstoyleu.png"
  width="100%"
  caption="Adding an Application"
/>

Here are the things that you should take note of in adding an application:

   1. **Application ID**: A unique ID on the TTN network that should be in lower case with no spaces.
   2. **Description**: This is a short and concise human-readable description of your application.
   3. **Application EUI**: Automatically generated by TTN.
   4. **Handler Registration**: Select the handler you want to register this application to.

3.  After you fill in the necessary information, press the "**Add application**" button at the bottom of this page. If you see the following page, this means that you have successfully registered your application.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/nyiksw5ezoobdkqaifft.png"
  width="100%"
  caption="Application Overview"
/>

4. Scroll down until you see the Devices section, or you can also click the "**Devices**" button at the top.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ow74swwqofv1gxxj0qbk.png"
  width="100%"
  caption="Device Section"
/>

5. Click "**Register device"**

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/m0diwppr3c6uq2fzcmnb.png"
  width="100%"
  caption="Add your Device"
/>

Here are the things that you should take note of when registering your device:

  1. **Device ID**: a unique identifier for your RAK4200 Evaluation Board in your application, and must be entered manually.
  2. **Device EUI**: a unique identifier for your device in the network. You can change it later if you want.

Click the following icon and the Device EUI will be automatically generated. The App Key should be in auto-generation mode by default.

6. Lastly, click the Register button. Now, your device is registered under the corresponding application.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/uvhfpgf50yodwdl9dxp7.png"
  width="100%"
  caption="Device Overview"
/>

Depending on which authentication method you want to use, proceed to either the [OTAA Mode](#otaa-mode) or [ABP mode](#abp-mode) section.

### OTAA Mode

When setting up a new device in TTN, its default is to join in OTAA mode. For this configuration, you need the following three parameters: **Device EUI, Application EUI**, and **App Key**. You can get them all from the **Overview page**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/otjgr7rhyejvmsx4i4km.png"
  width="100%"
  caption="Device Overview Parameters"
/>

::: tip 📝 NOTE
As an example, join in OTAA mode, EU868 frequency, and the default LoRa class is Class A.
:::

1. Set the LoRa join mode to **OTAA**:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/ugvheykwbjgqrmve3gr1.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Join Mode via RAK Serial Port Tool"
/>

2. Set the LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/uwdcbt0uegx9s5nacmdh.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Class via RAK Serial Port Tool"
/>

3. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/iuxsdncululn7d4ywcis.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Region Frequency via RAK Serial Port Tool"
/>

4. Set the **Device EUI**:

```sh
at+set_config=lora:dev_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/pu2digmbwm9tms4h3mtm.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Device EUI via RAK Serial Port Tool"
/>

5. Set the **Application EUI**:

:::tip 📝 NOTE:
All zero value Application EUI `at+set_config=lora:app_eui:0000000000000000` is **not supported** and will return error. 
:::

```sh
at+set_config=lora:app_eui:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/k2nhwyd1ctfx6gjwuboz.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Application EUI via RAK Serial Port Tool"
/>

6. Set the **Application Key**:

```sh
at+set_config=lora:app_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/rv7qwzhicwokmmgxcawf.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Application Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all parameters, you need to reset the RAK4200 Evaluation Board to save the parameters!
:::

7. After resetting the RAK4200 Evaluation Board, join in OTAA mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/mgztynrigiozealhlv6t.jpg"
  width="45%"
  caption=" AT Command for OTAA LoRa Join via RAK Serial Port Tool"
/>

8. Joined successfully! Try to send data from the RAK4200 Evaluation Board to TTN:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/drwvcagphdvkbt8kefnc.jpg"
  width="45%"
  caption="OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

You can see the data sent from the RAK4200 Evaluation Board on the TTN website, as shown in **Figure 22**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-otaa/vdrrdeh7oifamkrwvryn.jpg"
  width="100%"
  caption="OTAA Test Sample Data Sent Viewed in The Things Network"
/>

### ABP Mode

1. First, change the activation method to ABP, as shown in **Figure 23**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="APB Activation in The Things Network"
/>

2. Three parameters will be used to set up the RAK4200 Evaluation Board on ABP mode: **Device Address**, **Network Session Key**, and **App Session Key**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/bryeyppqcyb1amkfs4po.png"
  width="100%"
  caption="ABP Parameters in The Things Network"
/>

::: tip 📝 NOTE
As an example, join in ABP mode, EU868 frequency, and LoRa class A.
:::

3. If the join mode is not ABP Mode, just set the LoRa join mode to **ABP** as follows:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/cl6jv8cge7hzkavag3hn.jpg"
  width="45%"
  caption="ABP Parameters in The Things Network"
/>

4. Set the LoRa class to **Class A**:

```sh
at+set_config=lora:class:0
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/mmll3jdm6l9hg3jm5jy7.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Class via RAK Serial Port Tool"
/>

5. Set the frequency/region to **EU868**:

```sh
at+set_config=lora:region:EU868
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/hoxaobrwlgh6otjde6vd.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Class via RAK Serial Port Tool"
/>

6. Set the **Device Address**:

```sh
at+set_config=lora:dev_addr:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/i5tmaceu0jqjbh3qt4po.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Device Address via RAK Serial Port Tool"
/>

7. Set the **Network Session Key**:

```sh
at+set_config=lora:nwks_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/kc6fxzmr4ijlan1sgrh8.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Network Session Key via RAK Serial Port Tool"
/>

8. Set the **Application Session Key**:

```sh
at+set_config=lora:apps_key:XXXX
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/wcfzckjltpwf2n8pdobs.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Application Session Key via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
After configuring all the parameters, you need to reset the RAK4200 Evaluation Board to save the parameters.
:::

9. After resetting your RAK4200 Evaluation Board, join in **ABP mode**:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/mqklekitvyx1smagkvx5.jpg"
  width="45%"
  caption="AT Command for ABP LoRa Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
There is no need to join in ABP mode; but, you still need to set this AT command to validate the parameters which you just set for ABP mode.
:::

Try to send data from the RAK4200 Evaluation Board to TTN in ABP mode.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/4.connecting-to-ttn/ttn-abp/hdyn5eezsmczhxvblpkn.jpg"
  width="45%"
  caption=" OTAA Test Sample Data Sent via RAK Serial Port Tool"
/>

## Connecting with Chirpstack

The **ChirpStack**, previously known as the LoRaServer project, provides open-source components for building LoRaWAN networks. For more details, refer to [**ChirpStack website**](https://www.chirpstack.io/).

:::tip 📝 NOTE
In this document, it is assumed that you are using a LoRa gateway with the ChirpStack configured successfully. If not, have a look at RAK documents for more details: [RAK LPWAN Gateway](/Product-Categories/WisGate).

:::

1. Open the web page of the ChirpStack, which you want to connect with, and log in.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/wgk31ykcgwp2gbzicmut.png"
  width="100%"
  caption="Chirpstack Default Window"
/>

:::tip 📝 NOTE
By default, there is already one or more items on this page. You can either use it or create a new item.
:::

2. Create a new item by clicking the “**CREATE**” button, and filling in the necessary items.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/l8na6pcdsvjl0lrqznyr.png"
  width="100%"
  caption="Chirpstack Creating Application"
/>

3. Once done, click on “**CREATE APPLICATION**”.
   
<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/zcxqc0pe6vquherzw521.png"
  width="100%"
  caption="Chirpstack Applications Available"
/>

4. The list of items is then provided the same with **Figure 35**. Click on the new item created.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/r2ikjxdaluvfxbqhaccc.png"
  width="100%"
  caption="Applications Page in Chirpstack"
/>

5. Add a node device into ChirpStack by clicking the “**CREATE**” button.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/sdrlazcgfseimitslo6u.png"
  width="100%"
  caption="Chirpstack Adding Node into the  RAK4200 Evaluation Board "
/>

6. Once the node is created, fill in the necessary data. You can generate a Device EUI automatically by clicking the following icon, or you can write a correct Device EUI in the edit box.
   
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

2. Click “**CREATE DEVICE**” then generate the application key on this page. You can write it by yourself or generate it automatically by clicking the following icon and pressing “**SET DEVICE-KEYS**”.

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/b7nijxtl27bnr6mtgn6u.png"
  width="100%"
  caption="Chirpstack OTAA Set Device Keys"
/>

3. Set the **Device EUI** for the RAK4200 Evaluation Board using the "**dev_eui**".

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/vlakwnyaoitygjhhn0hx.png"
  width="100%"
  caption="Chirpstack OTAA Set Device EUI"
/>

4. Set the **Application Key** for the RAK4200 Evaluation Board using the "**app_key**".

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/gomyqs6fsi4limpvngbp.jpg"
  width="100%"
  caption="Chirpstack OTAA Set Application Key"
/>

::: tip 📝 NOTE
The Application EUI which will be set into RAK4200 Evaluation Board as “app_eui” is not necessary for ChirpStack, and you can set it to any value with a correct format.
:::

5. Configure RAK4200 Evaluation Board by using the available commands found in the [AT Commands for RAK4200 Evaluation Board](/Product-Categories/WisDuo/RAK4200-Evaluation-Board/AT-Command-Manual/). Connect the RAK4200 Evaluation Board to your Windows PC.

6. Power it **ON** and open **RAK Serial Port Tool** on your Windows PC as instructed in the [Interfacing with RAK4200 Evaluation Board](#interfacing-with-evaluation-board) section.

::: tip 📝 NOTE
The default settings are as follows:
  - Join mode: **OTAA**
  - Class: **Class A** 
  - Region: **EU868**
:::

7. If the **join mode** is not in OTAA, just set the LoRa join mode to **OTAA** as follows:

```sh
at+set_config=lora:join_mode:0
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/mrydatc2hlwrxiyjpoqw.jpg"
  width="45%"
  caption="Chirpstack OTAA Join Mode via RAK Serial Port Tool"
/>

8. Set the LoRa class to **Class A**:

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
After configuring all the parameters, you need to reset the RAK4200 Evaluation Board to save the parameters.
:::

13. After reset, send join command:

```sh
at+join
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/kp0hhztd0d1txr0xlsnd.jpg"
  width="45%"
  caption="Chirpstack OTAA Join via RAK Serial Port Tool"
/>

14. You can see the **JoinRequest** and **JoinAccept** on the ChirpStack page:

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/szgnpputwklp26s1epwd.png"
  width="100%"
  caption=" Chirpstack OTAA JoinRequest and JoinAccept"
/>

15. Try to send data from the RAK4200 Evaluation Board to ChirpStack:

```sh
at+send=lora:2:1234567890
```

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/sy4nezodryajjldti9ki.jpg"
  width="45%"
  caption="Chirpstack OTAA Sample Data Sent via RAK Serial Port Tool"
/>

- You can then see the message on the ChirpStack page the same, as shown in **Figure 52**.

<rk-img
  src=" /assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/otaa/y8olaqg8ywggopiglkdv.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>


### ABP Mode

1. If you select “**DeviceProfile_ABP**” or “**DeviceProfile_ABP_CN470**”, it means you want to join ChirpStack in **ABP mode**.

::: warning ⚠️ WARNING
The frequency AS923 in ABP Mode is not supported in Chirpstack.
:::

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n794vly7saocsviprbbj.png"
  width="100%"
  caption="Chirpstack ABP Activation"
/>

2. As highlighted in **Figure 54**, you can see the ABP parameters in the “**ACTIVATION**” item:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/n3ragennimcdzazgxhyp.png"
  width="100%"
  caption="Chirpstack ABP Activation Parameters Needed"
/>

3. Use these parameters to set the RAK4200 Evaluation Board by using AT command. Set **LoRa join** mode to **ABP**:

```sh
at+set_config=lora:join_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/iqptivjfhqaf9rkoxfwb.jpg"
  width="45%"
  caption="Chirpstack ABP Join Mode via RAK Serial Port Tool"
/>

4. Set LoRa class to **Class A**:

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
After configuring all the parameters, you need to reset the RAK4200 Evaluation Board to save the parameters.
:::

9. After resetting the RAK4200 Evaluation Board, join in ABP mode:

```sh
at+join
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/b3oaamuv6fom8bydg1mi.jpg"
  width="45%"
  caption="Chirpstack ABP Join via RAK Serial Port Tool"
/>

::: tip 📝 NOTE
It is not needed to join in ABP mode; but, you still need to set this AT command to validate the parameters which you just set for ABP mode.
:::

10. Try to send data from the RAK4200 Evaluation Board to ChirpStack:

```sh
at+send=lora:2:123456789
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/elbbdyduu3bbgnopsvns.jpg"
  width="45%"
  caption="Chirpstack Sample Data Sent via RAK Serial Port Tool"
/>

- You can see the data which is just sent from the RAK4200 Evaluation Board on the ChirpStack page:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/5. connecting-to-chirpstack/abp/fnw0xofynzzxjxhjuhrv.png"
  width="100%"
  caption="Chirpstack Data Received Preview"
/>

## LoRa P2P Mode

In this section, using P2P on the RAK4200 will be discussed. You will be using EU868 as the frequency; although, it is applicable also to other standard bands.

1. First, find two RAK4200 Evaluation Board that can work on EU868 frequency, and make sure their firmware version is not less than V3.0.0.1.
2. Next, connect these two RAK4200 Evaluation Board with your Windows PC through UART, and open two serial port tools.
3. Now, configure them to both works in LoRa P2P mode as follow:

```sh
at+set_config=lora:work_mode:1
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/nerylgv02xmr8hstfksm.jpg"
  width="45%"
  caption="P2P Initialization"
/>

4. Then configure LoRa P2P parameters for both of them as follow for example:

```sh
at+set_config=lorap2p:XXX:Y:Z:A:B:C
```

Refer to the [AT Command Manual](/Product-Categories/WisDuo/RAK4200-Evaluation-Board/AT-Command-Manual/) to learn about the definition of the parameters used.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/cgjnyy9zykhbdemr2rvs.jpg"
  width="90%"
  caption="Configuring P2P in both RAK4200 Nodes"
/>

5. Try to send a message from the first RAK4200 Evaluation Board to the second RAK4200 Evaluation Board.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/csib8zhcwfkevehq7fby.jpg"
  width="90%"
  caption="Message sent and received status in the two nodes"
/>

6. Now, you can send more messages.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/6.lorap2p/gbvh6jy5olovvt0fjyib.jpg"
  width="90%"
  caption="Succeeding Messages sent to the other node"
/>


## Miscellaneous

### RAK5005 Core Module Slot Connection to RAK4201
  
The RAK5005 is the base board that connects the RAK4200 Core Module. It creates the power supply for the attached module and provides additional IO and Sensor support for your project needs.    
  
::: tip 📝 NOTE
RAK4201 is a circuit board module for RAK5005 with a pre-soldered RAK4200 LPWAN Module.
:::
  
Listed below are the accessible pins and data bus of the attached RAK5005 base board on the RAK4200 EVB:


| RAK4201 Pin Definition | Function Name of WisBase | Pin Number | Pin Number | Function Name of WisBase | RAK4201 Pin Definition |
| ---------------------- | ------------------------ | ---------- | ---------- | ------------------------ | ---------------------- |
| NC                     | VBAT                     | 1          | 2          | VBAT                     | NC                     |
| GND                    | GND                      | 3          | 4          | GND                      | GND                    |
| 3V3                    | 3V3                      | 5          | 6          | 3V3                      | 3V3                    |
| NC                     | USB+                     | 7          | 8          | USB-                     | NC                     |
| NC                     | VBUS                     | 9          | 10         | SW1                      | NC                     |
| UART1_TX/PA9           | TXD0                     | 11         | 12         | RXD0                     | UART1_RX/PA10          |
| MCU_NRST               | RESET                    | 13         | 14         | LED1                     | NC                     |
| NC                     | LED2                     | 15         | 16         | LED3                     | NC                     |
| 3V3                    | VDD                      | 17         | 18         | VDD                      | 3V3                    |
| I2C_SDA/PB7            | I2C1_SDA                 | 19         | 20         | I2C1_SCL                 | I2C_SCL/PB6            |
| UART2_DE/PA1           | AIN0                     | 21         | 22         | AIN1                     | NC                     |
| NC                     | BOOT0                    | 23         | 24         | NC                       | NC                     |
| NC                     | SPI_CS                   | 25         | 26         | SPI_CLK                  | SPI_CLK/PA5            |
| SPI_MISO/PA6           | SPI_MISO                 | 27         | 28         | SPI_MOSI                 | SPI_MOSI/PA7           |
| UART1_DE/PA12          | IO1                      | 29         | 30         | IO2                      | NC                     |
| NC                     | IO3                      | 31         | 32         | IO4                      | NC                     |
| UART2_TX/PA2           | TXD1                     | 33         | 34         | RXD1                     | UART2_RX/PA3           |
| NC                     | I2C2_SDA                 | 35         | 36         | I2C2_SCL                 | NC                     |
| NC                     | IO5                      | 37         | 38         | IO6                      | NC                     |
| GND                    | GND                      | 39         | 40         | GND                      | GND                    |

<br>


### Burning the Bootloader Into the Device

The RAK4200 Evaluation Board bootloader is already pre-installed upon manufacturing, so this bootloader upgrade steps are not necessary. If you find that the bootloader of your RAK4200 Evaluation Board is damaged, contact through the [RAKwireless forum](https://forum.rakwireless.com/).

:::tip 📝 NOTE:

For RAK4200 modules with firmware version V3.0.0.12 and below, you need to use the [STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) to upgrade your firmware and upload the **.hex file** (not the .bin file) of the [latest RAK4200 firmware](https://downloads.rakwireless.com/en/LoRa/RAK4200/Firmware/). The lower versions of the firmware have a different bootloader code and will not work on the RAK DFU Tool.

:::

### Upgrading the Firmware

The following steps show you how to update the firmware for the RAK4200 WisDuo LPWAN Module connected to the Baseboard:

1. Download and install the software needed on your PC.

- [RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/RAK_SERIAL_PORT_TOOL_V1.2.1.zip)
- [RAK4200 Firmware](https://downloads.rakwireless.com/LoRa/RAK4200/Firmware/RAK4200_Latest_Firmware.zip)
- [RAK Device Firmware Upgrade (DFU) Tool](https://downloads.rakwireless.com/LoRa/Tools/RAK_Device_Firmware_Upgrade_tool/)

2. Connect your RAK4200 Evaluation Board in your Windows PC as instructed in the [Interfacing with RAK4200 Evaluation Board](#interfacing-with-rak4200-evaluation-board) section. 

3. Open the RAK firmware upgrade tool on your Windows PC. Make sure to choose the correct COM Port.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/rak-upgrade-tool.png"
  width="75%"
  caption="RAK Firmware Upgrade Tool"
/>

4. Click on the “**Select Firmware**” button to choose the correct upgrade file:

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/choose-firmware.png"
  width="75%"
  caption="Choosing the Correct Upgrade file"
/>

5. Click on “**Upgrade**” to upgrade. This may take a minute.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/upgrade-firmware.png"
  width="75%"
  caption="Firmware Upgrading in Process"
/>

6. If everything went well, you should see the same window, as shown in **Figure 72**.

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/upgrade-successful.png"
  width="75%"
  caption="Successfully Upgraded Firmware"
/>

7. Close the Firmware Upgrade Tool, and open the RAK Serial Port Tool again.

8. Choose the correct **COM port** and set the baud rate to **115200**. Then open the serial port and enter the AT command shown below to restart:

```sh
at+set_config=device:restart
```

<rk-img
  src="/assets/images/wisduo/rak4200-evaluation-board/quickstart/7.upgrading/xgkhng5xr1tg4prxnbuq.jpg"
  width="45%"
  caption="Restarting your Device"
/>

This information means that you have uploaded the Firmware successfully!

### Firmware Upgrade Through DAPLink

Refer to [RAKDAP1 Flash and Debug Tool](/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool).
