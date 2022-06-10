---
rak_desc: WisToolbox Mobile tool is used for flashing and configuring the firmware of your RAK device.
rak_img: /assets/images/software-tools/wistoolbox/wtoolbox-category.png
tags:
  - wistoolboxmobile
prev: ../WisToolBoxDesktop/ 
next: false
---


# WisToolBox Mobile

## Installation

To use the WisToolBox Mobile app, make sure you meet the three requirements:

1. A RAK device that has a Bluetooth Low Energy (BLE) interface;
2. A mobile with WisToolBox mobile app installed, which is available both in iOS App Store and Android Google Play Store;
3. An active internet connection the first time after the WisToolBox app starts. The application will update the latest configuration.


## Hardware Compatibility

The WisToolBox Mobile application is currently available for RAK463x RUI3 devices. It is compatible with the following RAK LPWAN modules:

| RAK Devices                                                                      | 
| -------------------------------------------------------------------------------- | 
| [RAK4630](/Product-Categories/WisDuo/RAK4630-Module/Overview/)                   | 
| [RAK4631-R](/Product-Categories/WisBlock/RAK4631-R/Overview/)                    | 

## Open the WisToolBox Mobile

1. Power up your RAK device then launch WisToolBox application on mobile.
2. Press the reset button on the RAK device and click on the **CONNECT DEVICE** button.
3. Press the **ALLOW** button to turn on BLE and start the scan. Look for a BLE Device named **RAK.XXXXXX** in the scan list of the app.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/mobile-connect-1-2.png"
  width="100%"
  caption="WisToolBox Mobile connect device"
/>


::: tip 📝 NOTE
By default, the BLE advertising of the RAK device is turned off automatically if no connection is established after 30 seconds. Connect to the RAK device immediately after pressing the reset button.

Some Android smartphones require GPS enabled to permit connection to BLE. When GPS is enabled, no sensitive information is used or shared with the application.

:::

3. When the RAK device is found, connect and pair the device by clicking the green button. Then wait for data synchronization.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/ble-scan-3-4.png"
  width="100%"
  caption="WisToolBox Mobile BLE scan"
/>


4. When the Data synchronization is completed, you will see the **DEVICE INFO** screen.


<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/ble-sync-5-6.png"
  width="100%"
  caption="WisToolBox Mobile BLE is connected"
/>


6. In case of an error, it will show **No devices found**, as seen in **Figure 4**. Then you need to redo the steps again from step 1.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/ble-scan-error.png"
  width="70%"
  caption="WisToolBox Mobile BLE scan error"
/>


## Create RAK ID Profile


It is recommended to create a **RAK ID** profile. Your **RAK ID** profile will be stored in the cloud and can be synced on different PCs. You can only edit your details and preferences at the **RAK ID Portal**.

1. First, click on the **More** menu icon, and select **Sign in**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/rak-id-1-2.png"
  width="100%"
  caption="WisToolBox Mobile RAK ID menu"
/>

2. Lastly, click on the **SIGN IN WITH RAK ID** button.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/create-id.png"
  width="70%"
  caption="WisToolBox Mobile create RAK ID profile"
/>

## Parameters

### Global Settings Parameters

**Figure 7** shows the **Global Settings** parameters section.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/global-param.png"
  width="70%"
  caption="WisToolBox Global Settings parameters"
/>

###  LoRaWAN Keys, ID, EUI Parameters

**Figure 8** shows the **LoRaWAN keys, ID, EUI** parameters section.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/keys-param.png"
  width="70%"
  caption="WisToolBox LoRaWAN Keys, ID, EUI parameters"
/>

If you change the value of any parameter, then you have a new command in a queue, and a button will appear. 

1. Click on the button to update the new value on the RAK device.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/cmd-queue.png"
  width="70%"
  caption="WisToolBox Command in queue"
/>

2. Now wait up to a minute for command reply.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/apply-progress.png"
  width="70%"
  caption="WisToolBox Applying Command progress"
/>

## Advanced Mode Commands

1. The Advanced Mode commands are available from the **DEVICE INFO** menu shown in **Figure 11**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/adv-menu.png"
  width="70%"
  caption="WisToolBox Mobile Advanced commands menu"
/>

2. Click on **Advanced Mode Commands** button to check the Advanced commands.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/adv-1-2.png"
  width="100%"
  caption="WisToolBox Mobile Advanced commands"
/>


## WisToolBox Mobile Templates

You can save the LoRa parameters used in your application in a template. It is also possible to create multiple templates for different projects and applications. If you sign in using a RAK ID, the templates are stored in the cloud.

1. To create a new template, select **Templates** icon, then click on **NEW TEMPLATE** button.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/mobile-template.png"
  width="70%"
  caption="WisToolBox Mobile Templates"
/>


2. Type a Template name on the text area, then click on **NEXT** button.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/template-name.png"
  width="70%"
  caption="WisToolBox Mobile template name"
/>

3. On the Template device list, choose **RAK4630**, then click on the **CREATE TEMPLATE** button. The RAK3172 modules are not supported by WisToolBox mobile.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/template-device.png"
  width="70%"
  caption="WisToolBox Mobile new template"
/>

4. In **Figure 16**, the template named `otaa_us915` was created. The parameters screen shows all available LoRa parameters for the template.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/template-params.png"
  width="70%"
  caption="WisToolBox Mobile Template parameter"
/>

5. To select a specific parameter set, click on some icons highlighted in red.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/template-select.png"
  width="70%"
  caption="WisToolBox Mobile select parameter"
/>

6. The screen below shows the Global settings parameters for **`otaa_us915`** template. After filling all the parameters, click on the **SAVE TEMPLATE** button.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/global-settings.png"
  width="70%"
  caption="WisToolBox Mobile fill Global settings params"
/>

7. The saved template `otaa_us915` appears listed, as seen in **Figure 19**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/saved-templates.png"
  width="70%"
  caption="WisToolBox Mobile saved templates"
/>

## WisToolBox Firmware

1. To select the Firmware menu, click the **More** menu, as shown in **Figure 20**.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/more-menu.png"
  width="70%"
  caption="WisToolBox Mobile More menu"
/>

2. The **Information and Settings** screen shows if there are any firmware updates. Click on **Update Available** to get more information.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/fw-menu.png"
  width="70%"
  caption="WisToolBox Mobile Information and Settings"
/>

3. New firmware version details are displayed. Click on the **UPDATE NOW** button to flash the newer version.

<rk-img
  src="/assets/images/software-tools/wistoolbox/mobile/fw-update.png"
  width="70%"
  caption="WisToolBox Mobile Firmware Update"
/>
