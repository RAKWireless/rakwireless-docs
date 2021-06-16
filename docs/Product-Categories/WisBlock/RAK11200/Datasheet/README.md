---
rak_desc: Covers the comprehensive information of your RAK11200 to help you in using it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
tags:
  - datasheet
  - wisblock
  - RAK11200
prev: ../Quickstart/
next: false
---

# RAK11200 WisBlock WiFi Module Datasheet

## Overview 

### Description

**RAK11200** is a **WisBlock Core** module for RAK **WisBlock** based on Espressif ESP32-WROVER. It is a powerful, generic WiFi-BLE MCU module that targets a wide variety of applications. There are two CPU cores that can be individually controlled and the CPU clock frequency is adjustable from 80&nbsp;MHz to 240&nbsp;MHz. The Low Power Deep-Sleep current of ESP32-WROVER is about 10&nbsp;uA. This makes the **RAK11200** an ultra-low power communication solution. **RAK11200** can be comfortably programmed with the Arduino™ IDE or PlatformIO.

### Features
* Two low-power Xtensa® 32-bit LX6 microprocessors      
* Up to 240&nbsp;MHz CPU clock
* Built-in PCB antenna
* 4&nbsp;MB External SPI Flash, 520&nbsp;KB RAM   
* 8&nbsp;MB SPI Pseudo static RAM (PSRAM) 
* WiFi 802.11 b/g/n (802.11n up to 150&nbsp;Mbps)     
* Bluetooth v4.2 BR/EDR and BLE specification
* Rich set of peripherals: RTC, UART, I2C, SPI, SD card interface  
* Low power Deep Sleep mode 


## Specifications

### Overview

#### Board Overview

The RAK11200 WisBlock WiFi Module back view and front view (top) can be seen in Figure 1.

<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/RAK11200-Back-&-Front.png"
  width="40%"
  caption="RAK11200 WiFi Module Overview"
/>

#### Mounting Sketch

Figure 2 shows RAK11200 module mounting sketch with the WisBase RAK5005-O board.

<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/image-20210317120135303.png"
  width="50%"
  caption="RAK11200 WiFi Module Mounting Sketch"
/>

### Hardware

The hardware specification is categorized into four parts. It discuses the interfacing of the module and its corresponding functions and diagrams. It also covers the electrical and mechanical parameters that include the tabular data of the functionalities and standard values of the RAK11200 WisBlock WiFi Module.

:::warning ⚠️ WARNING    
- Different from other ESP32 boards, the RAK11200 needs to be put _**manually**_ into **download mode**. If you do not force the RAK11200 into **download mode**, you cannot upload your sketch from Arduino IDE (or PlatformIO).

- To force the RAK11200 into **download mode**, you need to connect the pin _**BOOT0**_ on the WisBlock Base RAK5005-O to _**GND**_ and push the reset button.

- The _**BOOT0**_ pin is on the J10 pin header, the _**GND**_ pin is next to it.
:::

<rk-img
  src="/assets/images/wisblock/rak11200/quickstart/rak11200-Boot0-for-flashing.png"
  width="50%"
  caption="Force ESP32 Download mode"
/>

#### Interfaces

##### UART Interface

The RAK11200 module provides two UART interfaces: UART0 and UART1. The UART0 can be used for firmware upgrades or to access console output through the WisBlock baseboard USB interface. The UART1 is the main communication interface with WisIO or WisSensor modules.

###### UART0 Programming Port

To support USB, the RAK11200 has an USB to UART converter onboard to connect the ESP32's UART0 to the USB connector. Figure 4 shows the RAK11200 module UART programming circuit.

<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/image-20210310153554464.png"
  width="60%"
  caption="RAK11200 USB to UART schematic"
/>

##### SPI Interface

The RAK11200 supports one single SPI Interface in full-duplex or half-duplex communication modes. The SPI interface supports the following features:

- Both master and slave modes;
- Configurable SPI frequency;
- Four SPI transfer modes, which is defined by the polarity (CPOL) and the phase (CPHA) of the SPI clock;
- An internal FIFO buffer of 64-byte.

##### I2C Interface

The RAK11200 module provides two I2C bus interfaces. The module allows you to access directly to the registers to control I2C interfaces, which adds more flexibility to the design of the final solution. Depending on your configuration, it can serve as an I2C master mode. The I2C interface supports:

- Standard mode (100&nbsp;Kbit/s) and Fast mode (400&nbsp;Kbit/s);
- Up to 5&nbsp;MHz, constrained by the SDA pull-up strength;
- 7-bit/10-bit addressing mode.


#### Pin Definition

The RAK11200 module has a ESP32-WROVER module at its core. Figure 5 shows the core module pins and connection information.

<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/image-20210310153453674.png"
  width="80%"
  caption="RAK11200 Core module pin connection"
/>

<b> WisBlock Core RAK11200 Pin Assignment </b>

| Pin number WisBlock | Function | Pin name | Pin number ESP32 |
| :-----------------: | -------- | -------- | ---------------- |
|          1          | VBAT     | VBAT     | --               |
|          2          | VBAT     | VBAT     | --               |
|          3          | GND      | GND      | 1, 15, 38        |
|          4          | GND      | GND      | 1, 15, 38        |
|          5          | 3V3      | 3V3      | 2                |
|          6          | 3V3      | 3V3      | 2                |
|          7          | USB_DP   | USB_DP   | --               |
|          8          | USB_DN   | USB_DN   | --               |
|          9          | NC       | NC       | --               |
|         10          | SW1      | GPIO34   | 6                |
|         11          | UART0_TX | GPIO1    | 35               |
|         12          | UART0_RX | GPIO3    | 34               |
|         13          | EN       | EN       | 3                |
|         14          | LED1     | GPIO12   | 14               |
|         15          | LED2     | GPIO2    | 24               |
|         16          | NC       | NC       | --               |
|         17          | 3V3      | 3V3      | 2                |
|         18          | 3V3      | 3V3      | 2                |
|         19          | I2C1_SDA | GPIO4    | 26               |
|         20          | I2C1_SCL | GPIO5    | 29               |
|         21          | AIN0     | GPIO36   | 4                |
|         22          | AIN1     | GPIO39   | 5                |
|         23          | BOOT     | GPIO0    | 25               |
|         24          | NC       | NC       | --               |
|         25          | SPI_CS   | GPIO32   | 8                |
|         26          | SPI_CLK  | GPIO33   | 9                |
|         27          | SPI_MISO | GPIO35   | 7                |
|         28          | SPI_MOSI | GPIO25   | 10               |
|         29          | IO1      | GPIO14   | 13               |
|         30          | IO2      | GPIO27   | 12               |
|         31          | IO3      | GPIO26   | 11               |
|         32          | IO4      | GPIO23   | 37               |
|         33          | UART1_TX | GPIO21   | 33               |
|         34          | UART1_RX | GPIO19   | 31               |
|         35          | I2C2_SDA | GPIO15   | 23               |
|         36          | I2C2_SCL | GPIO18   | 30               |
|         37          | IO5      | GPIO13   | 16               |
|         38          | IO6      | GPIO22   | 36               |
|         39          | GND      | GND      | 1, 15, 38        |
|         40          | GND      | GND      | 1, 15, 38        |

#### RF Specifications

##### BLE Radio

###### Receiver

| Parameter                          | Conditions | Min | Typ | Max | Unit |
| ---------------------------------- | ---------- | --- | --- | --- | ---- |
| Sensitivity @30.8% PER             | -          | -94 | -93 | -92 | dBm  |
| Maximum received signal @30.8% PER | -          | 0   | -   | -   | dBm  |
| Co-channel C/I                     | -          | -   | +10 | -   | dBm  |
| Intermodulation                    | -          | -36 | -   | -   | dBm  |

###### Transmitter

| Parameter              | Conditions | Min | Typ | Max | Unit     |
| ---------------------- | ---------- | --- | --- | --- | -------- |
| RF transmit power      | -          | -   | 0   | 0   | dBm      |
| Gain control step      | -          | -   | 3   | -   | dBm      |
| RF power control range | -          | -12 | -   | +9  | dBm      |
| Drift rate             | -          | -   | 0.7 | -   | kHz/50us |
| Drift                  | -          | -   | 2   | -   | kHz      |


##### WiFi Radio

| Parameter                 | Condition        | Min  | Typ  | Max  | Unit |
| ------------------------- | ---------------- | ---- | ---- | ---- | ---- |
| Operating frequency range | -                | 2412 | -    | 2484 | MHz  |
| TX power                  | 11b mode         | 17.5 | 18.5 | 20   | dBm  |
| TX power                  | 11n MCS7         | 12   | 13   | 14   | dBm  |
| Sensitivity               | 11b, 1&nbsp;Mbps | -    | -97  | -    | dBm  |

#### Electrical Characteristics

##### Absolute Maximum Ratings

| Symbol          | Description                   | Min. | Typical | Max. | Unit |
| --------------- | ----------------------------- | ---- | ------- | ---- | ---- |
| V<sub>BAT</sub> | Power supply for the module   | 0.5  | -       | 4.2  | V    |
| V<sub>DD</sub>  | Power supply for ESP32 module | 2.3  | 3.3     | 3.6  | V    |
| I<sub>out</sub> | Step down IC output current   | -    | -       | 700  | mA   |

##### Recommended Operating Conditions

| Symbol          | Description                   | Min. | Typical | Max. | Unit |
| --------------- | ----------------------------- | ---- | ------- | ---- | ---- |
| V<sub>BAT</sub> | Power supply for the module   | 3.1  | -       | 4.2  | V    |
| V<sub>DD</sub>  | Power supply for ESP32 module | 3.0  | 3.3     | 3.6  | V    |
| T<sub>OPR</sub> | Operation Temperature         | -40  | -       | 85   | ℃    |

#### Mechanical Characteristics

##### Board Dimensions

<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/image-20210310153730185.png"
  width="80%"
  caption="RAK11200 Board Dimensions"
/>

##### WisConnector PCB Layout
<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/MxxS1003K6M.png"
  width="90%"
  caption="WisConnector PCB footprint and recommendations"
/>

#### Schematic Diagram


<rk-img
  src="/assets/images/wisblock/rak11200/datasheet/schematic.png"
  width="100%"
  caption="RAK11200 Schematic Diagram"
/>
