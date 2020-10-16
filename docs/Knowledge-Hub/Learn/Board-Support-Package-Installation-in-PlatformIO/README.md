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
posted: 8/14/2020 10:30 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 6 years.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---

# Installation of Board Support Package in PlatformIO

## Install PlatformIO

1. First of all, install **Visual Studio Code** which is a great and open source tool, and you can download it here: [https://code.visualstudio.com/](https://code.visualstudio.com/)

2. After installing VS code, you can search PlatformIO and install it in the Extensions item:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722100737565.png"
  width="40%"
  caption="PlatformIO Extension"
/>

3. After installing PlatformIO, you can see the PlatformIO icon and open it as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722101053523.png"
  width="100%"
  caption="PlatformIO Installed in VS Code"
/>

4. Open "**Platforms**" in PlatformIO and search "**Nordic**" as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722102908384.png"
  width="100%"
  caption="Search Nordic through PlatformIO"
/>

5. You can see there are several items, just click "**Nordic nRF52**" item and "**Install**" it as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722103130747.png"
  width="100%"
  caption="Nordic nRF52 Installation"
/>

6. Download the PlatformIO folder from: [https://github.com/RAKWireless/WisBlock/tree/master/PlatformIO/](https://github.com/RAKWireless/WisBlock/tree/master/PlatformIO/)

7. Copy "**wiscore_rak4631.json**" to the platforms folder.

    * The path maybe like: `Windows: %USER%.platformio\platforms\nordicnrf52\boards`

8. Then, create a new project in PlatformIO:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722104754712.png"
  width="100%"
  caption="Create new project"
/>

9. Choose the items below as follow:
    * Board: **WisCore RAK4631 Board (RAKwireless)**
    * Framework: **Arduino**

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722104925274.png"
  width="100%"
  caption="Project settings"
/>

10. After creating successfully, you can see the project:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722105421895.png"
  width="100%"
  caption="New project"
/>

11. Now, Copy the complete folder "**WisCore_RAK4631_Board**" in the "**PlatformIO**" folder which you just downloaded to the packages folder. 

    * The path maybe like: `Windows: %USER%.platformio\packages\framework-arduinoadafruitnrf52\variants`

12. Finally, restart the PlatformIO.

**OK, you've install and configure PlatformIO for WisBlock successfully.**

<b>Example:</b>
* Now, let's try to compile an example of WisBlock using PlatformIO. We use the LoRaWAN OTAA example in this document:

[https://github.com/RAKWireless/WisBlock/tree/master/examples/communications/LoRa/LoRaWAN/LoRaWAN_OTAA/](https://github.com/RAKWireless/WisBlock/tree/master/examples/communications/LoRa/LoRaWAN/LoRaWAN_OTAA/)

1. Just copy the source code of the .ino file into the main.cpp of the PlatformIO project we just created:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722111241582.png"
  width="100%"
  caption="Project source code"
/>

2. Then we need to install the LoRaWAN library "**SX126x-Arduino**" in PlatformIO firstly because this example is built based on this library. Just search "**SX126x**" in "**Libraries**" item of PlatformIO, and you can see "**SX126x-Arduino**" as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722112932981.png"
  width="100%"
  caption="SX126x-Arduino library"
/>

3. Just click it and "**Install**" this library as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722113100736.png"
  width="100%"
  caption="SX126x-Arduino library installation"
/>

4. Then compile it by click the compiling icon at the bottom tool bar as follow:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722113244435.png"
  width="100%"
  caption="Sample code compiling"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Board-Support-Package-Installation-in-PlatformIO/image-20200722113305159.png"
  width="100%"
  caption="Compiling successful"
/>

**Great! We've compiled this example successfully!**

:::tip 📝 NOTE
As same as Arduino IDE, there is an upload icon on the right of compiling icon which can be used to upload the compiled firmware into your device.
::: 

<rk-author />