---
rak_desc: WisToolbox Desktop tool is an application used for flashing and configuring the firmware of your RAK device.
rak_img: /assets/images/software-tools/wistoolbox/wtoolbox-category.png
tags:
  - wistoolboxdesktop
prev: ../Overview/ 
next: ../WisToolBoxMobile/
---


# WisToolBox for Desktop

## Installation

To use the WisToolBox Desktop, make sure you meet the two requirements:

1. A connected RAK device;
2. An active internet connection the first time after the WisToolBox app starts. The application will update the latest configuration.

The WisToolBox Desktop is available in Windows, macOS and Linux. 

  * [Windows](https://www.microsoft.com/store/productId/9P6691TTW3J5)
  * [Linux](https://snapcraft.io/wistoolbox)
  * [macOS](https://apps.apple.com/ua/app/wistoolbox-for-desktop/id1593008976?mt=12)

## Hardware Compatibility

The WisToolBox Desktop application is currently available only on RUI3 devices. It is compatible with the following RAK LPWAN modules:

| RAK Devices                                                                                            | 
| ------------------------------------------------------------------------------------------------------ | 
| [RAK4630](/Product-Categories/WisDuo/RAK4630-Module/Overview/)                                         | 
| [RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Overview/)                                          | 
| [RAK3172](/Product-Categories/WisDuo/RAK3172-Module/Overview/)                                         | 
| [RAK3272S](/Product-Categories/WisDuo/RAK3272S-Breakout-Board/Overview/)                             | 
| [RAK3372 / RAK3172 Evaluation Board](/Product-Categories/WisDuo/RAK3172-Evaluation-Board/Overview/)  | 
| [RAK3172-SiP](/Product-Categories/WisDuo/RAK3172-SiP/Overview/)                                        | 
| [RAK3272-SiP](/Product-Categories/WisDuo/RAK3272-SiP-Breakout-Board/Overview/)                         | 


## Open the WisToolBox Desktop

1. Power up your RAK device, then launch WisToolBox Desktop.
2. Click the **CONNECT DEVICE** button to launch WisToolBox Dashboard.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-initial.png"
  width="100%"
  caption="WisToolBox Desktop splash screen"
/>

3. In case of an error, the following screen, as shown in **Figure 2**, will appear.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/nodevice.png"
  width="100%"
  caption="WisToolBox Desktop error"
/>

Some possible causes of the **`No device detected`** error can be fixed as follows:

- Ensure that the device you are using has a RUI3 firmware on it. 
- Double check the quality of the USB cable and COM port used.
- Check if other terminal software is active and still connected to the RUI3 based RAK.


## Create RAK ID Profile

It is recommended to create a **RAK ID** profile. Your **RAK ID** profile will be stored in the cloud and can be synced on different PCs. You can only edit your details and preferences at the **RAK ID Portal**.

1. Click on the **RAK ID** icon.
<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/rak-id.png"
  width="100%"
  caption="WisToolBox Desktop RAK ID profile"
/>

2. Click on the **SIGN IN TO RAK ID** blue button.
<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/sign-in-desktop.png"
  width="100%"
  caption="WisToolBox Desktop RAK ID Sign in"
/>


## WisToolBox Dashboard

1. Review the **Connection settings** parameters on the dashboard, then click on the **CONNECT** button.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/conn-settings.png"
  width="100%"
  caption="WisToolBox Desktop connection settings"
/>

2. On the WisToolBox Dashboard screen, you can get the following information: 

-  List of connected devices. **(1)**
- The device model. **(2)**
- The device `EUI` value. **(3)**  <br> The `EUI` is a 64-bit globally-unique Extended Unique Identifier (EUI-64) assigned by the manufacturer, or the owner of the end-device. 
- The serial `COM` port used. **(4)** 

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/dashboard.png"
  width="100%"
  caption="WisToolBox Desktop dashboard screen"
/>

### Parameters

**Figure 7** shows the **PARAMETERS** section of the dashboard. The **Sync** icon highlighted on the upper right will refresh the data and get the latest AT command return values if the tool shows not updated values.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/dash-param.png"
  width="100%"
  caption="WisToolBox Desktop dashboard parameters"
/>

**Figure 8** shows the **Global Settings** parameters section.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/glob-param.png"
  width="100%"
  caption="WisToolBox Desktop dashboard global parameters"
/>

**Figure 9** shows the LoRaWAN keys, ID, and EUI parameters section.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/keys-param.png"
  width="100%"
  caption="WisToolBox Desktop dashboard LoRaWAN keys, ID, and EUI parameters"
/>

If you change the value of any parameter, then the **APPLY COMMAND** button will appear. Click on the button to update the new value on the RAK device.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/apply-cmd.png"
  width="100%"
  caption="WisToolBox Desktop dashboard apply command"
/>

**Figure 11** shows that the command was applied successfully. Click on the **CLOSE** button to return to Dashboard. 

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/apply-success.png"
  width="100%"
  caption="WisToolBox Desktop dashboard apply command result"
/>


### Advanced

1. The **ADVANCED** option allows access to the RAK module ADVANCED commands. From the dashboard menu, select the installed module, as shown in **Figure 12**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-conn.png"
  width="100%"
  caption="WisToolBox Desktop connected device"
/>

2. Then click on the **ADVANCED** option.
<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/module-info.png"
  width="100%"
  caption="WisToolBox Desktop module details"
/>

3. **Figure 14** shows the advanced commands.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-adv.png"
  width="100%"
  caption="WisToolBox Desktop advanced commands"
/>

## WisToolBox Templates

Use a template to define your LoRa preferences and apply them to RAK devices. If you sign in using a RAK ID, the templates are stored in the cloud and can be synced on different PCs.

1. Click on the **+ NEW TEMPLATE** button to create a template. 

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-new-template.png"
  width="100%"
  caption="WisToolBox Desktop new template screen"
/>

2. Place the mouse pointer over the **TEMPLATE DEVICE** window and use the mouse scroll button to view the complete list of devices.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-devices.png"
  width="100%"
  caption="WisToolBox Desktop template device list"
/>

3. Choose the RAK device to use in the new template.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-scroll.png"
  width="100%"
  caption="WisToolBox Desktop template scroll list"
/>

4. Now type a name for your new template. Then click on the highlighted icons and fill in the template parameters.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-fill.png"
  width="100%"
  caption="WisToolBox Desktop template fill parameters"
/>

### Global Settings Parameters

5. **Figure 19** shows the existing parameters on Global Settings Template.

Choose the **Network mode**, **Join mode**, and **LoRa Active Region**. The Join Mode is configured on your LoRa gateway.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/global-settings.png"
  width="100%"
  caption="WisToolBox Desktop Template Global Settings parameters"
/>

### LoRaWAN Keys, ID, EUI Template Parameters

6. **Figure 20** shows the existing parameters on LoRaWAN keys, ID, and EUI Template.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/keys-settings.png"
  width="100%"
  caption="WisToolBox Desktop Template LoRaWAN keys, ID, and EUI parameters"
/>

The **Application EUI** and **Application key** parameters have been configured on your LoRaWAN gateway. If you do not have a Device EUI, then use the QR code printed on the sticker of your RAK device.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/rak-qrcode.png"
  width="100%"
  caption="Device EUI QR code"
/>

7. To finish creating the template, click on the **SAVE TEMPLATE** button. The next time you launch the WisToolBox Desktop, the saved template will appear in the list of templates.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-save.png"
  width="100%"
  caption="WisToolBox Desktop Template fill parameters"
/>

 

## WisToolBox Firmware

1. From the dashboard window, select the **FIRMWARE** menu, as shown in **Figure 23**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-firmware.png"
  width="100%"
  caption="WisToolBox Desktop Firmware Menu"
/>

2. Click on **INSTALLED** button to check details about the actual firmware version.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/fw-installed.png"
  width="100%"
  caption="WisToolBox Desktop current firmware"
/>

3. **Figure 25** shows the details of features added and changed in the current version.
4. Click on `UPGRADE DEVICE` button to install a new firmware version.

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/fw-upgrade.png"
  width="100%"
  caption="WisToolBox Desktop upgrade device"
/>

### Custom Firmware

You can try **Custom Firmware** by compiling your application using Arduino IDE. The Custom Firmware is the binary `.bin` file generated by Arduino IDE. The file must be compressed (zipped).

<rk-img
  src="/assets/images/software-tools/wistoolbox/desktop/wtoolbox-custom.png"
  width="100%"
  caption="WisToolBox Desktop Custom Firmware"
/>