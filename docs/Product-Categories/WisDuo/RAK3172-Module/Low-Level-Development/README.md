---
rak_desc: Aside from the default RAK firmware on the RAK3172 Module, you can create custom firmware using RUI (RAKwireless Unified Interface) or the actual SDK from the manufacturer of the microcontroller that is used inside the module.
rak_img: /assets/images/wisduo/rak3172-module/overview/RAK3172-Module.png
prev: ../AT-Command-Manual/
next: ../Datasheet/
tags:
  - wisduo
  - RAK3172
---

# RAK3172 Module Low Level Development Reference

## Overview

The RAK3172 module uses RF System-on-Chip IC from STMicroelectronics, specifically the STM32WL series, which can be used on different LPWAN IoT devices.

STM32WL microcontrollers feature a sub-GHz radio based on Semtech SX126x to meet the requirements of a wide range of Low-Power Wide Area Network (LPWAN) wireless applications in industrial and consumer Internet-of-Things (IoT). The specific STM32WL microcontroller used in RAK3172 is the STM32WLE5CCU6.

While RAK3172 has a built-in default FW with a set of AT commands that can be interfaced to an external host like other microcontrollers, it can also be used by developing custom firmware directly on its chip using the STM32WL SDK from STMicroelectronics. Doing this approach will reduce the overall cost of the device because there will be no need for an external microcontroller but with the extra software development effort.

This guide will illustrate how to generate custom firmware for the STM32WLE5CCU6, which is inside the RAK3172 module. It supports two STM32WL SDK versions - v1.0.0 and v1.2.0.

- [STM32CubeIDE guide with STM32WL SDK v1.0.0](/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/#rak3172-on-stm32cubeide-with-stm32wl-sdk-v1-0-0)
- [STM32CubeIDE guide with STM32WL SDK v1.2.0](/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/#rak3172-on-stm32cubeide-with-stm32wl-sdk-v1-2-0)

## Guide on Using STM32WL SDK Using STM32CubeIDE

### Installation of STM32Cube IDE

1. Download the [STM32Cube IDE](https://www.st.com/en/development-tools/stm32cubeide.html#overview&secondary=st-get-software) from the STMicroelectronics website. Then select the latest version compatible with your computer.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_getsw.png"
  width="80%"
  caption="STM32CubeIDE Software Download"
/>

2. A license agreement from STMicroelectronics will show, and you must agree to log in using your STMicroelectronics account. Create an account if you do not have one.

3. After downloading, unzip the installer file and start the installation process. Just click next on the initial installation window and agree on the license agreement.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_install.png"
  width="50%"
  caption="STM32CubeIDE Installation"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_agreement.png"
  width="50%"
  caption="STM32CubeIDE License Agreement"
/>

3. Next step is to determine the directory where you want the STM32CubeIDE software to be placed. You can just click next to use the default folder or you can select a different location.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_directory.png"
  width="50%"
  caption="STM32CubeIDE Directory Location"
/>

4. Select optional components in the installation, like J-link and ST-Link drivers. It is highly recommended to include these drivers, which will be useful in debugging and uploading binary firmware files to the STM32WL chip.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_drivers.png"
  width="50%"
  caption="STM32CubeIDE Drivers"
/>

5. The progress bar will show as the installation begins.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_install_going.png"
  width="50%"
  caption="STM32CubeIDE On-going Installation"
/>

6. During the installation, there are STMicroelectronics device drivers that will pop up. These are not needed by STM32WL, so you can leave them uninstalled.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_device_driver.png"
  width="50%"
  caption="STM32CubeIDE Optional Device Drivers"
/>

7. If there are no problems in the installation process, you should be finished and can now create a desktop shortcut for the STM32CubeIDE application.


<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_complete.png"
  width="50%"
  caption="STM32CubeIDE Installation Successful"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_shortcut.png"
  width="50%"
  caption="STM32CubeIDE Installation Finished"
/>

8. Check if the installation of the STM32CubeIDE is successful by trying to run the app. It should have no errors. It will ask you for the workspace and you can leave the default location if you don't want to put it in another location. You also have the option to create multiple workspaces but only one should be active.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_workspace.png"
  width="50%"
  caption="STM32CubeIDE Workspace Selection"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_running_app.png"
  width="90%"
  caption="STM32CubeIDE Application Running"
/>

### RAK3172 on STM32CubeIDE with STM32WL SDK v1.0.0

STM32CubeIDE is a free IDE from STMicroelectronics, which you can use to develop firmware for various STM32 microcontrollers including the STM32WL series. It is a complete software IDE based on Eclipse where you can debug easily your code with built-in integration to tools like ST-Link and other features like STM32CubeMX. It is multiplatform software that can run on Windows, Linux, and macOS.

You cannot select RAK3172 directly on the STM32CubeIDE, but you can use the STM32WLE5CCU6 inside it with STM32WL SDK from STMicroelectronics to start your own custom firmware. This guide is only applicable to STM32WL SDK v1.0.0.

#### Getting STM32WL SDK v1.0.0

This guide only works on v1.0.0 of the SDK.

1. If you already have the STM32CubeIDE running on your machine, the next step is to download the [STM32WL SDK v1.0.0](https://www.st.com/en/embedded-software/stm32cubewl.html#get-software) from the STMicroelectronics website.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_sdk_link.png"
  width="70%"
  caption="STM32WL SDK Download Page"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_sdk_1_0_0.png"
  width="85%"
  caption="STM32WL V1.0.0 Download"
/>

2. The downloaded files usually go to the download folder. You need to extract it then you will see the STM32WL SDK firmware folder.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_zip.png"
  width="60%"
  caption="STM32WL V1.0.0"
/>

3. The structure of the extracted files should be the same, as shown in **Figure 15**. You cannot just change this folder structure. This contains many examples related to the STM32WL chip.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_dir_structure.png"
  width="70%"
  caption="STM32WL V1.0.0 Folder Structure"
/>


#### Modifications for the RAK3172

##### Files Modification Needed to Run STM32WL SDK LoRaWAN Examples to RAK3172

If you already have the STM32WL V1.0.0 SDK folder, there are only a few files that you need to update to be able to create firmware that will run on RAK3172.

::: tip 📝 NOTE

STM32 microcontroller firmware created using STM32CubeIDE (with the help of STM32CubeMX) have **.ioc** file. This is a configuration file created by the STM32CubeMX tool. This is a helpful tool in setting up peripherals and drivers quickly in the STM32 development ecosystem. However, once you do the file modification mentioned in this guide, you cannot create a new **.ioc** file or modify it via STM32CubeMX. Else, those modified files needed by the RAK3172 will be overwritten and will go back to their original state or the **.ioc** file.

In cases that you need to use STM32CubeMX to set up peripherals or drivers, you just need to do again the same modification as mentioned in this section.
:::

1. Download the [Low Level Development zip file](https://downloads.rakwireless.com/LoRa/RAK3172/Firmware/RAK3172_Low_Level_Development.zip) from the RAK downloads site. Extract the zip file and inside the folder are four files that need to be copy-pasted on specific locations of the STM32WL V1.0.0 folder to make it compatible with RAK3172.

The majority of these files are for setting up the RF channel front end of the radio section on the STM32WL chip. Also, the startup file must be changed because the default startup on STM32WL SDK V1.0.0 is for the STM32WL55 series and not for STM32WLE5. The RAK3172 is based on STM32WLE5CCU6.

::: tip 📝 NOTE
This guide will demonstrate how to run the **LoRaWAN_End_Node** example of the STM32WL SDK to RAK3172. If you need to run other LoRaWAN-related examples like **LoRaWAN_AT_Slave**, you need to update the files on that folder.
:::

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_low_folder.png"
  width="60%"
  caption="RAK3172 Low Level Development Files"
/>

2. The radio related files `radio_board_if.c`, `radio_board_if.h`, and `radio_conf` must be placed in this location of the STM32WL SDK folder `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\Target`. You have to overwrite or replace the old files.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_radio_files.png"
  width="60%"
  caption="RAK3172 Radio Related Files for Modification"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_radio_replace.png"
  width="40%"
  caption="RAK3172 Radio Related Files Replaced"
/>

3. You also need to update the startup file. Place the `startup_stm32wle5ccux.s` file to this location `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Application\Startup`. There is a default startup file in that directory named `startup_stm32wl55jcix.s` and you need to delete that.

The updated startup folder should be the same, as shown in **Figure 19**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_startup_replaced.png"
  width="60%"
  caption="RAK3172 Radio Related Files Replaced"
/>

##### Initial Build Test for the RAK3172 Custom Firmware

1. After doing the file modifications, the next step is to test if the **LoRaWAN_End_Node** example can be built without errors.

::: tip 📝 NOTE
If this is your first time using STM32CubeIDE, it shows **Information Center** by default. Just close it and access the project on the left panel.
:::

2. Open the STM32CubeIDE and click on `File` then `Open Projects from File System`.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_openproject.png"
  width="90%"
  caption="Open the Project in STM32CubeIDE"
/>

3. You then need to browse the project folder location by clicking the **Directory** button.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_open_dir.png"
  width="90%"
  caption="Locate the Project Directory in STM32CubeIDE"
/>

4. You should locate this directory `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node`. Click on **STM32CubeIDE** folder once, then click the **Select Folder**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_project_stm32cube.png"
  width="70%"
  caption="Select the STM32CubeIDE Project Folder"
/>

5. You should now see the **STM32CubeIDE** checked and ready to be imported as **Eclipse project**. If not checked, click the checkbox and then the **Finish** button. It will take some time to fully import the whole project.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_finalopen_project.png"
  width="70%"
  caption="Open the LoRaWAN_End_Node Project"
/>

6. After the successful import, you should now see the **LoRaWAN_End_Node** project structure on the left side of the STM32CubeIDE.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_initproject.png"
  width="90%"
  caption="Open the STM32CubeIDE Project"
/>

7. With the modified files already implemented, you can check if the files are updated by checking the startup file `startup_stm32wle5ccux.s` and the `radio_board_if.c`. The startup file must be updated and show `startup_stm32wle5ccux.s`. You should see `#if defined(RAK3172_RF_CHANNEL_SWITCH)` in line 72 of `radio_board_if.c` file, as shown in **Figure 25**. If not, then you are not successful in changing these files with the [Low Level Development required modification](/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/#files-modification-needed-to-run-stm32wl-sdk-lorawan-examples-to-rak3172).

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_modfile.png"
  width="90%"
  caption="Open the STM32CubeIDE Project"
/>

8. You can now try to build the project by setting up the build configuration to release so that a `.bin` file will be generated.

::: tip 📝 NOTE
If you have an ST-LINK debugging tool, you can also choose **Debug** instead of **Release**.
:::

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_buildconfig.png"
  width="90%"
  caption="Configure Build to Release"
/>

9. After setting the build configuration, you are now ready to build the project. You should see a successful compilation and generation of a `.bin` file.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_build.png"
  width="90%"
  caption="Build the Project"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_buildok.png"
  width="90%"
  caption="Successful Project Build"
/>


### RAK3172 on STM32CubeIDE with STM32WL SDK v1.2.0

The previous guide is for STM32WL SDK version 1.0.0. This guide is compatible with STM32WL SDK v1.2.0.

#### Getting STM32WL SDK v1.2.0

1. If you already have the STM32CubeIDE running on your machine, the next step is to download the [STM32WL SDK v1.2.0](https://www.st.com/en/embedded-software/stm32cubewl.html#get-software) from the STMicroelectronics website.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_sdk_link.png"
  width="70%"
  caption="STM32WL SDK Download Page"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_sdk_1_2_0.png"
  width="85%"
  caption="STM32WL V1.2.0 Download"
/>

2. The downloaded files usually go to the download folder. You need to extract it then you will see the STM32WL SDK firmware folder.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_zip_1_2_0.png"
  width="60%"
  caption="STM32WL V1.2.0"
/>

3. The structure of the extracted files should be the same, as shown in **Figure 32**. You cannot just change this folder structure. This contains many examples related to the STM32WL chip.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32wl_dir_structure_120.png"
  width="70%"
  caption="STM32WL V1.2.0 Folder Structure"
/>


#### Modifications for the RAK3172

##### Files Modification Needed to Run STM32WL SDK LoRaWAN Examples to RAK3172

If you already have the STM32WL V1.2.0 SDK folder, there are only a few files that you need to update to be able to create firmware that will run on RAK3172.

::: tip 📝 NOTE

STM32 microcontroller firmware created using STM32CubeIDE (with the help of STM32CubeMX) have **.ioc** file. This is a configuration file created by the STM32CubeMX tool. This is a helpful tool in setting up peripherals and drivers quickly in the STM32 development ecosystem. However, once you do the file modification mentioned in this guide, you cannot create a new **.ioc** file or modify it via STM32CubeMX. Else, those modified files needed by the RAK3172 will be overwritten and will go back to their original state or the **.ioc** file.

In cases that you need to use STM32CubeMX to set up peripherals or drivers, you just need to do again the same modification as mentioned in this section.
:::

1. Download the [Low Level Development zip file for v1.2.0](https://downloads.rakwireless.com/LoRa/RAK3172/Firmware/RAK3172_Low_Level_Development_v1_2_0.zip) from the RAK downloads site. Extract the zip file and inside the folder are four files that need to be copy-pasted on specific locations of the STM32WL V1.2.0 folder to make it compatible with RAK3172.

The majority of these files are for setting up the RF channel front end of the radio section on the STM32WL chip. Also, the startup file must be changed because the default startup on STM32WL SDK V1.2.0 is for the STM32WL55 series and not for STM32WLE5. The RAK3172 is based on STM32WLE5CCU6.

::: tip 📝 NOTE
This guide will demonstrate how to run the **LoRaWAN_End_Node** example of the STM32WL SDK to RAK3172. If you need to run other LoRaWAN-related examples like **LoRaWAN_AT_Slave**, you need to update the files on that folder.
:::

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_low_folder.png"
  width="60%"
  caption="RAK3172 Low Level Development Files"
/>

2. The radio related files `radio_board_if.c`, `radio_board_if.h`, and `radio_conf` must be placed in this location of the STM32WL SDK folder `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\Target`. You have to overwrite or replace the old files.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_radio_files.png"
  width="60%"
  caption="RAK3172 Radio Related Files for Modification"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_radio_replace.png"
  width="40%"
  caption="RAK3172 Radio Related Files Replaced"
/>

3. You also need to update the startup file. Place the `startup_stm32wle5ccux.s` file to this location `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Application\User\Startup`. There is a default startup file in that directory named `startup_stm32wl55jcix.s` and you need to delete that.

The updated startup folder should be the same, as shown in **Figure 36**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/rak3172_startup_replaced.png"
  width="60%"
  caption="RAK3172 Radio Related Files Replaced"
/>

4. After the modifications above, there are minor changes needed to be adjusted on other source files.

- On *\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\Core\Inc\platform.h*, you need to comment out `#define USE_BSP_DRIVER`. It should be `//#define USE_BSP_DRIVER`.
- On *\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\Target\lorawan_conf.h*, you need to change the version of LoRaWAN to 1.0.3 which is the commonly used LNS version at the moment of this writing. To do this, you have to change LORAMAC_SPECIFICATION_VERSION to 0x01000300. It should look like this `#define LORAMAC_SPECIFICATION_VERSION 0x01000300`. However, if you are using LoRaWAN version 1.0.4 on your LNS, you do not need to perform this step since the DevNonce will be handled correctly.


##### Initial Build Test for the RAK3172 Custom Firmware

1. After doing the file modifications, the next step is to test if the **LoRaWAN_End_Node** example can be built without errors.

::: tip 📝 NOTE
If this is your first time using STM32CubeIDE, it shows **Information Center** by default. Just close it and access the project on the left panel.
:::

2. Open the STM32CubeIDE and click on `File` then `Open Projects from File System`.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_openproject.png"
  width="90%"
  caption="Open the Project in STM32CubeIDE"
/>

3. You then need to browse the project folder location by clicking the **Directory** button.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_open_dir.png"
  width="90%"
  caption="Locate the Project Directory in STM32CubeIDE"
/>

4. You should locate this directory `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node`. Click on **STM32CubeIDE** folder once, then click the **Select Folder**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_project_stm32cube.png"
  width="70%"
  caption="Select the STM32CubeIDE Project Folder"
/>

5. You should now see the **STM32CubeIDE** checked and ready to be imported as **Eclipse project**. If not checked, click the checkbox and then the **Finish** button. It will take some time to fully import the whole project.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_finalopen_project.png"
  width="70%"
  caption="Open the LoRaWAN_End_Node Project"
/>

6. After the successful import, you should now see the **LoRaWAN_End_Node** project structure on the left side of the STM32CubeIDE.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_initproject.png"
  width="90%"
  caption="Open the STM32CubeIDE Project"
/>

7. With the modified files already implemented, you can check if the files are updated by checking the startup file `startup_stm32wle5ccux.s` and the `radio_board_if.c`. The startup file must be updated and show `startup_stm32wle5ccux.s`. You should see `#if defined(RAK3172_RF_CHANNEL_SWITCH)` in line 72 of `radio_board_if.c` file, as shown in **Figure 42**. If not, then you are not successful in changing these files with the [Low Level Development required modification](/Product-Categories/WisDuo/RAK3172-Module/Low-Level-Development/#files-modification-needed-to-run-stm32wl-sdk-lorawan-examples-to-rak3172).

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_modfile.png"
  width="90%"
  caption="Open the STM32CubeIDE Project"
/>

8. The next step is to ensure that a bin file will be generated on your release build. Go to the properties and ensure that *Convert to binary file (-O binary)* is checked.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_bin_settings.png"
  width="90%"
  caption="Bin generation settings"
/>

9. You can now try to build the project by setting up the build configuration to release so that a `.bin` file will be generated.

::: tip 📝 NOTE
If you have an ST-LINK debugging tool, you can also choose **Debug** instead of **Release**.
:::

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_buildconfig.png"
  width="90%"
  caption="Configure Build to Release"
/>

10. After setting the build configuration, you are now ready to build the project. You should see a successful compilation and generation of a `.bin` file.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_rak3172_build.png"
  width="90%"
  caption="Build the Project"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_buildok.png"
  width="90%"
  caption="Successful Project Build"
/>

## Running the LoRaWAN_End_Node Example of STM32WL SDK on RAK3172

### Configuration to Connect the LoRaWAN Network Server

Once you have a working project and were able to build with no errors in the STM32CubeIDE, the next step is to configure the LoRaWAN parameters to be able to run **LoRaWAN_End_Node** example code with RAK3172.

1. First, you need to register the device to the network server. You can follow the guide on how to register a device in TTN V3 or Chirpstack using the procedure discussed in the [RAK3172 TTN V3 OTAA Quick Start Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#ttn-otaa-device-registration) or in the [RAK3172 Chirpstack OTAA Quick Start Guide](/Product-Categories/WisDuo/RAK3172-Module/Quickstart/#chirpstack-otaa-device-registration) respectively.

::: tip 📝 NOTE
By default, the **LoRaWAN_End_Node** example will work on the EU868 region. This is set in the `lora_app.h` that can be found in this location `/STM32Cube_FW_WL_V1.0.0/Projects/NUCLEO-WL55JC/Applications/LoRaWAN/LoRaWAN_End_Node/LoRaWAN/App/`(for v1.0.0) and `/STM32Cube_FW_WL_V1.2.0/Projects/NUCLEO-WL55JC/Applications/LoRaWAN/LoRaWAN_End_Node/LoRaWAN/App/`(for v1.2.0).
:::

2. To activate and connect your device via OTAA, you need to get the following parameters: **DEVEUI**, **APPEUI**, and **APPKEY**.

Once you successfully register your device to TTN V3, you should see those parameters, as shown in **Figure 47**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/ttn_v3_registration.png"
  width="60%"
  caption="OTAA device registration in TTN V3"
/>

3. With the device registered to TTN V3, you should edit the `se-identity.h` file to update the needed OTAA parameters. On the STM32CubeIDE, click **File** and select **Open File..**. You should navigate in this directory `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\App`(for v1.0.0) or `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\LoRaWAN\App`(for v1.0.0) to find the `se-identity.h`, then click Open.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_select_se_file.png"
  width="90%"
  caption="Open the File Needed to Modify with OTAA Parameters"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_open_se_file.png"
  width="60%"
  caption="Open the se-identity.h File"
/>

4. The `se-identity.h` header file must be updated with the common DEVEUI, APPEUI, and APPKEY parameters in the device registration on the network server. In this example, you can see that the `LORAWAN_DEVEUI_EUI`, `LORAWAN_JOIN_EUI`, and `LORAWAN_APP_KEY` are updated, as shown in **Figure 50**. These values are based on the TTN V3 registration in **Figure 47**.

The `LORAWAN_JOIN_EUI` is the same as the `App_EUI` in this guide which is the term that adheres to the **LoRaWAN Specification V1.1**.

::: tip 📝 NOTE
To ensure that your device work on both LoRaWAN versions (**LoRaWAN Specifications V1.0.x and V1.1**), make sure that the application rook key `LORAWAN_APP_KEY` and the network root key `LORAWAN_NWK_KEY` of the `se-identity.h` file are exactly the same. Else, you might encounter MIC-related errors while joining the network.

```c
/*!
 * Application root key
 */
#define LORAWAN_APP_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C

/*!
 * Network root key
 */
#define LORAWAN_NWK_KEY                                    2B,7E,15,16,28,AE,D2,A6,AB,F7,15,88,09,CF,4F,3C
```
:::

The macro `STATIC_DEVICE_EUI` is also updated to `1` instead of `0` since a generated DEVEUI in TTN V3 is used in this guide instead of the embedded DEVEUI of the device.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_modified_se_file.png"
  width="90%"
  caption="Modified se-identity.h File"
/>

::: tip 📝 NOTE
These parameters are usually set and code generated in the **.ioc** file via STM32CubeMX. But that method is not possible since a direct modification of the radio-related source files is done in this guide. Any further code generation via STM32CubeMX after the modifications in the previous steps in this guide will override all the changes that are required to run the LoRaWAN_End_Node project example RAK3172 module.
:::

### Generation of BIN file

With all the needed files modified and edited, you can now generate your `.bin` FW file and upload it to your RAK3172 module.

1. The first step is to clean first the project to remove any outdated binary files in the project folder then followed by building it. Sometimes **Build Project** is not clickable so you can use **Build All** as an alternative. You only have one project as of now so that should work fine as well.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_cleanbuild_project.png"
  width="90%"
  caption="Clean and Build the STM32CubeIDE Project"
/>

2. After a successful build, you should see in console **Finished building: LoRaWAN_End_Node.bin**. You should be able to see the generated `LoRaWAN_End_Node.bin` firmware file in this folder location `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Release`(for v1.0.0) or `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Release`(for v1.2.0). That bin file is the firmware binary that you need to upload to your RAK3172 module.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeide_buildok_project.png"
  width="90%"
  caption="Successful Build with BIN File for RAK3172"
/>

## Uploading the FW Generated Using STM32CubeProgrammer

The generated .bin FW file is ready to be uploaded to RAK3172.

To upload this binary file, you need to use STM32CubeProgrammer created by STMicroelectronics.

[Download the latest version STM32CubeProgrammer](https://www.st.com/en/development-tools/stm32cubeprog.html) and the one compatible with your computer.

In this guide, you will use the internal UART bootloader of the STM32WL and connect the RAK3172 to a USB to Serial converter tool like the RAKDAP1. You need to connect five pins: power supply pins (3.3&nbsp;V and GND), UART2 pins (TX and RX), and the Boot0 pin (connected to 3.3&nbsp;V), as shown in **Figure 53**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/RAK3172_boot0.png"
  width="55%"
  caption="RAK3172 Connection to USB-UART Converter with Boot0 Pin at 3.3V Level"
/>

::: tip 📝 NOTE
You can also use an ST-LINK to upload the `.bin` file to RAK3172.
:::

1. Once the hardware is now ready, you can open the STM32CubeProgrammer. Then you need to open the `LoRaWAN_End_Node.bin` FW file from this folder location `\STM32Cube_FW_WL_V1.0.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Release`(for v1.0.0) or `\STM32Cube_FW_WL_V1.2.0\Projects\NUCLEO-WL55JC\Applications\LoRaWAN\LoRaWAN_End_Node\STM32CubeIDE\Release`(for v1.2.0).

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_open.png"
  width="80%"
  caption="STM32CubeProgrammer Application"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_browse_bin.png"
  width="80%"
  caption="Locating the .bin Firmware File"
/>

2. If everything is successful, you should now see the `LoRaWAN_End_Node.bin` FW file in the STM32CubeProgrammer.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_loaded_bin.png"
  width="80%"
  caption="Loaded .bin Firmware File to the STM32CubeProgrammer"
/>

3. By default, the STM32CubeProgrammer chooses ST-LINK as the uploading interface, so you need to change it to UART and select the right COM port. After setting up the UART connection, you can now connect and see that the device is detected.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_uart.png"
  width="80%"
  caption="Selecting UART as Programming Interface"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_poart.png"
  width="80%"
  caption="Selecting the Right COM Port"
/>

4. You need to ensure that the `Boot0` is connected to VDD (3.3&nbsp;V) when the device is powered up, else, the STM32CubeProgrammer might not detect the device. The logs of a detected device are shown in **Figure 59**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_connected.png"
  width="80%"
  caption="RAK3172 Detected by STM32CubeProgrammer"
/>

5. If the device is detected by the STM32CubeProgrammer, you can now upload the firmware by clicking **Download**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_uploading.png"
  width="80%"
  caption="Firmware Uploading in Progress"
/>

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/stm32cubeprog_uploaded.png"
  width="80%"
  caption="Firmware Successfully Uploaded"
/>

6. After the successful download, restart the device and remove the connection of the Boot0 pin to VDD (3.3&nbsp;V), leaving you only with four-pin connections (power supply lines and UART2) as shown in **Figure 62**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/RAK3172_UART_Connection.svg"
  width="50%"
  caption="RAK3172 Connection to UART"
/>

7. By using Serial Terminal software, check the serial output logs of the RAK3172 with the newly uploaded FW with baud rate setting 115200. You should be able to see the serial logs, as shown in **Figure 63**.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/uart_logs.png"
  width="35%"
  caption="RAK3172 UART2 Logs"
/>

8. With the device registered to TTN, you should now see a successful join and LoRaWAN device uplink.

<rk-img
  src="/assets/images/wisduo/rak3172-module/low-level-development/ttn_join_success.png"
  width="90%"
  caption="RAK3172 in TTN V3 Join and Uplink"
/>

