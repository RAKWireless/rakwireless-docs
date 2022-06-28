---
rak_img: /assets/rakwireless/rak-blue-dark.png
rak_desc: WisGateOS 2 features an extension functionality, which provides additional features and functions that can be added or removed, based on the user's needs. Later this year RAKwireless will provide the option for our users to build their own extensions. 
rak_grp: [software-apis-and-libraries, wisgateos]
prev: ../Software-APIs-and-Libraries/
next:  false
tags:
    - wisgate
---

# WisGateOS 2 Extensions

## Overview
WisGateOS 2 features an extension functionality, which provides additional features and functions that can be added or removed, based on the user's needs. Later this year RAKwireless will provide the option for our users to build their own extensions. 

Read more about how to [add](#how-to-add-an-extension) or [remove](#how-to-remove-an-extension)  extensions here:

Find all available extensions for the WisGateOS 2 [here](#extensions): 

The extensions are built to work with version 2 gateways running the WisGateOS 2. 

Note that some extensions will be available for certain gateway models since they are related to specific hardware functionality.


## How to Add or Remove an Extension

### How to add an extension

1. To install an extension, start with accessing the gateway. To access the gateway, check the Access the [WisGateOS 2 Web UI](https://docs.rakwireless.com/Product-Categories/Software-APIs-and-Libraries/WisGateOS-2/Overview/#access-the-wisgateos-2-web-ui) user manual.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/1.png"
  width="100%"
  caption="Login page"
/>

2. After a successful login, head to the **Extensions tab** (<img src="/assets/images/software-apis-and-library/wisgateos2-extensions/2.png"> ). You can click on the WisGate logo (<img src="/assets/images/software-apis-and-library/wisgateos2-extensions/3.png"/>) in the upper left corner to expand the menu on the left and see the full names of the tabs. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/4.png"
  width="100%"
  caption="Extensions tab"
/>

By default, no extensions are installed. 

3. To install one, you can click either on **Add new extension** button or the **install one now link**. An **Add new extension** window will pop up.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/5.png"
  width="100%"
  caption="Add New Extension"
/>

4. Now, you can either drag and drop the extension file in the **Drop your Extension file here or choose file** form or click on the **choose file link** in the form and browse for the extension file.

::: tip 📝 NOTE
The extension files are in **IPK** format and are created specifically for the WisGateOS 2 and the WisGate Edge hardware platform. A general IPK file for OpenWRT cannot be installed.
:::

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/6.png"
  width="100%"
  caption="Choosing an Extension"
/>

5. After you choose the extension file, click on **Add extension** to install it.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/7.png"
  width="100%"
  caption="Adding an Extension"
/>

It takes some time for the extension to install. 

6. After the installation process is complete, the WisGateOS will reboot and you need to log in again. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/8.png"
  width="100%"
  caption="Login Page"
/>

7. Head to the **Extensions tab** again and you should see the installed extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/9.png"
  width="100%"
  caption="Installed Extension"
/>

Your extension is successfully installed. 

8. You can now install more extensions via the **Add new** **extension** button or configure the installed ones by clicking the **Launch** button on the extension.

### How to remove an extension

1. To remove an extension, head to the **Extensions tab**. 
   
<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/10.png"
  width="100%"
  caption="Installed Extension"
/>

2. Click on the **Remove** button at the extension you want to remove. You will be asked if you want to remove that extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/11.png"
  width="100%"
  caption=" Removing an Extension"
/>

3. Click on **Remove**.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/12.png"
  width="100%"
  caption="Extension is Being Removed"
/>

Wait for the process to finish.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/13.png"
  width="100%"
  caption="Extension is Removed"
/>

## Extensions

### Breathing Light

Download the extension [here](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-breathing-light-1.0.0_b6.ipk).

#### Overview

::: tip 📝 NOTE
Breathing Light extension is available only for the WisGate Edge Lite 2 version 2 gateways. 
:::

The breathing light LED is located on the top cover of the WisGate Edge Lite 2 gateways and helps to easily determine the gateway’s status visually.

The breathing light extension allows you to enable or disable the breathing light on the gateway’s top cover. 

The default state of the LED is as in its Normal state - a slowly blinking blue light. 

#### Working Modes

By using the breathing light extension you can personalize the LED light’s working modes, frequency, and color. There are two working modes. The first one is All. If you choose it, the LED light will be active when your gateway is working properly. The second work mode is Warning only – the LED light signifies if there is some kind of malfunction. 

If you choose Warning only mode, the LED light will only work in case of abnormal activities. For instance, in case of a lost Internet connection. In Warning only mode, you can modify the light color, but not its frequency. 

#### Configuring the Extension

If you choose the All working mode, you can change the Normal light color, that is the light you see when the gateway is working properly. The blinking frequency can be changed as well – you can choose from Slow, Fast, and Steady. It’s possible to configure the color of the Warning light in All working mode as well. Note that the colors for the Normal and the Warning Light cannot be the same. 

1. Start by Installing and **Launching** the extension.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/14.png"
  width="100%"
  caption="Launch the Breathing Light Extension"
/>

2. Click on **Launch** in the **Breathing light**, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/15.png"
  width="100%"
  caption="Breathing Light Configuration Page"
/>

3. On the configuration page, you can configure different settings about the LED light color and the speed of blinking.
- **Interface**
  
  * **Enable Breathing Light** - enables/disables the breathing light extension
  * **Mode** -  sets the mode of the extension.
    * **All** - **Normal light** will glow
    * **Warning only** - only **Warning light** will glow. This disables the **Normal light** settings. 

- **Normal light** – the settings for the normal light. 
  * **Color**- the color of the light (red, green, blue)
  * **Frequency** – blink frequency of the led (slow, fast or steady)

::: tip 📝 NOTE
The **Normal light** settings are disabled if **Warning only** mode is selected.
:::

- **Warning Light** – the color of the warning light. 
4. To save the changes, click on **Save changes.**

You can check the status of the LED on the gateway itself. 

### Custom Logo

Download the extension [here](https://downloads.rakwireless.com/LoRa/WisGateOS2/WisGateOS2-Extensions/wes-custom-logo-1.0.0_b1.ipk).

#### Overview

The Custom Logo extension allows you to upload your logo in the Web UI. This extension is universal and it works for all gateways, supporting WisGateOS 2. The Custom Logo extension is created with the thought of small or bigger enterprises that want their logo to be recognized and used in their everyday work. 

Being able to rebrand your Web UI is particularly useful and even required when it comes to companies that need to promote and visualize their brand or product. This is where RAKWireless’ white label feature comes in handy for the clients. 

#### Size and Format Requirements

::: tip 📝 NOTE
According to the requirements, the logo picture you upload should be in SVG format and up to 300kb.  
:::

And of course, you can preview the Web UI page before finally switching RAKWireless’ logo with the logo of your brand. 

You can check the guide on how to download the extension above. 

#### Configuring the Extension

1. Start by Installing and **Launching** the extension. 

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/17.png"
  width="100%"
  caption="Custom Logo Extension"
/>

2. On the **Extensions** tab, click on **Launch** in the **Custom logo** area, to open the extension’s configuration page.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/18.png"
  width="100%"
  caption="Custom Logo Configuration Page"
/>

3. On the configuration page, you can set a custom logo on the login page and on the sidebar menu.
- **Interface** – enables/disables custom logo extension.

- **Large logo** – this logo will be used on the login page and on the expanded sidebar menu. To upload a logo you can either drop the image in the area or click on Choose file and browse for the image.

- **Small logo** – this logo will be used for mobile view and on the collapsed sidebar menu. To upload a logo you can either drop the image in the area or click on Choose file and browse for the image.

- **Preview** – after choosing the desired images, you can click on preview and see how the logo will look on the login page, expanded and collapsed sidebar in desktop and mobile versions.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/19.png"
  width="100%"
  caption="Logo Preview for Desktop Users"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos2-extensions/20.png"
  width="100%"
  caption="Logo Preview for Mobile Users"
/>

4. To apply the selected logos, click **Save changes**. The page will reload and apply the logos. 
