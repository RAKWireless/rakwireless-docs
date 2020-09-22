---
sidebar: false
rak_img: /assets/images/knowledge-hub/banners/general_banner.jpg
rak_desc: A tutorial on how to connect RAK product boards to the RAKDAP1 as the flash and debug tool.
tags:
  - Tutorials
header:
  title: RAKDAP1 Flash and Debug Tool
  caption: by <b>RAKwireless Team</b>
  img: /assets/images/knowledge-hub/banners/general_banner.jpg
posted: 21/09/2020 7:00 PM
---

# RAKDAP1 Flash and Debug Tool


## Overview
### Description

Many RAKwireless products have an SWD port to flash bootloader and application SW. The SWD port is used for debugging. **RAKDAP1** is affordable debug and flash tool to connect your PC to the SWD port. RAKDAP1 has an MCU that is programmed with **DAPLink**.    

**DAPLink** is an open-source software project that enables programming and debugging application software on running on Arm Cortex CPUs. Commonly referred to as interface firmware, DAPLink runs on a secondary MCU that is attached to the SWD or JTAG port of the application MCU. This configuration is found on nearly all development boards. It creates a bridge between your development computer and the CPU debug access port. DAPLink enables developers with drag-and-drop programming, a serial port, and CMSIS-DAP based debugging.

DAPLink is compatible with all known versions of Windows, Mac OSX, and Linux. Once connected to a computer DAPLink will present itself as a storage device.

### Features

- USB interface to the computer
- MSC - drag-n-drop programming flash memory
- CDC - virtual com port for log, trace and terminal emulation
- HID - CMSIS-DAP compliant debug channel
- WEBUSB HID - CMSIS-DAP compliant debug channel


## Installation

As mentioned, RAKDAP1 is an SWD flash and debug tool that runs [**DAPLink**](https://os.mbed.com/docs/mbed-os/v5.15/tools/daplink.html#daplink-features) to connect your RAKwireless product to your computer. It has an easy to use command line interface and supports the leading industry standard tool chains to program and debug the target system.

The following are the supported tools:

1. **pyOCD**
2. **IAR Workbench**
3. **Keil MDK**

To use it, the open-source pyOCD Python SW is required. If you have already installed Python 3 on your computer, you can proceed to [Installation of pyOCD](#installation-of-pyocd). 

### Installation of Python 3

Before anything else, it requires you to install Python 3 on your computer. Download the latest Python 3 from the official Python website. Go to their [Python Downloads](https://www.python.org/downloads/) and choose an installer depending on your system. 


#### Installation for Windows

1. Choose the python installer for Windows. 
2. Once downloaded, start the installation process. 
3. Make sure to check the **`Add Python 3.x to PATH`**. Otherwise, you will have to add it manually later.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/1.install.png"
  width="60%"
  caption="Installing Python for Windows"
/>

4. Wait until the installation is finished. As for Windows, it is recommended to **`Disable path length limit`**.


<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/2.disable-path-limit.png"
  width="60%"
  caption="Disable the Path Limit"
/>

5. After the installation has finished, open a command prompt window and check the versions of **Python** and **pip3** using the following command listed below. 


```
python --version
```

```
pip --version
```

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/3.versions.png"
  width="75%"
  caption="Checking the Python and pip3 vesions"
/>

:::tip 📝 NOTE  
pip3 is required to install additional Python packages. 
:::

#### Installation for MacOS

Open the terminal on your Mac machine and type the following commands:

```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```   

```
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
```

If you have OS X 10.12 (Sierra) or older use the following command instead:   
```
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
```

```
brew install python
```

```
python --version
```

```
brew install libusb
```

#### Installation for Linux


Open the terminal on your Linux machine and type the following command:

```
sudo apt-get install python3
```

### Installation of pyOCD

Next step is to install pyOCD which is the SW tool required to flash bootloaders and application SW. 

1. To start the installation, open the command prompt and use the following command:

```
pip3 install pyocd
```

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/4.install-pyocd.png"
  width="75%"
  caption="Installing pyOCD"
/>

2. After the installation is finished, check the version.

```
pyocd --version
```

```
pyocd-flashtool --version
```

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/5.pyocd-version.png"
  width="75%"
  caption="pyOCD version"
/>

### Installation of Support Packages

To flash and debug MCU, DAPLink needs support packages. These support packages are MDK files. For more details, you can refer to the supporting list of [MDK](https://www.keil.com/dd2/Pack/).

But before installing, check the list first to know the required package for your RAKwireless product.


<table style="text-align: center">
<thead>
  <tr>
    <th>MODEL</th>
    <th>SUPPORTED PACKAGE</th>
  </tr>
</thead>
<tbody>
    <tr>
      <td>RAK811 Module</td>
      <td>stm32l151cb</td>   
    </tr>
    <tr>
      <td>RAK8710</td>
      <td>stm32l151cb</td>   
    </tr>
    <tr>
      <td>RAK4200 Module</td>
      <td>stm32l071kb</td>   
    </tr>
    <tr>
      <td>Products using RAK4200</td>
      <td>stm32l071kb</td>   
    </tr>
    <tr>
      <td>RAK4270 Module</td>
      <td>stm32l071kb</td>   
    </tr>
    <tr>
      <td>Products using RAK4270</td>
      <td>stm32l071kb</td>   
    </tr>
    <tr>
      <td>RAK7201/7202/7203</td>
      <td>stm32l071kb</td>   
    </tr>
    <tr>
      <td>RAK4600 Module</td>
      <td>nrf52</td>   
    </tr>
    <tr>
      <td>RAK4600 Evaluation Board</td>
      <td>nrf52</td>   
    </tr>
      <tr>
      <td>RAK8212 Board</td>
      <td>nrf52</td>   
    </tr>
    <tr>
      <td>RAK813 Module</td>
      <td>nrf52</td>   
    </tr>
    <tr>
      <td>RAK5010</td>
      <td>nrf52840</td>   
    </tr>
    <tr>
      <td>RAK4631</td>
      <td>nrf52840</td>   
    </tr>
    <tr>
      <td>RAK3401</td>
      <td>nrf52840</td>   
    </tr>
    <tr>
      <td>RAK4260</td>
      <td>atsaml21j18a</td>   
    </tr>
    <tr>
      <td>RAK4260</td>
      <td>atsaml21j18a</td>   
    </tr>
</tbody>
</table>


To install the support package, use the following command:    

```
pyocd pack --install \<PACKAGE\>
```

For example, if you have RAK4600 module, enter the following command:

```
pyocd pack --install nrf52
```

## How to Flash an MCU

Before flashing a firmware or a bootloader for your product, connect it first to the RAKDAP1 SWD interface.

Here is an overview on how to connect the SWD interface. If you cannot find your product in the list, check the product documentation in the [RAK Documentation Center](https://docs.rakwireless.com).

#### RAK811 Module

<br>
<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/6.rak811-swd.png"
  width="40%"
  caption="RAK811 Module Pinout"
/>


<br>

### RAK4200 Module

<br>
<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/7.rak4200-swd.png"
  width="40%"
  caption="RAK4200 Module Pinout"
/>

<br>

### RAK4600 Module


<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/8.rak4600-swd.png"
  width="60%"
  caption="RAK4600 Module Pinout"
/>


<br>

### RAK4270 Module

<br>
<br>

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/9.rak4270-swd.png"
  width="40%"
  caption="RAK4270 Module Pinout"
/>


<br>

### RAK4260 Evaluation Board

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/10.rak4260-evb-connection.png"
  width="60%"
  caption="RAK4260 Evaluation Board Pinout"
/>


<br>

### RAK4600 Evaluation Board


<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/11.rak4600-evb-connection.png"
  width="60%"
  caption="RAK4600 Evaluation Board Pinout"
/>


<br>

Open the command prompt and change the folder where you have saved the bootloader or firmware that you want to flash. The command syntax to flash the file is the following:

```
pyocd flash -t \<PACKAGE\> \<FILENAME\>
```

- Change **\<PACKAGE\>** to the support package from above list.     
-  hange **\<FILENAME\>** to the filename you want to flash. The file should be in __.hex__ format.

Here an example to flash the bootloader to a RAK4631 WisBlock Core module: 

```
pyocd flash -t nrf52840 RAK4630_bootloader.hex
```

## Tools

RAKwireless tools are applications and products created to make it easy for you to set up the RAK products, flash bootloaders, or application firmware and to debug them.

### Tools for RAKwireless products

<rk-img
  src="/assets/images/knowledge-hub/tutorials/rakdap1-flash-and-debug-tool/12.rakdap1-top.png"
  width="40%"
  caption="RAKDAP1 Model"
/>

<rk-btn
  src="https://store.rakwireless.com/products/daplink-tool"
  label="Buy RAKDAP1 Debug and Flash Tool"
  _blank
/>

