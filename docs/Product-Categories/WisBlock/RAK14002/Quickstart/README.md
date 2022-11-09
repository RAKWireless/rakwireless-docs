---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK14002. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak14002/overview/RAK14002_buy.png
tags:
  - quickstart
  - wisblock
  - RAK14002
prev: ../Overview/
next: ../Datasheet/
---

# RAK14002 Quick Start Guide

## Prerequisite

### What Do You Need?

Before going through each and every step on using RAK14002 WisBlock Touch Sensor module, make sure to prepare the necessary items listed below:

#### Hardware

- [RAK14002 WisBlock 3-channel Touchpad Module](https://store.rakwireless.com/products/3-channel-touch-pad-module-rak14002?utm_source=RAK14002&utm_medium=Document&utm_campaign=BuyFromStore)
- Your choice of [WisBlock Base](https://store.rakwireless.com/collections/wisblock-base)
- Your choice of [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core)
- USB Cable
- [Li-Ion/LiPo battery (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/battery-connector-cable?utm_source=BatteryConnector&utm_medium=Document&utm_campaign=BuyFromStore)
- [Solar charger (optional)](https://store.rakwireless.com/collections/wisblock-accessory/products/solar-panel-connector-cable?utm_source=SolarPanelConnector&utm_medium=Document&utm_campaign=BuyFromStore)

#### Software

- Download and install [ArduinoIDE](https://www.arduino.cc/en/Main/Software).
- To add the RAKwireless Core boards to your Arduino project, install the RAKwireless Arduino BSP. Follow the steps in the [GitHub repo](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

## Product Configuration

### Hardware Setup

RAK14002 module is part of the WisBlock Interface category and extends the WisBlock system with a  3-channel Capacitive Touch Sensor. The RAK14002 connects to the WisBlock Base Board through the IO slot. The **Figure 1** shows the assembly of a [WisBlock Core](https://store.rakwireless.com/collections/wisblock-core) highlighted in green and the module RAK14002 highlighted in red. Also, always secure the connection of the WisBlock module by using the compatible screws. For more information about RAK14002, refer to the [Datasheet](../Datasheet/).

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak14002_assembly.png"
  width="100%"
  caption="RAK14002 connection to WisBlock Base"
/>

#### Assembling and Disassembling of WisBlock Modules

##### Assembling

As shown in **Figure 2**, the location for the IO slot is properly marked by silkscreen. Follow carefully the procedure defined in [RAK5005-O module assembly/disassembly instructions](https://docs.rakwireless.com/Knowledge-Hub/Learn/RAK5005-O-Baseboard-Installation-Guide/) to attach a WisBlock module. Once attached, carefully fix the module with three pieces of M1.2 x 3&nbsp;mm screws.


<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak14002_mounting.png"
  width="70%"
  caption="RAK14002 connection to WisBlock Base"
/>

##### Disassembling

The procedure in disassembling any type of WisBlock modules is the same.

1. First, remove the screws.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/16.removing-screws.png"
  width="70%"
  caption="Removing screws from the WisBlock module"
/>

2. Once the screws are removed, check the silkscreen of the module to find the correct location where force can be applied.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/17.detaching-silkscreen.png"
  width="70%"
  caption="Detaching silkscreen on the WisBlock module"
/>

3. Apply force to the module at the position of the connector, as shown in **Figure 5**, to detach the module from the baseboard.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/18.detaching-module.png"
  width="70%"
  caption="Applying even forces on the proper location of a WisBlock module"
/>

::: tip 📝 NOTE
If you will connect other modules to the remaining WisBlock Base slots, check on the [WisBlock Pin Mapper](https://docs.rakwireless.com/Knowledge-Hub/Pin-Mapper/) tool for possible conflicts. RAK14002 uses I2C and IO pins it can cause possible conflict especially on some IO modules.
:::

After all this setup, you can now connect the battery and USB cable to start programming your WisBlock Core.

:::warning ⚠️ WARNING

- Battery can cause harm if not handled properly.
- Only 3.7-4.2&nbsp;V Rechargeable LiPo batteries are supported. It is highly recommended not to use other types of batteries with the system unless you know what you are doing.
- If a non-rechargeable battery is used, it has to be unplugged first before connecting the USB cable to the USB port of the board to configure the device. Not doing so might damage the battery or cause fire.
- Make sure the battery wires match the polarity on the RAK WisBlock Base Board. Not all batteries have the same wiring.
- Only 5&nbsp;V solar panels are supported. Do not use 12&nbsp;V solar panels. It will destroy the charging unit and eventually other electronic parts.
:::

### Software Configuration and Example

These are the quick links that go directly to the software guide for the specific WisBlock Core module you use.

- [RAK14002 in RAK4631 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14002/Quickstart/#rak14002-in-rak4631-wisblock-core-guide)
- [RAK14002 in RAK11200 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14002/Quickstart/#rak14002-in-rak11200-wisblock-core-guide)
- [RAK14002 in RAK11310 WisBlock Core Guide](/Product-Categories/WisBlock/RAK14002/Quickstart/#rak14002-in-rak11310-wisblock-core-guide)

#### RAK14002 in RAK4631 WisBlock Core Guide

##### Arduino Setup

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Now select the RAK4631 WisBlock Core as shown in **Figure 6**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak4631_board.png"
  width="100%"
  caption="Select RAK4631 as WisBlock Core"
/>

Arduino programs are usually referred to as sketches. The sketches for this module will be available on the Arduino IDE after Library install.

2. Install the [RAKwireless CAP1293 Library](https://github.com/RAKWireless/RAK14002-CAP1293-Library) using Arduino Library Manager.

On Arduino IDE select: Sketch-> Include Library -> Manage Libraries as shown in **Figure 7**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak4631_manage_library.png"
  width="100%"
  caption="Select Arduino Library Manager"
/>

On **Library Manager** text area type **RAKwireless CAP1293**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_lib_manager_rak4631.png"
  width="100%"
  caption="Arduino Library Manager RAKwireless CAP1293"
/>

To finish the installation, click on the **Install** button as shown in **Figure 9**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_install_rak4631.png"
  width="100%"
  caption="Finish RAKwireless CAP1293 Touch Pad Library Installation"
/>

3. Once the library is installed, open the **RAK14002 Example01_BasicReading** example. On Arduino IDE select: File-> Examples -> RAKwireless CAP1293 Touch Pad Library -> RAK14002 Example01_BasicReading as shown in **Figure 10**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_example_rak4631.png"
  width="100%"
  caption="Open RAK14002 Example01_BasicReading Sketch"
/>

4. You can now select the right serial port and upload the code, as shown in **Figure 11** and  **Figure 12**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak4631_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_upload_rak4631.png"
  width="100%"
  caption="Uploading the RAK14002 example code on RAK4631"
/>

5. When you successfully uploaded the Example01_BasicReading sketch, open the Serial Monitor of the Arduino IDE to check the sensor's reading logs.

Touch the left pad of the RAK14002 module. If you see the logs, as shown in **Figure 13**, then your RAK14002 is properly communicating to the WisBlock Core. The  **Connected!** message means the I2C bus of RAK4631 WisBlock Core is connected to RAK14002.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_log.png"
  width="80%"
  caption="RAK14002 sensor data logs"
/>

##### PlatformIO Setup (Optional)

1. Install the [RAK_PATCH](https://github.com/RAKWireless/WisBlock/blob/master/PlatformIO/README.md#rak-wisblock-modules-in-platformio)

After installing your RAK Core board on PlatformIO, you can import the entire project to PlatformIO.

2. Import Arduino Project to PlatformIO.

- Open PlatformIO PIO Home and select **Import Arduino Project**, as shown in **Figure 14**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/pio-home-import.png"
  width="100%"
  caption="Import RAK14002 Arduino Project"
/>

- Select the **WisBlock Core Board** and check "**Use Libraries installed by the Arduino IDE**" option, as shown in **Figure 15** below. Then choose the directory of the RAK14002 Arduino Project.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/import-project.png"
  width="100%"
  caption="Select Board and check Import Libraries"
/>

- To finish import, click on **Import** button, as shown in **Figure 16**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/finish-import.png"
  width="100%"
  caption="Select Board and check Import libraries"
/>

3. Build imported project on PlatformIO.

- Now, you can build the project by clicking on highlighted icon, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/build-project.png"
  width="100%"
  caption="Build Arduino imported project"
/>

4. Upload imported project on PlatformIO.

- To upload the project on target board, click on the highlighted icon, as shown in **Figure 18**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/upload-pio-project.png"
  width="100%"
  caption="Upload Arduino imported project"
/>

#### RAK14002 in RAK11200 WisBlock Core Guide

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Select the RAK11200 WisBlock Core, as shown in **Figure 19**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11200_board.png"
  width="100%"
  caption="Select RAK11200 as WisBlock Core"
/>

Arduino programs are usually referred to as sketches. The sketches for this module will be available on the Arduino IDE after Library install.

2. Install the [RAKwireless CAP1293 Library](https://github.com/RAKWireless/RAK14002-CAP1293-Library) using Arduino Library Manager.

- On Arduino IDE select: Sketch-> Include Library -> Manage Libraries, as shown in **Figure 20**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11200_manage_library.png"
  width="100%"
  caption="Select Arduino Library Manager"
/>

- On **Library Manager** text area, type **RAKwireless CAP1293**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_lib_manager_rak11200.png"
  width="100%"
  caption="Arduino Library Manager RAKwireless CAP1293"
/>

- To finish the installation, click on the **Install** button as shown in **Figure 22**.
<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_install_rak11200.png"
  width="100%"
  caption="Finish RAKwireless CAP1293 Touch Pad Library Installation"
/>

3. Once the library is installed, open the **Example01_BasicReading** example.

- On Arduino IDE select: **File** -> **Examples** -> **RAK WisBlock Examples** -> **RAK11200** -> **IO** -> **RAK14002_CAP1903_TouchKey** -> **Example01_BasicReading**, as shown in **Figure 23**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11200_example.png"
  width="100%"
  caption="Open RAK14002 Example01_BasicReading Sketch"
/>

4. You can now select the right serial port and upload the code, as shown in **Figure 24** and  **Figure 25**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11200_select_port.png"
  width="100%"
  caption="Selecting the correct Serial Port"
/>

:::tip 📝 NOTE:
RAK11200 requires BOOT0 pin to be configured properly first before uploading. If not done properly, uploading the source code to RAK11200 will fail. Check the full details on the [RAK11200 Quick Start Guide](/Product-Categories/WisBlock/RAK11200/Quickstart/#uploading-to-wisblock).
:::

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_upload_rak11200.png"
  width="100%"
  caption="Uploading the RAK14002 example code on RAK11200"
/>

5. When you successfully uploaded the Example01_BasicReading sketch, open the Serial Monitor of the Arduino IDE to check the sensor's reading logs.

Touch the left pad of the RAK14002 module. If you see the logs, as shown in **Figure 26**, then your RAK14002 is properly communicating to the WisBlock Core. The  **Connected!** message means the I2C bus of RAK11200 WisBlock Core is connected to RAK14002.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_log_rak11200.png"
  width="80%"
  caption="RAK14002 sensor data logs"
/>

#### RAK14002 in RAK11310 WisBlock Core Guide

Install the [RAKwireless Arduino BSP](https://github.com/RAKWireless/RAKwireless-Arduino-BSP-Index).

1. Launch Arduino IDE then select **Tools**-> **Boards**-> **Boards Manager**.

On Boards Manager text area, type **RAK**. The RAKwireless RP Boards will be shown in the window.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11310_board.png"
  width="80%"
  caption="Boards Manager RAKwireless RP Boards"
/>

2. Now select the RAKwireless RP Boards and then click on **Install** button, as shown in **Figure 28**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11310_install.png"
  width="80%"
  caption="RAKwireless RP Boards install"
/>

Arduino programs are usually referred to as sketches. The sketches for this module will be available on the Arduino IDE after the Library install.

3. Install the [RAKwireless CAP1293 Library](https://github.com/RAKWireless/RAK14002-CAP1293-Library) using Arduino Library Manager.

- Launch Arduino IDE and select: **Sketch**-> **Include Library** -> **Manage Libraries**, as shown in **Figure 29**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11310_manage_library.png"
  width="100%"
  caption="Select Arduino Library Manager"
/>

- On **Library Manager** text area, type **RAKwireless CAP1293**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_lib_manager_rak11310.png"
  width="80%"
  caption="Arduino Library Manager RAKwireless CAP1293"
/>

- To finish the installation, click on the **Install** button, as shown in **Figure 31**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_install_rak11310.png"
  width="80%"
  caption="Finish RAKwireless CAP1293 Touch Pad Library Installation"
/>

- Once the library is installed, open the RAK14002 Example01_BasicReading example.

4. Launch Arduino IDE  and select: **File** -> **Examples** -> **RAKwireless CAP1293 Touch Pad Library** -> **RAK14002 Example01_BasicReading**, as shown in **Figure 32**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11310_example.png"
  width="80%"
  caption="Open RAK14002 Example01_BasicReading"
/>

5. You can now select the right serial port and upload the code, as shown in **Figure 33** and **Figure 34**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak11310_select_port.png"
  width="100%"
  caption="Selecting the RAK11310 Serial Port"
/>

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/cap1293_upload_rak11310.png"
  width="100%"
  caption="Uploading the RAK14002 example code on RAK11310"
/>

After successfully uploaded the Example01_BasicReading sketch, open the Serial Monitor of the Arduino IDE to check the sensor's reading logs.


##### RAK11310 PlatformIO Setup (Optional)


:::tip 📝 NOTE:
This procedure was tested only on Windows 10 and Ubuntu.
:::

1. First, install Raspberry Pi RP2040 platform.

- Launch Visual Studio Code and select the PIO Home tab **(1)**. Then click on Platforms icon **(2)** and select the Embedded tab **(3)**, as shown in **Figure 35**.


<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/pio_rak11310.png"
  width="100%"
  caption="PIO Home PlatformIO platforms"
/>

- On Embedded text area, type **Raspberry**. To install the new platform, click on the new **Raspberry PI RP2040** window.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_select.png"
  width="100%"
  caption="PIO Home Raspberry Pi RP2040"
/>

- Now click on **Install** button, as shown in **Figure 37**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_install.png"
  width="100%"
  caption="Raspberry PI RP2040 Platform install"
/>

2. Open a project example that uses the RP2040 Platform.

- On the **PIO Home** tab, click on **Project Examples**.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_project_example.png"
  width="100%"
  caption="Import RP2040 project"
/>

- To find the RP2040 examples, type **RP2040** on **Import Project Example** text area.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_import.png"
  width="50%"
  caption="Selecting RP2040 project"
/>

- Choose **arduino-blink** project then click on **Import** button.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_arduino_blink.png"
  width="50%"
  caption="Import arduino-blink project"
/>

- Click **Yes** button on trust window.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_trust.png"
  width="50%"
  caption="PlatformIO trust authors"
/>

3. Build the imported project and ignore warnings.

4. Install the **RAK Patch**.

- Download and install the [RAK Patch](https://raw.githubusercontent.com/RAKWireless/WisBlock/master/PlatformIO/RAK_PATCH.zip).

- Unzip the contents of RAK_PATCH.zip into folder RAK_PATCH in your PlatformIO installation folder.
The table below shows the PlatformIO installation directory for each operating system.

| PlatformIO path on different OS |                                      |
| :------------------------------ | :----------------------------------- |
| Windows 10                      | `%UserProfile%\.platformio\`         |
| Linux                           | `~/.platformio/`                     |
| MacOS                           | `/Users/{Your_User_id}/.platformio/` |

- **Figure 42** shows the PlatformIO installation directory on Windows 10.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak_patch_folder.png"
  width="70%"
  caption="RAK patch folder on Windows"
/>

- Open a command prompt in **`%UserProfile%.platformio\RAK_PATCH`** folder and execute python `./rak_patch.py`.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rak_patch_installed.png"
  width="70%"
  caption="RAK patch installed on Windows"
/>

:::warning ⚠️ WARNING
In case of Raspberry PI 2040 platform update on PlatformIO, the RAK_PATH script must be executed again after the platform update.
:::

5. Check RAK_PATCH installation.

- Select **PIO Home** tab, then click on **+ New Project** button.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_new_project.png"
  width="100%"
  caption="Create new PlatformIO project"
/>

- A new Project Wizard window will appear.

- Type **RAK11300** on **Board**.

- On the **Name** text area, type the name of your project.

- To finish the project creation, click on **Finish** button.

<rk-img
  src="/assets/images/wisblock/rak14002/quickstart/rp2040_wizard.png"
  width="50%"
  caption="Project Wizard window"
/>

::: tip 📝 NOTE
The board list for Raspberry Pi RP2040 Framework shows the **WisBlock RAK11300 (RAKwireless)**.
:::

