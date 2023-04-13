---
prev: ../Overview/
next: false
tags:
  - RAKDAP1
  - quickstart
rak_desc: Contains instructions and tutorials in using your RAKDAP1. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your device.
rak_img: /assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1.png

---

# Quick Start Guide

## Installation

As mentioned, RAKDAP1 is an SWD flash and debug tool that runs [**DAPLink**](https://os.mbed.com/docs/mbed-os/v5.15/tools/daplink.html#daplink-features) to connect your RAKwireless product to your computer. It has an easy to use command line interface and supports the leading industry standard tool chains to program and debug the target system.

The following are the supported tools:

1. **pyOCD**
2. **IAR Workbench**
3. **Keil MDK**

To use it, the open-source pyOCD Python SW is required. If you have already installed Python 3 on your computer, you can proceed to [Installation of pyOCD](#installation-of-pyocd).

### Python 3 Installation

Before anything else, it requires you to install Python 3 on your computer. Download the latest Python 3 from the official Python website. Go to their [Python Downloads](https://www.python.org/downloads/) and choose an installer depending on your system.


#### Windows

1. Choose the python installer for Windows.
2. Once downloaded, start the installation process.
3. Make sure to check the **`Add python.exe to PATH`**. Otherwise, you will have to add it manually later.


<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_2.png"
  width="60%"
  caption="Installing Python for Windows"
/>

4. Wait until the installation is finished.


<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_3.png"
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
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_4.png"
  width="75%"
  caption="Checking the Python and pip3 versions"
/>

:::tip 📝 NOTE
pip3 is required to install additional Python packages.
:::

#### MacOS

Open the terminal on your Mac machine and type the following commands:

```
ruby -e $(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)
```

```
export PATH="/usr/local/opt/python/libexec/bin:$PATH"
```

:::tip 📝 NOTE
If your macOS is based on Apple M chips, you might need to use this path:

`export PATH="/opt/homebrew/opt/python/libexec/bin:$PATH"` or `export PATH="/opt/homebrew/opt/python@3/libexec/bin:$PATH"`
:::

```
brew install python
```

```
python --version
```

```
brew install libusb
```

#### Linux

Open the terminal on your Linux machine and type the following command:

```
sudo apt-get install python3
```

### pyOCD Installation

Next step is to install pyOCD which is the SW tool required to flash bootloaders and application SW.

1. To start the installation, open the command prompt and use the following command:

```
pip3 install pyocd
```

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_5.png"
  width="75%"
  caption="Installing pyOCD"
/>

2. After the installation is finished, check the version.

```
pyocd --version
```

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_6.png"
  width="75%"
  caption="pyOCD version"
/>

### Support Packages Installation

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
      <td>RAK3172 Module</td>
      <td>stm32wle5</td>
    </tr>
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
      <td>RAK4630</td>
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
      <td>RAK4260 Evaluation Board</td>
      <td>atsaml21j18a</td>
    </tr>
    <tr>
      <td>Products using RAK4260</td>
      <td>atsaml21j18a</td>
    </tr>
    <tr>
      <td>RAK11720 and its variants</td>
      <td>AMA3B1KK-KBR</td>
    </tr>
</tbody>
</table>

To install the support package, use the following command:

```
pyocd pack --i \<PACKAGE\>
```
For example, if you have RAK4630 module, enter the following command:

```
pyocd pack --i nrf52840
```
<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_7.png"
  width="75%"
  caption="Installing NRF52840 into the RAK4630 module"
/>

To check installed packages, you can use the command:

```
pyocd pack -s
```

Before flashing a new firmware, you can also perform the erase command.

:::warning ⚠️ WARNING

Erasing the flash memory will remove all configured parameters in the modules like factory settings and LoRaWAN parameters (EUIs and keys).

:::

```
pyocd erase -t \<PACKAGE\> --chip
```

For example, if you use RAK4630 module, you can use this command:

```
pyocd erase -t nrf52840 --chip
```

## How to Flash an MCU

Before flashing a firmware or a bootloader for your product, connect it first to the RAKDAP1 SWD interface.

Here is an overview on how to connect the SWD interface. If you cannot find your product in the list, check the product documentation in the [RAK Documentation Center](https://docs.rakwireless.com).

### RAK3172 Module

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak3172-swd.png"
  width="40%"
  caption="RAK3172 Module Pinout"
/>

### RAK811 Module

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak811.svg"
  width="40%"
  caption="RAK811 Module Pinout"
/>

### RAK4200 Module

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/7.rak4200-swd.png"
  width="40%"
  caption="RAK4200 Module Pinout"
/>

### RAK4600 Module


<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/8.rak4600-swd.png"
  width="60%"
  caption="RAK4600 Module Pinout"
/>

### RAK4270 Module


<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak4270.svg"
  width="40%"
  caption="RAK4270 Module Pinout"
/>

### RAK4260 Module

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak4260.png"
  width="60%"
  caption="RAK4260 Module Pinout"
/>

### RAK4260 Evaluation Board

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak4260.svg"
  width="40%"
  caption="RAK4260 Evaluation Board Pinout"
/>

### RAK4600 Evaluation Board

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/rak4600.svg"
  width="40%"
  caption="RAK4600 Evaluation Board Pinout"
/>

### RAK4630 Module
- For RAK4630 module, it is recommended to include an external DC supply or battery to prevent errors during bootloader flashing.

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_1.png"
  width="50%"
  caption="RAK4630 in WisBlock Base"
/>

Open the command prompt or terminal, then go to the directory where you saved the firmware file you want to flash using the `cd <path>` command.

The pyocd command syntax to flash the file is the following:

```
pyocd flash -t \<PACKAGE\> \<FILENAME\>
```

- Change **\<PACKAGE\>** to the support package from above list.
- Change **\<FILENAME\>** to the filename you want to flash. The file should be in __.hex__ format.

Here is an example to flash the bootloader to a RAK4631 WisBlock Core module:

```
pyocd flash -t nrf52840 RAK4631_latest_final.hex
```
<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_9.png"
  width="80%"
  caption="Flashing the bootloader into the RAK4630 module"
/>

<rk-img
  src="/assets/images/accessories/rakdap1-flash-and-debug-tool/RAKDAP1_New_10.png"
  width="80%"
  caption="Flashing bootloader completed"
/>