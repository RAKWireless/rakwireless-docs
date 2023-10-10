---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4631. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device. Aside from the hardware configuration, it also contains a software setup that includes detailed example codes that will help you get started.
rak_img: /assets/images/wisblock/rak4631/RAK4631.png
prev: ../Quickstart/
next: ../Datasheet/
tags:
  - RAK4631
  - Amazon
  - Sidewalk
---

# RAK4631 Amazon Sidewalk Starter Kit

The Sidewalk Starter Kit simplifies the setup and testing of a RAKwireless device with Amazon Sidewalk. It comes with all of the necessary hardware, including a temperature and humidity sensor. There are also tools for flashing the Amazon Sidewalk firmware onto the device.

Amazon Sidewalk is a free-to-connect community network that provides secure and reliable connectivity for billions of devices. The Sidewalk Starter Kit is based on the WisBlock Core RAK4631, which incorporates the WisDuo RAK4630 Stamp Module. Furthermore, Amazon has certified the RAK4630 as a Sidewalk-compatible device, implying that it can be used to easily build Sidewalk devices.

The WisBlock modules in the kit eliminate the need for a prototype board. Just plug the modules together and power them via a USB port or another power source.

:::warning ⚠️ WARNING
Amazon Sidewalk is only available in selected areas in the USA, including the testing or use of a Sidewalk device. Check out the coverage map at [Amazon Sidewalk Coverage.](https://coverage.sidewalk.amazon/)
:::

::: tip 📝 NOTE
To connect the device to the Sidewalk network, an Amazon Sidewalk compatible device is required. Check the [Amazon Sidewalk Documentation](https://docs.sidewalk.amazon/introduction/sidewalk-gateways.html) for more information.
:::

# Quick Start Guide


This guide will help you test a RAK4630-based device with Amazon Sidewalk, including sensor data visualization in AWS. It offers fast access to connect the RAK4630 to Amazon Sidewalk. Also, it comes with pre-compiled firmware that you can flash on our WisBlock Core module.

The application used in this guide is based on the Nordics Sidewalk Sensor Monitoring example code and changed to work with the WisBlock RAK4631 Core module (nRF52840 + SX1262 LoRa transceiver) and the RAK1901 temperature and humidity sensor.

For details about the Sidewalk application for RAK4630, refer to [RAK4630-Amazon-Sidewalk-Example repo.](https://github.com/RAKWireless/RAK4630-Amazon-Sidewalk-Example)

## Prerequisite

### What Do You Need?

Before going through each and every step of using the RAK4631 Amazon Sidewalk Starter Kit, make sure to prepare the necessary items listed below:

#### Hardware

1. [Sidewalk Starter Kit](https://store.rakwireless.com/products/rak4631-lpwan-node?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)
      -	RAK4631 WisBlock Core module
      -	RAK19007 WisBlock Base Board
      -	RAK1901 Temperature and Humidity sensor
      -	USB cable
      -	BLE and LoRa antennas
2. [RAKDAP1 DAPlink adapter to flash the demo firmware to the RAK4631](https://store.rakwireless.com/products/daplink-tool?utm_source=RAK4631WisBlockLPWANModule&utm_medium=Document&utm_campaign=BuyFromStore)

#### Other Requirements

To test the Sidewalk Starter Kit, the following environment is required:

1. AWS Account
2. The location is in the coverage area of Amazon Sidewalk in the US. Check the coverage map in the [Amazon Sidewalk Coverage](https://coverage.sidewalk.amazon/)
3. An Amazon Sidewalk-compatible device is required. You can find a list of compatible devices in the [Amazon Sidewalk Documentation](https://docs.sidewalk.amazon/introduction/sidewalk-gateways.html)
4. The Amazon Sidewalk compatible device connected to the internet and within the coverage of Sidewalk
6. Mobile phone with the Alexa app, to set up the Echo
   - Should be a US Amazon account with a US internet connection

## Product Configuration

### AWS Setup

Before anything else, set up AWS to receive the sensor data and display them.

#### Sign Up for an AWS Account

Here are the steps to follow to create your AWS account:

1. Go to the [AWS Amazon website.](https://portal.aws.amazon.com/billing/signup#/start/email)
2. Sign up and fill in your account information.
3. Click on **Verify email address** to receive a verification code in your email address.
4. Check your email and enter the verification code, then click **Verify**.
5. Create a strong password for your [root user](https://docs.aws.amazon.com/accounts/latest/reference/root-user.html), then click **Continue**.
6. Choose either **Business** or **Personal** account. Both account types have the same features and functions.
7. Read and accept the [AWS Customer Agreement.](https://aws.amazon.com/agreement/) It's important to read and understand the terms of the agreement before accepting it.
8. Click **Continue**. You'll receive an email message to confirm that your AWS account is ready to use.

:::tip 📝 NOTE
You can sign in to your new account by using the email address and password you provided during sign up. However, you can't use any AWS services until you finish activating your account.
:::

9. Enter your payment method and click  **Verify and Continue**. If you wish to use a different billing address, select **Use a new address**. You can't proceed with the sign-up process until you add a valid payment method.
10. Choose your country or region code from the list and enter your phone number, which should be reachable in the next few minutes.
11. Enter the code displayed in the CAPTCHA and submit it.
12. Once the automated system contacts you, enter the PIN you receive and submit it.
13. Choose one of the available AWS Support plans. For a detailed description of the plans and their benefits, refer to [Compare AWS Support plans](https://aws.amazon.com/premiumsupport/features).
14. Click on **Complete sign up**. A confirmation page will appear, indicating that your account is being activated.
15. Check your email and spam folder for a confirmation message that your account has been activated. The activation process usually takes a few minutes, but it can sometimes take up to 24 hours.

#### Create an Administrative User

1. Create an administrative user so that you don't use the root user for everyday tasks.
2. Sign in to the AWS Management Console as the account owner by choosing Root user.
3. Go to Identity and Access Management (IAM).

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-1.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

4. Click **Users** then **Create user**

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-2.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

5. Enter your **user name**, then **Next**.
6. Under **Set permissions**, navigate to the following fields, then click **Next**:
   - **Permissions options**: Select **Attach policies directly**.
   - **Permission policies**: Choose **AdministratorAccess**

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-3.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

7. Once done setting up the user details and permission, you will be redirected to **Review and create** page. Check the details, and then click **Create user**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-4.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

8. Select the user you just created and click the **Security credentials** tab.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-5.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

9. Under the **Access keys** section, click **Create access key**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-6.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

10. In the **Use case** page, select **Command Line Interface (CLI)**, then click **Next**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-7.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

<!-- Where's the Description tag? -->

11. Add a description in the **Description tag**.
12. Click **Create access key**.
13. Download the generated *.csv* file with the access key. This key will be needed later.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-8.png"
  width="100%"
  caption="AWS Admin User Creation"
/>

#### Deployment of the Infrastructure and the Device Profile

1. Download and install Python 3.6 or above from [Python.org](https://www.python.org/). For the installation steps, refer to the [Sidewalk documentation](/Product-Categories/WisBlock/RAK4631/Sidewalk/#python-3-installation).
2. Install AWS CLI. Execute the listed commands depending on your OS:
   - Linux :
      - `curl "https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip" -o "awscliv2.zip"`
      - `unzip awscliv2.zip`
      - `sudo ./aws/install`
   - macOS :
      - `curl "https://awscli.amazonaws.com/AWSCLIV2.pkg" -o "AWSCLIV2.pkg"`
      - `sudo installer -pkg AWSCLIV2.pkg -target /`
   - Windows :
      - `C:\> msiexec.exe /i https://awscli.amazonaws.com/AWSCLIV2.msi`

3. Configure AWS credential:
   - **Linux** and **macOS**
      - Create the credentials file.
        - Location: `~/.aws/credentials`.
        - Content :
            - `[default]`
            - `aws_access_key_id = YOUR_ACCESS_KEY`
            - `aws_secret_access_key = YOUR_SECRET_KEY`
      - Create the region file.
        - Location: ``~/.aws/config``.
        - Content :
            - `[default]`
            - `region=us-east-1`

   - **Windows**
      - Create the credentials file.
        - Location: `C:\Users\USERNAME\.aws\credentials`
        - Content :
            - `[default]`
            - `aws_access_key_id = YOUR_ACCESS_KEY`
            - `aws_secret_access_key = YOUR_SECRET_KEY`
      - Create the region file.
        - Location: `C:\Users\USERNAME\.aws\config`
        - Content :
            - `[default]`
            - `region=us-east-1`

4. Install a virtual environment.
   - `git clone git@github.com:aws-samples/aws-iot-core-for-amazon-sidewalk-sample-app.git`
   - Open the command line terminal and navigate to the project's top-level directory.

   - **Linux and macOS**

    ```py
    python3 -m pip install --user virtualenv
    python3 -m venv sample-app-env
    source sample-app-env/bin/activate
    python3 -m pip install --upgrade pip
    python3 -m pip install -r requirements.txt
    python3 -m pip install pyjwt -t ./ApplicationServerDeployment/lambda/authLibs
    ```
   - **Windows**

    ```py
    python -m pip install --user virtualenv
    python -m venv sample-app-env
    sample-app-env\Scripts\activate.bat
    python -m pip install --upgrade pip
    python -m pip install -r requirements.txt
    python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
    ```

5. Fill out the configuration file (**config.yaml**) with your details (or leave default values).

| Field             | Default Value                 | Description                                                                  |
| ----------------- | ----------------------------- | ---------------------------------------------------------------------------- |
| AWS_PROFILE       | Default                       | Name of your AWS profile from `.aws/credentials`                               |
| DESTINATION_NAME  | SensorAppDestination          | The Sidewalk destination used for uplink traffic routing. Can be any string. |
| HARDWARE_PLATFORM | NORDIC                        |                                                                              |
| USERNAME          | Null (need to be overwritten) | User for the WebApp                                                          |
| PASSWORD          | Null (need to be overwritten) | User for the WebApp                                                          |
| INTERACTIVE_MODE  | True                          | Enables interactive mode (confirmation prompts).                             |

6. Run a helper `env_check.py` script to sanity check your environment against the most common errors.

```py
python3 env_check.py
```

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/python-1.png"
  width="50%"
  caption="Environment Test Script"
/>

7. Run a deployment script.

```py
python3 ApplicationServerDeployment/deploy_stack.py
```

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/python-2.png"
  width="75%"
  caption="Deployment of Sidewalk Stack"
/>

#### Create the Device Profile

:::tip 📝 NOTE
You can create a device profile on your own or let the system create it for you. If you choose to have the system create it, proceed directly the next section: [Create the Device Provisioning Key](#create-the-device-provisioning-key).
:::

1. Login to AWS as the admin user.
2. Make sure to set the region to **us-east-1**, and click **IoT Core**.

<!-- Blurry image -->

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-9.png"
  width="100%"
  caption="Device Profile Creation"
/>

3. Navigate to **LPWAN devices** > **Devices** > **Add device profile**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-10.png"
  width="100%"
  caption="Device Profile Creation"
/>

4. Enter your profile name, then click **Submit**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-11.png"
  width="100%"
  caption="Device Profile Creation"
/>

5. You should see the newly added device profile.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-12.png"
  width="100%"
  caption="Device Profile Creation"
/>

6. Copy the **Profile ID** to the **config.yaml**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/yaml-1.png"
  width="75%"
  caption="Device Profile Creation"
/>

#### Create the Device Provisioning Key

1. Ensure that you are using the Python virtual environment `sample-app-env`. Otherwise, execute the following commands:

- **Linux and macOS**

```py
source sample-app-env/bin/activate
python3 -m pip install --upgrade pip
python3 -m pip install -r requirements.txt
python3 -m pip install pyjwt -t ./ApplicationServerDeployment/lambda/authLibs
```

- **Windows**

```py
sample-app-env\Scripts\activate.bat
python -m pip install --upgrade pip
python -m pip install -r requirements.txt
python -m pip install pyjwt -t .\ApplicationServerDeployment\lambda\authLibs
```

2. Run the device provisioning script:
   - Single device: `python3 EdgeDeviceProvisioning/provision_sidewalk_end_device.py`
   - Multiple devices: `python3 EdgeDeviceProvisioning/provision_sidewalk_end_device.py --instances 5`
   - You will receive a response when the provisioning script is complete.

```py
INFO:root:Status: 200
INFO:root:Saving wireless device to file
INFO:root:Generating MFG by calling provision.py
INFO:root:Generating MFG.hex for Nordic
INFO:root:Done!
```

3. Login to AWS as the admin user. Make sure to set the region to **us-east-1**, then click **IoT Core**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-13.png"
  width="100%"
  caption="Device provisioning"
/>

4. For provisioning and managing all your Sidewalk devices, navigate to **LPWAN devices** > **Devices** > **Sidewalk**.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/aws-14.png"
  width="100%"
  caption="Provisioned devices"
/>

You should see the provisioned devices in the Sidewalk Devices section.

### Device Setup

::: tip 📝 NOTE
Flash the Sidewalk Starter Kit with the example firmware and device credentials.
:::

#### Connect the Sidewalk Starter Kit and the RAKDAP1 Device

The RAKDAP1 device is used to flash firmware and provision keys to the RAK4630 module.
The programming pins of the WisBlock RAK4631 Core module are exposed on one side. The following is the link between the RAKDAP1 and the RAK4631:

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/rakdap1.png"
  width="65%"
  caption="RAK4630 and RAKDAP1 Connection"
/>

The WisBlock modules must be powered by a battery or via a USB connector to avoid problems during the process.

#### Install the Required Software Tools

##### Python 3 Installation

RAKDAP1 requires a Python 3 installation before it can be used. Download the latest Python 3 from the official Python website. Go to their Python Downloads page (opens a new window) and select an installer based on your system.

###### Windows

1.  Choose the Python installer for Windows.
2.  Once downloaded, start the installation process.
3.  Make sure to check the Add python.exe to PATH. Otherwise, you will have to add it manually later.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/python-3.png"
  width="60%"
  caption="Python Installation"
/>

4.	Wait until the installation is finished.

<rk-img
  src="/assets/images/wisblock/rak4631/sidewalk/python-4.png"
  width="60%"
  caption="Python Installation"
/>

5. After the installation is complete, open the command prompt window and use the following command to verify the versions of Python and pip3:

```py
python --version
pip --version
```

::: tip 📝 NOTE
pip3 is required to install additional Python packages.
:::

###### macOS

Open the terminal on your Mac machine and type the following commands:

```py
ruby -e $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
```

::: tip 📝 NOTE
If your macOS is based on Apple M chips, you might need to use this path:

```py
export PATH="/opt/homebrew/opt/python/libexec/bin:$PATH" or export PATH="/opt/homebrew/opt/python@3/libexec/bin:$PATH"
```
:::

```py
brew install python
python --version
brew install libusb
```

After the installation has finished, open a command prompt window and check the versions of Python and pip3 using the following command listed below.

```py
python --version
pip --version
```

###### Linux

Open the terminal on your Linux machine and type the following command:
`sudo apt-get install python3`

After the installation has finished, open a command prompt window and check the versions of Python and pip3 using the following command listed below:

```py
python --version
pip --version
```

##### pyOCD Installation

The next step is to install pyOCD, the software tool required for flashing bootloaders and application software.

1. To start the installation, open the command prompt and use the following command:

```py
pip3 install pyocd
```

2. After the installation is finished, verify the version.

```py
pyocd --version
```

##### Support Packages Installation

To flash and debug MCU, DAPLink needs support packages. These support packages are MDK files. For more details, you can refer to the supporting list of [MDK](https://www.keil.com/dd2/Pack/).

1. To install the support package, use the following command:

```py
pyocd pack --i <PACKAGE>
```

2. For the Sidewalk Starter Kit, install the MDK for the RAK4630 module. Enter the following command:

```py
pyocd pack --i nrf52840
```

3. To check installed packages, you can use the command:

```py
pyocd pack -s
```

Before flashing a new firmware, you can also perform the erase command.

:::warning ⚠️ WARNING
Erasing the flash memory will remove the current flashed firmware, and it will also erase the device provisioning information.
:::

```py
pyocd erase -t nrf52840 --chip
```

### Flash Example Firmware and Device Credentials with RAKDAP1

The RAK4630 in the Sidewalk Starter Kit is already flashed with the right firmware. However, it cannot connect to the Sidewalk network without the correct provisioning key that you created in the previous step.

1. To flash the provisioning key, use RAKDAP1 adapter and run the following command to flash the HEX file you created.

::: tip 📝 NOTE
You must be in the directory or location where the hex files are located before proceeding with flashing. Otherwise, the process will not proceed.
:::

```py
pyocd flash -t nrf52840 YOUR_PROVISIONING_KEY.hex
```

2. Disconnect the RAKDAP1 adapter, connect a terminal application, and reset the starter kit to check if the application is starting normally.

3. If you have erased the original firmware of the RAK4630 and flashed your own custom firmware, you have to flash the provisioning key every time **AFTER** you have flashed your custom firmware.

```py
pyocd flash -t nrf52840 YOUR_CUSTOM_FIRMWARE.hex
pyocd flash -t nrf52840 YOUR_PROVISIONING_KEY.hex
```

4. After flashing the Sidewalk Starter Kit, disconnect both the kit and the RAKDAP1 tool from power and from each other.
5. Then power up the Sidewalk Starter Kit through its USB connector.

If the device is in range of an Amazon ECHO Gen4 (or another Sidewalk compatible Amazon device), it will automatically connect to Sidewalk and send the measured data of its sensor to AWS.

:::warning ⚠️ IMPORTANT
- A device profile created for prototyping through the AWS console can only be used with one device.
- A device profile created for manufacturing and linked with HSM applies to all products of that product type. However, if you have four different products (Sensor A, B, C, and D), you will need to load four different device profiles onto your HSM.
-	A provisioning key is for a single device, and each device needs its own unique key.
:::

After flashing the firmware, the device should be powered up. You can view the device log output by opening a Serial Terminal application on your computer. If you encounter error messages, it is likely due to one of the following reasons: missing provisioning key, incorrect provisioning key or device profile, or no Sidewalk device in range.

# Firmware Source Code

The source code for the RAK4631 Sidewalk Starter Kit is available as open source on Github: [RAK4630-Amazon-Sidewalk-Example repo.](https://github.com/RAKWireless/RAK4630-Amazon-Sidewalk-Example)

To install the necessary development tools, refer to the installation guides available in the [Amazon Sidewalk Documentation.](https://docs.sidewalk.amazon/introduction/sidewalk-gateways.html)