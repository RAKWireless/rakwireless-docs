---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/arduino-ide.png
rak_desc: A brief guide on how to install the board support package in Arduino IDE.
tags:
  - Tutorial
  - WisBlock
header:
  title: Installation of Board Support Package in Arduino IDE
  caption: by <b>Bernd Giesecke</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 8/14/2020 10:21 AM
author:
  name: Bernd Giesecke
  about: Electronics Engineer, 23 years experience in industrial and automotive HW and SW R&D. Supporting Arduino open source community since 6 years.
  img: /assets/images/knowledge-hub/authors/bernd-giesecke.png
---


# Installation of Board Support Package in Arduino IDE

## Arduino IDE Download and Installation

You should use Arduino IDE for WisBlock coding and programming. Download the Arduino IDE on the [Arduino official website](https://www.arduino.cc/en/Main/Software).

You can see the current version of Arduino IDE is V1.8.13, and there are several versions available for Windows, Linux, and Mac OS X. Choose the correct version of Arduino IDE and download it.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/1.arduino-version.png"
  width="100%"
  caption="Arduino IDE latest version"
/>


### Install in Windows

Now let's install the Arduino IDE, which you just downloaded, on your Windows PC. 

1. Click **I Agree** to proceed.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/2.agree.png"
  width="50%"
  caption="Arduino Setup Licence Agreement"
/>

2. Click **Next**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/3.next.png"
  width="50%"
  caption="Arduino Setup Installation Options"
/>

3. Click **Install**.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/4.install.png"
  width="50%"
  caption="Installing Arduino IDE"
/>

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/4.5.installing.png"
  width="50%"
  caption="Ongoing Installation"
/>


After 100% progress, the Arduino IDE has been installed successfully.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/5.installed.png"
  width="75%"
  caption="Successful Installation"
/>

### Install in Linux

In Linux, there is no install process. It is just a process of uncompression, then you can open Arduino IDE successfully.


### Install in Mac OS X

In Mac OS X, the same with Linux, there is no install process. It is just a process of uncompression, then you can open Arduino IDE successfully.


### Open Arduino IDE

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/6.open.png"
  width="75%"
  caption="Successful Installation"
/>

As shown in figure 6 above, the Arduino IDE has mainly 5 parts:

1. **IDE Option Menu**

You can configure some general parameters such as the serial port, the board information, the libraries, the edit parameters, and so on.

2. **Operating Buttons**

The operating buttons has five operations.

- **Verify/Compile** the source code.

- **Upload** the compiled code into WisBlock.

- Open a **New** Arduino IDE window or existing application.

- **Save** the current application.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/7.operating-buttons.png"
  width="40%"
  caption="Operating Buttons"
/>


3. **Code Area**

You can edit the source code which will be compiled and uploaded into WisBlock later in this area.

4. **State Area**

5. **Output Message Area**

You can see the output message in this area, whether it's a failed or a success information.

### Configuration On Arduino IDE

Once Arduino IDE has been installed successfully, and you've understood the mainly parts of Arduino IDE, you can do some configuration changes on Arduino IDE so that it can be adapted to WisBlock.

Use [Arduino Core for Adafruit Bluefruit nRF52 Boards](https://github.com/adafruit/Adafruit_nRF52_Arduino) and execute the following steps.

1. Open Arduino IDE.

2. Go into Preferences.


<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/8.preferences.png"
  width="75%"
  caption="Preferences"
/>

3. Add [**https://www.adafruit.com/package_adafruit_index.json**](https://www.adafruit.com/package_adafruit_index.json) into the **Additional Board Manager URL**. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/9.board-manager.png"
  width="75%"
  caption="Adding Adafruit package link"
/>

4. Restart the Arduino IDE.

5. Open the Boards Manager. Click Tools then Board Menu. 

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/10.board-menu.png"
  width="75%"
  caption="Opening Boards Manager"
/>

6. Search and install "**Adafruit nRF52**". It is the board support package (BSP). See figure 11 below.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/11.adafruit.png"
  width="75%"
  caption="Installing Adafruit nRF52"
/>

7. Download and copy the following folder to the specified path:

Folder link:
    
- [**`https://github.com/RAKWireless/WisBlock/tree/master/BSP/WisCore_RAK4631_Board/`**](https://github.com/RAKWireless/WisBlock/tree/master/BSP/WisCore_RAK4631_Board/)

Path: 
- macOS : **` ~/Library/Arduino15/packages/adafruit/hardware/nrf52/0.20.5/variants/`**

- Linux : **`~/.arduino15/packages/adafruit/hardware/nrf52/0.20.5/variants/`**

- Windows: **`%APPDATA%\Local\Arduino15\packages\adafruit\hardware\nrf52\0.20.5\variants\`**

8. Open **./adafruit/hardware/nrf52/0.20.5/boards.txt,** and copy the content of the following file into the end of boards.txt:

- [**`https://github.com/RAKWireless/WisBlock/tree//master/BSP/config.txt`**](https://github.com/RAKWireless/WisBlock/tree//master/BSP/config.txt)

Then add **menu.region=Region** to the begin of boards.txt (line 21):

```
  menu.softdevice=Bootloader
  menu.debug=Debug
  menu.region=Region
```

9. Open **./adafruit/hardware/nrf52/0.20.5/platform.txt**.

- Add **-DDEBUG** at the end of line 39.

  ```
  compiler.cpp.flags=-mcpu={build.mcu} -mthumb -c -g {compiler.warning_flags} {build.float_flags} -std=gnu++11 -ffunction-sections -fdata-sections -fno-threadsafe-statics -nostdlib --param max-inline-insns-single=500 -fno-rtti -fno-exceptions -MMD -DDEBUG
  ```

-   Add **build.region_flags=-DREGION_EU868** in the end of line 56.

  ```
  # this can be overriden in boards.txt 
  build.float_flags=-mfloat-abi=hard -mfpu=fpv4-sp-d16 -u _printf_float 
  build.debug_flags=-DCFG_DEBUG=0 
  build.logger_flags=-DCFG_LOGGER=1 
  build.sysview_flags=-DCFG_SYSVIEW=0 
  build.region_flags=-DREGION_EU868
  ```

-   Add **{build.region_flags}** after **{build.debug_flags}** at line 64.

  ```
  build.flags.nrf= -DSOFTDEVICE_PRESENT -DARDUINO_NRF52_ADAFRUIT -DNRF52_SERIES -DLFS_NAME_MAX=64 -Ofast {build.debug_flags} {build.region_flags} {build.logger_flags} {build.sysview_flags} "-
  ```

-   Add **compiler.libraries.ldflags=** in the end of line 76.
  
  ```
  # These can be overridden in platform.local.txt
  compiler.c.extra_flags=
  compiler.c.elf.extra_flags=
  compiler.cpp.extra_flags=
  compiler.S.extra_flags=
  compiler.ar.extra_flags=
  compiler.elf2bin.extra_flags=
  compiler.elf2hex.extra_flags=
  compiler.libraries.ldflags=
  ```

-  Add **{compiler.libraries.ldflags}** before **-Wl,--end-group** at line 95 like below:
  
  ```
  recipe.c.combine.pattern="{compiler.path}{compiler.c.elf.cmd}"  "-L{build.path}" {compiler.c.elf.flags} {compiler.c.elf.extra_flags} "-L{build.core.path}/linker" "-T{build.ldscript}" "-Wl,-Map,{build.path}/{build.project_name}.map" {compiler.ldflags} -o "{build.path}/{build.project_name}.elf" {object_files} -Wl,--start-group -lm "{build.path}/{archive_file}" {compiler.libraries.ldflags} -Wl,--end-group
  ```

10. Restart Arduino IDE then, select "**WisCore RAK4631 Board**".

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/12.wiscore-rak4631-board.png"
  width="75%"
  caption="Selecting WisCore RAK4631 Board"
/>

Now you have configured the Arduino IDE correctly and install the BSP successfully.

### Load Examples

RAK has supplied many examples source code on [GitHub for WisBlock](https://github.com/RAKWireless/WisBlock/tree/master/examples). Below are the snippet of the example source code folders.


![13.example1](/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/13.example1.png)

![14.example2](/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/14.example2.png)

![15.example3](/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/15.example3.png)

![16.example4](/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/16.example4.png)



You can use WisBlock directly or make their customized code according to these examples source code. What you need to do is to load one of these examples into Arduino IDE. Just open a .ino file in RAK examples, in this document, we use "ble_proximity_sensing.ino":

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/17.ble-proximity-sensing.png"
  width="75%"
  caption="BLE Proximity Sensing Source Code"
/>

Now, you can compile it directly according to section 7. Or, you can customize your code before compiling it if you want.

About customization code, you can have a look at the section 9 for more details.


### Compiling Project

The compiling process is very easy. You just have to click the Verify/Compile button on Arduino IDE.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/18.verify-compile-button.png"
  width="40%"
  caption="Verify/Compile Button on Arduino IDE"
/>

Then, it will start to compile:

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/19.compile.png"
  width="75%"
  caption="Compiling the Source Code"
/>

After compiling successfully, you can see some information in the output message area with a message "**Done compiling**".

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/20.done-compiling.png"
  width="75%"
  caption="Verify/Compile Button on Arduino IDE"
/>

Now, you can connect your WisBlock hardware with your PC, and upload the code into it.

### Uploading to WisBlock

Before uploading, make sure that your WisBlock hardware has been connected with your PC correctly, and your PC has recognized WisBlock hardware successfully. Then, you can now select the port.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/21.port.png"
  width="75%"
  caption="Connecting WisBlock to PC"
/>


Once done, click now the "Upload" button.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/22.operating-buttons.png"
  width="40%"
  caption="Upload Button"
/>

After uploading successfully, you can see some information in the output message.

<rk-img
  src="/assets/images/knowledge-hub/wisblock/Installation-of-Board-Support-Package-in-Arduino-IDE/23.output-message-area.png"
  width="40%"
  caption="Output Message Area"
/>


That means you've uploaded the code into WisBlock successfully.

Now enjoy your WisBlock and have an amazing play time!

### Customized Code

As mentioned earlier, RAK has supplied some examples source code as a reference. This helps you to learn some code level method on how to do an application for WisBlock. Meanwhile, RAK has supplied a set of tutorials too, which has introduced the ability of WisBlock software and shown the development process of these RAK examples. For that matter, you can understand better on how to do some customized code.

All of these tutorials can be found in every example folder:

[**`https://github.com/RAKWireless/WisBlock/tree/master/examples`**](https://github.com/RAKWireless/WisBlock/tree/master/examples)



<rk-author />