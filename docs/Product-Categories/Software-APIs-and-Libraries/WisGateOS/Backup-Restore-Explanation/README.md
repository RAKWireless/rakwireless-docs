---
rak_img: /assets/rakwireless/rak-blue-dark.png
rak_desc: This tutorial shows how to create a backup for the current setup or use one to restore the settings to a previous setup.
rak_grp: software-apis-and-libraries
prev: ../Wi-Fi-Modes-Configuration/
next: ../Reboot-Process/
tags:
    - wisgate
---


# Backup / Restore

In this section, you can create a backup for the current setup or use one to restore the settings to a previous setup. By clicking on the **Generate archive** button, an archive will be downloaded on your PC. This is the backup file; it can be used for restoring your setup to the current settings at any time. Inside the archive, there are subfolders where you can find a variety of config files for the system like for example config, lorasrv, mosquitto, opkg.conf, and others.


## Perform Reset

The **Perform reset** button will reset all settings and customizations to their default values. A confirmation pop-up will appear. Selecting **Ok** will start the process.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument2/47.1.perform-reset-confirmation.png"
  width="100%"
  caption="Perform Reset Confirmation"
/>


## Restore Backup

From the **Restore backup** utility, you can use a backup archive to upload and restore previous settings to the gateway. Press the **Choose File** button, then select your archive and click **Upload archive…**. A progress window will appear and when the process is done the user will be able to log in again into the gateway’s Web UI.


<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument2/47.2.restoring.png"
  width="100%"
  caption="Restoring a Backup Process"
/>


## Flash new firmware image 

This section contains only one tool that allows you to flash new firmware images to the gateway. The **Keep settings** option will keep the settings of the gateway as they are at that moment. If not active, the default firmware settings will be used.


::: tip 📝 NOTE
When this option is off, all of your data kept on the gateway will be lost during the flashing. All settings will be set to their default values. 
:::

To use this utility, click on the **Choose File** button and then click **Flash firmware**. After this, you will see a Checksum, as well as the size of the file, and a message if the configuration will be kept or not. If you are sure that you want to flash the file, select **Proceed**. 

Once the process is complete, you can now log in to the Web UI again.

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument2/47.3.firmware-flashing-information.png"
  width="100%"
  caption="Firmware Flashing Information"
/>

<rk-img
  src="/assets/images/software-apis-and-library/wisgateos/subdocument2/47.4.flashing-firmware-process.png"
  width="100%"
  caption="Flashing Firmware Process"
/>