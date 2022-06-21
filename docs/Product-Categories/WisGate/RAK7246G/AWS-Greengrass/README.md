---
rak_desc: Contains a comprehensive guide in setting up both your RAK7248 and Amazon Web Services account and permissions.It also includes instructions in connecting and configuring your LoRaWAN Gateway to the AWS IoT Greengrass v2.
rak_img: /assets/images/wisgate/rak7246g/quickstart/RAK7246_home.png
tags:
  - AWS
  - Greengrass
  - wisgate
  - RAK7246G
next: ../Supported-LoRa-Network-Servers/
prev: ../Quickstart/

---

# AWS IoT Greengrass v2

To learn more about AWS IoT GreengrassV2, refer to aws documentation to see [how it works](https://docs.aws.amazon.com/greengrass/v2/developerguide/how-it-works.html) and [what is new](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-v2-whats-new.html) about it.


## Set Up Your Development Environment

### Tools Installation (IDEs, Toolchains, SKDs)

- RAK7246 and RAK7246G are based on Raspberry Pi Zero (0) SBC. By default, the latest Raspbian OS based on Linux is used. More information and the available releases can be found [Raspberry Pi site](https://www.raspberrypi.com/software/).
- RAKwireless provides a ready-to-use image to be flashed on the SD card. You can find the latest firmware in the [RAK downloads](https://downloads.rakwireless.com/LoRa/NeoPi-Gateway-RAK7246/Firmware/RAK7246_Latest_Firmware.zip).
- If you want to compile the code that runs the gateway by yourself, you can find it in the [GitHub - RAKWireless/rak_common_for_gateway](https://github.com/RAKWireless/rak_common_for_gateway).
- The main service is the [LoRa packet forwarder](https://github.com/Lora-net/packet_forwarder).

For additional references, you can refer to the following RAK links:

- [**FAQ page**](https://docs.rakwireless.com/Knowledge-Hub/FAQs/)
- [**Community Forum**](https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs)


## Set Up Your Hardware

- A detailed description of components and interfaces can be found in the [RAK7246G Datasheet](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Datasheet/).
- [RAK7246G Quick Start Guide](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Quickstart/).
- Instructions on how to set up the new firmware can be found in the [Knowledge Hub](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Developer-Gateway-Firmware-Burning/).


## Set Up Your AWS Account and Permissions

Outlined steps in creating your account and permission are provided in this section. For in-depth instructions, refer to [Set up your AWS Account](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html) guide.

1. Sign up for an AWS account.
2. Create a user and grant permissions. 
3. Open the AWS IoT console

Pay special attention to the **Notes**.

## Create Resources in AWS IoT

Outlined steps in creating resources in AWS IoT are provided in this section. For in-depth instructions, refer to [Create AWS IoT Resources](https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html) guide. 

1. Create an AWS IoT Policy.
2. Create a thing object. 

Pay special attention to the **Notes**.

 
## Install the AWS Command Line Interface

Installing the CLI is needed to complete the instructions in this guide. To install the AWS CLI on your host machine, refer to the instructions found at the [Installing the AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) guide. 

Once you have installed AWS CLI, configure it as per the instructions in this [online guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config). Set the appropriate values for Access key ID, Secret access key, and AWS Region. You can set the output format to `json` if you prefer.


## Build a Linux Image with Greengrass Prerequisites

You can download the RAK7246 latest firmware with [AWS Greengrass V2](https://downloads.rakwireless.com/LoRa/AWS_GreengrassV2/), or build it by yourself.

::: tip 📝 NOTE
If you don’t need to build an image with Greengrass prerequisites, you can download and install the [RAK7246 latest firmware](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7246G/Datasheet/#firmware), and proceed to [Install and Configure](#install-and-configure) section.
:::


### Flash Raspberry Image to SD Card

1. Download the latest [Raspberry Pi OS Lite](https://www.raspberrypi.org/software/operating-systems/#raspberry-pi-os-32-bit).
2. Flash Raspberry Pi OS Lite to SD card. Download the [balenaEtcher](https://www.balena.io/etcher/) software. 
    - There are options for Windows, macOS, and Linux. Clicking the **Download** button will provide you with the software directly, no installation is required.
3. Flash Raspberry Pi OS Lite to SD Card.
    - For more information about the gateway firmware setup, refer to the [WisGate Developer Gateway Firmware Setup](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Developer-Gateway-Firmware-Burning/).


<rk-img
  src="/assets/images/wisgate/rak7246g/supported-lora-network-servers/aws/1.flash-raspberry-pi.png"
  width="80%"
  caption="Flashing Raspberry Pi OS Lite to SD card"
/>

### Enable SSH

To enable SSH, create an empty file called `ssh` under disk `boot`, where you will flash the image.

### Install and Configure

1. Insert the SD card into RAK7246 and power it on.
2. Use the `sudo raspi-config` command, enable the spi and i2c interface, disable login shell over serial, and enable serial port hardware.
3. Clone the installer and start the installation:
   ```bash
   $ sudo apt update; sudo apt install git -y
   $ git clone https://github.com/RAKWireless/rak_common_for_gateway.git
   $ cd ~/rak_common_for_gateway
   $ sudo ./install.sh
   ```
4. Next, you will see some messages as follow, and select the corresponding hardware model.
   ```bash
   Please select your gateway model
   *      1.RAK2245
   *      2.RAK7243/RAK7244 no LTE
   *      3.RAK7243/RAK7244 with LTE
   *      4.RAK2247(USB)
   *      5.RAK2247(SPI)
   *      6.RAK2246
   *      7.RAK7248 no LTE (RAK2287 SPI + raspberry pi)
   *      8.RAK7248 with LTE (RAK2287 SPI + LTE + raspberry pi)
   *      9.RAK2287 USB
   *      10.RAK5146 USB
   Please enter 1-10 to select the model:
   ```
5. Install the Java runtime, which AWS IoT Greengrass Core software requires to run. On your Raspberry Pi, use the following commands to install Java 8:
   ```bash
   $ sudo apt install -y openjdk-8-jdk
   ```
6. Run the following command to download the AWS IoT Greengrass Core software. Make sure you are in the home directory or switch to your home directory using `cd ~`.
   ```bash
   $ curl -s https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip > green
   ```
7. By downloading this software, you agree to the [Greengrass Core Software License Agreement](https://greengrass-release-license.s3.us-west-2.amazonaws.com/greengrass-license-v1.pdf).
8. Run the following command to unzip the software and remove the ZIP file. Replace **GreengrassInstaller** with the name of the destination folder.
   ```bash
   $ unzip greengrass-nucleus-latest.zip -d GreengrassInstaller && rm greengrass-nucleus-latest.zip
   ```

### Build the Image

1. Insert the SD card into your computer.
2. Use the following command to check where is your SD card mounted:
   ```
   sudo fdisk -l
   ```
3. Completely clone the SD card using the following command:
   ```bash
   $ sudo dd if=/dev/sdb of=RAK7246_with_greengrass_clone.img
   ```
4. Download **piShrink** to resize the complete SD card image.
    ```bash
    $ wget https://raw.githubusercontent.com/Drewsif/PiShrink/master/pishrink.sh     
    $ chmod +x pishrink.sh     
    $ sudo mv pishrink.sh /usr/local/bin  
    ```
5. To shrink the image, use the following command:
   ```bash
   $ sudo pishrink.sh RAK7246_with_greengrass_clone.img RAK7246_with_greengrass.img
   ```
6. Compress the image to `.zip`.

## Verify if Java is Available

1. Insert the SD card into the device.
2. Power on.
3. Once the system has booted, verify that Java is available using the command:
    ```bash
    java --version
    ```

## Install AWS IoT Greengrass

### Download the AWS IoT Greengrass Core Software

If Greengrass has not been included in the SD card image, you can download the latest Greengrass core software as follows:

   ```bash
   wget https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip
   ```

### Install the AWS IoT Greengrass Core Software

1. Unzip the AWS IoT Greengrass Core software to a folder on your device. Replace **GreengrassInstaller** with the folder that you want to use.
   ```bash
   unzip greengrass-nucleus-latest.zip -d *GreengrassInstaller*

   rm greengrass-nucleus-latest.zip
   ```
2. Verify the version of the AWS IoT Greengrass Core software:
   ```bash
   java -jar ./*GreengrassInstaller*/lib/Greengrass.jar --version
   ```
3. You will see the Greengrass version displayed - similar to: **AWS Greengrass v2.4.0**.

#### Provide Your Credentials

Run the following commands to provide the credentials to the AWS IoT Greengrass Core software:

   ```bash
   export AWS_ACCESS_KEY_ID=<the access key id for your account>

   export AWS_SECRET_ACCESS_KEY=<the secret access key for your account>
   ```

#### Run the Installer

1. Run the installer using the command provided. Modify the values as per your region, install directory, and set up the **thing** name. 
2. Use the `--provision true` option to have the installer set up the **thing** and required policies for you. If you prefer to configure Greengrass manually, see the [online guide](https://docs.aws.amazon.com/greengrass/v2/developerguide/manual-installation.html).
   ```bash
   sudo -E java -Droot="/greengrass/v2" -Dlog.store=FILE \

   -jar ./GGCoreInstall/lib/Greengrass.jar \

   --aws-region us-west-2 \

   --thing-name thing-name \

   --tes-role-name GreengrassV2TokenExchangeRole \

   --tes-role-alias-name GreengrassCoreTokenExchangeRoleAlias \

   --component-default-user ggc_user:ggc_group \

   --provision true \

   --setup-system-service true \

   --deploy-dev-tools true
   ```
3. If all goes well, you will see the following output on the device console:
    ```
    Successfully configured Nucleus with provisioned resource details!

    Configured Nucleus to deploy aws.greengrass.Cli component

    Successfully set up Nucleus as a system service
    ```
4. The local development tools, specified by the **`--deploy-dev-tools`** option, take some time to deploy. The following command can be used to check the status of this deployment:
   ```bash
   aws greengrassv2 list-effective-deployments --core-device-thing-name thing-name
   ```
5. When the status is SUCCEEDED, run the following command to verify whether the Greengrass CLI is installed and runs on your device. Replace `/greengrass/v2` with the path to the base folder on your device as needed.
   ```bash
   /greengrass/v2/bin/greengrass-cli help
   ```

## Create a Hello World Component

In Greengrass v2, components can be created on the edge device and uploaded to the cloud, or vice versa.

### Create the Component on Your Edge Device

To create, deploy, test, update, and manage a simple component on your device, refer to the following online guide: [**To create a Hello World component**](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html). 

### Upload the Hello World Component

To upload your component to the cloud, where it can be deployed to other devices as needed, refer to the following online guide: [Upload your component](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html).

## Debugging

If you experience any issues, you can check the logs located in the `**/var/log/**` directory. 

## Troubleshooting

If you are unable to `ssh` to the device:

1. Check that your Wi-Fi is connected to **RAKWireless_XXXX**.
2. Try ping **192.168.230.1**