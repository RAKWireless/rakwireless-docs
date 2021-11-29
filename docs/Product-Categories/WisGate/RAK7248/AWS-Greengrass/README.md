---
rak_desc: Contains a comprehensive guide in setting up both your RAK7248 and Amazon Web Services account and permissions. 
rak_img: /assets/images/wisgate/rak7248/overview/RAK7248_home.png
tags:
  - AWS IoT Greengrass
  - wisgate
  - RAK7248
next: ../Datasheet/
prev: ../Supported-LoRa-Network-Servers/
---

# AWS IoT GreengrassV2

To learn more about AWS IoT GreengrassV2, see [how it works](https://docs.aws.amazon.com/greengrass/v2/developerguide/how-it-works.html) and [what's new](https://docs.aws.amazon.com/greengrass/v2/developerguide/greengrass-v2-whats-new.html).

## Set Up Your Development Environment

### Tools Installation (IDEs, Toolchains, SDKs)

- RAK7248 is based on Raspberry Pi 4 SBC. By default, the latest Raspbian OS based on Linux is used. More information and the available releases can be found [here](https://www.raspberrypi.com/software/).
- RAKwireless provides ready to use image to be flashed on the SD card [here](https://downloads.rakwireless.com/LoRa/AWS_GreengrassV2/RAK7248-AWS-GreengrassV2.zip).
- The main service is the LoRa packet forwarder. It can be found [here](https://github.com/Lora-net/packet_forwarder).

### Additional Software References

- Our [FAQ page](https://docs.rakwireless.com/Knowledge-Hub/FAQs/)
- Our [Community Forum](https://forum.rakwireless.com/?utm_source=Docs&utm_medium=Docsheader&utm_campaign=RAKDocs)

## Set Up Your Hardware

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/greengrass/1.hardware-setup.png"
  width="70%"
  caption="RAK7248 Interfaces"
/>

- A detailed description of components and interfaces can be found in the Datasheet [here](https://docs.rakwireless.com/Product-Categories/WisGate/RAK7248/Datasheet/#overview).
- The required power supply is a 5 V/3A USB C that is not included in the package. The device only comes with a USB cable and no adapter. There are no battery options.
- The device has only one LED indicator that flashes green when there is activity.
- The latest firmware version can be found [here](https://downloads.rakwireless.com/LoRa/RAK7248/Firmware/RAK7248_Latest_Firmware.zip).
- Instructions on how to set up the new firmware can be found [here](https://docs.rakwireless.com/Knowledge-Hub/Learn/WisGate-Developer-Gateway-Firmware-Burning/).

## Setup Your AWS Account and Permissions

Refer to the instructions found at the [Set up your AWS Account](https://docs.aws.amazon.com/iot/latest/developerguide/setting-up.html) guide. Follow the steps outlined in these sections to create your account and a user and get started:

1. Sign up for an AWS account.
2. Create a user and grant permissions. 
3. Open the AWS IoT console. 

**Pay special attention to the Notes.**

## Create Resources in AWS IoT

Refer to the instructions found at the [Create AWS IoT Resources](https://docs.aws.amazon.com/iot/latest/developerguide/create-iot-resources.html) guide. Follow the steps outlined in these sections to provision resources for your device:

1. Create an AWS IoT Policy.
2. Create a thing object. 

**Pay special attention to the Notes.**


## Install the AWS Command Line Interface

To install the AWS CLI on your host machine, refer to the instructions found at the [Installing the AWS CLI v2](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html) guide. Installing the CLI is needed to complete the instructions in this guide.

Once you have installed AWS CLI, configure it as per the instructions in this [online guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html#cli-configure-quickstart-config). Set the appropriate values for Access key ID, Secret access key, and AWS Region. You can set the output format to "json" if you prefer.



## Install AWS IoT Greengrass

### Flash Raspberry Image to SD Card

1. Download the [RAK7248-AWS-GreengrassV2](https://downloads.rakwireless.com/LoRa/AWS_GreengrassV2/RAK7248-AWS-GreengrassV2.zip) image.
2. Download the [balenaEtcher ](https://www.balena.io/etcher/)software. There are options for Windows, macOS, and Linux. Clicking the **Download** button will provide you with the software directly, no installation is required.
3. Flash image to SD Card. 

<rk-img
  src="/assets/images/wisgate/rak7248/supported-lora-network-servers/greengrass/2.etcher.jpg"
  width="70%"
  caption="Flashing Raspberry Pi Image"
/>
### Download the AWS IoT Greengrass Core Software

1. Greengrass has already been included in the SD card image, its directory is **~/greengrass-nucleus**.

You can also download the latest Greengrass core software and install it with commands as follows:

```bash
 $ rm ~/greengrass-nucleus -rf  
 $ wget  https://d2s8p88vqu9w66.cloudfront.net/releases/greengrass-nucleus-latest.zip  
 $ unzip greengrass-nucleus-latest.zip -d  ~/greengrass-nucleus  
 $ rm greengrass-nucleus-latest.zip 
```

2. Verify the version of the AWS IoT Greengrass Core software:

```bash
 $ java -jar  ~/greengrass-nucleus/lib/Greengrass.jar --version    
```

3. You will see the Greengrass version displayed - similar to: **AWS Greengrass v2.4.0**.

#### Provide Your Credentials

Run the following commands to provide the credentials to the AWS IoT Greengrass Core software.

```bash
export AWS_ACCESS_KEY_ID=<the access key id for your account>
```

```bash
export AWS_SECRET_ACCESS_KEY=<the secret access key for your account>
```

#### Run the Installer

1. Run the installer as shown below. Modify the values as per your region, install directory, and thing name. 
2. Use the **--provision true** option to have the installer set up the "thing" and required policies for you. If you prefer to configure Greengrass manually, see the [online guide](https://docs.aws.amazon.com/greengrass/v2/developerguide/manual-installation.html).

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

4. The local development tools (specified by the --deploy-dev-tools option) take some time to deploy. The following command can be used to check the status of this deployment:

```bash
aws greengrassv2 list-effective-deployments --core-device-thing-name thing-name
```

5. When the status is SUCCEEDED, run the following command to verify that the Greengrass CLI is installed and runs on your device. Replace /greengrass/v2 with the path to the base folder on your device as needed.

```bash 
/greengrass/v2/bin/greengrass-cli help
```

## Create a Hello World Component

In Greengrass v2, components can be created on the edge device and uploaded to the cloud, or vice versa.

### Create the Component on Your Edge Device

Follow the instructions online under the section [To create a Hello World component](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html) to create, deploy, test, update and manage a simple component on your device.

### Upload the Hello World Component

Follow the instructions online at [Upload your component](https://docs.aws.amazon.com/greengrass/v2/developerguide/getting-started.html) to upload your component to the cloud, where it can be deployed to other devices as needed.


## Debugging

If you experience any issues, you can check the logs located in the **/var/log/** directory. 

## Troubleshooting

If you are unable to ssh to the device:

1. Check that your Wi-Fi is connected to **RAKWireless_XXXX**.
2. Try ping **192.168.230.1**
