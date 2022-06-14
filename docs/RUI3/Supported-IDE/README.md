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
  width="100%"
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
  width="90%"
  caption="Check the download folder"
/>


2. A tarball is a type of compressed folder, like a `.zip` file, commonly used to distribute software in Linux. To extract the files from the tarball, change the directory to where the downloaded tarball is, then run the following command:

```
tar xvf arduino-version.xz
```

<rk-img
  src="/assets/images/rui3/vs/tar-linux.png"
  width="90%"
  caption="Tarball extract command"
/>

3. When the tar command is finished, run `ls` again. A folder named  **arduino-version** will be created.

<rk-img
  src="/assets/images/rui3/vs/ls-tarball.png"
  width="90%"
  caption="Arduino install folder created"
/>

4. Change the current directory and go to the newly created folder directory. There will be a file named `install.sh` in the folder. Execute `sudo ./install.sh` to install the Arduino IDE.

<rk-img
  src="/assets/images/rui3/vs/sudo-install.png"
  width="90%"
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

2. The **Extensions** available are shown on the left side. On the **Extensions** text area, type **Arduino**, then click on the **Arduino for Visual Studio Code** icon as shown in **Figure 14**.

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

4. To build the RUI3 examples, install the **Microsoft C/C++ Extensions Pack**. On the **Extensions** text area, type and select **C/C++ Extension Pack**, as shown in **Figure 16**. To finish, click the **Install** button.

<rk-img
  src="/assets/images/rui3/vscode/c-ext-pack.png"
  width="100%"
  caption="Installing Microsoft C/C++ Extension"
/>

5. Now install the RAK BSP. Click on **Manage** -> **Settings**.

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

10. In some cases, it is possible to select the version to be installed, as shown in **Figure 22**.

<rk-img
  src="/assets/images/rui3/vscode/rak4631-version.png"
  width="100%"
  caption="Configuring Arduino Board Manager on Visual Studio Code"
/>


11. If you want to change later your selected board and configure its specific settings, click the highlighted area shown in **Figure 23**.

<rk-img
  src="/assets/images/rui3//vscode/board-manager-update.png"
  width="100%"
  caption="Modifying the Arduino Board Manager on Visual Studio Code"
/>

12. To configure the serial port, connect your RAK device to the computer's USB port. Use the [**Command Palette**](/RUI3/VSCode/#command-palette) by typing `<CTRL><SHIFT>P` or **F1 key**. Then type  **Arduino: Select Serial Port** on text area.

<rk-img
  src="/assets/images/rui3/vscode/serial-shortcut.png"
  width="100%"
  caption="Select the Serial Port using extension configuration"
/>

Alternatively, you can configure the serial port by clicking the COM port, as shown in the highlighted part of **Figure 25**.

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

2. **Figure 28** shows the two commonly used options for Arduino Visual Studio Code development: **Upload** and **Verify**. The icon highlighted in yellow is the **Arduino Upload** button, and the other one, in blue, is the **Arduino Verify** option.

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

Select **Extensions** icon and type **PlatformIO** on the text area. Now click on the gear icon on PlatformIO, then select the **Disable (Workspace)** option, as shown in **Figure 29**.

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

2. Click the **pen** icon, as shown in **Figure 31**.

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

For your sketch to compile faster, edit the `arduino.json` file in the `.vscode` folder of your sketch, then set the path to the `build` folder. Now the Visual Studio Code will compile only the changed files and not the whole source code.

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


## Visual Studio IDE

### Programming RAK4631-R via Visual Studio IDE

#### Visual Studio IDE Download and Installation

If you don't have Visual Studio IDE yet, download the installer on [Visual Studio IDE Community 2019](https://docs.microsoft.com/en-us/visualstudio/releases/2019/release-notes), as shown in **Figure 35**.


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
  width="100%"
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

3. A **Micro Explorer** window appears. Under the IDE tab, select IDE **Arduino 1.6/1.8**, then click on the **IDE Locations** to open the IDE Locations window.

<rk-img
  src="/assets/images/rui3/vs/micro-explorer-window.png"
  width="100%"
  caption="Visual Studio Community 2019 Micro Explorer configuration"
/>

4. After that, execute the following to configure the IDE Locations:

- On the **Use installed IDE** field, select **Arduino 1.6/1.8**.
- Check if the Arduino IDE is already installed on folder `C:\Program Files (x86)\Arduino`.
- Copy the RUI URL below, and paste it on **Optional addition boards manager urls**.

```
https://raw.githubusercontent.com/RAKWireless/RAKwireless-Arduino-BSP-Index/main/package_rakwireless.com_rui_index.json
```

<rk-img
  src="/assets/images/rui3/vs/ide-locations.png"
  width="70%"
  caption="Visual Studio Community 2019 IDE Locations configuration"
/>

5. Restart the Visual Studio IDE to finish the Extension configuration.

- Open the **Visual Micro Explorer** on the **Extensions** -> **vMicro** -> **Visual Micro Explorer**.
- Click on the **Board Manager** tab, then type **RAK** in the text area. The Micro Explorer screen shows all RAK platforms installed and available for installation. If there is any update, it will also be displayed.

<rk-img
  src="/assets/images/rui3/vs/rak-micro-explorer.png"
  width="70%"
  caption="Visual Micro Explorer RAKwireless platform"
/>

6. You can also install RAKwireless RUI Boards using the Arduino Boards Manager. The **Visual Studio IDE 2019** imports Arduino IDE settings. 

- Launch Arduino IDE and select **Tools** -> **Board Manager**.
<rk-img
  src="/assets/images/rui3/vs/arduino-tools.png"
  width="90%"
  caption="Arduino Tool Board Manager"
/>

- On the **Board Manager** window text area, type **RAK** and select your preferred RUI3 hardware.

<rk-img
  src="/assets/images/rui3/vs/rak-board-manager.png"
  width="90%"
  caption="Arduino RAKwireless Board Manager"
/>

::: tip 📝 NOTE   
If the examples do not appear on the Micro Explorer window, then you need to restart Visual Studio IDE.
:::

#### Compile an Example with RAK4631-R

1. Launch Visual Studio IDE and select **Extensions** -> **VMicro**. Click on the Dropdown icon, then scroll and select **WisBlock Core RAK4631**.

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

3. Open the **Visual Micro Explorer** window, then select **Extensions** -> **VMicro** -> **Visual Micro Explorer**.

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

<!--

4. Now, close the **Micro Explorer** window and open the Arduino sketch on the **Solution Explorer** window:
- Click on the **x** icon to close `Micro Explorer`. 
- Click on the **triangle** icon to open `Solution Explorer`.

<rk-img
  src="/assets/images/rui3/vs/vs-open-sketch.png"
  width="100%"
  caption="RAK4631 Solution Explorer"
/>

5. In the Solution Explorer, under RAK4631, click the `RAK4631.ino` file.

<rk-img
  src="/assets/images/rui3/vs/vs-ino.png"
  width="100%"
  caption="Opening the RAK4631.ino file"
/>
-->

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

#### Compile an Example with RAK3172


1. Launch Visual Studio IDE and select **Extensions** -> **VMicro**. Click on the Dropdown icon, then scroll and select **WisDuo RAK3172 Evaluation Board**.

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

3. Open the **Visual Micro Explorer** window, the click **Extensions** -> **VMicro** -> **Visual Micro Explorer**

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