---
next: ../Troubleshooting/
prev: ../Quickstart/
tags:
  - RAK-Hotspot-Miner
  - Backup
---

# SD Card Backup

## Prerequisites

### What Do You Need?

1. **RAK Hotspot Miner**
2. USB microSD Card Reader
3. 32GB or larger microSD Card (optional, to store the backup). To maintain similar performance we recommend a UHS-I compliant microSD card, for example Sandisk&trade; High Endurance or Extreme.


### Power Down the RAK Hotspot Miner

:::warning ⚠️ WARNING
Take care in removing the microSD card from the Hotspot Miner. It is fragile; hence, using small pliers is highly recommended.
:::

1. Disconnect the RAK Hotspot Miner from the power supply. It needs to be off.
2. Extract the microSD card from the Hotspot Miner slot.
3. Insert the microSD into the USB microSD card reader.


## SD Clone for macOS

1. Start by downloading [SD Clone](https://twocanoes.com/products/mac/sd-clone/).

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/1.png"
  width="100%"
  caption="Download SD Clone"
/>

<!-- ![](/assets/images/wisgate/rak-hotspot-miner/backup/mac/1.png) --->

2. Once downloaded, open the application. You will be prompted to either buy the full version or continue using the trial (select this option).

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/2.png"
  width="100%"
  caption="Selecting Clone Trial or Buy Option"
/>


### Image Backup

1. Insert you card, and if you receive the message in the following figure, click "OK".

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/3.png"
  width="100%"
  caption="SD Clone Authentication"
/>


2. Next, the application will request access to your SD storage, then click "**OK**" in both windows.


<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/4.png"
  width="100%"
  caption="Accessing SD Storage"
/>

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/5.png"
  width="100%"
  caption="Allowing SD Clone to Access Files"
/>

3. Select the "Save Image" button, followed by clicking the "**Save Image...**" button.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/6.png"
  width="100%"
  caption="Save Image"
/>


4. This will prompt a window where you select the location you want your image to be created at. Once you click on the blue "Save" button, backup process will start.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/7.png"
  width="100%"
  caption="Selecting File Folder"
/>

5. A bar will be displayed indicating the cloning progress in percentage.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/8.png"
  width="100%"
  caption="Ongoing Cloning Process"
/>

6. A notification window will prompt once the cloning is done. In this example, it took around 40 minutes to back up a 32&nbsp;GB card housing a Helium Hotspot Miner image.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/9.png"
  width="100%"
  caption="Clone Complete"
/>

### Restoring Image

1. If you want to restore an image, you must first select the storage drive.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/10.png"
  width="100%"
  caption="Selecting Storage Device"
/>

2. Select the image in the side panel.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/11.png"
  width="100%"
  caption="Selecting Image"
/>

3. Press the "**Restore to Volume...**" button. You will be asked one last time in a new window to confirm; do so by clicking the "**Restore**" button, and you will initiate the process.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/mac/12.png"
  width="100%"
  caption="Restoring Image to Volume"
/>

## Win32 Disk Imager for Windows OS

1. Start by downloading [**Win32 Disk Imager**](https://win32diskimager.download/download-win32-disk-imager/). Unzip the archive and install.

2. Once done, you should see the same window as shown in Figure 12. The interface is minimalistic and easy to use.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/1.png"
  width="45%"
  caption="Downloading Win31 Disk Imager"
/>


### Image Backup

1. First, select the drive letter corresponding to the drive where your card is. This is where the image will be copied from.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/2.png"
  width="45%"
  caption="Selecting Storage Device"
/>


2. Next, you need to provide a path to the file the data is going to be backed in. You can do this either by entering it manually in the text box or clicking the folder icon.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/3.png"
  width="45%"
  caption="Selecting Image File Path"
/>

3. If you choose the second option, you need to navigate to the location and still enter a name in the text box. Make sure you add the "**img**" extension to the file, then click the "**Open**" button.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/4.png"
  width="70%"
  caption="Entering Image File Name"
/>

4. Finally, with the path and filename set, start the backup process by pressing the "**Read**" button.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/5.png"
  width="45%"
  caption="Start the Backup Process"
/>

5. The progress bar will start filling up, indicating the level of completion of the procedure. Depending on your image size and cad speeds, the time to completion will vary, so be patient.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/6.png"
  width="45%"
  caption="Ongoing Backup Process"
/>

### Restoring Image

The restoration procedure is even more streamlined than the backup.

1. Select the drive you want to flash the backup file to. Make sure you have the correct drive letter.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/7.png"
  width="45%"
  caption="Selecting Storage Device"
/>

2. Navigate to your file either via the folder button or directly enter the a path in the text box.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/8.png"
  width="45%"
  caption="Selecting Image File Location"
/>

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/9.png"
  width="70%"
  caption="Locating the Image File Path"
/>

3. Confirm at the prompt with the "**Yes**" button.

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/10.png"
  width="30%"
  caption="Start the Restoring Process"
/>

4. You can monitor progress via the bar. Wait for the process to finish, and you are done. 

<rk-img
  src="/assets/images/wisgate/rak-hotspot-miner/backup/win/11.png"
  width="45%"
  caption="Ongoing Restoring Process"
/>