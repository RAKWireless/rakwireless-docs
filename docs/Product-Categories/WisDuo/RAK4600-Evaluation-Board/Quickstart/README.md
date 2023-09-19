---
rak_desc: Contains instructions and tutorials for installing and deploying your RAK4600 Evaluation Board. Instructions are written in a detailed and step-by-step manner for an easier experience in setting up your LoRaWAN Module.
rak_img: /assets/images/wisduo/rak4600-evaluation-board/RAK4600-Evaluation.png
prev: ../Overview/
tags:
  - RAK4600 Evaluation Board
  - quickstart
  - wisduo
---

#  RAK4600 Evaluation Board Quick Start Guide

## Prerequisites
### What Do You Need?

Before going through the configuration guide of the RAK4600 Evaluation Board, make sure to prepare the items listed below:

1. [**RAK4600 Evaluation Board**](https://store.rakwireless.com/products/rak4600-evaluation-board?utm_source=RAK4600EvaluationBoard&utm_medium=Document&utm_campaign=BuyFromStore)
2. Micro USB cable
3. LoRA Gateway in Range for testing (not provided)
4. [RAKDAP1 DapLink Tool](https://store.rakwireless.com/products/daplink-tool?utm_source=RAKDAP1&utm_medium=Document&utm_campaign=BuyFromStore) (not provided)
5. Windows PC

:::tip 📝 NOTE
This device released by RAKWireless is already pre-loaded with its latest firmware upon manufacture. If you want to have your device's firmware burned or upgraded, refer to the following links:

1. [Device Firmware Setup](#burning-the-firmware)
2. [Device Firmware Upgrading](#upgrading-firmware-through-dfu-using-ble)
3. [Open Source Framework Development](#open-source-framework)
   :::

### What's Included in the Package?

- 1pc - RAK4600 Evaluation Board
- 1pc - Micro USB cable
- 1pc - LoRa Antenna (iPEX)
- 1pc - BLE Antenna (iPEX)
- 2pcs - 4-pin Header (not soldered)
- 9pcs - Dupont Lines


## Interfacing with RAK4600

To interface with the Evaluation Board, using a Windows PC, you need to install the **[RAK Serial Port Tool](https://downloads.rakwireless.com/en/LoRa/Tools/)**.

:::warning ⚠️ WARNING
Before powering the RAK4600 Evaluation Board, you should install the LoRa and BLE Antenna first. Not doing so might damage the board.
:::

<br>

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/u9lgszijijydbyjkgwnx.svg"
  width="55%"
  caption="LoRa and BLE Antennas"
/>

1. Connect your RAK4600 Evaluation Board to your Windows PC using the provided micro USB cable.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rzolxz9ojiyg0lkqpkqz.svg"
  width="55%"
  caption="RAK4600 Evaluation Board to Windows PC Connection"
/>

2. Open the RAK Serial Port Tool.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rak_serial_tool.png"
  width="90%"
  caption="RAK Serial Port Tool"
/>

3. To choose the correct COM Port number for your device, open your Device Manager by pressing **Windows + R** and typing `devmgmt.msc`, or search in the Start Menu.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/dev_manager.png"
  width="100%"
  caption="Device Manager"
/>

4. Look for Ports (COM & LPT) and find the name **USB-SERIAL CH340**. Take note of the COM Port Number.

:::tip 📝 NOTE
If you didn't find any Port with the name USB-Serial CH340, make sure you have installed the [CH340 Drivers](https://downloads.rakwireless.com/LoRa/RAK811/Tools/CH340%20Drive.rar) on your Windows PC.
:::

5. Choose the correct port number and baud rate from the device manager, then click Open.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/baud.png"
  width="90%"
  caption="Correct Port Number and Baud rate"
/>

### Checking Device Logs

1. Open the RAK Serial Port Tool.

2. Press the reset button on the RAK4600 Evaluation Board, then you will see the following contents in the Serial Port Tool.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/4.checking-device-logs/rak4600_log.png"
  width="45%"
  caption="Log Checking through UART"
/>

:::tip 📝 NOTE
You still have to connect the micro USB cable to the RAK4600 Evaluation Board to power the board.
:::

## Configuring RAK4600

You can configure your RAK4600 Evaluation Board by sending AT Commands either through BLE or through micro USB.

:::tip 📝 NOTE:
For the full list of AT Commands available for configuring your RAK4600, refer to the [AT Command Manual](../../AT-Command-Manual/).
:::

### Through Micro USB

1. As mentioned in [Checking Device Logs](#checking-device-logs), if you want to use the RAK4600 Evaluation Board through UART, you should connect the RAK4600 to Windows PC, as shown in **Figure 7**.


<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/3.interfacing/rzolxz9ojiyg0lkqpkqz.svg"
  width="55%"
  caption="RAK4600 Evaluation Board to Windows PC Connection"
/>

2. Try to send a simple AT command to RAK4600 to get the current firmware’s version by sending the command below using the RAK Serial Port Tool. Similarly, you can send other AT commands of RAK4600 in the same way.

```sh
at+version
```

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/at_version.png"
  width="45%"
  caption="AT command for Firmware Version"
/>

### Through BLE

1. To configure the RAK4600 through BLE, download and install the **nRF Connect for Mobile**. This tool is developed by Nordic Semiconductor and is available on the App Store and Google Play Store.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/eponlb3piu1p6noof1np.png"
  width="85%"
  caption="nRF Connect App in Android and IOS"
/>

2. Make sure the Bluetooth on your mobile is turned on. Open the application and scan for BLE devices. You will see all the BLE devices in range in the scan list.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/rwpeihuyflhu65gopfml.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 Evaluation Board and wait for a couple of seconds. Look for a BLE Device named "**RUI-...**" in the scan list of the app. Connect to this device and click "**Nordic UART Service**".

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/mg6xtfoepu06s33iedyu.jpg"
  width="85%"
  caption="Nordic UART Service in the Nordic App"
/>

:::warning ⚠️ WARNING
By default, the BLE signal of the RAK4600 is turned off automatically if no connection is established after 60 seconds. Connect to RAK4600 over BLE immediately after pressing the reset button.
:::

4. Click on the arrow highlighted in a red box, as shown in **Figure 12**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/r7j95cqwrevod7qtvcsv.jpg"
  width="45%"
  caption="RX Characteristic in the Nordic UART Service"
/>

5. You can now send AT commands to the RAK4600.

- For example, if you want to check the current firmware’s version, send the following command:

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/jficmu58afzs3r1hkw5h.jpg"
  width="85%"
  caption="Sending AT Command via Nordic App"
/>

6. Check the AT command response on Nordic UART Service Tx Characteristic.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/5.configuring-rak4600/ble-at-version-response.png"
  width="45%"
  caption="AT response over BLE"
/>

## Open Source Framework

Before using RAK4600 on Arduino IDE, you need to flash a new bootloader using the RAKDAP1 Tool and pyOCD.

1. Install pyOCD.

Refer to <a href="/Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool" target="_blank">RAKDAP1 Flash and Debug Tool</a>.

2. Check pyOCD installation.

```sh
pyocd list
```
3. Clone RAK repository.

```sh
git clone https://github.com/RAKWireless/RAK4600_Arduino
```

4. Flash bootloader.

```sh
cd RAK4600_Arduino
pyocd flash -t nrf52 feather_nrf52832_bootloader.hex
```

5. Install the BSP support for Arduino as described in section BSP Installation.

https://github.com/RAKWireless/RAK4600_Arduino#bsp-installation

:::tip 📝 NOTE:
Before uploading any Arduino example, make sure that the RAK4600 is on DFU mode.
1. Connect the RX pin of RAK4600 to GND.
2. Press the reset button and then disconnect the RX pin from GND. Now the RAK4600 is on DFU mode.
:::

## Connecting to The Things Stack (TTN V3)

Refer to <a href="/Product-Categories/WisDuo/RAK4600-Module/Quickstart/#connecting-to-the-things-stack-ttn-v3" target="_blank">Connecting to The Things Network (TTN)</a>.


## Connecting with Chirpstack

Refer to <a href="/Product-Categories/WisDuo/RAK4600-Module/Quickstart/#connecting-with-chirpstack" target="_blank">Connecting with ChirpStack</a>.





## LoRa P2P
Refer to <a href="/Product-Categories/WisDuo/RAK4600-Module/Quickstart/#lora-p2p-mode" target="_blank">LoRa P2P guide.</a>

## Miscellaneous

### RAK5005 Core Module Slot Connection to RAK4601

The RAK5005 is the base board that connects the RAK4600 Core Module. It creates the power supply for the attached module and provides additional IO and Sensor support for your project needs.

::: tip 📝 NOTE
RAK4601 is a circuit board module for RAK5005 with a pre-soldered RAK4600 LPWAN Module.
:::

Listed below are the accessible pins and data bus of the attached RAK5005 base board on the RAK4600 EVB:


| RAK4601 Pin Definition | Function Name of WisBase | Pin Number | Pin Number | Function Name of WisBase | RAK4601 Pin Definition |
| ---------------------- | ------------------------ | ---------- | ---------- | ------------------------ | ---------------------- |
| NC                     | VBAT                     | 1          | 2          | VBAT                     | NC                     |
| GND                    | GND                      | 3          | 4          | GND                      | GND                    |
| 3V3                    | 3V3                      | 5          | 6          | 3V3                      | 3V3                    |
| NC                     | USB+                     | 7          | 8          | USB-                     | NC                     |
| NC                     | VBUS                     | 9          | 10         | SW1                      | NC                     |
| UART1_TX/P0.23         | TXD0                     | 11         | 12         | RXD0                     | UART1_RX/P0.22         |
| MCU_RST                | RESET                    | 13         | 14         | LED1                     | NC                     |
| NC                     | LED2                     | 15         | 16         | LED3                     | NC                     |
| 3V3                    | VDD                      | 17         | 18         | VDD                      | 3V3                    |
| I2C1_SDA/P0.13         | I2C1_SDA                 | 19         | 20         | I2C1_SCL                 | I2C1_SCL/P0.12         |
| NC                     | AIN0                     | 21         | 22         | AIN1                     | NC                     |
| NC                     | BOOT0                    | 23         | 24         | NC                       | NC                     |
| NC                     | SPI_CS                   | 25         | 26         | SPI_CLK                  | NC                     |
| NC                     | SPI_MISO                 | 27         | 28         | SPI_MOSI                 | NC                     |
| IO1/RESERVED           | IO1                      | 29         | 30         | IO2                      | IO2/RESERVED           |
| NFC1/P0.09             | IO3                      | 31         | 32         | IO4                      | NFC2/P0.10             |
| UART2_TX/P0.19         | TXD1                     | 33         | 34         | RXD1                     | UART2_RX/P0.18         |
| NC                     | I2C2_SDA                 | 35         | 36         | I2C2_SCL                 | NC                     |
| NC                     | IO5                      | 37         | 38         | IO6                      | NC                     |
| GND                    | GND                      | 39         | 40         | GND                      | GND                    |

<br>

### Bluetooth Connection Modes

There are three BLE modes in RAK4600 from the firmware V3.0.0.6: the **Peripheral Mode**, the **Central Mode**, and the **Beacon Scan Mode**. You can change the work mode of RAK4600’s BLE using the commands provided below, which is defined in the [AT Command Manual](../../RAK4600-Module/AT-Command-Manual/).

```sh
at+set_config=ble:work_mode:X:Y
```
**Description:** Set the work mode for BLE.
- **X** - 0: BLE peripheral mode, 1: BLE central mode. 2: Beacon scan mode.
- **Y** - 0: normal range, 1: BLE long range.

#### BLE Peripheral Mode

For the Peripheral Mode, you can scan RAK4600’s BLE and connect with it using your mobile device.

#### BLE Central Mode

For the Central Mode, RAK4600’s BLE will not broadcast, so that your mobile devices will not be able to scan it. This is very useful if you want to make the RAK4600 act as a BLE Gateway wherein BLE Sensor Nodes (up to 20 Devices) can send sensor data.

#### Beacon Scan Mode

For the Beacon Scan mode, RAK4600 can scan around the Beacon signal. It is useful for a Beacon use case like iBeacon.

#### RAK4600 BLE Default Settings

By default, the RAK4600 Evaluation Board will work on **Peripheral Mode.** In this mode, you can configure it through BLE, including DFU. It should be noted that after resetting the RAK4600, you have only 60 seconds to establish a connection with your Mobile Device through BLE based on its power consumption settings. If no connection has been established within 60 seconds, the RAK4600 BLE signal will not be broadcasted, and it will enter power-saving mode. On the other hand, there is no limitation once you are already connected with the RAK4600's BLE.

If you set the RAK4600 to work in Central Mode, the RAK4600 will work first on Peripheral Mode for 30 seconds, and if no connection is established after 30 seconds, it will automatically work in **Central Mode.** In this mode, the BLE signal of the RAK4600 will stop broadcasting and will not be visible on your mobile devices up until you change the work mode to peripheral mode or reset the RAK4600 again.


### Burning the Firmware

If you want to get a pre-compiled firmware instead of compiling the source code by yourself, you can find the latest firmware on the **[RAK downloads](https://downloads.rakwireless.com/en/LoRa/RAK4600/Firmware/)**.


#### Flash the firmware using DAPLink and RAKDAP

Refer to <a href="../../../../../Product-Categories/Accessories/RAKDAP1-Flash-and-Debug-Tool/Overview/#rakdap1-flash-and-debug-tool/" target="_blank">RAKDAP1 Flash and Debug Tool</a>.

### Upgrading Firmware through DFU using BLE

1. Download the DFU package of the [**RAK4600 Evaluation Board**](https://downloads.rakwireless.com/LoRa/RAK4600/Firmware/History-Release-Version/DFU-Package/), and save it on your mobile phone.

2. Make sure the Bluetooth on your mobile is turned on. Open the **nRF Connect** Mobile application, and you will see all BLE devices in range in the scan list.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/mnzoayqdsaquxxdimpnw.jpg"
  width="45%"
  caption="Available Bluetooth Devices in the Nordic App"
/>

3. Press the reset button on the RAK4600 and wait for a couple of seconds. Look for a BLE Device named "**RUI-...**" in the scan list of the app. Connect to this device and click on "**Secure DFU Service**".

:::tip 📝 NOTE:
 This will be only visible for 60 seconds. More information about Bluetooth connection guide can be found in the [BLE Connection Modes](#bluetooth-connection-modes) section.
:::

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/wwbnonxp1ugf6jtckbm6.jpg"
  width="85%"
  caption="Secure DFU Service in the Nordic App"
/>

4. On the “**Secure DFU Service**”, click on the button highlighted in red, as shown in **Figure 17**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/qxw4hh00xqmcv85df1f7.jpg"
  width="85%"
  caption="Buttonless DFU"
/>

5. Now, click on the arrow highlighted in a red box, as shown in **Figure 18**. A Write Value window will pop up, then press "**Send**".

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/xb1hntew7qrbct9et5hz.jpg"
  width="85%"
  caption="Resetting the Bootloader via Bluetooth"
/>

6. The RAK4600 is now working in DFU Mode. In the application, you will see the same as shown in **Figure 19**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/qmi89z3vqxvukvbiodnc.jpg"
  width="45%"
  caption="RAK4600 Default Status Overview after Resetting"
/>

7.  In the device list, find a BLE device named "**DfuTarg**" and click on **Connect**.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/g2v0fkj63cbuwtt24mht.jpg"
  width="45%"
  caption="RAK4600 Default Bluetooth ID after Resetting"
/>

8. After connecting, select the DFU Icon. On the Select file type, choose **Distribution packet (ZIP)** and press OK. This will then prompt you to select the zip file of the firmware that you have downloaded.

9. The DFU application automatically starts to upgrade the firmware of your RAK4600 through DFU over BLE. After upgrading, the application restarts the RAK4600, and the DFU mode is disabled. You can now use the RAK4600 with the latest firmware.

<rk-img
  src="/assets/images/wisduo/rak4600-evaluation-board/quickstart/8.upgrading-firmware/pqnewr61x87nv5nrxovs.jpg"
  width="90%"
  caption="Distribution Packet File Type under DFU"
/>

