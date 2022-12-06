---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/platformio-logo.png
rak_desc: A brief guide on how to install the board support package in PlatformIO through Visual Studio Code
tags:
  - WisBlock
header:
  title: Installation of Board Support Package in PlatformIO
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/installation-of-board-support-package-in-platformio.jpg
posted: 14/08/2020 10:30 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 2014.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Installation of Board Support Package in PlatformIO

To make the support of WisBlock Core modules in PlatformIO easier we created a small script that installs or updates RAKwireless WisBlock modules in PlatformIO BSP's
This script does not install the required BSP's (platform and package), it only patches already installed BSP's.

:::tip 📝 NOTE
Download the patch package from
[RAK_PATCH.zip](https://raw.githubusercontent.com/RAKWireless/WisBlock/master/PlatformIO/RAK_PATCH.zip)
You will need it during the installation or update.
:::

## Steps for the installation or update:
- [First install](#first-install)
- [Update](#update)

----

### First install

#### Install PlatformIO

First of all, install **Visual Studio Code** which is a great and open source tool, and you can download it here:

[https://code.visualstudio.com/](https://code.visualstudio.com/)

After installing VS code, you can search PlatformIO and install it in the Extensions item:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722100737565.png"
  width="40%"
  caption="PlatformIO Extension"
/>

After installing PlatformIO, you can see the PlatformIO icon and open it as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722101053523.png"
  width="100%"
  caption="PlatformIO Installed in VS Code"
/>

Once PlatformIO installation is finished, you have to get the BSP's. Before you can use the WisBlock Core modules with PlatformIO you need to install the original platforms:
- RAK4631 => install nRF52 platform

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/Platform-nRF52.png"
  width="75%"
  caption="nRF52 platform"
/>
- RAK11200 => install ESP32 platform

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/Platform-ESP32.png"
  width="75%"
  caption="ESP32 platform"
/>
- RAK11300 => install Raspberry Pi RP2040 platform

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/Platform-RP2040.png"
  width="75%"
  caption="RP2040 platform"
/>

After the required platforms are installed, follow the steps as shown in [Update](#update)

### Update
After updating or installing the nRF52, ESP32 or Raspberry Pi RP2040 package do the following steps:

1. Open or create a project that uses the updated platform.
2. Compile the project so that PlatformIO is installing the packages belonging to the platform
   - Ignore the _**Unknown board ID**_ or _**variant.h: No such file or directory**_ errors until the following patch has been applied
3. Patch the platform and package
   - Unzip the contents of **RAK_PATCH.zip** into folder RAK_PATCH in your PlatformIO installation folder.

| Paths on different OS: |                                      |
| ---------------------- | ------------------------------------ |
| Windows                | `%USER%\.platformio\`                |
| Linux                  | `~/.platformio/`                     |
| MacOS                  | `/Users/{Your_User_id}/.platformio/` |

**Example (Windows 10):**

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/folder-view.png"
  width="50%"
  caption="Path to install RAK_PATCH in PlatformIO"
/>

**Install the patch**

Open a terminal in the .platformio folder and execute **`python ./rak_patch.py`**

Example (Windows 10 terminal):

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/patch_windows.png"
  width="75%"
  caption="Windows 10"
/>

Example (Linux terminal):

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/patch_linux.png"
  width="75%"
  caption="Linux"
/>

**OK, you've install and configure PlatformIO for WisBlock successfully.**

<b>Example:</b>
* Now, let's try to compile an example of WisBlock using PlatformIO. We use the RAK13007_Relay_G5LE-14-DC3 example in this document:

[https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13007_Relay_G5LE-14-DC3/](https://github.com/RAKWireless/WisBlock/tree/master/examples/common/IO/RAK13007_Relay_G5LE-14-DC3/)

1. Just copy the source code of the .ino file into the main.cpp of the PlatformIO project we just created:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722111241582.png"
  width="75%"
  caption="Project source code"
/>

2. Then compile it by click the compiling icon at the bottom tool bar as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722113244435.png"
  width="75%"
  caption="Sample code compiling"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722113305159.png"
  width="75%"
  caption="Compiling successful"
/>

**Great! :tada: We've compiled this example successfully!**

:::tip 📝 NOTE
As same as Arduino IDE, there is an upload icon on the right of compiling icon which can be used to upload the compiled firmware into your device.
:::

<rk-author />
