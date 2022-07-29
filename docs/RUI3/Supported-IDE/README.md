# RUI3 Supported IDE

RUI3 is compatible with the following IDEs (Integrated Development Environments):

- [Arduino IDE](#arduino-ide)
- [Visual Studio Code (Arduino Extension)](#visual-studio-code-arduino-extension)
- [Visual Studio IDE](#visual-studio-ide) 

## Arduino IDE

### Arduino Installation

Go to the official Arduino website and download the [Arduino IDE](https://www.arduino.cc/en/Main/Software). You can see the multiple versions available for Windows, Linux, and Mac OS X. Choose the correct version of Arduino IDE and download it.

<rk-img
  src="/assets/images/rui3/vs/1.download-arduino.png"
  width="90%"
  caption="Arduino IDE latest version"
/>

#### For Windows

::: tip 📝 NOTE   
**For Windows 10 users**:   
Do **NOT** install the Arduino IDE from the Microsoft App store. Install the original Arduino IDE from the Arduino official website. The Arduino app from the Microsoft App Store has problems using third-party Board Support Packages.
:::

1. Install the Arduino IDE, which you just downloaded, on your Windows PC. 
2. Click **I Agree**, then **Next** to proceed.

<rk-img
  src="/assets/images/rui3/vs/2.agreement-license.png"
  width="45%"
  caption="Arduino Setup License Agreement"
/>

<rk-img
  src="/assets/images/rui3/vs/3.installation-options.png"
  width="45%"
  caption="Arduino Setup Installation Options"
/>

3. Now click the **Install** button.

<rk-img
  src="/assets/images/rui3/vs/4.installation-folder.png"
  width="45%"
  caption="Installing Arduino IDE"
/>

<rk-img
  src="/assets/images/rui3/vs/5.installing.png"
  width="45%"
  caption="Ongoing Installation"
/>


4. Once the Arduino IDE has been installed successfully, click the **Close** button to exit the installer.

<rk-img
  src="/assets/images/rui3/vs/6.installation-success.png"
  width="45%"
  caption="Successful installation"
/>

#### For Linux

First, you need the check the compatibility with your system and choose between the 32-bit, 64-bit, and ARM versions of the Arduino IDE for Linux.

##### Installing via a tarball

1. After downloading the correct Arduino version, open a terminal, then run `ls` to check the installation file on the download folder.

<rk-img
  src="/assets/images/rui3/vs/ls-arduino.png"
  width="100%"
  caption="Check the download folder"
/>


2. A tarball is a type of compressed folder, like a `.zip` file, commonly used to distribute software in Linux. To extract the files from the tarball, change the directory to where the downloaded tarball is, then run the following command:

```
tar xvf arduino-version.xz
```

<rk-img
  src="/assets/images/rui3/vs/tar-linux.png"
  width="100%"
  caption="Tarball extract command"
/>

3. When the tar command is finished, run `ls` again. A folder named  **arduino-version** will be created.

<rk-img
  src="/assets/images/rui3/vs/ls-tarball.png"
  width="100%"
  caption="Arduino install folder created"
/>

4. Change the current directory and go to the newly created folder directory. There will be a file named `install.sh` in the folder. Execute `sudo ./install.sh` to install the Arduino IDE.

<rk-img
  src="/assets/images/rui3/vs/sudo-install.png"
  width="100%"
  caption="Arduino install script running"
/>

The `sudo` command temporarily elevates privileges allowing the installer to complete sensitive tasks without logging in as the root user.

#### For Mac OS X

In Mac OS X, the same as Linux, there is no installation process. It is just a process of decompression, then you can open Arduino IDE successfully.


### Arduino IDE Parts Guide

**Figure 11** shows the five (5) parts of Arduino IDE.

<rk-img
  src="/assets/images/rui3/vs/7.arduino-ide.png"
  width="100%"
  caption="Arduino IDE"
/>

1. **IDE Option Menu**

You can configure some general parameters such as the serial port, the board information, the libraries, the edit parameters, and so on.

2. **Operating Buttons**

The operating buttons have five operations:

  - **Verify/Compile** the source code;
  - **Upload** the compiled code into WisBlock;
  - **Open** a **New** Arduino IDE window or existing application;
  - **Save** the current application.

<rk-img
  src="/assets/images/rui3/vs/8.operating-buttons.png"
  width="35%"
  caption="Operating Buttons"
/>

3. **Code Area**

You can edit the source code, which will be compiled and uploaded into the RAK device later in this area.

4. **State Area**

5. **Output Message Area**
You can see the output message in this area, whether it's failure or success information.

### Software Setup

To develop your custom RUI3 firmware using Arduino IDE, you need first to install RUI3 Board Support Package using the Arduino Boards Manager. Then you can then use [RUI3 Arduino APIs](https://docs.rakwireless.com/RUI3/Arduino-API/) for your intended application.

#### Install RUI3 Board Support Package in Arduino IDE

1. Open Arduino IDE and go to `File -> Preferences`.

<rk-img
  src="/assets/images/rui3/vs/arduino-preferences.png"
  width="100%"
  caption="Arduino IDE Preferences"
/>

2. To add the RUI3 Board Support on Arduino Boards list, edit the Additional Board Manager URLs. Click the icon, as shown below.

<rk-img
  src="/assets/images/rui3/vs/additional-boards.png"
  width="80%"
  caption="Modifying Additional Board Manager URLs"
/>

3. Copy the URL below and paste it on the highlighted field.

```json
https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json
```

If there are other URLs already there, just add them on the next line. After adding the URL, click OK.
<rk-img
  src="/assets/images/rui3/vs/preferences-url.png"
  width="100%"
  caption="Add additional board manager URLs"
/>

4. Restart the Arduino IDE an open the Boards Manager from Tools Menu.

<rk-img
  src="/assets/images/rui3/vs/boards-manager.png"
  width="100%"
  caption=" Opening Arduino Boards Manager"
/>

5. Write `RAK` in the search bar as shown in **Figure 17**. This will show the available RAKwireless module boards that you can add to your Arduino Board list.

<rk-img
  src="/assets/images/rui3/vs/rui3-bsp.png"
  width="80%"
  caption="Installing RUI3 Board Support Package"
/>

6. Now click the area highlighted in blue to choose your preferred board: 

Install RAKWireless RUI nRF Boards.

<rk-img
  src="/assets/images/rui3/vs/rui3-nrf.png"
  width="80%"
  caption="Installing RUI3 nRF Board Support Package"
/>

Install RAKWireless RUI STM32 Boards.

<rk-img
  src="/assets/images/rui3/vs/rui3-stm32.png"
  width="80%"
  caption="Installing RUI3 STM32 Board Support Package"
/>

7. To finish the installation click the **Install** button.

#### Install RUI3 Libraries into Arduino IDE

You can extend the capabilities of Arduino IDE using RUI3 Libraries.

The Arduino Libraries for RUI3 are available at [RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/). To use a RUI3 Library on your project you need to install the Library in the Arduino IDE as shown in the next section.

##### Importing a ZIP Library

This guide shows how to install the [RAK1906 WisBlock Environmental Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Overview/) RUI3 Library on Arduino IDE. 

You can mount the RAK1906 to the WisBlock Base Board by following the [RAK1906 Hardware Setup](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Quickstart/#hardware-setup) guide. Mounting other [WisBlock Sensors](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-sensor) uses a similar procedure.

1. Download [RAK1906 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1906_Environment_BME680.zip) `.zip` file.

2. Launch Arduino IDE, navigate to `Sketch -> Include Library -> Add .ZIP Library...` as shown below.

<rk-img
  src="/assets/images/rui3/vs/lib-include.png"
  width="100%"
  caption="Include RUI3 Library"
/>

3. You will be prompted to select the Library you would like to add. Navigate to the `.zip` file's location and open it.
<rk-img
  src="/assets/images/rui3/vs/lib-zip-folder.png"
  width="70%"
  caption="Select RUI3 ZIP Library"
/>

##### Open and Build RUI3 Library Example

1. Launch Arduino IDE, navigate to File -> Examples -> RAKWireless RAK1906 Environment BME680 -> Example1_BasicReading as shown below.

<rk-img
  src="/assets/images/rui3/vs/rak1906-example.png"
  width="100%"
  caption="Open RUI3 RAK1906 Library Example"
/>

::: tip 📝 NOTE
To view the Arduino Examples, you must select the RUI3 Board under Tools-> Board-> RAKwireless RUI3 board.  
:::

2. Now click `Upload` button to build and flash the sketch.

<rk-img
  src="/assets/images/rui3/vs/rak1906-upload.png"
  width="100%"
  caption="Build RUI3 RAK1906 Library Example"
/>

3. After the build finishes, open Arduino Serial Monitor to check the RAK1906 Example logs.

<rk-img
  src="/assets/images/rui3/vs/rak1906-logs.png"
  width="80%"
  caption="RUI3 RAK1906 Library Example Logs"
/>


#### Build Smart_Farm Monitoring RUI3 Example

This example monitors data from temperature, pressure and humidity sensor over a LoRaWAN network using the [LoRaWAN RUI3](/RUI3/LoRaWAN/) API.

1. Download RUI3 Libraries:

- [RAK1901 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1901_Temperature_and_Humidity_SHTC3.zip).
- [RAK1902 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1902_Pressure_LPS22HB.zip).

2. Install both Libraries on Arduino IDE as described in [Import a ZIP Library](#importing-a-zip-library) section.

3. Launch Arduino IDE, navigate to `File -> Examples -> RAK WisBlock RUI Example -> Application_Scenario -> LoRa -> Smart_Farm` as shown below.

<rk-img
  src="/assets/images/rui3/vs/rui3-smart-example.png"
  width="100%"
  caption="Open RUI3 Smart_Farm Example"
/>

4. The LoRaWAN parameters below must be configured based on the Regional Band, EUIs and APPKEY from the LoRaWAN Network Server device registration. The RUI3 device must be within a working LoRaWAN gateway registered on the same LoRaWAN Network and operating at the same Regional Band as well.

```c
#define SMART_FARM_BAND     (RAK_REGION_EU868)
#define SMART_FARM_DEVEUI   {0x01, 0x02, 0x03, 0x04, 0x05, 0x06, 0x07, 0x88}
#define SMART_FARM_APPEUI   {0x0E, 0x0D, 0x0D, 0x01, 0x0E, 0x01, 0x02, 0x0E}
#define SMART_FARM_APPKEY   {0x2B, 0x7E, 0x15, 0x16, 0x28, 0xAE, 0xD2, 0xA6, 0xAB, 0xF7, 0x15, 0x88, 0x09, 0xCF, 0x4F, 0x3E}
```
It is highly recommended to read the section **LoRaWAN Example**:

- [LoRaWAN Example RAK3172](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#lorawan-example).
- [LoRaWAN Example RAK4631-R](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631-R/Examples/#lorawan-example).


5. Now click `Upload` button to build and flash to sketch.

<rk-img
  src="/assets/images/rui3/vs/rui3-smart-upload.png"
  width="100%"
  caption="Build and upload RUI3 Smart_Farm Example"
/>

6. After the build finishes, open Arduino Serial Monitor to check the Smart_Farm project log messages.

<rk-img
  src="/assets/images/rui3/vs/rui3-smart-log.png"
  width="80%"
  caption="Arduino Serial Monitor RUI3 Smart_Farm Example"
/>


## Visual Studio Code (Arduino Extension)

### Installation of Visual Studio Code

Download and install the official Microsoft's [Visual Studio Code](https://code.visualstudio.com/download).

### Configuring the Visual Studio Code

You can use Visual Studio Code by installing the Arduino Extension. The Arduino Extension makes it easy to develop, build, and deploy your Arduino sketches in Visual Studio Code. 

1. Launch Visual Studio Code and select the **Extensions** view by clicking on the Extensions icon.

<rk-img
  src="/assets/images/rui3/vscode/ext-view.png"
  width="100%"
  caption="Visual Studio Code selecting the Extensions view"
/>

2. The **Extensions** available are shown on the left side. On the **Extensions** text area, type **Arduino**, then click the **Arduino for Visual Studio Code** icon as shown in **Figure 29**.

<rk-img
  src="/assets/images/rui3/vscode/ext-arduino.png"
  width="100%"
  caption="Arduino for Visual Studio Code Extension (Microsoft)"
/>

3. Then click the **Install** button.

<rk-img
  src="/assets/images/rui3/vscode/ext-install.png"
  width="100%"
  caption="Installing Arduino for Visual Studio Code Extension"
/>

4. To build the RUI3 examples, install the **Microsoft C/C++ Extensions Pack**. On the **Extensions** text area, type and select **C/C++ Extension Pack**, as shown in **Figure 31**. To finish, click the **Install** button.

<rk-img
  src="/assets/images/rui3/vscode/c-ext-pack.png"
  width="100%"
  caption="Installing Microsoft C/C++ Extension"
/>

5. Now install the RAK BSP. Click  **Manage** -> **Settings**.

<rk-img
  src="/assets/images/rui3/vscode/manage-settings.png"
  width="100%"
  caption="Configure Visual Studio Code manage settings"
/>

6. On the Extensions,  click **Arduino Configuration** then select **Add Item**.

<rk-img
  src="/assets/images/rui3/vscode/arduino-config.png"
  width="100%"
  caption="Configuring Arduino Visual Studio Code Extension"
/>

7. Add the Arduino BSP json to the Additional URLs.

```
https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json
```

<rk-img
  src="/assets/images/rui3/vscode/add-item.png"
  width="100%"
  caption="Arduino configuration Additional Urls"
/>

8. Now configure the **Board Manager** for your Arduino RUI3 project using the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Then type **Arduino: Board Manager** on the text area or choose from the list.

<rk-img
  src="/assets/images/rui3/vscode/board-manager.png"
  width="100%"
  caption="Arduino Board Manager"
/>

9. On the **Arduino Board Manager**, type **RAK** in the text box area. Install the **RUI3 BSP** for your preferred RAK device by clicking on the **Install** button.

<rk-img
  src="/assets/images/rui3/vscode/rak-board-manager.png"
  width="100%"
  caption="Configuring RAK boards on Arduino Board Manager"
/>

10. In some cases, it is possible to select the version to be installed, as shown in **Figure 37**.

<rk-img
  src="/assets/images/rui3/vscode/rak4631-version.png"
  width="100%"
  caption="Configuring Arduino Board Manager on Visual Studio Code"
/>


11. If you want to change later your selected board and configure its specific settings, click the highlighted area shown in **Figure 38**.

<rk-img
  src="/assets/images/rui3/vscode/board-manager-update.png"
  width="100%"
  caption="Modifying the Arduino Board Manager on Visual Studio Code"
/>

12. To configure the serial port, connect your RAK device to the computer's USB port. Use the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Then type  **Arduino: Select Serial Port** on text area.

<rk-img
  src="/assets/images/rui3/vscode/serial-shortcut.png"
  width="100%"
  caption="Select the Serial Port using extension configuration"
/>

Alternatively, you can configure the serial port by clicking the COM port, as shown in the highlighted part of **Figure 40**.

<rk-img
  src="/assets/images/rui3/vscode/select-port.png"
  width="100%"
  caption="Selecting the Serial Port on Visual Studio Code"
/>

##### Building the First Sketch

1. Once the BSP is installed, open the **ARDUINO EXAMPLES** using the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Then type **Arduino: Examples**.

<rk-img
  src="/assets/images/rui3/vscode/arduino-examples.png"
  width="100%"
  caption="Open Arduino Examples"
/>

2. Choose **Arduino_Led_Breathing** as the first example.

<rk-img
  src="/assets/images/rui3/vscode/led-example.png"
  width="100%"
  caption="Open Arduino Led Breathing"
/>

2. **Figure 43** shows the two commonly used options for Arduino Visual Studio Code development: **Upload** and **Verify**. The icon highlighted in yellow is the **Arduino Upload** button, and the other one, in blue, is the **Arduino Verify** option.

<rk-img
  src="/assets/images/rui3/vscode/build-icons.png"
  width="100%"
  caption="Build Icons on Arduino"
/>

### Visual Studio Code Tips and Tricks

#### Command Palette

The F1 key or keyboard shortcut `<CTRL><SHIFT><P>` brings up the **Command Palette**. From **Command Palette**, you have access to all of the functionality of Visual Studio Code.


#### PlatformIO (PIO) Extension disable

If you have PIO (PlatformIO) extension installed, you need to disable it for the workspace in use. The two extensions have conflicts with each other. 

Select **Extensions** icon and type **PlatformIO** on the text area. Now click the gear icon on PlatformIO, then select the **Disable (Workspace)** option, as shown in **Figure 44**.

<rk-img
  src="/assets/images/rui3/vscode/pio-disable.png"
  width="100%"
  caption="Disabling PIO on Visual Studio Code Workspace"
/>

#### PlatformIO (PIO) Extension Shortcut Conflict
 
Both PlatformIO and Arduino extension in Visual Studio Code use the same keyboard shortcut `<CTRL><ALT><U>` to compile and upload the code. You can change the Arduino Upload shortcut as follows:

1. Use the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Type **Arduino: Upload** on text area, then click the **gear** icon. 

<rk-img
  src="/assets/images/rui3/vscode/upload-shortcut.png"
  width="100%"
  caption="Open Arduino Upload shortcut"
/>

2. Click the **Open** icon, as shown in **Figure 46**.

<rk-img
  src="/assets/images/rui3/vscode/arduino-shortcut.png"
  width="100%"
  caption="Edit Arduino Upload shortcut"
/>

3. Type the new upload shortcut `<CTRL><ALT><F>`, for example, then type `<ENTER>` to finish.

<rk-img
  src="/assets/images/rui3/vscode/change-shortcut.png"
  width="100%"
  caption="Save new Arduino Upload shortcut"
/>

#### Faster Build Configuration

For your sketch to compile faster, edit the `arduino.json` file in the folder `.vscode` of your sketch, then set the path to the `build` folder. Now the Visual Studio Code will compile only the changed files and not the whole source code.

```json
"output" : "build"
```

<rk-img
  src="/assets/images/rui3/vscode/arduino-json.png"
  width="100%"
  caption="Configuring arduino.json file"
/>

Check the new **build** folder on Visual Studio Code Explorer.

<rk-img
  src="/assets/images/rui3/vscode/build-folder.png"
  width="100%"
  caption="Arduino sketch build folder"
/>


### Developing a RUI3 Library Project using Visual Studio Code IDE

#### Prerequisite

1. Download [RAK1906](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1901_Temperature_and_Humidity_SHTC3.zip) RUI3 Library.

2. Make sure the sensor is mounted as described in the [RAK1906 Hardware Setup section](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Quickstart/#hardware-setup).


#### Software Configuration

1. Install the Library on Arduino IDE as described in [Import a ZIP Library](#importing-a-zip-library) section.


2. Launch Arduino IDE, navigate to `Sketch -> Include Library -> Add .ZIP Library...` as shown below.

<rk-img
  src="/assets/images/rui3/vscode/lib-include.png"
  width="100%"
  caption="Include RUI3 Library"
/>


3. You will be prompted to select the Library you would like to add. Navigate to the `.zip` file's location and open it.
<rk-img
  src="/assets/images/rui3/vscode/lib-zip-folder.png"
  width="70%"
  caption="Select RUI3 ZIP file"
/>

The RUI3 Library will be installed into your Arduino Sketchbook's `libraries` folder.<br>
You can view your Sketchbook folder by opening Arduino IDE and navigating to `File -> Preferences` as shown below.
<rk-img
  src="/assets/images/rui3/vscode/sketchbook-folder.png"
  width="70%"
  caption="SketchBook Location"
/>

4. Now launch Visual Studio Code and open Arduino Sketchbook folder by navigating to `File -> Open Folder...`.

Select the Arduino `libraries` folder you'd like to open in the IDE. It should be the library's top-level directory, where `src` and `examples` directories are contained. To complete the installation click the **Select Folder** button.

<rk-img
  src="/assets/images/rui3/vscode/open-folder.png"
  width="70%"
  caption="Arduino Library Sketch folder"
/>

5. Open the **RAKwireless_RAK1906_Environment_BME680** project using the Command Palette by typing `<CTRL><SHIFT>P` or **F1** key.<br> Then type `Arduino: Examples`. 

<rk-img
  src="/assets/images/rui3/vscode/vscode-example.png"
  width="100%"
  caption="Select Arduino Custom Library Example"
/>

Select the `Examples from Custom Library` folder.

<rk-img
  src="/assets/images/rui3/vscode/bme680-project.png"
  width="100%"
  caption="Open Arduino Custom Library Example"
/>

6. Inside `Examples from Custom Library` folder, select the project `RAKwireless_RAK1906_Environment_BME680` by clicking on
 `Example1_BasicReading` icon.<br>A new Visual Studio Code window will open.

<rk-img
  src="/assets/images/rui3/vscode/bme680-open.png"
  width="100%"
  caption="Open Arduino Custom Library Example"
/>

Connect your RUI3 board to USB port.


7. Click `<Select Board Type>` and `<Select Serial Port>` to configure the project.
<rk-img
  src="/assets/images/rui3/vscode/vs-project-config.png"
  width="100%"
  caption="Configure RAKwireless_RAK1906_Environment_BME680 project"
/>

8. Click `Upload` icon to build and flash the firmware.

<rk-img
  src="/assets/images/rui3/vscode/vs-ino-build.png"
  width="100%"
  caption="Build RAKwireless_RAK1906_Environment_BME680 project"
/>

::: tip 📝 NOTE
Don't forget to add [Faster Build Configuration](#faster-build-configuration) to `RAKwireless_RAK1906_Environment_BME680` project.   
:::

### Build Smart_Farm Monitoring RUI3 Example on Visual Studio Code IDE

This example monitors data from temperature, pressure and humidity sensor over a LoRaWAN network using the [LoRaWAN RUI3](/RUI3/LoRaWAN/) API.


#### Prerequisite

The RUI3 device is a LoRaWAN end-device that needs to be within range of a LoRaWAN gateway. The gateway needs to be registered to a LoRaWAN network server(LNS) or with a built-in network server.
It is highly recommended to read the section **LoRaWAN Example**:

- [LoRaWAN Example RAK3172](https://docs.rakwireless.com/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#lorawan-example)
- [LoRaWAN Example RAK4631-R](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK4631-R/Examples/#lorawan-example)

Make sure the sensors are mounted as described in the **Hardware Setup** section of the Quick Start Guides.

- [RAK1901 Hardware Setup](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1901/Quickstart/#hardware-setup)
- [RAK1902 Hardware Setup](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1902/Quickstart/#hardware-setup)

#### Software Configuration

1. Download RUI3 Libraries:

- [RAK1901 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1901_Temperature_and_Humidity_SHTC3.zip)
- [RAK1902 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1902_Pressure_LPS22HB.zip)


2. Install both Libraries on Arduino IDE as described in [Import a ZIP Library](#importing-a-zip-library) section.


3. Open the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Then type **Arduino: Board Config** on the text area or choose from the list.

<rk-img
  src="/assets/images/rui3/vscode/vscode-bc.png"
  width="100%"
  caption="Arduino Visual Studio IDE Board Configuration"
/>

On **Arduino Board Configuration** window, click the highlighted icon to select your RUI3 board:<br>
RAK4631
<rk-img
  src="/assets/images/rui3/vscode/bc-rak4631.png"
  width="100%"
  caption="Arduino Board Configuration RAK4631"
/>

RAK3172
<rk-img
  src="/assets/images/rui3/vscode/bc-rak3172.png"
  width="100%"
  caption="Arduino Board Configuration RAK3172"
/>

RAK3272-SIP
<rk-img
  src="/assets/images/rui3/vscode/bc-rak3272-sip.png"
  width="100%"
  caption="Arduino Board Configuration RAK3172-SIP"
/>

4. Open the **Command Palette** again by typing `<CTRL><SHIFT>P` or F1 key. Then type `Arduino:Examples` on the text area or choose from the list. 

<rk-img
  src="/assets/images/rui3/vscode/vscode-examples.png"
  width="100%"
  caption="Open Arduino Examples"
/>

5. Now check the `RUI_V3_examples` folder of your RUI3 hardware. Click `Smart_Farm` icon and a new Visual Studio Code window will open.

<rk-img
  src="/assets/images/rui3/vscode/smart-vscode-rak4631.png"
  width="100%"
  caption="RUI3 RAK4631 Examples"
/>

Connect your RUI3 board to USB.

6. Check the `Select Serial Port` icon to configure the Serial Port of the project.

<rk-img
  src="/assets/images/rui3/vscode/smart-example-vscode.png"
  width="100%"
  caption="Smart_Farm Example configure Serial Port"
/>

6. Click **Upload** icon to flash the `Smart_Farm` example on RUI3 hardware.

<rk-img
  src="/assets/images/rui3/vscode/ino-upload.png"
  width="100%"
  caption="Upload Smart_Farm Example"
/>
::: tip 📝 NOTE
Don't forget to add [Faster Build Configuration](#faster-build-configuration) to `Smart_Farm` project.   
:::


## Visual Studio IDE

### Visual Studio IDE Download and Installation

If you don't have Visual Studio IDE yet, download the installer on [Visual Studio IDE Community 2019](https://docs.microsoft.com/en-us/visualstudio/releases/2019/release-notes), as shown in **Figure 67**.


<rk-img
  src="/assets/images/rui3/vs/vs2019-release-notes.png"
  width="100%"
  caption="Visual Studio Community 2019 Release Notes"
/>

#### Windows Setup

1. Install the Visual Studio Community 2019, which you just downloaded, on your Windows PC. Then click the **Continue** button.

<rk-img
  src="/assets/images/rui3/vs/install-license.png"
  width="50%"
  caption="Visual Studio Community License"
/>

2. On the next installer window, select the **Desktop development with C++** tab, then click the **Install** button.

<rk-img
  src="/assets/images/rui3/vs/install-desktop.png"
  width="100%"
  caption="Visual Studio Community 2019 desktop development with C++"
/>

<rk-img
  src="/assets/images/rui3/vs/installer-download.png"
  width="100%"
  caption="Visual Studio Community 2019 installer"
/>

3. A reboot is required after the successful installation. Restart your computer first before you start using Visual Studio.

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/installer-reboot.png"
  width="50%"
  caption="Visual Studio Community 2019 successful installation"
/>

4. After restarting your computer, download the [Arduino IDE for Visual Studio 2019](https://www.visualmicro.com/page/Arduino-Visual-Studio-Downloads.aspx).

   - Alternative link: [Arduino IDE for Visual Studio 2019](https://1drv.ms/u/s!AsT00oFsGAmRoO4JVG47LeCEaM5-cQ?e=IZ9bnD)

<rk-img
  src="/assets/images/wisblock/rak4631-r/quickstart/arduino-vs-2019.png"
  width="90%"
  caption="Arduino IDE for Visual Studio"
/>

5. Click the **Install** button to install the **Arduino IDE VSIX** extension.

<rk-img
  src="/assets/images/rui3/vs/vsix-install.png"
  width="50%"
  caption="Arduino IDE VSIX extension install"
/>

- Arduino IDE VSIX installation completed.

<rk-img
  src="/assets/images/rui3/vs/vsix-install-complete.png"
  width="50%"
  caption="Arduino IDE VSIX extension successfully installed"
/>

#### Configuring Visual Studio Community 2019

1. Open **Visual Studio 2019**, then click **Continue without code**.

<rk-img
  src="/assets/images/rui3/vs/vs-open.png"
  width="100%"
  caption="Open Visual Studio Community 2019 App"
/>

<rk-img
  src="/assets/images/rui3/vs/vs-initial.png"
  width="100%"
  caption="Visual Studio Community 2019"
/>


2. In the Menu tab, click **Extensions**, and select **vMicro** -> **Visual Micro Explorer**.


<rk-img
  src="/assets/images/rui3/vs/vs-micro-explorer.png"
  width="100%"
  caption="Visual Studio Community 2019 Micro Explorer configuration"
/>

3. A **Micro Explorer** window appears. Under the IDE tab, select IDE **Arduino 1.6/1.8**, then click the **IDE Locations** to open the IDE Locations window.

<rk-img
  src="/assets/images/rui3/vs/micro-explorer-window.png"
  width="100%"
  caption="Visual Studio Community 2019 Micro Explorer configuration"
/>

4. After that, execute the following to configure the IDE Locations:

- On the **Use installed IDE** field, select **Arduino 1.6/1.8**.
- Check if the Arduino IDE is already installed on folder `C:\Program Files (x86)\Arduino`.
- Copy the RUI URL below, and paste it on **Optional addition boards manager urls**.

```json
https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json
```

<rk-img
  src="/assets/images/rui3/vs/ide-locations.png"
  width="70%"
  caption="Visual Studio Community 2019 IDE Locations configuration"
/>

5. Restart the Visual Studio IDE to finish the Extension configuration.

- Open the **Visual Micro Explorer** on the **Extensions** -> **vMicro** -> **Visual Micro Explorer**.
- Click the **Board Manager** tab, then type **RAK** in the text area. The Micro Explorer screen shows all RAK platforms installed and available for installation. If there is any update, it will also be displayed.

<rk-img
  src="/assets/images/rui3/vs/rak-micro-explorer.png"
  width="70%"
  caption="Visual Micro Explorer RAKwireless platform"
/>

6. You can also install RAKwireless RUI Boards using the Arduino Boards Manager. The **Visual Studio IDE 2019** imports Arduino IDE settings. 

- Launch Arduino IDE and select **Tools** -> **Board Manager**.
<rk-img
  src="/assets/images/rui3/vs/arduino-tools.png"
  width="100%"
  caption="Arduino Tool Board Manager"
/>

- On the **Board Manager** window text area, type **RAK** and select your preferred RUI3 hardware.

<rk-img
  src="/assets/images/rui3/vs/rak-board-manager.png"
  width="90%"
  caption="Arduino RAKwireless Board Manager"
/>

Now click the area highlighted in blue to choose your preferred board: 

Install RAKWireless RUI nRF Boards.

<rk-img
  src="/assets/images/rui3/vs/rui3-nrf.png"
  width="90%"
  caption="Installing RUI3 nRF Board Support Package"
/>

Install RAKWireless RUI STM32 Boards.

<rk-img
  src="/assets/images/rui3/vs/rui3-stm32.png"
  width="90%"
  caption="Installing RUI3 STM32 Board Support Package"
/>

7. To finish the installation click the **Install** button.

::: tip 📝 NOTE   
If the examples do not appear on the Micro Explorer window, then you need to restart Visual Studio IDE.
:::

### Compile an Example with RAK4631-R

1. Launch Visual Studio IDE and select **Extensions** -> **VMicro**. Click the Dropdown icon, then scroll and select **WisBlock Core RAK4631**.

<rk-img
  src="/assets/images/rui3/vs/rak-nrf.png"
  width="100%"
  caption="Arduino RAKwireless nRF"
/>

2. Create a new project for RAK4631 by clicking on **File** -> **New Arduino Project**.

<rk-img
  src="/assets/images/rui3/vs/new-project.png"
  width="100%"
  caption="Creating a New Arduino project"
/>

3. Open the **Visual Micro Explorer** window,  by navigating to **Extensions** -> **VMicro** -> **Visual Micro Explorer**.

<rk-img
  src="/assets/images/rui3/vs/vs-micro-explorer.png"
  width="100%"
  caption="Micro Explorer window"
/>


4. On the **Micro Explorer** window, click the **Examples** tab and search **RAK4631** on the **RUI _V3_Examples** folder. Now click **RAK4631** to open the project.

<rk-img
  src="/assets/images/rui3/vs/rak4631-example.png"
  width="100%"
  caption="Micro Explorer RAK4631 example"
/>

5. Click the **Open Copy** button,

<rk-img
  src="/assets/images/rui3/vs/rak4631-open-copy.png"
  width="100%"
  caption="Visual Micro - Help and Examples"
/>


6. Configure **Solution**, **Platform**, and **Serial Port** of the project. Click the dropdown and choose the following:

- Solution Configuration field: **Release**
- Solution Platforms field: **x86**
- Serial Port field: Choose the RAK4631-R COM port detected in the **Windows Device Manager**.

<rk-img
  src="/assets/images/rui3/vs/vs-ino-config.png"
  width="100%"
  caption="RAK4631.ino file"
/>

7. Click the **Build and Upload** icon to flash the project on RAK4631-R.

<rk-img
  src="/assets/images/rui3/vs/vs-build-upload.png"
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
  src="/assets/images/rui3/vs/vs-console.png"
  width="60%"
  caption="UART console output"
/>

### Compile an Example with RAK3172


1. Launch Visual Studio IDE and select **Extensions** -> **VMicro**. Click the dropdown icon, then scroll and select **WisDuo RAK3172 Evaluation Board**.

<rk-img
  src="/assets/images/rui3/vs/rak-stm32.png"
  width="100%"
  caption="Arduino RAKwireless STM32"
/>

2. Create a new project for RAK3172 by clicking on **File** -> **New Arduino Project**.

<rk-img
  src="/assets/images/rui3/vs/new-project.png"
  width="100%"
  caption="Creating a New Arduino project"
/>

3. Open the **Visual Micro Explorer** window, by navigating to **Extensions** -> **VMicro** -> **Visual Micro Explorer**

<rk-img
  src="/assets/images/rui3/vs/vs-micro-explorer.png"
  width="100%"
  caption="Micro Explorer window"
/>

4. On the Micro Explorer window, click the **Examples** tab and search for **RAK3172** on the **RUI _V3_Examples** folder. Now click **RAK3172-E** to open the project.


<rk-img
  src="/assets/images/rui3/vs/micro-exp-rak3172.png"
  width="100%"
  caption="Micro Explorer RAK3172 example"
/>

5. Click the **Open Copy** button.

<rk-img
  src="/assets/images/rui3/vs/rak3172-open-copy.png"
  width="100%"
  caption="Visual Micro - Help and Examples"
/>

6. Configure **Solution**, **Platform**, and **Serial Port** of the project. Click the dropdown and choose the following:

- Solution Configuration field: **Release**
- Solution Platforms field: **x86**
- Serial Port field: Choose the RAK3172 COM port detected in the **Windows Device Manager**.

<rk-img
  src="/assets/images/rui3/vs/rak3172-project.png"
  width="100%"
  caption="RAK3172.ino file"
/>

7. Click the **Build and Upload** icon to flash the project on RAK3172.

<rk-img
  src="/assets/images/rui3/vs/rak3172-upload.png"
  width="100%"
  caption="Build and upload the RAK3172 project"
/>

### Developing a RUI3 Library Project using Visual Studio IDE

This guide shows how to install the [RAK1906 WisBlock Environmental Sensor](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Overview/) RUI3 Library on Visual Studio IDE.

You can mount the RAK1906 to the WisBlock Base Board by following the [RAK1906 Hardware Setup](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Quickstart/#hardware-setup) guide. Mounting other [WisBlock Sensors](https://docs.rakwireless.com/Product-Categories/WisBlock/#wisblock-sensor) uses a similar procedure.

#### Prerequisite

- Import [RAK1906 ZIP library](#importing-a-zip-library) on Arduino IDE.

- Make sure the sensor is mounted as described in the [RAK1906 Hardware Setup section](https://docs.rakwireless.com/Product-Categories/WisBlock/RAK1906/Quickstart/#hardware-setup).

#### Software Configuration

1. Download [RAK1906 RUI3 Library](https://downloads.rakwireless.com/RUI/RUI3/Library/RAKwireless_RAK1906_Environment_BME680.zip) `.zip` file.

2. Launch Arduino IDE, navigate to `Sketch -> Include Library -> Add .ZIP Library...` as shown below.

<rk-img
  src="/assets/images/rui3/vs/lib-include.png"
  width="100%"
  caption="Include RUI3 Library"
/>

3. You will be prompted to select the Library you would like to add. Navigate to the `.zip` file's location and open it.
<rk-img
  src="/assets/images/rui3/vs/lib-zip-folder.png"
  width="80%"
  caption="Select RUI3 ZIP file"
/>

The RUI3 Library will be installed into your Arduino Sketchbook's `libraries` folder.<br>
You can view your Sketchbook folder by opening Arduino IDE and navigating to `File -> Preferences` as shown below.

<rk-img
  src="/assets/images/rui3/vs/sketchbook-folder.png"
  width="80%"
  caption="SketchBook Location"
/>

#### Build and Configure Visual Studio RUI3 Library project

1. Connect your RUI3 board to USB port to configure the RUI3 project.

2. Launch Visual Studio IDE then open **Visual Micro Explorer** by navigating to `Extensions -> vMicro -> Board`. Click arrow down icon if you want to change the `Board Configuration`.

Select RAK3172 Evaluation Board:

<rk-img
  src="/assets/images/rui3/vs/vs-rak3172.png"
  width="100%"
  caption="Selecting RAK3172 Evaluation Board"
/>

Select RAK4631 Board:
<rk-img
  src="/assets/images/rui3/vs/vs-rak4631.png"
  width="100%"
  caption="Selecting RAK4631 Board"
/>


2. Relaunch Visual Studio IDE then open `Visual Micro Explorer` by navigating to `Extensions -> vMicro -> Visual Micro Explorer`.

<rk-img
  src="/assets/images/rui3/vs/vm-explorer.png"
  width="100%"
  caption="Open Visual Micro Explorer"
/>

3. On the Micro Explorer window, click the **Examples** tab.

<rk-img
  src="/assets/images/rui3/vs/vs-examples.png"
  width="100%"
  caption="Visual Micro Explorer Examples"
/>


4. The RUI3 examples can be located on folder `Library Examples`. Click  `Example1_BasicReading` to open the project on Visual Studio IDE.
<rk-img
  src="/assets/images/rui3/vs/vs-rui3-example.png"
  width="100%"
  caption="RAKWireless Library Examples"
/>

::: tip 📝 NOTE   
If the examples do not appear on the Micro Explorer window, then you need to restart Visual Studio IDE.
:::

5. Click **Open Copy** button to open RUI3 Library project on Visual Studio IDE.
<rk-img
  src="/assets/images/rui3/vs/vs-open-copy.png"
  width="100%"
  caption="RUI3 Library Open Copy project"
/>

6. Don't forget to configure the Serial Port.
<rk-img
  src="/assets/images/rui3/vs/vs-serial-port.png"
  width="100%"
  caption="RUI3 Library configure Serial Port"
/>

7. To flash the project on target board, click the `Build and Upload` icon. 

<rk-img
  src="/assets/images/rui3/vs/vs-build-rui3.png"
  width="100%"
  caption="RUI3 Library Build project"
/>



#### Build and Configure Visual Studio Smart_Farm project

1. First install the [Smart_Farm](#build-smart-farm-monitoring-rui3-example) Project on Arduino IDE. The **Arduino IDE VSIX** extension will inherit the Arduino examples.


2. Launch Visual Studio IDE and select `Extensions -> VMicro`.<br> 
Navigate to `Board` option, then click dropdown icon and select your favorite RUI3 board.<br> 
Also configure the Serial Port by typing on `Port or IP` text area or click the dropdown icon as shown below.

<rk-img
  src="/assets/images/rui3/vs/vs-explorer.png"
  width="100%"
  caption="Configure RUI3 Project using Visual Micro Explorer"
/>

Relaunch Visual Studio IDE to update **Visual Micro Explorer** configuration.
 
3. Open **Visual Micro Explorer** by navigating to `Extensions -> vMicro -> Visual Micro Explorer` then click the `Examples` tab.

<rk-img
  src="/assets/images/rui3/vs/vs-examples-tab.png"
  width="100%"
  caption="Visual Micro Explorer Examples"
/>


4. Navigate to `RUI3_V3_examples` folder then click `Smart_Farm`as shown below.

<rk-img
  src="/assets/images/rui3/vs/vs-smart.png"
  width="100%"
  caption="Visual Micro Explorer Smart_Farm Example"
/>


5. Click **Open Copy** button to open `Smart_Farm` project on Visual Studio IDE.
<rk-img
  src="/assets/images/rui3/vs/smart-open-copy.png"
  width="100%"
  caption="Open Smart_Farm Example on Visual Studio IDE"
/>


6. The `Smart_Farm` project can be located on `Solution Explorer` window.<br> 
Close `Micro Explorer` window and then click `Smart_Farm.ino`

<rk-img
  src="/assets/images/rui3/vs/sol-smart.png"
  width="100%"
  caption="Visual Studio IDE Solution Explorer"
/>


7. Click the `Build and Upload` icon to flash the project on RUI3 board.

<rk-img
  src="/assets/images/rui3/vs/smart-build.png"
  width="100%"
  caption="Build and Upload Smart_Farm project"
/>

8. After the build finishes, check the `Output` window.

<rk-img
  src="/assets/images/rui3/vs/smart-build-ok.png"
  width="100%"
  caption="Successful build Smart_Farm project"
/>


::: tip 📝 NOTE   
If you can't find the Smart_Farm project on the Micro Explorer window, then try to restart Visual Studio IDE.
:::
