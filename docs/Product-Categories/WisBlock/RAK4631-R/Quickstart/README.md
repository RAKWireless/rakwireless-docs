---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4631-R. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak4631-r/overview/RAK4631-R_home.png
prev: ../Overview/
next: ../Examples/
tags:
  - RAK4631-R
  - quickstart
  - wisblock
---

# RAK4631-R Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each step in the installation guide of the RAK4631-R WisBlock Core Module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK4631-R WisBlock Core](https://store.rakwireless.com/collections/wisblock-core/products/rak4631-lpwan-node)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) 
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/products/battery-connector-cable)
- [Solar Panel (optional)](https://store.rakwireless.com/products/solar-panel-connector-cable)

#### Software

##### Arduino IDE

- Download and install the [Arduino IDE](https://www.arduino.cc/en/Main/Software).

:::warning ⚠️ WARNING    
_**If you are using Windows 10**_.    
Do _**NOT**_ install the Arduino IDE from the Microsoft App Store. Instead, install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

- Add [RAK4631-R as a supported board in Arduino IDE](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#rak4631-r-board-support-package-in-arduino-ide) by updating Board Manager URLs in **Preferences** settings of Arduino IDE with this JSON URL:<br> `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json`.
- After that, you can then add **RAKwireless RUI nRF Boards** via Arduino board manager.

##### Visual Studio IDE

- Download and install the [Visual Studio IDE 2019 Community version 16.11](https://visualstudio.microsoft.com/thank-you-downloading-visual-studio/?sku=community&rel=16&utm_medium=microsoft&utm_source=docs.microsoft.com&utm_campaign=download+from+relnotes&utm_content=vs2019ga+button).


## Product Configuration

### Hardware Setup

Your **RAK4631-R** will not work on its own. It needs at least to be connected to a WisBlock Base together with the antennas attached. You can then interface various WisBlock Modules via the available slots in the WisBlock Base. You can also add a battery as a power source and optional solar charging. All hardware-related configurations for your RAK4631-R are discussed here.

This section covers:

- [RAK4631-R Connection to Base Board](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#rak4631-r-to-wisblock-base)
- [RAK4631-R Connection to Other Modules](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#rak4631-r-to-wisblock-modules)
- [Assembling and Disassembling of WisBlock Modules](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#assembling-and-disassembling-of-wisblock-modules)
- [Antenna and Battery/Solar Connection](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#lora-and-ble-antenna)

#### RAK4631-R to WisBlock Base

The RAK4631-R will not work without a WisBlock Base board. The WisBlock Base provides a USB connection for programming the RAK4631-R. It also provides a power source and various interfaces to RAK4631 so that it can be connected to other [WisBlock Modules](https://store.rakwireless.com/pages/wisblock) via different module slots.

RAKwireless offers many [WisBlock Base Boards](https://store.rakwireless.com/collections/wisblock-base) compatible with WisBlock Core. It is highly recommended for you to look at these WisBlock Base boards to see what matches your requirements in terms of available module slots, power supply options, and overall size.

To illustrate, RAK4631-R can be connected to RAK5005-O WisBlock Base, as shown in **Figure 1**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/rak5005-connect.png"
  width="70%"
  caption="RAK4631-R connection to WisBlock Base RAK5005-O"
/>

Few pins are exposed on [RAK5005-O](/Product-Categories/WisBlock/RAK5005-O/Datasheet/#rak5005-o-wisblock-base-board-datasheet), and you can easily use them via header pins. The labels are at the back, as shown in **Figure 2**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/IO-pins.png"
  width="35%"
  caption="WisBlock Base exposed pins"
/>

Each WisBlock Base board has its own set of header pins available for you to use. However, these header pins are not exactly the same in each WisBlock Base. It is common to see IO pins and communication protocol pins like I2C and UART in the WisBlock Base board. More information can be found on the [official documentation of the specific WisBlock Base](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-base) you used in your project. 

UART1 of RAK4631-R is also used for DFU (Device Firmware Upgrade) via UART. If the UART1 console connection is successful, the USB serial console will not work.

There are useable LEDs as well in the WisBlock Base. You can control them in your code via the `GREEN_LED` and `BLUE_RED` macro.


#### RAK4631-R to WisBlock Modules

RAK4631-R WisBlock Core is designed to be interfaced with other [WisBlock Modules](https://store.rakwireless.com/pages/wisblock) like sensors, displays, and other interfaces. You need to connect these modules to the compatible slots on the WisBlock Base.

**Figure 3** shows an illustration on how you can combine various WisBlock Modules with the RAK4631-R WisBlock Core via the WisBlock Base board.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/exa-weather-assy.png"
  width="70%"
  caption="RAK4631-R connection to WisBlock Base and other WisBlock Modules"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

**Figure 4** shows how to mount the RAK4631-R module on top of a WisBlock Base board (RAK5005-O). Follow carefully the procedure defined in [WisBlock module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to secure the connection safely. Once attached, carefully fix the module with one or more pieces of M1.2 x 3&nbsp;mm screws depending on the module.

<rk-img
  src="/assets/images/wisblock/rak4631/datasheet/mounting-sketch.png"
  width="50%"
  caption="RAK4631-R mounting sketch"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock module is the same. 

1. First, remove the screws.  

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 7**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak1910/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

#### LoRa and BLE Antenna

Another important part component of RAK4631-R is the antennas. 

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/lora-antenna.png"
  width="30%"
  caption="LoRa antenna"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/ble-antenna.png"
  width="40%"
  caption="BLE antenna"
/>

You need to ensure that these are properly connected to have a good LoRa and BLE signal. Also, note that you can damage the RF section of the chip if you power the module without an antenna connected to the IPEX connector.

RAK4631-R has a label on its sticker on where to connect the antennas, as shown in **Figure 10**.


<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/RAK4631-antenna-label.png"
  width="30%"
  caption="RAK4631-R antenna label"
/>

:::tip 📝 NOTE
Detailed information about the RAK4631-R BLE and LoRa antenna can be found on the [antenna datasheet](https://downloads.rakwireless.com/LoRa/WisBlock/Accessories/). 
:::

:::warning ⚠️ WARNING
When using the LoRa or Bluetooth Low Energy transceivers, make sure that an antenna is always connected. Using these transceivers without an antenna can damage the system. Make sure to fix the module with the screws to ensure a proper function.
:::

#### Battery and Solar Connection

RAK4631-R can be powered via the USB cable or Li-Ion/LiPo battery via the dedicated connectors, as shown in **Figure 11**. The matching connector for the battery wires is a [JST PHR-2 2&nbsp;mm pitch female](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable).

This illustration uses RAK5005-O as WisBlock Base. There are other [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base) boards available, and you need to check the datasheet of the specific WisBlock Base board for the right polarity and other parameters.

:::warning ⚠️ WARNING

- Batteries can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause a fire.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
- Make sure the battery wires match the polarity on the RAK5005-O board. Not all batteries have the same wiring.

:::

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/battery-connect.png"
  width="50%"
  caption="WisBlock Base connection"
/>

<rk-img
  src="/assets/images/wisblock/quickstart/battery-connection.gif"
  width="25%"
  caption="Battery connection"
/>

The battery can be recharged, as well, via a small solar panel, as shown in **Figure 13**. The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable).

<rk-img
  src="/assets/images/wisblock/rak4631/quickstart/solar-connect.png"
  width="90%"
  caption="Solar panel connection"
/>

Specification of the battery and solar panel can be found on the datasheet of the WisBlock Base.

### Software Initial Guide

The firmware of RAK4631-R allows you to develop custom firmware on top of its built-in AT Commands setting. To develop your firmware using Arduino IDE, you need first to add **RAKwireless RUI nRF Boards** in the Arduino board manager, which will be discussed in this guide. You can then use RUI3 APIs for your intended application. For the AT commands, you can send it either via a USB connection, UART1, or wirelessly via BLE connection.

This section covers:

- [Arduino IDE with RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#rak4631-r-board-support-package-in-arduino-ide)
- [Visual Studio IDE with RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#programming-rak4631-r-via-visual-studio-ide)
- [AT Command Demo via BLE](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#at-command-over-ble)
- More guides can be found on [Demo and Examples](/Product-Categories/WisBlock/RAK4631-R/Examples/) page

#### RAK4631-R Board Support Package in Arduino IDE

If you don't have an Arduino IDE yet, you can download it on the [Arduino official website](https://www.arduino.cc/en/Main/Software) and follow the installation procedure in the [miscellaneous section](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#arduino-installation) of this document.

::: tip 📝 NOTE   
**For Windows 10 users**:   
If your Arduino IDE was installed from the Microsoft App Store, you need to reinstall your Arduino IDE by downloading it from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

Once Arduino IDE has been installed successfully, and you've understood the main parts of Arduino IDE, you can do some configuration changes on Arduino IDE so that it can be adapted to RAKWireless WisBlock.

1. Open Arduino IDE and go to **File** > **Preferences**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/preferences.png"
  width="90%"
  caption="Arduino preferences"
/>

2. To add the RAK4631-R WisBlock Core to your Arduino Boards list, you need to edit the Additional Board Manager URLs. Click the icon, as shown in **Figure 15**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/additional-boards.png"
  width="90%"
  caption="Modifying additional Board Manager URLs"
/>

3. Copy the URL `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json` and paste it on the field, as shown in **Figure 16**. If there are other URLs already there, just add them on the next line. After adding the URL, click OK.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/preferences-url.png"
  width="90%"
  caption="Add additional Board Manager URLs"
/>


4. Restart the Arduino IDE.

5. Open the Boards Manager from Tools Menu.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/boards-manager.png"
  width="90%"
  caption="Opening Arduino Boards Manager"
/>

6. Write `RAK` in the search bar, as shown in **Figure 18**. This will show the available RAKwireless WisBlock Core boards that you can add to your Arduino Board list. Select and install the **RAKwireless RUI nRF Boards**

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/installing-rak.png"
  width="80%"
  caption="Installing RAKwireless RUI nRF boards"
/>

7. Once the BSP is installed, select  **Tools** > **Boards Manager** > **RAKWireless RUI nRF Modules** > **WisBlock Core RAK4631 Board**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/rui-nrf.png"
  width="80%"
  caption="Selecting RAKwireless WisBlock Modules"
/>

<!-- 
#### Compile an Example with Arduino LED Breathing


1. Check RAK4631-R COM Port using Windows **Device Manager**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/rui-port.png"
  width="70%"
  caption="Device Manager Ports (COM & LPT)"
/>

2. Open Tools Menu and select Port: **COM4** currently used.
<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/select-port.png"
  width="90%"
  caption="Select COM port"
/>

3. You can see the Serial Monitor icon and click it to connect COM port.
<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/serial-mon.png"
  width="90%"
  caption="Open Arduino Serial Monitor"
/>

4. If the connection is successful, you can send AT Commands to RAK4631-R. For example: To check the RUI version type `AT+VER=?` on the text area then click on the **Send** button, as shown below.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/at+ver.png"
  width="90%"
  caption="Send AT command"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/arduino-console.png"
  width="90%"
  caption="Arduino Serial Monitor COM4"
/>

5. Open **Arduino_Led_Breathing**  example code.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/led-example.png"
  width="90%"
  caption="Led Breathing example"
/>

6. Click on the Verify icon to verify the example code.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/verify-code.png"
  width="90%"
  caption="Verify the example code"
/>

7. Click the Upload icon to upload the example code.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/upload-code.png"
  width="90%"
  caption="Upload the example code"
/>

8. If the upload is successful, you will see the **Device programmed** message.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/dev-prog.png"
  width="90%"
  caption="Device programmed successfully"
/>

9. After Device Programmed is completed you will see that RAK5005-O Blue/Green LED is blinking.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/compile-example/Picture7.jpg"
  width="70%"
  caption="RAK4631-R with RAK5005-O Base Board Blue/Green LED is blinking"
/> 

At this point, you are now ready to explore more applications in the [Demo and Examples](/Product-Categories/WisBlock/RAK4631-R/Examples/#lorawan-application-scenario-example) section of this document.

-->

#### Programming RAK4631-R via Visual Studio IDE

##### Visual Studio IDE Download and Installation

If you don't have Visual Studio IDE yet, download the installer on [Visual Studio IDE Community 2019](https://docs.microsoft.com/en-us/visualstudio/releases/2019/release-notes).


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs2019-release-notes.png"
  width="90%"
  caption="Visual Studio Community 2019 Release Notes"
/>

###### Windows Setup

Install the Visual Studio Community 2019, which you just downloaded, on your Windows PC.

1. Click the **Continue** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/install-license.png"
  width="45%"
  caption="Visual Studio Community License"
/>

2. On the next installer window, select the **Desktop development with C++** tab and then click on the **Install** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/install-desktop.png"
  width="80%"
  caption="Visual Studio Community 2019 desktop development with C++"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/installer-download.png"
  width="80%"
  caption="Visual Studio Community 2019 installer"
/>

3. A reboot is required after the successful installation. Restart your computer first before you start using Visual Studio.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/installer-reboot.png"
  width="45%"
  caption="Visual Studio Community 2019 successful installation"
/>

4. After restarting your computer, download the [Arduino IDE for Visual Studio 2019](https://www.visualmicro.com/page/Arduino-Visual-Studio-Downloads.aspx).

      - Alternative link: [Arduino IDE for Visual Studio 2019](https://1drv.ms/u/s!AsT00oFsGAmRoO4JVG47LeCEaM5-cQ?e=IZ9bnD)

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/arduino-vs-2019.png"
  width="80%"
  caption="Arduino IDE for Visual Studio"
/>

5. Click on the **Install** button to install the **Arduino IDE VSIX** extension.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vsix-install.png"
  width="50%"
  caption="Arduino IDE VSIX extension install"
/>

- Arduino IDE VSIX installation completed.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vsix-install-complete.png"
  width="50%"
  caption="Arduino IDE VSIX extension successfully installed"
/>

###### Configuring Visual Studio Community 2019

1. Open **Visual Studio 2019** then click on the **Continue without code**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-open.png"
  width="80%"
  caption="Open Visual Studio Community 2019 App"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-initial.png"
  width="100%"
  caption="Visual Studio Community 2019"
/>


2. In the Menu tab, click **Extensions** and select **vMicr** then **Visual Micro Explorer**.


<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-micro-explorer.png"
  width="100%"
  caption="Visual Studio Community 2019 Micro Explorer configuration"
/>

3. A Micro Explorer window appears. Under the IDE tab, select IDE **Arduino 1.6/1.8** then click on the **IDE Locations** tab.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/micro-explorer-window.png"
  width="100%"
  caption="Visual Studio Community 2019 Micro Explorer configuration"
/>

4. After that, execute the following to configure the IDE Locations:

- On **Use installed IDE** field, select **Arduino 1.6/1.8**.
- Check if the Arduino IDE is already installed on folder `C:\Program Files (x86)\Arduino`.
- Copy the RUI URL: `https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json` and paste it on **Optional addition boards manager urls**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/ide-locations.png"
  width="70%"
  caption="Visual Studio Community 2019 IDE Locations configuration"
/>

5. Install **RAKwireless RUI nRF Boards**.

- Restart the Visual Studio IDE.
- Open the **Visual Micro Explorer** on the **Extensions** -> **vMicro** -> **Visual Micro Explorer**.
- Click on the **Board Manager** tab and check **RAKwireless RUI nRF Boards**. This will show the available versions of RAKwireless RUI nRF boards.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/board-manager.png"
  width="40%"
  caption="Visual Micro Explorer Board Manager RAKwireless"
/>

- Select the latest available version of RAKwireless RUI nRF board and then click **OK** to install.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/board-manager-install.png"
  width="80%"
  caption="Board Manager installation"
/>
:::tip 📝 NOTE 
You can also install RAKwireless RUI nRF Boards using the [RAK4631-R Board Support Package](/Product-Categories/WisBlock/RAK4631-R/Quickstart/#rak4631-r-board-support-package-in-arduino-ide). The Visual Studio IDE 2019 imports Arduino IDE settings. 
:::

###### Compile an Example With RAK4631-R

1. Launch Visual Studio IDE and open **Visual Micro Explorer** on **Extensions** -> **vMicro** -> **Visual Micro Explorer**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/micro-explorer-example.png"
  width="40%"
  caption="Micro Explorer examples"
/>

2. Click on the **Examples** tab and then search for **RAK4631** on the **RUI_V3_examples** folder.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-examples.png"
  width="100%"
  caption="Micro Explorer RAK4631 examples"
/>

3. In the **Visual Micro - Help and Examples** window, click on the **Open Copy** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-open-copy.png"
  width="50%"
  caption="RAK4631 Open Copy"
/>

4. Now, close the **Micro Explorer** window and open the Arduino sketch on the **Solution Explorer** window:
- Click on the **x** icon to close `Micro Explorer`. 
- Click on the **triangle** icon to open `Solution Explorer`.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-open-sketch.png"
  width="100%"
  caption="RAK4631 Solution Explorer"
/>

5. In the Solution Explorer, under RAK4631, click the `RAK4631.ino` file.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-ino.png"
  width="100%"
  caption="Opening the RAK4631.ino file"
/>

6. Configure **Solution**, **Platform**, and **Serial Port**. Click the dropdown and choose the following:

- Solution Configuration field: **Release**
- Solution Platforms field: **x86**
- Serial Portfield: Choose the RAK4631-R COM port detected in the **Windows Device Manager**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-ino-config.png"
  width="100%"
  caption="RAK4631.ino file"
/>

7. Click on the **Build and Upload** icon to flash the project on RAK4631-R.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-build-upload.png"
  width="100%"
  caption="Build and upload the RAK4631-R project"
/>

After a successful upload, you can now use your preferred console UART tool to connect with the RAK4631-R COM port. If the connection is successful, then you will see the output messages.

8. Type the following commands to check the current firmware version:


```
ATE
```

```
AT+VER=?
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-console.png"
  width="60%"
  caption="UART console output"
/>

<!-- 
1. Launch Visual Studio 2019 then click on `Create a new project` as shown below.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-new-project.png"
  width="80%"
  caption="Create new Arduino Project on Visual Studio 2019"
/>

2. Choose the `Arduino Simple Empty Project` then click on **Next** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-templates.png"
  width="80%"
  caption="Arduino project templates"
/>

3. Choose a Project name and check `Place Solution and project in the same directory`. You can choose your project folder using the `Location` option. To finish the configuration click on **Create** button.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-arduino-config.png"
  width="80%"
  caption="Configure your new project"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/vs-create-window.png"
  width="50%"
  caption="Creating Visual Studio 2019 project"
/>

4. 
Click the Extensions -> Visual Micro Explorer -> Examples -> Library Examples
-> RUI_V3_examples.

After Upgrade Complete you can use your preferred console UART tool, to connect with COM port.
port. If the connection is successful then you will see the output messages.

-->


#### AT Command Over BLE

This section shows how to use AT Commands over BLE using a Serial Bluetooth Terminal.

<!--
<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/android-serial-ble.png"
  width="70%"
  caption="Android 6.0 and Serial Bluetooth Terminal 1.3.5"
/>
--->

All available commands can be found in the [AT Command Manual](/Product-Categories/WisBlock/RAK4631-R/AT-Command-Manual/#general-commands) of RAK4631-R.

1. Download and install the Serial Bluetooth Terminal to connect the device.
2. Make sure the Bluetooth on your mobile is turned on.
3. Select **Category** then **Devices**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/available-serial-bluetooth.png"
  width="70%"
  caption="Available Serial Bluetooth Terminal"
/>

4. Select the **Bluetooth LE** icon and click the **SCAN** icon to scan the device.
5. Look for a BLE Device named "**RAK.XXXXXX**" in the scanner list of the app and connect to this device.

::: tip 📝 NOTE
By default, the BLE signal of the RAK4631-R turns off automatically if no connection is established after 30 seconds. Connect to the BLE signal of the RAK4631-R immediately after pressing the reset button.
:::

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/scanning-devices.png"
  width="70%"
  caption="Scanning devices"
/>

6. Make sure the connection is successful with "**RAK.XXXXXX**".

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/connect-device.png"
  width="40%"
  caption="Connect with the device"
/>

7. Send an AT Command and check remote console is received or not.

```
at+ver=?
```

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/default-ble-id.png"
  width="70%"
  caption="RAK4631-R default Bluetooth ID after resetting"
/>

8. The remote device will receive the same AT Commands.

```
at+ver=?
AT+VER=3.2.0-p2_22q1_final.87

OK

at+class=?
AT+CLASS=A

OK
```

## Miscellaneous

### Arduino Installation

Go to Arduino official website and download the [Arduino IDE](https://www.arduino.cc/en/Main/Software). You can see the multiple versions available for Windows, Linux, and Mac OS X. Choose the correct version of Arduino IDE and download it.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/1.download-arduino.png"
  width="100%"
  caption="Arduino IDE latest version"
/>

#### For Windows

::: tip 📝 NOTE   
**For Windows 10 users**:   
Do **NOT** install the Arduino IDE from the Microsoft App store. Install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

1. Install the Arduino IDE, which you just downloaded, on your Windows PC. 
2. Click **I Agree** then **Next** to proceed.

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/2.agreement-license.png"
  width="45%"
  caption="Arduino Setup License Agreement"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/3.installation-options.png"
  width="45%"
  caption="Arduino Setup Installation Options"
/>

3. Click **Install**.

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/4.installation-folder.png"
  width="45%"
  caption="Installing Arduino IDE"
/>

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/5.installing.png"
  width="45%"
  caption="Ongoing Installation"
/>


After 100% progress, the Arduino IDE has been installed successfully.

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/6.installation-success.png"
  width="45%"
  caption="Successful Installation"
/>

#### For Linux

First, you need the check the compatibility with your system and choose between the 32-bit, 64-bit, and ARM versions of the Arduino IDE for Linux.

##### Installing via a tarball

1. After downloading the correct Arduino version, open a terminal, then run `ls` to check the installation file on the download folder.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/ls-arduino.png"
  width="90%"
  caption="Check the download folder"
/>


2. A tarball is a type of compressed folder, like a `.zip` file, commonly used to distribute software in Linux. To extract the files from the tarball, change the directory to where the downloaded tarball is, then run:

`tar xvf arduino-version.xz`

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/tar-linux.png"
  width="90%"
  caption="Tarball extract command"
/>

3. When the tar command is finished, run `ls` again. A folder named  **arduino-version** will be created.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/ls-tarball.png"
  width="90%"
  caption="Arduino install folder created"
/>

4. Change the current directory and go to the newly created folder directory. There will be a file named `install.sh` in the folder. Execute `sudo ./install.sh` to install the Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/sudo-install.png"
  width="90%"
  caption="Arduino install script running"
/>

The `sudo` command temporarily elevates privileges allowing the installer to complete sensitive tasks without logging in as the root user.

#### For Mac OS X

In Mac OS X, the same as Linux, there is no installation process. It is just a process of decompression, then you can open Arduino IDE successfully.


### Arduino IDE Parts Guide

**Figure 58** shows the five (5) parts of Arduino IDE.

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/7.arduino-ide.png"
  width="75%"
  caption="Arduino IDE"
/>

1. **IDE Option Menu**

You can configure some general parameters such as the serial port, the board information, the libraries, the edit parameters, and so on.

2. **Operating Buttons**

The operating buttons have five operations:

  - **Verify/Compile** the source code.
  - **Upload** the compiled code into WisBlock.
  - **Open** a **New** Arduino IDE window or existing application.
  - **Save** the current application.

<rk-img
  src="/assets/images/wisblock/rak4631-r/miscellaneous/8.operating-buttons.png"
  width="35%"
  caption="Operating Buttons"
/>


3. **Code Area**

You can edit the source code, which will be compiled and uploaded into WisBlock later in this area.

4. **State Area**

5. **Output Message Area**
You can see the output message in this area, whether it's failure or success information.
