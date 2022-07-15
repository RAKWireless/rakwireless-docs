---
rak_desc: Provides comprehensive information about your RAK4260 Evaluation Board to help you use it. This information includes technical specifications, characteristics, and requirements, and it also discusses the device components.
rak_img: /assets/images/wisduo/rak4260-evaluation-board/overview/RAK4260_Evaluation_home.png
tags:
  - datasheet
  - wisduo
  - RAK4260 Evaluation Board
prev: ../Low-Level-Development/
next: false
certifications:
  - [CE, https://downloads.rakwireless.com/LoRa/RAK4260H/Certification-Report/RAK4260H_CE_Certification.zip]
  - [FCC, https://downloads.rakwireless.com/LoRa/RAK4260H/Certification-Report/RAK4260H_FCC_Certification.zip]
  
---

# RAK4260 Evaluation Board Datasheet

## Overview

### Description

RAK4260 Evaluation Board is designed to give you a quick start to explore the LoRa/LPWAN world. The board measures 30 x 60&nbsp;mm and supports USB power supply, 3.7&nbsp;V LiPo battery and 5&nbsp;V solar charging.

The board itself has the RAK4260 as its core, which is a module that utilizes ATSAMR34J18B SiP. The high level of integration allows for outstanding performance: Lora TX Power of up to 20&nbsp;dBm.

The board complies with LoRaWAN 1.0.2 specification, and it also supports LoRa P2P Point-to-Point communication. The low-power, long-range LoRa communication capabilities of the board make it suitable for a variety of applications in the IoT field such as home automation, sensor networks, building automation, and personal area networks applications such as health/fitness sensors and monitors.

### Features

- 32-bit ARM Cortex M0+ MCU and SX1276 LoRa transceiver
- RAK4260 @ 32&nbsp;MHz with 3.3&nbsp;V logic/power
- 32.768&nbsp;kHz crystal for clock generation & RTC
- 256&nbsp;KB flash memory + 40&nbsp;KB of RAM
- Hardware Serial, hardware I2C, hardware SPI support
- PWM outputs on all pins
- Programmable built-in LED for customized applications


## Specifications

### Overview  

 
The RAK4260 Evaluation Board front view (top) and back view are shown in **Figure 1**.

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/rak4260-top-back.png"
  width="70%"
  caption="RAK4260 Evaluation Board front and back view"
/>

<!-- 
#### Block Diagram

The block diagram of the RAK3244 BastWAN shows the various interfaces for the specific functionalities set in the product overview. <br><br>

<rk-img
  src="/assets/images/wisduo/bastwan/datasheet/rak3244-block-diagram.svg"
  width="80%"
  caption="RAK4260 Evaluation Board Block Diagram"
/>
-->
  
### Hardware

The hardware specification is categorized into five parts. It covers the interfaces, pin definitions and its corresponding functions. Also, it includes the RF requirements, electrical and mechanical parameters of the RAK4260 Evaluation Board.

#### Interfaces  
  
**Figure 2** shows an overview of interfaces found on the RAK4260 Evaluation Board.
  
<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/rak4260-interfaces.png"
  width="70%"
  caption="RAK4260 Evaluation Board Interface Overview"
/>
  
##### SWD Programming Interface

When programming via a DAPLink tool, it is required to have all of the following four (4) pins connected to your DAPLink tool:

1. **3V3**
2. **SWDIO**
3. **SWCLK**
4. **GND**

::: tip 📝 NOTE
For the aforementioned reason, it is best you leave these exposed for programming purposes and not to remap them as GPIOs.
:::    

 
### Flash the Firmware Using DAPLink and RAKDAP1

Refer to section [Flash the Firmware Using DAPLink and RAKDAP1](../Low-Level-Development/#flash-the-firmware-using-daplink-and-rakdap1).

##### RF Interface  
  
The RF pin of the RAK4260 Evaluation Board is connected to an external LoRa Antenna through a standard iPEX antenna connector.

:::warning ⚠️ WARNING
Before powering the RAK4260 Evaluation Board, you should install the LoRa antenna first. Not doing so might damage the board.
:::

##### USB Interface 


The Micro-B USB connector is compliant with the USB2.0 specification. The pin definition of the USB interface is shown below:

| **Pin Number** | **Pin Name | **Description**             |
| -------------- | ---------- | --------------------------- |
| 1              | USB_VBUS   | (+5&nbsp;V) USB Bus Voltage |
| 2              | USB_DM     | USB Bus D+ positive pin     |
| 3              | USB_DP     | USB Bus D- negative pin     |
| 4              | NC         | Not connected               |
| 5              | GND        | Ground                      |


<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/microb-usb.png"
  width="25%"
  caption="RAK4260 Micro-B USB connector"
/>

The USB data bus is connected to a **USB-SERIAL CH-340** chip. The **CH-340** is basically a USB bus convert chip that allows the USB to be converted to serial interface and serial interface pins converted to USB. 


#### Pin Definition

The following tables below shows the pin definitions of the RAK4260 Evaluation Board:

##### J10, J11, J12 2.54&nbsp;mm header

On the RAK4260 Evaluation Board, there are three 2.54&nbsp;mm pitch headers used for IO extension. Some data bus and signal from the MCU module are also connected to these headers, such as I2C, UART, ADC, etc.

##### J10 pin definition

| **Pin Number** | **Pin Name | **Description**                      | **Microcontroller pin** |
| -------------- | ---------- | ------------------------------------ | ----------------------- |
| 1              | BOOT0      | Boot for ST MCU                      |                         |
| 2              | VDD        | Power supply generated by CPU module |                         |
| 3              | TX1        | UART3 TX pin                         | PA19                    |
| 4              | RX1        | UART3 RX pin                         | PA18                    |


##### J11 pin definition

| **Pin Number** | **Pin Name** | **Description**               | **Microcontroller pin** |
| -------------- | ------------ | ----------------------------- | ----------------------- |
| 1              | AIN0         | ADC input signal              | PA08                    |
| 2              | IO1          | General purpose IO            | PB22                    |
| 3              | IO2          | Power switch control of 3V3_S | PA15                    |
| 4              | GND          | Ground                        |                         |

:::tip 📝 NOTE
3V3_S is another 3.3&nbsp;V power supply that can be controlled on/off by MCU. Set IO2=0 when the sensor is not in use to save power.
:::

##### J12 pin definition

| **Pin Number** | **Pin Name** | **Description**                      | **Microcontroller pin** |
| -------------- | ------------ | ------------------------------------ | ----------------------- |
| 1              | GND          | Ground                               |                         |
| 2              | I2C1_SCL     | I2C clock                            | PA17                    |
| 3              | I2C1_SDA     | I2C data                             | PA16                    |
| 4              | VDD          | Power supply generated by CPU module |                         |

##### IO Module Connector pin definition

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/io-module-connector.png"
  width="35%"
  caption="RAK4260 IO Module Connector"
/>

| **Pin Number** | **Pin Name** | **Description**                                                                                            | **Microcontroller pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | VBAT         | Li-Ion Battery positive pin                                                                                |                         |
| 2              | VBAT         | Li-Ion Battery positive pin                                                                                |                         |
| 3              | GND          | Ground                                                                                                     |                         |
| 4              | GND          | Ground                                                                                                     |                         |
| 5              | 3V3          | 3.3&nbsp;V power supply                                                                                    |
| 6              | 3V3_S        | 3.3&nbsp;V power supply can be shutdown by CPU module                                                      |
| 7              | USB+         | USB Bus D+ positive pin                                                                                    | PA25                    |
| 8              | USB-         | USB Bus D- negative pin                                                                                    | PA24                    |
| 9              | VBUS         | 5&nbsp;V USB Bus Voltage                                                                                   |                         |
| 10             | SW1          | Switch signal for custom use                                                                               |                         |
| 11             | UART1_TX     | UART1 TX signal                                                                                            | PA04                    |
| 12             | UART1_RX     | UART1 RX signal                                                                                            | PA05                    |
| 13             | RESET        | Connected to the reset switch for MCU reset                                                                |                         |
| 14             | LED1         | Red LED for battery charge indicator                                                                       |                         |
| 15             | LED2         | Green LED for custom use                                                                                   | PA27                    |
| 16             | LED3         | BLue LED for custom use                                                                                    | PA06                    |
| 17             | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 18             | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 19             | I2C1_SDA     | I2C Data  Signal                                                                                           | PA17                    |
| 20             | I2C1_SCL     | I2C clock signal                                                                                           | PA16                    |
| 21             | AIN0         | Analog Input for ADC                                                                                       | PA08                    |
| 22             | AIN1         | Analog Input for ADC                                                                                       | PA09                    |
| 23             | BOOT0        | Boot for ST MCU                                                                                            |                         |
| 24             | NC           | Not connected                                                                                              |                         |
| 25             | SPI_CS       | SPI chip select signal                                                                                     | PA22                    |
| 26             | SPI_CLK      | SPI clock signal                                                                                           | PB23                    |
| 27             | SPI_MISO     | SPI MISO signal                                                                                            | PB02                    |
| 28             | SPI_MOSI     | SPI MISO signal                                                                                            | PA23                    |
| 29             | IO1          | General Purpose IO                                                                                         | PB22                    |
| 30             | IO2          | Power switch control of 3V3_S                                                                              | PA15                    |
| 31             | IO3          | General Purpose IO                                                                                         | PA14                    |
| 32             | IO4          | General Purpose IO                                                                                         |                         |
| 33             | TX1          | UART3 TX pin                                                                                               | PA19                    |
| 34             | RX1          | UART3 RX pin                                                                                               | PA18                    |
| 35             | I2C2_SDA     | The second set of I2C data signal                                                                          |                         |
| 36             | I2C2_SCL     | The second set of I2C clock signal                                                                         |                         |
| 37             | IO5          | General Purpose IO                                                                                         |                         |
| 38             | IO6          | General Purpose IO                                                                                         |                         |
| 39             | GND          | Ground                                                                                                     |                         |
| 40             | GND          | Ground                                                                                                     |                         |

##### Sensor Module Connector Pin Definition

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/sensor-module-connector.png"
  width="35%"
  caption="Sensor Module Connector"
/>

**Slot A**

| **Pin Number** | **Pin Name** | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | TX1          | UART3 TX pin                                                                                   | PA19                    |
| 2              | GND          | Ground                                                                                         |                         |
| 3              | SPI_CS       | SPI chip select signal                                                                         | PA22                    |
| 4              | SPI_CLK      | SPI clock signal                                                                               | PB23                    |
| 5              | SPI_MISO     | SPI MISO signal                                                                                | PB02                    |
| 6              | SPI_MOSI     | SPI MOSI signal                                                                                | PA23                    |
| 7              | I2C1_SCL     | I2C clock signal                                                                               | PA17                    |
| 8              | I2C1_SDA     | I2C data  signal                                                                               | PA16                    |
| 9              | VDD          | Controlled by CPU module.<br>Used to power sensor board if the MCU IO level is not 3.3&nbsp;V  |                         |
| 10             | IO2          | General Purpose IO                                                                             | PA15                    |
| 11             | 3V3_S        | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 12             | IO1          | General Purpose IO                                                                             | PB22                    |
| 13             | NC           | Not connected                                                                                  |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 15             | NC           | Not connected                                                                                  |                         |
| 16             | VDD          | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC           | Not connected                                                                                  |                         |
| 18             | NC           | Not connected                                                                                  |                         |
| 19             | NC           | Not connected                                                                                  |                         |
| 20             | NC           | Not connected                                                                                  |                         |
| 21             | NC           | Not connected                                                                                  |                         |
| 22             | NC           | Not connected                                                                                  |                         |
| 23             | GND          | Ground                                                                                         |                         |
| 24             | RX1          | UART3 RX pin                                                                                   | PA18                    |

**Slot B**


| **Pin Number** | **Pin Name** | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC           | Not connected                                                                                  |                         |
| 2              | GND          | Ground                                                                                         |                         |
| 3              | SPI_CS       | SPI Chip Select Pin                                                                            | PA22                    |
| 4              | SPI_CLK      | SPI Clock signal                                                                               | PB23                    |
| 5              | SPI_MISO     | SPI MISO  signal                                                                               | PB02                    |
| 6              | SPI_MOSI     | SPI MOSI  signal                                                                               | PA23                    |
| 7              | I2C1_SCL     | I2C Clock signal                                                                               | PA17                    |
| 8              | I2C1_SDA     | I2C Data  signal                                                                               | PA16                    |
| 9              | VDD          | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO1          | General Purpose IO                                                                             | PB22                    |
| 11             | 3V3_S        | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 12             | IO2          | General Purpose IO                                                                             | PA15                    |
| 13             | NC           | Not connected                                                                                  |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply can be shutdown by CPU module                                          |                         |
| 15             | NC           | Not connected                                                                                  |                         |
| 16             | VDD          | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC           | Not connected                                                                                  |                         |
| 18             | NC           | Not connected                                                                                  |                         |
| 19             | NC           | Not connected                                                                                  |                         |
| 20             | NC           | Not connected                                                                                  |                         |
| 21             | NC           | Not connected                                                                                  |                         |
| 22             | NC           | Not connected                                                                                  |                         |
| 23             | GND          | Ground                                                                                         |                         |
| 24             | NC           | Not connected                                                                                  |                         |

**Slot C**


| **Pin Number** | **Pin Name** | **Description**                                                                                | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC           | Not connected                                                                                  |                         |
| 2              | GND          | Ground                                                                                         |                         |
| 3              | SPI_CS       | SPI Chip Select Pin                                                                            | PA22                    |
| 4              | SPI_CLK      | SPI Clock Pin                                                                                  | PB23                    |
| 5              | SPI_MISO     | SPI MISO signal                                                                                | PB02                    |
| 6              | SPI_MOSI     | SPI MOSI signal                                                                                | PA23                    |
| 7              | I2C1_SCL     | I2C Clock signal                                                                               | PA17                    |
| 8              | I2C1_SDA     | I2C Data  signal                                                                               | PA16                    |
| 9              | VDD          | Controlled by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO4          | General Purpose IO                                                                             |                         |
| 11             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                         |                         |
| 12             | IO5          | General Purpose IO                                                                             |                         |
| 13             | NC           | Not connected                                                                                  |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                         |                         |
| 15             | NC           | Not connected                                                                                  |                         |
| 16             | VDD          | Controlled by CPU module.<br>Used to power sensor board if the MCU IO level is not 3.3&nbsp;V  |                         |
| 17             | NC           | Not connected                                                                                  |                         |
| 18             | NC           | Not connected                                                                                  |                         |
| 19             | NC           | Not connected                                                                                  |                         |
| 20             | NC           | Not connected                                                                                  |                         |
| 21             | NC           | Not connected                                                                                  |                         |
| 22             | NC           | Not connected                                                                                  |                         |
| 23             | GND          | Ground                                                                                         |                         |
| 24             | NC           | Not connected                                                                                  |                         |


**Slot D**


| **Pin Number** | **Pin Name** | **Description**                                                                                            | **Microcontroller Pin** |
| -------------- | ------------ | ---------------------------------------------------------------------------------------------------------- | ----------------------- |
| 1              | NC           | Not connected                                                                                              |                         |
| 2              | GND          | Ground                                                                                                     |                         |
| 3              | SPI_CS       | SPI Chip Select Pin                                                                                        | PA22                    |
| 4              | SPI_CLK      | SPI Clock Pin                                                                                              | PB23                    |
| 5              | SPI_MISO     | SPI MISO signal                                                                                            | PB02                    |
| 6              | SPI_MOSI     | SPI MOSI signal                                                                                            | PA23                    |
| 7              | I2C1_SCL     | I2C Clock signal                                                                                           | PA17                    |
| 8              | I2C1_SDA     | I2C Data signal                                                                                            | PA16                    |
| 9              | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 10             | IO6          | General Purpose IO                                                                                         |                         |
| 11             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                                     |                         |
| 12             | IO5          | General Purpose IO                                                                                         |                         |
| 13             | NC           | Not connected                                                                                              |                         |
| 14             | 3V3_S        | 3.3&nbsp;V power supply, can be shutdown by CPU module                                                     |                         |
| 15             | NC           | Not connected                                                                                              |                         |
| 16             | VDD          | Power supply generated by CPU module.<br> Used to power sensor board if the MCU IO level is not 3.3&nbsp;V |                         |
| 17             | NC           | Not connected                                                                                              |                         |
| 18             | NC           | Not connected                                                                                              |                         |
| 19             | NC           | Not connected                                                                                              |                         |
| 20             | NC           | Not connected                                                                                              |                         |
| 21             | NC           | Not connected                                                                                              |                         |
| 22             | NC           | Not connected                                                                                              |                         |
| 23             | GND          | Ground                                                                                                     |                         |
| 24             | NC           | Not connected                                                                                              |                         |

<!--

| **Pin Number** | **Connector** |
| -------------- | ------------- | ---------- |
| 1              |               | A          |
| 2              |               | Ground     | A, B, C, D                                                                         |
| 3              |               | A, B, C, D | SPI Chip Select Pin                                                                |
| 4              |               | A, B, C, D | SPI Clock Pin                                                                      |
| 5              | SPI_MISO      |            |                                                                                    |
| 6              | SPI_MOSI      |            |                                                                                    |
| 7              | I2C1_SCL      |            |                                                                                    |
| 8              | I2C1_SDA      |            |                                                                                    |
| 9              | VDD           |            |                                                                                    |
| 10             |               |            |                                                                                    |
| 11             | 3V3_S         | A, B, C, D | 3.3V power supply, can be shutdown by CPU module                                   |
| 12             |               |            |                                                                                    |
| 13             |               |            |                                                                                    |
| 14             | 3V3_S         | A, B, C, D | 3.3V power supply, can be shutdown by CPU module                                   |
| 15             | NC            |            | Not connected                                                                      |
| 16             | VDD           |            | Generate by CPU module, use for power sensor board if the MCU IO level is not 3.3V |
| 17             | NC            |            | Not connected                                                                      |
| 18             | NC            |            | Not connected                                                                      |
| 19             | NC            |            | Not connected                                                                      |
| 20             | NC            |            | Not connected                                                                      |
| 21             | NC            |            | Not connected                                                                      |
| 22             | NC            |            | Not connected                                                                      |
| 23             | GND           | Ground     | A, B, C, D                                                                         |
| 24             | RXD1          | A          | UART RX signal on Connector A                                                      |

-->

##### Battery Connector

The pin definition of the RAK4260 Evaluation Board Li-Ion battery connector is shown in the table below.
The matching connector for the battery wires is an [JST PHR-2 2&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=199).

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | GND          | Ground                        |
| 2       | VBAT         | Positive + pin of the battery |


The full specification of the RAK4260 Evaluation Board battery is shown in the table below.


| **No.** | **Item**                  | **Specification**                    |
| ------- | ------------------------- | ------------------------------------ |
| 1       | Charge Cut-off Voltage    | 4.2&nbsp;V                           |
| 2       | Nominal Voltage           | 3.7&nbsp;V                           |
| 3       | Discharge Cut-off Voltage | 2.75&nbsp;V                          |
| 4       | Typical Capacity          | 2650&nbsp;mAh                        |
| 5       | Max Discharge Current     | 0.5&nbsp;C at 25&nbsp;℃ to 45&nbsp;℃ |
| 6       | PH Connector              | 2.0&nbsp;mm pitch                    |
| 7       | Cable Length              | 110.0±3.0&nbsp;mm                    |
| 8       | Cable Color               | Red: VBAT, Black: GND                |



:::tip 📝 NOTE
The voltage of the Li-Ion battery **must not exceed 4.3&nbsp;V**.
When connecting the battery make sure the polarity is correct. Not all connectors are wired the same.
:::

##### Solar Panel Connector

The pin definition of the RAK4260 Evaluation Board solar panel connector is shown in the table below.
The matching connector for the solar panel wires is an [JST ZHR-2 1.5&nbsp;mm pitch female](https://www.jst-mfg.com/product/detail_e.php?series=287)

| **Pin** | **Pin Name** | **Description**               |
| ------- | ------------ | ----------------------------- |
| 1       | C0NN_5V      | Positive + pin of solar panel |
| 2       | GND          | GND                           |


The full specification of the Solar Panel for the RAK4260 Evaluation Board is shown in the table below.


| **No.** | **Item**        | **Specification**                                        |
| ------- | --------------- | -------------------------------------------------------- |
| 1       | Nominal Voltage | 5&nbsp;V                                                 |
| 2       | Typical Current | 80&nbsp;mA                                               |
| 3       | Size            | Length: 60&nbsp;mm, Width: 60&nbsp;mm, Height: 2&nbsp;mm |
| 4       | Connector       | 1.5&nbsp;mm pitch                                        |
| 5       | Cable Color     | Red: C0NN_5V, Black: GND                                 |

:::tip 📝 NOTE
The output of the solar panel **must not exceed 5.5&nbsp;V**. Otherwise, it may cause permanent damage to the board.
:::

##### LEDs

Three LEDs are used to indicate the operating status. Below are the functions of the LEDs:

- 🔴 **Red LED** - connected to the charger chip to indicate the charger status. When the battery is charging, this red LED is on. When the battery is full, this LED is weak light or off.
- 🟢 **Green LED** - connected to the MCU module pin PA27.
- 🔵 **Blue LED** - connected to the MCU module pin PA06.

##### RESET Button

The reset push button is connected to the reset pin of the RAK4260. When pushed, it resets the MCU.

##### TXCO Power Pin Definition

The TXCO (Temperature compensated crystal oscillator) power pin is PB03.

##### RF Switch Pin Definition


| **BAND_SEL** | **TX/RX** |
| :----------: | :-------: |
|     PA13     |   RXTX    |


##### RF Switch control logic table

| **LoRa Mode** | **BAND_SEL** | **TX/RX** | **PA28** |
| :------------ | :----------: | :-------: | :------: |
| Shutdown      |      L       |     L     |    L     |
| PA_BOOST      |      L       |     H     |    H     |
| RFI_HF (RX)   |      H       |     L     |    H     |
| RFO_HF        |      H       |     H     |    H     |


:::tip 📝 NOTE
PA28 is RF Switch VDD pin<br>
H  = High level<br>
L  = Low level <br>
:::

#### RF Requirements  
  
##### Operating Frequencies  
  
The RAK4260 Evaluation Board supports the following LoRa bands:  
  
| Region        | Frequency (MHz) |
| ------------- | --------------- |
| Europe        | EU868           |
| North America | US915           |
| Australia     | AU915           |
| Asia          | AS923           |

<!-- 
##### Sensitivity Level  
  
The following charts show the receiving sensitivity of the RAK4260 Evaluation Board at 866&nbsp;Mhz operating frequency.<br><br>

  
<rk-img
  src="/assets/images/wisduo/bastwan/datasheet/rak3244_sensitivity1.png"
  width="80%"
  caption="RAK3244 BastWAN Breakout Board Sensitivity Levels"
/>

<br>

<rk-img
  src="/assets/images/wisduo/bastwan/datasheet/rak3244_sensitivity2.png"
  width="55%"
  caption="RAK3244 BastWAN Breakout Board Sensitivity Plot @ SF7"
/>

<br>

<rk-img
  src="/assets/images/wisduo/bastwan/datasheet/rak3244_sensitivity3.png"
  width="55%"
  caption="RAK3244 BastWAN Breakout Board Sensitivity Plot @ SF12"
/>


#### Electrical Characteristics

##### Power Consumption  
  
| Item                   | Power Consumption | Condition |
| ---------------------- | ----------------- | --------- |
| Output Power 20dB(MAX) | TBD               | -         |
| Output Power 17dB      | TBD               | -         |
| Output Power 14dB      | TBD               | -         |
| Receive mode           | TBD               | -         |
| Sleep mode             | TBD               | -         |

::: tip Note:
:pencil:TBD : To be disclosed
:::  
-->
#### Electrical Characteristics

##### Power Consumption

|                 Conditions                  | Current | Unit  |
| :-----------------------------------------: | :-----: | :---: |
|               Leakage current               |    2    |  uA   |
| Idle current (MCU and sensor in sleep mode) |   10    |  uA   |
| Working current (LoRa module transmitting)  |   130   |  mA   |



##### Absolute Maximum Ratings

Exposure to maximum rating conditions may affect device reliability.

| Ratings                       | Maximum Value  | Unit |
| ----------------------------- | -------------- | ---- |
| VBUS power supply on USB port | -0.3 - 5.5     | V    |
| VBAT battery voltage          | -0.3 - 4.3     | V    |
| C0NN_5V solar panel voltage   | -0.3 - 5.5     | V    |
| IO connector                  | -0.3 - VDD+0.3 | V    |
| ESD                           | 2000           | V    |


#### Mechanical Characteristics

##### Board Dimensions
  
**Figure 6** shows the actual dimensions of the RAK4260 Evaluation Board measured in millimeters (mm). <br><br>

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/rak4260-mechanical.png"
  width="100%"
  caption="RAK4260 Evaluation Board dimensions"
/>

#### Schematic Diagram

<rk-img
  src="/assets/images/wisduo/rak4260-evaluation-board/datasheet/schematic-diagram.png"
  width="100%"
  caption="RAK4260 WisDuo LPWAN Module Schematic Diagram"
/>

## Certification

<rk-certifications :params="$page.frontmatter.certifications" />
